"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import type { TourCardData } from "@/components/get/TourCard";

const BG_IMAGE = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev/backgrounds/bg-swirl-dark.jpg";

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function TripsShowcase({ heading, blurb, tours }: { heading: string; blurb: string; tours: TourCardData[] }) {
  const { language, t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false });

  if (tours.length === 0) return null;

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current = { active: true, startX: e.clientX, startScrollLeft: track.scrollLeft, moved: false };
    track.setPointerCapture(e.pointerId);
    track.classList.add("cursor-grabbing");
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    track.scrollLeft = drag.current.startScrollLeft - delta;
  };

  const endDrag = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current.active = false;
    track.classList.remove("cursor-grabbing");
    if (track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    // Suppress the link navigation that would otherwise fire at the end of a drag gesture.
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-neutral-900 py-20">
      <Image src={BG_IMAGE} alt="" fill priority={false} className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex flex-col gap-10 pl-6 lg:flex-row lg:items-center lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]">
        <div className="pr-6 lg:w-1/4 lg:flex-shrink-0 lg:pr-10">
          <h2 className="font-display text-2xl text-white sm:text-3xl">{heading}</h2>
          <p className="font-body mt-4 text-sm text-white/70">{blurb}</p>
        </div>

        <div className="relative lg:flex-1">
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onClickCapture={onClickCapture}
            className="no-scrollbar flex cursor-grab touch-pan-y select-none gap-5 overflow-x-auto pr-6 lg:pr-10"
          >
          {tours.map((tour) => {
            const name = localized(language, tour.name, tour.nameEn, tour.nameEs);
            const tagline = localized(language, tour.tagline, tour.taglineEn, tour.taglineEs);
            const duration = localized(language, tour.duration, tour.durationEn, tour.durationEs);
            return (
              <LocaleLink
                key={tour.slug}
                href={`/excursions/${tour.slug}`}
                draggable={false}
                className="group relative w-[70%] flex-shrink-0 overflow-hidden rounded-sm sm:w-[42%] lg:w-[26%]"
              >
                <div className="relative aspect-[1/2] w-full">
                  {tour.image ? (
                    <Image
                      src={tour.image}
                      alt={name}
                      fill
                      draggable={false}
                      className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 26vw, (min-width: 640px) 42vw, 70vw"
                    />
                  ) : (
                    <div className="h-full w-full bg-neutral-700" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

                  {duration && (
                    <span className="label-eyebrow absolute right-3 top-3 text-white/85">{duration}</span>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-lg text-white">{name}</p>
                    <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p className="font-body mt-2 text-xs text-white/80">{tagline}</p>
                        <span className="btn-outline mt-3 inline-flex text-white text-[0.65rem] px-4 py-2">
                          {t("destinationsPage.exploreTrip")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </LocaleLink>
            );
          })}
          </div>

          {/* Right-edge fade — hints there's more to scroll to, matching the reference. */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-900 to-transparent sm:w-24" />
        </div>
      </div>
    </div>
  );
}
