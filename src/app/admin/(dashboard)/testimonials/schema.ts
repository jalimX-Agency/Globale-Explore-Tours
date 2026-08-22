import { z } from "zod";

export const TESTIMONIAL_SOURCES = ["website", "tripadvisor", "google"] as const;

export const testimonialFormSchema = z.object({
  quote: z.string().min(1, "Le témoignage est requis"),
  author: z.string().min(1, "Le nom de l'auteur est requis"),
  location: z.string(),
  rating: z.number().int().min(1).max(5),
  source: z.enum(TESTIMONIAL_SOURCES),
  order: z.number().int(),
});

export type TestimonialFormValues = z.infer<typeof testimonialFormSchema>;
