import { z } from "zod";

export const contactClientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string(),
  message: z.string().min(1),
  company: z.string(), // honeypot
});

export type ContactClientValues = z.infer<typeof contactClientSchema>;

export const contactServerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string(),
  message: z.string().min(1),
});

export type ContactServerValues = z.infer<typeof contactServerSchema>;
