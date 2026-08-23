"use server";

import { db } from "@/lib/db";
import { sendContactNotification } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactServerSchema, type ContactServerValues } from "./schema";

export async function submitContactMessage(raw: ContactServerValues, honeypot: string) {
  if (honeypot) return { ok: true as const };

  const allowed = await checkRateLimit("contact", 5, 10 * 60 * 1000);
  if (!allowed) throw new Error("Trop de messages envoyés récemment. Merci de réessayer dans quelques minutes.");

  const values = contactServerSchema.parse(raw);

  await db.contactMessage.create({ data: values });

  await sendContactNotification({
    name: values.name,
    email: values.email,
    subject: values.subject,
    message: values.message,
  }).catch(() => {});

  return { ok: true as const };
}
