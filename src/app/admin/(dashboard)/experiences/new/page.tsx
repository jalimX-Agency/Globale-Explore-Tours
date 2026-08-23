import { ExperienceTypeForm } from "../experience-form";
import type { ExperienceTypeFormValues } from "../schema";

const emptyValues: ExperienceTypeFormValues = {
  slug: "",
  travelerTypeKey: "family",
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

export default function NewExperienceTypePage() {
  return <ExperienceTypeForm defaultValues={emptyValues} />;
}
