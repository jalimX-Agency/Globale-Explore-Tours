"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function GalleryCarousel({ images }: { images: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const go = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (index + dir + images.length) % images.length;
    setIndex(next);
    const item = track.children[next] as HTMLElement | undefined;
    item?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <div className="relative mt-10 bg-neutral-900 py-2">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-1 overflow-x-auto"
      >
        {images.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] w-1/2 flex-shrink-0 snap-start sm:w-[45%] lg:w-[38%]">
            <Image src={src} alt="" fill className="object-cover" sizes="(min-width: 1024px) 38vw, (min-width: 640px) 45vw, 50vw" />
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-4 pb-1 text-white/80">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="rounded-full border border-white/30 p-1.5 transition-colors hover:border-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="label-eyebrow text-xs text-white/70">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="rounded-full border border-white/30 p-1.5 transition-colors hover:border-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
