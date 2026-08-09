import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "noreply@globaleexploretours.com";
const ADMIN_EMAIL = "contac@globaleexploretours.com";

const COPY = {
  fr: {
    subject: "Votre demande de réservation — Globale Explore Tours",
    title: "Demande bien reçue",
    hello: (name: string) => `Bonjour ${name},`,
    body: "Votre demande de réservation a bien été reçue. Notre équipe vous contactera sous 24h pour confirmer les détails et le tarif final.",
    tour: "Excursion",
    date: "Date souhaitée",
    guests: "Voyageurs",
    signature: "L'équipe Globale Explore Tours",
  },
  en: {
    subject: "Your booking request — Globale Explore Tours",
    title: "Request received",
    hello: (name: string) => `Hello ${name},`,
    body: "Your booking request has been received. Our team will contact you within 24h to confirm details and final pricing.",
    tour: "Tour",
    date: "Preferred date",
    guests: "Travellers",
    signature: "The Globale Explore Tours team",
  },
  es: {
    subject: "Su solicitud de reserva — Globale Explore Tours",
    title: "Solicitud recibida",
    hello: (name: string) => `Hola ${name},`,
    body: "Hemos recibido su solicitud de reserva. Nuestro equipo se pondrá en contacto en 24h para confirmar los detalles y el precio final.",
    tour: "Excursión",
    date: "Fecha preferida",
    guests: "Viajeros",
    signature: "El equipo de Globale Explore Tours",
  },
} as const;

export async function sendBookingRequestConfirmation(data: {
  firstName: string;
  email: string;
  tourName?: string;
  preferredDate?: string;
  guests: number;
  language?: "fr" | "en" | "es";
}) {
  const t = COPY[data.language ?? "fr"];
  await resend.emails.send({
    from: FROM,
    to: data.email,
    subject: t.subject,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <h1 style="color: #b5502e;">${t.title}</h1>
        <p>${t.hello(data.firstName)}</p>
        <p>${t.body}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          ${data.tourName ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>${t.tour}</strong></td><td>${data.tourName}</td></tr>` : ""}
          ${data.preferredDate ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>${t.date}</strong></td><td>${data.preferredDate}</td></tr>` : ""}
          <tr><td style="padding: 8px;"><strong>${t.guests}</strong></td><td>${data.guests}</td></tr>
        </table>
        <p style="color: #b5502e;">${t.signature}</p>
      </div>
    `,
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
  await resend.emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `Nouvelle demande de réservation — ${data.firstName} ${data.lastName}`,
    html: `
      <p><strong>De:</strong> ${data.firstName} ${data.lastName} (${data.email}${data.phone ? `, ${data.phone}` : ""})</p>
      ${data.tourName ? `<p><strong>Excursion:</strong> ${data.tourName}</p>` : ""}
      ${data.preferredDate ? `<p><strong>Date souhaitée:</strong> ${data.preferredDate}</p>` : ""}
      <p><strong>Voyageurs:</strong> ${data.guests}</p>
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
    `,
  });
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  await resend.emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `Nouveau message: ${data.subject || "Contact"}`,
    html: `<p><strong>De:</strong> ${data.name} (${data.email})</p><p>${data.message}</p>`,
  });
}
