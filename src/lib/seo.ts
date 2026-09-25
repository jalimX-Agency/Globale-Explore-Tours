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
// Was a Sahara dune shot (grand-desert-dunes-crepuscule.jpg) — the client asked for it to stop
// being the first thing people see sharing the site (WhatsApp previews, Google search), since
// the site covers far more than Morocco and that photo skewed the homepage share toward it.
export const DEFAULT_OG_IMAGE = "https://cdn.globaleexploretours.com/destinations/italie.jpg";

const HOME_LABEL: Record<Locale, string> = { fr: fr.nav.home, en: en.nav.home, es: es.nav.home };

// Stable @id anchors so every page's schema (trips, articles, the WebSite node) points at the
// same agency entity instead of re-declaring a bare, unlinked "TravelAgency" each time — AI
// answer engines and Google's Knowledge Graph both resolve entities through these ids.
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g293731-d27487904-Reviews-Globale_Explore_Tours-Agadir_Souss_Massa.html";
const INSTAGRAM_URL = "https://www.instagram.com/globaleexploretours/";

// Keep in sync with the rating shown in <Testimonials> and the trust copy in translations.
export const TRIPADVISOR_RATING = { value: "4.9", count: 105 };

const ORGANIZATION_DESCRIPTION: Record<Locale, string> = {
  fr: "Agence de voyages sur-mesure basée à Valenciennes (France), qui conçoit des voyages et circuits privés dans le monde entier avec des guides locaux.",
  en: "Tailor-made travel agency based in Valenciennes, France, designing private trips and tours worldwide with local guides.",
  es: "Agencia de viajes a medida con sede en Valenciennes (Francia), que diseña viajes y circuitos privados en todo el mundo con guías locales.",
};

export function organizationJsonLd(locale: Locale) {
  return safeJsonLd({
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    description: ORGANIZATION_DESCRIPTION[locale],
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    image: DEFAULT_OG_IMAGE,
    telephone: "+33667586462",
    email: "contact@globaleexploretours.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Avenue du Sénateur Girard",
      postalCode: "59300",
      addressLocality: "Valenciennes",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+33667586462",
      email: "contact@globaleexploretours.com",
      availableLanguage: ["French", "English", "Spanish"],
    },
    areaServed: "Worldwide",
    currenciesAccepted: "EUR",
    // Payment methods listed in the booking terms (conditions-de-reservation, article 4.1).
    paymentAccepted: "Bank transfer, Cash, ANCV Chèques-Vacances, Credit card",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: TRIPADVISOR_RATING.value,
      reviewCount: String(TRIPADVISOR_RATING.count),
      bestRating: "5",
    },
    sameAs: [TRIPADVISOR_URL, INSTAGRAM_URL],
  });
}

export function websiteJsonLd(locale: Locale) {
  return safeJsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale,
    publisher: { "@id": ORGANIZATION_ID },
  });
}

// JSON.stringify doesn't escape "<", so a "</script>" inside any admin-authored field (a blog
// title, FAQ answer, tour name...) landing in these strings would close the JSON-LD <script>
// tag early and let whatever follows execute as HTML on a page every visitor loads. Escaping
// "<" to its unicode form keeps the JSON valid while making that breakout impossible.
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Builds canonical + hreflang alternates + Open Graph + Twitter metadata for one page.
 * Every dynamic page (tour, country, region, blog post...) needs this — without it, Next.js
 * metadata inheritance falls back to the [locale] layout's own canonical/OG (the homepage's),
 * so every sub-page ends up telling search engines "the real URL for this content is the
 * homepage." `path` is locale-free and starts with "/" (e.g. "/destinations/afrique/maroc"),
 * or "" for the homepage itself.
 */
// Google truncates SERP snippets past ~155-160 chars — cut on a word boundary so an
// over-long admin-authored description (blog excerpt, experience-type overview...) never
// gets clipped mid-word in search results.
const MAX_DESCRIPTION_LENGTH = 155;
// Below this a description reads as a fragment in search results (a 2026-09 crawl flagged a
// 69-char experience-type subtitle) — see composeDescription.
const MIN_DESCRIPTION_LENGTH = 120;

