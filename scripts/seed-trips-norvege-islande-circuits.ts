// Norway and Iceland — 17 journey-format trips: Norway (11, including the Scandinavian capitals and
// the Scandinavia grand tour) and Iceland (6). Near-identical supplier programmes are grouped on one
// page and described inside each trip. Prices are per-person "from" prices. Supplier product ids are
// kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-norvege-islande-circuits.ts
// Requires scripts/upload-images-nor-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "norvege-escapade-dans-les-fjords-enneiges-5j": ["381019"],
  "norvege-decouverte-des-fjords-geiranger-bergen-8j": ["43138", "359505", "339782"],
  "norvege-cap-sur-les-capitales-scandinaves-oslo-copenhague-stockholm-8j": ["402238"],
  "norvege-cap-sur-la-norvege-en-hiver-tromso-lofoten-7j": ["381779"],
  "norvege-norvege-du-nord-tromso-lofoten-cap-nord-8j": ["359623"],
  "norvege-tresors-de-l-arctique-cap-nord-laponie-8j": ["381660"],
  "norvege-norvege-du-sud-en-train-et-en-bateau-8j": ["407598"],
  "norvege-le-meilleur-des-fjords-route-atlantique-lysefjord-10j": ["339763"],
  "norvege-cap-sur-la-norvege-cap-nord-lofoten-bergen-11j": ["339741"],
  "norvege-cap-sur-la-norvege-et-les-iles-lofoten-11j": ["407902"],
  "norvege-cap-sur-la-scandinavie-norvege-finlande-suede-14j": ["345852"],
  "islande-islande-du-sud-autotour-5j": ["386923"],
  "islande-cap-sur-l-islande-en-hiver-6j": ["382679", "382678"],
  "islande-splendeurs-boreales-8j": ["37998"],
  "islande-aventure-islandaise-tour-de-l-ile-8j": ["147658"],
  "islande-charme-de-l-islande-myvatn-snaefellsnes-8j": ["334279"],
  "islande-merveilles-de-l-islande-fjords-de-l-ouest-12j": ["334278"],
};

