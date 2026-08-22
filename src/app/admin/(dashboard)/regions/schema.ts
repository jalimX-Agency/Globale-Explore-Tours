import { z } from "zod";

// No `.default()` here — see the identical note in ../destinations/schema.ts for why.
export const regionFormSchema = z.object({
  heroImage: z.string(),
  heading: z.string().min(1, "Le titre est requis (français)"),
  headingEn: z.string(),
  headingEs: z.string(),
  intro: z.string(),
  introEn: z.string(),
  introEs: z.string(),
  introMore: z.string(),
  introMoreEn: z.string(),
  introMoreEs: z.string(),
  order: z.number().int(),
});

export type RegionFormValues = z.infer<typeof regionFormSchema>;
