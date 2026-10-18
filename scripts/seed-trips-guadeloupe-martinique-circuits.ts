// New destinations Guadeloupe and Martinique (Caribbean region), with their 5 Voyamar journey trips:
// self-drive tours, island-hopping, Dominica and St Lucia combinations, and Dream Yacht catamaran
// cruises. Prices are per-person "from" prices; supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-guadeloupe-martinique-circuits.ts
// Requires scripts/upload-images-ant-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "guadeloupe-evasion-guadeloupeenne-grande-terre-les-saintes-9j": ["368738", "367798"],
  "guadeloupe-sur-la-route-perles-de-la-guadeloupe-marie-galante-10j": ["391259"],
  "guadeloupe-croisiere-catamaran-guadeloupe-dominique-les-saintes-9j": ["58635"],
  "martinique-antilles-d-ile-en-ile-martinique-guadeloupe-12j": ["323999", "393524"],
  "martinique-evasion-caribeenne-martinique-sainte-lucie-9j": ["371379", "58538", "58638"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la matinée.", "Arrival in France in the morning.", "Llegada a Francia por la mañana."];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const dep = (city: L3): [L3, L3] => [
  [`${city[0]} – vol retour`, `${city[1]} – flight home`, `${city[2]} – vuelo de regreso`],
  [`Dernières heures au soleil, puis envol de nuit depuis ${city[0]}.`, `A last few hours in the sun, then an overnight flight from ${city[1]}.`, `Últimas horas al sol, y vuelo nocturno desde ${city[2]}.`],
];
const PTP: L3 = ["Pointe-à-Pitre", "Pointe-à-Pitre", "Pointe-à-Pitre"];
const FDF: L3 = ["Fort-de-France", "Fort-de-France", "Fort-de-France"];

