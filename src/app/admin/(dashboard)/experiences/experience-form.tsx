"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Trash2 } from "lucide-react";

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

import { TrilingualField } from "@/components/admin/trilingual-field";
import { MediaUploadField } from "@/components/admin/media-upload-field";
import { RepeatableList } from "@/components/admin/repeatable-list";
import { LangProvider, LangSwitcher } from "@/components/admin/lang-context";
import { CollapsibleSection } from "@/components/admin/collapsible-section";

import {
  experienceTypeFormSchema,
  TRAVELER_TYPE_KEYS,
  THEME_FILTER_KEYS,
  MONTH_FILTER_KEYS,
  type ExperienceTypeFormValues,
} from "./schema";
import { createExperienceType, updateExperienceType, deleteExperienceType, createStandardSubPages } from "./actions";
import { SUB_PAGE_TEMPLATE_KEYS, SUB_PAGE_TEMPLATE_LABELS } from "./subPageTemplates";
import { ExperienceTripsPanel, type TripOption } from "./experience-trips-panel";

const TRAVELER_TYPE_LABELS: Record<(typeof TRAVELER_TYPE_KEYS)[number], string> = {
  family: "Famille",
  couples: "Couples",
  groups: "Groupes",
  honeymoon: "Lune de miel",
  solo: "Solo",
};

const THEME_FILTER_LABELS: Record<(typeof THEME_FILTER_KEYS)[number], string> = {
  adventure: "Aventure",
  culture: "Culture",
  relax: "Détente",
  family: "Famille",
};

const MONTH_FILTER_LABELS: Record<(typeof MONTH_FILTER_KEYS)[number], string> = {
  january: "Janvier",
  february: "Février",
  march: "Mars",
  april: "Avril",
  may: "Mai",
  june: "Juin",
  july: "Juillet",
  august: "Août",
  september: "Septembre",
  october: "Octobre",
  november: "Novembre",
  december: "Décembre",
};

const KIND_LABELS = { who: "Qui voyage (Who)", what: "Que faire (What)", private: "Voyage privé (Private Travel)" };

type ParentOption = { id: string; slug: string; heroTitle: string; kind: string };
type ChildOption = { id: string; slug: string; heroTitle: string };

function computeIncomplete(values: ExperienceTypeFormValues) {
  const triples: { fr: string; en: string; es: string }[] = [
    { fr: values.cardTitle, en: values.cardTitleEn, es: values.cardTitleEs },
    { fr: values.cardDescription, en: values.cardDescriptionEn, es: values.cardDescriptionEs },
    { fr: values.heroTitle, en: values.heroTitleEn, es: values.heroTitleEs },
    { fr: values.heroSubtitle, en: values.heroSubtitleEn, es: values.heroSubtitleEs },
    { fr: values.overviewTitle, en: values.overviewTitleEn, es: values.overviewTitleEs },
    { fr: values.overviewBody, en: values.overviewBodyEn, es: values.overviewBodyEs },
  ];
  for (const d of values.bestDestinations) {
    triples.push({ fr: d.title, en: d.titleEn, es: d.titleEs });
    triples.push({ fr: d.description, en: d.descriptionEn, es: d.descriptionEs });
  }
  for (const r of values.reassurance) {
    triples.push({ fr: r.title, en: r.titleEn, es: r.titleEs });
    triples.push({ fr: r.description, en: r.descriptionEn, es: r.descriptionEs });
  }
  for (const f of values.faqs) {
    triples.push({ fr: f.question, en: f.questionEn, es: f.questionEs });
    triples.push({ fr: f.answer, en: f.answerEn, es: f.answerEs });
  }
  return {
    en: triples.some((t) => t.fr.trim() && !t.en.trim()),
    es: triples.some((t) => t.fr.trim() && !t.es.trim()),
  };
}

type DestinationOption = { id: string; slug: string; name: string; regionSlug: string };

