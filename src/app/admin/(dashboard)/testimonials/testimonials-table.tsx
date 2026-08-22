"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/admin/data-table";
import { Star } from "lucide-react";

export type TestimonialRow = {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  source: string;
  order: number;
};

const SOURCE_LABEL: Record<string, string> = {
  website: "Site web",
  tripadvisor: "TripAdvisor",
  google: "Google",
};

const SOURCE_COLOR: Record<string, string> = {
  website: "border-slate-200 bg-slate-50 text-slate-600",
  tripadvisor: "border-emerald-200 bg-emerald-50 text-emerald-700",
  google: "border-sky-200 bg-sky-50 text-sky-700",
};

export function TestimonialsTable({
  data,
  onRowClick,
}: {
  data: TestimonialRow[];
  onRowClick: (row: TestimonialRow) => void;
}) {
  return (
    <DataTable
      data={data}
      searchPlaceholder="Rechercher un témoignage..."
      getSearchText={(t) => `${t.author} ${t.location} ${t.quote}`}
      onRowClick={onRowClick}
      columns={[
        {
          header: "Témoignage",
          className: "max-w-xs",
          cell: (t) => <span className="block truncate text-foreground">« {t.quote} »</span>,
        },
        {
          header: "Auteur",
          cell: (t) => (
            <div>
              <div className="font-medium text-foreground">{t.author}</div>
              {t.location && <div className="text-xs text-muted-foreground">{t.location}</div>}
            </div>
          ),
        },
        {
          header: "Note",
          cell: (t) => (
            <span className="flex items-center gap-1 text-muted-foreground">
              {t.rating} <Star className="size-3.5 fill-brand-accent text-brand-accent" />
            </span>
          ),
        },
        {
          header: "Source",
          cell: (t) => (
            <Badge variant="outline" className={SOURCE_COLOR[t.source] ?? "text-muted-foreground"}>
              {SOURCE_LABEL[t.source] ?? t.source}
            </Badge>
          ),
        },
      ]}
    />
  );
}
