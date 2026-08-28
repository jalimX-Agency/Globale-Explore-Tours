"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { isVideoUrl } from "@/lib/media";

const PEEK = "9vw";

function closestDomIndex(track: HTMLDivElement) {
  const children = Array.from(track.children) as HTMLElement[];
  const trackCenter = track.scrollLeft + track.clientWidth / 2;
  let closest = 0;
  let closestDist = Infinity;
  children.forEach((child, i) => {
    const childCenter = child.offsetLeft + child.clientWidth / 2;
    const dist = Math.abs(childCenter - trackCenter);
    if (dist < closestDist) {
      closestDist = dist;
      closest = i;
    }
  });
  return closest;
}

export function TripGalleryCarousel({ images, caption, title }: { images: string[]; caption?: string; title: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const looping = images.length > 1;
  // Clone the last slide at the front and the first slide at the back so the
  // track can scroll past either end and be snapped back invisibly, giving the
  // impression of an endless loop instead of a visible jump to the start.
  const slides = looping ? [images[images.length - 1], ...images, images[0]] : images;

  const scrollToDomIndex = (domIndex: number, smooth: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[domIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", inline: "center", block: "nearest" });
  };

  useLayoutEffect(() => {
    if (!looping) return;
    scrollToDomIndex(1, false);
  }, [images.length, looping]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let settleTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      const domIndex = closestDomIndex(track);
      const logicalIndex = looping ? (domIndex - 1 + images.length) % images.length : domIndex;
      setIndex(logicalIndex);

      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        if (!looping) return;
        if (domIndex === 0) {
          scrollToDomIndex(images.length, false);
        } else if (domIndex === slides.length - 1) {
          scrollToDomIndex(1, false);
        }
      }, 120);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(settleTimer);
    };
  }, [images.length, looping, slides.length]);

  if (images.length === 0) return null;

  const go = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const target = closestDomIndex(track) + dir;
    scrollToDomIndex(target, true);
  };

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto"
        style={{ paddingLeft: PEEK, paddingRight: PEEK }}
      >
        {slides.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[16/9] flex-shrink-0 snap-center overflow-hidden"
            style={{ width: `calc(100% - ${PEEK} - ${PEEK})` }}
          >
            {isVideoUrl(src) ? (
              <video src={src} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline />
            ) : (
              <Image src={src} alt={`${title} — photo ${i + 1}`} fill priority={i === 1} className="object-cover" sizes="100vw" />
            )}
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-white via-white/70 to-transparent"
        style={{ width: PEEK }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 bg-gradient-to-l from-white via-white/70 to-transparent"
        style={{ width: PEEK }}
      />

      {looping && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-neutral-800 shadow transition-colors hover:bg-white"
            style={{ left: `calc(${PEEK} - 0.25rem)` }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-neutral-800 shadow transition-colors hover:bg-white"
            style={{ right: `calc(${PEEK} - 0.25rem)` }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="mt-4 flex flex-col items-center gap-1 text-center">
        {caption && <p className="font-body text-sm text-neutral-500">{caption}</p>}
        <span className="label-eyebrow text-neutral-400">
          {index + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
