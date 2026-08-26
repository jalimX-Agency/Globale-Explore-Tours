"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { extractR2Urls, cleanupOrphanedR2Urls, uploadToR2, R2_PUBLIC_URL } from "@/lib/r2";
import { experienceTypeFormSchema, type ExperienceTypeFormValues } from "./schema";

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

// Re-uploads an R2-hosted image under a fresh key, so a duplicated row never shares an R2
// object with its source — cleanupOrphanedR2Urls (used by every update/delete action) deletes
// whatever URL disappears from a row's own before/after diff without checking whether another
// row still references it, so two rows sharing one URL would let deleting either one silently
// break the other's image. Leaves non-R2 or already-empty values untouched.
async function duplicateImage(url: string, folder: string): Promise<string> {
  if (!url || !url.startsWith(R2_PUBLIC_URL + "/")) return url;
  const res = await fetch(url);
  if (!res.ok) return url; // source image missing — keep the (broken) reference rather than fail the whole duplicate
  const buffer = Buffer.from(await res.arrayBuffer());
  const contentType = res.headers.get("content-type") ?? "image/jpeg";
  const ext = url.split(".").pop()?.split(/[?#]/)[0] || "jpg";
  const key = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  await uploadToR2(key, buffer, contentType);
  return `${R2_PUBLIC_URL}/${key}`;
}

// Shallow duplicate: copies the parent's own content (scalar fields + its own contentBlocks/
// faqs) but never its children — a duplicated page starts as a plain new page, sub-pages are
// added afterward the same way as for any other new page.
export async function duplicateExperienceType(id: string) {
  await assertAdmin();
  const source = await db.experienceType.findUniqueOrThrow({
    where: { id },
    include: { contentBlocks: { orderBy: { order: "asc" } }, faqs: { orderBy: { order: "asc" } } },
  });

  let slug = `${source.slug}-copie`;
  let suffix = 2;
  while (await db.experienceType.findUnique({ where: { slug }, select: { id: true } })) {
    slug = `${source.slug}-copie-${suffix}`;
    suffix += 1;
  }

  const [cardImage, heroImage] = await Promise.all([
    duplicateImage(source.cardImage, "experiences"),
    duplicateImage(source.heroImage, "experiences"),
  ]);
  const contentBlocks = await Promise.all(
    source.contentBlocks.map(async (b) => ({
      section: b.section,
      title: b.title,
      titleEn: b.titleEn,
      titleEs: b.titleEs,
      description: b.description,
      descriptionEn: b.descriptionEn,
      descriptionEs: b.descriptionEs,
      image: await duplicateImage(b.image, "content-blocks"),
      ctaLabel: b.ctaLabel,
      ctaLabelEn: b.ctaLabelEn,
      ctaLabelEs: b.ctaLabelEs,
      ctaHref: b.ctaHref,
      order: b.order,
    }))
  );

  const created = await db.$transaction(async (tx) => {
    const row = await tx.experienceType.create({
      data: {
        slug,
        kind: source.kind,
        parentId: source.parentId,
        travelerTypeKey: source.travelerTypeKey,
        filterTheme: source.filterTheme,
        filterMonths: source.filterMonths,
        filterDestinationId: source.filterDestinationId,
        cardImage,
        cardTitle: source.cardTitle,
        cardTitleEn: source.cardTitleEn,
        cardTitleEs: source.cardTitleEs,
        cardDescription: source.cardDescription,
        cardDescriptionEn: source.cardDescriptionEn,
        cardDescriptionEs: source.cardDescriptionEs,
        heroImage,
        heroTitle: source.heroTitle,
        heroTitleEn: source.heroTitleEn,
        heroTitleEs: source.heroTitleEs,
        heroSubtitle: source.heroSubtitle,
        heroSubtitleEn: source.heroSubtitleEn,
        heroSubtitleEs: source.heroSubtitleEs,
        overviewTitle: source.overviewTitle,
        overviewTitleEn: source.overviewTitleEn,
        overviewTitleEs: source.overviewTitleEs,
        overviewBody: source.overviewBody,
        overviewBodyEn: source.overviewBodyEn,
        overviewBodyEs: source.overviewBodyEs,
        order: source.order,
      },
    });
    if (contentBlocks.length) {
      await tx.contentBlock.createMany({ data: contentBlocks.map((b) => ({ ...b, experienceTypeId: row.id })) });
    }
    if (source.faqs.length) {
      await tx.faq.createMany({
        data: source.faqs.map((f) => ({
          question: f.question,
          questionEn: f.questionEn,
          questionEs: f.questionEs,
          answer: f.answer,
          answerEn: f.answerEn,
          answerEs: f.answerEs,
          order: f.order,
          experienceTypeId: row.id,
        })),
      });
    }
    return row;
  }, { timeout: 15000 });

  revalidatePath("/admin/experiences");
  revalidatePath("/[locale]", "layout");
  return { id: created.id };
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
