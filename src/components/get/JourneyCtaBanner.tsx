"use client";

import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

export function JourneyCtaBanner() {
  const { t } = useLanguage();

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[var(--brand-ink)] py-16 text-center text-white">
      <h2 className="font-display text-2xl sm:text-3xl">{t("tripDetailPage.readyToStart")}</h2>
      <LocaleLink href="/reserver" className="btn-accent mt-6 inline-flex text-xs px-6 py-3">
        {t("tripDetailPage.startPlanning")}
      </LocaleLink>
    </div>
  );
}
