// Namibia circuits — 3 journey-format trips for the existing "namibie" destination: a 4x4-truck
// group tour, a small-group 4x4 tour and a Victoria Falls – Chobe – Caprivi – Namibia crossing.
// One trip per circuit; year, direction and Victoria Falls / Fish River Canyon variants are
// described inside the trip. Prices are per-person "from" prices. Supplier product ids are in
// SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-namibie-circuits.ts
// Requires scripts/upload-images-namibie-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "namibie-decouverte-etosha-sossusvlei-12j": ["408438", "83519", "408599", "83538", "270198"],
  "namibie-couleurs-4x4-petit-groupe-14j": ["397464", "272478", "399639", "272498"],
  "namibie-victoria-chobe-caprivi-etosha-16j": ["408018", "272579", "408038", "272578"],
};

// ── Shared texts ──
const T_FLY: L3 = ["Envol pour la Namibie", "Flight to Namibia", "Vuelo a Namibia"];
const FLY: L3 = [
  "Embarquement sur un vol régulier à destination de Windhoek. Dîner et nuit à bord. Si votre vol arrive le jour même, une nuit supplémentaire à Windhoek peut être ajoutée en option.",
  "Board a scheduled flight to Windhoek. Dinner and night on board. If your flight lands the same day, an extra night in Windhoek can be added as an option.",
  "Embarque en un vuelo regular con destino a Windhoek. Cena y noche a bordo. Si su vuelo llega el mismo día, puede añadirse una noche adicional en Windhoek como opción.",
];
const T_WDH: L3 = ["Arrivée à Windhoek", "Arrival in Windhoek", "Llegada a Windhoek"];
const WDH: L3 = [
  "Arrivée à l'aéroport de Windhoek, transfert à l'hôtel et installation. Repas libres.",
  "Arrive at Windhoek airport, transfer to the hotel and check in. Meals on your own.",
  "Llegada al aeropuerto de Windhoek, traslado al hotel e instalación. Comidas libres.",
];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_WDH_HOME: L3 = ["Windhoek – vol retour", "Windhoek – flight home", "Windhoek – vuelo de regreso"];
const WDH_HOME: L3 = [
  "Matinée libre, puis transfert à l'aéroport international de Windhoek selon l'horaire du vol. Repas et nuit à bord.",
  "A free morning, then transfer to Windhoek international airport according to your flight time. Meals and night on board.",
  "Mañana libre y traslado al aeropuerto internacional de Windhoek según el horario del vuelo. Comidas y noche a bordo.",
];
const T_TWYFEL: L3 = ["Twyfelfontein – Swakopmund", "Twyfelfontein – Swakopmund", "Twyfelfontein – Swakopmund"];
const TWYFEL: L3 = [
  "Visite du site de Twyfelfontein, classé à l'Unesco, et de ses gravures rupestres vieilles de plusieurs milliers d'années, puis de la montagne Brûlée et des orgues basaltiques. Route vers la côte atlantique, avec la silhouette du Brandberg, plus haut sommet du pays. Arrivée à Swakopmund.",
  "Visit the UNESCO-listed site of Twyfelfontein and its rock engravings, several thousand years old, then the Burnt Mountain and the Organ Pipes. Drive to the Atlantic coast, with the outline of the Brandberg, the country's highest peak. Arrive in Swakopmund.",
  "Visita al sitio de Twyfelfontein, inscrito en la Unesco, y a sus grabados rupestres de varios miles de años, y después a la montaña Quemada y los tubos de órgano basálticos. Carretera hacia la costa atlántica, con la silueta del Brandberg, el pico más alto del país. Llegada a Swakopmund.",
];
const T_WALVIS: L3 = ["La lagune de Walvis Bay", "Walvis Bay lagoon", "La laguna de Walvis Bay"];
const T_SOSSUS: L3 = ["Sossusvlei, Dead Vlei et Sesriem", "Sossusvlei, Dead Vlei and Sesriem", "Sossusvlei, Dead Vlei y Sesriem"];
const SOSSUS: L3 = [
  "Départ avant l'aube pour Sossusvlei et ses dunes, parmi les plus hautes du monde, dont certaines dépassent 300 m. Découverte de Dead Vlei, cuvette d'argile blanche plantée d'arbres morts. Les derniers kilomètres se font en navette 4x4. L'après-midi, le canyon de Sesriem, creusé par la rivière Tsauchab.",
  "Leave before dawn for Sossusvlei and its dunes, among the highest in the world, some over 300 m. Discover Dead Vlei, a white clay pan dotted with dead trees. The last kilometres are covered by 4x4 shuttle. In the afternoon, Sesriem Canyon, carved by the Tsauchab River.",
  "Salida antes del amanecer hacia Sossusvlei y sus dunas, de las más altas del mundo, algunas de más de 300 m. Descubrimiento de Dead Vlei, una hondonada de arcilla blanca salpicada de árboles muertos. Los últimos kilómetros se recorren en lanzadera 4x4. Por la tarde, el cañón de Sesriem, excavado por el río Tsauchab.",
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "namibie",
    imagePrefix: "namibie",
    season: { label: ["Mai à oct", "May to Oct", "May a oct"], months: "may,june,july,august,september,october" },
  });

  const journeyTrips = [
    // ───────────── 1. Découverte de la Namibie — 12J/9N ─────────────
    trip({
      slug: "namibie-decouverte-etosha-sossusvlei-12j",
      name: [
        "Namibie : Etosha, Damaraland, Sossusvlei et Kalahari",
        "Namibia: Etosha, Damaraland, Sossusvlei and the Kalahari",
        "Namibia: Etosha, Damaraland, Sossusvlei y el Kalahari",
      ],
      tagline: [
        "Le grand tour du pays en camion 4x4, des safaris d'Etosha aux dunes du Namib",
        "The great tour of the country by 4x4 truck, from Etosha safaris to the Namib dunes",
        "La gran vuelta al país en camión 4x4, de los safaris de Etosha a las dunas del Namib",
      ],
      description: [
        "La Namibie en douze jours, à bord d'un camion 4x4 conçu pour les pistes du pays, en groupe de 22 personnes au plus avec un guide francophone. Deux jours de safari dans le parc d'Etosha, la rencontre d'un village himba, les gravures de Twyfelfontein, une sortie en bateau sur la lagune de Walvis Bay, les dunes de Sossusvlei et une marche avec les Bushmen à la lisière du Kalahari. Le voyage existe aussi avec trois jours aux chutes Victoria (à partir de 4 963 € par personne) ou, en 2026, avec Lüderitz et le Fish River Canyon (15 jours, à partir de 6 069 €). À partir de 9 ans ; bagages souples obligatoires.",
        "Namibia in twelve days, aboard a 4x4 truck built for the country's tracks, in a group of 22 at most with a French-speaking guide. Two days of safari in Etosha park, a visit to a Himba village, the engravings of Twyfelfontein, a boat trip on Walvis Bay lagoon, the dunes of Sossusvlei and a walk with the Bushmen on the edge of the Kalahari. The trip is also available with three days at Victoria Falls (from €4,963 per person) or, in 2026, with Lüderitz and the Fish River Canyon (15 days, from €6,069). From age 9; soft bags required.",
        "Namibia en doce días, a bordo de un camión 4x4 pensado para las pistas del país, en grupo de 22 personas como máximo con guía francófono. Dos días de safari en el parque de Etosha, la visita a una aldea himba, los grabados de Twyfelfontein, una salida en barco por la laguna de Walvis Bay, las dunas de Sossusvlei y una caminata con los bosquimanos en el borde del Kalahari. El viaje existe también con tres días en las cataratas Victoria (desde 4.963 € por persona) o, en 2026, con Lüderitz y el Fish River Canyon (15 días, desde 6.069 €). A partir de 9 años; equipaje blando obligatorio.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,9 nuits en hôtels et lodges 3* et 4*,Pension selon programme,Transport en camion 4x4,Sortie en bateau à Walvis Bay,Guide accompagnateur francophone",
        "Flights from France,Airport transfers,9 nights in 3* and 4* hotels and lodges,Meals as per programme,Transport by 4x4 truck,Boat trip in Walvis Bay,French-speaking tour guide",
        "Vuelos desde Francia,Traslados al aeropuerto,9 noches en hoteles y lodges de 3* y 4*,Comidas según programa,Transporte en camión 4x4,Salida en barco en Walvis Bay,Guía acompañante francófono",
      ],
      price: 2994, nights: 9, departureFrom: "Francfort", image: "dn2",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 22, order: -92000,
      chapters: [
        chapter(
          ["Windhoek et le parc d'Etosha", "Windhoek and Etosha park", "Windhoek y el parque de Etosha"],
          [
            "Deux jours dans le plus grand parc animalier du pays, autour du grand pan blanc d'Etosha : 114 espèces de mammifères et 340 d'oiseaux.",
            "Two days in the country's largest wildlife park, around the great white Etosha pan: 114 mammal species and 340 bird species.",
            "Dos días en el mayor parque de fauna del país, alrededor de la gran salina blanca de Etosha: 114 especies de mamíferos y 340 de aves.",
          ],
          ["dn3", "dn4", "cn2", "ta4"],
          [
            day(1, T_FLY, FLY, "dn5"),
            day(2, T_WDH, WDH, "dn5"),
            day(3,
              ["Windhoek – Etosha Est", "Windhoek – eastern Etosha", "Windhoek – Etosha este"],
              [
                "Route vers le parc d'Etosha (300 km), déjeuner dans un rest camp et premier safari avec le véhicule du circuit. Dîner et nuit au camp. En option, à régler à la réservation : safari d'une demi-journée en 4x4 ouvert avec un ranger.",
                "Drive to Etosha park (300 km), lunch in a rest camp and a first game drive in the tour vehicle. Dinner and night at camp. Optional, paid at booking: a half-day safari in an open 4x4 with a ranger.",
                "Carretera hacia el parque de Etosha (300 km), almuerzo en un rest camp y primer safari con el vehículo del circuito. Cena y noche en el campamento. Opcional, a pagar al reservar: safari de media jornada en 4x4 abierto con un ranger.",
              ], "dn3"),
            day(4,
              ["Une journée dans Etosha", "A day in Etosha", "Una jornada en Etosha"],
              [
                "Journée de safari à travers le centre et le sud du parc. Etosha, « le grand espace blanc », doit son nom à son pan de 120 km sur 72. Déjeuner dans un rest camp et nuit au camp. En option : safari d'une journée en 4x4 ouvert avec un ranger.",
                "A day's safari across the centre and south of the park. Etosha, 'the great white place', owes its name to its pan, 120 km by 72. Lunch in a rest camp and night at camp. Optional: a full-day safari in an open 4x4 with a ranger.",
                "Jornada de safari por el centro y el sur del parque. Etosha, «el gran lugar blanco», debe su nombre a su salina de 120 por 72 km. Almuerzo en un rest camp y noche en el campamento. Opcional: safari de un día en 4x4 abierto con un ranger.",
              ], "cn2"),
          ]
        ),
        chapter(
          ["Le Damaraland et la côte", "Damaraland and the coast", "Damaraland y la costa"],
          [
            "Les Himbas, les gravures de Twyfelfontein, puis l'océan Atlantique à Swakopmund et Walvis Bay.",
            "The Himba, the engravings of Twyfelfontein, then the Atlantic Ocean at Swakopmund and Walvis Bay.",
            "Los himba, los grabados de Twyfelfontein y el océano Atlántico en Swakopmund y Walvis Bay.",
          ],
          ["dn6", "dn8", "cn3", "dn7"],
          [
            day(5,
              ["Village himba – Twyfelfontein", "Himba village – Twyfelfontein", "Aldea himba – Twyfelfontein"],
              [
                "Départ pour le Damaraland et visite d'un village himba, à la rencontre de ce peuple d'éleveurs. Déjeuner, puis continuation vers Twyfelfontein.",
                "Leave for Damaraland and visit a Himba village, meeting these herding people. Lunch, then continue to Twyfelfontein.",
                "Salida hacia Damaraland y visita a una aldea himba, al encuentro de este pueblo de pastores. Almuerzo y continuación hacia Twyfelfontein.",
              ], "dn6"),
            day(6, T_TWYFEL, TWYFEL, "cn3"),
            day(7,
              ["Walvis Bay – le désert du Namib", "Walvis Bay – the Namib desert", "Walvis Bay – el desierto del Namib"],
              [
                "Sortie en bateau sur la lagune de Walvis Bay, avec un brunch à bord, à la recherche des manchots du Cap, des dauphins et, selon la saison, des baleines. Route vers le désert du Namib.",
                "A boat trip on Walvis Bay lagoon, with brunch on board, looking for Cape penguins, dolphins and, in season, whales. Drive to the Namib desert.",
                "Salida en barco por la laguna de Walvis Bay, con brunch a bordo, en busca de pingüinos del Cabo, delfines y, según la temporada, ballenas. Carretera hacia el desierto del Namib.",
              ], "dn7"),
          ]
        ),
        chapter(
          ["Le Namib et le Kalahari", "The Namib and the Kalahari", "El Namib y el Kalahari"],
          [
            "Le plus vieux désert du monde, puis la terre ancestrale des Bushmen à la lisière du Kalahari.",
            "The oldest desert in the world, then the ancestral land of the Bushmen on the edge of the Kalahari.",
            "El desierto más antiguo del mundo y la tierra ancestral de los bosquimanos en el borde del Kalahari.",
          ],
          ["dn2", "cn1", "dn9", "dn1"],
          [
            day(8, T_SOSSUS, SOSSUS, "dn2"),
            day(9,
              ["Le Kalahari et les Bushmen", "The Kalahari and the Bushmen", "El Kalahari y los bosquimanos"],
              [
                "Route vers Mariental, à la lisière du désert du Kalahari, terre ancestrale des Bushmen. Après le déjeuner, marche guidée à la découverte des coutumes de ce peuple nomade.",
                "Drive to Mariental, on the edge of the Kalahari desert, ancestral land of the Bushmen. After lunch, a guided walk to learn the customs of these nomadic people.",
                "Carretera hacia Mariental, en el borde del desierto del Kalahari, tierra ancestral de los bosquimanos. Tras el almuerzo, caminata guiada para conocer las costumbres de este pueblo nómada.",
              ], "dn9"),
            day(10,
              ["Mariental – Windhoek", "Mariental – Windhoek", "Mariental – Windhoek"],
              [
                "Matinée libre et déjeuner au lodge, puis route vers Windhoek (330 km). Dîner et nuit à l'hôtel.",
                "A free morning and lunch at the lodge, then drive to Windhoek (330 km). Dinner and night at the hotel.",
                "Mañana libre y almuerzo en el lodge, y carretera hacia Windhoek (330 km). Cena y noche en el hotel.",
              ], "dn1"),
            day(11, T_WDH_HOME, WDH_HOME, "dn5"),
            day(12, T_HOME, HOME, "dn2"),
          ]
        ),
      ],
    }),

    // ───────────── 2. Couleurs de Namibie — 14J/11N ─────────────
    trip({
      slug: "namibie-couleurs-4x4-petit-groupe-14j",
      name: [
        "Namibie en 4x4 et petit groupe : Etosha, éléphants du désert et Sossusvlei",
        "Namibia by 4x4 in a Small Group: Etosha, Desert Elephants and Sossusvlei",
        "Namibia en 4x4 y grupo reducido: Etosha, elefantes del desierto y Sossusvlei",
      ],
      tagline: [
        "Huit voyageurs au plus par véhicule et deux journées et demie de safari à Etosha",
        "Eight travellers at most per vehicle and two and a half days of safari in Etosha",
        "Ocho viajeros como máximo por vehículo y dos jornadas y media de safari en Etosha",
      ],
      description: [
        "Les sites incontournables de la Namibie, en véhicule 4x4 de dix places avec huit voyageurs au plus. Le temps passé sur place est plus long qu'ailleurs : deux journées et demie de safari en 4x4 ouvert à Etosha, une sortie dans le lit asséché de la rivière Aba-Huab à la recherche des éléphants du désert, le musée vivant des Damaras, deux nuits à Swakopmund, puis Dead Vlei, Sesriem et un safari au coucher du soleil dans le Namib. Extension possible aux chutes Victoria (16 jours, à partir de 5 799 € par personne). À partir de 9 ans ; bagages souples obligatoires.",
        "Namibia's must-see sites, in a ten-seat 4x4 with eight travellers at most. More time is spent on the ground than elsewhere: two and a half days of safari in an open 4x4 in Etosha, an outing in the dry bed of the Aba-Huab River in search of desert elephants, the Damara Living Museum, two nights in Swakopmund, then Dead Vlei, Sesriem and a sunset drive in the Namib. Possible extension to Victoria Falls (16 days, from €5,799 per person). From age 9; soft bags required.",
        "Los lugares imprescindibles de Namibia, en un 4x4 de diez plazas con ocho viajeros como máximo. Se pasa más tiempo en cada lugar que en otros circuitos: dos jornadas y media de safari en 4x4 abierto en Etosha, una salida por el lecho seco del río Aba-Huab en busca de los elefantes del desierto, el museo vivo de los damara, dos noches en Swakopmund y Dead Vlei, Sesriem y un safari al atardecer en el Namib. Extensión posible a las cataratas Victoria (16 días, desde 5.799 € por persona). A partir de 9 años; equipaje blando obligatorio.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,11 nuits en hôtels et lodges 3*,Pension selon programme,Véhicule 4x4 de 10 places,Safaris en 4x4 ouvert à Etosha,Sortie en bateau à Walvis Bay,Guide francophone",
        "Flights from France,Airport transfers,11 nights in 3* hotels and lodges,Meals as per programme,10-seat 4x4 vehicle,Open 4x4 safaris in Etosha,Boat trip in Walvis Bay,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,11 noches en hoteles y lodges de 3*,Comidas según programa,Vehículo 4x4 de 10 plazas,Safaris en 4x4 abierto en Etosha,Salida en barco en Walvis Bay,Guía francófono",
      ],
      price: 4092, nights: 11, departureFrom: "Bruxelles", image: "cn1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 8, order: -91999,
      chapters: [
        chapter(
          ["Etosha", "Etosha", "Etosha"],
          [
            "Trois nuits autour du parc d'Etosha, de l'est au sud, avec des safaris en 4x4 ouvert.",
            "Three nights around Etosha park, from east to south, with safaris in an open 4x4.",
            "Tres noches alrededor del parque de Etosha, de este a sur, con safaris en 4x4 abierto.",
          ],
          ["cn2", "dn3", "ta4", "dn4"],
          [
            day(1, T_FLY, FLY, "dn5"),
            day(2, T_WDH, WDH, "dn5"),
            day(3,
              ["Windhoek – Etosha et premier safari", "Windhoek – Etosha and a first safari", "Windhoek – Etosha y primer safari"],
              [
                "Route vers le parc d'Etosha (500 km), déjeuner au lodge, puis premier safari en 4x4 ouvert dans le parc national.",
                "Drive to Etosha park (500 km), lunch at the lodge, then a first safari in an open 4x4 in the national park.",
                "Carretera hacia el parque de Etosha (500 km), almuerzo en el lodge y primer safari en 4x4 abierto por el parque nacional.",
              ], "dn3"),
            day(4,
              ["Etosha Est et Centre", "Eastern and central Etosha", "Etosha este y centro"],
              [
                "Journée de safari en 4x4 ouvert dans l'est et le centre du parc, le plus grand de Namibie : 114 espèces de mammifères et 340 d'oiseaux. Déjeuner dans un camp du parc.",
                "A day's safari in an open 4x4 in the east and centre of the park, the largest in Namibia: 114 mammal species and 340 bird species. Lunch in one of the park's camps.",
                "Jornada de safari en 4x4 abierto por el este y el centro del parque, el mayor de Namibia: 114 especies de mamíferos y 340 de aves. Almuerzo en uno de los campamentos del parque.",
              ], "cn2"),
            day(5,
              ["Etosha Centre et Sud – Okaukuejo", "Central and southern Etosha – Okaukuejo", "Etosha centro y sur – Okaukuejo"],
              [
                "Nouvelle journée de safari en 4x4 avec un ranger, en direction d'Okaukuejo, au sud du parc, réputé pour son point d'eau.",
                "Another day's safari by 4x4 with a ranger, heading for Okaukuejo in the south of the park, known for its waterhole.",
                "Nueva jornada de safari en 4x4 con un ranger, en dirección a Okaukuejo, al sur del parque, conocido por su abrevadero.",
              ], "ta4"),
          ]
        ),
        chapter(
          ["Le Damaraland", "Damaraland", "Damaraland"],
          [
            "Des terres reculées où vivent les éléphants du désert, les Himbas et les Damaras, l'un des plus anciens peuples du pays.",
            "Remote lands home to the desert elephants, the Himba and the Damara, one of the oldest peoples of the country.",
            "Tierras remotas donde viven los elefantes del desierto, los himba y los damara, uno de los pueblos más antiguos del país.",
          ],
          ["cn4", "dn8", "cn3", "dn5"],
          [
            day(6,
              ["Village himba – Twyfelfontein", "Himba village – Twyfelfontein", "Aldea himba – Twyfelfontein"],
              [
                "Départ matinal vers le Damaraland et visite d'un village himba en chemin. Déjeuner, puis installation au lodge de Twyfelfontein.",
                "An early start for Damaraland, visiting a Himba village on the way. Lunch, then check in at the Twyfelfontein lodge.",
                "Salida temprana hacia Damaraland, con visita a una aldea himba en el camino. Almuerzo e instalación en el lodge de Twyfelfontein.",
              ], "cn4"),
            day(7,
              ["Les éléphants du désert et les Damaras", "The desert elephants and the Damara", "Los elefantes del desierto y los damara"],
              [
                "Safari en 4x4 dans les régions reculées du Damaraland et le lit asséché de la rivière Aba-Huab, à la recherche des éléphants du désert. Pique-nique, puis visite du Damara Living Museum, consacré à la culture de ce peuple de chasseurs-cueilleurs.",
                "A 4x4 safari in the remote parts of Damaraland and the dry bed of the Aba-Huab River, in search of desert elephants. A picnic, then a visit to the Damara Living Museum, devoted to the culture of these hunter-gatherers.",
                "Safari en 4x4 por las zonas remotas de Damaraland y el lecho seco del río Aba-Huab, en busca de los elefantes del desierto. Pícnic y visita al Damara Living Museum, dedicado a la cultura de este pueblo de cazadores-recolectores.",
              ], "dn8"),
            day(8, T_TWYFEL, TWYFEL, "cn3"),
          ]
        ),
        chapter(
          ["Swakopmund et le Namib", "Swakopmund and the Namib", "Swakopmund y el Namib"],
          [
            "Deux nuits sur la côte, puis deux dans le désert du Namib, avec Dead Vlei au lever du jour.",
            "Two nights on the coast, then two in the Namib desert, with Dead Vlei at sunrise.",
            "Dos noches en la costa y dos en el desierto del Namib, con Dead Vlei al amanecer.",
          ],
          ["dn7", "dn2", "cn1", "ta2", "cn5"],
          [
            day(9,
              [...T_WALVIS] as L3,
              [
                "Départ matinal pour Walvis Bay et sortie en bateau à la rencontre des dauphins, des otaries et des oiseaux, avec un brunch à bord. Après-midi libre à Swakopmund, ville baignée par le brouillard côtier, et dîner face à l'océan.",
                "An early start for Walvis Bay and a boat trip to see dolphins, seals and birds, with brunch on board. A free afternoon in Swakopmund, a town wrapped in coastal fog, and dinner facing the ocean.",
                "Salida temprana hacia Walvis Bay y salida en barco para ver delfines, otarios y aves, con brunch a bordo. Tarde libre en Swakopmund, ciudad envuelta en la niebla costera, y cena frente al océano.",
              ], "dn7"),
            day(10,
              ["Le canyon du Kuiseb – le Namib", "The Kuiseb canyon – the Namib", "El cañón del Kuiseb – el Namib"],
              [
                "Route par le canyon du Kuiseb, qui sépare les plaines rocailleuses du nord de la mer de sable du sud, puis traversée du parc du Namib-Naukluft. Excursion en 4x4 au coucher du soleil dans la concession du lodge.",
                "Drive via the Kuiseb canyon, which separates the stony plains of the north from the sand sea of the south, then cross the Namib-Naukluft park. A sunset 4x4 drive in the lodge's concession.",
                "Carretera por el cañón del Kuiseb, que separa las llanuras pedregosas del norte del mar de arena del sur, y travesía del parque del Namib-Naukluft. Salida en 4x4 al atardecer por la concesión del lodge.",
              ], "cn1"),
            day(11, T_SOSSUS, SOSSUS, "dn2"),
            day(12,
              ["Le Namib – Windhoek", "The Namib – Windhoek", "El Namib – Windhoek"],
              [
                "Matinée libre et déjeuner au lodge, puis route vers Windhoek.",
                "A free morning and lunch at the lodge, then drive to Windhoek.",
                "Mañana libre y almuerzo en el lodge, y carretera hacia Windhoek.",
              ], "cn5"),
            day(13, T_WDH_HOME, WDH_HOME, "dn5"),
            day(14, T_HOME, HOME, "cn1"),
          ]
        ),
      ],
    }),

    // ───────────── 3. Trésors d'Afrique Australe — 16J/13N ─────────────
    trip({
      slug: "namibie-victoria-chobe-caprivi-etosha-16j",
      name: [
        "Des chutes Victoria à la Namibie par Chobe et la bande de Caprivi",
        "From Victoria Falls to Namibia via Chobe and the Caprivi Strip",
        "De las cataratas Victoria a Namibia por Chobe y la franja de Caprivi",
      ],
      tagline: [
        "Trois pays, cinq safaris et la Namibie de bout en bout, à huit voyageurs par véhicule",
        "Three countries, five safaris and Namibia end to end, eight travellers per vehicle",
        "Tres países, cinco safaris y Namibia de punta a punta, con ocho viajeros por vehículo",
      ],
      description: [
        "Une traversée de l'Afrique australe en seize jours. Le voyage commence aux chutes Victoria, côté Zimbabwe, avec une croisière sur le Zambèze, passe au Botswana pour deux safaris à Chobe, l'un en bateau, l'autre en 4x4, puis suit la bande de Caprivi et ses rivières, entre le parc de Bwabwata et l'Okavango. Il traverse ensuite toute la Namibie : Etosha, les éléphants du désert, Twyfelfontein, Walvis Bay, Sossusvlei et une dégustation de vins namibiens avant Windhoek. Huit voyageurs au plus par véhicule 4x4. Le circuit existe aussi en sens inverse, de Windhoek aux chutes Victoria (à partir de 6 405 € par personne).",
        "A crossing of southern Africa in sixteen days. The trip begins at Victoria Falls, on the Zimbabwe side, with a cruise on the Zambezi, crosses into Botswana for two safaris in Chobe, one by boat and one by 4x4, then follows the Caprivi Strip and its rivers, between Bwabwata park and the Okavango. It then crosses the whole of Namibia: Etosha, the desert elephants, Twyfelfontein, Walvis Bay, Sossusvlei and a tasting of Namibian wines before Windhoek. Eight travellers at most per 4x4. The tour also runs in reverse, from Windhoek to Victoria Falls (from €6,405 per person).",
        "Una travesía de África austral en dieciséis días. El viaje empieza en las cataratas Victoria, del lado de Zimbabue, con un crucero por el Zambeze, pasa a Botsuana para dos safaris en Chobe, uno en barco y otro en 4x4, y sigue la franja de Caprivi y sus ríos, entre el parque de Bwabwata y el Okavango. Después atraviesa toda Namibia: Etosha, los elefantes del desierto, Twyfelfontein, Walvis Bay, Sossusvlei y una cata de vinos namibios antes de Windhoek. Ocho viajeros como máximo por 4x4. El circuito existe también en sentido inverso, de Windhoek a las cataratas Victoria (desde 6.405 € por persona).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,13 nuits en lodges et hôtels 3*,Pension selon programme,Véhicule 4x4 de 10 places,5 safaris dont un en bateau à Chobe,Croisières sur le Zambèze et l'Okavango,Guide francophone en Namibie",
        "Flights from France,Airport transfers,13 nights in 3* lodges and hotels,Meals as per programme,10-seat 4x4 vehicle,5 safaris including a boat safari in Chobe,Cruises on the Zambezi and the Okavango,French-speaking guide in Namibia",
        "Vuelos desde Francia,Traslados al aeropuerto,13 noches en lodges y hoteles de 3*,Comidas según programa,Vehículo 4x4 de 10 plazas,5 safaris incluido uno en barco en Chobe,Cruceros por el Zambeze y el Okavango,Guía francófono en Namibia",
      ],
      price: 6317, nights: 13, departureFrom: "Paris", image: "ta3",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 8, order: -91998,
      chapters: [
        chapter(
          ["Les chutes Victoria et Chobe", "Victoria Falls and Chobe", "Las cataratas Victoria y Chobe"],
          [
            "Le Zimbabwe et le Botswana : le Zambèze au coucher du soleil, les chutes à pied, puis les éléphants de la rivière Chobe.",
            "Zimbabwe and Botswana: the Zambezi at sunset, the falls on foot, then the elephants of the Chobe River.",
            "Zimbabue y Botsuana: el Zambeze al atardecer, las cataratas a pie y los elefantes del río Chobe.",
          ],
          ["ta3", "ta8", "ta1"],
          [
            day(1, ["Envol pour les chutes Victoria", "Flight to Victoria Falls", "Vuelo a las cataratas Victoria"],
              ["Envol à destination de Victoria Falls. Dîner et nuit à bord.", "Flight to Victoria Falls. Dinner and night on board.", "Vuelo con destino a Victoria Falls. Cena y noche a bordo."], "ta3"),
            day(2,
              ["Victoria Falls et croisière sur le Zambèze", "Victoria Falls and a Zambezi cruise", "Victoria Falls y crucero por el Zambeze"],
              [
                "Arrivée et transfert au lodge. En fin de journée, croisière au coucher du soleil sur le Zambèze.",
                "Arrive and transfer to the lodge. Late in the day, a sunset cruise on the Zambezi.",
                "Llegada y traslado al lodge. Al final del día, crucero al atardecer por el Zambeze.",
              ], "ta1"),
            day(3,
              ["Les chutes Victoria – safari en bateau à Chobe", "Victoria Falls – a boat safari in Chobe", "Las cataratas Victoria – safari en barco en Chobe"],
              [
                "Visite des chutes Victoria côté Zimbabwe avec un guide. Transfert vers Chobe, au Botswana, et safari en bateau à moteur sur la rivière Chobe, lieu de rendez-vous des éléphants.",
                "Visit Victoria Falls on the Zimbabwe side with a guide. Transfer to Chobe in Botswana and a motorboat safari on the Chobe River, where the elephants gather.",
                "Visita a las cataratas Victoria del lado de Zimbabue con un guía. Traslado a Chobe, en Botsuana, y safari en lancha por el río Chobe, punto de encuentro de los elefantes.",
              ], "ta3"),
          ]
        ),
        chapter(
          ["La bande de Caprivi", "The Caprivi Strip", "La franja de Caprivi"],
          [
            "Le pays de l'eau, au nord-est de la Namibie : le parc de Bwabwata, les rives de l'Okavango et des lodges posés au bord des rivières.",
            "The land of water, in north-eastern Namibia: Bwabwata park, the banks of the Okavango and lodges set beside the rivers.",
            "La tierra del agua, al noreste de Namibia: el parque de Bwabwata, las orillas del Okavango y lodges a orillas de los ríos.",
          ],
          ["ta7", "ta8", "ta1"],
          [
            day(4,
              ["Safari à Chobe – Kongola", "Safari in Chobe – Kongola", "Safari en Chobe – Kongola"],
              [
                "Safari en 4x4 matinal dans le parc de Chobe avec un ranger, puis passage de la frontière namibienne, où votre guide francophone vous rejoint. Route vers Kongola, sur la bande de Caprivi, et premier safari dans le parc de Bwabwata.",
                "An early 4x4 safari in Chobe park with a ranger, then cross the Namibian border, where your French-speaking guide joins you. Drive to Kongola on the Caprivi Strip and a first safari in Bwabwata park.",
                "Safari en 4x4 matinal por el parque de Chobe con un ranger y paso de la frontera namibia, donde se une su guía francófono. Carretera hacia Kongola, en la franja de Caprivi, y primer safari en el parque de Bwabwata.",
              ], "ta8"),
            day(5,
              ["Bwabwata et l'Okavango", "Bwabwata and the Okavango", "Bwabwata y el Okavango"],
              [
                "Route vers Divundu et safari dans le parc de Bwabwata. En fin de journée, croisière au coucher du soleil sur la rivière Okavango.",
                "Drive to Divundu and a safari in Bwabwata park. Late in the day, a sunset cruise on the Okavango River.",
                "Carretera hacia Divundu y safari en el parque de Bwabwata. Al final del día, crucero al atardecer por el río Okavango.",
              ], "ta7"),
            day(6,
              ["Mahangu – Rundu", "Mahangu – Rundu", "Mahangu – Rundu"],
              [
                "Safari dans la zone de Mahangu, à l'ouest du parc de Bwabwata, puis route vers Rundu, sur l'Okavango.",
                "A safari in the Mahangu area, in the west of Bwabwata park, then drive to Rundu, on the Okavango.",
                "Safari en la zona de Mahangu, al oeste del parque de Bwabwata, y carretera hacia Rundu, a orillas del Okavango.",
              ], "ta1"),
          ]
        ),
        chapter(
          ["Etosha et le Damaraland", "Etosha and Damaraland", "Etosha y Damaraland"],
          [
            "Le parc d'Etosha, réserve depuis 1907 et 23 000 km² aujourd'hui, puis les éléphants du désert et les gravures de Twyfelfontein.",
            "Etosha park, a reserve since 1907 and 23,000 km² today, then the desert elephants and the Twyfelfontein engravings.",
            "El parque de Etosha, reserva desde 1907 y hoy de 23.000 km², y los elefantes del desierto y los grabados de Twyfelfontein.",
          ],
          ["dn3", "cn2", "ta4", "cn3"],
          [
            day(7,
              ["Rundu – Etosha", "Rundu – Etosha", "Rundu – Etosha"],
              [
                "Départ matinal vers le parc national d'Etosha (530 km), l'un des plus beaux tableaux de la vie animale au monde. Arrivée au lodge en fin d'après-midi.",
                "An early start for Etosha National Park (530 km), one of the finest wildlife spectacles in the world. Arrive at the lodge in the late afternoon.",
                "Salida temprana hacia el parque nacional de Etosha (530 km), uno de los mejores escenarios de vida animal del mundo. Llegada al lodge a última hora de la tarde.",
              ], "dn4"),
            day(8,
              ["Une journée dans Etosha", "A day in Etosha", "Una jornada en Etosha"],
              [
                "Journée complète de safari dans le parc avec le véhicule et le guide du circuit, puis nuit dans un camp au sud du parc.",
                "A full day's safari in the park with the tour vehicle and guide, then a night in a camp in the south of the park.",
                "Jornada completa de safari por el parque con el vehículo y el guía del circuito, y noche en un campamento al sur del parque.",
              ], "dn3"),
            day(9,
              ["Les éléphants du désert – Twyfelfontein", "The desert elephants – Twyfelfontein", "Los elefantes del desierto – Twyfelfontein"],
              [
                "Départ pour le Damaraland et le lit de la rivière Aba-Huab, à la recherche des éléphants du désert. Pique-nique et nuit au lodge de Twyfelfontein.",
                "Leave for Damaraland and the bed of the Aba-Huab River, looking for desert elephants. A picnic and a night at the Twyfelfontein lodge.",
                "Salida hacia Damaraland y el lecho del río Aba-Huab, en busca de los elefantes del desierto. Pícnic y noche en el lodge de Twyfelfontein.",
              ], "cn2"),
            day(10,
              ["Les gravures de Twyfelfontein – Swakopmund", "The Twyfelfontein engravings – Swakopmund", "Los grabados de Twyfelfontein – Swakopmund"],
              [
                "Visite du site de Twyfelfontein, qui réunit près de 2 500 gravures rupestres vieilles de six mille ans. Route vers la côte atlantique et Swakopmund.",
                "Visit the Twyfelfontein site, home to nearly 2,500 rock engravings six thousand years old. Drive to the Atlantic coast and Swakopmund.",
                "Visita al sitio de Twyfelfontein, que reúne casi 2.500 grabados rupestres de seis mil años. Carretera hacia la costa atlántica y Swakopmund.",
              ], "cn3"),
          ]
        ),
        chapter(
          ["La côte, le Namib et Windhoek", "The coast, the Namib and Windhoek", "La costa, el Namib y Windhoek"],
          [
            "Walvis Bay, les dunes de Sossusvlei, puis un domaine viticole sur la route de Windhoek.",
            "Walvis Bay, the dunes of Sossusvlei, then a wine estate on the way to Windhoek.",
            "Walvis Bay, las dunas de Sossusvlei y una finca vinícola camino de Windhoek.",
          ],
          ["dn7", "ta2", "ta6", "cn5"],
          [
            day(11,
              [...T_WALVIS] as L3,
              [
                "Départ matinal pour Walvis Bay, principal port du pays, et sortie en bateau à la rencontre des dauphins, des otaries et des oiseaux, avec un brunch à bord. Après-midi libre, excursions en option sur place.",
                "An early start for Walvis Bay, the country's main port, and a boat trip to see dolphins, seals and birds, with brunch on board. A free afternoon, with optional excursions available locally.",
                "Salida temprana hacia Walvis Bay, principal puerto del país, y salida en barco para ver delfines, otarios y aves, con brunch a bordo. Tarde libre, con excursiones opcionales in situ.",
              ], "dn7"),
            day(12,
              ["Le canyon du Kuiseb – le Namib", "The Kuiseb canyon – the Namib", "El cañón del Kuiseb – el Namib"],
              [
                "Route vers le désert du Namib par le canyon du Kuiseb, limite entre les plaines rocailleuses du nord et la mer de sable du sud.",
                "Drive to the Namib desert via the Kuiseb canyon, the boundary between the stony plains of the north and the sand sea of the south.",
                "Carretera hacia el desierto del Namib por el cañón del Kuiseb, límite entre las llanuras pedregosas del norte y el mar de arena del sur.",
              ], "ta6"),
            day(13, T_SOSSUS, SOSSUS, "ta2"),
            day(14,
              ["Domaine viticole – Windhoek", "Wine estate – Windhoek", "Finca vinícola – Windhoek"],
              [
                "Visite d'une propriété viticole et dégustation de vins namibiens, puis route vers Windhoek (350 km).",
                "Visit a wine estate and taste Namibian wines, then drive to Windhoek (350 km).",
                "Visita a una finca vinícola y cata de vinos namibios, y carretera hacia Windhoek (350 km).",
              ], "cn5"),
            day(15, T_WDH_HOME, WDH_HOME, "dn5"),
            day(16, T_HOME, HOME, "ta3"),
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
