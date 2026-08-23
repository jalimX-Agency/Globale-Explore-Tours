"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { extractR2Urls, cleanupOrphanedR2Urls } from "@/lib/r2";
import { tourFormSchema, type TourFormValues } from "./schema";

async function assertAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

type TransactionClient = Parameters<Parameters<typeof db.$transaction>[0]>[0];

function tourData(values: TourFormValues) {
  return {
    name: values.name,
    nameEn: values.nameEn,
    nameEs: values.nameEs,
    slug: values.slug,
    tagline: values.tagline,
    taglineEn: values.taglineEn,
    taglineEs: values.taglineEs,
    description: values.description,
    descriptionEn: values.descriptionEn,
    descriptionEs: values.descriptionEs,
    longDescription: values.longDescription,
    longDescriptionEn: values.longDescriptionEn,
    longDescriptionEs: values.longDescriptionEs,
    price: values.price,
    originalPrice: values.originalPrice,
    currency: values.currency,
    duration: values.duration,
    durationEn: values.durationEn,
    durationEs: values.durationEs,
    includes: values.includes,
    includesEn: values.includesEn,
    includesEs: values.includesEs,
    category: values.category,
    theme: values.theme,
    travelerTypes: values.travelerTypes,
    maxGuests: values.maxGuests,
    departureFrom: values.departureFrom,
    image: values.image,
    images: values.images,
    featured: values.featured,
    order: values.order,
    format: values.format,
    mapImage: values.mapImage,
    whenLabel: values.whenLabel,
    whenLabelEn: values.whenLabelEn,
    whenLabelEs: values.whenLabelEs,
  };
}

// Sections/hotels/chapters+days are simple leaf rows with nothing external referencing
// their ids, so — same as destinations' syncChildren — the cheapest correct sync on every
// save is delete-then-recreate, no diffing needed.
//
// Chapters can't use a flat `createMany` like the others: each chapter's days need its
// freshly-generated id as `chapterId`, which only exists after the chapter row itself is
// created. So chapters are created one at a time, each immediately followed by its days.
//
// `itineraryDay` rows (both bare and chapter-linked) are deleted before chapters — bare
// ones have no chapter to cascade from, and this also sidesteps `ItineraryDay.tour` not
// declaring `onDelete: Cascade` (unlike TourSection/TourHotel/JourneyChapter, which do).
async function syncChildren(tourId: string, values: TourFormValues, tx: TransactionClient) {
  await tx.itineraryDay.deleteMany({ where: { tourId } });
  await tx.tourSection.deleteMany({ where: { tourId } });
  await tx.tourHotel.deleteMany({ where: { tourId } });
  await tx.journeyChapter.deleteMany({ where: { tourId } });

  if (values.sections.length) {
    await tx.tourSection.createMany({
      data: values.sections.map((s, i) => ({ ...s, tourId, order: i })),
    });
  }
  if (values.hotels.length) {
    await tx.tourHotel.createMany({
      data: values.hotels.map((h, i) => ({ ...h, tourId, order: i })),
    });
  }
  for (let i = 0; i < values.chapters.length; i++) {
    const { days, ...chapter } = values.chapters[i];
    const created = await tx.journeyChapter.create({
      data: { ...chapter, tourId, order: i },
    });
    if (days.length) {
      await tx.itineraryDay.createMany({
        data: days.map((d, j) => ({ ...d, tourId, chapterId: created.id, order: j })),
      });
    }
  }
}

export async function createTour(destinationId: string, raw: TourFormValues) {
  await assertAdmin();
  const values = tourFormSchema.parse(raw);

  const tour = await db.$transaction(
    async (tx) => {
      const created = await tx.tour.create({ data: { ...tourData(values), destinationId } });
      await syncChildren(created.id, values, tx);
      return created;
    },
    { timeout: 15000 }
  );

  revalidatePath("/admin/destinations");
  revalidatePath("/[locale]", "layout");
  redirect(`/admin/tours/${tour.id}`);
}

export async function updateTour(id: string, raw: TourFormValues) {
  await assertAdmin();
  const values = tourFormSchema.parse(raw);

  // Snapshot every R2 URL this tour references before the write, so any image/video the
  // admin removed or replaced (cover, gallery, chapter galleries, day photos...) can be
  // deleted from R2 once the save has actually succeeded — never before, so a removal never
  // orphans a still-saved DB pointer if the save itself fails.
  const before = await db.tour.findUnique({
    where: { id },
    include: { chapters: true, hotels: true, itineraryDays: true },
  });

  await db.$transaction(
    async (tx) => {
      await tx.tour.update({ where: { id }, data: tourData(values) });
      await syncChildren(id, values, tx);
    },
    { timeout: 15000 }
  );

  if (before) await cleanupOrphanedR2Urls(extractR2Urls(before), extractR2Urls(values));

  revalidatePath("/admin/destinations");
  revalidatePath("/[locale]", "layout");
}

export async function deleteTour(id: string) {
  await assertAdmin();
  const before = await db.tour.findUnique({
    where: { id },
    include: { chapters: true, hotels: true, itineraryDays: true },
  });

  // See the note on syncChildren above — itineraryDay rows must go before the tour itself
  // since that relation has no cascade rule.
  await db.$transaction(async (tx) => {
    await tx.itineraryDay.deleteMany({ where: { tourId: id } });
    await tx.tour.delete({ where: { id } });
  });

  if (before) await cleanupOrphanedR2Urls(extractR2Urls(before), new Set());

  revalidatePath("/admin/destinations");
  revalidatePath("/[locale]", "layout");
}
