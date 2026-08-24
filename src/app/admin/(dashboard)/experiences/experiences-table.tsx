"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/admin/data-table";

const TRAVELER_TYPE_LABELS: Record<string, string> = {
  family: "Famille",
  couples: "Couples",
  groups: "Groupes",
  honeymoon: "Lune de miel",
  solo: "Solo",
};

const THEME_FILTER_LABELS: Record<string, string> = {
  adventure: "Aventure",
  culture: "Culture",
  relax: "Détente",
  family: "Famille",
};

type Row = {
  id: string;
  slug: string;
  heroTitle: string;
  kind: string;
  travelerTypeKey: string;
  filterTheme: string;
  filterDestination: { name: string } | null;
  order: number;
  _count: { contentBlocks: number; faqs: number };
};

export function ExperiencesTable({ data }: { data: Row[] }) {
  return (
    <DataTable
      data={data}
      searchPlaceholder="Rechercher une page..."
      getSearchText={(e) => `${e.heroTitle} ${e.slug}`}
      rowHref={(e) => `/admin/experiences/${e.id}`}
      columns={[
        {
          header: "Page",
          cell: (e) => (
            <div>
              <div className="font-medium text-foreground">{e.heroTitle || "(sans titre)"}</div>
              <div className="text-xs text-muted-foreground">/experience-types/{e.slug}</div>
            </div>
          ),
        },
        {
          header: "Type",
          cell: (e) =>
            e.kind === "what" ? (
              <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
                {e.filterDestination
                  ? `Destination : ${e.filterDestination.name}`
                  : `Thème : ${THEME_FILTER_LABELS[e.filterTheme] ?? e.filterTheme}`}
              </Badge>
            ) : (
              <Badge variant="outline" className="border-sky-200 bg-sky-50 text-sky-700">
                {TRAVELER_TYPE_LABELS[e.travelerTypeKey] ?? e.travelerTypeKey}
              </Badge>
            ),
        },
        { header: "Ordre", className: "text-right tabular-nums text-muted-foreground", cell: (e) => e.order },
      ]}
    />
  );
}
