"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, ChevronRight, ChevronLeft, X, Inbox } from "lucide-react";

const PAGE_SIZE = 20;

// The full (already-filtered-by-the-server) list is still fetched and searched client-side —
// data scale here is small enough for that (~111 destinations, ~150 tours) — but only one
// page's worth is ever rendered into the DOM at a time, so the table itself stays cheap to
// paint and scroll regardless of how many rows come in.
export function DataTable<T>({
  data,
  columns,
  searchPlaceholder = "Rechercher...",
  getSearchText,
  rowHref,
  onRowClick,
}: {
  data: T[];
  columns: { header: string; cell: (row: T) => React.ReactNode; className?: string }[];
  searchPlaceholder?: string;
  getSearchText: (row: T) => string;
  /** Navigates to a URL — mutually exclusive with `onRowClick`. */
  rowHref?: (row: T) => string;
  /** Runs a callback instead of navigating (e.g. opening an edit dialog in place). */
  onRowClick?: (row: T) => void;
}) {
  const clickable = rowHref ?? onRowClick;
  const [query, setQuery] = useState("");
  const [rawPage, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.trim().toLowerCase();
    return data.filter((row) => getSearchText(row).toLowerCase().includes(q));
  }, [data, query, getSearchText]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  // Searching (or the underlying data shrinking) can leave stored `page` past the new last
  // page — clamp it here during render rather than syncing it back with an effect, so there's
  // never a frame with an out-of-range page and dead-looking pagination controls.
  const page = Math.min(rawPage, totalPages);

  const paged = useMemo(
    () => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [filtered, page]
  );

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="relative max-w-xs flex-1">
          <Search className="absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder={searchPlaceholder}
            className="pl-8"
            aria-label={searchPlaceholder}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setPage(1);
              }}
              aria-label="Effacer la recherche"
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
        {query && (
          <span className="text-xs text-muted-foreground">
            {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
          </span>
        )}
      </div>

      <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              {columns.map((col) => (
                <TableHead
                  key={col.header}
                  className="h-10 bg-muted/60 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                >
                  {col.header}
                </TableHead>
              ))}
              {clickable && <TableHead className="h-10 w-8 bg-muted/60" />}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 && (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={columns.length + (clickable ? 1 : 0)} className="py-14 text-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Inbox className="size-6" />
                    <span className="text-sm">Aucun résultat.</span>
                  </div>
                </TableCell>
              </TableRow>
            )}
            {paged.map((row, i) => (
              <TableRow
                key={i}
                className={cnRow(clickable)}
                onClick={rowHref ? () => (window.location.href = rowHref(row)) : onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((col) => (
                  <TableCell key={col.header} className={col.className}>
                    {col.cell(row)}
                  </TableCell>
                ))}
                {clickable && (
                  <TableCell className="pr-3 text-right">
                    <ChevronRight className="ml-auto size-4 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filtered.length > 0 && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} sur {filtered.length}
          </p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="size-3.5" />
              Précédent
            </Button>
            <span className="text-xs text-muted-foreground">
              {page} / {totalPages}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Suivant
              <ChevronRight className="size-3.5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function cnRow(clickable: unknown) {
  return clickable
    ? "group cursor-pointer focus-visible:bg-muted/50 focus-visible:outline-none"
    : undefined;
}
