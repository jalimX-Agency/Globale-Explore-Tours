"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/admin/data-table";

type Row = { id: string; title: string; category: string; author: string; order: number };

export function BlogTable({ data }: { data: Row[] }) {
  return (
    <DataTable
      data={data}
      searchPlaceholder="Rechercher un article..."
      getSearchText={(p) => `${p.title} ${p.category} ${p.author}`}
      rowHref={(p) => `/admin/blog/${p.id}`}
      columns={[
        { header: "Titre", cell: (p) => <span className="font-medium text-foreground">{p.title}</span> },
        {
          header: "Catégorie",
          cell: (p) =>
            p.category ? (
              <Badge variant="outline" className="font-normal text-muted-foreground">
                {p.category}
              </Badge>
            ) : (
              <span className="text-muted-foreground">—</span>
            ),
        },
        { header: "Auteur", cell: (p) => p.author || <span className="text-muted-foreground">—</span> },
        { header: "Ordre", className: "text-right tabular-nums text-muted-foreground", cell: (p) => p.order },
      ]}
    />
  );
}
