"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";

export function DestinationOverview({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const extra = paragraphs.slice(1).filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl text-center">
      {heading && (
        <h2 className="font-display text-2xl font-normal tracking-wide text-neutral-800 sm:text-3xl">{heading}</h2>
      )}
      <div className="font-body mt-4 space-y-4 text-neutral-600">
        {paragraphs[0] && <p>{paragraphs[0]}</p>}
        {expanded && extra.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      {extra.length > 0 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="label-eyebrow mt-4 text-neutral-900 underline underline-offset-4 hover:opacity-60"
        >
          {expanded ? t("destinationsPage.readLess") : t("destinationsPage.readMore")}
        </button>
      )}
    </div>
  );
}
