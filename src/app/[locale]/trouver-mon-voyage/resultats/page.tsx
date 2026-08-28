import type { Metadata } from "next";
import { db } from "@/lib/db";
import { TripFinderResultsClient } from "@/components/get/TripFinderResultsClient";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { pageMetadata } from "@/lib/seo";
import { fetchTripFinderResults } from "./actions";
import { tripFinderWhere, type TripFinderSort } from "./lib";

const META = {
  fr: { title: "Résultats — Trouver mon voyage", description: "Découvrez les voyages sur-mesure qui correspondent à vos envies, filtrés selon vos préférences." },
  en: { title: "Results — Find my trip", description: "Discover the tailor-made trips that match what you're looking for, filtered to your preferences." },
  es: { title: "Resultados — Encontrar mi viaje", description: "Descubra los viajes a medida que coinciden con lo que busca, filtrados según sus preferencias." },
} as const satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return pageMetadata({ locale, path: "/trouver-mon-voyage/resultats", ...META[locale] });
}

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
    // Keyed by the filter/sort combo: without it, changing a filter or sort while already on
    // this page just re-renders the same client component instance with new props — its
    // `tours` state (seeded once from `initialTours` via useState) never re-syncs, so the
    // grid silently keeps showing the previous filter's results. The key forces a remount,
    // which re-seeds that state from the freshly-fetched `initialTours` for the new query.
    <TripFinderResultsClient
      key={`${feeling ?? ""}|${when ?? ""}|${sort}`}
      initialTours={tours}
      totalCount={totalCount}
      feeling={feeling ?? ""}
      when={when ?? ""}
      sort={sort}
    />
  );
}
