"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { extractR2Urls, cleanupOrphanedR2Urls } from "@/lib/r2";
import { experienceTypeFormSchema, type ExperienceTypeFormValues } from "./schema";
import { SUB_PAGE_TEMPLATES } from "./subPageTemplates";

async function assertAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

type TransactionClient = Parameters<Parameters<typeof db.$transaction>[0]>[0];

// Same delete-all-then-recreate approach as destinations/actions.ts: these are simple leaf
// rows with no children and nothing external references their ids.
async function syncChildren(experienceTypeId: string, values: ExperienceTypeFormValues, tx: TransactionClient) {
  await tx.contentBlock.deleteMany({ where: { experienceTypeId } });
  await tx.faq.deleteMany({ where: { experienceTypeId } });

  const destinationBlocks = values.bestDestinations.map((d, order) => ({
    experienceTypeId,
    section: "bestDestinations",
    title: d.title,
    titleEn: d.titleEn,
    titleEs: d.titleEs,
    description: d.description,
    descriptionEn: d.descriptionEn,
    descriptionEs: d.descriptionEs,
    image: d.image,
    ctaHref: d.ctaHref,
    order,
  }));
  const reassuranceBlocks = values.reassurance.map((r, order) => ({
    experienceTypeId,
    section: "reassurance",
    title: r.title,
    titleEn: r.titleEn,
    titleEs: r.titleEs,
    description: r.description,
    descriptionEn: r.descriptionEn,
    descriptionEs: r.descriptionEs,
    order,
  }));
  if (destinationBlocks.length || reassuranceBlocks.length) {
    await tx.contentBlock.createMany({ data: [...destinationBlocks, ...reassuranceBlocks] });
  }
  if (values.faqs.length) {
    await tx.faq.createMany({ data: values.faqs.map((f, order) => ({ ...f, experienceTypeId, order })) });
  }
}

export async function createExperienceType(raw: ExperienceTypeFormValues) {
  await assertAdmin();
  const values = experienceTypeFormSchema.parse(raw);

  const experienceType = await db.$transaction(async (tx) => {
    const created = await tx.experienceType.create({
      data: {
        slug: values.slug,
        kind: values.kind,
        parentId: values.parentId || null,
        travelerTypeKey: values.travelerTypeKey,
        filterTheme: values.filterTheme,
        filterMonths: values.filterMonths,
        filterDestinationId: values.filterDestinationId || null,
        cardImage: values.cardImage,
        cardTitle: values.cardTitle,
        cardTitleEn: values.cardTitleEn,
        cardTitleEs: values.cardTitleEs,
        cardDescription: values.cardDescription,
        cardDescriptionEn: values.cardDescriptionEn,
        cardDescriptionEs: values.cardDescriptionEs,
        heroImage: values.heroImage,
        heroTitle: values.heroTitle,
        heroTitleEn: values.heroTitleEn,
        heroTitleEs: values.heroTitleEs,
        heroSubtitle: values.heroSubtitle,
        heroSubtitleEn: values.heroSubtitleEn,
        heroSubtitleEs: values.heroSubtitleEs,
        overviewTitle: values.overviewTitle,
        overviewTitleEn: values.overviewTitleEn,
        overviewTitleEs: values.overviewTitleEs,
        overviewBody: values.overviewBody,
        overviewBodyEn: values.overviewBodyEn,
        overviewBodyEs: values.overviewBodyEs,
        order: values.order,
      },
    });
    await syncChildren(created.id, values, tx);
    return created;
  }, { timeout: 15000 });

  revalidatePath("/admin/experiences");
  revalidatePath("/[locale]", "layout");
  redirect(`/admin/experiences/${experienceType.id}`);
}

