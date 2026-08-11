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

const GROUP_SIZE = 4;
const ROTATE_MS = 7000;

function chunk<T>(arr: readonly T[], size: number): T[][] {
  const groups: T[][] = [];
  for (let i = 0; i < arr.length; i += size) groups.push(arr.slice(i, i + size));
  return groups;
}

export function Testimonials() {
  const { t } = useLanguage();
  const groups = chunk(QUOTES, GROUP_SIZE);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (groups.length < 2) return;
    const id = setInterval(() => setPage((p) => (p + 1) % groups.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [groups.length]);

  const current = groups[page];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-12"
        >
          {current.map((item) => (
            <div key={item.author} className="w-full text-center sm:w-[45%] lg:w-[21%]">
              <QuoteIcon />
              <p className="font-body mx-auto mt-4 max-w-[22rem] text-[13px] font-bold uppercase leading-relaxed tracking-[0.06em] text-neutral-600">
                {item.quote}
              </p>
              <p className="font-body mt-3 text-[13px] italic text-[var(--brand-accent)]">{item.author}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g293731-d27487904-Reviews-Globale_Explore_Tours-Agadir_Souss_Massa.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body flex flex-col items-center gap-1.5 text-neutral-500 hover:text-neutral-800"
          >
            <span className="flex gap-0.5 text-[var(--brand-accent)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span className="text-xs">
              <span className="font-semibold text-neutral-700">4.9/5</span> · 105 {t("testimonials.source")}
            </span>
          </a>

          {groups.length > 1 && (
            <div className="flex items-center gap-2">
              {groups.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`${i + 1} / ${groups.length}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === page ? "w-5 bg-[var(--brand-accent)]" : "w-1.5 bg-neutral-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 32 22" fill="none" className="mx-auto h-5 w-7 text-[var(--brand-accent)]" aria-hidden="true">
      <path
        d="M0 22V13.5C0 6.5 4 1.5 11 0l1.5 3.5C8 5 6 8 6 11.5h6V22H0Zm18 0V13.5c0-7 4-12 11-13.5L30.5 3.5C26 5 24 8 24 11.5h6V22H18Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5z" />
    </svg>
  );
}
