"use client";

import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowUpRight, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
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
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";

import { destinationFormSchema, type DestinationFormValues } from "./schema";
import { createDestination, updateDestination, deleteDestination } from "./actions";

type RegionOption = { regionSlug: string; region: string; regionEn: string; regionEs: string };
type RelatedTour = { id: string; name: string; price: number; featured: boolean };

// Flags EN/ES as "incomplete" when some field that already has French content is still
// untouched in that language — a page-wide translation-audit signal for <LangSwitcher>,
// cheaper and less noisy than a per-field indicator.
function computeIncomplete(values: DestinationFormValues) {
  const triples: { fr: string; en: string; es: string }[] = [
    { fr: values.name, en: values.nameEn, es: values.nameEs },
    { fr: values.description, en: values.descriptionEn, es: values.descriptionEs },
    { fr: values.overviewHeading, en: values.overviewHeadingEn, es: values.overviewHeadingEs },
    { fr: values.descriptionMore, en: values.descriptionMoreEn, es: values.descriptionMoreEs },
  ];
  for (const b of [...values.seeAndDoBlocks, ...values.bestOfBlocks, ...values.clientLovedBlocks]) {
    triples.push({ fr: b.title, en: b.titleEn, es: b.titleEs });
    triples.push({ fr: b.description, en: b.descriptionEn, es: b.descriptionEs });
  }
  for (const m of values.teamMembers) {
    triples.push({ fr: m.role, en: m.roleEn, es: m.roleEs });
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

function newContentBlock(section: "seeAndDo" | "bestOf" | "clientLoved") {
  return {
    section,
    title: "",
    titleEn: "",
    titleEs: "",
    description: "",
    descriptionEn: "",
    descriptionEs: "",
    image: "",
    ctaLabel: "",
    ctaLabelEn: "",
    ctaLabelEs: "",
    ctaHref: "",
  };
}

// `section` is fixed by which of the three lists an item belongs to (no more per-item
// picker — see the "Contenu" tab below), so each item only needs its content fields.
function ContentBlockFields({
  control,
  baseName,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  baseName: string;
}) {
  return (
    <div className="space-y-3">
      <TrilingualField control={control} baseName={`${baseName}.title`} label="Titre" />
      <TrilingualField control={control} baseName={`${baseName}.description`} label="Description" multiline />
      <MediaUploadField control={control} name={`${baseName}.image`} label="Image" folder="content-blocks" />
    </div>
  );
}

export function DestinationForm({
  destinationId,
  defaultValues,
  regionOptions,
  relatedTours = [],
}: {
  destinationId?: string;
  defaultValues: DestinationFormValues;
  regionOptions: RegionOption[];
  relatedTours?: RelatedTour[];
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const form = useForm<DestinationFormValues>({
    resolver: zodResolver(destinationFormSchema),
    defaultValues,
  });

  function onSubmit(values: DestinationFormValues) {
    startTransition(async () => {
      try {
        if (destinationId) {
          await updateDestination(destinationId, values);
          toast.success("Modifications enregistrées");
        } else {
          await createDestination(values);
        }
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Une erreur est survenue lors de l'enregistrement");
      }
    });
  }

  function onDelete() {
    if (!destinationId) return;
    startTransition(async () => {
      try {
        await deleteDestination(destinationId);
        toast.success("Destination supprimée");
        router.push("/admin/destinations");
      } catch {
        toast.error("Impossible de supprimer la destination");
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
                { label: destinationId ? values.name || "Modifier" : "Nouvelle destination" },
              ]}
            />

            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                {destinationId ? values.name || "Modifier la destination" : "Nouvelle destination"}
              </h1>
              <div className="flex items-center gap-3">
                <LangSwitcher incomplete={incomplete} />
                {destinationId && (
                  <AlertDialog>
                    <AlertDialogTrigger render={<Button type="button" variant="destructive" size="sm" />}>
                      <Trash2 className="size-3.5" />
                      Supprimer
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Supprimer définitivement cette destination ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          La destination et tout son contenu associé (blocs de contenu, équipe,
                          questions fréquentes) seront supprimés. Cette action est irréversible.
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
              <TabsTrigger value="blocks">Contenu</TabsTrigger>
              <TabsTrigger value="team">Équipe</TabsTrigger>
              <TabsTrigger value="faqs">FAQ</TabsTrigger>
              {destinationId && <TabsTrigger value="tours">Voyages ({relatedTours.length})</TabsTrigger>}
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
                            <Input {...field} dir="ltr" placeholder="maroc" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="regionSlug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Région <span className="text-brand-accent">*</span>
                          </FormLabel>
                          <Select
                            value={field.value}
                            onValueChange={(value) => {
                              const opt = regionOptions.find((r) => r.regionSlug === value);
                              if (!opt) return;
                              form.setValue("regionSlug", opt.regionSlug, { shouldValidate: true });
                              form.setValue("region", opt.region);
                              form.setValue("regionEn", opt.regionEn);
                              form.setValue("regionEs", opt.regionEs);
                            }}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choisir une région">
                                  {regionOptions.find((r) => r.regionSlug === field.value)?.region}
                                </SelectValue>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {regionOptions.map((opt) => (
                                <SelectItem key={opt.regionSlug} value={opt.regionSlug}>
                                  {opt.region}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <TrilingualField control={form.control} baseName="name" label="Nom" required />
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Contenu">
                <div className="space-y-4">
                  <TrilingualField control={form.control} baseName="description" label="Description courte" multiline />
                  <TrilingualField control={form.control} baseName="overviewHeading" label="Titre de la présentation" />
                  <TrilingualField control={form.control} baseName="descriptionMore" label="Description détaillée" multiline />
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Image principale">
                <MediaUploadField
                  control={form.control}
                  name="heroImage"
                  label="Image ou vidéo affichée en haut de la page"
                  folder="destinations"
                  allowVideo
                  size="lg"
                />
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

            <TabsContent value="blocks" className="space-y-5 pt-5">
              {/* These three sections are stacked in the exact order they appear on the public
                  destination page (see CountryPageClient.tsx) — each is its own always-visible
                  block instead of one flat list with a section picker, so the admin layout reads
                  the same way a visitor reads the page. */}
              <CollapsibleSection
                title="À voir et à faire"
                badge={<Badge variant="outline">{values.seeAndDoBlocks.length}</Badge>}
              >
                <RepeatableList
                  control={form.control}
                  name="seeAndDoBlocks"
                  addLabel="Ajouter un élément"
                  newItem={() => newContentBlock("seeAndDo")}
                  renderItem={(index) => (
                    <ContentBlockFields control={form.control} baseName={`seeAndDoBlocks.${index}`} />
                  )}
                />
              </CollapsibleSection>

              <CollapsibleSection
                title={`Le meilleur de « ${values.name || "la destination"} »`}
                badge={<Badge variant="outline">{values.bestOfBlocks.length}</Badge>}
              >
                <RepeatableList
                  control={form.control}
                  name="bestOfBlocks"
                  addLabel="Ajouter un élément"
                  newItem={() => newContentBlock("bestOf")}
                  renderItem={(index) => (
                    <ContentBlockFields control={form.control} baseName={`bestOfBlocks.${index}`} />
                  )}
                />
              </CollapsibleSection>

              <CollapsibleSection
                title="Des expériences que nos voyageurs ont adorées"
                badge={<Badge variant="outline">{values.clientLovedBlocks.length}</Badge>}
              >
                <RepeatableList
                  control={form.control}
                  name="clientLovedBlocks"
                  addLabel="Ajouter un élément"
                  newItem={() => newContentBlock("clientLoved")}
                  renderItem={(index) => (
                    <ContentBlockFields control={form.control} baseName={`clientLovedBlocks.${index}`} />
                  )}
                />
              </CollapsibleSection>
            </TabsContent>

            <TabsContent value="team" className="pt-5">
              <RepeatableList
                control={form.control}
                name="teamMembers"
                addLabel="Ajouter un membre"
                newItem={() => ({ name: "", role: "", roleEn: "", roleEs: "", photo: "" })}
                renderItem={(index) => (
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name={`teamMembers.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <TrilingualField control={form.control} baseName={`teamMembers.${index}.role`} label="Poste" />
                    <MediaUploadField
                      control={form.control}
                      name={`teamMembers.${index}.photo`}
                      label="Photo"
                      folder="team"
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

            {destinationId && (
              <TabsContent value="tours" className="space-y-3 pt-5">
                <div className="flex justify-end">
                  <Button render={<Link href={`/admin/tours/new?destinationId=${destinationId}`} />} nativeButton={false} size="sm">
                    <Plus className="size-3.5" />
                    Nouveau voyage
                  </Button>
                </div>
                {relatedTours.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
                    Aucun voyage associé à cette destination pour l&apos;instant.
                  </p>
                ) : (
                  <Card className="gap-0 divide-y divide-border py-0">
                    {relatedTours.map((tour) => (
                      <Link
                        key={tour.id}
                        href={`/admin/tours/${tour.id}`}
                        className="group flex items-center justify-between px-4 py-3 transition-colors hover:bg-muted/50"
                      >
                        <span className="font-medium text-foreground">{tour.name}</span>
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          {tour.price} €
                          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </Link>
                    ))}
                  </Card>
                )}
              </TabsContent>
            )}
          </Tabs>
        </form>
      </LangProvider>
    </Form>
  );
}