const T_HOME: L3 = ["Retour en France", "Back to France", "Regreso a Francia"];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const home = (city: L3): L3 => [`Transfert à l'aéroport de ${city[0]} et envol pour la France.`, `Transfer to ${city[1]} airport and fly to France.`, `Traslado al aeropuerto de ${city[2]} y vuelo a Francia.`];
const join = (a: L3, b: L3): L3 => [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`, `${a[2]} ${b[2]}`];
const OSL: L3 = ["Oslo", "Oslo", "Oslo"];
const BGO: L3 = ["Bergen", "Bergen", "Bergen"];
const TOS: L3 = ["Tromsø", "Tromsø", "Tromsø"];
const REK: L3 = ["Reykjavik", "Reykjavik", "Reikiavik"];

// Norway shared texts
const X_OSLO: L3 = ["Oslo : le parc Vigeland et ses sculptures, l'opéra au bord du fjord, la forteresse d'Akershus et le musée des navires vikings.", "Oslo: Vigeland Park and its sculptures, the opera house on the fjord, Akershus Fortress and the Viking ship museum.", "Oslo: el parque Vigeland y sus esculturas, la ópera junto al fiordo, la fortaleza de Akershus y el museo de los barcos vikingos."];
const X_BERGEN: L3 = ["Bergen, ses maisons hanséatiques en bois de Bryggen classées par l'Unesco, le marché aux poissons et le funiculaire du mont Fløyen.", "Bergen, its UNESCO-listed wooden Hanseatic houses of Bryggen, the fish market and the Fløyen funicular.", "Bergen, sus casas hanseáticas de madera de Bryggen declaradas por la Unesco, el mercado de pescado y el funicular del monte Fløyen."];
const X_GEIRANGER: L3 = ["La route des Trolls et ses onze lacets, puis la croisière sur le Geirangerfjord classé par l'Unesco, entre cascades des Sept Sœurs et fermes accrochées aux falaises.", "The Trollstigen road and its eleven hairpin bends, then a cruise on the UNESCO-listed Geirangerfjord, between the Seven Sisters waterfalls and farms clinging to the cliffs.", "La carretera de los Trolls y sus once curvas, y el crucero por el Geirangerfjord declarado por la Unesco, entre las cascadas de las Siete Hermanas y granjas colgadas de los acantilados."];
const X_SOGNE: L3 = ["Le Sognefjord, le plus long et le plus profond fjord de Norvège, et le glacier de Briksdal.", "The Sognefjord, Norway's longest and deepest fjord, and the Briksdal glacier.", "El Sognefjord, el fiordo más largo y profundo de Noruega, y el glaciar de Briksdal."];
const X_HARDANGER: L3 = ["Le Hardangerfjord, ses vergers et ses cascades, puis le plateau du Hardangervidda.", "The Hardangerfjord, its orchards and waterfalls, then the Hardangervidda plateau.", "El Hardangerfjord, sus huertos y sus cascadas, y la meseta del Hardangervidda."];
const X_LOFOTEN: L3 = ["Les îles Lofoten, leurs montagnes plongeant dans la mer, leurs villages de pêcheurs aux rorbuer rouges, Reine et Henningsvær.", "The Lofoten Islands, their mountains plunging into the sea, their fishing villages of red rorbuer, Reine and Henningsvær.", "Las islas Lofoten, sus montañas que se hunden en el mar, sus pueblos de pescadores de rorbuer rojos, Reine y Henningsvær."];
const X_CAPNORD: L3 = ["Le cap Nord, falaise de 300 mètres au bout de l'Europe, face à l'océan Arctique, et le soleil de minuit en été.", "North Cape, a 300-metre cliff at the end of Europe, facing the Arctic Ocean, and the midnight sun in summer.", "El cabo Norte, acantilado de 300 metros al final de Europa, frente al océano Ártico, y el sol de medianoche en verano."];
const X_TROMSO: L3 = ["Tromsø, la capitale de l'Arctique, sa cathédrale arctique et le téléphérique du mont Storsteinen.", "Tromsø, the capital of the Arctic, its Arctic Cathedral and the Storsteinen cable car.", "Tromsø, la capital del Ártico, su catedral ártica y el teleférico del monte Storsteinen."];
const X_SAMI: L3 = ["Rencontre avec les Samis, peuple éleveur de rennes de Laponie, et leur culture.", "A meeting with the Sami, the reindeer-herding people of Lapland, and their culture.", "Encuentro con los samis, pueblo pastor de renos de Laponia, y su cultura."];
// Iceland shared texts
const X_GOLDEN: L3 = ["Le Cercle d'or : le parc de Þingvellir, où s'écartent les plaques américaine et eurasienne, le geyser Strokkur et la cascade de Gullfoss.", "The Golden Circle: Þingvellir park, where the American and Eurasian plates drift apart, the Strokkur geyser and the Gullfoss waterfall.", "El Círculo Dorado: el parque de Þingvellir, donde se separan las placas americana y euroasiática, el géiser Strokkur y la cascada de Gullfoss."];
const X_SOUTH: L3 = ["La côte sud : les cascades de Seljalandsfoss et Skógafoss, la plage de sable noir de Reynisfjara et ses orgues basaltiques, et le village de Vík.", "The south coast: the Seljalandsfoss and Skógafoss waterfalls, the black sand beach of Reynisfjara and its basalt columns, and the village of Vík.", "La costa sur: las cascadas de Seljalandsfoss y Skógafoss, la playa de arena negra de Reynisfjara y sus columnas de basalto, y el pueblo de Vík."];
const X_JOKUL: L3 = ["Le parc de Skaftafell au pied du Vatnajökull, plus grand glacier d'Europe, et la lagune glaciaire de Jökulsárlón et ses icebergs.", "Skaftafell park at the foot of Vatnajökull, Europe's largest glacier, and the Jökulsárlón glacier lagoon and its icebergs.", "El parque de Skaftafell al pie del Vatnajökull, el mayor glaciar de Europa, y la laguna glaciar de Jökulsárlón y sus icebergs."];
const X_MYVATN: L3 = ["Le lac Mývatn, ses pseudo-cratères, les champs de lave de Dimmuborgir et les solfatares de Námafjall, et la cascade de Dettifoss.", "Lake Mývatn, its pseudo-craters, the Dimmuborgir lava fields and the Námafjall solfataras, and the Dettifoss waterfall.", "El lago Mývatn, sus pseudocráteres, los campos de lava de Dimmuborgir y las solfataras de Námafjall, y la cascada de Dettifoss."];
const X_SNAEF: L3 = ["La péninsule de Snæfellsnes, l'Islande en miniature : le mont Kirkjufell, le volcan Snæfellsjökull, ses falaises et ses villages de pêcheurs.", "The Snæfellsnes peninsula, Iceland in miniature: Mount Kirkjufell, the Snæfellsjökull volcano, its cliffs and fishing villages.", "La península de Snæfellsnes, Islandia en miniatura: el monte Kirkjufell, el volcán Snæfellsjökull, sus acantilados y sus pueblos de pescadores."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const SUMMER = { label: ["Juin à août", "June to August", "Junio a agosto"] as L3, months: "june,july,august" };
  const WINTER = { label: ["Décembre à mars", "December to March", "Diciembre a marzo"] as L3, months: "december,january,february,march" };
  const no = circuitBuilders({ destinationSlug: "norvege", imagePrefix: "nor", season: SUMMER });
  const now = circuitBuilders({ destinationSlug: "norvege", imagePrefix: "nor", season: WINTER });
  const is = circuitBuilders({ destinationSlug: "islande", imagePrefix: "nor", season: SUMMER });
  const isw = circuitBuilders({ destinationSlug: "islande", imagePrefix: "nor", season: WINTER });
  const INC = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtels 3* et 4*,Transport en autocar,Visites et croisières du programme,Guide-accompagnateur francophone${extra}`,
    `Flights from France,Transfers,${n} nights in 3* and 4* hotels,Transport by coach,Visits and cruises in the programme,French-speaking tour leader${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hoteles de 3* y 4*,Transporte en autocar,Visitas y cruceros del programa,Guía acompañante francófono${extra}`,
  ];

  const journeyTrips = [
    // ═════════════ NORVÈGE ═════════════
    now.trip({
      slug: "norvege-escapade-dans-les-fjords-enneiges-5j",
      name: ["Escapade dans les fjords enneigés : Oslo, le train de Flåm et Bergen", "Getaway to the snowy fjords: Oslo, the Flåm railway and Bergen", "Escapada a los fiordos nevados: Oslo, el tren de Flåm y Bergen"],
      tagline: ["Les fjords sous la neige, en train et en bateau", "The fjords under snow, by train and boat", "Los fiordos bajo la nieve, en tren y en barco"],
      description: [
        "Un court séjour d'hiver : Oslo, la ligne de Bergen à travers les montagnes enneigées, le train de Flåm, le Nærøyfjord en bateau, puis Bergen.",
        "A short winter break: Oslo, the Bergen line through the snowy mountains, the Flåm railway, the Nærøyfjord by boat, then Bergen.",
        "Una escapada de invierno: Oslo, la línea de Bergen a través de las montañas nevadas, el tren de Flåm, el Nærøyfjord en barco, y Bergen.",
      ],
      includes: ["Vols depuis la France,Transferts,4 nuits en hôtels,Trains Oslo – Flåm – Bergen,Croisière sur le fjord", "Flights from France,Transfers,4 nights in hotels,Oslo – Flåm – Bergen trains,Fjord cruise", "Vuelos desde Francia,Traslados,4 noches en hoteles,Trenes Oslo – Flåm – Bergen,Crucero por el fiordo"],
      price: 1589, nights: 4, departureFrom: "Nice", image: "fe4",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,solo,family", maxGuests: 30, order: -45000,
      chapters: [
        now.chapter(["Oslo et les fjords d'hiver", "Oslo and the winter fjords", "Oslo y los fiordos de invierno"], ["Train, fjord et Bergen.", "Train, fjord and Bergen.", "Tren, fiordo y Bergen."],
          ["fe1", "fe2", "fe3", "fe4", "fe5", "fe6"],
          [
            now.day(1, ...arr(OSL), "fe2"),
            now.day(2, OSL, X_OSLO, "fe2"),
            now.day(3, ["Oslo – Flåm en train", "Oslo – Flåm by train", "Oslo – Flåm en tren"], ["La ligne de Bergen à travers le haut plateau enneigé de Finse, puis le train de Flåm qui descend vers le fjord.", "The Bergen line across the snowy Finse plateau, then the Flåm railway down to the fjord.", "La línea de Bergen a través de la meseta nevada de Finse, y el tren de Flåm que baja hacia el fiordo."], "fe4"),
            now.day(4, ["Les fjords – Bergen", "The fjords – Bergen", "Los fiordos – Bergen"], ["Croisière sur le Nærøyfjord entre des parois enneigées, puis Bergen.", "A cruise on the Nærøyfjord between snowy walls, then Bergen.", "Crucero por el Nærøyfjord entre paredes nevadas, y Bergen."], "fe5"),
            now.day(5, T_HOME, home(BGO), "fe3"),
          ]),
      ],
    }),

    no.trip({
      slug: "norvege-decouverte-des-fjords-geiranger-bergen-8j",
      name: ["Découverte des fjords : la route des Trolls, le Geirangerfjord et Bergen", "Discovering the fjords: Trollstigen, the Geirangerfjord and Bergen", "Descubrimiento de los fiordos: la carretera de los Trolls, el Geirangerfjord y Bergen"],
      tagline: ["La boucle des grands fjords depuis Oslo, en une semaine", "The great fjords loop from Oslo, in a week", "El circuito de los grandes fiordos desde Oslo, en una semana"],
      description: [
        "La Norvège des fjords : Oslo, la vallée de Gudbrandsdal, la route des Trolls, Ålesund et la croisière sur le Geirangerfjord, Bergen, le Hardangerfjord, puis retour à Oslo. Variantes Au rythme des fjords, avec le Sognefjord et la région des glaciers, à partir de 1 861 €, ou Cap sur les fjords, avec le glacier de Briksdal, à partir de 2 004 € par personne.",
        "Fjord Norway: Oslo, the Gudbrandsdal valley, Trollstigen, Ålesund and the Geirangerfjord cruise, Bergen, the Hardangerfjord, then back to Oslo. Variants At the pace of the fjords, with the Sognefjord and the glacier region, from €1,861, or Heading for the fjords, with the Briksdal glacier, from €2,004 per person.",
        "La Noruega de los fiordos: Oslo, el valle de Gudbrandsdal, la carretera de los Trolls, Ålesund y el crucero por el Geirangerfjord, Bergen, el Hardangerfjord, y regreso a Oslo. Variantes Al ritmo de los fiordos, con el Sognefjord y la región de los glaciares, desde 1.861 €, o Rumbo a los fiordos, con el glaciar de Briksdal, desde 2.004 € por persona.",
      ],
      includes: INC(7),
      price: 1641, nights: 7, departureFrom: "Bruxelles", image: "df1",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 40, order: -44999,
      chapters: [
        no.chapter(["Oslo et les grands fjords", "Oslo and the great fjords", "Oslo y los grandes fiordos"], ["Trolls, Geiranger et Ålesund.", "Trolls, Geiranger and Ålesund.", "Trolls, Geiranger y Ålesund."],
          ["df1", "df2", "df3", "df7"],
          [
            no.day(1, ...arr(OSL), "df6"),
            no.day(2, ["Oslo – Kvitfjell", "Oslo – Kvitfjell", "Oslo – Kvitfjell"], join(X_OSLO, ["Puis Lillehammer et la vallée de Gudbrandsdal.", "Then Lillehammer and the Gudbrandsdal valley.", "Y Lillehammer y el valle de Gudbrandsdal."]), "df6"),
            no.day(3, ["Route des Trolls – Ålesund", "Trollstigen – Ålesund", "Carretera de los Trolls – Ålesund"], ["La route des Trolls et ses lacets vertigineux, puis Ålesund et ses façades Art nouveau.", "Trollstigen and its dizzying bends, then Ålesund and its Art Nouveau façades.", "La carretera de los Trolls y sus vertiginosas curvas, y Ålesund y sus fachadas modernistas."], "df2"),
            no.day(4, ["Geirangerfjord – Førde", "Geirangerfjord – Førde", "Geirangerfjord – Førde"], X_GEIRANGER, "df1"),
          ]),
        no.chapter(["Bergen et le Hardanger", "Bergen and Hardanger", "Bergen y el Hardanger"], ["La ville hanséatique et le fjord des vergers.", "The Hanseatic city and the fjord of orchards.", "La ciudad hanseática y el fiordo de los huertos."],
          ["df4", "df5", "mf3"],
          [
            no.day(5, ["Førde – Lavik – Bergen", "Førde – Lavik – Bergen", "Førde – Lavik – Bergen"], join(["Traversée du Sognefjord en ferry, puis", "A ferry across the Sognefjord, then", "Travesía del Sognefjord en ferri, y"], [X_BERGEN[0].charAt(0).toLowerCase() + X_BERGEN[0].slice(1), X_BERGEN[1], X_BERGEN[2].charAt(0).toLowerCase() + X_BERGEN[2].slice(1)]), "mf3"),
            no.day(6, ["Hardangerfjord – Gol", "Hardangerfjord – Gol", "Hardangerfjord – Gol"], X_HARDANGER, "df4"),
            no.day(7, ["Gol – Oslo", "Gol – Oslo", "Gol – Oslo"], ["La vallée de Hallingdal et ses églises en bois debout, puis retour à Oslo.", "The Hallingdal valley and its stave churches, then back to Oslo.", "El valle de Hallingdal y sus iglesias de madera, y regreso a Oslo."], "df7"),
            no.day(8, T_HOME, home(OSL), "df1"),
          ]),
      ],
    }),

    no.trip({
      slug: "norvege-cap-sur-les-capitales-scandinaves-oslo-copenhague-stockholm-8j",
      name: ["Cap sur les capitales scandinaves : Oslo, Copenhague et Stockholm", "Heading for the Scandinavian capitals: Oslo, Copenhagen and Stockholm", "Rumbo a las capitales escandinavas: Oslo, Copenhague y Estocolmo"],
      tagline: ["Trois capitales et une nuit en ferry sur la mer du Nord", "Three capitals and a night ferry on the North Sea", "Tres capitales y una noche en ferri por el mar del Norte"],
      description: [
        "Les trois capitales scandinaves : deux jours à Oslo, le ferry de nuit vers Copenhague, deux jours dans la capitale danoise, Nyhavn et la Petite Sirène, puis Stockholm et sa vieille ville de Gamla Stan.",
        "The three Scandinavian capitals: two days in Oslo, the night ferry to Copenhagen, two days in the Danish capital, Nyhavn and the Little Mermaid, then Stockholm and its old town of Gamla Stan.",
        "Las tres capitales escandinavas: dos días en Oslo, el ferri nocturno a Copenhague, dos días en la capital danesa, Nyhavn y la Sirenita, y Estocolmo y su ciudad vieja de Gamla Stan.",
      ],
      includes: INC(7, ",Ferry de nuit Oslo – Copenhague,Train Copenhague – Stockholm"),
      price: 1672, nights: 7, departureFrom: "Lyon", image: "ks1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -44998,
      chapters: [
        no.chapter(["Oslo et Copenhague", "Oslo and Copenhagen", "Oslo y Copenhague"], ["La Norvège et le Danemark.", "Norway and Denmark.", "Noruega y Dinamarca."],
          ["ks3", "ks4", "ks1", "ks2"],
          [
            no.day(1, ...arr(OSL), "ks3"),
            no.day(2, OSL, X_OSLO, "ks4"),
            no.day(3, ["Ferry de nuit vers Copenhague", "Night ferry to Copenhagen", "Ferri nocturno a Copenhague"], ["Matinée libre, puis embarquement sur le ferry et descente de l'Oslofjord au coucher du soleil.", "A free morning, then boarding the ferry and sailing down the Oslofjord at sunset.", "Mañana libre, y embarque en el ferri y descenso del Oslofjord al atardecer."], "ks4"),
            no.day(4, ["Copenhague", "Copenhagen", "Copenhague"], ["Copenhague : le port coloré de Nyhavn, la Petite Sirène, le palais d'Amalienborg et le quartier de Christiania.", "Copenhagen: the colourful harbour of Nyhavn, the Little Mermaid, Amalienborg Palace and the Christiania district.", "Copenhague: el colorido puerto de Nyhavn, la Sirenita, el palacio de Amalienborg y el barrio de Christiania."], "ks1"),
            no.day(5, ["Copenhague", "Copenhagen", "Copenhague"], ["Journée libre : les jardins de Tivoli, le château de Rosenborg ou une balade à vélo.", "A free day: the Tivoli Gardens, Rosenborg Castle or a bike ride.", "Día libre: los jardines de Tívoli, el castillo de Rosenborg o un paseo en bicicleta."], "ks2"),
          ]),
        no.chapter(["Stockholm", "Stockholm", "Estocolmo"], ["La Venise du Nord.", "The Venice of the North.", "La Venecia del Norte."],
          ["ks5", "ks6"],
          [
            no.day(6, ["Copenhague – Stockholm", "Copenhagen – Stockholm", "Copenhague – Estocolmo"], ["Train vers Stockholm à travers la Suède.", "Train to Stockholm across Sweden.", "Tren a Estocolmo a través de Suecia."], "ks6"),
            no.day(7, ["Stockholm", "Stockholm", "Estocolmo"], ["Stockholm, bâtie sur quatorze îles : Gamla Stan, le palais royal, l'hôtel de ville et le musée Vasa.", "Stockholm, built on fourteen islands: Gamla Stan, the Royal Palace, the City Hall and the Vasa Museum.", "Estocolmo, construida sobre catorce islas: Gamla Stan, el palacio real, el ayuntamiento y el museo Vasa."], "ks5"),
            no.day(8, T_HOME, home(["Stockholm", "Stockholm", "Estocolmo"]), "ks6"),
          ]),
      ],
    }),

    now.trip({
      slug: "norvege-cap-sur-la-norvege-en-hiver-tromso-lofoten-7j",
      name: ["Cap sur la Norvège en hiver : Tromsø, les Vesterålen, le Trollfjord et les Lofoten", "Heading for Norway in winter: Tromsø, the Vesterålen, the Trollfjord and the Lofoten", "Rumbo a Noruega en invierno: Tromsø, las Vesterålen, el Trollfjord y las Lofoten"],
      tagline: ["La nuit polaire, les aurores boréales et les îles sous la neige", "The polar night, the northern lights and the islands under snow", "La noche polar, las auroras boreales y las islas bajo la nieve"],
      description: [
        "Le Grand Nord en hiver : Oslo, Tromsø, l'archipel des Vesterålen, un safari en zodiac dans le Trollfjord, les îles Lofoten enneigées et une ferme de rennes sami, avec chaque nuit la chance d'observer les aurores boréales.",
        "The Far North in winter: Oslo, Tromsø, the Vesterålen archipelago, a Zodiac safari in the Trollfjord, the snowy Lofoten Islands and a Sami reindeer farm, with every night the chance to see the northern lights.",
        "El Gran Norte en invierno: Oslo, Tromsø, el archipiélago de las Vesterålen, un safari en zódiac por el Trollfjord, las islas Lofoten nevadas y una granja de renos sami, con cada noche la oportunidad de ver las auroras boreales.",
      ],
      includes: INC(6, ",Safari en zodiac"),
      price: 2459, nights: 6, departureFrom: "Paris", image: "nh5",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo,groups", maxGuests: 30, order: -44997,
      chapters: [
        now.chapter(["Le Grand Nord en hiver", "The Far North in winter", "El Gran Norte en invierno"], ["Aurores, fjords et rennes.", "Northern lights, fjords and reindeer.", "Auroras, fiordos y renos."],
          ["nh1", "nh3", "nh4", "nh5", "nh6", "nh2"],
          [
            now.day(1, ...arr(OSL), "ks3"),
            now.day(2, ["Oslo – Tromsø", "Oslo – Tromsø", "Oslo – Tromsø"], join(["Vol vers Tromsø.", "Flight to Tromsø.", "Vuelo a Tromsø."], X_TROMSO), "nh6"),
            now.day(3, ["Tromsø – Vesterålen", "Tromsø – Vesterålen", "Tromsø – Vesterålen"], ["Route vers l'archipel des Vesterålen à travers les paysages enneigés.", "Drive to the Vesterålen archipelago through snowy landscapes.", "Carretera hacia el archipiélago de las Vesterålen a través de paisajes nevados."], "nh3"),
            now.day(4, ["Le Trollfjord en zodiac", "The Trollfjord by Zodiac", "El Trollfjord en zódiac"], ["Safari en zodiac dans l'étroit Trollfjord, à la recherche des aigles de mer.", "A Zodiac safari in the narrow Trollfjord, looking for sea eagles.", "Safari en zódiac por el estrecho Trollfjord, en busca de las águilas marinas."], "nh1"),
            now.day(5, ["Les îles Lofoten", "The Lofoten Islands", "Las islas Lofoten"], X_LOFOTEN, "nh4"),
            now.day(6, ["Sami – Evenes – Oslo", "Sami – Evenes – Oslo", "Sami – Evenes – Oslo"], join(X_SAMI, ["Puis vol vers Oslo.", "Then a flight to Oslo.", "Y vuelo a Oslo."]), "nh2"),
            now.day(7, T_HOME, home(OSL), "nh5"),
          ]),
      ],
    }),

    no.trip({
      slug: "norvege-norvege-du-nord-tromso-lofoten-cap-nord-8j",
      name: ["Norvège du Nord : Tromsø, Senja, les Lofoten, les Alpes de Lyngen et le cap Nord", "Northern Norway: Tromsø, Senja, the Lofoten, the Lyngen Alps and North Cape", "Noruega del Norte: Tromsø, Senja, las Lofoten, los Alpes de Lyngen y el cabo Norte"],
      tagline: ["Le soleil de minuit, des îles au bout de l'Europe", "The midnight sun, from the islands to the end of Europe", "El sol de medianoche, de las islas al final de Europa"],
      description: [
        "Le Grand Nord en été : Tromsø, la croisière vers Harstad le long de l'île de Senja, les Lofoten et les Vesterålen, les Alpes de Lyngen, la Laponie et le cap Nord sous le soleil de minuit.",
        "The Far North in summer: Tromsø, the cruise to Harstad along the island of Senja, the Lofoten and the Vesterålen, the Lyngen Alps, Lapland and North Cape under the midnight sun.",
        "El Gran Norte en verano: Tromsø, el crucero a Harstad a lo largo de la isla de Senja, las Lofoten y las Vesterålen, los Alpes de Lyngen, Laponia y el cabo Norte bajo el sol de medianoche.",
      ],
      includes: INC(7, ",Croisière Tromsø – Harstad"),
      price: 2451, nights: 7, departureFrom: "Bâle", image: "nn2",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 30, order: -44996,
      chapters: [
        no.chapter(["Tromsø et les Lofoten", "Tromsø and the Lofoten", "Tromsø y las Lofoten"], ["Les îles arctiques.", "The Arctic islands.", "Las islas árticas."],
          ["nn1", "nn2", "nn6", "nn5"],
          [
            no.day(1, ...arr(TOS), "nn5"),
            no.day(2, ["Croisière vers Harstad", "Cruise to Harstad", "Crucero a Harstad"], ["Croisière côtière le long de l'île de Senja et ses montagnes dentelées jusqu'à Harstad.", "A coastal cruise along the island of Senja and its jagged mountains to Harstad.", "Crucero costero a lo largo de la isla de Senja y sus montañas dentadas hasta Harstad."], "nn1"),
            no.day(3, ["Harstad – Lofoten", "Harstad – Lofoten", "Harstad – Lofoten"], X_LOFOTEN, "nn2"),
            no.day(4, ["Lofoten et Vesterålen", "Lofoten and Vesterålen", "Lofoten y Vesterålen"], ["Les plages blanches et les villages des Lofoten, puis les Vesterålen et leurs baleines au large.", "The white beaches and villages of the Lofoten, then the Vesterålen and the whales offshore.", "Las playas blancas y los pueblos de las Lofoten, y las Vesterålen y sus ballenas mar adentro."], "nn6"),
          ]),
        no.chapter(["Lyngen et le cap Nord", "Lyngen and North Cape", "Lyngen y el cabo Norte"], ["Montagnes, Laponie et bout de l'Europe.", "Mountains, Lapland and the end of Europe.", "Montañas, Laponia y el final de Europa."],
          ["nn3", "nn4", "ta3"],
          [
            no.day(5, ["Vesterålen – Alpes de Lyngen", "Vesterålen – Lyngen Alps", "Vesterålen – Alpes de Lyngen"], ["Route vers les Alpes de Lyngen, sommets glaciaires plongeant dans le fjord.", "Drive to the Lyngen Alps, glacial peaks plunging into the fjord.", "Carretera hacia los Alpes de Lyngen, cumbres glaciares que se hunden en el fiordo."], "nn3"),
            no.day(6, ["Laponie – cap Nord", "Lapland – North Cape", "Laponia – cabo Norte"], join(["La traversée de la Laponie et de ses rennes jusqu'à Honningsvåg.", "Across Lapland and its reindeer to Honningsvåg.", "La travesía de Laponia y sus renos hasta Honningsvåg."], X_CAPNORD), "nn4"),
            no.day(7, ["Cap Nord – Tromsø", "North Cape – Tromsø", "Cabo Norte – Tromsø"], ["Vol de retour vers Tromsø.", "Flight back to Tromsø.", "Vuelo de regreso a Tromsø."], "nn5"),
            no.day(8, T_HOME, home(TOS), "nn2"),
          ]),
      ],
    }),

    now.trip({
      slug: "norvege-tresors-de-l-arctique-cap-nord-laponie-8j",
      name: ["Trésors de l'Arctique : Tromsø, Alta, le cap Nord et les trois Laponies", "Treasures of the Arctic: Tromsø, Alta, North Cape and the three Laplands", "Tesoros del Ártico: Tromsø, Alta, el cabo Norte y las tres Laponias"],
      tagline: ["La Laponie norvégienne, finlandaise et suédoise en hiver", "Norwegian, Finnish and Swedish Lapland in winter", "La Laponia noruega, finlandesa y sueca en invierno"],
      description: [
        "L'hiver arctique : Tromsø, Alta et ses gravures rupestres, le cap Nord sous la neige, Karasjok, capitale des Samis, le Finnmark, la rencontre des trois Laponies et le lac de Kilpisjärvi, avec chaque nuit la chance des aurores boréales.",
        "The Arctic winter: Tromsø, Alta and its rock carvings, North Cape under snow, Karasjok, the Sami capital, Finnmark, the meeting of the three Laplands and Lake Kilpisjärvi, with every night the chance of the northern lights.",
        "El invierno ártico: Tromsø, Alta y sus grabados rupestres, el cabo Norte bajo la nieve, Karasjok, capital de los samis, Finnmark, el encuentro de las tres Laponias y el lago de Kilpisjärvi, con cada noche la oportunidad de las auroras boreales.",
      ],
      includes: INC(7),
      price: 2671, nights: 7, departureFrom: "Paris", image: "ta1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo,groups", maxGuests: 30, order: -44995,
      chapters: [
        now.chapter(["Le cap Nord et les Laponies", "North Cape and the Laplands", "El cabo Norte y las Laponias"], ["Aurores, Samis et rennes.", "Northern lights, Sami and reindeer.", "Auroras, samis y renos."],
          ["ta1", "ta2", "ta3", "ta4"],
          [
            now.day(1, ...arr(TOS), "nh6"),
            now.day(2, ["Tromsø – Alta", "Tromsø – Alta", "Tromsø – Alta"], ["La route des fjords jusqu'à Alta et ses gravures rupestres préhistoriques classées par l'Unesco.", "The fjord road to Alta and its UNESCO-listed prehistoric rock carvings.", "La carretera de los fiordos hasta Alta y sus grabados rupestres prehistóricos declarados por la Unesco."], "ta2"),
            now.day(3, ["Alta – Honningsvåg", "Alta – Honningsvåg", "Alta – Honningsvåg"], ["La route arctique jusqu'à Honningsvåg, sur l'île de Magerøya.", "The Arctic road to Honningsvåg, on the island of Magerøya.", "La carretera ártica hasta Honningsvåg, en la isla de Magerøya."], "ta2"),
            now.day(4, ["Cap Nord – Karasjok", "North Cape – Karasjok", "Cabo Norte – Karasjok"], join(["Le cap Nord sous la neige, puis Karasjok, capitale des Samis.", "North Cape under snow, then Karasjok, capital of the Sami.", "El cabo Norte bajo la nieve, y Karasjok, capital de los samis."], X_SAMI), "ta3"),
            now.day(5, ["Le Finnmark", "Finnmark", "Finnmark"], ["Journée dans le Finnmark, en traîneau à rennes ou à chiens en option.", "A day in Finnmark, with reindeer or dog sledding as options.", "Jornada en Finnmark, con trineo de renos o de perros opcional."], "ta4"),
            now.day(6, ["Au cœur des trois Laponies", "At the heart of the three Laplands", "En el corazón de las tres Laponias"], ["La Laponie finlandaise et suédoise, là où se rejoignent les trois pays.", "Finnish and Swedish Lapland, where the three countries meet.", "La Laponia finlandesa y sueca, donde se unen los tres países."], "ta4"),
            now.day(7, ["Kilpisjärvi – Tromsø", "Kilpisjärvi – Tromsø", "Kilpisjärvi – Tromsø"], ["Le lac gelé de Kilpisjärvi, puis retour à Tromsø.", "Frozen Lake Kilpisjärvi, then back to Tromsø.", "El lago helado de Kilpisjärvi, y regreso a Tromsø."], "ta1"),
            now.day(8, T_HOME, home(TOS), "ta1"),
          ]),
      ],
    }),

    no.trip({
      slug: "norvege-norvege-du-sud-en-train-et-en-bateau-8j",
      name: ["Norvège du sud en train et en bateau : Flåm, le Sognefjord, Bergen et le Preikestolen", "Southern Norway by train and boat: Flåm, the Sognefjord, Bergen and Preikestolen", "Noruega del sur en tren y en barco: Flåm, el Sognefjord, Bergen y el Preikestolen"],
      tagline: ["Les fjords sans voiture, des rails de Flåm à la croisière côtière", "The fjords without a car, from the Flåm railway to the coastal cruise", "Los fiordos sin coche, de los raíles de Flåm al crucero costero"],
      description: [
        "Une Norvège au rythme lent : Oslo, la ligne de Bergen et le train de Flåm, la croisière sur le Sognefjord, deux jours à Bergen, la croisière côtière jusqu'à Stavanger, puis le Lysefjord et le rocher du Preikestolen.",
        "Norway at a slow pace: Oslo, the Bergen line and the Flåm railway, the Sognefjord cruise, two days in Bergen, the coastal cruise to Stavanger, then the Lysefjord and the Preikestolen rock.",
        "Una Noruega a ritmo lento: Oslo, la línea de Bergen y el tren de Flåm, el crucero por el Sognefjord, dos días en Bergen, el crucero costero hasta Stavanger, y el Lysefjord y la roca del Preikestolen.",
      ],
      includes: INC(7, ",Trains et croisières du programme"),
      price: 2677, nights: 7, departureFrom: "Bruxelles", image: "ts4",
      theme: "adventure", feeling: "contentment", travelerTypes: "couples,solo,family", maxGuests: 30, order: -44994,
      chapters: [
        no.chapter(["Oslo, Flåm et Bergen", "Oslo, Flåm and Bergen", "Oslo, Flåm y Bergen"], ["Le train et le fjord.", "The train and the fjord.", "El tren y el fiordo."],
          ["ts2", "ts1", "ts4", "ts6"],
          [
            no.day(1, ...arr(OSL), "ts2"),
            no.day(2, OSL, X_OSLO, "ts2"),
            no.day(3, ["Oslo – Myrdal – Flåm", "Oslo – Myrdal – Flåm", "Oslo – Myrdal – Flåm"], ["La ligne de Bergen jusqu'à Myrdal, puis le train de Flåm, l'un des plus raides du monde, jusqu'au fond du fjord.", "The Bergen line to Myrdal, then the Flåm railway, one of the steepest in the world, down to the end of the fjord.", "La línea de Bergen hasta Myrdal, y el tren de Flåm, uno de los más empinados del mundo, hasta el fondo del fiordo."], "ts1"),
            no.day(4, ["Sognefjord – Bergen", "Sognefjord – Bergen", "Sognefjord – Bergen"], X_SOGNE, "ts4"),
            no.day(5, BGO, X_BERGEN, "ts6"),
          ]),
        no.chapter(["La côte et le Lysefjord", "The coast and the Lysefjord", "La costa y el Lysefjord"], ["Croisière et Preikestolen.", "Cruise and Preikestolen.", "Crucero y Preikestolen."],
          ["ts3", "ts5", "df5"],
          [
            no.day(6, ["Croisière côtière", "Coastal cruise", "Crucero costero"], ["Croisière le long de la côte ouest jusqu'à Stavanger.", "A cruise along the west coast to Stavanger.", "Crucero a lo largo de la costa oeste hasta Stavanger."], "ts3"),
            no.day(7, ["Lysefjord – Preikestolen", "Lysefjord – Preikestolen", "Lysefjord – Preikestolen"], ["Croisière sur le Lysefjord au pied du Preikestolen, la « chaire du prêcheur », falaise plate de 604 mètres, et du Kjeragbolten.", "A cruise on the Lysefjord at the foot of Preikestolen, the 'Pulpit Rock', a flat 604-metre cliff, and the Kjeragbolten.", "Crucero por el Lysefjord al pie del Preikestolen, el «púlpito», acantilado plano de 604 metros, y del Kjeragbolten."], "df5"),
            no.day(8, T_HOME, home(["Stavanger", "Stavanger", "Stavanger"]), "ts5"),
          ]),
      ],
    }),

    no.trip({
      slug: "norvege-le-meilleur-des-fjords-route-atlantique-lysefjord-10j",
      name: ["Le meilleur des fjords : la route de l'Atlantique, Geiranger, Bergen et le Lysefjord", "The best of the fjords: the Atlantic Road, Geiranger, Bergen and the Lysefjord", "Lo mejor de los fiordos: la carretera del Atlántico, Geiranger, Bergen y el Lysefjord"],
      tagline: ["Tous les grands fjords en dix jours, du nord au sud", "All the great fjords in ten days, from north to south", "Todos los grandes fiordos en diez días, de norte a sur"],
      description: [
        "La Norvège des fjords au complet : Lillehammer, la route de l'Atlantique et ses ponts sur l'océan, la route des Trolls et le Geirangerfjord, le Sognefjord, Bergen, le Hardangerfjord, Stavanger et le Lysefjord, le Telemark et le mont Gaustatoppen, puis Oslo.",
        "Fjord Norway in full: Lillehammer, the Atlantic Road and its bridges over the ocean, Trollstigen and the Geirangerfjord, the Sognefjord, Bergen, the Hardangerfjord, Stavanger and the Lysefjord, Telemark and Mount Gaustatoppen, then Oslo.",
        "La Noruega de los fiordos al completo: Lillehammer, la carretera del Atlántico y sus puentes sobre el océano, la carretera de los Trolls y el Geirangerfjord, el Sognefjord, Bergen, el Hardangerfjord, Stavanger y el Lysefjord, Telemark y el monte Gaustatoppen, y Oslo.",
      ],
      includes: INC(9),
      price: 2554, nights: 9, departureFrom: "Barcelone", image: "mf1",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 40, order: -44993,
      chapters: [
        no.chapter(["Le nord des fjords", "The northern fjords", "Los fiordos del norte"], ["Route de l'Atlantique et Geiranger.", "The Atlantic Road and Geiranger.", "La carretera del Atlántico y Geiranger."],
          ["mf1", "mf2", "cl5"],
          [
            no.day(1, ...arr(OSL), "mf4"),
            no.day(2, ["Lillehammer – Oppdal", "Lillehammer – Oppdal", "Lillehammer – Oppdal"], ["Lillehammer, ville olympique, et la vallée de Gudbrandsdal jusqu'à Oppdal.", "Lillehammer, the Olympic town, and the Gudbrandsdal valley to Oppdal.", "Lillehammer, ciudad olímpica, y el valle de Gudbrandsdal hasta Oppdal."], "mf2"),
            no.day(3, ["Route de l'Atlantique – Molde", "The Atlantic Road – Molde", "Carretera del Atlántico – Molde"], ["Kristiansund et la route de l'Atlantique, qui saute d'îlot en îlot par huit ponts au-dessus de l'océan.", "Kristiansund and the Atlantic Road, which hops from islet to islet over eight bridges above the ocean.", "Kristiansund y la carretera del Atlántico, que salta de islote en islote por ocho puentes sobre el océano."], "mf1"),
            no.day(4, ["Route des Trolls – Geiranger", "Trollstigen – Geiranger", "Carretera de los Trolls – Geiranger"], X_GEIRANGER, "cl5"),
          ]),
        no.chapter(["Bergen et le sud", "Bergen and the south", "Bergen y el sur"], ["Sognefjord, Hardanger et Lysefjord.", "Sognefjord, Hardanger and Lysefjord.", "Sognefjord, Hardanger y Lysefjord."],
          ["mf3", "mf5", "df5", "mf4"],
          [
            no.day(5, ["Sognefjord – Bergen", "Sognefjord – Bergen", "Sognefjord – Bergen"], join(X_SOGNE, ["Puis Bergen.", "Then Bergen.", "Y Bergen."]), "mf3"),
            no.day(6, ["Hardangerfjord – Stavanger", "Hardangerfjord – Stavanger", "Hardangerfjord – Stavanger"], X_HARDANGER, "mf5"),
            no.day(7, ["Lysefjord – Telemark", "Lysefjord – Telemark", "Lysefjord – Telemark"], ["Croisière sur le Lysefjord au pied du Preikestolen, puis le Telemark.", "A cruise on the Lysefjord at the foot of Preikestolen, then Telemark.", "Crucero por el Lysefjord al pie del Preikestolen, y Telemark."], "df5"),
            no.day(8, ["Gaustatoppen – Oslo", "Gaustatoppen – Oslo", "Gaustatoppen – Oslo"], ["Le mont Gaustatoppen et son panorama sur un sixième de la Norvège, puis Oslo.", "Mount Gaustatoppen and its view over a sixth of Norway, then Oslo.", "El monte Gaustatoppen y su panorama sobre una sexta parte de Noruega, y Oslo."], "mf2"),
            no.day(9, OSL, X_OSLO, "mf6"),
            no.day(10, T_HOME, home(OSL), "mf4"),
          ]),
      ],
    }),

    no.trip({
      slug: "norvege-cap-sur-la-norvege-cap-nord-lofoten-bergen-11j",
      name: ["Cap sur la Norvège : le cap Nord, Tromsø, les Lofoten, le cercle polaire et Bergen", "Heading for Norway: North Cape, Tromsø, the Lofoten, the Arctic Circle and Bergen", "Rumbo a Noruega: el cabo Norte, Tromsø, las Lofoten, el círculo polar y Bergen"],
      tagline: ["La Norvège entière, du cap Nord aux fjords du sud", "All of Norway, from North Cape to the southern fjords", "Toda Noruega, del cabo Norte a los fiordos del sur"],
      description: [
        "La grande descente de la Norvège : vol vers le cap Nord, Tromsø, les îles Lofoten, la traversée du Vestfjord, la route côtière 17 et le cercle polaire, le glacier de Svartisen, Trondheim, le massif du Jotunheimen, le Sognefjord, Bergen et le Hardangerfjord.",
        "The great descent of Norway: a flight to North Cape, Tromsø, the Lofoten Islands, the Vestfjord crossing, coastal Route 17 and the Arctic Circle, the Svartisen glacier, Trondheim, the Jotunheimen massif, the Sognefjord, Bergen and the Hardangerfjord.",
        "El gran descenso de Noruega: vuelo al cabo Norte, Tromsø, las islas Lofoten, la travesía del Vestfjord, la ruta costera 17 y el círculo polar, el glaciar de Svartisen, Trondheim, el macizo del Jotunheimen, el Sognefjord, Bergen y el Hardangerfjord.",
      ],
      includes: INC(10, ",Vol intérieur Oslo – Alta"),
      price: 3207, nights: 10, departureFrom: "Barcelone", image: "cn1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 40, order: -44992,
      chapters: [
        no.chapter(["Le Grand Nord", "The Far North", "El Gran Norte"], ["Cap Nord, Tromsø et Lofoten.", "North Cape, Tromsø and the Lofoten.", "Cabo Norte, Tromsø y Lofoten."],
          ["ta3", "nn5", "cn1"],
          [
            no.day(1, ...arr(OSL), "ks3"),
            no.day(2, ["Alta – cap Nord", "Alta – North Cape", "Alta – cabo Norte"], join(["Vol vers Alta, route vers Honningsvåg.", "Flight to Alta, drive to Honningsvåg.", "Vuelo a Alta, carretera hacia Honningsvåg."], X_CAPNORD), "ta3"),
            no.day(3, ["Honningsvåg – Tromsø", "Honningsvåg – Tromsø", "Honningsvåg – Tromsø"], X_TROMSO, "nn5"),
            no.day(4, ["Tromsø – Svolvær", "Tromsø – Svolvær", "Tromsø – Svolvær"], ["Route vers les Lofoten et Svolvær.", "Drive to the Lofoten and Svolvær.", "Carretera hacia las Lofoten y Svolvær."], "nn6"),
            no.day(5, ["Lofoten – Vestfjord – Bodø", "Lofoten – Vestfjord – Bodø", "Lofoten – Vestfjord – Bodø"], join(X_LOFOTEN, ["Traversée du Vestfjord jusqu'à Bodø.", "Crossing the Vestfjord to Bodø.", "Travesía del Vestfjord hasta Bodø."]), "cn1"),
          ]),
        no.chapter(["La côte et les fjords du sud", "The coast and the southern fjords", "La costa y los fiordos del sur"], ["Cercle polaire, Trondheim et Bergen.", "The Arctic Circle, Trondheim and Bergen.", "El círculo polar, Trondheim y Bergen."],
          ["cn2", "cn3", "cn6"],
          [
            no.day(6, ["Route 17 – cercle polaire – Svartisen", "Route 17 – Arctic Circle – Svartisen", "Ruta 17 – círculo polar – Svartisen"], ["La route côtière 17 et ses bacs, le passage du cercle polaire et le glacier de Svartisen.", "Coastal Route 17 and its ferries, crossing the Arctic Circle and the Svartisen glacier.", "La ruta costera 17 y sus transbordadores, el paso del círculo polar y el glaciar de Svartisen."], "cn3"),
            no.day(7, ["Mo i Rana – Trondheim", "Mo i Rana – Trondheim", "Mo i Rana – Trondheim"], ["Route vers Trondheim, sa cathédrale de Nidaros et ses entrepôts sur pilotis.", "Drive to Trondheim, its Nidaros Cathedral and its warehouses on stilts.", "Carretera hacia Trondheim, su catedral de Nidaros y sus almacenes sobre pilotes."], "cl3"),
            no.day(8, ["Trondheim – Jotunheimen", "Trondheim – Jotunheimen", "Trondheim – Jotunheimen"], ["Le massif du Jotunheimen, le « foyer des géants », et ses sommets.", "The Jotunheimen massif, the 'home of the giants', and its peaks.", "El macizo del Jotunheimen, el «hogar de los gigantes», y sus cumbres."], "cn2"),
            no.day(9, ["Sognefjord – Bergen", "Sognefjord – Bergen", "Sognefjord – Bergen"], join(X_SOGNE, X_BERGEN), "cn6"),
            no.day(10, ["Hardangerfjord – Oslo", "Hardangerfjord – Oslo", "Hardangerfjord – Oslo"], X_HARDANGER, "df4"),
            no.day(11, T_HOME, home(OSL), "cn1"),
          ]),
      ],
    }),

    no.trip({
      slug: "norvege-cap-sur-la-norvege-et-les-iles-lofoten-11j",
      name: ["Cap sur la Norvège et les îles Lofoten : baleines, route de l'Atlantique et fjords", "Heading for Norway and the Lofoten Islands: whales, the Atlantic Road and fjords", "Rumbo a Noruega y las islas Lofoten: ballenas, carretera del Atlántico y fiordos"],
      tagline: ["Un safari baleines aux Vesterålen et les plus beaux fjords du sud", "A whale safari in the Vesterålen and the finest fjords of the south", "Un safari de ballenas en las Vesterålen y los fiordos más bellos del sur"],
      description: [
        "Le nord et le sud de la Norvège : les îles Vesterålen et un safari d'observation des baleines, les Lofoten, la traversée du Vestfjord, Trondheim, la route de l'Atlantique, la route des Trolls et le Geirangerfjord, le Sognefjord et Bergen, le Hardangerfjord et le plateau du Hardangervidda.",
        "The north and south of Norway: the Vesterålen islands and a whale-watching safari, the Lofoten, the Vestfjord crossing, Trondheim, the Atlantic Road, Trollstigen and the Geirangerfjord, the Sognefjord and Bergen, the Hardangerfjord and the Hardangervidda plateau.",
        "El norte y el sur de Noruega: las islas Vesterålen y un safari de avistamiento de ballenas, las Lofoten, la travesía del Vestfjord, Trondheim, la carretera del Atlántico, la carretera de los Trolls y el Geirangerfjord, el Sognefjord y Bergen, el Hardangerfjord y la meseta del Hardangervidda.",
      ],
      includes: INC(10, ",Vol intérieur Oslo – Evenes,Safari baleines"),
      price: 3670, nights: 10, departureFrom: "Paris", image: "cl6",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 40, order: -44991,
      chapters: [
        no.chapter(["Vesterålen et Lofoten", "Vesterålen and the Lofoten", "Vesterålen y Lofoten"], ["Baleines et îles arctiques.", "Whales and Arctic islands.", "Ballenas e islas árticas."],
          ["cl2", "cl1", "cl6"],
          [
            no.day(1, ...arr(OSL), "ks3"),
            no.day(2, ["Oslo – Evenes – Vesterålen", "Oslo – Evenes – Vesterålen", "Oslo – Evenes – Vesterålen"], ["Vol vers Evenes et route vers les îles Vesterålen.", "Flight to Evenes and the drive to the Vesterålen islands.", "Vuelo a Evenes y carretera hacia las islas Vesterålen."], "cl1"),
            no.day(3, ["Safari baleines", "Whale safari", "Safari de ballenas"], ["Safari en mer depuis Andenes à la rencontre des cachalots.", "A sea safari from Andenes to meet the sperm whales.", "Safari en el mar desde Andenes al encuentro de los cachalotes."], "cl2"),
            no.day(4, ["Les îles Lofoten", "The Lofoten Islands", "Las islas Lofoten"], X_LOFOTEN, "cl6"),
            no.day(5, ["Vestfjord – Fauske", "Vestfjord – Fauske", "Vestfjord – Fauske"], ["Traversée du Vestfjord et route vers Fauske.", "The Vestfjord crossing and the drive to Fauske.", "Travesía del Vestfjord y carretera hacia Fauske."], "cl1"),
          ]),
        no.chapter(["Les fjords du sud", "The southern fjords", "Los fiordos del sur"], ["Route de l'Atlantique, Geiranger et Bergen.", "The Atlantic Road, Geiranger and Bergen.", "La carretera del Atlántico, Geiranger y Bergen."],
          ["cl3", "cl4", "cl5", "cl7"],
          [
            no.day(6, ["Trondheim – route de l'Atlantique – Molde", "Trondheim – Atlantic Road – Molde", "Trondheim – carretera del Atlántico – Molde"], ["Trondheim, puis la route de l'Atlantique et ses ponts au-dessus de l'océan.", "Trondheim, then the Atlantic Road and its bridges above the ocean.", "Trondheim, y la carretera del Atlántico y sus puentes sobre el océano."], "cl4"),
            no.day(7, ["Route des Trolls – Geirangerfjord", "Trollstigen – Geirangerfjord", "Carretera de los Trolls – Geirangerfjord"], X_GEIRANGER, "cl5"),
            no.day(8, ["Sognefjord – Bergen", "Sognefjord – Bergen", "Sognefjord – Bergen"], join(X_SOGNE, ["Puis Bergen.", "Then Bergen.", "Y Bergen."]), "cl7"),
            no.day(9, ["Hardangerfjord – Geilo", "Hardangerfjord – Geilo", "Hardangerfjord – Geilo"], X_HARDANGER, "df4"),
            no.day(10, ["Geilo – Oslo", "Geilo – Oslo", "Geilo – Oslo"], X_OSLO, "cl3"),
            no.day(11, T_HOME, home(OSL), "cl6"),
          ]),
      ],
    }),

    no.trip({
      slug: "norvege-cap-sur-la-scandinavie-norvege-finlande-suede-14j",
      name: ["Cap sur la Scandinavie : fjords, Lofoten, cap Nord, Laponie finlandaise, Helsinki et Stockholm", "Heading for Scandinavia: fjords, the Lofoten, North Cape, Finnish Lapland, Helsinki and Stockholm", "Rumbo a Escandinavia: fiordos, Lofoten, cabo Norte, Laponia finlandesa, Helsinki y Estocolmo"],
      tagline: ["Trois pays nordiques, des fjords à la Baltique", "Three Nordic countries, from the fjords to the Baltic", "Tres países nórdicos, de los fiordos al Báltico"],
      description: [
        "Le grand tour de Scandinavie : Oslo, Bergen et le Sognefjord, Trondheim, les îles Lofoten, Tromsø, le cap Nord, la Laponie finlandaise et Rovaniemi, Helsinki, une nuit de croisière sur la Baltique, puis Stockholm.",
        "The grand tour of Scandinavia: Oslo, Bergen and the Sognefjord, Trondheim, the Lofoten Islands, Tromsø, North Cape, Finnish Lapland and Rovaniemi, Helsinki, a night cruise on the Baltic, then Stockholm.",
        "La gran vuelta de Escandinavia: Oslo, Bergen y el Sognefjord, Trondheim, las islas Lofoten, Tromsø, el cabo Norte, la Laponia finlandesa y Rovaniemi, Helsinki, una noche de crucero por el Báltico, y Estocolmo.",
      ],
      includes: INC(13, ",Croisière Helsinki – Stockholm"),
      price: 4045, nights: 13, departureFrom: "Paris", image: "sc6",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 40, order: -44990,
      chapters: [
        no.chapter(["Les fjords de Norvège", "Norway's fjords", "Los fiordos de Noruega"], ["Oslo, Bergen et Trondheim.", "Oslo, Bergen and Trondheim.", "Oslo, Bergen y Trondheim."],
          ["sc2", "sc3", "mf3"],
          [
            no.day(1, ...arr(OSL), "ks3"),
            no.day(2, ["Oslo – Geilo", "Oslo – Geilo", "Oslo – Geilo"], X_OSLO, "sc3"),
            no.day(3, ["Geilo – Bergen", "Geilo – Bergen", "Geilo – Bergen"], X_BERGEN, "mf3"),
            no.day(4, ["Sognefjord – Bøverdal", "Sognefjord – Bøverdal", "Sognefjord – Bøverdal"], X_SOGNE, "sc2"),
            no.day(5, ["Bøverdal – Trondheim", "Bøverdal – Trondheim", "Bøverdal – Trondheim"], ["La route des montagnes jusqu'à Trondheim.", "The mountain road to Trondheim.", "La carretera de montaña hasta Trondheim."], "cl3"),
          ]),
        no.chapter(["Lofoten, cap Nord et Laponie", "The Lofoten, North Cape and Lapland", "Lofoten, cabo Norte y Laponia"], ["Le Grand Nord.", "The Far North.", "El Gran Norte."],
          ["sc6", "ta3", "sc5", "sc7"],
          [
            no.day(6, ["Vestfjord – Lofoten", "Vestfjord – Lofoten", "Vestfjord – Lofoten"], ["Traversée du Vestfjord vers les Lofoten.", "Crossing the Vestfjord to the Lofoten.", "Travesía del Vestfjord hacia las Lofoten."], "sc6"),
            no.day(7, ["Îles Lofoten", "The Lofoten Islands", "Islas Lofoten"], X_LOFOTEN, "nn6"),
            no.day(8, ["Harstad – Tromsø", "Harstad – Tromsø", "Harstad – Tromsø"], X_TROMSO, "nn5"),
            no.day(9, ["Alta – cap Nord", "Alta – North Cape", "Alta – cabo Norte"], X_CAPNORD, "ta3"),
            no.day(10, ["Karasjok – Saariselkä", "Karasjok – Saariselkä", "Karasjok – Saariselkä"], join(X_SAMI, ["Puis la Laponie finlandaise.", "Then Finnish Lapland.", "Y la Laponia finlandesa."]), "sc5"),
            no.day(11, ["Rovaniemi – Helsinki", "Rovaniemi – Helsinki", "Rovaniemi – Helsinki"], ["Rovaniemi sur le cercle polaire, puis vol vers Helsinki.", "Rovaniemi on the Arctic Circle, then a flight to Helsinki.", "Rovaniemi en el círculo polar, y vuelo a Helsinki."], "sc7"),
          ]),
        no.chapter(["Helsinki et Stockholm", "Helsinki and Stockholm", "Helsinki y Estocolmo"], ["Les capitales de la Baltique.", "The Baltic capitals.", "Las capitales del Báltico."],
          ["sc1", "sc4", "ks5"],
          [
            no.day(12, ["Helsinki – croisière", "Helsinki – cruise", "Helsinki – crucero"], ["Helsinki, sa cathédrale blanche et son marché du port, puis croisière de nuit vers Stockholm.", "Helsinki, its white cathedral and harbour market, then a night cruise to Stockholm.", "Helsinki, su catedral blanca y su mercado del puerto, y crucero nocturno a Estocolmo."], "sc1"),
            no.day(13, ["Stockholm", "Stockholm", "Estocolmo"], ["Stockholm, Gamla Stan, le palais royal et le musée Vasa.", "Stockholm, Gamla Stan, the Royal Palace and the Vasa Museum.", "Estocolmo, Gamla Stan, el palacio real y el museo Vasa."], "ks5"),
            no.day(14, T_HOME, home(["Stockholm", "Stockholm", "Estocolmo"]), "sc4"),
          ]),
      ],
    }),

    // ═════════════ ISLANDE ═════════════
    is.trip({
      slug: "islande-islande-du-sud-autotour-5j",
      name: ["Islande du Sud en liberté : le Cercle d'or et la côte sud en voiture", "Southern Iceland at leisure: the Golden Circle and the south coast by car", "Islandia del Sur por libre: el Círculo Dorado y la costa sur en coche"],
      tagline: ["Un court séjour avec voiture de location, à votre rythme", "A short break with a rental car, at your own pace", "Una escapada con coche de alquiler, a su ritmo"],
      description: [
        "L'Islande en liberté depuis Reykjavik : le Cercle d'or avec Þingvellir, Geysir et Gullfoss, puis la côte sud, ses cascades et ses plages de sable noir, au volant de votre voiture de location.",
        "Iceland at leisure from Reykjavik: the Golden Circle with Þingvellir, Geysir and Gullfoss, then the south coast, its waterfalls and black sand beaches, at the wheel of your rental car.",
        "Islandia por libre desde Reikiavik: el Círculo Dorado con Þingvellir, Geysir y Gullfoss, y la costa sur, sus cascadas y sus playas de arena negra, al volante de su coche de alquiler.",
      ],
      includes: ["Vols depuis la France,Voiture de location,4 nuits en hôtel à Reykjavik,Carnet de route", "Flights from France,Rental car,4 nights in a hotel in Reykjavik,Road book", "Vuelos desde Francia,Coche de alquiler,4 noches en hotel en Reikiavik,Cuaderno de ruta"],
      price: 713, nights: 4, departureFrom: "Paris", image: "su1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,family", maxGuests: 6, order: -44989,
      chapters: [
        is.chapter(["Le sud de l'Islande", "Southern Iceland", "El sur de Islandia"], ["Geysers, cascades et sable noir.", "Geysers, waterfalls and black sand.", "Géiseres, cascadas y arena negra."],
          ["su1", "su2", "su3", "su4", "su5", "su6"],
          [
            is.day(1, ...arr(REK), "su5"),
            is.day(2, ["Le Cercle d'or", "The Golden Circle", "El Círculo Dorado"], X_GOLDEN, "su3"),
            is.day(3, ["La côte sud", "The south coast", "La costa sur"], X_SOUTH, "su1"),
            is.day(4, [REK[0], REK[1], REK[2]], ["Journée libre à Reykjavik : l'église Hallgrímskirkja, le port et le centre culturel Harpa.", "A free day in Reykjavik: Hallgrímskirkja church, the harbour and the Harpa concert hall.", "Día libre en Reikiavik: la iglesia Hallgrímskirkja, el puerto y el centro cultural Harpa."], "su4"),
            is.day(5, T_HOME, home(["Keflavík", "Keflavík", "Keflavík"]), "su2"),
          ]),
      ],
    }),

    isw.trip({
      slug: "islande-cap-sur-l-islande-en-hiver-6j",
      name: ["Cap sur l'Islande en hiver : le Cercle d'or, la côte sud, Jökulsárlón et les aurores", "Heading for Iceland in winter: the Golden Circle, the south coast, Jökulsárlón and the northern lights", "Rumbo a Islandia en invierno: el Círculo Dorado, la costa sur, Jökulsárlón y las auroras"],
      tagline: ["Cascades gelées, glaciers et nuits d'aurores boréales", "Frozen waterfalls, glaciers and nights of northern lights", "Cascadas heladas, glaciares y noches de auroras boreales"],
      description: [
        "L'Islande d'hiver : Reykjavik, le Cercle d'or sous la neige, la côte sud et Vík, Skaftafell et la lagune de Jökulsárlón, la péninsule de Reykjanes, avec la chance d'observer les aurores boréales. Version de 8 jours, avec une randonnée sur glacier et une croisière aux baleines, à partir de 2 502 € par personne.",
        "Winter Iceland: Reykjavik, the Golden Circle under snow, the south coast and Vík, Skaftafell and the Jökulsárlón lagoon, the Reykjanes peninsula, with the chance to see the northern lights. An 8-day version, with a glacier hike and a whale cruise, from €2,502 per person.",
        "La Islandia invernal: Reikiavik, el Círculo Dorado bajo la nieve, la costa sur y Vík, Skaftafell y la laguna de Jökulsárlón, la península de Reykjanes, con la oportunidad de ver las auroras boreales. Versión de 8 días, con una caminata por glaciar y un crucero de ballenas, desde 2.502 € por persona.",
      ],
      includes: INC(5),
      price: 1812, nights: 5, departureFrom: "Bruxelles", image: "ih1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo,groups", maxGuests: 30, order: -44988,
      chapters: [
        isw.chapter(["L'Islande d'hiver", "Winter Iceland", "La Islandia invernal"], ["Glace, feu et aurores.", "Ice, fire and northern lights.", "Hielo, fuego y auroras."],
          ["ih1", "ih2", "ih3", "ih4", "ih5", "ih6"],
          [
            isw.day(1, ["Keflavík – Reykjavik", "Keflavík – Reykjavik", "Keflavík – Reikiavik"], ["Envol pour l'Islande et transfert à Reykjavik.", "Flight to Iceland and transfer to Reykjavik.", "Vuelo a Islandia y traslado a Reikiavik."], "sb1"),
            isw.day(2, ["Cercle d'or – Hella", "Golden Circle – Hella", "Círculo Dorado – Hella"], X_GOLDEN, "ih1"),
            isw.day(3, ["Côte sud – Vík", "South coast – Vík", "Costa sur – Vík"], X_SOUTH, "ih3"),
            isw.day(4, ["Skaftafell – Jökulsárlón", "Skaftafell – Jökulsárlón", "Skaftafell – Jökulsárlón"], X_JOKUL, "ih4"),
            isw.day(5, ["Reykjanes – Reykjavik", "Reykjanes – Reykjavik", "Reykjanes – Reikiavik"], ["La péninsule de Reykjanes, ses champs de lave et ses sources chaudes, puis Reykjavik.", "The Reykjanes peninsula, its lava fields and hot springs, then Reykjavik.", "La península de Reykjanes, sus campos de lava y sus aguas termales, y Reikiavik."], "ih6"),
            isw.day(6, T_HOME, home(["Keflavík", "Keflavík", "Keflavík"]), "ih5"),
          ]),
      ],
    }),

    isw.trip({
      slug: "islande-splendeurs-boreales-8j",
      name: ["Splendeurs boréales : motoneige, Cercle d'or, côte sud et chevaux islandais", "Boreal splendours: snowmobiling, the Golden Circle, the south coast and Icelandic horses", "Esplendores boreales: moto de nieve, Círculo Dorado, costa sur y caballos islandeses"],
      tagline: ["Une semaine dans un hôtel-ranch, entre glaciers et sources chaudes", "A week at a ranch hotel, between glaciers and hot springs", "Una semana en un hotel-rancho, entre glaciares y aguas termales"],
      description: [
        "L'Islande en douceur depuis un hôtel équestre : un safari en motoneige sur le glacier, Gullfoss, Geysir et la boulangerie géothermique, la côte sud, Þingvellir et le Lagon secret, une randonnée vers la rivière chaude de Reykjadalur, les chevaux islandais et la grotte de lave en option.",
        "Iceland at a gentle pace from an equestrian hotel: a snowmobile safari on the glacier, Gullfoss, Geysir and the geothermal bakery, the south coast, Þingvellir and the Secret Lagoon, a hike to the hot river of Reykjadalur, Icelandic horses and the lava cave as an option.",
        "Islandia con calma desde un hotel ecuestre: un safari en moto de nieve por el glaciar, Gullfoss, Geysir y la panadería geotérmica, la costa sur, Þingvellir y la Laguna Secreta, una caminata hasta el río caliente de Reykjadalur, los caballos islandeses y la cueva de lava opcional.",
      ],
      includes: INC(7, ",Safari en motoneige"),
      price: 1768, nights: 7, departureFrom: "Paris", image: "sb1",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,family,solo", maxGuests: 30, order: -44987,
      chapters: [
        isw.chapter(["Glaciers et geysers", "Glaciers and geysers", "Glaciares y géiseres"], ["Motoneige, Cercle d'or et côte sud.", "Snowmobiles, the Golden Circle and the south coast.", "Motos de nieve, Círculo Dorado y costa sur."],
          ["sb1", "sb2", "sb4", "sb5"],
          [
            isw.day(1, ["Reykjavik – Eldhestar", "Reykjavik – Eldhestar", "Reikiavik – Eldhestar"], ["Envol pour l'Islande et transfert à l'hôtel équestre d'Eldhestar.", "Flight to Iceland and transfer to the Eldhestar equestrian hotel.", "Vuelo a Islandia y traslado al hotel ecuestre de Eldhestar."], "sb6"),
            isw.day(2, ["Motoneige – Gullfoss – Geysir", "Snowmobile – Gullfoss – Geysir", "Moto de nieve – Gullfoss – Geysir"], ["Safari en motoneige sur le glacier Langjökull, la cascade de Gullfoss, le geyser Strokkur et le pain cuit dans la terre chaude.", "A snowmobile safari on the Langjökull glacier, the Gullfoss waterfall, the Strokkur geyser and bread baked in the hot ground.", "Safari en moto de nieve por el glaciar Langjökull, la cascada de Gullfoss, el géiser Strokkur y el pan cocido en la tierra caliente."], "sb2"),
            isw.day(3, ["La côte sud", "The south coast", "La costa sur"], X_SOUTH, "sb3"),
            isw.day(4, ["Þingvellir – Lagon secret", "Þingvellir – Secret Lagoon", "Þingvellir – Laguna Secreta"], ["Le parc de Þingvellir, Reykjavik, puis la baignade dans le Lagon secret, source chaude naturelle.", "Þingvellir park, Reykjavik, then a swim in the Secret Lagoon, a natural hot spring.", "El parque de Þingvellir, Reikiavik, y el baño en la Laguna Secreta, fuente termal natural."], "sb4"),
          ]),
        isw.chapter(["Randonnées et chevaux", "Hikes and horses", "Caminatas y caballos"], ["Au rythme islandais.", "At the Icelandic pace.", "Al ritmo islandés."],
          ["sb6", "sb5"],
          [
            isw.day(5, ["Randonnée locale", "A local hike", "Caminata local"], ["Matinée libre, puis randonnée guidée autour de l'hôtel.", "A free morning, then a guided hike around the hotel.", "Mañana libre, y caminata guiada alrededor del hotel."], "sb5"),
            isw.day(6, ["Chevaux islandais – Reykjadalur", "Icelandic horses – Reykjadalur", "Caballos islandeses – Reykjadalur"], ["Le centre équestre et ses chevaux islandais, puis la randonnée jusqu'à la rivière chaude de Reykjadalur, où l'on se baigne.", "The equestrian centre and its Icelandic horses, then the hike to the hot river of Reykjadalur, where you can bathe.", "El centro ecuestre y sus caballos islandeses, y la caminata hasta el río caliente de Reykjadalur, donde uno se baña."], "sb6"),
            isw.day(7, ["Journée libre", "A free day", "Día libre"], ["Journée libre, ou en option la grotte de lave de Raufarhólshellir.", "A free day, or optionally the Raufarhólshellir lava cave.", "Día libre, u opcional la cueva de lava de Raufarhólshellir."], "sb1"),
            isw.day(8, T_HOME, home(["Keflavík", "Keflavík", "Keflavík"]), "sb2"),
          ]),
      ],
    }),

    is.trip({
      slug: "islande-aventure-islandaise-tour-de-l-ile-8j",
      name: ["Aventure islandaise : le tour de l'île, du Cercle d'or à Mývatn et aux fjords de l'Est", "Icelandic adventure: around the island, from the Golden Circle to Mývatn and the East Fjords", "Aventura islandesa: la vuelta a la isla, del Círculo Dorado a Mývatn y los fiordos del Este"],
      tagline: ["La route circulaire en une semaine", "The Ring Road in a week", "La carretera circular en una semana"],
      description: [
        "Le tour complet de l'Islande : le Cercle d'or, Borgarnes, le Skagafjörður et ses fermes à toit de gazon, Akureyri, le lac Mývatn et Dettifoss, les fjords de l'Est, Jökulsárlón, Vík et la côte sud.",
        "The full tour of Iceland: the Golden Circle, Borgarnes, Skagafjörður and its turf-roofed farms, Akureyri, Lake Mývatn and Dettifoss, the East Fjords, Jökulsárlón, Vík and the south coast.",
        "La vuelta completa a Islandia: el Círculo Dorado, Borgarnes, el Skagafjörður y sus granjas de tejado de césped, Akureyri, el lago Mývatn y Dettifoss, los fiordos del Este, Jökulsárlón, Vík y la costa sur.",
      ],
      includes: INC(7),
      price: 2713, nights: 7, departureFrom: "Paris", image: "ai2",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 30, order: -44986,
      chapters: [
        is.chapter(["L'ouest et le nord", "The west and the north", "El oeste y el norte"], ["Cercle d'or, Skagafjörður et Mývatn.", "The Golden Circle, Skagafjörður and Mývatn.", "Círculo Dorado, Skagafjörður y Mývatn."],
          ["ai3", "ai7", "ai5"],
          [
            is.day(1, ...arr(REK), "ai7"),
            is.day(2, ["Cercle d'or – Borgarnes", "Golden Circle – Borgarnes", "Círculo Dorado – Borgarnes"], X_GOLDEN, "ai3"),
            is.day(3, ["Skagafjörður – Akureyri", "Skagafjörður – Akureyri", "Skagafjörður – Akureyri"], ["Les cascades de Hraunfossar, le Skagafjörður et ses chevaux, les fermes à toit de gazon de Glaumbær, puis Akureyri, capitale du nord.", "The Hraunfossar waterfalls, Skagafjörður and its horses, the turf-roofed farms of Glaumbær, then Akureyri, capital of the north.", "Las cascadas de Hraunfossar, el Skagafjörður y sus caballos, las granjas de tejado de césped de Glaumbær, y Akureyri, capital del norte."], "ai5"),
            is.day(4, ["Akureyri – Mývatn", "Akureyri – Mývatn", "Akureyri – Mývatn"], X_MYVATN, "ci4"),
          ]),
        is.chapter(["L'est et le sud", "The east and the south", "El este y el sur"], ["Fjords, glaciers et sable noir.", "Fjords, glaciers and black sand.", "Fiordos, glaciares y arena negra."],
          ["ai4", "ai6", "ai2"],
          [
            is.day(5, ["Mývatn – fjords de l'Est", "Mývatn – East Fjords", "Mývatn – fiordos del Este"], ["Les hauts plateaux désertiques, puis les fjords de l'Est et leurs villages de pêcheurs.", "The desert highlands, then the East Fjords and their fishing villages.", "Las mesetas desérticas, y los fiordos del Este y sus pueblos de pescadores."], "ai6"),
            is.day(6, ["Jökulsárlón – Vík", "Jökulsárlón – Vík", "Jökulsárlón – Vík"], X_JOKUL, "ai4"),
            is.day(7, ["Côte sud – Reykjavik", "South coast – Reykjavik", "Costa sur – Reikiavik"], X_SOUTH, "ai2"),
            is.day(8, T_HOME, home(["Keflavík", "Keflavík", "Keflavík"]), "ai7"),
          ]),
      ],
    }),

    is.trip({
      slug: "islande-charme-de-l-islande-myvatn-snaefellsnes-8j",
      name: ["Charme de l'Islande : la côte sud, Jökulsárlón, Mývatn, Akureyri et Snæfellsnes", "Charm of Iceland: the south coast, Jökulsárlón, Mývatn, Akureyri and Snæfellsnes", "Encanto de Islandia: la costa sur, Jökulsárlón, Mývatn, Akureyri y Snæfellsnes"],
      tagline: ["Le tour de l'île avec la péninsule de Snæfellsnes", "Around the island with the Snæfellsnes peninsula", "La vuelta a la isla con la península de Snæfellsnes"],
      description: [
        "L'Islande en une semaine : la côte sud et Vík, Skaftafell et Jökulsárlón, Egilsstaðir, Dettifoss, Mývatn et Goðafoss, Akureyri et une sortie baleines à Hauganes, la péninsule de Snæfellsnes, puis le Cercle d'or.",
        "Iceland in a week: the south coast and Vík, Skaftafell and Jökulsárlón, Egilsstaðir, Dettifoss, Mývatn and Goðafoss, Akureyri and a whale trip from Hauganes, the Snæfellsnes peninsula, then the Golden Circle.",
        "Islandia en una semana: la costa sur y Vík, Skaftafell y Jökulsárlón, Egilsstaðir, Dettifoss, Mývatn y Goðafoss, Akureyri y una salida de ballenas en Hauganes, la península de Snæfellsnes, y el Círculo Dorado.",
      ],
      includes: INC(7),
      price: 3108, nights: 7, departureFrom: "Bâle", image: "ci1",
      theme: "adventure", feeling: "contentment", travelerTypes: "couples,solo,groups", maxGuests: 30, order: -44985,
      chapters: [
        is.chapter(["Le sud et l'est", "The south and the east", "El sur y el este"], ["Cascades, glaciers et fjords.", "Waterfalls, glaciers and fjords.", "Cascadas, glaciares y fiordos."],
          ["ci3", "ci2", "ci6"],
          [
            is.day(1, ...arr(REK), "ai7"),
            is.day(2, ["Côte sud – Vík", "South coast – Vík", "Costa sur – Vík"], X_SOUTH, "ci3"),
            is.day(3, ["Skaftafell – Jökulsárlón – Egilsstaðir", "Skaftafell – Jökulsárlón – Egilsstaðir", "Skaftafell – Jökulsárlón – Egilsstaðir"], X_JOKUL, "ci2"),
            is.day(4, ["Dettifoss – Mývatn – Akureyri", "Dettifoss – Mývatn – Akureyri", "Dettifoss – Mývatn – Akureyri"], join(X_MYVATN, ["Puis la cascade des dieux, Goðafoss, et Akureyri.", "Then the waterfall of the gods, Goðafoss, and Akureyri.", "Y la cascada de los dioses, Goðafoss, y Akureyri."]), "ci4"),
          ]),
        is.chapter(["Le nord et l'ouest", "The north and the west", "El norte y el oeste"], ["Baleines, Snæfellsnes et Cercle d'or.", "Whales, Snæfellsnes and the Golden Circle.", "Ballenas, Snæfellsnes y Círculo Dorado."],
          ["ci1", "ci5"],
          [
            is.day(5, ["Hauganes – Borgarnes", "Hauganes – Borgarnes", "Hauganes – Borgarnes"], ["Sortie d'observation des baleines depuis Hauganes, puis la route vers l'ouest et Borgarnes.", "A whale-watching trip from Hauganes, then the road west to Borgarnes.", "Salida de avistamiento de ballenas desde Hauganes, y la carretera hacia el oeste y Borgarnes."], "ci5"),
            is.day(6, ["Péninsule de Snæfellsnes", "The Snæfellsnes peninsula", "Península de Snæfellsnes"], X_SNAEF, "ci1"),
            is.day(7, ["Cercle d'or – Reykjavik", "Golden Circle – Reykjavik", "Círculo Dorado – Reikiavik"], X_GOLDEN, "ai3"),
            is.day(8, T_HOME, home(["Keflavík", "Keflavík", "Keflavík"]), "ci6"),
          ]),
      ],
    }),

    is.trip({
      slug: "islande-merveilles-de-l-islande-fjords-de-l-ouest-12j",
      name: ["Merveilles de l'Islande : le tour complet avec les fjords de l'Ouest et Látrabjarg", "Wonders of Iceland: the full tour with the Westfjords and Látrabjarg", "Maravillas de Islandia: la vuelta completa con los fiordos del Oeste y Látrabjarg"],
      tagline: ["Douze jours pour faire le tour de l'Islande, Westfjords compris", "Twelve days to go round Iceland, Westfjords included", "Doce días para dar la vuelta a Islandia, fiordos del Oeste incluidos"],
      description: [
        "La grande boucle islandaise : la côte sud, Jökulsárlón, Höfn, les fjords de l'Est, le canyon de Stuðlagil, Mývatn et Húsavík, Akureyri, les fjords de l'Ouest et Ísafjörður, les falaises à macareux de Látrabjarg, la plage de Rauðasandur, Snæfellsnes, Þingvellir et une fin de séjour au Sky Lagoon.",
        "The great Icelandic loop: the south coast, Jökulsárlón, Höfn, the East Fjords, Stuðlagil canyon, Mývatn and Húsavík, Akureyri, the Westfjords and Ísafjörður, the puffin cliffs of Látrabjarg, Rauðasandur beach, Snæfellsnes, Þingvellir and a final stop at the Sky Lagoon.",
        "El gran circuito islandés: la costa sur, Jökulsárlón, Höfn, los fiordos del Este, el cañón de Stuðlagil, Mývatn y Húsavík, Akureyri, los fiordos del Oeste e Ísafjörður, los acantilados de frailecillos de Látrabjarg, la playa de Rauðasandur, Snæfellsnes, Þingvellir y un final en el Sky Lagoon.",
      ],
      includes: INC(11, ",Entrée au Sky Lagoon"),
      price: 5182, nights: 11, departureFrom: "Luxembourg", image: "mi2",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo,groups", maxGuests: 30, order: -44984,
      chapters: [
        is.chapter(["Le sud et l'est", "The south and the east", "El sur y el este"], ["Cascades, glaciers et canyon.", "Waterfalls, glaciers and canyon.", "Cascadas, glaciares y cañón."],
          ["mi5", "mi4", "mi2", "mi1"],
          [
            is.day(1, ...arr(REK), "ai7"),
            is.day(2, ["Côte sud – Vík", "South coast – Vík", "Costa sur – Vík"], X_SOUTH, "mi5"),
            is.day(3, ["Skaftafell – Jökulsárlón – Höfn", "Skaftafell – Jökulsárlón – Höfn", "Skaftafell – Jökulsárlón – Höfn"], X_JOKUL, "mi4"),
            is.day(4, ["Fjords de l'Est – Egilsstaðir", "East Fjords – Egilsstaðir", "Fiordos del Este – Egilsstaðir"], ["Les fjords de l'Est, leurs montagnes et leurs villages de pêcheurs.", "The East Fjords, their mountains and fishing villages.", "Los fiordos del Este, sus montañas y sus pueblos de pescadores."], "mi2"),
            is.day(5, ["Stuðlagil – Mývatn – Húsavík", "Stuðlagil – Mývatn – Húsavík", "Stuðlagil – Mývatn – Húsavík"], join(["Le canyon de Stuðlagil et ses orgues basaltiques.", "Stuðlagil canyon and its basalt columns.", "El cañón de Stuðlagil y sus columnas de basalto."], X_MYVATN), "mi1"),
          ]),
        is.chapter(["Le nord et les fjords de l'Ouest", "The north and the Westfjords", "El norte y los fiordos del Oeste"], ["Les terres les plus sauvages.", "The wildest lands.", "Las tierras más salvajes."],
          ["mi3", "mi6"],
          [
            is.day(6, ["Akureyri – Hauganes – Laugarbakki", "Akureyri – Hauganes – Laugarbakki", "Akureyri – Hauganes – Laugarbakki"], ["Akureyri, la sortie baleines de Hauganes et les fermes de gazon de Glaumbær.", "Akureyri, the whale trip from Hauganes and the turf farms of Glaumbær.", "Akureyri, la salida de ballenas de Hauganes y las granjas de césped de Glaumbær."], "mi3"),
            is.day(7, ["Fjords de l'Ouest – Ísafjörður", "Westfjords – Ísafjörður", "Fiordos del Oeste – Ísafjörður"], ["Les fjords de l'Ouest, région la plus isolée d'Islande, jusqu'à Ísafjörður.", "The Westfjords, Iceland's most remote region, to Ísafjörður.", "Los fiordos del Oeste, la región más aislada de Islandia, hasta Ísafjörður."], "mi6"),
            is.day(8, ["Dynjandi – Patreksfjörður", "Dynjandi – Patreksfjörður", "Dynjandi – Patreksfjörður"], ["Le col d'Hrafnseyrarheiði et la cascade de Dynjandi, en voile de mariée, puis Patreksfjörður.", "The Hrafnseyrarheiði pass and the bridal-veil Dynjandi waterfall, then Patreksfjörður.", "El paso de Hrafnseyrarheiði y la cascada de Dynjandi, en velo de novia, y Patreksfjörður."], "mi6"),
            is.day(9, ["Látrabjarg – Rauðasandur – Snæfellsnes", "Látrabjarg – Rauðasandur – Snæfellsnes", "Látrabjarg – Rauðasandur – Snæfellsnes"], ["Les falaises de Látrabjarg et leurs macareux, la plage dorée de Rauðasandur, puis le ferry vers Snæfellsnes.", "The Látrabjarg cliffs and their puffins, the golden beach of Rauðasandur, then the ferry to Snæfellsnes.", "Los acantilados de Látrabjarg y sus frailecillos, la playa dorada de Rauðasandur, y el ferri a Snæfellsnes."], "mi3"),
          ]),
        is.chapter(["Snæfellsnes et Reykjavik", "Snæfellsnes and Reykjavik", "Snæfellsnes y Reikiavik"], ["La péninsule et la capitale.", "The peninsula and the capital.", "La península y la capital."],
          ["ci1", "ai7"],
          [
            is.day(10, ["Snæfellsnes – Þingvellir – Reykjavik", "Snæfellsnes – Þingvellir – Reykjavik", "Snæfellsnes – Þingvellir – Reikiavik"], join(X_SNAEF, ["Puis Þingvellir et Reykjavik.", "Then Þingvellir and Reykjavik.", "Y Þingvellir y Reikiavik."]), "ci1"),
            is.day(11, ["Reykjavik – Sky Lagoon", "Reykjavik – Sky Lagoon", "Reikiavik – Sky Lagoon"], ["Reykjavik, puis la baignade au Sky Lagoon, piscine géothermale face à l'océan.", "Reykjavik, then a swim at the Sky Lagoon, a geothermal pool facing the ocean.", "Reikiavik, y el baño en el Sky Lagoon, piscina geotérmica frente al océano."], "ai7"),
            is.day(12, T_HOME, home(["Keflavík", "Keflavík", "Keflavík"]), "mi2"),
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
