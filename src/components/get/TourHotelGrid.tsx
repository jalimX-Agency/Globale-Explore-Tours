"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

export type TourHotelData = {
  name: string;
  nameEn: string;
  nameEs: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  image: string;
};

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function TourHotelGrid({ hotels }: { hotels: TourHotelData[] }) {
  const { language, t } = useLanguage();

  if (hotels.length === 0) return null;

  return (
    <div className="my-12">
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {t("tripDetailPage.whereToStay")}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {hotels.map((hotel, i) => {
          const name = localized(language, hotel.name, hotel.nameEn, hotel.nameEs);
          const description = localized(language, hotel.description, hotel.descriptionEn, hotel.descriptionEs);
          return (
            <div key={i}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                {hotel.image ? (
                  <Image src={hotel.image} alt={name} fill className="object-cover" sizes="(min-width: 640px) 45vw, 100vw" />
                ) : (
                  <div className="h-full w-full bg-neutral-200" />
                )}
              </div>
              <p className="font-display mt-4 text-lg text-neutral-900">{name}</p>
              <p className="font-body mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
