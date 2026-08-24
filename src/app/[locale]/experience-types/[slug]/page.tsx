import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { fr } from "@/lib/i18n/translations/fr";
import { en } from "@/lib/i18n/translations/en";
import { es } from "@/lib/i18n/translations/es";
import { getTravelerTypePage, type TravelerTypePage } from "@/lib/experienceTypesData";
import { TravelerTypePageClient } from "./TravelerTypePageClient";
import { WhatTypePageClient, type WhatTypeContent } from "./WhatTypePageClient";

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

// Hero/overview/best-destinations/reassurance/FAQ content is admin-editable (ExperienceType +
// ContentBlock + Faq rows) — this adapts the DB row back into the TravelerTypePage shape
// TravelerTypePageClient already expects, so that component stays untouched. categorySections
// and linkCardGroups are page-structure config, not day-to-day editorial content, and stay
// sourced from src/lib/experienceTypesData.ts for now.
async function getTravelerTypeContent(row: NonNullable<Awaited<ReturnType<typeof getExperienceTypeRow>>>): Promise<TravelerTypePage> {
  const staticExtras = getTravelerTypePage(row.slug);
  return {
    slug: row.slug,
    travelerTypeKey: row.travelerTypeKey as TravelerTypePage["travelerTypeKey"],
    heroImage: row.heroImage,
    heroTitle: { fr: row.heroTitle, en: row.heroTitleEn, es: row.heroTitleEs },
    heroSubtitle: { fr: row.heroSubtitle, en: row.heroSubtitleEn, es: row.heroSubtitleEs },
    overviewTitle: { fr: row.overviewTitle, en: row.overviewTitleEn, es: row.overviewTitleEs },
    overviewBody: { fr: row.overviewBody, en: row.overviewBodyEn, es: row.overviewBodyEs },
    categorySections: staticExtras?.categorySections,
    linkCardGroups: staticExtras?.linkCardGroups,
    bestDestinations: row.contentBlocks
      .filter((b) => b.section === "bestDestinations")
      .map((b) => ({
        key: b.id,
        image: b.image,
        name: { fr: b.title, en: b.titleEn, es: b.titleEs },
        blurb: { fr: b.description, en: b.descriptionEn, es: b.descriptionEs },
        href: b.ctaHref,
      })),
    reassurance: row.contentBlocks
      .filter((b) => b.section === "reassurance")
      .map((b) => ({
        title: { fr: b.title, en: b.titleEn, es: b.titleEs },
        body: { fr: b.description, en: b.descriptionEn, es: b.descriptionEs },
      })),
    faqs: row.faqs.map((f) => ({
      question: { fr: f.question, en: f.questionEn, es: f.questionEs },
      answer: { fr: f.answer, en: f.answerEn, es: f.answerEs },
    })),
  };
}

function toWhatTypeContent(row: NonNullable<Awaited<ReturnType<typeof getExperienceTypeRow>>>): WhatTypeContent {
  return {
    slug: row.slug,
    heroImage: row.heroImage,
    heroTitle: { fr: row.heroTitle, en: row.heroTitleEn, es: row.heroTitleEs },
    overviewBody: { fr: row.overviewBody, en: row.overviewBodyEn, es: row.overviewBodyEs },
  };
}

function getExperienceTypeRow(slug: string) {
  return db.experienceType.findUnique({
    where: { slug },
    include: {
      contentBlocks: { orderBy: { order: "asc" } },
      faqs: { orderBy: { order: "asc" } },
      filterDestination: { select: { slug: true, regionSlug: true } },
    },
  });
}

export async function generateStaticParams() {
  const rows = await db.experienceType.findMany({ select: { slug: true } });
  return rows.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const row = await getExperienceTypeRow(slug);
  if (!row) return { title: "Experience" };

  return {
    title: pick(locale, { fr: row.heroTitle, en: row.heroTitleEn, es: row.heroTitleEs }),
    description: pick(locale, { fr: row.heroSubtitle || row.overviewBody, en: row.heroSubtitleEn || row.overviewBodyEn, es: row.heroSubtitleEs || row.overviewBodyEs }),
  };
}

export default async function ExperienceTypePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const row = await getExperienceTypeRow(slug);
  if (!row) notFound();

  const experiencesLabel = pick(locale, NAV_EXPERIENCES);

  if (row.kind === "who") {
    const travelerContent = await getTravelerTypeContent(row);

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

  // kind === "what"
  const content = toWhatTypeContent(row);
  const tours = await db.tour.findMany({
    where: row.filterDestinationId ? { destinationId: row.filterDestinationId } : { theme: row.filterTheme },
    orderBy: [{ featured: "desc" }, { order: "asc" }],
    take: 8,
    select: TOUR_CARD_SELECT,
  });

  const toursWithHref = tours.map((tour) => ({
    ...tour,
    destinationSlug: tour.destination?.slug,
    regionSlug: tour.destination?.regionSlug,
  }));

  const allWhatRows = await db.experienceType.findMany({
    where: { kind: "what" },
    orderBy: { order: "asc" },
    select: {
      slug: true,
      heroImage: true,
      heroTitle: true,
      heroTitleEn: true,
      heroTitleEs: true,
      overviewBody: true,
      overviewBodyEn: true,
      overviewBodyEs: true,
    },
  });
  const idx = allWhatRows.findIndex((p) => p.slug === row.slug);
  const related: WhatTypeContent[] =
    idx === -1 || allWhatRows.length <= 1
      ? []
      : [1, 2, 3].map((offset) => {
          const r = allWhatRows[(idx + offset) % allWhatRows.length];
          return {
            slug: r.slug,
            heroImage: r.heroImage,
            heroTitle: { fr: r.heroTitle, en: r.heroTitleEn, es: r.heroTitleEs },
            overviewBody: { fr: r.overviewBody, en: r.overviewBodyEn, es: r.overviewBodyEs },
          };
        });

  const pageTitle = pick(locale, content.heroTitle);

  return (
    <WhatTypePageClient
      content={content}
      tours={toursWithHref}
      related={related}
      breadcrumb={[{ label: experiencesLabel, href: "/experience-types" }, { label: pageTitle }]}
    />
  );
}
