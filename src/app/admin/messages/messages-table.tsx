"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/admin/data-table";

type Row = {
  id: string;
  name: string;
  email: string;
  subject: string;
  read: boolean;
  createdAt: string;
};

export function MessagesTable({ data }: { data: Row[] }) {
  return (
    <DataTable
      data={data}
      searchPlaceholder="Rechercher un message..."
      getSearchText={(m) => `${m.name} ${m.email} ${m.subject}`}
      rowHref={(m) => `/admin/messages/${m.id}`}
      columns={[
        {
          header: "De",
          cell: (m) => (
            <div className="flex items-center gap-2">
              {!m.read && <span className="size-1.5 shrink-0 rounded-full bg-brand-accent" aria-label="Non lu" />}
              <div>
                <div className={m.read ? "text-foreground" : "font-semibold text-foreground"}>{m.name}</div>
                <div className="text-xs text-muted-foreground">{m.email}</div>
              </div>
            </div>
          ),
        },
        {
          header: "Sujet",
          cell: (m) => m.subject || <span className="text-muted-foreground">—</span>,
        },
        {
          header: "Statut",
          cell: (m) =>
            m.read ? (
              <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700">
                Lu
              </Badge>
            ) : (
              <Badge variant="outline" className="border-orange-200 bg-orange-50 text-orange-700">
                Non lu
              </Badge>
            ),
        },
        { header: "Reçu le", className: "text-muted-foreground", cell: (m) => m.createdAt },
      ]}
    />
  );
}
