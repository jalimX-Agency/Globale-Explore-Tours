"use client";

import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { Breadcrumb } from "@/components/get/Breadcrumb";
import { CheckCircle2, Users, Headset, Car } from "lucide-react";

const PILLARS = [
  { icon: CheckCircle2, titleKey: "trust.noHiddenFees", bodyKey: "trust.noHiddenFeesDesc" },
  { icon: Users, titleKey: "trust.localGuides", bodyKey: "trust.localGuidesDesc" },
  { icon: Headset, titleKey: "trust.support", bodyKey: "trust.supportDesc" },
  { icon: Car, titleKey: "trust.pickup", bodyKey: "trust.pickupDesc" },
] as const;

export function AboutPageClient() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Breadcrumb items={[{ label: t("nav.about") }]} />

      <div className="mt-8 text-center">
        <p className="label-eyebrow text-[var(--brand-accent)]">{t("aboutPage.eyebrow")}</p>
        <h1 className="font-display mt-2 text-3xl text-neutral-900 sm:text-4xl" style={{ textWrap: "balance" }}>
          {t("aboutPage.title")}
        </h1>
        <p className="font-body mt-6 text-base leading-relaxed text-neutral-600">{t("aboutPage.intro")}</p>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl text-neutral-900">{t("aboutPage.storyTitle")}</h2>
        <p className="font-body mt-4 text-base leading-relaxed text-neutral-700">{t("aboutPage.storyBody1")}</p>
        <p className="font-body mt-4 text-base leading-relaxed text-neutral-700">{t("aboutPage.storyBody2")}</p>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl text-neutral-900">{t("aboutPage.pillarsTitle")}</h2>
        <p className="font-body mt-2 text-sm text-neutral-500">{t("aboutPage.pillarsSubtitle")}</p>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PILLARS.map(({ icon: Icon, titleKey, bodyKey }) => (
            <div key={titleKey} className="flex gap-4">
              <Icon className="h-6 w-6 flex-shrink-0 text-[var(--brand-accent)]" strokeWidth={1.5} />
              <div>
                <p className="font-display text-base text-neutral-900">{t(titleKey)}</p>
                <p className="font-body mt-1 text-sm leading-relaxed text-neutral-600">{t(bodyKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body mt-10 border-t border-neutral-200 pt-6 text-center text-sm italic text-neutral-500">
          {t("aboutPage.ratingCallout")}
        </p>
      </div>

      <div className="mt-16 rounded-sm bg-[var(--brand-sand)] p-8 text-center sm:p-10">
        <p className="font-display text-xl text-neutral-900 sm:text-2xl">{t("aboutPage.ctaTitle")}</p>
        <p className="font-body mt-2 text-sm text-neutral-600">{t("aboutPage.ctaBody")}</p>
        <LocaleLink href="/faire-une-demande" className="btn-primary mt-6 inline-flex text-xs">
          {t("aboutPage.ctaButton")}
        </LocaleLink>
      </div>
    </main>
  );
}
