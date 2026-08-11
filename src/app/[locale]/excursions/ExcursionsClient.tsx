"use client";

import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { TourCard, type TourCardData } from "@/components/get/TourCard";

const THEMES = ["adventure", "culture", "relax", "family"] as const;
const TRAVELERS = ["family", "couples", "groups", "honeymoon", "solo"] as const;

export function ExcursionsClient({
  tours,
  activeTheme,
  activeTravelers,
}: {
  tours: TourCardData[];
  activeTheme?: string;
  activeTravelers?: string;
}) {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10">
      <div className="text-center">
        <h1
          className="font-display text-3xl font-normal tracking-wide text-neutral-800 sm:text-4xl lg:text-[45px]"
          style={{ textWrap: "balance" }}
        >
          {t("excursionsPage.title")}
        </h1>
        <p className="font-body mx-auto mt-3 max-w-xl text-neutral-500">{t("excursionsPage.subtitle")}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <LocaleLink
            href="/excursions"
            className={`label-eyebrow transition-opacity ${!activeTheme ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"}`}
          >
            {t("featured.all")}
          </LocaleLink>
          {THEMES.map((theme) => (
            <LocaleLink
              key={theme}
              href={`/excursions?theme=${theme}`}
              className={`label-eyebrow transition-opacity ${activeTheme === theme ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"}`}
            >
              {t(`menu.${theme}`)}
            </LocaleLink>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
          {TRAVELERS.map((tr) => (
            <LocaleLink
              key={tr}
              href={`/excursions?travelers=${tr}`}
              className={`font-body transition-opacity ${activeTravelers === tr ? "font-semibold text-neutral-800" : "text-neutral-400 hover:text-neutral-600"}`}
            >
              {t(`travelerTypes.${tr}`)}
            </LocaleLink>
          ))}
        </div>
      </div>

      {tours.length > 0 ? (
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} index={i} />
          ))}
        </div>
      ) : (
        <p className="font-body mt-16 text-center text-neutral-400">{t("excursionsPage.noResults")}</p>
      )}
    </main>
  );
}
