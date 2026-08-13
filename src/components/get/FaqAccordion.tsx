"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export type FaqData = {
  question: string;
  questionEn: string;
  questionEs: string;
  answer: string;
  answerEn: string;
  answerEs: string;
};

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

export function FaqAccordion({ faqs }: { faqs: FaqData[] }) {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-display text-center text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">
        {t("destinationsPage.faq")}
      </h2>
      <div className="mt-8 divide-y divide-neutral-200 border-t border-b border-neutral-200">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const question = localized(language, faq.question, faq.questionEn, faq.questionEs);
          const answer = localized(language, faq.answer, faq.answerEn, faq.answerEs);
          return (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base text-neutral-900 sm:text-lg">{question}</span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-neutral-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && <p className="font-body pb-5 text-sm text-neutral-600 sm:text-base">{answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
