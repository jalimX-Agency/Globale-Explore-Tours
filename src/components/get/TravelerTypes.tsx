"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

const R2 = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev";

// Generic mood imagery (Pexels, free/commercial-use licensed) — appropriate here since
// these tiles are category art, not photos claiming to depict a specific paid tour.
const TYPES = [
  { key: "family", href: "/experience-types/family-holidays", image: `${R2}/traveler-types/family.jpg` },
  { key: "couples", href: "/experience-types/couples-holidays", image: `${R2}/traveler-types/couples.jpg` },
  { key: "groups", href: "/experience-types/luxury-group-holidays", image: `${R2}/traveler-types/groups.jpg` },
  { key: "honeymoon", href: "/experience-types/luxury-honeymoons", image: `${R2}/traveler-types/honeymoon.jpg` },
  { key: "solo", href: "/experience-types/solo-holidays", image: `${R2}/traveler-types/solo.jpg` },
] as const;

export function TravelerTypes() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--brand-sand)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2
          className="font-display text-3xl font-normal tracking-wide text-neutral-800 sm:text-4xl lg:text-[45px]"
          style={{ textWrap: "balance" }}
        >
          {t("travelerTypes.title")}
        </h2>
        <p className="label-eyebrow mt-4 inline-block border-b-2 border-[var(--brand-accent)] pb-2 text-neutral-800">
          {t("travelerTypes.tab")}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
          {TYPES.map((type, i) => (
            <motion.div
              key={type.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-1"
            >
              <LocaleLink
                href={type.href}
                className="group relative flex h-64 items-end justify-center overflow-hidden rounded-sm bg-neutral-800 sm:h-[480px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- external R2 asset, no next/image domain config needed for this fixed set */}
                <img
                  src={type.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/0 transition-opacity group-hover:from-black/70" />
                <span className="relative z-10 pb-6 font-display text-lg tracking-wide text-white sm:text-xl">
                  {t(`travelerTypes.${type.key}`)}
                </span>
              </LocaleLink>
            </motion.div>
          ))}
        </div>

        <LocaleLink href="/experience-types" className="btn-primary mt-10 inline-flex">
          {t("travelerTypes.viewMore")}
        </LocaleLink>
      </div>
    </section>
  );
}
