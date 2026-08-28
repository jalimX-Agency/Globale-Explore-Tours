"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DataTable } from "@/components/admin/data-table";
import { BookingStatusForm } from "./booking-status-form";
import { deleteBooking } from "./actions";

type Row = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tourId: string | null;
  tourName: string | null;
  preferredDate: string | null;
  guests: number;
  children: number;
  duration: string;
  budget: string;
  destinationsInterest: string;
  hearAboutUs: string;
  message: string;
  language: string;
  status: string;
  createdAt: string;
  createdAtFull: string;
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

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-medium text-muted-foreground uppercase">{label}</div>
      <div className="mt-0.5 text-sm text-foreground">{value}</div>
    </div>
  );
}

export function DemandesTable({ data }: { data: Row[] }) {
  // Local copy so a status change or delete inside the dialog reflects immediately in the
  // list behind it, without waiting on a full server round-trip/page revalidation.
  const [rows, setRows] = useState(data);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const selected = rows.find((r) => r.id === selectedId) ?? null;

  async function handleDelete() {
    if (!selectedId) return;
    setDeleting(true);
    try {
      await deleteBooking(selectedId);
      setRows((prev) => prev.filter((r) => r.id !== selectedId));
      toast.success("Demande supprimée");
      setSelectedId(null);
    } catch {
      toast.error("Impossible de supprimer la demande");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <>
      <DataTable
        data={rows}
        searchPlaceholder="Rechercher une demande..."
        getSearchText={(b) => `${b.firstName} ${b.lastName} ${b.email} ${b.tourName ?? ""}`}
        onRowClick={(b) => setSelectedId(b.id)}
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

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelectedId(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>
                  {selected.firstName} {selected.lastName}
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Email" value={selected.email} />
                <Field label="Téléphone" value={selected.phone || "—"} />
                <Field
                  label="Voyage"
                  value={
                    selected.tourId ? (
                      <Link href={`/admin/tours/${selected.tourId}`} className="text-brand-accent hover:underline">
                        {selected.tourName}
                      </Link>
                    ) : (
                      "—"
                    )
                  }
                />
                <Field label="Date souhaitée" value={selected.preferredDate ?? "—"} />
                <Field
                  label="Voyageurs"
                  value={`${selected.guests} adulte${selected.guests > 1 ? "s" : ""}${selected.children > 0 ? `, ${selected.children} enfant${selected.children > 1 ? "s" : ""}` : ""}`}
                />
                <Field label="Durée souhaitée" value={selected.duration || "—"} />
                <Field label="Budget par personne" value={selected.budget || "—"} />
                <Field label="Destinations d'intérêt" value={selected.destinationsInterest || "—"} />
                <Field label="Connu via" value={selected.hearAboutUs || "—"} />
                <Field label="Langue" value={selected.language.toUpperCase()} />
              </div>

              {selected.message && (
                <div className="border-t border-border pt-4">
                  <Field label="Message" value={<p className="whitespace-pre-wrap">{selected.message}</p>} />
                </div>
              )}

              <div className="border-t border-border pt-4">
                <Field label="Reçu le" value={selected.createdAtFull} />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                <BookingStatusForm
                  key={selected.id}
                  bookingId={selected.id}
                  initialStatus={selected.status}
                  onChange={(status) =>
                    setRows((prev) => prev.map((r) => (r.id === selected.id ? { ...r, status } : r)))
                  }
                />
                <AlertDialog>
                  <AlertDialogTrigger render={<Button type="button" variant="destructive" size="sm" />}>
                    <Trash2 className="size-3.5" />
                    Supprimer
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Supprimer cette demande ?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Cette action est irréversible. La demande de {selected.firstName} {selected.lastName} sera
                        définitivement supprimée.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDelete} disabled={deleting}>
                        Supprimer définitivement
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
