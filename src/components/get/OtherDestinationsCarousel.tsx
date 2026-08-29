"use client";

import { useRef } from "react";
import Image from "next/image";
import { LocaleLink } from "@/components/get/LocaleLink";
import { useLanguage } from "@/lib/i18n/context";
import { isVideoUrl } from "@/lib/media";

export type OtherDestinationItem = {
  key: string;
  href: string;
  label: string;
  labelEn: string;
  labelEs: string;
  image: string;
};

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function OtherDestinationsCarousel({ title, items }: { title: string; items: OtherDestinationItem[] }) {
  const { language } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false, captured: false });

  if (items.length === 0) return null;

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    // Do NOT setPointerCapture here: capturing on pointerdown retargets the subsequent click
    // event to the track element, so a plain click never reaches the anchor and navigation
    // breaks. We only capture once an actual drag starts (in onPointerMove).
    drag.current = { active: true, startX: e.clientX, startScrollLeft: track.scrollLeft, moved: false, captured: false };
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
    if (drag.current.moved) track.scrollLeft = drag.current.startScrollLeft - delta;
  };

  const endDrag = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current.active = false;
    track.classList.remove("cursor-grabbing");
    if (drag.current.captured && track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
    drag.current.captured = false;
  };

  const onClickCapture = (e: React.MouseEvent) => {
    // Suppress the link navigation that would otherwise fire at the end of a drag gesture.
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {title}
      </h2>
      <div className="relative mt-10">
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
          className="no-scrollbar flex cursor-grab touch-pan-y select-none gap-6 overflow-x-auto pb-4"
        >
          {items.map((item) => {
            const label = localized(language, item.label, item.labelEn, item.labelEs);
            return (
              <LocaleLink
                key={item.key}
                href={item.href}
                draggable={false}
                className="group w-[45%] flex-shrink-0 sm:w-[30%] lg:w-[18%]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                  {item.image ? (
                    isVideoUrl(item.image) ? (
                      <video
                        src={item.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={label}
                        fill
                        draggable={false}
                        className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                      />
                    )
                  ) : (
                    <div className="h-full w-full bg-neutral-200" />
                  )}
                  <div className="absolute inset-0 bg-black/25" />
                  <span className="font-display absolute bottom-4 left-4 text-white">{label}</span>
                </div>
              </LocaleLink>
            );
          })}
        </div>

        {/* Edge fades — hint that the row is draggable, on both sides since it sits within the page's centered column. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />
      </div>
    </div>
  );
}
