"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowDown, ArrowUp, ExternalLink, Pencil, Plus, RotateCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { createTopic, deleteTopic, importDefaultTopics, moveTopic, requeueTopic, updateTopic } from "./actions";

export type TopicRow = {
  id: string;
  slug: string;
  title: string;
  notes: string;
  status: string;
  lastReport: string;
  lastRunAt: Date | null;
  publishedAt: Date | null;
};

const STATUS: Record<string, { label: string; className: string }> = {
  planned: { label: "À venir", className: "bg-sky-100 text-sky-700" },
  published: { label: "Publié", className: "bg-emerald-100 text-emerald-700" },
  failed: { label: "Échec", className: "bg-rose-100 text-rose-700" },
  skipped: { label: "Ignoré", className: "bg-slate-100 text-slate-600" },
};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

function formatDate(date: Date | null) {
  return date ? new Date(date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }) : "";
}

type Draft = { title: string; slug: string; notes: string };
const EMPTY: Draft = { title: "", slug: "", notes: "" };

export function PlanningClient({ topics }: { topics: TopicRow[] }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [draft, setDraft] = useState<Draft>(EMPTY);
  const [slugEdited, setSlugEdited] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Server actions throw for validation/permission errors; surface them as toasts instead of
  // letting the page crash.
  function run(action: () => Promise<unknown>, success?: string) {
    startTransition(async () => {
      try {
        await action();
        if (success) toast.success(success);
        router.refresh();
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Une erreur est survenue");
      }
    });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const values = { ...draft, slug: draft.slug || slugify(draft.title) };
    run(async () => {
      if (editingId) await updateTopic(editingId, values);
      else await createTopic(values);
      setDraft(EMPTY);
      setSlugEdited(false);
      setEditingId(null);
    }, editingId ? "Sujet modifié" : "Sujet ajouté au planning");
  }

  function startEdit(topic: TopicRow) {
    setEditingId(topic.id);
    setSlugEdited(true);
    setDraft({ title: topic.title, slug: topic.slug, notes: topic.notes });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const nextId = topics.find((t) => t.status === "planned")?.id;

  return (
    <div className="space-y-6">
      <form onSubmit={submit} className="space-y-3 rounded-xl bg-card p-4 ring-1 ring-foreground/10">
        <p className="text-sm font-medium">{editingId ? "Modifier le sujet" : "Ajouter un sujet"}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Input
            value={draft.title}
            onChange={(e) =>
              setDraft((d) => ({ ...d, title: e.target.value, slug: slugEdited ? d.slug : slugify(e.target.value) }))
            }
            placeholder="Titre (FR) — ex. Quand partir au Japon : le guide saison par saison"
            required
          />
          <Input
            value={draft.slug}
            onChange={(e) => {
              setSlugEdited(true);
              setDraft((d) => ({ ...d, slug: e.target.value }));
            }}
            placeholder="lien-de-l-article (généré automatiquement)"
          />
        </div>
        <Textarea
          value={draft.notes}
          onChange={(e) => setDraft((d) => ({ ...d, notes: e.target.value }))}
          placeholder="Consignes (facultatif) : angle, requête visée, voyages à mettre en avant…"
          rows={2}
        />
        <div className="flex gap-2">
          <Button type="submit" disabled={pending || !draft.title.trim()}>
            {editingId ? <Pencil className="size-3.5" /> : <Plus className="size-3.5" />}
            {editingId ? "Enregistrer" : "Ajouter au planning"}
          </Button>
          {editingId && (
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setEditingId(null);
                setDraft(EMPTY);
                setSlugEdited(false);
              }}
            >
              Annuler
            </Button>
          )}
        </div>
      </form>

      {topics.length === 0 ? (
        <div className="space-y-3 rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
          <p>Le planning est vide. Ajoutez un sujet ci-dessus, ou partez de la liste de départ (30 guides « quand partir »).</p>
          <Button
            variant="outline"
            disabled={pending}
            onClick={() => run(async () => toast.success(`${await importDefaultTopics()} sujets importés`))}
          >
            Importer les 30 sujets de départ
          </Button>
        </div>
      ) : (
        <ol className="divide-y rounded-xl bg-card ring-1 ring-foreground/10">
          {topics.map((topic, i) => {
            const status = STATUS[topic.status] ?? STATUS.planned;
            return (
              <li key={topic.id} className={cn("flex gap-3 p-4", topic.id === nextId && "bg-sky-50/60")}>
                <span className="w-6 shrink-0 pt-0.5 text-right text-xs text-muted-foreground">{i + 1}</span>
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium">{topic.title}</span>
                    <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", status.className)}>{status.label}</span>
                    {topic.id === nextId && <span className="text-xs text-sky-700">Prochain article</span>}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    /{topic.slug}
                    {topic.publishedAt && ` · publié le ${formatDate(topic.publishedAt)}`}
                    {!topic.publishedAt && topic.lastRunAt && ` · dernier essai le ${formatDate(topic.lastRunAt)}`}
                  </p>
                  {topic.notes && <p className="text-xs text-muted-foreground italic">{topic.notes}</p>}
                  {topic.lastReport && (
                    <details className="text-xs">
                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">Rapport</summary>
                      <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-muted p-3 font-sans">{topic.lastReport}</pre>
                    </details>
                  )}
                </div>
                <div className="flex shrink-0 items-start gap-1">
                  {topic.status === "published" && (
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label="Voir l'article"
                      render={<a href={`/fr/blog/${topic.slug}`} target="_blank" rel="noopener noreferrer" />}
                      nativeButton={false}
                    >
                      <ExternalLink className="size-3.5" />
                    </Button>
                  )}
                  {(topic.status === "failed" || topic.status === "skipped") && (
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label="Remettre à venir"
                      disabled={pending}
                      onClick={() => run(() => requeueTopic(topic.id), "Sujet remis dans le planning")}
                    >
                      <RotateCcw className="size-3.5" />
                    </Button>
                  )}
                  <Button variant="ghost" size="icon-sm" aria-label="Modifier" disabled={pending} onClick={() => startEdit(topic)}>
                    <Pencil className="size-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Monter"
                    disabled={pending || i === 0}
                    onClick={() => run(() => moveTopic(topic.id, "up"))}
                  >
                    <ArrowUp className="size-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Descendre"
                    disabled={pending || i === topics.length - 1}
                    onClick={() => run(() => moveTopic(topic.id, "down"))}
                  >
                    <ArrowDown className="size-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Supprimer"
                    disabled={pending}
                    onClick={() => {
                      if (window.confirm(`Supprimer « ${topic.title} » du planning ?`)) run(() => deleteTopic(topic.id), "Sujet supprimé");
                    }}
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
