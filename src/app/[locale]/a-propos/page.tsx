import type { Metadata } from "next";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { pageMetadata } from "@/lib/seo";
import { AboutPageClient } from "./AboutPageClient";

const META = {
  fr: {
    title: "À propos",
    description: "Globale Explore Tours conçoit des voyages et circuits sur-mesure dans le monde entier, depuis notre bureau de Valenciennes, en France. Guides locaux nommés, aucun frais caché.",
  },
  en: {
    title: "About us",
    description: "Globale Explore Tours designs tailor-made trips and tours worldwide, from our office in Valenciennes, France. Named local guides, no hidden fees.",
  },
  es: {
    title: "Sobre nosotros",
    description: "Globale Explore Tours diseña viajes y circuitos a medida en todo el mundo, desde nuestra oficina en Valenciennes, Francia. Guías locales con nombre propio, sin costes ocultos.",
  },
} as const satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return pageMetadata({ locale, path: "/a-propos", ...META[locale] });
}

export default function Page() {
  return <AboutPageClient />;
}
