"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DataTable } from "@/components/admin/data-table";
import { RowThumbnail } from "@/components/admin/row-thumbnail";
import { Star } from "lucide-react";
import { THEMES, TRAVELER_TYPES, FORMATS } from "./schema";

const THEME_LABELS = Object.fromEntries(THEMES.map((t) => [t.value, t.label]));
const SORT_OPTIONS = { order: "Ordre", name: "Nom", price: "Prix", updated: "Dernière modification" } as const;
type SortKey = keyof typeof SORT_OPTIONS;

type Row = {
  id: string;
  name: string;
  image: string;
  price: number;
  currency: string;
  theme: string;
  travelerTypes: string;
  featured: boolean;
  format: string;
  order: number;
  updatedAt: Date;
  destination: { id: string; name: string; region: string };
};

function sortRows(rows: Row[], sort: SortKey): Row[] {
  const sorted = [...rows];
  if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  else if (sort === "price") sorted.sort((a, b) => a.price - b.price);
  else if (sort === "updated") sorted.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  else sorted.sort((a, b) => a.order - b.order);
  return sorted;
}

export function ToursTable({ data }: { data: Row[] }) {
  const [destinationId, setDestinationId] = useState("all");
  const [theme, setTheme] = useState("all");
  const [travelerType, setTravelerType] = useState("all");
  const [format, setFormat] = useState("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("order");

  const destinationOptions = useMemo(() => {
    const seen = new Map<string, string>();
    for (const t of data) seen.set(t.destination.id, t.destination.name);
    return Array.from(seen.entries())
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name, "fr"));
  }, [data]);

  const filtered = useMemo(() => {
    let rows = data;
    if (destinationId !== "all") rows = rows.filter((t) => t.destination.id === destinationId);
    if (theme !== "all") rows = rows.filter((t) => t.theme === theme);
    if (travelerType !== "all") rows = rows.filter((t) => t.travelerTypes.split(",").map((s) => s.trim()).includes(travelerType));
    if (format !== "all") rows = rows.filter((t) => t.format === format);
    if (featuredOnly) rows = rows.filter((t) => t.featured);
    return sortRows(rows, sort);
  }, [data, destinationId, theme, travelerType, format, featuredOnly, sort]);

  const columns = [
    {
      header: "Voyage",
      cell: (t: Row) => (
        <div className="flex items-center gap-2.5">
          <RowThumbnail src={t.image} alt={t.name} />
          <span className="font-medium text-foreground">{t.name}</span>
        </div>
      ),
    },
    { header: "Destination", cell: (t: Row) => <span className="text-muted-foreground">{t.destination.name}</span> },
    {
      header: "Thème",
      cell: (t: Row) =>
        t.theme ? (
          <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">
            {THEME_LABELS[t.theme] ?? t.theme}
          </Badge>
        ) : (
          <span className="text-muted-foreground">—</span>
        ),
    },
    {
      header: "Prix",
      className: "text-right tabular-nums",
      cell: (t: Row) => `${t.price.toLocaleString("fr-FR")} ${t.currency}`,
    },
    {
      header: "Mis en avant",
      className: "text-right",
      cell: (t: Row) => (t.featured ? <Star className="ml-auto size-3.5 fill-brand-accent text-brand-accent" /> : <span className="text-muted-foreground">—</span>),
    },
  ];

  const toolbarExtra = (
    <div className="flex flex-wrap items-center gap-2">
      <Select
        value={destinationId}
        onValueChange={(v) => v && setDestinationId(v)}
        items={{ all: "Toutes les destinations", ...Object.fromEntries(destinationOptions.map((d) => [d.id, d.name])) }}
      >
        <SelectTrigger size="sm" className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Toutes les destinations</SelectItem>
          {destinationOptions.map((d) => (
            <SelectItem key={d.id} value={d.id}>
              {d.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={theme} onValueChange={(v) => v && setTheme(v)} items={{ all: "Tous les thèmes", ...THEME_LABELS }}>
        <SelectTrigger size="sm" className="w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tous les thèmes</SelectItem>
          {THEMES.map((t) => (
            <SelectItem key={t.value} value={t.value}>
              {t.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={travelerType}
        onValueChange={(v) => v && setTravelerType(v)}
        items={{ all: "Tous les voyageurs", ...Object.fromEntries(TRAVELER_TYPES.map((t) => [t.value, t.label])) }}
      >
        <SelectTrigger size="sm" className="w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tous les voyageurs</SelectItem>
          {TRAVELER_TYPES.map((t) => (
            <SelectItem key={t.value} value={t.value}>
              {t.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={format} onValueChange={(v) => v && setFormat(v)} items={{ all: "Tous les formats", ...Object.fromEntries(FORMATS.map((f) => [f.value, f.label])) }}>
        <SelectTrigger size="sm" className="w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tous les formats</SelectItem>
          {FORMATS.map((f) => (
            <SelectItem key={f.value} value={f.value}>
              {f.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <label className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Checkbox checked={featuredOnly} onCheckedChange={(c) => setFeaturedOnly(c === true)} />
        Mis en avant uniquement
      </label>

      <Select value={sort} onValueChange={(v) => v && setSort(v as SortKey)} items={SORT_OPTIONS}>
        <SelectTrigger size="sm" className="w-52">
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
      searchPlaceholder="Rechercher un voyage..."
      getSearchText={(t) => `${t.name} ${t.destination.name}`}
      rowHref={(t) => `/admin/tours/${t.id}`}
      columns={columns}
      toolbarExtra={toolbarExtra}
      pageSizeOptions={[10, 25, 50]}
    />
  );
}
