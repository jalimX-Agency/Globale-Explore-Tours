"use client";

import Image from "next/image";
import { LocaleLink } from "@/components/get/LocaleLink";
import { useLanguage } from "@/lib/i18n/context";

export type TravelGuideItem = {
  slug: string;
  title: string;
  titleEn: string;
  titleEs: string;
  excerpt: string;
  excerptEn: string;
  excerptEs: string;
  image: string;
};

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function TravelGuides({ title, guides }: { title: string; guides: TravelGuideItem[] }) {
  const { language } = useLanguage();
  if (guides.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">{title}</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {guides.map((g) => {
          const guideTitle = localized(language, g.title, g.titleEn, g.titleEs);
          return (
            <LocaleLink key={g.slug} href={`/blog/${g.slug}`} className="group block w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              {g.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-neutral-100">
                  <Image
                    src={g.image}
                    alt={guideTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              )}
              <h3 className="font-display mt-4 text-lg text-neutral-900 group-hover:underline">{guideTitle}</h3>
              <p className="font-body mt-2 line-clamp-3 text-sm text-neutral-600">
                {localized(language, g.excerpt, g.excerptEn, g.excerptEs)}
              </p>
            </LocaleLink>
          );
        })}
      </div>
    </section>
  );
}
