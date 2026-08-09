"use client";

import { LocaleLink } from "@/components/get/LocaleLink";
import { useLanguage } from "@/lib/i18n/context";
import { TourCard, type TourCardData } from "./TourCard";

export function FeaturedToursClient({ tours }: { tours: TourCardData[] }) {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="label-eyebrow text-neutral-500">{t("featured.eyebrow")}</p>
          <h2 className="font-display mt-2 max-w-xl text-3xl sm:text-4xl" style={{ textWrap: "balance" }}>
            {t("featured.title")}
          </h2>
          <p className="font-body mt-3 max-w-lg text-neutral-500">{t("featured.subtitle")}</p>
        </div>
        <LocaleLink href="/excursions" className="btn-outline shrink-0 text-neutral-900">
          {t("featured.viewAll")}
        </LocaleLink>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, i) => (
          <TourCard key={tour.slug} tour={tour} index={i} />
        ))}
      </div>
    </section>
  );
}
