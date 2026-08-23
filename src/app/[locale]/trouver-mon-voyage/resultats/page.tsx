import type { Metadata } from "next";
import { db } from "@/lib/db";
import { TripFinderResultsClient } from "@/components/get/TripFinderResultsClient";
import { fetchTripFinderResults } from "./actions";
import { tripFinderWhere, type TripFinderSort } from "./lib";

export const metadata: Metadata = {
  title: "Trip Finder — Résultats",
};

const VALID_SORTS: TripFinderSort[] = ["recommended", "price-asc", "price-desc"];

export default async function TripFinderResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ feeling?: string; when?: string; sort?: string }>;
}) {
  const { feeling, when, sort: sortParam } = await searchParams;
  const sort: TripFinderSort = VALID_SORTS.includes(sortParam as TripFinderSort)
    ? (sortParam as TripFinderSort)
    : "recommended";

  const [tours, totalCount] = await Promise.all([
    fetchTripFinderResults(feeling, when, sort, 1),
    db.tour.count({ where: tripFinderWhere(feeling, when) }),
  ]);

  return (
    <TripFinderResultsClient
      initialTours={tours}
      totalCount={totalCount}
      feeling={feeling ?? ""}
      when={when ?? ""}
      sort={sort}
    />
  );
}
