import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { fr } from "@/lib/i18n/translations/fr";
import { en } from "@/lib/i18n/translations/en";
import { es } from "@/lib/i18n/translations/es";
import { JourneyTripPageClient } from "./JourneyTripPageClient";
import { StandardTripPageClient } from "@/components/get/StandardTripPageClient";
import { pageMetadata, breadcrumbJsonLd, touristTripJsonLd, SITE_URL } from "@/lib/seo";

const NAV_DESTINATIONS = { fr: fr.nav.destinations, en: en.nav.destinations, es: es.nav.destinations };

function pick(locale: Locale, frText: string, enText: string, esText: string) {
  if (locale === "en") return enText || frText;
  if (locale === "es") return esText || frText;
  return frText;
}

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

// Below this, a trip page backfills its "similar trips" list from the wider region — see the
// call site for why.
const MIN_SIMILAR_TOURS = 3;

export const revalidate = 3600;

// Pre-renders every trip at build time (337 today) instead of relying on on-demand ISR — same
// rationale as the region/country pages above. Generates the full {region, country, slug}
// triple itself (the "bottom-up" pattern) rather than composing with the parent's
// generateStaticParams — composition silently produced zero paths for this route in testing.
export async function generateStaticParams() {
  const tours = await db.tour.findMany({
    select: { slug: true, destination: { select: { slug: true, regionSlug: true } } },
  });
  return tours.map((t) => ({ region: t.destination.regionSlug, country: t.destination.slug, slug: t.slug }));
}

// Cached per-request so generateMetadata and the page body share one query instead of two.
const getTour = cache((slug: string) => {
  return db.tour.findUnique({
    where: { slug },
    include: {
      destination: true,
      chapters: {
        orderBy: { order: "asc" },
        include: { days: { orderBy: { order: "asc" } } },
      },
      sections: { orderBy: { order: "asc" } },
      hotels: { orderBy: { order: "asc" } },
      // Standard-format trips' day-by-day stops — only used for the TouristTrip schema's route.
      itineraryDays: {
        where: { chapterId: null },
        orderBy: [{ dayNumber: "asc" }, { order: "asc" }],
        select: { location: true, locationEn: true, locationEs: true },
      },
    },
  });
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; region: string; country: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, region: regionSlug, country, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const tour = await getTour(slug);
  if (!tour) return { title: "Trip" };
  const description = pick(locale, tour.description, tour.descriptionEn, tour.descriptionEs) || pick(locale, tour.tagline, tour.taglineEn, tour.taglineEs);
  return pageMetadata({
    locale,
    path: `/destinations/${regionSlug}/${country}/${slug}`,
    title: pick(locale, tour.name, tour.nameEn, tour.nameEs),
    description: description || undefined,
    image: tour.image || undefined,
  });
}

export default async function TripPage({
  params,
}: {
  params: Promise<{ locale: string; region: string; country: string; slug: string }>;
}) {
  const { locale: rawLocale, region: regionSlug, country, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const tour = await getTour(slug);
  if (!tour || tour.destination.slug !== country || tour.destination.regionSlug !== regionSlug) {
    notFound();
  }

  const sameDestinationTours = await db.tour.findMany({
    where: { destinationId: tour.destinationId, id: { not: tour.id } },
    orderBy: [{ featured: "desc" }, { order: "asc" }],
    take: 6,
    select: TOUR_CARD_SELECT,
  });

  // Most destinations carry only 1 trip today, which left this section — and every internal
  // link it provides — empty: a site crawl audit (2026-09-08) flagged dozens of those trip
  // pages as reachable from exactly one internal link (their destination hub) as a result.
  // Backfilling from the wider region gives every trip page real "similar trips" links again
  // without waiting on new trip content.
  const similarTours =
    sameDestinationTours.length >= MIN_SIMILAR_TOURS
      ? sameDestinationTours
      : [
          ...sameDestinationTours,
          ...(await db.tour.findMany({
            where: { destination: { regionSlug: tour.destination.regionSlug }, destinationId: { not: tour.destinationId } },
            orderBy: [{ featured: "desc" }, { order: "asc" }],
            take: 6 - sameDestinationTours.length,
            select: TOUR_CARD_SELECT,
          })),
        ];

  const regionLabel = pick(locale, tour.destination.region, tour.destination.regionEn, tour.destination.regionEs);
  const countryLabel = pick(locale, tour.destination.name, tour.destination.nameEn, tour.destination.nameEs);
  const tripLabel = pick(locale, tour.name, tour.nameEn, tour.nameEs);
  const destinationsLabel = pick(locale, NAV_DESTINATIONS.fr, NAV_DESTINATIONS.en, NAV_DESTINATIONS.es);

  const similarToursWithHref = similarTours.map(({ destination, ...t }) => ({
    ...t,
    destinationSlug: destination.slug,
    regionSlug: destination.regionSlug,
  }));

  const breadcrumb = [
    { label: destinationsLabel },
    { label: regionLabel, href: `/destinations/${regionSlug}` },
    { label: countryLabel, href: `/destinations/${regionSlug}/${country}` },
    { label: tripLabel },
  ];

  const tripDescription =
    pick(locale, tour.description, tour.descriptionEn, tour.descriptionEs) || pick(locale, tour.tagline, tour.taglineEn, tour.taglineEs);
  const stopNames =
    tour.format === "journey"
      ? tour.chapters.map((c) => pick(locale, c.title, c.titleEn, c.titleEs))
      : tour.itineraryDays.map((d) => pick(locale, d.location, d.locationEn, d.locationEs));
  // Consecutive days in the same place collapse to one stop; empty locations are dropped.
  const stops = stopNames.filter((stop, i) => stop && stop !== stopNames[i - 1]);
  const tripSchema = touristTripJsonLd({
    locale,
    name: tripLabel,
    description: tripDescription || undefined,
    image: tour.image || undefined,
    url: `${SITE_URL}/${locale}/destinations/${regionSlug}/${country}/${slug}`,
    price: tour.price || undefined,
    currency: tour.currency,
    travelerTypes: tour.travelerTypes,
    stops,
    destinationName: countryLabel,
  });

  const schemas = (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(locale, breadcrumb, `/destinations/${regionSlug}/${country}/${slug}`) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: tripSchema }} />
    </>
  );

  if (tour.format === "journey") {
    return (
      <>
        {schemas}
        <JourneyTripPageClient
          tour={tour}
          countryLabel={countryLabel}
          chapters={tour.chapters}
          similarTours={similarToursWithHref}
          breadcrumb={breadcrumb}
        />
      </>
    );
  }

  return (
    <>
      {schemas}
      <StandardTripPageClient
        tour={tour}
        countryLabel={countryLabel}
        sections={tour.sections}
        hotels={tour.hotels}
        similarTours={similarToursWithHref}
        breadcrumb={breadcrumb}
      />
    </>
  );
}
