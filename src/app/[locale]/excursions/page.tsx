import type { Metadata } from "next";
import { db } from "@/lib/db";
import { ExcursionsClient } from "./ExcursionsClient";

export const metadata: Metadata = {
  title: "Excursions & Circuits",
};

const VALID_THEMES = ["adventure", "culture", "relax", "family"];
const VALID_TRAVELERS = ["family", "couples", "groups", "honeymoon", "solo"];

export default async function ExcursionsPage({
  searchParams,
}: {
  searchParams: Promise<{ theme?: string; travelers?: string }>;
}) {
  const { theme, travelers } = await searchParams;
  const activeTheme = VALID_THEMES.includes(theme ?? "") ? theme : undefined;
  const activeTravelers = VALID_TRAVELERS.includes(travelers ?? "") ? travelers : undefined;

  const tours = await db.tour.findMany({
    where: {
      ...(activeTheme && { theme: activeTheme }),
      ...(activeTravelers && { travelerTypes: { contains: activeTravelers } }),
    },
    orderBy: [{ destinationId: "asc" }, { order: "asc" }],
    select: {
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
    },
  });

  return <ExcursionsClient tours={tours} activeTheme={activeTheme} activeTravelers={activeTravelers} />;
}
