"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { MoreHorizontal, Pencil, ExternalLink, Copy, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { duplicateExperienceType, deleteExperienceType } from "./actions";

export function ExperienceRowMenu({
  id,
  slug,
  childCount,
}: {
  id: string;
  slug: string;
  childCount: number;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [deleteOpen, setDeleteOpen] = useState(false);

  function onDuplicate() {
    startTransition(async () => {
      try {
        await duplicateExperienceType(id);
        toast.success("Expérience dupliquée");
        router.refresh();
      } catch {
        toast.error("Impossible de dupliquer cette expérience");
      }
    });
  }

  function onDelete() {
    startTransition(async () => {
      try {
        await deleteExperienceType(id);
        toast.success("Expérience supprimée");
        router.refresh();
      } catch {
        toast.error("Impossible de supprimer cette expérience");
      }
    });
  }

  return (
    <>
      {/* stopPropagation keeps clicks here from also firing the row's own navigate-on-click handler */}
      <div onClick={(e) => e.stopPropagation()} className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-7 opacity-0 transition-opacity group-hover:opacity-100 data-[popup-open]:opacity-100"
              />
            }
            nativeButton={false}
          >
            <MoreHorizontal className="size-4" />
            <span className="sr-only">Actions</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem render={<Link href={`/admin/experiences/${id}`} />}>
              <Pencil className="size-3.5" />
              Modifier
            </DropdownMenuItem>
            <DropdownMenuItem
              render={<a href={`/fr/experience-types/${slug}`} target="_blank" rel="noreferrer" />}
            >
              <ExternalLink className="size-3.5" />
              Voir la page
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDuplicate} disabled={pending}>
              <Copy className="size-3.5" />
              Dupliquer
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive" onClick={() => setDeleteOpen(true)}>
              <Trash2 className="size-3.5" />
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer définitivement cette expérience ?</AlertDialogTitle>
            <AlertDialogDescription>
              La page et tout son contenu associé (destinations mises en avant, réassurance,
              questions fréquentes) seront supprimés. La page publique correspondante cessera de
              fonctionner.
              {childCount > 0 && (
                <>
                  {" "}
                  <strong className="text-destructive">
                    Ses {childCount} sous-page{childCount > 1 ? "s" : ""} seront également
                    supprimée{childCount > 1 ? "s" : ""}.
                  </strong>
                </>
              )}{" "}
              Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete}>Supprimer définitivement</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
