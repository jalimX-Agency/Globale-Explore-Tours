"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { TripFinderCard } from "@/components/get/TripFinderCard";
import { tourHref, type TourCardData } from "@/components/get/TourCard";
import { loadMoreTripFinderResults } from "@/app/[locale]/trouver-mon-voyage/resultats/actions";
import type { TripFinderSort } from "@/app/[locale]/trouver-mon-voyage/resultats/lib";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const R2 = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev";
const CUSTOM_TRIP_IMAGE = `${R2}/destinations/maldives.jpg`;

const FEELING_KEYS = ["revitalized", "freedom", "distraction", "challenged", "contentment"] as const;

const MONTH_KEYS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

const SORTS: TripFinderSort[] = ["recommended", "price-asc", "price-desc"];

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

// Mirrors the source Trip Finder results page's anatomy: light background, a centered
// "TRIP FINDER" heading with a dynamic result count underneath, SHOW FILTERS toggle
// revealing a feeling/month panel, SORT BY, active-filter pills with CLEAR ALL, a 4-column
// grid of full-bleed photo cards ending in a "build your own trip" tile styled exactly like
// the other cards (not a separate dashed box), and an appending LOAD MORE.
export function TripFinderResultsClient({
  initialTours,
  totalCount,
  feeling,
  when,
  sort,
}: {
  initialTours: TourCardData[];
  totalCount: number;
  feeling: string;
  when: string;
  sort: TripFinderSort;
}) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [showFilters, setShowFilters] = useState(false);
  const [tours, setTours] = useState(initialTours);
  const [loadedPages, setLoadedPages] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const hasMore = tours.length < totalCount;

  const monthItems = Object.fromEntries(MONTH_KEYS.map((key) => [key, t(`tripFinder.months.${key}`)]));
  const sortItems = {
    recommended: t("tripFinder.sortRecommended"),
    "price-asc": t("tripFinder.sortPriceAsc"),
    "price-desc": t("tripFinder.sortPriceDesc"),
  };

  function pushParams(next: { feeling?: string; when?: string; sort?: string }) {
    const params = new URLSearchParams();
    const nextFeeling = next.feeling ?? feeling;
    const nextWhen = next.when ?? when;
    const nextSort = next.sort ?? sort;
    if (nextFeeling) params.set("feeling", nextFeeling);
    if (nextWhen) params.set("when", nextWhen);
    if (nextSort !== "recommended") params.set("sort", nextSort);
    const qs = params.toString();
    startTransition(() => {
      router.push(`/${language}/trouver-mon-voyage/resultats${qs ? `?${qs}` : ""}`);
    });
  }

  async function handleLoadMore() {
    setLoadingMore(true);
    const nextPage = loadedPages + 1;
    const more = await loadMoreTripFinderResults(feeling || undefined, when || undefined, sort, nextPage);
    setTours((prev) => [...prev, ...more]);
    setLoadedPages(nextPage);
    setLoadingMore(false);
  }

  const activePills = [
    feeling && { key: "feeling", label: t(`feelings.${feeling}`), clear: () => pushParams({ feeling: "" }) },
    when && { key: "when", label: t(`tripFinder.months.${when}`), clear: () => pushParams({ when: "" }) },
  ].filter(Boolean) as { key: string; label: string; clear: () => void }[];

  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 text-center lg:px-10">
        <h1 className="font-display text-3xl font-bold tracking-wide text-neutral-900 uppercase sm:text-4xl">
          {t("tripFinder.resultsEyebrow")}
        </h1>
        <p className="label-eyebrow mt-3 text-neutral-400">
          {tours.length > 0 || totalCount > 0
            ? t("tripFinder.resultsFound").replace("{count}", String(totalCount))
            : t("tripFinder.resultsSearching")}
        </p>
      </div>

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 py-5">
          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            className="font-body inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-900"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? t("tripFinder.hideFilters") : t("tripFinder.showFilters")}
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="label-eyebrow text-neutral-400">{t("tripFinder.sortBy")}</span>
              <Select value={sort} onValueChange={(v) => pushParams({ sort: v ?? "recommended" })} items={sortItems}>
                <SelectTrigger className="h-9 w-auto min-w-[10rem] border-0 shadow-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SORTS.map((s) => (
                    <SelectItem key={s} value={s}>
                      {sortItems[s]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {activePills.map((pill) => (
              <button
                key={pill.key}
                type="button"
                onClick={pill.clear}
                className="font-body inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-1.5 text-xs text-white hover:bg-neutral-700"
              >
                {pill.label}
                <X className="h-3 w-3" />
              </button>
            ))}
            {activePills.length > 0 && (
              <button
                type="button"
                onClick={() => pushParams({ feeling: "", when: "" })}
                className="font-body text-xs font-medium text-neutral-400 underline hover:text-neutral-600"
              >
                {t("tripFinder.clearAll")}
              </button>
            )}
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mb-8 grid grid-cols-1 gap-8 rounded-xl border border-neutral-100 bg-[#FAF9F6] p-6 sm:grid-cols-2">
                <div>
                  <p className="label-eyebrow mb-3 text-neutral-500">{t("tripFinder.feelingLabel")}</p>
                  <div className="space-y-2">
                    {FEELING_KEYS.map((key) => (
                      <label key={key} className="flex items-center gap-2 text-sm text-neutral-700">
                        <Checkbox
                          checked={feeling === key}
                          onCheckedChange={(checked) => pushParams({ feeling: checked ? key : "" })}
                        />
                        {t(`feelings.${key}`)}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="label-eyebrow mb-3 text-neutral-500">{t("tripFinder.whenLabel")}</p>
                  <Select
                    value={when || "any"}
                    onValueChange={(v) => pushParams({ when: !v || v === "any" ? "" : v })}
                    items={{ any: t("tripFinder.anyMonth"), ...monthItems }}
                  >
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">{t("tripFinder.anyMonth")}</SelectItem>
                      {MONTH_KEYS.map((key) => (
                        <SelectItem key={key} value={key}>
                          {t(`tripFinder.months.${key}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {tours.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-body text-lg text-neutral-400">{t("tripFinder.noResults")}</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-2 gap-4 pt-2 sm:gap-6 lg:grid-cols-4">
            {tours.map((tour) => {
              const name = localized(language, tour.name, tour.nameEn, tour.nameEs);
              const tagline = localized(language, tour.tagline, tour.taglineEn, tour.taglineEs);
              const duration = localized(language, tour.duration, tour.durationEn, tour.durationEs);
              return (
                <TripFinderCard
                  key={tour.slug}
                  href={tourHref(tour)}
                  image={tour.image}
                  badge={duration}
                  title={name}
                  description={tagline}
                  price={`${t("featured.from")} ${tour.price}€${t("featured.perPerson")}`}
                  ctaLabel={t("destinationsPage.exploreTrip")}
                />
              );
            })}

            <TripFinderCard
              href="/faire-une-demande"
              image={CUSTOM_TRIP_IMAGE}
              badge={t("tripFinder.customTripsBadge")}
              title={t("tripFinder.customTripTitle")}
              description={t("tripFinder.customTripBody")}
              ctaLabel={t("tripFinder.customTripCta")}
              ctaSolid
            />
          </motion.div>
        )}

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="btn-outline disabled:opacity-50"
            >
              {loadingMore ? "..." : t("tripFinder.loadMore")}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
