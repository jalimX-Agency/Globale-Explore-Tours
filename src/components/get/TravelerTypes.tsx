"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

// No real per-category photos or curated collections yet (the client is moving from an
// Agadir-only catalog to worldwide trips) — tiles use a neutral placeholder gradient, ready
// to swap for real imagery via the admin once it exists, same pattern as TourCard.
const TYPES = [
  { key: "family", param: "family", gradient: "from-neutral-800 via-neutral-700 to-neutral-600" },
  { key: "couples", param: "couples", gradient: "from-neutral-700 via-neutral-600 to-neutral-500" },
  { key: "groups", param: "groups", gradient: "from-neutral-800 via-neutral-700 to-neutral-600" },
  { key: "honeymoon", param: "honeymoon", gradient: "from-neutral-700 via-neutral-600 to-neutral-500" },
  { key: "solo", param: "solo", gradient: "from-neutral-800 via-neutral-700 to-neutral-600" },
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
                href={`/excursions?travelers=${type.param}`}
                className={`group relative flex h-64 items-end justify-center overflow-hidden rounded-sm bg-gradient-to-br sm:h-[480px] ${type.gradient}`}
              >
                <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 transition-opacity group-hover:from-black/60" />
                <span className="relative z-10 pb-6 font-display text-lg tracking-wide text-white sm:text-xl">
                  {t(`travelerTypes.${type.key}`)}
                </span>
              </LocaleLink>
            </motion.div>
          ))}
        </div>

        <LocaleLink href="/excursions" className="btn-primary mt-10 inline-flex">
          {t("travelerTypes.viewMore")}
        </LocaleLink>
      </div>
    </section>
  );
}
