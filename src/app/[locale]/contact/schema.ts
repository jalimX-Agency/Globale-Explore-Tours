import { z } from "zod";

export const contactClientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  subject: z.string(),
  message: z.string().min(1),
  company: z.string(), // honeypot
});

export type ContactClientValues = z.infer<typeof contactClientSchema>;

export const contactServerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  subject: z.string(),
  message: z.string().min(1),
  language: z.enum(["fr", "en", "es"]),
});

export type ContactServerValues = z.infer<typeof contactServerSchema>;
