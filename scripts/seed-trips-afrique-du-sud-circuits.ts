// South Africa circuits — 6 journey-format trips for the existing "afrique-du-sud" destination.
// One trip per circuit; season, airline and Victoria Falls / Chobe extension variants are
// described inside the trip. Prices are per-person "from" prices. Supplier product ids are kept
// in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-afrique-du-sud-circuits.ts
// Requires scripts/upload-images-afrique-du-sud-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "afrique-du-sud-safari-dream-kruger-eswatini-10j": ["388018", "388019", "248978", "388098", "248979", "388099", "248980"],
  "afrique-du-sud-le-cap-kruger-eswatini-13j": ["391101", "398140", "391098", "398141", "85138", "288378", "391099", "398138", "85259", "288379", "391100", "398139", "85260", "288380"],
  "afrique-du-sud-intimiste-petit-groupe-13j": ["389398", "389098", "399099", "413578", "265378", "285058", "389118", "399100", "263619", "285059", "389119", "399578", "263620", "285898"],
  "afrique-du-sud-drakensberg-lesotho-le-cap-15j": ["140723", "408198"],
  "afrique-du-sud-grand-tour-route-jardin-18j": ["390759", "398161", "390718", "398158", "251558", "291078", "390738", "400338", "251559", "291098", "390758", "398160", "254258", "291099"],
  "afrique-du-sud-le-cap-kruger-victoria-chobe-13j": ["409138", "273318"],
};