export function ExperienceTypeForm({
  experienceTypeId,
  defaultValues,
  trips,
  destinations,
  parentOptions = [],
  childPages = [],
}: {
  experienceTypeId?: string;
  defaultValues: ExperienceTypeFormValues;
  trips?: TripOption[];
  destinations: DestinationOption[];
  parentOptions?: ParentOption[];
  childPages?: ChildOption[];
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [subPageTemplate, setSubPageTemplate] = useState(SUB_PAGE_TEMPLATE_KEYS[0] ?? "");

  const form = useForm<ExperienceTypeFormValues>({
    resolver: zodResolver(experienceTypeFormSchema),
    defaultValues,
  });
  type FilterMode = "none" | "theme" | "months" | "destination";
  const [filterMode, setFilterMode] = useState<FilterMode>(
    defaultValues.filterDestinationId ? "destination" : defaultValues.filterMonths ? "months" : defaultValues.filterTheme ? "theme" : "none"
  );

  const parentSlug = parentOptions.find((p) => p.id === defaultValues.parentId)?.slug ?? "";
  const [leafSlug, setLeafSlug] = useState(() =>
    parentSlug && defaultValues.slug.startsWith(`${parentSlug}/`) ? defaultValues.slug.slice(parentSlug.length + 1) : defaultValues.slug
  );

  function generateSubPages() {
    if (!experienceTypeId || !subPageTemplate) return;
    startTransition(async () => {
      try {
        const { created, skipped } = await createStandardSubPages(experienceTypeId, subPageTemplate);
        toast.success(
          skipped > 0 ? `${created} sous-page(s) créée(s), ${skipped} déjà existante(s)` : `${created} sous-page(s) créée(s)`
        );
        router.refresh();
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Une erreur est survenue");
      }
    });
  }

  function onSubmit(values: ExperienceTypeFormValues) {
    startTransition(async () => {
      try {
        if (experienceTypeId) {
          await updateExperienceType(experienceTypeId, values);
          toast.success("Modifications enregistrées");
        } else {
          await createExperienceType(values);
        }
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Une erreur est survenue lors de l'enregistrement");
      }
    });
  }

  function onDelete() {
    if (!experienceTypeId) return;
    startTransition(async () => {
      try {
        await deleteExperienceType(experienceTypeId);
        toast.success("Page supprimée");
        router.push("/admin/experiences");
      } catch {
        toast.error("Impossible de supprimer cette page");
      }
    });
  }

  const values = form.watch();
  const incomplete = computeIncomplete(values);

  const destinationHrefOptions = destinations.map((d) => ({
    value: `/destinations/${d.regionSlug}/${d.slug}`,
    label: d.name,
  }));

  return (
    <Form {...form}>
      <LangProvider>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="sticky top-0 z-10 -mx-8 space-y-3 bg-background/95 px-8 pt-1 pb-3 backdrop-blur">
            <Link
              href="/admin/experiences"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              Expériences
            </Link>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                {experienceTypeId ? values.heroTitle || "Modifier la page" : "Nouvelle page"}
              </h1>
              <div className="flex items-center gap-3">
                <LangSwitcher incomplete={incomplete} />
                {experienceTypeId && (
                  <AlertDialog>
                    <AlertDialogTrigger render={<Button type="button" variant="destructive" size="sm" />}>
                      <Trash2 className="size-3.5" />
                      Supprimer
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Supprimer définitivement cette page ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          La page et tout son contenu associé (destinations mises en avant,
                          réassurance, questions fréquentes) seront supprimés. La page publique
                          correspondante cessera de fonctionner.
                          {childPages.length > 0 && (
                            <>
                              {" "}
                              <strong className="text-destructive">
                                Ses {childPages.length} sous-page{childPages.length > 1 ? "s" : ""} seront
                                également supprimée{childPages.length > 1 ? "s" : ""}.
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
              <TabsTrigger value="destinations">
                Meilleures destinations ({values.bestDestinations.length})
              </TabsTrigger>
              <TabsTrigger value="reassurance">Réassurance ({values.reassurance.length})</TabsTrigger>
              <TabsTrigger value="faqs">FAQ ({values.faqs.length})</TabsTrigger>
              {trips && values.kind === "who" && <TabsTrigger value="trips">Voyages</TabsTrigger>}
              {experienceTypeId && <TabsTrigger value="subpages">Sous-pages ({childPages.length})</TabsTrigger>}
            </TabsList>

            <TabsContent value="basic" className="space-y-5 pt-5">
              <CollapsibleSection title="Identité" defaultOpen>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="parentId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Page parente</FormLabel>
                          <Select
                            value={field.value || "none"}
                            onValueChange={(v) => {
                              const nextParentId = v === "none" ? "" : (v ?? "");
                              field.onChange(nextParentId);
                              const nextParent = parentOptions.find((p) => p.id === nextParentId);
                              form.setValue("slug", nextParent ? `${nextParent.slug}/${leafSlug}` : leafSlug);
                              if (nextParent) form.setValue("kind", nextParent.kind === "what" || nextParent.kind === "private" ? nextParent.kind : "who");
                            }}
                            items={{
                              none: "Aucune (page principale)",
                              ...Object.fromEntries(parentOptions.map((p) => [p.id, p.heroTitle || p.slug])),
                            }}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="none">Aucune (page principale)</SelectItem>
                              {parentOptions.map((p) => (
                                <SelectItem key={p.id} value={p.id}>
                                  {p.heroTitle || p.slug}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="kind"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type de page</FormLabel>
                          <Select value={field.value} onValueChange={(v) => v && field.onChange(v)} items={KIND_LABELS}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="who">{KIND_LABELS.who}</SelectItem>
                              <SelectItem value="what">{KIND_LABELS.what}</SelectItem>
                              <SelectItem value="private">{KIND_LABELS.private}</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>

                  {values.parentId ? (
                    <FormItem>
                      <FormLabel>
                        Lien (dans /{parentOptions.find((p) => p.id === values.parentId)?.slug}/...)
                      </FormLabel>
                      <FormControl>
                        <Input
                          value={leafSlug}
                          dir="ltr"
                          placeholder="travel-pre-school-children"
                          onChange={(e) => {
                            setLeafSlug(e.target.value);
                            const parent = parentOptions.find((p) => p.id === values.parentId);
                            form.setValue("slug", parent ? `${parent.slug}/${e.target.value}` : e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormMessage>{form.formState.errors.slug?.message}</FormMessage>
                    </FormItem>
                  ) : (
                    <FormField
                      control={form.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Lien (slug) <span className="text-brand-accent">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              dir="ltr"
                              placeholder="family-holidays"
                              onChange={(e) => {
                                field.onChange(e);
                                setLeafSlug(e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {values.kind === "who" && (
                    <>
                      <FormField
                        control={form.control}
                        name="travelerTypeKey"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Type de voyageur (clé) {!values.parentId && <span className="text-brand-accent">*</span>}
                            </FormLabel>
                            <FormControl>
                              <Input {...field} dir="ltr" list="traveler-type-key-options" placeholder="family" />
                            </FormControl>
                            <datalist id="traveler-type-key-options">
                              {TRAVELER_TYPE_KEYS.map((key) => (
                                <option key={key} value={key}>
                                  {TRAVELER_TYPE_LABELS[key]}
                                </option>
                              ))}
                            </datalist>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <p className="text-xs text-muted-foreground">
                        Cette clé détermine quels voyages du catalogue s&apos;affichent sur cette page
                        (ceux dont le champ « Types de voyageurs » dans la fiche Voyage la contient) —
                        utilisez une des valeurs suggérées, ou tapez-en une nouvelle pour créer un type
                        entièrement inédit. Vous pourrez ensuite choisir précisément quels voyages y
                        correspondent depuis l&apos;onglet « Voyages ».
                        {values.parentId && " Laissez vide pour hériter des voyages de la page parente."}
                      </p>
                    </>
                  )}

                  {values.kind !== "private" && (
                    <div className="space-y-3 rounded-lg border border-border p-3">
                      <p className="text-xs text-muted-foreground">
                        {values.parentId
                          ? "Optionnel — affinez les voyages affichés sur cette sous-page par thème, période ou destination. Laissez sur « Aucun » pour hériter de la page parente."
                          : "Les voyages affichés sur cette page sont ceux qui correspondent à un thème, une période, ou une destination précise."}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(
                          [
                            ["none", "Aucun"],
                            ["theme", "Par thème"],
                            ["months", "Par période"],
                            ["destination", "Par destination"],
                          ] as const
                        ).map(([mode, label]) => (
                          <Button
                            key={mode}
                            type="button"
                            variant={filterMode === mode ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              setFilterMode(mode);
                              if (mode !== "theme") form.setValue("filterTheme", "");
                              if (mode !== "months") form.setValue("filterMonths", "");
                              if (mode !== "destination") form.setValue("filterDestinationId", "");
                            }}
                          >
                            {label}
                          </Button>
                        ))}
                      </div>

                      {filterMode === "theme" && (
                        <FormField
                          control={form.control}
                          name="filterTheme"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Thème</FormLabel>
                              <Select
                                value={field.value}
                                onValueChange={(v) => field.onChange(v ?? "")}
                                items={THEME_FILTER_LABELS}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choisir un thème..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {THEME_FILTER_KEYS.map((key) => (
                                    <SelectItem key={key} value={key}>
                                      {THEME_FILTER_LABELS[key]}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      {filterMode === "months" && (
                        <FormField
                          control={form.control}
                          name="filterMonths"
                          render={({ field }) => {
                            const selected = field.value ? field.value.split(",").map((s) => s.trim()).filter(Boolean) : [];
                            return (
                              <FormItem>
                                <FormLabel>Mois</FormLabel>
                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                  {MONTH_FILTER_KEYS.map((key) => (
                                    <label key={key} className="flex items-center gap-2 text-sm font-normal">
                                      <Checkbox
                                        checked={selected.includes(key)}
                                        onCheckedChange={(checked) => {
                                          const next = checked ? [...selected, key] : selected.filter((v) => v !== key);
                                          field.onChange(next.join(","));
                                        }}
                                      />
                                      {MONTH_FILTER_LABELS[key]}
                                    </label>
                                  ))}
                                </div>
                              </FormItem>
                            );
                          }}
                        />
                      )}

                      {filterMode === "destination" && (
                        <FormField
                          control={form.control}
                          name="filterDestinationId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Destination</FormLabel>
                              <Select
                                value={field.value}
                                onValueChange={(v) => field.onChange(v ?? "")}
                                items={Object.fromEntries(destinations.map((d) => [d.id, d.name]))}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choisir une destination..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {destinations.map((d) => (
                                    <SelectItem key={d.id} value={d.id}>
                                      {d.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                  )}
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Carte (menu, accueil, page Expériences)">
                <div className="space-y-4">
                  <p className="text-xs text-muted-foreground">
                    La petite carte affichée dans le menu « Expériences », sur la page d&apos;accueil,
                    et sur la page /experience-types — distincte de l&apos;image et du titre du hero
                    ci-dessous.
                  </p>
                  <TrilingualField control={form.control} baseName="cardTitle" label="Titre court" required />
                  <TrilingualField
                    control={form.control}
                    baseName="cardDescription"
                    label="Description courte"
                    multiline
                  />
                  <MediaUploadField
                    control={form.control}
                    name="cardImage"
                    label="Image de la carte"
                    folder="experience-types"
                  />
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Hero">
                <div className="space-y-4">
                  <TrilingualField control={form.control} baseName="heroTitle" label="Titre" required />
                  <TrilingualField control={form.control} baseName="heroSubtitle" label="Sous-titre" multiline />
                  <MediaUploadField
                    control={form.control}
                    name="heroImage"
                    label="Image affichée en haut de la page"
                    folder="experience-types"
                    size="lg"
                  />
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Présentation">
                <div className="space-y-4">
                  <TrilingualField control={form.control} baseName="overviewTitle" label="Titre de la présentation" />
                  <TrilingualField
                    control={form.control}
                    baseName="overviewBody"
                    label="Texte de présentation"
                    multiline
                  />
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Paramètres">
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
              </CollapsibleSection>
            </TabsContent>

            <TabsContent value="destinations" className="pt-5">
              <p className="mb-4 text-sm text-muted-foreground">
                Les destinations mises en avant dans la section « Meilleures destinations » de
                cette page.
              </p>
              <RepeatableList
                control={form.control}
                name="bestDestinations"
                addLabel="Ajouter une destination"
                newItem={() => ({
                  title: "",
                  titleEn: "",
                  titleEs: "",
                  description: "",
                  descriptionEn: "",
                  descriptionEs: "",
                  image: "",
                  ctaHref: "",
                })}
                renderItem={(index) => (
                  <div className="space-y-3">
                    <TrilingualField
                      control={form.control}
                      baseName={`bestDestinations.${index}.title`}
                      label="Nom de la destination"
                    />
                    <TrilingualField
                      control={form.control}
                      baseName={`bestDestinations.${index}.description`}
                      label="Description"
                      multiline
                    />
                    <MediaUploadField
                      control={form.control}
                      name={`bestDestinations.${index}.image`}
                      label="Image"
                      folder="experience-types"
                    />
                    <FormField
                      control={form.control}
                      name={`bestDestinations.${index}.ctaHref`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destination liée</FormLabel>
                          <Select
                            value={field.value}
                            onValueChange={(v) => field.onChange(v ?? "")}
                            items={Object.fromEntries(destinationHrefOptions.map((o) => [o.value, o.label]))}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choisir une destination..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {destinationHrefOptions.map((o) => (
                                <SelectItem key={o.value} value={o.value}>
                                  {o.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              />
            </TabsContent>

            <TabsContent value="reassurance" className="pt-5">
              <p className="mb-4 text-sm text-muted-foreground">
                Les blocs de réassurance affichés avant la section FAQ (ex. « Guides locaux »,
                « Sur mesure », etc.).
              </p>
              <RepeatableList
                control={form.control}
                name="reassurance"
                addLabel="Ajouter un bloc"
                newItem={() => ({
                  title: "",
                  titleEn: "",
                  titleEs: "",
                  description: "",
                  descriptionEn: "",
                  descriptionEs: "",
                })}
                renderItem={(index) => (
                  <div className="space-y-3">
                    <TrilingualField control={form.control} baseName={`reassurance.${index}.title`} label="Titre" />
                    <TrilingualField
                      control={form.control}
                      baseName={`reassurance.${index}.description`}
                      label="Texte"
                      multiline
                    />
                  </div>
                )}
              />
            </TabsContent>

            <TabsContent value="faqs" className="pt-5">
              <RepeatableList
                control={form.control}
                name="faqs"
                addLabel="Ajouter une question"
                newItem={() => ({
                  question: "",
                  questionEn: "",
                  questionEs: "",
                  answer: "",
                  answerEn: "",
                  answerEs: "",
                })}
                renderItem={(index) => (
                  <div className="space-y-3">
                    <TrilingualField control={form.control} baseName={`faqs.${index}.question`} label="Question" />
                    <TrilingualField
                      control={form.control}
                      baseName={`faqs.${index}.answer`}
                      label="Réponse"
                      multiline
                    />
                  </div>
                )}
              />
            </TabsContent>

            {trips && values.kind === "who" && (
              <TabsContent value="trips" className="pt-5">
                <ExperienceTripsPanel travelerTypeKey={values.travelerTypeKey} trips={trips} />
              </TabsContent>
            )}

            {experienceTypeId && (
              <TabsContent value="subpages" className="space-y-5 pt-5">
                {SUB_PAGE_TEMPLATE_KEYS.length > 0 && (
                  <div className="flex flex-wrap items-end gap-3 rounded-lg border border-border p-3">
                    <div className="space-y-1.5">
                      <span className="text-sm leading-none font-medium">Générer les sous-pages standard</span>
                      <Select value={subPageTemplate} onValueChange={(v) => v && setSubPageTemplate(v)} items={SUB_PAGE_TEMPLATE_LABELS}>
                        <SelectTrigger className="w-72">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {SUB_PAGE_TEMPLATE_KEYS.map((key) => (
                            <SelectItem key={key} value={key}>
                              {SUB_PAGE_TEMPLATE_LABELS[key]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="button" variant="outline" onClick={generateSubPages} disabled={pending}>
                      Générer
                    </Button>
                  </div>
                )}

                {childPages.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Aucune sous-page pour l&apos;instant.</p>
                ) : (
                  <div className="divide-y divide-border rounded-lg border border-border">
                    {childPages.map((child) => (
                      <Link
                        key={child.id}
                        href={`/admin/experiences/${child.id}`}
                        className="flex items-center justify-between gap-3 px-4 py-2.5 transition-colors hover:bg-muted/50"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">{child.heroTitle || "(sans titre)"}</p>
                          <p className="truncate text-xs text-muted-foreground">/{child.slug}</p>
                        </div>
                        <Badge variant="outline">Modifier</Badge>
                      </Link>
                    ))}
                  </div>
                )}

                <Button render={<Link href={`/admin/experiences/new?parent=${experienceTypeId}`} />} nativeButton={false} variant="outline">
                  + Ajouter une sous-page
                </Button>
              </TabsContent>
            )}
          </Tabs>
        </form>
      </LangProvider>
    </Form>
  );
}
