"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { tourHref, type TourCardData } from "@/components/get/TourCard";

const BG_IMAGE = `${process.env.NEXT_PUBLIC_R2_URL}/backgrounds/bg-swirl-dark.jpg`;
const CREATE_ITINERARY_IMAGE = `${process.env.NEXT_PUBLIC_R2_URL}/backgrounds/create-itinerary-hiker.jpg`;

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function TripsShowcase({
  heading,
  blurb,
  ctaLabel,
  ctaHref,
  tours,
}: {
  heading?: string;
  blurb?: string;
  ctaLabel?: string;
  ctaHref?: string;
  tours: TourCardData[];
}) {
  const { language, t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
    captured: false,
    lastX: 0,
    lastT: 0,
    velocity: 0, // px/ms, smoothed
  });
  const momentumId = useRef<number | null>(null);

  if (tours.length === 0) return null;

  const stopMomentum = () => {
    if (momentumId.current !== null) {
      cancelAnimationFrame(momentumId.current);
      momentumId.current = null;
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    stopMomentum();
    // Do NOT setPointerCapture here: capturing on pointerdown retargets the subsequent click
    // event to the track element, so a plain click never reaches the anchor and navigation
    // breaks. We only capture once an actual drag starts (in onPointerMove).
    const now = performance.now();
    drag.current = {
      active: true,
      startX: e.clientX,
      startScrollLeft: track.scrollLeft,
      moved: false,
      captured: false,
      lastX: e.clientX,
      lastT: now,
      velocity: 0,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 4 && !drag.current.moved) {
      drag.current.moved = true;
      track.setPointerCapture(e.pointerId);
      drag.current.captured = true;
      track.classList.add("cursor-grabbing");
    }
    if (drag.current.moved) {
      track.scrollLeft = drag.current.startScrollLeft - delta;
      const now = performance.now();
      const dt = now - drag.current.lastT;
      if (dt > 0) {
        const instant = (e.clientX - drag.current.lastX) / dt;
        drag.current.velocity = drag.current.velocity * 0.7 + instant * 0.3;
      }
      drag.current.lastX = e.clientX;
      drag.current.lastT = now;
    }
  };

  const endDrag = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    const wasDrag = drag.current.moved;
    const velocity = drag.current.velocity;
    drag.current.active = false;
    track.classList.remove("cursor-grabbing");
    if (drag.current.captured && track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
    drag.current.captured = false;

    if (!wasDrag) return;

    // Momentum coast on release — a flick keeps gliding and decelerates smoothly instead of
    // stopping dead where the pointer let go, matching a native carousel's inertia.
    let speed = -velocity * 16;
    if (Math.abs(speed) < 0.5) return;
    const step = () => {
      const el = trackRef.current;
      if (!el) return;
      speed *= 0.94;
      const max = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + speed;
      if (next <= 0 || next >= max) {
        el.scrollLeft = Math.max(0, Math.min(max, next));
        momentumId.current = null;
        return;
      }
      el.scrollLeft = next;
      momentumId.current = Math.abs(speed) > 0.4 ? requestAnimationFrame(step) : null;
    };
    momentumId.current = requestAnimationFrame(step);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    // Suppress the link navigation that would otherwise fire at the end of a drag gesture.
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const scrollByStep = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    stopMomentum();
    // One card-ish width per click, matching the visible card size at each breakpoint.
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-neutral-900 py-20">
      <Image src={BG_IMAGE} alt="" fill priority={false} className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex flex-col gap-10 pl-6 lg:flex-row lg:items-center lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]">
        {heading && (
          <div className="pr-6 lg:w-1/4 lg:flex-shrink-0 lg:pr-10">
            <h2 className="font-display text-2xl text-white sm:text-3xl">{heading}</h2>
            <p className="font-body mt-4 text-sm text-white/70">{blurb}</p>
            {ctaLabel && ctaHref && (
              <LocaleLink href={ctaHref} className="btn-primary mt-6 inline-flex">
                {ctaLabel}
              </LocaleLink>
            )}
          </div>
        )}

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
                href={tourHref(tour)}
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

          {/* Always-last card — an escape hatch for browsers who don't see their trip in the
              carousel, straight into the enquiry flow rather than a dead end. */}
          <LocaleLink
            href="/faire-une-demande"
            draggable={false}
            className="group relative w-[70%] flex-shrink-0 overflow-hidden rounded-sm border border-white/20 sm:w-[42%] lg:w-[26%]"
          >
            <div className="relative aspect-[1/2] w-full">
              <Image
                src={CREATE_ITINERARY_IMAGE}
                alt=""
                fill
                draggable={false}
                className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 42vw, 70vw"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Compass className="size-8 text-white/80" />
                <p className="font-display mt-4 text-lg text-white">{t("destinationsPage.createOwnItinerary")}</p>
                <p className="font-body mt-3 text-xs text-white/80">{t("destinationsPage.createOwnItineraryBlurb")}</p>
                <span className="btn-outline mt-5 inline-flex text-white text-[0.65rem] px-4 py-2">
                  {t("destinationsPage.createTrip")}
                </span>
              </div>
            </div>
          </LocaleLink>
          </div>

          {/* Right-edge fade — hints there's more to scroll to, matching the reference. */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-900 to-transparent sm:w-24" />

          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            aria-label={t("pagination.previous")}
            className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/75 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByStep(1)}
            aria-label={t("pagination.next")}
            className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/75 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
