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
] as const;

// ── Real Agadir excursions (Morocco) ────────────────────────────────────────
const moroccoTours = [
  {
    name: "Agadir City Tour et Cable Car",
    nameEn: "Agadir City Tour & Cable Car Ride",
    nameEs: "Tour por Agadir y teleférico",
    slug: "agadir-city-tour-cable-car",
    image: `${R2}/tours/agadir-city-tour-cable-car.jpg`,
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
}> = [
  {
    destinationSlug: "japon",
    tour: {
      name: "Kyoto à Tokyo : le vieux et le nouveau Japon",
      nameEn: "Kyoto to Tokyo: Old Japan, New Japan",
      nameEs: "De Kioto a Tokio: el viejo y el nuevo Japón",
      slug: "japon-kyoto-tokyo",
      image: `${R2}/tours/japon-kyoto-tokyo.jpg`,
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
  },
  {
    destinationSlug: "islande",
    tour: {
      name: "Islande : entre le feu et la glace",
      nameEn: "Iceland: Chasing Fire and Ice",
      nameEs: "Islandia: entre el fuego y el hielo",
      slug: "islande-feu-glace",
      image: `${R2}/tours/islande-feu-glace.jpg`,
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
  },
  {
    destinationSlug: "kenya",
    tour: {
      name: "Kenya : la grande migration",
      nameEn: "Kenya: The Great Migration Safari",
      nameEs: "Kenia: la gran migración",
      slug: "kenya-grande-migration",
      image: `${R2}/tours/kenya-grande-migration.jpg`,
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
  },
  {
    destinationSlug: "italie",
    tour: {
      name: "Italie : Rome, Florence et la côte amalfitaine",
      nameEn: "Italy: Rome, Florence & the Amalfi Coast",
      nameEs: "Italia: Roma, Florencia y la costa de Amalfi",
      slug: "italie-rome-florence-amalfi",
      image: `${R2}/tours/italie-rome-florence-amalfi.jpg`,
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
  },
  {
    destinationSlug: "maldives",
    tour: {
      name: "Maldives : sur pilotis, déconnecté",
      nameEn: "Maldives: Overwater, Unplugged",
      nameEs: "Maldivas: sobre el agua, desconectado",
      slug: "maldives-overwater",
      image: `${R2}/tours/maldives-overwater.jpg`,
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
    description: "Nos voyageurs reviennent souvent avec une histoire précise — un lever de soleil, une rencontre, un silence. Celle-ci sera bientôt la vôtre.",
    descriptionEn: "Our travellers often come back with one specific story — a sunrise, an encounter, a silence. This one could soon be yours.",
    descriptionEs: "Nuestros viajeros suelen volver con una historia concreta — un amanecer, un encuentro, un silencio. Esta podría ser pronto la suya.",
  },
  {
    title: "Ralentir, vraiment",
    titleEn: "Actually slowing down",
    titleEs: "Bajar el ritmo, de verdad",
    description: "Pas de liste à cocher, pas d'horaire à respecter — juste une journée pensée pour être vécue à votre rythme.",
    descriptionEn: "No checklist, no schedule to keep — just a day designed to be lived at your own pace.",
    descriptionEs: "Sin lista que marcar, sin horario que cumplir — solo un día pensado para vivirse a su propio ritmo.",
  },
  {
    title: "Ce que seul un guide sur place sait",
    titleEn: "What only a guide on the ground knows",
    titleEs: "Lo que solo un guía sobre el terreno sabe",
    description: "Le bon horaire, le bon angle, le bon mot à la bonne personne — la différence entre une visite et une vraie rencontre.",
    descriptionEn: "The right time, the right angle, the right word to the right person — the difference between a visit and a real encounter.",
    descriptionEs: "El horario correcto, el ángulo correcto, la palabra correcta a la persona correcta — la diferencia entre una visita y un encuentro real.",
  },
] as const;

const CLIENT_LOVED_PAGES: { scope: "destination" | "region"; key: string }[] = [
  { scope: "destination", key: "maroc" },
  { scope: "destination", key: "kenya" },
  { scope: "destination", key: "japon" },
  { scope: "destination", key: "islande" },
  { scope: "destination", key: "italie" },
  { scope: "destination", key: "maldives" },
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
    await db.tour.upsert({
      where: { slug: tour.slug },
      update: { ...tour, destinationId: destinationIds["maroc"] },
      create: { ...tour, currency: "EUR", departureFrom: "Agadir", destinationId: destinationIds["maroc"] },
    });
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
  }
  console.log(`Seeded ${worldTrips.length} world trips with itinerary days.`);

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
