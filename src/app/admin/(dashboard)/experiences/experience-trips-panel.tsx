"use client";

import { useMemo, useState, useTransition } from "react";
import { toast } from "sonner";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toggleTourTravelerType } from "./actions";

export type TripOption = {
  id: string;
  name: string;
  destinationName: string;
  region: string;
  regionSlug: string;
  travelerTypes: string;
};

type StatusFilter = "all" | "matched" | "unmatched";

const PAGE_SIZE = 10;

function isMatched(travelerTypes: string, key: string) {
  return travelerTypes
    .split(",")
    .map((s) => s.trim())
    .includes(key);
}

// A tour "belongs" to this experience page purely by having `travelerTypeKey` inside its
// comma-separated Tour.travelerTypes string — there's no join table. This lets staff see and
// toggle that membership directly instead of hand-editing the raw comma list on each tour.
export function ExperienceTripsPanel({ travelerTypeKey, trips }: { travelerTypeKey: string; trips: TripOption[] }) {
  const [matches, setMatches] = useState(() => new Set(trips.filter((t) => isMatched(t.travelerTypes, travelerTypeKey)).map((t) => t.id)));
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [regionFilter, setRegionFilter] = useState("");
  const [rawPage, setPage] = useState(1);
  const [pending, startTransition] = useTransition();

  const regionOptions = useMemo(() => {
    const seen = new Map<string, string>(); // regionSlug -> region label
    for (const t of trips) {
      if (t.regionSlug && !seen.has(t.regionSlug)) seen.set(t.regionSlug, t.region);
    }
    return Array.from(seen.entries()).sort(([, a], [, b]) => a.localeCompare(b));
  }, [trips]);

  const filtered = useMemo(() => {
    let list = trips;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((t) => `${t.name} ${t.destinationName}`.toLowerCase().includes(q));
    }
    if (regionFilter) list = list.filter((t) => t.regionSlug === regionFilter);
    if (status === "matched") list = list.filter((t) => matches.has(t.id));
    else if (status === "unmatched") list = list.filter((t) => !matches.has(t.id));
    return list;
  }, [trips, query, regionFilter, status, matches]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(rawPage, totalPages);
  const paged = useMemo(() => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), [filtered, page]);

  function resetToFirstPage() {
    setPage(1);
  }

  function toggle(tripId: string, checked: boolean) {
    setMatches((prev) => {
      const next = new Set(prev);
      if (checked) next.add(tripId);
      else next.delete(tripId);
      return next;
    });
    startTransition(async () => {
      try {
        await toggleTourTravelerType(tripId, travelerTypeKey, checked);
      } catch {
        toast.error("Une erreur est survenue");
        setMatches((prev) => {
          const reverted = new Set(prev);
          if (checked) reverted.delete(tripId);
          else reverted.add(tripId);
          return reverted;
        });
      }
    });
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        {matches.size} voyage{matches.size > 1 ? "s" : ""} correspondent actuellement à cette page. Cochez ou
        décochez un voyage pour le faire apparaître ou disparaître de cette page.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative max-w-xs flex-1">
          <Search className="absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              resetToFirstPage();
            }}
            placeholder="Rechercher un voyage..."
            className="pl-8"
          />
        </div>

        <select
          value={regionFilter}
          onChange={(e) => {
            setRegionFilter(e.target.value);
            resetToFirstPage();
          }}
          className="h-9 rounded-md border border-input bg-transparent px-3 text-sm text-foreground"
        >
          <option value="">Toutes les régions</option>
          {regionOptions.map(([slug, label]) => (
            <option key={slug} value={slug}>
              {label}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-1 rounded-md border border-input p-0.5">
          {(
            [
              ["all", "Tous"],
              ["matched", "Correspondants"],
              ["unmatched", "Non correspondants"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setStatus(value);
                resetToFirstPage();
              }}
              className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                status === value ? "bg-brand-ink text-brand-paper" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border">
        {paged.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">Aucun voyage trouvé.</p>
        )}
        <div className="divide-y divide-border">
          {paged.map((trip) => {
            const checked = matches.has(trip.id);
            return (
              <label
                key={trip.id}
                className="flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors hover:bg-muted/50"
              >
                <Checkbox
                  checked={checked}
                  disabled={pending}
                  onCheckedChange={(value) => toggle(trip.id, value === true)}
                />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-foreground">{trip.name}</div>
                  <div className="text-xs text-muted-foreground">{trip.destinationName}</div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {filtered.length > 0 && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} sur {filtered.length}
          </p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="size-3.5" />
              Précédent
            </Button>
            <span className="text-xs text-muted-foreground">
              {page} / {totalPages}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Suivant
              <ChevronRight className="size-3.5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
