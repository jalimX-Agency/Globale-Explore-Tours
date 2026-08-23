"use client";

import { useEffect, useState } from "react";

export type SubNavTab = { id: string; label: string };

export function DestinationSubNav({ tabs }: { tabs: SubNavTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  useEffect(() => {
    const triggerLine = () => window.innerHeight * 0.35;
    const handler = () => {
      const line = triggerLine();
      let current = tabs[0]?.id;
      for (const tab of tabs) {
        const el = document.getElementById(tab.id);
        if (el && el.getBoundingClientRect().top <= line) current = tab.id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [tabs]);

  if (tabs.length === 0) return null;

  return (
    <div className="sticky top-14 z-40 border-b border-neutral-200 bg-[var(--brand-sand)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-center gap-8 overflow-x-auto px-6 lg:px-10">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`label-eyebrow whitespace-nowrap border-b-2 py-4 transition-colors ${
              active === tab.id
                ? "border-[var(--brand-accent)] text-neutral-900"
                : "border-transparent text-neutral-500 hover:text-neutral-800"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