function truncateDescription(description: string): string {
  if (description.length <= MAX_DESCRIPTION_LENGTH) return description;
  const cut = description.slice(0, MAX_DESCRIPTION_LENGTH);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : MAX_DESCRIPTION_LENGTH)}…`;
}

/**
 * Joins admin-authored text fields, in order of preference, until the result is long enough to
 * make a useful meta description (pageMetadata then trims anything past the display limit).
 * For pages whose best field is a one-line tagline, e.g. a hero subtitle followed by the
 * overview body.
 */
export function composeDescription(...parts: (string | null | undefined)[]): string | undefined {
  let out = "";
  for (const raw of parts) {
    const part = raw?.trim();
    if (!part) continue;
    out = out ? `${/[.!?…]$/.test(out) ? out : `${out}.`} ${part}` : part;
    if (out.length >= MIN_DESCRIPTION_LENGTH) break;
  }
  return out || undefined;
}

// Past this, the " | Globale Explore Tours" suffix is dropped rather than appended: ~60 chars
// (≈561px) is where Google starts cutting titles off in results — a 2026-09 crawl flagged 37
// pages whose titles only crossed it because of the suffix. Google shows the site name above
// the title in results anyway.
const MAX_BRANDED_TITLE_LENGTH = 60;

// Bare titles (brand suffix already dropped) are only cut past this — trip names are long,
// descriptive phrases, and cutting them at 60 would lose the part that makes them distinct.
const MAX_TITLE_LENGTH = 70;

function truncateTitle(title: string): string {
  if (title.length <= MAX_TITLE_LENGTH) return title;
  const cut = title.slice(0, MAX_TITLE_LENGTH);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : MAX_TITLE_LENGTH)}…`;
}

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
  // Only drop the brand suffix when keeping it would break the length budget — short titles
  // (destination hubs, blog posts) still get the normal branded template applied by the
  // [locale] layout (a bare string `title` inherits its parent's `template`); a `{ absolute }`
  // title bypasses that template instead of just being a longer string for it to wrap.
  const pageTitle: Metadata["title"] =
    displayTitle.length > MAX_BRANDED_TITLE_LENGTH ? { absolute: truncateTitle(title) } : title;
  const trimmedDescription = description ? truncateDescription(description) : undefined;
  const ogImage = image || DEFAULT_OG_IMAGE;
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `/${l}${path}`]));

  return {
    title: pageTitle,
    description: trimmedDescription,
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
      description: trimmedDescription,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: trimmedDescription,
      images: [ogImage],
    },
  };
}

/**
 * BreadcrumbList JSON-LD matching what <Breadcrumb> renders visually (which always prepends
 * "Home" itself). Google's Rich Results validator requires every ListItem to carry an "item"
 * URL, including the current/last page — but `items`' last entry deliberately omits `href` so
 * <Breadcrumb> renders it as plain (non-clickable) text, matching the usual "you are here"
 * convention. `currentPath` fills that gap for the schema only, without touching the array
 * used for the visual breadcrumb, so the current page doesn't turn into a link to itself.
 * Any other href-less entry (an unlinkable label like "Destinations", which has no hub page
 * of its own) is dropped from the schema entirely rather than emitted without "item", and
 * positions are renumbered contiguously afterwards so there's no gap.
 */
export function breadcrumbJsonLd(locale: Locale, items: { label: string; href?: string }[], currentPath: string) {
  const withCurrent = items.map((item, i) =>
    i === items.length - 1 && !item.href ? { ...item, href: currentPath } : item
  );
  const full = [{ label: HOME_LABEL[locale], href: "/" }, ...withCurrent].filter((item) => item.href);
  return safeJsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}/${locale}${item.href === "/" ? "" : item.href}`,
    })),
  });
}

// +40% AI-search visibility per Princeton's GEO study — the single highest-leverage schema
// addition available on content pages that already carry FAQ copy.
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  if (faqs.length === 0) return null;
  return safeJsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  });
}

const TOURIST_TYPE_LABELS: Record<Locale, Record<string, string>> = {
  fr: { family: "Familles", couples: "Couples", groups: "Groupes", honeymoon: "Voyages de noces", solo: "Voyageurs solo" },
  en: { family: "Families", couples: "Couples", groups: "Groups", honeymoon: "Honeymooners", solo: "Solo travellers" },
  es: { family: "Familias", couples: "Parejas", groups: "Grupos", honeymoon: "Lunas de miel", solo: "Viajeros solos" },
};

export function touristTripJsonLd({
  locale,
  name,
  description,
  image,
  url,
  price,
  currency,
  travelerTypes,
  stops,
  destinationName,
}: {
  locale: Locale;
  name: string;
  description?: string;
  image?: string;
  url: string;
  price?: number;
  currency?: string;
  /** Tour.travelerTypes, comma-separated keys (family, couples...). */
  travelerTypes?: string;
  /** Ordered stops — journey chapters, or a standard trip's distinct day-by-day locations. */
  stops: string[];
  destinationName: string;
}) {
  const touristType = (travelerTypes ?? "")
    .split(",")
    .map((key) => TOURIST_TYPE_LABELS[locale][key.trim()])
    .filter(Boolean);

  return safeJsonLd({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    image: image || undefined,
    url,
    ...(touristType.length > 0 ? { touristType } : {}),
    // A real ordered route (previously this held the duration string as an ItemList "name",
    // which carried no itinerary at all) — the part of a trip page AI answer engines lift
    // when asked "what does a X-day trip to Y look like".
    itinerary: {
      "@type": "ItemList",
      numberOfItems: stops.length || 1,
      itemListElement: (stops.length > 0 ? stops : [destinationName]).map((stop, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Place", name: stop },
      })),
    },
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            // Trip pages show this as a per-person starting price for a tailor-made quote.
            price,
            priceCurrency: currency || "EUR",
            availability: "https://schema.org/InStock",
            url,
            offeredBy: { "@id": ORGANIZATION_ID },
          },
        }
      : {}),
    provider: { "@type": "TravelAgency", "@id": ORGANIZATION_ID, name: SITE_NAME, url: SITE_URL },
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
  locale,
}: {
  headline: string;
  description?: string;
  image?: string;
  url: string;
  datePublished: Date;
  dateModified: Date;
  author?: string;
  locale: Locale;
}) {
  return safeJsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: locale,
    image: image || undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: datePublished.toISOString(),
    dateModified: dateModified.toISOString(),
    author: author
      ? { "@type": "Person", name: author }
      : { "@type": "Organization", "@id": ORGANIZATION_ID, name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  });
}
