// Middle East circuits — 14 journey-format trips: eight for "jordanie", three for
// "emirats-arabes-unis" (one combined with Oman), two for "israel" and one for "oman". Near-identical
// supplier programmes (other hotel classes, other departure days, longer stays) are grouped and
// described inside one trip. Prices are per-person "from" prices. Supplier product ids are kept in
// SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-moyen-orient-circuits.ts
// Requires scripts/upload-images-mo-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "jordanie-incontournables-chateaux-petra-wadi-rum-8j": ["81020", "37758"],
  "jordanie-entre-nous-salt-petra-mer-morte-8j": ["246279", "324808", "125479"],
  "jordanie-intimiste-petra-wadi-rum-aqaba-8j": ["372119"],
  "jordanie-express-petra-wadi-rum-5j": ["81198"],
  "jordanie-circuit-et-sejour-mer-morte-ou-aqaba-10j": ["81218", "81358"],
  "jordanie-legendes-privatif-petra-mer-morte-8j": ["364758", "123418"],
  "jordanie-magnifique-privatif-5-etoiles-10j": ["119719"],
  "jordanie-etoile-aqaba-petra-wadi-rum-privatif-8j": ["132038"],
  "emirats-arabes-unis-dubai-abu-dhabi-al-ain-musandam-7j": ["359358", "353845", "259939", "359359", "354522", "259940", "414479", "359360", "355236", "259958"],
  "emirats-arabes-unis-il-etait-une-fois-6j": ["353020"],
  "emirats-arabes-unis-oman-entre-mers-et-deserts-12j": ["146519"],
  "israel-super-bleu-tel-aviv-massada-jerusalem-galilee-8j": ["359681"],
  "israel-escapade-autour-de-jerusalem-8j": ["54800"],
  "oman-decouverte-mascate-nizwa-wahiba-sur-8j": ["145678", "146178"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_AMMAN: L3 = ["Arrivée à Amman", "Arrival in Amman", "Llegada a Amán"];
const AMMAN: L3 = ["Envol pour Amman, accueil à l'aéroport, formalités de visa et transfert à l'hôtel.", "Flight to Amman, welcome at the airport, visa formalities and transfer to the hotel.", "Vuelo a Amán, recibimiento en el aeropuerto, trámites de visado y traslado al hotel."];
const T_CASTLES: L3 = ["Les châteaux du désert", "The desert castles", "Los castillos del desierto"];
const CASTLES: L3 = [
  "Les châteaux omeyyades de l'est d'Amman : Qasr al-Kharaneh, les fresques de Qusayr Amra, classé à l'Unesco, et la forteresse de basalte d'Azraq.",
  "The Umayyad castles east of Amman: Qasr al-Kharaneh, the frescoes of Qusayr Amra, a UNESCO site, and the basalt fortress of Azraq.",
  "Los castillos omeyas al este de Amán: Qasr al-Kharaneh, los frescos de Qusayr Amra, inscrito en la Unesco, y la fortaleza de basalto de Azraq.",
];
const T_JERASH: L3 = ["Jerash et Ajloun", "Jerash and Ajloun", "Jerash y Ajloun"];
const JERASH: L3 = [
  "Jerash, l'antique Gérasa, l'une des cités romaines les mieux conservées du Proche-Orient, puis le château arabe d'Ajloun.",
  "Jerash, ancient Gerasa, one of the best-preserved Roman cities in the Middle East, then the Arab castle of Ajloun.",
  "Jerash, la antigua Gerasa, una de las ciudades romanas mejor conservadas de Oriente Próximo, y el castillo árabe de Ajloun.",
];
const T_IRAQ: L3 = ["Iraq al-Amir et la mer Morte", "Iraq al-Amir and the Dead Sea", "Iraq al-Amir y el mar Muerto"];
const IRAQ: L3 = [
  "Le palais hellénistique de Qasr al-Abd à Iraq al-Amir, puis la baignade dans la mer Morte, point le plus bas de la planète.",
  "The Hellenistic palace of Qasr al-Abd at Iraq al-Amir, then a float in the Dead Sea, the lowest point on earth.",
  "El palacio helenístico de Qasr al-Abd en Iraq al-Amir y el baño en el mar Muerto, el punto más bajo del planeta.",
];
const T_KINGS: L3 = ["La route des Rois – Pétra", "The King's Highway – Petra", "La ruta de los Reyes – Petra"];
const KINGS: L3 = [
  "Par la route des Rois : Madaba et sa carte de la Terre sainte en mosaïque, le mont Nebo et sa vue sur la vallée du Jourdain, la forteresse croisée de Kerak, puis Pétra.",
  "Along the King's Highway: Madaba and its mosaic map of the Holy Land, Mount Nebo and its view of the Jordan valley, the crusader fortress of Kerak, then Petra.",
  "Por la ruta de los Reyes: Madaba y su mapa de Tierra Santa en mosaico, el monte Nebo y su vista sobre el valle del Jordán, la fortaleza cruzada de Kerak, y Petra.",
];
const T_PETRA: L3 = ["Pétra, la cité rose", "Petra, the rose city", "Petra, la ciudad rosa"];
const PETRA: L3 = [
  "Journée entière dans l'ancienne capitale nabatéenne : le Siq, le Khazneh (le Trésor), les tombeaux royaux, le théâtre et, pour les plus courageux, la montée au Deir (le Monastère).",
  "A full day in the old Nabataean capital: the Siq, the Khazneh (the Treasury), the royal tombs, the theatre and, for the bravest, the climb up to the Deir (the Monastery).",
  "Jornada completa en la antigua capital nabatea: el Siq, el Khazneh (el Tesoro), las tumbas reales, el teatro y, para los más valientes, la subida al Deir (el Monasterio).",
];
const T_RUM: L3 = ["Le désert du Wadi Rum", "The Wadi Rum desert", "El desierto de Wadi Rum"];
const RUM: L3 = [
  "Safari en 4x4 dans le Wadi Rum, ses canyons de grès rouge, ses arches et ses dunes, et nuit dans un camp de bédouins sous les étoiles.",
  "A 4x4 safari in Wadi Rum, its red sandstone canyons, arches and dunes, and a night in a Bedouin camp under the stars.",
  "Safari en 4x4 por el Wadi Rum, sus cañones de arenisca roja, sus arcos y sus dunas, y noche en un campamento beduino bajo las estrellas.",
];
const T_LITTLE: L3 = ["La petite Pétra – Wadi Rum", "Little Petra – Wadi Rum", "La pequeña Petra – Wadi Rum"];
const LITTLE: L3 = [
  "Le Siq al-Barid, la « petite Pétra », puis le désert du Wadi Rum, safari en 4x4 et nuit dans un camp de bédouins.",
  "Siq al-Barid, 'Little Petra', then the Wadi Rum desert, a 4x4 safari and a night in a Bedouin camp.",
  "El Siq al-Barid, la «pequeña Petra», y el desierto de Wadi Rum, safari en 4x4 y noche en un campamento beduino.",
];
const T_SALT: L3 = ["As-Salt", "As-Salt", "As-Salt"];
const SALT: L3 = [
  "La ville d'As-Salt, classée à l'Unesco, ses maisons ottomanes en pierre jaune et la tolérance qui y fait vivre ensemble chrétiens et musulmans.",
  "The town of As-Salt, a UNESCO site, its Ottoman houses in yellow stone and the tolerance that has Christians and Muslims living side by side.",
  "La ciudad de As-Salt, inscrita en la Unesco, sus casas otomanas de piedra amarilla y la tolerancia que hace convivir a cristianos y musulmanes.",
];
const T_DS_BACK: L3 = ["Wadi Araba – la mer Morte – Amman", "Wadi Araba – the Dead Sea – Amman", "Wadi Araba – el mar Muerto – Amán"];
const DS_BACK: L3 = [
  "Par la vallée du Wadi Araba jusqu'aux rives de la mer Morte pour une baignade, puis retour à Amman.",
  "Through the Wadi Araba valley to the shores of the Dead Sea for a float, then back to Amman.",
  "Por el valle del Wadi Araba hasta las orillas del mar Muerto para un baño, y regreso a Amán.",
];
const T_AMMAN_HOME: L3 = ["Amman – vol retour", "Amman – flight home", "Amán – vuelo de regreso"];
const AMMAN_HOME: L3 = ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."];
const JO_INC = (n: number): L3 => [
  `Vols depuis la France,Transferts aéroport,${n} nuits en hôtels 3* et 1 nuit en camp dans le désert,Pension complète,Visites et entrées du programme,Guide francophone`,
  `Flights from France,Airport transfers,${n} nights in 3* hotels and 1 night in a desert camp,Full board,Visits and entrance fees in the programme,French-speaking guide`,
  `Vuelos desde Francia,Traslados al aeropuerto,${n} noches en hoteles de 3* y 1 noche en campamento en el desierto,Pensión completa,Visitas y entradas del programa,Guía francófono`,
];
const T_DUBAI: L3 = ["Dubaï, ancienne et moderne", "Dubai, old and new", "Dubái, antigua y moderna"];
const DUBAI: L3 = [
  "Les gratte-ciel de Sheikh Zayed Road, la Burj Khalifa et Palm Jumeirah, puis le vieux Dubaï : le quartier d'Al Fahidi, la traversée de la Creek en abra et les souks de l'or et des épices.",
  "The skyscrapers of Sheikh Zayed Road, the Burj Khalifa and Palm Jumeirah, then old Dubai: the Al Fahidi quarter, an abra across the Creek and the gold and spice souks.",
  "Los rascacielos de Sheikh Zayed Road, el Burj Khalifa y Palm Jumeirah, y el viejo Dubái: el barrio de Al Fahidi, la travesía de la Creek en abra y los zocos del oro y las especias.",
];
const T_SAFARI: L3 = ["Sharjah et safari dans le désert", "Sharjah and a desert safari", "Sharjah y safari en el desierto"];
const SAFARI: L3 = [
  "L'émirat de Sharjah et ses musées, puis l'après-midi un safari en 4x4 dans les dunes et un dîner barbecue dans un camp du désert.",
  "The emirate of Sharjah and its museums, then in the afternoon a 4x4 safari in the dunes and a barbecue dinner at a desert camp.",
  "El emirato de Sharjah y sus museos, y por la tarde un safari en 4x4 por las dunas y una cena barbacoa en un campamento del desierto.",
];
const T_ABU: L3 = ["Abu Dhabi", "Abu Dhabi", "Abu Dabi"];
const ABU: L3 = [
  "La capitale des Émirats : la grande mosquée Sheikh Zayed et ses 82 coupoles de marbre blanc, le palais Qasr al-Watan et la corniche.",
  "The capital of the Emirates: the Sheikh Zayed Grand Mosque and its 82 white marble domes, the Qasr al-Watan palace and the corniche.",
  "La capital de los Emiratos: la gran mezquita Sheikh Zayed y sus 82 cúpulas de mármol blanco, el palacio Qasr al-Watan y la corniche.",
];
const T_ALAIN: L3 = ["L'oasis d'Al Ain", "The oasis of Al Ain", "El oasis de Al Ain"];
const ALAIN: L3 = [
  "Al Ain, la cité-jardin près de la frontière omanaise, son oasis de palmiers classée à l'Unesco, son fort et son marché aux chameaux.",
  "Al Ain, the garden city near the Omani border, its UNESCO-listed palm oasis, its fort and its camel market.",
  "Al Ain, la ciudad jardín cerca de la frontera omaní, su oasis de palmeras inscrito en la Unesco, su fuerte y su mercado de camellos.",
];
const T_MUSCAT: L3 = ["Mascate et sa grande mosquée", "Muscat and its Grand Mosque", "Mascate y su gran mezquita"];
const T_NIZWA: L3 = ["Nizwa, Jabrin et Bahla – Wahiba", "Nizwa, Jabrin and Bahla – Wahiba", "Nizwa, Jabrin y Bahla – Wahiba"];
const NIZWA: L3 = [
  "Le fort de Nizwa et sa tour de guet, le château de Jabrin, l'oasis fortifiée de Bahla et le vieux village d'Al Manzifat, puis les dunes de Wahiba et une nuit au campement.",
  "Nizwa fort and its watchtower, Jabrin castle, the fortified oasis of Bahla and the old village of Al Manzifat, then the Wahiba dunes and a night at a desert camp.",
  "El fuerte de Nizwa y su torre de vigía, el castillo de Jabrin, el oasis fortificado de Bahla y el viejo pueblo de Al Manzifat, y las dunas de Wahiba y una noche en el campamento.",
];
const T_SUR: L3 = ["Wadi Bani Khaled, Sur et les tortues", "Wadi Bani Khaled, Sur and the turtles", "Wadi Bani Khaled, Sur y las tortugas"];
const SUR: L3 = [
  "Lever du soleil sur les dunes, les bassins du Wadi Bani Khaled, le port des boutres de Sur, puis le soir l'observation des tortues vertes à Ras al-Jinz.",
  "Sunrise over the dunes, the pools of Wadi Bani Khaled, the dhow port of Sur, then in the evening watching green turtles at Ras al-Jinz.",
  "Amanecer sobre las dunas, las pozas del Wadi Bani Khaled, el puerto de los dhows de Sur, y por la noche la observación de las tortugas verdes en Ras al-Jinz.",
];
const T_SHAAB: L3 = ["Wadi Shab et le gouffre de Bimmah", "Wadi Shab and the Bimmah sinkhole", "Wadi Shab y la sima de Bimmah"];
const SHAAB: L3 = [
  "La route côtière, les piscines naturelles et cascades du Wadi Shab, le gouffre turquoise de Bimmah et Quriyat, avant Mascate.",
  "The coast road, the natural pools and waterfalls of Wadi Shab, the turquoise Bimmah sinkhole and Quriyat, before Muscat.",
  "La carretera costera, las piscinas naturales y cascadas del Wadi Shab, la sima turquesa de Bimmah y Quriyat, antes de Mascate.",
];
const T_JEBEL: L3 = ["La grande mosquée – Jebel Shams – Nizwa", "The Grand Mosque – Jebel Shams – Nizwa", "La gran mezquita – Jebel Shams – Nizwa"];
const JEBEL: L3 = [
  "La grande mosquée du sultan Qaboos, puis le village d'Al Hamra et le Jebel Shams, le « Grand Canyon » d'Oman, avant Nizwa.",
  "The Sultan Qaboos Grand Mosque, then the village of Al Hamra and Jebel Shams, Oman's 'Grand Canyon', before Nizwa.",
  "La gran mezquita del sultán Qaboos, y el pueblo de Al Hamra y el Jebel Shams, el «Gran Cañón» de Omán, antes de Nizwa.",
];
const T_DHOW: L3 = ["Croisière et visite de Mascate", "A cruise and a tour of Muscat", "Crucero y visita de Mascate"];
const DHOW: L3 = [
  "En bateau le long de la côte de Mascate, puis la ville : le palais Al Alam, les forts portugais, la corniche de Mutrah et son souk.",
  "By boat along the Muscat coast, then the city: Al Alam palace, the Portuguese forts, the Mutrah corniche and its souk.",
  "En barco por la costa de Mascate y la ciudad: el palacio Al Alam, los fuertes portugueses, la corniche de Mutrah y su zoco.",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const jo = circuitBuilders({ destinationSlug: "jordanie", imagePrefix: "mo", season: { label: ["Mars-mai, sept-nov", "Mar-May, Sept-Nov", "Mar-may, sept-nov"], months: "march,april,may,september,october,november" } });
  const ae = circuitBuilders({ destinationSlug: "emirats-arabes-unis", imagePrefix: "mo", season: { label: ["Nov à mars", "Nov to March", "Nov a mar"], months: "november,december,january,february,march" } });
  const il = circuitBuilders({ destinationSlug: "israel", imagePrefix: "mo", season: { label: ["Mars-mai, sept-nov", "Mar-May, Sept-Nov", "Mar-may, sept-nov"], months: "march,april,may,september,october,november" } });
  const om = circuitBuilders({ destinationSlug: "oman", imagePrefix: "mo", season: { label: ["Oct à avril", "Oct to April", "Oct a abr"], months: "october,november,december,january,february,march,april" } });

  const journeyTrips = [
    // ───────────── Jordanie 1. Les incontournables — 8J/7N ─────────────
    jo.trip({
      slug: "jordanie-incontournables-chateaux-petra-wadi-rum-8j",
      name: ["Les incontournables de la Jordanie : châteaux du désert, Jerash, Pétra et Wadi Rum", "Jordan Highlights: the Desert Castles, Jerash, Petra and Wadi Rum", "Lo esencial de Jordania: castillos del desierto, Jerash, Petra y Wadi Rum"],
      tagline: ["Le circuit complet en pension complète, avec une nuit sous la tente bédouine", "The complete tour on full board, with a night in a Bedouin tent", "El circuito completo en pensión completa, con una noche en tienda beduina"],
      description: [
        "La Jordanie en huit jours et en pension complète : les châteaux omeyyades du désert, Jerash et Ajloun, Iraq al-Amir et la mer Morte, la route des Rois par Madaba, le mont Nebo et Kerak, une journée entière à Pétra, puis le Wadi Rum en 4x4 et une nuit dans un camp de bédouins. Version de 9 jours avec la ville d'As-Salt et des hôtels 3* supérieur ou 4*, à partir de 1 157 € par personne.",
        "Jordan in eight days on full board: the Umayyad desert castles, Jerash and Ajloun, Iraq al-Amir and the Dead Sea, the King's Highway via Madaba, Mount Nebo and Kerak, a full day in Petra, then Wadi Rum by 4x4 and a night in a Bedouin camp. A 9-day version with the town of As-Salt and 3* superior or 4* hotels, from €1,157 per person.",
        "Jordania en ocho días y en pensión completa: los castillos omeyas del desierto, Jerash y Ajloun, Iraq al-Amir y el mar Muerto, la ruta de los Reyes por Madaba, el monte Nebo y Kerak, una jornada completa en Petra, y el Wadi Rum en 4x4 y una noche en un campamento beduino. Versión de 9 días con la ciudad de As-Salt y hoteles de 3* superior o 4*, desde 1.157 € por persona.",
      ],
      includes: JO_INC(6),
      price: 827, nights: 7, departureFrom: "Francfort", image: "ji3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 30, order: -60000,
      chapters: [
        jo.chapter(["Amman et le nord", "Amman and the north", "Amán y el norte"], ["Châteaux, cité romaine et mer Morte.", "Castles, a Roman city and the Dead Sea.", "Castillos, ciudad romana y mar Muerto."],
          ["ji6", "ji5", "je7"],
          [jo.day(1, T_AMMAN, AMMAN, "ji2"), jo.day(2, T_CASTLES, CASTLES, "ji6"), jo.day(3, T_JERASH, JERASH, "ji5"), jo.day(4, T_IRAQ, IRAQ, "je7")]),
        jo.chapter(["Pétra et le Wadi Rum", "Petra and Wadi Rum", "Petra y Wadi Rum"], ["La route des Rois, la cité rose et le désert.", "The King's Highway, the rose city and the desert.", "La ruta de los Reyes, la ciudad rosa y el desierto."],
          ["ji3", "ji7", "ji1", "ji4"],
          [
            jo.day(5, T_KINGS, KINGS, "jn1"), jo.day(6, [`${T_PETRA[0]} – Wadi Rum`, `${T_PETRA[1]} – Wadi Rum`, `${T_PETRA[2]} – Wadi Rum`], [`${PETRA[0]} En fin de journée, route vers le Wadi Rum et nuit en camp bédouin.`, `${PETRA[1]} In the late afternoon, drive to Wadi Rum and a night in a Bedouin camp.`, `${PETRA[2]} Al final del día, carretera hacia el Wadi Rum y noche en campamento beduino.`], "ji7"),
            jo.day(7, ["Le Wadi Rum en 4x4 – Amman", "Wadi Rum by 4x4 – Amman", "El Wadi Rum en 4x4 – Amán"], ["Safari en 4x4 dans le désert de grès rouge, puis route vers Amman.", "A 4x4 safari in the red sandstone desert, then the drive to Amman.", "Safari en 4x4 por el desierto de arenisca roja y carretera hacia Amán."], "ji1"),
            jo.day(8, T_AMMAN_HOME, AMMAN_HOME, "ji4"),
          ]),
      ],
    }),

    // ───────────── Jordanie 2. Entre nous — 8J/7N ─────────────
    jo.trip({
      slug: "jordanie-entre-nous-salt-petra-mer-morte-8j",
      name: ["Jordanie en petit groupe : As-Salt, Jerash, Pétra, Wadi Rum et la mer Morte", "Jordan in a Small Group: As-Salt, Jerash, Petra, Wadi Rum and the Dead Sea", "Jordania en grupo reducido: As-Salt, Jerash, Petra, Wadi Rum y el mar Muerto"],
      tagline: ["Vingt voyageurs au plus, de la ville ottomane d'As-Salt à la baignade dans la mer Morte", "Twenty travellers at most, from the Ottoman town of As-Salt to a float in the Dead Sea", "Veinte viajeros como máximo, de la ciudad otomana de As-Salt al baño en el mar Muerto"],
      description: [
        "La Jordanie en groupe de 20 personnes au plus et en pension complète : As-Salt, classée à l'Unesco, Jerash et Ajloun, la route des Rois jusqu'à Pétra, une journée entière dans la cité rose, la petite Pétra et une nuit au Wadi Rum, puis le Wadi Araba et la mer Morte. Même circuit en groupe plus large (« Les perles de la Jordanie ») à partir de 1 047 € par personne au départ de Lyon, ou avec les châteaux du désert et une nuit au bord de la mer Morte (« Secrets de Jordanie ») à partir de 1 064 €.",
        "Jordan in a group of 20 at most and on full board: As-Salt, a UNESCO site, Jerash and Ajloun, the King's Highway to Petra, a full day in the rose city, Little Petra and a night in Wadi Rum, then Wadi Araba and the Dead Sea. The same tour in a larger group ('Les perles de la Jordanie') from €1,047 per person departing Lyon, or with the desert castles and a night by the Dead Sea ('Secrets de Jordanie') from €1,064.",
        "Jordania en grupo de 20 personas como máximo y en pensión completa: As-Salt, inscrita en la Unesco, Jerash y Ajloun, la ruta de los Reyes hasta Petra, una jornada completa en la ciudad rosa, la pequeña Petra y una noche en el Wadi Rum, y el Wadi Araba y el mar Muerto. El mismo circuito en grupo más amplio («Les perles de la Jordanie») desde 1.047 € por persona saliendo de Lyon, o con los castillos del desierto y una noche junto al mar Muerto («Secrets de Jordanie») desde 1.064 €.",
      ],
      includes: JO_INC(6),
      price: 1069, nights: 7, departureFrom: "Paris", image: "jn2",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 20, order: -59999,
      chapters: [
        jo.chapter(["Amman, As-Salt et Jerash", "Amman, As-Salt and Jerash", "Amán, As-Salt y Jerash"], ["La ville ottomane et la cité romaine.", "The Ottoman town and the Roman city.", "La ciudad otomana y la ciudad romana."],
          ["ji2", "ji6", "ji5"],
          [jo.day(1, T_AMMAN, AMMAN, "ji2"), jo.day(2, T_SALT, SALT, "ji6"), jo.day(3, T_JERASH, JERASH, "ji5")]),
        jo.chapter(["Pétra, Wadi Rum et la mer Morte", "Petra, Wadi Rum and the Dead Sea", "Petra, Wadi Rum y el mar Muerto"], ["La route des Rois, la cité rose, le désert et la mer de sel.", "The King's Highway, the rose city, the desert and the salt sea.", "La ruta de los Reyes, la ciudad rosa, el desierto y el mar de sal."],
          ["jn2", "jm6", "jm8", "jn7"],
          [jo.day(4, T_KINGS, KINGS, "jn1"), jo.day(5, T_PETRA, PETRA, "jn2"), jo.day(6, T_LITTLE, LITTLE, "jm8"), jo.day(7, T_DS_BACK, DS_BACK, "jn7"), jo.day(8, T_AMMAN_HOME, AMMAN_HOME, "jm6")]),
      ],
    }),

    // ───────────── Jordanie 3. Intimiste — 8J/7N ─────────────
    jo.trip({
      slug: "jordanie-intimiste-petra-wadi-rum-aqaba-8j",
      name: ["Jordanie intimiste : Jerash, Pétra, Wadi Rum et la mer Rouge à Aqaba", "Jordan Up Close: Jerash, Petra, Wadi Rum and the Red Sea at Aqaba", "Jordania íntima: Jerash, Petra, Wadi Rum y el mar Rojo en Aqaba"],
      tagline: ["Une nuit au bord de la mer Morte et une autre au bord de la mer Rouge", "A night by the Dead Sea and another by the Red Sea", "Una noche junto al mar Muerto y otra junto al mar Rojo"],
      description: [
        "La Jordanie en groupe de 20 personnes au plus et en pension complète : Jerash, puis une nuit au bord de la mer Morte, la route des Rois par Madaba et le mont Nebo, une journée entière à Pétra, la petite Pétra et une nuit au Wadi Rum, Aqaba et la mer Rouge, puis Amman et sa citadelle.",
        "Jordan in a group of 20 at most and on full board: Jerash, then a night by the Dead Sea, the King's Highway via Madaba and Mount Nebo, a full day in Petra, Little Petra and a night in Wadi Rum, Aqaba and the Red Sea, then Amman and its citadel.",
        "Jordania en grupo de 20 personas como máximo y en pensión completa: Jerash, y una noche junto al mar Muerto, la ruta de los Reyes por Madaba y el monte Nebo, una jornada completa en Petra, la pequeña Petra y una noche en el Wadi Rum, Aqaba y el mar Rojo, y Amán y su ciudadela.",
      ],
      includes: JO_INC(6),
      price: 1353, nights: 7, departureFrom: "Bruxelles", image: "jn3",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 20, order: -59998,
      chapters: [
        jo.chapter(["Jerash, la mer Morte et Pétra", "Jerash, the Dead Sea and Petra", "Jerash, el mar Muerto y Petra"], ["La cité romaine, la mer de sel et la cité rose.", "The Roman city, the salt sea and the rose city.", "La ciudad romana, el mar de sal y la ciudad rosa."],
          ["jv1", "jn7", "jn1"],
          [
            jo.day(1, T_AMMAN, AMMAN, "ji2"),
            jo.day(2, ["Jerash – la mer Morte", "Jerash – the Dead Sea", "Jerash – el mar Muerto"], ["La cité romaine de Jerash, puis la mer Morte, sa baignade et une nuit sur ses rives.", "The Roman city of Jerash, then the Dead Sea, a float and a night on its shores.", "La ciudad romana de Jerash, y el mar Muerto, un baño y una noche en sus orillas."], "jv1"),
            jo.day(3, ["Madaba, le mont Nebo – Pétra", "Madaba, Mount Nebo – Petra", "Madaba, el monte Nebo – Petra"], ["La route des Rois par Madaba et ses mosaïques et le mont Nebo, puis Pétra.", "The King's Highway via Madaba and its mosaics and Mount Nebo, then Petra.", "La ruta de los Reyes por Madaba y sus mosaicos y el monte Nebo, y Petra."], "jn7"),
            jo.day(4, T_PETRA, PETRA, "jn1"),
          ]),
        jo.chapter(["Wadi Rum, Aqaba et Amman", "Wadi Rum, Aqaba and Amman", "Wadi Rum, Aqaba y Amán"], ["Le désert, la mer Rouge et la capitale.", "The desert, the Red Sea and the capital.", "El desierto, el mar Rojo y la capital."],
          ["jn8", "jn6", "jn3", "jn5"],
          [
            jo.day(5, T_LITTLE, LITTLE, "jn8"),
            jo.day(6, ["Wadi Rum – Aqaba", "Wadi Rum – Aqaba", "Wadi Rum – Aqaba"], ["Route vers Aqaba, sur les rives de la mer Rouge, et temps libre au bord de l'eau.", "Drive to Aqaba, on the shores of the Red Sea, and free time by the water.", "Carretera hacia Aqaba, a orillas del mar Rojo, y tiempo libre junto al agua."], "jn6"),
            jo.day(7, ["Aqaba – Amman", "Aqaba – Amman", "Aqaba – Amán"], ["Route vers Amman, capitale bâtie sur sept collines, et sa citadelle.", "Drive to Amman, a capital built on seven hills, and its citadel.", "Carretera hacia Amán, capital construida sobre siete colinas, y su ciudadela."], "ji6"),
            jo.day(8, T_AMMAN_HOME, AMMAN_HOME, "jn3"),
          ]),
      ],
    }),

    // ───────────── Jordanie 4. Express — 5J/4N ─────────────
    jo.trip({
      slug: "jordanie-express-petra-wadi-rum-5j",
      name: ["Jordanie express : la route des Rois, Pétra et le Wadi Rum", "Jordan Express: the King's Highway, Petra and Wadi Rum", "Jordania exprés: la ruta de los Reyes, Petra y Wadi Rum"],
      tagline: ["Cinq jours pour l'essentiel : la cité rose et le désert", "Five days for the essentials: the rose city and the desert", "Cinco días para lo esencial: la ciudad rosa y el desierto"],
      description: [
        "Un court séjour en pension complète pour l'essentiel de la Jordanie : la route des Rois par Madaba, le mont Nebo et Kerak, une journée entière à Pétra, une nuit dans un camp de bédouins et un safari en 4x4 dans le Wadi Rum, avant le retour à Amman.",
        "A short break on full board for the essentials of Jordan: the King's Highway via Madaba, Mount Nebo and Kerak, a full day in Petra, a night in a Bedouin camp and a 4x4 safari in Wadi Rum, before returning to Amman.",
        "Una escapada corta en pensión completa para lo esencial de Jordania: la ruta de los Reyes por Madaba, el monte Nebo y Kerak, una jornada completa en Petra, una noche en un campamento beduino y un safari en 4x4 por el Wadi Rum, antes del regreso a Amán.",
      ],
      includes: JO_INC(3),
      price: 828, nights: 4, departureFrom: "Paris", image: "jx2",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,family", maxGuests: 30, order: -59997,
      chapters: [
        jo.chapter(["Pétra et le Wadi Rum", "Petra and Wadi Rum", "Petra y Wadi Rum"], ["Quatre nuits pour l'essentiel.", "Four nights for the essentials.", "Cuatro noches para lo esencial."],
          ["jx2", "ji3", "jx4", "ji1"],
          [
            jo.day(1, T_AMMAN, AMMAN, "ji2"), jo.day(2, T_KINGS, KINGS, "jn1"),
            jo.day(3, [`${T_PETRA[0]} – Wadi Rum`, `${T_PETRA[1]} – Wadi Rum`, `${T_PETRA[2]} – Wadi Rum`], [`${PETRA[0]} Le soir, nuit en camp bédouin au Wadi Rum.`, `${PETRA[1]} In the evening, a night in a Bedouin camp in Wadi Rum.`, `${PETRA[2]} Por la noche, noche en campamento beduino en el Wadi Rum.`], "jx2"),
            jo.day(4, ["Le Wadi Rum en 4x4 – Amman", "Wadi Rum by 4x4 – Amman", "El Wadi Rum en 4x4 – Amán"], ["Safari en 4x4 dans le désert, puis retour à Amman.", "A 4x4 safari in the desert, then back to Amman.", "Safari en 4x4 por el desierto y regreso a Amán."], "jx4"),
            jo.day(5, T_AMMAN_HOME, AMMAN_HOME, "ji1"),
          ]),
      ],
    }),

    // ───────────── Jordanie 5. Circuit + séjour mer Morte ou Aqaba — 10J/9N ─────────────
    jo.trip({
      slug: "jordanie-circuit-et-sejour-mer-morte-ou-aqaba-10j",
      name: ["Merveilles de la Jordanie : le grand circuit et deux nuits à la mer Morte ou à Aqaba", "Wonders of Jordan: the Grand Tour and Two Nights at the Dead Sea or Aqaba", "Maravillas de Jordania: el gran circuito y dos noches en el mar Muerto o Aqaba"],
      tagline: ["Sept jours de visites, puis le repos au bord de la mer Morte ou de la mer Rouge", "Seven days of sightseeing, then a rest by the Dead Sea or the Red Sea", "Siete días de visitas y el descanso junto al mar Muerto o al mar Rojo"],
      description: [
        "Le grand circuit jordanien en pension complète (châteaux du désert, Jerash et Ajloun, Iraq al-Amir et la mer Morte, la route des Rois, Pétra, le Wadi Rum et sa nuit en camp), suivi de deux nuits de repos à l'hôtel au bord de la mer Morte. Version avec deux nuits à Aqaba, au bord de la mer Rouge (« Le meilleur de la Jordanie »), à partir de 1 368 € par personne.",
        "The grand Jordanian tour on full board (the desert castles, Jerash and Ajloun, Iraq al-Amir and the Dead Sea, the King's Highway, Petra, Wadi Rum and its night in a camp), followed by two nights' rest at a hotel by the Dead Sea. A version with two nights in Aqaba, on the Red Sea ('Le meilleur de la Jordanie'), from €1,368 per person.",
        "El gran circuito jordano en pensión completa (castillos del desierto, Jerash y Ajloun, Iraq al-Amir y el mar Muerto, la ruta de los Reyes, Petra, el Wadi Rum y su noche en campamento), seguido de dos noches de descanso en un hotel junto al mar Muerto. Versión con dos noches en Aqaba, a orillas del mar Rojo («Le meilleur de la Jordanie»), desde 1.368 € por persona.",
      ],
      includes: JO_INC(8),
      price: 1202, nights: 9, departureFrom: "Paris", image: "jm5",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 30, order: -59996,
      chapters: [
        jo.chapter(["Amman et le nord", "Amman and the north", "Amán y el norte"], ["Châteaux, Jerash et Iraq al-Amir.", "Castles, Jerash and Iraq al-Amir.", "Castillos, Jerash e Iraq al-Amir."],
          ["jv1", "jg1", "ji5"],
          [jo.day(1, T_AMMAN, AMMAN, "jg1"), jo.day(2, T_CASTLES, CASTLES, "jg1"), jo.day(3, T_JERASH, JERASH, "jv1"), jo.day(4, T_IRAQ, IRAQ, "jm5")]),
        jo.chapter(["Pétra et le Wadi Rum", "Petra and Wadi Rum", "Petra y Wadi Rum"], ["La cité rose et le désert.", "The rose city and the desert.", "La ciudad rosa y el desierto."],
          ["jm2", "jm6", "jm7", "jm8"],
          [
            jo.day(5, T_KINGS, KINGS, "jm2"), jo.day(6, [`${T_PETRA[0]} – Wadi Rum`, `${T_PETRA[1]} – Wadi Rum`, `${T_PETRA[2]} – Wadi Rum`], [`${PETRA[0]} Le soir, nuit en camp bédouin.`, `${PETRA[1]} In the evening, a night in a Bedouin camp.`, `${PETRA[2]} Por la noche, noche en campamento beduino.`], "jm6"),
            jo.day(7, ["Le Wadi Rum en 4x4 – Amman", "Wadi Rum by 4x4 – Amman", "El Wadi Rum en 4x4 – Amán"], ["Safari en 4x4 dans le désert, puis route vers Amman.", "A 4x4 safari in the desert, then the drive to Amman.", "Safari en 4x4 por el desierto y carretera hacia Amán."], "jm7"),
          ]),
        jo.chapter(["La mer Morte", "The Dead Sea", "El mar Muerto"], ["Deux jours de repos (ou à Aqaba).", "Two days' rest (or in Aqaba).", "Dos días de descanso (o en Aqaba)."],
          ["jm5", "jg6", "jm1"],
          [
            jo.day(8, ["Amman – la mer Morte", "Amman – the Dead Sea", "Amán – el mar Muerto"], ["Transfert vers la mer Morte et installation à l'hôtel. Journée libre.", "Transfer to the Dead Sea and check in at the hotel. A free day.", "Traslado al mar Muerto e instalación en el hotel. Jornada libre."], "jm5"),
            jo.day(9, ["La mer Morte, journée libre", "The Dead Sea, free day", "El mar Muerto, jornada libre"], ["Journée libre : baignade, boue minérale et spa.", "A free day: floating, mineral mud and spa.", "Jornada libre: baño, barro mineral y spa."], "jg6"),
            jo.day(10, T_AMMAN_HOME, AMMAN_HOME, "jm1"),
          ]),
      ],
    }),

    // ───────────── Jordanie 6. Légendes en privatif — 8J/7N ─────────────
    jo.trip({
      slug: "jordanie-legendes-privatif-petra-mer-morte-8j",
      name: ["Légendes de Jordanie en privé : Amman, Jerash, Pétra, Wadi Rum et la mer Morte", "Legends of Jordan in Private: Amman, Jerash, Petra, Wadi Rum and the Dead Sea", "Leyendas de Jordania en privado: Amán, Jerash, Petra, Wadi Rum y el mar Muerto"],
      tagline: ["Votre guide et votre chauffeur, des hôtels 4* ou 5* et le lever du soleil à dos de chameau", "Your own guide and driver, 4* or 5* hotels and sunrise by camel", "Su guía y su chófer, hoteles de 4* o 5* y el amanecer en camello"],
      description: [
        "Un circuit privé en pension complète : Amman et sa citadelle, Jerash, la route des Rois par Madaba, le mont Nebo et Kerak, une journée entière à Pétra, une nuit au Wadi Rum avec la possibilité d'assister au lever du soleil à dos de chameau, puis une nuit au bord de la mer Morte. Version passant aussi par Aqaba (« Au cœur de la Jordanie ») à partir de 1 579 € par personne.",
        "A private tour on full board: Amman and its citadel, Jerash, the King's Highway via Madaba, Mount Nebo and Kerak, a full day in Petra, a night in Wadi Rum with the option of watching the sunrise by camel, then a night by the Dead Sea. A version that also stops in Aqaba ('Au cœur de la Jordanie') from €1,579 per person.",
        "Un circuito privado en pensión completa: Amán y su ciudadela, Jerash, la ruta de los Reyes por Madaba, el monte Nebo y Kerak, una jornada completa en Petra, una noche en el Wadi Rum con la posibilidad de ver el amanecer en camello, y una noche junto al mar Muerto. Versión que pasa también por Aqaba («Au cœur de la Jordanie») desde 1.579 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé avec guide et chauffeur,6 nuits en hôtels 4* ou 5* et 1 nuit en camp,Pension complète,Visites et entrées du programme",
        "Flights from France,Private tour with guide and driver,6 nights in 4* or 5* hotels and 1 night in a camp,Full board,Visits and entrance fees in the programme",
        "Vuelos desde Francia,Circuito privado con guía y chófer,6 noches en hoteles de 4* o 5* y 1 noche en campamento,Pensión completa,Visitas y entradas del programa",
      ],
      price: 1491, nights: 7, departureFrom: "Paris", image: "ji3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -59995,
      chapters: [
        jo.chapter(["Amman et Jerash", "Amman and Jerash", "Amán y Jerash"], ["La capitale et la cité romaine.", "The capital and the Roman city.", "La capital y la ciudad romana."],
          ["ji6", "ji5", "ji2"],
          [
            jo.day(1, T_AMMAN, AMMAN, "ji2"),
            jo.day(2, ["Amman", "Amman", "Amán"], ["Avec votre guide : la citadelle et le temple d'Hercule, le théâtre romain et le centre-ville.", "With your guide: the citadel and the temple of Hercules, the Roman theatre and downtown.", "Con su guía: la ciudadela y el templo de Hércules, el teatro romano y el centro."], "ji6"),
            jo.day(3, ["Jerash", "Jerash", "Jerash"], ["Jerash, l'un des plus beaux sites gréco-romains du Moyen-Orient.", "Jerash, one of the finest Greco-Roman sites in the Middle East.", "Jerash, uno de los más bellos sitios grecorromanos de Oriente Próximo."], "ji5"),
          ]),
        jo.chapter(["Pétra, Wadi Rum et la mer Morte", "Petra, Wadi Rum and the Dead Sea", "Petra, Wadi Rum y el mar Muerto"], ["La cité rose, le désert et la mer de sel.", "The rose city, the desert and the salt sea.", "La ciudad rosa, el desierto y el mar de sal."],
          ["ji3", "ji7", "ji1", "je7"],
          [
            jo.day(4, T_KINGS, KINGS, "jn1"), jo.day(5, T_PETRA, PETRA, "ji3"),
            jo.day(6, ["Pétra – Wadi Rum", "Petra – Wadi Rum", "Petra – Wadi Rum"], [RUM[0], RUM[1], RUM[2]], "ji1"),
            jo.day(7, ["Lever du soleil à dos de chameau – la mer Morte", "Sunrise by camel – the Dead Sea", "Amanecer en camello – el mar Muerto"], ["Possibilité de voir le soleil se lever sur le désert à dos de chameau, puis route vers la mer Morte et baignade.", "The option of watching the sun rise over the desert by camel, then the drive to the Dead Sea and a float.", "Posibilidad de ver salir el sol sobre el desierto en camello, y carretera hacia el mar Muerto y baño."], "je7"),
            jo.day(8, ["Mer Morte – vol retour", "Dead Sea – flight home", "Mar Muerto – vuelo de regreso"], ["Transfert à l'aéroport d'Amman et envol pour la France.", "Transfer to Amman airport and fly to France.", "Traslado al aeropuerto de Amán y vuelo a Francia."], "ji7"),
          ]),
      ],
    }),

    // ───────────── Jordanie 7. Magnifique Jordanie 5* — 10J/9N privatif ─────────────
    jo.trip({
      slug: "jordanie-magnifique-privatif-5-etoiles-10j",
      name: ["Magnifique Jordanie en privé, hôtels 5* : de la Décapole à la mer Rouge", "Magnificent Jordan in Private, 5* Hotels: from the Decapolis to the Red Sea", "Magnífica Jordania en privado, hoteles de 5*: de la Decápolis al mar Rojo"],
      tagline: ["Umm Qais, Pella, Pétra, le Wadi Rum, Aqaba et la mer Morte, en hôtels de luxe", "Umm Qais, Pella, Petra, Wadi Rum, Aqaba and the Dead Sea, in luxury hotels", "Umm Qais, Pella, Petra, Wadi Rum, Aqaba y el mar Muerto, en hoteles de lujo"],
      description: [
        "Le grand voyage privé en hôtels 5* supérieur : Amman, Jerash et Ajloun, les cités de la Décapole d'Umm Qais et de Pella, la route des Rois, Pétra, une nuit au Wadi Rum, deux nuits à Aqaba et son musée archéologique, puis une dernière nuit au bord de la mer Morte.",
        "The grand private journey in 5* superior hotels: Amman, Jerash and Ajloun, the Decapolis cities of Umm Qais and Pella, the King's Highway, Petra, a night in Wadi Rum, two nights in Aqaba and its archaeological museum, then a last night by the Dead Sea.",
        "El gran viaje privado en hoteles de 5* superior: Amán, Jerash y Ajloun, las ciudades de la Decápolis de Umm Qais y Pella, la ruta de los Reyes, Petra, una noche en el Wadi Rum, dos noches en Aqaba y su museo arqueológico, y una última noche junto al mar Muerto.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé avec guide et chauffeur,8 nuits en hôtels 5* supérieur et 1 nuit en camp,Pension complète,Visites et entrées du programme",
        "Flights from France,Private tour with guide and driver,8 nights in 5* superior hotels and 1 night in a camp,Full board,Visits and entrance fees in the programme",
        "Vuelos desde Francia,Circuito privado con guía y chófer,8 noches en hoteles de 5* superior y 1 noche en campamento,Pensión completa,Visitas y entradas del programa",
      ],
      price: 2200, nights: 9, departureFrom: "Paris", image: "jg7",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,honeymoon,family", maxGuests: 8, order: -59994,
      chapters: [
        jo.chapter(["Amman et la Décapole", "Amman and the Decapolis", "Amán y la Decápolis"], ["Les cités romaines du nord.", "The Roman cities of the north.", "Las ciudades romanas del norte."],
          ["jg1", "ji5", "jv1"],
          [
            jo.day(1, T_AMMAN, AMMAN, "jg1"),
            jo.day(2, ["Amman", "Amman", "Amán"], ["La ville moderne et ses vestiges : la citadelle, le théâtre romain et les souks.", "The modern city and its remains: the citadel, the Roman theatre and the souks.", "La ciudad moderna y sus vestigios: la ciudadela, el teatro romano y los zocos."], "jg1"),
            jo.day(3, T_JERASH, JERASH, "ji5"),
            jo.day(4, ["Umm Qais et Pella", "Umm Qais and Pella", "Umm Qais y Pella"], ["Umm Qais, l'ancienne Gadara, et ses vestiges en basalte face au lac de Tibériade, puis Pella.", "Umm Qais, ancient Gadara, and its basalt ruins overlooking the Sea of Galilee, then Pella.", "Umm Qais, la antigua Gadara, y sus ruinas de basalto frente al lago de Tiberíades, y Pella."], "jv1"),
          ]),
        jo.chapter(["Pétra et le Wadi Rum", "Petra and Wadi Rum", "Petra y Wadi Rum"], ["La cité rose et le désert.", "The rose city and the desert.", "La ciudad rosa y el desierto."],
          ["jg7", "jg8", "ji1"],
          [
            jo.day(5, T_KINGS, KINGS, "jg8"),
            jo.day(6, [`${T_PETRA[0]} – Wadi Rum`, `${T_PETRA[1]} – Wadi Rum`, `${T_PETRA[2]} – Wadi Rum`], [`${PETRA[0]} Le soir, nuit en camp au Wadi Rum.`, `${PETRA[1]} In the evening, a night in a camp in Wadi Rum.`, `${PETRA[2]} Por la noche, noche en campamento en el Wadi Rum.`], "jg7"),
          ]),
        jo.chapter(["Aqaba et la mer Morte", "Aqaba and the Dead Sea", "Aqaba y el mar Muerto"], ["La mer Rouge, puis la mer de sel.", "The Red Sea, then the salt sea.", "El mar Rojo y el mar de sal."],
          ["jg4", "jg6"],
          [
            jo.day(7, ["Wadi Rum – Aqaba", "Wadi Rum – Aqaba", "Wadi Rum – Aqaba"], ["Temps libre dans le désert ou excursion en 4x4, puis Aqaba.", "Free time in the desert or a 4x4 excursion, then Aqaba.", "Tiempo libre en el desierto o excursión en 4x4, y Aqaba."], "jg4"),
            jo.day(8, ["Aqaba", "Aqaba", "Aqaba"], ["Le musée archéologique dans l'ancienne résidence du chérif Hussein, puis temps libre sur la mer Rouge.", "The archaeological museum in the former residence of Sharif Hussein, then free time on the Red Sea.", "El museo arqueológico en la antigua residencia del jerife Hussein y tiempo libre en el mar Rojo."], "jg4"),
            jo.day(9, ["Aqaba – la mer Morte", "Aqaba – the Dead Sea", "Aqaba – el mar Muerto"], ["Route vers la mer Morte, à 427 m sous le niveau de la mer, et baignade.", "Drive to the Dead Sea, 427 m below sea level, and a float.", "Carretera hacia el mar Muerto, a 427 m bajo el nivel del mar, y baño."], "jg6"),
            jo.day(10, ["Mer Morte – vol retour", "Dead Sea – flight home", "Mar Muerto – vuelo de regreso"], ["Transfert à l'aéroport d'Amman et envol pour la France.", "Transfer to Amman airport and fly to France.", "Traslado al aeropuerto de Amán y vuelo a Francia."], "jg6"),
          ]),
      ],
    }),

    // ───────────── Jordanie 8. Étoile de Jordanie — 8J/7N privatif ─────────────
    jo.trip({
      slug: "jordanie-etoile-aqaba-petra-wadi-rum-privatif-8j",
      name: ["Étoile de Jordanie : séjour à Aqaba avec Pétra et le Wadi Rum", "Star of Jordan: a Stay in Aqaba with Petra and Wadi Rum", "Estrella de Jordania: estancia en Aqaba con Petra y Wadi Rum"],
      tagline: ["Une semaine au bord de la mer Rouge, avec deux journées d'excursion privées", "A week by the Red Sea, with two private days out", "Una semana junto al mar Rojo, con dos jornadas de excursión privadas"],
      description: [
        "Un séjour à Aqaba, au bord de la mer Rouge, avec vol direct pour Aqaba et deux grandes excursions privées : le Wadi Rum en 4x4 (environ 2 heures dans le désert) et une journée à Pétra, plus une matinée de découverte d'Aqaba. Hôtel 4* ou 5* en demi-pension, le reste du temps libre pour la plage et la plongée.",
        "A stay in Aqaba, on the Red Sea, with a direct flight to Aqaba and two big private excursions: Wadi Rum by 4x4 (about 2 hours in the desert) and a day in Petra, plus a morning discovering Aqaba. A 4* or 5* hotel on half board, with the rest of the time free for the beach and diving.",
        "Una estancia en Aqaba, a orillas del mar Rojo, con vuelo directo a Aqaba y dos grandes excursiones privadas: el Wadi Rum en 4x4 (unas 2 horas en el desierto) y una jornada en Petra, más una mañana descubriendo Aqaba. Hotel de 4* o 5* en media pensión, y el resto del tiempo libre para la playa y el buceo.",
      ],
      includes: [
        "Vols depuis la France pour Aqaba,Transferts aéroport,7 nuits en hôtel 4* ou 5*,Demi-pension et déjeuners des jours d'excursion,Excursions privées au Wadi Rum et à Pétra",
        "Flights from France to Aqaba,Airport transfers,7 nights in a 4* or 5* hotel,Half board and lunches on excursion days,Private excursions to Wadi Rum and Petra",
        "Vuelos desde Francia a Aqaba,Traslados al aeropuerto,7 noches en hotel de 4* o 5*,Media pensión y almuerzos de los días de excursión,Excursiones privadas a Wadi Rum y Petra",
      ],
      price: 1320, nights: 7, departureFrom: "Paris", image: "jm1",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -59993,
      chapters: [
        jo.chapter(["Aqaba, le Wadi Rum et Pétra", "Aqaba, Wadi Rum and Petra", "Aqaba, Wadi Rum y Petra"], ["La mer Rouge et deux journées d'exploration.", "The Red Sea and two days of exploring.", "El mar Rojo y dos jornadas de exploración."],
          ["jm1", "jg4", "jx4", "ji3"],
          [
            jo.day(1, ["Arrivée à Aqaba", "Arrival in Aqaba", "Llegada a Aqaba"], ["Envol pour Aqaba, accueil, visa et transfert à l'hôtel.", "Flight to Aqaba, welcome, visa and transfer to the hotel.", "Vuelo a Aqaba, recibimiento, visado y traslado al hotel."], "jn3"),
            jo.day(2, ["Aqaba, journée libre", "Aqaba, free day", "Aqaba, jornada libre"], ["Journée libre : plage, snorkeling ou plongée dans la mer Rouge.", "A free day: beach, snorkelling or diving in the Red Sea.", "Jornada libre: playa, esnórquel o buceo en el mar Rojo."], "jg4"),
            jo.day(3, ["Le Wadi Rum en 4x4", "Wadi Rum by 4x4", "El Wadi Rum en 4x4"], ["Environ 2 heures en 4x4 dans le désert du Wadi Rum, déjeuner, puis retour à Aqaba.", "About 2 hours by 4x4 in the Wadi Rum desert, lunch, then back to Aqaba.", "Unas 2 horas en 4x4 por el desierto de Wadi Rum, almuerzo y regreso a Aqaba."], "jx4"),
            jo.day(4, ["Aqaba, journée libre", "Aqaba, free day", "Aqaba, jornada libre"], ["Journée libre au bord de la mer.", "A free day by the sea.", "Jornada libre junto al mar."], "jn6"),
            jo.day(5, ["Journée à Pétra", "A day in Petra", "Una jornada en Petra"], ["Départ matinal pour Pétra et journée dans l'ancienne cité nabatéenne, puis retour à Aqaba.", "An early start for Petra and a day in the old Nabataean city, then back to Aqaba.", "Salida temprana hacia Petra y jornada en la antigua ciudad nabatea, y regreso a Aqaba."], "ji3"),
            jo.day(6, ["Aqaba, journée libre", "Aqaba, free day", "Aqaba, jornada libre"], ["Journée libre.", "A free day.", "Jornada libre."], "jm1"),
            jo.day(7, ["Aqaba", "Aqaba", "Aqaba"], ["Une matinée de découverte d'Aqaba, de son fort mamelouk et de son front de mer.", "A morning discovering Aqaba, its Mamluk fort and its seafront.", "Una mañana descubriendo Aqaba, su fuerte mameluco y su paseo marítimo."], "jn3"),
            jo.day(8, ["Aqaba – vol retour", "Aqaba – flight home", "Aqaba – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "jg4"),
          ]),
      ],
    }),

    // ───────────── Émirats 1. Dubaï, Abu Dhabi, Al Ain, Musandam — 7J/6N ─────────────
    ae.trip({
      slug: "emirats-arabes-unis-dubai-abu-dhabi-al-ain-musandam-7j",
      name: ["Les Émirats en petit groupe : Dubaï, Sharjah, Abu Dhabi, Al Ain et les fjords du Musandam", "The Emirates in a Small Group: Dubai, Sharjah, Abu Dhabi, Al Ain and the Musandam Fjords", "Los Emiratos en grupo reducido: Dubái, Sharjah, Abu Dabi, Al Ain y los fiordos del Musandam"],
      tagline: ["Gratte-ciel, désert, mosquée de marbre et croisière dans les fjords d'Oman", "Skyscrapers, desert, a marble mosque and a cruise in Oman's fjords", "Rascacielos, desierto, mezquita de mármol y crucero por los fiordos de Omán"],
      description: [
        "Les Émirats en groupe de 20 personnes au plus : Dubaï ancienne et moderne, Sharjah et un safari barbecue dans le désert, la grande mosquée Sheikh Zayed d'Abu Dhabi, l'oasis d'Al Ain et une croisière dans les fjords de la péninsule omanaise du Musandam. Trois formules : « Découverte » en hôtels 3* (à partir de 995 €), « Incontournables » (1 295 €) et « Magie » en hôtels 4* avec une nuit dans le désert (1 395 €). Versions de 8 jours à partir de 1 045 €, avec trois nuits de plage au Fairmont Ajman à partir de 1 495 €, ou en privé à partir de 2 082 €.",
        "The Emirates in a group of 20 at most: old and new Dubai, Sharjah and a barbecue desert safari, the Sheikh Zayed Grand Mosque in Abu Dhabi, the oasis of Al Ain and a cruise in the fjords of the Omani Musandam peninsula. Three options: 'Découverte' in 3* hotels (from €995), 'Incontournables' (€1,295) and 'Magie' in 4* hotels with a night in the desert (€1,395). 8-day versions from €1,045, with three beach nights at the Fairmont Ajman from €1,495, or private from €2,082.",
        "Los Emiratos en grupo de 20 personas como máximo: Dubái antigua y moderna, Sharjah y un safari con barbacoa en el desierto, la gran mezquita Sheikh Zayed de Abu Dabi, el oasis de Al Ain y un crucero por los fiordos de la península omaní del Musandam. Tres fórmulas: «Découverte» en hoteles de 3* (desde 995 €), «Incontournables» (1.295 €) y «Magie» en hoteles de 4* con una noche en el desierto (1.395 €). Versiones de 8 días desde 1.045 €, con tres noches de playa en el Fairmont Ajman desde 1.495 €, o en privado desde 2.082 €.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,6 nuits en hôtels 3*,Petits-déjeuners et repas selon programme,Excursions et croisière du programme,Guide francophone",
        "Flights from France,Airport transfers,6 nights in 3* hotels,Breakfasts and meals as per programme,Excursions and cruise in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,6 noches en hoteles de 3*,Desayunos y comidas según programa,Excursiones y crucero del programa,Guía francófono",
      ],
      price: 995, nights: 6, departureFrom: "Francfort", image: "ea6",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,family,groups", maxGuests: 20, order: -58000,
      chapters: [
        ae.chapter(["Dubaï et Sharjah", "Dubai and Sharjah", "Dubái y Sharjah"], ["La ville et le désert.", "The city and the desert.", "La ciudad y el desierto."],
          ["ea4", "ea6", "ea8", "ea1"],
          [
            ae.day(1, ["Arrivée à Dubaï", "Arrival in Dubai", "Llegada a Dubái"], ["Envol pour Dubaï, accueil par un représentant francophone et transfert à l'hôtel.", "Flight to Dubai, welcome by a French-speaking representative and transfer to the hotel.", "Vuelo a Dubái, recibimiento por un representante francófono y traslado al hotel."], "ea4"),
            ae.day(2, T_DUBAI, DUBAI, "ea6"), ae.day(3, T_SAFARI, SAFARI, "ea1"),
          ]),
        ae.chapter(["Abu Dhabi, Al Ain et le Musandam", "Abu Dhabi, Al Ain and Musandam", "Abu Dabi, Al Ain y Musandam"], ["La capitale, l'oasis et les fjords.", "The capital, the oasis and the fjords.", "La capital, el oasis y los fiordos."],
          ["ea3", "ea5", "ea2", "ea7"],
          [
            ae.day(4, ["Dubaï – Abu Dhabi", "Dubai – Abu Dhabi", "Dubái – Abu Dabi"], [ABU[0], ABU[1], ABU[2]], "ea3"),
            ae.day(5, ["Al Ain – Dubaï", "Al Ain – Dubai", "Al Ain – Dubái"], [ALAIN[0], ALAIN[1], ALAIN[2]], "ea2"),
            ae.day(6, ["Croisière dans le Musandam", "A cruise in Musandam", "Crucero por el Musandam"], ["Route vers la péninsule omanaise du Musandam et journée de croisière en boutre dans ses fjords, avec baignade et dauphins parfois au rendez-vous.", "Drive to the Omani Musandam peninsula and a day cruising its fjords by dhow, with swimming and sometimes dolphins.", "Carretera hacia la península omaní del Musandam y jornada de crucero en dhow por sus fiordos, con baño y a veces delfines."], "ea7"),
            ae.day(7, ["Dubaï – vol retour", "Dubai – flight home", "Dubái – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "ea5"),
          ]),
      ],
    }),

    // ───────────── Émirats 2. Il était une fois les Émirats — 6J/5N ─────────────
    ae.trip({
      slug: "emirats-arabes-unis-il-etait-une-fois-6j",
      name: ["Il était une fois les Émirats : Dubaï, le désert, Abu Dhabi et Al Ain", "Once Upon a Time in the Emirates: Dubai, the Desert, Abu Dhabi and Al Ain", "Érase una vez los Emiratos: Dubái, el desierto, Abu Dabi y Al Ain"],
      tagline: ["Cinq nuits en hôtel 4* pour un premier voyage aux Émirats", "Five nights in a 4* hotel for a first trip to the Emirates", "Cinco noches en hotel de 4* para un primer viaje a los Emiratos"],
      description: [
        "Un court voyage en petit groupe de 16 personnes au plus, en hôtel 4* à Dubaï : le Dubaï moderne et le Dubaï authentique, un safari barbecue dans le désert (Sharjah en option), Abu Dhabi et sa grande mosquée, puis l'oasis d'Al Ain.",
        "A short trip in a small group of 16 at most, in a 4* hotel in Dubai: modern and traditional Dubai, a barbecue desert safari (Sharjah as an option), Abu Dhabi and its Grand Mosque, then the oasis of Al Ain.",
        "Un viaje corto en grupo reducido de 16 personas como máximo, en hotel de 4* en Dubái: el Dubái moderno y el auténtico, un safari con barbacoa en el desierto (Sharjah opcional), Abu Dabi y su gran mezquita, y el oasis de Al Ain.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,5 nuits en hôtel 4*,5 petits-déjeuners et 3 déjeuners,Excursions du programme,Guide francophone",
        "Flights from France,Airport transfers,5 nights in a 4* hotel,5 breakfasts and 3 lunches,Excursions in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,5 noches en hotel de 4*,5 desayunos y 3 almuerzos,Excursiones del programa,Guía francófono",
      ],
      price: 1420, nights: 5, departureFrom: "Paris", image: "ef2",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,family,solo", maxGuests: 16, order: -57999,
      chapters: [
        ae.chapter(["Dubaï et ses environs", "Dubai and around", "Dubái y alrededores"], ["Cinq jours depuis Dubaï.", "Five days from Dubai.", "Cinco días desde Dubái."],
          ["ef2", "ef3", "ef4", "ef5", "ef7", "ef8"],
          [
            ae.day(1, ["Arrivée à Dubaï", "Arrival in Dubai", "Llegada a Dubái"], ["Envol pour Dubaï, accueil et transfert à l'hôtel.", "Flight to Dubai, welcome and transfer to the hotel.", "Vuelo a Dubái, recibimiento y traslado al hotel."], "ef3"),
            ae.day(2, T_DUBAI, DUBAI, "ef7"),
            ae.day(3, ["Safari dans le désert", "A desert safari", "Safari en el desierto"], ["Matinée libre (Sharjah en option), puis safari en 4x4 dans les dunes et dîner barbecue au camp.", "A free morning (Sharjah as an option), then a 4x4 safari in the dunes and a barbecue dinner at the camp.", "Mañana libre (Sharjah opcional) y safari en 4x4 por las dunas con cena barbacoa en el campamento."], "ef4"),
            ae.day(4, T_ABU, ABU, "ef5"), ae.day(5, T_ALAIN, ALAIN, "ef8"),
            ae.day(6, ["Dubaï – vol retour", "Dubai – flight home", "Dubái – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "ef2"),
          ]),
      ],
    }),

    // ───────────── Émirats 3. Oman + Dubaï, Entre mers et déserts — 12J/11N ─────────────
    ae.trip({
      slug: "emirats-arabes-unis-oman-entre-mers-et-deserts-12j",
      name: ["Entre mers et déserts : le sultanat d'Oman et les Émirats", "Between Seas and Deserts: the Sultanate of Oman and the Emirates", "Entre mares y desiertos: el sultanato de Omán y los Emiratos"],
      tagline: ["Une semaine à Oman, des fjords de Mascate aux dunes de Wahiba, puis Dubaï et Abu Dhabi", "A week in Oman, from the Muscat coast to the Wahiba dunes, then Dubai and Abu Dhabi", "Una semana en Omán, de la costa de Mascate a las dunas de Wahiba, y Dubái y Abu Dabi"],
      description: [
        "Deux pays en douze jours : à Oman, une croisière le long de la côte de Mascate, la grande mosquée du sultan Qaboos, le Jebel Shams, Nizwa, Jabrin et Bahla, une nuit dans les dunes de Wahiba, le Wadi Bani Khaled, Sur et les tortues de Ras al-Jinz, le Wadi Shab ; puis un vol pour Dubaï, un dîner-croisière, un safari dans le désert, Abu Dhabi et l'oasis d'Al Ain.",
        "Two countries in twelve days: in Oman, a cruise along the Muscat coast, the Sultan Qaboos Grand Mosque, Jebel Shams, Nizwa, Jabrin and Bahla, a night in the Wahiba dunes, Wadi Bani Khaled, Sur and the turtles of Ras al-Jinz, Wadi Shab; then a flight to Dubai, a dinner cruise, a desert safari, Abu Dhabi and the oasis of Al Ain.",
        "Dos países en doce días: en Omán, un crucero por la costa de Mascate, la gran mezquita del sultán Qaboos, el Jebel Shams, Nizwa, Jabrin y Bahla, una noche en las dunas de Wahiba, el Wadi Bani Khaled, Sur y las tortugas de Ras al-Jinz, el Wadi Shab; y un vuelo a Dubái, una cena crucero, un safari en el desierto, Abu Dabi y el oasis de Al Ain.",
      ],
      includes: [
        "Vols depuis la France (aller Mascate; retour Dubaï),Vol Mascate – Dubaï,11 nuits en hôtels 3* et 4* et 1 en campement,Repas selon programme,Visites du programme,Guides francophones",
        "Flights from France (out to Muscat; back from Dubai),Muscat – Dubai flight,11 nights in 3* and 4* hotels and 1 in a desert camp,Meals as per programme,Visits in the programme,French-speaking guides",
        "Vuelos desde Francia (ida a Mascate; regreso desde Dubái),Vuelo Mascate – Dubái,11 noches en hoteles de 3* y 4* y 1 en campamento,Comidas según programa,Visitas del programa,Guías francófonos",
      ],
      price: 2841, nights: 11, departureFrom: "Bruxelles", image: "em4",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 24, order: -57998,
      chapters: [
        ae.chapter(["Le sultanat d'Oman", "The Sultanate of Oman", "El sultanato de Omán"], ["Mascate, les montagnes, le désert et la côte.", "Muscat, the mountains, the desert and the coast.", "Mascate, las montañas, el desierto y la costa."],
          ["em4", "em10", "em1", "em7", "em2"],
          [
            ae.day(1, ["Envol pour Oman", "Flight to Oman", "Vuelo a Omán"], ["Envol à destination de Mascate.", "Flight to Muscat.", "Vuelo con destino a Mascate."], "em10"),
            ae.day(2, ["Arrivée à Mascate", "Arrival in Muscat", "Llegada a Mascate"], ["Formalités de visa à l'aéroport et transfert à l'hôtel.", "Visa formalities at the airport and transfer to the hotel.", "Trámites de visado en el aeropuerto y traslado al hotel."], "em10"),
            ae.day(3, T_DHOW, DHOW, "em5"), ae.day(4, T_JEBEL, JEBEL, "em4"), ae.day(5, T_NIZWA, NIZWA, "em6"), ae.day(6, T_SUR, SUR, "em1"),
            ae.day(7, [`${T_SHAAB[0]} – vol pour Dubaï`, `${T_SHAAB[1]} – flight to Dubai`, `${T_SHAAB[2]} – vuelo a Dubái`], [`${SHAAB[0]} Vol pour Dubaï.`, `${SHAAB[1]} Flight to Dubai.`, `${SHAAB[2]} Vuelo a Dubái.`], "em2"),
          ]),
        ae.chapter(["Les Émirats", "The Emirates", "Los Emiratos"], ["Dubaï, le désert, Abu Dhabi et Al Ain.", "Dubai, the desert, Abu Dhabi and Al Ain.", "Dubái, el desierto, Abu Dabi y Al Ain."],
          ["ea4", "em9", "ea3", "em8"],
          [
            ae.day(8, ["Dubaï et dîner-croisière", "Dubai and a dinner cruise", "Dubái y cena crucero"], [`${DUBAI[0]} Le soir, dîner-croisière.`, `${DUBAI[1]} In the evening, a dinner cruise.`, `${DUBAI[2]} Por la noche, cena crucero.`], "ea4"),
            ae.day(9, ["Safari dans le désert", "A desert safari", "Safari en el desierto"], ["Matinée libre, puis safari en 4x4 dans les dunes et dîner barbecue au camp.", "A free morning, then a 4x4 safari in the dunes and a barbecue dinner at the camp.", "Mañana libre y safari en 4x4 por las dunas con cena barbacoa en el campamento."], "em9"),
            ae.day(10, T_ABU, ABU, "ea3"), ae.day(11, T_ALAIN, ALAIN, "em8"),
            ae.day(12, ["Dubaï – vol retour", "Dubai – flight home", "Dubái – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "ea4"),
          ]),
      ],
    }),

    // ───────────── Israël 1. Le Super Bleu — 8J/7N ─────────────
    il.trip({
      slug: "israel-super-bleu-tel-aviv-massada-jerusalem-galilee-8j",
      name: ["Israël, le grand tour : Tel-Aviv, le Néguev, Massada, Jérusalem et la Galilée", "Israel, the Grand Tour: Tel Aviv, the Negev, Masada, Jerusalem and Galilee", "Israel, la gran vuelta: Tel Aviv, el Néguev, Masada, Jerusalén y Galilea"],
      tagline: ["Du cratère de Mitzpe Ramon au lac de Tibériade, en pension complète", "From the Mitzpe Ramon crater to the Sea of Galilee, on full board", "Del cráter de Mitzpe Ramon al lago de Tiberíades, en pensión completa"],
      description: [
        "Le tour d'Israël en pension complète : Jaffa et Tel-Aviv, le cratère de Mitzpe Ramon dans le Néguev, deux nuits au bord de la mer Morte et la montée en téléphérique à la forteresse de Massada, Qumrân et Ein Gedi, la vieille ville et la nouvelle ville de Jérusalem et le musée d'Israël, Qasr el-Yahud, Tibériade, Capharnaüm et Nazareth, puis Haïfa et ses jardins bahaïs, Saint-Jean-d'Acre et Césarée.",
        "The tour of Israel on full board: Jaffa and Tel Aviv, the Mitzpe Ramon crater in the Negev, two nights by the Dead Sea and the cable car up to Masada fortress, Qumran and Ein Gedi, the old and new cities of Jerusalem and the Israel Museum, Qasr el-Yahud, Tiberias, Capernaum and Nazareth, then Haifa and its Baha'i gardens, Acre and Caesarea.",
        "La vuelta a Israel en pensión completa: Jaffa y Tel Aviv, el cráter de Mitzpe Ramon en el Néguev, dos noches junto al mar Muerto y la subida en teleférico a la fortaleza de Masada, Qumrán y Ein Gedi, la ciudad vieja y la nueva de Jerusalén y el museo de Israel, Qasr el-Yahud, Tiberíades, Cafarnaúm y Nazaret, y Haifa y sus jardines bahaíes, San Juan de Acre y Cesarea.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtels 3* supérieur,Pension complète,Visites du programme,Guide francophone",
        "Flights from France,Airport transfers,7 nights in 3* superior hotels,Full board,Visits in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hoteles de 3* superior,Pensión completa,Visitas del programa,Guía francófono",
      ],
      price: 2853, nights: 7, departureFrom: "Barcelone", image: "is3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 42, order: -57000,
      chapters: [
        il.chapter(["Tel-Aviv, le Néguev et la mer Morte", "Tel Aviv, the Negev and the Dead Sea", "Tel Aviv, el Néguev y el mar Muerto"], ["La ville blanche, le désert et Massada.", "The White City, the desert and Masada.", "La ciudad blanca, el desierto y Masada."],
          ["is7", "is11", "is1", "is10"],
          [
            il.day(1, ["Arrivée à Tel-Aviv", "Arrival in Tel Aviv", "Llegada a Tel Aviv"], ["Envol pour Tel-Aviv et transfert à l'hôtel.", "Flight to Tel Aviv and transfer to the hotel.", "Vuelo a Tel Aviv y traslado al hotel."], "is7"),
            il.day(2, ["Jaffa – Mitzpe Ramon – la mer Morte", "Jaffa – Mitzpe Ramon – the Dead Sea", "Jaffa – Mitzpe Ramon – el mar Muerto"], ["Le vieux port de Jaffa, puis la traversée du Néguev et le grand cratère de Mitzpe Ramon, avant la mer Morte.", "The old port of Jaffa, then across the Negev and the great crater of Mitzpe Ramon, before the Dead Sea.", "El viejo puerto de Jaffa y la travesía del Néguev y el gran cráter de Mitzpe Ramon, antes del mar Muerto."], "is11"),
            il.day(3, ["Massada et la mer Morte", "Masada and the Dead Sea", "Masada y el mar Muerto"], ["Le téléphérique jusqu'à la forteresse de Massada et le palais d'Hérode, puis la baignade dans la mer Morte.", "The cable car up to Masada fortress and Herod's palace, then a float in the Dead Sea.", "El teleférico hasta la fortaleza de Masada y el palacio de Herodes, y el baño en el mar Muerto."], "is10"),
          ]),
        il.chapter(["Jérusalem", "Jerusalem", "Jerusalén"], ["La vieille ville et la nouvelle ville.", "The old city and the new city.", "La ciudad vieja y la nueva."],
          ["is3", "is4", "is9", "ij9"],
          [
            il.day(4, ["Ein Gedi, Qumrân – Jérusalem", "Ein Gedi, Qumran – Jerusalem", "Ein Gedi, Qumrán – Jerusalén"], ["Le long de la mer Morte par Ein Gedi et Qumrân, où furent trouvés les manuscrits, puis la vieille ville de Jérusalem.", "Along the Dead Sea via Ein Gedi and Qumran, where the scrolls were found, then the old city of Jerusalem.", "A lo largo del mar Muerto por Ein Gedi y Qumrán, donde se hallaron los manuscritos, y la ciudad vieja de Jerusalén."], "is3"),
            il.day(5, ["Jérusalem, la nouvelle ville", "Jerusalem, the new city", "Jerusalén, la ciudad nueva"], ["Le musée d'Israël, sa maquette de Jérusalem au temps du Second Temple et le sanctuaire du Livre.", "The Israel Museum, its model of Jerusalem in Second Temple times and the Shrine of the Book.", "El museo de Israel, su maqueta de Jerusalén en tiempos del Segundo Templo y el santuario del Libro."], "is9"),
          ]),
        il.chapter(["La Galilée et la côte", "Galilee and the coast", "Galilea y la costa"], ["Le lac de Tibériade, Haïfa, Acre et Césarée.", "The Sea of Galilee, Haifa, Acre and Caesarea.", "El lago de Tiberíades, Haifa, Acre y Cesarea."],
          ["is8", "is6", "ij6"],
          [
            il.day(6, ["Tibériade, Capharnaüm – Nazareth", "Tiberias, Capernaum – Nazareth", "Tiberíades, Cafarnaúm – Nazaret"], ["La vallée du Jourdain et le site de baptême de Qasr el-Yahud, puis Tibériade, Capharnaüm et Nazareth.", "The Jordan valley and the baptism site of Qasr el-Yahud, then Tiberias, Capernaum and Nazareth.", "El valle del Jordán y el sitio bautismal de Qasr el-Yahud, y Tiberíades, Cafarnaúm y Nazaret."], "is8"),
            il.day(7, ["Haïfa, Acre, Césarée – Tel-Aviv", "Haifa, Acre, Caesarea – Tel Aviv", "Haifa, Acre, Cesarea – Tel Aviv"], ["Haïfa, le mont Carmel et les jardins bahaïs, Saint-Jean-d'Acre, puis Césarée et son port romain, avant Tel-Aviv.", "Haifa, Mount Carmel and the Baha'i gardens, Acre, then Caesarea and its Roman port, before Tel Aviv.", "Haifa, el monte Carmelo y los jardines bahaíes, San Juan de Acre y Cesarea y su puerto romano, antes de Tel Aviv."], "is6"),
            il.day(8, ["Tel-Aviv – vol retour", "Tel Aviv – flight home", "Tel Aviv – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "ij6"),
          ]),
      ],
    }),

    // ───────────── Israël 2. Escapade autour de Jérusalem — 8J/7N ─────────────
    il.trip({
      slug: "israel-escapade-autour-de-jerusalem-8j",
      name: ["Escapade autour de Jérusalem : une semaine dans la ville sainte", "A Break around Jerusalem: a Week in the Holy City", "Escapada en torno a Jerusalén: una semana en la ciudad santa"],
      tagline: ["Sept nuits à Jérusalem, une journée guidée et trois excursions au choix", "Seven nights in Jerusalem, a guided day and three optional excursions", "Siete noches en Jerusalén, una jornada guiada y tres excursiones a elegir"],
      description: [
        "Une semaine en demi-pension dans un hôtel de Jérusalem : une journée guidée depuis le mont Scopus et dans la vieille ville, puis des journées libres ou trois excursions en option (environ 100 € chacune, à régler sur place) : Césarée, Haïfa et Acre ; Nazareth et Tibériade ; Massada et la mer Morte.",
        "A week on half board in a Jerusalem hotel: a guided day from Mount Scopus and through the old city, then free days or three optional excursions (about €100 each, paid locally): Caesarea, Haifa and Acre; Nazareth and Tiberias; Masada and the Dead Sea.",
        "Una semana en media pensión en un hotel de Jerusalén: una jornada guiada desde el monte Scopus y por la ciudad vieja, y jornadas libres o tres excursiones opcionales (unos 100 € cada una, a pagar allí): Cesarea, Haifa y Acre; Nazaret y Tiberíades; Masada y el mar Muerto.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtel de catégorie tourisme,Demi-pension,Une journée de visite guidée",
        "Flights from France,Airport transfers,7 nights in a tourist-class hotel,Half board,A guided day",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hotel de categoría turista,Media pensión,Una jornada de visita guiada",
      ],
      price: 1688, nights: 7, departureFrom: "Marseille", image: "ij9",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,solo,family", maxGuests: 30, order: -56999,
      chapters: [
        il.chapter(["Jérusalem et ses environs", "Jerusalem and around", "Jerusalén y alrededores"], ["Une semaine depuis la ville sainte.", "A week based in the holy city.", "Una semana desde la ciudad santa."],
          ["ij9", "ij3", "ij4", "ij8", "ij7"],
          [
            il.day(1, ["Tel-Aviv – Jérusalem", "Tel Aviv – Jerusalem", "Tel Aviv – Jerusalén"], ["Envol pour Tel-Aviv et transfert à Jérusalem.", "Flight to Tel Aviv and transfer to Jerusalem.", "Vuelo a Tel Aviv y traslado a Jerusalén."], "ij9"),
            il.day(2, ["Jérusalem guidée", "Jerusalem with a guide", "Jerusalén guiada"], ["Panorama depuis le mont Scopus, puis la vieille ville : le mur des Lamentations, le Saint-Sépulcre et les quartiers.", "The view from Mount Scopus, then the old city: the Western Wall, the Holy Sepulchre and the quarters.", "Panorámica desde el monte Scopus y la ciudad vieja: el Muro de las Lamentaciones, el Santo Sepulcro y los barrios."], "ij3"),
            il.day(3, ["Jérusalem, journée libre", "Jerusalem, free day", "Jerusalén, jornada libre"], ["Journée libre pour découvrir la ville à votre rythme.", "A free day to explore the city at your own pace.", "Jornada libre para descubrir la ciudad a su ritmo."], "ij4"),
            il.day(4, ["Césarée, Haïfa et Acre (en option)", "Caesarea, Haifa and Acre (optional)", "Cesarea, Haifa y Acre (opcional)"], ["Journée libre ou excursion sur la côte : Césarée, Haïfa et Saint-Jean-d'Acre.", "A free day or an excursion along the coast: Caesarea, Haifa and Acre.", "Jornada libre o excursión por la costa: Cesarea, Haifa y San Juan de Acre."], "ij6"),
            il.day(5, ["Nazareth et Tibériade (en option)", "Nazareth and Tiberias (optional)", "Nazaret y Tiberíades (opcional)"], ["Journée libre ou excursion en Galilée : Nazareth et Tibériade.", "A free day or an excursion to Galilee: Nazareth and Tiberias.", "Jornada libre o excursión a Galilea: Nazaret y Tiberíades."], "ij7"),
            il.day(6, ["Massada et la mer Morte (en option)", "Masada and the Dead Sea (optional)", "Masada y el mar Muerto (opcional)"], ["Journée libre ou excursion à Massada et à la mer Morte.", "A free day or an excursion to Masada and the Dead Sea.", "Jornada libre o excursión a Masada y el mar Muerto."], "ij8"),
            il.day(7, ["Jérusalem, journée libre", "Jerusalem, free day", "Jerusalén, jornada libre"], ["Dernière journée libre dans la ville sainte.", "A last free day in the holy city.", "Última jornada libre en la ciudad santa."], "ij1"),
            il.day(8, ["Jérusalem – vol retour", "Jerusalem – flight home", "Jerusalén – vuelo de regreso"], ["Transfert à l'aéroport de Tel-Aviv et envol pour la France.", "Transfer to Tel Aviv airport and fly to France.", "Traslado al aeropuerto de Tel Aviv y vuelo a Francia."], "ij5"),
          ]),
      ],
    }),

    // ───────────── Oman. À la découverte d'Oman — 8J/7N ─────────────
    om.trip({
      slug: "oman-decouverte-mascate-nizwa-wahiba-sur-8j",
      name: ["À la découverte d'Oman : Mascate, le Jebel Shams, Nizwa, les dunes de Wahiba et Sur", "Discovering Oman: Muscat, Jebel Shams, Nizwa, the Wahiba Dunes and Sur", "Descubriendo Omán: Mascate, el Jebel Shams, Nizwa, las dunas de Wahiba y Sur"],
      tagline: ["Le tour du sultanat en pension complète, avec une nuit dans le désert et les tortues de Ras al-Jinz", "The tour of the sultanate on full board, with a night in the desert and the turtles of Ras al-Jinz", "La vuelta al sultanato en pensión completa, con una noche en el desierto y las tortugas de Ras al-Jinz"],
      description: [
        "Oman en groupe de 24 personnes au plus et en pension complète : une croisière le long de la côte de Mascate et la visite de la ville, la grande mosquée du sultan Qaboos, le Jebel Shams et Al Hamra, Nizwa, Jabrin et Bahla, une nuit au campement dans les dunes de Wahiba, le Wadi Bani Khaled, Sur et la ponte des tortues à Ras al-Jinz, puis le Wadi Shab et le gouffre de Bimmah. Version de 9 jours avec Barka et le fort d'Al Hazm (« À la rencontre d'Oman ») à partir de 1 929 € par personne.",
        "Oman in a group of 24 at most and on full board: a cruise along the Muscat coast and a tour of the city, the Sultan Qaboos Grand Mosque, Jebel Shams and Al Hamra, Nizwa, Jabrin and Bahla, a night at a camp in the Wahiba dunes, Wadi Bani Khaled, Sur and the nesting turtles of Ras al-Jinz, then Wadi Shab and the Bimmah sinkhole. A 9-day version with Barka and Al Hazm fort ('À la rencontre d'Oman') from €1,929 per person.",
        "Omán en grupo de 24 personas como máximo y en pensión completa: un crucero por la costa de Mascate y la visita de la ciudad, la gran mezquita del sultán Qaboos, el Jebel Shams y Al Hamra, Nizwa, Jabrin y Bahla, una noche en un campamento en las dunas de Wahiba, el Wadi Bani Khaled, Sur y el desove de las tortugas en Ras al-Jinz, y el Wadi Shab y la sima de Bimmah. Versión de 9 días con Barka y el fuerte de Al Hazm («À la rencontre d'Oman») desde 1.929 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtels et 1 en campement,Pension complète,Croisière et visites du programme,Guide francophone",
        "Flights from France,Airport transfers,7 nights in hotels and 1 in a desert camp,Full board,Cruise and visits in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hoteles y 1 en campamento,Pensión completa,Crucero y visitas del programa,Guía francófono",
      ],
      price: 1676, nights: 7, departureFrom: "Marseille", image: "om9",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 24, order: -56000,
      chapters: [
        om.chapter(["Mascate et les montagnes", "Muscat and the mountains", "Mascate y las montañas"], ["La capitale, sa mosquée et le Jebel Shams.", "The capital, its mosque and Jebel Shams.", "La capital, su mezquita y el Jebel Shams."],
          ["om9", "om4", "om13", "om12"],
          [
            om.day(1, ["Envol pour Oman", "Flight to Oman", "Vuelo a Omán"], ["Envol à destination de Mascate.", "Flight to Muscat.", "Vuelo con destino a Mascate."], "om10"),
            om.day(2, ["Arrivée à Mascate", "Arrival in Muscat", "Llegada a Mascate"], ["Formalités de visa à l'aéroport et transfert à l'hôtel.", "Visa formalities at the airport and transfer to the hotel.", "Trámites de visado en el aeropuerto y traslado al hotel."], "om4"),
            om.day(3, T_DHOW, DHOW, "om4"), om.day(4, T_JEBEL, JEBEL, "om13"),
          ]),
        om.chapter(["Le désert et la côte", "The desert and the coast", "El desierto y la costa"], ["Nizwa, Wahiba, Sur et le Wadi Shab.", "Nizwa, Wahiba, Sur and Wadi Shab.", "Nizwa, Wahiba, Sur y el Wadi Shab."],
          ["om11", "om8", "om6", "om5", "om7"],
          [
            om.day(5, T_NIZWA, NIZWA, "om12"), om.day(6, T_SUR, SUR, "om5"), om.day(7, T_SHAAB, SHAAB, "om7"),
            om.day(8, ["Mascate – vol retour", "Muscat – flight home", "Mascate – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], "om17"),
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
