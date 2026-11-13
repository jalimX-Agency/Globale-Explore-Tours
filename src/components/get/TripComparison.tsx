"use client";

import { LocaleLink } from "@/components/get/LocaleLink";
import { useLanguage } from "@/lib/i18n/context";
import { tourHref, type TourCardData } from "@/components/get/TourCard";
import type { ComparisonRow } from "@/lib/destinationComparisons";

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

const LABELS = {
  fr: { trip: "Circuit", duration: "Durée", format: "Formule", highlights: "Points forts", idealFor: "Idéal pour", price: "À partir de" },
  en: { trip: "Tour", duration: "Duration", format: "Format", highlights: "Highlights", idealFor: "Ideal for", price: "From" },
  es: { trip: "Circuito", duration: "Duración", format: "Fórmula", highlights: "Lo más destacado", idealFor: "Ideal para", price: "Desde" },
} as const;

export function TripComparison({ title, rows, tours }: { title: string; rows: Record<string, ComparisonRow>; tours: TourCardData[] }) {
  const { language } = useLanguage();
  const lang = language === "en" || language === "es" ? language : "fr";
  const l = LABELS[lang];
  const pick = (v: readonly [string, string, string]) => localized(language, v[0], v[1], v[2]);
  const lines = Object.entries(rows)
    .map(([slug, row]) => ({ row, tour: tours.find((t) => t.slug === slug) }))
    .filter((x): x is { row: ComparisonRow; tour: TourCardData } => Boolean(x.tour));
  if (lines.length < 2) return null;

  return (
    <section>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">{title}</h2>
      <div className="mt-8 overflow-x-auto">
        <table className="font-body w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-300 text-neutral-500">
              {[l.trip, l.duration, l.format, l.highlights, l.idealFor, l.price].map((h) => (
                <th key={h} scope="col" className="py-3 pr-4 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lines.map(({ row, tour }) => (
              <tr key={tour.slug} className="border-b border-neutral-200 align-top">
                <th scope="row" className="py-4 pr-4 font-medium text-neutral-900">
                  <LocaleLink href={tourHref(tour)} className="hover:underline">
                    {localized(language, tour.name, tour.nameEn, tour.nameEs)}
                  </LocaleLink>
                </th>
                <td className="py-4 pr-4 text-neutral-700">{localized(language, tour.duration, tour.durationEn, tour.durationEs)}</td>
                <td className="py-4 pr-4 text-neutral-700">{pick(row.format)}</td>
                <td className="py-4 pr-4 text-neutral-700">{pick(row.highlights)}</td>
                <td className="py-4 pr-4 text-neutral-700">{pick(row.idealFor)}</td>
                <td className="py-4 pr-4 whitespace-nowrap text-neutral-900">
                  {tour.price > 0 ? `${tour.price.toLocaleString("fr-FR")} ${tour.currency === "EUR" ? "€" : tour.currency}` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
