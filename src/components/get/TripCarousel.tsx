"use client";

import { TourCard, type TourCardData } from "@/components/get/TourCard";

export function TripCarousel({ title, tours }: { title: string; tours: TourCardData[] }) {
  if (tours.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {tours.map((tour, i) => (
          <div key={tour.slug} className="w-[80%] flex-shrink-0 snap-start sm:w-[45%] lg:w-[28%]">
            <TourCard tour={tour} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
