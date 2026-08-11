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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
