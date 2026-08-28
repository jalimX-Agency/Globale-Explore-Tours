"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;
const HERO_IMAGE = `${R2}/destinations/seychelles-hero.jpg`;

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

// Landing step of the Trip Finder — deliberately just two questions (feeling, when), no
// destination picker, matching the source pattern this was modeled on exactly: a full-bleed
// evocative photo, two white dropdown fields, and a small solid CTA button — not a generic
// dark section with a big pill button.
export function TripFinderLanding() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [feeling, setFeeling] = useState("");
  const [when, setWhen] = useState("");

  const feelingItems = Object.fromEntries(FEELING_KEYS.map((key) => [key, t(`feelings.${key}`)]));
  const monthItems = Object.fromEntries(MONTH_KEYS.map((key) => [key, t(`tripFinder.months.${key}`)]));

  function submit() {
    const params = new URLSearchParams();
    if (feeling) params.set("feeling", feeling);
    if (when) params.set("when", when);
    const qs = params.toString();
    router.push(`/${language}/trouver-mon-voyage/resultats${qs ? `?${qs}` : ""}`);
  }

  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-cover bg-center px-6 py-24 text-center text-white"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      <div className="absolute inset-0 bg-black/45" />

      {/* Faint decorative arcs in the corners, echoing the source page's line-art flourish —
          pure CSS/SVG, no external asset. */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-white/10"
        viewBox="0 0 200 200"
        fill="none"
      >
        {[40, 60, 80, 100].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 text-white/10"
        viewBox="0 0 200 200"
        fill="none"
      >
        {[40, 60, 80, 100].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>

      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-wide uppercase sm:text-5xl lg:text-6xl">
          {t("tripFinder.heroTitle")}
        </h1>
        <p className="font-body mx-auto mt-6 max-w-xl text-base text-white/90 sm:text-lg">
          {t("tripFinder.heroSubtitle")}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Select value={feeling} onValueChange={(v) => setFeeling(v ?? "")} items={feelingItems}>
            <SelectTrigger className="h-14 w-full rounded-sm border-0 bg-white px-5 text-sm text-neutral-900 shadow-lg data-placeholder:text-neutral-500">
              <SelectValue placeholder={t("tripFinder.feelingLabel")} />
            </SelectTrigger>
            <SelectContent>
              {FEELING_KEYS.map((key) => (
                <SelectItem key={key} value={key}>
                  {t(`feelings.${key}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={when} onValueChange={(v) => setWhen(v ?? "")} items={monthItems}>
            <SelectTrigger className="h-14 w-full rounded-sm border-0 bg-white px-5 text-sm text-neutral-900 shadow-lg data-placeholder:text-neutral-500">
              <SelectValue placeholder={t("tripFinder.whenLabel")} />
            </SelectTrigger>
            <SelectContent>
              {MONTH_KEYS.map((key) => (
                <SelectItem key={key} value={key}>
                  {t(`tripFinder.months.${key}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <button
          type="button"
          onClick={submit}
          className="mt-8 inline-flex items-center rounded-sm bg-neutral-900 px-8 py-3.5 text-xs font-bold tracking-wide text-white uppercase transition-colors hover:bg-black"
        >
          {t("tripFinder.cta")}
        </button>
      </div>
    </section>
  );
}
