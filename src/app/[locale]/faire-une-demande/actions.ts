"use server";

import { db } from "@/lib/db";
import { sendBookingRequestConfirmation, sendBookingNotificationToAdmin } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { bookingServerSchema, type BookingServerValues } from "./schema";

export async function submitBooking(raw: BookingServerValues, honeypot: string) {
  // A filled honeypot means a bot — pretend success without touching the database, so the
  // bot gets no signal that anything was rejected.
  if (honeypot) return { ok: true as const };

  // 5 requests per 10 minutes per IP — generous for a genuine traveler, tight enough to stop
  // a scripted flood (this form writes to the DB and fires two emails per submission).
  const allowed = await checkRateLimit("booking", 5, 10 * 60 * 1000);
  if (!allowed) throw new Error("Trop de demandes envoyées récemment. Merci de réessayer dans quelques minutes.");

  const values = bookingServerSchema.parse(raw);

  const booking = await db.booking.create({
    data: {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      tourId: values.tourId || undefined,
      preferredDate: values.preferredDate ? new Date(values.preferredDate) : undefined,
      guests: values.guests,
      children: values.children,
      duration: values.duration,
      budget: values.budget,
      destinationsInterest: values.destinationsInterest,
      hearAboutUs: values.hearAboutUs,
      message: values.message,
      language: values.language,
    },
    include: { tour: { select: { name: true, nameEn: true, nameEs: true } } },
  });

  const tourName = booking.tour
    ? pick(values.language, booking.tour.name, booking.tour.nameEn, booking.tour.nameEs)
    : undefined;
  const preferredDateLabel = booking.preferredDate
    ? booking.preferredDate.toLocaleDateString(values.language)
    : undefined;

  // Notification emails are best-effort — a failed send must never make the customer think
  // their request was lost when it's already safely in the database.
  await Promise.allSettled([
    sendBookingRequestConfirmation({
      firstName: values.firstName,
      email: values.email,
      tourName,
      preferredDate: preferredDateLabel,
      guests: values.guests,
      language: values.language,
    }),
    sendBookingNotificationToAdmin({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      tourName,
      preferredDate: preferredDateLabel,
      guests: values.guests,
      message: [
        values.message,
        values.duration && `Durée souhaitée : ${values.duration}`,
        values.budget && `Budget par personne : ${values.budget}`,
        values.destinationsInterest && `Destinations d'intérêt : ${values.destinationsInterest}`,
        values.hearAboutUs && `Connu via : ${values.hearAboutUs}`,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  ]);

  return { ok: true as const };
}

function pick(locale: string, fr: string, en: string, es: string) {
  if (locale === "en") return en || fr;
  if (locale === "es") return es || fr;
  return fr;
}
