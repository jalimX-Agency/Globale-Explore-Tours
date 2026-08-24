"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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

function PageColumn(e: Row) {
  return (
    <div>
      <div className="font-medium text-foreground">{e.heroTitle || "(sans titre)"}</div>
      <div className="text-xs text-muted-foreground">/experience-types/{e.slug}</div>
    </div>
  );
}

export function ExperiencesTable({ data }: { data: Row[] }) {
  const whoRows = data.filter((e) => e.kind !== "what");
  const whatRows = data.filter((e) => e.kind === "what");

  return (
    <Tabs defaultValue="who">
      <TabsList variant="line" className="border-b border-border">
        <TabsTrigger value="who">Qui voyage ({whoRows.length})</TabsTrigger>
        <TabsTrigger value="what">Que faire ({whatRows.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="who" className="pt-5">
        <DataTable
          data={whoRows}
          searchPlaceholder="Rechercher une page..."
          getSearchText={(e) => `${e.heroTitle} ${e.slug}`}
          rowHref={(e) => `/admin/experiences/${e.id}`}
          columns={[
            { header: "Page", cell: PageColumn },
            {
              header: "Type de voyageur",
              cell: (e) => (
                <Badge variant="outline" className="border-sky-200 bg-sky-50 text-sky-700">
                  {TRAVELER_TYPE_LABELS[e.travelerTypeKey] ?? e.travelerTypeKey}
                </Badge>
              ),
            },
            { header: "Ordre", className: "text-right tabular-nums text-muted-foreground", cell: (e) => e.order },
          ]}
        />
      </TabsContent>

      <TabsContent value="what" className="pt-5">
        <DataTable
          data={whatRows}
          searchPlaceholder="Rechercher une page..."
          getSearchText={(e) => `${e.heroTitle} ${e.slug}`}
          rowHref={(e) => `/admin/experiences/${e.id}`}
          columns={[
            { header: "Page", cell: PageColumn },
            {
              header: "Filtre",
              cell: (e) => (
                <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
                  {e.filterDestination
                    ? `Destination : ${e.filterDestination.name}`
                    : `Thème : ${THEME_FILTER_LABELS[e.filterTheme] ?? e.filterTheme}`}
                </Badge>
              ),
            },
            { header: "Ordre", className: "text-right tabular-nums text-muted-foreground", cell: (e) => e.order },
          ]}
        />
      </TabsContent>
    </Tabs>
  );
}
