"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

export type LinkedContentCard = {
  key: string;
  image: string;
  title: string;
  desc: string;
  href: string;
};

// Same card visual language as BestOfGrid, but each card is a real clickable link — used for
// "what type of trip" style grids where every card resolves to a real filtered result.
export function LinkedContentGrid({ title, cards }: { title: string; cards: LinkedContentCard[] }) {
  const { t } = useLanguage();

  if (cards.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <LocaleLink key={card.key} href={card.href} className="group block">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <p className="font-display mt-4 text-lg text-neutral-900 group-hover:opacity-60">{card.title}</p>
            <p className="font-body mt-2 text-base leading-relaxed text-neutral-600">{card.desc}</p>
            <span className="label-eyebrow mt-3 inline-block text-[var(--brand-accent)]">
              {t("destinationsPage.exploreTrip")}
            </span>
          </LocaleLink>
        ))}
      </div>
    </div>
  );
}
