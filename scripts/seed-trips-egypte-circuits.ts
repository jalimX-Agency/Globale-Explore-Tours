// Egypt circuits, batch 1 — 8 journey-format trips for the existing "egypte" destination: three
// Nile cruises, Cairo, three Cairo + Nile combinations and the dahabeya sailing cruise. One trip
// per circuit; year, hotel, Cairo-night and Red Sea variants are described inside the trip.
// Prices are per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF.
// Run with:
//   npx tsx scripts/seed-trips-egypte-circuits.ts
// Requires scripts/upload-images-egypte-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "egypte-croisiere-fil-du-nil-8j": ["373239", "81819", "388638", "356839", "389978", "228519", "228698", "397098", "399018"],
  "egypte-croisiere-nil-pharaonique-8j": ["374279", "82378", "357678", "229119", "267660"],
  "egypte-incontournables-nil-8j": ["373598", "258340", "384858"],
  "egypte-le-caire-pyramides-4j": ["409438", "409459", "409458", "410118", "410119", "410120"],
  "egypte-decouvertes-caire-nil-9j": ["379838", "229589"],
  "egypte-paysages-nil-caire-9j": ["379098", "228958"],
  "egypte-splendeurs-caire-nil-12j": ["380343", "228959", "406378", "406398"],
  "egypte-dahabeya-nil-8j": ["398938", "418335", "418420", "418498"],
};

