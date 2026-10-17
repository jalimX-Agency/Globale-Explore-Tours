// South Korea and Mongolia circuits — 4 journey-format trips: three for "coree-du-sud" (one of
// them combined with Japan) and one for "mongolie". The Jeju extension and the private version are
// described inside the trips. Prices are per-person "from" prices. Supplier product ids are kept in
// SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-asie-est-circuits.ts
// Requires scripts/upload-images-asieest-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "coree-du-sud-pays-du-matin-calme-12j": ["333498"],
  "coree-du-sud-panorama-liberte-seoul-busan-12j": ["334238", "334239"],
  "coree-du-sud-japon-passion-liberte-15j": ["390558"],
  "mongolie-pays-des-nomades-gobi-orkhon-15j": ["376939", "376958"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_FLY_KR: L3 = ["Envol pour la Corée du Sud", "Flight to South Korea", "Vuelo a Corea del Sur"];
const FLY_KR: L3 = ["Envol à destination de Séoul. Nuit à bord.", "Flight to Seoul. Night on board.", "Vuelo con destino a Seúl. Noche a bordo."];
const T_SEOUL_FREE: L3 = ["Séoul, journée libre", "Seoul, free day", "Seúl, jornada libre"];
const SEOUL_FREE: L3 = [
  "Journée libre : le palais de Gyeongbokgung, le village de hanoks de Bukchon, le quartier de Myeongdong et la tour de Namsan.",
  "A free day: Gyeongbokgung palace, the hanok village of Bukchon, the Myeongdong district and Namsan tower.",
  "Jornada libre: el palacio de Gyeongbokgung, el pueblo de hanoks de Bukchon, el barrio de Myeongdong y la torre de Namsan.",
];
const T_GYEONGJU_FREE: L3 = ["Gyeongju, journée libre", "Gyeongju, free day", "Gyeongju, jornada libre"];
const GYEONGJU_FREE: L3 = [
  "Journée libre dans l'ancienne capitale du royaume de Silla : les tumulus royaux de Daereungwon, le musée national, le temple Bulguksa et la grotte de Seokguram.",
  "A free day in the old capital of the Silla kingdom: the royal tumuli of Daereungwon, the national museum, Bulguksa temple and Seokguram grotto.",
  "Jornada libre en la antigua capital del reino de Silla: los túmulos reales de Daereungwon, el museo nacional, el templo Bulguksa y la gruta de Seokguram.",
];
const T_BUSAN_FREE: L3 = ["Busan, journée libre", "Busan, free day", "Busan, jornada libre"];
const BUSAN_FREE: L3 = [
  "Journée libre : le marché aux poissons de Jagalchi, le village coloré de Gamcheon et le temple côtier de Haedong Yonggungsa.",
  "A free day: Jagalchi fish market, the colourful village of Gamcheon and the seaside temple of Haedong Yonggungsa.",
  "Jornada libre: el mercado de pescado de Jagalchi, el pueblo de colores de Gamcheon y el templo costero de Haedong Yonggungsa.",
];
const KR_LIB: (n: number) => L3 = (n) => [
  `Vols depuis la France,${n} nuits en hôtels 3* et 4*,Petits-déjeuners,Trajets en bus express et en train du programme,Carte de transport T-money`,
  `Flights from France,${n} nights in 3* and 4* hotels,Breakfasts,Express bus and train journeys in the programme,T-money transport card`,
  `Vuelos desde Francia,${n} noches en hoteles de 3* y 4*,Desayunos,Trayectos en autobús exprés y tren del programa,Tarjeta de transporte T-money`,
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const kr = circuitBuilders({
    destinationSlug: "coree-du-sud",
    imagePrefix: "asieest",
    season: { label: ["Avr-juin, sept-oct", "Apr-June, Sept-Oct", "Abr-jun, sept-oct"], months: "april,may,june,september,october" },
  });
  const mn = circuitBuilders({
    destinationSlug: "mongolie",
    imagePrefix: "asieest",
    season: { label: ["Juin à sept", "June to Sept", "Jun a sept"], months: "june,july,august,september" },
  });

  const journeyTrips = [
    // ───────────── 1. Au pays du Matin calme — 12J/9N ─────────────
    kr.trip({
      slug: "coree-du-sud-pays-du-matin-calme-12j",
      name: ["Au pays du Matin calme : Séoul, Gyeongju, Busan et Jeonju", "The Land of the Morning Calm: Seoul, Gyeongju, Busan and Jeonju", "En el país de la Mañana Tranquila: Seúl, Gyeongju, Busan y Jeonju"],
      tagline: ["Le tour de la Corée du Sud avec un guide francophone, des palais de Séoul aux temples de montagne", "The tour of South Korea with a French-speaking guide, from the palaces of Seoul to the mountain temples", "La vuelta a Corea del Sur con un guía francófono, de los palacios de Seúl a los templos de montaña"],
      description: [
        "La Corée du Sud en circuit accompagné, groupe de 30 personnes au plus : Séoul (la rivière Cheonggyecheon, Myeongdong, le palais de Gyeongbokgung, la Maison bleue), la forteresse de Suwon, le temple de Haeinsa et ses tablettes du Tripitaka Koreana, Gyeongju et son musée national, le temple de Tongdosa, Busan et le cimetière des Nations unies, le village de hanoks de Jeonju et la forteresse de Gongju, classés à l'Unesco.",
        "South Korea on a guided tour, in a group of 30 at most: Seoul (the Cheonggyecheon stream, Myeongdong, Gyeongbokgung palace, the Blue House), Suwon fortress, Haeinsa temple and its Tripitaka Koreana tablets, Gyeongju and its national museum, Tongdosa temple, Busan and the United Nations cemetery, the hanok village of Jeonju and Gongju fortress, all UNESCO-listed sites.",
        "Corea del Sur en circuito acompañado, en grupo de 30 personas como máximo: Seúl (el arroyo Cheonggyecheon, Myeongdong, el palacio de Gyeongbokgung, la Casa Azul), la fortaleza de Suwon, el templo de Haeinsa y sus tablillas del Tripitaka Koreana, Gyeongju y su museo nacional, el templo de Tongdosa, Busan y el cementerio de las Naciones Unidas, el pueblo de hanoks de Jeonju y la fortaleza de Gongju, inscritos en la Unesco.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,9 nuits en hôtels 3*,Pension selon programme,Visites du programme,Guide francophone",
        "Flights from France,Airport transfers,9 nights in 3* hotels,Meals as per programme,Visits in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,9 noches en hoteles de 3*,Comidas según programa,Visitas del programa,Guía francófono",
      ],
      price: 3723, nights: 9, departureFrom: "Paris", image: "mc4",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 30, order: -72000,
      chapters: [
        kr.chapter(["Séoul et Suwon", "Seoul and Suwon", "Seúl y Suwon"], ["La capitale, ses palais, puis la forteresse royale.", "The capital, its palaces, then the royal fortress.", "La capital, sus palacios y la fortaleza real."],
          ["mc4", "mc1", "mc2", "pa2"],
          [
            kr.day(1, T_FLY_KR, FLY_KR, "mc2"),
            kr.day(2, ["Arrivée à Séoul", "Arrival in Seoul", "Llegada a Seúl"], ["Accueil et premiers pas avec votre guide le long de la rivière Cheonggyecheon et dans le quartier commerçant de Myeongdong.", "Welcome and first steps with your guide along the Cheonggyecheon stream and in the Myeongdong shopping district.", "Recibimiento y primeros pasos con su guía junto al arroyo Cheonggyecheon y en el barrio comercial de Myeongdong."], "pa2"),
            kr.day(3, ["Séoul, palais et Maison bleue", "Seoul, palaces and the Blue House", "Seúl, palacios y Casa Azul"], ["Le palais de Gyeongbokgung (ou Changdeokgung et son jardin secret), puis la Maison bleue, ancienne résidence présidentielle ouverte au public.", "Gyeongbokgung palace (or Changdeokgung and its secret garden), then the Blue House, the former presidential residence now open to the public.", "El palacio de Gyeongbokgung (o Changdeokgung y su jardín secreto) y la Casa Azul, antigua residencia presidencial abierta al público."], "mc4"),
            kr.day(4, ["La forteresse de Suwon – Daejeon", "Suwon fortress – Daejeon", "La fortaleza de Suwon – Daejeon"], ["La forteresse de Hwaseong à Suwon, construite par la dynastie Joseon et classée à l'Unesco, puis Daejeon.", "Hwaseong fortress in Suwon, built by the Joseon dynasty and listed by UNESCO, then Daejeon.", "La fortaleza de Hwaseong en Suwon, construida por la dinastía Joseon e inscrita en la Unesco, y Daejeon."], "pa1"),
          ]),
        kr.chapter(["Haeinsa, Gyeongju et Busan", "Haeinsa, Gyeongju and Busan", "Haeinsa, Gyeongju y Busan"], ["Temples de montagne, capitale de Silla et grand port.", "Mountain temples, the Silla capital and the great port.", "Templos de montaña, la capital de Silla y el gran puerto."],
          ["pa3", "pa4", "mc5", "mc6"],
          [
            kr.day(5, ["Haeinsa – Gyeongju", "Haeinsa – Gyeongju", "Haeinsa – Gyeongju"], ["Le temple de Haeinsa dans le massif de Gayasan, qui conserve les tablettes du Tripitaka Koreana, puis Gyeongju.", "Haeinsa temple in the Gayasan mountains, which keeps the Tripitaka Koreana tablets, then Gyeongju.", "El templo de Haeinsa en el macizo de Gayasan, que conserva las tablillas del Tripitaka Koreana, y Gyeongju."], "pa1"),
            kr.day(6, ["Gyeongju", "Gyeongju", "Gyeongju"], ["Le musée national de Gyeongju et les trésors du royaume de Silla.", "The Gyeongju National Museum and the treasures of the Silla kingdom.", "El museo nacional de Gyeongju y los tesoros del reino de Silla."], "pa4"),
            kr.day(7, ["Tongdosa – Busan", "Tongdosa – Busan", "Tongdosa – Busan"], ["Le temple de Tongdosa, grand centre de formation des moines, puis Busan.", "Tongdosa temple, a great training centre for monks, then Busan.", "El templo de Tongdosa, gran centro de formación de monjes, y Busan."], "pa3"),
            kr.day(8, ["Busan", "Busan", "Busan"], ["Le cimetière des Nations unies, mémoire de la guerre de Corée, puis la ville et son port.", "The United Nations cemetery, a memorial to the Korean War, then the city and its port.", "El cementerio de las Naciones Unidas, memoria de la guerra de Corea, y la ciudad y su puerto."], "mc5"),
          ]),
        kr.chapter(["Jeonju, Gongju et retour", "Jeonju, Gongju and home", "Jeonju, Gongju y regreso"], ["Le village de hanoks et la forteresse de Baekje.", "The hanok village and the Baekje fortress.", "El pueblo de hanoks y la fortaleza de Baekje."],
          ["cj3", "pa7"],
          [
            kr.day(9, ["Busan – Jeonju", "Busan – Jeonju", "Busan – Jeonju"], ["Route vers Jeonju : le village traditionnel, le sanctuaire Gyeonggijeon et la porte Pungnammun.", "Drive to Jeonju: the traditional village, Gyeonggijeon shrine and Pungnammun gate.", "Carretera hacia Jeonju: el pueblo tradicional, el santuario Gyeonggijeon y la puerta Pungnammun."], "pa7"),
            kr.day(10, ["Gongju – Séoul", "Gongju – Seoul", "Gongju – Seúl"], ["La forteresse de Gongsanseong, ancienne place forte du royaume de Baekje, puis retour à Séoul.", "Gongsanseong fortress, an old stronghold of the Baekje kingdom, then back to Seoul.", "La fortaleza de Gongsanseong, antigua plaza fuerte del reino de Baekje, y regreso a Seúl."], "cj3"),
            kr.day(11, ["Séoul – vol retour", "Seoul – flight home", "Seúl – vuelo de regreso"], ["Temps libre, puis transfert à l'aéroport et envol pour la France.", "Free time, then transfer to the airport and fly to France.", "Tiempo libre, traslado al aeropuerto y vuelo a Francia."], "mc1"),
            kr.day(12, T_HOME, HOME, "mc4"),
          ]),
      ],
    }),

    // ───────────── 2. Panorama coréen en liberté — 12J/9N ─────────────
    kr.trip({
      slug: "coree-du-sud-panorama-liberte-seoul-busan-12j",
      name: ["Panorama coréen en liberté : Séoul, Gyeongju, Busan et Jeonju", "Korean Panorama at Your Own Pace: Seoul, Gyeongju, Busan and Jeonju", "Panorama coreano en libertad: Seúl, Gyeongju, Busan y Jeonju"],
      tagline: ["La boucle de la Corée en bus express, avec vos hôtels réservés et beaucoup de liberté", "The loop around Korea by express bus, with your hotels booked and plenty of freedom", "La vuelta a Corea en autobús exprés, con sus hoteles reservados y mucha libertad"],
      description: [
        "Un voyage en liberté : Séoul, puis la boucle en bus express par Gyeongju, l'ancienne capitale de Silla, Busan et son port, le village de hanoks de Jeonju, avant trois derniers jours à Séoul. Hôtels, trajets et carte de transport T-money réservés, des suggestions de visites pour chaque jour. Extension sur l'île volcanique de Jeju (15 jours) à partir de 1 764 € par personne.",
        "An independent trip: Seoul, then the loop by express bus via Gyeongju, the old Silla capital, Busan and its port, the hanok village of Jeonju, before three last days in Seoul. Hotels, journeys and T-money transport card booked, with suggestions for each day. Extension on the volcanic island of Jeju (15 days) from €1,764 per person.",
        "Un viaje en libertad: Seúl, y la vuelta en autobús exprés por Gyeongju, la antigua capital de Silla, Busan y su puerto, el pueblo de hanoks de Jeonju, antes de tres últimos días en Seúl. Hoteles, trayectos y tarjeta de transporte T-money reservados, con sugerencias para cada día. Extensión en la isla volcánica de Jeju (15 días) desde 1.764 € por persona.",
      ],
      includes: KR_LIB(9),
      price: 1445, nights: 9, departureFrom: "Paris", image: "pa5",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,solo,family", maxGuests: 8, order: -71999,
      chapters: [
        kr.chapter(["Séoul", "Seoul", "Seúl"], ["Deux jours dans la capitale.", "Two days in the capital.", "Dos días en la capital."],
          ["pa10", "pa9", "mc8"],
          [
            kr.day(1, T_FLY_KR, FLY_KR, "mc2"),
            kr.day(2, ["Arrivée à Séoul", "Arrival in Seoul", "Llegada a Seúl"], ["Transfert par vos propres moyens à l'hôtel. Temps libre.", "Make your own way to the hotel. Free time.", "Traslado por su cuenta al hotel. Tiempo libre."], "pa9"),
            kr.day(3, T_SEOUL_FREE, SEOUL_FREE, "pa10"),
          ]),
        kr.chapter(["Gyeongju, Busan et Jeonju", "Gyeongju, Busan and Jeonju", "Gyeongju, Busan y Jeonju"], ["La boucle en bus express.", "The loop by express bus.", "La vuelta en autobús exprés."],
          ["pa4", "pa5", "pa6", "pa7"],
          [
            kr.day(4, ["Séoul – Gyeongju", "Seoul – Gyeongju", "Seúl – Gyeongju"], ["Bus express pour Gyeongju et les tumulus royaux de Daereungwon.", "Express bus to Gyeongju and the royal tumuli of Daereungwon.", "Autobús exprés a Gyeongju y los túmulos reales de Daereungwon."], "pa4"),
            kr.day(5, T_GYEONGJU_FREE, GYEONGJU_FREE, "pa3"),
            kr.day(6, ["Gyeongju – Busan", "Gyeongju – Busan", "Gyeongju – Busan"], ["Bus express pour Busan, grand port du sud.", "Express bus to Busan, the great port of the south.", "Autobús exprés a Busan, gran puerto del sur."], "pa6"),
            kr.day(7, T_BUSAN_FREE, BUSAN_FREE, "pa5"),
            kr.day(8, ["Busan – Jeonju", "Busan – Jeonju", "Busan – Jeonju"], ["Bus express pour Jeonju et son quartier de maisons traditionnelles hanok.", "Express bus to Jeonju and its quarter of traditional hanok houses.", "Autobús exprés a Jeonju y su barrio de casas tradicionales hanok."], "pa7"),
          ]),
        kr.chapter(["Retour à Séoul", "Back to Seoul", "Regreso a Seúl"], ["Trois derniers jours dans la capitale.", "Three last days in the capital.", "Tres últimos días en la capital."],
          ["cj1", "mc7"],
          [
            kr.day(9, ["Jeonju – Séoul", "Jeonju – Seoul", "Jeonju – Seúl"], ["Retour à Séoul en bus express.", "Back to Seoul by express bus.", "Regreso a Seúl en autobús exprés."], "cj1"),
            kr.day(10, T_SEOUL_FREE, SEOUL_FREE, "mc7"),
            kr.day(11, ["Séoul – vol retour", "Seoul – flight home", "Seúl – vuelo de regreso"], ["Dernière journée libre, puis transfert à l'aéroport en transports en commun et envol pour la France.", "A last free day, then public transport to the airport and fly to France.", "Última jornada libre, traslado al aeropuerto en transporte público y vuelo a Francia."], "mc1"),
            kr.day(12, T_HOME, HOME, "pa5"),
          ]),
      ],
    }),

    // ───────────── 3. Passion Corée & Japon — 15J/12N ─────────────
    kr.trip({
      slug: "coree-du-sud-japon-passion-liberte-15j",
      name: ["Corée et Japon en liberté : Séoul, Gyeongju, Busan, Kyoto, Hakone et Tokyo", "Korea and Japan at Your Own Pace: Seoul, Gyeongju, Busan, Kyoto, Hakone and Tokyo", "Corea y Japón en libertad: Seúl, Gyeongju, Busan, Kioto, Hakone y Tokio"],
      tagline: ["Deux pays en quinze jours, avec une nuit en hanok et une nuit en ryokan", "Two countries in fifteen days, with a night in a hanok and a night in a ryokan", "Dos países en quince días, con una noche en hanok y una noche en ryokan"],
      description: [
        "Un combiné en liberté : Séoul, le train KTX vers Gyeongju et une nuit en hanok, Busan, puis un vol pour Osaka, trois nuits à Kyoto (Arashiyama, Gion, Higashiyama), le Shinkansen vers Hakone et une nuit en ryokan, et trois jours à Tokyo. Hôtels, trains, vol Busan – Osaka et eSIM Corée-Japon inclus.",
        "An independent combination: Seoul, the KTX train to Gyeongju and a night in a hanok, Busan, then a flight to Osaka, three nights in Kyoto (Arashiyama, Gion, Higashiyama), the Shinkansen to Hakone and a night in a ryokan, and three days in Tokyo. Hotels, trains, the Busan – Osaka flight and a Korea-Japan eSIM included.",
        "Un combinado en libertad: Seúl, el tren KTX a Gyeongju y una noche en hanok, Busan, y un vuelo a Osaka, tres noches en Kioto (Arashiyama, Gion, Higashiyama), el Shinkansen a Hakone y una noche en ryokan, y tres días en Tokio. Hoteles, trenes, vuelo Busan – Osaka y eSIM Corea-Japón incluidos.",
      ],
      includes: [
        "Vols depuis la France (aller Séoul; retour Tokyo),Vol Busan – Osaka,12 nuits en hôtels 3* et 4* dont 1 en hanok et 1 en ryokan,Petits-déjeuners,Trains KTX et Shinkansen du programme,eSIM Corée-Japon",
        "Flights from France (out to Seoul; back from Tokyo),Busan – Osaka flight,12 nights in 3* and 4* hotels including 1 in a hanok and 1 in a ryokan,Breakfasts,KTX and Shinkansen trains in the programme,Korea-Japan eSIM",
        "Vuelos desde Francia (ida a Seúl; regreso desde Tokio),Vuelo Busan – Osaka,12 noches en hoteles de 3* y 4* con 1 en hanok y 1 en ryokan,Desayunos,Trenes KTX y Shinkansen del programa,eSIM Corea-Japón",
      ],
      price: 2344, nights: 12, departureFrom: "Bruxelles", image: "cj4",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,solo", maxGuests: 8, order: -71998,
      chapters: [
        kr.chapter(["La Corée du Sud", "South Korea", "Corea del Sur"], ["Séoul, Gyeongju et Busan.", "Seoul, Gyeongju and Busan.", "Seúl, Gyeongju y Busan."],
          ["cj1", "cj2", "cj3", "cj4", "cj5"],
          [
            kr.day(1, T_FLY_KR, FLY_KR, "cj2"),
            kr.day(2, ["Arrivée à Séoul", "Arrival in Seoul", "Llegada a Seúl"], ["Transfert privé à l'hôtel.", "Private transfer to the hotel.", "Traslado privado al hotel."], "cj1"),
            kr.day(3, T_SEOUL_FREE, SEOUL_FREE, "cj2"),
            kr.day(4, ["Séoul – Gyeongju en KTX", "Seoul – Gyeongju by KTX", "Seúl – Gyeongju en KTX"], ["Train KTX pour Gyeongju et nuit dans un hanok, maison traditionnelle coréenne.", "KTX train to Gyeongju and a night in a hanok, a traditional Korean house.", "Tren KTX a Gyeongju y noche en un hanok, casa tradicional coreana."], "cj3"),
            kr.day(5, T_GYEONGJU_FREE, GYEONGJU_FREE, "pa4"),
            kr.day(6, ["Gyeongju – Busan", "Gyeongju – Busan", "Gyeongju – Busan"], [`Bus express pour Busan. ${BUSAN_FREE[0].replace("Journée libre : ", "")}`, `Express bus to Busan. ${BUSAN_FREE[1].replace("A free day: ", "")}`, `Autobús exprés a Busan. ${BUSAN_FREE[2].replace("Jornada libre: ", "")}`], "cj4"),
          ]),
        kr.chapter(["Le Japon", "Japan", "Japón"], ["Kyoto, Hakone et Tokyo.", "Kyoto, Hakone and Tokyo.", "Kioto, Hakone y Tokio."],
          ["cj6", "cj7", "cj8"],
          [
            kr.day(7, ["Busan – Osaka – Kyoto", "Busan – Osaka – Kyoto", "Busan – Osaka – Kioto"], ["Vol pour Osaka et navette jusqu'à votre hôtel à Kyoto.", "Flight to Osaka and a shuttle to your hotel in Kyoto.", "Vuelo a Osaka y lanzadera hasta su hotel en Kioto."], "cj6"),
            kr.day(8, ["Kyoto, Arashiyama et Gion", "Kyoto, Arashiyama and Gion", "Kioto, Arashiyama y Gion"], ["Journée libre : la bambouseraie d'Arashiyama, puis le soir le quartier de Gion.", "A free day: the Arashiyama bamboo grove, then Gion in the evening.", "Jornada libre: el bosque de bambú de Arashiyama y, por la noche, el barrio de Gion."], "cj6"),
            kr.day(9, ["Kyoto, Higashiyama", "Kyoto, Higashiyama", "Kioto, Higashiyama"], ["Journée libre : le quartier de Higashiyama et la terrasse en bois du Kiyomizu-dera.", "A free day: the Higashiyama quarter and the wooden terrace of Kiyomizu-dera.", "Jornada libre: el barrio de Higashiyama y la terraza de madera del Kiyomizu-dera."], "cj6"),
            kr.day(10, ["Kyoto – Hakone", "Kyoto – Hakone", "Kioto – Hakone"], ["Shinkansen pour Odawara, puis dîner et nuit en ryokan.", "Shinkansen to Odawara, then dinner and a night in a ryokan.", "Shinkansen a Odawara, y cena y noche en ryokan."], "cj7"),
            kr.day(11, ["Hakone – Tokyo", "Hakone – Tokyo", "Hakone – Tokio"], ["Matinée libre, puis Shinkansen pour Tokyo.", "A free morning, then the Shinkansen to Tokyo.", "Mañana libre y Shinkansen a Tokio."], "cj8"),
            kr.day(12, ["Tokyo, journée libre", "Tokyo, free day", "Tokio, jornada libre"], ["Journée libre : le sanctuaire Meiji, Harajuku, Omotesando et le carrefour de Shibuya.", "A free day: Meiji shrine, Harajuku, Omotesando and the Shibuya crossing.", "Jornada libre: el santuario Meiji, Harajuku, Omotesando y el cruce de Shibuya."], "cj8"),
            kr.day(13, ["Tokyo, journée libre", "Tokyo, free day", "Tokio, jornada libre"], ["Journée libre dans la capitale.", "A free day in the capital.", "Jornada libre en la capital."], "cj8"),
            kr.day(14, ["Tokyo – vol retour", "Tokyo – flight home", "Tokio – vuelo de regreso"], ["Dernière journée libre, puis navette pour l'aéroport et envol pour la France.", "A last free day, then a shuttle to the airport and fly to France.", "Última jornada libre, lanzadera al aeropuerto y vuelo a Francia."], "cj7"),
            kr.day(15, T_HOME, HOME, "cj4"),
          ]),
      ],
    }),

    // ───────────── 4. Au pays des nomades — 15J/12N ─────────────
    mn.trip({
      slug: "mongolie-pays-des-nomades-gobi-orkhon-15j",
      name: ["Au pays des nomades : steppes, vallée de l'Orkhon et désert de Gobi", "Land of the Nomads: Steppes, the Orkhon Valley and the Gobi Desert", "En el país de los nómadas: estepas, valle del Orjón y desierto de Gobi"],
      tagline: ["Douze nuits entre yourtes et camps, des chevaux de Przewalski aux dunes de Khongoryn Els", "Twelve nights between yurts and camps, from Przewalski's horses to the dunes of Khongoryn Els", "Doce noches entre yurtas y campamentos, de los caballos de Przewalski a las dunas de Khongoryn Els"],
      description: [
        "La Mongolie en pension complète : Oulan-Bator, les chevaux sauvages de Przewalski du parc de Hustai, le lac sacré d'Ugii et une famille d'éleveurs nomades, les sources de Tsenkher, Karakorum, l'ancienne capitale de Gengis Khan, et la vallée de l'Orkhon, puis le Gobi : le canyon et les gravures de Tevch, les dunes de Khongoryn Els, le canyon de Yol, les falaises de Bayanzag, le monastère d'Ongi et une balade à dos de chameau à Elsen Tasarkhai. Nuits en hôtel et en yourte. Version privative à partir de 4 408 € par personne.",
        "Mongolia on full board: Ulaanbaatar, the wild Przewalski's horses of Hustai park, the sacred lake of Ugii and a family of nomadic herders, the Tsenkher hot springs, Karakorum, Genghis Khan's old capital, and the Orkhon valley, then the Gobi: the canyon and rock carvings of Tevch, the dunes of Khongoryn Els, the Yol canyon, the cliffs of Bayanzag, Ongi monastery and a camel ride at Elsen Tasarkhai. Nights in hotels and yurts. Private version from €4,408 per person.",
        "Mongolia en pensión completa: Ulán Bator, los caballos salvajes de Przewalski del parque de Hustai, el lago sagrado de Ugii y una familia de pastores nómadas, las aguas termales de Tsenkher, Karakorum, la antigua capital de Gengis Kan, y el valle del Orjón, y el Gobi: el cañón y los grabados de Tevch, las dunas de Khongoryn Els, el cañón de Yol, los acantilados de Bayanzag, el monasterio de Ongi y un paseo en camello en Elsen Tasarkhai. Noches en hotel y en yurta. Versión privada desde 4.408 € por persona.",
      ],
      includes: [
        "Vols depuis la France,Transferts aéroport,12 nuits en hôtels 4* et en yourtes,Pension complète,Excursions et visites du programme,Guide francophone",
        "Flights from France,Airport transfers,12 nights in 4* hotels and yurts,Full board,Excursions and visits in the programme,French-speaking guide",
        "Vuelos desde Francia,Traslados al aeropuerto,12 noches en hoteles de 4* y yurtas,Pensión completa,Excursiones y visitas del programa,Guía francófono",
      ],
      price: 3195, nights: 12, departureFrom: "Barcelone", image: "mo1",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -71997,
      chapters: [
        mn.chapter(["Oulan-Bator, Hustai et le lac Ugii", "Ulaanbaatar, Hustai and Lake Ugii", "Ulán Bator, Hustai y el lago Ugii"], ["La capitale, les chevaux sauvages et les nomades.", "The capital, the wild horses and the nomads.", "La capital, los caballos salvajes y los nómadas."],
          ["mo1", "mo4", "mo5"],
          [
            mn.day(1, ["Envol pour la Mongolie", "Flight to Mongolia", "Vuelo a Mongolia"], ["Envol à destination d'Oulan-Bator. Nuit à bord.", "Flight to Ulaanbaatar. Night on board.", "Vuelo con destino a Ulán Bator. Noche a bordo."], "mo2"),
            mn.day(2, ["Arrivée à Oulan-Bator", "Arrival in Ulaanbaatar", "Llegada a Ulán Bator"], ["Accueil, transfert et tour panoramique de la capitale.", "Welcome, transfer and a panoramic tour of the capital.", "Recibimiento, traslado y vuelta panorámica por la capital."], "mo2"),
            mn.day(3, ["Le parc national de Hustai", "Hustai National Park", "El parque nacional de Hustai"], ["Route vers Hustai et, en fin d'après-midi, observation des chevaux sauvages de Przewalski. Nuit en yourte.", "Drive to Hustai and, in the late afternoon, watching the wild Przewalski's horses. Night in a yurt.", "Carretera hacia Hustai y, al final de la tarde, observación de los caballos salvajes de Przewalski. Noche en yurta."], "mo1"),
            mn.day(4, ["Le lac Ugii", "Lake Ugii", "El lago Ugii"], ["Le lac sacré d'Ugii, à 1 300 m d'altitude, et la rencontre d'une famille nomade d'éleveurs de chevaux.", "The sacred lake of Ugii, at 1,300 m, and a meeting with a nomadic family of horse breeders.", "El lago sagrado de Ugii, a 1.300 m de altitud, y el encuentro con una familia nómada de criadores de caballos."], "mo4"),
            mn.day(5, ["Ugii – Tsenkher", "Ugii – Tsenkher", "Ugii – Tsenkher"], ["La nature autour du lac, puis les sources chaudes de Tsenkher.", "The nature around the lake, then the Tsenkher hot springs.", "La naturaleza alrededor del lago y las aguas termales de Tsenkher."], "mo5"),
          ]),
        mn.chapter(["Karakorum et la vallée de l'Orkhon", "Karakorum and the Orkhon valley", "Karakorum y el valle del Orjón"], ["L'ancienne capitale de l'empire mongol.", "The old capital of the Mongol empire.", "La antigua capital del imperio mongol."],
          ["mo3", "mo2"],
          [mn.day(6, ["Karakorum – vallée de l'Orkhon", "Karakorum – Orkhon valley", "Karakorum – valle del Orjón"], ["Les tortues de pierre et le monument de Gengis Khan à Karakorum, son petit musée, puis la vallée de l'Orkhon.", "The stone turtles and the Genghis Khan monument at Karakorum, its small museum, then the Orkhon valley.", "Las tortugas de piedra y el monumento a Gengis Kan en Karakorum, su pequeño museo y el valle del Orjón."], "mo3")]),
        mn.chapter(["Le désert de Gobi", "The Gobi Desert", "El desierto de Gobi"], ["Canyons, dunes et falaises de feu.", "Canyons, dunes and flaming cliffs.", "Cañones, dunas y acantilados de fuego."],
          ["mo7", "mo6", "mo2"],
          [
            mn.day(7, ["Le canyon d'Oosh et Tevch", "The Oosh canyon and Tevch", "El cañón de Oosh y Tevch"], ["Route vers le Gobi, le canyon de basalte d'Oosh et les tombes et peintures rupestres de Tevch.", "Drive to the Gobi, the basalt canyon of Oosh and the tombs and rock paintings of Tevch.", "Carretera hacia el Gobi, el cañón de basalto de Oosh y las tumbas y pinturas rupestres de Tevch."], "mo2"),
            mn.day(8, ["Les dunes de Khongoryn Els", "The dunes of Khongoryn Els", "Las dunas de Khongoryn Els"], ["Les dunes chantantes de Khongoryn Els, longues de plus de 100 km, et un pique-nique au pied du sable.", "The singing dunes of Khongoryn Els, more than 100 km long, and a picnic at the foot of the sand.", "Las dunas cantoras de Khongoryn Els, de más de 100 km de largo, y un pícnic al pie de la arena."], "mo7"),
            mn.day(9, ["Le canyon de Yol", "The Yol canyon", "El cañón de Yol"], ["Le parc de Gurvan Saikhan et le canyon de Yol, la « gorge des vautours ».", "Gurvan Saikhan park and the Yol canyon, the 'vultures' gorge'.", "El parque de Gurvan Saikhan y el cañón de Yol, la «garganta de los buitres»."], "mo2"),
            mn.day(10, ["Bayanzag", "Bayanzag", "Bayanzag"], ["Les dunes au petit matin, puis les falaises rouges de Bayanzag, célèbres pour leurs fossiles de dinosaures.", "The dunes in the early morning, then the red cliffs of Bayanzag, famous for their dinosaur fossils.", "Las dunas a primera hora y los acantilados rojos de Bayanzag, famosos por sus fósiles de dinosaurio."], "mo7"),
            mn.day(11, ["Le monastère d'Ongi", "Ongi monastery", "El monasterio de Ongi"], ["Les paysages du Gobi central et les ruines du monastère d'Ongi, au bord du fleuve.", "The landscapes of the central Gobi and the ruins of Ongi monastery, by the river.", "Los paisajes del Gobi central y las ruinas del monasterio de Ongi, junto al río."], "mo6"),
            mn.day(12, ["Elsen Tasarkhai à dos de chameau", "Elsen Tasarkhai by camel", "Elsen Tasarkhai en camello"], ["Les dunes d'Elsen Tasarkhai, une balade à dos de chameau et le monastère d'Uvgun.", "The dunes of Elsen Tasarkhai, a camel ride and Uvgun monastery.", "Las dunas de Elsen Tasarkhai, un paseo en camello y el monasterio de Uvgun."], "mo6"),
            mn.day(13, ["Retour à Oulan-Bator", "Back to Ulaanbaatar", "Regreso a Ulán Bator"], ["Route vers la capitale, après-midi libre et dîner d'adieu.", "Drive to the capital, a free afternoon and a farewell dinner.", "Carretera hacia la capital, tarde libre y cena de despedida."], "mo4"),
            mn.day(14, ["Oulan-Bator – vol retour", "Ulaanbaatar – flight home", "Ulán Bator – vuelo de regreso"], ["Temps libre, puis transfert à l'aéroport et envol pour la France.", "Free time, then transfer to the airport and fly to France.", "Tiempo libre, traslado al aeropuerto y vuelo a Francia."], "mo1"),
            mn.day(15, T_HOME, HOME, "mo7"),
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
