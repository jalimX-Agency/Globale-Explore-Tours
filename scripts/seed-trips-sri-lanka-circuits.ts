// Sri Lanka circuits — 9 journey-format trips for the existing "sri-lanka" destination. Beach
// extensions (Tangerine Beach, Naya Collection Blue Waters / The Eden, Rockwall), private versions
// and the different years are described inside each trip. Prices are per-person "from" prices.
// Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-sri-lanka-circuits.ts
// Requires scripts/upload-images-sri-lanka-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "sri-lanka-incontournables-sigiriya-kandy-galle-10j": ["82158", "82353", "243058", "303779", "242058"],
  "sri-lanka-grand-tour-anuradhapura-udawalawe-12j": ["148718", "149058", "296379", "384398", "296378", "303639", "384478", "405178"],
  "sri-lanka-grand-tour-maldives-15j": ["194118", "384618"],
  "sri-lanka-grand-tour-jaffna-prive-14j": ["401298"],
  "sri-lanka-magie-haputale-yala-12j": ["392099", "417738", "392119", "405598"],
  "sri-lanka-experiences-knuckles-gal-oya-13j": ["85279", "247618", "401118", "303858"],
  "sri-lanka-merveille-ceylan-prive-11j": ["155209"],
  "sri-lanka-aventure-trincomalee-mirissa-prive-12j": ["155211"],
  "sri-lanka-sigiriya-kandy-plage-beruwala-10j": ["405378", "405359", "297158", "297160"],
};