// ── Shared texts ──
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const flyTo = (fr: string, en: string, es: string): [L3, L3] => [
  [`Envol pour ${fr}`, `Flight to ${en}`, `Vuelo a ${es}`],
  [
    `Envol avec escale(s) à destination de ${fr}. Dîner et nuit à bord.`,
    `Flight with stopover(s) to ${en}. Dinner and night on board.`,
    `Vuelo con escala(s) con destino a ${es}. Cena y noche a bordo.`,
  ],
];
const T_BLYDE: L3 = ["Le canyon de la Blyde River", "The Blyde River Canyon", "El cañón del río Blyde"];
const BLYDE: L3 = [
  "Journée sur la route des Panoramas, le long du canyon de la Blyde River, l'un des plus grands canyons verdoyants au monde : les marmites de géants de Bourke's Luck, creusées par l'eau dans la roche ocre, puis les points de vue sur les falaises et la vallée.",
  "A day on the Panorama Route along the Blyde River Canyon, one of the largest green canyons in the world: the Bourke's Luck potholes, carved by water in the ochre rock, then the viewpoints over the cliffs and the valley.",
  "Jornada por la ruta de los Panoramas, a lo largo del cañón del río Blyde, uno de los mayores cañones verdes del mundo: las marmitas de gigante de Bourke's Luck, excavadas por el agua en la roca ocre, y los miradores sobre los acantilados y el valle.",
];
const T_PENINSULA: L3 = ["La péninsule du Cap", "The Cape Peninsula", "La península del Cabo"];
const PENINSULA: L3 = [
  "Journée sur la péninsule : les plages de Clifton et Camps Bay, une sortie en bateau jusqu'à l'île aux phoques de Duiker, la route de Chapman's Peak taillée dans la falaise, les manchots de Boulders Beach à Simon's Town, un déjeuner de poisson face à l'océan, puis la réserve du cap de Bonne-Espérance.",
  "A day on the peninsula: the beaches of Clifton and Camps Bay, a boat trip to the seal colony on Duiker Island, Chapman's Peak drive cut into the cliff, the penguins of Boulders Beach in Simon's Town, a fish lunch facing the ocean, then the Cape of Good Hope reserve.",
  "Jornada en la península: las playas de Clifton y Camps Bay, una salida en barco a la isla de las focas de Duiker, la carretera de Chapman's Peak tallada en el acantilado, los pingüinos de Boulders Beach en Simon's Town, un almuerzo de pescado frente al océano y la reserva del cabo de Buena Esperanza.",
];
const T_ROBBEN: L3 = ["Robben Island et le Waterfront", "Robben Island and the Waterfront", "Robben Island y el Waterfront"];
const ROBBEN: L3 = [
  "Visite guidée de Robben Island, selon la météo : la carrière, les bunkers et la prison de haute sécurité où Nelson Mandela passa dix-huit ans, dont sa cellule. Déjeuner sur le Waterfront et temps libre sur les anciens docks.",
  "A guided visit to Robben Island, weather permitting: the quarry, the bunkers and the high-security prison where Nelson Mandela spent eighteen years, including his cell. Lunch on the Waterfront and free time on the old docks.",
  "Visita guiada a Robben Island, si el tiempo lo permite: la cantera, los búnkeres y la prisión de alta seguridad donde Nelson Mandela pasó dieciocho años, incluida su celda. Almuerzo en el Waterfront y tiempo libre en los antiguos muelles.",
];
const T_SOWETO: L3 = ["Soweto et Johannesburg", "Soweto and Johannesburg", "Soweto y Johannesburgo"];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "afrique-du-sud",
    imagePrefix: "afs",
    season: { label: ["Mai à oct", "May to Oct", "May a oct"], months: "may,june,july,august,september,october" },
  });

  const journeyTrips = [
    // ───────────── 1. Safari Dream — 10J/7N ─────────────
    trip({
      slug: "afrique-du-sud-safari-dream-kruger-eswatini-10j",
      name: [
        "Afrique du Sud : Kruger, Blyde River et Eswatini",
        "South Africa: Kruger, Blyde River and Eswatini",
        "Sudáfrica: Kruger, Blyde River y Esuatini",
      ],
      tagline: [
        "Dix jours centrés sur les safaris, du parc Kruger aux réserves du royaume d'Eswatini",
        "Ten days built around safaris, from Kruger Park to the reserves of the kingdom of Eswatini",
        "Diez días centrados en los safaris, del parque Kruger a las reservas del reino de Esuatini",
      ],
      description: [
        "Le format le plus court pour voir la faune sud-africaine : deux jours dans la région du Kruger, à la recherche des Big Five, avec une nuit en camp de tentes et un dîner boma sous les étoiles. Le voyage passe aussi par le canyon de la Blyde River, entre dans le petit royaume d'Eswatini pour un safari aux rhinocéros à Hlane et une marche à Mlilwane, et se termine à Soweto et au musée de l'Apartheid. Le circuit peut se prolonger aux chutes Victoria (13 jours, à partir de 3 639 € par personne) puis au parc de Chobe, au Botswana (14 jours, à partir de 4 479 €).",
        "The shortest way to see South Africa's wildlife: two days in the Kruger area, looking for the Big Five, with a night in a tented camp and a boma dinner under the stars. The trip also takes in the Blyde River Canyon, enters the small kingdom of Eswatini for a rhino safari in Hlane and a walk in Mlilwane, and ends in Soweto and at the Apartheid Museum. The tour can be extended to Victoria Falls (13 days, from €3,639 per person) and then to Chobe Park in Botswana (14 days, from €4,479).",
        "El formato más corto para ver la fauna sudafricana: dos días en la región del Kruger, en busca de los Cinco Grandes, con una noche en campamento de tiendas y una cena boma bajo las estrellas. El viaje pasa también por el cañón del río Blyde, entra en el pequeño reino de Esuatini para un safari de rinocerontes en Hlane y una caminata en Mlilwane, y termina en Soweto y en el museo del Apartheid. El circuito puede prolongarse a las cataratas Victoria (13 días, desde 3.639 € por persona) y al parque de Chobe, en Botsuana (14 días, desde 4.479 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtels et camp 3* et 4*,Pension selon programme,Safaris avec rangers,Guide accompagnateur francophone",
        "Flights from France,Airport transfers,7 nights in 3* and 4* hotels and camp,Meals as per programme,Safaris with rangers,French-speaking tour guide",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hoteles y campamento de 3* y 4*,Comidas según programa,Safaris con rangers,Guía acompañante francófono",
      ],
      price: 1849, nights: 7, departureFrom: "Paris", image: "sd1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 12, order: -94000,
      chapters: [
        chapter(
          ["Johannesburg et la Blyde River", "Johannesburg and the Blyde River", "Johannesburgo y el río Blyde"],
          [
            "Un premier regard sur Johannesburg, puis la route des Panoramas et l'un des plus grands canyons verdoyants du monde.",
            "A first look at Johannesburg, then the Panorama Route and one of the largest green canyons in the world.",
            "Una primera mirada a Johannesburgo y, después, la ruta de los Panoramas y uno de los mayores cañones verdes del mundo.",
          ],
          ["sd4", "sd2", "sd3"],
          [
            day(1, ...flyTo("Johannesburg", "Johannesburg", "Johannesburgo"), "sd3"),
            day(2,
              ["Johannesburg", "Johannesburg", "Johannesburgo"],
              [
                "Accueil par votre guide francophone et tour panoramique de Johannesburg, cœur économique et culturel du pays, entre quartiers d'affaires et sites emblématiques. Dîner et nuit à l'hôtel.",
                "Welcome by your French-speaking guide and a panoramic tour of Johannesburg, the country's economic and cultural heart, between business districts and landmark sites. Dinner and night at the hotel.",
                "Recibimiento por su guía francófono y recorrido panorámico por Johannesburgo, corazón económico y cultural del país, entre barrios de negocios y lugares emblemáticos. Cena y noche en el hotel.",
              ], "sd3"),
            day(3, T_BLYDE, BLYDE, "sd2"),
          ]
        ),
        chapter(
          ["Le parc Kruger", "Kruger Park", "El parque Kruger"],
          [
            "La réserve la plus riche du continent : 137 espèces de mammifères, près de 500 espèces d'oiseaux, et les Big Five.",
            "The richest reserve on the continent: 137 mammal species, nearly 500 bird species, and the Big Five.",
            "La reserva más rica del continente: 137 especies de mamíferos, casi 500 especies de aves y los Cinco Grandes.",
          ],
          ["sd1", "sd5", "sd6"],
          [
            day(4,
              ["Safari dans le parc Kruger", "Safari in Kruger Park", "Safari en el parque Kruger"],
              [
                "Départ au lever du jour pour un safari en bus dans le parc national Kruger, aussi grand que le pays de Galles, à la recherche de l'éléphant, du buffle, du léopard, du lion et du rhinocéros, mais aussi des guépards, girafes et hippopotames. Nuit en camp de tentes.",
                "Leave at sunrise for a safari by coach in Kruger National Park, as large as Wales, looking for elephant, buffalo, leopard, lion and rhino, as well as cheetahs, giraffes and hippos. Night in a tented camp.",
                "Salida al amanecer para un safari en autobús por el parque nacional Kruger, tan grande como Gales, en busca del elefante, el búfalo, el leopardo, el león y el rinoceronte, además de guepardos, jirafas e hipopótamos. Noche en campamento de tiendas.",
              ], "sd5"),
            day(5,
              ["Safari en 4x4 et dîner boma", "4x4 safari and boma dinner", "Safari en 4x4 y cena boma"],
              [
                "Safari en 4x4 au lever du jour dans le parc Kruger, retour au camp en fin de matinée et après-midi libre au bord de la piscine. Apéritif au coucher du soleil, puis dîner boma autour d'un grand feu, sous les étoiles si le temps le permet.",
                "A sunrise 4x4 safari in Kruger Park, back to camp in the late morning and a free afternoon by the pool. A sundowner, then a boma dinner around a large fire, under the stars if the weather allows.",
                "Safari en 4x4 al amanecer en el parque Kruger, regreso al campamento a media mañana y tarde libre junto a la piscina. Aperitivo al atardecer y cena boma alrededor de una gran hoguera, bajo las estrellas si el tiempo lo permite.",
              ], "sd6"),
          ]
        ),
        chapter(
          ["Le royaume d'Eswatini", "The kingdom of Eswatini", "El reino de Esuatini"],
          [
            "Un petit royaume indépendant, vallonné et verdoyant, surnommé la Suisse de l'Afrique, et ses réserves.",
            "A small independent kingdom, green and hilly, nicknamed the Switzerland of Africa, and its reserves.",
            "Un pequeño reino independiente, verde y ondulado, apodado la Suiza de África, y sus reservas.",
          ],
          ["sd7", "in6", "sd5"],
          [
            day(6,
              ["Eswatini : safari aux rhinocéros à Hlane", "Eswatini: a rhino safari in Hlane", "Esuatini: safari de rinocerontes en Hlane"],
              [
                "Route vers le royaume d'Eswatini et passage de la frontière. Dans la réserve royale de Hlane, connue pour sa forte concentration de rhinocéros et son programme de réintroduction du lion, safari en 4x4 à la recherche des rhinocéros.",
                "Drive to the kingdom of Eswatini and cross the border. In Hlane Royal Reserve, known for its high concentration of rhinos and its lion reintroduction programme, a 4x4 safari in search of rhinos.",
                "Carretera hacia el reino de Esuatini y paso de la frontera. En la reserva real de Hlane, conocida por su gran concentración de rinocerontes y su programa de reintroducción del león, safari en 4x4 en busca de rinocerontes.",
              ], "in6"),
            day(7,
              ["Marche à Mlilwane et marché eswati", "A walk in Mlilwane and an Eswati market", "Caminata en Mlilwane y mercado suazi"],
              [
                "Safari pédestre matinal d'environ une heure dans la réserve de Mlilwane, entre montagnes et prairies. Visite des centres d'artisanat et d'un marché eswati, pour les sculptures sur bois, les tissages et la vannerie. Retour en Afrique du Sud vers Waterval Boven.",
                "A morning walking safari of about an hour in Mlilwane reserve, between mountains and grassland. Visit the craft centres and an Eswati market, for wood carvings, weaving and basketry. Return to South Africa towards Waterval Boven.",
                "Safari a pie matinal de alrededor de una hora en la reserva de Mlilwane, entre montañas y praderas. Visita a los centros de artesanía y a un mercado suazi, con tallas de madera, tejidos y cestería. Regreso a Sudáfrica hacia Waterval Boven.",
              ], "sd7"),
          ]
        ),
        chapter(
          [...T_SOWETO] as L3,
          [
            "Le voyage se termine par l'histoire récente du pays : le township de Soweto et le musée de l'Apartheid.",
            "The trip ends with the country's recent history: the township of Soweto and the Apartheid Museum.",
            "El viaje termina con la historia reciente del país: el township de Soweto y el museo del Apartheid.",
          ],
          ["il2", "il1"],
          [
            day(8,
              ["Soweto", "Soweto", "Soweto"],
              [
                "Route vers Johannesburg et Soweto. Déjeuner dans un shebeen, ancien bar clandestin, puis visite du township avec un guide qui y habite : la rue des Nobel et la maison de Nelson Mandela (vue extérieure). Dîner de viandes du bush.",
                "Drive to Johannesburg and Soweto. Lunch in a shebeen, a former illegal bar, then a tour of the township with a guide who lives there: Nobel Street and Nelson Mandela's house (from outside). Dinner of bush meats.",
                "Carretera hacia Johannesburgo y Soweto. Almuerzo en un shebeen, antiguo bar clandestino, y visita del township con un guía que vive allí: la calle de los Nobel y la casa de Nelson Mandela (vista exterior). Cena de carnes de caza.",
              ], "il2"),
            day(9,
              ["Le musée de l'Apartheid – vol retour", "The Apartheid Museum – flight home", "El museo del Apartheid – vuelo de regreso"],
              [
                "Visite du musée de l'Apartheid, qui retrace cette période à travers vidéos, photos et objets. Selon l'horaire du vol, transfert à l'aéroport de Johannesburg. Dîner et nuit à bord.",
                "Visit the Apartheid Museum, which traces the period through films, photographs and objects. Depending on your flight time, transfer to Johannesburg airport. Dinner and night on board.",
                "Visita al museo del Apartheid, que recorre ese periodo con vídeos, fotos y objetos. Según el horario del vuelo, traslado al aeropuerto de Johannesburgo. Cena y noche a bordo.",
              ], "il1"),
            day(10, T_HOME, HOME, "sd1"),
          ]
        ),
      ],
    }),

    // ───────────── 2. I Love Afrique du Sud — 13J/10N ─────────────
    trip({
      slug: "afrique-du-sud-le-cap-kruger-eswatini-13j",
      name: [
        "Afrique du Sud : du Cap au Kruger par le pays zoulou",
        "South Africa: From Cape Town to Kruger through Zulu Country",
        "Sudáfrica: de Ciudad del Cabo al Kruger por tierra zulú",
      ],
      tagline: [
        "Le circuit idéal pour une première fois : Le Cap, Sainte-Lucie, Eswatini, Kruger et Soweto",
        "The ideal tour for a first visit: Cape Town, St Lucia, Eswatini, Kruger and Soweto",
        "El circuito ideal para una primera vez: Ciudad del Cabo, Santa Lucía, Esuatini, Kruger y Soweto",
      ],
      description: [
        "Tout le pays en treize jours : quatre nuits au Cap avec Robben Island et la péninsule, un vol vers Durban, la lagune de Sainte-Lucie et ses hippopotames, un village zoulou, le royaume d'Eswatini, une journée de safari dans le parc Kruger, le canyon de la Blyde River, un village ndebele et Soweto. Deux packs optionnels complètent le programme : découverte (téléphérique de la montagne de la Table, route des Vins, dîner africain, 265 €) et animalier (safaris 4x4 à Hluhluwe et dans le Kruger, 255 €). Extensions aux chutes Victoria (16 jours, à partir de 4 089 € par personne) et au parc de Chobe (17 jours, à partir de 4 919 €).",
        "The whole country in thirteen days: four nights in Cape Town with Robben Island and the peninsula, a flight to Durban, St Lucia lagoon and its hippos, a Zulu village, the kingdom of Eswatini, a day's safari in Kruger Park, the Blyde River Canyon, an Ndebele village and Soweto. Two optional packs complete the programme: discovery (Table Mountain cable car, Winelands, African dinner, €265) and wildlife (4x4 safaris in Hluhluwe and Kruger, €255). Extensions to Victoria Falls (16 days, from €4,089 per person) and Chobe Park (17 days, from €4,919).",
        "Todo el país en trece días: cuatro noches en Ciudad del Cabo con Robben Island y la península, un vuelo a Durban, la laguna de Santa Lucía y sus hipopótamos, una aldea zulú, el reino de Esuatini, una jornada de safari en el parque Kruger, el cañón del río Blyde, una aldea ndebele y Soweto. Dos paquetes opcionales completan el programa: descubrimiento (teleférico de la montaña de la Mesa, ruta del Vino, cena africana, 265 €) y fauna (safaris en 4x4 en Hluhluwe y en el Kruger, 255 €). Extensiones a las cataratas Victoria (16 días, desde 4.089 € por persona) y al parque de Chobe (17 días, desde 4.919 €).",
      ],
      includes: [
        "Vols depuis la France,Vol Le Cap–Durban,10 nuits en hôtels 3* et 4*,Pension selon programme,Visites et safaris du programme,Guide accompagnateur francophone",
        "Flights from France,Cape Town–Durban flight,10 nights in 3* and 4* hotels,Meals as per programme,Visits and safaris in the programme,French-speaking tour guide",
        "Vuelos desde Francia,Vuelo Ciudad del Cabo–Durban,10 noches en hoteles de 3* y 4*,Comidas según programa,Visitas y safaris del programa,Guía acompañante francófono",
      ],
      price: 2429, nights: 10, departureFrom: "Paris", image: "il4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 12, order: -93999,
      chapters: [
        chapter(
          ["Le Cap", "Cape Town", "Ciudad del Cabo"],
          [
            "Quatre nuits au Cap, entre la montagne de la Table, l'île de Robben Island et la route côtière de la péninsule.",
            "Four nights in Cape Town, between Table Mountain, Robben Island and the peninsula's coast road.",
            "Cuatro noches en Ciudad del Cabo, entre la montaña de la Mesa, Robben Island y la carretera costera de la península.",
          ],
          ["il4", "in1", "in4", "gt1", "il9"],
          [
            day(1, ...flyTo("Le Cap", "Cape Town", "Ciudad del Cabo"), "il4"),
            day(2,
              ["Le Cap et Signal Hill", "Cape Town and Signal Hill", "Ciudad del Cabo y Signal Hill"],
              [
                "Accueil par votre guide francophone et tour de ville : le City Bowl, les jardins de la Compagnie des Indes, le quartier malais de Bo-Kaap et ses maisons colorées, le château de Bonne-Espérance et le Waterfront. Montée à Signal Hill pour la vue sur la baie.",
                "Welcome by your French-speaking guide and a city tour: the City Bowl, the Company's Garden, the Malay quarter of Bo-Kaap and its colourful houses, the Castle of Good Hope and the Waterfront. Up Signal Hill for the view over the bay.",
                "Recibimiento por su guía francófono y visita de la ciudad: el City Bowl, los jardines de la Compañía, el barrio malayo de Bo-Kaap y sus casas de colores, el castillo de Buena Esperanza y el Waterfront. Subida a Signal Hill para ver la bahía.",
              ], "in1"),
            day(3, T_ROBBEN, ROBBEN, "il4"),
            day(4, T_PENINSULA, PENINSULA, "in4"),
            day(5,
              ["Le Cap à votre rythme", "Cape Town at your own pace", "Ciudad del Cabo a su ritmo"],
              [
                "Journée libre au Cap. En option, à régler sur place (environ 145 €) : la route des Vins de Stellenbosch à Franschhoek, avec dégustation, déjeuner dans un domaine et le musée des Huguenots.",
                "A free day in Cape Town. Optional, payable locally (about €145): the Winelands from Stellenbosch to Franschhoek, with a tasting, lunch on an estate and the Huguenot museum.",
                "Jornada libre en Ciudad del Cabo. Opcional, a pagar in situ (unos 145 €): la ruta del Vino de Stellenbosch a Franschhoek, con cata, almuerzo en una bodega y el museo de los hugonotes.",
              ], "il9"),
          ]
        ),
        chapter(
          ["Le pays zoulou et l'Eswatini", "Zulu country and Eswatini", "Tierra zulú y Esuatini"],
          [
            "Un vol vers la côte de l'océan Indien : la lagune de Sainte-Lucie, la culture zouloue, puis le royaume d'Eswatini.",
            "A flight to the Indian Ocean coast: St Lucia lagoon, Zulu culture, then the kingdom of Eswatini.",
            "Un vuelo a la costa del océano Índico: la laguna de Santa Lucía, la cultura zulú y el reino de Esuatini.",
          ],
          ["il7", "sd7", "in6"],
          [
            day(6,
              ["Vol pour Durban – Sainte-Lucie – Hluhluwe", "Flight to Durban – St Lucia – Hluhluwe", "Vuelo a Durban – Santa Lucía – Hluhluwe"],
              [
                "Vol pour Durban (1 h 30) et route vers Sainte-Lucie, dont la lagune est bordée de hautes dunes boisées et de forêts marécageuses. Safari en bateau pour observer hippopotames et crocodiles. Route vers Hluhluwe et dîner boma.",
                "Fly to Durban (1 hr 30) and drive to St Lucia, whose lagoon is lined with tall wooded dunes and swamp forest. A boat safari to watch hippos and crocodiles. Drive to Hluhluwe and a boma dinner.",
                "Vuelo a Durban (1 h 30) y carretera hacia Santa Lucía, cuya laguna está bordeada de altas dunas boscosas y bosques pantanosos. Safari en barco para observar hipopótamos y cocodrilos. Carretera hacia Hluhluwe y cena boma.",
              ], "il7"),
            day(7,
              ["Village zoulou – Eswatini", "Zulu village – Eswatini", "Aldea zulú – Esuatini"],
              [
                "Visite d'un village zoulou et spectacle de danses traditionnelles, puis route vers l'Eswatini et Manzini. En option, à régler sur place (environ 115 €) : safari 4x4 matinal dans le parc de Hluhluwe-Umfolozi.",
                "Visit a Zulu village and a show of traditional dances, then drive to Eswatini and Manzini. Optional, payable locally (about €115): an early 4x4 safari in Hluhluwe-Umfolozi park.",
                "Visita a una aldea zulú y espectáculo de danzas tradicionales, y carretera hacia Esuatini y Manzini. Opcional, a pagar in situ (unos 115 €): safari en 4x4 matinal en el parque de Hluhluwe-Umfolozi.",
              ], "sd7"),
            day(8,
              ["Mlilwane et le village de Matsamo", "Mlilwane and Matsamo village", "Mlilwane y la aldea de Matsamo"],
              [
                "Safari pédestre matinal dans la réserve de Mlilwane, visite d'un marché eswati, puis déjeuner et danses au village de Matsamo, à la rencontre des habitants. Route vers la région du Kruger.",
                "A morning walking safari in Mlilwane reserve, a visit to an Eswati market, then lunch and dancing in Matsamo village, meeting the villagers. Drive to the Kruger area.",
                "Safari a pie matinal en la reserva de Mlilwane, visita a un mercado suazi y almuerzo con danzas en la aldea de Matsamo, junto a sus habitantes. Carretera hacia la región del Kruger.",
              ], "in6"),
          ]
        ),
        chapter(
          ["Le Kruger et la route des Panoramas", "Kruger and the Panorama Route", "El Kruger y la ruta de los Panoramas"],
          [
            "Une journée de safari dans le parc Kruger, puis les falaises de la Blyde River.",
            "A day's safari in Kruger Park, then the cliffs of the Blyde River.",
            "Una jornada de safari en el parque Kruger y los acantilados del río Blyde.",
          ],
          ["il5", "il2", "il6", "sd1"],
          [
            day(9,
              ["Une journée dans le parc Kruger", "A day in Kruger Park", "Una jornada en el parque Kruger"],
              [
                "Départ au lever du jour pour un safari en bus dans le parc national Kruger, créé en 1898 et grand comme deux fois la Corse. Déjeuner dans un rest camp et suite du safari. En option, à régler sur place (environ 150 €) : le safari en 4x4.",
                "Leave at sunrise for a safari by coach in Kruger National Park, created in 1898 and twice the size of Corsica. Lunch in a rest camp and more game viewing. Optional, payable locally (about €150): the safari by 4x4.",
                "Salida al amanecer para un safari en autobús por el parque nacional Kruger, creado en 1898 y del doble del tamaño de Córcega. Almuerzo en un rest camp y continuación del safari. Opcional, a pagar in situ (unos 150 €): el safari en 4x4.",
              ], "il5"),
            day(10, T_BLYDE, BLYDE, "il6"),
          ]
        ),
        chapter(
          ["Pretoria, Soweto et retour", "Pretoria, Soweto and home", "Pretoria, Soweto y regreso"],
          [
            "Les dernières étapes : un village ndebele, Pretoria, puis une association éducative de Soweto.",
            "The last stops: an Ndebele village, Pretoria, then an education project in Soweto.",
            "Las últimas etapas: una aldea ndebele, Pretoria y un proyecto educativo de Soweto.",
          ],
          ["il1", "il8"],
          [
            day(11,
              ["Village ndebele et Pretoria", "Ndebele village and Pretoria", "Aldea ndebele y Pretoria"],
              [
                "Route vers le Gauteng et visite d'un village ndebele, connu pour ses maisons peintes de motifs géométriques. Déjeuner à la ferme, tour panoramique de Pretoria, puis Johannesburg et dîner de viandes du bush.",
                "Drive to Gauteng and visit an Ndebele village, known for its houses painted with geometric patterns. Lunch on a farm, a panoramic tour of Pretoria, then Johannesburg and a dinner of bush meats.",
                "Carretera hacia Gauteng y visita a una aldea ndebele, conocida por sus casas pintadas con motivos geométricos. Almuerzo en una granja, recorrido panorámico por Pretoria y llegada a Johannesburgo, con cena de carnes de caza.",
              ], "il8"),
            day(12,
              ["Soweto – vol retour", "Soweto – flight home", "Soweto – vuelo de regreso"],
              [
                "Visite d'un centre éducatif communautaire de Soweto, tenu par des habitants qui y ont grandi et qui aident les enfants du quartier. Transfert à l'aéroport et vol retour.",
                "Visit a community education centre in Soweto, run by residents who grew up there and help the children of the area. Transfer to the airport and flight home.",
                "Visita a un centro educativo comunitario de Soweto, gestionado por vecinos que crecieron allí y ayudan a los niños del barrio. Traslado al aeropuerto y vuelo de regreso.",
              ], "il1"),
            day(13, T_HOME, HOME, "il4"),
          ]
        ),
      ],
    }),

    // ───────────── 3. L'Afrique du Sud Intimiste — 13J/10N ─────────────
    trip({
      slug: "afrique-du-sud-intimiste-petit-groupe-13j",
      name: [
        "Afrique du Sud en petit groupe : Le Cap, safaris et réserve privée du Kruger",
        "South Africa in a Small Group: Cape Town, Safaris and a Private Kruger Reserve",
        "Sudáfrica en grupo reducido: Ciudad del Cabo, safaris y reserva privada del Kruger",
      ],
      tagline: [
        "Seize voyageurs au plus, quatre safaris en 4x4 et une nuit en réserve privée",
        "Sixteen travellers at most, four 4x4 safaris and a night in a private reserve",
        "Dieciséis viajeros como máximo, cuatro safaris en 4x4 y una noche en reserva privada",
      ],
      description: [
        "La même trame que le grand classique, du Cap à Johannesburg, mais en petit groupe (5 à 16 participants), en pension complète et avec davantage de safaris en 4x4 : une concession privée en pays zoulou, la réserve de Hlane en Eswatini, et deux sorties dans le parc Kruger, avec une nuit dans un lodge en réserve privée. Au Cap, le programme ajoute le jardin botanique de Kirstenbosch et la route des Vins, dégustation et déjeuner compris. Extensions aux chutes Victoria (16 jours, à partir de 5 179 € par personne) et au parc de Chobe (17 jours, à partir de 6 019 €).",
        "The same outline as the great classic, from Cape Town to Johannesburg, but in a small group (5 to 16 travellers), on full board and with more 4x4 safaris: a private concession in Zulu country, Hlane reserve in Eswatini, and two drives in Kruger Park, with a night in a lodge in a private reserve. In Cape Town, the programme adds Kirstenbosch botanical garden and the Winelands, tasting and lunch included. Extensions to Victoria Falls (16 days, from €5,179 per person) and Chobe Park (17 days, from €6,019).",
        "La misma trama que el gran clásico, de Ciudad del Cabo a Johannesburgo, pero en grupo reducido (de 5 a 16 participantes), en pensión completa y con más safaris en 4x4: una concesión privada en tierra zulú, la reserva de Hlane en Esuatini y dos salidas por el parque Kruger, con una noche en un lodge de reserva privada. En Ciudad del Cabo, el programa añade el jardín botánico de Kirstenbosch y la ruta del Vino, con cata y almuerzo incluidos. Extensiones a las cataratas Victoria (16 días, desde 5.179 € por persona) y al parque de Chobe (17 días, desde 6.019 €).",
      ],
      includes: [
        "Vols depuis la France,Vol Le Cap–Durban,10 nuits en hôtels et lodges 3* et 4*,Pension complète,4 safaris en 4x4 avec rangers,Visites du programme,Guide accompagnateur francophone",
        "Flights from France,Cape Town–Durban flight,10 nights in 3* and 4* hotels and lodges,Full board,4 safaris by 4x4 with rangers,Visits in the programme,French-speaking tour guide",
        "Vuelos desde Francia,Vuelo Ciudad del Cabo–Durban,10 noches en hoteles y lodges de 3* y 4*,Pensión completa,4 safaris en 4x4 con rangers,Visitas del programa,Guía acompañante francófono",
      ],
      price: 3489, nights: 10, departureFrom: "Paris", image: "in7",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,honeymoon,solo", maxGuests: 16, order: -93998,
      chapters: [
        chapter(
          ["Le Cap et la route des Vins", "Cape Town and the Winelands", "Ciudad del Cabo y la ruta del Vino"],
          [
            "Quatre nuits au Cap : la ville, Robben Island, la péninsule, puis Kirstenbosch et les domaines de Stellenbosch et Franschhoek.",
            "Four nights in Cape Town: the city, Robben Island, the peninsula, then Kirstenbosch and the estates of Stellenbosch and Franschhoek.",
            "Cuatro noches en Ciudad del Cabo: la ciudad, Robben Island, la península y, después, Kirstenbosch y las bodegas de Stellenbosch y Franschhoek.",
          ],
          ["in1", "in2", "in3", "in4", "in5"],
          [
            day(1, ...flyTo("Le Cap", "Cape Town", "Ciudad del Cabo"), "in1"),
            day(2,
              ["Le Cap et Signal Hill", "Cape Town and Signal Hill", "Ciudad del Cabo y Signal Hill"],
              [
                "Accueil par votre guide francophone et tour de la ville selon l'heure d'arrivée : le City Bowl, le quartier de Bo-Kaap, le château de Bonne-Espérance (extérieur) et le Waterfront. En fin de journée, montée à Signal Hill.",
                "Welcome by your French-speaking guide and, depending on arrival time, a city tour: the City Bowl, the Bo-Kaap quarter, the Castle of Good Hope (outside) and the Waterfront. Late in the day, up to Signal Hill.",
                "Recibimiento por su guía francófono y, según la hora de llegada, visita de la ciudad: el City Bowl, el barrio de Bo-Kaap, el castillo de Buena Esperanza (exterior) y el Waterfront. Al final del día, subida a Signal Hill.",
              ], "in1"),
            day(3, T_ROBBEN, ROBBEN, "il4"),
            day(4, T_PENINSULA, PENINSULA, "in4"),
            day(5,
              ["Kirstenbosch et la route des Vins", "Kirstenbosch and the Winelands", "Kirstenbosch y la ruta del Vino"],
              [
                "Visite du jardin botanique de Kirstenbosch, le premier au monde consacré à la flore indigène d'un pays. Puis la route des Vins : Stellenbosch, la ville « Cape Dutch », dégustation et déjeuner dans un domaine, et Franschhoek avec le musée et le mémorial des Huguenots.",
                "Visit Kirstenbosch botanical garden, the first in the world devoted to a country's native flora. Then the Winelands: Stellenbosch, the 'Cape Dutch' town, a tasting and lunch on an estate, and Franschhoek with the Huguenot museum and memorial.",
                "Visita al jardín botánico de Kirstenbosch, el primero del mundo dedicado a la flora autóctona de un país. Después, la ruta del Vino: Stellenbosch, la ciudad «Cape Dutch», cata y almuerzo en una bodega, y Franschhoek con el museo y el memorial de los hugonotes.",
              ], "in2"),
          ]
        ),
        chapter(
          ["Pays zoulou et Eswatini", "Zulu country and Eswatini", "Tierra zulú y Esuatini"],
          [
            "Deux safaris en 4x4 en deux jours : une concession privée près de Hluhluwe, puis la réserve de Hlane et ses rhinocéros noirs.",
            "Two 4x4 safaris in two days: a private concession near Hluhluwe, then Hlane reserve and its black rhinos.",
            "Dos safaris en 4x4 en dos días: una concesión privada cerca de Hluhluwe y la reserva de Hlane y sus rinocerontes negros.",
          ],
          ["in6", "sd7", "il7"],
          [
            day(6,
              ["Vol pour Durban – Sainte-Lucie – Hluhluwe", "Flight to Durban – St Lucia – Hluhluwe", "Vuelo a Durban – Santa Lucía – Hluhluwe"],
              [
                "Vol pour Durban (2 h) et route vers Sainte-Lucie, au bord de l'océan Indien, pour un safari en bateau sur la lagune. Installation dans un lodge en pays zoulou.",
                "Fly to Durban (2 hrs) and drive to St Lucia, on the Indian Ocean, for a boat safari on the lagoon. Check in at a lodge in Zulu country.",
                "Vuelo a Durban (2 h) y carretera hacia Santa Lucía, a orillas del océano Índico, para un safari en barco por la laguna. Instalación en un lodge en tierra zulú.",
              ], "il7"),
            day(7,
              ["Safari en concession privée – Eswatini", "Safari in a private concession – Eswatini", "Safari en concesión privada – Esuatini"],
              [
                "Safari en 4x4 avec un ranger sur les pistes d'une concession privée, au plus près des animaux. Route vers le royaume d'Eswatini et passage de la frontière.",
                "A 4x4 safari with a ranger on the tracks of a private concession, close to the animals. Drive to the kingdom of Eswatini and cross the border.",
                "Safari en 4x4 con un ranger por las pistas de una concesión privada, muy cerca de los animales. Carretera hacia el reino de Esuatini y paso de la frontera.",
              ], "in6"),
            day(8,
              ["Safari à Hlane – Mpumalanga", "Safari in Hlane – Mpumalanga", "Safari en Hlane – Mpumalanga"],
              [
                "Safari en 4x4 à Hlane, l'une des plus grandes concentrations de rhinocéros noirs d'Afrique australe, avec aussi rhinocéros blancs, éléphants, girafes et buffles. Déjeuner avec chorale et danses eswaties, puis route vers le Mpumalanga, région de montagnes et de forêts.",
                "A 4x4 safari in Hlane, one of the largest concentrations of black rhino in southern Africa, with white rhino, elephants, giraffes and buffalo too. Lunch with a choir and Eswati dancing, then drive to Mpumalanga, a region of mountains and forests.",
                "Safari en 4x4 en Hlane, una de las mayores concentraciones de rinoceronte negro de África austral, con rinocerontes blancos, elefantes, jirafas y búfalos. Almuerzo con coro y danzas suazis y carretera hacia Mpumalanga, región de montañas y bosques.",
              ], "sd7"),
          ]
        ),
        chapter(
          ["La Blyde River et le Kruger", "The Blyde River and Kruger", "El río Blyde y el Kruger"],
          [
            "Le canyon de la Blyde River, puis une nuit dans un lodge en réserve privée du parc Kruger, avec deux safaris en 4x4.",
            "The Blyde River Canyon, then a night in a lodge in a private Kruger reserve, with two 4x4 safaris.",
            "El cañón del río Blyde y una noche en un lodge de reserva privada del parque Kruger, con dos safaris en 4x4.",
          ],
          ["in7", "in8", "sd1", "sd2"],
          [
            day(9, T_BLYDE, BLYDE, "in7"),
            day(10,
              ["Réserve privée du Kruger : safari de l'après-midi", "Private Kruger reserve: afternoon safari", "Reserva privada del Kruger: safari de la tarde"],
              [
                "Route vers le parc Kruger et installation dans un lodge en réserve privée. L'après-midi, safari en 4x4 avec un ranger dans le parc national, deux millions d'hectares créés en 1898, à la recherche des Big Five.",
                "Drive to Kruger Park and check in at a lodge in a private reserve. In the afternoon, a 4x4 safari with a ranger in the national park, two million hectares created in 1898, looking for the Big Five.",
                "Carretera hacia el parque Kruger e instalación en un lodge de reserva privada. Por la tarde, safari en 4x4 con un ranger por el parque nacional, dos millones de hectáreas creadas en 1898, en busca de los Cinco Grandes.",
              ], "in8"),
            day(11,
              ["Second safari – Pretoria – Johannesburg", "Second safari – Pretoria – Johannesburg", "Segundo safari – Pretoria – Johannesburgo"],
              [
                "Second safari en 4x4 dans le Kruger le matin, puis route vers Pretoria pour un tour panoramique et la visite guidée du monument Voortrekker. Dîner de viandes du bush à Johannesburg.",
                "A second 4x4 safari in Kruger in the morning, then drive to Pretoria for a panoramic tour and a guided visit to the Voortrekker Monument. Dinner of bush meats in Johannesburg.",
                "Segundo safari en 4x4 por el Kruger por la mañana y carretera hacia Pretoria para un recorrido panorámico y la visita guiada al monumento Voortrekker. Cena de carnes de caza en Johannesburgo.",
              ], "sd1"),
          ]
        ),
        chapter(
          ["Johannesburg", "Johannesburg", "Johannesburgo"],
          [
            "Une dernière journée consacrée à l'histoire du pays au XXe siècle.",
            "A last day devoted to the country's 20th-century history.",
            "Una última jornada dedicada a la historia del país en el siglo XX.",
          ],
          ["il1", "il2"],
          [
            day(12,
              ["Le musée de l'Apartheid – vol retour", "The Apartheid Museum – flight home", "El museo del Apartheid – vuelo de regreso"],
              [
                "Visite guidée du musée de l'Apartheid et de ses 22 expositions, puis déjeuner dans un shebeen, ancien bar clandestin. Transfert à l'aéroport et vol retour.",
                "A guided visit to the Apartheid Museum and its 22 exhibitions, then lunch in a shebeen, a former illegal bar. Transfer to the airport and flight home.",
                "Visita guiada al museo del Apartheid y sus 22 exposiciones, y almuerzo en un shebeen, antiguo bar clandestino. Traslado al aeropuerto y vuelo de regreso.",
              ], "il1"),
            day(13, T_HOME, HOME, "in7"),
          ]
        ),
      ],
    }),

    // ───────────── 4. Merveilles Sud-Africaines — 15J/12N ─────────────
    trip({
      slug: "afrique-du-sud-drakensberg-lesotho-le-cap-15j",
      name: [
        "Afrique du Sud : Drakensberg, Lesotho, Kruger et Le Cap",
        "South Africa: Drakensberg, Lesotho, Kruger and Cape Town",
        "Sudáfrica: Drakensberg, Lesoto, Kruger y Ciudad del Cabo",
      ],
      tagline: [
        "Le KwaZulu-Natal et le col de Sani Pass avant les safaris et la région du Cap",
        "KwaZulu-Natal and the Sani Pass before the safaris and the Cape region",
        "KwaZulu-Natal y el paso de Sani antes de los safaris y la región del Cabo",
      ],
      description: [
        "Un circuit qui commence par l'est, à Durban, pour les montagnes du Drakensberg et une journée en 4x4 au Lesotho par le col de Sani Pass (2 873 m), avec la rencontre d'un village sotho. Suivent la lagune de Sainte-Lucie, une réserve privée en pays zoulou, le royaume d'Eswatini et ses rhinocéros, une journée complète de safari en 4x4 dans le Kruger, la Blyde River et Pilgrim's Rest, Soweto et la maison de Nelson Mandela, puis trois jours au Cap avec la route des Vins, la péninsule et Robben Island. Groupe de 10 à 25 participants.",
        "A tour that starts in the east, in Durban, for the Drakensberg mountains and a day by 4x4 in Lesotho over the Sani Pass (2,873 m), meeting a Sotho village. Then come St Lucia lagoon, a private reserve in Zulu country, the kingdom of Eswatini and its rhinos, a full day's 4x4 safari in Kruger, the Blyde River and Pilgrim's Rest, Soweto and Nelson Mandela's house, then three days in Cape Town with the Winelands, the peninsula and Robben Island. Groups of 10 to 25 travellers.",
        "Un circuito que empieza por el este, en Durban, con las montañas del Drakensberg y una jornada en 4x4 por Lesoto a través del paso de Sani (2.873 m), con visita a una aldea sotho. Siguen la laguna de Santa Lucía, una reserva privada en tierra zulú, el reino de Esuatini y sus rinocerontes, una jornada completa de safari en 4x4 en el Kruger, el río Blyde y Pilgrim's Rest, Soweto y la casa de Nelson Mandela, y tres días en Ciudad del Cabo con la ruta del Vino, la península y Robben Island. Grupos de 10 a 25 participantes.",
      ],
      includes: [
        "Vols depuis la France,Vol Johannesburg–Le Cap,12 nuits en hôtels et lodges 3* et 4*,Pension selon programme,Safaris avec rangers,Journée en 4x4 au Lesotho,Guide accompagnateur francophone",
        "Flights from France,Johannesburg–Cape Town flight,12 nights in 3* and 4* hotels and lodges,Meals as per programme,Safaris with rangers,A day by 4x4 in Lesotho,French-speaking tour guide",
        "Vuelos desde Francia,Vuelo Johannesburgo–Ciudad del Cabo,12 noches en hoteles y lodges de 3* y 4*,Comidas según programa,Safaris con rangers,Jornada en 4x4 por Lesoto,Guía acompañante francófono",
      ],
      price: 3619, nights: 12, departureFrom: "Lyon", image: "ms2",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 25, order: -93997,
      chapters: [
        chapter(
          ["Durban, le Drakensberg et le Lesotho", "Durban, the Drakensberg and Lesotho", "Durban, el Drakensberg y Lesoto"],
          [
            "Le KwaZulu-Natal, une province que les circuits classiques survolent : Durban et sa communauté indienne, puis les montagnes et les hautes terres du Lesotho.",
            "KwaZulu-Natal, a province that classic tours fly over: Durban and its Indian community, then the mountains and the highlands of Lesotho.",
            "KwaZulu-Natal, una provincia que los circuitos clásicos sobrevuelan: Durban y su comunidad india, y después las montañas y las tierras altas de Lesoto.",
          ],
          ["ms1", "ms2", "gt7", "gt8"],
          [
            day(1, ...flyTo("Durban", "Durban", "Durban"), "ms1"),
            day(2,
              ["Arrivée à Durban", "Arrival in Durban", "Llegada a Durban"],
              [
                "Arrivée à Durban, selon les départs via Johannesburg. Accueil par votre guide francophone, installation à l'hôtel et dîner dans un restaurant du centre.",
                "Arrive in Durban, via Johannesburg on some departures. Welcome by your French-speaking guide, check in at the hotel and dinner in a restaurant in the centre.",
                "Llegada a Durban, según las salidas vía Johannesburgo. Recibimiento por su guía francófono, instalación en el hotel y cena en un restaurante del centro.",
              ], "ms1"),
            day(3,
              ["Durban – le Drakensberg", "Durban – the Drakensberg", "Durban – el Drakensberg"],
              [
                "Tour panoramique de Durban, ancienne capitale du KwaZulu-Natal, qui abrite la plus grande communauté indienne au monde hors de l'Inde. Route vers le Drakensberg et ses panoramas, en traversant le Natal en direction du Lesotho.",
                "A panoramic tour of Durban, former capital of KwaZulu-Natal, home to the largest Indian community in the world outside India. Drive to the Drakensberg and its views, across Natal towards Lesotho.",
                "Recorrido panorámico por Durban, antigua capital de KwaZulu-Natal, que alberga la mayor comunidad india del mundo fuera de la India. Carretera hacia el Drakensberg y sus panorámicas, atravesando Natal en dirección a Lesoto.",
              ], "gt7"),
            day(4,
              ["Sani Pass et le Lesotho en 4x4", "Sani Pass and Lesotho by 4x4", "El paso de Sani y Lesoto en 4x4"],
              [
                "Départ en 4x4 pour le royaume du Lesotho par le col de Sani Pass, à 2 873 m, entre montagnes, rivières et cascades, sur des hautes terres qui rappellent le Tibet. Arrêt dans un village pour rencontrer les Sotho et goûter la bière locale, puis déjeuner au Sani Top Chalet. Route vers Umhlanga.",
                "Set off by 4x4 for the kingdom of Lesotho over the Sani Pass, at 2,873 m, between mountains, rivers and waterfalls, on highlands that recall Tibet. A stop in a village to meet the Sotho and taste the local beer, then lunch at the Sani Top Chalet. Drive to Umhlanga.",
                "Salida en 4x4 hacia el reino de Lesoto por el paso de Sani, a 2.873 m, entre montañas, ríos y cascadas, en unas tierras altas que recuerdan al Tíbet. Parada en una aldea para conocer a los sotho y probar la cerveza local, y almuerzo en el Sani Top Chalet. Carretera hacia Umhlanga.",
              ], "ms2"),
          ]
        ),
        chapter(
          ["Pays zoulou, Eswatini et Kruger", "Zulu country, Eswatini and Kruger", "Tierra zulú, Esuatini y Kruger"],
          [
            "Quatre jours de faune : la lagune de Sainte-Lucie, une réserve privée, Hlane et une journée complète dans le Kruger.",
            "Four days of wildlife: St Lucia lagoon, a private reserve, Hlane and a full day in Kruger.",
            "Cuatro días de fauna: la laguna de Santa Lucía, una reserva privada, Hlane y una jornada completa en el Kruger.",
          ],
          ["ms3", "ms4", "in6", "sd1"],
          [
            day(5,
              ["Sainte-Lucie – Hluhluwe", "St Lucia – Hluhluwe", "Santa Lucía – Hluhluwe"],
              [
                "Route vers la réserve de Sainte-Lucie et safari en bateau pour observer crocodiles et hippopotames, avec déjeuner léger à bord. Installation au lodge, dîner boma et spectacle de danses.",
                "Drive to St Lucia reserve and a boat safari to watch crocodiles and hippos, with a light lunch on board. Check in at the lodge, a boma dinner and a dance show.",
                "Carretera hacia la reserva de Santa Lucía y safari en barco para observar cocodrilos e hipopótamos, con almuerzo ligero a bordo. Instalación en el lodge, cena boma y espectáculo de danzas.",
              ], "ms3"),
            day(6,
              ["Réserve de Zulu Nyala – village zoulou – Eswatini", "Zulu Nyala reserve – Zulu village – Eswatini", "Reserva de Zulu Nyala – aldea zulú – Esuatini"],
              [
                "Safari en 4x4 très matinal d'environ trois heures dans la réserve privée de Zulu Nyala : antilopes, girafes, zèbres, éléphants, buffles, guépards. Visite d'un village zoulou et de ses kraals, puis route vers l'Eswatini.",
                "A very early 4x4 safari of about three hours in the private Zulu Nyala reserve: antelope, giraffe, zebra, elephant, buffalo, cheetah. Visit a Zulu village and its kraals, then drive to Eswatini.",
                "Safari en 4x4 muy temprano, de unas tres horas, en la reserva privada de Zulu Nyala: antílopes, jirafas, cebras, elefantes, búfalos y guepardos. Visita a una aldea zulú y sus kraals, y carretera hacia Esuatini.",
              ], "ms4"),
            day(7,
              ["Hlane – région du Kruger", "Hlane – Kruger area", "Hlane – región del Kruger"],
              [
                "Safari en 4x4 à Hlane, réputée pour ses rhinocéros noirs. Déjeuner dans la réserve et visite d'un marché eswati, puis retour en Afrique du Sud vers la région du Kruger.",
                "A 4x4 safari in Hlane, known for its black rhinos. Lunch in the reserve and a visit to an Eswati market, then back into South Africa towards the Kruger area.",
                "Safari en 4x4 en Hlane, famosa por sus rinocerontes negros. Almuerzo en la reserva y visita a un mercado suazi, y regreso a Sudáfrica hacia la región del Kruger.",
              ], "in6"),
            day(8,
              ["Journée complète dans le parc Kruger", "A full day in Kruger Park", "Jornada completa en el parque Kruger"],
              [
                "Journée entière de safari en 4x4 dans le parc national Kruger, 20 000 km², à la recherche des Big Five et des guépards, girafes et hippopotames.",
                "A whole day's 4x4 safari in Kruger National Park, 20,000 km², looking for the Big Five as well as cheetahs, giraffes and hippos.",
                "Jornada entera de safari en 4x4 por el parque nacional Kruger, de 20.000 km², en busca de los Cinco Grandes y de guepardos, jirafas e hipopótamos.",
              ], "sd1"),
          ]
        ),
        chapter(
          ["Blyde River, Pretoria et Soweto", "Blyde River, Pretoria and Soweto", "Blyde River, Pretoria y Soweto"],
          [
            "Le canyon et le village minier de Pilgrim's Rest, puis Soweto et la maison de Nelson Mandela avant le vol pour Le Cap.",
            "The canyon and the mining village of Pilgrim's Rest, then Soweto and Nelson Mandela's house before the flight to Cape Town.",
            "El cañón y el pueblo minero de Pilgrim's Rest, y Soweto y la casa de Nelson Mandela antes del vuelo a Ciudad del Cabo.",
          ],
          ["ms5", "sd4", "il1"],
          [
            day(9,
              ["Blyde River et Pilgrim's Rest – Pretoria", "Blyde River and Pilgrim's Rest – Pretoria", "Blyde River y Pilgrim's Rest – Pretoria"],
              [
                "Découverte du canyon de la Blyde River, long de 26 km, et des marmites de Bourke's Luck. Visite de Pilgrim's Rest, village minier de la ruée vers l'or de 1873, classé monument historique. Route vers Pretoria.",
                "Discover the 26-km Blyde River Canyon and the Bourke's Luck potholes. Visit Pilgrim's Rest, a mining village from the 1873 gold rush, now a listed heritage site. Drive to Pretoria.",
                "Descubrimiento del cañón del río Blyde, de 26 km, y de las marmitas de Bourke's Luck. Visita a Pilgrim's Rest, pueblo minero de la fiebre del oro de 1873, declarado monumento histórico. Carretera hacia Pretoria.",
              ], "ms5"),
            day(10,
              ["Soweto – vol pour Le Cap", "Soweto – flight to Cape Town", "Soweto – vuelo a Ciudad del Cabo"],
              [
                "Visite de Soweto, symbole de la résistance à l'apartheid : la rue des Nobel et la maison de Nelson Mandela, devenue musée. Déjeuner dans un shebeen, puis vol de Johannesburg pour Le Cap.",
                "Visit Soweto, symbol of the resistance to apartheid: Nobel Street and Nelson Mandela's house, now a museum. Lunch in a shebeen, then fly from Johannesburg to Cape Town.",
                "Visita a Soweto, símbolo de la resistencia al apartheid: la calle de los Nobel y la casa de Nelson Mandela, hoy museo. Almuerzo en un shebeen y vuelo de Johannesburgo a Ciudad del Cabo.",
              ], "il1"),
          ]
        ),
        chapter(
          ["Le Cap", "Cape Town", "Ciudad del Cabo"],
          [
            "Trois journées pour finir : la route des Vins, la péninsule du Cap et Robben Island.",
            "Three days to finish: the Winelands, the Cape Peninsula and Robben Island.",
            "Tres jornadas para terminar: la ruta del Vino, la península del Cabo y Robben Island.",
          ],
          ["ms6", "in3", "gt1", "tr2"],
          [
            day(11,
              ["La route des Vins", "The Winelands", "La ruta del Vino"],
              [
                "Journée sur la route des Vins : Franschhoek, le « coin français », et son musée des Huguenots, la statue de Mandela devant la prison de Groot Drakenstein, puis Stellenbosch, fondée en 1679. Dégustation et déjeuner traditionnel afrikaner.",
                "A day in the Winelands: Franschhoek, the 'French corner', and its Huguenot museum, the Mandela statue outside Groot Drakenstein prison, then Stellenbosch, founded in 1679. A tasting and a traditional Afrikaner lunch.",
                "Jornada por la ruta del Vino: Franschhoek, el «rincón francés», y su museo de los hugonotes, la estatua de Mandela ante la prisión de Groot Drakenstein y Stellenbosch, fundada en 1679. Cata y almuerzo tradicional afrikáner.",
              ], "in3"),
            day(12, T_PENINSULA, PENINSULA, "ms6"),
            day(13, T_ROBBEN, ROBBEN, "tr2"),
            day(14,
              ["Le Cap – vol retour", "Cape Town – flight home", "Ciudad del Cabo – vuelo de regreso"],
              [
                "Selon l'horaire du vol, transfert à l'aéroport du Cap et embarquement pour la France. Dîner et nuit à bord.",
                "Depending on your flight time, transfer to Cape Town airport and board for France. Dinner and night on board.",
                "Según el horario del vuelo, traslado al aeropuerto de Ciudad del Cabo y embarque hacia Francia. Cena y noche a bordo.",
              ], "gt1"),
            day(15, T_HOME, HOME, "ms2"),
          ]
        ),
      ],
    }),

    // ───────────── 5. Grand Tour d'Afrique du Sud — 18J/15N ─────────────
    trip({
      slug: "afrique-du-sud-grand-tour-route-jardin-18j",
      name: [
        "Grand tour d'Afrique du Sud : Le Cap, route des Jardins, Drakensberg et Kruger",
        "Grand Tour of South Africa: Cape Town, the Garden Route, Drakensberg and Kruger",
        "Gran tour de Sudáfrica: Ciudad del Cabo, ruta Jardín, Drakensberg y Kruger",
      ],
      tagline: [
        "Le pays entier en dix-huit jours, avec quatre grands safaris et le Lesotho en 4x4",
        "The whole country in eighteen days, with four major safaris and Lesotho by 4x4",
        "Todo el país en dieciocho días, con cuatro grandes safaris y Lesoto en 4x4",
      ],
      description: [
        "Le circuit le plus complet : Le Cap et la route des Vins, la route des Jardins par Mossel Bay, la lagune de Knysna et le parc de Tsitsikamma, le parc des éléphants d'Addo, le pays xhosa de Nelson Mandela, le Drakensberg et le Lesotho par Sani Pass, Durban, la lagune de Sainte-Lucie, Hluhluwe-Umfolozi, une journée en Eswatini dans la Vallée heureuse, le Kruger en 4x4, la Blyde River et Soweto. Groupe de 6 à 20 participants en minibus, pension quasi complète. Extensions aux chutes Victoria (21 jours, à partir de 5 389 € par personne) et au parc de Chobe (22 jours, à partir de 6 199 €).",
        "The most complete tour: Cape Town and the Winelands, the Garden Route via Mossel Bay, Knysna lagoon and Tsitsikamma park, Addo Elephant Park, Nelson Mandela's Xhosa homeland, the Drakensberg and Lesotho via Sani Pass, Durban, St Lucia lagoon, Hluhluwe-Umfolozi, a day in Eswatini's Happy Valley, Kruger by 4x4, the Blyde River and Soweto. Groups of 6 to 20 by minibus, almost full board. Extensions to Victoria Falls (21 days, from €5,389 per person) and Chobe Park (22 days, from €6,199).",
        "El circuito más completo: Ciudad del Cabo y la ruta del Vino, la ruta Jardín por Mossel Bay, la laguna de Knysna y el parque de Tsitsikamma, el parque de elefantes de Addo, la tierra xhosa de Nelson Mandela, el Drakensberg y Lesoto por el paso de Sani, Durban, la laguna de Santa Lucía, Hluhluwe-Umfolozi, una jornada en el Valle Feliz de Esuatini, el Kruger en 4x4, el río Blyde y Soweto. Grupos de 6 a 20 participantes en minibús, pensión casi completa. Extensiones a las cataratas Victoria (21 días, desde 5.389 € por persona) y al parque de Chobe (22 días, desde 6.199 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,15 nuits en hôtels et lodges 3* et 4*,Pension selon programme,Safaris avec rangers,Journée en 4x4 au Lesotho,Guide accompagnateur francophone",
        "Flights from France,Airport transfers,15 nights in 3* and 4* hotels and lodges,Meals as per programme,Safaris with rangers,A day by 4x4 in Lesotho,French-speaking tour guide",
        "Vuelos desde Francia,Traslados al aeropuerto,15 noches en hoteles y lodges de 3* y 4*,Comidas según programa,Safaris con rangers,Jornada en 4x4 por Lesoto,Guía acompañante francófono",
      ],
      price: 3669, nights: 15, departureFrom: "Paris", image: "gt3",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 20, order: -93996,
      chapters: [
        chapter(
          ["Le Cap", "Cape Town", "Ciudad del Cabo"],
          [
            "Trois nuits au Cap : la ville, la route des Vins, puis le cap de Bonne-Espérance et la montagne de la Table.",
            "Three nights in Cape Town: the city, the Winelands, then the Cape of Good Hope and Table Mountain.",
            "Tres noches en Ciudad del Cabo: la ciudad, la ruta del Vino y, después, el cabo de Buena Esperanza y la montaña de la Mesa.",
          ],
          ["gt1", "il4", "tr4", "in3"],
          [
            day(1, ...flyTo("Le Cap", "Cape Town", "Ciudad del Cabo"), "il4"),
            day(2,
              ["Tour du Cap", "A tour of Cape Town", "Visita de Ciudad del Cabo"],
              [
                "Accueil par votre guide francophone et, selon l'heure d'arrivée, tour panoramique : le City Bowl, les jardins de la Compagnie, le château de Bonne-Espérance (extérieur) et le Waterfront.",
                "Welcome by your French-speaking guide and, depending on arrival time, a panoramic tour: the City Bowl, the Company's Garden, the Castle of Good Hope (outside) and the Waterfront.",
                "Recibimiento por su guía francófono y, según la hora de llegada, recorrido panorámico: el City Bowl, los jardines de la Compañía, el castillo de Buena Esperanza (exterior) y el Waterfront.",
              ], "il4"),
            day(3,
              ["Kirstenbosch et la route des Vins", "Kirstenbosch and the Winelands", "Kirstenbosch y la ruta del Vino"],
              [
                "Visite guidée du jardin botanique de Kirstenbosch, puis la route des Vins : Stellenbosch et son village-musée, dégustation et déjeuner dans un domaine de Franschhoek.",
                "A guided visit to Kirstenbosch botanical garden, then the Winelands: Stellenbosch and its village museum, a tasting and lunch on a Franschhoek estate.",
                "Visita guiada al jardín botánico de Kirstenbosch y, después, la ruta del Vino: Stellenbosch y su pueblo-museo, cata y almuerzo en una bodega de Franschhoek.",
              ], "tr4"),
            day(4,
              ["Le cap de Bonne-Espérance et la montagne de la Table", "The Cape of Good Hope and Table Mountain", "El cabo de Buena Esperanza y la montaña de la Mesa"],
              [
                "Journée sur la péninsule : les plages de Sea Point, Clifton et Camps Bay, les manchots de Boulders Beach, le parc national du cap de Bonne-Espérance et Cape Point, déjeuner de poisson face à l'océan. Retour au Cap et montée en téléphérique à la montagne de la Table.",
                "A day on the peninsula: the beaches of Sea Point, Clifton and Camps Bay, the Boulders Beach penguins, Cape of Good Hope national park and Cape Point, a fish lunch facing the ocean. Back in Cape Town, a cable car ride up Table Mountain.",
                "Jornada en la península: las playas de Sea Point, Clifton y Camps Bay, los pingüinos de Boulders Beach, el parque nacional del cabo de Buena Esperanza y Cape Point, con almuerzo de pescado frente al océano. De vuelta en Ciudad del Cabo, subida en teleférico a la montaña de la Mesa.",
              ], "gt1"),
          ]
        ),
        chapter(
          ["La route des Jardins", "The Garden Route", "La ruta Jardín"],
          [
            "La côte sud, de Mossel Bay à Port Elizabeth : la lagune de Knysna, les forêts de Tsitsikamma et les éléphants d'Addo.",
            "The south coast, from Mossel Bay to Port Elizabeth: Knysna lagoon, the forests of Tsitsikamma and the elephants of Addo.",
            "La costa sur, de Mossel Bay a Port Elizabeth: la laguna de Knysna, los bosques de Tsitsikamma y los elefantes de Addo.",
          ],
          ["gt3", "gt5", "tr1", "gt4"],
          [
            day(5,
              ["Mossel Bay – Knysna", "Mossel Bay – Knysna", "Mossel Bay – Knysna"],
              [
                "Départ sur la route des Jardins. À Mossel Bay, l'arbre postal et la caravelle de Bartolomeu Dias, premier Européen à explorer la baie en 1488. Arrivée à Knysna, village d'artistes au bord de sa lagune.",
                "Set off along the Garden Route. In Mossel Bay, the post office tree and the caravel of Bartolomeu Dias, the first European to explore the bay in 1488. Arrive in Knysna, an artists' village on its lagoon.",
                "Salida por la ruta Jardín. En Mossel Bay, el árbol postal y la carabela de Bartolomeu Dias, primer europeo en explorar la bahía en 1488. Llegada a Knysna, pueblo de artistas a orillas de su laguna.",
              ], "gt3"),
            day(6,
              ["Lagune de Knysna – Tsitsikamma – Port Elizabeth", "Knysna lagoon – Tsitsikamma – Port Elizabeth", "Laguna de Knysna – Tsitsikamma – Port Elizabeth"],
              [
                "Croisière sur la lagune de Knysna jusqu'aux Knysna Heads, avec huîtres et vin pétillant à bord. Balade guidée dans le parc national de Tsitsikamma et ses ponts suspendus, puis arrivée à Port Elizabeth.",
                "A cruise on Knysna lagoon to the Knysna Heads, with oysters and sparkling wine on board. A guided walk in Tsitsikamma National Park and its suspension bridges, then arrive in Port Elizabeth.",
                "Crucero por la laguna de Knysna hasta los Knysna Heads, con ostras y vino espumoso a bordo. Paseo guiado por el parque nacional de Tsitsikamma y sus puentes colgantes, y llegada a Port Elizabeth.",
              ], "gt5"),
            day(7,
              ["Le parc des éléphants d'Addo – East London", "Addo Elephant Park – East London", "El parque de elefantes de Addo – East London"],
              [
                "Safari matinal dans le parc national des éléphants d'Addo, aujourd'hui le troisième plus grand parc du pays. Route le long de la côte vers East London, sur la rivière Buffalo.",
                "A morning safari in Addo Elephant National Park, now the third-largest park in the country. Drive along the coast to East London, on the Buffalo River.",
                "Safari matinal en el parque nacional de elefantes de Addo, hoy el tercer parque más grande del país. Carretera por la costa hacia East London, a orillas del río Buffalo.",
              ], "tr1"),
          ]
        ),
        chapter(
          ["Pays xhosa, Drakensberg et Lesotho", "Xhosa country, the Drakensberg and Lesotho", "Tierra xhosa, Drakensberg y Lesoto"],
          [
            "La terre natale de Nelson Mandela, puis les montagnes du Drakensberg et le royaume du Lesotho.",
            "Nelson Mandela's homeland, then the Drakensberg mountains and the kingdom of Lesotho.",
            "La tierra natal de Nelson Mandela y, después, las montañas del Drakensberg y el reino de Lesoto.",
          ],
          ["gt7", "gt8", "ms2"],
          [
            day(8,
              ["Mthatha – le Drakensberg", "Mthatha – the Drakensberg", "Mthatha – el Drakensberg"],
              [
                "Traversée de la région de Mthatha, territoire des Xhosas et région natale de Nelson Mandela, puis route vers le Drakensberg Sud et Sani Pass, au pied du Lesotho.",
                "Cross the Mthatha region, Xhosa territory and Nelson Mandela's home region, then drive to the southern Drakensberg and Sani Pass, at the foot of Lesotho.",
                "Travesía de la región de Mthatha, territorio xhosa y tierra natal de Nelson Mandela, y carretera hacia el Drakensberg Sur y el paso de Sani, al pie de Lesoto.",
              ], "gt7"),
            day(9,
              ["Le Lesotho en 4x4", "Lesotho by 4x4", "Lesoto en 4x4"],
              [
                "En 4x4 sur les hautes terres du Lesotho, aux décors de plateau tibétain. Passage du poste frontière de Sani Pass et montée jusqu'au Sani Top Chalet, que seul un véhicule 4x4 peut atteindre. Le Lesotho est le seul pays au monde dont tout le territoire est au-dessus de 1 400 m.",
                "By 4x4 on the highlands of Lesotho, with scenery like the Tibetan plateau. Through the Sani Pass border post and up to the Sani Top Chalet, which only a 4x4 can reach. Lesotho is the only country in the world lying entirely above 1,400 m.",
                "En 4x4 por las tierras altas de Lesoto, con paisajes de meseta tibetana. Paso del puesto fronterizo de Sani y subida hasta el Sani Top Chalet, al que solo se llega en 4x4. Lesoto es el único país del mundo cuyo territorio está todo por encima de los 1.400 m.",
              ], "gt8"),
            day(10,
              ["Howick et la vallée des 1 000 collines – Durban", "Howick and the Valley of 1,000 Hills – Durban", "Howick y el valle de las 1.000 colinas – Durban"],
              [
                "Route vers Durban, avec un arrêt au monument Nelson Mandela de Howick et la vallée des 1 000 collines. Déjeuner à Durban et tour de la ville, dont le marché indien.",
                "Drive to Durban, stopping at the Nelson Mandela monument at Howick and the Valley of 1,000 Hills. Lunch in Durban and a city tour, including the Indian market.",
                "Carretera hacia Durban, con parada en el monumento a Nelson Mandela de Howick y el valle de las 1.000 colinas. Almuerzo en Durban y visita de la ciudad, incluido el mercado indio.",
              ], "ms1"),
          ]
        ),
        chapter(
          ["Pays zoulou et Eswatini", "Zulu country and Eswatini", "Tierra zulú y Esuatini"],
          [
            "La lagune de Sainte-Lucie, la réserve de Hluhluwe-Umfolozi, puis une journée dans la Vallée heureuse d'Eswatini.",
            "St Lucia lagoon, Hluhluwe-Umfolozi reserve, then a day in Eswatini's Happy Valley.",
            "La laguna de Santa Lucía, la reserva de Hluhluwe-Umfolozi y una jornada en el Valle Feliz de Esuatini.",
          ],
          ["ms3", "in6", "sd7"],
          [
            day(11,
              ["Sainte-Lucie – Hluhluwe", "St Lucia – Hluhluwe", "Santa Lucía – Hluhluwe"],
              [
                "Safari en bateau à fond plat sur l'estuaire de Sainte-Lucie : hippopotames, crocodiles du Nil et aigles pêcheurs. Déjeuner, puis route vers la région de Hluhluwe.",
                "A flat-bottomed boat safari on the St Lucia estuary: hippos, Nile crocodiles and fish eagles. Lunch, then drive to the Hluhluwe area.",
                "Safari en barco de fondo plano por el estuario de Santa Lucía: hipopótamos, cocodrilos del Nilo y águilas pescadoras. Almuerzo y carretera hacia la región de Hluhluwe.",
              ], "ms3"),
            day(12,
              ["Hluhluwe-Umfolozi – Eswatini", "Hluhluwe-Umfolozi – Eswatini", "Hluhluwe-Umfolozi – Esuatini"],
              [
                "Safari en 4x4 avec rangers dans la réserve de Hluhluwe-Umfolozi, créée en 1897, dont les deux parcs sont reliés par un couloir pour la faune. Route vers l'Eswatini, la « Suisse de l'Afrique ».",
                "A 4x4 safari with rangers in Hluhluwe-Umfolozi reserve, created in 1897, whose two parks are joined by a wildlife corridor. Drive to Eswatini, the 'Switzerland of Africa'.",
                "Safari en 4x4 con rangers en la reserva de Hluhluwe-Umfolozi, creada en 1897, cuyos dos parques están unidos por un corredor para la fauna. Carretera hacia Esuatini, la «Suiza de África».",
              ], "in6"),
            day(13,
              ["Un jour en Eswatini – Hazyview", "A day in Eswatini – Hazyview", "Un día en Esuatini – Hazyview"],
              [
                "Une journée avec un Eswati en costume traditionnel, qui vous initie aux coutumes locales : marche dans la Vallée heureuse, entre ananas et cannes à sucre, et rencontre des habitants d'un village. Route vers Hazyview.",
                "A day with an Eswati in traditional dress, who introduces you to local customs: a walk through the Happy Valley, among pineapples and sugar cane, and meeting the people of a village. Drive to Hazyview.",
                "Una jornada con un suazi en traje tradicional, que le inicia en las costumbres locales: caminata por el Valle Feliz, entre piñas y caña de azúcar, y encuentro con los habitantes de una aldea. Carretera hacia Hazyview.",
              ], "sd7"),
          ]
        ),
        chapter(
          ["Le Kruger, la Blyde River et Soweto", "Kruger, the Blyde River and Soweto", "El Kruger, el río Blyde y Soweto"],
          [
            "Une journée complète de safari en 4x4 dans le Kruger, la route des Panoramas, puis Johannesburg.",
            "A full day's 4x4 safari in Kruger, the Panorama Route, then Johannesburg.",
            "Una jornada completa de safari en 4x4 en el Kruger, la ruta de los Panoramas y Johannesburgo.",
          ],
          ["gt9", "sd1", "in7", "il2"],
          [
            day(14,
              ["Journée complète dans le parc Kruger", "A full day in Kruger Park", "Jornada completa en el parque Kruger"],
              [
                "Journée entière de safari en 4x4 dans le parc national Kruger, la réserve la plus riche du continent, à la recherche des Big Five. Pique-nique dans le parc.",
                "A whole day's 4x4 safari in Kruger National Park, the richest reserve on the continent, looking for the Big Five. Picnic in the park.",
                "Jornada entera de safari en 4x4 por el parque nacional Kruger, la reserva más rica del continente, en busca de los Cinco Grandes. Pícnic en el parque.",
              ], "gt9"),
            day(15,
              ["La route des Panoramas – Waterval Boven", "The Panorama Route – Waterval Boven", "La ruta de los Panoramas – Waterval Boven"],
              [
                "Le canyon de la Blyde River, profond de 600 à 800 m : les marmites de Bourke's Luck et les Trois Rondavels. Déjeuner, puis visite du village minier de Pilgrim's Rest, né de la ruée vers l'or de 1873.",
                "The Blyde River Canyon, 600 to 800 m deep: the Bourke's Luck potholes and the Three Rondavels. Lunch, then a visit to the mining village of Pilgrim's Rest, born of the 1873 gold rush.",
                "El cañón del río Blyde, de 600 a 800 m de profundidad: las marmitas de Bourke's Luck y los Tres Rondavels. Almuerzo y visita al pueblo minero de Pilgrim's Rest, nacido de la fiebre del oro de 1873.",
              ], "in7"),
            day(16,
              ["Johannesburg et le musée de l'Apartheid", "Johannesburg and the Apartheid Museum", "Johannesburgo y el museo del Apartheid"],
              [
                "Route vers le Gauteng et Johannesburg. Visite du musée de l'Apartheid, puis dîner de viandes du bush.",
                "Drive to Gauteng and Johannesburg. Visit the Apartheid Museum, then a dinner of bush meats.",
                "Carretera hacia Gauteng y Johannesburgo. Visita al museo del Apartheid y cena de carnes de caza.",
              ], "il1"),
            day(17,
              ["Soweto – vol retour", "Soweto – flight home", "Soweto – vuelo de regreso"],
              [
                "Déjeuner dans un shebeen et visite de Soweto avec un guide qui y habite : la rue des Nobel et la maison de Nelson Mandela (extérieur). Transfert à l'aéroport de Johannesburg et vol retour.",
                "Lunch in a shebeen and a tour of Soweto with a guide who lives there: Nobel Street and Nelson Mandela's house (outside). Transfer to Johannesburg airport and flight home.",
                "Almuerzo en un shebeen y visita de Soweto con un guía que vive allí: la calle de los Nobel y la casa de Nelson Mandela (exterior). Traslado al aeropuerto de Johannesburgo y vuelo de regreso.",
              ], "il2"),
            day(18, T_HOME, HOME, "gt3"),
          ]
        ),
      ],
    }),

    // ───────────── 6. Trésors d'Afrique du Sud, Chutes Victoria & Chobe — 13J/10N ─────────────
    trip({
      slug: "afrique-du-sud-le-cap-kruger-victoria-chobe-13j",
      name: [
        "Le Cap, le Kruger, les chutes Victoria et Chobe en petit groupe",
        "Cape Town, Kruger, Victoria Falls and Chobe in a Small Group",
        "Ciudad del Cabo, el Kruger, las cataratas Victoria y Chobe en grupo reducido",
      ],
      tagline: [
        "Dix voyageurs au plus, trois pays, des vols intérieurs plutôt que de longues routes",
        "Ten travellers at most, three countries, domestic flights instead of long drives",
        "Diez viajeros como máximo, tres países y vuelos interiores en lugar de largas carreteras",
      ],
      description: [
        "Trois pays en treize jours, sans longues étapes en car grâce à deux vols intérieurs. Au Cap, quatre jours avec le téléphérique de la montagne de la Table, l'apéritif au champagne sud-africain à Signal Hill, la route des Vins à bord du Wine Tram et la péninsule. Puis trois nuits en camp de tentes près du Kruger, avec deux journées de safari en 4x4, avant de rejoindre le Botswana pour un safari en bateau et un autre en 4x4 dans le parc de Chobe, une croisière sur le Zambèze et la visite à pied des chutes Victoria, côté Zimbabwe. Groupe de 10 personnes au maximum, à partir de 7 ans.",
        "Three countries in thirteen days, with no long coach journeys thanks to two domestic flights. In Cape Town, four days with the Table Mountain cable car, a South African sparkling-wine sundowner on Signal Hill, the Winelands aboard the Wine Tram and the peninsula. Then three nights in a tented camp near Kruger, with two full days of 4x4 safari, before crossing into Botswana for a boat safari and a 4x4 safari in Chobe Park, a cruise on the Zambezi and a walking tour of Victoria Falls, on the Zimbabwe side. Groups of 10 at most, from age 7.",
        "Tres países en trece días, sin largas etapas en autocar gracias a dos vuelos interiores. En Ciudad del Cabo, cuatro días con el teleférico de la montaña de la Mesa, un aperitivo con espumoso sudafricano en Signal Hill, la ruta del Vino a bordo del Wine Tram y la península. Después, tres noches en campamento de tiendas cerca del Kruger, con dos jornadas de safari en 4x4, antes de pasar a Botsuana para un safari en barco y otro en 4x4 en el parque de Chobe, un crucero por el Zambeze y la visita a pie de las cataratas Victoria, del lado de Zimbabue. Grupos de 10 personas como máximo, a partir de 7 años.",
      ],
      includes: [
        "Vols depuis la France,Vols Le Cap–Nelspruit et Nelspruit–Victoria Falls,10 nuits en hôtels et camp 3* et 4*,Pension selon programme,Safaris en 4x4 et en bateau,Croisière sur le Zambèze,Guides accompagnateurs",
        "Flights from France,Cape Town–Nelspruit and Nelspruit–Victoria Falls flights,10 nights in 3* and 4* hotels and camp,Meals as per programme,Safaris by 4x4 and by boat,Zambezi cruise,Tour guides",
        "Vuelos desde Francia,Vuelos Ciudad del Cabo–Nelspruit y Nelspruit–Victoria Falls,10 noches en hoteles y campamento de 3* y 4*,Comidas según programa,Safaris en 4x4 y en barco,Crucero por el Zambeze,Guías acompañantes",
      ],
      price: 5377, nights: 10, departureFrom: "Lyon", image: "tr9",
      theme: "adventure", feeling: "contentment", travelerTypes: "couples,honeymoon,family", maxGuests: 10, order: -93995,
      chapters: [
        chapter(
          ["Le Cap", "Cape Town", "Ciudad del Cabo"],
          [
            "Quatre nuits au Cap, entre la montagne de la Table, les vignobles et la péninsule.",
            "Four nights in Cape Town, between Table Mountain, the vineyards and the peninsula.",
            "Cuatro noches en Ciudad del Cabo, entre la montaña de la Mesa, los viñedos y la península.",
          ],
          ["tr2", "tr3", "tr4", "tr5"],
          [
            day(1, ...flyTo("Le Cap", "Cape Town", "Ciudad del Cabo"), "tr2"),
            day(2,
              ["Arrivée au Cap", "Arrival in Cape Town", "Llegada a Ciudad del Cabo"],
              [
                "Arrivée au Cap dans la journée et transfert à l'hôtel. Repas libres.",
                "Arrive in Cape Town during the day and transfer to the hotel. Meals on your own.",
                "Llegada a Ciudad del Cabo durante el día y traslado al hotel. Comidas libres.",
              ], "tr2"),
            day(3,
              ["La montagne de la Table et Signal Hill", "Table Mountain and Signal Hill", "La montaña de la Mesa y Signal Hill"],
              [
                "Tour de ville : le château de Bonne-Espérance, le Waterfront, le quartier de Woodstock et ses ateliers d'artisanat de l'Old Biscuit Mill. Montée en téléphérique à la montagne de la Table, selon la météo, puis apéritif au champagne sud-africain au sommet de Signal Hill.",
                "A city tour: the Castle of Good Hope, the Waterfront, the Woodstock district and its craft workshops at the Old Biscuit Mill. A cable car ride up Table Mountain, weather permitting, then a South African sparkling-wine sundowner on top of Signal Hill.",
                "Visita de la ciudad: el castillo de Buena Esperanza, el Waterfront, el barrio de Woodstock y sus talleres de artesanía del Old Biscuit Mill. Subida en teleférico a la montaña de la Mesa, si el tiempo lo permite, y aperitivo con espumoso sudafricano en la cima de Signal Hill.",
              ], "tr2"),
            day(4,
              ["Le Wine Tram et Kirstenbosch", "The Wine Tram and Kirstenbosch", "El Wine Tram y Kirstenbosch"],
              [
                "Embarquement à bord du Wine Tram, un tramway qui serpente dans les vallées viticoles et s'arrête dans plusieurs domaines pour des dégustations. Retour au Cap par le jardin botanique de Kirstenbosch.",
                "Board the Wine Tram, a tramway that winds through the wine valleys and stops at several estates for tastings. Back to Cape Town via Kirstenbosch botanical garden.",
                "Embarque en el Wine Tram, un tranvía que serpentea por los valles vitícolas y se detiene en varias bodegas para catas. Regreso a Ciudad del Cabo por el jardín botánico de Kirstenbosch.",
              ], "tr3"),
            day(5,
              ["La péninsule du Cap", "The Cape Peninsula", "La península del Cabo"],
              [
                "Journée sur la péninsule : croisière vers l'île aux phoques à Hout Bay, village de Simon's Town, déjeuner de poisson et cap de Bonne-Espérance. Le soir, dîner de spécialités africaines.",
                "A day on the peninsula: a cruise to the seal island at Hout Bay, the village of Simon's Town, a fish lunch and the Cape of Good Hope. In the evening, a dinner of African specialities.",
                "Jornada en la península: crucero hasta la isla de las focas en Hout Bay, el pueblo de Simon's Town, almuerzo de pescado y cabo de Buena Esperanza. Por la noche, cena de especialidades africanas.",
              ], "tr5"),
          ]
        ),
        chapter(
          ["Le Kruger en camp de tentes", "Kruger in a tented camp", "El Kruger en campamento de tiendas"],
          [
            "Un vol vers le Kruger et trois nuits dans un camp de tentes en pleine nature, avec deux journées de safari en 4x4.",
            "A flight to Kruger and three nights in a tented camp out in the wild, with two full days of 4x4 safari.",
            "Un vuelo al Kruger y tres noches en un campamento de tiendas en plena naturaleza, con dos jornadas de safari en 4x4.",
          ],
          ["tr6", "tr8", "tr1", "sd6"],
          [
            day(6,
              ["Vol pour le Kruger", "Flight to Kruger", "Vuelo al Kruger"],
              [
                "Vol du Cap vers la région du Kruger. Accueil par votre nouveau guide francophone et route vers le camp de tentes. Apéritif au coucher du soleil.",
                "Fly from Cape Town to the Kruger area. Welcome by your new French-speaking guide and drive to the tented camp. A sundowner.",
                "Vuelo de Ciudad del Cabo a la región del Kruger. Recibimiento por su nuevo guía francófono y carretera hacia el campamento de tiendas. Aperitivo al atardecer.",
              ], "tr1"),
            day(7,
              ["Safari en 4x4 dans le Kruger", "A 4x4 safari in Kruger", "Safari en 4x4 en el Kruger"],
              [
                "Première journée de safari en 4x4 dans le parc national Kruger, pique-nique dans le parc. Dîner boma au camp, selon la météo.",
                "A first full day of 4x4 safari in Kruger National Park, with a picnic in the park. Boma dinner at camp, weather permitting.",
                "Primera jornada de safari en 4x4 por el parque nacional Kruger, con pícnic en el parque. Cena boma en el campamento, si el tiempo lo permite.",
              ], "tr6"),
            day(8,
              ["Deuxième journée de safari", "A second day of safari", "Segunda jornada de safari"],
              [
                "Petit-déjeuner matinal dans le bush, au sein de la concession du camp, puis nouvelle journée de safari en 4x4 dans le Kruger.",
                "An early breakfast in the bush, inside the camp's concession, then another full day of 4x4 safari in Kruger.",
                "Desayuno temprano en la sabana, dentro de la concesión del campamento, y nueva jornada de safari en 4x4 por el Kruger.",
              ], "tr8"),
          ]
        ),
        chapter(
          ["Chobe et les chutes Victoria", "Chobe and Victoria Falls", "Chobe y las cataratas Victoria"],
          [
            "Le Botswana et le Zimbabwe : le parc de Chobe, le Zambèze et l'un des plus grands rideaux d'eau du monde.",
            "Botswana and Zimbabwe: Chobe Park, the Zambezi and one of the largest curtains of water in the world.",
            "Botsuana y Zimbabue: el parque de Chobe, el Zambeze y una de las mayores cortinas de agua del mundo.",
          ],
          ["tr9", "tr7", "tr1"],
          [
            day(9,
              ["Vol pour Victoria Falls – safari en bateau à Chobe", "Flight to Victoria Falls – boat safari in Chobe", "Vuelo a Victoria Falls – safari en barco en Chobe"],
              [
                "Vol de Nelspruit vers les chutes Victoria, puis transfert au Botswana et passage de la frontière. Safari en bateau sur la rivière Chobe.",
                "Fly from Nelspruit to Victoria Falls, then transfer into Botswana across the border. A boat safari on the Chobe River.",
                "Vuelo de Nelspruit a las cataratas Victoria y traslado a Botsuana, con paso de la frontera. Safari en barco por el río Chobe.",
              ], "tr7"),
            day(10,
              ["Safari à Chobe – croisière sur le Zambèze", "Safari in Chobe – a cruise on the Zambezi", "Safari en Chobe – crucero por el Zambeze"],
              [
                "Safari en 4x4 dans le parc national de Chobe, puis route vers Victoria Falls. L'après-midi, croisière sur le Zambèze, à la recherche des hippopotames et des animaux des rives.",
                "A 4x4 safari in Chobe National Park, then drive to Victoria Falls. In the afternoon, a cruise on the Zambezi, looking for hippos and the animals of the riverbanks.",
                "Safari en 4x4 por el parque nacional de Chobe y carretera hacia Victoria Falls. Por la tarde, crucero por el Zambeze, en busca de hipopótamos y de los animales de las orillas.",
              ], "tr1"),
            day(11,
              ["Les chutes Victoria à pied", "Victoria Falls on foot", "Las cataratas Victoria a pie"],
              [
                "Visite guidée à pied des chutes, côté Zimbabwe : un rideau d'eau de 1,7 km qui tombe d'une falaise haute de 108 m au point le plus profond. Déjeuner au Lookout Café, face aux gorges du Zambèze, et après-midi libre.",
                "A guided walking tour of the falls, on the Zimbabwe side: a 1.7-km curtain of water dropping from a cliff 108 m high at its deepest. Lunch at the Lookout Café, facing the Zambezi gorges, and a free afternoon.",
                "Visita guiada a pie de las cataratas, del lado de Zimbabue: una cortina de agua de 1,7 km que cae desde un acantilado de 108 m en su punto más profundo. Almuerzo en el Lookout Café, frente a las gargantas del Zambeze, y tarde libre.",
              ], "tr9"),
            day(12,
              ["Victoria Falls – vol retour", "Victoria Falls – flight home", "Victoria Falls – vuelo de regreso"],
              [
                "Transfert à l'aéroport de Victoria Falls et vol vers la France via Johannesburg. Dîner et nuit à bord.",
                "Transfer to Victoria Falls airport and fly to France via Johannesburg. Dinner and night on board.",
                "Traslado al aeropuerto de Victoria Falls y vuelo a Francia vía Johannesburgo. Cena y noche a bordo.",
              ], "tr9"),
            day(13, T_HOME, HOME, "tr2"),
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
