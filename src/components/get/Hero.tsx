"use client";

import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

const HERO_VIDEO_URL = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev/heroVid.mp4";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-neutral-900">
      {/* fetchPriority="low": the LCP candidate is the H1 text, not this video — don't let
          it compete with fonts/JS for bandwidth during the critical rendering window. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // @ts-expect-error -- fetchPriority is valid on <video> in modern browsers, not yet in React's DOM types
        fetchPriority="low"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* No opacity-animated entrance here: animating opacity from 0 with a JS library
          (Framer Motion, GSAP...) delays Largest Contentful Paint until the JS bundle loads,
          hydrates, and the animation finishes — the text must be visible in the first paint. */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
        <div className="max-w-3xl">
          <h1
            className="font-display text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            style={{ textWrap: "balance" }}
          >
            {t("hero.title")}
          </h1>

          <p className="label-eyebrow mt-5 text-white/85">{t("hero.tagline")}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <LocaleLink href="/excursions" className="btn-outline text-white hover:border-white/70">
              {t("hero.cta")}
            </LocaleLink>
            <LocaleLink href="/faire-une-demande" className="btn-primary">
              {t("hero.bookCta")}
            </LocaleLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="label-eyebrow text-white/70">{t("hero.scroll")}</span>
        <span className="h-8 w-px bg-white/40" />
      </div>
    </section>
  );
}
