// United States, the West and the Rockies — 17 journey-format trips for the existing "etats-unis"
// destination. Near-identical supplier programmes are grouped on one page and their extensions
// (San Francisco, Universal Studios, New York, the Pacific coast) are described inside each trip.
// Prices are per-person "from" prices; several offers can be booked with or without flights.
// Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-usa-ouest-circuits.ts
// Requires scripts/upload-images-usaw-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "etats-unis-american-ouest-route-66-grand-canyon-san-francisco-10j": ["263480", "371740", "261439"],
  "etats-unis-cap-sur-l-ouest-san-francisco-los-angeles-11j": ["387899"],
  "etats-unis-legendes-de-l-ouest-lake-powell-sequoia-11j": ["402378"],
  "etats-unis-apercu-de-l-ouest-grand-canyon-las-vegas-8j": ["303799"],
  "etats-unis-incontournables-ouest-cote-pacifique-canyons-14j": ["88958"],
  "etats-unis-rocheuses-lac-tahoe-yellowstone-rushmore-16j": ["398858"],
  "etats-unis-tresors-de-l-ouest-joshua-tree-yosemite-12j": ["385621"],
  "etats-unis-grand-tour-de-l-ouest-arches-yellowstone-17j": ["383219"],
  "etats-unis-ouest-et-hawai-honolulu-14j": ["298578"],
  "etats-unis-ouest-sauvage-moab-yellowstone-badlands-14j": ["385438"],
  "etats-unis-ouest-en-famille-universal-yosemite-15j": ["383258"],
  "etats-unis-ouest-et-polynesie-tahiti-moorea-21j": ["300438"],
  "etats-unis-ouest-entre-nous-10-voyageurs-15j": ["422218"],
  "etats-unis-ouest-intimiste-zion-highway-1-15j": ["248981"],
  "etats-unis-deserts-et-canyons-intimistes-zion-14j": ["405498"],
  "etats-unis-grand-tour-des-rocheuses-intimiste-santa-fe-16j": ["227338"],
  "etats-unis-echappee-sauvage-intimiste-glacier-seattle-15j": ["405258", "405138"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const dep = (city: L3): [L3, L3] => [
  [`${city[0]} – vol retour`, `${city[1]} – flight home`, `${city[2]} – vuelo de regreso`],
  ["Temps libre selon l'horaire du vol, puis transfert à l'aéroport et envol pour la France.", "Free time depending on your flight, then transfer to the airport and fly to France.", "Tiempo libre según el horario del vuelo, traslado al aeropuerto y vuelo a Francia."],
];
const LA: L3 = ["Los Angeles", "Los Angeles", "Los Ángeles"];
const SF: L3 = ["San Francisco", "San Francisco", "San Francisco"];
const LV: L3 = ["Las Vegas", "Las Vegas", "Las Vegas"];
const DEN: L3 = ["Denver", "Denver", "Denver"];
const t = (fr: string, en = fr, es = fr): L3 => [fr, en, es];

// Shared day texts
const X_LA: L3 = ["Tour de Los Angeles : Hollywood et son Walk of Fame, les villas de Beverly Hills, Rodeo Drive, puis la plage et la jetée de Santa Monica.", "A tour of Los Angeles: Hollywood and its Walk of Fame, the villas of Beverly Hills, Rodeo Drive, then the beach and pier at Santa Monica.", "Vuelta por Los Ángeles: Hollywood y su Paseo de la Fama, las villas de Beverly Hills, Rodeo Drive, y la playa y el muelle de Santa Mónica."];
const X_DESERT: L3 = ["Tour de Los Angeles, puis traversée du désert de Mojave vers l'Arizona.", "A tour of Los Angeles, then across the Mojave Desert towards Arizona.", "Vuelta por Los Ángeles y travesía del desierto de Mojave hacia Arizona."];
const X_GC: L3 = ["Un tronçon de la mythique Route 66 et ses stations-service d'époque à Seligman, puis le Grand Canyon : depuis la rive sud, le fleuve Colorado coule 1 500 mètres plus bas.", "A stretch of the legendary Route 66 and its vintage gas stations at Seligman, then the Grand Canyon: from the South Rim, the Colorado River flows 1,500 metres below.", "Un tramo de la mítica Ruta 66 y sus gasolineras de época en Seligman, y el Gran Cañón: desde el borde sur, el río Colorado corre 1.500 metros más abajo."];
const X_MV: L3 = ["Monument Valley, en terre navajo, et ses buttes de grès rouge rendues célèbres par les westerns (tour en 4x4 avec les Navajos en option), puis le lac Powell et le barrage de Glen Canyon à Page.", "Monument Valley, on Navajo land, and its red sandstone buttes made famous by westerns (optional 4x4 tour with the Navajo), then Lake Powell and the Glen Canyon dam at Page.", "Monument Valley, en tierra navajo, y sus mesetas de arenisca roja que hicieron famosas los westerns (tour en 4x4 con los navajos opcional), y el lago Powell y la presa de Glen Canyon en Page."];
const X_BRYCE: L3 = ["Bryce Canyon et son amphithéâtre de cheminées de fée orangées, puis la route vers Las Vegas et ses casinos illuminés.", "Bryce Canyon and its amphitheatre of orange hoodoos, then the drive to Las Vegas and its glittering casinos.", "Bryce Canyon y su anfiteatro de chimeneas de hadas anaranjadas, y la carretera hacia Las Vegas y sus casinos iluminados."];
const X_BRYCE_ONLY: L3 = ["Bryce Canyon et son amphithéâtre de cheminées de fée orangées, à admirer depuis Sunrise et Sunset Point.", "Bryce Canyon and its amphitheatre of orange hoodoos, seen from Sunrise and Sunset Point.", "Bryce Canyon y su anfiteatro de chimeneas de hadas anaranjadas, vistas desde Sunrise y Sunset Point."];
const X_DV: L3 = ["La Vallée de la Mort, point le plus bas d'Amérique du Nord : Zabriskie Point, Badwater et ses étendues de sel, puis la route vers la Californie.", "Death Valley, the lowest point in North America: Zabriskie Point, Badwater and its salt flats, then the drive into California.", "El Valle de la Muerte, el punto más bajo de Norteamérica: Zabriskie Point, Badwater y sus salinas, y la carretera hacia California."];
const X_SEQ: L3 = ["Le parc de Sequoia ou de Kings Canyon et ses séquoias géants, dont le General Sherman, le plus grand arbre du monde par son volume.", "Sequoia or Kings Canyon park and its giant sequoias, including the General Sherman, the largest tree in the world by volume.", "El parque de Sequoia o de Kings Canyon y sus secuoyas gigantes, entre ellas el General Sherman, el mayor árbol del mundo por volumen."];
const X_SF: L3 = ["San Francisco : le Golden Gate, Fisherman's Wharf et ses otaries, les cable cars, Chinatown et les maisons victoriennes d'Alamo Square.", "San Francisco: the Golden Gate, Fisherman's Wharf and its sea lions, the cable cars, Chinatown and the Victorian houses of Alamo Square.", "San Francisco: el Golden Gate, Fisherman's Wharf y sus leones marinos, los cable cars, Chinatown y las casas victorianas de Alamo Square."];
const X_VOF: L3 = ["La Vallée de Feu, ses roches rouges sculptées par le vent et ses pétroglyphes, puis retour à Las Vegas pour une soirée sur le Strip.", "The Valley of Fire, its wind-carved red rocks and petroglyphs, then back to Las Vegas for an evening on the Strip.", "El Valle del Fuego, sus rocas rojas esculpidas por el viento y sus petroglifos, y regreso a Las Vegas para una velada en el Strip."];
const X_CALICO: L3 = ["Calico, ancienne ville minière du désert de Mojave devenue ville fantôme, puis route vers la Californie.", "Calico, a former mining town in the Mojave Desert turned ghost town, then the drive into California.", "Calico, antiguo pueblo minero del desierto de Mojave convertido en pueblo fantasma, y la carretera hacia California."];
const X_COAST: L3 = ["La route côtière du Pacifique : Monterey et sa baie, le village d'artistes de Carmel, la 17-Mile Drive et les falaises de Big Sur.", "The Pacific coast road: Monterey and its bay, the artists' village of Carmel, the 17-Mile Drive and the cliffs of Big Sur.", "La carretera costera del Pacífico: Monterey y su bahía, el pueblo de artistas de Carmel, la 17-Mile Drive y los acantilados de Big Sur."];
const X_SB: L3 = ["Santa Barbara, sa mission espagnole et ses maisons blanches aux toits de tuiles, et le village danois de Solvang.", "Santa Barbara, its Spanish mission and its white houses with tiled roofs, and the Danish village of Solvang.", "Santa Bárbara, su misión española y sus casas blancas de tejados de teja, y el pueblo danés de Solvang."];
const X_YOSE: L3 = ["Le parc de Yosemite : El Capitan, le Half Dome et les chutes de Yosemite, au cœur de la Sierra Nevada.", "Yosemite park: El Capitan, Half Dome and Yosemite Falls, in the heart of the Sierra Nevada.", "El parque de Yosemite: El Capitán, el Half Dome y las cataratas de Yosemite, en el corazón de la Sierra Nevada."];
const X_JT: L3 = ["Le parc de Joshua Tree, ses arbres de Josué aux silhouettes tourmentées et ses chaos de rochers, à la rencontre des déserts de Mojave et du Colorado.", "Joshua Tree park, its twisted Joshua trees and rock piles, where the Mojave and Colorado deserts meet.", "El parque de Joshua Tree, sus árboles de Josué de siluetas retorcidas y sus caos de rocas, donde se unen los desiertos de Mojave y de Colorado."];
const X_ZION: L3 = ["Le parc de Zion, ses falaises vertigineuses et la Virgin River au fond du canyon.", "Zion park, its towering cliffs and the Virgin River at the bottom of the canyon.", "El parque de Zion, sus vertiginosos acantilados y el río Virgin en el fondo del cañón."];
const X_HB: L3 = ["Horseshoe Bend, le méandre en fer à cheval du Colorado, et Antelope Canyon, ses parois ondulées éclairées par la lumière (en option).", "Horseshoe Bend, the Colorado's horseshoe meander, and Antelope Canyon, its wavy walls lit by shafts of light (optional).", "Horseshoe Bend, el meandro en herradura del Colorado, y Antelope Canyon, sus paredes onduladas iluminadas por la luz (opcional)."];
const X_ARCHES: L3 = ["Le parc des Arches et ses quelque 2 000 arches de grès, dont la célèbre Delicate Arch.", "Arches park and its 2,000 or so sandstone arches, including the famous Delicate Arch.", "El parque de Arches y sus cerca de 2.000 arcos de arenisca, entre ellos el célebre Delicate Arch."];
const X_CANYONLANDS: L3 = ["Canyonlands et le belvédère de Dead Horse Point, d'où l'on domine les gorges du Colorado.", "Canyonlands and the Dead Horse Point overlook, high above the Colorado's gorges.", "Canyonlands y el mirador de Dead Horse Point, que domina las gargantas del Colorado."];
const X_YELLOW: L3 = ["Yellowstone, premier parc national du monde : le geyser Old Faithful, les sources colorées de Grand Prismatic, le Grand Canyon de Yellowstone, les bisons et les wapitis.", "Yellowstone, the world's first national park: Old Faithful geyser, the colourful Grand Prismatic spring, the Grand Canyon of the Yellowstone, bison and elk.", "Yellowstone, primer parque nacional del mundo: el géiser Old Faithful, las fuentes de colores de Grand Prismatic, el Gran Cañón de Yellowstone, bisontes y wapitís."];
const X_TETON: L3 = ["Le parc de Grand Teton, ses sommets enneigés qui se reflètent dans les lacs, et la ville western de Jackson Hole.", "Grand Teton park, its snow-capped peaks reflected in the lakes, and the western town of Jackson Hole.", "El parque de Grand Teton, sus cumbres nevadas que se reflejan en los lagos, y la ciudad del oeste de Jackson Hole."];
const X_RUSH: L3 = ["Le mont Rushmore et les visages sculptés de quatre présidents, le mémorial de Crazy Horse et le parc de Custer, dans les Black Hills.", "Mount Rushmore and the carved faces of four presidents, the Crazy Horse memorial and Custer park, in the Black Hills.", "El monte Rushmore y los rostros esculpidos de cuatro presidentes, el memorial de Crazy Horse y el parque de Custer, en las Black Hills."];
const X_DEVILS: L3 = ["Devils Tower, colonne de roche volcanique sacrée pour les Amérindiens, et Deadwood, ville de la ruée vers l'or.", "Devils Tower, a column of volcanic rock sacred to Native Americans, and Deadwood, a gold-rush town.", "Devils Tower, columna de roca volcánica sagrada para los amerindios, y Deadwood, ciudad de la fiebre del oro."];
const X_CODY: L3 = ["Cody, la ville fondée par Buffalo Bill, et son musée de l'Ouest.", "Cody, the town founded by Buffalo Bill, and its museum of the West.", "Cody, la ciudad fundada por Buffalo Bill, y su museo del Oeste."];
const X_SLC: L3 = ["Salt Lake City, Temple Square et le Grand Lac Salé, puis Antelope Island et ses bisons.", "Salt Lake City, Temple Square and the Great Salt Lake, then Antelope Island and its bison.", "Salt Lake City, Temple Square y el Gran Lago Salado, y Antelope Island y sus bisontes."];
const X_TAHOE: L3 = ["Le lac Tahoe, ses eaux turquoise et ses forêts de pins, à cheval sur la Californie et le Nevada.", "Lake Tahoe, its turquoise waters and pine forests, straddling California and Nevada.", "El lago Tahoe, sus aguas turquesa y sus bosques de pinos, entre California y Nevada."];
const X_ROCKY: L3 = ["Le parc de Rocky Mountain et la Trail Ridge Road, plus haute route goudronnée des États-Unis, puis Denver.", "Rocky Mountain park and Trail Ridge Road, the highest paved road in the United States, then Denver.", "El parque de Rocky Mountain y la Trail Ridge Road, la carretera asfaltada más alta de Estados Unidos, y Denver."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const w = circuitBuilders({ destinationSlug: "etats-unis", imagePrefix: "usaw", season: { label: ["Avril à octobre", "April to October", "Abril a octubre"], months: "april,may,june,july,august,september,october" } });
  const r = circuitBuilders({ destinationSlug: "etats-unis", imagePrefix: "usaw", season: { label: ["Juin à septembre", "June to September", "Junio a septiembre"], months: "june,july,august,september" } });
  const INC = (n: number, extra = ""): L3 => [
    `Vols depuis la France (en option sur certaines dates),Transferts aéroport,${n} nuits en hôtels 3*,Transport en autocar,Visites et entrées des parcs du programme,Guide-accompagnateur francophone${extra}`,
    `Flights from France (optional on some dates),Airport transfers,${n} nights in 3* hotels,Transport by coach,Visits and park fees in the programme,French-speaking tour leader${extra}`,
    `Vuelos desde Francia (opcionales en algunas fechas),Traslados al aeropuerto,${n} noches en hoteles de 3*,Transporte en autocar,Visitas y entradas a los parques del programa,Guía acompañante francófono${extra}`,
  ];
  const INTI = (n: number, max = 12): L3 => [
    `Vols depuis la France,Transferts aéroport,${n} nuits en hôtels et lodges sélectionnés,Transport en van,Visites et entrées des parcs du programme,Chauffeur-guide francophone,Groupe de ${max} personnes au plus`,
    `Flights from France,Airport transfers,${n} nights in selected hotels and lodges,Transport by van,Visits and park fees in the programme,French-speaking driver-guide,Group of ${max} at most`,
    `Vuelos desde Francia,Traslados al aeropuerto,${n} noches en hoteles y lodges seleccionados,Transporte en furgoneta,Visitas y entradas a los parques del programa,Chófer-guía francófono,Grupo de ${max} personas como máximo`,
  ];

  // The classic 9-day loop shared by several offers (Los Angeles → San Francisco)
  const classicLoop = (b: typeof w, imgs: string[]) => [
    b.day(1, ...arr(LA), imgs[0]),
    b.day(2, t("Los Angeles – Kingman"), X_DESERT, imgs[0]),
    b.day(3, ["Route 66 et Grand Canyon", "Route 66 and the Grand Canyon", "Ruta 66 y Gran Cañón"], X_GC, imgs[1]),
    b.day(4, ["Monument Valley – Page", "Monument Valley – Page", "Monument Valley – Page"], X_MV, imgs[2]),
    b.day(5, ["Bryce Canyon – Las Vegas", "Bryce Canyon – Las Vegas", "Bryce Canyon – Las Vegas"], X_BRYCE, imgs[3]),
    b.day(6, ["Vallée de la Mort – Bakersfield", "Death Valley – Bakersfield", "Valle de la Muerte – Bakersfield"], X_DV, imgs[4]),
    b.day(7, ["Séquoias géants – Modesto", "Giant sequoias – Modesto", "Secuoyas gigantes – Modesto"], X_SEQ, imgs[5]),
    b.day(8, ["Modesto – San Francisco", "Modesto – San Francisco", "Modesto – San Francisco"], X_SF, imgs[6]),
  ];

  const journeyTrips = [
    // ───────────── 1. American Ouest / Découverte de l'Ouest / I Love Ouest — 10J/8N ─────────────
    w.trip({
      slug: "etats-unis-american-ouest-route-66-grand-canyon-san-francisco-10j",
      name: ["American Ouest : Route 66, Grand Canyon, Las Vegas et San Francisco", "American West: Route 66, the Grand Canyon, Las Vegas and San Francisco", "Oeste americano: Ruta 66, Gran Cañón, Las Vegas y San Francisco"],
      tagline: ["Le grand classique de l'Ouest en dix jours, de Los Angeles à San Francisco", "The great Western classic in ten days, from Los Angeles to San Francisco", "El gran clásico del Oeste en diez días, de Los Ángeles a San Francisco"],
      description: [
        "La boucle mythique de l'Ouest en groupe : Los Angeles, la Route 66, le Grand Canyon, Monument Valley, le lac Powell, Bryce Canyon, Las Vegas, la Vallée de la Mort, les séquoias géants et San Francisco. Variantes : avec la côte Pacifique (Monterey, Carmel, Santa Barbara) en 12 jours à partir de 1 932 €, avec deux nuits de plus à San Francisco à partir de 2 127 €, avec Universal Studios à partir de 2 278 €, ou prolongé à New York à partir de 2 839 € par personne.",
        "The legendary Western loop in a group: Los Angeles, Route 66, the Grand Canyon, Monument Valley, Lake Powell, Bryce Canyon, Las Vegas, Death Valley, the giant sequoias and San Francisco. Variants: with the Pacific coast (Monterey, Carmel, Santa Barbara) in 12 days from €1,932, with two more nights in San Francisco from €2,127, with Universal Studios from €2,278, or extended to New York from €2,839 per person.",
        "El mítico circuito del Oeste en grupo: Los Ángeles, la Ruta 66, el Gran Cañón, Monument Valley, el lago Powell, Bryce Canyon, Las Vegas, el Valle de la Muerte, las secuoyas gigantes y San Francisco. Variantes: con la costa del Pacífico (Monterey, Carmel, Santa Bárbara) en 12 días desde 1.932 €, con dos noches más en San Francisco desde 2.127 €, con Universal Studios desde 2.278 €, o prolongado en Nueva York desde 2.839 € por persona.",
      ],
      includes: INC(8),
      price: 1751, nights: 8, departureFrom: "Francfort", image: "il3",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups,solo", maxGuests: 53, order: -53000,
      chapters: [
        w.chapter(["Route 66 et les grands canyons", "Route 66 and the great canyons", "Ruta 66 y los grandes cañones"], ["Du Pacifique aux terres navajos.", "From the Pacific to Navajo land.", "Del Pacífico a la tierra navajo."],
          ["ao2", "ao3", "il3", "il4", "il5"],
          classicLoop(w, ["ao2", "il2", "il3", "il5", "ao6", "il8", "ao8"]).slice(0, 5)),
        w.chapter(["Las Vegas, la Californie et San Francisco", "Las Vegas, California and San Francisco", "Las Vegas, California y San Francisco"], ["Le désert, les séquoias et la baie.", "The desert, the sequoias and the bay.", "El desierto, las secuoyas y la bahía."],
          ["il6", "il7", "il8", "ao7", "ao8"],
          [
            ...classicLoop(w, ["ao2", "il2", "il3", "il5", "ao6", "il8", "ao8"]).slice(5),
            w.day(9, ...dep(SF), "ao8"), w.day(10, T_HOME, HOME, "il1"),
          ]),
      ],
    }),

    // ───────────── 2. Cap sur l'Ouest — 11J/9N ─────────────
    w.trip({
      slug: "etats-unis-cap-sur-l-ouest-san-francisco-los-angeles-11j",
      name: ["Cap sur l'Ouest : de San Francisco à Los Angeles par les parcs nationaux", "Heading West: from San Francisco to Los Angeles through the national parks", "Rumbo al Oeste: de San Francisco a Los Ángeles por los parques nacionales"],
      tagline: ["La grande boucle de l'Ouest dans l'autre sens, avec deux jours à San Francisco", "The great Western loop the other way round, with two days in San Francisco", "El gran circuito del Oeste en sentido inverso, con dos días en San Francisco"],
      description: [
        "La boucle de l'Ouest au départ de San Francisco : les séquoias géants, la Vallée de la Mort, Las Vegas et la Vallée de Feu, Bryce Canyon, Monument Valley, le Grand Canyon, la Route 66 et la ville fantôme de Calico, jusqu'à Los Angeles. Avec une journée de plus à Los Angeles à partir de 2 036 €, ou avec Universal Studios à partir de 2 479 € par personne.",
        "The Western loop starting from San Francisco: the giant sequoias, Death Valley, Las Vegas and the Valley of Fire, Bryce Canyon, Monument Valley, the Grand Canyon, Route 66 and the ghost town of Calico, all the way to Los Angeles. With an extra day in Los Angeles from €2,036, or with Universal Studios from €2,479 per person.",
        "El circuito del Oeste desde San Francisco: las secuoyas gigantes, el Valle de la Muerte, Las Vegas y el Valle del Fuego, Bryce Canyon, Monument Valley, el Gran Cañón, la Ruta 66 y el pueblo fantasma de Calico, hasta Los Ángeles. Con un día más en Los Ángeles desde 2.036 €, o con Universal Studios desde 2.479 € por persona.",
      ],
      includes: INC(9),
      price: 1947, nights: 9, departureFrom: "Paris", image: "cp4",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 53, order: -52999,
      chapters: [
        w.chapter(["San Francisco et la Californie", "San Francisco and California", "San Francisco y California"], ["La baie, les séquoias et le désert.", "The bay, the sequoias and the desert.", "La bahía, las secuoyas y el desierto."],
          ["cp6", "cp7", "il8", "il7"],
          [
            w.day(1, ...arr(SF), "cp7"),
            w.day(2, SF, X_SF, "cp6"),
            w.day(3, ["Séquoias géants – Bakersfield", "Giant sequoias – Bakersfield", "Secuoyas gigantes – Bakersfield"], X_SEQ, "il8"),
            w.day(4, ["Vallée de la Mort – Las Vegas", "Death Valley – Las Vegas", "Valle de la Muerte – Las Vegas"], X_DV, "il7"),
            w.day(5, ["La Vallée de Feu", "The Valley of Fire", "El Valle del Fuego"], X_VOF, "il6"),
          ]),
        w.chapter(["Les canyons et la Route 66", "The canyons and Route 66", "Los cañones y la Ruta 66"], ["Bryce, Monument Valley et le Grand Canyon.", "Bryce, Monument Valley and the Grand Canyon.", "Bryce, Monument Valley y el Gran Cañón."],
          ["cp3", "cp4", "cp1", "cp5", "cp2"],
          [
            w.day(6, ["Bryce Canyon – Page", "Bryce Canyon – Page", "Bryce Canyon – Page"], X_BRYCE_ONLY, "cp3"),
            w.day(7, ["Monument Valley – Flagstaff", "Monument Valley – Flagstaff", "Monument Valley – Flagstaff"], X_MV, "cp4"),
            w.day(8, ["Grand Canyon et Route 66 – Kingman", "Grand Canyon and Route 66 – Kingman", "Gran Cañón y Ruta 66 – Kingman"], X_GC, "cp1"),
            w.day(9, ["Calico – Los Angeles", "Calico – Los Angeles", "Calico – Los Ángeles"], [`${X_CALICO[0]} Arrivée à Los Angeles.`, `${X_CALICO[1]} Arrival in Los Angeles.`, `${X_CALICO[2]} Llegada a Los Ángeles.`], "cp5"),
            w.day(10, ...dep(LA), "ao2"), w.day(11, T_HOME, HOME, "cp2"),
          ]),
      ],
    }),

    // ───────────── 3. Légendes de l'Ouest — 11J/9N ─────────────
    w.trip({
      slug: "etats-unis-legendes-de-l-ouest-lake-powell-sequoia-11j",
      name: ["Légendes de l'Ouest : Grand Canyon, lac Powell, Bryce et San Francisco", "Legends of the West: the Grand Canyon, Lake Powell, Bryce and San Francisco", "Leyendas del Oeste: Gran Cañón, lago Powell, Bryce y San Francisco"],
      tagline: ["Une nuit au cœur de Bryce Canyon et deux jours à San Francisco", "A night at Bryce Canyon and two days in San Francisco", "Una noche en Bryce Canyon y dos días en San Francisco"],
      description: [
        "Un rythme plus posé : Los Angeles et Beverly Hills, le Grand Canyon, Monument Valley et le lac Powell, une nuit à Bryce Canyon pour profiter du lever du soleil, la Vallée de Feu et Las Vegas, la ville fantôme de Calico, les séquoias géants puis deux jours à San Francisco. Avec la côte Pacifique en fin de circuit à partir de 2 382 € par personne.",
        "A more relaxed pace: Los Angeles and Beverly Hills, the Grand Canyon, Monument Valley and Lake Powell, a night at Bryce Canyon to enjoy the sunrise, the Valley of Fire and Las Vegas, the ghost town of Calico, the giant sequoias, then two days in San Francisco. With the Pacific coast at the end of the tour from €2,382 per person.",
        "Un ritmo más pausado: Los Ángeles y Beverly Hills, el Gran Cañón, Monument Valley y el lago Powell, una noche en Bryce Canyon para disfrutar del amanecer, el Valle del Fuego y Las Vegas, el pueblo fantasma de Calico, las secuoyas gigantes y dos días en San Francisco. Con la costa del Pacífico al final del circuito desde 2.382 € por persona.",
      ],
      includes: INC(9),
      price: 2053, nights: 9, departureFrom: "Nice", image: "lg1",
      theme: "adventure", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 53, order: -52998,
      chapters: [
        w.chapter(["Los Angeles et l'Arizona", "Los Angeles and Arizona", "Los Ángeles y Arizona"], ["Hollywood, le Grand Canyon et Monument Valley.", "Hollywood, the Grand Canyon and Monument Valley.", "Hollywood, el Gran Cañón y Monument Valley."],
          ["lg2", "lg3", "ap7", "lg1", "ap4"],
          [
            w.day(1, ...arr(LA), "lg2"),
            w.day(2, t("Los Angeles – Laughlin", "Los Angeles – Laughlin", "Los Ángeles – Laughlin"), [`${X_LA[0]} Route vers Laughlin, au bord du Colorado.`, `${X_LA[1]} Drive to Laughlin, on the Colorado River.`, `${X_LA[2]} Carretera hacia Laughlin, a orillas del Colorado.`], "lg3"),
            w.day(3, ["Grand Canyon – Flagstaff", "Grand Canyon – Flagstaff", "Gran Cañón – Flagstaff"], X_GC, "ap7"),
            w.day(4, ["Monument Valley et lac Powell – Kanab", "Monument Valley and Lake Powell – Kanab", "Monument Valley y lago Powell – Kanab"], X_MV, "lg1"),
            w.day(5, ["Kanab – Bryce Canyon", "Kanab – Bryce Canyon", "Kanab – Bryce Canyon"], X_BRYCE_ONLY, "ap6"),
          ]),
        w.chapter(["Las Vegas et la Californie", "Las Vegas and California", "Las Vegas y California"], ["Le désert, les séquoias et San Francisco.", "The desert, the sequoias and San Francisco.", "El desierto, las secuoyas y San Francisco."],
          ["io1", "ap5", "io7", "cp6"],
          [
            w.day(6, ["Vallée de Feu – Las Vegas", "Valley of Fire – Las Vegas", "Valle del Fuego – Las Vegas"], X_VOF, "io1"),
            w.day(7, ["Calico – Bakersfield", "Calico – Bakersfield", "Calico – Bakersfield"], X_CALICO, "ap5"),
            w.day(8, ["Séquoias géants – Modesto", "Giant sequoias – Modesto", "Secuoyas gigantes – Modesto"], X_SEQ, "io7"),
            w.day(9, ["Modesto – San Francisco", "Modesto – San Francisco", "Modesto – San Francisco"], X_SF, "cp6"),
            w.day(10, ...dep(SF), "cp7"), w.day(11, T_HOME, HOME, "lg2"),
          ]),
      ],
    }),

    // ───────────── 4. Aperçu de l'Ouest — 8J/6N ─────────────
    w.trip({
      slug: "etats-unis-apercu-de-l-ouest-grand-canyon-las-vegas-8j",
      name: ["Aperçu de l'Ouest : Grand Canyon, Monument Valley, Bryce et Las Vegas", "A Taste of the West: the Grand Canyon, Monument Valley, Bryce and Las Vegas", "Pinceladas del Oeste: Gran Cañón, Monument Valley, Bryce y Las Vegas"],
      tagline: ["Les plus grands canyons en une semaine, en boucle depuis Los Angeles", "The greatest canyons in a week, on a loop from Los Angeles", "Los mayores cañones en una semana, en circuito desde Los Ángeles"],
      description: [
        "Une première découverte de l'Ouest en huit jours : Los Angeles, le Grand Canyon, Monument Valley, Page et le lac Powell, Bryce Canyon, Las Vegas, puis la ville fantôme de Calico avant le retour à Los Angeles.",
        "A first taste of the West in eight days: Los Angeles, the Grand Canyon, Monument Valley, Page and Lake Powell, Bryce Canyon, Las Vegas, then the ghost town of Calico before returning to Los Angeles.",
        "Un primer descubrimiento del Oeste en ocho días: Los Ángeles, el Gran Cañón, Monument Valley, Page y el lago Powell, Bryce Canyon, Las Vegas, y el pueblo fantasma de Calico antes de volver a Los Ángeles.",
      ],
      includes: INC(6),
      price: 2156, nights: 6, departureFrom: "Bâle", image: "ap1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 53, order: -52997,
      chapters: [
        w.chapter(["La boucle des canyons", "The canyon loop", "El circuito de los cañones"], ["Arizona, Utah et Nevada.", "Arizona, Utah and Nevada.", "Arizona, Utah y Nevada."],
          ["ap1", "ap7", "ap4", "ap6", "ap5", "ap3"],
          [
            w.day(1, ...arr(LA), "ap3"),
            w.day(2, t("Los Angeles – Laughlin", "Los Angeles – Laughlin", "Los Ángeles – Laughlin"), X_DESERT, "ap3"),
            w.day(3, ["Grand Canyon – Flagstaff", "Grand Canyon – Flagstaff", "Gran Cañón – Flagstaff"], X_GC, "ap7"),
            w.day(4, ["Monument Valley – Page", "Monument Valley – Page", "Monument Valley – Page"], X_MV, "ap1"),
            w.day(5, ["Bryce Canyon – Las Vegas", "Bryce Canyon – Las Vegas", "Bryce Canyon – Las Vegas"], X_BRYCE, "ap6"),
            w.day(6, ["Calico – Los Angeles", "Calico – Los Angeles", "Calico – Los Ángeles"], [`${X_CALICO[0]} Arrivée à Los Angeles.`, `${X_CALICO[1]} Arrival in Los Angeles.`, `${X_CALICO[2]} Llegada a Los Ángeles.`], "ap5"),
            w.day(7, ...dep(LA), "ap3"), w.day(8, T_HOME, HOME, "ap4"),
          ]),
      ],
    }),

    // ───────────── 5. Les Incontournables de l'Ouest — 14J/12N ─────────────
    w.trip({
      slug: "etats-unis-incontournables-ouest-cote-pacifique-canyons-14j",
      name: ["Les incontournables de l'Ouest : côte Pacifique, San Francisco et grands canyons", "Highlights of the West: the Pacific coast, San Francisco and the great canyons", "Lo esencial del Oeste: costa del Pacífico, San Francisco y grandes cañones"],
      tagline: ["La côte californienne puis les parcs, en deux semaines", "The Californian coast, then the parks, in two weeks", "La costa californiana y los parques, en dos semanas"],
      description: [
        "Le grand tour complet : Los Angeles, Santa Barbara et la côte de Carmel et Monterey, deux jours à San Francisco, les séquoias, la Vallée de la Mort, Las Vegas et la Vallée de Feu, Bryce Canyon, Monument Valley, le Grand Canyon et la Route 66. Avec Universal Studios à partir de 2 815 €, ou prolongé à New York à partir de 3 342 € par personne.",
        "The complete grand tour: Los Angeles, Santa Barbara and the coast of Carmel and Monterey, two days in San Francisco, the sequoias, Death Valley, Las Vegas and the Valley of Fire, Bryce Canyon, Monument Valley, the Grand Canyon and Route 66. With Universal Studios from €2,815, or extended to New York from €3,342 per person.",
        "La gran vuelta completa: Los Ángeles, Santa Bárbara y la costa de Carmel y Monterey, dos días en San Francisco, las secuoyas, el Valle de la Muerte, Las Vegas y el Valle del Fuego, Bryce Canyon, Monument Valley, el Gran Cañón y la Ruta 66. Con Universal Studios desde 2.815 €, o prolongado en Nueva York desde 3.342 € por persona.",
      ],
      includes: INC(12),
      price: 2251, nights: 12, departureFrom: "Paris", image: "io4",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups,solo", maxGuests: 53, order: -52996,
      chapters: [
        w.chapter(["La côte Pacifique", "The Pacific coast", "La costa del Pacífico"], ["De Los Angeles à San Francisco.", "From Los Angeles to San Francisco.", "De Los Ángeles a San Francisco."],
          ["io2", "io3", "io4", "io6"],
          [
            w.day(1, ...arr(LA), "io2"),
            w.day(2, LA, X_LA, "io3"),
            w.day(3, ["Santa Barbara – Buellton", "Santa Barbara – Buellton", "Santa Bárbara – Buellton"], X_SB, "io2"),
            w.day(4, ["Carmel et Monterey – San Francisco", "Carmel and Monterey – San Francisco", "Carmel y Monterey – San Francisco"], X_COAST, "io4"),
            w.day(5, SF, X_SF, "io6"),
          ]),
        w.chapter(["Les parcs de l'Ouest", "The parks of the West", "Los parques del Oeste"], ["Séquoias, déserts et canyons.", "Sequoias, deserts and canyons.", "Secuoyas, desiertos y cañones."],
          ["io7", "io8", "io1", "ap6", "ap1", "ap7"],
          [
            w.day(6, ["Séquoias géants – Bakersfield", "Giant sequoias – Bakersfield", "Secuoyas gigantes – Bakersfield"], X_SEQ, "io7"),
            w.day(7, ["Vallée de la Mort – Las Vegas", "Death Valley – Las Vegas", "Valle de la Muerte – Las Vegas"], X_DV, "io8"),
            w.day(8, ["La Vallée de Feu", "The Valley of Fire", "El Valle del Fuego"], X_VOF, "io1"),
            w.day(9, ["Bryce Canyon – Page", "Bryce Canyon – Page", "Bryce Canyon – Page"], X_BRYCE_ONLY, "ap6"),
            w.day(10, ["Monument Valley – Flagstaff", "Monument Valley – Flagstaff", "Monument Valley – Flagstaff"], X_MV, "ap1"),
            w.day(11, ["Grand Canyon et Route 66 – Kingman", "Grand Canyon and Route 66 – Kingman", "Gran Cañón y Ruta 66 – Kingman"], X_GC, "ap7"),
            w.day(12, ["Calico – Los Angeles", "Calico – Los Angeles", "Calico – Los Ángeles"], X_CALICO, "ap5"),
            w.day(13, ...dep(LA), "io2"), w.day(14, T_HOME, HOME, "io3"),
          ]),
      ],
    }),

    // ───────────── 6. Des Rocheuses au lac Tahoe — 16J/14N ─────────────
    r.trip({
      slug: "etats-unis-rocheuses-lac-tahoe-yellowstone-rushmore-16j",
      name: ["Des Rocheuses au lac Tahoe : canyons, mont Rushmore et Yellowstone", "From the Rockies to Lake Tahoe: canyons, Mount Rushmore and Yellowstone", "De las Rocosas al lago Tahoe: cañones, monte Rushmore y Yellowstone"],
      tagline: ["La grande traversée de l'Ouest, du désert de Mojave aux geysers du Wyoming", "The great crossing of the West, from the Mojave Desert to the geysers of Wyoming", "La gran travesía del Oeste, del desierto de Mojave a los géiseres de Wyoming"],
      description: [
        "Un circuit de seize jours : Las Vegas, Bryce Canyon, le lac Powell, le Grand Canyon, Monument Valley et Arches, le Colorado et Denver, le mont Rushmore et les Black Hills, Devils Tower, Cody et Yellowstone, Grand Teton, le parc des Craters of the Moon, Reno et le lac Tahoe, puis les séquoias de Calaveras et San Francisco.",
        "A sixteen-day tour: Las Vegas, Bryce Canyon, Lake Powell, the Grand Canyon, Monument Valley and Arches, Colorado and Denver, Mount Rushmore and the Black Hills, Devils Tower, Cody and Yellowstone, Grand Teton, Craters of the Moon, Reno and Lake Tahoe, then the Calaveras sequoias and San Francisco.",
        "Un circuito de dieciséis días: Las Vegas, Bryce Canyon, el lago Powell, el Gran Cañón, Monument Valley y Arches, Colorado y Denver, el monte Rushmore y las Black Hills, Devils Tower, Cody y Yellowstone, Grand Teton, Craters of the Moon, Reno y el lago Tahoe, y las secuoyas de Calaveras y San Francisco.",
      ],
      includes: INC(14),
      price: 3228, nights: 14, departureFrom: "Paris", image: "rt1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 53, order: -52995,
      chapters: [
        r.chapter(["Les canyons de l'Ouest", "The canyons of the West", "Los cañones del Oeste"], ["Las Vegas, Bryce, Grand Canyon et Arches.", "Las Vegas, Bryce, the Grand Canyon and Arches.", "Las Vegas, Bryce, el Gran Cañón y Arches."],
          ["rt6", "rt8", "gt6", "gt5", "gt7"],
          [
            r.day(1, ...arr(LA), "rt5"),
            r.day(2, t("Los Angeles – Las Vegas", "Los Angeles – Las Vegas", "Los Ángeles – Las Vegas"), ["Traversée du désert de Mojave jusqu'à Las Vegas et soirée sur le Strip.", "Across the Mojave Desert to Las Vegas and an evening on the Strip.", "Travesía del desierto de Mojave hasta Las Vegas y velada en el Strip."], "rt6"),
            r.day(3, ["Bryce Canyon – Kanab", "Bryce Canyon – Kanab", "Bryce Canyon – Kanab"], X_BRYCE_ONLY, "gt6"),
            r.day(4, ["Lac Powell et Grand Canyon", "Lake Powell and the Grand Canyon", "Lago Powell y Gran Cañón"], ["Le lac Powell, puis la rive sud du Grand Canyon et ses belvédères.", "Lake Powell, then the South Rim of the Grand Canyon and its viewpoints.", "El lago Powell y el borde sur del Gran Cañón y sus miradores."], "rt8"),
            r.day(5, ["Monument Valley et Arches – Grand Junction", "Monument Valley and Arches – Grand Junction", "Monument Valley y Arches – Grand Junction"], ["Monument Valley, en terre navajo, puis le parc des Arches et ses arches de grès.", "Monument Valley, on Navajo land, then Arches park and its sandstone arches.", "Monument Valley, en tierra navajo, y el parque de Arches y sus arcos de arenisca."], "gt7"),
          ]),
        r.chapter(["Les Rocheuses et les Black Hills", "The Rockies and the Black Hills", "Las Rocosas y las Black Hills"], ["Colorado, Wyoming et Dakota du Sud.", "Colorado, Wyoming and South Dakota.", "Colorado, Wyoming y Dakota del Sur."],
          ["rt7", "rt3", "os7"],
          [
            r.day(6, ["Glenwood Springs – Denver – Cheyenne", "Glenwood Springs – Denver – Cheyenne", "Glenwood Springs – Denver – Cheyenne"], ["La traversée des Rocheuses par Glenwood Springs et ses sources chaudes, puis Denver et Cheyenne, capitale du Wyoming.", "Crossing the Rockies via Glenwood Springs and its hot springs, then Denver and Cheyenne, capital of Wyoming.", "La travesía de las Rocosas por Glenwood Springs y sus aguas termales, y Denver y Cheyenne, capital de Wyoming."], "rt7"),
            r.day(7, ["Mont Rushmore – Deadwood", "Mount Rushmore – Deadwood", "Monte Rushmore – Deadwood"], X_RUSH, "rt3"),
            r.day(8, ["Devils Tower – Billings", "Devils Tower – Billings", "Devils Tower – Billings"], X_DEVILS, "os7"),
          ]),
        r.chapter(["Yellowstone et le Grand Bassin", "Yellowstone and the Great Basin", "Yellowstone y la Gran Cuenca"], ["Geysers, volcans et lac Tahoe.", "Geysers, volcanoes and Lake Tahoe.", "Géiseres, volcanes y lago Tahoe."],
          ["rt1", "os5", "os6", "rt2", "rt4"],
          [
            r.day(9, ["Cody – Yellowstone", "Cody – Yellowstone", "Cody – Yellowstone"], X_CODY, "os4"),
            r.day(10, ["Yellowstone – Grand Teton", "Yellowstone – Grand Teton", "Yellowstone – Grand Teton"], [`${X_YELLOW[0]} Puis Grand Teton.`, `${X_YELLOW[1]} Then Grand Teton.`, `${X_YELLOW[2]} Y Grand Teton.`], "rt1"),
            r.day(11, ["Craters of the Moon – Elko", "Craters of the Moon – Elko", "Craters of the Moon – Elko"], ["Le parc des Craters of the Moon et ses coulées de lave noire, paysage lunaire de l'Idaho, puis le Nevada.", "Craters of the Moon and its black lava flows, Idaho's lunar landscape, then Nevada.", "El parque de Craters of the Moon y sus coladas de lava negra, paisaje lunar de Idaho, y Nevada."], "os6"),
            r.day(12, ["Reno – lac Tahoe", "Reno – Lake Tahoe", "Reno – lago Tahoe"], X_TAHOE, "rt2"),
            r.day(13, ["Sacramento – Lodi", "Sacramento – Lodi", "Sacramento – Lodi"], ["Sacramento, capitale de la Californie et ville de la ruée vers l'or, puis les vignobles de Lodi.", "Sacramento, capital of California and a gold-rush town, then the vineyards of Lodi.", "Sacramento, capital de California y ciudad de la fiebre del oro, y los viñedos de Lodi."], "ts2"),
            r.day(14, ["Calaveras Big Trees – San Francisco", "Calaveras Big Trees – San Francisco", "Calaveras Big Trees – San Francisco"], ["Les séquoias géants de Calaveras, puis San Francisco.", "The giant sequoias of Calaveras, then San Francisco.", "Las secuoyas gigantes de Calaveras y San Francisco."], "rt4"),
            r.day(15, ...dep(SF), "rt4"), r.day(16, T_HOME, HOME, "rt1"),
          ]),
      ],
    }),

    // ───────────── 7. Trésors de l'Ouest — 12J/10N ─────────────
    w.trip({
      slug: "etats-unis-tresors-de-l-ouest-joshua-tree-yosemite-12j",
      name: ["Trésors de l'Ouest : Joshua Tree, Horseshoe Bend, Mammoth Lakes et Yosemite", "Treasures of the West: Joshua Tree, Horseshoe Bend, Mammoth Lakes and Yosemite", "Tesoros del Oeste: Joshua Tree, Horseshoe Bend, Mammoth Lakes y Yosemite"],
      tagline: ["Les grands parcs de l'Ouest, du désert de Mojave à la Sierra Nevada", "The great Western parks, from the Mojave Desert to the Sierra Nevada", "Los grandes parques del Oeste, del desierto de Mojave a Sierra Nevada"],
      description: [
        "Les parcs les plus spectaculaires de l'Ouest : Los Angeles, Joshua Tree, la Route 66 et le Grand Canyon, Monument Valley et Horseshoe Bend, Bryce Canyon, Las Vegas et la Vallée de Feu, la Vallée de la Mort, les lacs de Mammoth, Yosemite et San Francisco. Avec la côte Pacifique en fin de circuit à partir de 4 002 € par personne.",
        "The most spectacular parks of the West: Los Angeles, Joshua Tree, Route 66 and the Grand Canyon, Monument Valley and Horseshoe Bend, Bryce Canyon, Las Vegas and the Valley of Fire, Death Valley, Mammoth Lakes, Yosemite and San Francisco. With the Pacific coast at the end of the tour from €4,002 per person.",
        "Los parques más espectaculares del Oeste: Los Ángeles, Joshua Tree, la Ruta 66 y el Gran Cañón, Monument Valley y Horseshoe Bend, Bryce Canyon, Las Vegas y el Valle del Fuego, el Valle de la Muerte, los lagos de Mammoth, Yosemite y San Francisco. Con la costa del Pacífico al final del circuito desde 4.002 € por persona.",
      ],
      includes: INC(10),
      price: 3372, nights: 10, departureFrom: "Paris", image: "to3",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 53, order: -52994,
      chapters: [
        w.chapter(["Du désert au Grand Canyon", "From the desert to the Grand Canyon", "Del desierto al Gran Cañón"], ["Los Angeles, Joshua Tree et l'Arizona.", "Los Angeles, Joshua Tree and Arizona.", "Los Ángeles, Joshua Tree y Arizona."],
          ["to1", "to2", "to3", "to4", "to5"],
          [
            w.day(1, ...arr(LA), "to2"),
            w.day(2, LA, X_LA, "to1"),
            w.day(3, ["Joshua Tree – Kingman", "Joshua Tree – Kingman", "Joshua Tree – Kingman"], X_JT, "to3"),
            w.day(4, ["Route 66 et Grand Canyon – Tuba City", "Route 66 and the Grand Canyon – Tuba City", "Ruta 66 y Gran Cañón – Tuba City"], X_GC, "to4"),
            w.day(5, ["Monument Valley et Horseshoe Bend – Page", "Monument Valley and Horseshoe Bend – Page", "Monument Valley y Horseshoe Bend – Page"], X_HB, "to5"),
          ]),
        w.chapter(["Las Vegas, la Sierra Nevada et San Francisco", "Las Vegas, the Sierra Nevada and San Francisco", "Las Vegas, Sierra Nevada y San Francisco"], ["Bryce, la Vallée de la Mort et Yosemite.", "Bryce, Death Valley and Yosemite.", "Bryce, el Valle de la Muerte y Yosemite."],
          ["to6", "to8", "to7", "of6", "cp7"],
          [
            w.day(6, ["Bryce Canyon – Las Vegas", "Bryce Canyon – Las Vegas", "Bryce Canyon – Las Vegas"], X_BRYCE, "to6"),
            w.day(7, ["La Vallée de Feu", "The Valley of Fire", "El Valle del Fuego"], X_VOF, "to8"),
            w.day(8, ["Vallée de la Mort – Mammoth Lakes", "Death Valley – Mammoth Lakes", "Valle de la Muerte – Mammoth Lakes"], ["La Vallée de la Mort et ses étendues de sel, puis la Sierra Nevada et la station de montagne de Mammoth Lakes.", "Death Valley and its salt flats, then the Sierra Nevada and the mountain resort of Mammoth Lakes.", "El Valle de la Muerte y sus salinas, y Sierra Nevada y la estación de montaña de Mammoth Lakes."], "to7"),
            w.day(9, ["Yosemite – Modesto", "Yosemite – Modesto", "Yosemite – Modesto"], X_YOSE, "of6"),
            w.day(10, ["Modesto – San Francisco", "Modesto – San Francisco", "Modesto – San Francisco"], X_SF, "cp7"),
            w.day(11, ...dep(SF), "cp6"), w.day(12, T_HOME, HOME, "to1"),
          ]),
      ],
    }),

    // ───────────── 8. Grand Tour de l'Ouest — 17J/15N ─────────────
    r.trip({
      slug: "etats-unis-grand-tour-de-l-ouest-arches-yellowstone-17j",
      name: ["Grand Tour de l'Ouest : Arches, mont Rushmore, Yellowstone et la Californie", "Grand Tour of the West: Arches, Mount Rushmore, Yellowstone and California", "Gran Tour del Oeste: Arches, monte Rushmore, Yellowstone y California"],
      tagline: ["Dix-sept jours pour tout voir, des canyons de l'Utah aux geysers du Wyoming", "Seventeen days to see it all, from Utah's canyons to Wyoming's geysers", "Diecisiete días para verlo todo, de los cañones de Utah a los géiseres de Wyoming"],
      description: [
        "Le plus complet des circuits de l'Ouest : la Route 66 et le Grand Canyon, Page et Monument Valley, Arches et le Colorado National Monument, Cheyenne, les Black Hills et Sturgis, Yellowstone et Grand Teton, Salt Lake City, Bryce Canyon, la Vallée de Feu et Las Vegas, la Vallée de la Mort, puis deux jours à San Francisco. Avec la côte Pacifique en fin de circuit à partir de 3 692 € par personne.",
        "The most complete Western tour: Route 66 and the Grand Canyon, Page and Monument Valley, Arches and Colorado National Monument, Cheyenne, the Black Hills and Sturgis, Yellowstone and Grand Teton, Salt Lake City, Bryce Canyon, the Valley of Fire and Las Vegas, Death Valley, then two days in San Francisco. With the Pacific coast at the end of the tour from €3,692 per person.",
        "El más completo de los circuitos del Oeste: la Ruta 66 y el Gran Cañón, Page y Monument Valley, Arches y el Colorado National Monument, Cheyenne, las Black Hills y Sturgis, Yellowstone y Grand Teton, Salt Lake City, Bryce Canyon, el Valle del Fuego y Las Vegas, el Valle de la Muerte, y dos días en San Francisco. Con la costa del Pacífico al final del circuito desde 3.692 € por persona.",
      ],
      includes: INC(15),
      price: 3398, nights: 15, departureFrom: "Paris", image: "gt7",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 53, order: -52993,
      chapters: [
        r.chapter(["Arizona et Utah", "Arizona and Utah", "Arizona y Utah"], ["Route 66, Grand Canyon, Monument Valley et Arches.", "Route 66, the Grand Canyon, Monument Valley and Arches.", "Ruta 66, Gran Cañón, Monument Valley y Arches."],
          ["gt1", "gt4", "gt5", "gt7"],
          [
            r.day(1, ...arr(LA), "gt1"),
            r.day(2, t("Los Angeles – Kingman"), X_DESERT, "gt2"),
            r.day(3, ["Route 66 et Grand Canyon", "Route 66 and the Grand Canyon", "Ruta 66 y Gran Cañón"], X_GC, "gt4"),
            r.day(4, ["Page et Monument Valley – Blanding", "Page and Monument Valley – Blanding", "Page y Monument Valley – Blanding"], X_MV, "gt5"),
            r.day(5, ["Arches – Grand Junction", "Arches – Grand Junction", "Arches – Grand Junction"], X_ARCHES, "gt7"),
          ]),
        r.chapter(["Les Rocheuses et Yellowstone", "The Rockies and Yellowstone", "Las Rocosas y Yellowstone"], ["Colorado, Dakota, Montana et Wyoming.", "Colorado, Dakota, Montana and Wyoming.", "Colorado, Dakota, Montana y Wyoming."],
          ["gt8", "rt3", "rt1", "os6"],
          [
            r.day(6, ["Colorado National Monument – Cheyenne", "Colorado National Monument – Cheyenne", "Colorado National Monument – Cheyenne"], ["Les falaises et les monolithes du Colorado National Monument, puis la traversée des Rocheuses jusqu'à Cheyenne.", "The cliffs and monoliths of Colorado National Monument, then across the Rockies to Cheyenne.", "Los acantilados y monolitos del Colorado National Monument, y la travesía de las Rocosas hasta Cheyenne."], "gt8"),
            r.day(7, ["Cheyenne – Sturgis", "Cheyenne – Sturgis", "Cheyenne – Sturgis"], X_RUSH, "rt3"),
            r.day(8, ["Sturgis – Billings", "Sturgis – Billings", "Sturgis – Billings"], X_DEVILS, "os7"),
            r.day(9, ["Yellowstone – Jackson", "Yellowstone – Jackson", "Yellowstone – Jackson"], X_YELLOW, "rt1"),
            r.day(10, ["Grand Teton – Salt Lake City", "Grand Teton – Salt Lake City", "Grand Teton – Salt Lake City"], X_TETON, "os6"),
          ]),
        r.chapter(["Retour vers la Californie", "Back to California", "Regreso a California"], ["Bryce, Las Vegas et San Francisco.", "Bryce, Las Vegas and San Francisco.", "Bryce, Las Vegas y San Francisco."],
          ["gt6", "gt3", "to7", "cp7"],
          [
            r.day(11, ["Salt Lake City – Bryce Canyon", "Salt Lake City – Bryce Canyon", "Salt Lake City – Bryce Canyon"], X_BRYCE_ONLY, "gt6"),
            r.day(12, ["Vallée de Feu – Las Vegas", "Valley of Fire – Las Vegas", "Valle del Fuego – Las Vegas"], X_VOF, "gt3"),
            r.day(13, ["Vallée de la Mort – Bakersfield", "Death Valley – Bakersfield", "Valle de la Muerte – Bakersfield"], X_DV, "to7"),
            r.day(14, ["Bakersfield – San Francisco", "Bakersfield – San Francisco", "Bakersfield – San Francisco"], ["Remontée de la vallée centrale de Californie jusqu'à San Francisco.", "Up California's Central Valley to San Francisco.", "Subida por el valle central de California hasta San Francisco."], "cp6"),
            r.day(15, SF, X_SF, "cp7"),
            r.day(16, ...dep(SF), "cp6"), r.day(17, T_HOME, HOME, "gt1"),
          ]),
      ],
    }),

    // ───────────── 9. Ouest & Hawaï — 14J/12N ─────────────
    w.trip({
      slug: "etats-unis-ouest-et-hawai-honolulu-14j",
      name: ["L'Ouest et Hawaï : les grands parcs puis Honolulu", "The West and Hawaii: the great parks, then Honolulu", "El Oeste y Hawái: los grandes parques y Honolulu"],
      tagline: ["Le circuit classique de l'Ouest, suivi de quatre nuits sur les plages d'Oahu", "The classic Western tour, followed by four nights on the beaches of Oahu", "El circuito clásico del Oeste, seguido de cuatro noches en las playas de Oahu"],
      description: [
        "La boucle de l'Ouest en groupe, de Los Angeles à San Francisco par la Route 66, le Grand Canyon, Monument Valley, Bryce Canyon, Las Vegas, la Vallée de la Mort et les séquoias, puis un vol vers Honolulu pour quatre nuits libres à Oahu : Waikiki, Diamond Head, Pearl Harbor et la côte nord.",
        "The Western loop in a group, from Los Angeles to San Francisco via Route 66, the Grand Canyon, Monument Valley, Bryce Canyon, Las Vegas, Death Valley and the sequoias, then a flight to Honolulu for four free nights on Oahu: Waikiki, Diamond Head, Pearl Harbor and the North Shore.",
        "El circuito del Oeste en grupo, de Los Ángeles a San Francisco por la Ruta 66, el Gran Cañón, Monument Valley, Bryce Canyon, Las Vegas, el Valle de la Muerte y las secuoyas, y un vuelo a Honolulu para cuatro noches libres en Oahu: Waikiki, Diamond Head, Pearl Harbor y la costa norte.",
      ],
      includes: INC(12, ",Vol San Francisco – Honolulu,4 nuits à Honolulu"),
      price: 3432, nights: 12, departureFrom: "Genève", image: "hw5",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family", maxGuests: 53, order: -52992,
      chapters: [
        w.chapter(["Le circuit de l'Ouest", "The Western tour", "El circuito del Oeste"], ["De Los Angeles à San Francisco.", "From Los Angeles to San Francisco.", "De Los Ángeles a San Francisco."],
          ["hw3", "hw5", "hw7", "hw2", "hw4", "hw8"],
          classicLoop(w, ["hw3", "hw5", "il5", "hw7", "hw2", "hw4", "hw8"])),
        w.chapter(["Hawaï", "Hawaii", "Hawái"], ["Les plages d'Oahu.", "The beaches of Oahu.", "Las playas de Oahu."],
          ["po2"],
          [
            w.day(9, ["San Francisco – Honolulu", "San Francisco – Honolulu", "San Francisco – Honolulu"], ["Vol vers Honolulu, sur l'île d'Oahu, accueil avec un collier de fleurs et transfert à l'hôtel.", "Flight to Honolulu, on the island of Oahu, welcome with a flower lei and transfer to the hotel.", "Vuelo a Honolulu, en la isla de Oahu, recibimiento con un collar de flores y traslado al hotel."], "po2"),
            w.day(10, ["Honolulu et Oahu", "Honolulu and Oahu", "Honolulu y Oahu"], ["Trois jours libres : la plage de Waikiki, le cratère de Diamond Head, le mémorial de Pearl Harbor ou les vagues de la côte nord.", "Three free days: Waikiki beach, Diamond Head crater, the Pearl Harbor memorial or the waves of the North Shore.", "Tres días libres: la playa de Waikiki, el cráter de Diamond Head, el memorial de Pearl Harbor o las olas de la costa norte."], "po2"),
            w.day(13, ["Honolulu – vol retour", "Honolulu – flight home", "Honolulu – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "po2"),
            w.day(14, T_HOME, HOME, "hw3"),
          ]),
      ],
    }),

    // ───────────── 10. L'Ouest Sauvage — 14J/12N ─────────────
    r.trip({
      slug: "etats-unis-ouest-sauvage-moab-yellowstone-badlands-14j",
      name: ["L'Ouest sauvage : Moab, Yellowstone, les Badlands et les Rocheuses", "The Wild West: Moab, Yellowstone, the Badlands and the Rockies", "El Oeste salvaje: Moab, Yellowstone, los Badlands y las Rocosas"],
      tagline: ["Une boucle au départ de Denver, entre canyons de l'Utah et grandes plaines", "A loop from Denver, between Utah's canyons and the Great Plains", "Un circuito desde Denver, entre los cañones de Utah y las grandes llanuras"],
      description: [
        "Une boucle au départ de Denver : la région de Moab avec Arches et Canyonlands, Salt Lake City et Antelope Island, Grand Teton et Yellowstone, Cody et Billings, Deadwood, les Badlands, le mont Rushmore, puis le parc de Rocky Mountain avant le retour à Denver.",
        "A loop from Denver: the Moab area with Arches and Canyonlands, Salt Lake City and Antelope Island, Grand Teton and Yellowstone, Cody and Billings, Deadwood, the Badlands, Mount Rushmore, then Rocky Mountain park before returning to Denver.",
        "Un circuito desde Denver: la región de Moab con Arches y Canyonlands, Salt Lake City y Antelope Island, Grand Teton y Yellowstone, Cody y Billings, Deadwood, los Badlands, el monte Rushmore, y el parque de Rocky Mountain antes de volver a Denver.",
      ],
      includes: INC(12),
      price: 3596, nights: 12, departureFrom: "Toulouse", image: "os3",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 53, order: -52991,
      chapters: [
        r.chapter(["Les canyons de l'Utah", "Utah's canyons", "Los cañones de Utah"], ["Moab, Arches et Canyonlands.", "Moab, Arches and Canyonlands.", "Moab, Arches y Canyonlands."],
          ["os3", "os2", "gt8"],
          [
            r.day(1, ...arr(DEN), "gt8"),
            r.day(2, ["Denver – Grand Junction", "Denver – Grand Junction", "Denver – Grand Junction"], ["La traversée des Rocheuses par les cols et les vallées du Colorado.", "Across the Rockies by Colorado's passes and valleys.", "La travesía de las Rocosas por los puertos y valles de Colorado."], "os8"),
            r.day(3, ["Grand Junction – Moab", "Grand Junction – Moab", "Grand Junction – Moab"], X_ARCHES, "os3"),
            r.day(4, ["Région de Moab", "The Moab area", "Región de Moab"], X_CANYONLANDS, "os2"),
            r.day(5, ["Moab – Salt Lake City", "Moab – Salt Lake City", "Moab – Salt Lake City"], ["Route vers Salt Lake City, capitale de l'Utah, et Temple Square.", "Drive to Salt Lake City, capital of Utah, and Temple Square.", "Carretera hacia Salt Lake City, capital de Utah, y Temple Square."], "ri5"),
          ]),
        r.chapter(["Yellowstone et Grand Teton", "Yellowstone and Grand Teton", "Yellowstone y Grand Teton"], ["Geysers, bisons et sommets.", "Geysers, bison and peaks.", "Géiseres, bisontes y cumbres."],
          ["os1", "os5", "os4", "os6"],
          [
            r.day(6, ["Antelope Island – Rexburg", "Antelope Island – Rexburg", "Antelope Island – Rexburg"], X_SLC, "os4"),
            r.day(7, ["Grand Teton – Yellowstone", "Grand Teton – Yellowstone", "Grand Teton – Yellowstone"], X_TETON, "os6"),
            r.day(8, ["Yellowstone – Cody – Billings", "Yellowstone – Cody – Billings", "Yellowstone – Cody – Billings"], [`${X_YELLOW[0]} ${X_CODY[0]}`, `${X_YELLOW[1]} ${X_CODY[1]}`, `${X_YELLOW[2]} ${X_CODY[2]}`], "os1"),
          ]),
        r.chapter(["Les Black Hills et les Rocheuses", "The Black Hills and the Rockies", "Las Black Hills y las Rocosas"], ["Deadwood, Badlands, Rushmore et Rocky Mountain.", "Deadwood, the Badlands, Rushmore and Rocky Mountain.", "Deadwood, Badlands, Rushmore y Rocky Mountain."],
          ["os7", "os8", "rt3"],
          [
            r.day(9, ["Billings – Deadwood", "Billings – Deadwood", "Billings – Deadwood"], ["Le champ de bataille de Little Bighorn, puis Deadwood, ville de la ruée vers l'or.", "The Little Bighorn battlefield, then Deadwood, a gold-rush town.", "El campo de batalla de Little Bighorn y Deadwood, ciudad de la fiebre del oro."], "os5"),
            r.day(10, ["Badlands – Rapid City", "Badlands – Rapid City", "Badlands – Rapid City"], ["Le parc des Badlands, ses collines érodées aux strates colorées et ses prairies.", "Badlands park, its eroded hills with colourful layers and its prairies.", "El parque de los Badlands, sus colinas erosionadas de estratos coloridos y sus praderas."], "os2"),
            r.day(11, ["Mont Rushmore – Cheyenne", "Mount Rushmore – Cheyenne", "Monte Rushmore – Cheyenne"], X_RUSH, "os7"),
            r.day(12, ["Rocky Mountain – Denver", "Rocky Mountain – Denver", "Rocky Mountain – Denver"], X_ROCKY, "os8"),
            r.day(13, ...dep(DEN), "gt8"), r.day(14, T_HOME, HOME, "os3"),
          ]),
      ],
    }),

    // ───────────── 11. L'Ouest en Famille — 15J/13N ─────────────
    w.trip({
      slug: "etats-unis-ouest-en-famille-universal-yosemite-15j",
      name: ["L'Ouest en famille : Universal Studios, canyons, Las Vegas et Yosemite", "The West as a family: Universal Studios, canyons, Las Vegas and Yosemite", "El Oeste en familia: Universal Studios, cañones, Las Vegas y Yosemite"],
      tagline: ["Un circuit pensé pour les enfants, à un rythme plus doux", "A tour designed for children, at a gentler pace", "Un circuito pensado para los niños, a un ritmo más suave"],
      description: [
        "Le grand Ouest à hauteur d'enfant : une journée à Universal Studios, Los Angeles et l'observatoire Griffith, le Grand Canyon, le volcan Sunset Crater, Monument Valley, une nuit à Bryce Canyon, la Vallée de Feu, deux nuits à Las Vegas, Calico, Yosemite et deux jours à San Francisco. Des étapes plus courtes et des activités adaptées aux familles.",
        "The great West at a child's height: a day at Universal Studios, Los Angeles and the Griffith Observatory, the Grand Canyon, Sunset Crater volcano, Monument Valley, a night at Bryce Canyon, the Valley of Fire, two nights in Las Vegas, Calico, Yosemite and two days in San Francisco. Shorter drives and family-friendly activities.",
        "El gran Oeste a la altura de los niños: un día en Universal Studios, Los Ángeles y el observatorio Griffith, el Gran Cañón, el volcán Sunset Crater, Monument Valley, una noche en Bryce Canyon, el Valle del Fuego, dos noches en Las Vegas, Calico, Yosemite y dos días en San Francisco. Etapas más cortas y actividades adaptadas a las familias.",
      ],
      includes: INC(13, ",Entrée à Universal Studios"),
      price: 3648, nights: 13, departureFrom: "Paris", image: "of4",
      theme: "family", feeling: "distraction", travelerTypes: "family,couples", maxGuests: 53, order: -52990,
      chapters: [
        w.chapter(["Los Angeles et Universal Studios", "Los Angeles and Universal Studios", "Los Ángeles y Universal Studios"], ["Le cinéma et la plage.", "Movies and the beach.", "El cine y la playa."],
          ["of2", "of3", "po1"],
          [
            w.day(1, ...arr(LA), "of3"),
            w.day(2, ["Universal Studios Hollywood", "Universal Studios Hollywood", "Universal Studios Hollywood"], ["Une journée entière dans les studios Universal : les attractions, les décors de films et le tour des plateaux de tournage.", "A full day at Universal Studios: the rides, the film sets and the studio tour.", "Un día entero en los estudios Universal: las atracciones, los decorados de películas y la visita a los platós."], "of2"),
            w.day(3, LA, [`${X_LA[0]} Le soir, l'observatoire Griffith et sa vue sur la ville.`, `${X_LA[1]} In the evening, the Griffith Observatory and its view over the city.`, `${X_LA[2]} Por la noche, el observatorio Griffith y su vista sobre la ciudad.`], "po1"),
            w.day(4, t("Los Angeles – Laughlin", "Los Angeles – Laughlin", "Los Ángeles – Laughlin"), ["Traversée du désert de Mojave jusqu'à Laughlin, au bord du Colorado.", "Across the Mojave Desert to Laughlin, on the Colorado River.", "Travesía del desierto de Mojave hasta Laughlin, a orillas del Colorado."], "of3"),
          ]),
        w.chapter(["Les canyons et Las Vegas", "The canyons and Las Vegas", "Los cañones y Las Vegas"], ["Grand Canyon, Monument Valley et Bryce.", "The Grand Canyon, Monument Valley and Bryce.", "El Gran Cañón, Monument Valley y Bryce."],
          ["of1", "of4", "of5", "po3", "po4"],
          [
            w.day(5, ["Grand Canyon – Flagstaff", "Grand Canyon – Flagstaff", "Gran Cañón – Flagstaff"], X_GC, "po3"),
            w.day(6, ["Sunset Crater et Monument Valley – Page", "Sunset Crater and Monument Valley – Page", "Sunset Crater y Monument Valley – Page"], ["Le volcan Sunset Crater et ses champs de lave, puis Monument Valley en terre navajo et Page.", "Sunset Crater volcano and its lava fields, then Monument Valley on Navajo land and Page.", "El volcán Sunset Crater y sus campos de lava, y Monument Valley en tierra navajo y Page."], "po4"),
            w.day(7, ["Page – Bryce Canyon", "Page – Bryce Canyon", "Page – Bryce Canyon"], X_BRYCE_ONLY, "of4"),
            w.day(8, ["Vallée de Feu – Las Vegas", "Valley of Fire – Las Vegas", "Valle del Fuego – Las Vegas"], X_VOF, "of1"),
            w.day(9, LV, ["Journée libre à Las Vegas, avec en option le Springs Preserve, jardin et musée du désert pour les enfants.", "A free day in Las Vegas, with the Springs Preserve, a desert garden and museum for children, as an option.", "Día libre en Las Vegas, con la opción del Springs Preserve, jardín y museo del desierto para los niños."], "of5"),
          ]),
        w.chapter(["Yosemite et San Francisco", "Yosemite and San Francisco", "Yosemite y San Francisco"], ["La Sierra Nevada et la baie.", "The Sierra Nevada and the bay.", "Sierra Nevada y la bahía."],
          ["of6", "of8", "of7"],
          [
            w.day(10, ["Calico – Fresno", "Calico – Fresno", "Calico – Fresno"], X_CALICO, "ap5"),
            w.day(11, ["Yosemite – Modesto", "Yosemite – Modesto", "Yosemite – Modesto"], X_YOSE, "of6"),
            w.day(12, ["Modesto – San Francisco", "Modesto – San Francisco", "Modesto – San Francisco"], X_SF, "of8"),
            w.day(13, SF, ["Journée libre à San Francisco : une balade à vélo sur le Golden Gate, Alcatraz ou la Silicon Valley toute proche.", "A free day in San Francisco: a bike ride over the Golden Gate, Alcatraz or nearby Silicon Valley.", "Día libre en San Francisco: un paseo en bicicleta por el Golden Gate, Alcatraz o el cercano Silicon Valley."], "of7"),
            w.day(14, ...dep(SF), "of8"), w.day(15, T_HOME, HOME, "of3"),
          ]),
      ],
    }),

    // ───────────── 12. Ouest & Polynésie — 21J/18N ─────────────
    w.trip({
      slug: "etats-unis-ouest-et-polynesie-tahiti-moorea-21j",
      name: ["L'Ouest et la Polynésie : les grands parcs, la côte Pacifique, Tahiti et Moorea", "The West and Polynesia: the great parks, the Pacific coast, Tahiti and Moorea", "El Oeste y la Polinesia: los grandes parques, la costa del Pacífico, Tahití y Moorea"],
      tagline: ["Le grand Ouest américain, puis les lagons de Polynésie française", "The great American West, then the lagoons of French Polynesia", "El gran Oeste americano y las lagunas de la Polinesia Francesa"],
      description: [
        "Le voyage d'une vie : le circuit de l'Ouest de Los Angeles à San Francisco par le Grand Canyon, Monument Valley, Bryce Canyon, Las Vegas et les séquoias, la côte de Monterey, Carmel et Santa Barbara, puis un vol vers Tahiti et des séjours libres à Tahiti et à Moorea, entre lagon et montagnes.",
        "The trip of a lifetime: the Western tour from Los Angeles to San Francisco via the Grand Canyon, Monument Valley, Bryce Canyon, Las Vegas and the sequoias, the coast of Monterey, Carmel and Santa Barbara, then a flight to Tahiti and free stays on Tahiti and Moorea, between lagoon and mountains.",
        "El viaje de una vida: el circuito del Oeste de Los Ángeles a San Francisco por el Gran Cañón, Monument Valley, Bryce Canyon, Las Vegas y las secuoyas, la costa de Monterey, Carmel y Santa Bárbara, y un vuelo a Tahití y estancias libres en Tahití y Moorea, entre laguna y montañas.",
      ],
      includes: INC(18, ",Vol Los Angeles – Tahiti,Ferry Tahiti – Moorea,7 nuits en Polynésie"),
      price: 4879, nights: 18, departureFrom: "Paris", image: "po2",
      theme: "relax", feeling: "contentment", travelerTypes: "couples", maxGuests: 53, order: -52989,
      chapters: [
        w.chapter(["Le circuit de l'Ouest", "The Western tour", "El circuito del Oeste"], ["De Los Angeles à San Francisco.", "From Los Angeles to San Francisco.", "De Los Ángeles a San Francisco."],
          ["po1", "po3", "po4", "po6", "po7", "po8", "po5"],
          classicLoop(w, ["po1", "po3", "po4", "po7", "il7", "po5", "ao8"])),
        w.chapter(["La côte Pacifique", "The Pacific coast", "La costa del Pacífico"], ["Monterey, Carmel et Santa Barbara.", "Monterey, Carmel and Santa Barbara.", "Monterey, Carmel y Santa Bárbara."],
          ["io4", "io2"],
          [
            w.day(9, ["Monterey et Carmel – Lompoc", "Monterey and Carmel – Lompoc", "Monterey y Carmel – Lompoc"], X_COAST, "io4"),
            w.day(10, ["Santa Barbara – Los Angeles", "Santa Barbara – Los Angeles", "Santa Bárbara – Los Ángeles"], X_SB, "io2"),
            w.day(11, LA, X_LA, "po1"),
          ]),
        w.chapter(["Tahiti et Moorea", "Tahiti and Moorea", "Tahití y Moorea"], ["Les lagons de Polynésie.", "The lagoons of Polynesia.", "Las lagunas de la Polinesia."],
          ["po2"],
          [
            w.day(12, ["Los Angeles – Tahiti", "Los Angeles – Tahiti", "Los Ángeles – Tahití"], ["Vol vers Papeete, accueil avec un collier de fleurs de tiaré et transfert à l'hôtel.", "Flight to Papeete, welcome with a tiare flower lei and transfer to the hotel.", "Vuelo a Papeete, recibimiento con un collar de flores de tiaré y traslado al hotel."], "po2"),
            w.day(13, ["Tahiti", "Tahiti", "Tahití"], ["Journées libres à Tahiti : le marché de Papeete, le tour de l'île, ses cascades et ses plages de sable noir.", "Free days on Tahiti: the Papeete market, the island tour, its waterfalls and black sand beaches.", "Días libres en Tahití: el mercado de Papeete, la vuelta a la isla, sus cascadas y sus playas de arena negra."], "po2"),
            w.day(15, ["Tahiti – Moorea", "Tahiti – Moorea", "Tahití – Moorea"], ["Traversée en ferry vers Moorea et ses baies de Cook et d'Opunohu.", "Ferry crossing to Moorea and its Cook's and Opunohu bays.", "Travesía en ferri a Moorea y sus bahías de Cook y de Opunohu."], "po2"),
            w.day(16, ["Moorea", "Moorea", "Moorea"], ["Journées libres à Moorea : baignade dans le lagon, raies et requins de récif, randonnée au belvédère.", "Free days on Moorea: swimming in the lagoon, rays and reef sharks, a hike to the Belvedere lookout.", "Días libres en Moorea: baño en la laguna, rayas y tiburones de arrecife, excursión al mirador."], "po2"),
            w.day(19, ["Moorea – Tahiti – vol retour", "Moorea – Tahiti – flight home", "Moorea – Tahití – vuelo de regreso"], ["Retour à Tahiti en ferry et envol pour la France.", "Ferry back to Tahiti and fly to France.", "Regreso a Tahití en ferri y vuelo a Francia."], "po2"),
            w.day(21, T_HOME, HOME, "po1"),
          ]),
      ],
    }),

    // ───────────── 13. L'Ouest entre nous — 15J/13N ─────────────
    w.trip({
      slug: "etats-unis-ouest-entre-nous-10-voyageurs-15j",
      name: ["L'Ouest entre nous : canyons de l'Utah, Las Vegas et la côte californienne à 10", "The West Among Us: Utah's canyons, Las Vegas and the Californian coast with 10 travellers", "El Oeste entre nosotros: cañones de Utah, Las Vegas y la costa californiana con 10 viajeros"],
      tagline: ["Dix voyageurs au plus, de Las Vegas à San Francisco par les parcs de l'Utah", "Ten travellers at most, from Las Vegas to San Francisco through Utah's parks", "Diez viajeros como máximo, de Las Vegas a San Francisco por los parques de Utah"],
      description: [
        "Un petit groupe de dix personnes au plus : Las Vegas, la Route 66 à Seligman et Williams, le Grand Canyon, Page et le lac Powell, Monument Valley, Canyonlands, Dead Horse Point et Arches, Capitol Reef, Bryce Canyon, la Vallée de Feu, puis Los Angeles, Santa Barbara, le château de Hearst à San Simeon, Carmel, Monterey et San Francisco.",
        "A small group of ten at most: Las Vegas, Route 66 at Seligman and Williams, the Grand Canyon, Page and Lake Powell, Monument Valley, Canyonlands, Dead Horse Point and Arches, Capitol Reef, Bryce Canyon, the Valley of Fire, then Los Angeles, Santa Barbara, Hearst Castle at San Simeon, Carmel, Monterey and San Francisco.",
        "Un pequeño grupo de diez personas como máximo: Las Vegas, la Ruta 66 en Seligman y Williams, el Gran Cañón, Page y el lago Powell, Monument Valley, Canyonlands, Dead Horse Point y Arches, Capitol Reef, Bryce Canyon, el Valle del Fuego, y Los Ángeles, Santa Bárbara, el castillo de Hearst en San Simeón, Carmel, Monterey y San Francisco.",
      ],
      includes: INTI(13, 10),
      price: 5238, nights: 13, departureFrom: "Lyon", image: "en3",
      theme: "adventure", feeling: "contentment", travelerTypes: "couples,solo", maxGuests: 10, order: -52988,
      chapters: [
        w.chapter(["Arizona et Utah", "Arizona and Utah", "Arizona y Utah"], ["Route 66, Grand Canyon et parcs de l'Utah.", "Route 66, the Grand Canyon and Utah's parks.", "Ruta 66, Gran Cañón y parques de Utah."],
          ["en4", "en6", "en8", "en3", "en5", "en7"],
          [
            w.day(1, ...arr(LV), "en4"),
            w.day(2, ["Kingman, Seligman – Williams", "Kingman, Seligman – Williams", "Kingman, Seligman – Williams"], ["La Route 66 et ses villes d'époque, Kingman, Seligman et Williams.", "Route 66 and its old-time towns, Kingman, Seligman and Williams.", "La Ruta 66 y sus pueblos de época, Kingman, Seligman y Williams."], "en6"),
            w.day(3, ["Grand Canyon – Cameron", "Grand Canyon – Cameron", "Gran Cañón – Cameron"], ["Le Grand Canyon, de belvédère en belvédère sur la rive sud.", "The Grand Canyon, from viewpoint to viewpoint along the South Rim.", "El Gran Cañón, de mirador en mirador por el borde sur."], "en6"),
            w.day(4, ["Cameron – Page", "Cameron – Page", "Cameron – Page"], X_HB, "en3"),
            w.day(5, ["Monument Valley – Blanding", "Monument Valley – Blanding", "Monument Valley – Blanding"], ["Monument Valley et ses buttes de grès rouge, en terre navajo.", "Monument Valley and its red sandstone buttes, on Navajo land.", "Monument Valley y sus mesetas de arenisca roja, en tierra navajo."], "en5"),
            w.day(6, ["Canyonlands et Arches – Green River", "Canyonlands and Arches – Green River", "Canyonlands y Arches – Green River"], [`${X_CANYONLANDS[0]} ${X_ARCHES[0]}`, `${X_CANYONLANDS[1]} ${X_ARCHES[1]}`, `${X_CANYONLANDS[2]} ${X_ARCHES[2]}`], "en7"),
            w.day(7, ["Capitol Reef – Bryce Canyon", "Capitol Reef – Bryce Canyon", "Capitol Reef – Bryce Canyon"], ["Le parc de Capitol Reef et ses falaises colorées, puis Bryce Canyon.", "Capitol Reef park and its colourful cliffs, then Bryce Canyon.", "El parque de Capitol Reef y sus acantilados de colores, y Bryce Canyon."], "en1"),
            w.day(8, ["Vallée de Feu – Las Vegas", "Valley of Fire – Las Vegas", "Valle del Fuego – Las Vegas"], X_VOF, "en4"),
          ]),
        w.chapter(["Las Vegas et la Californie", "Las Vegas and California", "Las Vegas y California"], ["De Los Angeles à San Francisco par la côte.", "From Los Angeles to San Francisco along the coast.", "De Los Ángeles a San Francisco por la costa."],
          ["en2", "io4", "oi2"],
          [
            w.day(9, LV, ["Journée libre à Las Vegas.", "A free day in Las Vegas.", "Día libre en Las Vegas."], "en4"),
            w.day(10, ["Las Vegas – Los Angeles", "Las Vegas – Los Angeles", "Las Vegas – Los Ángeles"], ["Traversée du désert de Mojave, puis premiers pas à Los Angeles.", "Across the Mojave Desert, then first steps in Los Angeles.", "Travesía del desierto de Mojave y primeros pasos en Los Ángeles."], "io2"),
            w.day(11, ["Santa Barbara – San Simeon", "Santa Barbara – San Simeon", "Santa Bárbara – San Simeón"], ["Santa Barbara et sa mission, puis San Simeon, son château de Hearst et ses colonies d'éléphants de mer.", "Santa Barbara and its mission, then San Simeon, Hearst Castle and its elephant seal colonies.", "Santa Bárbara y su misión, y San Simeón, el castillo de Hearst y sus colonias de elefantes marinos."], "io2"),
            w.day(12, ["Carmel et Monterey – San Francisco", "Carmel and Monterey – San Francisco", "Carmel y Monterey – San Francisco"], X_COAST, "io4"),
            w.day(13, SF, X_SF, "en2"),
            w.day(14, ...dep(SF), "oi2"), w.day(15, T_HOME, HOME, "en1"),
          ]),
      ],
    }),

    // ───────────── 14. L'Ouest Intimiste — 15J/13N ─────────────
    w.trip({
      slug: "etats-unis-ouest-intimiste-zion-highway-1-15j",
      name: ["L'Ouest intimiste : parcs nationaux, Zion et la Highway 1", "The West Up Close: national parks, Zion and Highway 1", "El Oeste íntimo: parques nacionales, Zion y la Highway 1"],
      tagline: ["Douze voyageurs au plus, un chauffeur-guide francophone et la route côtière", "Twelve travellers at most, a French-speaking driver-guide and the coast road", "Doce viajeros como máximo, un chófer-guía francófono y la carretera costera"],
      description: [
        "La grande boucle de l'Ouest en groupe de 12 personnes au plus, au départ de San Francisco : Sequoia, la Vallée de la Mort, Las Vegas et la Vallée de Feu, Zion, Bryce Canyon, le lac Powell, Monument Valley, le Grand Canyon et la Route 66, deux jours à Los Angeles, puis la Highway 1 par Santa Barbara, Carmel et Monterey.",
        "The great Western loop in a group of 12 at most, from San Francisco: Sequoia, Death Valley, Las Vegas and the Valley of Fire, Zion, Bryce Canyon, Lake Powell, Monument Valley, the Grand Canyon and Route 66, two days in Los Angeles, then Highway 1 via Santa Barbara, Carmel and Monterey.",
        "El gran circuito del Oeste en grupo de 12 personas como máximo, desde San Francisco: Sequoia, el Valle de la Muerte, Las Vegas y el Valle del Fuego, Zion, Bryce Canyon, el lago Powell, Monument Valley, el Gran Cañón y la Ruta 66, dos días en Los Ángeles, y la Highway 1 por Santa Bárbara, Carmel y Monterey.",
      ],
      includes: INTI(13),
      price: 5600, nights: 13, departureFrom: "Nice", image: "oi1",
      theme: "adventure", feeling: "contentment", travelerTypes: "couples,solo", maxGuests: 12, order: -52987,
      chapters: [
        w.chapter(["La Californie et le Nevada", "California and Nevada", "California y Nevada"], ["Séquoias, Vallée de la Mort et Las Vegas.", "Sequoias, Death Valley and Las Vegas.", "Secuoyas, Valle de la Muerte y Las Vegas."],
          ["oi2", "oi3", "oi4"],
          [
            w.day(1, ...arr(SF), "oi2"),
            w.day(2, ["San Francisco – Merced", "San Francisco – Merced", "San Francisco – Merced"], [`${X_SF[0]} Puis la vallée centrale de Californie.`, `${X_SF[1]} Then California's Central Valley.`, `${X_SF[2]} Y el valle central de California.`], "oi2"),
            w.day(3, ["Sequoia – Bakersfield", "Sequoia – Bakersfield", "Sequoia – Bakersfield"], X_SEQ, "oi3"),
            w.day(4, ["Vallée de la Mort – Las Vegas", "Death Valley – Las Vegas", "Valle de la Muerte – Las Vegas"], X_DV, "to7"),
            w.day(5, ["La Vallée de Feu", "The Valley of Fire", "El Valle del Fuego"], X_VOF, "oi4"),
          ]),
        w.chapter(["Les parcs de l'Utah et de l'Arizona", "The parks of Utah and Arizona", "Los parques de Utah y Arizona"], ["Zion, Bryce, Monument Valley et Grand Canyon.", "Zion, Bryce, Monument Valley and the Grand Canyon.", "Zion, Bryce, Monument Valley y el Gran Cañón."],
          ["oi5", "oi6", "oi1", "dc2", "dc7"],
          [
            w.day(6, ["Zion – Bryce", "Zion – Bryce", "Zion – Bryce"], X_ZION, "oi5"),
            w.day(7, ["Bryce – lac Powell – Page", "Bryce – Lake Powell – Page", "Bryce – lago Powell – Page"], [`${X_BRYCE_ONLY[0]} Puis le lac Powell.`, `${X_BRYCE_ONLY[1]} Then Lake Powell.`, `${X_BRYCE_ONLY[2]} Y el lago Powell.`], "oi6"),
            w.day(8, ["Monument Valley – Tuba City", "Monument Valley – Tuba City", "Monument Valley – Tuba City"], X_HB, "dc2"),
            w.day(9, ["Grand Canyon – Seligman – Laughlin", "Grand Canyon – Seligman – Laughlin", "Gran Cañón – Seligman – Laughlin"], X_GC, "dc7"),
          ]),
        w.chapter(["Los Angeles et la Highway 1", "Los Angeles and Highway 1", "Los Ángeles y la Highway 1"], ["La côte Pacifique jusqu'à San Francisco.", "The Pacific coast to San Francisco.", "La costa del Pacífico hasta San Francisco."],
          ["io3", "io4"],
          [
            w.day(10, ["Laughlin – Los Angeles", "Laughlin – Los Angeles", "Laughlin – Los Ángeles"], ["Traversée du désert de Mojave jusqu'à Los Angeles.", "Across the Mojave Desert to Los Angeles.", "Travesía del desierto de Mojave hasta Los Ángeles."], "io2"),
            w.day(11, LA, X_LA, "io3"),
            w.day(12, ["Santa Barbara – Santa Maria", "Santa Barbara – Santa Maria", "Santa Bárbara – Santa María"], X_SB, "io2"),
            w.day(13, ["Carmel et Monterey – San Francisco", "Carmel and Monterey – San Francisco", "Carmel y Monterey – San Francisco"], X_COAST, "io4"),
            w.day(14, ...dep(SF), "oi2"), w.day(15, T_HOME, HOME, "oi1"),
          ]),
      ],
    }),

    // ───────────── 15. Déserts & Canyons Intimistes — 14J/12N ─────────────
    w.trip({
      slug: "etats-unis-deserts-et-canyons-intimistes-zion-14j",
      name: ["Déserts et canyons intimistes : Joshua Tree, Grand Canyon, Page, Bryce et Zion", "Deserts and Canyons Up Close: Joshua Tree, the Grand Canyon, Page, Bryce and Zion", "Desiertos y cañones íntimos: Joshua Tree, Gran Cañón, Page, Bryce y Zion"],
      tagline: ["Douze voyageurs au plus et des étapes de deux nuits au cœur des parcs", "Twelve travellers at most and two-night stops in the heart of the parks", "Doce viajeros como máximo y etapas de dos noches en el corazón de los parques"],
      description: [
        "Les déserts et les canyons au rythme lent, en groupe de 12 personnes au plus : Los Angeles, Joshua Tree, la Route 66 et une nuit au Grand Canyon, Monument Valley, deux nuits à Page avec Antelope Canyon et Horseshoe Bend, Bryce Canyon, Zion, Las Vegas et la Vallée de Feu, puis la ville fantôme de Calico.",
        "Deserts and canyons at a slow pace, in a group of 12 at most: Los Angeles, Joshua Tree, Route 66 and a night at the Grand Canyon, Monument Valley, two nights in Page with Antelope Canyon and Horseshoe Bend, Bryce Canyon, Zion, Las Vegas and the Valley of Fire, then the ghost town of Calico.",
        "Desiertos y cañones a ritmo lento, en grupo de 12 personas como máximo: Los Ángeles, Joshua Tree, la Ruta 66 y una noche en el Gran Cañón, Monument Valley, dos noches en Page con Antelope Canyon y Horseshoe Bend, Bryce Canyon, Zion, Las Vegas y el Valle del Fuego, y el pueblo fantasma de Calico.",
      ],
      includes: INTI(12),
      price: 5818, nights: 12, departureFrom: "Bruxelles", image: "dc8",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,solo", maxGuests: 12, order: -52986,
      chapters: [
        w.chapter(["Joshua Tree et le Grand Canyon", "Joshua Tree and the Grand Canyon", "Joshua Tree y el Gran Cañón"], ["Du désert de Mojave à l'Arizona.", "From the Mojave Desert to Arizona.", "Del desierto de Mojave a Arizona."],
          ["dc1", "dc7", "dc2"],
          [
            w.day(1, ...arr(LA), "io2"),
            w.day(2, LA, X_LA, "io3"),
            w.day(3, ["Los Angeles – Joshua Tree", "Los Angeles – Joshua Tree", "Los Ángeles – Joshua Tree"], X_JT, "dc1"),
            w.day(4, ["Joshua Tree – Kingman", "Joshua Tree – Kingman", "Joshua Tree – Kingman"], ["Les routes désertiques de Californie et d'Arizona jusqu'à Kingman, sur la Route 66.", "The desert roads of California and Arizona to Kingman, on Route 66.", "Las carreteras desérticas de California y Arizona hasta Kingman, en la Ruta 66."], "dc1"),
            w.day(5, ["Seligman – Grand Canyon", "Seligman – Grand Canyon", "Seligman – Gran Cañón"], [`${X_GC[0]} Nuit au bord du canyon.`, `${X_GC[1]} A night by the canyon.`, `${X_GC[2]} Noche junto al cañón.`], "dc7"),
            w.day(6, ["Monument Valley – Page", "Monument Valley – Page", "Monument Valley – Page"], X_MV, "dc2"),
          ]),
        w.chapter(["Page, Bryce et Zion", "Page, Bryce and Zion", "Page, Bryce y Zion"], ["Les canyons de l'Utah.", "Utah's canyons.", "Los cañones de Utah."],
          ["dc8", "dc5", "dc3", "dc4", "dc6"],
          [
            w.day(7, ["Page", "Page", "Page"], X_HB, "dc8"),
            w.day(8, ["Page – Bryce Canyon", "Page – Bryce Canyon", "Page – Bryce Canyon"], X_BRYCE_ONLY, "dc3"),
            w.day(9, ["Bryce Canyon – Zion", "Bryce Canyon – Zion", "Bryce Canyon – Zion"], X_ZION, "dc6"),
            w.day(10, ["Zion – Las Vegas", "Zion – Las Vegas", "Zion – Las Vegas"], ["Une randonnée matinale dans Zion, puis Las Vegas.", "A morning hike in Zion, then Las Vegas.", "Una caminata matinal en Zion y Las Vegas."], "dc4"),
            w.day(11, ["La Vallée de Feu", "The Valley of Fire", "El Valle del Fuego"], X_VOF, "dc5"),
            w.day(12, ["Calico – Los Angeles", "Calico – Los Angeles", "Calico – Los Ángeles"], X_CALICO, "ap5"),
            w.day(13, ...dep(LA), "io2"), w.day(14, T_HOME, HOME, "dc8"),
          ]),
      ],
    }),

    // ───────────── 16. Grand Tour des Rocheuses Intimiste — 16J/14N ─────────────
    r.trip({
      slug: "etats-unis-grand-tour-des-rocheuses-intimiste-santa-fe-16j",
      name: ["Grand Tour des Rocheuses intimiste : Santa Fe, Moab, Yellowstone et Rushmore", "Grand Tour of the Rockies Up Close: Santa Fe, Moab, Yellowstone and Rushmore", "Gran Tour de las Rocosas íntimo: Santa Fe, Moab, Yellowstone y Rushmore"],
      tagline: ["Du Nouveau-Mexique au Dakota, en groupe de 12 personnes au plus", "From New Mexico to Dakota, in a group of 12 at most", "De Nuevo México a Dakota, en grupo de 12 personas como máximo"],
      description: [
        "Une grande boucle depuis Denver en petit groupe : Colorado Springs et le Garden of the Gods, Taos et Santa Fe, Albuquerque, le Canyon de Chelly, Monument Valley, Canyonlands et Arches, Salt Lake City et Antelope Island, Grand Teton et Yellowstone, Cody, Thermopolis et ses sources chaudes, Devils Tower, Deadwood, le mont Rushmore, Crazy Horse et Rocky Mountain.",
        "A great loop from Denver in a small group: Colorado Springs and the Garden of the Gods, Taos and Santa Fe, Albuquerque, Canyon de Chelly, Monument Valley, Canyonlands and Arches, Salt Lake City and Antelope Island, Grand Teton and Yellowstone, Cody, Thermopolis and its hot springs, Devils Tower, Deadwood, Mount Rushmore, Crazy Horse and Rocky Mountain.",
        "Un gran circuito desde Denver en grupo reducido: Colorado Springs y el Garden of the Gods, Taos y Santa Fe, Albuquerque, el Cañón de Chelly, Monument Valley, Canyonlands y Arches, Salt Lake City y Antelope Island, Grand Teton y Yellowstone, Cody, Thermopolis y sus aguas termales, Devils Tower, Deadwood, el monte Rushmore, Crazy Horse y Rocky Mountain.",
      ],
      includes: INTI(14),
      price: 6029, nights: 14, departureFrom: "Lyon", image: "ri1",
      theme: "culture", feeling: "challenged", travelerTypes: "couples,solo", maxGuests: 12, order: -52985,
      chapters: [
        r.chapter(["Colorado et Nouveau-Mexique", "Colorado and New Mexico", "Colorado y Nuevo México"], ["Pueblos, adobe et canyons navajos.", "Pueblos, adobe and Navajo canyons.", "Pueblos, adobe y cañones navajos."],
          ["ri3", "ri4", "ri2"],
          [
            r.day(1, ...arr(DEN), "gt8"),
            r.day(2, ["Colorado Springs – Pueblo", "Colorado Springs – Pueblo", "Colorado Springs – Pueblo"], ["Le Garden of the Gods et ses rochers rouges au pied du Pikes Peak, à Colorado Springs.", "The Garden of the Gods and its red rocks at the foot of Pikes Peak, in Colorado Springs.", "El Garden of the Gods y sus rocas rojas al pie del Pikes Peak, en Colorado Springs."], "ri3"),
            r.day(3, ["Taos – Santa Fe", "Taos – Santa Fe", "Taos – Santa Fe"], ["Le pueblo de Taos, village amérindien en adobe habité depuis mille ans, puis Santa Fe et ses galeries d'art.", "Taos Pueblo, a Native American adobe village inhabited for a thousand years, then Santa Fe and its art galleries.", "El pueblo de Taos, aldea amerindia de adobe habitada desde hace mil años, y Santa Fe y sus galerías de arte."], "ri4"),
            r.day(4, ["Albuquerque – Gallup", "Albuquerque – Gallup", "Albuquerque – Gallup"], ["La vieille ville d'Albuquerque, puis Gallup, sur la Route 66, carrefour des artisans navajos.", "Albuquerque's old town, then Gallup, on Route 66, a hub for Navajo craftsmen.", "El casco antiguo de Albuquerque y Gallup, en la Ruta 66, encrucijada de artesanos navajos."], "ri4"),
            r.day(5, ["Canyon de Chelly et Monument Valley – Moab", "Canyon de Chelly and Monument Valley – Moab", "Cañón de Chelly y Monument Valley – Moab"], ["Le Canyon de Chelly et ses habitations troglodytes anasazies, puis Monument Valley.", "Canyon de Chelly and its Anasazi cliff dwellings, then Monument Valley.", "El Cañón de Chelly y sus viviendas trogloditas anasazi, y Monument Valley."], "ri2"),
          ]),
        r.chapter(["Utah et Yellowstone", "Utah and Yellowstone", "Utah y Yellowstone"], ["Arches, Salt Lake City et les geysers.", "Arches, Salt Lake City and the geysers.", "Arches, Salt Lake City y los géiseres."],
          ["ri1", "ri5", "ri6", "es6"],
          [
            r.day(6, ["Canyonlands", "Canyonlands", "Canyonlands"], X_CANYONLANDS, "os2"),
            r.day(7, ["Arches – Salt Lake City", "Arches – Salt Lake City", "Arches – Salt Lake City"], X_ARCHES, "ri1"),
            r.day(8, ["Grand Lac Salé – Idaho Falls", "Great Salt Lake – Idaho Falls", "Gran Lago Salado – Idaho Falls"], X_SLC, "ri5"),
            r.day(9, ["Grand Teton – Yellowstone", "Grand Teton – Yellowstone", "Grand Teton – Yellowstone"], X_TETON, "es6"),
            r.day(10, ["Yellowstone – Cody", "Yellowstone – Cody", "Yellowstone – Cody"], X_YELLOW, "ri6"),
          ]),
        r.chapter(["Wyoming et Black Hills", "Wyoming and the Black Hills", "Wyoming y las Black Hills"], ["Buffalo Bill, Devils Tower et Rushmore.", "Buffalo Bill, Devils Tower and Rushmore.", "Buffalo Bill, Devils Tower y Rushmore."],
          ["ri7", "os8"],
          [
            r.day(11, ["Cody – Thermopolis", "Cody – Thermopolis", "Cody – Thermopolis"], [`${X_CODY[0]} Puis Thermopolis et ses sources chaudes en terrasses.`, `${X_CODY[1]} Then Thermopolis and its terraced hot springs.`, `${X_CODY[2]} Y Thermopolis y sus aguas termales en terrazas.`], "os4"),
            r.day(12, ["Devils Tower – Deadwood", "Devils Tower – Deadwood", "Devils Tower – Deadwood"], X_DEVILS, "os7"),
            r.day(13, ["Mont Rushmore et Crazy Horse – Cheyenne", "Mount Rushmore and Crazy Horse – Cheyenne", "Monte Rushmore y Crazy Horse – Cheyenne"], X_RUSH, "ri7"),
            r.day(14, ["Rocky Mountain – Denver", "Rocky Mountain – Denver", "Rocky Mountain – Denver"], X_ROCKY, "os8"),
            r.day(15, ...dep(DEN), "gt8"), r.day(16, T_HOME, HOME, "ri1"),
          ]),
      ],
    }),

    // ───────────── 17. Échappée Sauvage / Terres Sauvages Intimistes — 15J/13N ─────────────
    r.trip({
      slug: "etats-unis-echappee-sauvage-intimiste-glacier-seattle-15j",
      name: ["Échappée sauvage intimiste : lac Tahoe, Yellowstone, Glacier et Seattle", "Wild Escape Up Close: Lake Tahoe, Yellowstone, Glacier and Seattle", "Escapada salvaje íntima: lago Tahoe, Yellowstone, Glacier y Seattle"],
      tagline: ["De San Francisco à Seattle par les grands espaces du Nord-Ouest, à 12 au plus", "From San Francisco to Seattle across the great Northwest, with 12 at most", "De San Francisco a Seattle por los grandes espacios del Noroeste, con 12 como máximo"],
      description: [
        "Le Nord-Ouest sauvage en petit groupe : San Francisco, le lac Tahoe, le Nevada des pionniers, le désert de sel de Bonneville, Salt Lake City, Grand Teton, deux jours à Yellowstone, Helena, le parc de Glacier et ses lacs de montagne, Coeur d'Alene, les chutes de Snoqualmie et Seattle. Version Terres sauvages (18 jours) prolongée par le mont Rainier, Portland, la côte de l'Oregon, les séquoias de Redwood et la Napa Valley, à partir de 8 102 € par personne.",
        "The wild Northwest in a small group: San Francisco, Lake Tahoe, pioneer Nevada, the Bonneville Salt Flats, Salt Lake City, Grand Teton, two days in Yellowstone, Helena, Glacier park and its mountain lakes, Coeur d'Alene, Snoqualmie Falls and Seattle. The Wild Lands version (18 days) adds Mount Rainier, Portland, the Oregon coast, the Redwood sequoias and Napa Valley, from €8,102 per person.",
        "El Noroeste salvaje en grupo reducido: San Francisco, el lago Tahoe, la Nevada de los pioneros, el desierto de sal de Bonneville, Salt Lake City, Grand Teton, dos días en Yellowstone, Helena, el parque de Glacier y sus lagos de montaña, Coeur d'Alene, las cataratas de Snoqualmie y Seattle. La versión Tierras salvajes (18 días) añade el monte Rainier, Portland, la costa de Oregón, las secuoyas de Redwood y el valle de Napa, desde 8.102 € por persona.",
      ],
      includes: INTI(13),
      price: 6677, nights: 13, departureFrom: "Francfort", image: "es1",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,solo", maxGuests: 12, order: -52984,
      chapters: [
        r.chapter(["San Francisco et le Grand Bassin", "San Francisco and the Great Basin", "San Francisco y la Gran Cuenca"], ["Tahoe, le Nevada et le désert de sel.", "Tahoe, Nevada and the salt flats.", "Tahoe, Nevada y el desierto de sal."],
          ["es7", "es3", "es4", "ts4"],
          [
            r.day(1, ...arr(SF), "ts5"),
            r.day(2, SF, X_SF, "es7"),
            r.day(3, ["Lac Tahoe – Carson City", "Lake Tahoe – Carson City", "Lago Tahoe – Carson City"], X_TAHOE, "es3"),
            r.day(4, ["Eureka – Elko", "Eureka – Elko", "Eureka – Elko"], ["La « route la plus solitaire d'Amérique » à travers le Nevada des pionniers et des mines d'argent.", "The 'loneliest road in America' through the Nevada of pioneers and silver mines.", "La «carretera más solitaria de América» a través de la Nevada de los pioneros y las minas de plata."], "ts4"),
            r.day(5, ["Bonneville – Salt Lake City", "Bonneville – Salt Lake City", "Bonneville – Salt Lake City"], ["Le désert de sel de Bonneville, d'une blancheur aveuglante, puis Salt Lake City.", "The dazzling white Bonneville Salt Flats, then Salt Lake City.", "El desierto de sal de Bonneville, de una blancura cegadora, y Salt Lake City."], "es4"),
          ]),
        r.chapter(["Grand Teton et Yellowstone", "Grand Teton and Yellowstone", "Grand Teton y Yellowstone"], ["Geysers, bisons et sommets.", "Geysers, bison and peaks.", "Géiseres, bisontes y cumbres."],
          ["es2", "es6", "es5", "ts1", "ts6"],
          [
            r.day(6, ["Antelope Island – Idaho Falls", "Antelope Island – Idaho Falls", "Antelope Island – Idaho Falls"], X_SLC, "es2"),
            r.day(7, ["Jackson et Grand Teton – Yellowstone", "Jackson and Grand Teton – Yellowstone", "Jackson y Grand Teton – Yellowstone"], X_TETON, "ts1"),
            r.day(8, ["Yellowstone", "Yellowstone", "Yellowstone"], X_YELLOW, "es5"),
            r.day(9, ["Yellowstone – Helena", "Yellowstone – Helena", "Yellowstone – Helena"], ["Derniers geysers de Yellowstone, puis Helena, capitale du Montana née de la ruée vers l'or.", "Yellowstone's last geysers, then Helena, Montana's capital born of the gold rush.", "Últimos géiseres de Yellowstone y Helena, capital de Montana nacida de la fiebre del oro."], "ts6"),
          ]),
        r.chapter(["Glacier et le Nord-Ouest", "Glacier and the Northwest", "Glacier y el Noroeste"], ["Montagnes, lacs et Seattle.", "Mountains, lakes and Seattle.", "Montañas, lagos y Seattle."],
          ["es1", "es8", "ts7"],
          [
            r.day(10, ["Glacier – Kalispell", "Glacier – Kalispell", "Glacier – Kalispell"], ["Le parc de Glacier et la route Going-to-the-Sun, entre sommets, glaciers et lacs turquoise.", "Glacier park and the Going-to-the-Sun Road, between peaks, glaciers and turquoise lakes.", "El parque de Glacier y la carretera Going-to-the-Sun, entre cumbres, glaciares y lagos turquesa."], "es1"),
            r.day(11, ["Coeur d'Alene – Spokane", "Coeur d'Alene – Spokane", "Coeur d'Alene – Spokane"], ["Le lac de Coeur d'Alene dans l'Idaho, puis Spokane.", "Lake Coeur d'Alene in Idaho, then Spokane.", "El lago de Coeur d'Alene en Idaho y Spokane."], "es1"),
            r.day(12, ["Ginkgo et Snoqualmie – Seattle", "Ginkgo and Snoqualmie – Seattle", "Ginkgo y Snoqualmie – Seattle"], ["La forêt pétrifiée de Ginkgo, les chutes de Snoqualmie, puis Seattle.", "The Ginkgo petrified forest, Snoqualmie Falls, then Seattle.", "El bosque petrificado de Ginkgo, las cataratas de Snoqualmie y Seattle."], "es8"),
            r.day(13, ["Seattle", "Seattle", "Seattle"], ["Seattle : la Space Needle, le marché de Pike Place et le front de mer, avec le mont Rainier à l'horizon.", "Seattle: the Space Needle, Pike Place Market and the waterfront, with Mount Rainier on the horizon.", "Seattle: la Space Needle, el mercado de Pike Place y el paseo marítimo, con el monte Rainier en el horizonte."], "ts7"),
            r.day(14, ["Seattle – vol retour", "Seattle – flight home", "Seattle – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "es8"),
            r.day(15, T_HOME, HOME, "es1"),
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
