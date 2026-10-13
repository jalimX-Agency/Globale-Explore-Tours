// Kenya circuits batch — 7 new journey-format trips added to the existing "kenya" destination.
// One trip per circuit; hotel-category, year and beach-extension variants are described inside
// the trip rather than published as separate pages. Prices are per-person "from" prices.
// Supplier product ids are kept in SUPPLIER_REF below so prices can be re-checked later.
// Run with:
//   npx tsx scripts/seed-trips-kenya-circuits.ts
// Requires scripts/upload-images-kenya-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { NewJourneyTrip } from "./lib/seedTripsRunner";

export const SUPPLIER_REF: Record<string, string[]> = {
  "kenya-essentiel-amboseli-tsavo-mombasa-8j": ["400658"],
  "kenya-evasion-masai-mara-amboseli-10j": ["396518", "400278"],
  "kenya-decouvertes-masai-mara-mombasa-12j": ["135798"],
  "kenya-autrement-samburu-masai-mara-14j": ["395798", "396318"],
  "kenya-mombasa-tsavo-plage-safari-10j": ["292518"],
  "kenya-train-savanes-plages-9j": ["294338"],
  "kenya-tanzanie-combine-safari-12j": ["399618", "278858", "278878"],
};

const R2 = process.env.NEXT_PUBLIC_R2_URL!;
const img = (key: string) => `${R2}/journeys/kenya-${key}.jpg`;

type L3 = [fr: string, en: string, es: string];

const day = (dayNumber: number, title: L3, description: L3, image: string) => ({
  dayNumber,
  title: title[0], titleEn: title[1], titleEs: title[2],
  description: description[0], descriptionEn: description[1], descriptionEs: description[2],
  image: img(image),
  images: "",
});

const chapter = (title: L3, intro: L3, gallery: string[], days: ReturnType<typeof day>[]) => ({
  title: title[0], titleEn: title[1], titleEs: title[2],
  intro: intro[0], introEn: intro[1], introEs: intro[2],
  galleryImages: gallery.map(img).join(","),
  mapMarkerX: 0,
  mapMarkerY: 0,
  days,
});

const trip = (o: {
  slug: string; name: L3; tagline: L3; description: L3; includes: L3;
  price: number; nights: number; departureFrom: string; image: string;
  theme: string; feeling: string; travelerTypes: string; maxGuests: number; order: number;
  chapters: ReturnType<typeof chapter>[];
}): NewJourneyTrip => ({
  destinationSlug: "kenya",
  tour: {
    name: o.name[0], nameEn: o.name[1], nameEs: o.name[2],
    slug: o.slug,
    image: img(o.image),
    format: "journey",
    mapImage: "",
    tagline: o.tagline[0], taglineEn: o.tagline[1], taglineEs: o.tagline[2],
    description: o.description[0], descriptionEn: o.description[1], descriptionEs: o.description[2],
    price: o.price,
    originalPrice: 0,
    currency: "EUR",
    durationValue: o.nights,
    durationUnit: "nights",
    duration: `${o.nights} nuits`,
    durationEn: `${o.nights} nights`,
    durationEs: `${o.nights} noches`,
    includes: o.includes[0], includesEn: o.includes[1], includesEs: o.includes[2],
    departureFrom: o.departureFrom,
    whenLabel: "Janv à fév | Juin à oct",
    whenLabelEn: "Jan to Feb | June to Oct",
    whenLabelEs: "Ene a feb | Jun a oct",
    bestMonths: "january,february,june,july,august,september,october",
    category: "multi-day",
    theme: o.theme,
    feeling: o.feeling,
    travelerTypes: o.travelerTypes,
    maxGuests: o.maxGuests,
    featured: true,
    order: o.order,
  },
  chapters: o.chapters,
});

// ── Shared day texts ──
const ARRIVE_NAIROBI: L3 = [
  "Arrivée à l'aéroport international de Nairobi, transfert et installation à l'hôtel. Dîner libre et première nuit au Kenya.",
  "Arrival at Nairobi international airport, transfer and check-in at the hotel. Dinner at leisure and first night in Kenya.",
  "Llegada al aeropuerto internacional de Nairobi, traslado e instalación en el hotel. Cena libre y primera noche en Kenia.",
];
const HOME: L3 = ["Arrivée en France.", "Arrival back in France.", "Llegada a Francia."];
const T_ARRIVE: L3 = ["Arrivée à Nairobi", "Arrival in Nairobi", "Llegada a Nairobi"];
const T_HOME: L3 = ["Retour en France", "Back in France", "Regreso a Francia"];
const T_FLIGHT: L3 = ["Envol vers le Kenya", "Flight to Kenya", "Vuelo a Kenia"];
const FLIGHT: L3 = [
  "Envol à destination du Kenya. Dîner et nuit à bord.",
  "Flight to Kenya. Dinner and night on board.",
  "Vuelo con destino a Kenia. Cena y noche a bordo.",
];
const MOMBASA_FREE: L3 = [
  "Journée libre pour profiter de la plage, de la piscine et des installations de l'hôtel. Activités et excursions possibles en supplément, à régler sur place.",
  "A free day to enjoy the beach, the pool and the hotel's facilities. Activities and excursions are available at extra cost, payable locally.",
  "Jornada libre para disfrutar de la playa, la piscina y las instalaciones del hotel. Actividades y excursiones opcionales con suplemento, a pagar in situ.",
];
const T_MOMBASA_FREE: L3 = ["Journée libre à Mombasa", "Free day in Mombasa", "Jornada libre en Mombasa"];
const AMBOSELI_DAY: L3 = [
  "Journée de safari dans le parc d'Amboseli, au sud du pays, à la frontière tanzanienne. La savane s'étend au pied du Kilimandjaro, dont le sommet enneigé domine les troupeaux d'éléphants. Déjeuner pique-nique.",
  "A full day on safari in Amboseli National Park, in the south of the country on the Tanzanian border. The savannah stretches out at the foot of Kilimanjaro, whose snow-capped summit towers over the elephant herds. Picnic lunch.",
  "Jornada de safari en el parque de Amboseli, al sur del país, en la frontera con Tanzania. La sabana se extiende al pie del Kilimanjaro, cuya cumbre nevada domina las manadas de elefantes. Almuerzo tipo pícnic.",
];
const T_AMBOSELI_DAY: L3 = ["Amboseli, face au Kilimandjaro", "Amboseli, facing Kilimanjaro", "Amboseli, frente al Kilimanjaro"];

