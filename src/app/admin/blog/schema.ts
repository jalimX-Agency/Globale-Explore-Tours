import { z } from "zod";

// Same generic-literal-key trilingual() helper as destinations/tours schema.ts — see the
// comment there for why `key` must stay a literal type.
function trilingual<K extends string>(key: K) {
  return {
    [key]: z.string(),
    [`${key}En`]: z.string(),
    [`${key}Es`]: z.string(),
  } as Record<K, z.ZodString> & Record<`${K}En` | `${K}Es`, z.ZodString>;
}

export const blogPostFormSchema = z.object({
  ...trilingual("title"),
  title: z.string().min(1, "Le titre est requis (français)"),
  slug: z
    .string()
    .min(1, "Le lien (slug) est requis")
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Lettres minuscules, chiffres et tirets uniquement"),
  ...trilingual("excerpt"),
  ...trilingual("content"),
  image: z.string(),
  category: z.string(),
  author: z.string(),
  featured: z.boolean(),
  order: z.number().int(),
});

export type BlogPostFormValues = z.infer<typeof blogPostFormSchema>;
