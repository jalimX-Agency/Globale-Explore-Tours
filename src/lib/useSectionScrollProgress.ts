"use client";

import { useEffect, useState } from "react";

// Continuous sibling of useActiveSection: instead of picking a winner among several sections,
// this tracks how far the scroll has moved through ONE specific section — 0 right as its top
// crosses the trigger line, 1 once its bottom reaches that same line (handing off to whatever
// comes next). Same plain-scroll-listener technique (not IntersectionObserver) for the same
// reason: it re-evaluates every frame rather than only at fixed threshold crossings, so an
// animation driven by it (e.g. a route line "drawing in") stays smooth instead of jumping in
// coarse steps.
export function useSectionScrollProgress(id: string, triggerLine = 0.35): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const line = window.innerHeight * triggerLine;
      const rect = el.getBoundingClientRect();
      const p = rect.height > 0 ? (line - rect.top) / rect.height : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [id, triggerLine]);

  return progress;
}
