import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, DEFAULT_LOCALE, isLocale, ogLocale, type Locale } from "@/lib/i18n/locales";
import { LanguageProvider } from "@/lib/i18n/context";
import { SiteChrome } from "@/components/get/SiteChrome";
import { NavigationServer } from "@/components/get/NavigationServer";
import { SetHtmlLang } from "@/components/get/SetHtmlLang";
import { DEFAULT_OG_IMAGE, safeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const META_BY_LOCALE: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Globale Explore Tours | Voyages & Circuits sur-mesure dans le monde",
    description:
      "Voyages et circuits sur-mesure dans le monde entier, avec des guides locaux reconnus. Noté 4.9/5 sur TripAdvisor.",
  },
  en: {
    title: "Globale Explore Tours | Tailor-made Trips & Tours Worldwide",
    description:
      "Tailor-made trips and tours worldwide, with trusted local guides. Rated 4.9/5 on TripAdvisor.",
  },
  es: {
    title: "Globale Explore Tours | Viajes y circuitos a medida en todo el mundo",
    description:
      "Viajes y circuitos a medida en todo el mundo, con guías locales de confianza. Valorado 4.9/5 en TripAdvisor.",
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

  // Populated from Search Console / Bing Webmaster Tools once the site is verified there (see
  // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION / NEXT_PUBLIC_BING_SITE_VERIFICATION in .env.local) —
  // omitted entirely, not rendered as empty tags, until those env vars are actually set.
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  return {
    title: { default: meta.title, template: "%s | Globale Explore Tours" },
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en", es: "/es", "x-default": "/fr" },
    },
    verification: {
      ...(googleVerification ? { google: googleVerification } : {}),
      ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
    },
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: LOCALES.filter((l) => l !== locale).map(ogLocale),
      url: `https://www.globaleexploretours.com/${locale}`,
      siteName: "Globale Explore Tours",
      title: meta.title,
      description: meta.description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [DEFAULT_OG_IMAGE] },
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

  const travelAgencySchema = safeJsonLd({
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Globale Explore Tours",
    description: "Agence de voyages sur-mesure basée à Valenciennes, France, proposant des voyages et circuits sur-mesure dans le monde entier.",
    url: "https://www.globaleexploretours.com",
    telephone: "+33667586462",
    email: "contact@globaleexploretours.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Avenue du Sénateur Girard",
      postalCode: "59300",
      addressLocality: "Valenciennes",
      addressCountry: "FR",
    },
    areaServed: "Worldwide",
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
