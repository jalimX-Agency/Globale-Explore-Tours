import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { ExperienceTypeForm } from "../experience-form";
import type { ExperienceTypeFormValues } from "../schema";

export default async function EditExperienceTypePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const experienceType = await db.experienceType.findUnique({
    where: { id },
    include: {
      contentBlocks: { orderBy: { order: "asc" } },
      faqs: { orderBy: { order: "asc" } },
    },
  });

  if (!experienceType) notFound();

  const defaultValues: ExperienceTypeFormValues = {
    slug: experienceType.slug,
    travelerTypeKey: (["family", "couples", "groups", "honeymoon", "solo"] as const).includes(
      experienceType.travelerTypeKey as never
    )
      ? (experienceType.travelerTypeKey as ExperienceTypeFormValues["travelerTypeKey"])
      : "family",
    heroImage: experienceType.heroImage,
    heroTitle: experienceType.heroTitle,
    heroTitleEn: experienceType.heroTitleEn,
    heroTitleEs: experienceType.heroTitleEs,
    heroSubtitle: experienceType.heroSubtitle,
    heroSubtitleEn: experienceType.heroSubtitleEn,
    heroSubtitleEs: experienceType.heroSubtitleEs,
    overviewTitle: experienceType.overviewTitle,
    overviewTitleEn: experienceType.overviewTitleEn,
    overviewTitleEs: experienceType.overviewTitleEs,
    overviewBody: experienceType.overviewBody,
    overviewBodyEn: experienceType.overviewBodyEn,
    overviewBodyEs: experienceType.overviewBodyEs,
    order: experienceType.order,
    bestDestinations: experienceType.contentBlocks
      .filter((b) => b.section === "bestDestinations")
      .map((b) => ({
        title: b.title,
        titleEn: b.titleEn,
        titleEs: b.titleEs,
        description: b.description,
        descriptionEn: b.descriptionEn,
        descriptionEs: b.descriptionEs,
        image: b.image,
        ctaHref: b.ctaHref,
      })),
    reassurance: experienceType.contentBlocks
      .filter((b) => b.section === "reassurance")
      .map((b) => ({
        title: b.title,
        titleEn: b.titleEn,
        titleEs: b.titleEs,
        description: b.description,
        descriptionEn: b.descriptionEn,
        descriptionEs: b.descriptionEs,
      })),
    faqs: experienceType.faqs.map((f) => ({
      question: f.question,
      questionEn: f.questionEn,
      questionEs: f.questionEs,
      answer: f.answer,
      answerEn: f.answerEn,
      answerEs: f.answerEs,
    })),
  };

  return <ExperienceTypeForm experienceTypeId={experienceType.id} defaultValues={defaultValues} />;
}
