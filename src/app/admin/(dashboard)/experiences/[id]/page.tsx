import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { ExperienceTypeForm } from "../experience-form";
import type { ExperienceTypeFormValues } from "../schema";

export default async function EditExperienceTypePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [experienceType, trips, destinations] = await Promise.all([
    db.experienceType.findUnique({
      where: { id },
      include: {
        contentBlocks: { orderBy: { order: "asc" } },
        faqs: { orderBy: { order: "asc" } },
      },
    }),
    db.tour.findMany({
      orderBy: { name: "asc" },
      take: 1000, // defensive cap — the "Voyages" picker needs the full catalog, not a partial view
      select: {
        id: true,
        name: true,
        travelerTypes: true,
        destination: { select: { name: true, region: true, regionSlug: true } },
      },
    }),
    db.destination.findMany({ orderBy: { name: "asc" }, select: { id: true, slug: true, name: true, regionSlug: true } }),
  ]);

  if (!experienceType) notFound();

  const defaultValues: ExperienceTypeFormValues = {
    slug: experienceType.slug,
    kind: experienceType.kind === "what" ? "what" : "who",
    travelerTypeKey: experienceType.travelerTypeKey,
    filterTheme: experienceType.filterTheme,
    filterDestinationId: experienceType.filterDestinationId ?? "",
    cardImage: experienceType.cardImage,
    cardTitle: experienceType.cardTitle,
    cardTitleEn: experienceType.cardTitleEn,
    cardTitleEs: experienceType.cardTitleEs,
    cardDescription: experienceType.cardDescription,
    cardDescriptionEn: experienceType.cardDescriptionEn,
    cardDescriptionEs: experienceType.cardDescriptionEs,
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

  const tripOptions = trips.map((t) => ({
    id: t.id,
    name: t.name,
    destinationName: t.destination?.name ?? "",
    region: t.destination?.region ?? "",
    regionSlug: t.destination?.regionSlug ?? "",
    travelerTypes: t.travelerTypes,
  }));

  return (
    <ExperienceTypeForm
      experienceTypeId={experienceType.id}
      defaultValues={defaultValues}
      trips={tripOptions}
      destinations={destinations}
    />
  );
}
