import type { FaqData } from "@/components/get/FaqAccordion";
import { TRIPADVISOR_RATING } from "@/lib/seo";

// Homepage FAQ — the questions AI answer engines (ChatGPT, Perplexity, Google AI Overviews...)
// get asked about an agency like this one, answered first-sentence-first so they can be
// quoted as-is. Every fact here is restated from elsewhere on the site, never new: booking,
// quote, payment and cancellation terms from /conditions-de-reservation (keep in sync if those
// change), the 24h reply from /faire-une-demande, contact channels from /contact. Catalogue
// counts are passed in live from the DB so they never go stale.
export function homeFaqs({
  destinations,
  regions,
  tours,
}: {
  destinations: number;
  regions: number;
  tours: number;
}): FaqData[] {
  const rating = `${TRIPADVISOR_RATING.value}/5`;
  const reviews = TRIPADVISOR_RATING.count;

  return [
    {
      question: "Qu'est-ce que Globale Explore Tours ?",
      questionEn: "What is Globale Explore Tours?",
      questionEs: "¿Qué es Globale Explore Tours?",
      answer: `Globale Explore Tours est une agence de voyages sur-mesure basée à Valenciennes, en France. Nous concevons des voyages et circuits privés dans ${destinations} destinations réparties sur ${regions} grandes régions du monde, avec ${tours} itinéraires à personnaliser, accompagnés par des guides locaux. Nos voyageurs nous notent ${rating} sur TripAdvisor (${reviews} avis).`,
      answerEn: `Globale Explore Tours is a tailor-made travel agency based in Valenciennes, France. We design private trips and tours in ${destinations} destinations across ${regions} regions of the world, with ${tours} itineraries to adapt, led by local guides. Our travellers rate us ${rating} on TripAdvisor (${reviews} reviews).`,
      answerEs: `Globale Explore Tours es una agencia de viajes a medida con sede en Valenciennes, Francia. Diseñamos viajes y circuitos privados en ${destinations} destinos repartidos en ${regions} grandes regiones del mundo, con ${tours} itinerarios para personalizar, acompañados por guías locales. Nuestros viajeros nos valoran con ${rating} en TripAdvisor (${reviews} opiniones).`,
    },
    {
      question: "Comment organiser un voyage sur-mesure avec vous ?",
      questionEn: "How do I plan a tailor-made trip with you?",
      questionEs: "¿Cómo organizo un viaje a medida con ustedes?",
      answer:
        "Envoyez-nous une demande via le formulaire en ligne, par téléphone au +33 6 67 58 64 62, par WhatsApp ou par email. Notre équipe vous répond avec une proposition sur-mesure sous 24h. Jusqu'à deux devis sont gratuits pour une même demande, et chaque devis est valable 7 jours.",
      answerEn:
        "Send us a request through the online form, by phone on +33 6 67 58 64 62, on WhatsApp or by email. Our team replies with a tailor-made proposal within 24 hours. Up to two quotes per request are free, and each quote is valid for 7 days.",
      answerEs:
        "Envíenos una solicitud mediante el formulario en línea, por teléfono al +33 6 67 58 64 62, por WhatsApp o por email. Nuestro equipo le responde con una propuesta a medida en 24 horas. Hasta dos presupuestos por solicitud son gratuitos, y cada presupuesto es válido durante 7 días.",
    },
    {
      question: "Puis-je modifier un des itinéraires proposés sur le site ?",
      questionEn: "Can I change one of the itineraries on the site?",
      questionEs: "¿Puedo modificar uno de los itinerarios del sitio?",
      answer:
        "Oui. Chaque itinéraire du site est un point de départ : durée, rythme, étapes et hébergements s'adaptent à vos envies. Dites-nous ce que vous aimeriez changer dans votre demande, et nous reconstruisons le voyage autour de vous.",
      answerEn:
        "Yes. Every itinerary on the site is a starting point: the length, pace, stops and places to stay all adapt to what you're after. Tell us what you'd like to change in your request, and we rebuild the trip around you.",
      answerEs:
        "Sí. Cada itinerario del sitio es un punto de partida: la duración, el ritmo, las etapas y los alojamientos se adaptan a sus deseos. Indíquenos en su solicitud lo que le gustaría cambiar, y reconstruimos el viaje en torno a usted.",
    },
    {
      question: "Comment se passent la réservation et le paiement ?",
      questionEn: "How do booking and payment work?",
      questionEs: "¿Cómo funcionan la reserva y el pago?",
      answer:
        "Votre réservation est confirmée dès réception de l'acompte demandé, ou du paiement intégral selon le voyage. Le règlement se fait par virement, espèces, chèques-vacances ANCV ou carte bancaire. Les prix sont en euros, toutes taxes applicables incluses ; des frais de gestion peuvent s'appliquer selon le mode de paiement.",
      answerEn:
        "Your booking is confirmed once we receive the requested deposit, or full payment depending on the trip. You can pay by bank transfer, cash, ANCV holiday vouchers or card. Prices are in euros and include all applicable taxes; handling fees may apply depending on the payment method.",
      answerEs:
        "Su reserva se confirma al recibir el anticipo solicitado, o el pago completo según el viaje. Puede pagar por transferencia, en efectivo, con cheques-vacaciones ANCV o con tarjeta. Los precios están en euros e incluyen todos los impuestos aplicables; pueden aplicarse gastos de gestión según el medio de pago.",
    },
    {
      question: "Quelles sont vos conditions d'annulation ?",
      questionEn: "What is your cancellation policy?",
      questionEs: "¿Cuáles son sus condiciones de cancelación?",
      answer:
        "Une fois le paiement effectué, les frais d'annulation sont de 150 € à plus de 30 jours du départ, 50 % entre 30 et 21 jours, 70 % entre 20 et 8 jours, 75 % entre 7 et 2 jours, et 100 % la veille ou le jour du départ. Si l'annulation vient de notre fait, vous êtes remboursé intégralement.",
      answerEn:
        "Once payment has been made, cancellation fees are €150 more than 30 days before departure, 50% from 30 to 21 days, 70% from 20 to 8 days, 75% from 7 to 2 days, and 100% the day before or on the day of departure. If we cancel, you are refunded in full.",
      answerEs:
        "Una vez realizado el pago, los gastos de cancelación son de 150 € a más de 30 días de la salida, 50 % entre 30 y 21 días, 70 % entre 20 y 8 días, 75 % entre 7 y 2 días, y 100 % la víspera o el día de la salida. Si la cancelación es por nuestra parte, se le reembolsa íntegramente.",
    },
    {
      question: "Faut-il souscrire une assurance voyage ?",
      questionEn: "Do I need travel insurance?",
      questionEs: "¿Necesito un seguro de viaje?",
      answer:
        "Nous le recommandons vivement : souscrivez avant le départ une assurance couvrant l'annulation, la perte de bagages et les frais médicaux.",
      answerEn:
        "We strongly recommend it: before you leave, take out insurance covering cancellation, lost luggage and medical expenses.",
      answerEs:
        "Lo recomendamos encarecidamente: antes de salir, contrate un seguro que cubra la cancelación, la pérdida de equipaje y los gastos médicos.",
    },
  ];
}
