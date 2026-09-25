import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, DEFAULT_LOCALE, isLocale, ogLocale, type Locale } from "@/lib/i18n/locales";
import { LanguageProvider } from "@/lib/i18n/context";
import { SiteChrome } from "@/components/get/SiteChrome";
import { NavigationServer } from "@/components/get/NavigationServer";
import { FooterServer } from "@/components/get/FooterServer";
import { HtmlDocument } from "@/components/HtmlDocument";
import { DEFAULT_OG_IMAGE, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "../globals.css";

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
      "Tailor-made trips and tours worldwide, designed around you and led by trusted local guides. Rated 4.9/5 on TripAdvisor.",
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
    metadataBase: new URL("https://www.globaleexploretours.com"),
    robots: { index: true, follow: true },
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

  return (
    <HtmlDocument lang={locale}>
      <LanguageProvider locale={locale}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd(locale) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: websiteJsonLd(locale) }} />
        <SiteChrome nav={<NavigationServer />} footer={<FooterServer />}>
          {children}
        </SiteChrome>
      </LanguageProvider>
    </HtmlDocument>
  );
}
