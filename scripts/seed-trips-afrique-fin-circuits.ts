// Last African countries — 7 journey-format trips: 3 for "senegal", 2 for "tunisie", 1 for
// "botswana", 1 for "rwanda". One trip per circuit; departure-day, private-tour and Casamance
// variants are described inside the trip. Prices are per-person "from" prices. Supplier product
// ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-afrique-fin-circuits.ts
// Requires scripts/upload-images-afrique-fin-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "senegal-authentique-slow-travel-9j": ["124200", "124202"],
  "senegal-decouverte-saint-louis-lompoul-9j": ["329259"],
  "senegal-visages-saloum-casamance-9j": ["394758", "137821", "394759", "137838"],
  "tunisie-mer-oasis-sahara-8j": ["60658", "64098"],
  "tunisie-saharienne-djerba-ksar-ghilane-8j": ["64118", "64138"],
  "botswana-okavango-moremi-chobe-12j": ["90818"],
  "rwanda-gorilles-akagera-nyungwe-kivu-12j": ["395359"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_GOREE: L3 = ["L'île de Gorée et Dakar", "Gorée Island and Dakar", "La isla de Gorea y Dakar"];
const T_LOMPOUL: L3 = ["Le désert de Lompoul", "The Lompoul desert", "El desierto de Lompoul"];
const T_LANGUE: L3 = ["La Langue de Barbarie – Lompoul", "The Langue de Barbarie – Lompoul", "La Langue de Barbarie – Lompoul"];
const LANGUE: L3 = [
  "Descente du fleuve en pirogue dans le parc national de la Langue de Barbarie, autour de l'île aux oiseaux où nichent sternes, goélands et pélicans, jusqu'à la bande de sable entre fleuve et océan, lieu de ponte des tortues marines. Déjeuner dans un lodge au bord du fleuve, puis route vers les dunes de Lompoul et nuit en bivouac.",
  "A pirogue trip down the river in the Langue de Barbarie National Park, around the bird island where terns, gulls and pelicans nest, to the strip of sand between river and ocean where sea turtles lay their eggs. Lunch in a riverside lodge, then drive to the Lompoul dunes and a night in a desert camp.",
  "Descenso del río en piragua por el parque nacional de la Langue de Barbarie, alrededor de la isla de los pájaros donde anidan charranes, gaviotas y pelícanos, hasta la franja de arena entre río y océano, lugar de puesta de las tortugas marinas. Almuerzo en un lodge junto al río y carretera hacia las dunas de Lompoul, con noche en campamento.",
];
const T_DJOUDJ: L3 = ["Saint-Louis et le parc du Djoudj", "Saint-Louis and Djoudj park", "Saint-Louis y el parque del Djoudj"];
const DJOUDJ: L3 = [
  "En haute saison, de novembre à avril, exploration en pirogue du parc national des oiseaux du Djoudj, troisième réserve ornithologique du monde et sanctuaire de plus de trois millions d'oiseaux : pélicans, cormorans, flamants roses. Varans, crocodiles et phacochères fréquentent aussi les rives. Le reste de l'année, la journée est consacrée à Saint-Louis.",
  "In high season, from November to April, a pirogue trip through Djoudj National Bird Park, the third-largest bird reserve in the world and a sanctuary for more than three million birds: pelicans, cormorants, flamingos. Monitor lizards, crocodiles and warthogs also frequent the banks. The rest of the year, the day is devoted to Saint-Louis.",
  "En temporada alta, de noviembre a abril, recorrido en piragua por el parque nacional de aves del Djoudj, tercera reserva ornitológica del mundo y santuario de más de tres millones de aves: pelícanos, cormoranes, flamencos. Varanos, cocodrilos y facóqueros frecuentan también las orillas. El resto del año, la jornada se dedica a Saint-Louis.",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const sn = circuitBuilders({ destinationSlug: "senegal", imagePrefix: "senegal", season: { label: ["Nov à mai", "Nov to May", "Nov a may"], months: "november,december,january,february,march,april,may" } });
  const tn = circuitBuilders({ destinationSlug: "tunisie", imagePrefix: "tunisie", season: { label: ["Mars à mai, sept à nov", "March to May, Sept to Nov", "Mar a may, sept a nov"], months: "march,april,may,september,october,november" } });
  const bw = circuitBuilders({ destinationSlug: "botswana", imagePrefix: "botswana", season: { label: ["Mai à oct", "May to Oct", "May a oct"], months: "may,june,july,august,september,october" } });
  const rw = circuitBuilders({ destinationSlug: "rwanda", imagePrefix: "rwanda", season: { label: ["Juin à sept", "June to Sept", "Jun a sept"], months: "june,july,august,september" } });

  const journeyTrips = [
    // ───────────── Sénégal 1. Sénégal Authentique — 9J/7N ─────────────
    sn.trip({
      slug: "senegal-authentique-slow-travel-9j",
      name: [
        "Sénégal authentique : Lac Rose, Lompoul et delta du Saloum",
        "Authentic Senegal: Lac Rose, Lompoul and the Saloum Delta",
        "Senegal auténtico: Lago Rosa, Lompoul y el delta del Saloum",
      ],
      tagline: [
        "Un voyage lent et solidaire, en écogîtes, au rythme des villages sénégalais",
        "A slow, community-minded trip, staying in eco-lodges, at the pace of Senegalese villages",
        "Un viaje lento y solidario, en ecoalojamientos, al ritmo de los pueblos senegaleses",
      ],
      description: [
        "Un circuit de « slow travel » construit autour des rencontres : la fabrication de fromage de chèvre avec un éleveur peul au Lac Rose, une école de village, la plantation d'arbres dans une pépinière contre l'avancée du désert, une journée avec une famille de Bambougar pour préparer le thiéboudiène, et la mangrove du Saloum en pirogue. Les nuits se passent en campements nature et en bivouac dans les dunes de Lompoul ; quatre actions solidaires sont financées par le prix du voyage (40 € par personne). Départs le vendredi, ou le samedi à partir de 1 137 € par personne.",
        "A 'slow travel' tour built around encounters: making goat's cheese with a Fula herder at Lac Rose, a village school, planting trees in a nursery to hold back the desert, a day with a family in Bambougar cooking thieboudienne, and the Saloum mangrove by pirogue. Nights are spent in nature camps and in a desert camp in the Lompoul dunes; four community projects are funded from the price of the trip (€40 per person). Friday departures, or Saturdays from €1,137 per person.",
        "Un circuito de «slow travel» construido en torno a los encuentros: la elaboración de queso de cabra con un ganadero peul en el Lago Rosa, una escuela de aldea, la plantación de árboles en un vivero contra el avance del desierto, una jornada con una familia de Bambougar para cocinar el thieboudienne y el manglar del Saloum en piragua. Las noches transcurren en campamentos naturales y en un campamento en las dunas de Lompoul; cuatro proyectos solidarios se financian con el precio del viaje (40 € por persona). Salidas los viernes, o los sábados desde 1.137 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en campements nature et bivouac,Pension complète selon programme,Guide ou chauffeur-guide francophone,Visites et excursions du programme,4 actions solidaires",
        "Flights from France,Airport transfers,7 nights in nature camps and a desert camp,Full board as per programme,French-speaking guide or driver-guide,Visits and excursions in the programme,4 community projects",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en campamentos naturales y campamento en el desierto,Pensión completa según programa,Guía o chófer-guía francófono,Visitas y excursiones del programa,4 acciones solidarias",
      ],
      price: 1038, nights: 7, departureFrom: "Barcelone", image: "sa1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 22, order: -90000,
      chapters: [
        sn.chapter(
          ["Le Lac Rose et Gorée", "Lac Rose and Gorée", "El Lago Rosa y Gorea"],
          [
            "Trois nuits dans un écogîte au bord du Lac Rose, avec une journée à Gorée et à Dakar et une autre auprès des éleveurs peuls.",
            "Three nights in an eco-lodge beside Lac Rose, with a day in Gorée and Dakar and another with the Fula herders.",
            "Tres noches en un ecoalojamiento a orillas del Lago Rosa, con una jornada en Gorea y Dakar y otra junto a los ganaderos peul.",
          ],
          ["sa1", "sa11", "sa3", "sa9"],
          [
            sn.day(1,
              ["Dakar – le Lac Rose", "Dakar – Lac Rose", "Dakar – el Lago Rosa"],
              [
                "Envol pour Dakar, accueil et transfert au campement du Lac Rose (45 minutes). Dîner d'une spécialité sénégalaise et nuit en case, avec salle de bain, éclairage et eau chaude solaires.",
                "Fly to Dakar, welcome and transfer to the Lac Rose camp (45 minutes). Dinner of a Senegalese speciality and a night in a hut, with private bathroom and solar lighting and hot water.",
                "Vuelo a Dakar, recibimiento y traslado al campamento del Lago Rosa (45 minutos). Cena de una especialidad senegalesa y noche en una cabaña, con baño propio e iluminación y agua caliente solares.",
              ], "sa1"),
            sn.day(2, T_GOREE,
              [
                "Traversée vers l'île de Gorée, lieu de transit des esclaves vers les Amériques : la Maison des esclaves commentée par son conservateur, la place du gouvernement, l'église et le fort d'Estrées. Déjeuner, puis tour de Dakar : bâtiments coloniaux, cathédrale, palais présidentiel et corniche.",
                "Cross to Gorée Island, a transit point for slaves bound for the Americas: the House of Slaves, presented by its curator, the government square, the church and Fort d'Estrées. Lunch, then a tour of Dakar: colonial buildings, the cathedral, the presidential palace and the corniche.",
                "Travesía a la isla de Gorea, lugar de tránsito de esclavos hacia las Américas: la Casa de los Esclavos comentada por su conservador, la plaza del gobierno, la iglesia y el fuerte de Estrées. Almuerzo y visita de Dakar: edificios coloniales, catedral, palacio presidencial y la cornisa.",
              ], "sa11"),
            sn.day(3,
              ["Fromage peul et Lac Rose", "Fula cheese and Lac Rose", "Queso peul y Lago Rosa"],
              [
                "Pour les lève-tôt, traite des chèvres, puis fabrication de fromage avec Moussa dans une chèvrerie pilote qui valorise l'élevage peul traditionnel. Découverte du lac Retba, le vrai nom du Lac Rose, dont la couleur change avec le soleil et le vent.",
                "For early risers, goat milking, then cheese-making with Moussa in a pilot goat farm that supports traditional Fula herding. Discover Lake Retba, Lac Rose's real name, whose colour shifts with the sun and the wind.",
                "Para los madrugadores, ordeño de cabras y elaboración de queso con Moussa en una granja piloto que valoriza la ganadería peul tradicional. Descubrimiento del lago Retba, el verdadero nombre del Lago Rosa, cuyo color cambia con el sol y el viento.",
              ], "sa9"),
          ]
        ),
        sn.chapter(
          ["Lompoul et le Saloum", "Lompoul and the Saloum", "Lompoul y el Saloum"],
          [
            "Les dunes de Lompoul, puis le delta du Saloum, réserve de biosphère, et ses bolongs bordés de palétuviers.",
            "The dunes of Lompoul, then the Saloum Delta, a biosphere reserve, and its mangrove-lined creeks.",
            "Las dunas de Lompoul y el delta del Saloum, reserva de la biosfera, con sus bolongs bordeados de manglares.",
          ],
          ["sa6", "sa10", "sa8", "sa12", "sa5"],
          [
            sn.day(4, T_LOMPOUL,
              [
                "Démoulage des fromages de la veille, puis visite d'une école de village, avec du matériel apporté aux écoliers. Traversée du cordon dunaire jusqu'à une grande plage déserte, déjeuner face à l'océan et route vers Lompoul pour une nuit en bivouac saharien.",
                "Turn out yesterday's cheeses, then visit a village school, bringing supplies for the pupils. Cross the dunes to a vast empty beach, lunch facing the ocean and drive to Lompoul for a night in a desert camp.",
                "Desmoldado de los quesos de la víspera y visita a una escuela de aldea, con material para los alumnos. Travesía del cordón de dunas hasta una gran playa desierta, almuerzo frente al océano y carretera hacia Lompoul para una noche en campamento sahariano.",
              ], "sa6"),
            sn.day(5,
              ["La pépinière de Lompoul – le Saloum", "The Lompoul nursery – the Saloum", "El vivero de Lompoul – el Saloum"],
              [
                "Visite d'une pépinière villageoise et participation au reboisement contre l'avancée du désert : sacs de terreau, jeunes pousses, arrosage. Route vers Foundiougne et le delta du Saloum (4 heures).",
                "Visit a village tree nursery and take part in the replanting that holds back the desert: soil bags, seedlings, watering. Drive to Foundiougne and the Saloum Delta (4 hours).",
                "Visita a un vivero de aldea y participación en la reforestación contra el avance del desierto: sacos de tierra, plantones, riego. Carretera hacia Foundiougne y el delta del Saloum (4 horas).",
              ], "sa8"),
            sn.day(6,
              ["Une journée en famille à Bambougar", "A day with a family in Bambougar", "Una jornada en familia en Bambougar"],
              [
                "Une journée au rythme d'une famille de Bambougar : marché pour acheter les ingrédients, puis préparation du thiéboudiène, le plat national, pour un déjeuner tardif. En pirogue, visite du grand marché hebdomadaire de Sokone.",
                "A day at the pace of a family in Bambougar: the market to buy the ingredients, then cooking thieboudienne, the national dish, for a late lunch. By pirogue, a visit to the big weekly market in Sokone.",
                "Una jornada al ritmo de una familia de Bambougar: mercado para comprar los ingredientes y preparación del thieboudienne, el plato nacional, para un almuerzo tardío. En piragua, visita al gran mercado semanal de Sokone.",
              ], "sa9"),
            sn.day(7,
              ["Les bolongs du Saloum", "The creeks of the Saloum", "Los bolongs del Saloum"],
              [
                "Journée en pirogue dans le parc national du Saloum, réserve mondiale de la biosphère : un labyrinthe de bolongs bordés de palétuviers, des cueilleuses d'huîtres, de nombreux oiseaux. Barbecue sur une plage déserte et baignade.",
                "A day by pirogue in the Saloum National Park, a world biosphere reserve: a maze of mangrove-lined creeks, women gathering oysters, many birds. A barbecue on an empty beach and a swim.",
                "Jornada en piragua por el parque nacional del Saloum, reserva mundial de la biosfera: un laberinto de bolongs bordeados de manglares, recolectoras de ostras y numerosas aves. Barbacoa en una playa desierta y baño.",
              ], "sa12"),
            sn.day(8,
              ["Kaolack – la Petite Côte – vol retour", "Kaolack – the Petite Côte – flight home", "Kaolack – la Petite Côte – vuelo de regreso"],
              [
                "Route vers la Petite Côte via Kaolack, ancien port arachidier et grande ville africaine d'aujourd'hui. Déjeuner face à l'océan et après-midi à la plage, avant le transfert à l'aéroport de Dakar.",
                "Drive to the Petite Côte via Kaolack, a former groundnut port and a large African city today. Lunch facing the ocean and an afternoon on the beach, before the transfer to Dakar airport.",
                "Carretera hacia la Petite Côte por Kaolack, antiguo puerto del cacahuete y hoy gran ciudad africana. Almuerzo frente al océano y tarde en la playa, antes del traslado al aeropuerto de Dakar.",
              ], "sa5"),
            sn.day(9, T_HOME, HOME, "sa4"),
          ]
        ),
      ],
    }),

    // ───────────── Sénégal 2. Découverte du Sénégal — 9J/7N ─────────────
    sn.trip({
      slug: "senegal-decouverte-saint-louis-lompoul-9j",
      name: [
        "Découverte du Sénégal : Gorée, Saint-Louis, Lompoul et la Petite Côte",
        "Discovering Senegal: Gorée, Saint-Louis, Lompoul and the Petite Côte",
        "Descubrir Senegal: Gorea, Saint-Louis, Lompoul y la Petite Côte",
      ],
      tagline: [
        "Cinq nuits de circuit et deux de détente à Saly, idéal pour un premier voyage",
        "Five nights touring and two relaxing in Saly, ideal for a first visit",
        "Cinco noches de circuito y dos de descanso en Saly, ideal para un primer viaje",
      ],
      description: [
        "Une première approche du Sénégal en calèche, en pirogue et en 4x4 : l'île de Gorée, le Lac Rose traversé en pirogue à sel, Saint-Louis et, de novembre à avril, le parc aux oiseaux du Djoudj, la Langue de Barbarie, une nuit en bivouac dans les dunes de Lompoul, le marché de Thiès, la forêt de baobabs et la lagune de la Somone. Le voyage se termine par deux journées libres dans un hôtel 3* de Saly, au bord de l'océan, avec des excursions en option (Saloum et Fadiouth, réserve de Bandia).",
        "A first taste of Senegal by horse cart, pirogue and 4x4: Gorée Island, Lac Rose crossed in a salt pirogue, Saint-Louis and, from November to April, Djoudj bird park, the Langue de Barbarie, a night in a desert camp in the Lompoul dunes, the market in Thiès, the baobab forest and the Somone lagoon. The trip ends with two free days in a 3* hotel in Saly, by the ocean, with optional excursions (the Saloum and Fadiouth, Bandia reserve).",
        "Una primera aproximación a Senegal en calesa, en piragua y en 4x4: la isla de Gorea, el Lago Rosa atravesado en piragua de sal, Saint-Louis y, de noviembre a abril, el parque de aves del Djoudj, la Langue de Barbarie, una noche en campamento en las dunas de Lompoul, el mercado de Thiès, el bosque de baobabs y la laguna de la Somone. El viaje termina con dos días libres en un hotel de 3* de Saly, junto al océano, con excursiones opcionales (Saloum y Fadiouth, reserva de Bandia).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtels 3* campement et bivouac,Pension selon programme,Guide ou chauffeur-guide francophone,Visites et excursions du programme",
        "Flights from France,Airport transfers,7 nights in 3* hotels a camp and a desert camp,Meals as per programme,French-speaking guide or driver-guide,Visits and excursions in the programme",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hoteles de 3* campamento y vivac,Comidas según programa,Guía o chófer-guía francófono,Visitas y excursiones del programa",
      ],
      price: 1193, nights: 7, departureFrom: "Barcelone", image: "ds3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 24, order: -89999,
      chapters: [
        sn.chapter(
          ["Dakar, Gorée et le Lac Rose", "Dakar, Gorée and Lac Rose", "Dakar, Gorea y el Lago Rosa"],
          [
            "Deux nuits au bord du Lac Rose, avec l'île de Gorée et Dakar entre les deux.",
            "Two nights beside Lac Rose, with Gorée Island and Dakar in between.",
            "Dos noches a orillas del Lago Rosa, con la isla de Gorea y Dakar entre medias.",
          ],
          ["ds8", "vs2", "sa11", "sa1"],
          [
            sn.day(1,
              ["Dakar – le Lac Rose", "Dakar – Lac Rose", "Dakar – el Lago Rosa"],
              [
                "Envol pour Dakar, accueil et transfert au lac Retba, le vrai nom du Lac Rose. Installation en case supérieure dans un campement et dîner d'une spécialité sénégalaise.",
                "Fly to Dakar, welcome and transfer to Lake Retba, Lac Rose's real name. Check into a superior hut in a camp and dinner of a Senegalese speciality.",
                "Vuelo a Dakar, recibimiento y traslado al lago Retba, el verdadero nombre del Lago Rosa. Instalación en una cabaña superior de un campamento y cena de una especialidad senegalesa.",
              ], "sa1"),
            sn.day(2, T_GOREE,
              [
                "Traversée vers l'île de Gorée et visite de la Maison des esclaves. Déjeuner sur l'île, puis tour de Dakar : bâtiments coloniaux, cathédrale, palais présidentiel, marché Kermel, corniche face aux îles de la Madeleine et mosquée de Ouakam.",
                "Cross to Gorée Island and visit the House of Slaves. Lunch on the island, then a tour of Dakar: colonial buildings, the cathedral, the presidential palace, Kermel market, the corniche facing the Madeleine Islands and Ouakam mosque.",
                "Travesía a la isla de Gorea y visita a la Casa de los Esclavos. Almuerzo en la isla y visita de Dakar: edificios coloniales, catedral, palacio presidencial, mercado Kermel, la cornisa frente a las islas de la Madeleine y la mezquita de Ouakam.",
              ], "vs2"),
            sn.day(3,
              ["Le Lac Rose en pirogue à sel – Saint-Louis", "Lac Rose by salt pirogue – Saint-Louis", "El Lago Rosa en piragua de sal – Saint-Louis"],
              [
                "Traversée du Lac Rose en pirogue à sel : sa salinité dépasse celle de la mer Morte, et l'on flotte sans effort si l'on s'y baigne. Route vers le nord et Saint-Louis, ancienne capitale classée à l'Unesco.",
                "Cross Lac Rose in a salt pirogue: its salinity is higher than the Dead Sea's, and you float effortlessly if you swim. Drive north to Saint-Louis, the former capital, a UNESCO site.",
                "Travesía del Lago Rosa en piragua de sal: su salinidad supera la del mar Muerto y se flota sin esfuerzo al bañarse. Carretera hacia el norte y Saint-Louis, antigua capital inscrita en la Unesco.",
              ], "ds8"),
          ]
        ),
        sn.chapter(
          ["Saint-Louis et Lompoul", "Saint-Louis and Lompoul", "Saint-Louis y Lompoul"],
          [
            "Le nord du pays : Saint-Louis, les oiseaux du Djoudj et de la Langue de Barbarie, puis une nuit dans les dunes.",
            "The north of the country: Saint-Louis, the birds of Djoudj and the Langue de Barbarie, then a night in the dunes.",
            "El norte del país: Saint-Louis, las aves del Djoudj y de la Langue de Barbarie, y una noche en las dunas.",
          ],
          ["ds3", "ds5", "sa6", "sa10"],
          [
            sn.day(4, T_DJOUDJ, DJOUDJ, "ds5"),
            sn.day(5, T_LANGUE, LANGUE, "sa6"),
          ]
        ),
        sn.chapter(
          ["Thiès, la Somone et Saly", "Thiès, the Somone and Saly", "Thiès, la Somone y Saly"],
          [
            "Le marché de Thiès, la forêt de baobabs de Sindia et la lagune de la Somone, puis deux jours de repos à Saly.",
            "Thiès market, the Sindia baobab forest and the Somone lagoon, then two days of rest in Saly.",
            "El mercado de Thiès, el bosque de baobabs de Sindia y la laguna de la Somone, y dos días de descanso en Saly.",
          ],
          ["ds1", "ds10", "ds4", "sa5"],
          [
            sn.day(6,
              ["Thiès et la lagune de la Somone – Saly", "Thiès and the Somone lagoon – Saly", "Thiès y la laguna de la Somone – Saly"],
              [
                "Route par Mékhé, capitale de la chaussure sénégalaise, et Thiès, où l'on fait le tour du marché central : légumes, épices, tissus, remèdes et gris-gris. Panorama sur la forêt de baobabs de Sindia, puis la lagune de la Somone, réserve naturelle classée. Installation à Saly.",
                "Drive via Mékhé, Senegal's shoe-making capital, and Thiès, with a walk round the central market: vegetables, spices, fabrics, remedies and gris-gris charms. A view over the Sindia baobab forest, then the Somone lagoon, a listed nature reserve. Check in at Saly.",
                "Carretera por Mékhé, capital del calzado senegalés, y Thiès, con un recorrido por el mercado central: verduras, especias, telas, remedios y gris-gris. Panorámica del bosque de baobabs de Sindia y la laguna de la Somone, reserva natural protegida. Instalación en Saly.",
              ], "ds1"),
            sn.day(7,
              ["Saly, journée libre", "Saly, free day", "Saly, jornada libre"],
              [
                "Journée libre à l'hôtel, entre piscine et océan. En option, à régler sur place (75 € par personne) : le Saloum et Fadiouth, l'île aux coquillages, avec la visite d'un village sérère.",
                "A free day at the hotel, between the pool and the ocean. Optional, payable locally (€75 per person): the Saloum and Fadiouth, the shell island, with a visit to a Serer village.",
                "Jornada libre en el hotel, entre piscina y océano. Opcional, a pagar in situ (75 € por persona): el Saloum y Fadiouth, la isla de las conchas, con visita a una aldea serer.",
              ], "ds10"),
            sn.day(8,
              ["Saly – vol retour", "Saly – flight home", "Saly – vuelo de regreso"],
              [
                "Journée libre. En option (55 € par personne) : safari en 4x4 dans la réserve de Bandia, avec rhinocéros blancs, girafes, zèbres et buffles. Transfert à l'aéroport de Dakar selon l'horaire du vol.",
                "A free day. Optional (€55 per person): a 4x4 safari in Bandia reserve, with white rhinos, giraffes, zebras and buffalo. Transfer to Dakar airport according to your flight time.",
                "Jornada libre. Opcional (55 € por persona): safari en 4x4 por la reserva de Bandia, con rinocerontes blancos, jirafas, cebras y búfalos. Traslado al aeropuerto de Dakar según el horario del vuelo.",
              ], "sa5"),
            sn.day(9, T_HOME, HOME, "ds3"),
          ]
        ),
      ],
    }),

    // ───────────── Sénégal 3. Visages du Sénégal — 9J/7N ─────────────
    sn.trip({
      slug: "senegal-visages-saloum-casamance-9j",
      name: [
        "Visages du Sénégal : Gorée, Saint-Louis, Lompoul et le Saloum",
        "Faces of Senegal: Gorée, Saint-Louis, Lompoul and the Saloum",
        "Rostros de Senegal: Gorea, Saint-Louis, Lompoul y el Saloum",
      ],
      tagline: [
        "Trois sites de l'Unesco en neuf jours, avec une extension possible en Casamance",
        "Three UNESCO sites in nine days, with a possible extension to Casamance",
        "Tres sitios de la Unesco en nueve días, con una extensión posible a Casamance",
      ],
      description: [
        "Les grands sites du Sénégal, dont trois classés à l'Unesco : l'île de Gorée, Saint-Louis et les îles du Saloum. Le circuit passe par le Lac Rose en pirogue à sel, le parc du Djoudj en haute saison, la Langue de Barbarie, une nuit nomade dans les dunes de Lompoul traversées en 4x4, puis deux nuits à Toubacouta, au cœur du delta du Saloum, avec une sortie en charrette et en pirogue. Hôtels 3* (normes locales). Extension en Casamance (14 jours, à partir de 2 919 € par personne) : Ziguinchor, les villages diolas, les îles de Karabane et la plage de Cap Skirring.",
        "Senegal's great sites, three of them UNESCO-listed: Gorée Island, Saint-Louis and the Saloum islands. The tour takes in Lac Rose by salt pirogue, Djoudj park in high season, the Langue de Barbarie, a nomad night in the Lompoul dunes crossed by 4x4, then two nights in Toubacouta, in the heart of the Saloum Delta, with an outing by horse cart and pirogue. 3* hotels (local rating). Casamance extension (14 days, from €2,919 per person): Ziguinchor, the Diola villages, the Karabane islands and the beach at Cap Skirring.",
        "Los grandes lugares de Senegal, tres de ellos inscritos en la Unesco: la isla de Gorea, Saint-Louis y las islas del Saloum. El circuito pasa por el Lago Rosa en piragua de sal, el parque del Djoudj en temporada alta, la Langue de Barbarie, una noche nómada en las dunas de Lompoul atravesadas en 4x4 y dos noches en Toubacouta, en el corazón del delta del Saloum, con una salida en carreta y en piragua. Hoteles de 3* (categoría local). Extensión a Casamance (14 días, desde 2.919 € por persona): Ziguinchor, las aldeas diola, las islas de Karabane y la playa de Cap Skirring.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtels 3* et bivouac,Pension selon programme,Guide ou chauffeur-guide francophone,Visites et excursions du programme",
        "Flights from France,Airport transfers,7 nights in 3* hotels and a desert camp,Meals as per programme,French-speaking guide or driver-guide,Visits and excursions in the programme",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hoteles de 3* y campamento,Comidas según programa,Guía o chófer-guía francófono,Visitas y excursiones del programa",
      ],
      price: 1739, nights: 7, departureFrom: "Toulouse", image: "vs3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 18, order: -89998,
      chapters: [
        sn.chapter(
          ["Dakar et Gorée", "Dakar and Gorée", "Dakar y Gorea"],
          [
            "Le voyage commence par la capitale et l'île de Gorée, mémoire de la traite.",
            "The trip begins with the capital and Gorée Island, a place of memory of the slave trade.",
            "El viaje empieza por la capital y la isla de Gorea, memoria de la trata.",
          ],
          ["vs2", "vs1", "sa3"],
          [
            sn.day(1,
              ["Arrivée à Dakar", "Arrival in Dakar", "Llegada a Dakar"],
              [
                "Envol pour Dakar, accueil et transfert à votre hôtel du centre-ville. Dîner libre.",
                "Fly to Dakar, welcome and transfer to your hotel in the city centre. Dinner on your own.",
                "Vuelo a Dakar, recibimiento y traslado a su hotel del centro. Cena libre.",
              ], "sa3"),
            sn.day(2, T_GOREE,
              [
                "Traversée vers l'île de Gorée ; possibilité d'assister à la messe animée par la chorale de l'île. Visite de la Maison des esclaves et promenade dans les ruelles fleuries jusqu'au promontoire sur la baie de Dakar. Déjeuner sur l'île, puis retour à Dakar et visite du musée des Civilisations noires.",
                "Cross to Gorée Island; you can attend the Mass sung by the island's choir. Visit the House of Slaves and walk the flower-lined lanes to the headland over the bay of Dakar. Lunch on the island, then back to Dakar and a visit to the Museum of Black Civilisations.",
                "Travesía a la isla de Gorea; es posible asistir a la misa animada por el coro de la isla. Visita a la Casa de los Esclavos y paseo por las callejuelas floridas hasta el promontorio sobre la bahía de Dakar. Almuerzo en la isla, regreso a Dakar y visita al museo de las Civilizaciones Negras.",
              ], "vs2"),
          ]
        ),
        sn.chapter(
          ["Lac Rose, Saint-Louis et Lompoul", "Lac Rose, Saint-Louis and Lompoul", "Lago Rosa, Saint-Louis y Lompoul"],
          [
            "Le Lac Rose, puis le nord : Saint-Louis, le Djoudj, la Langue de Barbarie et les dunes de Lompoul.",
            "Lac Rose, then the north: Saint-Louis, Djoudj, the Langue de Barbarie and the Lompoul dunes.",
            "El Lago Rosa y el norte: Saint-Louis, el Djoudj, la Langue de Barbarie y las dunas de Lompoul.",
          ],
          ["ds8", "ds3", "ds5", "sa6"],
          [
            sn.day(3,
              ["Le Lac Rose – Kayar – Saint-Louis", "Lac Rose – Kayar – Saint-Louis", "El Lago Rosa – Kayar – Saint-Louis"],
              [
                "Le lac Retba, ou Lac Rose, avec les ramasseurs de sel et une traversée en pirogue à sel. Balade à cheval en option. Route vers le nord par Kayar jusqu'à Saint-Louis.",
                "Lake Retba, or Lac Rose, with the salt gatherers and a crossing by salt pirogue. Optional horse ride. Drive north via Kayar to Saint-Louis.",
                "El lago Retba, o Lago Rosa, con los recolectores de sal y una travesía en piragua de sal. Paseo a caballo opcional. Carretera hacia el norte por Kayar hasta Saint-Louis.",
              ], "ds8"),
            sn.day(4, T_DJOUDJ, DJOUDJ, "ds5"),
            sn.day(5, T_LANGUE, LANGUE, "sa6"),
          ]
        ),
        sn.chapter(
          ["Le delta du Saloum", "The Saloum Delta", "El delta del Saloum"],
          [
            "Deux nuits à Toubacouta, au bord des bolongs du Saloum, avant le retour à Dakar.",
            "Two nights in Toubacouta, on the creeks of the Saloum, before returning to Dakar.",
            "Dos noches en Toubacouta, a orillas de los bolongs del Saloum, antes del regreso a Dakar.",
          ],
          ["vs3", "vs4", "vs5", "sa12"],
          [
            sn.day(6,
              ["La pépinière de Lompoul – Toubacouta", "The Lompoul nursery – Toubacouta", "El vivero de Lompoul – Toubacouta"],
              [
                "Visite d'une pépinière villageoise et participation au reboisement contre l'avancée du désert. Route vers le Saloum par Fatick et Foundiougne, jusqu'à Toubacouta.",
                "Visit a village tree nursery and take part in the replanting against the advancing desert. Drive to the Saloum via Fatick and Foundiougne, to Toubacouta.",
                "Visita a un vivero de aldea y participación en la reforestación contra el avance del desierto. Carretera hacia el Saloum por Fatick y Foundiougne, hasta Toubacouta.",
              ], "vs4"),
            sn.day(7,
              ["Dassilamé Sérère et les bolongs en pirogue", "Dassilamé Sérère and the creeks by pirogue", "Dassilamé Sérère y los bolongs en piragua"],
              [
                "Piste jusqu'au village traditionnel de Dassilamé Sérère, parcouru en charrette sur un « éco-chemin » qui raconte la vie du village. Puis excursion en pirogue dans le parc national du Saloum, réserve mondiale de la biosphère.",
                "A track to the traditional village of Dassilamé Sérère, explored by horse cart along an 'eco-trail' that tells the story of village life. Then a pirogue trip in the Saloum National Park, a world biosphere reserve.",
                "Pista hasta la aldea tradicional de Dassilamé Sérère, recorrida en carreta por un «ecocamino» que cuenta la vida del pueblo. Después, excursión en piragua por el parque nacional del Saloum, reserva mundial de la biosfera.",
              ], "vs3"),
            sn.day(8,
              ["Toubacouta – Dakar – vol retour", "Toubacouta – Dakar – flight home", "Toubacouta – Dakar – vuelo de regreso"],
              [
                "Matinée libre : piscine, kayak dans les bolongs ou promenade dans le village. En option, safari dans la réserve de Fathala. Route vers Dakar et l'aéroport.",
                "A free morning: the pool, kayaking in the creeks or a walk in the village. Optional: a safari in Fathala reserve. Drive to Dakar and the airport.",
                "Mañana libre: piscina, kayak por los bolongs o paseo por el pueblo. Opcional: safari en la reserva de Fathala. Carretera hacia Dakar y el aeropuerto.",
              ], "vs5"),
            sn.day(9, T_HOME, HOME, "vs1"),
          ]
        ),
      ],
    }),

    // ───────────── Tunisie 1. Mer & Oasis — 8J/7N ─────────────
    tn.trip({
      slug: "tunisie-mer-oasis-sahara-8j",
      name: [
        "Tunisie : mer à Hammamet et oasis du Sahara en 4x4",
        "Tunisia: The Sea at Hammamet and Saharan Oases by 4x4",
        "Túnez: mar en Hammamet y oasis del Sáhara en 4x4",
      ],
      tagline: [
        "Trois jours de découverte entre El Jem, Douz et les oasis de montagne, quatre jours de plage",
        "Three days exploring El Jem, Douz and the mountain oases, four days at the beach",
        "Tres días de descubrimiento entre El Jem, Douz y los oasis de montaña, y cuatro de playa",
      ],
      description: [
        "Le compromis idéal entre découverte et farniente. Au départ d'Hammamet, trois journées en 4x4 et en car vers le sud : l'amphithéâtre romain d'El Jem, le plus grand d'Afrique, les maisons troglodytes de Matmata, les dunes de Douz, la traversée du chott el-Jérid et les oasis de montagne de Chebika, Tamerza et Mides. Le reste du séjour se passe en pension complète dans un hôtel 4* d'Hammamet. Arrivée à Tunis ou Monastir. Version en circuit privatif à partir de 1 069 € par personne.",
        "The ideal balance between discovery and relaxation. From Hammamet, three days by 4x4 and coach to the south: the Roman amphitheatre of El Jem, the largest in Africa, the cave dwellings of Matmata, the dunes of Douz, the crossing of the Chott el-Jerid and the mountain oases of Chebika, Tamerza and Mides. The rest of the stay is on full board in a 4* hotel in Hammamet. Arrival in Tunis or Monastir. Private tour version from €1,069 per person.",
        "El equilibrio ideal entre descubrimiento y descanso. Desde Hammamet, tres jornadas en 4x4 y autocar hacia el sur: el anfiteatro romano de El Jem, el mayor de África, las viviendas trogloditas de Matmata, las dunas de Douz, la travesía del chott el-Djerid y los oasis de montaña de Chebika, Tamerza y Mides. El resto de la estancia es en pensión completa en un hotel de 4* de Hammamet. Llegada a Túnez o Monastir. Versión en circuito privado desde 1.069 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtels 4*,Pension complète,3 journées de découverte en 4x4 et car,Guide ou chauffeur-guide francophone,Entrées des sites",
        "Flights from France,Airport transfers,7 nights in 4* hotels,Full board,3 days of touring by 4x4 and coach,French-speaking guide or driver-guide,Site entrance fees",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hoteles de 4*,Pensión completa,3 jornadas de descubrimiento en 4x4 y autocar,Guía o chófer-guía francófono,Entradas a los sitios",
      ],
      price: 994, nights: 7, departureFrom: "Strasbourg", image: "mo4",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 12, order: -89997,
      chapters: [
        tn.chapter(
          ["Hammamet", "Hammamet", "Hammamet"],
          [
            "Arrivée et première journée libre à Hammamet, au bord de la Méditerranée.",
            "Arrival and a first free day in Hammamet, on the Mediterranean.",
            "Llegada y primera jornada libre en Hammamet, a orillas del Mediterráneo.",
          ],
          ["mo7", "mo1"],
          [
            tn.day(1,
              ["Arrivée à Hammamet", "Arrival in Hammamet", "Llegada a Hammamet"],
              [
                "Envol pour Tunis ou Monastir, accueil et transfert à votre hôtel d'Hammamet. Dîner et nuit.",
                "Fly to Tunis or Monastir, welcome and transfer to your hotel in Hammamet. Dinner and overnight.",
                "Vuelo a Túnez o Monastir, recibimiento y traslado a su hotel de Hammamet. Cena y noche.",
              ], "mo7"),
            tn.day(2,
              ["Hammamet, journée libre", "Hammamet, free day", "Hammamet, jornada libre"],
              ["Journée libre en pension complète à l'hôtel.", "A free day on full board at the hotel.", "Jornada libre en pensión completa en el hotel."], "mo1"),
          ]
        ),
        tn.chapter(
          ["El Jem, Douz et les oasis", "El Jem, Douz and the oases", "El Jem, Douz y los oasis"],
          [
            "Trois jours vers le sud : un amphithéâtre romain, les maisons creusées de Matmata, le Sahara de Douz, un lac salé et des oasis de montagne.",
            "Three days in the south: a Roman amphitheatre, the dug-out houses of Matmata, the Sahara at Douz, a salt lake and mountain oases.",
            "Tres días hacia el sur: un anfiteatro romano, las casas excavadas de Matmata, el Sáhara de Douz, un lago salado y oasis de montaña.",
          ],
          ["mo3", "sh1", "mo4", "mo5", "mo6"],
          [
            tn.day(3,
              ["El Jem, Matmata et Douz", "El Jem, Matmata and Douz", "El Jem, Matmata y Douz"],
              [
                "Visite de l'amphithéâtre romain d'El Jem, le plus grand d'Afrique. Continuation par Gabès jusqu'à Matmata pour ses habitations troglodytes, puis piste vers Douz et ses dunes de sable fin (environ 520 km). En option sur place : promenade à dos de dromadaire (environ 10 €).",
                "Visit the Roman amphitheatre of El Jem, the largest in Africa. Continue via Gabès to Matmata for its cave dwellings, then a track to Douz and its fine sand dunes (about 520 km). Optional locally: a camel ride (about €10).",
                "Visita al anfiteatro romano de El Jem, el mayor de África. Continuación por Gabès hasta Matmata para ver sus viviendas trogloditas y pista hacia Douz y sus dunas de arena fina (unos 520 km). Opcional in situ: paseo en dromedario (unos 10 €).",
              ], "mo3"),
            tn.day(4,
              ["Le désert en 4x4 et le chott el-Jérid – Tozeur", "The desert by 4x4 and the Chott el-Jerid – Tozeur", "El desierto en 4x4 y el chott el-Djerid – Tozeur"],
              [
                "Journée en 4x4 : les dunes de Douz, les oasis de Noail et Zaafrane, puis la traversée du chott el-Jérid, immense lac salé asséché. Arrivée à Tozeur pour le déjeuner.",
                "A day by 4x4: the dunes of Douz, the oases of Noail and Zaafrane, then the crossing of the Chott el-Jerid, a vast dry salt lake. Arrive in Tozeur for lunch.",
                "Jornada en 4x4: las dunas de Douz, los oasis de Noail y Zaafrane y la travesía del chott el-Djerid, un inmenso lago salado seco. Llegada a Tozeur para el almuerzo.",
              ], "sh1"),
            tn.day(5,
              ["Chebika, Tamerza et Mides – Hammamet", "Chebika, Tamerza and Mides – Hammamet", "Chebika, Tamerza y Mides – Hammamet"],
              [
                "Les trois oasis de montagne : Chebika, village berbère de pierre et de terre au-dessus d'une vallée, Tamerza, par une piste qui domine un canyon, et Mides, encaissée dans ses parois de granit. Déjeuner à Gafsa et retour à Hammamet par Kairouan.",
                "The three mountain oases: Chebika, a Berber village of stone and earth above a valley, Tamerza, by a track overlooking a canyon, and Mides, set deep between granite walls. Lunch in Gafsa and back to Hammamet via Kairouan.",
                "Los tres oasis de montaña: Chebika, pueblo bereber de piedra y tierra sobre un valle, Tamerza, por una pista que domina un cañón, y Mides, encajado entre paredes de granito. Almuerzo en Gafsa y regreso a Hammamet por Kairuán.",
              ], "mo4"),
          ]
        ),
        tn.chapter(
          ["Retour à Hammamet", "Back to Hammamet", "Regreso a Hammamet"],
          [
            "Deux journées libres en pension complète, avec des excursions en option au départ de l'hôtel.",
            "Two free days on full board, with optional excursions from the hotel.",
            "Dos jornadas libres en pensión completa, con excursiones opcionales desde el hotel.",
          ],
          ["mo7", "mo1"],
          [
            tn.day(6,
              ["Hammamet, journée libre", "Hammamet, free day", "Hammamet, jornada libre"],
              ["Journée libre en pension complète. Excursions en option au départ de l'hôtel.", "A free day on full board. Optional excursions from the hotel.", "Jornada libre en pensión completa. Excursiones opcionales desde el hotel."], "mo7"),
            tn.day(7,
              ["Hammamet, journée libre", "Hammamet, free day", "Hammamet, jornada libre"],
              ["Dernière journée libre au bord de la mer.", "A last free day by the sea.", "Última jornada libre junto al mar."], "mo1"),
            tn.day(8,
              ["Vol retour", "Flight home", "Vuelo de regreso"],
              [
                "Temps libre jusqu'au transfert à l'aéroport de Tunis ou Monastir, puis vol pour la France et arrivée dans la journée.",
                "Free time until the transfer to Tunis or Monastir airport, then the flight to France, arriving the same day.",
                "Tiempo libre hasta el traslado al aeropuerto de Túnez o Monastir y vuelo a Francia, con llegada en el día.",
              ], "mo6"),
          ]
        ),
      ],
    }),

    // ───────────── Tunisie 2. La Saharienne — 8J/7N ─────────────
    tn.trip({
      slug: "tunisie-saharienne-djerba-ksar-ghilane-8j",
      name: [
        "Tunisie saharienne : de Djerba à Ksar Ghilane, Douz et Tozeur",
        "Saharan Tunisia: From Djerba to Ksar Ghilane, Douz and Tozeur",
        "Túnez sahariano: de Yerba a Ksar Ghilane, Douz y Tozeur",
      ],
      tagline: [
        "Ksour, villages troglodytes et une nuit en campement dans le désert",
        "Ksour, cave villages and a night in a desert camp",
        "Ksour, pueblos trogloditas y una noche en campamento en el desierto",
      ],
      description: [
        "Une Tunisie du Sud hors des sentiers battus, au départ de Djerba : les ghorfas de Médenine, le village berbère de Chenini accroché à la montagne, une nuit en campement à Ksar Ghilane, les maisons troglodytes de Matmata, les oasis de Nouil et Zaafrane, le chott el-Djérid, Tozeur et Nefta, puis Chebika et Tamerza. Le voyage se termine par un tour de Djerba, des potiers de Guellala aux souks de Houmt Souk, et une journée libre. Hôtels 4* (normes locales) ; cinq adultes au plus par 4x4. Version en circuit privatif à partir de 1 220 € par personne.",
        "A southern Tunisia off the beaten track, starting from Djerba: the ghorfas of Medenine, the Berber village of Chenini clinging to the mountain, a night in a camp at Ksar Ghilane, the cave houses of Matmata, the oases of Nouil and Zaafrane, the Chott el-Jerid, Tozeur and Nefta, then Chebika and Tamerza. The trip ends with a tour of Djerba, from the potters of Guellala to the souks of Houmt Souk, and a free day. 4* hotels (local rating); five adults at most per 4x4. Private tour version from €1,220 per person.",
        "Un sur de Túnez fuera de los caminos trillados, con salida desde Yerba: los ghorfas de Medenine, el pueblo bereber de Chenini aferrado a la montaña, una noche en campamento en Ksar Ghilane, las casas trogloditas de Matmata, los oasis de Nouil y Zaafrane, el chott el-Djerid, Tozeur y Nefta, y después Chebika y Tamerza. El viaje termina con una vuelta a Yerba, de los alfareros de Guellala a los zocos de Houmt Souk, y una jornada libre. Hoteles de 4* (categoría local); cinco adultos como máximo por 4x4. Versión en circuito privado desde 1.220 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,6 nuits en hôtels 4* et 1 nuit en campement,Pension selon programme,Circuit en 4x4,Guide ou chauffeur-guide francophone,Entrées des sites",
        "Flights from France,Airport transfers,6 nights in 4* hotels and 1 night in a camp,Meals as per programme,Tour by 4x4,French-speaking guide or driver-guide,Site entrance fees",
        "Vuelos desde Francia,Traslados al aeropuerto,6 noches en hoteles de 4* y 1 noche en campamento,Comidas según programa,Circuito en 4x4,Guía o chófer-guía francófono,Entradas a los sitios",
      ],
      price: 1054, nights: 7, departureFrom: "Paris", image: "sh7",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 10, order: -89996,
      chapters: [
        tn.chapter(
          ["Djerba et les ksour du Sud", "Djerba and the ksour of the south", "Yerba y los ksour del sur"],
          [
            "De l'île de Djerba aux greniers fortifiés de Médenine et au village de Chenini, avant une nuit au milieu des dunes.",
            "From the island of Djerba to the fortified granaries of Medenine and the village of Chenini, before a night among the dunes.",
            "De la isla de Yerba a los graneros fortificados de Medenine y al pueblo de Chenini, antes de una noche entre las dunas.",
          ],
          ["sh7", "sh3", "sh1"],
          [
            tn.day(1,
              ["Arrivée à Djerba", "Arrival in Djerba", "Llegada a Yerba"],
              ["Envol pour Djerba, accueil et transfert à l'hôtel. Dîner et nuit.", "Fly to Djerba, welcome and transfer to the hotel. Dinner and overnight.", "Vuelo a Yerba, recibimiento y traslado al hotel. Cena y noche."], "sh3"),
            tn.day(2,
              ["Médenine, Chenini et Ksar Ghilane", "Medenine, Chenini and Ksar Ghilane", "Medenine, Chenini y Ksar Ghilane"],
              [
                "Départ par la chaussée romaine vers Médenine et ses ghorfas, greniers berbères devenus habitations. Visite de Tataouine et déjeuner, puis Chenini, village incrusté dans les parois d'un cirque de montagnes. Continuation vers Ksar Ghilane pour la nuit en campement (environ 300 km).",
                "Leave along the Roman causeway for Medenine and its ghorfas, Berber granaries turned into homes. Visit Tataouine and lunch, then Chenini, a village set into the walls of a mountain cirque. Continue to Ksar Ghilane for a night in a camp (about 300 km).",
                "Salida por la calzada romana hacia Medenine y sus ghorfas, graneros bereberes convertidos en viviendas. Visita a Tataouine y almuerzo, y después Chenini, un pueblo incrustado en las paredes de un circo de montañas. Continuación hacia Ksar Ghilane para la noche en campamento (unos 300 km).",
              ], "sh7"),
          ]
        ),
        tn.chapter(
          ["Matmata, Douz et le Djérid", "Matmata, Douz and the Jerid", "Matmata, Douz y el Djerid"],
          [
            "Les maisons creusées de Matmata, les oasis du Sahara, le chott el-Djérid et les oasis de montagne.",
            "The dug-out houses of Matmata, the Saharan oases, the Chott el-Jerid and the mountain oases.",
            "Las casas excavadas de Matmata, los oasis del Sáhara, el chott el-Djerid y los oasis de montaña.",
          ],
          ["sh5", "sh6", "mo4", "sh8", "mo5"],
          [
            tn.day(3,
              ["Matmata, Nouil et Zaafrane – Douz", "Matmata, Nouil and Zaafrane – Douz", "Matmata, Nouil y Zaafrane – Douz"],
              [
                "Visite des habitations troglodytes de Matmata, puis route vers Douz. L'après-midi, les oasis de Nouil et Zaafrane et leurs dunes de sable fin (environ 180 km).",
                "Visit the cave dwellings of Matmata, then drive to Douz. In the afternoon, the oases of Nouil and Zaafrane and their fine sand dunes (about 180 km).",
                "Visita a las viviendas trogloditas de Matmata y carretera hacia Douz. Por la tarde, los oasis de Nouil y Zaafrane y sus dunas de arena fina (unos 180 km).",
              ], "sh5"),
            tn.day(4,
              ["Le chott el-Djérid, Tozeur et Nefta", "The Chott el-Jerid, Tozeur and Nefta", "El chott el-Djerid, Tozeur y Nefta"],
              [
                "Traversée du chott el-Djérid, le lac Triton de l'Antiquité, connu pour ses mirages. Installation à Tozeur, puis Nefta, ville religieuse du Djérid et la plus belle oasis de la région.",
                "Cross the Chott el-Jerid, the Lake Triton of antiquity, known for its mirages. Check in at Tozeur, then Nefta, the religious town of the Jerid and the finest oasis in the region.",
                "Travesía del chott el-Djerid, el lago Tritón de la Antigüedad, conocido por sus espejismos. Instalación en Tozeur y visita a Nefta, ciudad religiosa del Djerid y el oasis más bello de la región.",
              ], "sh6"),
            tn.day(5,
              ["Chebika et Tamerza – Gabès – Djerba", "Chebika and Tamerza – Gabès – Djerba", "Chebika y Tamerza – Gabès – Yerba"],
              [
                "Les oasis de montagne de Chebika et Tamerza, leurs sources et leurs canyons. Déjeuner à Gafsa, puis Gabès, seule oasis maritime de Tunisie, avec sa vieille ville et son souk. Retour à Djerba (environ 430 km).",
                "The mountain oases of Chebika and Tamerza, their springs and canyons. Lunch in Gafsa, then Gabès, Tunisia's only seaside oasis, with its old town and souk. Back to Djerba (about 430 km).",
                "Los oasis de montaña de Chebika y Tamerza, sus manantiales y cañones. Almuerzo en Gafsa y Gabès, único oasis marítimo de Túnez, con su ciudad vieja y su zoco. Regreso a Yerba (unos 430 km).",
              ], "mo5"),
          ]
        ),
        tn.chapter(
          ["L'île de Djerba", "The island of Djerba", "La isla de Yerba"],
          [
            "Un tour de l'île, puis une journée de détente avant le retour.",
            "A tour of the island, then a day of rest before going home.",
            "Una vuelta a la isla y una jornada de descanso antes del regreso.",
          ],
          ["mo7", "sh3"],
          [
            tn.day(6,
              ["Le tour de Djerba", "A tour of Djerba", "La vuelta a Yerba"],
              [
                "Découverte de l'île : Guellala, le village des potiers, puis Houmt Souk, ses souks et son marché. Retour à l'hôtel pour le déjeuner.",
                "Explore the island: Guellala, the potters' village, then Houmt Souk, its souks and market. Back to the hotel for lunch.",
                "Descubrimiento de la isla: Guellala, el pueblo de los alfareros, y Houmt Souk, sus zocos y su mercado. Regreso al hotel para el almuerzo.",
              ], "mo7"),
            tn.day(7,
              ["Djerba, journée libre", "Djerba, free day", "Yerba, jornada libre"],
              [
                "Journée libre à l'hôtel ou excursions facultatives. Déjeuner libre.",
                "A free day at the hotel or optional excursions. Lunch on your own.",
                "Jornada libre en el hotel o excursiones facultativas. Almuerzo libre.",
              ], "sh3"),
            tn.day(8,
              ["Vol retour", "Flight home", "Vuelo de regreso"],
              ["Transfert à l'aéroport de Djerba selon l'horaire du vol et arrivée en France.", "Transfer to Djerba airport according to your flight time and arrival in France.", "Traslado al aeropuerto de Yerba según el horario del vuelo y llegada a Francia."], "sh1"),
          ]
        ),
      ],
    }),

    // ───────────── Botswana. Découvertes Botswanaises — 12J/9N ─────────────
    bw.trip({
      slug: "botswana-okavango-moremi-chobe-12j",
      name: [
        "Botswana : Okavango, Moremi et Chobe en camps de brousse",
        "Botswana: Okavango, Moremi and Chobe in Bush Camps",
        "Botsuana: Okavango, Moremi y Chobe en campamentos en la sabana",
      ],
      tagline: [
        "Huit nuits sous la tente au cœur des parcs, un survol du delta et des safaris en 4x4 ouvert",
        "Eight nights under canvas in the heart of the parks, a flight over the delta and open 4x4 safaris",
        "Ocho noches en tienda en el corazón de los parques, un vuelo sobre el delta y safaris en 4x4 abierto",
      ],
      description: [
        "Le Botswana vécu de l'intérieur, en groupe de 12 personnes au plus : un vol de brousse de 25 minutes au-dessus du delta de l'Okavango, puis huit nuits en camps de brousse installés sur des sites privés, de la réserve de Moremi à la région de Savuti et aux rives de la rivière Chobe, où vit la plus grande concentration d'éléphants d'Afrique. Les tentes, de type Meru, ont un vrai lit et une salle d'eau privée avec douche chaude ; une équipe et un cuisinier accompagnent le camp. Pension complète avec boissons au dîner. Le rythme est soutenu et les pistes sont longues.",
        "Botswana from the inside, in a group of 12 at most: a 25-minute bush flight over the Okavango Delta, then eight nights in bush camps set up on private sites, from Moremi reserve to the Savuti region and the banks of the Chobe River, home to Africa's largest concentration of elephants. The Meru-style tents have a proper bed and a private washroom with a hot shower; a crew and a cook travel with the camp. Full board with drinks at dinner. The pace is brisk and the drives are long.",
        "Botsuana vivido desde dentro, en grupo de 12 personas como máximo: un vuelo de 25 minutos sobre el delta del Okavango y ocho noches en campamentos instalados en sitios privados, de la reserva de Moremi a la región de Savuti y las orillas del río Chobe, donde vive la mayor concentración de elefantes de África. Las tiendas, tipo Meru, tienen cama de verdad y aseo privado con ducha caliente; un equipo y un cocinero acompañan el campamento. Pensión completa con bebidas en la cena. El ritmo es intenso y las pistas, largas.",
      ],
      includes: [
        "Vols depuis la France,Vol de brousse Maun–Xakanaxa,1 nuit en lodge et 8 nuits en camps de brousse,Pension complète avec boissons au dîner,Safaris en 4x4 ouvert,Guide francophone et équipe de camp,Droits d'entrée des parcs",
        "Flights from France,Maun–Xakanaxa bush flight,1 night in a lodge and 8 nights in bush camps,Full board with drinks at dinner,Open 4x4 safaris,French-speaking guide and camp crew,Park entrance fees",
        "Vuelos desde Francia,Vuelo Maun–Xakanaxa,1 noche en lodge y 8 noches en campamentos,Pensión completa con bebidas en la cena,Safaris en 4x4 abierto,Guía francófono y equipo de campamento,Entradas a los parques",
      ],
      price: 6369, nights: 9, departureFrom: "Paris", image: "bw8",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 12, order: -89995,
      chapters: [
        bw.chapter(
          ["Maun et le delta de l'Okavango", "Maun and the Okavango Delta", "Maun y el delta del Okavango"],
          [
            "Un vol de brousse au-dessus du plus grand delta intérieur du monde, puis les premiers safaris depuis un camp au bord des marais.",
            "A bush flight over the largest inland delta in the world, then the first safaris from a camp at the edge of the marshes.",
            "Un vuelo sobre el mayor delta interior del mundo y los primeros safaris desde un campamento al borde de los pantanos.",
          ],
          ["bw7", "bw8", "bw6", "bw2"],
          [
            bw.day(1,
              ["Envol pour Johannesburg", "Flight to Johannesburg", "Vuelo a Johannesburgo"],
              ["Départ de France à destination de Johannesburg. Dîner et nuit à bord.", "Leave France for Johannesburg. Dinner and night on board.", "Salida de Francia con destino a Johannesburgo. Cena y noche a bordo."], "bw7"),
            bw.day(2,
              ["Johannesburg – Maun", "Johannesburg – Maun", "Johannesburgo – Maun"],
              ["Correspondance pour Maun, transfert au lodge et fin de journée libre.", "Connecting flight to Maun, transfer to the lodge and the rest of the day free.", "Conexión a Maun, traslado al lodge y resto del día libre."], "bw2"),
            bw.day(3,
              ["Survol du delta – premier safari", "Flight over the delta – first safari", "Vuelo sobre el delta – primer safari"],
              [
                "Vol de brousse de 25 minutes au-dessus du delta de l'Okavango jusqu'à la piste de Xakanaxa, dans la réserve de Moremi, avec les premières observations d'animaux depuis le ciel. Brunch au camp, puis premier safari en 4x4 et soirée autour du feu.",
                "A 25-minute bush flight over the Okavango Delta to the Xakanaxa airstrip in Moremi reserve, with the first wildlife sightings from the air. Brunch at camp, then a first 4x4 safari and an evening round the fire.",
                "Vuelo de 25 minutos sobre el delta del Okavango hasta la pista de Xakanaxa, en la reserva de Moremi, con los primeros avistamientos de animales desde el aire. Brunch en el campamento, primer safari en 4x4 y velada junto al fuego.",
              ], "bw7"),
            bw.day(4,
              ["Le delta de l'Okavango", "The Okavango Delta", "El delta del Okavango"],
              [
                "Journée de safari en 4x4 dans le delta, avec les explications du guide sur ce milieu d'eau et de terre unique au monde.",
                "A day's 4x4 safari in the delta, with the guide explaining this unique world of water and land.",
                "Jornada de safari en 4x4 por el delta, con las explicaciones del guía sobre este medio de agua y tierra único en el mundo.",
              ], "bw6"),
          ]
        ),
        bw.chapter(
          ["La réserve de Moremi", "Moremi reserve", "La reserva de Moremi"],
          [
            "Deux jours dans l'une des plus belles réserves du pays, entre marais et terres sèches, près de la rivière Khwai.",
            "Two days in one of the finest reserves in the country, between marsh and dry land, near the Khwai River.",
            "Dos días en una de las reservas más bellas del país, entre pantanos y tierras secas, cerca del río Khwai.",
          ],
          ["bw9", "bw1", "bw13", "bw14"],
          [
            bw.day(5,
              ["Moremi et la rivière Khwai", "Moremi and the Khwai River", "Moremi y el río Khwai"],
              [
                "Journée entière dans la brousse, près de la rivière Khwai, au nord de Moremi. La réserve couvre environ un cinquième du delta et compte parmi les meilleurs sites du Botswana pour la faune.",
                "A whole day in the bush, near the Khwai River in northern Moremi. The reserve covers about a fifth of the delta and is one of the best wildlife areas in Botswana.",
                "Jornada entera en la sabana, cerca del río Khwai, al norte de Moremi. La reserva cubre alrededor de una quinta parte del delta y figura entre los mejores lugares de Botsuana para la fauna.",
              ], "bw9"),
            bw.day(6,
              ["Moremi, deuxième journée", "Moremi, second day", "Moremi, segunda jornada"],
              [
                "Nouvelle journée de safari en 4x4 dans la réserve, à la recherche des félins, des antilopes et des nombreux oiseaux du delta.",
                "Another day's 4x4 safari in the reserve, looking for big cats, antelope and the delta's many birds.",
                "Nueva jornada de safari en 4x4 por la reserva, en busca de felinos, antílopes y las numerosas aves del delta.",
              ], "bw13"),
          ]
        ),
        bw.chapter(
          ["Savuti et la rivière Chobe", "Savuti and the Chobe River", "Savuti y el río Chobe"],
          [
            "Le parc national de Chobe en deux temps : la région aride de Savuti et ses éléphants solitaires, puis les rives de la rivière Chobe.",
            "Chobe National Park in two parts: the arid Savuti region and its lone elephants, then the banks of the Chobe River.",
            "El parque nacional de Chobe en dos tiempos: la árida región de Savuti y sus elefantes solitarios, y las orillas del río Chobe.",
          ],
          ["bw11", "bw5", "bw3", "bw4"],
          [
            bw.day(7,
              ["Vers Savuti", "On to Savuti", "Hacia Savuti"],
              [
                "Route vers le nord du parc national de Chobe et installation du camp dans la réserve de Savuti, région aride connue pour ses éléphants mâles solitaires.",
                "Drive to the north of Chobe National Park and set up camp in Savuti reserve, an arid region known for its lone bull elephants.",
                "Carretera hacia el norte del parque nacional de Chobe e instalación del campamento en la reserva de Savuti, región árida conocida por sus elefantes machos solitarios.",
              ], "bw11"),
            bw.day(8,
              ["Savuti", "Savuti", "Savuti"],
              [
                "Journée de safari dans les plaines de Savuti, où vivent aussi des félins.",
                "A day's safari on the plains of Savuti, also home to big cats.",
                "Jornada de safari por las llanuras de Savuti, donde viven también felinos.",
              ], "bw9"),
            bw.day(9,
              ["Les rives de la Chobe", "The banks of the Chobe", "Las orillas del Chobe"],
              [
                "Départ vers les rives de la rivière Chobe, où l'eau permanente attire une faune très riche. Safari le long du fleuve : éléphants, hippopotames, crocodiles et oiseaux.",
                "Leave for the banks of the Chobe River, where year-round water draws a wealth of wildlife. A safari along the river: elephants, hippos, crocodiles and birds.",
                "Salida hacia las orillas del río Chobe, donde el agua permanente atrae una fauna muy rica. Safari a lo largo del río: elefantes, hipopótamos, cocodrilos y aves.",
              ], "bw5"),
            bw.day(10,
              ["Chobe, deuxième journée", "Chobe, second day", "Chobe, segunda jornada"],
              [
                "Nouvelle journée sur les pistes qui longent la rivière, réputée pour la plus grande concentration d'éléphants d'Afrique et pour ses oiseaux.",
                "Another day on the tracks along the river, famous for Africa's largest concentration of elephants and for its birdlife.",
                "Otra jornada por las pistas que bordean el río, famoso por la mayor concentración de elefantes de África y por sus aves.",
              ], "bw3"),
            bw.day(11,
              ["Dernier safari – Kasane – vol retour", "Last safari – Kasane – flight home", "Último safari – Kasane – vuelo de regreso"],
              [
                "Dernier safari en 4x4 avant de rejoindre l'aéroport de Kasane et le vol retour. Dîner et nuit à bord.",
                "A last 4x4 safari before heading to Kasane airport and the flight home. Dinner and night on board.",
                "Último safari en 4x4 antes de ir al aeropuerto de Kasane y el vuelo de regreso. Cena y noche a bordo.",
              ], "bw4"),
            bw.day(12, T_HOME, HOME, "bw8"),
          ]
        ),
      ],
    }),

    // ───────────── Rwanda. Immersion au Rwanda — 12J/9N ─────────────
    rw.trip({
      slug: "rwanda-gorilles-akagera-nyungwe-kivu-12j",
      name: [
        "Rwanda : gorilles, chimpanzés, Akagera et lac Kivu",
        "Rwanda: Gorillas, Chimpanzees, Akagera and Lake Kivu",
        "Ruanda: gorilas, chimpancés, Akagera y el lago Kivu",
      ],
      tagline: [
        "Les trois grands singes du pays, un safari à l'Akagera et le kayak sur le lac Kivu",
        "The country's three great apes, a safari in Akagera and kayaking on Lake Kivu",
        "Los tres grandes primates del país, un safari en el Akagera y kayak en el lago Kivu",
      ],
      description: [
        "Le Rwanda en entier, en petit groupe de 3 à 6 voyageurs et en véhicule privé : Kigali et le mémorial du génocide, deux jours de safari dans le parc de l'Akagera, la forêt primaire de Nyungwe et sa passerelle suspendue au-dessus de la canopée, la marche à la recherche des chimpanzés, le lac Kivu en kayak au coucher du soleil, puis le parc des Volcans pour la rencontre avec une famille de gorilles de montagne et les singes dorés. Le permis gorilles (1 500 $ à ce jour, non remboursable) est compris dans le prix.",
        "The whole of Rwanda, in a small group of 3 to 6 travellers and a private vehicle: Kigali and the genocide memorial, two days of safari in Akagera park, the primary forest of Nyungwe and its suspension bridge above the canopy, a walk in search of chimpanzees, Lake Kivu by kayak at sunset, then Volcanoes park for an encounter with a family of mountain gorillas and the golden monkeys. The gorilla permit ($1,500 to date, non-refundable) is included in the price.",
        "Ruanda entero, en grupo reducido de 3 a 6 viajeros y en vehículo privado: Kigali y el memorial del genocidio, dos días de safari en el parque del Akagera, el bosque primario de Nyungwe y su pasarela colgante sobre el dosel, la caminata en busca de chimpancés, el lago Kivu en kayak al atardecer y el parque de los Volcanes para el encuentro con una familia de gorilas de montaña y los monos dorados. El permiso de gorilas (1.500 $ a fecha de hoy, no reembolsable) está incluido en el precio.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,9 nuits en hôtels et lodges 3* et 4*,Pension complète,Véhicule privé et guide-chauffeur,Permis gorilles,Visites et excursions du programme",
        "Flights from France,Airport transfers,9 nights in 3* and 4* hotels and lodges,Full board,Private vehicle and driver-guide,Gorilla permit,Visits and excursions in the programme",
        "Vuelos desde Francia,Traslados al aeropuerto,9 noches en hoteles y lodges de 3* y 4*,Pensión completa,Vehículo privado y chófer-guía,Permiso de gorilas,Visitas y excursiones del programa",
      ],
      price: 9589, nights: 9, departureFrom: "Paris", image: "rw6",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 6, order: -89994,
      chapters: [
        rw.chapter(
          ["Kigali et l'Akagera", "Kigali and Akagera", "Kigali y el Akagera"],
          [
            "La capitale et sa mémoire, puis deux jours de safari dans les savanes, les lacs et les collines de l'Akagera.",
            "The capital and its memory, then two days of safari among the savannahs, lakes and hills of Akagera.",
            "La capital y su memoria, y dos días de safari entre las sabanas, los lagos y las colinas del Akagera.",
          ],
          ["rw5", "rw3", "rw2"],
          [
            rw.day(1,
              ["Envol pour Kigali", "Flight to Kigali", "Vuelo a Kigali"],
              ["Départ de France à destination du Rwanda. Dîner et nuit à bord.", "Leave France for Rwanda. Dinner and night on board.", "Salida de Francia con destino a Ruanda. Cena y noche a bordo."], "rw5"),
            rw.day(2,
              ["Kigali", "Kigali", "Kigali"],
              [
                "Arrivée à Kigali en matinée. Rencontre avec une association de femmes engagée dans le développement social, puis le quartier historique de Nyamirambo. L'après-midi, visite du mémorial du génocide et de l'hôtel des Mille Collines.",
                "Arrive in Kigali in the morning. Meet a women's association working in social development, then the historic Nyamirambo district. In the afternoon, visit the genocide memorial and the Hôtel des Mille Collines.",
                "Llegada a Kigali por la mañana. Encuentro con una asociación de mujeres comprometida con el desarrollo social y el barrio histórico de Nyamirambo. Por la tarde, visita al memorial del genocidio y al hotel de las Mil Colinas.",
              ], "rw5"),
            rw.day(3,
              ["Le parc national de l'Akagera", "Akagera National Park", "El parque nacional del Akagera"],
              [
                "Route vers l'Akagera et premier safari dans ce sanctuaire de savanes, de lacs et de collines, refuge des Big Five. Selon le programme, safari ou croisière sur les lacs du parc l'après-midi.",
                "Drive to Akagera and a first safari in this sanctuary of savannah, lakes and hills, home to the Big Five. Depending on the programme, a game drive or a cruise on the park's lakes in the afternoon.",
                "Carretera hacia el Akagera y primer safari en este santuario de sabanas, lagos y colinas, refugio de los Cinco Grandes. Según el programa, safari o crucero por los lagos del parque por la tarde.",
              ], "rw2"),
            rw.day(4,
              ["Une journée dans l'Akagera", "A day in Akagera", "Una jornada en el Akagera"],
              [
                "Journée entière dans le parc, à la recherche des éléphants, lions, buffles, girafes, hippopotames et antilopes, entre savanes dorées, marais et lacs.",
                "A whole day in the park, looking for elephants, lions, buffalo, giraffes, hippos and antelope, between golden savannah, marshes and lakes.",
                "Jornada entera en el parque, en busca de elefantes, leones, búfalos, jirafas, hipopótamos y antílopes, entre sabanas doradas, pantanos y lagos.",
              ], "rw3"),
          ]
        ),
        rw.chapter(
          ["Nyungwe et le lac Kivu", "Nyungwe and Lake Kivu", "Nyungwe y el lago Kivu"],
          [
            "L'une des plus anciennes forêts d'Afrique et ses chimpanzés, puis deux nuits au bord du lac Kivu.",
            "One of the oldest forests in Africa and its chimpanzees, then two nights on the shore of Lake Kivu.",
            "Uno de los bosques más antiguos de África y sus chimpancés, y dos noches a orillas del lago Kivu.",
          ],
          ["rw4", "rw3", "rw5"],
          [
            rw.day(5,
              ["Le palais du roi – la forêt de Nyungwe", "The King's Palace – Nyungwe forest", "El palacio del rey – el bosque de Nyungwe"],
              [
                "Départ vers le sud par les collines (335 km), avec la visite du palais du roi et du musée ethnographique. L'après-midi, la forêt primaire de Nyungwe et sa passerelle suspendue à près de 70 m au-dessus de la canopée.",
                "Leave for the south through the hills (335 km), visiting the King's Palace and the ethnographic museum. In the afternoon, the primary forest of Nyungwe and its suspension bridge nearly 70 m above the canopy.",
                "Salida hacia el sur a través de las colinas (335 km), con visita al palacio del rey y al museo etnográfico. Por la tarde, el bosque primario de Nyungwe y su pasarela colgante a casi 70 m sobre el dosel.",
              ], "rw4"),
            rw.day(6,
              ["Les chimpanzés de Nyungwe – Kibuye", "The chimpanzees of Nyungwe – Kibuye", "Los chimpancés de Nyungwe – Kibuye"],
              [
                "Départ matinal pour une randonnée en forêt à la recherche des chimpanzés ; l'observation dépend des conditions naturelles. L'après-midi, détente au bord du lac Kivu, à Kibuye.",
                "An early start for a forest hike in search of chimpanzees; sightings depend on natural conditions. In the afternoon, relax on the shore of Lake Kivu in Kibuye.",
                "Salida temprana para una caminata por el bosque en busca de chimpancés; la observación depende de las condiciones naturales. Por la tarde, descanso a orillas del lago Kivu, en Kibuye.",
              ], "rw4"),
            rw.day(7,
              ["Plantation de thé et kayak sur le lac Kivu", "Tea plantation and kayaking on Lake Kivu", "Plantación de té y kayak en el lago Kivu"],
              [
                "Visite d'une plantation de thé dans les collines. Après-midi libre, puis balade en kayak sur le lac Kivu au coucher du soleil.",
                "Visit a tea plantation in the hills. A free afternoon, then a kayak outing on Lake Kivu at sunset.",
                "Visita a una plantación de té en las colinas. Tarde libre y paseo en kayak por el lago Kivu al atardecer.",
              ], "rw3"),
          ]
        ),
        rw.chapter(
          ["Le parc des Volcans", "Volcanoes park", "El parque de los Volcanes"],
          [
            "Au pied des volcans des Virunga : les gorilles de montagne, les singes dorés et l'héritage de Dian Fossey.",
            "At the foot of the Virunga volcanoes: the mountain gorillas, the golden monkeys and the legacy of Dian Fossey.",
            "Al pie de los volcanes Virunga: los gorilas de montaña, los monos dorados y el legado de Dian Fossey.",
          ],
          ["rw6", "rw1", "rw2"],
          [
            rw.day(8,
              ["Musanze et le campus Dian Fossey", "Musanze and the Dian Fossey campus", "Musanze y el campus Dian Fossey"],
              [
                "Route vers Musanze et les contreforts des Virunga. Rencontre avec un guide du parc des Volcans, qui parle des gorilles, des singes dorés et de l'œuvre de Dian Fossey, puis visite de l'Ellen DeGeneres Campus du Dian Fossey Gorilla Fund.",
                "Drive to Musanze and the foothills of the Virunga. Meet a guide from Volcanoes park, who talks about the gorillas, the golden monkeys and Dian Fossey's work, then visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund.",
                "Carretera hacia Musanze y las estribaciones de los Virunga. Encuentro con un guía del parque de los Volcanes, que habla de los gorilas, los monos dorados y la obra de Dian Fossey, y visita al Ellen DeGeneres Campus del Dian Fossey Gorilla Fund.",
              ], "rw2"),
            rw.day(9,
              ["Les gorilles de montagne", "The mountain gorillas", "Los gorilas de montaña"],
              [
                "Le temps fort du voyage : marche avec un ranger à travers les forêts volcaniques jusqu'à une famille de gorilles de montagne, à un rythme adapté au groupe. Après-midi de repos au lodge.",
                "The high point of the trip: a walk with a ranger through the volcanic forests to a family of mountain gorillas, at a pace suited to the group. An afternoon of rest at the lodge.",
                "El momento cumbre del viaje: caminata con un ranger por los bosques volcánicos hasta una familia de gorilas de montaña, a un ritmo adaptado al grupo. Tarde de descanso en el lodge.",
              ], "rw6"),
            rw.day(10,
              ["Les singes dorés et Iby'Iwacu – Kigali", "The golden monkeys and Iby'Iwacu – Kigali", "Los monos dorados e Iby'Iwacu – Kigali"],
              [
                "Randonnée matinale à la recherche des singes dorés dans les forêts de bambous, puis visite du village culturel d'Iby'Iwacu, exemple de tourisme communautaire. Retour à Kigali.",
                "A morning hike in search of the golden monkeys in the bamboo forests, then a visit to the Iby'Iwacu cultural village, an example of community tourism. Return to Kigali.",
                "Caminata matinal en busca de los monos dorados en los bosques de bambú y visita a la aldea cultural de Iby'Iwacu, ejemplo de turismo comunitario. Regreso a Kigali.",
              ], "rw1"),
            rw.day(11,
              ["Kigali – vol retour", "Kigali – flight home", "Kigali – vuelo de regreso"],
              [
                "Journée et repas libres, puis transfert à l'aéroport international de Kigali selon l'horaire du vol. Dîner et nuit à bord.",
                "A free day with meals on your own, then transfer to Kigali international airport according to your flight time. Dinner and night on board.",
                "Jornada y comidas libres y traslado al aeropuerto internacional de Kigali según el horario del vuelo. Cena y noche a bordo.",
              ], "rw5"),
            rw.day(12, T_HOME, HOME, "rw6"),
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
