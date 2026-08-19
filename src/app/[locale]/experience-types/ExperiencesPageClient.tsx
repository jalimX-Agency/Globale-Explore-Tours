"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { Testimonials } from "@/components/get/Testimonials";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import { ExperienceCardRow, type ExperienceCard } from "@/components/get/ExperienceCardRow";
import { type TourCardData } from "@/components/get/TourCard";

const R2 = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80; // fixed header height
  window.scrollTo({ top, behavior: "smooth" });
}

export function ExperiencesPageClient({ tours }: { tours: TourCardData[] }) {
  const { t } = useLanguage();

  const whoCards: ExperienceCard[] = [
    { key: "family", image: `${R2}/traveler-types/family.jpg`, title: t("travelerTypes.family"), desc: t("experienceTypes.whoFamilyDesc"), href: "/experience-types/family-holidays" },
    { key: "couples", image: `${R2}/traveler-types/couples.jpg`, title: t("travelerTypes.couples"), desc: t("experienceTypes.whoCouplesDesc"), href: "/experience-types/couples-holidays" },
    { key: "groups", image: `${R2}/traveler-types/groups.jpg`, title: t("travelerTypes.groups"), desc: t("experienceTypes.whoGroupsDesc"), href: "/experience-types/luxury-group-holidays" },
    { key: "honeymoon", image: `${R2}/traveler-types/honeymoon.jpg`, title: t("travelerTypes.honeymoon"), desc: t("experienceTypes.whoHoneymoonDesc"), href: "/experience-types/luxury-honeymoons" },
    { key: "solo", image: `${R2}/traveler-types/solo.jpg`, title: t("travelerTypes.solo"), desc: t("experienceTypes.whoSoloDesc"), href: "/experience-types/solo-holidays" },
  ];

  const whatCards: ExperienceCard[] = [
    { key: "adventure", image: `${R2}/experiences/what-adventure.jpg`, title: t("menu.adventure"), desc: t("menu.adventureDesc"), href: "/experience-types/adventure-holidays" },
    { key: "culture", image: `${R2}/experiences/what-culture.jpg`, title: t("menu.culture"), desc: t("menu.cultureDesc"), href: "/experience-types/cultural-holidays" },
    { key: "relax", image: `${R2}/experiences/what-relax.jpg`, title: t("menu.relax"), desc: t("menu.relaxDesc"), href: "/experience-types/wellness-holidays" },
    { key: "family", image: `${R2}/experiences/what-family.jpg`, title: t("menu.family"), desc: t("menu.familyDesc"), href: "/experience-types/family-experiences" },
    { key: "multiDay", image: `${R2}/experiences/what-multiday.jpg`, title: t("experienceTypes.whatMultiDay"), desc: t("experienceTypes.whatMultiDayDesc"), href: "/sejours-multi-jours" },
    { key: "safari", image: `${R2}/destinations/kenya.jpg`, title: t("experienceTypes.whatSafari"), desc: t("experienceTypes.whatSafariDesc"), href: "/experience-types/safari-holidays" },
    { key: "trains", image: `${R2}/destinations/suisse-hero.jpg`, title: t("experienceTypes.whatTrains"), desc: t("experienceTypes.whatTrainsDesc"), href: "/experience-types/train-journeys" },
    { key: "desert", image: `${R2}/destinations/maroc.jpg`, title: t("experienceTypes.whatDesert"), desc: t("experienceTypes.whatDesertDesc"), href: "/experience-types/desert-holidays" },
    { key: "islands", image: `${R2}/destinations/maldives.jpg`, title: t("experienceTypes.whatIslands"), desc: t("experienceTypes.whatIslandsDesc"), href: "/experience-types/island-holidays" },
  ];

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
          <LocaleLink href="/reserver" className="btn-outline mt-8 text-white">
            {t("experienceTypes.heroCta")}
          </LocaleLink>
        </div>
      </section>

      {/* ── Sticky sub-nav ── */}
      <div className="sticky top-20 z-30 border-y border-neutral-200 bg-white/95 backdrop-blur-md">
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
          ctaHref="/excursions"
          tours={tours}
        />
      </section>

      {/* ── CTA band ── */}
      <section className="bg-[var(--brand-accent)] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <h2 className="font-display text-2xl text-white sm:text-3xl">{t("experienceTypes.ctaBandTitle")}</h2>
          <LocaleLink href="/reserver" className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100">
            {t("experienceTypes.ctaBandCta")}
          </LocaleLink>
        </div>
      </section>
    </div>
  );
}
