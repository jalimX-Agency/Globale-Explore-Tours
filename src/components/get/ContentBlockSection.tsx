"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

export type ContentBlockData = {
  title: string;
  titleEn: string;
  titleEs: string;
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

export function ContentBlockSection({ title, blocks }: { title: string; blocks: ContentBlockData[] }) {
  const { language, t } = useLanguage();

  if (blocks.length === 0) return null;

  return (
    <div>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-14 space-y-16 lg:space-y-24">
        {blocks.map((block, i) => {
          const blockTitle = localized(language, block.title, block.titleEn, block.titleEs);
          const description = localized(language, block.description, block.descriptionEn, block.descriptionEs);
          const reversed = i % 2 === 1;

          const textEl = (
            <div
              className={`flex w-full flex-col justify-center py-8 lg:w-1/2 ${
                reversed
                  ? "pr-6 lg:pl-10 lg:pr-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]"
                  : "pl-6 lg:pr-10 lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]"
              }`}
            >
              <p className="font-display text-xl text-neutral-900 sm:text-2xl">{blockTitle}</p>
              <p className="font-body mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">{description}</p>
              <LocaleLink href="/reserver" className="btn-primary mt-6 inline-flex w-fit text-xs">
                {t("destinationsPage.enquire")}
              </LocaleLink>
            </div>
          );

          const imageEl = (
            <div className="relative aspect-[3/2] w-full overflow-hidden lg:w-1/2">
              {block.image ? (
                <Image src={block.image} alt={blockTitle} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              ) : (
                <div className="h-full w-full bg-neutral-200" />
              )}
            </div>
          );

          return (
            <div key={i} className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
              <div className="flex flex-col lg:flex-row lg:items-center">
                {reversed ? (
                  <>
                    {imageEl}
                    {textEl}
                  </>
                ) : (
                  <>
                    {textEl}
                    {imageEl}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
