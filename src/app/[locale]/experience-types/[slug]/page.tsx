import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { fr } from "@/lib/i18n/translations/fr";
import { en } from "@/lib/i18n/translations/en";
import { es } from "@/lib/i18n/translations/es";
import { getTravelerTypePage, TRAVELER_TYPE_PAGES } from "@/lib/experienceTypesData";
import { getWhatTypePage, WHAT_TYPE_PAGES } from "@/lib/whatTypesData";
import { TravelerTypePageClient } from "./TravelerTypePageClient";
import { WhatTypePageClient } from "./WhatTypePageClient";

const NAV_EXPERIENCES = { fr: fr.nav.experiences, en: en.nav.experiences, es: es.nav.experiences };

function pick(locale: Locale, l: { fr: string; en: string; es: string }) {
  if (locale === "en") return l.en || l.fr;
  if (locale === "es") return l.es || l.fr;
  return l.fr;
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

export function generateStaticParams() {
  return [...TRAVELER_TYPE_PAGES.map((p) => ({ slug: p.slug })), ...WHAT_TYPE_PAGES.map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const travelerContent = getTravelerTypePage(slug);
  if (travelerContent) {
    return { title: pick(locale, travelerContent.heroTitle), description: pick(locale, travelerContent.heroSubtitle) };
  }
  const whatContent = getWhatTypePage(slug);
  if (whatContent) {
    return { title: pick(locale, whatContent.title), description: pick(locale, whatContent.intro) };
  }
  return { title: "Experience" };
}

export default async function ExperienceTypePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const travelerContent = getTravelerTypePage(slug);
  const whatContent = !travelerContent ? getWhatTypePage(slug) : undefined;

  if (!travelerContent && !whatContent) notFound();

  const experiencesLabel = pick(locale, NAV_EXPERIENCES);

  if (travelerContent) {
    const tours = await db.tour.findMany({
      where: { travelerTypes: { contains: travelerContent.travelerTypeKey } },
      orderBy: [{ featured: "desc" }, { order: "asc" }],
      take: 8,
      select: TOUR_CARD_SELECT,
    });

    const toursWithHref = tours.map((tour) => ({
      ...tour,
      destinationSlug: tour.destination?.slug,
      regionSlug: tour.destination?.regionSlug,
    }));

    let categoryTours: Record<string, typeof toursWithHref> | undefined;
    if (travelerContent.categorySections && travelerContent.categorySections.length > 0) {
      const entries = await Promise.all(
        travelerContent.categorySections.map(async (section) => {
          const sectionTours = await db.tour.findMany({
            where: {
              travelerTypes: { contains: travelerContent.travelerTypeKey },
              ...(section.themeParam ? { theme: section.themeParam } : {}),
            },
            orderBy: [{ featured: "desc" }, { order: "asc" }],
            take: 6,
            select: TOUR_CARD_SELECT,
          });
          return [
            section.key,
            sectionTours.map((tour) => ({
              ...tour,
              destinationSlug: tour.destination?.slug,
              regionSlug: tour.destination?.regionSlug,
            })),
          ] as const;
        })
      );
      categoryTours = Object.fromEntries(entries);
    }

    const pageTitle = pick(locale, travelerContent.heroTitle);

    return (
      <TravelerTypePageClient
        content={travelerContent}
        tours={toursWithHref}
        categoryTours={categoryTours}
        breadcrumb={[{ label: experiencesLabel, href: "/experience-types" }, { label: pageTitle }]}
      />
    );
  }

  // whatContent branch
  const content = whatContent!;
  const tours = await db.tour.findMany({
    where: content.destinationSlug
      ? { destination: { slug: content.destinationSlug } }
      : { theme: content.themeParam },
    orderBy: [{ featured: "desc" }, { order: "asc" }],
    take: 8,
    select: TOUR_CARD_SELECT,
  });

  const toursWithHref = tours.map((tour) => ({
    ...tour,
    destinationSlug: tour.destination?.slug,
    regionSlug: tour.destination?.regionSlug,
  }));

  const idx = WHAT_TYPE_PAGES.findIndex((p) => p.slug === content.slug);
  const related = [1, 2, 3].map((offset) => WHAT_TYPE_PAGES[(idx + offset) % WHAT_TYPE_PAGES.length]);

  const pageTitle = pick(locale, content.title);

  return (
    <WhatTypePageClient
      content={content}
      tours={toursWithHref}
      related={related}
      breadcrumb={[{ label: experiencesLabel, href: "/experience-types" }, { label: pageTitle }]}
    />
  );
}
