"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";

// Real, public TripAdvisor reviews of Globale Explore Tours — used as testimonials with attribution.
const QUOTES = [
  {
    quote: "My daughter and I had a great day during our 4x4 jeep safari. Momo was a friendly and knowledgeable guide who went out of his way to make sure that we had a nice time.",
    author: "Andrea L.",
    location: "Osijek, Croatia",
  },
  {
    quote: "Throughout the experience everyone was so warm and friendly, and the experience itself is amazing driving through the dunes to the beach. Would highly recommend to anyone.",
    author: "Jonathan D.",
    location: "Buggy Adventure",
  },
  {
    quote: "Merci beaucoup pour ce tour, de la prise en charge à l'hôtel aux différents lieux visités, il nous a permis de découvrir Agadir en toute sérénité. Momo est charmant !",
    author: "Fabienne C.",
    location: "Agadir City Tour",
  },
  {
    quote: "Amazing trim and amazing guide. Helped my son on buggy. Overall full experience was 5 star and very friendly. Will recommend 100%.",
    author: "Muhammad Z.",
    location: "Buggy Adventure",
  },
] as const;

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--brand-sand)] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="label-eyebrow text-neutral-500">{t("testimonials.eyebrow")}</p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl">{t("testimonials.title")}</h2>
          </div>
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g293731-d27487904-Reviews-Globale_Explore_Tours-Agadir_Souss_Massa.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900"
          >
            <span className="font-display text-2xl text-neutral-900">4.9</span>
            <span>/ 5 · 105 {t("testimonials.source")}</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: EASE }}
            >
              <p className="font-display text-xl leading-snug text-neutral-900 sm:text-2xl" style={{ textWrap: "balance" }}>
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer className="font-body mt-4 text-sm text-neutral-500">
                {q.author} — {q.location}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
