"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
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
        travelerTypeKey: values.travelerTypeKey,
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

  await db.$transaction(async (tx) => {
    await tx.experienceType.update({
      where: { id },
      data: {
        slug: values.slug,
        travelerTypeKey: values.travelerTypeKey,
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

  revalidatePath("/admin/experiences");
  revalidatePath("/[locale]", "layout");
}

export async function deleteExperienceType(id: string) {
  await assertAdmin();
  await db.experienceType.delete({ where: { id } });
  revalidatePath("/admin/experiences");
  revalidatePath("/[locale]", "layout");
}
