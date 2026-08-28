"use client";

import { useLanguage } from "@/lib/i18n/context";
import { Breadcrumb, type BreadcrumbItem } from "@/components/get/Breadcrumb";
import { JourneyStatsRow } from "@/components/get/JourneyStatsRow";
import { TripGalleryCarousel } from "@/components/get/TripGalleryCarousel";
import { TripCtaBox } from "@/components/get/TripCtaBox";
import { TourHotelGrid, type TourHotelData } from "@/components/get/TourHotelGrid";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import type { TourCardData } from "@/components/get/TourCard";

type Tour = {
  name: string;
  nameEn: string;
  nameEs: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  longDescription: string;
  longDescriptionEn: string;
  longDescriptionEs: string;
  image: string;
  images: string;
  price: number;
  currency: string;
  duration: string;
  durationEn: string;
  durationEs: string;
  whenLabel: string;
  whenLabelEn: string;
  whenLabelEs: string;
};

type Section = {
  heading: string;
  headingEn: string;
  headingEs: string;
  body: string;
  bodyEn: string;
  bodyEs: string;
};

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function StandardTripPageClient({
  tour,
  countryLabel,
  sections,
  hotels,
  similarTours,
  breadcrumb,
}: {
  tour: Tour;
  countryLabel: string;
  sections: Section[];
  hotels: TourHotelData[];
  similarTours: TourCardData[];
  breadcrumb: BreadcrumbItem[];
}) {
  const { language, t } = useLanguage();
  const title = localized(language, tour.name, tour.nameEn, tour.nameEs);
  const intro = localized(language, tour.description, tour.descriptionEn, tour.descriptionEs);

  const galleryImages = [tour.image, ...tour.images.split(",").map((s) => s.trim())].filter(Boolean);

  const fallbackBody = localized(
    language,
    tour.longDescription || tour.description,
    tour.longDescriptionEn || tour.descriptionEn,
    tour.longDescriptionEs || tour.descriptionEs
  );

  return (
    <div className="relative overflow-hidden">
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-40 top-16 hidden h-[1000px] w-[520px] text-[var(--brand-sand)] xl:block"
        viewBox="0 0 520 1000"
        fill="none"
      >
        <path
          d="M60,0 C280,60 480,180 430,420 C390,610 220,700 140,860 C90,960 60,1000 60,1000 L0,1000 L0,0 Z"
          fill="currentColor"
        />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-40 top-64 hidden h-[1000px] w-[520px] text-[var(--brand-sand)] xl:block"
        viewBox="0 0 520 1000"
        fill="none"
      >
        <path
          d="M460,0 C240,60 40,180 90,420 C130,610 300,700 380,860 C430,960 460,1000 460,1000 L520,1000 L520,0 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 py-12 lg:px-10">
        <Breadcrumb items={breadcrumb} />

        <div className="mt-8 text-center">
          <p className="label-eyebrow text-[var(--brand-accent)]">{countryLabel}</p>
          <h1 className="font-display mt-2 text-3xl text-neutral-900 sm:text-4xl">{title}</h1>
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

        <div className="mt-12">
          <TripGalleryCarousel images={galleryImages} title={title} />
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          <p className="font-body text-lg leading-loose text-neutral-700">{intro}</p>

          {sections.length > 0 ? (
            sections.map((section, i) => {
              const heading = localized(language, section.heading, section.headingEn, section.headingEs);
              const body = localized(language, section.body, section.bodyEn, section.bodyEs);
              return (
                <div key={i}>
                  <h2 className="font-display mt-10 text-xl text-neutral-900">{heading}</h2>
                  {body.split("\n\n").map((paragraph, j) => (
                    <p key={j} className="font-body mt-5 text-lg leading-loose text-neutral-700">
                      {paragraph}
                    </p>
                  ))}
                  {i === 1 && <TripCtaBox />}
                </div>
              );
            })
          ) : (
            <p className="font-body text-lg leading-loose text-neutral-700">{fallbackBody}</p>
          )}
        </div>

        <TourHotelGrid hotels={hotels} />

        <div className="mt-16">
          <TripsShowcase
            heading={t("tripDetailPage.similarExperiences")}
            blurb={t("tripDetailPage.similarExperiencesBlurb")}
            tours={similarTours}
          />
        </div>
      </div>
    </div>
  );
}
