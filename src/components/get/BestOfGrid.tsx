"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import type { ContentBlockData } from "@/components/get/ContentBlockSection";

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function BestOfGrid({ title, blocks }: { title: string; blocks: ContentBlockData[] }) {
  const { language } = useLanguage();

  if (blocks.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block, i) => {
          const blockTitle = localized(language, block.title, block.titleEn, block.titleEs);
          const description = localized(language, block.description, block.descriptionEn, block.descriptionEs);
          return (
            <div key={i}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                {block.image ? (
                  <Image src={block.image} alt={blockTitle} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                ) : (
                  <div className="h-full w-full bg-neutral-200" />
                )}
              </div>
              <p className="font-display mt-4 text-lg text-neutral-900">{blockTitle}</p>
              <p className="font-body mt-2 text-base leading-relaxed text-neutral-600">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
