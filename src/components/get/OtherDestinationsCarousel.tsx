"use client";

import Image from "next/image";
import { LocaleLink } from "@/components/get/LocaleLink";
import { useLanguage } from "@/lib/i18n/context";

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

  if (items.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {items.map((item) => {
          const label = localized(language, item.label, item.labelEn, item.labelEs);
          return (
            <LocaleLink
              key={item.key}
              href={item.href}
              className="group w-[45%] flex-shrink-0 snap-start sm:w-[30%] lg:w-[18%]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  />
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
    </div>
  );
}
