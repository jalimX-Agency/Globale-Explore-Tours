// Italy — 12 journey-format trips for the existing "italie" destination: the classic mainland tours,
// Sicily, Sardinia, the Aeolian Islands, Apulia, the lakes and Venice. Near-identical supplier
// programmes and extensions are grouped on one page and described inside each trip. Prices are
// per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-italie-circuits.ts
// Requires scripts/upload-images-ita-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "italie-venise-iles-de-la-lagune-4j": ["358722", "358723", "61102"],
  "italie-cap-sur-les-pouilles-matera-alberobello-lecce-8j": ["88380", "374219"],
  "italie-decouverte-de-la-sicile-palerme-etna-syracuse-8j": ["87818", "34521"],
  "italie-cap-sur-milan-et-les-lacs-italiens-8j": ["327841", "360659"],
  "italie-cap-sur-rome-florence-et-venise-8j": ["160359"],
  "italie-en-etoile-depuis-terracina-rome-naples-capri-8j": ["412138"],
  "italie-incontournables-de-naples-et-des-pouilles-8j": ["334202"],
  "italie-cap-sur-la-toscane-et-les-cinque-terre-8j": ["162300"],
  "italie-cap-sur-rome-naples-et-la-cote-amalfitaine-8j": ["156958"],
  "italie-cap-sur-la-sardaigne-8j": ["34524"],
  "italie-cap-sur-les-iles-eoliennes-stromboli-vulcano-8j": ["34522"],
  "italie-cap-sur-l-italie-du-nord-au-sud-10j": ["336638"],
};

