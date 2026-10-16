// Indonesia circuits — 14 journey-format trips for the existing "indonesie" destination: Bali
// stays and tours (several with beach extensions on Sanur, Nusa Dua, the Gili islands, Lombok or
// Komodo described inside the trip), Bali + Java and Bali + Java + Sulawesi. Prices are
// per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-indonesie-circuits.ts
// Requires scripts/upload-images-indonesie-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "indonesie-bali-ubud-plage-sejour-12j": ["400058", "147923", "147944", "147941", "148038", "395018"],
  "indonesie-bali-roue-libre-chauffeur-11j": ["376138", "376139", "366378", "366419", "366438"],
  "indonesie-instant-balinais-prive-11j": ["376238", "376258", "376259", "376278"],
  "indonesie-bali-passion-12j": ["376778", "400318", "376798", "376818", "376859", "400319", "376878", "376838"],
  "indonesie-bali-ubud-gili-sejour-14j": ["147948"],
  "indonesie-bali-autre-angle-prive-14j": ["375918", "375938", "375958", "375939"],
  "indonesie-trio-iles-bali-nusa-penida-lembongan-11j": ["368678"],
  "indonesie-boheme-balinaise-gili-15j": ["399901", "376920"],
  "indonesie-bali-authentique-14j": ["376919", "379218", "376938", "376918", "379238", "376921"],
  "indonesie-reverie-balinaise-chauffeur-16j": ["359378", "394998", "140800"],
  "indonesie-esprit-balinais-prive-15j": ["394658"],
  "indonesie-perles-bali-java-bromo-13j": ["376879", "379478", "379518"],
  "indonesie-bali-java-celebes-toraja-17j": ["376758"],
  "indonesie-evasion-privilege-bali-12j": ["376098", "376120", "376118", "376119"],
};

