"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

// A named form section that starts closed and opens on click — used to break up long
// destination/region forms into scannable, one-at-a-time-editable blocks instead of one
// long wall of always-expanded fields. Values inside a closed section are NOT lost: React
// Hook Form keeps every field's value in its own state regardless of whether the field is
// currently mounted (default `shouldUnregister: false`), so collapsing is purely visual.
export function CollapsibleSection({
  title,
  badge,
  defaultOpen = false,
  children,
}: {
  title: ReactNode;
  badge?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Card className="gap-0 py-0">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger
          className="flex w-full cursor-pointer items-center justify-between gap-3 px-(--card-spacing) py-4 text-left transition-colors hover:bg-muted/40"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase">{title}</span>
          <div className="flex items-center gap-2.5">
            {badge}
            <ChevronDown className={cn("size-4 text-muted-foreground transition-transform", open && "rotate-180")} />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-t border-border">
          <CardContent className="py-5">{children}</CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
