import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { TourForm } from "../tour-form";
import type { TourFormValues } from "../schema";

const emptyValues: TourFormValues = {
  name: "",
  nameEn: "",
  nameEs: "",
  slug: "",
  tagline: "",
  taglineEn: "",
  taglineEs: "",
  description: "",
  descriptionEn: "",
  descriptionEs: "",
  longDescription: "",
  longDescriptionEn: "",
  longDescriptionEs: "",
  price: 0,
  originalPrice: 0,
  currency: "EUR",
  duration: "",
  durationEn: "",
  durationEs: "",
  includes: "",
  includesEn: "",
  includesEs: "",
  category: "",
  theme: "",
  travelerTypes: "",
  maxGuests: 2,
  departureFrom: "Agadir",
  image: "",
  images: "",
  featured: false,
  order: 0,
  format: "standard",
  mapImage: "",
  whenLabel: "",
  whenLabelEn: "",
  whenLabelEs: "",
  sections: [],
  hotels: [],
  chapters: [],
};

export default async function NewTourPage({
  searchParams,
}: {
  searchParams: Promise<{ destinationId?: string }>;
}) {
  const { destinationId } = await searchParams;
  if (!destinationId) notFound();

  const destination = await db.destination.findUnique({
    where: { id: destinationId },
    select: { id: true, name: true },
  });
  if (!destination) notFound();

  return <TourForm destination={destination} defaultValues={emptyValues} />;
}
