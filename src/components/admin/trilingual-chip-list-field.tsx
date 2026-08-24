"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { useLang, LANG_SUFFIX } from "@/components/admin/lang-context";
import { cn } from "@/lib/utils";

// Sibling of <TrilingualField> for the same comma-joined-string fields (e.g. Tour.includes)
// but edited as a chip list instead of a raw "type your own commas" text box — same
// language-tab-follows-the-page behavior via useLang(), just a different input widget.
export function TrilingualChipListField({
  control,
  baseName,
  label,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  baseName: string;
  label: string;
}) {
  const { lang } = useLang();
  const name = `${baseName}${LANG_SUFFIX[lang]}`;
  const [draft, setDraft] = useState("");

  return (
    <div className="space-y-1.5">
      <span className="text-sm leading-none font-medium">{label}</span>
      <FormField
        control={control}
        name={name}
        render={({ field }) => {
          const items = (field.value as string)
            ? (field.value as string).split(",").map((s) => s.trim()).filter(Boolean)
            : [];

          function commitDraft() {
            const value = draft.trim();
            setDraft("");
            if (!value) return;
            field.onChange([...items, value].join(","));
          }

          return (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border border-input bg-transparent px-2 py-1.5 text-sm",
                    "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50"
                  )}
                >
                  {items.map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="inline-flex items-center gap-1 rounded-sm bg-muted px-2 py-0.5 text-xs text-foreground"
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() => field.onChange(items.filter((_, i) => i !== index).join(","))}
                        aria-label={`Retirer ${item}`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="size-3" />
                      </button>
                    </span>
                  ))}
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === ",") {
                        e.preventDefault();
                        commitDraft();
                      } else if (e.key === "Backspace" && draft === "" && items.length > 0) {
                        field.onChange(items.slice(0, -1).join(","));
                      }
                    }}
                    onBlur={commitDraft}
                    placeholder={items.length === 0 ? "Tapez puis Entrée..." : ""}
                    className="min-w-[8rem] flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </FormControl>
            </FormItem>
          );
        }}
      />
    </div>
  );
}
