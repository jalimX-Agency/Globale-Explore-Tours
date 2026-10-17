// Europe — 20 journey-format trips for existing destinations: Ireland (4), Portugal (3), Austria and
// Central Europe (2), Czech Republic (2), United Kingdom (3), Croatia, France (Corsica), Malta, Georgia,
// Hungary and Montenegro. Near-identical supplier programmes are grouped on one page and described
// inside each trip. Prices are per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF.
// Run with:
//   npx tsx scripts/seed-trips-europe-circuits.ts
// Requires scripts/upload-images-eur-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "republique-tcheque-prague-ville-aux-cent-clochers-4j": ["77378", "331778", "250218", "375238"],
  "hongrie-decouverte-de-budapest-privatif-4j": ["332519"],
  "autriche-merveilles-de-vienne-bratislava-budapest-5j": ["339698"],
  "irlande-cap-sur-l-irlande-du-nord-chaussee-des-geants-5j": ["149098"],
  "republique-tcheque-cap-sur-prague-et-vienne-cesky-krumlov-6j": ["336598"],
  "royaume-uni-terres-celtiques-irlande-ecosse-6j": ["417118"],
  "malte-decouverte-de-malte-la-valette-gozo-8j": ["166201", "109178"],
  "autriche-tresors-d-europe-centrale-vienne-budapest-prague-8j": ["336639", "417658"],
  "portugal-decouverte-de-l-algarve-8j": ["315958", "417958"],
  "portugal-magie-du-portugal-lisbonne-porto-8j": ["308598", "418098"],
  "france-merveilles-de-la-corse-8j": ["98118", "60100"],
  "montenegro-essentiel-du-montenegro-kotor-budva-8j": ["191355"],
  "georgie-cap-sur-la-georgie-tbilissi-kakhetie-kazbegi-8j": ["146538"],
  "irlande-cap-sur-l-irlande-kerry-dingle-connemara-8j": ["139018", "141770"],
  "royaume-uni-charmes-et-traditions-anglaises-cornouailles-8j": ["420198"],
  "irlande-beautes-irlandaises-connemara-moher-kerry-8j": ["416098"],
  "portugal-au-fil-du-douro-croisiere-8j": ["88778"],
  "royaume-uni-cap-sur-l-ecosse-highlands-skye-8j": ["61480"],
  "croatie-la-croatie-d-ile-en-ile-en-bateau-10j": ["77838"],
  "irlande-de-l-irlande-sauvage-aux-highlands-d-ecosse-12j": ["417698"],
};

