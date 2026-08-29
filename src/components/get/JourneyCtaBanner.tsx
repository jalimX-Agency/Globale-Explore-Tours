"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

const BG_IMAGE = `${process.env.NEXT_PUBLIC_R2_URL}/backgrounds/cta-band-blue.jpg`;

export function JourneyCtaBanner() {
  const { t } = useLanguage();

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-[var(--brand-ink)] py-16 text-center text-white">
      <Image src={BG_IMAGE} alt="" fill priority={false} className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10">
        <h2 className="font-display text-2xl sm:text-3xl">{t("tripDetailPage.readyToStart")}</h2>
        <LocaleLink href="/faire-une-demande" className="btn-accent mt-6 inline-flex text-xs px-6 py-3">
          {t("tripDetailPage.startPlanning")}
        </LocaleLink>
      </div>
    </div>
  );
}
