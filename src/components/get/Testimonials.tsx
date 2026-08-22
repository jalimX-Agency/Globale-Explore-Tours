"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";

const ROTATE_MS = 7000;

function chunk<T>(arr: readonly T[], size: number): T[][] {
  const groups: T[][] = [];
  for (let i = 0; i < arr.length; i += size) groups.push(arr.slice(i, i + size));
  return groups;
}

// 1 card per page on mobile, 4 on larger screens — matches Tailwind's `sm` breakpoint (640px).
function useGroupSize() {
  const [size, setSize] = useState(4);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setSize(mq.matches ? 4 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return size;
}

// Testimonials are fully managed from /admin/testimonials — this section simply reflects
// whatever is published there, in order.
function useTestimonialItems() {
  const [items, setItems] = useState<readonly { quote: string; author: string }[]>([]);
  useEffect(() => {
    let cancelled = false;
    fetch("/api/testimonials")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.items) setItems(data.items);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  return items;
}

export function Testimonials() {
  const { t } = useLanguage();
  const groupSize = useGroupSize();
  const items = useTestimonialItems();
  const groups = chunk(items, groupSize);
  const [page, setPage] = useState(0);
  // Clamp instead of resetting via effect: groupSize changes on viewport resize, and the
  // previous page index may no longer exist once the group count shrinks (e.g. 4/page -> 1/page).
  const safePage = Math.min(page, groups.length - 1);

  useEffect(() => {
    if (groups.length < 2) return;
    const id = setInterval(() => setPage((p) => (p + 1) % groups.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [groups.length]);

  if (items.length === 0) return null;
  const current = groups[safePage];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          key={safePage}
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
            <div className="flex max-w-xs flex-wrap items-center justify-center gap-2">
              {groups.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`${i + 1} / ${groups.length}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === safePage ? "w-5 bg-[var(--brand-accent)]" : "w-1.5 bg-neutral-300"
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