const T_HOME: L3 = ["Retour en France", "Back to France", "Regreso a Francia"];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const home = (city: L3): L3 => [`Transfert à l'aéroport de ${city[0]} et envol pour la France.`, `Transfer to ${city[1]} airport and fly to France.`, `Traslado al aeropuerto de ${city[2]} y vuelo a Francia.`];
const join = (a: L3, b: L3): L3 => [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`, `${a[2]} ${b[2]}`];
const DUB: L3 = ["Dublin", "Dublin", "Dublín"];
const PRG: L3 = ["Prague", "Prague", "Praga"];
const VIE: L3 = ["Vienne", "Vienna", "Viena"];
const BUD: L3 = ["Budapest", "Budapest", "Budapest"];
const EDI: L3 = ["Édimbourg", "Edinburgh", "Edimburgo"];
const LON: L3 = ["Londres", "London", "Londres"];
const LIS: L3 = ["Lisbonne", "Lisbon", "Lisboa"];
const OPO: L3 = ["Porto", "Porto", "Oporto"];

// Shared day texts
const X_DUB: L3 = ["Dublin : Trinity College et le livre de Kells, la cathédrale Saint-Patrick, les façades géorgiennes et les pubs de Temple Bar.", "Dublin: Trinity College and the Book of Kells, St Patrick's Cathedral, the Georgian façades and the pubs of Temple Bar.", "Dublín: el Trinity College y el libro de Kells, la catedral de San Patricio, las fachadas georgianas y los pubs de Temple Bar."];
const X_KERRY: L3 = ["L'anneau du Kerry, route côtière entre montagnes, lacs de Killarney et océan, et le domaine de Muckross House.", "The Ring of Kerry, a coastal road between mountains, the lakes of Killarney and the ocean, and the Muckross House estate.", "El anillo de Kerry, carretera costera entre montañas, los lagos de Killarney y el océano, y la finca de Muckross House."];
const X_DINGLE: L3 = ["La péninsule de Dingle, ses falaises, ses plages et ses vestiges celtiques au bout de l'Europe.", "The Dingle peninsula, its cliffs, beaches and Celtic remains at the edge of Europe.", "La península de Dingle, sus acantilados, sus playas y sus vestigios celtas al final de Europa."];
const X_MOHER: L3 = ["Le Burren, plateau calcaire et ses dolmens, puis les falaises de Moher, hautes de 200 mètres au-dessus de l'Atlantique.", "The Burren, a limestone plateau and its dolmens, then the Cliffs of Moher, 200 metres above the Atlantic.", "El Burren, meseta caliza y sus dólmenes, y los acantilados de Moher, de 200 metros sobre el Atlántico."];
const X_CONNEMARA: L3 = ["Le Connemara, ses tourbières, ses lacs, ses moutons et l'abbaye de Kylemore au bord de son lac.", "Connemara, its bogs, lakes and sheep, and Kylemore Abbey on the shore of its lake.", "Connemara, sus turberas, sus lagos, sus ovejas y la abadía de Kylemore a orillas de su lago."];
const X_ANTRIM: L3 = ["La côte d'Antrim, le château de Dunluce, le pont de corde de Carrick-a-Rede et la Chaussée des Géants et ses 40 000 colonnes de basalte.", "The Antrim coast, Dunluce Castle, the Carrick-a-Rede rope bridge and the Giant's Causeway and its 40,000 basalt columns.", "La costa de Antrim, el castillo de Dunluce, el puente de cuerda de Carrick-a-Rede y la Calzada del Gigante y sus 40.000 columnas de basalto."];
const X_EDI: L3 = ["Édimbourg : le château sur son rocher volcanique, le Royal Mile, le palais de Holyrood et la ville nouvelle géorgienne.", "Edinburgh: the castle on its volcanic rock, the Royal Mile, Holyrood Palace and the Georgian New Town.", "Edimburgo: el castillo sobre su roca volcánica, la Royal Mile, el palacio de Holyrood y la ciudad nueva georgiana."];
const X_SKYE: L3 = ["La vallée de Glencoe, le château d'Eilean Donan, puis l'île de Skye, ses montagnes Cuillin et le Quiraing.", "Glencoe valley, Eilean Donan Castle, then the Isle of Skye, its Cuillin mountains and the Quiraing.", "El valle de Glencoe, el castillo de Eilean Donan, y la isla de Skye, sus montañas Cuillin y el Quiraing."];
const X_PRG: L3 = ["Prague : la place de la Vieille-Ville et son horloge astronomique, le quartier juif, le pont Charles, Malá Strana et le château.", "Prague: the Old Town Square and its astronomical clock, the Jewish quarter, Charles Bridge, Malá Strana and the castle.", "Praga: la plaza de la Ciudad Vieja y su reloj astronómico, el barrio judío, el puente de Carlos, Malá Strana y el castillo."];
const X_VIE: L3 = ["Vienne : le Ring et ses palais, la cathédrale Saint-Étienne, la Hofburg, le château de Schönbrunn et un café viennois.", "Vienna: the Ring and its palaces, St Stephen's Cathedral, the Hofburg, Schönbrunn Palace and a Viennese café.", "Viena: el Ring y sus palacios, la catedral de San Esteban, el Hofburg, el palacio de Schönbrunn y un café vienés."];
const X_BUD: L3 = ["Budapest : le Parlement au bord du Danube, le bastion des Pêcheurs, le pont des Chaînes et les bains thermaux Széchenyi.", "Budapest: the Parliament on the Danube, the Fishermen's Bastion, the Chain Bridge and the Széchenyi thermal baths.", "Budapest: el Parlamento a orillas del Danubio, el bastión de los Pescadores, el puente de las Cadenas y los baños termales Széchenyi."];
const X_BRATI: L3 = ["Bratislava, capitale slovaque, son château blanc et sa vieille ville.", "Bratislava, the Slovak capital, its white castle and old town.", "Bratislava, capital eslovaca, su castillo blanco y su ciudad vieja."];
const X_LIS: L3 = ["Lisbonne : l'Alfama et son tramway 28, le monastère des Hiéronymites et la tour de Belém, et les pastéis de nata.", "Lisbon: the Alfama and its tram 28, the Jerónimos Monastery and the Belém Tower, and pastéis de nata.", "Lisboa: la Alfama y su tranvía 28, el monasterio de los Jerónimos y la torre de Belém, y los pastéis de nata."];
const X_OPO: L3 = ["Porto, ses quais de la Ribeira, le pont Dom-Luís, la librairie Lello et une dégustation dans une cave de porto.", "Porto, its Ribeira quays, the Dom Luís bridge, the Lello bookshop and a tasting in a port cellar.", "Oporto, sus muelles de la Ribeira, el puente Don Luis, la librería Lello y una cata en una bodega de oporto."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const SUN = { label: ["Avril à octobre", "April to October", "Abril a octubre"] as L3, months: "april,may,june,july,august,september,october" };
  const ALL = { label: ["Toute l'année", "All year round", "Todo el año"] as L3, months: "january,february,march,april,may,june,july,august,september,october,november,december" };
  const SUMMER = { label: ["Mai à septembre", "May to September", "Mayo a septiembre"] as L3, months: "may,june,july,august,september" };
  const b = (dest: string, season: typeof SUN) => circuitBuilders({ destinationSlug: dest, imagePrefix: "eur", season });
  const ie = b("irlande", SUMMER), pt = b("portugal", SUN), at = b("autriche", SUN), cz = b("republique-tcheque", ALL), czs = b("republique-tcheque", SUN);
  const uk = b("royaume-uni", SUMMER), hr = b("croatie", SUMMER), fr = b("france", SUN), mt = b("malte", SUN), ge = b("georgie", SUN), hu = b("hongrie", ALL), me = b("montenegro", SUN);
  const INC = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtels 3* et 4*,Transport en autocar,Visites du programme,Guide-accompagnateur francophone${extra}`,
    `Flights from France,Transfers,${n} nights in 3* and 4* hotels,Transport by coach,Visits in the programme,French-speaking tour leader${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hoteles de 3* y 4*,Transporte en autocar,Visitas del programa,Guía acompañante francófono${extra}`,
  ];
  const BREAK = (n: number, extra = ""): L3 => [`Vols depuis la France,Transferts,${n} nuits en hôtel${extra}`, `Flights from France,Transfers,${n} nights in a hotel${extra}`, `Vuelos desde Francia,Traslados,${n} noches en hotel${extra}`];

  const journeyTrips = [
    cz.trip({
      slug: "republique-tcheque-prague-ville-aux-cent-clochers-4j",
      name: ["Cap sur Prague : la ville aux cent clochers", "Heading for Prague: the city of a hundred spires", "Rumbo a Praga: la ciudad de las cien torres"],
      tagline: ["Un long week-end à Prague, en groupe, en privatif ou pendant les marchés de Noël", "A long weekend in Prague, in a group, private or during the Christmas markets", "Un fin de semana largo en Praga, en grupo, en privado o durante los mercados navideños"],
      description: [
        "Prague en quatre jours : la Vieille-Ville et son horloge astronomique, le quartier juif de Josefov, Malá Strana, le château et le pont Charles. En privatif à partir de 478 €, ou pendant les marchés de Noël de la place de la Vieille-Ville, en 3 jours à partir de 348 € ou en 4 jours à partir de 475 € par personne.",
        "Prague in four days: the Old Town and its astronomical clock, the Jewish quarter of Josefov, Malá Strana, the castle and Charles Bridge. As a private tour from €478, or during the Christmas markets on the Old Town Square, in 3 days from €348 or in 4 days from €475 per person.",
        "Praga en cuatro días: la Ciudad Vieja y su reloj astronómico, el barrio judío de Josefov, Malá Strana, el castillo y el puente de Carlos. En privado desde 478 €, o durante los mercados navideños de la plaza de la Ciudad Vieja, en 3 días desde 348 € o en 4 días desde 475 € por persona.",
      ],
      includes: BREAK(3, ",Visites guidées de la ville"),
      price: 472, nights: 3, departureFrom: "Paris", image: "pr1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,solo,groups", maxGuests: 40, order: -44000,
      chapters: [
        cz.chapter([PRG[0], PRG[1], PRG[2]], ["La ville aux cent clochers.", "The city of a hundred spires.", "La ciudad de las cien torres."],
          ["pr1", "pr2", "pr3", "pr4", "pn1", "pn5"],
          [
            cz.day(1, ...arr(PRG), "pr4"),
            cz.day(2, ["Staré Město et le quartier juif", "Staré Město and the Jewish quarter", "Staré Město y el barrio judío"], ["La place de la Vieille-Ville, l'église de Týn, l'horloge astronomique et le quartier juif de Josefov, ses synagogues et son vieux cimetière.", "The Old Town Square, the Týn church, the astronomical clock and the Jewish quarter of Josefov, its synagogues and old cemetery.", "La plaza de la Ciudad Vieja, la iglesia de Týn, el reloj astronómico y el barrio judío de Josefov, sus sinagogas y su viejo cementerio."], "pr2"),
            cz.day(3, ["Malá Strana et le château", "Malá Strana and the castle", "Malá Strana y el castillo"], ["Le château de Prague et la cathédrale Saint-Guy, la ruelle d'Or, Malá Strana et le pont Charles au coucher du soleil.", "Prague Castle and St Vitus Cathedral, Golden Lane, Malá Strana and Charles Bridge at sunset.", "El castillo de Praga y la catedral de San Vito, el callejón del Oro, Malá Strana y el puente de Carlos al atardecer."], "pr1"),
            cz.day(4, T_HOME, home(PRG), "pr3"),
          ]),
      ],
    }),

    hu.trip({
      slug: "hongrie-decouverte-de-budapest-privatif-4j",
      name: ["Découverte de Budapest en privatif : la perle du Danube", "Discovering Budapest, private tour: the pearl of the Danube", "Descubrimiento de Budapest en privado: la perla del Danubio"],
      tagline: ["Buda et Pest avec votre guide, et les bains thermaux", "Buda and Pest with your own guide, and the thermal baths", "Buda y Pest con su guía, y los baños termales"],
      description: [
        "Un long week-end à Budapest avec un guide privé : le quartier du château de Buda et le bastion des Pêcheurs, le Parlement, la basilique Saint-Étienne, l'avenue Andrássy, les bains thermaux et une croisière sur le Danube illuminé.",
        "A long weekend in Budapest with a private guide: the Buda Castle district and the Fishermen's Bastion, the Parliament, St Stephen's Basilica, Andrássy Avenue, the thermal baths and a cruise on the illuminated Danube.",
        "Un fin de semana largo en Budapest con un guía privado: el barrio del castillo de Buda y el bastión de los Pescadores, el Parlamento, la basílica de San Esteban, la avenida Andrássy, los baños termales y un crucero por el Danubio iluminado.",
      ],
      includes: BREAK(3, ",Visite guidée privée,Croisière sur le Danube"),
      price: 569, nights: 3, departureFrom: "Paris", image: "bu1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,solo", maxGuests: 8, order: -43999,
      chapters: [
        hu.chapter([BUD[0], BUD[1], BUD[2]], ["Buda et Pest.", "Buda and Pest.", "Buda y Pest."],
          ["bu1", "bu2", "bu3", "bu4", "bu5", "bu7"],
          [
            hu.day(1, ...arr(BUD), "bu4"),
            hu.day(2, ["Buda", "Buda", "Buda"], ["Le quartier du château de Buda, l'église Matthias, le bastion des Pêcheurs et la vue sur le Parlement.", "The Buda Castle district, Matthias Church, the Fishermen's Bastion and the view of the Parliament.", "El barrio del castillo de Buda, la iglesia de Matías, el bastión de los Pescadores y la vista del Parlamento."], "bu5"),
            hu.day(3, ["Pest", "Pest", "Pest"], join(X_BUD, ["Le soir, croisière sur le Danube illuminé.", "In the evening, a cruise on the illuminated Danube.", "Por la noche, crucero por el Danubio iluminado."]), "bu3"),
            hu.day(4, T_HOME, home(BUD), "bu1"),
          ]),
      ],
    }),

    at.trip({
      slug: "autriche-merveilles-de-vienne-bratislava-budapest-5j",
      name: ["Merveilles de Vienne, Bratislava et Budapest : trois capitales sur le Danube", "Wonders of Vienna, Bratislava and Budapest: three capitals on the Danube", "Maravillas de Viena, Bratislava y Budapest: tres capitales a orillas del Danubio"],
      tagline: ["L'Europe impériale en cinq jours", "Imperial Europe in five days", "La Europa imperial en cinco días"],
      description: [
        "Trois capitales du Danube : deux jours à Vienne, Bratislava et sa vieille ville, puis Budapest, ses ponts et ses bains.",
        "Three Danube capitals: two days in Vienna, Bratislava and its old town, then Budapest, its bridges and baths.",
        "Tres capitales del Danubio: dos días en Viena, Bratislava y su ciudad vieja, y Budapest, sus puentes y sus baños.",
      ],
      includes: INC(4),
      price: 710, nights: 4, departureFrom: "Barcelone", image: "vb4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43998,
      chapters: [
        at.chapter(["Les capitales du Danube", "The Danube capitals", "Las capitales del Danubio"], ["Vienne, Bratislava et Budapest.", "Vienna, Bratislava and Budapest.", "Viena, Bratislava y Budapest."],
          ["vb2", "vb3", "vb1", "vb4", "vb6", "vb7"],
          [
            at.day(1, ...arr(VIE), "vb5"),
            at.day(2, VIE, X_VIE, "vb2"),
            at.day(3, ["Bratislava – Budapest", "Bratislava – Budapest", "Bratislava – Budapest"], join(X_BRATI, ["Puis Budapest.", "Then Budapest.", "Y Budapest."]), "vb1"),
            at.day(4, BUD, X_BUD, "vb6"),
            at.day(5, T_HOME, home(BUD), "vb4"),
          ]),
      ],
    }),

    ie.trip({
      slug: "irlande-cap-sur-l-irlande-du-nord-chaussee-des-geants-5j",
      name: ["Cap sur l'Irlande du Nord : Belfast, la Chaussée des Géants et Derry", "Heading for Northern Ireland: Belfast, the Giant's Causeway and Derry", "Rumbo a Irlanda del Norte: Belfast, la Calzada del Gigante y Derry"],
      tagline: ["La côte d'Antrim et l'Ulster en cinq jours", "The Antrim coast and Ulster in five days", "La costa de Antrim y el Ulster en cinco días"],
      description: [
        "L'Irlande du Nord : Belfast et le Titanic Quarter, la côte d'Antrim et la Chaussée des Géants, Derry et ses remparts, une journée à la ferme près du lough Neagh, Armagh et la croix celtique de Monasterboice.",
        "Northern Ireland: Belfast and the Titanic Quarter, the Antrim coast and the Giant's Causeway, Derry and its walls, a day on a farm near Lough Neagh, Armagh and the Celtic cross of Monasterboice.",
        "Irlanda del Norte: Belfast y el Titanic Quarter, la costa de Antrim y la Calzada del Gigante, Derry y sus murallas, un día en una granja cerca del lough Neagh, Armagh y la cruz celta de Monasterboice.",
      ],
      includes: INC(4),
      price: 1242, nights: 4, departureFrom: "Paris", image: "in2",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43997,
      chapters: [
        ie.chapter(["L'Ulster", "Ulster", "El Ulster"], ["Belfast, Antrim et Derry.", "Belfast, Antrim and Derry.", "Belfast, Antrim y Derry."],
          ["in1", "in2", "in3", "in4", "in5", "in6", "in7"],
          [
            ie.day(1, ["Dublin – Belfast", "Dublin – Belfast", "Dublín – Belfast"], ["Envol pour Dublin et route vers Belfast, son hôtel de ville et son quartier du Titanic.", "Flight to Dublin and the drive to Belfast, its City Hall and its Titanic Quarter.", "Vuelo a Dublín y carretera hacia Belfast, su ayuntamiento y su barrio del Titanic."], "in1"),
            ie.day(2, ["Côte d'Antrim – Derry", "Antrim coast – Derry", "Costa de Antrim – Derry"], join(X_ANTRIM, ["Puis Derry et ses remparts.", "Then Derry and its walls.", "Y Derry y sus murallas."]), "in2"),
            ie.day(3, ["Ferme – lough Neagh", "Farm – Lough Neagh", "Granja – lough Neagh"], ["Une journée dans une ferme irlandaise, puis le lough Neagh, plus grand lac des îles Britanniques.", "A day on an Irish farm, then Lough Neagh, the largest lake in the British Isles.", "Un día en una granja irlandesa, y el lough Neagh, el mayor lago de las islas Británicas."], "in4"),
            ie.day(4, ["Armagh – Monasterboice – Dublin", "Armagh – Monasterboice – Dublin", "Armagh – Monasterboice – Dublín"], ["Armagh et ses deux cathédrales Saint-Patrick, puis les hautes croix celtiques de Monasterboice.", "Armagh and its two St Patrick's cathedrals, then the high Celtic crosses of Monasterboice.", "Armagh y sus dos catedrales de San Patricio, y las altas cruces celtas de Monasterboice."], "in6"),
            ie.day(5, T_HOME, home(DUB), "in3"),
          ]),
      ],
    }),

    czs.trip({
      slug: "republique-tcheque-cap-sur-prague-et-vienne-cesky-krumlov-6j",
      name: ["Cap sur Prague et Vienne : Český Krumlov, Holašovice et Telč", "Heading for Prague and Vienna: Český Krumlov, Holašovice and Telč", "Rumbo a Praga y Viena: Český Krumlov, Holašovice y Telč"],
      tagline: ["Deux capitales et les villages de Bohême du Sud", "Two capitals and the villages of South Bohemia", "Dos capitales y los pueblos de Bohemia del Sur"],
      description: [
        "De Prague à Vienne par la Bohême du Sud : deux jours à Prague, le village baroque de Holašovice, Český Krumlov et son château sur la Vltava, Telč et sa place Renaissance, puis Vienne.",
        "From Prague to Vienna through South Bohemia: two days in Prague, the baroque village of Holašovice, Český Krumlov and its castle on the Vltava, Telč and its Renaissance square, then Vienna.",
        "De Praga a Viena por Bohemia del Sur: dos días en Praga, el pueblo barroco de Holašovice, Český Krumlov y su castillo sobre el Moldava, Telč y su plaza renacentista, y Viena.",
      ],
      includes: INC(5),
      price: 772, nights: 5, departureFrom: "Bruxelles", image: "pv4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43996,
      chapters: [
        czs.chapter(["Prague et la Bohême", "Prague and Bohemia", "Praga y Bohemia"], ["La capitale et les villages.", "The capital and the villages.", "La capital y los pueblos."],
          ["pv1", "pv2", "pv3", "pv4"],
          [
            czs.day(1, ...arr(PRG), "pv1"),
            czs.day(2, PRG, X_PRG, "pv2"),
            czs.day(3, ["Holašovice – Český Krumlov", "Holašovice – Český Krumlov", "Holašovice – Český Krumlov"], ["Le village baroque rustique de Holašovice, puis Český Krumlov, ville médiévale lovée dans un méandre de la Vltava.", "The rustic baroque village of Holašovice, then Český Krumlov, a medieval town curled in a bend of the Vltava.", "El pueblo barroco rústico de Holašovice, y Český Krumlov, ciudad medieval enroscada en un meandro del Moldava."], "pv4"),
            czs.day(4, ["Telč – Vienne", "Telč – Vienna", "Telč – Viena"], ["Telč et sa grand-place bordée d'arcades Renaissance, puis Vienne.", "Telč and its main square lined with Renaissance arcades, then Vienna.", "Telč y su plaza mayor bordeada de soportales renacentistas, y Viena."], "pv3"),
          ]),
        czs.chapter([VIE[0], VIE[1], VIE[2]], ["La capitale impériale.", "The imperial capital.", "La capital imperial."],
          ["pv5", "pv6"],
          [czs.day(5, VIE, X_VIE, "pv6"), czs.day(6, T_HOME, home(VIE), "pv5")]),
      ],
    }),

    uk.trip({
      slug: "royaume-uni-terres-celtiques-irlande-ecosse-6j",
      name: ["Sur les terres celtiques : Dublin, Belfast, la côte d'Antrim, Glasgow et Édimbourg", "In the Celtic lands: Dublin, Belfast, the Antrim coast, Glasgow and Edinburgh", "En las tierras celtas: Dublín, Belfast, la costa de Antrim, Glasgow y Edimburgo"],
      tagline: ["De l'Irlande à l'Écosse en ferry, en six jours", "From Ireland to Scotland by ferry, in six days", "De Irlanda a Escocia en ferri, en seis días"],
      description: [
        "Un combiné celte : Dublin, Belfast, la Chaussée des Géants et Derry, la traversée en ferry vers l'Écosse, Glasgow, puis deux jours à Édimbourg.",
        "A Celtic combination: Dublin, Belfast, the Giant's Causeway and Derry, the ferry crossing to Scotland, Glasgow, then two days in Edinburgh.",
        "Un combinado celta: Dublín, Belfast, la Calzada del Gigante y Derry, la travesía en ferri a Escocia, Glasgow, y dos días en Edimburgo.",
      ],
      includes: INC(5, ",Ferry Belfast – Écosse"),
      price: 1188, nights: 5, departureFrom: "Barcelone", image: "tc5",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43995,
      chapters: [
        uk.chapter(["L'Irlande", "Ireland", "Irlanda"], ["Dublin, Belfast et Antrim.", "Dublin, Belfast and Antrim.", "Dublín, Belfast y Antrim."],
          ["tc3", "tc4", "tc1", "tc5", "tc6"],
          [
            uk.day(1, ...arr(DUB), "tc4"),
            uk.day(2, ["Dublin – Belfast", "Dublin – Belfast", "Dublín – Belfast"], join(X_DUB, ["Puis Belfast.", "Then Belfast.", "Y Belfast."]), "tc3"),
            uk.day(3, ["Côte d'Antrim – Derry", "Antrim coast – Derry", "Costa de Antrim – Derry"], X_ANTRIM, "tc5"),
          ]),
        uk.chapter(["L'Écosse", "Scotland", "Escocia"], ["Glasgow et Édimbourg.", "Glasgow and Edinburgh.", "Glasgow y Edimburgo."],
          ["tc2", "tc7"],
          [
            uk.day(4, ["Belfast – Glasgow – Édimbourg", "Belfast – Glasgow – Edinburgh", "Belfast – Glasgow – Edimburgo"], ["Traversée en ferry vers l'Écosse, Glasgow et sa cathédrale, puis Édimbourg.", "Ferry crossing to Scotland, Glasgow and its cathedral, then Edinburgh.", "Travesía en ferri a Escocia, Glasgow y su catedral, y Edimburgo."], "tc7"),
            uk.day(5, EDI, X_EDI, "tc2"),
            uk.day(6, T_HOME, home(EDI), "tc2"),
          ]),
      ],
    }),

    mt.trip({
      slug: "malte-decouverte-de-malte-la-valette-gozo-8j",
      name: ["Découverte de Malte : La Valette, Mdina, Gozo et les Trois Cités", "Discovering Malta: Valletta, Mdina, Gozo and the Three Cities", "Descubrimiento de Malta: La Valeta, Mdina, Gozo y las Tres Ciudades"],
      tagline: ["Une semaine au cœur de la Méditerranée, d'un même hôtel", "A week in the heart of the Mediterranean, from a single hotel", "Una semana en el corazón del Mediterráneo, desde un solo hotel"],
      description: [
        "L'archipel maltais en étoile : La Valette et la co-cathédrale Saint-Jean, Mdina la cité silencieuse, Rabat et Mosta, l'île de Gozo et la citadelle de Victoria, le sud et le port de pêche de Marsaxlokk, les Trois Cités en bateau traditionnel, puis une journée libre. En hôtel 3* à partir de 726 €, ou en 4* à partir de 772 € par personne.",
        "The Maltese archipelago from a single base: Valletta and St John's Co-Cathedral, Mdina the silent city, Rabat and Mosta, the island of Gozo and the Victoria citadel, the south and the fishing port of Marsaxlokk, the Three Cities by traditional boat, then a free day. In a 3* hotel from €726, or in a 4* from €772 per person.",
        "El archipiélago maltés desde una sola base: La Valeta y la concatedral de San Juan, Mdina la ciudad silenciosa, Rabat y Mosta, la isla de Gozo y la ciudadela de Victoria, el sur y el puerto pesquero de Marsaxlokk, las Tres Ciudades en barco tradicional, y un día libre. En hotel 3* desde 726 €, o en 4* desde 772 € por persona.",
      ],
      includes: INC(7, ",Ferry vers Gozo"),
      price: 726, nights: 7, departureFrom: "Toulouse", image: "mt4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43994,
      chapters: [
        mt.chapter(["Malte et Gozo", "Malta and Gozo", "Malta y Gozo"], ["L'île des chevaliers.", "The island of the knights.", "La isla de los caballeros."],
          ["mt1", "mt2", "mt3", "mt4", "mt6", "mt7"],
          [
            mt.day(1, ...arr(["La Valette", "Valletta", "La Valeta"]), "mt4"),
            mt.day(2, ["La Valette", "Valletta", "La Valeta"], ["La Valette, capitale des chevaliers de Saint-Jean, la co-cathédrale et ses Caravage, et les jardins de Barrakka face au Grand Port.", "Valletta, capital of the Knights of St John, the co-cathedral and its Caravaggios, and the Barrakka gardens facing the Grand Harbour.", "La Valeta, capital de los caballeros de San Juan, la concatedral y sus Caravaggio, y los jardines de Barrakka frente al Gran Puerto."], "mt2"),
            mt.day(3, ["Mdina – Rabat – Mosta", "Mdina – Rabat – Mosta", "Mdina – Rabat – Mosta"], ["Mdina, la cité silencieuse, les catacombes de Rabat et la rotonde de Mosta.", "Mdina, the silent city, the catacombs of Rabat and the Mosta Rotunda.", "Mdina, la ciudad silenciosa, las catacumbas de Rabat y la rotonda de Mosta."], "mt1"),
            mt.day(4, ["Gozo", "Gozo", "Gozo"], ["Traversée vers Gozo, la citadelle de Victoria, les temples mégalithiques de Ġgantija et la baie de Xlendi.", "Crossing to Gozo, the Victoria citadel, the megalithic temples of Ġgantija and Xlendi Bay.", "Travesía a Gozo, la ciudadela de Victoria, los templos megalíticos de Ġgantija y la bahía de Xlendi."], "mt6"),
            mt.day(5, ["Le sud – Marsaxlokk", "The south – Marsaxlokk", "El sur – Marsaxlokk"], ["La grotte bleue, les temples de Ħaġar Qim et le port de pêche de Marsaxlokk et ses luzzu colorés.", "The Blue Grotto, the temples of Ħaġar Qim and the fishing port of Marsaxlokk and its colourful luzzu boats.", "La gruta Azul, los templos de Ħaġar Qim y el puerto pesquero de Marsaxlokk y sus luzzu de colores."], "mt7"),
            mt.day(6, ["Les Trois Cités", "The Three Cities", "Las Tres Ciudades"], ["Les Trois Cités, Vittoriosa, Senglea et Cospicua, découvertes en dgħajsa, bateau traditionnel.", "The Three Cities, Vittoriosa, Senglea and Cospicua, discovered by dgħajsa, a traditional boat.", "Las Tres Ciudades, Vittoriosa, Senglea y Cospicua, descubiertas en dgħajsa, barco tradicional."], "mt3"),
            mt.day(7, ["Journée libre", "A free day", "Día libre"], ["Journée libre à l'hôtel ou à la plage.", "A free day at the hotel or on the beach.", "Día libre en el hotel o en la playa."], "mt5"),
            mt.day(8, T_HOME, home(["La Valette", "Valletta", "La Valeta"]), "mt4"),
          ]),
      ],
    }),

    at.trip({
      slug: "autriche-tresors-d-europe-centrale-vienne-budapest-prague-8j",
      name: ["Trésors d'Europe centrale : Vienne, Bratislava, Budapest et Prague", "Treasures of Central Europe: Vienna, Bratislava, Budapest and Prague", "Tesoros de Europa Central: Viena, Bratislava, Budapest y Praga"],
      tagline: ["Quatre capitales impériales en une semaine", "Four imperial capitals in a week", "Cuatro capitales imperiales en una semana"],
      description: [
        "Les grandes capitales d'Europe centrale : deux jours à Vienne, Bratislava, Budapest, le train vers Prague et deux jours dans la ville aux cent clochers. Variante Cap sur Prague, Budapest, Bratislava et Vienne, dans l'autre sens et par la Moravie du Sud, à partir de 1 229 € par personne.",
        "The great capitals of Central Europe: two days in Vienna, Bratislava, Budapest, the train to Prague and two days in the city of a hundred spires. The Heading for Prague, Budapest, Bratislava and Vienna variant, the other way round and through South Moravia, from €1,229 per person.",
        "Las grandes capitales de Europa Central: dos días en Viena, Bratislava, Budapest, el tren a Praga y dos días en la ciudad de las cien torres. Variante Rumbo a Praga, Budapest, Bratislava y Viena, en sentido inverso y por Moravia del Sur, desde 1.229 € por persona.",
      ],
      includes: INC(7, ",Train Budapest – Prague"),
      price: 1150, nights: 7, departureFrom: "Bruxelles", image: "te3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43993,
      chapters: [
        at.chapter(["Vienne, Bratislava et Budapest", "Vienna, Bratislava and Budapest", "Viena, Bratislava y Budapest"], ["Le Danube impérial.", "The imperial Danube.", "El Danubio imperial."],
          ["te1", "te7", "te6", "te3"],
          [
            at.day(1, ...arr(VIE), "te1"),
            at.day(2, VIE, X_VIE, "te7"),
            at.day(3, ["Bratislava – Budapest", "Bratislava – Budapest", "Bratislava – Budapest"], join(X_BRATI, ["Puis Budapest.", "Then Budapest.", "Y Budapest."]), "te6"),
            at.day(4, BUD, X_BUD, "te3"),
          ]),
        at.chapter([PRG[0], PRG[1], PRG[2]], ["La ville aux cent clochers.", "The city of a hundred spires.", "La ciudad de las cien torres."],
          ["te4", "te5", "pr1"],
          [
            at.day(5, ["Budapest – Prague en train", "Budapest – Prague by train", "Budapest – Praga en tren"], ["Train à travers la Slovaquie jusqu'à Prague.", "Train across Slovakia to Prague.", "Tren a través de Eslovaquia hasta Praga."], "te5"),
            at.day(6, PRG, X_PRG, "te4"),
            at.day(7, PRG, ["Journée libre : le Vyšehrad, les jardins de Petřín ou une croisière sur la Vltava.", "A free day: Vyšehrad, the Petřín gardens or a cruise on the Vltava.", "Día libre: el Vyšehrad, los jardines de Petřín o un crucero por el Moldava."], "pr1"),
            at.day(8, T_HOME, home(PRG), "te4"),
          ]),
      ],
    }),

    pt.trip({
      slug: "portugal-decouverte-de-l-algarve-8j",
      name: ["Découverte de l'Algarve : Monchique, Silves, Lagos, Sagres, Tavira et la Ria Formosa", "Discovering the Algarve: Monchique, Silves, Lagos, Sagres, Tavira and the Ria Formosa", "Descubrimiento del Algarve: Monchique, Silves, Lagos, Sagres, Tavira y la Ria Formosa"],
      tagline: ["Falaises dorées, villages blancs et lagune, d'ouest en est", "Golden cliffs, white villages and lagoon, from west to east", "Acantilados dorados, pueblos blancos y laguna, de oeste a este"],
      description: [
        "L'Algarve en une semaine : la Serra de Monchique et Silves, Lagos, Sagres et le cap Saint-Vincent, Alte et Loulé, Faro et Estoi, Olhão et Tavira, puis la Ria Formosa en bateau. Aussi en liberté avec voiture de location (Sur la route, l'Algarve d'est en ouest), à partir de 555 € par personne.",
        "The Algarve in a week: the Serra de Monchique and Silves, Lagos, Sagres and Cape St Vincent, Alte and Loulé, Faro and Estoi, Olhão and Tavira, then the Ria Formosa by boat. Also as a self-drive tour with a rental car (On the road, the Algarve from east to west), from €555 per person.",
        "El Algarve en una semana: la Serra de Monchique y Silves, Lagos, Sagres y el cabo San Vicente, Alte y Loulé, Faro y Estoi, Olhão y Tavira, y la Ria Formosa en barco. También por libre con coche de alquiler (En ruta, el Algarve de este a oeste), desde 555 € por persona.",
      ],
      includes: INC(7),
      price: 1315, nights: 7, departureFrom: "Bruxelles", image: "al7",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43992,
      chapters: [
        pt.chapter(["L'ouest de l'Algarve", "The western Algarve", "El Algarve occidental"], ["Montagne, falaises et bout du monde.", "Mountain, cliffs and land's end.", "Montaña, acantilados y fin del mundo."],
          ["al1", "al7", "al4"],
          [
            pt.day(1, ...arr(["Faro", "Faro", "Faro"]), "al6"),
            pt.day(2, ["Monchique – Silves – Albufeira", "Monchique – Silves – Albufeira", "Monchique – Silves – Albufeira"], ["La Serra de Monchique et ses forêts, Silves et son château maure de grès rouge, puis Albufeira.", "The Serra de Monchique and its forests, Silves and its red sandstone Moorish castle, then Albufeira.", "La Serra de Monchique y sus bosques, Silves y su castillo moro de arenisca roja, y Albufeira."], "al1"),
            pt.day(3, ["Lagos – Sagres – cap Saint-Vincent", "Lagos – Sagres – Cape St Vincent", "Lagos – Sagres – cabo San Vicente"], ["Lagos et la Ponta da Piedade, ses arches et ses grottes, Sagres, puis le cap Saint-Vincent, pointe sud-ouest de l'Europe.", "Lagos and Ponta da Piedade, its arches and caves, Sagres, then Cape St Vincent, the south-western tip of Europe.", "Lagos y la Ponta da Piedade, sus arcos y sus grutas, Sagres, y el cabo San Vicente, punta suroeste de Europa."], "al7"),
            pt.day(4, ["Alte – Loulé", "Alte – Loulé", "Alte – Loulé"], ["Le village blanc d'Alte dans l'arrière-pays, puis le marché de Loulé.", "The white village of Alte in the hinterland, then Loulé market.", "El pueblo blanco de Alte en el interior, y el mercado de Loulé."], "al4"),
          ]),
        pt.chapter(["L'est de l'Algarve", "The eastern Algarve", "El Algarve oriental"], ["Faro, Tavira et la lagune.", "Faro, Tavira and the lagoon.", "Faro, Tavira y la laguna."],
          ["al2", "al3", "al5", "al6"],
          [
            pt.day(5, ["Faro – Almancil – Estoi", "Faro – Almancil – Estoi", "Faro – Almancil – Estoi"], ["La vieille ville de Faro, l'église d'Almancil et ses azulejos, puis le palais d'Estoi.", "Faro's old town, the church of Almancil and its azulejos, then the Estoi palace.", "El casco antiguo de Faro, la iglesia de Almancil y sus azulejos, y el palacio de Estoi."], "al5"),
            pt.day(6, ["Olhão – Tavira", "Olhão – Tavira", "Olhão – Tavira"], ["Le marché de pêcheurs d'Olhão, puis Tavira, son pont romain et ses églises.", "The fishermen's market of Olhão, then Tavira, its Roman bridge and churches.", "El mercado de pescadores de Olhão, y Tavira, su puente romano y sus iglesias."], "al3"),
            pt.day(7, ["Ria Formosa", "Ria Formosa", "Ria Formosa"], ["En bateau dans la lagune de la Ria Formosa, ses îles et ses flamants.", "By boat in the Ria Formosa lagoon, its islands and flamingos.", "En barco por la laguna de la Ria Formosa, sus islas y sus flamencos."], "al2"),
            pt.day(8, T_HOME, home(["Faro", "Faro", "Faro"]), "al7"),
          ]),
      ],
    }),

    pt.trip({
      slug: "portugal-magie-du-portugal-lisbonne-porto-8j",
      name: ["Magie du Portugal : Lisbonne, Sintra, Fátima, Nazaré, Coimbra, le Douro et Porto", "Magic of Portugal: Lisbon, Sintra, Fátima, Nazaré, Coimbra, the Douro and Porto", "Magia de Portugal: Lisboa, Sintra, Fátima, Nazaré, Coímbra, el Duero y Oporto"],
      tagline: ["Le Portugal classique, de la capitale à Porto", "Classic Portugal, from the capital to Porto", "El Portugal clásico, de la capital a Oporto"],
      description: [
        "Le Portugal du sud au nord : Lisbonne, Sintra, le cap da Roca et Cascais, Fátima, Óbidos, Nazaré et Batalha, Coimbra et Aveiro, le Minho et la vallée du Douro, puis Porto. Aussi en liberté avec voiture de location (Sur la route, de Porto à Lisbonne), à partir de 650 € par personne.",
        "Portugal from south to north: Lisbon, Sintra, Cabo da Roca and Cascais, Fátima, Óbidos, Nazaré and Batalha, Coimbra and Aveiro, the Minho and the Douro valley, then Porto. Also as a self-drive tour with a rental car (On the road, from Porto to Lisbon), from €650 per person.",
        "Portugal de sur a norte: Lisboa, Sintra, el cabo da Roca y Cascais, Fátima, Óbidos, Nazaré y Batalha, Coímbra y Aveiro, el Miño y el valle del Duero, y Oporto. También por libre con coche de alquiler (En ruta, de Oporto a Lisboa), desde 650 € por persona.",
      ],
      includes: INC(7),
      price: 1399, nights: 7, departureFrom: "Lyon", image: "mp7",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43991,
      chapters: [
        pt.chapter(["Lisbonne et le centre", "Lisbon and the centre", "Lisboa y el centro"], ["La capitale, Sintra et les monastères.", "The capital, Sintra and the monasteries.", "La capital, Sintra y los monasterios."],
          ["mp1", "mp3", "mp4"],
          [
            pt.day(1, ...arr(LIS), "mp3"),
            pt.day(2, ["Sintra – cap da Roca – Cascais", "Sintra – Cabo da Roca – Cascais", "Sintra – cabo da Roca – Cascais"], ["Le palais royal de Sintra, le cap da Roca, point le plus occidental du continent, et la station balnéaire de Cascais.", "The royal palace of Sintra, Cabo da Roca, the westernmost point of the continent, and the seaside resort of Cascais.", "El palacio real de Sintra, el cabo da Roca, el punto más occidental del continente, y el balneario de Cascais."], "mp1"),
            pt.day(3, ["Lisbonne – Fátima", "Lisbon – Fátima", "Lisboa – Fátima"], join(X_LIS, ["Puis Fátima.", "Then Fátima.", "Y Fátima."]), "mp4"),
            pt.day(4, ["Óbidos – Nazaré – Batalha", "Óbidos – Nazaré – Batalha", "Óbidos – Nazaré – Batalha"], ["Óbidos, village fortifié aux maisons blanches, le port de Nazaré et ses vagues géantes, puis le monastère gothique de Batalha.", "Óbidos, a walled village of white houses, the port of Nazaré and its giant waves, then the Gothic monastery of Batalha.", "Óbidos, pueblo amurallado de casas blancas, el puerto de Nazaré y sus olas gigantes, y el monasterio gótico de Batalha."], "mp1"),
          ]),
        pt.chapter(["Le nord", "The north", "El norte"], ["Coimbra, le Douro et Porto.", "Coimbra, the Douro and Porto.", "Coímbra, el Duero y Oporto."],
          ["mp5", "mp6", "mp7"],
          [
            pt.day(5, ["Coimbra – Aveiro", "Coimbra – Aveiro", "Coímbra – Aveiro"], ["Coimbra et sa vieille université, puis Aveiro et ses canaux.", "Coimbra and its old university, then Aveiro and its canals.", "Coímbra y su antigua universidad, y Aveiro y sus canales."], "mp6"),
            pt.day(6, ["Le Minho et le Douro", "The Minho and the Douro", "El Miño y el Duero"], ["Le Minho verdoyant et la vallée du Douro et ses vignobles en terrasses.", "The green Minho and the Douro valley and its terraced vineyards.", "El verde Miño y el valle del Duero y sus viñedos en terrazas."], "do4"),
            pt.day(7, OPO, X_OPO, "mp5"),
            pt.day(8, T_HOME, home(OPO), "mp7"),
          ]),
      ],
    }),

    fr.trip({
      slug: "france-merveilles-de-la-corse-8j",
      name: ["Merveilles de la Corse : Ajaccio, Piana, la Balagne, le cap Corse, Bonifacio et Bavella", "Wonders of Corsica: Ajaccio, Piana, the Balagne, Cap Corse, Bonifacio and Bavella", "Maravillas de Córcega: Ajaccio, Piana, la Balagne, el cabo Corso, Bonifacio y Bavella"],
      tagline: ["Le tour de l'île de Beauté en une semaine", "Around the Isle of Beauty in a week", "La vuelta a la isla de la Belleza en una semana"],
      description: [
        "La Corse en une semaine : Ajaccio et les calanques de Piana, Porto, Corte au cœur de l'île, L'Île-Rousse et les vieux villages de Balagne, Calvi, Bastia et le cap Corse, Bonifacio et sa promenade en mer au pied des falaises, puis les aiguilles de Bavella. Version Cap sur la Corse, au départ de Bastia, à partir de 1 412 € par personne.",
        "Corsica in a week: Ajaccio and the calanques of Piana, Porto, Corte in the heart of the island, L'Île-Rousse and the old villages of the Balagne, Calvi, Bastia and Cap Corse, Bonifacio and its boat trip below the cliffs, then the needles of Bavella. The Heading for Corsica version, from Bastia, from €1,412 per person.",
        "Córcega en una semana: Ajaccio y las calas de Piana, Porto, Corte en el corazón de la isla, L'Île-Rousse y los viejos pueblos de la Balagne, Calvi, Bastia y el cabo Corso, Bonifacio y su paseo en barco al pie de los acantilados, y las agujas de Bavella. Versión Rumbo a Córcega, desde Bastia, desde 1.412 € por persona.",
      ],
      includes: INC(7, ",Promenade en mer à Bonifacio"),
      price: 1387, nights: 7, departureFrom: "Toulouse", image: "co5",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43990,
      chapters: [
        fr.chapter(["L'ouest et la Balagne", "The west and the Balagne", "El oeste y la Balagne"], ["Calanques et villages perchés.", "Calanques and hilltop villages.", "Calas y pueblos encaramados."],
          ["co3", "co7", "co2"],
          [
            fr.day(1, ...arr(["Ajaccio", "Ajaccio", "Ajaccio"]), "co3"),
            fr.day(2, ["Calanques de Piana – Porto", "The calanques of Piana – Porto", "Calas de Piana – Porto"], ["Les calanques de Piana, roches de granit rouge sculptées au-dessus de la mer, et le golfe de Porto classé par l'Unesco.", "The calanques of Piana, red granite rocks carved above the sea, and the UNESCO-listed Gulf of Porto.", "Las calas de Piana, rocas de granito rojo esculpidas sobre el mar, y el golfo de Porto declarado por la Unesco."], "co3"),
            fr.day(3, ["Corte – L'Île-Rousse", "Corte – L'Île-Rousse", "Corte – L'Île-Rousse"], ["Corte, ancienne capitale de la Corse indépendante, puis L'Île-Rousse.", "Corte, former capital of independent Corsica, then L'Île-Rousse.", "Corte, antigua capital de la Córcega independiente, y L'Île-Rousse."], "co7"),
            fr.day(4, ["Balagne – Calvi", "Balagne – Calvi", "Balagne – Calvi"], ["Les vieux villages perchés de Balagne et leurs artisans, puis Calvi et sa citadelle.", "The old hilltop villages of the Balagne and their craftsmen, then Calvi and its citadel.", "Los viejos pueblos encaramados de la Balagne y sus artesanos, y Calvi y su ciudadela."], "co2"),
          ]),
        fr.chapter(["Le cap Corse et le sud", "Cap Corse and the south", "El cabo Corso y el sur"], ["Bastia, Bonifacio et Bavella.", "Bastia, Bonifacio and Bavella.", "Bastia, Bonifacio y Bavella."],
          ["co1", "co5", "co6"],
          [
            fr.day(5, ["Bastia – cap Corse", "Bastia – Cap Corse", "Bastia – cabo Corso"], ["Bastia et son vieux port, puis le tour du cap Corse, ses tours génoises et ses villages de pêcheurs.", "Bastia and its old harbour, then around Cap Corse, its Genoese towers and fishing villages.", "Bastia y su puerto viejo, y la vuelta al cabo Corso, sus torres genovesas y sus pueblos de pescadores."], "co1"),
            fr.day(6, ["Bonifacio", "Bonifacio", "Bonifacio"], ["Bonifacio perchée sur ses falaises de calcaire blanc, et la promenade en mer jusqu'aux grottes marines.", "Bonifacio perched on its white limestone cliffs, and the boat trip to the sea caves.", "Bonifacio encaramada sobre sus acantilados de caliza blanca, y el paseo en barco hasta las grutas marinas."], "co5"),
            fr.day(7, ["Aiguilles de Bavella – Zonza", "The needles of Bavella – Zonza", "Agujas de Bavella – Zonza"], ["Le col de Bavella et ses aiguilles de granit, puis le village de Zonza.", "The Bavella pass and its granite needles, then the village of Zonza.", "El paso de Bavella y sus agujas de granito, y el pueblo de Zonza."], "co6"),
            fr.day(8, T_HOME, home(["Ajaccio", "Ajaccio", "Ajaccio"]), "co3"),
          ]),
      ],
    }),

    me.trip({
      slug: "montenegro-essentiel-du-montenegro-kotor-budva-8j",
      name: ["L'essentiel du Monténégro : les bouches de Kotor, Budva, le lac de Skadar, l'Albanie et Dubrovnik", "The essentials of Montenegro: the Bay of Kotor, Budva, Lake Skadar, Albania and Dubrovnik", "Lo esencial de Montenegro: las bocas de Kotor, Budva, el lago Skadar, Albania y Dubrovnik"],
      tagline: ["Une semaine sur l'Adriatique, avec l'Albanie et la Croatie en excursion", "A week on the Adriatic, with Albania and Croatia on day trips", "Una semana en el Adriático, con Albania y Croacia de excursión"],
      description: [
        "Le Monténégro en étoile : Cetinje, Njeguši et la route en lacets vers Kotor, Budva, le lac de Skadar, une journée en Albanie, une journée à Dubrovnik, les bouches de Kotor en bateau et une journée libre au bord de la mer.",
        "Montenegro from a single base: Cetinje, Njeguši and the winding road to Kotor, Budva, Lake Skadar, a day in Albania, a day in Dubrovnik, the Bay of Kotor by boat and a free day by the sea.",
        "Montenegro desde una sola base: Cetinje, Njeguši y la carretera en zigzag hacia Kotor, Budva, el lago Skadar, un día en Albania, un día en Dubrovnik, las bocas de Kotor en barco y un día libre junto al mar.",
      ],
      includes: INC(7),
      price: 1411, nights: 7, departureFrom: "Francfort", image: "me5",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43989,
      chapters: [
        me.chapter(["Le Monténégro", "Montenegro", "Montenegro"], ["Montagnes, lacs et Adriatique.", "Mountains, lakes and the Adriatic.", "Montañas, lagos y Adriático."],
          ["me1", "me2", "me3", "me4", "me5", "me7"],
          [
            me.day(1, ...arr(["Tivat", "Tivat", "Tivat"]), "me4"),
            me.day(2, ["Cetinje – Njeguši – Kotor – Budva", "Cetinje – Njeguši – Kotor – Budva", "Cetinje – Njeguši – Kotor – Budva"], ["Cetinje, l'ancienne capitale royale, le village de Njeguši et son jambon fumé, la route aux 25 lacets jusqu'à Kotor, puis Budva.", "Cetinje, the former royal capital, the village of Njeguši and its smoked ham, the road of 25 hairpins down to Kotor, then Budva.", "Cetinje, la antigua capital real, el pueblo de Njeguši y su jamón ahumado, la carretera de 25 curvas hasta Kotor, y Budva."], "me3"),
            me.day(3, ["Budva – lac de Skadar", "Budva – Lake Skadar", "Budva – lago Skadar"], ["La vieille ville de Budva, puis le lac de Skadar en bateau, ses nénuphars et ses pélicans.", "Budva's old town, then Lake Skadar by boat, its water lilies and pelicans.", "El casco antiguo de Budva, y el lago Skadar en barco, sus nenúfares y sus pelícanos."], "me7"),
            me.day(4, ["L'Albanie", "Albania", "Albania"], ["Une journée en Albanie : Shkodër, sa forteresse de Rozafa et son lac.", "A day in Albania: Shkodër, its Rozafa fortress and its lake.", "Un día en Albania: Shkodër, su fortaleza de Rozafa y su lago."], "me6"),
            me.day(5, ["Dubrovnik", "Dubrovnik", "Dubrovnik"], ["Une journée à Dubrovnik, la perle de l'Adriatique, ses remparts et le Stradun.", "A day in Dubrovnik, the pearl of the Adriatic, its walls and the Stradun.", "Un día en Dubrovnik, la perla del Adriático, sus murallas y el Stradun."], "hr7"),
            me.day(6, ["Les bouches de Kotor", "The Bay of Kotor", "Las bocas de Kotor"], ["Croisière dans les bouches de Kotor, l'îlot de Notre-Dame-du-Rocher et Perast.", "A cruise in the Bay of Kotor, the islet of Our Lady of the Rocks and Perast.", "Crucero por las bocas de Kotor, el islote de Nuestra Señora de las Rocas y Perast."], "me1"),
            me.day(7, ["Journée libre", "A free day", "Día libre"], ["Journée libre au bord de la mer, près de l'îlot de Sveti Stefan.", "A free day by the sea, near the islet of Sveti Stefan.", "Día libre junto al mar, cerca del islote de Sveti Stefan."], "me5"),
            me.day(8, T_HOME, home(["Tivat", "Tivat", "Tivat"]), "me2"),
          ]),
      ],
    }),

    ge.trip({
      slug: "georgie-cap-sur-la-georgie-tbilissi-kakhetie-kazbegi-8j",
      name: ["Cap sur la Géorgie : Tbilissi, la Kakhétie, le Grand Caucase et Mtskheta", "Heading for Georgia: Tbilisi, Kakheti, the Greater Caucasus and Mtskheta", "Rumbo a Georgia: Tiflis, Kajetia, el Gran Cáucaso y Mtsjeta"],
      tagline: ["Vignobles, monastères et montagnes, en groupe de 12 au plus", "Vineyards, monasteries and mountains, in a group of 12 at most", "Viñedos, monasterios y montañas, en grupo de 12 como máximo"],
      description: [
        "La Géorgie en petit groupe : deux jours à Tbilissi, la Kakhétie et ses vignobles avec Sighnaghi, Tsinandali et Telavi, le monastère d'Alaverdi, la route militaire géorgienne, Ananouri et Goudaouri, l'église de la Trinité de Guerguéti au pied du Kazbek, Mtskheta, Gori et la cité troglodyte d'Ouplistsikhé.",
        "Georgia in a small group: two days in Tbilisi, Kakheti and its vineyards with Sighnaghi, Tsinandali and Telavi, the Alaverdi monastery, the Georgian Military Road, Ananuri and Gudauri, the Gergeti Trinity Church at the foot of Kazbek, Mtskheta, Gori and the cave city of Uplistsikhe.",
        "Georgia en grupo reducido: dos días en Tiflis, Kajetia y sus viñedos con Sighnaghi, Tsinandali y Telavi, el monasterio de Alaverdi, la carretera militar georgiana, Ananuri y Gudauri, la iglesia de la Trinidad de Gergeti al pie del Kazbek, Mtsjeta, Gori y la ciudad troglodita de Uplistsije.",
      ],
      includes: INC(7, ",Dégustation de vin en kvevri"),
      price: 1541, nights: 7, departureFrom: "Bruxelles", image: "ge6",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -43988,
      chapters: [
        ge.chapter(["Tbilissi et la Kakhétie", "Tbilisi and Kakheti", "Tiflis y Kajetia"], ["La capitale et le pays du vin.", "The capital and wine country.", "La capital y el país del vino."],
          ["ge7", "ge4", "ge5"],
          [
            ge.day(1, ...arr(["Tbilissi", "Tbilisi", "Tiflis"]), "ge7"),
            ge.day(2, ["Tbilissi", "Tbilisi", "Tiflis"], ["Tbilissi, sa vieille ville aux balcons de bois, les bains de soufre, la forteresse de Narikala et la cathédrale de la Sainte-Trinité.", "Tbilisi, its old town with wooden balconies, the sulphur baths, the Narikala fortress and the Holy Trinity Cathedral.", "Tiflis, su ciudad vieja de balcones de madera, los baños de azufre, la fortaleza de Narikala y la catedral de la Santísima Trinidad."], "ge4"),
            ge.day(3, ["Sighnaghi – Tsinandali – Telavi", "Sighnaghi – Tsinandali – Telavi", "Sighnaghi – Tsinandali – Telavi"], ["La Kakhétie : Sighnaghi et ses remparts, le domaine de Tsinandali et une dégustation de vin vinifié en jarres de terre, puis Telavi.", "Kakheti: Sighnaghi and its walls, the Tsinandali estate and a tasting of wine made in clay jars, then Telavi.", "Kajetia: Sighnaghi y sus murallas, la finca de Tsinandali y una cata de vino elaborado en tinajas de barro, y Telavi."], "ge5"),
          ]),
        ge.chapter(["Le Grand Caucase", "The Greater Caucasus", "El Gran Cáucaso"], ["La route militaire et le Kazbek.", "The Military Road and Kazbek.", "La carretera militar y el Kazbek."],
          ["ge6", "ge3", "ge2", "ge1"],
          [
            ge.day(4, ["Alaverdi – Ananouri – Goudaouri", "Alaverdi – Ananuri – Gudauri", "Alaverdi – Ananuri – Gudauri"], ["Le monastère d'Alaverdi, le col de Gombori, puis la forteresse d'Ananouri au bord de son lac et la station de Goudaouri.", "The Alaverdi monastery, the Gombori pass, then the Ananuri fortress on its lake and the resort of Gudauri.", "El monasterio de Alaverdi, el paso de Gombori, y la fortaleza de Ananuri junto a su lago y la estación de Gudauri."], "ge2"),
            ge.day(5, ["Stepantsminda – Guerguéti", "Stepantsminda – Gergeti", "Stepantsminda – Gergeti"], ["Stepantsminda et l'église de la Trinité de Guerguéti, perchée face au mont Kazbek, 5 047 mètres.", "Stepantsminda and the Gergeti Trinity Church, perched facing Mount Kazbek, 5,047 metres.", "Stepantsminda y la iglesia de la Trinidad de Gergeti, encaramada frente al monte Kazbek, 5.047 metros."], "ge6"),
            ge.day(6, ["Mtskheta – Gori – Ouplistsikhé", "Mtskheta – Gori – Uplistsikhe", "Mtsjeta – Gori – Uplistsije"], ["Mtskheta, ancienne capitale et berceau du christianisme géorgien, Gori, puis la cité troglodyte d'Ouplistsikhé.", "Mtskheta, the former capital and cradle of Georgian Christianity, Gori, then the cave city of Uplistsikhe.", "Mtsjeta, antigua capital y cuna del cristianismo georgiano, Gori, y la ciudad troglodita de Uplistsije."], "ge1"),
            ge.day(7, ["Tbilissi", "Tbilisi", "Tiflis"], ["Journée libre à Tbilissi : le marché aux puces du pont Sec, le musée national ou le parc de Mtatsminda.", "A free day in Tbilisi: the Dry Bridge flea market, the national museum or Mtatsminda park.", "Día libre en Tiflis: el mercadillo del puente Seco, el museo nacional o el parque de Mtatsminda."], "ge7"),
            ge.day(8, T_HOME, home(["Tbilissi", "Tbilisi", "Tiflis"]), "ge3"),
          ]),
      ],
    }),

    ie.trip({
      slug: "irlande-cap-sur-l-irlande-kerry-dingle-connemara-8j",
      name: ["Cap sur l'Irlande : Cashel, l'anneau du Kerry, Dingle, les falaises de Moher et le Connemara", "Heading for Ireland: Cashel, the Ring of Kerry, Dingle, the Cliffs of Moher and Connemara", "Rumbo a Irlanda: Cashel, el anillo de Kerry, Dingle, los acantilados de Moher y Connemara"],
      tagline: ["La côte ouest de l'Irlande en une semaine", "Ireland's west coast in a week", "La costa oeste de Irlanda en una semana"],
      description: [
        "L'Irlande verte : Dublin, le rocher de Cashel, l'anneau du Kerry, la péninsule de Dingle, le Burren et les falaises de Moher, le Connemara, puis Dublin. Avec une extension en Irlande du Nord, Belfast et la Chaussée des Géants (12 jours), à partir de 2 782 € par personne.",
        "Green Ireland: Dublin, the Rock of Cashel, the Ring of Kerry, the Dingle peninsula, the Burren and the Cliffs of Moher, Connemara, then Dublin. With an extension to Northern Ireland, Belfast and the Giant's Causeway (12 days), from €2,782 per person.",
        "La Irlanda verde: Dublín, la roca de Cashel, el anillo de Kerry, la península de Dingle, el Burren y los acantilados de Moher, Connemara, y Dublín. Con una extensión a Irlanda del Norte, Belfast y la Calzada del Gigante (12 días), desde 2.782 € por persona.",
      ],
      includes: INC(7),
      price: 1662, nights: 7, departureFrom: "Paris", image: "ci6",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43987,
      chapters: [
        ie.chapter(["Dublin et le Kerry", "Dublin and Kerry", "Dublín y Kerry"], ["Le sud-ouest.", "The south-west.", "El suroeste."],
          ["ci1", "ci2", "ci3", "ci4"],
          [
            ie.day(1, ...arr(DUB), "ci1"),
            ie.day(2, ["Dublin – Cashel – Kerry", "Dublin – Cashel – Kerry", "Dublín – Cashel – Kerry"], ["Le rocher de Cashel, ancienne capitale des rois de Munster et sa cathédrale en ruine, puis le Kerry.", "The Rock of Cashel, former seat of the kings of Munster and its ruined cathedral, then Kerry.", "La roca de Cashel, antigua sede de los reyes de Munster y su catedral en ruinas, y Kerry."], "ci2"),
            ie.day(3, ["L'anneau du Kerry", "The Ring of Kerry", "El anillo de Kerry"], X_KERRY, "ci3"),
            ie.day(4, ["La péninsule de Dingle", "The Dingle peninsula", "La península de Dingle"], X_DINGLE, "ci4"),
          ]),
        ie.chapter(["L'ouest et Dublin", "The west and Dublin", "El oeste y Dublín"], ["Moher, Connemara et capitale.", "Moher, Connemara and the capital.", "Moher, Connemara y la capital."],
          ["ci6", "ci5", "ci7"],
          [
            ie.day(5, ["Le Burren et les falaises de Moher", "The Burren and the Cliffs of Moher", "El Burren y los acantilados de Moher"], X_MOHER, "ci6"),
            ie.day(6, ["Le Connemara", "Connemara", "Connemara"], X_CONNEMARA, "ci7"),
            ie.day(7, DUB, X_DUB, "ci1"),
            ie.day(8, T_HOME, home(DUB), "ci5"),
          ]),
      ],
    }),

    uk.trip({
      slug: "royaume-uni-charmes-et-traditions-anglaises-cornouailles-8j",
      name: ["Charmes et traditions anglaises : Londres, Stonehenge, la Cornouailles, Bath et les Cotswolds", "English charm and traditions: London, Stonehenge, Cornwall, Bath and the Cotswolds", "Encanto y tradiciones inglesas: Londres, Stonehenge, Cornualles, Bath y los Cotswolds"],
      tagline: ["Le sud de l'Angleterre, des falaises de Cornouailles aux villages de pierre dorée", "Southern England, from the cliffs of Cornwall to the golden-stone villages", "El sur de Inglaterra, de los acantilados de Cornualles a los pueblos de piedra dorada"],
      description: [
        "L'Angleterre en une semaine : Londres, le château de Windsor et Stonehenge, la côte jurassique et Bournemouth, Plymouth, St Michael's Mount, St Ives et Falmouth en Cornouailles, Wells, Bath et ses thermes romains, les villages des Cotswolds, puis Oxford.",
        "England in a week: London, Windsor Castle and Stonehenge, the Jurassic Coast and Bournemouth, Plymouth, St Michael's Mount, St Ives and Falmouth in Cornwall, Wells, Bath and its Roman baths, the Cotswold villages, then Oxford.",
        "Inglaterra en una semana: Londres, el castillo de Windsor y Stonehenge, la costa jurásica y Bournemouth, Plymouth, St Michael's Mount, St Ives y Falmouth en Cornualles, Wells, Bath y sus termas romanas, los pueblos de los Cotswolds, y Oxford.",
      ],
      includes: INC(7),
      price: 1536, nights: 7, departureFrom: "Barcelone", image: "an6",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43986,
      chapters: [
        uk.chapter(["Londres et la côte sud", "London and the south coast", "Londres y la costa sur"], ["Châteaux, mégalithes et falaises.", "Castles, megaliths and cliffs.", "Castillos, megalitos y acantilados."],
          ["an2", "an3", "an5"],
          [
            uk.day(1, ...arr(LON), "an2"),
            uk.day(2, ["Windsor – Stonehenge – Bournemouth", "Windsor – Stonehenge – Bournemouth", "Windsor – Stonehenge – Bournemouth"], ["Le château de Windsor, résidence royale, le cercle de pierres de Stonehenge, puis Bournemouth.", "Windsor Castle, the royal residence, the stone circle of Stonehenge, then Bournemouth.", "El castillo de Windsor, residencia real, el círculo de piedras de Stonehenge, y Bournemouth."], "an3"),
            uk.day(3, ["Côte jurassique – Plymouth", "Jurassic Coast – Plymouth", "Costa jurásica – Plymouth"], ["La côte jurassique et l'arche de Durdle Door, puis Plymouth.", "The Jurassic Coast and the Durdle Door arch, then Plymouth.", "La costa jurásica y el arco de Durdle Door, y Plymouth."], "an5"),
          ]),
        uk.chapter(["Cornouailles, Bath et Cotswolds", "Cornwall, Bath and the Cotswolds", "Cornualles, Bath y los Cotswolds"], ["L'Angleterre des cartes postales.", "Picture-postcard England.", "La Inglaterra de postal."],
          ["an6", "an7", "an1", "an4"],
          [
            uk.day(4, ["St Michael's Mount – St Ives – Falmouth", "St Michael's Mount – St Ives – Falmouth", "St Michael's Mount – St Ives – Falmouth"], ["St Michael's Mount, îlot fortifié relié à la côte à marée basse, le port d'artistes de St Ives et Falmouth.", "St Michael's Mount, a fortified islet linked to the coast at low tide, the artists' harbour of St Ives and Falmouth.", "St Michael's Mount, islote fortificado unido a la costa con marea baja, el puerto de artistas de St Ives y Falmouth."], "an6"),
            uk.day(5, ["Wells – Bath – Bristol", "Wells – Bath – Bristol", "Wells – Bath – Bristol"], ["La cathédrale de Wells, puis Bath, ses thermes romains et ses croissants géorgiens.", "Wells Cathedral, then Bath, its Roman baths and Georgian crescents.", "La catedral de Wells, y Bath, sus termas romanas y sus crecientes georgianos."], "an7"),
            uk.day(6, ["Les Cotswolds", "The Cotswolds", "Los Cotswolds"], ["Les villages de pierre dorée des Cotswolds, Bibury, Bourton-on-the-Water et un afternoon tea.", "The golden-stone villages of the Cotswolds, Bibury, Bourton-on-the-Water and an afternoon tea.", "Los pueblos de piedra dorada de los Cotswolds, Bibury, Bourton-on-the-Water y un afternoon tea."], "an1"),
            uk.day(7, ["Oxford – Londres", "Oxford – London", "Oxford – Londres"], ["Oxford et ses collèges, puis Londres : Westminster, Big Ben et Tower Bridge.", "Oxford and its colleges, then London: Westminster, Big Ben and Tower Bridge.", "Oxford y sus colleges, y Londres: Westminster, el Big Ben y el Tower Bridge."], "an2"),
            uk.day(8, T_HOME, home(LON), "an4"),
          ]),
      ],
    }),

    ie.trip({
      slug: "irlande-beautes-irlandaises-connemara-moher-kerry-8j",
      name: ["Beautés irlandaises : Galway, le Connemara, les falaises de Moher, Dingle, le Kerry et Kilkenny", "Irish beauties: Galway, Connemara, the Cliffs of Moher, Dingle, Kerry and Kilkenny", "Bellezas irlandesas: Galway, Connemara, los acantilados de Moher, Dingle, Kerry y Kilkenny"],
      tagline: ["La boucle irlandaise par l'ouest, avec Cork et Kilkenny", "The Irish loop via the west, with Cork and Kilkenny", "El circuito irlandés por el oeste, con Cork y Kilkenny"],
      description: [
        "L'Irlande en boucle : Dublin, Galway et le Connemara, le Burren et les falaises de Moher, la péninsule de Dingle, l'anneau du Kerry, Cork, puis Kilkenny et son château médiéval.",
        "Ireland in a loop: Dublin, Galway and Connemara, the Burren and the Cliffs of Moher, the Dingle peninsula, the Ring of Kerry, Cork, then Kilkenny and its medieval castle.",
        "Irlanda en circuito: Dublín, Galway y Connemara, el Burren y los acantilados de Moher, la península de Dingle, el anillo de Kerry, Cork, y Kilkenny y su castillo medieval.",
      ],
      includes: INC(7),
      price: 1756, nights: 7, departureFrom: "Paris", image: "bi4",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43985,
      chapters: [
        ie.chapter(["Dublin et l'ouest", "Dublin and the west", "Dublín y el oeste"], ["Galway, Connemara et Moher.", "Galway, Connemara and Moher.", "Galway, Connemara y Moher."],
          ["bi1", "bi2", "bi3", "bi4"],
          [
            ie.day(1, ...arr(DUB), "bi1"),
            ie.day(2, ["Dublin – Galway", "Dublin – Galway", "Dublín – Galway"], join(X_DUB, ["Puis Galway et ses ruelles animées.", "Then Galway and its lively streets.", "Y Galway y sus animadas callejuelas."]), "bi2"),
            ie.day(3, ["Le Connemara", "Connemara", "Connemara"], X_CONNEMARA, "bi3"),
            ie.day(4, ["Burren – falaises de Moher – Kerry", "Burren – Cliffs of Moher – Kerry", "Burren – acantilados de Moher – Kerry"], X_MOHER, "bi4"),
          ]),
        ie.chapter(["Le sud-ouest", "The south-west", "El suroeste"], ["Dingle, Kerry et Kilkenny.", "Dingle, Kerry and Kilkenny.", "Dingle, Kerry y Kilkenny."],
          ["bi5", "bi7"],
          [
            ie.day(5, ["La péninsule de Dingle", "The Dingle peninsula", "La península de Dingle"], X_DINGLE, "bi5"),
            ie.day(6, ["L'anneau du Kerry – Cork", "The Ring of Kerry – Cork", "El anillo de Kerry – Cork"], X_KERRY, "bi3"),
            ie.day(7, ["Cork – Kilkenny – Dublin", "Cork – Kilkenny – Dublin", "Cork – Kilkenny – Dublín"], ["Kilkenny, son château et sa cathédrale médiévale, puis le rocher de Cashel sur la route de Dublin.", "Kilkenny, its castle and medieval cathedral, then the Rock of Cashel on the road to Dublin.", "Kilkenny, su castillo y su catedral medieval, y la roca de Cashel camino de Dublín."], "bi7"),
            ie.day(8, T_HOME, home(DUB), "bi1"),
          ]),
      ],
    }),

    pt.trip({
      slug: "portugal-au-fil-du-douro-croisiere-8j",
      name: ["Au fil du Douro : croisière de Porto à Salamanque à bord du MS Queen Isabel", "Along the Douro: a cruise from Porto to Salamanca aboard the MS Queen Isabel", "Por el Duero: crucero de Oporto a Salamanca a bordo del MS Queen Isabel"],
      tagline: ["Une semaine de croisière fluviale dans la vallée du porto", "A week's river cruise in the port wine valley", "Una semana de crucero fluvial por el valle del oporto"],
      description: [
        "La vallée du Douro au fil de l'eau : Porto, Régua, Lamego et son sanctuaire baroque, Pinhão et ses quintas, Barca d'Alva et le village fortifié de Castelo Rodrigo, une excursion à Salamanque en Espagne, le palais de Mateus, puis Braga et Guimarães, berceau du Portugal.",
        "The Douro valley along the water: Porto, Régua, Lamego and its baroque sanctuary, Pinhão and its quintas, Barca d'Alva and the fortified village of Castelo Rodrigo, an excursion to Salamanca in Spain, the Mateus palace, then Braga and Guimarães, cradle of Portugal.",
        "El valle del Duero a lo largo del agua: Oporto, Régua, Lamego y su santuario barroco, Pinhão y sus quintas, Barca d'Alva y el pueblo fortificado de Castelo Rodrigo, una excursión a Salamanca en España, el palacio de Mateus, y Braga y Guimarães, cuna de Portugal.",
      ],
      includes: ["Vols depuis la France,Transferts,7 nuits en cabine à bord du MS Queen Isabel,Pension complète,Excursions du programme", "Flights from France,Transfers,7 nights in a cabin aboard the MS Queen Isabel,Full board,Excursions in the programme", "Vuelos desde Francia,Traslados,7 noches en camarote a bordo del MS Queen Isabel,Pensión completa,Excursiones del programa"],
      price: 2599, nights: 7, departureFrom: "Paris", image: "do1",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,groups", maxGuests: 118, order: -43984,
      chapters: [
        pt.chapter(["La vallée du Douro", "The Douro valley", "El valle del Duero"], ["Vignobles en terrasses et quintas.", "Terraced vineyards and quintas.", "Viñedos en terrazas y quintas."],
          ["do1", "do2", "do4", "do3", "do5"],
          [
            pt.day(1, ["Porto – embarquement", "Porto – boarding", "Oporto – embarque"], ["Envol pour Porto et embarquement à bord du MS Queen Isabel.", "Flight to Porto and boarding the MS Queen Isabel.", "Vuelo a Oporto y embarque a bordo del MS Queen Isabel."], "do5"),
            pt.day(2, ["Régua – Lamego – Pinhão", "Régua – Lamego – Pinhão", "Régua – Lamego – Pinhão"], ["Navigation vers Régua, le sanctuaire baroque de Lamego et son escalier, puis Pinhão et ses quintas.", "Sailing to Régua, the baroque sanctuary of Lamego and its stairway, then Pinhão and its quintas.", "Navegación hacia Régua, el santuario barroco de Lamego y su escalinata, y Pinhão y sus quintas."], "do4"),
            pt.day(3, ["Barca d'Alva – Castelo Rodrigo", "Barca d'Alva – Castelo Rodrigo", "Barca d'Alva – Castelo Rodrigo"], ["La haute vallée du Douro jusqu'à Barca d'Alva, et le village fortifié de Castelo Rodrigo.", "The upper Douro valley to Barca d'Alva, and the fortified village of Castelo Rodrigo.", "El alto valle del Duero hasta Barca d'Alva, y el pueblo fortificado de Castelo Rodrigo."], "do1"),
            pt.day(4, ["Salamanque – Pocinho", "Salamanca – Pocinho", "Salamanca – Pocinho"], ["Excursion à Salamanque, en Espagne, sa Plaza Mayor et son université, puis Pocinho.", "An excursion to Salamanca, in Spain, its Plaza Mayor and university, then Pocinho.", "Excursión a Salamanca, en España, su Plaza Mayor y su universidad, y Pocinho."], "do3"),
            pt.day(5, ["Casa de Mateus – Régua", "Casa de Mateus – Régua", "Casa de Mateus – Régua"], ["Le palais baroque de Mateus et ses jardins, puis Régua.", "The baroque Mateus palace and its gardens, then Régua.", "El palacio barroco de Mateus y sus jardines, y Régua."], "do2"),
            pt.day(6, ["Régua – Porto", "Régua – Porto", "Régua – Oporto"], ["Descente du Douro et ses écluses jusqu'à Porto.", "Down the Douro and its locks to Porto.", "Descenso del Duero y sus esclusas hasta Oporto."], "do5"),
            pt.day(7, ["Braga – Guimarães", "Braga – Guimarães", "Braga – Guimarães"], ["Braga et le sanctuaire du Bom Jesus, puis Guimarães, berceau du Portugal.", "Braga and the Bom Jesus sanctuary, then Guimarães, cradle of Portugal.", "Braga y el santuario del Bom Jesus, y Guimarães, cuna de Portugal."], "mp5"),
            pt.day(8, T_HOME, home(OPO), "do1"),
          ]),
      ],
    }),

    uk.trip({
      slug: "royaume-uni-cap-sur-l-ecosse-highlands-skye-8j",
      name: ["Cap sur l'Écosse : Édimbourg, le Loch Lomond, Glencoe, l'île de Skye et les Highlands", "Heading for Scotland: Edinburgh, Loch Lomond, Glencoe, the Isle of Skye and the Highlands", "Rumbo a Escocia: Edimburgo, el Loch Lomond, Glencoe, la isla de Skye y las Highlands"],
      tagline: ["Lochs, châteaux et whisky en une semaine", "Lochs, castles and whisky in a week", "Lagos, castillos y whisky en una semana"],
      description: [
        "L'Écosse en boucle : Édimbourg, Glasgow, les Trossachs et le Loch Lomond, Glencoe, l'île de Skye et Portree, le parc des Cairngorms et une distillerie, Aberdeen, la côte est et St Andrews, berceau du golf.",
        "Scotland in a loop: Edinburgh, Glasgow, the Trossachs and Loch Lomond, Glencoe, the Isle of Skye and Portree, Cairngorms park and a distillery, Aberdeen, the east coast and St Andrews, the home of golf.",
        "Escocia en circuito: Edimburgo, Glasgow, los Trossachs y el Loch Lomond, Glencoe, la isla de Skye y Portree, el parque de los Cairngorms y una destilería, Aberdeen, la costa este y St Andrews, cuna del golf.",
      ],
      includes: INC(7, ",Visite d'une distillerie"),
      price: 2033, nights: 7, departureFrom: "Genève", image: "ec5",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43983,
      chapters: [
        uk.chapter(["Édimbourg et les lochs", "Edinburgh and the lochs", "Edimburgo y los lagos"], ["Capitales et Trossachs.", "Capitals and the Trossachs.", "Capitales y Trossachs."],
          ["ec3", "ec4"],
          [
            uk.day(1, ...arr(EDI), "tc2"),
            uk.day(2, ["Édimbourg – Glasgow", "Edinburgh – Glasgow", "Edimburgo – Glasgow"], join(X_EDI, ["Puis Glasgow.", "Then Glasgow.", "Y Glasgow."]), "tc2"),
            uk.day(3, ["Trossachs – Loch Lomond – Fort William", "Trossachs – Loch Lomond – Fort William", "Trossachs – Loch Lomond – Fort William"], ["Les Trossachs et le Loch Lomond, puis la région de Fort William.", "The Trossachs and Loch Lomond, then the Fort William area.", "Los Trossachs y el Loch Lomond, y la región de Fort William."], "ec3"),
          ]),
        uk.chapter(["Skye et les Highlands", "Skye and the Highlands", "Skye y las Highlands"], ["Montagnes, île et côte est.", "Mountains, island and east coast.", "Montañas, isla y costa este."],
          ["ec5", "ec1", "ec6"],
          [
            uk.day(4, ["Glencoe – île de Skye", "Glencoe – Isle of Skye", "Glencoe – isla de Skye"], X_SKYE, "ec5"),
            uk.day(5, ["Portree – Aviemore", "Portree – Aviemore", "Portree – Aviemore"], ["Portree et le nord de Skye, puis le Loch Ness et la région d'Aviemore.", "Portree and northern Skye, then Loch Ness and the Aviemore area.", "Portree y el norte de Skye, y el lago Ness y la región de Aviemore."], "ec1"),
            uk.day(6, ["Cairngorms – Aberdeen", "Cairngorms – Aberdeen", "Cairngorms – Aberdeen"], ["Le parc des Cairngorms, une distillerie de whisky des Highlands, puis Aberdeen, la ville de granit.", "Cairngorms park, a Highland whisky distillery, then Aberdeen, the granite city.", "El parque de los Cairngorms, una destilería de whisky de las Highlands, y Aberdeen, la ciudad de granito."], "ec6"),
            uk.day(7, ["St Andrews – Édimbourg", "St Andrews – Edinburgh", "St Andrews – Edimburgo"], ["La côte est, les ruines du château de Dunnottar et St Andrews, berceau du golf, puis Édimbourg.", "The east coast, the ruins of Dunnottar Castle and St Andrews, the home of golf, then Edinburgh.", "La costa este, las ruinas del castillo de Dunnottar y St Andrews, cuna del golf, y Edimburgo."], "ec4"),
            uk.day(8, T_HOME, home(EDI), "ec5"),
          ]),
      ],
    }),

    hr.trip({
      slug: "croatie-la-croatie-d-ile-en-ile-en-bateau-10j",
      name: ["La Croatie d'île en île : Split, Hvar, Korčula et Dubrovnik en bateau", "Croatia from island to island: Split, Hvar, Korčula and Dubrovnik by boat", "Croacia de isla en isla: Split, Hvar, Korčula y Dubrovnik en barco"],
      tagline: ["La Dalmatie au fil de l'eau, trois nuits sur chaque île", "Dalmatia by water, three nights on each island", "Dalmacia por mar, tres noches en cada isla"],
      description: [
        "La côte dalmate en bateau : Split et le palais de Dioclétien, trois nuits à Hvar, ses champs de lavande et ses criques, trois nuits à Korčula, ville natale supposée de Marco Polo, puis Dubrovnik, la perle de l'Adriatique.",
        "The Dalmatian coast by boat: Split and Diocletian's Palace, three nights on Hvar, its lavender fields and coves, three nights on Korčula, the supposed birthplace of Marco Polo, then Dubrovnik, the pearl of the Adriatic.",
        "La costa dálmata en barco: Split y el palacio de Diocleciano, tres noches en Hvar, sus campos de lavanda y sus calas, tres noches en Korčula, supuesta ciudad natal de Marco Polo, y Dubrovnik, la perla del Adriático.",
      ],
      includes: ["Vols depuis la France,Transferts,9 nuits en hôtels,Bateaux entre les îles,Visites guidées de Split et Dubrovnik", "Flights from France,Transfers,9 nights in hotels,Boats between the islands,Guided visits of Split and Dubrovnik", "Vuelos desde Francia,Traslados,9 noches en hoteles,Barcos entre las islas,Visitas guiadas de Split y Dubrovnik"],
      price: 1523, nights: 9, departureFrom: "Marseille", image: "hr3",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 30, order: -43982,
      chapters: [
        hr.chapter(["Split et Hvar", "Split and Hvar", "Split y Hvar"], ["Le palais et l'île de la lavande.", "The palace and the island of lavender.", "El palacio y la isla de la lavanda."],
          ["hr1", "hr4"],
          [
            hr.day(1, ...arr(["Split", "Split", "Split"]), "hr2"),
            hr.day(2, ["Split – Hvar", "Split – Hvar", "Split – Hvar"], ["Le palais de Dioclétien à Split, puis le bateau vers l'île de Hvar.", "Diocletian's Palace in Split, then the boat to the island of Hvar.", "El palacio de Diocleciano en Split, y el barco hacia la isla de Hvar."], "hr4"),
            hr.day(3, ["Hvar", "Hvar", "Hvar"], ["Journées libres à Hvar : la forteresse espagnole, les îles Pakleni, les champs de lavande et le village de Stari Grad.", "Free days on Hvar: the Spanish fortress, the Pakleni islands, the lavender fields and the village of Stari Grad.", "Días libres en Hvar: la fortaleza española, las islas Pakleni, los campos de lavanda y el pueblo de Stari Grad."], "hr1"),
          ]),
        hr.chapter(["Korčula et Dubrovnik", "Korčula and Dubrovnik", "Korčula y Dubrovnik"], ["L'île de Marco Polo et la perle de l'Adriatique.", "Marco Polo's island and the pearl of the Adriatic.", "La isla de Marco Polo y la perla del Adriático."],
          ["hr5", "hr6", "hr3", "hr7"],
          [
            hr.day(5, ["Hvar – Korčula", "Hvar – Korčula", "Hvar – Korčula"], ["Bateau vers Korčula, sa vieille ville fortifiée en arête de poisson.", "Boat to Korčula, its fishbone-shaped walled old town.", "Barco hacia Korčula, su ciudad vieja amurallada en espina de pez."], "hr5"),
            hr.day(6, ["Korčula", "Korčula", "Korčula"], ["Journées libres à Korčula : les vignobles de Lumbarda, les plages et la danse des épées Moreška.", "Free days on Korčula: the vineyards of Lumbarda, the beaches and the Moreška sword dance.", "Días libres en Korčula: los viñedos de Lumbarda, las playas y la danza de las espadas Moreška."], "hr6"),
            hr.day(8, ["Korčula – Dubrovnik", "Korčula – Dubrovnik", "Korčula – Dubrovnik"], ["Bateau vers Dubrovnik.", "Boat to Dubrovnik.", "Barco hacia Dubrovnik."], "hr7"),
            hr.day(9, ["Dubrovnik", "Dubrovnik", "Dubrovnik"], ["Dubrovnik, le tour des remparts, le Stradun, le palais des Recteurs et le téléphérique du mont Srđ.", "Dubrovnik, a walk round the walls, the Stradun, the Rector's Palace and the Mount Srđ cable car.", "Dubrovnik, la vuelta a las murallas, el Stradun, el palacio del Rector y el teleférico del monte Srđ."], "hr3"),
            hr.day(10, T_HOME, home(["Dubrovnik", "Dubrovnik", "Dubrovnik"]), "hr2"),
          ]),
      ],
    }),

    ie.trip({
      slug: "irlande-de-l-irlande-sauvage-aux-highlands-d-ecosse-12j",
      name: ["De l'Irlande sauvage aux Highlands d'Écosse : Kerry, Donegal, Belfast, Skye et Édimbourg", "From wild Ireland to the Scottish Highlands: Kerry, Donegal, Belfast, Skye and Edinburgh", "De la Irlanda salvaje a las Highlands de Escocia: Kerry, Donegal, Belfast, Skye y Edimburgo"],
      tagline: ["Le grand tour celte, de Cork à Inverness", "The great Celtic tour, from Cork to Inverness", "La gran vuelta celta, de Cork a Inverness"],
      description: [
        "L'Irlande et l'Écosse en douze jours : Dublin, Cork, l'anneau du Kerry, Galway, le Donegal sauvage, Belfast, la traversée vers Glasgow, Fort William, l'île de Skye, Inverness et le Loch Ness, puis deux jours à Édimbourg.",
        "Ireland and Scotland in twelve days: Dublin, Cork, the Ring of Kerry, Galway, wild Donegal, Belfast, the crossing to Glasgow, Fort William, the Isle of Skye, Inverness and Loch Ness, then two days in Edinburgh.",
        "Irlanda y Escocia en doce días: Dublín, Cork, el anillo de Kerry, Galway, el salvaje Donegal, Belfast, la travesía a Glasgow, Fort William, la isla de Skye, Inverness y el lago Ness, y dos días en Edimburgo.",
      ],
      includes: INC(11, ",Ferry Belfast – Écosse"),
      price: 2788, nights: 11, departureFrom: "Bruxelles", image: "ie6",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 40, order: -43981,
      chapters: [
        ie.chapter(["L'Irlande", "Ireland", "Irlanda"], ["Du Kerry au Donegal.", "From Kerry to Donegal.", "De Kerry a Donegal."],
          ["ie2", "ie4", "ie5", "ie6", "ie1"],
          [
            ie.day(1, ...arr(DUB), "ie2"),
            ie.day(2, ["Dublin – Cork", "Dublin – Cork", "Dublín – Cork"], join(X_DUB, ["Puis Cork.", "Then Cork.", "Y Cork."]), "ie3"),
            ie.day(3, ["L'anneau du Kerry", "The Ring of Kerry", "El anillo de Kerry"], X_KERRY, "ie4"),
            ie.day(4, ["Kerry – Galway", "Kerry – Galway", "Kerry – Galway"], X_MOHER, "ie1"),
            ie.day(5, ["Galway – Donegal", "Galway – Donegal", "Galway – Donegal"], ["Le Connemara et l'abbaye de Kylemore, puis le Donegal sauvage.", "Connemara and Kylemore Abbey, then wild Donegal.", "Connemara y la abadía de Kylemore, y el salvaje Donegal."], "ie6"),
            ie.day(6, ["Donegal – Belfast", "Donegal – Belfast", "Donegal – Belfast"], ["La côte d'Antrim et la Chaussée des Géants, puis Belfast.", "The Antrim coast and the Giant's Causeway, then Belfast.", "La costa de Antrim y la Calzada del Gigante, y Belfast."], "ie7"),
          ]),
        ie.chapter(["L'Écosse", "Scotland", "Escocia"], ["Highlands, Skye et Édimbourg.", "The Highlands, Skye and Edinburgh.", "Highlands, Skye y Edimburgo."],
          ["ec5", "ec3", "tc2"],
          [
            ie.day(7, ["Belfast – Glasgow", "Belfast – Glasgow", "Belfast – Glasgow"], ["Ferry vers l'Écosse et Glasgow.", "Ferry to Scotland and Glasgow.", "Ferri a Escocia y Glasgow."], "tc1"),
            ie.day(8, ["Glasgow – Fort William", "Glasgow – Fort William", "Glasgow – Fort William"], ["Le Loch Lomond, la vallée de Glencoe et Fort William, au pied du Ben Nevis.", "Loch Lomond, Glencoe valley and Fort William, at the foot of Ben Nevis.", "El Loch Lomond, el valle de Glencoe y Fort William, al pie del Ben Nevis."], "ec3"),
            ie.day(9, ["Île de Skye – Inverness", "Isle of Skye – Inverness", "Isla de Skye – Inverness"], X_SKYE, "ec5"),
            ie.day(10, ["Inverness – Édimbourg", "Inverness – Edinburgh", "Inverness – Edimburgo"], ["Le Loch Ness et le château d'Urquhart, puis la traversée des Highlands jusqu'à Édimbourg.", "Loch Ness and Urquhart Castle, then across the Highlands to Edinburgh.", "El lago Ness y el castillo de Urquhart, y la travesía de las Highlands hasta Edimburgo."], "ec6"),
            ie.day(11, EDI, X_EDI, "tc2"),
            ie.day(12, T_HOME, home(EDI), "ie6"),
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
