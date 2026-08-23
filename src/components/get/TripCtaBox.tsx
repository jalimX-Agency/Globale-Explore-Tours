"use client";

import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

export function TripCtaBox() {
  const { t } = useLanguage();

  return (
    <div
      className="my-12 flex flex-col items-start gap-6 rounded-sm bg-cover bg-center p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10"
      style={{ backgroundImage: "url(/textures/green-paper-bg.jpg)" }}
    >
      <div>
        <p className="font-display text-xl sm:text-2xl">{t("tripDetailPage.makeItYours")}</p>
        <p className="font-body mt-2 max-w-md text-sm text-white/85">{t("tripDetailPage.makeItYoursBody")}</p>
      </div>
      <LocaleLink
        href="/faire-une-demande"
        className="flex-shrink-0 bg-black px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white"
      >
        {t("destinationsPage.enquire")}
      </LocaleLink>
    </div>
  );
}
