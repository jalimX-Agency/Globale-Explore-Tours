import { z } from "zod";

// Client-side schema: includes `emailConfirm` (compared against `email` via `.refine`,
// mirroring Black Tomato's real enquiry form) and the honeypot field — neither is persisted,
// both are stripped before the payload reaches `submitBooking`.
export const bookingClientSchema = z
  .object({
    tourId: z.string().optional(),
    destinationsInterest: z.array(z.string()),
    preferredMonth: z.string(),
    preferredYear: z.string(),
    duration: z.string(),
    guests: z.number().int().min(1),
    children: z.number().int().min(0),
    budget: z.string(),
    message: z.string(),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    emailConfirm: z.string().email(),
    phone: z.string(),
    hearAboutUs: z.string(),
    company: z.string(), // honeypot — real visitors never see or fill this field
  })
  .refine((data) => data.email === data.emailConfirm, {
    path: ["emailConfirm"],
    message: "mismatch",
  });

export type BookingClientValues = z.infer<typeof bookingClientSchema>;

// Server-side schema: exactly what gets persisted to `Booking`. Re-validated independently
// of the client schema — never trust client-side validation alone.
export const bookingServerSchema = z.object({
  tourId: z.string().optional(),
  destinationsInterest: z.string(),
  preferredDate: z.string().optional(),
  duration: z.string(),
  guests: z.number().int().min(1),
  children: z.number().int().min(0),
  budget: z.string(),
  message: z.string(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string(),
  hearAboutUs: z.string(),
  language: z.enum(["fr", "en", "es"]),
});

export type BookingServerValues = z.infer<typeof bookingServerSchema>;
