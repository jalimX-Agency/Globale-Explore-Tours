import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, DEFAULT_LOCALE, isLocale, ogLocale, type Locale } from "@/lib/i18n/locales";
import { LanguageProvider } from "@/lib/i18n/context";
import { SiteChrome } from "@/components/get/SiteChrome";
import { NavigationServer } from "@/components/get/NavigationServer";
import { SetHtmlLang } from "@/components/get/SetHtmlLang";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const META_BY_LOCALE: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Globale Explore Tours | Voyages & Circuits sur-mesure dans le monde",
    description:
      "Voyages et circuits sur-mesure dans le monde entier, des excursions à Agadir aux destinations les plus lointaines, avec des guides locaux reconnus. Noté 4.9/5 sur TripAdvisor, #1 des activités à Agadir.",
  },
  en: {
    title: "Globale Explore Tours | Tailor-made Trips & Tours Worldwide",
    description:
      "Tailor-made trips and tours worldwide, from excursions in Agadir to destinations further afield, with trusted local guides. Rated 4.9/5 on TripAdvisor, #1 activity in Agadir.",
  },
  es: {
    title: "Globale Explore Tours | Viajes y circuitos a medida en todo el mundo",
    description:
      "Viajes y circuitos a medida en todo el mundo, desde excursiones en Agadir hasta los destinos más lejanos, con guías locales de confianza. Valorado 4.9/5 en TripAdvisor, N.º 1 en Agadir.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const meta = META_BY_LOCALE[locale];

  return {
    title: { default: meta.title, template: "%s | Globale Explore Tours" },
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en", es: "/es", "x-default": "/fr" },
    },
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: LOCALES.filter((l) => l !== locale).map(ogLocale),
      url: `https://www.globaleexploretours.com/${locale}`,
      siteName: "Globale Explore Tours",
      title: meta.title,
      description: meta.description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const travelAgencySchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Globale Explore Tours",
    description: "Agence de voyages sur-mesure basée à Valenciennes, France, proposant des excursions à Agadir et des circuits dans le monde entier.",
    url: "https://www.globaleexploretours.com",
    telephone: "+33667586462",
    email: "contac@globaleexploretours.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Avenue du Sénateur Girard",
      postalCode: "59300",
      addressLocality: "Valenciennes",
      addressCountry: "FR",
    },
    areaServed: ["Agadir, Morocco", "Worldwide"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "105", bestRating: "5" },
    sameAs: [
      "https://www.tripadvisor.com/Attraction_Review-g293731-d27487904-Reviews-Globale_Explore_Tours-Agadir_Souss_Massa.html",
    ],
  });

  return (
    <LanguageProvider locale={locale}>
      <SetHtmlLang locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: travelAgencySchema }} />
      <SiteChrome nav={<NavigationServer />}>{children}</SiteChrome>
    </LanguageProvider>
  );
}
