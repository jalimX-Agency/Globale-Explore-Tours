"use client";

import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowUpRight, Route } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";

import { TrilingualField } from "@/components/admin/trilingual-field";
import { MediaUploadField } from "@/components/admin/media-upload-field";
import { LangProvider, LangSwitcher } from "@/components/admin/lang-context";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";

import { regionFormSchema, type RegionFormValues } from "./schema";
import { updateRegion } from "./actions";

type RegionDestination = { id: string; name: string; order: number; _count: { tours: number } };

function computeIncomplete(values: RegionFormValues) {
  const triples = [
    { fr: values.heading, en: values.headingEn, es: values.headingEs },
    { fr: values.intro, en: values.introEn, es: values.introEs },
    { fr: values.introMore, en: values.introMoreEn, es: values.introMoreEs },
  ];
  return {
    en: triples.some((t) => t.fr.trim() && !t.en.trim()),
    es: triples.some((t) => t.fr.trim() && !t.es.trim()),
  };
}

export function RegionForm({
  regionId,
  displayName,
  defaultValues,
  destinations,
}: {
  regionId: string;
  displayName: string;
  defaultValues: RegionFormValues;
  destinations: RegionDestination[];
}) {
  const [pending, startTransition] = useTransition();

  const form = useForm<RegionFormValues>({
    resolver: zodResolver(regionFormSchema),
    defaultValues,
  });

  function onSubmit(values: RegionFormValues) {
    startTransition(async () => {
      try {
        await updateRegion(regionId, values);
        toast.success("Modifications enregistrées");
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Une erreur est survenue lors de l'enregistrement");
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
                { label: "Régions", href: "/admin/regions" },
                { label: displayName },
              ]}
            />
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">{displayName}</h1>
              <div className="flex items-center gap-3">
                <LangSwitcher incomplete={incomplete} />
                <Button type="submit" disabled={pending}>
                  {pending ? "Enregistrement..." : "Enregistrer"}
                </Button>
              </div>
            </div>
            <div className="border-b border-border" />
          </div>

          <Tabs defaultValue="info">
          <TabsList variant="line" className="border-b border-border">
            <TabsTrigger value="info">Informations</TabsTrigger>
            <TabsTrigger value="countries">Pays ({destinations.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="pt-5">
            <Card className="space-y-5 p-6">
              <TrilingualField control={form.control} baseName="heading" label="Titre de la page" required />
              <TrilingualField control={form.control} baseName="intro" label="Introduction" multiline />
              <TrilingualField control={form.control} baseName="introMore" label="Introduction détaillée" multiline />

              <MediaUploadField
                control={form.control}
                name="heroImage"
                label="Image principale"
                folder="regions"
                allowVideo
              />

              <FormField
                control={form.control}
                name="order"
                render={({ field }) => (
                  <FormItem className="border-t border-border pt-5">
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
            </Card>
          </TabsContent>

          <TabsContent value="countries" className="pt-5">
            {destinations.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
                Aucun pays dans cette région pour l&apos;instant.
              </p>
            ) : (
              <Card className="gap-0 divide-y divide-border py-0">
                {destinations.map((d) => (
                  <Link
                    key={d.id}
                    href={`/admin/destinations/${d.id}`}
                    className="group flex items-center justify-between px-4 py-3 transition-colors hover:bg-muted/50"
                  >
                    <span className="font-medium text-foreground">{d.name}</span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Route className="size-3.5" />
                      {d._count.tours} voyage{d._count.tours > 1 ? "s" : ""}
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                ))}
              </Card>
            )}
          </TabsContent>
        </Tabs>
        </form>
      </LangProvider>
    </Form>
  );
}
