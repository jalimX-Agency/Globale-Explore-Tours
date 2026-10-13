// Egypt circuits, batch 2 — the 8 remaining journey-format trips for the "egypte" destination:
// a private three-city tour, Nile + Red Sea, Nile + Lake Nasser, Nile + Fayoum oasis, Cairo +
// dahabeya, two small-ship cruises (34 guests) and the Egypt–Jordan combination. One trip per
// circuit; year, direction and extension variants are described inside the trip.
// Prices are per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF.
// Run with:
//   npx tsx scripts/seed-trips-egypte-circuits-2.ts
// Requires scripts/upload-images-egypte-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "egypte-trois-capitales-nil-privatif-10j": ["391138", "392538"],
  "egypte-nil-mer-rouge-hurghada-15j": ["391498", "390678"],
  "egypte-jordanie-combine-nil-petra-16j": ["392518", "255498"],
  "egypte-nil-oasis-fayoum-13j": ["140742"],
  "egypte-nil-lac-nasser-abou-simbel-11j": ["252338"],
  "egypte-caire-nil-dahabeya-9j": ["298698"],
  "egypte-odyssee-pharaons-11j": ["365080", "365081"],
  "egypte-secrets-nil-caire-assouan-16j": ["396218", "392638"],
};

// ── Shared texts ──
const T_HOME: L3 = ["Retour en France", "Flight home", "Regreso a Francia"];
const HOME: L3 = [
  "Petit-déjeuner, transfert à l'aéroport selon l'horaire du vol, assistance aux formalités et envol pour la France.",
  "Breakfast, transfer to the airport according to your flight time, help with formalities and flight to France.",
  "Desayuno, traslado al aeropuerto según el horario del vuelo, asistencia en los trámites y vuelo a Francia.",
];
const T_CAIRO_ARR: L3 = ["Arrivée au Caire", "Arrival in Cairo", "Llegada a El Cairo"];
const CAIRO_ARR: L3 = [
  "Envol à destination du Caire. Accueil à l'arrivée par notre représentant francophone, assistance aux formalités de visa et transfert à l'hôtel.",
  "Flight to Cairo. Welcome on arrival by our French-speaking representative, help with visa formalities and transfer to the hotel.",
  "Vuelo con destino a El Cairo. Recibimiento a la llegada por nuestro representante francófono, asistencia en los trámites de visado y traslado al hotel.",
];
const T_SAIL: L3 = ["Navigation vers Louxor", "Sailing back to Luxor", "Navegación hacia Luxor"];
const SAIL: L3 = [
  "Journée entière de navigation vers Louxor, à passer sur le pont supérieur : felouques, palmiers, maisons de terre dans les champs et, au-delà des rives, le désert.",
  "A full day's sailing towards Luxor, best spent on the upper deck: feluccas, palm trees, mud-brick houses in the fields and, beyond the banks, the desert.",
  "Jornada completa de navegación hacia Luxor, para pasarla en la cubierta superior: falucas, palmeras, casas de adobe entre los campos y, más allá de las orillas, el desierto.",
];
const T_EDFU_KO: L3 = ["Edfou et Kom Ombo", "Edfu and Kom Ombo", "Edfú y Kom Ombo"];
const EDFU_KO: L3 = [
  "Visite du temple d'Horus à Edfou, l'un des mieux conservés d'Égypte. Après le déjeuner à bord, navigation vers Kom Ombo et visite de son temple double, dédié à Sobek le crocodile et à Horus le faucon. Navigation de nuit vers Assouan.",
  "Visit the temple of Horus at Edfu, one of the best preserved in Egypt. After lunch on board, sail to Kom Ombo and visit its double temple, dedicated to Sobek the crocodile and Horus the falcon. Sail overnight to Aswan.",
  "Visita al templo de Horus en Edfú, uno de los mejor conservados de Egipto. Tras el almuerzo a bordo, navegación hacia Kom Ombo y visita de su templo doble, dedicado a Sobek el cocodrilo y a Horus el halcón. Navegación nocturna hacia Asuán.",
];
const T_GEM_KHAN: L3 = ["Le Grand Musée égyptien et Khan el-Khalili", "The Grand Egyptian Museum and Khan el-Khalili", "El Gran Museo Egipcio y Jan el-Jalili"];
const GEM_KHAN: L3 = [
  "Visite du nouveau Grand Musée égyptien, à deux pas des pyramides, avec le trésor de Toutânkhamon et les statues monumentales des pharaons. Déjeuner en ville, puis découverte du bazar de Khan el-Khalili. En option, à régler sur place : le Caire copte (45 €) ou la citadelle de Saladin et le Caire islamique (55 €).",
  "Visit the new Grand Egyptian Museum, close to the pyramids, with Tutankhamun's treasure and the monumental statues of the pharaohs. Lunch in town, then explore the Khan el-Khalili bazaar. Optional, payable locally: Coptic Cairo (€45) or Saladin's citadel and Islamic Cairo (€55).",
  "Visita al nuevo Gran Museo Egipcio, a dos pasos de las pirámides, con el tesoro de Tutankamón y las estatuas monumentales de los faraones. Almuerzo en la ciudad y recorrido por el bazar de Jan el-Jalili. Opcional, a pagar in situ: El Cairo copto (45 €) o la ciudadela de Saladino y El Cairo islámico (55 €).",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "egypte",
    imagePrefix: "egypte",
    season: { label: ["Oct à avr", "Oct to April", "Oct a abr"], months: "october,november,december,january,february,march,april" },
  });

  const journeyTrips = [
    // ───────────── 1. Les Trois Capitales du Nil en privatif — 10J/8N ─────────────
    trip({
      slug: "egypte-trois-capitales-nil-privatif-10j",
      name: [
        "Égypte en privé : Le Caire, Assouan et Louxor",
        "Egypt in Private: Cairo, Aswan and Luxor",
        "Egipto en privado: El Cairo, Asuán y Luxor",
      ],
      tagline: [
        "Un circuit privatif avec guide dédié, en hôtels plutôt qu'en bateau",
        "A private tour with your own guide, staying in hotels rather than on a boat",
        "Un circuito privado con guía propio, en hoteles en lugar de barco",
      ],
      description: [
        "L'Égypte en trois étapes et sans groupe : Le Caire, Assouan et Louxor, avec votre guide égyptologue, des transferts privés, deux vols intérieurs et le train de première classe le long du Nil. Les nuits se passent en hôtels 4* (5* avec supplément), les journées laissent du temps libre, et un dîner chez l'habitant est prévu à Louxor. Abou Simbel se réserve en option sur place, ou se choisit d'emblée dans la version avec Abou Simbel inclus (à partir de 2 189 € par personne).",
        "Egypt in three stops and without a group: Cairo, Aswan and Luxor, with your own Egyptologist guide, private transfers, two domestic flights and the first-class train along the Nile. Nights are in 4* hotels (5* for a supplement), the days leave free time, and a dinner with a local family is planned in Luxor. Abu Simbel can be booked locally as an option, or chosen from the start in the version with Abu Simbel included (from €2,189 per person).",
        "Egipto en tres etapas y sin grupo: El Cairo, Asuán y Luxor, con su guía egiptólogo, traslados privados, dos vuelos interiores y el tren de primera clase a lo largo del Nilo. Las noches son en hoteles de 4* (5* con suplemento), las jornadas dejan tiempo libre y en Luxor hay una cena en casa de una familia local. Abu Simbel se reserva como opción in situ, o se elige desde el principio en la versión con Abu Simbel incluido (desde 2.189 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs et train 1re classe,Transferts et visites en privé,8 nuits en hôtels 4* en chambre double,Pension complète selon programme,Guide égyptologue francophone,Entrées des sites",
        "Flights from France,Domestic flights and 1st-class train,Private transfers and visits,8 nights in 4* hotels in a double room,Full board as per programme,French-speaking Egyptologist guide,Site entrance fees",
        "Vuelos desde Francia,Vuelos interiores y tren de 1.ª clase,Traslados y visitas en privado,8 noches en hoteles de 4* en habitación doble,Pensión completa según programa,Guía egiptólogo francófono,Entradas a los sitios",
      ],
      price: 1992, nights: 8, departureFrom: "Paris", image: "tc8",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -97992,
      chapters: [
        chapter(
          ["Le Caire", "Cairo", "El Cairo"],
          [
            "Trois nuits dans la capitale : les pyramides de Gizeh et le Sphinx, le Grand Musée égyptien, puis les ruelles du bazar de Khan el-Khalili.",
            "Three nights in the capital: the pyramids of Giza and the Sphinx, the Grand Egyptian Museum, then the lanes of the Khan el-Khalili bazaar.",
            "Tres noches en la capital: las pirámides de Guiza y la Esfinge, el Gran Museo Egipcio y las callejuelas del bazar de Jan el-Jalili.",
          ],
          ["tc14", "tc9", "ej7", "ej11"],
          [
            day(1, T_CAIRO_ARR, CAIRO_ARR, "tc9"),
            day(2,
              ["Les pyramides de Gizeh et le Sphinx", "The pyramids of Giza and the Sphinx", "Las pirámides de Guiza y la Esfinge"],
              [
                "Découverte des pyramides de Khéops, Khéphren et Mykérinos, puis du Sphinx, long de 57 mètres. Déjeuner dans un restaurant local. Après-midi libre, pour prolonger la visite du site, se reposer à l'hôtel ou découvrir l'île de Zamalek.",
                "Discover the pyramids of Khufu, Khafre and Menkaure, then the 57-metre-long Sphinx. Lunch in a local restaurant. Free afternoon, to stay longer on the site, rest at the hotel or explore Zamalek island.",
                "Descubrimiento de las pirámides de Keops, Kefrén y Micerino, y de la Esfinge, de 57 metros de largo. Almuerzo en un restaurante local. Tarde libre, para prolongar la visita, descansar en el hotel o conocer la isla de Zamalek.",
              ], "ej7"),
            day(3, T_GEM_KHAN, GEM_KHAN, "ej11"),
          ]
        ),
        chapter(
          ["Assouan", "Aswan", "Asuán"],
          [
            "Un vol vers le sud et le rythme change : Assouan, ville paisible au bord du Nil, avec le temple de Philae, l'obélisque inachevé et les paysages nubiens autour de l'île Éléphantine.",
            "A flight south and the pace changes: Aswan, a quiet town on the Nile, with the temple of Philae, the unfinished obelisk and the Nubian landscapes around Elephantine Island.",
            "Un vuelo hacia el sur y el ritmo cambia: Asuán, ciudad tranquila a orillas del Nilo, con el templo de Filé, el obelisco inacabado y los paisajes nubios en torno a la isla Elefantina.",
          ],
          ["tc6", "tc7", "tc11", "tc10"],
          [
            day(4,
              ["Vol pour Assouan – Philae et l'obélisque inachevé", "Flight to Aswan – Philae and the unfinished obelisk", "Vuelo a Asuán – Filé y el obelisco inacabado"],
              [
                "Vol pour Assouan et installation à l'hôtel. L'après-midi, visite du temple de Philae, voué au culte d'Isis, puis de l'obélisque inachevé dans sa carrière de granit. La journée se termine par une balade en felouque autour de l'île Éléphantine.",
                "Flight to Aswan and check-in at the hotel. In the afternoon, visit the temple of Philae, dedicated to Isis, then the unfinished obelisk in its granite quarry. The day ends with a felucca ride around Elephantine Island.",
                "Vuelo a Asuán e instalación en el hotel. Por la tarde, visita al templo de Filé, consagrado a Isis, y al obelisco inacabado en su cantera de granito. La jornada termina con un paseo en faluca alrededor de la isla Elefantina.",
              ], "tc6"),
            day(5,
              ["Assouan – Abou Simbel en option", "Aswan – optional Abu Simbel", "Asuán – Abu Simbel opcional"],
              [
                "En matinée, excursion optionnelle aux temples d'Abou Simbel, creusés dans la roche à la gloire de Ramsès II et de Néfertari (120 € en autocar ou 385 € en avion, par personne). Après le déjeuner, temps libre pour flâner en ville ou profiter de la piscine.",
                "In the morning, an optional excursion to the temples of Abu Simbel, cut into the rock to the glory of Ramesses II and Nefertari (€120 by coach or €385 by plane, per person). After lunch, free time to stroll in town or enjoy the pool.",
                "Por la mañana, excursión opcional a los templos de Abu Simbel, excavados en la roca a la gloria de Ramsés II y Nefertari (120 € en autocar o 385 € en avión, por persona). Tras el almuerzo, tiempo libre para pasear por la ciudad o disfrutar de la piscina.",
              ], "tc10"),
          ]
        ),
        chapter(
          ["Louxor et Thèbes", "Luxor and Thebes", "Luxor y Tebas"],
          [
            "Trois nuits à Louxor, au bord du Nil : Karnak, le temple de Louxor au coucher du soleil, puis la rive ouest avec Médinet Habou et le village des artisans de Deir el-Médineh.",
            "Three nights in Luxor, on the banks of the Nile: Karnak, Luxor temple at sunset, then the west bank with Medinet Habu and the artisans' village of Deir el-Medina.",
            "Tres noches en Luxor, a orillas del Nilo: Karnak, el templo de Luxor al atardecer y la orilla oeste, con Medinet Habu y la aldea de los artesanos de Deir el-Medina.",
          ],
          ["tc13", "tc8", "tc1", "tc4", "tc12"],
          [
            day(6,
              ["En train vers Louxor – Karnak et le temple de Louxor", "By train to Luxor – Karnak and Luxor temple", "En tren a Luxor – Karnak y el templo de Luxor"],
              [
                "Trois heures de train en première classe, avec les rives du Nil et les villageois aux champs par la fenêtre. Installation à l'hôtel, déjeuner, puis visite du temple de Karnak et de sa salle hypostyle, et du temple de Louxor au coucher du soleil. Dîner chez l'habitant.",
                "Three hours by first-class train, with the banks of the Nile and villagers in the fields through the window. Check-in at the hotel, lunch, then visit Karnak temple and its hypostyle hall, and Luxor temple at sunset. Dinner with a local family.",
                "Tres horas de tren en primera clase, con las orillas del Nilo y los aldeanos en los campos por la ventanilla. Instalación en el hotel, almuerzo y visita al templo de Karnak y su sala hipóstila, y al templo de Luxor al atardecer. Cena en casa de una familia local.",
              ], "tc2"),
            day(7,
              ["Médinet Habou et la vallée des Artisans", "Medinet Habu and the Valley of the Artisans", "Medinet Habu y el valle de los Artesanos"],
              [
                "Sur la rive ouest, visite de Médinet Habou, le temple funéraire de Ramsès III, qui a gardé une partie de ses couleurs. Puis Deir el-Médineh, le village des artisans qui creusaient et décoraient les tombes royales : leurs propres tombeaux, comme celui de Sennedjem, sont couverts de peintures très fraîches.",
                "On the west bank, visit Medinet Habu, the mortuary temple of Ramesses III, which has kept some of its colours. Then Deir el-Medina, the village of the artisans who cut and decorated the royal tombs: their own tombs, such as Sennedjem's, are covered in remarkably fresh paintings.",
                "En la orilla oeste, visita a Medinet Habu, el templo funerario de Ramsés III, que conserva parte de sus colores. Después, Deir el-Medina, la aldea de los artesanos que excavaban y decoraban las tumbas reales: sus propias tumbas, como la de Sennedjem, están cubiertas de pinturas muy vivas.",
              ], "tc1"),
            day(8,
              ["Journée libre à Louxor", "Free day in Luxor", "Jornada libre en Luxor"],
              [
                "Journée et déjeuner libres. En option, à régler sur place : survol en montgolfière (130 €), visite de Dendérah et d'Abydos (90 €) ou son et lumière de Karnak (55 €).",
                "A free day, with lunch on your own. Optional, payable locally: a hot-air balloon flight (€130), a visit to Dendera and Abydos (€90) or the Karnak sound and light show (€55).",
                "Jornada y almuerzo libres. Opcional, a pagar in situ: vuelo en globo (130 €), visita a Dendera y Abidos (90 €) o espectáculo de luz y sonido de Karnak (55 €).",
              ], "tc4"),
          ]
        ),
        chapter(
          ["Retour au Caire", "Back to Cairo", "Regreso a El Cairo"],
          [
            "Une dernière journée dans la capitale, entre les momies royales du musée de la Civilisation et le quartier de Korba, à Héliopolis.",
            "A last day in the capital, between the royal mummies of the Museum of Civilization and the Korba district in Heliopolis.",
            "Una última jornada en la capital, entre las momias reales del Museo de la Civilización y el barrio de Korba, en Heliópolis.",
          ],
          ["tc9", "ej9", "tc14"],
          [
            day(9,
              ["Vol pour Le Caire – musée de la Civilisation", "Flight to Cairo – Museum of Civilization", "Vuelo a El Cairo – Museo de la Civilización"],
              [
                "Vol pour Le Caire et visite du Musée national de la civilisation égyptienne (NMEC), où reposent les 22 momies royales. Dîner dans un restaurant traditionnel, puis découverte du quartier de Korba, à Héliopolis. Transfert à l'aéroport après le dîner, ou nuit en option près de l'aéroport pour les vols de jour (90 € par personne en chambre double).",
                "Flight to Cairo and visit to the National Museum of Egyptian Civilization (NMEC), home to the 22 royal mummies. Dinner in a traditional restaurant, then a look at the Korba district in Heliopolis. Transfer to the airport after dinner, or an optional night near the airport for daytime flights (€90 per person in a double room).",
                "Vuelo a El Cairo y visita al Museo Nacional de la Civilización Egipcia (NMEC), donde descansan las 22 momias reales. Cena en un restaurante tradicional y paseo por el barrio de Korba, en Heliópolis. Traslado al aeropuerto tras la cena, o noche opcional cerca del aeropuerto para los vuelos diurnos (90 € por persona en habitación doble).",
              ], "ej9"),
            day(10, T_HOME,
              ["Envol pour la France et arrivée dans la journée.", "Flight to France, arriving during the day.", "Vuelo a Francia y llegada durante el día."], "tc14"),
          ]
        ),
      ],
    }),

    // ───────────── 2. Contrastes du Nil et de la mer Rouge — 15J/14N ─────────────
    trip({
      slug: "egypte-nil-mer-rouge-hurghada-15j",
      name: [
        "Égypte : Le Caire, croisière sur le Nil et mer Rouge",
        "Egypt: Cairo, a Nile Cruise and the Red Sea",
        "Egipto: El Cairo, crucero por el Nilo y mar Rojo",
      ],
      tagline: [
        "Trois nuits au Caire, sept sur le Nil, puis quatre en tout compris à Hurghada",
        "Three nights in Cairo, seven on the Nile, then four all-inclusive in Hurghada",
        "Tres noches en El Cairo, siete en el Nilo y cuatro en todo incluido en Hurghada",
      ],
      description: [
        "Le voyage complet pour une première fois en Égypte : les pyramides et le Grand Musée égyptien au Caire, sept nuits de croisière en bateau 5* supérieur (normes locales) entre Louxor et Assouan, puis quatre nuits en tout compris à Hurghada, dans un hôtel 5* dont la plage donne directement sur une barrière de corail. Le retour se fait depuis Hurghada ; une variante avec retour par Le Caire existe aussi (à partir de 2 201 € par personne).",
        "The complete trip for a first time in Egypt: the pyramids and the Grand Egyptian Museum in Cairo, seven nights' cruising on a superior 5* boat (local rating) between Luxor and Aswan, then four all-inclusive nights in Hurghada, in a 5* hotel whose beach opens straight onto a coral reef. You fly home from Hurghada; a version returning via Cairo is also available (from €2,201 per person).",
        "El viaje completo para una primera vez en Egipto: las pirámides y el Gran Museo Egipcio en El Cairo, siete noches de crucero en un barco de 5* superior (categoría local) entre Luxor y Asuán, y cuatro noches en todo incluido en Hurghada, en un hotel de 5* cuya playa da directamente a un arrecife de coral. El regreso es desde Hurghada; existe también una variante con regreso por El Cairo (desde 2.201 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Vol Le Caire–Louxor,3 nuits au Caire en hôtel 5*,7 nuits de croisière en bateau 5* supérieur,4 nuits à Hurghada en tout compris,Pension complète pendant le circuit,Guide égyptologue francophone,Entrées des sites",
        "Flights from France,Cairo–Luxor flight,3 nights in Cairo in a 5* hotel,7 nights' cruise on a superior 5* boat,4 all-inclusive nights in Hurghada,Full board during the tour,French-speaking Egyptologist guide,Site entrance fees",
        "Vuelos desde Francia,Vuelo El Cairo–Luxor,3 noches en El Cairo en hotel de 5*,7 noches de crucero en barco de 5* superior,4 noches en Hurghada en todo incluido,Pensión completa durante el circuito,Guía egiptólogo francófono,Entradas a los sitios",
      ],
      price: 2083, nights: 14, departureFrom: "Nantes", image: "cm1",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,family,honeymoon", maxGuests: 12, order: -97991,
      chapters: [
        chapter(
          ["Le Caire", "Cairo", "El Cairo"],
          [
            "Le voyage commence par trois nuits au Caire, en hôtel 5* près des pyramides : Saqqarah, le plateau de Gizeh et le Grand Musée égyptien.",
            "The trip begins with three nights in Cairo, in a 5* hotel near the pyramids: Saqqara, the Giza plateau and the Grand Egyptian Museum.",
            "El viaje comienza con tres noches en El Cairo, en un hotel de 5* cerca de las pirámides: Saqqara, la meseta de Guiza y el Gran Museo Egipcio.",
          ],
          ["cm6", "ej7", "od2", "ej11"],
          [
            day(1, T_CAIRO_ARR, CAIRO_ARR, "cm6"),
            day(2,
              ["Saqqarah et les pyramides de Gizeh", "Saqqara and the pyramids of Giza", "Saqqara y las pirámides de Guiza"],
              [
                "Visite de Saqqarah : la pyramide à degrés de Djoser, la pyramide de Téti et sa chambre funéraire intacte, puis un mastaba aux reliefs d'oiseaux et d'animaux. Déjeuner dans un restaurant typique, puis le plateau de Gizeh, ses trois pyramides et le Sphinx.",
                "Visit Saqqara: the Step Pyramid of Djoser, the pyramid of Teti with its intact burial chamber, then a mastaba with reliefs of birds and animals. Lunch in a typical restaurant, then the Giza plateau, its three pyramids and the Sphinx.",
                "Visita a Saqqara: la pirámide escalonada de Zoser, la pirámide de Teti y su cámara funeraria intacta, y una mastaba con relieves de aves y animales. Almuerzo en un restaurante típico y, después, la meseta de Guiza, sus tres pirámides y la Esfinge.",
              ], "od2"),
            day(3, T_GEM_KHAN, GEM_KHAN, "ej11"),
          ]
        ),
        chapter(
          ["De Louxor à Assouan", "From Luxor to Aswan", "De Luxor a Asuán"],
          [
            "Embarquement à Louxor pour sept nuits à bord. Le bateau remonte le Nil par Esna, Edfou et Kom Ombo jusqu'à Assouan, aux portes de la Nubie.",
            "Board in Luxor for seven nights on the boat. It sails up the Nile via Esna, Edfu and Kom Ombo to Aswan, at the gates of Nubia.",
            "Embarque en Luxor para siete noches a bordo. El barco remonta el Nilo por Esna, Edfú y Kom Ombo hasta Asuán, a las puertas de Nubia.",
          ],
          ["cm5", "cm4", "cm7", "fn9", "cm3"],
          [
            day(4,
              ["Vol pour Louxor et embarquement", "Flight to Luxor and boarding", "Vuelo a Luxor y embarque"],
              [
                "Vol pour Louxor, transfert au bateau de croisière et installation à bord. Dîner et nuit à quai.",
                "Flight to Luxor, transfer to the cruise boat and settling in on board. Dinner and night at the quay.",
                "Vuelo a Luxor, traslado al barco de crucero e instalación a bordo. Cena y noche en el muelle.",
              ], "cm7"),
            day(5,
              ["Le temple de Karnak – Esna", "The temple of Karnak – Esna", "El templo de Karnak – Esna"],
              [
                "Visite du temple de Karnak et de sa salle hypostyle aux colonnes géantes. Après-midi de navigation : les berges du Nil défilent lentement jusqu'à Esna, atteinte à l'heure du thé.",
                "Visit Karnak temple and its hypostyle hall of giant columns. An afternoon's sailing: the banks of the Nile slip slowly by as far as Esna, reached at tea time.",
                "Visita al templo de Karnak y su sala hipóstila de columnas gigantes. Tarde de navegación: las orillas del Nilo pasan despacio hasta Esna, adonde se llega a la hora del té.",
              ], "cm5"),
            day(6, T_EDFU_KO, EDFU_KO, "fn9"),
            day(7,
              ["Assouan : le Haut Barrage et l'île Éléphantine", "Aswan: the High Dam and Elephantine Island", "Asuán: la Alta Presa y la isla Elefantina"],
              [
                "Départ pour le Haut Barrage d'Assouan et son panorama sur le lac Nasser, puis l'obélisque inachevé, resté dans sa carrière de granit depuis près de 3 500 ans. Tour en felouque autour de l'île Éléphantine.",
                "Leave for the Aswan High Dam and its view over Lake Nasser, then the unfinished obelisk, left in its granite quarry for nearly 3,500 years. A felucca ride around Elephantine Island.",
                "Salida hacia la Alta Presa de Asuán y su panorámica del lago Nasser, y después el obelisco inacabado, que lleva casi 3.500 años en su cantera de granito. Paseo en faluca alrededor de la isla Elefantina.",
              ], "cm1"),
            day(8,
              ["Assouan – Abou Simbel en option", "Aswan – optional Abu Simbel", "Asuán – Abu Simbel opcional"],
              [
                "En matinée, excursion optionnelle à Abou Simbel, en autocar ou en avion. Pour ceux qui restent à Assouan, matinée libre ou visites complémentaires avec le guide. Après le déjeuner, le bateau reprend la direction de Louxor.",
                "In the morning, an optional excursion to Abu Simbel, by coach or plane. For those staying in Aswan, a free morning or extra visits with the guide. After lunch, the boat heads back towards Luxor.",
                "Por la mañana, excursión opcional a Abu Simbel, en autocar o en avión. Para quienes se quedan en Asuán, mañana libre o visitas adicionales con el guía. Tras el almuerzo, el barco pone rumbo de nuevo a Luxor.",
              ], "cm3"),
          ]
        ),
        chapter(
          ["Retour à Louxor", "Back to Luxor", "Regreso a Luxor"],
          [
            "Une journée de navigation, puis la rive ouest de Thèbes avant de quitter le Nil.",
            "A day's sailing, then the west bank at Thebes before leaving the Nile.",
            "Una jornada de navegación y, después, la orilla oeste de Tebas antes de dejar el Nilo.",
          ],
          ["cm4", "fy1", "fn11"],
          [
            day(9, T_SAIL, SAIL, "cm4"),
            day(10,
              ["Louxor : Médinet Habou et la rive ouest", "Luxor: Medinet Habu and the west bank", "Luxor: Medinet Habu y la orilla oeste"],
              [
                "Arrivée à Louxor et départ pour la rive ouest. Visite de Médinet Habou, le temple funéraire de Ramsès III, l'un des plus vastes de la nécropole de Thèbes et l'un des rares à avoir gardé ses couleurs, puis poursuite des visites dans la nécropole.",
                "Arrive in Luxor and leave for the west bank. Visit Medinet Habu, the mortuary temple of Ramesses III, one of the largest in the Theban necropolis and one of the few to have kept its colours, then continue the visits in the necropolis.",
                "Llegada a Luxor y salida hacia la orilla oeste. Visita a Medinet Habu, el templo funerario de Ramsés III, uno de los más grandes de la necrópolis de Tebas y de los pocos que conservan sus colores, y continuación de las visitas en la necrópolis.",
              ], "fy1"),
          ]
        ),
        chapter(
          ["Hurghada et la mer Rouge", "Hurghada and the Red Sea", "Hurghada y el mar Rojo"],
          [
            "Quatre heures de route à travers le désert et la mer Rouge apparaît. Quatre nuits en tout compris, en chambre deluxe, avec les coraux à quelques brasses de la plage.",
            "Four hours' drive across the desert and the Red Sea comes into view. Four all-inclusive nights in a deluxe room, with the coral a short swim from the beach.",
            "Cuatro horas de carretera por el desierto y aparece el mar Rojo. Cuatro noches en todo incluido, en habitación deluxe, con los corales a unas brazadas de la playa.",
          ],
          ["cm2", "cm8", "cm9", "cm10"],
          [
            day(11,
              ["Louxor – Hurghada", "Luxor – Hurghada", "Luxor – Hurghada"],
              [
                "Route pour Hurghada (280 km, environ 4 heures). Arrivée à l'hôtel 5* pour le déjeuner et installation. Après-midi libre à la plage, en tout compris.",
                "Drive to Hurghada (280 km, about 4 hours). Arrive at the 5* hotel for lunch and check in. Free afternoon at the beach, all-inclusive.",
                "Carretera hacia Hurghada (280 km, unas 4 horas). Llegada al hotel de 5* para el almuerzo e instalación. Tarde libre en la playa, en todo incluido.",
              ], "cm8"),
            day(12,
              ["Hurghada : la barrière de corail", "Hurghada: the coral reef", "Hurghada: el arrecife de coral"],
              [
                "Journée libre en tout compris. La barrière de corail est accessible directement depuis la plage de l'hôtel : masque et tuba suffisent.",
                "A free all-inclusive day. The coral reef can be reached straight from the hotel beach: a mask and snorkel are all you need.",
                "Jornada libre en todo incluido. Al arrecife de coral se accede directamente desde la playa del hotel: bastan unas gafas y un tubo.",
              ], "cm2"),
            day(13,
              ["Hurghada, journée libre", "Hurghada, free day", "Hurghada, jornada libre"],
              [
                "Deuxième journée de détente en tout compris, entre plage, piscine et mer Rouge.",
                "A second all-inclusive day of rest, between the beach, the pool and the Red Sea.",
                "Segunda jornada de descanso en todo incluido, entre playa, piscina y mar Rojo.",
              ], "cm9"),
            day(14,
              ["Dernière journée à Hurghada", "Last day in Hurghada", "Última jornada en Hurghada"],
              [
                "Journée libre en tout compris jusqu'au départ. Selon le plan de vol : dîner puis transfert à l'aéroport dans la soirée, ou dîner et nuit à l'hôtel.",
                "A free all-inclusive day until departure. Depending on the flight plan: dinner then transfer to the airport in the evening, or dinner and night at the hotel.",
                "Jornada libre en todo incluido hasta la salida. Según el plan de vuelo: cena y traslado al aeropuerto por la noche, o cena y noche en el hotel.",
              ], "cm10"),
            day(15, T_HOME,
              ["Petit-déjeuner à l'hôtel ou à bord, envol pour la France et arrivée.", "Breakfast at the hotel or on the plane, flight to France and arrival.", "Desayuno en el hotel o a bordo, vuelo a Francia y llegada."], "cm2"),
          ]
        ),
      ],
    }),

    // ───────────── 3. Combiné Égypte – Jordanie — 16J/15N ─────────────
    trip({
      slug: "egypte-jordanie-combine-nil-petra-16j",
      name: [
        "Égypte et Jordanie : croisière sur le Nil, Pétra et Wadi Rum",
        "Egypt and Jordan: A Nile Cruise, Petra and Wadi Rum",
        "Egipto y Jordania: crucero por el Nilo, Petra y Wadi Rum",
      ],
      tagline: [
        "Sept nuits sur le Nil, les pyramides, puis la Jordanie jusqu'à la mer Morte",
        "Seven nights on the Nile, the pyramids, then Jordan as far as the Dead Sea",
        "Siete noches en el Nilo, las pirámides y Jordania hasta el mar Muerto",
      ],
      description: [
        "Deux pays en un seul voyage. En Égypte : une semaine de croisière en bateau 5* (normes locales) de Louxor à Assouan, puis une journée au Caire pour les pyramides et le Grand Musée égyptien. En Jordanie : Amman, Salt, Jerash, la Route des Rois, une journée entière à Pétra, une nuit en camp dans le désert du Wadi Rum et la baignade dans la mer Morte. Les hôtels jordaniens sont en 3* (4* avec supplément). Un forfait de cinq visites complémentaires sur le Nil se réserve avant le départ (132 € par personne).",
        "Two countries in one trip. In Egypt: a week's cruise on a 5* boat (local rating) from Luxor to Aswan, then a day in Cairo for the pyramids and the Grand Egyptian Museum. In Jordan: Amman, Salt, Jerash, the King's Highway, a full day at Petra, a night in a desert camp in Wadi Rum and a swim in the Dead Sea. Jordanian hotels are 3* (4* for a supplement). A pack of five extra visits on the Nile can be booked before departure (€132 per person).",
        "Dos países en un solo viaje. En Egipto: una semana de crucero en barco de 5* (categoría local) de Luxor a Asuán y una jornada en El Cairo para las pirámides y el Gran Museo Egipcio. En Jordania: Ammán, Salt, Jerash, el Camino de los Reyes, una jornada entera en Petra, una noche en campamento en el desierto de Wadi Rum y el baño en el mar Muerto. Los hoteles jordanos son de 3* (4* con suplemento). Un paquete de cinco visitas adicionales en el Nilo se reserva antes de la salida (132 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs et vol vers Amman,1 nuit au Caire,7 nuits de croisière en bateau 5*,Hôtels 3* en Jordanie,1 nuit en camp dans le Wadi Rum,Repas selon programme,Guides francophones",
        "Flights from France,Domestic flights and flight to Amman,1 night in Cairo,7 nights' cruise on a 5* boat,3* hotels in Jordan,1 night in a Wadi Rum camp,Meals as per programme,French-speaking guides",
        "Vuelos desde Francia,Vuelos interiores y vuelo a Ammán,1 noche en El Cairo,7 noches de crucero en barco de 5*,Hoteles de 3* en Jordania,1 noche en campamento en Wadi Rum,Comidas según programa,Guías francófonos",
      ],
      price: 2484, nights: 15, departureFrom: "Bâle", image: "ej5",
      theme: "culture", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 12, order: -97990,
      chapters: [
        chapter(
          ["Le Caire et Louxor", "Cairo and Luxor", "El Cairo y Luxor"],
          [
            "Une nuit au Caire, puis un vol pour Louxor où attend le bateau : Karnak, la Vallée des Rois, et la croisière commence.",
            "A night in Cairo, then a flight to Luxor where the boat is waiting: Karnak, the Valley of the Kings, and the cruise begins.",
            "Una noche en El Cairo y un vuelo a Luxor, donde espera el barco: Karnak, el Valle de los Reyes, y comienza el crucero.",
          ],
          ["ej6", "ej10", "fn11", "fn10"],
          [
            day(1, T_CAIRO_ARR, CAIRO_ARR, "ej9"),
            day(2,
              ["Vol pour Louxor et embarquement", "Flight to Luxor and boarding", "Vuelo a Luxor y embarque"],
              [
                "Vol pour Louxor, accueil et installation à bord du bateau de croisière 5*. Temps libre pour une première découverte de la ville.",
                "Flight to Luxor, welcome and settling in on the 5* cruise boat. Free time for a first look at the town.",
                "Vuelo a Luxor, recibimiento e instalación a bordo del barco de crucero de 5*. Tiempo libre para un primer contacto con la ciudad.",
              ], "ej12"),
            day(3,
              ["Le temple de Karnak", "The temple of Karnak", "El templo de Karnak"],
              [
                "Visite du temple de Karnak, élevé à la gloire d'Amon sur près de huit siècles : le grand temple, la cour à portiques, l'allée des béliers. L'après-midi, flânerie dans les souks ou excursions optionnelles proposées par le guide.",
                "Visit Karnak temple, built to the glory of Amun over nearly eight centuries: the great temple, the colonnaded court, the avenue of rams. In the afternoon, a wander in the souks or optional excursions suggested by the guide.",
                "Visita al templo de Karnak, levantado a la gloria de Amón durante casi ocho siglos: el gran templo, el patio porticado, la avenida de los carneros. Por la tarde, paseo por los zocos o excursiones opcionales propuestas por el guía.",
              ], "ej6"),
            day(4,
              ["Thèbes et la Vallée des Rois – Esna", "Thebes and the Valley of the Kings – Esna", "Tebas y el Valle de los Reyes – Esna"],
              [
                "Départ pour la rive gauche du Nil et la Vallée des Rois, où furent creusés dans le calcaire les tombeaux des pharaons du Nouvel Empire, de Thoutmôsis Ier à Ramsès XI. Navigation vers Esna.",
                "Leave for the west bank of the Nile and the Valley of the Kings, where the tombs of the New Kingdom pharaohs, from Thutmose I to Ramesses XI, were cut into the limestone. Sail towards Esna.",
                "Salida hacia la orilla izquierda del Nilo y el Valle de los Reyes, donde se excavaron en la caliza las tumbas de los faraones del Imperio Nuevo, de Tutmosis I a Ramsés XI. Navegación hacia Esna.",
              ], "fn11"),
          ]
        ),
        chapter(
          ["D'Edfou à Assouan", "From Edfu to Aswan", "De Edfú a Asuán"],
          [
            "Le Nil vers le sud : les temples d'Edfou et de Kom Ombo, puis Assouan, dernière grande ville de Haute-Égypte, aux portes du désert.",
            "The Nile southwards: the temples of Edfu and Kom Ombo, then Aswan, the last large town of Upper Egypt, on the edge of the desert.",
            "El Nilo hacia el sur: los templos de Edfú y Kom Ombo, y Asuán, última gran ciudad del Alto Egipto, a las puertas del desierto.",
          ],
          ["fn9", "fn8", "ej12", "fn1"],
          [
            day(5,
              ["Esna – Edfou – Kom Ombo", "Esna – Edfu – Kom Ombo", "Esna – Edfú – Kom Ombo"],
              [
                "Journée de navigation. Visite du temple d'Edfou, dédié à Horus et le plus grand d'Égypte après Karnak, puis, en fin de journée, du temple de Kom Ombo, qui surplombe le Nil d'une quinzaine de mètres.",
                "A day's sailing. Visit the temple of Edfu, dedicated to Horus and the largest in Egypt after Karnak, then, late in the day, the temple of Kom Ombo, some fifteen metres above the Nile.",
                "Jornada de navegación. Visita al templo de Edfú, dedicado a Horus y el mayor de Egipto después de Karnak, y, al final del día, al templo de Kom Ombo, a unos quince metros sobre el Nilo.",
              ], "fn9"),
            day(6,
              ["Assouan : le Haut Barrage et l'obélisque inachevé", "Aswan: the High Dam and the unfinished obelisk", "Asuán: la Alta Presa y el obelisco inacabado"],
              [
                "Découverte du Haut Barrage, qui a dompté les crues du Nil, puis de l'obélisque inachevé dans les carrières de granit d'Assouan.",
                "Discover the High Dam, which tamed the Nile floods, then the unfinished obelisk in Aswan's granite quarries.",
                "Descubrimiento de la Alta Presa, que domó las crecidas del Nilo, y del obelisco inacabado en las canteras de granito de Asuán.",
              ], "ej12"),
            day(7,
              ["Abou Simbel en option – navigation", "Optional Abu Simbel – sailing", "Abu Simbel opcional – navegación"],
              [
                "En option, à régler sur place (120 € par personne en autocar) : réveil matinal pour le temple d'Abou Simbel, au bord du lac Nasser. Retour à bord pour le déjeuner, puis navigation vers Louxor.",
                "Optional, payable locally (€120 per person by coach): an early start for the temple of Abu Simbel, on the shore of Lake Nasser. Back on board for lunch, then sail towards Luxor.",
                "Opcional, a pagar in situ (120 € por persona en autocar): madrugón para el templo de Abu Simbel, a orillas del lago Nasser. Regreso a bordo para el almuerzo y navegación hacia Luxor.",
              ], "fn1"),
            day(8,
              ["Journée libre à Louxor", "Free day in Luxor", "Jornada libre en Luxor"],
              [
                "Journée consacrée à la découverte de la ville ou aux excursions facultatives, à régler sur place : Dendérah et Abydos (environ 80 €) ou le son et lumière de Karnak (environ 55 €).",
                "A day for exploring the town or for optional excursions, payable locally: Dendera and Abydos (about €80) or the Karnak sound and light show (about €55).",
                "Jornada dedicada a descubrir la ciudad o a las excursiones opcionales, a pagar in situ: Dendera y Abidos (unos 80 €) o el espectáculo de luz y sonido de Karnak (unos 55 €).",
              ], "ej10"),
          ]
        ),
        chapter(
          ["Les pyramides, puis Amman", "The pyramids, then Amman", "Las pirámides y Ammán"],
          [
            "Une journée au Caire pour les pyramides et le Grand Musée égyptien, puis le vol pour Amman. La Jordanie commence par Salt et les ruines romaines de Jerash.",
            "A day in Cairo for the pyramids and the Grand Egyptian Museum, then the flight to Amman. Jordan begins with Salt and the Roman ruins of Jerash.",
            "Una jornada en El Cairo para las pirámides y el Gran Museo Egipcio, y el vuelo a Ammán. Jordania comienza por Salt y las ruinas romanas de Jerash.",
          ],
          ["ej7", "ej4", "ej3"],
          [
            day(9,
              ["Louxor – Le Caire : Gizeh et le Grand Musée – Amman", "Luxor – Cairo: Giza and the Grand Museum – Amman", "Luxor – El Cairo: Guiza y el Gran Museo – Ammán"],
              [
                "Vol pour Le Caire et visite du plateau de Gizeh : les trois pyramides et le Sphinx. Déjeuner dans un restaurant typique, puis après-midi au Grand Musée égyptien avant le départ pour Amman.",
                "Flight to Cairo and visit to the Giza plateau: the three pyramids and the Sphinx. Lunch in a typical restaurant, then an afternoon at the Grand Egyptian Museum before leaving for Amman.",
                "Vuelo a El Cairo y visita a la meseta de Guiza: las tres pirámides y la Esfinge. Almuerzo en un restaurante típico y tarde en el Gran Museo Egipcio antes de salir hacia Ammán.",
              ], "ej7"),
            day(10,
              ["Salt et Amman", "Salt and Amman", "Salt y Ammán"],
              [
                "Départ pour Salt, ville de grès jaune classée à l'Unesco : la rue piétonne Al-Hammam, les anciens souks et un déjeuner chez l'habitant. Retour à Amman et visite de la capitale (environ 80 km).",
                "Leave for Salt, a town of yellow sandstone listed by UNESCO: pedestrian Al-Hammam Street, the old souks and lunch with a local family. Return to Amman and visit the capital (about 80 km).",
                "Salida hacia Salt, ciudad de arenisca amarilla inscrita en la Unesco: la calle peatonal Al-Hammam, los antiguos zocos y un almuerzo en casa de una familia local. Regreso a Ammán y visita de la capital (unos 80 km).",
              ], "ej4"),
            day(11,
              ["Jerash et Ajloun", "Jerash and Ajloun", "Jerash y Ajlun"],
              [
                "Route pour Jerash, l'antique Gérasa, l'une des villes romaines de province les mieux conservées du Proche-Orient, avec ses rues à colonnades et ses temples. Continuation vers Ajloun et retour à Amman (environ 190 km).",
                "Drive to Jerash, ancient Gerasa, one of the best-preserved Roman provincial towns in the Near East, with its colonnaded streets and temples. Continue to Ajloun and return to Amman (about 190 km).",
                "Carretera hacia Jerash, la antigua Gerasa, una de las ciudades romanas de provincia mejor conservadas de Oriente Próximo, con sus calles porticadas y sus templos. Continuación hacia Ajlun y regreso a Ammán (unos 190 km).",
              ], "ej3"),
          ]
        ),
        chapter(
          ["Pétra, Wadi Rum et la mer Morte", "Petra, Wadi Rum and the Dead Sea", "Petra, Wadi Rum y el mar Muerto"],
          [
            "Le sud de la Jordanie par la Route des Rois : les mosaïques de Madaba, le mont Nébo, la cité nabatéenne de Pétra, puis les falaises rouges du Wadi Rum avant la mer Morte.",
            "Southern Jordan along the King's Highway: the mosaics of Madaba, Mount Nebo, the Nabataean city of Petra, then the red cliffs of Wadi Rum before the Dead Sea.",
            "El sur de Jordania por el Camino de los Reyes: los mosaicos de Madaba, el monte Nebo, la ciudad nabatea de Petra y los farallones rojos de Wadi Rum antes del mar Muerto.",
          ],
          ["ej5", "ej2", "ej1"],
          [
            day(12,
              ["La Route des Rois : Madaba, le mont Nébo, Kerak", "The King's Highway: Madaba, Mount Nebo, Kerak", "El Camino de los Reyes: Madaba, monte Nebo, Kerak"],
              [
                "Par la Route des Rois : Madaba, la ville des mosaïques byzantines, puis le mont Nébo, site présumé de la tombe de Moïse, à 840 m d'altitude, et la forteresse de Kerak. Arrivée à Pétra en fin de journée (environ 310 km).",
                "Along the King's Highway: Madaba, the town of Byzantine mosaics, then Mount Nebo, the presumed site of Moses' tomb, 840 m up, and Kerak castle. Arrive in Petra at the end of the day (about 310 km).",
                "Por el Camino de los Reyes: Madaba, la ciudad de los mosaicos bizantinos, el monte Nebo, supuesto lugar de la tumba de Moisés, a 840 m de altitud, y la fortaleza de Kerak. Llegada a Petra al final del día (unos 310 km).",
              ], "ej3"),
            day(13,
              ["Une journée à Pétra", "A day at Petra", "Una jornada en Petra"],
              [
                "Journée entière sur le site de Pétra, classé au patrimoine mondial. On y entre par le Siq, une faille longue et étroite au bout de laquelle apparaît le Trésor, Al Khazneh ; au-delà, des centaines de façades sculptées, de temples et de tombeaux royaux.",
                "A full day at Petra, a World Heritage site. You enter through the Siq, a long, narrow gorge at the end of which the Treasury, Al Khazneh, appears; beyond it are hundreds of carved façades, temples and royal tombs.",
                "Jornada entera en Petra, Patrimonio Mundial. Se entra por el Siq, un desfiladero largo y estrecho al final del cual aparece el Tesoro, Al Khazneh; más allá, cientos de fachadas esculpidas, templos y tumbas reales.",
              ], "ej5"),
            day(14,
              ["La Petite Pétra et le Wadi Rum", "Little Petra and Wadi Rum", "La Pequeña Petra y Wadi Rum"],
              [
                "Visite de la Petite Pétra, puis route vers le Wadi Rum (environ 115 km), ses falaises et ses vallées de sable, décor de Lawrence d'Arabie. Tour en pick-up 4x4 d'environ une heure et demie et nuit en camp dans le désert, au confort simple.",
                "Visit Little Petra, then drive to Wadi Rum (about 115 km), its cliffs and valleys of sand, the setting of Lawrence of Arabia. A 4x4 pick-up tour of about an hour and a half and a night in a desert camp, with simple comfort.",
                "Visita a la Pequeña Petra y carretera hacia Wadi Rum (unos 115 km), sus farallones y valles de arena, escenario de Lawrence de Arabia. Recorrido en pick-up 4x4 de hora y media aproximadamente y noche en un campamento del desierto, de confort sencillo.",
              ], "ej2"),
            day(15,
              ["Wadi Araba et la mer Morte – Amman", "Wadi Araba and the Dead Sea – Amman", "Wadi Araba y el mar Muerto – Ammán"],
              [
                "Départ par le Wadi Araba vers les rives de la mer Morte, le point le plus bas de la planète. Déjeuner, puis temps libre pour la baignade avant de regagner Amman (environ 320 km).",
                "Leave via Wadi Araba for the shores of the Dead Sea, the lowest point on earth. Lunch, then free time for a swim before returning to Amman (about 320 km).",
                "Salida por Wadi Araba hacia las orillas del mar Muerto, el punto más bajo del planeta. Almuerzo y tiempo libre para el baño antes de volver a Ammán (unos 320 km).",
              ], "ej1"),
            day(16, T_HOME,
              ["Petit-déjeuner selon l'horaire, transfert à l'aéroport d'Amman, assistance aux formalités et envol pour la France.", "Breakfast depending on the time, transfer to Amman airport, help with formalities and flight to France.", "Desayuno según el horario, traslado al aeropuerto de Ammán, asistencia en los trámites y vuelo a Francia."], "ej4"),
          ]
        ),
      ],
    }),

    // ───────────── 4. Le Nil et l'oasis du Fayoum — 13J/11N ─────────────
    trip({
      slug: "egypte-nil-oasis-fayoum-13j",
      name: [
        "Égypte : Le Caire, l'oasis du Fayoum et croisière sur le Nil",
        "Egypt: Cairo, the Fayoum Oasis and a Nile Cruise",
        "Egipto: El Cairo, el oasis de Fayum y crucero por el Nilo",
      ],
      tagline: [
        "Quatre nuits au Caire, la Vallée des Baleines en 4x4 et sept nuits de croisière",
        "Four nights in Cairo, the Valley of the Whales by 4x4 and seven nights' cruise",
        "Cuatro noches en El Cairo, el Valle de las Ballenas en 4x4 y siete noches de crucero",
      ],
      description: [
        "Un circuit de 21 visites qui ajoute à l'itinéraire classique une journée dans l'oasis du Fayoum, à deux heures du Caire : paysages de désert et de lacs, et la Vallée des Baleines, Wadi el-Hitan, rejointe en 4x4. Le séjour au Caire, en hôtel 5* (normes locales), couvre Gizeh, Saqqarah et le Grand Musée égyptien ; il est suivi de sept nuits de croisière en bateau 5* supérieur entre Louxor et Assouan.",
        "A tour of 21 visits that adds to the classic route a day in the Fayoum oasis, two hours from Cairo: desert and lake landscapes, and the Valley of the Whales, Wadi el-Hitan, reached by 4x4. The stay in Cairo, in a 5* hotel (local rating), covers Giza, Saqqara and the Grand Egyptian Museum; it is followed by seven nights' cruising on a superior 5* boat between Luxor and Aswan.",
        "Un circuito de 21 visitas que añade al itinerario clásico una jornada en el oasis de Fayum, a dos horas de El Cairo: paisajes de desierto y lagos, y el Valle de las Ballenas, Wadi el-Hitan, al que se llega en 4x4. La estancia en El Cairo, en hotel de 5* (categoría local), incluye Guiza, Saqqara y el Gran Museo Egipcio; le siguen siete noches de crucero en barco de 5* superior entre Luxor y Asuán.",
      ],
      includes: [
        "Vols depuis la France,Vols Le Caire–Louxor–Le Caire,4 nuits au Caire en hôtel 5*,7 nuits de croisière en bateau 5* supérieur,Pension complète selon programme,21 visites incluses,Guide égyptologue francophone,Entrées des sites",
        "Flights from France,Cairo–Luxor–Cairo flights,4 nights in Cairo in a 5* hotel,7 nights' cruise on a superior 5* boat,Full board as per programme,21 visits included,French-speaking Egyptologist guide,Site entrance fees",
        "Vuelos desde Francia,Vuelos El Cairo–Luxor–El Cairo,4 noches en El Cairo en hotel de 5*,7 noches de crucero en barco de 5* superior,Pensión completa según programa,21 visitas incluidas,Guía egiptólogo francófono,Entradas a los sitios",
      ],
      price: 2587, nights: 11, departureFrom: "Paris", image: "fy9",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 12, order: -97989,
      chapters: [
        chapter(
          ["Le Caire et l'oasis du Fayoum", "Cairo and the Fayoum oasis", "El Cairo y el oasis de Fayum"],
          [
            "Quatre nuits au Caire. Entre les pyramides et le musée, une journée entière s'échappe vers le Fayoum, tache verte sur la carte, et ses zones protégées de désert.",
            "Four nights in Cairo. Between the pyramids and the museum, a whole day escapes to the Fayoum, a patch of green on the map, and its protected desert areas.",
            "Cuatro noches en El Cairo. Entre las pirámides y el museo, una jornada entera se escapa hacia Fayum, una mancha verde en el mapa, y sus zonas protegidas de desierto.",
          ],
          ["fy9", "fy10", "fy7", "fy8", "fy5"],
          [
            day(1, T_CAIRO_ARR, CAIRO_ARR, "fy5"),
            day(2,
              ["L'oasis du Fayoum et la Vallée des Baleines", "The Fayoum oasis and the Valley of the Whales", "El oasis de Fayum y el Valle de las Ballenas"],
              [
                "Départ matinal pour le Fayoum, vaste zone agricole sillonnée de canaux, atteinte après deux heures de route. Départ en 4x4 vers Wadi el-Hitan, la Vallée des Baleines, à travers des paysages de désert et de lacs. Retour au Caire en fin de journée.",
                "An early start for the Fayoum, a vast farming area criss-crossed by canals, reached after two hours' drive. Leave by 4x4 for Wadi el-Hitan, the Valley of the Whales, through desert and lake landscapes. Return to Cairo at the end of the day.",
                "Salida temprana hacia Fayum, extensa zona agrícola surcada de canales, a dos horas de carretera. Salida en 4x4 hacia Wadi el-Hitan, el Valle de las Ballenas, entre paisajes de desierto y lagos. Regreso a El Cairo al final del día.",
              ], "fy7"),
            day(3, T_GEM_KHAN, GEM_KHAN, "ej11"),
            day(4,
              ["Gizeh et Saqqarah", "Giza and Saqqara", "Guiza y Saqqara"],
              [
                "Visite du plateau de Gizeh : Khéops, Khéphren, Mykérinos et le Sphinx. Déjeuner dans un restaurant typique, puis après-midi à Saqqarah : la pyramide à degrés de Djoser, la pyramide de Téti et un mastaba décoré.",
                "Visit the Giza plateau: Khufu, Khafre, Menkaure and the Sphinx. Lunch in a typical restaurant, then an afternoon at Saqqara: the Step Pyramid of Djoser, the pyramid of Teti and a decorated mastaba.",
                "Visita a la meseta de Guiza: Keops, Kefrén, Micerino y la Esfinge. Almuerzo en un restaurante típico y tarde en Saqqara: la pirámide escalonada de Zoser, la pirámide de Teti y una mastaba decorada.",
              ], "fy5"),
          ]
        ),
        chapter(
          ["De Louxor à Assouan", "From Luxor to Aswan", "De Luxor a Asuán"],
          [
            "Vol pour Louxor et embarquement sur un bateau 5* supérieur. Le temple de Louxor au crépuscule, Karnak, puis Edfou, Kom Ombo et Assouan.",
            "Flight to Luxor and boarding a superior 5* boat. Luxor temple at dusk, Karnak, then Edfu, Kom Ombo and Aswan.",
            "Vuelo a Luxor y embarque en un barco de 5* superior. El templo de Luxor al anochecer, Karnak, y después Edfú, Kom Ombo y Asuán.",
          ],
          ["fy12", "fy11", "fy6", "fy3", "fn9"],
          [
            day(5,
              ["Vol pour Louxor – le temple de Louxor au crépuscule", "Flight to Luxor – Luxor temple at dusk", "Vuelo a Luxor – el templo de Luxor al anochecer"],
              [
                "Vol pour Louxor et installation à bord. En fin de journée, visite du temple de Louxor, avec ses statues, son allée de sphinx et son obélisque, dont le jumeau se dresse place de la Concorde à Paris. En option : son et lumière de Karnak.",
                "Flight to Luxor and settling in on board. At the end of the day, visit Luxor temple, with its statues, its avenue of sphinxes and its obelisk, whose twin stands on the Place de la Concorde in Paris. Optional: the Karnak sound and light show.",
                "Vuelo a Luxor e instalación a bordo. Al final del día, visita al templo de Luxor, con sus estatuas, su avenida de esfinges y su obelisco, cuyo gemelo se alza en la plaza de la Concordia de París. Opcional: luz y sonido en Karnak.",
              ], "fy12"),
            day(6,
              ["Le temple de Karnak – Esna", "The temple of Karnak – Esna", "El templo de Karnak – Esna"],
              [
                "Visite du temple de Karnak et de sa salle hypostyle de 134 colonnes. Après-midi de navigation jusqu'à Esna, où l'on arrive à l'heure du thé.",
                "Visit Karnak temple and its hypostyle hall of 134 columns. An afternoon's sailing to Esna, where you arrive at tea time.",
                "Visita al templo de Karnak y su sala hipóstila de 134 columnas. Tarde de navegación hasta Esna, adonde se llega a la hora del té.",
              ], "fn10"),
            day(7, T_EDFU_KO, EDFU_KO, "fn9"),
            day(8,
              ["Assouan : les barrages et l'île Éléphantine", "Aswan: the dams and Elephantine Island", "Asuán: las presas y la isla Elefantina"],
              [
                "Départ pour le Petit et le Haut Barrage d'Assouan, avec vue sur le lac Nasser, puis balade en felouque autour de l'île Éléphantine, ancienne capitale de la Nubie. Arrêt dans une fabrique de papyrus et après-midi libre.",
                "Leave for the Low and High Dams of Aswan, with a view over Lake Nasser, then a felucca ride around Elephantine Island, once the capital of Nubia. A stop at a papyrus workshop and a free afternoon.",
                "Salida hacia la Presa Baja y la Alta Presa de Asuán, con vistas al lago Nasser, y paseo en faluca alrededor de la isla Elefantina, antigua capital de Nubia. Parada en un taller de papiros y tarde libre.",
              ], "fy3"),
            day(9,
              ["Assouan – Abou Simbel en option", "Aswan – optional Abu Simbel", "Asuán – Abu Simbel opcional"],
              [
                "En matinée, excursion optionnelle à Abou Simbel, en autocar ou en avion. Journée libre en pension complète pour ceux qui restent à bord, puis départ en navigation vers Esna.",
                "In the morning, an optional excursion to Abu Simbel, by coach or plane. A free day on full board for those who stay on the boat, then set sail for Esna.",
                "Por la mañana, excursión opcional a Abu Simbel, en autocar o en avión. Jornada libre en pensión completa para quienes se quedan a bordo y salida en navegación hacia Esna.",
              ], "fy6"),
          ]
        ),
        chapter(
          ["Thèbes et le retour", "Thebes and the journey home", "Tebas y el regreso"],
          [
            "Le bateau redescend vers Louxor pour la rive ouest de Thèbes, gardée pour la fin, avant le vol vers Le Caire.",
            "The boat sails back down to Luxor for the west bank at Thebes, kept for last, before the flight to Cairo.",
            "El barco desciende hacia Luxor para la orilla oeste de Tebas, reservada para el final, antes del vuelo a El Cairo.",
          ],
          ["fy1", "fy2", "fn11"],
          [
            day(10, T_SAIL,
              [
                "Journée de navigation vers Louxor, sur le pont supérieur, face aux felouques et aux villages des rives. Dîner d'adieu à bord.",
                "A day's sailing towards Luxor, on the upper deck, facing the feluccas and riverside villages. Farewell dinner on board.",
                "Jornada de navegación hacia Luxor, en la cubierta superior, frente a las falucas y los pueblos de las orillas. Cena de despedida a bordo.",
              ], "fy3"),
            day(11,
              ["Thèbes : la rive ouest et Médinet Habou", "Thebes: the west bank and Medinet Habu", "Tebas: la orilla oeste y Medinet Habu"],
              [
                "Départ pour Thèbes et les demeures d'éternité des pharaons de la XVIIIe à la XXe dynastie, sur la rive gauche du Nil. Visite de Médinet Habou, le temple de Ramsès III, l'un des plus vastes de la nécropole.",
                "Leave for Thebes and the eternal homes of the pharaohs of the 18th to 20th dynasties, on the west bank of the Nile. Visit Medinet Habu, the temple of Ramesses III, one of the largest in the necropolis.",
                "Salida hacia Tebas y las moradas de eternidad de los faraones de las dinastías XVIII a XX, en la orilla izquierda del Nilo. Visita a Medinet Habu, el templo de Ramsés III, uno de los más grandes de la necrópolis.",
              ], "fy1"),
            day(12,
              ["Louxor – Le Caire", "Luxor – Cairo", "Luxor – El Cairo"],
              [
                "Vol pour Le Caire, accueil et transfert pour le dîner. Selon le plan de vol, transfert à l'aéroport dans la soirée, ou nuit en option près de l'aéroport (92 € par personne en chambre double).",
                "Flight to Cairo, welcome and transfer for dinner. Depending on the flight plan, transfer to the airport in the evening, or an optional night near the airport (€92 per person in a double room).",
                "Vuelo a El Cairo, recibimiento y traslado para la cena. Según el plan de vuelo, traslado al aeropuerto por la noche, o noche opcional cerca del aeropuerto (92 € por persona en habitación doble).",
              ], "fy2"),
            day(13, T_HOME, HOME, "fy5"),
          ]
        ),
      ],
    }),

    // ───────────── 5. Splendeurs du Nil et du lac Nasser — 11J/10N ─────────────
    trip({
      slug: "egypte-nil-lac-nasser-abou-simbel-11j",
      name: [
        "Égypte : croisières sur le Nil et le lac Nasser, jusqu'à Abou Simbel",
        "Egypt: Cruises on the Nile and Lake Nasser, as far as Abu Simbel",
        "Egipto: cruceros por el Nilo y el lago Nasser, hasta Abu Simbel",
      ],
      tagline: [
        "Deux bateaux 5*, la Vallée des Rois et les temples de Nubie, Abou Simbel compris",
        "Two 5* boats, the Valley of the Kings and the temples of Nubia, Abu Simbel included",
        "Dos barcos de 5*, el Valle de los Reyes y los templos de Nubia, con Abu Simbel incluido",
      ],
      description: [
        "Deux croisières en un seul voyage : quatre nuits sur le Nil de Louxor à Assouan, puis trois nuits sur le lac Nasser à bord d'un second bateau 5* (normes locales), au départ d'Abou Simbel. Sur le lac, on visite des temples de Nubie que peu de voyageurs voient : Amada, Derr et Ouadi es-Seboua, tous déplacés pour échapper à la montée des eaux. Le voyage se termine au Caire par les pyramides, le Grand Musée égyptien et le Caire islamique.",
        "Two cruises in one trip: four nights on the Nile from Luxor to Aswan, then three nights on Lake Nasser aboard a second 5* boat (local rating), starting from Abu Simbel. On the lake you visit Nubian temples that few travellers see: Amada, Derr and Wadi es-Sebua, all moved to escape the rising waters. The trip ends in Cairo with the pyramids, the Grand Egyptian Museum and Islamic Cairo.",
        "Dos cruceros en un solo viaje: cuatro noches en el Nilo de Luxor a Asuán y tres noches en el lago Nasser a bordo de un segundo barco de 5* (categoría local), con salida desde Abu Simbel. En el lago se visitan templos de Nubia que pocos viajeros ven: Amada, Derr y Wadi es-Sebua, todos trasladados para salvarlos de la subida de las aguas. El viaje termina en El Cairo con las pirámides, el Gran Museo Egipcio y El Cairo islámico.",
      ],
      includes: [
        "Vols depuis la France,Vols Le Caire–Louxor et Assouan–Le Caire,4 nuits de croisière sur le Nil en bateau 5* supérieur,3 nuits de croisière sur le lac Nasser en bateau 5*,3 nuits au Caire en hôtel 4*,Pension complète selon programme,Abou Simbel et Vallée des Rois inclus,Guide égyptologue francophone",
        "Flights from France,Cairo–Luxor and Aswan–Cairo flights,4 nights' Nile cruise on a superior 5* boat,3 nights' Lake Nasser cruise on a 5* boat,3 nights in Cairo in a 4* hotel,Full board as per programme,Abu Simbel and Valley of the Kings included,French-speaking Egyptologist guide",
        "Vuelos desde Francia,Vuelos El Cairo–Luxor y Asuán–El Cairo,4 noches de crucero por el Nilo en barco de 5* superior,3 noches de crucero por el lago Nasser en barco de 5*,3 noches en El Cairo en hotel de 4*,Pensión completa según programa,Abu Simbel y Valle de los Reyes incluidos,Guía egiptólogo francófono",
      ],
      price: 3151, nights: 10, departureFrom: "Paris", image: "ln7",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 12, order: -97988,
      chapters: [
        chapter(
          ["Louxor et Thèbes", "Luxor and Thebes", "Luxor y Tebas"],
          [
            "Après une courte nuit au Caire, vol pour Louxor et embarquement. Karnak et le temple de Louxor dès le premier jour, la Vallée des Rois et le temple d'Hatchepsout le lendemain.",
            "After a short night in Cairo, a flight to Luxor and boarding. Karnak and Luxor temple on the first day, the Valley of the Kings and Hatshepsut's temple the next.",
            "Tras una noche corta en El Cairo, vuelo a Luxor y embarque. Karnak y el templo de Luxor el primer día; el Valle de los Reyes y el templo de Hatshepsut al siguiente.",
          ],
          ["ln10", "ln3", "ln9", "ln4"],
          [
            day(1, T_CAIRO_ARR, CAIRO_ARR, "ln4"),
            day(2,
              ["Vol pour Louxor – Karnak et le temple de Louxor", "Flight to Luxor – Karnak and Luxor temple", "Vuelo a Luxor – Karnak y el templo de Luxor"],
              [
                "Vol pour Louxor et embarquement sur le bateau 5*. Première visite avec le guide égyptologue : le temple de Karnak et sa salle hypostyle. Temps libre, puis visite du temple de Louxor aux lueurs du crépuscule.",
                "Flight to Luxor and boarding the 5* boat. First visit with the Egyptologist guide: Karnak temple and its hypostyle hall. Free time, then a visit to Luxor temple in the light of dusk.",
                "Vuelo a Luxor y embarque en el barco de 5*. Primera visita con el guía egiptólogo: el templo de Karnak y su sala hipóstila. Tiempo libre y visita al templo de Luxor a la luz del anochecer.",
              ], "ln10"),
            day(3,
              ["La Vallée des Rois et le temple d'Hatchepsout", "The Valley of the Kings and Hatshepsut's temple", "El Valle de los Reyes y el templo de Hatshepsut"],
              [
                "Visite de la Vallée des Rois, nécropole des pharaons du Nouvel Empire sur la rive ouest. Continuation vers Deir el-Bahari et le temple de la reine Hatchepsout, œuvre de l'architecte Senenmout : trois terrasses superposées, reliées par des rampes.",
                "Visit the Valley of the Kings, the necropolis of the New Kingdom pharaohs on the west bank. Continue to Deir el-Bahari and the temple of Queen Hatshepsut, the work of the architect Senenmut: three stacked terraces linked by ramps.",
                "Visita al Valle de los Reyes, necrópolis de los faraones del Imperio Nuevo en la orilla oeste. Continuación hacia Deir el-Bahari y el templo de la reina Hatshepsut, obra del arquitecto Senenmut: tres terrazas superpuestas unidas por rampas.",
              ], "ln9"),
          ]
        ),
        chapter(
          ["Edfou, Kom Ombo et Assouan", "Edfu, Kom Ombo and Aswan", "Edfú, Kom Ombo y Asuán"],
          [
            "Deux jours pour remonter le fleuve jusqu'à Assouan, avec le thé servi sur le pont au coucher du soleil.",
            "Two days to sail up the river to Aswan, with tea served on deck at sunset.",
            "Dos días para remontar el río hasta Asuán, con el té servido en cubierta al atardecer.",
          ],
          ["ln1", "ln8", "ln2", "fn9"],
          [
            day(4,
              ["Edfou et Kom Ombo", "Edfu and Kom Ombo", "Edfú y Kom Ombo"],
              [
                "Visite du temple d'Horus à Edfou. Déjeuner pendant la navigation vers Kom Ombo, puis visite de son temple, posé sur un promontoire au bord du Nil. Retour à bord pour le coucher du soleil et le thé de cinq heures.",
                "Visit the temple of Horus at Edfu. Lunch while sailing to Kom Ombo, then visit its temple, set on a promontory beside the Nile. Back on board for sunset and five o'clock tea.",
                "Visita al templo de Horus en Edfú. Almuerzo durante la navegación hacia Kom Ombo y visita de su templo, asentado en un promontorio junto al Nilo. Regreso a bordo para el atardecer y el té de las cinco.",
              ], "fn9"),
            day(5,
              ["Assouan : le Haut Barrage, Philae et l'obélisque inachevé", "Aswan: the High Dam, Philae and the unfinished obelisk", "Asuán: la Alta Presa, Filé y el obelisco inacabado"],
              [
                "Découverte du Haut Barrage, construit dans les années 1960, et de son panorama sur le lac Nasser. Visite du temple d'Isis à Philae, puis de l'obélisque inachevé, taillé dans le granit rouge.",
                "Discover the High Dam, built in the 1960s, and its view over Lake Nasser. Visit the temple of Isis at Philae, then the unfinished obelisk, cut from red granite.",
                "Descubrimiento de la Alta Presa, construida en los años sesenta, y su panorámica del lago Nasser. Visita al templo de Isis en Filé y al obelisco inacabado, tallado en granito rojo.",
              ], "ln1"),
          ]
        ),
        chapter(
          ["Abou Simbel et le lac Nasser", "Abu Simbel and Lake Nasser", "Abu Simbel y el lago Nasser"],
          [
            "Changement de bateau à Abou Simbel pour trois nuits sur le lac Nasser, au cœur de l'ancienne Nubie : des temples isolés au bord de l'eau, loin des foules de la vallée.",
            "A change of boat at Abu Simbel for three nights on Lake Nasser, in the heart of ancient Nubia: isolated temples at the water's edge, far from the crowds of the valley.",
            "Cambio de barco en Abu Simbel para tres noches en el lago Nasser, en el corazón de la antigua Nubia: templos aislados a orillas del agua, lejos de las multitudes del valle.",
          ],
          ["ln7", "ln5", "ln2", "tc10"],
          [
            day(6,
              ["Assouan – Abou Simbel", "Aswan – Abu Simbel", "Asuán – Abu Simbel"],
              [
                "Débarquement et route vers Abou Simbel (environ 3 h 30), où vous embarquez sur le second bateau. Après le déjeuner, visite des temples taillés dans la roche, qui marquaient la frontière sud de l'empire : les quatre colosses de la façade sont les plus grandes sculptures conservées de l'époque pharaonique.",
                "Disembark and drive to Abu Simbel (about 3 hrs 30), where you board the second boat. After lunch, visit the rock-cut temples that marked the southern border of the empire: the four colossi of the façade are the largest surviving sculptures of the pharaonic era.",
                "Desembarque y carretera hacia Abu Simbel (unas 3 h 30), donde se embarca en el segundo barco. Tras el almuerzo, visita a los templos excavados en la roca, que marcaban la frontera sur del imperio: los cuatro colosos de la fachada son las mayores esculturas conservadas de la época faraónica.",
              ], "ln7"),
            day(7,
              ["Les temples d'Amada et de Derr", "The temples of Amada and Derr", "Los templos de Amada y Derr"],
              [
                "Visite du temple d'Amada, le plus ancien du lac Nasser (XVIIIe dynastie), remarquable pour ses reliefs, puis du temple de Derr, construit sous Ramsès II. Navigation vers Ouadi es-Seboua.",
                "Visit the temple of Amada, the oldest on Lake Nasser (18th dynasty), notable for its reliefs, then the temple of Derr, built under Ramesses II. Sail towards Wadi es-Sebua.",
                "Visita al templo de Amada, el más antiguo del lago Nasser (dinastía XVIII), notable por sus relieves, y al templo de Derr, construido bajo Ramsés II. Navegación hacia Wadi es-Sebua.",
              ], "ln2"),
            day(8,
              ["Ouadi es-Seboua – Assouan", "Wadi es-Sebua – Aswan", "Wadi es-Sebua – Asuán"],
              [
                "Visite du temple d'Ouadi es-Seboua, la « vallée des lions », dédié à Amon-Rê et précédé d'une allée de sphinx. Comme d'autres sites nubiens, il a été déplacé lors de la construction du barrage. Navigation vers Assouan et détente à bord.",
                "Visit the temple of Wadi es-Sebua, the 'valley of the lions', dedicated to Amun-Ra and approached by an avenue of sphinxes. Like other Nubian sites, it was moved when the dam was built. Sail to Aswan and relax on board.",
                "Visita al templo de Wadi es-Sebua, el «valle de los leones», dedicado a Amón-Ra y precedido de una avenida de esfinges. Como otros sitios nubios, fue trasladado al construirse la presa. Navegación hacia Asuán y descanso a bordo.",
              ], "ln5"),
          ]
        ),
        chapter(
          ["Le Caire", "Cairo", "El Cairo"],
          [
            "Deux nuits au Caire pour finir : le plateau de Gizeh, le Grand Musée égyptien et le Caire islamique, avec un dîner dans les souks de Khan el-Khalili.",
            "Two nights in Cairo to finish: the Giza plateau, the Grand Egyptian Museum and Islamic Cairo, with dinner in the Khan el-Khalili souks.",
            "Dos noches en El Cairo para terminar: la meseta de Guiza, el Gran Museo Egipcio y El Cairo islámico, con cena en los zocos de Jan el-Jalili.",
          ],
          ["gv6", "gv10", "od5", "ej11"],
          [
            day(9,
              ["Vol pour Le Caire – les pyramides de Gizeh", "Flight to Cairo – the pyramids of Giza", "Vuelo a El Cairo – las pirámides de Guiza"],
              [
                "Débarquement, vol d'Assouan au Caire et visite du plateau de Gizeh : Khéops, Khéphren, Mykérinos et le Sphinx. Déjeuner en cours de route et installation à l'hôtel.",
                "Disembark, fly from Aswan to Cairo and visit the Giza plateau: Khufu, Khafre, Menkaure and the Sphinx. Lunch on the way and check-in at the hotel.",
                "Desembarque, vuelo de Asuán a El Cairo y visita a la meseta de Guiza: Keops, Kefrén, Micerino y la Esfinge. Almuerzo en ruta e instalación en el hotel.",
              ], "gv6"),
            day(10,
              ["Le Grand Musée égyptien et le Caire islamique", "The Grand Egyptian Museum and Islamic Cairo", "El Gran Museo Egipcio y El Cairo islámico"],
              [
                "Visite du Grand Musée égyptien. Déjeuner en ville, puis le Caire islamique, sa citadelle et la mosquée de Méhémet Ali. Temps de repos à l'hôtel avant un dîner dans un restaurant typique de Khan el-Khalili. Selon le plan de vol, transfert à l'aéroport après le dîner.",
                "Visit the Grand Egyptian Museum. Lunch in town, then Islamic Cairo, its citadel and the mosque of Muhammad Ali. Time to rest at the hotel before dinner in a typical Khan el-Khalili restaurant. Depending on the flight plan, transfer to the airport after dinner.",
                "Visita al Gran Museo Egipcio. Almuerzo en la ciudad y El Cairo islámico, su ciudadela y la mezquita de Mehmet Alí. Descanso en el hotel antes de cenar en un restaurante típico de Jan el-Jalili. Según el plan de vuelo, traslado al aeropuerto tras la cena.",
              ], "gv10"),
            day(11, T_HOME,
              ["Transfert à l'aéroport, assistance aux formalités et envol pour la France.", "Transfer to the airport, help with formalities and flight to France.", "Traslado al aeropuerto, asistencia en los trámites y vuelo a Francia."], "od5"),
          ]
        ),
      ],
    }),

    // ───────────── 6. Caire et Nil au gré du vent — 9J/7N ─────────────
    trip({
      slug: "egypte-caire-nil-dahabeya-9j",
      name: [
        "Égypte : Le Caire et le Nil en dahabeya, en petit groupe",
        "Egypt: Cairo and the Nile by Dahabeya, in a Small Group",
        "Egipto: El Cairo y el Nilo en dahabiya, en grupo reducido",
      ],
      tagline: [
        "Douze voyageurs au plus, cinq nuits à la voile et des escales interdites aux grands bateaux",
        "Twelve travellers at most, five nights under sail and stops the big boats cannot reach",
        "Doce viajeros como máximo, cinco noches a vela y escalas vedadas a los grandes barcos",
      ],
      description: [
        "Deux nuits au Caire pour Gizeh, Saqqarah et le Grand Musée égyptien, puis cinq nuits de Louxor à Assouan à bord d'une dahabeya, le voilier traditionnel du Nil : six cabines de 16 m² à fenêtres panoramiques et douze passagers au maximum. Le bateau s'arrête là où les grands navires ne passent pas, comme les carrières de Gebel Silsileh ou l'île d'Al Ramady, pour un dîner barbecue sur la plage. Quinze visites sont incluses.",
        "Two nights in Cairo for Giza, Saqqara and the Grand Egyptian Museum, then five nights from Luxor to Aswan aboard a dahabeya, the traditional sailing boat of the Nile: six 16 m² cabins with panoramic windows and twelve passengers at most. The boat stops where the big ships cannot go, such as the quarries of Gebel el-Silsila or Al Ramady island, for a barbecue dinner on the beach. Fifteen visits are included.",
        "Dos noches en El Cairo para Guiza, Saqqara y el Gran Museo Egipcio, y cinco noches de Luxor a Asuán a bordo de una dahabiya, el velero tradicional del Nilo: seis camarotes de 16 m² con ventanas panorámicas y doce pasajeros como máximo. El barco se detiene donde no pasan los grandes navíos, como las canteras de Gebel Silsila o la isla de Al Ramady, para una cena barbacoa en la playa. Incluye quince visitas.",
      ],
      includes: [
        "Vols depuis la France,Vols Le Caire–Louxor et Assouan–Le Caire,5 nuits en dahabeya en cabine double,2 nuits au Caire en hôtel 5*,Pension complète selon programme,15 visites incluses,Guide égyptologue francophone,Entrées des sites",
        "Flights from France,Cairo–Luxor and Aswan–Cairo flights,5 nights on a dahabeya in a double cabin,2 nights in Cairo in a 5* hotel,Full board as per programme,15 visits included,French-speaking Egyptologist guide,Site entrance fees",
        "Vuelos desde Francia,Vuelos El Cairo–Luxor y Asuán–El Cairo,5 noches en dahabiya en camarote doble,2 noches en El Cairo en hotel de 5*,Pensión completa según programa,15 visitas incluidas,Guía egiptólogo francófono,Entradas a los sitios",
      ],
      price: 3899, nights: 7, departureFrom: "Marseille", image: "gv14",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,solo", maxGuests: 12, order: -97987,
      chapters: [
        chapter(
          ["Le Caire", "Cairo", "El Cairo"],
          [
            "Deux nuits et une journée dense dans la capitale : les pyramides, Saqqarah et le Grand Musée égyptien.",
            "Two nights and one full day in the capital: the pyramids, Saqqara and the Grand Egyptian Museum.",
            "Dos noches y una jornada intensa en la capital: las pirámides, Saqqara y el Gran Museo Egipcio.",
          ],
          ["gv6", "gv4", "od2", "od5"],
          [
            day(1, T_CAIRO_ARR, CAIRO_ARR, "gv4"),
            day(2,
              ["Gizeh, Saqqarah et le Grand Musée égyptien", "Giza, Saqqara and the Grand Egyptian Museum", "Guiza, Saqqara y el Gran Museo Egipcio"],
              [
                "Visite du plateau de Gizeh, de ses trois pyramides et du Sphinx, puis de Saqqarah et de la pyramide à degrés de Djoser, construite vers 2700 av. J.-C. par l'architecte Imhotep. Après le déjeuner, visite du Grand Musée égyptien.",
                "Visit the Giza plateau, its three pyramids and the Sphinx, then Saqqara and the Step Pyramid of Djoser, built around 2700 BC by the architect Imhotep. After lunch, visit the Grand Egyptian Museum.",
                "Visita a la meseta de Guiza, sus tres pirámides y la Esfinge, y después Saqqara y la pirámide escalonada de Zoser, construida hacia 2700 a. C. por el arquitecto Imhotep. Tras el almuerzo, visita al Gran Museo Egipcio.",
              ], "gv6"),
          ]
        ),
        chapter(
          ["Louxor et Thèbes", "Luxor and Thebes", "Luxor y Tebas"],
          [
            "Vol pour Louxor, où la dahabeya attend à quai. Karnak et le temple de Louxor le premier soir, la rive ouest le lendemain avant de lever les voiles vers Esna.",
            "Flight to Luxor, where the dahabeya waits at the quay. Karnak and Luxor temple on the first evening, the west bank the next day before setting sail for Esna.",
            "Vuelo a Luxor, donde la dahabiya espera en el muelle. Karnak y el templo de Luxor la primera tarde; la orilla oeste al día siguiente, antes de izar velas hacia Esna.",
          ],
          ["gv5", "gv8", "gv13", "gv15"],
          [
            day(3,
              ["Vol pour Louxor – Karnak et le temple de Louxor", "Flight to Luxor – Karnak and Luxor temple", "Vuelo a Luxor – Karnak y el templo de Luxor"],
              [
                "Vol pour Louxor et installation à bord de la dahabeya. Visite du temple de Karnak, puis, au crépuscule, du temple de Louxor et de son allée de sphinx.",
                "Flight to Luxor and settling in on the dahabeya. Visit Karnak temple, then, at dusk, Luxor temple and its avenue of sphinxes.",
                "Vuelo a Luxor e instalación a bordo de la dahabiya. Visita al templo de Karnak y, al anochecer, al templo de Luxor y su avenida de esfinges.",
              ], "gv5"),
            day(4,
              ["Le temple d'Hatchepsout et la Vallée des Rois – Esna", "Hatshepsut's temple and the Valley of the Kings – Esna", "El templo de Hatshepsut y el Valle de los Reyes – Esna"],
              [
                "Excursion sur la rive occidentale du Nil : le temple de la reine Hatchepsout à Deir el-Bahari, avec ses trois terrasses adossées à la falaise, puis la Vallée des Rois et ses tombeaux du Nouvel Empire. Navigation vers Esna.",
                "An excursion on the west bank of the Nile: the temple of Queen Hatshepsut at Deir el-Bahari, with its three terraces set against the cliff, then the Valley of the Kings and its New Kingdom tombs. Sail towards Esna.",
                "Excursión por la orilla occidental del Nilo: el templo de la reina Hatshepsut en Deir el-Bahari, con sus tres terrazas adosadas al acantilado, y el Valle de los Reyes y sus tumbas del Imperio Nuevo. Navegación hacia Esna.",
              ], "gv8"),
          ]
        ),
        chapter(
          ["Au fil du vent : Edfou, Gebel Silsileh, Kom Ombo", "With the wind: Edfu, Gebel el-Silsila, Kom Ombo", "Al hilo del viento: Edfú, Gebel Silsila, Kom Ombo"],
          [
            "Le cœur de la croisière : des escales que seules les petites embarcations peuvent faire, entre un temple, une île et d'anciennes carrières de grès.",
            "The heart of the cruise: stops that only small boats can make, between a temple, an island and ancient sandstone quarries.",
            "El corazón del crucero: escalas que solo pueden hacer las embarcaciones pequeñas, entre un templo, una isla y antiguas canteras de arenisca.",
          ],
          ["gv14", "gv3", "gv7", "fn8"],
          [
            day(5,
              ["Edfou et l'île d'Al Ramady", "Edfu and Al Ramady island", "Edfú y la isla de Al Ramady"],
              [
                "Navigation vers Edfou. Après le déjeuner à bord, visite du temple d'Horus, puis continuation vers l'île d'Al Ramady : dîner barbecue sur la plage, avec musiques et danses traditionnelles de Haute-Égypte.",
                "Sail to Edfu. After lunch on board, visit the temple of Horus, then continue to Al Ramady island: a barbecue dinner on the beach, with traditional music and dances of Upper Egypt.",
                "Navegación hacia Edfú. Tras el almuerzo a bordo, visita al templo de Horus y continuación hacia la isla de Al Ramady: cena barbacoa en la playa, con música y danzas tradicionales del Alto Egipto.",
              ], "gv14"),
            day(6,
              ["Gebel Silsileh et Kom Ombo", "Gebel el-Silsila and Kom Ombo", "Gebel Silsila y Kom Ombo"],
              [
                "Navigation vers Gebel Silsileh, où le Nil se resserre entre deux falaises : pendant des millénaires, ces carrières ont fourni le grès de Karnak et de Louxor. On y voit le temple rupestre d'Horemheb et des stèles gravées. Puis navigation vers Kom Ombo et visite du temple.",
                "Sail to Gebel el-Silsila, where the Nile narrows between two cliffs: for thousands of years these quarries supplied the sandstone for Karnak and Luxor. Here you see the rock-cut temple of Horemheb and carved stelae. Then sail to Kom Ombo and visit the temple.",
                "Navegación hacia Gebel Silsila, donde el Nilo se estrecha entre dos acantilados: durante milenios, estas canteras suministraron la arenisca de Karnak y Luxor. Allí se ven el templo rupestre de Horemheb y estelas grabadas. Después, navegación hacia Kom Ombo y visita al templo.",
              ], "gv3"),
          ]
        ),
        chapter(
          ["Assouan", "Aswan", "Asuán"],
          [
            "Arrivée matinale à Assouan pour le temple de Philae, le Haut Barrage et le jardin botanique, sur une île au milieu du Nil.",
            "An early arrival in Aswan for the temple of Philae, the High Dam and the botanical garden, on an island in the middle of the Nile.",
            "Llegada temprana a Asuán para el templo de Filé, la Alta Presa y el jardín botánico, en una isla en medio del Nilo.",
          ],
          ["gv2", "ej12", "fn1"],
          [
            day(7,
              ["Philae, le Haut Barrage et le jardin botanique", "Philae, the High Dam and the botanical garden", "Filé, la Alta Presa y el jardín botánico"],
              [
                "Découverte du temple de Philae, voué au culte d'Isis et d'Osiris, puis du Haut Barrage et de son panorama sur le lac Nasser. Déjeuner à bord, puis visite du jardin botanique, qui occupe toute une petite île du Nil.",
                "Discover the temple of Philae, dedicated to Isis and Osiris, then the High Dam and its view over Lake Nasser. Lunch on board, then visit the botanical garden, which covers a whole small island in the Nile.",
                "Descubrimiento del templo de Filé, consagrado a Isis y Osiris, y de la Alta Presa y su panorámica del lago Nasser. Almuerzo a bordo y visita al jardín botánico, que ocupa toda una pequeña isla del Nilo.",
              ], "gv2"),
            day(8,
              ["Abou Simbel en option – vol pour Le Caire", "Optional Abu Simbel – flight to Cairo", "Abu Simbel opcional – vuelo a El Cairo"],
              [
                "En matinée, excursion optionnelle à Abou Simbel, à régler sur place (120 € en autocar ou 385 € en avion, par personne). Après le déjeuner, débarquement et vol pour Le Caire. Dîner, puis transfert à l'aéroport ou nuit en option selon le plan de vol.",
                "In the morning, an optional excursion to Abu Simbel, payable locally (€120 by coach or €385 by plane, per person). After lunch, disembark and fly to Cairo. Dinner, then transfer to the airport or an optional night, depending on the flight plan.",
                "Por la mañana, excursión opcional a Abu Simbel, a pagar in situ (120 € en autocar o 385 € en avión, por persona). Tras el almuerzo, desembarque y vuelo a El Cairo. Cena y traslado al aeropuerto o noche opcional, según el plan de vuelo.",
              ], "fn1"),
            day(9, T_HOME, HOME, "gv13"),
          ]
        ),
      ],
    }),

    // ───────────── 7. L'Odyssée des Pharaons — 11J/10N ─────────────
    trip({
      slug: "egypte-odyssee-pharaons-11j",
      name: [
        "Égypte : l'odyssée des pharaons, croisière en suites jusqu'à Abydos",
        "Egypt: The Pharaohs' Odyssey, an All-Suite Cruise as far as Abydos",
        "Egipto: la odisea de los faraones, crucero en suites hasta Abidos",
      ],
      tagline: [
        "Un bateau de 34 passagers seulement, 22 visites, Dendérah et Abydos par le fleuve",
        "A boat for just 34 passengers, 22 visits, Dendera and Abydos by river",
        "Un barco de solo 34 pasajeros, 22 visitas, Dendera y Abidos por el río",
      ],
      description: [
        "Onze jours pour voir l'Égypte en détail, à bord d'un bateau 5* supérieur (normes locales) rénové en 2023, qui ne compte que des suites et 34 passagers au maximum. Outre l'itinéraire classique d'Assouan à Louxor, la croisière pousse jusqu'à Dendérah et Abydos, rarement atteints par le fleuve. Au Caire, deux nuits face aux pyramides, avec Gizeh, Dahchour, Saqqarah, le Grand Musée égyptien et le Caire copte. Le voyage existe aussi avec trois nuits à Hurghada (à partir de 5 796 € par personne).",
        "Eleven days to see Egypt in detail, aboard a superior 5* boat (local rating) renovated in 2023, with suites only and 34 passengers at most. Beyond the classic route from Aswan to Luxor, the cruise continues to Dendera and Abydos, rarely reached by river. In Cairo, two nights facing the pyramids, with Giza, Dahshur, Saqqara, the Grand Egyptian Museum and Coptic Cairo. The trip is also available with three nights in Hurghada (from €5,796 per person).",
        "Once días para ver Egipto en detalle, a bordo de un barco de 5* superior (categoría local) renovado en 2023, que solo tiene suites y 34 pasajeros como máximo. Además del itinerario clásico de Asuán a Luxor, el crucero llega hasta Dendera y Abidos, adonde rara vez se accede por el río. En El Cairo, dos noches frente a las pirámides, con Guiza, Dahshur, Saqqara, el Gran Museo Egipcio y El Cairo copto. El viaje existe también con tres noches en Hurghada (desde 5.796 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Vols Le Caire–Assouan–Le Caire,7 nuits en suite sur un bateau 5* supérieur,3 nuits au Caire en hôtels 5*,Pension complète selon programme,22 visites incluses,Guide égyptologue francophone,Entrées des sites",
        "Flights from France,Cairo–Aswan–Cairo flights,7 nights in a suite on a superior 5* boat,3 nights in Cairo in 5* hotels,Full board as per programme,22 visits included,French-speaking Egyptologist guide,Site entrance fees",
        "Vuelos desde Francia,Vuelos El Cairo–Asuán–El Cairo,7 noches en suite en un barco de 5* superior,3 noches en El Cairo en hoteles de 5*,Pensión completa según programa,22 visitas incluidas,Guía egiptólogo francófono,Entradas a los sitios",
      ],
      price: 4451, nights: 10, departureFrom: "Barcelone", image: "od10",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,honeymoon,groups", maxGuests: 12, order: -97986,
      chapters: [
        chapter(
          ["Le Caire et ses pyramides", "Cairo and its pyramids", "El Cairo y sus pirámides"],
          [
            "Deux nuits dans un hôtel 5* face aux pyramides, et une journée pour en voir cinq : Gizeh, puis Dahchour et Saqqarah.",
            "Two nights in a 5* hotel facing the pyramids, and a day to see five of them: Giza, then Dahshur and Saqqara.",
            "Dos noches en un hotel de 5* frente a las pirámides y una jornada para ver cinco de ellas: Guiza, Dahshur y Saqqara.",
          ],
          ["od6", "od2", "gv6", "od5"],
          [
            day(1, T_CAIRO_ARR, CAIRO_ARR, "gv6"),
            day(2,
              ["Gizeh, Dahchour et Saqqarah", "Giza, Dahshur and Saqqara", "Guiza, Dahshur y Saqqara"],
              [
                "Visite du plateau de Gizeh : Khéops, Khéphren, Mykérinos et le Sphinx. Déjeuner dans un restaurant typique. L'après-midi, le site de Dahchour, avec la pyramide rouge et la pyramide rhomboïdale, puis Saqqarah et la pyramide à degrés de Djoser.",
                "Visit the Giza plateau: Khufu, Khafre, Menkaure and the Sphinx. Lunch in a typical restaurant. In the afternoon, the site of Dahshur, with the Red Pyramid and the Bent Pyramid, then Saqqara and the Step Pyramid of Djoser.",
                "Visita a la meseta de Guiza: Keops, Kefrén, Micerino y la Esfinge. Almuerzo en un restaurante típico. Por la tarde, el sitio de Dahshur, con la pirámide Roja y la pirámide Acodada, y Saqqara y la pirámide escalonada de Zoser.",
              ], "od6"),
          ]
        ),
        chapter(
          ["D'Assouan à Louxor", "From Aswan to Luxor", "De Asuán a Luxor"],
          [
            "Vol pour Assouan et embarquement. Le bateau descend le Nil par Kom Ombo et l'écluse d'Esna jusqu'à Louxor et la nécropole thébaine.",
            "Flight to Aswan and boarding. The boat sails down the Nile via Kom Ombo and the Esna lock to Luxor and the Theban necropolis.",
            "Vuelo a Asuán y embarque. El barco desciende el Nilo por Kom Ombo y la esclusa de Esna hasta Luxor y la necrópolis tebana.",
          ],
          ["od10", "od8", "od12", "fn8", "fn11"],
          [
            day(3,
              ["Vol pour Assouan – le musée nubien", "Flight to Aswan – the Nubian Museum", "Vuelo a Asuán – el Museo Nubio"],
              [
                "Vol pour Assouan, installation à bord et déjeuner. L'après-midi, visite du musée nubien : 7 000 ans d'histoire, des statues pharaoniques aux témoignages du sauvetage des temples de Nubie, dans un bâtiment aux dômes traditionnels.",
                "Flight to Aswan, settling in on board and lunch. In the afternoon, visit the Nubian Museum: 7,000 years of history, from pharaonic statues to records of the rescue of the Nubian temples, in a building with traditional domes.",
                "Vuelo a Asuán, instalación a bordo y almuerzo. Por la tarde, visita al Museo Nubio: 7.000 años de historia, de las estatuas faraónicas a los testimonios del rescate de los templos de Nubia, en un edificio de cúpulas tradicionales.",
              ], "od10"),
            day(4,
              ["Kom Ombo et l'écluse d'Esna", "Kom Ombo and the Esna lock", "Kom Ombo y la esclusa de Esna"],
              [
                "Navigation vers Kom Ombo et visite de son temple double, dédié à Sobek et à Horus. Passage de l'écluse d'Esna, déjeuner à bord et continuation vers Louxor.",
                "Sail to Kom Ombo and visit its double temple, dedicated to Sobek and Horus. Pass through the Esna lock, lunch on board and continue to Luxor.",
                "Navegación hacia Kom Ombo y visita de su templo doble, dedicado a Sobek y a Horus. Paso de la esclusa de Esna, almuerzo a bordo y continuación hacia Luxor.",
              ], "fn8"),
            day(5,
              ["Louxor : la nécropole thébaine et la Vallée des Rois", "Luxor: the Theban necropolis and the Valley of the Kings", "Luxor: la necrópolis tebana y el Valle de los Reyes"],
              [
                "Découverte de la nécropole thébaine, classée à l'Unesco, sur la rive occidentale du Nil. Visite de la Vallée des Rois, où reposaient les pharaons du Nouvel Empire, de Thoutmôsis Ier à Ramsès XI, dans des tombeaux richement décorés.",
                "Discover the Theban necropolis, a UNESCO site, on the west bank of the Nile. Visit the Valley of the Kings, where the New Kingdom pharaohs, from Thutmose I to Ramesses XI, lay in richly decorated tombs.",
                "Descubrimiento de la necrópolis tebana, inscrita en la Unesco, en la orilla occidental del Nilo. Visita al Valle de los Reyes, donde reposaban los faraones del Imperio Nuevo, de Tutmosis I a Ramsés XI, en tumbas ricamente decoradas.",
              ], "fn11"),
          ]
        ),
        chapter(
          ["Dendérah, Abydos et Karnak", "Dendera, Abydos and Karnak", "Dendera, Abidos y Karnak"],
          [
            "Au nord de Louxor, deux temples parmi les mieux conservés d'Égypte : celui d'Hathor à Dendérah et celui de Séthi Ier à Abydos, la ville sainte d'Osiris.",
            "North of Luxor, two of the best-preserved temples in Egypt: Hathor's at Dendera and Seti I's at Abydos, the holy city of Osiris.",
            "Al norte de Luxor, dos de los templos mejor conservados de Egipto: el de Hathor en Dendera y el de Seti I en Abidos, la ciudad santa de Osiris.",
          ],
          ["od4", "od1", "od3", "od7"],
          [
            day(6,
              ["Dendérah et Abydos", "Dendera and Abydos", "Dendera y Abidos"],
              [
                "Navigation vers Dendérah et visite du temple d'Hathor, déesse de la joie et de l'amour : chapelles décorées, colonnes à chapiteaux hathoriques et, depuis le toit, la vue sur la campagne de Haute-Égypte. Poursuite par le site d'Abydos, ville sainte d'Osiris.",
                "Sail to Dendera and visit the temple of Hathor, goddess of joy and love: decorated chapels, columns with Hathor-headed capitals and, from the roof, the view over the countryside of Upper Egypt. Continue to the site of Abydos, the holy city of Osiris.",
                "Navegación hacia Dendera y visita al templo de Hathor, diosa de la alegría y del amor: capillas decoradas, columnas de capiteles hatóricos y, desde la azotea, la vista de la campiña del Alto Egipto. Continuación hacia Abidos, ciudad santa de Osiris.",
              ], "od4"),
            day(7,
              ["Les temples de Karnak", "The temples of Karnak", "Los templos de Karnak"],
              [
                "Visite des temples de Karnak, classés à l'Unesco, et de leur salle hypostyle aux colonnes couvertes de hiéroglyphes. Retour à bord pour le déjeuner et navigation vers Edfou.",
                "Visit the temples of Karnak, a UNESCO site, and their hypostyle hall of columns covered in hieroglyphs. Back on board for lunch and sail towards Edfu.",
                "Visita a los templos de Karnak, inscritos en la Unesco, y su sala hipóstila de columnas cubiertas de jeroglíficos. Regreso a bordo para el almuerzo y navegación hacia Edfú.",
              ], "fn10"),
          ]
        ),
        chapter(
          ["Edfou, Assouan et retour au Caire", "Edfu, Aswan and back to Cairo", "Edfú, Asuán y regreso a El Cairo"],
          [
            "Le bateau remonte vers Assouan, avec Abou Simbel en option, avant un dernier passage au Caire pour le quartier copte.",
            "The boat sails back up to Aswan, with Abu Simbel as an option, before a last stop in Cairo for the Coptic quarter.",
            "El barco remonta hacia Asuán, con Abu Simbel como opción, antes de una última parada en El Cairo para el barrio copto.",
          ],
          ["od9", "fn9", "fn1", "tc5"],
          [
            day(8,
              ["Le temple d'Edfou – Assouan", "The temple of Edfu – Aswan", "El templo de Edfú – Asuán"],
              [
                "Visite du temple d'Horus à Edfou, bel exemple d'art ptolémaïque et l'un des sites les mieux conservés de l'Égypte ancienne. Navigation vers Assouan.",
                "Visit the temple of Horus at Edfu, a fine example of Ptolemaic art and one of the best-preserved sites of ancient Egypt. Sail to Aswan.",
                "Visita al templo de Horus en Edfú, buen ejemplo de arte ptolemaico y uno de los sitios mejor conservados del antiguo Egipto. Navegación hacia Asuán.",
              ], "fn9"),
            day(9,
              ["Abou Simbel en option – le Haut Barrage", "Optional Abu Simbel – the High Dam", "Abu Simbel opcional – la Alta Presa"],
              [
                "En option, départ matinal à travers le désert de Nubie pour les temples d'Abou Simbel, démontés et reconstruits 110 mètres plus haut en 1965. Retour à Assouan pour le déjeuner à bord, puis découverte du Haut Barrage dans l'après-midi.",
                "Optional: an early start across the Nubian desert for the temples of Abu Simbel, dismantled and rebuilt 110 metres higher in 1965. Return to Aswan for lunch on board, then discover the High Dam in the afternoon.",
                "Opcional: salida temprana a través del desierto de Nubia hacia los templos de Abu Simbel, desmontados y reconstruidos 110 metros más arriba en 1965. Regreso a Asuán para el almuerzo a bordo y, por la tarde, descubrimiento de la Alta Presa.",
              ], "fn1"),
            day(10,
              ["Vol pour Le Caire – le Caire copte", "Flight to Cairo – Coptic Cairo", "Vuelo a El Cairo – El Cairo copto"],
              [
                "Débarquement après le petit-déjeuner et vol pour Le Caire. Visite du Caire copte, au cœur du Vieux Caire, où six églises datent des débuts de l'ère chrétienne, dont l'église suspendue, appuyée sur les murs du fort de Babylone. Nuit dans un hôtel 5* près de l'aéroport.",
                "Disembark after breakfast and fly to Cairo. Visit Coptic Cairo, in the heart of Old Cairo, where six churches date from the early Christian era, among them the Hanging Church, resting on the walls of the fortress of Babylon. Night in a 5* hotel near the airport.",
                "Desembarque tras el desayuno y vuelo a El Cairo. Visita a El Cairo copto, en el corazón de El Cairo Viejo, donde seis iglesias datan de los inicios de la era cristiana, entre ellas la Iglesia Colgante, apoyada en los muros de la fortaleza de Babilonia. Noche en un hotel de 5* cerca del aeropuerto.",
              ], "tc9"),
            day(11, T_HOME,
              [
                "Petit-déjeuner. En option, le matin uniquement : visite du Musée national de la civilisation égyptienne (NMEC) et de ses 22 momies royales. Transfert à l'aéroport et envol pour la France.",
                "Breakfast. Optional, mornings only: a visit to the National Museum of Egyptian Civilization (NMEC) and its 22 royal mummies. Transfer to the airport and flight to France.",
                "Desayuno. Opcional, solo por la mañana: visita al Museo Nacional de la Civilización Egipcia (NMEC) y sus 22 momias reales. Traslado al aeropuerto y vuelo a Francia.",
              ], "od5"),
          ]
        ),
      ],
    }),

    // ───────────── 8. Secrets du Nil — 16J/15N ─────────────
    trip({
      slug: "egypte-secrets-nil-caire-assouan-16j",
      name: [
        "Égypte : tout le Nil en bateau, du Caire à Assouan par la Moyenne-Égypte",
        "Egypt: The Whole Nile by Boat, from Cairo to Aswan through Middle Egypt",
        "Egipto: todo el Nilo en barco, de El Cairo a Asuán por el Egipto Medio",
      ],
      tagline: [
        "Quatorze nuits en suite, 34 passagers, sur les traces d'Akhenaton à Tell el-Amarna",
        "Fourteen nights in a suite, 34 passengers, in the footsteps of Akhenaten at Tell el-Amarna",
        "Catorce noches en suite, 34 pasajeros, tras las huellas de Akenatón en Tell el-Amarna",
      ],
      description: [
        "La grande croisière, celle que très peu de voyageurs font : quatorze nuits à bord, du Caire à Assouan, en traversant la Moyenne-Égypte que les circuits classiques survolent. On y visite les tombes peintes de Beni Hassan, Tell el-Amarna, la capitale d'Akhenaton, puis Abydos et Dendérah, avant de retrouver Louxor, la Vallée des Rois et Abou Simbel, compris dans le voyage. Le bateau, 5* supérieur (normes locales), ne compte que des suites et 34 passagers au maximum. Le même itinéraire existe en sens inverse, d'Assouan au Caire (à partir de 8 197 € par personne).",
        "The great cruise, the one very few travellers make: fourteen nights on board, from Cairo to Aswan, crossing the Middle Egypt that classic tours fly over. You visit the painted tombs of Beni Hassan, Tell el-Amarna, Akhenaten's capital, then Abydos and Dendera, before reaching Luxor, the Valley of the Kings and Abu Simbel, which is included. The boat, superior 5* (local rating), has suites only and 34 passengers at most. The same route runs in the opposite direction, from Aswan to Cairo (from €8,197 per person).",
        "El gran crucero, el que muy pocos viajeros hacen: catorce noches a bordo, de El Cairo a Asuán, atravesando el Egipto Medio que los circuitos clásicos sobrevuelan. Se visitan las tumbas pintadas de Beni Hassan, Tell el-Amarna, la capital de Akenatón, y Abidos y Dendera, antes de llegar a Luxor, el Valle de los Reyes y Abu Simbel, incluido en el viaje. El barco, de 5* superior (categoría local), solo tiene suites y 34 pasajeros como máximo. El mismo itinerario existe en sentido inverso, de Asuán a El Cairo (desde 8.197 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Vol Assouan–Le Caire,14 nuits en suite sur un bateau 5* supérieur,1 nuit au Caire en hôtel 5*,Pension complète selon programme,Abou Simbel inclus,Guide égyptologue francophone,Entrées des sites",
        "Flights from France,Aswan–Cairo flight,14 nights in a suite on a superior 5* boat,1 night in Cairo in a 5* hotel,Full board as per programme,Abu Simbel included,French-speaking Egyptologist guide,Site entrance fees",
        "Vuelos desde Francia,Vuelo Asuán–El Cairo,14 noches en suite en un barco de 5* superior,1 noche en El Cairo en hotel de 5*,Pensión completa según programa,Abu Simbel incluido,Guía egiptólogo francófono,Entradas a los sitios",
      ],
      price: 8226, nights: 15, departureFrom: "Paris", image: "od1",
      theme: "culture", feeling: "challenged", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -97985,
      chapters: [
        chapter(
          ["Le Caire, à bord", "Cairo, on board", "El Cairo, a bordo"],
          [
            "Le bateau est amarré au Caire et sert d'hôtel pendant trois nuits : Gizeh, Saqqarah, le Grand Musée égyptien et la citadelle.",
            "The boat is moored in Cairo and serves as your hotel for three nights: Giza, Saqqara, the Grand Egyptian Museum and the citadel.",
            "El barco está amarrado en El Cairo y sirve de hotel durante tres noches: Guiza, Saqqara, el Gran Museo Egipcio y la ciudadela.",
          ],
          ["od10", "gv6", "od2", "gv10"],
          [
            day(1,
              ["Arrivée au Caire et embarquement", "Arrival in Cairo and boarding", "Llegada a El Cairo y embarque"],
              [
                "Envol à destination du Caire. Accueil, remise des visas et aide aux formalités, puis transfert et installation à bord. Selon l'heure d'arrivée, dîner à bord.",
                "Flight to Cairo. Welcome, visas handed over and help with formalities, then transfer and settling in on board. Depending on arrival time, dinner on board.",
                "Vuelo con destino a El Cairo. Recibimiento, entrega de visados y ayuda con los trámites; traslado e instalación a bordo. Según la hora de llegada, cena a bordo.",
              ], "od10"),
            day(2,
              ["Gizeh et Saqqarah", "Giza and Saqqara", "Guiza y Saqqara"],
              [
                "Découverte du plateau de Gizeh, de ses pyramides et du Sphinx. Après le déjeuner, visite de Saqqarah, le plus vaste site archéologique d'Égypte : la pyramide à degrés de Djoser et la pyramide de Téti.",
                "Discover the Giza plateau, its pyramids and the Sphinx. After lunch, visit Saqqara, the largest archaeological site in Egypt: the Step Pyramid of Djoser and the pyramid of Teti.",
                "Descubrimiento de la meseta de Guiza, sus pirámides y la Esfinge. Tras el almuerzo, visita a Saqqara, el mayor sitio arqueológico de Egipto: la pirámide escalonada de Zoser y la pirámide de Teti.",
              ], "od2"),
            day(3,
              ["Le Grand Musée égyptien et la citadelle", "The Grand Egyptian Museum and the citadel", "El Gran Museo Egipcio y la ciudadela"],
              [
                "Visite du Grand Musée égyptien, sur le plateau de Gizeh : plus de 100 000 œuvres présentées de la Préhistoire à l'époque gréco-romaine, dont, pour la première fois depuis 1922, la totalité du trésor de Toutânkhamon, et la barque solaire. Continuation par la citadelle du Caire.",
                "Visit the Grand Egyptian Museum, on the Giza plateau: more than 100,000 works shown from prehistory to the Graeco-Roman period, including, for the first time since 1922, the whole of Tutankhamun's treasure, and the solar boat. Continue to the Cairo citadel.",
                "Visita al Gran Museo Egipcio, en la meseta de Guiza: más de 100.000 obras expuestas de la Prehistoria a la época grecorromana, entre ellas, por primera vez desde 1922, la totalidad del tesoro de Tutankamón, y la barca solar. Continuación por la ciudadela de El Cairo.",
              ], "od5"),
          ]
        ),
        chapter(
          ["La Moyenne-Égypte : Beni Hassan et Tell el-Amarna", "Middle Egypt: Beni Hassan and Tell el-Amarna", "El Egipto Medio: Beni Hassan y Tell el-Amarna"],
          [
            "Le bateau quitte Le Caire vers le sud. Deux jours de navigation mènent à une Égypte que l'on visite peu : des tombes de gouverneurs à flanc de falaise et les ruines de la capitale du pharaon Akhenaton.",
            "The boat leaves Cairo heading south. Two days' sailing lead to an Egypt that is seldom visited: governors' tombs in the cliff face and the ruins of the capital of the pharaoh Akhenaten.",
            "El barco deja El Cairo rumbo al sur. Dos días de navegación llevan a un Egipto poco visitado: tumbas de gobernadores en la pared del acantilado y las ruinas de la capital del faraón Akenatón.",
          ],
          ["od9", "od8", "od7", "od12"],
          [
            day(4,
              ["Navigation vers Beni Suef", "Sailing to Beni Suef", "Navegación hacia Beni Suef"],
              [
                "Journée de navigation et de détente vers le sud, à observer depuis le pont les scènes de la vie des rives. En fin de journée, cocktail du capitaine.",
                "A day of sailing and rest heading south, watching scenes of riverside life from the deck. At the end of the day, the captain's cocktail.",
                "Jornada de navegación y descanso hacia el sur, observando desde la cubierta las escenas de la vida de las orillas. Al final del día, cóctel del capitán.",
              ], "od9"),
            day(5,
              ["De Beni Suef à Al Minya", "From Beni Suef to Al Minya", "De Beni Suef a Al Minya"],
              [
                "Le bateau poursuit sa route en amont, le long de paysages qui changent et de scènes de vie fluviale. Tous les repas sont servis à bord.",
                "The boat continues upstream, past changing landscapes and scenes of river life. All meals are served on board.",
                "El barco sigue río arriba, entre paisajes cambiantes y escenas de vida fluvial. Todas las comidas se sirven a bordo.",
              ], "od8"),
            day(6,
              ["Les tombes de Beni Hassan", "The tombs of Beni Hassan", "Las tumbas de Beni Hassan"],
              [
                "Découverte des tombes de Beni Hassan, perchées à flanc de falaise sur la rive droite. Il y a plus de 4 000 ans, les gouverneurs de la région s'y firent creuser des tombeaux couverts de fresques : chasse, travaux des champs, jeux et processions. Douze tombes sont décorées. Navigation vers Tell el-Amarna.",
                "Discover the tombs of Beni Hassan, set in the cliff face on the east bank. More than 4,000 years ago, the governors of the region had tombs cut here and covered with frescoes: hunting, work in the fields, games and processions. Twelve tombs are decorated. Sail towards Tell el-Amarna.",
                "Descubrimiento de las tumbas de Beni Hassan, encaramadas en la pared del acantilado, en la orilla derecha. Hace más de 4.000 años, los gobernadores de la región se hicieron excavar aquí tumbas cubiertas de frescos: caza, labores del campo, juegos y procesiones. Doce tumbas están decoradas. Navegación hacia Tell el-Amarna.",
              ], "od7"),
            day(7,
              ["Tell el-Amarna et Touna el-Gebel", "Tell el-Amarna and Tuna el-Gebel", "Tell el-Amarna y Tuna el-Gebel"],
              [
                "Départ matinal pour Tell el-Amarna, les ruines d'Akhetaton, la capitale fondée vers 1360 av. J.-C. par Akhenaton et dédiée au dieu unique Aton, dans un hémicycle de falaises long de douze kilomètres. Continuation par Touna el-Gebel, puis navigation vers Assiout.",
                "An early start for Tell el-Amarna, the ruins of Akhetaten, the capital founded around 1360 BC by Akhenaten and dedicated to the single god Aten, in a twelve-kilometre amphitheatre of cliffs. Continue to Tuna el-Gebel, then sail towards Asyut.",
                "Salida temprana hacia Tell el-Amarna, las ruinas de Ajetatón, la capital fundada hacia 1360 a. C. por Akenatón y dedicada al dios único Atón, en un hemiciclo de acantilados de doce kilómetros. Continuación por Tuna el-Gebel y navegación hacia Asiut.",
              ], "od3"),
            day(8,
              ["Navigation d'Assiout à Sohag", "Sailing from Asyut to Sohag", "Navegación de Asiut a Sohag"],
              [
                "Journée complète de navigation au cœur de la Moyenne-Égypte, loin des circuits classiques : paysans aux champs, troupeaux à l'abreuvoir, enfants qui se baignent.",
                "A full day's sailing through the heart of Middle Egypt, far from the classic routes: farmers in the fields, herds at the water, children swimming.",
                "Jornada completa de navegación por el corazón del Egipto Medio, lejos de los circuitos clásicos: campesinos en los campos, rebaños abrevando, niños bañándose.",
              ], "od9"),
          ]
        ),
        chapter(
          ["Dendérah, Abydos et Louxor", "Dendera, Abydos and Luxor", "Dendera, Abidos y Luxor"],
          [
            "Le fleuve rejoint la Haute-Égypte : le temple d'Hathor à Dendérah, celui de Séthi Ier à Abydos, puis Karnak et la Vallée des Rois.",
            "The river reaches Upper Egypt: the temple of Hathor at Dendera, that of Seti I at Abydos, then Karnak and the Valley of the Kings.",
            "El río llega al Alto Egipto: el templo de Hathor en Dendera, el de Seti I en Abidos, y después Karnak y el Valle de los Reyes.",
          ],
          ["od1", "od4", "fn10", "fn11"],
          [
            day(9,
              ["Dendérah et Abydos", "Dendera and Abydos", "Dendera y Abidos"],
              [
                "Visite du temple de Dendérah, consacré à Hathor et particulièrement bien conservé, avec ses chapelles, ses escaliers obscurs et son toit ouvert sur la campagne. Poursuite avec le temple d'Abydos, qui date de Séthi Ier.",
                "Visit the temple of Dendera, dedicated to Hathor and especially well preserved, with its chapels, dark staircases and a roof open to the countryside. Continue with the temple of Abydos, which dates from Seti I.",
                "Visita al templo de Dendera, consagrado a Hathor y especialmente bien conservado, con sus capillas, sus escaleras oscuras y su azotea abierta a la campiña. Continuación con el templo de Abidos, que data de Seti I.",
              ], "od1"),
            day(10,
              ["Arrivée à Louxor – Karnak et le temple de Louxor", "Arrival in Luxor – Karnak and Luxor temple", "Llegada a Luxor – Karnak y el templo de Luxor"],
              [
                "Matinée de navigation vers Louxor. Dans l'après-midi, visite du temple de Karnak et de sa salle hypostyle, puis du temple de Louxor.",
                "A morning's sailing towards Luxor. In the afternoon, visit Karnak temple and its hypostyle hall, then Luxor temple.",
                "Mañana de navegación hacia Luxor. Por la tarde, visita al templo de Karnak y su sala hipóstila, y al templo de Luxor.",
              ], "fn10"),
            day(11,
              ["La Vallée des Rois – Edfou", "The Valley of the Kings – Edfu", "El Valle de los Reyes – Edfú"],
              [
                "Tôt le matin, départ pour la nécropole thébaine, sur la rive ouest, en commençant par la Vallée des Rois et ses tombeaux du Nouvel Empire. Navigation vers Edfou.",
                "Early in the morning, leave for the Theban necropolis on the west bank, starting with the Valley of the Kings and its New Kingdom tombs. Sail towards Edfu.",
                "Por la mañana temprano, salida hacia la necrópolis tebana, en la orilla oeste, empezando por el Valle de los Reyes y sus tumbas del Imperio Nuevo. Navegación hacia Edfú.",
              ], "fn11"),
          ]
        ),
        chapter(
          ["Edfou, Assouan et Abou Simbel", "Edfu, Aswan and Abu Simbel", "Edfú, Asuán y Abu Simbel"],
          [
            "Les dernières escales, jusqu'aux temples d'Abou Simbel, au cœur de la Nubie, compris dans le voyage.",
            "The last stops, as far as the temples of Abu Simbel, in the heart of Nubia, included in the trip.",
            "Las últimas escalas, hasta los templos de Abu Simbel, en el corazón de Nubia, incluidos en el viaje.",
          ],
          ["tc10", "fn9", "fn8", "tc5"],
          [
            day(12,
              ["Le temple d'Edfou – Kom Ombo", "The temple of Edfu – Kom Ombo", "El templo de Edfú – Kom Ombo"],
              [
                "Visite matinale du temple d'Horus à Edfou, longtemps enfoui sous le sable, ce qui a préservé son architecture. Déjeuner pendant la navigation vers Kom Ombo et soirée animée à bord.",
                "A morning visit to the temple of Horus at Edfu, long buried under sand, which preserved its architecture. Lunch while sailing to Kom Ombo and an evening of entertainment on board.",
                "Visita matinal al templo de Horus en Edfú, largo tiempo enterrado bajo la arena, lo que preservó su arquitectura. Almuerzo durante la navegación hacia Kom Ombo y velada animada a bordo.",
              ], "fn9"),
            day(13,
              ["Kom Ombo – Assouan et le Haut Barrage", "Kom Ombo – Aswan and the High Dam", "Kom Ombo – Asuán y la Alta Presa"],
              [
                "Visite du temple de Kom Ombo, dédié à Sobek et à Horus. Navigation vers Assouan, puis après-midi au Haut Barrage, avec son panorama sur le lac Nasser.",
                "Visit the temple of Kom Ombo, dedicated to Sobek and Horus. Sail to Aswan, then an afternoon at the High Dam, with its view over Lake Nasser.",
                "Visita al templo de Kom Ombo, dedicado a Sobek y a Horus. Navegación hacia Asuán y tarde en la Alta Presa, con su panorámica del lago Nasser.",
              ], "fn8"),
            day(14,
              ["Abou Simbel", "Abu Simbel", "Abu Simbel"],
              [
                "Réveil aux aurores et cap au sud pour les temples d'Abou Simbel, taillés dans la roche à la gloire de Ramsès II et de Néfertari. Menacés par les eaux du lac Nasser, ils ont été démontés puis reconstruits à l'identique, 110 mètres plus haut. Retour à Assouan.",
                "Up at dawn and south to the temples of Abu Simbel, cut into the rock to the glory of Ramesses II and Nefertari. Threatened by the waters of Lake Nasser, they were dismantled and rebuilt identically, 110 metres higher. Return to Aswan.",
                "Madrugón y rumbo al sur hacia los templos de Abu Simbel, tallados en la roca a la gloria de Ramsés II y Nefertari. Amenazados por las aguas del lago Nasser, fueron desmontados y reconstruidos idénticos, 110 metros más arriba. Regreso a Asuán.",
              ], "tc10"),
            day(15,
              ["Assouan – Le Caire", "Aswan – Cairo", "Asuán – El Cairo"],
              [
                "Débarquement après le petit-déjeuner et vol pour Le Caire. Installation dans un hôtel 5* près de l'aéroport et déjeuner à l'hôtel. Dîner libre.",
                "Disembark after breakfast and fly to Cairo. Check in at a 5* hotel near the airport, with lunch at the hotel. Dinner on your own.",
                "Desembarque tras el desayuno y vuelo a El Cairo. Instalación en un hotel de 5* cerca del aeropuerto y almuerzo en el hotel. Cena libre.",
              ], "tc5"),
            day(16, T_HOME, HOME, "od10"),
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
