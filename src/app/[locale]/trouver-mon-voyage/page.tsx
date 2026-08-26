import type { Metadata } from "next";
import { TripFinderLanding } from "@/components/get/TripFinderLanding";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { pageMetadata } from "@/lib/seo";

const META = {
  fr: { title: "Trouver mon voyage", description: "Répondez à quelques questions et trouvez le voyage sur-mesure qui vous correspond, parmi nos excursions et circuits dans le monde entier." },
  en: { title: "Find my trip", description: "Answer a few questions and find the tailor-made trip that's right for you, among our excursions and tours worldwide." },
  es: { title: "Encontrar mi viaje", description: "Responda algunas preguntas y encuentre el viaje a medida que le corresponde, entre nuestras excursiones y circuitos en todo el mundo." },
} as const satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return pageMetadata({ locale, path: "/trouver-mon-voyage", ...META[locale] });
}

export default function TripFinderPage() {
  return <TripFinderLanding />;
}
