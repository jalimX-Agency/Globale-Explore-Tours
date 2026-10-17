// New destinations Finland, Sweden and the Faroe Islands, with their 11 Voyamar journey trips:
// Finland (8: Lapland winter stays, New Year, summer in Levi and the three-Laplands tour), Sweden (2)
// and the Faroe Islands (1). Near-identical supplier stays (same programme in several hotels or
// lengths) are grouped on one page. Prices are per-person "from" prices; supplier product ids are
// kept in SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-finlande-suede-feroe-circuits.ts
// Requires scripts/upload-images-nd-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "finlande-laponie-rovaniemi-ou-suomu-5j": ["61840", "147278", "382038"],
  "finlande-echappee-lapone-ranua-tornio-5j": ["380838"],
  "finlande-naya-club-saaga-yllas-5j": ["371358", "371838", "371302"],
  "finlande-multi-activites-akaslompolo-7j": ["371258", "307698", "371038", "394478", "394479"],
  "finlande-reveillon-du-nouvel-an-en-laponie-7j": ["371000", "369598"],
  "finlande-levi-hotel-and-spa-multi-activites-8j": ["380858"],
  "finlande-finlande-en-ete-levi-soleil-de-minuit-8j": ["418318"],
  "finlande-cap-nord-lofoten-et-les-trois-laponies-8j": ["405278"],
  "suede-cap-sur-la-suede-stockholm-bohuslan-malmo-8j": ["405238"],
  "suede-cap-sur-la-baltique-stockholm-helsinki-riga-gdansk-13j": ["333478"],
  "iles-feroe-cap-sur-les-iles-feroe-6j": ["404738"],
};