// ── Shared texts ──
const T_FLY: L3 = ["Envol pour le Sri Lanka", "Flight to Sri Lanka", "Vuelo a Sri Lanka"];
const FLY: L3 = ["Envol à destination de Colombo. Dîner et nuit à bord.", "Flight to Colombo. Dinner and night on board.", "Vuelo con destino a Colombo. Cena y noche a bordo."];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_CMB_HOME: L3 = ["Colombo – vol retour", "Colombo – flight home", "Colombo – vuelo de regreso"];
const CMB_HOME: L3 = [
  "Petit-déjeuner, puis transfert à l'aéroport de Colombo et envol pour la France.",
  "Breakfast, then transfer to Colombo airport and fly to France.",
  "Desayuno, traslado al aeropuerto de Colombo y vuelo a Francia.",
];
const T_NEGOMBO: L3 = ["Arrivée à Colombo – Negombo", "Arrival in Colombo – Negombo", "Llegada a Colombo – Negombo"];
const NEGOMBO: L3 = [
  "Accueil à l'aéroport de Colombo et court transfert vers Negombo, sur la côte. Selon l'heure d'arrivée, déjeuner à l'hôtel et temps libre à la plage.",
  "Welcome at Colombo airport and a short transfer to Negombo, on the coast. Depending on your arrival time, lunch at the hotel and free time on the beach.",
  "Recibimiento en el aeropuerto de Colombo y breve traslado a Negombo, en la costa. Según la hora de llegada, almuerzo en el hotel y tiempo libre en la playa.",
];
const T_ANURADHAPURA: L3 = ["Negombo – Anuradhapura", "Negombo – Anuradhapura", "Negombo – Anuradhapura"];
const ANURADHAPURA: L3 = [
  "Le marché aux poissons de Negombo, puis route vers Anuradhapura (environ 170 km). Déjeuner de spécialités sri-lankaises et visite de la première capitale de l'île, classée à l'Unesco : stupas, sculptures et monastères.",
  "Negombo fish market, then drive to Anuradhapura (about 170 km). A lunch of Sri Lankan specialities and a visit to the island's first capital, a UNESCO site: stupas, carvings and monasteries.",
  "El mercado de pescado de Negombo y carretera hacia Anuradhapura (unos 170 km). Almuerzo de especialidades ceilandesas y visita de la primera capital de la isla, inscrita en la Unesco: estupas, esculturas y monasterios.",
];
const T_SIGIRIYA_POLO: L3 = ["Le Rocher du Lion et Polonnaruwa", "Lion Rock and Polonnaruwa", "La Roca del León y Polonnaruwa"];
const SIGIRIYA_POLO: L3 = [
  "Tôt le matin, ascension de la forteresse de Sigiriya (environ 1 000 marches), classée à l'Unesco, et ses fresques des « Demoiselles ». Après le déjeuner, la cité médiévale de Polonnaruwa, ses palais et les trois grands bouddhas de Gal Vihara (visite à vélo possible, à régler sur place).",
  "Early in the morning, climb the fortress of Sigiriya (about 1,000 steps), a UNESCO site, and its frescoes of the 'Maidens'. After lunch, the medieval city of Polonnaruwa, its palaces and the three great Buddhas of Gal Vihara (a bike visit is possible, paid locally).",
  "A primera hora, subida a la fortaleza de Sigiriya (unos 1.000 escalones), inscrita en la Unesco, y sus frescos de las «Doncellas». Después del almuerzo, la ciudad medieval de Polonnaruwa, sus palacios y los tres grandes budas de Gal Vihara (visita en bicicleta posible, a pagar allí).",
];
const T_DAMBULLA_KANDY: L3 = ["Dambulla, Matale – Kandy", "Dambulla, Matale – Kandy", "Dambulla, Matale – Kandy"];
const DAMBULLA_KANDY: L3 = [
  "Le Temple d'Or de Dambulla et ses cinq grottes peintes, le temple hindou de Nalanda Gedige, puis déjeuner dans un jardin d'épices à Matale. À Kandy, le temple de la Dent et sa cérémonie de puja, rythmée par les tambours.",
  "The Golden Temple of Dambulla and its five painted caves, the Hindu temple of Nalanda Gedige, then lunch in a spice garden in Matale. In Kandy, the Temple of the Tooth and its puja ceremony, to the beat of drums.",
  "El Templo de Oro de Dambulla y sus cinco cuevas pintadas, el templo hindú de Nalanda Gedige y almuerzo en un jardín de especias en Matale. En Kandy, el templo del Diente y su ceremonia de puja, al ritmo de los tambores.",
];
const T_KANDY_VILLAGES: L3 = ["Peradeniya et les villages de Kandy", "Peradeniya and the villages around Kandy", "Peradeniya y los pueblos de Kandy"];
const KANDY_VILLAGES: L3 = [
  "Le jardin botanique royal de Peradeniya, puis en tuk-tuk vers trois temples anciens (Gadaladeniya, Embekke, Lankatilaka) et des villages, avec un guide du village. Déjeuner local et dégustation d'en-cas sri-lankais.",
  "The Royal Botanical Gardens of Peradeniya, then by tuk-tuk to three old temples (Gadaladeniya, Embekke, Lankatilaka) and villages, with a local village guide. A local lunch and a tasting of Sri Lankan snacks.",
  "El jardín botánico real de Peradeniya y en tuk-tuk hacia tres templos antiguos (Gadaladeniya, Embekke, Lankatilaka) y pueblos, con un guía del lugar. Almuerzo local y degustación de tentempiés ceilandeses.",
];
const T_TEA: L3 = ["En train vers Nuwara Eliya", "By train to Nuwara Eliya", "En tren hacia Nuwara Eliya"];
const TEA: L3 = [
  "Un trajet en train local à travers les montagnes, puis la visite d'une plantation et d'une fabrique de thé de Ceylan. Fin de journée à Nuwara Eliya, la ville la plus haute de l'île, au milieu des théiers.",
  "A local train ride through the mountains, then a visit to a Ceylon tea plantation and factory. The day ends in Nuwara Eliya, the island's highest town, among the tea gardens.",
  "Un trayecto en tren local por las montañas y la visita de una plantación y fábrica de té de Ceilán. Final del día en Nuwara Eliya, la ciudad más alta de la isla, entre los cultivos de té.",
];
const T_UDAWALAWE: L3 = ["Ella – safari à Udawalawe", "Ella – safari in Udawalawe", "Ella – safari en Udawalawe"];
const UDAWALAWE: L3 = [
  "Halte à Ella et aux chutes de Ravana, puis le parc national d'Udawalawe : environ deux heures de safari parmi les éléphants d'Asie, les buffles, les crocodiles et les oiseaux.",
  "A stop in Ella and at Ravana Falls, then Udawalawe National Park: about two hours on safari among Asian elephants, buffalo, crocodiles and birds.",
  "Parada en Ella y en las cascadas de Ravana, y el parque nacional de Udawalawe: unas dos horas de safari entre elefantes asiáticos, búfalos, cocodrilos y aves.",
];
const T_SOUTH: L3 = ["Les éléphants orphelins, Weligama et Galle", "The orphaned elephants, Weligama and Galle", "Los elefantes huérfanos, Weligama y Galle"];
const SOUTH: L3 = [
  "L'Elephant Transit Home, qui soigne les éléphanteaux avant leur retour dans le parc, puis la côte : déjeuner de poissons et crevettes à Weligama, les pêcheurs sur échasses, la pagode de la Paix d'Unawatuna et la ville fortifiée de Galle, classée à l'Unesco.",
  "The Elephant Transit Home, which cares for young elephants before they return to the park, then the coast: a fish and prawn lunch in Weligama, the stilt fishermen, the Peace Pagoda at Unawatuna and the fortified town of Galle, a UNESCO site.",
  "El Elephant Transit Home, que cuida a las crías de elefante antes de devolverlas al parque, y la costa: almuerzo de pescado y gambas en Weligama, los pescadores sobre zancos, la pagoda de la Paz de Unawatuna y la ciudad fortificada de Galle, inscrita en la Unesco.",
];
const T_VEDDA: L3 = ["Mahiyangana et le peuple Vedda", "Mahiyangana and the Vedda people", "Mahiyangana y el pueblo vedda"];
const VEDDA: L3 = [
  "Route vers Mahiyangana, ville bouddhiste aux paysages verdoyants, et rencontre avec les Veddas, descendants des premiers habitants de l'île : un moment d'échange sur leur mode de vie.",
  "Drive to Mahiyangana, a Buddhist town in green countryside, and a meeting with the Veddas, descendants of the island's first inhabitants: a moment of exchange about their way of life.",
  "Carretera hacia Mahiyangana, ciudad budista entre paisajes verdes, y encuentro con los veddas, descendientes de los primeros habitantes de la isla: un momento de intercambio sobre su modo de vida.",
];
const T_YALA: L3 = ["Safari dans le parc de Yala", "Safari in Yala National Park", "Safari en el parque de Yala"];
const YALA: L3 = [
  "Route vers Tissamaharama, puis safari en jeep l'après-midi dans le parc national de Yala, le plus connu de l'île pour sa faune : éléphants, buffles, cerfs, oiseaux et, avec de la chance, le léopard.",
  "Drive to Tissamaharama, then an afternoon jeep safari in Yala National Park, the island's best-known park for wildlife: elephants, buffalo, deer, birds and, with luck, the leopard.",
  "Carretera hacia Tissamaharama y safari en jeep por la tarde en el parque nacional de Yala, el más conocido de la isla por su fauna: elefantes, búfalos, ciervos, aves y, con suerte, el leopardo.",
];
const T_VILLAGE_BLESSING: L3 = ["Village de Sigiriya et Temple d'Or", "Sigiriya village and the Golden Temple", "Pueblo de Sigiriya y Templo de Oro"];
const VILLAGE_BLESSING: L3 = [
  "Promenade dans un village voisin, bénédiction d'un moine dans un temple local et pause dans un petit salon de thé, avec un thé ou une noix de coco fraîche. L'après-midi, le Temple d'Or de Dambulla et ses grottes peintes.",
  "A walk in a nearby village, a blessing from a monk in a local temple and a break in a small tea house, with tea or a fresh coconut. In the afternoon, the Golden Temple of Dambulla and its painted caves.",
  "Paseo por un pueblo vecino, bendición de un monje en un templo local y pausa en una pequeña casa de té, con un té o un coco recién cogido. Por la tarde, el Templo de Oro de Dambulla y sus cuevas pintadas.",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "sri-lanka",
    imagePrefix: "srilanka",
    season: { label: ["Déc à avril", "Dec to April", "Dic a abr"], months: "december,january,february,march,april" },
  });
  // The Trincomalee circuit visits both coasts, so it works all year.
  const yearRound = circuitBuilders({
    destinationSlug: "sri-lanka",
    imagePrefix: "srilanka",
    season: { label: ["Toute l'année", "All year", "Todo el año"], months: "january,february,march,april,may,june,july,august,september,october,november,december" },
  });

  // Days 1–10 of the Grand Tour, shared with the Maldives version.
  const grandTourStart = (lastNight: L3) => [
    chapter(["Negombo et les cités anciennes", "Negombo and the ancient cities", "Negombo y las ciudades antiguas"],
      ["D'Anuradhapura au Rocher du Lion et à Polonnaruwa.", "From Anuradhapura to Lion Rock and Polonnaruwa.", "De Anuradhapura a la Roca del León y Polonnaruwa."],
      ["gt5", "jf3", "jf1", "jf5"],
      [
        day(1, T_FLY, FLY, "jf9"), day(2, T_NEGOMBO, NEGOMBO, "jf2"), day(3, T_ANURADHAPURA, ANURADHAPURA, "jf3"),
        day(4, ["Ritigala – Sigiriya", "Ritigala – Sigiriya", "Ritigala – Sigiriya"], ["Arrêt au monastère en ruine de Ritigala, perdu dans une forêt protégée, puis Sigiriya. L'après-midi, spectacle de danses traditionnelles en costumes d'époque. En option, petit-déjeuner à l'aube dans le parc de Wilpattu, terre des léopards.", "A stop at the ruined monastery of Ritigala, lost in a protected forest, then Sigiriya. In the afternoon, a show of traditional dances in period costume. As an option, breakfast at dawn in Wilpattu park, leopard country.", "Parada en el monasterio en ruinas de Ritigala, perdido en un bosque protegido, y Sigiriya. Por la tarde, espectáculo de danzas tradicionales con trajes de época. Opcional: desayuno al amanecer en el parque de Wilpattu, tierra de leopardos."], "jf5"),
        day(5, T_SIGIRIYA_POLO, SIGIRIYA_POLO, "jf1"),
      ]),
    chapter(["Kandy et les hautes terres", "Kandy and the hill country", "Kandy y las tierras altas"],
      ["Temples, jardins, train et plantations de thé.", "Temples, gardens, a train and tea plantations.", "Templos, jardines, tren y plantaciones de té."],
      ["gt1", "gt2", "jf7", "gm5"],
      [day(6, T_DAMBULLA_KANDY, DAMBULLA_KANDY, "gm5"), day(7, T_KANDY_VILLAGES, KANDY_VILLAGES, "jf7"), day(8, T_TEA, TEA, "gt1"), day(9, T_UDAWALAWE, UDAWALAWE, "jf6")]),
    chapter(["La côte sud", "The south coast", "La costa sur"],
      ["Des éléphanteaux d'Udawalawe aux remparts de Galle.", "From the young elephants of Udawalawe to the ramparts of Galle.", "De las crías de elefante de Udawalawe a las murallas de Galle."],
      ["jf8", "in6", "jf9"],
      [day(10, T_SOUTH, [SOUTH[0] + " " + lastNight[0], SOUTH[1] + " " + lastNight[1], SOUTH[2] + " " + lastNight[2]], "jf8")]),
  ];

  const journeyTrips = [
    // ───────────── 1. Les Incontournables du Sri Lanka — 10J/7N ─────────────
    trip({
      slug: "sri-lanka-incontournables-sigiriya-kandy-galle-10j",
      name: ["Les incontournables du Sri Lanka : Sigiriya, Kandy, le thé et Galle", "Sri Lanka Highlights: Sigiriya, Kandy, Tea Country and Galle", "Lo esencial de Sri Lanka: Sigiriya, Kandy, el té y Galle"],
      tagline: ["Le Triangle culturel, les hautes terres et la côte en dix jours, en pension complète", "The Cultural Triangle, the hill country and the coast in ten days, full board", "El Triángulo Cultural, las tierras altas y la costa en diez días, en pensión completa"],
      description: [
        "Le Sri Lanka essentiel, en groupe de 16 personnes au plus et en pension complète : Polonnaruwa, l'ascension du Rocher du Lion, une matinée dans les rizières (mini-tracteur, offrande aux moines, pirogue), le Temple d'Or de Dambulla et un safari en jeep au Hurulu Eco Park, puis Matale et ses épices, Kandy et le temple de la Dent, les chutes de Ramboda et une fabrique de thé à Nuwara Eliya, Galle et Colombo. Avec 3 nuits de plage en fin de circuit : Tangerine Beach 4* à partir de 1 808 € par personne, Naya Collection Blue Waters 5* à partir de 1 918 € ; version privative à partir de 1 909 €.",
        "The essential Sri Lanka, in a group of 16 at most and full board: Polonnaruwa, the climb up Lion Rock, a morning in the rice fields (mini-tractor, offering to the monks, dugout canoe), the Golden Temple of Dambulla and a jeep safari in Hurulu Eco Park, then Matale and its spices, Kandy and the Temple of the Tooth, Ramboda Falls and a tea factory in Nuwara Eliya, Galle and Colombo. With 3 beach nights at the end: Tangerine Beach 4* from €1,808 per person, Naya Collection Blue Waters 5* from €1,918; private version from €1,909.",
        "Lo esencial de Sri Lanka, en grupo de 16 personas como máximo y en pensión completa: Polonnaruwa, la subida a la Roca del León, una mañana en los arrozales (minitractor, ofrenda a los monjes, piragua), el Templo de Oro de Dambulla y un safari en jeep en el Hurulu Eco Park, y Matale y sus especias, Kandy y el templo del Diente, las cascadas de Ramboda y una fábrica de té en Nuwara Eliya, Galle y Colombo. Con 3 noches de playa al final: Tangerine Beach 4* desde 1.808 € por persona, Naya Collection Blue Waters 5* desde 1.918 €; versión privada desde 1.909 €.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtels 3* et 4*,Pension complète,Visites et excursions du programme,Guide francophone",
        "Flights from France,Airport transfers,7 nights in 3* and 4* hotels,Full board,Visits and excursions in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hoteles de 3* y 4*,Pensión completa,Visitas y excursiones del programa,Guía francófono",
      ],
      price: 1443, nights: 7, departureFrom: "Paris", image: "in1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 16, order: -82000,
      chapters: [
        chapter(["Le Triangle culturel", "The Cultural Triangle", "El Triángulo Cultural"],
          ["Polonnaruwa, le Rocher du Lion, Dambulla et un safari parmi les éléphants.", "Polonnaruwa, Lion Rock, Dambulla and a safari among the elephants.", "Polonnaruwa, la Roca del León, Dambulla y un safari entre elefantes."],
          ["in1", "gt5", "mg4", "av3"],
          [
            day(1, T_FLY, FLY, "in6"),
            day(2, ["Arrivée à Colombo – Sigiriya", "Arrival in Colombo – Sigiriya", "Llegada a Colombo – Sigiriya"], ["Accueil à l'aéroport de Colombo et route vers Sigiriya (environ 180 km). Déjeuner à l'hôtel et après-midi libre.", "Welcome at Colombo airport and drive to Sigiriya (about 180 km). Lunch at the hotel and a free afternoon.", "Recibimiento en el aeropuerto de Colombo y carretera hacia Sigiriya (unos 180 km). Almuerzo en el hotel y tarde libre."], "in1"),
            day(3, ["Polonnaruwa et Habarana", "Polonnaruwa and Habarana", "Polonnaruwa y Habarana"], ["La cité historique de Polonnaruwa, classée à l'Unesco, son palais royal et les bouddhas géants de Gal Vihara. L'après-midi, visite d'une école à Habarana (hors vacances scolaires).", "The historic city of Polonnaruwa, a UNESCO site, its royal palace and the giant Buddhas of Gal Vihara. In the afternoon, a visit to a school in Habarana (outside school holidays).", "La ciudad histórica de Polonnaruwa, inscrita en la Unesco, su palacio real y los budas gigantes de Gal Vihara. Por la tarde, visita de una escuela en Habarana (fuera de vacaciones escolares)."], "mg4"),
            day(4, ["Le Rocher du Lion et la vie au village", "Lion Rock and village life", "La Roca del León y la vida en el pueblo"], ["Dès l'aube, l'ascension du Rocher du Lion, ses jardins et ses fresques. Puis les rizières d'Audangawa en mini-tracteur, l'offrande du Dhane et le déjeuner des moines au temple du village, une balade en pirogue sur le lac d'Hiriwaduna et, le soir, des danses traditionnelles.", "At dawn, the climb up Lion Rock, its gardens and frescoes. Then the rice fields of Audangawa by mini-tractor, the Dhane offering and the monks' lunch at the village temple, a dugout canoe ride on Hiriwaduna lake and, in the evening, traditional dances.", "Al amanecer, la subida a la Roca del León, sus jardines y frescos. Después, los arrozales de Audangawa en minitractor, la ofrenda del Dhane y el almuerzo de los monjes en el templo del pueblo, un paseo en piragua por el lago de Hiriwaduna y, por la noche, danzas tradicionales."], "in1"),
            day(5, ["Dambulla et safari au Hurulu Eco Park", "Dambulla and a safari in Hurulu Eco Park", "Dambulla y safari en el Hurulu Eco Park"], ["Le Temple d'Or de Dambulla, ses cinq grottes et ses 150 statues du Bouddha. Démonstration de cuisine aux épices et déjeuner sri-lankais, puis safari en jeep au Hurulu Eco Park, à la rencontre des éléphants sauvages.", "The Golden Temple of Dambulla, its five caves and 150 statues of the Buddha. A spice-cooking demonstration and a Sri Lankan lunch, then a jeep safari in Hurulu Eco Park to see wild elephants.", "El Templo de Oro de Dambulla, sus cinco cuevas y sus 150 estatuas de Buda. Demostración de cocina con especias y almuerzo ceilandés, y safari en jeep en el Hurulu Eco Park, al encuentro de los elefantes salvajes."], "av3"),
          ]),
        chapter(["Kandy et les hautes terres", "Kandy and the hill country", "Kandy y las tierras altas"],
          ["Les épices de Matale, le temple de la Dent et la route du thé.", "The spices of Matale, the Temple of the Tooth and the tea road.", "Las especias de Matale, el templo del Diente y la ruta del té."],
          ["in2", "in3", "in4", "ex2"],
          [
            day(6, ["Matale – Kandy", "Matale – Kandy", "Matale – Kandy"], ["Le temple de Nalanda Gedige, puis Matale : fruits tropicaux, jardin d'épices, initiation au massage ayurvédique et atelier de batik. En fin de journée, le temple de la Dent à Kandy.", "The temple of Nalanda Gedige, then Matale: tropical fruit, a spice garden, an introduction to Ayurvedic massage and a batik workshop. In the late afternoon, the Temple of the Tooth in Kandy.", "El templo de Nalanda Gedige y Matale: frutas tropicales, jardín de especias, iniciación al masaje ayurvédico y taller de batik. Al final del día, el templo del Diente en Kandy."], "in2"),
            day(7, ["Ramboda – Nuwara Eliya", "Ramboda – Nuwara Eliya", "Ramboda – Nuwara Eliya"], ["Route vers les chutes de Ramboda et les plantations de thé, puis Nuwara Eliya, à 1 880 m d'altitude, et la visite d'une plantation et de sa fabrique. Le court trajet en train de Kandy à Gampola est suspendu tant que la ligne est en travaux.", "Drive to Ramboda Falls and the tea plantations, then Nuwara Eliya, at 1,880 m, and a visit to a plantation and its factory. The short train ride from Kandy to Gampola is suspended while the line is being repaired.", "Carretera hacia las cascadas de Ramboda y las plantaciones de té, y Nuwara Eliya, a 1.880 m de altitud, con la visita de una plantación y su fábrica. El breve trayecto en tren de Kandy a Gampola está suspendido mientras duran las obras en la línea."], "in3"),
          ]),
        chapter(["Galle et Colombo", "Galle and Colombo", "Galle y Colombo"],
          ["L'océan Indien, la ville fortifiée de Galle et la capitale.", "The Indian Ocean, the fortified town of Galle and the capital.", "El océano Índico, la ciudad fortificada de Galle y la capital."],
          ["in6", "ex6", "in5"],
          [
            day(8, ["Nuwara Eliya – Galle", "Nuwara Eliya – Galle", "Nuwara Eliya – Galle"], ["Cap au sud vers Galle, cité fortifiée classée à l'Unesco, marquée par les Portugais, les Hollandais et les Anglais. Temps libre, déjeuner local, puis installation à l'hôtel de plage.", "South to Galle, a fortified town listed by UNESCO, shaped by the Portuguese, the Dutch and the British. Free time, a local lunch, then check in at the beach hotel.", "Rumbo al sur hacia Galle, ciudad fortificada inscrita en la Unesco, marcada por portugueses, holandeses e ingleses. Tiempo libre, almuerzo local e instalación en el hotel de playa."], "ex6"),
            day(9, ["Colombo et le temple de Kelaniya – vol retour", "Colombo and Kelaniya temple – flight home", "Colombo y el templo de Kelaniya – vuelo de regreso"], ["Déjeuner à l'hôtel, puis route vers Colombo pour un tour de ville et le temple de Kelaniya, l'un des plus sacrés du pays. Transfert à l'aéroport et envol pour la France.", "Lunch at the hotel, then drive to Colombo for a city tour and Kelaniya temple, one of the most sacred in the country. Transfer to the airport and fly to France.", "Almuerzo en el hotel y carretera hacia Colombo para una visita de la ciudad y el templo de Kelaniya, uno de los más sagrados del país. Traslado al aeropuerto y vuelo a Francia."], "in5"),
            day(10, T_HOME, HOME, "in4"),
          ]),
      ],
    }),

    // ───────────── 2. Grand tour du Sri Lanka — 12J/9N ─────────────
    trip({
      slug: "sri-lanka-grand-tour-anuradhapura-udawalawe-12j",
      name: ["Grand tour du Sri Lanka : cités anciennes, Kandy, thé et safari à Udawalawe", "Grand Tour of Sri Lanka: Ancient Cities, Kandy, Tea and an Udawalawe Safari", "Gran tour de Sri Lanka: ciudades antiguas, Kandy, té y safari en Udawalawe"],
      tagline: ["D'Anuradhapura à Galle, le tour complet de l'île en pension complète", "From Anuradhapura to Galle, the full tour of the island, full board", "De Anuradhapura a Galle, la vuelta completa a la isla en pensión completa"],
      description: [
        "Le tour de l'île en groupe de 16 personnes au plus et en pension complète : Negombo, Anuradhapura, le monastère de Ritigala, le Rocher du Lion et Polonnaruwa, Dambulla, Matale et Kandy, les temples et villages autour de Kandy en tuk-tuk, le train et le thé à Nuwara Eliya, Ella et un safari à Udawalawe, puis les éléphanteaux de l'Elephant Transit Home et la côte sud jusqu'à Galle. Version privative à partir de 2 134 € par personne ; avec 3 nuits de plage (15 jours) à partir de 2 252 € (Tangerine Beach 4*) ou 2 369 € (Naya Collection Blue Waters 5*) ; version 2027 en 14 jours à partir de 2 278 €, ou 17 jours avec plage à partir de 2 530 €.",
        "The tour of the island in a group of 16 at most and full board: Negombo, Anuradhapura, Ritigala monastery, Lion Rock and Polonnaruwa, Dambulla, Matale and Kandy, the temples and villages around Kandy by tuk-tuk, the train and tea in Nuwara Eliya, Ella and a safari in Udawalawe, then the young elephants of the Elephant Transit Home and the south coast to Galle. Private version from €2,134 per person; with 3 beach nights (15 days) from €2,252 (Tangerine Beach 4*) or €2,369 (Naya Collection Blue Waters 5*); 2027 version in 14 days from €2,278, or 17 days with beach from €2,530.",
        "La vuelta a la isla en grupo de 16 personas como máximo y en pensión completa: Negombo, Anuradhapura, el monasterio de Ritigala, la Roca del León y Polonnaruwa, Dambulla, Matale y Kandy, los templos y pueblos de Kandy en tuk-tuk, el tren y el té en Nuwara Eliya, Ella y un safari en Udawalawe, y las crías del Elephant Transit Home y la costa sur hasta Galle. Versión privada desde 2.134 € por persona; con 3 noches de playa (15 días) desde 2.252 € (Tangerine Beach 4*) o 2.369 € (Naya Collection Blue Waters 5*); versión 2027 en 14 días desde 2.278 €, o 17 días con playa desde 2.530 €.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,9 nuits en hôtels 3* ou 4*,Pension complète,Visites et safari du programme,Guide francophone",
        "Flights from France,Airport transfers,9 nights in 3* or 4* hotels,Full board,Visits and safari in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,9 noches en hoteles de 3* o 4*,Pensión completa,Visitas y safari del programa,Guía francófono",
      ],
      price: 1961, nights: 9, departureFrom: "Paris", image: "gt1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 16, order: -81999,
      chapters: [
        ...grandTourStart(["Nuit à l'hôtel sur la côte.", "Night at a hotel on the coast.", "Noche en un hotel de la costa."]),
        chapter(["Retour", "Home", "Regreso"],
          ["Dernier petit-déjeuner face à l'océan.", "A last breakfast by the ocean.", "Último desayuno frente al océano."],
          ["jf9"],
          [day(11, T_CMB_HOME, CMB_HOME, "jf9"), day(12, T_HOME, HOME, "gt2")]),
      ],
    }),

    // ───────────── 3. Grand tour + Maldives — 15J/12N ─────────────
    trip({
      slug: "sri-lanka-grand-tour-maldives-15j",
      name: ["Grand tour du Sri Lanka et séjour aux Maldives", "Grand Tour of Sri Lanka and a Stay in the Maldives", "Gran tour de Sri Lanka y estancia en Maldivas"],
      tagline: ["Dix jours sur l'île de Ceylan, puis trois nuits en tout compris sur un atoll", "Ten days on the island of Ceylon, then three all-inclusive nights on an atoll", "Diez días en la isla de Ceilán y tres noches con todo incluido en un atolón"],
      description: [
        "Le Grand tour du Sri Lanka en groupe de 16 personnes au plus (Anuradhapura, Rocher du Lion, Polonnaruwa, Dambulla, Kandy, le train et le thé, safari à Udawalawe, Galle), suivi d'un vol pour Malé et de trois nuits à l'Adaaran Select Hudhuran Fushi 4*, sur l'île de Lhohifushi, en villa jardin et formule tout compris premium. Transferts en bateau rapide (environ 25 minutes). Version 17 jours à partir de 4 075 € par personne.",
        "The Grand Tour of Sri Lanka in a group of 16 at most (Anuradhapura, Lion Rock, Polonnaruwa, Dambulla, Kandy, the train and tea, a safari in Udawalawe, Galle), followed by a flight to Malé and three nights at the Adaaran Select Hudhuran Fushi 4*, on Lhohifushi island, in a garden villa on a premium all-inclusive basis. Speedboat transfers (about 25 minutes). 17-day version from €4,075 per person.",
        "El Gran tour de Sri Lanka en grupo de 16 personas como máximo (Anuradhapura, Roca del León, Polonnaruwa, Dambulla, Kandy, el tren y el té, safari en Udawalawe, Galle), seguido de un vuelo a Malé y tres noches en el Adaaran Select Hudhuran Fushi 4*, en la isla de Lhohifushi, en villa jardín con todo incluido premium. Traslados en lancha rápida (unos 25 minutos). Versión de 17 días desde 4.075 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Vol Colombo – Malé,Transferts en bateau rapide,9 nuits au Sri Lanka et 3 aux Maldives,Pension complète puis tout compris,Visites et safari du programme,Guide francophone au Sri Lanka",
        "Flights from France,Colombo – Malé flight,Speedboat transfers,9 nights in Sri Lanka and 3 in the Maldives,Full board then all-inclusive,Visits and safari in the programme,French-speaking guide in Sri Lanka",
        "Vuelos desde Francia,Vuelo Colombo – Malé,Traslados en lancha rápida,9 noches en Sri Lanka y 3 en Maldivas,Pensión completa y después todo incluido,Visitas y safari del programa,Guía francófono en Sri Lanka",
      ],
      price: 3738, nights: 12, departureFrom: "Francfort", image: "gm3",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,honeymoon,family", maxGuests: 16, order: -81998,
      chapters: [
        ...grandTourStart(["Nuit à Galle.", "Night in Galle.", "Noche en Galle."]),
        chapter(["Les Maldives", "The Maldives", "Maldivas"],
          ["Trois nuits sur une île de l'atoll de Malé Nord.", "Three nights on an island in North Malé Atoll.", "Tres noches en una isla del atolón de Malé Norte."],
          ["gm1", "gm2", "gm3"],
          [
            day(11, ["Colombo – Malé", "Colombo – Malé", "Colombo – Malé"], ["Vol de Colombo vers Malé, puis bateau rapide (environ 25 minutes) jusqu'à l'Adaaran Select Hudhuran Fushi, sur l'île de Lhohifushi. Installation en villa jardin, formule tout compris premium.", "Flight from Colombo to Malé, then a speedboat (about 25 minutes) to the Adaaran Select Hudhuran Fushi, on Lhohifushi island. Check in to a garden villa, premium all-inclusive.", "Vuelo de Colombo a Malé y lancha rápida (unos 25 minutos) hasta el Adaaran Select Hudhuran Fushi, en la isla de Lhohifushi. Instalación en villa jardín, todo incluido premium."], "gm1"),
            day(12, ["Maldives, journée libre", "Maldives, free day", "Maldivas, jornada libre"], ["Plage, lagon et activités de l'île : canoë, paddle, catamaran, volley ou pêche au coucher du soleil (certaines en supplément).", "Beach, lagoon and island activities: canoeing, paddleboarding, catamaran, volleyball or sunset fishing (some at extra cost).", "Playa, laguna y actividades de la isla: canoa, pádel surf, catamarán, vóley o pesca al atardecer (algunas con suplemento)."], "gm2"),
            day(13, ["Maldives, journée libre", "Maldives, free day", "Maldivas, jornada libre"], ["Dernière journée au bord du lagon.", "A last day by the lagoon.", "Última jornada junto a la laguna."], "gm3"),
            day(14, ["Malé – vol retour", "Malé – flight home", "Malé – vuelo de regreso"], ["Bateau rapide jusqu'à l'aéroport de Malé et vol pour la France.", "Speedboat to Malé airport and flight to France.", "Lancha rápida hasta el aeropuerto de Malé y vuelo a Francia."], "gm2"),
            day(15, T_HOME, HOME, "gm1"),
          ]),
      ],
    }),

    // ───────────── 4. Grand tour avec Jaffna, privatif — 14J/11N ─────────────
    trip({
      slug: "sri-lanka-grand-tour-jaffna-prive-14j",
      name: ["Grand tour du Sri Lanka en privé, de Jaffna à Galle", "Private Grand Tour of Sri Lanka, from Jaffna to Galle", "Gran tour privado de Sri Lanka, de Jaffna a Galle"],
      tagline: ["Le seul circuit qui monte jusqu'au pays tamoul du nord et à l'île de Nainativu", "The only tour that goes up to the Tamil north and the island of Nainativu", "El único circuito que sube al norte tamil y a la isla de Nainativu"],
      description: [
        "Un grand tour privé qui ajoute le nord de l'île au parcours classique : Anuradhapura, puis Jaffna par l'Elephant Pass, le temple hindou de Nallur, la traversée vers l'île de Nainativu et ses deux sanctuaires (bouddhiste et hindou), le fort colonial et les marchés de Jaffna. Le circuit redescend ensuite par Ritigala, le Rocher du Lion et Polonnaruwa, Dambulla, Kandy, le train et le thé, Udawalawe et Galle. Pension complète, guide anglophone.",
        "A private grand tour that adds the north of the island to the classic route: Anuradhapura, then Jaffna via Elephant Pass, the Hindu temple of Nallur, the crossing to Nainativu island and its two shrines (Buddhist and Hindu), the colonial fort and the markets of Jaffna. The tour then heads back south via Ritigala, Lion Rock and Polonnaruwa, Dambulla, Kandy, the train and tea, Udawalawe and Galle. Full board, English-speaking guide.",
        "Un gran tour privado que añade el norte de la isla al recorrido clásico: Anuradhapura, y Jaffna por el Elephant Pass, el templo hindú de Nallur, la travesía a la isla de Nainativu y sus dos santuarios (budista e hindú), el fuerte colonial y los mercados de Jaffna. El circuito baja después por Ritigala, la Roca del León y Polonnaruwa, Dambulla, Kandy, el tren y el té, Udawalawe y Galle. Pensión completa, guía de habla inglesa.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé,11 nuits en hôtels 3*,Pension complète,Visites et safari du programme,Guide anglophone",
        "Flights from France,Private tour,11 nights in 3* hotels,Full board,Visits and safari in the programme,English-speaking guide",
        "Vuelos desde Francia,Circuito privado,11 noches en hoteles de 3*,Pensión completa,Visitas y safari del programa,Guía de habla inglesa",
      ],
      price: 2453, nights: 11, departureFrom: "Paris", image: "jf5",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -81997,
      chapters: [
        chapter(["Negombo, Anuradhapura et Jaffna", "Negombo, Anuradhapura and Jaffna", "Negombo, Anuradhapura y Jaffna"],
          ["De la côte ouest au pays tamoul du nord.", "From the west coast to the Tamil north.", "De la costa oeste al norte tamil."],
          ["jf3", "jf2"],
          [
            day(1, T_FLY, FLY, "jf9"), day(2, T_NEGOMBO, NEGOMBO, "jf2"), day(3, T_ANURADHAPURA, ANURADHAPURA, "jf3"),
            day(4, ["Anuradhapura – Jaffna", "Anuradhapura – Jaffna", "Anuradhapura – Jaffna"], ["Route vers la péninsule de Jaffna (environ 4 h 30) par des paysages sauvages et l'Elephant Pass. Visite du temple Nallur Kandaswamy, haut lieu de l'hindouisme tamoul.", "Drive to the Jaffna peninsula (about 4 h 30) through wild country and Elephant Pass. Visit to the Nallur Kandaswamy temple, a great centre of Tamil Hinduism.", "Carretera hacia la península de Jaffna (unas 4 h 30) por paisajes salvajes y el Elephant Pass. Visita del templo Nallur Kandaswamy, gran centro del hinduismo tamil."], "jf3"),
            day(5, ["Nainativu et Jaffna", "Nainativu and Jaffna", "Nainativu y Jaffna"], ["Bateau vers l'île de Nainativu : le Nagadeepa Purana Vihara, l'un des seize lieux saints bouddhistes du pays, et le temple hindou de Nagapooshani Amman. Déjeuner de spécialités épicées de Jaffna, le fort colonial, la bibliothèque et les étals d'épices et de fruits.", "Boat to Nainativu island: Nagadeepa Purana Vihara, one of the country's sixteen Buddhist holy places, and the Hindu temple of Nagapooshani Amman. A lunch of spicy Jaffna specialities, the colonial fort, the library and the spice and fruit stalls.", "Barco hacia la isla de Nainativu: el Nagadeepa Purana Vihara, uno de los dieciséis lugares santos budistas del país, y el templo hindú de Nagapooshani Amman. Almuerzo de especialidades picantes de Jaffna, el fuerte colonial, la biblioteca y los puestos de especias y frutas."], "jf2"),
          ]),
        chapter(["Le Triangle culturel", "The Cultural Triangle", "El Triángulo Cultural"],
          ["Ritigala, le Rocher du Lion, Polonnaruwa et Dambulla.", "Ritigala, Lion Rock, Polonnaruwa and Dambulla.", "Ritigala, la Roca del León, Polonnaruwa y Dambulla."],
          ["jf1", "jf5", "gt5"],
          [
            day(6, ["Jaffna – Ritigala – Sigiriya", "Jaffna – Ritigala – Sigiriya", "Jaffna – Ritigala – Sigiriya"], ["Longue route vers Sigiriya (environ 5 h 45), avec une halte au monastère forestier de Ritigala et ses plateformes de méditation. Le soir, danses traditionnelles et marche sur le feu.", "A long drive to Sigiriya (about 5 h 45), with a stop at the forest monastery of Ritigala and its meditation platforms. In the evening, traditional dances and fire-walking.", "Larga carretera hacia Sigiriya (unas 5 h 45), con parada en el monasterio forestal de Ritigala y sus plataformas de meditación. Por la noche, danzas tradicionales y paseo sobre el fuego."], "jf5"),
            day(7, T_SIGIRIYA_POLO, SIGIRIYA_POLO, "jf1"),
            day(8, T_DAMBULLA_KANDY, DAMBULLA_KANDY, "gt5"),
          ]),
        chapter(["Kandy, le thé et Udawalawe", "Kandy, tea and Udawalawe", "Kandy, el té y Udawalawe"],
          ["Villages de Kandy, train des montagnes et safari.", "Kandy's villages, the mountain train and a safari.", "Pueblos de Kandy, tren de montaña y safari."],
          ["jf7", "jf4", "jf6"],
          [day(9, T_KANDY_VILLAGES, KANDY_VILLAGES, "jf7"), day(10, T_TEA, TEA, "jf4"), day(11, T_UDAWALAWE, UDAWALAWE, "jf6")]),
        chapter(["La côte sud", "The south coast", "La costa sur"],
          ["Weligama, Unawatuna et Galle.", "Weligama, Unawatuna and Galle.", "Weligama, Unawatuna y Galle."],
          ["jf8", "jf9"],
          [day(12, T_SOUTH, SOUTH, "jf8"), day(13, T_CMB_HOME, CMB_HOME, "jf9"), day(14, T_HOME, HOME, "jf2")]),
      ],
    }),

    // ───────────── 5. Magie du Sri Lanka — 12J/9N ─────────────
    trip({
      slug: "sri-lanka-magie-haputale-yala-12j",
      name: ["Magie du Sri Lanka : Sigiriya, Haputale et safari à Yala", "The Magic of Sri Lanka: Sigiriya, Haputale and a Yala Safari", "Magia de Sri Lanka: Sigiriya, Haputale y safari en Yala"],
      tagline: ["Deux safaris, la route du thé à pied et une initiation au bouddhisme", "Two safaris, the tea country on foot and an introduction to Buddhism", "Dos safaris, la ruta del té a pie y una iniciación al budismo"],
      description: [
        "Un circuit tourné vers la spiritualité et la nature, en groupe de 16 personnes au plus : une initiation au bouddhisme et un déjeuner végétarien au temple de Rideegama, Polonnaruwa à vélo, le Rocher du Lion et un safari au Hurulu Eco Park, Dambulla et Kandy, la route du thé jusqu'à Haputale, le Lipton's Seat, le pont aux Neuf Arches et la montée du Mini Adam's Peak, puis les bouddhas de Buduruwagala et un safari dans le parc de Yala avant Galle et Bentota. Version privative à partir de 1 858 € par personne (départ Luxembourg) ; avec 3 nuits de plage (15 jours) à partir de 2 401 € (Rockwall 4*) ou 2 457 € (Naya Collection The Eden 5*).",
        "A tour focused on spirituality and nature, in a group of 16 at most: an introduction to Buddhism and a vegetarian lunch at Rideegama temple, Polonnaruwa by bike, Lion Rock and a safari in Hurulu Eco Park, Dambulla and Kandy, the tea road to Haputale, Lipton's Seat, the Nine Arches Bridge and the climb up Little Adam's Peak, then the Buddhas of Buduruwagala and a safari in Yala park before Galle and Bentota. Private version from €1,858 per person (departing Luxembourg); with 3 beach nights (15 days) from €2,401 (Rockwall 4*) or €2,457 (Naya Collection The Eden 5*).",
        "Un circuito centrado en la espiritualidad y la naturaleza, en grupo de 16 personas como máximo: una iniciación al budismo y un almuerzo vegetariano en el templo de Rideegama, Polonnaruwa en bicicleta, la Roca del León y un safari en el Hurulu Eco Park, Dambulla y Kandy, la ruta del té hasta Haputale, el Lipton's Seat, el puente de los Nueve Arcos y la subida al Little Adam's Peak, y los budas de Buduruwagala y un safari en el parque de Yala antes de Galle y Bentota. Versión privada desde 1.858 € por persona (salida desde Luxemburgo); con 3 noches de playa (15 días) desde 2.401 € (Rockwall 4*) o 2.457 € (Naya Collection The Eden 5*).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,9 nuits en hôtels 3*,Pension selon programme,Safaris en jeep à Hurulu et Yala,Visites du programme,Guide francophone",
        "Flights from France,Airport transfers,9 nights in 3* hotels,Meals as per programme,Jeep safaris in Hurulu and Yala,Visits in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,9 noches en hoteles de 3*,Comidas según programa,Safaris en jeep en Hurulu y Yala,Visitas del programa,Guía francófono",
      ],
      price: 2029, nights: 9, departureFrom: "Paris", image: "mg7",
      theme: "adventure", feeling: "distraction", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -81996,
      chapters: [
        chapter(["Sigiriya et le Triangle culturel", "Sigiriya and the Cultural Triangle", "Sigiriya y el Triángulo Cultural"],
          ["Temples, campagne, Polonnaruwa à vélo et le Rocher du Lion.", "Temples, countryside, Polonnaruwa by bike and Lion Rock.", "Templos, campo, Polonnaruwa en bicicleta y la Roca del León."],
          ["mg2", "mg4", "in5"],
          [
            day(1, T_FLY, FLY, "mg9"),
            day(2, ["Arrivée à Colombo – Negombo", "Arrival in Colombo – Negombo", "Llegada a Colombo – Negombo"], ["Accueil à l'aéroport et transfert à l'hôtel près de Negombo. Journée libre.", "Welcome at the airport and transfer to the hotel near Negombo. Free day.", "Recibimiento en el aeropuerto y traslado al hotel cerca de Negombo. Jornada libre."], "mg9"),
            day(3, ["Rideegama – Sigiriya", "Rideegama – Sigiriya", "Rideegama – Sigiriya"], ["Le marché aux poissons de Negombo, puis un temple historique à Rideegama, avec une introduction au bouddhisme et un déjeuner végétarien au temple. À Sigiriya, massage ayurvédique (30 minutes) et coucher de soleil depuis un temple perché.", "Negombo fish market, then a historic temple in Rideegama, with an introduction to Buddhism and a vegetarian lunch at the temple. In Sigiriya, an Ayurvedic massage (30 minutes) and sunset from a hilltop temple.", "El mercado de pescado de Negombo y un templo histórico en Rideegama, con una introducción al budismo y un almuerzo vegetariano en el templo. En Sigiriya, masaje ayurvédico (30 minutos) y puesta de sol desde un templo en lo alto."], "mg2"),
            day(4, ["Hiriwaduna et Polonnaruwa à vélo", "Hiriwaduna and Polonnaruwa by bike", "Hiriwaduna y Polonnaruwa en bicicleta"], ["Le village d'Hiriwaduna en motoculteur puis en pirogue, puis Polonnaruwa à vélo et les bouddhas de Gal Vihara. Le soir, danses kandyennes.", "Hiriwaduna village by hand tractor then dugout canoe, then Polonnaruwa by bike and the Buddhas of Gal Vihara. In the evening, Kandyan dances.", "El pueblo de Hiriwaduna en motocultor y en piragua, y Polonnaruwa en bicicleta con los budas de Gal Vihara. Por la noche, danzas kandianas."], "mg4"),
            day(5, ["Le Rocher du Lion et le Hurulu Eco Park", "Lion Rock and Hurulu Eco Park", "La Roca del León y el Hurulu Eco Park"], ["L'ascension du Rocher du Lion, ses jardins suspendus et ses fresques, puis un safari en jeep l'après-midi au Hurulu Eco Park, réputé pour ses éléphants sauvages.", "The climb up Lion Rock, its hanging gardens and frescoes, then an afternoon jeep safari in Hurulu Eco Park, known for its wild elephants.", "La subida a la Roca del León, sus jardines colgantes y sus frescos, y un safari en jeep por la tarde en el Hurulu Eco Park, conocido por sus elefantes salvajes."], "in5"),
          ]),
        chapter(["Kandy et Haputale", "Kandy and Haputale", "Kandy y Haputale"],
          ["Le temple de la Dent, la route du thé et les belvédères des hautes terres.", "The Temple of the Tooth, the tea road and the viewpoints of the hill country.", "El templo del Diente, la ruta del té y los miradores de las tierras altas."],
          ["mg5", "mg3", "mg7"],
          [
            day(6, ["Dambulla – Matale – Kandy", "Dambulla – Matale – Kandy", "Dambulla – Matale – Kandy"], ["Le Temple d'Or de Dambulla, déjeuner dans un jardin d'épices à Matale, puis le temple de la Dent à Kandy.", "The Golden Temple of Dambulla, lunch in a spice garden in Matale, then the Temple of the Tooth in Kandy.", "El Templo de Oro de Dambulla, almuerzo en un jardín de especias en Matale y el templo del Diente en Kandy."], "mg5"),
            day(7, ["Peradeniya et la route du thé – Haputale", "Peradeniya and the tea road – Haputale", "Peradeniya y la ruta del té – Haputale"], ["Le jardin botanique de Peradeniya et un musée des pierres précieuses, puis la route du thé vers Nuwara Eliya et une fabrique traditionnelle, avant Haputale.", "The Peradeniya botanical gardens and a gemstone museum, then the tea road to Nuwara Eliya and a traditional factory, before Haputale.", "El jardín botánico de Peradeniya y un museo de piedras preciosas, y la ruta del té hacia Nuwara Eliya con una fábrica tradicional, antes de Haputale."], "mg3"),
            day(8, ["Lipton's Seat, Neuf Arches et Mini Adam's Peak", "Lipton's Seat, Nine Arches and Little Adam's Peak", "Lipton's Seat, Nueve Arcos y Little Adam's Peak"], ["La vue depuis le Lipton's Seat, puis le pont aux Neuf Arches et une randonnée à travers les théiers jusqu'au sommet du Mini Adam's Peak.", "The view from Lipton's Seat, then the Nine Arches Bridge and a walk through the tea gardens to the top of Little Adam's Peak.", "La vista desde el Lipton's Seat, el puente de los Nueve Arcos y una caminata entre los cultivos de té hasta la cima del Little Adam's Peak."], "mg7"),
          ]),
        chapter(["Yala, Galle et Bentota", "Yala, Galle and Bentota", "Yala, Galle y Bentota"],
          ["Un safari dans le sud, puis la côte.", "A safari in the south, then the coast.", "Un safari en el sur y la costa."],
          ["mg1", "mg8", "mg6"],
          [
            day(9, ["Buduruwagala – safari à Yala", "Buduruwagala – safari in Yala", "Buduruwagala – safari en Yala"], ["Les chutes de Ravana, puis les bouddhas géants sculptés dans la roche de Buduruwagala. L'après-midi, safari en jeep dans la réserve de Yala : éléphants, buffles, cerfs et oiseaux.", "Ravana Falls, then the giant Buddhas carved into the rock at Buduruwagala. In the afternoon, a jeep safari in Yala reserve: elephants, buffalo, deer and birds.", "Las cascadas de Ravana y los budas gigantes tallados en la roca de Buduruwagala. Por la tarde, safari en jeep en la reserva de Yala: elefantes, búfalos, ciervos y aves."], "mg1"),
            day(10, ["Galle – Bentota", "Galle – Bentota", "Galle – Bentota"], ["Route vers Galle et tour de la ville portuaire : ses remparts face à la mer, ses ruelles et l'église hollandaise de 1755. Nuit à Bentota.", "Drive to Galle and a tour of the port town: its ramparts above the sea, its lanes and the Dutch church of 1755. Night in Bentota.", "Carretera hacia Galle y visita de la ciudad portuaria: sus murallas frente al mar, sus callejuelas y la iglesia holandesa de 1755. Noche en Bentota."], "mg8"),
            day(11, ["Bentota – vol retour", "Bentota – flight home", "Bentota – vuelo de regreso"], ["Matinée libre, puis transfert à l'aéroport de Colombo et envol pour la France.", "A free morning, then transfer to Colombo airport and fly to France.", "Mañana libre, traslado al aeropuerto de Colombo y vuelo a Francia."], "mg6"),
            day(12, T_HOME, HOME, "mg9"),
          ]),
      ],
    }),

    // ───────────── 6. Expériences sri-lankaises — 13J/10N ─────────────
    trip({
      slug: "sri-lanka-experiences-knuckles-gal-oya-13j",
      name: ["Expériences sri-lankaises : randonnées, glamping et nuit chez l'habitant", "Sri Lankan Experiences: Hikes, Glamping and a Homestay", "Experiencias en Sri Lanka: senderismo, glamping y noche en casa local"],
      tagline: ["Les montagnes des Knuckles, votre propre thé et le lac de Gal Oya, en petit groupe", "The Knuckles mountains, your own tea and Gal Oya lake, in a small group", "Las montañas de los Knuckles, su propio té y el lago de Gal Oya, en grupo reducido"],
      description: [
        "Le Sri Lanka hors des sentiers battus, en groupe de 12 personnes au plus : yoga au lever du soleil et Rocher du Lion à Sigiriya, deux randonnées dans le massif des Knuckles avec nuit en tente de luxe, une nuit chez l'habitant à Kandy, une nuit dans une fabrique de thé où vous préparez votre propre thé, un safari en bateau sur le lac de Gal Oya et la rencontre du peuple Vedda, puis le train du thé entre Badulla et Ella, le Mini Adam's Peak et Galle. Version privative à partir de 2 165 € par personne.",
        "Sri Lanka off the beaten track, in a group of 12 at most: sunrise yoga and Lion Rock in Sigiriya, two hikes in the Knuckles range with a night in a luxury tent, a homestay night in Kandy, a night in a tea factory where you make your own tea, a boat safari on Gal Oya lake and a meeting with the Vedda people, then the tea train from Badulla to Ella, Little Adam's Peak and Galle. Private version from €2,165 per person.",
        "Sri Lanka fuera de los caminos trillados, en grupo de 12 personas como máximo: yoga al amanecer y Roca del León en Sigiriya, dos caminatas en el macizo de los Knuckles con noche en tienda de lujo, una noche en casa local en Kandy, una noche en una fábrica de té donde prepara su propio té, un safari en barco por el lago de Gal Oya y el encuentro con el pueblo vedda, y el tren del té entre Badulla y Ella, el Little Adam's Peak y Galle. Versión privada desde 2.165 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,10 nuits entre hôtels, glamping et chez l'habitant,Pension selon programme,Randonnées et visites du programme,Chauffeur-guide francophone",
        "Flights from France,Airport transfers,10 nights in hotels, glamping and a homestay,Meals as per programme,Hikes and visits in the programme,French-speaking driver-guide",
        "Vuelos desde Francia,Traslados al aeropuerto,10 noches entre hoteles, glamping y casa local,Comidas según programa,Caminatas y visitas del programa,Chófer-guía francófono",
      ],
      price: 2114, nights: 10, departureFrom: "Paris", image: "ex3",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -81995,
      chapters: [
        chapter(["Sigiriya", "Sigiriya", "Sigiriya"],
          ["Vélo, poterie, yoga et le Rocher du Lion.", "Cycling, pottery, yoga and Lion Rock.", "Bicicleta, cerámica, yoga y la Roca del León."],
          ["ex4", "ex5"],
          [
            day(1, T_FLY, FLY, "ex9"),
            day(2, ["Arrivée à Colombo – Negombo", "Arrival in Colombo – Negombo", "Llegada a Colombo – Negombo"], ["Accueil à l'aéroport et transfert à Negombo. Journée libre.", "Welcome at the airport and transfer to Negombo. Free day.", "Recibimiento en el aeropuerto y traslado a Negombo. Jornada libre."], "ex9"),
            day(3, ["Negombo – Sigiriya", "Negombo – Sigiriya", "Negombo – Sigiriya"], ["Le marché aux poissons de Negombo, puis Sigiriya : massage ayurvédique, balade à vélo dans les villages avec un naturaliste anglophone et atelier de poterie à l'hôtel.", "Negombo fish market, then Sigiriya: an Ayurvedic massage, a bike ride through the villages with an English-speaking naturalist and a pottery workshop at the hotel.", "El mercado de pescado de Negombo y Sigiriya: masaje ayurvédico, paseo en bicicleta por los pueblos con un naturalista de habla inglesa y taller de cerámica en el hotel."], "ex4"),
            day(4, ["Le Rocher du Lion et la vie au village", "Lion Rock and village life", "La Roca del León y la vida en el pueblo"], ["Yoga au lever du soleil, puis l'ascension du Rocher du Lion. Rencontre avec les élèves d'une école, offrande aux moines et méditation, campagne en mini-tracteur et en pirogue, déjeuner chez l'habitant, puis danses et marche sur le feu.", "Sunrise yoga, then the climb up Lion Rock. A meeting with schoolchildren, an offering to the monks and meditation, the countryside by mini-tractor and canoe, lunch with a family, then dances and fire-walking.", "Yoga al amanecer y subida a la Roca del León. Encuentro con los alumnos de una escuela, ofrenda a los monjes y meditación, campo en minitractor y en piragua, almuerzo en casa local, y danzas y paseo sobre el fuego."], "ex4"),
          ]),
        chapter(["Les Knuckles et Kandy", "The Knuckles and Kandy", "Los Knuckles y Kandy"],
          ["Deux randonnées, une nuit sous tente et une nuit chez l'habitant.", "Two hikes, a night under canvas and a night with a family.", "Dos caminatas, una noche en tienda y una noche en casa local."],
          ["ex3", "ex2", "gm5"],
          [
            day(5, ["Dambulla – les Knuckles", "Dambulla – the Knuckles", "Dambulla – los Knuckles"], ["Yoga matinal, le Temple d'Or de Dambulla et un jardin d'épices, puis une randonnée de 9 km à Burnside, entre forêts de pins et panoramas, jusqu'à un temple hindou. Nuit en glamping dans le massif des Knuckles.", "Morning yoga, the Golden Temple of Dambulla and a spice garden, then a 9 km hike at Burnside, through pine forest and viewpoints, to a Hindu temple. Night glamping in the Knuckles range.", "Yoga matinal, el Templo de Oro de Dambulla y un jardín de especias, y una caminata de 9 km en Burnside, entre pinares y panorámicas, hasta un templo hindú. Noche de glamping en el macizo de los Knuckles."], "ex3"),
            day(6, ["La vallée de Heel Oya – Kandy", "The Heel Oya valley – Kandy", "El valle de Heel Oya – Kandy"], ["Randonnée de 10 km (environ 4 h) dans la vallée de Heel Oya, jusqu'aux rizières en terrasses cultivées à l'ancienne et une cascade. Déjeuner chez l'habitant, puis le temple de la Dent à Kandy, la street food du soir et une nuit chez l'habitant.", "A 10 km hike (about 4 h) in the Heel Oya valley, to terraced rice fields farmed the old way and a waterfall. Lunch with a family, then the Temple of the Tooth in Kandy, evening street food and a night with a family.", "Caminata de 10 km (unas 4 h) por el valle de Heel Oya, hasta arrozales en terrazas cultivados a la antigua y una cascada. Almuerzo en casa local, el templo del Diente en Kandy, comida callejera por la noche y noche en casa local."], "ex2"),
          ]),
        chapter(["Le thé et Gal Oya", "Tea and Gal Oya", "El té y Gal Oya"],
          ["Une nuit dans une fabrique de thé, puis le lac et la forêt de Gal Oya.", "A night in a tea factory, then the lake and forest of Gal Oya.", "Una noche en una fábrica de té, y el lago y el bosque de Gal Oya."],
          ["ex7", "mv1", "in5"],
          [
            day(7, ["Peradeniya – Mandaramnuwara", "Peradeniya – Mandaramnuwara", "Peradeniya – Mandaramnuwara"], ["Le jardin botanique royal de Peradeniya, puis une balade de 3,5 km dans les théiers de Kabaragalla jusqu'à une cascade cachée. Nuit dans une fabrique de thé transformée en hôtel.", "The Royal Botanical Gardens of Peradeniya, then a 3.5 km walk through the Kabaragalla tea gardens to a hidden waterfall. Night in a tea factory turned into a hotel.", "El jardín botánico real de Peradeniya y un paseo de 3,5 km entre los cultivos de té de Kabaragalla hasta una cascada escondida. Noche en una fábrica de té convertida en hotel."], "ex7"),
            day(8, ["Votre thé – safari en bateau à Gal Oya", "Your own tea – boat safari at Gal Oya", "Su propio té – safari en barco en Gal Oya"], ["Avec un planteur, cueillette puis fabrication de votre propre thé, que vous emportez. Route vers l'est et safari en bateau sur le lac de Gal Oya. Nuit en glamping.", "With a planter, pick and then make your own tea, which you take home. Drive east and a boat safari on Gal Oya lake. Night glamping.", "Con un cultivador, recolección y elaboración de su propio té, que se lleva a casa. Carretera hacia el este y safari en barco por el lago de Gal Oya. Noche de glamping."], "mv1"),
            day(9, ["Le peuple Vedda", "The Vedda people", "El pueblo vedda"], ["Rencontre avec une communauté Vedda, l'une des dernières tribus de la forêt, et son centre culturel. Visite d'une ferme, puis après-midi libre ou safari en jeep dans le parc de Gal Oya (en option).", "A meeting with a Vedda community, one of the last forest tribes, and its cultural centre. A farm visit, then a free afternoon or a jeep safari in Gal Oya park (optional).", "Encuentro con una comunidad vedda, una de las últimas tribus del bosque, y su centro cultural. Visita de una granja y tarde libre o safari en jeep en el parque de Gal Oya (opcional)."], "in5"),
          ]),
        chapter(["Ella et Galle", "Ella and Galle", "Ella y Galle"],
          ["Le train du thé, le Mini Adam's Peak et la côte sud.", "The tea train, Little Adam's Peak and the south coast.", "El tren del té, el Little Adam's Peak y la costa sur."],
          ["in4", "ex6", "ex10"],
          [
            day(10, ["Le train de Badulla à Ella", "The train from Badulla to Ella", "El tren de Badulla a Ella"], ["Une heure dans le train du thé entre Badulla et Ella, puis la montée du Mini Adam's Peak (1 141 m) et son panorama. Nuit à Bandarawela.", "An hour on the tea train between Badulla and Ella, then the climb up Little Adam's Peak (1,141 m) and its view. Night in Bandarawela.", "Una hora en el tren del té entre Badulla y Ella y la subida al Little Adam's Peak (1.141 m) y su panorámica. Noche en Bandarawela."], "in4"),
            day(11, ["Les chutes de Ravana – Galle – Wadduwa", "Ravana Falls – Galle – Wadduwa", "Cascadas de Ravana – Galle – Wadduwa"], ["Les chutes de Ravana, puis la côte d'Hikkaduwa et Galle, ses ruelles et ses remparts face à l'océan Indien. Nuit à Wadduwa.", "Ravana Falls, then the Hikkaduwa coast and Galle, its lanes and ramparts facing the Indian Ocean. Night in Wadduwa.", "Las cascadas de Ravana, la costa de Hikkaduwa y Galle, sus callejuelas y murallas frente al océano Índico. Noche en Wadduwa."], "ex6"),
            day(12, T_CMB_HOME, CMB_HOME, "ex10"), day(13, T_HOME, HOME, "ex9"),
          ]),
      ],
    }),

    // ───────────── 7. Merveille de l'île de Ceylan — 11J/8N ─────────────
    trip({
      slug: "sri-lanka-merveille-ceylan-prive-11j",
      name: ["Merveille de Ceylan en privé : Sigiriya, Kandy, Yala et Galle", "Wonders of Ceylon in Private: Sigiriya, Kandy, Yala and Galle", "Maravillas de Ceilán en privado: Sigiriya, Kandy, Yala y Galle"],
      tagline: ["Votre chauffeur-guide francophone, des Veddas au parc de Yala", "Your own French-speaking driver-guide, from the Veddas to Yala park", "Su chófer-guía francófono, de los veddas al parque de Yala"],
      description: [
        "Un circuit privé en demi-pension, avec chauffeur-guide francophone : Sigiriya, la bénédiction d'un moine et le Temple d'Or de Dambulla, le Rocher du Lion et Polonnaruwa, la rencontre des Veddas à Mahiyangana, Kandy, son temple de la Dent et un spectacle culturel, le train vers Nuwara Eliya et une fabrique de thé, les chutes de Ravana et un safari en jeep à Yala, puis Galle, la plage et un tour de Colombo. Hôtels 3* ou 4* au choix.",
        "A private tour on half board, with a French-speaking driver-guide: Sigiriya, a monk's blessing and the Golden Temple of Dambulla, Lion Rock and Polonnaruwa, a meeting with the Veddas in Mahiyangana, Kandy, its Temple of the Tooth and a cultural show, the train to Nuwara Eliya and a tea factory, Ravana Falls and a jeep safari in Yala, then Galle, the beach and a tour of Colombo. A choice of 3* or 4* hotels.",
        "Un circuito privado en media pensión, con chófer-guía francófono: Sigiriya, la bendición de un monje y el Templo de Oro de Dambulla, la Roca del León y Polonnaruwa, el encuentro con los veddas en Mahiyangana, Kandy, su templo del Diente y un espectáculo cultural, el tren a Nuwara Eliya y una fábrica de té, las cascadas de Ravana y un safari en jeep en Yala, y Galle, la playa y una visita de Colombo. Hoteles de 3* o 4* a elegir.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé en véhicule climatisé,8 nuits en hôtels 3* ou 4*,Demi-pension,Visites et safari du programme,Chauffeur-guide francophone",
        "Flights from France,Private tour in an air-conditioned vehicle,8 nights in 3* or 4* hotels,Half board,Visits and safari in the programme,French-speaking driver-guide",
        "Vuelos desde Francia,Circuito privado en vehículo climatizado,8 noches en hoteles de 3* o 4*,Media pensión,Visitas y safari del programa,Chófer-guía francófono",
      ],
      price: 2024, nights: 8, departureFrom: "Paris", image: "mv3",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -81994,
      chapters: [
        chapter(["Sigiriya", "Sigiriya", "Sigiriya"],
          ["Villages, Dambulla, le Rocher du Lion et Polonnaruwa.", "Villages, Dambulla, Lion Rock and Polonnaruwa.", "Pueblos, Dambulla, la Roca del León y Polonnaruwa."],
          ["mv3", "gt5", "mg4"],
          [
            day(1, T_FLY, FLY, "mv7"),
            day(2, ["Arrivée à Colombo – Sigiriya", "Arrival in Colombo – Sigiriya", "Llegada a Colombo – Sigiriya"], ["Accueil à l'aéroport de Colombo et route vers Sigiriya (environ 155 km).", "Welcome at Colombo airport and drive to Sigiriya (about 155 km).", "Recibimiento en el aeropuerto de Colombo y carretera hacia Sigiriya (unos 155 km)."], "mv3"),
            day(3, T_VILLAGE_BLESSING, VILLAGE_BLESSING, "gt5"),
            day(4, T_SIGIRIYA_POLO, SIGIRIYA_POLO, "mv3"),
          ]),
        chapter(["Les Veddas, Kandy et le thé", "The Veddas, Kandy and tea", "Los veddas, Kandy y el té"],
          ["Des premiers habitants de l'île aux plantations des hautes terres.", "From the island's first inhabitants to the hill-country plantations.", "De los primeros habitantes de la isla a las plantaciones de las tierras altas."],
          ["gm5", "mv4", "mv1"],
          [
            day(5, T_VEDDA, VEDDA, "mv8"),
            day(6, ["Kandy", "Kandy", "Kandy"], ["Visite guidée de Kandy, puis le temple de la Dent et sa cérémonie de puja. Avant le dîner, un spectacle culturel sri-lankais.", "A guided tour of Kandy, then the Temple of the Tooth and its puja ceremony. Before dinner, a Sri Lankan cultural show.", "Visita guiada de Kandy y el templo del Diente con su ceremonia de puja. Antes de la cena, un espectáculo cultural ceilandés."], "gm5"),
            day(7, ["En train vers Nuwara Eliya", "By train to Nuwara Eliya", "En tren hacia Nuwara Eliya"], ["Un trajet en train local à travers les montagnes, puis une plantation et une fabrique de thé, et la ville de Nuwara Eliya.", "A local train ride through the mountains, then a tea plantation and factory, and the town of Nuwara Eliya.", "Un trayecto en tren local por las montañas, una plantación y fábrica de té, y la ciudad de Nuwara Eliya."], "mv4"),
          ]),
        chapter(["Yala, Galle et Colombo", "Yala, Galle and Colombo", "Yala, Galle y Colombo"],
          ["Un safari dans le sud, la côte et la capitale.", "A safari in the south, the coast and the capital.", "Un safari en el sur, la costa y la capital."],
          ["mv5", "mv2", "mv7"],
          [
            day(8, T_YALA, [`Arrêt aux chutes de Ravana. ${YALA[0]}`, `A stop at Ravana Falls. ${YALA[1]}`, `Parada en las cascadas de Ravana. ${YALA[2]}`], "mv5"),
            day(9, ["Galle – la plage", "Galle – the beach", "Galle – la playa"], ["Route vers Galle et visite guidée de la ville fortifiée, classée à l'Unesco, puis installation à l'hôtel de plage.", "Drive to Galle and a guided tour of the fortified town, a UNESCO site, then check in at the beach hotel.", "Carretera hacia Galle y visita guiada de la ciudad fortificada, inscrita en la Unesco, e instalación en el hotel de playa."], "mv2"),
            day(10, ["Colombo – vol retour", "Colombo – flight home", "Colombo – vuelo de regreso"], ["Route vers Colombo et tour de la capitale et de son patrimoine colonial, puis transfert à l'aéroport et envol pour la France.", "Drive to Colombo and a tour of the capital and its colonial heritage, then transfer to the airport and fly to France.", "Carretera hacia Colombo y visita de la capital y su patrimonio colonial, traslado al aeropuerto y vuelo a Francia."], "mv7"),
            day(11, T_HOME, HOME, "mv1"),
          ]),
      ],
    }),

    // ───────────── 8. Aventure sri-lankaise et plage de rêve — 12J/9N ─────────────
    yearRound.trip({
      slug: "sri-lanka-aventure-trincomalee-mirissa-prive-12j",
      name: ["Aventure sri-lankaise en privé : Mirissa, Yala, Trincomalee et Sigiriya", "Sri Lankan Adventure in Private: Mirissa, Yala, Trincomalee and Sigiriya", "Aventura en Sri Lanka en privado: Mirissa, Yala, Trincomalee y Sigiriya"],
      tagline: ["Les plages du sud et de l'est, un safari et le Rocher du Lion", "The beaches of the south and east, a safari and Lion Rock", "Las playas del sur y del este, un safari y la Roca del León"],
      description: [
        "Un circuit privé en demi-pension qui fait le tour de l'île par ses deux côtes : la plage de Mirissa à l'arrivée, un safari en jeep à Yala, Ella et le thé à Nuwara Eliya, les Veddas de Mahiyangana, Polonnaruwa, trois nuits à Trincomalee sur la côte nord-est, puis Sigiriya avec la bénédiction d'un moine, le Rocher du Lion, un cours de cuisine et le Temple d'Or de Dambulla. Chauffeur-guide francophone, hôtels 3* ou 4* au choix.",
        "A private tour on half board that circles the island by both coasts: Mirissa beach on arrival, a jeep safari in Yala, Ella and tea in Nuwara Eliya, the Veddas of Mahiyangana, Polonnaruwa, three nights in Trincomalee on the north-east coast, then Sigiriya with a monk's blessing, Lion Rock, a cookery class and the Golden Temple of Dambulla. French-speaking driver-guide, a choice of 3* or 4* hotels.",
        "Un circuito privado en media pensión que da la vuelta a la isla por sus dos costas: la playa de Mirissa a la llegada, un safari en jeep en Yala, Ella y el té en Nuwara Eliya, los veddas de Mahiyangana, Polonnaruwa, tres noches en Trincomalee en la costa noreste, y Sigiriya con la bendición de un monje, la Roca del León, una clase de cocina y el Templo de Oro de Dambulla. Chófer-guía francófono, hoteles de 3* o 4* a elegir.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé en véhicule climatisé,9 nuits en hôtels 3* ou 4*,Demi-pension,Visites et safari du programme,Chauffeur-guide francophone",
        "Flights from France,Private tour in an air-conditioned vehicle,9 nights in 3* or 4* hotels,Half board,Visits and safari in the programme,French-speaking driver-guide",
        "Vuelos desde Francia,Circuito privado en vehículo climatizado,9 noches en hoteles de 3* o 4*,Media pensión,Visitas y safari del programa,Chófer-guía francófono",
      ],
      price: 2242, nights: 9, departureFrom: "Paris", image: "ex10",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,honeymoon,family", maxGuests: 8, order: -81993,
      chapters: [
        yearRound.chapter(["Mirissa et Yala", "Mirissa and Yala", "Mirissa y Yala"],
          ["La plage du sud, puis un safari.", "The southern beach, then a safari.", "La playa del sur y un safari."],
          ["ex10", "av3", "mg1"],
          [
            yearRound.day(1, T_FLY, FLY, "ex9"),
            yearRound.day(2, ["Arrivée à Colombo – Mirissa", "Arrival in Colombo – Mirissa", "Llegada a Colombo – Mirissa"], ["Accueil à l'aéroport de Colombo et route vers Mirissa, au sud de l'île (environ 180 km). Temps libre à la plage.", "Welcome at Colombo airport and drive to Mirissa, in the south of the island (about 180 km). Free time on the beach.", "Recibimiento en el aeropuerto de Colombo y carretera hacia Mirissa, en el sur de la isla (unos 180 km). Tiempo libre en la playa."], "ex10"),
            yearRound.day(3, T_YALA, YALA, "av3"),
          ]),
        yearRound.chapter(["Les hautes terres et les Veddas", "The hill country and the Veddas", "Las tierras altas y los veddas"],
          ["Ella, le thé et les premiers habitants de l'île.", "Ella, tea and the island's first inhabitants.", "Ella, el té y los primeros habitantes de la isla."],
          ["mv5", "in3"],
          [
            yearRound.day(4, ["Ella – Nuwara Eliya", "Ella – Nuwara Eliya", "Ella – Nuwara Eliya"], ["Route vers Nuwara Eliya, la « petite Angleterre », avec un arrêt à Ella et aux chutes de Ravana. Visite d'une plantation et d'une fabrique de thé, puis de la ville.", "Drive to Nuwara Eliya, 'Little England', with a stop in Ella and at Ravana Falls. A visit to a tea plantation and factory, then the town.", "Carretera hacia Nuwara Eliya, la «pequeña Inglaterra», con parada en Ella y en las cascadas de Ravana. Visita de una plantación y fábrica de té y de la ciudad."], "mv5"),
            yearRound.day(5, T_VEDDA, VEDDA, "in3"),
          ]),
        yearRound.chapter(["Trincomalee", "Trincomalee", "Trincomalee"],
          ["Polonnaruwa, puis trois nuits sur la côte nord-est.", "Polonnaruwa, then three nights on the north-east coast.", "Polonnaruwa y tres noches en la costa noreste."],
          ["mg4", "jf9", "mg9"],
          [
            yearRound.day(6, ["Polonnaruwa – Trincomalee", "Polonnaruwa – Trincomalee", "Polonnaruwa – Trincomalee"], ["En route, la cité médiévale de Polonnaruwa et les bouddhas de Gal Vihara, puis Trincomalee et temps libre.", "On the way, the medieval city of Polonnaruwa and the Buddhas of Gal Vihara, then Trincomalee and free time.", "En ruta, la ciudad medieval de Polonnaruwa y los budas de Gal Vihara, y Trincomalee con tiempo libre."], "mg4"),
            yearRound.day(7, ["Trincomalee", "Trincomalee", "Trincomalee"], ["Matinée libre à l'hôtel, puis visite de Trincomalee, ville de plages et de sites historiques.", "A free morning at the hotel, then a visit to Trincomalee, a town of beaches and historic sites.", "Mañana libre en el hotel y visita de Trincomalee, ciudad de playas y lugares históricos."], "jf9"),
            yearRound.day(8, ["Trincomalee, journée libre", "Trincomalee, free day", "Trincomalee, jornada libre"], ["Journée libre au bord de la mer.", "A free day by the sea.", "Jornada libre junto al mar."], "mg9"),
          ]),
        yearRound.chapter(["Sigiriya", "Sigiriya", "Sigiriya"],
          ["Village, Rocher du Lion, cuisine et Temple d'Or.", "A village, Lion Rock, cooking and the Golden Temple.", "Pueblo, Roca del León, cocina y Templo de Oro."],
          ["sk1", "gt5", "mv3"],
          [
            yearRound.day(9, ["Trincomalee – Sigiriya", "Trincomalee – Sigiriya", "Trincomalee – Sigiriya"], ["Route vers Sigiriya (environ 100 km). L'après-midi, promenade dans un village, bénédiction d'un moine et pause dans un salon de thé.", "Drive to Sigiriya (about 100 km). In the afternoon, a walk in a village, a monk's blessing and a break in a tea house.", "Carretera hacia Sigiriya (unos 100 km). Por la tarde, paseo por un pueblo, bendición de un monje y pausa en una casa de té."], "sk1"),
            yearRound.day(10, ["Le Rocher du Lion et Dambulla", "Lion Rock and Dambulla", "La Roca del León y Dambulla"], ["Tôt le matin, l'ascension du Rocher du Lion, puis un cours de cuisine sri-lankaise et la dégustation des plats. L'après-midi, le Temple d'Or de Dambulla.", "Early in the morning, the climb up Lion Rock, then a Sri Lankan cookery class and a tasting of the dishes. In the afternoon, the Golden Temple of Dambulla.", "A primera hora, la subida a la Roca del León, una clase de cocina ceilandesa y la degustación de los platos. Por la tarde, el Templo de Oro de Dambulla."], "mv3"),
            yearRound.day(11, ["Sigiriya – vol retour", "Sigiriya – flight home", "Sigiriya – vuelo de regreso"], ["Transfert à l'aéroport de Colombo (environ 155 km) et envol pour la France.", "Transfer to Colombo airport (about 155 km) and fly to France.", "Traslado al aeropuerto de Colombo (unos 155 km) y vuelo a Francia."], "gt5"),
            yearRound.day(12, T_HOME, HOME, "ex10"),
          ]),
      ],
    }),

    // ───────────── 9. Combiné Sigiriya, Kandy & plage — 10J/7N ─────────────
    trip({
      slug: "sri-lanka-sigiriya-kandy-plage-beruwala-10j",
      name: ["Combiné Sri Lanka : Sigiriya, Kandy et plage à Beruwala", "Sri Lanka Combination: Sigiriya, Kandy and a Beach Stay in Beruwala", "Combinado Sri Lanka: Sigiriya, Kandy y playa en Beruwala"],
      tagline: ["Quatre jours de visites en privé, puis 3, 5 ou 7 nuits dans un hôtel 5* au bord de l'océan", "Four days of private sightseeing, then 3, 5 or 7 nights at a 5* hotel by the ocean", "Cuatro días de visitas en privado y 3, 5 o 7 noches en un hotel de 5* junto al océano"],
      description: [
        "Un court circuit privé, avec chauffeur-guide anglophone, puis la plage : Polonnaruwa, le Rocher du Lion, la campagne d'Hiriwadunna en tracteur et en pirogue, des danses traditionnelles, le Temple d'Or de Dambulla, le jardin d'épices de Matale, Kandy et le jardin botanique de Peradeniya. Ensuite, séjour en demi-pension au Naya Collection The Eden 5* à Beruwala, 3, 5 ou 7 nuits. Autres formules : Sigiriya seul et The Eden (8 jours) à partir de 1 410 € par personne au départ de Paris ; Sigiriya et 3 nuits en tout compris au Naya Collection Blue Waters 5* à Wadduwa (9 jours) à partir de 1 614 €, ou 7 nuits (13 jours) à partir de 2 143 €.",
        "A short private tour, with an English-speaking driver-guide, then the beach: Polonnaruwa, Lion Rock, the Hiriwadunna countryside by tractor and canoe, traditional dances, the Golden Temple of Dambulla, the Matale spice garden, Kandy and the Peradeniya botanical gardens. Then a half-board stay at the Naya Collection The Eden 5* in Beruwala, for 3, 5 or 7 nights. Other options: Sigiriya only with The Eden (8 days) from €1,410 per person departing Paris; Sigiriya and 3 all-inclusive nights at the Naya Collection Blue Waters 5* in Wadduwa (9 days) from €1,614, or 7 nights (13 days) from €2,143.",
        "Un breve circuito privado, con chófer-guía de habla inglesa, y la playa: Polonnaruwa, la Roca del León, el campo de Hiriwadunna en tractor y en piragua, danzas tradicionales, el Templo de Oro de Dambulla, el jardín de especias de Matale, Kandy y el jardín botánico de Peradeniya. Después, estancia en media pensión en el Naya Collection The Eden 5* de Beruwala, 3, 5 o 7 noches. Otras fórmulas: solo Sigiriya con The Eden (8 días) desde 1.410 € por persona saliendo de París; Sigiriya y 3 noches con todo incluido en el Naya Collection Blue Waters 5* de Wadduwa (9 días) desde 1.614 €, o 7 noches (13 días) desde 2.143 €.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,Hôtels 3* puis hôtel 5* en bord de mer,Demi-pension,Visites du programme,Chauffeur-guide anglophone pendant les visites",
        "Flights from France,Airport transfers,3* hotels then a 5* beach hotel,Half board,Visits in the programme,English-speaking driver-guide during the tour",
        "Vuelos desde Francia,Traslados al aeropuerto,Hoteles de 3* y después hotel de 5* junto al mar,Media pensión,Visitas del programa,Chófer-guía de habla inglesa durante las visitas",
      ],
      price: 1479, nights: 7, departureFrom: "Luxembourg", image: "sk1",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -81992,
      chapters: [
        chapter(["Sigiriya et Kandy", "Sigiriya and Kandy", "Sigiriya y Kandy"],
          ["Quatre jours de visites en privé.", "Four days of private sightseeing.", "Cuatro días de visitas en privado."],
          ["sk1", "sk2", "sk3", "gm5"],
          [
            day(1, T_FLY, FLY, "sk3"),
            day(2, ["Arrivée à Colombo – Sigiriya et Polonnaruwa", "Arrival in Colombo – Sigiriya and Polonnaruwa", "Llegada a Colombo – Sigiriya y Polonnaruwa"], ["Accueil à l'aéroport et route vers Sigiriya. L'après-midi, le site de Polonnaruwa, classé à l'Unesco : le palais royal, les bassins et les trois bouddhas. En option, initiation au massage ayurvédique.", "Welcome at the airport and drive to Sigiriya. In the afternoon, the UNESCO site of Polonnaruwa: the royal palace, the pools and the three Buddhas. As an option, an introduction to Ayurvedic massage.", "Recibimiento en el aeropuerto y carretera hacia Sigiriya. Por la tarde, el sitio de Polonnaruwa, inscrito en la Unesco: el palacio real, los estanques y los tres budas. Opcional: iniciación al masaje ayurvédico."], "sk2"),
            day(3, ["Le Rocher du Lion et Hiriwadunna", "Lion Rock and Hiriwadunna", "La Roca del León e Hiriwadunna"], ["La forteresse de Sigiriya, puis le village d'Hiriwadunna en petit tracteur entre les rizières, une tisane ayurvédique dans une cabane du village et une balade en pirogue. Le soir, danses traditionnelles. En option, safari en jeep parmi les éléphants.", "The fortress of Sigiriya, then Hiriwadunna village by small tractor through the rice fields, an Ayurvedic herbal tea in a village hut and a canoe ride. In the evening, traditional dances. As an option, a jeep safari among the elephants.", "La fortaleza de Sigiriya y el pueblo de Hiriwadunna en pequeño tractor entre los arrozales, una infusión ayurvédica en una cabaña del pueblo y un paseo en piragua. Por la noche, danzas tradicionales. Opcional: safari en jeep entre los elefantes."], "sk1"),
            day(4, ["Dambulla – Matale – Kandy", "Dambulla – Matale – Kandy", "Dambulla – Matale – Kandy"], ["Le Temple d'Or de Dambulla, puis le jardin d'épices de Matale : cannelle, poivre, cardamome, girofle, muscade, curcuma et vanille. Arrivée à Kandy.", "The Golden Temple of Dambulla, then the Matale spice garden: cinnamon, pepper, cardamom, cloves, nutmeg, turmeric and vanilla. Arrival in Kandy.", "El Templo de Oro de Dambulla y el jardín de especias de Matale: canela, pimienta, cardamomo, clavo, nuez moscada, cúrcuma y vainilla. Llegada a Kandy."], "sk3"),
            day(5, ["Kandy – Peradeniya – Beruwala", "Kandy – Peradeniya – Beruwala", "Kandy – Peradeniya – Beruwala"], ["Le temple de la Dent, puis le jardin botanique de Peradeniya, avant la route vers la côte et le Naya Collection The Eden 5* à Beruwala.", "The Temple of the Tooth, then the Peradeniya botanical gardens, before the drive to the coast and the Naya Collection The Eden 5* in Beruwala.", "El templo del Diente y el jardín botánico de Peradeniya, antes de la carretera hacia la costa y el Naya Collection The Eden 5* de Beruwala."], "gm5"),
          ]),
        chapter(["Séjour plage à Beruwala", "Beach stay in Beruwala", "Estancia de playa en Beruwala"],
          ["Piscine, plage privée et demi-pension, pour 3, 5 ou 7 nuits.", "Pool, private beach and half board, for 3, 5 or 7 nights.", "Piscina, playa privada y media pensión, durante 3, 5 o 7 noches."],
          ["sk4", "sk5", "bw4", "bw5"],
          [
            day(6, ["Beruwala, journée libre", "Beruwala, free day", "Beruwala, jornada libre"], ["Journée libre au Naya Collection The Eden 5*, entre piscine et plage privée. L'hôtel propose aussi une démonstration culinaire, la visite d'une ferme de protection des tortues marines et une croisière sur la rivière Bentota. Formule tout compris en option.", "A free day at the Naya Collection The Eden 5*, between the pool and the private beach. The hotel also offers a cooking demonstration, a visit to a sea-turtle conservation farm and a cruise on the Bentota river. All-inclusive available as an option.", "Jornada libre en el Naya Collection The Eden 5*, entre la piscina y la playa privada. El hotel propone también una demostración culinaria, la visita de una granja de protección de tortugas marinas y un crucero por el río Bentota. Todo incluido opcional."], "sk4"),
            day(7, ["Beruwala, journée libre", "Beruwala, free day", "Beruwala, jornada libre"], ["Journée libre à l'hôtel.", "A free day at the hotel.", "Jornada libre en el hotel."], "sk5"),
            day(8, ["Beruwala, journée libre", "Beruwala, free day", "Beruwala, jornada libre"], ["Dernière journée au bord de l'océan Indien.", "A last day by the Indian Ocean.", "Última jornada junto al océano Índico."], "bw4"),
            day(9, ["Beruwala – vol retour", "Beruwala – flight home", "Beruwala – vuelo de regreso"], ["Selon l'horaire du vol, transfert à l'aéroport de Colombo et envol pour la France.", "Depending on your flight, transfer to Colombo airport and fly to France.", "Según el horario del vuelo, traslado al aeropuerto de Colombo y vuelo a Francia."], "bw5"),
            day(10, T_HOME, HOME, "sk1"),
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
