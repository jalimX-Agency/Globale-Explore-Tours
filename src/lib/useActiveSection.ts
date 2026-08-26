"use client";

import { useEffect, useState } from "react";

// Shared by DestinationSubNav (tab highlighting) and the journey trip page's route map (which
// chapter's marker/zoom is active) so both react to the exact same scroll position — a plain
// scroll listener + getBoundingClientRect(), not IntersectionObserver, because it re-evaluates
// every section's position on every scroll event rather than only at threshold-crossing
// boundaries, so it can't desync between the two consumers or miss a short section on a fast
// scroll the way a fixed IO rootMargin band can.
export function useActiveSection(ids: string[], triggerLine = 0.35): string | undefined {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      const line = window.innerHeight * triggerLine;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
    // ids is typically rebuilt inline each render — depend on its content, not its identity,
    // so the listener isn't torn down and re-attached on every parent render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|"), triggerLine]);

  return active;
}
