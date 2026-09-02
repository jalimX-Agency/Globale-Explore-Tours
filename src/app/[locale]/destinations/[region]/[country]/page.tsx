import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { fr } from "@/lib/i18n/translations/fr";
import { en } from "@/lib/i18n/translations/en";
import { es } from "@/lib/i18n/translations/es";
import { CountryPageClient } from "./CountryPageClient";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

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

// Cached per-request so generateMetadata and the page body share one query instead of two.
const getDestination = cache((slug: string) => db.destination.findUnique({ where: { slug } }));

export const revalidate = 3600;

// Pre-renders every country at build time (111 today) instead of relying on on-demand ISR —
// same rationale as the region page above. Generates the full {region, country} pair itself
// (the "bottom-up" pattern) rather than composing with the parent's generateStaticParams —
// composition silently produced zero paths for this route in testing.
export async function generateStaticParams() {
  const destinations = await db.destination.findMany({
    select: { slug: true, regionSlug: true },
  });
  return destinations.map((d) => ({ region: d.regionSlug, country: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; region: string; country: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, region: regionSlug, country } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const destination = await getDestination(country);
  if (!destination) return { title: country };
  const label = pick(locale, destination.name, destination.nameEn, destination.nameEs);
  const regionLabel = pick(locale, destination.region, destination.regionEn, destination.regionEs);
  const description = pick(locale, destination.description, destination.descriptionEn, destination.descriptionEs);
  return pageMetadata({
    locale,
    path: `/destinations/${regionSlug}/${country}`,
    // Country names alone collide across locales when a name is spelled the same way in two
    // languages (Kenya, Cuba, Laos...) — the region differs by locale (Africa/Afrique/África),
    // which keeps <title> unique per language even when the country name doesn't.
    title: `${label}, ${regionLabel}`,
    description: description || undefined,
    image: destination.heroImage || undefined,
  });
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ locale: string; region: string; country: string }>;
}) {
  const { locale: rawLocale, region: regionSlug, country } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const destination = await getDestination(country);
  if (!destination || destination.regionSlug !== regionSlug) notFound();

  const [blocks, faqs, team, tours, siblingDestinations] = await Promise.all([
    db.contentBlock.findMany({ where: { destinationId: destination.id }, orderBy: [{ section: "asc" }, { order: "asc" }] }),
    db.faq.findMany({ where: { destinationId: destination.id }, orderBy: { order: "asc" } }),
    db.teamMember.findMany({ where: { destinationId: destination.id }, orderBy: { order: "asc" } }),
    db.tour.findMany({
      where: { destinationId: destination.id },
      orderBy: [{ featured: "desc" }, { order: "asc" }],
      select: TOUR_CARD_SELECT,
    }),
    db.destination.findMany({
      where: { slug: { not: country } },
      orderBy: { order: "asc" },
      take: 8,
      select: { slug: true, name: true, nameEn: true, nameEs: true, regionSlug: true, heroImage: true },
    }),
  ]);

  const regionLabel = pick(locale, destination.region, destination.regionEn, destination.regionEs);
  const countryLabel = pick(locale, destination.name, destination.nameEn, destination.nameEs);
  const destinationsLabel = pick(locale, NAV_DESTINATIONS.fr, NAV_DESTINATIONS.en, NAV_DESTINATIONS.es);

  const toursWithHref = tours.map((tour) => ({
    ...tour,
    destinationSlug: destination.slug,
    regionSlug: destination.regionSlug,
  }));

  const otherDestinations = siblingDestinations.map((d) => ({
    key: d.slug,
    href: `/destinations/${d.regionSlug}/${d.slug}`,
    label: d.name,
    labelEn: d.nameEn,
    labelEs: d.nameEs,
    image: d.heroImage,
  }));

  const breadcrumb = [
    { label: destinationsLabel },
    { label: regionLabel, href: `/destinations/${regionSlug}` },
    { label: countryLabel },
  ];

  const faqSchema = faqJsonLd(
    faqs.map((f) => ({
      question: pick(locale, f.question, f.questionEn, f.questionEs),
      answer: pick(locale, f.answer, f.answerEn, f.answerEs),
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(locale, breadcrumb, `/destinations/${regionSlug}/${country}`) }}
      />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />}
      <CountryPageClient
        destination={destination}
        countryLabel={countryLabel}
        breadcrumb={breadcrumb}
        blocks={blocks}
        faqs={faqs}
        team={team}
        tours={toursWithHref}
        otherDestinations={otherDestinations}
      />
    </>
  );
}
