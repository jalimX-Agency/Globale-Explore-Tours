"use client";

import { useState } from "react";
import { LocaleLink } from "@/components/get/LocaleLink";
import { useLanguage } from "@/lib/i18n/context";
import { TourCard, type TourCardData } from "./TourCard";

const THEMES = ["adventure", "culture", "relax", "family"] as const;

export function FeaturedToursClient({ tours }: { tours: TourCardData[] }) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter ? tours.filter((tour) => tour.theme === filter) : tours;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10">
      <div className="text-center">
        <h2
          className="font-display text-3xl font-normal tracking-wide text-neutral-800 sm:text-4xl lg:text-[45px]"
          style={{ textWrap: "balance" }}
        >
          {t("featured.title")}
        </h2>
        <p className="font-body mx-auto mt-3 max-w-lg text-neutral-500">{t("featured.subtitle")}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <button
            onClick={() => setFilter(null)}
            className={`label-eyebrow transition-opacity ${filter === null ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"}`}
          >
            {t("featured.all")}
          </button>
          {THEMES.map((theme) => (
            <button
              key={theme}
              onClick={() => setFilter(theme)}
              className={`label-eyebrow transition-opacity ${filter === theme ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"}`}
            >
              {t(`menu.${theme}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tour, i) => (
          <TourCard key={tour.slug} tour={tour} index={i} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <LocaleLink href="/excursions" className="btn-outline text-neutral-900">
          {t("featured.viewAll")}
        </LocaleLink>
      </div>
    </section>
  );
}