// ── Shared texts ──
const T_HOME: L3 = ["Retour en France", "Flight home", "Regreso a Francia"];
const T_EMBARK: L3 = ["Envol pour Louxor et embarquement", "Flight to Luxor and boarding", "Vuelo a Luxor y embarque"];
const EMBARK: L3 = [
  "Envol à destination de Louxor. Accueil, assistance aux formalités et transfert au bateau de croisière 5* (normes locales), où vous vous installez pour la semaine.",
  "Flight to Luxor. Welcome, help with formalities and transfer to the 5* (local rating) cruise boat, where you settle in for the week.",
  "Vuelo con destino a Luxor. Recibimiento, asistencia en los trámites y traslado al barco de crucero de 5* (categoría local), donde se instala para la semana.",
];
const LUXOR_HOME: L3 = [
  "Petit-déjeuner à bord, transfert à l'aéroport international de Louxor et vol retour vers la France.",
  "Breakfast on board, transfer to Luxor international airport and flight back to France.",
  "Desayuno a bordo, traslado al aeropuerto internacional de Luxor y vuelo de regreso a Francia.",
];
const LUXOR_FREE: L3 = [
  "Retour à Louxor. Journée consacrée à la découverte libre de la ville ou aux excursions facultatives, à régler sur place.",
  "Back in Luxor. A day for exploring the town on your own or for optional excursions, payable locally.",
  "De vuelta en Luxor. Jornada dedicada a descubrir la ciudad por libre o a las excursiones opcionales, a pagar in situ.",
];
const T_LUXOR_FREE: L3 = ["Journée libre à Louxor", "Free day in Luxor", "Jornada libre en Luxor"];
const T_CAIRO_ARR: L3 = ["Arrivée au Caire", "Arrival in Cairo", "Llegada a El Cairo"];
const CAIRO_ARR: L3 = [
  "Envol à destination du Caire. Accueil à l'arrivée, assistance aux formalités et transfert à l'hôtel.",
  "Flight to Cairo. Welcome on arrival, help with formalities and transfer to the hotel.",
  "Vuelo con destino a El Cairo. Recibimiento a la llegada, asistencia en los trámites y traslado al hotel.",
];
const T_GEM: L3 = ["Le Grand Musée égyptien", "The Grand Egyptian Museum", "El Gran Museo Egipcio"];
const GEM: L3 = [
  "Visite du nouveau Grand Musée égyptien, à deux pas des pyramides de Gizeh, et de sa collection d'objets de l'Égypte ancienne.",
  "A visit to the new Grand Egyptian Museum, a short walk from the pyramids of Giza, and its collection of objects from ancient Egypt.",
  "Visita al nuevo Gran Museo Egipcio, a dos pasos de las pirámides de Guiza, y a su colección de objetos del antiguo Egipto.",
];
const T_SAQ: L3 = ["Saqqarah et Dahchour", "Saqqara and Dahshur", "Saqqara y Dahshur"];
const SAQ: L3 = [
  "Matinée sur les sites de Dahchour, avec la pyramide rouge et la pyramide rhomboïdale, puis de Saqqarah.",
  "A morning at the sites of Dahshur, with the Red Pyramid and the Bent Pyramid, then Saqqara.",
  "Mañana en los sitios de Dahshur, con la pirámide Roja y la pirámide Acodada, y después Saqqara.",
];
const T_EDFU: L3 = ["Edfou et Kom Ombo", "Edfu and Kom Ombo", "Edfú y Kom Ombo"];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "egypte",
    imagePrefix: "egypte",
    season: { label: ["Oct à avr", "Oct to April", "Oct a abr"], months: "october,november,december,january,february,march,april" },
  });

  const CRUISE_INCLUDES = (visits: L3): L3 => [
    `Vols depuis la France,Transferts aéroport,7 nuits en bateau 5* en cabine double,Pension complète à bord,${visits[0]},Assistance locale`,
    `Flights from France,Airport transfers,7 nights on a 5* boat in a double cabin,Full board on board,${visits[1]},Local assistance`,
    `Vuelos desde Francia,Traslados al aeropuerto,7 noches en barco de 5* en camarote doble,Pensión completa a bordo,${visits[2]},Asistencia local`,
  ];

  const journeyTrips = [
    // ───────────── 1. Au fil du Nil — 8J/7N ─────────────
    trip({
      slug: "egypte-croisiere-fil-du-nil-8j",
      name: [
        "Égypte : croisière au fil du Nil, de Louxor à Assouan",
        "Egypt: A Nile Cruise from Luxor to Aswan",
        "Egipto: crucero por el Nilo, de Luxor a Asuán",
      ],
      tagline: [
        "Une semaine en bateau 5*, huit visites incluses dont la Vallée des Rois",
        "A week on a 5* boat, eight visits included, with the Valley of the Kings",
        "Una semana en barco de 5*, ocho visitas incluidas, entre ellas el Valle de los Reyes",
      ],
      description: [
        "La croisière classique sur le Nil, avec les visites déjà comprises : le temple de Karnak, la Vallée des Rois, Edfou, Kom Ombo et Assouan, en pension complète à bord d'un bateau 5* (normes locales). Abou Simbel se réserve en option sur place. Le voyage peut se prolonger par une ou deux nuits au Caire (à partir de 1 261 € par personne) ou par un séjour balnéaire de cinq ou sept nuits à Hurghada (à partir de 1 143 €).",
        "The classic Nile cruise, with the visits already included: Karnak temple, the Valley of the Kings, Edfu, Kom Ombo and Aswan, on full board aboard a 5* (local rating) boat. Abu Simbel can be booked locally as an option. The trip can be extended with one or two nights in Cairo (from €1,261 per person) or a beach stay of five or seven nights in Hurghada (from €1,143).",
        "El crucero clásico por el Nilo, con las visitas ya incluidas: el templo de Karnak, el Valle de los Reyes, Edfú, Kom Ombo y Asuán, en pensión completa a bordo de un barco de 5* (categoría local). Abu Simbel se reserva como opción in situ. El viaje puede prolongarse con una o dos noches en El Cairo (desde 1.261 € por persona) o con una estancia de playa de cinco o siete noches en Hurghada (desde 1.143 €).",
      ],
      includes: CRUISE_INCLUDES(["8 visites dont la Vallée des Rois", "8 visits including the Valley of the Kings", "8 visitas incluido el Valle de los Reyes"]),
      price: 567, nights: 7, departureFrom: "Lyon", image: "fn4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 12, order: -98000,
      chapters: [
        chapter(
          ["Louxor et Thèbes", "Luxor and Thebes", "Luxor y Tebas"],
          [
            "Louxor est le point de départ de la croisière. Sur la rive droite, le temple de Karnak, élevé à la gloire du dieu Amon ; sur la rive gauche, Thèbes et les tombeaux des pharaons creusés dans la montagne.",
            "Luxor is where the cruise begins. On the east bank, the temple of Karnak, built to the glory of the god Amun; on the west bank, Thebes and the pharaohs' tombs cut into the mountain.",
            "Luxor es el punto de partida del crucero. En la orilla derecha, el templo de Karnak, levantado a la gloria del dios Amón; en la izquierda, Tebas y las tumbas de los faraones excavadas en la montaña.",
          ],
          ["fn10", "fn11", "fn5", "np6"],
          [
            day(1, T_EMBARK, EMBARK, "fn4"),
            day(2,
              ["Le temple de Karnak", "The temple of Karnak", "El templo de Karnak"],
              [
                "Visite du temple de Karnak, dédié au dieu Amon et relié au temple de Louxor par une allée de sphinx.",
                "A visit to the temple of Karnak, dedicated to the god Amun and linked to Luxor temple by an avenue of sphinxes.",
                "Visita al templo de Karnak, dedicado al dios Amón y unido al templo de Luxor por una avenida de esfinges.",
              ], "fn10"),
            day(3,
              ["Thèbes et la Vallée des Rois – Esna", "Thebes and the Valley of the Kings – Esna", "Tebas y el Valle de los Reyes – Esna"],
              [
                "Départ pour Thèbes, sur la rive gauche du Nil, et les tombeaux des pharaons de la XVIIIe à la XXe dynastie. Visite de la Vallée des Rois, puis navigation vers Esna.",
                "Leave for Thebes, on the west bank of the Nile, and the tombs of the pharaohs of the 18th to 20th dynasties. Visit the Valley of the Kings, then sail towards Esna.",
                "Salida hacia Tebas, en la orilla izquierda del Nilo, y las tumbas de los faraones de las dinastías XVIII a XX. Visita al Valle de los Reyes y navegación hacia Esna.",
              ], "fn11"),
          ]
        ),
        chapter(
          T_EDFU,
          [
            "Une journée de navigation entre deux temples : celui d'Edfou, dédié à Horus et resté longtemps enseveli sous les limons, et celui de Kom Ombo, posé au bord du fleuve.",
            "A day's sailing between two temples: Edfu, dedicated to Horus and long buried under river silt, and Kom Ombo, set on the riverbank.",
            "Una jornada de navegación entre dos templos: el de Edfú, dedicado a Horus y largo tiempo sepultado bajo el limo, y el de Kom Ombo, a orillas del río.",
          ],
          ["fn9", "fn8", "np11"],
          [
            day(4,
              ["Esna – Edfou – Kom Ombo", "Esna – Edfu – Kom Ombo", "Esna – Edfú – Kom Ombo"],
              [
                "Journée de navigation. Visite du temple d'Edfou, édifié en l'honneur d'Horus : enseveli puis dégagé et restauré, il est aujourd'hui dans un état de conservation exceptionnel.",
                "A day's sailing. Visit the temple of Edfu, built in honour of Horus: buried, then cleared and restored, it is exceptionally well preserved today.",
                "Jornada de navegación. Visita al templo de Edfú, levantado en honor de Horus: sepultado, despejado y restaurado, hoy se conserva en un estado excepcional.",
              ], "fn9"),
          ]
        ),
        chapter(
          ["Assouan", "Aswan", "Asuán"],
          [
            "Dernière grande ville du sud de la Haute-Égypte, Assouan se trouve aux portes du désert. Son histoire commence sur l'île Éléphantine, ancienne capitale de la Nubie.",
            "The last large town in the south of Upper Egypt, Aswan lies on the edge of the desert. Its history begins on Elephantine Island, once the capital of Nubia.",
            "Última gran ciudad del sur del Alto Egipto, Asuán se encuentra a las puertas del desierto. Su historia comienza en la isla Elefantina, antigua capital de Nubia.",
          ],
          ["fn2", "fn3", "np9", "fn1"],
          [
            day(5,
              ["Assouan et Philae", "Aswan and Philae", "Asuán y Filé"],
              [
                "Découverte d'Assouan, entre le Nil, l'île Éléphantine et les dunes, et de la région de Philae.",
                "Discover Aswan, between the Nile, Elephantine Island and the dunes, and the Philae area.",
                "Descubrimiento de Asuán, entre el Nilo, la isla Elefantina y las dunas, y de la zona de Filé.",
              ], "np9"),
            day(6,
              ["Assouan – Abou Simbel en option", "Aswan – optional Abu Simbel", "Asuán – Abu Simbel opcional"],
              [
                "Journée à Assouan. En option, à régler sur place (120 € par personne en autocar) : départ très matinal pour les temples d'Abou Simbel, aux confins du sud.",
                "A day in Aswan. As an option, payable locally (€120 per person by coach): a very early start for the temples of Abu Simbel, in the far south.",
                "Jornada en Asuán. Como opción, a pagar in situ (120 € por persona en autocar): salida muy temprana hacia los templos de Abu Simbel, en el extremo sur.",
              ], "fn1"),
          ]
        ),
        chapter(
          ["Retour à Louxor", "Back to Luxor", "Regreso a Luxor"],
          [
            "Le bateau redescend le fleuve vers Louxor, pour une dernière journée à votre rythme avant le vol retour.",
            "The boat sails back down the river to Luxor, for a last day at your own pace before the flight home.",
            "El barco desciende de nuevo el río hacia Luxor, para una última jornada a su ritmo antes del vuelo de regreso.",
          ],
          ["np2", "np4", "fn6"],
          [day(7, T_LUXOR_FREE, LUXOR_FREE, "np4"), day(8, T_HOME, LUXOR_HOME, "fn6")]
        ),
      ],
    }),

    // ───────────── 2. Nil Pharaonique — 8J/7N ─────────────
    trip({
      slug: "egypte-croisiere-nil-pharaonique-8j",
      name: [
        "Égypte : croisière Nil pharaonique à composer à votre rythme",
        "Egypt: The Pharaonic Nile Cruise, at Your Own Pace",
        "Egipto: crucero Nilo faraónico, a su ritmo",
      ],
      tagline: [
        "Le bateau 5* et la pension complète sont compris, les visites se choisissent à la carte",
        "The 5* boat and full board are included, and you choose the visits you want",
        "El barco de 5* y la pensión completa están incluidos, y las visitas se eligen a la carta",
      ],
      description: [
        "La même remontée du Nil de Louxor à Assouan, dans une formule plus libre : la croisière et la pension complète sont comprises, et chaque visite (Karnak, la rive ouest de Thèbes, Edfou, Kom Ombo, Abou Simbel) se réserve en option, à l'unité ou en forfait d'excursions. Une formule pour ceux qui connaissent déjà l'Égypte ou qui préfèrent profiter du pont. Extensions possibles : une ou deux nuits au Caire (à partir de 1 796 €) ou un séjour à Hurghada.",
        "The same journey up the Nile from Luxor to Aswan, in a freer format: the cruise and full board are included, and each visit (Karnak, the west bank at Thebes, Edfu, Kom Ombo, Abu Simbel) is booked as an option, singly or as an excursion pack. A formula for those who already know Egypt or prefer to enjoy the deck. Possible extensions: one or two nights in Cairo (from €1,796) or a stay in Hurghada.",
        "El mismo recorrido por el Nilo de Luxor a Asuán, en una fórmula más libre: el crucero y la pensión completa están incluidos, y cada visita (Karnak, la orilla oeste de Tebas, Edfú, Kom Ombo, Abu Simbel) se reserva como opción, suelta o en paquete de excursiones. Una fórmula para quienes ya conocen Egipto o prefieren disfrutar de la cubierta. Extensiones posibles: una o dos noches en El Cairo (desde 1.796 €) o una estancia en Hurghada.",
      ],
      includes: CRUISE_INCLUDES(["Visites en option à la carte", "Visits available as options", "Visitas opcionales a la carta"]),
      price: 713, nights: 7, departureFrom: "Paris", image: "np3",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -97999,
      chapters: [
        chapter(
          ["Louxor et Thèbes", "Luxor and Thebes", "Luxor y Tebas"],
          [
            "Louxor est un musée à ciel ouvert : on flâne dans les souks, on longe le Nil, on parcourt l'allée des béliers récemment restaurée. Les temples et la rive ouest se visitent en option.",
            "Luxor is an open-air museum: you wander the souks, walk along the Nile and follow the recently restored avenue of rams. The temples and the west bank are optional visits.",
            "Luxor es un museo al aire libre: se pasea por los zocos, se recorre la orilla del Nilo y la avenida de los carneros, recién restaurada. Los templos y la orilla oeste se visitan como opción.",
          ],
          ["np6", "np7", "np4", "np2"],
          [
            day(1, T_EMBARK, EMBARK, "np3"),
            day(2,
              ["Louxor à votre rythme", "Luxor at your own pace", "Luxor a su ritmo"],
              [
                "Journée libre à Louxor : souks, promenade le long du Nil ou allée des béliers. En option : visite des temples.",
                "A free day in Luxor: souks, a walk along the Nile or the avenue of rams. Optional: a visit to the temples.",
                "Jornada libre en Luxor: zocos, paseo junto al Nilo o avenida de los carneros. Opcional: visita a los templos.",
              ], "np6"),
            day(3,
              ["Thèbes en option – Esna", "Optional Thebes – Esna", "Tebas opcional – Esna"],
              [
                "En option : la rive ouest et ses dizaines de tombeaux, dont la Vallée des Rois, la Vallée des Reines et le temple de la reine Hatchepsout. Navigation vers Esna.",
                "Optional: the west bank and its dozens of tombs, including the Valley of the Kings, the Valley of the Queens and the temple of Queen Hatshepsut. Sail towards Esna.",
                "Opcional: la orilla oeste y sus decenas de tumbas, entre ellas el Valle de los Reyes, el Valle de las Reinas y el templo de la reina Hatshepsut. Navegación hacia Esna.",
              ], "np4"),
          ]
        ),
        chapter(
          T_EDFU,
          [
            "Entre deux temples à visiter en option, la journée se passe sur le pont supérieur, à regarder défiler les rives du Nil.",
            "Between two optional temple visits, the day is spent on the upper deck, watching the banks of the Nile go by.",
            "Entre dos templos que se visitan como opción, la jornada transcurre en la cubierta superior, viendo pasar las orillas del Nilo.",
          ],
          ["np11", "np8", "np3"],
          [
            day(4,
              ["Esna – Edfou – Kom Ombo", "Esna – Edfu – Kom Ombo", "Esna – Edfú – Kom Ombo"],
              [
                "Journée de navigation. En option : le temple d'Horus à Edfou le matin et le temple ptolémaïque de Kom Ombo en soirée.",
                "A day's sailing. Optional: the temple of Horus at Edfu in the morning and the Ptolemaic temple of Kom Ombo in the evening.",
                "Jornada de navegación. Opcional: el templo de Horus en Edfú por la mañana y el templo ptolemaico de Kom Ombo por la tarde.",
              ], "np8"),
          ]
        ),
        chapter(
          ["Assouan", "Aswan", "Asuán"],
          [
            "Assouan, aux portes du désert : l'île Éléphantine, les montagnes de sable et des souks hauts en couleur.",
            "Aswan, on the edge of the desert: Elephantine Island, the sand hills and colourful souks.",
            "Asuán, a las puertas del desierto: la isla Elefantina, las montañas de arena y unos zocos llenos de color.",
          ],
          ["np1", "np10", "np5", "np9"],
          [
            day(5,
              ["Assouan et Philae", "Aswan and Philae", "Asuán y Filé"],
              [
                "Arrivée à Assouan, dernière grande ville du sud de la Haute-Égypte. Temps libre sur le site et dans les souks.",
                "Arrival in Aswan, the last large town in the south of Upper Egypt. Free time around the site and in the souks.",
                "Llegada a Asuán, última gran ciudad del sur del Alto Egipto. Tiempo libre en el lugar y en los zocos.",
              ], "np1"),
            day(6,
              ["Assouan – Abou Simbel en option", "Aswan – optional Abu Simbel", "Asuán – Abu Simbel opcional"],
              [
                "Journée à Assouan. En option, à régler sur place (120 € par personne en autocar) : départ très matinal pour les temples d'Abou Simbel.",
                "A day in Aswan. As an option, payable locally (€120 per person by coach): a very early start for the temples of Abu Simbel.",
                "Jornada en Asuán. Como opción, a pagar in situ (120 € por persona en autocar): salida muy temprana hacia los templos de Abu Simbel.",
              ], "np10"),
          ]
        ),
        chapter(
          ["Retour à Louxor", "Back to Luxor", "Regreso a Luxor"],
          [
            "Retour vers Louxor pour une dernière journée libre avant le vol.",
            "Back to Luxor for a last free day before the flight.",
            "Regreso a Luxor para una última jornada libre antes del vuelo.",
          ],
          ["np2", "np7", "np6"],
          [day(7, T_LUXOR_FREE, LUXOR_FREE, "np7"), day(8, T_HOME, LUXOR_HOME, "np2")]
        ),
      ],
    }),

    // ───────────── 3. Les incontournables de l'Égypte — 8J/7N ─────────────
    trip({
      slug: "egypte-incontournables-nil-8j",
      name: [
        "Égypte : les incontournables du Nil avec guide égyptologue",
        "Egypt: The Nile Essentials with an Egyptologist Guide",
        "Egipto: lo imprescindible del Nilo con guía egiptólogo",
      ],
      tagline: [
        "Sept visites guidées en français, de Karnak à Assouan, à bord d'un bateau 5*",
        "Seven guided visits, from Karnak to Aswan, aboard a 5* boat",
        "Siete visitas guiadas, de Karnak a Asuán, a bordo de un barco de 5*",
      ],
      description: [
        "Une croisière d'une semaine entre Louxor et Assouan, accompagnée par des guides égyptologues francophones. Sept visites sont comprises : le temple de Karnak, la vallée des Nobles à Thèbes, Edfou, Kom Ombo et Assouan. D'autres excursions se réservent sur place, dont Abou Simbel, le temple de Kalabsha et le musée nubien. Une extension de cinq nuits à Hurghada, au bord de la mer Rouge, est proposée à partir de 1 073 € par personne.",
        "A week's cruise between Luxor and Aswan, accompanied by French-speaking Egyptologist guides. Seven visits are included: Karnak temple, the Valley of the Nobles at Thebes, Edfu, Kom Ombo and Aswan. Other excursions can be booked locally, including Abu Simbel, Kalabsha temple and the Nubian Museum. A five-night extension in Hurghada, on the Red Sea, is available from €1,073 per person.",
        "Un crucero de una semana entre Luxor y Asuán, acompañado por guías egiptólogos francófonos. Se incluyen siete visitas: el templo de Karnak, el valle de los Nobles en Tebas, Edfú, Kom Ombo y Asuán. Otras excursiones se reservan in situ, entre ellas Abu Simbel, el templo de Kalabsha y el Museo Nubio. Se ofrece una extensión de cinco noches en Hurghada, en el mar Rojo, desde 1.073 € por persona.",
      ],
      includes: CRUISE_INCLUDES(["7 visites avec guide égyptologue francophone", "7 visits with a French-speaking Egyptologist guide", "7 visitas con guía egiptólogo francófono"]),
      price: 615, nights: 7, departureFrom: "Paris", image: "fn5",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 12, order: -97998,
      chapters: [
        chapter(
          ["Louxor et Thèbes", "Luxor and Thebes", "Luxor y Tebas"],
          [
            "Deux jours pour les deux rives de Louxor : Karnak et ses colonnes sur la rive droite, puis Thèbes et la vallée des Nobles, nécropole des hauts dignitaires, sur la rive gauche.",
            "Two days for the two banks at Luxor: Karnak and its columns on the east bank, then Thebes and the Valley of the Nobles, the necropolis of high officials, on the west bank.",
            "Dos días para las dos orillas de Luxor: Karnak y sus columnas en la orilla derecha, y Tebas y el valle de los Nobles, necrópolis de los altos dignatarios, en la izquierda.",
          ],
          ["fn10", "sp5", "fn5", "fn6"],
          [
            day(1, T_EMBARK, EMBARK, "in1"),
            day(2,
              ["Le temple de Karnak", "The temple of Karnak", "El templo de Karnak"],
              [
                "Visite du temple de Karnak, élevé à la gloire du dieu Amon et relié au temple de Louxor par une allée de sphinx.",
                "A visit to the temple of Karnak, built to the glory of the god Amun and linked to Luxor temple by an avenue of sphinxes.",
                "Visita al templo de Karnak, levantado a la gloria del dios Amón y unido al templo de Luxor por una avenida de esfinges.",
              ], "fn6"),
            day(3,
              ["Thèbes et la vallée des Nobles – Esna", "Thebes and the Valley of the Nobles – Esna", "Tebas y el valle de los Nobles – Esna"],
              [
                "Départ pour Thèbes, sur la rive gauche du Nil. Visite de la vallée des Nobles, puis navigation vers Esna.",
                "Leave for Thebes, on the west bank of the Nile. Visit the Valley of the Nobles, then sail towards Esna.",
                "Salida hacia Tebas, en la orilla izquierda del Nilo. Visita al valle de los Nobles y navegación hacia Esna.",
              ], "sp5"),
          ]
        ),
        chapter(
          T_EDFU,
          [
            "Le temple d'Edfou, dédié à Horus, est l'un des mieux conservés d'Égypte. La journée se poursuit en navigation jusqu'à Kom Ombo.",
            "The temple of Edfu, dedicated to Horus, is one of the best preserved in Egypt. The day continues with sailing as far as Kom Ombo.",
            "El templo de Edfú, dedicado a Horus, es uno de los mejor conservados de Egipto. La jornada continúa navegando hasta Kom Ombo.",
          ],
          ["np11", "fn8", "fn9"],
          [
            day(4,
              ["Esna – Edfou – Kom Ombo", "Esna – Edfu – Kom Ombo", "Esna – Edfú – Kom Ombo"],
              [
                "Journée de navigation et visite du temple d'Edfou, édifié en l'honneur d'Horus, longtemps enseveli sous les limons puis dégagé et restauré.",
                "A day's sailing and a visit to the temple of Edfu, built in honour of Horus, long buried under silt, then cleared and restored.",
                "Jornada de navegación y visita al templo de Edfú, levantado en honor de Horus, largo tiempo sepultado bajo el limo y después despejado y restaurado.",
              ], "np11"),
          ]
        ),
        chapter(
          ["Assouan", "Aswan", "Asuán"],
          [
            "Assouan, aux portes du désert, fut capitale de la Nubie et de la Haute-Égypte. Les visites complémentaires se choisissent sur place.",
            "Aswan, on the edge of the desert, was once the capital of Nubia and Upper Egypt. Additional visits are chosen locally.",
            "Asuán, a las puertas del desierto, fue capital de Nubia y del Alto Egipto. Las visitas complementarias se eligen in situ.",
          ],
          ["fn2", "np9", "fn3", "fn1"],
          [
            day(5,
              ["Assouan et Philae", "Aswan and Philae", "Asuán y Filé"],
              [
                "Découverte d'Assouan, dont l'histoire commence sur l'île Éléphantine.",
                "Discover Aswan, whose history begins on Elephantine Island.",
                "Descubrimiento de Asuán, cuya historia comienza en la isla Elefantina.",
              ], "fn2"),
            day(6,
              ["Assouan – excursions en option", "Aswan – optional excursions", "Asuán – excursiones opcionales"],
              [
                "Journée à Assouan. En option : le temple de Kalabsha et le musée nubien (environ 65 € par personne), ou les temples d'Abou Simbel.",
                "A day in Aswan. Optional: Kalabsha temple and the Nubian Museum (about €65 per person), or the temples of Abu Simbel.",
                "Jornada en Asuán. Opcional: el templo de Kalabsha y el Museo Nubio (unos 65 € por persona), o los templos de Abu Simbel.",
              ], "fn3"),
          ]
        ),
        chapter(
          ["Retour à Louxor", "Back to Luxor", "Regreso a Luxor"],
          [
            "La croisière s'achève à Louxor, avec une journée libre avant le départ.",
            "The cruise ends in Luxor, with a free day before departure.",
            "El crucero termina en Luxor, con una jornada libre antes de la partida.",
          ],
          ["fn7", "np7", "fn11"],
          [day(7, T_LUXOR_FREE, LUXOR_FREE, "fn7"), day(8, T_HOME, LUXOR_HOME, "fn11")]
        ),
      ],
    }),

    // ───────────── 4. Coup d'œil au Caire — 4J/3N ─────────────
    trip({
      slug: "egypte-le-caire-pyramides-4j",
      name: [
        "Le Caire : pyramides de Gizeh et Grand Musée égyptien en 4 jours",
        "Cairo: The Pyramids of Giza and the Grand Egyptian Museum in 4 Days",
        "El Cairo: pirámides de Guiza y Gran Museo Egipcio en 4 días",
      ],
      tagline: [
        "Un long week-end au Caire avec guide égyptologue, sept visites incluses",
        "A long weekend in Cairo with an Egyptologist guide, seven visits included",
        "Un fin de semana largo en El Cairo con guía egiptólogo, siete visitas incluidas",
      ],
      description: [
        "Trois nuits au Caire pour voir l'essentiel avec un guide égyptologue francophone : le nouveau Grand Musée égyptien, le plateau de Gizeh avec Khéops, Khéphren, Mykérinos et le Sphinx, la visite intérieure d'une pyramide et le mastaba d'un grand vizir. L'hôtel 4* se trouve sur l'île de Gezira. Le séjour se prolonge au choix par Alexandrie ou l'oasis du Fayoum (5 jours, à partir de 1 052 €), ou par trois à sept nuits à Hurghada (à partir de 1 247 €).",
        "Three nights in Cairo to see the essentials with a French-speaking Egyptologist guide: the new Grand Egyptian Museum, the Giza plateau with Khufu, Khafre, Menkaure and the Sphinx, a visit inside a pyramid and the mastaba of a grand vizier. The 4* hotel is on Gezira Island. The stay can be extended with Alexandria or the Fayoum oasis (5 days, from €1,052), or three to seven nights in Hurghada (from €1,247).",
        "Tres noches en El Cairo para ver lo esencial con un guía egiptólogo francófono: el nuevo Gran Museo Egipcio, la meseta de Guiza con Keops, Kefrén, Micerino y la Esfinge, la visita al interior de una pirámide y la mastaba de un gran visir. El hotel de 4* está en la isla de Gezira. La estancia puede prolongarse con Alejandría o el oasis de El Fayum (5 días, desde 1.052 €), o con tres a siete noches en Hurghada (desde 1.247 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts et visites en véhicule climatisé,3 nuits en hôtel 4* au Caire,Pension complète du jour 2 au jour 4,Guide égyptologue francophone,7 visites et droits d'entrée,Accueil à l'aéroport",
        "Flights from France,Transfers and visits in an air-conditioned vehicle,3 nights in a 4* hotel in Cairo,Full board from day 2 to day 4,French-speaking Egyptologist guide,7 visits and entrance fees,Airport welcome",
        "Vuelos desde Francia,Traslados y visitas en vehículo climatizado,3 noches en hotel de 4* en El Cairo,Pensión completa del día 2 al día 4,Guía egiptólogo francófono,7 visitas y entradas,Recibimiento en el aeropuerto",
      ],
      price: 788, nights: 3, departureFrom: "Paris", image: "ca8",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,solo,family", maxGuests: 12, order: -97997,
      chapters: [
        chapter(
          ["Le Caire et le Grand Musée", "Cairo and the Grand Museum", "El Cairo y el Gran Museo"],
          [
            "Le Caire se découvre depuis l'île de Gezira, quartier cosmopolite au milieu du Nil. La première journée est pour le Grand Musée égyptien, ouvert au pied du plateau de Gizeh.",
            "Cairo is explored from Gezira Island, a cosmopolitan district in the middle of the Nile. The first day is for the Grand Egyptian Museum, opened at the foot of the Giza plateau.",
            "El Cairo se descubre desde la isla de Gezira, barrio cosmopolita en medio del Nilo. La primera jornada es para el Gran Museo Egipcio, abierto al pie de la meseta de Guiza.",
          ],
          ["ca2", "ca5", "ca3"],
          [day(1, T_CAIRO_ARR, CAIRO_ARR, "ca2"), day(2, T_GEM, GEM, "ca5")]
        ),
        chapter(
          ["Gizeh et les pyramides", "Giza and the pyramids", "Guiza y las pirámides"],
          [
            "Le plateau de Gizeh réunit les trois grandes pyramides et le Sphinx. La visite se complète par l'intérieur d'une pyramide et par le mastaba d'un grand vizir.",
            "The Giza plateau brings together the three great pyramids and the Sphinx. The visit is rounded off with the inside of a pyramid and the mastaba of a grand vizier.",
            "La meseta de Guiza reúne las tres grandes pirámides y la Esfinge. La visita se completa con el interior de una pirámide y la mastaba de un gran visir.",
          ],
          ["ca8", "ca7", "ca1", "ca9"],
          [
            day(3,
              ["Le plateau de Gizeh et le Sphinx", "The Giza plateau and the Sphinx", "La meseta de Guiza y la Esfinge"],
              [
                "Visite du plateau de Gizeh et de ses pyramides : Khéops, la plus grande des trois, Khéphren et Mykérinos. Continuation par le Sphinx, lion de pierre à tête humaine.",
                "Visit the Giza plateau and its pyramids: Khufu, the largest of the three, Khafre and Menkaure. Continue to the Sphinx, a stone lion with a human head.",
                "Visita a la meseta de Guiza y sus pirámides: Keops, la mayor de las tres, Kefrén y Micerino. Continuación hacia la Esfinge, león de piedra con cabeza humana.",
              ], "ca7"),
            day(4,
              ["Le Caire – envol", "Cairo – flight home", "El Cairo – vuelo de regreso"],
              [
                "Temps libre puis transfert à l'aéroport selon l'horaire du vol. En option, le matin uniquement : visite du Musée national de la civilisation égyptienne.",
                "Free time, then transfer to the airport according to your flight time. Optional, mornings only: a visit to the National Museum of Egyptian Civilization.",
                "Tiempo libre y traslado al aeropuerto según el horario del vuelo. Opcional, solo por la mañana: visita al Museo Nacional de la Civilización Egipcia.",
              ], "ca3"),
          ]
        ),
      ],
    }),

    // ───────────── 5. Découvertes du Caire et du Nil — 9J/7N ─────────────
    trip({
      slug: "egypte-decouvertes-caire-nil-9j",
      name: [
        "Égypte : Le Caire, Abou Simbel et croisière sur le Nil en 5*",
        "Egypt: Cairo, Abu Simbel and a 5* Nile Cruise",
        "Egipto: El Cairo, Abu Simbel y crucero por el Nilo en 5*",
      ],
      tagline: [
        "Dix-huit visites en neuf jours, des pyramides à la Vallée des Rois",
        "Eighteen visits in nine days, from the pyramids to the Valley of the Kings",
        "Dieciocho visitas en nueve días, de las pirámides al Valle de los Reyes",
      ],
      description: [
        "Le circuit le plus complet en neuf jours, en hôtels et bateau 5* (normes locales) : trois nuits au Caire pour Saqqarah, Dahchour et le Grand Musée égyptien, un vol vers Assouan, trois nuits de croisière jusqu'à Louxor et une nuit sur place. Abou Simbel est inclus, tout comme la Vallée des Rois et la vallée des Nobles avec les tombes de Ramsès VI et de Sennefer. Guide égyptologue francophone et pension complète.",
        "The most complete circuit in nine days, in 5* (local rating) hotels and boat: three nights in Cairo for Saqqara, Dahshur and the Grand Egyptian Museum, a flight to Aswan, a three-night cruise to Luxor and one night there. Abu Simbel is included, as are the Valley of the Kings and the Valley of the Nobles with the tombs of Ramesses VI and Sennefer. French-speaking Egyptologist guide and full board.",
        "El circuito más completo en nueve días, en hoteles y barco de 5* (categoría local): tres noches en El Cairo para Saqqara, Dahshur y el Gran Museo Egipcio, un vuelo a Asuán, tres noches de crucero hasta Luxor y una noche allí. Abu Simbel está incluido, al igual que el Valle de los Reyes y el valle de los Nobles con las tumbas de Ramsés VI y de Sennefer. Guía egiptólogo francófono y pensión completa.",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs Le Caire – Assouan et Louxor – Le Caire,3 nuits en hôtel 5* au Caire,3 nuits de croisière en bateau 5*,1 nuit en hôtel 5* à Louxor,Pension complète,Guide égyptologue francophone,18 visites dont Abou Simbel",
        "Flights from France,Internal flights Cairo – Aswan and Luxor – Cairo,3 nights in a 5* hotel in Cairo,3-night cruise on a 5* boat,1 night in a 5* hotel in Luxor,Full board,French-speaking Egyptologist guide,18 visits including Abu Simbel",
        "Vuelos desde Francia,Vuelos interiores El Cairo – Asuán y Luxor – El Cairo,3 noches en hotel de 5* en El Cairo,3 noches de crucero en barco de 5*,1 noche en hotel de 5* en Luxor,Pensión completa,Guía egiptólogo francófono,18 visitas incluido Abu Simbel",
      ],
      price: 1729, nights: 7, departureFrom: "Marseille", image: "dc11",
      theme: "culture", feeling: "challenged", travelerTypes: "couples,family,groups", maxGuests: 12, order: -97996,
      chapters: [
        chapter(
          ["Le Caire et les pyramides", "Cairo and the pyramids", "El Cairo y las pirámides"],
          [
            "Trois nuits au Caire pour remonter le temps : les pyramides rouge et rhomboïdale de Dahchour, le site de Saqqarah, puis le Grand Musée égyptien et le trésor de Toutankhamon.",
            "Three nights in Cairo to travel back in time: the Red and Bent pyramids of Dahshur, the site of Saqqara, then the Grand Egyptian Museum and the treasure of Tutankhamun.",
            "Tres noches en El Cairo para viajar en el tiempo: las pirámides Roja y Acodada de Dahshur, el sitio de Saqqara, y el Gran Museo Egipcio con el tesoro de Tutankamón.",
          ],
          ["dc11", "ca9", "dc8", "dc7"],
          [day(1, T_CAIRO_ARR, CAIRO_ARR, "dc8"), day(2, T_SAQ, SAQ, "ca9"), day(3, T_GEM, GEM, "dc11")]
        ),
        chapter(
          ["Assouan et Abou Simbel", "Aswan and Abu Simbel", "Asuán y Abu Simbel"],
          [
            "Un vol mène à Assouan, où commence la croisière. Le lendemain, la route du désert de Nubie conduit aux temples d'Abou Simbel, creusés dans la roche.",
            "A flight takes you to Aswan, where the cruise begins. The next day, the road across the Nubian desert leads to the temples of Abu Simbel, cut into the rock.",
            "Un vuelo lleva a Asuán, donde comienza el crucero. Al día siguiente, la carretera del desierto de Nubia conduce a los templos de Abu Simbel, excavados en la roca.",
          ],
          ["dc1", "fn1", "dc6", "dc2"],
          [
            day(4,
              ["Le Caire – Assouan et le Haut Barrage", "Cairo – Aswan and the High Dam", "El Cairo – Asuán y la Alta Presa"],
              [
                "Vol pour Assouan et installation à bord du bateau de croisière 5*. Départ en car climatisé jusqu'au Haut Barrage d'Assouan, qui régule les crues du Nil.",
                "Flight to Aswan and boarding the 5* cruise boat. Leave by air-conditioned coach for the Aswan High Dam, which regulates the Nile floods.",
                "Vuelo a Asuán e instalación a bordo del barco de crucero de 5*. Salida en autocar climatizado hasta la Alta Presa de Asuán, que regula las crecidas del Nilo.",
              ], "dc1"),
            day(5,
              ["Abou Simbel – Kom Ombo", "Abu Simbel – Kom Ombo", "Abu Simbel – Kom Ombo"],
              [
                "Excursion matinale à Abou Simbel à travers le désert de Nubie, et visite des temples gigantesques creusés dans la roche. Retour à Assouan et navigation vers Kom Ombo.",
                "A morning excursion to Abu Simbel across the Nubian desert, and a visit to the gigantic temples cut into the rock. Return to Aswan and sail towards Kom Ombo.",
                "Excursión matinal a Abu Simbel por el desierto de Nubia, y visita a los gigantescos templos excavados en la roca. Regreso a Asuán y navegación hacia Kom Ombo.",
              ], "fn1"),
          ]
        ),
        chapter(
          ["Edfou et Louxor", "Edfu and Luxor", "Edfú y Luxor"],
          [
            "Le temple d'Horus à Edfou est l'un des sites les mieux conservés de l'Égypte ancienne. À Louxor, la rive gauche réunit la Vallée des Rois et la vallée des Nobles.",
            "The temple of Horus at Edfu is one of the best-preserved sites of ancient Egypt. In Luxor, the west bank holds the Valley of the Kings and the Valley of the Nobles.",
            "El templo de Horus en Edfú es uno de los sitios mejor conservados del antiguo Egipto. En Luxor, la orilla izquierda reúne el Valle de los Reyes y el valle de los Nobles.",
          ],
          ["np11", "dc9", "dc10", "sp2"],
          [
            day(6,
              ["Edfou – Louxor", "Edfu – Luxor", "Edfú – Luxor"],
              [
                "Visite du temple d'Horus à Edfou, chef-d'œuvre d'équilibre et d'élégance, puis navigation vers Louxor.",
                "A visit to the temple of Horus at Edfu, a masterpiece of balance and elegance, then sail on to Luxor.",
                "Visita al templo de Horus en Edfú, obra maestra de equilibrio y elegancia, y navegación hacia Luxor.",
              ], "np11"),
            day(7,
              ["Thèbes et la Vallée des Rois", "Thebes and the Valley of the Kings", "Tebas y el Valle de los Reyes"],
              [
                "Départ matinal pour Thèbes, sur la rive gauche du Nil. Visite de la Vallée des Rois, creusée dans le calcaire de la montagne thébaine, et de la vallée des Nobles.",
                "An early start for Thebes, on the west bank of the Nile. Visit the Valley of the Kings, cut into the limestone of the Theban mountain, and the Valley of the Nobles.",
                "Salida temprana hacia Tebas, en la orilla izquierda del Nilo. Visita al Valle de los Reyes, excavado en la caliza de la montaña tebana, y al valle de los Nobles.",
              ], "sp2"),
          ]
        ),
        chapter(
          ["Retour par Le Caire", "Back via Cairo", "Regreso por El Cairo"],
          [
            "Une matinée libre à Louxor, puis un vol vers Le Caire et un dîner d'adieu dans un restaurant traditionnel.",
            "A free morning in Luxor, then a flight to Cairo and a farewell dinner in a traditional restaurant.",
            "Una mañana libre en Luxor, y un vuelo a El Cairo con cena de despedida en un restaurante tradicional.",
          ],
          ["dc10", "ca2", "ca3"],
          [
            day(8,
              ["Louxor – Le Caire", "Luxor – Cairo", "Luxor – El Cairo"],
              [
                "Matinée libre et déjeuner, puis transfert à l'aéroport et vol pour Le Caire. Dîner d'adieu dans un restaurant traditionnel.",
                "A free morning and lunch, then transfer to the airport and flight to Cairo. Farewell dinner in a traditional restaurant.",
                "Mañana libre y almuerzo, y traslado al aeropuerto y vuelo a El Cairo. Cena de despedida en un restaurante tradicional.",
              ], "dc10"),
            day(9, T_HOME,
              ["Envol pour la France.", "Flight back to France.", "Vuelo de regreso a Francia."], "ca2"),
          ]
        ),
      ],
    }),

    // ───────────── 6. Paysages du Nil et du Caire — 9J/8N ─────────────
    trip({
      slug: "egypte-paysages-nil-caire-9j",
      name: [
        "Égypte : croisière de Louxor à Assouan, Abou Simbel puis Le Caire",
        "Egypt: A Cruise from Luxor to Aswan, Abu Simbel and then Cairo",
        "Egipto: crucero de Luxor a Asuán, Abu Simbel y después El Cairo",
      ],
      tagline: [
        "Quatre nuits de croisière en bateau 5* supérieur, puis trois nuits au pied des pyramides",
        "Four nights cruising on a superior 5* boat, then three nights by the pyramids",
        "Cuatro noches de crucero en barco de 5* superior, y tres noches junto a las pirámides",
      ],
      description: [
        "Ce circuit commence par le Nil et finit par Le Caire : quatre nuits de croisière de Louxor à Assouan avec Karnak, Edfou et le Haut Barrage, l'excursion à Abou Simbel incluse, puis trois nuits au Caire pour Saqqarah, Dahchour et le Grand Musée égyptien. Dix-sept visites sont comprises, avec guide égyptologue francophone et pension complète.",
        "This circuit starts with the Nile and ends with Cairo: a four-night cruise from Luxor to Aswan with Karnak, Edfu and the High Dam, the Abu Simbel excursion included, then three nights in Cairo for Saqqara, Dahshur and the Grand Egyptian Museum. Seventeen visits are included, with a French-speaking Egyptologist guide and full board.",
        "Este circuito empieza por el Nilo y termina en El Cairo: cuatro noches de crucero de Luxor a Asuán con Karnak, Edfú y la Alta Presa, la excursión a Abu Simbel incluida, y tres noches en El Cairo para Saqqara, Dahshur y el Gran Museo Egipcio. Se incluyen diecisiete visitas, con guía egiptólogo francófono y pensión completa.",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs Le Caire – Louxor et Assouan – Le Caire,4 nuits de croisière en bateau 5* supérieur,4 nuits en hôtels 4* et 5* au Caire,Pension complète,Guide égyptologue francophone,17 visites dont Abou Simbel,Transferts en véhicule climatisé",
        "Flights from France,Internal flights Cairo – Luxor and Aswan – Cairo,4-night cruise on a superior 5* boat,4 nights in 4* and 5* hotels in Cairo,Full board,French-speaking Egyptologist guide,17 visits including Abu Simbel,Transfers in an air-conditioned vehicle",
        "Vuelos desde Francia,Vuelos interiores El Cairo – Luxor y Asuán – El Cairo,4 noches de crucero en barco de 5* superior,4 noches en hoteles de 4* y 5* en El Cairo,Pensión completa,Guía egiptólogo francófono,17 visitas incluido Abu Simbel,Traslados en vehículo climatizado",
      ],
      price: 1685, nights: 8, departureFrom: "Paris", image: "pn1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 12, order: -97995,
      chapters: [
        chapter(
          ["Louxor et Thèbes", "Luxor and Thebes", "Luxor y Tebas"],
          [
            "Après une courte nuit au Caire, un vol matinal mène à Louxor : la rive gauche et ses tombeaux le premier jour, le temple de Karnak le lendemain.",
            "After a short night in Cairo, an early flight leads to Luxor: the west bank and its tombs on the first day, Karnak temple the next.",
            "Tras una corta noche en El Cairo, un vuelo matinal lleva a Luxor: la orilla izquierda y sus tumbas el primer día, el templo de Karnak al siguiente.",
          ],
          ["pn1", "pn7", "dc10", "np7"],
          [
            day(1, T_CAIRO_ARR,
              [
                "Envol à destination du Caire. Accueil à l'arrivée, assistance aux formalités et nuit dans un hôtel proche de l'aéroport.",
                "Flight to Cairo. Welcome on arrival, help with formalities and overnight in a hotel near the airport.",
                "Vuelo con destino a El Cairo. Recibimiento a la llegada, asistencia en los trámites y noche en un hotel próximo al aeropuerto.",
              ], "ca2"),
            day(2,
              ["Le Caire – Louxor et Thèbes", "Cairo – Luxor and Thebes", "El Cairo – Luxor y Tebas"],
              [
                "Vol matinal pour Louxor, puis départ pour Thèbes et les tombeaux des pharaons de la XVIIIe à la XXe dynastie, sur la rive gauche du Nil. Installation à bord.",
                "An early flight to Luxor, then leave for Thebes and the tombs of the pharaohs of the 18th to 20th dynasties, on the west bank of the Nile. Board the boat.",
                "Vuelo matinal a Luxor, y salida hacia Tebas y las tumbas de los faraones de las dinastías XVIII a XX, en la orilla izquierda del Nilo. Instalación a bordo.",
              ], "pn7"),
            day(3,
              ["Karnak – Esna – Edfou", "Karnak – Esna – Edfu", "Karnak – Esna – Edfú"],
              [
                "Visite du temple de Karnak, à 2,5 km de Louxor, l'une des plus impressionnantes créations de l'Égypte antique. Navigation vers Esna et Edfou.",
                "A visit to the temple of Karnak, 2.5 km from Luxor, one of the most impressive creations of ancient Egypt. Sail towards Esna and Edfu.",
                "Visita al templo de Karnak, a 2,5 km de Luxor, una de las creaciones más impresionantes del antiguo Egipto. Navegación hacia Esna y Edfú.",
              ], "np7"),
          ]
        ),
        chapter(
          ["Edfou, Kom Ombo et Assouan", "Edfu, Kom Ombo and Aswan", "Edfú, Kom Ombo y Asuán"],
          [
            "Le bateau remonte le fleuve de temple en temple jusqu'à Assouan, où le Haut Barrage retient les eaux du Nil.",
            "The boat sails upriver from temple to temple as far as Aswan, where the High Dam holds back the waters of the Nile.",
            "El barco remonta el río de templo en templo hasta Asuán, donde la Alta Presa retiene las aguas del Nilo.",
          ],
          ["np11", "np8", "dc1", "np9"],
          [
            day(4,
              ["Edfou – Kom Ombo", "Edfu – Kom Ombo", "Edfú – Kom Ombo"],
              [
                "Visite du temple d'Horus à Edfou, l'un des sites les mieux conservés de l'Égypte ancienne, puis navigation vers Kom Ombo.",
                "A visit to the temple of Horus at Edfu, one of the best-preserved sites of ancient Egypt, then sail towards Kom Ombo.",
                "Visita al templo de Horus en Edfú, uno de los sitios mejor conservados del antiguo Egipto, y navegación hacia Kom Ombo.",
              ], "np11"),
            day(5,
              ["Kom Ombo – Assouan et le Haut Barrage", "Kom Ombo – Aswan and the High Dam", "Kom Ombo – Asuán y la Alta Presa"],
              [
                "Arrivée à Assouan et départ en car climatisé jusqu'au Haut Barrage, l'un des plus impressionnants au monde, avec arrêt photo.",
                "Arrival in Aswan and a trip by air-conditioned coach to the High Dam, one of the most impressive in the world, with a photo stop.",
                "Llegada a Asuán y salida en autocar climatizado hasta la Alta Presa, una de las más impresionantes del mundo, con parada para fotos.",
              ], "dc1"),
            day(6,
              ["Abou Simbel – envol pour Le Caire", "Abu Simbel – flight to Cairo", "Abu Simbel – vuelo a El Cairo"],
              [
                "Excursion matinale à Abou Simbel à travers le désert de Nubie, et visite des temples creusés dans la roche. Retour à Assouan et vol pour Le Caire.",
                "A morning excursion to Abu Simbel across the Nubian desert, and a visit to the temples cut into the rock. Return to Aswan and flight to Cairo.",
                "Excursión matinal a Abu Simbel por el desierto de Nubia, y visita a los templos excavados en la roca. Regreso a Asuán y vuelo a El Cairo.",
              ], "fn1"),
          ]
        ),
        chapter(
          ["Le Caire et les pyramides", "Cairo and the pyramids", "El Cairo y las pirámides"],
          [
            "Le voyage se termine au Caire, dans un hôtel 5* proche des pyramides : Dahchour et Saqqarah un jour, le Grand Musée égyptien le suivant.",
            "The trip ends in Cairo, in a 5* hotel near the pyramids: Dahshur and Saqqara one day, the Grand Egyptian Museum the next.",
            "El viaje termina en El Cairo, en un hotel de 5* cercano a las pirámides: Dahshur y Saqqara un día, el Gran Museo Egipcio al siguiente.",
          ],
          ["dc11", "ca9", "dc7", "dc8"],
          [
            day(7, T_SAQ, SAQ, "ca9"),
            day(8, T_GEM, GEM, "dc7"),
            day(9, T_HOME,
              ["Transfert à l'aéroport, assistance aux formalités et vol pour la France.", "Transfer to the airport, help with formalities and flight to France.", "Traslado al aeropuerto, asistencia en los trámites y vuelo a Francia."], "dc11"),
          ]
        ),
      ],
    }),

    // ───────────── 7. Splendeurs du Caire et du Nil — 12J/10N ─────────────
    trip({
      slug: "egypte-splendeurs-caire-nil-12j",
      name: [
        "Égypte : Le Caire et sept nuits de croisière sur le Nil",
        "Egypt: Cairo and a Seven-Night Nile Cruise",
        "Egipto: El Cairo y siete noches de crucero por el Nilo",
      ],
      tagline: [
        "Douze jours pour prendre son temps, des pyramides à Assouan et retour",
        "Twelve days to take your time, from the pyramids to Aswan and back",
        "Doce días para tomarse su tiempo, de las pirámides a Asuán y vuelta",
      ],
      description: [
        "La version longue : trois nuits au Caire en hôtel 5* pour le Grand Musée égyptien et le plateau de Gizeh, puis une croisière complète de sept nuits au départ de Louxor, aller et retour jusqu'à Assouan, à bord d'un bateau 5* supérieur. Dix-huit visites sont comprises avec un guide égyptologue francophone ; Abou Simbel reste en option. Le circuit existe aussi avec Alexandrie ou l'oasis du Fayoum (13 jours, à partir de 2 147 € par personne).",
        "The long version: three nights in Cairo in a 5* hotel for the Grand Egyptian Museum and the Giza plateau, then a full seven-night cruise from Luxor to Aswan and back, aboard a superior 5* boat. Eighteen visits are included with a French-speaking Egyptologist guide; Abu Simbel remains optional. The circuit also exists with Alexandria or the Fayoum oasis (13 days, from €2,147 per person).",
        "La versión larga: tres noches en El Cairo en hotel de 5* para el Gran Museo Egipcio y la meseta de Guiza, y un crucero completo de siete noches desde Luxor, ida y vuelta hasta Asuán, a bordo de un barco de 5* superior. Se incluyen dieciocho visitas con guía egiptólogo francófono; Abu Simbel queda como opción. El circuito existe también con Alejandría o el oasis de El Fayum (13 días, desde 2.147 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs Le Caire – Louxor – Le Caire,3 nuits en hôtel 5* au Caire,7 nuits de croisière en bateau 5* supérieur,Pension complète,Guide égyptologue francophone,18 visites et droits d'entrée,Transferts en véhicule climatisé",
        "Flights from France,Internal flights Cairo – Luxor – Cairo,3 nights in a 5* hotel in Cairo,7-night cruise on a superior 5* boat,Full board,French-speaking Egyptologist guide,18 visits and entrance fees,Transfers in an air-conditioned vehicle",
        "Vuelos desde Francia,Vuelos interiores El Cairo – Luxor – El Cairo,3 noches en hotel de 5* en El Cairo,7 noches de crucero en barco de 5* superior,Pensión completa,Guía egiptólogo francófono,18 visitas y entradas,Traslados en vehículo climatizado",
      ],
      price: 1866, nights: 10, departureFrom: "Paris", image: "sp6",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 12, order: -97994,
      chapters: [
        chapter(
          ["Le Caire et Gizeh", "Cairo and Giza", "El Cairo y Guiza"],
          [
            "Le voyage commence par Le Caire : le Grand Musée égyptien, puis le plateau de Gizeh, ses trois pyramides et le Sphinx.",
            "The trip starts with Cairo: the Grand Egyptian Museum, then the Giza plateau, its three pyramids and the Sphinx.",
            "El viaje comienza por El Cairo: el Gran Museo Egipcio, y la meseta de Guiza, sus tres pirámides y la Esfinge.",
          ],
          ["sp7", "ca1", "ca5", "dc8"],
          [
            day(1, T_CAIRO_ARR, CAIRO_ARR, "dc8"),
            day(2, T_GEM, GEM, "ca5"),
            day(3,
              ["Le plateau de Gizeh et le Sphinx", "The Giza plateau and the Sphinx", "La meseta de Guiza y la Esfinge"],
              [
                "Visite du plateau de Gizeh et de ses pyramides : Khéops, la plus grande des trois, Khéphren et Mykérinos, puis le Sphinx.",
                "Visit the Giza plateau and its pyramids: Khufu, the largest of the three, Khafre and Menkaure, then the Sphinx.",
                "Visita a la meseta de Guiza y sus pirámides: Keops, la mayor de las tres, Kefrén y Micerino, y la Esfinge.",
              ], "sp7"),
          ]
        ),
        chapter(
          ["De Louxor à Kom Ombo", "From Luxor to Kom Ombo", "De Luxor a Kom Ombo"],
          [
            "Embarquement à Louxor sur un bateau 5* supérieur. Le temple de Karnak, puis celui d'Horus à Edfou, rythment les premiers jours de navigation.",
            "Board a superior 5* boat in Luxor. The temple of Karnak, then that of Horus at Edfu, set the pace for the first days of sailing.",
            "Embarque en Luxor en un barco de 5* superior. El templo de Karnak, y el de Horus en Edfú, marcan los primeros días de navegación.",
          ],
          ["sp6", "sp1", "np7", "sp13"],
          [
            day(4,
              ["Le Caire – Louxor, embarquement", "Cairo – Luxor, boarding", "El Cairo – Luxor, embarque"],
              [
                "Vol pour Louxor et transfert au bateau de croisière 5* supérieur. Installation à bord.",
                "Flight to Luxor and transfer to the superior 5* cruise boat. Settle in on board.",
                "Vuelo a Luxor y traslado al barco de crucero de 5* superior. Instalación a bordo.",
              ], "sp6"),
            day(5,
              ["Karnak – Esna – Edfou", "Karnak – Esna – Edfu", "Karnak – Esna – Edfú"],
              [
                "Visite du temple de Karnak, à 2,5 km de Louxor, puis navigation vers Esna et Edfou (50 km).",
                "A visit to the temple of Karnak, 2.5 km from Luxor, then sail towards Esna and Edfu (50 km).",
                "Visita al templo de Karnak, a 2,5 km de Luxor, y navegación hacia Esna y Edfú (50 km).",
              ], "np7"),
            day(6,
              ["Edfou – Kom Ombo", "Edfu – Kom Ombo", "Edfú – Kom Ombo"],
              [
                "Visite du temple d'Horus à Edfou, l'un des sites les mieux conservés de l'Égypte ancienne. Navigation vers Kom Ombo (180 km).",
                "A visit to the temple of Horus at Edfu, one of the best-preserved sites of ancient Egypt. Sail towards Kom Ombo (180 km).",
                "Visita al templo de Horus en Edfú, uno de los sitios mejor conservados del antiguo Egipto. Navegación hacia Kom Ombo (180 km).",
              ], "np11"),
          ]
        ),
        chapter(
          ["Assouan", "Aswan", "Asuán"],
          [
            "Deux jours à Assouan : le Haut Barrage, les îles et les rochers du Nil, et pour ceux qui le souhaitent l'excursion à Abou Simbel.",
            "Two days in Aswan: the High Dam, the islands and rocks of the Nile, and for those who wish, the excursion to Abu Simbel.",
            "Dos días en Asuán: la Alta Presa, las islas y rocas del Nilo, y para quienes lo deseen, la excursión a Abu Simbel.",
          ],
          ["sp4", "sp9", "sp3", "sp8"],
          [
            day(7,
              ["Kom Ombo – Assouan et le Haut Barrage", "Kom Ombo – Aswan and the High Dam", "Kom Ombo – Asuán y la Alta Presa"],
              [
                "Navigation jusqu'à Assouan (50 km), puis départ en car climatisé pour le Haut Barrage, qui régule les crues du Nil, avec arrêt photo.",
                "Sail to Aswan (50 km), then leave by air-conditioned coach for the High Dam, which regulates the Nile floods, with a photo stop.",
                "Navegación hasta Asuán (50 km), y salida en autocar climatizado hacia la Alta Presa, que regula las crecidas del Nilo, con parada para fotos.",
              ], "sp4"),
            day(8,
              ["Assouan – Abou Simbel en option", "Aswan – optional Abu Simbel", "Asuán – Abu Simbel opcional"],
              [
                "Journée à Assouan. En option le matin : les temples d'Abou Simbel, édifiés à la gloire de Ramsès II et de Néfertari (120 € en bus ou 385 € en avion).",
                "A day in Aswan. Optional in the morning: the temples of Abu Simbel, built to the glory of Ramesses II and Nefertari (€120 by bus or €385 by plane).",
                "Jornada en Asuán. Opcional por la mañana: los templos de Abu Simbel, levantados a la gloria de Ramsés II y Nefertari (120 € en autobús o 385 € en avión).",
              ], "sp9"),
          ]
        ),
        chapter(
          ["Retour vers Louxor et Thèbes", "Back to Luxor and Thebes", "Regreso a Luxor y Tebas"],
          [
            "Une journée entière de navigation ramène à Louxor, à regarder passer les felouques depuis le pont. La rive gauche de Thèbes clôt la croisière.",
            "A full day's sailing brings you back to Luxor, watching the feluccas go by from the deck. The west bank at Thebes closes the cruise.",
            "Una jornada entera de navegación devuelve a Luxor, viendo pasar las falucas desde la cubierta. La orilla izquierda de Tebas cierra el crucero.",
          ],
          ["sp11", "sp2", "sp5", "sp14"],
          [
            day(9,
              ["Navigation d'Assouan à Louxor", "Sailing from Aswan to Luxor", "Navegación de Asuán a Luxor"],
              [
                "Journée entièrement consacrée à la navigation de retour vers Louxor, à profiter du pont supérieur et du spectacle des felouques.",
                "A day entirely devoted to sailing back to Luxor, enjoying the upper deck and the sight of the feluccas.",
                "Jornada dedicada por completo a la navegación de regreso a Luxor, disfrutando de la cubierta superior y del espectáculo de las falucas.",
              ], "sp11"),
            day(10,
              ["Thèbes et Médinet Habou", "Thebes and Medinet Habu", "Tebas y Medinet Habu"],
              [
                "Départ pour Thèbes, sur la rive gauche du Nil, et visite du temple de Médinet Habou, le temple de Ramsès III.",
                "Leave for Thebes, on the west bank of the Nile, and visit the temple of Medinet Habu, the temple of Ramesses III.",
                "Salida hacia Tebas, en la orilla izquierda del Nilo, y visita al templo de Medinet Habu, el templo de Ramsés III.",
              ], "sp2"),
            day(11,
              ["Louxor – Le Caire", "Luxor – Cairo", "Luxor – El Cairo"],
              [
                "Selon l'horaire, transfert à l'aéroport et vol pour Le Caire. Accueil et transfert pour le dîner.",
                "Depending on the schedule, transfer to the airport and flight to Cairo. Welcome and transfer for dinner.",
                "Según el horario, traslado al aeropuerto y vuelo a El Cairo. Recibimiento y traslado para la cena.",
              ], "sp1"),
            day(12, T_HOME,
              ["Selon l'horaire de votre vol, transfert à l'aéroport et envol pour la France.", "Depending on your flight time, transfer to the airport and flight to France.", "Según el horario de su vuelo, traslado al aeropuerto y vuelo a Francia."], "ca2"),
          ]
        ),
      ],
    }),

    // ───────────── 8. Regard sur le Nil en dahabeya — 8J/7N ─────────────
    trip({
      slug: "egypte-dahabeya-nil-8j",
      name: [
        "Égypte : le Nil en dahabeya, voilier traditionnel de Louxor à Assouan",
        "Egypt: The Nile by Dahabeya, a Traditional Sailing Boat from Luxor to Aswan",
        "Egipto: el Nilo en dahabiya, velero tradicional de Luxor a Asuán",
      ],
      tagline: [
        "Une croisière à la voile sur un petit bateau, loin des grands navires",
        "A cruise under sail on a small boat, far from the big ships",
        "Un crucero a vela en un barco pequeño, lejos de los grandes navíos",
      ],
      description: [
        "La dahabeya est un voilier traditionnel du Nil, plus petit et plus lent que les bateaux de croisière. En une semaine, elle relie Louxor à Assouan avec la Vallée des Rois, les temples d'Esna, d'Edfou et de Kom Ombo, une promenade en felouque, l'obélisque inachevé, Karnak et Louxor. La pension complète comprend les boissons non alcoolisées. Quatre bateaux sont proposés, de la Sekhmet (18 cabines, à partir de 992 € par personne) à la Nile Majestic (à partir de 1 741 €).",
        "The dahabeya is a traditional Nile sailing boat, smaller and slower than the cruise ships. In a week it links Luxor to Aswan with the Valley of the Kings, the temples of Esna, Edfu and Kom Ombo, a felucca ride, the unfinished obelisk, Karnak and Luxor. Full board includes soft drinks. Four boats are available, from the Sekhmet (18 cabins, from €992 per person) to the Nile Majestic (from €1,741).",
        "La dahabiya es un velero tradicional del Nilo, más pequeño y más lento que los barcos de crucero. En una semana une Luxor con Asuán con el Valle de los Reyes, los templos de Esna, Edfú y Kom Ombo, un paseo en faluca, el obelisco inacabado, Karnak y Luxor. La pensión completa incluye bebidas sin alcohol. Se ofrecen cuatro barcos, de la Sekhmet (18 camarotes, desde 992 € por persona) a la Nile Majestic (desde 1.741 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en dahabeya en cabine double,Pension complète avec boissons non alcoolisées,Visites mentionnées au programme,Promenade en felouque,Taxes d'aéroport",
        "Flights from France,Airport transfers,7 nights on a dahabeya in a double cabin,Full board with soft drinks,Visits listed in the programme,Felucca ride,Airport taxes",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en dahabiya en camarote doble,Pensión completa con bebidas sin alcohol,Visitas mencionadas en el programa,Paseo en faluca,Tasas de aeropuerto",
      ],
      price: 992, nights: 7, departureFrom: "Nantes", image: "dh1",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,solo", maxGuests: 12, order: -97993,
      chapters: [
        chapter(
          ["Louxor et la Vallée des Rois", "Luxor and the Valley of the Kings", "Luxor y el Valle de los Reyes"],
          [
            "Embarquement à Louxor. Dès le lendemain, la Vallée des Rois, juste en face de la ville, avant de lever l'ancre vers le sud.",
            "Boarding in Luxor. The very next day, the Valley of the Kings, just across from the town, before setting off south.",
            "Embarque en Luxor. Al día siguiente, el Valle de los Reyes, justo enfrente de la ciudad, antes de zarpar hacia el sur.",
          ],
          ["dh5", "fn11", "dh6", "fn5"],
          [
            day(1,
              ["Arrivée à Louxor", "Arrival in Luxor", "Llegada a Luxor"],
              [
                "Accueil à Louxor par notre correspondant, auprès de qui se règlent le visa et les frais de service (55 € par personne). Transfert et installation à bord de la dahabeya.",
                "Welcome in Luxor by our local agent, to whom the visa and service fees are paid (€55 per person). Transfer and boarding the dahabeya.",
                "Recibimiento en Luxor por nuestro corresponsal, a quien se abonan el visado y los gastos de servicio (55 € por persona). Traslado e instalación a bordo de la dahabiya.",
              ], "dh5"),
            day(2,
              ["La Vallée des Rois – Esna", "The Valley of the Kings – Esna", "El Valle de los Reyes – Esna"],
              [
                "Tôt le matin, selon la météo, un survol en montgolfière est proposé sur place en supplément. Départ pour la Vallée des Rois, sépultures des pharaons, puis navigation vers Esna.",
                "Early in the morning, weather permitting, a hot-air balloon flight is offered locally at extra cost. Leave for the Valley of the Kings, burial place of the pharaohs, then sail towards Esna.",
                "A primera hora, si el tiempo lo permite, se ofrece in situ un vuelo en globo con suplemento. Salida hacia el Valle de los Reyes, sepulturas de los faraones, y navegación hacia Esna.",
              ], "fn11"),
          ]
        ),
        chapter(
          ["Esna, Edfou et Kom Ombo", "Esna, Edfu and Kom Ombo", "Esna, Edfú y Kom Ombo"],
          [
            "Trois temples au fil de l'eau : Esna, puis Edfou, qui mêle des éléments du Nouvel Empire et quelques éléments grecs, et enfin Kom Ombo, dédié à Haroëris et à Sobek, le dieu crocodile.",
            "Three temples along the water: Esna, then Edfu, which combines New Kingdom features with a few Greek ones, and finally Kom Ombo, dedicated to Haroeris and to Sobek, the crocodile god.",
            "Tres templos a lo largo del agua: Esna, Edfú, que combina elementos del Imperio Nuevo con algunos griegos, y Kom Ombo, dedicado a Haroeris y a Sobek, el dios cocodrilo.",
          ],
          ["dh4", "np11", "dh1", "fn9"],
          [
            day(3,
              ["Le temple d'Esna – Edfou", "The temple of Esna – Edfu", "El templo de Esna – Edfú"],
              [
                "Visite du temple d'Esna. Arrivée à Edfou et transfert en bus jusqu'au temple, avec ses éléments traditionnels du Nouvel Empire et ses apports grecs.",
                "A visit to the temple of Esna. Arrival in Edfu and bus transfer to the temple, with its traditional New Kingdom features and Greek additions.",
                "Visita al templo de Esna. Llegada a Edfú y traslado en autobús hasta el templo, con sus elementos tradicionales del Imperio Nuevo y sus aportes griegos.",
              ], "np11"),
            day(4,
              ["Edfou – Kom Ombo – Hor Diab", "Edfu – Kom Ombo – Hor Diab", "Edfú – Kom Ombo – Hor Diab"],
              [
                "Navigation jusqu'à Kom Ombo et visite du temple gréco-romain, dédié à Haroëris et à Sobek. Continuation à la voile jusqu'à Hor Diab.",
                "Sail to Kom Ombo and visit the Greco-Roman temple, dedicated to Haroeris and Sobek. Continue under sail to Hor Diab.",
                "Navegación hasta Kom Ombo y visita al templo grecorromano, dedicado a Haroeris y a Sobek. Continuación a vela hasta Hor Diab.",
              ], "dh4"),
          ]
        ),
        chapter(
          ["Assouan", "Aswan", "Asuán"],
          [
            "À Assouan, on troque la dahabeya pour une felouque le temps d'une promenade sur le Nil, avant l'obélisque inachevé et une soirée son et lumière.",
            "In Aswan, you swap the dahabeya for a felucca for a trip on the Nile, before the unfinished obelisk and an evening sound and light show.",
            "En Asuán, se cambia la dahabiya por una faluca para un paseo por el Nilo, antes del obelisco inacabado y una velada de luz y sonido.",
          ],
          ["np1", "np5", "fn3", "np9"],
          [
            day(5,
              ["Hor Diab – Assouan en felouque", "Hor Diab – Aswan by felucca", "Hor Diab – Asuán en faluca"],
              [
                "Navigation vers Assouan. À l'arrivée dans l'après-midi, promenade en felouque sur le Nil, puis visite de l'obélisque inachevé. Spectacle son et lumière en soirée.",
                "Sail towards Aswan. On arrival in the afternoon, a felucca trip on the Nile, then a visit to the unfinished obelisk. Sound and light show in the evening.",
                "Navegación hacia Asuán. A la llegada por la tarde, paseo en faluca por el Nilo, y visita al obelisco inacabado. Espectáculo de luz y sonido por la noche.",
              ], "np5"),
            day(6,
              ["Journée libre à Assouan", "Free day in Aswan", "Jornada libre en Asuán"],
              [
                "Journée libre dans la région d'Assouan, à bord de la dahabeya, avec visites libres ou excursions en option à régler sur place. Navigation de retour vers Louxor.",
                "A free day in the Aswan area, aboard the dahabeya, with independent visits or optional excursions payable locally. Sail back towards Luxor.",
                "Jornada libre en la región de Asuán, a bordo de la dahabiya, con visitas por libre o excursiones opcionales a pagar in situ. Navegación de regreso hacia Luxor.",
              ], "np1"),
          ]
        ),
        chapter(
          ["Karnak et Louxor", "Karnak and Luxor", "Karnak y Luxor"],
          [
            "La croisière se termine par le plus grand ensemble religieux de l'Égypte antique : Karnak, puis le temple de Louxor, sur la rive droite du Nil.",
            "The cruise ends with the largest religious complex of ancient Egypt: Karnak, then Luxor temple, on the east bank of the Nile.",
            "El crucero termina con el mayor conjunto religioso del antiguo Egipto: Karnak, y el templo de Luxor, en la orilla derecha del Nilo.",
          ],
          ["np6", "np7", "dc9", "sp1"],
          [
            day(7,
              ["Les temples de Karnak et de Louxor", "The temples of Karnak and Luxor", "Los templos de Karnak y de Luxor"],
              [
                "Arrivée à Louxor dans la matinée. Après le déjeuner, visite du temple de Karnak, puis du temple de Louxor.",
                "Arrival in Luxor in the morning. After lunch, visit Karnak temple, then Luxor temple.",
                "Llegada a Luxor por la mañana. Tras el almuerzo, visita al templo de Karnak y al templo de Luxor.",
              ], "np6"),
            day(8, T_HOME,
              ["Débarquement après le petit-déjeuner, transfert à l'aéroport et vol pour la France.", "Disembark after breakfast, transfer to the airport and flight to France.", "Desembarque tras el desayuno, traslado al aeropuerto y vuelo a Francia."], "dc9"),
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
