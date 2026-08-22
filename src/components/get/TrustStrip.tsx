"use client";

import { Star, ShieldCheck, UserCheck, Headphones, Car } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const ITEMS = [
  { key: "rating", icon: Star, labelKey: "trust.ratingLabel", descKey: "trust.ratingDesc" },
  { key: "fees", icon: ShieldCheck, labelKey: "trust.noHiddenFees", descKey: "trust.noHiddenFeesDesc" },
  { key: "guides", icon: UserCheck, labelKey: "trust.localGuides", descKey: "trust.localGuidesDesc" },
  { key: "support", icon: Headphones, labelKey: "trust.support", descKey: "trust.supportDesc" },
  { key: "pickup", icon: Car, labelKey: "trust.pickup", descKey: "trust.pickupDesc" },
] as const;

export function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-neutral-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2
          className="font-display text-3xl font-normal tracking-wide text-neutral-800 sm:text-4xl lg:text-[45px]"
          style={{ textWrap: "balance" }}
        >
          {t("trust.title")}
        </h2>
        <p className="label-eyebrow mt-4 inline-block border-b-2 border-[var(--brand-accent)] pb-2 text-neutral-800">
          {t("trust.tab")}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map(({ key, icon: Icon, labelKey, descKey }) => (
            <div key={key} className="flex flex-col items-center text-center">
              <Icon className="h-7 w-7 text-[var(--brand-accent)]" strokeWidth={1.5} />
              <p className="font-display mt-4 text-base text-neutral-900">{t(labelKey)}</p>
              <p className="font-body mt-2 text-sm leading-relaxed text-neutral-500">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
