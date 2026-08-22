"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/admin/data-table";
import { Star, Route } from "lucide-react";

type Row = {
  id: string;
  name: string;
  region: string;
  order: number;
  featured: boolean;
  _count: { tours: number };
};

// Split out from page.tsx (a server component) because column definitions carry render
// functions, and Server Components can't pass plain functions as props to Client
// Components across the RSC boundary — only the serializable `data` prop crosses that line.
export function DestinationsTable({ data }: { data: Row[] }) {
  return (
    <DataTable
      data={data}
      searchPlaceholder="Rechercher une destination..."
      getSearchText={(d) => `${d.name} ${d.region}`}
      rowHref={(d) => `/admin/destinations/${d.id}`}
      columns={[
        {
          header: "Nom",
          cell: (d) => (
            <span className="flex items-center gap-2 font-medium text-foreground">
              {d.name}
              {d.featured && <Star className="size-3.5 fill-brand-accent text-brand-accent" />}
            </span>
          ),
        },
        {
          header: "Région",
          cell: (d) => (
            <Badge variant="outline" className="font-normal text-muted-foreground">
              {d.region}
            </Badge>
          ),
        },
        {
          header: "Voyages",
          className: "text-right tabular-nums",
          cell: (d) => (
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Route className="size-3.5" />
              {d._count.tours}
            </span>
          ),
        },
        { header: "Ordre", className: "text-right tabular-nums text-muted-foreground", cell: (d) => d.order },
      ]}
    />
  );
}
