// China circuits — 8 journey-format trips for the existing "chine" destination. Extensions (Guilin,
// Zhangjiajie, Chengdu, the Yangtze, Yunnan, Hong Kong, Huangshan) are described inside each trip.
// Prices are per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-chine-circuits.ts
// Requires scripts/upload-images-chine-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "chine-joyaux-pekin-pingyao-xian-shanghai-12j": ["389178", "394118", "394103", "394102", "394098", "394100", "394104", "394099", "394101"],
  "chine-incontournables-shaolin-suzhou-13j": ["394799", "394838"],
  "chine-essentiels-pekin-xian-shanghai-prive-14j": ["379758"],
  "chine-passion-pekin-guilin-hong-kong-15j": ["393138"],
  "chine-hong-kong-guilin-pekin-15j": ["359548"],
  "chine-tresors-du-yunnan-13j": ["378958"],
  "chine-pays-des-pandas-chengdu-prive-16j": ["379618"],
  "chine-millenaire-croisiere-yangtze-17j": ["169479"],
};

// ── Shared texts ──
const T_FLY: L3 = ["Envol pour la Chine", "Flight to China", "Vuelo a China"];
const FLY: L3 = ["Envol à destination de la Chine. Dîner et nuit à bord.", "Flight to China. Dinner and night on board.", "Vuelo con destino a China. Cena y noche a bordo."];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_PEK: L3 = ["Arrivée à Pékin", "Arrival in Beijing", "Llegada a Pekín"];
const PEK: L3 = ["Accueil à l'aéroport et transfert à l'hôtel. Temps libre selon l'heure d'arrivée.", "Welcome at the airport and transfer to the hotel. Free time depending on your arrival.", "Recibimiento en el aeropuerto y traslado al hotel. Tiempo libre según la hora de llegada."];
const T_FORBIDDEN: L3 = ["Tian'anmen et la Cité interdite", "Tiananmen and the Forbidden City", "Tiananmen y la Ciudad Prohibida"];
const FORBIDDEN: L3 = [
  "La place Tian'anmen, la plus grande du monde, puis la Cité interdite, palais des deux dernières dynasties impériales.",
  "Tiananmen Square, the largest in the world, then the Forbidden City, palace of the last two imperial dynasties.",
  "La plaza de Tiananmen, la mayor del mundo, y la Ciudad Prohibida, palacio de las dos últimas dinastías imperiales.",
];
const T_WALL: L3 = ["La Grande Muraille", "The Great Wall", "La Gran Muralla"];
const WALL: L3 = [
  "Route vers la Grande Muraille à Juyongguan et temps libre sur les remparts. Déjeuner, puis visite d'un atelier d'émaux cloisonnés.",
  "Drive to the Great Wall at Juyongguan and free time on the ramparts. Lunch, then a visit to a cloisonné enamel workshop.",
  "Carretera hacia la Gran Muralla en Juyongguan y tiempo libre en las murallas. Almuerzo y visita de un taller de esmaltes cloisonné.",
];
const T_PINGYAO: L3 = ["Pingyao, la cité impériale", "Pingyao, the imperial town", "Pingyao, la ciudad imperial"];
const PINGYAO: L3 = [
  "Promenade sur les remparts de Pingyao, cité fortifiée restée intacte, la Rishengchang, première banque de Chine, et l'ancien tribunal du Yamen. Déjeuner dans une auberge.",
  "A walk on the ramparts of Pingyao, a walled town that has stayed intact, Rishengchang, China's first bank, and the old Yamen court. Lunch in an inn.",
  "Paseo por las murallas de Pingyao, ciudad amurallada que ha permanecido intacta, la Rishengchang, primer banco de China, y el antiguo tribunal del Yamen. Almuerzo en una posada.",
];
const T_XIAN: L3 = ["Xi'an et l'armée de terre cuite", "Xi'an and the Terracotta Army", "Xi'an y el ejército de terracota"];
const XIAN: L3 = [
  "Les fosses de l'armée de terre cuite, plusieurs milliers de soldats rangés en ordre de bataille pour le premier empereur Qin Shi Huang. Retour à Xi'an et ses remparts.",
  "The pits of the Terracotta Army, several thousand soldiers lined up in battle order for the first emperor, Qin Shi Huang. Back to Xi'an and its city walls.",
  "Las fosas del ejército de terracota, varios miles de soldados formados en orden de batalla para el primer emperador, Qin Shi Huang. Regreso a Xi'an y sus murallas.",
];
const T_SHA: L3 = ["Shanghai, du Bund à la vieille ville", "Shanghai, from the Bund to the old town", "Shanghái, del Bund a la ciudad vieja"];
const SHA: L3 = [
  "Le Bund et sa vue sur les tours de Pudong, la rue de Nankin, la vieille ville et ses maisons anciennes.",
  "The Bund and its view of the Pudong towers, Nanjing Road, the old town and its old houses.",
  "El Bund y su vista sobre las torres de Pudong, la calle Nankín, la ciudad vieja y sus casas antiguas.",
];
const T_ZHU: L3 = ["Le village d'eau de Zhujiajiao", "The water town of Zhujiajiao", "El pueblo de agua de Zhujiajiao"];
const ZHU: L3 = [
  "Le musée de Shanghai, puis Zhujiajiao, la « Venise de Shanghai », ses canaux, ses ponts de pierre et ses maisons Ming et Qing, en barque.",
  "The Shanghai Museum, then Zhujiajiao, the 'Venice of Shanghai', its canals, stone bridges and Ming and Qing houses, by boat.",
  "El museo de Shanghái y Zhujiajiao, la «Venecia de Shanghái», sus canales, puentes de piedra y casas Ming y Qing, en barca.",
];
const T_YANGSHUO: L3 = ["Yangshuo et la rivière Yulong", "Yangshuo and the Yulong river", "Yangshuo y el río Yulong"];
const YANGSHUO: L3 = [
  "Route vers Yangshuo et descente en radeau de bambou sur un affluent de la rivière Li, au milieu des pitons karstiques. Promenade dans la bourgade.",
  "Drive to Yangshuo and a bamboo raft ride on a tributary of the Li river, among the karst peaks. A walk around the town.",
  "Carretera hacia Yangshuo y descenso en balsa de bambú por un afluente del río Li, entre picos kársticos. Paseo por el pueblo.",
];
const T_HKG: L3 = ["Hong Kong, Aberdeen et le pic Victoria", "Hong Kong, Aberdeen and Victoria Peak", "Hong Kong, Aberdeen y el pico Victoria"];
const HKG: L3 = [
  "Le village de pêcheurs d'Aberdeen, la plage de Repulse Bay et la montée au pic Victoria pour la vue sur la baie.",
  "The fishing village of Aberdeen, Repulse Bay beach and up Victoria Peak for the view over the harbour.",
  "El pueblo de pescadores de Aberdeen, la playa de Repulse Bay y la subida al pico Victoria para la vista sobre la bahía.",
];
const T_FREE: L3 = ["Journée libre", "Free day", "Jornada libre"];
const FREE: L3 = ["Journée et repas libres pour découvrir la ville à votre rythme.", "A free day, meals on your own, to discover the city at your own pace.", "Jornada y comidas libres para descubrir la ciudad a su ritmo."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "chine",
    imagePrefix: "chine",
    season: { label: ["Avr-juin, sept-oct", "Apr-June, Sept-Oct", "Abr-jun, sept-oct"], months: "april,may,june,september,october" },
  });
  const home = (n: number, from: L3, img1: string, img2: string) => [
    day(n, [`${from[0]} – vol retour`, `${from[1]} – flight home`, `${from[2]} – vuelo de regreso`], ["Temps libre selon l'horaire du vol, puis transfert à l'aéroport et envol pour la France.", "Free time depending on your flight, then transfer to the airport and fly to France.", "Tiempo libre según el horario del vuelo, traslado al aeropuerto y vuelo a Francia."], img1),
    day(n + 1, T_HOME, HOME, img2),
  ];
  const SH: L3 = ["Shanghai", "Shanghai", "Shanghái"];

  const journeyTrips = [
    // ───────────── 1. Joyaux de Chine — 12J/9N ─────────────
    trip({
      slug: "chine-joyaux-pekin-pingyao-xian-shanghai-12j",
      name: ["Joyaux de Chine : Pékin, Pingyao, Xi'an et Shanghai", "Jewels of China: Beijing, Pingyao, Xi'an and Shanghai", "Joyas de China: Pekín, Pingyao, Xi'an y Shanghái"],
      tagline: ["Les grands sites de la Chine impériale en TGV, de la Grande Muraille aux canaux de Zhujiajiao", "The great sites of imperial China by high-speed train, from the Great Wall to the canals of Zhujiajiao", "Los grandes lugares de la China imperial en tren de alta velocidad, de la Gran Muralla a los canales de Zhujiajiao"],
      description: [
        "La Chine classique en groupe de 25 personnes au plus : Pékin (Tian'anmen, la Cité interdite, la Grande Muraille, le Palais d'été), la cité fortifiée de Pingyao, Xi'an et l'armée de terre cuite, une initiation à la calligraphie, puis Shanghai, ses anciennes concessions et le village d'eau de Zhujiajiao. Trajets en TGV. Avec une extension : Guilin (15 jours) à partir de 2 546 € par personne, Zhangjiajie (2 956 €), Chengdu et ses pandas (2 999 €), croisière sur le Yangtsé (2 999 €), minorités montagnardes (3 081 €), Zhangjiajie et Guilin (3 174 €), Hong Kong (3 209 €) ou Yunnan (3 563 €).",
        "Classic China in a group of 25 at most: Beijing (Tiananmen, the Forbidden City, the Great Wall, the Summer Palace), the walled town of Pingyao, Xi'an and the Terracotta Army, an introduction to calligraphy, then Shanghai, its old concessions and the water town of Zhujiajiao. High-speed train journeys. With an extension: Guilin (15 days) from €2,546 per person, Zhangjiajie (€2,956), Chengdu and its pandas (€2,999), a Yangtze cruise (€2,999), the mountain minorities (€3,081), Zhangjiajie and Guilin (€3,174), Hong Kong (€3,209) or Yunnan (€3,563).",
        "La China clásica en grupo de 25 personas como máximo: Pekín (Tiananmen, la Ciudad Prohibida, la Gran Muralla, el Palacio de Verano), la ciudad amurallada de Pingyao, Xi'an y el ejército de terracota, una iniciación a la caligrafía, y Shanghái, sus antiguas concesiones y el pueblo de agua de Zhujiajiao. Trayectos en tren de alta velocidad. Con una extensión: Guilin (15 días) desde 2.546 € por persona, Zhangjiajie (2.956 €), Chengdu y sus pandas (2.999 €), crucero por el Yangtsé (2.999 €), minorías de montaña (3.081 €), Zhangjiajie y Guilin (3.174 €), Hong Kong (3.209 €) o Yunnan (3.563 €).",
      ],
      includes: [
        "Vols depuis la France,TGV Pékin – Pingyao – Xi'an – Shanghai,9 nuits en hôtels 3* et 4*,Pension selon programme,Visites et excursions du programme,Guides locaux francophones",
        "Flights from France,High-speed trains Beijing – Pingyao – Xi'an – Shanghai,9 nights in 3* and 4* hotels,Meals as per programme,Visits and excursions in the programme,Local French-speaking guides",
        "Vuelos desde Francia,Trenes de alta velocidad Pekín – Pingyao – Xi'an – Shanghái,9 noches en hoteles de 3* y 4*,Comidas según programa,Visitas y excursiones del programa,Guías locales francófonos",
      ],
      price: 1872, nights: 9, departureFrom: "Bruxelles", image: "jo1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 25, order: -76000,
      chapters: [
        chapter(["Pékin", "Beijing", "Pekín"], ["La capitale impériale et la Grande Muraille.", "The imperial capital and the Great Wall.", "La capital imperial y la Gran Muralla."],
          ["jo1", "hk6", "in1", "pa3"],
          [
            day(1, T_FLY, FLY, "hk6"), day(2, T_PEK, PEK, "hk6"), day(3, T_FORBIDDEN, FORBIDDEN, "in1"), day(4, T_WALL, WALL, "jo1"),
            day(5, ["Le Palais d'été – Pingyao", "The Summer Palace – Pingyao", "El Palacio de Verano – Pingyao"], ["Le Palais d'été, ses pavillons, ses ponts et ses jardins autour du lac Kunming, puis TGV vers Pingyao.", "The Summer Palace, its pavilions, bridges and gardens around Kunming Lake, then the high-speed train to Pingyao.", "El Palacio de Verano, sus pabellones, puentes y jardines alrededor del lago Kunming, y tren de alta velocidad hacia Pingyao."], "ya7"),
          ]),
        chapter(["Pingyao et Xi'an", "Pingyao and Xi'an", "Pingyao y Xi'an"], ["La ville fortifiée, puis l'ancienne capitale des Qin.", "The walled town, then the old Qin capital.", "La ciudad amurallada y la antigua capital de los Qin."],
          ["hk5", "jo6", "es1"],
          [
            day(6, [`${T_PINGYAO[0]} – Xi'an`, `${T_PINGYAO[1]} – Xi'an`, `${T_PINGYAO[2]} – Xi'an`], [`${PINGYAO[0]} Train vers Xi'an.`, `${PINGYAO[1]} Train to Xi'an.`, `${PINGYAO[2]} Tren a Xi'an.`], "hk5"),
            day(7, T_XIAN, XIAN, "jo6"),
            day(8, ["Xi'an – Shanghai", "Xi'an – Shanghai", "Xi'an – Shanghái"], ["La petite pagode de l'Oie sauvage et une initiation à la calligraphie, puis environ 6 heures de TGV vers Shanghai.", "The Small Wild Goose Pagoda and an introduction to calligraphy, then about 6 hours by high-speed train to Shanghai.", "La pequeña pagoda de la Oca Salvaje y una iniciación a la caligrafía, y unas 6 horas de tren de alta velocidad hasta Shanghái."], "es1"),
          ]),
        chapter([SH[0], SH[1], SH[2]], ["Les concessions, le quartier des arts et les canaux.", "The concessions, the arts district and the canals.", "Las concesiones, el barrio de las artes y los canales."],
          ["jo2", "jo7", "jo8"],
          [
            day(9, ["Shanghai, le parc Fuxing et Moganshan", "Shanghai, Fuxing Park and Moganshan", "Shanghái, el parque Fuxing y Moganshan"], ["Le parc Fuxing et ses joueurs de tai-chi, les anciennes concessions et le quartier des arts de Moganshan.", "Fuxing Park and its tai chi players, the old concessions and the Moganshan arts district.", "El parque Fuxing y sus practicantes de taichí, las antiguas concesiones y el barrio de las artes de Moganshan."], "jo2"),
            day(10, T_ZHU, ZHU, "jo7"),
            ...home(11, SH, "jo8", "jo5"),
          ]),
      ],
    }),

    // ───────────── 2. Les Incontournables de la Chine — 13J/10N ─────────────
    trip({
      slug: "chine-incontournables-shaolin-suzhou-13j",
      name: ["Les incontournables de la Chine : Pékin, Xi'an, Shaolin et Suzhou", "China Highlights: Beijing, Xi'an, Shaolin and Suzhou", "Lo esencial de China: Pekín, Xi'an, Shaolin y Suzhou"],
      tagline: ["La Chine en pension complète, des hutongs aux grottes de Longmen et au berceau du kung-fu", "China on full board, from the hutongs to the Longmen caves and the birthplace of kung fu", "China en pensión completa, de los hutongs a las grutas de Longmen y la cuna del kung-fu"],
      description: [
        "Un grand circuit en groupe de 24 personnes au plus et en pension complète : la Grande Muraille et les tombeaux Ming, le canard laqué, la Cité interdite et un déjeuner chez l'habitant dans les hutongs, le Temple du Ciel, Pingyao, Xi'an et l'armée de terre cuite, les grottes bouddhiques de Longmen, le monastère de Shaolin avec une démonstration et une initiation au kung-fu, les jardins de Suzhou et Shanghai. Extension aux Monts Jaunes (Huangshan, 16 jours) à partir de 3 100 € par personne.",
        "A grand tour in a group of 24 at most and on full board: the Great Wall and the Ming tombs, Peking duck, the Forbidden City and lunch with a family in the hutongs, the Temple of Heaven, Pingyao, Xi'an and the Terracotta Army, the Buddhist caves of Longmen, Shaolin monastery with a demonstration and an introduction to kung fu, the gardens of Suzhou and Shanghai. Extension to the Yellow Mountains (Huangshan, 16 days) from €3,100 per person.",
        "Un gran circuito en grupo de 24 personas como máximo y en pensión completa: la Gran Muralla y las tumbas Ming, el pato laqueado, la Ciudad Prohibida y un almuerzo en casa local en los hutongs, el Templo del Cielo, Pingyao, Xi'an y el ejército de terracota, las grutas budistas de Longmen, el monasterio de Shaolin con una demostración y una iniciación al kung-fu, los jardines de Suzhou y Shanghái. Extensión a los Montes Amarillos (Huangshan, 16 días) desde 3.100 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Trajets en TGV,10 nuits en hôtels 3* et 4*,Pension complète,Visites et excursions du programme,Guides locaux francophones",
        "Flights from France,High-speed train journeys,10 nights in 3* and 4* hotels,Full board,Visits and excursions in the programme,Local French-speaking guides",
        "Vuelos desde Francia,Trayectos en tren de alta velocidad,10 noches en hoteles de 3* y 4*,Pensión completa,Visitas y excursiones del programa,Guías locales francófonos",
      ],
      price: 1906, nights: 10, departureFrom: "Bruxelles", image: "in3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 24, order: -75999,
      chapters: [
        chapter(["Pékin", "Beijing", "Pekín"], ["La Muraille, la Cité interdite, les hutongs et le Temple du Ciel.", "The Wall, the Forbidden City, the hutongs and the Temple of Heaven.", "La Muralla, la Ciudad Prohibida, los hutongs y el Templo del Cielo."],
          ["in3", "in1", "pa3", "pa3"],
          [
            day(1, T_FLY, FLY, "in1"), day(2, T_PEK, PEK, "hk6"),
            day(3, ["La Grande Muraille et les tombeaux Ming", "The Great Wall and the Ming tombs", "La Gran Muralla y las tumbas Ming"], ["La Grande Muraille à Juyongguan, puis les tombeaux des empereurs Ming. Le soir, dîner de canard laqué.", "The Great Wall at Juyongguan, then the tombs of the Ming emperors. In the evening, a Peking duck dinner.", "La Gran Muralla en Juyongguan y las tumbas de los emperadores Ming. Por la noche, cena de pato laqueado."], "in3"),
            day(4, ["La Cité interdite et les hutongs", "The Forbidden City and the hutongs", "La Ciudad Prohibida y los hutongs"], ["Tian'anmen et la Cité interdite, puis une balade dans les hutongs avec un déjeuner chez l'habitant et une initiation au diabolo.", "Tiananmen and the Forbidden City, then a walk in the hutongs with lunch at a family home and a go at the Chinese yo-yo.", "Tiananmen y la Ciudad Prohibida y un paseo por los hutongs con almuerzo en casa local y una iniciación al diábolo."], "in1"),
            day(5, ["Le Temple du Ciel – Pingyao", "The Temple of Heaven – Pingyao", "El Templo del Cielo – Pingyao"], ["Le Temple du Ciel, où l'empereur venait prier pour les récoltes, puis environ 4 heures de TGV vers Pingyao.", "The Temple of Heaven, where the emperor came to pray for the harvest, then about 4 hours by high-speed train to Pingyao.", "El Templo del Cielo, donde el emperador acudía a rezar por las cosechas, y unas 4 horas de tren de alta velocidad hasta Pingyao."], "pa3"),
          ]),
        chapter(["Pingyao, Xi'an, Luoyang et Shaolin", "Pingyao, Xi'an, Luoyang and Shaolin", "Pingyao, Xi'an, Luoyang y Shaolin"], ["Remparts, guerriers de terre cuite, bouddhas de falaise et kung-fu.", "Ramparts, terracotta warriors, cliff Buddhas and kung fu.", "Murallas, guerreros de terracota, budas en el acantilado y kung-fu."],
          ["in4", "jo6", "in5"],
          [
            day(6, [`${T_PINGYAO[0]} – Xi'an`, `${T_PINGYAO[1]} – Xi'an`, `${T_PINGYAO[2]} – Xi'an`], ["Les remparts de Pingyao, la banque Rishengchang et la vieille ville, puis environ 3 heures de train vers Xi'an.", "The ramparts of Pingyao, the Rishengchang bank and the old town, then about 3 hours by train to Xi'an.", "Las murallas de Pingyao, el banco Rishengchang y la ciudad vieja, y unas 3 horas de tren hasta Xi'an."], "in4"),
            day(7, T_XIAN, ["La petite pagode de l'Oie sauvage, puis l'armée de terre cuite, quelque 6 000 guerriers figés depuis plus de 2 000 ans. Dîner de raviolis chinois.", "The Small Wild Goose Pagoda, then the Terracotta Army, some 6,000 warriors frozen for more than 2,000 years. A dumpling dinner.", "La pequeña pagoda de la Oca Salvaje y el ejército de terracota, unos 6.000 guerreros inmóviles desde hace más de 2.000 años. Cena de raviolis chinos."], "jo6"),
            day(8, ["Xi'an – Luoyang et les grottes de Longmen", "Xi'an – Luoyang and the Longmen caves", "Xi'an – Luoyang y las grutas de Longmen"], ["Train vers Luoyang, puis les grottes de Longmen et leurs milliers de bouddhas sculptés dans la falaise.", "Train to Luoyang, then the Longmen caves and their thousands of Buddhas carved into the cliff.", "Tren a Luoyang y las grutas de Longmen y sus miles de budas tallados en el acantilado."], "in5"),
            day(9, ["Le monastère de Shaolin", "Shaolin monastery", "El monasterio de Shaolin"], ["Le monastère de Shaolin, berceau du kung-fu : démonstration d'arts martiaux, puis initiation dans une école locale.", "Shaolin monastery, the birthplace of kung fu: a martial arts demonstration, then a lesson at a local school.", "El monasterio de Shaolin, cuna del kung-fu: demostración de artes marciales e iniciación en una escuela local."], "in5"),
          ]),
        chapter(["Suzhou et Shanghai", "Suzhou and Shanghai", "Suzhou y Shanghái"], ["Les jardins classiques, puis la grande ville.", "The classical gardens, then the big city.", "Los jardines clásicos y la gran ciudad."],
          ["jo7", "in6", "es5"],
          [
            day(10, ["Luoyang – Suzhou", "Luoyang – Suzhou", "Luoyang – Suzhou"], ["Environ 5 h 20 de TGV vers Suzhou : le jardin du Maître des filets, les canaux et une fabrique de soie.", "About 5 h 20 by high-speed train to Suzhou: the Master of the Nets Garden, the canals and a silk factory.", "Unas 5 h 20 de tren de alta velocidad hasta Suzhou: el jardín del Maestro de las Redes, los canales y una fábrica de seda."], "jo7"),
            day(11, ["Suzhou – Shanghai", "Suzhou – Shanghai", "Suzhou – Shanghái"], ["Route vers Shanghai : le jardin Yu, la vieille ville, la rue de Nankin et le Bund.", "Drive to Shanghai: the Yu Garden, the old town, Nanjing Road and the Bund.", "Carretera hacia Shanghái: el jardín Yu, la ciudad vieja, la calle Nankín y el Bund."], "es5"),
            day(12, ["Shanghai – vol retour", "Shanghai – flight home", "Shanghái – vuelo de regreso"], ["Le musée de Shanghai, la concession française, le temple du Bouddha de jade et le parc Fuxing, puis envol pour la France.", "The Shanghai Museum, the French Concession, the Jade Buddha Temple and Fuxing Park, then fly to France.", "El museo de Shanghái, la concesión francesa, el templo del Buda de Jade y el parque Fuxing, y vuelo a Francia."], "in6"),
            day(13, T_HOME, HOME, "in3"),
          ]),
      ],
    }),

    // ───────────── 3. Essentiels de Chine — 14J/11N privatif ─────────────
    trip({
      slug: "chine-essentiels-pekin-xian-shanghai-prive-14j",
      name: ["Essentiels de Chine en privé : Pékin, Xi'an et Shanghai", "Essential China in Private: Beijing, Xi'an and Shanghai", "Lo esencial de China en privado: Pekín, Xi'an y Shanghái"],
      tagline: ["Trois grandes villes, des visites guidées et beaucoup de temps libre", "Three great cities, guided visits and plenty of free time", "Tres grandes ciudades, visitas guiadas y mucho tiempo libre"],
      description: [
        "Un voyage privé en liberté avec les visites essentielles guidées en français : à Pékin, Tian'anmen, la Cité interdite, le Temple du Ciel et la Grande Muraille de Mutianyu (télésiège et luge), à Xi'an l'armée de terre cuite, à Shanghai le Bund et la vieille ville. Trajets en TGV entre les trois villes, plusieurs journées libres.",
        "A private trip at your own pace with the essential visits guided in French: in Beijing, Tiananmen, the Forbidden City, the Temple of Heaven and the Great Wall at Mutianyu (chairlift and toboggan), in Xi'an the Terracotta Army, in Shanghai the Bund and the old town. High-speed trains between the three cities and several free days.",
        "Un viaje privado en libertad con las visitas esenciales guiadas en francés: en Pekín, Tiananmen, la Ciudad Prohibida, el Templo del Cielo y la Gran Muralla de Mutianyu (telesilla y tobogán), en Xi'an el ejército de terracota, en Shanghái el Bund y la ciudad vieja. Trenes de alta velocidad entre las tres ciudades y varias jornadas libres.",
      ],
      includes: [
        "Vols depuis la France,Voyage privé,TGV Pékin – Xi'an – Shanghai,11 nuits en hôtels 3*,Petits-déjeuners,4 journées guidées en français",
        "Flights from France,Private trip,High-speed trains Beijing – Xi'an – Shanghai,11 nights in 3* hotels,Breakfasts,4 days guided in French",
        "Vuelos desde Francia,Viaje privado,Trenes de alta velocidad Pekín – Xi'an – Shanghái,11 noches en hoteles de 3*,Desayunos,4 jornadas guiadas en francés",
      ],
      price: 2414, nights: 11, departureFrom: "Bruxelles", image: "pa4",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 8, order: -75998,
      chapters: [
        chapter(["Pékin", "Beijing", "Pekín"], ["Quatre nuits dans la capitale.", "Four nights in the capital.", "Cuatro noches en la capital."],
          ["pa4", "pa3", "hk6"],
          [
            day(1, T_FLY, FLY, "hk6"), day(2, T_PEK, PEK, "hk6"),
            day(3, ["La Cité interdite et le Temple du Ciel", "The Forbidden City and the Temple of Heaven", "La Ciudad Prohibida y el Templo del Cielo"], ["Tian'anmen, la Cité interdite, puis le Temple du Ciel et ses tuiles vernissées bleues.", "Tiananmen, the Forbidden City, then the Temple of Heaven and its blue glazed tiles.", "Tiananmen, la Ciudad Prohibida y el Templo del Cielo y sus tejas vidriadas azules."], "pa3"),
            day(4, ["La Grande Muraille de Mutianyu", "The Great Wall at Mutianyu", "La Gran Muralla de Mutianyu"], ["Montée en télésiège sur la Grande Muraille de Mutianyu et descente en luge (ou télésiège). Arrêt au stade olympique « nid d'oiseau ».", "Up to the Great Wall at Mutianyu by chairlift and down by toboggan (or chairlift). A stop at the 'Bird's Nest' Olympic stadium.", "Subida en telesilla a la Gran Muralla de Mutianyu y bajada en tobogán (o telesilla). Parada en el estadio olímpico «nido de pájaro»."], "pa4"),
            day(5, T_FREE, FREE, "pa3"),
          ]),
        chapter(["Xi'an", "Xi'an", "Xi'an"], ["L'armée de terre cuite et une journée libre.", "The Terracotta Army and a free day.", "El ejército de terracota y una jornada libre."],
          ["pa5", "pa6"],
          [
            day(6, ["Pékin – Xi'an en TGV", "Beijing – Xi'an by high-speed train", "Pekín – Xi'an en tren de alta velocidad"], ["Journée libre, puis TGV vers Xi'an.", "A free day, then the high-speed train to Xi'an.", "Jornada libre y tren de alta velocidad hacia Xi'an."], "pa6"),
            day(7, T_XIAN, XIAN, "pa5"), day(8, T_FREE, FREE, "pa6"),
          ]),
        chapter([SH[0], SH[1], SH[2]], ["Le Bund, la vieille ville et trois jours libres.", "The Bund, the old town and three free days.", "El Bund, la ciudad vieja y tres días libres."],
          ["es6", "es5", "pa2"],
          [
            day(9, ["Xi'an – Shanghai en TGV", "Xi'an – Shanghai by high-speed train", "Xi'an – Shanghái en tren de alta velocidad"], ["Environ 6 h 15 de TGV vers Shanghai.", "About 6 h 15 by high-speed train to Shanghai.", "Unas 6 h 15 de tren de alta velocidad hasta Shanghái."], "pa2"),
            day(10, T_SHA, SHA, "es5"), day(11, T_FREE, FREE, "es6"), day(12, T_FREE, FREE, "pa2"),
            day(13, ["Shanghai – vol retour", "Shanghai – flight home", "Shanghái – vuelo de regreso"], ["Temps libre, puis transfert à l'aéroport et envol pour la France.", "Free time, then transfer to the airport and fly to France.", "Tiempo libre, traslado al aeropuerto y vuelo a Francia."], "es6"),
            day(14, T_HOME, HOME, "pa4"),
          ]),
      ],
    }),

    // ───────────── 4. Passion Chine — 15J/12N ─────────────
    trip({
      slug: "chine-passion-pekin-guilin-hong-kong-15j",
      name: ["Passion Chine : de Pékin à Hong Kong par Xi'an, Shanghai et Guilin", "China Passion: from Beijing to Hong Kong via Xi'an, Shanghai and Guilin", "Pasión China: de Pekín a Hong Kong por Xi'an, Shanghái y Guilin"],
      tagline: ["Traditions et modernité, des cités impériales aux pitons karstiques de Guilin", "Tradition and modernity, from the imperial cities to the karst peaks of Guilin", "Tradición y modernidad, de las ciudades imperiales a los picos kársticos de Guilin"],
      description: [
        "La Chine du nord au sud en groupe de 25 personnes au plus : Pékin (la Grande Muraille, le Palais d'été, la Cité interdite, le Temple du Ciel et le quartier de Liulichang), Xi'an et l'armée de terre cuite, Shanghai et le village d'eau de Zhujiajiao, puis Guilin, la descente en radeau près de Yangshuo et les collines de la Trompe d'éléphant et de Fubo, avant le TGV pour Hong Kong et une dernière matinée entre Aberdeen et le pic Victoria.",
        "China from north to south in a group of 25 at most: Beijing (the Great Wall, the Summer Palace, the Forbidden City, the Temple of Heaven and the Liulichang quarter), Xi'an and the Terracotta Army, Shanghai and the water town of Zhujiajiao, then Guilin, the raft ride near Yangshuo and Elephant Trunk and Fubo hills, before the high-speed train to Hong Kong and a last morning between Aberdeen and Victoria Peak.",
        "China de norte a sur en grupo de 25 personas como máximo: Pekín (la Gran Muralla, el Palacio de Verano, la Ciudad Prohibida, el Templo del Cielo y el barrio de Liulichang), Xi'an y el ejército de terracota, Shanghái y el pueblo de agua de Zhujiajiao, y Guilin, el descenso en balsa cerca de Yangshuo y las colinas de la Trompa de Elefante y de Fubo, antes del tren de alta velocidad a Hong Kong y una última mañana entre Aberdeen y el pico Victoria.",
      ],
      includes: [
        "Vols depuis la France (retour depuis Hong Kong),Vol intérieur Shanghai – Guilin,Trajets en TGV,12 nuits en hôtels 3* et 4*,Pension selon programme,Visites du programme,Guides locaux francophones",
        "Flights from France (return from Hong Kong),Shanghai – Guilin domestic flight,High-speed train journeys,12 nights in 3* and 4* hotels,Meals as per programme,Visits in the programme,Local French-speaking guides",
        "Vuelos desde Francia (regreso desde Hong Kong),Vuelo interior Shanghái – Guilin,Trayectos en tren de alta velocidad,12 noches en hoteles de 3* y 4*,Comidas según programa,Visitas del programa,Guías locales francófonos",
      ],
      price: 2658, nights: 12, departureFrom: "Bruxelles", image: "hk2",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 25, order: -75997,
      chapters: [
        chapter(["Pékin", "Beijing", "Pekín"], ["La Muraille, les palais et le Temple du Ciel.", "The Wall, the palaces and the Temple of Heaven.", "La Muralla, los palacios y el Templo del Cielo."],
          ["es1", "ya7", "pa3"],
          [
            day(1, T_FLY, FLY, "hk6"), day(2, T_PEK, PEK, "hk6"), day(3, T_WALL, WALL, "es1"),
            day(4, ["Le Palais d'été et la Cité interdite", "The Summer Palace and the Forbidden City", "El Palacio de Verano y la Ciudad Prohibida"], ["Le Palais d'été à l'ouest de la ville, puis Tian'anmen et la Cité interdite.", "The Summer Palace west of the city, then Tiananmen and the Forbidden City.", "El Palacio de Verano al oeste de la ciudad, y Tiananmen y la Ciudad Prohibida."], "ya7"),
            day(5, ["Le Temple du Ciel – Xi'an", "The Temple of Heaven – Xi'an", "El Templo del Cielo – Xi'an"], ["Le Temple du Ciel, la vieille ville et le quartier des antiquaires de Liulichang, puis environ 4 h 45 de TGV vers Xi'an.", "The Temple of Heaven, the old town and the Liulichang antiques quarter, then about 4 h 45 by high-speed train to Xi'an.", "El Templo del Cielo, la ciudad vieja y el barrio de anticuarios de Liulichang, y unas 4 h 45 de tren de alta velocidad hasta Xi'an."], "pa3"),
          ]),
        chapter(["Xi'an et Shanghai", "Xi'an and Shanghai", "Xi'an y Shanghái"], ["Les guerriers de terre cuite, puis la grande ville et ses canaux.", "The terracotta warriors, then the big city and its canals.", "Los guerreros de terracota y la gran ciudad y sus canales."],
          ["jo6", "hk3", "hk4"],
          [
            day(6, T_XIAN, XIAN, "jo6"),
            day(7, ["Xi'an – Shanghai", "Xi'an – Shanghai", "Xi'an – Shanghái"], ["La petite pagode de l'Oie sauvage et une initiation à la calligraphie, puis TGV vers Shanghai.", "The Small Wild Goose Pagoda and an introduction to calligraphy, then the high-speed train to Shanghai.", "La pequeña pagoda de la Oca Salvaje y una iniciación a la caligrafía, y tren de alta velocidad hacia Shanghái."], "pa6"),
            day(8, ["Shanghai, les concessions", "Shanghai, the concessions", "Shanghái, las concesiones"], ["Le parc Fuxing, les anciennes concessions et le quartier des arts de Moganshan.", "Fuxing Park, the old concessions and the Moganshan arts district.", "El parque Fuxing, las antiguas concesiones y el barrio de las artes de Moganshan."], "hk3"),
            day(9, T_ZHU, ZHU, "hk4"),
          ]),
        chapter(["Guilin et Hong Kong", "Guilin and Hong Kong", "Guilin y Hong Kong"], ["Les pitons karstiques, puis la baie de Hong Kong.", "The karst peaks, then Hong Kong harbour.", "Los picos kársticos y la bahía de Hong Kong."],
          ["hk2", "hk1"],
          [
            day(10, ["Vol pour Guilin", "Flight to Guilin", "Vuelo a Guilin"], ["Vol intérieur vers Guilin et temps libre.", "Domestic flight to Guilin and free time.", "Vuelo interior a Guilin y tiempo libre."], "hk2"),
            day(11, T_YANGSHUO, YANGSHUO, "hk2"),
            day(12, ["Guilin", "Guilin", "Guilin"], ["La colline de la Trompe d'éléphant et la colline de Fubo, puis temps libre dans la rue de la culture traditionnelle.", "Elephant Trunk Hill and Fubo Hill, then free time on the traditional culture street.", "La colina de la Trompa de Elefante y la colina de Fubo, y tiempo libre en la calle de la cultura tradicional."], "hk2"),
            day(13, ["Guilin – Hong Kong en TGV", "Guilin – Hong Kong by high-speed train", "Guilin – Hong Kong en tren de alta velocidad"], ["Matinée libre, puis environ 3 heures de TGV vers Hong Kong.", "A free morning, then about 3 hours by high-speed train to Hong Kong.", "Mañana libre y unas 3 horas de tren de alta velocidad hasta Hong Kong."], "hk1"),
            day(14, T_HKG, [`${HKG[0]} Transfert à l'aéroport et envol pour la France.`, `${HKG[1]} Transfer to the airport and fly to France.`, `${HKG[2]} Traslado al aeropuerto y vuelo a Francia.`], "hk1"),
            day(15, T_HOME, HOME, "hk2"),
          ]),
      ],
    }),

    // ───────────── 5. De Hong Kong à Pékin — 15J/13N ─────────────
    trip({
      slug: "chine-hong-kong-guilin-pekin-15j",
      name: ["De Hong Kong à Pékin : au cœur de la Chine éternelle", "From Hong Kong to Beijing: the Heart of Eternal China", "De Hong Kong a Pekín: en el corazón de la China eterna"],
      tagline: ["Du sud au nord, de la baie de Hong Kong aux remparts de Pingyao et à la Grande Muraille", "From south to north, from Hong Kong harbour to the ramparts of Pingyao and the Great Wall", "De sur a norte, de la bahía de Hong Kong a las murallas de Pingyao y la Gran Muralla"],
      description: [
        "La Chine du sud au nord en groupe de 25 personnes au plus : Hong Kong (Aberdeen, Repulse Bay, le pic Victoria), Guilin et la descente en radeau près de Yangshuo, Shanghai et le village d'eau de Zhujiajiao, Xi'an et l'armée de terre cuite, la cité fortifiée de Pingyao, puis Pékin : le Palais d'été, la Grande Muraille, Tian'anmen et la Cité interdite. Trajets en TGV et un vol intérieur.",
        "China from south to north in a group of 25 at most: Hong Kong (Aberdeen, Repulse Bay, Victoria Peak), Guilin and the raft ride near Yangshuo, Shanghai and the water town of Zhujiajiao, Xi'an and the Terracotta Army, the walled town of Pingyao, then Beijing: the Summer Palace, the Great Wall, Tiananmen and the Forbidden City. High-speed trains and one domestic flight.",
        "China de sur a norte en grupo de 25 personas como máximo: Hong Kong (Aberdeen, Repulse Bay, el pico Victoria), Guilin y el descenso en balsa cerca de Yangshuo, Shanghái y el pueblo de agua de Zhujiajiao, Xi'an y el ejército de terracota, la ciudad amurallada de Pingyao, y Pekín: el Palacio de Verano, la Gran Muralla, Tiananmen y la Ciudad Prohibida. Trenes de alta velocidad y un vuelo interior.",
      ],
      includes: [
        "Vols depuis la France (aller Hong Kong; retour Pékin),Vol intérieur Guilin – Shanghai,Trajets en TGV,13 nuits en hôtels 3* et 4*,Pension selon programme,Visites du programme,Guides locaux francophones",
        "Flights from France (out to Hong Kong; back from Beijing),Guilin – Shanghai domestic flight,High-speed train journeys,13 nights in 3* and 4* hotels,Meals as per programme,Visits in the programme,Local French-speaking guides",
        "Vuelos desde Francia (ida a Hong Kong; regreso desde Pekín),Vuelo interior Guilin – Shanghái,Trayectos en tren de alta velocidad,13 noches en hoteles de 3* y 4*,Comidas según programa,Visitas del programa,Guías locales francófonos",
      ],
      price: 3111, nights: 13, departureFrom: "Barcelone", image: "hk1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 25, order: -75996,
      chapters: [
        chapter(["Hong Kong et Guilin", "Hong Kong and Guilin", "Hong Kong y Guilin"], ["La baie, puis les paysages de karst.", "The harbour, then the karst landscapes.", "La bahía y los paisajes kársticos."],
          ["hk1", "hk2"],
          [
            day(1, [T_FLY[0], T_FLY[1], T_FLY[2]], ["Envol à destination de Hong Kong. Nuit à bord.", "Flight to Hong Kong. Night on board.", "Vuelo con destino a Hong Kong. Noche a bordo."], "hk1"),
            day(2, ["Arrivée à Hong Kong", "Arrival in Hong Kong", "Llegada a Hong Kong"], ["Accueil et transfert à l'hôtel. Temps libre.", "Welcome and transfer to the hotel. Free time.", "Recibimiento y traslado al hotel. Tiempo libre."], "hk1"),
            day(3, T_HKG, HKG, "hk1"),
            day(4, ["Hong Kong – Guilin en TGV", "Hong Kong – Guilin by high-speed train", "Hong Kong – Guilin en tren de alta velocidad"], ["Matinée libre, puis environ 3 heures de TGV vers Guilin.", "A free morning, then about 3 hours by high-speed train to Guilin.", "Mañana libre y unas 3 horas de tren de alta velocidad hasta Guilin."], "hk2"),
            day(5, T_YANGSHUO, YANGSHUO, "hk2"),
          ]),
        chapter([SH[0], SH[1], SH[2]], ["Le Bund, Zhujiajiao et le quartier des arts.", "The Bund, Zhujiajiao and the arts district.", "El Bund, Zhujiajiao y el barrio de las artes."],
          ["hk3", "hk4", "jo2"],
          [
            day(6, ["Vol pour Shanghai", "Flight to Shanghai", "Vuelo a Shanghái"], ["Temps libre à Guilin, puis vol pour Shanghai.", "Free time in Guilin, then a flight to Shanghai.", "Tiempo libre en Guilin y vuelo a Shanghái."], "hk3"),
            day(7, T_SHA, SHA, "jo2"), day(8, T_ZHU, ZHU, "hk4"),
            day(9, ["Shanghai – Xi'an", "Shanghai – Xi'an", "Shanghái – Xi'an"], ["Le parc Fuxing et le quartier des arts de Moganshan, puis TGV vers Xi'an.", "Fuxing Park and the Moganshan arts district, then the high-speed train to Xi'an.", "El parque Fuxing y el barrio de las artes de Moganshan, y tren de alta velocidad hacia Xi'an."], "hk3"),
          ]),
        chapter(["Xi'an, Pingyao et Pékin", "Xi'an, Pingyao and Beijing", "Xi'an, Pingyao y Pekín"], ["La Chine impériale du nord.", "Imperial northern China.", "La China imperial del norte."],
          ["jo6", "hk5", "hk6", "pa3"],
          [
            day(10, T_XIAN, XIAN, "jo6"),
            day(11, [`Xi'an – ${T_PINGYAO[0]}`, `Xi'an – ${T_PINGYAO[1]}`, `Xi'an – ${T_PINGYAO[2]}`], [`Environ 3 heures de TGV. ${PINGYAO[0]}`, `About 3 hours by high-speed train. ${PINGYAO[1]}`, `Unas 3 horas de tren de alta velocidad. ${PINGYAO[2]}`], "hk5"),
            day(12, ["Pingyao – Pékin et le Palais d'été", "Pingyao – Beijing and the Summer Palace", "Pingyao – Pekín y el Palacio de Verano"], ["Environ 4 heures de TGV vers Pékin, puis le Palais d'été et ses jardins autour du lac Kunming.", "About 4 hours by high-speed train to Beijing, then the Summer Palace and its gardens around Kunming Lake.", "Unas 4 horas de tren de alta velocidad hasta Pekín y el Palacio de Verano y sus jardines alrededor del lago Kunming."], "pa3"),
            day(13, T_WALL, WALL, "es1"), day(14, T_FORBIDDEN, FORBIDDEN, "hk6"),
            ...home(15, ["Pékin", "Beijing", "Pekín"], "pa3", "hk1"),
          ]),
      ],
    }),

    // ───────────── 6. Trésors du Yunnan — 13J/10N ─────────────
    trip({
      slug: "chine-tresors-du-yunnan-13j",
      name: ["Trésors du Yunnan : rizières de Yuanyang, Dali, Shangri-La et Lijiang", "Treasures of Yunnan: Yuanyang Rice Terraces, Dali, Shangri-La and Lijiang", "Tesoros de Yunnan: arrozales de Yuanyang, Dali, Shangri-La y Lijiang"],
      tagline: ["La Chine des minorités, des terrasses Hani aux monastères tibétains", "The China of the minorities, from the Hani terraces to Tibetan monasteries", "La China de las minorías, de las terrazas hani a los monasterios tibetanos"],
      description: [
        "Le sud-ouest de la Chine en groupe de 25 personnes au plus : le village mongol de Xingmen et le temple de Confucius de Jianshui, les rizières en terrasses de Yuanyang façonnées par les Hani et les Yi, la forêt de pierres de Shilin, Dali et ses trois pagodes, le marché de Xizhou, Shangri-La et le monastère tibétain de Songzanlin avec la visite d'une famille tibétaine, les gorges du Saut du Tigre et le premier méandre du Yangtsé, puis la vieille ville de Lijiang. Trajets en TGV.",
        "South-west China in a group of 25 at most: the Mongol village of Xingmen and the Confucius temple of Jianshui, the Yuanyang rice terraces shaped by the Hani and Yi, the Shilin stone forest, Dali and its three pagodas, Xizhou market, Shangri-La and the Tibetan monastery of Songzanlin with a visit to a Tibetan family, Tiger Leaping Gorge and the first bend of the Yangtze, then the old town of Lijiang. High-speed train journeys.",
        "El suroeste de China en grupo de 25 personas como máximo: el pueblo mongol de Xingmen y el templo de Confucio de Jianshui, los arrozales en terrazas de Yuanyang modelados por los hani y los yi, el bosque de piedra de Shilin, Dali y sus tres pagodas, el mercado de Xizhou, Shangri-La y el monasterio tibetano de Songzanlin con la visita a una familia tibetana, la garganta del Salto del Tigre y el primer meandro del Yangtsé, y el casco antiguo de Lijiang. Trayectos en tren de alta velocidad.",
      ],
      includes: [
        "Vols depuis la France,Trajets en TGV,10 nuits en hôtels 3* et 4*,Petits-déjeuners et repas selon programme,Visites du programme,Guides locaux francophones",
        "Flights from France,High-speed train journeys,10 nights in 3* and 4* hotels,Breakfasts and meals as per programme,Visits in the programme,Local French-speaking guides",
        "Vuelos desde Francia,Trayectos en tren de alta velocidad,10 noches en hoteles de 3* y 4*,Desayunos y comidas según programa,Visitas del programa,Guías locales francófonos",
      ],
      price: 2355, nights: 10, departureFrom: "Bruxelles", image: "yu4",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 25, order: -75995,
      chapters: [
        chapter(["Kunming, Jianshui et Yuanyang", "Kunming, Jianshui and Yuanyang", "Kunming, Jianshui y Yuanyang"], ["Les rizières en terrasses et la forêt de pierres.", "The rice terraces and the stone forest.", "Los arrozales en terrazas y el bosque de piedra."],
          ["yu4", "yu1", "yu2"],
          [
            day(1, T_FLY, ["Envol à destination de Kunming. Nuit à bord.", "Flight to Kunming. Night on board.", "Vuelo con destino a Kunming. Noche a bordo."], "yu5"),
            day(2, ["Arrivée à Kunming", "Arrival in Kunming", "Llegada a Kunming"], ["Accueil et transfert à l'hôtel. Temps libre.", "Welcome and transfer to the hotel. Free time.", "Recibimiento y traslado al hotel. Tiempo libre."], "yu5"),
            day(3, ["Xingmen – Jianshui", "Xingmen – Jianshui", "Xingmen – Jianshui"], ["Arrêt à Xingmen, seul village mongol préservé du Yunnan, puis le grand temple de Confucius de Jianshui.", "A stop at Xingmen, the only preserved Mongol village in Yunnan, then the great Confucius temple of Jianshui.", "Parada en Xingmen, único pueblo mongol conservado de Yunnan, y el gran templo de Confucio de Jianshui."], "yu2"),
            day(4, ["Jianshui – Yuanyang", "Jianshui – Yuanyang", "Jianshui – Yuanyang"], ["Le jardin de la famille Zhang et le petit train de Jianshui, puis la région de Yuanyang et ses rizières en terrasses vieilles de plus de mille ans.", "The Zhang family garden and the little train of Jianshui, then the Yuanyang area and its rice terraces more than a thousand years old.", "El jardín de la familia Zhang y el pequeño tren de Jianshui, y la región de Yuanyang y sus arrozales en terrazas de más de mil años."], "yu4"),
            day(5, ["Les rizières de Yuanyang – Kunming", "The Yuanyang terraces – Kunming", "Los arrozales de Yuanyang – Kunming"], ["Randonnée à travers les terrasses des Hani et des Yi, puis retour à Kunming.", "A walk through the Hani and Yi terraces, then back to Kunming.", "Caminata entre las terrazas de los hani y los yi, y regreso a Kunming."], "yu4"),
            day(6, ["La forêt de pierres de Shilin", "The Shilin stone forest", "El bosque de piedra de Shilin"], ["La forêt de pierres de Shilin, classée à l'Unesco, labyrinthe de hautes aiguilles calcaires.", "The Shilin stone forest, a UNESCO site, a maze of tall limestone needles.", "El bosque de piedra de Shilin, inscrito en la Unesco, un laberinto de altas agujas calizas."], "yu1"),
          ]),
        chapter(["Dali, Shangri-La et Lijiang", "Dali, Shangri-La and Lijiang", "Dali, Shangri-La y Lijiang"], ["Pagodes, monastère tibétain et gorges du Yangtsé.", "Pagodas, a Tibetan monastery and the Yangtze gorges.", "Pagodas, monasterio tibetano y gargantas del Yangtsé."],
          ["yu6", "yu8", "yu10", "yu11", "yu7"],
          [
            day(7, ["Kunming – Dali en TGV", "Kunming – Dali by high-speed train", "Kunming – Dali en tren de alta velocidad"], ["Environ 2 heures de TGV vers Dali, puis le temple des Trois Pagodes près du lac Erhai.", "About 2 hours by high-speed train to Dali, then the Three Pagodas temple near Erhai Lake.", "Unas 2 horas de tren de alta velocidad hasta Dali y el templo de las Tres Pagodas cerca del lago Erhai."], "yu6"),
            day(8, ["Xizhou – Shangri-La", "Xizhou – Shangri-La", "Xizhou – Shangri-La"], ["Le marché du vieux village de Xizhou, puis environ 4 heures de TGV vers Zhongdian (Shangri-La).", "The market in the old village of Xizhou, then about 4 hours by high-speed train to Zhongdian (Shangri-La).", "El mercado del viejo pueblo de Xizhou y unas 4 horas de tren de alta velocidad hasta Zhongdian (Shangri-La)."], "yu7"),
            day(9, ["Shangri-La et le monastère de Songzanlin", "Shangri-La and Songzanlin monastery", "Shangri-La y el monasterio de Songzanlin"], ["Le monastère tibétain de Songzanlin, le plus grand du Yunnan, puis les villages tibétains et la visite d'une famille.", "The Tibetan monastery of Songzanlin, the largest in Yunnan, then the Tibetan villages and a visit to a family.", "El monasterio tibetano de Songzanlin, el mayor de Yunnan, y los pueblos tibetanos con la visita a una familia."], "yu8"),
            day(10, ["Le Saut du Tigre – Lijiang", "Tiger Leaping Gorge – Lijiang", "El Salto del Tigre – Lijiang"], ["Les gorges du Saut du Tigre, puis Shigu et le premier méandre du Yangtsé, avant Lijiang.", "Tiger Leaping Gorge, then Shigu and the first bend of the Yangtze, before Lijiang.", "La garganta del Salto del Tigre, y Shigu y el primer meandro del Yangtsé, antes de Lijiang."], "yu10"),
            day(11, ["Lijiang – Kunming", "Lijiang – Kunming", "Lijiang – Kunming"], ["Matinée libre dans la vieille ville de Lijiang, puis environ 4 heures de TGV vers Kunming.", "A free morning in Lijiang's old town, then about 4 hours by high-speed train to Kunming.", "Mañana libre en el casco antiguo de Lijiang y unas 4 horas de tren de alta velocidad hasta Kunming."], "yu7"),
            ...home(12, ["Kunming", "Kunming", "Kunming"], "yu5", "yu4"),
          ]),
      ],
    }),

    // ───────────── 7. Au pays des pandas — 16J/13N privatif ─────────────
    trip({
      slug: "chine-pays-des-pandas-chengdu-prive-16j",
      name: ["Au pays des pandas en privé : Shanghai, Pékin, Xi'an et Chengdu", "Panda Country in Private: Shanghai, Beijing, Xi'an and Chengdu", "En el país de los pandas en privado: Shanghái, Pekín, Xi'an y Chengdu"],
      tagline: ["Quatre villes en TGV, jusqu'à la réserve des pandas et au Grand Bouddha de Leshan", "Four cities by high-speed train, as far as the panda reserve and the Leshan Giant Buddha", "Cuatro ciudades en tren de alta velocidad, hasta la reserva de los pandas y el Gran Buda de Leshan"],
      description: [
        "Un voyage privé en liberté, avec six journées guidées en français : Shanghai (le Bund, la rue de Nankin, la vieille ville), Pékin (Tian'anmen, la Cité interdite, la Grande Muraille de Mutianyu), Xi'an et l'armée de terre cuite, puis Chengdu, la réserve des pandas géants et le Grand Bouddha de Leshan, avec une petite croisière sur la rivière Min. Trajets en TGV, journées libres dans chaque ville.",
        "A private trip at your own pace, with six days guided in French: Shanghai (the Bund, Nanjing Road, the old town), Beijing (Tiananmen, the Forbidden City, the Great Wall at Mutianyu), Xi'an and the Terracotta Army, then Chengdu, the giant panda reserve and the Leshan Giant Buddha, with a short cruise on the Min river. High-speed trains and free days in each city.",
        "Un viaje privado en libertad, con seis jornadas guiadas en francés: Shanghái (el Bund, la calle Nankín, la ciudad vieja), Pekín (Tiananmen, la Ciudad Prohibida, la Gran Muralla de Mutianyu), Xi'an y el ejército de terracota, y Chengdu, la reserva de los pandas gigantes y el Gran Buda de Leshan, con un pequeño crucero por el río Min. Trenes de alta velocidad y jornadas libres en cada ciudad.",
      ],
      includes: [
        "Vols depuis la France (aller Shanghai; retour Chengdu),Voyage privé,TGV Shanghai – Pékin – Xi'an – Chengdu,13 nuits en hôtels 3*,Petits-déjeuners,6 journées guidées en français",
        "Flights from France (out to Shanghai; back from Chengdu),Private trip,High-speed trains Shanghai – Beijing – Xi'an – Chengdu,13 nights in 3* hotels,Breakfasts,6 days guided in French",
        "Vuelos desde Francia (ida a Shanghái; regreso desde Chengdu),Viaje privado,Trenes de alta velocidad Shanghái – Pekín – Xi'an – Chengdu,13 noches en hoteles de 3*,Desayunos,6 jornadas guiadas en francés",
      ],
      price: 3050, nights: 13, departureFrom: "Barcelone", image: "pa1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 8, order: -75994,
      chapters: [
        chapter([SH[0], SH[1], SH[2]], ["Trois nuits pour commencer.", "Three nights to begin.", "Tres noches para empezar."],
          ["pa2", "es6"],
          [
            day(1, T_FLY, ["Envol à destination de Shanghai. Nuit à bord.", "Flight to Shanghai. Night on board.", "Vuelo con destino a Shanghái. Noche a bordo."], "pa2"),
            day(2, ["Arrivée à Shanghai", "Arrival in Shanghai", "Llegada a Shanghái"], ["Accueil et transfert à l'hôtel. Temps libre.", "Welcome and transfer to the hotel. Free time.", "Recibimiento y traslado al hotel. Tiempo libre."], "es6"),
            day(3, T_SHA, SHA, "pa2"), day(4, T_FREE, FREE, "es5"),
          ]),
        chapter(["Pékin", "Beijing", "Pekín"], ["La Cité interdite et la Grande Muraille.", "The Forbidden City and the Great Wall.", "La Ciudad Prohibida y la Gran Muralla."],
          ["pa4", "pa3"],
          [
            day(5, ["Shanghai – Pékin en TGV", "Shanghai – Beijing by high-speed train", "Shanghái – Pekín en tren de alta velocidad"], ["Journée libre, puis environ 4 h 45 de TGV vers Pékin.", "A free day, then about 4 h 45 by high-speed train to Beijing.", "Jornada libre y unas 4 h 45 de tren de alta velocidad hasta Pekín."], "pa3"),
            day(6, T_FORBIDDEN, FORBIDDEN, "hk6"),
            day(7, ["La Grande Muraille de Mutianyu", "The Great Wall at Mutianyu", "La Gran Muralla de Mutianyu"], ["Escapade à la Grande Muraille de Mutianyu, à environ 90 km de Pékin.", "An outing to the Great Wall at Mutianyu, about 90 km from Beijing.", "Escapada a la Gran Muralla de Mutianyu, a unos 90 km de Pekín."], "pa4"),
            day(8, T_FREE, FREE, "pa3"),
          ]),
        chapter(["Xi'an", "Xi'an", "Xi'an"], ["L'armée de terre cuite.", "The Terracotta Army.", "El ejército de terracota."],
          ["pa5", "pa6"],
          [
            day(9, ["Pékin – Xi'an en TGV", "Beijing – Xi'an by high-speed train", "Pekín – Xi'an en tren de alta velocidad"], ["Matinée libre, puis environ 4 h 30 de TGV vers Xi'an.", "A free morning, then about 4 h 30 by high-speed train to Xi'an.", "Mañana libre y unas 4 h 30 de tren de alta velocidad hasta Xi'an."], "pa6"),
            day(10, T_XIAN, XIAN, "pa5"),
          ]),
        chapter(["Chengdu et les pandas", "Chengdu and the pandas", "Chengdu y los pandas"], ["La réserve des pandas et le Grand Bouddha de Leshan.", "The panda reserve and the Leshan Giant Buddha.", "La reserva de los pandas y el Gran Buda de Leshan."],
          ["pa1", "pa7", "pa8"],
          [
            day(11, ["Xi'an – Chengdu en TGV", "Xi'an – Chengdu by high-speed train", "Xi'an – Chengdu en tren de alta velocidad"], ["Environ 3 h 30 de TGV vers Chengdu, capitale du Sichuan.", "About 3 h 30 by high-speed train to Chengdu, capital of Sichuan.", "Unas 3 h 30 de tren de alta velocidad hasta Chengdu, capital de Sichuan."], "pa7"),
            day(12, ["La réserve des pandas", "The panda reserve", "La reserva de los pandas"], ["La réserve des pandas géants, ses enclos dans les bambous et son musée.", "The giant panda reserve, its enclosures among the bamboo and its museum.", "La reserva de los pandas gigantes, sus recintos entre los bambúes y su museo."], "pa1"),
            day(13, ["Le Grand Bouddha de Leshan", "The Leshan Giant Buddha", "El Gran Buda de Leshan"], ["Le Grand Bouddha de Leshan, plus grande statue de bouddha sculptée au monde, et une petite croisière sur la rivière Min.", "The Leshan Giant Buddha, the largest carved Buddha in the world, and a short cruise on the Min river.", "El Gran Buda de Leshan, la mayor estatua de buda tallada del mundo, y un pequeño crucero por el río Min."], "pa8"),
            day(14, T_FREE, FREE, "pa7"),
            ...home(15, ["Chengdu", "Chengdu", "Chengdu"], "pa8", "pa1"),
          ]),
      ],
    }),

    // ───────────── 8. Chine millénaire au fil du Yangtsé — 17J/14N ─────────────
    trip({
      slug: "chine-millenaire-croisiere-yangtze-17j",
      name: ["Chine millénaire : croisière sur le Yangtsé, Shanghai, Xi'an, Pingyao et Pékin", "Ancient China: a Yangtze Cruise, Shanghai, Xi'an, Pingyao and Beijing", "China milenaria: crucero por el Yangtsé, Shanghái, Xi'an, Pingyao y Pekín"],
      tagline: ["Trois nuits sur le fleuve Bleu et ses Trois Gorges, puis la Chine impériale", "Three nights on the Blue River and its Three Gorges, then imperial China", "Tres noches en el río Azul y sus Tres Gargantas, y la China imperial"],
      description: [
        "Le grand voyage en groupe de 25 personnes au plus : départ de Chongqing pour trois nuits de croisière sur le Yangtsé (le mont Fengdu, la pagode Shibaozhai, le ruisseau de la Déesse et le barrage des Trois Gorges), puis Shanghai et le village d'eau de Zhujiajiao, Xi'an et l'armée de terre cuite, la cité fortifiée de Pingyao et Pékin : le Palais d'été, la Grande Muraille, Tian'anmen et la Cité interdite. Trajets en TGV.",
        "The great journey in a group of 25 at most: from Chongqing, three nights' cruising on the Yangtze (Mount Fengdu, the Shibaozhai pagoda, Goddess Stream and the Three Gorges Dam), then Shanghai and the water town of Zhujiajiao, Xi'an and the Terracotta Army, the walled town of Pingyao and Beijing: the Summer Palace, the Great Wall, Tiananmen and the Forbidden City. High-speed train journeys.",
        "El gran viaje en grupo de 25 personas como máximo: desde Chongqing, tres noches de crucero por el Yangtsé (el monte Fengdu, la pagoda Shibaozhai, el arroyo de la Diosa y la presa de las Tres Gargantas), y Shanghái y el pueblo de agua de Zhujiajiao, Xi'an y el ejército de terracota, la ciudad amurallada de Pingyao y Pekín: el Palacio de Verano, la Gran Muralla, Tiananmen y la Ciudad Prohibida. Trayectos en tren de alta velocidad.",
      ],
      includes: [
        "Vols depuis la France (aller Chongqing; retour Pékin),Vol Yichang – Shanghai,3 nuits de croisière sur le Yangtsé,Trajets en TGV,11 nuits en hôtels 3* et 4*,Pension selon programme,Guides locaux francophones",
        "Flights from France (out to Chongqing; back from Beijing),Yichang – Shanghai flight,3 nights' Yangtze cruise,High-speed train journeys,11 nights in 3* and 4* hotels,Meals as per programme,Local French-speaking guides",
        "Vuelos desde Francia (ida a Chongqing; regreso desde Pekín),Vuelo Yichang – Shanghái,3 noches de crucero por el Yangtsé,Trayectos en tren de alta velocidad,11 noches en hoteles de 3* y 4*,Comidas según programa,Guías locales francófonos",
      ],
      price: 3252, nights: 14, departureFrom: "Bruxelles", image: "ya2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 25, order: -75993,
      chapters: [
        chapter(["Chongqing et le Yangtsé", "Chongqing and the Yangtze", "Chongqing y el Yangtsé"], ["Trois nuits sur le fleuve.", "Three nights on the river.", "Tres noches en el río."],
          ["ya2", "ya1", "ya3"],
          [
            day(1, T_FLY, ["Envol à destination de Chongqing. Nuit à bord.", "Flight to Chongqing. Night on board.", "Vuelo con destino a Chongqing. Noche a bordo."], "ya3"),
            day(2, ["Arrivée à Chongqing", "Arrival in Chongqing", "Llegada a Chongqing"], ["Accueil et transfert à l'hôtel. Temps libre.", "Welcome and transfer to the hotel. Free time.", "Recibimiento y traslado al hotel. Tiempo libre."], "ya3"),
            day(3, ["Embarquement sur le Yangtsé", "Boarding on the Yangtze", "Embarque en el Yangtsé"], ["Matinée libre, puis embarquement en fin de journée pour la croisière sur le plus long fleuve d'Asie.", "A free morning, then boarding in the late afternoon for the cruise on Asia's longest river.", "Mañana libre y embarque al final del día para el crucero por el río más largo de Asia."], "ya2"),
            day(4, ["Croisière : Fengdu et Shibaozhai", "Cruise: Fengdu and Shibaozhai", "Crucero: Fengdu y Shibaozhai"], ["Le mont Fengdu, ses temples et ses sculptures, puis la pagode en bois de Shibaozhai, perchée sur une falaise et construite sans un clou.", "Mount Fengdu, its temples and carvings, then the wooden Shibaozhai pagoda, perched on a cliff and built without a single nail.", "El monte Fengdu, sus templos y esculturas, y la pagoda de madera de Shibaozhai, encaramada en un acantilado y construida sin un solo clavo."], "ya1"),
            day(5, ["Croisière : le ruisseau de la Déesse", "Cruise: Goddess Stream", "Crucero: el arroyo de la Diosa"], ["En petit bateau vers le ruisseau de la Déesse et les cercueils suspendus de la minorité Ba.", "By small boat to Goddess Stream and the hanging coffins of the Ba minority.", "En pequeño barco hacia el arroyo de la Diosa y los ataúdes colgantes de la minoría ba."], "ya2"),
            day(6, ["Le barrage des Trois Gorges – Yichang", "The Three Gorges Dam – Yichang", "La presa de las Tres Gargantas – Yichang"], ["Débarquement, excursion au barrage des Trois Gorges, puis Yichang.", "Disembark, an excursion to the Three Gorges Dam, then Yichang.", "Desembarque, excursión a la presa de las Tres Gargantas y Yichang."], "ya2"),
          ]),
        chapter([SH[0], SH[1], SH[2]], ["Le Bund, Zhujiajiao et le quartier des arts.", "The Bund, Zhujiajiao and the arts district.", "El Bund, Zhujiajiao y el barrio de las artes."],
          ["ya4", "hk4"],
          [
            day(7, ["Vol pour Shanghai", "Flight to Shanghai", "Vuelo a Shanghái"], ["Vol de Yichang à Shanghai et temps libre.", "Flight from Yichang to Shanghai and free time.", "Vuelo de Yichang a Shanghái y tiempo libre."], "ya4"),
            day(8, T_SHA, SHA, "ya4"), day(9, T_ZHU, ZHU, "hk4"),
            day(10, ["Shanghai – Xi'an", "Shanghai – Xi'an", "Shanghái – Xi'an"], ["Le parc Fuxing et le quartier des arts de Moganshan, puis TGV vers Xi'an.", "Fuxing Park and the Moganshan arts district, then the high-speed train to Xi'an.", "El parque Fuxing y el barrio de las artes de Moganshan, y tren de alta velocidad hacia Xi'an."], "hk3"),
          ]),
        chapter(["Xi'an, Pingyao et Pékin", "Xi'an, Pingyao and Beijing", "Xi'an, Pingyao y Pekín"], ["La Chine impériale du nord.", "Imperial northern China.", "La China imperial del norte."],
          ["jo6", "hk5", "ya7", "pa3"],
          [
            day(11, T_XIAN, XIAN, "jo6"),
            day(12, [`Xi'an – ${T_PINGYAO[0]}`, `Xi'an – ${T_PINGYAO[1]}`, `Xi'an – ${T_PINGYAO[2]}`], [`Environ 3 heures de TGV. ${PINGYAO[0]}`, `About 3 hours by high-speed train. ${PINGYAO[1]}`, `Unas 3 horas de tren de alta velocidad. ${PINGYAO[2]}`], "hk5"),
            day(13, ["Pingyao – Pékin et le Palais d'été", "Pingyao – Beijing and the Summer Palace", "Pingyao – Pekín y el Palacio de Verano"], ["Environ 4 heures de TGV vers Pékin, puis le Palais d'été.", "About 4 hours by high-speed train to Beijing, then the Summer Palace.", "Unas 4 horas de tren de alta velocidad hasta Pekín y el Palacio de Verano."], "ya7"),
            day(14, T_WALL, WALL, "es1"), day(15, T_FORBIDDEN, FORBIDDEN, "pa3"),
            ...home(16, ["Pékin", "Beijing", "Pekín"], "ya7", "ya2"),
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