const T_HOME: L3 = ["Retour en France", "Back to France", "Regreso a Francia"];
const home = (city: L3): L3 => [`Transfert à l'aéroport de ${city[0]} et envol pour la France.`, `Transfer to ${city[1]} airport and fly to France.`, `Traslado al aeropuerto de ${city[2]} y vuelo a Francia.`];
const join = (a: L3, b: L3): L3 => [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`, `${a[2]} ${b[2]}`];
const KTT: L3 = ["Kittilä", "Kittilä", "Kittilä"];
const RVN: L3 = ["Rovaniemi", "Rovaniemi", "Rovaniemi"];

const X_SNOWMO: L3 = ["Safari en motoneige à travers la forêt enneigée et les lacs gelés, puis pêche sous la glace et grillades au feu de bois.", "A snowmobile safari through the snowy forest and across frozen lakes, then ice fishing and a wood-fire barbecue.", "Safari en moto de nieve a través del bosque nevado y los lagos helados, y pesca bajo el hielo y parrillada al fuego de leña."];
const X_DOGS: L3 = ["Balade en traîneau tiré par des huskies, et visite de la ferme et de ses chiens.", "A ride on a sled pulled by huskies, and a visit to the farm and its dogs.", "Paseo en trineo tirado por huskies, y visita de la granja y sus perros."];
const X_REIN: L3 = ["Une ferme de rennes, une balade en traîneau et la découverte de la vie des éleveurs samis.", "A reindeer farm, a sleigh ride and an introduction to the life of the Sami herders.", "Una granja de renos, un paseo en trineo y el descubrimiento de la vida de los pastores samis."];
const X_FREE: L3 = ["Journée libre : ski de fond, raquettes, sauna, ou activités en option, et chaque nuit la chance d'apercevoir les aurores boréales.", "A free day: cross-country skiing, snowshoeing, sauna or optional activities, and every night the chance to see the northern lights.", "Día libre: esquí de fondo, raquetas, sauna o actividades opcionales, y cada noche la oportunidad de ver las auroras boreales."];
const X_SANTA: L3 = ["Le village du Père Noël sur le cercle polaire arctique, son bureau de poste et sa maison.", "Santa Claus Village on the Arctic Circle, its post office and his house.", "La aldea de Papá Noel en el círculo polar ártico, su oficina de correos y su casa."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const { buildDestinations } = await import("./lib/newDestination");
  const R2 = process.env.NEXT_PUBLIC_R2_URL!;
  const J = (k: string) => `${R2}/journeys/nd-${k}.jpg`;
  const H = (n: number) => `${R2}/team/headshot-${String(n).padStart(2, "0")}.jpg`;
  const L = (n: number) => `${R2}/blocks/loved-${String(n).padStart(2, "0")}.jpg`;
  const EUROPE = { slug: "europe", name: ["Europe", "Europe", "Europa"] as L3 };

  const newDestinations = await buildDestinations([
    {
      slug: "finlande", name: ["Finlande", "Finland", "Finlandia"], nameIn: "en Finlande", region: EUROPE,
      description: ["Forêts blanches à perte de vue, lacs gelés, rennes et aurores boréales : la Laponie finlandaise est l'hiver tel qu'on l'imagine.", "White forests as far as the eye can see, frozen lakes, reindeer and northern lights: Finnish Lapland is winter as you imagine it.", "Bosques blancos hasta el horizonte, lagos helados, renos y auroras boreales: la Laponia finlandesa es el invierno tal como se imagina."],
      descriptionMore: ["De Rovaniemi à Levi, nous choisissons des hôtels au cœur de la nature et des activités encadrées — motoneige, chiens de traîneau, rennes — pour vivre le Grand Nord en toute sécurité, en famille comme à deux.", "From Rovaniemi to Levi, we choose hotels in the heart of nature and guided activities — snowmobiles, sled dogs, reindeer — to experience the Far North safely, as a family or as a couple.", "De Rovaniemi a Levi, elegimos hoteles en plena naturaleza y actividades guiadas — motos de nieve, perros de trineo, renos — para vivir el Gran Norte con total seguridad, en familia o en pareja."],
      heroImage: J("su1"), order: 112,
      seeAndDo: [
        { title: ["Les chiens de traîneau", "Sled dogs", "Los perros de trineo"], description: ["Mener son propre attelage de huskies à travers la taïga enneigée, dans un silence seulement troublé par le souffle des chiens.", "Driving your own team of huskies through the snowy taiga, in a silence broken only by the dogs' breathing.", "Conducir su propio tiro de huskies a través de la taiga nevada, en un silencio solo roto por la respiración de los perros."], image: J("ak2") },
        { title: ["Les aurores boréales", "The northern lights", "Las auroras boreales"], description: ["De septembre à mars, loin de toute lumière, le ciel de Laponie s'illumine de voiles verts et violets.", "From September to March, far from any light, the Lapland sky lights up with green and violet veils.", "De septiembre a marzo, lejos de toda luz, el cielo de Laponia se ilumina con velos verdes y violetas."], image: J("su1") },
      ],
      bestOf: [
        { title: ["Rovaniemi", "Rovaniemi", "Rovaniemi"], description: ["La capitale de la Laponie, sur le cercle polaire, et le village du Père Noël.", "The capital of Lapland, on the Arctic Circle, and Santa Claus Village.", "La capital de Laponia, en el círculo polar, y la aldea de Papá Noel."], image: J("ro3") },
        { title: ["Levi et Ylläs", "Levi and Ylläs", "Levi e Ylläs"], description: ["Les stations du nord, leurs fjelds et leurs forêts de pins couverts de givre.", "The northern resorts, their fells and their frost-covered pine forests.", "Las estaciones del norte, sus fjells y sus bosques de pinos cubiertos de escarcha."], image: J("le5") },
      ],
      lovedImages: [L(7), L(8), L(9)],
      bestTime: { question: ["Quelle est la meilleure période pour visiter la Finlande ?", "What's the best time to visit Finland?", "¿Cuál es la mejor época para visitar Finlandia?"], answer: ["De décembre à mars pour la neige, les activités d'hiver et les aurores boréales ; de juin à août pour le soleil de minuit, les lacs et le canoë.", "December to March for snow, winter activities and the northern lights; June to August for the midnight sun, the lakes and canoeing.", "De diciembre a marzo para la nieve, las actividades de invierno y las auroras boreales; de junio a agosto para el sol de medianoche, los lagos y la canoa."] },
      team: [{ name: "Aino", photo: H(9) }, { name: "Mikko", photo: H(10) }],
    },
    {
      slug: "suede", name: ["Suède", "Sweden", "Suecia"], nameIn: "en Suède", region: EUROPE,
      description: ["Stockholm et ses quatorze îles, les côtes de granit rose du Bohuslän et les villes de Scanie : la Suède entre mer et forêts.", "Stockholm and its fourteen islands, the pink granite coasts of Bohuslän and the towns of Skåne: Sweden between sea and forest.", "Estocolmo y sus catorce islas, las costas de granito rosa del Bohuslän y las ciudades de Escania: Suecia entre mar y bosques."],
      descriptionMore: ["Nous combinons les capitales et les archipels, avec des étapes au rythme scandinave : déjeuners de fruits de mer, villages de pêcheurs et pauses fika.", "We combine the capitals and the archipelagos, with stops at a Scandinavian pace: seafood lunches, fishing villages and fika breaks.", "Combinamos las capitales y los archipiélagos, con etapas a ritmo escandinavo: almuerzos de marisco, pueblos de pescadores y pausas fika."],
      heroImage: J("se3"), order: 113,
      seeAndDo: [
        { title: ["Gamla Stan", "Gamla Stan", "Gamla Stan"], description: ["La vieille ville de Stockholm, ses ruelles pavées, ses maisons colorées et le palais royal.", "Stockholm's old town, its cobbled lanes, colourful houses and the Royal Palace.", "La ciudad vieja de Estocolmo, sus callejuelas empedradas, sus casas de colores y el palacio real."], image: J("se3") },
        { title: ["L'archipel du Bohuslän", "The Bohuslän archipelago", "El archipiélago del Bohuslän"], description: ["Des îles de granit rose, des cabanes de pêcheurs rouges et des homards, sur la côte ouest.", "Pink granite islands, red fishermen's huts and lobsters, on the west coast.", "Islas de granito rosa, cabañas rojas de pescadores y langostas, en la costa oeste."], image: J("se2") },
      ],
      bestOf: [
        { title: ["Stockholm", "Stockholm", "Estocolmo"], description: ["La Venise du Nord et son musée Vasa.", "The Venice of the North and its Vasa Museum.", "La Venecia del Norte y su museo Vasa."], image: J("se1") },
        { title: ["Malmö et Lund", "Malmö and Lund", "Malmö y Lund"], description: ["La Scanie, sa cathédrale romane et le pont de l'Øresund vers Copenhague.", "Skåne, its Romanesque cathedral and the Øresund bridge to Copenhagen.", "Escania, su catedral románica y el puente del Øresund hacia Copenhague."], image: J("se6") },
      ],
      lovedImages: [L(10), L(11), L(12)],
      bestTime: { question: ["Quelle est la meilleure période pour visiter la Suède ?", "What's the best time to visit Sweden?", "¿Cuál es la mejor época para visitar Suecia?"], answer: ["De mai à septembre, quand les jours sont longs et les archipels accessibles.", "May to September, when the days are long and the archipelagos accessible.", "De mayo a septiembre, cuando los días son largos y los archipiélagos accesibles."] },
      team: [{ name: "Elsa", photo: H(11) }, { name: "Johan", photo: H(12) }],
    },
    {
      slug: "iles-feroe", name: ["Îles Féroé", "Faroe Islands", "Islas Feroe"], nameIn: "aux îles Féroé", region: EUROPE,
      description: ["Dix-huit îles volcaniques au milieu de l'Atlantique Nord, des falaises vertigineuses, des cascades qui tombent dans l'océan et des villages au toit de gazon.", "Eighteen volcanic islands in the middle of the North Atlantic, dizzying cliffs, waterfalls tumbling into the ocean and turf-roofed villages.", "Dieciocho islas volcánicas en medio del Atlántico Norte, acantilados vertiginosos, cascadas que caen al océano y pueblos con tejados de césped."],
      descriptionMore: ["Nous adaptons chaque journée à la météo changeante de l'archipel, pour vous emmener sur les sentiers et les belvédères au meilleur moment.", "We adapt each day to the archipelago's changing weather, to take you to the trails and viewpoints at the best moment.", "Adaptamos cada jornada al tiempo cambiante del archipiélago, para llevarle a los senderos y miradores en el mejor momento."],
      heroImage: J("fo1"), order: 114,
      seeAndDo: [
        { title: ["La cascade de Múlafossur", "Múlafossur waterfall", "La cascada de Múlafossur"], description: ["La cascade de Gásadalur, qui se jette directement de la falaise dans l'océan.", "The Gásadalur waterfall, plunging straight from the cliff into the ocean.", "La cascada de Gásadalur, que cae directamente del acantilado al océano."], image: J("fo1") },
        { title: ["Le lac au-dessus de la mer", "The lake above the sea", "El lago sobre el mar"], description: ["Le lac Leitisvatn, perché au bord des falaises, qui semble flotter au-dessus de l'Atlantique.", "Lake Leitisvatn, perched on the cliff edge, which seems to float above the Atlantic.", "El lago Leitisvatn, encaramado al borde de los acantilados, que parece flotar sobre el Atlántico."], image: J("fo4") },
      ],
      bestOf: [
        { title: ["Tórshavn", "Tórshavn", "Tórshavn"], description: ["L'une des plus petites capitales du monde et son quartier de Tinganes.", "One of the smallest capitals in the world and its Tinganes district.", "Una de las capitales más pequeñas del mundo y su barrio de Tinganes."], image: J("fo2") },
        { title: ["Saksun et Gjógv", "Saksun and Gjógv", "Saksun y Gjógv"], description: ["Des villages isolés au fond de leurs fjords et de leurs gorges.", "Isolated villages at the end of their fjords and gorges.", "Pueblos aislados al fondo de sus fiordos y gargantas."], image: J("fo6") },
      ],
      lovedImages: [L(13), L(14), L(15)],
      bestTime: { question: ["Quelle est la meilleure période pour visiter les îles Féroé ?", "What's the best time to visit the Faroe Islands?", "¿Cuál es la mejor época para visitar las islas Feroe?"], answer: ["De mai à septembre, pour les longues journées, les macareux et les sentiers praticables.", "May to September, for the long days, the puffins and the open trails.", "De mayo a septiembre, por los días largos, los frailecillos y los senderos practicables."] },
      team: [{ name: "Rúni", photo: H(13) }, { name: "Sigrid", photo: H(14) }],
    },
  ]);

  const WINTER = { label: ["Décembre à mars", "December to March", "Diciembre a marzo"] as L3, months: "december,january,february,march" };
  const fiw = circuitBuilders({ destinationSlug: "finlande", imagePrefix: "nd", season: WINTER });
  const fis = circuitBuilders({ destinationSlug: "finlande", imagePrefix: "nd", season: { label: ["Juin à août", "June to August", "Junio a agosto"], months: "june,july,august" } });
  const finy = circuitBuilders({ destinationSlug: "finlande", imagePrefix: "nd", season: { label: ["Fin décembre", "Late December", "Finales de diciembre"], months: "december" } });
  const se = circuitBuilders({ destinationSlug: "suede", imagePrefix: "nd", season: { label: ["Mai à septembre", "May to September", "Mayo a septiembre"], months: "may,june,july,august,september" } });
  const fo = circuitBuilders({ destinationSlug: "iles-feroe", imagePrefix: "nd", season: { label: ["Mai à septembre", "May to September", "Mayo a septiembre"], months: "may,june,july,august,september" } });
  const STAY = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtel en pension complète,Vêtements grand froid,Activités du programme avec guide${extra}`,
    `Flights from France,Transfers,${n} nights in a hotel on full board,Cold-weather clothing,Activities in the programme with a guide${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hotel en pensión completa,Ropa de gran frío,Actividades del programa con guía${extra}`,
  ];
  const INC = (n: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts,${n} nuits en hôtels,Transport en autocar,Visites du programme,Guide-accompagnateur francophone${extra}`,
    `Flights from France,Transfers,${n} nights in hotels,Transport by coach,Visits in the programme,French-speaking tour leader${extra}`,
    `Vuelos desde Francia,Traslados,${n} noches en hoteles,Transporte en autocar,Visitas del programa,Guía acompañante francófono${extra}`,
  ];
  const arrK = (b: typeof fiw, place: L3, img: string) => b.day(1, [`Arrivée en Laponie – ${place[0]}`, `Arrival in Lapland – ${place[1]}`, `Llegada a Laponia – ${place[2]}`], [`Envol pour Kittilä, accueil et transfert à ${place[0]}.`, `Flight to Kittilä, welcome and transfer to ${place[1]}.`, `Vuelo a Kittilä, recibimiento y traslado a ${place[2]}.`], img);

  const journeyTrips = [
    fiw.trip({
      slug: "finlande-laponie-rovaniemi-ou-suomu-5j",
      name: ["Laponie en multi-activités : Rovaniemi ou Suomu, rennes, chiens et motoneige", "Lapland multi-activity stay: Rovaniemi or Suomu, reindeer, dogs and snowmobiles", "Laponia multiactividad: Rovaniemi o Suomu, renos, perros y motos de nieve"],
      tagline: ["Un court séjour d'hiver au cœur de la forêt boréale", "A short winter stay in the heart of the boreal forest", "Una escapada de invierno en el corazón del bosque boreal"],
      description: [
        "Quatre nuits en Laponie : à l'hôtel Aakenus de Rovaniemi, sur le cercle polaire, ou au pied du fjeld de Suomu, avec une rencontre avec les rennes et une balade en traîneau, la motoneige et les huskies, et chaque nuit la chance des aurores boréales. Hôtel Suomutunturi à partir de 1 261 €, ou en chalet à partir de 1 453 € par personne.",
        "Four nights in Lapland: at the Aakenus hotel in Rovaniemi, on the Arctic Circle, or at the foot of the Suomu fell, with a reindeer encounter and a sleigh ride, snowmobiles and huskies, and every night the chance of the northern lights. Suomutunturi hotel from €1,261, or in a chalet from €1,453 per person.",
        "Cuatro noches en Laponia: en el hotel Aakenus de Rovaniemi, en el círculo polar, o al pie del fjell de Suomu, con un encuentro con los renos y un paseo en trineo, la moto de nieve y los huskies, y cada noche la oportunidad de las auroras boreales. Hotel Suomutunturi desde 1.261 €, o en chalé desde 1.453 € por persona.",
      ],
      includes: STAY(4),
      price: 1022, nights: 4, departureFrom: "Bruxelles", image: "ro5",
      theme: "family", feeling: "distraction", travelerTypes: "family,couples", maxGuests: 30, order: -43000,
      chapters: [
        fiw.chapter(["La Laponie en hiver", "Lapland in winter", "Laponia en invierno"], ["Rennes, chiens et forêt.", "Reindeer, dogs and forest.", "Renos, perros y bosque."],
          ["ro1", "ro2", "ro5", "su2", "su4", "su5"],
          [
            fiw.day(1, ["Arrivée à Rovaniemi", "Arrival in Rovaniemi", "Llegada a Rovaniemi"], ["Envol pour Rovaniemi, accueil et installation à l'hôtel, ou transfert vers Suomu.", "Flight to Rovaniemi, welcome and check-in, or transfer to Suomu.", "Vuelo a Rovaniemi, recibimiento e instalación en el hotel, o traslado a Suomu."], "ro3"),
            fiw.day(2, ["Les rennes", "The reindeer", "Los renos"], X_REIN, "su2"),
            fiw.day(3, ["Motoneige", "Snowmobiling", "Moto de nieve"], X_SNOWMO, "su6"),
            fiw.day(4, ["Chiens de traîneau", "Sled dogs", "Perros de trineo"], join(X_DOGS, ["Le soir, sauna finlandais.", "In the evening, a Finnish sauna.", "Por la noche, sauna finlandesa."]), "ro5"),
            fiw.day(5, T_HOME, home(RVN), "su5"),
          ]),
      ],
    }),

    fiw.trip({
      slug: "finlande-echappee-lapone-ranua-tornio-5j",
      name: ["Échappée lapone : Rovaniemi, le zoo de Ranua, Tornio et le village du Père Noël", "Lapland escape: Rovaniemi, Ranua zoo, Tornio and Santa Claus Village", "Escapada lapona: Rovaniemi, el zoo de Ranua, Tornio y la aldea de Papá Noel"],
      tagline: ["Ours polaires, motoneige et Père Noël en cinq jours", "Polar bears, snowmobiles and Santa in five days", "Osos polares, motos de nieve y Papá Noel en cinco días"],
      description: [
        "Une escapade d'hiver : Rovaniemi, le zoo arctique de Ranua et ses ours polaires, Tornio au bord du golfe de Botnie, un safari en motoneige, une ferme de rennes, puis le village du Père Noël sur le cercle polaire.",
        "A winter getaway: Rovaniemi, the Ranua Arctic zoo and its polar bears, Tornio on the Gulf of Bothnia, a snowmobile safari, a reindeer farm, then Santa Claus Village on the Arctic Circle.",
        "Una escapada de invierno: Rovaniemi, el zoo ártico de Ranua y sus osos polares, Tornio a orillas del golfo de Botnia, un safari en moto de nieve, una granja de renos, y la aldea de Papá Noel en el círculo polar.",
      ],
      includes: STAY(4),
      price: 2209, nights: 4, departureFrom: "Lyon", image: "el6",
      theme: "family", feeling: "distraction", travelerTypes: "family,couples", maxGuests: 30, order: -42999,
      chapters: [
        fiw.chapter(["Rovaniemi et Tornio", "Rovaniemi and Tornio", "Rovaniemi y Tornio"], ["La Laponie en famille.", "Lapland as a family.", "Laponia en familia."],
          ["el1", "el2", "el3", "el4", "el5", "el7"],
          [
            fiw.day(1, ["Arrivée à Rovaniemi", "Arrival in Rovaniemi", "Llegada a Rovaniemi"], ["Envol pour Rovaniemi, accueil et transfert à l'hôtel.", "Flight to Rovaniemi, welcome and transfer to the hotel.", "Vuelo a Rovaniemi, recibimiento y traslado al hotel."], "el1"),
            fiw.day(2, ["Ranua – Tornio", "Ranua – Tornio", "Ranua – Tornio"], ["Le zoo arctique de Ranua, ses ours polaires, ses lynx et ses gloutons, puis Tornio.", "The Ranua Arctic zoo, its polar bears, lynx and wolverines, then Tornio.", "El zoo ártico de Ranua, sus osos polares, linces y glotones, y Tornio."], "el2"),
            fiw.day(3, ["Motoneige", "Snowmobiling", "Moto de nieve"], X_SNOWMO, "el4"),
            fiw.day(4, ["Ferme de rennes", "Reindeer farm", "Granja de renos"], X_REIN, "el3"),
            fiw.day(5, ["Village du Père Noël – vol retour", "Santa Claus Village – flight home", "Aldea de Papá Noel – vuelo de regreso"], join(X_SANTA, ["Puis envol pour la France.", "Then fly to France.", "Y vuelo a Francia."]), "el6"),
          ]),
      ],
    }),

    fiw.trip({
      slug: "finlande-naya-club-saaga-yllas-5j",
      name: ["Naya Club Saaga à Ylläs : motoneige, chiens et rennes en club", "Naya Club Saaga in Ylläs: snowmobiles, dogs and reindeer in a club hotel", "Naya Club Saaga en Ylläs: motos de nieve, perros y renos en club"],
      tagline: ["Un club francophone au bord d'un lac de Laponie", "A French-speaking club by a Lapland lake", "Un club francófono a orillas de un lago de Laponia"],
      description: [
        "Un séjour club à Ylläsjärvi : safari en motoneige et pêche sous la glace, traîneau à chiens, traîneau à rennes, avec piscine et sauna à l'hôtel. En 7 jours à partir de 2 295 €, ou en 8 jours à partir de 2 450 € par personne.",
        "A club stay at Ylläsjärvi: a snowmobile safari and ice fishing, dog sledding, a reindeer sleigh ride, with a pool and sauna at the hotel. In 7 days from €2,295, or in 8 days from €2,450 per person.",
        "Una estancia en club en Ylläsjärvi: safari en moto de nieve y pesca bajo el hielo, trineo de perros, trineo de renos, con piscina y sauna en el hotel. En 7 días desde 2.295 €, o en 8 días desde 2.450 € por persona.",
      ],
      includes: STAY(4, ",Animation francophone"),
      price: 2195, nights: 4, departureFrom: "Paris", image: "ny3",
      theme: "family", feeling: "distraction", travelerTypes: "family,couples", maxGuests: 60, order: -42998,
      chapters: [
        fiw.chapter(["Ylläs", "Ylläs", "Ylläs"], ["Le club au bord du lac.", "The club by the lake.", "El club junto al lago."],
          ["ny2", "ny3", "ny4", "ny6"],
          [
            arrK(fiw, ["Ylläsjärvi", "Ylläsjärvi", "Ylläsjärvi"], "ny6"),
            fiw.day(2, ["Motoneige et pêche sous la glace", "Snowmobiling and ice fishing", "Moto de nieve y pesca bajo el hielo"], X_SNOWMO, "ny3"),
            fiw.day(3, ["Chiens de traîneau", "Sled dogs", "Perros de trineo"], X_DOGS, "ny2"),
            fiw.day(4, ["Traîneau à rennes", "Reindeer sleigh", "Trineo de renos"], X_REIN, "ny4"),
            fiw.day(5, T_HOME, home(KTT), "ny3"),
          ]),
      ],
    }),

    fiw.trip({
      slug: "finlande-multi-activites-akaslompolo-7j",
      name: ["Multi-activités à Äkäslompolo : motoneige, chiens de traîneau et journées libres", "Multi-activity stay in Äkäslompolo: snowmobiles, sled dogs and free days", "Multiactividad en Äkäslompolo: motos de nieve, perros de trineo y días libres"],
      tagline: ["Une semaine dans un village du fjeld d'Ylläs", "A week in a village on the Ylläs fell", "Una semana en un pueblo del fjell de Ylläs"],
      description: [
        "Une semaine à Äkäslompolo, village au pied du fjeld d'Ylläs : safari en motoneige et pêche sous la glace, traîneau à chiens et journées libres pour le ski, les raquettes et le sauna. À l'hôtel Akashotelli (8 jours) à partir de 2 245 €, à l'hôtel Sirkantahti de Levi à partir de 2 395 €, ou au départ direct de Strasbourg (6 jours) à partir de 2 295 € par personne.",
        "A week in Äkäslompolo, a village at the foot of the Ylläs fell: a snowmobile safari and ice fishing, dog sledding and free days for skiing, snowshoeing and the sauna. At the Akashotelli (8 days) from €2,245, at the Sirkantahti hotel in Levi from €2,395, or with a direct departure from Strasbourg (6 days) from €2,295 per person.",
        "Una semana en Äkäslompolo, pueblo al pie del fjell de Ylläs: safari en moto de nieve y pesca bajo el hielo, trineo de perros y días libres para el esquí, las raquetas y la sauna. En el hotel Akashotelli (8 días) desde 2.245 €, en el hotel Sirkantahti de Levi desde 2.395 €, o con salida directa desde Estrasburgo (6 días) desde 2.295 € por persona.",
      ],
      includes: STAY(6),
      price: 2095, nights: 6, departureFrom: "Paris", image: "ak4",
      theme: "adventure", feeling: "revitalized", travelerTypes: "family,couples,groups", maxGuests: 40, order: -42997,
      chapters: [
        fiw.chapter(["Äkäslompolo", "Äkäslompolo", "Äkäslompolo"], ["Le village du fjeld.", "The fell village.", "El pueblo del fjell."],
          ["ak1", "ak2", "ak3", "ak4"],
          [
            arrK(fiw, ["Äkäslompolo", "Äkäslompolo", "Äkäslompolo"], "ak4"),
            fiw.day(2, ["Motoneige et pêche sous la glace", "Snowmobiling and ice fishing", "Moto de nieve y pesca bajo el hielo"], X_SNOWMO, "ak3"),
            fiw.day(3, ["Journée libre", "A free day", "Día libre"], X_FREE, "ak1"),
            fiw.day(4, ["Chiens de traîneau", "Sled dogs", "Perros de trineo"], X_DOGS, "ak2"),
            fiw.day(5, ["Journées libres", "Free days", "Días libres"], X_FREE, "le6"),
            fiw.day(7, T_HOME, home(KTT), "ak4"),
          ]),
      ],
    }),

    finy.trip({
      slug: "finlande-reveillon-du-nouvel-an-en-laponie-7j",
      name: ["Réveillon du Nouvel An en Laponie : Levi, le refuge du Père Noël et les aurores", "New Year's Eve in Lapland: Levi, Santa's hideaway and the northern lights", "Nochevieja en Laponia: Levi, el refugio de Papá Noel y las auroras"],
      tagline: ["Fêter la nouvelle année sous la neige, entre rennes et feux de camp", "Celebrating the New Year in the snow, among reindeer and campfires", "Celebrar el Año Nuevo bajo la nieve, entre renos y fogatas"],
      description: [
        "Une semaine de fêtes à Levi : motoneige et pêche sous la glace, jeux arctiques et traîneau à rennes, randonnée en ski de forêt, chiens de traîneau, le refuge du Père Noël à Kelo Kaira, et le dîner du réveillon. À l'hôtel Olos de Muonio, avec le village de glace de Lainio, à partir de 2 800 € par personne.",
        "A festive week in Levi: snowmobiling and ice fishing, Arctic games and a reindeer sleigh ride, a forest ski trek, sled dogs, Santa's hideaway at Kelo Kaira, and the New Year's Eve dinner. At the Olos hotel in Muonio, with the Lainio ice village, from €2,800 per person.",
        "Una semana de fiestas en Levi: moto de nieve y pesca bajo el hielo, juegos árticos y trineo de renos, excursión de esquí de bosque, perros de trineo, el refugio de Papá Noel en Kelo Kaira, y la cena de Nochevieja. En el hotel Olos de Muonio, con el pueblo de hielo de Lainio, desde 2.800 € por persona.",
      ],
      includes: STAY(6, ",Dîner du réveillon"),
      price: 2700, nights: 6, departureFrom: "Paris", image: "rv5",
      theme: "family", feeling: "distraction", travelerTypes: "family,couples", maxGuests: 40, order: -42996,
      chapters: [
        finy.chapter(["Les fêtes en Laponie", "The festive season in Lapland", "Las fiestas en Laponia"], ["Neige, rennes et réveillon.", "Snow, reindeer and New Year's Eve.", "Nieve, renos y Nochevieja."],
          ["rv1", "rv2", "rv3", "rv4", "rv5"],
          [
            arrK(finy, ["Levi", "Levi", "Levi"], "rv4"),
            finy.day(2, ["Motoneige et pêche sous la glace", "Snowmobiling and ice fishing", "Moto de nieve y pesca bajo el hielo"], X_SNOWMO, "rv3"),
            finy.day(3, ["Jeux arctiques et rennes", "Arctic games and reindeer", "Juegos árticos y renos"], X_REIN, "le1"),
            finy.day(4, ["Ski de forêt", "Forest skiing", "Esquí de bosque"], ["Randonnée à skis larges à travers la forêt enneigée, avec un guide.", "A trek on wide forest skis through the snowy woods, with a guide.", "Excursión con esquís anchos a través del bosque nevado, con un guía."], "rv4"),
            finy.day(5, ["Chiens de traîneau", "Sled dogs", "Perros de trineo"], X_DOGS, "rv1"),
            finy.day(6, ["Le refuge du Père Noël", "Santa's hideaway", "El refugio de Papá Noel"], ["Le refuge de Kelo Kaira, la rencontre avec le Père Noël au coin du feu, puis le dîner de réveillon et, peut-être, les aurores boréales.", "The Kelo Kaira hideaway, meeting Santa by the fire, then the New Year's Eve dinner and, perhaps, the northern lights.", "El refugio de Kelo Kaira, el encuentro con Papá Noel junto al fuego, y la cena de Nochevieja y, quizá, las auroras boreales."], "rv5"),
            finy.day(7, T_HOME, home(KTT), "rv2"),
          ]),
      ],
    }),

    fiw.trip({
      slug: "finlande-levi-hotel-and-spa-multi-activites-8j",
      name: ["Levi Hotel & Spa : motoneige, huskies, village des neiges et Samiland", "Levi Hotel & Spa: snowmobiles, huskies, the snow village and Samiland", "Levi Hotel & Spa: motos de nieve, huskies, el pueblo de nieve y Samiland"],
      tagline: ["Une semaine de Laponie avec spa, dans la plus grande station de Finlande", "A week in Lapland with a spa, in Finland's largest resort", "Una semana en Laponia con spa, en la mayor estación de Finlandia"],
      description: [
        "Une semaine à Levi : safari en motoneige, chiens de traîneau, le village des neiges de Lainio et ses sculptures de glace, une ferme de rennes, le téléphérique et l'exposition Samiland, avec le spa de l'hôtel pour se réchauffer.",
        "A week in Levi: a snowmobile safari, sled dogs, the Lainio snow village and its ice sculptures, a reindeer farm, the gondola and the Samiland exhibition, with the hotel spa to warm up.",
        "Una semana en Levi: safari en moto de nieve, perros de trineo, el pueblo de nieve de Lainio y sus esculturas de hielo, una granja de renos, el teleférico y la exposición Samiland, con el spa del hotel para entrar en calor.",
      ],
      includes: STAY(7, ",Accès au spa"),
      price: 2429, nights: 7, departureFrom: "Genève", image: "le5",
      theme: "relax", feeling: "revitalized", travelerTypes: "couples,family", maxGuests: 30, order: -42995,
      chapters: [
        fiw.chapter(["Levi", "Levi", "Levi"], ["La station du fjeld.", "The fell resort.", "La estación del fjell."],
          ["le1", "le2", "le3", "le5", "le6", "le7"],
          [
            arrK(fiw, ["Levi", "Levi", "Levi"], "le5"),
            fiw.day(2, ["Motoneige", "Snowmobiling", "Moto de nieve"], X_SNOWMO, "le2"),
            fiw.day(3, ["Chiens de traîneau", "Sled dogs", "Perros de trineo"], X_DOGS, "le3"),
            fiw.day(4, ["Village des neiges de Lainio", "Lainio snow village", "Pueblo de nieve de Lainio"], ["Le village des neiges de Lainio, ses salles sculptées dans la glace et son bar de glace.", "The Lainio snow village, its halls carved from ice and its ice bar.", "El pueblo de nieve de Lainio, sus salas esculpidas en el hielo y su bar de hielo."], "le7"),
            fiw.day(5, ["Journée libre", "A free day", "Día libre"], X_FREE, "le6"),
            fiw.day(6, ["Ferme de rennes", "Reindeer farm", "Granja de renos"], X_REIN, "le1"),
            fiw.day(7, ["Téléphérique et Samiland", "Gondola and Samiland", "Teleférico y Samiland"], ["Montée en téléphérique au sommet du fjeld et l'exposition Samiland sur la culture des Samis.", "A gondola ride to the top of the fell and the Samiland exhibition on Sami culture.", "Subida en teleférico a la cima del fjell y la exposición Samiland sobre la cultura sami."], "le2"),
            fiw.day(8, T_HOME, home(KTT), "le5"),
          ]),
      ],
    }),

    fis.trip({
      slug: "finlande-finlande-en-ete-levi-soleil-de-minuit-8j",
      name: ["La Finlande en été : Levi, le soleil de minuit, les rennes et le canoë", "Finland in summer: Levi, the midnight sun, reindeer and canoeing", "Finlandia en verano: Levi, el sol de medianoche, los renos y la canoa"],
      tagline: ["La Laponie verte, ses lacs et ses nuits sans fin", "Green Lapland, its lakes and endless nights", "La Laponia verde, sus lagos y sus noches sin fin"],
      description: [
        "La Laponie sous le soleil de minuit : une ferme de rennes, de chevaux et de huskies, le funiculaire et l'exposition Samiland, une initiation à la faune et à la flore, du canoë sur les rivières, puis deux journées libres.",
        "Lapland under the midnight sun: a farm with reindeer, horses and huskies, the funicular and the Samiland exhibition, an introduction to the local wildlife and plants, canoeing on the rivers, then two free days.",
        "Laponia bajo el sol de medianoche: una granja de renos, caballos y huskies, el funicular y la exposición Samiland, una iniciación a la fauna y la flora, canoa por los ríos, y dos días libres.",
      ],
      includes: STAY(7),
      price: 1576, nights: 7, departureFrom: "Paris", image: "et1",
      theme: "family", feeling: "revitalized", travelerTypes: "family,couples", maxGuests: 30, order: -42994,
      chapters: [
        fis.chapter(["Levi en été", "Levi in summer", "Levi en verano"], ["Lacs, forêts et soleil de minuit.", "Lakes, forests and the midnight sun.", "Lagos, bosques y sol de medianoche."],
          ["et1", "et2", "et3", "et4", "et5", "et6"],
          [
            arrK(fis, ["Levi", "Levi", "Levi"], "et3"),
            fis.day(2, ["Ferme et soleil de minuit", "Farm and midnight sun", "Granja y sol de medianoche"], ["Une ferme de rennes, de chevaux et de huskies, et le soir le soleil de minuit qui ne se couche pas.", "A farm with reindeer, horses and huskies, and in the evening the midnight sun that never sets.", "Una granja de renos, caballos y huskies, y por la noche el sol de medianoche que no se pone."], "et4"),
            fis.day(3, ["Funiculaire et Samiland", "Funicular and Samiland", "Funicular y Samiland"], ["Le funiculaire au sommet du fjeld de Levi et l'exposition Samiland.", "The funicular to the top of the Levi fell and the Samiland exhibition.", "El funicular a la cima del fjell de Levi y la exposición Samiland."], "et6"),
            fis.day(4, ["Nature et canoë", "Nature and canoeing", "Naturaleza y canoa"], ["Balade à la découverte de la faune et de la flore, baies sauvages, puis initiation au canoë.", "A walk discovering the wildlife and plants, wild berries, then a canoeing lesson.", "Paseo para descubrir la fauna y la flora, bayas silvestres, e iniciación a la canoa."], "et5"),
            fis.day(5, ["Canoë", "Canoeing", "Canoa"], ["Une journée de canoë sur la rivière, entre bouleaux et forêts de pins.", "A day canoeing on the river, among birches and pine forests.", "Un día de canoa por el río, entre abedules y bosques de pinos."], "et2"),
            fis.day(6, ["Journées libres", "Free days", "Días libres"], ["Deux journées libres : randonnée, VTT, golf ou baignade dans les lacs.", "Two free days: hiking, mountain biking, golf or swimming in the lakes.", "Dos días libres: senderismo, bicicleta de montaña, golf o baño en los lagos."], "et1"),
            fis.day(8, T_HOME, home(KTT), "et3"),
          ]),
      ],
    }),

    fiw.trip({
      slug: "finlande-cap-nord-lofoten-et-les-trois-laponies-8j",
      name: ["Cap Nord, Lofoten et les trois Laponies : Norvège, Finlande et Suède en hiver", "North Cape, the Lofoten and the three Laplands: Norway, Finland and Sweden in winter", "Cabo Norte, Lofoten y las tres Laponias: Noruega, Finlandia y Suecia en invierno"],
      tagline: ["Trois pays arctiques et l'hôtel de glace, en une semaine", "Three Arctic countries and the ice hotel, in a week", "Tres países árticos y el hotel de hielo, en una semana"],
      description: [
        "La grande boucle arctique en hiver : Tromsø, le cap Nord, Karasjok et la Laponie finlandaise à Enontekiö, la Laponie suédoise, l'hôtel de glace de Jukkasjärvi et Kiruna, Narvik, la croisière dans le Trollfjord, les îles Lofoten, puis la traversée côtière jusqu'à Tromsø.",
        "The great Arctic loop in winter: Tromsø, North Cape, Karasjok and Finnish Lapland at Enontekiö, Swedish Lapland, the Jukkasjärvi Ice Hotel and Kiruna, Narvik, the Trollfjord cruise, the Lofoten Islands, then the coastal crossing back to Tromsø.",
        "El gran circuito ártico en invierno: Tromsø, el cabo Norte, Karasjok y la Laponia finlandesa en Enontekiö, la Laponia sueca, el hotel de hielo de Jukkasjärvi y Kiruna, Narvik, el crucero por el Trollfjord, las islas Lofoten, y la travesía costera hasta Tromsø.",
      ],
      includes: INC(7, ",Croisière dans le Trollfjord"),
      price: 2809, nights: 7, departureFrom: "Toulouse", image: "cn6",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo,groups", maxGuests: 30, order: -42993,
      chapters: [
        fiw.chapter(["Cap Nord et Laponies", "North Cape and the Laplands", "Cabo Norte y las Laponias"], ["Le bout de l'Europe et les trois pays.", "The end of Europe and the three countries.", "El final de Europa y los tres países."],
          ["cn2", "cn3", "cn5"],
          [
            fiw.day(1, ["Arrivée à Tromsø", "Arrival in Tromsø", "Llegada a Tromsø"], ["Envol pour Tromsø, la capitale de l'Arctique norvégien.", "Flight to Tromsø, the capital of the Norwegian Arctic.", "Vuelo a Tromsø, la capital del Ártico noruego."], "cn2"),
            fiw.day(2, ["Tromsø – cap Nord", "Tromsø – North Cape", "Tromsø – cabo Norte"], ["Vol vers le Grand Nord et le cap Nord, falaise au bout de l'Europe face à l'océan Arctique.", "Flight to the Far North and North Cape, a cliff at the end of Europe facing the Arctic Ocean.", "Vuelo al Gran Norte y el cabo Norte, acantilado al final de Europa frente al océano Ártico."], "cn3"),
            fiw.day(3, ["Karasjok – Enontekiö", "Karasjok – Enontekiö", "Karasjok – Enontekiö"], ["Karasjok, capitale des Samis de Norvège, puis la Laponie finlandaise à Enontekiö.", "Karasjok, capital of the Norwegian Sami, then Finnish Lapland at Enontekiö.", "Karasjok, capital de los samis de Noruega, y la Laponia finlandesa en Enontekiö."], "cn5"),
            fiw.day(4, ["Hôtel de glace – Kiruna – Narvik", "Ice Hotel – Kiruna – Narvik", "Hotel de hielo – Kiruna – Narvik"], ["La Laponie suédoise, l'hôtel de glace de Jukkasjärvi, reconstruit chaque hiver, Kiruna, puis Narvik.", "Swedish Lapland, the Jukkasjärvi Ice Hotel, rebuilt each winter, Kiruna, then Narvik.", "La Laponia sueca, el hotel de hielo de Jukkasjärvi, reconstruido cada invierno, Kiruna, y Narvik."], "su3"),
          ]),
        fiw.chapter(["Les Lofoten", "The Lofoten", "Las Lofoten"], ["Fjords et îles arctiques.", "Fjords and Arctic islands.", "Fiordos e islas árticas."],
          ["cn4", "cn1", "cn6"],
          [
            fiw.day(5, ["Trollfjord – Svolvær", "Trollfjord – Svolvær", "Trollfjord – Svolvær"], ["Croisière dans l'étroit Trollfjord, puis Svolvær.", "A cruise in the narrow Trollfjord, then Svolvær.", "Crucero por el estrecho Trollfjord, y Svolvær."], "cn4"),
            fiw.day(6, ["Les îles Lofoten", "The Lofoten Islands", "Las islas Lofoten"], ["Les îles Lofoten, leurs montagnes plongeant dans la mer et leurs villages de pêcheurs aux rorbuer rouges.", "The Lofoten Islands, their mountains plunging into the sea and their fishing villages of red rorbuer.", "Las islas Lofoten, sus montañas que se hunden en el mar y sus pueblos de pescadores de rorbuer rojos."], "cn6"),
            fiw.day(7, ["Traversée côtière – Tromsø", "Coastal crossing – Tromsø", "Travesía costera – Tromsø"], ["La route côtière jusqu'à Tromsø.", "The coastal road back to Tromsø.", "La carretera costera hasta Tromsø."], "cn1"),
            fiw.day(8, T_HOME, home(["Tromsø", "Tromsø", "Tromsø"]), "cn2"),
          ]),
      ],
    }),

    se.trip({
      slug: "suede-cap-sur-la-suede-stockholm-bohuslan-malmo-8j",
      name: ["Cap sur la Suède : Stockholm, Göteborg, l'archipel du Bohuslän, Lund et Malmö", "Heading for Sweden: Stockholm, Gothenburg, the Bohuslän archipelago, Lund and Malmö", "Rumbo a Suecia: Estocolmo, Gotemburgo, el archipiélago del Bohuslän, Lund y Malmö"],
      tagline: ["De la capitale aux côtes de granit, jusqu'au pont de l'Øresund", "From the capital to the granite coasts, as far as the Øresund bridge", "De la capital a las costas de granito, hasta el puente del Øresund"],
      description: [
        "La Suède d'est en ouest : deux jours à Stockholm, Göteborg, deux jours dans l'archipel du Bohuslän et ses villages de pêcheurs, Halmstad, Lund et sa cathédrale, Malmö, puis le pont de l'Øresund vers Copenhague.",
        "Sweden from east to west: two days in Stockholm, Gothenburg, two days in the Bohuslän archipelago and its fishing villages, Halmstad, Lund and its cathedral, Malmö, then the Øresund bridge to Copenhagen.",
        "Suecia de este a oeste: dos días en Estocolmo, Gotemburgo, dos días en el archipiélago del Bohuslän y sus pueblos de pescadores, Halmstad, Lund y su catedral, Malmö, y el puente del Øresund hacia Copenhague.",
      ],
      includes: INC(7),
      price: 1993, nights: 7, departureFrom: "Paris", image: "se2",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,family,groups", maxGuests: 40, order: -42992,
      chapters: [
        se.chapter(["Stockholm et Göteborg", "Stockholm and Gothenburg", "Estocolmo y Gotemburgo"], ["Les deux grandes villes.", "The two big cities.", "Las dos grandes ciudades."],
          ["se1", "se3", "se5"],
          [
            se.day(1, ["Arrivée à Stockholm", "Arrival in Stockholm", "Llegada a Estocolmo"], ["Envol pour Stockholm, accueil et transfert à l'hôtel.", "Flight to Stockholm, welcome and transfer to the hotel.", "Vuelo a Estocolmo, recibimiento y traslado al hotel."], "se1"),
            se.day(2, ["Stockholm", "Stockholm", "Estocolmo"], ["Stockholm, bâtie sur quatorze îles : Gamla Stan, le palais royal, l'hôtel de ville et le musée Vasa.", "Stockholm, built on fourteen islands: Gamla Stan, the Royal Palace, the City Hall and the Vasa Museum.", "Estocolmo, construida sobre catorce islas: Gamla Stan, el palacio real, el ayuntamiento y el museo Vasa."], "se3"),
            se.day(3, ["Göteborg – Uddevalla", "Gothenburg – Uddevalla", "Gotemburgo – Uddevalla"], ["Traversée de la Suède jusqu'à Göteborg, ses canaux et son quartier de Haga, puis Uddevalla.", "Across Sweden to Gothenburg, its canals and the Haga district, then Uddevalla.", "Travesía de Suecia hasta Gotemburgo, sus canales y su barrio de Haga, y Uddevalla."], "se5"),
          ]),
        se.chapter(["Le Bohuslän et la Scanie", "Bohuslän and Skåne", "El Bohuslän y Escania"], ["Archipels et villes du sud.", "Archipelagos and southern towns.", "Archipiélagos y ciudades del sur."],
          ["se2", "se4", "se6"],
          [
            se.day(4, ["L'archipel du Bohuslän", "The Bohuslän archipelago", "El archipiélago del Bohuslän"], ["Les îles de granit rose du Bohuslän, Smögen et ses cabanes de pêcheurs, et un déjeuner de fruits de mer.", "The pink granite islands of Bohuslän, Smögen and its fishermen's huts, and a seafood lunch.", "Las islas de granito rosa del Bohuslän, Smögen y sus cabañas de pescadores, y un almuerzo de marisco."], "se2"),
            se.day(5, ["Bohuslän – Halmstad", "Bohuslän – Halmstad", "Bohuslän – Halmstad"], ["La côte ouest et ses plages jusqu'à Halmstad.", "The west coast and its beaches down to Halmstad.", "La costa oeste y sus playas hasta Halmstad."], "se2"),
            se.day(6, ["Lund – Malmö", "Lund – Malmö", "Lund – Malmö"], ["Lund, sa cathédrale romane et son université, puis Malmö.", "Lund, its Romanesque cathedral and university, then Malmö.", "Lund, su catedral románica y su universidad, y Malmö."], "se4"),
            se.day(7, ["Malmö", "Malmö", "Malmö"], ["Malmö, sa vieille ville, la tour Turning Torso et le parc du château.", "Malmö, its old town, the Turning Torso tower and the castle park.", "Malmö, su ciudad vieja, la torre Turning Torso y el parque del castillo."], "se5"),
            se.day(8, T_HOME, ["Le pont de l'Øresund vers l'aéroport de Copenhague et envol pour la France.", "The Øresund bridge to Copenhagen airport and fly to France.", "El puente del Øresund hacia el aeropuerto de Copenhague y vuelo a Francia."], "se6"),
          ]),
      ],
    }),

    se.trip({
      slug: "suede-cap-sur-la-baltique-stockholm-helsinki-riga-gdansk-13j",
      name: ["Cap sur la Baltique : Stockholm, Helsinki, Tallinn, Riga, Vilnius, Gdańsk et Copenhague", "Heading for the Baltic: Stockholm, Helsinki, Tallinn, Riga, Vilnius, Gdańsk and Copenhagen", "Rumbo al Báltico: Estocolmo, Helsinki, Tallin, Riga, Vilna, Gdansk y Copenhague"],
      tagline: ["Le grand tour de la mer Baltique, sept pays en treize jours", "The grand tour of the Baltic Sea, seven countries in thirteen days", "La gran vuelta al mar Báltico, siete países en trece días"],
      description: [
        "Le tour complet de la Baltique : Stockholm, la croisière vers Helsinki, Tallinn, Pärnu et Riga, le palais de Rundāle et la colline des Croix, Vilnius et Trakai, les lacs de Mazurie, Gdańsk, puis la traversée vers Karlskrona et Copenhague.",
        "The full Baltic tour: Stockholm, the cruise to Helsinki, Tallinn, Pärnu and Riga, Rundāle Palace and the Hill of Crosses, Vilnius and Trakai, the Masurian lakes, Gdańsk, then the crossing to Karlskrona and Copenhagen.",
        "La vuelta completa al Báltico: Estocolmo, el crucero a Helsinki, Tallin, Pärnu y Riga, el palacio de Rundāle y la colina de las Cruces, Vilna y Trakai, los lagos de Masuria, Gdansk, y la travesía a Karlskrona y Copenhague.",
      ],
      includes: INC(12, ",Ferries Stockholm – Helsinki – Tallinn et Gdynia – Karlskrona"),
      price: 2956, nights: 12, departureFrom: "Paris", image: "ba1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 40, order: -42991,
      chapters: [
        se.chapter(["Stockholm, Helsinki et Tallinn", "Stockholm, Helsinki and Tallinn", "Estocolmo, Helsinki y Tallin"], ["Les capitales du nord.", "The northern capitals.", "Las capitales del norte."],
          ["ba1", "ba2", "ba3"],
          [
            se.day(1, ["Arrivée à Stockholm", "Arrival in Stockholm", "Llegada a Estocolmo"], ["Envol pour Stockholm.", "Flight to Stockholm.", "Vuelo a Estocolmo."], "ba1"),
            se.day(2, ["Stockholm – Helsinki", "Stockholm – Helsinki", "Estocolmo – Helsinki"], ["Stockholm et Gamla Stan, puis croisière de nuit vers Helsinki entre les îles de l'archipel.", "Stockholm and Gamla Stan, then a night cruise to Helsinki among the archipelago's islands.", "Estocolmo y Gamla Stan, y crucero nocturno a Helsinki entre las islas del archipiélago."], "ba1"),
            se.day(3, ["Helsinki", "Helsinki", "Helsinki"], ["Helsinki, sa cathédrale blanche, l'église creusée dans le rocher et la forteresse de Suomenlinna.", "Helsinki, its white cathedral, the church carved into the rock and the Suomenlinna fortress.", "Helsinki, su catedral blanca, la iglesia excavada en la roca y la fortaleza de Suomenlinna."], "ba2"),
            se.day(4, ["Helsinki – Tallinn", "Helsinki – Tallinn", "Helsinki – Tallin"], ["Ferry vers Tallinn et sa vieille ville médiévale classée par l'Unesco.", "Ferry to Tallinn and its UNESCO-listed medieval old town.", "Ferri a Tallin y su ciudad vieja medieval declarada por la Unesco."], "ba4"),
          ]),
        se.chapter(["Les pays baltes", "The Baltic states", "Los países bálticos"], ["Riga, Rundāle et Vilnius.", "Riga, Rundāle and Vilnius.", "Riga, Rundāle y Vilna."],
          ["ba6", "ba7", "ba5"],
          [
            se.day(5, ["Pärnu – Riga", "Pärnu – Riga", "Pärnu – Riga"], ["La station balnéaire de Pärnu, puis Riga.", "The seaside resort of Pärnu, then Riga.", "El balneario de Pärnu, y Riga."], "ba5"),
            se.day(6, ["Riga", "Riga", "Riga"], ["Riga, sa vieille ville hanséatique et son quartier Art nouveau.", "Riga, its Hanseatic old town and its Art Nouveau district.", "Riga, su ciudad vieja hanseática y su barrio modernista."], "ba6"),
            se.day(7, ["Rundāle – Šiauliai – Vilnius", "Rundāle – Šiauliai – Vilnius", "Rundāle – Šiauliai – Vilna"], ["Le palais baroque de Rundāle, la colline des Croix près de Šiauliai, puis Vilnius.", "The baroque Rundāle Palace, the Hill of Crosses near Šiauliai, then Vilnius.", "El palacio barroco de Rundāle, la colina de las Cruces cerca de Šiauliai, y Vilna."], "ba7"),
            se.day(8, ["Vilnius", "Vilnius", "Vilna"], ["Vilnius, sa vieille ville baroque et la porte de l'Aurore.", "Vilnius, its baroque old town and the Gate of Dawn.", "Vilna, su ciudad vieja barroca y la puerta de la Aurora."], "ba7"),
          ]),
        se.chapter(["La Pologne et le Danemark", "Poland and Denmark", "Polonia y Dinamarca"], ["Mazurie, Gdańsk et Copenhague.", "Masuria, Gdańsk and Copenhagen.", "Masuria, Gdansk y Copenhague."],
          ["ba3"],
          [
            se.day(9, ["Trakai – Mazurie", "Trakai – Masuria", "Trakai – Masuria"], ["Le château de Trakai sur son lac, puis la région des lacs de Mazurie en Pologne.", "Trakai castle on its lake, then the Masurian lake district in Poland.", "El castillo de Trakai sobre su lago, y la región de los lagos de Masuria en Polonia."], "ba5"),
            se.day(10, ["Ketrzyn – Gdańsk", "Ketrzyn – Gdańsk", "Ketrzyn – Gdansk"], ["Les forêts de Mazurie, puis Gdańsk et ses maisons hanséatiques.", "The Masurian forests, then Gdańsk and its Hanseatic houses.", "Los bosques de Masuria, y Gdansk y sus casas hanseáticas."], "ba6"),
            se.day(11, ["Gdynia – Karlskrona", "Gdynia – Karlskrona", "Gdynia – Karlskrona"], ["Ferry de Gdynia vers Karlskrona, port militaire suédois classé par l'Unesco.", "Ferry from Gdynia to Karlskrona, a UNESCO-listed Swedish naval port.", "Ferri de Gdynia a Karlskrona, puerto militar sueco declarado por la Unesco."], "ba3"),
            se.day(12, ["Karlskrona – Copenhague", "Karlskrona – Copenhagen", "Karlskrona – Copenhague"], ["La Scanie puis le pont de l'Øresund jusqu'à Copenhague et son port de Nyhavn.", "Skåne, then the Øresund bridge to Copenhagen and its Nyhavn harbour.", "Escania y el puente del Øresund hasta Copenhague y su puerto de Nyhavn."], "se6"),
            se.day(13, T_HOME, home(["Copenhague", "Copenhagen", "Copenhague"]), "ba1"),
          ]),
      ],
    }),

    fo.trip({
      slug: "iles-feroe-cap-sur-les-iles-feroe-6j",
      name: ["Cap sur les îles Féroé : Tórshavn, Vestmanna, Saksun, Gjógv et Gásadalur", "Heading for the Faroe Islands: Tórshavn, Vestmanna, Saksun, Gjógv and Gásadalur", "Rumbo a las islas Feroe: Tórshavn, Vestmanna, Saksun, Gjógv y Gásadalur"],
      tagline: ["Falaises, cascades et villages au toit de gazon au milieu de l'Atlantique", "Cliffs, waterfalls and turf-roofed villages in the middle of the Atlantic", "Acantilados, cascadas y pueblos de tejados de césped en medio del Atlántico"],
      description: [
        "L'archipel des Féroé en six jours : Tórshavn, le village historique de Kirkjubøur, les falaises et grottes marines de Vestmanna, Saksun, Tjørnuvík et Gjógv, une journée libre, puis la randonnée vers le lac Leitisvatn et la cascade de Gásadalur.",
        "The Faroe archipelago in six days: Tórshavn, the historic village of Kirkjubøur, the cliffs and sea caves of Vestmanna, Saksun, Tjørnuvík and Gjógv, a free day, then the hike to Lake Leitisvatn and the Gásadalur waterfall.",
        "El archipiélago de las Feroe en seis días: Tórshavn, el pueblo histórico de Kirkjubøur, los acantilados y grutas marinas de Vestmanna, Saksun, Tjørnuvík y Gjógv, un día libre, y la caminata al lago Leitisvatn y la cascada de Gásadalur.",
      ],
      includes: INC(5, ",Croisière aux falaises de Vestmanna"),
      price: 2415, nights: 5, departureFrom: "Paris", image: "fo1",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,solo,groups", maxGuests: 20, order: -42990,
      chapters: [
        fo.chapter(["Les îles Féroé", "The Faroe Islands", "Las islas Feroe"], ["Falaises et villages.", "Cliffs and villages.", "Acantilados y pueblos."],
          ["fo1", "fo2", "fo3", "fo4", "fo5", "fo6"],
          [
            fo.day(1, ["Vágar – Tórshavn", "Vágar – Tórshavn", "Vágar – Tórshavn"], ["Envol pour Vágar et route vers Tórshavn, l'une des plus petites capitales du monde.", "Flight to Vágar and the drive to Tórshavn, one of the smallest capitals in the world.", "Vuelo a Vágar y carretera hacia Tórshavn, una de las capitales más pequeñas del mundo."], "fo2"),
            fo.day(2, ["Kirkjubøur – Vestmanna", "Kirkjubøur – Vestmanna", "Kirkjubøur – Vestmanna"], ["Kirkjubøur, ses ruines médiévales et ses maisons de bois, puis en bateau au pied des falaises et des grottes de Vestmanna, peuplées d'oiseaux marins.", "Kirkjubøur, its medieval ruins and wooden houses, then by boat to the foot of the Vestmanna cliffs and caves, home to seabirds.", "Kirkjubøur, sus ruinas medievales y sus casas de madera, y en barco al pie de los acantilados y grutas de Vestmanna, pobladas de aves marinas."], "fo3"),
            fo.day(3, ["Saksun – Tjørnuvík – Gjógv", "Saksun – Tjørnuvík – Gjógv", "Saksun – Tjørnuvík – Gjógv"], ["Le village de Saksun au fond de sa lagune, la plage de Tjørnuvík, puis Gjógv et sa gorge naturelle.", "The village of Saksun at the end of its lagoon, Tjørnuvík beach, then Gjógv and its natural gorge.", "El pueblo de Saksun al fondo de su laguna, la playa de Tjørnuvík, y Gjógv y su garganta natural."], "fo6"),
            fo.day(4, ["Journée libre", "A free day", "Día libre"], ["Journée libre, ou en option l'île aux macareux de Mykines.", "A free day, or optionally the puffin island of Mykines.", "Día libre, u opcional la isla de los frailecillos de Mykines."], "fo5"),
            fo.day(5, ["Leitisvatn – Bøur – Gásadalur", "Leitisvatn – Bøur – Gásadalur", "Leitisvatn – Bøur – Gásadalur"], ["Randonnée vers le lac Leitisvatn suspendu au-dessus de l'océan, le village de Bøur et la cascade de Gásadalur.", "A hike to Lake Leitisvatn hanging above the ocean, the village of Bøur and the Gásadalur waterfall.", "Caminata al lago Leitisvatn suspendido sobre el océano, el pueblo de Bøur y la cascada de Gásadalur."], "fo4"),
            fo.day(6, T_HOME, home(["Vágar", "Vágar", "Vágar"]), "fo1"),
          ]),
      ],
    }),
  ];

  const { runSeedBatch, disconnect } = await import("./lib/seedTripsRunner");
  try {
    await runSeedBatch({ newDestinations, newStandardTrips: [], newJourneyTrips: journeyTrips });
    console.log("\nDone.");
  } finally {
    await disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
