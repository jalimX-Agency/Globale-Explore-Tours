// New destinations Armenia, Albania, Bulgaria and Romania, with their 6 Voyamar journey trips.
// Prices are per-person "from" prices; supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-armenie-albanie-bulgarie-roumanie-circuits.ts
// Requires scripts/upload-images-bk-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "armenie-magie-de-l-armenie-erevan-tatev-sevan-8j": ["408598", "146958"],
  "armenie-merveilles-de-l-armenie-et-de-la-georgie-12j": ["151658"],
  "albanie-essentiel-de-l-albanie-butrint-gjirokaster-berat-8j": ["415098"],
  "albanie-souffle-de-l-albanie-shkodra-riviera-korca-kruja-8j": ["422198"],
  "bulgarie-magie-de-la-bulgarie-plovdiv-rila-nessebar-8j": ["97258"],
  "roumanie-cap-sur-la-roumanie-transylvanie-bucovine-8j": ["330119"],
};

const T_HOME: L3 = ["Retour en France", "Back to France", "Regreso a Francia"];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const home = (city: L3): L3 => [`Transfert à l'aéroport de ${city[0]} et envol pour la France.`, `Transfer to ${city[1]} airport and fly to France.`, `Traslado al aeropuerto de ${city[2]} y vuelo a Francia.`];
const EVN: L3 = ["Erevan", "Yerevan", "Ereván"];
const TIA: L3 = ["Tirana", "Tirana", "Tirana"];

