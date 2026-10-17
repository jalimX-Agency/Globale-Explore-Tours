// United States, East, Florida and the South — 15 journey-format trips for the existing
// "etats-unis" destination. Extensions (New York, Miami Beach, New Orleans, San Francisco) are
// described inside each trip. Prices are per-person "from" prices; several offers can be booked with
// or without flights. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-usa-est-sud-circuits.ts
// Requires scripts/upload-images-usaes-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "etats-unis-incontournables-est-boston-washington-9j": ["275619", "272539"],
  "etats-unis-new-york-chicago-niagara-12j": ["385458"],
  "etats-unis-est-intimiste-niagara-cape-cod-12j": ["404418"],
  "etats-unis-new-york-key-west-charleston-savannah-13j": ["263621", "385738"],
  "etats-unis-essentiel-floride-keys-everglades-9j": ["381662", "384838", "384839"],
  "etats-unis-cap-sur-la-floride-saint-augustine-9j": ["384738", "392858"],
  "etats-unis-floride-croisiere-msc-bahamas-12j": ["383018", "288320", "392139", "288338"],
  "etats-unis-decouverte-louisiane-plantations-bayous-9j": ["385698", "56698", "390838"],
  "etats-unis-rythmes-du-sud-houston-memphis-nashville-12j": ["390698"],
  "etats-unis-grand-tour-du-sud-atlanta-key-west-14j": ["399258", "399259"],
  "etats-unis-ame-du-sud-texas-bayous-atlanta-14j": ["389358"],
  "etats-unis-casinos-aux-bayous-route-66-14j": ["394039", "410599", "411238"],
  "etats-unis-music-road-dallas-memphis-chicago-14j": ["385359"],
  "etats-unis-texas-louisiane-intimiste-14j": ["113698"],
  "etats-unis-south-music-intimiste-blues-bayous-15j": ["151218"],
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
const NY: L3 = ["New York", "New York", "Nueva York"];
const MIA: L3 = ["Miami", "Miami", "Miami"];
const NOLA: L3 = ["La Nouvelle-Orléans", "New Orleans", "Nueva Orleans"];
const ATL: L3 = ["Atlanta", "Atlanta", "Atlanta"];

