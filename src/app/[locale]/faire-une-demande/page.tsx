import type { Metadata } from "next";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { BookingForm } from "./BookingForm";

export const metadata: Metadata = {
  title: "Faire une demande",
};

function pick(locale: Locale, frText: string, enText: string, esText: string) {
  if (locale === "en") return enText || frText;
  if (locale === "es") return esText || frText;
  return frText;
}

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tour?: string }>;
}) {
  const { locale: rawLocale } = await params;
  const { tour: tourSlug } = await searchParams;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const [tour, destinations] = await Promise.all([
    tourSlug
      ? db.tour.findUnique({
          where: { slug: tourSlug },
          select: {
            id: true,
            name: true,
            nameEn: true,
            nameEs: true,
            price: true,
            currency: true,
            duration: true,
            durationEn: true,
            durationEs: true,
            image: true,
          },
        })
      : null,
    db.destination.findMany({
      select: { slug: true, name: true, nameEn: true, nameEs: true },
    }),
  ]);

  const preselectedTour = tour
    ? {
        id: tour.id,
        name: pick(locale, tour.name, tour.nameEn, tour.nameEs),
        price: tour.price,
        currency: tour.currency,
        duration: pick(locale, tour.duration, tour.durationEn, tour.durationEs),
        image: tour.image,
      }
    : null;

  const destinationOptions = destinations
    .map((d) => ({ slug: d.slug, label: pick(locale, d.name, d.nameEn, d.nameEs) }))
    .sort((a, b) => a.label.localeCompare(b.label, locale));

  return <BookingForm preselectedTour={preselectedTour} destinationOptions={destinationOptions} locale={locale} />;
}
