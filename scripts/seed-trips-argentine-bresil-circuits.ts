// Argentina and Brazil — 15 journey-format trips: Argentina (8) and Brazil (7), both existing
// destinations. Near-identical supplier programmes (yearly editions, private versions, Iguazú,
// Easter Island, Amazon, Pantanal and beach extensions) are grouped on one page and described inside
// each trip. Prices are per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-argentine-bresil-circuits.ts
// Requires scripts/upload-images-arb-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "argentine-decouverte-de-l-argentine-salta-iguazu-10j": ["387258", "291339", "413858", "294638", "387198"],
  "argentine-du-tango-a-la-samba-buenos-aires-iguazu-rio-10j": ["410018", "298598", "410038", "143818"],
  "argentine-apercu-d-argentine-pampa-ushuaia-calafate-bariloche-13j": ["405158", "283221", "405159"],
  "argentine-au-coeur-de-la-patagonie-ushuaia-torres-del-paine-14j": ["400458", "129538", "401578", "129771"],
  "argentine-couleurs-andines-atacama-salta-buenos-aires-14j": ["405538", "405558"],
  "argentine-merveilles-d-argentine-patagonie-nord-ouest-15j": ["414038", "414058"],
  "argentine-impressions-d-argentine-ushuaia-jujuy-iguazu-16j": ["413498"],
  "argentine-decouverte-du-bout-du-monde-cap-horn-16j": ["386538", "406339"],
  "bresil-echappee-bresilienne-rio-buzios-9j": ["404458", "404459", "404460"],
  "bresil-apercu-du-bresil-rio-paraty-9j": ["402702", "407658", "402978", "407675", "282958"],
  "bresil-ola-brasil-privatif-rio-iguacu-salvador-10j": ["169522"],
  "bresil-merveilles-du-bresil-iguacu-rio-salvador-10j": ["403998", "409018", "409019"],
  "bresil-incontournables-du-bresil-salvador-paraty-iguacu-11j": ["258378", "246280"],
  "bresil-bresil-d-emotions-rio-lencois-jericoacoara-12j": ["400518"],
  "bresil-impressions-du-bresil-ouro-preto-iguacu-paraty-14j": ["401438", "82859", "401538", "401518", "401558", "82939"],
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
const BA: L3 = ["Buenos Aires", "Buenos Aires", "Buenos Aires"];
const RIO: L3 = ["Rio de Janeiro", "Rio de Janeiro", "Río de Janeiro"];
const SSA: L3 = ["Salvador de Bahia", "Salvador da Bahia", "Salvador de Bahía"];
const SCL: L3 = ["Santiago du Chili", "Santiago de Chile", "Santiago de Chile"];

