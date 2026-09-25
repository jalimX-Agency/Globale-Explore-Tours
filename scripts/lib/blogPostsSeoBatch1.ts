// Three trilingual evergreen guides targeting high-volume "when/where to go" searches, in the
// same format as the existing posts (see scripts/seed-blog-croisieres.ts): a bolded answer-first
// summary, sequential H2 sections, plus a comparison table — the part AI answer engines lift
// most readily. Internal links are written without a locale prefix; the seed script adds
// /fr, /en or /es per language version (the croisières post shipped without them once — see
// scripts/fix-blog-croisieres-links.ts). Every link points at a trip or page that exists.
// Hero images reuse photos already live on the CDN, so no upload step is needed.

export type SeoBlogPost = {
  slug: string;
  category: string;
  heroPath: string; // path under NEXT_PUBLIC_R2_URL
  title: string;
  titleEn: string;
  titleEs: string;
  excerpt: string;
  excerptEn: string;
  excerptEs: string;
  content: string;
  contentEn: string;
  contentEs: string;
};

const JAPAN: SeoBlogPost = {
  slug: "quand-partir-au-japon",
  category: "Japon",
  heroPath: "tours/japon-kyoto-tokyo.jpg",
  title: "Quand partir au Japon : le guide saison par saison",
  titleEn: "When to Visit Japan: A Season-by-Season Guide",
  titleEs: "Cuándo viajar a Japón: la guía estación por estación",
  excerpt:
    "Cerisiers en fleurs, érables rouges, neige des Alpes japonaises : la meilleure période pour partir au Japon dépend de ce que vous voulez voir. Notre guide.",
  excerptEn:
    "Cherry blossom, red maples, snow in the Japanese Alps: the best time to visit Japan depends on what you want to see. Our season-by-season guide.",
  excerptEs:
    "Cerezos en flor, arces rojos, nieve en los Alpes japoneses: la mejor época para viajar a Japón depende de lo que quiera ver. Nuestra guía.",
  content: `<p><strong>En résumé : les deux meilleures périodes pour partir au Japon sont le printemps (fin mars à mi-mai) et l'automne (mi-octobre à début décembre)</strong>, avec des températures douces et les deux grands spectacles naturels du pays — les cerisiers en fleurs puis les érables rouges. L'hiver est une excellente alternative, plus calme et souvent ensoleillé. Mieux vaut éviter la saison des pluies (de début juin à mi-juillet) et la chaleur humide d'août, qui coïncide avec le pic de la saison des typhons.</p>

<h2>Le Japon en un coup d'œil, saison par saison</h2>
<table>
<thead><tr><th>Période</th><th>Ce qui vous attend</th><th>À savoir</th></tr></thead>
<tbody>
<tr><td>Fin mars – avril</td><td>Floraison des cerisiers (sakura) à Tokyo et Kyoto, 12 à 20 °C</td><td>Période la plus demandée : réservez tôt</td></tr>
<tr><td>Mai</td><td>Verdure, ciel dégagé, idéal pour la randonnée</td><td>Évitez la Golden Week (29 avril – 5 mai), très fréquentée</td></tr>
<tr><td>Juin – mi-juillet</td><td>Saison des pluies (tsuyu), jardins d'hortensias</td><td>Pluie fréquente, mais peu de visiteurs</td></tr>
<tr><td>Mi-juillet – septembre</td><td>Été chaud et humide, souvent plus de 30 °C, festivals d'été</td><td>Saison des typhons, surtout en août et septembre</td></tr>
<tr><td>Mi-octobre – début décembre</td><td>Feuillages d'automne (momiji), pic à Kyoto vers la deuxième quinzaine de novembre</td><td>La deuxième meilleure période de l'année</td></tr>
<tr><td>Décembre – février</td><td>Froid sec, ciel souvent bleu, neige dans les Alpes et à Hokkaido</td><td>Moins de monde, sources chaudes (onsen) à leur meilleur</td></tr>
</tbody>
</table>

<h2>Le printemps : la saison des cerisiers</h2>
<p>La floraison des cerisiers commence au sud du pays dès la fin mars et remonte progressivement vers le nord. À Tokyo et à Kyoto, le pic tombe généralement entre la fin mars et la première semaine d'avril, et ne dure qu'une dizaine de jours. C'est la période la plus prisée de l'année : hébergements et trains se remplissent des mois à l'avance. Mai offre un compromis précieux, avec des températures agréables et des sentiers dégagés, à condition d'éviter la Golden Week, la semaine de congés nationaux qui court du 29 avril au 5 mai.</p>

<h2>L'été : pluies, chaleur et typhons</h2>
<p>La saison des pluies touche la majeure partie de l'archipel de début juin à mi-juillet. Elle n'empêche pas de voyager — les temples et jardins de Kyoto sont superbes sous la pluie et bien moins fréquentés — mais elle demande de la souplesse. De mi-juillet à septembre, la chaleur devient souvent étouffante en ville, et la saison des typhons culmine en août et en septembre. C'est en revanche la bonne saison pour marcher en altitude, où la fraîcheur rend les sentiers des Alpes japonaises bien plus confortables.</p>

<h2>L'automne : l'autre grande saison</h2>
<p>Dès la mi-octobre, les érables prennent leurs couleurs dans les montagnes, puis la vague descend vers les villes. À Kyoto, le pic des feuillages se situe généralement dans la deuxième quinzaine de novembre, et l'air sec et doux rend les longues journées de visite très agréables. C'est aussi l'une des meilleures périodes pour parcourir les anciens chemins de pèlerinage du Kumano Kodo, que nous intégrons à notre voyage <a href="/destinations/asie/japon/japon-naoshima-kumanokodo">Naoshima et le Kumano Kodo</a>.</p>

<h2>L'hiver : le Japon le plus paisible</h2>
<p>De décembre à février, le temps est froid mais souvent ensoleillé sur la côte Pacifique, et les grands sites retrouvent leur calme. C'est le moment idéal pour les bains chauds en plein air et pour les villages de montagne sous la neige, comme les fermes au toit de chaume de Shirakawa-go, illuminées certains soirs de janvier et de février — une étape de notre voyage <a href="/destinations/asie/japon/japon-alpes-shirakawago">dans les Alpes japonaises</a>. Seule la période du Nouvel An, du 29 décembre au 3 janvier, voit beaucoup de commerces fermer.</p>

<h2>Notre conseil pour un premier voyage</h2>
<p>Pour une première découverte, visez avril, mai, octobre ou novembre, et prévoyez au moins deux semaines pour relier Tokyo, les Alpes et Kyoto sans vous presser. Notre itinéraire <a href="/destinations/asie/japon/japon-kyoto-tokyo">de Kyoto à Tokyo</a> suit exactement ce rythme, et chaque étape peut être adaptée à vos dates. Retrouvez tous nos <a href="/destinations/asie/japon">voyages au Japon</a>, ou <a href="/faire-une-demande">décrivez-nous votre projet</a> pour recevoir une proposition sur-mesure sous 24h.</p>`,
  contentEn: `<p><strong>In short: the two best times to visit Japan are spring (late March to mid-May) and autumn (mid-October to early December)</strong>, with mild temperatures and the country's two great natural shows — cherry blossom, then red maples. Winter is an excellent alternative, quieter and often sunny. It's best to avoid the rainy season (early June to mid-July) and the humid heat of August, which coincides with the peak of typhoon season.</p>

<h2>Japan at a glance, season by season</h2>
<table>
<thead><tr><th>When</th><th>What to expect</th><th>Good to know</th></tr></thead>
<tbody>
<tr><td>Late March – April</td><td>Cherry blossom (sakura) in Tokyo and Kyoto, 12–20 °C</td><td>The busiest season: book early</td></tr>
<tr><td>May</td><td>Green landscapes, clear skies, ideal for hiking</td><td>Avoid Golden Week (29 April – 5 May), which is very busy</td></tr>
<tr><td>June – mid-July</td><td>Rainy season (tsuyu), hydrangea gardens</td><td>Frequent rain, but few visitors</td></tr>
<tr><td>Mid-July – September</td><td>Hot, humid summer, often above 30 °C, summer festivals</td><td>Typhoon season, especially August and September</td></tr>
<tr><td>Mid-October – early December</td><td>Autumn leaves (momiji), peaking in Kyoto in the second half of November</td><td>The second-best time of year</td></tr>
<tr><td>December – February</td><td>Cold and dry, often blue skies, snow in the Alps and Hokkaido</td><td>Fewer crowds, hot springs (onsen) at their best</td></tr>
</tbody>
</table>

<h2>Spring: cherry blossom season</h2>
<p>Cherry blossom begins in the south of the country from late March and gradually moves north. In Tokyo and Kyoto, the peak usually falls between late March and the first week of April, and lasts only about ten days. It is the most sought-after time of year: hotels and trains fill up months in advance. May is a valuable compromise, with pleasant temperatures and clear trails, as long as you avoid Golden Week, the run of national holidays from 29 April to 5 May.</p>

<h2>Summer: rain, heat and typhoons</h2>
<p>The rainy season covers most of the archipelago from early June to mid-July. It doesn't rule out travel — Kyoto's temples and gardens are beautiful in the rain and far less crowded — but it calls for flexibility. From mid-July to September, city heat is often stifling, and typhoon season peaks in August and September. It is, however, the right season for walking at altitude, where the cooler air makes trails in the Japanese Alps far more comfortable.</p>

<h2>Autumn: the other great season</h2>
<p>From mid-October, the maples turn in the mountains, then the colour moves down towards the cities. In Kyoto, the leaves usually peak in the second half of November, and the dry, mild air makes long sightseeing days a pleasure. It's also one of the best times to walk the ancient Kumano Kodo pilgrimage trails, which we include in our <a href="/destinations/asie/japon/japon-naoshima-kumanokodo">Naoshima and Kumano Kodo</a> journey.</p>

<h2>Winter: Japan at its most peaceful</h2>
<p>From December to February, the weather is cold but often sunny on the Pacific coast, and the major sights are calm again. It's the ideal time for open-air hot baths and for snowy mountain villages, such as the thatched farmhouses of Shirakawa-go, lit up on selected evenings in January and February — a stop on our <a href="/destinations/asie/japon/japon-alpes-shirakawago">Japanese Alps</a> journey. Only the New Year period, from 29 December to 3 January, sees many businesses close.</p>

<h2>Our advice for a first trip</h2>
<p>For a first visit, aim for April, May, October or November, and allow at least two weeks to link Tokyo, the Alps and Kyoto without rushing. Our <a href="/destinations/asie/japon/japon-kyoto-tokyo">Kyoto to Tokyo</a> itinerary follows exactly that pace, and every stage can be adapted to your dates. See all our <a href="/destinations/asie/japon">trips to Japan</a>, or <a href="/faire-une-demande">tell us about your plans</a> to receive a tailor-made proposal within 24 hours.</p>`,
  contentEs: `<p><strong>En resumen: las dos mejores épocas para viajar a Japón son la primavera (de finales de marzo a mediados de mayo) y el otoño (de mediados de octubre a principios de diciembre)</strong>, con temperaturas suaves y los dos grandes espectáculos naturales del país: los cerezos en flor y los arces rojos. El invierno es una excelente alternativa, más tranquila y a menudo soleada. Conviene evitar la temporada de lluvias (de principios de junio a mediados de julio) y el calor húmedo de agosto, que coincide con el pico de la temporada de tifones.</p>

<h2>Japón de un vistazo, estación por estación</h2>
<table>
<thead><tr><th>Época</th><th>Qué le espera</th><th>Conviene saber</th></tr></thead>
<tbody>
<tr><td>Finales de marzo – abril</td><td>Floración de los cerezos (sakura) en Tokio y Kioto, 12–20 °C</td><td>La época más solicitada: reserve con antelación</td></tr>
<tr><td>Mayo</td><td>Paisajes verdes, cielos despejados, ideal para caminar</td><td>Evite la Golden Week (29 de abril – 5 de mayo), muy concurrida</td></tr>
<tr><td>Junio – mediados de julio</td><td>Temporada de lluvias (tsuyu), jardines de hortensias</td><td>Lluvias frecuentes, pero pocos visitantes</td></tr>
<tr><td>Mediados de julio – septiembre</td><td>Verano cálido y húmedo, a menudo por encima de 30 °C, festivales de verano</td><td>Temporada de tifones, sobre todo en agosto y septiembre</td></tr>
<tr><td>Mediados de octubre – principios de diciembre</td><td>Hojas de otoño (momiji), con el pico en Kioto en la segunda quincena de noviembre</td><td>La segunda mejor época del año</td></tr>
<tr><td>Diciembre – febrero</td><td>Frío seco, cielos a menudo azules, nieve en los Alpes y en Hokkaido</td><td>Menos gente, baños termales (onsen) en su mejor momento</td></tr>
</tbody>
</table>

<h2>La primavera: la temporada de los cerezos</h2>
<p>La floración de los cerezos empieza en el sur del país desde finales de marzo y avanza poco a poco hacia el norte. En Tokio y Kioto, el pico suele caer entre finales de marzo y la primera semana de abril, y dura apenas unos diez días. Es la época más solicitada del año: alojamientos y trenes se llenan con meses de antelación. Mayo ofrece un compromiso valioso, con temperaturas agradables y senderos despejados, siempre que evite la Golden Week, la semana de fiestas nacionales del 29 de abril al 5 de mayo.</p>

<h2>El verano: lluvias, calor y tifones</h2>
<p>La temporada de lluvias afecta a la mayor parte del archipiélago de principios de junio a mediados de julio. No impide viajar — los templos y jardines de Kioto son preciosos bajo la lluvia y mucho menos concurridos — pero exige flexibilidad. De mediados de julio a septiembre, el calor en las ciudades suele ser sofocante, y la temporada de tifones alcanza su pico en agosto y septiembre. Es, en cambio, la buena época para caminar en altura, donde el fresco hace mucho más cómodos los senderos de los Alpes japoneses.</p>

<h2>El otoño: la otra gran temporada</h2>
<p>Desde mediados de octubre, los arces cambian de color en las montañas y la ola desciende después hacia las ciudades. En Kioto, las hojas suelen alcanzar su pico en la segunda quincena de noviembre, y el aire seco y suave hace muy agradables las largas jornadas de visita. Es también una de las mejores épocas para recorrer los antiguos caminos de peregrinación del Kumano Kodo, que incluimos en nuestro viaje <a href="/destinations/asie/japon/japon-naoshima-kumanokodo">Naoshima y el Kumano Kodo</a>.</p>

<h2>El invierno: el Japón más sereno</h2>
<p>De diciembre a febrero, el tiempo es frío pero a menudo soleado en la costa del Pacífico, y los grandes lugares recuperan la calma. Es el momento ideal para los baños termales al aire libre y para los pueblos de montaña bajo la nieve, como las granjas con tejado de paja de Shirakawa-go, iluminadas algunas noches de enero y febrero: una etapa de nuestro viaje <a href="/destinations/asie/japon/japon-alpes-shirakawago">por los Alpes japoneses</a>. Solo el periodo de Año Nuevo, del 29 de diciembre al 3 de enero, ve cerrar muchos comercios.</p>

<h2>Nuestro consejo para un primer viaje</h2>
<p>Para un primer descubrimiento, apunte a abril, mayo, octubre o noviembre, y prevea al menos dos semanas para unir Tokio, los Alpes y Kioto sin prisas. Nuestro itinerario <a href="/destinations/asie/japon/japon-kyoto-tokyo">de Kioto a Tokio</a> sigue exactamente ese ritmo, y cada etapa se adapta a sus fechas. Descubra todos nuestros <a href="/destinations/asie/japon">viajes a Japón</a>, o <a href="/faire-une-demande">cuéntenos su proyecto</a> para recibir una propuesta a medida en 24 horas.</p>`,
};

