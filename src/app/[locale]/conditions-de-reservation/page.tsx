import type { Metadata } from "next";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { pageMetadata } from "@/lib/seo";

const META = {
  fr: { title: "Conditions de réservation", description: "Conditions générales de vente de Globale Explore Tours : réservation, paiement, modification et annulation." },
  en: { title: "Booking terms", description: "Globale Explore Tours' terms of sale: booking, payment, changes and cancellation." },
  es: { title: "Condiciones de reserva", description: "Condiciones generales de venta de Globale Explore Tours: reserva, pago, modificación y cancelación." },
} as const satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return pageMetadata({ locale, path: "/conditions-de-reservation", ...META[locale] });
}

// Cancellation tiers, quote validity, payment methods and the mediator are the client's own
// real terms (confirmed by the client directly). Two things deliberately dropped from the
// client's original draft, both confirmed with the client:
// 1. The 14-day withdrawal clause — legally doesn't apply to dated travel services (Code de la
//    consommation Art. L221-28), and promising it in writing would have been a real liability.
// 2. Any claim of holding a financial guarantee / RCP insurance / Atout France registration —
//    all three are still "en cours" (not yet active) per the client, so stating either that the
//    company holds them or that they're "in progress" was ruled out; the section is omitted
//    entirely until they're finalized, rather than publishing a claim that isn't true yet.
const CONTENT: Record<Locale, string> = {
  fr: `
<p><em>Dernière mise à jour : 27 août 2026</em></p>

<h2>Article 1 — Champ d'application</h2>
<p>Les présentes conditions générales de vente régissent les relations contractuelles entre l'agence Globale Explore Tours et ses clients, et s'appliquent à toutes les prestations de voyage qu'elle propose.</p>

<h2>Article 2 — Réservation</h2>
<p>2.1 Vous pouvez réserver auprès de Globale Explore Tours par téléphone, en ligne ou directement auprès d'un conseiller.</p>
<p>2.2 Nous réalisons jusqu'à deux devis gratuitement pour une même demande. Au-delà, toute demande de devis supplémentaire pourra être facturée.</p>
<p>2.3 Votre réservation est confirmée dès réception de l'acompte demandé, ou du paiement intégral selon les conditions propres à chaque prestation.</p>

<h2>Article 3 — Validité et prix</h2>
<p>3.1 Un devis émis par Globale Explore Tours est valable 7 jours à compter de sa date d'émission. Passé ce délai, les tarifs proposés peuvent évoluer (coût des prestations, taux de change, disponibilité), notamment pour les billets d'avion. Nous vous recommandons de confirmer votre devis rapidement pour sécuriser le tarif proposé.</p>
<p>3.2 Les prix indiqués sont en euros et incluent l'ensemble des taxes applicables.</p>

<h2>Article 4 — Paiement</h2>
<p>4.1 Le règlement peut s'effectuer par virement, espèces, chèques-vacances ANCV ou carte bancaire, selon les modalités convenues à la réservation. Des frais de gestion peuvent s'appliquer selon le mode de paiement choisi.</p>
<p>4.2 En l'absence de paiement de l'acompte dans le délai indiqué, Globale Explore Tours se réserve le droit d'annuler la réservation.</p>

<h2>Article 5 — Modification et annulation par le client</h2>
<p>5.1 Toute demande de modification ou d'annulation doit nous être adressée par écrit.</p>
<p>5.2 Une fois le paiement effectué, les frais d'annulation suivants s'appliquent :</p>
<ul>
  <li>150 € (montant forfaitaire) si l'annulation intervient plus de 30 jours avant le départ ;</li>
  <li>50 % du montant total entre 30 et 21 jours avant le départ ;</li>
  <li>70 % du montant total entre 20 et 8 jours avant le départ ;</li>
  <li>75 % du montant total entre 7 et 2 jours avant le départ ;</li>
  <li>100 % du montant total entre 1 jour et le jour du départ.</li>
</ul>
<p>Ces frais ne sont pas remboursables.</p>
<p>5.3 Les prestations non remboursables auprès de nos partenaires (hôtels, transporteurs...) restent à la charge du client, quel que soit le motif de l'annulation.</p>

<h2>Article 6 — Modification et annulation par l'agence</h2>
<p>6.1 Globale Explore Tours se réserve le droit de modifier ou d'annuler une prestation en cas de circonstance exceptionnelle, indépendante de sa volonté.</p>
<p>6.2 Si l'annulation est de notre fait, l'intégralité des sommes versées vous est remboursée.</p>

<h2>Article 7 — Responsabilité</h2>
<p>7.1 Globale Explore Tours ne saurait être tenue responsable des incidents, retards ou modifications indépendants de sa volonté, ni des agissements de tiers (dégradation, perte ou vol de biens).</p>
<p>7.2 Notre responsabilité ne peut être engagée pour des situations ne correspondant pas aux informations transmises dans le carnet de voyage remis au client.</p>
<p>7.3 Une assistance disponible 24h/24 et 7j/7 pendant le séjour est proposée aux clients ayant souscrit l'option correspondante.</p>
<p>7.4 Notre responsabilité est limitée aux engagements prévus dans les présentes conditions.</p>

<h2>Article 8 — Assurance voyage</h2>
<p>Nous recommandons vivement à chaque client de souscrire une assurance couvrant les risques liés au voyage — annulation, perte de bagages, frais médicaux — avant le départ.</p>

<h2>Article 9 — Litiges et médiation de la consommation</h2>
<p>En cas de différend, le client est invité à adresser une réclamation écrite à Globale Explore Tours. À défaut de réponse satisfaisante dans un délai d'un mois, le client consommateur peut saisir gratuitement le médiateur de la consommation :<br />
La Société Médiation Professionnelle — <a href="http://www.mediateur-consommation-smp.fr" target="_blank" rel="noopener noreferrer">www.mediateur-consommation-smp.fr</a><br />
Alteritae, 5 rue Salvaing, 12000 Rodez</p>

<h2>Article 10 — Droit applicable</h2>
<p>Les présentes conditions générales de vente sont soumises au droit français.</p>
`,
  en: `
<p><em>Last updated: 27 August 2026</em></p>

<h2>Article 1 — Scope</h2>
<p>These terms of sale govern the contractual relationship between Globale Explore Tours and its clients, and apply to every trip we offer.</p>

<h2>Article 2 — Booking</h2>
<p>2.1 You can book with Globale Explore Tours by phone, online, or directly with an advisor.</p>
<p>2.2 We produce up to two free quotes per request. Beyond that, further quote requests may be charged.</p>
<p>2.3 Your booking is confirmed once we receive the requested deposit, or full payment, depending on the terms of the specific trip.</p>

<h2>Article 3 — Validity and pricing</h2>
<p>3.1 A quote issued by Globale Explore Tours is valid for 7 days from its issue date. After that, prices may change (cost of services, exchange rates, availability), particularly for flights. We recommend confirming your quote promptly to secure the price offered.</p>
<p>3.2 Prices shown are in euros and include all applicable taxes.</p>

<h2>Article 4 — Payment</h2>
<p>4.1 Payment can be made by bank transfer, cash, ANCV holiday vouchers, or card, as agreed at booking. Handling fees may apply depending on the payment method chosen.</p>
<p>4.2 If the deposit isn't paid within the stated deadline, Globale Explore Tours reserves the right to cancel the booking.</p>

<h2>Article 5 — Changes and cancellation by the client</h2>
<p>5.1 Any request to change or cancel must be sent to us in writing.</p>
<p>5.2 Once payment has been made, the following cancellation fees apply:</p>
<ul>
  <li>€150 (flat fee) if cancelling more than 30 days before departure;</li>
  <li>50% of the total if cancelling 21 to 30 days before departure;</li>
  <li>70% of the total if cancelling 8 to 20 days before departure;</li>
  <li>75% of the total if cancelling 2 to 7 days before departure;</li>
  <li>100% of the total if cancelling 1 day before departure or on the day itself.</li>
</ul>
<p>These fees are non-refundable.</p>
<p>5.3 Any non-refundable services from our partners (hotels, carriers, etc.) remain payable by the client, regardless of the reason for cancellation.</p>

<h2>Article 6 — Changes and cancellation by the agency</h2>
<p>6.1 Globale Explore Tours reserves the right to change or cancel a service in exceptional circumstances beyond our control.</p>
<p>6.2 If we are the ones cancelling, you will be refunded in full.</p>

<h2>Article 7 — Liability</h2>
<p>7.1 Globale Explore Tours cannot be held liable for incidents, delays or changes beyond our control, nor for third-party actions (damage, loss or theft of belongings).</p>
<p>7.2 Our liability cannot be engaged for situations that don't match the information provided in the travel handbook given to the client.</p>
<p>7.3 24/7 assistance during the trip is available to clients who have subscribed to the corresponding option.</p>
<p>7.4 Our liability is limited to the commitments set out in these terms.</p>

<h2>Article 8 — Travel insurance</h2>
<p>We strongly recommend that every client take out travel insurance covering cancellation, lost luggage and medical expenses before departure.</p>

<h2>Article 9 — Disputes and consumer mediation</h2>
<p>In the event of a dispute, the client is invited to send a written complaint to Globale Explore Tours. If no satisfactory response is received within one month, the consumer may refer the matter free of charge to the consumer mediator:<br />
La Société Médiation Professionnelle — <a href="http://www.mediateur-consommation-smp.fr" target="_blank" rel="noopener noreferrer">www.mediateur-consommation-smp.fr</a><br />
Alteritae, 5 rue Salvaing, 12000 Rodez, France</p>

<h2>Article 10 — Governing law</h2>
<p>These terms of sale are governed by French law.</p>
`,
  es: `
<p><em>Última actualización: 27 de agosto de 2026</em></p>

<h2>Artículo 1 — Ámbito de aplicación</h2>
<p>Estas condiciones generales de venta rigen la relación contractual entre Globale Explore Tours y sus clientes, y se aplican a todos los viajes que ofrecemos.</p>

<h2>Artículo 2 — Reserva</h2>
<p>2.1 Puede reservar con Globale Explore Tours por teléfono, en línea o directamente con un asesor.</p>
<p>2.2 Elaboramos hasta dos presupuestos gratuitos por solicitud. A partir del tercero, las solicitudes adicionales podrán facturarse.</p>
<p>2.3 Su reserva se confirma al recibir el depósito solicitado, o el pago completo, según las condiciones de cada viaje.</p>

<h2>Artículo 3 — Validez y precios</h2>
<p>3.1 Un presupuesto emitido por Globale Explore Tours es válido durante 7 días desde su fecha de emisión. Pasado ese plazo, los precios pueden variar (coste de los servicios, tipo de cambio, disponibilidad), especialmente en el caso de los vuelos. Recomendamos confirmar el presupuesto cuanto antes para asegurar el precio ofrecido.</p>
<p>3.2 Los precios indicados están en euros e incluyen todos los impuestos aplicables.</p>

<h2>Artículo 4 — Pago</h2>
<p>4.1 El pago puede realizarse por transferencia bancaria, efectivo, cheques vacaciones ANCV o tarjeta, según lo acordado en la reserva. Pueden aplicarse gastos de gestión según el método de pago elegido.</p>
<p>4.2 Si el depósito no se abona dentro del plazo indicado, Globale Explore Tours se reserva el derecho de cancelar la reserva.</p>

<h2>Artículo 5 — Modificación y cancelación por parte del cliente</h2>
<p>5.1 Toda solicitud de modificación o cancelación debe enviarse por escrito.</p>
<p>5.2 Una vez efectuado el pago, se aplican los siguientes gastos de cancelación:</p>
<ul>
  <li>150 € (importe fijo) si la cancelación se produce con más de 30 días de antelación;</li>
  <li>50 % del importe total entre 21 y 30 días antes de la salida;</li>
  <li>70 % del importe total entre 8 y 20 días antes de la salida;</li>
  <li>75 % del importe total entre 2 y 7 días antes de la salida;</li>
  <li>100 % del importe total entre 1 día antes de la salida y el día de la salida.</li>
</ul>
<p>Estos gastos no son reembolsables.</p>
<p>5.3 Los servicios no reembolsables por parte de nuestros proveedores (hoteles, transportistas...) corren a cargo del cliente, sea cual sea el motivo de la cancelación.</p>

<h2>Artículo 6 — Modificación y cancelación por parte de la agencia</h2>
<p>6.1 Globale Explore Tours se reserva el derecho de modificar o cancelar un servicio en caso de circunstancias excepcionales ajenas a su voluntad.</p>
<p>6.2 Si la cancelación es por nuestra parte, se le reembolsará la totalidad de las cantidades abonadas.</p>

<h2>Artículo 7 — Responsabilidad</h2>
<p>7.1 Globale Explore Tours no será responsable de incidentes, retrasos o cambios ajenos a su voluntad, ni de las acciones de terceros (deterioro, pérdida o robo de bienes).</p>
<p>7.2 Nuestra responsabilidad no podrá exigirse por situaciones que no coincidan con la información facilitada en el dosier de viaje entregado al cliente.</p>
<p>7.3 La asistencia disponible 24 horas al día, 7 días a la semana durante la estancia se ofrece a los clientes que hayan contratado la opción correspondiente.</p>
<p>7.4 Nuestra responsabilidad se limita a los compromisos establecidos en estas condiciones.</p>

<h2>Artículo 8 — Seguro de viaje</h2>
<p>Recomendamos encarecidamente a todo cliente contratar un seguro que cubra los riesgos del viaje — cancelación, pérdida de equipaje, gastos médicos — antes de la salida.</p>

<h2>Artículo 9 — Litigios y mediación de consumo</h2>
<p>En caso de conflicto, se invita al cliente a enviar una reclamación por escrito a Globale Explore Tours. Si no se recibe una respuesta satisfactoria en el plazo de un mes, el cliente consumidor puede acudir gratuitamente al mediador de consumo:<br />
La Société Médiation Professionnelle — <a href="http://www.mediateur-consommation-smp.fr" target="_blank" rel="noopener noreferrer">www.mediateur-consommation-smp.fr</a><br />
Alteritae, 5 rue Salvaing, 12000 Rodez, Francia</p>

<h2>Artículo 10 — Legislación aplicable</h2>
<p>Estas condiciones generales de venta se rigen por el derecho francés.</p>
`,
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="mb-10 text-center">
        <p className="label-eyebrow text-neutral-400">{META[locale].title}</p>
        <h1 className="font-display mt-2 text-3xl sm:text-4xl">{META[locale].title}</h1>
      </div>
      <div
        className="prose prose-neutral max-w-none prose-headings:font-display prose-h2:mt-10 prose-h2:text-xl"
        dangerouslySetInnerHTML={{ __html: CONTENT[locale] }}
      />
    </main>
  );
}
