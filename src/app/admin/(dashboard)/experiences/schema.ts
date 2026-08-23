import { z } from "zod";

// See the matching comment in destinations/schema.ts: no `.default()` anywhere here, every
// call site always supplies complete `defaultValues` to `useForm`.
function trilingual<K extends string>(key: K) {
  return {
    [key]: z.string(),
    [`${key}En`]: z.string(),
    [`${key}Es`]: z.string(),
  } as Record<K, z.ZodString> & Record<`${K}En` | `${K}Es`, z.ZodString>;
}

export const destinationCardSchema = z.object({
  ...trilingual("title"),
  ...trilingual("description"),
  image: z.string(),
  ctaHref: z.string(),
});

export const reassuranceCardSchema = z.object({
  ...trilingual("title"),
  ...trilingual("description"),
});

export const experienceFaqSchema = z.object({
  ...trilingual("question"),
  ...trilingual("answer"),
});

// Known presets offered as quick-picks in the admin form — not an exhaustive enum. A new
// experience page can use any custom key here (see the "Voyages" tab, which tags Tour rows
// with whatever key is typed), so this stays a free-text field rather than a closed enum.
export const TRAVELER_TYPE_KEYS = ["family", "couples", "groups", "honeymoon", "solo"] as const;

export const experienceTypeFormSchema = z.object({
  slug: z
    .string()
    .min(1, "Le lien (slug) est requis")
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Lettres minuscules, chiffres et tirets uniquement"),
  travelerTypeKey: z
    .string()
    .min(1, "Le type de voyageur est requis")
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Lettres minuscules, chiffres et tirets uniquement"),
  cardImage: z.string(),
  ...trilingual("cardTitle"),
  ...trilingual("cardDescription"),
  heroImage: z.string(),
  ...trilingual("heroTitle"),
  ...trilingual("heroSubtitle"),
  ...trilingual("overviewTitle"),
  ...trilingual("overviewBody"),
  order: z.number().int(),
  bestDestinations: z.array(destinationCardSchema),
  reassurance: z.array(reassuranceCardSchema),
  faqs: z.array(experienceFaqSchema),
});

export type ExperienceTypeFormValues = z.infer<typeof experienceTypeFormSchema>;
export type DestinationCardValues = z.infer<typeof destinationCardSchema>;
export type ReassuranceCardValues = z.infer<typeof reassuranceCardSchema>;
export type ExperienceFaqValues = z.infer<typeof experienceFaqSchema>;
