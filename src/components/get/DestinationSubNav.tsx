"use client";

import { useActiveSection } from "@/lib/useActiveSection";

export type SubNavTab = { id: string; label: string };

export function DestinationSubNav({ tabs }: { tabs: SubNavTab[] }) {
  const active = useActiveSection(tabs.map((t) => t.id));

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
