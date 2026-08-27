"use client";

import { useState, useTransition } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ChevronDown, Trash2 } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { TrilingualField } from "@/components/admin/trilingual-field";
import { TrilingualChipListField } from "@/components/admin/trilingual-chip-list-field";
import { MediaUploadField } from "@/components/admin/media-upload-field";
import { MediaUploadListField } from "@/components/admin/media-upload-list-field";
import { RepeatableList } from "@/components/admin/repeatable-list";
import { CollapsibleSection } from "@/components/admin/collapsible-section";
import { LangProvider, LangSwitcher } from "@/components/admin/lang-context";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";

import { tourFormSchema, THEMES, TRAVELER_TYPES, type TourFormValues } from "./schema";
import { createTour, updateTour, deleteTour } from "./actions";
import { RouteMapEditor } from "./route-map-editor";

type Destination = { id: string; name: string };

const CATEGORIES = [
  { value: "activity", label: "Activité" },
  { value: "tour", label: "Circuit" },
  { value: "multi-day", label: "Séjour plusieurs jours" },
  { value: "transfer", label: "Transfert" },
];

// Same 5 keys as the public "Trip Finder" (t("feelings.*") in fr/en/es.ts) — this is the
// tag it filters tours by, distinct from Theme above.
const FEELINGS = [
  { value: "revitalized", label: "Ressourcé" },
  { value: "freedom", label: "Libre" },
  { value: "distraction", label: "Émerveillé" },
  { value: "challenged", label: "Stimulé" },
  { value: "contentment", label: "Apaisé" },
];

const MONTHS = [
  { value: "january", label: "Janvier" },
  { value: "february", label: "Février" },
  { value: "march", label: "Mars" },
  { value: "april", label: "Avril" },
  { value: "may", label: "Mai" },
  { value: "june", label: "Juin" },
  { value: "july", label: "Juillet" },
  { value: "august", label: "Août" },
  { value: "september", label: "Septembre" },
  { value: "october", label: "Octobre" },
  { value: "november", label: "Novembre" },
  { value: "december", label: "Décembre" },
];

const DURATION_UNITS = [
  { value: "days", label: "Jours" },
  { value: "nights", label: "Nuits" },
  { value: "hours", label: "Heures" },
];

const CURRENCIES = [
  { value: "EUR", label: "EUR — Euro" },
  { value: "USD", label: "USD — Dollar" },
  { value: "GBP", label: "GBP — Livre sterling" },
  { value: "MAD", label: "MAD — Dirham" },
];

function newDay() {
  return {
    dayNumber: 1,
    location: "",
    locationEn: "",
    locationEs: "",
    hotel: "",
    title: "",
    titleEn: "",
    titleEs: "",
    description: "",
    descriptionEn: "",
    descriptionEs: "",
    image: "",
    images: "",
  };
}

function newSection() {
  return { heading: "", headingEn: "", headingEs: "", body: "", bodyEn: "", bodyEs: "" };
}

function newHotel() {
  return { name: "", nameEn: "", nameEs: "", description: "", descriptionEn: "", descriptionEs: "", image: "" };
}

function newChapter() {
  return {
    title: "",
    titleEn: "",
    titleEs: "",
    intro: "",
    introEn: "",
    introEs: "",
    galleryImages: "",
    mapMarkerX: 50,
    mapMarkerY: 50,
    days: [] as ReturnType<typeof newDay>[],
  };
}

