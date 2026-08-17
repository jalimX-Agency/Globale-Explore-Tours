"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

export type ClientLovedData = {
  title: string;
  titleEn: string;
  titleEs: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  image: string;
  ctaLabel: string;
  ctaLabelEn: string;
  ctaLabelEs: string;
  ctaHref: string;
};

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

function ClientLovedCard({ block }: { block: ClientLovedData }) {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const blockTitle = localized(language, block.title, block.titleEn, block.titleEs);
  const description = localized(language, block.description, block.descriptionEn, block.descriptionEs);
  const ctaLabel = localized(language, block.ctaLabel, block.ctaLabelEn, block.ctaLabelEs);

  return (
    <div className="flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
        {block.image ? (
          <Image src={block.image} alt={blockTitle} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        ) : (
          <div className="h-full w-full bg-neutral-200" />
        )}
      </div>
      <p className="font-display mt-3 text-lg text-neutral-900">{blockTitle}</p>
      <p className={`font-body mt-1.5 flex-1 text-sm text-neutral-600 ${isExpanded ? "" : "line-clamp-3"}`}>
        {description}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="label-eyebrow text-neutral-900 hover:opacity-60"
        >
          {isExpanded ? t("destinationsPage.readLess") : ctaLabel}
        </button>
        <LocaleLink href="/reserver" className="btn-accent text-xs px-4 py-2">
          {t("nav.bookNow")}
        </LocaleLink>
      </div>
    </div>
  );
}

export function ClientLovedGrid({ title, blocks }: { title: string; blocks: ClientLovedData[] }) {
  if (blocks.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block, i) => (
          <ClientLovedCard key={i} block={block} />
        ))}
      </div>
    </div>
  );
}