// Argentina shared texts
const X_BA: L3 = ["Buenos Aires : la place de Mai et la Casa Rosada, le cimetière de la Recoleta, les maisons colorées de La Boca et le quartier de San Telmo, berceau du tango.", "Buenos Aires: Plaza de Mayo and the Casa Rosada, Recoleta cemetery, the colourful houses of La Boca and San Telmo, birthplace of the tango.", "Buenos Aires: la plaza de Mayo y la Casa Rosada, el cementerio de la Recoleta, las casas de colores de La Boca y el barrio de San Telmo, cuna del tango."];
const X_BA_FREE: L3 = ["Journée libre : en option une estancia et ses gauchos, une dégustation de vins ou un dîner-spectacle de tango.", "A free day: optionally an estancia and its gauchos, a wine tasting or a tango dinner show.", "Día libre: opcional una estancia y sus gauchos, una cata de vinos o una cena-espectáculo de tango."];
const X_USH: L3 = ["Ushuaïa, la ville du bout du monde, le parc national de la Terre de Feu et la navigation sur le canal Beagle, ses phares et ses colonies d'otaries.", "Ushuaia, the town at the end of the world, Tierra del Fuego national park and a sail on the Beagle Channel, its lighthouses and sea lion colonies.", "Ushuaia, la ciudad del fin del mundo, el parque nacional Tierra del Fuego y la navegación por el canal Beagle, sus faros y sus colonias de lobos marinos."];
const X_PM: L3 = ["Le glacier Perito Moreno, mur de glace de soixante mètres qui s'effondre dans le lac Argentino, vu depuis ses passerelles.", "The Perito Moreno glacier, a sixty-metre wall of ice crashing into Lake Argentino, seen from its walkways.", "El glaciar Perito Moreno, muro de hielo de sesenta metros que se desploma en el lago Argentino, visto desde sus pasarelas."];
const X_UPSALA: L3 = ["Croisière sur le lac Argentino jusqu'aux glaciers Upsala et Spegazzini et à leurs icebergs bleus.", "A cruise on Lake Argentino to the Upsala and Spegazzini glaciers and their blue icebergs.", "Crucero por el lago Argentino hasta los glaciares Upsala y Spegazzini y sus icebergs azules."];
const X_PAINE: L3 = ["Le parc de Torres del Paine, ses tours de granit, ses lacs turquoise et ses guanacos.", "Torres del Paine park, its granite towers, turquoise lakes and guanacos.", "El parque de Torres del Paine, sus torres de granito, sus lagos turquesa y sus guanacos."];
const X_IGU: L3 = ["Les chutes d'Iguazú, 275 cascades dans la jungle : côté argentin les passerelles jusqu'à la Garganta del Diablo, côté brésilien le grand panorama.", "The Iguazú Falls, 275 cascades in the jungle: on the Argentine side the walkways to the Devil's Throat, on the Brazilian side the great panorama.", "Las cataratas del Iguazú, 275 saltos en la selva: del lado argentino las pasarelas hasta la Garganta del Diablo, del lado brasileño el gran panorama."];
const X_HUMA: L3 = ["La Quebrada de Humahuaca classée par l'Unesco, la montagne aux Sept Couleurs de Purmamarca et les villages andins de Tilcara.", "The UNESCO-listed Quebrada de Humahuaca, the Hill of Seven Colours at Purmamarca and the Andean villages of Tilcara.", "La Quebrada de Humahuaca declarada por la Unesco, el cerro de los Siete Colores de Purmamarca y los pueblos andinos de Tilcara."];
const X_SALTA: L3 = ["Salta la Linda, ses églises coloniales et le téléphérique du mont San Bernardo.", "Salta la Linda, its colonial churches and the San Bernardo hill cable car.", "Salta la Linda, sus iglesias coloniales y el teleférico del cerro San Bernardo."];
const X_CAFA: L3 = ["La Quebrada de las Conchas et ses formations de grès rouge, puis Cafayate et ses vignobles de torrontés.", "The Quebrada de las Conchas and its red sandstone formations, then Cafayate and its Torrontés vineyards.", "La Quebrada de las Conchas y sus formaciones de arenisca roja, y Cafayate y sus viñedos de torrontés."];
const X_SALINAS: L3 = ["Les Salinas Grandes, désert de sel blanc à 3 450 mètres, par la route en lacets de la Cuesta de Lipán.", "The Salinas Grandes, a white salt desert at 3,450 metres, by the winding Cuesta de Lipán road.", "Las Salinas Grandes, desierto de sal blanca a 3.450 metros, por la carretera en zigzag de la Cuesta de Lipán."];
// Brazil shared texts
const X_RIO: L3 = ["Rio de Janeiro : le Christ Rédempteur sur le Corcovado, le Pain de Sucre en téléphérique, les plages de Copacabana et d'Ipanema.", "Rio de Janeiro: Christ the Redeemer on Corcovado, Sugarloaf Mountain by cable car, the beaches of Copacabana and Ipanema.", "Río de Janeiro: el Cristo Redentor en el Corcovado, el Pan de Azúcar en teleférico, las playas de Copacabana e Ipanema."];
const X_RIO2: L3 = ["Le centre historique de Rio, l'escalier Selarón, le quartier bohème de Santa Teresa et son tramway, la forêt de Tijuca et le jardin botanique.", "Rio's historic centre, the Selarón steps, the bohemian Santa Teresa district and its tram, the Tijuca forest and the botanical garden.", "El centro histórico de Río, la escalera Selarón, el barrio bohemio de Santa Teresa y su tranvía, el bosque de Tijuca y el jardín botánico."];
const X_PARATY: L3 = ["Paraty, ville coloniale aux rues pavées inondées par la marée, entre la forêt atlantique et les îles de la baie, en goélette.", "Paraty, a colonial town with cobbled streets flooded by the tide, between the Atlantic forest and the islands of the bay, by schooner.", "Paraty, ciudad colonial de calles empedradas inundadas por la marea, entre la selva atlántica y las islas de la bahía, en goleta."];
const X_SSA: L3 = ["Salvador de Bahia, première capitale du Brésil : le Pelourinho et ses façades colorées, ses églises baroques dorées et la culture afro-brésilienne, la capoeira et le candomblé.", "Salvador da Bahia, Brazil's first capital: the Pelourinho and its colourful façades, its gilded baroque churches and Afro-Brazilian culture, capoeira and candomblé.", "Salvador de Bahía, primera capital de Brasil: el Pelourinho y sus fachadas de colores, sus iglesias barrocas doradas y la cultura afrobrasileña, la capoeira y el candomblé."];
const X_IGU_BR: L3 = ["Les chutes d'Iguaçu côté brésilien et leur grand panorama, puis côté argentin les passerelles de la Garganta del Diablo.", "The Iguaçu Falls on the Brazilian side and their great panorama, then on the Argentine side the walkways of the Devil's Throat.", "Las cataratas de Iguazú del lado brasileño y su gran panorama, y del lado argentino las pasarelas de la Garganta del Diablo."];
const X_AMAZ: L3 = ["La forêt amazonienne en lodge près de Manaus : la rencontre des eaux noires du rio Negro et brunes de l'Amazone, les dauphins roses et une nuit d'observation des caïmans.", "The Amazon forest from a lodge near Manaus: the meeting of the black waters of the Rio Negro and the brown waters of the Amazon, pink dolphins and a night caiman-spotting.", "La selva amazónica en un lodge cerca de Manaos: el encuentro de las aguas negras del río Negro y pardas del Amazonas, los delfines rosados y una noche de observación de caimanes."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const ar = circuitBuilders({ destinationSlug: "argentine", imagePrefix: "arb", season: { label: ["Octobre à avril", "October to April", "Octubre a abril"], months: "october,november,december,january,february,march,april" } });
  const br = circuitBuilders({ destinationSlug: "bresil", imagePrefix: "arb", season: { label: ["Avril à novembre", "April to November", "Abril a noviembre"], months: "april,may,june,july,august,september,october,november" } });
  const INC = (n: number, max: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts aéroport,${n} nuits en hôtels 3* et 4*,Vols intérieurs,Visites et entrées du programme,Guide francophone,Groupe de ${max} personnes au plus${extra}`,
    `Flights from France,Airport transfers,${n} nights in 3* and 4* hotels,Domestic flights,Visits and entry fees in the programme,French-speaking guide,Group of ${max} at most${extra}`,
    `Vuelos desde Francia,Traslados al aeropuerto,${n} noches en hoteles de 3* y 4*,Vuelos interiores,Visitas y entradas del programa,Guía francófono,Grupo de ${max} personas como máximo${extra}`,
  ];

  const journeyTrips = [
    // ═════════════ ARGENTINE ═════════════
    ar.trip({
      slug: "argentine-decouverte-de-l-argentine-salta-iguazu-10j",
      name: ["Découverte de l'Argentine : Buenos Aires, Salta, Purmamarca et les chutes d'Iguazú", "Discovering Argentina: Buenos Aires, Salta, Purmamarca and the Iguazú Falls", "Descubrimiento de Argentina: Buenos Aires, Salta, Purmamarca y las cataratas del Iguazú"],
      tagline: ["La capitale du tango, les montagnes colorées du Nord-Ouest et les grandes chutes", "The capital of tango, the colourful mountains of the North-West and the great falls", "La capital del tango, las montañas de colores del Noroeste y las grandes cataratas"],
      description: [
        "L'Argentine en groupe de 16 personnes au plus : Buenos Aires, Salta et la Quebrada de Humahuaca avec une nuit à Purmamarca, les chutes d'Iguazú et un dîner-spectacle de tango en option au retour. En privatif à partir de 5 054 €, ou avec un pré-tour à Ushuaïa (12 jours) à partir de 5 281 € par personne.",
        "Argentina in a group of 16 at most: Buenos Aires, Salta and the Quebrada de Humahuaca with a night in Purmamarca, the Iguazú Falls and an optional tango dinner show on the way back. As a private tour from €5,054, or with a pre-tour in Ushuaia (12 days) from €5,281 per person.",
        "Argentina en grupo de 16 personas como máximo: Buenos Aires, Salta y la Quebrada de Humahuaca con una noche en Purmamarca, las cataratas del Iguazú y una cena-espectáculo de tango opcional al regreso. En privado desde 5.054 €, o con un pre-tour en Ushuaia (12 días) desde 5.281 € por persona.",
      ],
      includes: INC(8, 16),
      price: 4089, nights: 8, departureFrom: "Nice", image: "da5",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -48000,
      chapters: [
        ar.chapter(["Buenos Aires et le Nord-Ouest", "Buenos Aires and the North-West", "Buenos Aires y el Noroeste"], ["Tango et montagnes colorées.", "Tango and colourful mountains.", "Tango y montañas de colores."],
          ["da1", "da2", "da3", "da4", "da5"],
          [
            ar.day(1, ...arr(BA), "da2"),
            ar.day(2, BA, X_BA, "da1"),
            ar.day(3, ["Buenos Aires – Salta", "Buenos Aires – Salta", "Buenos Aires – Salta"], join(["Vol vers Salta.", "Flight to Salta.", "Vuelo a Salta."], X_SALTA), "da3"),
            ar.day(4, ["Salta – Purmamarca", "Salta – Purmamarca", "Salta – Purmamarca"], X_HUMA, "da5"),
            ar.day(5, ["Purmamarca – Salta", "Purmamarca – Salta", "Purmamarca – Salta"], join(X_SALINAS, ["Le soir, dîner et peña folklorique en option.", "In the evening, an optional dinner and folk peña.", "Por la noche, cena y peña folclórica opcional."]), "da4"),
          ]),
        ar.chapter(["Iguazú", "Iguazú", "Iguazú"], ["Les grandes chutes.", "The great falls.", "Las grandes cataratas."],
          ["da6", "da7", "da8"],
          [
            ar.day(6, ["Salta – Puerto Iguazú", "Salta – Puerto Iguazú", "Salta – Puerto Iguazú"], ["Vol vers Puerto Iguazú, en pleine forêt subtropicale.", "Flight to Puerto Iguazú, in the subtropical forest.", "Vuelo a Puerto Iguazú, en plena selva subtropical."], "da6"),
            ar.day(7, ["Chutes d'Iguazú", "Iguazú Falls", "Cataratas del Iguazú"], join(X_IGU, ["En option, la grande aventure nautique sous les chutes.", "As an option, the great boat adventure under the falls.", "Opcional, la gran aventura náutica bajo las cataratas."]), "da7"),
            ar.day(8, ["Iguazú – Buenos Aires", "Iguazú – Buenos Aires", "Iguazú – Buenos Aires"], ["Vol vers Buenos Aires ; le soir, dîner-spectacle de tango en option.", "Flight to Buenos Aires; in the evening, an optional tango dinner show.", "Vuelo a Buenos Aires; por la noche, cena-espectáculo de tango opcional."], "da8"),
            ar.day(9, ...dep(BA), "da2"), ar.day(10, T_HOME, HOME, "da5"),
          ]),
      ],
    }),

    ar.trip({
      slug: "argentine-du-tango-a-la-samba-buenos-aires-iguazu-rio-10j",
      name: ["Du tango à la samba : Buenos Aires, les chutes d'Iguazú et Rio de Janeiro", "From Tango to Samba: Buenos Aires, the Iguazú Falls and Rio de Janeiro", "Del tango a la samba: Buenos Aires, las cataratas del Iguazú y Río de Janeiro"],
      tagline: ["Deux pays et trois légendes d'Amérique du Sud en dix jours", "Two countries and three South American legends in ten days", "Dos países y tres leyendas de Sudamérica en diez días"],
      description: [
        "Un combiné Argentine–Brésil en groupe de 16 personnes au plus : trois jours à Buenos Aires, les chutes d'Iguazú des deux côtés de la frontière, puis trois jours à Rio de Janeiro. Nombreuses options : estancia, dégustation de vins, street art, aventure nautique sous les chutes, carnaval de Rio. Aussi en privatif (De Buenos Aires à Rio) à partir de 3 729 € par personne.",
        "An Argentina–Brazil combination in a group of 16 at most: three days in Buenos Aires, the Iguazú Falls on both sides of the border, then three days in Rio de Janeiro. Many options: an estancia, wine tasting, street art, a boat adventure under the falls, the Rio carnival. Also as a private tour (From Buenos Aires to Rio) from €3,729 per person.",
        "Un combinado Argentina–Brasil en grupo de 16 personas como máximo: tres días en Buenos Aires, las cataratas del Iguazú a ambos lados de la frontera, y tres días en Río de Janeiro. Muchas opciones: estancia, cata de vinos, arte urbano, aventura náutica bajo las cataratas, carnaval de Río. También en privado (De Buenos Aires a Río) desde 3.729 € por persona.",
      ],
      includes: INC(8, 16),
      price: 3627, nights: 8, departureFrom: "Bruxelles", image: "ts7",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -47999,
      chapters: [
        ar.chapter(["Buenos Aires", "Buenos Aires", "Buenos Aires"], ["La capitale du tango.", "The capital of tango.", "La capital del tango."],
          ["ts2", "ts3", "ts5"],
          [
            ar.day(1, ...arr(BA), "ts5"),
            ar.day(2, BA, join(X_BA, ["Le soir, dîner-spectacle de tango en option.", "In the evening, an optional tango dinner show.", "Por la noche, cena-espectáculo de tango opcional."]), "ts2"),
            ar.day(3, BA, X_BA_FREE, "ts3"),
          ]),
        ar.chapter(["Iguazú et Rio", "Iguazú and Rio", "Iguazú y Río"], ["Les chutes et la cidade maravilhosa.", "The falls and the cidade maravilhosa.", "Las cataratas y la cidade maravilhosa."],
          ["ts6", "ts8", "ts7", "ts4", "ts1"],
          [
            ar.day(4, ["Buenos Aires – Iguazú", "Buenos Aires – Iguazú", "Buenos Aires – Iguazú"], ["Vol vers Puerto Iguazú.", "Flight to Puerto Iguazú.", "Vuelo a Puerto Iguazú."], "ts8"),
            ar.day(5, ["Iguazú, côté argentin", "Iguazú, Argentine side", "Iguazú, lado argentino"], ["Les passerelles du côté argentin jusqu'à la Garganta del Diablo, et l'aventure nautique en option.", "The walkways on the Argentine side to the Devil's Throat, and the boat adventure as an option.", "Las pasarelas del lado argentino hasta la Garganta del Diablo, y la aventura náutica opcional."], "ts6"),
            ar.day(6, ["Iguaçu, côté brésilien – Rio", "Iguaçu, Brazilian side – Rio", "Iguazú, lado brasileño – Río"], ["Le grand panorama du côté brésilien, puis vol vers Rio de Janeiro.", "The great panorama on the Brazilian side, then a flight to Rio de Janeiro.", "El gran panorama del lado brasileño, y vuelo a Río de Janeiro."], "ts8"),
            ar.day(7, RIO, X_RIO, "ts7"),
            ar.day(8, RIO, ["En option, le centre historique, le carnaval selon la saison ou un dîner-spectacle.", "As options, the historic centre, the carnival in season or a dinner show.", "Opcional, el centro histórico, el carnaval según la temporada o una cena-espectáculo."], "ts1"),
            ar.day(9, ...dep(RIO), "ts4"), ar.day(10, T_HOME, HOME, "ts7"),
          ]),
      ],
    }),

    ar.trip({
      slug: "argentine-apercu-d-argentine-pampa-ushuaia-calafate-bariloche-13j",
      name: ["Aperçu d'Argentine : la Pampa, Ushuaïa, El Calafate, le Perito Moreno et Bariloche", "A Taste of Argentina: the Pampas, Ushuaia, El Calafate, Perito Moreno and Bariloche", "Pinceladas de Argentina: la Pampa, Ushuaia, El Calafate, el Perito Moreno y Bariloche"],
      tagline: ["Des gauchos de la Pampa aux glaciers de Patagonie et aux lacs andins", "From the gauchos of the Pampas to the glaciers of Patagonia and the Andean lakes", "De los gauchos de la Pampa a los glaciares de la Patagonia y los lagos andinos"],
      description: [
        "La Patagonie argentine en groupe de 18 personnes au plus : Buenos Aires et une journée dans une estancia de la Pampa, Ushuaïa et le canal Beagle, El Calafate, la croisière vers les glaciers Upsala et Spegazzini, le Perito Moreno, puis deux jours à Bariloche et la région des lacs. Avec les chutes d'Iguazú (15 jours) à partir de 6 771 € par personne.",
        "Argentine Patagonia in a group of 18 at most: Buenos Aires and a day at an estancia in the Pampas, Ushuaia and the Beagle Channel, El Calafate, the cruise to the Upsala and Spegazzini glaciers, Perito Moreno, then two days in Bariloche and the lake district. With the Iguazú Falls (15 days) from €6,771 per person.",
        "La Patagonia argentina en grupo de 18 personas como máximo: Buenos Aires y un día en una estancia de la Pampa, Ushuaia y el canal Beagle, El Calafate, el crucero a los glaciares Upsala y Spegazzini, el Perito Moreno, y dos días en Bariloche y la región de los lagos. Con las cataratas del Iguazú (15 días) desde 6.771 € por persona.",
      ],
      includes: INC(10, 18),
      price: 5487, nights: 10, departureFrom: "Bâle", image: "aa7",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -47998,
      chapters: [
        ar.chapter(["Buenos Aires et la Pampa", "Buenos Aires and the Pampas", "Buenos Aires y la Pampa"], ["Ville et gauchos.", "City and gauchos.", "Ciudad y gauchos."],
          ["aa2", "aa3", "aa1", "aa4"],
          [
            ar.day(1, ...arr(BA), "aa3"),
            ar.day(2, BA, X_BA, "aa2"),
            ar.day(3, ["La Pampa", "The Pampas", "La Pampa"], ["Une journée dans une estancia de la Pampa : démonstration des gauchos, asado et promenade à cheval.", "A day at an estancia in the Pampas: a gaucho show, an asado and a horse ride.", "Un día en una estancia de la Pampa: demostración de gauchos, asado y paseo a caballo."], "aa1"),
          ]),
        ar.chapter(["La Patagonie", "Patagonia", "La Patagonia"], ["Ushuaïa et les glaciers.", "Ushuaia and the glaciers.", "Ushuaia y los glaciares."],
          ["aa5", "aa6", "aa7", "aa8"],
          [
            ar.day(4, ["Buenos Aires – Ushuaïa", "Buenos Aires – Ushuaia", "Buenos Aires – Ushuaia"], ["Vol vers Ushuaïa, la ville la plus australe du monde.", "Flight to Ushuaia, the southernmost city in the world.", "Vuelo a Ushuaia, la ciudad más austral del mundo."], "aa6"),
            ar.day(5, ["Ushuaïa", "Ushuaia", "Ushuaia"], X_USH, "aa5"),
            ar.day(6, ["Ushuaïa – El Calafate", "Ushuaia – El Calafate", "Ushuaia – El Calafate"], ["Vol vers El Calafate, au bord du lac Argentino.", "Flight to El Calafate, on Lake Argentino.", "Vuelo a El Calafate, a orillas del lago Argentino."], "aa4"),
            ar.day(7, ["Glaciers Upsala et Spegazzini", "The Upsala and Spegazzini glaciers", "Glaciares Upsala y Spegazzini"], X_UPSALA, "aa8"),
            ar.day(8, ["Perito Moreno", "Perito Moreno", "Perito Moreno"], X_PM, "aa7"),
          ]),
        ar.chapter(["Bariloche", "Bariloche", "Bariloche"], ["La Suisse argentine.", "Argentina's Switzerland.", "La Suiza argentina."],
          ["ia6"],
          [
            ar.day(9, ["El Calafate – Bariloche", "El Calafate – Bariloche", "El Calafate – Bariloche"], ["Vol vers San Carlos de Bariloche, au bord du lac Nahuel Huapi.", "Flight to San Carlos de Bariloche, on Lake Nahuel Huapi.", "Vuelo a San Carlos de Bariloche, a orillas del lago Nahuel Huapi."], "ia6"),
            ar.day(10, ["Bariloche", "Bariloche", "Bariloche"], ["Le Circuito Chico, ses lacs, ses forêts et le mont Campanario, puis le centre alpin de Bariloche et ses chocolatiers.", "The Circuito Chico, its lakes, forests and Cerro Campanario, then Bariloche's alpine centre and its chocolate makers.", "El Circuito Chico, sus lagos, sus bosques y el cerro Campanario, y el centro alpino de Bariloche y sus chocolaterías."], "ia6"),
            ar.day(11, ["Bariloche – Buenos Aires", "Bariloche – Buenos Aires", "Bariloche – Buenos Aires"], ["Vol vers Buenos Aires.", "Flight to Buenos Aires.", "Vuelo a Buenos Aires."], "aa3"),
            ar.day(12, ...dep(BA), "aa2"), ar.day(13, T_HOME, HOME, "aa7"),
          ]),
      ],
    }),

    ar.trip({
      slug: "argentine-au-coeur-de-la-patagonie-ushuaia-torres-del-paine-14j",
      name: ["Au cœur de la Patagonie : Ushuaïa, El Calafate, Torres del Paine et Valparaíso", "In the Heart of Patagonia: Ushuaia, El Calafate, Torres del Paine and Valparaíso", "En el corazón de la Patagonia: Ushuaia, El Calafate, Torres del Paine y Valparaíso"],
      tagline: ["La Patagonie des deux côtés des Andes, de l'Argentine au Chili", "Patagonia on both sides of the Andes, from Argentina to Chile", "La Patagonia a ambos lados de los Andes, de Argentina a Chile"],
      description: [
        "La Patagonie argentine et chilienne en groupe de 16 personnes au plus : Buenos Aires, Ushuaïa et le canal Beagle, trois nuits à El Calafate avec le Perito Moreno, Puerto Natales et Torres del Paine au Chili, Punta Arenas, Santiago et Valparaíso. Prolongé à l'île de Pâques (18 jours) à partir de 9 041 € par personne.",
        "Argentine and Chilean Patagonia in a group of 16 at most: Buenos Aires, Ushuaia and the Beagle Channel, three nights in El Calafate with Perito Moreno, Puerto Natales and Torres del Paine in Chile, Punta Arenas, Santiago and Valparaíso. Extended to Easter Island (18 days) from €9,041 per person.",
        "La Patagonia argentina y chilena en grupo de 16 personas como máximo: Buenos Aires, Ushuaia y el canal Beagle, tres noches en El Calafate con el Perito Moreno, Puerto Natales y Torres del Paine en Chile, Punta Arenas, Santiago y Valparaíso. Prolongado a la isla de Pascua (18 días) desde 9.041 € por persona.",
      ],
      includes: INC(12, 16),
      price: 5953, nights: 12, departureFrom: "Francfort", image: "cp1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -47997,
      chapters: [
        ar.chapter(["Buenos Aires et Ushuaïa", "Buenos Aires and Ushuaia", "Buenos Aires y Ushuaia"], ["La capitale et le bout du monde.", "The capital and the end of the world.", "La capital y el fin del mundo."],
          ["cp8", "cp4", "cp2"],
          [
            ar.day(1, ...arr(BA), "cp8"),
            ar.day(2, BA, X_BA, "cp8"),
            ar.day(3, ["Buenos Aires – Ushuaïa", "Buenos Aires – Ushuaia", "Buenos Aires – Ushuaia"], ["Vol vers Ushuaïa.", "Flight to Ushuaia.", "Vuelo a Ushuaia."], "cp4"),
            ar.day(4, ["Ushuaïa", "Ushuaia", "Ushuaia"], X_USH, "cp2"),
          ]),
        ar.chapter(["El Calafate", "El Calafate", "El Calafate"], ["Les glaciers du lac Argentino.", "The glaciers of Lake Argentino.", "Los glaciares del lago Argentino."],
          ["cp6", "cp3"],
          [
            ar.day(5, ["Ushuaïa – El Calafate", "Ushuaia – El Calafate", "Ushuaia – El Calafate"], ["Vol vers El Calafate.", "Flight to El Calafate.", "Vuelo a El Calafate."], "cp3"),
            ar.day(6, ["Perito Moreno", "Perito Moreno", "Perito Moreno"], X_PM, "cp6"),
            ar.day(7, ["El Calafate", "El Calafate", "El Calafate"], X_UPSALA, "aa8"),
          ]),
        ar.chapter(["La Patagonie chilienne et Santiago", "Chilean Patagonia and Santiago", "La Patagonia chilena y Santiago"], ["Torres del Paine et Valparaíso.", "Torres del Paine and Valparaíso.", "Torres del Paine y Valparaíso."],
          ["cp1", "cp7", "ca5"],
          [
            ar.day(8, ["El Calafate – Puerto Natales", "El Calafate – Puerto Natales", "El Calafate – Puerto Natales"], ["Passage au Chili par la steppe patagonienne jusqu'à Puerto Natales.", "Crossing into Chile over the Patagonian steppe to Puerto Natales.", "Paso a Chile por la estepa patagónica hasta Puerto Natales."], "cp7"),
            ar.day(9, ["Torres del Paine", "Torres del Paine", "Torres del Paine"], X_PAINE, "cp1"),
            ar.day(10, ["Puerto Natales – Punta Arenas", "Puerto Natales – Punta Arenas", "Puerto Natales – Punta Arenas"], ["Route vers Punta Arenas, au bord du détroit de Magellan.", "Drive to Punta Arenas, on the Strait of Magellan.", "Carretera hacia Punta Arenas, a orillas del estrecho de Magallanes."], "cp7"),
            ar.day(11, ["Punta Arenas – Santiago", "Punta Arenas – Santiago", "Punta Arenas – Santiago"], ["Vol vers Santiago du Chili.", "Flight to Santiago de Chile.", "Vuelo a Santiago de Chile."], "ca4"),
            ar.day(12, ["Valparaíso", "Valparaíso", "Valparaíso"], ["Valparaíso, ses collines, ses funiculaires et ses maisons colorées.", "Valparaíso, its hills, funiculars and colourful houses.", "Valparaíso, sus cerros, sus funiculares y sus casas de colores."], "ca5"),
            ar.day(13, ...dep(SCL), "ca4"), ar.day(14, T_HOME, HOME, "cp1"),
          ]),
      ],
    }),

    ar.trip({
      slug: "argentine-couleurs-andines-atacama-salta-buenos-aires-14j",
      name: ["Couleurs andines : Santiago, le désert d'Atacama, les Salinas Grandes, Salta et Buenos Aires", "Andean Colours: Santiago, the Atacama Desert, the Salinas Grandes, Salta and Buenos Aires", "Colores andinos: Santiago, el desierto de Atacama, las Salinas Grandes, Salta y Buenos Aires"],
      tagline: ["La traversée des Andes du Chili à l'Argentine, à douze voyageurs au plus", "Crossing the Andes from Chile to Argentina, with twelve travellers at most", "La travesía de los Andes de Chile a Argentina, con doce viajeros como máximo"],
      description: [
        "Un combiné Chili–Argentine en petit groupe : Santiago et Valparaíso, trois jours à San Pedro de Atacama avec la vallée de la Lune, les lagunes et les geysers du Tatio, la traversée des Andes jusqu'aux Salinas Grandes, Humahuaca, Purmamarca, Salta et Cafayate, puis trois jours à Buenos Aires. Avec les chutes d'Iguazú (16 jours) à partir de 7 068 € par personne.",
        "A Chile–Argentina combination in a small group: Santiago and Valparaíso, three days in San Pedro de Atacama with the Valley of the Moon, the lagoons and the Tatio geysers, the crossing of the Andes to the Salinas Grandes, Humahuaca, Purmamarca, Salta and Cafayate, then three days in Buenos Aires. With the Iguazú Falls (16 days) from €7,068 per person.",
        "Un combinado Chile–Argentina en grupo reducido: Santiago y Valparaíso, tres días en San Pedro de Atacama con el valle de la Luna, las lagunas y los géiseres del Tatio, la travesía de los Andes hasta las Salinas Grandes, Humahuaca, Purmamarca, Salta y Cafayate, y tres días en Buenos Aires. Con las cataratas del Iguazú (16 días) desde 7.068 € por persona.",
      ],
      includes: INC(11, 12),
      price: 5862, nights: 11, departureFrom: "Paris", image: "ca1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -47996,
      chapters: [
        ar.chapter(["Le Chili et l'Atacama", "Chile and the Atacama", "Chile y el Atacama"], ["Santiago, Valparaíso et le désert.", "Santiago, Valparaíso and the desert.", "Santiago, Valparaíso y el desierto."],
          ["ca4", "ca5", "ca1", "ca6", "ca7"],
          [
            ar.day(1, ...arr(SCL), "ca4"),
            ar.day(2, ["Santiago", "Santiago", "Santiago"], ["Santiago, la place d'Armes, le palais de la Moneda et le mont San Cristóbal.", "Santiago, the Plaza de Armas, La Moneda palace and San Cristóbal hill.", "Santiago, la plaza de Armas, el palacio de La Moneda y el cerro San Cristóbal."], "ca4"),
            ar.day(3, ["Valparaíso", "Valparaíso", "Valparaíso"], ["Valparaíso, ses collines, ses funiculaires et ses fresques.", "Valparaíso, its hills, funiculars and murals.", "Valparaíso, sus cerros, sus funiculares y sus murales."], "ca5"),
            ar.day(4, ["Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama"], ["Vol vers Calama, San Pedro de Atacama et la vallée de la Lune au coucher du soleil.", "Flight to Calama, San Pedro de Atacama and the Valley of the Moon at sunset.", "Vuelo a Calama, San Pedro de Atacama y el valle de la Luna al atardecer."], "ca1"),
            ar.day(5, ["Lagunes altiplaniques", "The altiplano lagoons", "Lagunas altiplánicas"], ["Les lagunes Miscanti et Miñiques à plus de 4 000 mètres.", "The Miscanti and Miñiques lagoons above 4,000 metres.", "Las lagunas Miscanti y Miñiques a más de 4.000 metros."], "ca6"),
            ar.day(6, ["Geysers du Tatio", "The Tatio geysers", "Géiseres del Tatio"], ["Les geysers du Tatio à l'aube et les lagunes du salar d'Atacama.", "The Tatio geysers at dawn and the lagoons of the Atacama salt flat.", "Los géiseres del Tatio al amanecer y las lagunas del salar de Atacama."], "ca7"),
          ]),
        ar.chapter(["Le Nord-Ouest argentin", "Argentina's North-West", "El Noroeste argentino"], ["Sel, montagnes colorées et vignobles.", "Salt, colourful mountains and vineyards.", "Sal, montañas de colores y viñedos."],
          ["ca8", "da5", "da4", "da3"],
          [
            ar.day(7, ["Paso de Jama – Salinas Grandes – Huacalera", "Paso de Jama – Salinas Grandes – Huacalera", "Paso de Jama – Salinas Grandes – Huacalera"], join(["Traversée des Andes par le col de Jama jusqu'en Argentine.", "Crossing the Andes over the Jama pass into Argentina.", "Travesía de los Andes por el paso de Jama hasta Argentina."], X_SALINAS), "ca8"),
            ar.day(8, ["Humahuaca – Purmamarca – Salta", "Humahuaca – Purmamarca – Salta", "Humahuaca – Purmamarca – Salta"], X_HUMA, "da5"),
            ar.day(9, ["Cafayate", "Cafayate", "Cafayate"], X_CAFA, "da4"),
          ]),
        ar.chapter(["Buenos Aires", "Buenos Aires", "Buenos Aires"], ["La capitale du tango.", "The capital of tango.", "La capital del tango."],
          ["ca3", "ts2"],
          [
            ar.day(10, ["Salta – Buenos Aires", "Salta – Buenos Aires", "Salta – Buenos Aires"], ["Vol vers Buenos Aires.", "Flight to Buenos Aires.", "Vuelo a Buenos Aires."], "ts3"),
            ar.day(11, BA, X_BA, "ts2"),
            ar.day(12, BA, X_BA_FREE, "ca3"),
            ar.day(13, ...dep(BA), "ts5"), ar.day(14, T_HOME, HOME, "ca1"),
          ]),
      ],
    }),

    ar.trip({
      slug: "argentine-merveilles-d-argentine-patagonie-nord-ouest-15j",
      name: ["Merveilles d'Argentine : Ushuaïa, El Calafate, Humahuaca, Cachi et Cafayate", "Wonders of Argentina: Ushuaia, El Calafate, Humahuaca, Cachi and Cafayate", "Maravillas de Argentina: Ushuaia, El Calafate, Humahuaca, Cachi y Cafayate"],
      tagline: ["Les glaciers du sud et les villages andins du nord, en groupe de 16 au plus", "The southern glaciers and the Andean villages of the north, in a group of 16 at most", "Los glaciares del sur y los pueblos andinos del norte, en grupo de 16 como máximo"],
      description: [
        "Les deux visages de l'Argentine : Buenos Aires, Ushuaïa et le canal Beagle, El Calafate, le Perito Moreno et le lac Argentino, puis le Nord-Ouest : Tilcara, Humahuaca, la communauté d'Ocumazo, Cachi et la route des vins jusqu'à Cafayate. Avec les chutes d'Iguazú (17 jours) à partir de 8 922 € par personne.",
        "The two faces of Argentina: Buenos Aires, Ushuaia and the Beagle Channel, El Calafate, Perito Moreno and Lake Argentino, then the North-West: Tilcara, Humahuaca, the Ocumazo community, Cachi and the wine road to Cafayate. With the Iguazú Falls (17 days) from €8,922 per person.",
        "Las dos caras de Argentina: Buenos Aires, Ushuaia y el canal Beagle, El Calafate, el Perito Moreno y el lago Argentino, y el Noroeste: Tilcara, Humahuaca, la comunidad de Ocumazo, Cachi y la ruta del vino hasta Cafayate. Con las cataratas del Iguazú (17 días) desde 8.922 € por persona.",
      ],
      includes: INC(12, 16),
      price: 7334, nights: 12, departureFrom: "Francfort", image: "ia1",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -47995,
      chapters: [
        ar.chapter(["Buenos Aires et la Patagonie", "Buenos Aires and Patagonia", "Buenos Aires y la Patagonia"], ["La ville, Ushuaïa et les glaciers.", "The city, Ushuaia and the glaciers.", "La ciudad, Ushuaia y los glaciares."],
          ["ia5", "ia3", "ia4", "ia1"],
          [
            ar.day(1, ...arr(BA), "ia5"),
            ar.day(2, BA, X_BA, "ia5"),
            ar.day(3, ["Buenos Aires – Ushuaïa", "Buenos Aires – Ushuaia", "Buenos Aires – Ushuaia"], ["Vol vers Ushuaïa.", "Flight to Ushuaia.", "Vuelo a Ushuaia."], "ia3"),
            ar.day(4, ["Ushuaïa", "Ushuaia", "Ushuaia"], X_USH, "ia4"),
            ar.day(5, ["Ushuaïa – El Calafate", "Ushuaia – El Calafate", "Ushuaia – El Calafate"], ["Vol vers El Calafate.", "Flight to El Calafate.", "Vuelo a El Calafate."], "aa4"),
            ar.day(6, ["Perito Moreno", "Perito Moreno", "Perito Moreno"], X_PM, "ia1"),
            ar.day(7, ["Lac Argentino", "Lake Argentino", "Lago Argentino"], X_UPSALA, "aa8"),
          ]),
        ar.chapter(["Le Nord-Ouest", "The North-West", "El Noroeste"], ["Quebradas, villages et vignobles.", "Ravines, villages and vineyards.", "Quebradas, pueblos y viñedos."],
          ["da5", "da4", "da3"],
          [
            ar.day(8, ["El Calafate – Salta", "El Calafate – Salta", "El Calafate – Salta"], ["Vols via Buenos Aires vers Salta.", "Flights via Buenos Aires to Salta.", "Vuelos vía Buenos Aires a Salta."], "da3"),
            ar.day(9, ["Tilcara – Humahuaca – Huacalera", "Tilcara – Humahuaca – Huacalera", "Tilcara – Humahuaca – Huacalera"], X_HUMA, "da5"),
            ar.day(10, ["Ocumazo – Salta", "Ocumazo – Salta", "Ocumazo – Salta"], ["Rencontre avec la communauté andine d'Ocumazo, puis retour à Salta.", "A meeting with the Andean community of Ocumazo, then back to Salta.", "Encuentro con la comunidad andina de Ocumazo, y regreso a Salta."], "da4"),
            ar.day(11, ["Salta – Cachi", "Salta – Cachi", "Salta – Cachi"], ["La Cuesta del Obispo, le parc des Cardones et ses cactus géants, puis le village blanc de Cachi.", "The Cuesta del Obispo, Los Cardones park and its giant cacti, then the white village of Cachi.", "La Cuesta del Obispo, el parque de Los Cardones y sus cactus gigantes, y el pueblo blanco de Cachi."], "da4"),
            ar.day(12, ["Cachi – Cafayate – Salta", "Cachi – Cafayate – Salta", "Cachi – Cafayate – Salta"], X_CAFA, "da5"),
            ar.day(13, ["Salta – Buenos Aires", "Salta – Buenos Aires", "Salta – Buenos Aires"], ["Vol vers Buenos Aires.", "Flight to Buenos Aires.", "Vuelo a Buenos Aires."], "ia5"),
            ar.day(14, ...dep(BA), "ia5"), ar.day(15, T_HOME, HOME, "ia1"),
          ]),
      ],
    }),

    ar.trip({
      slug: "argentine-impressions-d-argentine-ushuaia-jujuy-iguazu-16j",
      name: ["Impressions d'Argentine : Ushuaïa, El Calafate, Jujuy, Salta et les chutes d'Iguazú", "Impressions of Argentina: Ushuaia, El Calafate, Jujuy, Salta and the Iguazú Falls", "Impresiones de Argentina: Ushuaia, El Calafate, Jujuy, Salta y las cataratas del Iguazú"],
      tagline: ["Toute l'Argentine en seize jours, du sud au nord", "All of Argentina in sixteen days, from south to north", "Toda Argentina en dieciséis días, de sur a norte"],
      description: [
        "Le grand tour de l'Argentine en groupe de 18 personnes au plus : trois jours à Buenos Aires, Ushuaïa, El Calafate, la croisière des glaciers et le Perito Moreno, Jujuy, la Quebrada de Humahuaca, les Salinas Grandes, Salta et Cafayate, puis les chutes d'Iguazú des deux côtés de la frontière.",
        "The grand tour of Argentina in a group of 18 at most: three days in Buenos Aires, Ushuaia, El Calafate, the glacier cruise and Perito Moreno, Jujuy, the Quebrada de Humahuaca, the Salinas Grandes, Salta and Cafayate, then the Iguazú Falls on both sides of the border.",
        "La gran vuelta de Argentina en grupo de 18 personas como máximo: tres días en Buenos Aires, Ushuaia, El Calafate, el crucero de los glaciares y el Perito Moreno, Jujuy, la Quebrada de Humahuaca, las Salinas Grandes, Salta y Cafayate, y las cataratas del Iguazú a ambos lados de la frontera.",
      ],
      includes: INC(13, 18),
      price: 6244, nights: 13, departureFrom: "Francfort", image: "ia2",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -47994,
      chapters: [
        ar.chapter(["Buenos Aires et la Patagonie", "Buenos Aires and Patagonia", "Buenos Aires y la Patagonia"], ["La ville, Ushuaïa et les glaciers.", "The city, Ushuaia and the glaciers.", "La ciudad, Ushuaia y los glaciares."],
          ["ia5", "ia3", "ia4", "ia1"],
          [
            ar.day(1, ...arr(BA), "ia5"),
            ar.day(2, BA, X_BA, "ia5"),
            ar.day(3, BA, X_BA_FREE, "aa2"),
            ar.day(4, ["Buenos Aires – Ushuaïa", "Buenos Aires – Ushuaia", "Buenos Aires – Ushuaia"], ["Vol vers Ushuaïa.", "Flight to Ushuaia.", "Vuelo a Ushuaia."], "ia3"),
            ar.day(5, ["Ushuaïa", "Ushuaia", "Ushuaia"], X_USH, "ia4"),
            ar.day(6, ["Ushuaïa – El Calafate", "Ushuaia – El Calafate", "Ushuaia – El Calafate"], ["Vol vers El Calafate.", "Flight to El Calafate.", "Vuelo a El Calafate."], "aa4"),
            ar.day(7, ["Glaciers Upsala et Spegazzini", "The Upsala and Spegazzini glaciers", "Glaciares Upsala y Spegazzini"], X_UPSALA, "aa8"),
            ar.day(8, ["Perito Moreno", "Perito Moreno", "Perito Moreno"], X_PM, "ia1"),
          ]),
        ar.chapter(["Le Nord-Ouest et Iguazú", "The North-West and Iguazú", "El Noroeste e Iguazú"], ["Montagnes colorées et grandes chutes.", "Colourful mountains and great falls.", "Montañas de colores y grandes cataratas."],
          ["da5", "da4", "ia2", "da7"],
          [
            ar.day(9, ["El Calafate – Jujuy", "El Calafate – Jujuy", "El Calafate – Jujuy"], ["Vols vers San Salvador de Jujuy, dans le Nord-Ouest andin.", "Flights to San Salvador de Jujuy, in the Andean North-West.", "Vuelos a San Salvador de Jujuy, en el Noroeste andino."], "da3"),
            ar.day(10, ["Humahuaca – Purmamarca", "Humahuaca – Purmamarca", "Humahuaca – Purmamarca"], X_HUMA, "da5"),
            ar.day(11, ["Salinas Grandes – Salta", "Salinas Grandes – Salta", "Salinas Grandes – Salta"], X_SALINAS, "da4"),
            ar.day(12, ["Cafayate", "Cafayate", "Cafayate"], X_CAFA, "da4"),
            ar.day(13, ["Salta – Iguazú", "Salta – Iguazú", "Salta – Iguazú"], ["Vol vers Puerto Iguazú.", "Flight to Puerto Iguazú.", "Vuelo a Puerto Iguazú."], "da6"),
            ar.day(14, ["Chutes d'Iguazú", "Iguazú Falls", "Cataratas del Iguazú"], X_IGU, "ia2"),
            ar.day(15, ["Foz do Iguaçu – vol retour", "Foz do Iguaçu – flight home", "Foz do Iguaçu – vuelo de regreso"], ["Envol pour la France depuis Foz do Iguaçu.", "Fly to France from Foz do Iguaçu.", "Vuelo a Francia desde Foz do Iguaçu."], "da7"),
            ar.day(16, T_HOME, HOME, "ia2"),
          ]),
      ],
    }),

    ar.trip({
      slug: "argentine-decouverte-du-bout-du-monde-cap-horn-16j",
      name: ["Découverte du bout du monde : croisière au cap Horn, Torres del Paine et Perito Moreno", "Discovering the End of the World: a Cape Horn cruise, Torres del Paine and Perito Moreno", "Descubrimiento del fin del mundo: crucero al cabo de Hornos, Torres del Paine y Perito Moreno"],
      tagline: ["Quatre nuits de croisière dans les fjords de la Terre de Feu, à 14 voyageurs au plus", "Four nights cruising the fjords of Tierra del Fuego, with 14 travellers at most", "Cuatro noches de crucero por los fiordos de Tierra del Fuego, con 14 viajeros como máximo"],
      description: [
        "La grande aventure australe en petit groupe : Buenos Aires, Ushuaïa, puis quatre nuits de croisière d'expédition jusqu'au cap Horn, la baie Wulaia, les glaciers Pía, Porter, Águila et Cóndor et les manchots de l'île Magdalena, Punta Arenas, Torres del Paine, El Calafate, la croisière des glaciers et le Perito Moreno. Avec les chutes d'Iguazú (18 jours) à partir de 10 103 € par personne.",
        "The great southern adventure in a small group: Buenos Aires, Ushuaia, then four nights on an expedition cruise to Cape Horn, Wulaia Bay, the Pía, Porter, Águila and Cóndor glaciers and the penguins of Magdalena Island, Punta Arenas, Torres del Paine, El Calafate, the glacier cruise and Perito Moreno. With the Iguazú Falls (18 days) from €10,103 per person.",
        "La gran aventura austral en grupo reducido: Buenos Aires, Ushuaia, y cuatro noches de crucero de expedición hasta el cabo de Hornos, la bahía Wulaia, los glaciares Pía, Porter, Águila y Cóndor y los pingüinos de la isla Magdalena, Punta Arenas, Torres del Paine, El Calafate, el crucero de los glaciares y el Perito Moreno. Con las cataratas del Iguazú (18 días) desde 10.103 € por persona.",
      ],
      includes: INC(13, 14, ",Croisière de 4 nuits en pension complète"),
      price: 8450, nights: 13, departureFrom: "Paris", image: "bm1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo", maxGuests: 14, order: -47993,
      chapters: [
        ar.chapter(["Buenos Aires et Ushuaïa", "Buenos Aires and Ushuaia", "Buenos Aires y Ushuaia"], ["La capitale et le bout du monde.", "The capital and the end of the world.", "La capital y el fin del mundo."],
          ["bm3", "aa6"],
          [
            ar.day(1, ...arr(BA), "bm3"),
            ar.day(2, BA, X_BA, "bm3"),
            ar.day(3, BA, X_BA_FREE, "aa2"),
            ar.day(4, ["Buenos Aires – Ushuaïa", "Buenos Aires – Ushuaia", "Buenos Aires – Ushuaia"], ["Vol vers Ushuaïa.", "Flight to Ushuaia.", "Vuelo a Ushuaia."], "aa6"),
          ]),
        ar.chapter(["La croisière australe", "The southern cruise", "El crucero austral"], ["Cap Horn et fjords de glace.", "Cape Horn and icy fjords.", "Cabo de Hornos y fiordos de hielo."],
          ["bm1", "aa7", "cp4"],
          [
            ar.day(5, ["Embarquement à Ushuaïa", "Boarding in Ushuaia", "Embarque en Ushuaia"], ["Embarquement sur le navire d'expédition et navigation sur le canal Beagle.", "Boarding the expedition ship and sailing the Beagle Channel.", "Embarque en el barco de expedición y navegación por el canal Beagle."], "aa5"),
            ar.day(6, ["Cap Horn – baie Wulaia", "Cape Horn – Wulaia Bay", "Cabo de Hornos – bahía Wulaia"], ["Débarquement au cap Horn, si la mer le permet, puis la baie Wulaia, ancien territoire des Yagans.", "A landing at Cape Horn, weather permitting, then Wulaia Bay, former Yagán territory.", "Desembarco en el cabo de Hornos, si el mar lo permite, y la bahía Wulaia, antiguo territorio yagán."], "bm1"),
            ar.day(7, ["Glaciers Pía et Porter", "The Pía and Porter glaciers", "Glaciares Pía y Porter"], ["L'allée des glaciers et le glacier Pía, en zodiac jusqu'au front de glace.", "Glacier Alley and the Pía glacier, by Zodiac to the ice front.", "La avenida de los glaciares y el glaciar Pía, en zódiac hasta el frente de hielo."], "aa7"),
            ar.day(8, ["Seno Agostini – glaciers Águila et Cóndor", "Seno Agostini – the Águila and Cóndor glaciers", "Seno Agostini – glaciares Águila y Cóndor"], ["Le fjord Agostini, les glaciers Águila et Cóndor et les éléphants de mer.", "The Agostini fjord, the Águila and Cóndor glaciers and elephant seals.", "El fiordo Agostini, los glaciares Águila y Cóndor y los elefantes marinos."], "aa8"),
            ar.day(9, ["Île Magdalena – Puerto Natales", "Magdalena Island – Puerto Natales", "Isla Magdalena – Puerto Natales"], ["Les colonies de manchots de Magellan de l'île Magdalena, débarquement à Punta Arenas et route vers Puerto Natales.", "The Magellanic penguin colonies of Magdalena Island, landing at Punta Arenas and the drive to Puerto Natales.", "Las colonias de pingüinos de Magallanes de la isla Magdalena, desembarco en Punta Arenas y carretera hacia Puerto Natales."], "cp4"),
          ]),
        ar.chapter(["Torres del Paine et El Calafate", "Torres del Paine and El Calafate", "Torres del Paine y El Calafate"], ["Les géants de glace et de granit.", "Giants of ice and granite.", "Gigantes de hielo y granito."],
          ["cp1", "cp6", "aa7"],
          [
            ar.day(10, ["Torres del Paine", "Torres del Paine", "Torres del Paine"], X_PAINE, "cp1"),
            ar.day(11, ["Puerto Natales – El Calafate", "Puerto Natales – El Calafate", "Puerto Natales – El Calafate"], ["Retour en Argentine par la steppe jusqu'à El Calafate.", "Back into Argentina across the steppe to El Calafate.", "Regreso a Argentina por la estepa hasta El Calafate."], "cp3"),
            ar.day(12, ["Glaciers Upsala et Spegazzini", "The Upsala and Spegazzini glaciers", "Glaciares Upsala y Spegazzini"], X_UPSALA, "aa8"),
            ar.day(13, ["Perito Moreno", "Perito Moreno", "Perito Moreno"], X_PM, "cp6"),
            ar.day(14, ["El Calafate – Buenos Aires", "El Calafate – Buenos Aires", "El Calafate – Buenos Aires"], ["Vol vers Buenos Aires.", "Flight to Buenos Aires.", "Vuelo a Buenos Aires."], "bm3"),
            ar.day(15, ...dep(BA), "aa3"), ar.day(16, T_HOME, HOME, "bm1"),
          ]),
      ],
    }),

    // ═════════════ BRÉSIL ═════════════
    br.trip({
      slug: "bresil-echappee-bresilienne-rio-buzios-9j",
      name: ["Échappée brésilienne : Rio de Janeiro et les plages de Búzios", "Brazilian Escape: Rio de Janeiro and the beaches of Búzios", "Escapada brasileña: Río de Janeiro y las playas de Búzios"],
      tagline: ["Quatre jours à Rio, puis la mer, à douze voyageurs au plus", "Four days in Rio, then the sea, with twelve travellers at most", "Cuatro días en Río, y el mar, con doce viajeros como máximo"],
      description: [
        "Une semaine au Brésil en petit groupe : quatre jours à Rio de Janeiro, le Christ Rédempteur, le Pain de Sucre, Santa Teresa et le jardin botanique, puis trois nuits à Búzios, presqu'île aux vingt plages. Variantes avec la ville coloniale de Paraty à partir de 2 016 €, ou l'île sauvage d'Ilha Grande à partir de 2 272 € par personne.",
        "A week in Brazil in a small group: four days in Rio de Janeiro, Christ the Redeemer, Sugarloaf Mountain, Santa Teresa and the botanical garden, then three nights in Búzios, a peninsula of twenty beaches. Variants with the colonial town of Paraty from €2,016, or the wild island of Ilha Grande from €2,272 per person.",
        "Una semana en Brasil en grupo reducido: cuatro días en Río de Janeiro, el Cristo Redentor, el Pan de Azúcar, Santa Teresa y el jardín botánico, y tres noches en Búzios, península de veinte playas. Variantes con la ciudad colonial de Paraty desde 2.016 €, o la isla salvaje de Ilha Grande desde 2.272 € por persona.",
      ],
      includes: INC(7, 12),
      price: 1852, nights: 7, departureFrom: "Strasbourg", image: "xb4",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 12, order: -47992,
      chapters: [
        br.chapter(["Rio de Janeiro", "Rio de Janeiro", "Río de Janeiro"], ["La cidade maravilhosa.", "The cidade maravilhosa.", "La cidade maravilhosa."],
          ["xb1", "xb2", "xb3"],
          [
            br.day(1, ...arr(RIO), "xb1"),
            br.day(2, RIO, X_RIO, "xb1"),
            br.day(3, RIO, X_RIO2, "xb2"),
            br.day(4, RIO, ["Journée libre à la plage ou dans les musées.", "A free day on the beach or in the museums.", "Día libre en la playa o en los museos."], "xb3"),
          ]),
        br.chapter(["Búzios", "Búzios", "Búzios"], ["La presqu'île aux vingt plages.", "The peninsula of twenty beaches.", "La península de veinte playas."],
          ["xb4", "xb5", "xb6"],
          [
            br.day(5, ["Rio – Búzios", "Rio – Búzios", "Río – Búzios"], ["Route vers Búzios, ancien village de pêcheurs rendu célèbre par Brigitte Bardot.", "Drive to Búzios, a former fishing village made famous by Brigitte Bardot.", "Carretera hacia Búzios, antiguo pueblo de pescadores que hizo famoso Brigitte Bardot."], "xb6"),
            br.day(6, ["Búzios", "Búzios", "Búzios"], ["Journées libres : les plages de Geribá et João Fernandes, une sortie en goélette ou la Rua das Pedras le soir.", "Free days: the beaches of Geribá and João Fernandes, a schooner trip or the Rua das Pedras in the evening.", "Días libres: las playas de Geribá y João Fernandes, una salida en goleta o la Rua das Pedras por la noche."], "xb4"),
            br.day(8, ["Búzios – Rio – vol retour", "Búzios – Rio – flight home", "Búzios – Río – vuelo de regreso"], ["Retour à l'aéroport de Rio et envol pour la France.", "Back to Rio airport and fly to France.", "Regreso al aeropuerto de Río y vuelo a Francia."], "xb5"),
            br.day(9, T_HOME, HOME, "xb4"),
          ]),
      ],
    }),

    br.trip({
      slug: "bresil-apercu-du-bresil-rio-paraty-9j",
      name: ["Aperçu du Brésil : Rio de Janeiro et Paraty", "A Taste of Brazil: Rio de Janeiro and Paraty", "Pinceladas de Brasil: Río de Janeiro y Paraty"],
      tagline: ["Cinq jours à Rio et la ville coloniale de Paraty, avec Iguaçu ou l'Amazonie en option", "Five days in Rio and the colonial town of Paraty, with Iguaçu or the Amazon as options", "Cinco días en Río y la ciudad colonial de Paraty, con Iguazú o la Amazonía opcionales"],
      description: [
        "Rio en profondeur en groupe de 18 personnes au plus : cinq jours à Rio de Janeiro, du Corcovado au Pain de Sucre et de Santa Teresa à la forêt de Tijuca, puis deux jours à Paraty. Variantes : avec un pré-tour aux chutes d'Iguaçu (12 jours) à partir de 3 617 €, avec l'Amazonie (12 jours) à partir de 4 879 €, ou les deux (15 jours) à partir de 5 935 € par personne.",
        "Rio in depth in a group of 18 at most: five days in Rio de Janeiro, from Corcovado to Sugarloaf and from Santa Teresa to the Tijuca forest, then two days in Paraty. Variants: with a pre-tour to the Iguaçu Falls (12 days) from €3,617, with the Amazon (12 days) from €4,879, or both (15 days) from €5,935 per person.",
        "Río en profundidad en grupo de 18 personas como máximo: cinco días en Río de Janeiro, del Corcovado al Pan de Azúcar y de Santa Teresa al bosque de Tijuca, y dos días en Paraty. Variantes: con un pre-tour a las cataratas de Iguazú (12 días) desde 3.617 €, con la Amazonía (12 días) desde 4.879 €, o ambos (15 días) desde 5.935 € por persona.",
      ],
      includes: INC(7, 18),
      price: 2655, nights: 7, departureFrom: "Francfort", image: "ab3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -47991,
      chapters: [
        br.chapter(["Rio de Janeiro", "Rio de Janeiro", "Río de Janeiro"], ["La cidade maravilhosa.", "The cidade maravilhosa.", "La cidade maravilhosa."],
          ["ab1", "ab2", "ab3", "ab4", "ab5"],
          [
            br.day(1, ...arr(RIO), "ab1"),
            br.day(2, RIO, X_RIO, "ab3"),
            br.day(3, RIO, X_RIO2, "ab4"),
            br.day(4, RIO, ["Le Théâtre municipal, la cathédrale moderne, le Maracanã et le sambodrome, temple du carnaval.", "The Municipal Theatre, the modern cathedral, the Maracanã and the sambadrome, temple of the carnival.", "El Teatro Municipal, la catedral moderna, el Maracaná y el sambódromo, templo del carnaval."], "ab2"),
            br.day(5, RIO, ["Journée libre : la plage, ou en option la baie de Guanabara en bateau.", "A free day: the beach, or optionally Guanabara Bay by boat.", "Día libre: la playa, u opcional la bahía de Guanabara en barco."], "ab5"),
          ]),
        br.chapter(["Paraty", "Paraty", "Paraty"], ["La ville coloniale et sa baie.", "The colonial town and its bay.", "La ciudad colonial y su bahía."],
          ["ab6", "ab7", "ab8"],
          [
            br.day(6, ["Rio – Paraty", "Rio – Paraty", "Río – Paraty"], ["La Costa Verde jusqu'à Paraty.", "The Costa Verde to Paraty.", "La Costa Verde hasta Paraty."], "ab8"),
            br.day(7, ["Paraty", "Paraty", "Paraty"], X_PARATY, "ab6"),
            br.day(8, ["Paraty – São Paulo – vol retour", "Paraty – São Paulo – flight home", "Paraty – São Paulo – vuelo de regreso"], ["Route vers São Paulo et envol pour la France, ou départ vers l'Amazonie.", "Drive to São Paulo and fly to France, or leave for the Amazon.", "Carretera hacia São Paulo y vuelo a Francia, o salida hacia la Amazonía."], "ab7"),
            br.day(9, T_HOME, HOME, "ab3"),
          ]),
      ],
    }),

    br.trip({
      slug: "bresil-ola-brasil-privatif-rio-iguacu-salvador-10j",
      name: ["Olá Brasil en privatif : Rio de Janeiro, les chutes d'Iguaçu et Salvador de Bahia", "Olá Brasil, private tour: Rio de Janeiro, the Iguaçu Falls and Salvador da Bahia", "Olá Brasil en privado: Río de Janeiro, las cataratas de Iguazú y Salvador de Bahía"],
      tagline: ["Les trois grands sites du Brésil avec votre guide privé", "Brazil's three great sights with your own private guide", "Los tres grandes lugares de Brasil con su guía privado"],
      description: [
        "Un circuit rien qu'à vous : trois jours à Rio de Janeiro, deux jours aux chutes d'Iguaçu côtés brésilien et argentin, puis trois jours à Salvador de Bahia, berceau de la culture afro-brésilienne.",
        "A tour just for you: three days in Rio de Janeiro, two days at the Iguaçu Falls on the Brazilian and Argentine sides, then three days in Salvador da Bahia, cradle of Afro-Brazilian culture.",
        "Un circuito solo para ustedes: tres días en Río de Janeiro, dos días en las cataratas de Iguazú del lado brasileño y argentino, y tres días en Salvador de Bahía, cuna de la cultura afrobrasileña.",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs,8 nuits en hôtels 4*,Transferts et visites privés,Guides francophones privés",
        "Flights from France,Domestic flights,8 nights in 4* hotels,Private transfers and visits,Private French-speaking guides",
        "Vuelos desde Francia,Vuelos interiores,8 noches en hoteles de 4*,Traslados y visitas privados,Guías privados francófonos",
      ],
      price: 4098, nights: 8, departureFrom: "Toulouse", image: "ob3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family", maxGuests: 8, order: -47990,
      chapters: [
        br.chapter(["Rio de Janeiro", "Rio de Janeiro", "Río de Janeiro"], ["La cidade maravilhosa.", "The cidade maravilhosa.", "La cidade maravilhosa."],
          ["ob1", "ob3", "ob4"],
          [br.day(1, ...arr(RIO), "ob4"), br.day(2, RIO, X_RIO, "ob3"), br.day(3, RIO, X_RIO2, "ob1")]),
        br.chapter(["Iguaçu et Salvador", "Iguaçu and Salvador", "Iguazú y Salvador"], ["Les chutes et Bahia.", "The falls and Bahia.", "Las cataratas y Bahía."],
          ["ib7", "ob2", "ib1"],
          [
            br.day(4, ["Rio – Foz do Iguaçu", "Rio – Foz do Iguaçu", "Río – Foz do Iguaçu"], ["Vol vers Foz do Iguaçu.", "Flight to Foz do Iguaçu.", "Vuelo a Foz do Iguaçu."], "ib6"),
            br.day(5, ["Chutes d'Iguaçu", "Iguaçu Falls", "Cataratas de Iguazú"], X_IGU_BR, "ib7"),
            br.day(6, ["Iguaçu – Salvador", "Iguaçu – Salvador", "Iguazú – Salvador"], ["Vol vers Salvador de Bahia.", "Flight to Salvador da Bahia.", "Vuelo a Salvador de Bahía."], "ob2"),
            br.day(7, SSA, X_SSA, "ib1"),
            br.day(8, SSA, ["Journée libre : les plages de la baie de Tous-les-Saints, ou en option l'île d'Itaparica.", "A free day: the beaches of All Saints Bay, or optionally Itaparica island.", "Día libre: las playas de la bahía de Todos los Santos, u opcional la isla de Itaparica."], "ib2"),
            br.day(9, ...dep(SSA), "ob2"), br.day(10, T_HOME, HOME, "ob3"),
          ]),
      ],
    }),

    br.trip({
      slug: "bresil-merveilles-du-bresil-iguacu-rio-salvador-10j",
      name: ["Merveilles du Brésil : les chutes d'Iguaçu, Rio de Janeiro et Salvador de Bahia", "Wonders of Brazil: the Iguaçu Falls, Rio de Janeiro and Salvador da Bahia", "Maravillas de Brasil: las cataratas de Iguazú, Río de Janeiro y Salvador de Bahía"],
      tagline: ["Les trois incontournables du Brésil en groupe de 16 au plus", "Brazil's three must-sees in a group of 16 at most", "Los tres imprescindibles de Brasil en grupo de 16 como máximo"],
      description: [
        "Le Brésil essentiel : deux jours aux chutes d'Iguaçu, trois jours à Rio de Janeiro avec le Corcovado, le Pain de Sucre et la forêt de Tijuca, puis deux jours à Salvador de Bahia. Avec deux nuits de plage (12 jours) à partir de 4 007 €, ou avec l'Amazonie (14 jours) à partir de 6 408 € par personne.",
        "Essential Brazil: two days at the Iguaçu Falls, three days in Rio de Janeiro with Corcovado, Sugarloaf and the Tijuca forest, then two days in Salvador da Bahia. With two beach nights (12 days) from €4,007, or with the Amazon (14 days) from €6,408 per person.",
        "El Brasil esencial: dos días en las cataratas de Iguazú, tres días en Río de Janeiro con el Corcovado, el Pan de Azúcar y el bosque de Tijuca, y dos días en Salvador de Bahía. Con dos noches de playa (12 días) desde 4.007 €, o con la Amazonía (14 días) desde 6.408 € por persona.",
      ],
      includes: INC(7, 16),
      price: 3662, nights: 7, departureFrom: "Paris", image: "mb1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 16, order: -47989,
      chapters: [
        br.chapter(["Iguaçu", "Iguaçu", "Iguazú"], ["Les grandes chutes.", "The great falls.", "Las grandes cataratas."],
          ["mb1", "ib8"],
          [
            br.day(1, ["Arrivée à Foz do Iguaçu", "Arrival in Foz do Iguaçu", "Llegada a Foz do Iguaçu"], ["Envol pour Foz do Iguaçu via São Paulo, accueil et transfert à l'hôtel.", "Flight to Foz do Iguaçu via São Paulo, welcome and transfer to the hotel.", "Vuelo a Foz do Iguaçu vía São Paulo, recibimiento y traslado al hotel."], "mb1"),
            br.day(2, ["Foz do Iguaçu", "Foz do Iguaçu", "Foz do Iguaçu"], ["Le parc des oiseaux et le barrage d'Itaipú, l'un des plus grands du monde.", "The bird park and the Itaipú dam, one of the largest in the world.", "El parque de las aves y la represa de Itaipú, una de las mayores del mundo."], "ib8"),
            br.day(3, ["Chutes d'Iguaçu", "Iguaçu Falls", "Cataratas de Iguazú"], X_IGU_BR, "mb1"),
          ]),
        br.chapter(["Rio et Salvador", "Rio and Salvador", "Río y Salvador"], ["La ville merveilleuse et Bahia.", "The marvellous city and Bahia.", "La ciudad maravillosa y Bahía."],
          ["mb5", "nb1", "nb7"],
          [
            br.day(4, ["Iguaçu – Rio", "Iguaçu – Rio", "Iguazú – Río"], ["Vol vers Rio de Janeiro.", "Flight to Rio de Janeiro.", "Vuelo a Río de Janeiro."], "nb1"),
            br.day(5, RIO, X_RIO, "nb2"),
            br.day(6, RIO, X_RIO2, "mb5"),
            br.day(7, ["Rio – Salvador", "Rio – Salvador", "Río – Salvador"], ["Vol vers Salvador de Bahia.", "Flight to Salvador da Bahia.", "Vuelo a Salvador de Bahía."], "nb7"),
            br.day(8, SSA, X_SSA, "nb7"),
            br.day(9, ...dep(SSA), "ib1"), br.day(10, T_HOME, HOME, "mb1"),
          ]),
      ],
    }),

    br.trip({
      slug: "bresil-incontournables-du-bresil-salvador-paraty-iguacu-11j",
      name: ["Les incontournables du Brésil : Salvador de Bahia, Rio de Janeiro, Paraty et Iguaçu", "Highlights of Brazil: Salvador da Bahia, Rio de Janeiro, Paraty and Iguaçu", "Lo esencial de Brasil: Salvador de Bahía, Río de Janeiro, Paraty e Iguazú"],
      tagline: ["Bahia, Rio, la Costa Verde et les chutes, en groupe de 20 au plus", "Bahia, Rio, the Costa Verde and the falls, in a group of 20 at most", "Bahía, Río, la Costa Verde y las cataratas, en grupo de 20 como máximo"],
      description: [
        "Le Brésil complet en onze jours : Salvador de Bahia, trois jours à Rio de Janeiro, deux jours à Paraty, puis les chutes d'Iguaçu des deux côtés de la frontière. Aussi en édition spéciale carnaval avec le défilé des Champions au sambodrome de Rio, à partir de 5 699 € par personne.",
        "Brazil in full in eleven days: Salvador da Bahia, three days in Rio de Janeiro, two days in Paraty, then the Iguaçu Falls on both sides of the border. Also as a special carnival edition with the Champions' Parade at the Rio sambadrome, from €5,699 per person.",
        "Brasil completo en once días: Salvador de Bahía, tres días en Río de Janeiro, dos días en Paraty, y las cataratas de Iguazú a ambos lados de la frontera. También en edición especial carnaval con el desfile de los Campeones en el sambódromo de Río, desde 5.699 € por persona.",
      ],
      includes: INC(9, 20),
      price: 3899, nights: 9, departureFrom: "Paris", image: "nb1",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,family,groups", maxGuests: 20, order: -47988,
      chapters: [
        br.chapter(["Salvador et Rio", "Salvador and Rio", "Salvador y Río"], ["Bahia et la cidade maravilhosa.", "Bahia and the cidade maravilhosa.", "Bahía y la cidade maravilhosa."],
          ["nb7", "nb1", "nb2", "nb3"],
          [
            br.day(1, ...arr(["Salvador", "Salvador", "Salvador"]), "nb7"),
            br.day(2, ["Salvador", "Salvador", "Salvador"], X_SSA, "nb3"),
            br.day(3, ["Salvador – Rio", "Salvador – Rio", "Salvador – Río"], ["Vol vers Rio de Janeiro.", "Flight to Rio de Janeiro.", "Vuelo a Río de Janeiro."], "nb1"),
            br.day(4, RIO, X_RIO, "nb1"),
            br.day(5, RIO, X_RIO2, "nb2"),
          ]),
        br.chapter(["Paraty et Iguaçu", "Paraty and Iguaçu", "Paraty e Iguazú"], ["La Costa Verde et les chutes.", "The Costa Verde and the falls.", "La Costa Verde y las cataratas."],
          ["nb4", "nb6", "nb5"],
          [
            br.day(6, ["Rio – Paraty", "Rio – Paraty", "Río – Paraty"], ["La Costa Verde jusqu'à Paraty.", "The Costa Verde to Paraty.", "La Costa Verde hasta Paraty."], "nb4"),
            br.day(7, ["Paraty", "Paraty", "Paraty"], X_PARATY, "nb6"),
            br.day(8, ["Paraty – São Paulo – Iguaçu", "Paraty – São Paulo – Iguaçu", "Paraty – São Paulo – Iguazú"], ["Route vers São Paulo, vol vers Foz do Iguaçu et les chutes côté brésilien.", "Drive to São Paulo, flight to Foz do Iguaçu and the falls on the Brazilian side.", "Carretera hacia São Paulo, vuelo a Foz do Iguaçu y las cataratas del lado brasileño."], "nb5"),
            br.day(9, ["Iguazú, côté argentin", "Iguazú, Argentine side", "Iguazú, lado argentino"], ["Les passerelles du côté argentin jusqu'à la Garganta del Diablo.", "The walkways on the Argentine side to the Devil's Throat.", "Las pasarelas del lado argentino hasta la Garganta del Diablo."], "ib6"),
            br.day(10, ["Iguaçu – São Paulo – vol retour", "Iguaçu – São Paulo – flight home", "Iguazú – São Paulo – vuelo de regreso"], ["Vol via São Paulo et envol pour la France.", "Flight via São Paulo and fly to France.", "Vuelo vía São Paulo y vuelo a Francia."], "nb5"),
            br.day(11, T_HOME, HOME, "nb1"),
          ]),
      ],
    }),

    br.trip({
      slug: "bresil-bresil-d-emotions-rio-lencois-jericoacoara-12j",
      name: ["Brésil d'émotions : de Rio au Nordeste, les Lençóis Maranhenses et Jericoacoara", "Brazil of Emotions: from Rio to the Nordeste, the Lençóis Maranhenses and Jericoacoara", "Brasil de emociones: de Río al Nordeste, los Lençóis Maranhenses y Jericoacoara"],
      tagline: ["Les dunes blanches et les lagunes du Nordeste, à douze voyageurs au plus", "The white dunes and lagoons of the Nordeste, with twelve travellers at most", "Las dunas blancas y las lagunas del Nordeste, con doce viajeros como máximo"],
      description: [
        "Un Brésil hors des sentiers battus en petit groupe : deux jours à Rio, São Luís et ses façades d'azulejos, trois nuits à Barreirinhas pour les Lençóis Maranhenses, désert de dunes blanches parsemé de lagunes turquoise, le delta du Parnaíba, deux jours à Jericoacoara et ses plages sauvages, puis Fortaleza.",
        "Brazil off the beaten track in a small group: two days in Rio, São Luís and its tiled façades, three nights in Barreirinhas for the Lençóis Maranhenses, a desert of white dunes dotted with turquoise lagoons, the Parnaíba delta, two days in Jericoacoara and its wild beaches, then Fortaleza.",
        "Un Brasil fuera de los caminos trillados en grupo reducido: dos días en Río, São Luís y sus fachadas de azulejos, tres noches en Barreirinhas para los Lençóis Maranhenses, desierto de dunas blancas salpicado de lagunas turquesa, el delta del Parnaíba, dos días en Jericoacoara y sus playas salvajes, y Fortaleza.",
      ],
      includes: INC(10, 12),
      price: 4088, nights: 10, departureFrom: "Bâle", image: "eb1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo", maxGuests: 12, order: -47987,
      chapters: [
        br.chapter(["Rio et São Luís", "Rio and São Luís", "Río y São Luís"], ["La ville merveilleuse et le Maranhão.", "The marvellous city and Maranhão.", "La ciudad maravillosa y Maranhão."],
          ["eb3", "eb5"],
          [
            br.day(1, ...arr(RIO), "ab1"),
            br.day(2, RIO, X_RIO, "ab3"),
            br.day(3, ["Rio – São Luís", "Rio – São Luís", "Río – São Luís"], ["Vol vers São Luís, son centre historique classé par l'Unesco et ses façades couvertes d'azulejos.", "Flight to São Luís, its UNESCO-listed historic centre and its tile-covered façades.", "Vuelo a São Luís, su centro histórico declarado por la Unesco y sus fachadas cubiertas de azulejos."], "eb5"),
          ]),
        br.chapter(["Les Lençóis Maranhenses", "The Lençóis Maranhenses", "Los Lençóis Maranhenses"], ["Dunes et lagunes.", "Dunes and lagoons.", "Dunas y lagunas."],
          ["eb1", "eb4"],
          [
            br.day(4, ["São Luís – Barreirinhas", "São Luís – Barreirinhas", "São Luís – Barreirinhas"], ["Route vers Barreirinhas, porte des Lençóis.", "Drive to Barreirinhas, gateway to the Lençóis.", "Carretera hacia Barreirinhas, puerta de los Lençóis."], "eb3"),
            br.day(5, ["Lençóis Maranhenses", "Lençóis Maranhenses", "Lençóis Maranhenses"], ["En 4x4 jusqu'aux dunes blanches et baignade dans les lagunes d'eau de pluie, la Lagoa Azul et la Lagoa Bonita.", "By 4x4 to the white dunes and a swim in the rainwater lagoons, Lagoa Azul and Lagoa Bonita.", "En 4x4 hasta las dunas blancas y baño en las lagunas de agua de lluvia, la Lagoa Azul y la Lagoa Bonita."], "eb1"),
            br.day(6, ["Rio Preguiças", "The Preguiças River", "Río Preguiças"], ["Descente du rio Preguiças jusqu'aux petits Lençóis, au village de Caburé et au phare de Mandacaru.", "Down the Preguiças River to the little Lençóis, the village of Caburé and the Mandacaru lighthouse.", "Descenso del río Preguiças hasta los pequeños Lençóis, el pueblo de Caburé y el faro de Mandacaru."], "eb4"),
          ]),
        br.chapter(["Parnaíba et Jericoacoara", "Parnaíba and Jericoacoara", "Parnaíba y Jericoacoara"], ["Le delta et les plages sauvages.", "The delta and the wild beaches.", "El delta y las playas salvajes."],
          ["eb5", "eb6"],
          [
            br.day(7, ["Barreirinhas – Parnaíba", "Barreirinhas – Parnaíba", "Barreirinhas – Parnaíba"], ["Route vers Parnaíba et son delta, l'un des rares deltas en pleine mer du monde.", "Drive to Parnaíba and its delta, one of the world's few open-sea deltas.", "Carretera hacia Parnaíba y su delta, uno de los pocos deltas en mar abierto del mundo."], "eb5"),
            br.day(8, ["Parnaíba – Jericoacoara", "Parnaíba – Jericoacoara", "Parnaíba – Jericoacoara"], ["En 4x4 par les plages jusqu'à Jericoacoara et le coucher de soleil sur la grande dune.", "By 4x4 along the beaches to Jericoacoara and the sunset over the great dune.", "En 4x4 por las playas hasta Jericoacoara y la puesta de sol sobre la gran duna."], "eb6"),
            br.day(9, ["Jericoacoara", "Jericoacoara", "Jericoacoara"], ["Journée libre : la Pedra Furada, les lagunes de Paraíso et du Tatajuba, kitesurf ou hamacs dans l'eau.", "A free day: the Pedra Furada, the Paraíso and Tatajuba lagoons, kitesurfing or hammocks in the water.", "Día libre: la Pedra Furada, las lagunas de Paraíso y Tatajuba, kitesurf o hamacas en el agua."], "eb6"),
            br.day(10, ["Jericoacoara – Fortaleza", "Jericoacoara – Fortaleza", "Jericoacoara – Fortaleza"], ["Route vers Fortaleza.", "Drive to Fortaleza.", "Carretera hacia Fortaleza."], "eb6"),
            br.day(11, ...dep(["Fortaleza", "Fortaleza", "Fortaleza"]), "eb6"), br.day(12, T_HOME, HOME, "eb1"),
          ]),
      ],
    }),

    br.trip({
      slug: "bresil-impressions-du-bresil-ouro-preto-iguacu-paraty-14j",
      name: ["Impressions du Brésil : Salvador, Ouro Preto, Iguaçu, Paraty et Rio de Janeiro", "Impressions of Brazil: Salvador, Ouro Preto, Iguaçu, Paraty and Rio de Janeiro", "Impresiones de Brasil: Salvador, Ouro Preto, Iguazú, Paraty y Río de Janeiro"],
      tagline: ["Le grand tour du Brésil, du baroque du Minas Gerais aux chutes et à Rio", "The grand tour of Brazil, from Minas Gerais baroque to the falls and Rio", "La gran vuelta de Brasil, del barroco de Minas Gerais a las cataratas y Río"],
      description: [
        "Le Brésil complet en groupe de 18 personnes au plus : Salvador de Bahia, deux jours à Ouro Preto, ville baroque de la ruée vers l'or, les chutes d'Iguaçu, Paraty et trois jours à Rio de Janeiro. Avec trois nuits de plage à Búzios (17 jours) à partir de 4 660 €, à Ilha Grande à partir de 4 896 €, ou avec le Pantanal, ses jaguars et ses caïmans (18 jours) à partir de 6 103 € par personne.",
        "Brazil in full in a group of 18 at most: Salvador da Bahia, two days in Ouro Preto, a baroque gold-rush town, the Iguaçu Falls, Paraty and three days in Rio de Janeiro. With three beach nights in Búzios (17 days) from €4,660, on Ilha Grande from €4,896, or with the Pantanal, its jaguars and caimans (18 days) from €6,103 per person.",
        "Brasil completo en grupo de 18 personas como máximo: Salvador de Bahía, dos días en Ouro Preto, ciudad barroca de la fiebre del oro, las cataratas de Iguazú, Paraty y tres días en Río de Janeiro. Con tres noches de playa en Búzios (17 días) desde 4.660 €, en Ilha Grande desde 4.896 €, o con el Pantanal, sus jaguares y caimanes (18 días) desde 6.103 € por persona.",
      ],
      includes: INC(12, 18),
      price: 4112, nights: 12, departureFrom: "Bâle", image: "ib3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -47986,
      chapters: [
        br.chapter(["Salvador et le Minas Gerais", "Salvador and Minas Gerais", "Salvador y Minas Gerais"], ["Bahia et les villes de l'or.", "Bahia and the gold towns.", "Bahía y las ciudades del oro."],
          ["ib1", "ib2", "ib3", "ib4", "ib5"],
          [
            br.day(1, ...arr(SSA), "ib1"),
            br.day(2, SSA, X_SSA, "ib2"),
            br.day(3, ["Salvador – Belo Horizonte – Ouro Preto", "Salvador – Belo Horizonte – Ouro Preto", "Salvador – Belo Horizonte – Ouro Preto"], ["Vol vers Belo Horizonte et route vers Ouro Preto.", "Flight to Belo Horizonte and the drive to Ouro Preto.", "Vuelo a Belo Horizonte y carretera hacia Ouro Preto."], "ib3"),
            br.day(4, ["Ouro Preto", "Ouro Preto", "Ouro Preto"], ["Ouro Preto, ville baroque classée par l'Unesco, ses églises couvertes d'or et les sculptures de l'Aleijadinho, et la ville voisine de Mariana.", "Ouro Preto, a UNESCO-listed baroque town, its gold-covered churches and the sculptures of Aleijadinho, and the nearby town of Mariana.", "Ouro Preto, ciudad barroca declarada por la Unesco, sus iglesias cubiertas de oro y las esculturas del Aleijadinho, y la vecina ciudad de Mariana."], "ib4"),
            br.day(5, ["Ouro Preto – Belo Horizonte", "Ouro Preto – Belo Horizonte", "Ouro Preto – Belo Horizonte"], ["Congonhas et ses prophètes sculptés, puis Belo Horizonte.", "Congonhas and its carved prophets, then Belo Horizonte.", "Congonhas y sus profetas esculpidos, y Belo Horizonte."], "ib5"),
          ]),
        br.chapter(["Iguaçu et Paraty", "Iguaçu and Paraty", "Iguazú y Paraty"], ["Les chutes et la Costa Verde.", "The falls and the Costa Verde.", "Las cataratas y la Costa Verde."],
          ["ib6", "ib7", "ib8", "ab6"],
          [
            br.day(6, ["Belo Horizonte – Foz do Iguaçu", "Belo Horizonte – Foz do Iguaçu", "Belo Horizonte – Foz do Iguaçu"], ["Vol vers Foz do Iguaçu.", "Flight to Foz do Iguaçu.", "Vuelo a Foz do Iguaçu."], "ib8"),
            br.day(7, ["Chutes d'Iguaçu", "Iguaçu Falls", "Cataratas de Iguazú"], X_IGU_BR, "ib6"),
            br.day(8, ["Iguaçu – São Paulo – Paraty", "Iguaçu – São Paulo – Paraty", "Iguazú – São Paulo – Paraty"], ["Vol vers São Paulo et route vers Paraty.", "Flight to São Paulo and the drive to Paraty.", "Vuelo a São Paulo y carretera hacia Paraty."], "ib7"),
            br.day(9, ["Paraty", "Paraty", "Paraty"], X_PARATY, "ab6"),
          ]),
        br.chapter(["Rio de Janeiro", "Rio de Janeiro", "Río de Janeiro"], ["La cidade maravilhosa.", "The cidade maravilhosa.", "La cidade maravilhosa."],
          ["nb1", "nb2", "ab3"],
          [
            br.day(10, ["Paraty – Rio", "Paraty – Rio", "Paraty – Río"], ["La Costa Verde jusqu'à Rio de Janeiro.", "The Costa Verde to Rio de Janeiro.", "La Costa Verde hasta Río de Janeiro."], "ab8"),
            br.day(11, RIO, X_RIO, "ab3"),
            br.day(12, RIO, X_RIO2, "nb2"),
            br.day(13, ...dep(RIO), "nb1"), br.day(14, T_HOME, HOME, "ib3"),
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