// Flags EN/ES as "incomplete" when some field that already has French content is still
// untouched in that language — same page-wide translation-audit pattern as destination-form.tsx.
function computeIncomplete(values: TourFormValues) {
  const triples: { fr: string; en: string; es: string }[] = [
    { fr: values.name, en: values.nameEn, es: values.nameEs },
    { fr: values.tagline, en: values.taglineEn, es: values.taglineEs },
    { fr: values.description, en: values.descriptionEn, es: values.descriptionEs },
    { fr: values.longDescription, en: values.longDescriptionEn, es: values.longDescriptionEs },
    { fr: values.includes, en: values.includesEn, es: values.includesEs },
  ];
  for (const s of values.sections) {
    triples.push({ fr: s.heading, en: s.headingEn, es: s.headingEs });
    triples.push({ fr: s.body, en: s.bodyEn, es: s.bodyEs });
  }
  for (const h of values.hotels) {
    triples.push({ fr: h.name, en: h.nameEn, es: h.nameEs });
    triples.push({ fr: h.description, en: h.descriptionEn, es: h.descriptionEs });
  }
  for (const c of values.chapters) {
    triples.push({ fr: c.title, en: c.titleEn, es: c.titleEs });
    triples.push({ fr: c.intro, en: c.introEn, es: c.introEs });
    for (const d of c.days) {
      triples.push({ fr: d.location, en: d.locationEn, es: d.locationEs });
      triples.push({ fr: d.title, en: d.titleEn, es: d.titleEs });
      triples.push({ fr: d.description, en: d.descriptionEn, es: d.descriptionEs });
    }
  }
  return {
    en: triples.some((t) => t.fr.trim() && !t.en.trim()),
    es: triples.some((t) => t.fr.trim() && !t.es.trim()),
  };
}

// A lighter-weight collapsible than <CollapsibleSection> — that one wraps its own <Card>,
// which looks wrong nested a second time inside a chapter/day that's already boxed by
// <RepeatableList>'s own numbered card. This is just a trigger row + a border, closed by
// default so a multi-chapter, multi-day journey trip doesn't render as one giant wall of
// always-open forms (the original complaint this whole file was built to fix).
function SubCollapsible({
  title,
  defaultOpen = false,
  children,
}: {
  title: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="rounded-lg border border-border">
      <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between gap-3 px-3 py-2.5 text-left transition-colors hover:bg-muted/40">
        <span className="truncate text-sm font-medium text-foreground">{title}</span>
        <ChevronDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t border-border p-3">{children}</CollapsibleContent>
    </Collapsible>
  );
}

// Just the chapter's own fields (title/intro/gallery/map) — shown inside the "Modifier"
// dialog from <ChaptersManager>, never inline in the chapter list.
function ChapterInfoFields({
  control,
  baseName,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  baseName: string;
}) {
  return (
    <div className="space-y-4">
      <TrilingualField control={control} baseName={`${baseName}.title`} label="Titre du chapitre" />
      <TrilingualField control={control} baseName={`${baseName}.intro`} label="Introduction" multiline />
      <MediaUploadListField
        control={control}
        name={`${baseName}.galleryImages`}
        label="Images de la galerie"
        folder="tours"
      />
      <p className="text-xs text-muted-foreground">
        La position de ce chapitre sur la carte se règle depuis l&apos;onglet « Voyage par
        étapes » — sélectionnez-le dans la liste puis cliquez sur la carte.
      </p>
    </div>
  );
}

