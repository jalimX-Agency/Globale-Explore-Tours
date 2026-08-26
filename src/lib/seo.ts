import type { Metadata } from "next";
import { LOCALES, ogLocale, type Locale } from "@/lib/i18n/locales";
import { fr } from "@/lib/i18n/translations/fr";
import { en } from "@/lib/i18n/translations/en";
import { es } from "@/lib/i18n/translations/es";

export const SITE_URL = "https://www.globaleexploretours.com";
export const SITE_NAME = "Globale Explore Tours";

// Real, currently-live photo used as the sitewide OG/Twitter fallback — the previous
// "/og-image.jpg" reference pointed at a file that was never added to public/, so every
// share preview site-wide (and every page below that doesn't have its own photo) 404'd.
export const DEFAULT_OG_IMAGE = "https://cdn.globaleexploretours.com/destinations/maroc-hero.jpg";

const HOME_LABEL: Record<Locale, string> = { fr: fr.nav.home, en: en.nav.home, es: es.nav.home };

/**
 * Builds canonical + hreflang alternates + Open Graph + Twitter metadata for one page.
 * Every dynamic page (tour, country, region, blog post...) needs this — without it, Next.js
 * metadata inheritance falls back to the [locale] layout's own canonical/OG (the homepage's),
 * so every sub-page ends up telling search engines "the real URL for this content is the
 * homepage." `path` is locale-free and starts with "/" (e.g. "/destinations/afrique/maroc"),
 * or "" for the homepage itself.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
}: {
  locale: Locale;
  path: string;
  title: string;
  description?: string;
  image?: string;
}): Metadata {
  const displayTitle = `${title} | ${SITE_NAME}`;
  const ogImage = image || DEFAULT_OG_IMAGE;
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `/${l}${path}`]));

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ...languages, "x-default": `/fr${path}` },
    },
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: LOCALES.filter((l) => l !== locale).map(ogLocale),
      url: `${SITE_URL}/${locale}${path}`,
      siteName: SITE_NAME,
      title: displayTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [ogImage],
    },
  };
}

/**
 * BreadcrumbList JSON-LD matching what <Breadcrumb> renders visually (which always prepends
 * "Home" itself) — items without an href (the current page) simply omit "item", which is
 * valid per Google's structured-data guidelines.
 */
export function breadcrumbJsonLd(locale: Locale, items: { label: string; href?: string }[]) {
  const full = [{ label: HOME_LABEL[locale], href: "/" }, ...items];
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}/${locale}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  });
}

// +40% AI-search visibility per Princeton's GEO study — the single highest-leverage schema
// addition available on content pages that already carry FAQ copy.
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  if (faqs.length === 0) return null;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  });
}

export function touristTripJsonLd({
  name,
  description,
  image,
  url,
  price,
  currency,
  duration,
}: {
  name: string;
  description?: string;
  image?: string;
  url: string;
  price?: number;
  currency?: string;
  duration?: string;
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    image: image || undefined,
    url,
    ...(duration ? { itinerary: { "@type": "ItemList", name: duration } } : {}),
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            price,
            priceCurrency: currency || "EUR",
            availability: "https://schema.org/InStock",
            url,
          },
        }
      : {}),
    provider: { "@type": "TravelAgency", name: SITE_NAME, url: SITE_URL },
  });
}

export function articleJsonLd({
  headline,
  description,
  image,
  url,
  datePublished,
  dateModified,
  author,
}: {
  headline: string;
  description?: string;
  image?: string;
  url: string;
  datePublished: Date;
  dateModified: Date;
  author?: string;
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image || undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: datePublished.toISOString(),
    dateModified: dateModified.toISOString(),
    author: author ? { "@type": "Person", name: author } : { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  });
}
