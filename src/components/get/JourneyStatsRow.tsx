"use client";

import { useLanguage } from "@/lib/i18n/context";

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function JourneyStatsRow({
  whenLabel,
  whenLabelEn,
  whenLabelEs,
  price,
  currency,
  duration,
  durationEn,
  durationEs,
}: {
  whenLabel: string;
  whenLabelEn: string;
  whenLabelEs: string;
  price: number;
  currency: string;
  duration: string;
  durationEn: string;
  durationEs: string;
}) {
  const { language, t } = useLanguage();
  const when = localized(language, whenLabel, whenLabelEn, whenLabelEs);
  const durationText = localized(language, duration, durationEn, durationEs);

  return (
    <div className="mx-auto mt-10 max-w-2xl border-t border-neutral-200 pt-8">
      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <p className="label-eyebrow" style={{ color: "var(--brand-clay)", fontSize: "1.05rem", letterSpacing: "0.12em" }}>
            {t("tripDetailPage.when")}
          </p>
          <p className="font-body mt-2 text-sm text-neutral-800">{when}</p>
        </div>
        <div>
          <p className="label-eyebrow" style={{ color: "var(--brand-accent)", fontSize: "1.05rem", letterSpacing: "0.12em" }}>
            {t("tripDetailPage.price")}
          </p>
          <p className="font-body mt-2 text-sm text-neutral-800">
            {t("tripDetailPage.priceFrom")} {price.toLocaleString("fr-FR")}{currency === "EUR" ? "€" : currency}{" "}
            {t("tripDetailPage.exclFlights")}
          </p>
          <p className="font-body mt-0.5 text-xs italic text-neutral-400">{t("tripDetailPage.priceSharing")}</p>
        </div>
        <div>
          <p className="label-eyebrow" style={{ color: "var(--brand-ink-soft)", fontSize: "1.05rem", letterSpacing: "0.12em" }}>
            {t("tripDetailPage.howLong")}
          </p>
          <p className="font-body mt-2 text-sm text-neutral-800">{durationText}</p>
          <p className="font-body mt-0.5 text-xs italic text-neutral-400">{t("tripDetailPage.idealLength")}</p>
        </div>
      </div>
    </div>
  );
}
