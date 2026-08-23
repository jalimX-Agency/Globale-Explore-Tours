import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { fr } from "@/lib/i18n/translations/fr";
import { en } from "@/lib/i18n/translations/en";
import { es } from "@/lib/i18n/translations/es";
import { getFamilySubPage, FAMILY_SUB_PAGES } from "@/lib/familySubPagesData";
import { FamilySubPageClient } from "./FamilySubPageClient";

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
  return FAMILY_SUB_PAGES.map((p) => ({ section: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, section } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const content = getFamilySubPage(section);
  if (!content) return { title: "Family holidays" };
  return { title: pick(locale, content.title), description: pick(locale, content.intro) };
}

export default async function FamilySubPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale: rawLocale, section } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const content = getFamilySubPage(section);
  if (!content) notFound();

  const tours = await db.tour.findMany({
    where: {
      travelerTypes: { contains: "family" },
      ...(content.themeParam ? { theme: content.themeParam } : {}),
    },
    orderBy: [{ featured: "desc" }, { order: "asc" }],
    take: 8,
    select: TOUR_CARD_SELECT,
  });

  const toursWithHref = tours.map((tour) => ({
    ...tour,
    destinationSlug: tour.destination?.slug,
    regionSlug: tour.destination?.regionSlug,
  }));

  const experiencesLabel = pick(locale, NAV_EXPERIENCES);
  const familyExperienceType = await db.experienceType.findUnique({
    where: { slug: "family-holidays" },
    select: { heroTitle: true, heroTitleEn: true, heroTitleEs: true },
  });
  const familyPageTitle = familyExperienceType
    ? pick(locale, { fr: familyExperienceType.heroTitle, en: familyExperienceType.heroTitleEn, es: familyExperienceType.heroTitleEs })
    : "Family holidays";
  const pageTitle = pick(locale, content.title);

  return (
    <FamilySubPageClient
      content={content}
      tours={toursWithHref}
      breadcrumb={[
        { label: experiencesLabel, href: "/experience-types" },
        { label: familyPageTitle, href: "/experience-types/family-holidays" },
        { label: pageTitle },
      ]}
    />
  );
}
