import type { Metadata } from "next";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { BookingForm } from "./BookingForm";
import { pageMetadata } from "@/lib/seo";

const META = {
  fr: { title: "Faire une demande", description: "Décrivez le voyage que vous imaginez et recevez une proposition sur-mesure de notre équipe, sous 24h." },
  en: { title: "Make a request", description: "Tell us about the trip you're imagining and receive a tailor-made proposal from our team within 24h." },
  es: { title: "Hacer una solicitud", description: "Cuéntenos el viaje que imagina y reciba una propuesta a medida de nuestro equipo en 24h." },
} as const satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return pageMetadata({ locale, path: "/faire-une-demande", ...META[locale] });
}

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
