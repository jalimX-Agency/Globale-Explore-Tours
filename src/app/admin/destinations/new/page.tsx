import { DestinationForm } from "../destination-form";
import { getRegionOptions } from "../actions";
import type { DestinationFormValues } from "../schema";

const emptyValues: DestinationFormValues = {
  name: "",
  nameEn: "",
  nameEs: "",
  slug: "",
  region: "",
  regionEn: "",
  regionEs: "",
  regionSlug: "",
  description: "",
  descriptionEn: "",
  descriptionEs: "",
  overviewHeading: "",
  overviewHeadingEn: "",
  overviewHeadingEs: "",
  descriptionMore: "",
  descriptionMoreEn: "",
  descriptionMoreEs: "",
  heroImage: "",
  order: 0,
  featured: true,
  seeAndDoBlocks: [],
  bestOfBlocks: [],
  clientLovedBlocks: [],
  teamMembers: [],
  faqs: [],
};

export default async function NewDestinationPage() {
  const regionOptions = await getRegionOptions();
  return <DestinationForm defaultValues={emptyValues} regionOptions={regionOptions} />;
}