const HONEYMOON: SeoBlogPost = {
  slug: "voyage-de-noces-ou-partir-selon-le-mois",
  category: "Voyage de noces",
  heroPath: "tours/maldives-overwater.jpg",
  title: "Voyage de noces : où partir selon le mois",
  titleEn: "Honeymoon Destinations by Month: Where to Go and When",
  titleEs: "Luna de miel: dónde ir según el mes",
  excerpt:
    "Maldives, Polynésie, Seychelles, Japon ou Kenya : les meilleures destinations de voyage de noces mois par mois, pour partir à la bonne saison.",
  excerptEn:
    "The Maldives, French Polynesia, the Seychelles, Japan or Kenya: the best honeymoon destinations month by month, so you travel in the right season.",
  excerptEs:
    "Maldivas, Polinesia, Seychelles, Japón o Kenia: los mejores destinos de luna de miel mes a mes, para viajar en la temporada adecuada.",
  content: `<p><strong>En résumé : la meilleure destination de voyage de noces dépend d'abord du mois de votre départ.</strong> De décembre à avril, les Maldives, le Sri Lanka et le Costa Rica sont en saison sèche. De mai à octobre, c'est le tour de la Polynésie française, de Bali et du safari au Kenya. Avril-mai et octobre-novembre sont les fenêtres les plus calmes aux Seychelles, tandis que la Méditerranée et le Japon brillent au printemps et au début de l'automne.</p>

<h2>Les meilleures destinations de voyage de noces, mois par mois</h2>
<table>
<thead><tr><th>Mois du départ</th><th>Destinations en pleine saison</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td>Janvier – mars</td><td>Maldives, Sri Lanka (côte sud), Costa Rica</td><td>Saison sèche, mer calme et ciel dégagé</td></tr>
<tr><td>Avril – mai</td><td>Seychelles, Japon, Maldives (jusqu'en avril)</td><td>Intersaison sans vent aux Seychelles, printemps japonais</td></tr>
<tr><td>Juin</td><td>Polynésie française, Bali, Italie et Grèce</td><td>Début de la saison sèche dans le Pacifique, Méditerranée avant les foules</td></tr>
<tr><td>Juillet – août</td><td>Kenya (safari et plage), Polynésie française, Bali</td><td>Grande migration dans le Masai Mara, hiver austral sec et doux</td></tr>
<tr><td>Septembre – octobre</td><td>Grèce, Italie, Kenya, Seychelles (dès octobre)</td><td>Mer encore chaude, lumière d'automne, fin de la migration</td></tr>
<tr><td>Novembre – décembre</td><td>Japon (feuillages d'automne), Maurice, Maldives (dès décembre)</td><td>Couleurs d'automne au Japon, début de l'été austral</td></tr>
</tbody>
</table>

<h2>De décembre à avril : les îles de l'océan Indien et les tropiques</h2>
<p>La mousson du nord-est apporte aux Maldives leur saison sèche de décembre à avril : mer d'huile, visibilité idéale pour le snorkeling, et soirées sur le ponton d'une villa sur pilotis, comme dans notre séjour <a href="/destinations/ocean-indien/maldives/maldives-overwater">aux Maldives</a>. Sur la même période, la côte sud du Sri Lanka se prête à un voyage mêlant temples et plages, à l'image de notre circuit <a href="/destinations/sous-continent-indien/sri-lanka/sri-lanka-kandy-mirissa">de Kandy à Mirissa</a>. De l'autre côté du monde, décembre à avril correspond aussi à la saison sèche du <a href="/destinations/amerique-du-sud/costa-rica/costa-rica-arenal-manuel-antonio">Costa Rica</a>, entre volcan et forêt tropicale.</p>

<h2>Avril-mai et octobre-novembre : les Seychelles</h2>
<p>Les Seychelles se visitent toute l'année, mais les deux intersaisons, entre les moussons, offrent la mer la plus calme et la plus claire. C'est le moment idéal pour relier Mahé, Praslin et La Digue et ses rochers de granit, comme dans notre voyage <a href="/destinations/ocean-indien/seychelles/seychelles-mahe-la-digue">de Mahé à La Digue</a>. Retrouvez aussi nos idées pour une <a href="/experience-types/luxury-honeymoons/april-honeymoons">lune de miel en avril</a> ou <a href="/experience-types/luxury-honeymoons/october-honeymoons">en octobre</a>.</p>

<h2>De mai à octobre : Polynésie, Bali et safari</h2>
<p>L'hiver austral est la saison sèche en Polynésie française : alizés, lagons turquoise et températures autour de 25 °C, idéales pour notre voyage <a href="/destinations/australasie/polynesie-francaise/polynesie-francaise-tahiti-bora-bora">de Tahiti à Bora Bora</a>. À Bali, la saison sèche court d'avril à octobre, parfaite pour associer rizières et falaises d'Uluwatu, comme dans notre circuit <a href="/destinations/asie-du-sud-est/indonesie/indonesie-ubud-uluwatu">d'Ubud à Uluwatu</a>. Enfin, de juillet à octobre, la grande migration traverse le Masai Mara : un safari au Kenya, prolongé par quelques jours de plage, reste l'un des voyages de noces les plus marquants. Découvrez notre voyage <a href="/destinations/afrique/kenya/kenya-grande-migration">au rythme de la grande migration</a> et nos idées pour une <a href="/experience-types/luxury-honeymoons/august-honeymoons">lune de miel en août</a>.</p>

<h2>Printemps et début d'automne : la Méditerranée et le Japon</h2>
<p>Pour un voyage de noces plus culturel, mai-juin et septembre sont les meilleurs mois en Méditerranée : mer déjà chaude ou encore chaude, sans la foule de juillet-août. Notre itinéraire <a href="/destinations/europe/italie/italie-rome-florence-amalfi">de Rome à la côte amalfitaine</a> en est un bon exemple, tout comme les îles grecques (voir nos idées pour une <a href="/experience-types/luxury-honeymoons/september-honeymoons">lune de miel en septembre</a>). Le Japon, lui, est à son plus beau au printemps, avec les cerisiers, et en novembre, avec les feuillages d'automne.</p>

<h2>Décembre : l'île Maurice et le retour des Maldives</h2>
<p>En fin d'année, Maurice profite du début de l'été austral, chaud et encore relativement sec avant la saison des cyclones, qui culmine généralement de janvier à mars. C'est aussi en décembre que les Maldives retrouvent leur saison sèche. Nos voyages <a href="/destinations/ocean-indien/maurice/maurice-port-louis-morne-brabant">à l'île Maurice</a> et nos idées pour une <a href="/experience-types/luxury-honeymoons/december-honeymoons">lune de miel en décembre</a> en donnent un aperçu.</p>

<h2>Composer votre voyage de noces</h2>
<p>Chaque destination peut se combiner — un safari au Kenya prolongé aux Seychelles, Tokyo puis les Maldives — tant que les saisons s'alignent. Parcourez toutes nos <a href="/experience-types/luxury-honeymoons">idées de lune de miel</a>, ou <a href="/faire-une-demande">donnez-nous vos dates</a> : nous vous proposons sous 24h un itinéraire construit autour de la bonne saison.</p>`,
  contentEn: `<p><strong>In short: the best honeymoon destination depends first on the month you travel.</strong> From December to April, the Maldives, Sri Lanka and Costa Rica are in their dry season. From May to October, it's the turn of French Polynesia, Bali and a Kenyan safari. April–May and October–November are the calmest windows in the Seychelles, while the Mediterranean and Japan shine in spring and early autumn.</p>

<h2>The best honeymoon destinations, month by month</h2>
<table>
<thead><tr><th>Travel month</th><th>Destinations in season</th><th>Why</th></tr></thead>
<tbody>
<tr><td>January – March</td><td>Maldives, Sri Lanka (south coast), Costa Rica</td><td>Dry season, calm sea and clear skies</td></tr>
<tr><td>April – May</td><td>Seychelles, Japan, Maldives (until April)</td><td>Windless shoulder season in the Seychelles, Japanese spring</td></tr>
<tr><td>June</td><td>French Polynesia, Bali, Italy and Greece</td><td>Start of the Pacific dry season, Mediterranean before the crowds</td></tr>
<tr><td>July – August</td><td>Kenya (safari and beach), French Polynesia, Bali</td><td>Great Migration in the Masai Mara, dry and mild austral winter</td></tr>
<tr><td>September – October</td><td>Greece, Italy, Kenya, Seychelles (from October)</td><td>Sea still warm, autumn light, end of the migration</td></tr>
<tr><td>November – December</td><td>Japan (autumn leaves), Mauritius, Maldives (from December)</td><td>Autumn colour in Japan, start of the austral summer</td></tr>
</tbody>
</table>

<h2>December to April: the Indian Ocean islands and the tropics</h2>
<p>The north-east monsoon gives the Maldives their dry season from December to April: glassy sea, ideal visibility for snorkelling, and evenings on the deck of an overwater villa, as on our <a href="/destinations/ocean-indien/maldives/maldives-overwater">Maldives</a> stay. Over the same period, Sri Lanka's south coast suits a trip that mixes temples and beaches, like our <a href="/destinations/sous-continent-indien/sri-lanka/sri-lanka-kandy-mirissa">Kandy to Mirissa</a> itinerary. On the other side of the world, December to April is also the dry season in <a href="/destinations/amerique-du-sud/costa-rica/costa-rica-arenal-manuel-antonio">Costa Rica</a>, between volcano and rainforest.</p>

<h2>April–May and October–November: the Seychelles</h2>
<p>The Seychelles can be visited all year round, but the two shoulder seasons between the monsoons bring the calmest, clearest sea. It's the ideal time to link Mahé, Praslin and La Digue with its granite boulders, as on our <a href="/destinations/ocean-indien/seychelles/seychelles-mahe-la-digue">Mahé to La Digue</a> journey. See also our ideas for an <a href="/experience-types/luxury-honeymoons/april-honeymoons">April honeymoon</a> or an <a href="/experience-types/luxury-honeymoons/october-honeymoons">October honeymoon</a>.</p>

<h2>May to October: Polynesia, Bali and safari</h2>
<p>The austral winter is the dry season in French Polynesia: trade winds, turquoise lagoons and temperatures around 25 °C, ideal for our <a href="/destinations/australasie/polynesie-francaise/polynesie-francaise-tahiti-bora-bora">Tahiti to Bora Bora</a> journey. In Bali, the dry season runs from April to October, perfect for pairing rice terraces with the cliffs of Uluwatu, as on our <a href="/destinations/asie-du-sud-est/indonesie/indonesie-ubud-uluwatu">Ubud to Uluwatu</a> itinerary. And from July to October, the Great Migration crosses the Masai Mara: a Kenyan safari followed by a few days on the beach remains one of the most memorable honeymoons. Discover our <a href="/destinations/afrique/kenya/kenya-grande-migration">Great Migration</a> journey and our ideas for an <a href="/experience-types/luxury-honeymoons/august-honeymoons">August honeymoon</a>.</p>

<h2>Spring and early autumn: the Mediterranean and Japan</h2>
<p>For a more cultural honeymoon, May–June and September are the best months in the Mediterranean: the sea is already or still warm, without the July–August crowds. Our <a href="/destinations/europe/italie/italie-rome-florence-amalfi">Rome to the Amalfi Coast</a> itinerary is a good example, as are the Greek islands (see our ideas for a <a href="/experience-types/luxury-honeymoons/september-honeymoons">September honeymoon</a>). Japan, for its part, is at its most beautiful in spring, with the cherry blossom, and in November, with the autumn leaves.</p>

<h2>December: Mauritius and the return of the Maldives</h2>
<p>At the end of the year, Mauritius enjoys the start of the austral summer, warm and still relatively dry before cyclone season, which usually peaks from January to March. December is also when the Maldives return to their dry season. Our <a href="/destinations/ocean-indien/maurice/maurice-port-louis-morne-brabant">Mauritius</a> journeys and our ideas for a <a href="/experience-types/luxury-honeymoons/december-honeymoons">December honeymoon</a> give a taste of it.</p>

<h2>Building your honeymoon</h2>
<p>Destinations can be combined — a Kenyan safari extended in the Seychelles, Tokyo then the Maldives — as long as the seasons line up. Browse all our <a href="/experience-types/luxury-honeymoons">honeymoon ideas</a>, or <a href="/faire-une-demande">send us your dates</a>: within 24 hours we'll suggest an itinerary built around the right season.</p>`,
  contentEs: `<p><strong>En resumen: el mejor destino de luna de miel depende ante todo del mes en que viaje.</strong> De diciembre a abril, Maldivas, Sri Lanka y Costa Rica están en temporada seca. De mayo a octubre, es el turno de la Polinesia Francesa, Bali y el safari en Kenia. Abril-mayo y octubre-noviembre son las ventanas más tranquilas en Seychelles, mientras que el Mediterráneo y Japón brillan en primavera y a principios de otoño.</p>

<h2>Los mejores destinos de luna de miel, mes a mes</h2>
<table>
<thead><tr><th>Mes de salida</th><th>Destinos en plena temporada</th><th>Por qué</th></tr></thead>
<tbody>
<tr><td>Enero – marzo</td><td>Maldivas, Sri Lanka (costa sur), Costa Rica</td><td>Temporada seca, mar en calma y cielo despejado</td></tr>
<tr><td>Abril – mayo</td><td>Seychelles, Japón, Maldivas (hasta abril)</td><td>Entretemporada sin viento en Seychelles, primavera japonesa</td></tr>
<tr><td>Junio</td><td>Polinesia Francesa, Bali, Italia y Grecia</td><td>Inicio de la temporada seca en el Pacífico, Mediterráneo antes de las multitudes</td></tr>
<tr><td>Julio – agosto</td><td>Kenia (safari y playa), Polinesia Francesa, Bali</td><td>Gran migración en el Masái Mara, invierno austral seco y suave</td></tr>
<tr><td>Septiembre – octubre</td><td>Grecia, Italia, Kenia, Seychelles (desde octubre)</td><td>Mar todavía cálido, luz de otoño, final de la migración</td></tr>
<tr><td>Noviembre – diciembre</td><td>Japón (hojas de otoño), Mauricio, Maldivas (desde diciembre)</td><td>Colores de otoño en Japón, inicio del verano austral</td></tr>
</tbody>
</table>

<h2>De diciembre a abril: las islas del océano Índico y los trópicos</h2>
<p>El monzón del noreste trae a Maldivas su temporada seca de diciembre a abril: mar en calma, visibilidad ideal para el esnórquel y veladas en la terraza de una villa sobre el agua, como en nuestra estancia <a href="/destinations/ocean-indien/maldives/maldives-overwater">en Maldivas</a>. En el mismo periodo, la costa sur de Sri Lanka se presta a un viaje que combina templos y playas, como nuestro circuito <a href="/destinations/sous-continent-indien/sri-lanka/sri-lanka-kandy-mirissa">de Kandy a Mirissa</a>. Al otro lado del mundo, de diciembre a abril es también la temporada seca en <a href="/destinations/amerique-du-sud/costa-rica/costa-rica-arenal-manuel-antonio">Costa Rica</a>, entre volcán y selva tropical.</p>

<h2>Abril-mayo y octubre-noviembre: Seychelles</h2>
<p>Seychelles se visita todo el año, pero las dos entretemporadas, entre los monzones, ofrecen el mar más tranquilo y transparente. Es el momento ideal para unir Mahé, Praslin y La Digue con sus rocas de granito, como en nuestro viaje <a href="/destinations/ocean-indien/seychelles/seychelles-mahe-la-digue">de Mahé a La Digue</a>. Descubra también nuestras ideas para una <a href="/experience-types/luxury-honeymoons/april-honeymoons">luna de miel en abril</a> o <a href="/experience-types/luxury-honeymoons/october-honeymoons">en octubre</a>.</p>

<h2>De mayo a octubre: Polinesia, Bali y safari</h2>
<p>El invierno austral es la temporada seca en la Polinesia Francesa: vientos alisios, lagunas turquesa y temperaturas en torno a 25 °C, ideales para nuestro viaje <a href="/destinations/australasie/polynesie-francaise/polynesie-francaise-tahiti-bora-bora">de Tahití a Bora Bora</a>. En Bali, la temporada seca va de abril a octubre, perfecta para combinar arrozales y los acantilados de Uluwatu, como en nuestro circuito <a href="/destinations/asie-du-sud-est/indonesie/indonesie-ubud-uluwatu">de Ubud a Uluwatu</a>. Y de julio a octubre, la gran migración cruza el Masái Mara: un safari en Kenia prolongado con unos días de playa sigue siendo una de las lunas de miel más memorables. Descubra nuestro viaje <a href="/destinations/afrique/kenya/kenya-grande-migration">al ritmo de la gran migración</a> y nuestras ideas para una <a href="/experience-types/luxury-honeymoons/august-honeymoons">luna de miel en agosto</a>.</p>

<h2>Primavera y principios de otoño: el Mediterráneo y Japón</h2>
<p>Para una luna de miel más cultural, mayo-junio y septiembre son los mejores meses en el Mediterráneo: el mar ya está o sigue cálido, sin las multitudes de julio y agosto. Nuestro itinerario <a href="/destinations/europe/italie/italie-rome-florence-amalfi">de Roma a la costa amalfitana</a> es un buen ejemplo, igual que las islas griegas (vea nuestras ideas para una <a href="/experience-types/luxury-honeymoons/september-honeymoons">luna de miel en septiembre</a>). Japón, por su parte, está en su momento más bello en primavera, con los cerezos, y en noviembre, con las hojas de otoño.</p>

<h2>Diciembre: Mauricio y el regreso de Maldivas</h2>
<p>A final de año, Mauricio disfruta del inicio del verano austral, cálido y todavía relativamente seco antes de la temporada de ciclones, que suele alcanzar su pico de enero a marzo. En diciembre también regresa la temporada seca a Maldivas. Nuestros viajes <a href="/destinations/ocean-indien/maurice/maurice-port-louis-morne-brabant">a Mauricio</a> y nuestras ideas para una <a href="/experience-types/luxury-honeymoons/december-honeymoons">luna de miel en diciembre</a> le darán una idea.</p>

<h2>Diseñar su luna de miel</h2>
<p>Los destinos se pueden combinar — un safari en Kenia prolongado en Seychelles, Tokio y después Maldivas — siempre que las temporadas coincidan. Descubra todas nuestras <a href="/experience-types/luxury-honeymoons">ideas de luna de miel</a>, o <a href="/faire-une-demande">envíenos sus fechas</a>: en 24 horas le proponemos un itinerario construido en torno a la temporada adecuada.</p>`,
};

