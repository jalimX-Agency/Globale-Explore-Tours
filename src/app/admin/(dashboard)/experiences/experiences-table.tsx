"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DataTable } from "@/components/admin/data-table";
import { RowThumbnail } from "@/components/admin/row-thumbnail";
import { ExperienceRowMenu } from "./experience-row-menu";

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

const SORT_OPTIONS = {
  updated: "Dernière modification",
  name: "Nom",
  order: "Ordre",
} as const;
type SortKey = keyof typeof SORT_OPTIONS;

type Row = {
  id: string;
  slug: string;
  heroTitle: string;
  kind: string;
  travelerTypeKey: string;
  filterTheme: string;
  cardImage: string;
  order: number;
  updatedAt: Date;
  _count: { children: number };
};

function TypeBadge(e: Row) {
  if (e.kind === "who" && e.travelerTypeKey) {
    return (
      <Badge variant="outline" className="border-sky-200 bg-sky-50 text-sky-700">
        {TRAVELER_TYPE_LABELS[e.travelerTypeKey] ?? e.travelerTypeKey}
      </Badge>
    );
  }
  if (e.filterTheme) {
    return (
      <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
        {THEME_FILTER_LABELS[e.filterTheme] ?? e.filterTheme}
      </Badge>
    );
  }
  return <span className="text-muted-foreground">—</span>;
}

function sortRows(rows: Row[], sort: SortKey): Row[] {
  const sorted = [...rows];
  if (sort === "updated") sorted.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  else if (sort === "name") sorted.sort((a, b) => (a.heroTitle || "").localeCompare(b.heroTitle || "", "fr"));
  else sorted.sort((a, b) => a.order - b.order);
  return sorted;
}

// One tab's worth of the list: its own type/theme/sort state, filtered+sorted before handing
// off to DataTable (which layers its own text search + pagination on top).
function ExperienceKindTab({ rows, typeLabel }: { rows: Row[]; typeLabel: "traveler" | "theme" }) {
  const [type, setType] = useState("all");
  const [sort, setSort] = useState<SortKey>("updated");

  const typeOptions = useMemo(() => {
    const keys = new Set(rows.map((r) => (typeLabel === "traveler" ? r.travelerTypeKey : r.filterTheme)).filter(Boolean));
    const labels = typeLabel === "traveler" ? TRAVELER_TYPE_LABELS : THEME_FILTER_LABELS;
    return Array.from(keys).map((k) => ({ value: k, label: labels[k] ?? k }));
  }, [rows, typeLabel]);

  const filtered = useMemo(() => {
    const byType =
      type === "all"
        ? rows
        : rows.filter((r) => (typeLabel === "traveler" ? r.travelerTypeKey : r.filterTheme) === type);
    return sortRows(byType, sort);
  }, [rows, type, sort, typeLabel]);

  const columns = [
    {
      header: "Expérience",
      cell: (e: Row) => (
        <div className="flex items-center gap-2.5">
          <RowThumbnail src={e.cardImage} alt={e.heroTitle} />
          <span className="font-medium text-foreground">{e.heroTitle || "(sans titre)"}</span>
        </div>
      ),
    },
    { header: typeLabel === "traveler" ? "Type" : "Thème", cell: TypeBadge },
    {
      header: "Sous-pages",
      className: "text-right tabular-nums text-muted-foreground",
      cell: (e: Row) => e._count.children,
    },
    {
      header: "",
      className: "w-10",
      cell: (e: Row) => <ExperienceRowMenu id={e.id} slug={e.slug} childCount={e._count.children} />,
    },
  ];

  const toolbarExtra = (
    <div className="flex items-center gap-2">
      {typeOptions.length > 0 && (
        <Select
          value={type}
          onValueChange={(v) => v && setType(v)}
          items={{ all: typeLabel === "traveler" ? "Tous les types" : "Tous les thèmes", ...Object.fromEntries(typeOptions.map((o) => [o.value, o.label])) }}
        >
          <SelectTrigger size="sm" className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{typeLabel === "traveler" ? "Tous les types" : "Tous les thèmes"}</SelectItem>
            {typeOptions.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      <Select value={sort} onValueChange={(v) => v && setSort(v as SortKey)} items={SORT_OPTIONS}>
        <SelectTrigger size="sm" className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(SORT_OPTIONS).map(([key, label]) => (
            <SelectItem key={key} value={key}>
              Trier par : {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <DataTable
      data={filtered}
      searchPlaceholder="Rechercher des expériences..."
      getSearchText={(e) => e.heroTitle}
      rowHref={(e) => `/admin/experiences/${e.id}`}
      columns={columns}
      toolbarExtra={toolbarExtra}
      pageSizeOptions={[10, 25, 50]}
    />
  );
}

export function ExperiencesTable({ data }: { data: Row[] }) {
  const whoRows = data.filter((e) => e.kind === "who");
  const whatRows = data.filter((e) => e.kind === "what");
  const privateRows = data.filter((e) => e.kind === "private");

  return (
    <Tabs defaultValue="who">
      <TabsList variant="line" className="border-b border-border">
        <TabsTrigger value="who">Qui voyage ({whoRows.length})</TabsTrigger>
        <TabsTrigger value="what">Que faire ({whatRows.length})</TabsTrigger>
        <TabsTrigger value="private">Voyage privé ({privateRows.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="who" className="pt-5">
        <ExperienceKindTab rows={whoRows} typeLabel="traveler" />
      </TabsContent>
      <TabsContent value="what" className="pt-5">
        <ExperienceKindTab rows={whatRows} typeLabel="theme" />
      </TabsContent>
      <TabsContent value="private" className="pt-5">
        <ExperienceKindTab rows={privateRows} typeLabel="theme" />
      </TabsContent>
    </Tabs>
  );
}
