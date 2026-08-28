import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { fr } from "@/lib/i18n/translations/fr";
import { en } from "@/lib/i18n/translations/en";
import { es } from "@/lib/i18n/translations/es";
import { getTravelerTypePage, type TravelerTypePage, type Localized, type LinkCardGroup } from "@/lib/experienceTypesData";
import { TravelerTypePageClient } from "./TravelerTypePageClient";
import { WhatTypePageClient, type WhatTypeContent } from "./WhatTypePageClient";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const NAV_EXPERIENCES = { fr: fr.nav.experiences, en: en.nav.experiences, es: es.nav.experiences };

const SUB_PAGE_GROUP_HEADINGS = {
  when: { fr: "Quand partir ?", en: "When to travel?", es: "¿Cuándo viajar?" },
  type: { fr: "Quel type de séjour ?", en: "What type of trip?", es: "¿Qué tipo de viaje?" },
  persona: { fr: "Qui voyage ?", en: "Who's travelling?", es: "¿Quién viaja?" },
} satisfies Record<string, Localized>;

function pick(locale: Locale, l: Localized) {
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

type ExperienceTypeRow = NonNullable<Awaited<ReturnType<typeof getExperienceTypeRow>>>;
type ChildRow = ExperienceTypeRow["children"][number];

// Groups a page's DB children into up to 3 card grids by which filter dimension they use —
// matches Black Tomato's real family-holidays/luxury-honeymoons pages, each of which shows
// several such grids ("Who is travelling?" / "When are you travelling?" / "What type of
// trip?") rather than one flat list. A child with none of its own filters set (an "age" or
// "persona" sub-page — toddlers, teens... — nothing in Tour distinguishes those) falls into
// the last bucket.
function buildSubPageGroups(children: ChildRow[]): LinkCardGroup[] {
  if (children.length === 0) return [];
  const buckets: Record<keyof typeof SUB_PAGE_GROUP_HEADINGS, ChildRow[]> = { when: [], type: [], persona: [] };
  for (const child of children) {
    if (child.filterMonths) buckets.when.push(child);
    else if (child.filterTheme) buckets.type.push(child);
    else buckets.persona.push(child);
  }
  return (Object.keys(buckets) as (keyof typeof buckets)[])
    .filter((key) => buckets[key].length > 0)
    .map((key) => ({
      heading: SUB_PAGE_GROUP_HEADINGS[key],
      cards: buckets[key].map((child) => ({
        key: child.id,
        image: child.cardImage || child.heroImage,
        title: { fr: child.cardTitle || child.heroTitle, en: child.cardTitleEn || child.heroTitleEn, es: child.cardTitleEs || child.heroTitleEs },
        desc: { fr: child.cardDescription, en: child.cardDescriptionEn, es: child.cardDescriptionEs },
        href: `/experience-types/${child.slug}`,
      })),
    }));
}

// Hero/overview/best-destinations/reassurance/FAQ content is admin-editable (ExperienceType +
// ContentBlock + Faq rows) — this adapts the DB row back into the TravelerTypePage shape
// TravelerTypePageClient already expects, so that component stays untouched. categorySections
// stays sourced from src/lib/experienceTypesData.ts for now (page-structure config, not
// day-to-day editorial content) — linkCardGroups, though, is fully DB-driven once a page has
// real sub-pages, overriding whatever static groups experienceTypesData.ts still has for it.
async function getTravelerTypeContent(row: ExperienceTypeRow): Promise<TravelerTypePage> {
  const staticExtras = getTravelerTypePage(row.slug);
  const subPageGroups = buildSubPageGroups(row.children);
  return {
    slug: row.slug,
    travelerTypeKey: row.travelerTypeKey as TravelerTypePage["travelerTypeKey"],
    heroImage: row.heroImage,
    heroTitle: { fr: row.heroTitle, en: row.heroTitleEn, es: row.heroTitleEs },
    heroSubtitle: { fr: row.heroSubtitle, en: row.heroSubtitleEn, es: row.heroSubtitleEs },
    overviewTitle: { fr: row.overviewTitle, en: row.overviewTitleEn, es: row.overviewTitleEs },
    overviewBody: { fr: row.overviewBody, en: row.overviewBodyEn, es: row.overviewBodyEs },
    categorySections: staticExtras?.categorySections,
    linkCardGroups: subPageGroups.length > 0 ? subPageGroups : staticExtras?.linkCardGroups,
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

function toWhatTypeContent(row: ExperienceTypeRow): WhatTypeContent {
  return {
    slug: row.slug,
    heroImage: row.heroImage,
    heroTitle: { fr: row.heroTitle, en: row.heroTitleEn, es: row.heroTitleEs },
    overviewBody: { fr: row.overviewBody, en: row.overviewBodyEn, es: row.overviewBodyEs },
    subPageGroups: buildSubPageGroups(row.children),
  };
}

// Cached per-request so generateMetadata and the page body share one query instead of two.
const getExperienceTypeRow = cache((slug: string) => {
  return db.experienceType.findUnique({
    where: { slug },
    include: {
      contentBlocks: { orderBy: { order: "asc" } },
      faqs: { orderBy: { order: "asc" } },
      filterDestination: { select: { slug: true, regionSlug: true } },
      parent: {
        select: {
          slug: true,
          heroTitle: true,
          heroTitleEn: true,
          heroTitleEs: true,
          travelerTypeKey: true,
          filterTheme: true,
          filterMonths: true,
          filterDestinationId: true,
        },
      },
      children: { orderBy: { order: "asc" } },
    },
  });
});

// A tour "belongs" to a page if it matches every filter field the page actually has set
// (AND across dimensions) — a sub-page with none of its own set simply falls back to
// whichever ones its parent has, so e.g. "toddlers" (no filters of its own) shows the same
// trips as "family-holidays" until someone tightens it from the admin.
function tourWhereForRow(row: ExperienceTypeRow) {
  const travelerTypeKey = row.travelerTypeKey || row.parent?.travelerTypeKey;
  const filterTheme = row.filterTheme || row.parent?.filterTheme;
  const filterMonths = row.filterMonths || row.parent?.filterMonths;
  const filterDestinationId = row.filterDestinationId || row.parent?.filterDestinationId;

  const where: Record<string, unknown> = {};
  if (travelerTypeKey) where.travelerTypes = { contains: travelerTypeKey };
  if (filterTheme) where.theme = filterTheme;
  if (filterDestinationId) where.destinationId = filterDestinationId;
  if (filterMonths) {
    const months = filterMonths.split(",").map((m: string) => m.trim()).filter(Boolean);
    where.OR = months.map((m: string) => ({ bestMonths: { contains: m } }));
  }
  return where;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const rows = await db.experienceType.findMany({ select: { slug: true } });
  return rows.map((r) => ({ slug: r.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const row = await getExperienceTypeRow(slug.join("/"));
  if (!row) return { title: "Experience" };

  return pageMetadata({
    locale,
    path: `/experience-types/${slug.join("/")}`,
    title: pick(locale, { fr: row.heroTitle, en: row.heroTitleEn, es: row.heroTitleEs }),
    description: pick(locale, { fr: row.heroSubtitle || row.overviewBody, en: row.heroSubtitleEn || row.overviewBodyEn, es: row.heroSubtitleEs || row.overviewBodyEs }) || undefined,
    image: row.heroImage || undefined,
  });
}

export default async function ExperienceTypePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const row = await getExperienceTypeRow(slug.join("/"));
  if (!row) notFound();

  const experiencesLabel = pick(locale, NAV_EXPERIENCES);
  const breadcrumb = [{ label: experiencesLabel, href: "/experience-types" }];
  if (row.parent) {
    breadcrumb.push({
      label: pick(locale, { fr: row.parent.heroTitle, en: row.parent.heroTitleEn, es: row.parent.heroTitleEs }),
      href: `/experience-types/${row.parent.slug}`,
    });
  }

  const faqSchema = faqJsonLd(
    row.faqs.map((f) => ({
      question: pick(locale, { fr: f.question, en: f.questionEn, es: f.questionEs }),
      answer: pick(locale, { fr: f.answer, en: f.answerEn, es: f.answerEs }),
    }))
  );

  if (row.kind === "who") {
    const travelerContent = await getTravelerTypeContent(row);
    const where = tourWhereForRow(row);

    const tours = await db.tour.findMany({
      where,
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
            where: { ...where, ...(section.themeParam ? { theme: section.themeParam } : {}) },
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
    const fullBreadcrumb = [...breadcrumb, { label: pageTitle }];

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(locale, fullBreadcrumb, `/experience-types/${slug.join("/")}`) }}
        />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />}
        <TravelerTypePageClient
          content={travelerContent}
          tours={toursWithHref}
          categoryTours={categoryTours}
          breadcrumb={fullBreadcrumb}
        />
      </>
    );
  }

  // kind === "what" | "private"
  const content = toWhatTypeContent(row);
  const where = tourWhereForRow(row);
  const tours = Object.keys(where).length > 0
    ? await db.tour.findMany({
        where,
        orderBy: [{ featured: "desc" }, { order: "asc" }],
        take: 8,
        select: TOUR_CARD_SELECT,
      })
    : [];

  const toursWithHref = tours.map((tour) => ({
    ...tour,
    destinationSlug: tour.destination?.slug,
    regionSlug: tour.destination?.regionSlug,
  }));

  const siblingRows = await db.experienceType.findMany({
    where: { kind: row.kind, parentId: row.parentId },
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
  const idx = siblingRows.findIndex((p) => p.slug === row.slug);
  const related: WhatTypeContent[] =
    idx === -1 || siblingRows.length <= 1
      ? []
      : [1, 2, 3].map((offset) => {
          const r = siblingRows[(idx + offset) % siblingRows.length];
          return {
            slug: r.slug,
            heroImage: r.heroImage,
            heroTitle: { fr: r.heroTitle, en: r.heroTitleEn, es: r.heroTitleEs },
            overviewBody: { fr: r.overviewBody, en: r.overviewBodyEn, es: r.overviewBodyEs },
          };
        });

  const pageTitle = pick(locale, content.heroTitle);
  const fullBreadcrumb = [...breadcrumb, { label: pageTitle }];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(locale, fullBreadcrumb, `/experience-types/${slug.join("/")}`) }}
      />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />}
      <WhatTypePageClient
        content={content}
        tours={toursWithHref}
        related={related}
        breadcrumb={fullBreadcrumb}
      />
    </>
  );
}
