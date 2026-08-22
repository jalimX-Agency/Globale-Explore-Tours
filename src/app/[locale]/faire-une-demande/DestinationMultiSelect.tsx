"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";

export type DestinationOption = { slug: string; label: string };

// A searchable multi-select with removable chips, matching Black Tomato's real "Where
// would you like to go?" widget: a trigger box showing selected chips + a dropdown panel
// with its own search field and a scrollable, alternating-row option list.
export function DestinationMultiSelect({
  options,
  selected,
  onChange,
  placeholder,
}: {
  options: DestinationOption[];
  selected: string[];
  onChange: (next: string[]) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    if (open) searchRef.current?.focus();
  }, [open]);

  const filtered = options.filter(
    (o) => !selected.includes(o.label) && o.label.toLowerCase().includes(query.toLowerCase())
  );

  function toggle(label: string) {
    onChange(selected.includes(label) ? selected.filter((v) => v !== label) : [...selected, label]);
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-[46px] w-full items-center justify-between gap-2 rounded-sm border border-neutral-300 bg-white px-3 py-2 text-left"
      >
        <div className="flex flex-1 flex-wrap gap-1.5">
          {selected.length === 0 && <span className="py-1 text-sm text-neutral-400">{placeholder}</span>}
          {selected.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 py-1 pr-1.5 pl-3 text-xs text-white"
            >
              {label}
              <span
                role="button"
                tabIndex={0}
                aria-label={`Retirer ${label}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(label);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    toggle(label);
                  }
                }}
                className="cursor-pointer rounded-full p-0.5 hover:bg-white/20"
              >
                <X className="size-3" />
              </span>
            </span>
          ))}
        </div>
        <ChevronDown className={`size-4 shrink-0 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute z-20 mt-1 w-full rounded-sm border border-neutral-200 bg-white shadow-lg">
          <div className="border-b border-neutral-100 px-3 py-2">
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
            />
          </div>
          <div className="max-h-56 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-3 py-3 text-sm text-neutral-400">Aucun résultat</p>
            ) : (
              filtered.map((o, i) => (
                <button
                  key={o.slug}
                  type="button"
                  onClick={() => {
                    toggle(o.label);
                    setQuery("");
                  }}
                  className={`block w-full px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 ${
                    i % 2 === 1 ? "bg-neutral-50" : "bg-white"
                  }`}
                >
                  {o.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