const T_BOSTON: L3 = ["Boston", "Boston", "Boston"];
const BOSTON: L3 = ["Boston, berceau de l'indépendance : Harvard et Cambridge de l'autre côté de la Charles River, le Freedom Trail et le quartier de Beacon Hill.", "Boston, cradle of independence: Harvard and Cambridge across the Charles River, the Freedom Trail and the Beacon Hill district.", "Boston, cuna de la independencia: Harvard y Cambridge al otro lado del río Charles, el Freedom Trail y el barrio de Beacon Hill."];
const T_PHILLY: L3 = ["Philadelphie et le pays amish", "Philadelphia and Amish country", "Filadelfia y el país amish"];
const PHILLY: L3 = ["Le centre historique de Philadelphie et la Liberty Bell, puis le comté de Lancaster et ses fermes amish, où l'on vit encore sans électricité, avant Washington.", "Philadelphia's historic centre and the Liberty Bell, then Lancaster County and its Amish farms, where people still live without electricity, before Washington.", "El centro histórico de Filadelfia y la Liberty Bell, y el condado de Lancaster y sus granjas amish, donde aún se vive sin electricidad, antes de Washington."];
const T_DC: L3 = ["Washington", "Washington", "Washington"];
const DC: L3 = ["La capitale fédérale : la Maison-Blanche, le Capitole, la Cour suprême, le National Mall et ses mémoriaux, et le quartier de Georgetown.", "The federal capital: the White House, the Capitol, the Supreme Court, the National Mall and its memorials, and the Georgetown district.", "La capital federal: la Casa Blanca, el Capitolio, el Tribunal Supremo, el National Mall y sus memoriales, y el barrio de Georgetown."];
const T_NIAGARA: L3 = ["Les chutes du Niagara", "Niagara Falls", "Las cataratas del Niágara"];
const NIAGARA: L3 = ["Les chutes du Niagara, côté américain, et la croisière au pied des cascades.", "Niagara Falls, from the American side, and the cruise to the foot of the falls.", "Las cataratas del Niágara, del lado estadounidense, y el crucero al pie de las cascadas."];
const T_HARLEM: L3 = ["New York, Harlem et Manhattan", "New York, Harlem and Manhattan", "Nueva York, Harlem y Manhattan"];
const HARLEM: L3 = ["Harlem et sa messe gospel, puis Manhattan : Times Square, la 5e Avenue, le Rockefeller Center et Wall Street.", "Harlem and its gospel service, then Manhattan: Times Square, Fifth Avenue, the Rockefeller Center and Wall Street.", "Harlem y su misa gospel, y Manhattan: Times Square, la Quinta Avenida, el Rockefeller Center y Wall Street."];
const T_KEYS: L3 = ["Les Keys et Key West", "The Keys and Key West", "Los Cayos y Key West"];
const KEYS: L3 = ["L'Overseas Highway, route bâtie sur l'océan d'île en île, jusqu'à Key West, la maison d'Hemingway et le coucher de soleil sur Mallory Square.", "The Overseas Highway, a road built over the ocean from island to island, to Key West, Hemingway's house and the sunset on Mallory Square.", "La Overseas Highway, carretera construida sobre el océano de isla en isla, hasta Key West, la casa de Hemingway y la puesta de sol en Mallory Square."];
const T_GLADES: L3 = ["Les Everglades", "The Everglades", "Los Everglades"];
const GLADES: L3 = ["Les Everglades, immense marais d'herbes et de mangroves, en hydroglisseur à la rencontre des alligators.", "The Everglades, a vast marsh of grasses and mangroves, by airboat to meet the alligators.", "Los Everglades, inmensa marisma de hierbas y manglares, en hidrodeslizador al encuentro de los caimanes."];
const T_KSC: L3 = ["Le Kennedy Space Center", "Kennedy Space Center", "El Kennedy Space Center"];
const KSC: L3 = ["La base de lancement de Cap Canaveral, ses fusées, la navette Atlantis et le film IMAX de la NASA.", "The Cape Canaveral launch base, its rockets, the Atlantis shuttle and the NASA IMAX film.", "La base de lanzamiento de Cabo Cañaveral, sus cohetes, el transbordador Atlantis y la película IMAX de la NASA."];
const T_MIAMI: L3 = ["Miami et Miami Beach", "Miami and Miami Beach", "Miami y Miami Beach"];
const MIAMI: L3 = ["Le quartier Art déco de South Beach, Ocean Drive, le street art de Wynwood et la Petite Havane.", "The Art Deco district of South Beach, Ocean Drive, the street art of Wynwood and Little Havana.", "El barrio Art déco de South Beach, Ocean Drive, el arte urbano de Wynwood y la Pequeña Habana."];
const T_FQ: L3 = ["La Nouvelle-Orléans, le Vieux Carré", "New Orleans, the French Quarter", "Nueva Orleans, el Barrio Francés"];
const FQ: L3 = ["À pied dans le Vieux Carré : ses rues aux noms français, ses balcons en fer forgé, la cathédrale Saint-Louis, Jackson Square et le French Market. Le soir, le jazz de Frenchmen Street.", "On foot through the French Quarter: its French street names, wrought-iron balconies, St Louis Cathedral, Jackson Square and the French Market. In the evening, jazz on Frenchmen Street.", "A pie por el Barrio Francés: sus calles con nombres franceses, sus balcones de hierro forjado, la catedral de San Luis, Jackson Square y el French Market. Por la noche, el jazz de Frenchmen Street."];
const T_PLANT: L3 = ["La route des Plantations – Bâton-Rouge", "The Plantation Road – Baton Rouge", "La ruta de las Plantaciones – Baton Rouge"];
const PLANT: L3 = ["Le long du Mississippi, la plantation d'Oak Alley et son allée de chênes centenaires, puis Bâton-Rouge, capitale de la Louisiane.", "Along the Mississippi, Oak Alley plantation and its avenue of centuries-old oaks, then Baton Rouge, capital of Louisiana.", "A lo largo del Misisipi, la plantación de Oak Alley y su avenida de robles centenarios, y Baton Rouge, capital de Luisiana."];
const T_CAJUN: L3 = ["Le pays cajun", "Cajun country", "El país cajún"];
const CAJUN: L3 = ["Le musée acadien de Lafayette, Saint-Martinville, capitale du pays cajun, puis Avery Island, ses jardins et sa fabrique de Tabasco.", "The Acadian museum in Lafayette, Saint-Martinville, capital of Cajun country, then Avery Island, its gardens and its Tabasco factory.", "El museo acadiano de Lafayette, Saint-Martinville, capital del país cajún, y Avery Island, sus jardines y su fábrica de Tabasco."];
const T_GRACELAND: L3 = ["Memphis et Graceland", "Memphis and Graceland", "Memphis y Graceland"];
const GRACELAND: L3 = ["Graceland, la demeure d'Elvis Presley, et son musée, puis Beale Street, la rue du blues.", "Graceland, Elvis Presley's home, and its museum, then Beale Street, the street of the blues.", "Graceland, la mansión de Elvis Presley, y su museo, y Beale Street, la calle del blues."];
const T_NASH: L3 = ["Nashville, capitale de la country", "Nashville, capital of country music", "Nashville, capital del country"];
const NASH: L3 = ["Le Country Music Hall of Fame, le Ryman Auditorium et les honky-tonks de Broadway.", "The Country Music Hall of Fame, the Ryman Auditorium and the honky-tonks of Broadway.", "El Country Music Hall of Fame, el Ryman Auditorium y los honky-tonks de Broadway."];
const T_ATL: L3 = ["Atlanta", "Atlanta", "Atlanta"];
const ATLD: L3 = ["Le berceau de Martin Luther King : Downtown, Midtown et Buckhead, le Centennial Olympic Park et le musée de Coca-Cola.", "Martin Luther King's birthplace: Downtown, Midtown and Buckhead, Centennial Olympic Park and the World of Coca-Cola.", "La cuna de Martin Luther King: Downtown, Midtown y Buckhead, el Centennial Olympic Park y el museo de Coca-Cola."];
const T_NASA: L3 = ["Houston et la NASA – Lafayette", "Houston and NASA – Lafayette", "Houston y la NASA – Lafayette"];
const NASA: L3 = ["Le Space Center Houston, centre officiel de la NASA, ses fusées et la salle de contrôle des missions, puis la route vers Lafayette.", "Space Center Houston, NASA's official centre, its rockets and mission control, then the drive to Lafayette.", "El Space Center Houston, centro oficial de la NASA, sus cohetes y la sala de control de misiones, y la carretera hacia Lafayette."];
const T_ALAMO: L3 = ["San Antonio et Fort Alamo", "San Antonio and the Alamo", "San Antonio y El Álamo"];
const ALAMO: L3 = ["Fort Alamo, symbole de l'indépendance texane, les missions espagnoles et le River Walk au bord de l'eau.", "The Alamo, symbol of Texan independence, the Spanish missions and the River Walk.", "El Álamo, símbolo de la independencia texana, las misiones españolas y el River Walk junto al agua."];
const T_DALLAS: L3 = ["Dallas et Fort Worth", "Dallas and Fort Worth", "Dallas y Fort Worth"];
const DALLAS: L3 = ["Dallas sur les pas de John F. Kennedy, puis Fort Worth, « Cowtown », ses Stockyards et son défilé de bétail longhorn.", "Dallas in the footsteps of John F. Kennedy, then Fort Worth, 'Cowtown', its Stockyards and its longhorn cattle drive.", "Dallas tras los pasos de John F. Kennedy, y Fort Worth, «Cowtown», sus Stockyards y su desfile de ganado longhorn."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const east = circuitBuilders({ destinationSlug: "etats-unis", imagePrefix: "usaes", season: { label: ["Avr-juin, sept-oct", "Apr-June, Sept-Oct", "Abr-jun, sept-oct"], months: "april,may,june,september,october" } });
  const fl = circuitBuilders({ destinationSlug: "etats-unis", imagePrefix: "usaes", season: { label: ["Nov à avril", "Nov to April", "Nov a abr"], months: "november,december,january,february,march,april" } });
  const so = circuitBuilders({ destinationSlug: "etats-unis", imagePrefix: "usaes", season: { label: ["Mars-mai, oct-nov", "Mar-May, Oct-Nov", "Mar-may, oct-nov"], months: "march,april,may,october,november" } });
  const INC = (n: number, extra = ""): L3 => [
    `Vols depuis la France (en option sur certaines dates),Transferts aéroport,${n} nuits en hôtels 3*,Transport en minibus ou autocar,Visites du programme,Guide ou chauffeur-guide francophone${extra}`,
    `Flights from France (optional on some dates),Airport transfers,${n} nights in 3* hotels,Transport by minibus or coach,Visits in the programme,French-speaking guide or driver-guide${extra}`,
    `Vuelos desde Francia (opcionales en algunas fechas),Traslados al aeropuerto,${n} noches en hoteles de 3*,Transporte en minibús o autocar,Visitas del programa,Guía o chófer-guía francófono${extra}`,
  ];
  const INTI = (n: number): L3 => [
    `Vols depuis la France,Transferts aéroport,${n} nuits en hôtels de charme,Transport en van,Visites du programme,Chauffeur-guide francophone,Groupe de 12 personnes au plus`,
    `Flights from France,Airport transfers,${n} nights in boutique hotels,Transport by van,Visits in the programme,French-speaking driver-guide,Group of 12 at most`,
    `Vuelos desde Francia,Traslados al aeropuerto,${n} noches en hoteles con encanto,Transporte en furgoneta,Visitas del programa,Chófer-guía francófono,Grupo de 12 personas como máximo`,
  ];

  const journeyTrips = [
    // ───────────── Est 1. Incontournables de l'Est — 9J/7N ─────────────
    east.trip({
      slug: "etats-unis-incontournables-est-boston-washington-9j",
      name: ["Les incontournables de l'Est : New York, Boston, Philadelphie et Washington", "Highlights of the East: New York, Boston, Philadelphia and Washington", "Lo esencial del Este: Nueva York, Boston, Filadelfia y Washington"],
      tagline: ["La côte Est en neuf jours, de la Nouvelle-Angleterre à la capitale fédérale", "The East Coast in nine days, from New England to the federal capital", "La costa Este en nueve días, de Nueva Inglaterra a la capital federal"],
      description: [
        "La côte Est en groupe : Boston et Harvard, Newport et l'université de Yale, Philadelphie et la Liberty Bell, le pays amish, deux jours à Washington, puis New York par le ferry de Staten Island, Harlem et Manhattan. Avec deux nuits de plus à New York (11 jours) à partir de 2 073 € par personne.",
        "The East Coast in a group: Boston and Harvard, Newport and Yale University, Philadelphia and the Liberty Bell, Amish country, two days in Washington, then New York via the Staten Island ferry, Harlem and Manhattan. With two more nights in New York (11 days) from €2,073 per person.",
        "La costa Este en grupo: Boston y Harvard, Newport y la universidad de Yale, Filadelfia y la Liberty Bell, el país amish, dos días en Washington, y Nueva York por el ferri de Staten Island, Harlem y Manhattan. Con dos noches más en Nueva York (11 días) desde 2.073 € por persona.",
      ],
      includes: INC(7),
      price: 1628, nights: 7, departureFrom: "Francfort", image: "ie2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 53, order: -54000,
      chapters: [
        east.chapter(["Boston et la Nouvelle-Angleterre", "Boston and New England", "Boston y Nueva Inglaterra"], ["La ville universitaire et la côte.", "The university city and the coast.", "La ciudad universitaria y la costa."],
          ["ie2", "ie1"],
          [
            east.day(1, ...arr(NY), "ie7"),
            east.day(2, ["New York – Boston", "New York – Boston", "Nueva York – Boston"], [BOSTON[0], BOSTON[1], BOSTON[2]], "ie2"),
            east.day(3, ["Newport, Yale – Philadelphie", "Newport, Yale – Philadelphia", "Newport, Yale – Filadelfia"], ["Longue journée de route : Newport et ses demeures dans le Rhode Island, l'université de Yale, puis Princeton et Philadelphie.", "A long day on the road: Newport and its mansions in Rhode Island, Yale University, then Princeton and Philadelphia.", "Larga jornada de carretera: Newport y sus mansiones en Rhode Island, la universidad de Yale, y Princeton y Filadelfia."], "ie1"),
          ]),
        east.chapter(["Philadelphie et Washington", "Philadelphia and Washington", "Filadelfia y Washington"], ["L'indépendance et la capitale fédérale.", "Independence and the federal capital.", "La independencia y la capital federal."],
          ["ie3", "ie4", "ie5", "ie6"],
          [east.day(4, T_PHILLY, PHILLY, "ie3"), east.day(5, T_DC, DC, "ie5")]),
        east.chapter([NY[0], NY[1], NY[2]], ["La Grosse Pomme.", "The Big Apple.", "La Gran Manzana."],
          ["ie7", "ch4"],
          [
            east.day(6, ["Washington – New York", "Washington – New York", "Washington – Nueva York"], ["Arrivée à New York par le ferry de Staten Island et sa vue sur la statue de la Liberté et Manhattan.", "Arrival in New York via the Staten Island ferry and its view of the Statue of Liberty and Manhattan.", "Llegada a Nueva York por el ferri de Staten Island y su vista sobre la estatua de la Libertad y Manhattan."], "ch2"),
            east.day(7, T_HARLEM, HARLEM, "ie7"),
            east.day(8, ...dep(NY), "ch4"), east.day(9, T_HOME, HOME, "ie2"),
          ]),
      ],
    }),

    // ───────────── Est 2. De New York à Chicago — 12J/10N ─────────────
    east.trip({
      slug: "etats-unis-new-york-chicago-niagara-12j",
      name: ["De New York à Chicago : Washington, Boston et les chutes du Niagara", "From New York to Chicago: Washington, Boston and Niagara Falls", "De Nueva York a Chicago: Washington, Boston y las cataratas del Niágara"],
      tagline: ["La côte Est, puis la route des Grands Lacs jusqu'à la ville des vents", "The East Coast, then the Great Lakes road to the Windy City", "La costa Este y la ruta de los Grandes Lagos hasta la ciudad del viento"],
      description: [
        "Un grand circuit de l'Est : New York, Philadelphie, le pays amish de Lancaster, Washington et le cimetière d'Arlington, la ville coloniale d'Annapolis, Harlem et sa messe gospel, le port de Mystic, Boston, les chutes du Niagara, Cleveland, puis Chicago et sa croisière architecturale.",
        "A grand tour of the East: New York, Philadelphia, Lancaster's Amish country, Washington and Arlington cemetery, the colonial town of Annapolis, Harlem and its gospel service, the port of Mystic, Boston, Niagara Falls, Cleveland, then Chicago and its architecture cruise.",
        "Un gran circuito por el Este: Nueva York, Filadelfia, el país amish de Lancaster, Washington y el cementerio de Arlington, la ciudad colonial de Annapolis, Harlem y su misa gospel, el puerto de Mystic, Boston, las cataratas del Niágara, Cleveland, y Chicago y su crucero arquitectónico.",
      ],
      includes: INC(10),
      price: 2863, nights: 10, departureFrom: "Paris", image: "ch3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 53, order: -53999,
      chapters: [
        east.chapter(["New York, Philadelphie et Washington", "New York, Philadelphia and Washington", "Nueva York, Filadelfia y Washington"], ["La Grosse Pomme et les villes de l'indépendance.", "The Big Apple and the cities of independence.", "La Gran Manzana y las ciudades de la independencia."],
          ["ch4", "ch2", "ch5", "ch6"],
          [
            east.day(1, ...arr(NY), "ch4"),
            east.day(2, [NY[0], NY[1], NY[2]], ["Journée de découverte de la Grosse Pomme, de Midtown à Downtown.", "A day discovering the Big Apple, from Midtown to Downtown.", "Jornada de descubrimiento de la Gran Manzana, de Midtown a Downtown."], "ch4"),
            east.day(3, ["New York – Philadelphie", "New York – Philadelphia", "Nueva York – Filadelfia"], ["Le Financial District, puis Philadelphie et son centre historique.", "The Financial District, then Philadelphia and its historic centre.", "El Financial District y Filadelfia y su centro histórico."], "ch2"),
            east.day(4, ["Lancaster – Washington", "Lancaster – Washington", "Lancaster – Washington"], ["Le pays amish de Lancaster, puis Washington.", "Lancaster's Amish country, then Washington.", "El país amish de Lancaster y Washington."], "ch5"),
            east.day(5, [T_DC[0], T_DC[1], T_DC[2]], [`Le cimetière national d'Arlington, puis ${DC[0].charAt(0).toLowerCase()}${DC[0].slice(1)}`, `Arlington National Cemetery, then ${DC[1].charAt(0).toLowerCase()}${DC[1].slice(1)}`, `El cementerio nacional de Arlington, y ${DC[2].charAt(0).toLowerCase()}${DC[2].slice(1)}`], "ch6"),
            east.day(6, ["Annapolis – New York", "Annapolis – New York", "Annapolis – Nueva York"], ["Annapolis, l'une des plus anciennes villes du pays, puis retour à New York.", "Annapolis, one of the oldest towns in the country, then back to New York.", "Annapolis, una de las ciudades más antiguas del país, y regreso a Nueva York."], "ch4"),
          ]),
        east.chapter(["Boston, Niagara et Chicago", "Boston, Niagara and Chicago", "Boston, Niágara y Chicago"], ["La Nouvelle-Angleterre, les chutes et les Grands Lacs.", "New England, the falls and the Great Lakes.", "Nueva Inglaterra, las cataratas y los Grandes Lagos."],
          ["ch7", "ch3", "ch1", "ch8"],
          [
            east.day(7, ["Harlem, Mystic – Boston", "Harlem, Mystic – Boston", "Harlem, Mystic – Boston"], ["Une messe gospel à Harlem, puis le port de Mystic et Boston.", "A gospel service in Harlem, then the port of Mystic and Boston.", "Una misa gospel en Harlem, y el puerto de Mystic y Boston."], "ch7"),
            east.day(8, ["Boston – Syracuse", "Boston – Syracuse", "Boston – Syracuse"], [`${BOSTON[0]} Route vers Syracuse.`, `${BOSTON[1]} Drive to Syracuse.`, `${BOSTON[2]} Carretera hacia Syracuse.`], "ch7"),
            east.day(9, ["Niagara – Cleveland", "Niagara – Cleveland", "Niágara – Cleveland"], [`${NIAGARA[0]} Puis Cleveland, au bord du lac Érié.`, `${NIAGARA[1]} Then Cleveland, on Lake Erie.`, `${NIAGARA[2]} Y Cleveland, a orillas del lago Erie.`], "ch3"),
            east.day(10, ["Cleveland – Chicago", "Cleveland – Chicago", "Cleveland – Chicago"], ["Route vers Chicago, la « ville des vents », et ses gratte-ciel au bord du lac Michigan.", "Drive to Chicago, the 'Windy City', and its skyscrapers on Lake Michigan.", "Carretera hacia Chicago, la «ciudad del viento», y sus rascacielos a orillas del lago Míchigan."], "ch1"),
            east.day(11, ["Chicago – vol retour", "Chicago – flight home", "Chicago – vuelo de regreso"], ["Croisière architecturale sur la rivière de Chicago, puis envol pour la France.", "An architecture cruise on the Chicago River, then fly to France.", "Crucero arquitectónico por el río Chicago y vuelo a Francia."], "ch8"),
            east.day(12, T_HOME, HOME, "ch1"),
          ]),
      ],
    }),

    // ───────────── Est 3. L'Est intimiste — 12J/10N ─────────────
    east.trip({
      slug: "etats-unis-est-intimiste-niagara-cape-cod-12j",
      name: ["L'Est intimiste : Washington, Niagara, les Finger Lakes, Boston et Cape Cod", "The East Up Close: Washington, Niagara, the Finger Lakes, Boston and Cape Cod", "El Este íntimo: Washington, Niágara, los Finger Lakes, Boston y Cape Cod"],
      tagline: ["Douze voyageurs au plus, un chauffeur-guide francophone et la Nouvelle-Angleterre des côtes", "Twelve travellers at most, a French-speaking driver-guide and coastal New England", "Doce viajeros como máximo, un chófer-guía francófono y la Nueva Inglaterra de las costas"],
      description: [
        "La côte Est en groupe de 12 personnes au plus : Philadelphie, Baltimore et Washington, Annapolis et le pays amish, le musée du verre de Corning, les chutes du Niagara, la région des Finger Lakes, Boston, puis Plymouth, Cape Cod, Newport et Mystic, avant deux jours à New York et la statue de la Liberté.",
        "The East Coast in a group of 12 at most: Philadelphia, Baltimore and Washington, Annapolis and Amish country, the Corning Museum of Glass, Niagara Falls, the Finger Lakes, Boston, then Plymouth, Cape Cod, Newport and Mystic, before two days in New York and the Statue of Liberty.",
        "La costa Este en grupo de 12 personas como máximo: Filadelfia, Baltimore y Washington, Annapolis y el país amish, el museo del vidrio de Corning, las cataratas del Niágara, la región de los Finger Lakes, Boston, y Plymouth, Cape Cod, Newport y Mystic, antes de dos días en Nueva York y la estatua de la Libertad.",
      ],
      includes: INTI(10),
      price: 5003, nights: 10, departureFrom: "Francfort", image: "ei2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -53998,
      chapters: [
        east.chapter(["Washington et le pays amish", "Washington and Amish country", "Washington y el país amish"], ["Les villes de l'indépendance.", "The cities of independence.", "Las ciudades de la independencia."],
          ["ei3", "ei5", "ei4"],
          [
            east.day(1, ...arr(NY), "ei1"),
            east.day(2, ["Philadelphie, Baltimore – Washington", "Philadelphia, Baltimore – Washington", "Filadelfia, Baltimore – Washington"], ["Le quartier historique de Philadelphie, berceau de la nation, puis Baltimore et Washington.", "Philadelphia's historic district, cradle of the nation, then Baltimore and Washington.", "El barrio histórico de Filadelfia, cuna de la nación, y Baltimore y Washington."], "ei5"),
            east.day(3, T_DC, DC, "ei3"),
            east.day(4, ["Annapolis – Lancaster", "Annapolis – Lancaster", "Annapolis – Lancaster"], ["Annapolis et son port, puis le pays amish de Lancaster.", "Annapolis and its harbour, then Lancaster's Amish country.", "Annapolis y su puerto, y el país amish de Lancaster."], "ei4"),
          ]),
        east.chapter(["Niagara et les Finger Lakes", "Niagara and the Finger Lakes", "Niágara y los Finger Lakes"], ["Le verre, les chutes et les lacs.", "Glass, the falls and the lakes.", "El vidrio, las cataratas y los lagos."],
          ["ei2", "ei8"],
          [
            east.day(5, ["Corning – Niagara", "Corning – Niagara", "Corning – Niágara"], ["Le musée du Verre de Corning, puis les chutes du Niagara.", "The Corning Museum of Glass, then Niagara Falls.", "El museo del Vidrio de Corning y las cataratas del Niágara."], "ei2"),
            east.day(6, ["Niagara – Finger Lakes", "Niagara – the Finger Lakes", "Niágara – los Finger Lakes"], [`${NIAGARA[0]} Puis la région des Finger Lakes, ses lacs et ses gorges.`, `${NIAGARA[1]} Then the Finger Lakes, their lakes and gorges.`, `${NIAGARA[2]} Y la región de los Finger Lakes, sus lagos y sus gargantas.`], "ei8"),
          ]),
        east.chapter(["Boston, Cape Cod et New York", "Boston, Cape Cod and New York", "Boston, Cape Cod y Nueva York"], ["La Nouvelle-Angleterre des côtes, puis la Grosse Pomme.", "Coastal New England, then the Big Apple.", "La Nueva Inglaterra de las costas y la Gran Manzana."],
          ["ei7", "ei6", "ei1"],
          [
            east.day(7, ["Finger Lakes – Boston", "Finger Lakes – Boston", "Finger Lakes – Boston"], [BOSTON[0], BOSTON[1], BOSTON[2]], "ei7"),
            east.day(8, ["Plymouth, Cape Cod, Newport – Mystic", "Plymouth, Cape Cod, Newport – Mystic", "Plymouth, Cape Cod, Newport – Mystic"], ["Plymouth, où débarquèrent les Pères pèlerins, les plages de Cape Cod, les demeures de Newport, puis Mystic.", "Plymouth, where the Pilgrim Fathers landed, the beaches of Cape Cod, the mansions of Newport, then Mystic.", "Plymouth, donde desembarcaron los Padres Peregrinos, las playas de Cape Cod, las mansiones de Newport, y Mystic."], "ei6"),
            east.day(9, ["Mystic – New York", "Mystic – New York", "Mystic – Nueva York"], ["Route vers New York et tour de ville.", "Drive to New York and a city tour.", "Carretera hacia Nueva York y visita de la ciudad."], "ei1"),
            east.day(10, ["New York et la statue de la Liberté", "New York and the Statue of Liberty", "Nueva York y la estatua de la Libertad"], ["En métro et en ferry jusqu'à la statue de la Liberté, puis Lower Manhattan.", "By metro and ferry to the Statue of Liberty, then Lower Manhattan.", "En metro y ferri hasta la estatua de la Libertad, y Lower Manhattan."], "ei1"),
            east.day(11, ...dep(NY), "ei1"), east.day(12, T_HOME, HOME, "ei2"),
          ]),
      ],
    }),

    // ───────────── Est 4. De New York à Key West — 13J/11N ─────────────
    east.trip({
      slug: "etats-unis-new-york-key-west-charleston-savannah-13j",
      name: ["De New York à Key West : Washington, Charleston, Savannah et la Floride", "From New York to Key West: Washington, Charleston, Savannah and Florida", "De Nueva York a Key West: Washington, Charleston, Savannah y Florida"],
      tagline: ["La côte Est du nord au sud, des gratte-ciel de Manhattan aux plages de Miami", "The East Coast from north to south, from the skyscrapers of Manhattan to the beaches of Miami", "La costa Este de norte a sur, de los rascacielos de Manhattan a las playas de Miami"],
      description: [
        "Toute la côte Est en un voyage : New York et Harlem, Philadelphie et le pays amish, Washington, les villes sudistes de Charleston et Savannah, Saint Augustine, plus ancienne ville du pays, le Kennedy Space Center, les Everglades, l'Overseas Highway jusqu'à Key West, puis Miami Beach. Version 2027 à partir de 3 235 € par personne.",
        "The whole East Coast in one trip: New York and Harlem, Philadelphia and Amish country, Washington, the southern towns of Charleston and Savannah, Saint Augustine, the oldest town in the country, Kennedy Space Center, the Everglades, the Overseas Highway to Key West, then Miami Beach. 2027 version from €3,235 per person.",
        "Toda la costa Este en un viaje: Nueva York y Harlem, Filadelfia y el país amish, Washington, las ciudades sureñas de Charleston y Savannah, San Agustín, la ciudad más antigua del país, el Kennedy Space Center, los Everglades, la Overseas Highway hasta Key West, y Miami Beach. Versión 2027 desde 3.235 € por persona.",
      ],
      includes: INC(11),
      price: 3162, nights: 11, departureFrom: "Barcelone", image: "kw8",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 49, order: -53997,
      chapters: [
        east.chapter(["New York, Philadelphie et Washington", "New York, Philadelphia and Washington", "Nueva York, Filadelfia y Washington"], ["Le nord-est.", "The north-east.", "El noreste."],
          ["kw2", "kw3", "kw4", "kw5"],
          [east.day(1, ...arr(NY), "kw2"), east.day(2, T_HARLEM, HARLEM, "kw2"), east.day(3, ["New York – Philadelphie", "New York – Philadelphia", "Nueva York – Filadelfia"], ["Tour de Manhattan, puis Philadelphie.", "A tour of Manhattan, then Philadelphia.", "Vuelta por Manhattan y Filadelfia."], "kw3"), east.day(4, T_PHILLY, PHILLY, "kw4"), east.day(5, ["Washington – Fayetteville", "Washington – Fayetteville", "Washington – Fayetteville"], [`${DC[0]} Route vers la Caroline du Nord.`, `${DC[1]} Drive to North Carolina.`, `${DC[2]} Carretera hacia Carolina del Norte.`], "kw5")]),
        east.chapter(["Le Vieux Sud", "The Old South", "El Viejo Sur"], ["Charleston, Savannah et Saint Augustine.", "Charleston, Savannah and Saint Augustine.", "Charleston, Savannah y San Agustín."],
          ["kw6", "kw1"],
          [
            east.day(6, ["Charleston", "Charleston", "Charleston"], ["Le centre historique de Charleston, ses maisons colorées et ses rues pavées.", "Charleston's historic centre, its colourful houses and cobbled streets.", "El centro histórico de Charleston, sus casas de colores y sus calles empedradas."], "kw6"),
            east.day(7, ["Savannah – Saint Augustine", "Savannah – Saint Augustine", "Savannah – San Agustín"], ["Savannah, ses places ombragées de chênes et de mousse espagnole, puis Saint Augustine.", "Savannah, its squares shaded by oaks and Spanish moss, then Saint Augustine.", "Savannah, sus plazas a la sombra de robles y musgo español, y San Agustín."], "kw1"),
          ]),
        east.chapter(["La Floride", "Florida", "Florida"], ["L'espace, les marais, les Keys et Miami.", "Space, the swamps, the Keys and Miami.", "El espacio, los pantanos, los Cayos y Miami."],
          ["kw7", "kw9", "kw8"],
          [
            east.day(8, ["Saint Augustine – Kennedy Space Center – Orlando", "Saint Augustine – Kennedy Space Center – Orlando", "San Agustín – Kennedy Space Center – Orlando"], [`La plus vieille ville du pays, puis ${KSC[0].charAt(0).toLowerCase()}${KSC[0].slice(1)}`, `The oldest town in the country, then ${KSC[1].charAt(0).toLowerCase()}${KSC[1].slice(1)}`, `La ciudad más antigua del país, y ${KSC[2].charAt(0).toLowerCase()}${KSC[2].slice(1)}`], "kw7"),
            east.day(9, ["Orlando – Everglades – Miami", "Orlando – Everglades – Miami", "Orlando – Everglades – Miami"], [GLADES[0], GLADES[1], GLADES[2]], "kw9"),
            east.day(10, T_KEYS, KEYS, "kw1"),
            east.day(11, ["Key West – Miami Beach", "Key West – Miami Beach", "Key West – Miami Beach"], [MIAMI[0], MIAMI[1], MIAMI[2]], "kw8"),
            east.day(12, ...dep(MIA), "kw8"), east.day(13, T_HOME, HOME, "kw2"),
          ]),
      ],
    }),

    // ───────────── Floride 1. L'essentiel de la Floride — 9J/7N ─────────────
    fl.trip({
      slug: "etats-unis-essentiel-floride-keys-everglades-9j",
      name: ["L'essentiel de la Floride : Key West, les Everglades, Orlando et Miami", "The Essence of Florida: Key West, the Everglades, Orlando and Miami", "Lo esencial de Florida: Key West, los Everglades, Orlando y Miami"],
      tagline: ["La boucle de la Floride, de l'Overseas Highway au Kennedy Space Center", "The Florida loop, from the Overseas Highway to Kennedy Space Center", "La vuelta a Florida, de la Overseas Highway al Kennedy Space Center"],
      description: [
        "La Floride en groupe : l'Overseas Highway jusqu'à Key West, les Everglades, Fort Myers, Sarasota et Tampa, Orlando et Daytona Beach (ou une journée libre dans les parcs), le Kennedy Space Center, puis Miami et Miami Beach. Avec une ou deux nuits de plus à Miami Beach à partir de 2 089 € par personne.",
        "Florida in a group: the Overseas Highway to Key West, the Everglades, Fort Myers, Sarasota and Tampa, Orlando and Daytona Beach (or a free day in the parks), Kennedy Space Center, then Miami and Miami Beach. With one or two more nights in Miami Beach from €2,089 per person.",
        "Florida en grupo: la Overseas Highway hasta Key West, los Everglades, Fort Myers, Sarasota y Tampa, Orlando y Daytona Beach (o una jornada libre en los parques), el Kennedy Space Center, y Miami y Miami Beach. Con una o dos noches más en Miami Beach desde 2.089 € por persona.",
      ],
      includes: INC(7),
      price: 1948, nights: 7, departureFrom: "Paris", image: "fl1",
      theme: "relax", feeling: "distraction", travelerTypes: "couples,family,groups", maxGuests: 49, order: -53996,
      chapters: [
        fl.chapter(["Les Keys et les Everglades", "The Keys and the Everglades", "Los Cayos y los Everglades"], ["Le sud de la péninsule.", "The south of the peninsula.", "El sur de la península."],
          ["fl4", "fl3", "fl2"],
          [fl.day(1, ...arr(MIA), "fl1"), fl.day(2, T_KEYS, KEYS, "fl4"), fl.day(3, ["Key West – Everglades – Fort Myers", "Key West – Everglades – Fort Myers", "Key West – Everglades – Fort Myers"], [GLADES[0], GLADES[1], GLADES[2]], "fl3")]),
        fl.chapter(["Orlando et l'espace", "Orlando and space", "Orlando y el espacio"], ["Le golfe du Mexique, Orlando et Cap Canaveral.", "The Gulf of Mexico, Orlando and Cape Canaveral.", "El golfo de México, Orlando y Cabo Cañaveral."],
          ["fl5", "fl2"],
          [
            fl.day(4, ["Sarasota, Tampa – Orlando", "Sarasota, Tampa – Orlando", "Sarasota, Tampa – Orlando"], ["La côte du golfe par Sarasota et Tampa, puis Orlando (la maison d'hiver d'Edison et Ford en option).", "The Gulf coast via Sarasota and Tampa, then Orlando (the Edison and Ford winter estates as an option).", "La costa del golfo por Sarasota y Tampa, y Orlando (la casa de invierno de Edison y Ford opcional)."], "fl5"),
            fl.day(5, ["Daytona Beach ou journée libre", "Daytona Beach or a free day", "Daytona Beach o jornada libre"], ["Daytona Beach et son circuit, ou une journée libre dans les parcs d'Orlando.", "Daytona Beach and its speedway, or a free day in the Orlando parks.", "Daytona Beach y su circuito, o una jornada libre en los parques de Orlando."], "fl2"),
            fl.day(6, ["Kennedy Space Center – Miami", "Kennedy Space Center – Miami", "Kennedy Space Center – Miami"], [KSC[0], KSC[1], KSC[2]], "kw7"),
          ]),
        fl.chapter(["Miami", "Miami", "Miami"], ["Art déco, street art et plage.", "Art Deco, street art and the beach.", "Art déco, arte urbano y playa."],
          ["fl7", "fl6", "fl8"],
          [fl.day(7, T_MIAMI, MIAMI, "fl7"), fl.day(8, ...dep(MIA), "fl8"), fl.day(9, T_HOME, HOME, "fl1")]),
      ],
    }),

    // ───────────── Floride 2. Cap sur la Floride — 9J/7N ─────────────
    fl.trip({
      slug: "etats-unis-cap-sur-la-floride-saint-augustine-9j",
      name: ["Cap sur la Floride : les Everglades, Saint Augustine, Orlando et Key West", "Course for Florida: the Everglades, Saint Augustine, Orlando and Key West", "Rumbo a Florida: los Everglades, San Agustín, Orlando y Key West"],
      tagline: ["La Floride dans le sens des aiguilles d'une montre, avec une journée libre à Orlando", "Florida clockwise, with a free day in Orlando", "Florida en el sentido de las agujas del reloj, con una jornada libre en Orlando"],
      description: [
        "Le tour complet de la Floride : les Everglades, Fort Myers, Sarasota et Tampa, Saint Augustine et Daytona Beach, une journée libre à Orlando, le Kennedy Space Center et Palm Beach, l'Overseas Highway jusqu'à Key West, puis Miami. Prix sans les vols (circuit terrestre seul). Avec 3 nuits de plus à Miami Beach (12 jours) à partir de 2 565 € par personne.",
        "The complete tour of Florida: the Everglades, Fort Myers, Sarasota and Tampa, Saint Augustine and Daytona Beach, a free day in Orlando, Kennedy Space Center and Palm Beach, the Overseas Highway to Key West, then Miami. Price without flights (land tour only). With 3 more nights in Miami Beach (12 days) from €2,565 per person.",
        "La vuelta completa a Florida: los Everglades, Fort Myers, Sarasota y Tampa, San Agustín y Daytona Beach, una jornada libre en Orlando, el Kennedy Space Center y Palm Beach, la Overseas Highway hasta Key West, y Miami. Precio sin vuelos (solo circuito terrestre). Con 3 noches más en Miami Beach (12 días) desde 2.565 € por persona.",
      ],
      includes: [
        "Circuit terrestre (vols en option),Transferts aéroport,7 nuits en hôtels de première catégorie,Pension selon programme,Visites du programme,Guide ou chauffeur-guide francophone",
        "Land tour (flights optional),Airport transfers,7 nights in first-class hotels,Meals as per programme,Visits in the programme,French-speaking guide or driver-guide",
        "Circuito terrestre (vuelos opcionales),Traslados al aeropuerto,7 noches en hoteles de primera categoría,Comidas según programa,Visitas del programa,Guía o chófer-guía francófono",
      ],
      price: 2011, nights: 7, departureFrom: "Paris", image: "fa3",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 49, order: -53995,
      chapters: [
        fl.chapter(["Le golfe et la côte atlantique", "The Gulf and the Atlantic coast", "El golfo y la costa atlántica"], ["Des Everglades à Saint Augustine.", "From the Everglades to Saint Augustine.", "De los Everglades a San Agustín."],
          ["fa4", "fa5", "fa2"],
          [
            fl.day(1, ...arr(MIA), "fa6"),
            fl.day(2, ["Everglades, Fort Myers, Sarasota – Tampa", "Everglades, Fort Myers, Sarasota – Tampa", "Everglades, Fort Myers, Sarasota – Tampa"], [`${GLADES[0]} Puis la côte du golfe jusqu'à Tampa.`, `${GLADES[1]} Then the Gulf coast to Tampa.`, `${GLADES[2]} Y la costa del golfo hasta Tampa.`], "fa4"),
            fl.day(3, ["Saint Augustine, Daytona – Orlando", "Saint Augustine, Daytona – Orlando", "San Agustín, Daytona – Orlando"], ["Saint Augustine, la plus ancienne ville des États-Unis, son fort espagnol et ses ruelles, puis Daytona Beach et Orlando.", "Saint Augustine, the oldest town in the United States, its Spanish fort and lanes, then Daytona Beach and Orlando.", "San Agustín, la ciudad más antigua de Estados Unidos, su fuerte español y sus callejuelas, y Daytona Beach y Orlando."], "fa2"),
          ]),
        fl.chapter(["Orlando, l'espace et les Keys", "Orlando, space and the Keys", "Orlando, el espacio y los Cayos"], ["Les parcs, Cap Canaveral et Key West.", "The parks, Cape Canaveral and Key West.", "Los parques, Cabo Cañaveral y Key West."],
          ["fa1", "fa3", "fa7"],
          [
            fl.day(4, ["Orlando, journée libre", "Orlando, free day", "Orlando, jornada libre"], ["Journée libre : les parcs d'attractions ou les centres commerciaux.", "A free day: the theme parks or the outlet malls.", "Jornada libre: los parques de atracciones o los centros comerciales."], "fa1"),
            fl.day(5, ["Kennedy Space Center, Palm Beach – Florida City", "Kennedy Space Center, Palm Beach – Florida City", "Kennedy Space Center, Palm Beach – Florida City"], [`${KSC[0]} Puis Palm Beach.`, `${KSC[1]} Then Palm Beach.`, `${KSC[2]} Y Palm Beach.`], "kw7"),
            fl.day(6, T_KEYS, KEYS, "fa3"),
            fl.day(7, ["Key West – Miami", "Key West – Miami", "Key West – Miami"], [`Retour vers Miami et visite panoramique : ${MIAMI[0].charAt(0).toLowerCase()}${MIAMI[0].slice(1)}`, `Back to Miami and a panoramic tour: ${MIAMI[1].charAt(0).toLowerCase()}${MIAMI[1].slice(1)}`, `Regreso a Miami y visita panorámica: ${MIAMI[2].charAt(0).toLowerCase()}${MIAMI[2].slice(1)}`], "fa6"),
            fl.day(8, ...dep(MIA), "fa7"), fl.day(9, T_HOME, HOME, "fa3"),
          ]),
      ],
    }),

    // ───────────── Floride 3. Floride + croisière MSC — 12J/10N ─────────────
    fl.trip({
      slug: "etats-unis-floride-croisiere-msc-bahamas-12j",
      name: ["Floride et croisière aux Bahamas : le tour de la Floride et 4 nuits à bord du MSC Seaside", "Florida and a Bahamas Cruise: the Florida Tour and 4 Nights aboard the MSC Seaside", "Florida y crucero por las Bahamas: la vuelta a Florida y 4 noches a bordo del MSC Seaside"],
      tagline: ["Six jours de circuit, puis Ocean Cay et Nassau en croisière", "Six days of touring, then Ocean Cay and Nassau by cruise ship", "Seis días de circuito y Ocean Cay y Nassau en crucero"],
      description: [
        "Le circuit « Cap sur la Floride » (Everglades, Tampa, Saint Augustine, Orlando, Kennedy Space Center, Key West) suivi de 4 nuits de croisière à bord du MSC Seaside depuis Miami : l'île privée d'Ocean Cay, réserve marine de MSC, une journée en mer et Nassau, aux Bahamas, avant un tour de Miami. Avec 3 nuits de plus à Miami Beach (15 jours) à partir de 3 037 € par personne.",
        "The 'Course for Florida' tour (Everglades, Tampa, Saint Augustine, Orlando, Kennedy Space Center, Key West) followed by 4 nights' cruising aboard the MSC Seaside from Miami: the private island of Ocean Cay, MSC's marine reserve, a day at sea and Nassau, in the Bahamas, before a tour of Miami. With 3 more nights in Miami Beach (15 days) from €3,037 per person.",
        "El circuito «Rumbo a Florida» (Everglades, Tampa, San Agustín, Orlando, Kennedy Space Center, Key West) seguido de 4 noches de crucero a bordo del MSC Seaside desde Miami: la isla privada de Ocean Cay, reserva marina de MSC, un día en el mar y Nassau, en las Bahamas, antes de una visita de Miami. Con 3 noches más en Miami Beach (15 días) desde 3.037 € por persona.",
      ],
      includes: [
        "Vols depuis la France (en option),Transferts aéroport et port,6 nuits en hôtels et 4 nuits de croisière,Pension selon programme et pension complète à bord,Visites du programme,Guide ou chauffeur-guide francophone",
        "Flights from France (optional),Airport and port transfers,6 nights in hotels and 4 nights' cruising,Meals as per programme and full board on board,Visits in the programme,French-speaking guide or driver-guide",
        "Vuelos desde Francia (opcionales),Traslados al aeropuerto y al puerto,6 noches en hoteles y 4 noches de crucero,Comidas según programa y pensión completa a bordo,Visitas del programa,Guía o chófer-guía francófono",
      ],
      price: 2457, nights: 10, departureFrom: "Toulouse", image: "ms4",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,family", maxGuests: 49, order: -53994,
      chapters: [
        fl.chapter(["Le tour de la Floride", "The Florida tour", "La vuelta a Florida"], ["Six jours sur la route.", "Six days on the road.", "Seis días en la carretera."],
          ["fa4", "fa2", "fa1", "fa3"],
          [
            fl.day(1, ...arr(MIA), "fa6"),
            fl.day(2, ["Everglades – Tampa", "Everglades – Tampa", "Everglades – Tampa"], [`${GLADES[0]} Puis la côte du golfe jusqu'à Tampa.`, `${GLADES[1]} Then the Gulf coast to Tampa.`, `${GLADES[2]} Y la costa del golfo hasta Tampa.`], "fa4"),
            fl.day(3, ["Saint Augustine – Orlando", "Saint Augustine – Orlando", "San Agustín – Orlando"], ["Saint Augustine, plus ancienne ville du pays, Daytona Beach, puis Orlando.", "Saint Augustine, the oldest town in the country, Daytona Beach, then Orlando.", "San Agustín, la ciudad más antigua del país, Daytona Beach y Orlando."], "fa2"),
            fl.day(4, ["Orlando, journée libre", "Orlando, free day", "Orlando, jornada libre"], ["Journée libre dans les parcs ou les centres commerciaux.", "A free day in the parks or the malls.", "Jornada libre en los parques o los centros comerciales."], "fa1"),
            fl.day(5, ["Kennedy Space Center – Florida City", "Kennedy Space Center – Florida City", "Kennedy Space Center – Florida City"], [KSC[0], KSC[1], KSC[2]], "kw7"),
            fl.day(6, T_KEYS, KEYS, "fa3"),
          ]),
        fl.chapter(["Croisière aux Bahamas", "A Bahamas cruise", "Crucero por las Bahamas"], ["Quatre nuits à bord du MSC Seaside.", "Four nights aboard the MSC Seaside.", "Cuatro noches a bordo del MSC Seaside."],
          ["ms1", "ms2", "ms4"],
          [
            fl.day(7, ["Embarquement à Miami", "Boarding in Miami", "Embarque en Miami"], ["Retour vers Miami et embarquement à bord du MSC Seaside.", "Back to Miami and boarding the MSC Seaside.", "Regreso a Miami y embarque a bordo del MSC Seaside."], "ms4"),
            fl.day(8, ["Ocean Cay", "Ocean Cay", "Ocean Cay"], ["L'île privée d'Ocean Cay, réserve marine de MSC : plages, lagon et snorkeling.", "The private island of Ocean Cay, MSC's marine reserve: beaches, lagoon and snorkelling.", "La isla privada de Ocean Cay, reserva marina de MSC: playas, laguna y esnórquel."], "fl4"),
            fl.day(9, ["Journée en mer", "A day at sea", "Un día en el mar"], ["Journée libre à bord : piscines, spectacles et restaurants.", "A free day on board: pools, shows and restaurants.", "Jornada libre a bordo: piscinas, espectáculos y restaurantes."], "ms2"),
            fl.day(10, ["Nassau, Bahamas", "Nassau, Bahamas", "Nassau, Bahamas"], ["Escale à Nassau, ancien repaire de pirates aux maisons coloniales.", "A stop in Nassau, a former pirates' haven with colonial houses.", "Escala en Nassau, antiguo refugio de piratas con casas coloniales."], "ms1"),
            fl.day(11, ["Miami – vol retour", "Miami – flight home", "Miami – vuelo de regreso"], [`Débarquement le matin et tour de Miami : ${MIAMI[0].charAt(0).toLowerCase()}${MIAMI[0].slice(1)} Envol pour la France.`, `Disembark in the morning and a tour of Miami: ${MIAMI[1].charAt(0).toLowerCase()}${MIAMI[1].slice(1)} Fly to France.`, `Desembarque por la mañana y visita de Miami: ${MIAMI[2].charAt(0).toLowerCase()}${MIAMI[2].slice(1)} Vuelo a Francia.`], "fa6"),
            fl.day(12, T_HOME, HOME, "ms4"),
          ]),
      ],
    }),

    // ───────────── Sud 1. Découverte de la Louisiane — 9J/7N ─────────────
    so.trip({
      slug: "etats-unis-decouverte-louisiane-plantations-bayous-9j",
      name: ["Découverte de la Louisiane : plantations, pays cajun, bayous et La Nouvelle-Orléans", "Discovering Louisiana: Plantations, Cajun Country, Bayous and New Orleans", "Descubriendo Luisiana: plantaciones, país cajún, bayous y Nueva Orleans"],
      tagline: ["Une semaine en Louisiane francophone, du Mississippi au Vieux Carré", "A week in French-speaking Louisiana, from the Mississippi to the French Quarter", "Una semana en la Luisiana francófona, del Misisipi al Barrio Francés"],
      description: [
        "La Louisiane en groupe : les plantations d'Oak Alley, Rosedown et Frogmore, Saint Francisville et Natchez au bord du Mississippi, Lafayette et Saint-Martinville en pays cajun, une balade en bateau dans les bayous, puis La Nouvelle-Orléans et son Vieux Carré. Avec une extension à New York (13 jours) à partir de 3 908 € par personne.",
        "Louisiana in a group: the plantations of Oak Alley, Rosedown and Frogmore, Saint Francisville and Natchez on the Mississippi, Lafayette and Saint-Martinville in Cajun country, a boat ride in the bayous, then New Orleans and its French Quarter. With an extension to New York (13 days) from €3,908 per person.",
        "Luisiana en grupo: las plantaciones de Oak Alley, Rosedown y Frogmore, Saint Francisville y Natchez a orillas del Misisipi, Lafayette y Saint-Martinville en el país cajún, un paseo en barco por los bayous, y Nueva Orleans y su Barrio Francés. Con extensión a Nueva York (13 días) desde 3.908 € por persona.",
      ],
      includes: INC(7),
      price: 2466, nights: 7, departureFrom: "Francfort", image: "lo4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 49, order: -53993,
      chapters: [
        so.chapter(["Les plantations du Mississippi", "The Mississippi plantations", "Las plantaciones del Misisipi"], ["Oak Alley, Rosedown, Natchez et Frogmore.", "Oak Alley, Rosedown, Natchez and Frogmore.", "Oak Alley, Rosedown, Natchez y Frogmore."],
          ["lo5", "lo3"],
          [
            so.day(1, ...arr(NOLA), "lo1"),
            so.day(2, ["Oak Alley – Bâton-Rouge", "Oak Alley – Baton Rouge", "Oak Alley – Baton Rouge"], ["La plantation d'Oak Alley et son allée de chênes, puis Bâton-Rouge.", "Oak Alley plantation and its avenue of oaks, then Baton Rouge.", "La plantación de Oak Alley y su avenida de robles, y Baton Rouge."], "lo5"),
            so.day(3, ["Saint Francisville – Natchez", "Saint Francisville – Natchez", "Saint Francisville – Natchez"], ["La plantation Rosedown et ses jardins à la française, puis Natchez au bord du Mississippi.", "Rosedown plantation and its French-style gardens, then Natchez on the Mississippi.", "La plantación Rosedown y sus jardines a la francesa, y Natchez a orillas del Misisipi."], "lo3"),
            so.day(4, ["Frogmore – Lafayette", "Frogmore – Lafayette", "Frogmore – Lafayette"], ["La plantation de coton de Frogmore, encore en activité, puis Lafayette.", "The Frogmore cotton plantation, still working, then Lafayette.", "La plantación de algodón de Frogmore, todavía en actividad, y Lafayette."], "lo5"),
          ]),
        so.chapter(["Le pays cajun et les bayous", "Cajun country and the bayous", "El país cajún y los bayous"], ["La Louisiane francophone.", "French-speaking Louisiana.", "La Luisiana francófona."],
          ["lo4", "lo2"],
          [
            so.day(5, ["Saint-Martinville – Houma", "Saint-Martinville – Houma", "Saint-Martinville – Houma"], ["Saint-Martinville, capitale du pays cajun attachée à ses racines francophones, puis Houma.", "Saint-Martinville, capital of Cajun country and attached to its French roots, then Houma.", "Saint-Martinville, capital del país cajún apegada a sus raíces francófonas, y Houma."], "lo2"),
            so.day(6, ["Les bayous – La Nouvelle-Orléans", "The bayous – New Orleans", "Los bayous – Nueva Orleans"], ["Balade en bateau dans les bayous à la rencontre des « cocodries », puis La Nouvelle-Orléans.", "A boat ride in the bayous to meet the 'cocodries' (alligators), then New Orleans.", "Paseo en barco por los bayous al encuentro de los «cocodries», y Nueva Orleans."], "lo4"),
          ]),
        so.chapter([NOLA[0], NOLA[1], NOLA[2]], ["La ville du jazz.", "The city of jazz.", "La ciudad del jazz."],
          ["lo7", "lo8", "lo6", "lo1"],
          [so.day(7, T_FQ, FQ, "lo7"), so.day(8, ...dep(NOLA), "lo8"), so.day(9, T_HOME, HOME, "lo1")]),
      ],
    }),

    // ───────────── Sud 2. Rythmes du Sud — 12J/10N ─────────────
    so.trip({
      slug: "etats-unis-rythmes-du-sud-houston-memphis-nashville-12j",
      name: ["Rythmes du Sud : Houston, la Louisiane, Memphis, Nashville et Atlanta", "Rhythms of the South: Houston, Louisiana, Memphis, Nashville and Atlanta", "Ritmos del Sur: Houston, Luisiana, Memphis, Nashville y Atlanta"],
      tagline: ["La NASA, le pays cajun, le jazz, le blues et la country", "NASA, Cajun country, jazz, blues and country music", "La NASA, el país cajún, el jazz, el blues y el country"],
      description: [
        "Le Sud des États-Unis au rythme de sa musique : le Space Center de la NASA à Houston, le pays cajun et la fabrique de Tabasco d'Avery Island, La Nouvelle-Orléans et son Vieux Carré, la route des Plantations et Bâton-Rouge, Memphis et Graceland, Nashville et sa country, puis Atlanta.",
        "The American South to the rhythm of its music: NASA's Space Center in Houston, Cajun country and the Tabasco factory on Avery Island, New Orleans and its French Quarter, the Plantation Road and Baton Rouge, Memphis and Graceland, Nashville and its country music, then Atlanta.",
        "El Sur de Estados Unidos al ritmo de su música: el Space Center de la NASA en Houston, el país cajún y la fábrica de Tabasco de Avery Island, Nueva Orleans y su Barrio Francés, la ruta de las Plantaciones y Baton Rouge, Memphis y Graceland, Nashville y su country, y Atlanta.",
      ],
      includes: INC(10),
      price: 3193, nights: 10, departureFrom: "Genève", image: "rs7",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,groups,solo", maxGuests: 49, order: -53992,
      chapters: [
        so.chapter(["Houston et la Louisiane", "Houston and Louisiana", "Houston y Luisiana"], ["L'espace, le pays cajun et La Nouvelle-Orléans.", "Space, Cajun country and New Orleans.", "El espacio, el país cajún y Nueva Orleans."],
          ["rs3", "rs5", "rs2", "rs8"],
          [
            so.day(1, ...arr(["Houston", "Houston", "Houston"]), "rs3"), so.day(2, T_NASA, NASA, "rs3"),
            so.day(3, ["Lafayette – La Nouvelle-Orléans", "Lafayette – New Orleans", "Lafayette – Nueva Orleans"], [CAJUN[0], CAJUN[1], CAJUN[2]], "rs5"),
            so.day(4, T_FQ, FQ, "rs2"), so.day(5, T_PLANT, PLANT, "rs8"),
          ]),
        so.chapter(["Memphis, Nashville et Atlanta", "Memphis, Nashville and Atlanta", "Memphis, Nashville y Atlanta"], ["Le blues, le rock et la country.", "Blues, rock and country.", "El blues, el rock y el country."],
          ["rs4", "rs7", "rs6", "rs1"],
          [
            so.day(6, ["Bâton-Rouge – Memphis", "Baton Rouge – Memphis", "Baton Rouge – Memphis"], ["Les capitoles de Bâton-Rouge, puis la longue route vers Memphis.", "Baton Rouge's capitols, then the long drive to Memphis.", "Los capitolios de Baton Rouge y la larga carretera hacia Memphis."], "rs1"),
            so.day(7, T_GRACELAND, GRACELAND, "rs4"),
            so.day(8, ["Memphis – Nashville", "Memphis – Nashville", "Memphis – Nashville"], ["Tour de Memphis, puis la route vers Nashville.", "A tour of Memphis, then the drive to Nashville.", "Vuelta por Memphis y la carretera hacia Nashville."], "rs6"),
            so.day(9, ["Nashville – Atlanta", "Nashville – Atlanta", "Nashville – Atlanta"], [`${NASH[0]} Puis Atlanta.`, `${NASH[1]} Then Atlanta.`, `${NASH[2]} Y Atlanta.`], "rs7"),
            so.day(10, T_ATL, ATLD, "rs6"), so.day(11, ...dep(ATL), "rs1"), so.day(12, T_HOME, HOME, "rs7"),
          ]),
      ],
    }),

    // ───────────── Sud 3. Grand Tour du Sud — 14J/12N ─────────────
    so.trip({
      slug: "etats-unis-grand-tour-du-sud-atlanta-key-west-14j",
      name: ["Grand tour du Sud : d'Atlanta à Key West par Nashville, Memphis et La Nouvelle-Orléans", "Grand Tour of the South: from Atlanta to Key West via Nashville, Memphis and New Orleans", "Gran tour del Sur: de Atlanta a Key West por Nashville, Memphis y Nueva Orleans"],
      tagline: ["La musique du Sud, la Louisiane et la Floride en quatorze jours", "The music of the South, Louisiana and Florida in fourteen days", "La música del Sur, Luisiana y Florida en catorce días"],
      description: [
        "Le grand voyage du Sud : Atlanta, Nashville et la country, Memphis et Graceland, Natchez et les plantations, le pays cajun, La Nouvelle-Orléans, l'Alabama et Tallahassee, les sources d'Homosassa, Orlando et le Kennedy Space Center, les Everglades, Key West, puis Miami. Avec 3 nuits de plus à Miami Beach (17 jours) à partir de 3 870 € par personne.",
        "The great journey of the South: Atlanta, Nashville and country music, Memphis and Graceland, Natchez and the plantations, Cajun country, New Orleans, Alabama and Tallahassee, the Homosassa springs, Orlando and Kennedy Space Center, the Everglades, Key West, then Miami. With 3 more nights in Miami Beach (17 days) from €3,870 per person.",
        "El gran viaje del Sur: Atlanta, Nashville y el country, Memphis y Graceland, Natchez y las plantaciones, el país cajún, Nueva Orleans, Alabama y Tallahassee, los manantiales de Homosassa, Orlando y el Kennedy Space Center, los Everglades, Key West, y Miami. Con 3 noches más en Miami Beach (17 días) desde 3.870 € por persona.",
      ],
      includes: INC(12),
      price: 3347, nights: 12, departureFrom: "Bâle", image: "gs4",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 52, order: -53991,
      chapters: [
        so.chapter(["Atlanta, Nashville et Memphis", "Atlanta, Nashville and Memphis", "Atlanta, Nashville y Memphis"], ["La musique du Sud.", "The music of the South.", "La música del Sur."],
          ["gs3", "gs4", "rs7"],
          [
            so.day(1, ...arr(ATL), "gs3"),
            so.day(2, ["Atlanta – Nashville", "Atlanta – Nashville", "Atlanta – Nashville"], ["Tour d'Atlanta (le Capitole, le musée de Coca-Cola), puis Nashville.", "A tour of Atlanta (the Capitol, the World of Coca-Cola), then Nashville.", "Vuelta por Atlanta (el Capitolio, el museo de Coca-Cola) y Nashville."], "gs3"),
            so.day(3, ["Nashville – Memphis", "Nashville – Memphis", "Nashville – Memphis"], [`${NASH[0]} Puis Memphis.`, `${NASH[1]} Then Memphis.`, `${NASH[2]} Y Memphis.`], "rs7"),
            so.day(4, ["Graceland – Natchez", "Graceland – Natchez", "Graceland – Natchez"], ["Graceland, dernière demeure d'Elvis Presley, puis la traversée du Mississippi jusqu'à Natchez.", "Graceland, Elvis Presley's last home, then across Mississippi to Natchez.", "Graceland, última residencia de Elvis Presley, y la travesía de Misisipi hasta Natchez."], "gs4"),
          ]),
        so.chapter(["La Louisiane", "Louisiana", "Luisiana"], ["Plantations, pays cajun et jazz.", "Plantations, Cajun country and jazz.", "Plantaciones, país cajún y jazz."],
          ["gs5", "gs6", "gs1"],
          [
            so.day(5, ["Saint Francisville – Lafayette", "Saint Francisville – Lafayette", "Saint Francisville – Lafayette"], ["La plantation Greenwood à Saint Francisville, Bâton-Rouge, puis Lafayette.", "Greenwood plantation in Saint Francisville, Baton Rouge, then Lafayette.", "La plantación Greenwood en Saint Francisville, Baton Rouge y Lafayette."], "gs1"),
            so.day(6, ["Pays cajun – La Nouvelle-Orléans", "Cajun country – New Orleans", "País cajún – Nueva Orleans"], [CAJUN[0], CAJUN[1], CAJUN[2]], "gs6"),
            so.day(7, T_FQ, FQ, "gs5"),
          ]),
        so.chapter(["La Floride", "Florida", "Florida"], ["De Tallahassee à Miami.", "From Tallahassee to Miami.", "De Tallahassee a Miami."],
          ["gs2", "gs8", "kw1", "fl7"],
          [
            so.day(8, ["Mobile – Tallahassee", "Mobile – Tallahassee", "Mobile – Tallahassee"], ["L'Alabama, théâtre de la guerre de Sécession et du mouvement des droits civiques, Mobile, puis Tallahassee.", "Alabama, scene of the Civil War and the civil rights movement, Mobile, then Tallahassee.", "Alabama, escenario de la guerra de Secesión y del movimiento por los derechos civiles, Mobile y Tallahassee."], "gs1"),
            so.day(9, ["Homosassa Springs – Orlando", "Homosassa Springs – Orlando", "Homosassa Springs – Orlando"], ["Le parc d'Homosassa Springs et ses lamantins, puis Orlando.", "Homosassa Springs park and its manatees, then Orlando.", "El parque de Homosassa Springs y sus manatíes, y Orlando."], "gs8"),
            so.day(10, ["Kennedy Space Center – Tampa", "Kennedy Space Center – Tampa", "Kennedy Space Center – Tampa"], [KSC[0], KSC[1], KSC[2]], "gs2"),
            so.day(11, ["Sarasota, Everglades – Florida City", "Sarasota, Everglades – Florida City", "Sarasota, Everglades – Florida City"], [`Sarasota et Fort Myers. ${GLADES[0]}`, `Sarasota and Fort Myers. ${GLADES[1]}`, `Sarasota y Fort Myers. ${GLADES[2]}`], "gs8"),
            so.day(12, ["Key West – Miami Beach", "Key West – Miami Beach", "Key West – Miami Beach"], [KEYS[0], KEYS[1], KEYS[2]], "kw1"),
            so.day(13, ["Miami – vol retour", "Miami – flight home", "Miami – vuelo de regreso"], [`Tour de Miami : ${MIAMI[0].charAt(0).toLowerCase()}${MIAMI[0].slice(1)} Envol pour la France.`, `A tour of Miami: ${MIAMI[1].charAt(0).toLowerCase()}${MIAMI[1].slice(1)} Fly to France.`, `Visita de Miami: ${MIAMI[2].charAt(0).toLowerCase()}${MIAMI[2].slice(1)} Vuelo a Francia.`], "fl7"),
            so.day(14, T_HOME, HOME, "gs4"),
          ]),
      ],
    }),

    // ───────────── Sud 4. L'âme du Sud — 14J/12N ─────────────
    so.trip({
      slug: "etats-unis-ame-du-sud-texas-bayous-atlanta-14j",
      name: ["L'âme du Sud : du Far West texan aux bayous, jusqu'à Atlanta", "Soul of the South: from the Texan Far West to the Bayous and Atlanta", "El alma del Sur: del Lejano Oeste texano a los bayous, hasta Atlanta"],
      tagline: ["Dallas, Fort Alamo, la NASA, La Nouvelle-Orléans, Graceland et Nashville", "Dallas, the Alamo, NASA, New Orleans, Graceland and Nashville", "Dallas, El Álamo, la NASA, Nueva Orleans, Graceland y Nashville"],
      description: [
        "Le Sud du Texas à la Géorgie : Dallas et Fort Worth, San Antonio et Fort Alamo, le Space Center de Houston, le pays cajun et Avery Island, La Nouvelle-Orléans, la plantation d'Oak Alley et Bâton-Rouge, Memphis et Graceland, Nashville, puis Atlanta.",
        "The South from Texas to Georgia: Dallas and Fort Worth, San Antonio and the Alamo, Space Center Houston, Cajun country and Avery Island, New Orleans, Oak Alley plantation and Baton Rouge, Memphis and Graceland, Nashville, then Atlanta.",
        "El Sur de Texas a Georgia: Dallas y Fort Worth, San Antonio y El Álamo, el Space Center de Houston, el país cajún y Avery Island, Nueva Orleans, la plantación de Oak Alley y Baton Rouge, Memphis y Graceland, Nashville, y Atlanta.",
      ],
      includes: INC(12),
      price: 3617, nights: 12, departureFrom: "Nice", image: "am3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 49, order: -53990,
      chapters: [
        so.chapter(["Le Texas", "Texas", "Texas"], ["Cow-boys, Alamo et NASA.", "Cowboys, the Alamo and NASA.", "Vaqueros, El Álamo y la NASA."],
          ["am3", "am8", "am1"],
          [
            so.day(1, ...arr(["Dallas", "Dallas", "Dallas"]), "am1"),
            so.day(2, ["Dallas, Fort Worth – San Antonio", "Dallas, Fort Worth – San Antonio", "Dallas, Fort Worth – San Antonio"], [DALLAS[0], DALLAS[1], DALLAS[2]], "am3"),
            so.day(3, ["San Antonio – Houston", "San Antonio – Houston", "San Antonio – Houston"], [ALAMO[0], ALAMO[1], ALAMO[2]], "am8"),
            so.day(4, T_NASA, NASA, "rs3"),
          ]),
        so.chapter(["La Louisiane", "Louisiana", "Luisiana"], ["Le pays cajun, La Nouvelle-Orléans et les plantations.", "Cajun country, New Orleans and the plantations.", "El país cajún, Nueva Orleans y las plantaciones."],
          ["am2", "am5", "am7"],
          [
            so.day(5, ["Lafayette – La Nouvelle-Orléans", "Lafayette – New Orleans", "Lafayette – Nueva Orleans"], [CAJUN[0], CAJUN[1], CAJUN[2]], "am7"),
            so.day(6, T_FQ, FQ, "am2"), so.day(7, T_PLANT, PLANT, "am5"),
          ]),
        so.chapter(["Memphis, Nashville et Atlanta", "Memphis, Nashville and Atlanta", "Memphis, Nashville y Atlanta"], ["Le blues, le rock et la country.", "Blues, rock and country.", "El blues, el rock y el country."],
          ["am4", "am6", "rs7"],
          [
            so.day(8, ["Bâton-Rouge – Memphis", "Baton Rouge – Memphis", "Baton Rouge – Memphis"], ["Le Capitole néogothique et le Capitole de Louisiane, puis Memphis.", "The neo-Gothic Old State Capitol and the Louisiana State Capitol, then Memphis.", "El Capitolio neogótico y el Capitolio de Luisiana, y Memphis."], "am6"),
            so.day(9, T_GRACELAND, GRACELAND, "am4"),
            so.day(10, ["Memphis – Nashville", "Memphis – Nashville", "Memphis – Nashville"], ["Tour de Memphis, puis Nashville.", "A tour of Memphis, then Nashville.", "Vuelta por Memphis y Nashville."], "am6"),
            so.day(11, ["Nashville – Atlanta", "Nashville – Atlanta", "Nashville – Atlanta"], [`${NASH[0]} Puis Atlanta.`, `${NASH[1]} Then Atlanta.`, `${NASH[2]} Y Atlanta.`], "rs7"),
            so.day(12, T_ATL, ATLD, "gs3"), so.day(13, ...dep(ATL), "gs3"), so.day(14, T_HOME, HOME, "am3"),
          ]),
      ],
    }),

    // ───────────── Sud 5. Des casinos aux bayous — 14J/12N ─────────────
    so.trip({
      slug: "etats-unis-casinos-aux-bayous-route-66-14j",
      name: ["Des casinos aux bayous : de Las Vegas à La Nouvelle-Orléans par la Route 66 et le Texas", "From Casinos to Bayous: from Las Vegas to New Orleans via Route 66 and Texas", "De los casinos a los bayous: de Las Vegas a Nueva Orleans por la Ruta 66 y Texas"],
      tagline: ["Le Grand Canyon, Monument Valley, les pueblos du Nouveau-Mexique, le Texas et la Louisiane", "The Grand Canyon, Monument Valley, the pueblos of New Mexico, Texas and Louisiana", "El Gran Cañón, Monument Valley, los pueblos de Nuevo México, Texas y Luisiana"],
      description: [
        "L'Amérique d'ouest en est : Las Vegas et la Vallée de Feu, la Route 66 et le Grand Canyon, Monument Valley, Mesa Verde et ses habitations troglodytes, Taos et Santa Fe, le Cadillac Ranch d'Amarillo, le Palo Duro Canyon, Fort Worth et Dallas, San Antonio, la NASA à Houston, Lafayette, Oak Alley et La Nouvelle-Orléans. Avec deux nuits de plus à La Nouvelle-Orléans (16 jours) à partir de 3 890 € par personne, ou un pré-tour à San Francisco (17 jours) à partir de 4 444 €.",
        "America from west to east: Las Vegas and the Valley of Fire, Route 66 and the Grand Canyon, Monument Valley, Mesa Verde and its cliff dwellings, Taos and Santa Fe, Amarillo's Cadillac Ranch, Palo Duro Canyon, Fort Worth and Dallas, San Antonio, NASA in Houston, Lafayette, Oak Alley and New Orleans. With two more nights in New Orleans (16 days) from €3,890 per person, or a pre-tour in San Francisco (17 days) from €4,444.",
        "Estados Unidos de oeste a este: Las Vegas y el Valle de Fuego, la Ruta 66 y el Gran Cañón, Monument Valley, Mesa Verde y sus viviendas trogloditas, Taos y Santa Fe, el Cadillac Ranch de Amarillo, el Palo Duro Canyon, Fort Worth y Dallas, San Antonio, la NASA en Houston, Lafayette, Oak Alley y Nueva Orleans. Con dos noches más en Nueva Orleans (16 días) desde 3.890 € por persona, o un pretour en San Francisco (17 días) desde 4.444 €.",
      ],
      includes: INC(12),
      price: 3662, nights: 12, departureFrom: "Nice", image: "cb3",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 49, order: -53989,
      chapters: [
        so.chapter(["Les parcs de l'Ouest", "The parks of the West", "Los parques del Oeste"], ["Las Vegas, le Grand Canyon et Monument Valley.", "Las Vegas, the Grand Canyon and Monument Valley.", "Las Vegas, el Gran Cañón y Monument Valley."],
          ["cb1", "cb2", "cb3", "cb4"],
          [
            so.day(1, ...arr(["Las Vegas", "Las Vegas", "Las Vegas"]), "cb1"),
            so.day(2, ["La Vallée de Feu", "The Valley of Fire", "El Valle de Fuego"], ["La Vallée de Feu, premier parc d'État du Nevada, ses roches rouges et ses pétroglyphes.", "The Valley of Fire, Nevada's first state park, its red rocks and petroglyphs.", "El Valle de Fuego, primer parque estatal de Nevada, sus rocas rojas y sus petroglifos."], "cb1"),
            so.day(3, ["Route 66 – Grand Canyon", "Route 66 – Grand Canyon", "Ruta 66 – Gran Cañón"], ["Seligman, sur la Route 66, puis le Grand Canyon et Tuba City.", "Seligman, on Route 66, then the Grand Canyon and Tuba City.", "Seligman, en la Ruta 66, y el Gran Cañón y Tuba City."], "cb2"),
            so.day(4, ["Monument Valley – Cortez", "Monument Valley – Cortez", "Monument Valley – Cortez"], ["Les buttes de grès rouge de Monument Valley, terre des Navajos, puis Cortez.", "The red sandstone buttes of Monument Valley, Navajo land, then Cortez.", "Las mesetas de arenisca roja de Monument Valley, tierra de los navajos, y Cortez."], "cb3"),
            so.day(5, ["Mesa Verde – Durango", "Mesa Verde – Durango", "Mesa Verde – Durango"], ["Le parc de Mesa Verde, classé à l'Unesco, et ses villages troglodytes des Indiens pueblos, puis Durango.", "Mesa Verde park, a UNESCO site, and the cliff villages of the Pueblo people, then Durango.", "El parque de Mesa Verde, inscrito en la Unesco, y sus pueblos trogloditas de los indios pueblo, y Durango."], "cb4"),
          ]),
        so.chapter(["Le Nouveau-Mexique et le Texas", "New Mexico and Texas", "Nuevo México y Texas"], ["Pueblos, Route 66 et cow-boys.", "Pueblos, Route 66 and cowboys.", "Pueblos, Ruta 66 y vaqueros."],
          ["cb5", "cb6", "cb7", "cb8"],
          [
            so.day(6, ["Taos – Santa Fe", "Taos – Santa Fe", "Taos – Santa Fe"], ["Le Taos Pueblo, habité depuis plus de mille ans, puis Santa Fe.", "Taos Pueblo, inhabited for more than a thousand years, then Santa Fe.", "El Taos Pueblo, habitado desde hace más de mil años, y Santa Fe."], "cb5"),
            so.day(7, ["Santa Fe – Amarillo", "Santa Fe – Amarillo", "Santa Fe – Amarillo"], ["L'architecture en adobe de Santa Fe, la Route 66 par Tucumcari et le Cadillac Ranch.", "The adobe architecture of Santa Fe, Route 66 via Tucumcari and the Cadillac Ranch.", "La arquitectura de adobe de Santa Fe, la Ruta 66 por Tucumcari y el Cadillac Ranch."], "cb6"),
            so.day(8, ["Palo Duro Canyon – Fort Worth", "Palo Duro Canyon – Fort Worth", "Palo Duro Canyon – Fort Worth"], ["Le Palo Duro Canyon, « Grand Canyon du Texas », puis Fort Worth.", "Palo Duro Canyon, the 'Grand Canyon of Texas', then Fort Worth.", "El Palo Duro Canyon, «Gran Cañón de Texas», y Fort Worth."], "cb7"),
            so.day(9, ["Fort Worth, Dallas – San Antonio", "Fort Worth, Dallas – San Antonio", "Fort Worth, Dallas – San Antonio"], [DALLAS[0], DALLAS[1], DALLAS[2]], "cb7"),
            so.day(10, ["San Antonio – Houston", "San Antonio – Houston", "San Antonio – Houston"], [ALAMO[0], ALAMO[1], ALAMO[2]], "cb8"),
          ]),
        so.chapter(["La Louisiane", "Louisiana", "Luisiana"], ["La NASA, le pays cajun et La Nouvelle-Orléans.", "NASA, Cajun country and New Orleans.", "La NASA, el país cajún y Nueva Orleans."],
          ["lo5", "lo7"],
          [
            so.day(11, T_NASA, NASA, "rs3"),
            so.day(12, ["Bâton-Rouge, Oak Alley – La Nouvelle-Orléans", "Baton Rouge, Oak Alley – New Orleans", "Baton Rouge, Oak Alley – Nueva Orleans"], ["Bâton-Rouge, la plantation d'Oak Alley, puis La Nouvelle-Orléans.", "Baton Rouge, Oak Alley plantation, then New Orleans.", "Baton Rouge, la plantación de Oak Alley y Nueva Orleans."], "lo5"),
            so.day(13, ...dep(NOLA), "lo7"), so.day(14, T_HOME, HOME, "cb3"),
          ]),
      ],
    }),

    // ───────────── Sud 6. Music Road — 14J/12N ─────────────
    so.trip({
      slug: "etats-unis-music-road-dallas-memphis-chicago-14j",
      name: ["Music Road : de Dallas à Chicago par La Nouvelle-Orléans, Memphis et Nashville", "Music Road: from Dallas to Chicago via New Orleans, Memphis and Nashville", "Music Road: de Dallas a Chicago por Nueva Orleans, Memphis y Nashville"],
      tagline: ["Du Texas aux Grands Lacs, sur les routes du jazz, du blues, du rock et de la country", "From Texas to the Great Lakes, on the roads of jazz, blues, rock and country", "De Texas a los Grandes Lagos, por las rutas del jazz, el blues, el rock y el country"],
      description: [
        "La route de la musique américaine : Dallas et Fort Worth, San Antonio, la NASA à Houston, le pays cajun, La Nouvelle-Orléans, les plantations et Bâton-Rouge, Memphis et Graceland, Nashville, l'Indianapolis Motor Speedway, puis Chicago, berceau du blues électrique.",
        "The road of American music: Dallas and Fort Worth, San Antonio, NASA in Houston, Cajun country, New Orleans, the plantations and Baton Rouge, Memphis and Graceland, Nashville, the Indianapolis Motor Speedway, then Chicago, home of the electric blues.",
        "La ruta de la música estadounidense: Dallas y Fort Worth, San Antonio, la NASA en Houston, el país cajún, Nueva Orleans, las plantaciones y Baton Rouge, Memphis y Graceland, Nashville, el Indianapolis Motor Speedway, y Chicago, cuna del blues eléctrico.",
      ],
      includes: INC(12),
      price: 3704, nights: 12, departureFrom: "Paris", image: "mr4",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,groups,solo", maxGuests: 53, order: -53988,
      chapters: [
        so.chapter(["Le Texas", "Texas", "Texas"], ["Dallas, San Antonio et Houston.", "Dallas, San Antonio and Houston.", "Dallas, San Antonio y Houston."],
          ["mr1", "mr2", "mr3", "mr4"],
          [so.day(1, ...arr(["Dallas", "Dallas", "Dallas"]), "mr1"), so.day(2, ["Dallas, Fort Worth – San Antonio", "Dallas, Fort Worth – San Antonio", "Dallas, Fort Worth – San Antonio"], [DALLAS[0], DALLAS[1], DALLAS[2]], "mr2"), so.day(3, ["San Antonio – Houston", "San Antonio – Houston", "San Antonio – Houston"], [ALAMO[0], ALAMO[1], ALAMO[2]], "mr3"), so.day(4, T_NASA, NASA, "mr3")]),
        so.chapter(["La Louisiane", "Louisiana", "Luisiana"], ["Le pays cajun, le jazz et les plantations.", "Cajun country, jazz and the plantations.", "El país cajún, el jazz y las plantaciones."],
          ["mr5", "mr6", "mr7", "mr8"],
          [
            so.day(5, ["Lafayette, Thibodaux – La Nouvelle-Orléans", "Lafayette, Thibodaux – New Orleans", "Lafayette, Thibodaux – Nueva Orleans"], ["Le musée acadien de Lafayette, puis La Nouvelle-Orléans.", "The Acadian museum in Lafayette, then New Orleans.", "El museo acadiano de Lafayette y Nueva Orleans."], "mr6"),
            so.day(6, T_FQ, FQ, "mr5"), so.day(7, T_PLANT, PLANT, "mr7"),
            so.day(8, ["Bâton-Rouge – Memphis", "Baton Rouge – Memphis", "Baton Rouge – Memphis"], ["Les capitoles de Bâton-Rouge, puis Memphis.", "Baton Rouge's capitols, then Memphis.", "Los capitolios de Baton Rouge y Memphis."], "mr8"),
          ]),
        so.chapter(["Memphis, Nashville et Chicago", "Memphis, Nashville and Chicago", "Memphis, Nashville y Chicago"], ["Le rock, la country et le blues électrique.", "Rock, country and the electric blues.", "El rock, el country y el blues eléctrico."],
          ["am4", "rs7", "ch1", "ch8"],
          [
            so.day(9, T_GRACELAND, GRACELAND, "am4"),
            so.day(10, ["Memphis – Nashville", "Memphis – Nashville", "Memphis – Nashville"], ["Tour de Memphis, puis Nashville.", "A tour of Memphis, then Nashville.", "Vuelta por Memphis y Nashville."], "am6"),
            so.day(11, ["Nashville – Indianapolis", "Nashville – Indianapolis", "Nashville – Indianapolis"], [`${NASH[0]} Puis Indianapolis.`, `${NASH[1]} Then Indianapolis.`, `${NASH[2]} Y Indianápolis.`], "rs7"),
            so.day(12, ["Indianapolis – Chicago", "Indianapolis – Chicago", "Indianápolis – Chicago"], ["L'Indianapolis Motor Speedway, temple de la vitesse, puis Chicago.", "The Indianapolis Motor Speedway, a temple of speed, then Chicago.", "El Indianapolis Motor Speedway, templo de la velocidad, y Chicago."], "ch1"),
            so.day(13, ["Chicago – vol retour", "Chicago – flight home", "Chicago – vuelo de regreso"], ["Chicago et son architecture moderne, puis envol pour la France.", "Chicago and its modern architecture, then fly to France.", "Chicago y su arquitectura moderna, y vuelo a Francia."], "ch8"),
            so.day(14, T_HOME, HOME, "mr4"),
          ]),
      ],
    }),

    // ───────────── Sud 7. Texas-Louisiane intimiste — 14J/12N ─────────────
    so.trip({
      slug: "etats-unis-texas-louisiane-intimiste-14j",
      name: ["Texas et Louisiane intimistes : San Antonio, le Hill Country, les bayous et La Nouvelle-Orléans", "Texas and Louisiana Up Close: San Antonio, Hill Country, the Bayous and New Orleans", "Texas y Luisiana íntimos: San Antonio, el Hill Country, los bayous y Nueva Orleans"],
      tagline: ["Douze voyageurs au plus, de la capitale des cow-boys aux plantations du Mississippi", "Twelve travellers at most, from the cowboy capital to the Mississippi plantations", "Doce viajeros como máximo, de la capital de los vaqueros a las plantaciones del Misisipi"],
      description: [
        "Le Texas et la Louisiane en groupe de 12 personnes au plus : Houston, San Antonio et ses missions classées à l'Unesco, le Hill Country et Bandera, « capitale mondiale des cow-boys », Austin, Fort Worth et Dallas, Natchitoches, Natchez, Saint Francisville et Bâton-Rouge, les bayous en bateau et Oak Alley, La Nouvelle-Orléans, Avery Island et le pays cajun.",
        "Texas and Louisiana in a group of 12 at most: Houston, San Antonio and its UNESCO-listed missions, Hill Country and Bandera, 'Cowboy Capital of the World', Austin, Fort Worth and Dallas, Natchitoches, Natchez, Saint Francisville and Baton Rouge, the bayous by boat and Oak Alley, New Orleans, Avery Island and Cajun country.",
        "Texas y Luisiana en grupo de 12 personas como máximo: Houston, San Antonio y sus misiones inscritas en la Unesco, el Hill Country y Bandera, «capital mundial de los vaqueros», Austin, Fort Worth y Dallas, Natchitoches, Natchez, Saint Francisville y Baton Rouge, los bayous en barco y Oak Alley, Nueva Orleans, Avery Island y el país cajún.",
      ],
      includes: INTI(12),
      price: 5429, nights: 12, departureFrom: "Bâle", image: "tx4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -53987,
      chapters: [
        so.chapter(["Le Texas", "Texas", "Texas"], ["Missions, Hill Country, Austin et Fort Worth.", "Missions, Hill Country, Austin and Fort Worth.", "Misiones, Hill Country, Austin y Fort Worth."],
          ["tx4", "tx5", "tx9", "tx2", "tx1"],
          [
            so.day(1, ...arr(["Houston", "Houston", "Houston"]), "tx1"),
            so.day(2, ["Houston – San Antonio", "Houston – San Antonio", "Houston – San Antonio"], ["Route vers San Antonio et son River Walk.", "Drive to San Antonio and its River Walk.", "Carretera hacia San Antonio y su River Walk."], "tx4"),
            so.day(3, ["San Antonio et ses missions", "San Antonio and its missions", "San Antonio y sus misiones"], ["Le parc historique des missions de San Antonio, classé à l'Unesco, et Fort Alamo.", "The San Antonio Missions historic park, a UNESCO site, and the Alamo.", "El parque histórico de las misiones de San Antonio, inscrito en la Unesco, y El Álamo."], "tx4"),
            so.day(4, ["Hill Country, Bandera – Austin", "Hill Country, Bandera – Austin", "Hill Country, Bandera – Austin"], ["Le Hill Country et Bandera, « capitale mondiale des cow-boys », puis Austin.", "Hill Country and Bandera, 'Cowboy Capital of the World', then Austin.", "El Hill Country y Bandera, «capital mundial de los vaqueros», y Austin."], "tx9"),
            so.day(5, ["Austin – Fort Worth", "Austin – Fort Worth", "Austin – Fort Worth"], ["Route vers Fort Worth et ses Stockyards.", "Drive to Fort Worth and its Stockyards.", "Carretera hacia Fort Worth y sus Stockyards."], "tx2"),
            so.day(6, ["Dallas – Shreveport", "Dallas – Shreveport", "Dallas – Shreveport"], ["Tour de Dallas et de son centre-ville, puis Shreveport, en Louisiane.", "A tour of Dallas and its downtown, then Shreveport, in Louisiana.", "Vuelta por Dallas y su centro, y Shreveport, en Luisiana."], "tx5"),
          ]),
        so.chapter(["La Louisiane", "Louisiana", "Luisiana"], ["Le Mississippi, les bayous et le pays cajun.", "The Mississippi, the bayous and Cajun country.", "El Misisipi, los bayous y el país cajún."],
          ["tx7", "tx6", "tx8", "tx3"],
          [
            so.day(7, ["Natchitoches – Natchez", "Natchitoches – Natchez", "Natchitoches – Natchez"], ["Le centre historique de Natchitoches, puis Natchez au bord du Mississippi.", "The historic centre of Natchitoches, then Natchez on the Mississippi.", "El centro histórico de Natchitoches y Natchez a orillas del Misisipi."], "tx7"),
            so.day(8, ["Saint Francisville, Bâton-Rouge – Darrow", "Saint Francisville, Baton Rouge – Darrow", "Saint Francisville, Baton Rouge – Darrow"], ["Saint Francisville, puis Bâton-Rouge et son Capitole.", "Saint Francisville, then Baton Rouge and its Capitol.", "Saint Francisville, y Baton Rouge y su Capitolio."], "tx8"),
            so.day(9, ["Les bayous, Oak Alley – La Nouvelle-Orléans", "The bayous, Oak Alley – New Orleans", "Los bayous, Oak Alley – Nueva Orleans"], ["En bateau à fond plat dans les bayous, la plantation d'Oak Alley, puis La Nouvelle-Orléans.", "By flat-bottomed boat in the bayous, Oak Alley plantation, then New Orleans.", "En barco de fondo plano por los bayous, la plantación de Oak Alley y Nueva Orleans."], "tx6"),
            so.day(10, T_FQ, FQ, "tx3"),
            so.day(11, ["Avery Island, Saint-Martinville – Lafayette", "Avery Island, Saint-Martinville – Lafayette", "Avery Island, Saint-Martinville – Lafayette"], [CAJUN[0], CAJUN[1], CAJUN[2]], "tx7"),
            so.day(12, ["Lafayette – Houston", "Lafayette – Houston", "Lafayette – Houston"], ["Route vers Houston, quatrième ville du pays.", "Drive to Houston, the country's fourth-largest city.", "Carretera hacia Houston, cuarta ciudad del país."], "tx1"),
            so.day(13, ...dep(["Houston", "Houston", "Houston"]), "tx5"), so.day(14, T_HOME, HOME, "tx4"),
          ]),
      ],
    }),

    // ───────────── Sud 8. South & Music intimiste — 15J/13N ─────────────
    so.trip({
      slug: "etats-unis-south-music-intimiste-blues-bayous-15j",
      name: ["South & Music intimiste : les Great Smoky Mountains, la route du blues et la Louisiane", "South & Music Up Close: the Great Smoky Mountains, the Blues Highway and Louisiana", "South & Music íntimo: las Great Smoky Mountains, la ruta del blues y Luisiana"],
      tagline: ["Douze voyageurs au plus, d'Atlanta à La Nouvelle-Orléans par la Highway 61", "Twelve travellers at most, from Atlanta to New Orleans via Highway 61", "Doce viajeros como máximo, de Atlanta a Nueva Orleans por la Highway 61"],
      description: [
        "Le Sud musical en groupe de 12 personnes au plus : Atlanta, les Great Smoky Mountains, Nashville et sa country, Memphis et Graceland, la Highway 61 du blues par Indianola, le parc militaire de Vicksburg, Natchez, Bâton-Rouge, le pays cajun, les plantations de Houmas House et de Laura, La Nouvelle-Orléans, puis Montgomery, en Alabama.",
        "The musical South in a group of 12 at most: Atlanta, the Great Smoky Mountains, Nashville and its country music, Memphis and Graceland, the Highway 61 blues road via Indianola, Vicksburg military park, Natchez, Baton Rouge, Cajun country, the Houmas House and Laura plantations, New Orleans, then Montgomery, in Alabama.",
        "El Sur musical en grupo de 12 personas como máximo: Atlanta, las Great Smoky Mountains, Nashville y su country, Memphis y Graceland, la Highway 61 del blues por Indianola, el parque militar de Vicksburg, Natchez, Baton Rouge, el país cajún, las plantaciones de Houmas House y Laura, Nueva Orleans, y Montgomery, en Alabama.",
      ],
      includes: INTI(13),
      price: 5517, nights: 13, departureFrom: "Francfort", image: "sm3",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -53986,
      chapters: [
        so.chapter(["Atlanta, les Smoky Mountains et Nashville", "Atlanta, the Smoky Mountains and Nashville", "Atlanta, las Smoky Mountains y Nashville"], ["Les montagnes et la country.", "The mountains and country music.", "Las montañas y el country."],
          ["sm1", "sm5"],
          [
            so.day(1, ...arr(ATL), "gs3"),
            so.day(2, ["Atlanta – Great Smoky Mountains", "Atlanta – Great Smoky Mountains", "Atlanta – Great Smoky Mountains"], ["Tour d'Atlanta, puis le parc des Great Smoky Mountains et Pigeon Forge.", "A tour of Atlanta, then Great Smoky Mountains park and Pigeon Forge.", "Vuelta por Atlanta y el parque de las Great Smoky Mountains y Pigeon Forge."], "sm1"),
            so.day(3, ["Pigeon Forge – Nashville", "Pigeon Forge – Nashville", "Pigeon Forge – Nashville"], [NASH[0], NASH[1], NASH[2]], "sm5"),
          ]),
        so.chapter(["Memphis et la route du blues", "Memphis and the blues road", "Memphis y la ruta del blues"], ["Graceland, la Highway 61 et Vicksburg.", "Graceland, Highway 61 and Vicksburg.", "Graceland, la Highway 61 y Vicksburg."],
          ["sm3", "sm4", "sm2"],
          [
            so.day(4, ["Nashville – Memphis", "Nashville – Memphis", "Nashville – Memphis"], ["Centennial Park et Music Row, puis Memphis.", "Centennial Park and Music Row, then Memphis.", "Centennial Park y Music Row, y Memphis."], "sm3"),
            so.day(5, T_GRACELAND, GRACELAND, "sm4"),
            so.day(6, ["La route du blues – Vicksburg", "The blues road – Vicksburg", "La ruta del blues – Vicksburg"], ["La Highway 61 à travers le Mississippi rural, Indianola et le musée B.B. King, puis Vicksburg.", "Highway 61 through rural Mississippi, Indianola and the B.B. King museum, then Vicksburg.", "La Highway 61 por el Misisipi rural, Indianola y el museo B.B. King, y Vicksburg."], "sm3"),
            so.day(7, ["Vicksburg – Natchez", "Vicksburg – Natchez", "Vicksburg – Natchez"], ["Le parc national militaire de Vicksburg, puis Natchez.", "Vicksburg National Military Park, then Natchez.", "El parque nacional militar de Vicksburg y Natchez."], "sm2"),
          ]),
        so.chapter(["La Louisiane et l'Alabama", "Louisiana and Alabama", "Luisiana y Alabama"], ["Pays cajun, plantations et La Nouvelle-Orléans.", "Cajun country, plantations and New Orleans.", "País cajún, plantaciones y Nueva Orleans."],
          ["sm6", "sm7", "sm8", "sm9"],
          [
            so.day(8, ["Bâton-Rouge – Lafayette", "Baton Rouge – Lafayette", "Baton Rouge – Lafayette"], ["Tour de Bâton-Rouge, puis Lafayette.", "A tour of Baton Rouge, then Lafayette.", "Vuelta por Baton Rouge y Lafayette."], "sm6"),
            so.day(9, ["Pays cajun – Houmas House", "Cajun country – Houmas House", "País cajún – Houmas House"], [CAJUN[0], CAJUN[1], CAJUN[2]], "sm7"),
            so.day(10, ["Plantation Laura – La Nouvelle-Orléans", "Laura plantation – New Orleans", "Plantación Laura – Nueva Orleans"], ["Visite guidée en français de la plantation Laura, l'une des dernières plantations créoles, puis La Nouvelle-Orléans.", "A French-guided visit to Laura plantation, one of the last Creole plantations, then New Orleans.", "Visita guiada en francés de la plantación Laura, una de las últimas plantaciones criollas, y Nueva Orleans."], "sm7"),
            so.day(11, T_FQ, FQ, "sm9"),
            so.day(12, ["Mobile – Montgomery", "Mobile – Montgomery", "Mobile – Montgomery"], ["L'Alabama, Mobile, puis Montgomery, ville du boycott des bus et des droits civiques.", "Alabama, Mobile, then Montgomery, city of the bus boycott and civil rights.", "Alabama, Mobile y Montgomery, ciudad del boicot de los autobuses y de los derechos civiles."], "sm8"),
            so.day(13, ["Montgomery – Atlanta", "Montgomery – Atlanta", "Montgomery – Atlanta"], ["Retour à Atlanta et visite de l'Atlanta History Center.", "Back to Atlanta and a visit to the Atlanta History Center.", "Regreso a Atlanta y visita del Atlanta History Center."], "gs3"),
            so.day(14, ...dep(ATL), "gs3"), so.day(15, T_HOME, HOME, "sm3"),
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
