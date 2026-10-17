// Mexico — 6 journey-format trips for the existing "mexique" destination. Near-identical supplier
// programmes (yearly editions, beach extensions in Playa del Carmen, the Riviera Maya or Holbox,
// the Guatemala extension) are grouped on one page and described inside each trip. Prices are
// per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-mexique-circuits.ts
// Requires scripts/upload-images-mex-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "mexique-cap-sur-le-yucatan-palenque-chichen-itza-9j": ["375538", "110018", "381663", "342138", "384358", "131578", "382698", "196781"],
  "mexique-decouverte-du-yucatan-petit-groupe-9j": ["408978", "408980", "408979", "408981"],
  "mexique-cap-sur-le-mexique-mexico-chiapas-yucatan-11j": ["375518"],
  "mexique-incontournables-oaxaca-chiapas-yucatan-12j": ["258338", "256878", "382058", "416518"],
  "mexique-hola-mexico-privatif-12j": ["138298"],
  "mexique-couleurs-du-mexique-villes-coloniales-14j": ["395878", "253599", "395879", "395880", "399598", "253600", "253601", "253602"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const CUN: L3 = ["Cancún", "Cancún", "Cancún"];
const MEX: L3 = ["Mexico", "Mexico City", "Ciudad de México"];
const join = (a: L3, b: L3): L3 => [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`, `${a[2]} ${b[2]}`];
const homeFrom = (city: L3): [L3, L3] => [
  [`${city[0]} – vol retour`, `${city[1]} – flight home`, `${city[2]} – vuelo de regreso`],
  [`Route vers l'aéroport de ${city[0]} et envol pour la France.`, `Drive to ${city[1]} airport and fly to France.`, `Carretera al aeropuerto de ${city[2]} y vuelo a Francia.`],
];

// Shared day texts
const X_MEX: L3 = ["Mexico : le musée national d'Anthropologie et sa pierre du Soleil aztèque, le Zócalo et la cathédrale, les fresques de Diego Rivera au Palais national, puis les barques fleuries de Xochimilco.", "Mexico City: the National Museum of Anthropology and its Aztec Sun Stone, the Zócalo and the cathedral, Diego Rivera's murals at the National Palace, then the flower-decked boats of Xochimilco.", "Ciudad de México: el museo nacional de Antropología y su piedra del Sol azteca, el Zócalo y la catedral, los murales de Diego Rivera en el Palacio Nacional, y las trajineras floridas de Xochimilco."];
const X_TEO: L3 = ["Teotihuacan, la « cité des dieux », ses pyramides du Soleil et de la Lune et l'allée des Morts, et en chemin la basilique de Guadalupe.", "Teotihuacan, the 'city of the gods', its Pyramids of the Sun and the Moon and the Avenue of the Dead, and on the way the Basilica of Guadalupe.", "Teotihuacán, la «ciudad de los dioses», sus pirámides del Sol y de la Luna y la calzada de los Muertos, y de camino la basílica de Guadalupe."];
const X_CHIAPAS: L3 = ["Vol vers Tuxtla Gutiérrez, croisière dans le canyon du Sumidero entre des falaises de mille mètres, puis San Cristóbal de las Casas.", "Flight to Tuxtla Gutiérrez, a cruise through the Sumidero Canyon between thousand-metre cliffs, then San Cristóbal de las Casas.", "Vuelo a Tuxtla Gutiérrez, crucero por el cañón del Sumidero entre acantilados de mil metros, y San Cristóbal de las Casas."];
const X_SANCRIS: L3 = ["San Cristóbal de las Casas, ville coloniale des hautes terres du Chiapas, et les villages mayas tzotziles de San Juan Chamula et Zinacantán.", "San Cristóbal de las Casas, a colonial town in the Chiapas highlands, and the Tzotzil Maya villages of San Juan Chamula and Zinacantán.", "San Cristóbal de las Casas, ciudad colonial de los altos de Chiapas, y los pueblos mayas tzotziles de San Juan Chamula y Zinacantán."];
const X_AGUA: L3 = ["Les cascades turquoise d'Agua Azul dans la jungle, puis Palenque.", "The turquoise waterfalls of Agua Azul in the jungle, then Palenque.", "Las cascadas turquesa de Agua Azul en la selva, y Palenque."];
const X_PALENQUE: L3 = ["Le site maya de Palenque, ses temples envahis par la jungle et le temple des Inscriptions, tombeau du roi Pakal, puis Campeche.", "The Maya site of Palenque, its jungle-covered temples and the Temple of the Inscriptions, tomb of King Pakal, then Campeche.", "El sitio maya de Palenque, sus templos cubiertos por la selva y el templo de las Inscripciones, tumba del rey Pakal, y Campeche."];
const X_UXMAL: L3 = ["Campeche, ses remparts et ses façades colorées, puis le site maya d'Uxmal et sa pyramide du Devin, avant Mérida.", "Campeche, its ramparts and colourful façades, then the Maya site of Uxmal and its Pyramid of the Magician, before Mérida.", "Campeche, sus murallas y sus fachadas de colores, y el sitio maya de Uxmal y su pirámide del Adivino, antes de Mérida."];
const X_CHICHEN: L3 = ["Izamal, la ville jaune, puis Chichén Itzá, l'une des sept nouvelles merveilles du monde, sa pyramide de Kukulcán et son grand jeu de balle, et la baignade dans un cénote.", "Izamal, the yellow town, then Chichén Itzá, one of the new seven wonders of the world, its Kukulcán pyramid and its great ball court, and a swim in a cenote.", "Izamal, la ciudad amarilla, y Chichén Itzá, una de las siete nuevas maravillas del mundo, su pirámide de Kukulcán y su gran juego de pelota, y un baño en un cenote."];
const X_TULUM: L3 = ["Tulum, cité maya perchée au-dessus de la mer des Caraïbes, puis la lagune de Bacalar aux sept couleurs.", "Tulum, a Maya city perched above the Caribbean Sea, then the seven-coloured lagoon of Bacalar.", "Tulum, ciudad maya encaramada sobre el mar Caribe, y la laguna de Bacalar de los siete colores."];
const X_CELESTUN: L3 = ["La réserve de Celestún, en barque à la rencontre des flamants roses, puis Mérida, la ville blanche.", "The Celestún reserve, by boat to see the pink flamingos, then Mérida, the white city.", "La reserva de Celestún, en lancha al encuentro de los flamencos rosas, y Mérida, la ciudad blanca."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const m = circuitBuilders({ destinationSlug: "mexique", imagePrefix: "mex", season: { label: ["Novembre à avril", "November to April", "Noviembre a abril"], months: "november,december,january,february,march,april" } });
  const INC = (n: number, max: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts aéroport,${n} nuits en hôtels 3* et 4*,Transport en autocar ou minibus,Visites et entrées des sites du programme,Guide francophone,Groupe de ${max} personnes au plus${extra}`,
    `Flights from France,Airport transfers,${n} nights in 3* and 4* hotels,Transport by coach or minibus,Visits and site fees in the programme,French-speaking guide,Group of ${max} at most${extra}`,
    `Vuelos desde Francia,Traslados al aeropuerto,${n} noches en hoteles de 3* y 4*,Transporte en autocar o minibús,Visitas y entradas a los sitios del programa,Guía francófono,Grupo de ${max} personas como máximo${extra}`,
  ];

  const journeyTrips = [
    // ───────────── 1. Cap sur le Yucatan — 9J/7N ─────────────
    m.trip({
      slug: "mexique-cap-sur-le-yucatan-palenque-chichen-itza-9j",
      name: ["Cap sur le Yucatán : Tulum, Bacalar, Palenque, Campeche et Chichén Itzá", "Heading for the Yucatán: Tulum, Bacalar, Palenque, Campeche and Chichén Itzá", "Rumbo al Yucatán: Tulum, Bacalar, Palenque, Campeche y Chichén Itzá"],
      tagline: ["Le monde maya en une semaine, de la mer des Caraïbes à la jungle du Chiapas", "The Maya world in a week, from the Caribbean Sea to the Chiapas jungle", "El mundo maya en una semana, del mar Caribe a la selva de Chiapas"],
      description: [
        "Une boucle au départ de Cancún en groupe de 20 personnes au plus : Tulum, la lagune de Bacalar, le site de Becán, Palenque et les cascades d'Agua Azul, Campeche, les flamants roses de Celestún, Mérida, Izamal et Chichén Itzá. Avec trois nuits de plage à Playa del Carmen (12 jours) à partir de 2 105 €, ou sur l'île de Holbox à partir de 2 414 € par personne.",
        "A loop from Cancún in a group of 20 at most: Tulum, Bacalar lagoon, the Becán site, Palenque and the Agua Azul waterfalls, Campeche, the pink flamingos of Celestún, Mérida, Izamal and Chichén Itzá. With three beach nights in Playa del Carmen (12 days) from €2,105, or on Holbox island from €2,414 per person.",
        "Un circuito desde Cancún en grupo de 20 personas como máximo: Tulum, la laguna de Bacalar, el sitio de Becán, Palenque y las cascadas de Agua Azul, Campeche, los flamencos rosas de Celestún, Mérida, Izamal y Chichén Itzá. Con tres noches de playa en Playa del Carmen (12 días) desde 2.105 €, o en la isla de Holbox desde 2.414 € por persona.",
      ],
      includes: INC(7, 20),
      price: 1871, nights: 7, departureFrom: "Paris", image: "cy8",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 20, order: -51000,
      chapters: [
        m.chapter(["La côte caraïbe et la jungle", "The Caribbean coast and the jungle", "La costa caribeña y la selva"], ["Tulum, Bacalar et Palenque.", "Tulum, Bacalar and Palenque.", "Tulum, Bacalar y Palenque."],
          ["cy2", "cy5", "cy4"],
          [
            m.day(1, ...arr(CUN), "dy2"),
            m.day(2, ["Tulum – Bacalar – Chetumal", "Tulum – Bacalar – Chetumal", "Tulum – Bacalar – Chetumal"], X_TULUM, "cy2"),
            m.day(3, ["Becán – Palenque", "Becán – Palenque", "Becán – Palenque"], ["Le site maya de Becán, entouré de douves, puis la traversée de la jungle jusqu'à Palenque.", "The Maya site of Becán, surrounded by a moat, then across the jungle to Palenque.", "El sitio maya de Becán, rodeado de un foso, y la travesía de la selva hasta Palenque."], "cy5"),
            m.day(4, ["Palenque et Agua Azul", "Palenque and Agua Azul", "Palenque y Agua Azul"], ["Le site maya de Palenque et ses temples envahis par la jungle, puis les cascades turquoise d'Agua Azul.", "The Maya site of Palenque and its jungle-covered temples, then the turquoise waterfalls of Agua Azul.", "El sitio maya de Palenque y sus templos cubiertos por la selva, y las cascadas turquesa de Agua Azul."], "cy4"),
          ]),
        m.chapter(["Le Yucatán", "The Yucatán", "El Yucatán"], ["Campeche, Mérida et Chichén Itzá.", "Campeche, Mérida and Chichén Itzá.", "Campeche, Mérida y Chichén Itzá."],
          ["cy6", "cy7", "cy8", "cy3"],
          [
            m.day(5, ["Palenque – Campeche", "Palenque – Campeche", "Palenque – Campeche"], ["Route vers Campeche, ville fortifiée classée par l'Unesco, et ses façades colorées.", "Drive to Campeche, a UNESCO-listed walled city, and its colourful façades.", "Carretera hacia Campeche, ciudad amurallada declarada por la Unesco, y sus fachadas de colores."], "cy6"),
            m.day(6, ["Celestún – Mérida", "Celestún – Mérida", "Celestún – Mérida"], X_CELESTUN, "cy7"),
            m.day(7, ["Izamal – Chichén Itzá", "Izamal – Chichén Itzá", "Izamal – Chichén Itzá"], X_CHICHEN, "cy8"),
            m.day(8, homeFrom(CUN)[0], ["Retour vers Cancún et envol pour la France, ou début de l'extension balnéaire.", "Back to Cancún and fly to France, or start of the beach extension.", "Regreso a Cancún y vuelo a Francia, o inicio de la extensión de playa."], "cy3"),
            m.day(9, T_HOME, HOME, "cy1"),
          ]),
      ],
    }),

    // ───────────── 2. Découverte du Yucatan — 9J/7N ─────────────
    m.trip({
      slug: "mexique-decouverte-du-yucatan-petit-groupe-9j",
      name: ["Découverte du Yucatán en petit groupe : Tulum, Bacalar, Palenque et Chichén Itzá", "Discovering the Yucatán in a small group: Tulum, Bacalar, Palenque and Chichén Itzá", "Descubrimiento del Yucatán en grupo reducido: Tulum, Bacalar, Palenque y Chichén Itzá"],
      tagline: ["Douze voyageurs au plus, et le nouveau Train maya entre Palenque et Campeche", "Twelve travellers at most, and the new Maya Train between Palenque and Campeche", "Doce viajeros como máximo, y el nuevo Tren Maya entre Palenque y Campeche"],
      description: [
        "Le Yucatán en groupe de 12 personnes au plus : Tulum et la plage de Tankah, la lagune de Bacalar, Palenque et Agua Azul, le Train maya jusqu'à Campeche, Uxmal, Mérida, Izamal, Chichén Itzá et Valladolid. Avec des nuits de plage en fin de circuit à Playa del Carmen (11 jours) à partir de 2 423 €, sur la Riviera Maya à partir de 2 587 €, ou à Holbox à partir de 2 992 € par personne.",
        "The Yucatán in a group of 12 at most: Tulum and Tankah beach, Bacalar lagoon, Palenque and Agua Azul, the Maya Train to Campeche, Uxmal, Mérida, Izamal, Chichén Itzá and Valladolid. With beach nights at the end of the tour in Playa del Carmen (11 days) from €2,423, on the Riviera Maya from €2,587, or on Holbox from €2,992 per person.",
        "El Yucatán en grupo de 12 personas como máximo: Tulum y la playa de Tankah, la laguna de Bacalar, Palenque y Agua Azul, el Tren Maya hasta Campeche, Uxmal, Mérida, Izamal, Chichén Itzá y Valladolid. Con noches de playa al final del circuito en Playa del Carmen (11 días) desde 2.423 €, en la Riviera Maya desde 2.587 €, o en Holbox desde 2.992 € por persona.",
      ],
      includes: INC(7, 12, ",Trajet en Train maya"),
      price: 2150, nights: 7, departureFrom: "Bruxelles", image: "dy3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -50999,
      chapters: [
        m.chapter(["La côte caraïbe et la jungle", "The Caribbean coast and the jungle", "La costa caribeña y la selva"], ["Tulum, Bacalar et Palenque.", "Tulum, Bacalar and Palenque.", "Tulum, Bacalar y Palenque."],
          ["dy2", "dy3", "dy4", "dy5"],
          [
            m.day(1, ...arr(CUN), "dy2"),
            m.day(2, ["Tulum – Tankah – Chetumal", "Tulum – Tankah – Chetumal", "Tulum – Tankah – Chetumal"], ["Tulum et sa cité maya face à la mer, puis la plage de Tankah et un cénote.", "Tulum and its Maya city facing the sea, then Tankah beach and a cenote.", "Tulum y su ciudad maya frente al mar, y la playa de Tankah y un cenote."], "dy3"),
            m.day(3, ["Bacalar – Palenque", "Bacalar – Palenque", "Bacalar – Palenque"], ["La lagune de Bacalar aux sept couleurs, puis la route de la jungle jusqu'à Palenque.", "The seven-coloured Bacalar lagoon, then the jungle road to Palenque.", "La laguna de Bacalar de los siete colores, y la carretera de la selva hasta Palenque."], "dy4"),
            m.day(4, ["Palenque et Agua Azul", "Palenque and Agua Azul", "Palenque y Agua Azul"], ["Le site maya de Palenque, puis les cascades d'Agua Azul.", "The Maya site of Palenque, then the Agua Azul waterfalls.", "El sitio maya de Palenque y las cascadas de Agua Azul."], "dy5"),
          ]),
        m.chapter(["Le Yucatán", "The Yucatán", "El Yucatán"], ["Campeche, Uxmal, Mérida et Chichén Itzá.", "Campeche, Uxmal, Mérida and Chichén Itzá.", "Campeche, Uxmal, Mérida y Chichén Itzá."],
          ["dy6", "dy7", "dy8", "dy1"],
          [
            m.day(5, ["Palenque – Campeche en Train maya", "Palenque – Campeche by Maya Train", "Palenque – Campeche en Tren Maya"], ["Quatre heures et demie à bord du nouveau Train maya, puis Campeche et ses remparts.", "Four and a half hours aboard the new Maya Train, then Campeche and its ramparts.", "Cuatro horas y media a bordo del nuevo Tren Maya, y Campeche y sus murallas."], "dy6"),
            m.day(6, ["Uxmal – Mérida", "Uxmal – Mérida", "Uxmal – Mérida"], ["Le site maya d'Uxmal et sa pyramide du Devin, puis Mérida, la ville blanche.", "The Maya site of Uxmal and its Pyramid of the Magician, then Mérida, the white city.", "El sitio maya de Uxmal y su pirámide del Adivino, y Mérida, la ciudad blanca."], "dy7"),
            m.day(7, ["Izamal – Chichén Itzá – Valladolid", "Izamal – Chichén Itzá – Valladolid", "Izamal – Chichén Itzá – Valladolid"], join(X_CHICHEN, ["Nuit à Valladolid, ville coloniale.", "A night in Valladolid, a colonial town.", "Noche en Valladolid, ciudad colonial."]), "dy8"),
            m.day(8, homeFrom(CUN)[0], ["Retour vers Cancún et envol pour la France, ou début de l'extension balnéaire.", "Back to Cancún and fly to France, or start of the beach extension.", "Regreso a Cancún y vuelo a Francia, o inicio de la extensión de playa."], "dy2"),
            m.day(9, T_HOME, HOME, "dy1"),
          ]),
      ],
    }),

    // ───────────── 3. Cap sur le Mexique — 11J/9N ─────────────
    m.trip({
      slug: "mexique-cap-sur-le-mexique-mexico-chiapas-yucatan-11j",
      name: ["Cap sur le Mexique : Mexico, Teotihuacan, le Chiapas et le Yucatán", "Heading for Mexico: Mexico City, Teotihuacan, Chiapas and the Yucatán", "Rumbo a México: Ciudad de México, Teotihuacán, Chiapas y el Yucatán"],
      tagline: ["De la capitale aztèque aux pyramides mayas, en onze jours", "From the Aztec capital to the Maya pyramids, in eleven days", "De la capital azteca a las pirámides mayas, en once días"],
      description: [
        "Le Mexique d'ouest en est en groupe de 25 personnes au plus : deux jours à Mexico et Teotihuacan, le canyon du Sumidero, San Cristóbal de las Casas et les villages mayas du Chiapas, Palenque, Campeche, Uxmal, Mérida, Izamal et Chichén Itzá, jusqu'à Cancún.",
        "Mexico from west to east in a group of 25 at most: two days in Mexico City and Teotihuacan, the Sumidero Canyon, San Cristóbal de las Casas and the Maya villages of Chiapas, Palenque, Campeche, Uxmal, Mérida, Izamal and Chichén Itzá, all the way to Cancún.",
        "México de oeste a este en grupo de 25 personas como máximo: dos días en Ciudad de México y Teotihuacán, el cañón del Sumidero, San Cristóbal de las Casas y los pueblos mayas de Chiapas, Palenque, Campeche, Uxmal, Mérida, Izamal y Chichén Itzá, hasta Cancún.",
      ],
      includes: INC(9, 25, ",Vol intérieur Mexico – Tuxtla Gutiérrez"),
      price: 2435, nights: 9, departureFrom: "Paris", image: "cm3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 25, order: -50998,
      chapters: [
        m.chapter(["Mexico et Teotihuacan", "Mexico City and Teotihuacan", "Ciudad de México y Teotihuacán"], ["La capitale et la cité des dieux.", "The capital and the city of the gods.", "La capital y la ciudad de los dioses."],
          ["cm1", "cm2", "cm3"],
          [m.day(1, ...arr(MEX), "cm3"), m.day(2, MEX, X_MEX, "cm1"), m.day(3, ["Teotihuacan", "Teotihuacan", "Teotihuacán"], X_TEO, "cm2")]),
        m.chapter(["Le Chiapas", "Chiapas", "Chiapas"], ["Canyon, hautes terres et jungle.", "Canyon, highlands and jungle.", "Cañón, altiplano y selva."],
          ["cm7", "cm5", "cm6", "cm4", "cm8"],
          [
            m.day(4, ["Canyon du Sumidero – San Cristóbal", "Sumidero Canyon – San Cristóbal", "Cañón del Sumidero – San Cristóbal"], X_CHIAPAS, "cm7"),
            m.day(5, ["San Cristóbal de las Casas", "San Cristóbal de las Casas", "San Cristóbal de las Casas"], X_SANCRIS, "cm5"),
            m.day(6, ["San Cristóbal – Palenque", "San Cristóbal – Palenque", "San Cristóbal – Palenque"], X_AGUA, "cm8"),
            m.day(7, ["Palenque – Campeche", "Palenque – Campeche", "Palenque – Campeche"], X_PALENQUE, "cy4"),
          ]),
        m.chapter(["Le Yucatán", "The Yucatán", "El Yucatán"], ["Uxmal, Mérida et Chichén Itzá.", "Uxmal, Mérida and Chichén Itzá.", "Uxmal, Mérida y Chichén Itzá."],
          ["cy6", "cy8"],
          [
            m.day(8, ["Uxmal – Mérida", "Uxmal – Mérida", "Uxmal – Mérida"], X_UXMAL, "cy6"),
            m.day(9, ["Izamal – Chichén Itzá", "Izamal – Chichén Itzá", "Izamal – Chichén Itzá"], X_CHICHEN, "cy8"),
            m.day(10, ...homeFrom(CUN), "dy2"),
            m.day(11, T_HOME, HOME, "cm3"),
          ]),
      ],
    }),

    // ───────────── 4. Les incontournables du Mexique — 12J/10N ─────────────
    m.trip({
      slug: "mexique-incontournables-oaxaca-chiapas-yucatan-12j",
      name: ["Les incontournables du Mexique : Mexico, Puebla, Oaxaca, le Chiapas et le Yucatán", "Highlights of Mexico: Mexico City, Puebla, Oaxaca, Chiapas and the Yucatán", "Lo esencial de México: Ciudad de México, Puebla, Oaxaca, Chiapas y el Yucatán"],
      tagline: ["La grande traversée du Mexique, des villes coloniales aux cités mayas", "The great crossing of Mexico, from colonial cities to Maya cities", "La gran travesía de México, de las ciudades coloniales a las ciudades mayas"],
      description: [
        "La traversée complète du Mexique en groupe de 20 personnes au plus : Mexico et Xochimilco, Teotihuacan, Cholula et Puebla, Oaxaca et le site zapotèque de Monte Albán, l'isthme de Tehuantepec, Chiapa de Corzo, San Cristóbal de las Casas, Agua Azul, Palenque, Campeche, Uxmal, Mérida et Chichén Itzá. Avec deux ou trois nuits en tout compris sur la Riviera Maya en fin de circuit (14 ou 15 jours) à partir de 2 974 € par personne.",
        "The full crossing of Mexico in a group of 20 at most: Mexico City and Xochimilco, Teotihuacan, Cholula and Puebla, Oaxaca and the Zapotec site of Monte Albán, the Isthmus of Tehuantepec, Chiapa de Corzo, San Cristóbal de las Casas, Agua Azul, Palenque, Campeche, Uxmal, Mérida and Chichén Itzá. With two or three all-inclusive nights on the Riviera Maya at the end of the tour (14 or 15 days) from €2,974 per person.",
        "La travesía completa de México en grupo de 20 personas como máximo: Ciudad de México y Xochimilco, Teotihuacán, Cholula y Puebla, Oaxaca y el sitio zapoteca de Monte Albán, el istmo de Tehuantepec, Chiapa de Corzo, San Cristóbal de las Casas, Agua Azul, Palenque, Campeche, Uxmal, Mérida y Chichén Itzá. Con dos o tres noches con todo incluido en la Riviera Maya al final del circuito (14 o 15 días) desde 2.974 € por persona.",
      ],
      includes: INC(10, 20),
      price: 2484, nights: 10, departureFrom: "Lyon", image: "im2",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 20, order: -50997,
      chapters: [
        m.chapter(["Mexico, Puebla et Oaxaca", "Mexico City, Puebla and Oaxaca", "Ciudad de México, Puebla y Oaxaca"], ["Aztèques, baroque et Zapotèques.", "Aztecs, baroque and Zapotecs.", "Aztecas, barroco y zapotecas."],
          ["im5", "im6", "im4", "im1"],
          [
            m.day(1, ...arr(MEX), "ho5"),
            m.day(2, ["Mexico et Xochimilco", "Mexico City and Xochimilco", "Ciudad de México y Xochimilco"], X_MEX, "im5"),
            m.day(3, ["Teotihuacan – Cholula – Puebla", "Teotihuacan – Cholula – Puebla", "Teotihuacán – Cholula – Puebla"], ["Teotihuacan et ses pyramides, puis Cholula, son église perchée sur une pyramide face au volcan Popocatépetl, et Puebla.", "Teotihuacan and its pyramids, then Cholula, its church perched on a pyramid facing Popocatépetl volcano, and Puebla.", "Teotihuacán y sus pirámides, y Cholula, su iglesia encaramada sobre una pirámide frente al volcán Popocatépetl, y Puebla."], "im6"),
            m.day(4, ["Puebla – Oaxaca", "Puebla – Oaxaca", "Puebla – Oaxaca"], ["Puebla et ses façades d'azulejos, puis la route d'Oaxaca, ville coloniale et capitale gastronomique.", "Puebla and its tiled façades, then the road to Oaxaca, a colonial town and food capital.", "Puebla y sus fachadas de azulejos, y la carretera a Oaxaca, ciudad colonial y capital gastronómica."], "im4"),
            m.day(5, ["Monte Albán – Tehuantepec", "Monte Albán – Tehuantepec", "Monte Albán – Tehuantepec"], ["Le site zapotèque de Monte Albán, au sommet d'une montagne aplanie, puis l'isthme de Tehuantepec.", "The Zapotec site of Monte Albán, on a levelled mountaintop, then the Isthmus of Tehuantepec.", "El sitio zapoteca de Monte Albán, en la cima de una montaña allanada, y el istmo de Tehuantepec."], "im1"),
          ]),
        m.chapter(["Le Chiapas", "Chiapas", "Chiapas"], ["Hautes terres et jungle.", "Highlands and jungle.", "Altiplano y selva."],
          ["im2", "im7", "im3"],
          [
            m.day(6, ["Chiapa de Corzo – San Cristóbal", "Chiapa de Corzo – San Cristóbal", "Chiapa de Corzo – San Cristóbal"], ["Chiapa de Corzo et le canyon du Sumidero, puis San Cristóbal de las Casas.", "Chiapa de Corzo and the Sumidero Canyon, then San Cristóbal de las Casas.", "Chiapa de Corzo y el cañón del Sumidero, y San Cristóbal de las Casas."], "cm7"),
            m.day(7, ["San Cristóbal de las Casas", "San Cristóbal de las Casas", "San Cristóbal de las Casas"], X_SANCRIS, "im2"),
            m.day(8, ["Agua Azul – Palenque", "Agua Azul – Palenque", "Agua Azul – Palenque"], X_AGUA, "im7"),
            m.day(9, ["Palenque – Campeche", "Palenque – Campeche", "Palenque – Campeche"], X_PALENQUE, "im3"),
          ]),
        m.chapter(["Le Yucatán", "The Yucatán", "El Yucatán"], ["Uxmal, Mérida et Chichén Itzá.", "Uxmal, Mérida and Chichén Itzá.", "Uxmal, Mérida y Chichén Itzá."],
          ["cy6", "dy8"],
          [
            m.day(10, ["Uxmal – Mérida", "Uxmal – Mérida", "Uxmal – Mérida"], X_UXMAL, "cy6"),
            m.day(11, ["Chichén Itzá – Cancún – vol retour", "Chichén Itzá – Cancún – flight home", "Chichén Itzá – Cancún – vuelo de regreso"], ["Chichén Itzá et sa pyramide de Kukulcán, puis Cancún et envol pour la France, ou début de l'extension sur la Riviera Maya.", "Chichén Itzá and its Kukulcán pyramid, then Cancún and fly to France, or start of the Riviera Maya extension.", "Chichén Itzá y su pirámide de Kukulcán, y Cancún y vuelo a Francia, o inicio de la extensión en la Riviera Maya."], "dy8"),
            m.day(12, T_HOME, HOME, "im2"),
          ]),
      ],
    }),

    // ───────────── 5. Hola Mexico en privatif — 12J/10N ─────────────
    m.trip({
      slug: "mexique-hola-mexico-privatif-12j",
      name: ["Hola Mexico en privatif : Mexico, Mérida, Celestún, Bacalar et Playa del Carmen", "Hola Mexico, private tour: Mexico City, Mérida, Celestún, Bacalar and Playa del Carmen", "Hola Mexico en privado: Ciudad de México, Mérida, Celestún, Bacalar y Playa del Carmen"],
      tagline: ["Un voyage rien qu'à vous, de la capitale aux lagunes de la mer des Caraïbes", "A trip just for you, from the capital to the lagoons of the Caribbean", "Un viaje solo para ustedes, de la capital a las lagunas del Caribe"],
      description: [
        "Un circuit privatif avec votre guide et votre chauffeur : trois jours à Mexico et Teotihuacan, un vol vers Cancún, Valladolid, Chichén Itzá et Izamal, Mérida et les flamants de Celestún, Uxmal, deux nuits au bord de la lagune de Bacalar, le site de Cobá dans la jungle et une nuit à Playa del Carmen.",
        "A private tour with your own guide and driver: three days in Mexico City and Teotihuacan, a flight to Cancún, Valladolid, Chichén Itzá and Izamal, Mérida and the flamingos of Celestún, Uxmal, two nights by Bacalar lagoon, the Cobá site in the jungle and a night in Playa del Carmen.",
        "Un circuito privado con su guía y su chófer: tres días en Ciudad de México y Teotihuacán, un vuelo a Cancún, Valladolid, Chichén Itzá e Izamal, Mérida y los flamencos de Celestún, Uxmal, dos noches a orillas de la laguna de Bacalar, el sitio de Cobá en la selva y una noche en Playa del Carmen.",
      ],
      includes: [
        "Vols depuis la France,Vol intérieur Mexico – Cancún,10 nuits en hôtels de charme,Voiture privée avec chauffeur,Guide francophone privé,Visites et entrées du programme",
        "Flights from France,Domestic flight Mexico City – Cancún,10 nights in boutique hotels,Private car with driver,Private French-speaking guide,Visits and fees in the programme",
        "Vuelos desde Francia,Vuelo interior Ciudad de México – Cancún,10 noches en hoteles con encanto,Coche privado con chófer,Guía privado francófono,Visitas y entradas del programa",
      ],
      price: 3094, nights: 10, departureFrom: "Toulouse", image: "ho8",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family", maxGuests: 8, order: -50996,
      chapters: [
        m.chapter(["Mexico", "Mexico City", "Ciudad de México"], ["La capitale et Teotihuacan.", "The capital and Teotihuacan.", "La capital y Teotihuacán."],
          ["ho5", "ho4"],
          [m.day(1, ...arr(MEX), "ho5"), m.day(2, MEX, X_MEX, "ho5"), m.day(3, ["Teotihuacan", "Teotihuacan", "Teotihuacán"], X_TEO, "ho4")]),
        m.chapter(["Le Yucatán", "The Yucatán", "El Yucatán"], ["Valladolid, Chichén Itzá, Mérida et Uxmal.", "Valladolid, Chichén Itzá, Mérida and Uxmal.", "Valladolid, Chichén Itzá, Mérida y Uxmal."],
          ["ho6", "ho3", "ho7"],
          [
            m.day(4, ["Mexico – Cancún", "Mexico City – Cancún", "Ciudad de México – Cancún"], ["Vol vers Cancún, sur la mer des Caraïbes.", "Flight to Cancún, on the Caribbean Sea.", "Vuelo a Cancún, en el mar Caribe."], "ho1"),
            m.day(5, ["Cancún – Valladolid", "Cancún – Valladolid", "Cancún – Valladolid"], ["Valladolid, ville coloniale aux maisons pastel, et un cénote.", "Valladolid, a colonial town of pastel houses, and a cenote.", "Valladolid, ciudad colonial de casas pastel, y un cenote."], "dy3"),
            m.day(6, ["Chichén Itzá – Izamal – Mérida", "Chichén Itzá – Izamal – Mérida", "Chichén Itzá – Izamal – Mérida"], X_CHICHEN, "ho6"),
            m.day(7, ["Celestún", "Celestún", "Celestún"], X_CELESTUN, "ho3"),
            m.day(8, ["Uxmal – Bacalar", "Uxmal – Bacalar", "Uxmal – Bacalar"], ["Le site maya d'Uxmal, puis la traversée de la péninsule jusqu'à Bacalar.", "The Maya site of Uxmal, then across the peninsula to Bacalar.", "El sitio maya de Uxmal, y la travesía de la península hasta Bacalar."], "ho7"),
          ]),
        m.chapter(["Bacalar et la Riviera Maya", "Bacalar and the Riviera Maya", "Bacalar y la Riviera Maya"], ["Lagune, jungle et plage.", "Lagoon, jungle and beach.", "Laguna, selva y playa."],
          ["ho8", "ho2", "ho1"],
          [
            m.day(9, ["Bacalar", "Bacalar", "Bacalar"], ["Journée sur la lagune aux sept couleurs : baignade, kayak et cénote Azul.", "A day on the seven-coloured lagoon: swimming, kayaking and Cenote Azul.", "Jornada en la laguna de los siete colores: baño, kayak y cenote Azul."], "ho8"),
            m.day(10, ["Cobá – Playa del Carmen", "Cobá – Playa del Carmen", "Cobá – Playa del Carmen"], ["Le site maya de Cobá, sa pyramide de Nohoch Mul au milieu de la jungle, puis Playa del Carmen.", "The Maya site of Cobá, its Nohoch Mul pyramid in the middle of the jungle, then Playa del Carmen.", "El sitio maya de Cobá, su pirámide de Nohoch Mul en medio de la selva, y Playa del Carmen."], "ho2"),
            m.day(11, ...homeFrom(CUN), "ho1"),
            m.day(12, T_HOME, HOME, "ho8"),
          ]),
      ],
    }),

    // ───────────── 6. Couleurs du Mexique — 14J/12N ─────────────
    m.trip({
      slug: "mexique-couleurs-du-mexique-villes-coloniales-14j",
      name: ["Couleurs du Mexique : San Miguel de Allende, Guanajuato, le Chiapas et le Yucatán", "Colours of Mexico: San Miguel de Allende, Guanajuato, Chiapas and the Yucatán", "Colores de México: San Miguel de Allende, Guanajuato, Chiapas y el Yucatán"],
      tagline: ["Les villes coloniales du centre puis le monde maya, à douze voyageurs au plus", "The colonial cities of the centre, then the Maya world, with twelve travellers at most", "Las ciudades coloniales del centro y el mundo maya, con doce viajeros como máximo"],
      description: [
        "Le Mexique en groupe de 12 personnes au plus : Querétaro, San Miguel de Allende et Guanajuato, villes coloniales classées par l'Unesco, Teotihuacan, deux jours à Mexico, le Chiapas et San Cristóbal de las Casas, Agua Azul, Palenque, Campeche, Uxmal, Mérida, Chichén Itzá et Valladolid. Avec des nuits de plage à Playa del Carmen (16 jours) à partir de 3 737 €, sur la Riviera Maya à partir de 3 903 €, à Holbox à partir de 4 362 €, ou prolongé au Guatemala (19 jours) à partir de 5 785 € par personne.",
        "Mexico in a group of 12 at most: Querétaro, San Miguel de Allende and Guanajuato, UNESCO-listed colonial towns, Teotihuacan, two days in Mexico City, Chiapas and San Cristóbal de las Casas, Agua Azul, Palenque, Campeche, Uxmal, Mérida, Chichén Itzá and Valladolid. With beach nights in Playa del Carmen (16 days) from €3,737, on the Riviera Maya from €3,903, on Holbox from €4,362, or extended to Guatemala (19 days) from €5,785 per person.",
        "México en grupo de 12 personas como máximo: Querétaro, San Miguel de Allende y Guanajuato, ciudades coloniales declaradas por la Unesco, Teotihuacán, dos días en Ciudad de México, Chiapas y San Cristóbal de las Casas, Agua Azul, Palenque, Campeche, Uxmal, Mérida, Chichén Itzá y Valladolid. Con noches de playa en Playa del Carmen (16 días) desde 3.737 €, en la Riviera Maya desde 3.903 €, en Holbox desde 4.362 €, o prolongado en Guatemala (19 días) desde 5.785 € por persona.",
      ],
      includes: INC(12, 12, ",Vol intérieur Mexico – Tuxtla Gutiérrez"),
      price: 3465, nights: 12, departureFrom: "Bruxelles", image: "co5",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -50995,
      chapters: [
        m.chapter(["Les villes coloniales du centre", "The colonial cities of the centre", "Las ciudades coloniales del centro"], ["Querétaro, San Miguel et Guanajuato.", "Querétaro, San Miguel and Guanajuato.", "Querétaro, San Miguel y Guanajuato."],
          ["co2", "im2", "co1"],
          [
            m.day(1, ...arr(MEX), "cm3"),
            m.day(2, ["Querétaro – San Miguel de Allende", "Querétaro – San Miguel de Allende", "Querétaro – San Miguel de Allende"], ["Querétaro et son aqueduc, puis San Miguel de Allende, ses rues pavées et sa paroisse néogothique rose.", "Querétaro and its aqueduct, then San Miguel de Allende, its cobbled streets and pink neo-Gothic parish church.", "Querétaro y su acueducto, y San Miguel de Allende, sus calles empedradas y su parroquia neogótica rosa."], "co2"),
            m.day(3, ["San Miguel – Guanajuato", "San Miguel – Guanajuato", "San Miguel – Guanajuato"], ["Guanajuato, ville minière aux maisons colorées accrochées aux collines et à ses tunnels souterrains.", "Guanajuato, a mining town of colourful houses clinging to the hills, with its underground tunnels.", "Guanajuato, ciudad minera de casas de colores colgadas de las colinas y sus túneles subterráneos."], "im2"),
            m.day(4, ["Guanajuato – Teotihuacan", "Guanajuato – Teotihuacan", "Guanajuato – Teotihuacán"], ["Route vers Teotihuacan et nuit au pied des pyramides.", "Drive to Teotihuacan and a night at the foot of the pyramids.", "Carretera hacia Teotihuacán y noche al pie de las pirámides."], "cm2"),
            m.day(5, ["Teotihuacan – Mexico", "Teotihuacan – Mexico City", "Teotihuacán – Ciudad de México"], X_TEO, "ho4"),
            m.day(6, MEX, X_MEX, "cm1"),
          ]),
        m.chapter(["Le Chiapas", "Chiapas", "Chiapas"], ["Canyon, hautes terres et jungle.", "Canyon, highlands and jungle.", "Cañón, altiplano y selva."],
          ["cm7", "cm5", "im7"],
          [
            m.day(7, ["Canyon du Sumidero – San Cristóbal", "Sumidero Canyon – San Cristóbal", "Cañón del Sumidero – San Cristóbal"], X_CHIAPAS, "cm7"),
            m.day(8, ["San Cristóbal de las Casas", "San Cristóbal de las Casas", "San Cristóbal de las Casas"], X_SANCRIS, "cm5"),
            m.day(9, ["Agua Azul – Palenque", "Agua Azul – Palenque", "Agua Azul – Palenque"], X_AGUA, "im7"),
            m.day(10, ["Palenque – Campeche", "Palenque – Campeche", "Palenque – Campeche"], X_PALENQUE, "im3"),
          ]),
        m.chapter(["Le Yucatán", "The Yucatán", "El Yucatán"], ["Uxmal, Mérida, Chichén Itzá et Valladolid.", "Uxmal, Mérida, Chichén Itzá and Valladolid.", "Uxmal, Mérida, Chichén Itzá y Valladolid."],
          ["co5", "co6", "co8"],
          [
            m.day(11, ["Uxmal – Mérida", "Uxmal – Mérida", "Uxmal – Mérida"], X_UXMAL, "co8"),
            m.day(12, ["Chichén Itzá – Valladolid", "Chichén Itzá – Valladolid", "Chichén Itzá – Valladolid"], X_CHICHEN, "co5"),
            m.day(13, ["Valladolid – Cancún – vol retour", "Valladolid – Cancún – flight home", "Valladolid – Cancún – vuelo de regreso"], ["Route vers Cancún et envol pour la France, ou début de l'extension.", "Drive to Cancún and fly to France, or start of the extension.", "Carretera hacia Cancún y vuelo a Francia, o inicio de la extensión."], "co6"),
            m.day(14, T_HOME, HOME, "co5"),
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
