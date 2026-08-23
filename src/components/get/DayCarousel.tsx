"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { isVideoUrl } from "@/lib/media";

export function DayCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return <div className="h-full w-full bg-neutral-200" />;
  }

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div className="group/carousel relative h-full w-full overflow-hidden">
      {isVideoUrl(images[index]) ? (
        <video
          src={images[index]}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image
          src={images[index]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 40vw, 100vw"
        />
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/60 group-hover/carousel:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/60 group-hover/carousel:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
