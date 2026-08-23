"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { Breadcrumb, type BreadcrumbItem } from "@/components/get/Breadcrumb";
import { Testimonials } from "@/components/get/Testimonials";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import { BestDestinationsGrid } from "@/components/get/BestDestinationsGrid";
import type { TourCardData } from "@/components/get/TourCard";
import type { FamilySubPage } from "@/lib/familySubPagesData";

function localized(language: string, l: { fr: string; en: string; es: string }) {
  if (language === "en") return l.en || l.fr;
  if (language === "es") return l.es || l.fr;
  return l.fr;
}

export function FamilySubPageClient({
  content,
  tours,
  breadcrumb,
}: {
  content: FamilySubPage;
  tours: TourCardData[];
  breadcrumb: BreadcrumbItem[];
}) {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white text-neutral-900">
      {/* ── Hero ── */}
      <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden">
        <Image src={content.heroImage} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
          <h1 className="font-display max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {localized(language, content.title)}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-10">
        <Breadcrumb items={breadcrumb} />
      </div>

      {/* ── Intro ── */}
      <section className="mx-auto max-w-3xl px-6 py-14 text-center">
        <p className="font-body text-base leading-relaxed text-neutral-600">{localized(language, content.intro)}</p>
        <LocaleLink href="/contact" className="btn-primary mt-8 inline-flex">
          {t("experienceTypes.introCta")}
        </LocaleLink>
      </section>

      {/* ── Signature trips ── */}
      <TripsShowcase
        heading={t("experienceTypes.subnavHow")}
        blurb={t("experienceTypes.howBody")}
        ctaLabel={t("experienceTypes.howCta")}
        ctaHref="/trouver-mon-voyage"
        tours={tours}
      />

      {/* ── Best destinations ── */}
      <section className="border-t border-neutral-100 bg-[var(--brand-sand)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-eyebrow mb-3 text-center text-neutral-600">
            {t("experienceTypes.bestDestinationsEyebrow")}
          </p>
          <BestDestinationsGrid title={t("experienceTypes.bestDestinationsTitle")} cards={content.bestDestinations} />
        </div>
      </section>

      <Testimonials />

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
