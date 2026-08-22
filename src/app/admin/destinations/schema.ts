import { z } from "zod";

// `key` must be inferred as a string *literal* (not widened to `string`), otherwise the
// computed property names below produce an object type with no named properties at all —
// zod (and everything downstream: Prisma's generated input types) needs literal keys.
//
// No `.default()` anywhere in this file: every call site always supplies complete
// `defaultValues` to `useForm`, so a schema-level default is never load-bearing — and
// `.default()` makes zod's inferred Input type diverge from its Output type (fields become
// optional on Input), which breaks TypeScript's Resolver variance the moment that type
// flows through a second generic layer (a shared field component, `useForm`'s own
// generics). Plain non-optional `z.string()` keeps Input === Output and avoids the whole
// problem.
function trilingual<K extends string>(key: K) {
  return {
    [key]: z.string(),
    [`${key}En`]: z.string(),
    [`${key}Es`]: z.string(),
  } as Record<K, z.ZodString> & Record<`${K}En` | `${K}Es`, z.ZodString>;
}

export const contentBlockSchema = z.object({
  section: z.enum(["seeAndDo", "bestOf", "clientLoved"]),
  ...trilingual("title"),
  ...trilingual("description"),
  image: z.string(),
  ctaLabel: z.string(),
  ctaLabelEn: z.string(),
  ctaLabelEs: z.string(),
  ctaHref: z.string(),
});

export const teamMemberSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  ...trilingual("role"),
  photo: z.string(),
});

export const faqSchema = z.object({
  ...trilingual("question"),
  ...trilingual("answer"),
});

export const destinationFormSchema = z.object({
  name: z.string().min(1, "Le nom est requis (français)"),
  nameEn: z.string(),
  nameEs: z.string(),
  slug: z
    .string()
    .min(1, "Le lien (slug) est requis")
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Lettres minuscules, chiffres et tirets uniquement"),
  region: z.string().min(1, "La région est requise"),
  regionEn: z.string(),
  regionEs: z.string(),
  regionSlug: z.string().min(1, "La région est requise"),
  description: z.string(),
  descriptionEn: z.string(),
  descriptionEs: z.string(),
  overviewHeading: z.string(),
  overviewHeadingEn: z.string(),
  overviewHeadingEs: z.string(),
  descriptionMore: z.string(),
  descriptionMoreEn: z.string(),
  descriptionMoreEs: z.string(),
  heroImage: z.string(),
  order: z.number().int(),
  featured: z.boolean(),
  // Split by section (rather than one flat array with a per-item section picker) so the
  // "Contenu" tab can render each section as its own always-visible block, in the same
  // fixed order as the public destination page — see destination-form.tsx.
  seeAndDoBlocks: z.array(contentBlockSchema),
  bestOfBlocks: z.array(contentBlockSchema),
  clientLovedBlocks: z.array(contentBlockSchema),
  teamMembers: z.array(teamMemberSchema),
  faqs: z.array(faqSchema),
});

export type DestinationFormValues = z.infer<typeof destinationFormSchema>;
export type ContentBlockValues = z.infer<typeof contentBlockSchema>;
export type TeamMemberValues = z.infer<typeof teamMemberSchema>;
export type FaqValues = z.infer<typeof faqSchema>;
