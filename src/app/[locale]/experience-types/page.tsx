import type { Metadata } from "next";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { ExperiencesPageClient } from "./ExperiencesPageClient";

const META = {
  fr: { title: "Nos expériences de voyage", description: "Trouvez le voyage qui vous ressemble — par qui voyage, ce que vous voulez faire, ou comment vous voulez voyager." },
  en: { title: "Our travel experiences", description: "Find the trip that's really you — by who's travelling, what you want to do, or how you want to travel." },
  es: { title: "Nuestras experiencias de viaje", description: "Encuentre el viaje que se le parece — por quién viaja, qué desea hacer, o cómo desea viajar." },
} as const satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return META[locale];
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

export default async function ExperienceTypesPage() {
  const [tours, experienceTypes] = await Promise.all([
    db.tour.findMany({
      orderBy: [{ featured: "desc" }, { order: "asc" }],
      take: 8,
      select: TOUR_CARD_SELECT,
    }),
    db.experienceType.findMany({
      orderBy: { order: "asc" },
      select: {
        slug: true,
        kind: true,
        cardImage: true,
        cardTitle: true,
        cardTitleEn: true,
        cardTitleEs: true,
        cardDescription: true,
        cardDescriptionEn: true,
        cardDescriptionEs: true,
      },
    }),
  ]);

  const toursWithHref = tours.map((tour) => ({
    ...tour,
    destinationSlug: tour.destination?.slug,
    regionSlug: tour.destination?.regionSlug,
  }));

  return <ExperiencesPageClient tours={toursWithHref} experienceTypes={experienceTypes} />;
}
