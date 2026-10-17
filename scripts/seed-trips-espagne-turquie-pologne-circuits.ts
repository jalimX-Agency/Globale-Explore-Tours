// Spain, Turkey and Poland — 11 journey-format trips for existing destinations: Spain (4, including
// the Canary Islands and New Year breaks), Turkey (2) and Poland (5). Near-identical supplier
// programmes are grouped on one page and described inside each trip. Prices are per-person "from"
// prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-espagne-turquie-pologne-circuits.ts
// Requires scripts/upload-images-etp-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "espagne-nouvel-an-a-madrid-ou-seville-4j": ["169458", "60759"],
  "espagne-cap-sur-l-andalousie-grenade-cordoue-seville-8j": ["83438", "58139", "58141"],
  "espagne-cap-sur-les-canaries-tenerife-gran-canaria-la-gomera-8j": ["416498"],
  "espagne-cap-sur-madrid-et-la-castille-tolede-salamanque-8j": ["397178", "221558"],
  "turquie-istanbul-romantique-4j": ["94745", "399138"],
  "turquie-merveilles-de-la-turquie-cappadoce-pamukkale-ephese-8j": ["172840", "172839", "368579", "368578", "219818"],
  "pologne-cracovie-en-liberte-noel-nouvel-an-4j": ["61643", "52140", "52142"],
  "pologne-cap-sur-cracovie-et-les-tatras-5j": ["419918"],
  "pologne-de-varsovie-a-cracovie-privatif-6j": ["202838"],
  "pologne-merveilles-de-la-pologne-cracovie-gdansk-varsovie-8j": ["417458"],
  "pologne-cap-sur-la-pologne-gdansk-torun-wroclaw-cracovie-8j": ["341364"],
};

