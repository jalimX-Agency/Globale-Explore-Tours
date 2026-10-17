// New destinations Estonia, Latvia and Lithuania, with their 6 Voyamar journey trips. The multi-country
// Baltic tours are attached to the country where they start; the Christmas markets of Tallinn, Riga and
// Vilnius are one page per city. Prices are per-person "from" prices; supplier product ids are kept in
// SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-pays-baltes-circuits.ts
// Requires scripts/upload-images-blt-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "estonie-marches-de-noel-a-tallinn-4j": ["83718"],
  "estonie-tresors-des-pays-baltes-tallinn-riga-courlande-vilnius-8j": ["421278", "405298"],
  "lettonie-marches-de-noel-a-riga-4j": ["37241"],
  "lettonie-au-coeur-des-capitales-baltes-riga-tallinn-5j": ["360078", "359118"],
  "lettonie-splendeurs-des-pays-baltes-riga-vilnius-tallinn-8j": ["359038"],
  "lituanie-marches-de-noel-a-vilnius-4j": ["374898"],
  "lituanie-splendeurs-des-pays-baltes-de-vilnius-a-tallinn-8j": ["332518", "329298"],
};

const T_HOME: L3 = ["Retour en France", "Back to France", "Regreso a Francia"];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const home = (city: L3): L3 => [`Transfert à l'aéroport de ${city[0]} et envol pour la France.`, `Transfer to ${city[1]} airport and fly to France.`, `Traslado al aeropuerto de ${city[2]} y vuelo a Francia.`];
const TLL: L3 = ["Tallinn", "Tallinn", "Tallin"];
const RIX: L3 = ["Riga", "Riga", "Riga"];
const VNO: L3 = ["Vilnius", "Vilnius", "Vilna"];

