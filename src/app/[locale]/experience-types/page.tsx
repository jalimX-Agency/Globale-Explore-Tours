import type { Metadata } from "next";
import { db } from "@/lib/db";
import { ExperiencesPageClient } from "./ExperiencesPageClient";

export const metadata: Metadata = {
  title: "Experiences | Tailor-Made Travel",
  description:
    "Find your perfect luxury travel experience. Browse by who you are, what you want to do, or how you want to feel.",
};

const TOUR_CARD_SELECT = {
  slug: true,
  name: true,
  nameEn: true,
  nameEs: true,
  tagline: true,
  taglineEn: true,
  taglineEs: true,
  price: true,
  originalPrice: true,
  currency: true,
  duration: true,
  durationEn: true,
  durationEs: true,
  theme: true,
  image: true,
  format: true,
  destination: { select: { slug: true, regionSlug: true } },
} as const;

export default async function ExperienceTypesPage() {
  const tours = await db.tour.findMany({
    orderBy: [{ featured: "desc" }, { order: "asc" }],
    take: 8,
    select: TOUR_CARD_SELECT,
  });

  const toursWithHref = tours.map((tour) => ({
    ...tour,
    destinationSlug: tour.destination?.slug,
    regionSlug: tour.destination?.regionSlug,
  }));

  return <ExperiencesPageClient tours={toursWithHref} />;
}
