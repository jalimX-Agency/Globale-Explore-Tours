"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

export function PhoneCtaBar() {
  const { t } = useLanguage();

  return (
    <div
      className="relative overflow-hidden rounded-sm bg-[#0d3b66] bg-cover bg-center"
      style={{ backgroundImage: "url(/textures/cta-bar-pattern.png)" }}
    >
      <div className="relative flex flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <span className="hidden flex-shrink-0 items-center justify-center rounded-sm bg-white/15 p-3 sm:flex">
            <Phone className="h-5 w-5 text-white" strokeWidth={1.75} />
          </span>
          <a
            href="tel:+33667586462"
            className="font-display text-sm tracking-wide text-white hover:text-white/85 sm:text-base"
          >
            {t("phoneCta.text")}
          </a>
        </div>

        <LocaleLink
          href="/faire-une-demande"
          className="btn-primary flex-shrink-0 bg-white text-neutral-900 hover:bg-neutral-100"
        >
          {t("phoneCta.cta")}
        </LocaleLink>
      </div>
    </div>
  );
}
