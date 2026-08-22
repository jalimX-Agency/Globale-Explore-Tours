import { z } from "zod";

// Same generic-literal-key trick as destinations/schema.ts — see the comment there for why
// `key` must stay a literal type. No `.default()` anywhere here either, for the same
// Input/Output-variance reason documented in that file.
function trilingual<K extends string>(key: K) {
  return {
    [key]: z.string(),
    [`${key}En`]: z.string(),
    [`${key}Es`]: z.string(),
  } as Record<K, z.ZodString> & Record<`${K}En` | `${K}Es`, z.ZodString>;
}

export const itineraryDaySchema = z.object({
  dayNumber: z.number().int(),
  ...trilingual("location"),
  hotel: z.string(),
  ...trilingual("title"),
  ...trilingual("description"),
  image: z.string(),
  images: z.string(),
});

export const tourSectionSchema = z.object({
  ...trilingual("heading"),
  ...trilingual("body"),
});

export const tourHotelSchema = z.object({
  ...trilingual("name"),
  ...trilingual("description"),
  image: z.string(),
});

export const journeyChapterSchema = z.object({
  ...trilingual("title"),
  ...trilingual("intro"),
  galleryImages: z.string(),
  mapMarkerX: z.number(),
  mapMarkerY: z.number(),
  days: z.array(itineraryDaySchema),
});

export const tourFormSchema = z.object({
  name: z.string().min(1, "Le nom est requis (français)"),
  nameEn: z.string(),
  nameEs: z.string(),
  slug: z
    .string()
    .min(1, "Le lien (slug) est requis")
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Lettres minuscules, chiffres et tirets uniquement"),
  tagline: z.string(),
  taglineEn: z.string(),
  taglineEs: z.string(),
  description: z.string(),
  descriptionEn: z.string(),
  descriptionEs: z.string(),
  longDescription: z.string(),
  longDescriptionEn: z.string(),
  longDescriptionEs: z.string(),
  price: z.number(),
  originalPrice: z.number(),
  currency: z.string(),
  duration: z.string(),
  durationEn: z.string(),
  durationEs: z.string(),
  includes: z.string(),
  includesEn: z.string(),
  includesEs: z.string(),
  category: z.string(),
  theme: z.string(),
  travelerTypes: z.string(),
  maxGuests: z.number().int(),
  departureFrom: z.string(),
  image: z.string(),
  images: z.string(),
  featured: z.boolean(),
  order: z.number().int(),
  format: z.enum(["standard", "journey"]),
  mapImage: z.string(),
  whenLabel: z.string(),
  whenLabelEn: z.string(),
  whenLabelEs: z.string(),
  sections: z.array(tourSectionSchema),
  hotels: z.array(tourHotelSchema),
  chapters: z.array(journeyChapterSchema),
});

export type TourFormValues = z.infer<typeof tourFormSchema>;
export type ItineraryDayValues = z.infer<typeof itineraryDaySchema>;
export type TourSectionValues = z.infer<typeof tourSectionSchema>;
export type TourHotelValues = z.infer<typeof tourHotelSchema>;
export type JourneyChapterValues = z.infer<typeof journeyChapterSchema>;
