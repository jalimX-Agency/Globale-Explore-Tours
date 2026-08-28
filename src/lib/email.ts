import { Resend } from "resend";
import { renderEmailShell, emailHeading, emailParagraph, emailEyebrow, emailButton, emailDetailRow, emailDetailTable, escapeHtml } from "./email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "Globale Explore Tours <noreply@globaleexploretours.com>";
const ADMIN_EMAIL = "contact@globaleexploretours.com";
const BASE_URL = "https://www.globaleexploretours.com";

type Lang = "fr" | "en" | "es";

const BOOKING_CONFIRMATION_COPY: Record<Lang, {
  subject: string;
  heading: string;
  hello: (name: string) => string;
  body: string;
  tour: string;
  date: string;
  guests: string;
  closing: string;
  signature: string;
  cta: string;
}> = {
  fr: {
    subject: "Votre demande de réservation — Globale Explore Tours",
    heading: "Demande bien reçue",
    hello: (name) => `Bonjour ${name},`,
    body: "Votre demande de réservation a bien été reçue. Notre équipe vous contactera sous 24h pour confirmer les détails et le tarif final.",
    tour: "Excursion",
    date: "Date souhaitée",
    guests: "Voyageurs",
    closing: "À très vite,",
    signature: "L'équipe Globale Explore Tours",
    cta: "Découvrir nos voyages",
  },
  en: {
    subject: "Your booking request — Globale Explore Tours",
    heading: "Request received",
    hello: (name) => `Hello ${name},`,
    body: "Your booking request has been received. Our team will contact you within 24h to confirm details and final pricing.",
    tour: "Tour",
    date: "Preferred date",
    guests: "Travellers",
    closing: "Talk soon,",
    signature: "The Globale Explore Tours team",
    cta: "Browse our trips",
  },
  es: {
    subject: "Su solicitud de reserva — Globale Explore Tours",
    heading: "Solicitud recibida",
    hello: (name) => `Hola ${name},`,
    body: "Hemos recibido su solicitud de reserva. Nuestro equipo se pondrá en contacto en 24h para confirmar los detalles y el precio final.",
    tour: "Excursión",
    date: "Fecha preferida",
    guests: "Viajeros",
    closing: "Hasta pronto,",
    signature: "El equipo de Globale Explore Tours",
    cta: "Ver nuestros viajes",
  },
};

export async function sendBookingRequestConfirmation(data: {
  firstName: string;
  email: string;
  tourName?: string;
  preferredDate?: string;
  guests: number;
  language?: Lang;
}) {
  const lang = data.language ?? "fr";
  const t = BOOKING_CONFIRMATION_COPY[lang];

  const rows = [
    data.tourName && emailDetailRow(t.tour, escapeHtml(data.tourName)),
    data.preferredDate && emailDetailRow(t.date, escapeHtml(data.preferredDate)),
    emailDetailRow(t.guests, String(data.guests)),
  ]
    .filter(Boolean)
    .join("");

  const body = `
    ${emailHeading(t.heading)}
    ${emailParagraph(t.hello(escapeHtml(data.firstName)))}
    ${emailParagraph(t.body)}
    ${emailDetailTable(rows)}
    ${emailParagraph(`${t.closing}<br />${t.signature}`)}
    ${emailButton(t.cta, `${BASE_URL}/${lang}/trouver-mon-voyage`)}
  `;

  await resend.emails.send({
    from: FROM,
    to: data.email,
    subject: t.subject,
    html: renderEmailShell({ previewText: t.body, bodyHtml: body, language: lang }),
  });
}

