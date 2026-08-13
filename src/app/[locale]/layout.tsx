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
    title: "Globale Explore Tours | Excursions & Circuits sur-mesure à Agadir",
    description:
      "Excursions et circuits sur-mesure à Agadir avec des guides locaux reconnus — désert, océan, médina. Noté 4.9/5 sur TripAdvisor, #1 des activités à Agadir.",
  },
  en: {
    title: "Globale Explore Tours | Tailor-made Excursions & Tours in Agadir",
    description:
      "Tailor-made excursions and tours in Agadir with trusted local guides — desert, ocean, medina. Rated 4.9/5 on TripAdvisor, #1 activity in Agadir.",
  },
  es: {
    title: "Globale Explore Tours | Excursiones y circuitos a medida en Agadir",
    description:
      "Excursiones y circuitos a medida en Agadir con guías locales de confianza — desierto, océano, medina. Valorado 4.9/5 en TripAdvisor, N.º 1 en Agadir.",
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
    description: "Agence d'excursions et de circuits sur-mesure basée à Agadir, Maroc.",
    url: "https://www.globaleexploretours.com",
    telephone: "+212706259077",
    email: "contac@globaleexploretours.com",
    address: { "@type": "PostalAddress", addressLocality: "Agadir", addressCountry: "MA" },
    areaServed: "Agadir, Morocco",
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
