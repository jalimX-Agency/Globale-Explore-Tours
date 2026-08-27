import type { Metadata } from "next";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { pageMetadata } from "@/lib/seo";

const META = {
  fr: { title: "Mentions légales", description: "Informations légales sur Globale Explore Tours, SASU, et sur l'édition de ce site." },
  en: { title: "Legal notice", description: "Legal information about Globale Explore Tours, SASU, and about this site's publisher." },
  es: { title: "Aviso legal", description: "Información legal sobre Globale Explore Tours, SASU, y sobre la editora de este sitio." },
} as const satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return pageMetadata({ locale, path: "/mentions-legales", ...META[locale] });
}

// Company identity below is sourced from the company's official Kbis extract (Greffe du
// Tribunal de Commerce de Valenciennes, RCS 998 961 999, à jour au 29/01/2026) — do not
// hand-edit these facts without an updated extract. The travel-agency-specific disclosures
// required by Code du Tourisme Art. L211-18 (immatriculation Atout France / IM number,
// garantie financière, assurance RCP) are deliberately omitted for now: the company confirmed
// it does not yet hold them, and publishing a false or "en cours" claim here would be worse
// than omitting the section — this still needs to be resolved as a business compliance matter,
// independent of the website, before the company actively sells "forfaits touristiques".
const CONTENT: Record<Locale, string> = {
  fr: `
<h2>Éditeur du site</h2>
<p>
  <strong>Globale Explore Tours</strong><br />
  Société par actions simplifiée à associé unique (SASU) au capital de 2 500 €<br />
  Immatriculée au Registre du Commerce et des Sociétés de Valenciennes sous le numéro 998 961 999<br />
  Siège social : 5 avenue du Sénateur Girard, 59300 Valenciennes, France<br />
  Directeur de la publication : Mourad Chentit, Président<br />
  E-mail : contact@globaleexploretours.com<br />
  Téléphone : +33 6 67 58 64 62
</p>

<h2>Hébergement</h2>
<p>
  Ce site est hébergé par :<br />
  <strong>Vercel Inc.</strong><br />
  340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
  www.vercel.com
</p>

<h2>Propriété intellectuelle</h2>
<p>L'ensemble des contenus présents sur ce site (textes, photographies, illustrations, logos) est protégé par le droit d'auteur et reste la propriété exclusive de Globale Explore Tours ou de ses partenaires, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.</p>

<h2>Limitation de responsabilité</h2>
<p>Globale Explore Tours s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, sans pouvoir garantir l'exhaustivité de ces informations. Les prix, disponibilités et itinéraires affichés sont donnés à titre indicatif et sont confirmés lors de l'établissement d'un devis personnalisé.</p>

<h2>Droit applicable</h2>
<p>Le présent site et les présentes mentions légales sont soumis au droit français. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence des tribunaux du ressort de Valenciennes, sauf disposition légale contraire applicable aux consommateurs.</p>
`,
  en: `
<h2>Site publisher</h2>
<p>
  <strong>Globale Explore Tours</strong><br />
  French simplified joint-stock company with a sole shareholder (SASU), share capital of €2,500<br />
  Registered with the Valenciennes Trade and Companies Register under number 998 961 999<br />
  Registered office: 5 avenue du Sénateur Girard, 59300 Valenciennes, France<br />
  Publication director: Mourad Chentit, President<br />
  Email: contact@globaleexploretours.com<br />
  Phone: +33 6 67 58 64 62
</p>

<h2>Hosting</h2>
<p>
  This site is hosted by:<br />
  <strong>Vercel Inc.</strong><br />
  340 S Lemon Ave #4133, Walnut, CA 91789, United States<br />
  www.vercel.com
</p>

<h2>Intellectual property</h2>
<p>All content on this site (text, photographs, illustrations, logos) is protected by copyright and remains the exclusive property of Globale Explore Tours or its partners, unless stated otherwise. Any reproduction, representation or distribution, in whole or in part, without prior authorisation is prohibited.</p>

<h2>Limitation of liability</h2>
<p>Globale Explore Tours strives to keep the information on this site accurate and up to date, but cannot guarantee its completeness. Prices, availability and itineraries shown are indicative and are confirmed when a personalised quote is issued.</p>

<h2>Governing law</h2>
<p>This site and this legal notice are governed by French law. Any dispute relating to their interpretation or performance falls under the jurisdiction of the courts of Valenciennes, subject to any mandatory legal provisions applicable to consumers.</p>
`,
  es: `
<h2>Editor del sitio</h2>
<p>
  <strong>Globale Explore Tours</strong><br />
  Sociedad por acciones simplificada con socio único (SASU), capital social de 2.500 €<br />
  Inscrita en el Registro Mercantil de Valenciennes con el número 998 961 999<br />
  Domicilio social: 5 avenue du Sénateur Girard, 59300 Valenciennes, Francia<br />
  Director de la publicación: Mourad Chentit, Presidente<br />
  Correo electrónico: contact@globaleexploretours.com<br />
  Teléfono: +33 6 67 58 64 62
</p>

<h2>Alojamiento</h2>
<p>
  Este sitio está alojado por:<br />
  <strong>Vercel Inc.</strong><br />
  340 S Lemon Ave #4133, Walnut, CA 91789, Estados Unidos<br />
  www.vercel.com
</p>

<h2>Propiedad intelectual</h2>
<p>Todo el contenido de este sitio (textos, fotografías, ilustraciones, logotipos) está protegido por derechos de autor y sigue siendo propiedad exclusiva de Globale Explore Tours o de sus socios, salvo indicación contraria. Queda prohibida cualquier reproducción, representación o difusión, total o parcial, sin autorización previa.</p>

<h2>Limitación de responsabilidad</h2>
<p>Globale Explore Tours se esfuerza por mantener la información de este sitio exacta y actualizada, sin poder garantizar su exhaustividad. Los precios, disponibilidad e itinerarios mostrados son indicativos y se confirman al emitirse un presupuesto personalizado.</p>

<h2>Legislación aplicable</h2>
<p>Este sitio y este aviso legal se rigen por el derecho francés. Cualquier controversia relativa a su interpretación o ejecución será competencia de los tribunales de Valenciennes, salvo disposición legal imperativa aplicable a los consumidores.</p>
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