export async function sendBookingNotificationToAdmin(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  tourName?: string;
  preferredDate?: string;
  guests: number;
  message?: string;
}) {
  const name = `${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}`;
  const rows = [
    emailDetailRow("De", name),
    emailDetailRow("E-mail", `<a href="mailto:${escapeHtml(data.email)}" style="color:#1a1a1a;">${escapeHtml(data.email)}</a>`),
    data.phone && emailDetailRow("Téléphone", `<a href="tel:${escapeHtml(data.phone)}" style="color:#1a1a1a;">${escapeHtml(data.phone)}</a>`),
    data.tourName && emailDetailRow("Excursion", escapeHtml(data.tourName)),
    data.preferredDate && emailDetailRow("Date souhaitée", escapeHtml(data.preferredDate)),
    emailDetailRow("Voyageurs", String(data.guests)),
  ]
    .filter(Boolean)
    .join("");

  const body = `
    ${emailEyebrow("Nouvelle demande")}
    ${emailHeading(name)}
    ${emailDetailTable(rows)}
    ${data.message ? emailParagraph(escapeHtml(data.message).replace(/\n/g, "<br />")) : ""}
    ${emailButton("Voir dans l'admin", `${BASE_URL}/admin/demandes`)}
  `;

  await resend.emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `Nouvelle demande de réservation — ${data.firstName} ${data.lastName}`,
    html: renderEmailShell({ previewText: `Nouvelle demande de ${name}`, bodyHtml: body }),
  });
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const rows = [
    emailDetailRow("De", escapeHtml(data.name)),
    emailDetailRow("E-mail", `<a href="mailto:${escapeHtml(data.email)}" style="color:#1a1a1a;">${escapeHtml(data.email)}</a>`),
    data.subject && emailDetailRow("Sujet", escapeHtml(data.subject)),
  ]
    .filter(Boolean)
    .join("");

  const body = `
    ${emailEyebrow("Nouveau message")}
    ${emailHeading(escapeHtml(data.subject || "Contact"))}
    ${emailDetailTable(rows)}
    ${emailParagraph(escapeHtml(data.message).replace(/\n/g, "<br />"))}
    ${emailButton("Voir dans l'admin", `${BASE_URL}/admin/messages`)}
  `;

  await resend.emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `Nouveau message : ${data.subject || "Contact"}`,
    html: renderEmailShell({ previewText: `Nouveau message de ${escapeHtml(data.name)}`, bodyHtml: body }),
  });
}

const CONTACT_CONFIRMATION_COPY: Record<Lang, { subject: string; heading: string; hello: (name: string) => string; body: string; closing: string; signature: string }> = {
  fr: {
    subject: "Votre message a bien été reçu — Globale Explore Tours",
    heading: "Message bien reçu",
    hello: (name) => `Bonjour ${name},`,
    body: "Nous avons bien reçu votre message et nous vous répondrons dans les meilleurs délais.",
    closing: "À très vite,",
    signature: "L'équipe Globale Explore Tours",
  },
  en: {
    subject: "We've received your message — Globale Explore Tours",
    heading: "Message received",
    hello: (name) => `Hello ${name},`,
    body: "We've received your message and will get back to you as soon as possible.",
    closing: "Talk soon,",
    signature: "The Globale Explore Tours team",
  },
  es: {
    subject: "Hemos recibido su mensaje — Globale Explore Tours",
    heading: "Mensaje recibido",
    hello: (name) => `Hola ${name},`,
    body: "Hemos recibido su mensaje y le responderemos lo antes posible.",
    closing: "Hasta pronto,",
    signature: "El equipo de Globale Explore Tours",
  },
};

export async function sendContactConfirmation(data: { name: string; email: string; language?: Lang }) {
  const lang = data.language ?? "fr";
  const t = CONTACT_CONFIRMATION_COPY[lang];

  const body = `
    ${emailHeading(t.heading)}
    ${emailParagraph(t.hello(escapeHtml(data.name)))}
    ${emailParagraph(t.body)}
    ${emailParagraph(`${t.closing}<br />${t.signature}`)}
  `;

  await resend.emails.send({
    from: FROM,
    to: data.email,
    subject: t.subject,
    html: renderEmailShell({ previewText: t.body, bodyHtml: body, language: lang }),
  });
}
