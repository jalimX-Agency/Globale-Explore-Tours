"use client";

import { DataTable } from "@/components/admin/data-table";
import { MapPin } from "lucide-react";

type Row = { id: string; slug: string; displayName: string; heading: string; order: number; destinationCount: number };

// Split from page.tsx for the same reason as destinations-table.tsx — see its comment.
export function RegionsTable({ data }: { data: Row[] }) {
  return (
    <DataTable
      data={data}
      searchPlaceholder="Rechercher une région..."
      getSearchText={(r) => `${r.displayName} ${r.slug}`}
      rowHref={(r) => `/admin/regions/${r.id}`}
      columns={[
        { header: "Région", cell: (r) => <span className="font-medium text-foreground">{r.displayName}</span> },
        {
          header: "Titre de page",
          cell: (r) => <span className="text-muted-foreground">{r.heading}</span>,
        },
        {
          header: "Pays",
          className: "text-right tabular-nums",
          cell: (r) => (
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="size-3.5" />
              {r.destinationCount}
            </span>
          ),
        },
        { header: "Ordre", className: "text-right tabular-nums text-muted-foreground", cell: (r) => r.order },
      ]}
    />
  );
}
