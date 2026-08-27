import type { Metadata } from "next";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { pageMetadata } from "@/lib/seo";

const META = {
  fr: { title: "Politique de confidentialité", description: "Comment Globale Explore Tours collecte, utilise et protège vos données personnelles, conformément au RGPD." },
  en: { title: "Privacy Policy", description: "How Globale Explore Tours collects, uses and protects your personal data, in line with the GDPR." },
  es: { title: "Política de privacidad", description: "Cómo Globale Explore Tours recopila, utiliza y protege sus datos personales, conforme al RGPD." },
} as const satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return pageMetadata({ locale, path: "/politique-de-confidentialite", ...META[locale] });
}

const CONTENT: Record<Locale, string> = {
  fr: `
<p><em>Dernière mise à jour : 27 août 2026</em></p>

<h2>1. Responsable du traitement</h2>
<p>Le responsable du traitement des données collectées sur ce site est :<br />
<strong>Globale Explore Tours</strong>, SASU au capital de 2 500 €, immatriculée au RCS de Valenciennes sous le numéro 998 961 999, dont le siège social est situé 5 avenue du Sénateur Girard, 59300 Valenciennes, France.<br />
Contact : contact@globaleexploretours.com</p>

<h2>2. Données que nous collectons</h2>
<p>Nous collectons des données personnelles uniquement lorsque vous nous les transmettez volontairement, via :</p>
<ul>
  <li><strong>Le formulaire de demande de voyage</strong> : nom, prénom, e-mail, téléphone, dates souhaitées, nombre de voyageurs, budget indicatif, destinations d'intérêt, et tout message associé.</li>
  <li><strong>Le formulaire de contact</strong> : nom, e-mail, téléphone (facultatif), sujet et message.</li>
</ul>
<p>Nous ne collectons aucune donnée bancaire ou de paiement — le site ne propose pas de réservation en ligne payante.</p>

<h2>3. Pourquoi nous utilisons ces données</h2>
<p>Ces données sont utilisées exclusivement pour :</p>
<ul>
  <li>Répondre à votre demande et vous adresser une proposition de voyage personnalisée ;</li>
  <li>Assurer le suivi de votre dossier avant, pendant et après votre voyage ;</li>
  <li>Améliorer la qualité de nos échanges et de nos services.</li>
</ul>
<p>La base légale de ce traitement est l'exécution de mesures précontractuelles prises à votre demande (article 6.1.b du RGPD), ou notre intérêt légitime à répondre aux demandes qui nous sont adressées.</p>

<h2>4. Destinataires de vos données</h2>
<p>Vos données sont accessibles à notre équipe, ainsi qu'à des prestataires techniques strictement nécessaires au fonctionnement du site (envoi des e-mails de confirmation, hébergement du site et de la base de données), tous soumis à une obligation de confidentialité et n'utilisant vos données que pour exécuter la prestation qui leur est confiée.</p>
<p>Vos données ne sont jamais vendues ni cédées à des fins commerciales à des tiers.</p>

<h2>5. Durée de conservation</h2>
<p>Les données d'une demande qui n'aboutit pas à un voyage sont conservées 3 ans à compter de notre dernier échange, conformément aux recommandations de la CNIL en matière de prospection commerciale. Les données liées à un voyage réservé sont conservées le temps nécessaire au respect de nos obligations comptables et légales.</p>

<h2>6. Cookies et mesure d'audience</h2>
<p>Ce site peut utiliser Google Analytics pour mesurer la fréquentation du site de façon anonymisée. Aucun cookie publicitaire ou de traçage tiers n'est utilisé. Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies.</p>

<h2>7. Vos droits</h2>
<p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition concernant vos données, ainsi que d'un droit à la portabilité. Pour exercer ces droits, contactez-nous à contact@globaleexploretours.com.</p>
<p>Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr) si vous estimez que le traitement de vos données n'est pas conforme à la réglementation.</p>

<h2>8. Sécurité</h2>
<p>Nous mettons en œuvre les mesures techniques et organisationnelles raisonnables pour protéger vos données contre tout accès, modification ou divulgation non autorisés.</p>
`,
  en: `
<p><em>Last updated: 27 August 2026</em></p>

<h2>1. Data controller</h2>
<p>The controller responsible for data collected on this site is:<br />
<strong>Globale Explore Tours</strong>, a French SASU with capital of €2,500, registered with the Valenciennes Trade and Companies Register under number 998 961 999, with its registered office at 5 avenue du Sénateur Girard, 59300 Valenciennes, France.<br />
Contact: contact@globaleexploretours.com</p>

<h2>2. Data we collect</h2>
<p>We only collect personal data that you voluntarily provide, through:</p>
<ul>
  <li><strong>The trip request form</strong>: first and last name, email, phone number, preferred dates, number of travellers, indicative budget, destinations of interest, and any accompanying message.</li>
  <li><strong>The contact form</strong>: name, email, phone (optional), subject and message.</li>
</ul>
<p>We do not collect any banking or payment data — the site does not offer paid online booking.</p>

<h2>3. Why we use this data</h2>
<p>This data is used exclusively to:</p>
<ul>
  <li>Respond to your request and send you a personalised trip proposal;</li>
  <li>Follow up on your file before, during and after your trip;</li>
  <li>Improve the quality of our communication and services.</li>
</ul>
<p>The legal basis for this processing is the performance of pre-contractual measures taken at your request (GDPR Article 6.1.b), or our legitimate interest in responding to enquiries addressed to us.</p>

<h2>4. Who receives your data</h2>
<p>Your data is accessible to our team, as well as to technical service providers strictly necessary for the site to function (sending confirmation emails, hosting the site and its database), all bound by a confidentiality obligation and only using your data to carry out the service entrusted to them.</p>
<p>Your data is never sold or transferred to third parties for commercial purposes.</p>

<h2>5. Retention period</h2>
<p>Data from a request that doesn't lead to a booked trip is kept for 3 years from our last exchange, in line with the French data protection authority's (CNIL) guidance on commercial prospecting. Data linked to a booked trip is kept for as long as required by our accounting and legal obligations.</p>

<h2>6. Cookies and analytics</h2>
<p>This site may use Google Analytics to measure site traffic on an anonymised basis. No third-party advertising or tracking cookies are used. You can configure your browser at any time to refuse cookies.</p>

<h2>7. Your rights</h2>
<p>Under the GDPR, you have the right to access, rectify, erase, restrict and object to the processing of your data, as well as a right to data portability. To exercise these rights, contact us at contact@globaleexploretours.com.</p>
<p>You also have the right to lodge a complaint with the CNIL (www.cnil.fr) if you believe your data is not being processed in accordance with the regulations.</p>

<h2>8. Security</h2>
<p>We implement reasonable technical and organisational measures to protect your data against unauthorised access, alteration or disclosure.</p>
`,
  es: `
<p><em>Última actualización: 27 de agosto de 2026</em></p>

<h2>1. Responsable del tratamiento</h2>
<p>El responsable del tratamiento de los datos recogidos en este sitio es:<br />
<strong>Globale Explore Tours</strong>, SASU con un capital de 2.500 €, inscrita en el Registro Mercantil de Valenciennes con el número 998 961 999, con domicilio social en 5 avenue du Sénateur Girard, 59300 Valenciennes, Francia.<br />
Contacto: contact@globaleexploretours.com</p>

<h2>2. Datos que recopilamos</h2>
<p>Solo recopilamos datos personales que usted nos facilita voluntariamente, a través de:</p>
<ul>
  <li><strong>El formulario de solicitud de viaje</strong>: nombre, apellidos, correo electrónico, teléfono, fechas deseadas, número de viajeros, presupuesto orientativo, destinos de interés y cualquier mensaje asociado.</li>
  <li><strong>El formulario de contacto</strong>: nombre, correo electrónico, teléfono (opcional), asunto y mensaje.</li>
</ul>
<p>No recopilamos ningún dato bancario o de pago — el sitio no ofrece reserva de pago en línea.</p>

<h2>3. Por qué usamos estos datos</h2>
<p>Estos datos se utilizan exclusivamente para:</p>
<ul>
  <li>Responder a su solicitud y enviarle una propuesta de viaje personalizada;</li>
  <li>Dar seguimiento a su expediente antes, durante y después de su viaje;</li>
  <li>Mejorar la calidad de nuestra comunicación y servicios.</li>
</ul>
<p>La base legal de este tratamiento es la ejecución de medidas precontractuales adoptadas a petición suya (artículo 6.1.b del RGPD), o nuestro interés legítimo en responder a las solicitudes que se nos dirigen.</p>

<h2>4. Destinatarios de sus datos</h2>
<p>Sus datos son accesibles para nuestro equipo, así como para proveedores técnicos estrictamente necesarios para el funcionamiento del sitio (envío de correos de confirmación, alojamiento del sitio y de la base de datos), todos ellos sujetos a una obligación de confidencialidad y que solo utilizan sus datos para prestar el servicio que se les ha encomendado.</p>
<p>Sus datos nunca se venden ni se ceden a terceros con fines comerciales.</p>

<h2>5. Plazo de conservación</h2>
<p>Los datos de una solicitud que no culmina en un viaje reservado se conservan durante 3 años desde nuestro último contacto, conforme a las recomendaciones de la autoridad francesa de protección de datos (CNIL) en materia de prospección comercial. Los datos vinculados a un viaje reservado se conservan durante el tiempo necesario para cumplir con nuestras obligaciones contables y legales.</p>

<h2>6. Cookies y medición de audiencia</h2>
<p>Este sitio puede utilizar Google Analytics para medir la afluencia al sitio de forma anonimizada. No se utiliza ninguna cookie publicitaria o de rastreo de terceros. Puede configurar su navegador en cualquier momento para rechazar las cookies.</p>

<h2>7. Sus derechos</h2>
<p>De acuerdo con el RGPD, usted tiene derecho de acceso, rectificación, supresión, limitación y oposición respecto a sus datos, así como derecho a la portabilidad. Para ejercer estos derechos, contáctenos en contact@globaleexploretours.com.</p>
<p>También tiene derecho a presentar una reclamación ante la CNIL (www.cnil.fr) si considera que el tratamiento de sus datos no se ajusta a la normativa.</p>

<h2>8. Seguridad</h2>
<p>Aplicamos medidas técnicas y organizativas razonables para proteger sus datos frente a accesos, modificaciones o divulgaciones no autorizados.</p>
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