const GREECE: SeoBlogPost = {
  slug: "quelle-ile-grecque-choisir",
  category: "Grèce",
  heroPath: "destinations/grece-hero.jpg",
  title: "Quelle île grecque choisir ? Le guide pour bien décider",
  titleEn: "Which Greek Island Should You Choose? A Practical Guide",
  titleEs: "¿Qué isla griega elegir? La guía para decidir bien",
  excerpt:
    "Santorin, la Crète, Paros, Sifnos ou Naxos : quelle île grecque choisir selon vos envies, la saison et la durée de votre voyage. Notre guide.",
  excerptEn:
    "Santorini, Crete, Paros, Sifnos or Naxos: which Greek island to choose depending on what you're after, the season and the length of your trip.",
  excerptEs:
    "Santorini, Creta, Paros, Sifnos o Naxos: qué isla griega elegir según sus deseos, la temporada y la duración de su viaje. Nuestra guía.",
  content: `<p><strong>En résumé : choisissez Santorin pour les vues sur la caldeira, la Crète pour la variété, Paros ou Naxos pour un séjour en famille équilibré, et Sifnos pour la gastronomie et le calme.</strong> Pour un premier voyage d'une dizaine de jours, l'idéal est de combiner deux ou trois îles des Cyclades reliées en ferry, avec Athènes en ouverture. Les meilleurs mois sont fin mai, juin et septembre : mer chaude, lumière douce, et bien moins de monde qu'en juillet-août.</p>

<h2>Les îles grecques en un coup d'œil</h2>
<table>
<thead><tr><th>Île</th><th>Idéale pour</th><th>Points forts</th></tr></thead>
<tbody>
<tr><td>Santorin</td><td>Voyage de noces, premier voyage</td><td>Villages blancs perchés sur la caldeira, couchers de soleil, vins volcaniques</td></tr>
<tr><td>Crète</td><td>Voyageurs actifs, séjours de plus d'une semaine</td><td>Palais minoen de Knossos, gorges de Samaria, plages et villages de montagne</td></tr>
<tr><td>Paros</td><td>Familles, première découverte des Cyclades</td><td>Villages de pêcheurs, plages variées, liaisons faciles vers les autres îles</td></tr>
<tr><td>Naxos</td><td>Familles, randonnée</td><td>Plus grande île des Cyclades, longues plages de sable, villages de l'intérieur</td></tr>
<tr><td>Sifnos</td><td>Gourmands, voyageurs en quête de calme</td><td>Tradition culinaire, poterie, sentiers entre chapelles</td></tr>
</tbody>
</table>

<h2>Santorin : pour la caldeira</h2>
<p>Santorin doit son paysage à une éruption volcanique majeure survenue il y a environ 3 600 ans, qui a laissé une immense caldeira bordée de falaises. Les villages d'Oia et de Fira, perchés sur ses crêtes, offrent certains des couchers de soleil les plus célèbres de Méditerranée — et donc aussi une forte fréquentation en été. Deux ou trois nuits suffisent généralement : de quoi profiter de la caldeira, des vignobles et des plages de sable volcanique, avant de rejoindre une île plus calme.</p>

<h2>La Crète : pour la variété</h2>
<p>Plus grande île de Grèce, la Crète est presque un pays à elle seule : le palais minoen de Knossos près d'Héraklion, les ruelles vénitiennes de La Canée, et les gorges de Samaria, parmi les plus longues d'Europe avec environ 16 kilomètres de marche, généralement ouvertes de mai à octobre. Elle mérite au moins une semaine, comme dans notre voyage <a href="/destinations/europe/grece/grece-crete">en Crète</a>.</p>

<h2>Paros, Naxos et Sifnos : pour le rythme des Cyclades</h2>
<p>Paros et Naxos, voisines et bien reliées en ferry, conviennent parfaitement aux familles : plages abritées, villages animés sans excès, et de nombreuses activités nautiques. Sifnos, plus confidentielle, est réputée pour sa cuisine et ses potiers, et se découvre à pied entre chapelles blanches et terrasses. Notre voyage <a href="/destinations/europe/grece/voyage-en-grece-athenes-sifnos-paros-santorin">Athènes, Sifnos, Paros et Santorin</a> relie justement ces îles pour offrir, en un seul séjour, trois visages très différents des Cyclades.</p>

<h2>Quand partir dans les îles grecques ?</h2>
<p>La saison s'étend de mai à octobre. En juillet et en août, le meltemi, un vent du nord régulier, souffle souvent fort sur les Cyclades : il rafraîchit l'air mais peut agiter la mer et perturber certains ferries. Fin mai, juin et septembre réunissent le meilleur des deux mondes, avec une mer déjà ou encore chaude — elle atteint généralement ses températures les plus élevées fin août et en septembre. La Crète, plus au sud, profite d'une saison légèrement plus longue.</p>

<h2>Combien d'îles combiner ?</h2>
<p>Comptez trois à quatre nuits par île pour en profiter sans passer vos journées dans les ports : deux îles pour une semaine, trois pour dix à quatorze jours, en ajoutant une ou deux nuits à Athènes. Pour naviguer d'île en île sans contrainte de ferry, une croisière en petit navire est une belle alternative, à l'image de notre <a href="/destinations/europe/grece/grece-croisiere-mediterranee">croisière en mer Égée</a>. Pour une première fois, notre circuit <a href="/destinations/europe/grece/grece-athenes-meteores-santorin">Athènes, Météores et Santorin</a> associe l'Acropole, les monastères suspendus et la caldeira. Retrouvez tous nos <a href="/destinations/europe/grece">voyages en Grèce</a>, ou <a href="/faire-une-demande">dites-nous ce qui vous fait envie</a> : nous vous proposons sous 24h la combinaison d'îles qui vous correspond.</p>`,
  contentEn: `<p><strong>In short: choose Santorini for the caldera views, Crete for variety, Paros or Naxos for a well-balanced family trip, and Sifnos for food and peace and quiet.</strong> For a first trip of around ten days, the best approach is to combine two or three Cycladic islands linked by ferry, starting in Athens. The best months are late May, June and September: warm sea, soft light and far fewer people than in July and August.</p>

<h2>The Greek islands at a glance</h2>
<table>
<thead><tr><th>Island</th><th>Ideal for</th><th>Highlights</th></tr></thead>
<tbody>
<tr><td>Santorini</td><td>Honeymoons, first-time visitors</td><td>White villages perched on the caldera, sunsets, volcanic wines</td></tr>
<tr><td>Crete</td><td>Active travellers, stays of more than a week</td><td>Minoan palace of Knossos, Samaria Gorge, beaches and mountain villages</td></tr>
<tr><td>Paros</td><td>Families, a first taste of the Cyclades</td><td>Fishing villages, varied beaches, easy connections to other islands</td></tr>
<tr><td>Naxos</td><td>Families, hiking</td><td>Largest island in the Cyclades, long sandy beaches, inland villages</td></tr>
<tr><td>Sifnos</td><td>Food lovers, travellers seeking calm</td><td>Culinary tradition, pottery, trails between chapels</td></tr>
</tbody>
</table>

<h2>Santorini: for the caldera</h2>
<p>Santorini owes its landscape to a major volcanic eruption around 3,600 years ago, which left a vast caldera ringed by cliffs. The villages of Oia and Fira, perched on its rim, offer some of the most famous sunsets in the Mediterranean — and therefore heavy crowds in summer. Two or three nights are usually enough to enjoy the caldera, the vineyards and the volcanic-sand beaches before moving on to a quieter island.</p>

<h2>Crete: for variety</h2>
<p>Greece's largest island, Crete is almost a country in its own right: the Minoan palace of Knossos near Heraklion, the Venetian lanes of Chania, and the Samaria Gorge, one of the longest in Europe at around 16 kilometres of walking, usually open from May to October. It deserves at least a week, as on our <a href="/destinations/europe/grece/grece-crete">Crete</a> journey.</p>

<h2>Paros, Naxos and Sifnos: for the rhythm of the Cyclades</h2>
<p>Paros and Naxos, neighbours with good ferry links, suit families perfectly: sheltered beaches, lively but never overwhelming villages, and plenty of water sports. Sifnos, more discreet, is known for its cooking and its potters, and is best explored on foot between white chapels and terraces. Our <a href="/destinations/europe/grece/voyage-en-grece-athenes-sifnos-paros-santorin">Athens, Sifnos, Paros and Santorini</a> journey links exactly these islands, showing three very different sides of the Cyclades in a single trip.</p>

<h2>When to go to the Greek islands</h2>
<p>The season runs from May to October. In July and August, the meltemi, a steady northerly wind, often blows hard across the Cyclades: it cools the air but can make the sea rough and disrupt some ferries. Late May, June and September offer the best of both worlds, with a sea that is already or still warm — it usually reaches its highest temperatures in late August and September. Crete, further south, enjoys a slightly longer season.</p>

<h2>How many islands to combine?</h2>
<p>Allow three to four nights per island to enjoy them without spending your days in ports: two islands for a week, three for ten to fourteen days, plus one or two nights in Athens. To hop between islands without ferry timetables, a small-ship cruise is a lovely alternative, like our <a href="/destinations/europe/grece/grece-croisiere-mediterranee">Aegean cruise</a>. For a first visit, our <a href="/destinations/europe/grece/grece-athenes-meteores-santorin">Athens, Meteora and Santorini</a> itinerary pairs the Acropolis, the cliff-top monasteries and the caldera. See all our <a href="/destinations/europe/grece">trips to Greece</a>, or <a href="/faire-une-demande">tell us what appeals to you</a>: within 24 hours we'll suggest the combination of islands that suits you.</p>`,
  contentEs: `<p><strong>En resumen: elija Santorini por las vistas a la caldera, Creta por la variedad, Paros o Naxos para un viaje en familia equilibrado, y Sifnos por la gastronomía y la calma.</strong> Para un primer viaje de unos diez días, lo ideal es combinar dos o tres islas de las Cícladas unidas en ferry, empezando por Atenas. Los mejores meses son finales de mayo, junio y septiembre: mar cálido, luz suave y mucha menos gente que en julio y agosto.</p>

<h2>Las islas griegas de un vistazo</h2>
<table>
<thead><tr><th>Isla</th><th>Ideal para</th><th>Lo más destacado</th></tr></thead>
<tbody>
<tr><td>Santorini</td><td>Lunas de miel, primer viaje</td><td>Pueblos blancos sobre la caldera, atardeceres, vinos volcánicos</td></tr>
<tr><td>Creta</td><td>Viajeros activos, estancias de más de una semana</td><td>Palacio minoico de Cnosos, garganta de Samaria, playas y pueblos de montaña</td></tr>
<tr><td>Paros</td><td>Familias, primer contacto con las Cícladas</td><td>Pueblos de pescadores, playas variadas, buenas conexiones con otras islas</td></tr>
<tr><td>Naxos</td><td>Familias, senderismo</td><td>La isla más grande de las Cícladas, largas playas de arena, pueblos del interior</td></tr>
<tr><td>Sifnos</td><td>Amantes de la gastronomía, viajeros que buscan calma</td><td>Tradición culinaria, cerámica, senderos entre capillas</td></tr>
</tbody>
</table>

<h2>Santorini: por la caldera</h2>
<p>Santorini debe su paisaje a una gran erupción volcánica ocurrida hace unos 3.600 años, que dejó una inmensa caldera rodeada de acantilados. Los pueblos de Oia y Fira, encaramados en su borde, ofrecen algunos de los atardeceres más famosos del Mediterráneo — y, por tanto, mucha afluencia en verano. Dos o tres noches suelen bastar para disfrutar de la caldera, los viñedos y las playas de arena volcánica antes de pasar a una isla más tranquila.</p>

<h2>Creta: por la variedad</h2>
<p>La isla más grande de Grecia, Creta es casi un país en sí misma: el palacio minoico de Cnosos cerca de Heraclión, las callejuelas venecianas de La Canea y la garganta de Samaria, una de las más largas de Europa con unos 16 kilómetros de caminata, abierta por lo general de mayo a octubre. Merece al menos una semana, como en nuestro viaje <a href="/destinations/europe/grece/grece-crete">a Creta</a>.</p>

<h2>Paros, Naxos y Sifnos: al ritmo de las Cícladas</h2>
<p>Paros y Naxos, vecinas y bien conectadas en ferry, son perfectas para las familias: playas resguardadas, pueblos animados sin excesos y numerosas actividades náuticas. Sifnos, más discreta, es famosa por su cocina y sus alfareros, y se descubre a pie entre capillas blancas y terrazas. Nuestro viaje <a href="/destinations/europe/grece/voyage-en-grece-athenes-sifnos-paros-santorin">Atenas, Sifnos, Paros y Santorini</a> une precisamente estas islas para mostrar, en un solo viaje, tres caras muy distintas de las Cícladas.</p>

<h2>¿Cuándo viajar a las islas griegas?</h2>
<p>La temporada va de mayo a octubre. En julio y agosto, el meltemi, un viento regular del norte, suele soplar con fuerza sobre las Cícladas: refresca el aire, pero puede agitar el mar y alterar algunos ferris. Finales de mayo, junio y septiembre reúnen lo mejor de ambos mundos, con un mar ya o todavía cálido, que suele alcanzar sus temperaturas más altas a finales de agosto y en septiembre. Creta, más al sur, disfruta de una temporada algo más larga.</p>

<h2>¿Cuántas islas combinar?</h2>
<p>Cuente de tres a cuatro noches por isla para disfrutarlas sin pasar los días en los puertos: dos islas para una semana, tres para diez a catorce días, añadiendo una o dos noches en Atenas. Para navegar de isla en isla sin depender de los ferris, un crucero en pequeño barco es una bonita alternativa, como nuestro <a href="/destinations/europe/grece/grece-croisiere-mediterranee">crucero por el mar Egeo</a>. Para una primera vez, nuestro circuito <a href="/destinations/europe/grece/grece-athenes-meteores-santorin">Atenas, Meteora y Santorini</a> combina la Acrópolis, los monasterios colgantes y la caldera. Descubra todos nuestros <a href="/destinations/europe/grece">viajes a Grecia</a>, o <a href="/faire-une-demande">cuéntenos qué le apetece</a>: en 24 horas le proponemos la combinación de islas que mejor le encaja.</p>`,
};

export const SEO_BLOG_POSTS_BATCH_1: SeoBlogPost[] = [JAPAN, HONEYMOON, GREECE];
