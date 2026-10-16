// Thailand circuits — 8 journey-format trips for the existing "thailande" destination. One trip
// per circuit; beach extensions, private versions and year variants are described inside the
// trip ("Parfum thaï et plages du Sud" follows the same route as the Grand Tour and is folded into
// it). Prices are per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF.
// Run with:
//   npx tsx scripts/seed-trips-thailande-circuits.ts
// Requires scripts/upload-images-thailande-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "thailande-incontournables-bangkok-chiang-mai-10j": ["377118", "83658", "401603", "95138", "390588", "377703", "390540", "390278", "377744", "390343", "390246", "393838"],
  "thailande-bangkok-khao-lak-sejour-11j": ["402658"],
  "thailande-sud-khao-sok-krabi-koh-lanta-11j": ["353018", "353019"],
  "thailande-paradis-phuket-krabi-phi-phi-12j": ["373958"],
  "thailande-intimiste-kanchanaburi-chiang-mai-13j": ["393878", "169737", "401599", "394378", "394578", "401158", "401138", "394899", "398298", "398299", "398300", "394241", "397498"],
  "thailande-nord-sud-khao-sok-khao-lak-15j": ["390239", "168142", "401600", "95718"],
  "thailande-joyaux-sud-phang-nga-phi-phi-12j": ["86838"],
  "thailande-grand-tour-koh-lanta-krabi-17j": ["393278", "401601", "317679", "366418"],
};

