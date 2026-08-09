"use client";

import { LocaleLink } from "@/components/get/LocaleLink";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";

// Neutral placeholder until the client's own photo lands — no theme color-coding,
// consistent with the monochrome chrome (imagery is the only color source once supplied).
const PLACEHOLDER_GRADIENT = "from-neutral-800 via-neutral-700 to-neutral-600";

export interface TourCardData {
  slug: string;
  name: string;
  nameEn: string;
  nameEs: string;
  tagline: string;
  taglineEn: string;
  taglineEs: string;
  price: number;
  originalPrice: number;
  currency: string;
  duration: string;
  durationEn: string;
  durationEs: string;
  theme: string;
  image: string;
}

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function TourCard({ tour, index = 0 }: { tour: TourCardData; index?: number }) {
  const { language, t } = useLanguage();
  const name = localized(language, tour.name, tour.nameEn, tour.nameEs);
  const tagline = localized(language, tour.tagline, tour.taglineEn, tour.taglineEs);
  const duration = localized(language, tour.duration, tour.durationEn, tour.durationEs);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <LocaleLink href={`/excursions/${tour.slug}`} className="group block">
        <div className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-gradient-to-br ${PLACEHOLDER_GRADIENT}`}>
          {tour.image ? (
            // eslint-disable-next-line @next/next/no-img-element -- placeholder path until real photos are supplied
            <img src={tour.image} alt={name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="label-eyebrow text-white/50">{t("featured.photoPending")}</span>
            </div>
          )}
          <span className="label-eyebrow absolute left-4 top-4 rounded-sm bg-white/90 px-2.5 py-1 text-neutral-800">
            {duration}
          </span>
        </div>
        <div className="mt-4">
          <p className="font-display text-lg text-neutral-900 group-hover:opacity-60">{name}</p>
          <p className="font-body mt-1 text-sm text-neutral-500">{tagline}</p>
          <p className="font-body mt-3 text-sm text-neutral-700">
            {t("featured.from")}{" "}
            <span className="font-semibold text-neutral-900">
              {tour.price}€
            </span>
            {tour.originalPrice > tour.price && (
              <span className="ml-1.5 text-neutral-400 line-through">{tour.originalPrice}€</span>
            )}
            <span className="text-neutral-400">{t("featured.perPerson")}</span>
          </p>
        </div>
      </LocaleLink>
    </motion.div>
  );
}
