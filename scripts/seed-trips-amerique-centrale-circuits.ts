// Central America — 14 journey-format trips: Costa Rica (7), Panama (3), Guatemala (3) and Belize (1),
// all existing destinations. Near-identical supplier programmes (yearly editions, beach extensions,
// pre-tours) are grouped on one page and described inside each trip. Prices are per-person "from"
// prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-amerique-centrale-circuits.ts
// Requires scripts/upload-images-cam-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "costa-rica-cap-sur-le-costa-rica-arenal-rincon-monteverde-10j": ["405618", "337458", "405619", "337478", "405778", "405638", "337479", "405779", "405678"],
  "costa-rica-incontournables-du-costa-rica-10j": ["381918", "381999", "382019"],
  "costa-rica-hola-costa-rica-privatif-manuel-antonio-11j": ["412538"],
  "costa-rica-tresors-du-costa-rica-tarcoles-manuel-antonio-12j": ["402178", "287598", "402738", "401899", "287600", "400918", "402098", "287599"],
  "costa-rica-magie-du-costa-rica-tortuguero-13j": ["379778", "380339", "380341"],
  "costa-rica-essentiel-costa-rica-nicaragua-granada-leon-12j": ["404038", "404040", "404039"],
  "costa-rica-splendeurs-du-costa-rica-corcovado-dota-13j": ["410658"],
  "panama-decouverte-du-panama-canal-embera-portobelo-10j": ["385918", "146998", "387479", "146238", "386038", "147018"],
  "panama-splendeurs-du-panama-boca-chica-boquete-13j": ["405798"],
  "panama-couleurs-du-panama-coiba-boquete-bocas-14j": ["408798", "408799"],
  "guatemala-decouverte-du-guatemala-tikal-atitlan-12j": ["390182", "296399", "408078", "296400"],
  "guatemala-cap-sur-le-guatemala-copan-rio-dulce-12j": ["418578", "418579"],
  "guatemala-couleurs-du-guatemala-et-du-mexique-19j": ["408800"],
  "belize-guatemala-et-belize-tikal-atitlan-ambergris-16j": ["408079", "296401"],
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
const join = (a: L3, b: L3): L3 => [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`, `${a[2]} ${b[2]}`];
const SJO: L3 = ["San José", "San José", "San José"];
const PTY: L3 = ["Panama City", "Panama City", "Ciudad de Panamá"];
const GUA: L3 = ["Guatemala City", "Guatemala City", "Ciudad de Guatemala"];

// Costa Rica shared texts
const X_IRAZU: L3 = ["Le volcan Irazú et son lac de cratère vert émeraude, puis Cartago, ancienne capitale, et sa basilique.", "Irazú volcano and its emerald crater lake, then Cartago, the former capital, and its basilica.", "El volcán Irazú y su lago de cráter verde esmeralda, y Cartago, antigua capital, y su basílica."];
const X_OROSI: L3 = ["La vallée d'Orosi, ses plantations de café et l'église coloniale la plus ancienne du pays.", "The Orosi valley, its coffee plantations and the country's oldest colonial church.", "El valle de Orosi, sus plantaciones de café y la iglesia colonial más antigua del país."];
const X_ARENAL: L3 = ["Le parc national du volcan Arenal, ses coulées de lave figées, ses ponts suspendus dans la forêt et le soir les sources d'eau chaude.", "Arenal Volcano national park, its frozen lava flows, its hanging bridges in the forest and in the evening the hot springs.", "El parque nacional del volcán Arenal, sus coladas de lava solidificadas, sus puentes colgantes en el bosque y por la noche las aguas termales."];
const X_SARAPIQUI: L3 = ["La région de Sarapiquí, ses plantations d'ananas et sa forêt tropicale de plaine, avant La Fortuna, au pied de l'Arenal.", "The Sarapiquí region, its pineapple plantations and lowland rainforest, before La Fortuna, at the foot of Arenal.", "La región de Sarapiquí, sus plantaciones de piña y su selva tropical de llanura, antes de La Fortuna, al pie del Arenal."];
const X_RINCON: L3 = ["Le parc du Rincón de la Vieja, ses fumerolles, ses mares de boue bouillonnante et ses cascades, dans la région sèche du Guanacaste.", "Rincón de la Vieja park, its fumaroles, bubbling mud pools and waterfalls, in the dry Guanacaste region.", "El parque del Rincón de la Vieja, sus fumarolas, sus pozas de lodo hirviente y sus cascadas, en la región seca de Guanacaste."];
const X_MALEKU: L3 = ["Rencontre avec la communauté indigène Maleku, puis route vers le Guanacaste.", "A meeting with the Maleku indigenous community, then the drive to Guanacaste.", "Encuentro con la comunidad indígena Maleku, y carretera hacia Guanacaste."];
const X_MONTE: L3 = ["La forêt de nuages de Monteverde, ses ponts suspendus au-dessus de la canopée, ses colibris et peut-être le quetzal resplendissant.", "The Monteverde cloud forest, its hanging bridges above the canopy, its hummingbirds and perhaps the resplendent quetzal.", "El bosque nuboso de Monteverde, sus puentes colgantes sobre el dosel, sus colibríes y quizá el quetzal resplandeciente."];
const X_SARCHI: L3 = ["Sarchí et ses charrettes peintes, artisanat national, puis retour à San José.", "Sarchí and its painted ox-carts, a national craft, then back to San José.", "Sarchí y sus carretas pintadas, artesanía nacional, y regreso a San José."];
const X_TORTU: L3 = ["Le parc de Tortuguero, accessible seulement par bateau : canaux bordés de jungle, singes hurleurs, caïmans, paresseux et, selon la saison, la ponte des tortues.", "Tortuguero park, reachable only by boat: jungle-lined canals, howler monkeys, caimans, sloths and, in season, nesting turtles.", "El parque de Tortuguero, accesible solo en barco: canales bordeados de selva, monos aulladores, caimanes, perezosos y, según la temporada, el desove de las tortugas."];
const X_MA: L3 = ["Le parc de Manuel Antonio, ses plages de sable blanc bordées de forêt, ses singes capucins et ses paresseux.", "Manuel Antonio park, its white sand beaches fringed with forest, its capuchin monkeys and sloths.", "El parque de Manuel Antonio, sus playas de arena blanca bordeadas de bosque, sus monos capuchinos y sus perezosos."];
const X_CANO: L3 = ["Le refuge de Caño Negro en bateau, ses oiseaux aquatiques, caïmans et iguanes.", "The Caño Negro refuge by boat, its waterbirds, caimans and iguanas.", "El refugio de Caño Negro en barco, sus aves acuáticas, caimanes e iguanas."];
const X_SJO: L3 = ["Découverte de San José, son Théâtre national et le musée de l'Or précolombien.", "A discovery of San José, its National Theatre and the Pre-Columbian Gold Museum.", "Descubrimiento de San José, su Teatro Nacional y el museo del Oro precolombino."];

// Panama shared texts
const X_PTY: L3 = ["Panama City : le Casco Viejo colonial classé par l'Unesco, les ruines de Panamá Viejo, la chaussée d'Amador et les écluses de Miraflores, où les navires franchissent le canal.", "Panama City: the UNESCO-listed colonial Casco Viejo, the ruins of Panamá Viejo, the Amador Causeway and the Miraflores locks, where ships pass through the canal.", "Ciudad de Panamá: el Casco Viejo colonial declarado por la Unesco, las ruinas de Panamá Viejo, la calzada de Amador y las esclusas de Miraflores, donde los barcos cruzan el canal."];
const X_GATUN: L3 = ["En bateau sur le lac Gatún, au cœur du canal, à la rencontre des singes de l'île Mono, puis la communauté indigène Emberá, ses danses et son artisanat.", "By boat on Gatún Lake, at the heart of the canal, to meet the monkeys of Mono Island, then the Emberá indigenous community, its dances and crafts.", "En barco por el lago Gatún, en el corazón del canal, al encuentro de los monos de la isla Mono, y la comunidad indígena Emberá, sus danzas y su artesanía."];
const X_VALLE: L3 = ["El Valle de Antón, village niché dans le cratère d'un ancien volcan, ses cascades et sa forêt.", "El Valle de Antón, a village nestled in the crater of an ancient volcano, its waterfalls and forest.", "El Valle de Antón, pueblo enclavado en el cráter de un antiguo volcán, sus cascadas y su bosque."];
const X_BOQUETE: L3 = ["Boquete, dans les hautes terres de Chiriquí, ses plantations de café Geisha, ses sentiers et le volcan Barú.", "Boquete, in the Chiriquí highlands, its Geisha coffee plantations, its trails and Barú volcano.", "Boquete, en las tierras altas de Chiriquí, sus plantaciones de café Geisha, sus senderos y el volcán Barú."];

// Guatemala shared texts
const X_QUIRIGUA: L3 = ["Le site maya de Quiriguá et ses stèles sculptées, les plus hautes du monde maya, puis le Río Dulce.", "The Maya site of Quiriguá and its carved stelae, the tallest in the Maya world, then the Río Dulce.", "El sitio maya de Quiriguá y sus estelas esculpidas, las más altas del mundo maya, y el Río Dulce."];
const X_LIVING: L3 = ["En bateau sur le Río Dulce et ses gorges jusqu'à Livingston, village garifuna sur la mer des Caraïbes.", "By boat along the Río Dulce and its gorges to Livingston, a Garifuna village on the Caribbean Sea.", "En lancha por el Río Dulce y sus gargantas hasta Livingston, pueblo garífuna en el mar Caribe."];
const X_TIKAL: L3 = ["Tikal, la plus grande cité maya, ses temples-pyramides qui dépassent la canopée de la jungle du Petén, ses singes et ses toucans.", "Tikal, the largest Maya city, its temple-pyramids rising above the canopy of the Petén jungle, its monkeys and toucans.", "Tikal, la mayor ciudad maya, sus templos-pirámide que sobresalen del dosel de la selva del Petén, sus monos y tucanes."];
const X_ATITLAN: L3 = ["Le lac Atitlán, entouré de trois volcans, et la navigation vers ses villages mayas.", "Lake Atitlán, ringed by three volcanoes, and a boat trip to its Maya villages.", "El lago Atitlán, rodeado de tres volcanes, y la navegación hacia sus pueblos mayas."];
const X_CHICHI: L3 = ["Le grand marché de Chichicastenango, ses tissus brodés et son église où se mêlent rites mayas et catholiques, puis San Antonio Palopó.", "The great market of Chichicastenango, its embroidered textiles and its church where Maya and Catholic rites mingle, then San Antonio Palopó.", "El gran mercado de Chichicastenango, sus tejidos bordados y su iglesia donde se mezclan ritos mayas y católicos, y San Antonio Palopó."];
const X_ANTIGUA: L3 = ["Antigua, ancienne capitale coloniale au pied des volcans, ses rues pavées, ses églises baroques en ruine et l'arche de Santa Catalina.", "Antigua, the former colonial capital at the foot of the volcanoes, its cobbled streets, ruined baroque churches and the Santa Catalina arch.", "Antigua, antigua capital colonial al pie de los volcanes, sus calles empedradas, sus iglesias barrocas en ruinas y el arco de Santa Catalina."];
const X_YAXHA: L3 = ["Le site maya de Yaxhá au bord de sa lagune, puis vol retour vers Guatemala City.", "The Maya site of Yaxhá beside its lagoon, then a flight back to Guatemala City.", "El sitio maya de Yaxhá a orillas de su laguna, y vuelo de regreso a Ciudad de Guatemala."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const DRY = { label: ["Décembre à avril", "December to April", "Diciembre a abril"] as L3, months: "december,january,february,march,april" };
  const cr = circuitBuilders({ destinationSlug: "costa-rica", imagePrefix: "cam", season: DRY });
  const pa = circuitBuilders({ destinationSlug: "panama", imagePrefix: "cam", season: DRY });
  const gt = circuitBuilders({ destinationSlug: "guatemala", imagePrefix: "cam", season: { label: ["Novembre à avril", "November to April", "Noviembre a abril"], months: "november,december,january,february,march,april" } });
  const gm = circuitBuilders({ destinationSlug: "guatemala", imagePrefix: "mex", season: { label: ["Novembre à avril", "November to April", "Noviembre a abril"], months: "november,december,january,february,march,april" } });
  const bz = circuitBuilders({ destinationSlug: "belize", imagePrefix: "cam", season: { label: ["Décembre à avril", "December to April", "Diciembre a abril"], months: "december,january,february,march,april" } });
  const INC = (n: number, max: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts aéroport,${n} nuits en hôtels et lodges,Transport en minibus ou autocar,Visites et entrées des parcs du programme,Guide francophone,Groupe de ${max} personnes au plus${extra}`,
    `Flights from France,Airport transfers,${n} nights in hotels and lodges,Transport by minibus or coach,Visits and park fees in the programme,French-speaking guide,Group of ${max} at most${extra}`,
    `Vuelos desde Francia,Traslados al aeropuerto,${n} noches en hoteles y lodges,Transporte en minibús o autocar,Visitas y entradas a los parques del programa,Guía francófono,Grupo de ${max} personas como máximo${extra}`,
  ];
  const fly = (b: typeof cr, n: number, city: L3, img: string) => b.day(n, ...dep(city), img);

  const journeyTrips = [
    // ═════════════ COSTA RICA ═════════════
    cr.trip({
      slug: "costa-rica-cap-sur-le-costa-rica-arenal-rincon-monteverde-10j",
      name: ["Cap sur le Costa Rica : Irazú, Arenal, Rincón de la Vieja et Monteverde", "Heading for Costa Rica: Irazú, Arenal, Rincón de la Vieja and Monteverde", "Rumbo a Costa Rica: Irazú, Arenal, Rincón de la Vieja y Monteverde"],
      tagline: ["Volcans, forêt de nuages et faune tropicale, en groupe de 20 au plus", "Volcanoes, cloud forest and tropical wildlife, in a group of 20 at most", "Volcanes, bosque nuboso y fauna tropical, en grupo de 20 como máximo"],
      description: [
        "Le Costa Rica essentiel : le volcan Irazú, Cartago et la vallée d'Orosi, Sarchí, deux nuits au pied de l'Arenal avec le refuge de Caño Negro, deux nuits au Rincón de la Vieja et la forêt de nuages de Monteverde. Variantes avec trois nuits de plage à Manuel Antonio (13 jours) à partir de 3 161 € ou à Tambor à partir de 3 197 €, avec un pré-tour à Tortuguero à partir de 2 969 €, ou Tortuguero et plage (16 jours) à partir de 3 840 € par personne.",
        "Essential Costa Rica: Irazú volcano, Cartago and the Orosi valley, Sarchí, two nights at the foot of Arenal with the Caño Negro refuge, two nights at Rincón de la Vieja and the Monteverde cloud forest. Variants with three beach nights at Manuel Antonio (13 days) from €3,161 or at Tambor from €3,197, with a Tortuguero pre-tour from €2,969, or Tortuguero and beach (16 days) from €3,840 per person.",
        "Lo esencial de Costa Rica: el volcán Irazú, Cartago y el valle de Orosi, Sarchí, dos noches al pie del Arenal con el refugio de Caño Negro, dos noches en el Rincón de la Vieja y el bosque nuboso de Monteverde. Variantes con tres noches de playa en Manuel Antonio (13 días) desde 3.161 € o en Tambor desde 3.197 €, con un pre-tour en Tortuguero desde 2.969 €, o Tortuguero y playa (16 días) desde 3.840 € por persona.",
      ],
      includes: INC(8, 20),
      price: 2257, nights: 8, departureFrom: "Paris", image: "hc6",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 20, order: -50000,
      chapters: [
        cr.chapter(["La vallée centrale et l'Arenal", "The Central Valley and Arenal", "El Valle Central y el Arenal"], ["Volcans et café.", "Volcanoes and coffee.", "Volcanes y café."],
          ["ni1", "ni3", "hc6", "cs4"],
          [
            cr.day(1, ...arr(SJO), "hc7"),
            cr.day(2, ["Irazú, Cartago et Orosi", "Irazú, Cartago and Orosi", "Irazú, Cartago y Orosi"], join(X_IRAZU, X_OROSI), "ni1"),
            cr.day(3, ["Sarchí, Grecia – La Fortuna", "Sarchí, Grecia – La Fortuna", "Sarchí, Grecia – La Fortuna"], ["Sarchí et ses charrettes peintes, l'église métallique de Grecia, puis La Fortuna au pied du volcan Arenal.", "Sarchí and its painted ox-carts, the metal church of Grecia, then La Fortuna at the foot of Arenal volcano.", "Sarchí y sus carretas pintadas, la iglesia metálica de Grecia, y La Fortuna al pie del volcán Arenal."], "hc6"),
            cr.day(4, ["Caño Negro", "Caño Negro", "Caño Negro"], X_CANO, "ni2"),
          ]),
        cr.chapter(["Guanacaste et Monteverde", "Guanacaste and Monteverde", "Guanacaste y Monteverde"], ["Volcans actifs et forêt de nuages.", "Active volcanoes and cloud forest.", "Volcanes activos y bosque nuboso."],
          ["cs7", "ni4", "ir1", "hc2"],
          [
            cr.day(5, ["Arenal – Rincón de la Vieja", "Arenal – Rincón de la Vieja", "Arenal – Rincón de la Vieja"], ["Route vers le Guanacaste et ses grandes haciendas.", "Drive to Guanacaste and its large haciendas.", "Carretera hacia Guanacaste y sus grandes haciendas."], "ni4"),
            cr.day(6, ["Rincón de la Vieja", "Rincón de la Vieja", "Rincón de la Vieja"], X_RINCON, "cs7"),
            cr.day(7, ["Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde"], ["Route vers les hauteurs de Monteverde.", "Drive up to the heights of Monteverde.", "Carretera hacia las alturas de Monteverde."], "hc2"),
            cr.day(8, ["Monteverde – San José", "Monteverde – San José", "Monteverde – San José"], X_MONTE, "ir1"),
            cr.day(9, ...dep(SJO), "hc7"), cr.day(10, T_HOME, HOME, "hc6"),
          ]),
      ],
    }),

    cr.trip({
      slug: "costa-rica-incontournables-du-costa-rica-10j",
      name: ["Les incontournables du Costa Rica : Irazú, Arenal, les Maleku et Monteverde", "Highlights of Costa Rica: Irazú, Arenal, the Maleku and Monteverde", "Lo esencial de Costa Rica: Irazú, Arenal, los Maleku y Monteverde"],
      tagline: ["Volcans, peuples indigènes et forêt de nuages en dix jours", "Volcanoes, indigenous peoples and cloud forest in ten days", "Volcanes, pueblos indígenas y bosque nuboso en diez días"],
      description: [
        "Un premier Costa Rica en groupe de 25 personnes au plus : Irazú et Cartago, Sarapiquí, deux nuits à l'Arenal, la communauté Maleku, le Rincón de la Vieja, Monteverde et Sarchí. Avec trois nuits de plage à Manuel Antonio (13 jours) à partir de 3 012 €, ou en tout compris à Tamarindo à partir de 3 255 € par personne.",
        "A first taste of Costa Rica in a group of 25 at most: Irazú and Cartago, Sarapiquí, two nights at Arenal, the Maleku community, Rincón de la Vieja, Monteverde and Sarchí. With three beach nights at Manuel Antonio (13 days) from €3,012, or all-inclusive at Tamarindo from €3,255 per person.",
        "Un primer Costa Rica en grupo de 25 personas como máximo: Irazú y Cartago, Sarapiquí, dos noches en el Arenal, la comunidad Maleku, el Rincón de la Vieja, Monteverde y Sarchí. Con tres noches de playa en Manuel Antonio (13 días) desde 3.012 €, o con todo incluido en Tamarindo desde 3.255 € por persona.",
      ],
      includes: INC(8, 25),
      price: 2300, nights: 8, departureFrom: "Bruxelles", image: "ir3",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 25, order: -49999,
      chapters: [
        cr.chapter(["La vallée centrale et l'Arenal", "The Central Valley and Arenal", "El Valle Central y el Arenal"], ["Volcans et forêt de plaine.", "Volcanoes and lowland forest.", "Volcanes y selva de llanura."],
          ["ir3", "ir4", "ni3"],
          [
            cr.day(1, ...arr(SJO), "hc7"),
            cr.day(2, ["Irazú et Cartago", "Irazú and Cartago", "Irazú y Cartago"], X_IRAZU, "ni3"),
            cr.day(3, ["Sarapiquí – Arenal", "Sarapiquí – Arenal", "Sarapiquí – Arenal"], X_SARAPIQUI, "ir4"),
            cr.day(4, ["Parc national Arenal", "Arenal national park", "Parque nacional Arenal"], X_ARENAL, "ir3"),
          ]),
        cr.chapter(["Guanacaste et Monteverde", "Guanacaste and Monteverde", "Guanacaste y Monteverde"], ["Maleku, volcans et forêt de nuages.", "The Maleku, volcanoes and cloud forest.", "Los Maleku, volcanes y bosque nuboso."],
          ["ir5", "ir2", "ir1"],
          [
            cr.day(5, ["Maleku – Rincón de la Vieja", "Maleku – Rincón de la Vieja", "Maleku – Rincón de la Vieja"], X_MALEKU, "ir2"),
            cr.day(6, ["Rincón de la Vieja", "Rincón de la Vieja", "Rincón de la Vieja"], X_RINCON, "cs7"),
            cr.day(7, ["Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde"], X_MONTE, "ir1"),
            cr.day(8, ["Monteverde – Sarchí – San José", "Monteverde – Sarchí – San José", "Monteverde – Sarchí – San José"], X_SARCHI, "ir5"),
            fly(cr, 9, SJO, "hc7"), cr.day(10, T_HOME, HOME, "ir3"),
          ]),
      ],
    }),

    cr.trip({
      slug: "costa-rica-hola-costa-rica-privatif-manuel-antonio-11j",
      name: ["Hola Costa Rica en privatif : Arenal, Rincón de la Vieja, Monteverde et Manuel Antonio", "Hola Costa Rica, private tour: Arenal, Rincón de la Vieja, Monteverde and Manuel Antonio", "Hola Costa Rica en privado: Arenal, Rincón de la Vieja, Monteverde y Manuel Antonio"],
      tagline: ["Votre guide et votre chauffeur, des volcans jusqu'aux plages du Pacifique", "Your own guide and driver, from the volcanoes to the Pacific beaches", "Su guía y su chófer, de los volcanes a las playas del Pacífico"],
      description: [
        "Un circuit rien qu'à vous : San José, deux nuits à l'Arenal, deux nuits au Rincón de la Vieja, la forêt de nuages de Monteverde, puis deux nuits à Manuel Antonio entre forêt et plage.",
        "A tour just for you: San José, two nights at Arenal, two nights at Rincón de la Vieja, the Monteverde cloud forest, then two nights at Manuel Antonio between forest and beach.",
        "Un circuito solo para ustedes: San José, dos noches en el Arenal, dos noches en el Rincón de la Vieja, el bosque nuboso de Monteverde, y dos noches en Manuel Antonio entre bosque y playa.",
      ],
      includes: [
        "Vols depuis la France,9 nuits en hôtels de charme et lodges,Véhicule privé avec chauffeur,Guide francophone privé,Visites et entrées des parcs du programme",
        "Flights from France,9 nights in boutique hotels and lodges,Private vehicle with driver,Private French-speaking guide,Visits and park fees in the programme",
        "Vuelos desde Francia,9 noches en hoteles con encanto y lodges,Vehículo privado con chófer,Guía privado francófono,Visitas y entradas a los parques del programa",
      ],
      price: 3108, nights: 9, departureFrom: "Paris", image: "hc4",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,family", maxGuests: 8, order: -49998,
      chapters: [
        cr.chapter(["San José et l'Arenal", "San José and Arenal", "San José y el Arenal"], ["La capitale et le volcan.", "The capital and the volcano.", "La capital y el volcán."],
          ["hc7", "hc6", "hc1"],
          [
            cr.day(1, ...arr(SJO), "hc7"),
            cr.day(2, SJO, X_SJO, "hc7"),
            cr.day(3, ["San José – La Fortuna", "San José – La Fortuna", "San José – La Fortuna"], ["Route vers La Fortuna, au pied du volcan Arenal.", "Drive to La Fortuna, at the foot of Arenal volcano.", "Carretera hacia La Fortuna, al pie del volcán Arenal."], "hc6"),
            cr.day(4, ["Arenal", "Arenal", "Arenal"], X_ARENAL, "hc1"),
          ]),
        cr.chapter(["Guanacaste, Monteverde et Manuel Antonio", "Guanacaste, Monteverde and Manuel Antonio", "Guanacaste, Monteverde y Manuel Antonio"], ["Volcans, nuages et plage.", "Volcanoes, clouds and beach.", "Volcanes, nubes y playa."],
          ["hc3", "hc2", "hc5", "hc4"],
          [
            cr.day(5, ["Arenal – Rincón de la Vieja", "Arenal – Rincón de la Vieja", "Arenal – Rincón de la Vieja"], ["Route vers le Guanacaste.", "Drive to Guanacaste.", "Carretera hacia Guanacaste."], "ni4"),
            cr.day(6, ["Rincón de la Vieja", "Rincón de la Vieja", "Rincón de la Vieja"], X_RINCON, "cs7"),
            cr.day(7, ["Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde"], X_MONTE, "hc3"),
            cr.day(8, ["Monteverde – Manuel Antonio", "Monteverde – Manuel Antonio", "Monteverde – Manuel Antonio"], ["Descente vers la côte Pacifique et Manuel Antonio.", "Down to the Pacific coast and Manuel Antonio.", "Bajada hacia la costa del Pacífico y Manuel Antonio."], "hc5"),
            cr.day(9, ["Manuel Antonio", "Manuel Antonio", "Manuel Antonio"], X_MA, "hc4"),
            cr.day(10, ["Manuel Antonio – San José – vol retour", "Manuel Antonio – San José – flight home", "Manuel Antonio – San José – vuelo de regreso"], ["Retour vers San José et envol pour la France.", "Back to San José and fly to France.", "Regreso a San José y vuelo a Francia."], "hc2"),
            cr.day(11, T_HOME, HOME, "hc4"),
          ]),
      ],
    }),

    cr.trip({
      slug: "costa-rica-tresors-du-costa-rica-tarcoles-manuel-antonio-12j",
      name: ["Trésors du Costa Rica : Arenal, Rincón de la Vieja, Monteverde et Manuel Antonio", "Treasures of Costa Rica: Arenal, Rincón de la Vieja, Monteverde and Manuel Antonio", "Tesoros de Costa Rica: Arenal, Rincón de la Vieja, Monteverde y Manuel Antonio"],
      tagline: ["Trois nuits à l'Arenal et le Pacifique, en groupe de 18 au plus", "Three nights at Arenal and the Pacific, in a group of 18 at most", "Tres noches en el Arenal y el Pacífico, en grupo de 18 como máximo"],
      description: [
        "Le Costa Rica en profondeur : Irazú et Cartago, trois nuits dans la région de l'Arenal, la communauté Maleku, le Rincón de la Vieja, Monteverde, puis les crocodiles de la rivière Tárcoles et le parc de Manuel Antonio. Avec un pré-tour à Tortuguero (15 jours) à partir de 3 331 €, une extension plage à Puntarenas à partir de 3 600 €, les deux (18 jours) à partir de 4 006 €, ou avec Corcovado et San Gerardo de Dota à partir de 4 099 € par personne.",
        "Costa Rica in depth: Irazú and Cartago, three nights in the Arenal area, the Maleku community, Rincón de la Vieja, Monteverde, then the crocodiles of the Tárcoles River and Manuel Antonio park. With a Tortuguero pre-tour (15 days) from €3,331, a beach extension at Puntarenas from €3,600, both (18 days) from €4,006, or with Corcovado and San Gerardo de Dota from €4,099 per person.",
        "Costa Rica en profundidad: Irazú y Cartago, tres noches en la región del Arenal, la comunidad Maleku, el Rincón de la Vieja, Monteverde, y los cocodrilos del río Tárcoles y el parque de Manuel Antonio. Con un pre-tour en Tortuguero (15 días) desde 3.331 €, una extensión de playa en Puntarenas desde 3.600 €, ambas (18 días) desde 4.006 €, o con Corcovado y San Gerardo de Dota desde 4.099 € por persona.",
      ],
      includes: INC(10, 18),
      price: 2741, nights: 10, departureFrom: "Luxembourg", image: "tr7",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 18, order: -49997,
      chapters: [
        cr.chapter(["La vallée centrale et l'Arenal", "The Central Valley and Arenal", "El Valle Central y el Arenal"], ["Volcans et forêt.", "Volcanoes and forest.", "Volcanes y bosque."],
          ["tr4", "tr6", "tr1", "tr3"],
          [
            cr.day(1, ...arr(SJO), "tr4"),
            cr.day(2, ["Irazú et Cartago", "Irazú and Cartago", "Irazú y Cartago"], X_IRAZU, "tr6"),
            cr.day(3, ["Sarapiquí – Arenal", "Sarapiquí – Arenal", "Sarapiquí – Arenal"], X_SARAPIQUI, "tr1"),
            cr.day(4, ["Parc national Arenal", "Arenal national park", "Parque nacional Arenal"], X_ARENAL, "tr1"),
            cr.day(5, ["Arenal", "Arenal", "Arenal"], ["Journée libre : tyrolienne, cascade de La Fortuna, kayak sur le lac ou sources chaudes.", "A free day: zip-lining, La Fortuna waterfall, kayaking on the lake or hot springs.", "Día libre: tirolina, catarata de La Fortuna, kayak en el lago o aguas termales."], "tr3"),
          ]),
        cr.chapter(["Guanacaste, Monteverde et le Pacifique", "Guanacaste, Monteverde and the Pacific", "Guanacaste, Monteverde y el Pacífico"], ["Volcans, nuages et plages.", "Volcanoes, clouds and beaches.", "Volcanes, nubes y playas."],
          ["tr5", "tr8", "tr7"],
          [
            cr.day(6, ["Maleku – Rincón de la Vieja", "Maleku – Rincón de la Vieja", "Maleku – Rincón de la Vieja"], X_MALEKU, "tr5"),
            cr.day(7, ["Rincón de la Vieja", "Rincón de la Vieja", "Rincón de la Vieja"], X_RINCON, "cs7"),
            cr.day(8, ["Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde"], X_MONTE, "ir1"),
            cr.day(9, ["Monteverde – Tárcoles", "Monteverde – Tárcoles", "Monteverde – Tárcoles"], ["Descente vers le Pacifique et les crocodiles géants du pont de la rivière Tárcoles.", "Down to the Pacific and the giant crocodiles under the Tárcoles River bridge.", "Bajada hacia el Pacífico y los cocodrilos gigantes del puente del río Tárcoles."], "tr8"),
            cr.day(10, ["Manuel Antonio", "Manuel Antonio", "Manuel Antonio"], X_MA, "tr7"),
            cr.day(11, ["Tárcoles – San José – vol retour", "Tárcoles – San José – flight home", "Tárcoles – San José – vuelo de regreso"], ["Retour vers San José et envol pour la France, ou début de l'extension.", "Back to San José and fly to France, or start of the extension.", "Regreso a San José y vuelo a Francia, o inicio de la extensión."], "tr4"),
            cr.day(12, T_HOME, HOME, "tr7"),
          ]),
      ],
    }),

    cr.trip({
      slug: "costa-rica-magie-du-costa-rica-tortuguero-13j",
      name: ["Magie du Costa Rica : Tortuguero, Irazú, Arenal, Rincón de la Vieja et Monteverde", "Magic of Costa Rica: Tortuguero, Irazú, Arenal, Rincón de la Vieja and Monteverde", "Magia de Costa Rica: Tortuguero, Irazú, Arenal, Rincón de la Vieja y Monteverde"],
      tagline: ["Les canaux de la côte caraïbe puis les volcans du centre", "The canals of the Caribbean coast, then the volcanoes of the centre", "Los canales de la costa caribeña y los volcanes del centro"],
      description: [
        "Le Costa Rica des deux versants en groupe de 25 personnes au plus : deux nuits à Tortuguero sur la côte caraïbe, Irazú et Cartago, Sarapiquí, deux nuits à l'Arenal, la communauté Maleku, le Rincón de la Vieja, Monteverde et Sarchí. Avec trois nuits de plage à Manuel Antonio (16 jours) à partir de 3 680 €, ou en tout compris à Tamarindo à partir de 3 715 € par personne.",
        "Costa Rica on both sides in a group of 25 at most: two nights at Tortuguero on the Caribbean coast, Irazú and Cartago, Sarapiquí, two nights at Arenal, the Maleku community, Rincón de la Vieja, Monteverde and Sarchí. With three beach nights at Manuel Antonio (16 days) from €3,680, or all-inclusive at Tamarindo from €3,715 per person.",
        "Costa Rica de las dos vertientes en grupo de 25 personas como máximo: dos noches en Tortuguero en la costa caribeña, Irazú y Cartago, Sarapiquí, dos noches en el Arenal, la comunidad Maleku, el Rincón de la Vieja, Monteverde y Sarchí. Con tres noches de playa en Manuel Antonio (16 días) desde 3.680 €, o con todo incluido en Tamarindo desde 3.715 € por persona.",
      ],
      includes: INC(11, 25),
      price: 2920, nights: 11, departureFrom: "Bruxelles", image: "mg1",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 25, order: -49996,
      chapters: [
        cr.chapter(["Tortuguero", "Tortuguero", "Tortuguero"], ["Les canaux de la côte caraïbe.", "The canals of the Caribbean coast.", "Los canales de la costa caribeña."],
          ["mg1", "mg2", "ni8"],
          [
            cr.day(1, ...arr(SJO), "hc7"),
            cr.day(2, ["San José – Tortuguero", "San José – Tortuguero", "San José – Tortuguero"], ["Route à travers le parc Braulio Carrillo puis bateau jusqu'aux lodges de Tortuguero.", "Through Braulio Carrillo park, then by boat to the Tortuguero lodges.", "Carretera a través del parque Braulio Carrillo y barco hasta los lodges de Tortuguero."], "ni8"),
            cr.day(3, ["Parc national de Tortuguero", "Tortuguero national park", "Parque nacional de Tortuguero"], X_TORTU, "mg1"),
            cr.day(4, ["Tortuguero – San José", "Tortuguero – San José", "Tortuguero – San José"], ["Retour en bateau puis route vers San José.", "Back by boat, then the drive to San José.", "Regreso en barco y carretera hacia San José."], "mg2"),
            cr.day(5, ["Irazú et Cartago", "Irazú and Cartago", "Irazú y Cartago"], X_IRAZU, "ni3"),
          ]),
        cr.chapter(["Arenal, Guanacaste et Monteverde", "Arenal, Guanacaste and Monteverde", "Arenal, Guanacaste y Monteverde"], ["Volcans et forêt de nuages.", "Volcanoes and cloud forest.", "Volcanes y bosque nuboso."],
          ["mg6", "mg4", "ir4"],
          [
            cr.day(6, ["Sarapiquí – Arenal", "Sarapiquí – Arenal", "Sarapiquí – Arenal"], X_SARAPIQUI, "ir4"),
            cr.day(7, ["Parc national Arenal", "Arenal national park", "Parque nacional Arenal"], X_ARENAL, "ir3"),
            cr.day(8, ["Maleku – Rincón de la Vieja", "Maleku – Rincón de la Vieja", "Maleku – Rincón de la Vieja"], X_MALEKU, "ir2"),
            cr.day(9, ["Rincón de la Vieja", "Rincón de la Vieja", "Rincón de la Vieja"], X_RINCON, "cs7"),
            cr.day(10, ["Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde", "Rincón de la Vieja – Monteverde"], X_MONTE, "mg4"),
            cr.day(11, ["Monteverde – Sarchí – San José", "Monteverde – Sarchí – San José", "Monteverde – Sarchí – San José"], X_SARCHI, "mg6"),
            fly(cr, 12, SJO, "hc7"), cr.day(13, T_HOME, HOME, "mg1"),
          ]),
      ],
    }),

    cr.trip({
      slug: "costa-rica-essentiel-costa-rica-nicaragua-granada-leon-12j",
      name: ["L'essentiel du Costa Rica et du Nicaragua : Tortuguero, Arenal, Granada et León", "The Essentials of Costa Rica and Nicaragua: Tortuguero, Arenal, Granada and León", "Lo esencial de Costa Rica y Nicaragua: Tortuguero, Arenal, Granada y León"],
      tagline: ["Deux pays d'Amérique centrale, des canaux de Tortuguero aux villes coloniales du Nicaragua", "Two Central American countries, from Tortuguero's canals to Nicaragua's colonial towns", "Dos países de Centroamérica, de los canales de Tortuguero a las ciudades coloniales de Nicaragua"],
      description: [
        "Un combiné en groupe de 14 personnes au plus : Sarapiquí et les canaux de Tortuguero, le volcan Arenal, le Guanacaste et le Rincón de la Vieja, puis le Nicaragua : Granada et ses isletas sur le lac Nicaragua, les Pueblos Blancos, la lagune d'Apoyo, le volcan Masaya et sa lave, et León la révolutionnaire. Avec trois nuits de plage en fin de circuit (14 jours) à partir de 3 800 €, ou en tout compris à partir de 3 895 € par personne.",
        "A two-country tour in a group of 14 at most: Sarapiquí and the Tortuguero canals, Arenal volcano, Guanacaste and Rincón de la Vieja, then Nicaragua: Granada and its isletas on Lake Nicaragua, the Pueblos Blancos, Apoyo lagoon, Masaya volcano and its lava, and revolutionary León. With three beach nights at the end of the tour (14 days) from €3,800, or all-inclusive from €3,895 per person.",
        "Un combinado en grupo de 14 personas como máximo: Sarapiquí y los canales de Tortuguero, el volcán Arenal, Guanacaste y el Rincón de la Vieja, y Nicaragua: Granada y sus isletas en el lago Nicaragua, los Pueblos Blancos, la laguna de Apoyo, el volcán Masaya y su lava, y León la revolucionaria. Con tres noches de playa al final del circuito (14 días) desde 3.800 €, o con todo incluido desde 3.895 € por persona.",
      ],
      includes: INC(10, 14),
      price: 3382, nights: 10, departureFrom: "Francfort", image: "ni6",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 14, order: -49995,
      chapters: [
        cr.chapter(["Le Costa Rica", "Costa Rica", "Costa Rica"], ["Tortuguero, Arenal et Guanacaste.", "Tortuguero, Arenal and Guanacaste.", "Tortuguero, Arenal y Guanacaste."],
          ["ni8", "ni5", "ni6", "ni7"],
          [
            cr.day(1, ...arr(SJO), "hc7"),
            cr.day(2, ["San José – Sarapiquí", "San José – Sarapiquí", "San José – Sarapiquí"], ["La forêt tropicale de Sarapiquí et ses ponts suspendus.", "The Sarapiquí rainforest and its hanging bridges.", "La selva tropical de Sarapiquí y sus puentes colgantes."], "ni7"),
            cr.day(3, ["Tortuguero", "Tortuguero", "Tortuguero"], X_TORTU, "ni8"),
            cr.day(4, ["Arenal – Guanacaste", "Arenal – Guanacaste", "Arenal – Guanacaste"], ["Le volcan Arenal, puis la région du Guanacaste.", "Arenal volcano, then the Guanacaste region.", "El volcán Arenal y la región de Guanacaste."], "ni5"),
            cr.day(5, ["Rincón de la Vieja", "Rincón de la Vieja", "Rincón de la Vieja"], X_RINCON, "ni6"),
          ]),
        cr.chapter(["Le Nicaragua", "Nicaragua", "Nicaragua"], ["Lacs, volcans et villes coloniales.", "Lakes, volcanoes and colonial towns.", "Lagos, volcanes y ciudades coloniales."],
          ["ni2", "ni4"],
          [
            cr.day(6, ["Frontière – Granada", "The border – Granada", "Frontera – Granada"], ["Passage de la frontière du Nicaragua et Granada, ville coloniale aux façades colorées au bord du lac Nicaragua.", "Crossing into Nicaragua and Granada, a colonial town with colourful façades on Lake Nicaragua.", "Paso de la frontera de Nicaragua y Granada, ciudad colonial de fachadas de colores a orillas del lago Nicaragua."], "ni2"),
            cr.day(7, ["Isletas et Pueblos Blancos", "The isletas and the Pueblos Blancos", "Isletas y Pueblos Blancos"], ["En bateau parmi les isletas volcaniques du lac, puis les villages d'artisans des Pueblos Blancos.", "By boat among the lake's volcanic isletas, then the craft villages of the Pueblos Blancos.", "En barco entre las isletas volcánicas del lago, y los pueblos de artesanos de los Pueblos Blancos."], "ni2"),
            cr.day(8, ["Lagune d'Apoyo", "Apoyo lagoon", "Laguna de Apoyo"], ["Baignade dans la lagune d'Apoyo, lac de cratère aux eaux tièdes.", "A swim in Apoyo lagoon, a crater lake with warm water.", "Baño en la laguna de Apoyo, lago de cráter de aguas tibias."], "ni4"),
            cr.day(9, ["Volcan Masaya – León", "Masaya volcano – León", "Volcán Masaya – León"], ["Le volcan Masaya et son cratère où bouillonne la lave, puis León.", "Masaya volcano and its crater of bubbling lava, then León.", "El volcán Masaya y su cráter donde burbujea la lava, y León."], "ni4"),
            cr.day(10, ["León", "León", "León"], ["León, sa cathédrale blanche classée par l'Unesco, ses fresques révolutionnaires et la ville voisine de León Viejo.", "León, its UNESCO-listed white cathedral, its revolutionary murals and the nearby ruins of León Viejo.", "León, su catedral blanca declarada por la Unesco, sus murales revolucionarios y las cercanas ruinas de León Viejo."], "ni2"),
            cr.day(11, ["León – Managua – vol retour", "León – Managua – flight home", "León – Managua – vuelo de regreso"], ["Route vers l'aéroport de Managua et envol pour la France, ou début de l'extension balnéaire.", "Drive to Managua airport and fly to France, or start of the beach extension.", "Carretera al aeropuerto de Managua y vuelo a Francia, o inicio de la extensión de playa."], "ni5"),
            cr.day(12, T_HOME, HOME, "ni6"),
          ]),
      ],
    }),

    cr.trip({
      slug: "costa-rica-splendeurs-du-costa-rica-corcovado-dota-13j",
      name: ["Splendeurs du Costa Rica : San Gerardo de Dota, Corcovado, Monteverde et Arenal", "Splendours of Costa Rica: San Gerardo de Dota, Corcovado, Monteverde and Arenal", "Esplendores de Costa Rica: San Gerardo de Dota, Corcovado, Monteverde y Arenal"],
      tagline: ["Le quetzal, la péninsule d'Osa et les volcans, en groupe de 14 au plus", "The quetzal, the Osa peninsula and the volcanoes, in a group of 14 at most", "El quetzal, la península de Osa y los volcanes, en grupo de 14 como máximo"],
      description: [
        "Le Costa Rica sauvage en petit groupe : Irazú et la vallée d'Orosi, deux nuits à San Gerardo de Dota sur la piste du quetzal, deux nuits au cœur de Corcovado, la forêt la plus riche du pays sur la péninsule d'Osa, la plage de Jacó, Monteverde, deux nuits à l'Arenal et deux nuits à Sarapiquí.",
        "Wild Costa Rica in a small group: Irazú and the Orosi valley, two nights at San Gerardo de Dota on the trail of the quetzal, two nights deep in Corcovado, the richest forest in the country on the Osa peninsula, Jacó beach, Monteverde, two nights at Arenal and two nights at Sarapiquí.",
        "La Costa Rica salvaje en grupo reducido: Irazú y el valle de Orosi, dos noches en San Gerardo de Dota tras el quetzal, dos noches en el corazón de Corcovado, el bosque más rico del país en la península de Osa, la playa de Jacó, Monteverde, dos noches en el Arenal y dos noches en Sarapiquí.",
      ],
      includes: INC(11, 14),
      price: 4272, nights: 11, departureFrom: "Francfort", image: "sp5",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo,groups", maxGuests: 14, order: -49994,
      chapters: [
        cr.chapter(["Dota et Corcovado", "Dota and Corcovado", "Dota y Corcovado"], ["Le quetzal et la péninsule d'Osa.", "The quetzal and the Osa peninsula.", "El quetzal y la península de Osa."],
          ["ni1", "hc5", "ni3", "hc2"],
          [
            cr.day(1, ...arr(SJO), "hc7"),
            cr.day(2, ["Irazú, Orosi – San Gerardo de Dota", "Irazú, Orosi – San Gerardo de Dota", "Irazú, Orosi – San Gerardo de Dota"], join(X_IRAZU, X_OROSI), "ni1"),
            cr.day(3, ["San Gerardo de Dota", "San Gerardo de Dota", "San Gerardo de Dota"], ["La vallée de San Gerardo de Dota, ses chênes centenaires et l'observation du quetzal resplendissant à l'aube.", "The San Gerardo de Dota valley, its ancient oaks and quetzal-watching at dawn.", "El valle de San Gerardo de Dota, sus robles centenarios y la observación del quetzal resplandeciente al amanecer."], "hc5"),
            cr.day(4, ["Dota – Corcovado", "Dota – Corcovado", "Dota – Corcovado"], ["Descente vers le Pacifique sud et la péninsule d'Osa.", "Down to the southern Pacific and the Osa peninsula.", "Bajada hacia el Pacífico sur y la península de Osa."], "hc4"),
            cr.day(5, ["Corcovado", "Corcovado", "Corcovado"], ["Le parc de Corcovado, l'un des endroits les plus riches en biodiversité de la planète : tapirs, aras rouges, singes et peut-être des baleines au large.", "Corcovado park, one of the most biodiverse places on the planet: tapirs, scarlet macaws, monkeys and perhaps whales offshore.", "El parque de Corcovado, uno de los lugares con mayor biodiversidad del planeta: tapires, guacamayos rojos, monos y quizá ballenas mar adentro."], "hc2"),
            cr.day(6, ["Corcovado – Jacó", "Corcovado – Jacó", "Corcovado – Jacó"], ["La côte Pacifique jusqu'à la plage de Jacó.", "The Pacific coast to Jacó beach.", "La costa del Pacífico hasta la playa de Jacó."], "sp5"),
          ]),
        cr.chapter(["Monteverde, Arenal et Sarapiquí", "Monteverde, Arenal and Sarapiquí", "Monteverde, Arenal y Sarapiquí"], ["Forêt de nuages, volcan et forêt de plaine.", "Cloud forest, volcano and lowland forest.", "Bosque nuboso, volcán y selva de llanura."],
          ["ir1", "ir3", "ni7"],
          [
            cr.day(7, ["Jacó – Monteverde", "Jacó – Monteverde", "Jacó – Monteverde"], X_MONTE, "ir1"),
            cr.day(8, ["Monteverde – Arenal", "Monteverde – Arenal", "Monteverde – Arenal"], ["Route autour du lac Arenal jusqu'à La Fortuna.", "Around Lake Arenal to La Fortuna.", "Carretera alrededor del lago Arenal hasta La Fortuna."], "ir4"),
            cr.day(9, ["Arenal", "Arenal", "Arenal"], X_ARENAL, "ir3"),
            cr.day(10, ["Arenal – Sarapiquí", "Arenal – Sarapiquí", "Arenal – Sarapiquí"], ["Route vers les forêts de plaine de Sarapiquí.", "Drive to the lowland forests of Sarapiquí.", "Carretera hacia los bosques de llanura de Sarapiquí."], "ni7"),
            cr.day(11, ["Sarapiquí", "Sarapiquí", "Sarapiquí"], ["Descente de la rivière Sarapiquí, plantations de cacao et réserve biologique.", "Down the Sarapiquí River, cocoa plantations and a biological reserve.", "Descenso del río Sarapiquí, plantaciones de cacao y reserva biológica."], "ni7"),
            cr.day(12, ["Sarapiquí – San José – vol retour", "Sarapiquí – San José – flight home", "Sarapiquí – San José – vuelo de regreso"], ["Retour à San José et envol pour la France.", "Back to San José and fly to France.", "Regreso a San José y vuelo a Francia."], "hc7"),
            cr.day(13, T_HOME, HOME, "sp5"),
          ]),
      ],
    }),

    // ═════════════ PANAMA ═════════════
    pa.trip({
      slug: "panama-decouverte-du-panama-canal-embera-portobelo-10j",
      name: ["Découverte du Panama : le canal, les Emberá, Portobelo et El Valle de Antón", "Discovering Panama: the canal, the Emberá, Portobelo and El Valle de Antón", "Descubrimiento de Panamá: el canal, los Emberá, Portobelo y El Valle de Antón"],
      tagline: ["En étoile depuis Panama City, en groupe de 16 au plus", "Day trips from Panama City, in a group of 16 at most", "Excursiones desde Ciudad de Panamá, en grupo de 16 como máximo"],
      description: [
        "Le Panama sans changer d'hôtel : la capitale et le canal, le lac Gatún et la communauté Emberá, les forts espagnols de San Lorenzo et Portobelo sur la côte caraïbe, El Valle de Antón, le parc de Gamboa et l'agrotourisme à Capira. Avec trois nuits à Bocas del Toro (13 jours) à partir de 2 884 €, ou à la plage de Santa Clara à partir de 2 857 € par personne.",
        "Panama without changing hotels: the capital and the canal, Gatún Lake and the Emberá community, the Spanish forts of San Lorenzo and Portobelo on the Caribbean coast, El Valle de Antón, Gamboa park and agritourism at Capira. With three nights at Bocas del Toro (13 days) from €2,884, or at Santa Clara beach from €2,857 per person.",
        "Panamá sin cambiar de hotel: la capital y el canal, el lago Gatún y la comunidad Emberá, los fuertes españoles de San Lorenzo y Portobelo en la costa caribeña, El Valle de Antón, el parque de Gamboa y el agroturismo en Capira. Con tres noches en Bocas del Toro (13 días) desde 2.884 €, o en la playa de Santa Clara desde 2.857 € por persona.",
      ],
      includes: INC(8, 16),
      price: 2023, nights: 8, departureFrom: "Francfort", image: "dp2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 16, order: -49993,
      chapters: [
        pa.chapter(["Panama City et le canal", "Panama City and the canal", "Ciudad de Panamá y el canal"], ["La capitale et le lac Gatún.", "The capital and Gatún Lake.", "La capital y el lago Gatún."],
          ["dp1", "dp2", "dp3", "dp4"],
          [
            pa.day(1, ...arr(PTY), "dp1"),
            pa.day(2, PTY, X_PTY, "dp3"),
            pa.day(3, ["Lac Gatún et les Emberá", "Gatún Lake and the Emberá", "Lago Gatún y los Emberá"], X_GATUN, "dp4"),
            pa.day(4, ["San Lorenzo et Portobelo", "San Lorenzo and Portobelo", "San Lorenzo y Portobelo"], ["La côte caraïbe, le fort San Lorenzo à l'embouchure du Chagres et Portobelo, port d'où partaient les galions chargés d'or.", "The Caribbean coast, Fort San Lorenzo at the mouth of the Chagres and Portobelo, the port from which the gold-laden galleons sailed.", "La costa caribeña, el fuerte San Lorenzo en la desembocadura del Chagres y Portobelo, puerto de donde partían los galeones cargados de oro."], "dp5"),
          ]),
        pa.chapter(["Nature et campagne", "Nature and countryside", "Naturaleza y campo"], ["Volcan, forêt et ferme.", "Volcano, forest and farm.", "Volcán, bosque y granja."],
          ["dp6", "dp7"],
          [
            pa.day(5, ["El Valle de Antón", "El Valle de Antón", "El Valle de Antón"], X_VALLE, "dp6"),
            pa.day(6, ["Parc de Gamboa", "Gamboa park", "Parque de Gamboa"], ["La forêt tropicale de Gamboa, au bord du canal : paresseux, toucans et singes hurleurs.", "The Gamboa rainforest, beside the canal: sloths, toucans and howler monkeys.", "La selva tropical de Gamboa, junto al canal: perezosos, tucanes y monos aulladores."], "dp7"),
            pa.day(7, ["Panama City", "Panama City", "Ciudad de Panamá"], ["Journée libre dans la capitale.", "A free day in the capital.", "Día libre en la capital."], "dp2"),
            pa.day(8, ["Capira", "Capira", "Capira"], ["Agrotourisme à Capira : une ferme familiale, ses cultures et un repas campagnard.", "Agritourism at Capira: a family farm, its crops and a country meal.", "Agroturismo en Capira: una granja familiar, sus cultivos y una comida campestre."], "dp6"),
            fly(pa, 9, PTY, "dp1"), pa.day(10, T_HOME, HOME, "dp2"),
          ]),
      ],
    }),

    pa.trip({
      slug: "panama-splendeurs-du-panama-boca-chica-boquete-13j",
      name: ["Splendeurs du Panama : la capitale, El Valle, Boca Chica et Boquete", "Splendours of Panama: the capital, El Valle, Boca Chica and Boquete", "Esplendores de Panamá: la capital, El Valle, Boca Chica y Boquete"],
      tagline: ["De la ville aux îles du Pacifique et aux montagnes du café, en groupe de 14 au plus", "From the city to the Pacific islands and the coffee mountains, in a group of 14 at most", "De la ciudad a las islas del Pacífico y las montañas del café, en grupo de 14 como máximo"],
      description: [
        "Le Panama à un rythme posé : deux jours à Panama City et le canal, Capira et Penonomé, deux nuits à El Valle de Antón, deux nuits à Boca Chica face aux îles du golfe de Chiriquí, deux nuits à Boquete et ses plantations de café, puis retour en avion vers la capitale.",
        "Panama at a relaxed pace: two days in Panama City and the canal, Capira and Penonomé, two nights at El Valle de Antón, two nights at Boca Chica facing the islands of the Gulf of Chiriquí, two nights in Boquete and its coffee plantations, then a flight back to the capital.",
        "Panamá a un ritmo pausado: dos días en Ciudad de Panamá y el canal, Capira y Penonomé, dos noches en El Valle de Antón, dos noches en Boca Chica frente a las islas del golfo de Chiriquí, dos noches en Boquete y sus plantaciones de café, y regreso en avión a la capital.",
      ],
      includes: INC(11, 14, ",Vol intérieur David – Panama City"),
      price: 3522, nights: 11, departureFrom: "Bruxelles", image: "cp6",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,solo,groups", maxGuests: 14, order: -49992,
      chapters: [
        pa.chapter(["Panama City et El Valle", "Panama City and El Valle", "Ciudad de Panamá y El Valle"], ["La capitale et le cratère.", "The capital and the crater.", "La capital y el cráter."],
          ["cp3", "cp4", "cp7"],
          [
            pa.day(1, ...arr(PTY), "cp3"),
            pa.day(2, PTY, X_PTY, "cp4"),
            pa.day(3, ["Panama City", "Panama City", "Ciudad de Panamá"], ["Journée libre dans la capitale, ou excursion aux îles.", "A free day in the capital, or a trip to the islands.", "Día libre en la capital, o excursión a las islas."], "cp1"),
            pa.day(4, ["Capira – Penonomé", "Capira – Penonomé", "Capira – Penonomé"], ["La campagne panaméenne, une ferme de Capira, puis Penonomé.", "The Panamanian countryside, a farm in Capira, then Penonomé.", "El campo panameño, una granja de Capira, y Penonomé."], "cp6"),
            pa.day(5, ["Penonomé – El Valle de Antón", "Penonomé – El Valle de Antón", "Penonomé – El Valle de Antón"], X_VALLE, "cp7"),
            pa.day(6, ["El Valle de Antón", "El Valle de Antón", "El Valle de Antón"], ["Randonnée vers la cascade du Chorro Macho et le marché du village.", "A hike to the Chorro Macho waterfall and the village market.", "Caminata hacia la cascada del Chorro Macho y el mercado del pueblo."], "dp6"),
          ]),
        pa.chapter(["Boca Chica et Boquete", "Boca Chica and Boquete", "Boca Chica y Boquete"], ["Les îles et le café.", "The islands and the coffee.", "Las islas y el café."],
          ["dp4", "cp6"],
          [
            pa.day(7, ["El Valle – Boca Chica", "El Valle – Boca Chica", "El Valle – Boca Chica"], ["Route vers le golfe de Chiriquí et Boca Chica.", "Drive to the Gulf of Chiriquí and Boca Chica.", "Carretera hacia el golfo de Chiriquí y Boca Chica."], "dp4"),
            pa.day(8, ["Boca Chica", "Boca Chica", "Boca Chica"], ["Journée en bateau parmi les îles désertes du parc marin, baignade et snorkeling.", "A day by boat among the deserted islands of the marine park, swimming and snorkelling.", "Jornada en barco entre las islas desiertas del parque marino, baño y esnórquel."], "dp5"),
            pa.day(9, ["Boca Chica – Boquete", "Boca Chica – Boquete", "Boca Chica – Boquete"], ["Montée vers les hautes terres de Boquete.", "Up to the Boquete highlands.", "Subida hacia las tierras altas de Boquete."], "cp6"),
            pa.day(10, ["Boquete", "Boquete", "Boquete"], X_BOQUETE, "cp6"),
            pa.day(11, ["Boquete – David – Panama City", "Boquete – David – Panama City", "Boquete – David – Ciudad de Panamá"], ["Vol de David vers la capitale.", "Flight from David to the capital.", "Vuelo de David a la capital."], "cp3"),
            fly(pa, 12, PTY, "cp1"), pa.day(13, T_HOME, HOME, "cp6"),
          ]),
      ],
    }),

    pa.trip({
      slug: "panama-couleurs-du-panama-coiba-boquete-bocas-14j",
      name: ["Couleurs du Panama : le canal, les Emberá, Coiba, Boquete et Bocas del Toro", "Colours of Panama: the canal, the Emberá, Coiba, Boquete and Bocas del Toro", "Colores de Panamá: el canal, los Emberá, Coiba, Boquete y Bocas del Toro"],
      tagline: ["Le Panama d'un océan à l'autre, en groupe de 14 au plus", "Panama from ocean to ocean, in a group of 14 at most", "Panamá de un océano a otro, en grupo de 14 como máximo"],
      description: [
        "Le grand tour du Panama en petit groupe : Panama City et les écluses de Miraflores, le lac Gatún et l'île des singes, la communauté Emberá, El Valle de Antón, Santa Catalina et le parc marin de Coiba, Boquete et ses caféiers, puis l'archipel caraïbe de Bocas del Toro. Avec deux nuits chez les Guna de l'archipel de San Blas (15 jours) à partir de 4 558 € par personne.",
        "The grand tour of Panama in a small group: Panama City and the Miraflores locks, Gatún Lake and Monkey Island, the Emberá community, El Valle de Antón, Santa Catalina and Coiba marine park, Boquete and its coffee, then the Caribbean archipelago of Bocas del Toro. With two nights with the Guna people of the San Blas archipelago (15 days) from €4,558 per person.",
        "La gran vuelta de Panamá en grupo reducido: Ciudad de Panamá y las esclusas de Miraflores, el lago Gatún y la isla de los monos, la comunidad Emberá, El Valle de Antón, Santa Catalina y el parque marino de Coiba, Boquete y su café, y el archipiélago caribeño de Bocas del Toro. Con dos noches con los guna del archipiélago de San Blas (15 días) desde 4.558 € por persona.",
      ],
      includes: INC(12, 14, ",Vols intérieurs"),
      price: 3943, nights: 12, departureFrom: "Francfort", image: "cp5",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 14, order: -49991,
      chapters: [
        pa.chapter(["Panama City et le canal", "Panama City and the canal", "Ciudad de Panamá y el canal"], ["Écluses, lac et Emberá.", "Locks, lake and the Emberá.", "Esclusas, lago y Emberá."],
          ["cp1", "cp4", "cp5", "dp4"],
          [
            pa.day(1, ...arr(PTY), "cp1"),
            pa.day(2, PTY, X_PTY, "cp4"),
            pa.day(3, ["Lac Gatún et île des singes", "Gatún Lake and Monkey Island", "Lago Gatún e isla de los monos"], ["En bateau sur le lac Gatún jusqu'à l'île Mono, puis Gamboa.", "By boat on Gatún Lake to Mono Island, then Gamboa.", "En barco por el lago Gatún hasta la isla Mono, y Gamboa."], "dp4"),
            pa.day(4, ["Communauté Emberá", "The Emberá community", "Comunidad Emberá"], ["En pirogue sur la rivière Chagres jusqu'à un village Emberá, ses danses, son artisanat et son repas de poisson.", "By dugout canoe on the Chagres River to an Emberá village, its dances, crafts and fish lunch.", "En piragua por el río Chagres hasta un pueblo Emberá, sus danzas, su artesanía y su comida de pescado."], "cp5"),
          ]),
        pa.chapter(["El Valle, Coiba et Boquete", "El Valle, Coiba and Boquete", "El Valle, Coiba y Boquete"], ["Volcan, île et café.", "Volcano, island and coffee.", "Volcán, isla y café."],
          ["cp7", "cp8", "cp6"],
          [
            pa.day(5, ["El Valle de Antón", "El Valle de Antón", "El Valle de Antón"], X_VALLE, "cp7"),
            pa.day(6, ["El Valle – Santa Catalina", "El Valle – Santa Catalina", "El Valle – Santa Catalina"], ["Route vers Santa Catalina, village de surfeurs sur le Pacifique.", "Drive to Santa Catalina, a surfers' village on the Pacific.", "Carretera hacia Santa Catalina, pueblo de surfistas en el Pacífico."], "cp8"),
            pa.day(7, ["Parc national de Coiba", "Coiba national park", "Parque nacional de Coiba"], ["L'île de Coiba, ancien bagne devenu parc marin classé par l'Unesco : snorkeling parmi les tortues, les raies et les requins de récif.", "Coiba island, a former penal colony turned UNESCO-listed marine park: snorkelling among turtles, rays and reef sharks.", "La isla de Coiba, antiguo penal convertido en parque marino declarado por la Unesco: esnórquel entre tortugas, rayas y tiburones de arrecife."], "dp5"),
            pa.day(8, ["Santa Catalina – Boquete", "Santa Catalina – Boquete", "Santa Catalina – Boquete"], ["Montée vers les hautes terres de Chiriquí.", "Up to the Chiriquí highlands.", "Subida hacia las tierras altas de Chiriquí."], "cp6"),
            pa.day(9, ["Boquete", "Boquete", "Boquete"], X_BOQUETE, "cp6"),
          ]),
        pa.chapter(["Bocas del Toro", "Bocas del Toro", "Bocas del Toro"], ["L'archipel caraïbe.", "The Caribbean archipelago.", "El archipiélago caribeño."],
          ["dp5", "cp2"],
          [
            pa.day(10, ["Boquete – Bocas del Toro", "Boquete – Bocas del Toro", "Boquete – Bocas del Toro"], ["Traversée de la cordillère et bateau vers l'archipel de Bocas del Toro.", "Across the mountains and by boat to the Bocas del Toro archipelago.", "Travesía de la cordillera y barco hacia el archipiélago de Bocas del Toro."], "dp5"),
            pa.day(11, ["Bocas del Toro", "Bocas del Toro", "Bocas del Toro"], ["Journée en bateau : les dauphins de la baie, la plage aux étoiles de mer et les mangroves.", "A day by boat: the bay's dolphins, Starfish Beach and the mangroves.", "Jornada en barco: los delfines de la bahía, la playa de las estrellas de mar y los manglares."], "dp5"),
            pa.day(12, ["Bocas del Toro – Panama City", "Bocas del Toro – Panama City", "Bocas del Toro – Ciudad de Panamá"], ["Vol vers la capitale.", "Flight to the capital.", "Vuelo a la capital."], "cp2"),
            pa.day(13, ["Panama City – vol retour", "Panama City – flight home", "Ciudad de Panamá – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France, ou départ vers San Blas.", "Transfer to the airport and fly to France, or leave for San Blas.", "Traslado al aeropuerto y vuelo a Francia, o salida hacia San Blas."], "cp1"),
            pa.day(14, T_HOME, HOME, "cp5"),
          ]),
      ],
    }),

    // ═════════════ GUATEMALA ═════════════
    gt.trip({
      slug: "guatemala-decouverte-du-guatemala-tikal-atitlan-12j",
      name: ["Découverte du Guatemala : Río Dulce, Tikal, Yaxhá, le lac Atitlán et Antigua", "Discovering Guatemala: Río Dulce, Tikal, Yaxhá, Lake Atitlán and Antigua", "Descubrimiento de Guatemala: Río Dulce, Tikal, Yaxhá, el lago Atitlán y Antigua"],
      tagline: ["Les cités mayas de la jungle et les villages des hautes terres, en groupe de 18 au plus", "The Maya cities of the jungle and the highland villages, in a group of 18 at most", "Las ciudades mayas de la selva y los pueblos del altiplano, en grupo de 18 como máximo"],
      description: [
        "Le Guatemala complet : Quiriguá, le Río Dulce et Livingston, trois nuits à Flores avec Tikal et Yaxhá, un vol vers la capitale, le lac Atitlán et ses villages, le marché de Chichicastenango, puis deux jours à Antigua. Avec deux nuits sur la côte Pacifique en fin de circuit (14 jours) à partir de 3 057 € par personne.",
        "Guatemala in full: Quiriguá, the Río Dulce and Livingston, three nights in Flores with Tikal and Yaxhá, a flight to the capital, Lake Atitlán and its villages, the Chichicastenango market, then two days in Antigua. With two nights on the Pacific coast at the end of the tour (14 days) from €3,057 per person.",
        "Guatemala completo: Quiriguá, el Río Dulce y Livingston, tres noches en Flores con Tikal y Yaxhá, un vuelo a la capital, el lago Atitlán y sus pueblos, el mercado de Chichicastenango, y dos días en Antigua. Con dos noches en la costa del Pacífico al final del circuito (14 días) desde 3.057 € por persona.",
      ],
      includes: INC(10, 18, ",Vol intérieur Flores – Guatemala City"),
      price: 2344, nights: 10, departureFrom: "Bruxelles", image: "dg5",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -49990,
      chapters: [
        gt.chapter(["La côte caraïbe et le Petén", "The Caribbean coast and Petén", "La costa caribeña y el Petén"], ["Río Dulce, Tikal et Yaxhá.", "Río Dulce, Tikal and Yaxhá.", "Río Dulce, Tikal y Yaxhá."],
          ["dg2", "dg3", "dg4", "dg5", "dg6"],
          [
            gt.day(1, ...arr(GUA), "dg1"),
            gt.day(2, ["Quiriguá – Río Dulce", "Quiriguá – Río Dulce", "Quiriguá – Río Dulce"], X_QUIRIGUA, "dg4"),
            gt.day(3, ["Livingston", "Livingston", "Livingston"], X_LIVING, "dg2"),
            gt.day(4, ["Río Dulce – Flores", "Río Dulce – Flores", "Río Dulce – Flores"], ["Route vers le Petén et Flores, petite île coloniale sur le lac Petén Itzá.", "Drive to Petén and Flores, a small colonial island on Lake Petén Itzá.", "Carretera hacia el Petén y Flores, pequeña isla colonial en el lago Petén Itzá."], "dg3"),
            gt.day(5, ["Tikal", "Tikal", "Tikal"], X_TIKAL, "dg5"),
            gt.day(6, ["Yaxhá – Guatemala City", "Yaxhá – Guatemala City", "Yaxhá – Ciudad de Guatemala"], X_YAXHA, "dg6"),
          ]),
        gt.chapter(["Les hautes terres", "The highlands", "El altiplano"], ["Atitlán, Chichicastenango et Antigua.", "Atitlán, Chichicastenango and Antigua.", "Atitlán, Chichicastenango y Antigua."],
          ["dg7", "dg8", "cg3", "cg4"],
          [
            gt.day(7, ["Panajachel – lac Atitlán", "Panajachel – Lake Atitlán", "Panajachel – lago Atitlán"], X_ATITLAN, "dg7"),
            gt.day(8, ["Chichicastenango", "Chichicastenango", "Chichicastenango"], X_CHICHI, "cg3"),
            gt.day(9, ["Panajachel – Antigua", "Panajachel – Antigua", "Panajachel – Antigua"], ["Route vers Antigua, au pied du volcan de Agua.", "Drive to Antigua, at the foot of Agua volcano.", "Carretera hacia Antigua, al pie del volcán de Agua."], "dg8"),
            gt.day(10, ["Antigua", "Antigua", "Antigua"], X_ANTIGUA, "cg4"),
            gt.day(11, ["Antigua – vol retour", "Antigua – flight home", "Antigua – vuelo de regreso"], ["Route vers l'aéroport de Guatemala City et envol pour la France, ou départ vers la côte Pacifique.", "Drive to Guatemala City airport and fly to France, or leave for the Pacific coast.", "Carretera al aeropuerto de Ciudad de Guatemala y vuelo a Francia, o salida hacia la costa del Pacífico."], "dg1"),
            gt.day(12, T_HOME, HOME, "dg5"),
          ]),
      ],
    }),

    gt.trip({
      slug: "guatemala-cap-sur-le-guatemala-copan-rio-dulce-12j",
      name: ["Cap sur le Guatemala : Copán au Honduras, Río Dulce, Tikal, Atitlán et Antigua", "Heading for Guatemala: Copán in Honduras, Río Dulce, Tikal, Atitlán and Antigua", "Rumbo a Guatemala: Copán en Honduras, Río Dulce, Tikal, Atitlán y Antigua"],
      tagline: ["Avec le site maya de Copán, de l'autre côté de la frontière hondurienne", "With the Maya site of Copán, across the Honduran border", "Con el sitio maya de Copán, al otro lado de la frontera hondureña"],
      description: [
        "Le monde maya en groupe de 20 personnes au plus : le site de Copán au Honduras, Quiriguá, le Río Dulce et Livingston, Flores et Tikal, Chichicastenango, une nuit à San Juan La Laguna et la navigation sur le lac Atitlán, Iximché et deux jours à Antigua. Avec trois nuits de plage à Monterrico sur le Pacifique (15 jours) à partir de 4 577 € par personne.",
        "The Maya world in a group of 20 at most: the Copán site in Honduras, Quiriguá, the Río Dulce and Livingston, Flores and Tikal, Chichicastenango, a night at San Juan La Laguna and a boat trip on Lake Atitlán, Iximché and two days in Antigua. With three beach nights at Monterrico on the Pacific (15 days) from €4,577 per person.",
        "El mundo maya en grupo de 20 personas como máximo: el sitio de Copán en Honduras, Quiriguá, el Río Dulce y Livingston, Flores y Tikal, Chichicastenango, una noche en San Juan La Laguna y la navegación por el lago Atitlán, Iximché y dos días en Antigua. Con tres noches de playa en Monterrico en el Pacífico (15 días) desde 4.577 € por persona.",
      ],
      includes: INC(10, 20, ",Vol intérieur Flores – Guatemala City"),
      price: 3523, nights: 10, departureFrom: "Bruxelles", image: "cg2",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 20, order: -49989,
      chapters: [
        gt.chapter(["Copán, Río Dulce et Tikal", "Copán, Río Dulce and Tikal", "Copán, Río Dulce y Tikal"], ["Les cités mayas et la côte caraïbe.", "The Maya cities and the Caribbean coast.", "Las ciudades mayas y la costa caribeña."],
          ["cg5", "cg1", "dg2", "dg5"],
          [
            gt.day(1, ...arr(GUA), "dg1"),
            gt.day(2, ["Guatemala City – Copán", "Guatemala City – Copán", "Ciudad de Guatemala – Copán"], ["Passage au Honduras et le site maya de Copán, célèbre pour ses stèles et son escalier hiéroglyphique.", "Crossing into Honduras and the Maya site of Copán, famous for its stelae and its hieroglyphic stairway.", "Paso a Honduras y el sitio maya de Copán, célebre por sus estelas y su escalinata jeroglífica."], "cg5"),
            gt.day(3, ["Quiriguá – Río Dulce", "Quiriguá – Río Dulce", "Quiriguá – Río Dulce"], X_QUIRIGUA, "cg1"),
            gt.day(4, ["Livingston", "Livingston", "Livingston"], X_LIVING, "dg2"),
            gt.day(5, ["Río Dulce – Flores", "Río Dulce – Flores", "Río Dulce – Flores"], ["Route vers le Petén et Flores.", "Drive to Petén and Flores.", "Carretera hacia el Petén y Flores."], "dg3"),
            gt.day(6, ["Tikal – Guatemala City", "Tikal – Guatemala City", "Tikal – Ciudad de Guatemala"], join(X_TIKAL, ["Vol retour vers la capitale.", "Flight back to the capital.", "Vuelo de regreso a la capital."]), "dg5"),
          ]),
        gt.chapter(["Les hautes terres", "The highlands", "El altiplano"], ["Chichicastenango, Atitlán et Antigua.", "Chichicastenango, Atitlán and Antigua.", "Chichicastenango, Atitlán y Antigua."],
          ["cg2", "cg3", "cg4"],
          [
            gt.day(7, ["Chichicastenango – San Juan La Laguna", "Chichicastenango – San Juan La Laguna", "Chichicastenango – San Juan La Laguna"], ["Le marché de Chichicastenango, puis San Juan La Laguna, village de tisserandes au bord du lac Atitlán.", "The Chichicastenango market, then San Juan La Laguna, a weavers' village on Lake Atitlán.", "El mercado de Chichicastenango, y San Juan La Laguna, pueblo de tejedoras a orillas del lago Atitlán."], "cg3"),
            gt.day(8, ["Santiago Atitlán – Panajachel", "Santiago Atitlán – Panajachel", "Santiago Atitlán – Panajachel"], X_ATITLAN, "cg2"),
            gt.day(9, ["Iximché – Antigua", "Iximché – Antigua", "Iximché – Antigua"], ["Le site maya kaqchikel d'Iximché, puis Antigua.", "The Kaqchikel Maya site of Iximché, then Antigua.", "El sitio maya kaqchikel de Iximché, y Antigua."], "cg4"),
            gt.day(10, ["Antigua", "Antigua", "Antigua"], X_ANTIGUA, "cg4"),
            gt.day(11, ["Antigua – vol retour", "Antigua – flight home", "Antigua – vuelo de regreso"], ["Route vers l'aéroport et envol pour la France, ou départ vers Monterrico.", "Drive to the airport and fly to France, or leave for Monterrico.", "Carretera al aeropuerto y vuelo a Francia, o salida hacia Monterrico."], "dg1"),
            gt.day(12, T_HOME, HOME, "cg2"),
          ]),
      ],
    }),

    gt.trip({
      slug: "guatemala-couleurs-du-guatemala-et-du-mexique-19j",
      name: ["Couleurs du Guatemala et du Mexique : Atitlán, Antigua, les villes coloniales et le Yucatán", "Colours of Guatemala and Mexico: Atitlán, Antigua, the colonial cities and the Yucatán", "Colores de Guatemala y México: Atitlán, Antigua, las ciudades coloniales y el Yucatán"],
      tagline: ["Deux pays mayas en dix-neuf jours, à douze voyageurs au plus", "Two Maya countries in nineteen days, with twelve travellers at most", "Dos países mayas en diecinueve días, con doce viajeros como máximo"],
      description: [
        "Un grand combiné en groupe de 12 personnes au plus : le lac Atitlán, Chichicastenango et Antigua au Guatemala, puis au Mexique San Miguel de Allende, Guanajuato, Teotihuacan, Mexico, le Chiapas et San Cristóbal de las Casas, Agua Azul, Palenque, Campeche, Uxmal, Mérida, Chichén Itzá et Valladolid.",
        "A grand two-country tour in a group of 12 at most: Lake Atitlán, Chichicastenango and Antigua in Guatemala, then in Mexico San Miguel de Allende, Guanajuato, Teotihuacan, Mexico City, Chiapas and San Cristóbal de las Casas, Agua Azul, Palenque, Campeche, Uxmal, Mérida, Chichén Itzá and Valladolid.",
        "Un gran combinado en grupo de 12 personas como máximo: el lago Atitlán, Chichicastenango y Antigua en Guatemala, y en México San Miguel de Allende, Guanajuato, Teotihuacán, Ciudad de México, Chiapas y San Cristóbal de las Casas, Agua Azul, Palenque, Campeche, Uxmal, Mérida, Chichén Itzá y Valladolid.",
      ],
      includes: INC(17, 12, ",Vols intérieurs"),
      price: 5556, nights: 17, departureFrom: "Francfort", image: "mx2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,solo", maxGuests: 12, order: -49988,
      chapters: [
        gt.chapter(["Le Guatemala", "Guatemala", "Guatemala"], ["Atitlán, Chichicastenango et Antigua.", "Atitlán, Chichicastenango and Antigua.", "Atitlán, Chichicastenango y Antigua."],
          ["mx2", "mx3", "mx4", "mx1"],
          [
            gt.day(1, ...arr(GUA), "mx6"),
            gt.day(2, ["Panajachel – lac Atitlán", "Panajachel – Lake Atitlán", "Panajachel – lago Atitlán"], X_ATITLAN, "mx2"),
            gt.day(3, ["Chichicastenango – San Antonio Palopó", "Chichicastenango – San Antonio Palopó", "Chichicastenango – San Antonio Palopó"], X_CHICHI, "mx3"),
            gt.day(4, ["Panajachel – Antigua", "Panajachel – Antigua", "Panajachel – Antigua"], ["Route vers Antigua, au pied des volcans.", "Drive to Antigua, at the foot of the volcanoes.", "Carretera hacia Antigua, al pie de los volcanes."], "mx1"),
            gt.day(5, ["Antigua", "Antigua", "Antigua"], X_ANTIGUA, "mx4"),
            gt.day(6, ["Antigua – Mexico", "Antigua – Mexico City", "Antigua – Ciudad de México"], ["Vol vers Mexico.", "Flight to Mexico City.", "Vuelo a Ciudad de México."], "mx5"),
          ]),
        gt.chapter(["Le Mexique central", "Central Mexico", "El México central"], ["Villes coloniales et Teotihuacan.", "Colonial cities and Teotihuacan.", "Ciudades coloniales y Teotihuacán."],
          ["mx8", "mx7"],
          [
            gt.day(7, ["Querétaro – San Miguel de Allende", "Querétaro – San Miguel de Allende", "Querétaro – San Miguel de Allende"], ["Querétaro et son aqueduc, puis San Miguel de Allende et sa paroisse rose.", "Querétaro and its aqueduct, then San Miguel de Allende and its pink parish church.", "Querétaro y su acueducto, y San Miguel de Allende y su parroquia rosa."], "mx8"),
            gt.day(8, ["Guanajuato", "Guanajuato", "Guanajuato"], ["Guanajuato, ville minière aux maisons colorées et aux tunnels souterrains.", "Guanajuato, a mining town of colourful houses and underground tunnels.", "Guanajuato, ciudad minera de casas de colores y túneles subterráneos."], "mx7"),
            gm.day(9, ["Guanajuato – Teotihuacan", "Guanajuato – Teotihuacan", "Guanajuato – Teotihuacán"], ["Route vers Teotihuacan.", "Drive to Teotihuacan.", "Carretera hacia Teotihuacán."], "cm2"),
            gm.day(10, ["Teotihuacan – Mexico", "Teotihuacan – Mexico City", "Teotihuacán – Ciudad de México"], ["Les pyramides du Soleil et de la Lune, puis Mexico.", "The Pyramids of the Sun and the Moon, then Mexico City.", "Las pirámides del Sol y de la Luna, y Ciudad de México."], "ho4"),
            gm.day(11, ["Mexico", "Mexico City", "Ciudad de México"], ["Le musée d'Anthropologie, le Zócalo et les barques de Xochimilco.", "The Anthropology Museum, the Zócalo and the boats of Xochimilco.", "El museo de Antropología, el Zócalo y las trajineras de Xochimilco."], "cm1"),
          ]),
        gm.chapter(["Le Chiapas et le Yucatán", "Chiapas and the Yucatán", "Chiapas y el Yucatán"], ["Le monde maya mexicain.", "The Mexican Maya world.", "El mundo maya mexicano."],
          ["cm7", "im7", "cy8"],
          [
            gm.day(12, ["Mexico – San Cristóbal", "Mexico City – San Cristóbal", "Ciudad de México – San Cristóbal"], ["Vol vers Tuxtla Gutiérrez, canyon du Sumidero, puis San Cristóbal de las Casas.", "Flight to Tuxtla Gutiérrez, the Sumidero Canyon, then San Cristóbal de las Casas.", "Vuelo a Tuxtla Gutiérrez, cañón del Sumidero, y San Cristóbal de las Casas."], "cm7"),
            gm.day(13, ["San Cristóbal", "San Cristóbal", "San Cristóbal"], ["Les villages mayas de San Juan Chamula et Zinacantán.", "The Maya villages of San Juan Chamula and Zinacantán.", "Los pueblos mayas de San Juan Chamula y Zinacantán."], "cm5"),
            gm.day(14, ["Agua Azul – Palenque", "Agua Azul – Palenque", "Agua Azul – Palenque"], ["Les cascades d'Agua Azul, puis Palenque.", "The Agua Azul waterfalls, then Palenque.", "Las cascadas de Agua Azul, y Palenque."], "im7"),
            gm.day(15, ["Palenque – Campeche", "Palenque – Campeche", "Palenque – Campeche"], ["Le site de Palenque, puis Campeche.", "The Palenque site, then Campeche.", "El sitio de Palenque, y Campeche."], "im3"),
            gm.day(16, ["Uxmal – Mérida", "Uxmal – Mérida", "Uxmal – Mérida"], ["Le site d'Uxmal, puis Mérida.", "The Uxmal site, then Mérida.", "El sitio de Uxmal, y Mérida."], "cy6"),
            gm.day(17, ["Chichén Itzá – Valladolid", "Chichén Itzá – Valladolid", "Chichén Itzá – Valladolid"], ["Chichén Itzá et sa pyramide de Kukulcán, puis Valladolid.", "Chichén Itzá and its Kukulcán pyramid, then Valladolid.", "Chichén Itzá y su pirámide de Kukulcán, y Valladolid."], "cy8"),
            gm.day(18, ["Cancún – vol retour", "Cancún – flight home", "Cancún – vuelo de regreso"], ["Route vers Cancún et envol pour la France.", "Drive to Cancún and fly to France.", "Carretera hacia Cancún y vuelo a Francia."], "dy2"),
            gt.day(19, T_HOME, HOME, "mx2"),
          ]),
      ],
    }),

    // ═════════════ BELIZE ═════════════
    bz.trip({
      slug: "belize-guatemala-et-belize-tikal-atitlan-ambergris-16j",
      name: ["Guatemala et Belize : Tikal, le lac Atitlán, Antigua et l'île d'Ambergris Caye", "Guatemala and Belize: Tikal, Lake Atitlán, Antigua and Ambergris Caye", "Guatemala y Belice: Tikal, el lago Atitlán, Antigua y la isla de Ambergris Caye"],
      tagline: ["Le circuit maya du Guatemala, puis trois nuits au bord de la barrière de corail", "The Maya tour of Guatemala, then three nights by the barrier reef", "El circuito maya de Guatemala, y tres noches junto a la barrera de coral"],
      description: [
        "Le Guatemala en groupe — Quiriguá, le Río Dulce et Livingston, Tikal et Yaxhá, le lac Atitlán, Chichicastenango et trois jours à Antigua — puis un vol vers le Belize et trois nuits à San Pedro, sur l'île d'Ambergris Caye, face à la deuxième plus grande barrière de corail du monde : snorkeling avec les raies et les requins-nourrices à Hol Chan, ou plongée vers le Blue Hole en option.",
        "Guatemala in a group — Quiriguá, the Río Dulce and Livingston, Tikal and Yaxhá, Lake Atitlán, Chichicastenango and three days in Antigua — then a flight to Belize and three nights in San Pedro, on Ambergris Caye, facing the second largest barrier reef in the world: snorkelling with rays and nurse sharks at Hol Chan, or an optional dive to the Blue Hole.",
        "Guatemala en grupo — Quiriguá, el Río Dulce y Livingston, Tikal y Yaxhá, el lago Atitlán, Chichicastenango y tres días en Antigua — y un vuelo a Belice y tres noches en San Pedro, en la isla de Ambergris Caye, frente a la segunda mayor barrera de coral del mundo: esnórquel con rayas y tiburones nodriza en Hol Chan, o buceo opcional al Blue Hole.",
      ],
      includes: INC(14, 18, ",Vols intérieurs Flores – Guatemala City et Guatemala – Belize"),
      price: 4203, nights: 14, departureFrom: "Nantes", image: "bz2",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -49987,
      chapters: [
        bz.chapter(["Le Guatemala maya", "Maya Guatemala", "La Guatemala maya"], ["Río Dulce, Tikal, Atitlán et Antigua.", "Río Dulce, Tikal, Atitlán and Antigua.", "Río Dulce, Tikal, Atitlán y Antigua."],
          ["dg5", "dg2", "dg7", "cg4"],
          [
            bz.day(1, ...arr(GUA), "dg1"),
            bz.day(2, ["Quiriguá – Río Dulce", "Quiriguá – Río Dulce", "Quiriguá – Río Dulce"], X_QUIRIGUA, "dg4"),
            bz.day(3, ["Livingston", "Livingston", "Livingston"], X_LIVING, "dg2"),
            bz.day(4, ["Río Dulce – Flores", "Río Dulce – Flores", "Río Dulce – Flores"], ["Route vers le Petén et Flores.", "Drive to Petén and Flores.", "Carretera hacia el Petén y Flores."], "dg3"),
            bz.day(5, ["Tikal", "Tikal", "Tikal"], X_TIKAL, "dg5"),
            bz.day(6, ["Yaxhá – Guatemala City", "Yaxhá – Guatemala City", "Yaxhá – Ciudad de Guatemala"], X_YAXHA, "dg6"),
            bz.day(7, ["Panajachel – lac Atitlán", "Panajachel – Lake Atitlán", "Panajachel – lago Atitlán"], X_ATITLAN, "dg7"),
            bz.day(8, ["Chichicastenango", "Chichicastenango", "Chichicastenango"], X_CHICHI, "cg3"),
            bz.day(9, ["Panajachel – Antigua", "Panajachel – Antigua", "Panajachel – Antigua"], ["Route vers Antigua.", "Drive to Antigua.", "Carretera hacia Antigua."], "dg8"),
            bz.day(10, ["Antigua", "Antigua", "Antigua"], X_ANTIGUA, "cg4"),
            bz.day(11, ["Antigua", "Antigua", "Antigua"], ["Journée libre : ascension du volcan Pacaya, plantation de café ou marché artisanal.", "A free day: a climb up Pacaya volcano, a coffee plantation or the craft market.", "Día libre: ascenso al volcán Pacaya, plantación de café o mercado de artesanía."], "mx1"),
          ]),
        bz.chapter(["Le Belize", "Belize", "Belice"], ["Ambergris Caye et la barrière de corail.", "Ambergris Caye and the barrier reef.", "Ambergris Caye y la barrera de coral."],
          ["bz2", "bz1"],
          [
            bz.day(12, ["Guatemala – Belize City – San Pedro", "Guatemala – Belize City – San Pedro", "Guatemala – Belize City – San Pedro"], ["Vol vers Belize City puis bateau vers San Pedro, sur l'île d'Ambergris Caye.", "Flight to Belize City, then by boat to San Pedro, on Ambergris Caye.", "Vuelo a Belize City y barco hacia San Pedro, en la isla de Ambergris Caye."], "bz2"),
            bz.day(13, ["San Pedro", "San Pedro", "San Pedro"], ["Journées libres : snorkeling dans la réserve marine de Hol Chan et Shark Ray Alley, kayak dans la lagune ou plongée vers le Blue Hole en option.", "Free days: snorkelling in the Hol Chan marine reserve and Shark Ray Alley, kayaking in the lagoon or an optional dive to the Blue Hole.", "Días libres: esnórquel en la reserva marina de Hol Chan y Shark Ray Alley, kayak en la laguna o buceo opcional al Blue Hole."], "bz2"),
            bz.day(15, ["San Pedro – Belize City – vol retour", "San Pedro – Belize City – flight home", "San Pedro – Belize City – vuelo de regreso"], ["Bateau vers Belize City et envol pour la France.", "Boat to Belize City and fly to France.", "Barco hacia Belize City y vuelo a Francia."], "bz1"),
            bz.day(16, T_HOME, HOME, "bz2"),
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