const X_GT: L3 = ["La Grande-Terre : la pointe des Châteaux face à l'Atlantique, Saint-François, les plages de Sainte-Anne et la Porte d'Enfer.", "Grande-Terre: the Pointe des Châteaux facing the Atlantic, Saint-François, the beaches of Sainte-Anne and the Porte d'Enfer.", "La Grande-Terre: la punta de los Castillos frente al Atlántico, Saint-François, las playas de Sainte-Anne y la Porte d'Enfer."];
const X_BT: L3 = ["La Basse-Terre : la forêt tropicale du parc national, les chutes du Carbet, la plage de Grande Anse à Deshaies et la réserve Cousteau de Malendure.", "Basse-Terre: the national park's rainforest, the Carbet falls, Grande Anse beach at Deshaies and the Cousteau reserve at Malendure.", "La Basse-Terre: la selva del parque nacional, las cascadas del Carbet, la playa de Grande Anse en Deshaies y la reserva Cousteau de Malendure."];
const X_SAINTES: L3 = ["Les Saintes : la baie de Terre-de-Haut, l'une des plus belles du monde, le fort Napoléon et la plage de Pompierre.", "Les Saintes: the bay of Terre-de-Haut, one of the most beautiful in the world, Fort Napoléon and Pompierre beach.", "Les Saintes: la bahía de Terre-de-Haut, una de las más bellas del mundo, el fuerte Napoleón y la playa de Pompierre."];
const X_MTQ_N: L3 = ["Le nord de la Martinique : la route de la Trace à travers la forêt, la montagne Pelée, Saint-Pierre détruite par l'éruption de 1902 et les distilleries de rhum.", "Northern Martinique: the Route de la Trace through the forest, Mount Pelée, Saint-Pierre destroyed by the 1902 eruption and the rum distilleries.", "El norte de Martinica: la ruta de la Trace a través del bosque, el monte Pelée, Saint-Pierre destruida por la erupción de 1902 y las destilerías de ron."];
const X_MTQ_S: L3 = ["Le sud de la Martinique : le rocher du Diamant, les Anses-d'Arlet et leur ponton, Sainte-Anne et la plage des Salines.", "Southern Martinique: Diamond Rock, the Anses-d'Arlet and their jetty, Sainte-Anne and Les Salines beach.", "El sur de Martinica: la roca del Diamante, las Anses-d'Arlet y su pontón, Sainte-Anne y la playa de Les Salines."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { buildDestinations } = await import("./lib/newDestination");
  const R2 = process.env.NEXT_PUBLIC_R2_URL!;
  const J = (k: string) => `${R2}/journeys/ant-${k}.jpg`;
  const H = (n: number) => `${R2}/team/headshot-${String(n).padStart(2, "0")}.jpg`;
  const L = (n: number) => `${R2}/blocks/loved-${String(n).padStart(2, "0")}.jpg`;
  const CARIB = { slug: "caraibes", name: ["Caraïbes", "Caribbean", "Caribe"] as L3 };
  const DRY: L3 = ["De décembre à avril, pendant la saison sèche, avec des alizés qui rafraîchissent l'air.", "December to April, during the dry season, with trade winds that cool the air.", "De diciembre a abril, durante la estación seca, con vientos alisios que refrescan el aire."];

  const newDestinations = await buildDestinations([
    {
      slug: "guadeloupe", name: ["Guadeloupe", "Guadeloupe", "Guadalupe"], nameIn: "en Guadeloupe", region: CARIB,
      description: ["Un archipel en forme de papillon : les plages de la Grande-Terre, la forêt et les cascades de la Basse-Terre, et les îles des Saintes et de Marie-Galante.", "A butterfly-shaped archipelago: the beaches of Grande-Terre, the forest and waterfalls of Basse-Terre, and the islands of Les Saintes and Marie-Galante.", "Un archipiélago en forma de mariposa: las playas de la Grande-Terre, el bosque y las cascadas de la Basse-Terre, y las islas de Les Saintes y Marie-Galante."],
      descriptionMore: ["En autotour, en séjour ou en catamaran, nous vous aidons à combiner les deux ailes du papillon et les petites îles, au rythme créole.", "As a self-drive, a stay or by catamaran, we help you combine the two wings of the butterfly and the small islands, at a Creole pace.", "En autotour, en estancia o en catamarán, le ayudamos a combinar las dos alas de la mariposa y las islas pequeñas, a ritmo criollo."],
      heroImage: J("dg5"), order: 122,
      seeAndDo: [
        { title: ["Les Saintes", "Les Saintes", "Les Saintes"], description: ["Un petit archipel préservé, sa baie, ses maisons colorées et ses plages, à une heure de bateau.", "A small unspoilt archipelago, its bay, colourful houses and beaches, an hour away by boat.", "Un pequeño archipiélago preservado, su bahía, sus casas de colores y sus playas, a una hora en barco."], image: J("dg5") },
        { title: ["Les chutes du Carbet", "The Carbet falls", "Las cascadas del Carbet"], description: ["Trois cascades au cœur de la forêt tropicale, au pied du volcan de la Soufrière.", "Three waterfalls deep in the rainforest, at the foot of La Soufrière volcano.", "Tres cascadas en el corazón de la selva tropical, al pie del volcán de La Soufrière."], image: J("dg3") },
      ],
      bestOf: [
        { title: ["La Grande-Terre", "Grande-Terre", "La Grande-Terre"], description: ["Plages de sable blanc et falaises de la pointe des Châteaux.", "White sand beaches and the cliffs of the Pointe des Châteaux.", "Playas de arena blanca y acantilados de la punta de los Castillos."], image: J("an6") },
        { title: ["Marie-Galante", "Marie-Galante", "Marie-Galante"], description: ["L'île aux cent moulins, ses champs de canne et ses distilleries.", "The island of a hundred windmills, its cane fields and distilleries.", "La isla de los cien molinos, sus campos de caña y sus destilerías."], image: J("pg6") },
      ],
      lovedImages: [L(17), L(18), L(19)],
      bestTime: { question: ["Quelle est la meilleure période pour visiter la Guadeloupe ?", "What's the best time to visit Guadeloupe?", "¿Cuál es la mejor época para visitar Guadalupe?"], answer: DRY },
      team: [{ name: "Maëva", photo: H(11) }, { name: "Johan", photo: H(12) }],
    },
    {
      slug: "martinique", name: ["Martinique", "Martinique", "Martinica"], nameIn: "en Martinique", region: CARIB,
      description: ["L'île aux fleurs : la montagne Pelée et ses forêts, les distilleries de rhum agricole, les anses du sud et les fonds marins.", "The island of flowers: Mount Pelée and its forests, the agricultural rum distilleries, the southern coves and the sea beds.", "La isla de las flores: el monte Pelée y sus bosques, las destilerías de ron agrícola, las calas del sur y los fondos marinos."],
      descriptionMore: ["Nous combinons la Martinique avec la Guadeloupe, Sainte-Lucie ou les Grenadines en catamaran, pour découvrir plusieurs îles en un seul voyage.", "We combine Martinique with Guadeloupe, St Lucia or the Grenadines by catamaran, to discover several islands in a single trip.", "Combinamos Martinica con Guadalupe, Santa Lucía o las Granadinas en catamarán, para descubrir varias islas en un solo viaje."],
      heroImage: J("ms5"), order: 123,
      seeAndDo: [
        { title: ["La route des rhums", "The rum route", "La ruta del ron"], description: ["Les distilleries de rhum agricole, de la canne au tonneau, et leurs dégustations.", "The agricultural rum distilleries, from cane to cask, and their tastings.", "Las destilerías de ron agrícola, de la caña al tonel, y sus catas."], image: J("ms4") },
        { title: ["Le jardin de Balata", "Balata garden", "El jardín de Balata"], description: ["Un jardin botanique suspendu dans la forêt, ses palmiers, ses balisiers et ses passerelles.", "A botanical garden hanging in the forest, its palms, heliconias and walkways.", "Un jardín botánico suspendido en el bosque, sus palmeras, sus heliconias y sus pasarelas."], image: J("ms7") },
      ],
      bestOf: [
        { title: ["Le nord", "The north", "El norte"], description: ["La montagne Pelée, Saint-Pierre et la forêt tropicale.", "Mount Pelée, Saint-Pierre and the rainforest.", "El monte Pelée, Saint-Pierre y la selva tropical."], image: J("mg3") },
        { title: ["Le sud", "The south", "El sur"], description: ["Les Anses-d'Arlet, le Diamant et la plage des Salines.", "The Anses-d'Arlet, the Diamant and Les Salines beach.", "Las Anses-d'Arlet, el Diamante y la playa de Les Salines."], image: J("ms5") },
      ],
      lovedImages: [L(20), L(1), L(2)],
      bestTime: { question: ["Quelle est la meilleure période pour visiter la Martinique ?", "What's the best time to visit Martinique?", "¿Cuál es la mejor época para visitar Martinica?"], answer: DRY },
      team: [{ name: "Léa", photo: H(13) }, { name: "Kévin", photo: H(14) }],
    },
  ]);

  const S = { label: ["Décembre à avril", "December to April", "Diciembre a abril"] as L3, months: "december,january,february,march,april" };
  const gp = circuitBuilders({ destinationSlug: "guadeloupe", imagePrefix: "ant", season: S });
  const mq = circuitBuilders({ destinationSlug: "martinique", imagePrefix: "ant", season: S });
  const STAY = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtels,Ferries entre les îles${extra}`,
    `Flights from France,Transfers,${n} nights in hotels,Ferries between the islands${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hoteles,Ferris entre las islas${extra}`,
  ];
  const AUTO = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Voiture de location,${n} nuits en hôtels et gîtes,Ferries entre les îles,Carnet de route${extra}`,
    `Flights from France,Rental car,${n} nights in hotels and guesthouses,Ferries between the islands,Road book${extra}`,
    `Vuelos desde Francia,Coche de alquiler,${n} noches en hoteles y casas rurales,Ferris entre las islas,Cuaderno de ruta${extra}`,
  ];
  const CAT: L3 = [
    "Vols depuis la France,7 nuits en cabine double sur un catamaran avec équipage,Skipper et hôtesse,Pension complète à bord,Matériel de snorkeling",
    "Flights from France,7 nights in a double cabin on a crewed catamaran,Skipper and host,Full board on board,Snorkelling equipment",
    "Vuelos desde Francia,7 noches en camarote doble en un catamarán con tripulación,Patrón y azafata,Pensión completa a bordo,Material de esnórquel",
  ];

  const journeyTrips = [
    gp.trip({
      slug: "guadeloupe-evasion-guadeloupeenne-grande-terre-les-saintes-9j",
      name: ["Évasion guadeloupéenne : la Grande-Terre et les Saintes", "Guadeloupe escape: Grande-Terre and Les Saintes", "Evasión guadalupeña: la Grande-Terre y Les Saintes"],
      tagline: ["Cinq nuits au soleil puis deux nuits sur l'archipel des Saintes", "Five nights in the sun, then two nights on the Saintes archipelago", "Cinco noches al sol y dos noches en el archipiélago de Les Saintes"],
      description: [
        "Un séjour en deux temps : cinq nuits en Guadeloupe pour découvrir la Grande-Terre et la Basse-Terre, puis deux nuits aux Saintes. Version Évasion caribéenne, avec trois nuits sur l'île sauvage de la Dominique et ses sources chaudes, à partir de 2 043 € par personne.",
        "A two-part stay: five nights in Guadeloupe to discover Grande-Terre and Basse-Terre, then two nights in Les Saintes. The Caribbean Escape version, with three nights on the wild island of Dominica and its hot springs, from €2,043 per person.",
        "Una estancia en dos partes: cinco noches en Guadalupe para descubrir la Grande-Terre y la Basse-Terre, y dos noches en Les Saintes. Versión Evasión caribeña, con tres noches en la isla salvaje de Dominica y sus aguas termales, desde 2.043 € por persona.",
      ],
      includes: STAY(7),
      price: 1495, nights: 7, departureFrom: "Paris", image: "eg5",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,family", maxGuests: 10, order: -40000,
      chapters: [
        gp.chapter(["La Guadeloupe", "Guadeloupe", "Guadalupe"], ["Les deux ailes du papillon.", "The two wings of the butterfly.", "Las dos alas de la mariposa."],
          ["eg2", "eg3", "eg5", "gd5"],
          [
            gp.day(1, ...arr(PTP), "eg5"),
            gp.day(2, ["La Grande-Terre", "Grande-Terre", "La Grande-Terre"], X_GT, "eg3"),
            gp.day(3, ["La Basse-Terre", "Basse-Terre", "La Basse-Terre"], X_BT, "gd5"),
            gp.day(4, ["Séjour en Guadeloupe", "Stay in Guadeloupe", "Estancia en Guadalupe"], ["Journées libres : plage, plongée, randonnée vers la Soufrière ou excursion en kayak dans la mangrove.", "Free days: beach, diving, a hike up La Soufrière or a kayak trip in the mangrove.", "Días libres: playa, buceo, caminata a La Soufrière o excursión en kayak por el manglar."], "eg2"),
          ]),
        gp.chapter(["Les Saintes", "Les Saintes", "Les Saintes"], ["L'archipel préservé.", "The unspoilt archipelago.", "El archipiélago preservado."],
          ["pg3", "eg6"],
          [
            gp.day(6, ["Guadeloupe – les Saintes", "Guadeloupe – Les Saintes", "Guadalupe – Les Saintes"], ["Traversée en ferry vers Terre-de-Haut.", "Ferry crossing to Terre-de-Haut.", "Travesía en ferri a Terre-de-Haut."], "pg3"),
            gp.day(7, ["Les Saintes", "Les Saintes", "Les Saintes"], X_SAINTES, "eg6"),
            gp.day(8, ...dep(PTP), "eg5"), gp.day(9, T_HOME, HOME, "pg3"),
          ]),
      ],
    }),

    gp.trip({
      slug: "guadeloupe-sur-la-route-perles-de-la-guadeloupe-marie-galante-10j",
      name: ["Sur la route des perles de la Guadeloupe : Basse-Terre, Grande-Terre, Marie-Galante et les Saintes", "On the road to the pearls of Guadeloupe: Basse-Terre, Grande-Terre, Marie-Galante and Les Saintes", "Por la ruta de las perlas de Guadalupe: Basse-Terre, Grande-Terre, Marie-Galante y Les Saintes"],
      tagline: ["Un autotour d'île en île, au volant de votre voiture", "An island-hopping self-drive, at the wheel of your car", "Un autotour de isla en isla, al volante de su coche"],
      description: [
        "La Guadeloupe et ses îles en liberté : trois nuits au Gosier pour le nord de la Basse-Terre, la mangrove et la Grande-Terre, deux nuits à Marie-Galante et ses distilleries, puis deux nuits aux Saintes.",
        "Guadeloupe and its islands at leisure: three nights in Le Gosier for northern Basse-Terre, the mangrove and Grande-Terre, two nights on Marie-Galante and its distilleries, then two nights in Les Saintes.",
        "Guadalupe y sus islas por libre: tres noches en Le Gosier para el norte de la Basse-Terre, el manglar y la Grande-Terre, dos noches en Marie-Galante y sus destilerías, y dos noches en Les Saintes.",
      ],
      includes: AUTO(8),
      price: 2053, nights: 8, departureFrom: "Paris", image: "pg1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family", maxGuests: 6, order: -39999,
      chapters: [
        gp.chapter(["Le Gosier", "Le Gosier", "Le Gosier"], ["Basse-Terre, mangrove et Grande-Terre.", "Basse-Terre, mangrove and Grande-Terre.", "Basse-Terre, manglar y Grande-Terre."],
          ["pg1", "pg4", "pg5"],
          [
            gp.day(1, ["Pointe-à-Pitre – Le Gosier", "Pointe-à-Pitre – Le Gosier", "Pointe-à-Pitre – Le Gosier"], ["Envol pour la Guadeloupe, prise de la voiture et route vers Le Gosier.", "Flight to Guadeloupe, collecting the car and the drive to Le Gosier.", "Vuelo a Guadalupe, recogida del coche y carretera hacia Le Gosier."], "pg5"),
            gp.day(2, ["Le nord de la Basse-Terre", "Northern Basse-Terre", "El norte de la Basse-Terre"], X_BT, "pg1"),
            gp.day(3, ["La mangrove", "The mangrove", "El manglar"], ["La mangrove du Grand Cul-de-Sac marin en kayak ou en bateau, et ses îlets.", "The Grand Cul-de-Sac marine mangrove by kayak or boat, and its islets.", "El manglar del Grand Cul-de-Sac marino en kayak o en barco, y sus islotes."], "pg5"),
            gp.day(4, ["La Grande-Terre", "Grande-Terre", "La Grande-Terre"], X_GT, "pg4"),
          ]),
        gp.chapter(["Marie-Galante et les Saintes", "Marie-Galante and Les Saintes", "Marie-Galante y Les Saintes"], ["Les petites îles.", "The small islands.", "Las islas pequeñas."],
          ["pg6", "pg3"],
          [
            gp.day(5, ["Guadeloupe – Marie-Galante", "Guadeloupe – Marie-Galante", "Guadalupe – Marie-Galante"], ["Traversée vers Marie-Galante, l'île aux cent moulins.", "Crossing to Marie-Galante, the island of a hundred windmills.", "Travesía a Marie-Galante, la isla de los cien molinos."], "pg6"),
            gp.day(6, ["Marie-Galante", "Marie-Galante", "Marie-Galante"], ["Les plages de Capesterre et de l'anse Canot, les moulins, les distilleries Bielle et Père Labat.", "The beaches of Capesterre and Anse Canot, the windmills, the Bielle and Père Labat distilleries.", "Las playas de Capesterre y de la anse Canot, los molinos, las destilerías Bielle y Père Labat."], "pg6"),
            gp.day(7, ["Marie-Galante – les Saintes", "Marie-Galante – Les Saintes", "Marie-Galante – Les Saintes"], ["Traversée vers les Saintes.", "Crossing to Les Saintes.", "Travesía a Les Saintes."], "pg3"),
            gp.day(8, ["Les Saintes", "Les Saintes", "Les Saintes"], X_SAINTES, "pg3"),
            gp.day(9, ...dep(PTP), "pg1"), gp.day(10, T_HOME, HOME, "pg4"),
          ]),
      ],
    }),

    gp.trip({
      slug: "guadeloupe-croisiere-catamaran-guadeloupe-dominique-les-saintes-9j",
      name: ["Croisière en catamaran : Marie-Galante, la Dominique, les îlets Pigeon et les Saintes", "Catamaran cruise: Marie-Galante, Dominica, the Pigeon islets and Les Saintes", "Crucero en catamarán: Marie-Galante, Dominica, los islotes Pigeon y Les Saintes"],
      tagline: ["Une semaine à la voile avec équipage, de mouillage en mouillage", "A week under sail with a crew, from anchorage to anchorage", "Una semana a vela con tripulación, de fondeadero en fondeadero"],
      description: [
        "Une croisière Dream Yacht en catamaran avec skipper et hôtesse : Marie-Galante, deux jours sur l'île sauvage de la Dominique, la réserve Cousteau aux îlets Pigeon, deux jours aux Saintes, puis l'îlet du Gosier.",
        "A Dream Yacht cruise by catamaran with a skipper and host: Marie-Galante, two days on the wild island of Dominica, the Cousteau reserve at the Pigeon islets, two days in Les Saintes, then the Îlet du Gosier.",
        "Un crucero Dream Yacht en catamarán con patrón y azafata: Marie-Galante, dos días en la isla salvaje de Dominica, la reserva Cousteau en los islotes Pigeon, dos días en Les Saintes, y el islote del Gosier.",
      ],
      includes: CAT,
      price: 2509, nights: 7, departureFrom: "Nantes", image: "dg1",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 10, order: -39998,
      chapters: [
        gp.chapter(["La croisière", "The cruise", "El crucero"], ["D'île en île à la voile.", "Island to island under sail.", "De isla en isla a vela."],
          ["dg1", "dg2", "dg3", "dg4", "dg5", "dg6", "dg7"],
          [
            gp.day(1, ["Pointe-à-Pitre – Marie-Galante", "Pointe-à-Pitre – Marie-Galante", "Pointe-à-Pitre – Marie-Galante"], ["Envol pour la Guadeloupe, embarquement sur le catamaran et navigation vers Marie-Galante.", "Flight to Guadeloupe, boarding the catamaran and sailing to Marie-Galante.", "Vuelo a Guadalupe, embarque en el catamarán y navegación hacia Marie-Galante."], "dg1"),
            gp.day(2, ["Marie-Galante – la Dominique", "Marie-Galante – Dominica", "Marie-Galante – Dominica"], ["Traversée vers la Dominique, l'île nature des Caraïbes.", "Crossing to Dominica, the nature island of the Caribbean.", "Travesía a Dominica, la isla naturaleza del Caribe."], "dg7"),
            gp.day(3, ["La Dominique", "Dominica", "Dominica"], ["La rivière Indienne en barque, les cascades et les sources chaudes de la forêt tropicale.", "The Indian River by rowing boat, the waterfalls and hot springs of the rainforest.", "El río Indio en barca, las cascadas y las aguas termales de la selva tropical."], "dg3"),
            gp.day(4, ["Îlets Pigeon", "The Pigeon islets", "Islotes Pigeon"], ["Retour en Guadeloupe et snorkeling dans la réserve Cousteau, parmi les tortues et les coraux.", "Back to Guadeloupe and snorkelling in the Cousteau reserve, among turtles and corals.", "Regreso a Guadalupe y esnórquel en la reserva Cousteau, entre tortugas y corales."], "dg4"),
            gp.day(5, ["Les Saintes", "Les Saintes", "Les Saintes"], X_SAINTES, "dg5"),
            gp.day(6, ["Les Saintes", "Les Saintes", "Les Saintes"], ["Journée au mouillage, baignade et randonnée jusqu'au Chameau.", "A day at anchor, swimming and a hike up the Chameau.", "Un día fondeados, baño y caminata hasta el Chameau."], "dg2"),
            gp.day(7, ["Îlet du Gosier", "Îlet du Gosier", "Islote del Gosier"], ["Navigation vers l'îlet du Gosier et son phare.", "Sailing to the Îlet du Gosier and its lighthouse.", "Navegación hacia el islote del Gosier y su faro."], "dg6"),
            gp.day(8, ...dep(PTP), "dg1"), gp.day(9, T_HOME, HOME, "dg5"),
          ]),
      ],
    }),

    mq.trip({
      slug: "martinique-antilles-d-ile-en-ile-martinique-guadeloupe-12j",
      name: ["Les Antilles d'île en île : la Martinique, la Guadeloupe et les Saintes", "The Antilles island by island: Martinique, Guadeloupe and Les Saintes", "Las Antillas de isla en isla: Martinica, Guadalupe y Les Saintes"],
      tagline: ["Deux îles françaises des Caraïbes et leur archipel, en douze jours", "Two French Caribbean islands and their archipelago, in twelve days", "Dos islas francesas del Caribe y su archipiélago, en doce días"],
      description: [
        "Un combiné des Antilles : le nord créole et le sud de la Martinique, le vol vers la Guadeloupe, la Grande-Terre et la Basse-Terre, puis deux nuits aux Saintes. Version autotour (Sur la route : Martinique, Guadeloupe et les Saintes, 17 jours), du Prêcheur à Deshaies, à partir de 2 923 € par personne.",
        "An Antilles combination: the Creole north and the south of Martinique, the flight to Guadeloupe, Grande-Terre and Basse-Terre, then two nights in Les Saintes. Self-drive version (On the road: Martinique, Guadeloupe and Les Saintes, 17 days), from Le Prêcheur to Deshaies, from €2,923 per person.",
        "Un combinado de las Antillas: el norte criollo y el sur de Martinica, el vuelo a Guadalupe, la Grande-Terre y la Basse-Terre, y dos noches en Les Saintes. Versión autotour (En ruta: Martinica, Guadalupe y Les Saintes, 17 días), de Le Prêcheur a Deshaies, desde 2.923 € por persona.",
      ],
      includes: STAY(10, ",Vol Fort-de-France – Pointe-à-Pitre,Excursions du programme"),
      price: 3093, nights: 10, departureFrom: "Paris", image: "an6",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family", maxGuests: 20, order: -39997,
      chapters: [
        mq.chapter(["La Martinique", "Martinique", "Martinica"], ["Le nord créole et le sud.", "The Creole north and the south.", "El norte criollo y el sur."],
          ["an3", "an4", "an5", "mg3"],
          [
            mq.day(1, ...arr(FDF), "an3"),
            mq.day(2, ["Le nord créole", "The Creole north", "El norte criollo"], X_MTQ_N, "mg3"),
            mq.day(3, ["Journée libre", "A free day", "Día libre"], ["Journée libre à la plage ou à la découverte des marchés créoles.", "A free day on the beach or discovering the Creole markets.", "Día libre en la playa o descubriendo los mercados criollos."], "an4"),
            mq.day(4, ["Le sud impérial", "The imperial south", "El sur imperial"], X_MTQ_S, "an5"),
          ]),
        mq.chapter(["La Guadeloupe et les Saintes", "Guadeloupe and Les Saintes", "Guadalupe y Les Saintes"], ["Le papillon et son archipel.", "The butterfly and its archipelago.", "La mariposa y su archipiélago."],
          ["an6", "an1", "dg5", "mg5"],
          [
            mq.day(5, ["Fort-de-France – Pointe-à-Pitre", "Fort-de-France – Pointe-à-Pitre", "Fort-de-France – Pointe-à-Pitre"], ["Vol vers la Guadeloupe.", "Flight to Guadeloupe.", "Vuelo a Guadalupe."], "an1"),
            mq.day(6, ["La Grande-Terre", "Grande-Terre", "La Grande-Terre"], X_GT, "an6"),
            mq.day(7, ["Journée libre", "A free day", "Día libre"], ["Journée libre au Gosier.", "A free day in Le Gosier.", "Día libre en Le Gosier."], "an1"),
            mq.day(8, ["La Basse-Terre", "Basse-Terre", "La Basse-Terre"], X_BT, "mg5"),
            mq.day(9, ["Le Gosier – les Saintes", "Le Gosier – Les Saintes", "Le Gosier – Les Saintes"], ["Traversée en ferry vers les Saintes.", "Ferry crossing to Les Saintes.", "Travesía en ferri a Les Saintes."], "dg5"),
            mq.day(10, ["Les Saintes", "Les Saintes", "Les Saintes"], X_SAINTES, "dg5"),
            mq.day(11, ...dep(PTP), "an6"), mq.day(12, T_HOME, HOME, "an3"),
          ]),
      ],
    }),

    mq.trip({
      slug: "martinique-evasion-caribeenne-martinique-sainte-lucie-9j",
      name: ["Évasion caribéenne : la Martinique et Sainte-Lucie", "Caribbean escape: Martinique and St Lucia", "Evasión caribeña: Martinica y Santa Lucía"],
      tagline: ["L'île aux fleurs, puis les Pitons de Sainte-Lucie", "The island of flowers, then the Pitons of St Lucia", "La isla de las flores, y los Pitones de Santa Lucía"],
      description: [
        "Un séjour combiné : quatre nuits en Martinique, puis le ferry vers Sainte-Lucie et trois nuits au pied des Pitons, entre volcan, sources chaudes et plages. Aussi en croisière Dream Yacht dans les Grenadines au départ de la Martinique, par Bequia, Mayreau et les Tobago Cays, en 9 jours à partir de 2 706 € ou en 12 jours à partir de 3 213 € par personne.",
        "A combined stay: four nights in Martinique, then the ferry to St Lucia and three nights at the foot of the Pitons, between volcano, hot springs and beaches. Also as a Dream Yacht cruise in the Grenadines from Martinique, via Bequia, Mayreau and the Tobago Cays, in 9 days from €2,706 or 12 days from €3,213 per person.",
        "Una estancia combinada: cuatro noches en Martinica, y el ferri a Santa Lucía y tres noches al pie de los Pitones, entre volcán, aguas termales y playas. También en crucero Dream Yacht por las Granadinas desde Martinica, por Bequia, Mayreau y los Tobago Cays, en 9 días desde 2.706 € o en 12 días desde 3.213 € por persona.",
      ],
      includes: STAY(7),
      price: 2563, nights: 7, departureFrom: "Paris", image: "ms1",
      theme: "relax", feeling: "contentment", travelerTypes: "couples", maxGuests: 10, order: -39996,
      chapters: [
        mq.chapter(["La Martinique", "Martinique", "Martinica"], ["L'île aux fleurs.", "The island of flowers.", "La isla de las flores."],
          ["ms5", "mg3", "ms4", "ms7"],
          [
            mq.day(1, ...arr(FDF), "ms5"),
            mq.day(2, ["Séjour en Martinique", "Stay in Martinique", "Estancia en Martinica"], X_MTQ_N, "mg3"),
            mq.day(3, ["Séjour en Martinique", "Stay in Martinique", "Estancia en Martinica"], X_MTQ_S, "ms4"),
            mq.day(4, ["Séjour en Martinique", "Stay in Martinique", "Estancia en Martinica"], ["Journée libre : le jardin de Balata, une sortie en mer avec les dauphins ou la plage.", "A free day: Balata garden, a boat trip with the dolphins or the beach.", "Día libre: el jardín de Balata, una salida al mar con los delfines o la playa."], "ms7"),
          ]),
        mq.chapter(["Sainte-Lucie", "St Lucia", "Santa Lucía"], ["Les Pitons et la Soufrière.", "The Pitons and Soufrière.", "Los Pitones y Soufrière."],
          ["ms1", "ms2", "ms6", "dm3"],
          [
            mq.day(5, ["Martinique – Sainte-Lucie", "Martinique – St Lucia", "Martinica – Santa Lucía"], ["Traversée en ferry vers Sainte-Lucie.", "Ferry crossing to St Lucia.", "Travesía en ferri a Santa Lucía."], "ms2"),
            mq.day(6, ["Sainte-Lucie", "St Lucia", "Santa Lucía"], ["Les Pitons classés par l'Unesco, le volcan de la Soufrière et ses bains de boue chaude, la cascade de Diamond.", "The UNESCO-listed Pitons, the Soufrière volcano and its hot mud baths, the Diamond waterfall.", "Los Pitones declarados por la Unesco, el volcán de Soufrière y sus baños de lodo caliente, la cascada Diamond."], "ms1"),
            mq.day(7, ["Sainte-Lucie", "St Lucia", "Santa Lucía"], ["Journée libre : snorkeling à Anse Chastanet, Rodney Bay ou randonnée sur le Gros Piton.", "A free day: snorkelling at Anse Chastanet, Rodney Bay or a hike up Gros Piton.", "Día libre: esnórquel en Anse Chastanet, Rodney Bay o caminata al Gros Piton."], "ms6"),
            mq.day(8, ["Sainte-Lucie – Martinique – vol retour", "St Lucia – Martinique – flight home", "Santa Lucía – Martinica – vuelo de regreso"], ["Retour en ferry vers la Martinique et envol de nuit pour la France.", "Ferry back to Martinique and an overnight flight to France.", "Regreso en ferri a Martinica y vuelo nocturno a Francia."], "dm3"),
            mq.day(9, T_HOME, HOME, "ms5"),
          ]),
      ],
    }),
  ];

  const { runSeedBatch, disconnect } = await import("./lib/seedTripsRunner");
  try {
    await runSeedBatch({ newDestinations, newStandardTrips: [], newJourneyTrips: journeyTrips });
    console.log("\nDone.");
  } finally {
    await disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
