// Tanzania circuits — 7 journey-format trips for the existing "tanzanie" destination: four
// northern-parks safaris, a Saadani + Zanzibar combination, a safari + Zanzibar combination and a
// Zanzibar-only stay. One trip per circuit; year and Zanzibar-extension variants are described
// inside the trip. Prices are per-person "from" prices. Supplier product ids are in SUPPLIER_REF.
// Run with:
//   npx tsx scripts/seed-trips-tanzanie-circuits.ts
// Requires scripts/upload-images-tanzanie-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "tanzanie-zanzibar-epices-ocean-10j": ["398278"],
  "tanzanie-saadani-safari-zanzibar-11j": ["397418"],
  "tanzanie-essentiel-safari-nord-8j": ["407998", "396618", "400638", "408058"],
  "tanzanie-escapade-terre-sauvage-10j": ["294058"],
  "tanzanie-couleurs-quatre-parcs-10j": ["406318", "258358", "408118", "400238", "408279", "367618", "367619", "367638"],
  "tanzanie-autrement-lac-natron-11j": ["395838", "259938", "395858", "400519", "400538", "367598", "367718", "367719"],
  "tanzanie-evasion-safari-zanzibar-11j": ["84238"],
};

// ── Shared texts ──
const T_FLY: L3 = ["Envol pour la Tanzanie", "Flight to Tanzania", "Vuelo a Tanzania"];
const FLY: L3 = [
  "Embarquement sur un vol régulier à destination de la Tanzanie. Dîner et nuit à bord.",
  "Board a scheduled flight to Tanzania. Dinner and night on board.",
  "Embarque en un vuelo regular con destino a Tanzania. Cena y noche a bordo.",
];
const T_ARUSHA: L3 = ["Arrivée à Arusha", "Arrival in Arusha", "Llegada a Arusha"];
const ARUSHA: L3 = [
  "Arrivée à l'aéroport international du Kilimandjaro et transfert vers votre lodge, à Arusha. Installation et nuit. Si votre vol arrive dans la nuit précédente, une nuit supplémentaire à Arusha peut être ajoutée en option.",
  "Arrive at Kilimanjaro international airport and transfer to your lodge in Arusha. Check in and overnight. If your flight lands the night before, an extra night in Arusha can be added as an option.",
  "Llegada al aeropuerto internacional del Kilimanjaro y traslado a su lodge, en Arusha. Instalación y noche. Si su vuelo llega la noche anterior, puede añadirse una noche adicional en Arusha como opción.",
];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "tanzanie",
    imagePrefix: "tanzanie",
    season: { label: ["Juin à oct", "June to Oct", "Jun a oct"], months: "june,july,august,september,october" },
  });

  const journeyTrips = [
    // ───────────── 1. Zanzibar, épices & océan — 10J/7N ─────────────
    trip({
      slug: "tanzanie-zanzibar-epices-ocean-10j",
      name: [
        "Zanzibar : Stone Town, épices et océan Indien",
        "Zanzibar: Stone Town, Spices and the Indian Ocean",
        "Zanzíbar: Stone Town, especias y océano Índico",
      ],
      tagline: [
        "Deux nuits dans un ancien palais de Stone Town, puis cinq nuits en bord de mer",
        "Two nights in a former palace in Stone Town, then five nights by the sea",
        "Dos noches en un antiguo palacio de Stone Town y cinco noches junto al mar",
      ],
      description: [
        "Un séjour à Zanzibar qui ne se limite pas à la plage. Il commence par deux nuits à Stone Town, dans un ancien palais devenu hôtel 4* (normes locales), avec une visite guidée de la vieille ville classée à l'Unesco. Suivent cinq nuits en bord de mer, entre Paje et Jambiani, ponctuées de trois sorties incluses : la forêt de Jozani et ses colobes roux avec une ferme aux épices, l'atoll de Mnemba en palmes, masque et tuba, et une ferme d'algues tenue par des femmes de l'île. L'hôtel balnéaire, en 3*, peut être remplacé par un 4* ou un 5* sur demande.",
        "A stay in Zanzibar that is about more than the beach. It begins with two nights in Stone Town, in a former palace turned 4* hotel (local rating), with a guided tour of the UNESCO-listed old town. Then come five nights by the sea, between Paje and Jambiani, with three outings included: Jozani forest and its red colobus monkeys with a spice farm, Mnemba atoll with mask, snorkel and fins, and a seaweed farm run by women of the island. The 3* beach hotel can be replaced by a 4* or 5* on request.",
        "Una estancia en Zanzíbar que no se limita a la playa. Empieza con dos noches en Stone Town, en un antiguo palacio convertido en hotel de 4* (categoría local), con visita guiada a la ciudad vieja, inscrita en la Unesco. Siguen cinco noches junto al mar, entre Paje y Jambiani, con tres salidas incluidas: el bosque de Jozani y sus colobos rojos con una granja de especias, el atolón de Mnemba con gafas, tubo y aletas, y una granja de algas gestionada por mujeres de la isla. El hotel de playa, de 3*, puede sustituirse por uno de 4* o 5* bajo petición.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,2 nuits à Stone Town en hôtel 4*,5 nuits en bord de mer en hôtel 3*,Petits déjeuners,Visites et excursions du programme,Guides locaux francophones ou anglophones",
        "Flights from France,Airport transfers,2 nights in Stone Town in a 4* hotel,5 nights by the sea in a 3* hotel,Breakfasts,Visits and excursions in the programme,French- or English-speaking local guides",
        "Vuelos desde Francia,Traslados al aeropuerto,2 noches en Stone Town en hotel de 4*,5 noches junto al mar en hotel de 3*,Desayunos,Visitas y excursiones del programa,Guías locales francófonos o anglófonos",
      ],
      price: 1856, nights: 7, departureFrom: "Barcelone", image: "zz1",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,honeymoon,family", maxGuests: 12, order: -96000,
      chapters: [
        chapter(
          ["Stone Town", "Stone Town", "Stone Town"],
          [
            "La vieille ville de Zanzibar, classée au patrimoine mondial : ruelles étroites, portes sculptées, marché et souvenirs des sultans.",
            "Zanzibar's old town, a World Heritage site: narrow lanes, carved doors, the market and memories of the sultans.",
            "La ciudad vieja de Zanzíbar, Patrimonio Mundial: callejuelas estrechas, puertas talladas, el mercado y recuerdos de los sultanes.",
          ],
          ["zz2", "zz3", "sa3", "sa2"],
          [
            day(1, ["Envol pour Zanzibar", "Flight to Zanzibar", "Vuelo a Zanzíbar"],
              ["Embarquement sur un vol régulier à destination de Zanzibar. Dîner et nuit à bord.", "Board a scheduled flight to Zanzibar. Dinner and night on board.", "Embarque en un vuelo regular con destino a Zanzíbar. Cena y noche a bordo."], "zz4"),
            day(2,
              ["Arrivée à Stone Town", "Arrival in Stone Town", "Llegada a Stone Town"],
              [
                "Arrivée à l'aéroport de Zanzibar et transfert vers votre hôtel de Stone Town, un ancien palais rénové, meublé d'époque, aux couleurs d'influences arabes et indiennes. L'hôtel compte de nombreuses marches. Dîner libre.",
                "Arrive at Zanzibar airport and transfer to your hotel in Stone Town, a renovated former palace with period furniture and colours of Arab and Indian influence. The hotel has many steps. Dinner on your own.",
                "Llegada al aeropuerto de Zanzíbar y traslado a su hotel de Stone Town, un antiguo palacio renovado, con mobiliario de época y colores de influencia árabe e india. El hotel tiene muchos escalones. Cena libre.",
              ], "sa2"),
            day(3,
              ["Visite guidée de Stone Town", "A guided tour of Stone Town", "Visita guiada de Stone Town"],
              [
                "Visite de la vieille ville avec un guide francophone : l'ancien marché aux esclaves, le musée consacré aux sultans et à leurs palais, le vieux fort, le dispensaire, l'église anglicane, puis le marché et ses étals de fruits, d'épices et de poissons. Déjeuner et après-midi libres.",
                "Tour the old town with a French-speaking guide: the former slave market, the museum devoted to the sultans and their palaces, the old fort, the dispensary, the Anglican church, then the market and its stalls of fruit, spices and fish. Lunch and afternoon on your own.",
                "Visita a la ciudad vieja con un guía francófono: el antiguo mercado de esclavos, el museo dedicado a los sultanes y sus palacios, el viejo fuerte, el dispensario, la iglesia anglicana y el mercado, con sus puestos de fruta, especias y pescado. Almuerzo y tarde libres.",
              ], "zz3"),
          ]
        ),
        chapter(
          ["Jambiani et la côte est", "Jambiani and the east coast", "Jambiani y la costa este"],
          [
            "Cinq nuits face à l'océan Indien, entre Paje et Jambiani : sable blanc, palmiers, et des journées libres qui alternent avec les excursions.",
            "Five nights facing the Indian Ocean, between Paje and Jambiani: white sand, palm trees, and free days alternating with the excursions.",
            "Cinco noches frente al océano Índico, entre Paje y Jambiani: arena blanca, palmeras y jornadas libres que se alternan con las excursiones.",
          ],
          ["zz8", "zz11", "zz6", "zz5", "zz7"],
          [
            day(4,
              ["De Stone Town à Jambiani", "From Stone Town to Jambiani", "De Stone Town a Jambiani"],
              [
                "Dernière matinée à Stone Town et déjeuner libre. En début d'après-midi, transfert vers votre hôtel en front de mer : bungalows climatisés, jardins exotiques et plage de sable blanc.",
                "A last morning in Stone Town and lunch on your own. In the early afternoon, transfer to your seafront hotel: air-conditioned bungalows, exotic gardens and a white-sand beach.",
                "Última mañana en Stone Town y almuerzo libre. A primera hora de la tarde, traslado a su hotel frente al mar: bungalows climatizados, jardines exóticos y playa de arena blanca.",
              ], "zz8"),
            day(5,
              ["Journée libre à Jambiani", "Free day in Jambiani", "Jornada libre en Jambiani"],
              [
                "Journée libre entre piscine et plage. En option, à réserver et régler sur place (environ 130 $ par personne) : la sortie en mer « Safari Bleu », une journée en bateau traditionnel dans la baie de Menai, avec arrêts snorkeling et barbecue sur une île.",
                "A free day between the pool and the beach. Optional, booked and paid locally (about $130 per person): the 'Safari Blue' boat trip, a day on a traditional boat in Menai Bay, with snorkelling stops and a barbecue on an island.",
                "Jornada libre entre piscina y playa. Opcional, a reservar y pagar in situ (unos 130 $ por persona): la salida al mar «Safari Blue», un día en barco tradicional por la bahía de Menai, con paradas de snorkel y barbacoa en una isla.",
              ], "zz11"),
            day(6,
              ["La forêt de Jozani et la ferme aux épices", "Jozani forest and the spice farm", "El bosque de Jozani y la granja de especias"],
              [
                "Départ pour la forêt de Jozani : forêt, prairies et mangrove, parcourues à pied avec un guide francophone à la recherche du colobe roux, un singe qui ne vit qu'à Zanzibar. Puis visite d'une ferme aux épices voisine, où un déjeuner local est servi avant la promenade parmi les plants.",
                "Leave for Jozani forest: woodland, grassland and mangrove, walked with a French-speaking guide in search of the red colobus, a monkey found only in Zanzibar. Then visit a nearby spice farm, where a local lunch is served before a walk among the plants.",
                "Salida hacia el bosque de Jozani: bosque, praderas y manglar, recorridos a pie con un guía francófono en busca del colobo rojo, un mono que solo vive en Zanzíbar. Después, visita a una granja de especias cercana, donde se sirve un almuerzo local antes del paseo entre las plantas.",
              ], "zz6"),
          ]
        ),
        chapter(
          ["L'atoll de Mnemba et la ferme d'algues", "Mnemba atoll and the seaweed farm", "El atolón de Mnemba y la granja de algas"],
          [
            "Deux autres visages de l'île : les fonds de l'atoll de Mnemba, et la culture des algues, deuxième activité économique de Zanzibar.",
            "Two more sides of the island: the reefs of Mnemba atoll, and seaweed farming, Zanzibar's second-largest industry.",
            "Otras dos caras de la isla: los fondos del atolón de Mnemba y el cultivo de algas, segunda actividad económica de Zanzíbar.",
          ],
          ["zz1", "zz9", "zz10", "zz4"],
          [
            day(7,
              ["L'atoll de Mnemba", "Mnemba atoll", "El atolón de Mnemba"],
              [
                "Trente minutes de route jusqu'au point d'embarquement, puis cap sur l'atoll de Mnemba pour découvrir ses fonds en palmes, masque et tuba, équipement fourni. Collation sur un banc de sable avant le retour. Après-midi libre à l'hôtel.",
                "Thirty minutes' drive to the boarding point, then out to Mnemba atoll to explore its reefs with fins, mask and snorkel, equipment provided. A snack on a sandbank before returning. Free afternoon at the hotel.",
                "Treinta minutos de carretera hasta el punto de embarque y rumbo al atolón de Mnemba para descubrir sus fondos con aletas, gafas y tubo, equipo incluido. Tentempié en un banco de arena antes del regreso. Tarde libre en el hotel.",
              ], "zz9"),
            day(8,
              ["La ferme d'algues de Paje", "The Paje seaweed farm", "La granja de algas de Paje"],
              [
                "Visite du Seaweed Center, à Paje, une entreprise sociale qui donne du travail aux cultivatrices d'algues. Selon la marée, vous voyez la récolte, puis la transformation en savons et huiles de beauté. Reste de la journée libre.",
                "Visit the Seaweed Center in Paje, a social enterprise that gives work to women seaweed farmers. Depending on the tide, you see the harvest, then the processing into soaps and beauty oils. The rest of the day is free.",
                "Visita al Seaweed Center, en Paje, una empresa social que da trabajo a las cultivadoras de algas. Según la marea, se ve la recolección y la transformación en jabones y aceites de belleza. Resto del día libre.",
              ], "zz10"),
            day(9,
              ["Zanzibar – vol retour", "Zanzibar – flight home", "Zanzíbar – vuelo de regreso"],
              [
                "Petit-déjeuner. Selon l'horaire du vol, transfert à l'aéroport de Zanzibar et embarquement pour la France.",
                "Breakfast. Depending on your flight time, transfer to Zanzibar airport and board for France.",
                "Desayuno. Según el horario del vuelo, traslado al aeropuerto de Zanzíbar y embarque hacia Francia.",
              ], "zz4"),
            day(10, T_HOME, HOME, "zz1"),
          ]
        ),
      ],
    }),

    // ───────────── 2. Safaris à Saadani & balnéaire à Zanzibar — 11J/8N ─────────────
    trip({
      slug: "tanzanie-saadani-safari-zanzibar-11j",
      name: [
        "Tanzanie : safari à Saadani et plage à Zanzibar",
        "Tanzania: Safari in Saadani and the Beach in Zanzibar",
        "Tanzania: safari en Saadani y playa en Zanzíbar",
      ],
      tagline: [
        "Le seul parc tanzanien au bord de l'océan, puis cinq nuits en tout compris à Nungwi",
        "Tanzania's only park on the ocean, then five all-inclusive nights in Nungwi",
        "El único parque tanzano a orillas del océano y cinco noches en todo incluido en Nungwi",
      ],
      description: [
        "Un combiné sans long trajet en 4x4 : Stone Town pour l'histoire, le parc national de Saadani pour la nature, Nungwi pour la plage. Saadani se rejoint en bateau rapide depuis Zanzibar (environ 1 h 30) ; on y fait un safari en 4x4 électrique, un autre en bateau, une marche dans la mangrove et la visite d'un village de pêcheurs. Le séjour se termine par cinq nuits en formule tout compris dans un hôtel 4* (normes locales) du nord de l'île. Bagages souples, 15 kg maximum par personne.",
        "A combination with no long 4x4 drives: Stone Town for history, Saadani National Park for nature, Nungwi for the beach. Saadani is reached by speedboat from Zanzibar (about 1 hr 30); there you go on a safari by electric 4x4, another by boat, a walk in the mangrove and a visit to a fishing village. The stay ends with five all-inclusive nights in a 4* hotel (local rating) in the north of the island. Soft bags, 15 kg maximum per person.",
        "Un combinado sin largos trayectos en 4x4: Stone Town para la historia, el parque nacional de Saadani para la naturaleza y Nungwi para la playa. A Saadani se llega en lancha rápida desde Zanzíbar (alrededor de 1 h 30); allí se hace un safari en 4x4 eléctrico, otro en barco, una caminata por el manglar y la visita a un pueblo de pescadores. La estancia termina con cinco noches en todo incluido en un hotel de 4* (categoría local) del norte de la isla. Equipaje blando, 15 kg máximo por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts et traversées en bateau rapide,8 nuits en hôtels 4* en chambre double,Pension selon programme,5 nuits en tout compris à Zanzibar,Safaris en 4x4 électrique et en bateau,Guides locaux francophones ou anglophones,Droits d'entrée du parc",
        "Flights from France,Transfers and speedboat crossings,8 nights in 4* hotels in a double room,Meals as per programme,5 all-inclusive nights in Zanzibar,Safaris by electric 4x4 and by boat,French- or English-speaking local guides,Park entrance fees",
        "Vuelos desde Francia,Traslados y travesías en lancha rápida,8 noches en hoteles de 4* en habitación doble,Comidas según programa,5 noches en todo incluido en Zanzíbar,Safaris en 4x4 eléctrico y en barco,Guías locales francófonos o anglófonos,Entradas al parque",
      ],
      price: 2389, nights: 8, departureFrom: "Francfort", image: "sa9",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,honeymoon,family", maxGuests: 12, order: -95999,
      chapters: [
        chapter(
          ["Stone Town", "Stone Town", "Stone Town"],
          [
            "Une première nuit dans la vieille ville de Zanzibar, dans l'un de ses hôtels les plus connus, un ancien palais.",
            "A first night in Zanzibar's old town, in one of its best-known hotels, a former palace.",
            "Una primera noche en la ciudad vieja de Zanzíbar, en uno de sus hoteles más conocidos, un antiguo palacio.",
          ],
          ["sa2", "sa3", "sa4", "zz3"],
          [
            day(1, ["Envol pour Zanzibar", "Flight to Zanzibar", "Vuelo a Zanzíbar"],
              ["Embarquement sur un vol régulier à destination de Zanzibar. Dîner et nuit à bord.", "Board a scheduled flight to Zanzibar. Dinner and night on board.", "Embarque en un vuelo regular con destino a Zanzíbar. Cena y noche a bordo."], "sa8"),
            day(2,
              ["Arrivée à Stone Town", "Arrival in Stone Town", "Llegada a Stone Town"],
              [
                "Arrivée à l'aéroport de Zanzibar et transfert à Stone Town, ville classée au patrimoine mondial. Installation dans un ancien palais rénové, au mobilier d'époque. Dîner libre.",
                "Arrive at Zanzibar airport and transfer to Stone Town, a World Heritage town. Check in to a renovated former palace with period furniture. Dinner on your own.",
                "Llegada al aeropuerto de Zanzíbar y traslado a Stone Town, ciudad Patrimonio Mundial. Instalación en un antiguo palacio renovado, con mobiliario de época. Cena libre.",
              ], "sa4"),
          ]
        ),
        chapter(
          ["Le parc national de Saadani", "Saadani National Park", "El parque nacional de Saadani"],
          [
            "Sur le continent, face à Zanzibar, Saadani est le seul parc de Tanzanie où la savane rejoint l'océan. Deux nuits dans un lodge posé sur la plage.",
            "On the mainland, facing Zanzibar, Saadani is the only park in Tanzania where the savannah meets the ocean. Two nights in a lodge set on the beach.",
            "En el continente, frente a Zanzíbar, Saadani es el único parque de Tanzania donde la sabana se une al océano. Dos noches en un lodge situado en la playa.",
          ],
          ["sa9", "sa10", "sa1", "sa5", "sa6"],
          [
            day(3,
              ["Traversée vers Saadani – le village de Mkwaja", "Crossing to Saadani – Mkwaja village", "Travesía a Saadani – la aldea de Mkwaja"],
              [
                "Transfert matinal au port de Stone Town et traversée en bateau rapide jusqu'à la plage du lodge (environ 1 h 30). Après le déjeuner, départ pour le village de pêcheurs de Mkwaja : avec un guide du village, vous assistez au retour des pêcheurs et, selon la période, visitez l'école.",
                "An early transfer to Stone Town harbour and a speedboat crossing to the lodge's beach (about 1 hr 30). After lunch, leave for the fishing village of Mkwaja: with a guide from the village, you watch the fishermen come in and, depending on the time of year, visit the school.",
                "Traslado temprano al puerto de Stone Town y travesía en lancha rápida hasta la playa del lodge (alrededor de 1 h 30). Tras el almuerzo, salida hacia la aldea de pescadores de Mkwaja: con un guía del pueblo, se asiste al regreso de los pescadores y, según la época, se visita la escuela.",
              ], "sa1"),
            day(4,
              ["La mangrove à pied et safari en 4x4 électrique", "The mangrove on foot and a safari by electric 4x4", "El manglar a pie y safari en 4x4 eléctrico"],
              [
                "Depuis la plage de l'hôtel, marche d'environ deux heures avec un guide naturaliste, le long de l'océan puis dans la mangrove, où vivent singes et oiseaux. Après le déjeuner au lodge, route vers le sud du parc pour un safari en 4x4 électrique d'environ 1 h 30, en traversant un village.",
                "From the hotel beach, a walk of about two hours with a naturalist guide, along the ocean and then into the mangrove, home to monkeys and birds. After lunch at the lodge, drive to the south of the park for a safari by electric 4x4 of about 1 hr 30, passing through a village.",
                "Desde la playa del hotel, caminata de unas dos horas con un guía naturalista, junto al océano y luego por el manglar, donde viven monos y aves. Tras el almuerzo en el lodge, carretera hacia el sur del parque para un safari en 4x4 eléctrico de alrededor de 1 h 30, atravesando una aldea.",
              ], "sa10"),
          ]
        ),
        chapter(
          ["Nungwi, au nord de Zanzibar", "Nungwi, in the north of Zanzibar", "Nungwi, al norte de Zanzíbar"],
          [
            "Retour sur l'île pour cinq nuits en tout compris près du village de Nungwi, connu pour ses couchers de soleil et son eau claire.",
            "Back on the island for five all-inclusive nights near the village of Nungwi, known for its sunsets and clear water.",
            "Regreso a la isla para cinco noches en todo incluido cerca del pueblo de Nungwi, conocido por sus atardeceres y sus aguas claras.",
          ],
          ["sa8", "zz8", "zz11", "zz1"],
          [
            day(5,
              ["De Saadani à Nungwi", "From Saadani to Nungwi", "De Saadani a Nungwi"],
              [
                "Départ de la plage en bateau rapide jusqu'au port de Stone Town, puis transfert vers votre hôtel du nord de l'île : deux piscines, un restaurant buffet, un spa et la plage. Journée libre en tout compris.",
                "Leave from the beach by speedboat for Stone Town harbour, then transfer to your hotel in the north of the island: two pools, a buffet restaurant, a spa and the beach. A free all-inclusive day.",
                "Salida desde la playa en lancha rápida hasta el puerto de Stone Town y traslado a su hotel del norte de la isla: dos piscinas, restaurante bufé, spa y playa. Jornada libre en todo incluido.",
              ], "sa8"),
            day(6,
              ["Nungwi, séjour libre", "Nungwi, free stay", "Nungwi, estancia libre"],
              [
                "Journée libre à l'hôtel en formule tout compris, entre plage et piscines.",
                "A free all-inclusive day at the hotel, between the beach and the pools.",
                "Jornada libre en el hotel en todo incluido, entre playa y piscinas.",
              ], "zz8"),
            day(7,
              ["Nungwi – excursions en option", "Nungwi – optional excursions", "Nungwi – excursiones opcionales"],
              [
                "Journée libre. Avec supplément, plusieurs excursions sont possibles : le Safari Bleu à bord d'un boutre traditionnel, le Spice Tour parmi la vanille, la cannelle et le clou de girofle, ou la forêt de Jozani et ses colobes roux.",
                "A free day. For a supplement, several excursions are possible: Safari Blue aboard a traditional dhow, the Spice Tour among vanilla, cinnamon and cloves, or Jozani forest and its red colobus monkeys.",
                "Jornada libre. Con suplemento, son posibles varias excursiones: el Safari Blue a bordo de un dhow tradicional, el Spice Tour entre vainilla, canela y clavo, o el bosque de Jozani y sus colobos rojos.",
              ], "zz6"),
            day(8,
              ["Nungwi, séjour libre", "Nungwi, free stay", "Nungwi, estancia libre"],
              [
                "Nouvelle journée libre en tout compris. Nungwi convient bien aux activités nautiques, à réserver sur place.",
                "Another free all-inclusive day. Nungwi is well suited to water sports, to be booked locally.",
                "Otra jornada libre en todo incluido. Nungwi se presta a las actividades náuticas, a reservar in situ.",
              ], "zz11"),
            day(9,
              ["Dernière journée à Nungwi", "Last day in Nungwi", "Última jornada en Nungwi"],
              [
                "Dernière journée complète au bord de l'océan Indien, en tout compris.",
                "A last full day beside the Indian Ocean, all-inclusive.",
                "Última jornada completa a orillas del océano Índico, en todo incluido.",
              ], "zz1"),
            day(10,
              ["Zanzibar – vol retour", "Zanzibar – flight home", "Zanzíbar – vuelo de regreso"],
              [
                "Petit-déjeuner, matinée et repas libres. Selon l'horaire du vol, transfert à l'aéroport de Zanzibar et embarquement pour la France.",
                "Breakfast, then a free morning with meals on your own. Depending on your flight time, transfer to Zanzibar airport and board for France.",
                "Desayuno, mañana y comidas libres. Según el horario del vuelo, traslado al aeropuerto de Zanzíbar y embarque hacia Francia.",
              ], "zz4"),
            day(11, T_HOME, HOME, "sa8"),
          ]
        ),
      ],
    }),

    // ───────────── 3. L'Essentiel de la Tanzanie — 8J/5N ─────────────
    trip({
      slug: "tanzanie-essentiel-safari-nord-8j",
      name: [
        "Tanzanie : l'essentiel des parcs du Nord en une semaine",
        "Tanzania: The Essential Northern Parks in a Week",
        "Tanzania: lo esencial de los parques del norte en una semana",
      ],
      tagline: [
        "Tarangire, le cratère du Ngorongoro et deux nuits au cœur du Serengeti",
        "Tarangire, the Ngorongoro crater and two nights in the heart of the Serengeti",
        "Tarangire, el cráter del Ngorongoro y dos noches en el corazón del Serengeti",
      ],
      description: [
        "Le safari tanzanien dans sa version la plus courte : huit jours, cinq nuits sur place et les trois grands noms du Nord, Tarangire, le cratère du Ngorongoro et le Serengeti, en 4x4 à toit ouvrant de sept places au maximum, avec un chauffeur-guide francophone. Une journée libre à Karatu coupe le voyage, avec le parc de Manyara en option. Le retour se fait en avion depuis le Serengeti. Le circuit peut être suivi de trois nuits à Zanzibar, en hôtel 3*, 4* ou 5* (à partir de 3 421 € par personne).",
        "The Tanzanian safari in its shortest form: eight days, five nights on the ground and the three big names of the north, Tarangire, the Ngorongoro crater and the Serengeti, in a pop-top 4x4 seating seven at most, with a French-speaking driver-guide. A free day in Karatu breaks up the trip, with Lake Manyara park as an option. You return by plane from the Serengeti. The tour can be followed by three nights in Zanzibar, in a 3*, 4* or 5* hotel (from €3,421 per person).",
        "El safari tanzano en su versión más corta: ocho días, cinco noches en destino y los tres grandes nombres del norte, Tarangire, el cráter del Ngorongoro y el Serengeti, en 4x4 de techo abatible de siete plazas como máximo, con chófer-guía francófono. Una jornada libre en Karatu divide el viaje, con el parque de Manyara como opción. El regreso se hace en avión desde el Serengeti. El circuito puede continuar con tres noches en Zanzíbar, en hotel de 3*, 4* o 5* (desde 3.421 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,5 nuits en lodges et camp 3* en chambre double,Repas selon programme,Safaris en 4x4 à toit ouvrant,Vol Serengeti–Arusha,Chauffeur-guide francophone",
        "Flights from France,Airport transfers,5 nights in 3* lodges and camp in a double room,Meals as per programme,Safaris in a pop-top 4x4,Serengeti–Arusha flight,French-speaking driver-guide",
        "Vuelos desde Francia,Traslados al aeropuerto,5 noches en lodges y campamento de 3* en habitación doble,Comidas según programa,Safaris en 4x4 de techo abatible,Vuelo Serengeti–Arusha,Chófer-guía francófono",
      ],
      price: 2597, nights: 5, departureFrom: "Bâle", image: "es3",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 7, order: -95998,
      chapters: [
        chapter(
          ["Arusha, Tarangire et Karatu", "Arusha, Tarangire and Karatu", "Arusha, Tarangire y Karatu"],
          [
            "D'Arusha, au pied du mont Méru, la route mène aux baobabs de Tarangire puis au village de Karatu, sur les contreforts du Ngorongoro.",
            "From Arusha, at the foot of Mount Meru, the road leads to the baobabs of Tarangire and then to the village of Karatu, on the slopes of Ngorongoro.",
            "Desde Arusha, al pie del monte Meru, la carretera lleva a los baobabs de Tarangire y al pueblo de Karatu, en las estribaciones del Ngorongoro.",
          ],
          ["es2", "es1", "es5", "ts8"],
          [
            day(1, T_FLY, FLY, "es5"),
            day(2, T_ARUSHA, ARUSHA, "es5"),
            day(3,
              ["Le parc national de Tarangire – Karatu", "Tarangire National Park – Karatu", "El parque nacional de Tarangire – Karatu"],
              [
                "Route vers le parc national de Tarangire (140 km dans la journée), une savane arborée de baobabs et de grands acacias parasols, où vivent impalas, girafes, élands, zèbres et gnous. Déjeuner, dîner et nuit au lodge, à Karatu.",
                "Drive to Tarangire National Park (140 km over the day), a wooded savannah of baobabs and tall umbrella acacias, home to impala, giraffe, eland, zebra and wildebeest. Lunch, dinner and night at the lodge in Karatu.",
                "Carretera hacia el parque nacional de Tarangire (140 km en el día), una sabana arbolada de baobabs y grandes acacias, donde viven impalas, jirafas, elands, cebras y ñus. Almuerzo, cena y noche en el lodge, en Karatu.",
              ], "es2"),
            day(4,
              ["Journée libre à Karatu", "Free day in Karatu", "Jornada libre en Karatu"],
              [
                "Journée libre au lodge : piscine, jardin fleuri ou massage (avec supplément). En option, à régler à la réservation : une journée de safari en 4x4 dans le parc du lac Manyara.",
                "A free day at the lodge: pool, flower garden or a massage (for a supplement). Optional, paid at booking: a day's 4x4 safari in Lake Manyara park.",
                "Jornada libre en el lodge: piscina, jardín florido o masaje (con suplemento). Opcional, a pagar al reservar: un día de safari en 4x4 en el parque del lago Manyara.",
              ], "es1"),
          ]
        ),
        chapter(
          ["Le Ngorongoro et le Serengeti", "Ngorongoro and the Serengeti", "El Ngorongoro y el Serengeti"],
          [
            "La descente dans le cratère du Ngorongoro, puis deux nuits en camp dans les grandes plaines du Serengeti.",
            "The descent into the Ngorongoro crater, then two nights in camp on the great plains of the Serengeti.",
            "El descenso al cráter del Ngorongoro y dos noches en campamento en las grandes llanuras del Serengeti.",
          ],
          ["es6", "es3", "es4", "ts4", "ts7"],
          [
            day(5,
              ["Le cratère du Ngorongoro – Serengeti", "The Ngorongoro crater – Serengeti", "El cráter del Ngorongoro – Serengeti"],
              [
                "Départ pour le Serengeti en traversant l'aire de conservation du Ngorongoro. Safari au fond du cratère, classé au patrimoine mondial : plus de 20 km de diamètre, des flancs escarpés et la plupart des espèces africaines, des grands troupeaux aux lions, guépards, éléphants et rhinocéros.",
                "Leave for the Serengeti across the Ngorongoro Conservation Area. A safari on the floor of the crater, a World Heritage site: more than 20 km across, steep sides and most African species, from the great herds to lions, cheetahs, elephants and rhinos.",
                "Salida hacia el Serengeti atravesando el área de conservación del Ngorongoro. Safari en el fondo del cráter, Patrimonio Mundial: más de 20 km de diámetro, laderas escarpadas y la mayoría de las especies africanas, de las grandes manadas a leones, guepardos, elefantes y rinocerontes.",
              ], "es6"),
            day(6,
              ["Une journée dans le Serengeti", "A day in the Serengeti", "Una jornada en el Serengeti"],
              [
                "Journée de safari dans le Serengeti, « terre aride et étendue » en langue masaï : grandes plaines, termitières et monticules rocheux où les prédateurs se reposent entre deux chasses. Pique-nique sous les acacias et nouveau safari l'après-midi.",
                "A day's safari in the Serengeti, 'arid and extended land' in the Maasai language: wide plains, termite mounds and rocky outcrops where predators rest between hunts. A picnic under the acacias and another game drive in the afternoon.",
                "Jornada de safari en el Serengeti, «tierra árida y extensa» en lengua masái: grandes llanuras, termiteros y montículos rocosos donde los depredadores descansan entre dos cacerías. Pícnic bajo las acacias y nuevo safari por la tarde.",
              ], "es3"),
            day(7,
              ["Dernier safari – vol pour Arusha et départ", "Last safari – flight to Arusha and departure", "Último safari – vuelo a Arusha y salida"],
              [
                "Dernier safari dans les plaines du Serengeti, le parc de Tanzanie où guépards et léopards se laissent le plus facilement voir. Déjeuner pique-nique, vol pour Arusha, puis vol retour vers la France.",
                "A last safari on the Serengeti plains, the park in Tanzania where cheetahs and leopards are most easily seen. Picnic lunch, flight to Arusha, then the flight back to France.",
                "Último safari por las llanuras del Serengeti, el parque de Tanzania donde guepardos y leopardos se dejan ver con más facilidad. Almuerzo pícnic, vuelo a Arusha y vuelo de regreso a Francia.",
              ], "ts7"),
            day(8, T_HOME, HOME, "es5"),
          ]
        ),
      ],
    }),

    // ───────────── 4. Escapade en Terre Sauvage — 10J/7N ─────────────
    trip({
      slug: "tanzanie-escapade-terre-sauvage-10j",
      name: [
        "Tanzanie : safari à pied et de nuit, du Ngorongoro à Grumeti",
        "Tanzania: Safari on Foot and by Night, from Ngorongoro to Grumeti",
        "Tanzania: safari a pie y de noche, del Ngorongoro a Grumeti",
      ],
      tagline: [
        "Quatre parcs, des lodges et camps 4* éco-responsables et une marche avec les Maasaï",
        "Four parks, eco-friendly 4* lodges and camps, and a walk with the Maasai",
        "Cuatro parques, lodges y campamentos de 4* ecorresponsables y una caminata con los masáis",
      ],
      description: [
        "Un safari qui ne se vit pas seulement depuis le véhicule. Aux parcs d'Arusha, du Serengeti et de Tarangire et au cratère du Ngorongoro s'ajoutent une promenade au coucher du soleil avec des guerriers maasaï à Olduvai, un safari à pied avec un ranger et un safari de nuit en 4x4 électrique dans la zone de Grumeti. L'hébergement se fait en lodges et camps 4* (normes locales) éco-responsables, en pension complète, pique-niques dans les réserves compris. Six à sept voyageurs par véhicule ; bagages souples obligatoires.",
        "A safari that is not only seen from the vehicle. To Arusha, Serengeti and Tarangire parks and the Ngorongoro crater it adds a sunset walk with Maasai warriors at Olduvai, a walking safari with a ranger and a night safari by electric 4x4 in the Grumeti area. Accommodation is in eco-friendly 4* lodges and camps (local rating), on full board, picnics in the reserves included. Six to seven travellers per vehicle; soft bags required.",
        "Un safari que no se vive solo desde el vehículo. A los parques de Arusha, Serengeti y Tarangire y al cráter del Ngorongoro se suman un paseo al atardecer con guerreros masáis en Olduvai, un safari a pie con un ranger y un safari nocturno en 4x4 eléctrico en la zona de Grumeti. El alojamiento es en lodges y campamentos de 4* (categoría local) ecorresponsables, en pensión completa, con pícnics en las reservas. De seis a siete viajeros por vehículo; equipaje blando obligatorio.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en lodges et camps 4* en chambre double,Pension complète,Safaris en 4x4,Safari à pied et safari de nuit à Grumeti,Chauffeur-guide francophone,Droits d'entrée des parcs",
        "Flights from France,Airport transfers,7 nights in 4* lodges and camps in a double room,Full board,4x4 safaris,Walking safari and night safari in Grumeti,French-speaking driver-guide,Park entrance fees",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en lodges y campamentos de 4* en habitación doble,Pensión completa,Safaris en 4x4,Safari a pie y safari nocturno en Grumeti,Chófer-guía francófono,Entradas a los parques",
      ],
      price: 3105, nights: 7, departureFrom: "Bruxelles", image: "ts1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 7, order: -95997,
      chapters: [
        chapter(
          ["Arusha et le Ngorongoro", "Arusha and Ngorongoro", "Arusha y el Ngorongoro"],
          [
            "Un premier parc d'altitude au pied du mont Méru, puis le cratère du Ngorongoro et une nuit en camp aux portes du Serengeti.",
            "A first, high-altitude park at the foot of Mount Meru, then the Ngorongoro crater and a night in camp at the gates of the Serengeti.",
            "Un primer parque de altura al pie del monte Meru, y después el cráter del Ngorongoro y una noche en campamento a las puertas del Serengeti.",
          ],
          ["ts2", "ts1", "es6", "ev3"],
          [
            day(1, T_FLY, FLY, "es5"),
            day(2, T_ARUSHA, ARUSHA, "ts2"),
            day(3,
              ["Le parc national d'Arusha – Karatu", "Arusha National Park – Karatu", "El parque nacional de Arusha – Karatu"],
              [
                "Journée de safari dans le parc national d'Arusha, 137 km² entre les contreforts du mont Méru (4 565 m), le cratère de Ngurdoto et les lacs Momella, où l'on observe le colobe noir et blanc et des flamants roses. Pique-nique, puis route vers la région agricole de Karatu. En option : safari pédestre de deux heures avec un ranger.",
                "A day's safari in Arusha National Park, 137 km² between the slopes of Mount Meru (4,565 m), the Ngurdoto crater and the Momella lakes, where you see the black-and-white colobus and flamingos. Picnic, then drive to the farming region of Karatu. Optional: a two-hour walking safari with a ranger.",
                "Jornada de safari en el parque nacional de Arusha, 137 km² entre las estribaciones del monte Meru (4.565 m), el cráter de Ngurdoto y los lagos Momella, donde se observan el colobo blanco y negro y flamencos. Pícnic y carretera hacia la región agrícola de Karatu. Opcional: safari a pie de dos horas con un ranger.",
              ], "ts2"),
            day(4,
              ["Le cratère du Ngorongoro – Olduvai", "The Ngorongoro crater – Olduvai", "El cráter del Ngorongoro – Olduvai"],
              [
                "Journée dans le cratère du Ngorongoro, une caldeira de 20 km de diamètre dont le rempart de 600 mètres protège une faune très dense. Pique-nique au fond du cratère, puis remontée vers le camp d'Olduvai. À l'arrivée, promenade à pied avec des guerriers maasaï jusqu'au sommet d'un kopje, pour le coucher du soleil sur les plaines du Serengeti.",
                "A day in the Ngorongoro crater, a caldera 20 km across whose 600-metre wall shelters very dense wildlife. Picnic on the crater floor, then climb out towards the Olduvai camp. On arrival, a walk with Maasai warriors to the top of a kopje, for sunset over the Serengeti plains.",
                "Jornada en el cráter del Ngorongoro, una caldera de 20 km de diámetro cuya muralla de 600 metros protege una fauna muy densa. Pícnic en el fondo del cráter y subida hacia el campamento de Olduvai. A la llegada, paseo a pie con guerreros masáis hasta la cima de un kopje, para ver el atardecer sobre las llanuras del Serengeti.",
              ], "ts1"),
          ]
        ),
        chapter(
          ["Le Serengeti et Grumeti", "The Serengeti and Grumeti", "El Serengeti y Grumeti"],
          [
            "Le Serengeti, 14 000 km² et la plus forte concentration de félins au monde, puis deux nuits dans la zone de Grumeti, à l'ouest, où le safari se fait aussi à pied et de nuit.",
            "The Serengeti, 14,000 km² and the highest concentration of big cats in the world, then two nights in the Grumeti area, to the west, where the safari is also done on foot and at night.",
            "El Serengeti, 14.000 km² y la mayor concentración de felinos del mundo, y dos noches en la zona de Grumeti, al oeste, donde el safari se hace también a pie y de noche.",
          ],
          ["ts5", "ts6", "ts4", "ts3", "ts7"],
          [
            day(5,
              ["Le parc national du Serengeti – Grumeti", "Serengeti National Park – Grumeti", "El parque nacional del Serengeti – Grumeti"],
              [
                "Grande journée de safari dans le Serengeti, avec pique-nique : les plaines immenses du sud, les collines boisées de l'ouest, les kopjes de l'est. Arrivée dans la zone de Grumeti en fin de journée.",
                "A long day's safari in the Serengeti, with a picnic: the vast plains of the south, the wooded hills of the west, the kopjes of the east. Arrive in the Grumeti area at the end of the day.",
                "Gran jornada de safari en el Serengeti, con pícnic: las inmensas llanuras del sur, las colinas boscosas del oeste, los kopjes del este. Llegada a la zona de Grumeti al final del día.",
              ], "ts6"),
            day(6,
              ["Grumeti : safari à pied et safari de nuit", "Grumeti: walking safari and night safari", "Grumeti: safari a pie y safari nocturno"],
              [
                "Collation, puis safari à pied matinal avec un ranger et un guide, et petit-déjeuner en brousse. Fin de matinée et après-midi libres au camp. Après le dîner, safari nocturne en 4x4 électrique : galagos, genettes, et des hyènes, lions ou léopards au comportement très différent de celui du jour.",
                "A light snack, then an early walking safari with a ranger and a guide, and breakfast in the bush. The late morning and afternoon are free at camp. After dinner, a night safari by electric 4x4: bushbabies, genets, and hyenas, lions or leopards behaving very differently from the daytime.",
                "Tentempié y safari a pie matinal con un ranger y un guía, con desayuno en la sabana. Final de la mañana y tarde libres en el campamento. Tras la cena, safari nocturno en 4x4 eléctrico: gálagos, ginetas, y hienas, leones o leopardos con un comportamiento muy distinto al del día.",
              ], "ts5"),
            day(7,
              ["Du Serengeti à Karatu par les plaines du Ngorongoro", "From the Serengeti to Karatu across the Ngorongoro plains", "Del Serengeti a Karatu por las llanuras del Ngorongoro"],
              [
                "Route à travers le Serengeti puis les plaines de l'aire de conservation du Ngorongoro, avec pique-nique. Ici, contrairement aux parcs nationaux, les Maasaï continuent de vivre en pasteurs sur la terre de leurs ancêtres, au milieu de la faune. Arrivée au lodge en fin de journée.",
                "Drive across the Serengeti and then the plains of the Ngorongoro Conservation Area, with a picnic. Here, unlike in the national parks, the Maasai still live as herders on their ancestral land, among the wildlife. Arrive at the lodge at the end of the day.",
                "Carretera a través del Serengeti y de las llanuras del área de conservación del Ngorongoro, con pícnic. Aquí, a diferencia de los parques nacionales, los masáis siguen viviendo como pastores en la tierra de sus antepasados, entre la fauna. Llegada al lodge al final del día.",
              ], "ts4"),
          ]
        ),
        chapter(
          ["Tarangire", "Tarangire", "Tarangire"],
          [
            "Dernier parc du voyage, l'un des plus beaux refuges de la grande faune tanzanienne, avec une nuit en camp.",
            "The last park of the trip, one of the finest refuges for Tanzania's big game, with a night in camp.",
            "Último parque del viaje, uno de los mejores refugios de la gran fauna tanzana, con una noche en campamento.",
          ],
          ["ts8", "ct1", "es2"],
          [
            day(8,
              ["Le parc national de Tarangire", "Tarangire National Park", "El parque nacional de Tarangire"],
              [
                "Départ matinal pour Tarangire, safari et pique-nique. Le parc abrite des espèces difficiles à voir ailleurs dans le Nord : le gérénuk, le petit koudou, l'oryx. Arrivée au camp en fin de journée.",
                "An early start for Tarangire, safari and picnic. The park is home to species that are hard to see elsewhere in the north: the gerenuk, the lesser kudu, the oryx. Arrive at camp at the end of the day.",
                "Salida temprana hacia Tarangire, safari y pícnic. El parque alberga especies difíciles de ver en otros lugares del norte: el gerenuk, el kudú menor, el órix. Llegada al campamento al final del día.",
              ], "ts8"),
            day(9,
              ["Tarangire – Arusha – vol retour", "Tarangire – Arusha – flight home", "Tarangire – Arusha – vuelo de regreso"],
              [
                "Départ pour Arusha, déjeuner, puis transfert vers l'aéroport du Kilimandjaro. Dîner et nuit à bord.",
                "Leave for Arusha, lunch, then transfer to Kilimanjaro airport. Dinner and night on board.",
                "Salida hacia Arusha, almuerzo y traslado al aeropuerto del Kilimanjaro. Cena y noche a bordo.",
              ], "ct1"),
            day(10, T_HOME, HOME, "es5"),
          ]
        ),
      ],
    }),

    // ───────────── 5. Couleurs de Tanzanie — 10J/7N ─────────────
    trip({
      slug: "tanzanie-couleurs-quatre-parcs-10j",
      name: [
        "Tanzanie : Manyara, Ngorongoro, Serengeti et Tarangire",
        "Tanzania: Manyara, Ngorongoro, Serengeti and Tarangire",
        "Tanzania: Manyara, Ngorongoro, Serengeti y Tarangire",
      ],
      tagline: [
        "Les quatre parcs du Nord en 4x4 à toit ouvrant, sept voyageurs au plus par véhicule",
        "The four northern parks in a pop-top 4x4, seven travellers at most per vehicle",
        "Los cuatro parques del norte en 4x4 de techo abatible, siete viajeros como máximo por vehículo",
      ],
      description: [
        "Le circuit de référence dans le nord de la Tanzanie : le lac Manyara et ses 400 espèces d'oiseaux, le cratère du Ngorongoro, deux nuits dans le Serengeti avec déjeuner barbecue et apéritif en brousse, puis les baobabs de Tarangire. Une journée à Karatu permet de souffler, avec la visite d'une école ou d'un orphelinat et d'une plantation de café. Hébergement en lodges et camp 3* (normes locales), en pension complète. Le voyage peut se terminer par trois nuits à Zanzibar, en hôtel 3*, 4* ou 5* (13 jours, à partir de 4 077 € par personne).",
        "The benchmark tour of northern Tanzania: Lake Manyara and its 400 bird species, the Ngorongoro crater, two nights in the Serengeti with a barbecue lunch and sundowner in the bush, then the baobabs of Tarangire. A day in Karatu gives you a breather, with a visit to a school or orphanage and a coffee plantation. Accommodation in 3* lodges and camp (local rating), on full board. The trip can end with three nights in Zanzibar, in a 3*, 4* or 5* hotel (13 days, from €4,077 per person).",
        "El circuito de referencia en el norte de Tanzania: el lago Manyara y sus 400 especies de aves, el cráter del Ngorongoro, dos noches en el Serengeti con almuerzo barbacoa y aperitivo en la sabana, y los baobabs de Tarangire. Una jornada en Karatu permite tomarse un respiro, con la visita a una escuela u orfanato y a una plantación de café. Alojamiento en lodges y campamento de 3* (categoría local), en pensión completa. El viaje puede terminar con tres noches en Zanzíbar, en hotel de 3*, 4* o 5* (13 días, desde 4.077 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,7 nuits en lodges et camp 3* en chambre double,Pension complète,Safaris en 4x4 à toit ouvrant,Visites du programme,Chauffeur-guide francophone",
        "Flights from France,Airport transfers,7 nights in 3* lodges and camp in a double room,Full board,Safaris in a pop-top 4x4,Visits in the programme,French-speaking driver-guide",
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en lodges y campamento de 3* en habitación doble,Pensión completa,Safaris en 4x4 de techo abatible,Visitas del programa,Chófer-guía francófono",
      ],
      price: 3194, nights: 7, departureFrom: "Bruxelles", image: "ct1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 7, order: -95996,
      chapters: [
        chapter(
          ["Arusha et le lac Manyara", "Arusha and Lake Manyara", "Arusha y el lago Manyara"],
          [
            "Premier safari au pied de l'escarpement du Rift, entre savane, forêt et lac.",
            "A first safari at the foot of the Rift escarpment, between savannah, forest and lake.",
            "Primer safari al pie del escarpe del Rift, entre sabana, bosque y lago.",
          ],
          ["ct4", "ta1", "ct2", "ta3"],
          [
            day(1, T_FLY, FLY, "es5"),
            day(2, T_ARUSHA, ARUSHA, "ev1"),
            day(3,
              ["Le parc national du lac Manyara – Karatu", "Lake Manyara National Park – Karatu", "El parque nacional del lago Manyara – Karatu"],
              [
                "Rencontre avec votre guide francophone et route vers le lac Manyara. Trois paysages s'y succèdent : la savane des plaines masaï coupée par la vallée du Rift, la forêt, puis le lac. Plus de 400 espèces d'oiseaux, dont les flamants roses, mais aussi zèbres, buffles, babouins, girafes et hippopotames. Pique-nique, puis route vers Karatu.",
                "Meet your French-speaking guide and drive to Lake Manyara. Three landscapes follow one another: the savannah of the Maasai plains cut by the Rift Valley, the forest, then the lake. More than 400 bird species, flamingos among them, but also zebra, buffalo, baboons, giraffe and hippos. Picnic, then drive to Karatu.",
                "Encuentro con su guía francófono y carretera hacia el lago Manyara. Se suceden tres paisajes: la sabana de las llanuras masáis cortada por el valle del Rift, el bosque y el lago. Más de 400 especies de aves, entre ellas los flamencos, pero también cebras, búfalos, babuinos, jirafas e hipopótamos. Pícnic y carretera hacia Karatu.",
              ], "ct4"),
          ]
        ),
        chapter(
          ["Le Ngorongoro et le Serengeti", "Ngorongoro and the Serengeti", "El Ngorongoro y el Serengeti"],
          [
            "Le cœur du voyage : le cratère, puis deux nuits en camp dans le Serengeti.",
            "The heart of the trip: the crater, then two nights in camp in the Serengeti.",
            "El corazón del viaje: el cráter y dos noches en campamento en el Serengeti.",
          ],
          ["ct5", "es6", "ts6", "ct3", "es3"],
          [
            day(4,
              ["Le cratère du Ngorongoro – Serengeti", "The Ngorongoro crater – Serengeti", "El cráter del Ngorongoro – Serengeti"],
              [
                "Traversée de l'aire de conservation du Ngorongoro et descente dans le cratère pour un safari : plus de 20 km de diamètre et une concentration animale exceptionnelle, des grands troupeaux aux lions, guépards, hyènes, éléphants et rhinocéros. Continuation vers le Serengeti.",
                "Cross the Ngorongoro Conservation Area and descend into the crater for a safari: more than 20 km across and an exceptional concentration of animals, from the great herds to lions, cheetahs, hyenas, elephants and rhinos. Continue to the Serengeti.",
                "Travesía del área de conservación del Ngorongoro y descenso al cráter para un safari: más de 20 km de diámetro y una concentración animal excepcional, de las grandes manadas a leones, guepardos, hienas, elefantes y rinocerontes. Continuación hacia el Serengeti.",
              ], "es6"),
            day(5,
              ["Le parc national du Serengeti", "Serengeti National Park", "El parque nacional del Serengeti"],
              [
                "Journée de safari dans les grandes plaines du Serengeti, l'un des plus vastes parcs d'Afrique. Déjeuner barbecue sous les acacias, en pleine brousse, puis nouveau safari l'après-midi, avec un arrêt au coucher du soleil pour l'apéritif.",
                "A day's safari on the great plains of the Serengeti, one of the largest parks in Africa. A barbecue lunch under the acacias, out in the bush, then another game drive in the afternoon, stopping at sunset for a sundowner.",
                "Jornada de safari por las grandes llanuras del Serengeti, uno de los mayores parques de África. Almuerzo barbacoa bajo las acacias, en plena sabana, y nuevo safari por la tarde, con una parada al atardecer para el aperitivo.",
              ], "ct5"),
            day(6,
              ["Dernier safari dans le Serengeti – Karatu", "Last safari in the Serengeti – Karatu", "Último safari en el Serengeti – Karatu"],
              [
                "Dernier safari dans les plaines, où guépards et léopards se laissent voir plus facilement qu'ailleurs. Déjeuner dans un restaurant qui surplombe le cratère, puis nouvelle traversée de l'aire de conservation jusqu'à Karatu.",
                "A last safari on the plains, where cheetahs and leopards are more easily seen than elsewhere. Lunch in a restaurant overlooking the crater, then back across the conservation area to Karatu.",
                "Último safari por las llanuras, donde guepardos y leopardos se dejan ver con más facilidad que en otros lugares. Almuerzo en un restaurante que domina el cráter y nueva travesía del área de conservación hasta Karatu.",
              ], "ts6"),
          ]
        ),
        chapter(
          ["Karatu et Tarangire", "Karatu and Tarangire", "Karatu y Tarangire"],
          [
            "Une journée de vie locale à Karatu, puis un dernier parc, celui des baobabs et des éléphants.",
            "A day of local life in Karatu, then a last park, the one of baobabs and elephants.",
            "Una jornada de vida local en Karatu y un último parque, el de los baobabs y los elefantes.",
          ],
          ["ct1", "ct6", "ts8", "es2"],
          [
            day(7,
              ["Karatu : école et plantation de café", "Karatu: a school and a coffee plantation", "Karatu: escuela y plantación de café"],
              [
                "Matinée libre au lodge. L'après-midi, visite d'une école ou d'un orphelinat (vous pouvez apporter jouets, fournitures ou vêtements), puis d'une plantation de café. En option, à régler à la réservation : départ matinal à la rencontre des Hadzabés et des Datogas, chasseurs-cueilleurs de la région du lac Eyasi.",
                "A free morning at the lodge. In the afternoon, visit a school or an orphanage (you may bring toys, school supplies or clothes), then a coffee plantation. Optional, paid at booking: an early start to meet the Hadzabe and Datoga, hunter-gatherers of the Lake Eyasi region.",
                "Mañana libre en el lodge. Por la tarde, visita a una escuela o un orfanato (puede llevar juguetes, material escolar o ropa) y a una plantación de café. Opcional, a pagar al reservar: salida temprana para conocer a los hadzabes y datogas, cazadores-recolectores de la región del lago Eyasi.",
              ], "ct6"),
            day(8,
              ["Le parc national de Tarangire", "Tarangire National Park", "El parque nacional de Tarangire"],
              [
                "Journée de safari à Tarangire, parmi les baobabs et les acacias parasols : impalas, girafes, bubales, élands, zèbres et gnous. Pique-nique, safari l'après-midi, puis installation au lodge.",
                "A day's safari in Tarangire, among the baobabs and umbrella acacias: impala, giraffe, hartebeest, eland, zebra and wildebeest. Picnic, an afternoon game drive, then check in at the lodge.",
                "Jornada de safari en Tarangire, entre baobabs y acacias: impalas, jirafas, alcelafos, elands, cebras y ñus. Pícnic, safari por la tarde e instalación en el lodge.",
              ], "ct1"),
            day(9,
              ["Tarangire – Arusha – vol retour", "Tarangire – Arusha – flight home", "Tarangire – Arusha – vuelo de regreso"],
              [
                "Départ pour Arusha, déjeuner, puis transfert à l'aéroport international du Kilimandjaro et envol pour la France.",
                "Leave for Arusha, lunch, then transfer to Kilimanjaro international airport and flight to France.",
                "Salida hacia Arusha, almuerzo y traslado al aeropuerto internacional del Kilimanjaro, con vuelo a Francia.",
              ], "ev1"),
            day(10, T_HOME, HOME, "es5"),
          ]
        ),
      ],
    }),

    // ───────────── 6. La Tanzanie Autrement — 11J/8N ─────────────
    trip({
      slug: "tanzanie-autrement-lac-natron-11j",
      name: [
        "Tanzanie autrement : le lac Natron, les Maasaï et les grands parcs",
        "Tanzania Differently: Lake Natron, the Maasai and the Great Parks",
        "Tanzania de otra manera: el lago Natron, los masáis y los grandes parques",
      ],
      tagline: [
        "Quatre parcs, un cours de cuisine chez l'habitant et une marche au bord du lac Natron",
        "Four parks, a cooking class in a family home and a walk beside Lake Natron",
        "Cuatro parques, una clase de cocina en una casa local y una caminata junto al lago Natron",
      ],
      description: [
        "Les quatre parcs du Nord, Manyara, Serengeti, Ngorongoro et Tarangire, avec un détour que peu de circuits font : deux nuits au lac Natron, dans des paysages arides au pied des montagnes, pour une marche avec un guide maasaï. En chemin, à Mto wa Mbu, on part en tuk-tuk faire le marché, puis on cuisine et on déjeune chez une famille. Les nuits dans le Serengeti se passent en camp de tentes, au cœur de la savane. Hébergement 3* (normes locales), pension complète, sept voyageurs au plus par 4x4. Extension possible : trois nuits à Zanzibar (14 jours, à partir de 4 740 € par personne).",
        "The four northern parks, Manyara, Serengeti, Ngorongoro and Tarangire, with a detour few tours make: two nights at Lake Natron, in arid landscapes at the foot of the mountains, for a walk with a Maasai guide. On the way, in Mto wa Mbu, you go by tuk-tuk to shop at the market, then cook and have lunch with a family. Nights in the Serengeti are in a tented camp, in the heart of the savannah. 3* accommodation (local rating), full board, seven travellers at most per 4x4. Possible extension: three nights in Zanzibar (14 days, from €4,740 per person).",
        "Los cuatro parques del norte, Manyara, Serengeti, Ngorongoro y Tarangire, con un desvío que pocos circuitos hacen: dos noches en el lago Natron, entre paisajes áridos al pie de las montañas, para una caminata con un guía masái. De camino, en Mto wa Mbu, se va en tuk-tuk a hacer la compra al mercado y se cocina y almuerza con una familia. Las noches en el Serengeti son en campamento de tiendas, en plena sabana. Alojamiento de 3* (categoría local), pensión completa, siete viajeros como máximo por 4x4. Extensión posible: tres noches en Zanzíbar (14 días, desde 4.740 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,8 nuits en lodges et camp 3* en chambre double,Pension complète,Safaris en 4x4 à toit ouvrant,Cours de cuisine et déjeuner chez l'habitant,Marche guidée au lac Natron,Chauffeur-guide francophone",
        "Flights from France,Airport transfers,8 nights in 3* lodges and camp in a double room,Full board,Safaris in a pop-top 4x4,Cooking class and lunch in a family home,Guided walk at Lake Natron,French-speaking driver-guide",
        "Vuelos desde Francia,Traslados al aeropuerto,8 noches en lodges y campamento de 3* en habitación doble,Pensión completa,Safaris en 4x4 de techo abatible,Clase de cocina y almuerzo en una casa local,Caminata guiada en el lago Natron,Chófer-guía francófono",
      ],
      price: 3747, nights: 8, departureFrom: "Francfort", image: "ta2",
      theme: "culture", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 7, order: -95995,
      chapters: [
        chapter(
          ["Arusha, Manyara et Mto wa Mbu", "Arusha, Manyara and Mto wa Mbu", "Arusha, Manyara y Mto wa Mbu"],
          [
            "Un premier safari au lac Manyara, puis une matinée de marché et de cuisine dans le village de Mto wa Mbu.",
            "A first safari at Lake Manyara, then a morning of market and cooking in the village of Mto wa Mbu.",
            "Un primer safari en el lago Manyara y una mañana de mercado y cocina en el pueblo de Mto wa Mbu.",
          ],
          ["ta1", "ta5", "ta3", "ta6"],
          [
            day(1, T_FLY, FLY, "es5"),
            day(2, T_ARUSHA, ARUSHA, "ta6"),
            day(3,
              ["Le parc national du lac Manyara", "Lake Manyara National Park", "El parque nacional del lago Manyara"],
              [
                "Départ pour le lac Manyara et safari dans le parc, entre savane, forêt et lac : un paradis pour les ornithologues, avec plus de 400 espèces d'oiseaux, et le territoire des zèbres, gnous, buffles, babouins, girafes et hippopotames. Pique-nique et installation au lodge.",
                "Leave for Lake Manyara and a safari in the park, between savannah, forest and lake: a paradise for birdwatchers, with more than 400 species, and home to zebra, wildebeest, buffalo, baboons, giraffe and hippos. Picnic and check-in at the lodge.",
                "Salida hacia el lago Manyara y safari en el parque, entre sabana, bosque y lago: un paraíso para los ornitólogos, con más de 400 especies de aves, y territorio de cebras, ñus, búfalos, babuinos, jirafas e hipopótamos. Pícnic e instalación en el lodge.",
              ], "ta1"),
            day(4,
              ["Mto wa Mbu en tuk-tuk et cuisine chez l'habitant – lac Natron", "Mto wa Mbu by tuk-tuk and cooking with a family – Lake Natron", "Mto wa Mbu en tuk-tuk y cocina en una casa local – lago Natron"],
              [
                "Route vers Mto wa Mbu. Départ en tuk-tuk pour le marché, où vous achetez les ingrédients du déjeuner, puis cours de cuisine locale et repas avec votre famille d'accueil ; le guide assure la traduction. L'après-midi, continuation vers le lac Natron.",
                "Drive to Mto wa Mbu. Set off by tuk-tuk for the market, where you buy the ingredients for lunch, then a local cooking class and a meal with your host family; the guide translates. In the afternoon, continue to Lake Natron.",
                "Carretera hacia Mto wa Mbu. Salida en tuk-tuk al mercado, donde se compran los ingredientes del almuerzo, y clase de cocina local con comida junto a la familia anfitriona; el guía traduce. Por la tarde, continuación hacia el lago Natron.",
              ], "ta5"),
          ]
        ),
        chapter(
          ["Le lac Natron", "Lake Natron", "El lago Natron"],
          [
            "Au nord, près de la frontière kényane, un lac aux abords marécageux, des paysages arides et le pays maasaï.",
            "In the north, near the Kenyan border, a lake with marshy shores, arid landscapes and Maasai country.",
            "Al norte, cerca de la frontera con Kenia, un lago de orillas pantanosas, paisajes áridos y tierra masái.",
          ],
          ["ta2", "ct3", "ts1"],
          [
            day(5,
              ["Marche guidée au bord du lac Natron", "A guided walk beside Lake Natron", "Caminata guiada junto al lago Natron"],
              [
                "Excursion sur la rive est du lac : paysages arides, puis montagnes d'où les rivières se jettent dans le lac. Pélicans, marabouts et flamants roses fréquentent les abords marécageux, ainsi que zèbres, girafes et gnous. Marche avec un guide maasaï, qui explique la faune, la flore et les coutumes de son peuple. Baignade possible dans des piscines naturelles d'eau de source.",
                "An excursion on the eastern shore of the lake: arid landscapes, then mountains from which rivers flow into the lake. Pelicans, marabou storks and flamingos gather on the marshy shores, along with zebra, giraffe and wildebeest. A walk with a Maasai guide, who explains the wildlife, the plants and the customs of his people. You can bathe in natural spring-water pools.",
                "Excursión por la orilla este del lago: paisajes áridos y montañas desde donde los ríos desembocan en el lago. Pelícanos, marabúes y flamencos frecuentan las orillas pantanosas, junto con cebras, jirafas y ñus. Caminata con un guía masái, que explica la fauna, la flora y las costumbres de su pueblo. Es posible bañarse en piscinas naturales de agua de manantial.",
              ], "ta2"),
          ]
        ),
        chapter(
          ["Le Serengeti et le Ngorongoro", "The Serengeti and Ngorongoro", "El Serengeti y el Ngorongoro"],
          [
            "Deux nuits sous la tente au milieu des plaines, puis le cratère du Ngorongoro sur le chemin du retour.",
            "Two nights under canvas in the middle of the plains, then the Ngorongoro crater on the way back.",
            "Dos noches en tienda en medio de las llanuras y el cráter del Ngorongoro en el camino de vuelta.",
          ],
          ["ct5", "ts5", "ts6", "es6", "ev3"],
          [
            day(6,
              ["Du lac Natron au Serengeti", "From Lake Natron to the Serengeti", "Del lago Natron al Serengeti"],
              [
                "Départ pour le parc national du Serengeti, avec pique-nique en route. Premier safari à travers les plaines, puis installation en camp de tentes au cœur de la savane.",
                "Leave for Serengeti National Park, with a picnic on the way. A first safari across the plains, then settle into a tented camp in the heart of the savannah.",
                "Salida hacia el parque nacional del Serengeti, con pícnic en ruta. Primer safari por las llanuras e instalación en un campamento de tiendas en plena sabana.",
              ], "ts6"),
            day(7,
              ["Une journée dans le Serengeti", "A day in the Serengeti", "Una jornada en el Serengeti"],
              [
                "Safari dans le Serengeti : grandes plaines, termitières et rochers où les prédateurs se prélassent. C'est le parc de Tanzanie où guépards et léopards s'observent le plus facilement. Pique-nique, safari l'après-midi et apéritif en brousse au coucher du soleil.",
                "A safari in the Serengeti: wide plains, termite mounds and rocks where predators laze. It is the park in Tanzania where cheetahs and leopards are most easily seen. Picnic, an afternoon game drive and a sundowner in the bush.",
                "Safari en el Serengeti: grandes llanuras, termiteros y rocas donde descansan los depredadores. Es el parque de Tanzania donde guepardos y leopardos se observan con más facilidad. Pícnic, safari por la tarde y aperitivo en la sabana al atardecer.",
              ], "ct5"),
            day(8,
              ["Le cratère du Ngorongoro – Karatu", "The Ngorongoro crater – Karatu", "El cráter del Ngorongoro – Karatu"],
              [
                "Dernier safari dans les plaines du Serengeti et pique-nique. Puis safari dans le cratère du Ngorongoro, classé au patrimoine mondial, où vit la majorité des espèces de la faune africaine. Route vers Karatu.",
                "A last safari on the Serengeti plains and a picnic. Then a safari in the Ngorongoro crater, a World Heritage site, home to most species of African wildlife. Drive to Karatu.",
                "Último safari por las llanuras del Serengeti y pícnic. Después, safari en el cráter del Ngorongoro, Patrimonio Mundial, donde vive la mayoría de las especies de la fauna africana. Carretera hacia Karatu.",
              ], "es6"),
          ]
        ),
        chapter(
          ["Tarangire", "Tarangire", "Tarangire"],
          [
            "Le voyage se termine parmi les baobabs et les grands acacias de Tarangire.",
            "The trip ends among the baobabs and tall acacias of Tarangire.",
            "El viaje termina entre los baobabs y las grandes acacias de Tarangire.",
          ],
          ["ts8", "ta3", "es2"],
          [
            day(9,
              ["Le parc national de Tarangire", "Tarangire National Park", "El parque nacional de Tarangire"],
              [
                "Journée de safari à Tarangire, savane arborée où vivent impalas, girafes, bubales, élands, zèbres et gnous. Pique-nique, safari l'après-midi et installation au lodge.",
                "A day's safari in Tarangire, a wooded savannah that is home to impala, giraffe, hartebeest, eland, zebra and wildebeest. Picnic, an afternoon game drive and check-in at the lodge.",
                "Jornada de safari en Tarangire, sabana arbolada donde viven impalas, jirafas, alcelafos, elands, cebras y ñus. Pícnic, safari por la tarde e instalación en el lodge.",
              ], "ta3"),
            day(10,
              ["Tarangire – Arusha – vol retour", "Tarangire – Arusha – flight home", "Tarangire – Arusha – vuelo de regreso"],
              [
                "Route vers Arusha, déjeuner au restaurant, puis transfert à l'aéroport et enregistrement sur le vol retour. Dîner et nuit à bord.",
                "Drive to Arusha, lunch in a restaurant, then transfer to the airport and check-in for the flight home. Dinner and night on board.",
                "Carretera hacia Arusha, almuerzo en un restaurante y traslado al aeropuerto para facturar en el vuelo de regreso. Cena y noche a bordo.",
              ], "ts8"),
            day(11, T_HOME, HOME, "es5"),
          ]
        ),
      ],
    }),

    // ───────────── 7. Évasion Tanzanienne & Zanzibar — 11J/8N ─────────────
    trip({
      slug: "tanzanie-evasion-safari-zanzibar-11j",
      name: [
        "Tanzanie : safari en 4x4 privatif et plages de Zanzibar",
        "Tanzania: A Private 4x4 Safari and the Beaches of Zanzibar",
        "Tanzania: safari en 4x4 privado y playas de Zanzíbar",
      ],
      tagline: [
        "Tarangire, Manyara et le Ngorongoro en lodges 4*, puis trois nuits en tout compris",
        "Tarangire, Manyara and Ngorongoro in 4* lodges, then three all-inclusive nights",
        "Tarangire, Manyara y el Ngorongoro en lodges de 4*, y tres noches en todo incluido",
      ],
      description: [
        "Safari et plage dans un même voyage, sans les longues pistes du Serengeti : deux jours à Tarangire, le lac Manyara et ses lions perchés dans les arbres, puis une journée entière dans le cratère du Ngorongoro, en 4x4 privatif de six voyageurs au plus et en lodges et camp 4* (normes locales). Un vol intérieur mène ensuite à Zanzibar pour trois nuits en formule tout compris dans un hôtel 4* de la côte est. Une version privative est possible sur demande. Bagages souples obligatoires.",
        "Safari and beach in one trip, without the long tracks of the Serengeti: two days in Tarangire, Lake Manyara and its tree-climbing lions, then a whole day in the Ngorongoro crater, in a private 4x4 for six travellers at most and in 4* lodges and camp (local rating). A domestic flight then takes you to Zanzibar for three all-inclusive nights in a 4* hotel on the east coast. A private version is possible on request. Soft bags required.",
        "Safari y playa en un mismo viaje, sin las largas pistas del Serengeti: dos días en Tarangire, el lago Manyara y sus leones encaramados a los árboles, y una jornada entera en el cráter del Ngorongoro, en 4x4 privado de seis viajeros como máximo y en lodges y campamento de 4* (categoría local). Un vuelo interior lleva después a Zanzíbar para tres noches en todo incluido en un hotel de 4* de la costa este. Es posible una versión privada bajo petición. Equipaje blando obligatorio.",
      ],
      includes: [
        "Vols depuis la France,Vol Arusha–Zanzibar,Transferts aéroport,8 nuits en hôtels 4* en chambre double,Pension selon programme,3 nuits en tout compris à Zanzibar,Safaris en 4x4 privatif,Chauffeur-guide francophone,Droits d'entrée des parcs",
        "Flights from France,Arusha–Zanzibar flight,Airport transfers,8 nights in 4* hotels in a double room,Meals as per programme,3 all-inclusive nights in Zanzibar,Safaris in a private 4x4,French-speaking driver-guide,Park entrance fees",
        "Vuelos desde Francia,Vuelo Arusha–Zanzíbar,Traslados al aeropuerto,8 noches en hoteles de 4* en habitación doble,Comidas según programa,3 noches en todo incluido en Zanzíbar,Safaris en 4x4 privado,Chófer-guía francófono,Entradas a los parques",
      ],
      price: 4600, nights: 8, departureFrom: "Nice", image: "ev1",
      theme: "adventure", feeling: "contentment", travelerTypes: "couples,honeymoon,family", maxGuests: 6, order: -95994,
      chapters: [
        chapter(
          ["Arusha et Tarangire", "Arusha and Tarangire", "Arusha y Tarangire"],
          [
            "Deux nuits en camp à Tarangire, parc de baobabs qui abrite l'une des plus fortes concentrations d'éléphants du continent.",
            "Two nights in camp in Tarangire, a park of baobabs with one of the highest concentrations of elephants on the continent.",
            "Dos noches en campamento en Tarangire, parque de baobabs que alberga una de las mayores concentraciones de elefantes del continente.",
          ],
          ["ev1", "ts8", "ct1", "es2"],
          [
            day(1, T_FLY, FLY, "es5"),
            day(2, T_ARUSHA, ARUSHA, "ev1"),
            day(3,
              ["Arusha – le parc national de Tarangire", "Arusha – Tarangire National Park", "Arusha – el parque nacional de Tarangire"],
              [
                "Départ après le petit-déjeuner pour Tarangire et premier safari. Déjeuner au camp, puis nouveau safari l'après-midi dans ce parc tenu pour l'un des plus beaux refuges de la grande faune tanzanienne.",
                "Leave after breakfast for Tarangire and a first safari. Lunch at camp, then another game drive in the afternoon in a park regarded as one of the finest refuges for Tanzania's big game.",
                "Salida tras el desayuno hacia Tarangire y primer safari. Almuerzo en el campamento y nuevo safari por la tarde en este parque, considerado uno de los mejores refugios de la gran fauna tanzana.",
              ], "ts8"),
            day(4,
              ["Deuxième journée à Tarangire", "A second day in Tarangire", "Segunda jornada en Tarangire"],
              [
                "Départ matinal pour une deuxième journée de safari, avec pique-nique, dans les plaines vallonnées plantées de baobabs où se rassemblent les éléphants.",
                "An early start for a second day's safari, with a picnic, on the rolling plains dotted with baobabs where the elephants gather.",
                "Salida temprana para una segunda jornada de safari, con pícnic, por las llanuras onduladas salpicadas de baobabs donde se reúnen los elefantes.",
              ], "ct1"),
          ]
        ),
        chapter(
          ["Manyara et le Ngorongoro", "Manyara and Ngorongoro", "Manyara y el Ngorongoro"],
          [
            "Le petit parc de Manyara, entre l'escarpement du Rift et le lac, puis une journée complète dans la caldeira du Ngorongoro.",
            "The small park of Manyara, between the Rift escarpment and the lake, then a full day in the Ngorongoro caldera.",
            "El pequeño parque de Manyara, entre el escarpe del Rift y el lago, y una jornada completa en la caldera del Ngorongoro.",
          ],
          ["ev3", "es6", "ct4", "ta1"],
          [
            day(5,
              ["Le parc national de Manyara – Karatu", "Manyara National Park – Karatu", "El parque nacional de Manyara – Karatu"],
              [
                "Route vers le parc de Manyara, petit par la taille mais varié : la vallée du Rift, le lac et ses milliers d'oiseaux, et une ceinture d'acacias où se perchent parfois les lions. Pique-nique, puis courte étape vers Karatu, sur les contreforts du Ngorongoro.",
                "Drive to Manyara park, small in size but varied: the Rift Valley, the lake and its thousands of birds, and a belt of acacias where the lions sometimes perch. Picnic, then a short drive to Karatu, on the slopes of Ngorongoro.",
                "Carretera hacia el parque de Manyara, pequeño pero variado: el valle del Rift, el lago y sus miles de aves, y un cinturón de acacias donde a veces se encaraman los leones. Pícnic y corta etapa hacia Karatu, en las estribaciones del Ngorongoro.",
              ], "ct4"),
            day(6,
              ["Le cratère du Ngorongoro", "The Ngorongoro crater", "El cráter del Ngorongoro"],
              [
                "Journée consacrée au cratère du Ngorongoro, avec pique-nique à midi : une caldeira de 20 km de diamètre qui abrite une faune très riche et bien protégée. Retour au lodge à Karatu.",
                "A day devoted to the Ngorongoro crater, with a picnic at midday: a caldera 20 km across, home to rich and well-protected wildlife. Return to the lodge in Karatu.",
                "Jornada dedicada al cráter del Ngorongoro, con pícnic a mediodía: una caldera de 20 km de diámetro que alberga una fauna muy rica y bien protegida. Regreso al lodge en Karatu.",
              ], "ev3"),
          ]
        ),
        chapter(
          ["Zanzibar, la côte est", "Zanzibar, the east coast", "Zanzíbar, la costa este"],
          [
            "Un vol depuis Arusha et le décor change : trois nuits en tout compris face à l'océan Indien.",
            "A flight from Arusha and the scene changes: three all-inclusive nights facing the Indian Ocean.",
            "Un vuelo desde Arusha y el decorado cambia: tres noches en todo incluido frente al océano Índico.",
          ],
          ["ev4", "ev5", "zz8", "zz11"],
          [
            day(7,
              ["Karatu – Arusha – vol pour Zanzibar", "Karatu – Arusha – flight to Zanzibar", "Karatu – Arusha – vuelo a Zanzíbar"],
              [
                "Route retour vers Arusha, puis vol pour Zanzibar, pique-nique emporté à bord. À l'arrivée, transfert vers votre hôtel de la côte est et fin de journée libre.",
                "Drive back to Arusha, then fly to Zanzibar, with a picnic taken on board. On arrival, transfer to your hotel on the east coast and the rest of the day free.",
                "Carretera de vuelta a Arusha y vuelo a Zanzíbar, con pícnic para llevar a bordo. A la llegada, traslado a su hotel de la costa este y resto del día libre.",
              ], "ev4"),
            day(8,
              ["Zanzibar, séjour libre", "Zanzibar, free stay", "Zanzíbar, estancia libre"],
              [
                "Journée libre à l'hôtel en formule tout compris. Les plages de l'île comptent parmi les plus belles d'Afrique.",
                "A free all-inclusive day at the hotel. The island's beaches are among the most beautiful in Africa.",
                "Jornada libre en el hotel en todo incluido. Las playas de la isla figuran entre las más bellas de África.",
              ], "ev5"),
            day(9,
              ["Zanzibar, l'île aux épices", "Zanzibar, the spice island", "Zanzíbar, la isla de las especias"],
              [
                "Deuxième journée libre en tout compris. Toutes les épices poussent à Zanzibar, et les vestiges de son passé se découvrent au fil des routes et des chemins.",
                "A second free all-inclusive day. Every spice grows in Zanzibar, and traces of its past turn up along the roads and tracks.",
                "Segunda jornada libre en todo incluido. En Zanzíbar crecen todas las especias, y los vestigios de su pasado aparecen a lo largo de carreteras y caminos.",
              ], "zz7"),
            day(10,
              ["Zanzibar – vol retour", "Zanzibar – flight home", "Zanzíbar – vuelo de regreso"],
              [
                "Dernière matinée libre à l'hôtel et déjeuner libre. Transfert à l'aéroport et embarquement pour la France. Dîner et nuit à bord.",
                "A last free morning at the hotel, with lunch on your own. Transfer to the airport and board for France. Dinner and night on board.",
                "Última mañana libre en el hotel y almuerzo libre. Traslado al aeropuerto y embarque hacia Francia. Cena y noche a bordo.",
              ], "zz8"),
            day(11, T_HOME, HOME, "ev4"),
          ]
        ),
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
