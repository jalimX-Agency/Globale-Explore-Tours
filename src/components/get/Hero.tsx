"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

const HERO_VIDEO_URL = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev/heroVid.mp4";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-neutral-900">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Even wash for legibility — text sits mid-frame, not anchored to the base */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            style={{ textWrap: "balance" }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="label-eyebrow mt-5 text-white/85"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <LocaleLink href="/excursions" className="btn-outline text-white hover:border-white/70">
              {t("hero.cta")}
            </LocaleLink>
            <LocaleLink href="/reserver" className="btn-primary">
              {t("hero.bookCta")}
            </LocaleLink>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="label-eyebrow text-white/70">{t("hero.scroll")}</span>
        <span className="h-8 w-px bg-white/40" />
      </motion.div>
    </section>
  );
}
