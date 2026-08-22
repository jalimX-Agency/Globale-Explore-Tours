import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { DestinationForm } from "../destination-form";
import { getRegionOptions } from "../actions";
import type { DestinationFormValues, ContentBlockValues } from "../schema";

type RawContentBlock = {
  section: string;
  title: string;
  titleEn: string;
  titleEs: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  image: string;
  ctaLabel: string;
  ctaLabelEn: string;
  ctaLabelEs: string;
  ctaHref: string;
};

// Splits the flat ContentBlock rows fetched from the DB into the three per-section arrays
// the form uses (see schema.ts) — the public page also just filters this same flat list by
// `section`, so this mirrors that grouping instead of introducing a new one.
function mapContentBlocks(blocks: RawContentBlock[], section: ContentBlockValues["section"]): ContentBlockValues[] {
  return blocks
    .filter((b) => b.section === section)
    .map((b) => ({
      section,
      title: b.title,
      titleEn: b.titleEn,
      titleEs: b.titleEs,
      description: b.description,
      descriptionEn: b.descriptionEn,
      descriptionEs: b.descriptionEs,
      image: b.image,
      ctaLabel: b.ctaLabel,
      ctaLabelEn: b.ctaLabelEn,
      ctaLabelEs: b.ctaLabelEs,
      ctaHref: b.ctaHref,
    }));
}

export default async function EditDestinationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [destination, regionOptions] = await Promise.all([
    db.destination.findUnique({
      where: { id },
      include: {
        contentBlocks: { orderBy: { order: "asc" } },
        team: { orderBy: { order: "asc" } },
        faqs: { orderBy: { order: "asc" } },
        tours: { select: { id: true, name: true, price: true, featured: true }, orderBy: { order: "asc" } },
      },
    }),
    getRegionOptions(),
  ]);

  if (!destination) notFound();

  const defaultValues: DestinationFormValues = {
    name: destination.name,
    nameEn: destination.nameEn,
    nameEs: destination.nameEs,
    slug: destination.slug,
    region: destination.region,
    regionEn: destination.regionEn,
    regionEs: destination.regionEs,
    regionSlug: destination.regionSlug,
    description: destination.description,
    descriptionEn: destination.descriptionEn,
    descriptionEs: destination.descriptionEs,
    overviewHeading: destination.overviewHeading,
    overviewHeadingEn: destination.overviewHeadingEn,
    overviewHeadingEs: destination.overviewHeadingEs,
    descriptionMore: destination.descriptionMore,
    descriptionMoreEn: destination.descriptionMoreEn,
    descriptionMoreEs: destination.descriptionMoreEs,
    heroImage: destination.heroImage,
    order: destination.order,
    featured: destination.featured,
    seeAndDoBlocks: mapContentBlocks(destination.contentBlocks, "seeAndDo"),
    bestOfBlocks: mapContentBlocks(destination.contentBlocks, "bestOf"),
    clientLovedBlocks: mapContentBlocks(destination.contentBlocks, "clientLoved"),
    teamMembers: destination.team.map((m) => ({
      name: m.name,
      role: m.role,
      roleEn: m.roleEn,
      roleEs: m.roleEs,
      photo: m.photo,
    })),
    faqs: destination.faqs.map((f) => ({
      question: f.question,
      questionEn: f.questionEn,
      questionEs: f.questionEs,
      answer: f.answer,
      answerEn: f.answerEn,
      answerEs: f.answerEs,
    })),
  };

  return (
    <DestinationForm
      destinationId={destination.id}
      defaultValues={defaultValues}
      regionOptions={regionOptions}
      relatedTours={destination.tours}
    />
  );
}
