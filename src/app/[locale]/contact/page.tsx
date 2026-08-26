import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { pageMetadata } from "@/lib/seo";

const META = {
  fr: { title: "Contact", description: "Contactez Globale Explore Tours — par téléphone, WhatsApp ou email — pour organiser votre voyage sur-mesure." },
  en: { title: "Contact", description: "Contact Globale Explore Tours — by phone, WhatsApp or email — to plan your tailor-made trip." },
  es: { title: "Contacto", description: "Contacte con Globale Explore Tours — por teléfono, WhatsApp o email — para organizar su viaje a medida." },
} as const satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return pageMetadata({ locale, path: "/contact", ...META[locale] });
}

export default function ContactPage() {
  return <ContactPageClient />;
}
