"use server";

import { db } from "@/lib/db";
import type { TourCardData } from "@/components/get/TourCard";
import { TRIP_FINDER_PAGE_SIZE, tripFinderWhere, tripFinderOrderBy, type TripFinderSort } from "./lib";

export async function fetchTripFinderResults(
  feeling: string | undefined,
  when: string | undefined,
  sort: TripFinderSort,
  page: number
): Promise<TourCardData[]> {
  const tours = await db.tour.findMany({
    where: tripFinderWhere(feeling, when),
    orderBy: tripFinderOrderBy(sort),
    skip: (page - 1) * TRIP_FINDER_PAGE_SIZE,
    take: TRIP_FINDER_PAGE_SIZE,
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
  });

  return tours.map(({ destination, ...t }) => ({
    ...t,
    destinationSlug: destination.slug,
    regionSlug: destination.regionSlug,
  }));
}

// Called by the client "Load more" button — appends the next page without touching the URL,
// same as the initial page.tsx load but page-number driven instead of searchParams-driven.
export async function loadMoreTripFinderResults(
  feeling: string | undefined,
  when: string | undefined,
  sort: TripFinderSort,
  page: number
): Promise<TourCardData[]> {
  return fetchTripFinderResults(feeling, when, sort, page);
}
