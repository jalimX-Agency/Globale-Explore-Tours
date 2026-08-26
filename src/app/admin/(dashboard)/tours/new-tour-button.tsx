"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Tour creation always needs a destinationId (tours/new/page.tsx 404s without one) — this picks
// one inline instead of sending the admin to a page that would immediately 404.
export function NewTourButton({ destinations }: { destinations: { id: string; name: string }[] }) {
  const router = useRouter();
  const [destinationId, setDestinationId] = useState("");

  return (
    <div className="flex items-center gap-2">
      <Select
        value={destinationId}
        onValueChange={(v) => v && setDestinationId(v)}
        items={Object.fromEntries(destinations.map((d) => [d.id, d.name]))}
      >
        <SelectTrigger className="w-56">
          <SelectValue placeholder="Choisir une destination..." />
        </SelectTrigger>
        <SelectContent>
          {destinations.map((d) => (
            <SelectItem key={d.id} value={d.id}>
              {d.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        type="button"
        disabled={!destinationId}
        onClick={() => router.push(`/admin/tours/new?destinationId=${destinationId}`)}
      >
        <Plus className="size-3.5" />
        Nouveau voyage
      </Button>
    </div>
  );
}