const X_TLL: L3 = ["Tallinn : la vieille ville médiévale classée par l'Unesco, ses remparts et ses tours, la colline de Toompea et la cathédrale Alexandre-Nevski, la place de l'Hôtel-de-Ville.", "Tallinn: the UNESCO-listed medieval old town, its walls and towers, Toompea hill and the Alexander Nevsky Cathedral, the Town Hall Square.", "Tallin: la ciudad vieja medieval declarada por la Unesco, sus murallas y torres, la colina de Toompea y la catedral Alejandro Nevski, la plaza del Ayuntamiento."];
const X_RIX: L3 = ["Riga : la vieille ville hanséatique, la maison des Têtes noires, la cathédrale du Dôme, le marché central dans ses hangars à zeppelins et le quartier Art nouveau.", "Riga: the Hanseatic old town, the House of the Blackheads, the Dome Cathedral, the central market in its zeppelin hangars and the Art Nouveau district.", "Riga: la ciudad vieja hanseática, la casa de los Cabezas Negras, la catedral del Domo, el mercado central en sus hangares de zepelines y el barrio modernista."];
const X_VNO: L3 = ["Vilnius : la vieille ville baroque classée par l'Unesco, la cathédrale et son clocher, la porte de l'Aurore, l'église Sainte-Anne et le quartier d'Užupis.", "Vilnius: the UNESCO-listed baroque old town, the cathedral and its bell tower, the Gate of Dawn, St Anne's Church and the Užupis district.", "Vilna: la ciudad vieja barroca declarada por la Unesco, la catedral y su campanario, la puerta de la Aurora, la iglesia de Santa Ana y el barrio de Užupis."];
const X_TRAKAI: L3 = ["Le château de Trakai sur son île au milieu des lacs, puis Kaunas.", "Trakai castle on its island among the lakes, then Kaunas.", "El castillo de Trakai sobre su isla entre lagos, y Kaunas."];
const X_NIDA: L3 = ["L'isthme de Courlande classé par l'Unesco, ses dunes géantes, ses pinèdes et le village de pêcheurs de Nida, puis Klaipėda.", "The UNESCO-listed Curonian Spit, its giant dunes, pine forests and the fishing village of Nida, then Klaipėda.", "El istmo de Curlandia declarado por la Unesco, sus dunas gigantes, sus pinares y el pueblo de pescadores de Nida, y Klaipėda."];
const X_RUNDALE: L3 = ["La colline des Croix près de Šiauliai, lieu de pèlerinage hérissé de milliers de croix, puis le palais baroque de Rundāle, « Versailles letton ».", "The Hill of Crosses near Šiauliai, a pilgrimage site bristling with thousands of crosses, then the baroque Rundāle Palace, the 'Latvian Versailles'.", "La colina de las Cruces cerca de Šiauliai, lugar de peregrinación erizado de miles de cruces, y el palacio barroco de Rundāle, el «Versalles letón»."];
const X_GAUJA: L3 = ["Le parc national de la Gauja : Sigulda, le château de Turaida, la grotte de Gūtmaņa et la ville médiévale de Cēsis, puis l'Estonie et Tallinn.", "Gauja national park: Sigulda, Turaida castle, Gūtmaņa cave and the medieval town of Cēsis, then Estonia and Tallinn.", "El parque nacional de Gauja: Sigulda, el castillo de Turaida, la gruta de Gūtmaņa y la ciudad medieval de Cēsis, y Estonia y Tallin."];
const xmas = (city: L3): L3 => [`Le marché de Noël de ${city[0]}, ses chalets, son vin chaud et ses lumières, et temps libre dans la vieille ville.`, `${city[1]}'s Christmas market, its stalls, mulled wine and lights, and free time in the old town.`, `El mercado navideño de ${city[2]}, sus puestos, su vino caliente y sus luces, y tiempo libre en la ciudad vieja.`];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { buildDestinations } = await import("./lib/newDestination");
  const R2 = process.env.NEXT_PUBLIC_R2_URL!;
  const J = (k: string) => `${R2}/journeys/blt-${k}.jpg`;
  const H = (n: number) => `${R2}/team/headshot-${String(n).padStart(2, "0")}.jpg`;
  const L = (n: number) => `${R2}/blocks/loved-${String(n).padStart(2, "0")}.jpg`;
  const EUROPE = { slug: "europe", name: ["Europe", "Europe", "Europa"] as L3 };
  const bestTime = (name: L3): DestFaq => ({
    question: [`Quelle est la meilleure période pour visiter ${name[0]} ?`, `What's the best time to visit ${name[1]}?`, `¿Cuál es la mejor época para visitar ${name[2]}?`],
    answer: ["De mai à septembre pour les longues journées et la côte baltique ; fin novembre et décembre pour les marchés de Noël.", "May to September for the long days and the Baltic coast; late November and December for the Christmas markets.", "De mayo a septiembre por los días largos y la costa báltica; finales de noviembre y diciembre para los mercados navideños."],
  });
  type DestFaq = { question: L3; answer: L3 };

  const newDestinations = await buildDestinations([
    {
      slug: "estonie", name: ["Estonie", "Estonia", "Estonia"], nameIn: "en Estonie", region: EUROPE,
      description: ["Tallinn et sa vieille ville médiévale intacte, des forêts et des tourbières, et une côte parsemée d'îles : l'Estonie, entre Scandinavie et Europe de l'Est.", "Tallinn and its intact medieval old town, forests and bogs, and a coast dotted with islands: Estonia, between Scandinavia and Eastern Europe.", "Tallin y su ciudad vieja medieval intacta, bosques y turberas, y una costa salpicada de islas: Estonia, entre Escandinavia y Europa del Este."],
      descriptionMore: ["Nous combinons Tallinn avec Riga et Vilnius pour découvrir les trois capitales baltes d'un seul voyage, en autocar ou en train.", "We combine Tallinn with Riga and Vilnius to discover the three Baltic capitals in a single trip, by coach or by train.", "Combinamos Tallin con Riga y Vilna para descubrir las tres capitales bálticas en un solo viaje, en autocar o en tren."],
      heroImage: J("tb1"), order: 115,
      seeAndDo: [
        { title: ["La vieille ville de Tallinn", "Tallinn's old town", "La ciudad vieja de Tallin"], description: ["Remparts, tours aux toits pointus et ruelles pavées : l'une des cités médiévales les mieux conservées d'Europe.", "Ramparts, towers with pointed roofs and cobbled lanes: one of the best-preserved medieval cities in Europe.", "Murallas, torres de tejados puntiagudos y callejuelas empedradas: una de las ciudades medievales mejor conservadas de Europa."], image: J("cb2") },
        { title: ["Le marché de Noël", "The Christmas market", "El mercado navideño"], description: ["La place de l'Hôtel-de-Ville illuminée, son sapin et ses chalets, l'un des plus beaux marchés de Noël d'Europe.", "The illuminated Town Hall Square, its tree and stalls, one of the finest Christmas markets in Europe.", "La plaza del Ayuntamiento iluminada, su abeto y sus puestos, uno de los mercados navideños más bellos de Europa."], image: J("nt3") },
      ],
      bestOf: [
        { title: ["Toompea", "Toompea", "Toompea"], description: ["La colline haute, ses belvédères et la cathédrale Alexandre-Nevski.", "The upper hill, its viewpoints and the Alexander Nevsky Cathedral.", "La colina alta, sus miradores y la catedral Alejandro Nevski."], image: J("tr3") },
        { title: ["La côte baltique", "The Baltic coast", "La costa báltica"], description: ["Pärnu, sa plage et ses villas de bois.", "Pärnu, its beach and wooden villas.", "Pärnu, su playa y sus villas de madera."], image: J("cb5") },
      ],
      lovedImages: [L(16), L(17), L(18)],
      bestTime: bestTime(["l'Estonie", "Estonia", "Estonia"]),
      team: [{ name: "Liis", photo: H(15) }, { name: "Mart", photo: H(16) }],
    },
    {
      slug: "lettonie", name: ["Lettonie", "Latvia", "Letonia"], nameIn: "en Lettonie", region: EUROPE,
      description: ["Riga, capitale de l'Art nouveau, la vallée de la Gauja et ses châteaux, les plages de Jūrmala et le palais de Rundāle.", "Riga, capital of Art Nouveau, the Gauja valley and its castles, the beaches of Jūrmala and Rundāle Palace.", "Riga, capital del modernismo, el valle de Gauja y sus castillos, las playas de Jūrmala y el palacio de Rundāle."],
      descriptionMore: ["Riga est le point de départ idéal pour rayonner vers les deux autres capitales baltes, ou pour un week-end au marché de Noël.", "Riga is the ideal starting point to reach the other two Baltic capitals, or for a weekend at the Christmas market.", "Riga es el punto de partida ideal para llegar a las otras dos capitales bálticas, o para un fin de semana en el mercado navideño."],
      heroImage: J("sr1"), order: 116,
      seeAndDo: [
        { title: ["Le quartier Art nouveau", "The Art Nouveau district", "El barrio modernista"], description: ["Plus de huit cents façades Art nouveau ornées de visages, de paons et de lianes, dans les rues Alberta et Elizabetes.", "More than eight hundred Art Nouveau façades adorned with faces, peacocks and vines, on Alberta and Elizabetes streets.", "Más de ochocientas fachadas modernistas adornadas con rostros, pavos reales y lianas, en las calles Alberta y Elizabetes."], image: J("sr6") },
        { title: ["Le palais de Rundāle", "Rundāle Palace", "El palacio de Rundāle"], description: ["Le « Versailles letton », chef-d'œuvre baroque de Rastrelli et ses jardins à la française.", "The 'Latvian Versailles', Rastrelli's baroque masterpiece and its French gardens.", "El «Versalles letón», obra maestra barroca de Rastrelli y sus jardines a la francesa."], image: J("sr7") },
      ],
      bestOf: [
        { title: ["Riga", "Riga", "Riga"], description: ["La vieille ville hanséatique et la maison des Têtes noires.", "The Hanseatic old town and the House of the Blackheads.", "La ciudad vieja hanseática y la casa de los Cabezas Negras."], image: J("tb7") },
        { title: ["La vallée de la Gauja", "The Gauja valley", "El valle de Gauja"], description: ["Sigulda, Turaida et Cēsis, la « Suisse lettone ».", "Sigulda, Turaida and Cēsis, the 'Latvian Switzerland'.", "Sigulda, Turaida y Cēsis, la «Suiza letona»."], image: J("tb2") },
      ],
      lovedImages: [L(19), L(20), L(1)],
      bestTime: bestTime(["la Lettonie", "Latvia", "Letonia"]),
      team: [{ name: "Laura", photo: H(17) }, { name: "Andris", photo: H(18) }],
    },
    {
      slug: "lituanie", name: ["Lituanie", "Lithuania", "Lituania"], nameIn: "en Lituanie", region: EUROPE,
      description: ["Vilnius la baroque, le château de Trakai sur son lac, les dunes de l'isthme de Courlande et la colline des Croix.", "Baroque Vilnius, Trakai castle on its lake, the dunes of the Curonian Spit and the Hill of Crosses.", "Vilna la barroca, el castillo de Trakai sobre su lago, las dunas del istmo de Curlandia y la colina de las Cruces."],
      descriptionMore: ["La Lituanie ouvre nos circuits baltes vers le nord, de Vilnius à Tallinn, en passant par la côte et Riga.", "Lithuania opens our Baltic tours heading north, from Vilnius to Tallinn, via the coast and Riga.", "Lituania abre nuestros circuitos bálticos hacia el norte, de Vilna a Tallin, pasando por la costa y Riga."],
      heroImage: J("sp6"), order: 117,
      seeAndDo: [
        { title: ["Le château de Trakai", "Trakai castle", "El castillo de Trakai"], description: ["Un château de briques rouges sur une île du lac Galvė, ancienne résidence des grands-ducs.", "A red-brick castle on an island in Lake Galvė, former residence of the grand dukes.", "Un castillo de ladrillo rojo en una isla del lago Galvė, antigua residencia de los grandes duques."], image: J("sp6") },
        { title: ["L'isthme de Courlande", "The Curonian Spit", "El istmo de Curlandia"], description: ["Une langue de sable de près de cent kilomètres entre lagune et Baltique, ses dunes et ses forêts.", "A sand spit nearly a hundred kilometres long between lagoon and Baltic, its dunes and forests.", "Una lengua de arena de casi cien kilómetros entre laguna y Báltico, sus dunas y sus bosques."], image: J("tb5") },
      ],
      bestOf: [
        { title: ["Vilnius", "Vilnius", "Vilna"], description: ["La vieille ville baroque et la république d'Užupis.", "The baroque old town and the Užupis republic.", "La ciudad vieja barroca y la república de Užupis."], image: J("sp5") },
        { title: ["La colline des Croix", "The Hill of Crosses", "La colina de las Cruces"], description: ["Des milliers de croix plantées par les pèlerins près de Šiauliai.", "Thousands of crosses planted by pilgrims near Šiauliai.", "Miles de cruces plantadas por los peregrinos cerca de Šiauliai."], image: J("sp4") },
      ],
      lovedImages: [L(2), L(3), L(4)],
      bestTime: bestTime(["la Lituanie", "Lithuania", "Lituania"]),
      team: [{ name: "Rūta", photo: H(1) }, { name: "Tomas", photo: H(2) }],
    },
  ]);

  const SUM = { label: ["Mai à septembre", "May to September", "Mayo a septiembre"] as L3, months: "may,june,july,august,september" };
  const XMAS = { label: ["Fin novembre à décembre", "Late November to December", "Finales de noviembre a diciembre"] as L3, months: "november,december" };
  const ee = circuitBuilders({ destinationSlug: "estonie", imagePrefix: "blt", season: SUM });
  const eex = circuitBuilders({ destinationSlug: "estonie", imagePrefix: "blt", season: XMAS });
  const lv = circuitBuilders({ destinationSlug: "lettonie", imagePrefix: "blt", season: SUM });
  const lvx = circuitBuilders({ destinationSlug: "lettonie", imagePrefix: "blt", season: XMAS });
  const lt = circuitBuilders({ destinationSlug: "lituanie", imagePrefix: "blt", season: SUM });
  const ltx = circuitBuilders({ destinationSlug: "lituanie", imagePrefix: "blt", season: XMAS });
  const INC = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtels 3* et 4*,Transport en autocar,Visites du programme,Guide-accompagnateur francophone${extra}`,
    `Flights from France,Transfers,${n} nights in 3* and 4* hotels,Transport by coach,Visits in the programme,French-speaking tour leader${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hoteles de 3* y 4*,Transporte en autocar,Visitas del programa,Guía acompañante francófono${extra}`,
  ];
  const BREAK: L3 = ["Vols depuis la France,Transferts,3 nuits en hôtel au centre,Visite guidée de la vieille ville", "Flights from France,Transfers,3 nights in a central hotel,Guided tour of the old town", "Vuelos desde Francia,Traslados,3 noches en hotel céntrico,Visita guiada de la ciudad vieja"];

  const market = (b: typeof eex, slug: string, city: L3, price: number, dep: string, imgs: string[], order: number, visit: L3) => b.trip({
    slug,
    name: [`Marchés de Noël à ${city[0]}`, `Christmas markets in ${city[1]}`, `Mercados navideños en ${city[2]}`],
    tagline: ["Un long week-end de fêtes dans une capitale balte", "A festive long weekend in a Baltic capital", "Un fin de semana largo festivo en una capital báltica"],
    description: [
      `Quatre jours à ${city[0]} en décembre : une visite guidée de la vieille ville, le marché de Noël, ses chalets en bois, son grand sapin et son vin chaud épicé, et du temps libre pour les cafés et les boutiques d'artisanat.`,
      `Four days in ${city[1]} in December: a guided tour of the old town, the Christmas market, its wooden stalls, its big tree and spiced mulled wine, and free time for cafés and craft shops.`,
      `Cuatro días en ${city[2]} en diciembre: una visita guiada de la ciudad vieja, el mercado navideño, sus puestos de madera, su gran abeto y su vino caliente especiado, y tiempo libre para los cafés y las tiendas de artesanía.`,
    ],
    includes: BREAK,
    price, nights: 3, departureFrom: dep, image: imgs[0],
    theme: "culture", feeling: "contentment", travelerTypes: "couples,family,solo,groups", maxGuests: 40, order,
    chapters: [
      b.chapter([`${city[0]} en fête`, `${city[1]} celebrates`, `${city[2]} de fiesta`], ["La vieille ville sous les lumières.", "The old town in lights.", "La ciudad vieja iluminada."], imgs,
        [
          b.day(1, ...arr(city), imgs[1]),
          b.day(2, city, visit, imgs[2]),
          b.day(3, ["Le marché de Noël", "The Christmas market", "El mercado navideño"], xmas(city), imgs[0]),
          b.day(4, T_HOME, home(city), imgs[3]),
        ]),
    ],
  });

  const journeyTrips = [
    market(eex, "estonie-marches-de-noel-a-tallinn-4j", TLL, 470, "Paris", ["nt3", "nt2", "nt1", "nt6", "nt4", "nt5"], -42000, X_TLL),
    market(lvx, "lettonie-marches-de-noel-a-riga-4j", RIX, 466, "Barcelone", ["nr1", "nr5", "nr3", "nr2", "nr4"], -41999, X_RIX),
    market(ltx, "lituanie-marches-de-noel-a-vilnius-4j", VNO, 420, "Bâle", ["nv1", "nv4", "nv2", "nv6", "nv3", "nv5"], -41998, X_VNO),

    lv.trip({
      slug: "lettonie-au-coeur-des-capitales-baltes-riga-tallinn-5j",
      name: ["Au cœur des capitales baltes : de Riga à Tallinn par la vallée de la Gauja", "At the heart of the Baltic capitals: from Riga to Tallinn via the Gauja valley", "En el corazón de las capitales bálticas: de Riga a Tallin por el valle de Gauja"],
      tagline: ["Deux capitales et la « Suisse lettone » en cinq jours", "Two capitals and the 'Latvian Switzerland' in five days", "Dos capitales y la «Suiza letona» en cinco días"],
      description: [
        "Une escapade balte : deux jours à Riga, la vallée de la Gauja avec Sigulda, le château de Turaida et Cēsis, puis Tallinn. Aussi dans le sens Tallinn – Riga, au même prix.",
        "A Baltic getaway: two days in Riga, the Gauja valley with Sigulda, Turaida castle and Cēsis, then Tallinn. Also in the Tallinn – Riga direction, at the same price.",
        "Una escapada báltica: dos días en Riga, el valle de Gauja con Sigulda, el castillo de Turaida y Cēsis, y Tallin. También en el sentido Tallin – Riga, al mismo precio.",
      ],
      includes: INC(4),
      price: 755, nights: 4, departureFrom: "Bruxelles", image: "cb2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -41997,
      chapters: [
        lv.chapter(["Riga et Tallinn", "Riga and Tallinn", "Riga y Tallin"], ["Deux capitales hanséatiques.", "Two Hanseatic capitals.", "Dos capitales hanseáticas."],
          ["cb1", "cb2", "cb3", "cb4", "tr2"],
          [
            lv.day(1, ...arr(RIX), "tr2"),
            lv.day(2, RIX, X_RIX, "tr4"),
            lv.day(3, ["Gauja – Tallinn", "Gauja – Tallinn", "Gauja – Tallin"], X_GAUJA, "cb4"),
            lv.day(4, TLL, X_TLL, "cb2"),
            lv.day(5, T_HOME, home(TLL), "cb1"),
          ]),
      ],
    }),

    ee.trip({
      slug: "estonie-tresors-des-pays-baltes-tallinn-riga-courlande-vilnius-8j",
      name: ["Trésors des pays baltes : Tallinn, Pärnu, Riga, Rundāle, l'isthme de Courlande et Vilnius", "Treasures of the Baltic states: Tallinn, Pärnu, Riga, Rundāle, the Curonian Spit and Vilnius", "Tesoros de los países bálticos: Tallin, Pärnu, Riga, Rundāle, el istmo de Curlandia y Vilna"],
      tagline: ["Les trois capitales et les dunes de la Baltique", "The three capitals and the Baltic dunes", "Las tres capitales y las dunas del Báltico"],
      description: [
        "Les pays baltes du nord au sud : deux jours à Tallinn, Pärnu et la vallée de la Gauja, Riga, le palais de Rundāle et la colline des Croix, Klaipėda et l'isthme de Courlande, puis Vilnius. Version en train (Cap sur les capitales baltes en train), de Tallinn à Vilnius par Valga, Riga et Jūrmala, à partir de 1 469 € par personne.",
        "The Baltic states from north to south: two days in Tallinn, Pärnu and the Gauja valley, Riga, Rundāle Palace and the Hill of Crosses, Klaipėda and the Curonian Spit, then Vilnius. A train version (Heading for the Baltic capitals by train), from Tallinn to Vilnius via Valga, Riga and Jūrmala, from €1,469 per person.",
        "Los países bálticos de norte a sur: dos días en Tallin, Pärnu y el valle de Gauja, Riga, el palacio de Rundāle y la colina de las Cruces, Klaipėda y el istmo de Curlandia, y Vilna. Versión en tren (Rumbo a las capitales bálticas en tren), de Tallin a Vilna por Valga, Riga y Jūrmala, desde 1.469 € por persona.",
      ],
      includes: INC(7),
      price: 1762, nights: 7, departureFrom: "Bruxelles", image: "tb1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 40, order: -41996,
      chapters: [
        ee.chapter(["Tallinn et Riga", "Tallinn and Riga", "Tallin y Riga"], ["Le nord balte.", "The Baltic north.", "El norte báltico."],
          ["tb1", "tb2", "tb7", "tr1"],
          [
            ee.day(1, ...arr(TLL), "tr1"),
            ee.day(2, TLL, X_TLL, "tb1"),
            ee.day(3, ["Pärnu – Sigulda – Riga", "Pärnu – Sigulda – Riga", "Pärnu – Sigulda – Riga"], ["La station balnéaire de Pärnu, puis Sigulda et le château de Turaida dans la vallée de la Gauja, et Riga.", "The seaside resort of Pärnu, then Sigulda and Turaida castle in the Gauja valley, and Riga.", "El balneario de Pärnu, y Sigulda y el castillo de Turaida en el valle de Gauja, y Riga."], "tb2"),
            ee.day(4, RIX, X_RIX, "tb7"),
          ]),
        ee.chapter(["La Courlande et Vilnius", "Courland and Vilnius", "Curlandia y Vilna"], ["Palais, dunes et baroque.", "Palaces, dunes and baroque.", "Palacios, dunas y barroco."],
          ["tb5", "tb6", "tb4", "tb3"],
          [
            ee.day(5, ["Rundāle – Šiauliai – Klaipėda", "Rundāle – Šiauliai – Klaipėda", "Rundāle – Šiauliai – Klaipėda"], X_RUNDALE, "sr7"),
            ee.day(6, ["L'isthme de Courlande", "The Curonian Spit", "El istmo de Curlandia"], X_NIDA, "tb5"),
            ee.day(7, VNO, ["Route vers Vilnius par le château de Trakai, puis la vieille ville baroque.", "Drive to Vilnius via Trakai castle, then the baroque old town.", "Carretera hacia Vilna por el castillo de Trakai, y la ciudad vieja barroca."], "tb4"),
            ee.day(8, T_HOME, home(VNO), "tb3"),
          ]),
      ],
    }),

    lv.trip({
      slug: "lettonie-splendeurs-des-pays-baltes-riga-vilnius-tallinn-8j",
      name: ["Splendeurs des pays baltes au départ de Riga : Vilnius, Trakai, Nida, Rundāle et Tallinn", "Splendours of the Baltic states from Riga: Vilnius, Trakai, Nida, Rundāle and Tallinn", "Esplendores de los países bálticos desde Riga: Vilna, Trakai, Nida, Rundāle y Tallin"],
      tagline: ["La boucle des trois capitales, aller-retour depuis Riga", "The loop of the three capitals, round trip from Riga", "El circuito de las tres capitales, ida y vuelta desde Riga"],
      description: [
        "Une boucle balte depuis Riga : Vilnius, Trakai et Kaunas, l'isthme de Courlande et Nida, Klaipėda, la colline des Croix et le palais de Rundāle, Riga, la vallée de la Gauja, Tallinn, puis le retour à Riga.",
        "A Baltic loop from Riga: Vilnius, Trakai and Kaunas, the Curonian Spit and Nida, Klaipėda, the Hill of Crosses and Rundāle Palace, Riga, the Gauja valley, Tallinn, then back to Riga.",
        "Un circuito báltico desde Riga: Vilna, Trakai y Kaunas, el istmo de Curlandia y Nida, Klaipėda, la colina de las Cruces y el palacio de Rundāle, Riga, el valle de Gauja, Tallin, y regreso a Riga.",
      ],
      includes: INC(7),
      price: 1028, nights: 7, departureFrom: "Bruxelles", image: "sr1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 40, order: -41995,
      chapters: [
        lv.chapter(["Riga et la Lituanie", "Riga and Lithuania", "Riga y Lituania"], ["Vilnius, Trakai et la Courlande.", "Vilnius, Trakai and Courland.", "Vilna, Trakai y Curlandia."],
          ["sr1", "sr2", "sr4", "sr5"],
          [
            lv.day(1, ...arr(RIX), "sr1"),
            lv.day(2, ["Riga – Vilnius", "Riga – Vilnius", "Riga – Vilna"], X_VNO, "sr4"),
            lv.day(3, ["Trakai – Kaunas – Nida – Klaipėda", "Trakai – Kaunas – Nida – Klaipėda", "Trakai – Kaunas – Nida – Klaipėda"], [`${X_TRAKAI[0]} ${X_NIDA[0]}`, `${X_TRAKAI[1]} ${X_NIDA[1]}`, `${X_TRAKAI[2]} ${X_NIDA[2]}`], "sr2"),
            lv.day(4, ["Šiauliai – Rundāle – Riga", "Šiauliai – Rundāle – Riga", "Šiauliai – Rundāle – Riga"], X_RUNDALE, "sr5"),
          ]),
        lv.chapter(["Riga et Tallinn", "Riga and Tallinn", "Riga y Tallin"], ["Les deux capitales du nord.", "The two northern capitals.", "Las dos capitales del norte."],
          ["sr6", "sr7", "sr3"],
          [
            lv.day(5, RIX, X_RIX, "sr6"),
            lv.day(6, ["Gauja – Tallinn", "Gauja – Tallinn", "Gauja – Tallin"], X_GAUJA, "sr7"),
            lv.day(7, ["Tallinn – Riga", "Tallinn – Riga", "Tallin – Riga"], [`${X_TLL[0]} Retour vers Riga.`, `${X_TLL[1]} Back to Riga.`, `${X_TLL[2]} Regreso a Riga.`], "sr3"),
            lv.day(8, T_HOME, home(RIX), "sr1"),
          ]),
      ],
    }),

    lt.trip({
      slug: "lituanie-splendeurs-des-pays-baltes-de-vilnius-a-tallinn-8j",
      name: ["Splendeurs des pays baltes : de Vilnius à Tallinn par Trakai, Nida, Rundāle et Riga", "Splendours of the Baltic states: from Vilnius to Tallinn via Trakai, Nida, Rundāle and Riga", "Esplendores de los países bálticos: de Vilna a Tallin por Trakai, Nida, Rundāle y Riga"],
      tagline: ["Les trois pays baltes du sud au nord", "The three Baltic countries from south to north", "Los tres países bálticos de sur a norte"],
      description: [
        "Les pays baltes de Vilnius à Tallinn : deux jours à Vilnius, Trakai, Kaunas, l'isthme de Courlande et Nida, la colline des Croix et Rundāle, Riga, la vallée de la Gauja, puis Tallinn. Version Merveilles des pays baltes (7 jours), avec Kernavė, à partir de 1 069 € par personne.",
        "The Baltic states from Vilnius to Tallinn: two days in Vilnius, Trakai, Kaunas, the Curonian Spit and Nida, the Hill of Crosses and Rundāle, Riga, the Gauja valley, then Tallinn. The Wonders of the Baltic states version (7 days), with Kernavė, from €1,069 per person.",
        "Los países bálticos de Vilna a Tallin: dos días en Vilna, Trakai, Kaunas, el istmo de Curlandia y Nida, la colina de las Cruces y Rundāle, Riga, el valle de Gauja, y Tallin. Versión Maravillas de los países bálticos (7 días), con Kernavė, desde 1.069 € por persona.",
      ],
      includes: INC(7),
      price: 1114, nights: 7, departureFrom: "Lyon", image: "sp6",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 40, order: -41994,
      chapters: [
        lt.chapter(["La Lituanie", "Lithuania", "Lituania"], ["Vilnius, Trakai et la Courlande.", "Vilnius, Trakai and Courland.", "Vilna, Trakai y Curlandia."],
          ["sp5", "sp6", "sp7", "mb1"],
          [
            lt.day(1, ...arr(VNO), "sp5"),
            lt.day(2, VNO, X_VNO, "sp5"),
            lt.day(3, ["Trakai – Kaunas – Nida – Klaipėda", "Trakai – Kaunas – Nida – Klaipėda", "Trakai – Kaunas – Nida – Klaipėda"], [`${X_TRAKAI[0]} ${X_NIDA[0]}`, `${X_TRAKAI[1]} ${X_NIDA[1]}`, `${X_TRAKAI[2]} ${X_NIDA[2]}`], "sp6"),
            lt.day(4, ["Šiauliai – Rundāle – Riga", "Šiauliai – Rundāle – Riga", "Šiauliai – Rundāle – Riga"], X_RUNDALE, "sp4"),
          ]),
        lt.chapter(["Riga et Tallinn", "Riga and Tallinn", "Riga y Tallin"], ["Le nord balte.", "The Baltic north.", "El norte báltico."],
          ["sp1", "sp3", "sp2", "mb7"],
          [
            lt.day(5, RIX, X_RIX, "sp3"),
            lt.day(6, ["Sigulda – Turaida – Cēsis – Tallinn", "Sigulda – Turaida – Cēsis – Tallinn", "Sigulda – Turaida – Cēsis – Tallin"], X_GAUJA, "sp1"),
            lt.day(7, TLL, X_TLL, "sp2"),
            lt.day(8, T_HOME, home(TLL), "mb7"),
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

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
