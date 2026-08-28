"use client";

import { useLanguage } from "@/lib/i18n/context";
import { useSectionScrollProgress } from "@/lib/useSectionScrollProgress";
import { RouteMap, type RouteMarker } from "@/components/get/RouteMap";
import { DayCarousel } from "@/components/get/DayCarousel";
import { GalleryCarousel } from "@/components/get/GalleryCarousel";

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

function splitImages(image: string, images: string) {
  const extra = images
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return [image, ...extra].filter(Boolean);
}

export type JourneyDayData = {
  dayNumber: number;
  title: string;
  titleEn: string;
  titleEs: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  image: string;
  images: string;
};

export type JourneyChapterData = {
  id: string;
  title: string;
  titleEn: string;
  titleEs: string;
  intro: string;
  introEn: string;
  introEs: string;
  galleryImages: string;
  mapMarkerX: number;
  mapMarkerY: number;
  days: JourneyDayData[];
};

export function JourneyChapterSection({
  chapter,
  index,
  mapImage,
  markers,
}: {
  chapter: JourneyChapterData;
  index: number;
  mapImage: string;
  markers: RouteMarker[];
}) {
  const { language, t } = useLanguage();
  // Drives the "road" to the next chapter's marker drawing in live as this section scrolls by
  // (see RouteMap's progress prop) — same trigger line as useActiveSection so the line finishes
  // drawing right as the next section takes over as active.
  const scrollProgress = useSectionScrollProgress(chapter.id);
  const title = localized(language, chapter.title, chapter.titleEn, chapter.titleEs);
  const intro = localized(language, chapter.intro, chapter.introEn, chapter.introEs);
  const gallery = chapter.galleryImages
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const dayNumbers = chapter.days.map((d) => d.dayNumber);
  const min = Math.min(...dayNumbers);
  const max = Math.max(...dayNumbers);
  const dayRangeLabel =
    min === max ? `${t("tripDetailPage.day")} ${min}` : `${t("tripDetailPage.days")} ${min}-${max}`;

  return (
    <section id={chapter.id} className="relative min-h-screen bg-[var(--brand-sand)] py-16">
      {/* Full-section map background: the shared trip map fills this chapter's entire section
          behind the day cards, camera-zoomed toward this chapter's own marker. Sticky so it
          stays in view for the whole scroll through this section's days, then hands off to
          the next section's own background. Hidden on mobile — the cards need the full width
          there and a background map would just be noise behind text. */}
      <div className="absolute inset-0 z-0 hidden lg:block" aria-hidden>
        <div className="sticky top-0 h-screen">
          <RouteMap mapImage={mapImage} markers={markers} activeIndex={index} progress={scrollProgress} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 lg:pr-[30rem]">
        <h2 className="font-display text-3xl text-neutral-900 sm:text-4xl">{title}</h2>
        <p className="label-eyebrow mt-2 text-neutral-400">{dayRangeLabel}</p>
        <p className="font-body mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">{intro}</p>

        <div className="relative mt-10">
          {/* Dotted timeline spine connecting each day card, matching the reference layout. */}
          <div className="absolute bottom-6 left-0 top-6 hidden w-px border-l-2 border-dotted border-neutral-300 sm:block" />

          <div className="space-y-8">
            {chapter.days.map((day, i) => {
              const dayTitle = localized(language, day.title, day.titleEn, day.titleEs);
              const dayDescription = localized(language, day.description, day.descriptionEn, day.descriptionEs);
              const reversed = i % 2 === 1;
              const images = splitImages(day.image, day.images);

              return (
                <div key={day.dayNumber} className="relative sm:pl-8">
                  <span className="absolute left-[-4.5px] top-8 hidden h-2.5 w-2.5 rounded-full bg-[var(--brand-accent)] sm:block" />
                  <div
                    className={`flex flex-col overflow-hidden rounded-sm bg-white shadow-sm sm:flex-row ${
                      reversed ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex min-h-[22rem] flex-col justify-center p-8 sm:w-3/5 sm:p-10">
                      <p className="label-eyebrow text-[var(--brand-accent)]">
                        {t("tripDetailPage.day")} {day.dayNumber}
                      </p>
                      <p className="font-display mt-2 text-xl text-neutral-900">{dayTitle}</p>
                      <p className="font-body mt-4 text-sm leading-relaxed text-neutral-600">{dayDescription}</p>
                    </div>
                    <div className="relative aspect-[4/3] w-full sm:aspect-auto sm:w-2/5 sm:min-h-[22rem]">
                      <DayCarousel images={images} alt={dayTitle} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* relative z-10 lifts the full-width gallery above the trip-wide sticky map panel
          (an absolutely-positioned z-0 sibling of the sections) — without it, the panel
          paints over the carousel's right side since positioned elements stack above
          non-positioned ones. */}
      {gallery.length > 0 && (
        <div className="relative z-10">
          <GalleryCarousel images={gallery} title={title} />
        </div>
      )}
    </section>
  );
}
