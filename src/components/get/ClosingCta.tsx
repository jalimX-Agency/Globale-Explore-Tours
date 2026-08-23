"use client";

import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

export function ClosingCta() {
  const { t } = useLanguage();

  return (
    <section
      className="relative bg-cover bg-center py-16 text-white sm:py-20"
      style={{ backgroundImage: "url(/textures/closing-cta-bg.avif)" }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 text-center lg:px-10">
        <h2 className="font-display text-3xl font-normal tracking-wide sm:text-4xl" style={{ textWrap: "balance" }}>
          {t("closingCta.title")}
        </h2>
        <p className="font-body text-white/85">{t("closingCta.subtitle")}</p>
        <LocaleLink href="/faire-une-demande" className="btn-primary mt-2 bg-white text-neutral-900 hover:bg-neutral-100">
          {t("closingCta.cta")}
        </LocaleLink>
      </div>
    </section>
  );
}
