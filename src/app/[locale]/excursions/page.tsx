import type { Metadata } from "next";
import { db } from "@/lib/db";
import { ExcursionsClient } from "./ExcursionsClient";

export const metadata: Metadata = {
  title: "Excursions & Circuits",
};

const VALID_THEMES = ["adventure", "culture", "relax", "family"];
const VALID_TRAVELERS = ["family", "couples", "groups", "honeymoon", "solo"];
const PAGE_SIZE = 24;

export default async function ExcursionsPage({
  searchParams,
}: {
  searchParams: Promise<{ theme?: string; travelers?: string; destination?: string; region?: string; page?: string }>;
}) {
  const { theme, travelers, destination, region, page: pageParam } = await searchParams;
  const activeTheme = VALID_THEMES.includes(theme ?? "") ? theme : undefined;
  const activeTravelers = VALID_TRAVELERS.includes(travelers ?? "") ? travelers : undefined;
  const page = Math.max(1, Number(pageParam) || 1);

  const [activeDestination, activeRegion] = await Promise.all([
    destination ? db.destination.findUnique({ where: { slug: destination }, select: { slug: true } }) : null,
    region ? db.destination.findFirst({ where: { regionSlug: region }, select: { regionSlug: true } }) : null,
  ]);

  const where = {
    ...(activeTheme && { theme: activeTheme }),
    ...(activeTravelers && { travelerTypes: { contains: activeTravelers } }),
    ...(activeDestination && { destination: { slug: activeDestination.slug } }),
    ...(activeRegion && { destination: { regionSlug: activeRegion.regionSlug } }),
  };

  const [tours, totalCount] = await Promise.all([
    db.tour.findMany({
      where,
      orderBy: [{ destinationId: "asc" }, { order: "asc" }],
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
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
        format: true,
        destination: { select: { slug: true, regionSlug: true } },
      },
    }),
    db.tour.count({ where }),
  ]);

  const toursWithHref = tours.map(({ destination, ...t }) => ({
    ...t,
    destinationSlug: destination.slug,
    regionSlug: destination.regionSlug,
  }));

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  // Preserve the active filters on every pagination link — only `page` changes.
  const baseParams = new URLSearchParams();
  if (activeTheme) baseParams.set("theme", activeTheme);
  if (activeTravelers) baseParams.set("travelers", activeTravelers);
  if (destination) baseParams.set("destination", destination);
  if (region) baseParams.set("region", region);

  return (
    <ExcursionsClient
      tours={toursWithHref}
      activeTheme={activeTheme}
      activeTravelers={activeTravelers}
      page={page}
      totalPages={totalPages}
      baseQuery={baseParams.toString()}
    />
  );
}
