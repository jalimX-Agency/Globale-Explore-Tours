"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";

// Real, public TripAdvisor reviews of Globale Explore Tours — used as testimonials with attribution.
const QUOTES = [
  {
    quote: "My daughter and I had a great day during our 4x4 jeep safari. Momo was a friendly and knowledgeable guide who went out of his way to make sure that we had a nice time.",
    author: "Andrea L., Croatia",
  },
  {
    quote: "Throughout the experience everyone was so warm and friendly, and the experience itself is amazing driving through the dunes to the beach. Would highly recommend to anyone.",
    author: "Jonathan D., Buggy Adventure",
  },
  {
    quote: "Merci beaucoup pour ce tour, de la prise en charge à l'hôtel aux différents lieux visités, il nous a permis de découvrir Agadir en toute sérénité. Momo est charmant !",
    author: "Fabienne C., Agadir City Tour",
  },
  {
    quote: "Wonderful experience. Hassane and Ahmed were our rays of sunshine — ask for them. Magical landscapes.",
    author: "Florence O., Buggy Adventure",
  },
  {
    quote: "Amazing trip and amazing guide. Helped my son on the buggy. Overall the full experience was 5 star and very friendly. Will recommend 100%.",
    author: "Muhammad Z., Buggy Adventure",
  },
] as const;

const ROTATE_MS = 6000;

export function Testimonials() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const current = QUOTES[index];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-xl px-6 text-center lg:px-10">
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <CheckIcon />
          <p className="font-body mx-auto mt-4 max-w-sm text-[13px] font-bold uppercase leading-relaxed tracking-[0.08em] text-neutral-600">
            {current.quote}
          </p>
          <p className="font-body mt-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--brand-accent)]">
            {current.author}
          </p>
        </motion.div>

        <div className="mt-7 flex items-center justify-center gap-2">
          {QUOTES.map((q, i) => (
            <button
              key={q.author}
              onClick={() => setIndex(i)}
              aria-label={`${i + 1} / ${QUOTES.length}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-[var(--brand-accent)]" : "w-1.5 bg-neutral-300"
              }`}
            />
          ))}
        </div>

        <a
          href="https://www.tripadvisor.com/Attraction_Review-g293731-d27487904-Reviews-Globale_Explore_Tours-Agadir_Souss_Massa.html"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body mt-6 inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-600"
        >
          <span className="font-semibold text-neutral-600">4.9/5</span>
          <span>
            · 105 {t("testimonials.source")}
          </span>
        </a>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="mx-auto h-4 w-4 text-[var(--brand-accent)]" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 10.2l2.6 2.6L14.2 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
