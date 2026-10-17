// United States, New York — 6 journey-format trips for the existing "etats-unis" destination: the
// supplier's New York city breaks. Longer stays (5, 6 or 7 nights), the Saint Patrick's Day dates
// and other hotels are described inside each trip. Prices are per-person "from" prices; several
// offers can be booked with or without flights. Supplier product ids are kept in SUPPLIER_REF.
// Run with:
//   npx tsx scripts/seed-trips-usa-new-york-circuits.ts
// Requires scripts/upload-images-usany-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "etats-unis-new-york-big-apple-6j": ["381018", "381078", "381079", "381081", "381659", "381661"],
  "etats-unis-new-york-big-apple-autrement-bronx-brooklyn-6j": ["380978", "380979", "380998", "380999"],
  "etats-unis-new-york-magie-manhattan-high-line-6j": ["395918", "396878", "94938", "95178"],
  "etats-unis-new-york-frenchies-city-pass-6j": ["417519", "418018", "417518", "221939", "204038"],
  "etats-unis-new-york-intimiste-7j": ["311758"],
  "etats-unis-new-york-noel-tresors-7j": ["359620"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_ARR: L3 = ["Arrivée à New York", "Arrival in New York", "Llegada a Nueva York"];
const ARR: L3 = ["Envol pour New York, accueil à l'aéroport et transfert à votre hôtel de Manhattan.", "Flight to New York, welcome at the airport and transfer to your Manhattan hotel.", "Vuelo a Nueva York, recibimiento en el aeropuerto y traslado a su hotel de Manhattan."];
const T_DEP: L3 = ["New York – vol retour", "New York – flight home", "Nueva York – vuelo de regreso"];
const DEP: L3 = ["Journée libre pour le shopping ou une dernière balade, puis transfert à l'aéroport et envol pour la France.", "A free day for shopping or a last walk, then transfer to the airport and fly to France.", "Jornada libre para las compras o un último paseo, traslado al aeropuerto y vuelo a Francia."];
const T_MANHATTAN: L3 = ["Manhattan, le pont de Brooklyn et Dumbo", "Manhattan, Brooklyn Bridge and Dumbo", "Manhattan, el puente de Brooklyn y Dumbo"];
const MANHATTAN: L3 = [
  "Tour de Manhattan : Times Square, la 5e Avenue, le Flatiron, Wall Street et le mémorial du 11 Septembre, puis la traversée à pied du pont de Brooklyn jusqu'à Dumbo et sa vue sur la skyline.",
  "A tour of Manhattan: Times Square, Fifth Avenue, the Flatiron, Wall Street and the 9/11 memorial, then a walk across Brooklyn Bridge to Dumbo and its skyline view.",
  "Vuelta por Manhattan: Times Square, la Quinta Avenida, el Flatiron, Wall Street y el memorial del 11-S, y el cruce a pie del puente de Brooklyn hasta Dumbo y su vista del skyline.",
];
const T_HARLEM: L3 = ["Harlem, messe gospel et Central Park", "Harlem, a gospel service and Central Park", "Harlem, misa gospel y Central Park"];
const HARLEM: L3 = [
  "Harlem, capitale de la culture afro-américaine : le quartier de Sugar Hill, l'Apollo Theater et une messe gospel, puis Central Park. En option, le Top of the Rock au coucher du soleil.",
  "Harlem, capital of African-American culture: the Sugar Hill district, the Apollo Theater and a gospel service, then Central Park. As an option, Top of the Rock at sunset.",
  "Harlem, capital de la cultura afroamericana: el barrio de Sugar Hill, el Apollo Theater y una misa gospel, y Central Park. Opcional: el Top of the Rock al atardecer.",
];
const T_LIBERTY: L3 = ["La statue de la Liberté et Ellis Island", "The Statue of Liberty and Ellis Island", "La estatua de la Libertad y Ellis Island"];
const LIBERTY: L3 = [
  "En métro jusqu'à Battery Park, puis le ferry pour la statue de la Liberté et le musée de l'immigration d'Ellis Island. En option, le musée du 11 Septembre.",
  "By metro to Battery Park, then the ferry to the Statue of Liberty and the Ellis Island immigration museum. As an option, the 9/11 museum.",
  "En metro hasta Battery Park y el ferri a la estatua de la Libertad y el museo de la inmigración de Ellis Island. Opcional: el museo del 11-S.",
];
const T_HIGHLINE: L3 = ["Hudson Yards, la High Line et Chelsea Market", "Hudson Yards, the High Line and Chelsea Market", "Hudson Yards, la High Line y Chelsea Market"];
const HIGHLINE: L3 = [
  "Le quartier de Hudson Yards et le Vessel, puis la High Line, promenade plantée sur une ancienne voie ferrée, jusqu'au Chelsea Market.",
  "The Hudson Yards district and the Vessel, then the High Line, a park on an old elevated railway, down to Chelsea Market.",
  "El barrio de Hudson Yards y el Vessel, y la High Line, paseo verde sobre una antigua vía férrea, hasta Chelsea Market.",
];
const T_FREE: L3 = ["New York, journée libre", "New York, free day", "Nueva York, jornada libre"];
const FREE: L3 = ["Journée libre : musées, shopping sur la 5e Avenue ou balade dans Greenwich Village.", "A free day: museums, shopping on Fifth Avenue or a stroll in Greenwich Village.", "Jornada libre: museos, compras en la Quinta Avenida o paseo por Greenwich Village."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "etats-unis",
    imagePrefix: "usany",
    season: { label: ["Avr-juin, sept-déc", "Apr-June, Sept-Dec", "Abr-jun, sept-dic"], months: "april,may,june,september,october,november,december" },
  });
  const NYC: L3 = ["New York", "New York", "Nueva York"];

  const journeyTrips = [
    // ───────────── 1. Big Apple — 6J/4N ─────────────
    trip({
      slug: "etats-unis-new-york-big-apple-6j",
      name: ["Big Apple : New York en 4 nuits, de Manhattan à Harlem", "Big Apple: New York in 4 Nights, from Manhattan to Harlem", "Big Apple: Nueva York en 4 noches, de Manhattan a Harlem"],
      tagline: ["Trois journées guidées et un hôtel à Manhattan, avec ou sans vols", "Three guided days and a hotel in Manhattan, with or without flights", "Tres jornadas guiadas y un hotel en Manhattan, con o sin vuelos"],
      description: [
        "New York en petit groupe : le tour de Manhattan, le pont de Brooklyn et Dumbo, Harlem et une messe gospel, Central Park, puis la statue de la Liberté et Ellis Island, avec une dernière journée libre. Pack option avec le Top of the Rock et le musée du 11 Septembre. Séjour de 5 nuits à partir de 1 350 € par personne, 6 nuits (avec la High Line) 1 482 €, 7 nuits 1 589 € ; dates spéciales Saint-Patrick (défilé sur la 5e Avenue) à partir de 1 989 €.",
        "New York in a small group: a tour of Manhattan, Brooklyn Bridge and Dumbo, Harlem and a gospel service, Central Park, then the Statue of Liberty and Ellis Island, with a last free day. An option pack with Top of the Rock and the 9/11 museum. 5-night stay from €1,350 per person, 6 nights (with the High Line) €1,482, 7 nights €1,589; special Saint Patrick's Day dates (parade on Fifth Avenue) from €1,989.",
        "Nueva York en grupo reducido: la vuelta por Manhattan, el puente de Brooklyn y Dumbo, Harlem y una misa gospel, Central Park, y la estatua de la Libertad y Ellis Island, con una última jornada libre. Pack opcional con el Top of the Rock y el museo del 11-S. Estancia de 5 noches desde 1.350 € por persona, 6 noches (con la High Line) 1.482 €, 7 noches 1.589 €; fechas especiales de San Patricio (desfile en la Quinta Avenida) desde 1.989 €.",
      ],
      includes: [
        "Vols depuis la France (en option),Transferts aéroport,4 nuits en hôtel à Manhattan,Petits-déjeuners,Visites guidées du programme",
        "Flights from France (optional),Airport transfers,4 nights in a Manhattan hotel,Breakfasts,Guided visits in the programme",
        "Vuelos desde Francia (opcionales),Traslados al aeropuerto,4 noches en hotel en Manhattan,Desayunos,Visitas guiadas del programa",
      ],
      price: 1173, nights: 4, departureFrom: "Barcelone", image: "ba1",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,family,solo", maxGuests: 49, order: -55000,
      chapters: [
        chapter([NYC[0], NYC[1], NYC[2]], ["Quatre nuits dans la Grosse Pomme.", "Four nights in the Big Apple.", "Cuatro noches en la Gran Manzana."],
          ["ba1", "ba2", "ba4", "ba6", "ba7"],
          [day(1, T_ARR, ARR, "ba6"), day(2, T_MANHATTAN, MANHATTAN, "ba1"), day(3, T_HARLEM, HARLEM, "ba2"), day(4, T_LIBERTY, LIBERTY, "ba4"), day(5, T_DEP, DEP, "ba7"), day(6, T_HOME, HOME, "ba3")]),
      ],
    }),

    // ───────────── 2. Big Apple autrement — 6J/4N ─────────────
    trip({
      slug: "etats-unis-new-york-big-apple-autrement-bronx-brooklyn-6j",
      name: ["New York autrement : le Bronx, Greenwich Village, Harlem et Brooklyn", "New York Differently: the Bronx, Greenwich Village, Harlem and Brooklyn", "Nueva York de otra manera: el Bronx, Greenwich Village, Harlem y Brooklyn"],
      tagline: ["Les quartiers que l'on voit moins, du berceau du hip-hop aux rues de Brooklyn", "The neighbourhoods fewer people see, from the birthplace of hip-hop to the streets of Brooklyn", "Los barrios menos vistos, de la cuna del hip-hop a las calles de Brooklyn"],
      description: [
        "Un deuxième regard sur New York, en petit groupe : le Bronx et South Bronx, berceau du hip-hop et du street art, Greenwich Village et SoHo, Harlem et sa messe gospel, Central Park, puis une journée entière à Brooklyn, de Dumbo aux quartiers créatifs. Séjour de 5 nuits à partir de 1 594 € par personne, 6 nuits 1 797 €, 7 nuits 1 939 €.",
        "A second look at New York, in a small group: the Bronx and South Bronx, birthplace of hip-hop and street art, Greenwich Village and SoHo, Harlem and its gospel service, Central Park, then a full day in Brooklyn, from Dumbo to the creative neighbourhoods. 5-night stay from €1,594 per person, 6 nights €1,797, 7 nights €1,939.",
        "Una segunda mirada a Nueva York, en grupo reducido: el Bronx y South Bronx, cuna del hip-hop y del arte urbano, Greenwich Village y SoHo, Harlem y su misa gospel, Central Park, y una jornada completa en Brooklyn, de Dumbo a los barrios creativos. Estancia de 5 noches desde 1.594 € por persona, 6 noches 1.797 €, 7 noches 1.939 €.",
      ],
      includes: [
        "Vols depuis la France (en option),Transferts aéroport,4 nuits en hôtel à Manhattan,Petits-déjeuners,Visites guidées du programme",
        "Flights from France (optional),Airport transfers,4 nights in a Manhattan hotel,Breakfasts,Guided visits in the programme",
        "Vuelos desde Francia (opcionales),Traslados al aeropuerto,4 noches en hotel en Manhattan,Desayunos,Visitas guiadas del programa",
      ],
      price: 1403, nights: 4, departureFrom: "Francfort", image: "au5",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,solo,groups", maxGuests: 49, order: -54999,
      chapters: [
        chapter([NYC[0], NYC[1], NYC[2]], ["Le Bronx, le Village, Harlem et Brooklyn.", "The Bronx, the Village, Harlem and Brooklyn.", "El Bronx, el Village, Harlem y Brooklyn."],
          ["au5", "au1", "ba5", "fr7"],
          [
            day(1, T_ARR, ARR, "au5"),
            day(2, ["Le Bronx, Greenwich Village et SoHo", "The Bronx, Greenwich Village and SoHo", "El Bronx, Greenwich Village y SoHo"], ["En bus dans le Bronx et le South Bronx, berceau du hip-hop et du street art, puis Greenwich Village et les immeubles en fonte de SoHo.", "By bus through the Bronx and South Bronx, birthplace of hip-hop and street art, then Greenwich Village and the cast-iron buildings of SoHo.", "En autobús por el Bronx y South Bronx, cuna del hip-hop y del arte urbano, y Greenwich Village y los edificios de hierro fundido de SoHo."], "fr7"),
            day(3, T_HARLEM, HARLEM, "ba2"),
            day(4, ["Brooklyn", "Brooklyn", "Brooklyn"], ["Journée entière à Brooklyn : Dumbo et sa vue sur Manhattan, Brooklyn Heights et les quartiers les plus créatifs du borough.", "A full day in Brooklyn: Dumbo and its view of Manhattan, Brooklyn Heights and the borough's most creative neighbourhoods.", "Jornada completa en Brooklyn: Dumbo y su vista sobre Manhattan, Brooklyn Heights y los barrios más creativos del distrito."], "ba5"),
            day(5, T_DEP, DEP, "au1"), day(6, T_HOME, HOME, "au5"),
          ]),
      ],
    }),

    // ───────────── 3. Magie de New York — 6J/4N ─────────────
    trip({
      slug: "etats-unis-new-york-magie-manhattan-high-line-6j",
      name: ["Magie de New York : Manhattan, la High Line, la statue de la Liberté et Harlem", "The Magic of New York: Manhattan, the High Line, the Statue of Liberty and Harlem", "Magia de Nueva York: Manhattan, la High Line, la estatua de la Libertad y Harlem"],
      tagline: ["Trois journées de visites guidées en français, en métro et en autobus", "Three days of visits guided in French, by metro and bus", "Tres jornadas de visitas guiadas en francés, en metro y autobús"],
      description: [
        "New York avec un guide francophone : Manhattan en autobus, de Times Square au Flatiron, et la High Line ; la statue de la Liberté et Brooklyn ; Harlem et Central Park. Vols, transferts et trajets en métro inclus. Séjour de 5 nuits à partir de 1 454 € par personne, 6 nuits 2 280 €, 7 nuits 2 470 €.",
        "New York with a French-speaking guide: Manhattan by bus, from Times Square to the Flatiron, and the High Line; the Statue of Liberty and Brooklyn; Harlem and Central Park. Flights, transfers and metro rides included. 5-night stay from €1,454 per person, 6 nights €2,280, 7 nights €2,470.",
        "Nueva York con un guía francófono: Manhattan en autobús, de Times Square al Flatiron, y la High Line; la estatua de la Libertad y Brooklyn; Harlem y Central Park. Vuelos, traslados y trayectos en metro incluidos. Estancia de 5 noches desde 1.454 € por persona, 6 noches 2.280 €, 7 noches 2.470 €.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,4 nuits en hôtel à Manhattan,Visites guidées du programme,Trajets en métro et en autobus",
        "Flights from France,Airport transfers,4 nights in a Manhattan hotel,Guided visits in the programme,Metro and bus rides",
        "Vuelos desde Francia,Traslados al aeropuerto,4 noches en hotel en Manhattan,Visitas guiadas del programa,Trayectos en metro y autobús",
      ],
      price: 1185, nights: 4, departureFrom: "Barcelone", image: "mg1",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,family,groups", maxGuests: 53, order: -54998,
      chapters: [
        chapter([NYC[0], NYC[1], NYC[2]], ["Trois journées guidées.", "Three guided days.", "Tres jornadas guiadas."],
          ["mg1", "mg2", "mg3", "mg6", "mg4"],
          [
            day(1, T_ARR, ARR, "mg2"),
            day(2, ["Manhattan et la High Line", "Manhattan and the High Line", "Manhattan y la High Line"], ["En autobus avec votre guide : Times Square, le Flatiron, l'Empire State Building, puis la promenade de la High Line.", "By bus with your guide: Times Square, the Flatiron, the Empire State Building, then a walk along the High Line.", "En autobús con su guía: Times Square, el Flatiron, el Empire State Building y el paseo por la High Line."], "mg6"),
            day(3, ["La statue de la Liberté et Brooklyn", "The Statue of Liberty and Brooklyn", "La estatua de la Libertad y Brooklyn"], ["En métro jusqu'à Battery Park, ferry vers la statue de la Liberté, puis Brooklyn.", "By metro to Battery Park, the ferry to the Statue of Liberty, then Brooklyn.", "En metro hasta Battery Park, ferri a la estatua de la Libertad y Brooklyn."], "mg1"),
            day(4, ["Harlem et Central Park", "Harlem and Central Park", "Harlem y Central Park"], ["Harlem, son street art, son jazz et sa soul food, puis Central Park.", "Harlem, its street art, jazz and soul food, then Central Park.", "Harlem, su arte urbano, su jazz y su soul food, y Central Park."], "mg3"),
            day(5, T_DEP, DEP, "mg4"), day(6, T_HOME, HOME, "mg5"),
          ]),
      ],
    }),

    // ───────────── 4. Frenchies & The City — 6J/4N ─────────────
    trip({
      slug: "etats-unis-new-york-frenchies-city-pass-6j",
      name: ["Frenchies & the City : New York en liberté avec le CityPASS", "Frenchies & the City: New York at Your Own Pace with the CityPASS", "Frenchies & the City: Nueva York en libertad con el CityPASS"],
      tagline: ["Un hôtel près de Times Square, cinq attractions et une visite guidée en français au choix", "A hotel near Times Square, five attractions and a French-guided tour of your choice", "Un hotel cerca de Times Square, cinco atracciones y una visita guiada en francés a elegir"],
      description: [
        "New York à votre rythme : quatre nuits au Holiday Inn Times Square 3*, un CityPASS pour cinq attractions parmi dix (observatoires, statue de la Liberté, musées, croisières) et une visite guidée en français au choix (Harlem, Brooklyn, le Lower East Side…). Séjour de 5 nuits à partir de 1 673 € par personne, 6 nuits 1 732 € ; autres hôtels : Hyatt House Chelsea (2 557 €) ou Holiday Inn Express Midtown (2 734 €).",
        "New York at your own pace: four nights at the Holiday Inn Times Square 3*, a CityPASS for five attractions out of ten (observation decks, the Statue of Liberty, museums, cruises) and a French-guided tour of your choice (Harlem, Brooklyn, the Lower East Side…). 5-night stay from €1,673 per person, 6 nights €1,732; other hotels: Hyatt House Chelsea (€2,557) or Holiday Inn Express Midtown (€2,734).",
        "Nueva York a su ritmo: cuatro noches en el Holiday Inn Times Square 3*, un CityPASS para cinco atracciones entre diez (miradores, estatua de la Libertad, museos, cruceros) y una visita guiada en francés a elegir (Harlem, Brooklyn, el Lower East Side…). Estancia de 5 noches desde 1.673 € por persona, 6 noches 1.732 €; otros hoteles: Hyatt House Chelsea (2.557 €) o Holiday Inn Express Midtown (2.734 €).",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,4 nuits au Holiday Inn Times Square 3*,CityPASS 5 attractions,1 visite guidée en français au choix",
        "Flights from France,Airport transfers,4 nights at the Holiday Inn Times Square 3*,CityPASS with 5 attractions,1 French-guided tour of your choice",
        "Vuelos desde Francia,Traslados al aeropuerto,4 noches en el Holiday Inn Times Square 3*,CityPASS con 5 atracciones,1 visita guiada en francés a elegir",
      ],
      price: 1291, nights: 4, departureFrom: "Barcelone", image: "fr1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,solo", maxGuests: 8, order: -54997,
      chapters: [
        chapter([NYC[0], NYC[1], NYC[2]], ["Quatre nuits en liberté.", "Four nights at your own pace.", "Cuatro noches en libertad."],
          ["fr1", "fr2", "fr3", "fr6", "fr7"],
          [
            day(1, T_ARR, ["Envol pour New York et transfert à votre hôtel près de Times Square.", "Flight to New York and transfer to your hotel near Times Square.", "Vuelo a Nueva York y traslado a su hotel cerca de Times Square."], "fr1"),
            day(2, ["New York avec le CityPASS", "New York with the CityPASS", "Nueva York con el CityPASS"], ["Trois jours pour utiliser votre CityPASS : un observatoire, la statue de la Liberté et Ellis Island, un grand musée ou une croisière autour de Manhattan.", "Three days to use your CityPASS: an observation deck, the Statue of Liberty and Ellis Island, a great museum or a cruise around Manhattan.", "Tres días para usar su CityPASS: un mirador, la estatua de la Libertad y Ellis Island, un gran museo o un crucero alrededor de Manhattan."], "fr3"),
            day(3, ["Visite guidée en français", "A French-guided tour", "Visita guiada en francés"], ["La visite guidée choisie à la réservation : Harlem, Brooklyn ou Chinatown et Little Italy.", "The guided tour chosen when booking: Harlem, Brooklyn or Chinatown and Little Italy.", "La visita guiada elegida al reservar: Harlem, Brooklyn o Chinatown y Little Italy."], "fr6"),
            day(4, T_FREE, FREE, "fr2"),
            day(5, T_DEP, DEP, "fr7"), day(6, T_HOME, HOME, "fr1"),
          ]),
      ],
    }),

    // ───────────── 5. New York Intimiste — 7J/5N ─────────────
    trip({
      slug: "etats-unis-new-york-intimiste-7j",
      name: ["New York intimiste : la ville en petit groupe de douze", "New York Up Close: the City in a Small Group of Twelve", "Nueva York íntimo: la ciudad en grupo reducido de doce"],
      tagline: ["Un chauffeur-guide francophone, un hôtel en plein Manhattan et quatre journées de visites", "A French-speaking driver-guide, a hotel in the heart of Manhattan and four days of visits", "Un chófer-guía francófono, un hotel en pleno Manhattan y cuatro jornadas de visitas"],
      description: [
        "New York en groupe de 12 personnes au plus, avec un chauffeur-guide francophone et un van : le tour panoramique des grands monuments, la statue de la Liberté et Ellis Island, le pont de Brooklyn et Dumbo, Harlem et une messe gospel, et une dernière matinée libre.",
        "New York in a group of 12 at most, with a French-speaking driver-guide and a van: a panoramic tour of the great landmarks, the Statue of Liberty and Ellis Island, Brooklyn Bridge and Dumbo, Harlem and a gospel service, and a last free morning.",
        "Nueva York en grupo de 12 personas como máximo, con un chófer-guía francófono y una furgoneta: la vuelta panorámica por los grandes monumentos, la estatua de la Libertad y Ellis Island, el puente de Brooklyn y Dumbo, Harlem y una misa gospel, y una última mañana libre.",
      ],
      includes: [
        "Vols depuis la France,Transferts privés,5 nuits en hôtel à Manhattan,Visites du programme,Chauffeur-guide francophone",
        "Flights from France,Private transfers,5 nights in a Manhattan hotel,Visits in the programme,French-speaking driver-guide",
        "Vuelos desde Francia,Traslados privados,5 noches en hotel en Manhattan,Visitas del programa,Chófer-guía francófono",
      ],
      price: 2643, nights: 5, departureFrom: "Nice", image: "in2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -54996,
      chapters: [
        chapter([NYC[0], NYC[1], NYC[2]], ["Cinq nuits avec votre guide.", "Five nights with your guide.", "Cinco noches con su guía."],
          ["in1", "in2", "in4", "in5", "in7", "in8"],
          [
            day(1, T_ARR, ["Envol pour New York, accueil et transfert privé à votre hôtel au cœur de Manhattan.", "Flight to New York, welcome and private transfer to your hotel in the heart of Manhattan.", "Vuelo a Nueva York, recibimiento y traslado privado a su hotel en el corazón de Manhattan."], "in3"),
            day(2, ["Les monuments de New York", "The landmarks of New York", "Los monumentos de Nueva York"], ["Visite panoramique d'une demi-journée des grands monuments et quartiers de Manhattan.", "A half-day panoramic tour of Manhattan's great landmarks and neighbourhoods.", "Visita panorámica de medio día por los grandes monumentos y barrios de Manhattan."], "in4"),
            day(3, T_LIBERTY, LIBERTY, "in1"),
            day(4, ["Le pont de Brooklyn", "Brooklyn Bridge", "El puente de Brooklyn"], ["La traversée du pont de Brooklyn et ses vues sur la skyline, puis Brooklyn.", "Across Brooklyn Bridge and its views of the skyline, then Brooklyn.", "El cruce del puente de Brooklyn y sus vistas del skyline, y Brooklyn."], "in2"),
            day(5, ["Harlem et messe gospel", "Harlem and a gospel service", "Harlem y misa gospel"], ["Harlem, son patrimoine culturel et musical et une messe gospel.", "Harlem, its cultural and musical heritage and a gospel service.", "Harlem, su patrimonio cultural y musical y una misa gospel."], "in6"),
            day(6, T_DEP, ["Dernière matinée libre (shopping, musée ou brunch), puis transfert à l'aéroport et envol pour la France.", "A last free morning (shopping, a museum or brunch), then transfer to the airport and fly to France.", "Última mañana libre (compras, museo o brunch), traslado al aeropuerto y vuelo a Francia."], "in7"),
            day(7, T_HOME, HOME, "in8"),
          ]),
      ],
    }),

    // ───────────── 6. Trésors de New York, spécial Noël — 7J/5N ─────────────
    trip({
      slug: "etats-unis-new-york-noel-tresors-7j",
      name: ["Noël à New York : marchés de Noël, gospel et illuminations", "Christmas in New York: Christmas Markets, Gospel and Lights", "Navidad en Nueva York: mercados navideños, gospel e iluminaciones"],
      tagline: ["Du 21 au 26 décembre en petit groupe de douze, avec le CityPASS", "21 to 26 December in a small group of twelve, with the CityPASS", "Del 21 al 26 de diciembre en grupo reducido de doce, con el CityPASS"],
      description: [
        "Les fêtes de fin d'année à New York, en groupe de 12 personnes au plus : Downtown et les marchés de Noël, Uptown, Harlem et une messe gospel, la soirée des illuminations de Noël (Holiday Lights Tour) le 24 décembre, le jour de Noël en liberté avec le CityPASS et le spectacle des Rockettes en option.",
        "The festive season in New York, in a group of 12 at most: Downtown and the Christmas markets, Uptown, Harlem and a gospel service, the Holiday Lights Tour on 24 December, Christmas Day at your own pace with the CityPASS and the Rockettes show as an option.",
        "Las fiestas de fin de año en Nueva York, en grupo de 12 personas como máximo: Downtown y los mercados navideños, Uptown, Harlem y una misa gospel, la velada de las luces navideñas (Holiday Lights Tour) el 24 de diciembre, el día de Navidad en libertad con el CityPASS y el espectáculo de las Rockettes opcional.",
      ],
      includes: [
        "Vols depuis la France (en option),Transferts privés,5 nuits en hôtel à Manhattan,CityPASS,Visites guidées et soirée des illuminations",
        "Flights from France (optional),Private transfers,5 nights in a Manhattan hotel,CityPASS,Guided visits and the Holiday Lights evening",
        "Vuelos desde Francia (opcionales),Traslados privados,5 noches en hotel en Manhattan,CityPASS,Visitas guiadas y velada de las luces",
      ],
      price: 2735, nights: 5, departureFrom: "Francfort", image: "no1",
      theme: "culture", feeling: "distraction", travelerTypes: "couples,family,groups", maxGuests: 12, order: -54995,
      chapters: [
        chapter(["New York à Noël", "New York at Christmas", "Nueva York en Navidad"], ["Cinq nuits du 21 au 26 décembre.", "Five nights from 21 to 26 December.", "Cinco noches del 21 al 26 de diciembre."],
          ["no1", "no2", "no4", "no6", "no7", "no9"],
          [
            day(1, ["21 décembre : arrivée à New York", "21 December: arrival in New York", "21 de diciembre: llegada a Nueva York"], ["Envol pour New York et transfert privé à l'hôtel, où une pochette avec vos billets vous attend.", "Flight to New York and a private transfer to the hotel, where a pack with your tickets awaits.", "Vuelo a Nueva York y traslado privado al hotel, donde le espera un sobre con sus entradas."], "no3"),
            day(2, ["22 décembre : Downtown et marchés de Noël", "22 December: Downtown and the Christmas markets", "22 de diciembre: Downtown y mercados navideños"], ["En métro, puis à pied avec votre guide dans Downtown Manhattan et ses marchés de Noël.", "By metro, then on foot with your guide through Downtown Manhattan and its Christmas markets.", "En metro y a pie con su guía por Downtown Manhattan y sus mercados navideños."], "no1"),
            day(3, ["23 décembre : Uptown, Harlem et gospel", "23 December: Uptown, Harlem and gospel", "23 de diciembre: Uptown, Harlem y gospel"], ["Matinée en minibus dans Uptown Manhattan et à Harlem, avec une messe gospel.", "A morning by minibus in Uptown Manhattan and Harlem, with a gospel service.", "Mañana en minibús por Uptown Manhattan y Harlem, con una misa gospel."], "no7"),
            day(4, ["24 décembre : les illuminations", "24 December: the lights", "24 de diciembre: las iluminaciones"], ["Journée libre, puis le soir le tour des illuminations de Noël en minibus.", "A free day, then in the evening a minibus tour of the Christmas lights.", "Jornada libre y por la noche la vuelta de las luces navideñas en minibús."], "no4"),
            day(5, ["25 décembre : Noël à New York", "25 December: Christmas in New York", "25 de diciembre: Navidad en Nueva York"], ["Journée libre avec le CityPASS. En option, le spectacle des Rockettes.", "A free day with the CityPASS. As an option, the Rockettes show.", "Jornada libre con el CityPASS. Opcional: el espectáculo de las Rockettes."], "no6"),
            day(6, ["26 décembre : vol retour", "26 December: flight home", "26 de diciembre: vuelo de regreso"], ["Journée libre pour les derniers achats, puis transfert à l'aéroport et envol pour la France.", "A free day for last-minute shopping, then transfer to the airport and fly to France.", "Jornada libre para las últimas compras, traslado al aeropuerto y vuelo a Francia."], "no9"),
            day(7, T_HOME, HOME, "no2"),
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
