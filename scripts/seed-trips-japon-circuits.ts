// Japan circuits — 11 journey-format trips for the existing "japon" destination: three guided
// tours and eight independent rail journeys ("en liberté"). Extensions and the private version are
// described inside each trip. Prices are per-person "from" prices. Supplier product ids are kept in
// SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-japon-circuits.ts
// Requires scripts/upload-images-japon-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "japon-incontournables-himeji-kyoto-fuji-tokyo-12j": ["395218"],
  "japon-magie-hiroshima-koya-takayama-fuji-14j": ["395979", "395981", "395998", "401818"],
  "japon-merveilles-du-nord-hokkaido-tohoku-18j": ["395446"],
  "japon-trio-tokyo-hakone-kyoto-liberte-12j": ["404158"],
  "japon-megalopoles-tokyo-kyoto-koya-hiroshima-liberte-14j": ["395438"],
  "japon-beaute-tokyo-osaka-hiroshima-kyoto-liberte-16j": ["404758"],
  "japon-famille-tokyo-kyoto-universal-liberte-16j": ["395439"],
  "japon-esprit-shikoku-naoshima-kyoto-liberte-16j": ["410138"],
  "japon-instant-manga-okayama-miyajima-liberte-17j": ["402438"],
  "japon-panorama-fukuoka-okinawa-liberte-21j": ["410139"],
  "japon-autre-angle-kinosaki-matsue-tsuwano-liberte-21j": ["403163"],
};

