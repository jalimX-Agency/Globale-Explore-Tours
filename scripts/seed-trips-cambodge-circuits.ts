// Cambodia circuits — 6 journey-format trips for the existing "cambodge" destination, including
// the Thailand + Cambodia and Laos + Cambodia combinations (the Vietnam + Cambodia circuits are
// published with Vietnam). Beach extensions and private versions are described inside each trip.
// "Les Essentiels du Cambodge" is not included: its supplier page has no programme. Prices are
// per-person "from" prices. Supplier product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-cambodge-circuits.ts
// Requires scripts/upload-images-cambodge-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "cambodge-magie-angkor-battambang-kampot-14j": ["381938", "381979", "381978", "381958", "385098", "385138", "385099", "385100"],
  "cambodge-intimiste-angkor-koh-sdach-14j": ["241458", "136499", "241461", "241460", "169321", "136538", "374518", "374538", "374519"],
  "cambodge-indispensable-prive-11j": ["385140"],
  "cambodge-thailande-angkor-chiang-mai-13j": ["84258"],
  "cambodge-laos-luang-prabang-angkor-12j": ["324778"],
  "cambodge-immersion-mondulkiri-ratanakiri-17j": ["410098"],
};

// ── Shared texts ──
const T_FLY: L3 = ["Envol pour le Cambodge", "Flight to Cambodia", "Vuelo a Camboya"];
const FLY: L3 = ["Envol à destination de Phnom Penh. Dîner et nuit à bord.", "Flight to Phnom Penh. Dinner and night on board.", "Vuelo con destino a Phnom Penh. Cena y noche a bordo."];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_PNH: L3 = ["Arrivée à Phnom Penh", "Arrival in Phnom Penh", "Llegada a Phnom Penh"];
const PNH: L3 = [
  "Accueil à l'aéroport de Phnom Penh et transfert à l'hôtel. En début de soirée, dîner dans un restaurant local.",
  "Welcome at Phnom Penh airport and transfer to the hotel. In the early evening, dinner in a local restaurant.",
  "Recibimiento en el aeropuerto de Phnom Penh y traslado al hotel. A primera hora de la noche, cena en un restaurante local.",
];
const T_SKUN: L3 = ["Skun et Phnom Santuk – Kampong Thom", "Skun and Phnom Santuk – Kampong Thom", "Skun y Phnom Santuk – Kampong Thom"];
const SKUN: L3 = [
  "Arrêt au marché de Skun, connu pour sa spécialité insolite, la mygale frite, puis montée à la pagode de la colline de Phnom Santuk. L'après-midi, les temples préangkoriens de Sambor Prei Kuk, classés à l'Unesco.",
  "A stop at Skun market, known for its unusual speciality, fried tarantula, then up to the pagoda on Phnom Santuk hill. In the afternoon, the pre-Angkorian temples of Sambor Prei Kuk, a UNESCO site.",
  "Parada en el mercado de Skun, conocido por su insólita especialidad, la tarántula frita, y subida a la pagoda de la colina de Phnom Santuk. Por la tarde, los templos preangkorianos de Sambor Prei Kuk, inscritos en la Unesco.",
];
const T_KHLEANG: L3 = ["Le Tonlé Sap et Kampong Khleang – Siem Reap", "Tonlé Sap and Kampong Khleang – Siem Reap", "El Tonlé Sap y Kampong Khleang – Siem Reap"];
const KHLEANG: L3 = [
  "Route vers le Tonlé Sap, le plus grand lac d'Asie du Sud-Est, et le village de Kampong Khleang, aux maisons sur pilotis, encore à l'écart du tourisme de masse. Promenade à pied, puis bateau local sur le lac, avant Siem Reap.",
  "Drive to the Tonlé Sap, the largest lake in Southeast Asia, and the village of Kampong Khleang, with its stilt houses, still away from mass tourism. A walk, then a local boat on the lake, before Siem Reap.",
  "Carretera hacia el Tonlé Sap, el mayor lago del Sudeste Asiático, y el pueblo de Kampong Khleang, con sus casas sobre pilotes, todavía lejos del turismo de masas. Paseo a pie y barco local por el lago, antes de Siem Reap.",
];
const T_ANGKOR: L3 = ["Angkor : Preah Khan, Ta Prohm et Angkor Thom", "Angkor: Preah Khan, Ta Prohm and Angkor Thom", "Angkor: Preah Khan, Ta Prohm y Angkor Thom"];
const ANGKOR: L3 = [
  "En tuk-tuk vers le temple de Preah Khan, puis le Ta Prohm, où la pierre et les racines des fromagers centenaires s'entremêlent. L'après-midi, la grande cité royale d'Angkor Thom et les visages du Bayon, puis Angkor Wat.",
  "By tuk-tuk to Preah Khan temple, then Ta Prohm, where stone and the roots of century-old silk-cotton trees intertwine. In the afternoon, the great royal city of Angkor Thom and the faces of the Bayon, then Angkor Wat.",
  "En tuk-tuk hacia el templo de Preah Khan y el Ta Prohm, donde la piedra y las raíces de las ceibas centenarias se entrelazan. Por la tarde, la gran ciudad real de Angkor Thom y los rostros del Bayón, y Angkor Wat.",
];
const T_SREI: L3 = ["Banteay Samre, la soie et Banteay Srei", "Banteay Samre, silk and Banteay Srei", "Banteay Samre, la seda y Banteay Srei"];
const SREI: L3 = [
  "Traversée de la campagne, entre maisons traditionnelles et cocotiers, jusqu'au temple de Banteay Samre, puis la ferme de la soie Golden Silk Pheach et son atelier de tissage khmer, et le temple de Banteay Srei, la « citadelle des femmes », réputé pour la finesse de ses sculptures.",
  "Across the countryside, among traditional houses and coconut palms, to the temple of Banteay Samre, then the Golden Silk Pheach silk farm and its Khmer weaving workshop, and the temple of Banteay Srei, the 'citadel of women', known for the finesse of its carvings.",
  "Travesía del campo, entre casas tradicionales y cocoteros, hasta el templo de Banteay Samre, la granja de seda Golden Silk Pheach y su taller de tejido jemer, y el templo de Banteay Srei, la «ciudadela de las mujeres», famoso por la finura de sus relieves.",
];
const T_TO_BTB: L3 = ["Villages et vannerie – Battambang", "Villages and basketry – Battambang", "Pueblos y cestería – Battambang"];
const TO_BTB: L3 = [
  "Route vers un petit village au milieu des champs, pour découvrir la vannerie et la vie locale, avec une noix de coco fraîche, puis la campagne bordée de palmiers à sucre jusqu'à Battambang.",
  "Drive to a small village among the fields to see basket-weaving and local life, with a fresh coconut, then through countryside lined with sugar palms to Battambang.",
  "Carretera hacia un pequeño pueblo entre los campos, para descubrir la cestería y la vida local, con un coco recién cogido, y el campo bordeado de palmeras de azúcar hasta Battambang.",
];
const T_BTB: L3 = ["Battambang en tuk-tuk", "Battambang by tuk-tuk", "Battambang en tuk-tuk"];
const BTB: L3 = [
  "En tuk-tuk dans le centre colonial de Battambang : le marché Psah Nat, l'ancienne résidence du gouverneur, la pagode Damrei Sos, puis les ateliers des habitants, dont une famille de forgerons.",
  "By tuk-tuk through the colonial centre of Battambang: Psah Nat market, the former governor's residence, Damrei Sos pagoda, then local workshops, including a family of blacksmiths.",
  "En tuk-tuk por el centro colonial de Battambang: el mercado Psah Nat, la antigua residencia del gobernador, la pagoda Damrei Sos y los talleres de los vecinos, entre ellos una familia de herreros.",
];
const T_PALACE: L3 = ["Battambang – Phnom Penh et le Palais royal", "Battambang – Phnom Penh and the Royal Palace", "Battambang – Phnom Penh y el Palacio Real"];
const PALACE: L3 = [
  "Route vers Phnom Penh par les provinces de Pursat et de Kampong Chhnang. Visite du Palais royal, résidence du roi Sihamoni, et de la pagode d'Argent.",
  "Drive to Phnom Penh through the provinces of Pursat and Kampong Chhnang. Visit the Royal Palace, residence of King Sihamoni, and the Silver Pagoda.",
  "Carretera hacia Phnom Penh por las provincias de Pursat y Kampong Chhnang. Visita al Palacio Real, residencia del rey Sihamoni, y a la Pagoda de Plata.",
];
const T_PNH_HOME: L3 = ["Phnom Penh – vol retour", "Phnom Penh – flight home", "Phnom Penh – vuelo de regreso"];
const PNH_HOME: L3 = [
  "Temps libre selon l'horaire du vol, puis transfert à l'aéroport de Phnom Penh et envol pour la France.",
  "Free time depending on your flight, then transfer to Phnom Penh airport and fly to France.",
  "Tiempo libre según el horario del vuelo, traslado al aeropuerto de Phnom Penh y vuelo a Francia.",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "cambodge",
    imagePrefix: "cambodge",
    season: { label: ["Nov à mars", "Nov to March", "Nov a mar"], months: "november,december,january,february,march" },
  });

  const journeyTrips = [
    // ───────────── 1. Magie du Cambodge — 14J/11N ─────────────
    trip({
      slug: "cambodge-magie-angkor-battambang-kampot-14j",
      name: ["Magie du Cambodge : Angkor, Battambang, Kampot et Kep", "The Magic of Cambodia: Angkor, Battambang, Kampot and Kep", "Magia de Camboya: Angkor, Battambang, Kampot y Kep"],
      tagline: ["Le circuit complet, des temples d'Angkor aux plantations de poivre et à l'île aux Lapins", "The complete tour, from the temples of Angkor to the pepper plantations and Rabbit Island", "El circuito completo, de los templos de Angkor a las plantaciones de pimienta y la isla de los Conejos"],
      description: [
        "Le Cambodge en entier, en groupe de 16 personnes au plus : Sambor Prei Kuk, le lac Tonlé Sap et ses villages sur pilotis, deux jours à Angkor (Ta Prohm, Angkor Thom, Angkor Wat, Banteay Srei), la ville coloniale de Battambang, Phnom Penh et son Palais royal, puis le sud avec une plantation de poivre de Kampot, les salines et une journée en bateau de pêcheur jusqu'à l'île aux Lapins, au large de Kep. Extensions plage à Kep (à partir de 2 339 € par personne), Sihanoukville (2 461 €) ou Koh Rong Samloem (2 463 €) ; version privative à partir de 3 052 €.",
        "The whole of Cambodia, in a group of 16 at most: Sambor Prei Kuk, Tonlé Sap lake and its stilt villages, two days at Angkor (Ta Prohm, Angkor Thom, Angkor Wat, Banteay Srei), the colonial town of Battambang, Phnom Penh and its Royal Palace, then the south with a Kampot pepper plantation, the salt fields and a day by fishing boat to Rabbit Island, off Kep. Beach extensions in Kep (from €2,339 per person), Sihanoukville (€2,461) or Koh Rong Samloem (€2,463); private version from €3,052.",
        "Camboya entera, en grupo de 16 personas como máximo: Sambor Prei Kuk, el lago Tonlé Sap y sus pueblos sobre pilotes, dos días en Angkor (Ta Prohm, Angkor Thom, Angkor Wat, Banteay Srei), la ciudad colonial de Battambang, Phnom Penh y su Palacio Real, y el sur con una plantación de pimienta de Kampot, las salinas y una jornada en barco de pescadores hasta la isla de los Conejos, frente a Kep. Extensiones de playa en Kep (desde 2.339 € por persona), Sihanoukville (2.461 €) o Koh Rong Samloem (2.463 €); versión privada desde 3.052 €.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,11 nuits en hôtels 3* et 4*,Pension selon programme,Visites et entrées du programme,Guide francophone",
        "Flights from France,Airport transfers,11 nights in 3* and 4* hotels,Meals as per programme,Visits and entrance fees in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,11 noches en hoteles de 3* y 4*,Comidas según programa,Visitas y entradas del programa,Guía francófono",
      ],
      price: 1915, nights: 11, departureFrom: "Barcelone", image: "ma2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 16, order: -84000,
      chapters: [
        chapter(["Phnom Penh, Sambor Prei Kuk et le Tonlé Sap", "Phnom Penh, Sambor Prei Kuk and Tonlé Sap", "Phnom Penh, Sambor Prei Kuk y el Tonlé Sap"],
          ["De la capitale aux temples préangkoriens, puis le grand lac.", "From the capital to the pre-Angkorian temples, then the great lake.", "De la capital a los templos preangkorianos, y el gran lago."],
          ["ma3", "ma8", "ci7"],
          [day(1, T_FLY, FLY, "ma4"), day(2, T_PNH, PNH, "ma4"), day(3, T_SKUN, SKUN, "ma3"), day(4, T_KHLEANG, KHLEANG, "ci7")]),
        chapter(["Angkor", "Angkor", "Angkor"],
          ["Deux jours dans les temples, de Ta Prohm à Banteay Srei.", "Two days in the temples, from Ta Prohm to Banteay Srei.", "Dos días en los templos, de Ta Prohm a Banteay Srei."],
          ["ma2", "ma1", "ci5", "ci6"],
          [day(5, T_ANGKOR, ANGKOR, "ma1"), day(6, T_SREI, SREI, "ci5")]),
        chapter(["Battambang et Phnom Penh", "Battambang and Phnom Penh", "Battambang y Phnom Penh"],
          ["La campagne et la ville coloniale de Battambang, puis le Palais royal.", "The countryside and the colonial town of Battambang, then the Royal Palace.", "El campo y la ciudad colonial de Battambang, y el Palacio Real."],
          ["ma5", "ma4"],
          [day(7, T_TO_BTB, TO_BTB, "ci2"), day(8, T_BTB, BTB, "ci4"), day(9, T_PALACE, PALACE, "ma5")]),
        chapter(["Kampot et Kep", "Kampot and Kep", "Kampot y Kep"],
          ["Le sud : le poivre de Kampot, les salines, le crabe de Kep et l'île aux Lapins.", "The south: Kampot pepper, the salt fields, Kep crab and Rabbit Island.", "El sur: la pimienta de Kampot, las salinas, el cangrejo de Kep y la isla de los Conejos."],
          ["ma6", "ma7", "ma8"],
          [
            day(10, ["Plantation de poivre et rivière de Kampot", "A pepper plantation and the Kampot river", "Plantación de pimienta y río de Kampot"], ["Route vers Kampot avec la visite d'une plantation de poivre et un déjeuner autour du poivre, une balade en bateau sur la rivière, puis les salines.", "Drive to Kampot, visiting a pepper plantation with a pepper-themed lunch, a boat ride on the river, then the salt fields.", "Carretera hacia Kampot con visita a una plantación de pimienta y almuerzo en torno a la pimienta, paseo en barco por el río y las salinas."], "ma6"),
            day(11, ["Kep et l'île aux Lapins", "Kep and Rabbit Island", "Kep y la isla de los Conejos"], ["Le marché aux crabes de Kep, puis un bateau de pêcheur jusqu'à l'île aux Lapins, ses plages de sable blanc, la baignade et un pique-nique de fruits de mer.", "The crab market in Kep, then a fishing boat to Rabbit Island, its white-sand beaches, a swim and a seafood picnic.", "El mercado de cangrejos de Kep y un barco de pescadores hasta la isla de los Conejos, sus playas de arena blanca, el baño y un pícnic de marisco."], "ma8"),
            day(12, ["Kampot – Phnom Penh en cyclo-pousse", "Kampot – Phnom Penh by cyclo", "Kampot – Phnom Penh en ciclo"], ["Matinée libre, puis retour à Phnom Penh et découverte de la ville en cyclo-pousse : le Wat Ounalom, l'ancien quartier colonial et le Wat Phnom.", "A free morning, then back to Phnom Penh and a cyclo tour of the city: Wat Ounalom, the old colonial quarter and Wat Phnom.", "Mañana libre, regreso a Phnom Penh y visita de la ciudad en ciclo: el Wat Ounalom, el antiguo barrio colonial y el Wat Phnom."], "ma7"),
            day(13, T_PNH_HOME, PNH_HOME, "ma4"), day(14, T_HOME, HOME, "ma2"),
          ]),
      ],
    }),

    // ───────────── 2. Cambodge Intimiste — 14J/11N ─────────────
    trip({
      slug: "cambodge-intimiste-angkor-koh-sdach-14j",
      name: ["Cambodge en petit groupe : Angkor à vélo, Battambang et l'île de Koh Sdach", "Cambodia in a Small Group: Angkor by Bike, Battambang and Koh Sdach Island", "Camboya en grupo reducido: Angkor en bicicleta, Battambang y la isla de Koh Sdach"],
      tagline: ["Quatorze voyageurs au plus, le train de bambou et trois nuits sur l'île aux Rois", "Fourteen travellers at most, the bamboo train and three nights on the Island of Kings", "Catorce viajeros como máximo, el tren de bambú y tres noches en la isla de los Reyes"],
      description: [
        "Un circuit plus proche des habitants, en groupe de 14 personnes au plus : le village lacustre de Kampong Khleang, Angkor en tuk-tuk et en VTT jusqu'au petit temple de Ta Nei, une soirée « Siem Reap by night » et la rencontre d'une ONG, Banteay Srei, Battambang et son train de bambou, puis Phnom Penh. Le voyage se termine par trois nuits sur l'île de Koh Sdach, l'« île aux Rois », pour un séjour de farniente. Version avec Otres Beach ; version privative à partir de 2 516 € par personne.",
        "A tour closer to local people, in a group of 14 at most: the lake village of Kampong Khleang, Angkor by tuk-tuk and by mountain bike to the small temple of Ta Nei, a 'Siem Reap by night' evening and a meeting with an NGO, Banteay Srei, Battambang and its bamboo train, then Phnom Penh. The trip ends with three nights on Koh Sdach, the 'Island of Kings', for a lazy stay. Version with Otres Beach; private version from €2,516 per person.",
        "Un circuito más cercano a la gente, en grupo de 14 personas como máximo: el pueblo lacustre de Kampong Khleang, Angkor en tuk-tuk y en bicicleta de montaña hasta el pequeño templo de Ta Nei, una velada «Siem Reap by night» y el encuentro con una ONG, Banteay Srei, Battambang y su tren de bambú, y Phnom Penh. El viaje termina con tres noches en la isla de Koh Sdach, la «isla de los Reyes», para descansar. Versión con Otres Beach; versión privada desde 2.516 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,11 nuits en hôtels 3* et 4*,Pension selon programme,Visites et entrées du programme,Guide francophone",
        "Flights from France,Airport transfers,11 nights in 3* and 4* hotels,Meals as per programme,Visits and entrance fees in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,11 noches en hoteles de 3* y 4*,Comidas según programa,Visitas y entradas del programa,Guía francófono",
      ],
      price: 2056, nights: 11, departureFrom: "Barcelone", image: "ci3",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 14, order: -83999,
      chapters: [
        chapter(["Phnom Penh et Siem Reap", "Phnom Penh and Siem Reap", "Phnom Penh y Siem Reap"],
          ["Du lac Tonlé Sap aux temples d'Angkor, à vélo et en tuk-tuk.", "From Tonlé Sap lake to the temples of Angkor, by bike and tuk-tuk.", "Del lago Tonlé Sap a los templos de Angkor, en bicicleta y en tuk-tuk."],
          ["ci7", "ci3", "ci5", "ci6"],
          [
            day(1, T_FLY, FLY, "ci6"), day(2, T_PNH, PNH, "ma4"),
            day(3, ["Skun et Kampong Khleang – Siem Reap", "Skun and Kampong Khleang – Siem Reap", "Skun y Kampong Khleang – Siem Reap"], ["Arrêt à Skun et sa mygale frite, puis le Tonlé Sap et le village lacustre de Kampong Khleang, épargné par le tourisme de masse, avant Siem Reap (environ 318 km).", "A stop in Skun and its fried tarantula, then the Tonlé Sap and the lake village of Kampong Khleang, spared by mass tourism, before Siem Reap (about 318 km).", "Parada en Skun y su tarántula frita, y el Tonlé Sap y el pueblo lacustre de Kampong Khleang, a salvo del turismo de masas, antes de Siem Reap (unos 318 km)."], "ci7"),
            day(4, ["Angkor en tuk-tuk et en VTT", "Angkor by tuk-tuk and mountain bike", "Angkor en tuk-tuk y en bicicleta"], ["En tuk-tuk jusqu'au Ta Prohm, entre pierres et racines, puis en VTT sur une piste forestière jusqu'au petit temple de Ta Nei, avant les grands sites d'Angkor. Le soir, « Siem Reap by night ».", "By tuk-tuk to Ta Prohm, among stones and roots, then by mountain bike along a forest track to the small temple of Ta Nei, before the great sites of Angkor. In the evening, 'Siem Reap by night'.", "En tuk-tuk hasta el Ta Prohm, entre piedras y raíces, y en bicicleta de montaña por una pista forestal hasta el pequeño templo de Ta Nei, antes de los grandes sitios de Angkor. Por la noche, «Siem Reap by night»."], "ci3"),
            day(5, T_SREI, SREI, "ci5"),
          ]),
        chapter(["Battambang et Phnom Penh", "Battambang and Phnom Penh", "Battambang y Phnom Penh"],
          ["La campagne de Battambang et son train de bambou, puis la capitale.", "The Battambang countryside and its bamboo train, then the capital.", "El campo de Battambang y su tren de bambú, y la capital."],
          ["ci4", "ci2", "ma4"],
          [
            day(6, T_TO_BTB, TO_BTB, "ci2"),
            day(7, ["Battambang et le train de bambou", "Battambang and the bamboo train", "Battambang y el tren de bambú"], ["En tuk-tuk dans le centre colonial, le marché Psah Nat et la pagode Damrei Sos, puis un tour en draisine, le célèbre train de bambou.", "By tuk-tuk through the colonial centre, Psah Nat market and Damrei Sos pagoda, then a ride on the norry, the famous bamboo train.", "En tuk-tuk por el centro colonial, el mercado Psah Nat y la pagoda Damrei Sos, y un paseo en draisina, el famoso tren de bambú."], "ci4"),
            day(8, T_PALACE, PALACE, "ma5"),
          ]),
        chapter(["Koh Sdach, l'île aux Rois", "Koh Sdach, the Island of Kings", "Koh Sdach, la isla de los Reyes"],
          ["Trois nuits sur une île sauvage du golfe de Thaïlande.", "Three nights on a wild island in the Gulf of Thailand.", "Tres noches en una isla salvaje del golfo de Tailandia."],
          ["ci8", "ci9"],
          [
            day(9, ["Phnom Penh – Koh Sdach", "Phnom Penh – Koh Sdach", "Phnom Penh – Koh Sdach"], ["Transfert avec chauffeur vers la région de Koh Kong et bateau jusqu'à votre hôtel sur l'île de Koh Sdach.", "Transfer with a driver to the Koh Kong region and a boat to your hotel on Koh Sdach island.", "Traslado con chófer a la región de Koh Kong y barco hasta su hotel en la isla de Koh Sdach."], "ci8"),
            day(10, ["Koh Sdach, journée libre", "Koh Sdach, free day", "Koh Sdach, jornada libre"], ["Journée libre dans un cadre sauvage et naturel. Repas libres.", "A free day in a wild, natural setting. Meals on your own.", "Jornada libre en un entorno salvaje y natural. Comidas libres."], "ci9"),
            day(11, ["Koh Sdach, journée libre", "Koh Sdach, free day", "Koh Sdach, jornada libre"], ["Dernière journée sur l'île.", "A last day on the island.", "Última jornada en la isla."], "ci8"),
            day(12, ["Koh Sdach – Phnom Penh", "Koh Sdach – Phnom Penh", "Koh Sdach – Phnom Penh"], ["Bateau vers le continent, puis transfert à Phnom Penh pour la nuit.", "Boat to the mainland, then transfer to Phnom Penh for the night.", "Barco hacia el continente y traslado a Phnom Penh para la noche."], "ma4"),
            day(13, T_PNH_HOME, PNH_HOME, "ci6"), day(14, T_HOME, HOME, "ci3"),
          ]),
      ],
    }),

    // ───────────── 3. Indispensable Cambodge — 11J/8N ─────────────
    trip({
      slug: "cambodge-indispensable-prive-11j",
      name: ["L'indispensable Cambodge en privé : Angkor, Tonlé Sap et Battambang", "Essential Cambodia in Private: Angkor, Tonlé Sap and Battambang", "Lo imprescindible de Camboya en privado: Angkor, Tonlé Sap y Battambang"],
      tagline: ["Les grands sites du pays en onze jours, avec votre guide francophone", "The country's great sites in eleven days, with your own French-speaking guide", "Los grandes lugares del país en once días, con su guía francófono"],
      description: [
        "Un circuit privé pour l'essentiel du Cambodge : Skun et Phnom Santuk, Sambor Prei Kuk, le village lacustre de Kampong Khleang sur le Tonlé Sap, deux jours à Angkor (Preah Khan, Ta Prohm, Angkor Thom, Banteay Samre, Banteay Srei et une ferme de la soie), puis Battambang et le retour à Phnom Penh par les provinces de Pursat et de Kampong Chhnang. Hôtels 3* et 4* (normes locales), guides francophones.",
        "A private tour of the essentials of Cambodia: Skun and Phnom Santuk, Sambor Prei Kuk, the lake village of Kampong Khleang on the Tonlé Sap, two days at Angkor (Preah Khan, Ta Prohm, Angkor Thom, Banteay Samre, Banteay Srei and a silk farm), then Battambang and the return to Phnom Penh through Pursat and Kampong Chhnang provinces. 3* and 4* hotels (local rating), French-speaking guides.",
        "Un circuito privado por lo esencial de Camboya: Skun y Phnom Santuk, Sambor Prei Kuk, el pueblo lacustre de Kampong Khleang en el Tonlé Sap, dos días en Angkor (Preah Khan, Ta Prohm, Angkor Thom, Banteay Samre, Banteay Srei y una granja de seda), y Battambang con el regreso a Phnom Penh por las provincias de Pursat y Kampong Chhnang. Hoteles de 3* y 4* (categoría local), guías francófonos.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé,8 nuits en hôtels 3* et 4*,Pension selon programme,Visites et excursions du programme,Guides francophones",
        "Flights from France,Private tour,8 nights in 3* and 4* hotels,Meals as per programme,Visits and excursions in the programme,French-speaking guides",
        "Vuelos desde Francia,Circuito privado,8 noches en hoteles de 3* y 4*,Comidas según programa,Visitas y excursiones del programa,Guías francófonos",
      ],
      price: 2372, nights: 8, departureFrom: "Barcelone", image: "ma1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,honeymoon", maxGuests: 8, order: -83998,
      chapters: [
        chapter(["Vers Angkor", "On to Angkor", "Hacia Angkor"],
          ["De Phnom Penh à Siem Reap par Sambor Prei Kuk et le Tonlé Sap.", "From Phnom Penh to Siem Reap via Sambor Prei Kuk and the Tonlé Sap.", "De Phnom Penh a Siem Reap por Sambor Prei Kuk y el Tonlé Sap."],
          ["ma3", "ci7", "ma8"],
          [day(1, T_FLY, FLY, "ma4"), day(2, T_PNH, ["Accueil à l'aéroport et transfert à l'hôtel. En début de soirée, rencontre avec votre guide.", "Welcome at the airport and transfer to the hotel. In the early evening, meet your guide.", "Recibimiento en el aeropuerto y traslado al hotel. A primera hora de la noche, encuentro con su guía."], "ma5"), day(3, T_SKUN, SKUN, "ma3"), day(4, T_KHLEANG, KHLEANG, "ci7")]),
        chapter(["Angkor et Battambang", "Angkor and Battambang", "Angkor y Battambang"],
          ["Deux jours dans les temples, puis la ville coloniale de Battambang.", "Two days in the temples, then the colonial town of Battambang.", "Dos días en los templos y la ciudad colonial de Battambang."],
          ["ma1", "ma2", "ci5", "ci4"],
          [day(5, T_ANGKOR, ANGKOR, "ma1"), day(6, T_SREI, SREI, "ci5"), day(7, T_TO_BTB, TO_BTB, "ci2"), day(8, T_BTB, BTB, "ci4"), day(9, T_PALACE, PALACE, "ma4"), day(10, T_PNH_HOME, PNH_HOME, "ma5"), day(11, T_HOME, HOME, "ma2")]),
      ],
    }),

    // ───────────── 4. Incontournables Thaïlande & Cambodge — 13J/10N ─────────────
    trip({
      slug: "cambodge-thailande-angkor-chiang-mai-13j",
      name: ["Thaïlande et Cambodge : du Triangle d'or aux temples d'Angkor", "Thailand and Cambodia: from the Golden Triangle to the Temples of Angkor", "Tailandia y Camboya: del Triángulo de Oro a los templos de Angkor"],
      tagline: ["Les incontournables thaïlandais, puis le lever du soleil sur Angkor Wat", "Thailand's must-sees, then sunrise over Angkor Wat", "Lo imprescindible de Tailandia y el amanecer sobre Angkor Wat"],
      description: [
        "Deux pays en un voyage, en groupe de 24 personnes au plus : en Thaïlande, les marchés de Mae Klong et de Damnoen Saduak, Ayutthaya, Sukhothai, le Triangle d'or, Chiang Mai et le train de nuit ; puis un vol pour Siem Reap, le village lacustre de Kampong Khleang, le lever du soleil sur Angkor Wat depuis le Phnom Bakheng, Banteay Samre et les grands temples d'Angkor. Vols intérieurs compris.",
        "Two countries in one trip, in a group of 24 at most: in Thailand, the markets of Mae Klong and Damnoen Saduak, Ayutthaya, Sukhothai, the Golden Triangle, Chiang Mai and the night train; then a flight to Siem Reap, the lake village of Kampong Khleang, sunrise over Angkor Wat from Phnom Bakheng, Banteay Samre and the great temples of Angkor. Domestic flights included.",
        "Dos países en un viaje, en grupo de 24 personas como máximo: en Tailandia, los mercados de Mae Klong y Damnoen Saduak, Ayutthaya, Sukhothai, el Triángulo de Oro, Chiang Mai y el tren nocturno; y un vuelo a Siem Reap, el pueblo lacustre de Kampong Khleang, el amanecer sobre Angkor Wat desde el Phnom Bakheng, Banteay Samre y los grandes templos de Angkor. Vuelos interiores incluidos.",
      ],
      includes: [
        "Vols depuis la France,Vols Bangkok–Siem Reap–Bangkok,Train de nuit Chiang Mai–Bangkok,9 nuits en hôtels,Pension selon programme,Guides francophones,Visites et entrées du programme",
        "Flights from France,Bangkok–Siem Reap–Bangkok flights,Chiang Mai–Bangkok night train,9 hotel nights,Meals as per programme,French-speaking guides,Visits and entrance fees in the programme",
        "Vuelos desde Francia,Vuelos Bangkok–Siem Reap–Bangkok,Tren nocturno Chiang Mai–Bangkok,9 noches de hotel,Comidas según programa,Guías francófonos,Visitas y entradas del programa",
      ],
      price: 2383, nights: 10, departureFrom: "Francfort", image: "tc2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 24, order: -83997,
      chapters: [
        chapter(["La Thaïlande", "Thailand", "Tailandia"],
          ["Bangkok, les capitales historiques, le Triangle d'or et Chiang Mai.", "Bangkok, the historic capitals, the Golden Triangle and Chiang Mai.", "Bangkok, las capitales históricas, el Triángulo de Oro y Chiang Mai."],
          ["tc3", "tc4", "tc5"],
          [
            day(1, ["Envol pour Bangkok", "Flight to Bangkok", "Vuelo a Bangkok"], ["Envol pour la Thaïlande. Dîner et nuit à bord.", "Flight to Thailand. Dinner and night on board.", "Vuelo a Tailandia. Cena y noche a bordo."], "tc3"),
            day(2, ["Arrivée à Bangkok", "Arrival in Bangkok", "Llegada a Bangkok"], ["Accueil par votre guide francophone avec une guirlande de fleurs et transfert à l'hôtel.", "Welcome by your French-speaking guide with a flower garland and transfer to the hotel.", "Recibimiento por su guía francófono con una guirnalda de flores y traslado al hotel."], "tc3"),
            day(3, ["Les marchés de Mae Klong et Damnoen Saduak", "The markets of Mae Klong and Damnoen Saduak", "Los mercados de Mae Klong y Damnoen Saduak"], ["Le marché installé sur la voie ferrée de Mae Klong, puis le marché flottant de Damnoen Saduak en pirogue.", "The market laid out on the Mae Klong railway line, then the floating market of Damnoen Saduak by boat.", "El mercado instalado sobre la vía del tren de Mae Klong y el mercado flotante de Damnoen Saduak en piragua."], "tc3"),
            day(4, ["Ayutthaya et Lopburi – Phitsanulok", "Ayutthaya and Lopburi – Phitsanulok", "Ayutthaya y Lopburi – Phitsanulok"], ["Ayutthaya, ancienne capitale du Siam classée à l'Unesco, puis Lopburi, la cité des singes, avant Phitsanulok.", "Ayutthaya, the former capital of Siam and a UNESCO site, then Lopburi, the monkey city, before Phitsanulok.", "Ayutthaya, antigua capital de Siam inscrita en la Unesco, y Lopburi, la ciudad de los monos, antes de Phitsanulok."], "tc4"),
            day(5, ["Sukhothai – Chiang Rai", "Sukhothai – Chiang Rai", "Sukhothai – Chiang Rai"], ["Le Bouddha du Wat Phra Buddha Chinnarat, puis Sukhothai, première capitale du Siam, avant Chiang Rai.", "The Buddha of Wat Phra Buddha Chinnarat, then Sukhothai, the first capital of Siam, before Chiang Rai.", "El Buda del Wat Phra Buddha Chinnarat y Sukhothai, primera capital de Siam, antes de Chiang Rai."], "tc4"),
            day(6, ["Le Triangle d'or – Chiang Mai", "The Golden Triangle – Chiang Mai", "El Triángulo de Oro – Chiang Mai"], ["Les ethnies Yao et Akha, le Triangle d'or et le temple blanc de Wat Rong Khun, avant Chiang Mai.", "The Yao and Akha peoples, the Golden Triangle and the White Temple of Wat Rong Khun, before Chiang Mai.", "Las etnias yao y akha, el Triángulo de Oro y el templo blanco de Wat Rong Khun, antes de Chiang Mai."], "tc5"),
            day(7, ["Chiang Mai et le Doi Suthep", "Chiang Mai and Doi Suthep", "Chiang Mai y el Doi Suthep"], ["Le temple du Doi Suthep et sa vue sur la ville, puis les villages d'artisans de Chiang Mai.", "Doi Suthep temple and its view over the city, then the craft villages of Chiang Mai.", "El templo del Doi Suthep y su vista sobre la ciudad, y los pueblos artesanos de Chiang Mai."], "tc4"),
            day(8, ["Éléphants et train de nuit", "Elephants and the night train", "Elefantes y tren nocturno"], ["Un camp d'éléphants et une ferme d'orchidées, puis le train de nuit pour Bangkok, en couchette climatisée.", "An elephant camp and an orchid farm, then the night train to Bangkok, in an air-conditioned sleeper.", "Un campamento de elefantes y una granja de orquídeas, y el tren nocturno a Bangkok, en litera climatizada."], "tc5"),
          ]),
        chapter(["Siem Reap et Angkor", "Siem Reap and Angkor", "Siem Reap y Angkor"],
          ["Un vol vers le Cambodge et trois nuits pour les temples d'Angkor.", "A flight to Cambodia and three nights for the temples of Angkor.", "Un vuelo a Camboya y tres noches para los templos de Angkor."],
          ["tc2", "tc6", "tc7"],
          [
            day(9, ["Vol pour Siem Reap – Kampong Khleang", "Flight to Siem Reap – Kampong Khleang", "Vuelo a Siem Reap – Kampong Khleang"], ["Arrivée matinale à Bangkok et vol pour Siem Reap. Visite du village lacustre de Kampong Khleang, à une quarantaine de kilomètres.", "An early arrival in Bangkok and a flight to Siem Reap. Visit the lake village of Kampong Khleang, some forty kilometres away.", "Llegada temprano a Bangkok y vuelo a Siem Reap. Visita al pueblo lacustre de Kampong Khleang, a unos cuarenta kilómetros."], "ci7"),
            day(10, ["Lever du soleil sur Angkor Wat", "Sunrise over Angkor Wat", "Amanecer sobre Angkor Wat"], ["Départ avant l'aube, petit-déjeuner pique-nique sur le site, puis montée au Phnom Bakheng pour voir le soleil se lever derrière les tours d'Angkor Wat. Journée dans les temples.", "Leave before dawn, a picnic breakfast on site, then up Phnom Bakheng to watch the sun rise behind the towers of Angkor Wat. A day in the temples.", "Salida antes del amanecer, desayuno pícnic en el sitio y subida al Phnom Bakheng para ver salir el sol tras las torres de Angkor Wat. Jornada en los templos."], "tc2"),
            day(11, ["Banteay Samre et les temples", "Banteay Samre and the temples", "Banteay Samre y los templos"], ["Traversée de la campagne jusqu'au temple de Banteay Samre, citadelle des Samrès construite à l'époque d'Angkor Wat, puis suite des visites.", "Across the countryside to Banteay Samre temple, the Samre citadel built in the time of Angkor Wat, then more visits.", "Travesía del campo hasta el templo de Banteay Samre, ciudadela de los samré construida en la época de Angkor Wat, y continuación de las visitas."], "tc6"),
            day(12, ["Siem Reap – vol retour", "Siem Reap – flight home", "Siem Reap – vuelo de regreso"], ["Journée libre, puis vol de Siem Reap pour Bangkok et correspondance pour la France.", "A free day, then a flight from Siem Reap to Bangkok and a connection to France.", "Jornada libre y vuelo de Siem Reap a Bangkok con conexión a Francia."], "tc7"),
            day(13, T_HOME, HOME, "tc2"),
          ]),
      ],
    }),

    // ───────────── 5. Merveilles du Laos et du Cambodge — 12J/9N ─────────────
    trip({
      slug: "cambodge-laos-luang-prabang-angkor-12j",
      name: ["Laos et Cambodge : Vientiane, Luang Prabang et Angkor", "Laos and Cambodia: Vientiane, Luang Prabang and Angkor", "Laos y Camboya: Vientián, Luang Prabang y Angkor"],
      tagline: ["Le train jusqu'à Luang Prabang, les chutes de Kuang Si, puis les temples d'Angkor", "The train to Luang Prabang, the Kuang Si falls, then the temples of Angkor", "El tren hasta Luang Prabang, las cascadas de Kuang Si y los templos de Angkor"],
      description: [
        "Deux joyaux de l'Asie du Sud-Est, en groupe de 15 personnes au plus : Vientiane et ses temples, les paysages karstiques de Vang Vieng, le train jusqu'à Luang Prabang, ville classée à l'Unesco, ses moines au petit matin et les chutes de Kuang Si. Un vol mène ensuite à Siem Reap pour Banteay Srei, Angkor Wat, Preah Khan, une matinée en scooter électrique dans la campagne et les villages du Tonlé Sap.",
        "Two gems of Southeast Asia, in a group of 15 at most: Vientiane and its temples, the karst landscapes of Vang Vieng, the train to Luang Prabang, a UNESCO town, its monks at dawn and the Kuang Si waterfalls. A flight then takes you to Siem Reap for Banteay Srei, Angkor Wat, Preah Khan, a morning by electric scooter through the countryside and the villages of the Tonlé Sap.",
        "Dos joyas del Sudeste Asiático, en grupo de 15 personas como máximo: Vientián y sus templos, los paisajes kársticos de Vang Vieng, el tren hasta Luang Prabang, ciudad inscrita en la Unesco, sus monjes al amanecer y las cascadas de Kuang Si. Un vuelo lleva después a Siem Reap para Banteay Srei, Angkor Wat, Preah Khan, una mañana en scooter eléctrico por el campo y los pueblos del Tonlé Sap.",
      ],
      includes: [
        "Vols depuis la France,Vol Luang Prabang–Siem Reap,Train Vang Vieng–Luang Prabang,9 nuits en hôtels 3*,Pension selon programme,Guides locaux francophones,Visites du programme",
        "Flights from France,Luang Prabang–Siem Reap flight,Vang Vieng–Luang Prabang train,9 nights in 3* hotels,Meals as per programme,French-speaking local guides,Visits in the programme",
        "Vuelos desde Francia,Vuelo Luang Prabang–Siem Reap,Tren Vang Vieng–Luang Prabang,9 noches en hoteles de 3*,Comidas según programa,Guías locales francófonos,Visitas del programa",
      ],
      price: 2414, nights: 9, departureFrom: "Paris", image: "lc5",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 15, order: -83996,
      chapters: [
        chapter(["Le Laos", "Laos", "Laos"],
          ["Vientiane, Vang Vieng et Luang Prabang.", "Vientiane, Vang Vieng and Luang Prabang.", "Vientián, Vang Vieng y Luang Prabang."],
          ["lc1", "lc3", "lc5", "lc6"],
          [
            day(1, ["Envol pour Vientiane", "Flight to Vientiane", "Vuelo a Vientián"], ["Envol pour le Laos. Dîner et nuit à bord.", "Flight to Laos. Dinner and night on board.", "Vuelo a Laos. Cena y noche a bordo."], "lc5"),
            day(2, ["Arrivée à Vientiane", "Arrival in Vientiane", "Llegada a Vientián"], ["Accueil et transfert à l'hôtel. Temps libre pour découvrir la capitale laotienne.", "Welcome and transfer to the hotel. Free time to discover the Laotian capital.", "Recibimiento y traslado al hotel. Tiempo libre para descubrir la capital laosiana."], "lc5"),
            day(3, ["Vientiane – Vang Vieng", "Vientiane – Vang Vieng", "Vientián – Vang Vieng"], ["Visite guidée : l'arc de Patuxai, le Vat Si Muang et le Vat Sisaket, le plus grand temple de la ville. Route vers Vang Vieng et ses paysages karstiques.", "A guided tour: the Patuxai arch, Vat Si Muang and Vat Sisaket, the largest temple in the city. Drive to Vang Vieng and its karst landscapes.", "Visita guiada: el arco de Patuxai, el Vat Si Muang y el Vat Sisaket, el mayor templo de la ciudad. Carretera hacia Vang Vieng y sus paisajes kársticos."], "lc1"),
            day(4, ["En train vers Luang Prabang", "By train to Luang Prabang", "En tren a Luang Prabang"], ["Train vers le nord à travers les montagnes jusqu'à Luang Prabang, ville classée à l'Unesco au bord du Mékong.", "The train north through the mountains to Luang Prabang, a UNESCO town on the Mekong.", "Tren hacia el norte a través de las montañas hasta Luang Prabang, ciudad inscrita en la Unesco a orillas del Mekong."], "lc3"),
            day(5, ["Luang Prabang", "Luang Prabang", "Luang Prabang"], ["Pour les plus matinaux, le Tak Bat, l'offrande aux moines. Matinée en tuk-tuk pour les sites de la ville, dont le marché de Ban Pakham.", "For early risers, the Tak Bat, the alms-giving to the monks. A morning by tuk-tuk to the town's sights, including Ban Pakham market.", "Para los madrugadores, el Tak Bat, la ofrenda a los monjes. Mañana en tuk-tuk por los lugares de la ciudad, entre ellos el mercado de Ban Pakham."], "lc5"),
            day(6, ["Les chutes de Kuang Si", "The Kuang Si falls", "Las cascadas de Kuang Si"], ["Route vers les chutes de Kuang Si par les rizières et les montagnes, avec un arrêt à la ferme de buffles Lao Buffalo.", "Drive to the Kuang Si falls through rice fields and mountains, stopping at the Lao Buffalo farm.", "Carretera hacia las cascadas de Kuang Si entre arrozales y montañas, con parada en la granja de búfalos Lao Buffalo."], "lc6"),
          ]),
        chapter(["Siem Reap et Angkor", "Siem Reap and Angkor", "Siem Reap y Angkor"],
          ["Un vol vers le Cambodge pour les temples et la campagne de Siem Reap.", "A flight to Cambodia for the temples and countryside of Siem Reap.", "Un vuelo a Camboya para los templos y el campo de Siem Reap."],
          ["lc2", "lc4", "lc9", "lc8"],
          [
            day(7, ["Luang Prabang – Siem Reap", "Luang Prabang – Siem Reap", "Luang Prabang – Siem Reap"], ["Matinée libre, puis vol pour Siem Reap, où vous accueille un guide francophone.", "A free morning, then a flight to Siem Reap, where a French-speaking guide meets you.", "Mañana libre y vuelo a Siem Reap, donde le recibe un guía francófono."], "lc2"),
            day(8, T_SREI, SREI, "lc4"),
            day(9, ["Angkor Wat et Preah Khan en tuk-tuk", "Angkor Wat and Preah Khan by tuk-tuk", "Angkor Wat y Preah Khan en tuk-tuk"], ["En tuk-tuk vers Angkor Wat, puis le temple de Preah Khan, construit par Jayavarman VII en l'honneur de son père.", "By tuk-tuk to Angkor Wat, then Preah Khan temple, built by Jayavarman VII in honour of his father.", "En tuk-tuk hacia Angkor Wat y el templo de Preah Khan, construido por Jayavarman VII en honor de su padre."], "lc2"),
            day(10, ["En scooter électrique – le Tonlé Sap", "By electric scooter – the Tonlé Sap", "En scooter eléctrico – el Tonlé Sap"], ["En scooter électrique dans la campagne, entre bambous et cocotiers, à la découverte de la vie quotidienne, puis les villages du Tonlé Sap.", "By electric scooter through the countryside, among bamboo and coconut palms, discovering daily life, then the villages of the Tonlé Sap.", "En scooter eléctrico por el campo, entre bambúes y cocoteros, descubriendo la vida cotidiana, y los pueblos del Tonlé Sap."], "lc9"),
            day(11, ["Les artisans d'Angkor – vol retour", "The Artisans d'Angkor – flight home", "Los Artisans d'Angkor – vuelo de regreso"], ["Visite des ateliers des Artisans d'Angkor, sculpture et peinture sur soie, puis transfert à l'aéroport.", "Visit the Artisans d'Angkor workshops, carving and silk painting, then transfer to the airport.", "Visita a los talleres de los Artisans d'Angkor, escultura y pintura sobre seda, y traslado al aeropuerto."], "lc8"),
            day(12, T_HOME, HOME, "lc5"),
          ]),
      ],
    }),

    // ───────────── 6. Immersion et traditions — 17J/14N ─────────────
    trip({
      slug: "cambodge-immersion-mondulkiri-ratanakiri-17j",
      name: ["Cambodge sauvage en privé : Mékong, Mondulkiri, Ratanakiri et Angkor", "Wild Cambodia in Private: the Mekong, Mondulkiri, Ratanakiri and Angkor", "Camboya salvaje en privado: el Mekong, Mondulkiri, Ratanakiri y Angkor"],
      tagline: ["Les dauphins de l'Irrawaddy, un sanctuaire d'éléphants, la jungle de Virachey et une nuit chez l'habitant", "Irrawaddy dolphins, an elephant sanctuary, the Virachey jungle and a night with a local family", "Los delfines del Irrawaddy, un santuario de elefantes, la selva de Virachey y una noche en casa local"],
      description: [
        "Un Cambodge méconnu, en voyage privé : les îles du Mékong à vélo, les dauphins de l'Irrawaddy à Kratie, l'île de Koh Trong, les hauts plateaux du Mondulkiri et l'Elephant Valley Project, sanctuaire d'éléphants sauvés, Banlung, la « ville rouge » du Ratanakiri, et la rivière Sésan jusqu'à une cascade de la jungle de Virachey. Puis le temple de Preah Vihear sur sa falaise, Koh Ker, Angkor au lever du soleil et à vélo, deux jours de randonnée au Phnom Kulen avec une nuit chez l'habitant, le Tonlé Sap et Sambor Prei Kuk.",
        "A little-known Cambodia, as a private trip: the Mekong islands by bike, the Irrawaddy dolphins at Kratie, Koh Trong island, the Mondulkiri highlands and the Elephant Valley Project, a sanctuary for rescued elephants, Banlung, the 'red town' of Ratanakiri, and the Sesan River to a waterfall in the Virachey jungle. Then Preah Vihear temple on its cliff, Koh Ker, Angkor at sunrise and by bike, two days' walking on Phnom Kulen with a night in a family home, the Tonlé Sap and Sambor Prei Kuk.",
        "Una Camboya poco conocida, en viaje privado: las islas del Mekong en bicicleta, los delfines del Irrawaddy en Kratie, la isla de Koh Trong, las tierras altas de Mondulkiri y el Elephant Valley Project, santuario de elefantes rescatados, Banlung, la «ciudad roja» de Ratanakiri, y el río Sesan hasta una cascada de la selva de Virachey. Después, el templo de Preah Vihear sobre su acantilado, Koh Ker, Angkor al amanecer y en bicicleta, dos días de caminata en el Phnom Kulen con una noche en casa local, el Tonlé Sap y Sambor Prei Kuk.",
      ],
      includes: [
        "Vols depuis la France,Circuit privé,14 nuits en hôtels et chez l'habitant,Pension selon programme,Visites et activités du programme,Guide et chauffeur,Assistance sur place",
        "Flights from France,Private tour,14 nights in hotels and a family home,Meals as per programme,Visits and activities in the programme,Guide and driver,Local assistance",
        "Vuelos desde Francia,Circuito privado,14 noches en hoteles y casa local,Comidas según programa,Visitas y actividades del programa,Guía y chófer,Asistencia in situ",
      ],
      price: 4852, nights: 14, departureFrom: "Luxembourg", image: "im3",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,family,solo", maxGuests: 8, order: -83995,
      chapters: [
        chapter(["Le Mékong et l'Est sauvage", "The Mekong and the wild east", "El Mekong y el este salvaje"],
          ["Les îles du Mékong, les dauphins de Kratie, puis les hauts plateaux du Mondulkiri.", "The Mekong islands, the Kratie dolphins, then the Mondulkiri highlands.", "Las islas del Mekong, los delfines de Kratie y las tierras altas de Mondulkiri."],
          ["im2", "im1", "im3"],
          [
            day(1, T_FLY, FLY, "im1"),
            day(2, T_PNH, ["Accueil par votre chauffeur et votre guide, puis transfert à l'hôtel.", "Welcome by your driver and guide, then transfer to the hotel.", "Recibimiento por su chófer y su guía y traslado al hotel."], "im1"),
            day(3, ["Les îles du Mékong à vélo", "The Mekong islands by bike", "Las islas del Mekong en bicicleta"], ["Environ quatre heures à vélo sur les îles du Mékong, après une traversée en ferry : sentiers, villages et Koh Dach, l'île de la soie, avec un déjeuner local.", "About four hours by bike on the Mekong islands after a ferry crossing: paths, villages and Koh Dach, the silk island, with a local lunch.", "Unas cuatro horas en bicicleta por las islas del Mekong tras una travesía en ferry: senderos, pueblos y Koh Dach, la isla de la seda, con almuerzo local."], "im2"),
            day(4, ["Les dauphins de Kratie – Koh Trong", "The Kratie dolphins – Koh Trong", "Los delfines de Kratie – Koh Trong"], ["Cap à l'est et sortie en barque traditionnelle pour observer les dauphins de l'Irrawaddy, une espèce rare, puis l'île préservée de Koh Trong.", "Head east and a trip in a traditional boat to watch the rare Irrawaddy dolphins, then the unspoilt island of Koh Trong.", "Rumbo al este y salida en barca tradicional para observar los delfines del Irrawaddy, una especie rara, y la isla preservada de Koh Trong."], "im2"),
            day(5, ["Koh Trong à vélo – Sen Monorom", "Koh Trong by bike – Sen Monorom", "Koh Trong en bicicleta – Sen Monorom"], ["Une boucle de 9 km à vélo sur Koh Trong, entre plages et vergers, puis la route vers les hauts plateaux du Mondulkiri.", "A 9-km bike loop on Koh Trong, between beaches and orchards, then the road to the Mondulkiri highlands.", "Un circuito de 9 km en bicicleta por Koh Trong, entre playas y huertos, y la carretera hacia las tierras altas de Mondulkiri."], "im2"),
            day(6, ["L'Elephant Valley Project", "The Elephant Valley Project", "El Elephant Valley Project"], ["Une journée dans ce sanctuaire qui recueille des éléphants maltraités : avec les guides, vous suivez deux familles d'éléphants dans leur milieu naturel.", "A day at this sanctuary for mistreated elephants: with the guides, you follow two elephant families in their natural habitat.", "Una jornada en este santuario que acoge elefantes maltratados: con los guías, se sigue a dos familias de elefantes en su medio natural."], "im3"),
          ]),
        chapter(["Ratanakiri et Preah Vihear", "Ratanakiri and Preah Vihear", "Ratanakiri y Preah Vihear"],
          ["La terre rouge et la jungle du Ratanakiri, puis les temples isolés du nord.", "The red earth and jungle of Ratanakiri, then the isolated temples of the north.", "La tierra roja y la selva de Ratanakiri, y los templos aislados del norte."],
          ["im7", "im4", "im5"],
          [
            day(7, ["Sen Monorom – Banlung", "Sen Monorom – Banlung", "Sen Monorom – Banlung"], ["Route vers Banlung, la « ville rouge », où la terre ocre rencontre la jungle. Visite de la pagode Wat Rahtanharanm et de son grand bouddha couché.", "Drive to Banlung, the 'red town', where ochre earth meets the jungle. Visit Wat Rahtanharanm pagoda and its large reclining Buddha.", "Carretera hacia Banlung, la «ciudad roja», donde la tierra ocre se encuentra con la selva. Visita a la pagoda Wat Rahtanharanm y su gran buda reclinado."], "im7"),
            day(8, ["La rivière Sésan et la jungle de Virachey", "The Sesan River and the Virachey jungle", "El río Sesan y la selva de Virachey"], ["Dès l'aube, en bateau sur la rivière Sésan depuis le village de Kachon avec un ranger, à travers rizières et forêts de bambous, jusqu'à la jungle du parc de Virachey et une cascade de 40 mètres.", "At dawn, by boat on the Sesan River from Kachon village with a ranger, through rice fields and bamboo forest, to the jungle of Virachey park and a 40-metre waterfall.", "Al amanecer, en barco por el río Sesan desde el pueblo de Kachon con un ranger, entre arrozales y bosques de bambú, hasta la selva del parque de Virachey y una cascada de 40 metros."], "im7"),
            day(9, ["Stung Treng – Preah Vihear", "Stung Treng – Preah Vihear", "Stung Treng – Preah Vihear"], ["Route vers Preah Vihear, avec une halte déjeuner à Stung Treng, petite ville isolée aux maisons de bois.", "Drive to Preah Vihear, with a lunch stop in Stung Treng, a small isolated town of wooden houses.", "Carretera hacia Preah Vihear, con parada para almorzar en Stung Treng, pequeña ciudad aislada de casas de madera."], "im4"),
            day(10, ["Preah Vihear et Koh Ker – Siem Reap", "Preah Vihear and Koh Ker – Siem Reap", "Preah Vihear y Koh Ker – Siem Reap"], ["Le temple de Preah Vihear, classé à l'Unesco, au sommet d'une falaise de 547 mètres près de la frontière thaïlandaise, puis le site de Koh Ker et sa pyramide, avant Siem Reap.", "Preah Vihear temple, a UNESCO site at the top of a 547-metre cliff near the Thai border, then the Koh Ker site and its pyramid, before Siem Reap.", "El templo de Preah Vihear, inscrito en la Unesco, en lo alto de un acantilado de 547 metros cerca de la frontera tailandesa, y el sitio de Koh Ker y su pirámide, antes de Siem Reap."], "im5"),
          ]),
        chapter(["Angkor, Phnom Kulen et le Tonlé Sap", "Angkor, Phnom Kulen and Tonlé Sap", "Angkor, Phnom Kulen y el Tonlé Sap"],
          ["Angkor au lever du soleil, deux jours de marche au Phnom Kulen, puis le grand lac.", "Angkor at sunrise, two days' walking on Phnom Kulen, then the great lake.", "Angkor al amanecer, dos días de caminata en el Phnom Kulen y el gran lago."],
          ["im6", "ci5", "ci7", "ma3"],
          [
            day(11, ["Angkor au lever du soleil et à vélo", "Angkor at sunrise and by bike", "Angkor al amanecer y en bicicleta"], ["Lever du soleil sur Angkor Wat, puis le site à vélo : le Bayon et ses visages de pierre, le Ta Prohm envahi par la jungle.", "Sunrise over Angkor Wat, then the site by bike: the Bayon and its stone faces, Ta Prohm overgrown by the jungle.", "Amanecer sobre Angkor Wat y el sitio en bicicleta: el Bayón y sus rostros de piedra, el Ta Prohm invadido por la selva."], "im6"),
            day(12, ["Le Phnom Kulen – nuit chez l'habitant", "Phnom Kulen – a night with a family", "El Phnom Kulen – noche en casa local"], ["Départ pour le Phnom Kulen, plus grande forêt de la province, à travers villages, rizières et palmiers à sucre. Randonnée et nuit dans une famille d'accueil.", "Leave for Phnom Kulen, the largest forest in the province, through villages, rice fields and sugar palms. A walk and a night with a host family.", "Salida hacia el Phnom Kulen, el mayor bosque de la provincia, entre pueblos, arrozales y palmeras de azúcar. Caminata y noche con una familia de acogida."], "ci5"),
            day(13, ["Le plateau de Kulen – Siem Reap", "The Kulen plateau – Siem Reap", "La meseta de Kulen – Siem Reap"], ["Petit-déjeuner dans la famille, puis deuxième journée de randonnée sur le plateau du Phnom Kulen, avant le retour à Siem Reap.", "Breakfast with the family, then a second day's walking on the Phnom Kulen plateau, before returning to Siem Reap.", "Desayuno con la familia y segunda jornada de caminata por la meseta del Phnom Kulen, antes del regreso a Siem Reap."], "im7"),
            day(14, ["Le Tonlé Sap – Kampong Thom", "The Tonlé Sap – Kampong Thom", "El Tonlé Sap – Kampong Thom"], ["En bateau local sur le Tonlé Sap jusqu'au village de Kampong Khleang et ses maisons sur pilotis, déjeuner chez l'habitant, puis route vers Kampong Thom.", "By local boat on the Tonlé Sap to the village of Kampong Khleang and its stilt houses, lunch with a family, then drive to Kampong Thom.", "En barco local por el Tonlé Sap hasta el pueblo de Kampong Khleang y sus casas sobre pilotes, almuerzo en casa local y carretera hacia Kampong Thom."], "ci7"),
            day(15, ["Sambor Prei Kuk – Phnom Penh", "Sambor Prei Kuk – Phnom Penh", "Sambor Prei Kuk – Phnom Penh"], ["Halte aux temples isolés de Sambor Prei Kuk, classés à l'Unesco, puis route vers Phnom Penh.", "A stop at the isolated temples of Sambor Prei Kuk, a UNESCO site, then drive to Phnom Penh.", "Parada en los templos aislados de Sambor Prei Kuk, inscritos en la Unesco, y carretera hacia Phnom Penh."], "ma3"),
            day(16, T_PNH_HOME, PNH_HOME, "im1"), day(17, T_HOME, HOME, "im3"),
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