const journeyTrips: NewJourneyTrip[] = [
  // ───────────── 1. L'essentiel du Kenya — 8J/6N ─────────────
  trip({
    slug: "kenya-essentiel-amboseli-tsavo-mombasa-8j",
    name: [
      "Kenya : l'essentiel, d'Amboseli à Tsavo et aux plages de Mombasa",
      "Kenya Essentials: Amboseli, Tsavo and the Beaches of Mombasa",
      "Kenia esencial: Amboseli, Tsavo y las playas de Mombasa",
    ],
    tagline: [
      "Deux grands parcs et l'océan Indien en huit jours, en petit groupe",
      "Two great parks and the Indian Ocean in eight days, in a small group",
      "Dos grandes parques y el océano Índico en ocho días, en grupo reducido",
    ],
    description: [
      "Un premier voyage au Kenya qui va droit à l'essentiel : le train de Nairobi vers Emali, les éléphants d'Amboseli au pied du Kilimandjaro, les éléphants rouges de Tsavo, puis deux nuits au bord de l'océan Indien à Mombasa. Départs garantis de 2 à 6 participants par véhicule, avec chauffeur-guide francophone pendant les safaris.",
      "A first trip to Kenya that goes straight to the essentials: the train from Nairobi to Emali, Amboseli's elephants at the foot of Kilimanjaro, the red elephants of Tsavo, then two nights by the Indian Ocean in Mombasa. Guaranteed departures with 2 to 6 travellers per vehicle and a French-speaking driver-guide on safari.",
      "Un primer viaje a Kenia que va a lo esencial: el tren de Nairobi a Emali, los elefantes de Amboseli al pie del Kilimanjaro, los elefantes rojos de Tsavo y dos noches junto al océano Índico en Mombasa. Salidas garantizadas de 2 a 6 participantes por vehículo, con conductor-guía francófono durante los safaris.",
    ],
    includes: [
      "Vols depuis la France,Transferts aéroport,Train Nairobi – Emali,6 nuits en hôtels et lodges 3* à 4*,6 petits-déjeuners 3 déjeuners et 5 dîners,Van à toit ouvrant pour les safaris,Chauffeur-guide francophone,Visites et safaris au programme",
      "Flights from France,Airport transfers,Nairobi – Emali train,6 nights in 3* to 4* hotels and lodges,6 breakfasts 3 lunches and 5 dinners,Pop-top safari van,French-speaking driver-guide,Visits and game drives listed",
      "Vuelos desde Francia,Traslados al aeropuerto,Tren Nairobi – Emali,6 noches en hoteles y lodges de 3* a 4*,6 desayunos 3 almuerzos y 5 cenas,Furgoneta con techo abatible para los safaris,Conductor-guía francófono,Visitas y safaris del programa",
    ],
    price: 1880, nights: 6, departureFrom: "Paris", image: "es1",
    theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 6, order: -990,
    chapters: [
      chapter(
        ["Nairobi", "Nairobi", "Nairobi"],
        [
          "Une première nuit à Nairobi pour récupérer du vol avant de partir vers le sud, en train puis par la route.",
          "A first night in Nairobi to recover from the flight before heading south, by train and then by road.",
          "Una primera noche en Nairobi para recuperarse del vuelo antes de partir hacia el sur, en tren y luego por carretera.",
        ],
        ["es3", "ev9", "tr2"],
        [day(1, T_ARRIVE, ARRIVE_NAIROBI, "ev9")]
      ),
      chapter(
        ["Amboseli", "Amboseli", "Amboseli"],
        [
          "Amboseli, c'est l'image que l'on se fait du Kenya : des éléphants qui traversent la plaine devant le Kilimandjaro. Deux nuits sur place laissent le temps d'un safari de fin de journée et d'une journée complète dans le parc.",
          "Amboseli is the picture most people have of Kenya: elephants crossing the plain in front of Kilimanjaro. Two nights here leave time for a late-afternoon game drive and a full day in the park.",
          "Amboseli es la imagen que uno tiene de Kenia: elefantes cruzando la llanura ante el Kilimanjaro. Dos noches aquí dan tiempo para un safari al atardecer y una jornada completa en el parque.",
        ],
        ["es1", "es3", "tr1"],
        [
          day(2,
            ["Nairobi – Amboseli en train", "Nairobi – Amboseli by train", "Nairobi – Amboseli en tren"],
            [
              "Accueil par votre guide francophone, transfert à la gare de Nairobi et train jusqu'à Emali. Route vers Amboseli (120 km), déjeuner au lodge puis premier safari en fin de journée.",
              "Meet your French-speaking guide, transfer to Nairobi station and take the train to Emali. Drive on to Amboseli (120 km), lunch at the lodge, then a first game drive at the end of the day.",
              "Encuentro con su guía francófono, traslado a la estación de Nairobi y tren hasta Emali. Ruta hacia Amboseli (120 km), almuerzo en el lodge y primer safari al final del día.",
            ], "tr2"),
          day(3, T_AMBOSELI_DAY, AMBOSELI_DAY, "es1"),
        ]
      ),
      chapter(
        ["Tsavo", "Tsavo", "Tsavo"],
        [
          "Tsavo est le plus vaste parc national du Kenya. Ses éléphants se couvrent de la poussière ocre de la région, ce qui leur donne cette teinte rouge que l'on ne voit nulle part ailleurs.",
          "Tsavo is Kenya's largest national park. Its elephants coat themselves in the region's ochre dust, which gives them a red colour seen nowhere else.",
          "Tsavo es el mayor parque nacional de Kenia. Sus elefantes se cubren del polvo ocre de la región, que les da ese tono rojo que no se ve en ningún otro lugar.",
        ],
        ["es2", "es4", "dm5"],
        [
          day(4,
            ["Amboseli – parc de Tsavo", "Amboseli – Tsavo National Park", "Amboseli – parque de Tsavo"],
            [
              "Route vers Tsavo (220 km) avec déjeuner pique-nique en chemin. L'après-midi est consacré à un safari au cœur du parc, à la recherche des éléphants rouges.",
              "Drive to Tsavo (220 km) with a picnic lunch on the way. The afternoon is spent on a game drive in the heart of the park, looking for the red elephants.",
              "Ruta hacia Tsavo (220 km) con almuerzo tipo pícnic en el camino. La tarde se dedica a un safari en el corazón del parque, en busca de los elefantes rojos.",
            ], "es2"),
        ]
      ),
      chapter(
        ["Mombasa et l'océan Indien", "Mombasa and the Indian Ocean", "Mombasa y el océano Índico"],
        [
          "Le voyage se termine au bord de l'océan Indien : sable blanc, eau turquoise et une journée entière sans programme avant le vol retour.",
          "The trip ends on the Indian Ocean: white sand, turquoise water and a full day with nothing planned before the flight home.",
          "El viaje termina a orillas del océano Índico: arena blanca, agua turquesa y un día entero sin programa antes del vuelo de regreso.",
        ],
        ["es7", "es5", "es6"],
        [
          day(5,
            ["Tsavo – Mombasa", "Tsavo – Mombasa", "Tsavo – Mombasa"],
            [
              "Transfert vers Mombasa avec le chauffeur. Déjeuner libre, installation à l'hôtel en bord de mer, dîner et nuit.",
              "Transfer to Mombasa with the driver. Lunch at leisure, check-in at the beach hotel, dinner and overnight.",
              "Traslado a Mombasa con el conductor. Almuerzo libre, instalación en el hotel junto al mar, cena y noche.",
            ], "es7"),
          day(6, T_MOMBASA_FREE, MOMBASA_FREE, "es6"),
          day(7,
            ["Mombasa – envol", "Mombasa – flight home", "Mombasa – vuelo de regreso"],
            [
              "Matinée et déjeuner libres selon les horaires de vol, puis transfert à l'aéroport. Dîner et nuit à bord.",
              "Morning and lunch at leisure depending on flight times, then transfer to the airport. Dinner and night on board.",
              "Mañana y almuerzo libres según el horario del vuelo, y traslado al aeropuerto. Cena y noche a bordo.",
            ], "es5"),
          day(8, T_HOME, HOME, "es7"),
        ]
      ),
    ],
  }),

  // ───────────── 2. Evasion Kenyane — 10J/8N ─────────────
  trip({
    slug: "kenya-evasion-masai-mara-amboseli-10j",
    name: [
      "Kenya : du Masai Mara à Amboseli, lacs du Rift et éléphants de Tsavo",
      "Kenya: From the Masai Mara to Amboseli, the Rift Lakes and Tsavo's Elephants",
      "Kenia: del Masai Mara a Amboseli, los lagos del Rift y los elefantes de Tsavo",
    ],
    tagline: [
      "Quatre parcs, une plantation de thé et deux trajets en train en dix jours",
      "Four parks, a tea plantation and two train rides in ten days",
      "Cuatro parques, una plantación de té y dos trayectos en tren en diez días",
    ],
    description: [
      "Un safari complet en dix jours : la réserve du Masai Mara, les lacs Nakuru et Naivasha dans la vallée du Rift, Amboseli face au Kilimandjaro et les éléphants rouges de Tsavo. Le voyage se fait en van à toit ouvrant, avec deux trajets en train et la visite d'une plantation de thé. Une extension balnéaire à Zanzibar (13 jours / 11 nuits) est proposée à partir de 4 004 € par personne.",
      "A complete safari in ten days: the Masai Mara reserve, lakes Nakuru and Naivasha in the Rift Valley, Amboseli facing Kilimanjaro and the red elephants of Tsavo. You travel by pop-top van, with two train rides and a visit to a tea plantation. A beach extension in Zanzibar (13 days / 11 nights) is available from €4,004 per person.",
      "Un safari completo en diez días: la reserva del Masai Mara, los lagos Nakuru y Naivasha en el valle del Rift, Amboseli frente al Kilimanjaro y los elefantes rojos de Tsavo. El viaje se hace en furgoneta con techo abatible, con dos trayectos en tren y la visita a una plantación de té. Se ofrece una extensión de playa en Zanzíbar (13 días / 11 noches) desde 4.004 € por persona.",
    ],
    includes: [
      "Vols depuis la France,Transferts aéroport,Trains Nairobi – Emali et Voi – Nairobi,8 nuits en hôtels et lodges 3* à 4*,8 petits-déjeuners 8 déjeuners et 7 dîners,Van à toit ouvrant,Chauffeur-guide francophone,Visites et safaris au programme",
      "Flights from France,Airport transfers,Nairobi – Emali and Voi – Nairobi trains,8 nights in 3* to 4* hotels and lodges,8 breakfasts 8 lunches and 7 dinners,Pop-top van,French-speaking driver-guide,Visits and game drives listed",
      "Vuelos desde Francia,Traslados al aeropuerto,Trenes Nairobi – Emali y Voi – Nairobi,8 noches en hoteles y lodges de 3* a 4*,8 desayunos 8 almuerzos y 7 cenas,Furgoneta con techo abatible,Conductor-guía francófono,Visitas y safaris del programa",
    ],
    price: 2979, nights: 8, departureFrom: "Genève", image: "ev2",
    theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 6, order: -989,
    chapters: [
      chapter(
        ["Nairobi", "Nairobi", "Nairobi"],
        [
          "Une nuit à Nairobi à l'arrivée, avant de prendre la route de l'ouest et du Masai Mara.",
          "One night in Nairobi on arrival, before taking the road west to the Masai Mara.",
          "Una noche en Nairobi a la llegada, antes de tomar la carretera del oeste hacia el Masai Mara.",
        ],
        ["ev8", "ev7", "ev9"],
        [day(1, T_ARRIVE, ARRIVE_NAIROBI, "ev9")]
      ),
      chapter(
        ["Masai Mara", "Masai Mara", "Masai Mara"],
        [
          "Le Masai Mara s'étend sur 1 510 km² de plaines, de savane et de collines parsemées d'acacias. C'est la réserve la plus connue du pays, et une journée entière lui est consacrée.",
          "The Masai Mara covers 1,510 km² of plains, savannah and hills dotted with acacias. It is the country's best-known reserve, and a whole day is devoted to it.",
          "El Masai Mara se extiende por 1.510 km² de llanuras, sabana y colinas salpicadas de acacias. Es la reserva más conocida del país, y se le dedica una jornada entera.",
        ],
        ["ev2", "ev4", "ev3"],
        [
          day(2,
            ["Nairobi – Masai Mara par une plantation de thé", "Nairobi – Masai Mara via a tea plantation", "Nairobi – Masai Mara por una plantación de té"],
            [
              "Accueil par votre guide francophone et visite d'une plantation de thé : culture, cueillette et traitement du thé kényan. Déjeuner dans les jardins de la ferme avec dégustation, puis route vers le Masai Mara (250 km).",
              "Meet your French-speaking guide and visit a tea plantation to see how Kenyan tea is grown, picked and processed. Lunch in the farm gardens with a tasting, then drive to the Masai Mara (250 km).",
              "Encuentro con su guía francófono y visita a una plantación de té: cultivo, recolección y elaboración del té keniano. Almuerzo en los jardines de la finca con degustación, y ruta hacia el Masai Mara (250 km).",
            ], "ev8"),
          day(3,
            ["Journée de safari au Masai Mara", "A day on safari in the Masai Mara", "Jornada de safari en el Masai Mara"],
            [
              "Journée de safari à la découverte de la faune et des paysages du Masai Mara, avec déjeuner pique-nique dans la réserve.",
              "A full day's safari exploring the wildlife and landscapes of the Masai Mara, with a picnic lunch in the reserve.",
              "Jornada de safari para descubrir la fauna y los paisajes del Masai Mara, con almuerzo tipo pícnic en la reserva.",
            ], "ev2"),
        ]
      ),
      chapter(
        ["Lacs Nakuru et Naivasha", "Lakes Nakuru and Naivasha", "Lagos Nakuru y Naivasha"],
        [
          "Dans la vallée du Grand Rift, deux lacs aux ambiances différentes : Nakuru, dont l'eau attire une faune nombreuse, et Naivasha, lac d'eau douce apprécié des hippopotames et des oiseaux.",
          "In the Great Rift Valley, two lakes with different moods: Nakuru, whose water draws plentiful wildlife, and Naivasha, a freshwater lake favoured by hippos and birds.",
          "En el valle del Gran Rift, dos lagos de ambientes distintos: Nakuru, cuya agua atrae abundante fauna, y Naivasha, lago de agua dulce apreciado por hipopótamos y aves.",
        ],
        ["ev1", "ev5", "cb3"],
        [
          day(4,
            ["Masai Mara – lac Nakuru", "Masai Mara – Lake Nakuru", "Masai Mara – lago Nakuru"],
            [
              "Départ pour le parc national de Nakuru (220 km). Déjeuner au lodge puis safari autour du lac, dont l'étendue attire un grand nombre d'animaux.",
              "Leave for Lake Nakuru National Park (220 km). Lunch at the lodge, then a game drive around the lake, whose size attracts a great many animals.",
              "Salida hacia el parque nacional de Nakuru (220 km). Almuerzo en el lodge y safari alrededor del lago, cuya extensión atrae a un gran número de animales.",
            ], "ev1"),
          day(5,
            ["Nakuru – lac Naivasha – Nairobi", "Nakuru – Lake Naivasha – Nairobi", "Nakuru – lago Naivasha – Nairobi"],
            [
              "Route vers le lac Naivasha, au cœur de la vallée du Grand Rift, pour observer hippopotames et oiseaux. Retour à Nairobi en fin de journée (150 km).",
              "Drive to Lake Naivasha, in the heart of the Great Rift Valley, to watch hippos and birdlife. Return to Nairobi at the end of the day (150 km).",
              "Ruta hacia el lago Naivasha, en pleno valle del Gran Rift, para observar hipopótamos y aves. Regreso a Nairobi al final del día (150 km).",
            ], "ev5"),
        ]
      ),
      chapter(
        ["Amboseli", "Amboseli", "Amboseli"],
        [
          "Cap au sud en train, puis deux nuits à Amboseli : le parc des éléphants et de la vue dégagée sur le Kilimandjaro.",
          "South by train, then two nights in Amboseli: the park of elephants and open views of Kilimanjaro.",
          "Rumbo al sur en tren, y dos noches en Amboseli: el parque de los elefantes y de las vistas abiertas al Kilimanjaro.",
        ],
        ["ev6", "es1", "es3"],
        [
          day(6,
            ["Nairobi – Amboseli en train", "Nairobi – Amboseli by train", "Nairobi – Amboseli en tren"],
            [
              "Transfert à la gare de Nairobi et train jusqu'à Emali, puis route vers Amboseli (120 km). Déjeuner au lodge et premier safari en fin de journée.",
              "Transfer to Nairobi station and train to Emali, then drive to Amboseli (120 km). Lunch at the lodge and a first game drive at the end of the day.",
              "Traslado a la estación de Nairobi y tren hasta Emali, y ruta hacia Amboseli (120 km). Almuerzo en el lodge y primer safari al final del día.",
            ], "tr2"),
          day(7, T_AMBOSELI_DAY, AMBOSELI_DAY, "ev6"),
        ]
      ),
      chapter(
        ["Tsavo et retour", "Tsavo and the journey home", "Tsavo y regreso"],
        [
          "Dernière étape dans le plus grand parc du Kenya, puis retour à Nairobi en train pour un dîner de viandes grillées avant le vol.",
          "A final stop in Kenya's largest park, then back to Nairobi by train for a grilled-meat dinner before the flight.",
          "Última etapa en el mayor parque de Kenia, y regreso a Nairobi en tren para una cena de carnes a la brasa antes del vuelo.",
        ],
        ["dm5", "es2", "dk3"],
        [
          day(8,
            ["Amboseli – parc de Tsavo", "Amboseli – Tsavo National Park", "Amboseli – parque de Tsavo"],
            [
              "Route vers Tsavo (240 km) et safari au cœur du parc, célèbre pour ses éléphants rouges qui se couvrent de la terre ocre de la région.",
              "Drive to Tsavo (240 km) and a game drive in the heart of the park, famous for its red elephants, which coat themselves in the region's ochre earth.",
              "Ruta hacia Tsavo (240 km) y safari en el corazón del parque, famoso por sus elefantes rojos, que se cubren de la tierra ocre de la región.",
            ], "dm5"),
          day(9,
            ["Tsavo – Nairobi en train – envol", "Tsavo – Nairobi by train – flight home", "Tsavo – Nairobi en tren – vuelo de regreso"],
            [
              "Transfert à la gare de Voi et train vers Nairobi, avec déjeuner pique-nique. Arrêt dans un centre d'artisanat, dîner de viandes grillées au restaurant Carnivore, puis transfert à l'aéroport.",
              "Transfer to Voi station and train to Nairobi, with a picnic lunch. A stop at a craft centre, a grilled-meat dinner at the Carnivore restaurant, then transfer to the airport.",
              "Traslado a la estación de Voi y tren hacia Nairobi, con almuerzo tipo pícnic. Parada en un centro de artesanía, cena de carnes a la brasa en el restaurante Carnivore y traslado al aeropuerto.",
            ], "ev7"),
          day(10, T_HOME, HOME, "ev4"),
        ]
      ),
    ],
  }),

  // ───────────── 3. Découvertes Kenyanes — 12J/9N ─────────────
  trip({
    slug: "kenya-decouvertes-masai-mara-mombasa-12j",
    name: [
      "Kenya : du Masaï Mara à Mombasa, safaris en 4x4 et plage",
      "Kenya: From the Masai Mara to Mombasa, 4x4 Safaris and the Beach",
      "Kenia: del Masai Mara a Mombasa, safaris en 4x4 y playa",
    ],
    tagline: [
      "Quatre parcs en 4x4, six personnes au plus par véhicule, puis l'océan Indien",
      "Four parks by 4x4, six people at most per vehicle, then the Indian Ocean",
      "Cuatro parques en 4x4, seis personas como máximo por vehículo, y el océano Índico",
    ],
    description: [
      "Douze jours pour traverser le Kenya d'ouest en est : le Masaï Mara, le lac Naivasha et la balade à pied sur Crescent Island, le centre des girafes de Langata, Amboseli, Tsavo, puis trois nuits à Mombasa. Les safaris se font en 4x4, à six personnes au maximum, avec des nuits en lodge, en camp de toile et en hôtel.",
      "Twelve days crossing Kenya from west to east: the Masai Mara, Lake Naivasha and a walk on Crescent Island, the Langata giraffe centre, Amboseli, Tsavo, then three nights in Mombasa. Game drives are by 4x4 with six people at most, and nights are spent in lodges, tented camps and hotels.",
      "Doce días para cruzar Kenia de oeste a este: el Masai Mara, el lago Naivasha y el paseo a pie por Crescent Island, el centro de jirafas de Langata, Amboseli, Tsavo y tres noches en Mombasa. Los safaris se hacen en 4x4, con seis personas como máximo, con noches en lodge, campamento de lona y hotel.",
    ],
    includes: [
      "Vols depuis la France,Transferts aéroport,9 nuits en hôtels lodges et camps 3* à 4*,9 petits-déjeuners 7 déjeuners et 8 dîners,4x4 limité à 6 personnes,Guide francophone,Safaris et visites au programme,Taxes locales",
      "Flights from France,Airport transfers,9 nights in 3* to 4* hotels lodges and camps,9 breakfasts 7 lunches and 8 dinners,4x4 limited to 6 people,French-speaking guide,Game drives and visits listed,Local taxes",
      "Vuelos desde Francia,Traslados al aeropuerto,9 noches en hoteles lodges y campamentos de 3* a 4*,9 desayunos 7 almuerzos y 8 cenas,4x4 limitado a 6 personas,Guía francófono,Safaris y visitas del programa,Tasas locales",
    ],
    price: 3041, nights: 9, departureFrom: "Bruxelles", image: "dk1",
    theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 6, order: -988,
    chapters: [
      chapter(
        ["Nairobi", "Nairobi", "Nairobi"],
        [
          "Le voyage commence par un vol de nuit et une première journée tranquille à Nairobi.",
          "The trip starts with a night flight and a quiet first day in Nairobi.",
          "El viaje comienza con un vuelo nocturno y una primera jornada tranquila en Nairobi.",
        ],
        ["dk8", "dk7", "dk5"],
        [
          day(1, T_FLIGHT, FLIGHT, "dk8"),
          day(2, T_ARRIVE,
            [
              "Accueil et assistance à l'arrivée, transfert à l'hôtel. Les chambres sont disponibles à partir de 14h. Dîner libre et nuit.",
              "Welcome and assistance on arrival, transfer to the hotel. Rooms are available from 2 pm. Dinner at leisure and overnight.",
              "Recibimiento y asistencia a la llegada, traslado al hotel. Las habitaciones están disponibles a partir de las 14 h. Cena libre y noche.",
            ], "dk7"),
        ]
      ),
      chapter(
        ["Masaï Mara", "Masai Mara", "Masai Mara"],
        [
          "La plus célèbre des réserves kényanes prolonge, côté Kenya, l'immense parc tanzanien du Serengeti. Entre juillet et septembre, la grande migration y fait passer d'immenses colonnes d'animaux.",
          "The most famous of Kenya's reserves is the Kenyan extension of Tanzania's vast Serengeti. Between July and September the great migration brings huge columns of animals through it.",
          "La más famosa de las reservas kenianas es la prolongación, en Kenia, del inmenso parque tanzano del Serengeti. Entre julio y septiembre, la gran migración hace pasar por ella enormes columnas de animales.",
        ],
        ["dk1", "ev2", "ev4"],
        [
          day(3,
            ["Nairobi – Masaï Mara en 4x4", "Nairobi – Masai Mara by 4x4", "Nairobi – Masai Mara en 4x4"],
            [
              "Départ en 4x4 pour la réserve du Masaï Mara (235 km), qui couvre 1 500 km² de savane.",
              "Set off by 4x4 for the Masai Mara reserve (235 km), which covers 1,500 km² of savannah.",
              "Salida en 4x4 hacia la reserva del Masai Mara (235 km), que abarca 1.500 km² de sabana.",
            ], "ev2"),
          day(4,
            ["Safari au lever du jour", "Game drive at sunrise", "Safari al amanecer"],
            [
              "Petit-déjeuner matinal puis safari au lever du jour, le meilleur moment pour observer les animaux. De juillet à septembre, c'est ici que se déroule la grande migration.",
              "An early breakfast, then a game drive at sunrise, the best time to see the animals. From July to September, this is where the great migration takes place.",
              "Desayuno temprano y safari al amanecer, el mejor momento para observar a los animales. De julio a septiembre, aquí tiene lugar la gran migración.",
            ], "dk1"),
        ]
      ),
      chapter(
        ["Lac Naivasha", "Lake Naivasha", "Lago Naivasha"],
        [
          "Dans la région des grands lacs, une courte traversée en bateau mène à Crescent Island, où l'on marche à pied au milieu des animaux.",
          "In the lakes region, a short boat crossing leads to Crescent Island, where you walk among the animals.",
          "En la región de los grandes lagos, una breve travesía en barco lleva a Crescent Island, donde se camina entre los animales.",
        ],
        ["dk6", "cb3", "ev5"],
        [
          day(5,
            ["Masaï Mara – Naivasha et Crescent Island", "Masai Mara – Naivasha and Crescent Island", "Masai Mara – Naivasha y Crescent Island"],
            [
              "Route vers la région des grands lacs (275 km) et déjeuner au lodge. Court transfert en bateau jusqu'à Crescent Island pour une promenade à pied parmi les animaux.",
              "Drive to the lakes region (275 km) and lunch at the lodge. A short boat transfer to Crescent Island for a walk among the animals.",
              "Ruta hacia la región de los grandes lagos (275 km) y almuerzo en el lodge. Breve traslado en barco hasta Crescent Island para un paseo a pie entre los animales.",
            ], "dk6"),
        ]
      ),
      chapter(
        ["Amboseli", "Amboseli", "Amboseli"],
        [
          "Sur la route du sud, un arrêt au centre des girafes de Langata, puis Amboseli : moins de 400 km², mais une quarantaine d'espèces de mammifères au pied du Kilimandjaro.",
          "On the road south, a stop at the Langata giraffe centre, then Amboseli: under 400 km², but some forty species of mammals at the foot of Kilimanjaro.",
          "En la ruta hacia el sur, una parada en el centro de jirafas de Langata, y Amboseli: menos de 400 km², pero unas cuarenta especies de mamíferos al pie del Kilimanjaro.",
        ],
        ["dk2", "dk5", "es1"],
        [
          day(6,
            ["Naivasha – centre des girafes – Amboseli", "Naivasha – giraffe centre – Amboseli", "Naivasha – centro de jirafas – Amboseli"],
            [
              "Route vers Nairobi et visite du Langata Giraffe Center, où l'on nourrit les girafes de Rothschild depuis une plateforme. Continuation vers Amboseli (350 km).",
              "Drive to Nairobi and visit the Langata Giraffe Center, where you feed Rothschild's giraffes from a platform. Continue to Amboseli (350 km).",
              "Ruta hacia Nairobi y visita al Langata Giraffe Center, donde se da de comer a las jirafas de Rothschild desde una plataforma. Continuación hacia Amboseli (350 km).",
            ], "dk5"),
          day(7,
            ["Matinée de safari à Amboseli", "Morning game drive in Amboseli", "Mañana de safari en Amboseli"],
            [
              "Petit-déjeuner matinal et matinée de safari dans le parc. Sa petite taille n'enlève rien à l'observation : une quarantaine d'espèces de mammifères y vivent.",
              "An early breakfast and a morning game drive in the park. Its small size takes nothing away from the viewing: some forty species of mammals live here.",
              "Desayuno temprano y mañana de safari en el parque. Su pequeño tamaño no resta nada a la observación: aquí viven unas cuarenta especies de mamíferos.",
            ], "dk2"),
        ]
      ),
      chapter(
        ["Tsavo", "Tsavo", "Tsavo"],
        [
          "Tsavo, ouvert en 1948, est l'une des premières réserves du Kenya. Ses pistes de terre rouge traversent des paysages très variés.",
          "Tsavo, opened in 1948, is one of Kenya's earliest reserves. Its red-earth tracks cross very varied landscapes.",
          "Tsavo, abierto en 1948, es una de las primeras reservas de Kenia. Sus pistas de tierra roja atraviesan paisajes muy variados.",
        ],
        ["dk3", "dk4", "dm4"],
        [
          day(8,
            ["Amboseli – parc de Tsavo", "Amboseli – Tsavo National Park", "Amboseli – parque de Tsavo"],
            [
              "Route vers le parc national de Tsavo (250 km) avec déjeuner pique-nique en chemin, puis safari l'après-midi.",
              "Drive to Tsavo National Park (250 km) with a picnic lunch on the way, then an afternoon game drive.",
              "Ruta hacia el parque nacional de Tsavo (250 km) con almuerzo tipo pícnic en el camino, y safari por la tarde.",
            ], "dk3"),
        ]
      ),
      chapter(
        ["Mombasa et l'océan Indien", "Mombasa and the Indian Ocean", "Mombasa y el océano Índico"],
        [
          "Après les pistes, la côte : trois nuits à Mombasa pour se reposer au bord de l'océan Indien avant le retour.",
          "After the tracks, the coast: three nights in Mombasa to rest by the Indian Ocean before heading home.",
          "Tras las pistas, la costa: tres noches en Mombasa para descansar junto al océano Índico antes del regreso.",
        ],
        ["dk91", "dk9", "dm1"],
        [
          day(9,
            ["Tsavo – Mombasa", "Tsavo – Mombasa", "Tsavo – Mombasa"],
            [
              "Dernier safari tôt le matin en quittant le parc, quand les animaux sont encore actifs avant la chaleur. Route vers Mombasa (240 km).",
              "A last early-morning game drive on the way out of the park, when the animals are still active before the heat. Drive to Mombasa (240 km).",
              "Último safari a primera hora al salir del parque, cuando los animales siguen activos antes del calor. Ruta hacia Mombasa (240 km).",
            ], "dk4"),
          day(10, T_MOMBASA_FREE, MOMBASA_FREE, "dk91"),
          day(11,
            ["Mombasa – envol", "Mombasa – flight home", "Mombasa – vuelo de regreso"],
            [
              "Dernière matinée au bord de l'océan, déjeuner libre, puis transfert à l'aéroport et vol retour. Dîner et nuit à bord.",
              "A last morning by the ocean, lunch at leisure, then transfer to the airport and flight home. Dinner and night on board.",
              "Última mañana junto al océano, almuerzo libre, y traslado al aeropuerto y vuelo de regreso. Cena y noche a bordo.",
            ], "dk9"),
          day(12, T_HOME, HOME, "dm1"),
        ]
      ),
    ],
  }),

  // ───────────── 4. Le Kenya Autrement — 14J/12N ─────────────
  trip({
    slug: "kenya-autrement-samburu-masai-mara-14j",
    name: [
      "Kenya autrement : Samburu, Ol Pejeta, Masai Mara et Amboseli",
      "Kenya Differently: Samburu, Ol Pejeta, the Masai Mara and Amboseli",
      "Kenia de otra manera: Samburu, Ol Pejeta, Masai Mara y Amboseli",
    ],
    tagline: [
      "Le grand tour du Kenya en deux semaines, du nord aride aux éléphants rouges de Tsavo",
      "The grand tour of Kenya in two weeks, from the arid north to Tsavo's red elephants",
      "La gran vuelta a Kenia en dos semanas, del norte árido a los elefantes rojos de Tsavo",
    ],
    description: [
      "Le circuit le plus complet : il commence au nord, dans la réserve de Samburu et ses espèces rares, puis dans le sanctuaire de rhinocéros d'Ol Pejeta, au pied du mont Kenya. Il se poursuit par le Masai Mara, les lacs Nakuru et Naivasha, Amboseli et Tsavo. Départs garantis de 2 à 6 participants par véhicule. Une extension balnéaire à Zanzibar (17 jours / 15 nuits) est proposée à partir de 5 424 € par personne.",
      "The most complete circuit: it starts in the north, in the Samburu reserve with its rare species, then the Ol Pejeta rhino sanctuary at the foot of Mount Kenya. It continues through the Masai Mara, lakes Nakuru and Naivasha, Amboseli and Tsavo. Guaranteed departures with 2 to 6 travellers per vehicle. A beach extension in Zanzibar (17 days / 15 nights) is available from €5,424 per person.",
      "El circuito más completo: empieza en el norte, en la reserva de Samburu y sus especies raras, y sigue en el santuario de rinocerontes de Ol Pejeta, al pie del monte Kenia. Continúa por el Masai Mara, los lagos Nakuru y Naivasha, Amboseli y Tsavo. Salidas garantizadas de 2 a 6 participantes por vehículo. Se ofrece una extensión de playa en Zanzíbar (17 días / 15 noches) desde 5.424 € por persona.",
    ],
    includes: [
      "Vols depuis la France,Transferts aéroport,Trains Nairobi – Emali et Voi – Nairobi,12 nuits en hôtels et lodges 3* à 4*,12 petits-déjeuners 12 déjeuners et 11 dîners,Van à toit ouvrant,Chauffeur-guide francophone,Visites et safaris au programme",
      "Flights from France,Airport transfers,Nairobi – Emali and Voi – Nairobi trains,12 nights in 3* to 4* hotels and lodges,12 breakfasts 12 lunches and 11 dinners,Pop-top van,French-speaking driver-guide,Visits and game drives listed",
      "Vuelos desde Francia,Traslados al aeropuerto,Trenes Nairobi – Emali y Voi – Nairobi,12 noches en hoteles y lodges de 3* a 4*,12 desayunos 12 almuerzos y 11 cenas,Furgoneta con techo abatible,Conductor-guía francófono,Visitas y safaris del programa",
    ],
    price: 4486, nights: 12, departureFrom: "Genève", image: "ev4",
    theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 6, order: -987,
    chapters: [
      chapter(
        ["Nairobi", "Nairobi", "Nairobi"],
        [
          "Une nuit à Nairobi à l'arrivée, avant la longue route vers le nord.",
          "One night in Nairobi on arrival, before the long road north.",
          "Una noche en Nairobi a la llegada, antes de la larga ruta hacia el norte.",
        ],
        ["ev9", "ev7", "ev8"],
        [day(1, T_ARRIVE, ARRIVE_NAIROBI, "ev9")]
      ),
      chapter(
        ["Samburu et Ol Pejeta", "Samburu and Ol Pejeta", "Samburu y Ol Pejeta"],
        [
          "Le nord du Kenya est plus sec et moins visité. À Samburu vivent des espèces que l'on ne voit presque nulle part ailleurs : zèbre de Grévy, girafe réticulée, autruche de Somalie. Plus au sud, la réserve privée d'Ol Pejeta abrite l'un des plus grands sanctuaires de rhinocéros noirs, sous le mont Kenya (5 199 m).",
          "Northern Kenya is drier and less visited. Samburu is home to species seen almost nowhere else: Grévy's zebra, reticulated giraffe, Somali ostrich. Further south, the private Ol Pejeta conservancy holds one of the largest black rhino sanctuaries, beneath Mount Kenya (5,199 m).",
          "El norte de Kenia es más seco y menos visitado. En Samburu viven especies que casi no se ven en ningún otro lugar: cebra de Grévy, jirafa reticulada, avestruz somalí. Más al sur, la reserva privada de Ol Pejeta alberga uno de los mayores santuarios de rinocerontes negros, bajo el monte Kenia (5.199 m).",
        ],
        ["dm6", "dk7", "dm4b"],
        [
          day(2,
            ["Nairobi – Samburu", "Nairobi – Samburu", "Nairobi – Samburu"],
            [
              "Route vers le nord (310 km) à travers les plantations de thé et de café. Déjeuner de truite dans un restaurant local installé dans un figuier sacré, puis continuation vers la réserve de Samburu.",
              "Drive north (310 km) through tea and coffee plantations. A trout lunch at a local restaurant set in a sacred fig tree, then on to the Samburu reserve.",
              "Ruta hacia el norte (310 km) entre plantaciones de té y café. Almuerzo de trucha en un restaurante local instalado en una higuera sagrada, y continuación hacia la reserva de Samburu.",
            ], "ev8"),
          day(3,
            ["Safari à Samburu", "Game drive in Samburu", "Safari en Samburu"],
            [
              "Safari dans la réserve de Samburu, à la recherche de ses espèces rares : zèbre de Grévy, girafe réticulée et autruche de Somalie.",
              "A game drive in the Samburu reserve, looking for its rare species: Grévy's zebra, reticulated giraffe and Somali ostrich.",
              "Safari en la reserva de Samburu, en busca de sus especies raras: cebra de Grévy, jirafa reticulada y avestruz somalí.",
            ], "dm6"),
          day(4,
            ["Samburu – Ol Pejeta", "Samburu – Ol Pejeta", "Samburu – Ol Pejeta"],
            [
              "Route vers la réserve privée d'Ol Pejeta (150 km), dominée par le mont Kenya, point culminant du pays à 5 199 m. La réserve est l'un des plus grands sanctuaires de rhinocéros noirs.",
              "Drive to the private Ol Pejeta conservancy (150 km), overlooked by Mount Kenya, the country's highest peak at 5,199 m. The conservancy is one of the largest black rhino sanctuaries.",
              "Ruta hacia la reserva privada de Ol Pejeta (150 km), dominada por el monte Kenia, punto más alto del país con 5.199 m. La reserva es uno de los mayores santuarios de rinocerontes negros.",
            ], "dm4b"),
          day(5,
            ["Ol Pejeta – Nairobi", "Ol Pejeta – Nairobi", "Ol Pejeta – Nairobi"],
            [
              "Retour vers Nairobi (220 km) avec arrêt et déjeuner dans une plantation de café. Installation à l'hôtel, dîner et nuit.",
              "Return to Nairobi (220 km) with a stop and lunch at a coffee plantation. Check-in at the hotel, dinner and overnight.",
              "Regreso a Nairobi (220 km) con parada y almuerzo en una plantación de café. Instalación en el hotel, cena y noche.",
            ], "dk7"),
        ]
      ),
      chapter(
        ["Masai Mara", "Masai Mara", "Masai Mara"],
        [
          "Deux nuits dans la réserve la plus connue du Kenya, 1 510 km² de plaines où passe chaque année la grande migration.",
          "Two nights in Kenya's best-known reserve, 1,510 km² of plains crossed each year by the great migration.",
          "Dos noches en la reserva más conocida de Kenia, 1.510 km² de llanuras por donde pasa cada año la gran migración.",
        ],
        ["ev2", "ev4", "dk1"],
        [
          day(6,
            ["Nairobi – Masai Mara par une plantation de thé", "Nairobi – Masai Mara via a tea plantation", "Nairobi – Masai Mara por una plantación de té"],
            [
              "Visite d'une plantation de thé pour comprendre la culture, la cueillette et le traitement du thé kényan. Déjeuner dans les jardins de la ferme avec dégustation, puis route vers le Masai Mara (250 km).",
              "Visit a tea plantation to see how Kenyan tea is grown, picked and processed. Lunch in the farm gardens with a tasting, then drive to the Masai Mara (250 km).",
              "Visita a una plantación de té para conocer el cultivo, la recolección y la elaboración del té keniano. Almuerzo en los jardines de la finca con degustación, y ruta hacia el Masai Mara (250 km).",
            ], "ev3"),
          day(7,
            ["Journée de safari au Masai Mara", "A day on safari in the Masai Mara", "Jornada de safari en el Masai Mara"],
            [
              "Journée de safari à la découverte de la faune et des paysages du Masai Mara, la région où s'observe la grande migration. Déjeuner pique-nique.",
              "A full day's safari exploring the wildlife and landscapes of the Masai Mara, the region where the great migration can be seen. Picnic lunch.",
              "Jornada de safari para descubrir la fauna y los paisajes del Masai Mara, la región donde se observa la gran migración. Almuerzo tipo pícnic.",
            ], "ev2"),
        ]
      ),
      chapter(
        ["Lacs Nakuru et Naivasha", "Lakes Nakuru and Naivasha", "Lagos Nakuru y Naivasha"],
        [
          "Retour par la vallée du Grand Rift et ses deux lacs : Nakuru et sa faune nombreuse, puis Naivasha, ses hippopotames et ses oiseaux.",
          "Back through the Great Rift Valley and its two lakes: Nakuru and its plentiful wildlife, then Naivasha with its hippos and birds.",
          "Regreso por el valle del Gran Rift y sus dos lagos: Nakuru y su abundante fauna, y Naivasha, con sus hipopótamos y aves.",
        ],
        ["ev1", "cb3", "ev5"],
        [
          day(8,
            ["Masai Mara – lac Nakuru", "Masai Mara – Lake Nakuru", "Masai Mara – lago Nakuru"],
            [
              "Départ pour le parc national de Nakuru (220 km). Déjeuner au lodge, puis safari autour du lac.",
              "Leave for Lake Nakuru National Park (220 km). Lunch at the lodge, then a game drive around the lake.",
              "Salida hacia el parque nacional de Nakuru (220 km). Almuerzo en el lodge y safari alrededor del lago.",
            ], "ev1"),
          day(9,
            ["Nakuru – lac Naivasha – Nairobi", "Nakuru – Lake Naivasha – Nairobi", "Nakuru – lago Naivasha – Nairobi"],
            [
              "Route vers le lac Naivasha, lac d'eau douce de la vallée du Grand Rift, pour observer hippopotames et oiseaux. Retour à Nairobi (150 km).",
              "Drive to Lake Naivasha, a freshwater lake in the Great Rift Valley, to watch hippos and birdlife. Return to Nairobi (150 km).",
              "Ruta hacia el lago Naivasha, lago de agua dulce del valle del Gran Rift, para observar hipopótamos y aves. Regreso a Nairobi (150 km).",
            ], "cb3"),
        ]
      ),
      chapter(
        ["Amboseli, Tsavo et retour", "Amboseli, Tsavo and the journey home", "Amboseli, Tsavo y regreso"],
        [
          "La fin du voyage descend vers le sud : le train jusqu'à Emali, deux nuits face au Kilimandjaro à Amboseli, puis les éléphants rouges de Tsavo avant le retour à Nairobi en train.",
          "The end of the trip heads south: the train to Emali, two nights facing Kilimanjaro in Amboseli, then Tsavo's red elephants before returning to Nairobi by train.",
          "El final del viaje baja hacia el sur: el tren hasta Emali, dos noches frente al Kilimanjaro en Amboseli, y los elefantes rojos de Tsavo antes de volver a Nairobi en tren.",
        ],
        ["es1", "dm5", "ev6"],
        [
          day(10,
            ["Nairobi – Amboseli en train", "Nairobi – Amboseli by train", "Nairobi – Amboseli en tren"],
            [
              "Transfert à la gare de Nairobi et train jusqu'à Emali, puis route vers Amboseli (120 km). Déjeuner au lodge et premier safari en fin de journée.",
              "Transfer to Nairobi station and train to Emali, then drive to Amboseli (120 km). Lunch at the lodge and a first game drive at the end of the day.",
              "Traslado a la estación de Nairobi y tren hasta Emali, y ruta hacia Amboseli (120 km). Almuerzo en el lodge y primer safari al final del día.",
            ], "tr2"),
          day(11, T_AMBOSELI_DAY, AMBOSELI_DAY, "es1"),
          day(12,
            ["Amboseli – parc de Tsavo", "Amboseli – Tsavo National Park", "Amboseli – parque de Tsavo"],
            [
              "Route vers Tsavo (240 km) avec déjeuner pique-nique, puis safari dans le plus grand parc national du Kenya, celui des éléphants rouges.",
              "Drive to Tsavo (240 km) with a picnic lunch, then a game drive in Kenya's largest national park, home of the red elephants.",
              "Ruta hacia Tsavo (240 km) con almuerzo tipo pícnic, y safari en el mayor parque nacional de Kenia, el de los elefantes rojos.",
            ], "dm5"),
          day(13,
            ["Tsavo – Nairobi en train – envol", "Tsavo – Nairobi by train – flight home", "Tsavo – Nairobi en tren – vuelo de regreso"],
            [
              "Transfert à la gare de Voi et train vers Nairobi, avec déjeuner pique-nique. Arrêt dans un centre d'artisanat, dîner de viandes grillées au restaurant Carnivore, puis transfert à l'aéroport.",
              "Transfer to Voi station and train to Nairobi, with a picnic lunch. A stop at a craft centre, a grilled-meat dinner at the Carnivore restaurant, then transfer to the airport.",
              "Traslado a la estación de Voi y tren hacia Nairobi, con almuerzo tipo pícnic. Parada en un centro de artesanía, cena de carnes a la brasa en el restaurante Carnivore y traslado al aeropuerto.",
            ], "ev7"),
          day(14, T_HOME, HOME, "ev6"),
        ]
      ),
    ],
  }),

  // ───────────── 5. Détente à Mombasa & Safaris à Tsavo — 10J/7N ─────────────
  trip({
    slug: "kenya-mombasa-tsavo-plage-safari-10j",
    name: [
      "Kenya : plages de Mombasa et safari privé à Tsavo Est",
      "Kenya: Mombasa Beaches and a Private Safari in Tsavo East",
      "Kenia: playas de Mombasa y safari privado en Tsavo Este",
    ],
    tagline: [
      "Un séjour au bord de l'océan Indien, avec trois jours de safari en 4x4 privatif",
      "A stay on the Indian Ocean, with three days of safari in a private 4x4",
      "Una estancia junto al océano Índico, con tres días de safari en 4x4 privado",
    ],
    description: [
      "Un voyage pour ceux qui veulent surtout la plage, sans renoncer au safari : cinq nuits à Mombasa au bord de l'océan Indien et deux nuits dans la région de Tsavo Est, le plus grand parc du Kenya, en 4x4 privatif avec chauffeur-guide francophone. Départ garanti dès deux personnes, en hôtel 4* à Mombasa.",
      "A trip for those who mostly want the beach without giving up the safari: five nights in Mombasa on the Indian Ocean and two nights in the Tsavo East region, Kenya's largest park, in a private 4x4 with a French-speaking driver-guide. Guaranteed departure from two people, in a 4* hotel in Mombasa.",
      "Un viaje para quienes quieren sobre todo playa, sin renunciar al safari: cinco noches en Mombasa junto al océano Índico y dos noches en la región de Tsavo Este, el mayor parque de Kenia, en 4x4 privado con conductor-guía francófono. Salida garantizada desde dos personas, en hotel de 4* en Mombasa.",
    ],
    includes: [
      "Vols depuis la France,Transferts aéroport,5 nuits en hôtel 4* à Mombasa,2 nuits en lodge 3* à Tsavo,Demi-pension à Mombasa et pension complète en safari,4x4 privatif pendant le safari,Chauffeur-guide francophone en safari,Safaris au programme",
      "Flights from France,Airport transfers,5 nights in a 4* hotel in Mombasa,2 nights in a 3* lodge in Tsavo,Half board in Mombasa and full board on safari,Private 4x4 during the safari,French-speaking driver-guide on safari,Game drives listed",
      "Vuelos desde Francia,Traslados al aeropuerto,5 noches en hotel de 4* en Mombasa,2 noches en lodge de 3* en Tsavo,Media pensión en Mombasa y pensión completa en el safari,4x4 privado durante el safari,Conductor-guía francófono en el safari,Safaris del programa",
    ],
    price: 2206, nights: 7, departureFrom: "Paris", image: "dm1",
    theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,family", maxGuests: 6, order: -986,
    chapters: [
      chapter(
        ["Mombasa, l'océan Indien", "Mombasa and the Indian Ocean", "Mombasa, el océano Índico"],
        [
          "Le voyage commence par la plage : palmiers, sable clair et eau chaude, pour se remettre du vol avant de partir dans la brousse.",
          "The trip begins on the beach: palm trees, pale sand and warm water, to recover from the flight before heading into the bush.",
          "El viaje empieza por la playa: palmeras, arena clara y agua templada, para recuperarse del vuelo antes de adentrarse en la sabana.",
        ],
        ["dm1", "dm3", "dm2"],
        [
          day(1, T_FLIGHT, FLIGHT, "dm1"),
          day(2,
            ["Arrivée à Mombasa", "Arrival in Mombasa", "Llegada a Mombasa"],
            [
              "Accueil à l'aéroport de Mombasa et transfert à l'hôtel. Les chambres sont disponibles à partir de 14h. Dîner et nuit.",
              "Welcome at Mombasa airport and transfer to the hotel. Rooms are available from 2 pm. Dinner and overnight.",
              "Recibimiento en el aeropuerto de Mombasa y traslado al hotel. Las habitaciones están disponibles a partir de las 14 h. Cena y noche.",
            ], "dm3"),
          day(3, T_MOMBASA_FREE, MOMBASA_FREE, "dm2"),
        ]
      ),
      chapter(
        ["Tsavo Est", "Tsavo East", "Tsavo Este"],
        [
          "Tsavo Est couvre 11 747 km² de savane rouge. On y vient pour ses grands troupeaux d'éléphants, couverts de la poussière ocre qui leur donne leur couleur.",
          "Tsavo East covers 11,747 km² of red savannah. People come for its large herds of elephants, coated in the ochre dust that gives them their colour.",
          "Tsavo Este abarca 11.747 km² de sabana roja. Se viene por sus grandes manadas de elefantes, cubiertos del polvo ocre que les da su color.",
        ],
        ["dm5", "dm4", "dm6"],
        [
          day(4,
            ["Mombasa – Tsavo Est en 4x4", "Mombasa – Tsavo East by 4x4", "Mombasa – Tsavo Este en 4x4"],
            [
              "Départ en 4x4 avec votre chauffeur-guide, qui vous accompagne pendant tout le safari. Route vers le parc national de Tsavo (275 km), le plus grand du Kenya.",
              "Set off by 4x4 with your driver-guide, who stays with you throughout the safari. Drive to Tsavo National Park (275 km), the largest in Kenya.",
              "Salida en 4x4 con su conductor-guía, que le acompaña durante todo el safari. Ruta hacia el parque nacional de Tsavo (275 km), el mayor de Kenia.",
            ], "dm4"),
          day(5,
            ["Journée de safari à Tsavo Est", "A day on safari in Tsavo East", "Jornada de safari en Tsavo Este"],
            [
              "Safari en 4x4 pour explorer une partie de Tsavo Est (100 km dans la journée), à la rencontre de ses troupeaux d'éléphants rouges.",
              "A 4x4 game drive exploring part of Tsavo East (100 km over the day), in search of its herds of red elephants.",
              "Safari en 4x4 para explorar una parte de Tsavo Este (100 km en la jornada), al encuentro de sus manadas de elefantes rojos.",
            ], "dm5"),
        ]
      ),
      chapter(
        ["Retour à Mombasa", "Back to Mombasa", "Regreso a Mombasa"],
        [
          "Après un dernier safari à l'aube, retour sur la côte pour trois nuits de repos au bord de l'eau.",
          "After a last game drive at dawn, back to the coast for three restful nights by the water.",
          "Tras un último safari al amanecer, regreso a la costa para tres noches de descanso junto al agua.",
        ],
        ["dm7", "dk91", "dm3"],
        [
          day(6,
            ["Dernier safari et retour sur la côte", "Last game drive and return to the coast", "Último safari y regreso a la costa"],
            [
              "Départ matinal pour un dernier safari dans Tsavo Est, puis retour au lodge pour le petit-déjeuner. Route vers Mombasa (275 km) pour reprendre le séjour balnéaire.",
              "An early start for a last game drive in Tsavo East, then back to the lodge for breakfast. Drive to Mombasa (275 km) to resume the beach stay.",
              "Salida temprana para un último safari en Tsavo Este, y regreso al lodge para el desayuno. Ruta hacia Mombasa (275 km) para retomar la estancia de playa.",
            ], "dm6"),
          day(7, T_MOMBASA_FREE, MOMBASA_FREE, "dm7"),
          day(8, T_MOMBASA_FREE, MOMBASA_FREE, "dk91"),
          day(9,
            ["Mombasa – envol", "Mombasa – flight home", "Mombasa – vuelo de regreso"],
            [
              "Selon les horaires de vol, transfert à l'aéroport de Mombasa et vol retour vers la France. Dîner et nuit à bord.",
              "Depending on flight times, transfer to Mombasa airport and flight back to France. Dinner and night on board.",
              "Según el horario del vuelo, traslado al aeropuerto de Mombasa y vuelo de regreso a Francia. Cena y noche a bordo.",
            ], "dm3"),
          day(10, T_HOME, HOME, "dm1"),
        ]
      ),
    ],
  }),

  // ───────────── 6. Trains, Savanes & Plages — 9J/7N ─────────────
  trip({
    slug: "kenya-train-savanes-plages-9j",
    name: [
      "Kenya en privatif : train Madaraka, Amboseli, Tsavo Ouest et Mombasa",
      "Private Kenya: The Madaraka Train, Amboseli, Tsavo West and Mombasa",
      "Kenia en privado: tren Madaraka, Amboseli, Tsavo Oeste y Mombasa",
    ],
    tagline: [
      "La savane vue du train en première classe, deux parcs en 4x4 privatif, puis la plage",
      "The savannah seen from a first-class train, two parks by private 4x4, then the beach",
      "La sabana vista desde el tren en primera clase, dos parques en 4x4 privado, y la playa",
    ],
    description: [
      "Un circuit privatif, garanti dès deux personnes, qui remplace une partie des longues routes par le train Madaraka Express en première classe. Au programme : Amboseli et la vue sur le Kilimandjaro, Tsavo Ouest entre les collines de Chyulu et la plaine, puis trois nuits à Mombasa au bord de l'océan Indien.",
      "A private circuit, guaranteed from two people, that swaps some of the long drives for the Madaraka Express train in first class. On the programme: Amboseli and its view of Kilimanjaro, Tsavo West between the Chyulu Hills and the plain, then three nights in Mombasa on the Indian Ocean.",
      "Un circuito privado, garantizado desde dos personas, que sustituye parte de las largas carreteras por el tren Madaraka Express en primera clase. En el programa: Amboseli y la vista del Kilimanjaro, Tsavo Oeste entre las colinas de Chyulu y la llanura, y tres noches en Mombasa junto al océano Índico.",
    ],
    includes: [
      "Vols depuis la France,Transferts aéroport,Trains en 1ère classe Nairobi – Emali et Voi – Mombasa,7 nuits en hôtels et camps 3* à 4*,Pension selon programme,4x4 privatif,Chauffeur-guide francophone,Safaris et visites au programme",
      "Flights from France,Airport transfers,First-class trains Nairobi – Emali and Voi – Mombasa,7 nights in 3* to 4* hotels and camps,Meals as per programme,Private 4x4,French-speaking driver-guide,Game drives and visits listed",
      "Vuelos desde Francia,Traslados al aeropuerto,Trenes en 1.ª clase Nairobi – Emali y Voi – Mombasa,7 noches en hoteles y campamentos de 3* a 4*,Comidas según programa,4x4 privado,Conductor-guía francófono,Safaris y visitas del programa",
    ],
    price: 3039, nights: 7, departureFrom: "Paris", image: "tr1",
    theme: "adventure", feeling: "contentment", travelerTypes: "couples,honeymoon,family", maxGuests: 6, order: -985,
    chapters: [
      chapter(
        ["Nairobi", "Nairobi", "Nairobi"],
        [
          "Arrivée à Nairobi et une nuit sur place avant de monter dans le train du lendemain.",
          "Arrival in Nairobi and one night there before boarding the next day's train.",
          "Llegada a Nairobi y una noche allí antes de subir al tren del día siguiente.",
        ],
        ["tr2", "tr4", "tr5"],
        [
          day(1, T_ARRIVE,
            [
              "Envol à destination du Kenya. À l'arrivée à Nairobi, accueil par notre représentant et transfert à l'hôtel. Dîner libre et nuit.",
              "Flight to Kenya. On arrival in Nairobi, meet our representative and transfer to the hotel. Dinner at leisure and overnight.",
              "Vuelo con destino a Kenia. A la llegada a Nairobi, recibimiento por nuestro representante y traslado al hotel. Cena libre y noche.",
            ], "tr4"),
        ]
      ),
      chapter(
        ["Amboseli", "Amboseli", "Amboseli"],
        [
          "Le nom d'Amboseli vient du mot masaï « Empussel », l'endroit salé et poussiéreux. Le parc borde la frontière tanzanienne, sous le Kilimandjaro.",
          "The name Amboseli comes from the Maasai word \"Empussel\", the salty, dusty place. The park lies along the Tanzanian border, beneath Kilimanjaro.",
          "El nombre de Amboseli viene de la palabra masái «Empussel», el lugar salado y polvoriento. El parque bordea la frontera tanzana, bajo el Kilimanjaro.",
        ],
        ["tr1", "tr3", "es3"],
        [
          day(2,
            ["Nairobi – train Madaraka Express – Amboseli", "Nairobi – Madaraka Express train – Amboseli", "Nairobi – tren Madaraka Express – Amboseli"],
            [
              "Transfert à la gare de Nairobi et embarquement en première classe à bord du Madaraka Express jusqu'à Emali (environ 1h30 de trajet), puis route vers Amboseli.",
              "Transfer to Nairobi station and board the Madaraka Express in first class as far as Emali (about 1 hour 30), then drive to Amboseli.",
              "Traslado a la estación de Nairobi y embarque en primera clase en el Madaraka Express hasta Emali (aproximadamente 1 h 30 de trayecto), y ruta hacia Amboseli.",
            ], "tr2"),
          day(3,
            ["Journée de safari en 4x4 à Amboseli", "A day on safari by 4x4 in Amboseli", "Jornada de safari en 4x4 en Amboseli"],
            [
              "Départ en 4x4 pour une journée de safari au cœur du parc national d'Amboseli, le long de la frontière tanzanienne.",
              "Set off by 4x4 for a full day's safari in the heart of Amboseli National Park, along the Tanzanian border.",
              "Salida en 4x4 para una jornada de safari en el corazón del parque nacional de Amboseli, junto a la frontera tanzana.",
            ], "tr1"),
        ]
      ),
      chapter(
        ["Tsavo Ouest", "Tsavo West", "Tsavo Oeste"],
        [
          "La route passe au nord du Kilimandjaro et au sud des collines de Chyulu avant d'entrer dans Tsavo Ouest, dont les grandes plaines à végétation rase facilitent l'observation des animaux.",
          "The road runs north of Kilimanjaro and south of the Chyulu Hills before entering Tsavo West, whose wide plains and low vegetation make wildlife easy to spot.",
          "La carretera pasa al norte del Kilimanjaro y al sur de las colinas de Chyulu antes de entrar en Tsavo Oeste, cuyas grandes llanuras de vegetación baja facilitan la observación de los animales.",
        ],
        ["tr3", "tr5", "es4"],
        [
          day(4,
            ["Amboseli – Tsavo Ouest", "Amboseli – Tsavo West", "Amboseli – Tsavo Oeste"],
            [
              "Route vers Tsavo Ouest, entre le Kilimandjaro et les collines de Chyulu, puis entrée dans le parc national.",
              "Drive to Tsavo West, between Kilimanjaro and the Chyulu Hills, then enter the national park.",
              "Ruta hacia Tsavo Oeste, entre el Kilimanjaro y las colinas de Chyulu, y entrada al parque nacional.",
            ], "tr3"),
        ]
      ),
      chapter(
        ["Mombasa et l'océan Indien", "Mombasa and the Indian Ocean", "Mombasa y el océano Índico"],
        [
          "Un second trajet en train mène à la côte, pour trois nuits à Mombasa entre plage et piscine.",
          "A second train ride leads to the coast, for three nights in Mombasa between beach and pool.",
          "Un segundo trayecto en tren lleva a la costa, para tres noches en Mombasa entre playa y piscina.",
        ],
        ["tr7", "tr6", "es7"],
        [
          day(5,
            ["Tsavo Ouest – train Madaraka Express – Mombasa", "Tsavo West – Madaraka Express train – Mombasa", "Tsavo Oeste – tren Madaraka Express – Mombasa"],
            [
              "Dernière matinée dans le parc de Tsavo Ouest, puis transfert à la gare de Voi et train en première classe jusqu'à Mombasa.",
              "A last morning in Tsavo West, then transfer to Voi station and first-class train to Mombasa.",
              "Última mañana en el parque de Tsavo Oeste, y traslado a la estación de Voi y tren en primera clase hasta Mombasa.",
            ], "tr5"),
          day(6, T_MOMBASA_FREE, MOMBASA_FREE, "tr7"),
          day(7, T_MOMBASA_FREE, MOMBASA_FREE, "tr6"),
          day(8,
            ["Mombasa – envol", "Mombasa – flight home", "Mombasa – vuelo de regreso"],
            [
              "Selon les horaires de vol, transfert à l'aéroport de Mombasa et vol retour vers la France.",
              "Depending on flight times, transfer to Mombasa airport and flight back to France.",
              "Según el horario del vuelo, traslado al aeropuerto de Mombasa y vuelo de regreso a Francia.",
            ], "es7"),
          day(9, T_HOME, HOME, "tr7"),
        ]
      ),
    ],
  }),

  // ───────────── 7. Combiné Kenya & Tanzanie — 12J/9N ─────────────
  trip({
    slug: "kenya-tanzanie-combine-safari-12j",
    name: [
      "Kenya et Tanzanie : d'Amboseli au Serengeti par le cratère du Ngorongoro",
      "Kenya and Tanzania: From Amboseli to the Serengeti via the Ngorongoro Crater",
      "Kenia y Tanzania: de Amboseli al Serengeti por el cráter del Ngorongoro",
    ],
    tagline: [
      "Deux pays et six parcs en 4x4, de la vallée du Rift aux plaines du Serengeti",
      "Two countries and six parks by 4x4, from the Rift Valley to the Serengeti plains",
      "Dos países y seis parques en 4x4, del valle del Rift a las llanuras del Serengeti",
    ],
    description: [
      "Un seul voyage pour les grands parcs des deux pays : les lacs Nakuru et Naivasha, puis Amboseli côté Kenya ; Tarangire et ses baobabs, le cratère du Ngorongoro et le Serengeti côté Tanzanie. Les safaris se font en 4x4 à toit ouvrant, à six personnes au maximum, avec un vol intérieur pour quitter le Serengeti. Une extension balnéaire à Zanzibar (15 jours / 12 nuits) est également proposée.",
      "One trip for the great parks of both countries: lakes Nakuru and Naivasha, then Amboseli on the Kenyan side; Tarangire and its baobabs, the Ngorongoro Crater and the Serengeti on the Tanzanian side. Game drives are in a pop-top 4x4 with six people at most, with an internal flight out of the Serengeti. A beach extension in Zanzibar (15 days / 12 nights) is also available.",
      "Un solo viaje para los grandes parques de los dos países: los lagos Nakuru y Naivasha, y Amboseli del lado keniano; Tarangire y sus baobabs, el cráter del Ngorongoro y el Serengeti del lado tanzano. Los safaris se hacen en 4x4 con techo abatible, con seis personas como máximo, y un vuelo interior para salir del Serengeti. También se ofrece una extensión de playa en Zanzíbar (15 días / 12 noches).",
    ],
    includes: [
      "Vols depuis la France,Vol intérieur Serengeti – Arusha,Transferts aéroport,9 nuits en hôtels lodges et camps 3* à 4*,9 petits-déjeuners 9 déjeuners et 9 dîners,4x4 à toit ouvrant,Guides francophones au Kenya et en Tanzanie,Visites et safaris au programme",
      "Flights from France,Internal flight Serengeti – Arusha,Airport transfers,9 nights in 3* to 4* hotels lodges and camps,9 breakfasts 9 lunches and 9 dinners,Pop-top 4x4,French-speaking guides in Kenya and Tanzania,Visits and game drives listed",
      "Vuelos desde Francia,Vuelo interior Serengeti – Arusha,Traslados al aeropuerto,9 noches en hoteles lodges y campamentos de 3* a 4*,9 desayunos 9 almuerzos y 9 cenas,4x4 con techo abatible,Guías francófonos en Kenia y Tanzania,Visitas y safaris del programa",
    ],
    price: 3612, nights: 9, departureFrom: "Bruxelles", image: "cb1",
    theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 6, order: -984,
    chapters: [
      chapter(
        ["Lacs Nakuru et Naivasha", "Lakes Nakuru and Naivasha", "Lagos Nakuru y Naivasha"],
        [
          "Le voyage commence dans la vallée du Rift : le lac Nakuru, où les léopards se reposent dans les acacias, puis le lac Naivasha et la marche à pied sur Crescent Island.",
          "The trip starts in the Rift Valley: Lake Nakuru, where leopards rest in the acacias, then Lake Naivasha and a walk on Crescent Island.",
          "El viaje empieza en el valle del Rift: el lago Nakuru, donde los leopardos descansan en las acacias, y el lago Naivasha con el paseo a pie por Crescent Island.",
        ],
        ["cb3", "ev1", "cb7"],
        [
          day(1, T_FLIGHT, FLIGHT, "cb7"),
          day(2,
            ["Nairobi – lac Nakuru", "Nairobi – Lake Nakuru", "Nairobi – lago Nakuru"],
            [
              "À l'arrivée à Nairobi, route vers le lac Nakuru (190 km). Déjeuner libre, installation, dîner et nuit au camp de toile.",
              "On arrival in Nairobi, drive to Lake Nakuru (190 km). Lunch at leisure, check-in, dinner and overnight at the tented camp.",
              "A la llegada a Nairobi, ruta hacia el lago Nakuru (190 km). Almuerzo libre, instalación, cena y noche en el campamento de lona.",
            ], "ev1"),
          day(3,
            ["Safari à Nakuru – lac Naivasha", "Game drive at Nakuru – Lake Naivasha", "Safari en Nakuru – lago Naivasha"],
            [
              "Safari autour du lac Nakuru, dont l'étendue attire de nombreux animaux, avec une chance d'apercevoir les léopards dans les acacias. Route vers le lac Naivasha (70 km).",
              "A game drive around Lake Nakuru, whose size draws many animals, with a chance of spotting leopards in the acacias. Drive to Lake Naivasha (70 km).",
              "Safari alrededor del lago Nakuru, cuya extensión atrae a numerosos animales, con la posibilidad de ver leopardos en las acacias. Ruta hacia el lago Naivasha (70 km).",
            ], "cb3"),
        ]
      ),
      chapter(
        ["Amboseli", "Amboseli", "Amboseli"],
        [
          "Entre marécages et savane, Amboseli est l'un des meilleurs endroits pour observer les éléphants, avec quelque 400 espèces d'oiseaux recensées.",
          "Between marsh and savannah, Amboseli is one of the best places to watch elephants, with some 400 recorded bird species.",
          "Entre pantanos y sabana, Amboseli es uno de los mejores lugares para observar elefantes, con unas 400 especies de aves registradas.",
        ],
        ["cb6", "es1", "tr1"],
        [
          day(4,
            ["Naivasha, Crescent Island – Amboseli", "Naivasha, Crescent Island – Amboseli", "Naivasha, Crescent Island – Amboseli"],
            [
              "Navigation d'environ une heure sur le lac Naivasha, puis safari à pied sur Crescent Island. Après le déjeuner, longue route vers Amboseli (400 km).",
              "About an hour's boat trip on Lake Naivasha, then a walking safari on Crescent Island. After lunch, a long drive to Amboseli (400 km).",
              "Navegación de aproximadamente una hora por el lago Naivasha, y safari a pie en Crescent Island. Tras el almuerzo, larga ruta hacia Amboseli (400 km).",
            ], "cb3"),
          day(5,
            ["Safari à Amboseli", "Game drive in Amboseli", "Safari en Amboseli"],
            [
              "Safari à la découverte de la faune et des paysages du parc, entre marécages et savane : éléphants et centaines d'espèces d'oiseaux.",
              "A game drive exploring the park's wildlife and landscapes, between marsh and savannah: elephants and hundreds of bird species.",
              "Safari para descubrir la fauna y los paisajes del parque, entre pantanos y sabana: elefantes y cientos de especies de aves.",
            ], "cb6"),
        ]
      ),
      chapter(
        ["Tarangire et Karatu", "Tarangire and Karatu", "Tarangire y Karatu"],
        [
          "Passage en Tanzanie par le poste-frontière de Namanga. Le parc de Tarangire se reconnaît à ses baobabs et à ses grands acacias parasols ; Karatu, à ses villages et ses plantations de café.",
          "Into Tanzania through the Namanga border post. Tarangire is recognisable by its baobabs and tall umbrella acacias; Karatu by its villages and coffee plantations.",
          "Paso a Tanzania por el puesto fronterizo de Namanga. El parque de Tarangire se reconoce por sus baobabs y sus grandes acacias; Karatu, por sus pueblos y plantaciones de café.",
        ],
        ["cb5", "cb4", "cb7"],
        [
          day(6,
            ["Amboseli – frontière de Namanga – Kilimandjaro", "Amboseli – Namanga border – Kilimanjaro", "Amboseli – frontera de Namanga – Kilimanjaro"],
            [
              "Dernier safari matinal dans le parc d'Amboseli et déjeuner pique-nique. Passage de la frontière tanzanienne à Namanga et rencontre avec votre nouveau guide francophone (250 km).",
              "A last early game drive in Amboseli and a picnic lunch. Cross the Tanzanian border at Namanga and meet your new French-speaking guide (250 km).",
              "Último safari matinal en el parque de Amboseli y almuerzo tipo pícnic. Paso de la frontera tanzana en Namanga y encuentro con su nuevo guía francófono (250 km).",
            ], "cb6"),
          day(7,
            ["Kilimandjaro – parc de Tarangire", "Kilimanjaro – Tarangire National Park", "Kilimanjaro – parque de Tarangire"],
            [
              "Route vers le parc national de Tarangire (230 km) pour une demi-journée de safari parmi les baobabs et les grands acacias parasols.",
              "Drive to Tarangire National Park (230 km) for a half-day game drive among the baobabs and tall umbrella acacias.",
              "Ruta hacia el parque nacional de Tarangire (230 km) para medio día de safari entre los baobabs y las grandes acacias.",
            ], "cb5"),
          day(8,
            ["Tarangire – Mto wa Mbu – Karatu", "Tarangire – Mto wa Mbu – Karatu", "Tarangire – Mto wa Mbu – Karatu"],
            [
              "Route vers Karatu (125 km) par le village de Mto wa Mbu : déjeuner local, visite du village en tuk-tuk, puis découverte d'une plantation de café avec dégustation.",
              "Drive to Karatu (125 km) via the village of Mto wa Mbu: a local lunch, a tuk-tuk tour of the village, then a visit to a coffee plantation with a tasting.",
              "Ruta hacia Karatu (125 km) por el pueblo de Mto wa Mbu: almuerzo local, visita del pueblo en tuk-tuk y descubrimiento de una plantación de café con degustación.",
            ], "cb4"),
        ]
      ),
      chapter(
        ["Ngorongoro et Serengeti", "Ngorongoro and the Serengeti", "Ngorongoro y Serengeti"],
        [
          "Le cratère du Ngorongoro, classé au patrimoine mondial de l'UNESCO, dépasse vingt kilomètres de diamètre. Au-delà commencent les grandes plaines du Serengeti, leurs termitières et les rochers où se reposent les prédateurs.",
          "The Ngorongoro Crater, a UNESCO World Heritage site, is more than twenty kilometres across. Beyond it begin the great plains of the Serengeti, with their termite mounds and the rocks where predators rest.",
          "El cráter del Ngorongoro, declarado Patrimonio Mundial por la UNESCO, supera los veinte kilómetros de diámetro. Más allá comienzan las grandes llanuras del Serengeti, con sus termiteros y las rocas donde descansan los depredadores.",
        ],
        ["cb2", "cb1", "ev4"],
        [
          day(9,
            ["Karatu – cratère du Ngorongoro – Serengeti", "Karatu – Ngorongoro Crater – Serengeti", "Karatu – cráter del Ngorongoro – Serengeti"],
            [
              "Safari au fond du cratère du Ngorongoro, vaste de plus de 20 km de diamètre, puis route vers le Serengeti (150 km).",
              "A game drive on the floor of the Ngorongoro Crater, more than 20 km across, then drive to the Serengeti (150 km).",
              "Safari en el fondo del cráter del Ngorongoro, de más de 20 km de diámetro, y ruta hacia el Serengeti (150 km).",
            ], "cb2"),
          day(10,
            ["Journée de safari dans le Serengeti", "A day on safari in the Serengeti", "Jornada de safari en el Serengeti"],
            [
              "Journée de safari à travers le parc national du Serengeti : grandes plaines, termitières et rochers gris où les prédateurs se prélassent entre deux chasses.",
              "A full day's safari across Serengeti National Park: wide plains, termite mounds and grey rocks where predators laze between hunts.",
              "Jornada de safari por el parque nacional del Serengeti: grandes llanuras, termiteros y rocas grises donde los depredadores descansan entre dos cacerías.",
            ], "cb1"),
          day(11,
            ["Serengeti – Arusha – envol", "Serengeti – Arusha – flight home", "Serengeti – Arusha – vuelo de regreso"],
            [
              "Nouveau safari dans les plaines du Serengeti et déjeuner pique-nique. Vol intérieur vers Arusha, puis transfert à l'aéroport de Kilimandjaro pour le vol retour.",
              "Another game drive on the Serengeti plains and a picnic lunch. Internal flight to Arusha, then transfer to Kilimanjaro airport for the flight home.",
              "Nuevo safari por las llanuras del Serengeti y almuerzo tipo pícnic. Vuelo interior a Arusha, y traslado al aeropuerto de Kilimanjaro para el vuelo de regreso.",
            ], "ev4"),
          day(12, T_HOME, HOME, "cb2"),
        ]
      ),
    ],
  }),
];

async function main() {
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
