import { db } from "@/lib/db";
import { ExperienceTypeForm } from "../experience-form";
import type { ExperienceTypeFormValues } from "../schema";

const emptyValues: ExperienceTypeFormValues = {
  slug: "",
  kind: "who",
  parentId: "",
  travelerTypeKey: "family",
  filterTheme: "",
  filterMonths: "",
  filterDestinationId: "",
  cardImage: "",
  cardTitle: "",
  cardTitleEn: "",
  cardTitleEs: "",
  cardDescription: "",
  cardDescriptionEn: "",
  cardDescriptionEs: "",
  heroImage: "",
  heroTitle: "",
  heroTitleEn: "",
  heroTitleEs: "",
  heroSubtitle: "",
  heroSubtitleEn: "",
  heroSubtitleEs: "",
  overviewTitle: "",
  overviewTitleEn: "",
  overviewTitleEs: "",
  overviewBody: "",
  overviewBodyEn: "",
  overviewBodyEs: "",
  order: 0,
  bestDestinations: [],
  reassurance: [],
  faqs: [],
};

export default async function NewExperienceTypePage({
  searchParams,
}: {
  searchParams: Promise<{ parent?: string }>;
}) {
  const { parent: parentId } = await searchParams;

  const [destinations, allPages, parent] = await Promise.all([
    db.destination.findMany({
      orderBy: { name: "asc" },
      select: { id: true, slug: true, name: true, regionSlug: true },
    }),
    db.experienceType.findMany({
      where: { parentId: null },
      orderBy: { slug: "asc" },
      select: { id: true, slug: true, heroTitle: true, kind: true },
    }),
    parentId ? db.experienceType.findUnique({ where: { id: parentId }, select: { id: true, kind: true } }) : null,
  ]);

  const initialValues: ExperienceTypeFormValues = parent
    ? { ...emptyValues, parentId: parent.id, kind: parent.kind === "what" || parent.kind === "private" ? parent.kind : "who" }
    : emptyValues;

  return (
    <ExperienceTypeForm defaultValues={initialValues} destinations={destinations} parentOptions={allPages} />
  );
}
