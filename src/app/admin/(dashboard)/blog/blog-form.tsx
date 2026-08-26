"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
import { CollapsibleSection } from "@/components/admin/collapsible-section";
import { LangProvider, LangSwitcher } from "@/components/admin/lang-context";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";

import { blogPostFormSchema, type BlogPostFormValues } from "./schema";
import { createBlogPost, updateBlogPost, deleteBlogPost } from "./actions";

function computeIncomplete(values: BlogPostFormValues) {
  const triples: { fr: string; en: string; es: string }[] = [
    { fr: values.title, en: values.titleEn, es: values.titleEs },
    { fr: values.excerpt, en: values.excerptEn, es: values.excerptEs },
    { fr: values.content, en: values.contentEn, es: values.contentEs },
  ];
  return {
    en: triples.some((t) => t.fr.trim() && !t.en.trim()),
    es: triples.some((t) => t.fr.trim() && !t.es.trim()),
  };
}

export function BlogForm({
  postId,
  defaultValues,
  categories = [],
}: {
  postId?: string;
  defaultValues: BlogPostFormValues;
  categories?: string[];
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostFormSchema),
    defaultValues,
  });

  function onSubmit(values: BlogPostFormValues) {
    startTransition(async () => {
      try {
        if (postId) {
          await updateBlogPost(postId, values);
          toast.success("Modifications enregistrées");
        } else {
          await createBlogPost(values);
        }
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Une erreur est survenue lors de l'enregistrement");
      }
    });
  }

  function onDelete() {
    if (!postId) return;
    startTransition(async () => {
      try {
        await deleteBlogPost(postId);
        toast.success("Article supprimé");
        router.push("/admin/blog");
      } catch {
        toast.error("Impossible de supprimer l'article");
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
                { label: "Blog", href: "/admin/blog" },
                { label: postId ? values.title || "Modifier" : "Nouvel article" },
              ]}
            />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                {postId ? values.title || "Modifier l'article" : "Nouvel article"}
              </h1>
              <div className="flex items-center gap-3">
                <LangSwitcher incomplete={incomplete} />
                {postId && (
                  <AlertDialog>
                    <AlertDialogTrigger render={<Button type="button" variant="destructive" size="sm" />}>
                      <Trash2 className="size-3.5" />
                      Supprimer
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Supprimer définitivement cet article ?</AlertDialogTitle>
                        <AlertDialogDescription>Cette action est irréversible.</AlertDialogDescription>
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

          <div className="space-y-5">
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
                          <Input {...field} dir="ltr" placeholder="conseils-voyage-maroc" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Catégorie</FormLabel>
                        <FormControl>
                          <Input {...field} list="blog-category-options" />
                        </FormControl>
                        <datalist id="blog-category-options">
                          {categories.map((c) => (
                            <option key={c} value={c} />
                          ))}
                        </datalist>
                      </FormItem>
                    )}
                  />
                </div>
                <TrilingualField control={form.control} baseName="title" label="Titre" required />
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Auteur</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Contenu">
              <div className="space-y-4">
                <TrilingualField control={form.control} baseName="excerpt" label="Résumé" multiline />
                <div className="space-y-1.5">
                  <span className="text-sm leading-none font-medium">Contenu</span>
                  <p className="text-xs text-muted-foreground">
                    Le contenu est du HTML brut (balises &lt;p&gt;, &lt;h2&gt;, &lt;img&gt;...).
                  </p>
                  <TrilingualField control={form.control} baseName="content" label="" multiline />
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Image principale">
              <MediaUploadField control={form.control} name="image" label="Image de couverture" folder="blog" />
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
          </div>
        </form>
      </LangProvider>
    </Form>
  );
}
