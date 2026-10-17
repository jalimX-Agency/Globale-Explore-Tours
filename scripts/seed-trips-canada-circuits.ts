// Canada — 17 journey-format trips for the existing "canada" destination: Quebec and the East,
// the Maritimes, the Rockies, winter stays and USA–Canada combinations. Near-identical supplier
// programmes are grouped on one page and their extensions (New York, Montreal, Ontario, Alaska
// cruise) are described inside each trip. Prices are per-person "from" prices. Supplier product ids
// are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-canada-circuits.ts
// Requires scripts/upload-images-can-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "canada-cap-sur-la-belle-province-quebec-saguenay-8j": ["297102", "290318"],
  "canada-i-love-canada-toronto-niagara-quebec-8j": ["282939"],
  "canada-incontournables-du-canada-niagara-tadoussac-10j": ["91758", "91818"],
  "canada-beautes-de-l-est-canadien-12j": ["291324", "297118"],
  "canada-magie-du-canada-gaspesie-14j": ["92378", "297139"],
  "canada-est-canadien-intimiste-12j": ["386481"],
  "canada-pays-du-homard-bleu-gaspesie-maritimes-14j": ["404678", "404679"],
  "canada-autotour-le-quebec-c-est-chouette-14j": ["406818"],
  "canada-decouverte-des-rocheuses-canadiennes-11j": ["385459"],
  "canada-grandeur-canadienne-saint-laurent-rocheuses-18j": ["410598"],
  "canada-usa-canada-west-rocheuses-yellowstone-15j": ["399298", "399299"],
  "canada-i-love-usa-canada-quebec-new-york-11j": ["90758", "90778", "90978", "90979"],
  "canada-merveilles-usa-canada-boston-washington-12j": ["402198"],
  "canada-au-coeur-de-l-hiver-canadien-saguenay-9j": ["230761"],
  "canada-naya-hiver-au-lac-morency-8j": ["369299"],
  "canada-autotour-entre-glace-et-erables-9j": ["309378"],
  "canada-autotour-toi-moi-et-le-froid-10j": ["311698"],
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
const MTL: L3 = ["Montréal", "Montreal", "Montreal"];
const TOR: L3 = ["Toronto", "Toronto", "Toronto"];
const VAN: L3 = ["Vancouver", "Vancouver", "Vancouver"];
const QC: L3 = ["Québec", "Quebec City", "Quebec"];
const NY: L3 = ["New York", "New York", "Nueva York"];
const join = (a: L3, b: L3): L3 => [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`, `${a[2]} ${b[2]}`];

// Shared day texts
const X_MTL: L3 = ["Montréal : le Vieux-Montréal et la basilique Notre-Dame, le Vieux-Port, le mont Royal et son belvédère, et la ville souterraine.", "Montreal: Old Montreal and Notre-Dame Basilica, the Old Port, Mount Royal and its lookout, and the underground city.", "Montreal: el Viejo Montreal y la basílica de Notre-Dame, el Viejo Puerto, el monte Royal y su mirador, y la ciudad subterránea."];
const X_QC: L3 = ["Québec, seule ville fortifiée au nord du Mexique : le Château Frontenac, la terrasse Dufferin, le quartier du Petit-Champlain et les plaines d'Abraham.", "Quebec City, the only walled city north of Mexico: the Château Frontenac, Dufferin Terrace, the Petit-Champlain district and the Plains of Abraham.", "Quebec, la única ciudad amurallada al norte de México: el Château Frontenac, la terraza Dufferin, el barrio del Petit-Champlain y las llanuras de Abraham."];
const X_MTL_QC: L3 = ["Tour de Montréal, puis la route du Saint-Laurent jusqu'à Québec.", "A tour of Montreal, then the St Lawrence road to Quebec City.", "Vuelta por Montreal y la carretera del San Lorenzo hasta Quebec."];
const X_NIAG: L3 = ["Les chutes du Niagara et la croisière au pied des chutes Horseshoe, puis le village de Niagara-on-the-Lake et ses vignobles.", "Niagara Falls and the cruise to the foot of the Horseshoe Falls, then the village of Niagara-on-the-Lake and its vineyards.", "Las cataratas del Niágara y el crucero al pie de las cataratas Horseshoe, y el pueblo de Niagara-on-the-Lake y sus viñedos."];
const X_TOR: L3 = ["Toronto, plus grande ville du Canada, la tour CN et le quartier du lac Ontario.", "Toronto, Canada's largest city, the CN Tower and the Lake Ontario waterfront.", "Toronto, la mayor ciudad de Canadá, la torre CN y la orilla del lago Ontario."];
const X_1000: L3 = ["Croisière dans la région des Mille-Îles, sur le Saint-Laurent, puis Ottawa, la capitale fédérale, et sa colline du Parlement.", "A cruise among the Thousand Islands on the St Lawrence, then Ottawa, the federal capital, and its Parliament Hill.", "Crucero por la región de las Mil Islas, en el San Lorenzo, y Ottawa, la capital federal, y su colina del Parlamento."];
const X_TADOU: L3 = ["La route de Charlevoix jusqu'à Tadoussac, et une croisière d'observation des baleines à l'embouchure du fjord du Saguenay.", "The Charlevoix road to Tadoussac, and a whale-watching cruise at the mouth of the Saguenay fjord.", "La carretera de Charlevoix hasta Tadoussac, y un crucero de avistamiento de ballenas en la desembocadura del fiordo del Saguenay."];
const X_SAG: L3 = ["La région du Saguenay–Lac-Saint-Jean, le village historique de Val-Jalbert et sa chute, et le zoo sauvage de Saint-Félicien.", "The Saguenay–Lac-Saint-Jean region, the historic village of Val-Jalbert and its waterfall, and the Saint-Félicien wildlife zoo.", "La región del Saguenay–Lac-Saint-Jean, el pueblo histórico de Val-Jalbert y su cascada, y el zoo salvaje de Saint-Félicien."];
const X_NATURE: L3 = ["Une étape nature au bord d'un lac : canot, randonnée en forêt, observation des castors ou de l'ours noir, et soirée au coin du feu.", "A nature stop by a lake: canoeing, forest walks, watching beavers or black bears, and an evening by the fire.", "Una etapa de naturaleza a orillas de un lago: canoa, paseo por el bosque, observación de castores o del oso negro, y velada junto al fuego."];
const X_GASP: L3 = ["La Gaspésie : le rocher Percé et l'île Bonaventure et ses fous de Bassan, le parc Forillon au bout de la péninsule, et les monts Chic-Chocs.", "Gaspésie: Percé Rock and Bonaventure Island with its gannets, Forillon park at the tip of the peninsula, and the Chic-Choc mountains.", "La Gaspesia: la roca Percé y la isla Bonaventure y sus alcatraces, el parque Forillon en la punta de la península, y los montes Chic-Chocs."];
const X_VAN: L3 = ["Vancouver, entre océan et montagnes : Stanley Park et ses totems, Gastown, Granville Island et le pont suspendu de Capilano.", "Vancouver, between ocean and mountains: Stanley Park and its totem poles, Gastown, Granville Island and the Capilano suspension bridge.", "Vancouver, entre océano y montañas: Stanley Park y sus tótems, Gastown, Granville Island y el puente colgante de Capilano."];
const X_VIC: L3 = ["Traversée en ferry vers l'île de Vancouver et Victoria, son port, son Parlement et les jardins Butchart.", "Ferry crossing to Vancouver Island and Victoria, its harbour, its Parliament and the Butchart Gardens.", "Travesía en ferri a la isla de Vancouver y Victoria, su puerto, su Parlamento y los jardines Butchart."];
const X_WHIS: L3 = ["La Sea-to-Sky Highway par Squamish jusqu'à Whistler, station olympique, puis l'intérieur de la Colombie-Britannique.", "The Sea-to-Sky Highway via Squamish to Whistler, the Olympic resort, then inland British Columbia.", "La Sea-to-Sky Highway por Squamish hasta Whistler, estación olímpica, y el interior de la Columbia Británica."];
const X_WELLS: L3 = ["Le parc de Wells Gray et ses chutes Helmcken, puis le mont Robson, plus haut sommet des Rocheuses canadiennes, et Jasper.", "Wells Gray park and its Helmcken Falls, then Mount Robson, the highest peak in the Canadian Rockies, and Jasper.", "El parque de Wells Gray y sus cataratas Helmcken, y el monte Robson, la cumbre más alta de las Rocosas canadienses, y Jasper."];
const X_JASPER: L3 = ["Le parc de Jasper : le canyon Maligne, le lac Maligne et l'île Spirit, et la faune des montagnes, wapitis et mouflons.", "Jasper park: Maligne Canyon, Maligne Lake and Spirit Island, and mountain wildlife, elk and bighorn sheep.", "El parque de Jasper: el cañón Maligne, el lago Maligne y la isla Spirit, y la fauna de montaña, wapitís y muflones."];
const X_ICEF: L3 = ["La promenade des Glaciers, l'une des plus belles routes du monde, le glacier Athabasca, le lac Peyto puis Lake Louise et ses eaux émeraude.", "The Icefields Parkway, one of the most beautiful roads in the world, the Athabasca Glacier, Peyto Lake, then Lake Louise and its emerald waters.", "La carretera de los Glaciares, una de las más bellas del mundo, el glaciar Athabasca, el lago Peyto y Lake Louise y sus aguas esmeralda."];
const X_BANFF: L3 = ["Le lac Moraine et la vallée des Dix Pics, puis Banff, ses sources chaudes et le mont Sulphur, avant Calgary.", "Moraine Lake and the Valley of the Ten Peaks, then Banff, its hot springs and Sulphur Mountain, before Calgary.", "El lago Moraine y el valle de los Diez Picos, y Banff, sus aguas termales y el monte Sulphur, antes de Calgary."];
const X_US_EAST: L3 = ["Le pays amish de Lancaster, ses fermes et ses carrioles, puis Washington : la Maison-Blanche, le Capitole et le National Mall.", "Lancaster's Amish country, its farms and buggies, then Washington: the White House, the Capitol and the National Mall.", "El país amish de Lancaster, sus granjas y sus carretas, y Washington: la Casa Blanca, el Capitolio y el National Mall."];
const X_PHILLY_NY: L3 = ["Philadelphie et la Liberty Bell, puis New York.", "Philadelphia and the Liberty Bell, then New York.", "Filadelfia y la Liberty Bell, y Nueva York."];
const X_NY: L3 = ["New York : Manhattan, Times Square, la 5e Avenue, Central Park, Wall Street et la vue sur la statue de la Liberté.", "New York: Manhattan, Times Square, Fifth Avenue, Central Park, Wall Street and the view of the Statue of Liberty.", "Nueva York: Manhattan, Times Square, la Quinta Avenida, Central Park, Wall Street y la vista de la estatua de la Libertad."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const e = circuitBuilders({ destinationSlug: "canada", imagePrefix: "can", season: { label: ["Mai à octobre", "May to October", "Mayo a octubre"], months: "may,june,july,august,september,october" } });
  const r = circuitBuilders({ destinationSlug: "canada", imagePrefix: "can", season: { label: ["Juin à septembre", "June to September", "Junio a septiembre"], months: "june,july,august,september" } });
  const h = circuitBuilders({ destinationSlug: "canada", imagePrefix: "can", season: { label: ["Janvier à mars", "January to March", "Enero a marzo"], months: "january,february,march" } });
  const INC = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts aéroport,${n} nuits en hôtels 3*,Transport en autocar,Visites du programme,Guide-accompagnateur francophone${extra}`,
    `Flights from France,Airport transfers,${n} nights in 3* hotels,Transport by coach,Visits in the programme,French-speaking tour leader${extra}`,
    `Vuelos desde Francia,Traslados al aeropuerto,${n} noches en hoteles de 3*,Transporte en autocar,Visitas del programa,Guía acompañante francófono${extra}`,
  ];
  const AUTO = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Voiture de location,${n} nuits en hôtels et auberges,Carnet de route détaillé${extra}`,
    `Flights from France,Rental car,${n} nights in hotels and inns,Detailed road book${extra}`,
    `Vuelos desde Francia,Coche de alquiler,${n} noches en hoteles y posadas,Cuaderno de ruta detallado${extra}`,
  ];

  const journeyTrips = [
    // ───────────── 1. Cap sur la Belle Province / Tout simplement Québec — 8J/6N ─────────────
    e.trip({
      slug: "canada-cap-sur-la-belle-province-quebec-saguenay-8j",
      name: ["Cap sur la Belle Province : Montréal, Québec, Tadoussac et le Lac-Saint-Jean", "Heading for La Belle Province: Montreal, Quebec City, Tadoussac and Lac-Saint-Jean", "Rumbo a la Bella Provincia: Montreal, Quebec, Tadoussac y el Lago San Juan"],
      tagline: ["Le Québec en une semaine, des villes historiques aux baleines du Saint-Laurent", "Quebec in a week, from historic cities to the whales of the St Lawrence", "Quebec en una semana, de las ciudades históricas a las ballenas del San Lorenzo"],
      description: [
        "Le Québec essentiel en groupe : Montréal, Québec et le Château Frontenac, la route de Charlevoix, les baleines de Tadoussac, le Saguenay–Lac-Saint-Jean et une nuit en étape nature au bord d'un lac. Version Tout simplement Québec (9 jours), avec deux nuits en pleine nature et une journée de plus à Québec, à partir de 1 524 € par personne.",
        "Essential Quebec in a group: Montreal, Quebec City and the Château Frontenac, the Charlevoix road, the whales of Tadoussac, Saguenay–Lac-Saint-Jean and a night at a lakeside nature lodge. The Simply Quebec version (9 days), with two nights in the wild and an extra day in Quebec City, from €1,524 per person.",
        "Lo esencial de Quebec en grupo: Montreal, Quebec y el Château Frontenac, la carretera de Charlevoix, las ballenas de Tadoussac, el Saguenay–Lago San Juan y una noche en plena naturaleza a orillas de un lago. Versión Simplemente Quebec (9 días), con dos noches en la naturaleza y un día más en Quebec, desde 1.524 € por persona.",
      ],
      includes: INC(6),
      price: 1336, nights: 6, departureFrom: "Paris", image: "bp2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 49, order: -52000,
      chapters: [
        e.chapter(["Montréal et Québec", "Montreal and Quebec City", "Montreal y Quebec"], ["Les deux grandes villes francophones.", "The two great French-speaking cities.", "Las dos grandes ciudades francófonas."],
          ["bp3", "bp2"],
          [e.day(1, ...arr(MTL), "bp3"), e.day(2, ["Montréal – Québec", "Montreal – Quebec City", "Montreal – Quebec"], X_MTL_QC, "bp3"), e.day(3, QC, X_QC, "bp2")]),
        e.chapter(["Le fjord et le lac", "The fjord and the lake", "El fiordo y el lago"], ["Baleines, Saguenay et forêt.", "Whales, the Saguenay and the forest.", "Ballenas, Saguenay y bosque."],
          ["bp5", "bp7", "bp4", "bp6"],
          [
            e.day(4, ["Tadoussac – Saguenay", "Tadoussac – Saguenay", "Tadoussac – Saguenay"], X_TADOU, "bp5"),
            e.day(5, ["Lac-Saint-Jean – étape nature", "Lac-Saint-Jean – nature stop", "Lago San Juan – etapa de naturaleza"], join(X_SAG, X_NATURE), "bp7"),
            e.day(6, ["Étape nature – Montréal", "Nature stop – Montreal", "Etapa de naturaleza – Montreal"], ["Matinée au bord du lac, puis retour à Montréal.", "A morning by the lake, then back to Montreal.", "Mañana a orillas del lago y regreso a Montreal."], "bp4"),
            e.day(7, ...dep(MTL), "bp6"), e.day(8, T_HOME, HOME, "bp1"),
          ]),
      ],
    }),

    // ───────────── 2. I Love Canada — 8J/6N ─────────────
    e.trip({
      slug: "canada-i-love-canada-toronto-niagara-quebec-8j",
      name: ["I Love Canada : Toronto, Niagara, les Mille-Îles, Ottawa, Montréal et Québec", "I Love Canada: Toronto, Niagara, the Thousand Islands, Ottawa, Montreal and Quebec City", "I Love Canada: Toronto, Niágara, las Mil Islas, Ottawa, Montreal y Quebec"],
      tagline: ["L'Ontario et le Québec en une semaine, des chutes au Château Frontenac", "Ontario and Quebec in a week, from the falls to the Château Frontenac", "Ontario y Quebec en una semana, de las cataratas al Château Frontenac"],
      description: [
        "Un premier tour de l'Est canadien : Toronto et sa tour CN, les chutes du Niagara, la croisière des Mille-Îles, Ottawa et la colline du Parlement, Montréal, puis deux jours à Québec.",
        "A first tour of Eastern Canada: Toronto and its CN Tower, Niagara Falls, the Thousand Islands cruise, Ottawa and Parliament Hill, Montreal, then two days in Quebec City.",
        "Una primera vuelta por el Este canadiense: Toronto y su torre CN, las cataratas del Niágara, el crucero de las Mil Islas, Ottawa y la colina del Parlamento, Montreal, y dos días en Quebec.",
      ],
      includes: INC(6),
      price: 1349, nights: 6, departureFrom: "Marseille", image: "lc3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 49, order: -51999,
      chapters: [
        e.chapter(["L'Ontario", "Ontario", "Ontario"], ["Toronto, Niagara et les Mille-Îles.", "Toronto, Niagara and the Thousand Islands.", "Toronto, Niágara y las Mil Islas."],
          ["lc1", "lc3"],
          [
            e.day(1, ...arr(TOR), "lc1"),
            e.day(2, ["Toronto – Niagara", "Toronto – Niagara", "Toronto – Niágara"], join(X_TOR, X_NIAG), "lc3"),
            e.day(3, ["Toronto – Mille-Îles", "Toronto – Thousand Islands", "Toronto – Mil Islas"], ["Route le long du lac Ontario jusqu'à la région des Mille-Îles.", "Along Lake Ontario to the Thousand Islands region.", "Carretera a lo largo del lago Ontario hasta la región de las Mil Islas."], "ic4"),
            e.day(4, ["Mille-Îles – Ottawa – Montréal", "Thousand Islands – Ottawa – Montreal", "Mil Islas – Ottawa – Montreal"], X_1000, "ic4"),
          ]),
        e.chapter(["Le Québec", "Quebec", "Quebec"], ["Montréal et Québec.", "Montreal and Quebec City.", "Montreal y Quebec."],
          ["lc6", "lc5"],
          [
            e.day(5, ["Montréal – Québec", "Montreal – Quebec City", "Montreal – Quebec"], X_MTL_QC, "lc6"),
            e.day(6, QC, X_QC, "lc5"),
            e.day(7, ["Québec – Montréal – vol retour", "Quebec City – Montreal – flight home", "Quebec – Montreal – vuelo de regreso"], ["Retour à Montréal et envol pour la France.", "Back to Montreal and fly to France.", "Regreso a Montreal y vuelo a Francia."], "lc6"),
            e.day(8, T_HOME, HOME, "lc1"),
          ]),
      ],
    }),

    // ───────────── 3. Les Incontournables du Canada — 10J/8N ─────────────
    e.trip({
      slug: "canada-incontournables-du-canada-niagara-tadoussac-10j",
      name: ["Les incontournables du Canada : Niagara, Québec, Tadoussac et le Lac-Saint-Jean", "Highlights of Canada: Niagara, Quebec City, Tadoussac and Lac-Saint-Jean", "Lo esencial de Canadá: Niágara, Quebec, Tadoussac y el Lago San Juan"],
      tagline: ["De Toronto aux baleines du Saint-Laurent, avec une étape en pleine nature", "From Toronto to the whales of the St Lawrence, with a stop in the wild", "De Toronto a las ballenas del San Lorenzo, con una etapa en plena naturaleza"],
      description: [
        "L'Est canadien complet en dix jours : Toronto, les chutes du Niagara, les Mille-Îles, Ottawa, Montréal, Québec, les baleines de Tadoussac, le Lac-Saint-Jean et le zoo de Saint-Félicien, puis une nuit en étape nature. Avec deux nuits de plus à Montréal (12 jours) à partir de 2 151 € par personne.",
        "Eastern Canada in full in ten days: Toronto, Niagara Falls, the Thousand Islands, Ottawa, Montreal, Quebec City, the whales of Tadoussac, Lac-Saint-Jean and the Saint-Félicien zoo, then a night at a nature lodge. With two more nights in Montreal (12 days) from €2,151 per person.",
        "El Este canadiense completo en diez días: Toronto, las cataratas del Niágara, las Mil Islas, Ottawa, Montreal, Quebec, las ballenas de Tadoussac, el Lago San Juan y el zoo de Saint-Félicien, y una noche en plena naturaleza. Con dos noches más en Montreal (12 días) desde 2.151 € por persona.",
      ],
      includes: INC(8),
      price: 1970, nights: 8, departureFrom: "Paris", image: "ic3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 49, order: -51998,
      chapters: [
        e.chapter(["Ontario et Montréal", "Ontario and Montreal", "Ontario y Montreal"], ["Toronto, Niagara, Ottawa.", "Toronto, Niagara, Ottawa.", "Toronto, Niágara, Ottawa."],
          ["ic2", "ic3", "ic4", "ic5"],
          [
            e.day(1, ...arr(TOR), "ic2"),
            e.day(2, ["Toronto – Niagara", "Toronto – Niagara", "Toronto – Niágara"], join(X_TOR, X_NIAG), "ic3"),
            e.day(3, ["Toronto – Mille-Îles", "Toronto – Thousand Islands", "Toronto – Mil Islas"], ["Route le long du lac Ontario jusqu'à la région des Mille-Îles.", "Along Lake Ontario to the Thousand Islands region.", "Carretera a lo largo del lago Ontario hasta la región de las Mil Islas."], "ic4"),
            e.day(4, ["Ottawa – Montréal", "Ottawa – Montreal", "Ottawa – Montreal"], X_1000, "ic4"),
            e.day(5, ["Montréal – Québec", "Montreal – Quebec City", "Montreal – Quebec"], join(X_MTL, ["Puis Québec.", "Then Quebec City.", "Y Quebec."]), "ic5"),
          ]),
        e.chapter(["Québec et le Saguenay", "Quebec City and the Saguenay", "Quebec y el Saguenay"], ["Baleines, lac et forêt.", "Whales, lake and forest.", "Ballenas, lago y bosque."],
          ["ic6", "ic7", "ic8", "ic1"],
          [
            e.day(6, QC, X_QC, "ic6"),
            e.day(7, ["Tadoussac – Lac-Saint-Jean", "Tadoussac – Lac-Saint-Jean", "Tadoussac – Lago San Juan"], X_TADOU, "ic7"),
            e.day(8, ["Saint-Félicien – étape nature", "Saint-Félicien – nature stop", "Saint-Félicien – etapa de naturaleza"], join(X_SAG, X_NATURE), "ic8"),
            e.day(9, ["Étape nature – Montréal – vol retour", "Nature stop – Montreal – flight home", "Etapa de naturaleza – Montreal – vuelo de regreso"], ["Retour à Montréal et envol pour la France.", "Back to Montreal and fly to France.", "Regreso a Montreal y vuelo a Francia."], "ic1"),
            e.day(10, T_HOME, HOME, "ic2"),
          ]),
      ],
    }),

    // ───────────── 4. Beautés de l'Est Canadien — 12J/10N ─────────────
    e.trip({
      slug: "canada-beautes-de-l-est-canadien-12j",
      name: ["Beautés de l'Est canadien : Québec, le Saguenay, Ottawa, Toronto et Niagara", "Beauties of Eastern Canada: Quebec City, the Saguenay, Ottawa, Toronto and Niagara", "Bellezas del Este canadiense: Quebec, el Saguenay, Ottawa, Toronto y Niágara"],
      tagline: ["Deux nuits en pleine nature et l'Est canadien de Montréal aux chutes du Niagara", "Two nights in the wild and Eastern Canada from Montreal to Niagara Falls", "Dos noches en plena naturaleza y el Este canadiense de Montreal a las cataratas del Niágara"],
      description: [
        "L'Est canadien à un rythme posé : deux nuits en étape nature au bord d'un lac, deux jours à Québec, Tadoussac et ses baleines, le Saguenay–Lac-Saint-Jean, Montréal, Ottawa, les Mille-Îles, Toronto et les chutes du Niagara. Avec une extension à New York (15 jours) à partir de 3 703 € par personne.",
        "Eastern Canada at a relaxed pace: two nights at a lakeside nature lodge, two days in Quebec City, Tadoussac and its whales, Saguenay–Lac-Saint-Jean, Montreal, Ottawa, the Thousand Islands, Toronto and Niagara Falls. With an extension to New York (15 days) from €3,703 per person.",
        "El Este canadiense a un ritmo pausado: dos noches en plena naturaleza a orillas de un lago, dos días en Quebec, Tadoussac y sus ballenas, el Saguenay–Lago San Juan, Montreal, Ottawa, las Mil Islas, Toronto y las cataratas del Niágara. Con una extensión a Nueva York (15 días) desde 3.703 € por persona.",
      ],
      includes: INC(10),
      price: 2290, nights: 10, departureFrom: "Barcelone", image: "be4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 49, order: -51997,
      chapters: [
        e.chapter(["Nature et Québec", "Nature and Quebec City", "Naturaleza y Quebec"], ["Le lac, la ville fortifiée et les baleines.", "The lake, the walled city and the whales.", "El lago, la ciudad amurallada y las ballenas."],
          ["be6", "be4", "be5"],
          [
            e.day(1, ...arr(MTL), "be3"),
            e.day(2, ["Montréal – étape nature", "Montreal – nature stop", "Montreal – etapa de naturaleza"], X_NATURE, "be6"),
            e.day(3, ["Étape nature", "Nature stop", "Etapa de naturaleza"], ["Journée en pleine nature : canot, randonnée et observation de la faune.", "A day in the wild: canoeing, walking and wildlife watching.", "Jornada en plena naturaleza: canoa, senderismo y observación de la fauna."], "be6"),
            e.day(4, ["Étape nature – Québec", "Nature stop – Quebec City", "Etapa de naturaleza – Quebec"], ["Route vers Québec et premiers pas dans la vieille ville.", "Drive to Quebec City and first steps in the old town.", "Carretera hacia Quebec y primeros pasos en la ciudad vieja."], "be4"),
            e.day(5, QC, X_QC, "be4"),
            e.day(6, ["Tadoussac – Saguenay", "Tadoussac – Saguenay", "Tadoussac – Saguenay"], X_TADOU, "be5"),
          ]),
        e.chapter(["Montréal, Ottawa et l'Ontario", "Montreal, Ottawa and Ontario", "Montreal, Ottawa y Ontario"], ["Des Mille-Îles aux chutes du Niagara.", "From the Thousand Islands to Niagara Falls.", "De las Mil Islas a las cataratas del Niágara."],
          ["be3", "be7", "ic3"],
          [
            e.day(7, ["Saguenay – Montréal", "Saguenay – Montreal", "Saguenay – Montreal"], join(X_SAG, ["Puis Montréal.", "Then Montreal.", "Y Montreal."]), "be3"),
            e.day(8, ["Ottawa – Mille-Îles", "Ottawa – Thousand Islands", "Ottawa – Mil Islas"], X_1000, "be7"),
            e.day(9, ["Mille-Îles – Toronto", "Thousand Islands – Toronto", "Mil Islas – Toronto"], X_TOR, "lc1"),
            e.day(10, ["Toronto – Niagara", "Toronto – Niagara", "Toronto – Niágara"], X_NIAG, "ic3"),
            e.day(11, ...dep(TOR), "lc1"), e.day(12, T_HOME, HOME, "be4"),
          ]),
      ],
    }),

    // ───────────── 5. Magie du Canada — 14J/12N ─────────────
    e.trip({
      slug: "canada-magie-du-canada-gaspesie-14j",
      name: ["Magie du Canada : Niagara, Québec, Tadoussac et le tour de la Gaspésie", "Magic of Canada: Niagara, Quebec City, Tadoussac and a tour of Gaspésie", "Magia de Canadá: Niágara, Quebec, Tadoussac y la vuelta a la Gaspesia"],
      tagline: ["De l'Ontario au rocher Percé, l'Est canadien jusqu'au bout de la péninsule", "From Ontario to Percé Rock, Eastern Canada to the tip of the peninsula", "De Ontario a la roca Percé, el Este canadiense hasta la punta de la península"],
      description: [
        "Un grand circuit de l'Est : Toronto et Niagara, les Mille-Îles et Ottawa, Montréal, Québec, Tadoussac et ses baleines, le parc du Bic, la baie des Chaleurs, le rocher Percé, le parc Forillon et le parc de la Gaspésie, Wendake, village huron-wendat, puis deux nuits en étape nature. Avec deux nuits de plus à Montréal (16 jours) à partir de 3 004 € par personne.",
        "A grand tour of the East: Toronto and Niagara, the Thousand Islands and Ottawa, Montreal, Quebec City, Tadoussac and its whales, Bic park, Chaleur Bay, Percé Rock, Forillon park and Gaspésie park, Wendake, a Huron-Wendat village, then two nights at a nature lodge. With two more nights in Montreal (16 days) from €3,004 per person.",
        "Un gran circuito por el Este: Toronto y Niágara, las Mil Islas y Ottawa, Montreal, Quebec, Tadoussac y sus ballenas, el parque del Bic, la bahía de Chaleur, la roca Percé, el parque Forillon y el parque de la Gaspesia, Wendake, pueblo hurón-wendat, y dos noches en plena naturaleza. Con dos noches más en Montreal (16 días) desde 3.004 € por persona.",
      ],
      includes: INC(12),
      price: 2776, nights: 12, departureFrom: "Marseille", image: "mc1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 49, order: -51996,
      chapters: [
        e.chapter(["Ontario, Montréal et Québec", "Ontario, Montreal and Quebec City", "Ontario, Montreal y Quebec"], ["Les grandes villes et les chutes.", "The great cities and the falls.", "Las grandes ciudades y las cataratas."],
          ["mc3", "mc2", "mc4", "mc5", "mc6"],
          [
            e.day(1, ...arr(TOR), "mc3"),
            e.day(2, ["Toronto – Niagara", "Toronto – Niagara", "Toronto – Niágara"], join(X_TOR, X_NIAG), "mc2"),
            e.day(3, ["Mille-Îles – Ottawa", "Thousand Islands – Ottawa", "Mil Islas – Ottawa"], X_1000, "mc4"),
            e.day(4, ["Ottawa – Montréal", "Ottawa – Montreal", "Ottawa – Montreal"], X_MTL, "mc5"),
            e.day(5, ["Montréal – Québec", "Montreal – Quebec City", "Montreal – Quebec"], X_QC, "mc6"),
          ]),
        e.chapter(["La Gaspésie", "Gaspésie", "La Gaspesia"], ["Baleines, falaises et rocher Percé.", "Whales, cliffs and Percé Rock.", "Ballenas, acantilados y roca Percé."],
          ["mc1", "mc7", "mc8", "hb3"],
          [
            e.day(6, ["Tadoussac – Saint-Siméon", "Tadoussac – Saint-Siméon", "Tadoussac – Saint-Siméon"], X_TADOU, "ic7"),
            e.day(7, ["Parc du Bic – baie des Chaleurs", "Bic park – Chaleur Bay", "Parque del Bic – bahía de Chaleur"], ["Rivière-du-Loup, le parc du Bic et ses phoques, puis la vallée de la Matapédia jusqu'à la baie des Chaleurs.", "Rivière-du-Loup, Bic park and its seals, then the Matapédia valley to Chaleur Bay.", "Rivière-du-Loup, el parque del Bic y sus focas, y el valle de la Matapédia hasta la bahía de Chaleur."], "mc7"),
            e.day(8, ["Baie des Chaleurs – Percé", "Chaleur Bay – Percé", "Bahía de Chaleur – Percé"], ["Les villages de pêcheurs de la baie des Chaleurs, puis Percé et son rocher.", "The fishing villages of Chaleur Bay, then Percé and its rock.", "Los pueblos de pescadores de la bahía de Chaleur, y Percé y su roca."], "mc1"),
            e.day(9, ["Forillon – Sainte-Anne-des-Monts", "Forillon – Sainte-Anne-des-Monts", "Forillon – Sainte-Anne-des-Monts"], X_GASP, "mc8"),
            e.day(10, ["Parc de la Gaspésie – Rimouski", "Gaspésie park – Rimouski", "Parque de la Gaspesia – Rimouski"], ["Le parc de la Gaspésie et les monts Chic-Chocs, puis Rimouski.", "Gaspésie park and the Chic-Choc mountains, then Rimouski.", "El parque de la Gaspesia y los montes Chic-Chocs, y Rimouski."], "hb3"),
          ]),
        e.chapter(["Wendake et la forêt", "Wendake and the forest", "Wendake y el bosque"], ["La culture huronne et la nature.", "Huron culture and nature.", "La cultura hurona y la naturaleza."],
          ["be6"],
          [
            e.day(11, ["Wendake – étape nature", "Wendake – nature stop", "Wendake – etapa de naturaleza"], ["Wendake, village de la nation huronne-wendat, puis l'étape nature au bord d'un lac.", "Wendake, village of the Huron-Wendat nation, then the lakeside nature lodge.", "Wendake, pueblo de la nación hurona-wendat, y la etapa de naturaleza a orillas de un lago."], "be6"),
            e.day(12, ["Étape nature", "Nature stop", "Etapa de naturaleza"], X_NATURE, "be6"),
            e.day(13, ["Étape nature – Montréal – vol retour", "Nature stop – Montreal – flight home", "Etapa de naturaleza – Montreal – vuelo de regreso"], ["Retour à Montréal et envol pour la France.", "Back to Montreal and fly to France.", "Regreso a Montreal y vuelo a Francia."], "mc5"),
            e.day(14, T_HOME, HOME, "mc1"),
          ]),
      ],
    }),

    // ───────────── 6. L'Est Canadien Intimiste — 12J/10N ─────────────
    e.trip({
      slug: "canada-est-canadien-intimiste-12j",
      name: ["L'Est canadien intimiste : Niagara, Ottawa, le parc Oméga, Québec et Tadoussac", "Eastern Canada Up Close: Niagara, Ottawa, Omega Park, Quebec City and Tadoussac", "El Este canadiense íntimo: Niágara, Ottawa, el parque Omega, Quebec y Tadoussac"],
      tagline: ["En petit groupe, avec deux nuits dans une pourvoirie de la Mauricie", "In a small group, with two nights at an outfitter's lodge in Mauricie", "En grupo reducido, con dos noches en un refugio de la Mauricie"],
      description: [
        "L'Est canadien en petit groupe : Toronto et les chutes du Niagara, les Mille-Îles, Ottawa et Gatineau, le parc Oméga et ses wapitis, deux nuits à Saint-Alexis-des-Monts en Mauricie, Québec, Tadoussac et ses baleines, puis deux jours à Montréal.",
        "Eastern Canada in a small group: Toronto and Niagara Falls, the Thousand Islands, Ottawa and Gatineau, Omega Park and its elk, two nights at Saint-Alexis-des-Monts in Mauricie, Quebec City, Tadoussac and its whales, then two days in Montreal.",
        "El Este canadiense en grupo reducido: Toronto y las cataratas del Niágara, las Mil Islas, Ottawa y Gatineau, el parque Omega y sus wapitís, dos noches en Saint-Alexis-des-Monts en la Mauricie, Quebec, Tadoussac y sus ballenas, y dos días en Montreal.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,10 nuits en hôtels et auberges de charme,Transport en minibus,Visites du programme,Guide-accompagnateur francophone,Petit groupe",
        "Flights from France,Airport transfers,10 nights in boutique hotels and inns,Transport by minibus,Visits in the programme,French-speaking tour leader,Small group",
        "Vuelos desde Francia,Traslados al aeropuerto,10 noches en hoteles y posadas con encanto,Transporte en minibús,Visitas del programa,Guía acompañante francófono,Grupo reducido",
      ],
      price: 4063, nights: 10, departureFrom: "Paris", image: "ei1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,solo", maxGuests: 16, order: -51995,
      chapters: [
        e.chapter(["Ontario et Ottawa", "Ontario and Ottawa", "Ontario y Ottawa"], ["Toronto, Niagara et les Mille-Îles.", "Toronto, Niagara and the Thousand Islands.", "Toronto, Niágara y las Mil Islas."],
          ["ei2", "ei3", "ei5"],
          [
            e.day(1, ...arr(TOR), "ei2"),
            e.day(2, ["Toronto – Niagara", "Toronto – Niagara", "Toronto – Niágara"], join(X_TOR, X_NIAG), "ei3"),
            e.day(3, ["Mille-Îles – Gananoque", "Thousand Islands – Gananoque", "Mil Islas – Gananoque"], ["Croisière dans la région des Mille-Îles et nuit à Gananoque.", "A Thousand Islands cruise and a night in Gananoque.", "Crucero por las Mil Islas y noche en Gananoque."], "ic4"),
            e.day(4, ["Ottawa – Gatineau", "Ottawa – Gatineau", "Ottawa – Gatineau"], ["Ottawa, la colline du Parlement et le canal Rideau, puis Gatineau sur l'autre rive.", "Ottawa, Parliament Hill and the Rideau Canal, then Gatineau across the river.", "Ottawa, la colina del Parlamento y el canal Rideau, y Gatineau en la otra orilla."], "ei5"),
          ]),
        e.chapter(["La Mauricie et Québec", "Mauricie and Quebec City", "La Mauricie y Quebec"], ["Forêt, faune et baleines.", "Forest, wildlife and whales.", "Bosque, fauna y ballenas."],
          ["ei4", "ei1", "ei6", "ei7", "ei8"],
          [
            e.day(5, ["Parc Oméga – Saint-Alexis-des-Monts", "Omega Park – Saint-Alexis-des-Monts", "Parque Omega – Saint-Alexis-des-Monts"], ["Le parc Oméga, à parcourir en voiture parmi les wapitis, cerfs et bisons, puis la Mauricie.", "Omega Park, driven through among elk, deer and bison, then Mauricie.", "El parque Omega, recorrido en coche entre wapitís, ciervos y bisontes, y la Mauricie."], "ei4"),
            e.day(6, ["Saint-Alexis-des-Monts", "Saint-Alexis-des-Monts", "Saint-Alexis-des-Monts"], X_NATURE, "ei1"),
            e.day(7, ["Saint-Alexis-des-Monts – Québec", "Saint-Alexis-des-Monts – Quebec City", "Saint-Alexis-des-Monts – Quebec"], X_QC, "ei7"),
            e.day(8, ["Tadoussac", "Tadoussac", "Tadoussac"], X_TADOU, "ei8"),
          ]),
        e.chapter(["Montréal", "Montreal", "Montreal"], ["La métropole francophone.", "The French-speaking metropolis.", "La metrópolis francófona."],
          ["uc2", "mu6"],
          [
            e.day(9, ["Québec – Montréal", "Quebec City – Montreal", "Quebec – Montreal"], ["Retour vers Montréal par le chemin du Roy, le long du Saint-Laurent.", "Back to Montreal along the Chemin du Roy, beside the St Lawrence.", "Regreso a Montreal por el camino del Rey, a lo largo del San Lorenzo."], "mu6"),
            e.day(10, MTL, X_MTL, "uc2"),
            e.day(11, ...dep(MTL), "mu6"), e.day(12, T_HOME, HOME, "ei1"),
          ]),
      ],
    }),

    // ───────────── 7. Au Pays du Homard Bleu — 14J/12N ─────────────
    e.trip({
      slug: "canada-pays-du-homard-bleu-gaspesie-maritimes-14j",
      name: ["Au pays du homard bleu : la Gaspésie, l'Acadie et l'Île-du-Prince-Édouard", "Land of the Blue Lobster: Gaspésie, Acadia and Prince Edward Island", "En el país de la langosta azul: la Gaspesia, Acadia y la Isla del Príncipe Eduardo"],
      tagline: ["Du Saint-Laurent aux provinces maritimes, par la baie de Fundy et ses marées géantes", "From the St Lawrence to the Maritime provinces, by the Bay of Fundy and its giant tides", "Del San Lorenzo a las provincias marítimas, por la bahía de Fundy y sus mareas gigantes"],
      description: [
        "Le Canada maritime : Montréal et Québec, la Gaspésie avec son parc national, Forillon et le rocher Percé, l'Acadie du Nouveau-Brunswick à Caraquet, l'Île-du-Prince-Édouard, la baie de Fundy et ses rochers de Hopewell, Saint John, Saint Andrews et Fredericton. Avec un pré-tour en Ontario (Toronto, Niagara, Mille-Îles, Ottawa) en 17 jours à partir de 4 155 € par personne.",
        "Maritime Canada: Montreal and Quebec City, Gaspésie with its national park, Forillon and Percé Rock, Acadian New Brunswick at Caraquet, Prince Edward Island, the Bay of Fundy and its Hopewell Rocks, Saint John, Saint Andrews and Fredericton. With a pre-tour in Ontario (Toronto, Niagara, the Thousand Islands, Ottawa) in 17 days from €4,155 per person.",
        "El Canadá marítimo: Montreal y Quebec, la Gaspesia con su parque nacional, Forillon y la roca Percé, la Acadia de Nuevo Brunswick en Caraquet, la Isla del Príncipe Eduardo, la bahía de Fundy y sus rocas de Hopewell, Saint John, Saint Andrews y Fredericton. Con un pre-tour en Ontario (Toronto, Niágara, Mil Islas, Ottawa) en 17 días desde 4.155 € por persona.",
      ],
      includes: INC(12),
      price: 3515, nights: 12, departureFrom: "Paris", image: "hb6",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 49, order: -51994,
      chapters: [
        e.chapter(["Québec et la Gaspésie", "Quebec City and Gaspésie", "Quebec y la Gaspesia"], ["Le Saint-Laurent jusqu'au rocher Percé.", "The St Lawrence to Percé Rock.", "El San Lorenzo hasta la roca Percé."],
          ["hb2", "hb1", "hb3", "hb7"],
          [
            e.day(1, ...arr(MTL), "hb8"),
            e.day(2, ["Montréal – Québec", "Montreal – Quebec City", "Montreal – Quebec"], X_QC, "hb2"),
            e.day(3, ["Québec – Rimouski", "Quebec City – Rimouski", "Quebec – Rimouski"], ["La rive sud du Saint-Laurent et ses villages jusqu'à Rimouski.", "The south shore of the St Lawrence and its villages to Rimouski.", "La orilla sur del San Lorenzo y sus pueblos hasta Rimouski."], "hb7"),
            e.day(4, ["Parc de la Gaspésie", "Gaspésie park", "Parque de la Gaspesia"], ["Le parc national de la Gaspésie et les monts Chic-Chocs, puis Sainte-Anne-des-Monts.", "Gaspésie national park and the Chic-Choc mountains, then Sainte-Anne-des-Monts.", "El parque nacional de la Gaspesia y los montes Chic-Chocs, y Sainte-Anne-des-Monts."], "hb1"),
            e.day(5, ["Forillon – Percé", "Forillon – Percé", "Forillon – Percé"], X_GASP, "hb3"),
          ]),
        e.chapter(["L'Acadie et les Maritimes", "Acadia and the Maritimes", "Acadia y las Marítimas"], ["Homard, marées et île rouge.", "Lobster, tides and the red island.", "Langosta, mareas e isla roja."],
          ["hb4", "hb5", "hb6"],
          [
            e.day(6, ["Percé – Campbellton", "Percé – Campbellton", "Percé – Campbellton"], ["La baie des Chaleurs jusqu'au Nouveau-Brunswick.", "Chaleur Bay to New Brunswick.", "La bahía de Chaleur hasta Nuevo Brunswick."], "mc7"),
            e.day(7, ["Caraquet", "Caraquet", "Caraquet"], ["Caraquet, cœur de l'Acadie, et le village historique acadien qui fait revivre la vie des déportés revenus.", "Caraquet, heart of Acadia, and the Acadian Historical Village, which brings back the life of the returning deportees.", "Caraquet, corazón de Acadia, y el pueblo histórico acadiano que revive la vida de los deportados que regresaron."], "hb4"),
            e.day(8, ["Caraquet – Moncton", "Caraquet – Moncton", "Caraquet – Moncton"], ["La côte acadienne, ses dunes et ses passerelles, jusqu'à Moncton.", "The Acadian coast, its dunes and boardwalks, to Moncton.", "La costa acadiana, sus dunas y sus pasarelas, hasta Moncton."], "hb4"),
            e.day(9, ["Île-du-Prince-Édouard", "Prince Edward Island", "Isla del Príncipe Eduardo"], ["Le pont de la Confédération vers l'Île-du-Prince-Édouard, ses terres rouges, ses phares et ses homards.", "The Confederation Bridge to Prince Edward Island, its red earth, lighthouses and lobsters.", "El puente de la Confederación hacia la Isla del Príncipe Eduardo, sus tierras rojas, sus faros y sus langostas."], "hb5"),
            e.day(10, ["Baie de Fundy – Saint John", "Bay of Fundy – Saint John", "Bahía de Fundy – Saint John"], ["La baie de Fundy et ses marées, les plus hautes du monde, et les rochers de Hopewell à marée basse.", "The Bay of Fundy and its tides, the highest in the world, and the Hopewell Rocks at low tide.", "La bahía de Fundy y sus mareas, las más altas del mundo, y las rocas de Hopewell con marea baja."], "hb6"),
            e.day(11, ["Saint Andrews – Fredericton", "Saint Andrews – Fredericton", "Saint Andrews – Fredericton"], ["Saint Andrews, station balnéaire victorienne, puis Fredericton, capitale du Nouveau-Brunswick, et Edmundston.", "Saint Andrews, a Victorian seaside resort, then Fredericton, capital of New Brunswick, and Edmundston.", "Saint Andrews, balneario victoriano, y Fredericton, capital de Nuevo Brunswick, y Edmundston."], "hb6"),
            e.day(12, ["Edmundston – Québec", "Edmundston – Quebec City", "Edmundston – Quebec"], ["Retour vers Québec par la vallée du Saint-Jean.", "Back to Quebec City through the Saint John valley.", "Regreso a Quebec por el valle del San Juan."], "hb2"),
            e.day(13, ["Québec – Montréal – vol retour", "Quebec City – Montreal – flight home", "Quebec – Montreal – vuelo de regreso"], ["Retour à Montréal et envol pour la France.", "Back to Montreal and fly to France.", "Regreso a Montreal y vuelo a Francia."], "hb8"),
            e.day(14, T_HOME, HOME, "hb1"),
          ]),
      ],
    }),

    // ───────────── 8. Autotour Le Québec c'est Chouette — 14J/12N ─────────────
    e.trip({
      slug: "canada-autotour-le-quebec-c-est-chouette-14j",
      name: ["Autotour « Le Québec c'est chouette ! » : parc Oméga, Val-Jalbert et Tadoussac en famille", "Self-drive 'Quebec is great!': Omega Park, Val-Jalbert and Tadoussac as a family", "Autotour «¡Quebec es genial!»: parque Omega, Val-Jalbert y Tadoussac en familia"],
      tagline: ["Un autotour pensé pour les familles, entre animaux, nature et villages", "A self-drive tour designed for families, between animals, nature and villages", "Un autotour pensado para las familias, entre animales, naturaleza y pueblos"],
      description: [
        "Le Québec à votre rythme en voiture de location : Montréal, deux nuits au parc Oméga parmi les wapitis et les ours, la Mauricie à Saint-Alexis-des-Monts, le village historique de Val-Jalbert, Sacré-Cœur et les baleines de Tadoussac, le canyon Sainte-Anne, le parc aquatique de Valcartier et deux jours à Québec.",
        "Quebec at your own pace in a rental car: Montreal, two nights at Omega Park among elk and bears, Mauricie at Saint-Alexis-des-Monts, the historic village of Val-Jalbert, Sacré-Cœur and the whales of Tadoussac, Sainte-Anne canyon, the Valcartier water park and two days in Quebec City.",
        "Quebec a su ritmo en coche de alquiler: Montreal, dos noches en el parque Omega entre wapitís y osos, la Mauricie en Saint-Alexis-des-Monts, el pueblo histórico de Val-Jalbert, Sacré-Cœur y las ballenas de Tadoussac, el cañón Sainte-Anne, el parque acuático de Valcartier y dos días en Quebec.",
      ],
      includes: AUTO(12, ",Entrées au parc Oméga et à Valcartier"),
      price: 3000, nights: 12, departureFrom: "Paris", image: "qc3",
      theme: "family", feeling: "distraction", travelerTypes: "family,couples", maxGuests: 8, order: -51993,
      chapters: [
        e.chapter(["Montréal et le parc Oméga", "Montreal and Omega Park", "Montreal y el parque Omega"], ["La ville et les animaux.", "The city and the animals.", "La ciudad y los animales."],
          ["qc1", "qc5", "qc6"],
          [
            e.day(1, ...arr(MTL), "uc2"),
            e.day(2, MTL, X_MTL, "uc2"),
            e.day(3, ["Montréal – parc Oméga", "Montreal – Omega Park", "Montreal – parque Omega"], ["Route vers l'Outaouais et le parc Oméga, où l'on nourrit les cerfs depuis sa voiture.", "Drive to the Outaouais and Omega Park, where you feed the deer from your car.", "Carretera hacia el Outaouais y el parque Omega, donde se alimenta a los ciervos desde el coche."], "qc5"),
            e.day(4, ["Parc Oméga", "Omega Park", "Parque Omega"], ["Journée au parc : sentiers, ours noirs, loups et wapitis, et la ferme des enfants.", "A day in the park: trails, black bears, wolves and elk, and the children's farm.", "Jornada en el parque: senderos, osos negros, lobos y wapitís, y la granja de los niños."], "qc6"),
          ]),
        e.chapter(["Mauricie, Saguenay et Tadoussac", "Mauricie, the Saguenay and Tadoussac", "Mauricie, Saguenay y Tadoussac"], ["Lacs, villages et baleines.", "Lakes, villages and whales.", "Lagos, pueblos y ballenas."],
          ["qc1", "qc4", "qc7"],
          [
            e.day(5, ["Parc Oméga – Saint-Alexis-des-Monts", "Omega Park – Saint-Alexis-des-Monts", "Parque Omega – Saint-Alexis-des-Monts"], ["Route vers la Mauricie et ses lacs.", "Drive to Mauricie and its lakes.", "Carretera hacia la Mauricie y sus lagos."], "qc1"),
            e.day(6, ["Saint-Alexis-des-Monts", "Saint-Alexis-des-Monts", "Saint-Alexis-des-Monts"], X_NATURE, "qc1"),
            e.day(7, ["Val-Jalbert", "Val-Jalbert", "Val-Jalbert"], X_SAG, "ic8"),
            e.day(8, ["Val-Jalbert – Sacré-Cœur", "Val-Jalbert – Sacré-Cœur", "Val-Jalbert – Sacré-Cœur"], ["Le long du fjord du Saguenay jusqu'à Sacré-Cœur.", "Along the Saguenay fjord to Sacré-Cœur.", "A lo largo del fiordo del Saguenay hasta Sacré-Cœur."], "bp5"),
            e.day(9, ["Tadoussac", "Tadoussac", "Tadoussac"], ["Croisière aux baleines depuis Tadoussac, à l'embouchure du fjord.", "A whale cruise from Tadoussac, at the mouth of the fjord.", "Crucero de ballenas desde Tadoussac, en la desembocadura del fiordo."], "qc4"),
          ]),
        e.chapter(["Québec", "Quebec City", "Quebec"], ["Canyon, parc aquatique et vieille ville.", "Canyon, water park and old town.", "Cañón, parque acuático y ciudad vieja."],
          ["qc8", "qc7", "qc3"],
          [
            e.day(10, ["Canyon Sainte-Anne – Québec", "Sainte-Anne canyon – Quebec City", "Cañón Sainte-Anne – Quebec"], ["Le canyon Sainte-Anne et ses passerelles suspendues, puis Québec.", "Sainte-Anne canyon and its suspension bridges, then Quebec City.", "El cañón Sainte-Anne y sus pasarelas colgantes, y Quebec."], "qc3"),
            e.day(11, ["Valcartier", "Valcartier", "Valcartier"], ["Journée au village Vacances Valcartier et ses toboggans.", "A day at Village Vacances Valcartier and its water slides.", "Jornada en el Village Vacances Valcartier y sus toboganes."], "qc7"),
            e.day(12, QC, X_QC, "qc8"),
            e.day(13, ["Québec – Montréal – vol retour", "Quebec City – Montreal – flight home", "Quebec – Montreal – vuelo de regreso"], ["Retour à Montréal et envol pour la France.", "Back to Montreal and fly to France.", "Regreso a Montreal y vuelo a Francia."], "qc8"),
            e.day(14, T_HOME, HOME, "qc3"),
          ]),
      ],
    }),

    // ───────────── 9. Découverte des Rocheuses Canadiennes — 11J/9N ─────────────
    r.trip({
      slug: "canada-decouverte-des-rocheuses-canadiennes-11j",
      name: ["Découverte des Rocheuses canadiennes : Vancouver, Victoria, Jasper et Banff", "Discovering the Canadian Rockies: Vancouver, Victoria, Jasper and Banff", "Descubrimiento de las Rocosas canadienses: Vancouver, Victoria, Jasper y Banff"],
      tagline: ["De l'océan Pacifique aux lacs turquoise des Rocheuses", "From the Pacific Ocean to the turquoise lakes of the Rockies", "Del océano Pacífico a los lagos turquesa de las Rocosas"],
      description: [
        "L'Ouest canadien en groupe : Vancouver, l'île de Vancouver et Victoria, la Sea-to-Sky Highway et Whistler, Kamloops, le parc de Wells Gray, deux nuits à Jasper, la promenade des Glaciers, Lake Louise, le lac Moraine et Banff, jusqu'à Calgary.",
        "Western Canada in a group: Vancouver, Vancouver Island and Victoria, the Sea-to-Sky Highway and Whistler, Kamloops, Wells Gray park, two nights in Jasper, the Icefields Parkway, Lake Louise, Moraine Lake and Banff, all the way to Calgary.",
        "El Oeste canadiense en grupo: Vancouver, la isla de Vancouver y Victoria, la Sea-to-Sky Highway y Whistler, Kamloops, el parque de Wells Gray, dos noches en Jasper, la carretera de los Glaciares, Lake Louise, el lago Moraine y Banff, hasta Calgary.",
      ],
      includes: INC(9),
      price: 3931, nights: 9, departureFrom: "Francfort", image: "rc1",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 49, order: -51992,
      chapters: [
        r.chapter(["Vancouver et la côte Pacifique", "Vancouver and the Pacific coast", "Vancouver y la costa del Pacífico"], ["Ville, île et Sea-to-Sky.", "City, island and Sea-to-Sky.", "Ciudad, isla y Sea-to-Sky."],
          ["rc3", "rc4", "rc5", "rc6"],
          [
            r.day(1, ...arr(VAN), "rc3"),
            r.day(2, VAN, X_VAN, "rc4"),
            r.day(3, ["Vancouver – Victoria", "Vancouver – Victoria", "Vancouver – Victoria"], X_VIC, "rc5"),
            r.day(4, ["Victoria – Squamish", "Victoria – Squamish", "Victoria – Squamish"], ["Retour sur le continent en ferry et route côtière jusqu'à Squamish.", "Ferry back to the mainland and the coast road to Squamish.", "Regreso al continente en ferri y carretera costera hasta Squamish."], "rc6"),
            r.day(5, ["Whistler – Kamloops", "Whistler – Kamloops", "Whistler – Kamloops"], X_WHIS, "rc6"),
          ]),
        r.chapter(["Les Rocheuses", "The Rockies", "Las Rocosas"], ["Jasper, les glaciers et Banff.", "Jasper, the glaciers and Banff.", "Jasper, los glaciares y Banff."],
          ["rc7", "rc1", "rc8", "uw5"],
          [
            r.day(6, ["Wells Gray – Jasper", "Wells Gray – Jasper", "Wells Gray – Jasper"], X_WELLS, "rc7"),
            r.day(7, ["Jasper", "Jasper", "Jasper"], X_JASPER, "rc8"),
            r.day(8, ["Promenade des Glaciers – Lake Louise", "Icefields Parkway – Lake Louise", "Carretera de los Glaciares – Lake Louise"], X_ICEF, "uw5"),
            r.day(9, ["Lake Louise – Banff – Calgary", "Lake Louise – Banff – Calgary", "Lake Louise – Banff – Calgary"], X_BANFF, "rc1"),
            r.day(10, ["Calgary – vol retour", "Calgary – flight home", "Calgary – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "rc8"),
            r.day(11, T_HOME, HOME, "rc1"),
          ]),
      ],
    }),

    // ───────────── 10. Grandeur Canadienne — 18J/16N ─────────────
    r.trip({
      slug: "canada-grandeur-canadienne-saint-laurent-rocheuses-18j",
      name: ["Grandeur canadienne : du Saint-Laurent aux Rocheuses", "Canadian Grandeur: from the St Lawrence to the Rockies", "Grandeza canadiense: del San Lorenzo a las Rocosas"],
      tagline: ["Le Canada d'un océan à l'autre, de Niagara à Banff", "Canada from ocean to ocean, from Niagara to Banff", "Canadá de un océano a otro, de Niágara a Banff"],
      description: [
        "La traversée du Canada : Toronto et Niagara, les Mille-Îles, Kingston, Ottawa, Montréal et deux jours dans la région de Québec, puis un vol vers Vancouver, Victoria, Whistler, Wells Gray, deux nuits à Jasper, la promenade des Glaciers, Lake Louise et Banff jusqu'à Calgary.",
        "Crossing Canada: Toronto and Niagara, the Thousand Islands, Kingston, Ottawa, Montreal and two days around Quebec City, then a flight to Vancouver, Victoria, Whistler, Wells Gray, two nights in Jasper, the Icefields Parkway, Lake Louise and Banff to Calgary.",
        "La travesía de Canadá: Toronto y Niágara, las Mil Islas, Kingston, Ottawa, Montreal y dos días en la región de Quebec, y un vuelo a Vancouver, Victoria, Whistler, Wells Gray, dos noches en Jasper, la carretera de los Glaciares, Lake Louise y Banff hasta Calgary.",
      ],
      includes: INC(16, ",Vol intérieur Montréal – Vancouver"),
      price: 5799, nights: 16, departureFrom: "Lyon", image: "gc5",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 49, order: -51991,
      chapters: [
        r.chapter(["L'Est canadien", "Eastern Canada", "El Este canadiense"], ["De Toronto à Québec.", "From Toronto to Quebec City.", "De Toronto a Quebec."],
          ["gc2", "gc4", "gc6", "gc7"],
          [
            r.day(1, ...arr(TOR), "lc1"),
            r.day(2, ["Toronto – Niagara", "Toronto – Niagara", "Toronto – Niágara"], X_NIAG, "gc2"),
            r.day(3, ["Mille-Îles – Kingston", "Thousand Islands – Kingston", "Mil Islas – Kingston"], ["Croisière dans les Mille-Îles et Kingston, première capitale du Canada.", "A Thousand Islands cruise and Kingston, Canada's first capital.", "Crucero por las Mil Islas y Kingston, primera capital de Canadá."], "gc4"),
            r.day(4, ["Ottawa – Montréal", "Ottawa – Montreal", "Ottawa – Montreal"], ["Ottawa et la colline du Parlement, puis Montréal.", "Ottawa and Parliament Hill, then Montreal.", "Ottawa y la colina del Parlamento, y Montreal."], "mc4"),
            r.day(5, ["Montréal – région de Québec", "Montreal – Quebec City area", "Montreal – región de Quebec"], X_MTL_QC, "gc6"),
            r.day(6, QC, X_QC, "gc7"),
            r.day(7, ["Québec – Montréal", "Quebec City – Montreal", "Quebec – Montreal"], X_MTL, "mu6"),
          ]),
        r.chapter(["La côte Pacifique", "The Pacific coast", "La costa del Pacífico"], ["Vancouver, Victoria et Whistler.", "Vancouver, Victoria and Whistler.", "Vancouver, Victoria y Whistler."],
          ["gc3", "gc8", "rc6"],
          [
            r.day(8, ["Montréal – Vancouver", "Montreal – Vancouver", "Montreal – Vancouver"], ["Vol intérieur vers Vancouver, de l'Atlantique au Pacifique.", "A domestic flight to Vancouver, from the Atlantic to the Pacific.", "Vuelo interior a Vancouver, del Atlántico al Pacífico."], "gc3"),
            r.day(9, VAN, X_VAN, "gc3"),
            r.day(10, ["Vancouver – Victoria", "Vancouver – Victoria", "Vancouver – Victoria"], X_VIC, "gc8"),
            r.day(11, ["Victoria – Squamish", "Victoria – Squamish", "Victoria – Squamish"], ["Retour sur le continent en ferry jusqu'à Squamish.", "Ferry back to the mainland to Squamish.", "Regreso al continente en ferri hasta Squamish."], "rc6"),
            r.day(12, ["Whistler – Kamloops", "Whistler – Kamloops", "Whistler – Kamloops"], X_WHIS, "rc6"),
          ]),
        r.chapter(["Les Rocheuses", "The Rockies", "Las Rocosas"], ["Jasper, les glaciers et Banff.", "Jasper, the glaciers and Banff.", "Jasper, los glaciares y Banff."],
          ["gc5", "rc7", "rc8", "uw5"],
          [
            r.day(13, ["Wells Gray – Jasper", "Wells Gray – Jasper", "Wells Gray – Jasper"], X_WELLS, "rc7"),
            r.day(14, ["Jasper", "Jasper", "Jasper"], X_JASPER, "rc8"),
            r.day(15, ["Promenade des Glaciers – Lake Louise", "Icefields Parkway – Lake Louise", "Carretera de los Glaciares – Lake Louise"], X_ICEF, "uw5"),
            r.day(16, ["Lake Louise – Banff – Calgary", "Lake Louise – Banff – Calgary", "Lake Louise – Banff – Calgary"], X_BANFF, "gc5"),
            r.day(17, ["Calgary – vol retour", "Calgary – flight home", "Calgary – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "rc1"),
            r.day(18, T_HOME, HOME, "gc5"),
          ]),
      ],
    }),

    // ───────────── 11. USA Canada West — 15J/13N ─────────────
    r.trip({
      slug: "canada-usa-canada-west-rocheuses-yellowstone-15j",
      name: ["USA Canada West : les Rocheuses canadiennes, Glacier, Yellowstone et Seattle", "USA Canada West: the Canadian Rockies, Glacier, Yellowstone and Seattle", "USA Canada West: las Rocosas canadienses, Glacier, Yellowstone y Seattle"],
      tagline: ["Les grands parcs des deux côtés de la frontière, en boucle depuis Vancouver", "The great parks on both sides of the border, on a loop from Vancouver", "Los grandes parques a ambos lados de la frontera, en circuito desde Vancouver"],
      description: [
        "Une boucle depuis Vancouver : Kamloops, Wells Gray, le mont Robson et Jasper, la promenade des Glaciers, Lake Louise et Banff, le parc de Waterton, puis aux États-Unis le parc de Glacier, Yellowstone, Grand Teton, Craters of the Moon, Boise, la vallée de Yakima et Seattle. Prolongé par une croisière de sept nuits en Alaska (Ketchikan, Icy Strait Point, le fjord de Tracy Arm, Juneau et Victoria), en 22 jours à partir de 4 935 € par personne.",
        "A loop from Vancouver: Kamloops, Wells Gray, Mount Robson and Jasper, the Icefields Parkway, Lake Louise and Banff, Waterton park, then in the United States Glacier park, Yellowstone, Grand Teton, Craters of the Moon, Boise, the Yakima valley and Seattle. Extended by a seven-night cruise in Alaska (Ketchikan, Icy Strait Point, Tracy Arm fjord, Juneau and Victoria), in 22 days from €4,935 per person.",
        "Un circuito desde Vancouver: Kamloops, Wells Gray, el monte Robson y Jasper, la carretera de los Glaciares, Lake Louise y Banff, el parque de Waterton, y en Estados Unidos el parque de Glacier, Yellowstone, Grand Teton, Craters of the Moon, Boise, el valle de Yakima y Seattle. Prolongado por un crucero de siete noches en Alaska (Ketchikan, Icy Strait Point, el fiordo de Tracy Arm, Juneau y Victoria), en 22 días desde 4.935 € por persona.",
      ],
      includes: INC(13),
      price: 3655, nights: 13, departureFrom: "Paris", image: "uw1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 49, order: -51990,
      chapters: [
        r.chapter(["Les Rocheuses canadiennes", "The Canadian Rockies", "Las Rocosas canadienses"], ["De Vancouver à Calgary.", "From Vancouver to Calgary.", "De Vancouver a Calgary."],
          ["uw3", "rc7", "uw5", "rc1"],
          [
            r.day(1, ...arr(VAN), "uw3"),
            r.day(2, VAN, X_VAN, "uw3"),
            r.day(3, ["Vancouver – Kamloops", "Vancouver – Kamloops", "Vancouver – Kamloops"], ["Les canyons du Fraser et l'intérieur de la Colombie-Britannique jusqu'à Kamloops.", "The Fraser canyons and inland British Columbia to Kamloops.", "Los cañones del Fraser y el interior de la Columbia Británica hasta Kamloops."], "rc6"),
            r.day(4, ["Wells Gray – Valemount", "Wells Gray – Valemount", "Wells Gray – Valemount"], ["Le parc de Wells Gray et ses chutes Helmcken.", "Wells Gray park and its Helmcken Falls.", "El parque de Wells Gray y sus cataratas Helmcken."], "rc7"),
            r.day(5, ["Mont Robson – Jasper – Hinton", "Mount Robson – Jasper – Hinton", "Monte Robson – Jasper – Hinton"], join(["Le mont Robson, plus haut sommet des Rocheuses canadiennes.", "Mount Robson, the highest peak in the Canadian Rockies.", "El monte Robson, la cumbre más alta de las Rocosas canadienses."], X_JASPER), "rc8"),
            r.day(6, ["Promenade des Glaciers – Banff – Calgary", "Icefields Parkway – Banff – Calgary", "Carretera de los Glaciares – Banff – Calgary"], X_ICEF, "uw5"),
          ]),
        r.chapter(["Glacier, Yellowstone et Grand Teton", "Glacier, Yellowstone and Grand Teton", "Glacier, Yellowstone y Grand Teton"], ["Les parcs du Montana et du Wyoming.", "The parks of Montana and Wyoming.", "Los parques de Montana y Wyoming."],
          ["uw1", "uw6", "uw7", "uw8"],
          [
            r.day(7, ["Waterton – Lethbridge", "Waterton – Lethbridge", "Waterton – Lethbridge"], ["Le parc de Waterton, où les Rocheuses plongent dans la prairie.", "Waterton park, where the Rockies plunge into the prairie.", "El parque de Waterton, donde las Rocosas se hunden en la pradera."], "uw1"),
            r.day(8, ["Glacier – Helena", "Glacier – Helena", "Glacier – Helena"], ["Passage de la frontière et le parc de Glacier, ses lacs et ses glaciers, puis Helena.", "Crossing the border and Glacier park, its lakes and glaciers, then Helena.", "Paso de la frontera y el parque de Glacier, sus lagos y glaciares, y Helena."], "uw1"),
            r.day(9, ["Yellowstone", "Yellowstone", "Yellowstone"], ["Yellowstone, premier parc national du monde : le geyser Old Faithful, la source Grand Prismatic et le Grand Canyon de Yellowstone.", "Yellowstone, the world's first national park: Old Faithful geyser, the Grand Prismatic spring and the Grand Canyon of the Yellowstone.", "Yellowstone, primer parque nacional del mundo: el géiser Old Faithful, la fuente Grand Prismatic y el Gran Cañón de Yellowstone."], "uw6"),
            r.day(10, ["Grand Teton – Idaho Falls", "Grand Teton – Idaho Falls", "Grand Teton – Idaho Falls"], ["Le parc de Grand Teton et ses sommets enneigés au-dessus des lacs.", "Grand Teton park and its snowy peaks above the lakes.", "El parque de Grand Teton y sus cumbres nevadas sobre los lagos."], "uw8"),
          ]),
        r.chapter(["Le Nord-Ouest américain", "The American Northwest", "El Noroeste americano"], ["De l'Idaho à Seattle.", "From Idaho to Seattle.", "De Idaho a Seattle."],
          ["uw4", "uw7"],
          [
            r.day(11, ["Craters of the Moon – Boise", "Craters of the Moon – Boise", "Craters of the Moon – Boise"], ["Les coulées de lave noire des Craters of the Moon, puis Boise, capitale de l'Idaho.", "The black lava flows of Craters of the Moon, then Boise, capital of Idaho.", "Las coladas de lava negra de Craters of the Moon, y Boise, capital de Idaho."], "uw7"),
            r.day(12, ["Boise – Yakima", "Boise – Yakima", "Boise – Yakima"], ["La gorge de la Columbia et les vignobles de la vallée de Yakima.", "The Columbia gorge and the vineyards of the Yakima valley.", "La garganta del Columbia y los viñedos del valle de Yakima."], "uw7"),
            r.day(13, ["Seattle – Vancouver", "Seattle – Vancouver", "Seattle – Vancouver"], ["Seattle, la Space Needle et le marché de Pike Place, puis retour à Vancouver.", "Seattle, the Space Needle and Pike Place Market, then back to Vancouver.", "Seattle, la Space Needle y el mercado de Pike Place, y regreso a Vancouver."], "uw4"),
            r.day(14, ...dep(VAN), "uw3"), r.day(15, T_HOME, HOME, "uw1"),
          ]),
      ],
    }),

    // ───────────── 12. I Love USA Canada / Incontournables USA Canada — 11J/9N ─────────────
    e.trip({
      slug: "canada-i-love-usa-canada-quebec-new-york-11j",
      name: ["I Love USA Canada : Québec, Niagara, Washington et New York", "I Love USA Canada: Quebec City, Niagara, Washington and New York", "I Love USA Canada: Quebec, Niágara, Washington y Nueva York"],
      tagline: ["Le Canada francophone puis la côte Est américaine en onze jours", "French-speaking Canada, then the American East Coast in eleven days", "El Canadá francófono y la costa Este americana en once días"],
      description: [
        "Deux pays en un voyage : Montréal et Québec (croisière aux baleines à Tadoussac en option), Ottawa, les Mille-Îles, Toronto et les chutes du Niagara, le pays amish, Washington, Philadelphie et New York. Avec deux nuits de plus à New York (13 jours) à partir de 2 368 €, ou dans la version Incontournables (13 jours, avec Boston et retour à Montréal) à partir de 2 064 € par personne.",
        "Two countries in one trip: Montreal and Quebec City (whale cruise at Tadoussac as an option), Ottawa, the Thousand Islands, Toronto and Niagara Falls, Amish country, Washington, Philadelphia and New York. With two more nights in New York (13 days) from €2,368, or in the Highlights version (13 days, with Boston and back to Montreal) from €2,064 per person.",
        "Dos países en un viaje: Montreal y Quebec (crucero de ballenas en Tadoussac opcional), Ottawa, las Mil Islas, Toronto y las cataratas del Niágara, el país amish, Washington, Filadelfia y Nueva York. Con dos noches más en Nueva York (13 días) desde 2.368 €, o en la versión Imprescindibles (13 días, con Boston y regreso a Montreal) desde 2.064 € por persona.",
      ],
      includes: INC(9),
      price: 1765, nights: 9, departureFrom: "Nice", image: "uc1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 49, order: -51989,
      chapters: [
        e.chapter(["Le Canada", "Canada", "Canadá"], ["Montréal, Québec, Ottawa et Niagara.", "Montreal, Quebec City, Ottawa and Niagara.", "Montreal, Quebec, Ottawa y Niágara."],
          ["uc2", "uc3", "uc4", "uc1"],
          [
            e.day(1, ...arr(MTL), "uc2"),
            e.day(2, ["Montréal – Québec", "Montreal – Quebec City", "Montreal – Quebec"], X_MTL_QC, "uc3"),
            e.day(3, QC, [`${X_QC[0]} En option, croisière aux baleines à Tadoussac.`, `${X_QC[1]} Optional whale cruise at Tadoussac.`, `${X_QC[2]} Opcional, crucero de ballenas en Tadoussac.`], "uc4"),
            e.day(4, ["Ottawa – Mille-Îles", "Ottawa – Thousand Islands", "Ottawa – Mil Islas"], X_1000, "ic4"),
            e.day(5, ["Toronto – Niagara", "Toronto – Niagara", "Toronto – Niágara"], join(X_TOR, X_NIAG), "uc1"),
          ]),
        e.chapter(["La côte Est américaine", "The American East Coast", "La costa Este americana"], ["Washington, Philadelphie et New York.", "Washington, Philadelphia and New York.", "Washington, Filadelfia y Nueva York."],
          ["uc5", "uc6", "uc7", "uc8"],
          [
            e.day(6, ["Niagara – Harrisburg", "Niagara – Harrisburg", "Niágara – Harrisburg"], ["Passage aux États-Unis et traversée de la Pennsylvanie jusqu'à Harrisburg.", "Crossing into the United States and through Pennsylvania to Harrisburg.", "Paso a Estados Unidos y travesía de Pensilvania hasta Harrisburg."], "uc5"),
            e.day(7, ["Pays amish – Washington", "Amish country – Washington", "País amish – Washington"], X_US_EAST, "uc6"),
            e.day(8, ["Philadelphie – New York", "Philadelphia – New York", "Filadelfia – Nueva York"], X_PHILLY_NY, "uc7"),
            e.day(9, NY, X_NY, "uc8"),
            e.day(10, ...dep(NY), "uc8"), e.day(11, T_HOME, HOME, "uc3"),
          ]),
      ],
    }),

    // ───────────── 13. Merveilles des USA Canada — 12J/10N ─────────────
    e.trip({
      slug: "canada-merveilles-usa-canada-boston-washington-12j",
      name: ["Merveilles des USA et du Canada : Québec, Boston, New York, Washington et Niagara", "Wonders of the USA and Canada: Quebec City, Boston, New York, Washington and Niagara", "Maravillas de EE. UU. y Canadá: Quebec, Boston, Nueva York, Washington y Niágara"],
      tagline: ["La grande boucle de l'Est, des Montagnes Blanches aux Mille-Îles", "The great Eastern loop, from the White Mountains to the Thousand Islands", "El gran circuito del Este, de las Montañas Blancas a las Mil Islas"],
      description: [
        "Une boucle au départ de Montréal : Québec, les White Mountains du New Hampshire, Boston, deux jours à New York, Philadelphie, Washington, le pays amish, les chutes du Niagara, Toronto, les Mille-Îles et Ottawa.",
        "A loop from Montreal: Quebec City, New Hampshire's White Mountains, Boston, two days in New York, Philadelphia, Washington, Amish country, Niagara Falls, Toronto, the Thousand Islands and Ottawa.",
        "Un circuito desde Montreal: Quebec, las White Mountains de New Hampshire, Boston, dos días en Nueva York, Filadelfia, Washington, el país amish, las cataratas del Niágara, Toronto, las Mil Islas y Ottawa.",
      ],
      includes: INC(10),
      price: 2099, nights: 10, departureFrom: "Paris", image: "mu1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 49, order: -51988,
      chapters: [
        e.chapter(["Québec et la Nouvelle-Angleterre", "Quebec and New England", "Quebec y Nueva Inglaterra"], ["De Montréal à New York.", "From Montreal to New York.", "De Montreal a Nueva York."],
          ["mu5", "mu3", "mu2"],
          [
            e.day(1, ...arr(MTL), "mu6"),
            e.day(2, ["Montréal – Québec", "Montreal – Quebec City", "Montreal – Quebec"], X_QC, "mu5"),
            e.day(3, ["White Mountains – Boston", "White Mountains – Boston", "White Mountains – Boston"], ["Les forêts et les cols des White Mountains, dans le New Hampshire, puis Boston.", "The forests and passes of the White Mountains, in New Hampshire, then Boston.", "Los bosques y puertos de las White Mountains, en New Hampshire, y Boston."], "mu3"),
            e.day(4, ["Boston – New York", "Boston – New York", "Boston – Nueva York"], ["Boston, Harvard et Beacon Hill, puis New York.", "Boston, Harvard and Beacon Hill, then New York.", "Boston, Harvard y Beacon Hill, y Nueva York."], "mu3"),
            e.day(5, NY, X_NY, "mu2"),
          ]),
        e.chapter(["Washington, Niagara et Ottawa", "Washington, Niagara and Ottawa", "Washington, Niágara y Ottawa"], ["Retour vers le Canada.", "Back to Canada.", "Regreso a Canadá."],
          ["mu4", "mu8", "mu1"],
          [
            e.day(6, ["Philadelphie – Washington", "Philadelphia – Washington", "Filadelfia – Washington"], ["Philadelphie et Independence Hall, puis Washington.", "Philadelphia and Independence Hall, then Washington.", "Filadelfia e Independence Hall, y Washington."], "mu4"),
            e.day(7, ["Washington – pays amish", "Washington – Amish country", "Washington – país amish"], X_US_EAST, "mu8"),
            e.day(8, ["Harrisburg – Niagara", "Harrisburg – Niagara", "Harrisburg – Niágara"], X_NIAG, "mu1"),
            e.day(9, ["Toronto – Mille-Îles", "Toronto – Thousand Islands", "Toronto – Mil Islas"], X_TOR, "lc1"),
            e.day(10, ["Ottawa – Montréal", "Ottawa – Montreal", "Ottawa – Montreal"], X_1000, "ic4"),
            e.day(11, ...dep(MTL), "mu6"), e.day(12, T_HOME, HOME, "mu5"),
          ]),
      ],
    }),

    // ───────────── 14. Au cœur de l'hiver canadien — 9J/7N ─────────────
    h.trip({
      slug: "canada-au-coeur-de-l-hiver-canadien-saguenay-9j",
      name: ["Au cœur de l'hiver canadien : motoneige, traîneau à chiens et fjord du Saguenay", "In the Heart of the Canadian Winter: snowmobile, dog sledding and the Saguenay fjord", "En el corazón del invierno canadiense: moto de nieve, trineo de perros y fiordo del Saguenay"],
      tagline: ["Cinq jours d'activités dans la neige, au bord du fjord gelé", "Five days of snow activities by the frozen fjord", "Cinco días de actividades en la nieve, junto al fiordo helado"],
      description: [
        "L'hiver québécois en grand : Montréal et Québec, puis cinq nuits au bord du fjord du Saguenay, avec une journée de motoneige, des raquettes, des glissades et du hockey, une balade en traîneau à chiens et une initiation à la survie en forêt.",
        "The Quebec winter in full: Montreal and Quebec City, then five nights by the Saguenay fjord, with a day of snowmobiling, snowshoeing, sledding and hockey, a dog-sled ride and an introduction to forest survival.",
        "El invierno quebequés a lo grande: Montreal y Quebec, y cinco noches junto al fiordo del Saguenay, con un día de moto de nieve, raquetas, toboganes y hockey, un paseo en trineo de perros y una iniciación a la supervivencia en el bosque.",
      ],
      includes: INC(7, ",Activités d'hiver du programme,Vêtements grand froid"),
      price: 2479, nights: 7, departureFrom: "Paris", image: "hv1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,family,groups", maxGuests: 30, order: -51987,
      chapters: [
        h.chapter(["Montréal, Québec et le fjord", "Montreal, Quebec City and the fjord", "Montreal, Quebec y el fiordo"], ["Les villes sous la neige.", "The cities under snow.", "Las ciudades bajo la nieve."],
          ["hv6", "hv5", "hv2"],
          [
            h.day(1, ...arr(MTL), "hv6"),
            h.day(2, ["Montréal – Québec – Saguenay", "Montreal – Quebec City – Saguenay", "Montreal – Quebec – Saguenay"], ["Montréal sous la neige, Québec, puis la route du fjord du Saguenay.", "Montreal under snow, Quebec City, then the road to the Saguenay fjord.", "Montreal bajo la nieve, Quebec, y la carretera del fiordo del Saguenay."], "hv5"),
          ]),
        h.chapter(["Les activités d'hiver", "Winter activities", "Las actividades de invierno"], ["Motoneige, chiens et raquettes.", "Snowmobiles, dogs and snowshoes.", "Motos de nieve, perros y raquetas."],
          ["hv1", "hv4", "hv3", "hv7"],
          [
            h.day(3, ["Motoneige", "Snowmobiling", "Moto de nieve"], ["Une journée en motoneige sur les sentiers enneigés autour du fjord.", "A day of snowmobiling on the snowy trails around the fjord.", "Un día en moto de nieve por los senderos nevados alrededor del fiordo."], "hv2"),
            h.day(4, ["Raquettes, glissades et hockey", "Snowshoes, sledding and hockey", "Raquetas, toboganes y hockey"], ["Randonnée en raquettes, glissades sur chambre à air et partie de hockey sur un lac gelé.", "Snowshoeing, tube sledding and a game of hockey on a frozen lake.", "Caminata con raquetas, toboganes en neumático y partido de hockey sobre un lago helado."], "hv4"),
            h.day(5, ["Traîneau à chiens", "Dog sledding", "Trineo de perros"], ["Une balade en traîneau tiré par des huskies à travers la forêt boréale.", "A ride on a sled pulled by huskies through the boreal forest.", "Un paseo en trineo tirado por huskies a través del bosque boreal."], "hv1"),
            h.day(6, ["Survie en forêt", "Forest survival", "Supervivencia en el bosque"], ["Initiation à la survie en forêt : construire un abri, faire du feu, et le mode de vie des trappeurs.", "An introduction to forest survival: building a shelter, making fire, and the trappers' way of life.", "Iniciación a la supervivencia en el bosque: construir un refugio, hacer fuego y la vida de los tramperos."], "hv7"),
            h.day(7, ["Saguenay – Québec", "Saguenay – Quebec City", "Saguenay – Quebec"], ["Retour à Québec et soirée dans le Vieux-Québec enneigé.", "Back to Quebec City and an evening in snowy Old Quebec.", "Regreso a Quebec y velada en el Viejo Quebec nevado."], "hv3"),
            h.day(8, ["Québec – Montréal – vol retour", "Quebec City – Montreal – flight home", "Quebec – Montreal – vuelo de regreso"], ["Retour à Montréal et envol pour la France.", "Back to Montreal and fly to France.", "Regreso a Montreal y vuelo a Francia."], "hv6"),
            h.day(9, T_HOME, HOME, "hv1"),
          ]),
      ],
    }),

    // ───────────── 15. Naya Découverte au Lac Morency — 8J/6N ─────────────
    h.trip({
      slug: "canada-naya-hiver-au-lac-morency-8j",
      name: ["Hiver au lac Morency : Montréal, Québec et une auberge dans les Laurentides", "Winter at Lac Morency: Montreal, Quebec City and an inn in the Laurentians", "Invierno en el lago Morency: Montreal, Quebec y una posada en los Laurentides"],
      tagline: ["Quatre nuits dans une auberge au bord d'un lac gelé, avec motoneige et traîneau", "Four nights at an inn by a frozen lake, with snowmobiling and dog sledding", "Cuatro noches en una posada junto a un lago helado, con moto de nieve y trineo"],
      description: [
        "Un séjour d'hiver tout en douceur : Montréal, Québec, puis quatre nuits à l'auberge du lac Morency à Saint-Hippolyte, dans les Laurentides, avec motoneige, glissades, raquettes, traîneau à chiens, patin, jeux de bûcheron et une initiation au parler québécois. Piscine intérieure et activités en option sur place.",
        "A gentle winter stay: Montreal, Quebec City, then four nights at the Lac Morency inn in Saint-Hippolyte, in the Laurentians, with snowmobiling, sledding, snowshoeing, dog sledding, skating, lumberjack games and an introduction to Quebec French. Indoor pool and optional activities on site.",
        "Una estancia de invierno tranquila: Montreal, Quebec, y cuatro noches en la posada del lago Morency en Saint-Hippolyte, en los Laurentides, con moto de nieve, toboganes, raquetas, trineo de perros, patinaje, juegos de leñador y una iniciación al habla quebequesa. Piscina cubierta y actividades opcionales en el lugar.",
      ],
      includes: INC(6, ",Activités d'hiver du programme,Demi-pension à l'auberge"),
      price: 1572, nights: 6, departureFrom: "Paris", image: "ny2",
      theme: "family", feeling: "distraction", travelerTypes: "family,couples,groups", maxGuests: 30, order: -51986,
      chapters: [
        h.chapter(["Montréal et Québec", "Montreal and Quebec City", "Montreal y Quebec"], ["Les villes sous la neige.", "The cities under snow.", "Las ciudades bajo la nieve."],
          ["ny8", "hv6"],
          [
            h.day(1, ...arr(MTL), "hv6"),
            h.day(2, ["Montréal – Québec", "Montreal – Quebec City", "Montreal – Quebec"], X_MTL_QC, "ny8"),
            h.day(3, ["Québec – lac Morency", "Quebec City – Lac Morency", "Quebec – lago Morency"], ["Route vers les Laurentides et l'auberge du lac Morency.", "Drive to the Laurentians and the Lac Morency inn.", "Carretera hacia los Laurentides y la posada del lago Morency."], "ny3"),
          ]),
        h.chapter(["Le lac Morency", "Lac Morency", "El lago Morency"], ["Neige, chiens et feu de camp.", "Snow, dogs and campfires.", "Nieve, perros y fogatas."],
          ["ny2", "ny1", "ny7", "ny6"],
          [
            h.day(4, ["Motoneige, glissades et raquettes", "Snowmobiles, sledding and snowshoes", "Moto de nieve, toboganes y raquetas"], ["Une balade en motoneige, les glissades sur chambre à air et une randonnée en raquettes.", "A snowmobile ride, tube sledding and a snowshoe walk.", "Un paseo en moto de nieve, toboganes en neumático y una caminata con raquetas."], "ny2"),
            h.day(5, ["Traîneau, patin et bûcherons", "Sledding, skating and lumberjacks", "Trineo, patinaje y leñadores"], ["Le traîneau à chiens, le patin sur le lac et les jeux de bûcheron.", "Dog sledding, skating on the lake and lumberjack games.", "El trineo de perros, el patinaje sobre el lago y los juegos de leñador."], "ny1"),
            h.day(6, ["Journée libre au lac", "A free day at the lake", "Día libre en el lago"], ["Activités en option, et le soir une initiation au parler québécois autour du feu.", "Optional activities, and in the evening an introduction to Quebec French around the fire.", "Actividades opcionales, y por la noche una iniciación al habla quebequesa junto al fuego."], "ny6"),
            h.day(7, ["Lac Morency – vol retour", "Lac Morency – flight home", "Lago Morency – vuelo de regreso"], ["Transfert à l'aéroport de Montréal et envol pour la France.", "Transfer to Montreal airport and fly to France.", "Traslado al aeropuerto de Montreal y vuelo a Francia."], "ny7"),
            h.day(8, T_HOME, HOME, "ny2"),
          ]),
      ],
    }),

    // ───────────── 16. Autotour Entre Glace et Érables — 9J/7N ─────────────
    h.trip({
      slug: "canada-autotour-entre-glace-et-erables-9j",
      name: ["Autotour d'hiver « Entre glace et érables » : Montréal, Québec et une étape nature", "Winter self-drive 'Between Ice and Maples': Montreal, Quebec City and a nature stop", "Autotour de invierno «Entre hielo y arces»: Montreal, Quebec y una etapa de naturaleza"],
      tagline: ["Le Québec en hiver à votre rythme, au volant de votre voiture", "Quebec in winter at your own pace, at the wheel of your car", "Quebec en invierno a su ritmo, al volante de su coche"],
      description: [
        "Un autotour d'hiver : deux jours à Montréal, deux jours à Québec et son carnaval, puis trois nuits dans une auberge en pleine nature pour profiter de la neige, raquettes, motoneige ou traîneau à chiens en option, et goûter à la tire d'érable sur la neige.",
        "A winter self-drive: two days in Montreal, two days in Quebec City and its carnival, then three nights at a country inn to enjoy the snow, with snowshoeing, snowmobiling or dog sledding as options, and a taste of maple taffy on snow.",
        "Un autotour de invierno: dos días en Montreal, dos días en Quebec y su carnaval, y tres noches en una posada en plena naturaleza para disfrutar de la nieve, con raquetas, moto de nieve o trineo de perros opcionales, y probar el caramelo de arce sobre la nieve.",
      ],
      includes: AUTO(7),
      price: 1738, nights: 7, departureFrom: "Paris", image: "ge1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family", maxGuests: 8, order: -51985,
      chapters: [
        h.chapter(["Montréal et Québec", "Montreal and Quebec City", "Montreal y Quebec"], ["Les villes d'hiver.", "The winter cities.", "Las ciudades de invierno."],
          ["ge2", "ge4"],
          [
            h.day(1, ...arr(MTL), "ge2"),
            h.day(2, MTL, X_MTL, "ge2"),
            h.day(3, ["Montréal – Québec", "Montreal – Quebec City", "Montreal – Quebec"], ["Route vers Québec par la rive du Saint-Laurent gelé.", "Drive to Quebec City along the frozen St Lawrence.", "Carretera hacia Quebec por la orilla del San Lorenzo helado."], "ge4"),
            h.day(4, QC, X_QC, "ge4"),
          ]),
        h.chapter(["L'étape nature", "The nature stop", "La etapa de naturaleza"], ["Neige, forêt et érables.", "Snow, forest and maples.", "Nieve, bosque y arces."],
          ["ge1", "ge3", "ge5", "ge6"],
          [
            h.day(5, ["Québec – étape nature", "Quebec City – nature stop", "Quebec – etapa de naturaleza"], ["Route vers une auberge au cœur de la forêt enneigée.", "Drive to an inn in the heart of the snowy forest.", "Carretera hacia una posada en el corazón del bosque nevado."], "ge5"),
            h.day(6, ["Étape nature", "Nature stop", "Etapa de naturaleza"], ["Deux journées libres : raquettes, motoneige ou traîneau à chiens en option, et la tire d'érable sur la neige.", "Two free days: snowshoeing, snowmobiling or dog sledding as options, and maple taffy on snow.", "Dos días libres: raquetas, moto de nieve o trineo de perros opcionales, y el caramelo de arce sobre la nieve."], "ge1"),
            h.day(8, ["Étape nature – Montréal – vol retour", "Nature stop – Montreal – flight home", "Etapa de naturaleza – Montreal – vuelo de regreso"], ["Retour à l'aéroport de Montréal et envol pour la France.", "Back to Montreal airport and fly to France.", "Regreso al aeropuerto de Montreal y vuelo a Francia."], "ge3"),
            h.day(9, T_HOME, HOME, "ge6"),
          ]),
      ],
    }),

    // ───────────── 17. Autotour Toi, moi et le froid — 10J/8N ─────────────
    h.trip({
      slug: "canada-autotour-toi-moi-et-le-froid-10j",
      name: ["Autotour d'hiver « Toi, moi et le froid » : Montebello, Mont-Tremblant et la Mauricie", "Winter self-drive 'You, Me and the Cold': Montebello, Mont-Tremblant and Mauricie", "Autotour de invierno «Tú, yo y el frío»: Montebello, Mont-Tremblant y la Mauricie"],
      tagline: ["Un autotour en amoureux, de château de bois en station de montagne", "A romantic self-drive, from a log château to a mountain resort", "Un autotour en pareja, de un castillo de madera a una estación de montaña"],
      description: [
        "Un hiver québécois à deux : Montréal, une cabane à Rigaud, le Château Montebello, plus grand bâtiment en rondins du monde, deux nuits à Mont-Tremblant et son village piéton, deux nuits en Mauricie au bord d'un lac, puis Québec, avec raquettes, patin et motoneige en option.",
        "A Quebec winter for two: Montreal, a cabin at Rigaud, the Château Montebello, the largest log building in the world, two nights in Mont-Tremblant and its pedestrian village, two nights in Mauricie by a lake, then Quebec City, with snowshoeing, skating and snowmobiling as options.",
        "Un invierno quebequés en pareja: Montreal, una cabaña en Rigaud, el Château Montebello, el mayor edificio de troncos del mundo, dos noches en Mont-Tremblant y su pueblo peatonal, dos noches en la Mauricie junto a un lago, y Quebec, con raquetas, patinaje y moto de nieve opcionales.",
      ],
      includes: AUTO(8),
      price: 2022, nights: 8, departureFrom: "Paris", image: "tm2",
      theme: "relax", feeling: "contentment", travelerTypes: "couples", maxGuests: 2, order: -51984,
      chapters: [
        h.chapter(["Montréal, Rigaud et Montebello", "Montreal, Rigaud and Montebello", "Montreal, Rigaud y Montebello"], ["Cabane et château de bois.", "A cabin and a log château.", "Cabaña y castillo de madera."],
          ["tm5", "tm7", "tm1"],
          [
            h.day(1, ...arr(MTL), "tm5"),
            h.day(2, ["Montréal – Rigaud", "Montreal – Rigaud", "Montreal – Rigaud"], ["Matinée à Montréal, puis une cabane au bord de l'eau à Rigaud.", "A morning in Montreal, then a waterside cabin at Rigaud.", "Mañana en Montreal y una cabaña junto al agua en Rigaud."], "tm7"),
            h.day(3, ["Rigaud – Montebello", "Rigaud – Montebello", "Rigaud – Montebello"], ["Le Château Montebello, au bord de la rivière des Outaouais, et le parc Oméga tout proche.", "The Château Montebello, on the Ottawa River, and nearby Omega Park.", "El Château Montebello, a orillas del río Ottawa, y el cercano parque Omega."], "tm1"),
          ]),
        h.chapter(["Mont-Tremblant et la Mauricie", "Mont-Tremblant and Mauricie", "Mont-Tremblant y la Mauricie"], ["Montagne, lac et forêt.", "Mountain, lake and forest.", "Montaña, lago y bosque."],
          ["tm2", "tm4", "tm6"],
          [
            h.day(4, ["Montebello – Mont-Tremblant", "Montebello – Mont-Tremblant", "Montebello – Mont-Tremblant"], ["Les Laurentides et la station de Mont-Tremblant, son village piéton aux maisons colorées.", "The Laurentians and the Mont-Tremblant resort, its pedestrian village of colourful houses.", "Los Laurentides y la estación de Mont-Tremblant, su pueblo peatonal de casas de colores."], "tm4"),
            h.day(5, ["Mont-Tremblant", "Mont-Tremblant", "Mont-Tremblant"], ["Journée libre : ski, raquettes, patin ou spa nordique.", "A free day: skiing, snowshoeing, skating or a Nordic spa.", "Día libre: esquí, raquetas, patinaje o spa nórdico."], "tm4"),
            h.day(6, ["Mont-Tremblant – Mauricie", "Mont-Tremblant – Mauricie", "Mont-Tremblant – Mauricie"], ["Route vers la Mauricie et une auberge au bord d'un lac gelé.", "Drive to Mauricie and an inn by a frozen lake.", "Carretera hacia la Mauricie y una posada junto a un lago helado."], "tm6"),
            h.day(7, ["Mauricie", "Mauricie", "Mauricie"], ["Journée libre : motoneige ou traîneau à chiens en option, et soirée au coin du feu.", "A free day: snowmobiling or dog sledding as options, and an evening by the fire.", "Día libre: moto de nieve o trineo de perros opcionales, y velada junto al fuego."], "tm2"),
          ]),
        h.chapter(["Québec", "Quebec City", "Quebec"], ["La vieille ville sous la neige.", "The old town under snow.", "La ciudad vieja bajo la nieve."],
          ["tm3"],
          [
            h.day(8, ["Mauricie – Québec", "Mauricie – Quebec City", "Mauricie – Quebec"], X_QC, "tm3"),
            h.day(9, ["Québec – Montréal – vol retour", "Quebec City – Montreal – flight home", "Quebec – Montreal – vuelo de regreso"], ["Retour à Montréal et envol pour la France.", "Back to Montreal and fly to France.", "Regreso a Montreal y vuelo a Francia."], "tm5"),
            h.day(10, T_HOME, HOME, "tm2"),
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