const T_HOME: L3 = ["Retour en France", "Back to France", "Regreso a Francia"];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const home = (city: L3): L3 => [`Transfert à l'aéroport de ${city[0]} et envol pour la France.`, `Transfer to ${city[1]} airport and fly to France.`, `Traslado al aeropuerto de ${city[2]} y vuelo a Francia.`];
const join = (a: L3, b: L3): L3 => [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`, `${a[2]} ${b[2]}`];
const MAD: L3 = ["Madrid", "Madrid", "Madrid"];
const IST: L3 = ["Istanbul", "Istanbul", "Estambul"];
const KRK: L3 = ["Cracovie", "Kraków", "Cracovia"];
const WAW: L3 = ["Varsovie", "Warsaw", "Varsovia"];

const X_MAD: L3 = ["Madrid : la Puerta del Sol, la Plaza Mayor, le Palais royal, le parc du Retiro et le musée du Prado.", "Madrid: the Puerta del Sol, the Plaza Mayor, the Royal Palace, Retiro Park and the Prado Museum.", "Madrid: la Puerta del Sol, la Plaza Mayor, el Palacio Real, el parque del Retiro y el museo del Prado."];
const X_IST: L3 = ["Istanbul : Sainte-Sophie, la Mosquée bleue, l'Hippodrome, le palais de Topkapı et le Grand Bazar.", "Istanbul: Hagia Sophia, the Blue Mosque, the Hippodrome, Topkapı Palace and the Grand Bazaar.", "Estambul: Santa Sofía, la Mezquita Azul, el Hipódromo, el palacio de Topkapı y el Gran Bazar."];
const X_BOSPHORE: L3 = ["Croisière sur le Bosphore entre Europe et Asie, le palais de Dolmabahçe et le bazar aux épices.", "A cruise on the Bosphorus between Europe and Asia, Dolmabahçe Palace and the Spice Bazaar.", "Crucero por el Bósforo entre Europa y Asia, el palacio de Dolmabahçe y el bazar de las especias."];
const X_CAPPA: L3 = ["La Cappadoce, ses cheminées de fée, ses églises rupestres de Göreme et ses villes souterraines ; en option, le survol en montgolfière au lever du soleil.", "Cappadocia, its fairy chimneys, the rock-cut churches of Göreme and its underground cities; optionally, a hot-air balloon flight at sunrise.", "Capadocia, sus chimeneas de hadas, las iglesias rupestres de Göreme y sus ciudades subterráneas; opcional, el vuelo en globo al amanecer."];
const X_PAMU: L3 = ["Pamukkale, le « château de coton », ses vasques de calcaire blanc et la cité antique de Hiérapolis.", "Pamukkale, the 'cotton castle', its white limestone terraces and the ancient city of Hierapolis.", "Pamukkale, el «castillo de algodón», sus terrazas de caliza blanca y la ciudad antigua de Hierápolis."];
const X_EPHESE: L3 = ["Éphèse, la plus grande cité antique de la Méditerranée orientale, la bibliothèque de Celsus et le grand théâtre.", "Ephesus, the largest ancient city in the eastern Mediterranean, the Library of Celsus and the great theatre.", "Éfeso, la mayor ciudad antigua del Mediterráneo oriental, la biblioteca de Celso y el gran teatro."];
const X_KRK: L3 = ["Cracovie : la place du Marché et la halle aux Draps, la basilique Notre-Dame, la colline du Wawel et son château, et le quartier juif de Kazimierz.", "Kraków: the Market Square and the Cloth Hall, St Mary's Basilica, Wawel Hill and its castle, and the Jewish quarter of Kazimierz.", "Cracovia: la plaza del Mercado y la lonja de los Paños, la basílica de Santa María, la colina de Wawel y su castillo, y el barrio judío de Kazimierz."];
const X_WIELICZKA: L3 = ["La mine de sel de Wieliczka, ses galeries et sa chapelle sculptée dans le sel à 100 mètres sous terre.", "The Wieliczka salt mine, its galleries and its chapel carved from salt 100 metres underground.", "La mina de sal de Wieliczka, sus galerías y su capilla esculpida en sal a 100 metros bajo tierra."];
const X_AUSCH: L3 = ["Le mémorial d'Auschwitz-Birkenau, ancien camp de concentration et d'extermination.", "The Auschwitz-Birkenau memorial, the former concentration and extermination camp.", "El memorial de Auschwitz-Birkenau, antiguo campo de concentración y exterminio."];
const X_WAW: L3 = ["Varsovie, sa vieille ville reconstruite et classée par l'Unesco, le château royal, la voie royale et le parc Łazienki.", "Warsaw, its rebuilt UNESCO-listed old town, the Royal Castle, the Royal Route and Łazienki Park.", "Varsovia, su casco antiguo reconstruido y declarado por la Unesco, el castillo real, la vía real y el parque Łazienki."];
const X_GDANSK: L3 = ["Gdańsk, ses maisons hanséatiques, la rue Longue et la grue médiévale au bord de la Motława.", "Gdańsk, its Hanseatic houses, the Long Street and the medieval crane on the Motława.", "Gdansk, sus casas hanseáticas, la calle Larga y la grúa medieval a orillas del Motława."];
const X_MALBORK: L3 = ["Le château de Malbork, plus grand château de briques du monde, ancienne capitale des chevaliers Teutoniques.", "Malbork Castle, the largest brick castle in the world, former capital of the Teutonic Knights.", "El castillo de Malbork, el mayor castillo de ladrillo del mundo, antigua capital de los caballeros teutónicos."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const SUN = { label: ["Avril à octobre", "April to October", "Abril a octubre"] as L3, months: "april,may,june,july,august,september,october" };
  const es = circuitBuilders({ destinationSlug: "espagne", imagePrefix: "etp", season: SUN });
  const esw = circuitBuilders({ destinationSlug: "espagne", imagePrefix: "etp", season: { label: ["Fin décembre", "Late December", "Finales de diciembre"], months: "december" } });
  const esy = circuitBuilders({ destinationSlug: "espagne", imagePrefix: "etp", season: { label: ["Toute l'année", "All year round", "Todo el año"], months: "january,february,march,april,may,june,july,august,september,october,november,december" } });
  const tr = circuitBuilders({ destinationSlug: "turquie", imagePrefix: "etp", season: SUN });
  const try_ = circuitBuilders({ destinationSlug: "turquie", imagePrefix: "etp", season: { label: ["Toute l'année", "All year round", "Todo el año"], months: "january,february,march,april,may,june,july,august,september,october,november,december" } });
  const pl = circuitBuilders({ destinationSlug: "pologne", imagePrefix: "etp", season: { label: ["Mai à septembre", "May to September", "Mayo a septiembre"], months: "may,june,july,august,september" } });
  const ply = circuitBuilders({ destinationSlug: "pologne", imagePrefix: "etp", season: { label: ["Toute l'année", "All year round", "Todo el año"], months: "january,february,march,april,may,june,july,august,september,october,november,december" } });
  const INC = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtels 3* et 4*,Transport en autocar,Visites du programme,Guide-accompagnateur francophone${extra}`,
    `Flights from France,Transfers,${n} nights in 3* and 4* hotels,Transport by coach,Visits in the programme,French-speaking tour leader${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hoteles de 3* y 4*,Transporte en autocar,Visitas del programa,Guía acompañante francófono${extra}`,
  ];
  const BREAK = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtel${extra}`,
    `Flights from France,Transfers,${n} nights in a hotel${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hotel${extra}`,
  ];

  const journeyTrips = [
    // ═════════════ ESPAGNE ═════════════
    esw.trip({
      slug: "espagne-nouvel-an-a-madrid-ou-seville-4j",
      name: ["Nouvel An à Madrid ou à Séville : le réveillon espagnol", "New Year in Madrid or Seville: a Spanish New Year's Eve", "Año Nuevo en Madrid o Sevilla: la Nochevieja española"],
      tagline: ["Les douze raisins de minuit à la Puerta del Sol, ou le réveillon andalou", "The twelve grapes at midnight at the Puerta del Sol, or an Andalusian New Year", "Las doce uvas de medianoche en la Puerta del Sol, o la Nochevieja andaluza"],
      description: [
        "Fêter la nouvelle année en Espagne : à Madrid, la visite de la ville, le dîner de réveillon et la tradition des douze raisins sous l'horloge de la Puerta del Sol. Aussi à Séville (5 jours), entre l'Alcázar, la cathédrale et le Metropol Parasol, à partir de 1 043 € par personne.",
        "Celebrating the New Year in Spain: in Madrid, a tour of the city, the New Year's Eve dinner and the tradition of the twelve grapes under the Puerta del Sol clock. Also in Seville (5 days), between the Alcázar, the cathedral and the Metropol Parasol, from €1,043 per person.",
        "Celebrar el Año Nuevo en España: en Madrid, la visita de la ciudad, la cena de Nochevieja y la tradición de las doce uvas bajo el reloj de la Puerta del Sol. También en Sevilla (5 días), entre el Alcázar, la catedral y las Setas, desde 1.043 € por persona.",
      ],
      includes: BREAK(3, ",Visite guidée,Dîner du réveillon"),
      price: 1020, nights: 3, departureFrom: "Barcelone", image: "nm1",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,family,groups", maxGuests: 40, order: -46000,
      chapters: [
        esw.chapter(["Madrid en fête", "Madrid celebrates", "Madrid de fiesta"], ["La capitale espagnole au Nouvel An.", "The Spanish capital at New Year.", "La capital española en Año Nuevo."],
          ["nm1", "nm2", "nm3", "nm4", "nm5", "ns2"],
          [
            esw.day(1, ...arr(MAD), "nm3"),
            esw.day(2, MAD, X_MAD, "nm2"),
            esw.day(3, ["Le réveillon", "New Year's Eve", "Nochevieja"], ["Journée libre, puis dîner de réveillon et les douze raisins à minuit, au son des cloches de la Puerta del Sol.", "A free day, then the New Year's Eve dinner and the twelve grapes at midnight, to the chimes of the Puerta del Sol.", "Día libre, cena de Nochevieja y las doce uvas a medianoche, al son de las campanadas de la Puerta del Sol."], "nm1"),
            esw.day(4, T_HOME, home(MAD), "nm5"),
          ]),
      ],
    }),

    es.trip({
      slug: "espagne-cap-sur-l-andalousie-grenade-cordoue-seville-8j",
      name: ["Cap sur l'Andalousie : Grenade, Cordoue, Séville, Cadix, Gibraltar et Ronda", "Heading for Andalusia: Granada, Córdoba, Seville, Cádiz, Gibraltar and Ronda", "Rumbo a Andalucía: Granada, Córdoba, Sevilla, Cádiz, Gibraltar y Ronda"],
      tagline: ["L'Alhambra, la Mezquita et l'Alcázar, depuis la Costa del Sol", "The Alhambra, the Mezquita and the Alcázar, from the Costa del Sol", "La Alhambra, la Mezquita y el Alcázar, desde la Costa del Sol"],
      description: [
        "L'Andalousie en groupe de 30 personnes au plus : l'Alhambra de Grenade, la Mezquita de Cordoue, Séville et son Alcázar, Cadix, le rocher de Gibraltar, Málaga et le village blanc de Mijas, puis Ronda en option. Avec un séjour de trois nuits sur la Costa del Sol (11 jours) à partir de 1 560 €, ou de sept nuits (15 jours) à partir de 1 807 € par personne.",
        "Andalusia in a group of 30 at most: the Alhambra in Granada, the Mezquita in Córdoba, Seville and its Alcázar, Cádiz, the Rock of Gibraltar, Málaga and the white village of Mijas, then Ronda as an option. With a three-night stay on the Costa del Sol (11 days) from €1,560, or seven nights (15 days) from €1,807 per person.",
        "Andalucía en grupo de 30 personas como máximo: la Alhambra de Granada, la Mezquita de Córdoba, Sevilla y su Alcázar, Cádiz, el peñón de Gibraltar, Málaga y el pueblo blanco de Mijas, y Ronda opcional. Con una estancia de tres noches en la Costa del Sol (11 días) desde 1.560 €, o de siete noches (15 días) desde 1.807 € por persona.",
      ],
      includes: INC(7),
      price: 1207, nights: 7, departureFrom: "Bilbao", image: "an6",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 30, order: -45999,
      chapters: [
        es.chapter(["Grenade, Cordoue et Séville", "Granada, Córdoba and Seville", "Granada, Córdoba y Sevilla"], ["L'héritage d'al-Andalus.", "The legacy of al-Andalus.", "El legado de al-Ándalus."],
          ["an4", "an6", "ns2", "ns4"],
          [
            es.day(1, ...arr(["Málaga", "Málaga", "Málaga"]), "an3"),
            es.day(2, ["Grenade", "Granada", "Granada"], ["Grenade et l'Alhambra, palais des rois nasrides, ses patios, ses fontaines et les jardins du Generalife.", "Granada and the Alhambra, palace of the Nasrid kings, its patios, fountains and the Generalife gardens.", "Granada y la Alhambra, palacio de los reyes nazaríes, sus patios, sus fuentes y los jardines del Generalife."], "an6"),
            es.day(3, ["Cordoue – Séville", "Córdoba – Seville", "Córdoba – Sevilla"], ["La Mezquita de Cordoue, forêt de colonnes et d'arcs, et le quartier juif, puis Séville.", "Córdoba's Mezquita, a forest of columns and arches, and the Jewish quarter, then Seville.", "La Mezquita de Córdoba, bosque de columnas y arcos, y la judería, y Sevilla."], "an4"),
            es.day(4, ["Séville – Cadix", "Seville – Cádiz", "Sevilla – Cádiz"], ["Séville, sa cathédrale et la Giralda, l'Alcázar, la place d'Espagne et le quartier de Santa Cruz, puis la province de Cadix.", "Seville, its cathedral and the Giralda, the Alcázar, the Plaza de España and the Santa Cruz district, then the province of Cádiz.", "Sevilla, su catedral y la Giralda, el Alcázar, la plaza de España y el barrio de Santa Cruz, y la provincia de Cádiz."], "ns2"),
          ]),
        es.chapter(["Cadix, Gibraltar et la Costa del Sol", "Cádiz, Gibraltar and the Costa del Sol", "Cádiz, Gibraltar y la Costa del Sol"], ["La côte et les villages blancs.", "The coast and the white villages.", "La costa y los pueblos blancos."],
          ["an2", "an5", "an3"],
          [
            es.day(5, ["Cadix – Gibraltar", "Cádiz – Gibraltar", "Cádiz – Gibraltar"], ["Cadix, la plus ancienne ville d'Occident, puis le rocher de Gibraltar et ses singes.", "Cádiz, the oldest city in the West, then the Rock of Gibraltar and its monkeys.", "Cádiz, la ciudad más antigua de Occidente, y el peñón de Gibraltar y sus monos."], "an2"),
            es.day(6, ["Málaga – Mijas", "Málaga – Mijas", "Málaga – Mijas"], ["Málaga, ville natale de Picasso, son Alcazaba et sa cathédrale, puis Mijas, village blanc perché au-dessus de la mer.", "Málaga, Picasso's birthplace, its Alcazaba and cathedral, then Mijas, a white village perched above the sea.", "Málaga, ciudad natal de Picasso, su Alcazaba y su catedral, y Mijas, pueblo blanco encaramado sobre el mar."], "an3"),
            es.day(7, ["Ronda ou journée libre", "Ronda or a free day", "Ronda o día libre"], ["Journée libre, ou en option Ronda, ville perchée de part et d'autre de son gouffre et de son pont neuf.", "A free day, or optionally Ronda, a town perched on both sides of its gorge and its new bridge.", "Día libre, u opcional Ronda, ciudad encaramada a ambos lados de su tajo y su puente nuevo."], "an5"),
            es.day(8, T_HOME, home(["Málaga", "Málaga", "Málaga"]), "an6"),
          ]),
      ],
    }),

    esy.trip({
      slug: "espagne-cap-sur-les-canaries-tenerife-gran-canaria-la-gomera-8j",
      name: ["Cap sur les Canaries : Tenerife, Gran Canaria et La Gomera", "Heading for the Canary Islands: Tenerife, Gran Canaria and La Gomera", "Rumbo a Canarias: Tenerife, Gran Canaria y La Gomera"],
      tagline: ["Trois îles volcaniques au soleil toute l'année", "Three volcanic islands in year-round sunshine", "Tres islas volcánicas al sol todo el año"],
      description: [
        "Les Canaries en une semaine depuis Puerto de la Cruz : une journée à Gran Canaria, La Laguna et les montagnes d'Anaga, le parc du Teide, plus haut sommet d'Espagne, et la vallée de La Orotava, l'île de La Gomera et sa forêt laurifère, puis les plages du sud de Tenerife.",
        "The Canaries in a week from Puerto de la Cruz: a day on Gran Canaria, La Laguna and the Anaga mountains, Teide park, Spain's highest peak, and the Orotava valley, the island of La Gomera and its laurel forest, then the beaches of southern Tenerife.",
        "Canarias en una semana desde Puerto de la Cruz: un día en Gran Canaria, La Laguna y los montes de Anaga, el parque del Teide, la cumbre más alta de España, y el valle de La Orotava, la isla de La Gomera y su laurisilva, y las playas del sur de Tenerife.",
      ],
      includes: INC(7, ",Ferries entre les îles"),
      price: 1760, nights: 7, departureFrom: "Toulouse", image: "ca1",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 40, order: -45998,
      chapters: [
        esy.chapter(["Tenerife et Gran Canaria", "Tenerife and Gran Canaria", "Tenerife y Gran Canaria"], ["Les deux grandes îles.", "The two big islands.", "Las dos grandes islas."],
          ["ca5", "ca3"],
          [
            esy.day(1, ["Tenerife – Puerto de la Cruz", "Tenerife – Puerto de la Cruz", "Tenerife – Puerto de la Cruz"], ["Envol pour Tenerife et transfert à Puerto de la Cruz, sur la côte nord.", "Flight to Tenerife and transfer to Puerto de la Cruz, on the north coast.", "Vuelo a Tenerife y traslado a Puerto de la Cruz, en la costa norte."], "ca4"),
            esy.day(2, ["Puerto de la Cruz", "Puerto de la Cruz", "Puerto de la Cruz"], ["Journée libre : le jardin botanique, le Lago Martiánez et le vieux port.", "A free day: the botanical garden, Lago Martiánez and the old harbour.", "Día libre: el jardín botánico, el Lago Martiánez y el puerto viejo."], "ca4"),
            esy.day(3, ["Gran Canaria", "Gran Canaria", "Gran Canaria"], ["Traversée vers Gran Canaria, le quartier colonial de Vegueta à Las Palmas et les villages de l'intérieur.", "Crossing to Gran Canaria, the colonial Vegueta district of Las Palmas and the inland villages.", "Travesía a Gran Canaria, el barrio colonial de Vegueta en Las Palmas y los pueblos del interior."], "ca5"),
            esy.day(4, ["La Laguna – Anaga – Santa Cruz", "La Laguna – Anaga – Santa Cruz", "La Laguna – Anaga – Santa Cruz"], ["La Laguna, ville coloniale classée par l'Unesco, les forêts du massif d'Anaga, puis Santa Cruz.", "La Laguna, a UNESCO-listed colonial town, the forests of the Anaga massif, then Santa Cruz.", "La Laguna, ciudad colonial declarada por la Unesco, los bosques del macizo de Anaga, y Santa Cruz."], "ca3"),
          ]),
        esy.chapter(["Le Teide et La Gomera", "Teide and La Gomera", "El Teide y La Gomera"], ["Volcan, forêt et plages.", "Volcano, forest and beaches.", "Volcán, bosque y playas."],
          ["ca1", "ca6"],
          [
            esy.day(5, ["Le Teide – La Orotava", "Teide – La Orotava", "El Teide – La Orotava"], ["Le parc national du Teide, ses coulées de lave et ses roches de García au pied du volcan, puis la vallée de La Orotava.", "Teide national park, its lava flows and the Roques de García at the foot of the volcano, then the Orotava valley.", "El parque nacional del Teide, sus coladas de lava y los Roques de García al pie del volcán, y el valle de La Orotava."], "ca1"),
            esy.day(6, ["La Gomera", "La Gomera", "La Gomera"], ["L'île de La Gomera, sa forêt de Garajonay classée par l'Unesco et le silbo, langue sifflée des bergers.", "The island of La Gomera, its UNESCO-listed Garajonay forest and silbo, the shepherds' whistled language.", "La isla de La Gomera, su bosque de Garajonay declarado por la Unesco y el silbo, lengua silbada de los pastores."], "ca6"),
            esy.day(7, ["Les plages du sud", "The southern beaches", "Las playas del sur"], ["Journée détente sur les plages ensoleillées du sud de Tenerife.", "A relaxing day on the sunny beaches of southern Tenerife.", "Jornada de descanso en las soleadas playas del sur de Tenerife."], "ca5"),
            esy.day(8, T_HOME, home(["Tenerife", "Tenerife", "Tenerife"]), "ca1"),
          ]),
      ],
    }),

    es.trip({
      slug: "espagne-cap-sur-madrid-et-la-castille-tolede-salamanque-8j",
      name: ["Cap sur Madrid et la Castille : l'Escurial, Tolède, Salamanque et Ségovie", "Heading for Madrid and Castile: El Escorial, Toledo, Salamanca and Segovia", "Rumbo a Madrid y Castilla: El Escorial, Toledo, Salamanca y Segovia"],
      tagline: ["La capitale et les villes royales du cœur de l'Espagne", "The capital and the royal cities of the heart of Spain", "La capital y las ciudades reales del corazón de España"],
      description: [
        "Le cœur de l'Espagne en une semaine : Madrid et le Prado, le monastère de l'Escurial, Tolède, la ville des trois cultures, deux jours à Salamanque, cité universitaire dorée, Ávila et ses remparts, puis Ségovie et son aqueduc romain.",
        "The heart of Spain in a week: Madrid and the Prado, the monastery of El Escorial, Toledo, the city of three cultures, two days in Salamanca, the golden university city, Ávila and its ramparts, then Segovia and its Roman aqueduct.",
        "El corazón de España en una semana: Madrid y el Prado, el monasterio de El Escorial, Toledo, la ciudad de las tres culturas, dos días en Salamanca, ciudad universitaria dorada, Ávila y sus murallas, y Segovia y su acueducto romano.",
      ],
      includes: INC(7),
      price: 1871, nights: 7, departureFrom: "Barcelone", image: "ma7",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -45997,
      chapters: [
        es.chapter(["Madrid, l'Escurial et Tolède", "Madrid, El Escorial and Toledo", "Madrid, El Escorial y Toledo"], ["La capitale et ses environs.", "The capital and its surroundings.", "La capital y sus alrededores."],
          ["ma1", "ma2", "ma3", "ma4"],
          [
            es.day(1, ...arr(MAD), "ma2"),
            es.day(2, ["L'Escurial", "El Escorial", "El Escorial"], ["Le monastère royal de l'Escurial, palais et nécropole des rois d'Espagne.", "The royal monastery of El Escorial, palace and burial place of the kings of Spain.", "El monasterio real de El Escorial, palacio y panteón de los reyes de España."], "ma3"),
            es.day(3, ["Tolède", "Toledo", "Toledo"], ["Tolède, la ville des trois cultures, sa cathédrale, ses synagogues et les toiles du Greco, et les moulins de la Manche.", "Toledo, the city of three cultures, its cathedral, synagogues and El Greco's paintings, and the windmills of La Mancha.", "Toledo, la ciudad de las tres culturas, su catedral, sus sinagogas y los lienzos del Greco, y los molinos de La Mancha."], "ma4"),
          ]),
        es.chapter(["Salamanque et Ségovie", "Salamanca and Segovia", "Salamanca y Segovia"], ["Les villes de Castille.", "The cities of Castile.", "Las ciudades de Castilla."],
          ["ma6", "ma5", "ma7"],
          [
            es.day(4, ["Ávila – Salamanque", "Ávila – Salamanca", "Ávila – Salamanca"], ["Les remparts médiévaux d'Ávila, puis Salamanque.", "The medieval ramparts of Ávila, then Salamanca.", "Las murallas medievales de Ávila, y Salamanca."], "ma5"),
            es.day(5, ["Salamanque", "Salamanca", "Salamanca"], ["Salamanque, sa Plaza Mayor, ses deux cathédrales et la plus ancienne université d'Espagne, bâties en pierre dorée.", "Salamanca, its Plaza Mayor, its two cathedrals and the oldest university in Spain, built of golden stone.", "Salamanca, su Plaza Mayor, sus dos catedrales y la universidad más antigua de España, construidas en piedra dorada."], "ma6"),
            es.day(6, ["Ségovie – Madrid", "Segovia – Madrid", "Segovia – Madrid"], ["Ségovie, son aqueduc romain, sa cathédrale et l'Alcázar, puis retour à Madrid.", "Segovia, its Roman aqueduct, its cathedral and the Alcázar, then back to Madrid.", "Segovia, su acueducto romano, su catedral y el Alcázar, y regreso a Madrid."], "ma7"),
            es.day(7, MAD, X_MAD, "ma1"),
            es.day(8, T_HOME, home(MAD), "ma2"),
          ]),
      ],
    }),

    // ═════════════ TURQUIE ═════════════
    try_.trip({
      slug: "turquie-istanbul-romantique-4j",
      name: ["Istanbul romantique : un long week-end sur le Bosphore", "Romantic Istanbul: a long weekend on the Bosphorus", "Estambul romántico: un fin de semana largo en el Bósforo"],
      tagline: ["Entre liberté, hammam et croisière, à cheval sur deux continents", "Between free time, hammam and cruise, straddling two continents", "Entre libertad, hammam y crucero, entre dos continentes"],
      description: [
        "Une escapade à deux à Istanbul : Sainte-Sophie et la Mosquée bleue, le Grand Bazar, une croisière sur le Bosphore et une matinée bien-être au hammam. Aussi en formule hôtel seul à Taksim, à partir de 291 € par personne.",
        "A getaway for two in Istanbul: Hagia Sophia and the Blue Mosque, the Grand Bazaar, a cruise on the Bosphorus and a morning of well-being at the hammam. Also as a hotel-only package in Taksim, from €291 per person.",
        "Una escapada en pareja a Estambul: Santa Sofía y la Mezquita Azul, el Gran Bazar, un crucero por el Bósforo y una mañana de bienestar en el hammam. También en fórmula solo hotel en Taksim, desde 291 € por persona.",
      ],
      includes: BREAK(3, ",Croisière sur le Bosphore,Séance de hammam"),
      price: 459, nights: 3, departureFrom: "Bruxelles", image: "is7",
      theme: "relax", feeling: "contentment", travelerTypes: "couples", maxGuests: 2, order: -45996,
      chapters: [
        try_.chapter([IST[0], IST[1], IST[2]], ["Entre Europe et Asie.", "Between Europe and Asia.", "Entre Europa y Asia."],
          ["is1", "is3", "is4", "is5", "is7", "is8"],
          [
            try_.day(1, ...arr(IST), "is1"),
            try_.day(2, ["Istanbul, entre liberté et romantisme", "Istanbul, free time and romance", "Estambul, libertad y romanticismo"], join(X_IST, ["Le soir, croisière sur le Bosphore.", "In the evening, a cruise on the Bosphorus.", "Por la noche, crucero por el Bósforo."]), "is3"),
            try_.day(3, ["Escapade bien-être", "Well-being escape", "Escapada de bienestar"], ["Matinée au hammam, puis le quartier de Beyoğlu, l'avenue İstiklal et son tramway, et la tour de Galata.", "A morning at the hammam, then the Beyoğlu district, İstiklal Avenue and its tram, and the Galata Tower.", "Mañana en el hammam, y el barrio de Beyoğlu, la avenida İstiklal y su tranvía, y la torre de Gálata."], "is2"),
            try_.day(4, T_HOME, home(IST), "is7"),
          ]),
      ],
    }),

    tr.trip({
      slug: "turquie-merveilles-de-la-turquie-cappadoce-pamukkale-ephese-8j",
      name: ["Merveilles de la Turquie : Istanbul, Ankara, la Cappadoce, Pamukkale et Éphèse", "Wonders of Turkey: Istanbul, Ankara, Cappadocia, Pamukkale and Ephesus", "Maravillas de Turquía: Estambul, Ankara, Capadocia, Pamukkale y Éfeso"],
      tagline: ["La grande boucle anatolienne, des cheminées de fée aux vasques blanches", "The great Anatolian loop, from fairy chimneys to white terraces", "El gran circuito anatolio, de las chimeneas de hadas a las terrazas blancas"],
      description: [
        "La Turquie essentielle : Istanbul, Ankara et le mausolée d'Atatürk, deux jours en Cappadoce, Pamukkale et Hiérapolis, puis Éphèse et la côte égéenne. Variantes de 9 jours avec Bursa et une journée de plus à Istanbul (Joyaux de la Turquie) à partir de 781 €, Cap sur la Turquie à partir de 925 €, Charme de la Turquie à partir de 1 036 €, ou avec une semaine en hôtel tout compris 5* (15 jours) à partir de 1 747 € par personne.",
        "Essential Turkey: Istanbul, Ankara and Atatürk's mausoleum, two days in Cappadocia, Pamukkale and Hierapolis, then Ephesus and the Aegean coast. Nine-day variants with Bursa and an extra day in Istanbul (Jewels of Turkey) from €781, Heading for Turkey from €925, Charm of Turkey from €1,036, or with a week in an all-inclusive 5* hotel (15 days) from €1,747 per person.",
        "La Turquía esencial: Estambul, Ankara y el mausoleo de Atatürk, dos días en Capadocia, Pamukkale e Hierápolis, y Éfeso y la costa egea. Variantes de 9 días con Bursa y un día más en Estambul (Joyas de Turquía) desde 781 €, Rumbo a Turquía desde 925 €, Encanto de Turquía desde 1.036 €, o con una semana en hotel todo incluido 5* (15 días) desde 1.747 € por persona.",
      ],
      includes: INC(7),
      price: 766, nights: 7, departureFrom: "Bâle", image: "tu1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 45, order: -45995,
      chapters: [
        tr.chapter(["Istanbul et Ankara", "Istanbul and Ankara", "Estambul y Ankara"], ["Les deux capitales.", "The two capitals.", "Las dos capitales."],
          ["tu3", "tu8", "is8"],
          [
            tr.day(1, ...arr(IST), "tu3"),
            tr.day(2, IST, join(X_IST, X_BOSPHORE), "tu8"),
            tr.day(3, ["Istanbul – Ankara", "Istanbul – Ankara", "Estambul – Ankara"], ["Route vers Ankara, la capitale, et le mausolée d'Atatürk.", "Drive to Ankara, the capital, and Atatürk's mausoleum.", "Carretera hacia Ankara, la capital, y el mausoleo de Atatürk."], "is8"),
          ]),
        tr.chapter(["La Cappadoce et l'Égée", "Cappadocia and the Aegean", "Capadocia y el Egeo"], ["Cheminées de fée, vasques et cités antiques.", "Fairy chimneys, terraces and ancient cities.", "Chimeneas de hadas, terrazas y ciudades antiguas."],
          ["tu1", "tu4", "tu6", "tu2"],
          [
            tr.day(4, ["Ankara – Cappadoce", "Ankara – Cappadocia", "Ankara – Capadocia"], ["Le musée des Civilisations anatoliennes, puis le lac Salé et la Cappadoce.", "The Museum of Anatolian Civilisations, then the Salt Lake and Cappadocia.", "El museo de las Civilizaciones de Anatolia, y el lago Salado y Capadocia."], "tu4"),
            tr.day(5, ["Cappadoce", "Cappadocia", "Capadocia"], X_CAPPA, "tu6"),
            tr.day(6, ["Cappadoce – Pamukkale", "Cappadocia – Pamukkale", "Capadocia – Pamukkale"], join(["Un caravansérail seldjoukide sur la route de la soie, puis", "A Seljuk caravanserai on the Silk Road, then", "Un caravasar selyúcida en la ruta de la seda, y"], [X_PAMU[0].charAt(0).toLowerCase() + X_PAMU[0].slice(1), X_PAMU[1], X_PAMU[2].charAt(0).toLowerCase() + X_PAMU[2].slice(1)]), "tu1"),
            tr.day(7, ["Éphèse – Izmir", "Ephesus – Izmir", "Éfeso – Esmirna"], X_EPHESE, "tu6"),
            tr.day(8, T_HOME, home(["Izmir", "Izmir", "Esmirna"]), "tu2"),
          ]),
      ],
    }),

    // ═════════════ POLOGNE ═════════════
    ply.trip({
      slug: "pologne-cracovie-en-liberte-noel-nouvel-an-4j",
      name: ["Cracovie en liberté : la ville royale, son marché de Noël et son Nouvel An", "Kraków at leisure: the royal city, its Christmas market and its New Year", "Cracovia por libre: la ciudad real, su mercado navideño y su Año Nuevo"],
      tagline: ["Un long week-end à Cracovie, en privatif ou pendant les fêtes", "A long weekend in Kraków, private or during the festive season", "Un fin de semana largo en Cracovia, en privado o durante las fiestas"],
      description: [
        "Une escapade à Cracovie : la place du Marché, le Wawel, Kazimierz et la mine de sel de Wieliczka, en privatif toute l'année. En décembre, le marché de Noël de la place du Marché à partir de 497 €, ou le réveillon et le concert du Nouvel An (5 jours) à partir de 663 € par personne.",
        "A getaway to Kraków: the Market Square, Wawel, Kazimierz and the Wieliczka salt mine, as a private tour all year round. In December, the Christmas market on the Market Square from €497, or New Year's Eve and the New Year concert (5 days) from €663 per person.",
        "Una escapada a Cracovia: la plaza del Mercado, el Wawel, Kazimierz y la mina de sal de Wieliczka, en privado todo el año. En diciembre, el mercado navideño de la plaza del Mercado desde 497 €, o la Nochevieja y el concierto de Año Nuevo (5 días) desde 663 € por persona.",
      ],
      includes: BREAK(3, ",Visite guidée privée de la ville"),
      price: 392, nights: 3, departureFrom: "Bâle", image: "kn2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,solo", maxGuests: 8, order: -45994,
      chapters: [
        ply.chapter([KRK[0], KRK[1], KRK[2]], ["La ville royale.", "The royal city.", "La ciudad real."],
          ["kr2", "kr4", "kr6", "kn1", "kn5", "kn6"],
          [
            ply.day(1, ...arr(KRK), "kr2"),
            ply.day(2, KRK, X_KRK, "kr4"),
            ply.day(3, ["Wieliczka ou journée libre", "Wieliczka or a free day", "Wieliczka o día libre"], join(["Journée libre, ou en option :", "A free day, or as an option:", "Día libre, u opcional:"], X_WIELICZKA), "kn2"),
            ply.day(4, T_HOME, home(KRK), "kr6"),
          ]),
      ],
    }),

    pl.trip({
      slug: "pologne-cap-sur-cracovie-et-les-tatras-5j",
      name: ["Cap sur Cracovie et les Tatras : le Dunajec, Zakopane et Auschwitz", "Heading for Kraków and the Tatras: the Dunajec, Zakopane and Auschwitz", "Rumbo a Cracovia y los Tatras: el Dunajec, Zakopane y Auschwitz"],
      tagline: ["La ville royale et les montagnes du sud, en cinq jours", "The royal city and the southern mountains, in five days", "La ciudad real y las montañas del sur, en cinco días"],
      description: [
        "Cracovie et la montagne : deux jours dans la ville royale, la descente du Dunajec en radeau dans les gorges des Piénines, Zakopane, capitale des Tatras, puis le mémorial d'Auschwitz-Birkenau.",
        "Kraków and the mountains: two days in the royal city, a raft trip down the Dunajec through the Pieniny gorges, Zakopane, capital of the Tatras, then the Auschwitz-Birkenau memorial.",
        "Cracovia y la montaña: dos días en la ciudad real, el descenso del Dunajec en balsa por las gargantas de los Pieninos, Zakopane, capital de los Tatras, y el memorial de Auschwitz-Birkenau.",
      ],
      includes: INC(4),
      price: 1005, nights: 4, departureFrom: "Bâle", image: "ta5",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 40, order: -45993,
      chapters: [
        pl.chapter(["Cracovie et les Tatras", "Kraków and the Tatras", "Cracovia y los Tatras"], ["Ville royale et montagnes.", "Royal city and mountains.", "Ciudad real y montañas."],
          ["ta2", "ta3", "ta5", "ta1", "ta6", "ta7"],
          [
            pl.day(1, ...arr(KRK), "ta7"),
            pl.day(2, KRK, X_KRK, "ta2"),
            pl.day(3, ["Dunajec – Zakopane", "Dunajec – Zakopane", "Dunajec – Zakopane"], ["Descente du Dunajec en radeau de bois dans les gorges des Piénines, puis Zakopane, ses chalets en bois et les sommets des Tatras.", "A wooden raft trip down the Dunajec through the Pieniny gorges, then Zakopane, its wooden chalets and the Tatra peaks.", "Descenso del Dunajec en balsa de madera por las gargantas de los Pieninos, y Zakopane, sus chalés de madera y las cumbres de los Tatras."], "ta5"),
            pl.day(4, ["Auschwitz – Cracovie", "Auschwitz – Kraków", "Auschwitz – Cracovia"], X_AUSCH, "ta3"),
            pl.day(5, T_HOME, home(KRK), "ta6"),
          ]),
      ],
    }),

    ply.trip({
      slug: "pologne-de-varsovie-a-cracovie-privatif-6j",
      name: ["De Varsovie à Cracovie en privatif : les deux capitales de la Pologne", "From Warsaw to Kraków, private tour: Poland's two capitals", "De Varsovia a Cracovia en privado: las dos capitales de Polonia"],
      tagline: ["Votre guide privé, et le train entre la capitale moderne et la ville royale", "Your private guide, and the train between the modern capital and the royal city", "Su guía privado, y el tren entre la capital moderna y la ciudad real"],
      description: [
        "Un circuit privatif : deux jours à Varsovie, sa vieille ville reconstruite et le parc Łazienki, puis le train vers Cracovie et trois jours dans la ville royale, avec Wieliczka ou Auschwitz en option.",
        "A private tour: two days in Warsaw, its rebuilt old town and Łazienki Park, then the train to Kraków and three days in the royal city, with Wieliczka or Auschwitz as options.",
        "Un circuito privado: dos días en Varsovia, su casco antiguo reconstruido y el parque Łazienki, y el tren a Cracovia y tres días en la ciudad real, con Wieliczka o Auschwitz opcionales.",
      ],
      includes: ["Vols depuis la France,Transferts privés,5 nuits en hôtels 4*,Train Varsovie – Cracovie,Visites guidées privées", "Flights from France,Private transfers,5 nights in 4* hotels,Warsaw – Kraków train,Private guided visits", "Vuelos desde Francia,Traslados privados,5 noches en hoteles de 4*,Tren Varsovia – Cracovia,Visitas guiadas privadas"],
      price: 755, nights: 5, departureFrom: "Bruxelles", image: "vc1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family", maxGuests: 8, order: -45992,
      chapters: [
        ply.chapter([WAW[0], WAW[1], WAW[2]], ["La capitale.", "The capital.", "La capital."],
          ["vc1", "vc4"],
          [ply.day(1, ...arr(WAW), "vc4"), ply.day(2, WAW, X_WAW, "vc1")]),
        ply.chapter([KRK[0], KRK[1], KRK[2]], ["La ville royale.", "The royal city.", "La ciudad real."],
          ["vc2", "vc3", "vc5", "vc6"],
          [
            ply.day(3, ["Varsovie – Cracovie", "Warsaw – Kraków", "Varsovia – Cracovia"], ["Train vers Cracovie et premiers pas sur la place du Marché.", "Train to Kraków and first steps on the Market Square.", "Tren a Cracovia y primeros pasos por la plaza del Mercado."], "vc5"),
            ply.day(4, KRK, X_KRK, "vc3"),
            ply.day(5, KRK, ["Journée libre, ou en option la mine de sel de Wieliczka ou le mémorial d'Auschwitz-Birkenau.", "A free day, or optionally the Wieliczka salt mine or the Auschwitz-Birkenau memorial.", "Día libre, u opcional la mina de sal de Wieliczka o el memorial de Auschwitz-Birkenau."], "vc2"),
            ply.day(6, T_HOME, home(KRK), "vc6"),
          ]),
      ],
    }),

    pl.trip({
      slug: "pologne-merveilles-de-la-pologne-cracovie-gdansk-varsovie-8j",
      name: ["Merveilles de la Pologne : Cracovie, Wieliczka, Auschwitz, Gdańsk, Malbork et Varsovie", "Wonders of Poland: Kraków, Wieliczka, Auschwitz, Gdańsk, Malbork and Warsaw", "Maravillas de Polonia: Cracovia, Wieliczka, Auschwitz, Gdansk, Malbork y Varsovia"],
      tagline: ["Du sud royal à la Baltique hanséatique", "From the royal south to the Hanseatic Baltic", "Del sur real al Báltico hanseático"],
      description: [
        "La Pologne en une semaine : Cracovie, la mine de sel de Wieliczka, Auschwitz-Birkenau, deux jours à Gdańsk sur la Baltique, le château teutonique de Malbork, puis Varsovie.",
        "Poland in a week: Kraków, the Wieliczka salt mine, Auschwitz-Birkenau, two days in Gdańsk on the Baltic, the Teutonic castle of Malbork, then Warsaw.",
        "Polonia en una semana: Cracovia, la mina de sal de Wieliczka, Auschwitz-Birkenau, dos días en Gdansk en el Báltico, el castillo teutónico de Malbork, y Varsovia.",
      ],
      includes: INC(7),
      price: 1264, nights: 7, departureFrom: "Paris", image: "mp2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -45991,
      chapters: [
        pl.chapter([KRK[0], KRK[1], KRK[2]], ["La ville royale et ses environs.", "The royal city and its surroundings.", "La ciudad real y sus alrededores."],
          ["mp5", "mp6", "ta4"],
          [
            pl.day(1, ...arr(KRK), "mp5"),
            pl.day(2, ["Cracovie – Wieliczka", "Kraków – Wieliczka", "Cracovia – Wieliczka"], join(X_KRK, X_WIELICZKA), "ta4"),
            pl.day(3, ["Auschwitz", "Auschwitz", "Auschwitz"], X_AUSCH, "mp6"),
          ]),
        pl.chapter(["Gdańsk et Varsovie", "Gdańsk and Warsaw", "Gdansk y Varsovia"], ["La Baltique et la capitale.", "The Baltic and the capital.", "El Báltico y la capital."],
          ["mp2", "mp4", "mp3", "mp1"],
          [
            pl.day(4, ["Cracovie – Gdańsk", "Kraków – Gdańsk", "Cracovia – Gdansk"], ["Train ou vol vers Gdańsk, sur la Baltique.", "Train or flight to Gdańsk, on the Baltic.", "Tren o vuelo a Gdansk, en el Báltico."], "mp4"),
            pl.day(5, ["Gdańsk", "Gdańsk", "Gdansk"], X_GDANSK, "mp2"),
            pl.day(6, ["Malbork – Varsovie", "Malbork – Warsaw", "Malbork – Varsovia"], X_MALBORK, "mp3"),
            pl.day(7, WAW, X_WAW, "mp1"),
            pl.day(8, T_HOME, home(WAW), "mp1"),
          ]),
      ],
    }),

    pl.trip({
      slug: "pologne-cap-sur-la-pologne-gdansk-torun-wroclaw-cracovie-8j",
      name: ["Cap sur la Pologne : Varsovie, Gdańsk, Toruń, Poznań, Wrocław et Cracovie", "Heading for Poland: Warsaw, Gdańsk, Toruń, Poznań, Wrocław and Kraków", "Rumbo a Polonia: Varsovia, Gdansk, Toruń, Poznań, Breslavia y Cracovia"],
      tagline: ["Le grand tour des villes polonaises", "The grand tour of Polish cities", "La gran vuelta por las ciudades polacas"],
      description: [
        "La Pologne d'une ville à l'autre : Varsovie, Malbork et Gdańsk, Toruń, ville natale de Copernic, Poznań, Wrocław et ses îles, Auschwitz, Cracovie et Wieliczka, avant le retour à Varsovie.",
        "Poland from city to city: Warsaw, Malbork and Gdańsk, Toruń, Copernicus' birthplace, Poznań, Wrocław and its islands, Auschwitz, Kraków and Wieliczka, before returning to Warsaw.",
        "Polonia de ciudad en ciudad: Varsovia, Malbork y Gdansk, Toruń, ciudad natal de Copérnico, Poznań, Breslavia y sus islas, Auschwitz, Cracovia y Wieliczka, antes del regreso a Varsovia.",
      ],
      includes: INC(7),
      price: 1378, nights: 7, departureFrom: "Bruxelles", image: "cp2",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 40, order: -45990,
      chapters: [
        pl.chapter(["Varsovie, Gdańsk et Toruń", "Warsaw, Gdańsk and Toruń", "Varsovia, Gdansk y Toruń"], ["Le nord.", "The north.", "El norte."],
          ["cp6", "cp2", "cp5"],
          [
            pl.day(1, ...arr(WAW), "cp6"),
            pl.day(2, ["Varsovie – Malbork – Gdańsk", "Warsaw – Malbork – Gdańsk", "Varsovia – Malbork – Gdansk"], X_MALBORK, "mp3"),
            pl.day(3, ["Gdańsk – Toruń", "Gdańsk – Toruń", "Gdansk – Toruń"], join(X_GDANSK, ["Puis Toruń, ville gothique natale de Copernic et de son pain d'épices.", "Then Toruń, a Gothic town, birthplace of Copernicus and of its gingerbread.", "Y Toruń, ciudad gótica natal de Copérnico y de su pan de jengibre."]), "cp2"),
            pl.day(4, ["Poznań – Wrocław", "Poznań – Wrocław", "Poznań – Breslavia"], ["Poznań et son hôtel de ville Renaissance, puis Wrocław, ville aux cent ponts et à ses nains de bronze.", "Poznań and its Renaissance town hall, then Wrocław, the city of a hundred bridges and its bronze dwarves.", "Poznań y su ayuntamiento renacentista, y Breslavia, ciudad de los cien puentes y sus enanos de bronce."], "cp5"),
          ]),
        pl.chapter(["Cracovie", "Kraków", "Cracovia"], ["Le sud royal.", "The royal south.", "El sur real."],
          ["cp1", "cp4", "cp3"],
          [
            pl.day(5, ["Auschwitz – Cracovie", "Auschwitz – Kraków", "Auschwitz – Cracovia"], X_AUSCH, "cp3"),
            pl.day(6, ["Cracovie – Wieliczka", "Kraków – Wieliczka", "Cracovia – Wieliczka"], join(X_KRK, X_WIELICZKA), "cp1"),
            pl.day(7, ["Cracovie – Varsovie", "Kraków – Warsaw", "Cracovia – Varsovia"], ["Retour vers Varsovie et sa vieille ville.", "Back to Warsaw and its old town.", "Regreso a Varsovia y su casco antiguo."], "cp4"),
            pl.day(8, T_HOME, home(WAW), "cp6"),
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
