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
// by either a theme or a specific destination — never both, enforced below. "private" pages
// (Private Travel's own services) carry no filter at all — content-only for now.
export const EXPERIENCE_KINDS = ["who", "what", "private"] as const;
export const THEME_FILTER_KEYS = ["adventure", "culture", "relax", "family"] as const;
export const MONTH_FILTER_KEYS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
] as const;

export const experienceTypeFormSchema = z
  .object({
    // Full path from /experience-types/ — a plain slug for a top-level page, or
    // "parent-slug/leaf-slug" for a sub-page (composed by the form when a parent is picked,
    // see ParentPageField in experience-form.tsx — never hand-typed with a slash).
    slug: z
      .string()
      .min(1, "Le lien (slug) est requis")
      .regex(/^[a-z0-9]+(-[a-z0-9]+)*(\/[a-z0-9]+(-[a-z0-9]+)*)*$/, "Lettres minuscules, chiffres et tirets uniquement"),
    kind: z.enum(EXPERIENCE_KINDS),
    parentId: z.string(),
    travelerTypeKey: z
      .string()
      .regex(/^[a-z0-9]*(-[a-z0-9]+)*$/, "Lettres minuscules, chiffres et tirets uniquement"),
    filterTheme: z.string(),
    filterMonths: z.string(),
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
    // Only top-level pages must declare their own filter — a sub-page left blank simply
    // inherits its parent's tour list (see the model comment in schema.prisma).
    if (values.kind === "who" && !values.parentId && !values.travelerTypeKey.trim()) {
      ctx.addIssue({ code: "custom", path: ["travelerTypeKey"], message: "Le type de voyageur est requis" });
    }
    if (
      values.kind === "what" &&
      !values.parentId &&
      !values.filterTheme.trim() &&
      !values.filterMonths.trim() &&
      !values.filterDestinationId.trim()
    ) {
      ctx.addIssue({ code: "custom", path: ["filterTheme"], message: "Choisissez un thème, une période ou une destination" });
    }
  });

export type ExperienceTypeFormValues = z.infer<typeof experienceTypeFormSchema>;
export type DestinationCardValues = z.infer<typeof destinationCardSchema>;
export type ReassuranceCardValues = z.infer<typeof reassuranceCardSchema>;
export type ExperienceFaqValues = z.infer<typeof experienceFaqSchema>;
