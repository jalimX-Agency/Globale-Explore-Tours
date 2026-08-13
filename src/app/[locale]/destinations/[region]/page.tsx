import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { fr } from "@/lib/i18n/translations/fr";
import { en } from "@/lib/i18n/translations/en";
import { es } from "@/lib/i18n/translations/es";
import { RegionPageClient } from "./RegionPageClient";

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
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; region: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, region: regionSlug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const rep = await db.destination.findFirst({ where: { regionSlug }, select: { region: true, regionEn: true, regionEs: true } });
  const label = rep ? pick(locale, rep.region, rep.regionEn, rep.regionEs) : regionSlug;
  return { title: label };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ locale: string; region: string }>;
}) {
  const { locale: rawLocale, region: regionSlug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const [region, destinations] = await Promise.all([
    db.region.findUnique({ where: { slug: regionSlug } }),
    db.destination.findMany({
      where: { regionSlug },
      orderBy: { order: "asc" },
      select: { slug: true, name: true, nameEn: true, nameEs: true, region: true, regionEn: true, regionEs: true, heroImage: true, featured: true },
    }),
  ]);

  if (!region || destinations.length === 0) notFound();

  const [blocks, faqs, team, tours, allOtherDestinations, otherRegions] = await Promise.all([
    db.contentBlock.findMany({ where: { regionId: region.id }, orderBy: [{ section: "asc" }, { order: "asc" }] }),
    db.faq.findMany({ where: { regionId: region.id }, orderBy: { order: "asc" } }),
    db.teamMember.findMany({ where: { regionId: region.id }, orderBy: { order: "asc" } }),
    db.tour.findMany({
      where: { destination: { regionSlug } },
      orderBy: [{ featured: "desc" }, { order: "asc" }],
      take: 8,
      select: TOUR_CARD_SELECT,
    }),
    db.destination.findMany({
      distinct: ["regionSlug"],
      orderBy: [{ regionSlug: "asc" }, { order: "asc" }],
      select: { regionSlug: true, region: true, regionEn: true, regionEs: true },
    }),
    db.region.findMany({ where: { slug: { not: regionSlug } }, orderBy: { order: "asc" } }),
  ]);

  const regionLabelBySlug = new Map(allOtherDestinations.map((d) => [d.regionSlug, d]));
  const otherRegionItems = otherRegions
    .map((r) => {
      const rep = regionLabelBySlug.get(r.slug);
      if (!rep) return null;
      return {
        key: r.slug,
        href: `/destinations/${r.slug}`,
        label: rep.region,
        labelEn: rep.regionEn,
        labelEs: rep.regionEs,
        image: r.heroImage,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const regionLabel = pick(locale, destinations[0].region, destinations[0].regionEn, destinations[0].regionEs);
  const destinationsLabel = pick(locale, NAV_DESTINATIONS.fr, NAV_DESTINATIONS.en, NAV_DESTINATIONS.es);

  return (
    <RegionPageClient
      region={region}
      regionLabel={regionLabel}
      breadcrumb={[{ label: destinationsLabel }, { label: regionLabel }]}
      destinations={destinations}
      blocks={blocks}
      faqs={faqs}
      team={team}
      tours={tours}
      otherRegions={otherRegionItems}
    />
  );
}
