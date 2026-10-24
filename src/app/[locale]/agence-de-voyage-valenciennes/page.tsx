import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { LocaleLink } from "@/components/get/LocaleLink";
import { Breadcrumb } from "@/components/get/Breadcrumb";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import { FaqAccordion } from "@/components/get/FaqAccordion";
import { TeamGrid } from "@/components/get/TeamGrid";
import { AGENCY_TEAM } from "@/lib/agencyTeam";

// Local landing page for "agence de voyage Valenciennes" searches: the agency's office is in
// Valenciennes, but until this page nothing on the site said so beyond the contact details, and
// the site did not rank for the city's travel-agency searches at all.

export const revalidate = 3600;

const PATH = "/agence-de-voyage-valenciennes";

const COPY = {
  fr: {
    metaTitle: "Agence de voyage sur mesure à Valenciennes",
    metaDescription:
      "Agence de voyage sur mesure à Valenciennes : circuits, safaris et séjours dans plus de 100 pays, conçus avec vous à l'agence ou à distance.",
    breadcrumb: "Agence de voyage à Valenciennes",
    eyebrow: "Valenciennes · Hauts-de-France",
    h1: "Votre agence de voyage sur mesure à Valenciennes",
    intro: [
      "Globale Explore Tours est une agence de voyage installée à Valenciennes, avenue du Sénateur Girard. Nous concevons des voyages sur mesure, des circuits accompagnés et des safaris dans plus de 100 pays, du Japon à la Patagonie.",
      "Vous préférez en parler de vive voix ? Passez nous voir à l'agence ou appelez-nous : un conseiller construit votre itinéraire avec vous, puis reste votre interlocuteur unique jusqu'à votre retour.",
    ],
    whyTitle: "Pourquoi passer par une agence locale",
    why: [
      ["Un conseiller qui vous connaît", "Le même interlocuteur du premier échange au retour, joignable par téléphone, e-mail ou à l'agence."],
      ["Un voyage pensé pour vous", "Dates, rythme, hébergements, budget : chaque proposition part de vos envies, pas d'un catalogue figé."],
      ["Des prix clairs", "Les tarifs sont indiqués par personne, sans frais cachés, et chaque devis détaille ce qui est inclus."],
      ["Paiement en chèques-vacances", "Nous acceptons les chèques-vacances ANCV, le virement, la carte bancaire et les espèces."],
    ],
    tripsTitle: "Nos circuits les plus demandés",
    visitTitle: "Nous rendre visite",
    address: "5 Avenue du Sénateur Girard, 59300 Valenciennes, France",
    visitNote: "Pour être sûr d'être reçu par un conseiller disponible, appelez-nous avant de passer.",
    cta: "Faire une demande de voyage",
    teamTitle: "L'équipe",
    faqs: [
      ["Où se trouve l'agence Globale Explore Tours ?", "L'agence est située au 5 avenue du Sénateur Girard, 59300 Valenciennes. Pour être sûr d'être reçu par un conseiller, appelez-nous au +33 6 67 58 64 62 avant de passer."],
      ["Faut-il venir à l'agence pour organiser son voyage ?", "Non. Vous pouvez venir à l'agence, mais tout peut aussi se faire par téléphone, par e-mail ou via notre formulaire de demande : un conseiller vous recontacte sous 24 h."],
      ["Quelles destinations proposez-vous depuis Valenciennes ?", "Plus de 100 pays : Europe, Afrique, Asie, Amériques, océan Indien et Pacifique, en circuit accompagné, en voyage privé ou en autotour."],
      ["Acceptez-vous les chèques-vacances ANCV ?", "Oui. Nous acceptons les chèques-vacances ANCV, le virement bancaire, la carte bancaire et les espèces."],
    ],
  },
  en: {
    metaTitle: "Tailor-made travel agency in Valenciennes, France",
    metaDescription:
      "Tailor-made travel agency in Valenciennes, France: tours, safaris and holidays in over 100 countries, planned with you in person or remotely.",
    breadcrumb: "Travel agency in Valenciennes",
    eyebrow: "Valenciennes · Hauts-de-France",
    h1: "Your tailor-made travel agency in Valenciennes",
    intro: [
      "Globale Explore Tours is a travel agency based in Valenciennes, France, on avenue du Sénateur Girard. We design tailor-made trips, guided tours and safaris in over 100 countries, from Japan to Patagonia.",
      "Rather talk it through in person? Visit us at the agency or give us a call: an advisor builds your itinerary with you and stays your single point of contact until you are home.",
    ],
    whyTitle: "Why book with a local agency",
    why: [
      ["An advisor who knows you", "The same contact from the first conversation to your return, by phone, email or at the agency."],
      ["A trip built around you", "Dates, pace, hotels and budget: every proposal starts from what you want, not from a fixed catalogue."],
      ["Clear prices", "Prices are shown per person with no hidden fees, and every quote lists exactly what is included."],
      ["Flexible payment", "We accept ANCV holiday vouchers, bank transfer, card and cash."],
    ],
    tripsTitle: "Our most requested tours",
    visitTitle: "Visit us",
    address: "5 Avenue du Sénateur Girard, 59300 Valenciennes, France",
    visitNote: "To be sure an advisor is available, please call before you come by.",
    cta: "Send a trip request",
    teamTitle: "The team",
    faqs: [
      ["Where is the Globale Explore Tours agency?", "The agency is at 5 avenue du Sénateur Girard, 59300 Valenciennes, France. To be sure an advisor is available, call +33 6 67 58 64 62 before coming by."],
      ["Do I need to visit the agency to plan my trip?", "No. You are welcome at the agency, but everything can also be done by phone, email or through our request form: an advisor gets back to you within 24 hours."],
      ["Which destinations do you offer from Valenciennes?", "Over 100 countries across Europe, Africa, Asia, the Americas, the Indian Ocean and the Pacific, as guided tours, private trips or self-drive holidays."],
      ["Do you accept ANCV holiday vouchers?", "Yes. We accept ANCV holiday vouchers, bank transfer, card and cash."],
    ],
  },
  es: {
    metaTitle: "Agencia de viajes a medida en Valenciennes, Francia",
    metaDescription:
      "Agencia de viajes a medida en Valenciennes (Francia): circuitos, safaris y estancias en más de 100 países, con usted en persona o a distancia.",
    breadcrumb: "Agencia de viajes en Valenciennes",
    eyebrow: "Valenciennes · Altos de Francia",
    h1: "Su agencia de viajes a medida en Valenciennes",
    intro: [
      "Globale Explore Tours es una agencia de viajes con sede en Valenciennes (Francia), en la avenida du Sénateur Girard. Diseñamos viajes a medida, circuitos guiados y safaris en más de 100 países, de Japón a la Patagonia.",
      "¿Prefiere hablarlo en persona? Visítenos en la agencia o llámenos: un asesor construye el itinerario con usted y sigue siendo su único interlocutor hasta su regreso.",
    ],
    whyTitle: "Por qué reservar con una agencia local",
    why: [
      ["Un asesor que le conoce", "El mismo interlocutor desde el primer contacto hasta la vuelta, por teléfono, correo o en la agencia."],
      ["Un viaje pensado para usted", "Fechas, ritmo, alojamientos y presupuesto: cada propuesta parte de sus deseos, no de un catálogo cerrado."],
      ["Precios claros", "Los precios se indican por persona, sin costes ocultos, y cada presupuesto detalla lo que incluye."],
      ["Pago flexible", "Aceptamos cheques-vacaciones ANCV, transferencia, tarjeta y efectivo."],
    ],
    tripsTitle: "Nuestros circuitos más solicitados",
    visitTitle: "Visítenos",
    address: "5 Avenue du Sénateur Girard, 59300 Valenciennes, Francia",
    visitNote: "Para asegurarse de que un asesor esté disponible, llámenos antes de venir.",
    cta: "Enviar una solicitud de viaje",
    teamTitle: "El equipo",
    faqs: [
      ["¿Dónde está la agencia Globale Explore Tours?", "La agencia está en el 5 avenue du Sénateur Girard, 59300 Valenciennes (Francia). Para asegurarse de que un asesor esté disponible, llame al +33 6 67 58 64 62 antes de venir."],
      ["¿Hay que ir a la agencia para organizar el viaje?", "No. Puede venir a la agencia, pero todo puede hacerse también por teléfono, correo o con nuestro formulario de solicitud: un asesor le responde en 24 horas."],
      ["¿Qué destinos ofrecen desde Valenciennes?", "Más de 100 países en Europa, África, Asia, las Américas, el océano Índico y el Pacífico, en circuito guiado, viaje privado o autotour."],
      ["¿Aceptan cheques-vacaciones ANCV?", "Sí. Aceptamos cheques-vacaciones ANCV, transferencia bancaria, tarjeta y efectivo."],
    ],
  },
} as const satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const c = COPY[locale];
  return pageMetadata({ locale, path: PATH, title: c.metaTitle, description: c.metaDescription });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const c = COPY[locale];

  const tours = await db.tour.findMany({
    where: { featured: true },
    orderBy: { order: "asc" },
    take: 8,
    select: {
      slug: true, name: true, nameEn: true, nameEs: true, tagline: true, taglineEn: true, taglineEs: true,
      price: true, originalPrice: true, currency: true, duration: true, durationEn: true, durationEs: true,
      theme: true, image: true, format: true,
      destination: { select: { slug: true, regionSlug: true } },
    },
  });

  // FaqAccordion picks the language itself, so every locale's copy is handed over.
  const faqs = COPY.fr.faqs.map(([question, answer], i) => ({
    question,
    answer,
    questionEn: COPY.en.faqs[i][0],
    answerEn: COPY.en.faqs[i][1],
    questionEs: COPY.es.faqs[i][0],
    answerEs: COPY.es.faqs[i][1],
  }));
  const breadcrumb = [{ label: c.breadcrumb }];
  const faqSchema = faqJsonLd(c.faqs.map(([question, answer]) => ({ question, answer })));

  return (
    <main className="py-16 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(locale, breadcrumb, PATH) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />}

      <div className="mx-auto max-w-3xl px-6">
        <Breadcrumb items={breadcrumb} />
        <div className="mt-8 text-center">
          <p className="label-eyebrow text-[var(--brand-accent)]">{c.eyebrow}</p>
          <h1 className="font-display mt-2 text-3xl text-neutral-900 sm:text-4xl" style={{ textWrap: "balance" }}>
            {c.h1}
          </h1>
        </div>
        <div className="font-body mt-8 space-y-4 text-base leading-relaxed text-neutral-700">
          {c.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <h2 className="font-display mt-14 text-center text-2xl text-neutral-800 sm:text-3xl">{c.whyTitle}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {c.why.map(([title, body]) => (
            <div key={title} className="border-t border-neutral-200 pt-4">
              <h3 className="font-display text-lg text-neutral-900">{title}</h3>
              <p className="font-body mt-2 text-sm text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {tours.length > 0 && (
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
          <TripsShowcase
            heading={c.tripsTitle}
            tours={tours.map(({ destination, ...t }) => ({ ...t, destinationSlug: destination.slug, regionSlug: destination.regionSlug }))}
          />
        </div>
      )}

      <div className="mx-auto mt-16 grid max-w-5xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-neutral-800 sm:text-3xl">{c.visitTitle}</h2>
          <ul className="font-body mt-6 space-y-4 text-neutral-700">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-neutral-400" aria-hidden="true" />
              {c.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-neutral-400" aria-hidden="true" />
              <a href="tel:+33667586462" className="hover:underline">+33 6 67 58 64 62</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-neutral-400" aria-hidden="true" />
              <a href="mailto:contact@globaleexploretours.com" className="hover:underline">contact@globaleexploretours.com</a>
            </li>
          </ul>
          <p className="font-body mt-4 text-sm text-neutral-500">{c.visitNote}</p>
          <LocaleLink
            href="/faire-une-demande"
            className="mt-6 inline-block bg-[var(--brand-accent)] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white hover:opacity-90"
          >
            {c.cta}
          </LocaleLink>
        </div>
        {/* Google's free "share > embed a map" iframe, the same one the contact page uses. */}
        <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-neutral-200">
          <iframe
            src="https://www.google.com/maps?q=place_id:ChIJQT2_2XHtwkcRRZmeuiJ4uBY&output=embed"
            title="Globale Explore Tours — Valenciennes"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-6">
        <TeamGrid title={c.teamTitle} members={AGENCY_TEAM} />
      </div>

      <div className="mt-16 px-6">
        <FaqAccordion faqs={faqs} />
      </div>
    </main>
  );
}
