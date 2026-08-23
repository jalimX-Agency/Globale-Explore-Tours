"use client";

import { useMemo, useState, useTransition } from "react";
import { toast } from "sonner";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toggleTourTravelerType } from "./actions";

export type TripOption = {
  id: string;
  name: string;
  destinationName: string;
  travelerTypes: string;
};

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
  const [pending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    if (!query.trim()) return trips;
    const q = query.trim().toLowerCase();
    return trips.filter((t) => `${t.name} ${t.destinationName}`.toLowerCase().includes(q));
  }, [trips, query]);

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
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {matches.size} voyage{matches.size > 1 ? "s" : ""} correspondent actuellement à cette page. Cochez ou
          décochez un voyage pour le faire apparaître ou disparaître de cette page.
        </p>
      </div>
      <div className="relative max-w-xs">
        <Search className="absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un voyage..."
          className="pl-8"
        />
      </div>
      <div className="max-h-[32rem] overflow-y-auto rounded-xl border border-border">
        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">Aucun voyage trouvé.</p>
        )}
        <div className="divide-y divide-border">
          {filtered.map((trip) => {
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
    </div>
  );
}
