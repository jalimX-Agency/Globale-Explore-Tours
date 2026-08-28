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
} as const;

export const revalidate = 3600;

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

  const similarTours = await db.tour.findMany({
    where: { destinationId: tour.destinationId, id: { not: tour.id } },
    orderBy: [{ featured: "desc" }, { order: "asc" }],
    take: 6,
    select: TOUR_CARD_SELECT,
  });

  const regionLabel = pick(locale, tour.destination.region, tour.destination.regionEn, tour.destination.regionEs);
  const countryLabel = pick(locale, tour.destination.name, tour.destination.nameEn, tour.destination.nameEs);
  const tripLabel = pick(locale, tour.name, tour.nameEn, tour.nameEs);
  const destinationsLabel = pick(locale, NAV_DESTINATIONS.fr, NAV_DESTINATIONS.en, NAV_DESTINATIONS.es);

  const similarToursWithHref = similarTours.map((t) => ({
    ...t,
    destinationSlug: tour.destination.slug,
    regionSlug: tour.destination.regionSlug,
  }));

  const breadcrumb = [
    { label: destinationsLabel },
    { label: regionLabel, href: `/destinations/${regionSlug}` },
    { label: countryLabel, href: `/destinations/${regionSlug}/${country}` },
    { label: tripLabel },
  ];

  const tripDescription =
    pick(locale, tour.description, tour.descriptionEn, tour.descriptionEs) || pick(locale, tour.tagline, tour.taglineEn, tour.taglineEs);
  const tripDuration = pick(locale, tour.duration, tour.durationEn, tour.durationEs);
  const tripSchema = touristTripJsonLd({
    name: tripLabel,
    description: tripDescription || undefined,
    image: tour.image || undefined,
    url: `${SITE_URL}/${locale}/destinations/${regionSlug}/${country}/${slug}`,
    price: tour.price || undefined,
    currency: tour.currency,
    duration: tripDuration || undefined,
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
