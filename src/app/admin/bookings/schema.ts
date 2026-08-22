import { z } from "zod";

export const BOOKING_STATUSES = ["pending", "contacted", "confirmed", "cancelled"] as const;

export const bookingStatusSchema = z.object({
  status: z.enum(BOOKING_STATUSES),
});

export type BookingStatusValues = z.infer<typeof bookingStatusSchema>;
