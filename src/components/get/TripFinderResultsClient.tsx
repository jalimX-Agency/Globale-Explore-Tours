"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { TourCard, type TourCardData } from "@/components/get/TourCard";
import { loadMoreTripFinderResults } from "@/app/[locale]/trouver-mon-voyage/resultats/actions";
import type { TripFinderSort } from "@/app/[locale]/trouver-mon-voyage/resultats/lib";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

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

// Mirrors the source Trip Finder results page's anatomy: SHOW FILTERS toggle revealing a
// feeling/month panel, SORT BY, active-filter pills with CLEAR ALL, a card grid ending in a
// "build your own trip" CTA tile, and an appending LOAD MORE (not URL-driven pagination —
// filters/sort changes still go through the URL so results stay server-rendered/shareable,
// but "more of the same query" doesn't need a full navigation).
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
    <main className="min-h-screen bg-[#FAF9F6] pb-24">
      <section className="bg-neutral-900 py-16 text-center text-white sm:py-20">
        <span className="label-eyebrow text-neutral-400 tracking-[0.25em]">{t("tripFinder.resultsEyebrow")}</span>
        <h1 className="font-display mt-4 text-3xl font-light tracking-wide sm:text-4xl">
          {t("tripFinder.resultsTitle")}
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200/60 py-6">
          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            className="font-body inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-900"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? t("tripFinder.hideFilters") : t("tripFinder.showFilters")}
          </button>

          <div className="flex items-center gap-3">
            <span className="label-eyebrow text-neutral-400">{t("tripFinder.sortBy")}</span>
            <Select value={sort} onValueChange={(v) => pushParams({ sort: v ?? "recommended" })} items={sortItems}>
              <SelectTrigger className="h-9 w-auto min-w-[10rem]">
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
        </div>

        {activePills.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pb-6">
            {activePills.map((pill) => (
              <button
                key={pill.key}
                type="button"
                onClick={pill.clear}
                className="font-body inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-700 hover:border-neutral-400"
              >
                {pill.label}
                <X className="h-3 w-3" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => pushParams({ feeling: "", when: "" })}
              className="font-body text-xs font-medium text-neutral-400 underline hover:text-neutral-600"
            >
              {t("tripFinder.clearAll")}
            </button>
          </div>
        )}

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mb-8 grid grid-cols-1 gap-8 rounded-xl border border-neutral-100 bg-white p-6 sm:grid-cols-2">
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
          <motion.div layout className="grid grid-cols-1 gap-x-8 gap-y-16 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour, i) => (
              <TourCard key={tour.slug} tour={tour} index={i} />
            ))}

            <LocaleLink
              href="/faire-une-demande"
              className="group flex flex-col items-start justify-center rounded-sm border border-dashed border-neutral-300 p-8 text-left transition-colors hover:border-neutral-500"
            >
              <span className="label-eyebrow text-neutral-400">{t("tripFinder.customTripEyebrow")}</span>
              <p className="font-display mt-2 text-lg text-neutral-900">{t("tripFinder.customTripTitle")}</p>
              <p className="font-body mt-2 text-sm text-neutral-500">{t("tripFinder.customTripBody")}</p>
              <span className="font-body mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-accent)]">
                {t("tripFinder.customTripCta")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </LocaleLink>
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