// ── Shared texts ──
const T_FLY: L3 = ["Envol pour Bali", "Flight to Bali", "Vuelo a Bali"];
const FLY: L3 = ["Envol à destination de Denpasar, à Bali. Dîner et nuit à bord.", "Flight to Denpasar, Bali. Dinner and night on board.", "Vuelo con destino a Denpasar, en Bali. Cena y noche a bordo."];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France, le jour même ou le lendemain selon les vols.", "Arrival in France, the same day or the next depending on flights.", "Llegada a Francia, el mismo día o al siguiente según los vuelos."];
const T_DPS_HOME: L3 = ["Denpasar – vol retour", "Denpasar – flight home", "Denpasar – vuelo de regreso"];
const DPS_HOME: L3 = [
  "Matinée libre avant de libérer la chambre à midi, puis transfert à l'aéroport international de Denpasar selon l'horaire du vol.",
  "A free morning before checking out at noon, then transfer to Denpasar international airport according to your flight time.",
  "Mañana libre antes de dejar la habitación a mediodía y traslado al aeropuerto internacional de Denpasar según el horario del vuelo.",
];
const T_UBUD_ARR: L3 = ["Arrivée à Bali – Ubud", "Arrival in Bali – Ubud", "Llegada a Bali – Ubud"];
const UBUD_ARR: L3 = [
  "Accueil à l'aéroport de Denpasar par votre chauffeur et transfert à Ubud, le cœur culturel de Bali, entre rizières et jungle. Installation à l'hôtel.",
  "Welcome at Denpasar airport by your driver and transfer to Ubud, the cultural heart of Bali, between rice fields and jungle. Check in at the hotel.",
  "Recibimiento en el aeropuerto de Denpasar por su chófer y traslado a Ubud, el corazón cultural de Bali, entre arrozales y selva. Instalación en el hotel.",
];
const free = (place: L3, text: L3): [L3, L3] => [
  [`${place[0]}, journée libre`, `${place[1]}, free day`, `${place[2]}, jornada libre`],
  text,
];
const UBUD_FREE: L3 = [
  "Journée libre à Ubud : rizières de Tegallalang, temples, galeries d'art, spectacle de danse ou simplement le calme de l'hôtel. Repas libres.",
  "A free day in Ubud: the Tegallalang rice terraces, temples, art galleries, a dance show or simply the calm of the hotel. Meals on your own.",
  "Jornada libre en Ubud: los arrozales de Tegallalang, templos, galerías de arte, un espectáculo de danza o simplemente la calma del hotel. Comidas libres.",
];
const SANUR_FREE: L3 = [
  "Journée libre à Sanur, la plus ancienne station balnéaire de Bali : plage de sable, eaux calmes et promenade en bord de mer avec vue sur le mont Agung. Repas libres.",
  "A free day in Sanur, Bali's oldest beach resort: sandy beach, calm water and a seafront promenade with a view of Mount Agung. Meals on your own.",
  "Jornada libre en Sanur, la estación balnearia más antigua de Bali: playa de arena, aguas tranquilas y paseo marítimo con vistas al monte Agung. Comidas libres.",
];
const GILI_FREE: L3 = [
  "Journée libre sur Gili Trawangan : sable blanc, eaux turquoise pour la plongée et le snorkeling, et aucune voiture sur l'île. Repas libres.",
  "A free day on Gili Trawangan: white sand, turquoise water for diving and snorkelling, and no cars on the island. Meals on your own.",
  "Jornada libre en Gili Trawangan: arena blanca, aguas turquesa para el buceo y el snorkel, y ningún coche en la isla. Comidas libres.",
];
const T_TO_SANUR: L3 = ["Ubud – Sanur", "Ubud – Sanur", "Ubud – Sanur"];
const TO_SANUR: L3 = [
  "Dernière matinée à Ubud, puis transfert vers le sud et les plages de Sanur. Installation à l'hôtel en bord de mer.",
  "A last morning in Ubud, then transfer south to the beaches of Sanur. Check in at the seafront hotel.",
  "Última mañana en Ubud y traslado hacia el sur y las playas de Sanur. Instalación en el hotel junto al mar.",
];
const T_TO_GILI: L3 = ["Traversée vers Gili Trawangan", "Crossing to Gili Trawangan", "Travesía a Gili Trawangan"];
const TO_GILI: L3 = [
  "Transfert au port de Padang Bai et bateau rapide jusqu'à Gili Trawangan (environ 1 h 30), puis cidomo, la calèche locale, jusqu'à l'hôtel.",
  "Transfer to Padang Bai harbour and a fast boat to Gili Trawangan (about 1 hr 30), then a cidomo, the local horse cart, to the hotel.",
  "Traslado al puerto de Padang Bai y lancha rápida hasta Gili Trawangan (alrededor de 1 h 30), y después cidomo, el carro de caballos local, hasta el hotel.",
];
const T_GILI_SANUR: L3 = ["Gili Trawangan – Sanur", "Gili Trawangan – Sanur", "Gili Trawangan – Sanur"];
const GILI_SANUR: L3 = [
  "Bateau rapide de Gili Trawangan à Sanur (environ 2 h 30) et transfert à l'hôtel.",
  "Fast boat from Gili Trawangan to Sanur (about 2 hrs 30) and transfer to the hotel.",
  "Lancha rápida de Gili Trawangan a Sanur (alrededor de 2 h 30) y traslado al hotel.",
];
const T_JATI: L3 = ["Jatiluwih et le lac Bratan", "Jatiluwih and Lake Bratan", "Jatiluwih y el lago Bratan"];
const JATI: L3 = [
  "Les rizières en terrasses de Jatiluwih, inscrites à l'Unesco, et leur système d'irrigation traditionnel, le subak. Continuation vers Bedugul et le temple d'Ulun Danu Bratan, posé sur le lac.",
  "The UNESCO-listed rice terraces of Jatiluwih and their traditional irrigation system, the subak. Continue to Bedugul and Ulun Danu Bratan temple, set on the lake.",
  "Los arrozales en terrazas de Jatiluwih, inscritos en la Unesco, y su sistema de riego tradicional, el subak. Continuación hacia Bedugul y el templo de Ulun Danu Bratan, sobre el lago.",
];
const T_KINTA: L3 = ["Kintamani et Besakih", "Kintamani and Besakih", "Kintamani y Besakih"];
const KINTA: L3 = [
  "Route vers Kintamani et le bord de la caldeira de plus de 13 km dominée par le mont Batur, volcan actif, avec le lac à ses pieds. Déjeuner face au paysage, puis Besakih, le temple-mère de Bali, sur les flancs du mont Agung.",
  "Drive to Kintamani and the rim of the caldera, more than 13 km across, dominated by Mount Batur, an active volcano, with its lake below. Lunch facing the view, then Besakih, Bali's mother temple, on the slopes of Mount Agung.",
  "Carretera hacia Kintamani y el borde de la caldera de más de 13 km dominada por el monte Batur, volcán activo, con el lago a sus pies. Almuerzo frente al paisaje y Besakih, el templo madre de Bali, en las laderas del monte Agung.",
];
const T_TANAH: L3 = ["Mengwi, Sangeh et Tanah Lot", "Mengwi, Sangeh and Tanah Lot", "Mengwi, Sangeh y Tanah Lot"];
const TANAH: L3 = [
  "Le temple royal de Taman Ayun à Mengwi, entouré de douves et classé à l'Unesco, puis la forêt de muscadiers de Sangeh et ses singes, et le temple de Tanah Lot, sur son rocher battu par les vagues, au coucher du soleil.",
  "The royal temple of Taman Ayun in Mengwi, surrounded by moats and UNESCO-listed, then the nutmeg forest of Sangeh and its monkeys, and Tanah Lot temple, on its wave-beaten rock, at sunset.",
  "El templo real de Taman Ayun en Mengwi, rodeado de fosos e inscrito en la Unesco, el bosque de moscaderos de Sangeh y sus monos, y el templo de Tanah Lot, sobre su roca batida por las olas, al atardecer.",
];
const T_PEJENG: L3 = ["Une journée balinaise à Pejeng", "A Balinese day in Pejeng", "Una jornada balinesa en Pejeng"];
const PEJENG: L3 = [
  "Journée dans le village de Pejeng, avec ses habitants : confection des offrandes, cuisine de plats traditionnels et plantation du riz.",
  "A day in the village of Pejeng with its people: making offerings, cooking traditional dishes and planting rice.",
  "Jornada en el pueblo de Pejeng con sus habitantes: elaboración de ofrendas, cocina de platos tradicionales y plantación de arroz.",
];
const T_BARONG: L3 = ["Danse du Barong, Campuhan et Gunung Kawi", "Barong dance, Campuhan and Gunung Kawi", "Danza del Barong, Campuhan y Gunung Kawi"];
const BARONG: L3 = [
  "À Batubulan, spectacle de la danse du Barong, qui raconte la lutte du bien et du mal. Promenade sur la crête de Campuhan, puis les temples taillés dans la roche de Gunung Kawi et les sources de Sebatu.",
  "In Batubulan, a performance of the Barong dance, telling the struggle between good and evil. A walk along the Campuhan ridge, then the rock-cut temples of Gunung Kawi and the springs of Sebatu.",
  "En Batubulan, espectáculo de la danza del Barong, que narra la lucha entre el bien y el mal. Paseo por la cresta de Campuhan y los templos tallados en la roca de Gunung Kawi y los manantiales de Sebatu.",
];
const T_BESAKIH_EAST: L3 = ["Gianyar, Kertagosa et Besakih", "Gianyar, Kertagosa and Besakih", "Gianyar, Kertagosa y Besakih"];
const BESAKIH_EAST: L3 = [
  "Le marché de Gianyar et ses fruits tropicaux, le palais de justice de Kertagosa à Klungkung et ses fresques, puis Besakih, le temple-mère de l'île.",
  "Gianyar market and its tropical fruit, the Kertagosa hall of justice in Klungkung and its frescoes, then Besakih, the island's mother temple.",
  "El mercado de Gianyar y sus frutas tropicales, el palacio de justicia de Kertagosa en Klungkung y sus frescos, y Besakih, el templo madre de la isla.",
];
const T_YOGYA: L3 = ["Yogyakarta : le Kraton et Prambanan", "Yogyakarta: the Kraton and Prambanan", "Yogyakarta: el Kraton y Prambanan"];
const YOGYA: L3 = [
  "Yogyakarta, capitale culturelle de Java : le Kraton, palais du sultan, puis le grand ensemble hindou de Prambanan, classé à l'Unesco.",
  "Yogyakarta, the cultural capital of Java: the Kraton, the sultan's palace, then the great Hindu complex of Prambanan, a UNESCO site.",
  "Yogyakarta, capital cultural de Java: el Kraton, palacio del sultán, y el gran conjunto hindú de Prambanan, inscrito en la Unesco.",
];
const T_BORO: L3 = ["Borobudur", "Borobudur", "Borobudur"];
const BORO: L3 = [
  "Visite de Borobudur, classé à l'Unesco, le plus grand temple bouddhiste du monde, puis des temples voisins.",
  "Visit Borobudur, a UNESCO site and the largest Buddhist temple in the world, then the neighbouring temples.",
  "Visita a Borobudur, inscrito en la Unesco, el mayor templo budista del mundo, y a los templos vecinos.",
];
const T_TO_BROMO: L3 = ["En train vers le Bromo", "By train to Bromo", "En tren hacia el Bromo"];
const TO_BROMO: L3 = [
  "Train de Yogyakarta vers l'est de Java jusqu'à Jombang, puis route vers le parc national du Tengger, au pied du mont Bromo.",
  "Train from Yogyakarta across eastern Java to Jombang, then drive to the Tengger National Park, at the foot of Mount Bromo.",
  "Tren de Yogyakarta hacia el este de Java hasta Jombang y carretera hacia el parque nacional del Tengger, al pie del monte Bromo.",
];
const T_BROMO: L3 = ["Lever du soleil sur le Bromo – retour à Bali", "Sunrise over Bromo – back to Bali", "Amanecer sobre el Bromo – regreso a Bali"];
const BROMO: L3 = [
  "Départ avant l'aube en 4x4, puis à cheval, pour le lever du soleil sur le mont Bromo ; 253 marches mènent au bord du cratère fumant. Vol de Surabaya pour Bali et route vers Ubud.",
  "Leave before dawn by 4x4, then on horseback, for sunrise over Mount Bromo; 253 steps lead to the rim of the smoking crater. Fly from Surabaya to Bali and drive to Ubud.",
  "Salida antes del amanecer en 4x4 y a caballo para ver salir el sol sobre el monte Bromo; 253 escalones llevan al borde del cráter humeante. Vuelo de Surabaya a Bali y carretera hacia Ubud.",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "indonesie",
    imagePrefix: "indonesie",
    season: { label: ["Avr à oct", "April to Oct", "Abr a oct"], months: "april,may,june,july,august,september,october" },
  });
  const UBUD: L3 = ["Ubud", "Ubud", "Ubud"];
  const SANUR: L3 = ["Sanur", "Sanur", "Sanur"];
  const GILI: L3 = ["Gili Trawangan", "Gili Trawangan", "Gili Trawangan"];
  const fd = (n: number, place: L3, text: L3, img: string) => day(n, ...free(place, text), img);

  const journeyTrips = [
    // ───────────── 1. Combiné Ubud & Plage — 12J/9N ─────────────
    trip({
      slug: "indonesie-bali-ubud-plage-sejour-12j",
      name: ["Bali en liberté : cinq nuits à Ubud et quatre à la plage", "Bali at Your Own Pace: Five Nights in Ubud and Four on the Beach", "Bali por libre: cinco noches en Ubud y cuatro en la playa"],
      tagline: ["Un séjour sans circuit, entre rizières et mer, avec les transferts privés", "A stay with no touring, between rice fields and sea, with private transfers", "Una estancia sin circuito, entre arrozales y mar, con traslados privados"],
      description: [
        "Le format le plus simple pour Bali : cinq nuits dans un hôtel 4* (normes locales) à Ubud, entouré de jungle et doté de trois piscines, puis quatre nuits sur les plages de Sanur, avec les transferts en véhicule privé et les petits-déjeuners. Les journées sont libres, les visites à organiser sur place. Le séjour balnéaire peut se faire à Nusa Dua (à partir de 1 183 € par personne) et en hôtels supérieurs (à partir de 1 227 €).",
        "The simplest way to do Bali: five nights in a 4* hotel (local rating) in Ubud, surrounded by jungle with three pools, then four nights on the beaches of Sanur, with private transfers and breakfasts. The days are free, with visits to arrange locally. The beach stay can be in Nusa Dua (from €1,183 per person) and in superior hotels (from €1,227).",
        "El formato más sencillo para Bali: cinco noches en un hotel de 4* (categoría local) en Ubud, rodeado de selva y con tres piscinas, y cuatro noches en las playas de Sanur, con traslados en vehículo privado y desayunos. Las jornadas son libres y las visitas se organizan in situ. La estancia de playa puede hacerse en Nusa Dua (desde 1.183 € por persona) y en hoteles superiores (desde 1.227 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts privés,5 nuits à Ubud en hôtel 4*,4 nuits à Sanur en hôtel 4*,Petits-déjeuners,Assistance sur place",
        "Flights from France,Private transfers,5 nights in Ubud in a 4* hotel,4 nights in Sanur in a 4* hotel,Breakfasts,Local assistance",
        "Vuelos desde Francia,Traslados privados,5 noches en Ubud en hotel de 4*,4 noches en Sanur en hotel de 4*,Desayunos,Asistencia in situ",
      ],
      price: 1047, nights: 9, departureFrom: "Francfort", image: "cu7",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,family", maxGuests: 12, order: -86000,
      chapters: [
        chapter(["Ubud", "Ubud", "Ubud"],
          ["Cinq nuits dans la région d'Ubud, entre culture, traditions et nature.", "Five nights in the Ubud area, between culture, traditions and nature.", "Cinco noches en la región de Ubud, entre cultura, tradiciones y naturaleza."],
          ["cu7", "cu2", "cu3", "cu5"],
          [day(1, T_FLY, FLY, "cu2"), day(2, T_UBUD_ARR, UBUD_ARR, "cu7"), fd(3, UBUD, UBUD_FREE, "cu3"), fd(4, UBUD, UBUD_FREE, "cu5"), fd(5, UBUD, UBUD_FREE, "cu2"), fd(6, UBUD, UBUD_FREE, "cu8")]),
        chapter(["Sanur", "Sanur", "Sanur"],
          ["Quatre nuits sur la côte sud-est, face au mont Agung.", "Four nights on the south-east coast, facing Mount Agung.", "Cuatro noches en la costa sureste, frente al monte Agung."],
          ["cu4", "cu1", "cu6"],
          [day(7, T_TO_SANUR, TO_SANUR, "cu1"), fd(8, SANUR, SANUR_FREE, "cu4"), fd(9, SANUR, SANUR_FREE, "cu6"), fd(10, SANUR, SANUR_FREE, "cu1"), day(11, T_DPS_HOME, DPS_HOME, "cu4"), day(12, T_HOME, HOME, "cu7")]),
      ],
    }),

    // ───────────── 2. Bali en roue libre — 11J/8N ─────────────
    trip({
      slug: "indonesie-bali-roue-libre-chauffeur-11j",
      name: ["Bali en roue libre, avec chauffeur privé : Ubud, Sidemen et Sanur", "Bali Your Way with a Private Driver: Ubud, Sidemen and Sanur", "Bali a su aire con chófer privado: Ubud, Sidemen y Sanur"],
      tagline: ["Un chauffeur à disposition onze heures par jour pendant cinq jours, et vous composez le programme", "A driver at your disposal eleven hours a day for five days, and you plan the programme", "Un chófer a su disposición once horas al día durante cinco días, y usted compone el programa"],
      description: [
        "Pour ceux qui veulent voir Bali à leur rythme sans conduire : un chauffeur privé de 8 h à 19 h pendant cinq jours, avec boîtier wifi dans le véhicule, et des suggestions de visites pour chaque étape. Trois nuits à Ubud (Tirta Empul, Gunung Kawi, Tegallalang, Campuhan), deux à Sidemen, vallée de rizières et de plantations à l'est, puis trois nuits libres à Sanur, où des représentants francophones aident à réserver les activités. Extension de deux nuits à Sanur à partir de 1 366 € par personne ; existe aussi en combiné avec 3, 5 ou 7 nuits dans un hôtel 5* de Nusa Dua (à partir de 1 299 €).",
        "For those who want to see Bali at their own pace without driving: a private driver from 8am to 7pm for five days, with a wifi box in the vehicle, and suggested visits for each stop. Three nights in Ubud (Tirta Empul, Gunung Kawi, Tegallalang, Campuhan), two in Sidemen, a valley of rice fields and plantations in the east, then three free nights in Sanur, where French-speaking representatives help book activities. A two-night Sanur extension from €1,366 per person; also available combined with 3, 5 or 7 nights in a 5* hotel in Nusa Dua (from €1,299).",
        "Para quienes quieren ver Bali a su ritmo sin conducir: un chófer privado de 8 h a 19 h durante cinco días, con router wifi en el vehículo, y sugerencias de visitas para cada etapa. Tres noches en Ubud (Tirta Empul, Gunung Kawi, Tegallalang, Campuhan), dos en Sidemen, valle de arrozales y plantaciones al este, y tres noches libres en Sanur, donde representantes francófonos ayudan a reservar actividades. Extensión de dos noches en Sanur desde 1.366 € por persona; existe también combinado con 3, 5 o 7 noches en un hotel de 5* de Nusa Dua (desde 1.299 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,8 nuits en hôtels,Petits-déjeuners,Chauffeur privé 11 h par jour pendant 5 jours,Boîtier wifi dans le véhicule,Assistance francophone",
        "Flights from France,Airport transfers,8 hotel nights,Breakfasts,Private driver 11 hours a day for 5 days,Wifi box in the vehicle,French-speaking assistance",
        "Vuelos desde Francia,Traslados al aeropuerto,8 noches de hotel,Desayunos,Chófer privado 11 h al día durante 5 días,Router wifi en el vehículo,Asistencia francófona",
      ],
      price: 1262, nights: 8, departureFrom: "Paris", image: "rl1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 12, order: -85999,
      chapters: [
        chapter(["Ubud avec chauffeur", "Ubud with a driver", "Ubud con chófer"],
          ["Trois nuits à Ubud, avec un chauffeur pour aller où vous voulez.", "Three nights in Ubud, with a driver to go wherever you like.", "Tres noches en Ubud, con un chófer para ir donde quiera."],
          ["rl1", "rl2", "rl5", "rl6"],
          [
            day(1, T_FLY, FLY, "rl1"),
            day(2, T_UBUD_ARR, UBUD_ARR, "rl5"),
            day(3, ["Ubud : Tirta Empul et Gunung Kawi", "Ubud: Tirta Empul and Gunung Kawi", "Ubud: Tirta Empul y Gunung Kawi"],
              ["Journée avec chauffeur. Suggestions : le rituel de purification de Tirta Empul et les temples creusés dans la roche de Gunung Kawi.", "A day with your driver. Suggestions: the purification ritual at Tirta Empul and the rock-cut temples of Gunung Kawi.", "Jornada con chófer. Sugerencias: el ritual de purificación de Tirta Empul y los templos excavados en la roca de Gunung Kawi."], "rl2"),
            day(4, ["Ubud : rizières et villages", "Ubud: rice fields and villages", "Ubud: arrozales y pueblos"],
              ["Deuxième journée avec chauffeur autour d'Ubud, selon vos envies.", "A second day with your driver around Ubud, as you wish.", "Segunda jornada con chófer alrededor de Ubud, según sus deseos."], "rl6"),
          ]),
        chapter(["Sidemen", "Sidemen", "Sidemen"],
          ["Deux nuits dans une vallée de rizières et de plantations de café, de cacao et de girofle.", "Two nights in a valley of rice fields and coffee, cocoa and clove plantations.", "Dos noches en un valle de arrozales y plantaciones de café, cacao y clavo."],
          ["rl3", "rl4", "rl5"],
          [
            day(5, ["Ubud – Sidemen", "Ubud – Sidemen", "Ubud – Sidemen"],
              ["Journée avec chauffeur. Suggestions : la crête de Campuhan au lever du soleil, les rizières de Tegallalang et ses grandes balançoires, puis la route vers Sidemen.", "A day with your driver. Suggestions: the Campuhan ridge at sunrise, the Tegallalang rice terraces and their giant swings, then the road to Sidemen.", "Jornada con chófer. Sugerencias: la cresta de Campuhan al amanecer, los arrozales de Tegallalang y sus grandes columpios, y la carretera hacia Sidemen."], "rl5"),
            day(6, ["Sidemen", "Sidemen", "Sidemen"],
              ["Journée avec chauffeur. Suggestion : randonnée guidée dans les rizières, les plantations et les villages, à la rencontre des artisans, avec, par temps clair, la vue sur le mont Agung.", "A day with your driver. Suggestion: a guided walk through the rice fields, plantations and villages, meeting craftspeople, with a view of Mount Agung on a clear day.", "Jornada con chófer. Sugerencia: caminata guiada por los arrozales, plantaciones y pueblos, al encuentro de los artesanos, con vistas al monte Agung si el día está despejado."], "rl3"),
            day(7, ["Sidemen – Sanur", "Sidemen – Sanur", "Sidemen – Sanur"],
              ["Dernière journée avec chauffeur, puis installation à Sanur.", "A last day with your driver, then check in at Sanur.", "Última jornada con chófer e instalación en Sanur."], "rl4"),
          ]),
        chapter(["Sanur", "Sanur", "Sanur"],
          ["Trois nuits libres en bord de mer.", "Three free nights by the sea.", "Tres noches libres junto al mar."],
          ["rl7", "rl8"],
          [fd(8, SANUR, SANUR_FREE, "rl7"), fd(9, SANUR, SANUR_FREE, "rl8"), day(10, T_DPS_HOME, DPS_HOME, "rl7"), day(11, T_HOME, HOME, "rl1")]),
      ],
    }),

    // ───────────── 3. Instant Balinais — 11J/8N ─────────────
    trip({
      slug: "indonesie-instant-balinais-prive-11j",
      name: ["Instant balinais en privé : Jimbaran, Jatiluwih, Ubud et Sanur", "A Private Balinese Escape: Jimbaran, Jatiluwih, Ubud and Sanur", "Instante balinés en privado: Jimbaran, Jatiluwih, Ubud y Sanur"],
      tagline: ["Un circuit privé avec guides francophones, du collier de fleurs à l'arrivée au temple de Besakih", "A private tour with French-speaking guides, from the flower garland on arrival to Besakih temple", "Un circuito privado con guías francófonos, del collar de flores a la llegada al templo de Besakih"],
      description: [
        "Les incontournables de Bali en voyage privé : Tanah Lot, la plage de sable noir de Balian, une nuit dans les rizières de Belimbing, les terrasses de Jatiluwih classées à l'Unesco, deux jours libres à Ubud, puis le marché de Gianyar, Kertagosa et Besakih avant trois nuits à Sanur. Guides francophones pour les excursions, chauffeur anglophone, assistance 24 h/24. Extensions : Sanur (à partir de 1 338 € par personne), îles Gili (1 545 €) ou Komodo et ses dragons (2 516 €).",
        "Bali's must-sees as a private trip: Tanah Lot, the black-sand beach at Balian, a night among the Belimbing rice fields, the UNESCO-listed Jatiluwih terraces, two free days in Ubud, then Gianyar market, Kertagosa and Besakih before three nights in Sanur. French-speaking guides for the excursions, an English-speaking driver, 24-hour assistance. Extensions: Sanur (from €1,338 per person), the Gili islands (€1,545) or Komodo and its dragons (€2,516).",
        "Lo imprescindible de Bali en viaje privado: Tanah Lot, la playa de arena negra de Balian, una noche entre los arrozales de Belimbing, las terrazas de Jatiluwih inscritas en la Unesco, dos días libres en Ubud y el mercado de Gianyar, Kertagosa y Besakih antes de tres noches en Sanur. Guías francófonos para las excursiones, chófer anglófono, asistencia 24 h. Extensiones: Sanur (desde 1.338 € por persona), las islas Gili (1.545 €) o Komodo y sus dragones (2.516 €).",
      ],
      includes: [
        "Vols depuis la France,Circuit privé,8 nuits en hôtels,Petits-déjeuners,Guides francophones pour les excursions,Chauffeur,Assistance 24 h/24",
        "Flights from France,Private tour,8 hotel nights,Breakfasts,French-speaking guides for the excursions,Driver,24-hour assistance",
        "Vuelos desde Francia,Circuito privado,8 noches de hotel,Desayunos,Guías francófonos para las excursiones,Chófer,Asistencia 24 h",
      ],
      price: 1281, nights: 8, departureFrom: "Paris", image: "ib7",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,honeymoon,family", maxGuests: 8, order: -85998,
      chapters: [
        chapter(["L'ouest de Bali", "Western Bali", "El oeste de Bali"],
          ["De Jimbaran aux rizières de Belimbing et de Jatiluwih, par Tanah Lot et la côte de sable noir.", "From Jimbaran to the rice fields of Belimbing and Jatiluwih, via Tanah Lot and the black-sand coast.", "De Jimbaran a los arrozales de Belimbing y Jatiluwih, por Tanah Lot y la costa de arena negra."],
          ["ib7", "ib4", "ib1", "ib8"],
          [
            day(1, T_FLY, FLY, "ib3"),
            day(2, ["Arrivée – Jimbaran", "Arrival – Jimbaran", "Llegada – Jimbaran"],
              ["Accueil à l'aéroport avec un collier de fleurs et un sarong traditionnel, puis transfert à l'hôtel de Jimbaran.", "Welcome at the airport with a flower garland and a traditional sarong, then transfer to the hotel in Jimbaran.", "Recibimiento en el aeropuerto con un collar de flores y un sarong tradicional y traslado al hotel de Jimbaran."], "ib3"),
            day(3, ["Tanah Lot, Balian et Belimbing", "Tanah Lot, Balian and Belimbing", "Tanah Lot, Balian y Belimbing"],
              ["Le temple de Tanah Lot, construit au XVIe siècle sur un îlot rocheux, puis la plage de sable noir de Balian, avant une nuit au milieu des rizières de Belimbing.", "Tanah Lot temple, built in the 16th century on a rocky islet, then the black-sand beach at Balian, before a night among the Belimbing rice fields.", "El templo de Tanah Lot, construido en el siglo XVI sobre un islote rocoso, y la playa de arena negra de Balian, antes de una noche entre los arrozales de Belimbing."], "ib7"),
            day(4, ["Jatiluwih et Bedugul – Ubud", "Jatiluwih and Bedugul – Ubud", "Jatiluwih y Bedugul – Ubud"],
              ["Promenade guidée dans les rizières de Jatiluwih, classées à l'Unesco, et explication du subak. Route par les montagnes de Bedugul jusqu'à Ubud.", "A guided walk in the UNESCO-listed Jatiluwih rice terraces and an explanation of the subak. Drive through the Bedugul mountains to Ubud.", "Paseo guiado por los arrozales de Jatiluwih, inscritos en la Unesco, y explicación del subak. Carretera por las montañas de Bedugul hasta Ubud."], "ib1"),
          ]),
        chapter(["Ubud et l'est", "Ubud and the east", "Ubud y el este"],
          ["Deux jours libres à Ubud, puis l'est de l'île jusqu'à Besakih.", "Two free days in Ubud, then the east of the island as far as Besakih.", "Dos días libres en Ubud y el este de la isla hasta Besakih."],
          ["ib2", "ib5", "ib6"],
          [fd(5, UBUD, UBUD_FREE, "ib2"), fd(6, UBUD, UBUD_FREE, "ib8"), day(7, T_BESAKIH_EAST, BESAKIH_EAST, "ib5")]),
        chapter(["Sanur", "Sanur", "Sanur"],
          ["Deux journées libres sur la plage avant le retour.", "Two free days on the beach before going home.", "Dos jornadas libres en la playa antes del regreso."],
          ["ib3", "cu4"],
          [fd(8, SANUR, SANUR_FREE, "ib3"), fd(9, SANUR, SANUR_FREE, "cu4"), day(10, T_DPS_HOME, DPS_HOME, "cu1"), day(11, T_HOME, HOME, "ib7")]),
      ],
    }),

    // ───────────── 4. Bali Passion — 12J/9N ─────────────
    trip({
      slug: "indonesie-bali-passion-12j",
      name: ["Bali Passion : trois journées de visites depuis Ubud, puis Sanur", "Bali Passion: Three Days of Touring from Ubud, then Sanur", "Bali Pasión: tres jornadas de visitas desde Ubud y Sanur"],
      tagline: ["Jatiluwih, Kintamani, Besakih et Tanah Lot, puis quatre nuits à la plage", "Jatiluwih, Kintamani, Besakih and Tanah Lot, then four nights at the beach", "Jatiluwih, Kintamani, Besakih y Tanah Lot, y cuatro noches en la playa"],
      description: [
        "Un circuit garanti dès deux participants : cinq nuits à Ubud avec trois journées de visites (les rizières de Jatiluwih et le lac Bratan, la caldeira de Kintamani et le temple de Besakih, Mengwi, Sangeh et Tanah Lot) et une journée libre, puis quatre nuits dans un hôtel 4* de Sanur. Groupe de 20 personnes au plus. Version privative à partir de 1 422 € par personne ; séjour balnéaire possible à Nusa Dua, Lombok ou Gili Trawangan (à partir de 1 607 €).",
        "A tour guaranteed from two travellers: five nights in Ubud with three days of touring (the Jatiluwih rice terraces and Lake Bratan, the Kintamani caldera and Besakih temple, Mengwi, Sangeh and Tanah Lot) and a free day, then four nights in a 4* hotel in Sanur. Groups of 20 at most. Private version from €1,422 per person; beach stay possible in Nusa Dua, Lombok or Gili Trawangan (from €1,607).",
        "Un circuito garantizado desde dos participantes: cinco noches en Ubud con tres jornadas de visitas (los arrozales de Jatiluwih y el lago Bratan, la caldera de Kintamani y el templo de Besakih, Mengwi, Sangeh y Tanah Lot) y una jornada libre, y cuatro noches en un hotel de 4* de Sanur. Grupos de 20 personas como máximo. Versión privada desde 1.422 € por persona; estancia de playa posible en Nusa Dua, Lombok o Gili Trawangan (desde 1.607 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,9 nuits en hôtels 3* et 4*,Petits-déjeuners et 3 déjeuners,3 journées de visites,Assistance sur place",
        "Flights from France,Airport transfers,9 nights in 3* and 4* hotels,Breakfasts and 3 lunches,3 days of touring,Local assistance",
        "Vuelos desde Francia,Traslados al aeropuerto,9 noches en hoteles de 3* y 4*,Desayunos y 3 almuerzos,3 jornadas de visitas,Asistencia in situ",
      ],
      price: 1386, nights: 9, departureFrom: "Francfort", image: "bp1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 20, order: -85997,
      chapters: [
        chapter(["Ubud et ses environs", "Ubud and its surroundings", "Ubud y sus alrededores"],
          ["Cinq nuits à Ubud et trois journées pour les grands sites de l'île.", "Five nights in Ubud and three days for the island's great sites.", "Cinco noches en Ubud y tres jornadas para los grandes lugares de la isla."],
          ["bp1", "bp2", "bp3", "bp6", "bp7"],
          [day(1, T_FLY, FLY, "bp2"), day(2, T_UBUD_ARR, UBUD_ARR, "bp3"), day(3, T_JATI, JATI, "bp1"), day(4, T_KINTA, KINTA, "bp2"), day(5, T_TANAH, TANAH, "bp6"), fd(6, UBUD, UBUD_FREE, "bp7")]),
        chapter(["Sanur", "Sanur", "Sanur"],
          ["Quatre nuits dans un hôtel 4* à quelques minutes de la plage.", "Four nights in a 4* hotel a few minutes from the beach.", "Cuatro noches en un hotel de 4* a pocos minutos de la playa."],
          ["bp4", "cu6", "cu1"],
          [day(7, T_TO_SANUR, TO_SANUR, "bp4"), fd(8, SANUR, SANUR_FREE, "cu6"), fd(9, SANUR, SANUR_FREE, "cu1"), fd(10, SANUR, SANUR_FREE, "bp4"), day(11, T_DPS_HOME, DPS_HOME, "cu4"), day(12, T_HOME, HOME, "bp1")]),
      ],
    }),

    // ───────────── 5. Combiné Ubud & Gili — 14J/11N ─────────────
    trip({
      slug: "indonesie-bali-ubud-gili-sejour-14j",
      name: ["Bali et Gili en liberté : Ubud, Gili Trawangan et Sanur", "Bali and the Gilis at Your Own Pace: Ubud, Gili Trawangan and Sanur", "Bali y Gili por libre: Ubud, Gili Trawangan y Sanur"],
      tagline: ["Cinq nuits à Ubud, cinq sur une île sans voitures, une à Sanur", "Five nights in Ubud, five on a car-free island, one in Sanur", "Cinco noches en Ubud, cinco en una isla sin coches y una en Sanur"],
      description: [
        "Un combiné de séjours en toute autonomie : cinq nuits dans un hôtel 4* à Ubud, puis le bateau rapide vers Gili Trawangan, île sans voitures au large de Lombok, pour cinq nuits de plage et de snorkeling, et une dernière nuit à Sanur avant le vol. Transferts, traversées et petits-déjeuners compris ; tout le reste est libre.",
        "A combination of stays, entirely on your own: five nights in a 4* hotel in Ubud, then the fast boat to Gili Trawangan, a car-free island off Lombok, for five nights of beach and snorkelling, and a last night in Sanur before the flight. Transfers, crossings and breakfasts included; everything else is free.",
        "Un combinado de estancias en total autonomía: cinco noches en un hotel de 4* en Ubud, la lancha rápida a Gili Trawangan, isla sin coches frente a Lombok, para cinco noches de playa y snorkel, y una última noche en Sanur antes del vuelo. Traslados, travesías y desayunos incluidos; todo lo demás es libre.",
      ],
      includes: [
        "Vols depuis la France,Transferts et traversées en bateau rapide,11 nuits en hôtels 4*,Petits-déjeuners,Assistance téléphonique",
        "Flights from France,Transfers and fast-boat crossings,11 nights in 4* hotels,Breakfasts,Phone assistance",
        "Vuelos desde Francia,Traslados y travesías en lancha rápida,11 noches en hoteles de 4*,Desayunos,Asistencia telefónica",
      ],
      price: 1442, nights: 11, departureFrom: "Paris", image: "ug7",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,solo", maxGuests: 12, order: -85996,
      chapters: [
        chapter(["Ubud", "Ubud", "Ubud"],
          ["Cinq nuits dans la région d'Ubud.", "Five nights in the Ubud area.", "Cinco noches en la región de Ubud."],
          ["ug3", "cu7", "cu3"],
          [day(1, T_FLY, FLY, "ug3"), day(2, T_UBUD_ARR, UBUD_ARR, "ug3"), fd(3, UBUD, UBUD_FREE, "cu7"), fd(4, UBUD, UBUD_FREE, "cu3"), fd(5, UBUD, UBUD_FREE, "cu5"), fd(6, UBUD, UBUD_FREE, "cu2")]),
        chapter(["Gili Trawangan et Sanur", "Gili Trawangan and Sanur", "Gili Trawangan y Sanur"],
          ["Cinq nuits sur Gili Trawangan, puis une à Sanur.", "Five nights on Gili Trawangan, then one in Sanur.", "Cinco noches en Gili Trawangan y una en Sanur."],
          ["ug7", "ug6", "ug1", "ug8", "ug4"],
          [
            day(7, T_TO_GILI, TO_GILI, "ug8"),
            fd(8, GILI, GILI_FREE, "ug7"), fd(9, GILI, GILI_FREE, "ug6"), fd(10, GILI, GILI_FREE, "ug1"), fd(11, GILI, GILI_FREE, "ug4"),
            day(12, T_GILI_SANUR, GILI_SANUR, "cu4"), day(13, T_DPS_HOME, DPS_HOME, "cu1"), day(14, T_HOME, HOME, "ug7"),
          ]),
      ],
    }),

    // ───────────── 6. Bali Sous Un Autre Angle — 14J/11N ─────────────
    trip({
      slug: "indonesie-bali-autre-angle-prive-14j",
      name: ["Bali sous un autre angle : VTT, randonnées et villages, en privé", "Bali from Another Angle: Mountain Biking, Walks and Villages, in Private", "Bali desde otro ángulo: bicicleta, caminatas y pueblos, en privado"],
      tagline: ["Un Bali actif, de Belimbing à Munduk et Sidemen, avant trois nuits à Sanur", "An active Bali, from Belimbing to Munduk and Sidemen, before three nights in Sanur", "Un Bali activo, de Belimbing a Munduk y Sidemen, antes de tres noches en Sanur"],
      description: [
        "Un circuit privé qui fait voir Bali en marchant et en pédalant : Tanah Lot et le village de Marga, une descente en VTT des rizières de Belimbing jusqu'à la mer, une randonnée dans les plantations de café et de girofle autour de Munduk, deux jours libres à Ubud, puis l'est par Gianyar, Kertagosa et Besakih jusqu'aux rizières de Sidemen. Trois nuits à Sanur pour finir. Guides francophones pour les excursions. Extensions : Sanur (à partir de 1 847 € par personne), îles Gili (2 037 €) ou Komodo (2 886 €).",
        "A private tour that shows Bali on foot and by bike: Tanah Lot and the village of Marga, a mountain-bike ride down from the Belimbing rice fields to the sea, a walk through the coffee and clove plantations around Munduk, two free days in Ubud, then the east via Gianyar, Kertagosa and Besakih to the rice fields of Sidemen. Three nights in Sanur to finish. French-speaking guides for the excursions. Extensions: Sanur (from €1,847 per person), the Gili islands (€2,037) or Komodo (€2,886).",
        "Un circuito privado que muestra Bali caminando y pedaleando: Tanah Lot y el pueblo de Marga, un descenso en bicicleta de montaña desde los arrozales de Belimbing hasta el mar, una caminata por las plantaciones de café y clavo alrededor de Munduk, dos días libres en Ubud y el este por Gianyar, Kertagosa y Besakih hasta los arrozales de Sidemen. Tres noches en Sanur para terminar. Guías francófonos para las excursiones. Extensiones: Sanur (desde 1.847 € por persona), las islas Gili (2.037 €) o Komodo (2.886 €).",
      ],
      includes: [
        "Vols depuis la France,Circuit privé,11 nuits en hôtels,Petits-déjeuners,Guides francophones pour les excursions,Chauffeur,Assistance 24 h/24",
        "Flights from France,Private tour,11 hotel nights,Breakfasts,French-speaking guides for the excursions,Driver,24-hour assistance",
        "Vuelos desde Francia,Circuito privado,11 noches de hotel,Desayunos,Guías francófonos para las excursiones,Chófer,Asistencia 24 h",
      ],
      price: 1532, nights: 11, departureFrom: "Francfort", image: "aa2",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 8, order: -85995,
      chapters: [
        chapter(["L'ouest et les montagnes", "The west and the mountains", "El oeste y las montañas"],
          ["De Legian à Belimbing et Munduk, à pied et à vélo.", "From Legian to Belimbing and Munduk, on foot and by bike.", "De Legian a Belimbing y Munduk, a pie y en bicicleta."],
          ["aa2", "aa3", "aa4", "aa8"],
          [
            day(1, T_FLY, FLY, "aa1"),
            day(2, ["Arrivée – Legian", "Arrival – Legian", "Llegada – Legian"], ["Accueil par votre chauffeur et transfert à l'hôtel de Legian, au bord de la mer.", "Welcome by your driver and transfer to the seafront hotel in Legian.", "Recibimiento por su chófer y traslado al hotel de Legian, junto al mar."], "aa1"),
            day(3, ["Tanah Lot, Marga et Jatiluwih – Belimbing", "Tanah Lot, Marga and Jatiluwih – Belimbing", "Tanah Lot, Marga y Jatiluwih – Belimbing"],
              ["Le temple de Tanah Lot, puis le village de Marga, dans la province de Tabanan, pour une immersion dans la vie balinaise, et les rizières de Jatiluwih. Nuit à Belimbing.", "Tanah Lot temple, then the village of Marga in Tabanan province for a look at Balinese daily life, and the Jatiluwih rice terraces. Night in Belimbing.", "El templo de Tanah Lot, el pueblo de Marga, en la provincia de Tabanan, para sumergirse en la vida balinesa, y los arrozales de Jatiluwih. Noche en Belimbing."], "aa2"),
            day(4, ["En VTT jusqu'à la mer – Munduk", "By mountain bike to the sea – Munduk", "En bicicleta hasta el mar – Munduk"],
              ["Balade en VTT, surtout en descente, à travers les villages et les rizières de Belimbing jusqu'à la plage de Surabrata. Route vers Munduk, dans les montagnes.", "A mountain-bike ride, mostly downhill, through the villages and rice fields of Belimbing to Surabrata beach. Drive to Munduk, in the mountains.", "Paseo en bicicleta de montaña, sobre todo cuesta abajo, por los pueblos y arrozales de Belimbing hasta la playa de Surabrata. Carretera hacia Munduk, en las montañas."], "aa8"),
            day(5, ["Randonnée à Munduk – Bedugul – Ubud", "A walk at Munduk – Bedugul – Ubud", "Caminata en Munduk – Bedugul – Ubud"],
              ["Randonnée matinale autour de Munduk, à travers les plantations de girofle et de café. Route par Bedugul et Mengwi jusqu'à Ubud.", "A morning walk around Munduk, through clove and coffee plantations. Drive via Bedugul and Mengwi to Ubud.", "Caminata matinal alrededor de Munduk, entre plantaciones de clavo y café. Carretera por Bedugul y Mengwi hasta Ubud."], "aa4"),
          ]),
        chapter(["Ubud et Sidemen", "Ubud and Sidemen", "Ubud y Sidemen"],
          ["Deux jours libres à Ubud, puis l'est de l'île.", "Two free days in Ubud, then the east of the island.", "Dos días libres en Ubud y el este de la isla."],
          ["aa6", "aa5", "aa7"],
          [fd(6, UBUD, UBUD_FREE, "aa6"), fd(7, UBUD, UBUD_FREE, "aa5"), day(8, T_BESAKIH_EAST, BESAKIH_EAST, "aa7"),
            day(9, ["Sidemen, journée libre", "Sidemen, free day", "Sidemen, jornada libre"], ["Journée libre dans la vallée de Sidemen, entre rizières en terrasses, villages et artisans.", "A free day in the Sidemen valley, among rice terraces, villages and craftspeople.", "Jornada libre en el valle de Sidemen, entre arrozales en terrazas, pueblos y artesanos."], "aa8")]),
        chapter(["Sanur", "Sanur", "Sanur"],
          ["Trois nuits au bord de la mer.", "Three nights by the sea.", "Tres noches junto al mar."],
          ["aa9", "aa12", "aa11"],
          [day(10, ["Sidemen – Sanur", "Sidemen – Sanur", "Sidemen – Sanur"], ["Transfert vers Sanur et installation à l'hôtel.", "Transfer to Sanur and check in at the hotel.", "Traslado a Sanur e instalación en el hotel."], "aa9"),
            fd(11, SANUR, SANUR_FREE, "aa12"), fd(12, SANUR, SANUR_FREE, "aa11"), day(13, T_DPS_HOME, DPS_HOME, "aa9"), day(14, T_HOME, HOME, "aa2")]),
      ],
    }),

    // ───────────── 7. Trio d'îles — 11J/8N ─────────────
    trip({
      slug: "indonesie-trio-iles-bali-nusa-penida-lembongan-11j",
      name: ["Trio d'îles : Bali, Nusa Penida et Nusa Lembongan", "Three Islands: Bali, Nusa Penida and Nusa Lembongan", "Trío de islas: Bali, Nusa Penida y Nusa Lembongan"],
      tagline: ["Kintamani en voiture décapotable, un cours de cuisine, puis les falaises de Nusa Penida", "Kintamani by convertible, a cooking class, then the cliffs of Nusa Penida", "Kintamani en descapotable, una clase de cocina y los acantilados de Nusa Penida"],
      description: [
        "Un voyage privé entre culture et îles : trois nuits à Ubud avec une sortie en voiture décapotable vers Kintamani, les rizières de Tegallalang et les sources sacrées de Sebatu, puis un cours de cuisine balinaise qui commence au marché. Le bateau rapide mène ensuite à Nusa Penida et à ses falaises spectaculaires, puis à Nusa Lembongan, avant une dernière nuit à Sanur.",
        "A private trip between culture and islands: three nights in Ubud with an outing by convertible to Kintamani, the Tegallalang rice terraces and the sacred springs of Sebatu, then a Balinese cooking class that starts at the market. A fast boat then takes you to Nusa Penida and its spectacular cliffs, then to Nusa Lembongan, before a last night in Sanur.",
        "Un viaje privado entre cultura e islas: tres noches en Ubud con una salida en descapotable hacia Kintamani, los arrozales de Tegallalang y los manantiales sagrados de Sebatu, y una clase de cocina balinesa que empieza en el mercado. La lancha rápida lleva después a Nusa Penida y sus espectaculares acantilados, y a Nusa Lembongan, antes de una última noche en Sanur.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé,8 nuits en hôtels 3* et 4*,Petits-déjeuners,Sortie en décapotable et cours de cuisine,Traversées en bateau rapide,Assistance sur place",
        "Flights from France,Private tour,8 nights in 3* and 4* hotels,Breakfasts,Convertible outing and cooking class,Fast-boat crossings,Local assistance",
        "Vuelos desde Francia,Circuito privado,8 noches en hoteles de 3* y 4*,Desayunos,Salida en descapotable y clase de cocina,Travesías en lancha rápida,Asistencia in situ",
      ],
      price: 1538, nights: 8, departureFrom: "Paris", image: "tr1",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,honeymoon,solo", maxGuests: 8, order: -85994,
      chapters: [
        chapter(["Ubud", "Ubud", "Ubud"],
          ["Trois nuits à Ubud, entre volcans, rizières et cuisine.", "Three nights in Ubud, between volcanoes, rice fields and cooking.", "Tres noches en Ubud, entre volcanes, arrozales y cocina."],
          ["tr2", "tr3", "aa6"],
          [
            day(1, T_FLY, FLY, "tr2"),
            day(2, T_UBUD_ARR, UBUD_ARR, "tr3"),
            day(3, ["Kintamani en décapotable", "Kintamani by convertible", "Kintamani en descapotable"], ["En voiture décapotable vers Kintamani : les rizières de Tegallalang, un café local, puis les sources sacrées de Sebatu et le site de Gunung Kawi.", "By convertible to Kintamani: the Tegallalang rice terraces, a local coffee, then the sacred springs of Sebatu and the Gunung Kawi site.", "En descapotable hacia Kintamani: los arrozales de Tegallalang, un café local y los manantiales sagrados de Sebatu y el sitio de Gunung Kawi."], "tr2"),
            day(4, ["Cours de cuisine balinaise", "Balinese cooking class", "Clase de cocina balinesa"], ["Au marché traditionnel pour choisir les ingrédients, puis cuisine d'un menu balinais complet avec des chefs locaux, et déjeuner.", "At the traditional market to choose the ingredients, then cook a full Balinese menu with local chefs, and lunch.", "En el mercado tradicional para elegir los ingredientes, cocina de un menú balinés completo con chefs locales y almuerzo."], "tr3"),
          ]),
        chapter(["Nusa Penida et Nusa Lembongan", "Nusa Penida and Nusa Lembongan", "Nusa Penida y Nusa Lembongan"],
          ["Deux îles au sud-est de Bali, deux nuits sur chacune.", "Two islands south-east of Bali, two nights on each.", "Dos islas al sureste de Bali, dos noches en cada una."],
          ["tr1", "tr4", "tr5", "tr7", "tr8"],
          [
            day(5, ["Traversée vers Nusa Penida", "Crossing to Nusa Penida", "Travesía a Nusa Penida"], ["Transfert au port de Kusamba et bateau rapide vers Nusa Penida. Fin de journée libre.", "Transfer to Kusamba harbour and a fast boat to Nusa Penida. The rest of the day is free.", "Traslado al puerto de Kusamba y lancha rápida hacia Nusa Penida. Resto del día libre."], "tr4"),
            day(6, ["Nusa Penida, journée libre", "Nusa Penida, free day", "Nusa Penida, jornada libre"], ["Journée libre sur l'île, connue pour la plage de Kelingking, Broken Beach et ses falaises.", "A free day on the island, known for Kelingking beach, Broken Beach and its cliffs.", "Jornada libre en la isla, conocida por la playa de Kelingking, Broken Beach y sus acantilados."], "tr1"),
            day(7, ["Nusa Penida – Nusa Lembongan", "Nusa Penida – Nusa Lembongan", "Nusa Penida – Nusa Lembongan"], ["Bateau rapide vers Nusa Lembongan et installation à l'hôtel.", "Fast boat to Nusa Lembongan and check in at the hotel.", "Lancha rápida hacia Nusa Lembongan e instalación en el hotel."], "tr7"),
            day(8, ["Nusa Lembongan, journée libre", "Nusa Lembongan, free day", "Nusa Lembongan, jornada libre"], ["Journée libre ; des excursions peuvent être réservées auprès de l'équipe sur place.", "A free day; excursions can be booked with the local team.", "Jornada libre; pueden reservarse excursiones con el equipo in situ."], "tr5"),
            day(9, ["Nusa Lembongan – Sanur", "Nusa Lembongan – Sanur", "Nusa Lembongan – Sanur"], ["Traversée retour vers Bali et transfert à Sanur.", "The crossing back to Bali and transfer to Sanur.", "Travesía de regreso a Bali y traslado a Sanur."], "tr8"),
            day(10, T_DPS_HOME, DPS_HOME, "aa12"),
            day(11, T_HOME, HOME, "tr1"),
          ]),
      ],
    }),

    // ───────────── 8. Bohème Balinaise & Gili Trawangan — 15J/12N ─────────────
    trip({
      slug: "indonesie-boheme-balinaise-gili-15j",
      name: ["Bohème balinaise : Tabanan, Ubud, Sidemen et Gili Trawangan", "Bohemian Bali: Tabanan, Ubud, Sidemen and Gili Trawangan", "Bali bohemio: Tabanan, Ubud, Sidemen y Gili Trawangan"],
      tagline: ["Un Bali à rythme lent, en hôtels de charme, avec deux journées guidées et une île pour finir", "A slow-paced Bali, in charming hotels, with two guided days and an island to finish", "Un Bali a ritmo lento, en hoteles con encanto, con dos jornadas guiadas y una isla para terminar"],
      description: [
        "Un voyage privé qui alterne découverte et repos : deux nuits à la campagne dans la région de Tabanan, trois à Ubud, deux dans la vallée de Sidemen, puis trois sur l'île de Gili Trawangan et deux à Sanur. Deux journées avec un guide francophone : les villages et le temple de Tambowaras jusqu'au lac Bratan et Munduk, puis Kintamani, une plantation de café et Besakih. Le reste du temps est libre. Une variante termine sur l'île plus confidentielle de Gili Asahan (à partir de 1 661 € par personne).",
        "A private trip that alternates discovery and rest: two nights in the countryside around Tabanan, three in Ubud, two in the Sidemen valley, then three on Gili Trawangan island and two in Sanur. Two days with a French-speaking guide: the villages and Tambowaras temple to Lake Bratan and Munduk, then Kintamani, a coffee plantation and Besakih. The rest of the time is free. One version ends on the quieter island of Gili Asahan (from €1,661 per person).",
        "Un viaje privado que alterna descubrimiento y descanso: dos noches en el campo en la región de Tabanan, tres en Ubud, dos en el valle de Sidemen, y tres en la isla de Gili Trawangan y dos en Sanur. Dos jornadas con guía francófono: los pueblos y el templo de Tambowaras hasta el lago Bratan y Munduk, y Kintamani, una plantación de café y Besakih. El resto del tiempo es libre. Una variante termina en la isla más tranquila de Gili Asahan (desde 1.661 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Circuit privé,12 nuits en hôtels 3* et 4*,Petits-déjeuners,2 journées avec guide francophone,Traversées en bateau rapide,Assistance sur place",
        "Flights from France,Private tour,12 nights in 3* and 4* hotels,Breakfasts,2 days with a French-speaking guide,Fast-boat crossings,Local assistance",
        "Vuelos desde Francia,Circuito privado,12 noches en hoteles de 3* y 4*,Desayunos,2 jornadas con guía francófono,Travesías en lancha rápida,Asistencia in situ",
      ],
      price: 1600, nights: 12, departureFrom: "Francfort", image: "bo8",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,solo", maxGuests: 8, order: -85993,
      chapters: [
        chapter(["Tabanan et Ubud", "Tabanan and Ubud", "Tabanan y Ubud"],
          ["La campagne de Tabanan, loin des foules, puis Ubud.", "The Tabanan countryside, far from the crowds, then Ubud.", "El campo de Tabanan, lejos de las multitudes, y Ubud."],
          ["bo1", "bo2", "cu7"],
          [
            day(1, T_FLY, FLY, "bo1"),
            day(2, ["Arrivée – Tabanan", "Arrival – Tabanan", "Llegada – Tabanan"], ["Accueil par votre chauffeur et transfert à votre hôtel en pleine campagne, dans la région de Tabanan.", "Welcome by your driver and transfer to your hotel deep in the countryside, in the Tabanan region.", "Recibimiento por su chófer y traslado a su hotel en pleno campo, en la región de Tabanan."], "bo1"),
            day(3, ["Tabanan, journée libre", "Tabanan, free day", "Tabanan, jornada libre"], ["Journée libre dans le sud-ouest de Bali, région de rizières en terrasses et de plages sauvages.", "A free day in south-west Bali, a region of rice terraces and wild beaches.", "Jornada libre en el suroeste de Bali, región de arrozales en terrazas y playas salvajes."], "bo1"),
            day(4, ["Tambowaras, Bratan et Munduk – Ubud", "Tambowaras, Bratan and Munduk – Ubud", "Tambowaras, Bratan y Munduk – Ubud"], ["Avec votre guide francophone : les villages de Babakan et Kaba-Kaba, le temple de Tambowaras dans les montagnes de Penebel, les rizières de Jatiluwih, le lac Bratan et Munduk, avant Ubud.", "With your French-speaking guide: the villages of Babakan and Kaba-Kaba, Tambowaras temple in the Penebel mountains, the Jatiluwih rice terraces, Lake Bratan and Munduk, before Ubud.", "Con su guía francófono: los pueblos de Babakan y Kaba-Kaba, el templo de Tambowaras en las montañas de Penebel, los arrozales de Jatiluwih, el lago Bratan y Munduk, antes de Ubud."], "bo2"),
            fd(5, UBUD, UBUD_FREE, "cu7"), fd(6, UBUD, UBUD_FREE, "cu5"),
          ]),
        chapter(["Kintamani et Sidemen", "Kintamani and Sidemen", "Kintamani y Sidemen"],
          ["Une journée guidée vers l'est, puis deux nuits dans la vallée de Sidemen.", "A guided day to the east, then two nights in the Sidemen valley.", "Una jornada guiada hacia el este y dos noches en el valle de Sidemen."],
          ["bo4", "rl3"],
          [
            day(7, ["Tegallalang, Batur et Besakih – Sidemen", "Tegallalang, Batur and Besakih – Sidemen", "Tegallalang, Batur y Besakih – Sidemen"], ["Avec votre guide : une plantation de café et sa torréfaction, la caldeira de Kintamani face au mont Batur, puis Besakih, avant la vallée de Sidemen.", "With your guide: a coffee plantation and its roasting, the Kintamani caldera facing Mount Batur, then Besakih, before the Sidemen valley.", "Con su guía: una plantación de café y su tostado, la caldera de Kintamani frente al monte Batur, y Besakih, antes del valle de Sidemen."], "bo4"),
            day(8, ["Sidemen, journée libre", "Sidemen, free day", "Sidemen, jornada libre"], ["Journée libre à Sidemen, village caché dans les montagnes de l'est, au milieu des rizières.", "A free day in Sidemen, a village hidden in the eastern mountains, among the rice fields.", "Jornada libre en Sidemen, pueblo escondido en las montañas del este, entre arrozales."], "rl3"),
          ]),
        chapter(["Gili Trawangan et Sanur", "Gili Trawangan and Sanur", "Gili Trawangan y Sanur"],
          ["Trois nuits sur l'île, deux à Sanur.", "Three nights on the island, two in Sanur.", "Tres noches en la isla y dos en Sanur."],
          ["bo8", "bo5", "bo6", "bo9", "bo7"],
          [day(9, T_TO_GILI, TO_GILI, "bo8"), fd(10, GILI, GILI_FREE, "bo5"), fd(11, GILI, GILI_FREE, "bo6"), day(12, T_GILI_SANUR, GILI_SANUR, "bo7"), fd(13, SANUR, SANUR_FREE, "bo9"), day(14, T_DPS_HOME, DPS_HOME, "cu4"), day(15, T_HOME, HOME, "bo8")]),
      ],
    }),

    // ───────────── 9. Bali Authentique — 14J/11N ─────────────
    trip({
      slug: "indonesie-bali-authentique-14j",
      name: ["Bali authentique : rizières, volcans, temples et une journée au village", "Authentic Bali: Rice Terraces, Volcanoes, Temples and a Day in a Village", "Bali auténtico: arrozales, volcanes, templos y una jornada en el pueblo"],
      tagline: ["Cinq journées de visites depuis Ubud, dont la danse du Barong et Pejeng, puis Sanur", "Five days of touring from Ubud, including the Barong dance and Pejeng, then Sanur", "Cinco jornadas de visitas desde Ubud, con la danza del Barong y Pejeng, y Sanur"],
      description: [
        "Le circuit le plus complet sur Bali seule : sept nuits à Ubud avec cinq journées de visites (Jatiluwih et le lac Bratan, Kintamani et Besakih, Taman Ayun, Sangeh et Tanah Lot, une journée de vie villageoise à Pejeng, la danse du Barong, Campuhan et Gunung Kawi), puis quatre nuits à Sanur. Groupe de 25 personnes au plus. Séjour balnéaire possible sur Gili Trawangan ou Lombok (à partir de 1 829 € par personne) ou à Nusa Dua (1 865 €).",
        "The most complete tour of Bali alone: seven nights in Ubud with five days of touring (Jatiluwih and Lake Bratan, Kintamani and Besakih, Taman Ayun, Sangeh and Tanah Lot, a day of village life in Pejeng, the Barong dance, Campuhan and Gunung Kawi), then four nights in Sanur. Groups of 25 at most. Beach stay possible on Gili Trawangan or Lombok (from €1,829 per person) or in Nusa Dua (€1,865).",
        "El circuito más completo solo por Bali: siete noches en Ubud con cinco jornadas de visitas (Jatiluwih y el lago Bratan, Kintamani y Besakih, Taman Ayun, Sangeh y Tanah Lot, una jornada de vida en el pueblo de Pejeng, la danza del Barong, Campuhan y Gunung Kawi) y cuatro noches en Sanur. Grupos de 25 personas como máximo. Estancia de playa posible en Gili Trawangan o Lombok (desde 1.829 € por persona) o en Nusa Dua (1.865 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,11 nuits en hôtels 3* et 4*,Petits-déjeuners et 3 déjeuners,5 journées de visites,Assistance sur place",
        "Flights from France,Airport transfers,11 nights in 3* and 4* hotels,Breakfasts and 3 lunches,5 days of touring,Local assistance",
        "Vuelos desde Francia,Traslados al aeropuerto,11 noches en hoteles de 3* y 4*,Desayunos y 3 almuerzos,5 jornadas de visitas,Asistencia in situ",
      ],
      price: 1632, nights: 11, departureFrom: "Francfort", image: "au1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 25, order: -85992,
      chapters: [
        chapter(["Ubud et le centre de Bali", "Ubud and central Bali", "Ubud y el centro de Bali"],
          ["Sept nuits à Ubud et cinq journées de visites.", "Seven nights in Ubud and five days of touring.", "Siete noches en Ubud y cinco jornadas de visitas."],
          ["au1", "au2", "au3", "au9", "au5", "au6"],
          [day(1, T_FLY, FLY, "au2"), day(2, T_UBUD_ARR, UBUD_ARR, "au2"), day(3, T_JATI, JATI, "au1"), day(4, T_KINTA, KINTA, "au3"), day(5, T_TANAH, TANAH, "au9"), day(6, T_PEJENG, PEJENG, "au4"), day(7, T_BARONG, BARONG, "au5"), fd(8, UBUD, UBUD_FREE, "au6")]),
        chapter(["Sanur", "Sanur", "Sanur"],
          ["Quatre nuits à la plage pour finir.", "Four nights at the beach to finish.", "Cuatro noches en la playa para terminar."],
          ["au8", "cu6", "cu1"],
          [day(9, T_TO_SANUR, TO_SANUR, "au8"), fd(10, SANUR, SANUR_FREE, "cu6"), fd(11, SANUR, SANUR_FREE, "cu1"), fd(12, SANUR, SANUR_FREE, "au8"), day(13, T_DPS_HOME, DPS_HOME, "cu4"), day(14, T_HOME, HOME, "au1")]),
      ],
    }),

    // ───────────── 10. Rêverie Balinaise en roue libre — 16J/13N ─────────────
    trip({
      slug: "indonesie-reverie-balinaise-chauffeur-16j",
      name: ["Rêverie balinaise avec chauffeur : de Tabanan à Pemuteran, Ubud et Gili", "A Balinese Reverie with a Driver: from Tabanan to Pemuteran, Ubud and the Gilis", "Ensueño balinés con chófer: de Tabanan a Pemuteran, Ubud y Gili"],
      tagline: ["Huit heures de chauffeur par jour, le tour complet de l'île et trois nuits sur Gili Trawangan", "Eight hours of driver a day, a full tour of the island and three nights on Gili Trawangan", "Ocho horas de chófer al día, la vuelta completa a la isla y tres noches en Gili Trawangan"],
      description: [
        "Le tour de Bali le plus complet en liberté : un chauffeur avec boîtier wifi huit heures par jour, et des suggestions de visites à chaque étape. Tabanan, Mengwi et Tanah Lot ; Jatiluwih, le lac Bratan et les cascades de Munduk ; Pemuteran, sur la côte nord, et ses récifs coralliens ; le monastère bouddhiste de Brahma Vihara Arama ; Ubud et la danse du Barong ; Kintamani et Besakih jusqu'à Sidemen. Puis trois nuits sur Gili Trawangan et une à Sanur. Une version privative avec guide est proposée à partir de 2 186 € par personne.",
        "The most complete tour of Bali on your own terms: a driver with a wifi box eight hours a day, and suggested visits at each stop. Tabanan, Mengwi and Tanah Lot; Jatiluwih, Lake Bratan and the Munduk waterfalls; Pemuteran on the north coast and its coral reefs; the Buddhist monastery of Brahma Vihara Arama; Ubud and the Barong dance; Kintamani and Besakih to Sidemen. Then three nights on Gili Trawangan and one in Sanur. A private guided version is offered from €2,186 per person.",
        "La vuelta a Bali más completa por libre: un chófer con router wifi ocho horas al día y sugerencias de visitas en cada etapa. Tabanan, Mengwi y Tanah Lot; Jatiluwih, el lago Bratan y las cascadas de Munduk; Pemuteran, en la costa norte, y sus arrecifes de coral; el monasterio budista de Brahma Vihara Arama; Ubud y la danza del Barong; Kintamani y Besakih hasta Sidemen. Después, tres noches en Gili Trawangan y una en Sanur. Existe una versión privada con guía desde 2.186 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts privés,13 nuits en hôtels 3* et 4*,Petits-déjeuners,Chauffeur 8 h par jour avec boîtier wifi,Traversées en bateau rapide,Assistance sur place",
        "Flights from France,Private transfers,13 nights in 3* and 4* hotels,Breakfasts,Driver 8 hours a day with a wifi box,Fast-boat crossings,Local assistance",
        "Vuelos desde Francia,Traslados privados,13 noches en hoteles de 3* y 4*,Desayunos,Chófer 8 h al día con router wifi,Travesías en lancha rápida,Asistencia in situ",
      ],
      price: 1826, nights: 13, departureFrom: "Francfort", image: "rv6",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 8, order: -85991,
      chapters: [
        chapter(["L'ouest et le nord", "The west and the north", "El oeste y el norte"],
          ["De Tabanan aux cascades de Munduk et à la côte de Pemuteran.", "From Tabanan to the Munduk waterfalls and the coast at Pemuteran.", "De Tabanan a las cascadas de Munduk y la costa de Pemuteran."],
          ["rv8", "rv2", "rv6", "rv4", "rv3"],
          [
            day(1, T_FLY, FLY, "rv8"),
            day(2, ["Arrivée – Tabanan", "Arrival – Tabanan", "Llegada – Tabanan"], ["Accueil par votre chauffeur et transfert à votre hôtel à la campagne, dans la région de Tabanan.", "Welcome by your driver and transfer to your countryside hotel in the Tabanan region.", "Recibimiento por su chófer y traslado a su hotel en el campo, en la región de Tabanan."], "rv8"),
            day(3, T_TANAH, TANAH, "rv8"),
            day(4, ["Jatiluwih et le lac Bratan – Munduk", "Jatiluwih and Lake Bratan – Munduk", "Jatiluwih y el lago Bratan – Munduk"], ["Suggestions : les villages de Babakan et Kaba-Kaba, le temple de Tambowaras, les rizières de Jatiluwih et le lac Bratan, avant Munduk.", "Suggestions: the villages of Babakan and Kaba-Kaba, Tambowaras temple, the Jatiluwih rice terraces and Lake Bratan, before Munduk.", "Sugerencias: los pueblos de Babakan y Kaba-Kaba, el templo de Tambowaras, los arrozales de Jatiluwih y el lago Bratan, antes de Munduk."], "rv2"),
            day(5, ["Les cascades de Munduk – Pemuteran", "The Munduk waterfalls – Pemuteran", "Las cascadas de Munduk – Pemuteran"], ["Suggestion : le chemin des cascades de Munduk, environ 2 h 30 de marche facile avec un guide local, puis la route vers Pemuteran, sur la côte nord-ouest.", "Suggestion: the Munduk waterfall trail, about 2 hrs 30 of easy walking with a local guide, then the road to Pemuteran on the north-west coast.", "Sugerencia: el camino de las cascadas de Munduk, unas 2 h 30 de marcha fácil con un guía local, y la carretera hacia Pemuteran, en la costa noroeste."], "rv6"),
            day(6, ["Pemuteran, journée libre", "Pemuteran, free day", "Pemuteran, jornada libre"], ["Journée libre sans chauffeur à Pemuteran, connue pour ses récifs coralliens, ses plages calmes et la plongée.", "A free day without the driver in Pemuteran, known for its coral reefs, quiet beaches and diving.", "Jornada libre sin chófer en Pemuteran, conocida por sus arrecifes de coral, sus playas tranquilas y el buceo."], "rv4"),
          ]),
        chapter(["Ubud et l'est", "Ubud and the east", "Ubud y el este"],
          ["Un monastère bouddhiste, Ubud et ses danses, puis les volcans jusqu'à Sidemen.", "A Buddhist monastery, Ubud and its dances, then the volcanoes to Sidemen.", "Un monasterio budista, Ubud y sus danzas, y los volcanes hasta Sidemen."],
          ["rv7", "aa3", "au5", "bo4"],
          [
            day(7, ["Brahma Vihara Arama – Ubud", "Brahma Vihara Arama – Ubud", "Brahma Vihara Arama – Ubud"], ["Suggestion : le monastère de Brahma Vihara Arama, le plus grand de Bali, ses stupas dorés et sa vue, puis la route vers Ubud.", "Suggestion: the Brahma Vihara Arama monastery, the largest on Bali, its golden stupas and its view, then the road to Ubud.", "Sugerencia: el monasterio de Brahma Vihara Arama, el mayor de Bali, sus estupas doradas y sus vistas, y la carretera hacia Ubud."], "aa3"),
            day(8, ["Ubud : marché et danse du Barong", "Ubud: the market and the Barong dance", "Ubud: el mercado y la danza del Barong"], ["Suggestions : le marché d'Ubud, la danse du Barong à Batubulan, puis les villages d'artistes de Petulu, Sebatu et Payangan.", "Suggestions: Ubud market, the Barong dance in Batubulan, then the artists' villages of Petulu, Sebatu and Payangan.", "Sugerencias: el mercado de Ubud, la danza del Barong en Batubulan y los pueblos de artistas de Petulu, Sebatu y Payangan."], "rv7"),
            day(9, ["Ubud avec chauffeur", "Ubud with your driver", "Ubud con chófer"], ["Journée libre avec chauffeur autour d'Ubud.", "A free day with your driver around Ubud.", "Jornada libre con chófer alrededor de Ubud."], "au5"),
            day(10, ["Kintamani et Besakih – Sidemen", "Kintamani and Besakih – Sidemen", "Kintamani y Besakih – Sidemen"], ["Suggestions : une plantation de café, la caldeira de Kintamani face au mont Batur, Besakih, puis Sidemen.", "Suggestions: a coffee plantation, the Kintamani caldera facing Mount Batur, Besakih, then Sidemen.", "Sugerencias: una plantación de café, la caldera de Kintamani frente al monte Batur, Besakih y Sidemen."], "bo4"),
          ]),
        chapter(["Gili Trawangan et Sanur", "Gili Trawangan and Sanur", "Gili Trawangan y Sanur"],
          ["Trois nuits sur l'île, une à Sanur.", "Three nights on the island, one in Sanur.", "Tres noches en la isla y una en Sanur."],
          ["bo5", "bo9", "ug6"],
          [day(11, T_TO_GILI, TO_GILI, "bo8"), fd(12, GILI, GILI_FREE, "bo5"), fd(13, GILI, GILI_FREE, "bo9"), day(14, T_GILI_SANUR, GILI_SANUR, "ug6"), day(15, T_DPS_HOME, DPS_HOME, "cu4"), day(16, T_HOME, HOME, "rv6")]),
      ],
    }),

    // ───────────── 11. Esprit Balinais — privatif ─────────────
    trip({
      slug: "indonesie-esprit-balinais-prive-15j",
      name: ["Esprit balinais en privé : Ubud, Munduk, Amed et Gili Trawangan", "The Spirit of Bali in Private: Ubud, Munduk, Amed and Gili Trawangan", "Espíritu balinés en privado: Ubud, Munduk, Amed y Gili Trawangan"],
      tagline: ["Un circuit privé avec chauffeur-guide francophone, de la côte d'Amed aux îles Gili", "A private tour with a French-speaking driver-guide, from the Amed coast to the Gili islands", "Un circuito privado con chófer-guía francófono, de la costa de Amed a las islas Gili"],
      description: [
        "Un panorama complet de Bali en voyage privé, avec chauffeur-guide francophone et deux journées libres en cours de route : Mengwi, Sangeh et Tanah Lot, une journée de vie balinaise à Pejeng, Jatiluwih et le lac Bratan, la randonnée des cascades de Munduk, Kintamani et le mont Batur, puis Amed, village de pêcheurs de la côte est, avant trois nuits sur Gili Trawangan et une à Sanur. Hôtels et auberges de charme 2* et 3* (normes locales).",
        "A complete overview of Bali as a private trip, with a French-speaking driver-guide and two free days along the way: Mengwi, Sangeh and Tanah Lot, a day of Balinese life in Pejeng, Jatiluwih and Lake Bratan, the Munduk waterfall walk, Kintamani and Mount Batur, then Amed, a fishing village on the east coast, before three nights on Gili Trawangan and one in Sanur. Charming 2* and 3* hotels and guesthouses (local rating).",
        "Un panorama completo de Bali en viaje privado, con chófer-guía francófono y dos jornadas libres en ruta: Mengwi, Sangeh y Tanah Lot, una jornada de vida balinesa en Pejeng, Jatiluwih y el lago Bratan, la caminata de las cascadas de Munduk, Kintamani y el monte Batur, y Amed, pueblo de pescadores de la costa este, antes de tres noches en Gili Trawangan y una en Sanur. Hoteles y posadas con encanto de 2* y 3* (categoría local).",
      ],
      includes: [
        "Vols depuis la France,Circuit privé en véhicule climatisé,12 nuits en hôtels de charme,Petits-déjeuners,Guides francophones pour les excursions,Traversées en bateau rapide,Transferts privés",
        "Flights from France,Private tour in an air-conditioned vehicle,12 nights in charming hotels,Breakfasts,French-speaking guides for the excursions,Fast-boat crossings,Private transfers",
        "Vuelos desde Francia,Circuito privado en vehículo climatizado,12 noches en hoteles con encanto,Desayunos,Guías francófonos para las excursiones,Travesías en lancha rápida,Traslados privados",
      ],
      price: 1921, nights: 12, departureFrom: "Francfort", image: "es9",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 8, order: -85990,
      chapters: [
        chapter(["Ubud", "Ubud", "Ubud"],
          ["Quatre nuits à Ubud, avec deux journées de visites et une journée libre.", "Four nights in Ubud, with two days of touring and a free day.", "Cuatro noches en Ubud, con dos jornadas de visitas y una libre."],
          ["es2", "es3", "es4", "es5"],
          [day(1, T_FLY, FLY, "es1"), day(2, T_UBUD_ARR, UBUD_ARR, "es2"), day(3, T_TANAH, TANAH, "es3"), day(4, ["Marché d'Ubud, Pejeng et Tegallalang", "Ubud market, Pejeng and Tegallalang", "Mercado de Ubud, Pejeng y Tegallalang"], ["Le marché d'Ubud, puis une journée au village de Pejeng avec ses habitants (offrandes, cuisine, plantation du riz) et les rizières de Tegallalang.", "Ubud market, then a day in the village of Pejeng with its people (offerings, cooking, rice planting) and the Tegallalang rice terraces.", "El mercado de Ubud, una jornada en el pueblo de Pejeng con sus habitantes (ofrendas, cocina, plantación de arroz) y los arrozales de Tegallalang."], "es4"), fd(5, UBUD, UBUD_FREE, "es6")]),
        chapter(["Munduk et Amed", "Munduk and Amed", "Munduk y Amed"],
          ["Les montagnes du centre et leurs cascades, puis la côte est.", "The central mountains and their waterfalls, then the east coast.", "Las montañas del centro y sus cascadas, y la costa este."],
          ["es6", "es8", "es9", "es10"],
          [
            day(6, ["Jatiluwih et le lac Bratan – Munduk", "Jatiluwih and Lake Bratan – Munduk", "Jatiluwih y el lago Bratan – Munduk"], ["Les villages de Babakan, Kaba-Kaba et Meliling, le temple de Tambowaras dans les montagnes, les rizières de Jatiluwih et le lac Bratan, jusqu'à Munduk.", "The villages of Babakan, Kaba-Kaba and Meliling, Tambowaras temple in the mountains, the Jatiluwih rice terraces and Lake Bratan, to Munduk.", "Los pueblos de Babakan, Kaba-Kaba y Meliling, el templo de Tambowaras en las montañas, los arrozales de Jatiluwih y el lago Bratan, hasta Munduk."], "es6"),
            day(7, ["Les cascades de Munduk", "The Munduk waterfalls", "Las cascadas de Munduk"], ["Randonnée facile d'environ 2 h 30 avec un guide local sur le chemin des cascades de Munduk, le long de la rivière.", "An easy walk of about 2 hrs 30 with a local guide on the Munduk waterfall trail, along the river.", "Caminata fácil de unas 2 h 30 con un guía local por el camino de las cascadas de Munduk, a lo largo del río."], "rv6"),
            day(8, ["Kintamani et le mont Batur – Amed", "Kintamani and Mount Batur – Amed", "Kintamani y el monte Batur – Amed"], ["Une plantation de café et ses épices, puis Kintamani face au mont Batur, avant la côte est et le village de pêcheurs d'Amed.", "A coffee and spice plantation, then Kintamani facing Mount Batur, before the east coast and the fishing village of Amed.", "Una plantación de café y especias y Kintamani frente al monte Batur, antes de la costa este y el pueblo de pescadores de Amed."], "es8"),
            day(9, ["Amed, journée libre", "Amed, free day", "Amed, jornada libre"], ["Journée libre à Amed, ses plages de sable noir et ses fonds pour le snorkeling.", "A free day in Amed, with its black-sand beaches and snorkelling.", "Jornada libre en Amed, con sus playas de arena negra y sus fondos para el snorkel."], "es9"),
          ]),
        chapter(["Gili Trawangan et Sanur", "Gili Trawangan and Sanur", "Gili Trawangan y Sanur"],
          ["Trois nuits sur l'île, une à Sanur.", "Three nights on the island, one in Sanur.", "Tres noches en la isla y una en Sanur."],
          ["es11", "es12", "es10"],
          [
            day(10, ["Amed – Gili Trawangan", "Amed – Gili Trawangan", "Amed – Gili Trawangan"], ["Transfert privé au port et bateau rapide vers Gili Trawangan, puis cidomo jusqu'à l'hôtel.", "Private transfer to the harbour and a fast boat to Gili Trawangan, then a cidomo to the hotel.", "Traslado privado al puerto y lancha rápida a Gili Trawangan, y cidomo hasta el hotel."], "es11"),
            fd(11, GILI, GILI_FREE, "es12"), fd(12, GILI, GILI_FREE, "es11"),
            day(13, T_GILI_SANUR, GILI_SANUR, "es10"), day(14, T_DPS_HOME, DPS_HOME, "cu4"), day(15, T_HOME, HOME, "es9"),
          ]),
      ],
    }),

    // ───────────── 12. Perles de Bali et Java — 13J/10N ─────────────
    trip({
      slug: "indonesie-perles-bali-java-bromo-13j",
      name: ["Bali et Java : Borobudur, le volcan Bromo et Ubud", "Bali and Java: Borobudur, Mount Bromo and Ubud", "Bali y Java: Borobudur, el volcán Bromo y Ubud"],
      tagline: ["Les temples de Java, le lever du soleil sur le Bromo, puis cinq jours de visites à Bali", "The temples of Java, sunrise over Bromo, then five days of touring on Bali", "Los templos de Java, el amanecer sobre el Bromo y cinco jornadas de visitas en Bali"],
      description: [
        "Deux îles en un voyage : à Java, Yogyakarta et le palais du sultan, Prambanan, Borobudur, le plus grand temple bouddhiste du monde, puis le train vers l'est et le lever du soleil sur le volcan Bromo. Retour à Bali pour cinq jours à Ubud : Jatiluwih, Kintamani et Besakih, Tanah Lot, une journée de vie villageoise à Pejeng et la danse du Barong. Groupe de 25 personnes au plus. Version avec séjour balnéaire à Sanur à partir de 2 531 € par personne.",
        "Two islands in one trip: on Java, Yogyakarta and the sultan's palace, Prambanan, Borobudur, the largest Buddhist temple in the world, then the train east and sunrise over the Bromo volcano. Back to Bali for five days in Ubud: Jatiluwih, Kintamani and Besakih, Tanah Lot, a day of village life in Pejeng and the Barong dance. Groups of 25 at most. Version with a beach stay in Sanur from €2,531 per person.",
        "Dos islas en un viaje: en Java, Yogyakarta y el palacio del sultán, Prambanan, Borobudur, el mayor templo budista del mundo, y el tren hacia el este con el amanecer sobre el volcán Bromo. Regreso a Bali para cinco días en Ubud: Jatiluwih, Kintamani y Besakih, Tanah Lot, una jornada de vida en el pueblo de Pejeng y la danza del Barong. Grupos de 25 personas como máximo. Versión con estancia de playa en Sanur desde 2.531 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs et train à Java,10 nuits en hôtels,Petits-déjeuners et 9 déjeuners,Visites du programme,Guide francophone à Java,Assistance sur place",
        "Flights from France,Domestic flights and train on Java,10 hotel nights,Breakfasts and 9 lunches,Visits in the programme,French-speaking guide on Java,Local assistance",
        "Vuelos desde Francia,Vuelos interiores y tren en Java,10 noches de hotel,Desayunos y 9 almuerzos,Visitas del programa,Guía francófono en Java,Asistencia in situ",
      ],
      price: 2407, nights: 10, departureFrom: "Francfort", image: "pj6",
      theme: "culture", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 25, order: -85989,
      chapters: [
        chapter(["Java", "Java", "Java"],
          ["Yogyakarta, ses temples classés à l'Unesco, puis le volcan Bromo à l'est.", "Yogyakarta and its UNESCO-listed temples, then the Bromo volcano in the east.", "Yogyakarta y sus templos inscritos en la Unesco, y el volcán Bromo al este."],
          ["pj5", "pj6", "pj7"],
          [
            day(1, T_FLY, FLY, "pj1"),
            day(2, ["Arrivée à Bali", "Arrival in Bali", "Llegada a Bali"], ["Accueil à l'aéroport de Denpasar et transfert à un hôtel proche pour la nuit.", "Welcome at Denpasar airport and transfer to a nearby hotel for the night.", "Recibimiento en el aeropuerto de Denpasar y traslado a un hotel cercano para la noche."], "pj1"),
            day(3, ["Vol pour Yogyakarta – le Kraton et Prambanan", "Flight to Yogyakarta – the Kraton and Prambanan", "Vuelo a Yogyakarta – el Kraton y Prambanan"], ["Vol matinal pour Yogyakarta (15 kg de bagages en soute). Le Kraton, palais du sultan, puis le grand ensemble hindou de Prambanan, classé à l'Unesco.", "An early flight to Yogyakarta (15 kg of hold luggage). The Kraton, the sultan's palace, then the great Hindu complex of Prambanan, a UNESCO site.", "Vuelo temprano a Yogyakarta (15 kg de equipaje facturado). El Kraton, palacio del sultán, y el gran conjunto hindú de Prambanan, inscrito en la Unesco."], "pj7"),
            day(4, T_BORO, BORO, "pj5"),
            day(5, T_TO_BROMO, TO_BROMO, "pj6"),
            day(6, T_BROMO, BROMO, "pj6"),
          ]),
        chapter(["Ubud et Bali", "Ubud and Bali", "Ubud y Bali"],
          ["Cinq jours de visites depuis Ubud avant le vol retour.", "Five days of touring from Ubud before the flight home.", "Cinco jornadas de visitas desde Ubud antes del vuelo de regreso."],
          ["pj3", "pj4", "pj8", "pj2"],
          [day(7, T_JATI, JATI, "pj4"), day(8, T_KINTA, KINTA, "pj3"), day(9, T_TANAH, TANAH, "pj8"), day(10, T_PEJENG, PEJENG, "pj3"), day(11, T_BARONG, BARONG, "pj7"), day(12, T_DPS_HOME, DPS_HOME, "pj2"), day(13, T_HOME, HOME, "pj6")]),
      ],
    }),

    // ───────────── 13. Merveille Indonésienne — 17J/14N ─────────────
    trip({
      slug: "indonesie-bali-java-celebes-toraja-17j",
      name: ["Merveilles d'Indonésie : pays Toraja, Java et Bali", "Wonders of Indonesia: Toraja Country, Java and Bali", "Maravillas de Indonesia: tierra toraja, Java y Bali"],
      tagline: ["Trois îles en dix-sept jours : Célèbes, Java et Bali", "Three islands in seventeen days: Sulawesi, Java and Bali", "Tres islas en diecisiete días: Célebes, Java y Bali"],
      description: [
        "Le grand tour de l'Indonésie : un vol vers Makassar et trois nuits en pays Toraja, sur l'île de Célèbes, avec ses maisons tongkonan aux toits en forme de cornes de buffle et ses tombes creusées dans les falaises de Lemo et de Londa. Puis Java : Yogyakarta, Prambanan, Borobudur et le lever du soleil sur le Bromo. Le voyage se termine à Bali, à Ubud, avec Jatiluwih, Kintamani, Tanah Lot, une journée au village de Pejeng et la danse du Barong. Groupe de 25 personnes au plus.",
        "The grand tour of Indonesia: a flight to Makassar and three nights in Toraja country on the island of Sulawesi, with its tongkonan houses roofed like buffalo horns and its tombs cut into the cliffs at Lemo and Londa. Then Java: Yogyakarta, Prambanan, Borobudur and sunrise over Bromo. The trip ends on Bali, in Ubud, with Jatiluwih, Kintamani, Tanah Lot, a day in the village of Pejeng and the Barong dance. Groups of 25 at most.",
        "La gran vuelta a Indonesia: un vuelo a Makassar y tres noches en tierra toraja, en la isla de Célebes, con sus casas tongkonan de tejados en forma de cuernos de búfalo y sus tumbas excavadas en los acantilados de Lemo y Londa. Después, Java: Yogyakarta, Prambanan, Borobudur y el amanecer sobre el Bromo. El viaje termina en Bali, en Ubud, con Jatiluwih, Kintamani, Tanah Lot, una jornada en el pueblo de Pejeng y la danza del Barong. Grupos de 25 personas como máximo.",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs et train à Java,14 nuits en hôtels,Repas selon programme,Visites du programme,Guides francophones,Assistance sur place",
        "Flights from France,Domestic flights and train on Java,14 hotel nights,Meals as per programme,Visits in the programme,French-speaking guides,Local assistance",
        "Vuelos desde Francia,Vuelos interiores y tren en Java,14 noches de hotel,Comidas según programa,Visitas del programa,Guías francófonos,Asistencia in situ",
      ],
      price: 3421, nights: 14, departureFrom: "Bruxelles", image: "pj5",
      theme: "culture", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 25, order: -85988,
      chapters: [
        chapter(["Célèbes : le pays Toraja", "Sulawesi: Toraja country", "Célebes: la tierra toraja"],
          ["Les hautes terres de Sulawesi et la culture Toraja, ses maisons sculptées et ses rites funéraires.", "The highlands of Sulawesi and Toraja culture, its carved houses and funeral rites.", "Las tierras altas de Sulawesi y la cultura toraja, sus casas talladas y sus ritos funerarios."],
          ["pj4", "es1", "pj7"],
          [
            day(1, T_FLY, FLY, "pj1"),
            day(2, ["Arrivée à Bali", "Arrival in Bali", "Llegada a Bali"], ["Accueil à l'aéroport de Denpasar et transfert à un hôtel proche.", "Welcome at Denpasar airport and transfer to a nearby hotel.", "Recibimiento en el aeropuerto de Denpasar y traslado a un hotel cercano."], "pj1"),
            day(3, ["Vol pour Makassar – le pays Toraja", "Flight to Makassar – Toraja country", "Vuelo a Makassar – tierra toraja"], ["Vol matinal pour Makassar, puis route pittoresque par Pare Pare vers les hautes terres du centre de Sulawesi et le pays Toraja (environ 8 heures).", "An early flight to Makassar, then the scenic road via Pare Pare to the central highlands of Sulawesi and Toraja country (about 8 hours).", "Vuelo temprano a Makassar y carretera pintoresca por Pare Pare hacia las tierras altas del centro de Sulawesi y la tierra toraja (unas 8 horas)."], "es1"),
            day(4, ["Lemo, Sanggala et Londa", "Lemo, Sanggala and Londa", "Lemo, Sanggala y Londa"], ["Les villages de Tana Toraja et leurs maisons tongkonan aux toits sculptés en arcs, en cornes de buffle ou en bateaux, et les tombes creusées dans la falaise de Lemo et dans les grottes de Londa.", "The villages of Tana Toraja and their tongkonan houses with roofs carved like arches, buffalo horns or boats, and the tombs cut into the cliff at Lemo and the caves at Londa.", "Los pueblos de Tana Toraja y sus casas tongkonan con tejados tallados en arco, en cuernos de búfalo o en barco, y las tumbas excavadas en el acantilado de Lemo y en las cuevas de Londa."], "pj4"),
            day(5, ["Batutumonga et Bori", "Batutumonga and Bori", "Batutumonga y Bori"], ["Route vers Batutumonga, au cœur des paysages de montagne, par le vieux village de Patawa, puis les sites de Marante et Bori.", "Drive to Batutumonga, deep in the mountain scenery, via the old village of Patawa, then the sites of Marante and Bori.", "Carretera hacia Batutumonga, en pleno paisaje de montaña, por el antiguo pueblo de Patawa, y los sitios de Marante y Bori."], "es1"),
            day(6, ["Makassar – vol pour Yogyakarta", "Makassar – flight to Yogyakarta", "Makassar – vuelo a Yogyakarta"], ["Route vers l'aéroport de Makassar et vol pour Yogyakarta, la capitale culturelle et artisanale de Java.", "Drive to Makassar airport and fly to Yogyakarta, the cultural and craft capital of Java.", "Carretera hacia el aeropuerto de Makassar y vuelo a Yogyakarta, la capital cultural y artesanal de Java."], "pj7"),
          ]),
        chapter(["Java", "Java", "Java"],
          ["Prambanan, Borobudur et le volcan Bromo.", "Prambanan, Borobudur and the Bromo volcano.", "Prambanan, Borobudur y el volcán Bromo."],
          ["pj5", "pj6"],
          [day(7, T_YOGYA, YOGYA, "pj7"), day(8, T_BORO, BORO, "pj5"), day(9, T_TO_BROMO, TO_BROMO, "pj6"), day(10, T_BROMO, BROMO, "pj6")]),
        chapter(["Bali", "Bali", "Bali"],
          ["Cinq jours à Ubud et autour.", "Five days in and around Ubud.", "Cinco días en Ubud y alrededores."],
          ["bp1", "bp2", "bp6", "bp7"],
          [day(11, T_JATI, JATI, "bp1"), day(12, T_KINTA, KINTA, "bp2"), day(13, T_TANAH, TANAH, "bp6"), day(14, T_PEJENG, PEJENG, "bp2"), day(15, T_BARONG, BARONG, "bp7"), day(16, T_DPS_HOME, DPS_HOME, "bp4"), day(17, T_HOME, HOME, "pj5")]),
      ],
    }),

    // ───────────── 14. Évasion Privilège — 12J/9N ─────────────
    trip({
      slug: "indonesie-evasion-privilege-bali-12j",
      name: ["Bali en version privilège : hôtels 5*, Ubud, Candidasa et Sanur", "Bali in Style: 5* Hotels, Ubud, Candidasa and Sanur", "Bali en versión privilegio: hoteles de 5*, Ubud, Candidasa y Sanur"],
      tagline: ["Un circuit privé en hôtels 5*, de la Coccinelle décapotable au village Bali Aga de Tenganan", "A private tour in 5* hotels, from a convertible Beetle to the Bali Aga village of Tenganan", "Un circuito privado en hoteles de 5*, del escarabajo descapotable al pueblo bali aga de Tenganan"],
      description: [
        "Bali en voyage privé et en hôtels 5* (normes locales) : le village de Marga et les rizières de Jatiluwih, Tanah Lot et les montagnes de Bedugul, une sortie vers Kintamani à bord d'une Volkswagen décapotable, un cours de cuisine à Ubud, puis l'est de l'île avec Besakih, Candidasa et Tenganan, village des Bali Aga, premiers habitants de l'île, avant deux nuits à Sanur. Six déjeuners et six dîners compris. Extensions : Sanur (à partir de 4 461 € par personne), îles Gili (4 436 €) ou Komodo (5 414 €).",
        "Bali as a private trip in 5* hotels (local rating): the village of Marga and the Jatiluwih rice terraces, Tanah Lot and the Bedugul mountains, an outing to Kintamani in a convertible Volkswagen, a cooking class in Ubud, then the east of the island with Besakih, Candidasa and Tenganan, village of the Bali Aga, the island's first inhabitants, before two nights in Sanur. Six lunches and six dinners included. Extensions: Sanur (from €4,461 per person), the Gili islands (€4,436) or Komodo (€5,414).",
        "Bali en viaje privado y en hoteles de 5* (categoría local): el pueblo de Marga y los arrozales de Jatiluwih, Tanah Lot y las montañas de Bedugul, una salida hacia Kintamani a bordo de un Volkswagen descapotable, una clase de cocina en Ubud, y el este de la isla con Besakih, Candidasa y Tenganan, pueblo de los bali aga, primeros habitantes de la isla, antes de dos noches en Sanur. Seis almuerzos y seis cenas incluidos. Extensiones: Sanur (desde 4.461 € por persona), las islas Gili (4.436 €) o Komodo (5.414 €).",
      ],
      includes: [
        "Vols depuis la France,Circuit privé,9 nuits en hôtels 5*,Petits-déjeuners 6 déjeuners et 6 dîners,Sortie en décapotable et cours de cuisine,Guides et chauffeur,Assistance sur place",
        "Flights from France,Private tour,9 nights in 5* hotels,Breakfasts 6 lunches and 6 dinners,Convertible outing and cooking class,Guides and driver,Local assistance",
        "Vuelos desde Francia,Circuito privado,9 noches en hoteles de 5*,Desayunos 6 almuerzos y 6 cenas,Salida en descapotable y clase de cocina,Guías y chófer,Asistencia in situ",
      ],
      price: 3483, nights: 9, departureFrom: "Francfort", image: "ev1",
      theme: "relax", feeling: "contentment", travelerTypes: "couples,honeymoon", maxGuests: 6, order: -85987,
      chapters: [
        chapter(["Legian et l'ouest", "Legian and the west", "Legian y el oeste"],
          ["Deux nuits à Legian, avec les rizières de Jatiluwih.", "Two nights in Legian, with the Jatiluwih rice terraces.", "Dos noches en Legian, con los arrozales de Jatiluwih."],
          ["ev1", "ev2", "ev3"],
          [
            day(1, T_FLY, FLY, "ev1"),
            day(2, ["Arrivée – Legian", "Arrival – Legian", "Llegada – Legian"], ["Accueil à l'aéroport avec un collier de fleurs et un sarong, puis transfert à l'hôtel de Legian.", "Welcome at the airport with a flower garland and a sarong, then transfer to the hotel in Legian.", "Recibimiento en el aeropuerto con un collar de flores y un sarong y traslado al hotel de Legian."], "ev1"),
            day(3, ["Marga et Jatiluwih", "Marga and Jatiluwih", "Marga y Jatiluwih"], ["Le village de Marga et une ferme balinaise traditionnelle, puis les rizières en terrasses de Jatiluwih, classées à l'Unesco.", "The village of Marga and a traditional Balinese farm, then the UNESCO-listed Jatiluwih rice terraces.", "El pueblo de Marga y una granja balinesa tradicional, y los arrozales en terrazas de Jatiluwih, inscritos en la Unesco."], "ev2"),
          ]),
        chapter(["Ubud", "Ubud", "Ubud"],
          ["Tanah Lot sur la route, puis deux jours d'expériences à Ubud.", "Tanah Lot on the way, then two days of experiences in Ubud.", "Tanah Lot en el camino y dos días de experiencias en Ubud."],
          ["ev3", "ev4", "ev5"],
          [
            day(4, ["Tanah Lot et Bedugul – Ubud", "Tanah Lot and Bedugul – Ubud", "Tanah Lot y Bedugul – Ubud"], ["Le temple de Tanah Lot, puis les montagnes de Bedugul et le lac Bratan, jusqu'à Ubud.", "Tanah Lot temple, then the Bedugul mountains and Lake Bratan, to Ubud.", "El templo de Tanah Lot y las montañas de Bedugul y el lago Bratan, hasta Ubud."], "ev3"),
            day(5, ["Kintamani en Volkswagen décapotable", "Kintamani in a convertible Volkswagen", "Kintamani en Volkswagen descapotable"], ["À bord d'une Volkswagen décapotable vers Kintamani, par les rizières de Tegallalang, avec une pause café.", "In a convertible Volkswagen to Kintamani, via the Tegallalang rice terraces, with a coffee stop.", "A bordo de un Volkswagen descapotable hacia Kintamani, por los arrozales de Tegallalang, con una pausa para el café."], "ev4"),
            day(6, ["Cours de cuisine balinaise", "Balinese cooking class", "Clase de cocina balinesa"], ["Un marché traditionnel avec vos hôtes pour découvrir les ingrédients de la cuisine balinaise, puis cours de cuisine et déjeuner.", "A traditional market with your hosts to discover the ingredients of Balinese cooking, then a cooking class and lunch.", "Un mercado tradicional con sus anfitriones para descubrir los ingredientes de la cocina balinesa, y clase de cocina con almuerzo."], "ev5"),
          ]),
        chapter(["L'est et Sanur", "The east and Sanur", "El este y Sanur"],
          ["Besakih, Candidasa et le village de Tenganan, puis Sanur.", "Besakih, Candidasa and the village of Tenganan, then Sanur.", "Besakih, Candidasa y el pueblo de Tenganan, y Sanur."],
          ["ev6", "ev7", "ev8"],
          [
            day(7, ["Gianyar, Kertagosa et Besakih – Candidasa", "Gianyar, Kertagosa and Besakih – Candidasa", "Gianyar, Kertagosa y Besakih – Candidasa"], ["Le marché de Gianyar, le palais de justice de Kertagosa et Besakih, avant Candidasa, sur la côte est.", "Gianyar market, the Kertagosa hall of justice and Besakih, before Candidasa on the east coast.", "El mercado de Gianyar, el palacio de justicia de Kertagosa y Besakih, antes de Candidasa, en la costa este."], "ev7"),
            day(8, ["Tenganan, village des Bali Aga", "Tenganan, village of the Bali Aga", "Tenganan, pueblo de los bali aga"], ["Le village de Tenganan, berceau des Bali Aga, connu pour son tissage geringsing, puis une randonnée dans les environs.", "The village of Tenganan, home of the Bali Aga, known for its geringsing weaving, then a walk in the surroundings.", "El pueblo de Tenganan, cuna de los bali aga, conocido por su tejido geringsing, y una caminata por los alrededores."], "ev6"),
            day(9, ["Candidasa – Sanur", "Candidasa – Sanur", "Candidasa – Sanur"], ["Temps libre, puis transfert à Sanur, d'où l'on voit les bateaux des pêcheurs et l'île de Nusa Penida.", "Free time, then transfer to Sanur, with its fishing boats and the view of Nusa Penida.", "Tiempo libre y traslado a Sanur, con sus barcas de pescadores y la vista de Nusa Penida."], "ev8"),
            fd(10, SANUR, SANUR_FREE, "aa9"),
            day(11, T_DPS_HOME, DPS_HOME, "ev8"),
            day(12, T_HOME, HOME, "ev1"),
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
