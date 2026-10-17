// Laos, Philippines and Uzbekistan circuits — 9 journey-format trips: three for "laos" (including
// the Grand Tour of Indochina), five for "philippines" and one for "ouzbekistan". Extensions and
// private versions are described inside each trip. "Ouzbékistan : au pays des cités bleues"
// (365810) is not included: its supplier page returns no programme. Prices are per-person "from"
// prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-lpo-circuits.ts
// Requires scripts/upload-images-lpo-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "laos-passion-luang-prabang-vang-vieng-10j": ["379278"],
  "laos-experience-nong-khiaw-nam-ou-prive-13j": ["379258", "385139"],
  "laos-grand-tour-indochine-cambodge-vietnam-21j": ["379239", "379240"],
  "philippines-manille-boracay-11j": ["359005"],
  "philippines-ile-en-ile-bohol-dumaguete-siquijor-14j": ["333499", "313161"],
  "philippines-bohol-chocolate-hills-prive-11j": ["347509"],
  "philippines-beaute-visayas-siquijor-bohol-12j": ["376298", "376299"],
  "philippines-passion-palawan-coron-el-nido-11j": ["376300", "376301"],
  "ouzbekistan-intimiste-khiva-boukhara-samarcande-12j": ["401358"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_BEACH: L3 = ["Journée libre à la plage", "A free day on the beach", "Jornada libre en la playa"];
const BEACH: L3 = ["Journée libre pour profiter de la plage et de l'île à votre rythme.", "A free day to enjoy the beach and the island at your own pace.", "Jornada libre para disfrutar de la playa y la isla a su ritmo."];
const T_BOHOL_TOUR: L3 = ["Bohol : tarsiers, rivière Loboc et Chocolate Hills", "Bohol: tarsiers, the Loboc river and the Chocolate Hills", "Bohol: tarseros, el río Loboc y las Chocolate Hills"];
const BOHOL_TOUR: L3 = [
  "Journée d'excursion dans la campagne de Bohol : le sanctuaire des tarsiers, une croisière déjeuner sur la rivière Loboc et les collines coniques des Chocolate Hills.",
  "A day out in the Bohol countryside: the tarsier sanctuary, a lunch cruise on the Loboc river and the cone-shaped Chocolate Hills.",
  "Jornada de excursión por el campo de Bohol: el santuario de los tarseros, un crucero con almuerzo por el río Loboc y las colinas cónicas de las Chocolate Hills.",
];
const T_FLY_PH: L3 = ["Envol pour les Philippines", "Flight to the Philippines", "Vuelo a Filipinas"];
const FLY_PH: L3 = ["Envol à destination des Philippines. Nuit à bord.", "Flight to the Philippines. Night on board.", "Vuelo con destino a Filipinas. Noche a bordo."];
const T_CEBU: L3 = ["Arrivée à Cebu", "Arrival in Cebu", "Llegada a Cebú"];
const CEBU: L3 = ["Accueil à l'aéroport de Cebu et transfert privé à l'hôtel.", "Welcome at Cebu airport and private transfer to the hotel.", "Recibimiento en el aeropuerto de Cebú y traslado privado al hotel."];
const PH_INC = (n: number): L3 => [
  `Vols depuis la France,Transferts privés aéroport et port,Ferries du programme,${n} nuits en hôtels 3* et 4*,Petits-déjeuners,Assistance sur place`,
  `Flights from France,Private airport and port transfers,Ferries in the programme,${n} nights in 3* and 4* hotels,Breakfasts,Local assistance`,
  `Vuelos desde Francia,Traslados privados al aeropuerto y al puerto,Ferris del programa,${n} noches en hoteles de 3* y 4*,Desayunos,Asistencia en destino`,
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const la = circuitBuilders({ destinationSlug: "laos", imagePrefix: "lpo", season: { label: ["Nov à mars", "Nov to March", "Nov a mar"], months: "november,december,january,february,march" } });
  const ph = circuitBuilders({ destinationSlug: "philippines", imagePrefix: "lpo", season: { label: ["Déc à mai", "Dec to May", "Dic a may"], months: "december,january,february,march,april,may" } });
  const uz = circuitBuilders({ destinationSlug: "ouzbekistan", imagePrefix: "lpo", season: { label: ["Avr-mai, sept-oct", "Apr-May, Sept-Oct", "Abr-may, sept-oct"], months: "april,may,september,october" } });
  const T_FLY_LA: L3 = ["Envol pour le Laos", "Flight to Laos", "Vuelo a Laos"];
  const FLY_LA: L3 = ["Envol à destination du Laos. Nuit à bord.", "Flight to Laos. Night on board.", "Vuelo con destino a Laos. Noche a bordo."];

  const journeyTrips = [
    // ───────────── Laos 1. Passion laotienne — 10J/7N ─────────────
    la.trip({
      slug: "laos-passion-luang-prabang-vang-vieng-10j",
      name: ["Passion laotienne : Luang Prabang, Kuang Si, Vang Vieng et Vientiane", "Laos Passion: Luang Prabang, Kuang Si, Vang Vieng and Vientiane", "Pasión laosiana: Luang Prabang, Kuang Si, Vang Vieng y Vientián"],
      tagline: ["Quatre nuits dans la ville royale, puis les reliefs karstiques et la capitale", "Four nights in the royal city, then the karst country and the capital", "Cuatro noches en la ciudad real, y los relieves kársticos y la capital"],
      description: [
        "Le Laos en petit groupe de 15 personnes au plus : quatre nuits à Luang Prabang, classée à l'Unesco (la procession des moines au petit matin, le village de Ban Xieng Mene de l'autre côté du Mékong, les cascades turquoise de Kuang Si), le train vers Vang Vieng, sa grotte de Tham Xang et ses rizières entre les pitons calcaires, puis Vientiane et ses temples.",
        "Laos in a small group of 15 at most: four nights in Luang Prabang, a UNESCO site (the monks' procession at dawn, the village of Ban Xieng Mene across the Mekong, the turquoise Kuang Si falls), the train to Vang Vieng, its Tham Xang cave and its rice fields among the limestone peaks, then Vientiane and its temples.",
        "Laos en grupo reducido de 15 personas como máximo: cuatro noches en Luang Prabang, inscrita en la Unesco (la procesión de los monjes al amanecer, el pueblo de Ban Xieng Mene al otro lado del Mekong, las cascadas turquesa de Kuang Si), el tren a Vang Vieng, su cueva de Tham Xang y sus arrozales entre los picos calizos, y Vientián y sus templos.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtels 3*,Pension selon programme,Visites du programme,Guide francophone",
        "Flights from France,Airport transfers,7 nights in 3* hotels,Meals as per programme,Visits in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hoteles de 3*,Comidas según programa,Visitas del programa,Guía francófono",
      ],
      price: 2079, nights: 7, departureFrom: "Francfort", image: "lp3",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 15, order: -70000,
      chapters: [
        la.chapter(["Luang Prabang", "Luang Prabang", "Luang Prabang"], ["Quatre nuits dans l'ancienne ville royale.", "Four nights in the old royal city.", "Cuatro noches en la antigua ciudad real."],
          ["lp3", "lp4", "gi10", "gi7"],
          [
            la.day(1, T_FLY_LA, FLY_LA, "lp4"),
            la.day(2, ["Arrivée à Luang Prabang", "Arrival in Luang Prabang", "Llegada a Luang Prabang"], ["Accueil et transfert à l'hôtel, au cœur de la ville.", "Welcome and transfer to the hotel, in the heart of town.", "Recibimiento y traslado al hotel, en el corazón de la ciudad."], "lp4"),
            la.day(3, ["Luang Prabang", "Luang Prabang", "Luang Prabang"], ["Au petit matin, la procession silencieuse des moines (Tak Bat), puis les temples, le palais royal et le mont Phousi.", "At dawn, the silent procession of the monks (Tak Bat), then the temples, the royal palace and Mount Phousi.", "Al amanecer, la procesión silenciosa de los monjes (Tak Bat), y los templos, el palacio real y el monte Phousi."], "gi10"),
            la.day(4, ["Ban Xieng Mene", "Ban Xieng Mene", "Ban Xieng Mene"], ["Traversée du Mékong vers le village de Ban Xieng Mene, accessible seulement à pied.", "Across the Mekong to the village of Ban Xieng Mene, reachable only on foot.", "Travesía del Mekong hacia el pueblo de Ban Xieng Mene, accesible solo a pie."], "lp3"),
            la.day(5, ["Les cascades de Kuang Si", "The Kuang Si falls", "Las cascadas de Kuang Si"], ["Route à travers rizières et teckeraies jusqu'aux cascades turquoise de Kuang Si.", "A drive through rice fields and teak plantations to the turquoise Kuang Si falls.", "Carretera entre arrozales y plantaciones de teca hasta las cascadas turquesa de Kuang Si."], "gi7"),
          ]),
        la.chapter(["Vang Vieng et Vientiane", "Vang Vieng and Vientiane", "Vang Vieng y Vientián"], ["Les pitons calcaires, puis la capitale.", "The limestone peaks, then the capital.", "Los picos calizos y la capital."],
          ["lp5", "lp1", "lp7"],
          [
            la.day(6, ["Luang Prabang – Vang Vieng", "Luang Prabang – Vang Vieng", "Luang Prabang – Vang Vieng"], ["Matinée libre, puis train pour Vang Vieng.", "A free morning, then the train to Vang Vieng.", "Mañana libre y tren a Vang Vieng."], "lp5"),
            la.day(7, ["Vang Vieng", "Vang Vieng", "Vang Vieng"], ["La grotte de Tham Xang, puis une balade entre rizières et formations karstiques.", "Tham Xang cave, then a walk among rice fields and karst formations.", "La cueva de Tham Xang y un paseo entre arrozales y formaciones kársticas."], "lp1"),
            la.day(8, ["Vang Vieng – Vientiane", "Vang Vieng – Vientiane", "Vang Vieng – Vientián"], ["Route vers Vientiane, capitale à taille humaine, et ses temples.", "Drive to Vientiane, a human-scale capital, and its temples.", "Carretera hacia Vientián, una capital a escala humana, y sus templos."], "lp7"),
            la.day(9, ["Vientiane – vol retour", "Vientiane – flight home", "Vientián – vuelo de regreso"], ["Temps libre, puis transfert à l'aéroport et envol pour la France.", "Free time, then transfer to the airport and fly to France.", "Tiempo libre, traslado al aeropuerto y vuelo a Francia."], "gi3"),
            la.day(10, T_HOME, HOME, "lp3"),
          ]),
      ],
    }),

    // ───────────── Laos 2. Expérience laotienne — 13J/10N privatif ─────────────
    la.trip({
      slug: "laos-experience-nong-khiaw-nam-ou-prive-13j",
      name: ["Expérience laotienne en privé : Luang Prabang, la rivière Nam Ou et le nord", "Laos Experience in Private: Luang Prabang, the Nam Ou River and the North", "Experiencia laosiana en privado: Luang Prabang, el río Nam Ou y el norte"],
      tagline: ["Les villages hmong et tai lue, Nong Khiaw et les grottes du nord", "Hmong and Tai Lue villages, Nong Khiaw and the caves of the north", "Pueblos hmong y tai lue, Nong Khiaw y las cuevas del norte"],
      description: [
        "Un circuit privé hors des sentiers battus : Vientiane, le train pour Luang Prabang et le centre Living Land consacré au riz, une nuit au village de Ban Lae Sivilay, Nong Khiaw et la remontée de la rivière Nam Ou en bateau, les maisons tai lue de Ban Nayang Tai, les grandes grottes de Chom Ong chez les Kamu, le parc de Namkat Yorla Pa et ses ponts suspendus, puis Vang Vieng et le lac de Nam Ngum. Version 2027 à partir de 3 675 € par personne.",
        "A private tour off the beaten track: Vientiane, the train to Luang Prabang and the Living Land rice centre, a night in the village of Ban Lae Sivilay, Nong Khiaw and a boat trip up the Nam Ou river, the Tai Lue houses of Ban Nayang Tai, the great caves of Chom Ong among the Kamu, Namkat Yorla Pa park and its suspension bridges, then Vang Vieng and Nam Ngum lake. 2027 version from €3,675 per person.",
        "Un circuito privado fuera de los caminos trillados: Vientián, el tren a Luang Prabang y el centro Living Land dedicado al arroz, una noche en el pueblo de Ban Lae Sivilay, Nong Khiaw y la subida del río Nam Ou en barco, las casas tai lue de Ban Nayang Tai, las grandes cuevas de Chom Ong entre los kamu, el parque de Namkat Yorla Pa y sus puentes colgantes, y Vang Vieng y el lago de Nam Ngum. Versión 2027 desde 3.675 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé,10 nuits en hôtels 3* et lodges,Pension selon programme,Visites du programme,Guide local",
        "Flights from France,Private tour,10 nights in 3* hotels and lodges,Meals as per programme,Visits in the programme,Local guide",
        "Vuelos desde Francia,Circuito privado,10 noches en hoteles de 3* y lodges,Comidas según programa,Visitas del programa,Guía local",
      ],
      price: 3431, nights: 10, departureFrom: "Paris", image: "le1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 8, order: -69999,
      chapters: [
        la.chapter(["Vientiane et Luang Prabang", "Vientiane and Luang Prabang", "Vientián y Luang Prabang"], ["La capitale, puis la ville royale et le riz.", "The capital, then the royal city and rice.", "La capital, y la ciudad real y el arroz."],
          ["lp7", "le4", "gi5"],
          [
            la.day(1, T_FLY_LA, FLY_LA, "lp7"),
            la.day(2, ["Arrivée à Vientiane", "Arrival in Vientiane", "Llegada a Vientián"], ["Transfert à l'hôtel et, en fin de journée, promenade sur les berges du Mékong.", "Transfer to the hotel and, in the late afternoon, a walk along the banks of the Mekong.", "Traslado al hotel y, al final del día, paseo por la orilla del Mekong."], "gi3"),
            la.day(3, ["Vientiane – Luang Prabang", "Vientiane – Luang Prabang", "Vientián – Luang Prabang"], ["Le Pha That Luang, le Patuxai et le Vat Si Muang, puis environ 2 heures de train vers Luang Prabang.", "Pha That Luang, Patuxai and Vat Si Muang, then about 2 hours by train to Luang Prabang.", "El Pha That Luang, el Patuxai y el Vat Si Muang, y unas 2 horas de tren hasta Luang Prabang."], "lp7"),
            la.day(4, ["Luang Prabang et le riz", "Luang Prabang and rice", "Luang Prabang y el arroz"], ["Le centre Living Land, du repiquage à l'assiette, puis la ville en tuk-tuk.", "The Living Land centre, from planting to plate, then the town by tuk-tuk.", "El centro Living Land, del trasplante al plato, y la ciudad en tuk-tuk."], "le4"),
          ]),
        la.chapter(["Les villages et la Nam Ou", "The villages and the Nam Ou", "Los pueblos y el Nam Ou"], ["Les montagnes du nord et leur rivière.", "The northern mountains and their river.", "Las montañas del norte y su río."],
          ["le1", "lp2", "lp6", "le7"],
          [
            la.day(5, ["Mont Phousi – Ban Lae Sivilay", "Mount Phousi – Ban Lae Sivilay", "Monte Phousi – Ban Lae Sivilay"], ["Le mont Phousi, puis le village hmong de Ban Long Lao et une nuit au village de Ban Lae Sivilay.", "Mount Phousi, then the Hmong village of Ban Long Lao and a night in the village of Ban Lae Sivilay.", "El monte Phousi, el pueblo hmong de Ban Long Lao y una noche en el pueblo de Ban Lae Sivilay."], "le4"),
            la.day(6, ["Ban Lae Sivilay – Nong Khiaw", "Ban Lae Sivilay – Nong Khiaw", "Ban Lae Sivilay – Nong Khiaw"], ["Les artisans du village (tissage, filets de pêche, broderie), puis la route vers Nong Khiaw.", "The village craftspeople (weaving, fishing nets, embroidery), then the drive to Nong Khiaw.", "Los artesanos del pueblo (tejido, redes de pesca, bordado) y la carretera hacia Nong Khiaw."], "lp6"),
            la.day(7, ["La rivière Nam Ou", "The Nam Ou river", "El río Nam Ou"], ["Environ 1 h 45 en bateau traditionnel sur la Nam Ou jusqu'aux villages des environs de Muang Ngoi.", "About 1 h 45 by traditional boat on the Nam Ou to the villages around Muang Ngoi.", "Unas 1 h 45 en barco tradicional por el Nam Ou hasta los pueblos de los alrededores de Muang Ngoi."], "lp2"),
            la.day(8, ["Ban Nayang Tai – Namkat Yorla Pa", "Ban Nayang Tai – Namkat Yorla Pa", "Ban Nayang Tai – Namkat Yorla Pa"], ["Les maisons traditionnelles du village tai lue de Ban Nayang Tai, puis le parc de Namkat Yorla Pa.", "The traditional houses of the Tai Lue village of Ban Nayang Tai, then Namkat Yorla Pa park.", "Las casas tradicionales del pueblo tai lue de Ban Nayang Tai y el parque de Namkat Yorla Pa."], "le7"),
            la.day(9, ["Les grottes de Chom Ong", "The Chom Ong caves", "Las cuevas de Chom Ong"], ["Avec un guide local, le village kamu de Chom Ong et les plus vastes grottes du Laos, à travers rizières et forêt.", "With a local guide, the Kamu village of Chom Ong and the largest caves in Laos, through rice fields and forest.", "Con un guía local, el pueblo kamu de Chom Ong y las cuevas más grandes de Laos, entre arrozales y bosque."], "le2"),
          ]),
        la.chapter(["Vang Vieng et Nam Ngum", "Vang Vieng and Nam Ngum", "Vang Vieng y Nam Ngum"], ["Ponts suspendus, karst et lac.", "Suspension bridges, karst and a lake.", "Puentes colgantes, karst y un lago."],
          ["le6", "le3"],
          [
            la.day(10, ["Ponts suspendus – Vang Vieng", "Suspension bridges – Vang Vieng", "Puentes colgantes – Vang Vieng"], ["Une marche sur treize ponts suspendus dans le parc, puis le train pour Vang Vieng.", "A walk across thirteen suspension bridges in the park, then the train to Vang Vieng.", "Una caminata por trece puentes colgantes en el parque y tren a Vang Vieng."], "le6"),
            la.day(11, ["Vang Vieng – Nam Ngum", "Vang Vieng – Nam Ngum", "Vang Vieng – Nam Ngum"], ["La grotte de Tham Xang et la campagne entre falaises, puis le lac de Nam Ngum.", "Tham Xang cave and the countryside between cliffs, then Nam Ngum lake.", "La cueva de Tham Xang y el campo entre acantilados, y el lago de Nam Ngum."], "le3"),
            la.day(12, ["Nam Ngum – Vientiane – vol retour", "Nam Ngum – Vientiane – flight home", "Nam Ngum – Vientián – vuelo de regreso"], ["Temps libre, puis transfert à l'aéroport de Vientiane et envol pour la France.", "Free time, then transfer to Vientiane airport and fly to France.", "Tiempo libre, traslado al aeropuerto de Vientián y vuelo a Francia."], "le5"),
            la.day(13, T_HOME, HOME, "le1"),
          ]),
      ],
    }),

    // ───────────── Laos 3. Grand Tour d'Indochine — 21J/18N ─────────────
    la.trip({
      slug: "laos-grand-tour-indochine-cambodge-vietnam-21j",
      name: ["Grand tour d'Indochine : Laos, Cambodge et Vietnam", "Grand Tour of Indochina: Laos, Cambodia and Vietnam", "Gran tour de Indochina: Laos, Camboya y Vietnam"],
      tagline: ["Trois pays en trois semaines, de Luang Prabang à Angkor et à la baie d'Halong", "Three countries in three weeks, from Luang Prabang to Angkor and Ha Long Bay", "Tres países en tres semanas, de Luang Prabang a Angkor y la bahía de Ha Long"],
      description: [
        "Le grand voyage en petit groupe de 15 personnes au plus : au Laos, Vientiane, Vang Vieng, le train pour Luang Prabang et les cascades de Kuang Si ; au Cambodge, Banteay Samre, Angkor Wat, Preah Khan et la campagne du Tonlé Sap en scooter électrique ; au Vietnam, Hanoï au petit matin, une nuit en jonque dans la baie d'Halong, Hué, le col des Nuages, Hoi An, Saïgon et le delta du Mékong. Vols intérieurs inclus. Avec 3 nuits de plage à Ho Tram (24 jours) à partir de 4 062 € par personne.",
        "The great journey in a small group of 15 at most: in Laos, Vientiane, Vang Vieng, the train to Luang Prabang and the Kuang Si falls; in Cambodia, Banteay Samre, Angkor Wat, Preah Khan and the Tonlé Sap countryside by electric scooter; in Vietnam, Hanoi at dawn, a night on a junk in Ha Long Bay, Hue, the Hai Van pass, Hoi An, Saigon and the Mekong Delta. Domestic flights included. With 3 beach nights in Ho Tram (24 days) from €4,062 per person.",
        "El gran viaje en grupo reducido de 15 personas como máximo: en Laos, Vientián, Vang Vieng, el tren a Luang Prabang y las cascadas de Kuang Si; en Camboya, Banteay Samre, Angkor Wat, Preah Khan y el campo del Tonlé Sap en scooter eléctrico; en Vietnam, Hanói al amanecer, una noche en junco en la bahía de Ha Long, Hue, el paso de las Nubes, Hoi An, Saigón y el delta del Mekong. Vuelos interiores incluidos. Con 3 noches de playa en Ho Tram (24 días) desde 4.062 € por persona.",
      ],
      includes: [
        "Vols depuis la France (aller Vientiane; retour Saïgon),Vols intérieurs Luang Prabang – Siem Reap – Hanoï et Da Nang – Saïgon,18 nuits en hôtels 3* et 4* dont 1 en jonque,Pension selon programme,Visites du programme,Guides locaux francophones",
        "Flights from France (out to Vientiane; back from Saigon),Domestic flights Luang Prabang – Siem Reap – Hanoi and Da Nang – Saigon,18 nights in 3* and 4* hotels including 1 on a junk,Meals as per programme,Visits in the programme,Local French-speaking guides",
        "Vuelos desde Francia (ida a Vientián; regreso desde Saigón),Vuelos interiores Luang Prabang – Siem Reap – Hanói y Da Nang – Saigón,18 noches en hoteles de 3* y 4* con 1 en junco,Comidas según programa,Visitas del programa,Guías locales francófonos",
      ],
      price: 3525, nights: 18, departureFrom: "Paris", image: "gi5",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 15, order: -69998,
      chapters: [
        la.chapter(["Le Laos", "Laos", "Laos"], ["Vientiane, Vang Vieng et Luang Prabang.", "Vientiane, Vang Vieng and Luang Prabang.", "Vientián, Vang Vieng y Luang Prabang."],
          ["gi3", "gi1", "gi5", "gi7", "gi10"],
          [
            la.day(1, T_FLY_LA, FLY_LA, "gi3"),
            la.day(2, ["Arrivée à Vientiane", "Arrival in Vientiane", "Llegada a Vientián"], ["Accueil, transfert à l'hôtel et temps libre.", "Welcome, transfer to the hotel and free time.", "Recibimiento, traslado al hotel y tiempo libre."], "gi3"),
            la.day(3, ["Vientiane – Vang Vieng", "Vientiane – Vang Vieng", "Vientián – Vang Vieng"], ["Le Patuxai, le Vat Si Muang et le Vat Sisaket, puis la route vers Vang Vieng.", "Patuxai, Vat Si Muang and Vat Sisaket, then the drive to Vang Vieng.", "El Patuxai, el Vat Si Muang y el Vat Sisaket, y la carretera hacia Vang Vieng."], "gi1"),
            la.day(4, ["Vang Vieng – Luang Prabang en train", "Vang Vieng – Luang Prabang by train", "Vang Vieng – Luang Prabang en tren"], ["Train à travers les montagnes jusqu'à Luang Prabang.", "A train through the mountains to Luang Prabang.", "Tren entre montañas hasta Luang Prabang."], "gi4"),
            la.day(5, ["Luang Prabang", "Luang Prabang", "Luang Prabang"], ["La procession des moines au petit matin (en option), puis les temples de la ville royale.", "The monks' procession at dawn (optional), then the temples of the royal city.", "La procesión de los monjes al amanecer (opcional) y los templos de la ciudad real."], "gi10"),
            la.day(6, ["Les cascades de Kuang Si", "The Kuang Si falls", "Las cascadas de Kuang Si"], ["Route entre rizières et montagnes jusqu'aux cascades de Kuang Si.", "A drive among rice fields and mountains to the Kuang Si falls.", "Carretera entre arrozales y montañas hasta las cascadas de Kuang Si."], "gi7"),
          ]),
        la.chapter(["Le Cambodge", "Cambodia", "Camboya"], ["Angkor et la campagne du Tonlé Sap.", "Angkor and the Tonlé Sap countryside.", "Angkor y el campo del Tonlé Sap."],
          ["gi2", "gi8", "le5"],
          [
            la.day(7, ["Vol pour Siem Reap", "Flight to Siem Reap", "Vuelo a Siem Reap"], ["Matinée libre, puis vol pour Siem Reap.", "A free morning, then a flight to Siem Reap.", "Mañana libre y vuelo a Siem Reap."], "gi2"),
            la.day(8, ["Banteay Samre et les temples", "Banteay Samre and the temples", "Banteay Samre y los templos"], ["La campagne et ses cocotiers jusqu'au temple de Banteay Samre et aux temples des environs.", "The countryside and its coconut palms to the temple of Banteay Samre and the temples around.", "El campo y sus cocoteros hasta el templo de Banteay Samre y los templos de los alrededores."], "gi2"),
            la.day(9, ["Angkor en tuk-tuk", "Angkor by tuk-tuk", "Angkor en tuk-tuk"], ["Angkor Wat, puis le Preah Khan et les grands temples en tuk-tuk.", "Angkor Wat, then Preah Khan and the great temples by tuk-tuk.", "Angkor Wat, y el Preah Khan y los grandes templos en tuk-tuk."], "gi2"),
            la.day(10, ["Le Tonlé Sap en scooter électrique", "The Tonlé Sap by electric scooter", "El Tonlé Sap en scooter eléctrico"], ["La campagne en scooter électrique entre bambous et cocotiers, puis le lac Tonlé Sap.", "The countryside by electric scooter among bamboo and coconut palms, then Tonlé Sap lake.", "El campo en scooter eléctrico entre bambúes y cocoteros, y el lago Tonlé Sap."], "gi8"),
          ]),
        la.chapter(["Le Vietnam", "Vietnam", "Vietnam"], ["De Hanoï au delta du Mékong.", "From Hanoi to the Mekong Delta.", "De Hanói al delta del Mekong."],
          ["le3", "le6", "le4"],
          [
            la.day(11, ["Siem Reap – Hanoï", "Siem Reap – Hanoi", "Siem Reap – Hanói"], ["Les ateliers des Artisans d'Angkor, puis vol pour Hanoï.", "The Artisans d'Angkor workshops, then a flight to Hanoi.", "Los talleres de los Artisans d'Angkor y vuelo a Hanói."], "le6"),
            la.day(12, ["Hanoï au petit matin", "Hanoi at dawn", "Hanói al amanecer"], ["À pied jusqu'au lac de l'Épée restituée à l'aube et petit-déjeuner de rue, puis la ville.", "On foot to the Lake of the Restored Sword at dawn and a street breakfast, then the city.", "A pie hasta el lago de la Espada Restituida al alba y desayuno callejero, y la ciudad."], "le4"),
            la.day(13, ["La baie d'Halong en jonque", "Ha Long Bay by junk", "La bahía de Ha Long en junco"], ["Route vers la baie et nuit en jonque parmi les îlots calcaires.", "Drive to the bay and a night on a junk among the limestone islets.", "Carretera hacia la bahía y noche en junco entre los islotes calizos."], "le3"),
            la.day(14, ["Halong – Hanoï – train de nuit", "Ha Long – Hanoi – night train", "Ha Long – Hanói – tren nocturno"], ["Tai-chi au lever du jour et fin de croisière, puis train de nuit vers Hué.", "Tai chi at sunrise and the end of the cruise, then the night train to Hue.", "Taichí al amanecer y final del crucero, y tren nocturno hacia Hue."], "le3"),
            la.day(15, ["Hué", "Hue", "Hue"], ["La citadelle et la cité impériale de Hué.", "The citadel and the imperial city of Hue.", "La ciudadela y la ciudad imperial de Hue."], "le4"),
            la.day(16, ["Le col des Nuages – Hoi An", "The Hai Van pass – Hoi An", "El paso de las Nubes – Hoi An"], ["Le col des Nuages, le musée Cham, puis la vieille ville de Hoi An à pied.", "The Hai Van pass, the Cham museum, then Hoi An old town on foot.", "El paso de las Nubes, el museo cham y el casco antiguo de Hoi An a pie."], "le6"),
            la.day(17, ["Hoi An – Saïgon", "Hoi An – Saigon", "Hoi An – Saigón"], ["Matinée libre à Hoi An, puis vol de Da Nang à Saïgon.", "A free morning in Hoi An, then a flight from Da Nang to Saigon.", "Mañana libre en Hoi An y vuelo de Da Nang a Saigón."], "le4"),
            la.day(18, ["Saïgon", "Saigon", "Saigón"], ["Le centre à pied : le palais de la Réunification, la poste et la cathédrale.", "The centre on foot: the Reunification Palace, the post office and the cathedral.", "El centro a pie: el palacio de la Reunificación, la oficina de correos y la catedral."], "le6"),
            la.day(19, ["Le delta du Mékong", "The Mekong Delta", "El delta del Mekong"], ["En bateau sur le fleuve à Ben Tre, ses ateliers et ses arroyos.", "By boat on the river at Ben Tre, its workshops and arroyos.", "En barco por el río en Ben Tre, sus talleres y sus canales."], "le5"),
            la.day(20, ["Saïgon – vol retour", "Saigon – flight home", "Saigón – vuelo de regreso"], ["Temps libre, puis transfert à l'aéroport et envol pour la France.", "Free time, then transfer to the airport and fly to France.", "Tiempo libre, traslado al aeropuerto y vuelo a Francia."], "gi8"),
            la.day(21, T_HOME, HOME, "gi5"),
          ]),
      ],
    }),

    // ───────────── Philippines 1. Manille + Boracay — 11J/8N ─────────────
    ph.trip({
      slug: "philippines-manille-boracay-11j",
      name: ["Combiné Manille et Boracay", "Manila and Boracay Combination", "Combinado Manila y Boracay"],
      tagline: ["Une journée dans la vieille ville espagnole, puis six nuits sur la plage de sable blanc", "A day in the old Spanish city, then six nights on the white-sand beach", "Una jornada en la vieja ciudad española y seis noches en la playa de arena blanca"],
      description: [
        "Un combiné en liberté : deux nuits à Manille avec une journée guidée au parc Rizal, dans la cité fortifiée d'Intramuros et au fort Santiago, puis un vol pour Caticlan et six nuits au Belmont Boracay 4* sur l'île de Boracay, réputée pour son sable blanc et ses eaux turquoise. Transferts privés et vols intérieurs inclus.",
        "An independent combination: two nights in Manila with a guided day at Rizal Park, in the walled city of Intramuros and Fort Santiago, then a flight to Caticlan and six nights at the Belmont Boracay 4* on Boracay island, known for its white sand and turquoise water. Private transfers and domestic flights included.",
        "Un combinado en libertad: dos noches en Manila con una jornada guiada por el parque Rizal, la ciudad amurallada de Intramuros y el fuerte Santiago, y un vuelo a Caticlan y seis noches en el Belmont Boracay 4* en la isla de Boracay, conocida por su arena blanca y sus aguas turquesa. Traslados privados y vuelos interiores incluidos.",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs Manille – Caticlan aller-retour,Transferts privés,8 nuits en hôtels 4*,Petits-déjeuners,Journée guidée à Manille avec déjeuner",
        "Flights from France,Return domestic flights Manila – Caticlan,Private transfers,8 nights in 4* hotels,Breakfasts,Guided day in Manila with lunch",
        "Vuelos desde Francia,Vuelos interiores Manila – Caticlan ida y vuelta,Traslados privados,8 noches en hoteles de 4*,Desayunos,Jornada guiada en Manila con almuerzo",
      ],
      price: 1714, nights: 8, departureFrom: "Francfort", image: "mb2",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,family", maxGuests: 8, order: -68000,
      chapters: [
        ph.chapter(["Manille", "Manila", "Manila"], ["La capitale et sa vieille ville espagnole.", "The capital and its old Spanish city.", "La capital y su vieja ciudad española."],
          ["mb1", "mb4"],
          [
            ph.day(1, T_FLY_PH, FLY_PH, "mb1"),
            ph.day(2, ["Arrivée à Manille", "Arrival in Manila", "Llegada a Manila"], ["Accueil et transfert privé à l'hôtel.", "Welcome and private transfer to the hotel.", "Recibimiento y traslado privado al hotel."], "mb1"),
            ph.day(3, ["Manille, Intramuros", "Manila, Intramuros", "Manila, Intramuros"], ["Journée guidée : le parc Rizal, la cité fortifiée espagnole d'Intramuros et le fort Santiago.", "A guided day: Rizal Park, the Spanish walled city of Intramuros and Fort Santiago.", "Jornada guiada: el parque Rizal, la ciudad amurallada española de Intramuros y el fuerte Santiago."], "mb4"),
          ]),
        ph.chapter(["Boracay", "Boracay", "Boracay"], ["Six nuits sur l'île au sable blanc.", "Six nights on the white-sand island.", "Seis noches en la isla de arena blanca."],
          ["mb2", "mb3", "mb5", "mb6"],
          [
            ph.day(4, ["Vol pour Boracay", "Flight to Boracay", "Vuelo a Boracay"], ["Vol d'environ 1 heure vers Caticlan, puis voiture et bateau jusqu'à Boracay.", "A flight of about 1 hour to Caticlan, then car and boat to Boracay.", "Vuelo de alrededor de 1 hora a Caticlan, y coche y barco hasta Boracay."], "mb5"),
            ph.day(5, T_BEACH, BEACH, "mb2"), ph.day(6, T_BEACH, BEACH, "mb3"), ph.day(7, T_BEACH, BEACH, "mb6"), ph.day(8, T_BEACH, BEACH, "mb1"), ph.day(9, T_BEACH, BEACH, "mb5"),
            ph.day(10, ["Boracay – vol retour", "Boracay – flight home", "Boracay – vuelo de regreso"], ["Bateau et voiture jusqu'à Caticlan, vol pour Manille puis envol pour la France.", "Boat and car to Caticlan, a flight to Manila then fly to France.", "Barco y coche hasta Caticlan, vuelo a Manila y vuelo a Francia."], "mb4"),
            ph.day(11, T_HOME, HOME, "mb2"),
          ]),
      ],
    }),

    // ───────────── Philippines 2. D'île en île — 14J/11N ─────────────
    ph.trip({
      slug: "philippines-ile-en-ile-bohol-dumaguete-siquijor-14j",
      name: ["D'île en île dans les Visayas : Cebu, Bohol, Dumaguete et Siquijor", "Island Hopping in the Visayas: Cebu, Bohol, Dumaguete and Siquijor", "De isla en isla por las Visayas: Cebú, Bohol, Dumaguete y Siquijor"],
      tagline: ["Quatre îles en ferry, à votre rythme", "Four islands by ferry, at your own pace", "Cuatro islas en ferri, a su ritmo"],
      description: [
        "Un combiné en liberté dans l'archipel des Visayas : Cebu, puis le ferry pour Bohol et trois nuits au bord de la plage, Dumaguete et l'île d'Apo, réputée pour ses tortues, puis l'île mystérieuse de Siquijor et ses cascades, avant le retour à Cebu. Hôtels, transferts privés et ferries réservés. Version privative de 17 jours avec plus de temps sur chaque île, à partir de 2 541 € par personne.",
        "An independent combination in the Visayas archipelago: Cebu, then the ferry to Bohol and three nights by the beach, Dumaguete and Apo island, known for its turtles, then the mysterious island of Siquijor and its waterfalls, before returning to Cebu. Hotels, private transfers and ferries booked. A 17-day private version with more time on each island, from €2,541 per person.",
        "Un combinado en libertad por el archipiélago de las Visayas: Cebú, el ferri a Bohol y tres noches junto a la playa, Dumaguete y la isla de Apo, conocida por sus tortugas, y la misteriosa isla de Siquijor y sus cascadas, antes del regreso a Cebú. Hoteles, traslados privados y ferris reservados. Versión privada de 17 días con más tiempo en cada isla, desde 2.541 € por persona.",
      ],
      includes: PH_INC(11),
      price: 2154, nights: 11, departureFrom: "Bâle", image: "ie9",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,honeymoon,solo", maxGuests: 8, order: -67999,
      chapters: [
        ph.chapter(["Cebu et Bohol", "Cebu and Bohol", "Cebú y Bohol"], ["L'arrivée, puis trois nuits à Bohol.", "Arrival, then three nights in Bohol.", "La llegada y tres noches en Bohol."],
          ["ie3", "ie4", "ie9"],
          [
            ph.day(1, T_FLY_PH, FLY_PH, "ie6"), ph.day(2, T_CEBU, CEBU, "ie6"),
            ph.day(3, ["Ferry pour Bohol", "Ferry to Bohol", "Ferri a Bohol"], ["Environ 1 h 30 de ferry jusqu'à Tagbilaran, sur l'île de Bohol.", "About 1 h 30 by ferry to Tagbilaran, on Bohol island.", "Unas 1 h 30 de ferri hasta Tagbilaran, en la isla de Bohol."], "ie3"),
            ph.day(4, T_BEACH, BEACH, "ie9"), ph.day(5, T_BEACH, [`${BEACH[0]} Les Chocolate Hills et les tarsiers sont à portée de route.`, `${BEACH[1]} The Chocolate Hills and the tarsiers are within easy reach.`, `${BEACH[2]} Las Chocolate Hills y los tarseros están a poca distancia.`], "ie4"),
          ]),
        ph.chapter(["Dumaguete et Siquijor", "Dumaguete and Siquijor", "Dumaguete y Siquijor"], ["Les tortues d'Apo, puis l'île des guérisseurs.", "The turtles of Apo, then the island of healers.", "Las tortugas de Apo y la isla de los curanderos."],
          ["ie7", "ie8", "ie5", "ie13"],
          [
            ph.day(6, ["Bohol – Dumaguete", "Bohol – Dumaguete", "Bohol – Dumaguete"], ["Environ 2 h 30 de ferry jusqu'à Dumaguete.", "About 2 h 30 by ferry to Dumaguete.", "Unas 2 h 30 de ferri hasta Dumaguete."], "ie6"),
            ph.day(7, ["L'île d'Apo", "Apo island", "La isla de Apo"], ["Journée libre, idéale pour l'île d'Apo, à une trentaine de kilomètres, et ses tortues.", "A free day, ideal for Apo island, some thirty kilometres away, and its turtles.", "Jornada libre, ideal para la isla de Apo, a unos treinta kilómetros, y sus tortugas."], "ie8"),
            ph.day(8, T_BEACH, BEACH, "ie7"),
            ph.day(9, ["Dumaguete – Siquijor", "Dumaguete – Siquijor", "Dumaguete – Siquijor"], ["Environ 1 heure de ferry jusqu'à l'île de Siquijor.", "About 1 hour by ferry to Siquijor island.", "Alrededor de 1 hora de ferri hasta la isla de Siquijor."], "ie5"),
            ph.day(10, T_BEACH, [`${BEACH[0]} Les cascades de Cambugahay et les plages de l'île.`, `${BEACH[1]} The Cambugahay falls and the island's beaches.`, `${BEACH[2]} Las cascadas de Cambugahay y las playas de la isla.`], "ie13"),
            ph.day(11, T_BEACH, BEACH, "ie9"),
            ph.day(12, ["Siquijor – Cebu", "Siquijor – Cebu", "Siquijor – Cebú"], ["Ferry vers Cebu via Dumaguete.", "Ferry to Cebu via Dumaguete.", "Ferri a Cebú vía Dumaguete."], "ie6"),
            ph.day(13, ["Cebu – vol retour", "Cebu – flight home", "Cebú – vuelo de regreso"], ["Journée libre, puis transfert à l'aéroport et envol pour la France.", "A free day, then transfer to the airport and fly to France.", "Jornada libre, traslado al aeropuerto y vuelo a Francia."], "ie3"),
            ph.day(14, T_HOME, HOME, "ie9"),
          ]),
      ],
    }),

    // ───────────── Philippines 3. À la découverte de Bohol — 11J/8N privatif ─────────────
    ph.trip({
      slug: "philippines-bohol-chocolate-hills-prive-11j",
      name: ["À la découverte de Bohol : Chocolate Hills, tarsiers et île de Pamilacan", "Discovering Bohol: the Chocolate Hills, Tarsiers and Pamilacan Island", "Descubriendo Bohol: Chocolate Hills, tarseros e isla de Pamilacan"],
      tagline: ["Deux journées d'excursion privées, puis la plage", "Two private day trips, then the beach", "Dos jornadas de excursión privadas y la playa"],
      description: [
        "Un séjour privé sur l'île de Bohol : une journée dans la campagne (le sanctuaire des tarsiers, la rivière Loboc et les Chocolate Hills), une journée en bateau à balancier vers l'île de Pamilacan, puis quatre jours libres à la plage. Arrivée et départ par Cebu, ferries, transferts privés et excursions avec déjeuner inclus.",
        "A private stay on Bohol island: a day in the countryside (the tarsier sanctuary, the Loboc river and the Chocolate Hills), a day by outrigger boat to Pamilacan island, then four free days on the beach. Arrival and departure via Cebu; ferries, private transfers and excursions with lunch included.",
        "Una estancia privada en la isla de Bohol: una jornada por el campo (el santuario de los tarseros, el río Loboc y las Chocolate Hills), una jornada en barco de balancín hasta la isla de Pamilacan y cuatro días libres en la playa. Llegada y salida por Cebú; ferris, traslados privados y excursiones con almuerzo incluidos.",
      ],
      includes: PH_INC(8),
      price: 2155, nights: 8, departureFrom: "Bruxelles", image: "bo1",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -67998,
      chapters: [
        ph.chapter(["Cebu et Bohol", "Cebu and Bohol", "Cebú y Bohol"], ["Deux journées d'excursion.", "Two days out.", "Dos jornadas de excursión."],
          ["bo1", "bo2", "bo3", "bo5"],
          [
            ph.day(1, T_FLY_PH, FLY_PH, "bo6"), ph.day(2, T_CEBU, CEBU, "bo6"),
            ph.day(3, ["Ferry pour Bohol", "Ferry to Bohol", "Ferri a Bohol"], ["Environ 2 heures de ferry jusqu'à Bohol et transfert à l'hôtel de plage.", "About 2 hours by ferry to Bohol and transfer to the beach hotel.", "Unas 2 horas de ferri hasta Bohol y traslado al hotel de playa."], "bo3"),
            ph.day(4, T_BOHOL_TOUR, BOHOL_TOUR, "bo1"),
            ph.day(5, ["L'île de Pamilacan", "Pamilacan island", "La isla de Pamilacan"], ["Journée en bateau à balancier vers l'île de Pamilacan, ses fonds marins et sa plage. Déjeuner inclus.", "A day by outrigger boat to Pamilacan island, its reefs and its beach. Lunch included.", "Jornada en barco de balancín a la isla de Pamilacan, sus fondos marinos y su playa. Almuerzo incluido."], "bo4"),
          ]),
        ph.chapter(["La plage", "The beach", "La playa"], ["Quatre jours libres.", "Four free days.", "Cuatro días libres."],
          ["bo6", "bo4"],
          [
            ph.day(6, T_BEACH, BEACH, "bo6"), ph.day(7, T_BEACH, BEACH, "bo4"), ph.day(8, T_BEACH, BEACH, "bo6"), ph.day(9, T_BEACH, BEACH, "bo5"),
            ph.day(10, ["Bohol – Cebu – vol retour", "Bohol – Cebu – flight home", "Bohol – Cebú – vuelo de regreso"], ["Ferry pour Cebu, transfert à l'aéroport et envol pour la France.", "Ferry to Cebu, transfer to the airport and fly to France.", "Ferri a Cebú, traslado al aeropuerto y vuelo a Francia."], "bo3"),
            ph.day(11, T_HOME, HOME, "bo1"),
          ]),
      ],
    }),

    // ───────────── Philippines 4. Beauté des îles Visayas — 12J/9N ─────────────
    ph.trip({
      slug: "philippines-beaute-visayas-siquijor-bohol-12j",
      name: ["Beauté des îles Visayas : Dumaguete, Siquijor et Bohol", "Beauty of the Visayas: Dumaguete, Siquijor and Bohol", "Belleza de las islas Visayas: Dumaguete, Siquijor y Bohol"],
      tagline: ["Lacs de montagne, l'île mystique de Siquijor et la campagne de Bohol, avec trois excursions", "Mountain lakes, the mystical island of Siquijor and the Bohol countryside, with three excursions", "Lagos de montaña, la isla mística de Siquijor y el campo de Bohol, con tres excursiones"],
      description: [
        "Un combiné en liberté avec excursions : Cebu, le ferry pour Dumaguete et les lacs jumeaux de Balinsasayao à 850 m d'altitude, l'île de Siquijor (son banian géant, ses cascades et ses traditions mystiques), puis Bohol et sa journée dans la campagne, des tarsiers aux Chocolate Hills. Transferts privés et ferries inclus. Extension à El Nido (15 jours) à partir de 3 136 € par personne.",
        "An independent combination with excursions: Cebu, the ferry to Dumaguete and the Balinsasayao twin lakes at 850 m, Siquijor island (its giant banyan, waterfalls and mystical traditions), then Bohol and its day in the countryside, from the tarsiers to the Chocolate Hills. Private transfers and ferries included. Extension to El Nido (15 days) from €3,136 per person.",
        "Un combinado en libertad con excursiones: Cebú, el ferri a Dumaguete y los lagos gemelos de Balinsasayao a 850 m de altitud, la isla de Siquijor (su baniano gigante, sus cascadas y sus tradiciones místicas), y Bohol y su jornada por el campo, de los tarseros a las Chocolate Hills. Traslados privados y ferris incluidos. Extensión a El Nido (15 días) desde 3.136 € por persona.",
      ],
      includes: PH_INC(9),
      price: 2359, nights: 9, departureFrom: "Bâle", image: "vi1",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,honeymoon,solo", maxGuests: 8, order: -67997,
      chapters: [
        ph.chapter(["Cebu, Dumaguete et Siquijor", "Cebu, Dumaguete and Siquijor", "Cebú, Dumaguete y Siquijor"], ["Lacs, cascades et île mystique.", "Lakes, waterfalls and a mystical island.", "Lagos, cascadas e isla mística."],
          ["vi6", "vi5", "vi1"],
          [
            ph.day(1, T_FLY_PH, FLY_PH, "vi1"), ph.day(2, T_CEBU, CEBU, "vi1"),
            ph.day(3, ["Cebu – Dumaguete", "Cebu – Dumaguete", "Cebú – Dumaguete"], ["Ferry via Bohol jusqu'à Dumaguete, la « ville des gens aimables », et premiers pas en ville.", "Ferry via Bohol to Dumaguete, the 'city of gentle people', and first steps in town.", "Ferri vía Bohol hasta Dumaguete, la «ciudad de la gente amable», y primeros pasos por la ciudad."], "vi5"),
            ph.day(4, ["Les lacs de Balinsasayao", "The Balinsasayao lakes", "Los lagos de Balinsasayao"], ["Route panoramique vers les lacs jumeaux de Balinsasayao, à 850 m d'altitude.", "A panoramic drive to the Balinsasayao twin lakes, at 850 m.", "Carretera panorámica hacia los lagos gemelos de Balinsasayao, a 850 m de altitud."], "vi6"),
            ph.day(5, ["Dumaguete – Siquijor", "Dumaguete – Siquijor", "Dumaguete – Siquijor"], ["Ferry pour Siquijor, île de plages, de cascades et de guérisseurs.", "Ferry to Siquijor, an island of beaches, waterfalls and healers.", "Ferri a Siquijor, isla de playas, cascadas y curanderos."], "vi1"),
            ph.day(6, ["Siquijor", "Siquijor", "Siquijor"], ["Journée de découverte : le banian géant, les cascades et les villages de l'île.", "A day of discovery: the giant banyan tree, the waterfalls and the island's villages.", "Jornada de descubrimiento: el baniano gigante, las cascadas y los pueblos de la isla."], "vi6"),
            ph.day(7, T_BEACH, BEACH, "vi5"),
          ]),
        ph.chapter(["Bohol", "Bohol", "Bohol"], ["Les tarsiers et les Chocolate Hills.", "The tarsiers and the Chocolate Hills.", "Los tarseros y las Chocolate Hills."],
          ["vi3", "vi3", "vi2"],
          [
            ph.day(8, ["Siquijor – Bohol", "Siquijor – Bohol", "Siquijor – Bohol"], ["Environ 2 h 30 de ferry jusqu'à Bohol.", "About 2 h 30 by ferry to Bohol.", "Unas 2 h 30 de ferri hasta Bohol."], "vi2"),
            ph.day(9, T_BOHOL_TOUR, BOHOL_TOUR, "vi3"),
            ph.day(10, T_BEACH, BEACH, "vi3"),
            ph.day(11, ["Bohol – Cebu – vol retour", "Bohol – Cebu – flight home", "Bohol – Cebú – vuelo de regreso"], ["Ferry pour Cebu, transfert à l'aéroport et envol pour la France.", "Ferry to Cebu, transfer to the airport and fly to France.", "Ferri a Cebú, traslado al aeropuerto y vuelo a Francia."], "vi2"),
            ph.day(12, T_HOME, HOME, "vi1"),
          ]),
      ],
    }),

    // ───────────── Philippines 5. Passion Palawan — 11J/8N ─────────────
    ph.trip({
      slug: "philippines-passion-palawan-coron-el-nido-11j",
      name: ["Passion Palawan : Coron et El Nido", "Palawan Passion: Coron and El Nido", "Pasión Palawan: Coron y El Nido"],
      tagline: ["Les lagons et les falaises de Palawan, avec deux journées en bateau", "The lagoons and cliffs of Palawan, with two days by boat", "Las lagunas y los acantilados de Palawan, con dos jornadas en barco"],
      description: [
        "Un combiné en liberté sur l'archipel de Palawan : Manille, un vol pour Coron et son Super Ultimate Tour en bateau parmi les lacs, les lagons et les épaves, le ferry vers El Nido et son Tour A entre les falaises karstiques, puis le retour par Clark. Vols intérieurs, ferry, transferts privés et excursions avec déjeuner inclus. Version prolongée à El Nido (13 jours) à partir de 2 837 € par personne.",
        "An independent combination in the Palawan archipelago: Manila, a flight to Coron and its Super Ultimate Tour by boat among the lakes, lagoons and wrecks, the ferry to El Nido and its Tour A among the karst cliffs, then home via Clark. Domestic flights, ferry, private transfers and excursions with lunch included. A longer version in El Nido (13 days) from €2,837 per person.",
        "Un combinado en libertad por el archipiélago de Palawan: Manila, un vuelo a Coron y su Super Ultimate Tour en barco entre lagos, lagunas y pecios, el ferri a El Nido y su Tour A entre los acantilados kársticos, y el regreso por Clark. Vuelos interiores, ferri, traslados privados y excursiones con almuerzo incluidos. Versión más larga en El Nido (13 días) desde 2.837 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs Manille – Coron et El Nido – Clark,Ferry Coron – El Nido,8 nuits en hôtels 3* et 4*,Petits-déjeuners et 2 déjeuners,2 journées en bateau",
        "Flights from France,Domestic flights Manila – Coron and El Nido – Clark,Coron – El Nido ferry,8 nights in 3* and 4* hotels,Breakfasts and 2 lunches,2 days by boat",
        "Vuelos desde Francia,Vuelos interiores Manila – Coron y El Nido – Clark,Ferri Coron – El Nido,8 noches en hoteles de 3* y 4*,Desayunos y 2 almuerzos,2 jornadas en barco",
      ],
      price: 2677, nights: 8, departureFrom: "Paris", image: "pw1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,honeymoon,solo", maxGuests: 8, order: -67996,
      chapters: [
        ph.chapter(["Manille et Coron", "Manila and Coron", "Manila y Coron"], ["Les lagons de Coron.", "The lagoons of Coron.", "Las lagunas de Coron."],
          ["pw1", "pw4", "pw6"],
          [
            ph.day(1, T_FLY_PH, FLY_PH, "pw4"),
            ph.day(2, ["Arrivée à Manille", "Arrival in Manila", "Llegada a Manila"], ["Accueil et transfert privé à l'hôtel.", "Welcome and private transfer to the hotel.", "Recibimiento y traslado privado al hotel."], "pw4"),
            ph.day(3, ["Vol pour Coron", "Flight to Coron", "Vuelo a Coron"], ["Environ 1 h 20 de vol jusqu'à Coron et ses eaux cristallines.", "About 1 h 20 by air to Coron and its crystal-clear water.", "Unas 1 h 20 de vuelo hasta Coron y sus aguas cristalinas."], "pw4"),
            ph.day(4, ["Coron en bateau", "Coron by boat", "Coron en barco"], ["Le Coron Super Ultimate Tour en bateau : lacs, lagons et snorkeling. Déjeuner inclus.", "The Coron Super Ultimate Tour by boat: lakes, lagoons and snorkelling. Lunch included.", "El Coron Super Ultimate Tour en barco: lagos, lagunas y esnórquel. Almuerzo incluido."], "pw1"),
            ph.day(5, ["Coron, journée libre", "Coron, free day", "Coron, jornada libre"], ["Journée libre : plages, plongée sur les épaves ou sources chaudes.", "A free day: beaches, diving on the wrecks or hot springs.", "Jornada libre: playas, buceo en los pecios o aguas termales."], "pw6"),
          ]),
        ph.chapter(["El Nido", "El Nido", "El Nido"], ["Les falaises karstiques et leurs criques.", "The karst cliffs and their coves.", "Los acantilados kársticos y sus calas."],
          ["pw2", "pw3", "pw5"],
          [
            ph.day(6, ["Coron – El Nido en ferry", "Coron – El Nido by ferry", "Coron – El Nido en ferri"], ["Environ 3 h 30 de ferry jusqu'à El Nido.", "About 3 h 30 by ferry to El Nido.", "Unas 3 h 30 de ferri hasta El Nido."], "pw5"),
            ph.day(7, ["El Nido, Tour A", "El Nido, Tour A", "El Nido, Tour A"], ["Le Tour A en bateau : lagons, criques et falaises. Déjeuner inclus.", "Tour A by boat: lagoons, coves and cliffs. Lunch included.", "El Tour A en barco: lagunas, calas y acantilados. Almuerzo incluido."], "pw2"),
            ph.day(8, T_BEACH, BEACH, "pw3"),
            ph.day(9, ["El Nido – Clark – Manille", "El Nido – Clark – Manila", "El Nido – Clark – Manila"], ["Vol pour Clark, puis transfert à Manille.", "Flight to Clark, then transfer to Manila.", "Vuelo a Clark y traslado a Manila."], "pw5"),
            ph.day(10, ["Manille – vol retour", "Manila – flight home", "Manila – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "pw4"),
            ph.day(11, T_HOME, HOME, "pw1"),
          ]),
      ],
    }),

    // ───────────── Ouzbékistan. Intimiste — 12J/10N ─────────────
    uz.trip({
      slug: "ouzbekistan-intimiste-khiva-boukhara-samarcande-12j",
      name: ["Ouzbékistan intimiste : Khiva, Boukhara, une nuit en yourte et Samarcande", "Uzbekistan Up Close: Khiva, Bukhara, a Night in a Yurt and Samarkand", "Uzbekistán íntimo: Jiva, Bujará, una noche en yurta y Samarcanda"],
      tagline: ["Les cités de la route de la Soie en petit groupe de seize voyageurs", "The cities of the Silk Road in a small group of sixteen", "Las ciudades de la Ruta de la Seda en grupo reducido de dieciséis viajeros"],
      description: [
        "L'Ouzbékistan en groupe de 16 personnes au plus : Khiva derrière ses remparts et son minaret Kalta Minor, le train à travers le désert du Kyzylkoum, deux jours à Boukhara (le minaret Kalon, les coupoles marchandes, la citadelle de l'Ark, le mausolée d'Ismaïl Samani), la céramique de Guijdouvan et une nuit en camp de yourtes près du lac Aydar, Samarcande (le Registan, l'observatoire d'Ouloug Beg, la nécropole de Chakhi-Zinda, la mosquée Bibi-Khanym), puis Tachkent.",
        "Uzbekistan in a group of 16 at most: Khiva behind its ramparts and the Kalta Minor minaret, the train across the Kyzylkum desert, two days in Bukhara (the Kalon minaret, the trading domes, the Ark citadel, the Ismail Samani mausoleum), the ceramics of Gijduvan and a night in a yurt camp near Lake Aydar, Samarkand (the Registan, Ulugh Beg's observatory, the Shah-i-Zinda necropolis, the Bibi-Khanym mosque), then Tashkent.",
        "Uzbekistán en grupo de 16 personas como máximo: Jiva tras sus murallas y su minarete Kalta Minor, el tren por el desierto de Kyzylkum, dos días en Bujará (el minarete Kalon, las cúpulas comerciales, la ciudadela del Ark, el mausoleo de Ismail Samani), la cerámica de Gijduvan y una noche en un campamento de yurtas cerca del lago Aydar, Samarcanda (el Registán, el observatorio de Ulugh Beg, la necrópolis de Shah-i-Zinda, la mezquita Bibi-Khanym) y Taskent.",
      ],
      includes: [
        "Vols depuis la France (aller Ourgentch; retour Tachkent),Train Khiva – Boukhara,10 nuits en hôtels 4* et 1 en yourte,Pension selon programme,Visites du programme,Guide francophone",
        "Flights from France (out to Urgench; back from Tashkent),Khiva – Bukhara train,10 nights in 4* hotels and 1 in a yurt,Meals as per programme,Visits in the programme,French-speaking guide",
        "Vuelos desde Francia (ida a Urgench; regreso desde Taskent),Tren Jiva – Bujará,10 noches en hoteles de 4* y 1 en yurta,Comidas según programa,Visitas del programa,Guía francófono",
      ],
      price: 2443, nights: 10, departureFrom: "Genève", image: "uz4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -66000,
      chapters: [
        uz.chapter(["Khiva", "Khiva", "Jiva"], ["La ville-musée derrière ses remparts.", "The museum city behind its ramparts.", "La ciudad museo tras sus murallas."],
          ["uz2"],
          [
            uz.day(1, ["Envol pour l'Ouzbékistan", "Flight to Uzbekistan", "Vuelo a Uzbekistán"], ["Envol à destination d'Ourgentch. Nuit à bord.", "Flight to Urgench. Night on board.", "Vuelo con destino a Urgench. Noche a bordo."], "uz2"),
            uz.day(2, ["Ourgentch – Khiva", "Urgench – Khiva", "Urgench – Jiva"], ["Accueil et route vers Khiva, ancienne cité de la route de la Soie entourée de hautes murailles.", "Welcome and drive to Khiva, an old Silk Road city surrounded by high walls.", "Recibimiento y carretera hacia Jiva, antigua ciudad de la Ruta de la Seda rodeada de altas murallas."], "uz2"),
            uz.day(3, ["Khiva", "Khiva", "Jiva"], ["La forteresse de Kounya-Ark, le minaret bleu de Kalta Minor, la medersa Mohammed Rakhim Khan et un atelier de sculpture sur bois.", "The Kunya-Ark fortress, the blue Kalta Minor minaret, the Mohammed Rakhim Khan madrasa and a woodcarving workshop.", "La fortaleza de Kunya-Ark, el minarete azul Kalta Minor, la madrasa Mohammed Rakhim Khan y un taller de talla en madera."], "uz2"),
          ]),
        uz.chapter(["Boukhara et le désert", "Bukhara and the desert", "Bujará y el desierto"], ["La ville sainte, puis une nuit en yourte.", "The holy city, then a night in a yurt.", "La ciudad santa y una noche en yurta."],
          ["uz5", "uz4"],
          [
            uz.day(4, ["Khiva – Boukhara en train", "Khiva – Bukhara by train", "Jiva – Bujará en tren"], ["Train à travers le désert du Kyzylkoum (ou la route le long de l'Amou-Daria) jusqu'à Boukhara.", "Train across the Kyzylkum desert (or the road along the Amu Darya) to Bukhara.", "Tren por el desierto de Kyzylkum (o la carretera junto al Amu Daria) hasta Bujará."], "uz5"),
            uz.day(5, ["Boukhara", "Bukhara", "Bujará"], ["L'ensemble Poi-Kalon et son minaret, la medersa Mir-i-Arab et les coupoles marchandes des bijoutiers.", "The Poi-Kalon ensemble and its minaret, the Mir-i-Arab madrasa and the jewellers' trading domes.", "El conjunto Poi-Kalon y su minarete, la madrasa Mir-i-Arab y las cúpulas comerciales de los joyeros."], "uz4"),
            uz.day(6, ["Boukhara", "Bukhara", "Bujará"], ["La citadelle de l'Ark, la mosquée Bolo Khaouz, les mausolées d'Ismaïl Samani et de Tchachma Ayoub, puis le marché.", "The Ark citadel, the Bolo Hauz mosque, the mausoleums of Ismail Samani and Chashma Ayub, then the market.", "La ciudadela del Ark, la mezquita Bolo Hauz, los mausoleos de Ismail Samani y Chashma Ayub y el mercado."], "uz5"),
            uz.day(7, ["Guijdouvan – camp de yourtes", "Gijduvan – yurt camp", "Gijduvan – campamento de yurtas"], ["Le minaret de Vobkent, l'atelier de céramique d'un maître de Guijdouvan, puis une nuit en camp de yourtes.", "The Vobkent minaret, the ceramics workshop of a Gijduvan master, then a night in a yurt camp.", "El minarete de Vobkent, el taller de cerámica de un maestro de Gijduvan y una noche en un campamento de yurtas."], "uz4"),
          ]),
        uz.chapter(["Samarcande et Tachkent", "Samarkand and Tashkent", "Samarcanda y Taskent"], ["La capitale de Tamerlan, puis la capitale d'aujourd'hui.", "Tamerlane's capital, then today's capital.", "La capital de Tamerlán y la capital actual."],
          ["uz1", "uz3"],
          [
            uz.day(8, ["Samarcande", "Samarkand", "Samarcanda"], ["Route vers Samarcande et la place du Registan.", "Drive to Samarkand and Registan Square.", "Carretera hacia Samarcanda y la plaza del Registán."], "uz1"),
            uz.day(9, ["Samarcande", "Samarkand", "Samarcanda"], ["L'observatoire d'Ouloug Beg, le musée d'Afrossiab, la nécropole de Chakhi-Zinda et la mosquée Bibi-Khanym.", "Ulugh Beg's observatory, the Afrasiab museum, the Shah-i-Zinda necropolis and the Bibi-Khanym mosque.", "El observatorio de Ulugh Beg, el museo de Afrasiab, la necrópolis de Shah-i-Zinda y la mezquita Bibi-Khanym."], "uz1"),
            uz.day(10, ["Samarcande – Tachkent", "Samarkand – Tashkent", "Samarcanda – Taskent"], ["Le mausolée d'Ak-Saraï et l'ensemble de Khodja Akhrar, puis train pour Tachkent.", "The Ak-Saray mausoleum and the Khoja Akhrar ensemble, then the train to Tashkent.", "El mausoleo de Ak-Saray y el conjunto de Khoja Akhrar, y tren a Taskent."], "uz3"),
            uz.day(11, ["Tachkent", "Tashkent", "Taskent"], ["La place de l'Indépendance, le monument du Courage, l'Opéra et la mosquée Tilla Cheikh.", "Independence Square, the Courage monument, the Opera and the Tilla Sheikh mosque.", "La plaza de la Independencia, el monumento al Coraje, la Ópera y la mezquita Tilla Sheikh."], "uz3"),
            uz.day(12, ["Tachkent – vol retour", "Tashkent – flight home", "Taskent – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France. Arrivée le jour même ou le lendemain.", "Transfer to the airport and fly to France. Arrival the same day or the next.", "Traslado al aeropuerto y vuelo a Francia. Llegada el mismo día o al siguiente."], "uz4"),
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
