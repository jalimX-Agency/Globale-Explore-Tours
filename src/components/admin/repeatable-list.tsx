"use client";

import { useFieldArray } from "react-hook-form";
import { ChevronUp, ChevronDown, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// One generic add/remove/reorder list, built on react-hook-form's useFieldArray, reused
// for every repeatable relation in the schema: ContentBlock[], TeamMember[], Faq[] here,
// and ItineraryDay[] / TourSection[] / TourHotel[] / JourneyChapter[] on the Tour form later.
//
// `control`/`name` are loosely typed for the same reason as <TrilingualField> — see its
// comment. Every call site is still fully typed by its own `useForm<FormValues>()`.
export function RepeatableList<Item extends Record<string, unknown>>({
  control,
  name,
  newItem,
  renderItem,
  addLabel = "Ajouter un élément",
  emptyLabel = "Aucun élément pour l'instant.",
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  newItem: () => Item;
  renderItem: (index: number) => React.ReactNode;
  addLabel?: string;
  emptyLabel?: string;
}) {
  const { fields, append, remove, move } = useFieldArray({ control, name });

  return (
    <div className="space-y-3">
      {fields.length === 0 && (
        <p className="rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
          {emptyLabel}
        </p>
      )}
      {fields.map((field, index) => (
        <Card key={field.id} className="gap-0 py-0">
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2">
            <span className="flex size-5 items-center justify-center rounded-full bg-brand-ink text-[11px] font-semibold text-brand-paper">
              {index + 1}
            </span>
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                aria-label="Déplacer vers le haut"
                disabled={index === 0}
                onClick={() => move(index, index - 1)}
              >
                <ChevronUp className="size-3.5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                aria-label="Déplacer vers le bas"
                disabled={index === fields.length - 1}
                onClick={() => move(index, index + 1)}
              >
                <ChevronDown className="size-3.5" />
              </Button>
              <Button
                type="button"
                variant="destructive"
                size="icon-xs"
                aria-label="Supprimer cet élément"
                onClick={() => remove(index)}
              >
                <Trash2 className="size-3.5" />
              </Button>
            </div>
          </div>
          <div className="p-4">{renderItem(index)}</div>
        </Card>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={() => append(newItem())}>
        <Plus className="size-3.5" />
        {addLabel}
      </Button>
    </div>
  );
}
