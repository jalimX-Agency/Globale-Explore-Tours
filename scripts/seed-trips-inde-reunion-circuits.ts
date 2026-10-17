// India, Reunion and Maldives circuits — 8 journey-format trips: five for "inde", two for
// "reunion" and the Sri Lanka + Maldives combination for "maldives". Extensions (Goa, the Ganges,
// Nepal, Mauritius) are described inside the trips. Prices are per-person "from" prices. Supplier
// product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-inde-reunion-circuits.ts
// Requires scripts/upload-images-inr-circuits.ts (and the Sri Lanka upload) to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "inde-magie-du-rajasthan-12j": ["245638", "245641", "245640", "245639"],
  "inde-rajasthan-intimiste-thar-bundi-ranthambore-15j": ["246318", "254298", "246338", "246339"],
  "inde-joyaux-inde-du-sud-tamil-nadu-kerala-11j": ["391699"],
  "inde-merveilles-du-kerala-munnar-backwaters-14j": ["372719"],
  "inde-beaute-du-ladakh-prive-14j": ["392158"],
  "reunion-joyau-ocean-indien-cirques-volcan-10j": ["332659", "396819"],
  "reunion-autotour-volcans-lagons-11j": ["395638"],
  "maldives-sri-lanka-incontournables-adaaran-13j": ["154260"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_FLY_IN: L3 = ["Envol pour l'Inde", "Flight to India", "Vuelo a la India"];
const T_UDAIPUR: L3 = ["Udaipur", "Udaipur", "Udaipur"];
const UDAIPUR: L3 = [
  "Le palais du Maharana au-dessus du lac Pichola, ses collections d'armes et de miniatures et ses salons de miroirs, puis la ville blanche.",
  "The Maharana's palace above Lake Pichola, its collections of weapons and miniatures and its mirrored rooms, then the white city.",
  "El palacio del Maharana sobre el lago Pichola, sus colecciones de armas y miniaturas y sus salones de espejos, y la ciudad blanca.",
];
const T_AMBER: L3 = ["Jaipur et le fort d'Amber", "Jaipur and Amber fort", "Jaipur y el fuerte de Amber"];
const AMBER: L3 = [
  "Le fort d'Amber au-dessus de son lac, le palais des Vents (Hawa Mahal), le City Palace et l'observatoire de Jantar Mantar de la ville rose.",
  "Amber fort above its lake, the Palace of the Winds (Hawa Mahal), the City Palace and the Jantar Mantar observatory of the pink city.",
  "El fuerte de Amber sobre su lago, el palacio de los Vientos (Hawa Mahal), el City Palace y el observatorio de Jantar Mantar de la ciudad rosa.",
];
const T_BIKANER: L3 = ["Bikaner et le fort de Junagarh", "Bikaner and Junagarh fort", "Bikaner y el fuerte de Junagarh"];
const BIKANER: L3 = [
  "Route à travers le désert du Thar vers Bikaner et son fort de Junagarh, dédale de palais, de temples et de couloirs du XVIe siècle.",
  "A drive across the Thar desert to Bikaner and its Junagarh fort, a maze of 16th-century palaces, temples and corridors.",
  "Carretera por el desierto del Thar hacia Bikaner y su fuerte de Junagarh, un laberinto de palacios, templos y pasillos del siglo XVI.",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const inN = circuitBuilders({ destinationSlug: "inde", imagePrefix: "inr", season: { label: ["Oct à mars", "Oct to March", "Oct a mar"], months: "october,november,december,january,february,march" } });
  const inL = circuitBuilders({ destinationSlug: "inde", imagePrefix: "inr", season: { label: ["Juin à sept", "June to Sept", "Jun a sept"], months: "june,july,august,september" } });
  const re = circuitBuilders({ destinationSlug: "reunion", imagePrefix: "inr", season: { label: ["Mai à nov", "May to Nov", "May a nov"], months: "may,june,july,august,september,october,november" } });
  const mv = circuitBuilders({ destinationSlug: "maldives", imagePrefix: "srilanka", season: { label: ["Déc à avril", "Dec to April", "Dic a abr"], months: "december,january,february,march,april" } });
  const indHome = (b: typeof inN, n: number, from: L3, img: string, img2: string) => [
    b.day(n, [`${from[0]} – vol retour`, `${from[1]} – flight home`, `${from[2]} – vuelo de regreso`], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], img),
    b.day(n + 1, T_HOME, HOME, img2),
  ];

  const journeyTrips = [
    // ───────────── Inde 1. Magie du Rajasthan — 12J/10N ─────────────
    inN.trip({
      slug: "inde-magie-du-rajasthan-12j",
      name: ["Magie du Rajasthan : les forts du désert, Udaipur, Jaipur et le Taj Mahal", "The Magic of Rajasthan: Desert Forts, Udaipur, Jaipur and the Taj Mahal", "Magia del Rajastán: los fuertes del desierto, Udaipur, Jaipur y el Taj Mahal"],
      tagline: ["Le grand tour du Rajasthan en petit groupe, des havelis du Shekhawati au Taj Mahal", "The grand tour of Rajasthan in a small group, from the havelis of Shekhawati to the Taj Mahal", "La gran vuelta al Rajastán en grupo reducido, de las havelis del Shekhawati al Taj Mahal"],
      description: [
        "Le Rajasthan en groupe de 16 personnes au plus : les havelis peintes de Mandawa, le fort de Junagarh à Bikaner, les villages bishnoïs en jeep autour de Dechu, le fort de Mehrangarh à Jodhpur, les temples de marbre de Ranakpur, Udaipur et son lac, la ville sainte de Pushkar, Jaipur et le fort d'Amber, les puits à degrés d'Abhaneri, puis Agra et le Taj Mahal. Avec une extension : Goa (15 jours) à partir de 2 439 € par personne, la vallée du Gange et Varanasi (2 458 €) ou le Népal (2 787 €).",
        "Rajasthan in a group of 16 at most: the painted havelis of Mandawa, Junagarh fort in Bikaner, the Bishnoi villages by jeep around Dechu, Mehrangarh fort in Jodhpur, the marble temples of Ranakpur, Udaipur and its lake, the holy town of Pushkar, Jaipur and Amber fort, the stepwells of Abhaneri, then Agra and the Taj Mahal. With an extension: Goa (15 days) from €2,439 per person, the Ganges valley and Varanasi (€2,458) or Nepal (€2,787).",
        "El Rajastán en grupo de 16 personas como máximo: las havelis pintadas de Mandawa, el fuerte de Junagarh en Bikaner, los pueblos bishnoi en jeep alrededor de Dechu, el fuerte de Mehrangarh en Jodhpur, los templos de mármol de Ranakpur, Udaipur y su lago, la ciudad santa de Pushkar, Jaipur y el fuerte de Amber, los pozos escalonados de Abhaneri, y Agra y el Taj Mahal. Con una extensión: Goa (15 días) desde 2.439 € por persona, el valle del Ganges y Varanasi (2.458 €) o Nepal (2.787 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,10 nuits en hôtels 3* et 4*,Pension selon programme,Visites du programme,Guide francophone",
        "Flights from France,Airport transfers,10 nights in 3* and 4* hotels,Meals as per programme,Visits in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,10 noches en hoteles de 3* y 4*,Comidas según programa,Visitas del programa,Guía francófono",
      ],
      price: 1752, nights: 10, departureFrom: "Nice", image: "rj2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 16, order: -65000,
      chapters: [
        inN.chapter(["Le Shekhawati et le désert", "Shekhawati and the desert", "El Shekhawati y el desierto"], ["Havelis, forts et villages bishnoïs.", "Havelis, forts and Bishnoi villages.", "Havelis, fuertes y pueblos bishnoi."],
          ["rj3", "rj9", "rj7"],
          [
            inN.day(1, ["Arrivée à Delhi", "Arrival in Delhi", "Llegada a Delhi"], ["Envol pour Delhi, accueil et transfert à l'hôtel.", "Flight to Delhi, welcome and transfer to the hotel.", "Vuelo a Delhi, recibimiento y traslado al hotel."], "rj10"),
            inN.day(2, ["Delhi – Mandawa", "Delhi – Mandawa", "Delhi – Mandawa"], ["Route vers la région du Shekhawati et le village de Mandawa, ses havelis peintes et son fort médiéval.", "Drive to the Shekhawati region and the village of Mandawa, its painted havelis and medieval fort.", "Carretera hacia la región del Shekhawati y el pueblo de Mandawa, sus havelis pintadas y su fuerte medieval."], "rj3"),
            inN.day(3, ["Mandawa – Bikaner", "Mandawa – Bikaner", "Mandawa – Bikaner"], [BIKANER[0], BIKANER[1], BIKANER[2]], "rj7"),
            inN.day(4, ["Bikaner – Dechu", "Bikaner – Dechu", "Bikaner – Dechu"], ["Route vers Dechu et balade en jeep dans les villages bishnoïs, communauté hindoue qui protège la nature et les animaux.", "Drive to Dechu and a jeep ride through the Bishnoi villages, a Hindu community that protects nature and animals.", "Carretera hacia Dechu y paseo en jeep por los pueblos bishnoi, comunidad hindú que protege la naturaleza y los animales."], "rj9"),
            inN.day(5, ["Dechu – Jodhpur", "Dechu – Jodhpur", "Dechu – Jodhpur"], ["Jodhpur, la ville bleue, son fort de Mehrangarh perché sur la falaise et le cénotaphe de Jaswant Thada.", "Jodhpur, the blue city, its Mehrangarh fort perched on the cliff and the Jaswant Thada cenotaph.", "Jodhpur, la ciudad azul, su fuerte de Mehrangarh en lo alto del acantilado y el cenotafio de Jaswant Thada."], "rj9"),
          ]),
        inN.chapter(["Udaipur, Pushkar et Jaipur", "Udaipur, Pushkar and Jaipur", "Udaipur, Pushkar y Jaipur"], ["Temples de marbre, ville des lacs et ville rose.", "Marble temples, the city of lakes and the pink city.", "Templos de mármol, la ciudad de los lagos y la ciudad rosa."],
          ["rj8", "rj2", "rj3", "rj5"],
          [
            inN.day(6, ["Ranakpur – Udaipur", "Ranakpur – Udaipur", "Ranakpur – Udaipur"], ["Les temples jaïns de Ranakpur, dont celui d'Adinath et ses 1 444 colonnes de marbre, puis Udaipur.", "The Jain temples of Ranakpur, including Adinath and its 1,444 marble pillars, then Udaipur.", "Los templos jainistas de Ranakpur, entre ellos el de Adinath y sus 1.444 columnas de mármol, y Udaipur."], "rj8"),
            inN.day(7, T_UDAIPUR, UDAIPUR, "rj8"),
            inN.day(8, ["Pushkar – Jaipur", "Pushkar – Jaipur", "Pushkar – Jaipur"], ["Pushkar, ville de pèlerinage au bord de son lac sacré, puis Jaipur.", "Pushkar, a pilgrimage town by its sacred lake, then Jaipur.", "Pushkar, ciudad de peregrinación junto a su lago sagrado, y Jaipur."], "rj5"),
            inN.day(9, T_AMBER, AMBER, "rj2"),
          ]),
        inN.chapter(["Abhaneri, Agra et Delhi", "Abhaneri, Agra and Delhi", "Abhaneri, Agra y Delhi"], ["Le puits à degrés et le Taj Mahal.", "The stepwell and the Taj Mahal.", "El pozo escalonado y el Taj Mahal."],
          ["rj1", "rj10"],
          [
            inN.day(10, ["Abhaneri – Agra", "Abhaneri – Agra", "Abhaneri – Agra"], ["Les puits à degrés d'Abhaneri et le temple d'Harshat Mata, puis Agra et le Taj Mahal.", "The stepwells of Abhaneri and Harshat Mata temple, then Agra and the Taj Mahal.", "Los pozos escalonados de Abhaneri y el templo de Harshat Mata, y Agra y el Taj Mahal."], "rj1"),
            inN.day(11, ["Agra – Delhi – vol retour", "Agra – Delhi – flight home", "Agra – Delhi – vuelo de regreso"], ["Route vers Delhi, la vieille ville moghole et New Delhi, puis envol pour la France.", "Drive to Delhi, the old Mughal city and New Delhi, then fly to France.", "Carretera hacia Delhi, la vieja ciudad mogol y Nueva Delhi, y vuelo a Francia."], "rj10"),
            inN.day(12, T_HOME, HOME, "rj1"),
          ]),
      ],
    }),

    // ───────────── Inde 2. Rajasthan intimiste — 15J/13N ─────────────
    inN.trip({
      slug: "inde-rajasthan-intimiste-thar-bundi-ranthambore-15j",
      name: ["Rajasthan intimiste : Jaisalmer, Chittorgarh, Bundi et les tigres de Ranthambore", "Rajasthan Up Close: Jaisalmer, Chittorgarh, Bundi and the Tigers of Ranthambore", "Rajastán íntimo: Jaisalmer, Chittorgarh, Bundi y los tigres de Ranthambore"],
      tagline: ["Quatorze voyageurs au plus, une nuit dans un château et deux safaris", "Fourteen travellers at most, a night in a castle and two safaris", "Catorce viajeros como máximo, una noche en un castillo y dos safaris"],
      description: [
        "Un Rajasthan moins fréquenté, en groupe de 14 personnes au plus : une nuit au château de Khandela, Bikaner, la citadelle dorée de Jaisalmer au cœur du désert du Thar, la vie rurale autour de Bhenswara, Udaipur, le train et le tuk-tuk jusqu'au fort de Chittorgarh, Bundi et ses palais peints, deux safaris dans le parc de Ranthambore, Jaipur et le fort d'Amber, Agra et le Taj Mahal, puis le train pour Delhi. Avec une extension : Goa (18 jours) à partir de 3 089 € par personne, la vallée du Gange (3 092 €) ou le Népal (3 417 €).",
        "A less-visited Rajasthan, in a group of 14 at most: a night in Khandela castle, Bikaner, the golden citadel of Jaisalmer in the heart of the Thar desert, rural life around Bhenswara, Udaipur, the train and a tuk-tuk to Chittorgarh fort, Bundi and its painted palaces, two safaris in Ranthambore park, Jaipur and Amber fort, Agra and the Taj Mahal, then the train to Delhi. With an extension: Goa (18 days) from €3,089 per person, the Ganges valley (€3,092) or Nepal (€3,417).",
        "Un Rajastán menos visitado, en grupo de 14 personas como máximo: una noche en el castillo de Khandela, Bikaner, la ciudadela dorada de Jaisalmer en el corazón del desierto del Thar, la vida rural alrededor de Bhenswara, Udaipur, el tren y el tuk-tuk hasta el fuerte de Chittorgarh, Bundi y sus palacios pintados, dos safaris en el parque de Ranthambore, Jaipur y el fuerte de Amber, Agra y el Taj Mahal, y el tren a Delhi. Con una extensión: Goa (18 días) desde 3.089 € por persona, el valle del Ganges (3.092 €) o Nepal (3.417 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,13 nuits en hôtels et châteaux,Pension selon programme,Safaris à Ranthambore,Trains du programme,Guide francophone",
        "Flights from France,Airport transfers,13 nights in hotels and castles,Meals as per programme,Safaris in Ranthambore,Trains in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,13 noches en hoteles y castillos,Comidas según programa,Safaris en Ranthambore,Trenes del programa,Guía francófono",
      ],
      price: 2357, nights: 13, departureFrom: "Paris", image: "ri3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 14, order: -64999,
      chapters: [
        inN.chapter(["Le désert du Thar", "The Thar desert", "El desierto del Thar"], ["Un château, Bikaner et la citadelle de Jaisalmer.", "A castle, Bikaner and the citadel of Jaisalmer.", "Un castillo, Bikaner y la ciudadela de Jaisalmer."],
          ["ri2", "ri6", "rj7"],
          [
            inN.day(1, ["Arrivée à Delhi", "Arrival in Delhi", "Llegada a Delhi"], ["Envol pour Delhi, accueil et transfert à l'hôtel.", "Flight to Delhi, welcome and transfer to the hotel.", "Vuelo a Delhi, recibimiento y traslado al hotel."], "rj10"),
            inN.day(2, ["Delhi – Khandela", "Delhi – Khandela", "Delhi – Khandela"], ["Route vers le château de Khandela, ancienne demeure d'un rajah devenue hôtel, où vous passez la nuit.", "Drive to Khandela castle, a rajah's old home turned hotel, where you spend the night.", "Carretera hacia el castillo de Khandela, antigua residencia de un rajá convertida en hotel, donde pasa la noche."], "ri1"),
            inN.day(3, ["Khandela – Bikaner", "Khandela – Bikaner", "Khandela – Bikaner"], [BIKANER[0], BIKANER[1], BIKANER[2]], "rj7"),
            inN.day(4, ["Bikaner – Jaisalmer", "Bikaner – Jaisalmer", "Bikaner – Jaisalmer"], ["Route vers Jaisalmer et le lac de Gadisar, ancien réservoir de la ville.", "Drive to Jaisalmer and Gadisar lake, the town's old reservoir.", "Carretera hacia Jaisalmer y el lago de Gadisar, antiguo depósito de la ciudad."], "ri6"),
            inN.day(5, ["Jaisalmer", "Jaisalmer", "Jaisalmer"], ["La citadelle dorée, dressée comme un mirage au-dessus du désert, ses havelis sculptées et ses temples jaïns.", "The golden citadel, rising like a mirage above the desert, its carved havelis and Jain temples.", "La ciudadela dorada, alzada como un espejismo sobre el desierto, sus havelis talladas y sus templos jainistas."], "ri2"),
          ]),
        inN.chapter(["Udaipur, Chittorgarh et Bundi", "Udaipur, Chittorgarh and Bundi", "Udaipur, Chittorgarh y Bundi"], ["Villages, palais et forteresses.", "Villages, palaces and fortresses.", "Pueblos, palacios y fortalezas."],
          ["ri3", "ri4", "ri5", "ri1"],
          [
            inN.day(6, ["Jaisalmer – Bhenswara", "Jaisalmer – Bhenswara", "Jaisalmer – Bhenswara"], ["Route vers Bhenswara et excursion en jeep à la découverte de la vie rurale.", "Drive to Bhenswara and a jeep excursion to see rural life.", "Carretera hacia Bhenswara y excursión en jeep para descubrir la vida rural."], "ri7"),
            inN.day(7, ["Bhenswara – Udaipur", "Bhenswara – Udaipur", "Bhenswara – Udaipur"], [UDAIPUR[0], UDAIPUR[1], UDAIPUR[2]], "ri3"),
            inN.day(8, ["Udaipur – Chittorgarh", "Udaipur – Chittorgarh", "Udaipur – Chittorgarh"], ["Train pour Chittorgarh, puis tuk-tuk jusqu'au fort, l'un des plus vastes de l'Inde.", "Train to Chittorgarh, then a tuk-tuk up to the fort, one of the largest in India.", "Tren a Chittorgarh y tuk-tuk hasta el fuerte, uno de los más grandes de la India."], "ri5"),
            inN.day(9, ["Bundi", "Bundi", "Bundi"], ["Le fort de Taragarh et sa vue sur la plaine, puis le palais de Bundi et ses fresques.", "Taragarh fort and its view over the plain, then Bundi palace and its frescoes.", "El fuerte de Taragarh y su vista sobre la llanura, y el palacio de Bundi y sus frescos."], "ri4"),
          ]),
        inN.chapter(["Ranthambore, Jaipur et Agra", "Ranthambore, Jaipur and Agra", "Ranthambore, Jaipur y Agra"], ["Les tigres, la ville rose et le Taj Mahal.", "The tigers, the pink city and the Taj Mahal.", "Los tigres, la ciudad rosa y el Taj Mahal."],
          ["ri8", "ri7", "rj2", "rj1"],
          [
            inN.day(10, ["Bundi – Ranthambore", "Bundi – Ranthambore", "Bundi – Ranthambore"], ["Route vers le parc national de Ranthambore et premier safari parmi ses ruines et sa faune.", "Drive to Ranthambore National Park and a first safari among its ruins and wildlife.", "Carretera hacia el parque nacional de Ranthambore y primer safari entre sus ruinas y su fauna."], "ri8"),
            inN.day(11, ["Ranthambore – Jaipur", "Ranthambore – Jaipur", "Ranthambore – Jaipur"], ["Second safari au petit matin, puis route vers Jaipur, la ville rose.", "A second safari at dawn, then the drive to Jaipur, the pink city.", "Segundo safari al amanecer y carretera hacia Jaipur, la ciudad rosa."], "ri7"),
            inN.day(12, T_AMBER, AMBER, "rj2"),
            inN.day(13, ["Jaipur – Agra", "Jaipur – Agra", "Jaipur – Agra"], ["Route vers Agra, son Fort rouge et le Taj Mahal.", "Drive to Agra, its Red Fort and the Taj Mahal.", "Carretera hacia Agra, su Fuerte Rojo y el Taj Mahal."], "rj1"),
            inN.day(14, ["Agra – Delhi en train – vol retour", "Agra – Delhi by train – flight home", "Agra – Delhi en tren – vuelo de regreso"], ["Train pour Delhi, tour panoramique de New Delhi, puis envol pour la France.", "Train to Delhi, a panoramic tour of New Delhi, then fly to France.", "Tren a Delhi, vuelta panorámica por Nueva Delhi y vuelo a Francia."], "rj10"),
            inN.day(15, T_HOME, HOME, "ri3"),
          ]),
      ],
    }),

    // ───────────── Inde 3. Joyaux de l'Inde du Sud — 11J/9N ─────────────
    inN.trip({
      slug: "inde-joyaux-inde-du-sud-tamil-nadu-kerala-11j",
      name: ["Joyaux de l'Inde du Sud : Mahabalipuram, Pondichéry, Madurai et les backwaters", "Jewels of South India: Mahabalipuram, Pondicherry, Madurai and the Backwaters", "Joyas del sur de la India: Mahabalipuram, Pondicherry, Madurai y los backwaters"],
      tagline: ["Les temples du Tamil Nadu, puis le Kerala en péniche", "The temples of Tamil Nadu, then Kerala by houseboat", "Los templos de Tamil Nadu y Kerala en barcaza"],
      description: [
        "Le sud de l'Inde de Chennai à Cochin, en groupe accompagné : les temples de Mahabalipuram au bord de la mer, Pondichéry et son quartier français, le temple de Chidambaram, le grand temple de Tanjore, les palais de Chettinad, Madurai et son temple de Meenakshi, la réserve de Periyar et une cuisine du Kerala, une croisière sur le lac Vembanad en péniche traditionnelle, puis Cochin et son palais hollandais.",
        "South India from Chennai to Cochin, on a guided tour: the seaside temples of Mahabalipuram, Pondicherry and its French quarter, Chidambaram temple, the great temple of Thanjavur, the palaces of Chettinad, Madurai and its Meenakshi temple, Periyar reserve and Kerala cooking, a cruise on Lake Vembanad by traditional houseboat, then Cochin and its Dutch palace.",
        "El sur de la India de Chennai a Cochín, en circuito acompañado: los templos de Mahabalipuram junto al mar, Pondicherry y su barrio francés, el templo de Chidambaram, el gran templo de Tanjore, los palacios de Chettinad, Madurai y su templo de Meenakshi, la reserva de Periyar y la cocina de Kerala, un crucero por el lago Vembanad en barcaza tradicional, y Cochín y su palacio holandés.",
      ],
      includes: [
        "Vols depuis la France (aller Chennai; retour Cochin),Transferts aéroport,9 nuits en hôtels 3* et 4*,Pension selon programme,Visites du programme,Guide francophone",
        "Flights from France (out to Chennai; back from Cochin),Airport transfers,9 nights in 3* and 4* hotels,Meals as per programme,Visits in the programme,French-speaking guide",
        "Vuelos desde Francia (ida a Chennai; regreso desde Cochín),Traslados al aeropuerto,9 noches en hoteles de 3* y 4*,Comidas según programa,Visitas del programa,Guía francófono",
      ],
      price: 1364, nights: 9, departureFrom: "Barcelone", image: "su5",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 30, order: -64998,
      chapters: [
        inN.chapter(["Le Tamil Nadu", "Tamil Nadu", "Tamil Nadu"], ["Temples, comptoir français et palais de Chettinad.", "Temples, a French trading post and the palaces of Chettinad.", "Templos, una factoría francesa y los palacios de Chettinad."],
          ["su2", "su4", "su5", "rj6"],
          [
            inN.day(1, T_FLY_IN, ["Envol à destination de Chennai. Nuit à bord.", "Flight to Chennai. Night on board.", "Vuelo con destino a Chennai. Noche a bordo."], "su5"),
            inN.day(2, ["Arrivée à Chennai", "Arrival in Chennai", "Llegada a Chennai"], ["Accueil et transfert à l'hôtel.", "Welcome and transfer to the hotel.", "Recibimiento y traslado al hotel."], "su5"),
            inN.day(3, ["Mahabalipuram – Pondichéry", "Mahabalipuram – Pondicherry", "Mahabalipuram – Pondicherry"], ["Les temples monolithiques et les sculptures de Mahabalipuram, classés à l'Unesco, puis Pondichéry et son quartier français.", "The monolithic temples and carvings of Mahabalipuram, a UNESCO site, then Pondicherry and its French quarter.", "Los templos monolíticos y las esculturas de Mahabalipuram, inscritos en la Unesco, y Pondicherry y su barrio francés."], "su4"),
            inN.day(4, ["Chidambaram – Swamimalai", "Chidambaram – Swamimalai", "Chidambaram – Swamimalai"], ["Un village de pêcheurs, puis le temple de Chidambaram et ses grandes tours sculptées.", "A fishing village, then Chidambaram temple and its great carved towers.", "Un pueblo de pescadores y el templo de Chidambaram y sus grandes torres talladas."], "rj6"),
            inN.day(5, ["Tanjore", "Thanjavur", "Tanjore"], ["Le temple de Brihadeeswarar à Tanjore, chef-d'œuvre de l'architecture chola classé à l'Unesco.", "Brihadeeswarar temple in Thanjavur, a masterpiece of Chola architecture listed by UNESCO.", "El templo de Brihadeeswarar en Tanjore, obra maestra de la arquitectura chola inscrita en la Unesco."], "su2"),
            inN.day(6, ["Chettinad – Madurai", "Chettinad – Madurai", "Chettinad – Madurai"], ["Les palais de Chettinad et les carreaux d'Athangudi, puis Madurai et, le soir, la cérémonie au temple de Meenakshi.", "The palaces of Chettinad and the tiles of Athangudi, then Madurai and, in the evening, the ceremony at Meenakshi temple.", "Los palacios de Chettinad y las baldosas de Athangudi, y Madurai y, por la noche, la ceremonia en el templo de Meenakshi."], "ke7"),
          ]),
        inN.chapter(["Le Kerala", "Kerala", "Kerala"], ["Épices, backwaters et Cochin.", "Spices, backwaters and Cochin.", "Especias, backwaters y Cochín."],
          ["su1", "su3", "ke1"],
          [
            inN.day(7, ["Madurai – Periyar", "Madurai – Periyar", "Madurai – Periyar"], ["Route vers la réserve de Periyar et un déjeuner fait maison avec une initiation à la cuisine du Kerala.", "Drive to Periyar reserve and a home-cooked lunch with an introduction to Kerala cooking.", "Carretera hacia la reserva de Periyar y un almuerzo casero con una iniciación a la cocina de Kerala."], "ke8"),
            inN.day(8, ["Les backwaters en péniche", "The backwaters by houseboat", "Los backwaters en barcaza"], ["À travers les plantations de thé et d'épices jusqu'à Kumarakom, puis croisière en péniche sur le lac Vembanad.", "Through the tea and spice plantations to Kumarakom, then a houseboat cruise on Lake Vembanad.", "Entre plantaciones de té y especias hasta Kumarakom, y crucero en barcaza por el lago Vembanad."], "su3"),
            inN.day(9, ["Alleppey – Cochin", "Alleppey – Cochin", "Alleppey – Cochín"], ["Cochin, ancien port des épices : le palais hollandais et ses peintures murales, les filets de pêche chinois.", "Cochin, the old spice port: the Dutch palace and its murals, the Chinese fishing nets.", "Cochín, antiguo puerto de las especias: el palacio holandés y sus pinturas murales, las redes de pesca chinas."], "ke1"),
            ...indHome(inN, 10, ["Cochin", "Cochin", "Cochín"], "ke2", "su1"),
          ]),
      ],
    }),

    // ───────────── Inde 4. Merveilles du Kerala — 14J/11N ─────────────
    inN.trip({
      slug: "inde-merveilles-du-kerala-munnar-backwaters-14j",
      name: ["Merveilles du Kerala : Cochin, Munnar, Madurai, Periyar et les backwaters", "Wonders of Kerala: Cochin, Munnar, Madurai, Periyar and the Backwaters", "Maravillas de Kerala: Cochín, Munnar, Madurai, Periyar y los backwaters"],
      tagline: ["Douze voyageurs au plus, une nuit en houseboat et deux jours au bord de l'océan", "Twelve travellers at most, a night on a houseboat and two days by the ocean", "Doce viajeros como máximo, una noche en houseboat y dos días junto al océano"],
      description: [
        "Le Kerala en petit groupe de 12 personnes au plus : Fort Cochin en rickshaw, un village de pêcheurs, l'école de danse kathakali du Kerala Kalamandalam, les plantations de thé de Munnar avec un naturaliste, Madurai et son grand temple, un déjeuner chez l'habitant et un jardin d'épices à Periyar, un radeau de bambou sur le lac de la réserve, une nuit en houseboat sur les backwaters, puis la plage de Marari.",
        "Kerala in a small group of 12 at most: Fort Cochin by rickshaw, a fishing village, the Kerala Kalamandalam kathakali dance school, the Munnar tea plantations with a naturalist, Madurai and its great temple, lunch with a family and a spice garden in Periyar, a bamboo raft on the reserve's lake, a night on a houseboat on the backwaters, then Marari beach.",
        "Kerala en grupo reducido de 12 personas como máximo: Fort Cochín en rickshaw, un pueblo de pescadores, la escuela de danza kathakali del Kerala Kalamandalam, las plantaciones de té de Munnar con un naturalista, Madurai y su gran templo, un almuerzo en casa local y un jardín de especias en Periyar, una balsa de bambú en el lago de la reserva, una noche en houseboat por los backwaters, y la playa de Marari.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,11 nuits en hôtels et houseboat,Pension selon programme,Visites du programme,Guide francophone",
        "Flights from France,Airport transfers,11 nights in hotels and a houseboat,Meals as per programme,Visits in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,11 noches en hoteles y houseboat,Comidas según programa,Visitas del programa,Guía francófono",
      ],
      price: 2570, nights: 11, departureFrom: "Paris", image: "ke10",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 12, order: -64997,
      chapters: [
        inN.chapter(["Cochin et Thrissur", "Cochin and Thrissur", "Cochín y Thrissur"], ["Le vieux port, les pêcheurs et la danse.", "The old port, the fishermen and dance.", "El viejo puerto, los pescadores y la danza."],
          ["ke1", "ke2", "ke3", "ke4"],
          [
            inN.day(1, T_FLY_IN, ["Envol à destination de Cochin. Nuit à bord.", "Flight to Cochin. Night on board.", "Vuelo con destino a Cochín. Noche a bordo."], "ke1"),
            inN.day(2, ["Arrivée à Cochin", "Arrival in Cochin", "Llegada a Cochín"], ["Accueil et transfert à l'hôtel.", "Welcome and transfer to the hotel.", "Recibimiento y traslado al hotel."], "ke1"),
            inN.day(3, ["Fort Cochin", "Fort Cochin", "Fort Cochín"], ["Fort Cochin en rickshaw : ruelles ombragées, maisons fleuries et filets de pêche chinois.", "Fort Cochin by rickshaw: shady lanes, flower-decked houses and Chinese fishing nets.", "Fort Cochín en rickshaw: callejuelas sombreadas, casas floridas y redes de pesca chinas."], "ke2"),
            inN.day(4, ["Chellanam – Thrissur", "Chellanam – Thrissur", "Chellanam – Thrissur"], ["Une matinée au village de pêcheurs de Chellanam et ses techniques traditionnelles, puis Thrissur.", "A morning in the fishing village of Chellanam and its traditional techniques, then Thrissur.", "Una mañana en el pueblo de pescadores de Chellanam y sus técnicas tradicionales, y Thrissur."], "ke3"),
            inN.day(5, ["Kalamandalam – Munnar", "Kalamandalam – Munnar", "Kalamandalam – Munnar"], ["L'école de danse et de musique du Kerala Kalamandalam, puis la route des montagnes vers Munnar.", "The Kerala Kalamandalam school of dance and music, then the mountain road to Munnar.", "La escuela de danza y música del Kerala Kalamandalam y la carretera de montaña hacia Munnar."], "ke4"),
          ]),
        inN.chapter(["Munnar, Madurai et Periyar", "Munnar, Madurai and Periyar", "Munnar, Madurai y Periyar"], ["Thé, temple et épices.", "Tea, a temple and spices.", "Té, templo y especias."],
          ["ke5", "ke7", "ke8", "ke9"],
          [
            inN.day(6, ["Munnar et le thé", "Munnar and tea", "Munnar y el té"], ["Randonnée dans les plantations de Lockhart avec un naturaliste et visite d'une fabrique de thé.", "A walk through the Lockhart plantations with a naturalist and a visit to a tea factory.", "Caminata por las plantaciones de Lockhart con un naturalista y visita de una fábrica de té."], "ke5"),
            inN.day(7, ["Munnar – Madurai", "Munnar – Madurai", "Munnar – Madurai"], ["Route vers Madurai, dans le Tamil Nadu, et un village de potiers.", "Drive to Madurai, in Tamil Nadu, and a potters' village.", "Carretera hacia Madurai, en Tamil Nadu, y un pueblo de alfareros."], "ke6"),
            inN.day(8, ["Madurai", "Madurai", "Madurai"], ["L'une des plus anciennes villes du sud de l'Inde et son grand temple de Meenakshi.", "One of the oldest cities in South India and its great Meenakshi temple.", "Una de las ciudades más antiguas del sur de la India y su gran templo de Meenakshi."], "ke7"),
            inN.day(9, ["Madurai – Periyar", "Madurai – Periyar", "Madurai – Periyar"], ["Déjeuner chez une famille, puis un jardin d'épices.", "Lunch with a family, then a spice garden.", "Almuerzo con una familia y un jardín de especias."], "ke8"),
            inN.day(10, ["Periyar – Alleppey", "Periyar – Alleppey", "Periyar – Alleppey"], ["Un radeau de bambou sur le lac de la réserve de Periyar, puis Alleppey.", "A bamboo raft on the lake of Periyar reserve, then Alleppey.", "Una balsa de bambú en el lago de la reserva de Periyar y Alleppey."], "ke9"),
          ]),
        inN.chapter(["Les backwaters et Marari", "The backwaters and Marari", "Los backwaters y Marari"], ["Une nuit sur l'eau, puis l'océan.", "A night on the water, then the ocean.", "Una noche en el agua y el océano."],
          ["ke10", "su1", "su3"],
          [
            inN.day(11, ["Les backwaters en houseboat", "The backwaters by houseboat", "Los backwaters en houseboat"], ["Croisière en houseboat sur les canaux, les lagunes et le lac Vembanad, puis Marari.", "A houseboat cruise along the canals, lagoons and Lake Vembanad, then Marari.", "Crucero en houseboat por los canales, las lagunas y el lago Vembanad, y Marari."], "ke10"),
            inN.day(12, ["Marari", "Marari", "Marari"], ["Le retour des pêcheurs au petit matin et une journée libre au bord de l'océan Indien.", "The fishermen coming home at dawn and a free day by the Indian Ocean.", "El regreso de los pescadores al amanecer y una jornada libre junto al océano Índico."], "su1"),
            inN.day(13, ["Marari – Cochin – vol retour", "Marari – Cochin – flight home", "Marari – Cochín – vuelo de regreso"], ["Transfert à l'aéroport de Cochin et envol pour la France.", "Transfer to Cochin airport and fly to France.", "Traslado al aeropuerto de Cochín y vuelo a Francia."], "su3"),
            inN.day(14, T_HOME, HOME, "ke10"),
          ]),
      ],
    }),

    // ───────────── Inde 5. Beauté du Ladakh — 14J/12N privatif ─────────────
    inL.trip({
      slug: "inde-beaute-du-ladakh-prive-14j",
      name: ["Beauté du Ladakh en privé : monastères, vallée de la Nubra et lac Tso Moriri", "The Beauty of Ladakh in Private: Monasteries, the Nubra Valley and Lake Tso Moriri", "Belleza de Ladakh en privado: monasterios, el valle de Nubra y el lago Tso Moriri"],
      tagline: ["Le petit Tibet indien, par des cols à plus de 5 000 m, avec un guide francophone", "India's Little Tibet, over passes above 5,000 m, with a French-speaking guide", "El pequeño Tíbet indio, por puertos de más de 5.000 m, con un guía francófono"],
      description: [
        "Un voyage privé dans l'Himalaya indien, en pension complète : vol pour Leh à 3 350 m, la prière du matin au monastère de Thiksey, Hemis et Shey, la confluence de l'Indus et du Zanskar, les fresques d'Alchi, le monastère de Lamayuru dans ses paysages lunaires, le col de Khardung La (5 602 m) et la vallée de la Nubra, le temple caché d'Entsa, le col de Wari La, le lac Tso Moriri et les nomades changpa, le lac salé de Tso Kar, puis le vieux Delhi.",
        "A private trip into the Indian Himalayas, on full board: a flight to Leh at 3,350 m, morning prayer at Thiksey monastery, Hemis and Shey, the confluence of the Indus and Zanskar, the frescoes of Alchi, Lamayuru monastery in its lunar landscape, the Khardung La pass (5,602 m) and the Nubra valley, the hidden temple of Entsa, the Wari La pass, Lake Tso Moriri and the Changpa nomads, the salt lake of Tso Kar, then old Delhi.",
        "Un viaje privado al Himalaya indio, en pensión completa: vuelo a Leh a 3.350 m, la oración de la mañana en el monasterio de Thiksey, Hemis y Shey, la confluencia del Indo y el Zanskar, los frescos de Alchi, el monasterio de Lamayuru en su paisaje lunar, el puerto de Khardung La (5.602 m) y el valle de Nubra, el templo escondido de Entsa, el puerto de Wari La, el lago Tso Moriri y los nómadas changpa, el lago salado de Tso Kar, y el viejo Delhi.",
      ],
      includes: [
        "Vols depuis la France,Vols Delhi – Leh aller-retour,Voyage privé,12 nuits en hôtels et camps,Pension complète,Guide francophone",
        "Flights from France,Return flights Delhi – Leh,Private trip,12 nights in hotels and camps,Full board,French-speaking guide",
        "Vuelos desde Francia,Vuelos Delhi – Leh ida y vuelta,Viaje privado,12 noches en hoteles y campamentos,Pensión completa,Guía francófono",
      ],
      price: 3264, nights: 12, departureFrom: "Paris", image: "la1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo", maxGuests: 8, order: -64996,
      chapters: [
        inL.chapter(["Delhi et Leh", "Delhi and Leh", "Delhi y Leh"], ["Vol au-dessus de l'Himalaya et premiers monastères.", "A flight over the Himalayas and the first monasteries.", "Vuelo sobre el Himalaya y primeros monasterios."],
          ["la4", "la1"],
          [
            inL.day(1, T_FLY_IN, ["Envol à destination de Delhi. Nuit à bord.", "Flight to Delhi. Night on board.", "Vuelo con destino a Delhi. Noche a bordo."], "rj10"),
            inL.day(2, ["Arrivée à Delhi", "Arrival in Delhi", "Llegada a Delhi"], ["Accueil et visite du temple sikh de Bangla Sahib.", "Welcome and a visit to the Sikh temple of Bangla Sahib.", "Recibimiento y visita del templo sij de Bangla Sahib."], "rj10"),
            inL.day(3, ["Vol pour Leh", "Flight to Leh", "Vuelo a Leh"], ["Vol au-dessus de l'Himalaya jusqu'à Leh, à 3 350 m d'altitude. Journée de repos pour s'acclimater.", "A flight over the Himalayas to Leh, at 3,350 m. A day of rest to acclimatise.", "Vuelo sobre el Himalaya hasta Leh, a 3.350 m de altitud. Día de descanso para aclimatarse."], "la5"),
            inL.day(4, ["Thiksey, Hemis et Shey", "Thiksey, Hemis and Shey", "Thiksey, Hemis y Shey"], ["La prière du matin au monastère de Thiksey, puis Hemis et le palais de Shey.", "Morning prayer at Thiksey monastery, then Hemis and Shey palace.", "La oración de la mañana en el monasterio de Thiksey, y Hemis y el palacio de Shey."], "la4"),
          ]),
        inL.chapter(["La vallée de l'Indus", "The Indus valley", "El valle del Indo"], ["Alchi, Lamayuru et Likir.", "Alchi, Lamayuru and Likir.", "Alchi, Lamayuru y Likir."],
          ["la2", "la3"],
          [
            inL.day(5, ["Leh – Alchi", "Leh – Alchi", "Leh – Alchi"], ["La confluence de l'Indus et du Zanskar, les grottes peintes de Saspol, puis le monastère d'Alchi et ses fresques.", "The confluence of the Indus and Zanskar, the painted caves of Saspol, then Alchi monastery and its frescoes.", "La confluencia del Indo y el Zanskar, las cuevas pintadas de Saspol y el monasterio de Alchi y sus frescos."], "la3"),
            inL.day(6, ["Lamayuru et Rizdong", "Lamayuru and Rizdong", "Lamayuru y Rizdong"], ["Le monastère de Lamayuru, l'un des plus anciens du Ladakh, au milieu des paysages lunaires.", "Lamayuru monastery, one of the oldest in Ladakh, among lunar landscapes.", "El monasterio de Lamayuru, uno de los más antiguos de Ladakh, entre paisajes lunares."], "la2"),
            inL.day(7, ["Likir et Basgo – Leh", "Likir and Basgo – Leh", "Likir y Basgo – Leh"], ["Le monastère de Likir et un atelier de poterie traditionnelle, puis retour à Leh.", "Likir monastery and a traditional pottery workshop, then back to Leh.", "El monasterio de Likir y un taller de cerámica tradicional, y regreso a Leh."], "la5"),
          ]),
        inL.chapter(["Nubra et Tso Moriri", "Nubra and Tso Moriri", "Nubra y Tso Moriri"], ["Les grands cols et les lacs d'altitude.", "The high passes and the high-altitude lakes.", "Los grandes puertos y los lagos de altura."],
          ["la6", "la5"],
          [
            inL.day(8, ["Le col de Khardung La – Nubra", "The Khardung La pass – Nubra", "El puerto de Khardung La – Nubra"], ["Le col de Khardung La à 5 602 m, puis la vallée de la Nubra et ses dunes.", "The Khardung La pass at 5,602 m, then the Nubra valley and its dunes.", "El puerto de Khardung La a 5.602 m y el valle de Nubra y sus dunas."], "la5"),
            inL.day(9, ["Le temple d'Entsa", "Entsa temple", "El templo de Entsa"], ["Une marche jusqu'au temple caché d'Entsa et sa vue sur la vallée.", "A walk up to the hidden temple of Entsa and its view over the valley.", "Una caminata hasta el templo escondido de Entsa y su vista sobre el valle."], "la3"),
            inL.day(10, ["Wari La – Sakti", "Wari La – Sakti", "Wari La – Sakti"], ["Par des villages reculés et le col de Wari La (5 300 m) jusqu'à Sakti.", "Through remote villages and over the Wari La pass (5,300 m) to Sakti.", "Por pueblos remotos y el puerto de Wari La (5.300 m) hasta Sakti."], "la1"),
            inL.day(11, ["Le lac Tso Moriri", "Lake Tso Moriri", "El lago Tso Moriri"], ["Le lac Tso Moriri, le monastère de Karzok et la rencontre des nomades changpa.", "Lake Tso Moriri, Karzok monastery and a meeting with the Changpa nomads.", "El lago Tso Moriri, el monasterio de Karzok y el encuentro con los nómadas changpa."], "la6"),
            inL.day(12, ["Tso Kar – Leh", "Tso Kar – Leh", "Tso Kar – Leh"], ["Le lac salé de Tso Kar et ses oiseaux, puis le col de Taglang La (5 324 m) et retour à Leh.", "The salt lake of Tso Kar and its birds, then the Taglang La pass (5,324 m) and back to Leh.", "El lago salado de Tso Kar y sus aves, y el puerto de Taglang La (5.324 m) y regreso a Leh."], "la6"),
            inL.day(13, ["Leh – Delhi", "Leh – Delhi", "Leh – Delhi"], ["Vol pour Delhi et découverte du vieux Delhi et de sa grande mosquée.", "Flight to Delhi and a visit to old Delhi and its great mosque.", "Vuelo a Delhi y visita del viejo Delhi y su gran mezquita."], "rj10"),
            inL.day(14, ["Delhi – vol retour", "Delhi – flight home", "Delhi – vuelo de regreso"], ["Transfert à l'aéroport et envol pour la France. Arrivée le jour même ou le lendemain.", "Transfer to the airport and fly to France. Arrival the same day or the next.", "Traslado al aeropuerto y vuelo a Francia. Llegada el mismo día o al siguiente."], "la1"),
          ]),
      ],
    }),

    // ───────────── Réunion 1. Joyau de l'océan Indien — 10J/7N ─────────────
    re.trip({
      slug: "reunion-joyau-ocean-indien-cirques-volcan-10j",
      name: ["La Réunion, joyau de l'océan Indien : Salazie, le Piton de la Fournaise, Cilaos et le Maïdo", "Reunion, Jewel of the Indian Ocean: Salazie, Piton de la Fournaise, Cilaos and Maïdo", "La Reunión, joya del océano Índico: Salazie, el Piton de la Fournaise, Cilaos y el Maïdo"],
      tagline: ["Les trois cirques et le volcan avec un chauffeur-guide, puis Saint-Gilles", "The three cirques and the volcano with a driver-guide, then Saint-Gilles", "Los tres circos y el volcán con un chófer-guía, y Saint-Gilles"],
      description: [
        "La Réunion avec un chauffeur-guide francophone : Saint-Denis et ses maisons créoles, Hell-Bourg et le cirque de Salazie, la côte sud sauvage et les coulées de lave du Grand Brûlé, la Plaine des Cafres et le Piton de la Fournaise, la route aux 400 virages vers Cilaos, le Piton Maïdo et sa vue sur le cirque de Mafate, puis Saint-Gilles et ses plages. Extension à l'île Maurice (14 jours) à partir de 3 405 € par personne.",
        "Reunion with a French-speaking driver-guide: Saint-Denis and its Creole houses, Hell-Bourg and the cirque of Salazie, the wild south coast and the lava flows of Grand Brûlé, the Plaine des Cafres and Piton de la Fournaise, the road of 400 bends to Cilaos, Piton Maïdo and its view over the cirque of Mafate, then Saint-Gilles and its beaches. Extension to Mauritius (14 days) from €3,405 per person.",
        "La Reunión con un chófer-guía francófono: Saint-Denis y sus casas criollas, Hell-Bourg y el circo de Salazie, la costa sur salvaje y las coladas de lava del Grand Brûlé, la Plaine des Cafres y el Piton de la Fournaise, la carretera de las 400 curvas hasta Cilaos, el Piton Maïdo y su vista sobre el circo de Mafate, y Saint-Gilles y sus playas. Extensión a la isla Mauricio (14 días) desde 3.405 € por persona.",
      ],
      includes: [
        "Vols depuis la France,7 nuits en hôtels,Demi-pension,Visites du programme,Chauffeur-guide francophone",
        "Flights from France,7 nights in hotels,Half board,Visits in the programme,French-speaking driver-guide",
        "Vuelos desde Francia,7 noches en hoteles,Media pensión,Visitas del programa,Chófer-guía francófono",
      ],
      price: 2274, nights: 7, departureFrom: "Paris", image: "re1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 16, order: -63000,
      chapters: [
        re.chapter(["Salazie et le Sud sauvage", "Salazie and the wild south", "Salazie y el sur salvaje"], ["Le cirque vert, puis les coulées de lave.", "The green cirque, then the lava flows.", "El circo verde y las coladas de lava."],
          ["re1", "re2", "re4"],
          [
            re.day(1, ["Envol pour La Réunion", "Flight to Reunion", "Vuelo a La Reunión"], ["Envol à destination de Saint-Denis. Nuit à bord.", "Flight to Saint-Denis. Night on board.", "Vuelo con destino a Saint-Denis. Noche a bordo."], "re4"),
            re.day(2, ["Saint-Denis – Hell-Bourg", "Saint-Denis – Hell-Bourg", "Saint-Denis – Hell-Bourg"], ["Tour de Saint-Denis et de la rue de Paris aux maisons créoles, puis Hell-Bourg, dans le cirque de Salazie.", "A tour of Saint-Denis and the rue de Paris with its Creole houses, then Hell-Bourg, in the cirque of Salazie.", "Visita de Saint-Denis y la rue de Paris con sus casas criollas, y Hell-Bourg, en el circo de Salazie."], "re4"),
            re.day(3, ["Le cirque de Salazie", "The cirque of Salazie", "El circo de Salazie"], ["Balade en forêt jusqu'à l'îlet de Bé Mahot, entre fleurs tropicales et vues sur le cirque.", "A forest walk to the hamlet of Bé Mahot, among tropical flowers and views of the cirque.", "Paseo por el bosque hasta el islote de Bé Mahot, entre flores tropicales y vistas sobre el circo."], "re2"),
            re.day(4, ["Le Sud sauvage – Plaine des Cafres", "The wild south – Plaine des Cafres", "El sur salvaje – Plaine des Cafres"], ["La côte sud et les coulées de lave du Grand Brûlé, puis la Plaine des Cafres.", "The south coast and the lava flows of Grand Brûlé, then the Plaine des Cafres.", "La costa sur y las coladas de lava del Grand Brûlé, y la Plaine des Cafres."], "ra1"),
          ]),
        re.chapter(["Le volcan, Cilaos et le Maïdo", "The volcano, Cilaos and Maïdo", "El volcán, Cilaos y el Maïdo"], ["Trois grands panoramas de l'île.", "Three of the island's great views.", "Tres grandes panorámicas de la isla."],
          ["ra7", "re5", "ra6"],
          [
            re.day(5, ["Le Piton de la Fournaise", "Piton de la Fournaise", "El Piton de la Fournaise"], ["La route forestière, le point de vue du Nez de Bœuf sur la rivière des Remparts, puis le volcan.", "The forest road, the Nez de Bœuf viewpoint over the Rivière des Remparts, then the volcano.", "La carretera forestal, el mirador del Nez de Bœuf sobre la Rivière des Remparts y el volcán."], "ra7"),
            re.day(6, ["Cilaos – Saint-Gilles", "Cilaos – Saint-Gilles", "Cilaos – Saint-Gilles"], ["La route aux 400 virages jusqu'au cirque de Cilaos, puis la côte ouest et Saint-Gilles.", "The road of 400 bends to the cirque of Cilaos, then the west coast and Saint-Gilles.", "La carretera de las 400 curvas hasta el circo de Cilaos, y la costa oeste y Saint-Gilles."], "re5"),
            re.day(7, ["Le Piton Maïdo", "Piton Maïdo", "El Piton Maïdo"], ["Montée au Piton Maïdo, à plus de 2 000 m, au-dessus du cirque de Mafate.", "Up to Piton Maïdo, above 2,000 m, overlooking the cirque of Mafate.", "Subida al Piton Maïdo, a más de 2.000 m, sobre el circo de Mafate."], "ra6"),
            re.day(8, ["Saint-Gilles, journée libre", "Saint-Gilles, free day", "Saint-Gilles, jornada libre"], ["Journée libre en demi-pension, entre plage et village.", "A free day on half board, between beach and village.", "Jornada libre en media pensión, entre playa y pueblo."], "ra5"),
            re.day(9, ["Saint-Gilles – vol retour", "Saint-Gilles – flight home", "Saint-Gilles – vuelo de regreso"], ["Selon l'horaire du vol, transfert à l'aéroport et envol pour la France.", "Depending on your flight, transfer to the airport and fly to France.", "Según el horario del vuelo, traslado al aeropuerto y vuelo a Francia."], "re3"),
            re.day(10, T_HOME, HOME, "re1"),
          ]),
      ],
    }),

    // ───────────── Réunion 2. Sur la route — 11J/8N autotour ─────────────
    re.trip({
      slug: "reunion-autotour-volcans-lagons-11j",
      name: ["La Réunion en voiture : volcans, cirques et lagons", "Reunion by Car: Volcanoes, Cirques and Lagoons", "La Reunión en coche: volcanes, circos y lagunas"],
      tagline: ["Un autotour en hôtels 4*, de Salazie au Sud sauvage et aux plages de l'Ouest", "A self-drive in 4* hotels, from Salazie to the wild south and the beaches of the west", "Una ruta en coche en hoteles de 4*, de Salazie al sur salvaje y las playas del oeste"],
      description: [
        "Un autotour avec votre voiture prise à l'aéroport : le cirque de Salazie, Saint-Pierre et la Plaine des Cafres, le Piton de la Fournaise, le Sud sauvage, ses plages et ses falaises, Cilaos, le village créole d'Entre-Deux, puis trois nuits à Saint-Gilles-les-Bains avec la montée au Piton Maïdo. Huit nuits en hôtels 4* avec petit-déjeuner.",
        "A self-drive with your car picked up at the airport: the cirque of Salazie, Saint-Pierre and the Plaine des Cafres, Piton de la Fournaise, the wild south with its beaches and cliffs, Cilaos, the Creole village of Entre-Deux, then three nights in Saint-Gilles-les-Bains with the drive up to Piton Maïdo. Eight nights in 4* hotels with breakfast.",
        "Una ruta en coche con su vehículo recogido en el aeropuerto: el circo de Salazie, Saint-Pierre y la Plaine des Cafres, el Piton de la Fournaise, el sur salvaje con sus playas y acantilados, Cilaos, el pueblo criollo de Entre-Deux, y tres noches en Saint-Gilles-les-Bains con la subida al Piton Maïdo. Ocho noches en hoteles de 4* con desayuno.",
      ],
      includes: [
        "Vols depuis la France,Location de voiture,8 nuits en hôtels 4*,Petits-déjeuners,Assistance sur place",
        "Flights from France,Car hire,8 nights in 4* hotels,Breakfasts,Local assistance",
        "Vuelos desde Francia,Alquiler de coche,8 noches en hoteles de 4*,Desayunos,Asistencia en destino",
      ],
      price: 1910, nights: 8, departureFrom: "Paris", image: "ra2",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 6, order: -62999,
      chapters: [
        re.chapter(["Salazie et le Sud", "Salazie and the south", "Salazie y el sur"], ["Le cirque vert, le volcan et la côte sauvage.", "The green cirque, the volcano and the wild coast.", "El circo verde, el volcán y la costa salvaje."],
          ["ra2", "ra3", "ra7", "ra1"],
          [
            re.day(1, ["Envol pour La Réunion", "Flight to Reunion", "Vuelo a La Reunión"], ["Envol à destination de Saint-Denis. Nuit à bord.", "Flight to Saint-Denis. Night on board.", "Vuelo con destino a Saint-Denis. Noche a bordo."], "ra4"),
            re.day(2, ["Saint-Denis – Salazie", "Saint-Denis – Salazie", "Saint-Denis – Salazie"], ["Prise de la voiture et route vers le cirque de Salazie, écrin de verdure.", "Pick up the car and drive to the cirque of Salazie, a green haven.", "Recogida del coche y carretera hacia el circo de Salazie, un remanso verde."], "ra2"),
            re.day(3, ["Salazie – Saint-Pierre", "Salazie – Saint-Pierre", "Salazie – Saint-Pierre"], ["Par la Plaine des Cafres et ses panoramas jusqu'à Saint-Pierre, sur la côte sud.", "Via the Plaine des Cafres and its views to Saint-Pierre, on the south coast.", "Por la Plaine des Cafres y sus panorámicas hasta Saint-Pierre, en la costa sur."], "ra3"),
            re.day(4, ["Le Piton de la Fournaise", "Piton de la Fournaise", "El Piton de la Fournaise"], ["Départ matinal vers l'un des volcans les plus actifs du monde (randonnée d'environ 5 heures jusqu'au cratère).", "An early start for one of the world's most active volcanoes (a walk of about 5 hours to the crater).", "Salida temprana hacia uno de los volcanes más activos del mundo (caminata de unas 5 horas hasta el cráter)."], "ra7"),
            re.day(5, ["Le Sud sauvage", "The wild south", "El sur salvaje"], ["Plages, falaises et forêts tropicales du Sud sauvage.", "The beaches, cliffs and tropical forests of the wild south.", "Playas, acantilados y bosques tropicales del sur salvaje."], "ra1"),
          ]),
        re.chapter(["Cilaos et l'Ouest", "Cilaos and the west", "Cilaos y el oeste"], ["Le cirque des sources, puis les lagons.", "The cirque of springs, then the lagoons.", "El circo de las fuentes y las lagunas."],
          ["ra4", "ra5", "ra6"],
          [
            re.day(6, ["Saint-Pierre – Cilaos", "Saint-Pierre – Cilaos", "Saint-Pierre – Cilaos"], ["La célèbre route aux nombreux virages jusqu'au village de Cilaos.", "The famous winding road up to the village of Cilaos.", "La famosa carretera de curvas hasta el pueblo de Cilaos."], "ra4"),
            re.day(7, ["Entre-Deux – Saint-Gilles", "Entre-Deux – Saint-Gilles", "Entre-Deux – Saint-Gilles"], ["Le village créole d'Entre-Deux et ses cases colorées, puis la côte ouest.", "The Creole village of Entre-Deux and its colourful houses, then the west coast.", "El pueblo criollo de Entre-Deux y sus casas de colores, y la costa oeste."], "re4"),
            re.day(8, ["Saint-Gilles, journée libre", "Saint-Gilles, free day", "Saint-Gilles, jornada libre"], ["Journée libre sur les plages de l'Ouest.", "A free day on the beaches of the west.", "Jornada libre en las playas del oeste."], "ra5"),
            re.day(9, ["Le Piton Maïdo", "Piton Maïdo", "El Piton Maïdo"], ["Route à travers les champs de canne et les tamarins jusqu'au Piton Maïdo, à plus de 2 000 m.", "A drive through the cane fields and tamarind forests to Piton Maïdo, above 2,000 m.", "Carretera entre cañaverales y tamarindos hasta el Piton Maïdo, a más de 2.000 m."], "ra6"),
            re.day(10, ["Saint-Gilles – vol retour", "Saint-Gilles – flight home", "Saint-Gilles – vuelo de regreso"], ["Route vers l'aéroport, restitution de la voiture et envol pour la France.", "Drive to the airport, drop off the car and fly to France.", "Carretera al aeropuerto, devolución del coche y vuelo a Francia."], "ra5"),
            re.day(11, T_HOME, HOME, "ra2"),
          ]),
      ],
    }),

    // ───────────── Maldives. Sri Lanka + Maldives — 13J/10N ─────────────
    mv.trip({
      slug: "maldives-sri-lanka-incontournables-adaaran-13j",
      name: ["Sri Lanka et Maldives : les incontournables de Ceylan et trois nuits sur un atoll", "Sri Lanka and the Maldives: Ceylon Highlights and Three Nights on an Atoll", "Sri Lanka y Maldivas: lo esencial de Ceilán y tres noches en un atolón"],
      tagline: ["Huit jours de circuit au Sri Lanka, puis l'Adaaran Select en tout compris", "Eight days touring Sri Lanka, then the Adaaran Select on an all-inclusive basis", "Ocho días de circuito en Sri Lanka y el Adaaran Select con todo incluido"],
      description: [
        "Le circuit des incontournables du Sri Lanka en groupe de 16 personnes au plus (Polonnaruwa, le Rocher du Lion, Dambulla et un safari au Hurulu Eco Park, Matale et Kandy, les plantations de thé, Galle), puis un vol pour Malé et trois nuits à l'Adaaran Select Hudhuran Fushi 4*, en formule tout compris, avec transferts en bateau rapide.",
        "The Sri Lanka highlights tour in a group of 16 at most (Polonnaruwa, Lion Rock, Dambulla and a safari in Hurulu Eco Park, Matale and Kandy, the tea plantations, Galle), then a flight to Malé and three nights at the Adaaran Select Hudhuran Fushi 4*, all-inclusive, with speedboat transfers.",
        "El circuito de lo esencial de Sri Lanka en grupo de 16 personas como máximo (Polonnaruwa, la Roca del León, Dambulla y un safari en el Hurulu Eco Park, Matale y Kandy, las plantaciones de té, Galle), y un vuelo a Malé y tres noches en el Adaaran Select Hudhuran Fushi 4*, con todo incluido y traslados en lancha rápida.",
      ],
      includes: [
        "Vols depuis la France (aller Colombo; retour Malé),Vol Colombo – Malé,10 nuits en hôtels 3* et 4*,Pension complète puis tout compris,Visites du programme,Guide francophone au Sri Lanka",
        "Flights from France (out to Colombo; back from Malé),Colombo – Malé flight,10 nights in 3* and 4* hotels,Full board then all-inclusive,Visits in the programme,French-speaking guide in Sri Lanka",
        "Vuelos desde Francia (ida a Colombo; regreso desde Malé),Vuelo Colombo – Malé,10 noches en hoteles de 3* y 4*,Pensión completa y después todo incluido,Visitas del programa,Guía francófono en Sri Lanka",
      ],
      price: 3259, nights: 10, departureFrom: "Paris", image: "gm3",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,honeymoon,family", maxGuests: 16, order: -62000,
      chapters: [
        mv.chapter(["Le Sri Lanka", "Sri Lanka", "Sri Lanka"], ["Le Triangle culturel, Kandy et Galle.", "The Cultural Triangle, Kandy and Galle.", "El Triángulo Cultural, Kandy y Galle."],
          ["in1", "in3", "in5", "in6"],
          [
            mv.day(1, ["Envol pour le Sri Lanka", "Flight to Sri Lanka", "Vuelo a Sri Lanka"], ["Envol à destination de Colombo. Nuit à bord.", "Flight to Colombo. Night on board.", "Vuelo con destino a Colombo. Noche a bordo."], "in6"),
            mv.day(2, ["Colombo – Sigiriya", "Colombo – Sigiriya", "Colombo – Sigiriya"], ["Accueil et route vers Sigiriya.", "Welcome and drive to Sigiriya.", "Recibimiento y carretera hacia Sigiriya."], "in1"),
            mv.day(3, ["Polonnaruwa", "Polonnaruwa", "Polonnaruwa"], ["La cité médiévale de Polonnaruwa, classée à l'Unesco, et ses bouddhas de Gal Vihara.", "The medieval city of Polonnaruwa, a UNESCO site, and its Gal Vihara Buddhas.", "La ciudad medieval de Polonnaruwa, inscrita en la Unesco, y sus budas de Gal Vihara."], "in1"),
            mv.day(4, ["Le Rocher du Lion", "Lion Rock", "La Roca del León"], ["À l'aube, l'ascension de la forteresse de Sigiriya et ses fresques.", "At dawn, the climb up the Sigiriya fortress and its frescoes.", "Al amanecer, la subida a la fortaleza de Sigiriya y sus frescos."], "in1"),
            mv.day(5, ["Dambulla et Hurulu Eco Park", "Dambulla and Hurulu Eco Park", "Dambulla y el Hurulu Eco Park"], ["Le Temple d'Or de Dambulla, puis un safari en jeep parmi les éléphants.", "The Golden Temple of Dambulla, then a jeep safari among the elephants.", "El Templo de Oro de Dambulla y un safari en jeep entre los elefantes."], "in5"),
            mv.day(6, ["Matale – Kandy", "Matale – Kandy", "Matale – Kandy"], ["Le temple de Nalanda Gedige, un jardin d'épices à Matale, puis le temple de la Dent à Kandy.", "Nalanda Gedige temple, a spice garden in Matale, then the Temple of the Tooth in Kandy.", "El templo de Nalanda Gedige, un jardín de especias en Matale y el templo del Diente en Kandy."], "in2"),
            mv.day(7, ["Le pays du thé", "Tea country", "La tierra del té"], ["Les chutes de Ramboda et les plantations de thé de Nuwara Eliya.", "Ramboda Falls and the tea plantations of Nuwara Eliya.", "Las cascadas de Ramboda y las plantaciones de té de Nuwara Eliya."], "in3"),
            mv.day(8, ["Galle et l'océan Indien", "Galle and the Indian Ocean", "Galle y el océano Índico"], ["Route vers la ville fortifiée de Galle et la côte sud.", "Drive to the fortified town of Galle and the south coast.", "Carretera hacia la ciudad fortificada de Galle y la costa sur."], "in6"),
          ]),
        mv.chapter(["Les Maldives", "The Maldives", "Maldivas"], ["Trois nuits en tout compris.", "Three all-inclusive nights.", "Tres noches con todo incluido."],
          ["gm1", "gm2", "gm3"],
          [
            mv.day(9, ["Colombo – Malé", "Colombo – Malé", "Colombo – Malé"], ["Vol pour Malé, puis bateau rapide (environ 25 minutes) jusqu'à l'Adaaran Select Hudhuran Fushi.", "Flight to Malé, then a speedboat (about 25 minutes) to the Adaaran Select Hudhuran Fushi.", "Vuelo a Malé y lancha rápida (unos 25 minutos) hasta el Adaaran Select Hudhuran Fushi."], "gm1"),
            mv.day(10, ["Maldives, journée libre", "Maldives, free day", "Maldivas, jornada libre"], ["Plage, lagon et activités nautiques.", "Beach, lagoon and water sports.", "Playa, laguna y actividades náuticas."], "gm2"),
            mv.day(11, ["Maldives, journée libre", "Maldives, free day", "Maldivas, jornada libre"], ["Dernière journée au bord du lagon.", "A last day by the lagoon.", "Última jornada junto a la laguna."], "gm3"),
            mv.day(12, ["Malé – vol retour", "Malé – flight home", "Malé – vuelo de regreso"], ["Bateau rapide jusqu'à l'aéroport de Malé et envol pour la France.", "Speedboat to Malé airport and fly to France.", "Lancha rápida hasta el aeropuerto de Malé y vuelo a Francia."], "gm2"),
            mv.day(13, T_HOME, HOME, "gm3"),
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