const X_GARNI: L3 = ["Le temple gréco-romain de Garni au-dessus de ses gorges basaltiques, puis le monastère de Géghard, en partie creusé dans la roche.", "The Greco-Roman temple of Garni above its basalt gorge, then Geghard monastery, partly carved into the rock.", "El templo grecorromano de Garni sobre su garganta de basalto, y el monasterio de Geghard, en parte excavado en la roca."];
const X_KHOR: L3 = ["Le monastère de Khor Virap face au mont Ararat, les caves à vin d'Areni et le monastère de Noravank niché dans ses gorges rouges.", "Khor Virap monastery facing Mount Ararat, the wine caves of Areni and Noravank monastery nestled in its red gorge.", "El monasterio de Khor Virap frente al monte Ararat, las bodegas de Areni y el monasterio de Noravank enclavado en su garganta roja."];
const X_TATEV: L3 = ["Le téléphérique le plus long du monde jusqu'au monastère de Tatev, perché au bord d'un canyon.", "The world's longest cable car up to Tatev monastery, perched on the edge of a canyon.", "El teleférico más largo del mundo hasta el monasterio de Tatev, encaramado al borde de un cañón."];
const X_BUTRINT: L3 = ["Le col de Llogara et la Riviera albanaise, puis le site antique de Butrint classé par l'Unesco, face à Corfou.", "The Llogara pass and the Albanian Riviera, then the UNESCO-listed ancient site of Butrint, facing Corfu.", "El paso de Llogara y la Riviera albanesa, y el sitio antiguo de Butrinto declarado por la Unesco, frente a Corfú."];
const X_GJIRO: L3 = ["Gjirokastër, la « ville de pierre », ses maisons-forteresses ottomanes et son château.", "Gjirokastër, the 'city of stone', its Ottoman tower-houses and castle.", "Gjirokastër, la «ciudad de piedra», sus casas-fortaleza otomanas y su castillo."];
const X_BERAT: L3 = ["Berat, la « ville aux mille fenêtres », ses maisons blanches étagées sur la colline et sa citadelle.", "Berat, the 'city of a thousand windows', its white houses stacked on the hillside and its citadel.", "Berat, la «ciudad de las mil ventanas», sus casas blancas escalonadas en la colina y su ciudadela."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { buildDestinations } = await import("./lib/newDestination");
  const R2 = process.env.NEXT_PUBLIC_R2_URL!;
  const J = (k: string) => `${R2}/journeys/bk-${k}.jpg`;
  const H = (n: number) => `${R2}/team/headshot-${String(n).padStart(2, "0")}.jpg`;
  const L = (n: number) => `${R2}/blocks/loved-${String(n).padStart(2, "0")}.jpg`;
  const EUROPE = { slug: "europe", name: ["Europe", "Europe", "Europa"] as L3 };
  const SPRING: L3 = ["D'avril à juin et de septembre à octobre, quand il fait doux pour visiter les sites et les villages.", "April to June and September to October, when it's mild for visiting the sites and villages.", "De abril a junio y de septiembre a octubre, cuando hace un tiempo suave para visitar los sitios y los pueblos."];
  const q = (n: L3): L3 => [`Quelle est la meilleure période pour visiter ${n[0]} ?`, `What's the best time to visit ${n[1]}?`, `¿Cuál es la mejor época para visitar ${n[2]}?`];

  const newDestinations = await buildDestinations([
    {
      slug: "armenie", name: ["Arménie", "Armenia", "Armenia"], nameIn: "en Arménie", region: EUROPE,
      description: ["Des monastères de pierre accrochés aux montagnes, le mont Ararat à l'horizon et le premier pays chrétien du monde.", "Stone monasteries clinging to the mountains, Mount Ararat on the horizon and the world's first Christian country.", "Monasterios de piedra colgados de las montañas, el monte Ararat en el horizonte y el primer país cristiano del mundo."],
      descriptionMore: ["D'Erevan au lac Sevan, nos circuits relient les grands monastères, les caves à vin et les villages du Caucase, seuls ou avec la Géorgie voisine.", "From Yerevan to Lake Sevan, our tours link the great monasteries, the wine caves and the villages of the Caucasus, alone or with neighbouring Georgia.", "De Ereván al lago Sevan, nuestros circuitos unen los grandes monasterios, las bodegas y los pueblos del Cáucaso, solos o con la vecina Georgia."],
      heroImage: J("am7"), order: 118,
      seeAndDo: [
        { title: ["Le monastère de Tatev", "Tatev monastery", "El monasterio de Tatev"], description: ["Un monastère du IXe siècle au bord d'un précipice, rejoint par le plus long téléphérique du monde.", "A 9th-century monastery on the edge of a precipice, reached by the world's longest cable car.", "Un monasterio del siglo IX al borde de un precipicio, al que se llega con el teleférico más largo del mundo."], image: J("am2") },
        { title: ["Khor Virap et l'Ararat", "Khor Virap and Ararat", "Khor Virap y el Ararat"], description: ["Le monastère de Khor Virap et la vue sur le mont Ararat enneigé, symbole du pays.", "Khor Virap monastery and the view of snowy Mount Ararat, the country's symbol.", "El monasterio de Khor Virap y la vista del nevado monte Ararat, símbolo del país."], image: J("am7") },
      ],
      bestOf: [
        { title: ["Erevan", "Yerevan", "Ereván"], description: ["La ville rose, sa Cascade et le Matenadaran.", "The pink city, its Cascade and the Matenadaran.", "La ciudad rosa, su Cascada y el Matenadaran."], image: J("am6") },
        { title: ["Le lac Sevan", "Lake Sevan", "El lago Sevan"], description: ["Le « joyau bleu » de l'Arménie et son monastère sur la presqu'île.", "Armenia's 'blue jewel' and its monastery on the peninsula.", "La «joya azul» de Armenia y su monasterio en la península."], image: J("am5") },
      ],
      lovedImages: [L(5), L(6), L(7)],
      bestTime: { question: q(["l'Arménie", "Armenia", "Armenia"]), answer: SPRING },
      team: [{ name: "Anahit", photo: H(3) }, { name: "Armen", photo: H(4) }],
    },
    {
      slug: "albanie", name: ["Albanie", "Albania", "Albania"], nameIn: "en Albanie", region: EUROPE,
      description: ["Une riviera aux eaux turquoise, des villes ottomanes classées par l'Unesco et des sites antiques : le secret le mieux gardé des Balkans.", "A riviera with turquoise waters, UNESCO-listed Ottoman towns and ancient sites: the best-kept secret of the Balkans.", "Una riviera de aguas turquesa, ciudades otomanas declaradas por la Unesco y sitios antiguos: el secreto mejor guardado de los Balcanes."],
      descriptionMore: ["De Tirana à Butrint, nous suivons la côte puis les montagnes, entre Berat, Gjirokastër et les villages du sud.", "From Tirana to Butrint, we follow the coast and then the mountains, between Berat, Gjirokastër and the southern villages.", "De Tirana a Butrinto, seguimos la costa y luego las montañas, entre Berat, Gjirokastër y los pueblos del sur."],
      heroImage: J("sa2"), order: 119,
      seeAndDo: [
        { title: ["Butrint", "Butrint", "Butrinto"], description: ["Une cité grecque, romaine puis vénitienne au milieu d'une lagune, face à Corfou.", "A Greek, Roman and then Venetian city in the middle of a lagoon, facing Corfu.", "Una ciudad griega, romana y luego veneciana en medio de una laguna, frente a Corfú."], image: J("ea4") },
        { title: ["La Riviera albanaise", "The Albanian Riviera", "La Riviera albanesa"], description: ["Des criques aux eaux cristallines au pied des montagnes, de Vlorë à Saranda.", "Coves of crystal-clear water at the foot of the mountains, from Vlorë to Saranda.", "Calas de aguas cristalinas al pie de las montañas, de Vlorë a Saranda."], image: J("ea7") },
      ],
      bestOf: [
        { title: ["Berat", "Berat", "Berat"], description: ["La ville aux mille fenêtres.", "The city of a thousand windows.", "La ciudad de las mil ventanas."], image: J("sa2") },
        { title: ["Gjirokastër", "Gjirokastër", "Gjirokastër"], description: ["La ville de pierre et son château.", "The city of stone and its castle.", "La ciudad de piedra y su castillo."], image: J("sa6") },
      ],
      lovedImages: [L(8), L(9), L(10)],
      bestTime: { question: q(["l'Albanie", "Albania", "Albania"]), answer: ["De mai à octobre, pour la mer en été et les visites au printemps et en automne.", "May to October, for the sea in summer and sightseeing in spring and autumn.", "De mayo a octubre, para el mar en verano y las visitas en primavera y otoño."] },
      team: [{ name: "Elira", photo: H(5) }, { name: "Arben", photo: H(6) }],
    },
    {
      slug: "bulgarie", name: ["Bulgarie", "Bulgaria", "Bulgaria"], nameIn: "en Bulgarie", region: EUROPE,
      description: ["Monastères peints, villes antiques, roses de Kazanlak et plages de la mer Noire : la Bulgarie, carrefour de Thraces, de Romains et de Byzantins.", "Painted monasteries, ancient towns, the roses of Kazanlak and Black Sea beaches: Bulgaria, crossroads of Thracians, Romans and Byzantines.", "Monasterios pintados, ciudades antiguas, rosas de Kazanlak y playas del mar Negro: Bulgaria, encrucijada de tracios, romanos y bizantinos."],
      descriptionMore: ["Notre circuit fait le tour du pays, de Sofia à la mer Noire et retour par Plovdiv et le monastère de Rila.", "Our tour goes round the country, from Sofia to the Black Sea and back via Plovdiv and Rila monastery.", "Nuestro circuito recorre el país, de Sofía al mar Negro y regreso por Plovdiv y el monasterio de Rila."],
      heroImage: J("bg4"), order: 120,
      seeAndDo: [
        { title: ["Le monastère de Rila", "Rila monastery", "El monasterio de Rila"], description: ["Le plus grand monastère orthodoxe du pays, ses arcades rayées et ses fresques, au cœur des montagnes.", "The country's largest Orthodox monastery, its striped arcades and frescoes, deep in the mountains.", "El mayor monasterio ortodoxo del país, sus arcadas rayadas y sus frescos, en el corazón de las montañas."], image: J("bg4") },
        { title: ["Nessebar", "Nessebar", "Nesebar"], description: ["Une presqu'île de la mer Noire et ses églises byzantines de brique et de pierre.", "A Black Sea peninsula and its Byzantine churches of brick and stone.", "Una península del mar Negro y sus iglesias bizantinas de ladrillo y piedra."], image: J("bg1") },
      ],
      bestOf: [
        { title: ["Plovdiv", "Plovdiv", "Plovdiv"], description: ["La vieille ville et son théâtre romain.", "The old town and its Roman theatre.", "La ciudad vieja y su teatro romano."], image: J("bg5") },
        { title: ["Sofia", "Sofia", "Sofía"], description: ["La cathédrale Alexandre-Nevski et ses coupoles dorées.", "The Alexander Nevsky Cathedral and its golden domes.", "La catedral Alejandro Nevski y sus cúpulas doradas."], image: J("bg6") },
      ],
      lovedImages: [L(11), L(12), L(13)],
      bestTime: { question: q(["la Bulgarie", "Bulgaria", "Bulgaria"]), answer: ["De mai à septembre ; fin mai et début juin pour la récolte des roses de Kazanlak.", "May to September; late May and early June for the Kazanlak rose harvest.", "De mayo a septiembre; finales de mayo y principios de junio para la cosecha de rosas de Kazanlak."] },
      team: [{ name: "Elena", photo: H(7) }, { name: "Nikolay", photo: H(8) }],
    },
    {
      slug: "roumanie", name: ["Roumanie", "Romania", "Rumanía"], nameIn: "en Roumanie", region: EUROPE,
      description: ["Les châteaux de Transylvanie, les monastères peints de Bucovine et les citadelles saxonnes, dans les forêts des Carpates.", "The castles of Transylvania, the painted monasteries of Bucovina and the Saxon citadels, in the forests of the Carpathians.", "Los castillos de Transilvania, los monasterios pintados de Bucovina y las ciudadelas sajonas, en los bosques de los Cárpatos."],
      descriptionMore: ["En petit groupe, nous traversons les Carpates de Bucarest à la Bucovine, en passant par Sibiu, Sighișoara, Brașov et le château de Bran.", "In a small group, we cross the Carpathians from Bucharest to Bucovina, via Sibiu, Sighișoara, Brașov and Bran castle.", "En grupo reducido, cruzamos los Cárpatos de Bucarest a Bucovina, pasando por Sibiu, Sighișoara, Brașov y el castillo de Bran."],
      heroImage: J("ro5"), order: 121,
      seeAndDo: [
        { title: ["Les monastères de Bucovine", "The monasteries of Bucovina", "Los monasterios de Bucovina"], description: ["Des églises entièrement couvertes de fresques extérieures, dont le bleu de Voroneț.", "Churches entirely covered with outside frescoes, including the blue of Voroneț.", "Iglesias completamente cubiertas de frescos exteriores, como el azul de Voroneț."], image: J("ro4") },
        { title: ["Le château de Bran", "Bran castle", "El castillo de Bran"], description: ["La forteresse perchée qui inspira la légende de Dracula.", "The perched fortress that inspired the Dracula legend.", "La fortaleza encaramada que inspiró la leyenda de Drácula."], image: J("ro5") },
      ],
      bestOf: [
        { title: ["Sibiu", "Sibiu", "Sibiu"], description: ["La ville saxonne aux toits « à yeux ».", "The Saxon town with 'eyed' roofs.", "La ciudad sajona de tejados «con ojos»."], image: J("ro2") },
        { title: ["Brașov", "Brașov", "Brașov"], description: ["L'Église noire et ses ruelles colorées.", "The Black Church and its colourful lanes.", "La Iglesia Negra y sus coloridas callejuelas."], image: J("ro3") },
      ],
      lovedImages: [L(14), L(15), L(16)],
      bestTime: { question: q(["la Roumanie", "Romania", "Rumanía"]), answer: SPRING },
      team: [{ name: "Ioana", photo: H(9) }, { name: "Andrei", photo: H(10) }],
    },
  ]);

  const SUN = { label: ["Avril à octobre", "April to October", "Abril a octubre"] as L3, months: "april,may,june,july,august,september,october" };
  const am = circuitBuilders({ destinationSlug: "armenie", imagePrefix: "bk", season: SUN });
  const al = circuitBuilders({ destinationSlug: "albanie", imagePrefix: "bk", season: SUN });
  const bg = circuitBuilders({ destinationSlug: "bulgarie", imagePrefix: "bk", season: SUN });
  const ro = circuitBuilders({ destinationSlug: "roumanie", imagePrefix: "bk", season: SUN });
  const INC = (n: number, max: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtels 3* et 4*,Transport en minibus ou autocar,Visites du programme,Guide francophone,Groupe de ${max} personnes au plus${extra}`,
    `Flights from France,Transfers,${n} nights in 3* and 4* hotels,Transport by minibus or coach,Visits in the programme,French-speaking guide,Group of ${max} at most${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hoteles de 3* y 4*,Transporte en minibús o autocar,Visitas del programa,Guía francófono,Grupo de ${max} personas como máximo${extra}`,
  ];

  const journeyTrips = [
    am.trip({
      slug: "armenie-magie-de-l-armenie-erevan-tatev-sevan-8j",
      name: ["Magie de l'Arménie : Erevan, Garni, Noravank, Tatev, le lac Sevan et Gyumri", "Magic of Armenia: Yerevan, Garni, Noravank, Tatev, Lake Sevan and Gyumri", "Magia de Armenia: Ereván, Garni, Noravank, Tatev, el lago Sevan y Gyumri"],
      tagline: ["Les monastères du Caucase en une semaine, en groupe de 20 au plus", "The monasteries of the Caucasus in a week, in a group of 20 at most", "Los monasterios del Cáucaso en una semana, en grupo de 20 como máximo"],
      description: [
        "L'Arménie en une semaine : Erevan et Etchmiadzine, Garni et Géghard, le Matenadaran, Khor Virap, Areni et Noravank, le téléphérique de Tatev, le caravansérail de Selim et le cimetière de khatchkars de Noratous, Dilijan, les monastères de Sanahin et Haghpat, puis Gyumri. En privatif à partir de 2 101 € par personne.",
        "Armenia in a week: Yerevan and Etchmiadzin, Garni and Geghard, the Matenadaran, Khor Virap, Areni and Noravank, the Tatev cable car, the Selim caravanserai and the khachkar cemetery of Noratus, Dilijan, the Sanahin and Haghpat monasteries, then Gyumri. As a private tour from €2,101 per person.",
        "Armenia en una semana: Ereván y Echmiadzín, Garni y Geghard, el Matenadaran, Khor Virap, Areni y Noravank, el teleférico de Tatev, el caravasar de Selim y el cementerio de jachkares de Noratus, Dilijan, los monasterios de Sanahin y Haghpat, y Gyumri. En privado desde 2.101 € por persona.",
      ],
      includes: INC(7, 20),
      price: 1699, nights: 7, departureFrom: "Lyon", image: "am7",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 20, order: -41000,
      chapters: [
        am.chapter(["Erevan et l'Ararat", "Yerevan and Ararat", "Ereván y el Ararat"], ["La capitale et les grands monastères.", "The capital and the great monasteries.", "La capital y los grandes monasterios."],
          ["am6", "am1", "am7", "am4"],
          [
            am.day(1, ...arr(EVN), "am4"),
            am.day(2, ["Etchmiadzine", "Etchmiadzin", "Echmiadzín"], ["Etchmiadzine, siège de l'Église apostolique arménienne, et les ruines de la cathédrale de Zvartnots.", "Etchmiadzin, seat of the Armenian Apostolic Church, and the ruins of Zvartnots cathedral.", "Echmiadzín, sede de la Iglesia apostólica armenia, y las ruinas de la catedral de Zvartnots."], "am1"),
            am.day(3, ["Garni – Géghard – Matenadaran", "Garni – Geghard – Matenadaran", "Garni – Geghard – Matenadaran"], [`${X_GARNI[0]} Le Matenadaran et ses manuscrits enluminés.`, `${X_GARNI[1]} The Matenadaran and its illuminated manuscripts.`, `${X_GARNI[2]} El Matenadaran y sus manuscritos iluminados.`], "am6"),
            am.day(4, ["Khor Virap – Areni – Noravank – Goris", "Khor Virap – Areni – Noravank – Goris", "Khor Virap – Areni – Noravank – Goris"], X_KHOR, "am7"),
          ]),
        am.chapter(["Le sud et le nord", "The south and the north", "El sur y el norte"], ["Tatev, Sevan et Haghpat.", "Tatev, Sevan and Haghpat.", "Tatev, Sevan y Haghpat."],
          ["am2", "am5", "am3"],
          [
            am.day(5, ["Tatev – Selim – Noratous", "Tatev – Selim – Noratus", "Tatev – Selim – Noratus"], [`${X_TATEV[0]} Puis le caravansérail de Selim et les khatchkars de Noratous près du lac Sevan.`, `${X_TATEV[1]} Then the Selim caravanserai and the khachkars of Noratus near Lake Sevan.`, `${X_TATEV[2]} Y el caravasar de Selim y los jachkares de Noratus cerca del lago Sevan.`], "am2"),
            am.day(6, ["Dilijan – Sanahin – Haghpat", "Dilijan – Sanahin – Haghpat", "Dilijan – Sanahin – Haghpat"], ["Le lac Sevan, Dilijan, la « Suisse arménienne », puis les monastères de Sanahin et Haghpat classés par l'Unesco.", "Lake Sevan, Dilijan, the 'Armenian Switzerland', then the UNESCO-listed monasteries of Sanahin and Haghpat.", "El lago Sevan, Dilijan, la «Suiza armenia», y los monasterios de Sanahin y Haghpat declarados por la Unesco."], "am5"),
            am.day(7, ["Gyumri – Erevan", "Gyumri – Yerevan", "Gyumri – Ereván"], ["Gyumri, deuxième ville du pays, et le musée Dzitoghtsyan, puis retour à Erevan.", "Gyumri, the country's second city, and the Dzitoghtsyan museum, then back to Yerevan.", "Gyumri, segunda ciudad del país, y el museo Dzitoghtsyan, y regreso a Ereván."], "am3"),
            am.day(8, T_HOME, home(EVN), "am7"),
          ]),
      ],
    }),

    am.trip({
      slug: "armenie-merveilles-de-l-armenie-et-de-la-georgie-12j",
      name: ["Merveilles de l'Arménie et de la Géorgie : Erevan, Tatev, Sevan, Tbilissi et le Kazbek", "Wonders of Armenia and Georgia: Yerevan, Tatev, Sevan, Tbilisi and Kazbek", "Maravillas de Armenia y Georgia: Ereván, Tatev, Sevan, Tiflis y el Kazbek"],
      tagline: ["Les deux pays du Caucase en douze jours, à douze voyageurs au plus", "The two Caucasus countries in twelve days, with twelve travellers at most", "Los dos países del Cáucaso en doce días, con doce viajeros como máximo"],
      description: [
        "Un combiné Arménie–Géorgie en petit groupe : Erevan, Garni et Géghard, Khor Virap et Noravank, Tatev et le site mégalithique de Zorats Karer, le lac Sevan, Haghpat et Akhtala, puis Tbilissi, la Kakhétie et ses vignobles, la route militaire et le Kazbek, Ouplistsikhé et Mtskheta.",
        "An Armenia–Georgia combination in a small group: Yerevan, Garni and Geghard, Khor Virap and Noravank, Tatev and the megalithic site of Zorats Karer, Lake Sevan, Haghpat and Akhtala, then Tbilisi, Kakheti and its vineyards, the Military Road and Kazbek, Uplistsikhe and Mtskheta.",
        "Un combinado Armenia–Georgia en grupo reducido: Ereván, Garni y Geghard, Khor Virap y Noravank, Tatev y el sitio megalítico de Zorats Karer, el lago Sevan, Haghpat y Akhtala, y Tiflis, Kajetia y sus viñedos, la carretera militar y el Kazbek, Uplistsije y Mtsjeta.",
      ],
      includes: INC(11, 12),
      price: 2743, nights: 11, departureFrom: "Genève", image: "ag6",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -40999,
      chapters: [
        am.chapter(["L'Arménie", "Armenia", "Armenia"], ["Monastères et montagnes.", "Monasteries and mountains.", "Monasterios y montañas."],
          ["ag2", "ag5", "am2", "am5"],
          [
            am.day(1, ...arr(EVN), "ag2"),
            am.day(2, ["Garni – Géghard", "Garni – Geghard", "Garni – Geghard"], X_GARNI, "am1"),
            am.day(3, ["Khor Virap – Areni – Noravank – Goris", "Khor Virap – Areni – Noravank – Goris", "Khor Virap – Areni – Noravank – Goris"], X_KHOR, "ag5"),
            am.day(4, ["Khndzoresk – Tatev – Zorats Karer", "Khndzoresk – Tatev – Zorats Karer", "Khndzoresk – Tatev – Zorats Karer"], [`Le village troglodyte de Khndzoresk. ${X_TATEV[0]} Puis Zorats Karer, le « Stonehenge arménien ».`, `The cave village of Khndzoresk. ${X_TATEV[1]} Then Zorats Karer, the 'Armenian Stonehenge'.`, `El pueblo troglodita de Khndzoresk. ${X_TATEV[2]} Y Zorats Karer, el «Stonehenge armenio».`], "am2"),
            am.day(5, ["Orbelian – Noratous – lac Sevan – Dilijan", "Orbelian – Noratus – Lake Sevan – Dilijan", "Orbelian – Noratus – lago Sevan – Dilijan"], ["Le caravansérail d'Orbelian sur la route de la soie, les khatchkars de Noratous et le lac Sevan.", "The Orbelian caravanserai on the Silk Road, the khachkars of Noratus and Lake Sevan.", "El caravasar de Orbelian en la ruta de la seda, los jachkares de Noratus y el lago Sevan."], "am5"),
            am.day(6, ["Haghpat – Akhtala – Tbilissi", "Haghpat – Akhtala – Tbilisi", "Haghpat – Akhtala – Tiflis"], ["Les monastères de Haghpat et d'Akhtala, puis le passage en Géorgie et Tbilissi.", "The Haghpat and Akhtala monasteries, then the crossing into Georgia and Tbilisi.", "Los monasterios de Haghpat y Akhtala, y el paso a Georgia y Tiflis."], "ag1"),
          ]),
        am.chapter(["La Géorgie", "Georgia", "Georgia"], ["Tbilissi, la Kakhétie et le Grand Caucase.", "Tbilisi, Kakheti and the Greater Caucasus.", "Tiflis, Kajetia y el Gran Cáucaso."],
          ["ag1", "ag4", "ag7", "ag6", "ag3"],
          [
            am.day(7, ["Tbilissi", "Tbilisi", "Tiflis"], ["Tbilissi, sa vieille ville, ses bains de soufre et la forteresse de Narikala.", "Tbilisi, its old town, sulphur baths and Narikala fortress.", "Tiflis, su ciudad vieja, sus baños de azufre y la fortaleza de Narikala."], "ag1"),
            am.day(8, ["Kakhétie – Sighnaghi – Telavi", "Kakheti – Sighnaghi – Telavi", "Kajetia – Sighnaghi – Telavi"], ["Le couvent de Bodbe, Sighnaghi, le domaine de Tsinandali et une dégustation de vin, puis Telavi.", "Bodbe convent, Sighnaghi, the Tsinandali estate and a wine tasting, then Telavi.", "El convento de Bodbe, Sighnaghi, la finca de Tsinandali y una cata de vino, y Telavi."], "ag4"),
            am.day(9, ["Alaverdi – Ananouri – Goudaouri", "Alaverdi – Ananuri – Gudauri", "Alaverdi – Ananuri – Gudauri"], ["Le monastère d'Alaverdi, le col de Gombori, la forteresse d'Ananouri et la route militaire géorgienne.", "Alaverdi monastery, the Gombori pass, Ananuri fortress and the Georgian Military Road.", "El monasterio de Alaverdi, el paso de Gombori, la fortaleza de Ananuri y la carretera militar georgiana."], "ag7"),
            am.day(10, ["Stepantsminda – Kazbek", "Stepantsminda – Kazbek", "Stepantsminda – Kazbek"], ["L'église de la Trinité de Guerguéti face au mont Kazbek.", "The Gergeti Trinity Church facing Mount Kazbek.", "La iglesia de la Trinidad de Gergeti frente al monte Kazbek."], "ag7"),
            am.day(11, ["Gori – Ouplistsikhé – Mtskheta – Tbilissi", "Gori – Uplistsikhe – Mtskheta – Tbilisi", "Gori – Uplistsije – Mtsjeta – Tiflis"], ["Gori, la cité troglodyte d'Ouplistsikhé, puis Mtskheta et le monastère de Djvari au-dessus des deux rivières.", "Gori, the cave city of Uplistsikhe, then Mtskheta and Jvari monastery above the two rivers.", "Gori, la ciudad troglodita de Uplistsije, y Mtsjeta y el monasterio de Jvari sobre los dos ríos."], "ag6"),
            am.day(12, T_HOME, home(["Tbilissi", "Tbilisi", "Tiflis"]), "ag3"),
          ]),
      ],
    }),

    al.trip({
      slug: "albanie-essentiel-de-l-albanie-butrint-gjirokaster-berat-8j",
      name: ["L'essentiel de l'Albanie : Apollonia, la Riviera, Butrint, Gjirokastër, Korçë et Berat", "The essentials of Albania: Apollonia, the Riviera, Butrint, Gjirokastër, Korçë and Berat", "Lo esencial de Albania: Apolonia, la Riviera, Butrinto, Gjirokastër, Korçë y Berat"],
      tagline: ["La boucle albanaise, de la mer aux villes ottomanes", "The Albanian loop, from the sea to the Ottoman towns", "El circuito albanés, del mar a las ciudades otomanas"],
      description: [
        "L'Albanie en une semaine : Tirana, Durrës et son amphithéâtre, le monastère d'Ardenica et le site d'Apollonia, Vlorë, la Riviera et Butrint, Gjirokastër, Përmet et Korçë, le lac d'Ohrid à Pogradec, puis Berat.",
        "Albania in a week: Tirana, Durrës and its amphitheatre, Ardenica monastery and the site of Apollonia, Vlorë, the Riviera and Butrint, Gjirokastër, Përmet and Korçë, Lake Ohrid at Pogradec, then Berat.",
        "Albania en una semana: Tirana, Durrës y su anfiteatro, el monasterio de Ardenica y el sitio de Apolonia, Vlorë, la Riviera y Butrinto, Gjirokastër, Përmet y Korçë, el lago de Ohrid en Pogradec, y Berat.",
      ],
      includes: INC(7, 30),
      price: 1420, nights: 7, departureFrom: "Bruxelles", image: "ea5",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 30, order: -40998,
      chapters: [
        al.chapter(["La côte", "The coast", "La costa"], ["Tirana, Apollonia et la Riviera.", "Tirana, Apollonia and the Riviera.", "Tirana, Apolonia y la Riviera."],
          ["ea2", "ea3", "ea4", "ea7"],
          [
            al.day(1, ...arr(TIA), "ea3"),
            al.day(2, ["Durrës – Ardenica – Apollonia – Vlorë", "Durrës – Ardenica – Apollonia – Vlorë", "Durrës – Ardenica – Apolonia – Vlorë"], ["Tirana et la place Skanderbeg, l'amphithéâtre romain de Durrës, le monastère d'Ardenica et la cité antique d'Apollonia.", "Tirana and Skanderbeg Square, the Roman amphitheatre of Durrës, Ardenica monastery and the ancient city of Apollonia.", "Tirana y la plaza Skanderbeg, el anfiteatro romano de Durrës, el monasterio de Ardenica y la ciudad antigua de Apolonia."], "ea2"),
            al.day(3, ["Llogara – Saranda – Butrint", "Llogara – Saranda – Butrint", "Llogara – Saranda – Butrinto"], X_BUTRINT, "ea4"),
          ]),
        al.chapter(["Les villes de l'intérieur", "The inland towns", "Las ciudades del interior"], ["Gjirokastër, Korçë et Berat.", "Gjirokastër, Korçë and Berat.", "Gjirokastër, Korçë y Berat."],
          ["sa6", "ea1", "ea5"],
          [
            al.day(4, ["Saranda – Gjirokastër", "Saranda – Gjirokastër", "Saranda – Gjirokastër"], join2(["La source de l'Œil bleu, puis", "The Blue Eye spring, then", "El manantial del Ojo Azul, y"], X_GJIRO), "sa6"),
            al.day(5, ["Përmet – Korçë", "Përmet – Korçë", "Përmet – Korçë"], ["La vallée de la Vjosa et Përmet, puis Korçë, ville de culture et de bazars.", "The Vjosa valley and Përmet, then Korçë, a town of culture and bazaars.", "El valle del Vjosa y Përmet, y Korçë, ciudad de cultura y bazares."], "ea7"),
            al.day(6, ["Pogradec – Berat", "Pogradec – Berat", "Pogradec – Berat"], ["Le lac d'Ohrid à Pogradec, puis Berat.", "Lake Ohrid at Pogradec, then Berat.", "El lago de Ohrid en Pogradec, y Berat."], "ea1"),
            al.day(7, ["Berat – Tirana", "Berat – Tirana", "Berat – Tirana"], X_BERAT, "ea5"),
            al.day(8, T_HOME, home(TIA), "ea3"),
          ]),
      ],
    }),

    al.trip({
      slug: "albanie-souffle-de-l-albanie-shkodra-riviera-korca-kruja-8j",
      name: ["Souffle de l'Albanie : Shkodra, Berat, la Riviera, Gjirokastër, Voskopojë et Kruja", "Breath of Albania: Shkodra, Berat, the Riviera, Gjirokastër, Voskopojë and Kruja", "Aliento de Albania: Shkodra, Berat, la Riviera, Gjirokastër, Voskopojë y Kruja"],
      tagline: ["Du lac de Shkodra aux montagnes du sud, avec une dégustation à Përmet", "From Lake Shkodra to the southern mountains, with a tasting in Përmet", "Del lago de Shkodra a las montañas del sur, con una cata en Përmet"],
      description: [
        "L'Albanie du nord au sud : Tirana, Shkodra et sa forteresse de Rozafa, Lezhë et Durrës, Berat et Apollonia, Vlorë, la Riviera et Butrint, Gjirokastër, une dégustation à Përmet, Korçë et le village de Voskopojë, puis Kruja, la ville de Skanderbeg.",
        "Albania from north to south: Tirana, Shkodra and its Rozafa fortress, Lezhë and Durrës, Berat and Apollonia, Vlorë, the Riviera and Butrint, Gjirokastër, a tasting in Përmet, Korçë and the village of Voskopojë, then Kruja, Skanderbeg's town.",
        "Albania de norte a sur: Tirana, Shkodra y su fortaleza de Rozafa, Lezhë y Durrës, Berat y Apolonia, Vlorë, la Riviera y Butrinto, Gjirokastër, una cata en Përmet, Korçë y el pueblo de Voskopojë, y Kruja, la ciudad de Skanderbeg.",
      ],
      includes: INC(7, 20, ",Dégustation à Përmet"),
      price: 1899, nights: 7, departureFrom: "Paris", image: "sa2",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 20, order: -40997,
      chapters: [
        al.chapter(["Le nord et la côte", "The north and the coast", "El norte y la costa"], ["Shkodra, Berat et Apollonia.", "Shkodra, Berat and Apollonia.", "Shkodra, Berat y Apolonia."],
          ["sa1", "sa2", "sa3", "sa4"],
          [
            al.day(1, ...arr(TIA), "sa4"),
            al.day(2, ["Tirana – Shkodra", "Tirana – Shkodra", "Tirana – Shkodra"], ["Tirana, puis Shkodra, son lac et la forteresse de Rozafa.", "Tirana, then Shkodra, its lake and Rozafa fortress.", "Tirana, y Shkodra, su lago y la fortaleza de Rozafa."], "sa1"),
            al.day(3, ["Lezhë – Durrës", "Lezhë – Durrës", "Lezhë – Durrës"], ["Lezhë et le mémorial de Skanderbeg, puis Durrës au bord de l'Adriatique.", "Lezhë and the Skanderbeg memorial, then Durrës on the Adriatic.", "Lezhë y el memorial de Skanderbeg, y Durrës a orillas del Adriático."], "sa4"),
            al.day(4, ["Berat – Apollonia – Vlorë", "Berat – Apollonia – Vlorë", "Berat – Apolonia – Vlorë"], [`${X_BERAT[0]} Puis Apollonia et Vlorë.`, `${X_BERAT[1]} Then Apollonia and Vlorë.`, `${X_BERAT[2]} Y Apolonia y Vlorë.`], "sa2"),
          ]),
        al.chapter(["Le sud et les montagnes", "The south and the mountains", "El sur y las montañas"], ["Butrint, Gjirokastër et Voskopojë.", "Butrint, Gjirokastër and Voskopojë.", "Butrinto, Gjirokastër y Voskopojë."],
          ["sa5", "sa6", "sa7", "sa3"],
          [
            al.day(5, ["Riviera – Butrint – Gjirokastër", "Riviera – Butrint – Gjirokastër", "Riviera – Butrinto – Gjirokastër"], X_BUTRINT, "sa5"),
            al.day(6, ["Gjirokastër – Përmet – Korçë – Voskopojë", "Gjirokastër – Përmet – Korçë – Voskopojë", "Gjirokastër – Përmet – Korçë – Voskopojë"], [`${X_GJIRO[0]} Puis une dégustation à Përmet, Korçë et le village de montagne de Voskopojë.`, `${X_GJIRO[1]} Then a tasting in Përmet, Korçë and the mountain village of Voskopojë.`, `${X_GJIRO[2]} Y una cata en Përmet, Korçë y el pueblo de montaña de Voskopojë.`], "sa6"),
            al.day(7, ["Voskopojë – Tirana – Kruja", "Voskopojë – Tirana – Kruja", "Voskopojë – Tirana – Kruja"], ["Retour vers Tirana, puis Kruja, son château, son bazar et le musée Skanderbeg.", "Back to Tirana, then Kruja, its castle, bazaar and the Skanderbeg museum.", "Regreso a Tirana, y Kruja, su castillo, su bazar y el museo Skanderbeg."], "sa3"),
            al.day(8, T_HOME, home(TIA), "sa7"),
          ]),
      ],
    }),

    bg.trip({
      slug: "bulgarie-magie-de-la-bulgarie-plovdiv-rila-nessebar-8j",
      name: ["Magie de la Bulgarie : Sofia, Veliko Tarnovo, la mer Noire, Plovdiv et le monastère de Rila", "Magic of Bulgaria: Sofia, Veliko Tarnovo, the Black Sea, Plovdiv and Rila monastery", "Magia de Bulgaria: Sofía, Veliko Tarnovo, el mar Negro, Plovdiv y el monasterio de Rila"],
      tagline: ["Le tour de la Bulgarie en petit groupe", "Around Bulgaria in a small group", "La vuelta a Bulgaria en grupo reducido"],
      description: [
        "La Bulgarie en une semaine, en groupe de 16 personnes au plus : Sofia, le village de Koprivchtitsa, Veliko Tarnovo, ancienne capitale des tsars, le cavalier de Madara, Varna et Nessebar sur la mer Noire, Kazanlak et sa vallée des Roses, Plovdiv, Bansko, puis le monastère de Rila.",
        "Bulgaria in a week, in a group of 16 at most: Sofia, the village of Koprivshtitsa, Veliko Tarnovo, former capital of the tsars, the Madara Rider, Varna and Nessebar on the Black Sea, Kazanlak and its Valley of Roses, Plovdiv, Bansko, then Rila monastery.",
        "Bulgaria en una semana, en grupo de 16 personas como máximo: Sofía, el pueblo de Koprivshtitsa, Veliko Tarnovo, antigua capital de los zares, el jinete de Madara, Varna y Nesebar en el mar Negro, Kazanlak y su valle de las Rosas, Plovdiv, Bansko, y el monasterio de Rila.",
      ],
      includes: INC(7, 16),
      price: 1499, nights: 7, departureFrom: "Barcelone", image: "bg4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -40996,
      chapters: [
        bg.chapter(["Sofia et la mer Noire", "Sofia and the Black Sea", "Sofía y el mar Negro"], ["Villes des tsars et côte.", "The tsars' towns and the coast.", "Ciudades de los zares y costa."],
          ["bg6", "bg2", "bg1"],
          [
            bg.day(1, ...arr(["Sofia", "Sofia", "Sofía"]), "bg3"),
            bg.day(2, ["Koprivchtitsa – Veliko Tarnovo", "Koprivshtitsa – Veliko Tarnovo", "Koprivshtitsa – Veliko Tarnovo"], ["Sofia et la cathédrale Alexandre-Nevski, le village-musée de Koprivchtitsa, puis Veliko Tarnovo.", "Sofia and the Alexander Nevsky Cathedral, the museum village of Koprivshtitsa, then Veliko Tarnovo.", "Sofía y la catedral Alejandro Nevski, el pueblo-museo de Koprivshtitsa, y Veliko Tarnovo."], "bg6"),
            bg.day(3, ["Veliko Tarnovo – Madara – Varna", "Veliko Tarnovo – Madara – Varna", "Veliko Tarnovo – Madara – Varna"], ["La forteresse de Tsarevets, le cavalier de Madara sculpté dans la falaise, puis Varna.", "Tsarevets fortress, the Madara Rider carved into the cliff, then Varna.", "La fortaleza de Tsarevets, el jinete de Madara esculpido en el acantilado, y Varna."], "bg2"),
            bg.day(4, ["Varna – Nessebar", "Varna – Nessebar", "Varna – Nesebar"], ["La côte de la mer Noire et la presqu'île de Nessebar et ses églises byzantines.", "The Black Sea coast and the Nessebar peninsula and its Byzantine churches.", "La costa del mar Negro y la península de Nesebar y sus iglesias bizantinas."], "bg1"),
          ]),
        bg.chapter(["La vallée des Roses et Rila", "The Valley of Roses and Rila", "El valle de las Rosas y Rila"], ["Plovdiv, Bansko et le monastère.", "Plovdiv, Bansko and the monastery.", "Plovdiv, Bansko y el monasterio."],
          ["bg5", "bg4", "bg3"],
          [
            bg.day(5, ["Bourgas – Kazanlak – Plovdiv", "Burgas – Kazanlak – Plovdiv", "Burgas – Kazanlak – Plovdiv"], ["La vallée des Roses et le tombeau thrace de Kazanlak, puis Plovdiv.", "The Valley of Roses and the Thracian tomb of Kazanlak, then Plovdiv.", "El valle de las Rosas y la tumba tracia de Kazanlak, y Plovdiv."], "bg2"),
            bg.day(6, ["Plovdiv – Bansko", "Plovdiv – Bansko", "Plovdiv – Bansko"], ["La vieille ville de Plovdiv et son théâtre romain, puis Bansko au pied du Pirin.", "Plovdiv's old town and its Roman theatre, then Bansko at the foot of the Pirin.", "La ciudad vieja de Plovdiv y su teatro romano, y Bansko al pie del Pirin."], "bg5"),
            bg.day(7, ["Rila – Sofia", "Rila – Sofia", "Rila – Sofía"], ["Le monastère de Rila et ses fresques, puis retour à Sofia.", "Rila monastery and its frescoes, then back to Sofia.", "El monasterio de Rila y sus frescos, y regreso a Sofía."], "bg4"),
            bg.day(8, T_HOME, home(["Sofia", "Sofia", "Sofía"]), "bg6"),
          ]),
      ],
    }),

    ro.trip({
      slug: "roumanie-cap-sur-la-roumanie-transylvanie-bucovine-8j",
      name: ["Cap sur la Roumanie : la Transylvanie, les monastères de Bucovine et le château de Bran", "Heading for Romania: Transylvania, the monasteries of Bucovina and Bran castle", "Rumbo a Rumanía: Transilvania, los monasterios de Bucovina y el castillo de Bran"],
      tagline: ["Les Carpates en petit groupe, de Bucarest à la Bucovine", "The Carpathians in a small group, from Bucharest to Bucovina", "Los Cárpatos en grupo reducido, de Bucarest a Bucovina"],
      description: [
        "La Roumanie en groupe de 15 personnes au plus : Bucarest, le monastère de Curtea de Argeș, Sibiu et le village de Sibiel, Sighișoara la médiévale, Bistrița, les monastères peints de Moldovița et Voroneț en Bucovine, les gorges de Bicaz et le lac Rouge, Brașov, l'église fortifiée de Hărman, le château de Bran, puis Sinaia et le château de Peleș.",
        "Romania in a group of 15 at most: Bucharest, Curtea de Argeș monastery, Sibiu and the village of Sibiel, medieval Sighișoara, Bistrița, the painted monasteries of Moldovița and Voroneț in Bucovina, the Bicaz gorge and the Red Lake, Brașov, the fortified church of Hărman, Bran castle, then Sinaia and Peleș castle.",
        "Rumanía en grupo de 15 personas como máximo: Bucarest, el monasterio de Curtea de Argeș, Sibiu y el pueblo de Sibiel, la medieval Sighișoara, Bistrița, los monasterios pintados de Moldovița y Voroneț en Bucovina, las gargantas de Bicaz y el lago Rojo, Brașov, la iglesia fortificada de Hărman, el castillo de Bran, y Sinaia y el castillo de Peleș.",
      ],
      includes: INC(7, 15),
      price: 1964, nights: 7, departureFrom: "Nice", image: "ro5",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 15, order: -40995,
      chapters: [
        ro.chapter(["La Transylvanie", "Transylvania", "Transilvania"], ["Villes saxonnes et citadelles.", "Saxon towns and citadels.", "Ciudades sajonas y ciudadelas."],
          ["ro1", "ro2"],
          [
            ro.day(1, ...arr(["Bucarest", "Bucharest", "Bucarest"]), "ro2"),
            ro.day(2, ["Curtea de Argeș – Sibiu – Sibiel", "Curtea de Argeș – Sibiu – Sibiel", "Curtea de Argeș – Sibiu – Sibiel"], ["Le monastère de Curtea de Argeș, la vallée de l'Olt, Sibiu et ses toits « à yeux », puis le village de Sibiel.", "Curtea de Argeș monastery, the Olt valley, Sibiu and its 'eyed' roofs, then the village of Sibiel.", "El monasterio de Curtea de Argeș, el valle del Olt, Sibiu y sus tejados «con ojos», y el pueblo de Sibiel."], "ro2"),
            ro.day(3, ["Sighișoara – Târgu Mureș – Bistrița", "Sighișoara – Târgu Mureș – Bistrița", "Sighișoara – Târgu Mureș – Bistrița"], ["Sighișoara, citadelle médiévale classée par l'Unesco et maison natale de Vlad l'Empaleur, puis Bistrița.", "Sighișoara, a UNESCO-listed medieval citadel and birthplace of Vlad the Impaler, then Bistrița.", "Sighișoara, ciudadela medieval declarada por la Unesco y casa natal de Vlad el Empalador, y Bistrița."], "ro1"),
          ]),
        ro.chapter(["La Bucovine et les Carpates", "Bucovina and the Carpathians", "Bucovina y los Cárpatos"], ["Monastères peints et châteaux.", "Painted monasteries and castles.", "Monasterios pintados y castillos."],
          ["ro4", "ro3", "ro5", "ro6"],
          [
            ro.day(4, ["Moldovița – Voroneț", "Moldovița – Voroneț", "Moldovița – Voroneț"], ["Le col de Tihuța, puis les monastères peints de Moldovița et de Voroneț, la « chapelle Sixtine de l'Orient ».", "The Tihuța pass, then the painted monasteries of Moldovița and Voroneț, the 'Sistine Chapel of the East'.", "El paso de Tihuța, y los monasterios pintados de Moldovița y Voroneț, la «capilla Sixtina de Oriente»."], "ro4"),
            ro.day(5, ["Bicaz – lac Rouge – Brașov", "Bicaz – Red Lake – Brașov", "Bicaz – lago Rojo – Brașov"], ["Les gorges de Bicaz et le lac Rouge, puis Brașov.", "The Bicaz gorge and the Red Lake, then Brașov.", "Las gargantas de Bicaz y el lago Rojo, y Brașov."], "ro3"),
            ro.day(6, ["Hărman – Bran – Brașov", "Hărman – Bran – Brașov", "Hărman – Bran – Brașov"], ["L'église fortifiée saxonne de Hărman, le château de Bran, puis Brașov et son Église noire.", "The Saxon fortified church of Hărman, Bran castle, then Brașov and its Black Church.", "La iglesia fortificada sajona de Hărman, el castillo de Bran, y Brașov y su Iglesia Negra."], "ro5"),
            ro.day(7, ["Sinaia – Bucarest", "Sinaia – Bucharest", "Sinaia – Bucarest"], ["Le château de Peleș à Sinaia, puis Bucarest et son palais du Parlement.", "Peleș castle in Sinaia, then Bucharest and its Palace of Parliament.", "El castillo de Peleș en Sinaia, y Bucarest y su palacio del Parlamento."], "ro6"),
            ro.day(8, T_HOME, home(["Bucarest", "Bucharest", "Bucarest"]), "ro2"),
          ]),
      ],
    }),
  ];

  const { runSeedBatch, disconnect } = await import("./lib/seedTripsRunner");
  try {
    await runSeedBatch({ newDestinations, newStandardTrips: [], newJourneyTrips: journeyTrips });
    console.log("\nDone.");
  } finally {
    await disconnect();
  }
}

function join2(a: L3, b: L3): L3 {
  const low = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
  return [`${a[0]} ${low(b[0])}`, `${a[1]} ${b[1]}`, `${a[2]} ${low(b[2])}`];
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
