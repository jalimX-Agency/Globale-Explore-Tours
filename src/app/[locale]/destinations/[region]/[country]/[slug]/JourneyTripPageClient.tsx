"use client";

import { useLanguage } from "@/lib/i18n/context";
import { Breadcrumb, type BreadcrumbItem } from "@/components/get/Breadcrumb";
import { JourneyHero } from "@/components/get/JourneyHero";
import { DestinationSubNav } from "@/components/get/DestinationSubNav";
import { JourneyStatsRow } from "@/components/get/JourneyStatsRow";
import { JourneyChapterSection, type JourneyChapterData } from "@/components/get/JourneyChapterSection";
import { JourneyCtaBanner } from "@/components/get/JourneyCtaBanner";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import type { TourCardData } from "@/components/get/TourCard";

type Tour = {
  name: string;
  nameEn: string;
  nameEs: string;
  tagline: string;
  taglineEn: string;
  taglineEs: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  image: string;
  mapImage: string;
  price: number;
  currency: string;
  duration: string;
  durationEn: string;
  durationEs: string;
  whenLabel: string;
  whenLabelEn: string;
  whenLabelEs: string;
};

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function JourneyTripPageClient({
  tour,
  countryLabel,
  chapters,
  similarTours,
  breadcrumb,
}: {
  tour: Tour;
  countryLabel: string;
  chapters: JourneyChapterData[];
  similarTours: TourCardData[];
  breadcrumb: BreadcrumbItem[];
}) {
  const { language, t } = useLanguage();
  const title = localized(language, tour.name, tour.nameEn, tour.nameEs);
  const tagline = localized(language, tour.tagline, tour.taglineEn, tour.taglineEs);
  const intro = localized(language, tour.description, tour.descriptionEn, tour.descriptionEs);

  const tabs = [
    { id: "overview", label: t("destinationsPage.overview") },
    ...chapters.map((chapter) => ({
      id: chapter.id,
      label: localized(language, chapter.title, chapter.titleEn, chapter.titleEs),
    })),
    { id: "similar", label: t("tripDetailPage.similarExperiences") },
  ];

  const markers = chapters.map((c) => ({
    x: c.mapMarkerX,
    y: c.mapMarkerY,
    label: localized(language, c.title, c.titleEn, c.titleEs).toUpperCase(),
  }));

  return (
    <div>
      <JourneyHero image={tour.image} eyebrow={countryLabel} title={title} subtitle={tagline} />

      <DestinationSubNav tabs={tabs} />

      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <Breadcrumb items={breadcrumb} />
      </div>

      <div id="overview" className="scroll-mt-40 px-6 pb-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-[var(--brand-accent)]">{countryLabel}</p>
          <h2 className="font-display mt-2 text-2xl text-neutral-900 sm:text-3xl">{title}</h2>
          <p className="font-body mt-6 text-base leading-relaxed text-neutral-600">{intro}</p>
        </div>
        <JourneyStatsRow
          whenLabel={tour.whenLabel}
          whenLabelEn={tour.whenLabelEn}
          whenLabelEs={tour.whenLabelEs}
          price={tour.price}
          currency={tour.currency}
          duration={tour.duration}
          durationEn={tour.durationEn}
          durationEs={tour.durationEs}
        />
      </div>

      <div className="flex flex-col">
        {chapters.map((chapter, i) => (
          <JourneyChapterSection key={chapter.id} chapter={chapter} index={i} mapImage={tour.mapImage} markers={markers} />
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16 lg:px-10">
        <div id="similar" className="scroll-mt-40">
          <TripsShowcase
            heading={t("tripDetailPage.similarExperiences")}
            blurb={t("tripDetailPage.similarExperiencesBlurb")}
            tours={similarTours}
          />
        </div>

        <JourneyCtaBanner />
      </div>
    </div>
  );
}