// ── Shared texts ──
const T_FLY: L3 = ["Envol pour la Thaïlande", "Flight to Thailand", "Vuelo a Tailandia"];
const FLY: L3 = ["Vol pour la Thaïlande. Dîner et nuit à bord.", "Flight to Thailand. Dinner and night on board.", "Vuelo a Tailandia. Cena y noche a bordo."];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_BKK: L3 = ["Arrivée à Bangkok", "Arrival in Bangkok", "Llegada a Bangkok"];
const BKK: L3 = [
  "Accueil à l'aéroport de Bangkok par votre guide francophone, avec la traditionnelle guirlande de fleurs, et transfert à l'hôtel. Dîner et nuit.",
  "Welcome at Bangkok airport by your French-speaking guide, with the traditional flower garland, and transfer to the hotel. Dinner and overnight.",
  "Recibimiento en el aeropuerto de Bangkok por su guía francófono, con la tradicional guirnalda de flores, y traslado al hotel. Cena y noche.",
];
const T_MARKETS: L3 = ["Le marché sur les rails et le marché flottant", "The railway market and the floating market", "El mercado sobre las vías y el mercado flotante"];
const MARKETS: L3 = [
  "Départ tôt pour le marché de Mae Klong, installé sur une voie ferrée que le train traverse huit fois par jour. Puis le marché flottant de Damnoen Saduak, rejoint en pirogue par les canaux, avec ses étals de fruits, de légumes et de poissons.",
  "An early start for Mae Klong market, laid out on a railway line that the train crosses eight times a day. Then the floating market of Damnoen Saduak, reached by boat along the canals, with its stalls of fruit, vegetables and fish.",
  "Salida temprano hacia el mercado de Mae Klong, instalado sobre una vía de tren que el convoy cruza ocho veces al día. Después, el mercado flotante de Damnoen Saduak, al que se llega en piragua por los canales, con sus puestos de fruta, verdura y pescado.",
];
const T_AYUT: L3 = ["Ayutthaya et Lopburi – Phitsanulok", "Ayutthaya and Lopburi – Phitsanulok", "Ayutthaya y Lopburi – Phitsanulok"];
const AYUT: L3 = [
  "Ayutthaya, ancienne capitale du royaume de Siam classée à l'Unesco : les temples Wat Yai Chaimongkol et Wat Mongkol Bophit. Déjeuner, puis Lopburi, « la cité des singes », et le sanctuaire de Prang Sam Yod. Route vers Phitsanulok, sur la rivière Nan (environ 350 km).",
  "Ayutthaya, the former capital of the kingdom of Siam and a UNESCO site: the temples of Wat Yai Chaimongkol and Wat Mongkol Bophit. Lunch, then Lopburi, 'the monkey city', and the Prang Sam Yod shrine. Drive to Phitsanulok, on the Nan River (about 350 km).",
  "Ayutthaya, antigua capital del reino de Siam inscrita en la Unesco: los templos de Wat Yai Chaimongkol y Wat Mongkol Bophit. Almuerzo y Lopburi, «la ciudad de los monos», con el santuario de Prang Sam Yod. Carretera hacia Phitsanulok, a orillas del río Nan (unos 350 km).",
];
const T_SUKHO: L3 = ["Sukhothai – Chiang Rai", "Sukhothai – Chiang Rai", "Sukhothai – Chiang Rai"];
const SUKHO: L3 = [
  "À Phitsanulok, le Wat Phra Buddha Chinnarat et sa statue du XIIIe siècle, réputée la plus belle du pays. Puis Sukhothai, capitale du premier royaume siamois, classée à l'Unesco : Wat Mahathat et Wat Sra Sri. Route vers Chiang Rai.",
  "In Phitsanulok, Wat Phra Buddha Chinnarat and its 13th-century statue, said to be the finest in the country. Then Sukhothai, capital of the first Siamese kingdom and a UNESCO site: Wat Mahathat and Wat Sra Sri. Drive to Chiang Rai.",
  "En Phitsanulok, el Wat Phra Buddha Chinnarat y su estatua del siglo XIII, considerada la más bella del país. Después, Sukhothai, capital del primer reino siamés, inscrita en la Unesco: Wat Mahathat y Wat Sra Sri. Carretera hacia Chiang Rai.",
];
const T_GOLDEN: L3 = ["Le Triangle d'or et le temple blanc – Chiang Mai", "The Golden Triangle and the White Temple – Chiang Mai", "El Triángulo de Oro y el templo blanco – Chiang Mai"];
const GOLDEN: L3 = [
  "Rencontre avec les ethnies Yao et Akha à Mae Chan, puis Chiang Saen et le Triangle d'or, où se rejoignent la Thaïlande, le Laos et le Myanmar. Sur la route de Chiang Mai, arrêt au Wat Rong Khun, le temple blanc.",
  "Meet the Yao and Akha peoples in Mae Chan, then Chiang Saen and the Golden Triangle, where Thailand, Laos and Myanmar meet. On the way to Chiang Mai, a stop at Wat Rong Khun, the White Temple.",
  "Encuentro con las etnias yao y akha en Mae Chan, y después Chiang Saen y el Triángulo de Oro, donde se unen Tailandia, Laos y Myanmar. Camino de Chiang Mai, parada en el Wat Rong Khun, el templo blanco.",
];
const T_CNX: L3 = ["Le Doi Suthep et les villages d'artisans", "Doi Suthep and the craft villages", "El Doi Suthep y los pueblos artesanos"];
const CNX: L3 = [
  "Visite du Wat Phra That Doi Suthep, l'un des temples les plus vénérés du pays, à près de mille mètres d'altitude, avec la vue sur Chiang Mai. L'après-midi, les villages d'artisans : laque, soie, ombrelles, bois sculpté.",
  "Visit Wat Phra That Doi Suthep, one of the most revered temples in the country, nearly a thousand metres up, with the view over Chiang Mai. In the afternoon, the craft villages: lacquer, silk, parasols, wood carving.",
  "Visita al Wat Phra That Doi Suthep, uno de los templos más venerados del país, a casi mil metros de altitud, con vistas sobre Chiang Mai. Por la tarde, los pueblos artesanos: laca, seda, sombrillas, madera tallada.",
];
const T_TRAIN: L3 = ["Éléphants, orchidées et train de nuit", "Elephants, orchids and the night train", "Elefantes, orquídeas y tren nocturno"];
const TRAIN: L3 = [
  "Visite d'un camp d'éléphants, que l'on observe et nourrit, puis d'une ferme d'orchidées. Après-midi libre. En fin de journée, installation dans le train de nuit pour Bangkok, en couchette climatisée de 2e classe.",
  "Visit an elephant camp, where you watch and feed the elephants, then an orchid farm. A free afternoon. Late in the day, board the night train to Bangkok, in an air-conditioned 2nd-class sleeper.",
  "Visita a un campamento de elefantes, a los que se observa y alimenta, y a una granja de orquídeas. Tarde libre. Al final del día, instalación en el tren nocturno a Bangkok, en litera climatizada de 2.ª clase.",
];
const T_KHAOSOK: L3 = ["Vol pour Surat Thani – Khao Sok", "Flight to Surat Thani – Khao Sok", "Vuelo a Surat Thani – Khao Sok"];
const KHAOSOK: L3 = [
  "Arrivée matinale à Bangkok, petit-déjeuner dans un hôtel proche, puis vol pour Surat Thani et transfert au parc national de Khao Sok, où l'on dort dans un lodge en pleine nature.",
  "An early arrival in Bangkok, breakfast in a nearby hotel, then a flight to Surat Thani and a transfer to Khao Sok National Park, where you stay in a lodge in the wild.",
  "Llegada temprano a Bangkok, desayuno en un hotel cercano, vuelo a Surat Thani y traslado al parque nacional de Khao Sok, donde se duerme en un lodge en plena naturaleza.",
];
const T_CHEOW: L3 = ["Le lac de Cheow Lan", "Cheow Lan lake", "El lago Cheow Lan"];
const CHEOW: L3 = [
  "Balade en bateau sur les eaux émeraude du lac de Cheow Lan, entre des pitons calcaires qui rappellent la baie d'Halong. Déjeuner dans un restaurant flottant et petite randonnée dans la jungle jusqu'à une grotte.",
  "A boat trip on the emerald waters of Cheow Lan lake, among limestone peaks that recall Halong Bay. Lunch in a floating restaurant and a short jungle hike to a cave.",
  "Paseo en barco por las aguas esmeralda del lago Cheow Lan, entre picos calizos que recuerdan la bahía de Halong. Almuerzo en un restaurante flotante y breve caminata por la selva hasta una cueva.",
];
const T_BEACH: L3 = ["Journée libre à la plage", "Free day at the beach", "Jornada libre en la playa"];
const BEACH: L3 = [
  "Journée libre pour profiter de la plage, de la piscine et de l'hôtel. Repas libres.",
  "A free day to enjoy the beach, the pool and the hotel. Meals on your own.",
  "Jornada libre para disfrutar de la playa, la piscina y el hotel. Comidas libres.",
];
const T_PHUKET_HOME: L3 = ["Phuket – vol retour", "Phuket – flight home", "Phuket – vuelo de regreso"];
const PHUKET_HOME: L3 = [
  "Selon l'horaire du vol, transfert à l'aéroport de Phuket et envol pour la France.",
  "Depending on your flight time, transfer to Phuket airport and fly to France.",
  "Según el horario del vuelo, traslado al aeropuerto de Phuket y vuelo a Francia.",
];
const T_PHIPHI: L3 = ["L'archipel de Phi Phi", "The Phi Phi islands", "El archipiélago de Phi Phi"];
const PHIPHI: L3 = [
  "Départ en bateau rapide pour l'archipel de Phi Phi, ses falaises calcaires et ses plages, où fut tourné le film « La Plage ». Snorkeling sur plusieurs sites, déjeuner à Koh Phi Phi Don et temps libre sur le sable.",
  "Set off by speedboat for the Phi Phi islands, their limestone cliffs and beaches, where the film 'The Beach' was shot. Snorkelling at several spots, lunch on Koh Phi Phi Don and free time on the sand.",
  "Salida en lancha rápida hacia el archipiélago de Phi Phi, con sus acantilados calizos y sus playas, donde se rodó la película «La playa». Snorkel en varios puntos, almuerzo en Koh Phi Phi Don y tiempo libre en la arena.",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "thailande",
    imagePrefix: "thailande",
    season: { label: ["Nov à avr", "Nov to April", "Nov a abr"], months: "november,december,january,february,march,april" },
  });

  // Bangkok – Chiang Mai core shared by three circuits: days 2 to 8, then the night train.
  const northDays = () => [
    day(2, T_BKK, BKK, "gt8"),
    day(3, T_MARKETS, MARKETS, "gt12"),
    day(4, T_AYUT, AYUT, "gt9"),
    day(5, T_SUKHO, SUKHO, "in3"),
    day(6, T_GOLDEN, GOLDEN, "in4"),
    day(7, T_CNX, CNX, "in5"),
    day(8, T_TRAIN, TRAIN, "in6"),
  ];
  const northChapters = (gallery1: string[], gallery2: string[]) => {
    const d = northDays();
    return [
      chapter(
        ["Bangkok et l'ancien Siam", "Bangkok and old Siam", "Bangkok y el antiguo Siam"],
        [
          "Les marchés sur l'eau et sur les rails autour de Bangkok, puis les capitales historiques d'Ayutthaya et de Sukhothai.",
          "The markets on the water and on the rails around Bangkok, then the historic capitals of Ayutthaya and Sukhothai.",
          "Los mercados sobre el agua y sobre las vías alrededor de Bangkok, y las capitales históricas de Ayutthaya y Sukhothai.",
        ],
        gallery1,
        d.slice(0, 4)
      ),
      chapter(
        ["Le Nord : Triangle d'or et Chiang Mai", "The North: the Golden Triangle and Chiang Mai", "El Norte: Triángulo de Oro y Chiang Mai"],
        [
          "Les montagnes du Nord, les ethnies, le temple blanc, puis Chiang Mai et ses artisans, avant le train de nuit.",
          "The northern mountains, the hill peoples, the White Temple, then Chiang Mai and its craftspeople, before the night train.",
          "Las montañas del Norte, las etnias, el templo blanco y Chiang Mai con sus artesanos, antes del tren nocturno.",
        ],
        gallery2,
        d.slice(4)
      ),
    ];
  };

  const journeyTrips = [
    // ───────────── 1. Les Incontournables de la Thaïlande — 10J/7N ─────────────
    trip({
      slug: "thailande-incontournables-bangkok-chiang-mai-10j",
      name: [
        "Thaïlande : les incontournables, de Bangkok au Triangle d'or",
        "Thailand: The Essentials, from Bangkok to the Golden Triangle",
        "Tailandia: lo imprescindible, de Bangkok al Triángulo de Oro",
      ],
      tagline: [
        "Marchés flottants, cités royales, Triangle d'or et Chiang Mai, avec une extension plage au choix",
        "Floating markets, royal cities, the Golden Triangle and Chiang Mai, with a beach extension of your choice",
        "Mercados flotantes, ciudades reales, Triángulo de Oro y Chiang Mai, con una extensión de playa a elegir",
      ],
      description: [
        "Le circuit pour découvrir la Thaïlande en dix jours, en groupe de 24 personnes au plus avec un guide francophone : les marchés de Mae Klong et de Damnoen Saduak, Ayutthaya et Sukhothai classées à l'Unesco, Lopburi, le Triangle d'or, le temple blanc de Chiang Rai, le Doi Suthep et Chiang Mai, puis le retour vers Bangkok en train de nuit. Le voyage se prolonge volontiers à la plage : Cha Am, Khao Lak, Krabi, Phuket, Koh Samet, Koh Chang ou Koh Samui (à partir de 1 571 € par personne). Version privative à partir de 2 101 €.",
        "The tour for discovering Thailand in ten days, in a group of 24 at most with a French-speaking guide: the markets of Mae Klong and Damnoen Saduak, UNESCO-listed Ayutthaya and Sukhothai, Lopburi, the Golden Triangle, the White Temple of Chiang Rai, Doi Suthep and Chiang Mai, then the night train back to Bangkok. The trip extends easily to the beach: Cha Am, Khao Lak, Krabi, Phuket, Koh Samet, Koh Chang or Koh Samui (from €1,571 per person). Private version from €2,101.",
        "El circuito para descubrir Tailandia en diez días, en grupo de 24 personas como máximo con guía francófono: los mercados de Mae Klong y Damnoen Saduak, Ayutthaya y Sukhothai inscritas en la Unesco, Lopburi, el Triángulo de Oro, el templo blanco de Chiang Rai, el Doi Suthep y Chiang Mai, y el regreso a Bangkok en tren nocturno. El viaje se prolonga fácilmente en la playa: Cha Am, Khao Lak, Krabi, Phuket, Koh Samet, Koh Chang o Koh Samui (desde 1.571 € por persona). Versión privada desde 2.101 €.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,6 nuits en hôtels 1re catégorie,1 nuit en train couchette,Pension selon programme,Guide francophone,Visites et entrées du programme",
        "Flights from France,Airport transfers,6 nights in first-class hotels,1 night in a sleeper train,Meals as per programme,French-speaking guide,Visits and entrance fees in the programme",
        "Vuelos desde Francia,Traslados al aeropuerto,6 noches en hoteles de primera categoría,1 noche en tren litera,Comidas según programa,Guía francófono,Visitas y entradas del programa",
      ],
      price: 1273, nights: 7, departureFrom: "Bruxelles", image: "in4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 24, order: -88000,
      chapters: [
        ...[chapter(
          ["Le départ", "Departure", "La salida"],
          ["Vol vers Bangkok.", "Flight to Bangkok.", "Vuelo a Bangkok."],
          ["gt8"],
          [day(1, T_FLY, FLY, "gt8")]
        )],
        ...northChapters(["gt8", "gt12", "gt9", "in3", "gt11"], ["in4", "in5", "in6", "in1", "in7"]),
        chapter(
          ["Retour par Bangkok", "Back via Bangkok", "Regreso por Bangkok"],
          [
            "Arrivée au petit matin à Bangkok et vol retour, avec une visite optionnelle du Palais royal selon l'horaire.",
            "An early-morning arrival in Bangkok and the flight home, with an optional visit to the Grand Palace depending on the time.",
            "Llegada de madrugada a Bangkok y vuelo de regreso, con visita opcional al Gran Palacio según el horario.",
          ],
          ["gt8", "in7"],
          [
            day(9,
              ["Bangkok – vol retour", "Bangkok – flight home", "Bangkok – vuelo de regreso"],
              [
                "Arrivée matinale à Bangkok, petit-déjeuner dans un hôtel proche pour se rafraîchir, puis transfert à l'aéroport. En option : bateau-taxi jusqu'au Palais royal et au temple du Bouddha d'émeraude.",
                "An early arrival in Bangkok, breakfast at a nearby hotel to freshen up, then transfer to the airport. Optional: a river taxi to the Grand Palace and the Temple of the Emerald Buddha.",
                "Llegada temprano a Bangkok, desayuno en un hotel cercano para refrescarse y traslado al aeropuerto. Opcional: barco taxi hasta el Gran Palacio y el templo del Buda Esmeralda.",
              ], "gt8"),
            day(10, T_HOME, HOME, "in1"),
          ]
        ),
      ],
    }),

    // ───────────── 2. Naya Collection : Bangkok & Khao Lak — 11J/8N ─────────────
    trip({
      slug: "thailande-bangkok-khao-lak-sejour-11j",
      name: [
        "Thaïlande en séjour libre : Bangkok et la plage de Khao Lak",
        "Thailand at Your Own Pace: Bangkok and the Beach at Khao Lak",
        "Tailandia por libre: Bangkok y la playa de Khao Lak",
      ],
      tagline: [
        "Trois nuits dans un hôtel 4* avec rooftop à Bangkok, puis la mer d'Andaman en demi-pension",
        "Three nights in a 4* hotel with a rooftop in Bangkok, then the Andaman Sea on half board",
        "Tres noches en un hotel de 4* con azotea en Bangkok y el mar de Andamán en media pensión",
      ],
      description: [
        "Un combiné hôtelier, sans circuit en groupe, garanti dès un voyageur : trois nuits au JC Kevin Bangkok, un 4* supérieur (normes locales) du quartier de Sathorn doté de l'un des plus beaux rooftops de la ville, avec une demi-journée de découverte en bateau-taxi (Wat Pho, le quartier de Rattanakosin, le marché aux fleurs), puis un vol vers Phuket et cinq à neuf nuits au Khao Lak Laguna Resort 4*, les pieds dans l'eau, en demi-pension. Attention : le prix comprend les transferts, les hôtels et l'expérience à Bangkok, mais pas les vols internationaux.",
        "A hotel combination, with no group touring, guaranteed from one traveller: three nights at the JC Kevin Bangkok, a superior 4* (local rating) in the Sathorn district with one of the city's finest rooftops, including a half-day discovery by river taxi (Wat Pho, the Rattanakosin district, the flower market), then a flight to Phuket and five to nine nights at the Khao Lak Laguna Resort 4*, right on the beach, on half board. Please note: the price includes transfers, hotels and the Bangkok experience, but not international flights.",
        "Un combinado hotelero, sin circuito en grupo, garantizado desde un viajero: tres noches en el JC Kevin Bangkok, un 4* superior (categoría local) del barrio de Sathorn con una de las mejores azoteas de la ciudad, con media jornada de descubrimiento en barco taxi (Wat Pho, el barrio de Rattanakosin, el mercado de flores), y un vuelo a Phuket con cinco a nueve noches en el Khao Lak Laguna Resort 4*, junto al mar, en media pensión. Atención: el precio incluye traslados, hoteles y la experiencia en Bangkok, pero no los vuelos internacionales.",
      ],
      includes: [
        "Transferts aéroport et inter-hôtels,3 nuits à Bangkok en hôtel 4* sup,5 nuits à Khao Lak en hôtel 4*,Petits-déjeuners à Bangkok,Demi-pension à Khao Lak,Demi-journée de découverte de Bangkok,Vols internationaux non compris",
        "Airport and inter-hotel transfers,3 nights in Bangkok in a superior 4* hotel,5 nights in Khao Lak in a 4* hotel,Breakfasts in Bangkok,Half board in Khao Lak,Half-day Bangkok discovery,International flights not included",
        "Traslados al aeropuerto y entre hoteles,3 noches en Bangkok en hotel de 4* superior,5 noches en Khao Lak en hotel de 4*,Desayunos en Bangkok,Media pensión en Khao Lak,Media jornada de descubrimiento de Bangkok,Vuelos internacionales no incluidos",
      ],
      price: 1499, nights: 8, departureFrom: "Bangkok", image: "ny8",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,solo", maxGuests: 12, order: -87999,
      chapters: [
        chapter(
          ["Bangkok, la cité des anges", "Bangkok, the city of angels", "Bangkok, la ciudad de los ángeles"],
          [
            "Trois nuits au cœur de Bangkok, avec une demi-journée sur le fleuve Chao Phraya et du temps libre pour la ville.",
            "Three nights in the heart of Bangkok, with a half-day on the Chao Phraya River and free time for the city.",
            "Tres noches en el corazón de Bangkok, con media jornada por el río Chao Phraya y tiempo libre para la ciudad.",
          ],
          ["ny2", "ny5", "gt8"],
          [
            day(1, T_FLY,
              ["Vol pour Bangkok, non compris dans le prix. Nuit à bord.", "Flight to Bangkok, not included in the price. Night on board.", "Vuelo a Bangkok, no incluido en el precio. Noche a bordo."], "ny2"),
            day(2,
              ["Bienvenue à Bangkok", "Welcome to Bangkok", "Bienvenido a Bangkok"],
              [
                "Accueil à l'aéroport par un chauffeur anglophone et transfert à l'hôtel, dans le quartier d'affaires de Sathorn, à cinq minutes du parc Lumpini, avec sa terrasse sur le toit.",
                "Welcome at the airport by an English-speaking driver and transfer to the hotel, in the Sathorn business district, five minutes from Lumpini Park, with its rooftop terrace.",
                "Recibimiento en el aeropuerto por un chófer anglófono y traslado al hotel, en el barrio de negocios de Sathorn, a cinco minutos del parque Lumpini, con su terraza en la azotea.",
              ], "ny2"),
            day(3,
              ["Bangkok au fil du fleuve", "Bangkok along the river", "Bangkok a lo largo del río"],
              [
                "Demi-journée de découverte : métro aérien jusqu'à l'embarcadère, bateau-taxi sur le Chao Phraya, le Wat Pho et son bouddha couché de 46 mètres, le quartier historique de Rattanakosin et le marché aux fleurs de Pak Khlong Talat.",
                "A half-day discovery: the Skytrain to the pier, a river taxi on the Chao Phraya, Wat Pho and its 46-metre reclining Buddha, the historic Rattanakosin district and the Pak Khlong Talat flower market.",
                "Media jornada de descubrimiento: metro aéreo hasta el embarcadero, barco taxi por el Chao Phraya, el Wat Pho y su buda reclinado de 46 metros, el barrio histórico de Rattanakosin y el mercado de flores de Pak Khlong Talat.",
              ], "ny5"),
            day(4,
              ["Bangkok, journée libre", "Bangkok, free day", "Bangkok, jornada libre"],
              ["Journée libre à Bangkok.", "A free day in Bangkok.", "Jornada libre en Bangkok."], "gt8"),
          ]
        ),
        chapter(
          ["Khao Lak et la mer d'Andaman", "Khao Lak and the Andaman Sea", "Khao Lak y el mar de Andamán"],
          [
            "Un vol vers Phuket, puis Khao Lak, sa nature et ses plages calmes, pour cinq nuits ou plus en demi-pension.",
            "A flight to Phuket, then Khao Lak, its nature and quiet beaches, for five nights or more on half board.",
            "Un vuelo a Phuket y Khao Lak, con su naturaleza y sus playas tranquilas, para cinco noches o más en media pensión.",
          ],
          ["ny8", "su4", "su2"],
          [
            day(5,
              ["Bangkok – Phuket – Khao Lak", "Bangkok – Phuket – Khao Lak", "Bangkok – Phuket – Khao Lak"],
              [
                "Vol pour Phuket et transfert au Khao Lak Laguna Resort, où un représentant francophone vous accueille.",
                "Fly to Phuket and transfer to the Khao Lak Laguna Resort, where a French-speaking representative welcomes you.",
                "Vuelo a Phuket y traslado al Khao Lak Laguna Resort, donde le recibe un representante francófono.",
              ], "ny8"),
            day(6, T_BEACH, BEACH, "su4"),
            day(7, T_BEACH, BEACH, "su2"),
            day(8, T_BEACH, BEACH, "su3"),
            day(9,
              ["Khao Lak, séjour libre", "Khao Lak, free stay", "Khao Lak, estancia libre"],
              [
                "Dernière journée au bord de la mer d'Andaman. Le séjour balnéaire peut durer de cinq à neuf nuits.",
                "A last day by the Andaman Sea. The beach stay can last from five to nine nights.",
                "Última jornada a orillas del mar de Andamán. La estancia de playa puede durar de cinco a nueve noches.",
              ], "su5"),
            day(10, T_PHUKET_HOME, PHUKET_HOME, "su4"),
            day(11, T_HOME, HOME, "ny8"),
          ]
        ),
      ],
    }),

    // ───────────── 3. Combiné Thaïlande du Sud — 11J/9N ─────────────
    trip({
      slug: "thailande-sud-khao-sok-krabi-koh-lanta-11j",
      name: [
        "Thaïlande du Sud : Khao Lak, Khao Sok, Krabi et Koh Lanta",
        "Southern Thailand: Khao Lak, Khao Sok, Krabi and Koh Lanta",
        "Sur de Tailandia: Khao Lak, Khao Sok, Krabi y Koh Lanta",
      ],
      tagline: [
        "Un combiné de plages et de jungle, à votre rythme, d'un hôtel à l'autre",
        "A combination of beaches and jungle, at your own pace, from one hotel to the next",
        "Un combinado de playas y selva, a su ritmo, de un hotel a otro",
      ],
      description: [
        "Un itinéraire libre dans le Sud, avec les transferts organisés entre chaque étape : trois nuits à Khao Lak, une nuit dans la jungle de Khao Sok avec une sortie en bateau sur le lac de Cheow Lan, deux nuits à Krabi parmi les falaises karstiques, deux nuits sur l'île de Koh Lanta, dans un hôtel 5*, et une dernière nuit à Phuket. Les journées et la plupart des repas restent libres. Une version de 15 jours, avec plus de temps à chaque étape, est proposée à partir de 1 740 € par personne.",
        "A free-flowing route through the south, with transfers arranged between each stop: three nights in Khao Lak, a night in the Khao Sok jungle with a boat trip on Cheow Lan lake, two nights in Krabi among the karst cliffs, two nights on Koh Lanta island, in a 5* hotel, and a last night in Phuket. Days and most meals are free. A 15-day version, with more time at each stop, is offered from €1,740 per person.",
        "Un itinerario libre por el sur, con los traslados organizados entre cada etapa: tres noches en Khao Lak, una noche en la selva de Khao Sok con una salida en barco por el lago Cheow Lan, dos noches en Krabi entre los acantilados kársticos, dos noches en la isla de Koh Lanta, en un hotel de 5*, y una última noche en Phuket. Las jornadas y la mayoría de las comidas son libres. Existe una versión de 15 días, con más tiempo en cada etapa, desde 1.740 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport et inter-hôtels,9 nuits en hôtels 3* 4* et 5*,Petits-déjeuners,Sortie en bateau sur le lac de Cheow Lan,Assistance téléphonique sur place",
        "Flights from France,Airport and inter-hotel transfers,9 nights in 3* 4* and 5* hotels,Breakfasts,Boat trip on Cheow Lan lake,Local phone assistance",
        "Vuelos desde Francia,Traslados al aeropuerto y entre hoteles,9 noches en hoteles de 3* 4* y 5*,Desayunos,Salida en barco por el lago Cheow Lan,Asistencia telefónica in situ",
      ],
      price: 1577, nights: 9, departureFrom: "Genève", image: "su4",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,honeymoon,family", maxGuests: 12, order: -87998,
      chapters: [
        chapter(
          ["Khao Lak", "Khao Lak", "Khao Lak"],
          [
            "Trois nuits pour commencer, sur les plages calmes bordées de cocotiers de Khao Lak.",
            "Three nights to begin with, on the quiet, palm-lined beaches of Khao Lak.",
            "Tres noches para empezar, en las tranquilas playas bordeadas de cocoteros de Khao Lak.",
          ],
          ["su4", "su2", "su5"],
          [
            day(1, T_FLY, FLY, "su2"),
            day(2,
              ["Phuket – Khao Lak", "Phuket – Khao Lak", "Phuket – Khao Lak"],
              [
                "Arrivée à Phuket, accueil et transfert à votre hôtel de Khao Lak, où un représentant local vous donne les informations du séjour.",
                "Arrive in Phuket, welcome and transfer to your hotel in Khao Lak, where a local representative briefs you on the trip.",
                "Llegada a Phuket, recibimiento y traslado a su hotel de Khao Lak, donde un representante local le da la información del viaje.",
              ], "su4"),
            day(3, T_BEACH, BEACH, "su2"),
            day(4, T_BEACH, BEACH, "su5"),
          ]
        ),
        chapter(
          ["Khao Sok et Krabi", "Khao Sok and Krabi", "Khao Sok y Krabi"],
          [
            "Une nuit au cœur de la jungle de Khao Sok, puis Krabi, entre mer turquoise et falaises karstiques.",
            "A night in the heart of the Khao Sok jungle, then Krabi, between turquoise sea and karst cliffs.",
            "Una noche en el corazón de la selva de Khao Sok y Krabi, entre mar turquesa y acantilados kársticos.",
          ],
          ["mg1", "mg8", "jy3", "jy1"],
          [
            day(5, ["Khao Sok et le lac de Cheow Lan", "Khao Sok and Cheow Lan lake", "Khao Sok y el lago Cheow Lan"],
              [
                "Route vers Khao Sok (130 km) et sortie en bateau à moteur sur le lac de Cheow Lan, l'un des plus beaux lacs d'Asie du Sud-Est, entre eaux émeraude et rochers surgis de l'eau. Nuit en pleine jungle.",
                "Drive to Khao Sok (130 km) and a motorboat trip on Cheow Lan lake, one of the most beautiful lakes in Southeast Asia, between emerald water and rocks rising from it. A night in the jungle.",
                "Carretera hacia Khao Sok (130 km) y salida en lancha por el lago Cheow Lan, uno de los lagos más bellos del Sudeste Asiático, entre aguas esmeralda y rocas que surgen del agua. Noche en plena selva.",
              ], "mg1"),
            day(6, ["Khao Sok – Krabi", "Khao Sok – Krabi", "Khao Sok – Krabi"],
              [
                "Deux heures de route à travers les paysages vallonnés du Sud jusqu'à Krabi, point de départ vers les îles, les grottes marines et les lagons.",
                "Two hours' drive through the rolling landscapes of the south to Krabi, the starting point for the islands, sea caves and lagoons.",
                "Dos horas de carretera por los paisajes ondulados del sur hasta Krabi, punto de partida hacia las islas, las grutas marinas y las lagunas.",
              ], "jy3"),
            day(7, ["Krabi, journée libre", "Krabi, free day", "Krabi, jornada libre"],
              ["Journée et repas libres à Krabi.", "A free day in Krabi, with meals on your own.", "Jornada y comidas libres en Krabi."], "jy1"),
          ]
        ),
        chapter(
          ["Koh Lanta et Phuket", "Koh Lanta and Phuket", "Koh Lanta y Phuket"],
          [
            "Une île paisible aux plages sauvages, puis une dernière nuit à Phuket avant le retour.",
            "A peaceful island with wild beaches, then a last night in Phuket before going home.",
            "Una isla tranquila de playas salvajes y una última noche en Phuket antes del regreso.",
          ],
          ["gt13", "gt10", "pa1"],
          [
            day(8, ["Krabi – Koh Lanta", "Krabi – Koh Lanta", "Krabi – Koh Lanta"],
              [
                "Minibus puis ferry jusqu'à Koh Lanta (2 à 3 heures), une île paisible d'où partent les sorties en bateau, la plongée et le kayak dans la mangrove.",
                "Minibus then ferry to Koh Lanta (2 to 3 hours), a peaceful island and the starting point for boat trips, diving and mangrove kayaking.",
                "Minibús y ferry hasta Koh Lanta (de 2 a 3 horas), una isla tranquila desde donde salen excursiones en barco, buceo y kayak por el manglar.",
              ], "gt13"),
            day(9, ["Koh Lanta, journée libre", "Koh Lanta, free day", "Koh Lanta, jornada libre"],
              ["Journée et repas libres sur l'île.", "A free day on the island, with meals on your own.", "Jornada y comidas libres en la isla."], "gt10"),
            day(10, ["Koh Lanta – Phuket", "Koh Lanta – Phuket", "Koh Lanta – Phuket"],
              [
                "Ferry et route côtière jusqu'à Phuket (4 à 5 heures), pour une dernière soirée entre plages, culture locale et boutiques.",
                "Ferry and coast road to Phuket (4 to 5 hours), for a last evening of beaches, local culture and shopping.",
                "Ferry y carretera costera hasta Phuket (de 4 a 5 horas), para una última velada entre playas, cultura local y tiendas.",
              ], "pa1"),
            day(11, T_PHUKET_HOME, PHUKET_HOME, "su4"),
          ]
        ),
      ],
    }),

    // ───────────── 4. Paradis thaïlandais — 12J/9N ─────────────
    trip({
      slug: "thailande-paradis-phuket-krabi-phi-phi-12j",
      name: [
        "Thaïlande : Phuket, baie de Phang Nga, Krabi, Phi Phi et Khao Lak",
        "Thailand: Phuket, Phang Nga Bay, Krabi, Phi Phi and Khao Lak",
        "Tailandia: Phuket, bahía de Phang Nga, Krabi, Phi Phi y Khao Lak",
      ],
      tagline: [
        "Cinq journées d'excursions dans les îles du Sud, puis quatre nuits à Khao Lak",
        "Five days of excursions in the southern islands, then four nights in Khao Lak",
        "Cinco jornadas de excursiones por las islas del sur y cuatro noches en Khao Lak",
      ],
      description: [
        "Le Sud thaïlandais en petit groupe de 12 personnes au plus : la découverte de Phuket et du temple de Chalong, la baie de Phang Nga en bateau à longue queue et le village sur pilotis de Koh Panyee, les quatre îles de Krabi avec pique-nique sur la plage, une journée en bateau rapide à Phi Phi, puis le lac de Cheow Lan dans le parc de Khao Sok. Le voyage se termine par quatre nuits libres à Khao Lak.",
        "Southern Thailand in a small group of 12 at most: a tour of Phuket and Chalong temple, Phang Nga Bay by longtail boat and the stilt village of Koh Panyee, Krabi's four islands with a picnic on the beach, a day by speedboat to Phi Phi, then Cheow Lan lake in Khao Sok park. The trip ends with four free nights in Khao Lak.",
        "El sur de Tailandia en grupo reducido de 12 personas como máximo: Phuket y el templo de Chalong, la bahía de Phang Nga en barco de cola larga y el pueblo sobre pilotes de Koh Panyee, las cuatro islas de Krabi con pícnic en la playa, una jornada en lancha rápida a Phi Phi y el lago Cheow Lan en el parque de Khao Sok. El viaje termina con cuatro noches libres en Khao Lak.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,9 nuits en hôtels,Pension selon programme,Excursions en bateau du programme,Guide,Assistance sur place",
        "Flights from France,Airport transfers,9 hotel nights,Meals as per programme,Boat excursions in the programme,Guide,Local assistance",
        "Vuelos desde Francia,Traslados al aeropuerto,9 noches de hotel,Comidas según programa,Excursiones en barco del programa,Guía,Asistencia in situ",
      ],
      price: 2101, nights: 9, departureFrom: "Genève", image: "pa4",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,family", maxGuests: 12, order: -87997,
      chapters: [
        chapter(
          ["Phuket et la baie de Phang Nga", "Phuket and Phang Nga Bay", "Phuket y la bahía de Phang Nga"],
          [
            "Deux nuits à Phuket, puis la baie de Phang Nga et ses pitons de calcaire en bateau à longue queue.",
            "Two nights in Phuket, then Phang Nga Bay and its limestone pinnacles by longtail boat.",
            "Dos noches en Phuket y la bahía de Phang Nga con sus picos calizos en barco de cola larga.",
          ],
          ["pa1", "pa2", "pa3", "jy2"],
          [
            day(1, T_FLY, FLY, "pa2"),
            day(2, ["Arrivée à Phuket", "Arrival in Phuket", "Llegada a Phuket"],
              ["Accueil à l'aéroport de Phuket par le guide et transfert à l'hôtel.", "Welcome at Phuket airport by the guide and transfer to the hotel.", "Recibimiento en el aeropuerto de Phuket por el guía y traslado al hotel."], "pa2"),
            day(3, ["Découverte de Phuket", "Discovering Phuket", "Descubrimiento de Phuket"],
              [
                "Le point de vue de Kata, le cap Promthep et sa vue sur les îles, le temple de Chalong, une usine de noix de cajou et une fabrique de perles de culture. Déjeuner de pad thaï et après-midi libre.",
                "The Kata viewpoint, Promthep Cape and its view of the islands, Chalong temple, a cashew factory and a cultured-pearl workshop. A pad thai lunch and a free afternoon.",
                "El mirador de Kata, el cabo Promthep y su vista de las islas, el templo de Chalong, una fábrica de anacardos y un taller de perlas cultivadas. Almuerzo de pad thai y tarde libre.",
              ], "pa1"),
            day(4, ["La baie de Phang Nga et Koh Panyee – Krabi", "Phang Nga Bay and Koh Panyee – Krabi", "La bahía de Phang Nga y Koh Panyee – Krabi"],
              [
                "En bateau à longue queue dans la baie de Phang Nga, jusqu'aux îles de Koh Tapu et de Koh Panyee, village de pêcheurs sur pilotis où l'on déjeune. Route vers Krabi.",
                "By longtail boat in Phang Nga Bay, to the islands of Koh Tapu and Koh Panyee, a fishing village on stilts where you have lunch. Drive to Krabi.",
                "En barco de cola larga por la bahía de Phang Nga, hasta las islas de Koh Tapu y Koh Panyee, pueblo de pescadores sobre pilotes donde se almuerza. Carretera hacia Krabi.",
              ], "pa3"),
          ]
        ),
        chapter(
          ["Krabi et Phi Phi", "Krabi and Phi Phi", "Krabi y Phi Phi"],
          [
            "Deux journées en mer : les quatre îles de Krabi, puis l'archipel de Phi Phi.",
            "Two days at sea: Krabi's four islands, then the Phi Phi archipelago.",
            "Dos jornadas en el mar: las cuatro islas de Krabi y el archipiélago de Phi Phi.",
          ],
          ["pa4", "pa5", "jy3", "jy1"],
          [
            day(5, ["Les îles de Krabi", "The islands of Krabi", "Las islas de Krabi"],
              [
                "En bateau à longue queue : la plage de Phra Nang, puis Koh Tup, Koh Kai et Koh Poda, avec pique-nique sur le sable. Après-midi libre.",
                "By longtail boat: Phra Nang beach, then Koh Tup, Koh Kai and Koh Poda, with a picnic on the sand. A free afternoon.",
                "En barco de cola larga: la playa de Phra Nang y después Koh Tup, Koh Kai y Koh Poda, con pícnic en la arena. Tarde libre.",
              ], "pa4"),
            day(6, T_PHIPHI, PHIPHI, "pa5"),
          ]
        ),
        chapter(
          ["Khao Sok et Khao Lak", "Khao Sok and Khao Lak", "Khao Sok y Khao Lak"],
          [
            "Le lac de Cheow Lan sur la route, puis quatre nuits au bord de la mer d'Andaman.",
            "Cheow Lan lake on the way, then four nights by the Andaman Sea.",
            "El lago Cheow Lan en el camino y cuatro noches a orillas del mar de Andamán.",
          ],
          ["pa6", "pa8", "su4", "su2"],
          [
            day(7, ["Le lac de Cheow Lan – Khao Lak", "Cheow Lan lake – Khao Lak", "El lago Cheow Lan – Khao Lak"],
              [
                "Route vers Khao Sok et le lac de Cheow Lan, randonnée jusqu'à une grotte et déjeuner dans un restaurant flottant. Continuation vers Khao Lak.",
                "Drive to Khao Sok and Cheow Lan lake, a hike to a cave and lunch in a floating restaurant. Continue to Khao Lak.",
                "Carretera hacia Khao Sok y el lago Cheow Lan, caminata hasta una cueva y almuerzo en un restaurante flotante. Continuación hacia Khao Lak.",
              ], "pa6"),
            day(8, T_BEACH, BEACH, "pa8"),
            day(9, T_BEACH, BEACH, "su4"),
            day(10, T_BEACH, BEACH, "su2"),
            day(11, T_PHUKET_HOME, PHUKET_HOME, "su5"),
            day(12, T_HOME, HOME, "pa4"),
          ]
        ),
      ],
    }),

    // ───────────── 5. Thaïlande Intimiste — 13J/10N ─────────────
    trip({
      slug: "thailande-intimiste-kanchanaburi-chiang-mai-13j",
      name: [
        "Thaïlande en petit groupe : Bangkok, Kanchanaburi et les villages du Nord",
        "Thailand in a Small Group: Bangkok, Kanchanaburi and the Villages of the North",
        "Tailandia en grupo reducido: Bangkok, Kanchanaburi y los pueblos del Norte",
      ],
      tagline: [
        "Seize voyageurs au plus, un cours de cuisine, une ferme éthique d'éléphants et une journée en rizière",
        "Sixteen travellers at most, a cooking class, an ethical elephant farm and a day in the rice fields",
        "Dieciséis viajeros como máximo, una clase de cocina, una granja ética de elefantes y una jornada en el arrozal",
      ],
      description: [
        "Un circuit plus proche des habitants, en groupe de 16 personnes au plus : deux jours à Bangkok entre les klongs, le Wat Arun et le Grand Palais, Kanchanaburi et le pont de la rivière Kwaï, les cascades d'Erawan, Ayutthaya, Sukhothai et Lampang, puis le Nord autrement : un cours de cuisine à Chiang Mai, une nuit au village de Mae Kampong, une ferme éthique d'éléphants chez les Karen de Mae Wang et une journée avec les riziculteurs. Retour à Bangkok en avion. Extensions plage de 3 à 5 nuits à partir de 2 338 € par personne ; version privative à partir de 3 422 €.",
        "A tour closer to local people, in a group of 16 at most: two days in Bangkok between the klongs, Wat Arun and the Grand Palace, Kanchanaburi and the bridge on the River Kwai, the Erawan waterfalls, Ayutthaya, Sukhothai and Lampang, then the North differently: a cooking class in Chiang Mai, a night in the village of Mae Kampong, an ethical elephant farm with the Karen of Mae Wang and a day with the rice farmers. Back to Bangkok by plane. Beach extensions of 3 to 5 nights from €2,338 per person; private version from €3,422.",
        "Un circuito más cercano a la gente, en grupo de 16 personas como máximo: dos días en Bangkok entre los klongs, el Wat Arun y el Gran Palacio, Kanchanaburi y el puente sobre el río Kwai, las cascadas de Erawan, Ayutthaya, Sukhothai y Lampang, y el Norte de otra manera: una clase de cocina en Chiang Mai, una noche en el pueblo de Mae Kampong, una granja ética de elefantes con los karen de Mae Wang y una jornada con los arroceros. Regreso a Bangkok en avión. Extensiones de playa de 3 a 5 noches desde 2.338 € por persona; versión privada desde 3.422 €.",
      ],
      includes: [
        "Vols depuis la France,Vol Chiang Mai–Bangkok,10 nuits en hôtels 1re catégorie,Pension selon programme,Cours de cuisine et ferme éthique d'éléphants,Guide francophone,Visites et entrées du programme",
        "Flights from France,Chiang Mai–Bangkok flight,10 nights in first-class hotels,Meals as per programme,Cooking class and ethical elephant farm,French-speaking guide,Visits and entrance fees in the programme",
        "Vuelos desde Francia,Vuelo Chiang Mai–Bangkok,10 noches en hoteles de primera categoría,Comidas según programa,Clase de cocina y granja ética de elefantes,Guía francófono,Visitas y entradas del programa",
      ],
      price: 2148, nights: 10, departureFrom: "Genève", image: "it3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -87996,
      chapters: [
        chapter(
          ["Bangkok", "Bangkok", "Bangkok"],
          [
            "Deux journées pour la capitale : les canaux, le temple de l'Aurore et le Grand Palais.",
            "Two days for the capital: the canals, the Temple of Dawn and the Grand Palace.",
            "Dos jornadas para la capital: los canales, el templo del Amanecer y el Gran Palacio.",
          ],
          ["gt8", "it4", "it1"],
          [
            day(1, T_FLY, FLY, "gt8"),
            day(2, T_BKK, BKK, "it4"),
            day(3, ["Les klongs et le Wat Arun", "The klongs and Wat Arun", "Los klongs y el Wat Arun"],
              [
                "Balade sur les klongs, les canaux qui valent à Bangkok son surnom de Venise d'Asie, puis visite du Wat Arun, le temple de l'Aurore, haut de 82 mètres au bord du fleuve Chao Phraya.",
                "A ride along the klongs, the canals that earned Bangkok the name of the Venice of Asia, then a visit to Wat Arun, the 82-metre Temple of Dawn on the Chao Phraya River.",
                "Paseo por los klongs, los canales que valieron a Bangkok el apodo de Venecia de Asia, y visita al Wat Arun, el templo del Amanecer, de 82 metros, a orillas del río Chao Phraya.",
              ], "it4"),
            day(4, ["Le Grand Palais", "The Grand Palace", "El Gran Palacio"],
              [
                "Visite du Grand Palais et du Wat Phra Kaew, le temple du Bouddha d'émeraude, le plus sacré du pays. Après-midi et dîner libres.",
                "Visit the Grand Palace and Wat Phra Kaew, the Temple of the Emerald Buddha, the most sacred in the country. A free afternoon and dinner.",
                "Visita al Gran Palacio y al Wat Phra Kaew, el templo del Buda Esmeralda, el más sagrado del país. Tarde y cena libres.",
              ], "gt8"),
          ]
        ),
        chapter(
          ["Kanchanaburi et les anciennes capitales", "Kanchanaburi and the old capitals", "Kanchanaburi y las antiguas capitales"],
          [
            "Les marchés de Mae Klong et Damnoen Saduak, la rivière Kwaï et Erawan, puis Ayutthaya, Sukhothai et Lampang.",
            "The markets of Mae Klong and Damnoen Saduak, the River Kwai and Erawan, then Ayutthaya, Sukhothai and Lampang.",
            "Los mercados de Mae Klong y Damnoen Saduak, el río Kwai y Erawan, y después Ayutthaya, Sukhothai y Lampang.",
          ],
          ["it2", "it3", "mg2", "mg3"],
          [
            day(5, ["Les marchés – Kanchanaburi", "The markets – Kanchanaburi", "Los mercados – Kanchanaburi"],
              [
                "Le marché de Mae Klong sur les rails et le marché flottant de Damnoen Saduak en pirogue. Continuation vers Kanchanaburi : le cimetière des Alliés et le pont de la rivière Kwaï (environ 180 km).",
                "Mae Klong market on the rails and the floating market of Damnoen Saduak by boat. Continue to Kanchanaburi: the Allied war cemetery and the bridge on the River Kwai (about 180 km).",
                "El mercado de Mae Klong sobre las vías y el mercado flotante de Damnoen Saduak en piragua. Continuación hacia Kanchanaburi: el cementerio aliado y el puente sobre el río Kwai (unos 180 km).",
              ], "it2"),
            day(6, ["Les cascades d'Erawan", "The Erawan waterfalls", "Las cascadas de Erawan"],
              [
                "Matinée dans le parc national d'Erawan : trois heures de marche aller-retour le long de sept niveaux de cascades, avec des baignades dans les bassins naturels et des singes curieux.",
                "A morning in Erawan National Park: a three-hour round-trip walk along seven tiers of waterfalls, with swims in the natural pools and curious monkeys.",
                "Mañana en el parque nacional de Erawan: tres horas de caminata ida y vuelta a lo largo de siete niveles de cascadas, con baños en las pozas naturales y monos curiosos.",
              ], "it7"),
            day(7, ["Ayutthaya et Uthai Thani – Sukhothai", "Ayutthaya and Uthai Thani – Sukhothai", "Ayutthaya y Uthai Thani – Sukhothai"],
              [
                "Ayutthaya, ancienne capitale du Siam classée à l'Unesco, puis Uthai Thani, « la ville violette », ses rizières et ses maisons flottantes. Route vers Sukhothai (environ 500 km).",
                "Ayutthaya, the former capital of Siam and a UNESCO site, then Uthai Thani, 'the purple city', its rice fields and floating houses. Drive to Sukhothai (about 500 km).",
                "Ayutthaya, antigua capital de Siam inscrita en la Unesco, y Uthai Thani, «la ciudad violeta», con sus arrozales y casas flotantes. Carretera hacia Sukhothai (unos 500 km).",
              ], "it3"),
            day(8, ["Sukhothai et Lampang – Chiang Mai", "Sukhothai and Lampang – Chiang Mai", "Sukhothai y Lampang – Chiang Mai"],
              [
                "Les temples de Sukhothai, capitale d'un puissant royaume classée à l'Unesco, puis le Wat Phra That Lampang Luang, joyau de l'architecture Lanna. Arrivée à Chiang Mai.",
                "The temples of Sukhothai, capital of a powerful kingdom and a UNESCO site, then Wat Phra That Lampang Luang, a gem of Lanna architecture. Arrive in Chiang Mai.",
                "Los templos de Sukhothai, capital de un poderoso reino inscrita en la Unesco, y el Wat Phra That Lampang Luang, joya de la arquitectura lanna. Llegada a Chiang Mai.",
              ], "mg3"),
          ]
        ),
        chapter(
          ["Le Nord autrement", "The North differently", "El Norte de otra manera"],
          [
            "Trois jours avec les habitants du Nord : cuisine, village de montagne, éléphants et rizières.",
            "Three days with the people of the North: cooking, a mountain village, elephants and rice fields.",
            "Tres días con los habitantes del Norte: cocina, pueblo de montaña, elefantes y arrozales.",
          ],
          ["mg4", "mg6", "in6", "in5"],
          [
            day(9, ["Doi Suthep et cours de cuisine – Mae Kampong", "Doi Suthep and a cooking class – Mae Kampong", "Doi Suthep y clase de cocina – Mae Kampong"],
              [
                "Visite du Doi Suthep et de sa vue sur Chiang Mai. Cours de cuisine qui commence au marché, avec votre professeur, pour acheter les produits frais. Route vers le village de Mae Kampong pour la nuit.",
                "Visit Doi Suthep and its view over Chiang Mai. A cooking class that begins at the market, with your teacher, buying fresh produce. Drive to the village of Mae Kampong for the night.",
                "Visita al Doi Suthep y su vista sobre Chiang Mai. Clase de cocina que empieza en el mercado, con su profesor, comprando productos frescos. Carretera hacia el pueblo de Mae Kampong para la noche.",
              ], "mg4"),
            day(10, ["La ferme éthique d'éléphants de Mae Wang", "The ethical elephant farm in Mae Wang", "La granja ética de elefantes de Mae Wang"],
              [
                "Route vers Mae Wang, où les Karen ont gardé leurs traditions depuis près d'un siècle, et journée dans une ferme éthique d'éléphants : on les nourrit et on passe du temps avec eux, sans les monter.",
                "Drive to Mae Wang, where the Karen have kept their traditions for nearly a century, and a day at an ethical elephant farm: you feed them and spend time with them, without riding them.",
                "Carretera hacia Mae Wang, donde los karen han conservado sus tradiciones durante casi un siglo, y jornada en una granja ética de elefantes: se les alimenta y se pasa tiempo con ellos, sin montarlos.",
              ], "in6"),
            day(11, ["Une matinée en rizière – vol pour Bangkok", "A morning in the rice fields – flight to Bangkok", "Una mañana en el arrozal – vuelo a Bangkok"],
              [
                "Vêtu de l'habit local, vous apprenez avec les paysans le repiquage, le labour à la charrue et la récolte du riz. Retour à Chiang Mai pour le déjeuner, puis vol pour Bangkok.",
                "Dressed in local clothes, you learn transplanting, ox ploughing and harvesting with the rice farmers. Back to Chiang Mai for lunch, then fly to Bangkok.",
                "Vestido con ropa local, aprende con los campesinos el trasplante, el arado con bueyes y la cosecha del arroz. Regreso a Chiang Mai para el almuerzo y vuelo a Bangkok.",
              ], "in5"),
            day(12, ["Bangkok – vol retour", "Bangkok – flight home", "Bangkok – vuelo de regreso"],
              ["Transfert à l'aéroport selon l'heure du vol et envol pour la France.", "Transfer to the airport according to your flight time and fly to France.", "Traslado al aeropuerto según la hora del vuelo y vuelo a Francia."], "gt8"),
            day(13, T_HOME, HOME, "it1"),
          ]
        ),
      ],
    }),

    // ───────────── 6. Magie de la Thaïlande du Nord au Sud — 15J/12N ─────────────
    trip({
      slug: "thailande-nord-sud-khao-sok-khao-lak-15j",
      name: [
        "Thaïlande du Nord au Sud : Triangle d'or, Khao Sok et Khao Lak",
        "Thailand from North to South: the Golden Triangle, Khao Sok and Khao Lak",
        "Tailandia de norte a sur: Triángulo de Oro, Khao Sok y Khao Lak",
      ],
      tagline: [
        "Les incontournables du Nord, la jungle de Khao Sok, puis trois nuits sur la mer d'Andaman",
        "The essentials of the North, the Khao Sok jungle, then three nights on the Andaman Sea",
        "Lo imprescindible del Norte, la selva de Khao Sok y tres noches junto al mar de Andamán",
      ],
      description: [
        "Le circuit des incontournables prolongé vers le Sud. Après Bangkok, Ayutthaya, Sukhothai, le Triangle d'or et Chiang Mai, le train de nuit ramène à Bangkok, d'où un vol mène à Surat Thani : deux nuits dans un lodge du parc de Khao Sok, avec le lac de Cheow Lan, puis trois nuits libres à Khao Lak, au bord de la mer d'Andaman. Groupe de 24 personnes au plus, guide francophone. Version privative à partir de 3 169 € par personne.",
        "The essentials tour extended to the south. After Bangkok, Ayutthaya, Sukhothai, the Golden Triangle and Chiang Mai, the night train returns to Bangkok, from where a flight takes you to Surat Thani: two nights in a lodge in Khao Sok park, with Cheow Lan lake, then three free nights in Khao Lak, by the Andaman Sea. Groups of 24 at most, French-speaking guide. Private version from €3,169 per person.",
        "El circuito de lo imprescindible prolongado hacia el sur. Tras Bangkok, Ayutthaya, Sukhothai, el Triángulo de Oro y Chiang Mai, el tren nocturno regresa a Bangkok, desde donde un vuelo lleva a Surat Thani: dos noches en un lodge del parque de Khao Sok, con el lago Cheow Lan, y tres noches libres en Khao Lak, a orillas del mar de Andamán. Grupos de 24 personas como máximo, guía francófono. Versión privada desde 3.169 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Vol Bangkok–Surat Thani,11 nuits en hôtels et lodge,1 nuit en train couchette,Pension selon programme,Guide francophone,Visites et entrées du programme",
        "Flights from France,Bangkok–Surat Thani flight,11 nights in hotels and a lodge,1 night in a sleeper train,Meals as per programme,French-speaking guide,Visits and entrance fees in the programme",
        "Vuelos desde Francia,Vuelo Bangkok–Surat Thani,11 noches en hoteles y lodge,1 noche en tren litera,Comidas según programa,Guía francófono,Visitas y entradas del programa",
      ],
      price: 2386, nights: 12, departureFrom: "Barcelone", image: "mg7",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 24, order: -87995,
      chapters: [
        chapter(["Le départ", "Departure", "La salida"], ["Vol vers Bangkok.", "Flight to Bangkok.", "Vuelo a Bangkok."], ["mg6"], [day(1, T_FLY, FLY, "mg6")]),
        ...northChapters(["mg2", "mg3", "gt12", "gt8"], ["mg7", "mg4", "mg6", "mg5"]),
        chapter(
          ["Khao Sok et Khao Lak", "Khao Sok and Khao Lak", "Khao Sok y Khao Lak"],
          [
            "Un vol vers le Sud, deux nuits dans la jungle de Khao Sok, puis la plage.",
            "A flight south, two nights in the Khao Sok jungle, then the beach.",
            "Un vuelo hacia el sur, dos noches en la selva de Khao Sok y la playa.",
          ],
          ["mg8", "mg1", "mg9", "su4"],
          [
            day(9, T_KHAOSOK, KHAOSOK, "mg8"),
            day(10, T_CHEOW, CHEOW, "mg1"),
            day(11, ["Khao Sok – Khao Lak", "Khao Sok – Khao Lak", "Khao Sok – Khao Lak"],
              ["Route vers les plages de sable blanc de Khao Lak et installation dans un hôtel en bord de mer.", "Drive to the white-sand beaches of Khao Lak and check in at a seafront hotel.", "Carretera hacia las playas de arena blanca de Khao Lak e instalación en un hotel frente al mar."], "mg9"),
            day(12, T_BEACH, BEACH, "su4"),
            day(13, T_BEACH, BEACH, "su2"),
            day(14, T_PHUKET_HOME, PHUKET_HOME, "su5"),
            day(15, T_HOME, HOME, "mg7"),
          ]
        ),
      ],
    }),

    // ───────────── 7. Joyaux de la Thaïlande du Sud — 12J/9N ─────────────
    trip({
      slug: "thailande-joyaux-sud-phang-nga-phi-phi-12j",
      name: [
        "Joyaux du Sud thaïlandais : Phang Nga, Krabi, Phi Phi et Khao Lak",
        "Jewels of Southern Thailand: Phang Nga, Krabi, Phi Phi and Khao Lak",
        "Joyas del sur de Tailandia: Phang Nga, Krabi, Phi Phi y Khao Lak",
      ],
      tagline: [
        "Douze voyageurs au plus, la croisière de Phang Nga et l'île de James Bond, et un repos à Khao Lak",
        "Twelve travellers at most, the Phang Nga cruise and James Bond Island, and a rest in Khao Lak",
        "Doce viajeros como máximo, el crucero de Phang Nga y la isla de James Bond, y un descanso en Khao Lak",
      ],
      description: [
        "Les plus beaux paysages marins du Sud, en petit groupe de 12 personnes au plus avec un guide francophone : Phuket et son grand temple de Chalong, une croisière dans le parc national d'Ao Phang Nga, rendu célèbre par « L'homme au pistolet d'or », les quatre îles de Krabi, l'archipel de Phi Phi, le lac de Cheow Lan dans la jungle de Khao Sok, puis trois nuits de détente à Khao Lak. Hôtels de charme 3* et 4* (normes locales).",
        "The finest seascapes of the south, in a small group of 12 at most with a French-speaking guide: Phuket and its great Chalong temple, a cruise in Ao Phang Nga National Park, made famous by 'The Man with the Golden Gun', Krabi's four islands, the Phi Phi archipelago, Cheow Lan lake in the Khao Sok jungle, then three nights' rest in Khao Lak. Charming 3* and 4* hotels (local rating).",
        "Los paisajes marinos más bellos del sur, en grupo reducido de 12 personas como máximo con guía francófono: Phuket y su gran templo de Chalong, un crucero por el parque nacional de Ao Phang Nga, famoso por «El hombre de la pistola de oro», las cuatro islas de Krabi, el archipiélago de Phi Phi, el lago Cheow Lan en la selva de Khao Sok y tres noches de descanso en Khao Lak. Hoteles con encanto de 3* y 4* (categoría local).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,9 nuits en hôtels de charme 3* et 4*,Pension selon programme,Croisières et excursions en bateau,Guide accompagnateur francophone",
        "Flights from France,Airport transfers,9 nights in charming 3* and 4* hotels,Meals as per programme,Cruises and boat excursions,French-speaking tour guide",
        "Vuelos desde Francia,Traslados al aeropuerto,9 noches en hoteles con encanto de 3* y 4*,Comidas según programa,Cruceros y excursiones en barco,Guía acompañante francófono",
      ],
      price: 2508, nights: 9, departureFrom: "Bruxelles", image: "jy2",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,groups", maxGuests: 12, order: -87994,
      chapters: [
        chapter(
          ["Phuket", "Phuket", "Phuket"],
          [
            "Deux nuits pour découvrir le sud de l'île, ses plages et son grand temple.",
            "Two nights to discover the south of the island, its beaches and its great temple.",
            "Dos noches para descubrir el sur de la isla, sus playas y su gran templo.",
          ],
          ["jy4", "pa1", "pa2"],
          [
            day(1, T_FLY, FLY, "pa2"),
            day(2, ["Arrivée à Phuket", "Arrival in Phuket", "Llegada a Phuket"],
              ["Accueil à l'aéroport par votre guide francophone et transfert à l'hôtel. Repas libres.", "Welcome at the airport by your French-speaking guide and transfer to the hotel. Meals on your own.", "Recibimiento en el aeropuerto por su guía francófono y traslado al hotel. Comidas libres."], "pa1"),
            day(3, ["Le sud de Phuket", "Southern Phuket", "El sur de Phuket"],
              [
                "Le point de vue de Kata, d'où l'on voit trois plages, le cap Promthep face à Koh Raja et Koh Phi Phi, puis le Wat Chalong, le plus grand temple bouddhiste de l'île.",
                "The Kata viewpoint, looking over three beaches, Promthep Cape facing Koh Raja and Koh Phi Phi, then Wat Chalong, the largest Buddhist temple on the island.",
                "El mirador de Kata, desde donde se ven tres playas, el cabo Promthep frente a Koh Raja y Koh Phi Phi, y el Wat Chalong, el mayor templo budista de la isla.",
              ], "jy4"),
          ]
        ),
        chapter(
          ["Phang Nga, Krabi et Phi Phi", "Phang Nga, Krabi and Phi Phi", "Phang Nga, Krabi y Phi Phi"],
          [
            "Trois jours en mer : la baie de Phang Nga, les îles de Krabi et l'archipel de Phi Phi.",
            "Three days at sea: Phang Nga Bay, the islands of Krabi and the Phi Phi archipelago.",
            "Tres días en el mar: la bahía de Phang Nga, las islas de Krabi y el archipiélago de Phi Phi.",
          ],
          ["jy2", "jy6", "jy1", "jy3", "pa5"],
          [
            day(4, ["La baie de Phang Nga – Krabi", "Phang Nga Bay – Krabi", "La bahía de Phang Nga – Krabi"],
              [
                "Croisière dans le parc national d'Ao Phang Nga, la star du Sud, devenue célèbre avec le James Bond « L'homme au pistolet d'or » (1974). Route vers Krabi.",
                "A cruise in Ao Phang Nga National Park, the star of the south, made famous by the James Bond film 'The Man with the Golden Gun' (1974). Drive to Krabi.",
                "Crucero por el parque nacional de Ao Phang Nga, la estrella del sur, famosa desde la película de James Bond «El hombre de la pistola de oro» (1974). Carretera hacia Krabi.",
              ], "jy2"),
            day(5, ["Les quatre îles de Krabi", "Krabi's four islands", "Las cuatro islas de Krabi"],
              [
                "En bateau, puisque la plage n'est pas accessible en voiture, premier arrêt à Phra Nang, sable blanc et eau turquoise, puis les îles voisines, entre falaises karstiques et lagons.",
                "By boat, since the beach cannot be reached by car, a first stop at Phra Nang, white sand and turquoise water, then the neighbouring islands, between karst cliffs and lagoons.",
                "En barco, ya que la playa no es accesible en coche, primera parada en Phra Nang, arena blanca y agua turquesa, y después las islas vecinas, entre acantilados kársticos y lagunas.",
              ], "jy1"),
            day(6, T_PHIPHI, PHIPHI, "pa5"),
          ]
        ),
        chapter(
          ["Khao Sok et Khao Lak", "Khao Sok and Khao Lak", "Khao Sok y Khao Lak"],
          [
            "Le lac de Cheow Lan, puis trois nuits sur la plage de Khao Lak pour finir.",
            "Cheow Lan lake, then three nights on the beach at Khao Lak to finish.",
            "El lago Cheow Lan y tres noches en la playa de Khao Lak para terminar.",
          ],
          ["mg8", "jy7", "su4", "su5"],
          [
            day(7, ["Le lac de Cheow Lan – Khao Lak", "Cheow Lan lake – Khao Lak", "El lago Cheow Lan – Khao Lak"],
              [
                "Direction le lac de Cheow Lan, joyau caché du parc de Khao Sok : pitons calcaires, jungle et déjeuner dans un restaurant flottant, puis randonnée jusqu'à une grotte. Continuation vers la plage de Khao Lak.",
                "Head for Cheow Lan lake, the hidden gem of Khao Sok park: limestone peaks, jungle and lunch in a floating restaurant, then a hike to a cave. Continue to the beach at Khao Lak.",
                "Rumbo al lago Cheow Lan, joya escondida del parque de Khao Sok: picos calizos, selva y almuerzo en un restaurante flotante, y caminata hasta una cueva. Continuación hacia la playa de Khao Lak.",
              ], "mg8"),
            day(8, T_BEACH, BEACH, "jy7"),
            day(9, T_BEACH, BEACH, "su4"),
            day(10, T_BEACH, BEACH, "su5"),
            day(11, T_PHUKET_HOME, PHUKET_HOME, "su2"),
            day(12, T_HOME, HOME, "jy2"),
          ]
        ),
      ],
    }),

    // ───────────── 8. Grand Tour de la Thaïlande — 17J/14N ─────────────
    trip({
      slug: "thailande-grand-tour-koh-lanta-krabi-17j",
      name: [
        "Grand tour de la Thaïlande : du Triangle d'or à Koh Lanta et Krabi",
        "Grand Tour of Thailand: from the Golden Triangle to Koh Lanta and Krabi",
        "Gran tour de Tailandia: del Triángulo de Oro a Koh Lanta y Krabi",
      ],
      tagline: [
        "Dix-sept jours pour tout voir, avec cinq nuits de plage sur Koh Lanta et à Krabi",
        "Seventeen days to see it all, with five beach nights on Koh Lanta and in Krabi",
        "Diecisiete días para verlo todo, con cinco noches de playa en Koh Lanta y Krabi",
      ],
      description: [
        "Le circuit le plus complet : les marchés autour de Bangkok, Ayutthaya, Lopburi, Sukhothai, le Triangle d'or, Chiang Mai et le train de nuit, puis le Sud avec deux nuits dans la jungle de Khao Sok et le lac de Cheow Lan, trois nuits sur l'île de Koh Lanta et deux à Krabi. Groupe de 24 personnes au plus, guide francophone pendant le circuit. Le même itinéraire existe au départ de Paris sous le nom « Parfum thaï et plages du Sud » (à partir de 2 739 € par personne) ; version privative à partir de 3 356 €.",
        "The most complete tour: the markets around Bangkok, Ayutthaya, Lopburi, Sukhothai, the Golden Triangle, Chiang Mai and the night train, then the south with two nights in the Khao Sok jungle and Cheow Lan lake, three nights on Koh Lanta island and two in Krabi. Groups of 24 at most, French-speaking guide during the tour. The same route runs from Paris as 'Parfum thaï et plages du Sud' (from €2,739 per person); private version from €3,356.",
        "El circuito más completo: los mercados alrededor de Bangkok, Ayutthaya, Lopburi, Sukhothai, el Triángulo de Oro, Chiang Mai y el tren nocturno, y después el sur con dos noches en la selva de Khao Sok y el lago Cheow Lan, tres noches en la isla de Koh Lanta y dos en Krabi. Grupos de 24 personas como máximo, guía francófono durante el circuito. El mismo itinerario sale de París con el nombre «Parfum thaï et plages du Sud» (desde 2.739 € por persona); versión privada desde 3.356 €.",
      ],
      includes: [
        "Vols depuis la France,Vol Bangkok–Surat Thani,Ferry Koh Lanta–Krabi,13 nuits en hôtels et lodge,1 nuit en train couchette,Pension selon programme,Guide francophone pendant le circuit",
        "Flights from France,Bangkok–Surat Thani flight,Koh Lanta–Krabi ferry,13 nights in hotels and a lodge,1 night in a sleeper train,Meals as per programme,French-speaking guide during the tour",
        "Vuelos desde Francia,Vuelo Bangkok–Surat Thani,Ferry Koh Lanta–Krabi,13 noches en hoteles y lodge,1 noche en tren litera,Comidas según programa,Guía francófono durante el circuito",
      ],
      price: 2665, nights: 14, departureFrom: "Barcelone", image: "gt10",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 24, order: -87993,
      chapters: [
        chapter(["Le départ", "Departure", "La salida"], ["Vol vers Bangkok.", "Flight to Bangkok.", "Vuelo a Bangkok."], ["gt8"], [day(1, T_FLY, FLY, "gt8")]),
        ...northChapters(["gt8", "gt12", "gt11", "gt9"], ["in4", "in5", "in6", "in1"]),
        chapter(
          ["Khao Sok", "Khao Sok", "Khao Sok"],
          [
            "Deux nuits dans un lodge du parc national de Khao Sok, au bord de la jungle.",
            "Two nights in a lodge in Khao Sok National Park, at the edge of the jungle.",
            "Dos noches en un lodge del parque nacional de Khao Sok, al borde de la selva.",
          ],
          ["gt15", "mg1", "mg8"],
          [day(9, T_KHAOSOK, KHAOSOK, "gt15"), day(10, T_CHEOW, CHEOW, "mg1")]
        ),
        chapter(
          ["Koh Lanta et Krabi", "Koh Lanta and Krabi", "Koh Lanta y Krabi"],
          [
            "Cinq nuits de plage : trois sur l'île de Koh Lanta, deux à Krabi, reliées par le ferry.",
            "Five beach nights: three on Koh Lanta island, two in Krabi, linked by ferry.",
            "Cinco noches de playa: tres en la isla de Koh Lanta y dos en Krabi, unidas por ferry.",
          ],
          ["gt13", "gt1", "gt3", "gt10"],
          [
            day(11, ["Khao Sok – Koh Lanta", "Khao Sok – Koh Lanta", "Khao Sok – Koh Lanta"],
              ["Route vers la région de Krabi et l'île de Koh Lanta, installation dans un hôtel en bord de mer et fin de journée libre.", "Drive to the Krabi region and Koh Lanta island, check in at a seafront hotel and the rest of the day free.", "Carretera hacia la región de Krabi y la isla de Koh Lanta, instalación en un hotel frente al mar y resto del día libre."], "gt13"),
            day(12, T_BEACH, BEACH, "gt1"),
            day(13, T_BEACH, BEACH, "gt3"),
            day(14, ["Koh Lanta – Krabi", "Koh Lanta – Krabi", "Koh Lanta – Krabi"],
              ["En fin de matinée, ferry puis route vers Krabi, pour deux nuits.", "In the late morning, the ferry then the road to Krabi, for two nights.", "A media mañana, ferry y carretera hacia Krabi, para dos noches."], "gt10"),
            day(15, ["Krabi, journée libre", "Krabi, free day", "Krabi, jornada libre"],
              ["Journée libre de détente à Krabi.", "A free day of rest in Krabi.", "Jornada libre de descanso en Krabi."], "jy3"),
            day(16, T_PHUKET_HOME, PHUKET_HOME, "jy1"),
            day(17, T_HOME, HOME, "gt13"),
          ]
        ),
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