const T_FLY: L3 = ["Envol pour le Japon", "Flight to Japan", "Vuelo a Japón"];
const FLY: L3 = ["Envol à destination du Japon. Nuit à bord.", "Flight to Japan. Night on board.", "Vuelo con destino a Japón. Noche a bordo."];
const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const T_TYO: L3 = ["Arrivée à Tokyo", "Arrival in Tokyo", "Llegada a Tokio"];
const TYO: L3 = [
  "Accueil à l'aéroport, remise de votre pocket wifi et transfert à l'hôtel en navette.",
  "Welcome at the airport, your pocket wifi handed over and a shuttle transfer to the hotel.",
  "Recibimiento en el aeropuerto, entrega de su pocket wifi y traslado al hotel en lanzadera.",
];
const T_GOLDEN: L3 = ["Tokyo, Kabukicho et Golden Gai", "Tokyo, Kabukicho and Golden Gai", "Tokio, Kabukicho y Golden Gai"];
const GOLDEN: L3 = [
  "Journée libre (Harajuku, le sanctuaire Meiji, Shibuya). En début de soirée, votre guide vous emmène dans les ruelles de Kabukicho et du Golden Gai.",
  "A free day (Harajuku, Meiji shrine, Shibuya). In the early evening, your guide takes you through the lanes of Kabukicho and Golden Gai.",
  "Jornada libre (Harajuku, el santuario Meiji, Shibuya). Al anochecer, su guía le lleva por las callejuelas de Kabukicho y el Golden Gai.",
];
const T_TYO_FREE: L3 = ["Tokyo, journée libre", "Tokyo, free day", "Tokio, jornada libre"];
const TYO_FREE: L3 = [
  "Journée libre : Ginza, le marché de Tsukiji, le jardin Hama-rikyu, Asakusa et le temple Senso-ji.",
  "A free day: Ginza, Tsukiji market, Hama-rikyu garden, Asakusa and Senso-ji temple.",
  "Jornada libre: Ginza, el mercado de Tsukiji, el jardín Hama-rikyu, Asakusa y el templo Senso-ji.",
];
const T_HAKONE: L3 = ["Tokyo – Hakone et le ryokan", "Tokyo – Hakone and the ryokan", "Tokio – Hakone y el ryokan"];
const HAKONE: L3 = [
  "Vos bagages partent directement vers l'étape suivante. Train pour Hakone, au pied du mont Fuji, et nuit en ryokan avec dîner japonais.",
  "Your luggage goes straight on to the next stop. Train to Hakone, at the foot of Mount Fuji, and a night in a ryokan with a Japanese dinner.",
  "Su equipaje viaja directamente a la siguiente etapa. Tren a Hakone, al pie del monte Fuji, y noche en un ryokan con cena japonesa.",
];
const T_KYOTO_FREE: L3 = ["Kyoto, journée libre", "Kyoto, free day", "Kioto, jornada libre"];
const KYOTO_FREE: L3 = [
  "Journée libre : le jardin zen du Ryoan-ji, le Pavillon d'or et le Pavillon d'argent, le chemin des Philosophes, le marché Nishiki ou la bambouseraie d'Arashiyama.",
  "A free day: the Zen garden of Ryoan-ji, the Golden and Silver Pavilions, the Philosopher's Path, Nishiki market or the Arashiyama bamboo grove.",
  "Jornada libre: el jardín zen del Ryoan-ji, los pabellones de Oro y de Plata, el camino de los Filósofos, el mercado Nishiki o el bosque de bambú de Arashiyama.",
];
const T_NARA: L3 = ["Excursion à Nara", "A day trip to Nara", "Excursión a Nara"];
const NARA: L3 = [
  "Train pour Nara : le Todai-ji et son grand Bouddha de bronze, le sanctuaire Kasuga-taisha et ses lanternes, les daims en liberté.",
  "Train to Nara: Todai-ji and its great bronze Buddha, Kasuga-taisha shrine and its lanterns, the free-roaming deer.",
  "Tren a Nara: el Todai-ji y su gran Buda de bronce, el santuario Kasuga-taisha y sus faroles, los ciervos en libertad.",
];
const T_MIYAJIMA: L3 = ["Hiroshima et Miyajima", "Hiroshima and Miyajima", "Hiroshima y Miyajima"];
const MIYAJIMA: L3 = [
  "Le parc du Mémorial de la Paix d'Hiroshima, puis train et bateau jusqu'à l'île de Miyajima et le torii flottant du sanctuaire d'Itsukushima.",
  "Hiroshima's Peace Memorial Park, then train and boat to Miyajima island and the floating torii of Itsukushima shrine.",
  "El parque del Memorial de la Paz de Hiroshima, y tren y barco hasta la isla de Miyajima y el torii flotante del santuario de Itsukushima.",
];
const T_OSAKA: L3 = ["Osaka", "Osaka", "Osaka"];
const OSAKA: L3 = [
  "Journée libre : le château d'Osaka, l'aquarium Kaiyukan et le soir les néons de Dotonbori et le marché Kuromon.",
  "A free day: Osaka castle, the Kaiyukan aquarium and in the evening the neon lights of Dotonbori and Kuromon market.",
  "Jornada libre: el castillo de Osaka, el acuario Kaiyukan y por la noche los neones de Dotonbori y el mercado Kuromon.",
];
const LIB_INC = (nights: number): L3 => [
  `Vols depuis la France,${nights} nuits en hôtels 3* et maisons traditionnelles,Carte de transport et trajets en train du programme,Transfert des bagages,Pocket wifi,Accueil à l'aéroport`,
  `Flights from France,${nights} nights in 3* hotels and traditional houses,Transport card and train journeys in the programme,Luggage forwarding,Pocket wifi,Airport welcome`,
  `Vuelos desde Francia,${nights} noches en hoteles de 3* y casas tradicionales,Tarjeta de transporte y trayectos en tren del programa,Envío de equipaje,Pocket wifi,Recibimiento en el aeropuerto`,
];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { day, chapter, trip } = circuitBuilders({
    destinationSlug: "japon",
    imagePrefix: "japon",
    season: { label: ["Mars-mai, oct-nov", "Mar-May, Oct-Nov", "Mar-may, oct-nov"], months: "march,april,may,october,november" },
  });
  const homeFrom = (n: number, from: L3, img: string, img2: string) => [
    day(n, [`${from[0]} – vol retour`, `${from[1]} – flight home`, `${from[2]} – vuelo de regreso`], ["Transfert à l'aéroport et envol pour la France.", "Transfer to the airport and fly to France.", "Traslado al aeropuerto y vuelo a Francia."], img),
    day(n + 1, T_HOME, HOME, img2),
  ];
  const KY: L3 = ["Kyoto", "Kyoto", "Kioto"];
  const OS: L3 = ["Osaka", "Osaka", "Osaka"];
  const TK: L3 = ["Tokyo", "Tokyo", "Tokio"];

  const journeyTrips = [
    // ───────────── 1. Incontournables du Japon — 12J/9N ─────────────
    trip({
      slug: "japon-incontournables-himeji-kyoto-fuji-tokyo-12j",
      name: ["Les incontournables du Japon : Himeji, Kyoto, le mont Fuji et Tokyo", "Japan Highlights: Himeji, Kyoto, Mount Fuji and Tokyo", "Lo esencial de Japón: Himeji, Kioto, el monte Fuji y Tokio"],
      tagline: ["Le circuit accompagné d'Osaka à Tokyo, avec une nuit en ryokan face au Fuji", "The guided tour from Osaka to Tokyo, with a night in a ryokan facing Mount Fuji", "El circuito acompañado de Osaka a Tokio, con una noche en ryokan frente al Fuji"],
      description: [
        "Le Japon classique en groupe accompagné : le château de Himeji, Hiroshima et l'île de Miyajima, Kyoto (la bambouseraie de Sagano, le Pavillon d'or, le Ryoan-ji, le Kiyomizu-dera), Nara et ses daims, le sanctuaire d'Ise et l'île aux perles Mikimoto, une nuit en ryokan au bord du lac Kawaguchi et une croisière face au mont Fuji, puis Tokyo en métro.",
        "Classic Japan on a guided group tour: Himeji castle, Hiroshima and Miyajima island, Kyoto (the Sagano bamboo grove, the Golden Pavilion, Ryoan-ji, Kiyomizu-dera), Nara and its deer, Ise shrine and Mikimoto Pearl Island, a night in a ryokan by Lake Kawaguchi and a cruise facing Mount Fuji, then Tokyo by metro.",
        "El Japón clásico en grupo acompañado: el castillo de Himeji, Hiroshima y la isla de Miyajima, Kioto (el bosque de bambú de Sagano, el Pabellón de Oro, el Ryoan-ji, el Kiyomizu-dera), Nara y sus ciervos, el santuario de Ise y la isla de las perlas Mikimoto, una noche en ryokan junto al lago Kawaguchi y un crucero frente al monte Fuji, y Tokio en metro.",
      ],
      includes: [
        "Vols depuis la France (aller Osaka; retour Tokyo),Transferts et trajets du programme,9 nuits en hôtels 3* dont 1 en ryokan,Pension selon programme,Visites du programme,Guide accompagnateur",
        "Flights from France (out to Osaka; back from Tokyo),Transfers and journeys in the programme,9 nights in 3* hotels including 1 in a ryokan,Meals as per programme,Visits in the programme,Tour guide",
        "Vuelos desde Francia (ida a Osaka; regreso desde Tokio),Traslados y trayectos del programa,9 noches en hoteles de 3* con 1 en ryokan,Comidas según programa,Visitas del programa,Guía acompañante",
      ],
      price: 3907, nights: 9, departureFrom: "Bruxelles", image: "ic6",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 35, order: -74000,
      chapters: [
        chapter(["Himeji, Hiroshima et Miyajima", "Himeji, Hiroshima and Miyajima", "Himeji, Hiroshima y Miyajima"], ["Le château du Héron blanc et le torii flottant.", "The White Heron castle and the floating torii.", "El castillo de la Garza Blanca y el torii flotante."],
          ["ic1", "mg2", "me8"],
          [
            day(1, T_FLY, FLY, "ic2"),
            day(2, ["Arrivée à Osaka – Himeji", "Arrival in Osaka – Himeji", "Llegada a Osaka – Himeji"], ["Accueil à l'aéroport d'Osaka et route vers Himeji.", "Welcome at Osaka airport and drive to Himeji.", "Recibimiento en el aeropuerto de Osaka y carretera hacia Himeji."], "mg2"),
            day(3, ["Le château de Himeji – Hiroshima", "Himeji castle – Hiroshima", "El castillo de Himeji – Hiroshima"], ["Le château de Himeji, l'un des douze derniers châteaux en bois du Japon, classé à l'Unesco, puis Hiroshima.", "Himeji castle, one of Japan's last twelve wooden castles, a UNESCO site, then Hiroshima.", "El castillo de Himeji, uno de los doce últimos castillos de madera de Japón, inscrito en la Unesco, e Hiroshima."], "ic1"),
            day(4, ["Miyajima – Kyoto", "Miyajima – Kyoto", "Miyajima – Kioto"], ["Ferry vers l'île sacrée de Miyajima et le sanctuaire d'Itsukushima, puis train pour Kyoto.", "Ferry to the sacred island of Miyajima and Itsukushima shrine, then train to Kyoto.", "Ferri a la isla sagrada de Miyajima y el santuario de Itsukushima, y tren a Kioto."], "me8"),
          ]),
        chapter(["Kyoto, Nara et Ise", "Kyoto, Nara and Ise", "Kioto, Nara e Ise"], ["Temples, daims et sanctuaire shinto.", "Temples, deer and a Shinto shrine.", "Templos, ciervos y santuario sintoísta."],
          ["ic5", "me4", "me5", "ic4"],
          [
            day(5, ["Kyoto", "Kyoto", "Kioto"], ["La bambouseraie de Sagano, le Pavillon d'or et le jardin zen du Ryoan-ji, puis le Kiyomizu-dera à flanc de colline.", "The Sagano bamboo grove, the Golden Pavilion and the Zen garden of Ryoan-ji, then Kiyomizu-dera on its hillside.", "El bosque de bambú de Sagano, el Pabellón de Oro y el jardín zen del Ryoan-ji, y el Kiyomizu-dera en la ladera."], "ic5"),
            day(6, ["Nara – Iga", "Nara – Iga", "Nara – Iga"], ["Le quartier traditionnel de Naramachi, les daims du parc et le temple Todai-ji et son grand Bouddha.", "The traditional Naramachi quarter, the deer in the park and Todai-ji temple and its great Buddha.", "El barrio tradicional de Naramachi, los ciervos del parque y el templo Todai-ji y su gran Buda."], "me5"),
            day(7, ["Ise et l'île aux perles", "Ise and Pearl Island", "Ise y la isla de las perlas"], ["Le grand sanctuaire d'Ise, dédié à la déesse Amaterasu, puis Mikimoto Pearl Island et ses plongeuses.", "The great shrine of Ise, dedicated to the goddess Amaterasu, then Mikimoto Pearl Island and its divers.", "El gran santuario de Ise, dedicado a la diosa Amaterasu, y la isla de las perlas Mikimoto y sus buceadoras."], "ic4"),
          ]),
        chapter(["Le mont Fuji et Tokyo", "Mount Fuji and Tokyo", "El monte Fuji y Tokio"], ["Une nuit en ryokan, puis la capitale.", "A night in a ryokan, then the capital.", "Una noche en ryokan y la capital."],
          ["ic6", "ic2", "ic3", "ic9"],
          [
            day(8, ["Kawaguchiko, nuit en ryokan", "Kawaguchiko, a night in a ryokan", "Kawaguchiko, noche en ryokan"], ["Route vers le lac Kawaguchi, marché aux poissons et dégustation de thé, puis dîner traditionnel et nuit en ryokan.", "Drive to Lake Kawaguchi, a fish market and a tea tasting, then a traditional dinner and a night in a ryokan.", "Carretera hacia el lago Kawaguchi, mercado de pescado y degustación de té, y cena tradicional y noche en ryokan."], "ic6"),
            day(9, ["Croisière face au Fuji – Tokyo", "A cruise facing Mount Fuji – Tokyo", "Crucero frente al Fuji – Tokio"], ["Bateau sur le lac Kawaguchi et sa vue sur le mont Fuji, puis route vers Tokyo.", "A boat on Lake Kawaguchi and its view of Mount Fuji, then drive to Tokyo.", "Barco por el lago Kawaguchi y su vista sobre el monte Fuji, y carretera hacia Tokio."], "ic2"),
            day(10, ["Tokyo en métro", "Tokyo by metro", "Tokio en metro"], ["Le marché de Tsukiji, le jardin Hama-rikyu, Asakusa, puis Harajuku et ses boutiques.", "Tsukiji market, Hama-rikyu garden, Asakusa, then Harajuku and its shops.", "El mercado de Tsukiji, el jardín Hama-rikyu, Asakusa y Harajuku y sus tiendas."], "ic3"),
            ...homeFrom(11, TK, "ic9", "ic6"),
          ]),
      ],
    }),

    // ───────────── 2. Magie du Japon — 14J/11N ─────────────
    trip({
      slug: "japon-magie-hiroshima-koya-takayama-fuji-14j",
      name: ["Magie du Japon : Hiroshima, mont Koya, Shirakawa-go, Takayama et le Fuji", "The Magic of Japan: Hiroshima, Mount Koya, Shirakawa-go, Takayama and Fuji", "Magia de Japón: Hiroshima, monte Koya, Shirakawa-go, Takayama y el Fuji"],
      tagline: ["Le grand circuit accompagné, avec une nuit au monastère et les villages des Alpes japonaises", "The grand guided tour, with a night in a monastery and the villages of the Japanese Alps", "El gran circuito acompañado, con una noche en un monasterio y los pueblos de los Alpes japoneses"],
      description: [
        "Le Japon en profondeur, en groupe de 24 personnes au plus : Osaka, Himeji et Hiroshima, l'île de Miyajima, Kurashiki, Kyoto (le château de Nijo, le marché Nishiki, Gion), le sanctuaire Fushimi Inari et Nara, une nuit dans un monastère du mont Koya, le musée des ninjas d'Iga, le temple Eiheiji, le jardin Kenrokuen de Kanazawa, le village de Shirakawa-go et Takayama, une ferme de wasabi, puis le lac Kawaguchi, la pagode Chureito et Tokyo. Extension à Tokyo (17 jours) à partir de 5 511 € par personne ou à Okinawa (6 429 €) ; version privative à partir de 15 506 €.",
        "Japan in depth, in a group of 24 at most: Osaka, Himeji and Hiroshima, Miyajima island, Kurashiki, Kyoto (Nijo castle, Nishiki market, Gion), Fushimi Inari shrine and Nara, a night in a monastery on Mount Koya, the ninja museum at Iga, Eiheiji temple, Kanazawa's Kenrokuen garden, the village of Shirakawa-go and Takayama, a wasabi farm, then Lake Kawaguchi, the Chureito pagoda and Tokyo. Extension in Tokyo (17 days) from €5,511 per person or to Okinawa (€6,429); private version from €15,506.",
        "Japón a fondo, en grupo de 24 personas como máximo: Osaka, Himeji e Hiroshima, la isla de Miyajima, Kurashiki, Kioto (el castillo de Nijo, el mercado Nishiki, Gion), el santuario Fushimi Inari y Nara, una noche en un monasterio del monte Koya, el museo de los ninjas de Iga, el templo Eiheiji, el jardín Kenrokuen de Kanazawa, el pueblo de Shirakawa-go y Takayama, una granja de wasabi, y el lago Kawaguchi, la pagoda Chureito y Tokio. Extensión en Tokio (17 días) desde 5.511 € por persona o a Okinawa (6.429 €); versión privada desde 15.506 €.",
      ],
      includes: [
        "Vols depuis la France (aller Osaka; retour Tokyo),Trains, Shinkansen, ferry et transports du programme,11 nuits en hôtels 3* et 4* dont 1 au monastère,Pension selon programme,Visites du programme,Guide accompagnateur francophone",
        "Flights from France (out to Osaka; back from Tokyo),Trains, Shinkansen, ferry and transport in the programme,11 nights in 3* and 4* hotels including 1 in a monastery,Meals as per programme,Visits in the programme,French-speaking tour guide",
        "Vuelos desde Francia (ida a Osaka; regreso desde Tokio),Trenes, Shinkansen, ferri y transportes del programa,11 noches en hoteles de 3* y 4* con 1 en un monasterio,Comidas según programa,Visitas del programa,Guía acompañante francófono",
      ],
      price: 4898, nights: 11, departureFrom: "Barcelone", image: "mg1",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 24, order: -73999,
      chapters: [
        chapter(["Osaka, Hiroshima et Kurashiki", "Osaka, Hiroshima and Kurashiki", "Osaka, Hiroshima y Kurashiki"], ["Du marché Kuromon au mémorial de la Paix.", "From Kuromon market to the Peace Memorial.", "Del mercado Kuromon al Memorial de la Paz."],
          ["mg2", "mg3", "tr1"],
          [
            day(1, T_FLY, FLY, "tr1"),
            day(2, ["Arrivée à Osaka", "Arrival in Osaka", "Llegada a Osaka"], ["Accueil par votre assistant francophone et transfert à l'hôtel. Journée libre.", "Welcome by your French-speaking assistant and transfer to the hotel. A free day.", "Recibimiento por su asistente francófono y traslado al hotel. Jornada libre."], "ic8"),
            day(3, ["Osaka – Himeji – Hiroshima", "Osaka – Himeji – Hiroshima", "Osaka – Himeji – Hiroshima"], ["Le marché Kuromon et le quartier de Dotonbori, puis train vers Himeji et son château, avant Hiroshima.", "Kuromon market and the Dotonbori quarter, then train to Himeji and its castle, before Hiroshima.", "El mercado Kuromon y el barrio de Dotonbori, y tren a Himeji y su castillo, antes de Hiroshima."], "mg2"),
            day(4, T_MIYAJIMA, ["Le dôme de Genbaku et le parc du Mémorial de la Paix, puis l'île de Miyajima et son torii flottant.", "The Genbaku Dome and the Peace Memorial Park, then Miyajima island and its floating torii.", "La cúpula Genbaku y el parque del Memorial de la Paz, y la isla de Miyajima y su torii flotante."], "mg3"),
            day(5, ["Kurashiki – Kyoto", "Kurashiki – Kyoto", "Kurashiki – Kioto"], ["Shinkansen vers Kurashiki et son quartier historique de Bikan le long des canaux, puis Kyoto.", "Shinkansen to Kurashiki and its historic Bikan quarter along the canals, then Kyoto.", "Shinkansen a Kurashiki y su barrio histórico de Bikan junto a los canales, y Kioto."], "ic7"),
          ]),
        chapter(["Kyoto, Nara et le mont Koya", "Kyoto, Nara and Mount Koya", "Kioto, Nara y el monte Koya"], ["Palais, marchés, toriis et une nuit chez les moines.", "Palaces, markets, torii gates and a night with the monks.", "Palacios, mercados, toriis y una noche con los monjes."],
          ["mg4", "mg5", "tr6", "me7"],
          [
            day(6, KY, ["Le château de Nijo, résidence des shoguns, le marché Nishiki, puis les ruelles de Higashiyama et le quartier de Gion.", "Nijo castle, residence of the shoguns, Nishiki market, then the lanes of Higashiyama and the Gion quarter.", "El castillo de Nijo, residencia de los shogunes, el mercado Nishiki y las callejuelas de Higashiyama y el barrio de Gion."], "mg4"),
            day(7, ["Fushimi Inari, Nara – mont Koya", "Fushimi Inari, Nara – Mount Koya", "Fushimi Inari, Nara – monte Koya"], ["Le sanctuaire aux mille toriis de Fushimi Inari, puis Nara, le Todai-ji et ses daims, avant une nuit dans un monastère du mont Koya.", "The shrine of a thousand torii gates at Fushimi Inari, then Nara, Todai-ji and its deer, before a night in a monastery on Mount Koya.", "El santuario de los mil toriis de Fushimi Inari, y Nara, el Todai-ji y sus ciervos, antes de una noche en un monasterio del monte Koya."], "tr6"),
            day(8, ["Mont Koya – Iga – Fukui", "Mount Koya – Iga – Fukui", "Monte Koya – Iga – Fukui"], ["Prière des moines au réveil, puis le musée des ninjas d'Iga et son spectacle, avant la route vers Fukui.", "The monks' prayer at dawn, then the ninja museum at Iga and its show, before the drive to Fukui.", "Oración de los monjes al amanecer, y el museo de los ninjas de Iga y su espectáculo, antes de la carretera hacia Fukui."], "me7"),
          ]),
        chapter(["Les Alpes japonaises et le Fuji", "The Japanese Alps and Mount Fuji", "Los Alpes japoneses y el Fuji"], ["Kanazawa, Shirakawa-go, Takayama et le lac Kawaguchi.", "Kanazawa, Shirakawa-go, Takayama and Lake Kawaguchi.", "Kanazawa, Shirakawa-go, Takayama y el lago Kawaguchi."],
          ["mg7", "mg6", "mg1", "mg8"],
          [
            day(9, ["Eiheiji, Kanazawa, Shirakawa-go – Takayama", "Eiheiji, Kanazawa, Shirakawa-go – Takayama", "Eiheiji, Kanazawa, Shirakawa-go – Takayama"], ["Le temple Eiheiji dans la forêt, le jardin Kenrokuen et le quartier des samouraïs de Kanazawa, puis les maisons au toit de chaume de Shirakawa-go et Takayama.", "Eiheiji temple in the forest, Kenrokuen garden and the samurai quarter of Kanazawa, then the thatched houses of Shirakawa-go and Takayama.", "El templo Eiheiji en el bosque, el jardín Kenrokuen y el barrio samurái de Kanazawa, y las casas de tejado de paja de Shirakawa-go y Takayama."], "mg7"),
            day(10, ["Matsumoto et le wasabi – Kawaguchiko", "Matsumoto and wasabi – Kawaguchiko", "Matsumoto y el wasabi – Kawaguchiko"], ["La ferme de wasabi Daio près de Matsumoto, puis la route vers le lac Kawaguchi, au pied du Fuji.", "The Daio wasabi farm near Matsumoto, then the drive to Lake Kawaguchi, at the foot of Mount Fuji.", "La granja de wasabi Daio cerca de Matsumoto, y la carretera hacia el lago Kawaguchi, al pie del Fuji."], "mg6"),
            day(11, ["Le lac Kawaguchi et la pagode Chureito – Tokyo", "Lake Kawaguchi and the Chureito pagoda – Tokyo", "El lago Kawaguchi y la pagoda Chureito – Tokio"], ["Croisière sur le lac face au Fuji, puis la pagode Chureito, avant Tokyo.", "A cruise on the lake facing Mount Fuji, then the Chureito pagoda, before Tokyo.", "Crucero por el lago frente al Fuji y la pagoda Chureito, antes de Tokio."], "mg1"),
            day(12, ["Tokyo comme un Tokyoïte", "Tokyo like a local", "Tokio como un local"], ["Découverte de la capitale en transports en commun, de quartier en quartier.", "Discovering the capital by public transport, from one district to the next.", "Descubrimiento de la capital en transporte público, de barrio en barrio."], "mg8"),
            ...homeFrom(13, TK, "ic9", "mg1"),
          ]),
      ],
    }),

    // ───────────── 3. Merveilles du Nord du Japon — 18J/15N ─────────────
    trip({
      slug: "japon-merveilles-du-nord-hokkaido-tohoku-18j",
      name: ["Merveilles du nord du Japon : Hokkaido et le Tohoku", "Wonders of Northern Japan: Hokkaido and Tohoku", "Maravillas del norte de Japón: Hokkaido y Tohoku"],
      tagline: ["Shiretoko, les lacs volcaniques, Matsushima et les monts sacrés de Dewa, avec un guide francophone", "Shiretoko, the volcanic lakes, Matsushima and the sacred Dewa mountains, with a French-speaking guide", "Shiretoko, los lagos volcánicos, Matsushima y los montes sagrados de Dewa, con un guía francófono"],
      description: [
        "Un Japon loin des foules, avec un guide accompagnateur francophone : vol pour Hokkaido, la péninsule sauvage de Shiretoko et sa croisière, les lacs Mashu et Akan, Sapporo, le Bouddha de Tadao Ando et le musée aïnou Upopoy, une nuit de traversée vers Akita, la ville de samouraïs de Kakunodate, le lac Tazawa, Hiraizumi classé à l'Unesco, la baie de Matsushima, Sendai, la distillerie Nikka, le temple perché de Yamadera, les monts Dewa Sanzan et la pagode du mont Haguro, puis Sakata.",
        "A Japan far from the crowds, with a French-speaking tour guide: a flight to Hokkaido, the wild Shiretoko peninsula and its cruise, Lakes Mashu and Akan, Sapporo, Tadao Ando's Buddha and the Upopoy Ainu museum, an overnight crossing to Akita, the samurai town of Kakunodate, Lake Tazawa, UNESCO-listed Hiraizumi, Matsushima Bay, Sendai, the Nikka distillery, the cliffside temple of Yamadera, the Dewa Sanzan mountains and the Mount Haguro pagoda, then Sakata.",
        "Un Japón lejos de las multitudes, con un guía acompañante francófono: vuelo a Hokkaido, la península salvaje de Shiretoko y su crucero, los lagos Mashu y Akan, Sapporo, el Buda de Tadao Ando y el museo ainu Upopoy, una travesía nocturna hasta Akita, la ciudad samurái de Kakunodate, el lago Tazawa, Hiraizumi inscrito en la Unesco, la bahía de Matsushima, Sendai, la destilería Nikka, el templo colgado de Yamadera, los montes Dewa Sanzan y la pagoda del monte Haguro, y Sakata.",
      ],
      includes: [
        "Vols depuis la France,Vol intérieur Tokyo – Hokkaido,15 nuits en hôtels 3* et 4* dont 2 en ryokan et 1 au temple,Pension selon programme,Visites du programme,Guide accompagnateur francophone",
        "Flights from France,Tokyo – Hokkaido domestic flight,15 nights in 3* and 4* hotels including 2 in ryokans and 1 in a temple,Meals as per programme,Visits in the programme,French-speaking tour guide",
        "Vuelos desde Francia,Vuelo interior Tokio – Hokkaido,15 noches en hoteles de 3* y 4* con 2 en ryokan y 1 en un templo,Comidas según programa,Visitas del programa,Guía acompañante francófono",
      ],
      price: 8688, nights: 15, departureFrom: "Barcelone", image: "no2",
      theme: "adventure", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -73998,
      chapters: [
        chapter(["Hokkaido", "Hokkaido", "Hokkaido"], ["La péninsule de Shiretoko, les lacs volcaniques et Sapporo.", "The Shiretoko peninsula, the volcanic lakes and Sapporo.", "La península de Shiretoko, los lagos volcánicos y Sapporo."],
          ["no2", "no1", "no3", "no4"],
          [
            day(1, T_FLY, FLY, "no4"),
            day(2, ["Arrivée à Tokyo", "Arrival in Tokyo", "Llegada a Tokio"], ["Transfert privé à l'hôtel. Le soir, rencontre avec votre guide et dîner.", "Private transfer to the hotel. In the evening, meet your guide and dinner.", "Traslado privado al hotel. Por la noche, encuentro con su guía y cena."], "pn3"),
            day(3, ["Vol pour Hokkaido – Shiretoko", "Flight to Hokkaido – Shiretoko", "Vuelo a Hokkaido – Shiretoko"], ["Vol pour Hokkaido, le musée de la glace d'Okhotsk et l'ancienne prison d'Abashiri, puis le parc national de Shiretoko.", "Flight to Hokkaido, the Okhotsk ice museum and the old Abashiri prison, then Shiretoko National Park.", "Vuelo a Hokkaido, el museo del hielo de Ojotsk y la antigua prisión de Abashiri, y el parque nacional de Shiretoko."], "no1"),
            day(4, ["Croisière à Shiretoko", "A Shiretoko cruise", "Crucero en Shiretoko"], ["Croisière le long de la péninsule, ses grottes, ses cascades et sa faune préservée.", "A cruise along the peninsula, its caves, waterfalls and protected wildlife.", "Crucero a lo largo de la península, sus cuevas, cascadas y fauna protegida."], "no1"),
            day(5, ["Les lacs Mashu et Akan", "Lakes Mashu and Akan", "Los lagos Mashu y Akan"], ["Le lac Mashu, le volcan Io et le lac Akan. Nuit en ryokan.", "Lake Mashu, the Io volcano and Lake Akan. Night in a ryokan.", "El lago Mashu, el volcán Io y el lago Akan. Noche en ryokan."], "no2"),
            day(6, ["Lac Akan – Sapporo", "Lake Akan – Sapporo", "Lago Akan – Sapporo"], ["Un lac aux eaux colorées et un vignoble, puis train pour Sapporo.", "A lake with coloured waters and a vineyard, then train to Sapporo.", "Un lago de aguas de colores y un viñedo, y tren a Sapporo."], "no3"),
            day(7, ["Sapporo, journée libre", "Sapporo, free day", "Sapporo, jornada libre"], ["Journée libre, par exemple à Otaru et ses canaux.", "A free day, for example in Otaru and its canals.", "Jornada libre, por ejemplo en Otaru y sus canales."], "no4"),
            day(8, ["Noboribetsu – traversée vers Akita", "Noboribetsu – crossing to Akita", "Noboribetsu – travesía a Akita"], ["La colline du Bouddha de Tadao Ando, le musée national aïnou Upopoy et les sources chaudes de Noboribetsu, puis une nuit de traversée vers Akita.", "Tadao Ando's Hill of the Buddha, the Upopoy national Ainu museum and the Noboribetsu hot springs, then an overnight crossing to Akita.", "La colina del Buda de Tadao Ando, el museo nacional ainu Upopoy y las aguas termales de Noboribetsu, y una travesía nocturna hasta Akita."], "no5"),
          ]),
        chapter(["Le Tohoku", "Tohoku", "Tohoku"], ["Samouraïs, temples, baies et montagnes sacrées.", "Samurai, temples, bays and sacred mountains.", "Samuráis, templos, bahías y montañas sagradas."],
          ["no6", "no8", "no9", "no10", "no7"],
          [
            day(9, ["Akita – Kakunodate", "Akita – Kakunodate", "Akita – Kakunodate"], ["Le musée d'art d'Akita et les œuvres de Foujita, puis Kakunodate et son quartier de samouraïs.", "The Akita museum of art and the works of Foujita, then Kakunodate and its samurai quarter.", "El museo de arte de Akita y las obras de Foujita, y Kakunodate y su barrio samurái."], "no6"),
            day(10, ["Lac Tazawa – Morioka", "Lake Tazawa – Morioka", "Lago Tazawa – Morioka"], ["Une brasserie traditionnelle de sauce soja et de miso, le lac Tazawa, puis le temple zen Hoon-ji à Morioka.", "A traditional soy sauce and miso brewery, Lake Tazawa, then the Zen temple of Hoon-ji in Morioka.", "Una fábrica tradicional de salsa de soja y miso, el lago Tazawa y el templo zen Hoon-ji en Morioka."], "no7"),
            day(11, ["Hiraizumi – Matsushima", "Hiraizumi – Matsushima", "Hiraizumi – Matsushima"], ["Hiraizumi, classé à l'Unesco, et le pavillon doré du temple Chuson-ji, puis Matsushima.", "Hiraizumi, a UNESCO site, and the golden hall of Chuson-ji temple, then Matsushima.", "Hiraizumi, inscrito en la Unesco, y el pabellón dorado del templo Chuson-ji, y Matsushima."], "no9"),
            day(12, ["La baie de Matsushima – Sendai", "Matsushima Bay – Sendai", "La bahía de Matsushima – Sendai"], ["Bateau dans la baie de Matsushima et ses îlots couverts de pins, puis Sendai.", "A boat in Matsushima Bay and its pine-covered islets, then Sendai.", "Barco por la bahía de Matsushima y sus islotes cubiertos de pinos, y Sendai."], "no8"),
            day(13, ["Sendai, journée libre", "Sendai, free day", "Sendai, jornada libre"], ["Journée libre dans la « cité des arbres ».", "A free day in the 'city of trees'.", "Jornada libre en la «ciudad de los árboles»."], "no8"),
            day(14, ["Nikka, Yamadera – Dewa Sanzan", "Nikka, Yamadera – Dewa Sanzan", "Nikka, Yamadera – Dewa Sanzan"], ["La distillerie Nikka Miyagikyo, le temple perché de Yamadera, puis les monts sacrés de Dewa Sanzan et une nuit au temple.", "The Nikka Miyagikyo distillery, the cliffside temple of Yamadera, then the sacred Dewa Sanzan mountains and a night in a temple.", "La destilería Nikka Miyagikyo, el templo colgado de Yamadera y los montes sagrados de Dewa Sanzan, con noche en un templo."], "no10"),
            day(15, ["Le mont Haguro – Sakata", "Mount Haguro – Sakata", "El monte Haguro – Sakata"], ["La pagode à cinq étages du mont Haguro au milieu des cèdres, puis Sakata.", "The five-storey pagoda of Mount Haguro among the cedars, then Sakata.", "La pagoda de cinco pisos del monte Haguro entre los cedros, y Sakata."], "no7"),
            day(16, ["Sakata – Tokyo", "Sakata – Tokyo", "Sakata – Tokio"], ["Le musée d'art Honma et ses jardins, un dernier déjeuner, puis train pour Tokyo.", "The Honma art museum and its gardens, a farewell lunch, then train to Tokyo.", "El museo de arte Honma y sus jardines, un último almuerzo y tren a Tokio."], "pn3"),
            ...homeFrom(17, TK, "pn3", "no2"),
          ]),
      ],
    }),

    // ───────────── 4. Trio Évasion japonaise — 12J/9N ─────────────
    trip({
      slug: "japon-trio-tokyo-hakone-kyoto-liberte-12j",
      name: ["Trio japonais en liberté : Tokyo, Hakone et Kyoto", "Japanese Trio at Your Own Pace: Tokyo, Hakone and Kyoto", "Trío japonés en libertad: Tokio, Hakone y Kioto"],
      tagline: ["Le premier voyage idéal : la capitale, une nuit en ryokan et l'ancienne capitale impériale", "The ideal first trip: the capital, a night in a ryokan and the old imperial capital", "El primer viaje ideal: la capital, una noche en ryokan y la antigua capital imperial"],
      description: [
        "Un voyage en liberté, avec vos trains et vos hôtels réservés : quatre nuits à Tokyo avec une soirée guidée à Kabukicho et au Golden Gai, une nuit en ryokan à Hakone avec dîner japonais, le Shinkansen vers Kyoto et une balade guidée de nuit dans le quartier historique, puis quatre jours libres à Kyoto et une excursion à Nara. Pocket wifi, carte de transport et transfert des bagages inclus.",
        "An independent trip, with your trains and hotels booked: four nights in Tokyo with a guided evening in Kabukicho and Golden Gai, a night in a ryokan in Hakone with a Japanese dinner, the Shinkansen to Kyoto and a guided night walk in the historic quarter, then four free days in Kyoto and a day trip to Nara. Pocket wifi, transport card and luggage forwarding included.",
        "Un viaje en libertad, con sus trenes y hoteles reservados: cuatro noches en Tokio con una velada guiada en Kabukicho y el Golden Gai, una noche en ryokan en Hakone con cena japonesa, el Shinkansen a Kioto y un paseo guiado nocturno por el barrio histórico, y cuatro días libres en Kioto con una excursión a Nara. Pocket wifi, tarjeta de transporte y envío de equipaje incluidos.",
      ],
      includes: LIB_INC(9),
      price: 2337, nights: 9, departureFrom: "Paris", image: "tr7",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,solo,honeymoon", maxGuests: 8, order: -73997,
      chapters: [
        chapter(["Tokyo et Hakone", "Tokyo and Hakone", "Tokio y Hakone"], ["Quatre nuits dans la capitale, puis le ryokan.", "Four nights in the capital, then the ryokan.", "Cuatro noches en la capital y el ryokan."],
          ["tr1", "tr2", "tr3", "tr4"],
          [day(1, T_FLY, FLY, "tr1"), day(2, T_TYO, TYO, "tr3"), day(3, T_GOLDEN, GOLDEN, "tr1"), day(4, T_TYO_FREE, TYO_FREE, "tr2"), day(5, T_TYO_FREE, TYO_FREE, "tr3"), day(6, T_HAKONE, HAKONE, "tr4")]),
        chapter([KY[0], KY[1], KY[2]], ["Le Shinkansen, puis l'ancienne capitale à votre rythme.", "The Shinkansen, then the old capital at your own pace.", "El Shinkansen y la antigua capital a su ritmo."],
          ["tr6", "tr5", "tr7"],
          [
            day(7, ["Hakone – Kyoto en Shinkansen", "Hakone – Kyoto by Shinkansen", "Hakone – Kioto en Shinkansen"], ["Shinkansen pour Kyoto et, le soir, découverte guidée du quartier historique.", "Shinkansen to Kyoto and, in the evening, a guided walk through the historic quarter.", "Shinkansen a Kioto y, por la noche, paseo guiado por el barrio histórico."], "tr7"),
            day(8, T_KYOTO_FREE, KYOTO_FREE, "tr6"), day(9, T_KYOTO_FREE, KYOTO_FREE, "tr5"), day(10, T_NARA, NARA, "me5"),
            ...homeFrom(11, OS, "tr6", "tr7"),
          ]),
      ],
    }),

    // ───────────── 5. Au cœur des mégalopoles — 14J/11N ─────────────
    trip({
      slug: "japon-megalopoles-tokyo-kyoto-koya-hiroshima-liberte-14j",
      name: ["Japon en liberté : Tokyo, Hakone, Kyoto, mont Koya, Hiroshima et Osaka", "Japan at Your Own Pace: Tokyo, Hakone, Kyoto, Mount Koya, Hiroshima and Osaka", "Japón en libertad: Tokio, Hakone, Kioto, monte Koya, Hiroshima y Osaka"],
      tagline: ["Les grandes villes du Japon, une nuit en ryokan et une nuit au monastère", "Japan's great cities, a night in a ryokan and a night in a monastery", "Las grandes ciudades de Japón, una noche en ryokan y una noche en un monasterio"],
      description: [
        "Un voyage en liberté de Tokyo à Osaka : trois jours à Tokyo, le train panoramique Romance Car et une nuit en ryokan à Hakone, trois jours à Kyoto, une nuit dans un monastère du mont Koya avec la prière des moines, Hiroshima et Miyajima, puis Osaka. Accueil francophone, pocket wifi, carte de transport préchargée, trains et transfert des bagages inclus.",
        "An independent trip from Tokyo to Osaka: three days in Tokyo, the Romance Car panoramic train and a night in a ryokan in Hakone, three days in Kyoto, a night in a monastery on Mount Koya with the monks' prayer, Hiroshima and Miyajima, then Osaka. French-speaking welcome, pocket wifi, preloaded transport card, trains and luggage forwarding included.",
        "Un viaje en libertad de Tokio a Osaka: tres días en Tokio, el tren panorámico Romance Car y una noche en ryokan en Hakone, tres días en Kioto, una noche en un monasterio del monte Koya con la oración de los monjes, Hiroshima y Miyajima, y Osaka. Recibimiento francófono, pocket wifi, tarjeta de transporte precargada, trenes y envío de equipaje incluidos.",
      ],
      includes: LIB_INC(11),
      price: 2404, nights: 11, departureFrom: "Bruxelles", image: "me2",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,solo,family", maxGuests: 8, order: -73996,
      chapters: [
        chapter(["Tokyo et Hakone", "Tokyo and Hakone", "Tokio y Hakone"], ["La capitale, puis le Romance Car vers le Fuji.", "The capital, then the Romance Car towards Fuji.", "La capital y el Romance Car hacia el Fuji."],
          ["me1", "me2", "aa4"],
          [
            day(1, T_FLY, FLY, "me1"), day(2, T_TYO, TYO, "me1"), day(3, T_TYO_FREE, ["Journée libre : Asakusa et le Senso-ji, le carrefour de Shibuya, Harajuku et le sanctuaire Meiji.", "A free day: Asakusa and Senso-ji, the Shibuya crossing, Harajuku and Meiji shrine.", "Jornada libre: Asakusa y el Senso-ji, el cruce de Shibuya, Harajuku y el santuario Meiji."], "me2"), day(4, T_TYO_FREE, TYO_FREE, "ic3"),
            day(5, ["Tokyo – Hakone en Romance Car", "Tokyo – Hakone by Romance Car", "Tokio – Hakone en Romance Car"], ["Le train panoramique Romance Car vers la région du mont Fuji, puis une nuit en ryokan.", "The Romance Car panoramic train to the Mount Fuji area, then a night in a ryokan.", "El tren panorámico Romance Car hacia la región del monte Fuji y una noche en ryokan."], "ic2"),
          ]),
        chapter(["Kyoto et le mont Koya", "Kyoto and Mount Koya", "Kioto y el monte Koya"], ["Trois jours à Kyoto et une nuit au monastère.", "Three days in Kyoto and a night in a monastery.", "Tres días en Kioto y una noche en un monasterio."],
          ["me4", "me5", "me7"],
          [
            day(6, ["Hakone – Kyoto en Shinkansen", "Hakone – Kyoto by Shinkansen", "Hakone – Kioto en Shinkansen"], ["Shinkansen vers Kyoto. Après-midi libre.", "Shinkansen to Kyoto. A free afternoon.", "Shinkansen a Kioto. Tarde libre."], "me4"),
            day(7, T_KYOTO_FREE, KYOTO_FREE, "ic5"), day(8, T_NARA, NARA, "me5"),
            day(9, ["Kyoto – mont Koya", "Kyoto – Mount Koya", "Kioto – monte Koya"], ["Train vers le mont Koya, le grand cimetière d'Okunoin et une nuit dans un monastère.", "Train to Mount Koya, the great Okunoin cemetery and a night in a monastery.", "Tren al monte Koya, el gran cementerio de Okunoin y una noche en un monasterio."], "me7"),
          ]),
        chapter(["Hiroshima et Osaka", "Hiroshima and Osaka", "Hiroshima y Osaka"], ["Le torii flottant, puis les néons d'Osaka.", "The floating torii, then the neon lights of Osaka.", "El torii flotante y los neones de Osaka."],
          ["me8", "ic8"],
          [
            day(10, ["Mont Koya – Hiroshima", "Mount Koya – Hiroshima", "Monte Koya – Hiroshima"], ["Petit-déjeuner végétarien au temple et prière du matin, puis train vers Hiroshima.", "A vegetarian temple breakfast and the morning prayer, then train to Hiroshima.", "Desayuno vegetariano en el templo y oración de la mañana, y tren a Hiroshima."], "me8"),
            day(11, T_MIYAJIMA, MIYAJIMA, "me8"),
            day(12, ["Hiroshima – Osaka", "Hiroshima – Osaka", "Hiroshima – Osaka"], [OSAKA[0], OSAKA[1], OSAKA[2]], "ic8"),
            ...homeFrom(13, OS, "ic8", "me2"),
          ]),
      ],
    }),

    // ───────────── 6. Beauté du Japon — 16J/13N ─────────────
    trip({
      slug: "japon-beaute-tokyo-osaka-hiroshima-kyoto-liberte-16j",
      name: ["Beauté du Japon en liberté : Tokyo, Hakone, Osaka, Hiroshima et Kyoto", "Beauty of Japan at Your Own Pace: Tokyo, Hakone, Osaka, Hiroshima and Kyoto", "Belleza de Japón en libertad: Tokio, Hakone, Osaka, Hiroshima y Kioto"],
      tagline: ["Seize jours pour prendre le temps, avec deux soirées guidées", "Sixteen days to take your time, with two guided evenings", "Dieciséis días para tomarse su tiempo, con dos veladas guiadas"],
      description: [
        "Le grand voyage en liberté : quatre nuits à Tokyo avec une soirée guidée à Kabukicho et au Golden Gai, le téléphérique et le site volcanique d'Owakudani à Hakone avec une nuit en ryokan, Osaka, Hiroshima et l'île de Miyajima, puis quatre nuits à Kyoto avec une balade guidée de nuit dans Gion et une excursion à Nara. Pocket wifi, carte de transport, trains et transfert des bagages inclus.",
        "The grand independent trip: four nights in Tokyo with a guided evening in Kabukicho and Golden Gai, the cable car and the volcanic valley of Owakudani in Hakone with a night in a ryokan, Osaka, Hiroshima and Miyajima island, then four nights in Kyoto with a guided night walk in Gion and a day trip to Nara. Pocket wifi, transport card, trains and luggage forwarding included.",
        "El gran viaje en libertad: cuatro noches en Tokio con una velada guiada en Kabukicho y el Golden Gai, el teleférico y el valle volcánico de Owakudani en Hakone con una noche en ryokan, Osaka, Hiroshima y la isla de Miyajima, y cuatro noches en Kioto con un paseo guiado nocturno por Gion y una excursión a Nara. Pocket wifi, tarjeta de transporte, trenes y envío de equipaje incluidos.",
      ],
      includes: LIB_INC(13),
      price: 2781, nights: 13, departureFrom: "Paris", image: "ic6",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,solo,honeymoon", maxGuests: 8, order: -73995,
      chapters: [
        chapter(["Tokyo et Hakone", "Tokyo and Hakone", "Tokio y Hakone"], ["La capitale, puis le Fuji.", "The capital, then Mount Fuji.", "La capital y el Fuji."],
          ["be2", "be3", "ic6"],
          [
            day(1, T_FLY, FLY, "be3"), day(2, T_TYO, TYO, "be2"), day(3, T_GOLDEN, GOLDEN, "tr1"), day(4, T_TYO_FREE, TYO_FREE, "be3"),
            day(5, T_TYO_FREE, ["Journée libre : Yanaka et ses ruelles, Nakano et ses mangas.", "A free day: Yanaka and its lanes, Nakano and its manga shops.", "Jornada libre: Yanaka y sus callejuelas, Nakano y sus mangas."], "be2"),
            day(6, ["Tokyo – Hakone et Owakudani", "Tokyo – Hakone and Owakudani", "Tokio – Hakone y Owakudani"], ["Train pour Hakone, téléphérique jusqu'au site volcanique d'Owakudani, puis nuit en ryokan.", "Train to Hakone, the cable car up to the volcanic valley of Owakudani, then a night in a ryokan.", "Tren a Hakone, teleférico hasta el valle volcánico de Owakudani y noche en ryokan."], "ic6"),
          ]),
        chapter(["Osaka et Hiroshima", "Osaka and Hiroshima", "Osaka e Hiroshima"], ["La ville gourmande et l'île sacrée.", "The food city and the sacred island.", "La ciudad gastronómica y la isla sagrada."],
          ["be5", "be6", "be7", "be8"],
          [
            day(7, ["Hakone – Osaka en Shinkansen", "Hakone – Osaka by Shinkansen", "Hakone – Osaka en Shinkansen"], ["Shinkansen pour Osaka. Journée libre.", "Shinkansen to Osaka. A free day.", "Shinkansen a Osaka. Jornada libre."], "be5"),
            day(8, T_OSAKA, OSAKA, "be6"),
            day(9, ["Osaka – Hiroshima", "Osaka – Hiroshima", "Osaka – Hiroshima"], ["Shinkansen pour Hiroshima et le parc du Mémorial de la Paix.", "Shinkansen to Hiroshima and the Peace Memorial Park.", "Shinkansen a Hiroshima y el parque del Memorial de la Paz."], "be7"),
            day(10, ["L'île de Miyajima", "Miyajima island", "La isla de Miyajima"], ["Train et bateau jusqu'à Miyajima et son sanctuaire d'Itsukushima.", "Train and boat to Miyajima and its Itsukushima shrine.", "Tren y barco hasta Miyajima y su santuario de Itsukushima."], "be8"),
          ]),
        chapter([KY[0], KY[1], KY[2]], ["Quatre nuits dans l'ancienne capitale.", "Four nights in the old capital.", "Cuatro noches en la antigua capital."],
          ["be1", "be9", "me4"],
          [
            day(11, ["Hiroshima – Kyoto et Gion", "Hiroshima – Kyoto and Gion", "Hiroshima – Kioto y Gion"], ["Shinkansen pour Kyoto et, en fin de journée, balade guidée dans le quartier de Gion.", "Shinkansen to Kyoto and, in the late afternoon, a guided walk in the Gion quarter.", "Shinkansen a Kioto y, al final del día, paseo guiado por el barrio de Gion."], "be1"),
            day(12, T_KYOTO_FREE, KYOTO_FREE, "be9"), day(13, T_NARA, NARA, "me5"), day(14, T_KYOTO_FREE, KYOTO_FREE, "me4"),
            ...homeFrom(15, KY, "be1", "ic6"),
          ]),
      ],
    }),

    // ───────────── 7. Évasion japonaise en famille — 16J/13N ─────────────
    trip({
      slug: "japon-famille-tokyo-kyoto-universal-liberte-16j",
      name: ["Le Japon en famille : Tokyo, Hakone, Kyoto et Universal Studios", "Japan for Families: Tokyo, Hakone, Kyoto and Universal Studios", "Japón en familia: Tokio, Hakone, Kioto y Universal Studios"],
      tagline: ["Une visite de Tokyo pensée pour les enfants, une maison traditionnelle à Kyoto et une journée au parc", "A Tokyo tour designed for children, a traditional house in Kyoto and a day at the park", "Una visita de Tokio pensada para los niños, una casa tradicional en Kioto y un día en el parque"],
      description: [
        "Un voyage en liberté pour les familles : une visite guidée de Tokyo avec des activités pour enfants et ados, une nuit en ryokan à Hakone avec le Hakone Free Pass, cinq nuits dans une maison traditionnelle japonaise à Kyoto, Osaka et une journée à Universal Studios Japan, puis retour à Tokyo en Shinkansen. Accueil francophone, pocket wifi, trains, transfert des bagages et entrée au parc inclus.",
        "An independent trip for families: a guided tour of Tokyo with activities for children and teenagers, a night in a ryokan in Hakone with the Hakone Free Pass, five nights in a traditional Japanese house in Kyoto, Osaka and a day at Universal Studios Japan, then back to Tokyo by Shinkansen. French-speaking welcome, pocket wifi, trains, luggage forwarding and park entry included.",
        "Un viaje en libertad para familias: una visita guiada de Tokio con actividades para niños y adolescentes, una noche en ryokan en Hakone con el Hakone Free Pass, cinco noches en una casa tradicional japonesa en Kioto, Osaka y un día en Universal Studios Japan, y regreso a Tokio en Shinkansen. Recibimiento francófono, pocket wifi, trenes, envío de equipaje y entrada al parque incluidos.",
      ],
      includes: LIB_INC(13),
      price: 2828, nights: 13, departureFrom: "Barcelone", image: "fa8",
      theme: "family", feeling: "distraction", travelerTypes: "family", maxGuests: 8, order: -73994,
      chapters: [
        chapter(["Tokyo et Hakone", "Tokyo and Hakone", "Tokio y Hakone"], ["La capitale en famille, puis le ryokan.", "The capital as a family, then the ryokan.", "La capital en familia y el ryokan."],
          ["fa2", "aa3", "aa4"],
          [
            day(1, T_FLY, FLY, "aa3"), day(2, T_TYO, TYO, "aa3"),
            day(3, ["Tokyo en famille", "Tokyo as a family", "Tokio en familia"], ["Visite guidée de Tokyo avec des activités ludiques pour enfants et adolescents.", "A guided tour of Tokyo with fun activities for children and teenagers.", "Visita guiada de Tokio con actividades lúdicas para niños y adolescentes."], "fa2"),
            day(4, T_TYO_FREE, TYO_FREE, "aa2"),
            day(5, ["Tokyo – Hakone", "Tokyo – Hakone", "Tokio – Hakone"], ["Avec le Hakone Free Pass, train, bateau et téléphérique dans la région du Fuji, puis nuit en ryokan.", "With the Hakone Free Pass, train, boat and cable car around Mount Fuji, then a night in a ryokan.", "Con el Hakone Free Pass, tren, barco y teleférico por la región del Fuji, y noche en ryokan."], "aa4"),
          ]),
        chapter(["Kyoto et Osaka", "Kyoto and Osaka", "Kioto y Osaka"], ["Une maison traditionnelle, puis le parc d'attractions.", "A traditional house, then the theme park.", "Una casa tradicional y el parque de atracciones."],
          ["fa8", "aa5", "aa6", "ij8"],
          [
            day(6, ["Hakone – Kyoto", "Hakone – Kyoto", "Hakone – Kioto"], ["Shinkansen pour Kyoto (environ 2 heures) et installation dans votre maison traditionnelle.", "Shinkansen to Kyoto (about 2 hours) and check in to your traditional house.", "Shinkansen a Kioto (unas 2 horas) e instalación en su casa tradicional."], "aa5"),
            day(7, T_KYOTO_FREE, KYOTO_FREE, "aa6"), day(8, T_KYOTO_FREE, KYOTO_FREE, "fa8"),
            day(9, ["Kyoto, journée libre", "Kyoto, free day", "Kioto, jornada libre"], ["Journée libre, par exemple au château de Himeji.", "A free day, for example at Himeji castle.", "Jornada libre, por ejemplo en el castillo de Himeji."], "ic1"),
            day(10, T_NARA, NARA, "me5"),
            day(11, ["Kyoto – Osaka", "Kyoto – Osaka", "Kioto – Osaka"], [OSAKA[0], OSAKA[1], OSAKA[2]], "ij2"),
            day(12, ["Universal Studios Japan", "Universal Studios Japan", "Universal Studios Japan"], ["Une journée de manèges et d'aventures au parc Universal Studios Japan.", "A day of rides and adventures at Universal Studios Japan.", "Una jornada de atracciones y aventuras en el parque Universal Studios Japan."], "ij8"),
            day(13, ["Osaka, journée libre", "Osaka, free day", "Osaka, jornada libre"], ["Journée libre. Vos bagages partent directement pour Tokyo.", "A free day. Your luggage goes straight on to Tokyo.", "Jornada libre. Su equipaje viaja directamente a Tokio."], "ic8"),
          ]),
        chapter([TK[0], TK[1], TK[2]], ["Retour dans la capitale.", "Back to the capital.", "Regreso a la capital."],
          ["aa2"],
          [
            day(14, ["Osaka – Tokyo en Shinkansen", "Osaka – Tokyo by Shinkansen", "Osaka – Tokio en Shinkansen"], ["Environ 2 h 30 de Shinkansen. Journée libre : Yanaka, le vieux Tokyo, et Ueno.", "About 2 h 30 by Shinkansen. A free day: Yanaka, old Tokyo, and Ueno.", "Unas 2 h 30 de Shinkansen. Jornada libre: Yanaka, el viejo Tokio, y Ueno."], "aa2"),
            ...homeFrom(15, TK, "fa2", "aa3"),
          ]),
      ],
    }),

    // ───────────── 8. Esprit japonais — 16J/13N ─────────────
    trip({
      slug: "japon-esprit-shikoku-naoshima-kyoto-liberte-16j",
      name: ["Esprit japonais en liberté : Tokyo, l'île d'Awaji, Takamatsu, Kurashiki et Kyoto", "Japanese Spirit at Your Own Pace: Tokyo, Awaji Island, Takamatsu, Kurashiki and Kyoto", "Espíritu japonés en libertad: Tokio, la isla de Awaji, Takamatsu, Kurashiki y Kioto"],
      tagline: ["Une partie en voiture sur la mer intérieure de Seto, l'île de l'art de Naoshima et le ryokan de Kurashiki", "A stretch by car along the Seto Inland Sea, the art island of Naoshima and a ryokan in Kurashiki", "Un tramo en coche por el mar interior de Seto, la isla del arte de Naoshima y el ryokan de Kurashiki"],
      description: [
        "Un voyage en liberté hors des grands axes : quatre nuits à Tokyo avec une visite sur le thème de l'architecture, Osaka, puis une voiture de location pour franchir le grand pont d'Akashi vers l'île d'Awaji et rejoindre Takamatsu, sur l'île de Shikoku (le jardin Ritsurin, l'île de Naoshima et ses musées), Kurashiki et une nuit en ryokan, et quatre nuits à Kyoto avec une balade guidée dans Gion. Trains, location de voiture avec traduction du permis et transfert des bagages inclus.",
        "An independent trip off the main routes: four nights in Tokyo with an architecture-themed tour, Osaka, then a hire car over the great Akashi bridge to Awaji island and on to Takamatsu, on Shikoku island (Ritsurin garden, Naoshima island and its museums), Kurashiki and a night in a ryokan, and four nights in Kyoto with a guided walk in Gion. Trains, car hire with licence translation and luggage forwarding included.",
        "Un viaje en libertad lejos de los grandes ejes: cuatro noches en Tokio con una visita sobre el tema de la arquitectura, Osaka, y un coche de alquiler para cruzar el gran puente de Akashi hacia la isla de Awaji y llegar a Takamatsu, en la isla de Shikoku (el jardín Ritsurin, la isla de Naoshima y sus museos), Kurashiki y una noche en ryokan, y cuatro noches en Kioto con un paseo guiado por Gion. Trenes, alquiler de coche con traducción del permiso y envío de equipaje incluidos.",
      ],
      includes: LIB_INC(13),
      price: 3139, nights: 13, departureFrom: "Paris", image: "es5",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,solo", maxGuests: 6, order: -73993,
      chapters: [
        chapter(["Tokyo et Osaka", "Tokyo and Osaka", "Tokio y Osaka"], ["La capitale et son architecture, puis Osaka.", "The capital and its architecture, then Osaka.", "La capital y su arquitectura, y Osaka."],
          ["es2", "es3", "es4"],
          [
            day(1, T_FLY, FLY, "es3"), day(2, T_TYO, TYO, "es3"), day(3, T_TYO_FREE, TYO_FREE, "es2"), day(4, T_TYO_FREE, TYO_FREE, "es1"),
            day(5, ["Tokyo et son architecture", "Tokyo and its architecture", "Tokio y su arquitectura"], ["Une visite de Tokyo sur le thème de l'architecture.", "A tour of Tokyo on the theme of architecture.", "Una visita de Tokio sobre el tema de la arquitectura."], "es3"),
            day(6, ["Tokyo – Osaka en Shinkansen", "Tokyo – Osaka by Shinkansen", "Tokio – Osaka en Shinkansen"], ["Shinkansen pour Osaka. Journée libre : le château et son parc.", "Shinkansen to Osaka. A free day: the castle and its park.", "Shinkansen a Osaka. Jornada libre: el castillo y su parque."], "es4"),
          ]),
        chapter(["Awaji, Shikoku et Kurashiki", "Awaji, Shikoku and Kurashiki", "Awaji, Shikoku y Kurashiki"], ["Au volant sur la mer intérieure, puis l'île de l'art.", "Driving along the Inland Sea, then the art island.", "Al volante por el mar interior y la isla del arte."],
          ["es6", "es5", "es7", "es9"],
          [
            day(7, ["Osaka – l'île d'Awaji", "Osaka – Awaji island", "Osaka – la isla de Awaji"], ["Prise de la voiture et traversée du grand pont suspendu d'Akashi vers l'île d'Awaji.", "Pick up the car and cross the great Akashi suspension bridge to Awaji island.", "Recogida del coche y cruce del gran puente colgante de Akashi hacia la isla de Awaji."], "es6"),
            day(8, ["Awaji – Takamatsu", "Awaji – Takamatsu", "Awaji – Takamatsu"], ["Route vers Takamatsu, sur l'île de Shikoku, au bord de la mer intérieure de Seto.", "Drive to Takamatsu, on Shikoku island, by the Seto Inland Sea.", "Carretera hacia Takamatsu, en la isla de Shikoku, junto al mar interior de Seto."], "es9"),
            day(9, ["Takamatsu", "Takamatsu", "Takamatsu"], ["Restitution de la voiture. Le jardin Ritsurin et l'art du bonsaï.", "Drop off the car. Ritsurin garden and the art of bonsai.", "Devolución del coche. El jardín Ritsurin y el arte del bonsái."], "es7"),
            day(10, ["L'île de Naoshima", "Naoshima island", "La isla de Naoshima"], ["Journée libre, idéale pour l'île de Naoshima et ses musées d'art contemporain.", "A free day, ideal for Naoshima island and its contemporary art museums.", "Jornada libre, ideal para la isla de Naoshima y sus museos de arte contemporáneo."], "es5"),
            day(11, ["Takamatsu – Kurashiki", "Takamatsu – Kurashiki", "Takamatsu – Kurashiki"], ["Train pour Kurashiki et ses canaux, puis dîner et nuit en ryokan.", "Train to Kurashiki and its canals, then dinner and a night in a ryokan.", "Tren a Kurashiki y sus canales, y cena y noche en ryokan."], "ij7"),
          ]),
        chapter([KY[0], KY[1], KY[2]], ["Quatre nuits pour finir.", "Four nights to end with.", "Cuatro noches para terminar."],
          ["be1", "me4"],
          [
            day(12, ["Kurashiki – Kyoto", "Kurashiki – Kyoto", "Kurashiki – Kioto"], ["Train pour Kyoto. Journée libre.", "Train to Kyoto. A free day.", "Tren a Kioto. Jornada libre."], "me4"),
            day(13, ["Kyoto et Gion", "Kyoto and Gion", "Kioto y Gion"], ["Journée libre et une balade guidée dans le quartier historique de Gion.", "A free day and a guided walk in the historic Gion quarter.", "Jornada libre y un paseo guiado por el barrio histórico de Gion."], "be1"),
            day(14, T_KYOTO_FREE, KYOTO_FREE, "ic5"),
            ...homeFrom(15, KY, "be1", "es5"),
          ]),
      ],
    }),

    // ───────────── 9. Instant japonais — 17J/14N ─────────────
    trip({
      slug: "japon-instant-manga-okayama-miyajima-liberte-17j",
      name: ["Instant japonais en liberté : Tokyo et le manga, Osaka, Okayama, Miyajima et Kyoto", "Japanese Moments at Your Own Pace: Tokyo and Manga, Osaka, Okayama, Miyajima and Kyoto", "Instante japonés en libertad: Tokio y el manga, Osaka, Okayama, Miyajima y Kioto"],
      tagline: ["Pour les amateurs de manga : deux ateliers de dessin, le musée international du manga et deux nuits en ryokan", "For manga fans: two drawing workshops, the international manga museum and two nights in ryokans", "Para los amantes del manga: dos talleres de dibujo, el museo internacional del manga y dos noches en ryokan"],
      description: [
        "Un voyage en liberté au fil du manga et de la pop culture : cinq nuits à Tokyo avec une soirée guidée à Kabukicho et deux ateliers de dessin manga, une nuit en ryokan à Hakone, Osaka (Universal Studios en option), Okayama, Kurashiki et le village de Tomonoura, une nuit en ryokan sur l'île de Miyajima, Hiroshima, puis Kyoto et son musée international du manga. Trains et transfert des bagages inclus.",
        "An independent trip through manga and pop culture: five nights in Tokyo with a guided evening in Kabukicho and two manga drawing workshops, a night in a ryokan in Hakone, Osaka (Universal Studios as an option), Okayama, Kurashiki and the village of Tomonoura, a night in a ryokan on Miyajima island, Hiroshima, then Kyoto and its international manga museum. Trains and luggage forwarding included.",
        "Un viaje en libertad por el manga y la cultura pop: cinco noches en Tokio con una velada guiada en Kabukicho y dos talleres de dibujo manga, una noche en ryokan en Hakone, Osaka (Universal Studios opcional), Okayama, Kurashiki y el pueblo de Tomonoura, una noche en ryokan en la isla de Miyajima, Hiroshima, y Kioto y su museo internacional del manga. Trenes y envío de equipaje incluidos.",
      ],
      includes: LIB_INC(14),
      price: 3063, nights: 14, departureFrom: "Bruxelles", image: "ij3",
      theme: "culture", feeling: "distraction", travelerTypes: "family,couples,solo", maxGuests: 8, order: -73992,
      chapters: [
        chapter(["Tokyo et Hakone", "Tokyo and Hakone", "Tokio y Hakone"], ["Cinq nuits dans la capitale du manga.", "Five nights in the capital of manga.", "Cinco noches en la capital del manga."],
          ["ij3", "ij4", "ij5"],
          [
            day(1, T_FLY, FLY, "ij3"), day(2, T_TYO, TYO, "ij3"), day(3, T_GOLDEN, GOLDEN, "tr1"), day(4, T_TYO_FREE, TYO_FREE, "ij4"),
            day(5, ["Atelier de dessin manga", "Manga drawing workshop", "Taller de dibujo manga"], ["Un atelier de dessin manga, puis journée libre.", "A manga drawing workshop, then a free day.", "Un taller de dibujo manga y jornada libre."], "ij4"),
            day(6, ["Second atelier manga", "A second manga workshop", "Segundo taller manga"], ["Un second atelier pour aller plus loin, puis journée libre.", "A second workshop to go further, then a free day.", "Un segundo taller para ir más lejos y jornada libre."], "ij3"),
            day(7, T_HAKONE, HAKONE, "ij5"),
          ]),
        chapter(["Osaka et Okayama", "Osaka and Okayama", "Osaka y Okayama"], ["La ville gourmande, puis les jardins et les villages côtiers.", "The food city, then gardens and coastal villages.", "La ciudad gastronómica, y jardines y pueblos costeros."],
          ["ij2", "ij7", "ij6"],
          [
            day(8, ["Hakone – Osaka", "Hakone – Osaka", "Hakone – Osaka"], ["Shinkansen pour Osaka. Journée libre.", "Shinkansen to Osaka. A free day.", "Shinkansen a Osaka. Jornada libre."], "ij2"),
            day(9, T_OSAKA, [`${OSAKA[0]} En option : Universal Studios Japan.`, `${OSAKA[1]} Optional: Universal Studios Japan.`, `${OSAKA[2]} Opcional: Universal Studios Japan.`], "ij8"),
            day(10, ["Osaka – Okayama", "Osaka – Okayama", "Osaka – Okayama"], ["Shinkansen pour Okayama et son jardin Koraku-en.", "Shinkansen to Okayama and its Koraku-en garden.", "Shinkansen a Okayama y su jardín Koraku-en."], "ij7"),
            day(11, ["Kurashiki ou Tomonoura", "Kurashiki or Tomonoura", "Kurashiki o Tomonoura"], ["Journée libre : la ville de Kurashiki et son musée Ohara, ou le village côtier de Tomonoura.", "A free day: the town of Kurashiki and its Ohara museum, or the coastal village of Tomonoura.", "Jornada libre: la ciudad de Kurashiki y su museo Ohara, o el pueblo costero de Tomonoura."], "ij6"),
          ]),
        chapter(["Miyajima, Hiroshima et Kyoto", "Miyajima, Hiroshima and Kyoto", "Miyajima, Hiroshima y Kioto"], ["Une nuit sur l'île sacrée, puis l'ancienne capitale.", "A night on the sacred island, then the old capital.", "Una noche en la isla sagrada y la antigua capital."],
          ["me8", "ij9", "tr6"],
          [
            day(12, ["Okayama – Miyajima", "Okayama – Miyajima", "Okayama – Miyajima"], ["Route vers l'île de Miyajima, dîner traditionnel et nuit en ryokan.", "On to Miyajima island, a traditional dinner and a night in a ryokan.", "Hacia la isla de Miyajima, cena tradicional y noche en ryokan."], "me8"),
            day(13, ["Hiroshima – Kyoto", "Hiroshima – Kyoto", "Hiroshima – Kioto"], ["Visite libre d'Hiroshima, puis Shinkansen pour Kyoto.", "Hiroshima at your own pace, then the Shinkansen to Kyoto.", "Visita libre de Hiroshima y Shinkansen a Kioto."], "be7"),
            day(14, ["Kyoto et le musée du manga", "Kyoto and the manga museum", "Kioto y el museo del manga"], ["Journée libre : le musée international du manga, les temples et les jardins.", "A free day: the international manga museum, the temples and the gardens.", "Jornada libre: el museo internacional del manga, los templos y los jardines."], "ij9"),
            day(15, T_KYOTO_FREE, KYOTO_FREE, "tr6"),
            ...homeFrom(16, KY, "ij9", "ij3"),
          ]),
      ],
    }),

    // ───────────── 10. Panorama japonais — 21J/18N ─────────────
    trip({
      slug: "japon-panorama-fukuoka-okinawa-liberte-21j",
      name: ["Panorama japonais en liberté : de Tokyo à Kyushu et aux plages d'Okinawa", "Japanese Panorama at Your Own Pace: from Tokyo to Kyushu and the Beaches of Okinawa", "Panorama japonés en libertad: de Tokio a Kyushu y las playas de Okinawa"],
      tagline: ["Trois semaines du nord au sud, jusqu'aux îles subtropicales", "Three weeks from north to south, as far as the subtropical islands", "Tres semanas de norte a sur, hasta las islas subtropicales"],
      description: [
        "Le grand voyage en liberté : Tokyo avec une soirée guidée à Kabukicho, Hakone et Owakudani avec une nuit en ryokan, quatre nuits à Kyoto avec une balade guidée dans Gion, Hiroshima et Miyajima, Fukuoka sur l'île de Kyushu, puis quatre nuits à Naha, sur l'île d'Okinawa (le château de Shuri, l'île de Tokashiki), avant le vol retour par Tokyo. Trains, vols intérieurs et transfert des bagages inclus.",
        "The grand independent trip: Tokyo with a guided evening in Kabukicho, Hakone and Owakudani with a night in a ryokan, four nights in Kyoto with a guided walk in Gion, Hiroshima and Miyajima, Fukuoka on Kyushu island, then four nights in Naha, on Okinawa island (Shuri castle, Tokashiki island), before flying home via Tokyo. Trains, domestic flights and luggage forwarding included.",
        "El gran viaje en libertad: Tokio con una velada guiada en Kabukicho, Hakone y Owakudani con una noche en ryokan, cuatro noches en Kioto con un paseo guiado por Gion, Hiroshima y Miyajima, Fukuoka en la isla de Kyushu, y cuatro noches en Naha, en la isla de Okinawa (el castillo de Shuri, la isla de Tokashiki), antes del vuelo de regreso por Tokio. Trenes, vuelos interiores y envío de equipaje incluidos.",
      ],
      includes: LIB_INC(18),
      price: 3407, nights: 18, departureFrom: "Barcelone", image: "pn8",
      theme: "relax", feeling: "freedom", travelerTypes: "couples,honeymoon,solo", maxGuests: 8, order: -73991,
      chapters: [
        chapter(["Tokyo et Hakone", "Tokyo and Hakone", "Tokio y Hakone"], ["La capitale, puis le Fuji.", "The capital, then Mount Fuji.", "La capital y el Fuji."],
          ["pn3", "pn1"],
          [
            day(1, T_FLY, FLY, "pn3"), day(2, T_TYO, TYO, "pn3"), day(3, T_GOLDEN, GOLDEN, "tr1"), day(4, T_TYO_FREE, TYO_FREE, "me2"), day(5, T_TYO_FREE, TYO_FREE, "pn3"),
            day(6, ["Tokyo – Hakone et Owakudani", "Tokyo – Hakone and Owakudani", "Tokio – Hakone y Owakudani"], ["Train pour Hakone, téléphérique jusqu'à Owakudani, puis nuit en ryokan.", "Train to Hakone, the cable car up to Owakudani, then a night in a ryokan.", "Tren a Hakone, teleférico hasta Owakudani y noche en ryokan."], "aa4"),
          ]),
        chapter(["Kyoto et Hiroshima", "Kyoto and Hiroshima", "Kioto e Hiroshima"], ["Quatre nuits dans l'ancienne capitale, puis l'île sacrée.", "Four nights in the old capital, then the sacred island.", "Cuatro noches en la antigua capital y la isla sagrada."],
          ["pn7", "pn8", "be9"],
          [
            day(7, ["Hakone – Kyoto et Gion", "Hakone – Kyoto and Gion", "Hakone – Kioto y Gion"], ["Shinkansen pour Kyoto et balade guidée dans Gion en fin de journée.", "Shinkansen to Kyoto and a guided walk in Gion in the late afternoon.", "Shinkansen a Kioto y paseo guiado por Gion al final del día."], "be1"),
            day(8, T_KYOTO_FREE, KYOTO_FREE, "be9"), day(9, T_NARA, NARA, "pn7"), day(10, T_KYOTO_FREE, KYOTO_FREE, "me4"),
            day(11, ["Kyoto – Hiroshima", "Kyoto – Hiroshima", "Kioto – Hiroshima"], ["Shinkansen pour Hiroshima et le parc de la Paix.", "Shinkansen to Hiroshima and the Peace Park.", "Shinkansen a Hiroshima y el parque de la Paz."], "be7"),
            day(12, ["L'île de Miyajima", "Miyajima island", "La isla de Miyajima"], ["Train et bateau jusqu'à Miyajima et son torii flottant.", "Train and boat to Miyajima and its floating torii.", "Tren y barco hasta Miyajima y su torii flotante."], "pn8"),
          ]),
        chapter(["Fukuoka et Okinawa", "Fukuoka and Okinawa", "Fukuoka y Okinawa"], ["Kyushu, puis les îles du sud.", "Kyushu, then the southern islands.", "Kyushu y las islas del sur."],
          ["pn9", "pn10", "pn1"],
          [
            day(13, ["Hiroshima – Fukuoka", "Hiroshima – Fukuoka", "Hiroshima – Fukuoka"], ["Shinkansen pour Fukuoka, sur l'île de Kyushu.", "Shinkansen to Fukuoka, on Kyushu island.", "Shinkansen a Fukuoka, en la isla de Kyushu."], "pn9"),
            day(14, ["Fukuoka, journée libre", "Fukuoka, free day", "Fukuoka, jornada libre"], ["Journée libre : les plages d'Itoshima ou de Karatsu, ou la ville de Kumamoto.", "A free day: the beaches of Itoshima or Karatsu, or the city of Kumamoto.", "Jornada libre: las playas de Itoshima o Karatsu, o la ciudad de Kumamoto."], "pn10"),
            day(15, ["Vol pour Okinawa", "Flight to Okinawa", "Vuelo a Okinawa"], ["Vol de Fukuoka à Naha, sur l'île d'Okinawa.", "Flight from Fukuoka to Naha, on Okinawa island.", "Vuelo de Fukuoka a Naha, en la isla de Okinawa."], "pn1"),
            day(16, ["Okinawa", "Okinawa", "Okinawa"], ["Journée libre : le château de Shuri et le jardin Fukushu-en.", "A free day: Shuri castle and Fukushu-en garden.", "Jornada libre: el castillo de Shuri y el jardín Fukushu-en."], "pn1"),
            day(17, ["Okinawa", "Okinawa", "Okinawa"], ["Journée libre : l'île de Tokashiki et ses plages.", "A free day: Tokashiki island and its beaches.", "Jornada libre: la isla de Tokashiki y sus playas."], "pn1"),
            day(18, ["Okinawa", "Okinawa", "Okinawa"], ["Dernière journée sur l'île.", "A last day on the island.", "Última jornada en la isla."], "pn1"),
            day(19, ["Naha – Tokyo", "Naha – Tokyo", "Naha – Tokio"], ["Vol pour Tokyo et dernière nuit.", "Flight to Tokyo and a last night.", "Vuelo a Tokio y última noche."], "pn3"),
            ...homeFrom(20, TK, "pn3", "pn8"),
          ]),
      ],
    }),

    // ───────────── 11. Japon sous un autre angle — 21J/18N ─────────────
    trip({
      slug: "japon-autre-angle-kinosaki-matsue-tsuwano-liberte-21j",
      name: ["Japon sous un autre angle : Amanohashidate, Kinosaki Onsen, Matsue et Tsuwano", "Japan from Another Angle: Amanohashidate, Kinosaki Onsen, Matsue and Tsuwano", "Japón desde otro ángulo: Amanohashidate, Kinosaki Onsen, Matsue y Tsuwano"],
      tagline: ["Trois semaines sur la côte de la mer du Japon, ses villes d'eaux et ses villages de samouraïs", "Three weeks along the Sea of Japan coast, its spa towns and samurai villages", "Tres semanas por la costa del mar de Japón, sus pueblos termales y sus pueblos samuráis"],
      description: [
        "Le Japon méconnu, en liberté et en train : Tokyo, Hakone et son ryokan, Kyoto dans une maison traditionnelle, la flèche de sable d'Amanohashidate, la ville d'eaux de Kinosaki Onsen, Matsue, son château et le jardin Adachi, le village de samouraïs de Tsuwano avec une visite guidée, une nuit en ryokan sur l'île de Miyajima, Hiroshima, Okayama (l'île de Naoshima, Kurashiki) et Osaka. Quatre nuits en ryokan, trains et transfert des bagages inclus.",
        "Little-known Japan, independently and by train: Tokyo, Hakone and its ryokan, Kyoto in a traditional house, the sandbar of Amanohashidate, the spa town of Kinosaki Onsen, Matsue, its castle and the Adachi garden, the samurai village of Tsuwano with a guided tour, a night in a ryokan on Miyajima island, Hiroshima, Okayama (Naoshima island, Kurashiki) and Osaka. Four nights in ryokans, trains and luggage forwarding included.",
        "El Japón desconocido, en libertad y en tren: Tokio, Hakone y su ryokan, Kioto en una casa tradicional, la lengua de arena de Amanohashidate, el pueblo termal de Kinosaki Onsen, Matsue, su castillo y el jardín Adachi, el pueblo samurái de Tsuwano con una visita guiada, una noche en ryokan en la isla de Miyajima, Hiroshima, Okayama (la isla de Naoshima, Kurashiki) y Osaka. Cuatro noches en ryokan, trenes y envío de equipaje incluidos.",
      ],
      includes: LIB_INC(18),
      price: 3971, nights: 18, departureFrom: "Luxembourg", image: "aa8",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,solo", maxGuests: 8, order: -73990,
      chapters: [
        chapter(["Tokyo, Hakone et Kyoto", "Tokyo, Hakone and Kyoto", "Tokio, Hakone y Kioto"], ["La capitale, le ryokan et une maison traditionnelle.", "The capital, the ryokan and a traditional house.", "La capital, el ryokan y una casa tradicional."],
          ["aa1", "aa2", "aa5", "aa6"],
          [
            day(1, T_FLY, FLY, "aa3"), day(2, T_TYO, TYO, "aa3"), day(3, T_GOLDEN, GOLDEN, "aa2"), day(4, T_TYO_FREE, TYO_FREE, "aa2"),
            day(5, ["Tokyo – Hakone", "Tokyo – Hakone", "Tokio – Hakone"], ["Train pour Hakone, dîner japonais et nuit en ryokan.", "Train to Hakone, a Japanese dinner and a night in a ryokan.", "Tren a Hakone, cena japonesa y noche en ryokan."], "aa4"),
            day(6, ["Hakone – Kyoto", "Hakone – Kyoto", "Hakone – Kioto"], ["Shinkansen pour Kyoto et installation dans une maison traditionnelle.", "Shinkansen to Kyoto and check in to a traditional house.", "Shinkansen a Kioto e instalación en una casa tradicional."], "aa5"),
            day(7, T_KYOTO_FREE, KYOTO_FREE, "aa6"), day(8, T_KYOTO_FREE, KYOTO_FREE, "aa1"),
          ]),
        chapter(["La côte de la mer du Japon", "The Sea of Japan coast", "La costa del mar de Japón"], ["Une flèche de sable, une ville d'eaux et un château.", "A sandbar, a spa town and a castle.", "Una lengua de arena, un pueblo termal y un castillo."],
          ["aa8", "aa9", "aa10", "aa11"],
          [
            day(9, ["Kyoto – Amanohashidate", "Kyoto – Amanohashidate", "Kioto – Amanohashidate"], ["Train pour Amanohashidate, l'un des trois plus beaux paysages du Japon, et nuit en ryokan.", "Train to Amanohashidate, one of Japan's three most famous views, and a night in a ryokan.", "Tren a Amanohashidate, uno de los tres paisajes más célebres de Japón, y noche en ryokan."], "aa8"),
            day(10, ["Kinosaki Onsen", "Kinosaki Onsen", "Kinosaki Onsen"], ["Train panoramique jusqu'à Kinosaki Onsen, ses bains publics et ses saules, dîner et nuit en ryokan.", "A panoramic train to Kinosaki Onsen, its public baths and willows, dinner and a night in a ryokan.", "Tren panorámico hasta Kinosaki Onsen, sus baños públicos y sauces, cena y noche en ryokan."], "aa9"),
            day(11, ["Kinosaki – Matsue", "Kinosaki – Matsue", "Kinosaki – Matsue"], ["Train pour Matsue et son château d'origine.", "Train to Matsue and its original castle.", "Tren a Matsue y su castillo original."], "aa10"),
            day(12, ["Matsue et le jardin Adachi", "Matsue and the Adachi garden", "Matsue y el jardín Adachi"], ["Journée libre : le jardin Yushien et le musée d'art Adachi, dont le jardin compte parmi les plus beaux du pays.", "A free day: Yushien garden and the Adachi Museum of Art, whose garden is among the finest in the country.", "Jornada libre: el jardín Yushien y el museo de arte Adachi, cuyo jardín está entre los más bellos del país."], "aa11"),
          ]),
        chapter(["Tsuwano, Miyajima et la mer intérieure", "Tsuwano, Miyajima and the Inland Sea", "Tsuwano, Miyajima y el mar interior"], ["Samouraïs, île sacrée et île de l'art.", "Samurai, a sacred island and the art island.", "Samuráis, isla sagrada e isla del arte."],
          ["aa12", "me8", "es5", "ij7"],
          [
            day(13, ["Matsue – Tsuwano", "Matsue – Tsuwano", "Matsue – Tsuwano"], ["Train pour Tsuwano dans l'après-midi.", "Train to Tsuwano in the afternoon.", "Tren a Tsuwano por la tarde."], "aa12"),
            day(14, ["Tsuwano", "Tsuwano", "Tsuwano"], ["Visite guidée du quartier des samouraïs et des ruines du château, puis dîner et nuit en ryokan.", "A guided tour of the samurai quarter and the castle ruins, then dinner and a night in a ryokan.", "Visita guiada del barrio samurái y las ruinas del castillo, y cena y noche en ryokan."], "aa12"),
            day(15, ["Tsuwano – Miyajima", "Tsuwano – Miyajima", "Tsuwano – Miyajima"], ["Transfert vers l'île de Miyajima (environ 3 heures), dîner et nuit en ryokan.", "Transfer to Miyajima island (about 3 hours), dinner and a night in a ryokan.", "Traslado a la isla de Miyajima (unas 3 horas), cena y noche en ryokan."], "me8"),
            day(16, ["Hiroshima – Okayama", "Hiroshima – Okayama", "Hiroshima – Okayama"], ["Visite libre d'Hiroshima, puis Shinkansen pour Okayama.", "Hiroshima at your own pace, then the Shinkansen to Okayama.", "Visita libre de Hiroshima y Shinkansen a Okayama."], "be7"),
            day(17, ["Naoshima ou Kurashiki", "Naoshima or Kurashiki", "Naoshima o Kurashiki"], ["Journée libre : l'île de l'art de Naoshima ou la ville de Kurashiki.", "A free day: the art island of Naoshima or the town of Kurashiki.", "Jornada libre: la isla del arte de Naoshima o la ciudad de Kurashiki."], "es5"),
            day(18, ["Okayama – Osaka", "Okayama – Osaka", "Okayama – Osaka"], ["Train pour Osaka, avec un arrêt possible au château de Himeji.", "Train to Osaka, with a possible stop at Himeji castle.", "Tren a Osaka, con posible parada en el castillo de Himeji."], "ic1"),
            day(19, T_OSAKA, OSAKA, "ic8"),
            ...homeFrom(20, OS, "ic8", "aa8"),
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
