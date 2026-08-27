"use client";

import { useState } from "react";
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
import { MessageReadToggle } from "./message-read-toggle";
import { deleteMessage } from "./actions";

type Row = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
  createdAtFull: string;
};

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-medium text-muted-foreground uppercase">{label}</div>
      <div className="mt-0.5 text-sm text-foreground">{value}</div>
    </div>
  );
}

export function MessagesTable({ data }: { data: Row[] }) {
  // Local copy so a read-toggle or delete inside the dialog reflects immediately in the list
  // behind it, without waiting on a full server round-trip/page revalidation.
  const [rows, setRows] = useState(data);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const selected = rows.find((r) => r.id === selectedId) ?? null;

  async function handleDelete() {
    if (!selectedId) return;
    setDeleting(true);
    try {
      await deleteMessage(selectedId);
      setRows((prev) => prev.filter((r) => r.id !== selectedId));
      toast.success("Message supprimé");
      setSelectedId(null);
    } catch {
      toast.error("Impossible de supprimer le message");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <>
      <DataTable
        data={rows}
        searchPlaceholder="Rechercher un message..."
        getSearchText={(m) => `${m.name} ${m.email} ${m.subject}`}
        onRowClick={(m) => setSelectedId(m.id)}
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

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelectedId(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.subject || "Message sans sujet"}</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Field label="Nom" value={selected.name} />
                <Field label="Email" value={selected.email} />
                <Field label="Téléphone" value={selected.phone || "—"} />
              </div>
              <div className="border-t border-border pt-4">
                <Field label="Message" value={<p className="whitespace-pre-wrap">{selected.message}</p>} />
              </div>
              <div className="border-t border-border pt-4">
                <Field label="Reçu le" value={selected.createdAtFull} />
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
                <MessageReadToggle
                  key={selected.id}
                  messageId={selected.id}
                  initialRead={selected.read}
                  onChange={(read) => setRows((prev) => prev.map((r) => (r.id === selected.id ? { ...r, read } : r)))}
                />
                <AlertDialog>
                  <AlertDialogTrigger render={<Button type="button" variant="destructive" size="sm" />}>
                    <Trash2 className="size-3.5" />
                    Supprimer
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Supprimer ce message ?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Cette action est irréversible. Le message de {selected.name} sera définitivement supprimé.
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
