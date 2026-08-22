"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/admin/data-table";

type Row = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  tourName: string | null;
  preferredDate: string | null;
  status: string;
  createdAt: string;
};

const STATUS_LABEL: Record<string, string> = {
  pending: "En attente",
  contacted: "Contacté",
  confirmed: "Confirmé",
  cancelled: "Annulé",
};

const STATUS_COLOR: Record<string, string> = {
  pending: "border-amber-200 bg-amber-50 text-amber-700",
  contacted: "border-sky-200 bg-sky-50 text-sky-700",
  confirmed: "border-emerald-200 bg-emerald-50 text-emerald-700",
  cancelled: "border-red-200 bg-red-50 text-red-700",
};

export function BookingsTable({ data }: { data: Row[] }) {
  return (
    <DataTable
      data={data}
      searchPlaceholder="Rechercher une réservation..."
      getSearchText={(b) => `${b.firstName} ${b.lastName} ${b.email} ${b.tourName ?? ""}`}
      rowHref={(b) => `/admin/bookings/${b.id}`}
      columns={[
        {
          header: "Client",
          cell: (b) => (
            <div>
              <div className="font-medium text-foreground">
                {b.firstName} {b.lastName}
              </div>
              <div className="text-xs text-muted-foreground">{b.email}</div>
            </div>
          ),
        },
        { header: "Voyage", cell: (b) => b.tourName ?? <span className="text-muted-foreground">—</span> },
        { header: "Date souhaitée", cell: (b) => b.preferredDate ?? <span className="text-muted-foreground">—</span> },
        {
          header: "Statut",
          cell: (b) => (
            <Badge variant="outline" className={STATUS_COLOR[b.status] ?? ""}>
              {STATUS_LABEL[b.status] ?? b.status}
            </Badge>
          ),
        },
        { header: "Reçu le", className: "text-muted-foreground", cell: (b) => b.createdAt },
      ]}
    />
  );
}
