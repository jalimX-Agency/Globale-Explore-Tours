// Malaysia circuits — 7 journey-format trips for the existing "malaisie" destination: the guided
// "Joyaux de la Malaisie", three private tours, a self-drive and two Kuala Lumpur + island
// combinations. Pre-tours, extensions and longer beach stays are described inside each trip.
// Prices are per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-malaisie-circuits.ts
// Requires scripts/upload-images-malaisie-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "malaisie-joyaux-malacca-ipoh-penang-10j": ["385538", "386920", "386924", "386922", "386439", "386925", "386478", "386479"],
  "malaisie-a-la-folie-taman-negara-cameron-penang-prive-10j": ["374118"],
  "malaisie-passion-taman-negara-tioman-prive-10j": ["372662"],
  "malaisie-sur-la-route-autotour-malacca-penang-10j": ["374218", "379058", "394178", "379078"],
  "malaisie-trio-malacca-kuala-lumpur-langkawi-prive-10j": ["374238"],
  "malaisie-kuala-lumpur-langkawi-rebak-10j": ["373038"],
  "malaisie-kuala-lumpur-perhentian-10j": ["372838"],
};

// ── Shared texts ──
const T_FLY: L3 = ["Envol pour la Malaisie", "Flight to Malaysia", "Vuelo a Malasia"];
const FLY: L3 = ["Envol à destination de Kuala Lumpur. Dîner et nuit à bord.", "Flight to Kuala Lumpur. Dinner and night on board.", "Vuelo con destino a Kuala Lumpur. Cena y noche a bordo."];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_KL: L3 = ["Arrivée à Kuala Lumpur", "Arrival in Kuala Lumpur", "Llegada a Kuala Lumpur"];
const KL: L3 = [
  "Accueil à l'aéroport et transfert à votre hôtel en ville. Temps libre pour vos premiers pas dans la capitale.",
  "Welcome at the airport and transfer to your hotel in the city. Free time for your first steps in the capital.",
  "Recibimiento en el aeropuerto y traslado a su hotel en la ciudad. Tiempo libre para sus primeros pasos en la capital.",
];
const T_KL_FREE: L3 = ["Kuala Lumpur, journée libre", "Kuala Lumpur, free day", "Kuala Lumpur, jornada libre"];
const KL_FREE: L3 = [
  "Journée libre pour découvrir la ville à votre rythme : les tours Petronas, les grottes de Batu ou la place Merdeka et le quartier colonial.",
  "A free day to discover the city at your own pace: the Petronas Towers, the Batu Caves or Merdeka Square and the colonial quarter.",
  "Jornada libre para descubrir la ciudad a su ritmo: las torres Petronas, las cuevas de Batu o la plaza Merdeka y el barrio colonial.",
];
const T_TAMAN: L3 = ["En bateau vers le Taman Negara", "By boat to Taman Negara", "En barco hacia el Taman Negara"];
const TAMAN: L3 = [
  "Route vers la jetée de Kuala Tembeling, puis environ 2 heures en bateau de bois traditionnel sur la rivière, à travers la jungle du parc national de Taman Negara, jusqu'à Kuala Tahan. Le soir, marche nocturne avec un guide naturaliste anglophone.",
  "Drive to the jetty, then about 2 hours by traditional wooden boat up the river, through the jungle of Taman Negara National Park, to Kuala Tahan. In the evening, a night walk with an English-speaking naturalist guide.",
  "Carretera hasta el embarcadero y unas 2 horas en barco tradicional de madera por el río, a través de la selva del parque nacional de Taman Negara, hasta Kuala Tahan. Por la noche, caminata nocturna con un guía naturalista de habla inglesa.",
];
const T_TAMAN_DAY: L3 = ["Taman Negara : Teresek Hill et Lata Berkoh", "Taman Negara: Teresek Hill and Lata Berkoh", "Taman Negara: Teresek Hill y Lata Berkoh"];
const TAMAN_DAY: L3 = [
  "Randonnée jusqu'à Teresek Hill et sa vue sur la forêt tropicale. L'après-midi, bateau sur la rivière Tahan jusqu'aux cascades de Lata Berkoh, baignade dans les bassins naturels et sanctuaire des poissons ikan kelah.",
  "A hike up Teresek Hill and its view over the rainforest. In the afternoon, a boat up the Tahan river to the Lata Berkoh falls, a swim in the natural pools and the ikan kelah fish sanctuary.",
  "Caminata hasta Teresek Hill y su vista sobre la selva tropical. Por la tarde, barco por el río Tahan hasta las cascadas de Lata Berkoh, baño en las pozas naturales y santuario de los peces ikan kelah.",
];
const T_MALACCA: L3 = ["Arrivée à Kuala Lumpur – Malacca", "Arrival in Kuala Lumpur – Malacca", "Llegada a Kuala Lumpur – Malaca"];
const MALACCA: L3 = [
  "Accueil à l'aéroport et route vers Malacca (environ 2 h à 2 h 30), cœur historique du pays, classé à l'Unesco : un mélange d'héritages portugais, hollandais, britannique, malais et chinois. Temps libre.",
  "Welcome at the airport and drive to Malacca (about 2 to 2.5 hours), the country's historic heart, a UNESCO site: a mix of Portuguese, Dutch, British, Malay and Chinese heritage. Free time.",
  "Recibimiento en el aeropuerto y carretera hacia Malaca (unas 2 h a 2 h 30), corazón histórico del país, inscrito en la Unesco: una mezcla de herencias portuguesa, holandesa, británica, malaya y china. Tiempo libre.",
];
const T_BEACH: L3 = ["Séjour plage, journée libre", "Beach stay, free day", "Estancia de playa, jornada libre"];
const T_BEACH_HOME: L3 = ["Fin du séjour – vol retour", "End of the stay – flight home", "Fin de la estancia – vuelo de regreso"];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "malaisie",
    imagePrefix: "malaisie",
    season: { label: ["Déc à avril", "Dec to April", "Dic a abr"], months: "december,january,february,march,april" },
  });
  // Tioman and the Perhentian islands are on the east coast, whose dry season runs from March.
  const east = circuitBuilders({
    destinationSlug: "malaisie",
    imagePrefix: "malaisie",
    season: { label: ["Mars à sept", "March to Sept", "Mar a sept"], months: "march,april,may,june,july,august,september" },
  });

  const journeyTrips = [
    // ───────────── 1. Joyaux de la Malaisie — 10J/7N ─────────────
    trip({
      slug: "malaisie-joyaux-malacca-ipoh-penang-10j",
      name: ["Joyaux de la Malaisie : Malacca, Kuala Lumpur, Ipoh et Penang", "Jewels of Malaysia: Malacca, Kuala Lumpur, Ipoh and Penang", "Joyas de Malasia: Malaca, Kuala Lumpur, Ipoh y Penang"],
      tagline: ["Le circuit accompagné de la péninsule, des remparts de Malacca à la vieille ville de George Town", "The guided tour of the peninsula, from the ramparts of Malacca to old George Town", "El circuito acompañado de la península, de las murallas de Malaca al casco antiguo de George Town"],
      description: [
        "La Malaisie péninsulaire avec un guide francophone : Malacca et sa croisière sur la rivière, Kuala Lumpur en une journée complète jusqu'à la passerelle des tours Petronas, les grottes de Batu, Kellie's Castle et la vieille ville d'Ipoh, une journée de détente aux sources chaudes de Banjaran, la mosquée Ubudiah de Kuala Kangsar, puis Penang : le temple Kek Lok Si, la Blue Mansion, les maisons de clan et le village sur pilotis de Chew Jetty. Avant le circuit : 2 nuits à Kuala Lumpur (à partir de 2 579 € par personne), 3 nuits au Taman Negara (3 106 €) ou Singapour (3 155 €) ; après : Langkawi (2 878 €), Penang (2 922 €), Lumut (2 990 €) ou Bornéo et ses orangs-outans (3 174 €).",
        "Peninsular Malaysia with a French-speaking guide: Malacca and its river cruise, a full day in Kuala Lumpur up to the Petronas Towers skybridge, the Batu Caves, Kellie's Castle and Ipoh's old town, a relaxing day at the Banjaran hot springs, the Ubudiah mosque in Kuala Kangsar, then Penang: Kek Lok Si temple, the Blue Mansion, the clan houses and the stilt village of Chew Jetty. Before the tour: 2 nights in Kuala Lumpur (from €2,579 per person), 3 nights in Taman Negara (€3,106) or Singapore (€3,155); after: Langkawi (€2,878), Penang (€2,922), Lumut (€2,990) or Borneo and its orangutans (€3,174).",
        "La Malasia peninsular con un guía francófono: Malaca y su crucero por el río, Kuala Lumpur en una jornada completa hasta la pasarela de las torres Petronas, las cuevas de Batu, Kellie's Castle y el casco antiguo de Ipoh, un día de descanso en las aguas termales de Banjaran, la mezquita Ubudiah de Kuala Kangsar y Penang: el templo Kek Lok Si, la Blue Mansion, las casas de clan y el pueblo sobre pilotes de Chew Jetty. Antes del circuito: 2 noches en Kuala Lumpur (desde 2.579 € por persona), 3 noches en el Taman Negara (3.106 €) o Singapur (3.155 €); después: Langkawi (2.878 €), Penang (2.922 €), Lumut (2.990 €) o Borneo y sus orangutanes (3.174 €).",
      ],
      includes: [
        "Vols depuis la France (retour depuis Penang),Transferts aéroport,7 nuits en hôtels 3* et 4*,7 petits-déjeuners et 4 déjeuners,Visites et entrées du programme,Guide francophone (ou anglophone selon disponibilité)",
        "Flights from France (return from Penang),Airport transfers,7 nights in 3* and 4* hotels,7 breakfasts and 4 lunches,Visits and entrance fees in the programme,French-speaking guide (or English-speaking depending on availability)",
        "Vuelos desde Francia (regreso desde Penang),Traslados al aeropuerto,7 noches en hoteles de 3* y 4*,7 desayunos y 4 almuerzos,Visitas y entradas del programa,Guía francófono (o de habla inglesa según disponibilidad)",
      ],
      price: 2485, nights: 7, departureFrom: "Paris", image: "jo2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 33, order: -78000,
      chapters: [
        chapter(["Malacca et Kuala Lumpur", "Malacca and Kuala Lumpur", "Malaca y Kuala Lumpur"],
          ["La ville coloniale, puis la capitale de long en large.", "The colonial town, then the capital from end to end.", "La ciudad colonial y la capital de punta a punta."],
          ["bo2", "ro2", "jo2", "bo4", "tn7"],
          [
            day(1, T_FLY, FLY, "ro4"),
            day(2, T_MALACCA, MALACCA, "tr3"),
            day(3, ["Malacca – Kuala Lumpur", "Malacca – Kuala Lumpur", "Malaca – Kuala Lumpur"], ["À pied dans Malacca avec votre guide : l'église Saint-Pierre, les ruines de Saint-Paul et la porte A Famosa, puis une croisière sur la rivière et la rue Jonker. Déjeuner, puis route vers Kuala Lumpur.", "On foot through Malacca with your guide: St Peter's church, the ruins of St Paul's and the A Famosa gate, then a river cruise and Jonker Street. Lunch, then drive to Kuala Lumpur.", "A pie por Malaca con su guía: la iglesia de San Pedro, las ruinas de San Pablo y la puerta A Famosa, un crucero por el río y la calle Jonker. Almuerzo y carretera hacia Kuala Lumpur."], "bo2"),
            day(4, ["Kuala Lumpur et les tours Petronas", "Kuala Lumpur and the Petronas Towers", "Kuala Lumpur y las torres Petronas"], ["La mosquée Jamek, le bâtiment Sultan Abdul Samad et la place Merdeka, l'ancienne gare, la Mosquée nationale, Little India et le temple chinois Thean Hou. Déjeuner, Chinatown, puis la passerelle et l'observatoire du 86e étage des tours Petronas.", "Jamek mosque, the Sultan Abdul Samad building and Merdeka Square, the old railway station, the National Mosque, Little India and the Chinese temple of Thean Hou. Lunch, Chinatown, then the skybridge and the 86th-floor observatory of the Petronas Towers.", "La mezquita Jamek, el edificio Sultan Abdul Samad y la plaza Merdeka, la antigua estación, la Mezquita Nacional, Little India y el templo chino Thean Hou. Almuerzo, Chinatown y la pasarela y el mirador del piso 86 de las torres Petronas."], "jo2"),
          ]),
        chapter(["Batu, Ipoh et les sources chaudes", "Batu, Ipoh and the hot springs", "Batu, Ipoh y las aguas termales"],
          ["Le grand sanctuaire hindou, la ville de l'étain et une journée de détente.", "The great Hindu shrine, the tin town and a day to unwind.", "El gran santuario hindú, la ciudad del estaño y un día de descanso."],
          ["jo1", "jo4", "bo10"],
          [
            day(5, ["Batu Caves – Kellie's Castle – Ipoh", "Batu Caves – Kellie's Castle – Ipoh", "Batu Caves – Kellie's Castle – Ipoh"], ["Les 272 marches colorées des grottes de Batu, plus grand sanctuaire hindou du pays, gardé par la statue dorée de Murugan. Arrêt à Kellie's Castle, puis Ipoh, ancienne « ville des millionnaires » de l'étain, sa vieille ville et Concubine Lane.", "The 272 colourful steps of the Batu Caves, the country's largest Hindu shrine, guarded by the golden statue of Murugan. A stop at Kellie's Castle, then Ipoh, the old tin-rich 'town of millionaires', its old town and Concubine Lane.", "Los 272 escalones de colores de las cuevas de Batu, el mayor santuario hindú del país, custodiado por la estatua dorada de Murugan. Parada en Kellie's Castle e Ipoh, la antigua «ciudad de los millonarios» del estaño, su casco antiguo y Concubine Lane."], "jo1"),
            day(6, ["Les sources chaudes de Banjaran", "The Banjaran hot springs", "Las aguas termales de Banjaran"], ["Journée au Banjaran Hot Springs Retreat, entre falaises calcaires et jungle : sources chaudes, bain froid et grottes naturelles, avec un bon de 40 USD pour un soin ou un déjeuner.", "A day at the Banjaran Hot Springs Retreat, between limestone cliffs and jungle: hot springs, a cold plunge and natural caves, with a USD 40 voucher for a treatment or lunch.", "Jornada en el Banjaran Hot Springs Retreat, entre acantilados calizos y selva: aguas termales, baño frío y cuevas naturales, con un bono de 40 USD para un tratamiento o un almuerzo."], "jo4"),
          ]),
        chapter(["Penang", "Penang", "Penang"],
          ["La « perle de l'Orient » et la vieille ville de George Town.", "The 'Pearl of the Orient' and old George Town.", "La «perla de Oriente» y el casco antiguo de George Town."],
          ["bo7", "jo3", "fo6", "bo6", "ro6"],
          [
            day(7, ["Kuala Kangsar – Penang", "Kuala Kangsar – Penang", "Kuala Kangsar – Penang"], ["La mosquée Ubudiah de Kuala Kangsar, puis l'île de Penang : le temple Kek Lok Si, plus grand ensemble bouddhiste d'Asie du Sud-Est, et la Blue Mansion, demeure de Cheong Fatt Tze.", "The Ubudiah mosque in Kuala Kangsar, then Penang island: Kek Lok Si temple, the largest Buddhist complex in Southeast Asia, and the Blue Mansion, home of Cheong Fatt Tze.", "La mezquita Ubudiah de Kuala Kangsar y la isla de Penang: el templo Kek Lok Si, el mayor conjunto budista del Sudeste Asiático, y la Blue Mansion, residencia de Cheong Fatt Tze."], "jo5"),
            day(8, ["George Town", "George Town", "George Town"], ["Le jardin des épices et ses 500 espèces, le Bouddha couché du temple thaï Chayamangkalaram et le temple birman Dhammikarama. L'après-midi, la maison de clan Khoo Kongsi, le village sur pilotis de Chew Jetty, Chinatown, Little India et Harmony Street.", "The spice garden and its 500 species, the reclining Buddha of the Thai temple Chayamangkalaram and the Burmese temple Dhammikarama. In the afternoon, the Khoo Kongsi clan house, the stilt village of Chew Jetty, Chinatown, Little India and Harmony Street.", "El jardín de especias y sus 500 especies, el buda reclinado del templo tailandés Chayamangkalaram y el templo birmano Dhammikarama. Por la tarde, la casa de clan Khoo Kongsi, el pueblo sobre pilotes de Chew Jetty, Chinatown, Little India y Harmony Street."], "jo3"),
            day(9, ["Penang – vol retour", "Penang – flight home", "Penang – vuelo de regreso"], ["Temps libre dans le quartier colonial, puis transfert à l'aéroport de Penang et envol pour la France.", "Free time in the colonial quarter, then transfer to Penang airport and fly to France.", "Tiempo libre en el barrio colonial, traslado al aeropuerto de Penang y vuelo a Francia."], "ro6"),
            day(10, T_HOME, HOME, "bo6"),
          ]),
      ],
    }),

    // ───────────── 2. Malaisie à la folie — 10J/7N privatif ─────────────
    trip({
      slug: "malaisie-a-la-folie-taman-negara-cameron-penang-prive-10j",
      name: ["Malaisie à la folie : jungle du Taman Negara, Cameron Highlands et Penang", "Malaysia Madly: Taman Negara Jungle, the Cameron Highlands and Penang", "Malasia a la locura: selva del Taman Negara, Cameron Highlands y Penang"],
      tagline: ["Un circuit privé de la capitale à la jungle, aux théiers et à l'île de Penang", "A private tour from the capital to the jungle, the tea gardens and Penang island", "Un circuito privado de la capital a la selva, los cultivos de té y la isla de Penang"],
      description: [
        "Un circuit privé pour la Malaisie nature : deux jours à Kuala Lumpur, deux nuits dans la jungle du Taman Negara (bateau sur la rivière, marche de nuit, Teresek Hill et les cascades de Lata Berkoh), puis les Cameron Highlands à 1 500 m d'altitude, les plantations de thé BOH en 4x4, le mont Brinchang et la Mossy Forest, avant deux nuits à Penang. Chauffeur-guide anglophone pendant les étapes nature, hôtels 3* et 4* (5* en option).",
        "A private tour of nature in Malaysia: two days in Kuala Lumpur, two nights in the Taman Negara jungle (a river boat, a night walk, Teresek Hill and the Lata Berkoh falls), then the Cameron Highlands at 1,500 m, the BOH tea plantations by 4x4, Mount Brinchang and the Mossy Forest, before two nights in Penang. English-speaking driver-guide for the nature stages, 3* and 4* hotels (5* as an option).",
        "Un circuito privado por la Malasia natural: dos días en Kuala Lumpur, dos noches en la selva del Taman Negara (barco por el río, caminata nocturna, Teresek Hill y las cascadas de Lata Berkoh), y las Cameron Highlands a 1.500 m de altitud, las plantaciones de té BOH en 4x4, el monte Brinchang y el Mossy Forest, antes de dos noches en Penang. Chófer-guía de habla inglesa en las etapas de naturaleza, hoteles de 3* y 4* (5* opcional).",
      ],
      includes: [
        "Vols depuis la France (retour depuis Penang),Circuit privé,7 nuits en hôtels 3* et 4*,Petits-déjeuners et 2 dîners au Taman Negara,Excursions du programme,Guide anglophone du 4e au 7e jour",
        "Flights from France (return from Penang),Private tour,7 nights in 3* and 4* hotels,Breakfasts and 2 dinners in Taman Negara,Excursions in the programme,English-speaking guide from day 4 to day 7",
        "Vuelos desde Francia (regreso desde Penang),Circuito privado,7 noches en hoteles de 3* y 4*,Desayunos y 2 cenas en el Taman Negara,Excursiones del programa,Guía de habla inglesa del día 4 al 7",
      ],
      price: 2282, nights: 7, departureFrom: "Bruxelles", image: "fo1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -77999,
      chapters: [
        chapter(["Kuala Lumpur", "Kuala Lumpur", "Kuala Lumpur"],
          ["Deux jours libres dans la capitale.", "Two free days in the capital.", "Dos días libres en la capital."],
          ["ro4", "ti5"],
          [day(1, T_FLY, FLY, "ro4"), day(2, T_KL, KL, "ti5"), day(3, T_KL_FREE, KL_FREE, "jo1")]),
        chapter(["Le Taman Negara", "Taman Negara", "El Taman Negara"],
          ["Deux nuits dans l'une des plus vieilles forêts tropicales du monde.", "Two nights in one of the oldest rainforests in the world.", "Dos noches en uno de los bosques tropicales más antiguos del mundo."],
          ["tn1", "tn4", "fo2", "ti3"],
          [day(4, T_TAMAN, TAMAN, "tn4"), day(5, T_TAMAN_DAY, TAMAN_DAY, "fo2")]),
        chapter(["Cameron Highlands et Penang", "The Cameron Highlands and Penang", "Cameron Highlands y Penang"],
          ["Les théiers d'altitude, puis l'île.", "The highland tea gardens, then the island.", "Los cultivos de té de montaña y la isla."],
          ["fo1", "fo6", "ti7"],
          [
            day(6, ["Taman Negara – Cameron Highlands", "Taman Negara – Cameron Highlands", "Taman Negara – Cameron Highlands"], ["Courte traversée en bateau, puis environ 4 heures de route vers les Cameron Highlands, à 1 542 m d'altitude, pays du thé et des fraises. Après-midi libre.", "A short boat crossing, then about 4 hours' drive to the Cameron Highlands, at 1,542 m, the land of tea and strawberries. A free afternoon.", "Breve travesía en barco y unas 4 horas de carretera hacia las Cameron Highlands, a 1.542 m de altitud, tierra del té y las fresas. Tarde libre."], "fo1"),
            day(7, ["Thé BOH, mont Brinchang – Penang", "BOH tea, Mount Brinchang – Penang", "Té BOH, monte Brinchang – Penang"], ["Départ matinal en 4x4 vers les plantations de thé BOH de Sungai Palas et leur usine, puis le mont Brinchang, plus haut sommet de la région, une promenade dans la Mossy Forest et le temple de Sam Poh. Route vers l'île de Penang.", "An early start by 4x4 to the BOH tea plantations at Sungai Palas and their factory, then Mount Brinchang, the highest peak in the area, a walk in the Mossy Forest and Sam Poh temple. Drive to Penang island.", "Salida temprana en 4x4 hacia las plantaciones de té BOH de Sungai Palas y su fábrica, el monte Brinchang, la cima más alta de la zona, un paseo por el Mossy Forest y el templo de Sam Poh. Carretera hacia la isla de Penang."], "fo1"),
            day(8, ["Penang, journée libre", "Penang, free day", "Penang, jornada libre"], ["Journée libre à George Town : le street art, les maisons de clan, les temples et la cuisine de rue.", "A free day in George Town: the street art, the clan houses, the temples and the street food.", "Jornada libre en George Town: el arte urbano, las casas de clan, los templos y la comida callejera."], "fo6"),
            day(9, ["Penang – vol retour", "Penang – flight home", "Penang – vuelo de regreso"], ["Transfert à l'aéroport de Penang et envol pour la France.", "Transfer to Penang airport and fly to France.", "Traslado al aeropuerto de Penang y vuelo a Francia."], "ti7"),
            day(10, T_HOME, HOME, "bo7"),
          ]),
      ],
    }),

    // ───────────── 3. Passion Malaisie + Tioman — 10J/7N privatif ─────────────
    east.trip({
      slug: "malaisie-passion-taman-negara-tioman-prive-10j",
      name: ["Passion Malaisie : Kuala Lumpur, Taman Negara et l'île de Tioman", "Malaysia Passion: Kuala Lumpur, Taman Negara and Tioman Island", "Pasión Malasia: Kuala Lumpur, Taman Negara y la isla de Tioman"],
      tagline: ["La capitale, deux nuits dans la jungle, puis 3, 5 ou 8 nuits sur une île de la mer de Chine", "The capital, two nights in the jungle, then 3, 5 or 8 nights on an island in the South China Sea", "La capital, dos noches en la selva y 3, 5 u 8 noches en una isla del mar de China"],
      description: [
        "Un circuit privé qui mêle ville, jungle et plage : deux jours libres à Kuala Lumpur, deux nuits dans le parc national de Taman Negara (bateau sur la rivière, marche de nuit, Teresek Hill et les cascades de Lata Berkoh), puis la route et le ferry jusqu'à l'île de Tioman, sur la côte est, pour 3, 5 ou 8 nuits de plage et de snorkeling au Berjaya Tioman Resort 4*. Transferts avec chauffeur anglophone.",
        "A private tour that mixes city, jungle and beach: two free days in Kuala Lumpur, two nights in Taman Negara National Park (a river boat, a night walk, Teresek Hill and the Lata Berkoh falls), then the road and the ferry to Tioman island, on the east coast, for 3, 5 or 8 nights of beach and snorkelling at the Berjaya Tioman Resort 4*. Transfers with an English-speaking driver.",
        "Un circuito privado que mezcla ciudad, selva y playa: dos días libres en Kuala Lumpur, dos noches en el parque nacional de Taman Negara (barco por el río, caminata nocturna, Teresek Hill y las cascadas de Lata Berkoh), y la carretera y el ferri hasta la isla de Tioman, en la costa este, para 3, 5 u 8 noches de playa y esnórquel en el Berjaya Tioman Resort 4*. Traslados con chófer de habla inglesa.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé avec chauffeur anglophone,7 nuits en hôtels 3* et 4*,Petits-déjeuners et 2 dîners,Bateau au Taman Negara et ferry pour Tioman,Excursions du programme",
        "Flights from France,Private tour with an English-speaking driver,7 nights in 3* and 4* hotels,Breakfasts and 2 dinners,Boat in Taman Negara and ferry to Tioman,Excursions in the programme",
        "Vuelos desde Francia,Circuito privado con chófer de habla inglesa,7 noches en hoteles de 3* y 4*,Desayunos y 2 cenas,Barco en el Taman Negara y ferri a Tioman,Excursiones del programa",
      ],
      price: 2357, nights: 7, departureFrom: "Luxembourg", image: "tr1",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -77998,
      chapters: [
        east.chapter(["Kuala Lumpur", "Kuala Lumpur", "Kuala Lumpur"],
          ["Deux jours libres dans la capitale.", "Two free days in the capital.", "Dos días libres en la capital."],
          ["jo2", "tn7"],
          [east.day(1, T_FLY, FLY, "ro4"), east.day(2, T_KL, KL, "jo2"), east.day(3, T_KL_FREE, KL_FREE, "tn7")]),
        east.chapter(["Le Taman Negara", "Taman Negara", "El Taman Negara"],
          ["La rivière, la canopée et les cascades.", "The river, the canopy and the waterfalls.", "El río, el dosel y las cascadas."],
          ["ti4", "tn1", "ti3"],
          [east.day(4, T_TAMAN, TAMAN, "ti4"), east.day(5, T_TAMAN_DAY, TAMAN_DAY, "tn1")]),
        east.chapter(["L'île de Tioman", "Tioman island", "La isla de Tioman"],
          ["Plage, jungle et récifs, pour 3, 5 ou 8 nuits.", "Beach, jungle and reefs, for 3, 5 or 8 nights.", "Playa, selva y arrecifes, durante 3, 5 u 8 noches."],
          ["tr1", "ti2", "tr7"],
          [
            east.day(6, ["Taman Negara – Tioman", "Taman Negara – Tioman", "Taman Negara – Tioman"], ["Environ 6 à 7 heures de route jusqu'à Mersing, puis le ferry public pour l'île de Tioman. Accueil au débarcadère et transfert à l'hôtel.", "About 6 to 7 hours' drive to Mersing, then the public ferry to Tioman island. Welcome at the jetty and transfer to the hotel.", "Unas 6 a 7 horas de carretera hasta Mersing y el ferri público a la isla de Tioman. Recibimiento en el embarcadero y traslado al hotel."], "tr1"),
            east.day(7, T_BEACH, ["Journée libre : plage, snorkeling et nature de l'île.", "A free day: beach, snorkelling and the island's nature.", "Jornada libre: playa, esnórquel y naturaleza de la isla."], "ti2"),
            east.day(8, T_BEACH, ["Dernière journée sur l'île (ou séjour prolongé à 5 ou 8 nuits).", "A last day on the island (or a stay extended to 5 or 8 nights).", "Última jornada en la isla (o estancia prolongada a 5 u 8 noches)."], "tr7"),
            east.day(9, T_BEACH_HOME, ["Ferry jusqu'à Mersing, puis environ 5 heures de route vers l'aéroport de Kuala Lumpur et envol pour la France.", "Ferry to Mersing, then about 5 hours' drive to Kuala Lumpur airport and fly to France.", "Ferri hasta Mersing, unas 5 horas de carretera hasta el aeropuerto de Kuala Lumpur y vuelo a Francia."], "tr1"),
            east.day(10, T_HOME, HOME, "ti2"),
          ]),
      ],
    }),

    // ───────────── 4. Sur la route de la Malaisie — autotour 10J/7N ─────────────
    trip({
      slug: "malaisie-sur-la-route-autotour-malacca-penang-10j",
      name: ["Sur la route de la Malaisie : autotour de Malacca à Penang", "On the Road in Malaysia: a Self-Drive from Malacca to Penang", "Por las carreteras de Malasia: ruta en coche de Malaca a Penang"],
      tagline: ["Votre voiture de location, vos hôtels réservés et la péninsule à votre rythme", "Your hire car, your hotels booked and the peninsula at your own pace", "Su coche de alquiler, sus hoteles reservados y la península a su ritmo"],
      description: [
        "Un autotour sur les autoroutes de la péninsule : voiture prise à l'aéroport de Kuala Lumpur et rendue à Penang, avec deux nuits à Malacca, deux à Kuala Lumpur, une à Ipoh (Kellie's Castle en route) et deux à Penang par Kuala Kangsar. Visites guidées en option à Malacca, Kuala Lumpur et Penang. Avec une extension : 2 nuits à Langkawi (12 jours) à partir de 1 642 € par personne, 3 nuits de plus à Penang (1 802 €) ou 3 nuits à Bornéo (1 989 €). Conduite à gauche ; permis international et carte de crédit au nom du conducteur obligatoires.",
        "A self-drive along the peninsula's motorways: a car picked up at Kuala Lumpur airport and dropped off in Penang, with two nights in Malacca, two in Kuala Lumpur, one in Ipoh (Kellie's Castle on the way) and two in Penang via Kuala Kangsar. Guided tours available as options in Malacca, Kuala Lumpur and Penang. With an extension: 2 nights in Langkawi (12 days) from €1,642 per person, 3 more nights in Penang (€1,802) or 3 nights in Borneo (€1,989). Driving on the left; an international licence and a credit card in the driver's name are required.",
        "Una ruta en coche por las autopistas de la península: coche recogido en el aeropuerto de Kuala Lumpur y devuelto en Penang, con dos noches en Malaca, dos en Kuala Lumpur, una en Ipoh (Kellie's Castle en ruta) y dos en Penang por Kuala Kangsar. Visitas guiadas opcionales en Malaca, Kuala Lumpur y Penang. Con una extensión: 2 noches en Langkawi (12 días) desde 1.642 € por persona, 3 noches más en Penang (1.802 €) o 3 noches en Borneo (1.989 €). Se conduce por la izquierda; permiso internacional y tarjeta de crédito a nombre del conductor obligatorios.",
      ],
      includes: [
        "Vols depuis la France (retour depuis Penang),Location de voiture de Kuala Lumpur à Penang,7 nuits en hôtels 4*,Petits-déjeuners,Assistance sur place",
        "Flights from France (return from Penang),Car hire from Kuala Lumpur to Penang,7 nights in 4* hotels,Breakfasts,Local assistance",
        "Vuelos desde Francia (regreso desde Penang),Alquiler de coche de Kuala Lumpur a Penang,7 noches en hoteles de 4*,Desayunos,Asistencia en destino",
      ],
      price: 1396, nights: 7, departureFrom: "Bruxelles", image: "jo5",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 6, order: -77997,
      chapters: [
        chapter(["Malacca et Kuala Lumpur", "Malacca and Kuala Lumpur", "Malaca y Kuala Lumpur"],
          ["La ville historique, puis la capitale.", "The historic town, then the capital.", "La ciudad histórica y la capital."],
          ["ro2", "tr3", "ro4", "bo4"],
          [
            day(1, T_FLY, FLY, "ro4"),
            day(2, ["Kuala Lumpur – Malacca au volant", "Kuala Lumpur – Malacca at the wheel", "Kuala Lumpur – Malaca al volante"], ["Prise de la voiture à l'aéroport de Kuala Lumpur et route vers Malacca (environ 2 h à 2 h 30). Installation et temps libre.", "Pick up the car at Kuala Lumpur airport and drive to Malacca (about 2 to 2.5 hours). Check in and free time.", "Recogida del coche en el aeropuerto de Kuala Lumpur y carretera hacia Malaca (unas 2 h a 2 h 30). Instalación y tiempo libre."], "tr3"),
            day(3, ["Malacca", "Malacca", "Malaca"], ["Journée libre dans la ville historique : la place hollandaise et le Stadthuys, le temple Cheng Hoon Teng, la porte de Santiago et l'église Saint-Paul. En option : visite guidée et croisière sur la rivière.", "A free day in the historic town: Dutch Square and the Stadthuys, Cheng Hoon Teng temple, the Porta de Santiago and St Paul's church. Optional: a guided walk and a river cruise.", "Jornada libre en la ciudad histórica: la plaza holandesa y el Stadthuys, el templo Cheng Hoon Teng, la Porta de Santiago y la iglesia de San Pablo. Opcional: visita guiada y crucero por el río."], "ro2"),
            day(4, ["Malacca – Kuala Lumpur", "Malacca – Kuala Lumpur", "Malaca – Kuala Lumpur"], ["Route vers Kuala Lumpur (environ 2 h à 2 h 30), carrefour des cultures malaise, chinoise et indienne. Temps libre.", "Drive to Kuala Lumpur (about 2 to 2.5 hours), a crossroads of Malay, Chinese and Indian cultures. Free time.", "Carretera hacia Kuala Lumpur (unas 2 h a 2 h 30), cruce de las culturas malaya, china e india. Tiempo libre."], "ro4"),
            day(5, T_KL_FREE, [`${KL_FREE[0]} En option : visite guidée avec la passerelle des tours Petronas et le temple Thean Hou.`, `${KL_FREE[1]} Optional: a guided tour with the Petronas Towers skybridge and Thean Hou temple.`, `${KL_FREE[2]} Opcional: visita guiada con la pasarela de las torres Petronas y el templo Thean Hou.`], "bo4"),
          ]),
        chapter(["Ipoh et Penang", "Ipoh and Penang", "Ipoh y Penang"],
          ["La route du nord jusqu'à l'île.", "The road north to the island.", "La carretera del norte hasta la isla."],
          ["jo1", "jo5", "ti7", "ro6"],
          [
            day(6, ["Kuala Lumpur – Ipoh", "Kuala Lumpur – Ipoh", "Kuala Lumpur – Ipoh"], ["Route vers Ipoh (environ 2 h 30 à 3 h), avec un arrêt possible à Kellie's Castle. La vieille ville d'Ipoh, son street art et ses cafés historiques.", "Drive to Ipoh (about 2.5 to 3 hours), with a possible stop at Kellie's Castle. Ipoh's old town, its street art and historic cafés.", "Carretera hacia Ipoh (unas 2 h 30 a 3 h), con posible parada en Kellie's Castle. El casco antiguo de Ipoh, su arte urbano y sus cafés históricos."], "jo1"),
            day(7, ["Kuala Kangsar – Penang", "Kuala Kangsar – Penang", "Kuala Kangsar – Penang"], ["Arrêt dans la ville royale de Kuala Kangsar et sa mosquée Ubudiah aux dômes dorés, puis environ 160 km jusqu'à Penang.", "A stop in the royal town of Kuala Kangsar and its golden-domed Ubudiah mosque, then about 160 km to Penang.", "Parada en la ciudad real de Kuala Kangsar y su mezquita Ubudiah de cúpulas doradas, y unos 160 km hasta Penang."], "jo5"),
            day(8, ["Penang", "Penang", "Penang"], ["Journée libre : George Town, Little India, Chinatown, la colline de Penang ou le temple Kek Lok Si. En option : journée guidée sur le patrimoine de l'île.", "A free day: George Town, Little India, Chinatown, Penang Hill or Kek Lok Si temple. Optional: a guided heritage day on the island.", "Jornada libre: George Town, Little India, Chinatown, la colina de Penang o el templo Kek Lok Si. Opcional: jornada guiada sobre el patrimonio de la isla."], "ti7"),
            day(9, ["Penang – vol retour", "Penang – flight home", "Penang – vuelo de regreso"], ["Matinée libre, puis restitution de la voiture à l'aéroport de Penang et envol pour la France.", "A free morning, then drop off the car at Penang airport and fly to France.", "Mañana libre, devolución del coche en el aeropuerto de Penang y vuelo a Francia."], "ro6"),
            day(10, T_HOME, HOME, "bo6"),
          ]),
      ],
    }),

    // ───────────── 5. Trio Évasion Malaisienne + Langkawi — 10J/7N privatif ─────────────
    trip({
      slug: "malaisie-trio-malacca-kuala-lumpur-langkawi-prive-10j",
      name: ["Trio malaisien : Malacca, Kuala Lumpur et la plage à Langkawi", "Malaysian Trio: Malacca, Kuala Lumpur and the Beach in Langkawi", "Trío malasio: Malaca, Kuala Lumpur y la playa en Langkawi"],
      tagline: ["Deux villes en liberté, puis 3, 5 ou 8 nuits sur l'île de Langkawi", "Two cities at your own pace, then 3, 5 or 8 nights on Langkawi island", "Dos ciudades en libertad y 3, 5 u 8 noches en la isla de Langkawi"],
      description: [
        "Un combiné privé en liberté : deux nuits dans la ville historique de Malacca, deux à Kuala Lumpur, puis un vol intérieur vers l'île de Langkawi pour 3, 5 ou 8 nuits au Frangipani Langkawi Resort 4*. Transferts privés avec chauffeur anglophone, petits-déjeuners inclus, visites libres.",
        "A private combination at your own pace: two nights in the historic town of Malacca, two in Kuala Lumpur, then a domestic flight to Langkawi island for 3, 5 or 8 nights at the Frangipani Langkawi Resort 4*. Private transfers with an English-speaking driver, breakfasts included, sightseeing on your own.",
        "Un combinado privado en libertad: dos noches en la ciudad histórica de Malaca, dos en Kuala Lumpur y un vuelo interior a la isla de Langkawi para 3, 5 u 8 noches en el Frangipani Langkawi Resort 4*. Traslados privados con chófer de habla inglesa, desayunos incluidos, visitas por su cuenta.",
      ],
      includes: [
        "Vols depuis la France,Vol intérieur Kuala Lumpur – Langkawi,Transferts privés,7 nuits en hôtels 4*,Petits-déjeuners,Assistance sur place",
        "Flights from France,Kuala Lumpur – Langkawi domestic flight,Private transfers,7 nights in 4* hotels,Breakfasts,Local assistance",
        "Vuelos desde Francia,Vuelo interior Kuala Lumpur – Langkawi,Traslados privados,7 noches en hoteles de 4*,Desayunos,Asistencia en destino",
      ],
      price: 1601, nights: 7, departureFrom: "Paris", image: "tr5",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,honeymoon,family", maxGuests: 8, order: -77996,
      chapters: [
        chapter(["Malacca et Kuala Lumpur", "Malacca and Kuala Lumpur", "Malaca y Kuala Lumpur"],
          ["Quatre jours entre ville coloniale et capitale.", "Four days between a colonial town and the capital.", "Cuatro días entre ciudad colonial y capital."],
          ["tr3", "ro2", "ro4", "jo1"],
          [
            day(1, T_FLY, FLY, "ro4"),
            day(2, T_MALACCA, MALACCA, "tr3"),
            day(3, ["Malacca, journée libre", "Malacca, free day", "Malaca, jornada libre"], ["Journée libre pour découvrir à votre rythme la ville historique, ses églises, ses temples et la rue Jonker.", "A free day to discover the historic town, its churches, temples and Jonker Street at your own pace.", "Jornada libre para descubrir a su ritmo la ciudad histórica, sus iglesias, sus templos y la calle Jonker."], "ro2"),
            day(4, ["Malacca – Kuala Lumpur", "Malacca – Kuala Lumpur", "Malaca – Kuala Lumpur"], ["Transfert vers Kuala Lumpur (environ 2 h à 2 h 30). Temps libre.", "Transfer to Kuala Lumpur (about 2 to 2.5 hours). Free time.", "Traslado a Kuala Lumpur (unas 2 h a 2 h 30). Tiempo libre."], "ro4"),
            day(5, T_KL_FREE, KL_FREE, "jo1"),
          ]),
        chapter(["Langkawi", "Langkawi", "Langkawi"],
          ["L'archipel des 99 îles, pour 3, 5 ou 8 nuits.", "The archipelago of 99 islands, for 3, 5 or 8 nights.", "El archipiélago de las 99 islas, durante 3, 5 u 8 noches."],
          ["tr5", "la1", "ro7", "ro8"],
          [
            day(6, ["Vol pour Langkawi", "Flight to Langkawi", "Vuelo a Langkawi"], ["Transfert privé à l'aéroport et vol pour Langkawi (environ 1 heure), puis transfert à l'hôtel. Temps libre.", "Private transfer to the airport and flight to Langkawi (about 1 hour), then transfer to the hotel. Free time.", "Traslado privado al aeropuerto y vuelo a Langkawi (alrededor de 1 hora), y traslado al hotel. Tiempo libre."], "tr5"),
            day(7, T_BEACH, ["Journée libre au bord de la mer d'Andaman.", "A free day by the Andaman Sea.", "Jornada libre junto al mar de Andamán."], "la1"),
            day(8, T_BEACH, ["Dernière journée à Langkawi (ou séjour prolongé à 5 ou 8 nuits).", "A last day in Langkawi (or a stay extended to 5 or 8 nights).", "Última jornada en Langkawi (o estancia prolongada a 5 u 8 noches)."], "ro8"),
            day(9, T_BEACH_HOME, ["Transfert à l'aéroport de Langkawi et vol retour vers la France.", "Transfer to Langkawi airport and flight back to France.", "Traslado al aeropuerto de Langkawi y vuelo de regreso a Francia."], "ro7"),
            day(10, T_HOME, HOME, "la1"),
          ]),
      ],
    }),

    // ───────────── 6. Kuala Lumpur + Langkawi (Rebak) — 10J/7N ─────────────
    trip({
      slug: "malaisie-kuala-lumpur-langkawi-rebak-10j",
      name: ["Combiné Kuala Lumpur et Langkawi : l'île privée de Rebak", "Kuala Lumpur and Langkawi: the Private Island of Rebak", "Combinado Kuala Lumpur y Langkawi: la isla privada de Rebak"],
      tagline: ["Deux jours dans la capitale, puis 5, 7 ou 9 nuits sur une île accessible en bateau", "Two days in the capital, then 5, 7 or 9 nights on an island reached by boat", "Dos días en la capital y 5, 7 o 9 noches en una isla a la que se llega en barco"],
      description: [
        "Un combiné privé pour se reposer : deux jours libres à Kuala Lumpur, puis un vol pour Langkawi et un bateau jusqu'au Rebak Island Resort & Marina 4*, sur sa propre île au large de Langkawi, pour 5, 7 ou 9 nuits. Transferts privés avec chauffeur anglophone, petits-déjeuners inclus.",
        "A private combination for a rest: two free days in Kuala Lumpur, then a flight to Langkawi and a boat to the Rebak Island Resort & Marina 4*, on its own island off Langkawi, for 5, 7 or 9 nights. Private transfers with an English-speaking driver, breakfasts included.",
        "Un combinado privado para descansar: dos días libres en Kuala Lumpur y un vuelo a Langkawi y un barco hasta el Rebak Island Resort & Marina 4*, en su propia isla frente a Langkawi, durante 5, 7 o 9 noches. Traslados privados con chófer de habla inglesa, desayunos incluidos.",
      ],
      includes: [
        "Vols depuis la France,Vol intérieur Kuala Lumpur – Langkawi,Transferts privés et bateau,7 nuits en hôtels 4*,Petits-déjeuners,Assistance sur place",
        "Flights from France,Kuala Lumpur – Langkawi domestic flight,Private transfers and boat,7 nights in 4* hotels,Breakfasts,Local assistance",
        "Vuelos desde Francia,Vuelo interior Kuala Lumpur – Langkawi,Traslados privados y barco,7 noches en hoteles de 4*,Desayunos,Asistencia en destino",
      ],
      price: 1576, nights: 7, departureFrom: "Francfort", image: "la4",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon", maxGuests: 8, order: -77995,
      chapters: [
        chapter(["Kuala Lumpur", "Kuala Lumpur", "Kuala Lumpur"],
          ["Deux jours libres dans la capitale.", "Two free days in the capital.", "Dos días libres en la capital."],
          ["jo2", "ti5"],
          [day(1, T_FLY, FLY, "ro4"), day(2, T_KL, KL, "jo2"), day(3, T_KL_FREE, KL_FREE, "ti5")]),
        chapter(["Rebak, au large de Langkawi", "Rebak, off Langkawi", "Rebak, frente a Langkawi"],
          ["Une île pour vous, 5, 7 ou 9 nuits.", "An island to yourself, 5, 7 or 9 nights.", "Una isla para usted, 5, 7 o 9 noches."],
          ["la4", "la2", "la5", "la1"],
          [
            day(4, ["Vol pour Langkawi – Rebak", "Flight to Langkawi – Rebak", "Vuelo a Langkawi – Rebak"], ["Vol pour Langkawi (environ 1 heure), transfert au terminal de Cenang et bateau jusqu'à l'île de Rebak.", "Flight to Langkawi (about 1 hour), transfer to the Cenang terminal and a boat to Rebak island.", "Vuelo a Langkawi (alrededor de 1 hora), traslado a la terminal de Cenang y barco hasta la isla de Rebak."], "la5"),
            day(5, T_BEACH, ["Journées libres à l'hôtel, entre plage, piscine et marina.", "Free days at the hotel, between beach, pool and marina.", "Jornadas libres en el hotel, entre playa, piscina y puerto deportivo."], "la4"),
            day(6, T_BEACH, ["Journée libre.", "A free day.", "Jornada libre."], "la2"),
            day(7, T_BEACH, ["Journée libre.", "A free day.", "Jornada libre."], "la1"),
            day(8, T_BEACH, ["Dernière journée sur l'île (ou séjour prolongé à 7 ou 9 nuits).", "A last day on the island (or a stay extended to 7 or 9 nights).", "Última jornada en la isla (o estancia prolongada a 7 o 9 noches)."], "la4"),
            day(9, T_BEACH_HOME, ["Bateau, puis transfert à l'aéroport de Langkawi et vol retour vers la France.", "Boat, then transfer to Langkawi airport and flight back to France.", "Barco, traslado al aeropuerto de Langkawi y vuelo de regreso a Francia."], "la5"),
            day(10, T_HOME, HOME, "la2"),
          ]),
      ],
    }),

    // ───────────── 7. Kuala Lumpur + Perhentian — 10J/7N ─────────────
    east.trip({
      slug: "malaisie-kuala-lumpur-perhentian-10j",
      name: ["Combiné Kuala Lumpur et îles Perhentian", "Kuala Lumpur and the Perhentian Islands", "Combinado Kuala Lumpur e islas Perhentian"],
      tagline: ["Deux jours dans la capitale, puis 5, 7 ou 9 nuits sur l'un des meilleurs spots de snorkeling du pays", "Two days in the capital, then 5, 7 or 9 nights at one of the country's best snorkelling spots", "Dos días en la capital y 5, 7 o 9 noches en uno de los mejores lugares de esnórquel del país"],
      description: [
        "Un combiné privé entre ville et mer de Chine : deux jours libres à Kuala Lumpur, puis un vol pour Kota Bharu, la route jusqu'à Kuala Besut et le bateau pour les îles Perhentian, véritable aquarium naturel, pour 5, 7 ou 9 nuits au Perhentian Marriott Resort & Spa 5*. Transferts privés avec chauffeur anglophone, petits-déjeuners inclus.",
        "A private combination between the city and the South China Sea: two free days in Kuala Lumpur, then a flight to Kota Bharu, the road to Kuala Besut and the boat to the Perhentian islands, a natural aquarium, for 5, 7 or 9 nights at the Perhentian Marriott Resort & Spa 5*. Private transfers with an English-speaking driver, breakfasts included.",
        "Un combinado privado entre la ciudad y el mar de China: dos días libres en Kuala Lumpur y un vuelo a Kota Bharu, la carretera hasta Kuala Besut y el barco a las islas Perhentian, un auténtico acuario natural, durante 5, 7 o 9 noches en el Perhentian Marriott Resort & Spa 5*. Traslados privados con chófer de habla inglesa, desayunos incluidos.",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs Kuala Lumpur – Kota Bharu aller-retour,Transferts privés et bateau,7 nuits en hôtels 4* et 5*,Petits-déjeuners,Assistance sur place",
        "Flights from France,Return domestic flights Kuala Lumpur – Kota Bharu,Private transfers and boat,7 nights in 4* and 5* hotels,Breakfasts,Local assistance",
        "Vuelos desde Francia,Vuelos interiores Kuala Lumpur – Kota Bharu ida y vuelta,Traslados privados y barco,7 noches en hoteles de 4* y 5*,Desayunos,Asistencia en destino",
      ],
      price: 1851, nights: 7, departureFrom: "Luxembourg", image: "pe1",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,family", maxGuests: 8, order: -77994,
      chapters: [
        east.chapter(["Kuala Lumpur", "Kuala Lumpur", "Kuala Lumpur"],
          ["Deux jours libres dans la capitale.", "Two free days in the capital.", "Dos días libres en la capital."],
          ["jo2", "jo1"],
          [east.day(1, T_FLY, FLY, "ro4"), east.day(2, T_KL, KL, "jo2"), east.day(3, T_KL_FREE, KL_FREE, "jo1")]),
        east.chapter(["Les îles Perhentian", "The Perhentian islands", "Las islas Perhentian"],
          ["Eaux turquoise, récifs et plages, 5, 7 ou 9 nuits.", "Turquoise water, reefs and beaches, 5, 7 or 9 nights.", "Aguas turquesa, arrecifes y playas, 5, 7 o 9 noches."],
          ["pe1", "pe2", "pe3", "pe4", "pe5", "pe6"],
          [
            east.day(4, ["Kota Bharu – Perhentian", "Kota Bharu – Perhentian", "Kota Bharu – Perhentian"], ["Vol pour Kota Bharu, environ 1 h 30 de route jusqu'à l'embarcadère de Kuala Besut, puis 30 à 45 minutes de bateau jusqu'à l'hôtel.", "Flight to Kota Bharu, about 1.5 hours by road to the Kuala Besut jetty, then 30 to 45 minutes by boat to the hotel.", "Vuelo a Kota Bharu, unas 1 h 30 de carretera hasta el embarcadero de Kuala Besut y 30 a 45 minutos en barco hasta el hotel."], "pe6"),
            east.day(5, T_BEACH, ["Journées libres : snorkeling, plongée et plages.", "Free days: snorkelling, diving and beaches.", "Jornadas libres: esnórquel, buceo y playas."], "pe1"),
            east.day(6, T_BEACH, ["Journée libre.", "A free day.", "Jornada libre."], "pe3"),
            east.day(7, T_BEACH, ["Journée libre.", "A free day.", "Jornada libre."], "pe5"),
            east.day(8, T_BEACH, ["Dernière journée sur l'île (ou séjour prolongé à 7 ou 9 nuits).", "A last day on the island (or a stay extended to 7 or 9 nights).", "Última jornada en la isla (o estancia prolongada a 7 o 9 noches)."], "pe2"),
            east.day(9, T_BEACH_HOME, ["Bateau jusqu'à Kuala Besut, route vers l'aéroport de Kota Bharu, vol pour Kuala Lumpur puis envol pour la France.", "Boat to Kuala Besut, road to Kota Bharu airport, flight to Kuala Lumpur then fly to France.", "Barco hasta Kuala Besut, carretera al aeropuerto de Kota Bharu, vuelo a Kuala Lumpur y vuelo a Francia."], "pe4"),
            east.day(10, T_HOME, HOME, "pe2"),
          ]),
      ],
    }),
  ];

  const { runSeedBatch, disconnect } = await import("./lib/seedTripsRunner");
  try {
    await runSeedBatch({ newStandardTrips: [], newJourneyTrips: journeyTrips });
    console.log("\nDone.");
  } finally {
    await disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
