"use client";

import { useLanguage } from "@/lib/i18n/context";

export function TrustStrip() {
  const { t } = useLanguage();

  return (
    <div className="border-b border-neutral-100 bg-white">
      <div className="font-body mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4 text-xs text-neutral-600 sm:text-sm">
        <span className="flex items-center gap-1.5">
          <StarIcon /> {t("trust.ratingLabel")}
        </span>
        <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:inline-block" />
        <span>{t("trust.pickup")}</span>
        <span className="hidden h-1 w-1 rounded-full bg-neutral-300 sm:inline-block" />
        <span>{t("trust.noHiddenFees")}</span>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[var(--brand-accent)]" aria-hidden="true">
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5z" />
    </svg>
  );
}
