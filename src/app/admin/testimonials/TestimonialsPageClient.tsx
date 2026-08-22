"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PageHeader } from "@/components/admin/page-header";
import { TestimonialsTable, type TestimonialRow } from "./testimonials-table";
import { TestimonialForm } from "./testimonial-form";
import type { TestimonialFormValues } from "./schema";

const emptyValues: TestimonialFormValues = {
  quote: "",
  author: "",
  location: "",
  rating: 5,
  source: "website",
  order: 0,
};

export function TestimonialsPageClient({ data }: { data: TestimonialRow[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<TestimonialRow | "new" | null>(null);

  function close() {
    setEditing(null);
  }

  function onSaved() {
    close();
    router.refresh();
  }

  const defaultValues: TestimonialFormValues =
    editing && editing !== "new"
      ? {
          quote: editing.quote,
          author: editing.author,
          location: editing.location,
          rating: editing.rating,
          source: editing.source === "tripadvisor" || editing.source === "google" ? editing.source : "website",
          order: editing.order,
        }
      : emptyValues;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Témoignages"
        description={`${data.length} témoignage${data.length > 1 ? "s" : ""}`}
        action={
          <Button onClick={() => setEditing("new")}>
            <Plus className="size-3.5" />
            Nouveau témoignage
          </Button>
        }
      />
      <TestimonialsTable data={data} onRowClick={(row) => setEditing(row)} />

      <Dialog open={editing !== null} onOpenChange={(open) => !open && close()}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing === "new" ? "Nouveau témoignage" : "Modifier le témoignage"}</DialogTitle>
          </DialogHeader>
          {editing !== null && (
            <TestimonialForm
              key={editing === "new" ? "new" : editing.id}
              testimonialId={editing === "new" ? undefined : editing.id}
              defaultValues={defaultValues}
              onSuccess={onSaved}
              onDeleted={onSaved}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
