"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { TourCard, type TourCardData } from "@/components/get/TourCard";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, Globe, Flame, Heart, ArrowRight } from "lucide-react";

const THEMES = ["adventure", "culture", "relax", "family"] as const;
const TRAVELERS = ["family", "couples", "groups", "honeymoon", "solo"] as const;

type FeelingKey = "revitalized" | "freedom" | "distraction" | "challenged" | "contentment";

interface FeelingConfig {
  key: FeelingKey;
  theme: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const FEELINGS: FeelingConfig[] = [
  { key: "revitalized", theme: "relax", icon: Sparkles, color: "bg-emerald-500/10 text-emerald-600" },
  { key: "freedom", theme: "adventure", icon: Compass, color: "bg-blue-500/10 text-blue-600" },
  { key: "distraction", theme: "culture", icon: Globe, color: "bg-amber-500/10 text-amber-600" },
  { key: "challenged", theme: "adventure", icon: Flame, color: "bg-rose-500/10 text-rose-600" },
  { key: "contentment", theme: "relax", icon: Heart, color: "bg-purple-500/10 text-purple-600" },
];

export function ExcursionsClient({
  tours,
  activeTheme: initialTheme,
  activeTravelers: initialTravelers,
  page = 1,
  totalPages = 1,
  baseQuery = "",
}: {
  tours: TourCardData[];
  activeTheme?: string;
  activeTravelers?: string;
  page?: number;
  totalPages?: number;
  baseQuery?: string;
}) {
  const { t } = useLanguage();
  const [selectedFeeling, setSelectedFeeling] = useState<FeelingKey | null>(null);

  // Filter in memory dynamically if a feeling is selected, otherwise rely on backend filters
  const filteredTours = useMemo(() => {
    if (!selectedFeeling) return tours;
    const targetTheme = FEELINGS.find((f) => f.key === selectedFeeling)?.theme;
    return tours.filter((t) => t.theme === targetTheme);
  }, [tours, selectedFeeling]);

  function pageHref(p: number) {
    const params = new URLSearchParams(baseQuery);
    if (p > 1) params.set("page", String(p));
    else params.delete("page");
    const qs = params.toString();
    return qs ? `/excursions?${qs}` : "/excursions";
  }

  const activeFeelingDesc = selectedFeeling 
    ? t(`feelings.${selectedFeeling}Desc`) 
    : t("feelings.subtitle");

  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="relative overflow-hidden bg-neutral-900 py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
          <span className="label-eyebrow text-neutral-400 tracking-[0.25em]">{t("nav.experiences")}</span>
          <h1 className="font-display mt-6 text-4xl font-light tracking-wider sm:text-5xl lg:text-6xl text-white">
            {t("excursionsPage.title")}
          </h1>
          <p className="font-body mx-auto mt-6 max-w-2xl text-lg text-neutral-300 font-light leading-relaxed">
            {t("excursionsPage.subtitle")}
          </p>
        </div>
      </section>

      {/* Feelings Engine */}
      <section className="mx-auto -mt-12 max-w-5xl px-6 relative z-10 lg:px-10">
        <div className="rounded-xl border border-neutral-100 bg-white p-8 shadow-xl md:p-12">
          <div className="text-center">
            <h2 className="font-display text-xl font-normal tracking-wide text-neutral-800">
              {t("feelings.title")}
            </h2>
            <div className="mt-2 h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeFeelingDesc}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="font-body text-sm text-neutral-500 max-w-lg"
                >
                  {activeFeelingDesc}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Mood Selector Buttons */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center lg:gap-6">
            <button
              onClick={() => setSelectedFeeling(null)}
              className={`flex items-center gap-3 rounded-full px-6 py-3.5 text-sm transition-all duration-300 font-body ${
                !selectedFeeling
                  ? "bg-neutral-900 text-white shadow-md"
                  : "bg-neutral-50 hover:bg-neutral-100 text-neutral-600"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-neutral-400" />
              {t("feelings.all")}
            </button>

            {FEELINGS.map(({ key, icon: Icon, color }) => {
              const isActive = selectedFeeling === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedFeeling(key)}
                  className={`flex items-center gap-3 rounded-full px-6 py-3.5 text-sm transition-all duration-300 font-body ${
                    isActive
                      ? "bg-neutral-900 text-white shadow-md scale-[1.03]"
                      : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
                  }`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full ${color}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {t(`feelings.${key}`)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Traditional Tag & Themes Filters */}
      <section className="mx-auto max-w-7xl px-6 mt-16 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-neutral-200/60 pb-8 md:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <LocaleLink
              href="/excursions"
              onClick={() => setSelectedFeeling(null)}
              className={`label-eyebrow transition-colors ${
                !initialTheme && !selectedFeeling ? "text-neutral-900 font-bold border-b border-neutral-900 pb-1" : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              {t("featured.all")}
            </LocaleLink>
            {THEMES.map((theme) => (
              <LocaleLink
                key={theme}
                href={`/excursions?theme=${theme}`}
                onClick={() => setSelectedFeeling(null)}
                className={`label-eyebrow transition-colors ${
                  initialTheme === theme ? "text-neutral-900 font-bold border-b border-neutral-900 pb-1" : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {t(`menu.${theme}`)}
              </LocaleLink>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            {TRAVELERS.map((tr) => (
              <LocaleLink
                key={tr}
                href={`/excursions?travelers=${tr}`}
                onClick={() => setSelectedFeeling(null)}
                className={`font-body px-3 py-1 rounded-sm border ${
                  initialTravelers === tr 
                    ? "border-neutral-800 bg-neutral-800 text-white font-medium" 
                    : "border-neutral-200 text-neutral-500 hover:border-neutral-400"
                }`}
              >
                {t(`travelerTypes.${tr}`)}
              </LocaleLink>
            ))}
          </div>
        </div>

        {/* Dynamic Tours Grid */}
        <AnimatePresence mode="wait">
          {filteredTours.length > 0 ? (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredTours.map((tour, i) => (
                <div key={tour.slug} className="group relative">
                  <TourCard tour={tour} index={i} />
                  <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <LocaleLink 
                      href={`/faire-une-demande?tour=${tour.slug}`}
                      className="font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-accent)] hover:text-[var(--brand-accent-dark)] flex items-center gap-1"
                    >
                      {t("destinationsPage.enquire")}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </LocaleLink>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-20 text-center"
            >
              <p className="font-body text-neutral-400 text-lg">{t("excursionsPage.noResults")}</p>
              <button 
                onClick={() => { setSelectedFeeling(null); window.location.href = "/excursions"; }}
                className="btn-primary mt-6"
              >
                {t("featured.all")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedFeeling && totalPages > 1 && (
          <nav
            aria-label={t("excursionsPage.title")}
            className="mt-16 flex items-center justify-center gap-2 border-t border-neutral-200/60 pt-10"
          >
            <LocaleLink
              href={pageHref(page - 1)}
              aria-disabled={page <= 1}
              className={`label-eyebrow rounded-sm border px-4 py-2 transition-colors ${
                page <= 1
                  ? "pointer-events-none border-neutral-100 text-neutral-300"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {t("pagination.previous")}
            </LocaleLink>
            <span className="font-body px-4 text-sm text-neutral-500">
              {t("pagination.pageOf").replace("{page}", String(page)).replace("{total}", String(totalPages))}
            </span>
            <LocaleLink
              href={pageHref(page + 1)}
              aria-disabled={page >= totalPages}
              className={`label-eyebrow rounded-sm border px-4 py-2 transition-colors ${
                page >= totalPages
                  ? "pointer-events-none border-neutral-100 text-neutral-300"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {t("pagination.next")}
            </LocaleLink>
          </nav>
        )}
      </section>
    </main>
  );
}
