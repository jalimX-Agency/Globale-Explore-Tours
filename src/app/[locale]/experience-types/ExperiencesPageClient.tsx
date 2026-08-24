"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { Testimonials } from "@/components/get/Testimonials";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import { ExperienceCardRow, type ExperienceCard } from "@/components/get/ExperienceCardRow";
import { type TourCardData } from "@/components/get/TourCard";

const R2 = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev";

export type ExperienceTypeLite = {
  slug: string;
  kind: string;
  cardImage: string;
  cardTitle: string;
  cardTitleEn: string;
  cardTitleEs: string;
  cardDescription: string;
  cardDescriptionEn: string;
  cardDescriptionEs: string;
};

function localizedCard(e: ExperienceTypeLite, language: string): ExperienceCard {
  const title = language === "en" ? e.cardTitleEn || e.cardTitle : language === "es" ? e.cardTitleEs || e.cardTitle : e.cardTitle;
  const desc =
    language === "en"
      ? e.cardDescriptionEn || e.cardDescription
      : language === "es"
        ? e.cardDescriptionEs || e.cardDescription
        : e.cardDescription;
  return { key: e.slug, image: e.cardImage, title, desc, href: `/experience-types/${e.slug}` };
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80; // fixed header height
  window.scrollTo({ top, behavior: "smooth" });
}

export function ExperiencesPageClient({
  tours,
  experienceTypes,
}: {
  tours: TourCardData[];
  experienceTypes: ExperienceTypeLite[];
}) {
  const { t, language } = useLanguage();

  // Admin-editable (see /admin/experiences) — adding a new ExperienceType row (either kind)
  // adds a card here automatically, no code change needed.
  const whoCards: ExperienceCard[] = experienceTypes.filter((e) => e.kind !== "what").map((e) => localizedCard(e, language));
  const whatCards: ExperienceCard[] = experienceTypes.filter((e) => e.kind === "what").map((e) => localizedCard(e, language));

  return (
    <div className="bg-white text-neutral-900">
      {/* ── Hero ── */}
      <section className="relative flex h-[65vh] min-h-[460px] items-center justify-center overflow-hidden">
        <Image
          src={`${R2}/experiences/hero.jpg`}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
          <h1 className="font-display max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {t("experienceTypes.heroTitle")}
          </h1>
          <p className="font-body mt-4 max-w-xl text-base text-white/90">{t("experienceTypes.heroSubtitle")}</p>
          <LocaleLink href="/faire-une-demande" className="btn-outline mt-8 text-white">
            {t("experienceTypes.heroCta")}
          </LocaleLink>
        </div>
      </section>

      {/* ── Sticky sub-nav ── */}
      <div className="sticky top-14 z-30 border-y border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl justify-center gap-8 px-6 py-4 sm:gap-12">
          <button onClick={() => scrollToSection("whos-travelling")} className="label-eyebrow text-neutral-600 transition-colors hover:text-neutral-900">
            {t("experienceTypes.subnavWho")}
          </button>
          <button onClick={() => scrollToSection("whats-the-plan")} className="label-eyebrow text-neutral-600 transition-colors hover:text-neutral-900">
            {t("experienceTypes.subnavWhat")}
          </button>
          <button onClick={() => scrollToSection("how-to-travel")} className="label-eyebrow text-neutral-600 transition-colors hover:text-neutral-900">
            {t("experienceTypes.subnavHow")}
          </button>
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-display text-2xl text-neutral-900 sm:text-3xl">{t("experienceTypes.introTitle")}</h2>
        <p className="font-body mt-5 text-base leading-relaxed text-neutral-600">{t("experienceTypes.introBody")}</p>
        <LocaleLink href="/contact" className="btn-primary mt-8 inline-flex">
          {t("experienceTypes.introCta")}
        </LocaleLink>
      </section>

      <Testimonials />

      {/* ── Who's travelling ── */}
      <section id="whos-travelling" className="scroll-mt-40 border-t border-neutral-100 bg-[var(--brand-sand)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-12 text-center">
            <h2 className="font-display text-3xl text-neutral-900 sm:text-4xl">{t("experienceTypes.whoTitle")}</h2>
            <p className="label-eyebrow mt-3 inline-block border-b-2 border-[var(--brand-accent)] pb-2 text-neutral-800">
              {t("experienceTypes.whoEyebrow")}
            </p>
          </header>
          <div className="flex justify-center">
            <ExperienceCardRow cards={whoCards} />
          </div>
        </div>
      </section>

      {/* ── What do you want to do ── */}
      <section id="whats-the-plan" className="scroll-mt-40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-12 text-center">
            <h2 className="font-display text-3xl text-neutral-900 sm:text-4xl">{t("experienceTypes.whatTitle")}</h2>
            <p className="label-eyebrow mt-3 inline-block border-b-2 border-[var(--brand-accent)] pb-2 text-neutral-800">
              {t("experienceTypes.whatEyebrow")}
            </p>
          </header>
          <div className="flex justify-center">
            <ExperienceCardRow cards={whatCards} />
          </div>
        </div>
      </section>

      {/* ── How do you want to travel ── */}
      <section id="how-to-travel" className="scroll-mt-40">
        <TripsShowcase
          heading={t("experienceTypes.howTitle")}
          blurb={t("experienceTypes.howBody")}
          ctaLabel={t("experienceTypes.howCta")}
          ctaHref="/trouver-mon-voyage"
          tours={tours}
        />
      </section>

      {/* ── CTA band ── */}
      <section className="bg-[var(--brand-accent)] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <h2 className="font-display text-2xl text-white sm:text-3xl">{t("experienceTypes.ctaBandTitle")}</h2>
          <LocaleLink href="/faire-une-demande" className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100">
            {t("experienceTypes.ctaBandCta")}
          </LocaleLink>
        </div>
      </section>
    </div>
  );
}
