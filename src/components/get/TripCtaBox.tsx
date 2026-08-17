"use client";

import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

export function TripCtaBox() {
  const { t } = useLanguage();

  return (
    <div className="my-12 flex flex-col items-start gap-6 rounded-sm bg-[var(--brand-accent)] p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
      <div>
        <p className="font-display text-xl sm:text-2xl">{t("tripDetailPage.makeItYours")}</p>
        <p className="font-body mt-2 max-w-md text-sm text-white/85">{t("tripDetailPage.makeItYoursBody")}</p>
      </div>
      <LocaleLink href="/reserver" className="btn-primary flex-shrink-0 text-xs">
        {t("destinationsPage.enquire")}
      </LocaleLink>
    </div>
  );
}
