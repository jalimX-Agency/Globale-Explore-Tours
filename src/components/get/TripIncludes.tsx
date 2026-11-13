"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

// `includes*` are comma-separated lists (see the Tour model); a trip without one renders nothing.
export function TripIncludes({ includes, includesEn, includesEs }: { includes: string; includesEn: string; includesEs: string }) {
  const { language, t } = useLanguage();
  const items = localized(language, includes, includesEn, includesEs)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {t("tripDetailPage.included")}
      </h2>
      <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="font-body flex gap-3 text-neutral-700">
            <Check className="mt-1 size-4 shrink-0 text-[var(--brand-accent)]" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
