"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
// destination picker, matching the source pattern this was modeled on: catalogue filtering
// entirely by mood + timing, letting undecided visitors get real results in two clicks
// instead of a long filter form.
export function TripFinderLanding() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [feeling, setFeeling] = useState("");
  const [when, setWhen] = useState("");

  // Base UI's <Select.Value> only shows the raw stored value unless the root is given an
  // items map — without it the trigger would display "revitalized" instead of "Ressourcé".
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
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-neutral-900 px-6 py-24 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-20 [background-size:24px_24px]" />
      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="font-display text-4xl font-light tracking-wider sm:text-5xl lg:text-6xl">
          {t("tripFinder.heroTitle")}
        </h1>
        <p className="font-body mx-auto mt-6 max-w-xl text-lg font-light text-neutral-300">
          {t("tripFinder.heroSubtitle")}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-6">
          <div>
            <label className="label-eyebrow mb-2 block text-neutral-400">{t("tripFinder.feelingLabel")}</label>
            <Select value={feeling} onValueChange={(v) => setFeeling(v ?? "")} items={feelingItems}>
              <SelectTrigger className="h-12 w-full border-white/20 bg-white/5 px-4 text-base text-white data-placeholder:text-neutral-400">
                <SelectValue placeholder={t("feelings.all")} />
              </SelectTrigger>
              <SelectContent>
                {FEELING_KEYS.map((key) => (
                  <SelectItem key={key} value={key}>
                    {t(`feelings.${key}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="label-eyebrow mb-2 block text-neutral-400">{t("tripFinder.whenLabel")}</label>
            <Select value={when} onValueChange={(v) => setWhen(v ?? "")} items={monthItems}>
              <SelectTrigger className="h-12 w-full border-white/20 bg-white/5 px-4 text-base text-white data-placeholder:text-neutral-400">
                <SelectValue placeholder={t("tripFinder.anyMonth")} />
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
        </div>

        <button
          type="button"
          onClick={submit}
          className="btn-primary mt-10 bg-white text-neutral-900 hover:bg-neutral-100"
        >
          {t("tripFinder.cta")}
        </button>
      </div>
    </section>
  );
}
