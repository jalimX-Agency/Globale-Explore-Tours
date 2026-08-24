import { db } from "@/lib/db";
import { ExperienceTypeForm } from "../experience-form";
import type { ExperienceTypeFormValues } from "../schema";

const emptyValues: ExperienceTypeFormValues = {
  slug: "",
  kind: "who",
  travelerTypeKey: "family",
  filterTheme: "",
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

export default async function NewExperienceTypePage() {
  const destinations = await db.destination.findMany({
    orderBy: { name: "asc" },
    select: { id: true, slug: true, name: true, regionSlug: true },
  });
  return <ExperienceTypeForm defaultValues={emptyValues} destinations={destinations} />;
}
