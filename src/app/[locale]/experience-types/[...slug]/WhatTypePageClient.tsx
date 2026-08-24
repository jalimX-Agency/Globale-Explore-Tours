"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { Breadcrumb, type BreadcrumbItem } from "@/components/get/Breadcrumb";
import { Testimonials } from "@/components/get/Testimonials";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import { LinkedContentGrid } from "@/components/get/LinkedContentGrid";
import type { TourCardData } from "@/components/get/TourCard";
import type { Localized, LinkCardGroup } from "@/lib/experienceTypesData";

export type WhatTypeContent = {
  slug: string;
  heroImage: string;
  heroTitle: Localized;
  overviewBody: Localized;
  subPageGroups?: LinkCardGroup[];
};

function localized(language: string, l: Localized) {
  if (language === "en") return l.en || l.fr;
  if (language === "es") return l.es || l.fr;
  return l.fr;
}

export function WhatTypePageClient({
  content,
  tours,
  related,
  breadcrumb,
}: {
  content: WhatTypeContent;
  tours: TourCardData[];
  related: WhatTypeContent[];
  breadcrumb: BreadcrumbItem[];
}) {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white text-neutral-900">
      {/* ── Hero ── */}
      <section className="relative flex h-[50vh] min-h-[380px] items-center justify-center overflow-hidden">
        <Image src={content.heroImage} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
          <h1 className="font-display max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {localized(language, content.heroTitle)}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-10">
        <Breadcrumb items={breadcrumb} />
      </div>

      {/* ── Intro ── */}
      <section className="mx-auto max-w-3xl px-6 py-14 text-center">
        <p className="font-body text-base leading-relaxed text-neutral-600">{localized(language, content.overviewBody)}</p>
        <LocaleLink href="/contact" className="btn-primary mt-8 inline-flex">
          {t("experienceTypes.introCta")}
        </LocaleLink>
      </section>

      {/* ── Sub-pages (Private Travel's own services, or a future "what" page with children) ── */}
      {content.subPageGroups?.map((group, i) => (
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

      {/* ── Signature trips ── */}
      <TripsShowcase
        heading={t("experienceTypes.subnavHow")}
        blurb={t("experienceTypes.howBody")}
        ctaLabel={t("experienceTypes.howCta")}
        ctaHref="/trouver-mon-voyage"
        tours={tours}
      />

      {/* ── Not quite what you were looking for? ── */}
      {related.length > 0 && (
        <section className="border-t border-neutral-100 bg-[var(--brand-sand)] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <LinkedContentGrid
              title={t("experienceTypes.notWhatLookingFor")}
              cards={related.map((r) => ({
                key: r.slug,
                image: r.heroImage,
                title: localized(language, r.heroTitle),
                desc: localized(language, r.overviewBody).split(".")[0] + ".",
                href: `/experience-types/${r.slug}`,
              }))}
            />
          </div>
        </section>
      )}

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
