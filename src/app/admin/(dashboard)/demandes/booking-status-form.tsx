"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BOOKING_STATUSES } from "./schema";
import { updateBookingStatus } from "./actions";

const STATUS_LABEL: Record<string, string> = {
  pending: "En attente",
  contacted: "Contacté",
  confirmed: "Confirmé",
  cancelled: "Annulé",
};

export function BookingStatusForm({
  bookingId,
  initialStatus,
  onChange,
}: {
  bookingId: string;
  initialStatus: string;
  /** Lets a parent list (the demandes table, behind a dialog) keep its own copy of the
   * status badge in sync without waiting for a full page revalidation. */
  onChange?: (status: string) => void;
}) {
  const [status, setStatus] = useState(initialStatus);
  const [pending, startTransition] = useTransition();

  function onSave() {
    startTransition(async () => {
      try {
        await updateBookingStatus(bookingId, { status: status as (typeof BOOKING_STATUSES)[number] });
        onChange?.(status);
        toast.success("Statut mis à jour");
      } catch {
        toast.error("Impossible de mettre à jour le statut");
      }
    });
  }

  return (
    <div className="flex items-center gap-3">
      <Select value={status} onValueChange={(value) => value && setStatus(value)}>
        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {BOOKING_STATUSES.map((s) => (
            <SelectItem key={s} value={s}>
              {STATUS_LABEL[s]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={onSave} disabled={pending || status === initialStatus}>
        {pending ? "Enregistrement..." : "Enregistrer"}
      </Button>
    </div>
  );
}
