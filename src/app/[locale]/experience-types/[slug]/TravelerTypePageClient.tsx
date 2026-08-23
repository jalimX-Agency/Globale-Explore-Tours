"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { Breadcrumb, type BreadcrumbItem } from "@/components/get/Breadcrumb";
import { Testimonials } from "@/components/get/Testimonials";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import { FaqAccordion } from "@/components/get/FaqAccordion";
import { LinkedContentGrid } from "@/components/get/LinkedContentGrid";
import { BestDestinationsGrid } from "@/components/get/BestDestinationsGrid";
import { TripCtaBox } from "@/components/get/TripCtaBox";
import type { TourCardData } from "@/components/get/TourCard";
import type { TravelerTypePage } from "@/lib/experienceTypesData";

function localized(language: string, l: { fr: string; en: string; es: string }) {
  if (language === "en") return l.en || l.fr;
  if (language === "es") return l.es || l.fr;
  return l.fr;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

export function TravelerTypePageClient({
  content,
  tours,
  categoryTours,
  breadcrumb,
}: {
  content: TravelerTypePage;
  tours: TourCardData[];
  categoryTours?: Record<string, TourCardData[]>;
  breadcrumb: BreadcrumbItem[];
}) {
  const { language, t } = useLanguage();

  const faqs = content.faqs.map((f) => ({
    question: f.question.fr,
    questionEn: f.question.en,
    questionEs: f.question.es,
    answer: f.answer.fr,
    answerEn: f.answer.en,
    answerEs: f.answer.es,
  }));

  const overviewParagraphs = localized(language, content.overviewBody).split("\n\n");

  return (
    <div className="bg-white text-neutral-900">
      {/* ── Hero ── */}
      <section className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden">
        <Image src={content.heroImage} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
          <h1 className="font-display max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {localized(language, content.heroTitle)}
          </h1>
          <p className="font-body mt-4 max-w-xl text-base text-white/90">
            {localized(language, content.heroSubtitle)}
          </p>
          <LocaleLink href="/faire-une-demande" className="btn-outline mt-8 text-white">
            {t("experienceTypes.heroCta")}
          </LocaleLink>
        </div>
      </section>

      {/* ── Sticky sub-nav ── */}
      <div className="sticky top-14 z-30 border-y border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl justify-center gap-8 px-6 py-4 sm:gap-12">
          <button onClick={() => scrollToSection("overview")} className="label-eyebrow text-neutral-600 transition-colors hover:text-neutral-900">
            {t("destinationsPage.overview")}
          </button>
          <button onClick={() => scrollToSection("trips")} className="label-eyebrow text-neutral-600 transition-colors hover:text-neutral-900">
            {t("experienceTypes.subnavHow")}
          </button>
          <button onClick={() => scrollToSection("destinations")} className="label-eyebrow text-neutral-600 transition-colors hover:text-neutral-900">
            {t("experienceTypes.bestDestinationsEyebrow")}
          </button>
          {content.faqs.length > 0 && (
            <button onClick={() => scrollToSection("faq")} className="label-eyebrow text-neutral-600 transition-colors hover:text-neutral-900">
              {t("destinationsPage.faq")}
            </button>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-10">
        <Breadcrumb items={breadcrumb} />
      </div>

      {/* ── Overview ── */}
      <section id="overview" className="scroll-mt-40 mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="font-display text-2xl text-neutral-900 sm:text-3xl">
          {localized(language, content.overviewTitle)}
        </h2>
        {overviewParagraphs.map((p, i) => (
          <p key={i} className="font-body mt-5 text-base leading-relaxed text-neutral-600">
            {p}
          </p>
        ))}
        <LocaleLink href="/contact" className="btn-primary mt-8 inline-flex">
          {t("experienceTypes.introCta")}
        </LocaleLink>
      </section>

      {/* ── Explore in depth (family-holidays only: links to real sub-pages; honeymoons: type-of-honeymoon links) ── */}
      {content.linkCardGroups?.map((group, i) => (
        <section key={i} className={i === 0 ? "border-t border-neutral-100 bg-[var(--brand-sand)] py-16" : "py-16"}>
          <div className="mx-auto max-w-7xl px-6">
            <LinkedContentGrid
              title={localized(language, group.heading)}
              cards={group.cards.map((card) => ({
                key: card.key,
                image: card.image,
                title: localized(language, card.title),
                desc: localized(language, card.desc),
                href: card.href,
              }))}
            />
          </div>
        </section>
      ))}

      {/* ── Signature trips ──
          couples-holidays (and any page with categorySections) gets several named carousel
          sections, each with its own real filtered trips — matching Black Tomato's real
          "Romance / Adventure / Culture & Cuisine / Beach" structure. Every other page keeps
          one flat carousel, matching Black Tomato's simpler pages (solo/groups/honeymoons). */}
      {content.categorySections && content.categorySections.length > 0 ? (
        <div id="trips" className="scroll-mt-40">
          {content.categorySections.map((section) => (
            <div key={section.key}>
              <TripsShowcase
                heading={localized(language, section.heading)}
                blurb={localized(language, section.intro)}
                tours={categoryTours?.[section.key] ?? []}
              />
              <div className="mx-auto max-w-5xl px-6 py-10">
                <TripCtaBox />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <section id="trips" className="scroll-mt-40">
          <TripsShowcase
            heading={t("experienceTypes.subnavHow")}
            blurb={t("experienceTypes.howBody")}
            ctaLabel={t("experienceTypes.howCta")}
            ctaHref="/trouver-mon-voyage"
            tours={tours}
          />
        </section>
      )}

      {/* ── Best destinations ── */}
      <section id="destinations" className="scroll-mt-40 border-t border-neutral-100 bg-[var(--brand-sand)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow mb-3 text-center text-neutral-600">
            {t("experienceTypes.bestDestinationsEyebrow")}
          </p>
          <BestDestinationsGrid title={t("experienceTypes.bestDestinationsTitle")} cards={content.bestDestinations} />
        </div>
      </section>

      {/* ── Create your own itinerary (only when not already repeated per category section above) ── */}
      {!(content.categorySections && content.categorySections.length > 0) && (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <TripCtaBox />
        </section>
      )}

      {/* ── Reassurance ── */}
      {content.reassurance.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {content.reassurance.map((card, i) => (
              <div key={i} className="border-l-2 border-[var(--brand-accent)] pl-5">
                <p className="font-display text-lg text-neutral-900">{localized(language, card.title)}</p>
                <p className="font-body mt-2 text-base leading-relaxed text-neutral-600">
                  {localized(language, card.body)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <Testimonials />

      {/* ── FAQ ── */}
      {content.faqs.length > 0 && (
        <section id="faq" className="scroll-mt-40 mx-auto max-w-7xl px-6 py-16">
          <FaqAccordion faqs={faqs} />
        </section>
      )}

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