export async function updateExperienceType(id: string, raw: ExperienceTypeFormValues) {
  await assertAdmin();
  const values = experienceTypeFormSchema.parse(raw);

  const before = await db.experienceType.findUnique({
    where: { id },
    include: { contentBlocks: true },
  });

  await db.$transaction(async (tx) => {
    await tx.experienceType.update({
      where: { id },
      data: {
        slug: values.slug,
        kind: values.kind,
        parentId: values.parentId || null,
        travelerTypeKey: values.travelerTypeKey,
        filterTheme: values.filterTheme,
        filterMonths: values.filterMonths,
        filterDestinationId: values.filterDestinationId || null,
        cardImage: values.cardImage,
        cardTitle: values.cardTitle,
        cardTitleEn: values.cardTitleEn,
        cardTitleEs: values.cardTitleEs,
        cardDescription: values.cardDescription,
        cardDescriptionEn: values.cardDescriptionEn,
        cardDescriptionEs: values.cardDescriptionEs,
        heroImage: values.heroImage,
        heroTitle: values.heroTitle,
        heroTitleEn: values.heroTitleEn,
        heroTitleEs: values.heroTitleEs,
        heroSubtitle: values.heroSubtitle,
        heroSubtitleEn: values.heroSubtitleEn,
        heroSubtitleEs: values.heroSubtitleEs,
        overviewTitle: values.overviewTitle,
        overviewTitleEn: values.overviewTitleEn,
        overviewTitleEs: values.overviewTitleEs,
        overviewBody: values.overviewBody,
        overviewBodyEn: values.overviewBodyEn,
        overviewBodyEs: values.overviewBodyEs,
        order: values.order,
      },
    });
    await syncChildren(id, values, tx);
  }, { timeout: 15000 });

  if (before) await cleanupOrphanedR2Urls(extractR2Urls(before), extractR2Urls(values));

  revalidatePath("/admin/experiences");
  revalidatePath("/[locale]", "layout");
}

// Deleting a page cascades to its sub-pages (onDelete: Cascade on parentId) — so the R2
// cleanup snapshot has to cover the whole subtree's images too, not just this one row's,
// otherwise a deleted parent's children's card/hero images would leak as orphans.
export async function deleteExperienceType(id: string) {
  await assertAdmin();
  const before = await db.experienceType.findUnique({
    where: { id },
    include: { contentBlocks: true, children: { include: { contentBlocks: true } } },
  });

  await db.experienceType.delete({ where: { id } });

  if (before) await cleanupOrphanedR2Urls(extractR2Urls(before), new Set());

  revalidatePath("/admin/experiences");
  revalidatePath("/[locale]", "layout");
}

// One-click bulk creation for the known sub-page sets (see subPageTemplates.ts) — saves the
// admin from manually creating a dozen near-identical child pages one at a time. Skips any
// leaf slug that already exists under this parent (safe to click again after a partial run).
export async function createStandardSubPages(parentId: string, templateKey: string) {
  await assertAdmin();
  const template = SUB_PAGE_TEMPLATES[templateKey];
  if (!template) throw new Error("Modèle de sous-pages inconnu");

  const parent = await db.experienceType.findUniqueOrThrow({ where: { id: parentId } });
  const existingSlugs = new Set(
    (await db.experienceType.findMany({ where: { parentId }, select: { slug: true } })).map((r) => r.slug)
  );

  const rows = template
    .map((item) => ({ ...item, slug: `${parent.slug}/${item.leafSlug}` }))
    .filter((item) => !existingSlugs.has(item.slug));

  if (rows.length) {
    await db.experienceType.createMany({
      data: rows.map((item, i) => ({
        slug: item.slug,
        kind: parent.kind,
        parentId: parent.id,
        travelerTypeKey: parent.kind === "who" && !item.filterTheme && !item.filterMonths ? parent.travelerTypeKey : "",
        filterTheme: item.filterTheme ?? "",
        filterMonths: item.filterMonths ?? "",
        cardTitle: item.cardTitle,
        heroTitle: item.heroTitle,
        order: i,
      })),
    });
  }

  revalidatePath("/admin/experiences");
  revalidatePath("/[locale]", "layout");
  return { created: rows.length, skipped: template.length - rows.length };
}

// Which trips "belong" to a traveler-type page isn't a separate relation — it's whichever
// Tour rows have this key inside their comma-separated `travelerTypes` string (same field
// already editable, as free text, on the Tour form). This toggles that key on/off a single
// tour's list so the experience page's "Voyages" tab can manage matches without asking staff
// to hand-edit the raw comma list themselves.
export async function toggleTourTravelerType(tourId: string, travelerTypeKey: string, included: boolean) {
  await assertAdmin();
  const tour = await db.tour.findUniqueOrThrow({ where: { id: tourId }, select: { travelerTypes: true } });
  const current = tour.travelerTypes
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const next = included
    ? [...new Set([...current, travelerTypeKey])]
    : current.filter((t) => t !== travelerTypeKey);

  await db.tour.update({ where: { id: tourId }, data: { travelerTypes: next.join(",") } });
  revalidatePath("/admin/experiences");
  revalidatePath("/admin/tours");
  revalidatePath("/[locale]", "layout");
}
