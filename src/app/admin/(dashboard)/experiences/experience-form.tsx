"use client";

import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

import { experienceTypeFormSchema, TRAVELER_TYPE_KEYS, type ExperienceTypeFormValues } from "./schema";
import { createExperienceType, updateExperienceType, deleteExperienceType } from "./actions";

const TRAVELER_TYPE_LABELS: Record<(typeof TRAVELER_TYPE_KEYS)[number], string> = {
  family: "Famille",
  couples: "Couples",
  groups: "Groupes",
  honeymoon: "Lune de miel",
  solo: "Solo",
};

function computeIncomplete(values: ExperienceTypeFormValues) {
  const triples: { fr: string; en: string; es: string }[] = [
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

export function ExperienceTypeForm({
  experienceTypeId,
  defaultValues,
}: {
  experienceTypeId?: string;
  defaultValues: ExperienceTypeFormValues;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const form = useForm<ExperienceTypeFormValues>({
    resolver: zodResolver(experienceTypeFormSchema),
    defaultValues,
  });

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
                          correspondante cessera de fonctionner. Cette action est irréversible.
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
                            <Input {...field} dir="ltr" placeholder="family-holidays" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="travelerTypeKey"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Type de voyageur <span className="text-brand-accent">*</span>
                          </FormLabel>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choisir un type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {TRAVELER_TYPE_KEYS.map((key) => (
                                <SelectItem key={key} value={key}>
                                  {TRAVELER_TYPE_LABELS[key]}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Le type de voyageur détermine quels voyages du catalogue s&apos;affichent sur
                    cette page (ceux dont le champ « Types de voyageurs » dans la fiche Voyage
                    contient ce type).
                  </p>
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
                          <FormLabel>Lien (ex. /destinations/afrique/maroc)</FormLabel>
                          <FormControl>
                            <Input {...field} dir="ltr" placeholder="/destinations/afrique/maroc" />
                          </FormControl>
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
          </Tabs>
        </form>
      </LangProvider>
    </Form>
  );
}
