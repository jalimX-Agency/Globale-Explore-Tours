import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const R2 = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev";

// ── Destinations ──────────────────────────────────────────────────────────
// Morocco is the real, live destination (12 real Agadir tours below).
// The other five are example/starter world trips for the new worldwide catalog —
// original itineraries in Black Tomato's structural style, not verified bookable
// packages: prices are placeholder ranges pending real ground-operator quotes.
// See docs/architecture-site.md for that distinction.
const destinations = [
  {
    slug: "maroc",
    name: "Maroc",
    nameEn: "Morocco",
    nameEs: "Marruecos",
    region: "Afrique",
    regionEn: "Africa",
    regionEs: "África",
    regionSlug: "afrique",
    description: "Là où tout a commencé — nos excursions et circuits à Agadir, conçus par des guides qui connaissent vraiment le terrain.",
    descriptionEn: "Where it all started — our excursions and tours around Agadir, designed by guides who actually know the ground.",
    descriptionEs: "Donde todo empezó — nuestras excursiones y circuitos por Agadir, diseñados por guías que realmente conocen el terreno.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage au Maroc",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Morocco Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Marruecos",
    descriptionMore: "Nos guides locaux — Momo, Hassane, Ahmed et le reste de l'équipe — sont aujourd'hui classés #1 des activités à Agadir sur TripAdvisor, avec plus de cent avis vérifiés. Chaque excursion est pensée autour de vous, pas d'un itinéraire figé.",
    descriptionMoreEn: "Our local guides — Momo, Hassane, Ahmed and the rest of the team — are now rated the #1 activity in Agadir on TripAdvisor, with over a hundred verified reviews. Every excursion is built around you, not a fixed itinerary.",
    descriptionMoreEs: "Nuestros guías locales — Momo, Hassane, Ahmed y el resto del equipo — están hoy clasificados como la actividad N.º 1 en Agadir en TripAdvisor, con más de cien opiniones verificadas. Cada excursión está pensada en torno a usted, no según un itinerario fijo.",
    heroImage: `${R2}/destinations/maroc.jpg`,
    order: 1,
    featured: true,
  },
  {
    slug: "japon",
    name: "Japon",
    nameEn: "Japan",
    nameEs: "Japón",
    region: "Asie",
    regionEn: "Asia",
    regionEs: "Asia",
    regionSlug: "asie",
    description: "Des temples de Kyoto au néon de Tokyo — un pays où le silence et le vertige se répondent.",
    descriptionEn: "From Kyoto's temples to Tokyo's neon — a country where silence and vertigo answer each other.",
    descriptionEs: "De los templos de Kioto al neón de Tokio — un país donde el silencio y el vértigo se responden.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage au Japon",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Japan Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Japón",
    descriptionMore: "Entre les temples de Kyoto et le vertige de Tokyo, nous construisons un itinéraire qui respecte votre rythme — que vous cherchiez le silence d'un jardin zen ou l'énergie d'un quartier qui ne dort jamais.",
    descriptionMoreEn: "Between Kyoto's temples and Tokyo's vertigo, we build an itinerary that respects your pace — whether you're after the quiet of a Zen garden or the energy of a neighbourhood that never sleeps.",
    descriptionMoreEs: "Entre los templos de Kioto y el vértigo de Tokio, construimos un itinerario que respeta su ritmo — ya busque el silencio de un jardín zen o la energía de un barrio que nunca duerme.",
    heroImage: `${R2}/destinations/japon.jpg`,
    order: 2,
    featured: true,
  },
  {
    slug: "islande",
    name: "Islande",
    nameEn: "Iceland",
    nameEs: "Islandia",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Glaciers, volcans et aurores boréales — un paysage qui semble encore en train de se former.",
    descriptionEn: "Glaciers, volcanoes and northern lights — a landscape that still looks like it's being formed.",
    descriptionEs: "Glaciares, volcanes y auroras boreales — un paisaje que aún parece estar formándose.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage en Islande",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Iceland Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Islandia",
    descriptionMore: "Glaciers, volcans et aurores boréales — nous suivons les prévisions météo et les conditions routières en temps réel pour vous emmener au bon endroit, au bon moment.",
    descriptionMoreEn: "Glaciers, volcanoes and Northern Lights — we track weather forecasts and road conditions in real time to get you to the right place at the right moment.",
    descriptionMoreEs: "Glaciares, volcanes y auroras boreales — seguimos las previsiones meteorológicas y el estado de las carreteras en tiempo real para llevarle al lugar adecuado en el momento justo.",
    heroImage: `${R2}/destinations/islande.jpg`,
    order: 3,
    featured: true,
  },
  {
    slug: "kenya",
    name: "Kenya",
    nameEn: "Kenya",
    nameEs: "Kenia",
    region: "Afrique",
    regionEn: "Africa",
    regionEs: "África",
    regionSlug: "afrique",
    description: "La grande migration, les plaines du Masai Mara — l'Afrique sauvage à hauteur de Land Cruiser.",
    descriptionEn: "The great migration, the plains of the Masai Mara — wild Africa at Land Cruiser height.",
    descriptionEs: "La gran migración, las llanuras del Masai Mara — el África salvaje a la altura de un Land Cruiser.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre safari au Kenya",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Kenya Safari",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su safari en Kenia",
    descriptionMore: "De la grande migration aux rencontres avec les communautés Maasai, chaque circuit est construit autour de ce que vous voulez vivre — pas d'un programme standard reproduit d'un voyageur à l'autre.",
    descriptionMoreEn: "From the great migration to encounters with Maasai communities, every itinerary is built around what you want to experience — not a standard programme repeated from one traveller to the next.",
    descriptionMoreEs: "De la gran migración a los encuentros con comunidades maasái, cada circuito se construye en torno a lo que usted quiere vivir — no según un programa estándar repetido de un viajero a otro.",
    heroImage: `${R2}/destinations/kenya.jpg`,
    order: 4,
    featured: true,
  },
  {
    slug: "italie",
    name: "Italie",
    nameEn: "Italy",
    nameEs: "Italia",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Rome, Florence et la côte amalfitaine — trois visages de la même dolce vita.",
    descriptionEn: "Rome, Florence and the Amalfi Coast — three faces of the same dolce vita.",
    descriptionEs: "Roma, Florencia y la costa de Amalfi — tres caras de la misma dolce vita.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage en Italie",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Italy Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Italia",
    descriptionMore: "De Rome à la côte amalfitaine, nous mêlons les incontournables aux adresses que seul un guide sur place connaît vraiment — la Rome antique le matin, une trattoria familiale le soir.",
    descriptionMoreEn: "From Rome to the Amalfi Coast, we blend the must-sees with the addresses only a guide on the ground truly knows — ancient Rome in the morning, a family-run trattoria at night.",
    descriptionMoreEs: "De Roma a la costa de Amalfi, combinamos lo imprescindible con las direcciones que solo un guía sobre el terreno conoce de verdad — la Roma antigua por la mañana, una trattoria familiar por la noche.",
    heroImage: `${R2}/destinations/italie.jpg`,
    order: 5,
    featured: true,
  },
  {
    slug: "maldives",
    name: "Maldives",
    nameEn: "Maldives",
    nameEs: "Maldivas",
    region: "Océan Indien",
    regionEn: "Indian Ocean",
    regionEs: "Océano Índico",
    regionSlug: "ocean-indien",
    description: "Rien entre vous et l'océan — des villas sur pilotis au-dessus d'un lagon turquoise.",
    descriptionEn: "Nothing between you and the ocean — overwater villas above a turquoise lagoon.",
    descriptionEs: "Nada entre usted y el océano — villas sobre el agua encima de una laguna turquesa.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage aux Maldives",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Maldives Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Maldivas",
    descriptionMore: "Une villa sur pilotis, un lagon à quelques mètres de la terrasse, et un seul programme : le vôtre. Nous nous occupons des transferts en hydravion et du reste — vous n'avez qu'à arriver.",
    descriptionMoreEn: "An overwater villa, a lagoon just steps from the deck, and only one schedule to keep: your own. We handle the seaplane transfers and everything else — all you have to do is arrive.",
    descriptionMoreEs: "Una villa sobre el agua, una laguna a pocos metros de la terraza, y un solo programa: el suyo. Nosotros nos ocupamos de los traslados en hidroavión y de todo lo demás — usted solo tiene que llegar.",
    heroImage: `${R2}/destinations/maldives.jpg`,
    order: 6,
    featured: true,
  },
  {
    slug: "france",
    name: "France",
    nameEn: "France",
    nameEs: "Francia",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Paris, la lavande de Provence et les criques de la Côte d'Azur — un pays qui se réinvente à chaque région.",
    descriptionEn: "Paris, Provence's lavender and the coves of the Côte d'Azur — a country that reinvents itself with every region.",
    descriptionEs: "París, la lavanda de Provenza y las calas de la Costa Azul — un país que se reinventa en cada región.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage en France",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your France Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Francia",
    descriptionMore: "De la Tour Eiffel aux villages perchés du Luberon, nous construisons un itinéraire qui laisse la place à l'imprévu — un marché de village un mardi matin, une table qu'aucun guide ne mentionne.",
    descriptionMoreEn: "From the Eiffel Tower to the hilltop villages of the Luberon, we build an itinerary that leaves room for the unplanned — a village market on a Tuesday morning, a table no guidebook mentions.",
    descriptionMoreEs: "De la Torre Eiffel a los pueblos encaramados del Luberon, construimos un itinerario que deja espacio para lo imprevisto — un mercado de pueblo un martes por la mañana, una mesa que ninguna guía menciona.",
    heroImage: `${R2}/destinations/france-hero.jpg`,
    order: 7,
    featured: true,
  },
  {
    slug: "royaume-uni",
    name: "Royaume-Uni",
    nameEn: "United Kingdom",
    nameEs: "Reino Unido",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Des ruelles de Londres aux châteaux des Highlands — l'élégance urbaine et la nature brute à quelques heures de train.",
    descriptionEn: "From London's backstreets to Highland castles — urban polish and raw nature a few train hours apart.",
    descriptionEs: "De las calles de Londres a los castillos de las Highlands — elegancia urbana y naturaleza salvaje a pocas horas de tren.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage au Royaume-Uni",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your UK Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje al Reino Unido",
    descriptionMore: "De Londres aux Highlands écossaises, nous alternons musées et grand air, sans jamais perdre de temps dans les files d'attente que nous savons éviter.",
    descriptionMoreEn: "From London to the Scottish Highlands, we alternate museums and open air, without ever losing time in the queues we know how to avoid.",
    descriptionMoreEs: "De Londres a las Highlands escocesas, alternamos museos y aire libre, sin perder nunca el tiempo en las colas que sabemos evitar.",
    heroImage: `${R2}/destinations/royaume-uni-hero.jpg`,
    order: 8,
    featured: true,
  },
  {
    slug: "espagne",
    name: "Espagne",
    nameEn: "Spain",
    nameEs: "España",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Barcelone, l'Andalousie et ses palais mauresques — un pays qui vit dehors, tard le soir, sous une lumière particulière.",
    descriptionEn: "Barcelona, Andalusia and its Moorish palaces — a country that lives outdoors, late into the evening, under a particular light.",
    descriptionEs: "Barcelona, Andalucía y sus palacios moriscos — un país que vive fuera, hasta tarde, bajo una luz particular.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage en Espagne",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Spain Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a España",
    descriptionMore: "De Gaudí aux cours de l'Alhambra, nous construisons un itinéraire qui suit le rythme espagnol — déjeuners tardifs, sieste optionnelle, dîners qui ne commencent jamais avant 21 heures.",
    descriptionMoreEn: "From Gaudí to the courtyards of the Alhambra, we build an itinerary that follows Spanish rhythm — late lunches, an optional siesta, dinners that never start before 9pm.",
    descriptionMoreEs: "De Gaudí a los patios de la Alhambra, construimos un itinerario que sigue el ritmo español — almuerzos tardíos, siesta opcional, cenas que nunca empiezan antes de las 21h.",
    heroImage: `${R2}/destinations/espagne-hero.jpg`,
    order: 9,
    featured: true,
  },
  {
    slug: "grece",
    name: "Grèce",
    nameEn: "Greece",
    nameEs: "Grecia",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Monastères suspendus, ruines antiques et villages blancs au-dessus d'une mer d'un bleu presque irréel.",
    descriptionEn: "Cliffside monasteries, ancient ruins and white villages above a sea of near-unreal blue.",
    descriptionEs: "Monasterios suspendidos, ruinas antiguas y pueblos blancos sobre un mar de un azul casi irreal.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage en Grèce",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Greece Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Grecia",
    descriptionMore: "D'Athènes aux Cyclades, nous mêlons l'histoire antique aux longues journées de mer — le Parthénon au lever du jour, une crique accessible seulement par bateau l'après-midi.",
    descriptionMoreEn: "From Athens to the Cyclades, we blend ancient history with long days at sea — the Parthenon at sunrise, a cove reachable only by boat in the afternoon.",
    descriptionMoreEs: "De Atenas a las Cícladas, combinamos la historia antigua con largos días de mar — el Partenón al amanecer, una cala accesible solo en barco por la tarde.",
    heroImage: `${R2}/destinations/grece-hero.jpg`,
    order: 10,
    featured: true,
  },
  {
    slug: "portugal",
    name: "Portugal",
    nameEn: "Portugal",
    nameEs: "Portugal",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Tramways jaunes, vignobles en terrasses sur le Douro et une côte atlantique qui n'a rien à envier à personne.",
    descriptionEn: "Yellow trams, terraced Douro vineyards and an Atlantic coastline that owes nothing to anyone.",
    descriptionEs: "Tranvías amarillos, viñedos en terrazas sobre el Duero y una costa atlántica que no tiene nada que envidiar.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage au Portugal",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Portugal Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Portugal",
    descriptionMore: "De Lisbonne à la vallée du Douro, nous prenons le temps qu'il faut — un déjeuner de fruits de mer sans montre, une croisière fluviale sans horaire fixe.",
    descriptionMoreEn: "From Lisbon to the Douro Valley, we take the time it takes — a seafood lunch with no watch in sight, a river cruise with no fixed schedule.",
    descriptionMoreEs: "De Lisboa al valle del Duero, nos tomamos el tiempo necesario — un almuerzo de marisco sin reloj, un crucero fluvial sin horario fijo.",
    heroImage: `${R2}/destinations/portugal-hero.jpg`,
    order: 11,
    featured: true,
  },
  {
    slug: "croatie",
    name: "Croatie",
    nameEn: "Croatia",
    nameEs: "Croacia",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Remparts millénaires, lacs turquoise en cascade et une Adriatique semée d'îles à peine peuplées.",
    descriptionEn: "Centuries-old ramparts, cascading turquoise lakes and an Adriatic scattered with barely inhabited islands.",
    descriptionEs: "Murallas milenarias, lagos turquesa en cascada y un Adriático sembrado de islas apenas pobladas.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage en Croatie",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Croatia Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Croacia",
    descriptionMore: "De Dubrovnik aux îles dalmates, nous évitons les heures de pointe des bateaux de croisière pour vous laisser la ville pour vous — ou presque.",
    descriptionMoreEn: "From Dubrovnik to the Dalmatian islands, we sidestep the cruise-ship rush hours to leave the city to you — or nearly so.",
    descriptionMoreEs: "De Dubrovnik a las islas dálmatas, evitamos las horas punta de los cruceros para dejarle la ciudad casi solo para usted.",
    heroImage: `${R2}/destinations/croatie-hero.jpg`,
    order: 12,
    featured: true,
  },
  {
    slug: "suisse",
    name: "Suisse",
    nameEn: "Switzerland",
    nameEs: "Suiza",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Trains panoramiques, sommets enneigés et lacs si propres qu'ils semblent posés là pour la photo.",
    descriptionEn: "Panoramic trains, snow-capped peaks and lakes so clean they look staged for the photo.",
    descriptionEs: "Trenes panorámicos, cumbres nevadas y lagos tan limpios que parecen colocados para la foto.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage en Suisse",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Switzerland Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Suiza",
    descriptionMore: "Du Cervin aux rives du lac des Quatre-Cantons, nous réservons les bons wagons panoramiques et les bonnes chambres avec vue — les détails qui changent tout.",
    descriptionMoreEn: "From the Matterhorn to the shores of Lake Lucerne, we book the right panoramic carriages and the right rooms with a view — the details that change everything.",
    descriptionMoreEs: "Del Cervino a las orillas del lago de los Cuatro Cantones, reservamos los vagones panorámicos adecuados y las habitaciones con vistas — los detalles que lo cambian todo.",
    heroImage: `${R2}/destinations/suisse-hero.jpg`,
    order: 13,
    featured: true,
  },
  {
    slug: "norvege",
    name: "Norvège",
    nameEn: "Norway",
    nameEs: "Noruega",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Fjords vertigineux, villages de pêcheurs colorés et un ciel qui, certaines nuits, se met à onduler de vert.",
    descriptionEn: "Vertiginous fjords, colourful fishing villages and a sky that, on certain nights, starts to ripple green.",
    descriptionEs: "Fiordos vertiginosos, coloridos pueblos de pescadores y un cielo que, algunas noches, empieza a ondular en verde.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage en Norvège",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Norway Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Noruega",
    descriptionMore: "De Bergen aux îles Lofoten, nous suivons les prévisions d'aurores boréales et de météo maritime pour vous placer au bon endroit, au bon moment.",
    descriptionMoreEn: "From Bergen to the Lofoten Islands, we track aurora forecasts and marine weather to put you in the right place, at the right moment.",
    descriptionMoreEs: "De Bergen a las islas Lofoten, seguimos las previsiones de auroras boreales y el tiempo marítimo para situarle en el lugar correcto, en el momento justo.",
    heroImage: `${R2}/destinations/norvege-hero.jpg`,
    order: 14,
    featured: true,
  },
  {
    slug: "turquie",
    name: "Turquie",
    nameEn: "Turkey",
    nameEs: "Turquía",
    region: "Europe",
    regionEn: "Europe",
    regionEs: "Europa",
    regionSlug: "europe",
    description: "Minarets d'Istanbul, montgolfières au lever du jour sur des cheminées de fée — un pays à cheval sur deux continents.",
    descriptionEn: "Istanbul's minarets, sunrise balloons over fairy chimneys — a country straddling two continents.",
    descriptionEs: "Minaretes de Estambul, globos al amanecer sobre chimeneas de hadas — un país a caballo entre dos continentes.",
    overviewHeading: "Pourquoi choisir Globale Explore Tours pour votre voyage en Turquie",
    overviewHeadingEn: "Why Choose Globale Explore Tours for Your Turkey Trip",
    overviewHeadingEs: "Por qué elegir Globale Explore Tours para su viaje a Turquía",
    descriptionMore: "D'Istanbul à la Cappadoce, nous mêlons grande histoire et paysages qui semblent sortis d'un autre monde — un bazar millénaire un jour, un vol en montgolfière au lever du soleil le lendemain.",
    descriptionMoreEn: "From Istanbul to Cappadocia, we blend deep history with landscapes that look pulled from another world — a centuries-old bazaar one day, a sunrise balloon flight the next.",
    descriptionMoreEs: "De Estambul a Capadocia, combinamos gran historia con paisajes que parecen de otro mundo — un bazar milenario un día, un vuelo en globo al amanecer al siguiente.",
    heroImage: `${R2}/destinations/turquie-hero.jpg`,
    order: 15,
    featured: true,
  },
] as const;

// ── Real Agadir excursions (Morocco) ────────────────────────────────────────
const moroccoTours: Array<{
  name: string;
  nameEn: string;
  nameEs: string;
  slug: string;
  image: string;
  images?: string;
  description?: string;
  descriptionEn?: string;
  descriptionEs?: string;
  tagline: string;
  taglineEn: string;
  taglineEs: string;
  price: number;
  originalPrice: number;
  duration: string;
  durationEn: string;
  durationEs: string;
  category: string;
  theme: string;
  travelerTypes: string;
  featured: boolean;
  order: number;
  sections?: Array<{
    heading: string;
    headingEn: string;
    headingEs: string;
    body: string;
    bodyEn: string;
    bodyEs: string;
  }>;
}> = [
  {
    name: "Agadir City Tour et Cable Car",
    nameEn: "Agadir City Tour & Cable Car Ride",
    nameEs: "Tour por Agadir y teleférico",
    slug: "agadir-city-tour-cable-car",
    image: `${R2}/tours/agadir-city-tour-cable-car.jpg`,
    images: `${R2}/tours/agadir-city-tour-cable-car-gallery-1.jpg,${R2}/tours/agadir-city-tour-cable-car-gallery-2.jpg,${R2}/tours/agadir-city-tour-cable-car-gallery-3.jpg,${R2}/tours/agadir-city-tour-cable-car-gallery-4.jpg`,
    description: "Une matinée dans la médina d'art d'Agadir et sa Kasbah reconstruite, suivie d'une montée en téléphérique jusqu'au sommet qui domine toute la baie — la meilleure introduction à la ville en une seule sortie.",
    descriptionEn: "A morning in Agadir's crafts medina and its rebuilt Kasbah, followed by a cable car ride up to the summit overlooking the whole bay — the best introduction to the city in a single outing.",
    descriptionEs: "Una mañana en la medina de artesanía de Agadir y su Kasbah reconstruida, seguida de una subida en teleférico hasta la cima que domina toda la bahía — la mejor introducción a la ciudad en una sola salida.",
    sections: [
      {
        heading: "La médina d'art et la Kasbah",
        headingEn: "The crafts medina and the Kasbah",
        headingEs: "La medina de artesanía y la Kasbah",
        body: "La journée commence dans la médina d'art d'Agadir, reconstruite après le tremblement de terre de 1960 dans le respect des techniques traditionnelles — poterie, tissage, dinanderie, chaque atelier se visite avec un guide qui connaît les artisans par leur nom. La Kasbah, perchée sur la colline, offre ensuite un premier point de vue sur la baie avant la montée en téléphérique.",
        bodyEn: "The day begins in Agadir's crafts medina, rebuilt after the 1960 earthquake using traditional techniques — pottery, weaving, metalwork, each workshop visited with a guide who knows the artisans by name. The Kasbah, perched on the hill, then offers a first view over the bay before the cable car ride.",
        bodyEs: "El día comienza en la medina de artesanía de Agadir, reconstruida tras el terremoto de 1960 respetando las técnicas tradicionales — alfarería, tejido, cobre, cada taller se visita con un guía que conoce a los artesanos por su nombre. La Kasbah, encaramada en la colina, ofrece después un primer punto de vista sobre la bahía antes de subir en teleférico.",
      },
      {
        heading: "Le téléphérique et la vue sur la baie",
        headingEn: "The cable car and the bay view",
        headingEs: "El teleférico y la vista de la bahía",
        body: "La montée en téléphérique referme la sortie sur son point fort : un panorama à 360 degrés sur Agadir, l'océan Atlantique et les montagnes de l'Anti-Atlas en toile de fond. Un moment simple, mais qui donne d'un coup toute la mesure de la baie — idéal pour situer la ville avant de poursuivre les excursions.",
        bodyEn: "The cable car ride closes the outing on its strongest note: a 360-degree panorama over Agadir, the Atlantic Ocean, and the Anti-Atlas mountains in the background. A simple moment, but one that instantly captures the full scale of the bay — ideal for getting your bearings before further excursions.",
        bodyEs: "La subida en teleférico cierra la salida con su mejor momento: una panorámica de 360 grados sobre Agadir, el océano Atlántico y las montañas del Anti-Atlas de fondo. Un momento sencillo, pero que capta de golpe toda la magnitud de la bahía — ideal para situarse antes de seguir con más excursiones.",
      },
    ],
    tagline: "Médina, Kasbah et vue panoramique sur la baie",
    taglineEn: "Medina, Kasbah and a panoramic view over the bay",
    taglineEs: "Medina, Kasbah y vista panorámica de la bahía",
    price: 50,
    originalPrice: 65,
    duration: "1 jour",
    durationEn: "1 day",
    durationEs: "1 día",
    category: "activity",
    theme: "culture",
    travelerTypes: "family,couples,solo",
    featured: true,
    order: 1,
  },
  {
    name: "Agadir Quad Adventure",
    nameEn: "Agadir Quad Adventure Experience",
    nameEs: "Aventura en quad en Agadir",
    slug: "agadir-quad-adventure",
    image: `${R2}/tours/agadir-quad-adventure.jpg`,
    images: `${R2}/tours/agadir-quad-adventure-gallery-1.jpg,${R2}/tours/agadir-quad-adventure-gallery-2.jpg,${R2}/tours/agadir-quad-adventure-gallery-3.jpg,${R2}/tours/agadir-quad-adventure-gallery-4.jpg`,
    description: "Deux heures de quad sur les pistes et dunes du Souss-Massa, entre plantations d'arganiers et pistes de sable, avec un arrêt thé à la menthe dans un village berbère.",
    descriptionEn: "Two hours on quad bikes across the trails and dunes of Souss-Massa, between argan groves and sandy tracks, with a mint tea stop in a Berber village.",
    descriptionEs: "Dos horas en quad por las pistas y dunas de Souss-Massa, entre plantaciones de argán y pistas de arena, con parada de té a la menta en un pueblo bereber.",
    sections: [
      {
        heading: "Les pistes du Souss-Massa",
        headingEn: "The trails of Souss-Massa",
        headingEs: "Las pistas de Souss-Massa",
        body: "Après un briefing sécurité et un essai sur terrain plat, le convoi de quads s'élance sur les pistes qui traversent les plantations d'arganiers de la vallée du Souss. Le sol change vite de texture — terre battue, puis sable — et les premières dunes apparaissent à l'horizon, guide en tête pour indiquer la meilleure trajectoire.",
        bodyEn: "After a safety briefing and a practice run on flat ground, the convoy of quad bikes sets off along the trails that cross the argan groves of the Souss valley. The terrain quickly changes texture — packed earth, then sand — and the first dunes appear on the horizon, with a guide leading the way.",
        bodyEs: "Tras una charla de seguridad y una prueba en terreno llano, el convoy de quads arranca por las pistas que cruzan las plantaciones de argán del valle del Souss. El terreno cambia rápido de textura — tierra compacta, y después arena — y las primeras dunas aparecen en el horizonte, con un guía al frente marcando la mejor trayectoria.",
      },
      {
        heading: "Village berbère et thé à la menthe",
        headingEn: "A Berber village and mint tea",
        headingEs: "Pueblo bereber y té a la menta",
        body: "À mi-parcours, une halte dans un petit village berbère permet de reprendre son souffle autour d'un thé à la menthe traditionnel, servi par une famille locale. Le retour se fait par un itinéraire différent, dunes plus hautes et vue dégagée sur la vallée avant de rejoindre le point de départ.",
        bodyEn: "Halfway through, a stop in a small Berber village allows a breather over traditional mint tea, served by a local family. The return follows a different route, with taller dunes and open views over the valley before heading back to the starting point.",
        bodyEs: "A mitad de camino, una parada en un pequeño pueblo bereber permite tomar aliento con un té a la menta tradicional, servido por una familia local. El regreso sigue una ruta distinta, con dunas más altas y vistas abiertas sobre el valle antes de volver al punto de partida.",
      },
    ],
    tagline: "Dunes et pistes du Souss-Massa en quad",
    taglineEn: "Dunes and trails of Souss-Massa by quad bike",
    taglineEs: "Dunas y pistas de Souss-Massa en quad",
    price: 45,
    originalPrice: 50,
    duration: "1 jour",
    durationEn: "1 day",
    durationEs: "1 día",
    category: "activity",
    theme: "adventure",
    travelerTypes: "groups,couples,solo",
    featured: false,
    order: 2,
  },
  {
    name: "Balade à dos de chameau avec barbecue",
    nameEn: "Camel Ride with Barbecue",
    nameEs: "Paseo en camello con barbacoa",
    slug: "camel-ride-barbecue",
    image: `${R2}/tours/camel-ride-barbecue.jpg`,
    images: `${R2}/tours/camel-ride-barbecue-gallery-1.jpg,${R2}/tours/camel-ride-barbecue-gallery-2.jpg,${R2}/tours/camel-ride-barbecue-gallery-3.jpg,${R2}/tours/camel-ride-barbecue-gallery-4.jpg`,
    description: "Une heure de balade à dos de chameau le long de la plage d'Agadir au coucher du soleil, suivie d'un barbecue traditionnel sous tente berbère avec musique live.",
    descriptionEn: "An hour-long camel ride along Agadir's beach at sunset, followed by a traditional barbecue under a Berber tent with live music.",
    descriptionEs: "Una hora de paseo en camello por la playa de Agadir al atardecer, seguida de una barbacoa tradicional bajo una jaima bereber con música en vivo.",
    sections: [
      {
        heading: "Balade au coucher du soleil",
        headingEn: "A sunset ride",
        headingEs: "Paseo al atardecer",
        body: "Le rendez-vous est fixé en fin d'après-midi, quand la lumière commence à dorer le sable. Après une brève installation sur les chameaux, la caravane s'ébranle le long de la plage, rythme lent et régulier, le soleil descendant lentement vers l'Atlantique en toile de fond.",
        bodyEn: "The meeting point is set for late afternoon, as the light begins to turn the sand gold. After a brief mount-up on the camels, the caravan sets off along the beach at a slow, steady pace, the sun sinking toward the Atlantic in the background.",
        bodyEs: "La cita se fija a última hora de la tarde, cuando la luz empieza a dorar la arena. Tras una breve subida a los camellos, la caravana se pone en marcha por la playa, a un ritmo lento y constante, con el sol descendiendo hacia el Atlántico de fondo.",
      },
      {
        heading: "Barbecue sous tente berbère",
        headingEn: "Barbecue under a Berber tent",
        headingEs: "Barbacoa bajo jaima bereber",
        body: "La balade se termine sous une tente berbère dressée face à la mer, où un barbecue traditionnel — brochettes, salades marocaines, thé à la menthe — est servi au son de percussions live. Une manière simple et authentique de clore la journée, entre tradition et coucher de soleil.",
        bodyEn: "The ride ends beneath a Berber tent set up facing the sea, where a traditional barbecue — skewers, Moroccan salads, mint tea — is served to the sound of live percussion. A simple, authentic way to close the day, between tradition and sunset.",
        bodyEs: "El paseo termina bajo una jaima bereber montada frente al mar, donde se sirve una barbacoa tradicional — pinchos, ensaladas marroquíes, té a la menta — al son de percusión en vivo. Una forma sencilla y auténtica de cerrar el día, entre tradición y atardecer.",
      },
    ],
    tagline: "Coucher de soleil sur la plage, à dos de chameau",
    taglineEn: "Sunset on the beach, from the back of a camel",
    taglineEs: "Atardecer en la playa, a lomos de camello",
    price: 40,
    originalPrice: 45,
    duration: "2 heures",
    durationEn: "2 hours",
    durationEs: "2 horas",
    category: "activity",
    theme: "family",
    travelerTypes: "family,couples",
    featured: false,
    order: 3,
  },
  {
    name: "Hammam et Massage",
    nameEn: "Massage & Hammam Experience",
    nameEs: "Experiencia de hammam y masaje",
    slug: "hammam-massage",
    image: `${R2}/tours/hammam-massage.jpg`,
    images: `${R2}/tours/hammam-massage-gallery-1.jpg,${R2}/tours/hammam-massage-gallery-2.jpg,${R2}/tours/hammam-massage-gallery-3.jpg,${R2}/tours/hammam-massage-gallery-4.jpg`,
    description: "Un rituel de hammam traditionnel marocain — vapeur, gommage au savon noir, rhassoul — suivi d'un massage relaxant à l'huile d'argan, dans un cadre calme au cœur d'Agadir.",
    descriptionEn: "A traditional Moroccan hammam ritual — steam, black soap scrub, rhassoul clay — followed by a relaxing argan oil massage, in a calm setting in the heart of Agadir.",
    descriptionEs: "Un ritual de hammam tradicional marroquí — vapor, exfoliación con jabón negro, rhassoul — seguido de un masaje relajante con aceite de argán, en un entorno tranquilo en el corazón de Agadir.",
    sections: [
      {
        heading: "Le rituel du hammam",
        headingEn: "The hammam ritual",
        headingEs: "El ritual del hammam",
        body: "Le rituel commence par une phase de vapeur qui détend les muscles et ouvre les pores, avant un gommage complet au savon noir traditionnel, préparé à base d'olives. Un passage au rhassoul, argile volcanique utilisée depuis des siècles au Maroc, referme ce premier temps du soin — la peau est nette, souple, prête pour le massage.",
        bodyEn: "The ritual begins with a steam phase that relaxes the muscles and opens the pores, before a full-body scrub with traditional black soap, made from olives. A rhassoul clay treatment, a volcanic clay used for centuries in Morocco, closes this first stage — the skin left clean and supple, ready for the massage.",
        bodyEs: "El ritual comienza con una fase de vapor que relaja los músculos y abre los poros, antes de una exfoliación completa con jabón negro tradicional, elaborado a base de aceitunas. Un paso por el rhassoul, arcilla volcánica usada desde hace siglos en Marruecos, cierra esta primera parte del tratamiento — la piel queda limpia y flexible, lista para el masaje.",
      },
      {
        heading: "Massage à l'huile d'argan",
        headingEn: "Argan oil massage",
        headingEs: "Masaje con aceite de argán",
        body: "Le soin se termine par un massage relaxant à l'huile d'argan pure, produite localement dans la région du Souss. Une expérience pensée pour ralentir le rythme, loin de l'agitation de la ville, dans un cadre calme et discret au cœur d'Agadir.",
        bodyEn: "The treatment ends with a relaxing massage using pure argan oil, produced locally in the Souss region. An experience designed to slow the pace, away from the city's bustle, in a calm and discreet setting in the heart of Agadir.",
        bodyEs: "El tratamiento termina con un masaje relajante con aceite de argán puro, producido localmente en la región del Souss. Una experiencia pensada para bajar el ritmo, lejos del bullicio de la ciudad, en un entorno tranquilo y discreto en el corazón de Agadir.",
      },
    ],
    tagline: "Rituel traditionnel marocain, gommage et massage",
    taglineEn: "Traditional Moroccan ritual, scrub and massage",
    taglineEs: "Ritual tradicional marroquí, exfoliación y masaje",
    price: 45,
    originalPrice: 50,
    duration: "1 jour",
    durationEn: "1 day",
    durationEs: "1 día",
    category: "activity",
    theme: "relax",
    travelerTypes: "couples,honeymoon,solo",
    featured: false,
    order: 4,
  },
  {
    name: "Cours de cuisine berbère",
    nameEn: "Berber Cooking Class",
    nameEs: "Clase de cocina bereber",
    slug: "cours-cuisine-berbere",
    image: `${R2}/tours/cours-cuisine-berbere.jpg`,
    images: `${R2}/tours/cours-cuisine-berbere-gallery-1.jpg,${R2}/tours/cours-cuisine-berbere-gallery-2.jpg,${R2}/tours/cours-cuisine-berbere-gallery-3.jpg,${R2}/tours/cours-cuisine-berbere-gallery-4.jpg`,
    description: "Quatre heures en cuisine avec une famille berbère, marché local puis préparation d'un tajine et d'un pain traditionnel cuit au four à bois, partagés ensemble en fin de séance.",
    descriptionEn: "Four hours in the kitchen with a Berber family, a local market visit then preparing a tagine and traditional wood-fired bread, shared together at the end of the session.",
    descriptionEs: "Cuatro horas de cocina con una familia bereber, mercado local y preparación de un tajine y un pan tradicional cocido en horno de leña, compartidos juntos al final de la sesión.",
    sections: [
      {
        heading: "Le marché avant tout",
        headingEn: "The market first",
        headingEs: "Primero, el mercado",
        body: "La matinée commence par une visite du marché local avec la famille hôte, pour choisir légumes, épices et viande selon ce qui est le plus frais du jour. C'est aussi l'occasion d'échanger sur les habitudes alimentaires marocaines et de repérer les épices essentielles d'un tajine réussi — cumin, gingembre, safran, ras el hanout.",
        bodyEn: "The morning starts with a visit to the local market alongside the host family, choosing vegetables, spices, and meat based on what's freshest that day. It's also a chance to talk about Moroccan eating habits and spot the essential spices for a good tagine — cumin, ginger, saffron, ras el hanout.",
        bodyEs: "La mañana comienza con una visita al mercado local junto a la familia anfitriona, para elegir verduras, especias y carne según lo más fresco del día. Es también una ocasión para hablar de los hábitos alimentarios marroquíes y descubrir las especias esenciales de un buen tajine — comino, jengibre, azafrán, ras el hanout.",
      },
      {
        heading: "En cuisine, en famille",
        headingEn: "In the kitchen, as a family",
        headingEs: "En la cocina, en familia",
        body: "De retour à la maison, la préparation du tajine se fait pas à pas, aux côtés de la famille, dans une cuisine ouverte sur la cour intérieure. Le pain traditionnel, pétri à la main, cuit ensuite dans un four à bois. Le repas se partage à la fin, autour de la même table que la famille — le meilleur moment pour comparer les recettes avec celles de chez soi.",
        bodyEn: "Back at the house, the tagine comes together step by step, alongside the family, in a kitchen open onto the inner courtyard. Traditional bread, hand-kneaded, then bakes in a wood-fired oven. The meal is shared at the end, at the same table as the family — the best moment to compare recipes with the ones back home.",
        bodyEs: "De vuelta en la casa, el tajine se prepara paso a paso, junto a la familia, en una cocina abierta al patio interior. El pan tradicional, amasado a mano, se cuece después en un horno de leña. La comida se comparte al final, en la misma mesa que la familia — el mejor momento para comparar recetas con las de casa.",
      },
    ],
    tagline: "4h en cuisine avec une famille locale",
    taglineEn: "4 hours in the kitchen with a local family",
    taglineEs: "4 horas de cocina con una familia local",
    price: 56,
    originalPrice: 70,
    duration: "4 heures",
    durationEn: "4 hours",
    durationEs: "4 horas",
    category: "activity",
    theme: "culture",
    travelerTypes: "family,groups,couples",
    featured: false,
    order: 5,
  },
  {
    name: "Excursion à Tafraout",
    nameEn: "Day Trip to Tafraout",
    nameEs: "Excursión de un día a Tafraout",
    slug: "excursion-tafraout",
    image: `${R2}/tours/excursion-tafraout.jpg`,
    images: `${R2}/tours/excursion-tafraout-gallery-1.jpg,${R2}/tours/excursion-tafraout-gallery-2.jpg,${R2}/tours/excursion-tafraout-gallery-3.jpg,${R2}/tours/excursion-tafraout-gallery-4.jpg`,
    description: "Une journée dans l'Anti-Atlas, entre les vallées d'amandiers de Tafraout, ses villages de granit rose et les rochers peints d'un artiste belge dans les années 1980, à une heure et demie de route d'Agadir.",
    descriptionEn: "A day in the Anti-Atlas, between Tafraout's almond valleys, its pink-granite villages, and the rocks painted by a Belgian artist in the 1980s, an hour and a half's drive from Agadir.",
    descriptionEs: "Un día en el Anti-Atlas, entre los valles de almendros de Tafraout, sus pueblos de granito rosa y las rocas pintadas por un artista belga en los años 80, a hora y media en coche desde Agadir.",
    sections: [
      {
        heading: "La route vers l'Anti-Atlas",
        headingEn: "The road into the Anti-Atlas",
        headingEs: "La ruta hacia el Anti-Atlas",
        body: "La route grimpe rapidement dans les montagnes de l'Anti-Atlas, lacets serrés et panoramas qui s'ouvrent à chaque virage. Tafraout apparaît nichée entre des formations de granit rose, ses maisons traditionnelles se fondant presque dans la roche environnante — un décor qui change radicalement de la côte agadirie.",
        bodyEn: "The road climbs quickly into the Anti-Atlas mountains, tight switchbacks and panoramas opening at every bend. Tafraout appears nestled among pink-granite formations, its traditional houses almost blending into the surrounding rock — a backdrop radically different from the Agadir coast.",
        bodyEs: "La carretera sube rápidamente hacia las montañas del Anti-Atlas, curvas cerradas y panorámicas que se abren en cada recodo. Tafraout aparece encajada entre formaciones de granito rosa, sus casas tradicionales casi fundiéndose con la roca circundante — un paisaje radicalmente distinto de la costa de Agadir.",
      },
      {
        heading: "Rochers peints et vallées d'amandiers",
        headingEn: "Painted rocks and almond valleys",
        headingEs: "Rocas pintadas y valles de almendros",
        body: "Les rochers peints, œuvre de l'artiste belge Jean Vérame réalisée dans les années 1980, offrent une halte insolite en pleine nature. Selon la saison, la route serpente aussi à travers les vallées d'amandiers en fleurs, particulièrement spectaculaires en février — un contraste inattendu entre roche minérale et floraison délicate.",
        bodyEn: "The painted rocks, a work by Belgian artist Jean Vérame created in the 1980s, offer an unusual stop in the middle of nature. Depending on the season, the road also winds through blooming almond valleys, particularly striking in February — an unexpected contrast between bare rock and delicate blossom.",
        bodyEs: "Las rocas pintadas, obra del artista belga Jean Vérame realizada en los años 80, ofrecen una parada insólita en plena naturaleza. Según la temporada, la carretera también serpentea por valles de almendros en flor, especialmente espectaculares en febrero — un contraste inesperado entre roca mineral y floración delicada.",
      },
    ],
    tagline: "Vallées d'amandiers et rochers peints de l'Anti-Atlas",
    taglineEn: "Almond valleys and painted rocks of the Anti-Atlas",
    taglineEs: "Valles de almendros y rocas pintadas del Anti-Atlas",
    price: 75,
    originalPrice: 85,
    duration: "1 jour",
    durationEn: "1 day",
    durationEs: "1 día",
    category: "tour",
    theme: "culture",
    travelerTypes: "couples,solo,groups",
    featured: false,
    order: 6,
  },
  {
    name: "Paradise Valley",
    nameEn: "Agadir Paradise Valley Tour",
    nameEs: "Tour por Paradise Valley",
    slug: "paradise-valley",
    image: `${R2}/tours/paradise-valley.jpg`,
    images: `${R2}/tours/paradise-valley-gallery-1.jpg,${R2}/tours/paradise-valley-gallery-2.jpg,${R2}/tours/paradise-valley-gallery-3.jpg,${R2}/tours/paradise-valley-gallery-4.jpg`,
    description: "Une randonnée facile jusqu'aux piscines naturelles nichées dans la vallée de l'Atlas, entre palmiers et rochers, avec le temps de se baigner et un pique-nique en chemin.",
    descriptionEn: "An easy hike to the natural pools tucked into the Atlas valley, among palm trees and rocks, with time to swim and a picnic along the way.",
    descriptionEs: "Una caminata sencilla hasta las piscinas naturales del valle del Atlas, entre palmeras y rocas, con tiempo para bañarse y un picnic en el camino.",
    sections: [
      {
        heading: "La vallée et ses palmeraies",
        headingEn: "The valley and its palm groves",
        headingEs: "El valle y sus palmerales",
        body: "La route quitte Agadir vers le nord, longeant la côte avant de bifurquer vers les palmeraies de la vallée de l'Atlas. La randonnée, accessible à tous les niveaux, descend en douceur entre rochers et végétation dense jusqu'aux premières piscines naturelles, alimentées par une source qui ne tarit jamais, même en plein été.",
        bodyEn: "The road leaves Agadir heading north, hugging the coast before turning inland toward the palm groves of the Atlas valley. The hike, suited to all fitness levels, descends gently between rocks and dense vegetation to the first natural pools, fed by a spring that never runs dry, even in high summer.",
        bodyEs: "La ruta sale de Agadir hacia el norte, bordeando la costa antes de girar hacia los palmerales del valle del Atlas. La caminata, apta para todos los niveles, desciende suavemente entre rocas y vegetación densa hasta las primeras piscinas naturales, alimentadas por un manantial que nunca se seca, ni siquiera en pleno verano.",
      },
      {
        heading: "Baignade et pique-nique",
        headingEn: "Swimming and a picnic",
        headingEs: "Baño y picnic",
        body: "Un temps libre est prévu pour se baigner dans les vasques d'eau claire, certaines assez profondes pour sauter depuis les rochers environnants. Un pique-nique traditionnel, préparé par les guides locaux, est servi à l'ombre des palmiers avant la remontée vers le point de départ.",
        bodyEn: "Free time is set aside for swimming in the clear pools, some deep enough to jump from the surrounding rocks. A traditional picnic, prepared by the local guides, is served in the shade of the palm trees before heading back up to the starting point.",
        bodyEs: "Se reserva tiempo libre para bañarse en las pozas de agua clara, algunas lo bastante profundas como para saltar desde las rocas cercanas. Se sirve un picnic tradicional, preparado por los guías locales, a la sombra de las palmeras antes de subir de vuelta al punto de partida.",
      },
    ],
    tagline: "Piscines naturelles nichées dans la vallée de l'Atlas",
    taglineEn: "Natural pools tucked into the Atlas valley",
    taglineEs: "Piscinas naturales en el valle del Atlas",
    price: 25,
    originalPrice: 45,
    duration: "1 jour",
    durationEn: "1 day",
    durationEs: "1 día",
    category: "tour",
    theme: "family",
    travelerTypes: "family,couples",
    featured: true,
    order: 7,
  },
  {
    name: "Découverte de Taghazout",
    nameEn: "Taghazout Town Discovery",
    nameEs: "Descubrimiento de Taghazout",
    slug: "decouverte-taghazout",
    image: `${R2}/tours/decouverte-taghazout.jpg`,
    images: `${R2}/tours/decouverte-taghazout-gallery-1.jpg,${R2}/tours/decouverte-taghazout-gallery-2.jpg,${R2}/tours/decouverte-taghazout-gallery-3.jpg,${R2}/tours/decouverte-taghazout-gallery-4.jpg`,
    description: "Une journée dans le village de surfeurs de Taghazout, ruelles bleues et blanches, spots de surf le long de la côte, et un déjeuner de poisson face à l'océan.",
    descriptionEn: "A day in the surf village of Taghazout, blue-and-white lanes, surf spots along the coast, and a fish lunch facing the ocean.",
    descriptionEs: "Un día en el pueblo de surfistas de Taghazout, calles azules y blancas, spots de surf a lo largo de la costa, y un almuerzo de pescado frente al océano.",
    sections: [
      {
        heading: "Ruelles bleues et vie de village",
        headingEn: "Blue lanes and village life",
        headingEs: "Calles azules y vida de pueblo",
        body: "Ancien village de pêcheurs devenu repaire de surfeurs depuis les années 1970, Taghazout a gardé son échelle humaine malgré sa popularité grandissante. La balade dans ses ruelles bleues et blanches, entre cafés simples et boutiques de planches de surf, donne un aperçu de cette double identité — traditionnelle et décontractée à la fois.",
        bodyEn: "A former fishing village turned surfers' haunt since the 1970s, Taghazout has kept its human scale despite its growing popularity. A walk through its blue-and-white lanes, between simple cafés and surfboard shops, offers a glimpse of this dual identity — both traditional and laid-back.",
        bodyEs: "Antiguo pueblo de pescadores convertido en refugio de surfistas desde los años 70, Taghazout ha conservado su escala humana pese a su popularidad creciente. El paseo por sus calles azules y blancas, entre cafés sencillos y tiendas de tablas de surf, ofrece un vistazo de esta doble identidad — tradicional y relajada a la vez.",
      },
      {
        heading: "Les plages sauvages et le déjeuner de poisson",
        headingEn: "Wild beaches and a fish lunch",
        headingEs: "Playas salvajes y almuerzo de pescado",
        body: "La côte autour de Taghazout enchaîne des spots de surf réputés à l'échelle internationale, et des plages sauvages où l'on peut simplement observer les vagues depuis les rochers. La journée se termine par un déjeuner de poisson tout juste pêché, servi dans un petit restaurant face à l'océan.",
        bodyEn: "The coastline around Taghazout strings together internationally renowned surf spots and wild beaches where you can simply watch the waves from the rocks. The day ends with a lunch of freshly caught fish, served at a small restaurant facing the ocean.",
        bodyEs: "La costa alrededor de Taghazout enlaza spots de surf de renombre internacional con playas salvajes donde simplemente se puede observar las olas desde las rocas. El día termina con un almuerzo de pescado recién capturado, servido en un pequeño restaurante frente al océano.",
      },
    ],
    tagline: "Village de surfeurs et plages sauvages",
    taglineEn: "Surfers' village and wild beaches",
    taglineEs: "Pueblo de surfistas y playas salvajes",
    price: 35,
    originalPrice: 45,
    duration: "1 jour",
    durationEn: "1 day",
    durationEs: "1 día",
    category: "tour",
    theme: "relax",
    travelerTypes: "couples,solo,honeymoon",
    featured: false,
    order: 8,
  },
  {
    name: "Marrakech au départ d'Agadir",
    nameEn: "Marrakech Trip from Agadir",
    nameEs: "Viaje a Marrakech desde Agadir",
    slug: "marrakech-depuis-agadir",
    image: `${R2}/tours/marrakech-depuis-agadir.jpg`,
    images: `${R2}/tours/marrakech-depuis-agadir-gallery-1.jpg,${R2}/tours/marrakech-depuis-agadir-gallery-2.jpg,${R2}/tours/marrakech-depuis-agadir-gallery-3.jpg,${R2}/tours/marrakech-depuis-agadir-gallery-4.jpg`,
    description: "La ville rouge en une seule journée, entre la place Jemaa el-Fna, les souks animés de la médina et les jardins Majorelle, avec un départ matinal d'Agadir et un retour en soirée.",
    descriptionEn: "The Red City in a single day, between Jemaa el-Fna square, the medina's lively souks, and the Majorelle Gardens, with an early departure from Agadir and an evening return.",
    descriptionEs: "La ciudad roja en un solo día, entre la plaza Jemaa el-Fna, los animados zocos de la medina y los jardines Majorelle, con salida matinal desde Agadir y regreso por la noche.",
    sections: [
      {
        heading: "La médina et ses souks",
        headingEn: "The medina and its souks",
        headingEs: "La medina y sus zocos",
        body: "Après trois heures de route depuis Agadir, la journée démarre dans les souks de la médina de Marrakech — épices, cuir, tapis, dinanderie, un dédale de ruelles couvertes où chaque virage réserve une nouvelle scène. La place Jemaa el-Fna, cœur battant de la ville, se traverse en fin de matinée, encore relativement calme avant l'agitation du soir.",
        bodyEn: "After three hours on the road from Agadir, the day begins in the souks of Marrakech's medina — spices, leather, carpets, metalwork, a maze of covered lanes where every turn reveals a new scene. Jemaa el-Fna square, the city's beating heart, is crossed late morning, still relatively calm before the evening's bustle.",
        bodyEs: "Tras tres horas de carretera desde Agadir, el día comienza en los zocos de la medina de Marrakech — especias, cuero, alfombras, cobre, un laberinto de callejuelas cubiertas donde cada giro reserva una nueva escena. La plaza Jemaa el-Fna, corazón palpitante de la ciudad, se cruza a última hora de la mañana, todavía relativamente tranquila antes del bullicio del atardecer.",
      },
      {
        heading: "Les jardins Majorelle",
        headingEn: "The Majorelle Gardens",
        headingEs: "Los jardines Majorelle",
        body: "L'après-midi s'ouvre sur les jardins Majorelle, havre de bambous et de bleu profond restauré par Yves Saint Laurent, avant un dernier passage dans la ville nouvelle pour un thé à la menthe. Le retour vers Agadir se fait en fin de journée, avec le temps d'un dernier regard sur les remparts ocres de Marrakech avant la nuit.",
        bodyEn: "The afternoon opens with the Majorelle Gardens, a haven of bamboo and deep blue restored by Yves Saint Laurent, before a last stop in the new city for mint tea. The return to Agadir happens later in the day, with time for one last look at Marrakech's ochre ramparts before nightfall.",
        bodyEs: "La tarde se abre con los jardines Majorelle, un refugio de bambú y azul profundo restaurado por Yves Saint Laurent, antes de una última parada en la ciudad nueva para un té a la menta. El regreso a Agadir se hace al final del día, con tiempo para una última mirada a las murallas ocres de Marrakech antes de la noche.",
      },
    ],
    tagline: "La ville rouge en une journée",
    taglineEn: "The Red City in a single day",
    taglineEs: "La ciudad roja en un día",
    price: 45,
    originalPrice: 53,
    duration: "1 jour",
    durationEn: "1 day",
    durationEs: "1 día",
    category: "tour",
    theme: "culture",
    travelerTypes: "family,couples,groups",
    featured: false,
    order: 9,
  },
  {
    name: "Safari désert avec déjeuner",
    nameEn: "Agadir Desert Safari with Lunch",
    nameEs: "Safari por el desierto con almuerzo",
    slug: "safari-desert-dejeuner",
    image: `${R2}/tours/safari-desert-dejeuner.jpg`,
    images: `${R2}/tours/safari-desert-dejeuner-gallery-1.jpg,${R2}/tours/safari-desert-dejeuner-gallery-2.jpg,${R2}/tours/safari-desert-dejeuner-gallery-3.jpg,${R2}/tours/safari-desert-dejeuner-gallery-4.jpg`,
    description: "Une journée en 4x4 vers Sidi R'bat, entre embouchure sauvage de l'oued Massa et dunes côtières, avec un déjeuner traditionnel servi sous tente en plein désert.",
    descriptionEn: "A day by 4x4 to Sidi R'bat, between the wild mouth of the Oued Massa and coastal dunes, with a traditional lunch served under a tent in the open desert.",
    descriptionEs: "Un día en 4x4 hasta Sidi R'bat, entre la desembocadura salvaje del oued Massa y dunas costeras, con un almuerzo tradicional servido bajo una jaima en pleno desierto.",
    sections: [
      {
        heading: "Sidi R'bat et l'embouchure de l'oued Massa",
        headingEn: "Sidi R'bat and the mouth of the Oued Massa",
        headingEs: "Sidi R'bat y la desembocadura del oued Massa",
        body: "Le 4x4 quitte Agadir vers le sud, direction Sidi R'bat, où l'oued Massa se jette dans l'Atlantique dans un paysage sauvage de dunes et de marais. Le site, réputé pour son observation d'oiseaux migrateurs, offre un contraste saisissant entre désert et océan, à quelques encablures seulement de la côte agadirie.",
        bodyEn: "The 4x4 leaves Agadir heading south toward Sidi R'bat, where the Oued Massa flows into the Atlantic through a wild landscape of dunes and marshland. The site, known for its migratory bird watching, offers a striking contrast between desert and ocean, just a short distance from the Agadir coast.",
        bodyEs: "El 4x4 sale de Agadir hacia el sur, rumbo a Sidi R'bat, donde el oued Massa desemboca en el Atlántico en un paisaje salvaje de dunas y marismas. El lugar, conocido por la observación de aves migratorias, ofrece un contraste sorprendente entre desierto y océano, a poca distancia de la costa de Agadir.",
      },
      {
        heading: "Déjeuner sous tente dans les dunes",
        headingEn: "Lunch under a tent in the dunes",
        headingEs: "Almuerzo bajo jaima en las dunas",
        body: "Après une progression en 4x4 à travers les dunes côtières, la journée se conclut par un déjeuner traditionnel servi sous une tente berbère dressée en plein désert — tajine, thé à la menthe, et une vue dégagée sur l'horizon désertique, loin de toute agitation urbaine.",
        bodyEn: "After a 4x4 drive through the coastal dunes, the day ends with a traditional lunch served under a Berber tent pitched in the open desert — tagine, mint tea, and an open view over the desert horizon, far from any city bustle.",
        bodyEs: "Tras un recorrido en 4x4 por las dunas costeras, el día termina con un almuerzo tradicional servido bajo una jaima bereber montada en pleno desierto — tajine, té a la menta, y una vista despejada sobre el horizonte desértico, lejos de todo bullicio urbano.",
      },
    ],
    tagline: "Sidi R'bat, dunes et déjeuner traditionnel",
    taglineEn: "Sidi R'bat, dunes and a traditional lunch",
    taglineEs: "Sidi R'bat, dunas y almuerzo tradicional",
    price: 55,
    originalPrice: 56,
    duration: "1 jour",
    durationEn: "1 day",
    durationEs: "1 día",
    category: "tour",
    theme: "adventure",
    travelerTypes: "couples,groups,solo",
    featured: false,
    order: 10,
  },
  {
    name: "Parc National de Souss-Massa en 4x4",
    nameEn: "Souss Massa National Park 4x4",
    nameEs: "Parque Nacional Souss-Massa en 4x4",
    slug: "souss-massa-4x4",
    image: `${R2}/tours/souss-massa-4x4.jpg`,
    images: `${R2}/tours/souss-massa-4x4-gallery-1.jpg,${R2}/tours/souss-massa-4x4-gallery-2.jpg,${R2}/tours/souss-massa-4x4-gallery-3.jpg,${R2}/tours/souss-massa-4x4-gallery-4.jpg`,
    description: "Une journée en 4x4 dans le parc national de Souss-Massa, à la recherche de l'ibis chauve, une des espèces d'oiseaux les plus rares au monde, entre falaises côtières et plaines protégées.",
    descriptionEn: "A day by 4x4 in Souss-Massa National Park, in search of the northern bald ibis, one of the rarest bird species in the world, between coastal cliffs and protected plains.",
    descriptionEs: "Un día en 4x4 por el parque nacional de Souss-Massa, en busca del ibis eremita, una de las especies de aves más raras del mundo, entre acantilados costeros y llanuras protegidas.",
    sections: [
      {
        heading: "Un parc national protégé",
        headingEn: "A protected national park",
        headingEs: "Un parque nacional protegido",
        body: "Créé pour protéger l'une des dernières populations sauvages d'ibis chauve au monde, le parc national de Souss-Massa s'étend le long de la côte sur des dizaines de kilomètres. Le 4x4 permet d'accéder à des zones autrement difficiles d'accès, entre falaises abruptes tombant dans l'Atlantique et plaines semi-arides.",
        bodyEn: "Created to protect one of the world's last wild populations of northern bald ibis, Souss-Massa National Park stretches along the coast for dozens of kilometres. The 4x4 gives access to areas otherwise hard to reach, between sheer cliffs dropping into the Atlantic and semi-arid plains.",
        bodyEs: "Creado para proteger una de las últimas poblaciones salvajes de ibis eremita del mundo, el parque nacional de Souss-Massa se extiende a lo largo de la costa durante decenas de kilómetros. El 4x4 permite acceder a zonas de otro modo difíciles de alcanzar, entre acantilados abruptos que caen al Atlántico y llanuras semiáridas.",
      },
      {
        heading: "Faune et paysages sauvages",
        headingEn: "Wildlife and wild landscapes",
        headingEs: "Fauna y paisajes salvajes",
        body: "Un guide naturaliste accompagne la sortie pour repérer l'ibis chauve et les autres espèces d'oiseaux qui peuplent le parc, gazelles dorcas et fennecs figurant aussi parmi les rencontres possibles selon la saison. La journée alterne entre observation à pied et déplacements en 4x4 à travers des paysages qui changent radicalement de la côte urbanisée d'Agadir.",
        bodyEn: "A naturalist guide accompanies the outing to spot the bald ibis and the park's other bird species, with dorcas gazelles and fennec foxes also possible sightings depending on the season. The day alternates between on-foot observation and 4x4 drives through landscapes radically different from Agadir's built-up coastline.",
        bodyEs: "Un guía naturalista acompaña la salida para localizar el ibis eremita y otras especies de aves que pueblan el parque, con gacelas dorcas y zorros fenec también entre los posibles avistamientos según la temporada. El día alterna entre observación a pie y desplazamientos en 4x4 por paisajes radicalmente distintos de la costa urbanizada de Agadir.",
      },
    ],
    tagline: "Faune protégée et paysages sauvages",
    taglineEn: "Protected wildlife and wild landscapes",
    taglineEs: "Fauna protegida y paisajes salvajes",
    price: 96,
    originalPrice: 96,
    duration: "1 jour",
    durationEn: "1 day",
    durationEs: "1 día",
    category: "tour",
    theme: "adventure",
    travelerTypes: "family,groups,solo",
    featured: false,
    order: 11,
  },
  {
    name: "Circuit désert de Merzouga — 3 jours",
    nameEn: "3-Day Merzouga Desert Tour",
    nameEs: "Circuito de 3 días por el desierto de Merzouga",
    slug: "merzouga-3-jours",
    image: `${R2}/tours/merzouga-3-jours.jpg`,
    images: `${R2}/tours/merzouga-3-jours-gallery-1.jpg,${R2}/tours/merzouga-3-jours-gallery-2.jpg,${R2}/tours/merzouga-3-jours-gallery-3.jpg,${R2}/tours/merzouga-3-jours-gallery-4.jpg,${R2}/tours/merzouga-3-jours-gallery-5.jpg`,
    description: "Trois jours de route depuis Agadir jusqu'aux dunes de l'Erg Chebbi à Merzouga, à travers le col du Tizi n'Test et les gorges du Dadès, avec une nuit sous tente au cœur du grand Sahara.",
    descriptionEn: "Three days on the road from Agadir to the dunes of Erg Chebbi in Merzouga, through the Tizi n'Test pass and the Dadès Gorges, with a night under canvas in the heart of the great Sahara.",
    descriptionEs: "Tres días de ruta desde Agadir hasta las dunas de Erg Chebbi en Merzouga, a través del puerto de Tizi n'Test y las gargantas del Dadès, con una noche bajo jaima en el corazón del gran Sahara.",
    sections: [
      {
        heading: "De l'Atlas aux gorges du Dadès",
        headingEn: "From the Atlas to the Dadès Gorges",
        headingEs: "Del Atlas a las gargantas del Dadès",
        body: "Le premier jour franchit le col du Tizi n'Test, route de montagne spectaculaire à travers le Haut Atlas, avant une nuit à Ouarzazate, porte du désert et ancienne étape des studios de cinéma. Le deuxième jour longe la vallée du Dadès et ses gorges spectaculaires, falaises rouges sculptées par des siècles d'érosion, avant d'atteindre les premières dunes en fin de journée.",
        bodyEn: "The first day crosses the Tizi n'Test pass, a spectacular mountain road through the High Atlas, before a night in Ouarzazate, gateway to the desert and a former film studio stopover. The second day follows the Dadès valley and its dramatic gorges, red cliffs sculpted by centuries of erosion, before reaching the first dunes later in the day.",
        bodyEs: "El primer día cruza el puerto de Tizi n'Test, una carretera de montaña espectacular a través del Alto Atlas, antes de una noche en Ouarzazate, puerta del desierto y antigua parada de estudios de cine. El segundo día recorre el valle del Dadès y sus gargantas espectaculares, acantilados rojos esculpidos por siglos de erosión, antes de alcanzar las primeras dunas al final del día.",
      },
      {
        heading: "Une nuit dans l'Erg Chebbi",
        headingEn: "A night in the Erg Chebbi",
        headingEs: "Una noche en el Erg Chebbi",
        body: "L'arrivée à Merzouga se fait à dos de chameau, en direction d'un campement de tentes berbères planté au cœur des dunes de l'Erg Chebbi, parmi les plus hautes du Maroc. Un dîner traditionnel et une nuit à la belle étoile, loin de toute pollution lumineuse, précèdent un lever de soleil sur les dunes avant le trajet retour vers Agadir le troisième jour.",
        bodyEn: "The arrival in Merzouga is made by camel, heading toward a camp of Berber tents pitched in the heart of the Erg Chebbi dunes, among the highest in Morocco. A traditional dinner and a night under the stars, far from any light pollution, precede a sunrise over the dunes before the return trip to Agadir on the third day.",
        bodyEs: "La llegada a Merzouga se hace a lomos de camello, hacia un campamento de jaimas bereberes plantado en el corazón de las dunas de Erg Chebbi, entre las más altas de Marruecos. Una cena tradicional y una noche a la intemperie, lejos de toda contaminación lumínica, preceden a un amanecer sobre las dunas antes del trayecto de regreso a Agadir el tercer día.",
      },
    ],
    tagline: "Nuit sous les étoiles dans le grand Sahara",
    taglineEn: "A night under the stars in the great Sahara",
    taglineEs: "Una noche bajo las estrellas en el gran Sahara",
    price: 450,
    originalPrice: 500,
    duration: "3 jours",
    durationEn: "3 days",
    durationEs: "3 días",
    category: "multi-day",
    theme: "adventure",
    travelerTypes: "couples,honeymoon,groups",
    featured: true,
    order: 12,
  },
];

// ── Example worldwide trips (starter catalog — see note above) ─────────────
const worldTrips: Array<{
  destinationSlug: string;
  tour: Record<string, unknown>;
  days: Array<{
    dayNumber: number;
    location: string;
    locationEn: string;
    locationEs: string;
    title: string;
    titleEn: string;
    titleEs: string;
    description: string;
    descriptionEn: string;
    descriptionEs: string;
  }>;
  // Standard trip-page content (format: "standard") — narrative sections + hotel cards.
  // Optional: only populated for trips that have had their full standard page built out.
  sections?: Array<{
    heading: string;
    headingEn: string;
    headingEs: string;
    body: string;
    bodyEn: string;
    bodyEs: string;
  }>;
  hotels?: Array<{
    name: string;
    nameEn: string;
    nameEs: string;
    description: string;
    descriptionEn: string;
    descriptionEs: string;
    image: string;
  }>;
}> = [
  {
    destinationSlug: "japon",
    tour: {
      name: "Kyoto à Tokyo : le vieux et le nouveau Japon",
      nameEn: "Kyoto to Tokyo: Old Japan, New Japan",
      nameEs: "De Kioto a Tokio: el viejo y el nuevo Japón",
      slug: "japon-kyoto-tokyo",
      image: `${R2}/tours/japon-kyoto-tokyo.jpg`,
      images: `${R2}/trips/japon-gallery-1.jpg,${R2}/trips/japon-gallery-2.jpg,${R2}/trips/japon-gallery-3.jpg,${R2}/trips/japon-gallery-4.jpg,${R2}/trips/japon-gallery-5.jpg,${R2}/trips/japon-gallery-6.jpg`,
      whenLabel: "Mars à mai | Oct à nov",
      whenLabelEn: "March to May | Oct to Nov",
      whenLabelEs: "Marzo a mayo | Oct a nov",
      tagline: "Des temples à l'aube, du néon à minuit",
      taglineEn: "Temples at dawn, neon at midnight",
      taglineEs: "Templos al amanecer, neón a medianoche",
      description:
        "Un voyage en deux temps : le Japon ancien de Kyoto, ses temples de bois et ses jardins de mousse, puis le vertige électrique de Tokyo. Entre les deux, une nuit dans un ryokan de montagne, pieds dans l'onsen, tête dans les nuages.",
      descriptionEn:
        "A journey in two movements: the old Japan of Kyoto, its wooden temples and moss gardens, then the electric vertigo of Tokyo. In between, a night at a mountain ryokan, feet in the onsen, head in the clouds.",
      descriptionEs:
        "Un viaje en dos tiempos: el antiguo Japón de Kioto, sus templos de madera y jardines de musgo, y después el vértigo eléctrico de Tokio. Entre ambos, una noche en un ryokan de montaña, con los pies en el onsen.",
      price: 7500,
      originalPrice: 0,
      currency: "EUR",
      duration: "8 nuits",
      durationEn: "8 nights",
      durationEs: "8 noches",
      category: "multi-day",
      theme: "culture",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 2,
      featured: true,
      order: 1,
    },
    days: [
      { dayNumber: 1, location: "Kyoto", locationEn: "Kyoto", locationEs: "Kioto", title: "Premiers pas dans Gion", titleEn: "First steps in Gion", titleEs: "Primeros pasos en Gion", description: "Arrivée à Kyoto, installation dans un ryokan traditionnel du quartier de Gion. Promenade du soir dans les ruelles de bois, en quête d'une geisha pressée.", descriptionEn: "Arrival in Kyoto, check-in at a traditional ryokan in the Gion district. An evening walk through the wooden lanes, keeping an eye out for a geisha hurrying to an appointment.", descriptionEs: "Llegada a Kioto y alojamiento en un ryokan tradicional del barrio de Gion. Paseo nocturno por sus callejuelas de madera." },
      { dayNumber: 2, location: "Kyoto", locationEn: "Kyoto", locationEs: "Kioto", title: "Fushimi Inari et cérémonie du thé", titleEn: "Fushimi Inari and a tea ceremony", titleEs: "Fushimi Inari y ceremonia del té", description: "Lever tôt pour remonter les mille torii du sanctuaire Fushimi Inari avant la foule, puis cérémonie du thé privée avec une maître de thé de la ville.", descriptionEn: "An early start to climb the thousand torii gates of Fushimi Inari before the crowds, followed by a private tea ceremony with a local tea master.", descriptionEs: "Madrugada para subir los mil torii del santuario Fushimi Inari antes de la multitud, y ceremonia del té privada con una maestra de té local." },
      { dayNumber: 3, location: "Kyoto", locationEn: "Kyoto", locationEs: "Kioto", title: "Arashiyama et la forêt de bambous", titleEn: "Arashiyama and the bamboo grove", titleEs: "Arashiyama y el bosque de bambú", description: "Journée dans le quartier d'Arashiyama : la forêt de bambous, le pont Togetsukyo, et un déjeuner de tofu kaiseki face à la rivière.", descriptionEn: "A day in Arashiyama: the bamboo grove, the Togetsukyo bridge, and a riverside tofu kaiseki lunch.", descriptionEs: "Día en el barrio de Arashiyama: el bosque de bambú, el puente Togetsukyo y un almuerzo kaiseki de tofu junto al río." },
      { dayNumber: 4, location: "Hakone", locationEn: "Hakone", locationEs: "Hakone", title: "Route vers les montagnes", titleEn: "Into the mountains", titleEs: "Camino a las montañas", description: "Départ pour Hakone, arrêt dans un ryokan de montagne avec vue sur le Mont Fuji (météo permettant). Bain onsen privé en fin de journée.", descriptionEn: "Departure for Hakone, staying at a mountain ryokan with Mount Fuji views (weather permitting). A private onsen soak to end the day.", descriptionEs: "Salida hacia Hakone, alojamiento en un ryokan de montaña con vistas al monte Fuji (si el tiempo lo permite). Baño onsen privado al final del día." },
      { dayNumber: 5, location: "Hakone", locationEn: "Hakone", locationEs: "Hakone", title: "Lac Ashi et musée en plein air", titleEn: "Lake Ashi and the open-air museum", titleEs: "Lago Ashi y museo al aire libre", description: "Croisière sur le lac Ashi, puis visite du musée en plein air Hakone, sculptures dispersées dans un jardin ouvert sur les montagnes.", descriptionEn: "A cruise on Lake Ashi, then a visit to the Hakone Open-Air Museum, sculptures scattered through gardens open to the mountains.", descriptionEs: "Crucero por el lago Ashi y visita al museo al aire libre de Hakone, esculturas repartidas en un jardín abierto a las montañas." },
      { dayNumber: 6, location: "Tokyo", locationEn: "Tokyo", locationEs: "Tokio", title: "Shibuya et Shinjuku by night", titleEn: "Shibuya and Shinjuku by night", titleEs: "Shibuya y Shinjuku de noche", description: "Arrivée à Tokyo, installation. Le soir : Shibuya Crossing, un izakaya caché dans une ruelle de Shinjuku, et le néon jusqu'à tard.", descriptionEn: "Arrival in Tokyo. In the evening: Shibuya Crossing, an izakaya tucked into a Shinjuku alley, and neon until late.", descriptionEs: "Llegada a Tokio. Por la noche: el cruce de Shibuya, un izakaya escondido en un callejón de Shinjuku y neón hasta tarde." },
      { dayNumber: 7, location: "Tokyo", locationEn: "Tokyo", locationEs: "Tokio", title: "Tsukiji et art immersif", titleEn: "Tsukiji and immersive art", titleEs: "Tsukiji y arte inmersivo", description: "Petit-déjeuner de sushi au marché extérieur de Tsukiji, puis après-midi au teamLab Planets, musée d'art numérique immersif.", descriptionEn: "Sushi breakfast at the Tsukiji outer market, then an afternoon at teamLab Planets, the immersive digital art museum.", descriptionEs: "Desayuno de sushi en el mercado exterior de Tsukiji, y por la tarde teamLab Planets, el museo de arte digital inmersivo." },
      { dayNumber: 8, location: "Tokyo", locationEn: "Tokyo", locationEs: "Tokio", title: "Dernier tour et départ", titleEn: "Last look and departure", titleEs: "Última vuelta y salida", description: "Matinée libre — un dernier passage au sanctuaire Meiji ou dans les ruelles vintage d'Harajuku — avant le transfert à l'aéroport.", descriptionEn: "A free morning — one last visit to Meiji Shrine or Harajuku's vintage backstreets — before the airport transfer.", descriptionEs: "Mañana libre — última visita al santuario Meiji o a las calles vintage de Harajuku — antes del traslado al aeropuerto." },
    ],
    sections: [
      {
        heading: "Kyoto, le Japon qui prend son temps",
        headingEn: "Kyoto, the Japan that takes its time",
        headingEs: "Kioto, el Japón que se toma su tiempo",
        body: "Le voyage commence dans un ryokan traditionnel du quartier de Gion, où les ruelles de bois gardent encore un peu de leur mystère du soir. Les premiers jours suivent un rythme lent et matinal : les mille torii du sanctuaire Fushimi Inari avant l'arrivée de la foule, une cérémonie du thé privée, puis la forêt de bambous d'Arashiyama et un déjeuner de tofu kaiseki au bord de la rivière. Une étape en chemin, dans un ryokan de montagne à Hakone avec vue sur le Mont Fuji et un bain onsen privé, referme ce premier chapitre avant l'arrivée à Tokyo.",
        bodyEn: "The trip begins at a traditional ryokan in the Gion district, where the wooden lanes still hold a little of their evening mystery. The first days follow a slow, early-morning rhythm: the thousand torii gates of Fushimi Inari before the crowds arrive, a private tea ceremony, then the Arashiyama bamboo grove and a riverside tofu kaiseki lunch. A stop along the way, at a mountain ryokan in Hakone with Mount Fuji views and a private onsen soak, closes this first chapter before Tokyo.",
        bodyEs: "El viaje comienza en un ryokan tradicional del barrio de Gion, donde las callejuelas de madera aún guardan algo de su misterio nocturno. Los primeros días siguen un ritmo lento y madrugador: los mil torii del santuario Fushimi Inari antes de la multitud, una ceremonia del té privada, y después el bosque de bambú de Arashiyama y un almuerzo kaiseki de tofu junto al río. Una parada en el camino, en un ryokan de montaña en Hakone con vistas al monte Fuji y un baño onsen privado, cierra este primer capítulo antes de llegar a Tokio.",
      },
      {
        heading: "Tokyo, le vertige électrique",
        headingEn: "Tokyo, the electric vertigo",
        headingEs: "Tokio, el vértigo eléctrico",
        body: "L'arrivée à Tokyo change de registre : Shibuya Crossing au crépuscule, un izakaya caché dans une ruelle de Shinjuku, du néon jusqu'à tard. Le lendemain commence par un petit-déjeuner de sushi au marché extérieur de Tsukiji, avant un après-midi à teamLab Planets, musée d'art numérique où l'on marche pieds nus dans l'eau. Le voyage se referme sur une matinée libre — sanctuaire Meiji ou ruelles vintage d'Harajuku, selon l'humeur du jour.",
        bodyEn: "Arriving in Tokyo changes the register entirely: Shibuya Crossing at dusk, an izakaya tucked into a Shinjuku alley, neon lights until late. The next day opens with a sushi breakfast at the Tsukiji outer market, before an afternoon at teamLab Planets, the digital art museum where you walk barefoot through water. The trip closes with a free morning — Meiji Shrine or Harajuku's vintage backstreets, depending on the day's mood.",
        bodyEs: "La llegada a Tokio cambia por completo de registro: el cruce de Shibuya al anochecer, un izakaya escondido en un callejón de Shinjuku, neón hasta tarde. El día siguiente empieza con un desayuno de sushi en el mercado exterior de Tsukiji, antes de una tarde en teamLab Planets, el museo de arte digital donde se camina descalzo entre el agua. El viaje se cierra con una mañana libre — el santuario Meiji o las calles vintage de Harajuku, según el ánimo del día.",
      },
    ],
    hotels: [
      {
        name: "Ryokan Gion-an",
        nameEn: "Ryokan Gion-an",
        nameEs: "Ryokan Gion-an",
        description: "Un ryokan traditionnel de quelques chambres seulement, à deux pas des ruelles de Gion. Tatamis, futons préparés le soir, et un kaiseki servi en chambre — l'hospitalité japonaise dans ce qu'elle a de plus attentif.",
        descriptionEn: "A traditional ryokan with just a handful of rooms, steps from the lanes of Gion. Tatami floors, futons made up each evening, and kaiseki served in-room — Japanese hospitality at its most attentive.",
        descriptionEs: "Un ryokan tradicional de apenas unas pocas habitaciones, a pasos de las calles de Gion. Tatamis, futones preparados cada noche, y kaiseki servido en la habitación — la hospitalidad japonesa en su forma más atenta.",
        image: `${R2}/trips/japon-hotel-kyoto.jpg`,
      },
      {
        name: "The Shibuya Loft",
        nameEn: "The Shibuya Loft",
        nameEs: "The Shibuya Loft",
        description: "Un hôtel design perché au-dessus de Shibuya, chambres épurées et baies vitrées sur la ville qui ne dort jamais. Bar sur le toit ouvert tard, pour prolonger la soirée face au néon.",
        descriptionEn: "A design hotel perched above Shibuya, minimalist rooms with floor-to-ceiling views over the city that never sleeps. A late-opening rooftop bar, for lingering over the neon a little longer.",
        descriptionEs: "Un hotel de diseño encaramado sobre Shibuya, habitaciones minimalistas con vistas de suelo a techo sobre la ciudad que nunca duerme. Bar en la azotea abierto hasta tarde, para prolongar la noche frente al neón.",
        image: `${R2}/trips/japon-hotel-tokyo.jpg`,
      },
    ],
  },
  {
    destinationSlug: "islande",
    tour: {
      name: "Islande : entre le feu et la glace",
      nameEn: "Iceland: Chasing Fire and Ice",
      nameEs: "Islandia: entre el fuego y el hielo",
      slug: "islande-feu-glace",
      image: `${R2}/tours/islande-feu-glace.jpg`,
      images: `${R2}/trips/islande-gallery-1.jpg,${R2}/trips/islande-gallery-2.jpg,${R2}/trips/islande-gallery-3.jpg,${R2}/trips/islande-gallery-4.jpg,${R2}/trips/islande-gallery-5.jpg,${R2}/trips/islande-gallery-6.jpg`,
      whenLabel: "Fév à mars | Sept à oct",
      whenLabelEn: "Feb to March | Sept to Oct",
      whenLabelEs: "Feb a marzo | Sept a oct",
      tagline: "Glaciers le jour, aurores boréales la nuit",
      taglineEn: "Glaciers by day, northern lights by night",
      taglineEs: "Glaciares de día, auroras boreales de noche",
      description:
        "Un tour de l'Islande resserré sur l'essentiel : le Cercle d'Or, la côte sud et ses plages de sable noir, la lagune glaciaire, et des nuits passées à guetter les aurores boréales loin de toute lumière.",
      descriptionEn:
        "A tight loop through Iceland's essentials: the Golden Circle, the south coast's black-sand beaches, the glacier lagoon, and nights spent watching for the northern lights far from any light pollution.",
      descriptionEs:
        "Un recorrido concentrado por lo esencial de Islandia: el Círculo Dorado, la costa sur y sus playas de arena negra, la laguna glaciar y noches dedicadas a buscar auroras boreales lejos de toda luz.",
      price: 6200,
      originalPrice: 0,
      currency: "EUR",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      category: "multi-day",
      theme: "adventure",
      travelerTypes: "couples,solo,honeymoon",
      maxGuests: 2,
      featured: true,
      order: 2,
    },
    days: [
      { dayNumber: 1, location: "Reykjavik", locationEn: "Reykjavik", locationEs: "Reikiavik", title: "Arrivée et premiers pas", titleEn: "Arrival and first steps", titleEs: "Llegada y primeros pasos", description: "Arrivée à Reykjavik, installation, promenade au bord du port avant un dîner de poisson tout juste débarqué.", descriptionEn: "Arrival in Reykjavik, check-in, a walk along the harbour before a dinner of freshly landed fish.", descriptionEs: "Llegada a Reikiavik, alojamiento y paseo junto al puerto antes de una cena de pescado recién desembarcado." },
      { dayNumber: 2, location: "Cercle d'Or", locationEn: "Golden Circle", locationEs: "Círculo Dorado", title: "Geysers et cascades", titleEn: "Geysers and waterfalls", titleEs: "Géiseres y cascadas", description: "Le Cercle d'Or en une journée : le parc national de Thingvellir, le geyser Strokkur, et la cascade de Gullfoss.", descriptionEn: "The Golden Circle in a day: Thingvellir National Park, the Strokkur geyser, and Gullfoss waterfall.", descriptionEs: "El Círculo Dorado en un día: el parque nacional de Thingvellir, el géiser Strokkur y la cascada de Gullfoss." },
      { dayNumber: 3, location: "Côte Sud", locationEn: "South Coast", locationEs: "Costa Sur", title: "Plages de sable noir", titleEn: "Black sand beaches", titleEs: "Playas de arena negra", description: "Route vers le sud : les cascades de Seljalandsfoss et Skógafoss, puis la plage de sable noir de Reynisfjara et ses orgues basaltiques.", descriptionEn: "Driving south: the waterfalls of Seljalandsfoss and Skógafoss, then the black sand beach of Reynisfjara and its basalt columns.", descriptionEs: "Ruta hacia el sur: las cascadas de Seljalandsfoss y Skógafoss, y la playa de arena negra de Reynisfjara con sus columnas de basalto." },
      { dayNumber: 4, location: "Jökulsárlón", locationEn: "Jökulsárlón", locationEs: "Jökulsárlón", title: "La lagune glaciaire", titleEn: "The glacier lagoon", titleEs: "La laguna glaciar", description: "La lagune de Jökulsárlón, où des icebergs bleus dérivent vers la mer, et la plage de diamants juste à côté.", descriptionEn: "Jökulsárlón lagoon, where blue icebergs drift out to sea, and the Diamond Beach right next to it.", descriptionEs: "La laguna de Jökulsárlón, donde icebergs azules derivan hacia el mar, y la playa de los diamantes justo al lado." },
      { dayNumber: 5, location: "Côte Sud", locationEn: "South Coast", locationEs: "Costa Sur", title: "Chasse aux aurores", titleEn: "Northern lights hunt", titleEs: "Caza de auroras", description: "Journée plus tranquille, randonnée courte sur un glacier avec un guide certifié, puis nuit dédiée à la chasse aux aurores boréales.", descriptionEn: "A quieter day, a short glacier hike with a certified guide, then a night dedicated to chasing the northern lights.", descriptionEs: "Día más tranquilo, corta caminata sobre un glaciar con guía certificado, y noche dedicada a la caza de auroras boreales." },
      { dayNumber: 6, location: "Reykjavik", locationEn: "Reykjavik", locationEs: "Reikiavik", title: "Blue Lagoon et départ", titleEn: "Blue Lagoon and departure", titleEs: "Laguna Azul y salida", description: "Retour vers Reykjavik via le Blue Lagoon, dernier bain avant le transfert à l'aéroport.", descriptionEn: "Return to Reykjavik via the Blue Lagoon, one last soak before the airport transfer.", descriptionEs: "Regreso a Reikiavik pasando por la Laguna Azul, un último baño antes del traslado al aeropuerto." },
    ],
    sections: [
      {
        heading: "Le Cercle d'Or et la côte sud",
        headingEn: "The Golden Circle and the south coast",
        headingEs: "El Círculo Dorado y la costa sur",
        body: "Après une première soirée à Reykjavik, poisson tout juste débarqué au bord du port, le voyage prend la route du Cercle d'Or : le parc national de Thingvellir, le geyser Strokkur qui jaillit toutes les quelques minutes, et la cascade de Gullfoss. La route descend ensuite vers la côte sud, entre les cascades de Seljalandsfoss et Skógafoss, jusqu'à la plage de sable noir de Reynisfjara et ses orgues basaltiques dressées face à l'Atlantique.",
        bodyEn: "After a first evening in Reykjavik with fish landed that same day, the trip heads out along the Golden Circle: Thingvellir National Park, the Strokkur geyser erupting every few minutes, and Gullfoss waterfall. The road then runs down the south coast, past the waterfalls of Seljalandsfoss and Skógafoss, to the black-sand beach of Reynisfjara and its basalt columns facing the open Atlantic.",
        bodyEs: "Tras una primera noche en Reikiavik con pescado recién desembarcado junto al puerto, el viaje sigue la ruta del Círculo Dorado: el parque nacional de Thingvellir, el géiser Strokkur que brota cada pocos minutos, y la cascada de Gullfoss. La carretera baja después por la costa sur, junto a las cascadas de Seljalandsfoss y Skógafoss, hasta la playa de arena negra de Reynisfjara y sus columnas de basalto frente al Atlántico.",
      },
      {
        heading: "Glaciers et nuits d'aurores",
        headingEn: "Glaciers and northern-lights nights",
        headingEs: "Glaciares y noches de auroras",
        body: "Le voyage atteint son point culminant à la lagune de Jökulsárlón, où des icebergs bleus dérivent lentement vers la mer, juste à côté de la plage de diamants où ils viennent s'échouer. Une courte randonnée sur un glacier, guidée par un spécialiste certifié, précède les nuits les plus attendues du séjour : loin de toute lumière, à guetter le ciel en espérant les aurores boréales, avant un dernier bain au Blue Lagoon sur le chemin du retour.",
        bodyEn: "The trip reaches its high point at the Jökulsárlón lagoon, where blue icebergs drift slowly out to sea, right beside the Diamond Beach where they wash ashore. A short glacier hike with a certified guide precedes the trip's most anticipated nights: far from any light, scanning the sky for the northern lights, before one last soak at the Blue Lagoon on the way back.",
        bodyEs: "El viaje alcanza su punto culminante en la laguna de Jökulsárlón, donde icebergs azules derivan lentamente hacia el mar, justo junto a la playa de los diamantes donde varan. Una breve caminata sobre un glaciar, guiada por un especialista certificado, precede a las noches más esperadas de la estancia: lejos de toda luz, escrutando el cielo con la esperanza de ver auroras boreales, antes de un último baño en la Laguna Azul de vuelta.",
      },
    ],
    hotels: [
      {
        name: "Hótel Katla",
        nameEn: "Hótel Katla",
        nameEs: "Hótel Katla",
        description: "Un hôtel de campagne posé face aux montagnes de la côte sud, chambres simples et chaleureuses, grandes baies vitrées idéales pour guetter les aurores depuis le lit.",
        descriptionEn: "A countryside hotel set against the south coast's mountains, simple and warm rooms, large windows perfect for watching for the aurora from bed.",
        descriptionEs: "Un hotel rural frente a las montañas de la costa sur, habitaciones sencillas y acogedoras, grandes ventanales ideales para buscar la aurora desde la cama.",
        image: `${R2}/trips/islande-hotel-sudurland.jpg`,
      },
      {
        name: "Canopy Reykjavik",
        nameEn: "Canopy Reykjavik",
        nameEs: "Canopy Reykjavik",
        description: "Un hôtel design au cœur de la capitale, à deux pas du port et de ses restaurants de poisson. Base idéale pour la première et la dernière nuit du séjour.",
        descriptionEn: "A design hotel in the heart of the capital, steps from the harbour and its fish restaurants. An ideal base for the trip's first and last nights.",
        descriptionEs: "Un hotel de diseño en el corazón de la capital, a pasos del puerto y sus restaurantes de pescado. Base ideal para la primera y última noche de la estancia.",
        image: `${R2}/trips/islande-hotel-reykjavik.jpg`,
      },
    ],
  },
  {
    destinationSlug: "kenya",
    tour: {
      name: "Kenya : la grande migration",
      nameEn: "Kenya: The Great Migration Safari",
      nameEs: "Kenia: la gran migración",
      slug: "kenya-grande-migration",
      image: `${R2}/tours/kenya-grande-migration.jpg`,
      images: `${R2}/trips/kenya-gallery-1.jpg,${R2}/trips/kenya-gallery-2.jpg,${R2}/trips/kenya-gallery-3.jpg,${R2}/trips/kenya-gallery-4.jpg,${R2}/trips/kenya-gallery-5.jpg,${R2}/trips/kenya-gallery-6.jpg`,
      whenLabel: "Juil à oct",
      whenLabelEn: "July to Oct",
      whenLabelEs: "Jul a oct",
      tagline: "Aux premières loges du plus grand spectacle du monde",
      taglineEn: "Front row to the greatest show on Earth",
      taglineEs: "En primera fila del mayor espectáculo del mundo",
      description:
        "Un safari construit autour du Masai Mara, avec un détour par les plaines d'Amboseli où le Kilimandjaro se dresse à l'horizon. Guides locaux, camps ouverts sur la savane, et le silence particulier des matins africains.",
      descriptionEn:
        "A safari built around the Masai Mara, with a detour to the plains of Amboseli where Kilimanjaro stands on the horizon. Local guides, camps open onto the savannah, and the particular silence of African mornings.",
      descriptionEs:
        "Un safari construido alrededor del Masai Mara, con una escapada a las llanuras de Amboseli donde el Kilimanjaro se alza en el horizonte. Guías locales, campamentos abiertos a la sabana y el silencio particular de las mañanas africanas.",
      price: 8900,
      originalPrice: 0,
      currency: "EUR",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      category: "multi-day",
      theme: "adventure",
      travelerTypes: "family,groups,honeymoon",
      maxGuests: 4,
      featured: true,
      order: 3,
    },
    days: [
      { dayNumber: 1, location: "Nairobi", locationEn: "Nairobi", locationEs: "Nairobi", title: "Arrivée et parc des girafes", titleEn: "Arrival and the giraffe sanctuary", titleEs: "Llegada y santuario de jirafas", description: "Arrivée à Nairobi, visite du centre de girafes de Langata avant de rejoindre un lodge en périphérie de la ville.", descriptionEn: "Arrival in Nairobi, a visit to the Langata Giraffe Centre before settling into a lodge on the city's edge.", descriptionEs: "Llegada a Nairobi, visita al centro de jirafas de Langata antes de instalarse en un lodge en las afueras de la ciudad." },
      { dayNumber: 2, location: "Masai Mara", locationEn: "Masai Mara", locationEs: "Masai Mara", title: "Vol vers la Mara", titleEn: "Flight to the Mara", titleEs: "Vuelo a la Mara", description: "Vol léger vers le Masai Mara, premier safari en fin d'après-midi avec un guide masaï.", descriptionEn: "A light aircraft flight to the Masai Mara, first game drive in the late afternoon with a Maasai guide.", descriptionEs: "Vuelo en avioneta hacia el Masai Mara, primer safari al final de la tarde con un guía masái." },
      { dayNumber: 3, location: "Masai Mara", locationEn: "Masai Mara", locationEs: "Masai Mara", title: "Safaris à l'aube et au crépuscule", titleEn: "Dawn and dusk game drives", titleEs: "Safaris al amanecer y al atardecer", description: "Journée entière consacrée aux safaris, à l'affût des grands félins et, en saison, des troupeaux en migration.", descriptionEn: "A full day of game drives, on the lookout for big cats and, in season, the migrating herds.", descriptionEs: "Día completo dedicado a los safaris, a la caza de grandes felinos y, en temporada, de las manadas en migración." },
      { dayNumber: 4, location: "Masai Mara", locationEn: "Masai Mara", locationEs: "Masai Mara", title: "Village masaï et safari en montgolfière", titleEn: "Maasai village and hot-air balloon safari", titleEs: "Aldea masái y safari en globo", description: "Visite d'un village masaï le matin, puis en option un safari en montgolfière au lever du soleil, petit-déjeuner servi dans la savane.", descriptionEn: "A Maasai village visit in the morning, then an optional sunrise hot-air balloon safari, breakfast served out on the savannah.", descriptionEs: "Visita a una aldea masái por la mañana y, opcionalmente, un safari en globo al amanecer, con desayuno servido en la sabana." },
      { dayNumber: 5, location: "Amboseli", locationEn: "Amboseli", locationEs: "Amboseli", title: "Route vers le Kilimandjaro", titleEn: "On to Kilimanjaro", titleEs: "Camino al Kilimanjaro", description: "Transfert vers Amboseli, réputé pour ses vues imprenables sur le Kilimandjaro et ses grands troupeaux d'éléphants.", descriptionEn: "Transfer to Amboseli, known for its unbeatable views of Kilimanjaro and its large elephant herds.", descriptionEs: "Traslado a Amboseli, conocido por sus vistas inmejorables del Kilimanjaro y sus grandes manadas de elefantes." },
      { dayNumber: 6, location: "Amboseli", locationEn: "Amboseli", locationEs: "Amboseli", title: "Éléphants et marais", titleEn: "Elephants and swamps", titleEs: "Elefantes y pantanos", description: "Safaris matin et soir autour des marais d'Amboseli, terrain de jeu favori des éléphants de la région.", descriptionEn: "Morning and evening game drives around the Amboseli swamps, the local elephants' favourite ground.", descriptionEs: "Safaris de mañana y tarde alrededor de los pantanos de Amboseli, el terreno favorito de los elefantes de la zona." },
      { dayNumber: 7, location: "Nairobi", locationEn: "Nairobi", locationEs: "Nairobi", title: "Retour et départ", titleEn: "Return and departure", titleEs: "Regreso y salida", description: "Transfert retour vers Nairobi en fin de matinée, avec correspondance vers l'aéroport international.", descriptionEn: "Return transfer to Nairobi in the late morning, connecting on to the international airport.", descriptionEs: "Traslado de regreso a Nairobi a última hora de la mañana, con enlace al aeropuerto internacional." },
    ],
    sections: [
      {
        heading: "Le Masai Mara, cœur du safari",
        headingEn: "The Masai Mara, heart of the safari",
        headingEs: "El Masai Mara, corazón del safari",
        body: "Après un premier contact avec Nairobi et son centre de girafes, un vol léger dépose le voyage au cœur du Masai Mara. Les jours suivants s'organisent autour des safaris à l'aube et au crépuscule, quand la lumière rase et que les grands félins sont les plus actifs. Une visite de village masaï et, en option, un safari en montgolfière au lever du soleil — petit-déjeuner servi dans la savane — complètent ce premier chapitre kenyan.",
        bodyEn: "After a first taste of Nairobi and its giraffe sanctuary, a light aircraft flight sets the trip down in the heart of the Masai Mara. The following days are built around dawn and dusk game drives, when the light is low and the big cats most active. A Maasai village visit and, optionally, a sunrise hot-air balloon safari — breakfast served out on the savannah — round out this first Kenyan chapter.",
        bodyEs: "Tras un primer contacto con Nairobi y su centro de jirafas, un vuelo en avioneta deja el viaje en el corazón del Masai Mara. Los días siguientes se organizan en torno a los safaris al amanecer y al atardecer, cuando la luz es rasante y los grandes felinos están más activos. Una visita a una aldea masái y, opcionalmente, un safari en globo al amanecer — con desayuno servido en la sabana — completan este primer capítulo keniano.",
      },
      {
        heading: "Amboseli, à l'ombre du Kilimandjaro",
        headingEn: "Amboseli, in Kilimanjaro's shadow",
        headingEs: "Amboseli, a la sombra del Kilimanjaro",
        body: "Le voyage se poursuit vers Amboseli, réputé pour ses vues imprenables sur le Kilimandjaro et ses grands troupeaux d'éléphants qui traversent les marais au lever et au coucher du soleil. Deux journées de safaris matin et soir permettent d'observer ces géants dans leur terrain de jeu favori, avant un retour vers Nairobi pour la correspondance internationale.",
        bodyEn: "The trip continues to Amboseli, known for its unbeatable views of Kilimanjaro and the large elephant herds that cross its swamps at sunrise and sunset. Two days of morning and evening game drives allow time to watch these giants on their favourite ground, before returning to Nairobi for the international connection.",
        bodyEs: "El viaje continúa hacia Amboseli, conocido por sus vistas inmejorables del Kilimanjaro y sus grandes manadas de elefantes que cruzan los pantanos al amanecer y al atardecer. Dos días de safaris de mañana y tarde permiten observar a estos gigantes en su terreno favorito, antes de regresar a Nairobi para el enlace internacional.",
      },
    ],
    hotels: [
      {
        name: "Mara Acacia Camp",
        nameEn: "Mara Acacia Camp",
        nameEs: "Mara Acacia Camp",
        description: "Un camp de tentes de luxe ouvert sur la savane du Masai Mara, chaque tente avec sa propre véranda. Repas servis sous les acacias, feu de camp le soir, silence des plaines africaines.",
        descriptionEn: "A luxury tented camp open onto the Masai Mara savannah, each tent with its own veranda. Meals served beneath the acacia trees, a campfire in the evening, the silence of the African plains.",
        descriptionEs: "Un campamento de tiendas de lujo abierto a la sabana del Masai Mara, cada tienda con su propia veranda. Comidas servidas bajo las acacias, fogata al anochecer, el silencio de las llanuras africanas.",
        image: `${R2}/trips/kenya-hotel-mara.jpg`,
      },
      {
        name: "Amboseli Kilimanjaro Lodge",
        nameEn: "Amboseli Kilimanjaro Lodge",
        nameEs: "Amboseli Kilimanjaro Lodge",
        description: "Un lodge en bois et pierre face au Kilimandjaro, terrasse commune pour observer les éléphants au loin, chambres simples pensées pour le confort après une longue journée de safari.",
        descriptionEn: "A wood-and-stone lodge facing Kilimanjaro, a shared terrace for watching elephants in the distance, simple rooms built for comfort after a long day on safari.",
        descriptionEs: "Un lodge de madera y piedra frente al Kilimanjaro, terraza común para observar elefantes a lo lejos, habitaciones sencillas pensadas para el confort tras un largo día de safari.",
        image: `${R2}/trips/kenya-hotel-amboseli.jpg`,
      },
    ],
  },
  {
    destinationSlug: "italie",
    tour: {
      name: "Italie : Rome, Florence et la côte amalfitaine",
      nameEn: "Italy: Rome, Florence & the Amalfi Coast",
      nameEs: "Italia: Roma, Florencia y la costa de Amalfi",
      slug: "italie-rome-florence-amalfi",
      image: `${R2}/tours/italie-rome-florence-amalfi.jpg`,
      images: `${R2}/trips/italie-gallery-colosseum.jpg,${R2}/trips/italie-gallery-trastevere.jpg,${R2}/trips/italie-gallery-vatican.jpg,${R2}/trips/italie-gallery-pontevecchio.jpg,${R2}/trips/italie-gallery-chianti.jpg,${R2}/trips/italie-gallery-tuscanyhills.jpg,${R2}/trips/italie-gallery-positano.jpg,${R2}/trips/italie-gallery-amalfiboat.jpg`,
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | Sept a oct",
      tagline: "La dolce vita, en trois actes",
      taglineEn: "La dolce vita, three ways",
      taglineEs: "La dolce vita, en tres actos",
      description:
        "De la grandeur antique de Rome aux collines toscanes, jusqu'aux falaises colorées de la côte amalfitaine — un classique italien, mais construit sur-mesure : bons restaurants, bonnes heures, aucune queue.",
      descriptionEn:
        "From Rome's ancient grandeur to the Tuscan hills, down to the colourful cliffs of the Amalfi Coast — an Italian classic, but built tailor-made: the right restaurants, the right hours, no queues.",
      descriptionEs:
        "De la grandeza antigua de Roma a las colinas toscanas, hasta los acantilados de colores de la costa de Amalfi — un clásico italiano, pero construido a medida: buenos restaurantes, buenas horas, sin colas.",
      price: 7000,
      originalPrice: 0,
      currency: "EUR",
      duration: "9 nuits",
      durationEn: "9 nights",
      durationEs: "9 noches",
      category: "multi-day",
      theme: "culture",
      travelerTypes: "family,groups,couples",
      maxGuests: 6,
      featured: false,
      order: 4,
    },
    days: [
      { dayNumber: 1, location: "Rome", locationEn: "Rome", locationEs: "Roma", title: "Arrivée et Trastevere", titleEn: "Arrival and Trastevere", titleEs: "Llegada y Trastevere", description: "Arrivée à Rome, installation, dîner dans une trattoria familiale du quartier du Trastevere.", descriptionEn: "Arrival in Rome, check-in, dinner at a family-run trattoria in Trastevere.", descriptionEs: "Llegada a Roma, alojamiento y cena en una trattoria familiar del barrio de Trastevere." },
      { dayNumber: 2, location: "Rome", locationEn: "Rome", locationEs: "Roma", title: "Colisée et Forum romain", titleEn: "Colosseum and Roman Forum", titleEs: "Coliseo y Foro Romano", description: "Visite privée du Colisée à l'ouverture, avant l'arrivée des groupes, puis promenade dans le Forum romain.", descriptionEn: "A private visit to the Colosseum at opening time, ahead of the crowds, then a walk through the Roman Forum.", descriptionEs: "Visita privada al Coliseo a primera hora, antes de los grupos, y paseo por el Foro Romano." },
      { dayNumber: 3, location: "Rome", locationEn: "Rome", locationEs: "Roma", title: "Musées du Vatican", titleEn: "Vatican Museums", titleEs: "Museos Vaticanos", description: "Matinée aux musées du Vatican et à la chapelle Sixtine avec un guide d'art, après-midi libre pour flâner via les fontaines.", descriptionEn: "A morning at the Vatican Museums and Sistine Chapel with an art guide, free afternoon to wander between the city's fountains.", descriptionEs: "Mañana en los Museos Vaticanos y la Capilla Sixtina con guía de arte, tarde libre para pasear entre las fuentes de la ciudad." },
      { dayNumber: 4, location: "Florence", locationEn: "Florence", locationEs: "Florencia", title: "Route vers la Toscane", titleEn: "On to Tuscany", titleEs: "Camino a la Toscana", description: "Transfert vers Florence, promenade du soir jusqu'au Ponte Vecchio au coucher du soleil.", descriptionEn: "Transfer to Florence, an evening walk to the Ponte Vecchio at sunset.", descriptionEs: "Traslado a Florencia, paseo vespertino hasta el Ponte Vecchio al atardecer." },
      { dayNumber: 5, location: "Florence", locationEn: "Florence", locationEs: "Florencia", title: "Galerie des Offices", titleEn: "The Uffizi Gallery", titleEs: "Galería Uffizi", description: "Visite privée de la Galerie des Offices, puis déjeuner sur une terrasse dominant le Duomo.", descriptionEn: "A private visit to the Uffizi Gallery, then lunch on a terrace overlooking the Duomo.", descriptionEs: "Visita privada a la Galería Uffizi y almuerzo en una terraza con vistas al Duomo." },
      { dayNumber: 6, location: "Toscane", locationEn: "Tuscany", locationEs: "Toscana", title: "Vignobles du Chianti", titleEn: "Chianti vineyards", titleEs: "Viñedos de Chianti", description: "Journée dans la campagne toscane : une visite de domaine viticole familial et un déjeuner sous les oliviers.", descriptionEn: "A day in the Tuscan countryside: a visit to a family-run vineyard and lunch beneath the olive trees.", descriptionEs: "Día en la campiña toscana: visita a una bodega familiar y almuerzo bajo los olivos." },
      { dayNumber: 7, location: "Côte amalfitaine", locationEn: "Amalfi Coast", locationEs: "Costa de Amalfi", title: "Route vers Positano", titleEn: "On to Positano", titleEs: "Camino a Positano", description: "Transfert vers la côte amalfitaine, installation à Positano avec vue sur la mer Tyrrhénienne.", descriptionEn: "Transfer to the Amalfi Coast, check-in at Positano overlooking the Tyrrhenian Sea.", descriptionEs: "Traslado a la costa de Amalfi, alojamiento en Positano con vistas al mar Tirreno." },
      { dayNumber: 8, location: "Côte amalfitaine", locationEn: "Amalfi Coast", locationEs: "Costa de Amalfi", title: "Journée en mer", titleEn: "A day at sea", titleEs: "Día en el mar", description: "Sortie en bateau privé le long de la côte, halte baignade à Fiordo di Furore, déjeuner de poisson à Amalfi.", descriptionEn: "A private boat trip along the coast, a swim stop at Fiordo di Furore, fish lunch in Amalfi.", descriptionEs: "Salida en barco privado por la costa, parada para nadar en el Fiordo di Furore y almuerzo de pescado en Amalfi." },
      { dayNumber: 9, location: "Côte amalfitaine", locationEn: "Amalfi Coast", locationEs: "Costa de Amalfi", title: "Ravello et départ", titleEn: "Ravello and departure", titleEs: "Ravello y salida", description: "Matinée à Ravello, perché au-dessus de la côte, avant le transfert vers l'aéroport de Naples.", descriptionEn: "A morning in Ravello, perched high above the coast, before the transfer to Naples airport.", descriptionEs: "Mañana en Ravello, encaramado sobre la costa, antes del traslado al aeropuerto de Nápoles." },
    ],
    sections: [
      {
        heading: "Au cœur de la Rome antique",
        headingEn: "Into ancient Rome",
        headingEs: "En el corazón de la Roma antigua",
        body:
          "Votre voyage commence à Rome, où chaque rue semble raconter une strate différente de l'histoire. Après votre arrivée, une première soirée dans le quartier animé du Trastevere donne le ton : ruelles pavées, trattorias familiales et une ambiance qui n'a pas beaucoup changé depuis un siècle.\n\nLe lendemain, vous visiterez le Colisée en accès privé à l'ouverture, avant l'arrivée des groupes, puis flânerez dans le Forum romain sur les traces des empereurs. Le jour suivant, direction les musées du Vatican et la chapelle Sixtine avec un guide spécialisé en histoire de l'art, avant un après-midi libre pour découvrir les fontaines de la ville à votre rythme.",
        bodyEn:
          "Your journey begins in Rome, where every street seems to tell a different layer of history. After you arrive, a first evening in the lively Trastevere district sets the tone: cobbled lanes, family-run trattorias, and an atmosphere that hasn't changed much in a century.\n\nThe next day, you'll visit the Colosseum on private access at opening time, ahead of the crowds, then wander through the Roman Forum in the footsteps of emperors. The following day, it's on to the Vatican Museums and the Sistine Chapel with an art history guide, before a free afternoon to discover the city's fountains at your own pace.",
        bodyEs:
          "Su viaje comienza en Roma, donde cada calle parece contar una capa distinta de la historia. Tras su llegada, una primera noche en el animado barrio del Trastevere marca el tono: calles empedradas, trattorias familiares y un ambiente que apenas ha cambiado en un siglo.\n\nAl día siguiente, visitará el Coliseo en acceso privado a primera hora, antes de la llegada de los grupos, y paseará por el Foro Romano tras las huellas de los emperadores. El día siguiente, rumbo a los Museos Vaticanos y la Capilla Sixtina con un guía especializado en historia del arte, antes de una tarde libre para descubrir las fuentes de la ciudad a su ritmo.",
      },
      {
        heading: "La Toscane, en douceur",
        headingEn: "Tuscany, slowly",
        headingEs: "La Toscana, con calma",
        body:
          "De Rome, la route mène vers Florence, berceau de la Renaissance. Une promenade du soir jusqu'au Ponte Vecchio au coucher du soleil offre une première rencontre avec la ville, avant une visite privée de la galerie des Offices le lendemain — Botticelli, Michel-Ange et Raphaël, sans la foule habituelle.\n\nLe rythme ralentit ensuite dans la campagne toscane : une journée consacrée à un domaine viticole familial dans le Chianti, déjeuner sous les oliviers, dégustation de vins locaux et vue sur les collines qui ondulent à perte de vue. C'est ici que l'Italie révèle son autre visage — moins pressé, plus attentif aux détails.",
        bodyEn:
          "From Rome, the road leads to Florence, the cradle of the Renaissance. An evening walk to the Ponte Vecchio at sunset offers a first taste of the city, before a private visit to the Uffizi Gallery the next day — Botticelli, Michelangelo, and Raphael, without the usual crowds.\n\nThe pace then slows in the Tuscan countryside: a day given over to a family-run vineyard in Chianti, lunch beneath the olive trees, a tasting of local wines, and hills rolling out of sight in every direction. This is where Italy shows its other face — less hurried, more attentive to detail.",
        bodyEs:
          "Desde Roma, la ruta lleva a Florencia, cuna del Renacimiento. Un paseo vespertino hasta el Ponte Vecchio al atardecer ofrece un primer contacto con la ciudad, antes de una visita privada a la Galería Uffizi al día siguiente — Botticelli, Miguel Ángel y Rafael, sin las multitudes habituales.\n\nEl ritmo se ralentiza después en la campiña toscana: un día dedicado a una bodega familiar en Chianti, almuerzo bajo los olivos, cata de vinos locales y colinas que se ondulan hasta perderse de vista. Aquí es donde Italia muestra su otra cara — menos apresurada, más atenta a los detalles.",
      },
      {
        heading: "La côte amalfitaine, enfin",
        headingEn: "The Amalfi Coast, at last",
        headingEs: "La costa de Amalfi, por fin",
        body:
          "Le voyage se termine sur la côte amalfitaine, où les routes en corniche épousent la falaise et où chaque virage dévoile une nouvelle vue sur la Méditerranée. Installation à Positano, ses maisons colorées empilées à flanc de montagne jusqu'à la mer.\n\nUne sortie en bateau privé permet de longer la côte, avec une halte baignade au Fiordo di Furore et un déjeuner de poisson face à la mer à Amalfi. La dernière matinée se passe à Ravello, perché au-dessus de la côte, avant le transfert vers l'aéroport de Naples — le temps d'un dernier café en terrasse, face à l'un des plus beaux panoramas d'Italie.",
        bodyEn:
          "The trip ends on the Amalfi Coast, where cliffside roads hug the rock and every bend reveals a new view over the Mediterranean. You'll settle into Positano, its colourful houses stacked down the mountainside to the sea.\n\nA private boat trip traces the coastline, with a swim stop at the Fiordo di Furore and a seaside fish lunch in Amalfi. The last morning is spent in Ravello, perched high above the coast, before the transfer to Naples airport — time enough for one last coffee on a terrace, facing one of Italy's most beautiful views.",
        bodyEs:
          "El viaje termina en la costa de Amalfi, donde las carreteras en cornisa abrazan el acantilado y cada curva revela una nueva vista sobre el Mediterráneo. Se alojará en Positano, con sus casas de colores apiladas ladera abajo hasta el mar.\n\nUna salida en barco privado recorre la costa, con una parada para nadar en el Fiordo di Furore y un almuerzo de pescado frente al mar en Amalfi. La última mañana se pasa en Ravello, encaramado sobre la costa, antes del traslado al aeropuerto de Nápoles — tiempo suficiente para un último café en una terraza, frente a una de las vistas más hermosas de Italia.",
      },
    ],
    hotels: [
      {
        name: "Domus Trastevere",
        nameEn: "Domus Trastevere",
        nameEs: "Domus Trastevere",
        description:
          "Un boutique-hôtel discret niché dans une ruelle du Trastevere, à quelques minutes à pied du Tibre. Chambres aux tons chauds, petit-déjeuner servi sur la terrasse en toit, et l'accueil chaleureux d'une maison qui se veut avant tout familiale.",
        descriptionEn:
          "A discreet boutique hotel tucked into a Trastevere side street, a short walk from the Tiber. Warm-toned rooms, breakfast served on the rooftop terrace, and the welcoming feel of a house that's above all a family affair.",
        descriptionEs:
          "Un hotel boutique discreto escondido en una calle del Trastevere, a pocos minutos a pie del Tíber. Habitaciones de tonos cálidos, desayuno servido en la terraza de la azotea, y la acogida cercana de una casa ante todo familiar.",
        image: `${R2}/trips/italie-hotel-rome.jpg`,
      },
      {
        name: "Villa delle Sirene",
        nameEn: "Villa delle Sirene",
        nameEs: "Villa delle Sirene",
        description:
          "Perchée au-dessus de Positano, cette villa aux terrasses en cascade offre une vue imprenable sur la baie. Piscine à débordement, chambres avec balcon privé, et un service discret qui laisse toute la place au paysage.",
        descriptionEn:
          "Perched above Positano, this cascading-terrace villa offers unbeatable views over the bay. An infinity pool, rooms with private balconies, and discreet service that lets the scenery take centre stage.",
        descriptionEs:
          "Encaramada sobre Positano, esta villa de terrazas escalonadas ofrece vistas inmejorables de la bahía. Piscina infinita, habitaciones con balcón privado, y un servicio discreto que deja todo el protagonismo al paisaje.",
        image: `${R2}/trips/italie-hotel-positano.jpg`,
      },
    ],
  },
  {
    destinationSlug: "maldives",
    tour: {
      name: "Maldives : sur pilotis, déconnecté",
      nameEn: "Maldives: Overwater, Unplugged",
      nameEs: "Maldivas: sobre el agua, desconectado",
      slug: "maldives-overwater",
      image: `${R2}/tours/maldives-overwater.jpg`,
      images: `${R2}/trips/maldives-gallery-1.jpg,${R2}/trips/maldives-gallery-2.jpg,${R2}/trips/maldives-gallery-3.jpg,${R2}/trips/maldives-gallery-4.jpg,${R2}/trips/maldives-gallery-5.jpg,${R2}/trips/maldives-gallery-6.jpg`,
      whenLabel: "Nov à avril",
      whenLabelEn: "Nov to April",
      whenLabelEs: "Nov a abril",
      tagline: "Rien entre vous et l'océan",
      taglineEn: "Nothing between you and the ocean",
      taglineEs: "Nada entre usted y el océano",
      description:
        "Cinq nuits dans une villa sur pilotis, sans autre programme que celui que vous choisissez : snorkeling sur le récif, croisière au coucher du soleil, ou simplement le bruit de l'eau sous le plancher.",
      descriptionEn:
        "Five nights in an overwater villa, with no schedule but the one you choose: reef snorkeling, a sunset cruise, or simply the sound of water beneath the floorboards.",
      descriptionEs:
        "Cinco noches en una villa sobre el agua, sin más programa que el que usted elija: snorkel en el arrecife, crucero al atardecer o simplemente el sonido del agua bajo el suelo.",
      price: 9500,
      originalPrice: 0,
      currency: "EUR",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      category: "multi-day",
      theme: "relax",
      travelerTypes: "honeymoon,couples,solo",
      maxGuests: 2,
      featured: false,
      order: 5,
    },
    days: [
      { dayNumber: 1, location: "Atoll de Malé", locationEn: "Malé Atoll", locationEs: "Atolón de Malé", title: "Arrivée en hydravion", titleEn: "Seaplane arrival", titleEs: "Llegada en hidroavión", description: "Transfert en hydravion depuis Malé jusqu'au resort, installation dans une villa sur pilotis, coucher de soleil depuis la terrasse privée.", descriptionEn: "Seaplane transfer from Malé to the resort, check-in at an overwater villa, sunset from the private deck.", descriptionEs: "Traslado en hidroavión desde Malé hasta el resort, alojamiento en una villa sobre el agua y atardecer desde la terraza privada." },
      { dayNumber: 2, location: "Atoll de Malé", locationEn: "Malé Atoll", locationEs: "Atolón de Malé", title: "Le récif, à la palme", titleEn: "The reef, by fin", titleEs: "El arrecife, con aletas", description: "Sortie snorkeling matinale sur le récif du lagon, tortues et poissons-perroquets au programme.", descriptionEn: "A morning snorkeling trip on the lagoon's house reef, turtles and parrotfish on the itinerary.", descriptionEs: "Salida matinal de snorkel en el arrecife de la laguna, con tortugas y peces loro en el programa." },
      { dayNumber: 3, location: "Atoll de Malé", locationEn: "Malé Atoll", locationEs: "Atolón de Malé", title: "Croisière au coucher du soleil", titleEn: "Sunset dolphin cruise", titleEs: "Crucero al atardecer", description: "Journée libre, puis croisière en fin d'après-midi à la recherche des dauphins qui suivent les bateaux au crépuscule.", descriptionEn: "A free day, then a late-afternoon cruise in search of the dolphins that follow boats at dusk.", descriptionEs: "Día libre y, al final de la tarde, crucero en busca de los delfines que siguen a los barcos al atardecer." },
      { dayNumber: 4, location: "Atoll de Malé", locationEn: "Malé Atoll", locationEs: "Atolón de Malé", title: "Banc de sable privé", titleEn: "Private sandbank", titleEs: "Banco de arena privado", description: "Journée sur un banc de sable isolé, déjeuner pique-nique servi sur place, retour au resort en fin d'après-midi pour un soin au spa.", descriptionEn: "A day on a secluded sandbank, picnic lunch served on the spot, back to the resort in the late afternoon for a spa treatment.", descriptionEs: "Día en un banco de arena aislado, almuerzo picnic servido en el lugar y regreso al resort a última hora de la tarde para un tratamiento de spa." },
      { dayNumber: 5, location: "Atoll de Malé", locationEn: "Malé Atoll", locationEs: "Atolón de Malé", title: "Dernière matinée et départ", titleEn: "Last morning and departure", titleEs: "Última mañana y salida", description: "Matinée libre sur la terrasse, avant le transfert en hydravion retour vers Malé pour le vol international.", descriptionEn: "A free morning on the deck, before the seaplane transfer back to Malé for the international flight.", descriptionEs: "Mañana libre en la terraza, antes del traslado en hidroavión de vuelta a Malé para el vuelo internacional." },
    ],
    sections: [
      {
        heading: "Une villa, un lagon, aucun programme",
        headingEn: "One villa, one lagoon, no schedule",
        headingEs: "Una villa, una laguna, ningún programa",
        body: "Le transfert en hydravion depuis Malé marque déjà le début du dépaysement — l'archipel vu du ciel, mille nuances de turquoise. La villa sur pilotis devient alors le seul point fixe du séjour : terrasse privée au-dessus du lagon, échelle directe vers l'eau, et un rythme que rien ne vient bousculer. Les journées s'organisent librement, entre sorties snorkeling sur le récif du lagon — tortues et poissons-perroquets au rendez-vous — et longues heures sans autre projet que celui du moment.",
        bodyEn: "The seaplane transfer from Malé already marks the start of the escape — the archipelago seen from above, a thousand shades of turquoise. The overwater villa then becomes the trip's only fixed point: a private deck above the lagoon, a ladder straight into the water, and a pace nothing disturbs. Days unfold freely, between snorkeling trips on the lagoon's house reef — turtles and parrotfish included — and long stretches with no plan beyond the present moment.",
        bodyEs: "El traslado en hidroavión desde Malé ya marca el inicio de la desconexión — el archipiélago visto desde el aire, mil tonos de turquesa. La villa sobre el agua se convierte entonces en el único punto fijo de la estancia: terraza privada sobre la laguna, escalera directa al agua, y un ritmo que nada altera. Los días se organizan libremente, entre salidas de snorkel en el arrecife de la laguna — con tortugas y peces loro incluidos — y largas horas sin más plan que el del momento.",
      },
      {
        heading: "Bancs de sable et couchers de soleil",
        headingEn: "Sandbanks and sunsets",
        headingEs: "Bancos de arena y atardeceres",
        body: "Une croisière au coucher du soleil, dauphins à la proue, et une journée sur un banc de sable isolé — déjeuner pique-nique servi sur place, rien à l'horizon que le lagon — rythment la semaine sans jamais la remplir. Un soin au spa en fin d'après-midi, puis une dernière matinée sur la terrasse avant le transfert retour, ferment un séjour pensé pour ne rien faire, très bien.",
        bodyEn: "A sunset cruise with dolphins at the bow, and a day on a secluded sandbank — picnic lunch served on the spot, nothing on the horizon but lagoon — punctuate the week without ever filling it. A spa treatment in the late afternoon, then one last morning on the deck before the transfer back, close out a stay built for doing nothing, very well.",
        bodyEs: "Un crucero al atardecer con delfines en la proa, y un día en un banco de arena aislado — almuerzo picnic servido en el lugar, nada en el horizonte salvo la laguna — marcan la semana sin llegar nunca a llenarla. Un tratamiento de spa a última hora de la tarde, y una última mañana en la terraza antes del traslado de regreso, cierran una estancia pensada para no hacer nada, muy bien.",
      },
    ],
    hotels: [
      {
        name: "Malé Atoll Water Villas",
        nameEn: "Malé Atoll Water Villas",
        nameEs: "Malé Atoll Water Villas",
        description: "Des villas sur pilotis dispersées le long du lagon, chacune avec sa propre échelle vers l'eau et sa terrasse suspendue. Service discret, spa sur ponton, et le bruit de l'eau sous le plancher comme seul réveil.",
        descriptionEn: "Overwater villas scattered along the lagoon, each with its own ladder into the water and a suspended deck. Discreet service, an overwater spa, and the sound of water beneath the floorboards as the only alarm clock.",
        descriptionEs: "Villas sobre pilotes repartidas a lo largo de la laguna, cada una con su propia escalera al agua y una terraza suspendida. Servicio discreto, spa sobre un pantalán, y el sonido del agua bajo el suelo como único despertador.",
        image: `${R2}/trips/maldives-hotel-villa.jpg`,
      },
    ],
  },
  {
    destinationSlug: "france",
    tour: {
      name: "France : Paris, Provence et la Côte d'Azur",
      nameEn: "France: Paris, Provence & the Côte d'Azur",
      nameEs: "Francia: París, Provenza y la Costa Azul",
      slug: "france-paris-provence-cote-azur",
      image: `${R2}/destinations/france-hero.jpg`,
      images: `${R2}/trips/france-gallery-1.jpg,${R2}/trips/france-gallery-2.jpg,${R2}/trips/france-gallery-3.jpg,${R2}/trips/france-gallery-4.jpg,${R2}/trips/france-gallery-5.jpg,${R2}/trips/france-gallery-6.jpg`,
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "Mayo a sept",
      tagline: "Du Louvre aux calanques, un classique français réinventé",
      taglineEn: "From the Louvre to the calanques, a French classic reimagined",
      taglineEs: "Del Louvre a las calas, un clásico francés reinventado",
      description:
        "Paris pour l'art et l'architecture, le Luberon pour les villages perchés et les champs de lavande, puis la Côte d'Azur pour la lumière méditerranéenne. Un itinéraire pensé pour alterner grandes villes et silences de la campagne provençale.",
      descriptionEn:
        "Paris for art and architecture, the Luberon for hilltop villages and lavender fields, then the Côte d'Azur for Mediterranean light. An itinerary built to alternate between grand cities and the quiet of the Provençal countryside.",
      descriptionEs:
        "París por el arte y la arquitectura, el Luberon por los pueblos encaramados y los campos de lavanda, y después la Costa Azul por la luz mediterránea. Un itinerario pensado para alternar grandes ciudades con el silencio del campo provenzal.",
      price: 6800,
      originalPrice: 0,
      currency: "EUR",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      category: "multi-day",
      theme: "culture",
      travelerTypes: "couples,family,honeymoon",
      maxGuests: 6,
      featured: true,
      order: 7,
    },
    days: [
      { dayNumber: 1, location: "Paris", locationEn: "Paris", locationEs: "París", title: "Arrivée et le Marais", titleEn: "Arrival and Le Marais", titleEs: "Llegada y Le Marais", description: "Arrivée à Paris, installation, promenade du soir dans les ruelles du Marais avant un dîner de bistrot.", descriptionEn: "Arrival in Paris, check-in, an evening stroll through Le Marais before a bistro dinner.", descriptionEs: "Llegada a París, alojamiento y paseo nocturno por las callejuelas de Le Marais antes de cenar en un bistró." },
      { dayNumber: 2, location: "Paris", locationEn: "Paris", locationEs: "París", title: "Louvre et bords de Seine", titleEn: "The Louvre and the Seine", titleEs: "El Louvre y las orillas del Sena", description: "Visite privée du Louvre à l'ouverture, puis promenade le long de la Seine jusqu'à l'île Saint-Louis pour une glace.", descriptionEn: "A private visit to the Louvre at opening time, then a walk along the Seine to Île Saint-Louis for ice cream.", descriptionEs: "Visita privada al Louvre a primera hora, y paseo junto al Sena hasta la Île Saint-Louis para tomar un helado." },
      { dayNumber: 3, location: "Luberon", locationEn: "Luberon", locationEs: "Luberon", title: "Route vers la Provence", titleEn: "On to Provence", titleEs: "Camino a Provenza", description: "Transfert vers le Luberon, installation dans un mas provençal aux volets bleus, dîner sur la terrasse face aux collines.", descriptionEn: "Transfer to the Luberon, check-in at a Provençal farmhouse with blue shutters, dinner on the terrace facing the hills.", descriptionEs: "Traslado al Luberon, alojamiento en un mas provenzal de postigos azules, cena en la terraza frente a las colinas." },
      { dayNumber: 4, location: "Luberon", locationEn: "Luberon", locationEs: "Luberon", title: "Villages perchés et lavande", titleEn: "Hilltop villages and lavender", titleEs: "Pueblos encaramados y lavanda", description: "Journée entre Roussillon, ses falaises d'ocre, et Ménerbes, avec un détour par les champs de lavande de Sault en pleine floraison.", descriptionEn: "A day between Roussillon, with its ochre cliffs, and Ménerbes, with a detour to the lavender fields of Sault in full bloom.", descriptionEs: "Día entre Roussillon, con sus acantilados ocres, y Ménerbes, con una parada en los campos de lavanda de Sault en plena floración." },
      { dayNumber: 5, location: "Nice", locationEn: "Nice", locationEs: "Niza", title: "Route vers la Côte d'Azur", titleEn: "On to the Côte d'Azur", titleEs: "Camino a la Costa Azul", description: "Transfert vers Nice, installation face à la Baie des Anges, dîner sur le Cours Saleya au milieu des étals de fleurs.", descriptionEn: "Transfer to Nice, check-in facing the Baie des Anges, dinner on the Cours Saleya among the flower stalls.", descriptionEs: "Traslado a Niza, alojamiento frente a la Bahía de los Ángeles, cena en el Cours Saleya entre los puestos de flores." },
      { dayNumber: 6, location: "Nice", locationEn: "Nice", locationEs: "Niza", title: "Èze et le Cap Ferrat", titleEn: "Èze and Cap Ferrat", titleEs: "Èze y Cap Ferrat", description: "Matinée dans le village médiéval perché d'Èze, après-midi en bateau privé le long du Cap Ferrat.", descriptionEn: "A morning in the medieval hilltop village of Èze, an afternoon by private boat along Cap Ferrat.", descriptionEs: "Mañana en el pueblo medieval encaramado de Èze, tarde en barco privado a lo largo de Cap Ferrat." },
      { dayNumber: 7, location: "Nice", locationEn: "Nice", locationEs: "Niza", title: "Dernière matinée et départ", titleEn: "Last morning and departure", titleEs: "Última mañana y salida", description: "Matinée libre sur la Promenade des Anglais avant le transfert vers l'aéroport de Nice.", descriptionEn: "A free morning on the Promenade des Anglais before the transfer to Nice airport.", descriptionEs: "Mañana libre en la Promenade des Anglais antes del traslado al aeropuerto de Niza." },
    ],
    sections: [
      {
        heading: "Paris, en accès privé",
        headingEn: "Paris, on private access",
        headingEs: "París, en acceso privado",
        body: "Le séjour démarre par une soirée dans le Marais, ruelles animées et dîner de bistrot pour donner le ton. Le lendemain, une visite privée du Louvre à l'ouverture — avant l'affluence — précède une promenade le long de la Seine jusqu'à l'île Saint-Louis, glace à la main. Deux jours suffisent à capter l'essentiel de la capitale sans jamais se sentir pressé.",
        bodyEn: "The stay opens with an evening in Le Marais, lively lanes and a bistro dinner to set the tone. The next day, a private visit to the Louvre at opening time — ahead of the crowds — precedes a walk along the Seine to Île Saint-Louis, ice cream in hand. Two days are enough to capture the essential of the capital without ever feeling rushed.",
        bodyEs: "La estancia comienza con una noche en Le Marais, calles animadas y cena de bistró para marcar el tono. Al día siguiente, una visita privada al Louvre a primera hora — antes de la afluencia — precede a un paseo junto al Sena hasta la Île Saint-Louis, helado en mano. Dos días bastan para captar lo esencial de la capital sin sentirse nunca apresurado.",
      },
      {
        heading: "Provence et Côte d'Azur, la lumière du sud",
        headingEn: "Provence and the Côte d'Azur, southern light",
        headingEs: "Provenza y la Costa Azul, la luz del sur",
        body: "Le Luberon accueille la suite du voyage : un mas provençal aux volets bleus, les falaises d'ocre de Roussillon, les champs de lavande de Sault en pleine floraison. La route mène ensuite à Nice, face à la Baie des Anges, avant deux journées entre le village médiéval d'Èze et une sortie en bateau privé le long du Cap Ferrat — la Méditerranée comme point final.",
        bodyEn: "The Luberon takes over for the trip's second half: a Provençal farmhouse with blue shutters, Roussillon's ochre cliffs, the lavender fields of Sault in full bloom. The road then leads to Nice, facing the Baie des Anges, before two days between the medieval hilltop village of Èze and a private boat trip along Cap Ferrat — the Mediterranean as the final note.",
        bodyEs: "El Luberon acoge la segunda mitad del viaje: un mas provenzal de postigos azules, los acantilados ocres de Roussillon, los campos de lavanda de Sault en plena floración. La ruta lleva después a Niza, frente a la Bahía de los Ángeles, antes de dos días entre el pueblo medieval de Èze y una salida en barco privado por Cap Ferrat — el Mediterráneo como nota final.",
      },
    ],
    hotels: [
      {
        name: "Le Mas des Cigales",
        nameEn: "Le Mas des Cigales",
        nameEs: "Le Mas des Cigales",
        description: "Un mas provençal restauré au cœur du Luberon, volets bleus et jardin de lavande, piscine face aux collines. Petit-déjeuner sous la treille, silence de la campagne au coucher du soleil.",
        descriptionEn: "A restored Provençal farmhouse in the heart of the Luberon, blue shutters and a lavender garden, a pool facing the hills. Breakfast beneath the vine trellis, countryside silence at sunset.",
        descriptionEs: "Un mas provenzal restaurado en el corazón del Luberon, postigos azules y jardín de lavanda, piscina frente a las colinas. Desayuno bajo el emparrado, silencio del campo al atardecer.",
        image: `${R2}/trips/france-hotel-luberon.jpg`,
      },
      {
        name: "Villa Baie des Anges",
        nameEn: "Villa Baie des Anges",
        nameEs: "Villa Baie des Anges",
        description: "Une villa Belle Époque rénovée face à la mer à Nice, terrasse commune sur la Promenade des Anglais, à deux pas du marché aux fleurs du Cours Saleya.",
        descriptionEn: "A restored Belle Époque villa facing the sea in Nice, a shared terrace over the Promenade des Anglais, steps from the Cours Saleya flower market.",
        descriptionEs: "Una villa Belle Époque restaurada frente al mar en Niza, terraza común sobre la Promenade des Anglais, a pasos del mercado de flores del Cours Saleya.",
        image: `${R2}/trips/france-hotel-nice.jpg`,
      },
    ],
  },
  {
    destinationSlug: "royaume-uni",
    tour: {
      name: "Royaume-Uni : Londres et les Highlands d'Écosse",
      nameEn: "United Kingdom: London & the Scottish Highlands",
      nameEs: "Reino Unido: Londres y las Highlands escocesas",
      slug: "royaume-uni-londres-highlands",
      image: `${R2}/destinations/royaume-uni-hero.jpg`,
      images: `${R2}/trips/royaume-uni-gallery-1.jpg,${R2}/trips/royaume-uni-gallery-2.jpg,${R2}/trips/royaume-uni-gallery-3.jpg,${R2}/trips/royaume-uni-gallery-4.jpg,${R2}/trips/royaume-uni-gallery-5.jpg,${R2}/trips/royaume-uni-gallery-6.jpg`,
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "Mayo a sept",
      tagline: "Des musées de Londres au silence des Highlands",
      taglineEn: "From London's museums to the silence of the Highlands",
      taglineEs: "De los museos de Londres al silencio de las Highlands",
      description:
        "Londres pour son énergie et ses musées gratuits, les Cotswolds pour un aperçu de la campagne anglaise, puis l'Écosse pour ses châteaux et ses lochs. Un contraste net entre capitale et grand air, à quelques heures de train.",
      descriptionEn:
        "London for its energy and free museums, the Cotswolds for a taste of the English countryside, then Scotland for its castles and lochs. A clean contrast between capital and open air, just a few train hours apart.",
      descriptionEs:
        "Londres por su energía y sus museos gratuitos, los Cotswolds por una muestra del campo inglés, y después Escocia por sus castillos y lagos. Un contraste claro entre capital y aire libre, a pocas horas de tren.",
      price: 6500,
      originalPrice: 0,
      currency: "EUR",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      category: "multi-day",
      theme: "culture",
      travelerTypes: "family,couples,groups",
      maxGuests: 6,
      featured: true,
      order: 8,
    },
    days: [
      { dayNumber: 1, location: "Londres", locationEn: "London", locationEs: "Londres", title: "Arrivée et Tower Bridge", titleEn: "Arrival and Tower Bridge", titleEs: "Llegada y Tower Bridge", description: "Arrivée à Londres, installation, promenade du soir le long de la Tamise jusqu'à Tower Bridge illuminé.", descriptionEn: "Arrival in London, check-in, an evening walk along the Thames to a lit-up Tower Bridge.", descriptionEs: "Llegada a Londres, alojamiento y paseo nocturno junto al Támesis hasta el Tower Bridge iluminado." },
      { dayNumber: 2, location: "Londres", locationEn: "London", locationEs: "Londres", title: "Westminster et Notting Hill", titleEn: "Westminster and Notting Hill", titleEs: "Westminster y Notting Hill", description: "Matinée à Westminster et Big Ben, après-midi dans les maisons pastel de Notting Hill et son marché de Portobello.", descriptionEn: "A morning in Westminster by Big Ben, an afternoon among Notting Hill's pastel houses and Portobello Market.", descriptionEs: "Mañana en Westminster junto al Big Ben, tarde entre las casas pastel de Notting Hill y su mercado de Portobello." },
      { dayNumber: 3, location: "Cotswolds", locationEn: "Cotswolds", locationEs: "Cotswolds", title: "Villages de pierre dorée", titleEn: "Golden-stone villages", titleEs: "Pueblos de piedra dorada", description: "Route vers les Cotswolds, halte dans les villages de pierre dorée de Bibury et Bourton-on-the-Water, nuit dans une auberge de campagne.", descriptionEn: "Drive into the Cotswolds, stopping at the golden-stone villages of Bibury and Bourton-on-the-Water, overnight at a country inn.", descriptionEs: "Ruta hacia los Cotswolds, parada en los pueblos de piedra dorada de Bibury y Bourton-on-the-Water, noche en una posada rural." },
      { dayNumber: 4, location: "Édimbourg", locationEn: "Edinburgh", locationEs: "Edimburgo", title: "Train vers l'Écosse", titleEn: "Train to Scotland", titleEs: "Tren a Escocia", description: "Train vers Édimbourg, installation dans la vieille ville, promenade du soir jusqu'au château illuminé.", descriptionEn: "Train to Edinburgh, check-in in the old town, an evening walk up to the floodlit castle.", descriptionEs: "Tren a Edimburgo, alojamiento en el casco antiguo, paseo nocturno hasta el castillo iluminado." },
      { dayNumber: 5, location: "Édimbourg", locationEn: "Edinburgh", locationEs: "Edimburgo", title: "Château et Royal Mile", titleEn: "The Castle and the Royal Mile", titleEs: "El castillo y la Royal Mile", description: "Visite du château d'Édimbourg à l'ouverture, puis descente à pied de la Royal Mile jusqu'au palais de Holyroodhouse.", descriptionEn: "A visit to Edinburgh Castle at opening time, then a walk down the Royal Mile to Holyroodhouse Palace.", descriptionEs: "Visita al castillo de Edimburgo a primera hora, y bajada a pie por la Royal Mile hasta el palacio de Holyroodhouse." },
      { dayNumber: 6, location: "Highlands", locationEn: "Highlands", locationEs: "Highlands", title: "Loch Ness et Glencoe", titleEn: "Loch Ness and Glencoe", titleEs: "Loch Ness y Glencoe", description: "Journée dans les Highlands : la vallée de Glencoe, puis les rives du Loch Ness, avec un arrêt dans un pub de village pour un dernier whisky.", descriptionEn: "A day in the Highlands: Glencoe valley, then the shores of Loch Ness, with a stop at a village pub for a last whisky.", descriptionEs: "Día en las Highlands: el valle de Glencoe y las orillas del Loch Ness, con parada en un pub de pueblo para un último whisky." },
      { dayNumber: 7, location: "Édimbourg", locationEn: "Edinburgh", locationEs: "Edimburgo", title: "Retour et départ", titleEn: "Return and departure", titleEs: "Regreso y salida", description: "Retour vers Édimbourg en matinée, transfert vers l'aéroport pour le vol international.", descriptionEn: "Morning return to Edinburgh, transfer to the airport for the international flight.", descriptionEs: "Regreso a Edimburgo por la mañana, traslado al aeropuerto para el vuelo internacional." },
    ],
    sections: [
      {
        heading: "Londres et les Cotswolds",
        headingEn: "London and the Cotswolds",
        headingEs: "Londres y los Cotswolds",
        body: "Le voyage commence par deux jours à Londres : une soirée le long de la Tamise jusqu'à Tower Bridge illuminé, puis Westminster et Big Ben le matin, les maisons pastel de Notting Hill et le marché de Portobello l'après-midi. La route file ensuite vers les Cotswolds, où les villages de pierre dorée de Bibury et Bourton-on-the-Water offrent un contraste immédiat avec l'énergie de la capitale — une nuit dans une auberge de campagne pour prolonger la lenteur.",
        bodyEn: "The trip opens with two days in London: an evening along the Thames to a lit-up Tower Bridge, then Westminster and Big Ben in the morning, Notting Hill's pastel houses and Portobello Market in the afternoon. The road then runs into the Cotswolds, where the golden-stone villages of Bibury and Bourton-on-the-Water offer an immediate contrast to the capital's energy — a night at a country inn to stretch out the slower pace.",
        bodyEs: "El viaje comienza con dos días en Londres: una noche junto al Támesis hasta el Tower Bridge iluminado, y por la mañana Westminster y el Big Ben, con las casas pastel de Notting Hill y el mercado de Portobello por la tarde. La ruta sigue después hacia los Cotswolds, donde los pueblos de piedra dorada de Bibury y Bourton-on-the-Water ofrecen un contraste inmediato con la energía de la capital — una noche en una posada rural para prolongar la calma.",
      },
      {
        heading: "Édimbourg et les Highlands",
        headingEn: "Edinburgh and the Highlands",
        headingEs: "Edimburgo y las Highlands",
        body: "Un train mène vers Édimbourg, où le château illuminé domine la vieille ville dès la première soirée. Après une visite du château à l'ouverture et une descente de la Royal Mile jusqu'à Holyroodhouse, le voyage s'enfonce dans les Highlands : la vallée de Glencoe, les rives du Loch Ness, et un dernier whisky dans un pub de village avant de reprendre la route vers Édimbourg pour le vol retour.",
        bodyEn: "A train ride leads to Edinburgh, where the floodlit castle dominates the old town from the first evening. After a visit to the castle at opening time and a walk down the Royal Mile to Holyroodhouse, the trip pushes into the Highlands: Glencoe valley, the shores of Loch Ness, and one last whisky at a village pub before heading back to Edinburgh for the return flight.",
        bodyEs: "Un tren lleva hasta Edimburgo, donde el castillo iluminado domina el casco antiguo desde la primera noche. Tras una visita al castillo a primera hora y una bajada por la Royal Mile hasta Holyroodhouse, el viaje se adentra en las Highlands: el valle de Glencoe, las orillas del Loch Ness, y un último whisky en un pub de pueblo antes de volver a Edimburgo para el vuelo de regreso.",
      },
    ],
    hotels: [
      {
        name: "The Marylebone Townhouse",
        nameEn: "The Marylebone Townhouse",
        nameEs: "The Marylebone Townhouse",
        description: "Une maison de ville géorgienne restaurée près de Marylebone High Street, chambres classiques aux tons profonds, salon à cheminée pour le thé de l'après-midi.",
        descriptionEn: "A restored Georgian townhouse near Marylebone High Street, classic rooms in deep tones, a fireside lounge for afternoon tea.",
        descriptionEs: "Una casa georgiana restaurada cerca de Marylebone High Street, habitaciones clásicas de tonos profundos, salón con chimenea para el té de la tarde.",
        image: `${R2}/trips/royaume-uni-hotel-london.jpg`,
      },
      {
        name: "The Royal Mile House",
        nameEn: "The Royal Mile House",
        nameEs: "The Royal Mile House",
        description: "Un hôtel de charme niché dans un immeuble du XVIIe siècle, à deux pas de la Royal Mile et à vue du château d'Édimbourg depuis certaines chambres.",
        descriptionEn: "A boutique hotel tucked into a 17th-century building, steps from the Royal Mile and with castle views from select rooms.",
        descriptionEs: "Un hotel con encanto en un edificio del siglo XVII, a pasos de la Royal Mile y con vistas al castillo desde algunas habitaciones.",
        image: `${R2}/trips/royaume-uni-hotel-edinburgh.jpg`,
      },
    ],
  },
  {
    destinationSlug: "espagne",
    tour: {
      name: "Espagne : Barcelone, Séville et Grenade",
      nameEn: "Spain: Barcelona, Seville & Granada",
      nameEs: "España: Barcelona, Sevilla y Granada",
      slug: "espagne-barcelone-seville-grenade",
      image: `${R2}/destinations/espagne-hero.jpg`,
      images: `${R2}/trips/espagne-gallery-1.jpg,${R2}/trips/espagne-gallery-2.jpg,${R2}/trips/espagne-gallery-3.jpg,${R2}/trips/espagne-gallery-4.jpg,${R2}/trips/espagne-gallery-5.jpg,${R2}/trips/espagne-gallery-6.jpg`,
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | Sept a oct",
      tagline: "De Gaudí aux cours mauresques de l'Alhambra",
      taglineEn: "From Gaudí to the Moorish courtyards of the Alhambra",
      taglineEs: "De Gaudí a los patios moriscos de la Alhambra",
      description:
        "Barcelone pour l'architecture de Gaudí et la vie de rue, l'Andalousie pour ses palais mauresques et son flamenco. Un itinéraire qui traverse mille ans d'histoire espagnole, entre modernisme catalan et héritage andalou.",
      descriptionEn:
        "Barcelona for Gaudí's architecture and its street life, Andalusia for its Moorish palaces and flamenco. An itinerary that crosses a thousand years of Spanish history, from Catalan modernism to Andalusian heritage.",
      descriptionEs:
        "Barcelona por la arquitectura de Gaudí y su vida callejera, Andalucía por sus palacios moriscos y su flamenco. Un itinerario que atraviesa mil años de historia española, del modernismo catalán al legado andaluz.",
      price: 6200,
      originalPrice: 0,
      currency: "EUR",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      category: "multi-day",
      theme: "culture",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: true,
      order: 9,
    },
    days: [
      { dayNumber: 1, location: "Barcelone", locationEn: "Barcelona", locationEs: "Barcelona", title: "Arrivée et Quartier Gothique", titleEn: "Arrival and the Gothic Quarter", titleEs: "Llegada y Barrio Gótico", description: "Arrivée à Barcelone, installation, promenade du soir dans les ruelles du Quartier Gothique jusqu'à un dîner de tapas.", descriptionEn: "Arrival in Barcelona, check-in, an evening walk through the Gothic Quarter's lanes to a tapas dinner.", descriptionEs: "Llegada a Barcelona, alojamiento y paseo nocturno por las callejuelas del Barrio Gótico hasta una cena de tapas." },
      { dayNumber: 2, location: "Barcelone", locationEn: "Barcelona", locationEs: "Barcelona", title: "Sagrada Familia et Park Güell", titleEn: "Sagrada Familia and Park Güell", titleEs: "Sagrada Familia y Park Güell", description: "Visite matinale de la Sagrada Familia avant la foule, après-midi dans les mosaïques colorées du Park Güell.", descriptionEn: "A morning visit to the Sagrada Familia ahead of the crowds, an afternoon among Park Güell's colourful mosaics.", descriptionEs: "Visita matinal a la Sagrada Familia antes de la multitud, tarde entre los mosaicos de colores del Park Güell." },
      { dayNumber: 3, location: "Séville", locationEn: "Seville", locationEs: "Sevilla", title: "Vol vers l'Andalousie", titleEn: "Flight to Andalusia", titleEs: "Vuelo a Andalucía", description: "Vol vers Séville, installation, promenade du soir au bord du Guadalquivir avant un spectacle de flamenco.", descriptionEn: "Flight to Seville, check-in, an evening walk along the Guadalquivir before a flamenco show.", descriptionEs: "Vuelo a Sevilla, alojamiento y paseo nocturno junto al Guadalquivir antes de un espectáculo de flamenco." },
      { dayNumber: 4, location: "Séville", locationEn: "Seville", locationEs: "Sevilla", title: "L'Alcázar et le quartier Santa Cruz", titleEn: "The Alcázar and Santa Cruz", titleEs: "El Alcázar y Santa Cruz", description: "Visite privée de l'Alcázar de Séville et de ses jardins, puis flânerie dans les ruelles fleuries du quartier Santa Cruz.", descriptionEn: "A private visit to the Alcázar of Seville and its gardens, then a wander through the flower-lined lanes of Santa Cruz.", descriptionEs: "Visita privada al Alcázar de Sevilla y sus jardines, y paseo por las callejuelas floridas del barrio de Santa Cruz." },
      { dayNumber: 5, location: "Grenade", locationEn: "Granada", locationEs: "Granada", title: "Route vers Grenade", titleEn: "On to Granada", titleEs: "Camino a Granada", description: "Transfert vers Grenade, installation face à l'Alhambra, dîner dans le quartier de l'Albaicín.", descriptionEn: "Transfer to Granada, check-in facing the Alhambra, dinner in the Albaicín quarter.", descriptionEs: "Traslado a Granada, alojamiento frente a la Alhambra, cena en el barrio del Albaicín." },
      { dayNumber: 6, location: "Grenade", locationEn: "Granada", locationEs: "Granada", title: "L'Alhambra", titleEn: "The Alhambra", titleEs: "La Alhambra", description: "Visite guidée de l'Alhambra et des jardins du Generalife, coucher de soleil depuis le mirador de San Nicolás.", descriptionEn: "A guided visit to the Alhambra and the Generalife gardens, sunset from the San Nicolás viewpoint.", descriptionEs: "Visita guiada a la Alhambra y los jardines del Generalife, atardecer desde el mirador de San Nicolás." },
      { dayNumber: 7, location: "Grenade", locationEn: "Granada", locationEs: "Granada", title: "Dernière matinée et départ", titleEn: "Last morning and departure", titleEs: "Última mañana y salida", description: "Matinée libre dans l'Albaicín avant le transfert vers l'aéroport.", descriptionEn: "A free morning in the Albaicín before the airport transfer.", descriptionEs: "Mañana libre en el Albaicín antes del traslado al aeropuerto." },
    ],
    sections: [
      {
        heading: "Barcelone, la ville de Gaudí",
        headingEn: "Barcelona, Gaudí's city",
        headingEs: "Barcelona, la ciudad de Gaudí",
        body: "Le séjour s'ouvre dans le Quartier Gothique, ruelles étroites et dîner de tapas pour une première soirée catalane. Le lendemain, une visite matinale de la Sagrada Familia avant l'affluence, puis un après-midi dans les mosaïques du Park Güell, résument l'essentiel de l'œuvre de Gaudí en une seule journée bien rythmée.",
        bodyEn: "The stay opens in the Gothic Quarter, narrow lanes and a tapas dinner for a first Catalan evening. The next day, a morning visit to the Sagrada Familia ahead of the crowds, then an afternoon among Park Güell's mosaics, sum up the essence of Gaudí's work in one well-paced day.",
        bodyEs: "La estancia comienza en el Barrio Gótico, callejuelas estrechas y cena de tapas para una primera noche catalana. Al día siguiente, una visita matinal a la Sagrada Familia antes de la multitud, y una tarde entre los mosaicos del Park Güell, resumen lo esencial de la obra de Gaudí en un día bien equilibrado.",
      },
      {
        heading: "L'Andalousie, palais et flamenco",
        headingEn: "Andalusia, palaces and flamenco",
        headingEs: "Andalucía, palacios y flamenco",
        body: "Un vol vers Séville change de registre : le Guadalquivir au coucher du soleil, un spectacle de flamenco, puis l'Alcázar et ses jardins visités en accès privé avant la flânerie dans les ruelles fleuries de Santa Cruz. Grenade referme le voyage, face à l'Alhambra, avec une visite guidée du palais et des jardins du Generalife, et un coucher de soleil depuis le mirador de San Nicolás — mille ans d'histoire mauresque en un seul regard.",
        bodyEn: "A flight to Seville changes the register entirely: the Guadalquivir at sunset, a flamenco show, then the Alcázar and its gardens on private access before wandering the flower-lined lanes of Santa Cruz. Granada closes the trip, facing the Alhambra, with a guided tour of the palace and the Generalife gardens, and a sunset from the San Nicolás viewpoint — a thousand years of Moorish history in a single view.",
        bodyEs: "Un vuelo a Sevilla cambia por completo de registro: el Guadalquivir al atardecer, un espectáculo de flamenco, y después el Alcázar y sus jardines en acceso privado antes de pasear por las callejuelas floridas de Santa Cruz. Granada cierra el viaje, frente a la Alhambra, con una visita guiada al palacio y los jardines del Generalife, y un atardecer desde el mirador de San Nicolás — mil años de historia morisca en una sola mirada.",
      },
    ],
    hotels: [
      {
        name: "Hotel Born Gòtic",
        nameEn: "Hotel Born Gòtic",
        nameEs: "Hotel Born Gòtic",
        description: "Un boutique-hôtel installé dans un palais du XVIIIe siècle du Quartier Gothique, patio intérieur et chambres aux poutres apparentes, à deux pas de la cathédrale.",
        descriptionEn: "A boutique hotel set in an 18th-century Gothic Quarter palace, an inner courtyard and rooms with exposed beams, steps from the cathedral.",
        descriptionEs: "Un hotel boutique instalado en un palacio del siglo XVIII del Barrio Gótico, patio interior y habitaciones de vigas vistas, a pasos de la catedral.",
        image: `${R2}/trips/espagne-hotel-barcelone.jpg`,
      },
      {
        name: "Carmen del Albaicín",
        nameEn: "Carmen del Albaicín",
        nameEs: "Carmen del Albaicín",
        description: "Un carmen traditionnel de Grenade, jardin intérieur planté d'orangers et terrasse avec vue directe sur l'Alhambra illuminée le soir.",
        descriptionEn: "A traditional Granada carmen, an inner garden planted with orange trees and a terrace with a direct view of the floodlit Alhambra by night.",
        descriptionEs: "Un carmen tradicional de Granada, jardín interior con naranjos y terraza con vista directa a la Alhambra iluminada por la noche.",
        image: `${R2}/trips/espagne-hotel-grenade.jpg`,
      },
    ],
  },
  {
    destinationSlug: "grece",
    tour: {
      name: "Grèce : Athènes, Météores et Santorin",
      nameEn: "Greece: Athens, Meteora & Santorini",
      nameEs: "Grecia: Atenas, Meteora y Santorini",
      slug: "grece-athenes-meteores-santorin",
      image: `${R2}/destinations/grece-hero.jpg`,
      images: `${R2}/trips/grece-classic-gallery-1.jpg,${R2}/trips/grece-classic-gallery-2.jpg,${R2}/trips/grece-classic-gallery-3.jpg,${R2}/trips/grece-classic-gallery-4.jpg,${R2}/trips/grece-classic-gallery-5.jpg,${R2}/trips/grece-classic-gallery-6.jpg`,
      whenLabel: "Mai à juin | Sept à oct",
      whenLabelEn: "May to June | Sept to Oct",
      whenLabelEs: "Mayo a junio | Sept a oct",
      tagline: "Du Parthénon aux monastères suspendus, jusqu'à la caldeira",
      taglineEn: "From the Parthenon to cliffside monasteries, to the caldera",
      taglineEs: "Del Partenón a los monasterios suspendidos, hasta la caldera",
      description:
        "Athènes pour l'Acropole et ses ruelles de Plaka, les Météores pour leurs monastères perchés sur des piliers de roche, puis Santorin pour ses villages blancs au-dessus de la caldeira. Un condensé de la Grèce antique et de la Grèce des Cyclades.",
      descriptionEn:
        "Athens for the Acropolis and the lanes of Plaka, Meteora for its monasteries perched on rock pillars, then Santorini for its white villages above the caldera. A condensed tour of ancient Greece and the Cyclades.",
      descriptionEs:
        "Atenas por la Acrópolis y las calles de Plaka, Meteora por sus monasterios encaramados en pilares de roca, y después Santorini por sus pueblos blancos sobre la caldera. Un resumen de la Grecia antigua y la de las Cícladas.",
      price: 6400,
      originalPrice: 0,
      currency: "EUR",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      category: "multi-day",
      theme: "relax",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 4,
      featured: true,
      order: 10,
    },
    days: [
      { dayNumber: 1, location: "Athènes", locationEn: "Athens", locationEs: "Atenas", title: "Arrivée et Plaka", titleEn: "Arrival and Plaka", titleEs: "Llegada y Plaka", description: "Arrivée à Athènes, installation, promenade du soir dans les ruelles néoclassiques de Plaka au pied de l'Acropole.", descriptionEn: "Arrival in Athens, check-in, an evening walk through Plaka's neoclassical lanes at the foot of the Acropolis.", descriptionEs: "Llegada a Atenas, alojamiento y paseo nocturno por las calles neoclásicas de Plaka, al pie de la Acrópolis." },
      { dayNumber: 2, location: "Athènes", locationEn: "Athens", locationEs: "Atenas", title: "L'Acropole à l'aube", titleEn: "The Acropolis at dawn", titleEs: "La Acrópolis al amanecer", description: "Visite de l'Acropole et du Parthénon dès l'ouverture, avant la chaleur et la foule, puis musée de l'Acropole l'après-midi.", descriptionEn: "A visit to the Acropolis and the Parthenon at opening time, before the heat and the crowds, then the Acropolis Museum in the afternoon.", descriptionEs: "Visita a la Acrópolis y el Partenón a primera hora, antes del calor y la multitud, y por la tarde el Museo de la Acrópolis." },
      { dayNumber: 3, location: "Météores", locationEn: "Meteora", locationEs: "Meteora", title: "Route vers les Météores", titleEn: "On to Meteora", titleEs: "Camino a Meteora", description: "Transfert vers les Météores, installation face aux monastères perchés sur leurs piliers de roche, coucher de soleil depuis un point de vue local.", descriptionEn: "Transfer to Meteora, check-in facing the monasteries perched on their rock pillars, sunset from a local viewpoint.", descriptionEs: "Traslado a Meteora, alojamiento frente a los monasterios encaramados en sus pilares de roca, atardecer desde un mirador local." },
      { dayNumber: 4, location: "Météores", locationEn: "Meteora", locationEs: "Meteora", title: "Les monastères et vol vers Santorin", titleEn: "The monasteries and flight to Santorini", titleEs: "Los monasterios y vuelo a Santorini", description: "Visite matinale de deux monastères des Météores encore actifs, puis transfert et vol vers Santorin en fin de journée.", descriptionEn: "A morning visit to two still-active Meteora monasteries, then a transfer and flight to Santorini later in the day.", descriptionEs: "Visita matinal a dos monasterios de Meteora todavía activos, y traslado y vuelo a Santorini al final del día." },
      { dayNumber: 5, location: "Santorin", locationEn: "Santorini", locationEs: "Santorini", title: "Oia et la caldeira", titleEn: "Oia and the caldera", titleEs: "Oia y la caldera", description: "Journée à Oia, entre maisons blanches et bleues, terrasse au coucher du soleil face à la caldeira.", descriptionEn: "A day in Oia, among white and blue houses, a terrace at sunset facing the caldera.", descriptionEs: "Día en Oia, entre casas blancas y azules, terraza al atardecer frente a la caldera." },
      { dayNumber: 6, location: "Santorin", locationEn: "Santorini", locationEs: "Santorini", title: "Croisière volcanique", titleEn: "Volcano cruise", titleEs: "Crucero al volcán", description: "Sortie en bateau jusqu'au volcan actif de Nea Kameni et aux sources chaudes, baignade dans les eaux rougies par le soufre.", descriptionEn: "A boat trip out to the active Nea Kameni volcano and the hot springs, a swim in the sulphur-tinted waters.", descriptionEs: "Salida en barco hasta el volcán activo de Nea Kameni y las fuentes termales, baño en las aguas teñidas de azufre." },
      { dayNumber: 7, location: "Santorin", locationEn: "Santorini", locationEs: "Santorini", title: "Dernière matinée et départ", titleEn: "Last morning and departure", titleEs: "Última mañana y salida", description: "Matinée libre dans le village de Fira avant le transfert vers l'aéroport.", descriptionEn: "A free morning in Fira village before the airport transfer.", descriptionEs: "Mañana libre en el pueblo de Fira antes del traslado al aeropuerto." },
    ],
    sections: [
      {
        heading: "Athènes et les Météores",
        headingEn: "Athens and Meteora",
        headingEs: "Atenas y Meteora",
        body: "Le voyage commence dans les ruelles néoclassiques de Plaka, au pied de l'Acropole, avant une visite du Parthénon dès l'ouverture pour éviter la chaleur et la foule. La route mène ensuite vers les Météores, où des monastères byzantins toujours actifs sont perchés sur des piliers de roche vertigineux — deux d'entre eux se visitent le matin, avant un transfert vers les Cyclades en fin de journée.",
        bodyEn: "The trip begins in the neoclassical lanes of Plaka, at the foot of the Acropolis, with a visit to the Parthenon at opening time to beat the heat and the crowds. The road then leads to Meteora, where still-active Byzantine monasteries perch on vertiginous rock pillars — two are visited in the morning, before a transfer to the Cyclades later in the day.",
        bodyEs: "El viaje comienza en las calles neoclásicas de Plaka, al pie de la Acrópolis, con una visita al Partenón a primera hora para evitar el calor y la multitud. La ruta lleva después a Meteora, donde monasterios bizantinos todavía activos se alzan sobre pilares de roca vertiginosos — se visitan dos por la mañana, antes de un traslado a las Cícladas al final del día.",
      },
      {
        heading: "Santorin, la caldeira",
        headingEn: "Santorini, the caldera",
        headingEs: "Santorini, la caldera",
        body: "Santorin referme le voyage sur les maisons blanches et bleues d'Oia, terrasses suspendues au-dessus de la caldeira au coucher du soleil. Une sortie en bateau jusqu'au volcan actif de Nea Kameni et aux sources chaudes permet une baignade dans des eaux teintées de soufre, avant une dernière matinée libre dans le village de Fira.",
        bodyEn: "Santorini closes the trip with the white and blue houses of Oia, terraces suspended above the caldera at sunset. A boat trip out to the active Nea Kameni volcano and the hot springs allows a swim in sulphur-tinted waters, before one last free morning in Fira village.",
        bodyEs: "Santorini cierra el viaje con las casas blancas y azules de Oia, terrazas suspendidas sobre la caldera al atardecer. Una salida en barco hasta el volcán activo de Nea Kameni y las fuentes termales permite un baño en aguas teñidas de azufre, antes de una última mañana libre en el pueblo de Fira.",
      },
    ],
    hotels: [
      {
        name: "Plaka Neoclassic House",
        nameEn: "Plaka Neoclassic House",
        nameEs: "Plaka Neoclassic House",
        description: "Une maison néoclassique restaurée au pied de l'Acropole, terrasse sur le toit avec vue directe sur le Parthénon illuminé le soir.",
        descriptionEn: "A restored neoclassical house at the foot of the Acropolis, a rooftop terrace with a direct view of the floodlit Parthenon by night.",
        descriptionEs: "Una casa neoclásica restaurada al pie de la Acrópolis, terraza en la azotea con vista directa al Partenón iluminado por la noche.",
        image: `${R2}/trips/grece-classic-hotel-athenes.jpg`,
      },
      {
        name: "Caldera Blue Suites",
        nameEn: "Caldera Blue Suites",
        nameEs: "Caldera Blue Suites",
        description: "Des suites troglodytes creusées à flanc de falaise à Oia, piscine privée pour certaines, et une vue sur la caldeira qui ne se lasse jamais au coucher du soleil.",
        descriptionEn: "Cave-carved suites set into the cliffside in Oia, some with private plunge pools, and a caldera view that never gets old at sunset.",
        descriptionEs: "Suites excavadas en la ladera del acantilado en Oia, algunas con piscina privada, y una vista de la caldera que nunca cansa al atardecer.",
        image: `${R2}/trips/grece-classic-hotel-santorin.jpg`,
      },
    ],
  },
  {
    destinationSlug: "portugal",
    tour: {
      name: "Portugal : Lisbonne et la vallée du Douro",
      nameEn: "Portugal: Lisbon & the Douro Valley",
      nameEs: "Portugal: Lisboa y el valle del Duero",
      slug: "portugal-lisbonne-douro",
      image: `${R2}/destinations/portugal-hero.jpg`,
      images: `${R2}/trips/portugal-gallery-1.jpg,${R2}/trips/portugal-gallery-2.jpg,${R2}/trips/portugal-gallery-3.jpg,${R2}/trips/portugal-gallery-4.jpg,${R2}/trips/portugal-gallery-5.jpg,${R2}/trips/portugal-gallery-6.jpg`,
      whenLabel: "Mai à juin | Sept à oct",
      whenLabelEn: "May to June | Sept to Oct",
      whenLabelEs: "Mayo a junio | Sept a oct",
      tagline: "Des tramways de Lisbonne aux vignobles en terrasses",
      taglineEn: "From Lisbon's trams to terraced vineyards",
      taglineEs: "De los tranvías de Lisboa a los viñedos en terrazas",
      description:
        "Lisbonne pour ses tramways jaunes et ses points de vue sur le Tage, Sintra pour ses palais de conte de fées, puis la vallée du Douro pour ses vignobles en terrasses et une croisière au fil de l'eau.",
      descriptionEn:
        "Lisbon for its yellow trams and Tagus viewpoints, Sintra for its fairy-tale palaces, then the Douro Valley for its terraced vineyards and a cruise along the river.",
      descriptionEs:
        "Lisboa por sus tranvías amarillos y sus miradores sobre el Tajo, Sintra por sus palacios de cuento, y después el valle del Duero por sus viñedos en terrazas y un crucero fluvial.",
      price: 5200,
      originalPrice: 0,
      currency: "EUR",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      category: "multi-day",
      theme: "relax",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 4,
      featured: false,
      order: 11,
    },
    days: [
      { dayNumber: 1, location: "Lisbonne", locationEn: "Lisbon", locationEs: "Lisboa", title: "Arrivée et tramway 28", titleEn: "Arrival and Tram 28", titleEs: "Llegada y tranvía 28", description: "Arrivée à Lisbonne, installation, tour en tramway historique n°28 à travers les quartiers de l'Alfama et de la Graça.", descriptionEn: "Arrival in Lisbon, check-in, a ride on the historic Tram 28 through the Alfama and Graça districts.", descriptionEs: "Llegada a Lisboa, alojamiento y recorrido en el histórico tranvía 28 por los barrios de Alfama y Graça." },
      { dayNumber: 2, location: "Lisbonne", locationEn: "Lisbon", locationEs: "Lisboa", title: "Belém et les pastéis de nata", titleEn: "Belém and pastéis de nata", titleEs: "Belém y los pastéis de nata", description: "Matinée à Belém, la tour et le monastère des Hiéronymites, pause pastel de nata encore tiède dans la pâtisserie historique du quartier.", descriptionEn: "A morning in Belém, the tower and the Jerónimos Monastery, a stop for a warm pastel de nata at the district's historic pastry shop.", descriptionEs: "Mañana en Belém, la torre y el monasterio de los Jerónimos, parada para un pastel de nata templado en la pastelería histórica del barrio." },
      { dayNumber: 3, location: "Sintra", locationEn: "Sintra", locationEs: "Sintra", title: "Les palais de Sintra", titleEn: "The palaces of Sintra", titleEs: "Los palacios de Sintra", description: "Excursion à la journée à Sintra, entre le palais coloré de Pena et les jardins mystérieux de la Quinta da Regaleira.", descriptionEn: "A day trip to Sintra, between the colourful Pena Palace and the mysterious gardens of Quinta da Regaleira.", descriptionEs: "Excursión de un día a Sintra, entre el colorido Palacio da Pena y los misteriosos jardines de la Quinta da Regaleira." },
      { dayNumber: 4, location: "Vallée du Douro", locationEn: "Douro Valley", locationEs: "Valle del Duero", title: "Route vers le Douro", titleEn: "On to the Douro", titleEs: "Camino al Duero", description: "Transfert vers la vallée du Douro, installation dans une quinta viticole, dîner face aux vignobles en terrasses.", descriptionEn: "Transfer to the Douro Valley, check-in at a wine-producing quinta, dinner facing the terraced vineyards.", descriptionEs: "Traslado al valle del Duero, alojamiento en una quinta vinícola, cena frente a los viñedos en terrazas." },
      { dayNumber: 5, location: "Vallée du Douro", locationEn: "Douro Valley", locationEs: "Valle del Duero", title: "Croisière et dégustation", titleEn: "River cruise and tasting", titleEs: "Crucero y cata", description: "Croisière matinale sur le Douro entre les coteaux de vignes, dégustation de porto dans une cave familiale l'après-midi.", descriptionEn: "A morning cruise on the Douro between the vine-covered slopes, a port wine tasting at a family-run cellar in the afternoon.", descriptionEs: "Crucero matinal por el Duero entre las laderas de viñedos, cata de oporto en una bodega familiar por la tarde." },
      { dayNumber: 6, location: "Vallée du Douro", locationEn: "Douro Valley", locationEs: "Valle del Duero", title: "Dernière matinée et départ", titleEn: "Last morning and departure", titleEs: "Última mañana y salida", description: "Matinée libre parmi les vignes avant le transfert vers l'aéroport de Porto.", descriptionEn: "A free morning among the vines before the transfer to Porto airport.", descriptionEs: "Mañana libre entre las viñas antes del traslado al aeropuerto de Oporto." },
    ],
    sections: [
      {
        heading: "Lisbonne et Sintra",
        headingEn: "Lisbon and Sintra",
        headingEs: "Lisboa y Sintra",
        body: "Le voyage démarre à bord du tramway historique n°28, qui serpente à travers l'Alfama et la Graça — la meilleure façon de prendre la mesure de Lisbonne. Le lendemain, Belém et son monastère des Hiéronymites, pause pastel de nata tiède comprise, précèdent une excursion à Sintra, entre le palais coloré de Pena et les jardins mystérieux de la Quinta da Regaleira.",
        bodyEn: "The trip starts aboard the historic Tram 28, winding through the Alfama and Graça districts — the best way to take Lisbon's measure. The next day, Belém and its Jerónimos Monastery, warm pastel de nata included, come before a day trip to Sintra, between the colourful Pena Palace and the mysterious gardens of Quinta da Regaleira.",
        bodyEs: "El viaje empieza a bordo del histórico tranvía 28, que serpentea por Alfama y Graça — la mejor forma de tomarle el pulso a Lisboa. Al día siguiente, Belém y su monasterio de los Jerónimos, con parada para un pastel de nata templado, preceden a una excursión a Sintra, entre el colorido Palacio da Pena y los misteriosos jardines de la Quinta da Regaleira.",
      },
      {
        heading: "La vallée du Douro, au fil de l'eau",
        headingEn: "The Douro Valley, along the river",
        headingEs: "El valle del Duero, junto al río",
        body: "La route mène ensuite vers la vallée du Douro, où une quinta viticole devient le point d'ancrage : dîner face aux vignobles en terrasses le premier soir, croisière matinale sur le fleuve entre les coteaux le lendemain, puis dégustation de porto dans une cave familiale. Une dernière matinée libre parmi les vignes referme le voyage avant le transfert vers Porto.",
        bodyEn: "The road then leads to the Douro Valley, where a wine-producing quinta becomes the anchor point: dinner facing the terraced vineyards on the first evening, a morning river cruise between the slopes the next day, then a port wine tasting at a family-run cellar. One last free morning among the vines closes the trip before the transfer to Porto.",
        bodyEs: "La ruta lleva después al valle del Duero, donde una quinta vinícola se convierte en el punto de anclaje: cena frente a los viñedos en terrazas la primera noche, crucero matinal por el río entre las laderas al día siguiente, y cata de oporto en una bodega familiar. Una última mañana libre entre las viñas cierra el viaje antes del traslado a Oporto.",
      },
    ],
    hotels: [
      {
        name: "Alfama Blue House",
        nameEn: "Alfama Blue House",
        nameEs: "Alfama Blue House",
        description: "Une maison de quartier restaurée dans l'Alfama, azulejos d'origine et terrasse sur le toit face au Tage, à quelques pas du tramway 28.",
        descriptionEn: "A restored neighbourhood house in the Alfama, original azulejo tiles and a rooftop terrace facing the Tagus, a few steps from Tram 28.",
        descriptionEs: "Una casa de barrio restaurada en Alfama, azulejos originales y terraza en la azotea frente al Tajo, a pocos pasos del tranvía 28.",
        image: `${R2}/trips/portugal-hotel-lisbonne.jpg`,
      },
      {
        name: "Quinta do Vale Dourado",
        nameEn: "Quinta do Vale Dourado",
        nameEs: "Quinta do Vale Dourado",
        description: "Une quinta viticole familiale perchée au-dessus du Douro, piscine face aux coteaux en terrasses, dîners servis avec les vins produits sur place.",
        descriptionEn: "A family-run wine quinta perched above the Douro, a pool facing the terraced slopes, dinners served with the estate's own wines.",
        descriptionEs: "Una quinta vinícola familiar encaramada sobre el Duero, piscina frente a las laderas en terrazas, cenas servidas con los vinos producidos en la propia finca.",
        image: `${R2}/trips/portugal-hotel-douro.jpg`,
      },
    ],
  },
  {
    destinationSlug: "croatie",
    tour: {
      name: "Croatie : Dubrovnik, Plitvice et Hvar",
      nameEn: "Croatia: Dubrovnik, Plitvice & Hvar",
      nameEs: "Croacia: Dubrovnik, Plitvice y Hvar",
      slug: "croatie-dubrovnik-plitvice-hvar",
      image: `${R2}/destinations/croatie-hero.jpg`,
      images: `${R2}/trips/croatie-gallery-1.jpg,${R2}/trips/croatie-gallery-2.jpg,${R2}/trips/croatie-gallery-3.jpg,${R2}/trips/croatie-gallery-4.jpg,${R2}/trips/croatie-gallery-5.jpg,${R2}/trips/croatie-gallery-6.jpg`,
      whenLabel: "Mai à juin | Sept",
      whenLabelEn: "May to June | Sept",
      whenLabelEs: "Mayo a junio | Sept",
      tagline: "Des remparts millénaires aux eaux turquoise de l'Adriatique",
      taglineEn: "From centuries-old ramparts to the Adriatic's turquoise water",
      taglineEs: "De murallas milenarias a las aguas turquesa del Adriático",
      description:
        "Dubrovnik pour ses remparts et sa vieille ville de pierre blanche, le parc national de Plitvice pour ses lacs en cascade, puis l'île de Hvar pour ses criques et son Adriatique d'un bleu profond.",
      descriptionEn:
        "Dubrovnik for its ramparts and white-stone old town, Plitvice National Park for its cascading lakes, then the island of Hvar for its coves and deep-blue Adriatic.",
      descriptionEs:
        "Dubrovnik por sus murallas y su casco antiguo de piedra blanca, el parque nacional de Plitvice por sus lagos en cascada, y después la isla de Hvar por sus calas y su Adriático de azul profundo.",
      price: 5400,
      originalPrice: 0,
      currency: "EUR",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      category: "multi-day",
      theme: "adventure",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 12,
    },
    days: [
      { dayNumber: 1, location: "Dubrovnik", locationEn: "Dubrovnik", locationEs: "Dubrovnik", title: "Arrivée et remparts", titleEn: "Arrival and the city walls", titleEs: "Llegada y las murallas", description: "Arrivée à Dubrovnik, installation, marche sur les remparts en fin d'après-midi pour une vue d'ensemble de la vieille ville.", descriptionEn: "Arrival in Dubrovnik, check-in, a late-afternoon walk along the city walls for an overview of the old town.", descriptionEs: "Llegada a Dubrovnik, alojamiento y paseo por las murallas a última hora de la tarde para una vista general del casco antiguo." },
      { dayNumber: 2, location: "Dubrovnik", locationEn: "Dubrovnik", locationEs: "Dubrovnik", title: "Téléphérique et kayak", titleEn: "Cable car and kayaking", titleEs: "Teleférico y kayak", description: "Montée en téléphérique jusqu'au mont Srđ pour une vue sur l'Adriatique, sortie en kayak de mer le long des remparts l'après-midi.", descriptionEn: "A cable car ride up Mount Srđ for a view over the Adriatic, a sea kayaking trip along the ramparts in the afternoon.", descriptionEs: "Subida en teleférico al monte Srđ para ver el Adriático, salida en kayak de mar junto a las murallas por la tarde." },
      { dayNumber: 3, location: "Plitvice", locationEn: "Plitvice", locationEs: "Plitvice", title: "Route vers les lacs de Plitvice", titleEn: "On to the Plitvice Lakes", titleEs: "Camino a los lagos de Plitvice", description: "Transfert vers le parc national de Plitvice, randonnée l'après-midi le long des passerelles en bois entre les lacs en cascade.", descriptionEn: "Transfer to Plitvice National Park, an afternoon hike along the wooden walkways between the cascading lakes.", descriptionEs: "Traslado al parque nacional de Plitvice, caminata por la tarde por las pasarelas de madera entre los lagos en cascada." },
      { dayNumber: 4, location: "Hvar", locationEn: "Hvar", locationEs: "Hvar", title: "Route vers Split et ferry pour Hvar", titleEn: "On to Split and the ferry to Hvar", titleEs: "Camino a Split y ferry a Hvar", description: "Transfert vers Split, puis ferry jusqu'à l'île de Hvar, installation face au port et à sa citadelle vénitienne.", descriptionEn: "Transfer to Split, then a ferry to the island of Hvar, check-in facing the harbour and its Venetian fortress.", descriptionEs: "Traslado a Split, y ferry hasta la isla de Hvar, alojamiento frente al puerto y su fortaleza veneciana." },
      { dayNumber: 5, location: "Hvar", locationEn: "Hvar", locationEs: "Hvar", title: "Criques et champs de lavande", titleEn: "Coves and lavender fields", titleEs: "Calas y campos de lavanda", description: "Journée en bateau le long des criques de la côte sud de Hvar, halte dans un champ de lavande en fin de journée.", descriptionEn: "A day by boat along Hvar's southern coves, a stop at a lavender field later in the day.", descriptionEs: "Día en barco por las calas de la costa sur de Hvar, parada en un campo de lavanda al final del día." },
      { dayNumber: 6, location: "Hvar", locationEn: "Hvar", locationEs: "Hvar", title: "Dernière matinée et départ", titleEn: "Last morning and departure", titleEs: "Última mañana y salida", description: "Matinée libre dans les ruelles de pierre de la ville de Hvar avant le transfert retour vers Split.", descriptionEn: "A free morning in Hvar town's stone lanes before the transfer back to Split.", descriptionEs: "Mañana libre en las calles de piedra de la ciudad de Hvar antes del traslado de vuelta a Split." },
    ],
    sections: [
      {
        heading: "Dubrovnik et les lacs de Plitvice",
        headingEn: "Dubrovnik and the Plitvice Lakes",
        headingEs: "Dubrovnik y los lagos de Plitvice",
        body: "Le voyage commence sur les remparts de Dubrovnik, marche en fin d'après-midi pour une vue d'ensemble sur les toits de tuile de la vieille ville. Le lendemain, un téléphérique jusqu'au mont Srđ offre un panorama sur l'Adriatique, avant une sortie en kayak de mer le long des fortifications. La route mène ensuite au parc national de Plitvice, où des passerelles en bois serpentent entre des lacs en cascade d'un bleu-vert saisissant.",
        bodyEn: "The trip begins on Dubrovnik's city walls, a late-afternoon walk for an overview of the old town's tiled rooftops. The next day, a cable car up Mount Srđ offers a panorama over the Adriatic, before a sea kayaking trip along the fortifications. The road then leads to Plitvice National Park, where wooden walkways wind between cascading lakes of a striking blue-green.",
        bodyEs: "El viaje comienza en las murallas de Dubrovnik, paseo a última hora de la tarde para una vista general de los tejados de tejas del casco antiguo. Al día siguiente, un teleférico hasta el monte Srđ ofrece una panorámica sobre el Adriático, antes de una salida en kayak de mar junto a las fortificaciones. La ruta lleva después al parque nacional de Plitvice, donde pasarelas de madera serpentean entre lagos en cascada de un llamativo azul verdoso.",
      },
      {
        heading: "Hvar, l'Adriatique en bleu profond",
        headingEn: "Hvar, the deep-blue Adriatic",
        headingEs: "Hvar, el Adriático de azul profundo",
        body: "Un ferry depuis Split conduit à l'île de Hvar, face au port et à sa citadelle vénitienne. Une journée en bateau le long des criques de la côte sud, halte dans un champ de lavande en fin de journée, précède une dernière matinée libre dans les ruelles de pierre de la ville de Hvar — dernier regard sur l'Adriatique avant le retour.",
        bodyEn: "A ferry from Split leads to the island of Hvar, facing the harbour and its Venetian fortress. A day by boat along the southern coves, a stop at a lavender field later in the day, precedes one last free morning in Hvar town's stone lanes — a final look at the Adriatic before heading back.",
        bodyEs: "Un ferry desde Split lleva hasta la isla de Hvar, frente al puerto y su fortaleza veneciana. Un día en barco por las calas de la costa sur, con parada en un campo de lavanda al final del día, precede a una última mañana libre en las calles de piedra de la ciudad de Hvar — última mirada al Adriático antes de volver.",
      },
    ],
    hotels: [
      {
        name: "Stari Grad Dubrovnik",
        nameEn: "Stari Grad Dubrovnik",
        nameEs: "Stari Grad Dubrovnik",
        description: "Une maison de pierre restaurée dans la vieille ville de Dubrovnik, à deux pas des remparts, terrasse commune avec vue sur les toits de tuile.",
        descriptionEn: "A restored stone house in Dubrovnik's old town, steps from the city walls, a shared terrace with views over the tiled rooftops.",
        descriptionEs: "Una casa de piedra restaurada en el casco antiguo de Dubrovnik, a pasos de las murallas, terraza común con vistas a los tejados de tejas.",
        image: `${R2}/trips/croatie-hotel-dubrovnik.jpg`,
      },
      {
        name: "Villa Hvar Marina",
        nameEn: "Villa Hvar Marina",
        nameEs: "Villa Hvar Marina",
        description: "Une villa face au port de Hvar, chambres claires aux volets blancs, petit-déjeuner servi sur une terrasse dominant les voiliers amarrés.",
        descriptionEn: "A villa facing Hvar's harbour, bright rooms with white shutters, breakfast served on a terrace overlooking the moored sailboats.",
        descriptionEs: "Una villa frente al puerto de Hvar, habitaciones luminosas de postigos blancos, desayuno servido en una terraza con vistas a los veleros amarrados.",
        image: `${R2}/trips/croatie-hotel-hvar.jpg`,
      },
    ],
  },
  {
    destinationSlug: "suisse",
    tour: {
      name: "Suisse : Genève, Zermatt et Lucerne",
      nameEn: "Switzerland: Geneva, Zermatt & Lucerne",
      nameEs: "Suiza: Ginebra, Zermatt y Lucerna",
      slug: "suisse-geneve-zermatt-lucerne",
      image: `${R2}/destinations/suisse-hero.jpg`,
      images: `${R2}/trips/suisse-gallery-1.jpg,${R2}/trips/suisse-gallery-2.jpg,${R2}/trips/suisse-gallery-3.jpg,${R2}/trips/suisse-gallery-4.jpg,${R2}/trips/suisse-gallery-5.jpg,${R2}/trips/suisse-gallery-6.jpg`,
      whenLabel: "Juin à sept | Déc à mars",
      whenLabelEn: "June to Sept | Dec to March",
      whenLabelEs: "Junio a sept | Dic a marzo",
      tagline: "Un train panoramique entre lac et Cervin",
      taglineEn: "A panoramic train between lake and Matterhorn",
      taglineEs: "Un tren panorámico entre el lago y el Cervino",
      description:
        "Genève et son lac, un trajet en train panoramique à travers les Alpes valaisannes jusqu'à Zermatt et son Cervin, puis Lucerne pour un dernier lac entouré de montagnes. Trois visages de la Suisse, reliés par le rail.",
      descriptionEn:
        "Geneva and its lake, a panoramic train ride through the Valais Alps to Zermatt and the Matterhorn, then Lucerne for one last mountain-ringed lake. Three faces of Switzerland, connected by rail.",
      descriptionEs:
        "Ginebra y su lago, un trayecto en tren panorámico por los Alpes del Valais hasta Zermatt y el Cervino, y después Lucerna para un último lago rodeado de montañas. Tres caras de Suiza, unidas por el tren.",
      price: 7200,
      originalPrice: 0,
      currency: "EUR",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      category: "multi-day",
      theme: "adventure",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 4,
      featured: true,
      order: 13,
    },
    days: [
      { dayNumber: 1, location: "Genève", locationEn: "Geneva", locationEs: "Ginebra", title: "Arrivée au bord du lac", titleEn: "Arrival on the lake", titleEs: "Llegada junto al lago", description: "Arrivée à Genève, installation, promenade du soir le long du lac Léman jusqu'au Jet d'Eau.", descriptionEn: "Arrival in Geneva, check-in, an evening walk along Lake Geneva to the Jet d'Eau.", descriptionEs: "Llegada a Ginebra, alojamiento y paseo nocturno junto al lago Lemán hasta el Jet d'Eau." },
      { dayNumber: 2, location: "Zermatt", locationEn: "Zermatt", locationEs: "Zermatt", title: "Le train panoramique vers Zermatt", titleEn: "The panoramic train to Zermatt", titleEs: "El tren panorámico a Zermatt", description: "Trajet en train panoramique à travers les vignobles du Valais jusqu'à Zermatt, village sans voitures au pied du Cervin.", descriptionEn: "A panoramic train ride through the Valais vineyards to Zermatt, a car-free village at the foot of the Matterhorn.", descriptionEs: "Trayecto en tren panorámico por los viñedos del Valais hasta Zermatt, un pueblo sin coches a los pies del Cervino.", },
      { dayNumber: 3, location: "Zermatt", locationEn: "Zermatt", locationEs: "Zermatt", title: "Gornergrat et vue sur le Cervin", titleEn: "Gornergrat and Matterhorn views", titleEs: "Gornergrat y vistas al Cervino", description: "Montée en train à crémaillère jusqu'au Gornergrat pour une vue directe sur le Cervin, retour à pied par un sentier balisé.", descriptionEn: "A cogwheel train ride up to Gornergrat for a direct view of the Matterhorn, a walk back down along a marked trail.", descriptionEs: "Subida en tren de cremallera hasta el Gornergrat para una vista directa del Cervino, bajada a pie por un sendero señalizado." },
      { dayNumber: 4, location: "Lucerne", locationEn: "Lucerne", locationEs: "Lucerna", title: "Route vers Lucerne", titleEn: "On to Lucerne", titleEs: "Camino a Lucerna", description: "Transfert vers Lucerne, installation près du pont de la Chapelle, promenade du soir au bord du lac des Quatre-Cantons.", descriptionEn: "Transfer to Lucerne, check-in near the Chapel Bridge, an evening walk along Lake Lucerne.", descriptionEs: "Traslado a Lucerna, alojamiento cerca del puente de la Capilla, paseo nocturno junto al lago de los Cuatro Cantones." },
      { dayNumber: 5, location: "Lucerne", locationEn: "Lucerne", locationEs: "Lucerna", title: "Le mont Pilate", titleEn: "Mount Pilatus", titleEs: "El monte Pilatus", description: "Excursion en téléphérique et bateau à vapeur jusqu'au sommet du mont Pilate, panorama sur les Alpes suisses.", descriptionEn: "A cable car and steamboat excursion up Mount Pilatus, panoramic views across the Swiss Alps.", descriptionEs: "Excursión en teleférico y barco de vapor hasta la cima del monte Pilatus, panorámica de los Alpes suizos." },
      { dayNumber: 6, location: "Lucerne", locationEn: "Lucerne", locationEs: "Lucerna", title: "Dernière matinée et départ", titleEn: "Last morning and departure", titleEs: "Última mañana y salida", description: "Matinée libre dans la vieille ville de Lucerne avant le transfert vers l'aéroport de Zurich.", descriptionEn: "A free morning in Lucerne's old town before the transfer to Zurich airport.", descriptionEs: "Mañana libre en el casco antiguo de Lucerna antes del traslado al aeropuerto de Zúrich." },
    ],
    sections: [
      {
        heading: "Genève et le train vers Zermatt",
        headingEn: "Geneva and the train to Zermatt",
        headingEs: "Ginebra y el tren a Zermatt",
        body: "Le voyage démarre au bord du lac Léman, promenade du soir jusqu'au Jet d'Eau pour une première soirée genevoise. Le lendemain, un trajet en train panoramique traverse les vignobles du Valais jusqu'à Zermatt, village sans voitures au pied du Cervin. Un train à crémaillère grimpe ensuite jusqu'au Gornergrat pour une vue directe sur le sommet, avant une descente à pied par un sentier balisé.",
        bodyEn: "The trip starts on the shores of Lake Geneva, an evening walk to the Jet d'Eau for a first Genevan evening. The next day, a panoramic train ride crosses the Valais vineyards to Zermatt, a car-free village at the foot of the Matterhorn. A cogwheel train then climbs to Gornergrat for a direct view of the peak, before a walk back down along a marked trail.",
        bodyEs: "El viaje comienza a orillas del lago Lemán, paseo nocturno hasta el Jet d'Eau para una primera noche ginebrina. Al día siguiente, un trayecto en tren panorámico atraviesa los viñedos del Valais hasta Zermatt, un pueblo sin coches a los pies del Cervino. Un tren de cremallera sube después hasta el Gornergrat para una vista directa de la cima, antes de bajar a pie por un sendero señalizado.",
      },
      {
        heading: "Lucerne, le dernier lac",
        headingEn: "Lucerne, the last lake",
        headingEs: "Lucerna, el último lago",
        body: "La route rejoint ensuite Lucerne, installation près du pont de la Chapelle et promenade du soir au bord du lac des Quatre-Cantons. Une excursion en téléphérique et bateau à vapeur mène au sommet du mont Pilate, panorama sur les Alpes suisses, avant une dernière matinée libre dans la vieille ville pour refermer ce trajet ferroviaire à travers trois visages du pays.",
        bodyEn: "The road then reaches Lucerne, check-in near the Chapel Bridge and an evening walk along Lake Lucerne. A cable car and steamboat excursion leads to the summit of Mount Pilatus, panoramic views across the Swiss Alps, before one last free morning in the old town to close this rail journey through three faces of the country.",
        bodyEs: "La ruta llega después a Lucerna, alojamiento cerca del puente de la Capilla y paseo nocturno junto al lago de los Cuatro Cantones. Una excursión en teleférico y barco de vapor lleva a la cima del monte Pilatus, panorámica de los Alpes suizos, antes de una última mañana libre en el casco antiguo para cerrar este recorrido ferroviario por tres caras del país.",
      },
    ],
    hotels: [
      {
        name: "Le Cervin Boutique Hotel",
        nameEn: "Le Cervin Boutique Hotel",
        nameEs: "Le Cervin Boutique Hotel",
        description: "Un chalet-hôtel au cœur du village sans voitures de Zermatt, chambres en bois clair avec vue sur le Cervin, spa avec bain à remous face aux sommets.",
        descriptionEn: "A chalet hotel in the heart of car-free Zermatt, light-wood rooms with Matterhorn views, a spa with a hot tub facing the peaks.",
        descriptionEs: "Un hotel-chalet en el corazón del pueblo sin coches de Zermatt, habitaciones de madera clara con vistas al Cervino, spa con jacuzzi frente a las cumbres.",
        image: `${R2}/trips/suisse-hotel-zermatt.jpg`,
      },
      {
        name: "Altstadt Lucerne",
        nameEn: "Altstadt Lucerne",
        nameEs: "Altstadt Lucerne",
        description: "Une maison ancienne rénovée dans la vieille ville de Lucerne, à deux pas du pont de la Chapelle, chambres avec vue sur les façades peintes du quartier.",
        descriptionEn: "A renovated old house in Lucerne's old town, steps from the Chapel Bridge, rooms overlooking the district's painted facades.",
        descriptionEs: "Una casa antigua renovada en el casco antiguo de Lucerna, a pasos del puente de la Capilla, habitaciones con vistas a las fachadas pintadas del barrio.",
        image: `${R2}/trips/suisse-hotel-lucerne.jpg`,
      },
    ],
  },
  {
    destinationSlug: "norvege",
    tour: {
      name: "Norvège : Bergen, fjords et Lofoten",
      nameEn: "Norway: Bergen, Fjords & the Lofoten Islands",
      nameEs: "Noruega: Bergen, fiordos y Lofoten",
      slug: "norvege-bergen-fjords-lofoten",
      image: `${R2}/destinations/norvege-hero.jpg`,
      images: `${R2}/trips/norvege-gallery-1.jpg,${R2}/trips/norvege-gallery-2.jpg,${R2}/trips/norvege-gallery-3.jpg,${R2}/trips/norvege-gallery-4.jpg,${R2}/trips/norvege-gallery-5.jpg,${R2}/trips/norvege-gallery-6.jpg`,
      whenLabel: "Sept à mars",
      whenLabelEn: "Sept to March",
      whenLabelEs: "Sept a marzo",
      tagline: "Des maisons colorées de Bergen aux aurores boréales",
      taglineEn: "From Bergen's colourful houses to the northern lights",
      taglineEs: "De las casas coloridas de Bergen a las auroras boreales",
      description:
        "Bergen pour ses maisons hanséatiques colorées, une croisière sur le Nærøyfjord pour l'un des plus beaux fjords du pays, puis les îles Lofoten pour leurs villages de pêcheurs et leurs nuits d'aurores boréales.",
      descriptionEn:
        "Bergen for its colourful Hanseatic houses, a cruise on the Nærøyfjord for one of the country's finest fjords, then the Lofoten Islands for their fishing villages and northern-lights nights.",
      descriptionEs:
        "Bergen por sus coloridas casas hanseáticas, un crucero por el Nærøyfjord, uno de los fiordos más bellos del país, y después las islas Lofoten por sus pueblos de pescadores y sus noches de auroras boreales.",
      price: 6900,
      originalPrice: 0,
      currency: "EUR",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      category: "multi-day",
      theme: "adventure",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 4,
      featured: true,
      order: 14,
    },
    days: [
      { dayNumber: 1, location: "Bergen", locationEn: "Bergen", locationEs: "Bergen", title: "Arrivée et le quai de Bryggen", titleEn: "Arrival and the Bryggen wharf", titleEs: "Llegada y el muelle de Bryggen", description: "Arrivée à Bergen, installation, promenade du soir le long des façades colorées du quai hanséatique de Bryggen.", descriptionEn: "Arrival in Bergen, check-in, an evening walk along the colourful facades of the Hanseatic Bryggen wharf.", descriptionEs: "Llegada a Bergen, alojamiento y paseo nocturno junto a las fachadas coloridas del muelle hanseático de Bryggen." },
      { dayNumber: 2, location: "Nærøyfjord", locationEn: "Nærøyfjord", locationEs: "Nærøyfjord", title: "Croisière sur le Nærøyfjord", titleEn: "Cruising the Nærøyfjord", titleEs: "Crucero por el Nærøyfjord", description: "Journée de croisière sur le Nærøyfjord, classé à l'UNESCO, entre parois vertigineuses et cascades tombant directement dans l'eau.", descriptionEn: "A full day cruising the UNESCO-listed Nærøyfjord, between towering cliff walls and waterfalls dropping straight into the water.", descriptionEs: "Día de crucero por el Nærøyfjord, declarado por la UNESCO, entre paredes vertiginosas y cascadas que caen directamente al agua." },
      { dayNumber: 3, location: "Lofoten", locationEn: "Lofoten", locationEs: "Lofoten", title: "Vol vers les îles Lofoten", titleEn: "Flight to the Lofoten Islands", titleEs: "Vuelo a las islas Lofoten", description: "Vol vers l'archipel des Lofoten, installation dans une ancienne cabane de pêcheur (rorbu) au bord de l'eau.", descriptionEn: "Flight to the Lofoten archipelago, check-in at a converted fisherman's cabin (rorbu) right on the water.", descriptionEs: "Vuelo al archipiélago de Lofoten, alojamiento en una antigua cabaña de pescadores (rorbu) junto al agua." },
      { dayNumber: 4, location: "Lofoten", locationEn: "Lofoten", locationEs: "Lofoten", title: "Villages de pêcheurs et plages arctiques", titleEn: "Fishing villages and arctic beaches", titleEs: "Pueblos de pescadores y playas árticas", description: "Journée entre les villages de Reine et Hamnøy, et la plage de sable blanc de Kvalvika, entourée de sommets abrupts.", descriptionEn: "A day between the villages of Reine and Hamnøy, and the white-sand beach of Kvalvika, ringed by sheer peaks.", descriptionEs: "Día entre los pueblos de Reine y Hamnøy, y la playa de arena blanca de Kvalvika, rodeada de picos abruptos." },
      { dayNumber: 5, location: "Lofoten", locationEn: "Lofoten", locationEs: "Lofoten", title: "Chasse aux aurores boréales", titleEn: "Northern lights hunt", titleEs: "Caza de auroras boreales", description: "Journée libre, puis sortie nocturne avec un guide local pour traquer les aurores boréales loin de toute lumière.", descriptionEn: "A free day, then a night outing with a local guide to track down the northern lights far from any light pollution.", descriptionEs: "Día libre y, por la noche, salida con un guía local para buscar auroras boreales lejos de toda luz." },
      { dayNumber: 6, location: "Lofoten", locationEn: "Lofoten", locationEs: "Lofoten", title: "Dernière matinée et départ", titleEn: "Last morning and departure", titleEs: "Última mañana y salida", description: "Matinée libre au bord de l'eau avant le transfert vers l'aéroport pour le vol retour.", descriptionEn: "A free morning by the water before the transfer to the airport for the return flight.", descriptionEs: "Mañana libre junto al agua antes del traslado al aeropuerto para el vuelo de regreso." },
    ],
    sections: [
      {
        heading: "Bergen et le Nærøyfjord",
        headingEn: "Bergen and the Nærøyfjord",
        headingEs: "Bergen y el Nærøyfjord",
        body: "Le voyage commence sur le quai hanséatique de Bryggen, façades colorées et ruelles de bois classées à l'UNESCO. Une journée entière de croisière sur le Nærøyfjord, l'un des plus beaux fjords du pays, suit ensuite : parois vertigineuses, cascades tombant directement dans l'eau, et un silence que seul le bruit du moteur vient rompre par instants.",
        bodyEn: "The trip begins at the Hanseatic Bryggen wharf, colourful facades and UNESCO-listed wooden lanes. A full day cruising the Nærøyfjord, one of the country's finest fjords, follows: towering cliff walls, waterfalls dropping straight into the water, and a silence broken only occasionally by the engine.",
        bodyEs: "El viaje comienza en el muelle hanseático de Bryggen, fachadas coloridas y calles de madera declaradas por la UNESCO. Sigue después un día entero de crucero por el Nærøyfjord, uno de los fiordos más bellos del país: paredes vertiginosas, cascadas que caen directamente al agua, y un silencio que solo el motor rompe por momentos.",
      },
      {
        heading: "Lofoten, entre pêche et aurores",
        headingEn: "Lofoten, fishing and northern lights",
        headingEs: "Lofoten, entre pesca y auroras",
        body: "Un vol vers l'archipel des Lofoten mène à une ancienne cabane de pêcheur (rorbu) posée directement sur l'eau. Les jours suivants alternent entre les villages de Reine et Hamnøy, la plage de sable blanc de Kvalvika entourée de sommets abrupts, et une sortie nocturne guidée à la recherche des aurores boréales, loin de toute lumière — le point culminant d'un voyage qui traverse trois visages très différents de la Norvège.",
        bodyEn: "A flight to the Lofoten archipelago leads to a converted fisherman's cabin (rorbu) set right on the water. The following days alternate between the villages of Reine and Hamnøy, the white-sand beach of Kvalvika ringed by sheer peaks, and a guided night outing in search of the northern lights, far from any light — the high point of a trip that crosses three very different faces of Norway.",
        bodyEs: "Un vuelo al archipiélago de Lofoten lleva a una antigua cabaña de pescadores (rorbu) situada justo sobre el agua. Los días siguientes alternan entre los pueblos de Reine y Hamnøy, la playa de arena blanca de Kvalvika rodeada de picos abruptos, y una salida nocturna guiada en busca de auroras boreales, lejos de toda luz — el punto culminante de un viaje que atraviesa tres caras muy distintas de Noruega.",
      },
    ],
    hotels: [
      {
        name: "Bryggen Hanseatic Rooms",
        nameEn: "Bryggen Hanseatic Rooms",
        nameEs: "Bryggen Hanseatic Rooms",
        description: "Des chambres aménagées dans une maison de bois du quai de Bryggen, poutres apparentes et vue sur le port depuis certaines fenêtres.",
        descriptionEn: "Rooms fitted into a wooden house on the Bryggen wharf, exposed beams and harbour views from select windows.",
        descriptionEs: "Habitaciones instaladas en una casa de madera del muelle de Bryggen, vigas vistas y vistas al puerto desde algunas ventanas.",
        image: `${R2}/trips/norvege-hotel-bergen.jpg`,
      },
      {
        name: "Reine Rorbu Cabins",
        nameEn: "Reine Rorbu Cabins",
        nameEs: "Reine Rorbu Cabins",
        description: "D'anciennes cabanes de pêcheur rénovées, posées sur pilotis au bord de l'eau à Reine, poêle à bois et vue directe sur les sommets des Lofoten.",
        descriptionEn: "Renovated old fisherman's cabins on stilts right at the water's edge in Reine, a wood-burning stove and direct views of the Lofoten peaks.",
        descriptionEs: "Antiguas cabañas de pescadores renovadas, sobre pilotes junto al agua en Reine, estufa de leña y vistas directas a los picos de Lofoten.",
        image: `${R2}/trips/norvege-hotel-lofoten.jpg`,
      },
    ],
  },
  {
    destinationSlug: "turquie",
    tour: {
      name: "Turquie : Istanbul et la Cappadoce",
      nameEn: "Turkey: Istanbul & Cappadocia",
      nameEs: "Turquía: Estambul y Capadocia",
      slug: "turquie-istanbul-cappadoce",
      image: `${R2}/destinations/turquie-hero.jpg`,
      images: `${R2}/trips/turquie-gallery-1.jpg,${R2}/trips/turquie-gallery-2.jpg,${R2}/trips/turquie-gallery-3.jpg,${R2}/trips/turquie-gallery-4.jpg,${R2}/trips/turquie-gallery-5.jpg,${R2}/trips/turquie-gallery-6.jpg`,
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | Sept a oct",
      tagline: "D'un bazar millénaire à un vol en montgolfière au lever du jour",
      taglineEn: "From a centuries-old bazaar to a sunrise balloon flight",
      taglineEs: "De un bazar milenario a un vuelo en globo al amanecer",
      description:
        "Istanbul pour Sainte-Sophie, le Grand Bazar et le détroit du Bosphore à cheval sur deux continents, puis la Cappadoce pour ses cheminées de fée et ses montgolfières au lever du soleil.",
      descriptionEn:
        "Istanbul for Hagia Sophia, the Grand Bazaar and the Bosphorus straddling two continents, then Cappadocia for its fairy chimneys and sunrise hot-air balloons.",
      descriptionEs:
        "Estambul por Santa Sofía, el Gran Bazar y el Bósforo a caballo entre dos continentes, y después Capadocia por sus chimeneas de hadas y sus globos al amanecer.",
      price: 5000,
      originalPrice: 0,
      currency: "EUR",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      category: "multi-day",
      theme: "culture",
      travelerTypes: "couples,groups,family",
      maxGuests: 6,
      featured: true,
      order: 15,
    },
    days: [
      { dayNumber: 1, location: "Istanbul", locationEn: "Istanbul", locationEs: "Estambul", title: "Arrivée et Sainte-Sophie", titleEn: "Arrival and Hagia Sophia", titleEs: "Llegada y Santa Sofía", description: "Arrivée à Istanbul, installation, visite de Sainte-Sophie en fin d'après-midi avant un dîner face à la Mosquée bleue.", descriptionEn: "Arrival in Istanbul, check-in, a late-afternoon visit to Hagia Sophia before dinner facing the Blue Mosque.", descriptionEs: "Llegada a Estambul, alojamiento y visita a Santa Sofía a última hora de la tarde antes de cenar frente a la Mezquita Azul." },
      { dayNumber: 2, location: "Istanbul", locationEn: "Istanbul", locationEs: "Estambul", title: "Grand Bazar et croisière sur le Bosphore", titleEn: "The Grand Bazaar and a Bosphorus cruise", titleEs: "Gran Bazar y crucero por el Bósforo", description: "Matinée dans les allées couvertes du Grand Bazar, croisière l'après-midi sur le Bosphore entre les rives européenne et asiatique.", descriptionEn: "A morning in the covered lanes of the Grand Bazaar, an afternoon cruise on the Bosphorus between the European and Asian shores.", descriptionEs: "Mañana en los pasillos cubiertos del Gran Bazar, crucero por la tarde por el Bósforo entre las orillas europea y asiática." },
      { dayNumber: 3, location: "Cappadoce", locationEn: "Cappadocia", locationEs: "Capadocia", title: "Vol vers la Cappadoce", titleEn: "Flight to Cappadocia", titleEs: "Vuelo a Capadocia", description: "Vol vers la Cappadoce, installation dans une maison-grotte troglodyte, coucher de soleil sur la vallée de Göreme.", descriptionEn: "Flight to Cappadocia, check-in at a cave-house hotel, sunset over the Göreme valley.", descriptionEs: "Vuelo a Capadocia, alojamiento en una casa-cueva, atardecer sobre el valle de Göreme." },
      { dayNumber: 4, location: "Cappadoce", locationEn: "Cappadocia", locationEs: "Capadocia", title: "Montgolfière au lever du jour", titleEn: "Sunrise balloon flight", titleEs: "Globo al amanecer", description: "Vol en montgolfière au lever du soleil au-dessus des cheminées de fée, puis visite l'après-midi d'une cité souterraine creusée dans le tuf.", descriptionEn: "A sunrise hot-air balloon flight over the fairy chimneys, then an afternoon visit to an underground city carved from the tuff.", descriptionEs: "Vuelo en globo al amanecer sobre las chimeneas de hadas, y por la tarde visita a una ciudad subterránea excavada en la toba." },
      { dayNumber: 5, location: "Cappadoce", locationEn: "Cappadocia", locationEs: "Capadocia", title: "Randonnée dans la vallée Rose", titleEn: "Hiking the Rose Valley", titleEs: "Caminata por el Valle Rosa", description: "Randonnée guidée dans la vallée Rose, entre formations rocheuses sculptées par l'érosion et anciennes chapelles byzantines.", descriptionEn: "A guided hike through the Rose Valley, among rock formations sculpted by erosion and old Byzantine chapels.", descriptionEs: "Caminata guiada por el Valle Rosa, entre formaciones rocosas esculpidas por la erosión y antiguas capillas bizantinas." },
      { dayNumber: 6, location: "Cappadoce", locationEn: "Cappadocia", locationEs: "Capadocia", title: "Dernière matinée et départ", titleEn: "Last morning and departure", titleEs: "Última mañana y salida", description: "Matinée libre dans le village de Göreme avant le transfert vers l'aéroport.", descriptionEn: "A free morning in Göreme village before the airport transfer.", descriptionEs: "Mañana libre en el pueblo de Göreme antes del traslado al aeropuerto." },
    ],
    sections: [
      {
        heading: "Istanbul, à cheval sur deux continents",
        headingEn: "Istanbul, straddling two continents",
        headingEs: "Estambul, a caballo entre dos continentes",
        body: "Le voyage commence face à Sainte-Sophie, visitée en fin d'après-midi avant un dîner face à la Mosquée bleue. Le lendemain, les allées couvertes du Grand Bazar occupent la matinée, avant une croisière sur le Bosphore qui traverse, en une seule sortie en bateau, l'Europe et l'Asie — un rappel constant de la position unique de la ville.",
        bodyEn: "The trip begins facing Hagia Sophia, visited in the late afternoon before dinner facing the Blue Mosque. The next day, the covered lanes of the Grand Bazaar fill the morning, before a Bosphorus cruise that crosses, in a single boat trip, Europe and Asia — a constant reminder of the city's unique position.",
        bodyEs: "El viaje comienza frente a Santa Sofía, visitada a última hora de la tarde antes de cenar frente a la Mezquita Azul. Al día siguiente, los pasillos cubiertos del Gran Bazar ocupan la mañana, antes de un crucero por el Bósforo que atraviesa, en una sola salida en barco, Europa y Asia — un recordatorio constante de la posición única de la ciudad.",
      },
      {
        heading: "Cappadoce, cheminées de fée et montgolfières",
        headingEn: "Cappadocia, fairy chimneys and hot-air balloons",
        headingEs: "Capadocia, chimeneas de hadas y globos",
        body: "Un vol vers la Cappadoce change complètement de décor : installation dans une maison-grotte troglodyte, coucher de soleil sur la vallée de Göreme. Le point d'orgue du voyage arrive dès le lendemain matin, avec un vol en montgolfière au lever du soleil au-dessus des cheminées de fée, suivi d'une randonnée guidée dans la vallée Rose, entre formations rocheuses sculptées et anciennes chapelles byzantines.",
        bodyEn: "A flight to Cappadocia changes the scenery entirely: check-in at a cave-house hotel, sunset over the Göreme valley. The trip's high point comes the very next morning, with a sunrise hot-air balloon flight over the fairy chimneys, followed by a guided hike through the Rose Valley, among sculpted rock formations and old Byzantine chapels.",
        bodyEs: "Un vuelo a Capadocia cambia por completo el escenario: alojamiento en una casa-cueva, atardecer sobre el valle de Göreme. El punto culminante del viaje llega ya a la mañana siguiente, con un vuelo en globo al amanecer sobre las chimeneas de hadas, seguido de una caminata guiada por el Valle Rosa, entre formaciones rocosas esculpidas y antiguas capillas bizantinas.",
      },
    ],
    hotels: [
      {
        name: "Sultanahmet Palace Rooms",
        nameEn: "Sultanahmet Palace Rooms",
        nameEs: "Sultanahmet Palace Rooms",
        description: "Une maison ottomane restaurée à deux pas de Sainte-Sophie, chambres aux tapis anciens, terrasse sur le toit avec vue sur les minarets au coucher du soleil.",
        descriptionEn: "A restored Ottoman house steps from Hagia Sophia, rooms with antique carpets, a rooftop terrace with minaret views at sunset.",
        descriptionEs: "Una casa otomana restaurada a pasos de Santa Sofía, habitaciones con alfombras antiguas, terraza en la azotea con vistas a los minaretes al atardecer.",
        image: `${R2}/trips/turquie-hotel-istanbul.jpg`,
      },
      {
        name: "Göreme Cave Suites",
        nameEn: "Göreme Cave Suites",
        nameEs: "Göreme Cave Suites",
        description: "Des suites creusées dans la roche volcanique de Göreme, terrasse commune idéale pour observer les montgolfières au lever du soleil.",
        descriptionEn: "Suites carved into Göreme's volcanic rock, a shared terrace ideal for watching the hot-air balloons at sunrise.",
        descriptionEs: "Suites excavadas en la roca volcánica de Göreme, terraza común ideal para observar los globos al amanecer.",
        image: `${R2}/trips/turquie-hotel-cappadoce.jpg`,
      },
    ],
  },
];

// ── "Journey into X" trips (format: "journey") — chaptered by location, with a per-chapter photo
// gallery and an illustrated route map, matching the reference page design. Original content,
// not copied from any reference site. First example: Greece. ──
const journeyTrips: Array<{
  destinationSlug: string;
  tour: Record<string, unknown>;
  chapters: Array<{
    title: string;
    titleEn: string;
    titleEs: string;
    intro: string;
    introEn: string;
    introEs: string;
    galleryImages: string;
    mapMarkerX: number;
    mapMarkerY: number;
    days: Array<{
      dayNumber: number;
      title: string;
      titleEn: string;
      titleEs: string;
      description: string;
      descriptionEn: string;
      descriptionEs: string;
      image: string;
      images: string;
    }>;
  }>;
}> = [
  {
    destinationSlug: "grece",
    tour: {
      name: "Voyage en Grèce : Athènes, Sifnos, Paros et Santorin",
      nameEn: "A Journey into Greece: Athens, Sifnos, Paros & Santorini",
      nameEs: "Un viaje a Grecia: Atenas, Sifnos, Paros y Santorini",
      slug: "voyage-en-grece-athenes-sifnos-paros-santorin",
      tagline: "D'Athènes aux îles, un voyage en quatre escales",
      taglineEn: "From Athens to the islands, a journey in four stops",
      taglineEs: "De Atenas a las islas, un viaje en cuatro escalas",
      description:
        "Une traversée en quatre temps à travers la Grèce — l'Acropole d'Athènes au lever du jour, les ruelles blanchies à la chaux de Sifnos, les moulins de Paros face à la mer Égée, et la caldeira de Santorin qui referme le voyage en beauté.",
      descriptionEn:
        "A journey through Greece in four movements — the Acropolis at sunrise, Sifnos' whitewashed lanes, Paros' windmills facing the Aegean, and Santorini's caldera to close the trip in style.",
      descriptionEs:
        "Un recorrido por Grecia en cuatro tiempos — la Acrópolis al amanecer, las callejuelas encaladas de Sifnos, los molinos de Paros frente al mar Egeo, y la caldera de Santorini para cerrar el viaje por todo lo alto.",
      price: 7400,
      originalPrice: 0,
      currency: "EUR",
      duration: "8 nuits",
      durationEn: "8 nights",
      durationEs: "8 noches",
      whenLabel: "Mai à juin | Sept à oct",
      whenLabelEn: "May to June | Sept to Oct",
      whenLabelEs: "Mayo a junio | Sept a oct",
      category: "multi-day",
      theme: "culture",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 4,
      image: `${R2}/journeys/grece-hero.jpg`,
      format: "journey",
      mapImage: `${R2}/journeys/grece-map.svg`,
      featured: true,
      order: 0,
    },
    chapters: [
      {
        title: "Athènes",
        titleEn: "Athens",
        titleEs: "Atenas",
        intro:
          "Avant les îles, la capitale — deux mille cinq cents ans d'histoire condensés entre l'Acropole, les ruelles de Plaka et les tavernes qui ne désemplissent jamais après le coucher du soleil.",
        introEn:
          "Before the islands, the capital — two and a half thousand years of history packed between the Acropolis, the lanes of Plaka, and the taverns that never empty out after sunset.",
        introEs:
          "Antes de las islas, la capital — dos mil quinientos años de historia condensados entre la Acrópolis, las calles de Plaka y las tabernas que nunca se vacían después del atardecer.",
        galleryImages: `${R2}/journeys/grece-athens-gallery1.jpg,${R2}/journeys/grece-athens-gallery2.jpg,${R2}/journeys/grece-athens-gallery3.jpg,${R2}/journeys/grece-athens-gallery4.jpg,${R2}/journeys/grece-athens-gallery5.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 13,
        days: [
          {
            dayNumber: 1,
            title: "Arrivée et l'Acropole au lever du jour",
            titleEn: "Arrival and the Acropolis at dawn",
            titleEs: "Llegada y la Acrópolis al amanecer",
            description:
              "Arrivée à Athènes en fin de matinée, installation dans un boutique-hôtel néoclassique à deux pas de Plaka, au pied même de l'Acropole. Après avoir posé les valises, une première marche dans les ruelles pavées du plus vieux quartier de la ville — passages voûtés, terrasses fleuries, tavernes encore fermées qui embaument déjà le café grec. Le lendemain matin, réveil avant l'aube pour grimper jusqu'à l'Acropole dès l'ouverture des portes : le Parthénon presque pour vous seuls, la pierre encore fraîche de la nuit, la ville entière qui s'étire en contrebas avant que la chaleur et les cars de tourisme ne s'installent.",
            descriptionEn:
              "Arrival in Athens by late morning, check-in at a neoclassical boutique hotel a stone's throw from Plaka, at the very foot of the Acropolis. Bags dropped, a first walk through the cobbled lanes of the city's oldest quarter — vaulted passageways, flower-draped terraces, tavernas still shuttered but already scenting the air with Greek coffee. The next morning, waking before dawn to climb up to the Acropolis right as the gates open: the Parthenon almost to yourselves, the stone still cool from the night, the whole city stretching out below before the heat and the tour buses arrive.",
            descriptionEs:
              "Llegada a Atenas a última hora de la mañana, alojamiento en un hotel boutique neoclásico a pocos pasos de Plaka, a los pies mismos de la Acrópolis. Tras dejar el equipaje, un primer paseo por las calles adoquinadas del barrio más antiguo de la ciudad — pasajes abovedados, terrazas floridas, tabernas todavía cerradas que ya perfuman el aire de café griego. A la mañana siguiente, despertar antes del amanecer para subir a la Acrópolis justo cuando abren las puertas: el Partenón casi solo para ustedes, la piedra aún fresca de la noche, toda la ciudad extendiéndose abajo antes de que lleguen el calor y los autobuses turísticos.",
            image: `${R2}/journeys/grece-athens-day1.jpg`,
            images: `${R2}/journeys/grece-athens-day1-b.jpg,${R2}/journeys/grece-athens-day1-c.jpg`,
          },
          {
            dayNumber: 2,
            title: "Plaka et le marché du soir",
            titleEn: "Plaka and the evening market",
            titleEs: "Plaka y el mercado nocturno",
            description:
              "Une journée à flâner sans itinéraire fixe dans les ruelles néoclassiques de Plaka, entre boutiques d'artisans, cours intérieures cachées et petites églises byzantines coincées entre deux immeubles. Halte au musée de l'Acropole, où les frises et statues originales du Parthénon racontent, salle après salle, l'histoire de la colline sacrée. En fin de journée, direction le quartier animé de Monastiraki pour son marché du soir : étals de bijoux artisanaux, échoppes de cuir, et surtout les meilleures adresses de souvlaki de la ville, à déguster debout, verre d'ouzo local à la main, dans le brouhaha joyeux des habitants qui rentrent du travail.",
            descriptionEn:
              "A day of wandering without a fixed plan through Plaka's neoclassical lanes, between artisan boutiques, hidden inner courtyards, and tiny Byzantine churches wedged between apartment blocks. A stop at the Acropolis Museum, where the Parthenon's original friezes and statues tell the story of the sacred hill, room by room. As evening falls, on to the lively quarter of Monastiraki for its night market: stalls of handmade jewellery, leather workshops, and above all the city's best souvlaki spots, eaten standing up with a glass of local ouzo in hand, amid the cheerful buzz of Athenians heading home from work.",
            descriptionEs:
              "Un día de paseo sin rumbo fijo por las calles neoclásicas de Plaka, entre boutiques de artesanos, patios interiores escondidos y pequeñas iglesias bizantinas encajadas entre edificios. Parada en el Museo de la Acrópolis, donde los frisos y estatuas originales del Partenón cuentan, sala tras sala, la historia de la colina sagrada. Al caer la tarde, rumbo al animado barrio de Monastiraki para su mercado nocturno: puestos de joyería artesanal, talleres de cuero y, sobre todo, los mejores souvlaki de la ciudad, degustados de pie con una copa de ouzo local en la mano, entre el bullicio alegre de los atenienses que vuelven del trabajo.",
            image: `${R2}/journeys/grece-athens-day2.jpg`,
            images: `${R2}/journeys/grece-athens-day2-b.jpg,${R2}/journeys/grece-athens-day2-c.jpg`,
          },
        ],
      },
      {
        title: "Sifnos",
        titleEn: "Sifnos",
        titleEs: "Sifnos",
        intro:
          "Moins connue que ses voisines, Sifnos garde un rythme de vie authentique — villages blancs accrochés aux collines, ateliers de potiers ouverts depuis des générations, et une gastronomie parmi les plus réputées des Cyclades.",
        introEn:
          "Less known than its neighbours, Sifnos keeps an authentic pace of life — white villages clinging to the hills, pottery workshops open for generations, and some of the Cyclades' most celebrated food.",
        introEs:
          "Menos conocida que sus vecinas, Sifnos conserva un ritmo de vida auténtico — pueblos blancos aferrados a las colinas, talleres de alfarería abiertos desde hace generaciones, y una de las gastronomías más reconocidas de las Cícladas.",
        galleryImages: `${R2}/journeys/grece-sifnos-gallery1.jpg,${R2}/journeys/grece-sifnos-gallery2.jpg,${R2}/journeys/grece-sifnos-gallery3.jpg,${R2}/journeys/grece-sifnos-gallery4.jpg,${R2}/journeys/grece-sifnos-gallery5.jpg`,
        mapMarkerX: 44,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 3,
            title: "Ferry vers Sifnos et le village de Kastro",
            titleEn: "Ferry to Sifnos and Kastro village",
            titleEs: "Ferry a Sifnos y el pueblo de Kastro",
            description:
              "Ferry matinal depuis le port du Pirée, à travers les Cyclades encore endormies — un trajet en lui-même déjà mémorable, entre îlots rocheux et mer d'un bleu de plus en plus intense. Arrivée à Sifnos en début d'après-midi, installation dans un hôtel de charme dominant le port. Le reste de la journée se passe à explorer à pied le village médiéval de Kastro, perché sur un promontoire rocheux : maisons blanches construites à même les remparts byzantins, ruelles si étroites qu'on peut toucher les deux façades en même temps, et une vue imprenable sur la mer Égée depuis les terrasses de l'ancienne acropole.",
            descriptionEn:
              "A morning ferry from the port of Piraeus, weaving through the still-sleepy Cyclades — a journey that's memorable in its own right, past rocky islets and a sea that turns a deeper blue with every mile. Arrival in Sifnos by early afternoon, check-in at a charming hotel overlooking the harbour. The rest of the day is spent exploring the medieval village of Kastro on foot, perched on a rocky headland: whitewashed houses built directly into the Byzantine ramparts, lanes so narrow you can touch both façades at once, and unbeatable views over the Aegean from the terraces of the old acropolis.",
            descriptionEs:
              "Ferry matinal desde el puerto de El Pireo, serpenteando entre las Cícladas todavía dormidas — un trayecto ya de por sí memorable, entre islotes rocosos y un mar cuyo azul se intensifica con cada milla. Llegada a Sifnos a primera hora de la tarde, alojamiento en un hotel con encanto que domina el puerto. El resto del día se dedica a explorar a pie el pueblo medieval de Kastro, encaramado en un promontorio rocoso: casas blancas construidas directamente sobre las murallas bizantinas, callejuelas tan estrechas que se pueden tocar ambas fachadas a la vez, y vistas inmejorables del Egeo desde las terrazas de la antigua acrópolis.",
            image: `${R2}/journeys/grece-sifnos-day1.jpg`,
            images: `${R2}/journeys/grece-sifnos-day1-b.jpg,${R2}/journeys/grece-sifnos-day1-c.jpg`,
          },
          {
            dayNumber: 4,
            title: "Ateliers de potiers et plages tranquilles",
            titleEn: "Pottery workshops and quiet beaches",
            titleEs: "Talleres de alfarería y playas tranquilas",
            description:
              "Matinée chez un potier de troisième génération, dans un atelier familial où la terre cuite de Sifnos — réputée depuis l'Antiquité pour la qualité de son argile — prend forme sous les yeux des visiteurs. Démonstration au tour, explication des techniques de cuisson traditionnelles, et l'occasion de repartir avec une pièce unique. L'après-midi bascule vers un tout autre rythme : direction les plages de sable de Platys Gialos, où l'eau turquoise reste peu profonde sur plusieurs dizaines de mètres — idéal pour un bain paresseux — avant un déjeuner de poisson grillé les pieds dans le sable, dans l'une des tavernes familiales qui bordent la baie.",
            descriptionEn:
              "A morning with a third-generation potter, in a family workshop where Sifnos clay — prized since antiquity for its quality — takes shape right in front of visitors. A demonstration at the wheel, an explanation of traditional firing techniques, and the chance to take home a one-of-a-kind piece. The afternoon shifts to an entirely different pace: on to the sandy beaches of Platys Gialos, where the turquoise water stays shallow for dozens of metres — perfect for a lazy swim — before a grilled fish lunch with your feet in the sand, at one of the family-run tavernas lining the bay.",
            descriptionEs:
              "Mañana con un alfarero de tercera generación, en un taller familiar donde la arcilla de Sifnos — apreciada desde la Antigüedad por su calidad — toma forma ante los visitantes. Demostración en el torno, explicación de las técnicas tradicionales de cocción, y la oportunidad de llevarse una pieza única. La tarde cambia por completo de ritmo: rumbo a las playas de arena de Platys Gialos, donde el agua turquesa se mantiene poco profunda durante decenas de metros — perfecta para un baño relajado — antes de un almuerzo de pescado a la parrilla con los pies en la arena, en una de las tabernas familiares que bordean la bahía.",
            image: `${R2}/journeys/grece-sifnos-day2.jpg`,
            images: `${R2}/journeys/grece-sifnos-day2-b.jpg,${R2}/journeys/grece-sifnos-day2-c.jpg`,
          },
        ],
      },
      {
        title: "Paros",
        titleEn: "Paros",
        titleEs: "Paros",
        intro:
          "Paros allie deux visages : Naoussa, port de pêcheurs devenu l'un des plus élégants des Cyclades, et l'arrière-pays, où les carrières de marbre ont fourni la pierre de statues antiques célèbres dans le monde entier.",
        introEn:
          "Paros holds two faces: Naoussa, a fishing port turned into one of the Cyclades' most stylish, and the inland countryside, where marble quarries once supplied the stone for famous ancient statues.",
        introEs:
          "Paros tiene dos caras: Naoussa, un puerto de pescadores convertido en uno de los más elegantes de las Cícladas, y el interior, donde las canteras de mármol suministraron la piedra de estatuas antiguas célebres en todo el mundo.",
        galleryImages: `${R2}/journeys/grece-paros-gallery1.jpg,${R2}/journeys/grece-paros-gallery2.jpg,${R2}/journeys/grece-paros-gallery3.jpg,${R2}/journeys/grece-paros-gallery4.jpg,${R2}/journeys/grece-paros-gallery5.jpg`,
        mapMarkerX: 68,
        mapMarkerY: 57,
        days: [
          {
            dayNumber: 5,
            title: "Ferry vers Paros et le port de Naoussa",
            titleEn: "Ferry to Paros and Naoussa harbour",
            titleEs: "Ferry a Paros y el puerto de Naoussa",
            description:
              "Ferry en milieu de journée vers Paros, île réputée pour son marbre blanc et son port de pêcheurs devenu l'un des plus élégants des Cyclades. Installation dans un hôtel les pieds dans l'eau, à quelques mètres du port de Naoussa. Le reste de l'après-midi se passe à flâner entre les maisons cubiques blanchies à la chaux, les boutiques de créateurs et les bars à cocktails discrets nichés dans d'anciennes maisons de pêcheurs. Le dîner se prend directement sur le quai, poisson tout juste débarqué grillé sur place, au milieu des barques multicolores qui se balancent doucement à quelques mètres de la table.",
            descriptionEn:
              "A midday ferry to Paros, an island famed for its white marble and for a fishing port that's become one of the most stylish in the Cyclades. Check-in at a waterfront hotel just steps from Naoussa harbour. The rest of the afternoon is spent wandering among the whitewashed cube houses, designer boutiques, and quiet cocktail bars tucked into former fishermen's cottages. Dinner is taken right on the quay, fish landed that same day grilled on the spot, among the colourful boats gently rocking just metres from the table.",
            descriptionEs:
              "Ferry a mediodía hacia Paros, una isla famosa por su mármol blanco y por un puerto de pescadores convertido en uno de los más elegantes de las Cícladas. Alojamiento en un hotel frente al mar, a pocos pasos del puerto de Naoussa. El resto de la tarde se dedica a pasear entre las casas cúbicas encaladas, las boutiques de diseñadores y los tranquilos bares de cócteles instalados en antiguas casas de pescadores. La cena se toma justo en el muelle, con pescado desembarcado ese mismo día y asado al momento, entre las coloridas barcas que se mecen suavemente a pocos metros de la mesa.",
            image: `${R2}/journeys/grece-paros-day1.jpg`,
            images: `${R2}/journeys/grece-paros-day1-b.jpg,${R2}/journeys/grece-paros-day1-c.jpg`,
          },
          {
            dayNumber: 6,
            title: "Les moulins et l'arrière-pays marbrier",
            titleEn: "The windmills and the marble country",
            titleEs: "Los molinos y el país del mármol",
            description:
              "Balade matinale jusqu'aux moulins à vent qui dominent le port de Naoussa, vestiges d'une époque où l'île vivait du blé et du vent. L'après-midi prend une tournure plus historique avec une excursion vers les anciennes carrières de marbre de Marathi, exploitées depuis l'Antiquité — c'est de cette pierre blanche et translucide que sont taillées certaines des statues les plus célèbres du monde, dont la Vénus de Milo. Un guide local raconte l'histoire des galeries souterraines, aujourd'hui abandonnées mais encore visibles, avant un dernier verre de vin local dans un domaine familial niché dans les collines de l'arrière-pays.",
            descriptionEn:
              "A morning walk up to the windmills overlooking Naoussa harbour, remnants of an era when the island lived off wheat and wind. The afternoon turns more historical with a trip to the old marble quarries of Marathi, worked since antiquity — it's this translucent white stone that some of the world's most famous statues, including the Venus de Milo, were carved from. A local guide tells the story of the underground galleries, abandoned today but still visible, before a last glass of local wine at a family-run estate tucked into the inland hills.",
            descriptionEs:
              "Paseo matinal hasta los molinos que dominan el puerto de Naoussa, vestigios de una época en que la isla vivía del trigo y del viento. La tarde toma un rumbo más histórico con una excursión a las antiguas canteras de mármol de Marathi, explotadas desde la Antigüedad — de esta piedra blanca y translúcida se tallaron algunas de las estatuas más famosas del mundo, entre ellas la Venus de Milo. Un guía local cuenta la historia de las galerías subterráneas, hoy abandonadas pero todavía visibles, antes de una última copa de vino local en una bodega familiar escondida en las colinas del interior.",
            image: `${R2}/journeys/grece-paros-day2.jpg`,
            images: `${R2}/journeys/grece-paros-day2-b.jpg,${R2}/journeys/grece-paros-day2-c.jpg`,
          },
        ],
      },
      {
        title: "Santorin",
        titleEn: "Santorini",
        titleEs: "Santorini",
        intro:
          "Le point culminant du voyage — une caldeira née d'une éruption volcanique il y a plus de trois mille ans, bordée de villages blancs et bleus suspendus au-dessus d'une mer d'un bleu presque irréel.",
        introEn:
          "The trip's high point — a caldera born from a volcanic eruption over three thousand years ago, lined with white and blue villages suspended above a sea of near-unreal blue.",
        introEs:
          "El punto culminante del viaje — una caldera nacida de una erupción volcánica hace más de tres mil años, bordeada de pueblos blancos y azules suspendidos sobre un mar de un azul casi irreal.",
        galleryImages: `${R2}/journeys/grece-santorini-gallery1.jpg,${R2}/journeys/grece-santorini-gallery2.jpg,${R2}/journeys/grece-santorini-gallery3.jpg,${R2}/journeys/grece-santorini-gallery4.jpg,${R2}/journeys/grece-santorini-gallery5.jpg`,
        mapMarkerX: 78,
        mapMarkerY: 79,
        days: [
          {
            dayNumber: 7,
            title: "Vol vers Santorin et coucher de soleil à Oia",
            titleEn: "Flight to Santorini and sunset in Oia",
            titleEs: "Vuelo a Santorini y atardecer en Oia",
            description:
              "Vol court vers Santorin, l'île la plus photographiée de Grèce, née d'une éruption volcanique qui a soufflé la moitié de son cratère il y a plus de trois mille ans. Installation à Oia, le village le plus au nord de l'île, réputé pour ses maisons troglodytes bleues et blanches accrochées à flanc de caldeira. Après-midi libre pour explorer les ruelles pavées, avant de rejoindre en fin de journée l'une des terrasses les plus recherchées du village pour assister au coucher de soleil le plus célèbre des Cyclades — le ciel qui s'embrase d'orange et de rose au-dessus du volcan encore actif, au centre de la baie.",
            descriptionEn:
              "A short flight to Santorini, Greece's most photographed island, born from a volcanic eruption that blew away half its crater over three thousand years ago. Check-in in Oia, the island's northernmost village, famed for its blue-and-white cave houses clinging to the caldera's cliffs. A free afternoon to explore the cobbled lanes, before heading to one of the village's most sought-after terraces at day's end to watch the Cyclades' most famous sunset — the sky catching fire in orange and pink above the still-active volcano at the centre of the bay.",
            descriptionEs:
              "Vuelo corto a Santorini, la isla más fotografiada de Grecia, nacida de una erupción volcánica que hizo volar la mitad de su cráter hace más de tres mil años. Alojamiento en Oia, el pueblo más septentrional de la isla, famoso por sus casas cueva azules y blancas aferradas a los acantilados de la caldera. Tarde libre para explorar las calles adoquinadas, antes de dirigirse al final del día a una de las terrazas más buscadas del pueblo para presenciar el atardecer más famoso de las Cícladas — el cielo incendiándose de naranja y rosa sobre el volcán todavía activo, en el centro de la bahía.",
            image: `${R2}/journeys/grece-santorini-day1.jpg`,
            images: `${R2}/journeys/grece-santorini-day1-b.jpg,${R2}/journeys/grece-santorini-day1-c.jpg`,
          },
          {
            dayNumber: 8,
            title: "Randonnée sur la caldeira",
            titleEn: "Hiking the caldera rim",
            titleEs: "Caminata por el borde de la caldera",
            description:
              "Randonnée guidée le long du rebord de la caldeira, de Fira jusqu'à Oia — environ trois heures de marche parmi les plus spectaculaires de Grèce, entre sentiers de pierre volcanique noire et vues plongeantes sur le cratère englouti. Le chemin traverse le village troglodyte d'Imerovigli, surnommé le « balcon de la mer Égée » pour ses vues à couper le souffle, avant de redescendre vers de petites chapelles blanches isolées, seules au milieu du paysage lunaire. Déjeuner en cours de route dans une taverne perchée, assiette de fava locale et tomates séchées au soleil, face au volcan qui fume encore doucement au centre de la baie.",
            descriptionEn:
              "A guided hike along the caldera rim, from Fira to Oia — roughly three hours through some of Greece's most spectacular scenery, on paths of black volcanic rock with sweeping views down into the sunken crater. The route passes through the cave village of Imerovigli, nicknamed the \"balcony to the Aegean\" for its breathtaking views, before descending toward small whitewashed chapels standing alone amid the lunar landscape. Lunch along the way at a clifftop taverna, a plate of local fava and sun-dried tomatoes, facing the volcano still gently smoking at the centre of the bay.",
            descriptionEs:
              "Caminata guiada por el borde de la caldera, de Fira a Oia — unas tres horas por uno de los paisajes más espectaculares de Grecia, entre senderos de roca volcánica negra y vistas que se hunden en el cráter sumergido. El camino atraviesa el pueblo cueva de Imerovigli, apodado el «balcón del Egeo» por sus vistas impresionantes, antes de descender hacia pequeñas capillas blancas aisladas en medio del paisaje lunar. Almuerzo en el camino en una taberna encaramada, con un plato de fava local y tomates secados al sol, frente al volcán que todavía humea suavemente en el centro de la bahía.",
            image: `${R2}/journeys/grece-santorini-day2.jpg`,
            images: `${R2}/journeys/grece-santorini-day2-b.jpg,${R2}/journeys/grece-santorini-day2-c.jpg`,
          },
          {
            dayNumber: 9,
            title: "Plage de sable noir et départ",
            titleEn: "Black sand beach and departure",
            titleEs: "Playa de arena negra y salida",
            description:
              "Dernière matinée consacrée à la plage de sable noir de Perissa, au pied de l'ancien volcan de Mesa Vouno — un contraste saisissant avec les plages blanches habituelles des Cyclades, et une eau qui reste étonnamment chaude grâce à l'activité volcanique résiduelle. Un dernier café en terrasse face à la mer, le temps de faire le point sur un voyage qui aura traversé quatre îles, mille ans d'histoire et autant de nuances de bleu, avant le transfert vers l'aéroport pour le vol retour.",
            descriptionEn:
              "A final morning at the black sand beach of Perissa, at the foot of the old Mesa Vouno volcano — a striking contrast to the Cyclades' usual white beaches, and water that stays surprisingly warm thanks to residual volcanic activity. One last coffee on a terrace facing the sea, time enough to look back on a trip that crossed four islands, a thousand years of history, and just as many shades of blue, before the transfer to the airport for the flight home.",
            descriptionEs:
              "Última mañana en la playa de arena negra de Perissa, al pie del antiguo volcán de Mesa Vouno — un contraste sorprendente con las habituales playas blancas de las Cícladas, y un agua que se mantiene sorprendentemente cálida gracias a la actividad volcánica residual. Un último café en una terraza frente al mar, tiempo suficiente para repasar un viaje que atravesó cuatro islas, mil años de historia y otras tantas tonalidades de azul, antes del traslado al aeropuerto para el vuelo de regreso.",
            image: `${R2}/journeys/grece-santorini-day3.jpg`,
            images: `${R2}/journeys/grece-santorini-day3-b.jpg,${R2}/journeys/grece-santorini-day3-c.jpg`,
          },
        ],
      },
    ],
  },
];

// ── Region pages (/destinations/[region]) — placeholder content, pending client edits via the
// future admin dashboard, same "example content" disclosure as the world trips above. ──
const regions = [
  {
    slug: "afrique",
    heroImage: `${R2}/regions/afrique.jpg`,
    heading: "Voyages sur mesure en Afrique",
    headingEn: "Tailor-Made Travel in Africa",
    headingEs: "Viajes a medida en África",
    intro:
      "De la médina de Marrakech aux plaines du Masai Mara, l'Afrique refuse de se laisser résumer. Nos voyages y suivent un seul principe : un guide qui connaît vraiment le terrain, pas un itinéraire figé.",
    introEn:
      "From the Marrakech medina to the plains of the Masai Mara, Africa refuses to be summed up. Our trips here follow one principle: a guide who actually knows the ground, not a fixed itinerary.",
    introEs:
      "De la medina de Marrakech a las llanuras del Masai Mara, África se niega a resumirse. Nuestros viajes aquí siguen un solo principio: un guía que realmente conoce el terreno, no un itinerario fijo.",
    introMore:
      "Le Maroc et ses médinas ocre, à deux pas des dunes du Sahara. Le Kenya et le grondement de la grande migration sur les plaines du Masai Mara. Deux pays, deux Afriques — et ce n'est qu'un début : chaque nouvelle destination ajoutée élargit encore la carte.",
    introMoreEn:
      "Morocco and its ochre medinas, a short drive from the Sahara's dunes. Kenya and the rumble of the great migration across the Masai Mara's plains. Two countries, two different Africas — and this is only the beginning: every new destination we add widens the map further.",
    introMoreEs:
      "Marruecos y sus medinas ocres, a un paso de las dunas del Sahara. Kenia y el estruendo de la gran migración en las llanuras del Masai Mara. Dos países, dos Áfricas distintas — y esto es solo el comienzo: cada nuevo destino que añadimos amplía aún más el mapa.",
    order: 1,
  },
  {
    slug: "asie",
    heroImage: `${R2}/regions/asie.jpg`,
    heading: "Voyages sur mesure en Asie",
    headingEn: "Tailor-Made Travel in Asia",
    headingEs: "Viajes a medida en Asia",
    intro:
      "Entre les temples de Kyoto et le vertige de Tokyo, l'Asie que nous organisons est celle du contraste assumé — le silence d'un jardin zen à quelques heures d'une ville qui ne dort jamais.",
    introEn:
      "Between Kyoto's temples and Tokyo's vertigo, the Asia we plan is one of deliberate contrast — the quiet of a Zen garden a few hours from a city that never sleeps.",
    introEs:
      "Entre los templos de Kioto y el vértigo de Tokio, la Asia que organizamos es la del contraste asumido — el silencio de un jardín zen a pocas horas de una ciudad que nunca duerme.",
    introMore:
      "Le Japon, seul représentant pour l'instant — des temples de Kyoto aux néons de Tokyo — mais la porte d'entrée d'un continent que nous continuons d'explorer, un pays à la fois.",
    introMoreEn:
      "Japan, our only country here for now — from Kyoto's temples to Tokyo's neon — but the gateway to a continent we keep exploring, one country at a time.",
    introMoreEs:
      "Japón, nuestro único país aquí por ahora — de los templos de Kioto al neón de Tokio — pero la puerta de entrada a un continente que seguimos explorando, país a país.",
    order: 2,
  },
  {
    slug: "europe",
    heroImage: `${R2}/regions/europe.jpg`,
    heading: "Voyages sur mesure en Europe",
    headingEn: "Tailor-Made Travel in Europe",
    headingEs: "Viajes a medida en Europa",
    intro:
      "Des glaciers d'Islande à la côte amalfitaine, l'Europe reste notre terrain le plus varié — un continent qu'on peut traverser toute une vie sans jamais le refaire deux fois de la même manière.",
    introEn:
      "From Iceland's glaciers to the Amalfi Coast, Europe remains our most varied ground — a continent you could spend a lifetime crossing without ever doing it the same way twice.",
    introEs:
      "De los glaciares de Islandia a la costa de Amalfi, Europa sigue siendo nuestro terreno más variado — un continente que se puede recorrer toda una vida sin hacerlo nunca dos veces de la misma manera.",
    introMore:
      "L'Islande et ses paysages volcaniques encore en formation. L'Italie et sa dolce vita, de Rome à la côte amalfitaine. Deux extrêmes du continent, une même exigence : des guides qui connaissent vraiment le terrain.",
    introMoreEn:
      "Iceland and its volcanic landscapes still taking shape. Italy and its dolce vita, from Rome to the Amalfi Coast. Two extremes of the continent, the same standard: guides who actually know the ground.",
    introMoreEs:
      "Islandia y sus paisajes volcánicos aún en formación. Italia y su dolce vita, de Roma a la costa de Amalfi. Dos extremos del continente, una misma exigencia: guías que realmente conocen el terreno.",
    order: 3,
  },
  {
    slug: "ocean-indien",
    heroImage: `${R2}/regions/ocean-indien.jpg`,
    heading: "Voyages sur mesure dans l'océan Indien",
    headingEn: "Tailor-Made Travel in the Indian Ocean",
    headingEs: "Viajes a medida en el océano Índico",
    intro:
      "Un lagon turquoise, une villa sur pilotis, et rien d'autre à décider que l'heure du prochain coucher de soleil — l'océan Indien est notre destination la plus simple, et la plus difficile à quitter.",
    introEn:
      "A turquoise lagoon, an overwater villa, and nothing left to decide but the time of the next sunset — the Indian Ocean is our simplest destination, and the hardest to leave.",
    introEs:
      "Una laguna turquesa, una villa sobre el agua, y nada más que decidir que la hora de la próxima puesta de sol — el océano Índico es nuestro destino más sencillo, y el más difícil de abandonar.",
    introMore:
      "Les Maldives, notre première escale dans la région — un archipel pensé pour ne rien faire d'autre que respirer. D'autres îles suivront, à mesure que notre carte s'étend vers l'est de l'Afrique.",
    introMoreEn:
      "The Maldives, our first stop in the region — an archipelago built for doing nothing but breathing. More islands will follow as our map extends further east of Africa.",
    introMoreEs:
      "Las Maldivas, nuestra primera escala en la región — un archipiélago pensado para no hacer nada más que respirar. Le seguirán más islas a medida que nuestro mapa se extienda hacia el este de África.",
    order: 4,
  },
] as const;

// ── ContentBlock rows ("seeAndDo" / "bestOf" / "clientLoved"), each tied to exactly one
// destinationSlug or regionSlug (resolved to a real FK at seed time). Placeholder editorial
// content, same disclosure as above. ──
type ContentBlockSeed = {
  scope: "destination" | "region";
  key: string;
  section: "seeAndDo" | "bestOf" | "clientLoved";
  title: string;
  titleEn: string;
  titleEs: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  image: string;
  ctaLabel?: string;
  ctaLabelEn?: string;
  ctaLabelEs?: string;
  ctaHref?: string;
  order: number;
};

const contentBlocks: ContentBlockSeed[] = [
  // Maroc
  { scope: "destination", key: "maroc", section: "seeAndDo", title: "La médina, tôt le matin", titleEn: "The medina, early morning", titleEs: "La medina, temprano en la mañana", description: "Avant l'agitation de midi, les ruelles de Marrakech appartiennent aux artisans et aux premiers effluves d'épices. C'est le meilleur moment pour les découvrir à pied, sans la foule, quand les commerçants ouvrent leurs échoppes une à une et que la lumière rase encore les façades ocre. On s'y perd volontiers — c'est même la meilleure façon de la comprendre.", descriptionEn: "Before the midday bustle, Marrakech's alleyways belong to the artisans and the first whiffs of spice. It's the best time to explore them on foot, crowd-free, as shopkeepers open their stalls one by one and the morning light still rakes low across the ochre facades. Getting lost here is half the point — it's honestly the best way to understand the place.", descriptionEs: "Antes del bullicio del mediodía, las callejuelas de Marrakech pertenecen a los artesanos y a los primeros aromas de especias. Es el mejor momento para recorrerlas a pie, sin aglomeraciones, mientras los comerciantes abren sus puestos uno a uno y la luz de la mañana aún roza las fachadas ocres. Perderse aquí es casi el objetivo — es, sinceramente, la mejor forma de entender el lugar.", image: `${R2}/blocks/maroc-medina.jpg`, order: 1 },
  { scope: "destination", key: "maroc", section: "seeAndDo", title: "Une nuit dans le Sahara", titleEn: "A night in the Sahara", titleEs: "Una noche en el Sahara", description: "Bivouac sous tente berbère, dîner autour du feu et un ciel sans une seule lumière artificielle à des kilomètres à la ronde. Le trajet en 4x4 ou à dos de dromadaire jusqu'au campement fait déjà partie de l'expérience, mais c'est la nuit qui reste gravée — le silence complet du désert, puis la Voie lactée qui apparaît progressivement à mesure que les yeux s'habituent à l'obscurité.", descriptionEn: "A Berber-tent bivouac, dinner around the fire, and a sky without a single artificial light for miles around. The 4x4 or camel ride out to camp is already part of the experience, but it's the night that stays with you — the desert's complete silence, then the Milky Way gradually appearing as your eyes adjust to the dark.", descriptionEs: "Vivac en jaima bereber, cena junto al fuego y un cielo sin una sola luz artificial en kilómetros a la redonda. El trayecto en todoterreno o en dromedario hasta el campamento ya forma parte de la experiencia, pero es la noche la que se queda grabada — el silencio absoluto del desierto, y luego la Vía Láctea apareciendo poco a poco a medida que los ojos se acostumbran a la oscuridad.", image: `${R2}/blocks/maroc-sahara.jpg`, order: 2 },
  { scope: "destination", key: "maroc", section: "bestOf", title: "Marrakech", titleEn: "Marrakech", titleEs: "Marrakech", description: "La ville rouge, entre souks animés et jardins secrets derrière de hauts murs d'argile.", descriptionEn: "The red city, between bustling souks and secret gardens behind tall clay walls.", descriptionEs: "La ciudad roja, entre zocos animados y jardines secretos tras altos muros de arcilla.", image: `${R2}/blocks/maroc-bestof-marrakech.jpg`, order: 1 },
  { scope: "destination", key: "maroc", section: "bestOf", title: "Le Haut Atlas", titleEn: "The High Atlas", titleEs: "El Alto Atlas", description: "Des villages berbères accrochés aux pentes, à une heure à peine de l'agitation de la ville.", descriptionEn: "Berber villages clinging to the slopes, barely an hour from the city's bustle.", descriptionEs: "Pueblos bereberes aferrados a las laderas, a poco más de una hora del bullicio de la ciudad.", image: `${R2}/blocks/maroc-bestof-atlas.jpg`, order: 2 },
  { scope: "destination", key: "maroc", section: "bestOf", title: "Essaouira", titleEn: "Essaouira", titleEs: "Essaouira", description: "Vent atlantique, remparts portugais et une médina bleu et blanc à taille humaine, à deux heures et demie de Marrakech.", descriptionEn: "Atlantic wind, Portuguese ramparts and a blue-and-white medina on a human scale, two and a half hours from Marrakech.", descriptionEs: "Viento atlántico, murallas portuguesas y una medina azul y blanca a escala humana, a dos horas y media de Marrakech.", image: `${R2}/blocks/maroc-bestof-essaouira.jpg`, order: 3 },

  // Kenya
  { scope: "destination", key: "kenya", section: "seeAndDo", title: "Le safari, au lever du jour", titleEn: "Safari at first light", titleEs: "El safari, al amanecer", description: "Les animaux sont les plus actifs dans l'heure qui suit l'aube — c'est là que partent nos game drives, pendant que la lumière est encore douce et que la chaleur n'a pas encore chassé les grands prédateurs à l'ombre. Un guide qui connaît le terrain repère les traces fraîches et sait où attendre, en silence, le bon moment.", descriptionEn: "Wildlife is most active in the hour after dawn — that's when our game drives set out, while the light is still soft and the heat hasn't yet sent the big predators into the shade. A guide who knows the ground reads fresh tracks and knows exactly where to wait, quietly, for the right moment.", descriptionEs: "Los animales están más activos en la hora posterior al amanecer, cuando salen nuestros game drives, mientras la luz aún es suave y el calor todavía no ha empujado a los grandes depredadores a la sombra. Un guía que conoce el terreno detecta huellas frescas y sabe dónde esperar, en silencio, el momento adecuado.", image: `${R2}/blocks/kenya-safari.jpg`, order: 1 },
  { scope: "destination", key: "kenya", section: "seeAndDo", title: "Rencontrer la culture Maasai", titleEn: "Meeting Maasai culture", titleEs: "Conocer la cultura maasái", description: "Une visite de village organisée avec des familles Maasai, pour comprendre une vie construite autour du bétail et des saisons. Loin d'une simple photo souvenir, l'échange se fait avec des habitants qui expliquent eux-mêmes leurs traditions, leurs chants et la place qu'occupe encore aujourd'hui l'élevage dans leur quotidien.", descriptionEn: "A village visit arranged with Maasai families, to understand a life built around cattle and the seasons. Far from a quick photo op, the exchange happens with residents who explain their own traditions, their songs, and the place cattle-herding still holds in their daily life today.", descriptionEs: "Una visita al poblado organizada con familias maasái, para entender una vida construida en torno al ganado y las estaciones. Lejos de una simple foto de recuerdo, el intercambio se hace con habitantes que explican ellos mismos sus tradiciones, sus cantos y el lugar que sigue ocupando hoy la ganadería en su día a día.", image: `${R2}/blocks/kenya-maasai.jpg`, order: 2 },
  { scope: "destination", key: "kenya", section: "bestOf", title: "Le Masai Mara", titleEn: "The Masai Mara", titleEs: "El Masai Mara", description: "Le théâtre de la grande migration, et la plus forte concentration de félins d'Afrique de l'Est.", descriptionEn: "The stage for the great migration, and East Africa's highest concentration of big cats.", descriptionEs: "El escenario de la gran migración, y la mayor concentración de felinos de África Oriental.", image: `${R2}/blocks/kenya-bestof-maasaimara.jpg`, order: 1 },
  { scope: "destination", key: "kenya", section: "bestOf", title: "Diani Beach", titleEn: "Diani Beach", titleEs: "Diani Beach", description: "Sable blanc et eaux turquoise sur la côte indienne — la suite balnéaire idéale après le safari.", descriptionEn: "White sand and turquoise water on the Indian Ocean coast — the ideal beach coda after a safari.", descriptionEs: "Arena blanca y aguas turquesas en la costa del Índico — el broche de playa ideal tras el safari.", image: `${R2}/blocks/kenya-bestof-diani.jpg`, order: 2 },

  // Japon
  { scope: "destination", key: "japon", section: "seeAndDo", title: "Kyoto, avant l'aube", titleEn: "Kyoto before dawn", titleEs: "Kioto, antes del alba", description: "Les temples les plus photographiés du pays, visités avant l'arrivée des cars de tourisme. À cette heure, le pavillon d'or se reflète dans un bassin encore immobile, et les allées de bambou de Arashiyama n'appartiennent qu'aux premiers promeneurs et au bruit du vent dans les tiges.", descriptionEn: "The country's most photographed temples, visited before the tour buses arrive. At this hour, the Golden Pavilion reflects in a still-undisturbed pond, and the Arashiyama bamboo groves belong only to the first walkers and the sound of wind through the stalks.", descriptionEs: "Los templos más fotografiados del país, visitados antes de que lleguen los autobuses turísticos. A esta hora, el Pabellón Dorado se refleja en un estanque todavía inmóvil, y los bosques de bambú de Arashiyama pertenecen solo a los primeros paseantes y al sonido del viento entre los tallos.", image: `${R2}/blocks/japon-kyoto.jpg`, order: 1 },
  { scope: "destination", key: "japon", section: "seeAndDo", title: "Tokyo, la nuit", titleEn: "Tokyo after dark", titleEs: "Tokio, de noche", description: "De Shibuya à Golden Gai, la ville change de visage à la tombée du jour. Les enseignes s'allument une à une, les izakayas se remplissent, et il suffit de suivre une ruelle au hasard pour tomber sur un bar de six places tenu par la même famille depuis trois générations.", descriptionEn: "From Shibuya to Golden Gai, the city changes face at nightfall. The signs light up one by one, the izakayas fill in, and following any random alley is enough to stumble on a six-seat bar run by the same family for three generations.", descriptionEs: "De Shibuya a Golden Gai, la ciudad cambia de rostro al caer la noche. Los letreros se encienden uno a uno, las izakayas se llenan, y basta con seguir un callejón al azar para toparse con un bar de seis plazas regentado por la misma familia desde hace tres generaciones.", image: `${R2}/blocks/japon-tokyo.jpg`, order: 2 },
  { scope: "destination", key: "japon", section: "bestOf", title: "Kyoto", titleEn: "Kyoto", titleEs: "Kioto", description: "Mille ans de capitale impériale, condensés dans ses temples, ses jardins et ses maisons de geishas.", descriptionEn: "A thousand years as imperial capital, distilled into its temples, gardens and geisha houses.", descriptionEs: "Mil años de capital imperial, condensados en sus templos, jardines y casas de geishas.", image: `${R2}/blocks/japon-bestof-kyoto.jpg`, order: 1 },
  { scope: "destination", key: "japon", section: "bestOf", title: "Le Mont Fuji", titleEn: "Mount Fuji", titleEs: "El Monte Fuji", description: "Le sommet le plus reconnaissable du pays, visible — par temps clair — depuis un train à grande vitesse.", descriptionEn: "The country's most recognisable peak, visible — on a clear day — from a bullet train.", descriptionEs: "El pico más reconocible del país, visible —en un día despejado— desde un tren bala.", image: `${R2}/blocks/japon-bestof-fuji.jpg`, order: 2 },

  // Islande
  { scope: "destination", key: "islande", section: "seeAndDo", title: "Cascades et falaises noires", titleEn: "Waterfalls and black cliffs", titleEs: "Cascadas y acantilados negros", description: "La côte sud islandaise aligne les cascades comme nulle part ailleurs — Seljalandsfoss, que l'on peut contourner par l'arrière, Skógafoss et son arc-en-ciel presque permanent par beau temps, et les rochers volcaniques de Reynisfjara qui plongent directement dans un Atlantique glacial.", descriptionEn: "Iceland's south coast lines up waterfalls like nowhere else — Seljalandsfoss, which you can walk behind, Skógafoss with its near-permanent rainbow on clear days, and the volcanic sea stacks of Reynisfjara plunging straight into a freezing Atlantic.", descriptionEs: "La costa sur de Islandia alinea cascadas como en ningún otro lugar — Seljalandsfoss, que se puede rodear por detrás, Skógafoss con su arcoíris casi permanente en días despejados, y las rocas volcánicas de Reynisfjara que caen directamente sobre un Atlántico helado.", image: `${R2}/blocks/islande-waterfall.jpg`, order: 1 },
  { scope: "destination", key: "islande", section: "seeAndDo", title: "Marcher sur un glacier", titleEn: "Walking a glacier", titleEs: "Caminar sobre un glaciar", description: "Randonnée encadrée sur la langue glaciaire de Sólheimajökull, crampons fournis. Le guide explique en chemin la formation des crevasses et des grottes de glace bleue, tout en gardant un œil attentif sur un terrain qui évolue d'une saison à l'autre — une expérience aussi éducative que spectaculaire.", descriptionEn: "A guided hike on the Sólheimajökull glacier tongue, crampons provided. Along the way the guide explains how the crevasses and blue ice caves form, all while keeping a close eye on terrain that shifts from one season to the next — an experience as educational as it is spectacular.", descriptionEs: "Caminata guiada sobre la lengua glaciar de Sólheimajökull, crampones incluidos. Por el camino, el guía explica cómo se forman las grietas y las cuevas de hielo azul, sin dejar de vigilar un terreno que cambia de una temporada a otra — una experiencia tan educativa como espectacular.", image: `${R2}/blocks/islande-glacier.jpg`, order: 2 },
  { scope: "destination", key: "islande", section: "bestOf", title: "Le Cercle d'Or", titleEn: "The Golden Circle", titleEs: "El Círculo Dorado", description: "Geysers, cascade de Gullfoss et la faille de Þingvellir, en une seule boucle depuis Reykjavik.", descriptionEn: "Geysers, Gullfoss waterfall and the Þingvellir rift, in a single loop from Reykjavik.", descriptionEs: "Géiseres, la cascada de Gullfoss y la falla de Þingvellir, en un solo circuito desde Reikiavik.", image: `${R2}/blocks/islande-bestof-goldencircle.jpg`, order: 1 },
  { scope: "destination", key: "islande", section: "bestOf", title: "La côte sud", titleEn: "The South Coast", titleEs: "La costa sur", description: "Plages de sable noir, icebergs échoués à Jökulsárlón, et le meilleur terrain de chasse aux aurores du pays.", descriptionEn: "Black sand beaches, stranded icebergs at Jökulsárlón, and the country's best aurora-hunting ground.", descriptionEs: "Playas de arena negra, icebergs varados en Jökulsárlón, y el mejor terreno del país para cazar auroras.", image: `${R2}/blocks/islande-bestof-southcoast.jpg`, order: 2 },

  // Italie
  { scope: "destination", key: "italie", section: "seeAndDo", title: "Rome, à pied", titleEn: "Rome on foot", titleEs: "Roma, a pie", description: "Du Colisée au Panthéon, l'essentiel de la Rome antique se visite sans jamais prendre un taxi. Les ruelles pavées relient les grands sites aux fontaines discrètes et aux trattorias sans enseigne où la carte tient sur une ardoise — c'est en marchant que la ville se révèle vraiment, une place à la fois.", descriptionEn: "From the Colosseum to the Pantheon, the essentials of ancient Rome are all within walking distance. Cobbled lanes link the major sites to quiet fountains and unmarked trattorias where the menu fits on a chalkboard — walking is really how the city reveals itself, one square at a time.", descriptionEs: "Del Coliseo al Panteón, lo esencial de la Roma antigua se visita sin tomar un taxi. Las callejuelas empedradas conectan los grandes monumentos con fuentes discretas y trattorias sin cartel donde el menú cabe en una pizarra — caminando es como la ciudad se revela de verdad, plaza a plaza.", image: `${R2}/blocks/italie-rome.jpg`, order: 1 },
  { scope: "destination", key: "italie", section: "seeAndDo", title: "Les collines toscanes", titleEn: "The Tuscan hills", titleEs: "Las colinas toscanas", description: "Vignobles, cyprès et villages perchés — la campagne italienne dans sa version la plus attendue, et la plus vraie. Une route qui serpente entre Sienne et Montalcino suffit à comprendre pourquoi tant de voyageurs y reviennent chaque année, souvent pour la même table dans la même auberge de famille.", descriptionEn: "Vineyards, cypress trees and hilltop villages — the Italian countryside at its most expected, and its most true. One winding road between Siena and Montalcino is enough to understand why so many travellers come back year after year, often for the same table at the same family-run inn.", descriptionEs: "Viñedos, cipreses y pueblos encaramados — el campo italiano en su versión más esperada, y más auténtica. Basta una carretera serpenteante entre Siena y Montalcino para entender por qué tantos viajeros vuelven año tras año, a menudo a la misma mesa de la misma posada familiar.", image: `${R2}/blocks/italie-tuscany.jpg`, order: 2 },
  { scope: "destination", key: "italie", section: "bestOf", title: "Florence", titleEn: "Florence", titleEs: "Florencia", description: "Le berceau de la Renaissance, entre la coupole du Duomo et les ateliers d'artisans du quartier de l'Oltrarno.", descriptionEn: "The cradle of the Renaissance, between the Duomo's dome and the artisan workshops of the Oltrarno district.", descriptionEs: "La cuna del Renacimiento, entre la cúpula del Duomo y los talleres artesanos del barrio de Oltrarno.", image: `${R2}/blocks/italie-bestof-florence.jpg`, order: 1 },
  { scope: "destination", key: "italie", section: "bestOf", title: "La côte amalfitaine", titleEn: "The Amalfi Coast", titleEs: "La costa de Amalfi", description: "Routes en corniche, citronniers en terrasses et villages suspendus au-dessus de la Méditerranée.", descriptionEn: "Cliffside roads, terraced lemon groves and villages suspended above the Mediterranean.", descriptionEs: "Carreteras en cornisa, limoneros en terrazas y pueblos suspendidos sobre el Mediterráneo.", image: `${R2}/blocks/italie-bestof-amalfi.jpg`, order: 2 },

  // Maldives
  { scope: "destination", key: "maldives", section: "seeAndDo", title: "La vie sur pilotis", titleEn: "Life over water", titleEs: "La vida sobre el agua", description: "Réveil au son des vagues sous le plancher, petit-déjeuner servi sur une terrasse privée au-dessus du lagon. Chaque villa dispose généralement de son propre accès direct à l'eau, avec une échelle pour rejoindre le récif en quelques secondes — la limite entre la chambre et l'océan devient volontairement floue.", descriptionEn: "Waking to the sound of waves under the floorboards, breakfast served on a private deck above the lagoon. Each villa typically has its own direct water access, with a ladder down to the reef just seconds away — the line between bedroom and ocean is deliberately blurred.", descriptionEs: "Despertar con el sonido de las olas bajo el suelo, desayuno servido en una terraza privada sobre la laguna. Cada villa suele tener su propio acceso directo al agua, con una escalera hasta el arrecife a solo unos segundos — la línea entre el dormitorio y el océano se difumina a propósito.", image: `${R2}/blocks/maldives-overwater.jpg`, order: 1 },
  { scope: "destination", key: "maldives", section: "seeAndDo", title: "Sous la surface", titleEn: "Beneath the surface", titleEs: "Bajo la superficie", description: "Le récif frangeant commence à quelques mètres de la villa — masque et tuba suffisent pour croiser tortues, raies et bancs de poissons-perroquets sans même s'éloigner de la plage. Les excursions en bateau permettent, en une demi-journée, d'atteindre des sites de plongée plus profonds réputés pour leurs rencontres avec les raies manta.", descriptionEn: "The fringing reef starts just metres from the villa — a mask and snorkel are enough to meet turtles, rays and parrotfish schools without even leaving the beach behind. Half-day boat trips reach deeper dive sites known for manta ray encounters.", descriptionEs: "El arrecife franjeante comienza a pocos metros de la villa — con máscara y tubo basta para cruzarse con tortugas, rayas y bancos de peces loro sin siquiera alejarse de la playa. Las excursiones en barco de medio día permiten llegar a puntos de buceo más profundos, conocidos por sus encuentros con mantarrayas.", image: `${R2}/blocks/maldives-underwater.jpg`, order: 2 },
  { scope: "destination", key: "maldives", section: "bestOf", title: "Atoll de Malé Nord", titleEn: "North Malé Atoll", titleEs: "Atolón de Malé Norte", description: "Le plus accessible des atolls, à moins d'une heure de bateau de l'aéroport international.", descriptionEn: "The most accessible atoll, less than an hour by boat from the international airport.", descriptionEs: "El atolón más accesible, a menos de una hora en barco del aeropuerto internacional.", image: `${R2}/blocks/maldives-bestof-northmale.jpg`, order: 1 },
  { scope: "destination", key: "maldives", section: "bestOf", title: "Atoll de Baa", titleEn: "Baa Atoll", titleEs: "Atolón de Baa", description: "Réserve de biosphère UNESCO, et l'un des meilleurs sites de plongée avec les raies manta au monde.", descriptionEn: "A UNESCO biosphere reserve, and one of the world's best manta ray diving sites.", descriptionEs: "Reserva de biosfera de la UNESCO, y uno de los mejores lugares del mundo para bucear con mantarrayas.", image: `${R2}/blocks/maldives-bestof-baa.jpg`, order: 2 },

  // France
  { scope: "destination", key: "france", section: "seeAndDo", title: "Les champs de lavande du Luberon", titleEn: "The lavender fields of the Luberon", titleEs: "Los campos de lavanda del Luberon", description: "En pleine floraison, entre mi-juin et fin juillet, les champs autour de Sault et Valensole se couvrent d'un violet dense qui embaume la route bien avant qu'on ne les voie. Les villages perchés voisins — Gordes, Roussillon et ses falaises d'ocre — se visitent à pied, en flânant, sans autre objectif que la prochaine terrasse ombragée.", descriptionEn: "In full bloom between mid-June and late July, the fields around Sault and Valensole turn a dense purple that scents the road long before you see them. The nearby hilltop villages — Gordes, Roussillon and its ochre cliffs — are best explored on foot, wandering with no goal beyond the next shaded terrace.", descriptionEs: "En plena floración, entre mediados de junio y finales de julio, los campos alrededor de Sault y Valensole se cubren de un violeta denso que perfuma la carretera mucho antes de verlos. Los pueblos encaramados cercanos — Gordes, Roussillon y sus acantilados ocres — se visitan a pie, paseando, sin más objetivo que la próxima terraza a la sombra.", image: `${R2}/blocks/france-provence.jpg`, order: 1 },
  { scope: "destination", key: "france", section: "seeAndDo", title: "La Riviera, hors saison", titleEn: "The Riviera, off season", titleEs: "La Riviera, fuera de temporada", description: "Nice et sa Promenade des Anglais restent superbes toute l'année, mais c'est au printemps et à l'automne que la lumière méditerranéenne devient vraiment particulière — moins de monde sur la Prom', des places en terrasse au Cours Saleya, et un bleu de mer qui n'a rien à envier à l'été.", descriptionEn: "Nice and its Promenade des Anglais stay superb year-round, but spring and autumn are when the Mediterranean light really turns special — fewer crowds on the Prom, easy terrace seats at the Cours Saleya, and a sea blue that owes nothing to summer.", descriptionEs: "Niza y su Promenade des Anglais siguen siendo magníficas todo el año, pero es en primavera y otoño cuando la luz mediterránea se vuelve realmente especial — menos gente en el paseo, mesas libres en la terraza del Cours Saleya, y un azul de mar que no tiene nada que envidiar al verano.", image: `${R2}/blocks/france-riviera.jpg`, order: 2 },
  { scope: "destination", key: "france", section: "bestOf", title: "La vallée de la Loire", titleEn: "The Loire Valley", titleEs: "El valle del Loira", description: "Une constellation de châteaux royaux, entourés de vignobles et de forêts de chasse.", descriptionEn: "A constellation of royal châteaux, surrounded by vineyards and hunting forests.", descriptionEs: "Una constelación de castillos reales, rodeados de viñedos y bosques de caza.", image: `${R2}/blocks/france-loire.jpg`, order: 1 },
  { scope: "destination", key: "france", section: "bestOf", title: "Chamonix et le Mont-Blanc", titleEn: "Chamonix and Mont Blanc", titleEs: "Chamonix y el Mont Blanc", description: "Le toit de l'Europe occidentale, accessible en téléphérique depuis la vallée en une demi-journée.", descriptionEn: "The roof of Western Europe, reachable by cable car from the valley in half a day.", descriptionEs: "El techo de Europa occidental, accesible en teleférico desde el valle en medio día.", image: `${R2}/blocks/france-chamonix.jpg`, order: 2 },

  // Royaume-Uni
  { scope: "destination", key: "royaume-uni", section: "seeAndDo", title: "Londres, entre fleuve et musées", titleEn: "London, between the river and the museums", titleEs: "Londres, entre el río y los museos", description: "La plupart des grands musées londoniens — British Museum, Tate Modern, National Gallery — sont gratuits, ce qui change complètement la façon de visiter : on entre une heure, on ressort, on revient le lendemain sans y penser. Une promenade le long de la Tamise relie facilement Tower Bridge, le Shard et les anciens docks reconvertis.", descriptionEn: "Most of London's major museums — the British Museum, Tate Modern, the National Gallery — are free, which changes the whole way of visiting: pop in for an hour, step out, come back the next day without a second thought. A walk along the Thames easily links Tower Bridge, the Shard and the converted old docks.", descriptionEs: "La mayoría de los grandes museos de Londres — el British Museum, la Tate Modern, la National Gallery — son gratuitos, lo que cambia por completo la forma de visitarlos: se entra una hora, se sale, se vuelve al día siguiente sin pensarlo dos veces. Un paseo junto al Támesis conecta fácilmente Tower Bridge, el Shard y los antiguos muelles reconvertidos.", image: `${R2}/blocks/uk-london.jpg`, order: 1 },
  { scope: "destination", key: "royaume-uni", section: "seeAndDo", title: "Les Cotswolds, à ralentir", titleEn: "The Cotswolds, at a slower pace", titleEs: "Los Cotswolds, para bajar el ritmo", description: "À moins de deux heures de Londres, les villages de pierre dorée des Cotswolds — Bibury, Bourton-on-the-Water, Castle Combe — semblent tout droit sortis d'une carte postale. On y vient pour les auberges anciennes, les jardins de curé et le rythme d'une Angleterre rurale qui n'a pas vraiment changé depuis un siècle.", descriptionEn: "Less than two hours from London, the golden-stone Cotswolds villages — Bibury, Bourton-on-the-Water, Castle Combe — look plucked straight from a postcard. People come for the old inns, the cottage gardens, and the pace of a rural England that hasn't really changed in a century.", descriptionEs: "A menos de dos horas de Londres, los pueblos de piedra dorada de los Cotswolds — Bibury, Bourton-on-the-Water, Castle Combe — parecen sacados de una postal. Se viene por las antiguas posadas, los jardines de casita y el ritmo de una Inglaterra rural que apenas ha cambiado en un siglo.", image: `${R2}/blocks/uk-cotswolds.jpg`, order: 2 },
  { scope: "destination", key: "royaume-uni", section: "bestOf", title: "Édimbourg", titleEn: "Edinburgh", titleEs: "Edimburgo", description: "Un château sur un piton volcanique, et une Royal Mile qui relie histoire médiévale et vie de festival.", descriptionEn: "A castle on a volcanic crag, and a Royal Mile that links medieval history to festival life.", descriptionEs: "Un castillo sobre un peñón volcánico, y una Royal Mile que une la historia medieval con la vida de festival.", image: `${R2}/blocks/uk-edinburgh.jpg`, order: 1 },
  { scope: "destination", key: "royaume-uni", section: "bestOf", title: "L'île de Skye", titleEn: "The Isle of Skye", titleEs: "La isla de Skye", description: "Des falaises spectaculaires et des pics déchiquetés, à la frontière entre l'Écosse continentale et l'Atlantique Nord.", descriptionEn: "Dramatic cliffs and jagged peaks, on the edge between mainland Scotland and the North Atlantic.", descriptionEs: "Acantilados espectaculares y picos escarpados, en la frontera entre la Escocia continental y el Atlántico Norte.", image: `${R2}/blocks/uk-skye.jpg`, order: 2 },

  // Espagne
  { scope: "destination", key: "espagne", section: "seeAndDo", title: "L'Alcázar de Séville", titleEn: "The Alcázar of Seville", titleEs: "El Alcázar de Sevilla", description: "Palais royal encore en usage aujourd'hui, l'Alcázar mêle arcs mauresques, cours d'eau et jardins en étages sur plusieurs siècles de style. On y prend son temps, entre les salons ornés d'azulejos et les jardins où les paons circulent librement entre les orangers.", descriptionEn: "A royal palace still in use today, the Alcázar blends Moorish arches, water courtyards and terraced gardens spanning several centuries of style. Take it slow, between rooms lined with azulejo tiles and gardens where peacocks roam freely among the orange trees.", descriptionEs: "Palacio real todavía en uso hoy, el Alcázar combina arcos moriscos, patios de agua y jardines escalonados que abarcan varios siglos de estilo. Se recorre con calma, entre salones decorados con azulejos y jardines donde los pavos reales circulan libremente entre los naranjos.", image: `${R2}/blocks/spain-seville.jpg`, order: 1 },
  { scope: "destination", key: "espagne", section: "seeAndDo", title: "L'Alhambra, au coucher du soleil", titleEn: "The Alhambra at sunset", titleEs: "La Alhambra al atardecer", description: "La forteresse mauresque domine Grenade depuis un plateau rocheux, et ses cours du Généralife restent parmi les plus beaux jardins d'Espagne. Le meilleur moment reste la fin d'après-midi, quand la pierre dorée prend une teinte presque rose et que le mirador de San Nicolás, en face, se remplit doucement de guitares.", descriptionEn: "The Moorish fortress overlooks Granada from a rocky plateau, and its Generalife courtyards remain among Spain's most beautiful gardens. The best time is late afternoon, when the golden stone turns almost pink and the San Nicolás viewpoint opposite slowly fills with guitars.", descriptionEs: "La fortaleza morisca domina Granada desde una meseta rocosa, y sus patios del Generalife siguen siendo de los jardines más bellos de España. El mejor momento es a última hora de la tarde, cuando la piedra dorada se tiñe casi de rosa y el mirador de San Nicolás, enfrente, se llena poco a poco de guitarras.", image: `${R2}/blocks/spain-granada.jpg`, order: 2 },
  { scope: "destination", key: "espagne", section: "bestOf", title: "Saint-Sébastien", titleEn: "San Sebastián", titleEs: "San Sebastián", description: "Une baie en coquillage, des plages urbaines et l'une des plus fortes densités de bars à tapas d'Europe.", descriptionEn: "A shell-shaped bay, urban beaches, and one of Europe's highest densities of tapas bars.", descriptionEs: "Una bahía en forma de concha, playas urbanas y una de las mayores densidades de bares de pintxos de Europa.", image: `${R2}/blocks/spain-sansebastian.jpg`, order: 1 },
  { scope: "destination", key: "espagne", section: "bestOf", title: "Majorque", titleEn: "Mallorca", titleEs: "Mallorca", description: "Criques cachées, villages de montagne et une capitale, Palma, qui mérite bien plus qu'une escale.", descriptionEn: "Hidden coves, mountain villages, and a capital, Palma, that deserves far more than a stopover.", descriptionEs: "Calas escondidas, pueblos de montaña y una capital, Palma, que merece mucho más que una escala.", image: `${R2}/blocks/spain-mallorca.jpg`, order: 2 },

  // Grèce
  { scope: "destination", key: "grece", section: "seeAndDo", title: "Les monastères des Météores", titleEn: "The monasteries of Meteora", titleEs: "Los monasterios de Meteora", description: "Perchés au sommet de piliers de grès qui s'élèvent brutalement au-dessus de la plaine de Thessalie, six monastères encore actifs se visitent en une journée. La montée à pied jusqu'aux portes du monastère de la Grande Météore, taillée dans la roche, reste l'un des accès les plus spectaculaires du pays.", descriptionEn: "Perched atop sandstone pillars that rise abruptly from the Thessalian plain, six still-active monasteries can be visited in a day. The rock-cut climb up to the gates of the Great Meteoron monastery remains one of the country's most striking approaches.", descriptionEs: "Encaramados sobre pilares de arenisca que se alzan bruscamente sobre la llanura de Tesalia, seis monasterios todavía activos se visitan en un día. La subida a pie hasta las puertas del monasterio de la Gran Meteora, tallada en la roca, sigue siendo uno de los accesos más espectaculares del país.", image: `${R2}/blocks/greece-meteora.jpg`, order: 1 },
  { scope: "destination", key: "grece", section: "seeAndDo", title: "L'Acropole avant la chaleur", titleEn: "The Acropolis before the heat", titleEs: "La Acrópolis antes del calor", description: "Visiter le Parthénon à l'ouverture évite non seulement la foule, mais aussi la chaleur qui rend la pierre blanche presque aveuglante en milieu de journée. Le musée de l'Acropole, juste en contrebas, complète la visite avec les frises et sculptures originales protégées de l'érosion.", descriptionEn: "Visiting the Parthenon at opening time avoids not just the crowds but also the heat, which makes the white stone nearly blinding by midday. The Acropolis Museum just below rounds out the visit with the original friezes and sculptures, protected from erosion.", descriptionEs: "Visitar el Partenón a primera hora evita no solo la multitud, sino también el calor, que hace que la piedra blanca resulte casi cegadora a mediodía. El Museo de la Acrópolis, justo debajo, completa la visita con los frisos y esculturas originales, protegidos de la erosión.", image: `${R2}/blocks/greece-athens.jpg`, order: 2 },
  { scope: "destination", key: "grece", section: "bestOf", title: "Naviguer entre les Cyclades", titleEn: "Sailing the Cyclades", titleEs: "Navegar por las Cícladas", description: "Un chapelet d'îles blanches et bleues, chacune avec son propre caractère, reliées par ferry ou par voilier privé.", descriptionEn: "A string of white and blue islands, each with its own character, linked by ferry or private sailboat.", descriptionEs: "Un rosario de islas blancas y azules, cada una con su propio carácter, unidas por ferry o velero privado.", image: `${R2}/blocks/greece-sailing.jpg`, order: 1 },
  { scope: "destination", key: "grece", section: "bestOf", title: "La Crète", titleEn: "Crete", titleEs: "Creta", description: "La plus grande île grecque, entre plages de sable rose, gorges à pied et vestiges minoens.", descriptionEn: "Greece's largest island, between pink-sand beaches, hiking gorges and Minoan ruins.", descriptionEs: "La isla griega más grande, entre playas de arena rosa, desfiladeros para caminar y restos minoicos.", image: `${R2}/blocks/greece-crete.jpg`, order: 2 },

  // Portugal
  { scope: "destination", key: "portugal", section: "seeAndDo", title: "La vallée du Douro en bateau", titleEn: "The Douro Valley by boat", titleEs: "El valle del Duero en barco", description: "Les coteaux en terrasses du Douro, classés à l'UNESCO, se découvrent le mieux depuis l'eau — une croisière lente entre les quintas viticoles, avec une halte dégustation dans une cave familiale qui produit du porto depuis plusieurs générations.", descriptionEn: "The UNESCO-listed terraced slopes of the Douro are best seen from the water — a slow cruise between wine-producing quintas, with a tasting stop at a family cellar that's been making port for generations.", descriptionEs: "Las laderas en terrazas del Duero, declaradas por la UNESCO, se descubren mejor desde el agua — un crucero pausado entre quintas vinícolas, con una parada de cata en una bodega familiar que produce oporto desde hace varias generaciones.", image: `${R2}/blocks/portugal-douro.jpg`, order: 1 },
  { scope: "destination", key: "portugal", section: "seeAndDo", title: "Sintra, ville-palais", titleEn: "Sintra, city of palaces", titleEs: "Sintra, ciudad de palacios", description: "Nichée dans une forêt de collines fraîches, Sintra concentre plus de palais et de manoirs excentriques au kilomètre carré que n'importe quelle autre ville du pays. Le palais coloré de Pena, perché au sommet, se visite tôt le matin, avant les bus venus de Lisbonne.", descriptionEn: "Tucked into a forest of cool hills, Sintra packs more palaces and eccentric manor houses per square kilometre than anywhere else in the country. The colourful Pena Palace, perched at the top, is best visited early, before the coaches arrive from Lisbon.", descriptionEs: "Encajada en un bosque de colinas frescas, Sintra concentra más palacios y mansiones excéntricas por kilómetro cuadrado que cualquier otra ciudad del país. El colorido Palacio da Pena, encaramado en lo alto, se visita mejor temprano, antes de que lleguen los autobuses desde Lisboa.", image: `${R2}/blocks/portugal-sintra.jpg`, order: 2 },
  { scope: "destination", key: "portugal", section: "bestOf", title: "L'Algarve", titleEn: "The Algarve", titleEs: "El Algarve", description: "Falaises ocre, grottes marines et plages cachées le long de la côte sud du Portugal.", descriptionEn: "Ochre cliffs, sea caves and hidden beaches along Portugal's south coast.", descriptionEs: "Acantilados ocres, cuevas marinas y playas escondidas a lo largo de la costa sur de Portugal.", image: `${R2}/blocks/portugal-algarve.jpg`, order: 1 },
  { scope: "destination", key: "portugal", section: "bestOf", title: "Porto", titleEn: "Porto", titleEs: "Oporto", description: "Des caves de porto centenaires aux ruelles colorées de Ribeira, au bord du Douro.", descriptionEn: "From century-old port wine cellars to the colourful lanes of Ribeira, on the banks of the Douro.", descriptionEs: "De bodegas de oporto centenarias a las coloridas calles de Ribeira, junto al Duero.", image: `${R2}/blocks/portugal-porto.jpg`, order: 2 },

  // Croatie
  { scope: "destination", key: "croatie", section: "seeAndDo", title: "Les lacs de Plitvice", titleEn: "The Plitvice Lakes", titleEs: "Los lagos de Plitvice", description: "Seize lacs turquoise reliés par des cascades et des passerelles en bois, dans une forêt classée à l'UNESCO. La couleur de l'eau change selon la lumière et la minéralité du sol — un vert émeraude le matin, un bleu presque électrique en fin de journée.", descriptionEn: "Sixteen turquoise lakes linked by waterfalls and wooden walkways, in a UNESCO-listed forest. The water's colour shifts with the light and the soil's mineral content — emerald green in the morning, an almost electric blue by late afternoon.", descriptionEs: "Dieciséis lagos turquesa unidos por cascadas y pasarelas de madera, en un bosque declarado por la UNESCO. El color del agua cambia según la luz y la mineralidad del suelo — verde esmeralda por la mañana, un azul casi eléctrico al final del día.", image: `${R2}/blocks/croatia-plitvice.jpg`, order: 1 },
  { scope: "destination", key: "croatie", section: "seeAndDo", title: "L'île de Hvar", titleEn: "The island of Hvar", titleEs: "La isla de Hvar", description: "Réputée pour son ensoleillement, Hvar mêle une citadelle vénitienne, des champs de lavande en été et des criques accessibles seulement par bateau. La ville elle-même, avec sa place principale pavée de marbre, reste l'une des plus élégantes de l'Adriatique.", descriptionEn: "Known for its sunshine, Hvar mixes a Venetian fortress, summer lavender fields, and coves reachable only by boat. The town itself, with its marble-paved main square, remains one of the most elegant on the Adriatic.", descriptionEs: "Conocida por su sol, Hvar combina una fortaleza veneciana, campos de lavanda en verano y calas accesibles solo en barco. La propia ciudad, con su plaza principal pavimentada en mármol, sigue siendo una de las más elegantes del Adriático.", image: `${R2}/blocks/croatia-hvar.jpg`, order: 2 },
  { scope: "destination", key: "croatie", section: "bestOf", title: "L'Istrie", titleEn: "Istria", titleEs: "Istria", description: "Villages perchés, truffes blanches et une côte qui rappelle la Toscane, en plus tranquille.", descriptionEn: "Hilltop villages, white truffles and a coastline reminiscent of Tuscany, only quieter.", descriptionEs: "Pueblos encaramados, trufas blancas y una costa que recuerda a la Toscana, más tranquila.", image: `${R2}/blocks/croatia-istria.jpg`, order: 1 },
  { scope: "destination", key: "croatie", section: "bestOf", title: "Split et le palais de Dioclétien", titleEn: "Split and Diocletian's Palace", titleEs: "Split y el palacio de Diocleciano", description: "Un palais romain du IVe siècle toujours habité, transformé en cœur battant de la ville moderne.", descriptionEn: "A still-inhabited 4th-century Roman palace, transformed into the beating heart of the modern city.", descriptionEs: "Un palacio romano del siglo IV todavía habitado, convertido en el corazón palpitante de la ciudad moderna.", image: `${R2}/blocks/croatia-split.jpg`, order: 2 },

  // Suisse
  { scope: "destination", key: "suisse", section: "seeAndDo", title: "Genève et son lac", titleEn: "Geneva and its lake", titleEs: "Ginebra y su lago", description: "Le Jet d'Eau, visible depuis presque tout le tour du lac, sert de repère à une ville qui se parcourt facilement à pied — du quartier international aux ruelles pavées de la vieille ville, en passant par les jardins fleuris de l'Île Rousseau.", descriptionEn: "The Jet d'Eau, visible from almost anywhere around the lake, serves as a landmark for a city that's easy to explore on foot — from the international district to the cobbled old town lanes, via the flower gardens of Île Rousseau.", descriptionEs: "El Jet d'Eau, visible desde casi cualquier punto del lago, sirve de referencia a una ciudad que se recorre fácilmente a pie — del barrio internacional a las callejuelas empedradas del casco antiguo, pasando por los jardines floridos de la Île Rousseau.", image: `${R2}/blocks/switzerland-geneva.jpg`, order: 1 },
  { scope: "destination", key: "suisse", section: "seeAndDo", title: "Le train panoramique des Alpes", titleEn: "The panoramic Alpine train", titleEs: "El tren panorámico de los Alpes", description: "Les trains suisses à baies vitrées traversent des paysages qui changent toutes les vingt minutes — vignobles en terrasses, gorges profondes, glaciers suspendus — sans qu'il soit nécessaire de conduire ni même de lever les yeux du carnet de voyage.", descriptionEn: "Switzerland's glass-roofed trains cross landscapes that change every twenty minutes — terraced vineyards, deep gorges, hanging glaciers — without needing to drive, or even look up from a travel journal.", descriptionEs: "Los trenes suizos de techo panorámico atraviesan paisajes que cambian cada veinte minutos — viñedos en terrazas, gargantas profundas, glaciares colgantes — sin necesidad de conducir, ni siquiera de levantar la vista del cuaderno de viaje.", image: `${R2}/blocks/switzerland-train.jpg`, order: 2 },
  { scope: "destination", key: "suisse", section: "bestOf", title: "Lucerne", titleEn: "Lucerne", titleEs: "Lucerna", description: "Un pont de bois médiéval, un lac entouré de sommets, et l'une des vieilles villes les mieux conservées de Suisse.", descriptionEn: "A medieval wooden bridge, a mountain-ringed lake, and one of Switzerland's best-preserved old towns.", descriptionEs: "Un puente de madera medieval, un lago rodeado de cumbres y uno de los cascos antiguos mejor conservados de Suiza.", image: `${R2}/blocks/switzerland-lucerne.jpg`, order: 1 },
  { scope: "destination", key: "suisse", section: "bestOf", title: "Randonnées en altitude", titleEn: "High-altitude hiking", titleEs: "Senderismo en altitud", description: "Des sentiers balisés qui traversent alpages et champs de fleurs sauvages, accessibles en train ou en téléphérique.", descriptionEn: "Marked trails crossing alpine pastures and wildflower meadows, reached by train or cable car.", descriptionEs: "Senderos señalizados que cruzan pastos alpinos y prados de flores silvestres, accesibles en tren o teleférico.", image: `${R2}/blocks/switzerland-hiking.jpg`, order: 2 },

  // Norvège
  { scope: "destination", key: "norvege", section: "seeAndDo", title: "Croisière sur le Nærøyfjord", titleEn: "Cruising the Nærøyfjord", titleEs: "Crucero por el Nærøyfjord", description: "L'un des fjords les plus étroits et les plus spectaculaires du pays, classé à l'UNESCO. Les parois montent presque à la verticale de chaque côté du bateau, ponctuées de fermes isolées accessibles seulement par la mer et de cascades qui se jettent directement dans l'eau glacée.", descriptionEn: "One of the country's narrowest and most dramatic fjords, UNESCO-listed. The cliff walls rise almost vertically on either side of the boat, dotted with isolated farms reachable only by sea and waterfalls plunging straight into the icy water.", descriptionEs: "Uno de los fiordos más estrechos y espectaculares del país, declarado por la UNESCO. Las paredes se alzan casi en vertical a ambos lados del barco, salpicadas de granjas aisladas accesibles solo por mar y cascadas que caen directamente al agua helada.", image: `${R2}/blocks/norway-fjord.jpg`, order: 1 },
  { scope: "destination", key: "norvege", section: "seeAndDo", title: "La chasse aux aurores boréales", titleEn: "The northern lights hunt", titleEs: "La caza de auroras boreales", description: "De septembre à mars, loin de toute pollution lumineuse, le ciel du nord de la Norvège se met parfois à onduler de vert et de violet. Un guide local suit les prévisions d'activité solaire et de couverture nuageuse en temps réel pour maximiser les chances d'assister au phénomène.", descriptionEn: "From September to March, far from any light pollution, northern Norway's sky sometimes starts to ripple green and violet. A local guide tracks solar activity and cloud cover forecasts in real time to maximise the odds of catching it.", descriptionEs: "De septiembre a marzo, lejos de toda luz artificial, el cielo del norte de Noruega a veces empieza a ondular en verde y violeta. Un guía local sigue las previsiones de actividad solar y cobertura de nubes en tiempo real para maximizar las probabilidades de verlo.", image: `${R2}/blocks/norway-lights.jpg`, order: 2 },
  { scope: "destination", key: "norvege", section: "bestOf", title: "Bergen", titleEn: "Bergen", titleEs: "Bergen", description: "Des maisons hanséatiques colorées au bord du port, porte d'entrée historique des fjords norvégiens.", descriptionEn: "Colourful Hanseatic houses lining the harbour, the historic gateway to the Norwegian fjords.", descriptionEs: "Coloridas casas hanseáticas junto al puerto, puerta histórica de entrada a los fiordos noruegos.", image: `${R2}/blocks/norway-bergen.jpg`, order: 1 },
  { scope: "destination", key: "norvege", section: "bestOf", title: "Le Geirangerfjord", titleEn: "The Geirangerfjord", titleEs: "El Geirangerfjord", description: "Cascades en cheveux de mariée et fermes suspendues à flanc de falaise, l'un des paysages les plus photographiés du pays.", descriptionEn: "Bridal-veil waterfalls and farms clinging to cliff faces, one of the country's most photographed landscapes.", descriptionEs: "Cascadas de velo de novia y granjas colgadas en la ladera del acantilado, uno de los paisajes más fotografiados del país.", image: `${R2}/blocks/norway-geiranger.jpg`, order: 2 },

  // Turquie
  { scope: "destination", key: "turquie", section: "seeAndDo", title: "Istanbul, entre deux continents", titleEn: "Istanbul, between two continents", titleEs: "Estambul, entre dos continentes", description: "Une croisière sur le Bosphore permet de longer en une après-midi les rives européenne et asiatique de la ville, entre palais ottomans, forteresses et maisons de bois traditionnelles. Sainte-Sophie, tour à tour basilique, mosquée et musée, résume à elle seule les strates de l'histoire d'Istanbul.", descriptionEn: "A Bosphorus cruise lets you skim both the European and Asian shores of the city in one afternoon, past Ottoman palaces, fortresses and traditional wooden houses. Hagia Sophia — in turn basilica, mosque and museum — sums up Istanbul's layered history all on its own.", descriptionEs: "Un crucero por el Bósforo permite recorrer en una tarde las orillas europea y asiática de la ciudad, entre palacios otomanos, fortalezas y casas de madera tradicionales. Santa Sofía, sucesivamente basílica, mezquita y museo, resume por sí sola las capas de la historia de Estambul.", image: `${R2}/blocks/turkey-istanbul.jpg`, order: 1 },
  { scope: "destination", key: "turquie", section: "seeAndDo", title: "Une montgolfière sur la Cappadoce", titleEn: "A balloon flight over Cappadocia", titleEs: "Un globo sobre Capadocia", description: "Au lever du soleil, des dizaines de montgolfières décollent au-dessus des cheminées de fée, ces formations rocheuses sculptées par des millénaires d'érosion volcanique. Vu d'en haut, le paysage ressemble à nul autre — une géologie qui semble avoir été façonnée par la main de quelqu'un.", descriptionEn: "At sunrise, dozens of hot-air balloons lift off above the fairy chimneys — rock formations shaped by millennia of volcanic erosion. Seen from above, the landscape looks like nowhere else — a geology that seems almost hand-shaped.", descriptionEs: "Al amanecer, decenas de globos aerostáticos despegan sobre las chimeneas de hadas, esas formaciones rocosas esculpidas por milenios de erosión volcánica. Visto desde arriba, el paisaje no se parece a ningún otro — una geología que parece moldeada a mano.", image: `${R2}/blocks/turkey-coast.jpg`, order: 2 },
  { scope: "destination", key: "turquie", section: "bestOf", title: "Pamukkale", titleEn: "Pamukkale", titleEs: "Pamukkale", description: "Des piscines de travertin blanc en cascade, formées par des sources chaudes riches en calcaire depuis des millénaires.", descriptionEn: "Cascading white travertine pools, formed by mineral-rich hot springs over thousands of years.", descriptionEs: "Piscinas de travertino blanco en cascada, formadas por fuentes termales ricas en cal durante miles de años.", image: `${R2}/blocks/turkey-pamukkale.jpg`, order: 1 },
  { scope: "destination", key: "turquie", section: "bestOf", title: "Éphèse", titleEn: "Ephesus", titleEs: "Éfeso", description: "L'une des cités antiques les mieux conservées de Méditerranée, avec sa bibliothèque de Celsus toujours debout.", descriptionEn: "One of the best-preserved ancient cities in the Mediterranean, with its Library of Celsus still standing.", descriptionEs: "Una de las ciudades antiguas mejor conservadas del Mediterráneo, con su Biblioteca de Celso todavía en pie.", image: `${R2}/blocks/turkey-ephesus.jpg`, order: 2 },

  // Region: Afrique
  { scope: "region", key: "afrique", section: "seeAndDo", title: "La faune en mouvement", titleEn: "Wildlife on the move", titleEs: "La fauna en movimiento", description: "De la grande migration au Kenya aux gorilles de montagne du Rwanda, le continent reste le meilleur endroit au monde pour observer la vie sauvage dans son état le plus brut. Au Masai Mara, des millions de gnous et de zèbres traversent des rivières infestées de crocodiles dans une scène que rien ne prépare vraiment à voir en vrai. Plus au sud, les deltas et les réserves privées offrent une expérience plus intime — guide dédié, campement discret, silence complet dès que le moteur du 4x4 s'arrête. Ce n'est pas un documentaire regardé depuis un canapé : c'est l'odeur de la poussière, le bruit du vent dans les hautes herbes, et la certitude que tout peut arriver à la prochaine crête.", descriptionEn: "From the great migration in Kenya to the mountain gorillas of Rwanda, the continent remains the best place on earth to watch wildlife in its rawest form. On the Masai Mara, millions of wildebeest and zebra cross crocodile-infested rivers in a scene nothing quite prepares you for in person. Further south, deltas and private reserves offer something more intimate — a dedicated guide, a discreet camp, total silence the moment the 4x4's engine cuts out. This isn't a documentary watched from a sofa: it's the smell of dust, the sound of wind through tall grass, and the certainty that anything could happen over the next ridge.", descriptionEs: "De la gran migración en Kenia a los gorilas de montaña de Ruanda, el continente sigue siendo el mejor lugar del mundo para observar la vida salvaje en su forma más pura. En el Masai Mara, millones de ñus y cebras cruzan ríos infestados de cocodrilos en una escena para la que nada le prepara realmente hasta verla en persona. Más al sur, los deltas y las reservas privadas ofrecen una experiencia más íntima — guía dedicado, campamento discreto, silencio total en cuanto se apaga el motor del todoterreno. No es un documental visto desde el sofá: es el olor del polvo, el sonido del viento entre la hierba alta, y la certeza de que cualquier cosa puede pasar tras la siguiente cresta.", image: `${R2}/blocks/region-afrique-wildlife.jpg`, order: 1 },
  { scope: "region", key: "afrique", section: "seeAndDo", title: "Médinas, kasbahs et légendes anciennes", titleEn: "Medinas, kasbahs and ancient legends", titleEs: "Medinas, kasbahs y leyendas antiguas", description: "Entre le Maroc et l'Éthiopie, le continent porte des siècles d'histoire à ciel ouvert. À Marrakech, la médina se traverse en se perdant volontairement — ruelles d'artisans, portes cloutées, odeurs d'épices qui changent à chaque coin de rue. Dans le Haut Atlas, les kasbahs en pisé rouge tiennent debout depuis des générations, habitées par des familles berbères qui ouvrent parfois leur toit-terrasse pour un thé à la menthe. Plus loin, les églises rupestres de Lalibela, en Éthiopie, taillées directement dans le roc au XIIe siècle, restent un lieu de pèlerinage actif — pas une ruine sous verre, mais un site toujours vivant.", descriptionEn: "Between Morocco and Ethiopia, the continent wears centuries of history in the open. In Marrakech, the medina is best crossed by getting deliberately lost — artisan alleyways, studded doors, spice smells that shift with every corner. In the High Atlas, red-earth kasbahs have stood for generations, still inhabited by Berber families who'll sometimes open their rooftop for a glass of mint tea. Further afield, Ethiopia's rock-hewn churches of Lalibela, carved directly into the stone in the 12th century, remain an active pilgrimage site — not a ruin behind glass, but a place still very much alive.", descriptionEs: "Entre Marruecos y Etiopía, el continente lleva siglos de historia a cielo abierto. En Marrakech, la mejor forma de cruzar la medina es perderse a propósito — callejuelas de artesanos, puertas con clavos, olores a especias que cambian en cada esquina. En el Alto Atlas, las kasbahs de tierra roja llevan generaciones en pie, todavía habitadas por familias bereberes que a veces abren su terraza para un té a la menta. Más lejos, las iglesias rupestres de Lalibela, en Etiopía, talladas directamente en la roca en el siglo XII, siguen siendo un lugar de peregrinación activo — no una ruina tras un cristal, sino un sitio muy vivo.", image: `${R2}/blocks/region-afrique-medinas.jpg`, order: 2 },
  { scope: "region", key: "afrique", section: "bestOf", title: "L'Afrique du Nord", titleEn: "North Africa", titleEs: "El norte de África", description: "Le Maroc reste notre porte d'entrée la plus accessible vers le continent, et celle que nous connaissons le mieux : douze ans à sillonner Agadir et sa région nous ont appris où trouver les bonnes adresses, loin des attrape-touristes. Marrakech pour la médina et les jardins cachés derrière de hauts murs d'argile. Les gorges du Toubkal pour une nuit chez l'habitant en altitude. La côte atlantique, d'Essaouira à Agadir, pour le vent, le surf et les marchés de poisson du matin. Un seul pays suffit déjà à remplir un carnet de voyage entier.", descriptionEn: "Morocco remains our most accessible gateway to the continent, and the one we know best: twelve years crisscrossing Agadir and its region have taught us where the real addresses are, far from the tourist traps. Marrakech for the medina and the gardens hidden behind tall clay walls. The Toubkal gorges for a night with a host family at altitude. The Atlantic coast, from Essaouira to Agadir, for the wind, the surf, and the morning fish markets. One country alone is already enough to fill an entire travel journal.", descriptionEs: "Marruecos sigue siendo nuestra puerta de entrada más accesible al continente, y la que mejor conocemos: doce años recorriendo Agadir y su región nos han enseñado dónde están las direcciones auténticas, lejos de las trampas para turistas. Marrakech por la medina y los jardines escondidos tras altos muros de arcilla. Los desfiladeros del Toubkal para pasar una noche en casa de una familia en altitud. La costa atlántica, de Essaouira a Agadir, por el viento, el surf y los mercados de pescado de la mañana. Un solo país ya basta para llenar todo un cuaderno de viaje.", image: `${R2}/blocks/region-afrique-north.jpg`, order: 1 },
  { scope: "region", key: "afrique", section: "bestOf", title: "L'Afrique subsaharienne", titleEn: "Sub-Saharan Africa", titleEs: "El África subsahariana", description: "Le Kenya ouvre la porte à une Afrique bien plus vaste — celle des grandes plaines, des réserves privées et d'une biodiversité qui n'a pas d'équivalent ailleurs sur le continent. C'est ici que se joue chaque année la grande migration, l'un des seuls spectacles naturels que la description peine vraiment à rendre justice. Au-delà du Masai Mara, la région abrite aussi des forêts de montagne, des lacs alcalins couverts de flamants roses, et des communautés locales qui vivent encore largement au rythme des saisons plutôt que du calendrier.", descriptionEn: "Kenya opens the door to a much larger Africa — one of vast plains, private reserves and a biodiversity with no real equivalent elsewhere on the continent. This is where the great migration plays out every year, one of the few natural spectacles that description genuinely struggles to do justice to. Beyond the Masai Mara, the region is also home to montane forests, alkaline lakes thick with flamingos, and local communities who still largely live by the seasons rather than the calendar.", descriptionEs: "Kenia abre la puerta a un África mucho más vasta — la de las grandes llanuras, las reservas privadas y una biodiversidad sin verdadero equivalente en el resto del continente. Aquí se desarrolla cada año la gran migración, uno de los pocos espectáculos naturales a los que la descripción realmente no logra hacer justicia. Más allá del Masai Mara, la región alberga también bosques de montaña, lagos alcalinos cubiertos de flamencos, y comunidades locales que aún viven en gran medida al ritmo de las estaciones y no del calendario.", image: `${R2}/blocks/region-afrique-subsaharan.jpg`, order: 2 },
  { scope: "region", key: "afrique", section: "bestOf", title: "Safari", titleEn: "Safari", titleEs: "Safari", description: "Un safari n'a pas à suivre un seul rythme. Certains matins commencent avant le lever du soleil, roulant doucement le long d'une piste encore fraîche de la nuit, à l'affût d'une troupe de lions repérée la veille. D'autres jours se passent presque sans moteur — une marche guidée à travers la savane, l'oreille tendue vers les bruits qui trahissent la présence d'un troupeau à quelques centaines de mètres. Le point commun reste toujours le même : un guide qui lit le terrain mieux que n'importe quel guide papier, et un campement où revenir raconter ce qu'on a vu.", descriptionEn: "A safari doesn't have to follow just one rhythm. Some mornings start before sunrise, rolling quietly along a track still cool from the night, watching for a pride of lions spotted the day before. Other days pass with barely an engine running — a guided walk across the savanna, listening for the sounds that give away a herd a few hundred metres off. What stays constant is a guide who reads the ground better than any guidebook ever could, and a camp to come back to and talk about what you saw.", descriptionEs: "Un safari no tiene por qué seguir un solo ritmo. Algunas mañanas empiezan antes del amanecer, avanzando despacio por una pista todavía fresca de la noche, atentos a una manada de leones vista el día anterior. Otros días transcurren casi sin motor — una caminata guiada por la sabana, con el oído atento a los sonidos que delatan a una manada a pocos cientos de metros. Lo que se mantiene siempre igual es un guía que lee el terreno mejor que cualquier guía de papel, y un campamento al que volver para contar lo que se ha visto.", image: `${R2}/blocks/region-afrique-bestof-safari.jpg`, order: 3 },

  // Region: Asie
  { scope: "region", key: "asie", section: "seeAndDo", title: "Temples et rizières en terrasses", titleEn: "Temples and rice terraces", titleEs: "Templos y arrozales en terrazas", description: "Du Japon à l'Asie du Sud-Est, le continent conjugue architecture sacrée et paysages agricoles façonnés depuis des millénaires. Un torii vermillon au sommet d'une colline, un temple bouddhiste noyé dans la brume du matin, des rizières en terrasses qui suivent la courbe des montagnes comme des courbes de niveau dessinées à la main — chaque halte raconte une relation ancienne entre les habitants et leur terre. C'est un continent où le sacré et le quotidien ne sont jamais bien loin l'un de l'autre.", descriptionEn: "From Japan to Southeast Asia, the continent pairs sacred architecture with farmed landscapes shaped over millennia. A vermillion torii gate atop a hill, a Buddhist temple wrapped in morning mist, rice terraces that trace the curve of a mountain like hand-drawn contour lines — every stop tells the story of an old relationship between people and their land. It's a continent where the sacred and the everyday are never far apart.", descriptionEs: "De Japón al sudeste asiático, el continente combina arquitectura sagrada con paisajes agrícolas moldeados durante milenios. Un torii bermellón en lo alto de una colina, un templo budista envuelto en la niebla de la mañana, arrozales en terrazas que siguen la curva de la montaña como líneas de nivel dibujadas a mano — cada parada cuenta una relación antigua entre sus habitantes y la tierra. Es un continente donde lo sagrado y lo cotidiano nunca están muy lejos el uno del otro.", image: `${R2}/blocks/region-asie-temples.jpg`, order: 1 },
  { scope: "region", key: "asie", section: "seeAndDo", title: "Vertige urbain, sanctuaires cachés", titleEn: "Urban vertigo, hidden sanctuaries", titleEs: "Vértigo urbano, santuarios escondidos", description: "À quelques rues des néons, un torii rouge et le silence d'un sanctuaire shinto — l'Asie sait faire cohabiter la ville la plus dense et le geste le plus calme. À Tokyo, il suffit de tourner dans une ruelle pour passer du carrefour de Shibuya à un jardin de mousse centenaire sans un bruit. Cette juxtaposition permanente entre vertige urbain et retrait total est peut-être ce qui rend la région si difficile à résumer en un seul voyage.", descriptionEn: "A few streets from the neon, a red torii gate and the silence of a Shinto shrine — Asia knows how to let the densest city and the calmest gesture share the same block. In Tokyo, one turn down an alley is enough to go from the Shibuya crossing to a century-old moss garden without a sound. That constant juxtaposition of urban vertigo and total withdrawal is probably what makes the region so hard to sum up in a single trip.", descriptionEs: "A pocas calles del neón, un torii rojo y el silencio de un santuario sintoísta — Asia sabe hacer convivir la ciudad más densa con el gesto más tranquilo. En Tokio, basta con girar por un callejón para pasar del cruce de Shibuya a un jardín de musgo centenario sin un solo ruido. Esa yuxtaposición constante entre el vértigo urbano y el retiro total es quizás lo que hace tan difícil resumir la región en un solo viaje.", image: `${R2}/blocks/region-asie-shrines.jpg`, order: 2 },
  { scope: "region", key: "asie", section: "bestOf", title: "L'Asie de l'Est", titleEn: "East Asia", titleEs: "El este de Asia", description: "Le Japon, entre tradition shinto et modernité vertigineuse.", descriptionEn: "Japan, between Shinto tradition and dizzying modernity.", descriptionEs: "Japón, entre la tradición sintoísta y la modernidad vertiginosa.", image: `${R2}/blocks/region-asie-east.jpg`, order: 1 },
  { scope: "region", key: "asie", section: "bestOf", title: "L'Asie du Sud-Est", titleEn: "Southeast Asia", titleEs: "El sudeste asiático", description: "Îles, temples et street food — une région pensée pour être découverte lentement.", descriptionEn: "Islands, temples and street food — a region built to be explored slowly.", descriptionEs: "Islas, templos y comida callejera — una región pensada para descubrirse despacio.", image: `${R2}/blocks/region-asie-southeast.jpg`, order: 2 },

  // Region: Europe
  { scope: "region", key: "europe", section: "seeAndDo", title: "Sommets et côtes", titleEn: "Peaks and coastlines", titleEs: "Cumbres y costas", description: "De l'Islande à l'Italie, l'Europe change de visage tous les quelques centaines de kilomètres. Un glacier qui recule à vue d'œil, une route de corniche taillée dans la falaise, un volcan encore actif à l'horizon — le continent tient dans un espace restreint une variété de paysages qu'on ne trouve nulle part ailleurs réunie d'aussi près. On peut passer d'un désert de lave noire à un vignoble en terrasses en quelques heures de vol seulement.", descriptionEn: "From Iceland to Italy, Europe changes face every few hundred kilometres. A visibly retreating glacier, a cliffside corniche road, a still-active volcano on the horizon — the continent packs a variety of landscapes into a small space that you won't find bundled this close together anywhere else. You can go from a black lava desert to a terraced vineyard in just a few hours' flight.", descriptionEs: "De Islandia a Italia, Europa cambia de rostro cada pocos cientos de kilómetros. Un glaciar que retrocede a ojos vista, una carretera en cornisa tallada en el acantilado, un volcán todavía activo en el horizonte — el continente reúne en un espacio reducido una variedad de paisajes que no se encuentra en ningún otro lugar tan cerca entre sí. Se puede pasar de un desierto de lava negra a un viñedo en terrazas en solo unas horas de vuelo.", image: `${R2}/blocks/region-europe-peaks.jpg`, order: 1 },
  { scope: "region", key: "europe", section: "seeAndDo", title: "Villages suspendus et vieilles pierres", titleEn: "Clifftop villages and old stone", titleEs: "Pueblos colgados y piedra antigua", description: "De la côte amalfitaine aux fjords islandais, l'Europe garde ses plus beaux villages accrochés là où on ne les attend pas — au bord d'une falaise, au pied d'un volcan, au fond d'un fjord. Les maisons en pierre y tiennent debout depuis des siècles, les ruelles sont trop étroites pour les voitures, et le meilleur moment pour les découvrir reste tôt le matin, avant l'arrivée des cars de tourisme.", descriptionEn: "From the Amalfi Coast to Iceland's fjords, Europe keeps its prettiest villages clinging on exactly where you wouldn't expect — on a cliff edge, at the foot of a volcano, at the end of a fjord. The stone houses have stood for centuries, the lanes are too narrow for cars, and the best time to see them is still early morning, before the tour buses arrive.", descriptionEs: "De la costa de Amalfi a los fiordos de Islandia, Europa guarda sus pueblos más bonitos justo donde menos se esperan — al borde de un acantilado, al pie de un volcán, al fondo de un fiordo. Las casas de piedra llevan siglos en pie, las callejuelas son demasiado estrechas para los coches, y el mejor momento para descubrirlos sigue siendo temprano por la mañana, antes de que lleguen los autobuses turísticos.", image: `${R2}/blocks/region-europe-villages.jpg`, order: 2 },
  { scope: "region", key: "europe", section: "bestOf", title: "L'Europe du Sud", titleEn: "Southern Europe", titleEs: "El sur de Europa", description: "L'Italie et sa dolce vita, entre ruines antiques et côtes vertigineuses.", descriptionEn: "Italy and its dolce vita, between ancient ruins and vertiginous coastlines.", descriptionEs: "Italia y su dolce vita, entre ruinas antiguas y costas vertiginosas.", image: `${R2}/blocks/region-europe-south.jpg`, order: 1 },
  { scope: "region", key: "europe", section: "bestOf", title: "L'Europe nordique", titleEn: "Nordic Europe", titleEs: "La Europa nórdica", description: "L'Islande, ses glaciers et ses aurores — un paysage qui semble encore en formation.", descriptionEn: "Iceland, its glaciers and its auroras — a landscape that still looks like it's forming.", descriptionEs: "Islandia, sus glaciares y sus auroras — un paisaje que aún parece estar formándose.", image: `${R2}/blocks/region-europe-alpine.jpg`, order: 2 },

  // Region: Océan Indien
  { scope: "region", key: "ocean-indien", section: "seeAndDo", title: "La vie sur les atolls", titleEn: "Life on the atolls", titleEs: "La vida en los atolones", description: "Lagons turquoise, villas sur pilotis et un rythme dicté par les marées plutôt que par l'horloge — l'océan Indien impose sa propre notion du temps. Ici, une journée bien remplie ressemble à une sortie en bateau au lever du soleil, une sieste sur une terrasse privée, et rien d'autre à décider que l'heure du dîner. C'est une région pensée pour ralentir, pas pour cocher des cases.", descriptionEn: "Turquoise lagoons, overwater villas, and a rhythm set by the tides rather than the clock — the Indian Ocean runs on its own sense of time. Here, a full day looks like a sunrise boat trip, a nap on a private deck, and nothing else left to decide but dinner. It's a region built for slowing down, not for ticking boxes.", descriptionEs: "Lagunas turquesas, villas sobre el agua y un ritmo marcado por las mareas en lugar del reloj — el océano Índico impone su propia noción del tiempo. Aquí, un día completo se parece a una salida en barco al amanecer, una siesta en una terraza privada, y nada más que decidir que la hora de la cena. Es una región pensada para bajar el ritmo, no para marcar casillas.", image: `${R2}/blocks/region-oceanindien-atolls.jpg`, order: 1 },
  { scope: "region", key: "ocean-indien", section: "seeAndDo", title: "Sous la surface, un monde à part", titleEn: "Beneath the surface, a world apart", titleEs: "Bajo la superficie, un mundo aparte", description: "Les récifs de l'océan Indien comptent parmi les plus riches de la planète — tortues, raies manta et bancs de poissons multicolores à quelques brasses seulement de la plage. Il suffit d'un masque et d'un tuba pour découvrir un monde presque intact, où le corail reste, dans bien des atolls, remarquablement préservé. Les plongeurs plus expérimentés trouveront des tombants spectaculaires à quelques minutes de bateau du lagon.", descriptionEn: "The Indian Ocean's reefs are among the richest on the planet — turtles, manta rays and multicoloured fish schools just a few strokes from the beach. A mask and snorkel are all it takes to discover an almost untouched world, where the coral remains, in many atolls, remarkably well preserved. More experienced divers will find spectacular drop-offs just a short boat ride from the lagoon.", descriptionEs: "Los arrecifes del océano Índico están entre los más ricos del planeta — tortugas, mantarrayas y bancos de peces multicolores a solo unas brazadas de la playa. Basta una máscara y un tubo para descubrir un mundo casi intacto, donde el coral se mantiene, en muchos atolones, notablemente bien conservado. Los buceadores más experimentados encontrarán caídas espectaculares a pocos minutos en barco desde la laguna.", image: `${R2}/blocks/region-oceanindien-reef.jpg`, order: 2 },
  { scope: "region", key: "ocean-indien", section: "bestOf", title: "Les Maldives", titleEn: "The Maldives", titleEs: "Las Maldivas", description: "L'archipel le plus plat du monde, et l'une des expériences de lagon les plus pures qui soient.", descriptionEn: "The world's flattest archipelago, and one of the purest lagoon experiences there is.", descriptionEs: "El archipiélago más plano del mundo, y una de las experiencias de laguna más puras que existen.", image: `${R2}/blocks/region-oceanindien-maldives.jpg`, order: 1 },
  { scope: "region", key: "ocean-indien", section: "bestOf", title: "Les îles d'Afrique de l'Est", titleEn: "East African islands", titleEs: "Las islas de África Oriental", description: "Seychelles, Maurice et Zanzibar — un chapelet d'îles à la végétation aussi spectaculaire que leurs plages.", descriptionEn: "Seychelles, Mauritius and Zanzibar — a string of islands with vegetation as spectacular as their beaches.", descriptionEs: "Seychelles, Mauricio y Zanzíbar — un rosario de islas con una vegetación tan espectacular como sus playas.", image: `${R2}/blocks/region-oceanindien-eastafrica.jpg`, order: 2 },
];

// ── "Experiences our clients loved" — 3 placeholder story templates, cycled across all 10 pages
// with different sourced photos. Explicitly placeholder, not real client quotes (kept separate
// from the Testimonial model, which stays real-reviews-only). ──
const CLIENT_LOVED_TEMPLATES = [
  {
    title: "Un moment qui ne s'oublie pas",
    titleEn: "A moment that stays with you",
    titleEs: "Un momento que se queda contigo",
    description: "Nos voyageurs reviennent presque toujours avec une histoire précise plutôt qu'un simple souvenir de vacances — un lever de soleil vu du bon endroit, une rencontre qui n'était pas prévue au programme, un silence qu'on n'attendait pas. Ce sont rarement les grands sites eux-mêmes qui marquent le plus, mais l'instant particulier qui s'y est glissé : une table partagée avec une famille locale, une route empruntée seul au petit matin avant l'arrivée des cars. Nous construisons chaque itinéraire en laissant volontairement de la place à ce genre de moment — impossible à planifier au jour près, mais presque toujours au rendez-vous quand on connaît vraiment le terrain. Celle-ci sera bientôt la vôtre.",
    descriptionEn: "Our travellers almost always come back with one specific story rather than a vague holiday memory — a sunrise seen from the right spot, an encounter that wasn't on the itinerary, a silence they didn't expect. It's rarely the big sights themselves that stay with people most, but the particular instant that slipped in around them: a table shared with a local family, a road taken alone early in the morning before the coaches arrive. We build every itinerary with deliberate room for that kind of moment — impossible to schedule to the day, but almost always there when you actually know the ground. This one could soon be yours.",
    descriptionEs: "Nuestros viajeros casi siempre vuelven con una historia concreta, más que con un recuerdo vago de vacaciones — un amanecer visto desde el lugar adecuado, un encuentro que no estaba en el programa, un silencio que no esperaban. Rara vez son los grandes monumentos los que más se recuerdan, sino el instante particular que se coló entre ellos: una mesa compartida con una familia local, una carretera recorrida en solitario temprano por la mañana, antes de que lleguen los autocares. Construimos cada itinerario dejando espacio deliberado para ese tipo de momento — imposible de programar al día exacto, pero casi siempre presente cuando de verdad se conoce el terreno. Esta podría ser pronto la suya.",
  },
  {
    title: "Ralentir, vraiment",
    titleEn: "Actually slowing down",
    titleEs: "Bajar el ritmo, de verdad",
    description: "Pas de liste à cocher, pas d'horaire à respecter — juste une journée pensée pour être vécue à votre rythme. Beaucoup de voyageurs arrivent avec l'habitude de tout enchaîner, un site après l'autre, et repartent avec la sensation d'avoir tout vu sans vraiment rien vécu. Nous préférons l'inverse : un déjeuner qui dure deux heures parce que la conversation le mérite, un après-midi entier passé à un seul endroit plutôt que trois visites bâclées, la liberté de dire « pas aujourd'hui » à une étape du programme. Ce n'est pas de la paresse, c'est un choix — celui de repartir avec moins de photos, mais plus de souvenirs qui comptent vraiment.",
    descriptionEn: "No checklist, no schedule to keep — just a day designed to be lived at your own pace. Many travellers arrive in the habit of rushing from one site to the next and leave feeling like they saw everything without really experiencing much. We prefer the opposite: a lunch that runs two hours because the conversation deserves it, an entire afternoon spent in one place rather than three rushed stops, the freedom to say 'not today' to a step on the plan. It isn't laziness — it's a choice, one that trades a few photos for memories that actually matter.",
    descriptionEs: "Sin lista que marcar, sin horario que cumplir — solo un día pensado para vivirse a su propio ritmo. Muchos viajeros llegan con la costumbre de encadenarlo todo, un lugar tras otro, y se van con la sensación de haberlo visto todo sin haber vivido realmente nada. Nosotros preferimos lo contrario: un almuerzo que dura dos horas porque la conversación lo merece, una tarde entera en un solo lugar en vez de tres visitas apresuradas, la libertad de decir «hoy no» a una etapa del programa. No es pereza, es una elección — la de volver con menos fotos, pero con recuerdos que de verdad importan.",
  },
  {
    title: "Ce que seul un guide sur place sait",
    titleEn: "What only a guide on the ground knows",
    titleEs: "Lo que solo un guía sobre el terreno sabe",
    description: "Le bon horaire, le bon angle, le bon mot à la bonne personne — la différence entre une visite et une vraie rencontre. N'importe quel guide peut réciter des dates et des noms devant un monument ; ce qui compte davantage, c'est de savoir à quelle heure la lumière rend un lieu différent, quelle porte discrète mène à la vue que personne ne voit, ou quel commerçant accepte de raconter son quartier à qui prend le temps de s'arrêter. C'est ce genre de détail, invisible sur une carte ou dans un guide papier, qui transforme une journée de tourisme en un vrai moment de voyage — et c'est exactement ce que nos équipes locales apportent, itinéraire après itinéraire.",
    descriptionEn: "The right time, the right angle, the right word to the right person — the difference between a visit and a real encounter. Any guide can recite dates and names in front of a monument; what matters more is knowing what hour the light changes a place, which unmarked door leads to the view no one else sees, or which shopkeeper will happily talk about their neighbourhood to anyone who takes the time to stop. It's that kind of detail — invisible on a map or in a guidebook — that turns a day of sightseeing into a real travel moment, and it's exactly what our local teams bring, itinerary after itinerary.",
    descriptionEs: "El horario correcto, el ángulo correcto, la palabra correcta a la persona correcta — la diferencia entre una visita y un encuentro real. Cualquier guía puede recitar fechas y nombres frente a un monumento; lo que importa más es saber a qué hora la luz transforma un lugar, qué puerta discreta lleva a la vista que nadie más ve, o qué comerciante está dispuesto a contar su barrio a quien se detiene el tiempo suficiente. Es ese tipo de detalle, invisible en un mapa o en una guía de papel, lo que convierte un día de turismo en un verdadero momento de viaje — y es exactamente lo que aportan nuestros equipos locales, itinerario tras itinerario.",
  },
] as const;

const CLIENT_LOVED_PAGES: { scope: "destination" | "region"; key: string }[] = [
  { scope: "destination", key: "maroc" },
  { scope: "destination", key: "kenya" },
  { scope: "destination", key: "japon" },
  { scope: "destination", key: "islande" },
  { scope: "destination", key: "italie" },
  { scope: "destination", key: "maldives" },
  { scope: "destination", key: "france" },
  { scope: "destination", key: "royaume-uni" },
  { scope: "destination", key: "espagne" },
  { scope: "destination", key: "grece" },
  { scope: "destination", key: "portugal" },
  { scope: "destination", key: "croatie" },
  { scope: "destination", key: "suisse" },
  { scope: "destination", key: "norvege" },
  { scope: "destination", key: "turquie" },
  { scope: "region", key: "afrique" },
  { scope: "region", key: "asie" },
  { scope: "region", key: "europe" },
  { scope: "region", key: "ocean-indien" },
];

let lovedImageCursor = 0;
for (const page of CLIENT_LOVED_PAGES) {
  CLIENT_LOVED_TEMPLATES.forEach((tpl, i) => {
    lovedImageCursor++;
    contentBlocks.push({
      scope: page.scope,
      key: page.key,
      section: "clientLoved",
      title: tpl.title,
      titleEn: tpl.titleEn,
      titleEs: tpl.titleEs,
      description: tpl.description,
      descriptionEn: tpl.descriptionEn,
      descriptionEs: tpl.descriptionEs,
      image: `${R2}/blocks/loved-${String(((lovedImageCursor - 1) % 20) + 1).padStart(2, "0")}.jpg`,
      ctaLabel: "En savoir plus",
      ctaLabelEn: "Read More",
      ctaLabelEs: "Leer más",
      ctaHref: "/reserver",
      order: i + 1,
    });
  });
}

// ── Team members — real names for Morocco (Momo/Hassane/Ahmed, already named in the site's
// mission copy), placeholder specialists elsewhere pending the client assigning real staff via
// the future admin dashboard. Placeholder rows use stock headshots, never a real person's name
// paired with a photo that isn't actually them. ──
type TeamSeed = {
  scope: "destination" | "region";
  key: string;
  name: string;
  role: string;
  roleEn: string;
  roleEs: string;
  photo: string;
  order: number;
};

const teamMembers: TeamSeed[] = [
  { scope: "destination", key: "maroc", name: "Momo", role: "Guide local, Agadir", roleEn: "Local Guide, Agadir", roleEs: "Guía local, Agadir", photo: "", order: 1 },
  { scope: "destination", key: "maroc", name: "Hassane", role: "Guide local, Agadir", roleEn: "Local Guide, Agadir", roleEs: "Guía local, Agadir", photo: "", order: 2 },
  { scope: "destination", key: "maroc", name: "Ahmed", role: "Guide local, Agadir", roleEn: "Local Guide, Agadir", roleEs: "Guía local, Agadir", photo: "", order: 3 },

  { scope: "destination", key: "kenya", name: "Amina", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-01.jpg`, order: 1 },
  { scope: "destination", key: "kenya", name: "David", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-02.jpg`, order: 2 },

  { scope: "destination", key: "japon", name: "Aiko", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-03.jpg`, order: 1 },
  { scope: "destination", key: "japon", name: "Kenji", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-04.jpg`, order: 2 },

  { scope: "destination", key: "islande", name: "Freyja", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-05.jpg`, order: 1 },
  { scope: "destination", key: "islande", name: "Björn", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-06.jpg`, order: 2 },

  { scope: "destination", key: "italie", name: "Giulia", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-07.jpg`, order: 1 },
  { scope: "destination", key: "italie", name: "Marco", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-08.jpg`, order: 2 },

  { scope: "destination", key: "maldives", name: "Aisha", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-09.jpg`, order: 1 },
  { scope: "destination", key: "maldives", name: "Ravi", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-10.jpg`, order: 2 },

  { scope: "region", key: "afrique", name: "Amara", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-11.jpg`, order: 1 },
  { scope: "region", key: "afrique", name: "Kwame", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-12.jpg`, order: 2 },

  { scope: "region", key: "asie", name: "Mei", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-13.jpg`, order: 1 },
  { scope: "region", key: "asie", name: "Arjun", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-14.jpg`, order: 2 },

  { scope: "region", key: "europe", name: "Sofia", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-15.jpg`, order: 1 },
  { scope: "region", key: "europe", name: "Lukas", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-16.jpg`, order: 2 },

  { scope: "region", key: "ocean-indien", name: "Léa", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-17.jpg`, order: 1 },
  { scope: "region", key: "ocean-indien", name: "Sam", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-18.jpg`, order: 2 },

  { scope: "destination", key: "france", name: "Camille", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-01.jpg`, order: 1 },
  { scope: "destination", key: "france", name: "Julien", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-02.jpg`, order: 2 },

  { scope: "destination", key: "royaume-uni", name: "Emma", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-03.jpg`, order: 1 },
  { scope: "destination", key: "royaume-uni", name: "James", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-04.jpg`, order: 2 },

  { scope: "destination", key: "espagne", name: "Lucía", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-05.jpg`, order: 1 },
  { scope: "destination", key: "espagne", name: "Diego", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-06.jpg`, order: 2 },

  { scope: "destination", key: "grece", name: "Elena", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-07.jpg`, order: 1 },
  { scope: "destination", key: "grece", name: "Nikos", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-08.jpg`, order: 2 },

  { scope: "destination", key: "portugal", name: "Beatriz", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-09.jpg`, order: 1 },
  { scope: "destination", key: "portugal", name: "Tiago", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-10.jpg`, order: 2 },

  { scope: "destination", key: "croatie", name: "Ivana", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-11.jpg`, order: 1 },
  { scope: "destination", key: "croatie", name: "Marko", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-12.jpg`, order: 2 },

  { scope: "destination", key: "suisse", name: "Nadia", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-13.jpg`, order: 1 },
  { scope: "destination", key: "suisse", name: "Thomas", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-14.jpg`, order: 2 },

  { scope: "destination", key: "norvege", name: "Ingrid", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-15.jpg`, order: 1 },
  { scope: "destination", key: "norvege", name: "Erik", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-16.jpg`, order: 2 },

  { scope: "destination", key: "turquie", name: "Elif", role: "Spécialiste destination", roleEn: "Destination Specialist", roleEs: "Especialista de destino", photo: `${R2}/team/headshot-17.jpg`, order: 1 },
  { scope: "destination", key: "turquie", name: "Mert", role: "Conseiller voyage", roleEn: "Travel Advisor", roleEs: "Asesor de viaje", photo: `${R2}/team/headshot-18.jpg`, order: 2 },
];

// ── FAQ — a distinct set of 4 questions per page (booking process, what's included, timing,
// customization), each answer written for that specific destination/region. ──
type FaqSeed = {
  scope: "destination" | "region";
  key: string;
  question: string;
  questionEn: string;
  questionEs: string;
  answer: string;
  answerEn: string;
  answerEs: string;
  order: number;
};

function makeFaqSet(
  scope: "destination" | "region",
  key: string,
  place: string,
  placeEn: string,
  placeEs: string,
  bestTime: string,
  bestTimeEn: string,
  bestTimeEs: string
): FaqSeed[] {
  return [
    {
      scope,
      key,
      question: `Quelle est la meilleure période pour visiter ${place} ?`,
      questionEn: `What's the best time to visit ${placeEn}?`,
      questionEs: `¿Cuál es la mejor época para visitar ${placeEs}?`,
      answer: bestTime,
      answerEn: bestTimeEn,
      answerEs: bestTimeEs,
      order: 1,
    },
    {
      scope,
      key,
      question: `Qu'est-ce qui est inclus dans un voyage avec vous ?`,
      questionEn: `What's included in a trip with you?`,
      questionEs: `¿Qué incluye un viaje con ustedes?`,
      answer: "Hébergement, transferts, guide local et les activités listées sur la fiche du voyage — les vols internationaux restent à votre charge.",
      answerEn: "Accommodation, transfers, a local guide and the activities listed on the trip page — international flights are not included.",
      answerEs: "Alojamiento, traslados, guía local y las actividades indicadas en la ficha del viaje — los vuelos internacionales no están incluidos.",
      order: 2,
    },
    {
      scope,
      key,
      question: "Combien de temps à l'avance dois-je réserver ?",
      questionEn: "How far in advance should I book?",
      questionEs: "¿Con cuánta antelación debo reservar?",
      answer: "Nous recommandons 4 à 6 semaines avant le départ en haute saison, un peu moins le reste de l'année.",
      answerEn: "We recommend 4 to 6 weeks ahead of departure in high season, a little less the rest of the year.",
      answerEs: "Recomendamos entre 4 y 6 semanas de antelación en temporada alta, un poco menos el resto del año.",
      order: 3,
    },
    {
      scope,
      key,
      question: "Puis-je personnaliser l'itinéraire ?",
      questionEn: "Can I customize the itinerary?",
      questionEs: "¿Puedo personalizar el itinerario?",
      answer: "Chaque voyage est un point de départ, pas une formule fixe — dites-nous ce que vous voulez voir et nous ajustons le programme.",
      answerEn: "Every trip is a starting point, not a fixed formula — tell us what you want to see and we'll adjust the plan.",
      answerEs: "Cada viaje es un punto de partida, no una fórmula fija — cuéntenos qué quiere ver y ajustamos el programa.",
      order: 4,
    },
  ];
}

const faqs: FaqSeed[] = [
  ...makeFaqSet("destination", "maroc", "le Maroc", "Morocco", "Marruecos",
    "Le printemps (mars-mai) et l'automne (septembre-novembre) offrent les températures les plus agréables, à Marrakech comme dans le désert.",
    "Spring (March–May) and autumn (September–November) offer the most pleasant temperatures, in Marrakech and the desert alike.",
    "La primavera (marzo-mayo) y el otoño (septiembre-noviembre) ofrecen las temperaturas más agradables, tanto en Marrakech como en el desierto."),
  ...makeFaqSet("destination", "kenya", "le Kenya", "Kenya", "Kenia",
    "La saison sèche, de juin à octobre, offre la meilleure visibilité pour l'observation animale ; la grande migration culmine en général entre juillet et septembre.",
    "The dry season, June to October, offers the best wildlife visibility; the great migration usually peaks between July and September.",
    "La temporada seca, de junio a octubre, ofrece la mejor visibilidad para observar animales; la gran migración suele alcanzar su punto álgido entre julio y septiembre."),
  ...makeFaqSet("destination", "japon", "le Japon", "Japan", "Japón",
    "Le printemps (mars-mai, floraison des cerisiers) et l'automne (octobre-novembre, feuillages) sont les périodes les plus recherchées — et les plus belles.",
    "Spring (March–May, cherry blossoms) and autumn (October–November, foliage) are the most sought-after — and most beautiful — times to go.",
    "La primavera (marzo-mayo, floración de los cerezos) y el otoño (octubre-noviembre, follaje) son las épocas más solicitadas — y más bonitas."),
  ...makeFaqSet("destination", "islande", "l'Islande", "Iceland", "Islandia",
    "Pour les aurores boréales, visez septembre à mars ; pour un accès complet aux routes et au soleil de minuit, l'été (juin-août) est idéal.",
    "For the Northern Lights, aim for September to March; for full road access and the midnight sun, summer (June–August) is ideal.",
    "Para las auroras boreales, apunte a entre septiembre y marzo; para acceso completo a las carreteras y el sol de medianoche, el verano (junio-agosto) es ideal."),
  ...makeFaqSet("destination", "italie", "l'Italie", "Italy", "Italia",
    "Le printemps (avril-juin) et le début de l'automne (septembre-octobre) évitent la chaleur et la foule du mois d'août.",
    "Spring (April–June) and early autumn (September–October) avoid August's heat and crowds.",
    "La primavera (abril-junio) y principios de otoño (septiembre-octubre) evitan el calor y las multitudes de agosto."),
  ...makeFaqSet("destination", "maldives", "les Maldives", "the Maldives", "las Maldivas",
    "La saison sèche, de décembre à avril, garantit le ciel le plus dégagé et une mer la plus calme.",
    "The dry season, December to April, guarantees the clearest skies and the calmest seas.",
    "La temporada seca, de diciembre a abril, garantiza el cielo más despejado y el mar más tranquilo."),
  ...makeFaqSet("region", "afrique", "l'Afrique", "Africa", "África",
    "Cela dépend beaucoup du pays visité, mais la saison sèche (généralement juin à octobre) reste la période la plus fiable pour la plupart des safaris.",
    "It depends a lot on the specific country, but the dry season (generally June to October) remains the most reliable window for most safaris.",
    "Depende mucho del país concreto, pero la temporada seca (por lo general de junio a octubre) sigue siendo la ventana más fiable para la mayoría de safaris."),
  ...makeFaqSet("region", "asie", "l'Asie", "Asia", "Asia",
    "Très variable selon la destination, mais la période d'octobre à avril est généralement la plus fraîche et la plus sèche sur une grande partie du continent.",
    "Highly variable by destination, but October to April is generally the coolest and driest window across much of the continent.",
    "Muy variable según el destino, pero de octubre a abril suele ser la ventana más fresca y seca en buena parte del continente."),
  ...makeFaqSet("region", "europe", "l'Europe", "Europe", "Europa",
    "De la fin du printemps au début de l'automne (mai-septembre), la majorité du continent est à son meilleur, avec des variations selon la latitude.",
    "From late spring to early autumn (May–September), most of the continent is at its best, with variation by latitude.",
    "De finales de primavera a principios de otoño (mayo-septiembre), la mayor parte del continente está en su mejor momento, con variaciones según la latitud."),
  ...makeFaqSet("region", "ocean-indien", "l'océan Indien", "the Indian Ocean", "el océano Índico",
    "La région reste chaude toute l'année ; décembre à avril offre généralement le temps le plus sec.",
    "The region stays warm year-round; December to April generally offers the driest weather.",
    "La región se mantiene cálida todo el año; de diciembre a abril suele ofrecer el clima más seco."),
  ...makeFaqSet("destination", "france", "la France", "France", "Francia",
    "Le printemps (avril-juin) et le début de l'automne (septembre-octobre) offrent le meilleur équilibre entre météo agréable et affluence raisonnable.",
    "Spring (April–June) and early autumn (September–October) offer the best balance of pleasant weather and reasonable crowds.",
    "La primavera (abril-junio) y principios de otoño (septiembre-octubre) ofrecen el mejor equilibrio entre buen tiempo y afluencia razonable."),
  ...makeFaqSet("destination", "royaume-uni", "le Royaume-Uni", "the United Kingdom", "el Reino Unido",
    "L'été (juin-août) offre les journées les plus longues et le temps le plus clément, notamment pour les Highlands écossaises.",
    "Summer (June–August) offers the longest days and the mildest weather, especially for the Scottish Highlands.",
    "El verano (junio-agosto) ofrece los días más largos y el clima más suave, sobre todo para las Highlands escocesas."),
  ...makeFaqSet("destination", "espagne", "l'Espagne", "Spain", "España",
    "Le printemps (avril-juin) et l'automne (septembre-octobre) évitent les fortes chaleurs estivales, surtout en Andalousie.",
    "Spring (April–June) and autumn (September–October) avoid the strong summer heat, especially in Andalusia.",
    "La primavera (abril-junio) y el otoño (septiembre-octubre) evitan el fuerte calor del verano, sobre todo en Andalucía."),
  ...makeFaqSet("destination", "grece", "la Grèce", "Greece", "Grecia",
    "Mai-juin et septembre-octobre offrent une mer déjà chaude et bien moins de monde que le cœur de l'été.",
    "May–June and September–October offer already-warm seas with far fewer crowds than the height of summer.",
    "Mayo-junio y septiembre-octubre ofrecen un mar ya cálido y mucha menos gente que en pleno verano."),
  ...makeFaqSet("destination", "portugal", "le Portugal", "Portugal", "Portugal",
    "Le printemps et l'automne offrent des températures douces à Lisbonne comme dans la vallée du Douro, sans la chaleur de plein été.",
    "Spring and autumn offer mild temperatures in both Lisbon and the Douro Valley, without the peak of summer heat.",
    "La primavera y el otoño ofrecen temperaturas suaves tanto en Lisboa como en el valle del Duero, sin el calor de pleno verano."),
  ...makeFaqSet("destination", "croatie", "la Croatie", "Croatia", "Croacia",
    "Juin et septembre offrent une mer chaude et un climat agréable, avec moins d'affluence que juillet-août sur la côte dalmate.",
    "June and September offer warm seas and pleasant weather, with fewer crowds than July–August along the Dalmatian coast.",
    "Junio y septiembre ofrecen un mar cálido y un clima agradable, con menos afluencia que julio-agosto en la costa dálmata."),
  ...makeFaqSet("destination", "suisse", "la Suisse", "Switzerland", "Suiza",
    "L'été (juin-septembre) ouvre l'accès complet aux sentiers de montagne ; l'hiver (décembre-mars) reste idéal pour les sports de neige.",
    "Summer (June–September) opens up full access to mountain trails; winter (December–March) remains ideal for snow sports.",
    "El verano (junio-septiembre) abre el acceso completo a los senderos de montaña; el invierno (diciembre-marzo) sigue siendo ideal para los deportes de nieve."),
  ...makeFaqSet("destination", "norvege", "la Norvège", "Norway", "Noruega",
    "Pour les aurores boréales, visez septembre à mars ; pour les fjords et le soleil de minuit, l'été (juin-août) est idéal.",
    "For the northern lights, aim for September to March; for the fjords and the midnight sun, summer (June–August) is ideal.",
    "Para las auroras boreales, apunte a entre septiembre y marzo; para los fiordos y el sol de medianoche, el verano (junio-agosto) es ideal."),
  ...makeFaqSet("destination", "turquie", "la Turquie", "Turkey", "Turquía",
    "Le printemps (avril-mai) et l'automne (septembre-octobre) offrent le meilleur climat pour Istanbul comme pour les vols en montgolfière en Cappadoce.",
    "Spring (April–May) and autumn (September–October) offer the best weather for both Istanbul and Cappadocia's balloon flights.",
    "La primavera (abril-mayo) y el otoño (septiembre-octubre) ofrecen el mejor clima tanto para Estambul como para los vuelos en globo en Capadocia."),
];

async function main() {
  // Destinations first — tours depend on them.
  const destinationIds: Record<string, string> = {};
  for (const dest of destinations) {
    const row = await db.destination.upsert({
      where: { slug: dest.slug },
      update: dest,
      create: dest,
    });
    destinationIds[dest.slug] = row.id;
  }
  console.log(`Seeded ${destinations.length} destinations.`);

  // Real Agadir tours.
  for (const tour of moroccoTours) {
    const { sections, ...tourData } = tour;
    const row = await db.tour.upsert({
      where: { slug: tourData.slug },
      update: { ...tourData, destinationId: destinationIds["maroc"] },
      create: { ...tourData, currency: "EUR", departureFrom: "Agadir", destinationId: destinationIds["maroc"] },
    });

    await db.tourSection.deleteMany({ where: { tourId: row.id } });
    for (const [i, section] of (sections ?? []).entries()) {
      await db.tourSection.create({ data: { ...section, tourId: row.id, order: i } });
    }
  }
  console.log(`Seeded ${moroccoTours.length} Morocco tours.`);

  // Example worldwide trips + their itinerary days.
  for (const trip of worldTrips) {
    const destinationId = destinationIds[trip.destinationSlug];
    const tourData = { ...trip.tour, destinationId };
    const row = await db.tour.upsert({
      where: { slug: trip.tour.slug as string },
      update: tourData,
      create: tourData as never,
    });

    // Re-create itinerary days each run to avoid duplicating on re-seed.
    await db.itineraryDay.deleteMany({ where: { tourId: row.id } });
    for (const [i, day] of trip.days.entries()) {
      await db.itineraryDay.create({
        data: { ...day, tourId: row.id, order: i },
      });
    }

    // Standard trip-page content (narrative sections + hotel cards) — only for trips that have it.
    await db.tourSection.deleteMany({ where: { tourId: row.id } });
    for (const [i, section] of (trip.sections ?? []).entries()) {
      await db.tourSection.create({ data: { ...section, tourId: row.id, order: i } });
    }
    await db.tourHotel.deleteMany({ where: { tourId: row.id } });
    for (const [i, hotel] of (trip.hotels ?? []).entries()) {
      await db.tourHotel.create({ data: { ...hotel, tourId: row.id, order: i } });
    }
  }
  console.log(`Seeded ${worldTrips.length} world trips with itinerary days.`);

  // "Journey into X" trips (format: "journey") — chaptered by location.
  for (const trip of journeyTrips) {
    const destinationId = destinationIds[trip.destinationSlug];
    const tourData = { ...trip.tour, destinationId };
    const tourRow = await db.tour.upsert({
      where: { slug: trip.tour.slug as string },
      update: tourData,
      create: tourData as never,
    });

    // Re-create chapters + days each run to avoid duplicating on re-seed.
    await db.itineraryDay.deleteMany({ where: { tourId: tourRow.id } });
    await db.journeyChapter.deleteMany({ where: { tourId: tourRow.id } });
    for (const [i, chapter] of trip.chapters.entries()) {
      const { days, ...chapterData } = chapter;
      const chapterRow = await db.journeyChapter.create({
        data: { ...chapterData, tourId: tourRow.id, order: i },
      });
      for (const [j, day] of days.entries()) {
        await db.itineraryDay.create({
          data: { ...day, tourId: tourRow.id, chapterId: chapterRow.id, order: j },
        });
      }
    }
  }
  console.log(`Seeded ${journeyTrips.length} journey trips with chapters and days.`);

  // Region pages (/destinations/[region]).
  const regionIds: Record<string, string> = {};
  for (const region of regions) {
    const row = await db.region.upsert({
      where: { slug: region.slug },
      update: region,
      create: region,
    });
    regionIds[region.slug] = row.id;
  }
  console.log(`Seeded ${regions.length} regions.`);

  function resolveIds(scope: "destination" | "region", key: string) {
    return scope === "destination"
      ? { destinationId: destinationIds[key], regionId: null }
      : { destinationId: null, regionId: regionIds[key] };
  }

  // Content blocks — re-created each run (scoped delete, no stable natural key to upsert on).
  await db.contentBlock.deleteMany({});
  for (const block of contentBlocks) {
    const { scope, key, ...data } = block;
    await db.contentBlock.create({ data: { ...data, ...resolveIds(scope, key) } });
  }
  console.log(`Seeded ${contentBlocks.length} content blocks.`);

  // Team members.
  await db.teamMember.deleteMany({});
  for (const member of teamMembers) {
    const { scope, key, ...data } = member;
    await db.teamMember.create({ data: { ...data, ...resolveIds(scope, key) } });
  }
  console.log(`Seeded ${teamMembers.length} team members.`);

  // FAQs.
  await db.faq.deleteMany({});
  for (const faq of faqs) {
    const { scope, key, ...data } = faq;
    await db.faq.create({ data: { ...data, ...resolveIds(scope, key) } });
  }
  console.log(`Seeded ${faqs.length} FAQs.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
