export {};

// New blog post: "Croisières en petit navire : le guide complet pour bien choisir sa
// croisière" — matches the site's real BlogPost model (HTML content, rendered via
// dangerouslySetInnerHTML) and mirrors the exact style/length of the 2 existing posts
// (quand-partir-au-maroc, grande-migration-kenya-quand-voir): a bolded answer-first summary
// paragraph, then sequential H2 sections, ~500 words. Internally links to the 6 real cruise
// trips and the /experience-types/croisieres landing page added earlier this session.
//   npx tsx scripts/seed-blog-croisieres.ts

process.loadEnvFile(".env");

async function main() {
  const { db } = await import("../src/lib/db");
  const R2 = process.env.NEXT_PUBLIC_R2_URL!;

  const slug = "croisiere-petit-navire-guide";
  const existing = await db.blogPost.findUnique({ where: { slug } });
  if (existing) {
    console.log("Blog post already exists — nothing to do.");
    await db.$disconnect();
    return;
  }

  const imageUrl = `${R2}/blog/${slug}-hero.jpg`;
  const res = await fetch(imageUrl, { method: "HEAD" }).catch(() => null);
  if (!res || !res.ok) throw new Error(`Hero image not live yet: ${imageUrl} — run scripts/upload-images-blog-croisieres.ts first.`);

  const maxOrder = await db.blogPost.findFirst({ orderBy: { order: "desc" }, select: { order: true } });

  await db.blogPost.create({
    data: {
      slug,
      category: "Croisières",
      author: "Globale Explore Tours",
      image: imageUrl,
      featured: false,
      order: (maxOrder?.order ?? -1) + 1,

      title: "Croisières en petit navire : le guide complet pour bien choisir sa croisière",
      titleEn: "Small-Ship Cruises: The Complete Guide to Choosing Your Cruise",
      titleEs: "Cruceros en pequeño barco: la guía completa para elegir bien su crucero",

      excerpt: "Un grand paquebot et un petit navire ne proposent pas le même voyage — voici comment choisir celui qui correspond vraiment à ce que vous cherchez.",
      excerptEn: "A large liner and a small ship offer two very different trips — here's how to choose the one that actually matches what you're looking for.",
      excerptEs: "Un gran transatlántico y un pequeño barco no ofrecen el mismo viaje — así se elige el que realmente se ajusta a lo que busca.",

      content: `<p><strong>En résumé : un petit navire ou un voilier de moins de deux cents passagers accède à des baies, des fjords et des récifs qu'un grand paquebot ne pourra jamais approcher</strong>, au prix d'un choix plus restreint d'animations à bord. Le bon choix dépend moins de la destination que du rythme de voyage recherché — mouiller chaque soir dans un endroit différent, ou profiter d'un hôtel flottant aux services complets.</p>

<h2>Grand paquebot ou petit navire : quelle différence concrète ?</h2>
<p>Un paquebot de croisière classique transporte souvent plusieurs milliers de passagers et reste limité aux ports en eau profonde équipés pour l'accueillir, ce qui impose un itinéraire fixe entre quelques grandes escales connues. Un petit navire ou un voilier, généralement en dessous de deux cents passagers, tire un tirant d'eau bien plus faible : il peut s'approcher des parois d'un fjord, mouiller dans une crique sans quai, ou accoster dans un village de pêcheurs qu'aucun géant des mers n'atteindra jamais. La contrepartie est un choix d'activités à bord plus restreint — pas de mur d'escalade ni de patinoire — au profit d'un contact bien plus direct avec chaque escale.</p>

<h2>Les régions où le petit navire change tout</h2>
<p>Certaines destinations rendent cette différence particulièrement flagrante. Dans les <a href="/fr/destinations/europe/norvege/norvege-croisiere-fjords">fjords norvégiens</a>, un navire d'expédition peut naviguer au plus près des parois du Geirangerfjord, classé à l'UNESCO, là où un paquebot doit rester au large. Dans la <a href="/fr/destinations/asie-du-sud-est/vietnam/vietnam-croisiere-halong">baie d'Ha Long</a>, une jonque traditionnelle se faufile entre les îlots calcaires et rejoint des criques inaccessibles autrement. Aux <a href="/fr/destinations/caraibes/sainte-lucie/saintelucie-croisiere-caraibes">Caraïbes</a>, un voilier mouille directement face aux Pitons de Sainte-Lucie plutôt que d'accoster dans un grand port touristique. La même logique s'applique en <a href="/fr/destinations/afrique/egypte/egypte-croisiere-mer-rouge">mer Rouge</a> pour rejoindre des récifs isolés, en <a href="/fr/destinations/europe/grece/grece-croisiere-mediterranee">mer Égée</a> pour relier plusieurs îles en une semaine, ou le long de la <a href="/fr/destinations/amerique-du-nord/etats-unis/etats-unis-croisiere-nouvelle-angleterre">côte du Maine</a>, trop découpée pour l'automobile.</p>

<h2>Comment choisir selon la saison</h2>
<p>La fenêtre idéale varie fortement selon la région. Les fjords norvégiens se visitent de préférence entre mai et septembre, quand les jours les plus longs laissent le temps d'explorer chaque mouillage. Les Caraïbes et la mer Rouge, à l'inverse, se prêtent surtout à une croisière d'hiver, de décembre à avril, en dehors de la saison des ouragans. La Méditerranée reste accessible de mai à octobre, tandis qu'une croisière au Vietnam se programme idéalement d'octobre à avril, avant l'arrivée de la chaleur et des pluies de mousson.</p>

<h2>Ce qu'il faut prévoir à bord</h2>
<p>Un petit navire signifie généralement des cabines plus simples qu'un paquebot cinq étoiles, mais aussi une équipe bien plus disponible et un programme d'excursions pensé au jour le jour selon la météo réelle plutôt qu'un planning figé des mois à l'avance. Prévoir des vêtements superposables plutôt que des tenues de soirée, une paire de chaussures d'eau pour les débarquements en annexe, et une certaine tolérance à l'imprévu : c'est souvent ce changement de plan de dernière minute, pour profiter d'une fenêtre météo idéale, qui donne les meilleurs souvenirs.</p>

<p>Chacune de ces croisières se construit sur-mesure, avec un itinéraire adapté à votre rythme plutôt qu'un programme standard. <a href="/fr/experience-types/croisieres">Découvrez l'ensemble de nos croisières</a> ou <a href="/fr/faire-une-demande">contactez-nous</a> pour composer la vôtre.</p>`,

      contentEn: `<p><strong>In short: a small ship or sailboat carrying under two hundred passengers can reach bays, fjords, and reefs a large liner will never get close to</strong>, at the cost of a more limited range of onboard entertainment. The right choice depends less on the destination than on the pace of travel you're after — anchoring somewhere new every evening, or enjoying a full-service floating hotel.</p>

<h2>Large liner or small ship: what's the real difference?</h2>
<p>A classic cruise liner often carries several thousand passengers and stays confined to deep-water ports equipped to receive it, which forces a fixed itinerary between a handful of well-known stops. A small ship or sailboat, generally under two hundred passengers, draws far less water: it can sail close to a fjord's walls, anchor in a cove with no pier, or dock in a fishing village no sea giant will ever reach. The trade-off is a narrower range of onboard activities — no climbing wall or ice rink — in exchange for a far more direct connection to each stop.</p>

<h2>The regions where a small ship changes everything</h2>
<p>Some destinations make this difference especially clear. In the <a href="/en/destinations/europe/norvege/norvege-croisiere-fjords">Norwegian fjords</a>, an expedition ship can sail right up to the walls of the UNESCO-listed Geirangerfjord, where a liner has to stay offshore. In <a href="/en/destinations/asie-du-sud-est/vietnam/vietnam-croisiere-halong">Ha Long Bay</a>, a traditional junk boat threads between limestone islets and reaches coves otherwise unreachable. In the <a href="/en/destinations/caraibes/sainte-lucie/saintelucie-croisiere-caraibes">Caribbean</a>, a sailboat anchors directly facing Saint Lucia's Pitons rather than docking at a large tourist port. The same logic applies in the <a href="/en/destinations/afrique/egypte/egypte-croisiere-mer-rouge">Red Sea</a> for reaching isolated reefs, in the <a href="/en/destinations/europe/grece/grece-croisiere-mediterranee">Aegean Sea</a> for linking several islands in a week, or along the <a href="/en/destinations/amerique-du-nord/etats-unis/etats-unis-croisiere-nouvelle-angleterre">Maine coast</a>, too jagged for a car.</p>

<h2>How to choose by season</h2>
<p>The ideal window varies significantly by region. The Norwegian fjords are best visited between May and September, when the longest days leave time to explore each anchorage. The Caribbean and Red Sea, by contrast, suit a winter cruise best, from December to April, outside hurricane season. The Mediterranean stays accessible from May to October, while a Vietnam cruise is best planned from October to April, before the heat and monsoon rains arrive.</p>

<h2>What to expect on board</h2>
<p>A small ship generally means simpler cabins than a five-star liner, but also a far more available crew and an excursion programme planned day by day around real weather rather than a fixed schedule set months in advance. Pack layerable clothing rather than formal evening wear, a pair of water shoes for tender landings, and a certain tolerance for last-minute change — it's often that spontaneous shift in plan, to catch an ideal weather window, that makes for the best memories.</p>

<p>Every one of these cruises is built tailor-made, with an itinerary shaped around your pace rather than a standard programme. <a href="/en/experience-types/croisieres">Discover all our cruises</a> or <a href="/en/faire-une-demande">get in touch</a> to build your own.</p>`,

      contentEs: `<p><strong>En resumen: un pequeño barco o velero con menos de doscientos pasajeros puede llegar a bahías, fiordos y arrecifes a los que un gran transatlántico nunca podrá acercarse</strong>, a cambio de una oferta de entretenimiento a bordo más limitada. La elección correcta depende menos del destino que del ritmo de viaje buscado — fondear en un lugar distinto cada noche, o disfrutar de un hotel flotante con todos los servicios.</p>

<h2>Gran transatlántico o pequeño barco: ¿cuál es la diferencia real?</h2>
<p>Un crucero clásico suele transportar a varios miles de pasajeros y permanece limitado a puertos de aguas profundas equipados para recibirlo, lo que impone un itinerario fijo entre unas pocas escalas conocidas. Un pequeño barco o velero, generalmente por debajo de doscientos pasajeros, tiene un calado mucho menor: puede navegar cerca de las paredes de un fiordo, fondear en una cala sin muelle, o atracar en un pueblo de pescadores al que ningún gigante de los mares llegará jamás. La contrapartida es una oferta de actividades a bordo más reducida — sin muro de escalada ni pista de hielo — a cambio de un contacto mucho más directo con cada escala.</p>

<h2>Las regiones donde el pequeño barco lo cambia todo</h2>
<p>Algunos destinos hacen esta diferencia especialmente evidente. En los <a href="/es/destinations/europe/norvege/norvege-croisiere-fjords">fiordos noruegos</a>, un buque de expedición puede navegar hasta las mismas paredes del Geirangerfjord, declarado por la UNESCO, donde un transatlántico debe permanecer mar adentro. En la <a href="/es/destinations/asie-du-sud-est/vietnam/vietnam-croisiere-halong">bahía de Ha Long</a>, un junco tradicional se desliza entre los islotes calizos y llega a calas inaccesibles de otro modo. En el <a href="/es/destinations/caraibes/sainte-lucie/saintelucie-croisiere-caraibes">Caribe</a>, un velero fondea directamente frente a los Pitones de Santa Lucía en lugar de atracar en un gran puerto turístico. La misma lógica se aplica en el <a href="/es/destinations/afrique/egypte/egypte-croisiere-mer-rouge">mar Rojo</a> para llegar a arrecifes aislados, en el <a href="/es/destinations/europe/grece/grece-croisiere-mediterranee">mar Egeo</a> para enlazar varias islas en una semana, o a lo largo de la <a href="/es/destinations/amerique-du-nord/etats-unis/etats-unis-croisiere-nouvelle-angleterre">costa de Maine</a>, demasiado recortada para el automóvil.</p>

<h2>Cómo elegir según la temporada</h2>
<p>La ventana ideal varía notablemente según la región. Los fiordos noruegos se visitan preferiblemente entre mayo y septiembre, cuando los días más largos dejan tiempo para explorar cada fondeadero. El Caribe y el mar Rojo, en cambio, se prestan sobre todo a un crucero de invierno, de diciembre a abril, fuera de la temporada de huracanes. El Mediterráneo sigue siendo accesible de mayo a octubre, mientras que un crucero por Vietnam se programa idealmente de octubre a abril, antes de que lleguen el calor y las lluvias del monzón.</p>

<h2>Qué esperar a bordo</h2>
<p>Un pequeño barco suele significar camarotes más sencillos que un transatlántico de cinco estrellas, pero también una tripulación mucho más disponible y un programa de excursiones planificado día a día según el clima real en lugar de un calendario fijado con meses de antelación. Conviene llevar ropa por capas en lugar de vestimenta formal de noche, un par de zapatos de agua para los desembarcos en lancha auxiliar, y cierta tolerancia a los cambios de última hora — a menudo es ese cambio de planes espontáneo, para aprovechar una ventana climática ideal, el que deja los mejores recuerdos.</p>

<p>Cada uno de estos cruceros se diseña a medida, con un itinerario adaptado a su ritmo en lugar de un programa estándar. <a href="/es/experience-types/croisieres">Descubra todos nuestros cruceros</a> o <a href="/es/faire-une-demande">contáctenos</a> para componer el suyo.</p>`,
    },
  });

  console.log(`Created blog post '${slug}'.`);
  await db.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
