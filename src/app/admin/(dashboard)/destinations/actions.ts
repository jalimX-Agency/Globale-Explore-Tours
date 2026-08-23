"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { extractR2Urls, cleanupOrphanedR2Urls } from "@/lib/r2";
import { destinationFormSchema, type DestinationFormValues } from "./schema";

async function assertAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

type TransactionClient = Parameters<Parameters<typeof db.$transaction>[0]>[0];

// Content blocks / team members / FAQs are simple leaf rows with no children and nothing
// external references their ids, so the cheapest correct way to sync them on every save
// is: delete all existing rows for this destination, then recreate them from the form —
// no diffing needed, and it can't leave orphans.
async function syncChildren(destinationId: string, values: DestinationFormValues, tx: TransactionClient) {
  await tx.contentBlock.deleteMany({ where: { destinationId } });
  await tx.teamMember.deleteMany({ where: { destinationId } });
  await tx.faq.deleteMany({ where: { destinationId } });

  // The form splits content blocks into three per-section arrays (see schema.ts) so the
  // "Contenu" tab can render them as separate always-visible sections instead of one flat
  // list with a section picker; `order` only needs to be meaningful within each section
  // since the public page always filters by section before sorting.
  const sectionedBlocks = [
    ...values.seeAndDoBlocks.map((b, i) => ({ ...b, section: "seeAndDo" as const, order: i })),
    ...values.bestOfBlocks.map((b, i) => ({ ...b, section: "bestOf" as const, order: i })),
    ...values.clientLovedBlocks.map((b, i) => ({ ...b, section: "clientLoved" as const, order: i })),
  ];
  if (sectionedBlocks.length) {
    await tx.contentBlock.createMany({
      data: sectionedBlocks.map((b) => ({ ...b, destinationId })),
    });
  }
  if (values.teamMembers.length) {
    await tx.teamMember.createMany({
      data: values.teamMembers.map((m, i) => ({ ...m, destinationId, order: i })),
    });
  }
  if (values.faqs.length) {
    await tx.faq.createMany({
      data: values.faqs.map((f, i) => ({ ...f, destinationId, order: i })),
    });
  }
}

export async function createDestination(raw: DestinationFormValues) {
  await assertAdmin();
  const values = destinationFormSchema.parse(raw);

  // Neon's serverless compute can cold-start on a connection that's been idle for a
  // while (very plausible for an admin tool used sporadically through the day), which
  // alone can eat several seconds — comfortably enough to blow past Prisma's 5s default
  // interactive-transaction timeout on a write this size. 15s gives the cold start room
  // without masking a truly stuck transaction.
  const destination = await db.$transaction(async (tx) => {
    const created = await tx.destination.create({
      data: {
        name: values.name,
        nameEn: values.nameEn,
        nameEs: values.nameEs,
        slug: values.slug,
        region: values.region,
        regionEn: values.regionEn,
        regionEs: values.regionEs,
        regionSlug: values.regionSlug,
        description: values.description,
        descriptionEn: values.descriptionEn,
        descriptionEs: values.descriptionEs,
        overviewHeading: values.overviewHeading,
        overviewHeadingEn: values.overviewHeadingEn,
        overviewHeadingEs: values.overviewHeadingEs,
        descriptionMore: values.descriptionMore,
        descriptionMoreEn: values.descriptionMoreEn,
        descriptionMoreEs: values.descriptionMoreEs,
        heroImage: values.heroImage,
        order: values.order,
        featured: values.featured,
      },
    });
    await syncChildren(created.id, values, tx);
    return created;
  }, { timeout: 15000 });

  revalidatePath("/admin/destinations");
  // Public pages live under /[locale]/... in all three languages, plus the nav (rendered
  // in the shared layout) lists every destination — revalidating the whole locale layout
  // tree is simpler and more robust than enumerating every literal locale/page path.
  revalidatePath("/[locale]", "layout");
  redirect(`/admin/destinations/${destination.id}`);
}

export async function updateDestination(id: string, raw: DestinationFormValues) {
  await assertAdmin();
  const values = destinationFormSchema.parse(raw);

  // Snapshot every R2 URL this destination references before the write (hero image, content
  // block images, team photos) so anything removed or replaced can be cleaned up from R2
  // once the save has actually succeeded.
  const before = await db.destination.findUnique({
    where: { id },
    include: { contentBlocks: true, team: true },
  });

  // See the matching comment in createDestination above for why this needs a longer
  // timeout than Prisma's 5s default.
  await db.$transaction(async (tx) => {
    await tx.destination.update({
      where: { id },
      data: {
        name: values.name,
        nameEn: values.nameEn,
        nameEs: values.nameEs,
        slug: values.slug,
        region: values.region,
        regionEn: values.regionEn,
        regionEs: values.regionEs,
        regionSlug: values.regionSlug,
        description: values.description,
        descriptionEn: values.descriptionEn,
        descriptionEs: values.descriptionEs,
        overviewHeading: values.overviewHeading,
        overviewHeadingEn: values.overviewHeadingEn,
        overviewHeadingEs: values.overviewHeadingEs,
        descriptionMore: values.descriptionMore,
        descriptionMoreEn: values.descriptionMoreEn,
        descriptionMoreEs: values.descriptionMoreEs,
        heroImage: values.heroImage,
        order: values.order,
        featured: values.featured,
      },
    });
    await syncChildren(id, values, tx);
  }, { timeout: 15000 });

  if (before) await cleanupOrphanedR2Urls(extractR2Urls(before), extractR2Urls(values));

  revalidatePath("/admin/destinations");
  revalidatePath("/[locale]", "layout");
}

export async function deleteDestination(id: string) {
  await assertAdmin();
  const before = await db.destination.findUnique({
    where: { id },
    include: { contentBlocks: true, team: true },
  });

  await db.destination.delete({ where: { id } });

  if (before) await cleanupOrphanedR2Urls(extractR2Urls(before), new Set());

  revalidatePath("/admin/destinations");
  revalidatePath("/[locale]", "layout");
}

export async function getRegionOptions() {
  const rows = await db.destination.findMany({
    distinct: ["regionSlug"],
    select: { regionSlug: true, region: true, regionEn: true, regionEs: true },
    orderBy: { regionSlug: "asc" },
  });
  return rows;
}
