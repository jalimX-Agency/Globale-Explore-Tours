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

// "who" pages match tours by travelerTypeKey (a Tour.travelerTypes tag); "what" pages match
// by either a theme or a specific destination — never both, enforced below.
export const EXPERIENCE_KINDS = ["who", "what"] as const;
export const THEME_FILTER_KEYS = ["adventure", "culture", "relax", "family"] as const;

export const experienceTypeFormSchema = z
  .object({
    slug: z
      .string()
      .min(1, "Le lien (slug) est requis")
      .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Lettres minuscules, chiffres et tirets uniquement"),
    kind: z.enum(EXPERIENCE_KINDS),
    travelerTypeKey: z
      .string()
      .regex(/^[a-z0-9]*(-[a-z0-9]+)*$/, "Lettres minuscules, chiffres et tirets uniquement"),
    filterTheme: z.string(),
    filterDestinationId: z.string(),
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
  })
  .superRefine((values, ctx) => {
    if (values.kind === "who" && !values.travelerTypeKey.trim()) {
      ctx.addIssue({ code: "custom", path: ["travelerTypeKey"], message: "Le type de voyageur est requis" });
    }
    if (values.kind === "what" && !values.filterTheme.trim() && !values.filterDestinationId.trim()) {
      ctx.addIssue({ code: "custom", path: ["filterTheme"], message: "Choisissez un thème ou une destination" });
    }
  });

export type ExperienceTypeFormValues = z.infer<typeof experienceTypeFormSchema>;
export type DestinationCardValues = z.infer<typeof destinationCardSchema>;
export type ReassuranceCardValues = z.infer<typeof reassuranceCardSchema>;
export type ExperienceFaqValues = z.infer<typeof experienceFaqSchema>;