const T_HOME: L3 = ["Retour en France", "Back to France", "Regreso a Francia"];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const home = (city: L3): L3 => [`Transfert à l'aéroport de ${city[0]} et envol pour la France.`, `Transfer to ${city[1]} airport and fly to France.`, `Traslado al aeropuerto de ${city[2]} y vuelo a Francia.`];
const join = (a: L3, b: L3): L3 => [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`, `${a[2]} ${b[2]}`];
const ROME: L3 = ["Rome", "Rome", "Roma"];
const MILAN: L3 = ["Milan", "Milan", "Milán"];
const VENISE: L3 = ["Venise", "Venice", "Venecia"];
const PALERME: L3 = ["Palerme", "Palermo", "Palermo"];
const NAPLES: L3 = ["Naples", "Naples", "Nápoles"];
const BARI: L3 = ["Bari", "Bari", "Bari"];

// Shared day texts
const X_ROME: L3 = ["Rome, la Ville éternelle : le Colisée et le Forum, le Panthéon, la fontaine de Trevi, la place Navone et la place d'Espagne.", "Rome, the Eternal City: the Colosseum and the Forum, the Pantheon, the Trevi Fountain, Piazza Navona and the Spanish Steps.", "Roma, la Ciudad eterna: el Coliseo y el Foro, el Panteón, la Fontana di Trevi, la plaza Navona y la plaza de España."];
const X_VATICAN: L3 = ["La cité du Vatican, la basilique Saint-Pierre et les musées du Vatican avec la chapelle Sixtine.", "Vatican City, St Peter's Basilica and the Vatican Museums with the Sistine Chapel.", "La Ciudad del Vaticano, la basílica de San Pedro y los museos Vaticanos con la capilla Sixtina."];
const X_FLO: L3 = ["Florence, berceau de la Renaissance : le Duomo et sa coupole de Brunelleschi, le Ponte Vecchio, la place de la Seigneurie et le David de Michel-Ange.", "Florence, cradle of the Renaissance: the Duomo and Brunelleschi's dome, the Ponte Vecchio, Piazza della Signoria and Michelangelo's David.", "Florencia, cuna del Renacimiento: el Duomo y su cúpula de Brunelleschi, el Ponte Vecchio, la plaza de la Señoría y el David de Miguel Ángel."];
const X_VEN: L3 = ["Venise : la place Saint-Marc et sa basilique, le palais des Doges, le pont du Rialto et les canaux en vaporetto ou en gondole.", "Venice: St Mark's Square and its basilica, the Doge's Palace, the Rialto Bridge and the canals by vaporetto or gondola.", "Venecia: la plaza de San Marcos y su basílica, el palacio Ducal, el puente de Rialto y los canales en vaporetto o en góndola."];
const X_SIENNE: L3 = ["Sienne et sa place du Campo en coquille, puis San Gimignano et ses tours médiévales, au cœur des collines de Toscane.", "Siena and its shell-shaped Piazza del Campo, then San Gimignano and its medieval towers, in the heart of the Tuscan hills.", "Siena y su plaza del Campo en forma de concha, y San Gimignano y sus torres medievales, en el corazón de las colinas de la Toscana."];
const X_NAPLES: L3 = ["Naples, son centre historique classé par l'Unesco, Spaccanapoli, la galerie Umberto et la baie face au Vésuve, et une vraie pizza napolitaine.", "Naples, its UNESCO-listed historic centre, Spaccanapoli, the Galleria Umberto and the bay facing Vesuvius, and a real Neapolitan pizza.", "Nápoles, su centro histórico declarado por la Unesco, Spaccanapoli, la galería Umberto y la bahía frente al Vesubio, y una auténtica pizza napolitana."];
const X_POMPEI: L3 = ["Pompéi, ville romaine figée par l'éruption du Vésuve en l'an 79, ses rues, ses villas et ses fresques.", "Pompeii, the Roman town frozen by the eruption of Vesuvius in AD 79, its streets, villas and frescoes.", "Pompeya, ciudad romana congelada por la erupción del Vesubio en el año 79, sus calles, sus villas y sus frescos."];
const X_AMALFI: L3 = ["La côte amalfitaine, ses villages accrochés aux falaises, Positano et Amalfi, et ses citronniers.", "The Amalfi Coast, its cliff-hanging villages, Positano and Amalfi, and its lemon groves.", "La costa amalfitana, sus pueblos colgados de los acantilados, Positano y Amalfi, y sus limoneros."];
const X_CAPRI: L3 = ["L'île de Capri, ses Faraglioni, les jardins d'Auguste et Anacapri.", "The island of Capri, its Faraglioni, the Gardens of Augustus and Anacapri.", "La isla de Capri, sus Farallones, los jardines de Augusto y Anacapri."];
const X_ALBEROBELLO: L3 = ["Alberobello et ses trulli, maisons blanches aux toits coniques classées par l'Unesco, puis Monopoli sur l'Adriatique.", "Alberobello and its trulli, white houses with conical roofs listed by UNESCO, then Monopoli on the Adriatic.", "Alberobello y sus trulli, casas blancas de tejados cónicos declaradas por la Unesco, y Monopoli en el Adriático."];
const X_MATERA: L3 = ["Matera et ses Sassi, quartiers troglodytes creusés dans le tuf, parmi les plus anciennes villes habitées du monde.", "Matera and its Sassi, cave districts dug into the tuff, among the oldest inhabited towns in the world.", "Matera y sus Sassi, barrios trogloditas excavados en la toba, entre las ciudades habitadas más antiguas del mundo."];
const X_LECCE: L3 = ["Lecce, la « Florence du baroque », ses églises en pierre dorée, puis Otrante au bord de l'Adriatique.", "Lecce, the 'Florence of the baroque', its churches of golden stone, then Otranto on the Adriatic.", "Lecce, la «Florencia del barroco», sus iglesias de piedra dorada, y Otranto a orillas del Adriático."];
const X_CASTEL: L3 = ["Castel del Monte, château octogonal de Frédéric II, et Trani, sa cathédrale romane face à la mer.", "Castel del Monte, Frederick II's octagonal castle, and Trani, its Romanesque cathedral by the sea.", "Castel del Monte, castillo octogonal de Federico II, y Trani, su catedral románica frente al mar."];
const X_PALERME: L3 = ["Palerme, ses marchés, la chapelle Palatine et ses mosaïques byzantines, la cathédrale et les quatre Canti.", "Palermo, its markets, the Palatine Chapel and its Byzantine mosaics, the cathedral and the Quattro Canti.", "Palermo, sus mercados, la capilla Palatina y sus mosaicos bizantinos, la catedral y los Quattro Canti."];
const X_ETNA: L3 = ["L'Etna, plus haut volcan actif d'Europe, ses cratères éteints à 1 900 mètres, puis Taormine et son théâtre gréco-romain face à la mer.", "Etna, Europe's highest active volcano, its extinct craters at 1,900 metres, then Taormina and its Greco-Roman theatre facing the sea.", "El Etna, el volcán activo más alto de Europa, sus cráteres apagados a 1.900 metros, y Taormina y su teatro grecorromano frente al mar."];
const X_SYRA: L3 = ["Syracuse, son théâtre grec et l'île d'Ortigia, puis Noto, joyau baroque.", "Syracuse, its Greek theatre and the island of Ortigia, then Noto, a baroque jewel.", "Siracusa, su teatro griego y la isla de Ortigia, y Noto, joya barroca."];
const X_AGRI: L3 = ["La vallée des Temples d'Agrigente, l'un des plus beaux ensembles grecs hors de Grèce.", "The Valley of the Temples at Agrigento, one of the finest Greek sites outside Greece.", "El valle de los Templos de Agrigento, uno de los conjuntos griegos más bellos fuera de Grecia."];
const X_LAKES: L3 = ["Le lac de Côme et ses villas, puis le lac de Garde.", "Lake Como and its villas, then Lake Garda.", "El lago de Como y sus villas, y el lago de Garda."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const it = circuitBuilders({ destinationSlug: "italie", imagePrefix: "ita", season: { label: ["Avril à octobre", "April to October", "Abril a octubre"], months: "april,may,june,july,august,september,october" } });
  const yr = circuitBuilders({ destinationSlug: "italie", imagePrefix: "ita", season: { label: ["Toute l'année", "All year round", "Todo el año"], months: "january,february,march,april,may,june,july,august,september,october,november,december" } });
  const INC = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtels 3* et 4*,Transport en autocar,Visites du programme,Guide-accompagnateur francophone${extra}`,
    `Flights from France,Transfers,${n} nights in 3* and 4* hotels,Transport by coach,Visits in the programme,French-speaking tour leader${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hoteles de 3* y 4*,Transporte en autocar,Visitas del programa,Guía acompañante francófono${extra}`,
  ];

  const journeyTrips = [
    yr.trip({
      slug: "italie-venise-iles-de-la-lagune-4j",
      name: ["Cap sur Venise : la Sérénissime et les îles de la lagune", "Heading for Venice: La Serenissima and the islands of the lagoon", "Rumbo a Venecia: la Serenísima y las islas de la laguna"],
      tagline: ["Un long week-end à Venise, Murano, Burano et un tour en gondole", "A long weekend in Venice, Murano, Burano and a gondola ride", "Un fin de semana largo en Venecia, Murano, Burano y un paseo en góndola"],
      description: [
        "Une escapade à Venise : la place Saint-Marc et le palais des Doges, les îles de Murano et ses verriers, Burano et ses maisons colorées, Torcello, puis un tour en gondole sur les canaux. En version courte de trois jours à partir de 332 €, ou pendant le carnaval de Venise à partir de 534 € par personne.",
        "A getaway to Venice: St Mark's Square and the Doge's Palace, the islands of Murano and its glassmakers, Burano and its colourful houses, Torcello, then a gondola ride on the canals. As a short three-day version from €332, or during the Venice carnival from €534 per person.",
        "Una escapada a Venecia: la plaza de San Marcos y el palacio Ducal, las islas de Murano y sus vidrieros, Burano y sus casas de colores, Torcello, y un paseo en góndola por los canales. En versión corta de tres días desde 332 €, o durante el carnaval de Venecia desde 534 € por persona.",
      ],
      includes: ["Vols depuis la France,Transferts,3 nuits en hôtel,Excursion aux îles de la lagune,Tour en gondole", "Flights from France,Transfers,3 nights in a hotel,Excursion to the lagoon islands,Gondola ride", "Vuelos desde Francia,Traslados,3 noches en hotel,Excursión a las islas de la laguna,Paseo en góndola"],
      price: 441, nights: 3, departureFrom: "Barcelone", image: "cv4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,solo", maxGuests: 38, order: -47000,
      chapters: [
        yr.chapter([VENISE[0], VENISE[1], VENISE[2]], ["La ville sur l'eau.", "The city on the water.", "La ciudad sobre el agua."],
          ["ve1", "ve3", "cv4", "cv5", "cv1", "cv6"],
          [
            yr.day(1, ...arr(VENISE), "ve1"),
            yr.day(2, ["Les îles de la lagune", "The lagoon islands", "Las islas de la laguna"], ["Murano et ses souffleurs de verre, Burano et ses maisons de pêcheurs colorées, et Torcello, berceau de Venise.", "Murano and its glassblowers, Burano and its colourful fishermen's houses, and Torcello, the cradle of Venice.", "Murano y sus sopladores de vidrio, Burano y sus casas de pescadores de colores, y Torcello, cuna de Venecia."], "cv5"),
            yr.day(3, ["Venise et la gondole", "Venice and the gondola", "Venecia y la góndola"], join(X_VEN, ["Temps libre et tour en gondole.", "Free time and a gondola ride.", "Tiempo libre y paseo en góndola."]), "cv4"),
            yr.day(4, T_HOME, home(VENISE), "ve3"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-cap-sur-les-pouilles-matera-alberobello-lecce-8j",
      name: ["Cap sur les Pouilles : Castel del Monte, Matera, Alberobello, Lecce et Ostuni", "Heading for Apulia: Castel del Monte, Matera, Alberobello, Lecce and Ostuni", "Rumbo a Apulia: Castel del Monte, Matera, Alberobello, Lecce y Ostuni"],
      tagline: ["Le talon de la botte, des trulli aux Sassi de Matera", "The heel of the boot, from the trulli to the Sassi of Matera", "El tacón de la bota, de los trulli a los Sassi de Matera"],
      description: [
        "Les Pouilles en une semaine : Trani et Castel del Monte, les Sassi de Matera, Alberobello et ses trulli, Monopoli, Tarente, Lecce la baroque, Galatina et Otrante en option, puis Ostuni, la ville blanche, et Cisternino. Avec trois nuits de détente au resort GranSerena en fin de circuit (11 jours) à partir de 1 824 € par personne.",
        "Apulia in a week: Trani and Castel del Monte, the Sassi of Matera, Alberobello and its trulli, Monopoli, Taranto, baroque Lecce, Galatina and Otranto as options, then Ostuni, the white town, and Cisternino. With three relaxing nights at the GranSerena resort at the end of the tour (11 days) from €1,824 per person.",
        "Apulia en una semana: Trani y Castel del Monte, los Sassi de Matera, Alberobello y sus trulli, Monopoli, Tarento, Lecce la barroca, Galatina y Otranto opcionales, y Ostuni, la ciudad blanca, y Cisternino. Con tres noches de descanso en el resort GranSerena al final del circuito (11 días) desde 1.824 € por persona.",
      ],
      includes: INC(7),
      price: 1141, nights: 7, departureFrom: "Lyon", image: "po2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46999,
      chapters: [
        it.chapter(["Bari, Matera et les trulli", "Bari, Matera and the trulli", "Bari, Matera y los trulli"], ["Le nord des Pouilles.", "Northern Apulia.", "El norte de Apulia."],
          ["po5", "po1", "po2"],
          [
            it.day(1, ...arr(BARI), "po6"),
            it.day(2, ["Trani – Castel del Monte", "Trani – Castel del Monte", "Trani – Castel del Monte"], X_CASTEL, "np4"),
            it.day(3, ["Altamura – Matera", "Altamura – Matera", "Altamura – Matera"], join(["Altamura et son pain renommé, puis", "Altamura and its famous bread, then", "Altamura y su famoso pan, y"], [X_MATERA[0].charAt(0).toLowerCase() + X_MATERA[0].slice(1), X_MATERA[1], X_MATERA[2].charAt(0).toLowerCase() + X_MATERA[2].slice(1)]), "po5"),
            it.day(4, ["Alberobello – Monopoli", "Alberobello – Monopoli", "Alberobello – Monopoli"], X_ALBEROBELLO, "po1"),
          ]),
        it.chapter(["Le Salento", "Salento", "El Salento"], ["Lecce et la ville blanche.", "Lecce and the white town.", "Lecce y la ciudad blanca."],
          ["po4", "po8", "np8"],
          [
            it.day(5, ["Tarente – Lecce", "Taranto – Lecce", "Tarento – Lecce"], ["Tarente entre ses deux mers, puis Lecce.", "Taranto between its two seas, then Lecce.", "Tarento entre sus dos mares, y Lecce."], "np8"),
            it.day(6, ["Lecce – Otrante", "Lecce – Otranto", "Lecce – Otranto"], join(X_LECCE, ["Galatina en option.", "Galatina as an option.", "Galatina opcional."]), "po8"),
            it.day(7, ["Ostuni – Cisternino", "Ostuni – Cisternino", "Ostuni – Cisternino"], ["Ostuni, la ville blanche perchée au-dessus des oliveraies, et Cisternino, l'un des plus beaux villages d'Italie.", "Ostuni, the white town perched above the olive groves, and Cisternino, one of Italy's most beautiful villages.", "Ostuni, la ciudad blanca encaramada sobre los olivares, y Cisternino, uno de los pueblos más bellos de Italia."], "po4"),
            it.day(8, T_HOME, home(BARI), "po2"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-decouverte-de-la-sicile-palerme-etna-syracuse-8j",
      name: ["Découverte de la Sicile : Palerme, Agrigente, Syracuse, l'Etna et Taormine", "Discovering Sicily: Palermo, Agrigento, Syracuse, Etna and Taormina", "Descubrimiento de Sicilia: Palermo, Agrigento, Siracusa, el Etna y Taormina"],
      tagline: ["Le tour de l'île, des temples grecs au volcan", "Around the island, from Greek temples to the volcano", "La vuelta a la isla, de los templos griegos al volcán"],
      description: [
        "Le tour de la Sicile en une semaine : Palerme, Monreale et Mondello, Erice, Sélinonte, la vallée des Temples d'Agrigente, les mosaïques de la villa romaine de Piazza Armerina, Syracuse et Noto, l'Etna et Taormine, puis Cefalù. Version Cap sur la Sicile, par Ségeste et Messine, à partir de 1 379 € par personne.",
        "Around Sicily in a week: Palermo, Monreale and Mondello, Erice, Selinunte, the Valley of the Temples at Agrigento, the mosaics of the Roman villa at Piazza Armerina, Syracuse and Noto, Etna and Taormina, then Cefalù. The Heading for Sicily version, via Segesta and Messina, from €1,379 per person.",
        "La vuelta a Sicilia en una semana: Palermo, Monreale y Mondello, Erice, Selinunte, el valle de los Templos de Agrigento, los mosaicos de la villa romana de Piazza Armerina, Siracusa y Noto, el Etna y Taormina, y Cefalú. Versión Rumbo a Sicilia, por Segesta y Mesina, desde 1.379 € por persona.",
      ],
      includes: INC(7),
      price: 1091, nights: 7, departureFrom: "Toulouse", image: "si6",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46998,
      chapters: [
        it.chapter(["L'ouest sicilien", "Western Sicily", "La Sicilia occidental"], ["Palerme, Erice et Agrigente.", "Palermo, Erice and Agrigento.", "Palermo, Erice y Agrigento."],
          ["si3", "si2", "si4"],
          [
            it.day(1, ...arr(PALERME), "si3"),
            it.day(2, ["Palerme – Monreale – Mondello", "Palermo – Monreale – Mondello", "Palermo – Monreale – Mondello"], join(X_PALERME, ["Puis la cathédrale de Monreale et la plage de Mondello.", "Then Monreale cathedral and Mondello beach.", "Y la catedral de Monreale y la playa de Mondello."]), "si2"),
            it.day(3, ["Erice – Sélinonte", "Erice – Selinunte", "Erice – Selinunte"], ["Erice, village médiéval perché au-dessus de la mer, et les salines de Trapani, puis Sélinonte.", "Erice, a medieval village perched above the sea, and the Trapani salt pans, then Selinunte.", "Erice, pueblo medieval encaramado sobre el mar, y las salinas de Trapani, y Selinunte."], "si3"),
            it.day(4, ["Agrigente – Piazza Armerina", "Agrigento – Piazza Armerina", "Agrigento – Piazza Armerina"], join(X_AGRI, ["Puis les mosaïques de la villa du Casale à Piazza Armerina.", "Then the mosaics of the Villa del Casale at Piazza Armerina.", "Y los mosaicos de la villa del Casale en Piazza Armerina."]), "si4"),
          ]),
        it.chapter(["L'est sicilien", "Eastern Sicily", "La Sicilia oriental"], ["Syracuse, l'Etna et Cefalù.", "Syracuse, Etna and Cefalù.", "Siracusa, el Etna y Cefalú."],
          ["si1", "si6", "si5"],
          [
            it.day(5, ["Syracuse – Noto", "Syracuse – Noto", "Siracusa – Noto"], X_SYRA, "si1"),
            it.day(6, ["Etna – Taormine", "Etna – Taormina", "Etna – Taormina"], X_ETNA, "si6"),
            it.day(7, ["Castelbuono – Cefalù", "Castelbuono – Cefalù", "Castelbuono – Cefalú"], ["Le village de Castelbuono dans les Madonies, puis Cefalù, sa cathédrale normande et sa plage.", "The village of Castelbuono in the Madonie, then Cefalù, its Norman cathedral and beach.", "El pueblo de Castelbuono en las Madonías, y Cefalú, su catedral normanda y su playa."], "si5"),
            it.day(8, T_HOME, home(PALERME), "si3"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-cap-sur-milan-et-les-lacs-italiens-8j",
      name: ["Cap sur Milan et les lacs italiens : Côme, Garde, Vérone et le lac Majeur", "Heading for Milan and the Italian lakes: Como, Garda, Verona and Lake Maggiore", "Rumbo a Milán y los lagos italianos: Como, Garda, Verona y el lago Mayor"],
      tagline: ["Villas, îles et villages au pied des Alpes", "Villas, islands and villages at the foot of the Alps", "Villas, islas y pueblos al pie de los Alpes"],
      description: [
        "Les grands lacs du nord de l'Italie : le lac de Côme, le lac de Garde et Sirmione, Vérone, la ville haute de Bergame, le lac Majeur et les îles Borromées, le lac d'Orta en option, puis une journée à Milan. Aussi en liberté avec voiture de location, à partir de 803 € par personne.",
        "The great lakes of northern Italy: Lake Como, Lake Garda and Sirmione, Verona, the upper town of Bergamo, Lake Maggiore and the Borromean Islands, Lake Orta as an option, then a day in Milan. Also as a self-drive tour with a rental car, from €803 per person.",
        "Los grandes lagos del norte de Italia: el lago de Como, el lago de Garda y Sirmione, Verona, la ciudad alta de Bérgamo, el lago Mayor y las islas Borromeas, el lago de Orta opcional, y un día en Milán. También por libre con coche de alquiler, desde 803 € por persona.",
      ],
      includes: INC(7),
      price: 1276, nights: 7, departureFrom: "Barcelone", image: "la5",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46997,
      chapters: [
        it.chapter(["Côme, Garde et Vérone", "Como, Garda and Verona", "Como, Garda y Verona"], ["Les lacs de l'est.", "The eastern lakes.", "Los lagos del este."],
          ["la5", "la8", "la1"],
          [
            it.day(1, ...arr(MILAN), "la3"),
            it.day(2, ["Lac de Côme – lac de Garde", "Lake Como – Lake Garda", "Lago de Como – lago de Garda"], X_LAKES, "la5"),
            it.day(3, ["Vérone – lac de Garde", "Verona – Lake Garda", "Verona – lago de Garda"], ["Vérone, ses arènes romaines et la maison de Juliette.", "Verona, its Roman arena and Juliet's house.", "Verona, su arena romana y la casa de Julieta."], "la8"),
            it.day(4, ["Sirmione – Bergame – lac Majeur", "Sirmione – Bergamo – Lake Maggiore", "Sirmione – Bérgamo – lago Mayor"], ["Sirmione et son château sur l'eau, la ville haute de Bergame, puis le lac Majeur.", "Sirmione and its castle on the water, the upper town of Bergamo, then Lake Maggiore.", "Sirmione y su castillo sobre el agua, la ciudad alta de Bérgamo, y el lago Mayor."], "la7"),
          ]),
        it.chapter(["Le lac Majeur et Milan", "Lake Maggiore and Milan", "El lago Mayor y Milán"], ["Les îles Borromées et la capitale lombarde.", "The Borromean Islands and the Lombard capital.", "Las islas Borromeas y la capital lombarda."],
          ["la6", "la2", "la3", "la4"],
          [
            it.day(5, ["Les îles Borromées", "The Borromean Islands", "Las islas Borromeas"], ["En bateau vers les îles Borromées : l'Isola Bella et ses jardins baroques en terrasses, l'île des Pêcheurs.", "By boat to the Borromean Islands: Isola Bella and its terraced baroque gardens, the Fishermen's Island.", "En barco a las islas Borromeas: la Isola Bella y sus jardines barrocos en terrazas, la isla de los Pescadores."], "la6"),
            it.day(6, ["Lac Majeur", "Lake Maggiore", "Lago Mayor"], ["Journée libre, ou en option le lac d'Orta et les jardins de la villa Taranto.", "A free day, or optionally Lake Orta and the gardens of Villa Taranto.", "Día libre, u opcional el lago de Orta y los jardines de la villa Taranto."], "la2"),
            it.day(7, MILAN, ["Milan : le Dôme et ses flèches de marbre, la galerie Victor-Emmanuel et la Scala.", "Milan: the Duomo and its marble spires, the Galleria Vittorio Emanuele and La Scala.", "Milán: el Duomo y sus agujas de mármol, la galería Víctor Manuel y la Scala."], "la4"),
            it.day(8, T_HOME, home(MILAN), "la3"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-cap-sur-rome-florence-et-venise-8j",
      name: ["Cap sur Rome, Florence et Venise : les trois villes d'art de l'Italie", "Heading for Rome, Florence and Venice: Italy's three cities of art", "Rumbo a Roma, Florencia y Venecia: las tres ciudades del arte de Italia"],
      tagline: ["La Ville éternelle, la Renaissance et la Sérénissime en une semaine", "The Eternal City, the Renaissance and La Serenissima in a week", "La Ciudad eterna, el Renacimiento y la Serenísima en una semana"],
      description: [
        "Le grand classique italien : deux jours à Rome, la Toscane avec Sienne et San Gimignano, Florence, puis deux jours à Venise.",
        "The great Italian classic: two days in Rome, Tuscany with Siena and San Gimignano, Florence, then two days in Venice.",
        "El gran clásico italiano: dos días en Roma, la Toscana con Siena y San Gimignano, Florencia, y dos días en Venecia.",
      ],
      includes: INC(7),
      price: 1337, nights: 7, departureFrom: "Lyon", image: "rf6",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46996,
      chapters: [
        it.chapter(["Rome et la Toscane", "Rome and Tuscany", "Roma y la Toscana"], ["Ville éternelle et collines.", "The Eternal City and the hills.", "Ciudad eterna y colinas."],
          ["rf3", "rf5", "rf2"],
          [
            it.day(1, ...arr(ROME), "rf5"),
            it.day(2, ROME, X_ROME, "rf3"),
            it.day(3, ["Rome – Chianciano", "Rome – Chianciano", "Roma – Chianciano"], join(X_VATICAN, ["Puis route vers la Toscane.", "Then the drive to Tuscany.", "Y carretera hacia la Toscana."]), "rf5"),
            it.day(4, ["Sienne – San Gimignano", "Siena – San Gimignano", "Siena – San Gimignano"], X_SIENNE, "rf2"),
          ]),
        it.chapter(["Florence et Venise", "Florence and Venice", "Florencia y Venecia"], ["La Renaissance et la lagune.", "The Renaissance and the lagoon.", "El Renacimiento y la laguna."],
          ["rf6", "rf1", "ve3"],
          [
            it.day(5, ["Florence", "Florence", "Florencia"], X_FLO, "rf6"),
            it.day(6, ["Montecatini – Venise", "Montecatini – Venice", "Montecatini – Venecia"], ["Traversée des Apennins jusqu'à Venise.", "Across the Apennines to Venice.", "Travesía de los Apeninos hasta Venecia."], "ve3"),
            it.day(7, VENISE, X_VEN, "rf1"),
            it.day(8, T_HOME, home(VENISE), "ve1"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-en-etoile-depuis-terracina-rome-naples-capri-8j",
      name: ["L'Italie en étoile depuis Terracina : Rome, Naples, Pompéi et Capri", "Italy from a base in Terracina: Rome, Naples, Pompeii and Capri", "Italia desde Terracina: Roma, Nápoles, Pompeya y Capri"],
      tagline: ["Un seul hôtel en bord de mer et des excursions vers les grands sites", "One seaside hotel and excursions to the great sights", "Un solo hotel junto al mar y excursiones a los grandes lugares"],
      description: [
        "Une semaine sans changer d'hôtel, à Terracina sur la Riviera d'Ulysse : Rome, Naples et Pompéi ou le Vatican et la Rome baroque en option, l'île de Capri, puis Gaète et Sperlonga, villages blancs au bord de la mer Tyrrhénienne.",
        "A week without changing hotels, in Terracina on the Riviera of Ulysses: Rome, Naples and Pompeii or the Vatican and baroque Rome as options, the island of Capri, then Gaeta and Sperlonga, white villages on the Tyrrhenian Sea.",
        "Una semana sin cambiar de hotel, en Terracina en la Riviera de Ulises: Roma, Nápoles y Pompeya o el Vaticano y la Roma barroca opcionales, la isla de Capri, y Gaeta y Sperlonga, pueblos blancos a orillas del mar Tirreno.",
      ],
      includes: INC(7),
      price: 1337, nights: 7, departureFrom: "Barcelone", image: "te4",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46995,
      chapters: [
        it.chapter(["Terracina et Rome", "Terracina and Rome", "Terracina y Roma"], ["La Riviera d'Ulysse et la Ville éternelle.", "The Riviera of Ulysses and the Eternal City.", "La Riviera de Ulises y la Ciudad eterna."],
          ["te5", "te6", "te3"],
          [
            it.day(1, ["Rome – Terracina", "Rome – Terracina", "Roma – Terracina"], ["Envol pour Rome et route vers Terracina, au bord de la mer.", "Flight to Rome and the drive to Terracina, by the sea.", "Vuelo a Roma y carretera hacia Terracina, junto al mar."], "te5"),
            it.day(2, ["Terracina", "Terracina", "Terracina"], ["Terracina, son temple de Jupiter Anxur dominant la mer et sa vieille ville.", "Terracina, its Temple of Jupiter Anxur overlooking the sea and its old town.", "Terracina, su templo de Júpiter Anxur que domina el mar y su ciudad vieja."], "te5"),
            it.day(3, ROME, X_ROME, "te6"),
            it.day(4, ["Naples et Pompéi", "Naples and Pompeii", "Nápoles y Pompeya"], ["Journée libre, ou en option Naples et Pompéi.", "A free day, or optionally Naples and Pompeii.", "Día libre, u opcional Nápoles y Pompeya."], "te1"),
            it.day(5, ["Le Vatican", "The Vatican", "El Vaticano"], ["Journée libre, ou en option la cité du Vatican et la Rome baroque.", "A free day, or optionally Vatican City and baroque Rome.", "Día libre, u opcional la Ciudad del Vaticano y la Roma barroca."], "te3"),
          ]),
        it.chapter(["Capri et la côte", "Capri and the coast", "Capri y la costa"], ["L'île et les villages blancs.", "The island and the white villages.", "La isla y los pueblos blancos."],
          ["te4", "te2"],
          [
            it.day(6, ["Capri", "Capri", "Capri"], X_CAPRI, "rn4"),
            it.day(7, ["Gaète et Sperlonga", "Gaeta and Sperlonga", "Gaeta y Sperlonga"], ["Gaète et son sanctuaire de la Montagne Fendue, puis Sperlonga, village blanc perché sur la mer.", "Gaeta and its Split Mountain sanctuary, then Sperlonga, a white village perched above the sea.", "Gaeta y su santuario de la Montaña Partida, y Sperlonga, pueblo blanco encaramado sobre el mar."], "te4"),
            it.day(8, T_HOME, home(ROME), "te2"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-incontournables-de-naples-et-des-pouilles-8j",
      name: ["Les incontournables de Naples et des Pouilles : Pompéi, Sorrente, Alberobello, Lecce et Matera", "Highlights of Naples and Apulia: Pompeii, Sorrento, Alberobello, Lecce and Matera", "Lo esencial de Nápoles y Apulia: Pompeya, Sorrento, Alberobello, Lecce y Matera"],
      tagline: ["Le sud de l'Italie, de la baie de Naples à l'Adriatique", "Southern Italy, from the Bay of Naples to the Adriatic", "El sur de Italia, de la bahía de Nápoles al Adriático"],
      description: [
        "Le Mezzogiorno en une semaine : Naples, Sorrente et Pompéi, la traversée vers les Pouilles par Castel del Monte et Trani, Alberobello et ses trulli, Bari, Lecce et Otrante, puis Matera sur le chemin du retour.",
        "The Mezzogiorno in a week: Naples, Sorrento and Pompeii, the crossing to Apulia via Castel del Monte and Trani, Alberobello and its trulli, Bari, Lecce and Otranto, then Matera on the way back.",
        "El Mezzogiorno en una semana: Nápoles, Sorrento y Pompeya, la travesía hacia Apulia por Castel del Monte y Trani, Alberobello y sus trulli, Bari, Lecce y Otranto, y Matera en el camino de regreso.",
      ],
      includes: INC(7),
      price: 1359, nights: 7, departureFrom: "Bordeaux", image: "np7",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46994,
      chapters: [
        it.chapter(["Naples et sa baie", "Naples and its bay", "Nápoles y su bahía"], ["La ville, Sorrente et Pompéi.", "The city, Sorrento and Pompeii.", "La ciudad, Sorrento y Pompeya."],
          ["np1", "np2", "np3"],
          [
            it.day(1, ...arr(NAPLES), "np1"),
            it.day(2, NAPLES, X_NAPLES, "np1"),
            it.day(3, ["Sorrente – Pompéi", "Sorrento – Pompeii", "Sorrento – Pompeya"], join(["Sorrente et ses citronniers au-dessus de la baie.", "Sorrento and its lemon groves above the bay.", "Sorrento y sus limoneros sobre la bahía."], X_POMPEI), "np3"),
          ]),
        it.chapter(["Les Pouilles et Matera", "Apulia and Matera", "Apulia y Matera"], ["Châteaux, trulli et baroque.", "Castles, trulli and baroque.", "Castillos, trulli y barroco."],
          ["np4", "np5", "np6", "np7", "np8"],
          [
            it.day(4, ["Castel del Monte – Trani – Alberobello", "Castel del Monte – Trani – Alberobello", "Castel del Monte – Trani – Alberobello"], X_CASTEL, "np4"),
            it.day(5, ["Bari – Alberobello", "Bari – Alberobello", "Bari – Alberobello"], ["La vieille ville de Bari et la basilique Saint-Nicolas, puis les trulli d'Alberobello.", "Bari's old town and the Basilica of St Nicholas, then the trulli of Alberobello.", "El casco antiguo de Bari y la basílica de San Nicolás, y los trulli de Alberobello."], "np7"),
            it.day(6, ["Otrante – Lecce", "Otranto – Lecce", "Otranto – Lecce"], X_LECCE, "np8"),
            it.day(7, ["Matera – Naples", "Matera – Naples", "Matera – Nápoles"], join(X_MATERA, ["Retour vers Naples.", "Back to Naples.", "Regreso a Nápoles."]), "po5"),
            it.day(8, T_HOME, home(NAPLES), "np2"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-cap-sur-la-toscane-et-les-cinque-terre-8j",
      name: ["Cap sur la Toscane et les Cinque Terre : Florence, Sienne, Pise, Lucques et le Chianti", "Heading for Tuscany and the Cinque Terre: Florence, Siena, Pisa, Lucca and Chianti", "Rumbo a la Toscana y las Cinque Terre: Florencia, Siena, Pisa, Lucca y el Chianti"],
      tagline: ["Une semaine en étoile au cœur de la Toscane, avec Portofino et les Cinque Terre", "A week based in the heart of Tuscany, with Portofino and the Cinque Terre", "Una semana en el corazón de la Toscana, con Portofino y las Cinque Terre"],
      description: [
        "La Toscane depuis Montecatini Terme : Portofino et la Riviera ligure, Florence, Sienne et San Gimignano en option, Pise et Lucques, une journée dans les vignobles du Chianti, puis les villages colorés des Cinque Terre.",
        "Tuscany from Montecatini Terme: Portofino and the Ligurian Riviera, Florence, Siena and San Gimignano as an option, Pisa and Lucca, a day in the Chianti vineyards, then the colourful villages of the Cinque Terre.",
        "La Toscana desde Montecatini Terme: Portofino y la Riviera de Liguria, Florencia, Siena y San Gimignano opcionales, Pisa y Lucca, un día en los viñedos del Chianti, y los pueblos de colores de las Cinque Terre.",
      ],
      includes: INC(7),
      price: 1417, nights: 7, departureFrom: "Barcelone", image: "to5",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46993,
      chapters: [
        it.chapter(["Portofino et Florence", "Portofino and Florence", "Portofino y Florencia"], ["La Riviera et la Renaissance.", "The Riviera and the Renaissance.", "La Riviera y el Renacimiento."],
          ["to3", "to4", "to6"],
          [
            it.day(1, ...arr(MILAN), "la3"),
            it.day(2, ["Rapallo – Portofino – Montecatini", "Rapallo – Portofino – Montecatini", "Rapallo – Portofino – Montecatini"], ["La Riviera ligure, Rapallo et le petit port de Portofino, puis Montecatini Terme.", "The Ligurian Riviera, Rapallo and the little port of Portofino, then Montecatini Terme.", "La Riviera de Liguria, Rapallo y el pequeño puerto de Portofino, y Montecatini Terme."], "to5"),
            it.day(3, ["Florence", "Florence", "Florencia"], X_FLO, "to3"),
            it.day(4, ["Sienne et San Gimignano", "Siena and San Gimignano", "Siena y San Gimignano"], join(["Journée libre, ou en option :", "A free day, or as an option:", "Día libre, u opcional:"], X_SIENNE), "to8"),
          ]),
        it.chapter(["Pise, le Chianti et les Cinque Terre", "Pisa, Chianti and the Cinque Terre", "Pisa, el Chianti y las Cinque Terre"], ["Tour penchée, vignobles et villages colorés.", "Leaning tower, vineyards and colourful villages.", "Torre inclinada, viñedos y pueblos de colores."],
          ["to7", "to1"],
          [
            it.day(5, ["Pise – Lucques", "Pisa – Lucca", "Pisa – Lucca"], ["La place des Miracles de Pise et sa tour penchée, puis Lucques et ses remparts.", "Pisa's Piazza dei Miracoli and its leaning tower, then Lucca and its ramparts.", "La plaza de los Milagros de Pisa y su torre inclinada, y Lucca y sus murallas."], "to7"),
            it.day(6, ["Le Chianti", "Chianti", "El Chianti"], ["Les collines du Chianti, leurs villages et une dégustation de vin dans un domaine.", "The Chianti hills, their villages and a wine tasting at an estate.", "Las colinas del Chianti, sus pueblos y una cata de vino en una bodega."], "ns6"),
            it.day(7, ["Cinque Terre – Milan", "Cinque Terre – Milan", "Cinque Terre – Milán"], ["Les cinq villages des Cinque Terre accrochés aux falaises, en train et en bateau, puis Milan.", "The five villages of the Cinque Terre clinging to the cliffs, by train and boat, then Milan.", "Los cinco pueblos de las Cinque Terre colgados de los acantilados, en tren y en barco, y Milán."], "to1"),
            it.day(8, T_HOME, home(MILAN), "to4"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-cap-sur-rome-naples-et-la-cote-amalfitaine-8j",
      name: ["Cap sur Rome, Naples et la côte amalfitaine : Pompéi, Capri et la Riviera d'Ulysse", "Heading for Rome, Naples and the Amalfi Coast: Pompeii, Capri and the Riviera of Ulysses", "Rumbo a Roma, Nápoles y la costa amalfitana: Pompeya, Capri y la Riviera de Ulises"],
      tagline: ["La baie de Naples et ses trésors, encadrés par deux séjours à Rome", "The Bay of Naples and its treasures, framed by two stays in Rome", "La bahía de Nápoles y sus tesoros, entre dos estancias en Roma"],
      description: [
        "Le sud de l'Italie en une semaine : Rome, trois jours dans la région de Naples avec Naples, Pompéi, la côte amalfitaine et Capri, la Riviera d'Ulysse, puis retour à Rome et le Vatican.",
        "Southern Italy in a week: Rome, three days around Naples with Naples, Pompeii, the Amalfi Coast and Capri, the Riviera of Ulysses, then back to Rome and the Vatican.",
        "El sur de Italia en una semana: Roma, tres días en la región de Nápoles con Nápoles, Pompeya, la costa amalfitana y Capri, la Riviera de Ulises, y regreso a Roma y el Vaticano.",
      ],
      includes: INC(7),
      price: 1428, nights: 7, departureFrom: "Barcelone", image: "rn4",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46992,
      chapters: [
        it.chapter(["La baie de Naples", "The Bay of Naples", "La bahía de Nápoles"], ["Naples, Pompéi, Amalfi et Capri.", "Naples, Pompeii, Amalfi and Capri.", "Nápoles, Pompeya, Amalfi y Capri."],
          ["rn3", "rn2", "rn5", "rn4", "rn6"],
          [
            it.day(1, ...arr(ROME), "rf5"),
            it.day(2, ["Rome – Naples", "Rome – Naples", "Roma – Nápoles"], X_NAPLES, "rn2"),
            it.day(3, ["Pompéi – côte amalfitaine", "Pompeii – the Amalfi Coast", "Pompeya – costa amalfitana"], join(X_POMPEI, X_AMALFI), "rn5"),
            it.day(4, ["Capri", "Capri", "Capri"], X_CAPRI, "rn4"),
            it.day(5, ["La Riviera d'Ulysse", "The Riviera of Ulysses", "La Riviera de Ulises"], ["La côte entre Gaète et Sperlonga, ses plages et ses villages blancs.", "The coast between Gaeta and Sperlonga, its beaches and white villages.", "La costa entre Gaeta y Sperlonga, sus playas y sus pueblos blancos."], "rn6"),
          ]),
        it.chapter(["Rome", "Rome", "Roma"], ["La Ville éternelle.", "The Eternal City.", "La Ciudad eterna."],
          ["rf3", "rf5"],
          [
            it.day(6, ["Riviera d'Ulysse – Rome", "Riviera of Ulysses – Rome", "Riviera de Ulises – Roma"], X_ROME, "rf3"),
            it.day(7, ROME, X_VATICAN, "te3"),
            it.day(8, T_HOME, home(ROME), "rf5"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-cap-sur-la-sardaigne-8j",
      name: ["Cap sur la Sardaigne : la Maddalena, Alghero, Barumini, Cagliari et la Barbagia", "Heading for Sardinia: La Maddalena, Alghero, Barumini, Cagliari and the Barbagia", "Rumbo a Cerdeña: La Maddalena, Alghero, Barumini, Cagliari y la Barbagia"],
      tagline: ["Le tour de l'île aux eaux turquoise et aux nuraghes", "Around the island of turquoise waters and nuraghi", "La vuelta a la isla de aguas turquesa y nuragas"],
      description: [
        "La Sardaigne en une semaine : l'archipel de la Maddalena et la Costa Smeralda, Castelsardo, Alghero et le cap Caccia, Bosa, le site nuragique de Barumini, Cagliari et le site punique de Nora, puis la Barbagia, Orgosolo et ses fresques murales.",
        "Sardinia in a week: the La Maddalena archipelago and the Costa Smeralda, Castelsardo, Alghero and Capo Caccia, Bosa, the nuraghic site of Barumini, Cagliari and the Punic site of Nora, then the Barbagia, Orgosolo and its murals.",
        "Cerdeña en una semana: el archipiélago de La Maddalena y la Costa Esmeralda, Castelsardo, Alghero y el cabo Caccia, Bosa, el sitio nurágico de Barumini, Cagliari y el sitio púnico de Nora, y la Barbagia, Orgosolo y sus murales.",
      ],
      includes: INC(7),
      price: 1570, nights: 7, departureFrom: "Marseille", image: "sa3",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46991,
      chapters: [
        it.chapter(["Le nord de l'île", "The north of the island", "El norte de la isla"], ["La Maddalena et Alghero.", "La Maddalena and Alghero.", "La Maddalena y Alghero."],
          ["sa1", "sa5", "sa4", "sa7"],
          [
            it.day(1, ...arr(["Olbia", "Olbia", "Olbia"]), "sa1"),
            it.day(2, ["La Maddalena – Porto Cervo", "La Maddalena – Porto Cervo", "La Maddalena – Porto Cervo"], ["L'archipel de la Maddalena, ses criques aux eaux turquoise, puis Porto Cervo sur la Costa Smeralda.", "The La Maddalena archipelago, its turquoise coves, then Porto Cervo on the Costa Smeralda.", "El archipiélago de La Maddalena, sus calas de aguas turquesa, y Porto Cervo en la Costa Esmeralda."], "sa5"),
            it.day(3, ["Tempio – Castelsardo – Alghero", "Tempio – Castelsardo – Alghero", "Tempio – Castelsardo – Alghero"], ["Tempio Pausania au milieu des chênes-lièges, le village perché de Castelsardo, puis Alghero, la catalane.", "Tempio Pausania among the cork oaks, the hilltop village of Castelsardo, then Catalan Alghero.", "Tempio Pausania entre alcornoques, el pueblo encaramado de Castelsardo, y Alghero, la catalana."], "sa4"),
            it.day(4, ["Alghero – cap Caccia", "Alghero – Capo Caccia", "Alghero – cabo Caccia"], ["Le promontoire du cap Caccia et la grotte de Neptune, puis les remparts d'Alghero.", "The Capo Caccia promontory and Neptune's Grotto, then the ramparts of Alghero.", "El promontorio del cabo Caccia y la gruta de Neptuno, y las murallas de Alghero."], "sa7"),
          ]),
        it.chapter(["Le sud et la Barbagia", "The south and the Barbagia", "El sur y la Barbagia"], ["Nuraghes, Cagliari et montagnes.", "Nuraghi, Cagliari and mountains.", "Nuragas, Cagliari y montañas."],
          ["sa3", "sa8"],
          [
            it.day(5, ["Bosa – Barumini – Cagliari", "Bosa – Barumini – Cagliari", "Bosa – Barumini – Cagliari"], ["Bosa et ses maisons colorées, le puits sacré de Paulilatino et le grand nuraghe de Barumini, classé par l'Unesco, puis Cagliari.", "Bosa and its colourful houses, the sacred well of Paulilatino and the great nuraghe of Barumini, a UNESCO site, then Cagliari.", "Bosa y sus casas de colores, el pozo sagrado de Paulilatino y la gran nuraga de Barumini, declarada por la Unesco, y Cagliari."], "sa8"),
            it.day(6, ["Cagliari – Nora", "Cagliari – Nora", "Cagliari – Nora"], ["Cagliari, son quartier du Castello et ses flamants roses, puis le site phénicien et romain de Nora au bord de la mer.", "Cagliari, its Castello district and its pink flamingos, then the Phoenician and Roman site of Nora by the sea.", "Cagliari, su barrio del Castello y sus flamencos rosas, y el sitio fenicio y romano de Nora junto al mar."], "sa3"),
            it.day(7, ["Nuoro – Orgosolo – Olbia", "Nuoro – Orgosolo – Olbia", "Nuoro – Orgosolo – Olbia"], ["La Barbagia, Nuoro, les fresques murales d'Orgosolo, un déjeuner de berger et la source de Su Gologone.", "The Barbagia, Nuoro, the murals of Orgosolo, a shepherds' lunch and the Su Gologone spring.", "La Barbagia, Nuoro, los murales de Orgosolo, un almuerzo de pastores y el manantial de Su Gologone."], "sa1"),
            it.day(8, T_HOME, home(["Olbia", "Olbia", "Olbia"]), "sa5"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-cap-sur-les-iles-eoliennes-stromboli-vulcano-8j",
      name: ["Cap sur les îles Éoliennes : Lipari, Vulcano, Stromboli, l'Etna et Taormine", "Heading for the Aeolian Islands: Lipari, Vulcano, Stromboli, Etna and Taormina", "Rumbo a las islas Eolias: Lipari, Vulcano, Stromboli, el Etna y Taormina"],
      tagline: ["Les volcans de la Méditerranée, en bateau d'île en île", "The volcanoes of the Mediterranean, by boat from island to island", "Los volcanes del Mediterráneo, en barco de isla en isla"],
      description: [
        "Les îles Éoliennes et la Sicile : Palerme, la traversée depuis Milazzo vers Lipari et Vulcano, ses boues chaudes et ses fumerolles, Stromboli et ses éruptions nocturnes, puis l'Etna et Taormine.",
        "The Aeolian Islands and Sicily: Palermo, the crossing from Milazzo to Lipari and Vulcano, its hot mud and fumaroles, Stromboli and its night-time eruptions, then Etna and Taormina.",
        "Las islas Eolias y Sicilia: Palermo, la travesía desde Milazzo a Lipari y Vulcano, sus lodos calientes y sus fumarolas, Stromboli y sus erupciones nocturnas, y el Etna y Taormina.",
      ],
      includes: INC(7, ",Bateaux entre les îles"),
      price: 1593, nights: 7, departureFrom: "Barcelone", image: "eo1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46990,
      chapters: [
        it.chapter(["Palerme et Lipari", "Palermo and Lipari", "Palermo y Lipari"], ["La capitale et l'archipel.", "The capital and the archipelago.", "La capital y el archipiélago."],
          ["eo6", "eo7"],
          [
            it.day(1, ...arr(PALERME), "eo6"),
            it.day(2, PALERME, X_PALERME, "eo6"),
            it.day(3, ["Milazzo – Lipari", "Milazzo – Lipari", "Milazzo – Lipari"], ["Route vers Milazzo et hydroglisseur vers Lipari, la plus grande des îles Éoliennes.", "Drive to Milazzo and hydrofoil to Lipari, the largest of the Aeolian Islands.", "Carretera hacia Milazzo e hidroala hacia Lipari, la mayor de las islas Eolias."], "eo7"),
          ]),
        it.chapter(["Les volcans", "The volcanoes", "Los volcanes"], ["Vulcano, Stromboli et l'Etna.", "Vulcano, Stromboli and Etna.", "Vulcano, Stromboli y el Etna."],
          ["eo1", "eo4", "eo3"],
          [
            it.day(4, ["Vulcano", "Vulcano", "Vulcano"], ["Vulcano, son grand cratère, ses fumerolles de soufre, ses bains de boue chaude et ses plages de sable noir.", "Vulcano, its great crater, sulphur fumaroles, hot mud baths and black sand beaches.", "Vulcano, su gran cráter, sus fumarolas de azufre, sus baños de lodo caliente y sus playas de arena negra."], "eo4"),
            it.day(5, ["Stromboli", "Stromboli", "Stromboli"], ["En bateau autour de Panarea jusqu'à Stromboli, et le spectacle des éruptions à la tombée de la nuit depuis la mer.", "By boat around Panarea to Stromboli, and the show of eruptions at nightfall from the sea.", "En barco alrededor de Panarea hasta Stromboli, y el espectáculo de las erupciones al anochecer desde el mar."], "eo1"),
            it.day(6, ["Milazzo – Catane", "Milazzo – Catania", "Milazzo – Catania"], ["Retour sur la Sicile et route vers Catane.", "Back to Sicily and the drive to Catania.", "Regreso a Sicilia y carretera hacia Catania."], "eo3"),
            it.day(7, ["Etna – Taormine", "Etna – Taormina", "Etna – Taormina"], X_ETNA, "eo3"),
            it.day(8, T_HOME, home(PALERME), "eo1"),
          ]),
      ],
    }),

    it.trip({
      slug: "italie-cap-sur-l-italie-du-nord-au-sud-10j",
      name: ["Cap sur l'Italie du nord au sud : Vérone, Venise, Florence, Sienne, Naples et Rome", "Heading for Italy from north to south: Verona, Venice, Florence, Siena, Naples and Rome", "Rumbo a Italia de norte a sur: Verona, Venecia, Florencia, Siena, Nápoles y Roma"],
      tagline: ["La grande traversée de la botte, des lacs à la baie de Naples", "The great crossing of the boot, from the lakes to the Bay of Naples", "La gran travesía de la bota, de los lagos a la bahía de Nápoles"],
      description: [
        "L'Italie de Milan à Rome en dix jours : Vérone, Venise et ses îles en option, Florence, Sienne, Naples et Pompéi, une journée libre ou Capri en option, puis deux jours à Rome.",
        "Italy from Milan to Rome in ten days: Verona, Venice and its islands as an option, Florence, Siena, Naples and Pompeii, a free day or Capri as an option, then two days in Rome.",
        "Italia de Milán a Roma en diez días: Verona, Venecia y sus islas opcionales, Florencia, Siena, Nápoles y Pompeya, un día libre o Capri opcional, y dos días en Roma.",
      ],
      includes: INC(9),
      price: 1713, nights: 9, departureFrom: "Barcelone", image: "ns8",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 38, order: -46989,
      chapters: [
        it.chapter(["Le nord", "The north", "El norte"], ["Vérone, Venise et Florence.", "Verona, Venice and Florence.", "Verona, Venecia y Florencia."],
          ["ns5", "ns3", "ns1", "ns6"],
          [
            it.day(1, ...arr(MILAN), "la3"),
            it.day(2, ["Vérone – région de Venise", "Verona – Venice area", "Verona – región de Venecia"], ["Vérone, ses arènes romaines et la maison de Juliette, puis la région de Venise.", "Verona, its Roman arena and Juliet's house, then the Venice area.", "Verona, su arena romana y la casa de Julieta, y la región de Venecia."], "ns5"),
            it.day(3, VENISE, join(X_VEN, ["Les îles de la lagune en option.", "The lagoon islands as an option.", "Las islas de la laguna opcionales."]), "ns3"),
            it.day(4, ["Florence", "Florence", "Florencia"], X_FLO, "ns1"),
            it.day(5, ["Sienne – sud de Rome", "Siena – south of Rome", "Siena – sur de Roma"], ["Sienne et sa place du Campo, puis la route vers le Latium.", "Siena and its Piazza del Campo, then the road to Lazio.", "Siena y su plaza del Campo, y la carretera hacia el Lacio."], "ns6"),
          ]),
        it.chapter(["Le sud et Rome", "The south and Rome", "El sur y Roma"], ["Naples, Pompéi et la Ville éternelle.", "Naples, Pompeii and the Eternal City.", "Nápoles, Pompeya y la Ciudad eterna."],
          ["ns2", "ns4", "ns8", "ns7"],
          [
            it.day(6, ["Naples – Pompéi", "Naples – Pompeii", "Nápoles – Pompeya"], join(X_NAPLES, X_POMPEI), "ns2"),
            it.day(7, ["Capri ou journée libre", "Capri or a free day", "Capri o día libre"], ["Journée libre, ou en option l'île de Capri.", "A free day, or the island of Capri as an option.", "Día libre, u opcional la isla de Capri."], "ns4"),
            it.day(8, ["Région de Naples – Rome", "Naples area – Rome", "Región de Nápoles – Roma"], ["Retour vers Rome.", "Back to Rome.", "Regreso a Roma."], "ns7"),
            it.day(9, ROME, X_ROME, "ns8"),
            it.day(10, T_HOME, home(ROME), "ns8"),
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
