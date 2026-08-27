"use server";

import { db } from "@/lib/db";
import { sendContactNotification, sendContactConfirmation } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactServerSchema, type ContactServerValues } from "./schema";

export async function submitContactMessage(raw: ContactServerValues, honeypot: string) {
  if (honeypot) return { ok: true as const };

  const allowed = await checkRateLimit("contact", 5, 10 * 60 * 1000);
  if (!allowed) throw new Error("Trop de messages envoyés récemment. Merci de réessayer dans quelques minutes.");

  const { language, ...values } = contactServerSchema.parse(raw);

  await db.contactMessage.create({ data: values });

  // Notification emails are best-effort — a failed send must never make the sender think
  // their message was lost when it's already safely in the database.
  await Promise.allSettled([
    sendContactNotification({
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    }),
    sendContactConfirmation({
      name: values.name,
      email: values.email,
      language,
    }),
  ]);

  return { ok: true as const };
}
