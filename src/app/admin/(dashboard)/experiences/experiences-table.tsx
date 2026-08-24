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
  parentId: string | null;
  travelerTypeKey: string;
  filterTheme: string;
  filterMonths: string;
  filterDestination: { name: string } | null;
  order: number;
  _count: { contentBlocks: number; faqs: number };
};

// Keeps each parent immediately followed by its own children (in their own order) instead of
// interleaving every row by a single flat `order` — a parent's children share its neighborhood
// in the numbering, but aren't guaranteed to sort contiguously against unrelated top-level rows.
function groupByParent(rows: Row[]): Row[] {
  const byParent = new Map<string, Row[]>();
  const roots: Row[] = [];
  for (const row of rows) {
    if (row.parentId) {
      const siblings = byParent.get(row.parentId) ?? [];
      siblings.push(row);
      byParent.set(row.parentId, siblings);
    } else {
      roots.push(row);
    }
  }
  const out: Row[] = [];
  for (const root of roots) {
    out.push(root);
    out.push(...(byParent.get(root.id) ?? []));
  }
  return out;
}

function PageColumn(e: Row) {
  return (
    <div className={e.parentId ? "pl-5" : undefined}>
      <div className="font-medium text-foreground">
        {e.parentId && <span className="text-muted-foreground">↳ </span>}
        {e.heroTitle || "(sans titre)"}
      </div>
      <div className="text-xs text-muted-foreground">/experience-types/{e.slug}</div>
    </div>
  );
}

function FilterBadge(e: Row) {
  if (e.filterDestination) {
    return (
      <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
        Destination : {e.filterDestination.name}
      </Badge>
    );
  }
  if (e.filterTheme) {
    return (
      <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
        Thème : {THEME_FILTER_LABELS[e.filterTheme] ?? e.filterTheme}
      </Badge>
    );
  }
  if (e.filterMonths) {
    return (
      <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
        Période définie
      </Badge>
    );
  }
  if (e.parentId) {
    return (
      <Badge variant="outline" className="text-muted-foreground">
        Hérite du parent
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="border-sky-200 bg-sky-50 text-sky-700">
      {TRAVELER_TYPE_LABELS[e.travelerTypeKey] ?? e.travelerTypeKey}
    </Badge>
  );
}

export function ExperiencesTable({ data }: { data: Row[] }) {
  const whoRows = groupByParent(data.filter((e) => e.kind === "who"));
  const whatRows = groupByParent(data.filter((e) => e.kind === "what"));
  const privateRows = groupByParent(data.filter((e) => e.kind === "private"));

  const columns = [
    { header: "Page", cell: PageColumn },
    { header: "Filtre", cell: FilterBadge },
    { header: "Ordre", className: "text-right tabular-nums text-muted-foreground", cell: (e: Row) => e.order },
  ];

  return (
    <Tabs defaultValue="who">
      <TabsList variant="line" className="border-b border-border">
        <TabsTrigger value="who">Qui voyage ({whoRows.length})</TabsTrigger>
        <TabsTrigger value="what">Que faire ({whatRows.length})</TabsTrigger>
        <TabsTrigger value="private">Voyage privé ({privateRows.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="who" className="pt-5">
        <DataTable
          data={whoRows}
          searchPlaceholder="Rechercher une page..."
          getSearchText={(e) => `${e.heroTitle} ${e.slug}`}
          rowHref={(e) => `/admin/experiences/${e.id}`}
          columns={columns}
        />
      </TabsContent>

      <TabsContent value="what" className="pt-5">
        <DataTable
          data={whatRows}
          searchPlaceholder="Rechercher une page..."
          getSearchText={(e) => `${e.heroTitle} ${e.slug}`}
          rowHref={(e) => `/admin/experiences/${e.id}`}
          columns={columns}
        />
      </TabsContent>

      <TabsContent value="private" className="pt-5">
        <DataTable
          data={privateRows}
          searchPlaceholder="Rechercher une page..."
          getSearchText={(e) => `${e.heroTitle} ${e.slug}`}
          rowHref={(e) => `/admin/experiences/${e.id}`}
          columns={columns}
        />
      </TabsContent>
    </Tabs>
  );
}
