"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import type { DestinationCard } from "@/lib/experienceTypesData";

function localized(language: string, l: { fr: string; en: string; es: string }) {
  if (language === "en") return l.en || l.fr;
  if (language === "es") return l.es || l.fr;
  return l.fr;
}

// Same visual language as BestOfGrid, but each card links to a real destination page —
// used for "best destinations for X travellers" sections on the traveler-type pages.
export function BestDestinationsGrid({ title, cards }: { title: string; cards: DestinationCard[] }) {
  const { language, t } = useLanguage();

  if (cards.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const name = localized(language, card.name);
          const blurb = localized(language, card.blurb);
          return (
            <LocaleLink key={card.key} href={card.href} className="group block">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={card.image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <p className="font-display mt-4 text-lg text-neutral-900 group-hover:opacity-60">{name}</p>
              <p className="font-body mt-2 text-base leading-relaxed text-neutral-600">{blurb}</p>
              <span className="label-eyebrow mt-3 inline-block text-[var(--brand-accent)]">
                {t("destinationsPage.exploreTrip")}
              </span>
            </LocaleLink>
          );
        })}
      </div>
    </div>
  );
}