// The days list for one chapter — shown inside the "Jours" dialog from <ChaptersManager>.
// Each day is still its own <SubCollapsible> (a chapter can hold several days), but since
// this list is now the *only* thing in its dialog — no chapter-info fields competing for
// space above it — there's no more "wall of forms" problem even with several days open.
function ChapterDaysFields({
  control,
  baseName,
  dayNumberOffset,
  days,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  baseName: string;
  dayNumberOffset: number;
  days: TourFormValues["chapters"][number]["days"];
}) {
  return (
    <RepeatableList
      control={control}
      name={`${baseName}.days`}
      addLabel="Ajouter un jour"
      newItem={newDay}
      renderItem={(dayIndex) => {
        const day = days[dayIndex];
        const dayNumber = dayNumberOffset + dayIndex + 1;
        const dayTitle = day?.title?.trim() || day?.location?.trim() || "Sans titre";
        return (
          <SubCollapsible title={`Jour ${dayNumber} — ${dayTitle}`}>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                Numéro de jour calculé automatiquement à partir de la position du jour dans le
                voyage (réordonnez les chapitres ou les jours pour le changer).
              </p>
              <TrilingualField control={control} baseName={`${baseName}.days.${dayIndex}.location`} label="Lieu" />
              <FormField
                control={control}
                name={`${baseName}.days.${dayIndex}.hotel`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hôtel</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <TrilingualField control={control} baseName={`${baseName}.days.${dayIndex}.title`} label="Titre" />
              <TrilingualField
                control={control}
                baseName={`${baseName}.days.${dayIndex}.description`}
                label="Description"
                multiline
              />
              <MediaUploadField
                control={control}
                name={`${baseName}.days.${dayIndex}.image`}
                label="Média principal"
                folder="tours"
                allowVideo
              />
              <MediaUploadListField
                control={control}
                name={`${baseName}.days.${dayIndex}.images`}
                label="Carrousel du jour"
                folder="tours"
              />
            </div>
          </SubCollapsible>
        );
      }}
    />
  );
}

// Chapters as a plain list — each row just shows a title/day-count summary and two buttons
// that open a dialog, rather than rendering every chapter's (and every day's) full form
// inline. Both dialogs edit the *same* `chapters.N...` fields as before, through the same
// `control` — they're a different way of showing the form, not a separate save step, so
// there's no submit button inside either dialog; "Enregistrer" at the top of the page still
// saves everything, chapters/days included.
function ChaptersManager({
  control,
  activeIndex,
  onSelectActive,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  activeIndex: number;
  onSelectActive: (index: number) => void;
}) {
  const chapters = useWatch({ control, name: "chapters" }) as TourFormValues["chapters"];
  const [editingInfoIndex, setEditingInfoIndex] = useState<number | null>(null);
  const [editingDaysIndex, setEditingDaysIndex] = useState<number | null>(null);

  const dayNumberOffsetFor = (chapterIndex: number) =>
    chapters.slice(0, chapterIndex).reduce((sum, c) => sum + c.days.length, 0);

  return (
    <>
      <RepeatableList
        control={control}
        name="chapters"
        addLabel="Ajouter un chapitre"
        newItem={newChapter}
        renderItem={(index) => {
          const chapter = chapters[index];
          const title = chapter?.title?.trim() || `Chapitre ${index + 1}`;
          const dayCount = chapter?.days.length ?? 0;
          const placed = !(chapter?.mapMarkerX === 50 && chapter?.mapMarkerY === 50);
          const active = index === activeIndex;
          return (
            <div
              role="button"
              tabIndex={0}
              onClick={() => onSelectActive(index)}
              onKeyDown={(e) => e.key === "Enter" && onSelectActive(index)}
              className={cn(
                "-m-4 flex cursor-pointer flex-wrap items-center justify-between gap-3 rounded-lg p-4 transition-colors",
                active && "bg-brand-accent/10"
              )}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{title}</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  {dayCount} jour{dayCount > 1 ? "s" : ""}
                  <span className="text-muted-foreground/40">·</span>
                  {placed ? <span className="text-emerald-600">position définie</span> : <span>non placée</span>}
                </p>
              </div>
              <div className="flex shrink-0 gap-2" onClick={(e) => e.stopPropagation()}>
                <Button type="button" variant="outline" size="sm" onClick={() => setEditingInfoIndex(index)}>
                  Modifier
                </Button>
                <Button type="button" variant="outline" size="sm" onClick={() => setEditingDaysIndex(index)}>
                  Jours ({dayCount})
                </Button>
              </div>
            </div>
          );
        }}
      />

      <Dialog open={editingInfoIndex !== null} onOpenChange={(open) => !open && setEditingInfoIndex(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          {/* LangSwitcher lives here too, not just in the page header — that header sits behind
              the dialog's overlay, so without a switcher inside, changing language meant closing
              the dialog first. Same shared LangProvider context, so it stays in sync either way. */}
          <DialogHeader className="flex-row items-center justify-between gap-3 pr-8">
            <DialogTitle>
              {editingInfoIndex !== null
                ? chapters[editingInfoIndex]?.title?.trim() || `Chapitre ${editingInfoIndex + 1}`
                : ""}
            </DialogTitle>
            <LangSwitcher />
          </DialogHeader>
          {editingInfoIndex !== null && (
            <ChapterInfoFields control={control} baseName={`chapters.${editingInfoIndex}`} />
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={editingDaysIndex !== null} onOpenChange={(open) => !open && setEditingDaysIndex(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader className="flex-row items-center justify-between gap-3 pr-8">
            <DialogTitle>
              Jours —{" "}
              {editingDaysIndex !== null
                ? chapters[editingDaysIndex]?.title?.trim() || `Chapitre ${editingDaysIndex + 1}`
                : ""}
            </DialogTitle>
            <LangSwitcher />
          </DialogHeader>
          {editingDaysIndex !== null && (
            <ChapterDaysFields
              control={control}
              baseName={`chapters.${editingDaysIndex}`}
              dayNumberOffset={dayNumberOffsetFor(editingDaysIndex)}
              days={chapters[editingDaysIndex]?.days ?? []}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function TourForm({
  tourId,
  destination,
  defaultValues,
}: {
  tourId?: string;
  destination: Destination;
  defaultValues: TourFormValues;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const form = useForm<TourFormValues>({
    resolver: zodResolver(tourFormSchema),
    defaultValues,
  });
  // Shared between the chapters list and the map editor (siblings in the two-column "Voyage
  // par étapes" layout) — whichever chapter is selected here is the one a map click positions.
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  function onSubmit(rawValues: TourFormValues) {
    // Day numbers are read-only in the UI (see ChapterFields/SubCollapsible) — computed here,
    // once, from final chapter/day order, rather than kept in sync with an effect while the
    // admin is still reordering things mid-edit.
    const values: TourFormValues = {
      ...rawValues,
      chapters: (() => {
        let n = 0;
        return rawValues.chapters.map((c) => ({
          ...c,
          days: c.days.map((d) => ({ ...d, dayNumber: ++n })),
        }));
      })(),
    };
    startTransition(async () => {
      try {
        if (tourId) {
          await updateTour(tourId, values);
          toast.success("Modifications enregistrées");
        } else {
          await createTour(destination.id, values);
        }
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Une erreur est survenue lors de l'enregistrement");
      }
    });
  }

  function onDelete() {
    if (!tourId) return;
    startTransition(async () => {
      try {
        await deleteTour(tourId);
        toast.success("Voyage supprimé");
        router.push(`/admin/destinations/${destination.id}`);
      } catch {
        toast.error("Impossible de supprimer le voyage");
      }
    });
  }

  const values = form.watch();
  const incomplete = computeIncomplete(values);

  return (
    <Form {...form}>
      <LangProvider>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="sticky top-0 z-10 -mx-8 space-y-3 bg-background/95 px-8 pt-1 pb-3 backdrop-blur">
            <AdminBreadcrumb
              items={[
                { label: "Tableau de bord", href: "/admin" },
                { label: "Destinations", href: "/admin/destinations" },
                { label: destination.name, href: `/admin/destinations/${destination.id}` },
                { label: tourId ? values.name || "Modifier" : "Nouveau voyage" },
              ]}
            />

            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                {tourId ? values.name || "Modifier le voyage" : "Nouveau voyage"}
              </h1>
              <div className="flex items-center gap-3">
                <LangSwitcher incomplete={incomplete} />
                {tourId && (
                  <AlertDialog>
                    <AlertDialogTrigger render={<Button type="button" variant="destructive" size="sm" />}>
                      <Trash2 className="size-3.5" />
                      Supprimer
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Supprimer définitivement ce voyage ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Le voyage et tout son contenu associé (sections, hôtels, chapitres,
                          jours d&apos;itinéraire) seront supprimés. Cette action est irréversible.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete}>Supprimer définitivement</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
                <Button type="submit" disabled={pending}>
                  {pending ? "Enregistrement..." : "Enregistrer"}
                </Button>
              </div>
            </div>
            <div className="border-b border-border" />
          </div>

          <Tabs defaultValue="basic">
            <TabsList variant="line" className="border-b border-border">
              <TabsTrigger value="basic">Informations</TabsTrigger>
              <TabsTrigger value="standard">Circuit standard</TabsTrigger>
              <TabsTrigger value="journey">Voyage par étapes</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-5 pt-5">
              <CollapsibleSection title="Identité" defaultOpen>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Lien (slug) <span className="text-brand-accent">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input {...field} dir="ltr" placeholder="marrakech-city-tour" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="format"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Format</FormLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="standard">Circuit standard</SelectItem>
                              <SelectItem value="journey">Voyage par étapes</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                  <TrilingualField control={form.control} baseName="name" label="Nom" required />
                  <TrilingualField control={form.control} baseName="tagline" label="Accroche" />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Catégorie</FormLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choisir..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {CATEGORIES.map((c) => (
                                <SelectItem key={c.value} value={c.value}>
                                  {c.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="theme"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Thème</FormLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choisir..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {THEMES.map((t) => (
                                <SelectItem key={t.value} value={t.value}>
                                  {t.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="feeling"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ressenti (Trip Finder)</FormLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choisir..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {FEELINGS.map((f) => (
                                <SelectItem key={f.value} value={f.value}>
                                  {f.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Tarif et logistique">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prix</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="originalPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prix barré (optionnel)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Devise</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={(v) => field.onChange(v ?? "EUR")}
                          items={Object.fromEntries(CURRENCIES.map((c) => [c.value, c.label]))}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {CURRENCIES.map((c) => (
                              <SelectItem key={c.value} value={c.value}>
                                {c.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="durationValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Durée</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            {...field}
                            onChange={(e) => field.onChange(Math.max(1, e.target.valueAsNumber || 1))}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="durationUnit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unité</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={(v) => field.onChange(v ?? "days")}
                          items={Object.fromEntries(DURATION_UNITS.map((u) => [u.value, u.label]))}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {DURATION_UNITS.map((u) => (
                              <SelectItem key={u.value} value={u.value}>
                                {u.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="maxGuests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de participants max.</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                            className="w-24"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="departureFrom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Départ depuis</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="travelerTypes"
                  render={({ field }) => {
                    const selected = field.value ? field.value.split(",").map((s) => s.trim()).filter(Boolean) : [];
                    return (
                      <FormItem className="mt-4">
                        <FormLabel>Types de voyageurs</FormLabel>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                          {TRAVELER_TYPES.map((tt) => (
                            <label key={tt.value} className="flex items-center gap-2 text-sm font-normal">
                              <Checkbox
                                checked={selected.includes(tt.value)}
                                onCheckedChange={(checked) => {
                                  const next = checked
                                    ? [...selected, tt.value]
                                    : selected.filter((v) => v !== tt.value);
                                  field.onChange(next.join(","));
                                }}
                              />
                              {tt.label}
                            </label>
                          ))}
                        </div>
                      </FormItem>
                    );
                  }}
                />
              </CollapsibleSection>

              <CollapsibleSection title="Meilleure période (Trip Finder)">
                <p className="mb-3 text-xs text-muted-foreground">
                  Mois pour lesquels ce voyage apparaît quand un visiteur filtre par mois sur
                  le Trip Finder. Laissez tout décoché pour que ce voyage apparaisse quel que
                  soit le mois choisi.
                </p>
                <FormField
                  control={form.control}
                  name="bestMonths"
                  render={({ field }) => {
                    const selected = field.value ? field.value.split(",").map((s: string) => s.trim()).filter(Boolean) : [];
                    return (
                      <FormItem>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
                          {MONTHS.map((m) => (
                            <label key={m.value} className="flex items-center gap-2 text-sm font-normal">
                              <Checkbox
                                checked={selected.includes(m.value)}
                                onCheckedChange={(checked) => {
                                  const next = checked
                                    ? [...selected, m.value]
                                    : selected.filter((v: string) => v !== m.value);
                                  field.onChange(next.join(","));
                                }}
                              />
                              {m.label}
                            </label>
                          ))}
                        </div>
                      </FormItem>
                    );
                  }}
                />
              </CollapsibleSection>

              <CollapsibleSection title="Description">
                <div className="space-y-4">
                  <TrilingualField control={form.control} baseName="description" label="Description courte" multiline />
                  <TrilingualField
                    control={form.control}
                    baseName="longDescription"
                    label="Description détaillée"
                    multiline
                  />
                  <TrilingualChipListField control={form.control} baseName="includes" label="Inclus" />
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Image principale">
                <MediaUploadField control={form.control} name="image" label="Image de couverture" folder="tours" />
              </CollapsibleSection>

              <CollapsibleSection title="Galerie">
                <MediaUploadListField control={form.control} name="images" label="Images de la galerie" folder="tours" />
              </CollapsibleSection>

              <CollapsibleSection title="Paramètres">
                <div className="flex items-center gap-8">
                  <FormField
                    control={form.control}
                    name="order"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ordre d&apos;affichage</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                            className="w-24"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="featured"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-2 space-y-0 pt-6">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel className="font-normal">Mise en avant</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </CollapsibleSection>
            </TabsContent>

            <TabsContent value="standard" className="space-y-5 pt-5">
              <CollapsibleSection title="Sections" badge={<Badge variant="outline">{values.sections.length}</Badge>}>
                <RepeatableList
                  control={form.control}
                  name="sections"
                  addLabel="Ajouter une section"
                  newItem={newSection}
                  renderItem={(index) => (
                    <div className="space-y-3">
                      <TrilingualField control={form.control} baseName={`sections.${index}.heading`} label="Titre" />
                      <TrilingualField
                        control={form.control}
                        baseName={`sections.${index}.body`}
                        label="Texte"
                        multiline
                      />
                    </div>
                  )}
                />
              </CollapsibleSection>

              <CollapsibleSection title="Hôtels" badge={<Badge variant="outline">{values.hotels.length}</Badge>}>
                <RepeatableList
                  control={form.control}
                  name="hotels"
                  addLabel="Ajouter un hôtel"
                  newItem={newHotel}
                  renderItem={(index) => (
                    <div className="space-y-3">
                      <TrilingualField control={form.control} baseName={`hotels.${index}.name`} label="Nom" />
                      <TrilingualField
                        control={form.control}
                        baseName={`hotels.${index}.description`}
                        label="Description"
                        multiline
                      />
                      <MediaUploadField
                        control={form.control}
                        name={`hotels.${index}.image`}
                        label="Image"
                        folder="tours"
                      />
                    </div>
                  )}
                />
              </CollapsibleSection>
            </TabsContent>

            <TabsContent value="journey" className="grid grid-cols-1 gap-5 pt-5 lg:grid-cols-2 lg:items-start">
              <CollapsibleSection
                title="Chapitres"
                badge={<Badge variant="outline">{values.chapters.length}</Badge>}
                defaultOpen
              >
                <ChaptersManager
                  control={form.control}
                  activeIndex={activeChapterIndex}
                  onSelectActive={setActiveChapterIndex}
                />
              </CollapsibleSection>

              <div className="space-y-5">
                <CollapsibleSection title="Image de carte" defaultOpen>
                  <MediaUploadField
                    control={form.control}
                    name="mapImage"
                    label="Fond de carte illustré"
                    folder="tours"
                    size="lg"
                  />
                  <div className="mt-3 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
                    <p className="mb-1.5 font-medium text-foreground">Règles pour l&apos;image de carte</p>
                    <ul className="list-disc space-y-1 pl-4">
                      <li>
                        <span className="font-medium">Format paysage</span> obligatoire (1920×1080 minimum) — l&apos;image
                        sert de fond à toute la section, sur toute la largeur de l&apos;écran.
                      </li>
                      <li>
                        Placer la forme du pays et les noms de lieux dans la <span className="font-medium">moitié droite</span>{" "}
                        de l&apos;image — les cartes des jours recouvrent la partie gauche sur le site.
                      </li>
                      <li>
                        Les noms des étapes doivent être <span className="font-medium">imprimés dans l&apos;illustration</span>{" "}
                        (typographie majuscules espacées), avec un espace vide à côté de chaque nom pour le point.
                      </li>
                      <li>
                        <span className="font-medium">Ne pas dessiner</span> de points, épingles ou lignes d&apos;itinéraire
                        dans l&apos;image — ils sont ajoutés automatiquement d&apos;après le tracé ci-dessous.
                      </li>
                      <li>Fond uni clair (crème/sable), sans cadre, sans boussole, sans légende.</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Tracé de l'itinéraire" defaultOpen>
                  <p className="mb-3 text-xs text-muted-foreground">
                    Cliquez sur la carte pour placer le chapitre sélectionné, ou faites glisser
                    un point existant pour l&apos;ajuster.
                  </p>
                  <RouteMapEditor
                    mapImage={values.mapImage}
                    chapters={values.chapters}
                    activeIndex={Math.min(activeChapterIndex, Math.max(0, values.chapters.length - 1))}
                    onPositionChange={(index, x, y) => {
                      form.setValue(`chapters.${index}.mapMarkerX`, Math.round(x));
                      form.setValue(`chapters.${index}.mapMarkerY`, Math.round(y));
                    }}
                  />
                </CollapsibleSection>
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </LangProvider>
    </Form>
  );
}
