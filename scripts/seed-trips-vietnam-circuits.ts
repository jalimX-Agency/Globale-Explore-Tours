// Vietnam circuits — 4 journey-format trips for the existing "vietnam" destination, including the
// Vietnam + Cambodia combination. Beach extensions (Mui Ne, Phu Quoc, Ho Tram), Cambodia
// extensions and private versions are described inside each trip. The "Grand Tour d'Indochine"
// (Laos, Cambodia, Vietnam) is published with Laos. Prices are per-person "from" prices. Supplier
// product ids are kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-vietnam-circuits.ts
// Requires scripts/upload-images-vietnam-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "vietnam-incontournables-halong-hoi-an-mekong-12j": ["83138", "83278", "120898", "83279", "358458", "375719", "358461", "358460", "375740", "375779", "376978"],
  "vietnam-cambodge-incontournables-angkor-15j": ["83280", "358462", "375758"],
  "vietnam-magie-halong-hue-delta-mekong-15j": ["83258", "121678", "358463", "376498", "358467", "376478", "121658", "358464", "376500"],
  "vietnam-intimiste-pu-luong-lan-ha-17j": ["126178", "126179", "126198", "126218", "375739", "375778", "375839", "375781", "375858"],
};

// ── Shared texts ──
const T_FLY: L3 = ["Envol pour le Vietnam", "Flight to Vietnam", "Vuelo a Vietnam"];
const FLY: L3 = ["Envol à destination de Hanoï. Dîner et nuit à bord.", "Flight to Hanoi. Dinner and night on board.", "Vuelo con destino a Hanói. Cena y noche a bordo."];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_HANOI: L3 = ["Arrivée à Hanoï", "Arrival in Hanoi", "Llegada a Hanói"];
const HANOI: L3 = [
  "Accueil par votre guide francophone et tour de la capitale : la place Ba Dinh, le mausolée de Hô Chi Minh, le palais présidentiel, l'Opéra et le vieux quartier des 36 corporations, puis le Temple de la Littérature, première université du pays. Balade autour du lac Hoan Kiem avant le dîner.",
  "Welcome by your French-speaking guide and a tour of the capital: Ba Dinh square, Ho Chi Minh's mausoleum, the presidential palace, the Opera House and the old quarter of the 36 guilds, then the Temple of Literature, the country's first university. A walk around Hoan Kiem lake before dinner.",
  "Recibimiento por su guía francófono y visita de la capital: la plaza Ba Dinh, el mausoleo de Ho Chi Minh, el palacio presidencial, la Ópera y el barrio antiguo de las 36 corporaciones, y el Templo de la Literatura, primera universidad del país. Paseo alrededor del lago Hoan Kiem antes de la cena.",
];
const T_HALONG: L3 = ["La baie d'Halong en jonque", "Ha Long Bay by junk", "La bahía de Ha Long en junco"];
const HALONG: L3 = [
  "Route vers la baie d'Halong et ses quelque 2 000 îlots calcaires, classée à l'Unesco. Embarquement sur une jonque, déjeuner à bord, visite d'une grotte et activités au fil de la croisière. Dîner et nuit à bord.",
  "Drive to Ha Long Bay and its 2,000 or so limestone islets, a UNESCO site. Board a junk, lunch on board, a cave visit and activities along the cruise. Dinner and night on board.",
  "Carretera hacia la bahía de Ha Long y sus cerca de 2.000 islotes calizos, inscrita en la Unesco. Embarque en un junco, almuerzo a bordo, visita de una cueva y actividades durante el crucero. Cena y noche a bordo.",
];
const T_HOALU: L3 = ["Halong – Hoa Lu – Ninh Binh", "Ha Long – Hoa Lu – Ninh Binh", "Ha Long – Hoa Lu – Ninh Binh"];
const HOALU: L3 = [
  "Tai-chi au lever du jour, fin de croisière et brunch à bord. Route vers Ninh Binh, la « baie d'Halong terrestre », avec un arrêt à Hoa Lu, capitale du Vietnam au Xe siècle, et ses temples Dinh et Le.",
  "Tai chi at sunrise, the end of the cruise and brunch on board. Drive to Ninh Binh, 'Ha Long Bay on land', with a stop at Hoa Lu, capital of Vietnam in the 10th century, and its Dinh and Le temples.",
  "Taichí al amanecer, final del crucero y brunch a bordo. Carretera hacia Ninh Binh, la «bahía de Ha Long terrestre», con parada en Hoa Lu, capital de Vietnam en el siglo X, y sus templos Dinh y Le.",
];
const T_NINHBINH: L3 = ["Tam Coc, Hang Mua – train de nuit", "Tam Coc, Hang Mua – night train", "Tam Coc, Hang Mua – tren nocturno"];
const NINHBINH: L3 = [
  "En barque entre les pitons calcaires et les rizières, puis à vélo jusqu'à la pagode Bich Dong. L'après-midi, les marches de Hang Mua et la vue sur la vallée de Tam Coc. Le soir, train de nuit en couchette climatisée vers Hué (avion en option).",
  "By rowing boat among the limestone peaks and rice fields, then by bike to Bich Dong pagoda. In the afternoon, the steps of Hang Mua and the view over the Tam Coc valley. In the evening, a night train in an air-conditioned sleeper to Hue (flight as an option).",
  "En barca entre los picos calizos y los arrozales, y en bicicleta hasta la pagoda Bich Dong. Por la tarde, los escalones de Hang Mua y la vista sobre el valle de Tam Coc. Por la noche, tren nocturno en litera climatizada hacia Hue (avión opcional).",
];
const T_HUE: L3 = ["Hué, la cité impériale", "Hue, the imperial city", "Hue, la ciudad imperial"];
const HUE: L3 = [
  "Une soupe bun bo Hue en arrivant, puis la citadelle et la cité impériale, la pagode Thien Mu et un bateau sur la rivière des Parfums. Vélo dans la campagne des pomelos et cours de cuisine chez l'habitant, le marché Dong Ba, et le soir la cuisine de rue en cyclo-pousse.",
  "A bowl of bun bo Hue on arrival, then the citadel and the imperial city, Thien Mu pagoda and a boat on the Perfume River. Cycling in the pomelo countryside and a cookery class with a family, Dong Ba market, and in the evening street food by cyclo.",
  "Una sopa bun bo Hue a la llegada, la ciudadela y la ciudad imperial, la pagoda Thien Mu y un barco por el río de los Perfumes. Bicicleta por el campo de los pomelos y clase de cocina en casa local, el mercado Dong Ba y, por la noche, comida callejera en ciclo.",
];
const T_HAIVAN: L3 = ["Les tombeaux, le col des Nuages – Hoi An", "The tombs, the Hai Van pass – Hoi An", "Las tumbas, el paso de las Nubes – Hoi An"];
const HAIVAN: L3 = [
  "Les tombeaux impériaux de Khai Dinh et de Minh Mang, puis la route du col des Nuages et du village de Lang Co. Arrêt au musée de la sculpture Cham avant Hoi An et ses lanternes du soir.",
  "The imperial tombs of Khai Dinh and Minh Mang, then the road over the Hai Van pass and through Lang Co village. A stop at the Museum of Cham Sculpture before Hoi An and its evening lanterns.",
  "Las tumbas imperiales de Khai Dinh y Minh Mang, y la carretera del paso de las Nubes y el pueblo de Lang Co. Parada en el museo de escultura cham antes de Hoi An y sus farolillos nocturnos.",
];
const T_HOIAN: L3 = ["Hoi An", "Hoi An", "Hoi An"];
const HOIAN: L3 = [
  "La vieille ville de Hoi An, classée à l'Unesco, et ses maisons anciennes le long de la rivière Thu Bon. Déjeuner de cao lau, puis après-midi libre. En option : atelier de lanternes, bateau sur la rivière ou soins traditionnels.",
  "The old town of Hoi An, a UNESCO site, and its old houses along the Thu Bon river. A cao lau lunch, then a free afternoon. Optional: a lantern workshop, a boat on the river or a traditional treatment.",
  "El casco antiguo de Hoi An, inscrito en la Unesco, y sus casas antiguas a orillas del río Thu Bon. Almuerzo de cao lau y tarde libre. Opcional: taller de farolillos, barco por el río o tratamientos tradicionales.",
];
const T_SAIGON: L3 = ["Vol pour Saïgon", "Flight to Saigon", "Vuelo a Saigón"];
const SAIGON: L3 = [
  "Vol de Da Nang à Saïgon. Le quartier chinois de Cholon, le temple Thien Hau et le marché Binh Tay, un pho pour le déjeuner, puis le centre à pied : la poste, la cathédrale, l'Opéra, la rue Dong Khoi et le marché Ben Thanh. Le soir, la rue piétonne Nguyen Hue.",
  "Flight from Da Nang to Saigon. The Cholon Chinese quarter, Thien Hau temple and Binh Tay market, pho for lunch, then the centre on foot: the post office, the cathedral, the Opera House, Dong Khoi street and Ben Thanh market. In the evening, Nguyen Hue walking street.",
  "Vuelo de Da Nang a Saigón. El barrio chino de Cholon, el templo Thien Hau y el mercado Binh Tay, un pho para almorzar y el centro a pie: la oficina de correos, la catedral, la Ópera, la calle Dong Khoi y el mercado Ben Thanh. Por la noche, la calle peatonal Nguyen Hue.",
];
const T_BENTRE: L3 = ["Le delta du Mékong à Ben Tre", "The Mekong Delta at Ben Tre", "El delta del Mekong en Ben Tre"];
const BENTRE: L3 = [
  "En bateau sur le fleuve à Ben Tre : ateliers de la noix de coco, arroyos et plantes médicinales, puis à vélo jusqu'au déjeuner de poisson « oreille d'éléphant ». Retour en sampan à rames par les petits canaux.",
  "By boat on the river at Ben Tre: coconut workshops, arroyos and medicinal plants, then by bike to a lunch of elephant-ear fish. Back by rowing sampan through the narrow canals.",
  "En barco por el río en Ben Tre: talleres del coco, canales y plantas medicinales, y en bicicleta hasta el almuerzo de pez «oreja de elefante». Regreso en sampán de remos por los canales estrechos.",
];
const T_SGN_HOME: L3 = ["Saïgon – vol retour", "Saigon – flight home", "Saigón – vuelo de regreso"];
const SGN_HOME: L3 = [
  "Temps libre, puis transfert à l'aéroport de Saïgon et envol pour la France.",
  "Free time, then transfer to Saigon airport and fly to France.",
  "Tiempo libre, traslado al aeropuerto de Saigón y vuelo a Francia.",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "vietnam",
    imagePrefix: "vietnam",
    season: { label: ["Fév à avril", "Feb to April", "Feb a abr"], months: "february,march,april" },
  });

  // Hanoi → Saigon, days 1–9, shared by the three classic circuits.
  const northToSouth = [
    chapter(["Hanoï, la baie d'Halong et Ninh Binh", "Hanoi, Ha Long Bay and Ninh Binh", "Hanói, la bahía de Ha Long y Ninh Binh"],
      ["La capitale, une nuit en jonque et la « baie d'Halong terrestre ».", "The capital, a night on a junk and 'Ha Long Bay on land'.", "La capital, una noche en junco y la «bahía de Ha Long terrestre»."],
      ["in2", "in1", "in4", "ma8"],
      [day(1, T_FLY, FLY, "in6"), day(2, T_HANOI, HANOI, "ma4"), day(3, T_HALONG, HALONG, "in2"), day(4, T_HOALU, HOALU, "in4"), day(5, T_NINHBINH, NINHBINH, "ma8")]),
    chapter(["Hué et Hoi An", "Hue and Hoi An", "Hue y Hoi An"],
      ["La cité impériale, le col des Nuages et la vieille ville aux lanternes.", "The imperial city, the Hai Van pass and the lantern-lit old town.", "La ciudad imperial, el paso de las Nubes y el casco antiguo de los farolillos."],
      ["ma7", "in8", "in9", "ca4"],
      [day(6, T_HUE, HUE, "ma7"), day(7, T_HAIVAN, HAIVAN, "in9"), day(8, T_HOIAN, HOIAN, "in8")]),
  ];

  const journeyTrips = [
    // ───────────── 1. Les Incontournables du Vietnam — 12J/9N ─────────────
    trip({
      slug: "vietnam-incontournables-halong-hoi-an-mekong-12j",
      name: ["Les incontournables du Vietnam : Halong, Hué, Hoi An et le Mékong", "Vietnam Highlights: Ha Long, Hue, Hoi An and the Mekong", "Lo esencial de Vietnam: Ha Long, Hue, Hoi An y el Mekong"],
      tagline: ["Du nord au sud en douze jours, en jonque, en barque, à vélo et en train de nuit", "North to south in twelve days, by junk, rowing boat, bike and night train", "De norte a sur en doce días, en junco, barca, bicicleta y tren nocturno"],
      description: [
        "Le Vietnam du nord au sud, en groupe de 24 personnes au plus : Hanoï, une nuit en jonque dans la baie d'Halong, Hoa Lu et Ninh Binh en barque et à vélo, le train de nuit vers Hué et sa cité impériale, le col des Nuages et Hoi An, puis Saïgon et une journée dans le delta du Mékong à Ben Tre. Avec 3 nuits de plage en fin de circuit : Mui Ne à partir de 1 825 € par personne, Ho Tram 1 961 €, Phu Quoc 2 109 €. Version privative à partir de 2 170 €, avec plage à partir de 2 591 €.",
        "Vietnam from north to south, in a group of 24 at most: Hanoi, a night on a junk in Ha Long Bay, Hoa Lu and Ninh Binh by rowing boat and bike, the night train to Hue and its imperial city, the Hai Van pass and Hoi An, then Saigon and a day in the Mekong Delta at Ben Tre. With 3 beach nights at the end: Mui Ne from €1,825 per person, Ho Tram €1,961, Phu Quoc €2,109. Private version from €2,170, with beach from €2,591.",
        "Vietnam de norte a sur, en grupo de 24 personas como máximo: Hanói, una noche en junco en la bahía de Ha Long, Hoa Lu y Ninh Binh en barca y en bicicleta, el tren nocturno a Hue y su ciudad imperial, el paso de las Nubes y Hoi An, y Saigón con una jornada en el delta del Mekong en Ben Tre. Con 3 noches de playa al final: Mui Ne desde 1.825 € por persona, Ho Tram 1.961 €, Phu Quoc 2.109 €. Versión privada desde 2.170 €, con playa desde 2.591 €.",
      ],
      includes: [
        "Vols depuis la France,Vol intérieur Da Nang – Saïgon,9 nuits en hôtels 3* et 4* dont 1 en jonque et 1 en train de nuit,Pension selon programme,Visites et excursions du programme,Guides francophones",
        "Flights from France,Da Nang – Saigon domestic flight,9 nights in 3* and 4* hotels including 1 on a junk and 1 on a night train,Meals as per programme,Visits and excursions in the programme,French-speaking guides",
        "Vuelos desde Francia,Vuelo interior Da Nang – Saigón,9 noches en hoteles de 3* y 4* con 1 en junco y 1 en tren nocturno,Comidas según programa,Visitas y excursiones del programa,Guías francófonos",
      ],
      price: 1759, nights: 9, departureFrom: "Francfort", image: "in2",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 24, order: -80000,
      chapters: [
        ...northToSouth,
        chapter(["Saïgon et le delta du Mékong", "Saigon and the Mekong Delta", "Saigón y el delta del Mekong"],
          ["La grande ville du sud et une journée sur l'eau.", "The great city of the south and a day on the water.", "La gran ciudad del sur y una jornada en el agua."],
          ["in7", "in5", "pq3", "pq7", "mn9"],
          [
            day(9, T_SAIGON, SAIGON, "in6"),
            day(10, T_BENTRE, [`${BENTRE[0]} Retour à Saïgon pour la nuit.`, `${BENTRE[1]} Back to Saigon for the night.`, `${BENTRE[2]} Regreso a Saigón para la noche.`], "in7"),
            day(11, T_SGN_HOME, SGN_HOME, "in5"), day(12, T_HOME, HOME, "in3"),
          ]),
      ],
    }),

    // ───────────── 2. Incontournables Vietnam et Cambodge — 15J/12N ─────────────
    trip({
      slug: "vietnam-cambodge-incontournables-angkor-15j",
      name: ["Vietnam et Cambodge : de la baie d'Halong aux temples d'Angkor", "Vietnam and Cambodia: from Ha Long Bay to the Temples of Angkor", "Vietnam y Camboya: de la bahía de Ha Long a los templos de Angkor"],
      tagline: ["Le Vietnam du nord au sud, puis trois jours à Siem Reap", "Vietnam from north to south, then three days in Siem Reap", "Vietnam de norte a sur y tres días en Siem Reap"],
      description: [
        "Les incontournables du Vietnam (Hanoï, une nuit en jonque dans la baie d'Halong, Ninh Binh, Hué, Hoi An, Saïgon et le delta du Mékong), prolongés par un vol pour Siem Reap : le village sur pilotis de Kampong Khleang et le lac Tonlé Sap, le lever du soleil sur Angkor Wat depuis le Phnom Bakheng, le Preah Khan, le Ta Prohm, Angkor Thom et le Bayon, un dîner-spectacle de danses Apsara, Banteay Srei et Angkor Wat. Groupe de 24 personnes au plus, visa cambodgien express inclus. Version privative à partir de 3 124 € par personne.",
        "The highlights of Vietnam (Hanoi, a night on a junk in Ha Long Bay, Ninh Binh, Hue, Hoi An, Saigon and the Mekong Delta), extended by a flight to Siem Reap: the stilt village of Kampong Khleang and Tonlé Sap lake, sunrise over Angkor Wat from Phnom Bakheng, Preah Khan, Ta Prohm, Angkor Thom and the Bayon, a dinner with an Apsara dance show, Banteay Srei and Angkor Wat. Group of 24 at most, express Cambodian visa included. Private version from €3,124 per person.",
        "Lo esencial de Vietnam (Hanói, una noche en junco en la bahía de Ha Long, Ninh Binh, Hue, Hoi An, Saigón y el delta del Mekong), prolongado con un vuelo a Siem Reap: el pueblo sobre pilotes de Kampong Khleang y el lago Tonlé Sap, el amanecer sobre Angkor Wat desde el Phnom Bakheng, el Preah Khan, el Ta Prohm, Angkor Thom y el Bayón, una cena con espectáculo de danzas Apsara, Banteay Srei y Angkor Wat. Grupo de 24 personas como máximo, visado camboyano exprés incluido. Versión privada desde 3.124 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Vols intérieurs Da Nang – Saïgon – Siem Reap – Saïgon,12 nuits en hôtels 3* et 4* dont 1 en jonque et 1 en train de nuit,Pension selon programme,Visa express pour le Cambodge,Visites et excursions du programme,Guides francophones",
        "Flights from France,Domestic flights Da Nang – Saigon – Siem Reap – Saigon,12 nights in 3* and 4* hotels including 1 on a junk and 1 on a night train,Meals as per programme,Express visa for Cambodia,Visits and excursions in the programme,French-speaking guides",
        "Vuelos desde Francia,Vuelos interiores Da Nang – Saigón – Siem Reap – Saigón,12 noches en hoteles de 3* y 4* con 1 en junco y 1 en tren nocturno,Comidas según programa,Visado exprés para Camboya,Visitas y excursiones del programa,Guías francófonos",
      ],
      price: 2631, nights: 12, departureFrom: "Francfort", image: "ca6",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 24, order: -79999,
      chapters: [
        ...northToSouth,
        chapter(["Saïgon et le delta du Mékong", "Saigon and the Mekong Delta", "Saigón y el delta del Mekong"],
          ["La grande ville du sud et une journée sur l'eau.", "The great city of the south and a day on the water.", "La gran ciudad del sur y una jornada en el agua."],
          ["in7", "in5"],
          [day(9, T_SAIGON, SAIGON, "in6"), day(10, T_BENTRE, [`${BENTRE[0]} Retour à Saïgon pour la nuit.`, `${BENTRE[1]} Back to Saigon for the night.`, `${BENTRE[2]} Regreso a Saigón para la noche.`], "in7")]),
        chapter(["Siem Reap et Angkor", "Siem Reap and Angkor", "Siem Reap y Angkor"],
          ["Le Tonlé Sap, le lever du soleil sur Angkor et les grands temples khmers.", "The Tonlé Sap, sunrise over Angkor and the great Khmer temples.", "El Tonlé Sap, el amanecer sobre Angkor y los grandes templos jemeres."],
          ["ca6", "ca7", "ca10", "ca8", "ca9"],
          [
            day(11, ["Saïgon – Siem Reap et le Tonlé Sap", "Saigon – Siem Reap and the Tonlé Sap", "Saigón – Siem Reap y el Tonlé Sap"], ["Vol pour Siem Reap, visa express à l'arrivée. Le village de Kampong Khleang et ses maisons perchées sur pilotis, puis environ 1 h 30 de bateau jusqu'au grand lac. Pique-nique chez l'habitant et balade dans le village.", "Flight to Siem Reap, express visa on arrival. The village of Kampong Khleang and its houses perched on stilts, then about 1 h 30 by boat to the great lake. A picnic with a family and a walk through the village.", "Vuelo a Siem Reap, visado exprés a la llegada. El pueblo de Kampong Khleang y sus casas sobre pilotes, y unas 1 h 30 en barco hasta el gran lago. Pícnic en casa local y paseo por el pueblo."], "ca9"),
            day(12, ["Lever du soleil sur Angkor", "Sunrise over Angkor", "Amanecer sobre Angkor"], ["Avant l'aube, montée au Phnom Bakheng pour voir le soleil se lever derrière Angkor Wat, puis petit-déjeuner dans une famille. En tuk-tuk au Preah Khan et au Ta Prohm, puis Angkor Thom, le Bayon et ses visages, le Baphuon et la terrasse des Éléphants. Dîner-spectacle de danses Apsara.", "Before dawn, up Phnom Bakheng to watch the sun rise behind Angkor Wat, then breakfast with a family. By tuk-tuk to Preah Khan and Ta Prohm, then Angkor Thom, the Bayon and its faces, the Baphuon and the Terrace of the Elephants. Dinner with an Apsara dance show.", "Antes del alba, subida al Phnom Bakheng para ver salir el sol tras Angkor Wat y desayuno con una familia. En tuk-tuk al Preah Khan y al Ta Prohm, y Angkor Thom, el Bayón y sus rostros, el Baphuon y la terraza de los Elefantes. Cena con espectáculo de danzas Apsara."], "ca7"),
            day(13, ["Banteay Srei et Angkor Wat", "Banteay Srei and Angkor Wat", "Banteay Srei y Angkor Wat"], ["La campagne jusqu'au temple de Banteay Samre et à Banteay Srei, la « citadelle des femmes » en grès rose, avec un arrêt chez les producteurs de sucre de palme. Déjeuner dans une maison en bois, puis l'après-midi à Angkor Wat.", "Across the countryside to the temple of Banteay Samre and to Banteay Srei, the pink-sandstone 'citadel of women', with a stop at the palm-sugar makers. Lunch in a wooden house, then the afternoon at Angkor Wat.", "El campo hasta el templo de Banteay Samre y Banteay Srei, la «ciudadela de las mujeres» de arenisca rosa, con parada en los productores de azúcar de palma. Almuerzo en una casa de madera y la tarde en Angkor Wat."], "ca6"),
            day(14, ["Siem Reap – vol retour", "Siem Reap – flight home", "Siem Reap – vuelo de regreso"], ["Transfert à l'aéroport de Siem Reap, vol pour Saïgon puis envol pour la France.", "Transfer to Siem Reap airport, flight to Saigon then fly to France.", "Traslado al aeropuerto de Siem Reap, vuelo a Saigón y vuelo a Francia."], "ca10"),
            day(15, T_HOME, HOME, "ca8"),
          ]),
      ],
    }),

    // ───────────── 3. Magie du Vietnam — 15J/12N ─────────────
    trip({
      slug: "vietnam-magie-halong-hue-delta-mekong-15j",
      name: ["Magie du Vietnam : Halong, Hué, Hoi An et le delta du Mékong en profondeur", "The Magic of Vietnam: Ha Long, Hue, Hoi An and the Mekong Delta in Depth", "Magia de Vietnam: Ha Long, Hue, Hoi An y el delta del Mekong a fondo"],
      tagline: ["Les incontournables, puis quatre jours dans le delta : nuit chez l'habitant, marché flottant et mangroves", "The highlights, then four days in the delta: a homestay, a floating market and mangroves", "Lo esencial y cuatro días en el delta: noche en casa local, mercado flotante y manglares"],
      description: [
        "Le grand classique du nord au sud (Hanoï, une nuit en jonque dans la baie d'Halong, Ninh Binh, le train de nuit, Hué, Hoi An et Saïgon), puis quatre jours dans le delta du Mékong : une nuit chez l'habitant à Ben Tre, Can Tho et la maison du film L'Amant, le marché flottant de Cai Rang, les mangroves de Tra Su en barque, Chau Doc et Sa Dec, ville de Marguerite Duras. Groupe de 24 personnes au plus. Avec 3 nuits de plage à Mui Ne (18 jours) à partir de 2 526 € par personne ; version privative à partir de 2 639 € ; avec une extension au Cambodge (18 jours) à partir de 3 234 €.",
        "The great classic from north to south (Hanoi, a night on a junk in Ha Long Bay, Ninh Binh, the night train, Hue, Hoi An and Saigon), then four days in the Mekong Delta: a homestay night in Ben Tre, Can Tho and the house from the film The Lover, Cai Rang floating market, the Tra Su mangroves by rowing boat, Chau Doc and Sa Dec, Marguerite Duras's town. Group of 24 at most. With 3 beach nights in Mui Ne (18 days) from €2,526 per person; private version from €2,639; with a Cambodia extension (18 days) from €3,234.",
        "El gran clásico de norte a sur (Hanói, una noche en junco en la bahía de Ha Long, Ninh Binh, el tren nocturno, Hue, Hoi An y Saigón) y cuatro días en el delta del Mekong: una noche en casa local en Ben Tre, Can Tho y la casa de la película El amante, el mercado flotante de Cai Rang, los manglares de Tra Su en barca, Chau Doc y Sa Dec, la ciudad de Marguerite Duras. Grupo de 24 personas como máximo. Con 3 noches de playa en Mui Ne (18 días) desde 2.526 € por persona; versión privada desde 2.639 €; con extensión a Camboya (18 días) desde 3.234 €.",
      ],
      includes: [
        "Vols depuis la France,Vol intérieur Da Nang – Saïgon,12 nuits en hôtels 3* et 4* dont 1 en jonque, 1 en train de nuit et 1 chez l'habitant,Pension selon programme,Visites et excursions du programme,Guides francophones",
        "Flights from France,Da Nang – Saigon domestic flight,12 nights in 3* and 4* hotels including 1 on a junk, 1 on a night train and 1 homestay,Meals as per programme,Visits and excursions in the programme,French-speaking guides",
        "Vuelos desde Francia,Vuelo interior Da Nang – Saigón,12 noches en hoteles de 3* y 4* con 1 en junco, 1 en tren nocturno y 1 en casa local,Comidas según programa,Visitas y excursiones del programa,Guías francófonos",
      ],
      price: 2256, nights: 12, departureFrom: "Francfort", image: "ma6",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 24, order: -79998,
      chapters: [
        ...northToSouth,
        chapter(["Saïgon et le delta du Mékong", "Saigon and the Mekong Delta", "Saigón y el delta del Mekong"],
          ["Quatre jours au fil de l'eau, de Ben Tre à Chau Doc.", "Four days on the water, from Ben Tre to Chau Doc.", "Cuatro días en el agua, de Ben Tre a Chau Doc."],
          ["ma6", "in7", "ma10", "in5", "mn8"],
          [
            day(9, T_SAIGON, SAIGON, "in6"),
            day(10, ["Ben Tre – nuit chez l'habitant", "Ben Tre – a homestay night", "Ben Tre – noche en casa local"], [`${BENTRE[0]} Dégustation de fruits, balade dans le village et nuit chez l'habitant (confort simple, sans climatisation).`, `${BENTRE[1]} A fruit tasting, a walk through the village and a night with a family (simple comfort, no air-conditioning).`, `${BENTRE[2]} Degustación de frutas, paseo por el pueblo y noche en casa local (confort sencillo, sin aire acondicionado).`], "in7"),
            day(11, ["Ben Tre – Can Tho", "Ben Tre – Can Tho", "Ben Tre – Can Tho"], ["Matinée tranquille avec vos hôtes, puis route vers Can Tho : le marché, les quais de Ninh Kieu et la maison ancienne de Binh Thuy, décor du film L'Amant.", "A quiet morning with your hosts, then drive to Can Tho: the market, the Ninh Kieu quays and the old house of Binh Thuy, a setting for the film The Lover.", "Mañana tranquila con sus anfitriones y carretera hacia Can Tho: el mercado, los muelles de Ninh Kieu y la casa antigua de Binh Thuy, escenario de la película El amante."], "ma10"),
            day(12, ["Cai Rang et Tra Su – Chau Doc", "Cai Rang and Tra Su – Chau Doc", "Cai Rang y Tra Su – Chau Doc"], ["À l'aube, en bateau au marché flottant de Cai Rang. Route vers Chau Doc avec une balade en barque dans la forêt de cajeputiers de Tra Su, plus de 850 hectares de zone humide.", "At dawn, by boat to Cai Rang floating market. Drive to Chau Doc with a rowing-boat ride in the Tra Su cajeput forest, more than 850 hectares of wetland.", "Al amanecer, en barco al mercado flotante de Cai Rang. Carretera hacia Chau Doc con un paseo en barca por el bosque de cayeputs de Tra Su, más de 850 hectáreas de humedal."], "ma6"),
            day(13, ["Sa Dec – Saïgon", "Sa Dec – Saigon", "Sa Dec – Saigón"], ["Retour vers Saïgon par Sa Dec : la maison de Huynh Thuy Le, l'amant de Marguerite Duras, et l'école où enseignait sa mère. Longue journée de route.", "Back to Saigon via Sa Dec: the house of Huynh Thuy Le, Marguerite Duras's lover, and the school where her mother taught. A long day on the road.", "Regreso a Saigón por Sa Dec: la casa de Huynh Thuy Le, el amante de Marguerite Duras, y la escuela donde enseñaba su madre. Larga jornada de carretera."], "in5"),
            day(14, T_SGN_HOME, SGN_HOME, "ma10"), day(15, T_HOME, HOME, "in3"),
          ]),
      ],
    }),

    // ───────────── 4. Vietnam Intimiste — 17J/14N ─────────────
    trip({
      slug: "vietnam-intimiste-pu-luong-lan-ha-17j",
      name: ["Vietnam intimiste : Moc Chau, Pu Luong, baie de Lan Ha et Mékong", "Vietnam Off the Beaten Track: Moc Chau, Pu Luong, Lan Ha Bay and the Mekong", "Vietnam íntimo: Moc Chau, Pu Luong, bahía de Lan Ha y el Mekong"],
      tagline: ["Seize voyageurs au plus, des nuits chez l'habitant et les régions que les grands circuits évitent", "Sixteen travellers at most, homestays and the regions the big tours skip", "Dieciséis viajeros como máximo, noches en casa local y las regiones que evitan los grandes circuitos"],
      description: [
        "Un Vietnam plus proche des habitants, en groupe de 16 personnes au plus : Hanoï au petit matin et un atelier de marionnettes sur l'eau, les théiers de Moc Chau et une nuit chez les Hmong, deux jours de randonnée dans la réserve de Pu Luong, Tam Coc et Thung Nham en barque, une nuit en jonque dans la baie de Lan Ha (moins fréquentée qu'Halong), Hué et la calligraphie chez un ancien mandarin, Hoi An, puis le delta du Mékong avec deux nuits chez l'habitant à Ben Tre et Soc Trang. Avec 3 nuits de plage (20 jours) à partir de 2 969 € par personne (Mui Ne) ou 3 149 € (Phu Quoc) ; avec une extension au Cambodge à partir de 3 661 € ; version privative à partir de 3 625 €.",
        "A Vietnam closer to local people, in a group of 16 at most: early-morning Hanoi and a water-puppet workshop, the tea gardens of Moc Chau and a night with the Hmong, two days' walking in the Pu Luong reserve, Tam Coc and Thung Nham by rowing boat, a night on a junk in Lan Ha Bay (quieter than Ha Long), Hue and calligraphy at a former mandarin's house, Hoi An, then the Mekong Delta with two homestay nights in Ben Tre and Soc Trang. With 3 beach nights (20 days) from €2,969 per person (Mui Ne) or €3,149 (Phu Quoc); with a Cambodia extension from €3,661; private version from €3,625.",
        "Un Vietnam más cercano a la gente, en grupo de 16 personas como máximo: Hanói al amanecer y un taller de marionetas sobre el agua, los cultivos de té de Moc Chau y una noche con los hmong, dos días de caminata en la reserva de Pu Luong, Tam Coc y Thung Nham en barca, una noche en junco en la bahía de Lan Ha (menos concurrida que Ha Long), Hue y la caligrafía en casa de un antiguo mandarín, Hoi An, y el delta del Mekong con dos noches en casa local en Ben Tre y Soc Trang. Con 3 noches de playa (20 días) desde 2.969 € por persona (Mui Ne) o 3.149 € (Phu Quoc); con extensión a Camboya desde 3.661 €; versión privada desde 3.625 €.",
      ],
      includes: [
        "Vols depuis la France,Vol intérieur Da Nang – Saïgon,14 nuits entre hôtels 3*, écolodges, jonque, train de nuit et chez l'habitant,Pension selon programme,Randonnées et visites du programme,Guides francophones",
        "Flights from France,Da Nang – Saigon domestic flight,14 nights in 3* hotels, ecolodges, a junk, a night train and homestays,Meals as per programme,Hikes and visits in the programme,French-speaking guides",
        "Vuelos desde Francia,Vuelo interior Da Nang – Saigón,14 noches entre hoteles de 3*, ecolodges, junco, tren nocturno y casas locales,Comidas según programa,Caminatas y visitas del programa,Guías francófonos",
      ],
      price: 2669, nights: 14, departureFrom: "Paris", image: "it1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 16, order: -79997,
      chapters: [
        chapter(["Hanoï", "Hanoi", "Hanói"],
          ["La capitale, de la rue au théâtre de marionnettes.", "The capital, from the street to the puppet theatre.", "La capital, de la calle al teatro de marionetas."],
          ["ma4", "in6"],
          [
            day(1, T_FLY, FLY, "in6"),
            day(2, ["Arrivée à Hanoï", "Arrival in Hanoi", "Llegada a Hanói"], ["Accueil par votre guide francophone et tour de la ville : la place Ba Dinh, le mausolée de Hô Chi Minh, le palais présidentiel, l'Opéra et le Temple de la Littérature. Balade dans le quartier des 36 corporations avant le dîner.", "Welcome by your French-speaking guide and a city tour: Ba Dinh square, Ho Chi Minh's mausoleum, the presidential palace, the Opera House and the Temple of Literature. A walk in the 36 guilds quarter before dinner.", "Recibimiento por su guía francófono y visita de la ciudad: la plaza Ba Dinh, el mausoleo de Ho Chi Minh, el palacio presidencial, la Ópera y el Templo de la Literatura. Paseo por el barrio de las 36 corporaciones antes de la cena."], "ma4"),
            day(3, ["Hanoï au petit matin et les marionnettes sur l'eau", "Hanoi at dawn and the water puppets", "Hanói al amanecer y las marionetas sobre el agua"], ["À pied jusqu'au lac de l'Épée restituée, pho dans une échoppe de rue et café à l'œuf. De l'autre côté du fleuve Rouge, rencontre avec un artisan de marionnettes sur l'eau : spectacle privé et fabrication de votre marionnette. L'après-midi, la pagode Tran Quoc et le lac Truc Bach.", "On foot to the Lake of the Restored Sword, pho at a street stall and egg coffee. Across the Red River, a meeting with a water-puppet maker: a private show and making your own puppet. In the afternoon, Tran Quoc pagoda and Truc Bach lake.", "A pie hasta el lago de la Espada Restituida, pho en un puesto callejero y café con huevo. Al otro lado del río Rojo, encuentro con un artesano de marionetas sobre el agua: espectáculo privado y fabricación de su marioneta. Por la tarde, la pagoda Tran Quoc y el lago Truc Bach."], "in6"),
          ]),
        chapter(["Moc Chau et Pu Luong", "Moc Chau and Pu Luong", "Moc Chau y Pu Luong"],
          ["Les théiers, les villages hmong et les rizières en terrasses.", "Tea gardens, Hmong villages and terraced rice fields.", "Cultivos de té, pueblos hmong y arrozales en terrazas."],
          ["it5", "it3", "it1", "it7"],
          [
            day(4, ["Hanoï – Moc Chau", "Hanoi – Moc Chau", "Hanói – Moc Chau"], ["Route vers Moc Chau et ses plus de 3 000 hectares de théiers. L'après-midi, le village de Hua Tat, une maison sur pilotis et une balade à la rencontre des Hmong. Nuit chez l'habitant (chambre privée en écolodge en option).", "Drive to Moc Chau and its more than 3,000 hectares of tea. In the afternoon, Hua Tat village, a house on stilts and a walk to meet the Hmong. Homestay night (a private room in an ecolodge as an option).", "Carretera hacia Moc Chau y sus más de 3.000 hectáreas de té. Por la tarde, el pueblo de Hua Tat, una casa sobre pilotes y un paseo al encuentro de los hmong. Noche en casa local (habitación privada en ecolodge opcional)."], "it5"),
            day(5, ["Moc Chau – Pu Luong", "Moc Chau – Pu Luong", "Moc Chau – Pu Luong"], ["Route vers la réserve naturelle de Pu Luong, ses forêts, ses reliefs calcaires et ses terrasses. Randonnée facile d'environ 3 heures par les villages de Ban Uoi, Ban Don et Kho Muong. Nuit dans une maison sur pilotis.", "Drive to the Pu Luong nature reserve, its forests, limestone hills and terraces. An easy walk of about 3 hours through the villages of Ban Uoi, Ban Don and Kho Muong. Night in a house on stilts.", "Carretera hacia la reserva natural de Pu Luong, sus bosques, relieves calizos y terrazas. Caminata fácil de unas 3 horas por los pueblos de Ban Uoi, Ban Don y Kho Muong. Noche en una casa sobre pilotes."], "it1"),
            day(6, ["Pu Luong", "Pu Luong", "Pu Luong"], ["Marche jusqu'à la source Suoi Cham et 45 minutes en sampan, puis un pont suspendu et un déjeuner chez l'habitant. Après-midi libre : autres villages, marche ou détente face aux rizières.", "A walk to the Suoi Cham spring and 45 minutes by sampan, then a suspension bridge and lunch with a family. A free afternoon: other villages, walking or relaxing above the rice terraces.", "Caminata hasta el manantial de Suoi Cham y 45 minutos en sampán, un puente colgante y almuerzo en casa local. Tarde libre: otros pueblos, caminata o descanso frente a los arrozales."], "it7"),
          ]),
        chapter(["Ninh Binh et la baie de Lan Ha", "Ninh Binh and Lan Ha Bay", "Ninh Binh y la bahía de Lan Ha"],
          ["La « baie d'Halong terrestre », puis une nuit en jonque.", "'Ha Long Bay on land', then a night on a junk.", "La «bahía de Ha Long terrestre» y una noche en junco."],
          ["it2", "ma3", "in1"],
          [
            day(7, ["Pu Luong – Tam Coc", "Pu Luong – Tam Coc", "Pu Luong – Tam Coc"], ["Route vers Ninh Binh. La pagode Bich Dong, bâtie dans la roche, puis environ 2 h 30 en barque dans la réserve de Thung Nham, entre falaises et rizières.", "Drive to Ninh Binh. Bich Dong pagoda, built into the rock, then about 2 h 30 by rowing boat in the Thung Nham reserve, between cliffs and rice fields.", "Carretera hacia Ninh Binh. La pagoda Bich Dong, construida en la roca, y unas 2 h 30 en barca por la reserva de Thung Nham, entre acantilados y arrozales."], "it2"),
            day(8, ["La baie de Lan Ha en jonque", "Lan Ha Bay by junk", "La bahía de Lan Ha en junco"], ["Embarquement sur une jonque partagée pour deux jours dans la baie de Lan Ha, voisine d'Halong et moins fréquentée. Déjeuner, dîner et nuit à bord (guide anglophone sur la jonque).", "Board a shared junk for two days in Lan Ha Bay, next to Ha Long and less crowded. Lunch, dinner and night on board (English-speaking guide on the junk).", "Embarque en un junco compartido para dos días en la bahía de Lan Ha, vecina de Ha Long y menos concurrida. Almuerzo, cena y noche a bordo (guía de habla inglesa en el junco)."], "ma3"),
            day(9, ["Lan Ha – Hanoï – train de nuit", "Lan Ha – Hanoi – night train", "Lan Ha – Hanói – tren nocturno"], ["Tai-chi au lever du jour et brunch à bord, puis retour vers Hanoï avec un arrêt possible à la pagode But Thap. Dîner de spécialités et bière Bia Hoi, puis train de nuit vers Hué (avion en option).", "Tai chi at sunrise and brunch on board, then back to Hanoi with a possible stop at But Thap pagoda. A dinner of specialities with Bia Hoi beer, then the night train to Hue (flight as an option).", "Taichí al amanecer y brunch a bordo, y regreso a Hanói con posible parada en la pagoda But Thap. Cena de especialidades con cerveza Bia Hoi y tren nocturno hacia Hue (avión opcional)."], "in1"),
          ]),
        chapter(["Hué et Hoi An", "Hue and Hoi An", "Hue y Hoi An"],
          ["La cité impériale, un village de mandarins et la vieille ville.", "The imperial city, a mandarins' village and the old town.", "La ciudad imperial, un pueblo de mandarines y el casco antiguo."],
          ["ma7", "in8", "in9"],
          [
            day(10, T_HUE, ["Une soupe bun bo Hue en arrivant, la citadelle, la pagode Thien Mu et un bateau sur la rivière des Parfums. Vélo dans la campagne et cours de cuisine chez l'habitant, puis le tombeau de Minh Mang. Le soir, la cuisine de rue en cyclo-pousse.", "A bowl of bun bo Hue on arrival, the citadel, Thien Mu pagoda and a boat on the Perfume River. Cycling in the countryside and a cookery class with a family, then the tomb of Minh Mang. In the evening, street food by cyclo.", "Una sopa bun bo Hue a la llegada, la ciudadela, la pagoda Thien Mu y un barco por el río de los Perfumes. Bicicleta por el campo y clase de cocina en casa local, y la tumba de Minh Mang. Por la noche, comida callejera en ciclo."], "ma7"),
            day(11, ["Kim Long, le col des Nuages – Hoi An", "Kim Long, the Hai Van pass – Hoi An", "Kim Long, el paso de las Nubes – Hoi An"], ["Le village de mandarins de Kim Long et le jardin An Hien, avec une initiation à la calligraphie. Puis le col des Nuages, Lang Co et le musée Cham avant Hoi An.", "The mandarins' village of Kim Long and An Hien garden, with an introduction to calligraphy. Then the Hai Van pass, Lang Co and the Cham museum before Hoi An.", "El pueblo de mandarines de Kim Long y el jardín An Hien, con una iniciación a la caligrafía. Después, el paso de las Nubes, Lang Co y el museo cham antes de Hoi An."], "in9"),
            day(12, T_HOIAN, HOIAN, "in8"),
          ]),
        chapter(["Le delta du Mékong et Saïgon", "The Mekong Delta and Saigon", "El delta del Mekong y Saigón"],
          ["Deux nuits chez l'habitant, puis la grande ville du sud.", "Two homestay nights, then the great city of the south.", "Dos noches en casa local y la gran ciudad del sur."],
          ["it4", "it6", "in7", "pq9"],
          [
            day(13, ["Vol pour Saïgon – Ben Tre", "Flight to Saigon – Ben Tre", "Vuelo a Saigón – Ben Tre"], [`Vol de Da Nang à Saïgon, puis route vers Ben Tre. ${BENTRE[0]} Nuit sur place.`, `Flight from Da Nang to Saigon, then drive to Ben Tre. ${BENTRE[1]} Night there.`, `Vuelo de Da Nang a Saigón y carretera hacia Ben Tre. ${BENTRE[2]} Noche allí.`], "in7"),
            day(14, ["Ben Tre – Soc Trang", "Ben Tre – Soc Trang", "Ben Tre – Soc Trang"], ["Installation dans une famille d'accueil à Soc Trang. L'après-midi en moto-taxi : ateliers de gâteaux de riz, de nattes en feuilles de cocotier et de galettes de manioc. Vous pouvez aider à préparer le dîner.", "Check in with a host family in Soc Trang. The afternoon by motorbike taxi: workshops making rice cakes, coconut-leaf mats and cassava crackers. You can help prepare dinner.", "Instalación con una familia de acogida en Soc Trang. Por la tarde en mototaxi: talleres de pasteles de arroz, esteras de hoja de cocotero y galletas de yuca. Puede ayudar a preparar la cena."], "it6"),
            day(15, ["Le marché de Nga Nam – Saïgon", "Nga Nam market – Saigon", "El mercado de Nga Nam – Saigón"], ["Bateau sur les canaux jusqu'au marché fluvial de Nga Nam, puis retour à Saïgon. Le centre à pied l'après-midi et dîner de grillades et de fondue dans un restaurant populaire.", "A boat along the canals to Nga Nam river market, then back to Saigon. The centre on foot in the afternoon and a dinner of grills and hot pot in a popular local restaurant.", "Barco por los canales hasta el mercado fluvial de Nga Nam y regreso a Saigón. El centro a pie por la tarde y cena de parrilla y hot pot en un restaurante popular."], "it4"),
            day(16, T_SGN_HOME, SGN_HOME, "in5"), day(17, T_HOME, HOME, "it3"),
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
