// Caraïbes batch 1 (full region) — Cuba, Bahamas, Jamaïque, République dominicaine,
// Sainte-Lucie, Barbade, Porto Rico, Antigua-et-Barbuda, Grenade, Trinité-et-Tobago, Aruba,
// Dominique. New trips bringing each destination to at least 3, styled on Black Tomato's real
// structure (a short number of named-hotel chapters, not an exhaustive day-by-day grind)
// rather than copying their text. This completes all 12 destinations in the Caraïbes region.
// Run with:
//   npx tsx scripts/seed-trips-caraibes-1.ts
// Requires scripts/upload-images-caraibes-1.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "cuba",
    tour: {
      name: "Cuba : Santiago de Cuba et Baracoa",
      nameEn: "Cuba: Santiago de Cuba and Baracoa",
      nameEs: "Cuba: Santiago de Cuba y Baracoa",
      slug: "cuba-santiago-baracoa",
      image: `${R2}/journeys/cuba-santiago-baracoa-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le berceau de la révolution et du son cubain, puis la toute première ville fondée par les Espagnols dans le Nouveau Monde",
      taglineEn: "The cradle of the revolution and Cuban son music, then the very first city founded by the Spanish in the New World",
      taglineEs: "La cuna de la revolución y del son cubano, y después la primerísima ciudad fundada por los españoles en el Nuevo Mundo",
      description:
        "Un voyage dans l'est de Cuba, loin de La Havane et de Viñales : Santiago de Cuba, seconde ville du pays et berceau du son cubain, ancêtre direct de la salsa, dont l'atmosphère afro-cubaine reste plus marquée qu'ailleurs sur l'île, puis Baracoa, première ville fondée par les Espagnols dans le Nouveau Monde en 1511, isolée par une chaîne de montagnes jusqu'à la construction d'une route carrossable en 1965 et restée depuis l'une des régions les plus préservées de Cuba.",
      descriptionEn:
        "A journey through eastern Cuba, far from Havana and Viñales: Santiago de Cuba, the country's second city and cradle of Cuban son, the direct ancestor of salsa, whose Afro-Cuban atmosphere remains more pronounced than elsewhere on the island, then Baracoa, the first city founded by the Spanish in the New World in 1511, isolated by a mountain range until a paved road was built in 1965 and remaining since one of Cuba's most preserved regions.",
      descriptionEs:
        "Un viaje por el este de Cuba, lejos de La Habana y Viñales: Santiago de Cuba, segunda ciudad del país y cuna del son cubano, antepasado directo de la salsa, cuya atmósfera afrocubana sigue siendo más marcada que en el resto de la isla, y después Baracoa, primera ciudad fundada por los españoles en el Nuevo Mundo en 1511, aislada por una cordillera hasta la construcción de una carretera en 1965 y una de las regiones más preservadas de Cuba desde entonces.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Nov à avril",
      whenLabelEn: "Nov to April",
      whenLabelEs: "Nov a abril",
      bestMonths: "november,december,january,february,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 153,
    },
    chapters: [
      {
        title: "Santiago de Cuba, le berceau du son",
        titleEn: "Santiago de Cuba, the Cradle of Son",
        titleEs: "Santiago de Cuba, la cuna del son",
        intro:
          "Premier chapitre à Santiago de Cuba, seconde ville du pays fondée en 1515, dont l'atmosphère afro-cubaine plus marquée qu'à La Havane s'explique par l'arrivée massive d'esclaves africains destinés aux plantations de canne à sucre de la région orientale. C'est ici que naquit le son cubain à la fin du XIXe siècle, genre musical fusionnant rythmes africains et guitare espagnole qui allait devenir, quelques décennies plus tard, l'ancêtre direct de la salsa new-yorkaise.",
        introEn:
          "The first chapter unfolds in Santiago de Cuba, the country's second city founded in 1515, whose Afro-Cuban atmosphere, more pronounced than in Havana, stems from the massive arrival of enslaved Africans destined for the eastern region's sugar cane plantations. It was here that Cuban son was born in the late 19th century, a musical genre fusing African rhythms with Spanish guitar that would become, a few decades later, the direct ancestor of New York salsa.",
        introEs:
          "El primer capítulo se desarrolla en Santiago de Cuba, segunda ciudad del país fundada en 1515, cuya atmósfera afrocubana, más marcada que en La Habana, se explica por la llegada masiva de esclavos africanos destinados a las plantaciones de caña de azúcar de la región oriental. Fue aquí donde nació el son cubano a finales del siglo XIX, género musical que fusiona ritmos africanos con guitarra española y que se convertiría, unas décadas más tarde, en el antepasado directo de la salsa neoyorquina.",
        galleryImages: `${R2}/journeys/cuba-santiago-gallery1.jpg,${R2}/journeys/cuba-santiago-gallery2.jpg,${R2}/journeys/cuba-santiago-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "La Casa de la Trova et la musique vivante",
            titleEn: "Casa de la Trova and live music",
            titleEs: "La Casa de la Trova y la música en vivo",
            description:
              "Soirée à la Casa de la Trova, institution musicale historique de Santiago où se transmet depuis des décennies le répertoire traditionnel du son cubain, entre musiciens locaux et danseurs improvisés.",
            descriptionEn:
              "An evening at the Casa de la Trova, Santiago's historic musical institution where the traditional Cuban son repertoire has been passed down for decades, among local musicians and impromptu dancers.",
            descriptionEs:
              "Velada en la Casa de la Trova, institución musical histórica de Santiago donde se transmite desde hace décadas el repertorio tradicional del son cubano, entre músicos locales y bailarines improvisados.",
            image: `${R2}/journeys/cuba-santiago-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "El Cobre et le sanctuaire de la Vierge",
            titleEn: "El Cobre and the Virgin's Sanctuary",
            titleEs: "El Cobre y el santuario de la Virgen",
            description:
              "Excursion vers la basilique d'El Cobre, sanctuaire dédié à la Vierge de la Charité, patronne de Cuba, perchée dans les collines minières environnantes et lieu de pèlerinage majeur de l'île.",
            descriptionEn:
              "An excursion to the El Cobre basilica, a sanctuary dedicated to Our Lady of Charity, patron saint of Cuba, perched in the surrounding mining hills and a major pilgrimage site on the island.",
            descriptionEs:
              "Excursión a la basílica de El Cobre, santuario dedicado a la Virgen de la Caridad, patrona de Cuba, encaramada en las colinas mineras circundantes y lugar de peregrinación importante de la isla.",
            image: `${R2}/journeys/cuba-santiago-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Baracoa, la première ville des Amériques",
        titleEn: "Baracoa, the First City of the Americas",
        titleEs: "Baracoa, la primera ciudad de las Américas",
        intro:
          "Route vers Baracoa, fondée par Diego Velázquez en 1511 et devenue de fait la toute première ville espagnole du Nouveau Monde, aujourd'hui nichée entre l'océan Atlantique et une chaîne de montagnes qui l'isola pendant plus de quatre siècles, jusqu'à l'achèvement d'une route carrossable en 1965. Cet isolement historique a préservé une cuisine et une culture locales distinctes, marquées par l'usage du chocolat, du coco et du poisson, ingrédients rares ailleurs dans la cuisine cubaine traditionnelle.",
        introEn:
          "The road to Baracoa, founded by Diego Velázquez in 1511 and effectively the very first Spanish city in the New World, today nestled between the Atlantic Ocean and a mountain range that isolated it for over four centuries, until a paved road was completed in 1965. This historical isolation preserved a distinct local cuisine and culture, marked by the use of chocolate, coconut, and fish, ingredients rare elsewhere in traditional Cuban cooking.",
        introEs:
          "Ruta hacia Baracoa, fundada por Diego Velázquez en 1511 y de facto la primerísima ciudad española del Nuevo Mundo, hoy enclavada entre el océano Atlántico y una cordillera que la aisló durante más de cuatro siglos, hasta la finalización de una carretera en 1965. Este aislamiento histórico preservó una cocina y una cultura locales distintas, marcadas por el uso del chocolate, el coco y el pescado, ingredientes poco comunes en el resto de la cocina cubana tradicional.",
        galleryImages: `${R2}/journeys/cuba-baracoa-gallery1.jpg,${R2}/journeys/cuba-baracoa-gallery2.jpg,${R2}/journeys/cuba-baracoa-gallery3.jpg`,
        mapMarkerX: 90,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "El Yunque et la baie de Baracoa",
            titleEn: "El Yunque and Baracoa Bay",
            titleEs: "El Yunque y la bahía de Baracoa",
            description:
              "Randonnée vers El Yunque, montagne à sommet plat qui domine Baracoa et servit de repère aux navigateurs espagnols, avant une promenade le long de la baie où Christophe Colomb aurait accosté en 1492.",
            descriptionEn:
              "A hike to El Yunque, a flat-topped mountain overlooking Baracoa that served as a landmark for Spanish navigators, followed by a walk along the bay where Christopher Columbus is said to have landed in 1492.",
            descriptionEs:
              "Caminata hacia El Yunque, montaña de cima plana que domina Baracoa y sirvió de referencia a los navegantes españoles, antes de un paseo por la bahía donde Cristóbal Colón habría desembarcado en 1492.",
            image: `${R2}/journeys/cuba-baracoa-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La cuisine au chocolat et à la noix de coco",
            titleEn: "Chocolate and coconut cuisine",
            titleEs: "La cocina de chocolate y coco",
            description:
              "Visite d'une fabrique artisanale de chocolat de Baracoa, l'une des seules régions cubaines productrices de cacao, suivie d'un déjeuner de cucurucho, dessert local à base de noix de coco et de fruits tropicaux.",
            descriptionEn:
              "A visit to an artisanal chocolate factory in Baracoa, one of the only cacao-producing regions in Cuba, followed by a lunch of cucurucho, a local dessert made from coconut and tropical fruit.",
            descriptionEs:
              "Visita a una fábrica artesanal de chocolate de Baracoa, una de las únicas regiones cubanas productoras de cacao, seguida de un almuerzo de cucurucho, postre local a base de coco y frutas tropicales.",
            image: `${R2}/journeys/cuba-baracoa-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "bahamas",
    tour: {
      name: "Bahamas : Andros et Bimini",
      nameEn: "The Bahamas: Andros and Bimini",
      nameEs: "Bahamas: Andros y Bimini",
      slug: "bahamas-andros-bimini",
      image: `${R2}/journeys/bahamas-andros-bimini-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La plus grande île des Bahamas, criblée de trous bleus vertigineux, puis la porte d'entrée historique de la pêche sportive et des nages avec dauphins sauvages",
      taglineEn: "The Bahamas' largest island, riddled with vertiginous blue holes, then the historic gateway to sport fishing and wild dolphin swims",
      taglineEs: "La isla más grande de las Bahamas, salpicada de vertiginosos agujeros azules, y después la puerta de entrada histórica de la pesca deportiva y los baños con delfines salvajes",
      description:
        "Un voyage loin de Nassau et des Exumas : Andros, la plus grande île des Bahamas mais aussi la moins peuplée, dont l'intérieur karstique abrite plus de cent soixante-dix trous bleus, gouffres sous-marins vertigineux reliés à un vaste réseau de grottes noyées, puis Bimini, îlot rendu célèbre par Ernest Hemingway et devenu depuis un haut lieu mondial de la pêche sportive, où des dauphins sauvages viennent naturellement à la rencontre des nageurs dans des bancs de sable peu profonds.",
      descriptionEn:
        "A journey far from Nassau and the Exumas: Andros, the Bahamas' largest yet least populated island, whose karst interior shelters over one hundred and seventy blue holes, vertiginous underwater sinkholes connected to a vast network of drowned caves, then Bimini, an islet made famous by Ernest Hemingway and since become a world hotspot for sport fishing, where wild dolphins naturally come to meet swimmers over shallow sandbanks.",
      descriptionEs:
        "Un viaje lejos de Nassau y las Exumas: Andros, la isla más grande de las Bahamas pero también la menos poblada, cuyo interior kárstico alberga más de ciento setenta agujeros azules, sumideros submarinos vertiginosos conectados a una vasta red de cuevas inundadas, y después Bimini, islote hecho famoso por Ernest Hemingway y convertido desde entonces en un lugar mundial de referencia para la pesca deportiva, donde delfines salvajes acuden de forma natural al encuentro de los nadadores en bajíos poco profundos.",
      price: 3600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 155,
    },
    chapters: [
      {
        title: "Andros et les trous bleus",
        titleEn: "Andros and the Blue Holes",
        titleEs: "Andros y los agujeros azules",
        intro:
          "Premier chapitre à Andros, plus grande île des Bahamas mais paradoxalement la moins visitée, dont le sous-sol calcaire est criblé de plus de cent soixante-dix trous bleus, gouffres verticaux formés durant les périodes glaciaires lorsque le niveau de la mer était bien plus bas. Certains de ces trous bleus intérieurs s'enfoncent à plus de deux cents mètres de profondeur et restent reliés par un vaste réseau de grottes noyées encore partiellement inexploré, faisant d'Andros un site de référence mondiale pour la plongée spéléologique.",
        introEn:
          "The first chapter unfolds on Andros, the Bahamas' largest yet paradoxically least-visited island, whose limestone bedrock is riddled with over one hundred and seventy blue holes, vertical sinkholes formed during ice ages when sea level was much lower. Some of these inland blue holes plunge over two hundred metres deep and remain connected by a vast, still partly unexplored network of drowned caves, making Andros a world-reference site for cave diving.",
        introEs:
          "El primer capítulo se desarrolla en Andros, la isla más grande de las Bahamas pero paradójicamente la menos visitada, cuyo subsuelo calizo está salpicado de más de ciento setenta agujeros azules, sumideros verticales formados durante las eras glaciares cuando el nivel del mar era mucho más bajo. Algunos de estos agujeros azules interiores se hunden a más de doscientos metros de profundidad y siguen conectados por una vasta red de cuevas inundadas todavía parcialmente inexplorada, lo que convierte a Andros en un lugar de referencia mundial para el buceo espeleológico.",
        galleryImages: `${R2}/journeys/bahamas-andros-gallery1.jpg,${R2}/journeys/bahamas-andros-gallery2.jpg,${R2}/journeys/bahamas-andros-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Plongée dans un trou bleu intérieur",
            titleEn: "Diving an inland blue hole",
            titleEs: "Buceo en un agujero azul interior",
            description:
              "Plongée encadrée dans l'un des trous bleus intérieurs d'Andros, où une couche d'eau douce flotte au-dessus d'une eau salée plus dense, créant un effet de mirage optique surnommé « halocline » par les plongeurs.",
            descriptionEn:
              "A guided dive in one of Andros's inland blue holes, where a layer of fresh water floats above denser salt water, creating an optical mirage effect divers call a \"halocline.\"",
            descriptionEs:
              "Inmersión guiada en uno de los agujeros azules interiores de Andros, donde una capa de agua dulce flota sobre agua salada más densa, creando un efecto de espejismo óptico que los buceadores llaman «haloclina».",
            image: `${R2}/journeys/bahamas-andros-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le récif corallien de la troisième barrière mondiale",
            titleEn: "The reef of the world's third-largest barrier",
            titleEs: "El arrecife de la tercera barrera mundial",
            description:
              "Sortie en bateau vers la troisième plus grande barrière de corail au monde, qui longe la côte est d'Andros sur plus de cent quatre-vingts kilomètres, snorkeling parmi une vie marine préservée.",
            descriptionEn:
              "A boat trip to the world's third-largest barrier reef, which runs along Andros's east coast for over one hundred and eighty kilometres, snorkelling among preserved marine life.",
            descriptionEs:
              "Salida en barco hacia la tercera barrera de coral más grande del mundo, que bordea la costa este de Andros a lo largo de más de ciento ochenta kilómetros, esnórquel entre una vida marina preservada.",
            image: `${R2}/journeys/bahamas-andros-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Bimini, sur les traces de Hemingway",
        titleEn: "Bimini, in Hemingway's Footsteps",
        titleEs: "Bimini, tras los pasos de Hemingway",
        intro:
          "Vol vers Bimini, îlot le plus proche de la Floride qu'Ernest Hemingway fréquenta assidûment dans les années 1930, y écrivant une partie de son roman « En avoir ou pas » et contribuant à populariser la pêche sportive au gros dans des eaux réputées pour leurs marlins et thons. L'île reste aujourd'hui l'un des rares endroits au monde où des dauphins tachetés sauvages viennent naturellement, et sans dressage, à la rencontre des nageurs sur des bancs de sable peu profonds.",
        introEn:
          "A flight to Bimini, the islet closest to Florida that Ernest Hemingway frequented in the 1930s, writing part of his novel \"To Have and Have Not\" there and helping popularise big-game sport fishing in waters renowned for marlin and tuna. The island remains today one of the rare places in the world where wild spotted dolphins naturally, with no training, come to meet swimmers over shallow sandbanks.",
        introEs:
          "Vuelo hacia Bimini, islote más cercano a Florida que Ernest Hemingway frecuentó asiduamente en la década de 1930, escribiendo allí parte de su novela «Tener y no tener» y contribuyendo a popularizar la pesca deportiva de altura en aguas célebres por sus marlines y atunes. La isla sigue siendo hoy uno de los pocos lugares del mundo donde delfines moteados salvajes acuden de forma natural, sin adiestramiento, al encuentro de los nadadores en bajíos poco profundos.",
        galleryImages: `${R2}/journeys/bahamas-bimini-gallery1.jpg,${R2}/journeys/bahamas-bimini-gallery2.jpg,${R2}/journeys/bahamas-bimini-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Nage avec les dauphins tachetés sauvages",
            titleEn: "Swimming with wild spotted dolphins",
            titleEs: "Nadar con delfines moteados salvajes",
            description:
              "Sortie en bateau vers les bancs de sable peu profonds au large de Bimini, où des dauphins tachetés de l'Atlantique viennent naturellement jouer et interagir avec les nageurs.",
            descriptionEn:
              "A boat trip to the shallow sandbanks off Bimini, where Atlantic spotted dolphins naturally come to play and interact with swimmers.",
            descriptionEs:
              "Salida en barco hacia los bajíos poco profundos frente a Bimini, donde delfines moteados del Atlántico acuden de forma natural a jugar e interactuar con los nadadores.",
            image: `${R2}/journeys/bahamas-bimini-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sur les traces d'Hemingway",
            titleEn: "In Hemingway's footsteps",
            titleEs: "Tras los pasos de Hemingway",
            description:
              "Visite du petit musée consacré à Ernest Hemingway à Bimini, puis sortie de pêche sportive dans les eaux profondes du Gulf Stream où l'écrivain traquait marlins et thons.",
            descriptionEn:
              "A visit to the small museum devoted to Ernest Hemingway in Bimini, then a sport-fishing outing in the deep Gulf Stream waters where the writer once hunted marlin and tuna.",
            descriptionEs:
              "Visita al pequeño museo dedicado a Ernest Hemingway en Bimini, y salida de pesca deportiva en las aguas profundas de la Corriente del Golfo donde el escritor perseguía marlines y atunes.",
            image: `${R2}/journeys/bahamas-bimini-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];
journeyTrips.push(
  {
    destinationSlug: "jamaique",
    tour: {
      name: "Jamaïque : Port Antonio et le Blue Lagoon",
      nameEn: "Jamaica: Port Antonio and the Blue Lagoon",
      nameEs: "Jamaica: Port Antonio y el Blue Lagoon",
      slug: "jamaique-portantonio-bluelagoon",
      image: `${R2}/journeys/jamaique-portantonio-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un lagon d'un bleu profond immortalisé au cinéma, puis une descente en radeau de bambou sur la rivière la plus romantique des Caraïbes",
      taglineEn: "A deep blue lagoon immortalised on film, then a bamboo raft descent on the most romantic river in the Caribbean",
      taglineEs: "Una laguna de un azul profundo inmortalizada en el cine, y después un descenso en balsa de bambú por el río más romántico del Caribe",
      description:
        "Un voyage sur la côte nord-est de la Jamaïque, loin de Montego Bay et des Montagnes Bleues : Port Antonio, ancienne ville bananière restée à l'écart du tourisme de masse, dont le Blue Lagoon, gouffre marin d'un bleu profond alimenté par des sources d'eau douce souterraines, donna son nom au film homonyme de 1980, puis la rivière Rio Grande, descendue en radeau de bambou selon une tradition initiée dans les années 1950 par l'acteur Errol Flynn lui-même.",
      descriptionEn:
        "A journey along Jamaica's north-east coast, far from Montego Bay and the Blue Mountains: Port Antonio, a former banana port town that has stayed off the mass-tourism trail, whose Blue Lagoon, a deep-blue marine sinkhole fed by underground freshwater springs, gave its name to the eponymous 1980 film, then the Rio Grande, descended by bamboo raft following a tradition started in the 1950s by actor Errol Flynn himself.",
      descriptionEs:
        "Un viaje por la costa noreste de Jamaica, lejos de Montego Bay y las Montañas Azules: Port Antonio, antigua ciudad bananera que se ha mantenido al margen del turismo de masas, cuyo Blue Lagoon, sumidero marino de azul profundo alimentado por manantiales subterráneos de agua dulce, dio nombre a la película homónima de 1980, y después el río Rio Grande, descendido en balsa de bambú siguiendo una tradición iniciada en la década de 1950 por el propio actor Errol Flynn.",
      price: 2300,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 6,
      featured: false,
      order: 157,
    },
    chapters: [
      {
        title: "Le Blue Lagoon",
        titleEn: "The Blue Lagoon",
        titleEs: "El Blue Lagoon",
        intro:
          "Premier chapitre au Blue Lagoon, gouffre marin de plus de deux cents mètres de profondeur dont la couleur bleu profond varie au fil de la journée selon le mélange changeant d'eau douce souterraine et d'eau salée de la mer des Caraïbes. Le tournage du film Le Lagon bleu en 1980 popularisa mondialement ce site jusque-là connu des seuls habitants de Port Antonio, sans jamais entamer le calme qui règne encore sur ses rives bordées de mangroves.",
        introEn:
          "The first chapter unfolds at the Blue Lagoon, a marine sinkhole over two hundred metres deep whose deep blue colour shifts throughout the day according to the changing mix of underground fresh water and salty Caribbean sea water. The filming of The Blue Lagoon in 1980 made this site, until then known only to Port Antonio locals, famous worldwide, without ever disturbing the calm that still reigns over its mangrove-lined shores.",
        introEs:
          "El primer capítulo se desarrolla en el Blue Lagoon, sumidero marino de más de doscientos metros de profundidad cuyo color azul profundo varía a lo largo del día según la cambiante mezcla de agua dulce subterránea y agua salada del mar Caribe. El rodaje de la película La laguna azul en 1980 popularizó mundialmente este lugar, hasta entonces conocido solo por los habitantes de Port Antonio, sin alterar jamás la calma que todavía reina en sus orillas bordeadas de manglares.",
        galleryImages: `${R2}/journeys/jamaique-bluelagoon-gallery1.jpg,${R2}/journeys/jamaique-bluelagoon-gallery2.jpg,${R2}/journeys/jamaique-bluelagoon-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Baignade et bateau à fond de verre",
            titleEn: "Swimming and a glass-bottom boat",
            titleEs: "Baño y barco de fondo de cristal",
            description:
              "Baignade dans les eaux du Blue Lagoon, puis sortie en bateau à fond de verre pour observer les sources d'eau douce qui remontent du fond du gouffre marin.",
            descriptionEn:
              "A swim in the waters of the Blue Lagoon, then a glass-bottom boat trip to observe the freshwater springs rising from the bottom of the marine sinkhole.",
            descriptionEs:
              "Baño en las aguas del Blue Lagoon, y salida en barco de fondo de cristal para observar los manantiales de agua dulce que emergen del fondo del sumidero marino.",
            image: `${R2}/journeys/jamaique-bluelagoon-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La plage de Frenchman's Cove",
            titleEn: "Frenchman's Cove beach",
            titleEs: "La playa de Frenchman's Cove",
            description:
              "Journée à Frenchman's Cove, plage privée où une rivière d'eau douce se jette directement dans la mer des Caraïbes, encadrée par une végétation tropicale luxuriante.",
            descriptionEn:
              "A day at Frenchman's Cove, a private beach where a freshwater river flows directly into the Caribbean Sea, framed by lush tropical vegetation.",
            descriptionEs:
              "Día en Frenchman's Cove, playa privada donde un río de agua dulce desemboca directamente en el mar Caribe, enmarcada por una exuberante vegetación tropical.",
            image: `${R2}/journeys/jamaique-bluelagoon-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La descente en radeau sur la Rio Grande",
        titleEn: "The Bamboo Raft Descent on the Rio Grande",
        titleEs: "El descenso en balsa por el Rio Grande",
        intro:
          "Route vers la rivière Rio Grande, descendue depuis les années 1950 sur des radeaux de bambou de neuf mètres de long, une tradition initiée par l'acteur hollywoodien Errol Flynn, qui s'était installé à Port Antonio et transforma le transport traditionnel des bananes en une activité touristique romantique. Chaque radeau, propulsé à la perche par un capitaine local, glisse pendant près de trois heures à travers une vallée tropicale ponctuée de rapides doux et de villages riverains.",
        introEn:
          "The road to the Rio Grande, descended since the 1950s on nine-metre bamboo rafts, a tradition started by Hollywood actor Errol Flynn, who settled in Port Antonio and turned the traditional transport of bananas into a romantic tourist activity. Each raft, poled by a local captain, glides for nearly three hours through a tropical valley dotted with gentle rapids and riverside villages.",
        introEs:
          "Ruta hacia el río Rio Grande, descendido desde la década de 1950 en balsas de bambú de nueve metros de longitud, tradición iniciada por el actor hollywoodense Errol Flynn, que se instaló en Port Antonio y transformó el transporte tradicional de plátanos en una actividad turística romántica. Cada balsa, impulsada con pértiga por un capitán local, se desliza durante casi tres horas por un valle tropical salpicado de rápidos suaves y pueblos ribereños.",
        galleryImages: `${R2}/journeys/jamaique-riorafting-gallery1.jpg,${R2}/journeys/jamaique-riorafting-gallery2.jpg,${R2}/journeys/jamaique-riorafting-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Trois heures de descente en radeau de bambou",
            titleEn: "A three-hour bamboo raft descent",
            titleEs: "Tres horas de descenso en balsa de bambú",
            description:
              "Descente de la rivière Rio Grande à bord d'un radeau de bambou traditionnel, guidé à la perche par un capitaine local à travers une vallée tropicale préservée.",
            descriptionEn:
              "A descent of the Rio Grande aboard a traditional bamboo raft, poled by a local captain through a preserved tropical valley.",
            descriptionEs:
              "Descenso por el río Rio Grande a bordo de una balsa de bambú tradicional, guiada con pértiga por un capitán local a través de un valle tropical preservado.",
            image: `${R2}/journeys/jamaique-riorafting-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Un village riverain et la cuisine jerk",
            titleEn: "A riverside village and jerk cuisine",
            titleEs: "Un pueblo ribereño y la cocina jerk",
            description:
              "Halte dans un village riverain de la Rio Grande pour un déjeuner de poulet jerk, technique de marinade et de fumage épicé emblématique de la cuisine jamaïcaine.",
            descriptionEn:
              "A stop at a Rio Grande riverside village for a jerk chicken lunch, the spicy marinating and smoking technique emblematic of Jamaican cuisine.",
            descriptionEs:
              "Parada en un pueblo ribereño del Rio Grande para un almuerzo de pollo jerk, técnica de marinado y ahumado picante emblemática de la cocina jamaicana.",
            image: `${R2}/journeys/jamaique-riorafting-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "republique-dominicaine",
    tour: {
      name: "République dominicaine : Jarabacoa et le Pico Duarte",
      nameEn: "Dominican Republic: Jarabacoa and Pico Duarte",
      nameEs: "República Dominicana: Jarabacoa y el Pico Duarte",
      slug: "republique-dominicaine-jarabacoa-picoduarte",
      image: `${R2}/journeys/rd-jarabacoa-picoduarte-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une vallée de rivières et de cascades surnommée la Suisse dominicaine, puis l'ascension du plus haut sommet des Caraïbes",
      taglineEn: "A valley of rivers and waterfalls nicknamed the Dominican Switzerland, then the ascent of the Caribbean's highest peak",
      taglineEs: "Un valle de ríos y cascadas apodado la Suiza dominicana, y después la ascensión a la cumbre más alta del Caribe",
      description:
        "Un voyage dans les montagnes du centre de la République dominicaine, loin de Saint-Domingue et de Punta Cana : Jarabacoa, ville de montagne surnommée la « Suisse dominicaine » pour son climat frais et ses cascades, puis l'ascension du Pico Duarte, qui culmine à plus de trois mille mètres et reste le point culminant de l'ensemble des Caraïbes, une randonnée de deux jours à travers pinèdes et vallées reculées, à des années-lumière des plages de sable blanc qui font la réputation du pays.",
      descriptionEn:
        "A journey through the mountains of central Dominican Republic, far from Santo Domingo and Punta Cana: Jarabacoa, a mountain town nicknamed the \"Dominican Switzerland\" for its cool climate and waterfalls, then the ascent of Pico Duarte, which rises over three thousand metres and remains the highest point in the entire Caribbean, a two-day hike through pine forests and remote valleys, light years from the white-sand beaches that made the country's reputation.",
      descriptionEs:
        "Un viaje por las montañas del centro de la República Dominicana, lejos de Santo Domingo y Punta Cana: Jarabacoa, ciudad de montaña apodada la «Suiza dominicana» por su clima fresco y sus cascadas, y después la ascensión al Pico Duarte, que se eleva más de tres mil metros y sigue siendo el punto más alto de todo el Caribe, una caminata de dos días por pinares y valles remotos, a años luz de las playas de arena blanca que han forjado la reputación del país.",
      price: 2200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 159,
    },
    chapters: [
      {
        title: "Jarabacoa, la Suisse dominicaine",
        titleEn: "Jarabacoa, the Dominican Switzerland",
        titleEs: "Jarabacoa, la Suiza dominicana",
        intro:
          "Premier chapitre à Jarabacoa, ville de montagne nichée à plus de cinq cents mètres d'altitude dans la cordillère centrale, dont le climat nettement plus frais que sur la côte lui a valu le surnom de « Suisse dominicaine ». Trois rivières se rejoignent dans la région, alimentant plusieurs cascades spectaculaires dont celle de Jimenoa, accessible par un pont suspendu, et attirant depuis les années 1990 une communauté d'amateurs de sports d'eau vive venus profiter de rapides parmi les plus réputés des Caraïbes.",
        introEn:
          "The first chapter unfolds in Jarabacoa, a mountain town nestled over five hundred metres up in the central mountain range, whose climate, noticeably cooler than the coast, earned it the nickname \"Dominican Switzerland.\" Three rivers meet in the region, feeding several spectacular waterfalls including Jimenoa Falls, reached by a suspension bridge, and drawing since the 1990s a community of whitewater sports enthusiasts drawn by some of the Caribbean's most renowned rapids.",
        introEs:
          "El primer capítulo se desarrolla en Jarabacoa, ciudad de montaña enclavada a más de quinientos metros de altitud en la cordillera central, cuyo clima notablemente más fresco que en la costa le valió el apodo de «Suiza dominicana». Tres ríos confluyen en la región, alimentando varias cascadas espectaculares, entre ellas la de Jimenoa, accesible por un puente colgante, y atrayendo desde la década de 1990 a una comunidad de aficionados a los deportes de aguas bravas atraídos por algunos de los rápidos más reputados del Caribe.",
        galleryImages: `${R2}/journeys/rd-jarabacoa-gallery1.jpg,${R2}/journeys/rd-jarabacoa-gallery2.jpg,${R2}/journeys/rd-jarabacoa-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Les cascades de Jimenoa",
            titleEn: "The Jimenoa Falls",
            titleEs: "Las cascadas de Jimenoa",
            description:
              "Randonnée jusqu'aux cascades de Jimenoa, traversée d'un pont suspendu au-dessus de la rivière, puis baignade dans le bassin naturel au pied de la chute d'eau.",
            descriptionEn:
              "A hike to the Jimenoa Falls, crossing a suspension bridge over the river, then a swim in the natural pool at the foot of the waterfall.",
            descriptionEs:
              "Caminata hasta las cascadas de Jimenoa, cruce de un puente colgante sobre el río, y baño en la piscina natural al pie de la cascada.",
            image: `${R2}/journeys/rd-jarabacoa-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Rafting sur la rivière Yaque del Norte",
            titleEn: "Rafting on the Yaque del Norte River",
            titleEs: "Rafting en el río Yaque del Norte",
            description:
              "Descente en rafting de la rivière Yaque del Norte, l'un des meilleurs spots d'eau vive des Caraïbes, à travers des rapides encadrés par une vallée montagneuse verdoyante.",
            descriptionEn:
              "A rafting descent of the Yaque del Norte River, one of the Caribbean's best whitewater spots, through rapids framed by a lush mountain valley.",
            descriptionEs:
              "Descenso en rafting por el río Yaque del Norte, uno de los mejores lugares de aguas bravas del Caribe, entre rápidos enmarcados por un valle montañoso verde.",
            image: `${R2}/journeys/rd-jarabacoa-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'ascension du Pico Duarte",
        titleEn: "The Ascent of Pico Duarte",
        titleEs: "La ascensión al Pico Duarte",
        intro:
          "Départ vers le Pico Duarte, qui culmine à plus de trois mille mètres et reste, malgré sa localisation sur une île tropicale, le point culminant de l'ensemble de la mer des Caraïbes, dépassant même les plus hauts sommets de Cuba ou de la Jamaïque. L'ascension, répartie sur deux jours avec une nuit en refuge de montagne, traverse des pinèdes d'altitude où les températures nocturnes peuvent approcher de zéro degré, un contraste saisissant avec la chaleur tropicale des plages dominicaines à quelques heures de route seulement.",
        introEn:
          "A departure for Pico Duarte, which rises over three thousand metres and remains, despite its location on a tropical island, the highest point in the entire Caribbean Sea, even surpassing the highest peaks of Cuba or Jamaica. The ascent, spread over two days with a night at a mountain refuge, crosses high-altitude pine forests where night-time temperatures can approach zero degrees, a striking contrast with the tropical heat of Dominican beaches just a few hours' drive away.",
        introEs:
          "Salida hacia el Pico Duarte, que se eleva más de tres mil metros y sigue siendo, pese a su ubicación en una isla tropical, el punto más alto de todo el mar Caribe, superando incluso a las cumbres más altas de Cuba o Jamaica. La ascensión, repartida en dos días con una noche en un refugio de montaña, atraviesa pinares de altitud donde las temperaturas nocturnas pueden acercarse a cero grados, un contraste llamativo con el calor tropical de las playas dominicanas a solo unas horas en coche.",
        galleryImages: `${R2}/journeys/rd-picoduarte-gallery1.jpg,${R2}/journeys/rd-picoduarte-gallery2.jpg,${R2}/journeys/rd-picoduarte-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Montée à travers les pinèdes d'altitude",
            titleEn: "The climb through high-altitude pine forests",
            titleEs: "Subida por los pinares de altitud",
            description:
              "Première journée de randonnée vers le Pico Duarte, à travers des pinèdes d'altitude et des vallées reculées, jusqu'à un refuge de montagne où passer la nuit avant l'ascension finale.",
            descriptionEn:
              "A first day of hiking toward Pico Duarte, through high-altitude pine forests and remote valleys, to a mountain refuge for the night before the final ascent.",
            descriptionEs:
              "Primer día de caminata hacia el Pico Duarte, por pinares de altitud y valles remotos, hasta un refugio de montaña donde pasar la noche antes de la ascensión final.",
            image: `${R2}/journeys/rd-picoduarte-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le sommet des Caraïbes au lever du soleil",
            titleEn: "The Caribbean's summit at sunrise",
            titleEs: "La cumbre del Caribe al amanecer",
            description:
              "Départ avant l'aube pour atteindre le sommet du Pico Duarte au lever du soleil, panorama exceptionnel sur l'ensemble de la cordillère centrale dominicaine depuis le point culminant des Caraïbes.",
            descriptionEn:
              "A pre-dawn departure to reach the summit of Pico Duarte at sunrise, an exceptional panorama over the entire Dominican central mountain range from the Caribbean's highest point.",
            descriptionEs:
              "Salida antes del amanecer para llegar a la cima del Pico Duarte al amanecer, panorama excepcional sobre toda la cordillera central dominicana desde el punto más alto del Caribe.",
            image: `${R2}/journeys/rd-picoduarte-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

journeyTrips.push(
  {
    destinationSlug: "sainte-lucie",
    tour: {
      name: "Sainte-Lucie : Anse Chastanet et la forêt tropicale",
      nameEn: "Saint Lucia: Anse Chastanet and the Rainforest",
      nameEs: "Santa Lucía: Anse Chastanet y la selva tropical",
      slug: "sainte-lucie-ansechastanet-foret",
      image: `${R2}/journeys/stlucie-ansechastanet-foret-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "L'un des meilleurs spots de snorkeling des Caraïbes au pied des Pitons, puis une tyrolienne suspendue au-dessus de la canopée tropicale",
      taglineEn: "One of the Caribbean's best snorkelling spots at the foot of the Pitons, then a zipline suspended above the tropical canopy",
      taglineEs: "Uno de los mejores lugares de esnórquel del Caribe al pie de los Pitones, y después una tirolina suspendida sobre el dosel tropical",
      description:
        "Un voyage entre mer et forêt à Sainte-Lucie, loin de Soufrière et des Pitons vus depuis la route : la baie d'Anse Chastanet, dont le récif corallien accessible directement depuis la plage compte parmi les meilleurs spots de snorkeling des Caraïbes, puis la forêt tropicale de l'intérieur de l'île, explorée depuis un réseau de tyroliennes suspendues au-dessus de la canopée qui révèle une biodiversité rarement observée depuis le sol.",
      descriptionEn:
        "A journey between sea and forest in Saint Lucia, far from Soufrière and the Pitons seen from the road: Anse Chastanet Bay, whose coral reef accessible directly from the beach ranks among the Caribbean's best snorkelling spots, then the island's interior rainforest, explored via a network of ziplines suspended above the canopy that reveals biodiversity rarely observed from the ground.",
      descriptionEs:
        "Un viaje entre mar y selva en Santa Lucía, lejos de Soufrière y los Pitones vistos desde la carretera: la bahía de Anse Chastanet, cuyo arrecife de coral accesible directamente desde la playa se cuenta entre los mejores lugares de esnórquel del Caribe, y después la selva tropical del interior de la isla, explorada mediante una red de tirolinas suspendidas sobre el dosel arbóreo que revela una biodiversidad rara vez observada desde el suelo.",
      price: 2500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 6,
      featured: false,
      order: 161,
    },
    chapters: [
      {
        title: "Le récif d'Anse Chastanet",
        titleEn: "The Anse Chastanet Reef",
        titleEs: "El arrecife de Anse Chastanet",
        intro:
          "Premier chapitre à Anse Chastanet, baie volcanique au sable gris-noir nichée au pied des Pitons, dont le récif corallien commence à quelques mètres seulement du rivage, une rareté qui permet d'observer sans bateau une vie marine aussi riche que sur les meilleurs sites de plongée des Caraïbes. La déclivité abrupte du fond marin, héritée du relief volcanique de l'île, crée un mur corallien qui plonge rapidement vers des profondeurs où évoluent tortues et raies.",
        introEn:
          "The first chapter unfolds at Anse Chastanet, a volcanic bay of grey-black sand nestled at the foot of the Pitons, whose coral reef begins just metres from the shore, a rarity allowing marine life as rich as the Caribbean's best dive sites to be observed without a boat. The seabed's steep drop-off, inherited from the island's volcanic terrain, creates a coral wall that plunges quickly to depths where turtles and rays roam.",
        introEs:
          "El primer capítulo se desarrolla en Anse Chastanet, bahía volcánica de arena gris negruzca enclavada al pie de los Pitones, cuyo arrecife de coral comienza a solo unos metros de la orilla, una rareza que permite observar sin barco una vida marina tan rica como en los mejores lugares de buceo del Caribe. El pronunciado desnivel del fondo marino, heredado del relieve volcánico de la isla, crea una pared coralina que se sumerge rápidamente hacia profundidades donde se mueven tortugas y rayas.",
        galleryImages: `${R2}/journeys/stlucie-reef-gallery1.jpg,${R2}/journeys/stlucie-reef-gallery2.jpg,${R2}/journeys/stlucie-reef-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Snorkeling directement depuis la plage",
            titleEn: "Snorkelling directly from the beach",
            titleEs: "Esnórquel directamente desde la playa",
            description:
              "Snorkeling sur le récif d'Anse Chastanet, accessible directement depuis le sable, parmi poissons-perroquets, tortues et coraux mous à quelques mètres seulement du rivage.",
            descriptionEn:
              "Snorkelling on the Anse Chastanet reef, accessible directly from the sand, among parrotfish, turtles, and soft corals just metres from the shore.",
            descriptionEs:
              "Esnórquel en el arrecife de Anse Chastanet, accesible directamente desde la arena, entre peces loro, tortugas y corales blandos a solo unos metros de la orilla.",
            image: `${R2}/journeys/stlucie-reef-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Plongée le long du mur corallien",
            titleEn: "A dive along the coral wall",
            titleEs: "Inmersión a lo largo de la pared coralina",
            description:
              "Plongée encadrée le long du mur corallien d'Anse Chastanet, à la recherche de raies et de tortues dans des eaux réputées parmi les plus riches en biodiversité des Caraïbes.",
            descriptionEn:
              "A guided dive along the Anse Chastanet coral wall, in search of rays and turtles in waters renowned as among the most biodiverse in the Caribbean.",
            descriptionEs:
              "Inmersión guiada a lo largo de la pared coralina de Anse Chastanet, en busca de rayas y tortugas en aguas célebres por ser de las más ricas en biodiversidad del Caribe.",
            image: `${R2}/journeys/stlucie-reef-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La forêt tropicale en tyrolienne",
        titleEn: "The Rainforest by Zipline",
        titleEs: "La selva tropical en tirolina",
        intro:
          "Route vers l'intérieur montagneux de Sainte-Lucie, dont la forêt tropicale humide couvre encore près de trois quarts du territoire et abrite plusieurs espèces endémiques, dont le perroquet de Sainte-Lucie, emblème national de l'île. Un réseau de tyroliennes suspendues entre les arbres géants de la canopée permet de traverser la forêt à hauteur des frondaisons, offrant une perspective rarement accessible aux visiteurs restés au niveau du sol.",
        introEn:
          "The road into Saint Lucia's mountainous interior, whose humid tropical forest still covers nearly three-quarters of the territory and shelters several endemic species, including the Saint Lucia parrot, the island's national emblem. A network of ziplines suspended between the canopy's giant trees allows visitors to cross the forest at treetop height, offering a perspective rarely accessible to those who stay at ground level.",
        introEs:
          "Ruta hacia el interior montañoso de Santa Lucía, cuya selva tropical húmeda todavía cubre casi tres cuartas partes del territorio y alberga varias especies endémicas, entre ellas el loro de Santa Lucía, emblema nacional de la isla. Una red de tirolinas suspendidas entre los árboles gigantes del dosel arbóreo permite atravesar el bosque a la altura de las copas, ofreciendo una perspectiva rara vez accesible a quienes permanecen a nivel del suelo.",
        galleryImages: `${R2}/journeys/stlucie-foret-gallery1.jpg,${R2}/journeys/stlucie-foret-gallery2.jpg,${R2}/journeys/stlucie-foret-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 35,
        days: [
          {
            dayNumber: 1,
            title: "Tyrolienne à travers la canopée",
            titleEn: "A zipline through the canopy",
            titleEs: "Tirolina a través del dosel arbóreo",
            description:
              "Traversée de la forêt tropicale sur un réseau de tyroliennes suspendues entre les arbres géants, avec une chance d'apercevoir le perroquet endémique de Sainte-Lucie.",
            descriptionEn:
              "A crossing of the rainforest on a network of ziplines suspended between giant trees, with a chance to spot the endemic Saint Lucia parrot.",
            descriptionEs:
              "Travesía de la selva tropical en una red de tirolinas suspendidas entre árboles gigantes, con posibilidad de avistar el loro endémico de Santa Lucía.",
            image: `${R2}/journeys/stlucie-foret-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée jusqu'aux sources sulfureuses",
            titleEn: "A hike to the sulphur springs",
            titleEs: "Caminata hasta las fuentes sulfurosas",
            description:
              "Randonnée dans la forêt tropicale jusqu'aux sources sulfureuses de Sainte-Lucie, alimentées par l'activité volcanique résiduelle du massif des Pitons, avant un bain dans les eaux chaudes minérales.",
            descriptionEn:
              "A hike through the rainforest to Saint Lucia's sulphur springs, fed by the residual volcanic activity of the Pitons massif, before a soak in the warm mineral waters.",
            descriptionEs:
              "Caminata por la selva tropical hasta las fuentes sulfurosas de Santa Lucía, alimentadas por la actividad volcánica residual del macizo de los Pitones, antes de un baño en las aguas minerales calientes.",
            image: `${R2}/journeys/stlucie-foret-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "barbade",
    tour: {
      name: "Barbade : la côte est sauvage et Oistins",
      nameEn: "Barbados: The Wild East Coast and Oistins",
      nameEs: "Barbados: la costa este salvaje y Oistins",
      slug: "barbade-est-oistins",
      image: `${R2}/journeys/barbade-est-oistins-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une côte atlantique sauvage battue par les vagues, puis le rendez-vous hebdomadaire des pêcheurs et de la friture de poisson volant",
      taglineEn: "A wild Atlantic coast battered by waves, then the weekly gathering point for fishermen and fried flying fish",
      taglineEs: "Una costa atlántica salvaje azotada por las olas, y después el punto de encuentro semanal de los pescadores y el pescado volador frito",
      description:
        "Un voyage entre deux visages de la Barbade, loin de la côte ouest caribéenne : la côte est atlantique, sauvage et battue par les vents alizés, où les vagues venues d'Afrique offrent des conditions de surf réputées dans toutes les Caraïbes, puis Oistins, village de pêcheurs du sud de l'île où se tient chaque vendredi soir depuis des générations un grand rassemblement populaire autour de la friture de poisson volant, plat national barbadien.",
      descriptionEn:
        "A journey between two faces of Barbados, far from the Caribbean west coast: the wild Atlantic east coast, battered by trade winds, where waves arriving from Africa offer surfing conditions renowned throughout the Caribbean, then Oistins, a fishing village in the island's south where a great community gathering has been held every Friday night for generations around fried flying fish, Barbados's national dish.",
      descriptionEs:
        "Un viaje entre dos caras de Barbados, lejos de la costa oeste caribeña: la costa este atlántica, salvaje y azotada por los vientos alisios, donde las olas llegadas de África ofrecen condiciones de surf célebres en todo el Caribe, y después Oistins, pueblo de pescadores del sur de la isla donde se celebra cada viernes por la noche desde hace generaciones una gran reunión popular en torno al pescado volador frito, plato nacional de Barbados.",
      price: 1800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 163,
    },
    chapters: [
      {
        title: "La côte est sauvage",
        titleEn: "The Wild East Coast",
        titleEs: "La costa este salvaje",
        intro:
          "Premier chapitre sur la côte est de la Barbade, exposée sans protection à l'océan Atlantique et à ses vagues qui ont parcouru des milliers de kilomètres depuis les côtes africaines, un contraste radical avec les eaux calmes de la côte ouest caribéenne prisée des complexes hôteliers. Cette façade sauvage, ponctuée de falaises de corail et de formations rocheuses sculptées par l'érosion, reste largement épargnée par le développement touristique et offre des conditions de surf considérées parmi les meilleures des Petites Antilles.",
        introEn:
          "The first chapter unfolds on the east coast of Barbados, exposed with no protection to the Atlantic Ocean and its waves that have travelled thousands of kilometres from the African coast, a radical contrast with the calm waters of the Caribbean west coast favoured by resort complexes. This wild façade, dotted with coral cliffs and rock formations sculpted by erosion, remains largely spared tourist development and offers surfing conditions considered among the best in the Lesser Antilles.",
        introEs:
          "El primer capítulo se desarrolla en la costa este de Barbados, expuesta sin protección al océano Atlántico y a sus olas, que han recorrido miles de kilómetros desde las costas africanas, un contraste radical con las aguas tranquilas de la costa oeste caribeña favorecida por los complejos hoteleros. Esta fachada salvaje, salpicada de acantilados de coral y formaciones rocosas esculpidas por la erosión, permanece en gran parte a salvo del desarrollo turístico y ofrece condiciones de surf consideradas entre las mejores de las Antillas Menores.",
        galleryImages: `${R2}/journeys/barbade-est-gallery1.jpg,${R2}/journeys/barbade-est-gallery2.jpg,${R2}/journeys/barbade-est-gallery3.jpg`,
        mapMarkerX: 70,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée le long des falaises de corail",
            titleEn: "A hike along the coral cliffs",
            titleEs: "Caminata por los acantilados de coral",
            description:
              "Randonnée le long de la côte est, entre falaises de corail sculptées par l'érosion et vagues atlantiques venues de plusieurs milliers de kilomètres, jusqu'à un point de vue isolé.",
            descriptionEn:
              "A hike along the east coast, between coral cliffs sculpted by erosion and Atlantic waves that have travelled several thousand kilometres, to an isolated viewpoint.",
            descriptionEs:
              "Caminata por la costa este, entre acantilados de coral esculpidos por la erosión y olas atlánticas llegadas de varios miles de kilómetros, hasta un mirador aislado.",
            image: `${R2}/journeys/barbade-est-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Initiation au surf sur la côte atlantique",
            titleEn: "A surf lesson on the Atlantic coast",
            titleEs: "Iniciación al surf en la costa atlántica",
            description:
              "Cours de surf avec un moniteur local sur l'une des plages de la côte est, réputée dans toutes les Caraïbes pour la qualité et la régularité de ses vagues atlantiques.",
            descriptionEn:
              "A surf lesson with a local instructor on one of the east coast beaches, renowned throughout the Caribbean for the quality and consistency of its Atlantic waves.",
            descriptionEs:
              "Clase de surf con un monitor local en una de las playas de la costa este, célebre en todo el Caribe por la calidad y regularidad de sus olas atlánticas.",
            image: `${R2}/journeys/barbade-est-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Oistins et la friture du vendredi soir",
        titleEn: "Oistins and the Friday Night Fry",
        titleEs: "Oistins y la fritura del viernes por la noche",
        intro:
          "Route vers Oistins, village de pêcheurs du sud de la Barbade où se tient depuis des générations, chaque vendredi soir, un grand rassemblement populaire autour d'étals de poisson volant fraîchement pêché et frit sur place. Ce poisson volant, capable de planer plusieurs dizaines de mètres au-dessus de l'eau pour échapper à ses prédateurs, est devenu au fil du temps le symbole culinaire national de l'île, célébré chaque année lors d'un festival dédié.",
        introEn:
          "The road to Oistins, a fishing village in southern Barbados where a great community gathering has been held every Friday night for generations around stalls of freshly caught flying fish fried on the spot. This flying fish, capable of gliding several dozen metres above the water to escape predators, has over time become the island's national culinary symbol, celebrated every year at a dedicated festival.",
        introEs:
          "Ruta hacia Oistins, pueblo de pescadores del sur de Barbados donde se celebra desde hace generaciones, cada viernes por la noche, una gran reunión popular en torno a puestos de pescado volador recién capturado y frito en el lugar. Este pescado volador, capaz de planear varias decenas de metros sobre el agua para escapar de sus depredadores, se ha convertido con el tiempo en el símbolo culinario nacional de la isla, celebrado cada año en un festival dedicado.",
        galleryImages: `${R2}/journeys/barbade-oistins-gallery1.jpg,${R2}/journeys/barbade-oistins-gallery2.jpg,${R2}/journeys/barbade-oistins-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Le marché aux poissons d'Oistins",
            titleEn: "The Oistins fish market",
            titleEs: "El mercado de pescado de Oistins",
            description:
              "Visite du marché aux poissons d'Oistins en journée, où les pêcheurs locaux débarquent leurs prises, avant une initiation à la préparation traditionnelle du poisson volant.",
            descriptionEn:
              "A daytime visit to the Oistins fish market, where local fishermen land their catch, followed by an introduction to the traditional preparation of flying fish.",
            descriptionEs:
              "Visita al mercado de pescado de Oistins durante el día, donde los pescadores locales desembarcan sus capturas, y una iniciación a la preparación tradicional del pescado volador.",
            image: `${R2}/journeys/barbade-oistins-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La friture du vendredi soir",
            titleEn: "The Friday night fry",
            titleEs: "La fritura del viernes por la noche",
            description:
              "Participation au grand rassemblement populaire du vendredi soir à Oistins, entre étals de poisson volant frit, musique live et ambiance festive partagée avec les habitants du village.",
            descriptionEn:
              "Participation in the great Friday night community gathering at Oistins, among stalls of fried flying fish, live music, and a festive atmosphere shared with village residents.",
            descriptionEs:
              "Participación en la gran reunión popular del viernes por la noche en Oistins, entre puestos de pescado volador frito, música en directo y ambiente festivo compartido con los habitantes del pueblo.",
            image: `${R2}/journeys/barbade-oistins-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

journeyTrips.push(
  {
    destinationSlug: "porto-rico",
    tour: {
      name: "Porto Rico : Culebra et Vieques",
      nameEn: "Puerto Rico: Culebra and Vieques",
      nameEs: "Puerto Rico: Culebra y Vieques",
      slug: "porto-rico-culebra-vieques",
      image: `${R2}/journeys/pr-culebra-vieques-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une ancienne zone de tir de la marine américaine devenue l'une des plus belles plages du monde, puis une baie où le plancton s'illumine chaque nuit",
      taglineEn: "A former US Navy bombing range turned into one of the world's finest beaches, then a bay that glows every night with plankton",
      taglineEs: "Una antigua zona de tiro de la marina estadounidense convertida en una de las playas más bellas del mundo, y después una bahía que se ilumina cada noche con plancton",
      description:
        "Un voyage vers les petites îles au large de Porto Rico, loin de San Juan : Culebra, dont la plage de Flamenco, ancien terrain d'entraînement militaire américain reconverti en réserve naturelle en 1975, figure régulièrement parmi les plus belles plages du monde selon la presse internationale, puis Vieques, île voisine dont la baie de Mosquito abrite l'une des concentrations de plancton bioluminescent les plus denses de la planète, un phénomène qui illumine l'eau au moindre mouvement.",
      descriptionEn:
        "A journey to the small islands off Puerto Rico, far from San Juan: Culebra, whose Flamenco Beach, a former American military training ground converted into a nature reserve in 1975, regularly ranks among the world's most beautiful beaches according to the international press, then Vieques, a neighbouring island whose Mosquito Bay shelters one of the densest concentrations of bioluminescent plankton on the planet, a phenomenon that lights up the water at the slightest movement.",
      descriptionEs:
        "Un viaje hacia las pequeñas islas frente a Puerto Rico, lejos de San Juan: Culebra, cuya playa de Flamenco, antiguo campo de entrenamiento militar estadounidense reconvertido en reserva natural en 1975, figura con regularidad entre las playas más bellas del mundo según la prensa internacional, y después Vieques, isla vecina cuya bahía Mosquito alberga una de las concentraciones de plancton bioluminiscente más densas del planeta, un fenómeno que ilumina el agua con el más mínimo movimiento.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 165,
    },
    chapters: [
      {
        title: "Culebra et la plage de Flamenco",
        titleEn: "Culebra and Flamenco Beach",
        titleEs: "Culebra y la playa de Flamenco",
        intro:
          "Premier chapitre à Culebra, petite île qui servit de zone d'entraînement au tir naval américain de 1901 à 1975, une histoire militaire qui a paradoxalement préservé son littoral de tout développement touristique intensif après la fermeture de la base. La plage de Flamenco, aujourd'hui réserve naturelle protégée, conserve encore les carcasses rouillées de chars d'assaut utilisés comme cibles d'entraînement, vestiges insolites au milieu d'un sable blanc immaculé régulièrement classé parmi les plus beaux au monde.",
        introEn:
          "The first chapter unfolds on Culebra, a small island that served as a US Navy gunnery training range from 1901 to 1975, a military history that paradoxically preserved its coastline from any intensive tourist development after the base closed. Flamenco Beach, now a protected nature reserve, still holds the rusting hulks of tanks once used as training targets, unusual relics amid immaculate white sand regularly ranked among the most beautiful in the world.",
        introEs:
          "El primer capítulo se desarrolla en Culebra, pequeña isla que sirvió de zona de entrenamiento de tiro naval estadounidense de 1901 a 1975, una historia militar que paradójicamente preservó su litoral de cualquier desarrollo turístico intensivo tras el cierre de la base. La playa de Flamenco, hoy reserva natural protegida, todavía conserva los oxidados restos de tanques utilizados como blancos de entrenamiento, insólitos vestigios en medio de una arena blanca inmaculada clasificada con regularidad entre las más bellas del mundo.",
        galleryImages: `${R2}/journeys/pr-culebra-gallery1.jpg,${R2}/journeys/pr-culebra-gallery2.jpg,${R2}/journeys/pr-culebra-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "La plage de Flamenco et ses chars rouillés",
            titleEn: "Flamenco Beach and its rusting tanks",
            titleEs: "La playa de Flamenco y sus tanques oxidados",
            description:
              "Journée sur la plage de Flamenco, entre baignade dans des eaux turquoise peu profondes et découverte des carcasses de chars d'assaut abandonnés depuis la fermeture de la base militaire.",
            descriptionEn:
              "A day at Flamenco Beach, between swimming in shallow turquoise waters and discovering the abandoned tank hulks left since the military base closed.",
            descriptionEs:
              "Día en la playa de Flamenco, entre baño en aguas turquesas poco profundas y descubrimiento de los restos de tanques abandonados desde el cierre de la base militar.",
            image: `${R2}/journeys/pr-culebra-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Snorkeling sur les récifs de Culebra",
            titleEn: "Snorkelling on the Culebra reefs",
            titleEs: "Esnórquel en los arrecifes de Culebra",
            description:
              "Sortie en bateau vers les récifs coralliens préservés autour de Culebra, snorkeling parmi tortues de mer et poissons tropicaux dans une réserve marine protégée depuis les années 1970.",
            descriptionEn:
              "A boat trip to the preserved coral reefs around Culebra, snorkelling among sea turtles and tropical fish in a marine reserve protected since the 1970s.",
            descriptionEs:
              "Salida en barco hacia los arrecifes de coral preservados alrededor de Culebra, esnórquel entre tortugas marinas y peces tropicales en una reserva marina protegida desde la década de 1970.",
            image: `${R2}/journeys/pr-culebra-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Vieques et la baie bioluminescente",
        titleEn: "Vieques and the Bioluminescent Bay",
        titleEs: "Vieques y la bahía bioluminiscente",
        intro:
          "Traversée en bateau vers Vieques, où la baie de Mosquito abrite l'une des concentrations de dinoflagellés bioluminescents les plus denses au monde, micro-organismes marins qui émettent une lumière bleutée au moindre mouvement de l'eau. Cette bioluminescence, phénomène naturel rare et fragile menacé par la pollution lumineuse, reste protégée à Vieques par l'absence quasi totale d'éclairage artificiel sur les rives de la baie, héritage paradoxal de son passé de zone militaire fermée au public jusqu'en 2003.",
        introEn:
          "A boat crossing to Vieques, where Mosquito Bay shelters one of the densest concentrations of bioluminescent dinoflagellates in the world, marine micro-organisms that emit a blue glow at the slightest movement of the water. This bioluminescence, a rare and fragile natural phenomenon threatened by light pollution, remains protected in Vieques by the near-total absence of artificial lighting along the bay's shores, a paradoxical legacy of its past as a military zone closed to the public until 2003.",
        introEs:
          "Travesía en barco hacia Vieques, donde la bahía Mosquito alberga una de las concentraciones de dinoflagelados bioluminiscentes más densas del mundo, microorganismos marinos que emiten un brillo azulado con el más mínimo movimiento del agua. Esta bioluminiscencia, fenómeno natural raro y frágil amenazado por la contaminación lumínica, sigue protegida en Vieques por la ausencia casi total de iluminación artificial en las orillas de la bahía, legado paradójico de su pasado como zona militar cerrada al público hasta 2003.",
        galleryImages: `${R2}/journeys/pr-vieques-gallery1.jpg,${R2}/journeys/pr-vieques-gallery2.jpg,${R2}/journeys/pr-vieques-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Les plages sauvages de l'ancienne zone militaire",
            titleEn: "The wild beaches of the former military zone",
            titleEs: "Las playas salvajes de la antigua zona militar",
            description:
              "Excursion vers les plages sauvages de l'ancienne zone militaire de Vieques, fermée au public jusqu'en 2003 et depuis reconvertie en refuge naturel, aujourd'hui parmi les plus préservées des Caraïbes.",
            descriptionEn:
              "An excursion to the wild beaches of Vieques's former military zone, closed to the public until 2003 and since converted into a nature refuge, now among the most preserved in the Caribbean.",
            descriptionEs:
              "Excursión a las playas salvajes de la antigua zona militar de Vieques, cerrada al público hasta 2003 y reconvertida desde entonces en refugio natural, hoy una de las más preservadas del Caribe.",
            image: `${R2}/journeys/pr-vieques-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Kayak nocturne dans la baie bioluminescente",
            titleEn: "A night kayak in the bioluminescent bay",
            titleEs: "Kayak nocturno en la bahía bioluminiscente",
            description:
              "Sortie en kayak nocturne sur la baie de Mosquito, où chaque pagaie fait scintiller l'eau d'une lumière bleutée générée par des millions de dinoflagellés bioluminescents.",
            descriptionEn:
              "A night kayak outing on Mosquito Bay, where every paddle stroke makes the water shimmer with a blue light generated by millions of bioluminescent dinoflagellates.",
            descriptionEs:
              "Salida en kayak nocturno por la bahía Mosquito, donde cada palada hace brillar el agua con una luz azulada generada por millones de dinoflagelados bioluminiscentes.",
            image: `${R2}/journeys/pr-vieques-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "antigua-et-barbuda",
    tour: {
      name: "Antigua-et-Barbuda : Betty's Hope et Devil's Bridge",
      nameEn: "Antigua and Barbuda: Betty's Hope and Devil's Bridge",
      nameEs: "Antigua y Barbuda: Betty's Hope y Devil's Bridge",
      slug: "antigua-et-barbuda-bettyshope-devilsbridge",
      image: `${R2}/journeys/antigua-bettyshope-devilsbridge-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Les vestiges de la plus grande plantation sucrière de l'île, puis une arche naturelle sculptée par un océan sans pitié",
      taglineEn: "The remains of the island's largest sugar plantation, then a natural arch carved by an unforgiving ocean",
      taglineEs: "Los vestigios de la mayor plantación azucarera de la isla, y después un arco natural esculpido por un océano implacable",
      description:
        "Un voyage dans l'histoire et la géologie d'Antigua, loin d'English Harbour et de Barbuda : Betty's Hope, ancienne plantation sucrière fondée au XVIIe siècle et longtemps la plus productive de l'île, dont les moulins à vent restaurés témoignent d'une économie coloniale entièrement fondée sur le travail des esclaves, puis Devil's Bridge, arche de calcaire naturelle sculptée par des siècles de vagues atlantiques sur la côte est de l'île, là où l'océan frappe sans la protection d'aucun récif corallien.",
      descriptionEn:
        "A journey into the history and geology of Antigua, far from English Harbour and Barbuda: Betty's Hope, a former sugar plantation founded in the 17th century and long the island's most productive, whose restored windmills bear witness to a colonial economy entirely built on enslaved labour, then Devil's Bridge, a natural limestone arch carved by centuries of Atlantic waves on the island's east coast, where the ocean strikes with no protective coral reef.",
      descriptionEs:
        "Un viaje por la historia y la geología de Antigua, lejos de English Harbour y Barbuda: Betty's Hope, antigua plantación azucarera fundada en el siglo XVII y durante mucho tiempo la más productiva de la isla, cuyos molinos de viento restaurados dan testimonio de una economía colonial enteramente basada en el trabajo esclavo, y después Devil's Bridge, arco natural de piedra caliza esculpido por siglos de olas atlánticas en la costa este de la isla, donde el océano golpea sin la protección de ningún arrecife de coral.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 167,
    },
    chapters: [
      {
        title: "Betty's Hope, la mémoire sucrière",
        titleEn: "Betty's Hope, the Sugar Memory",
        titleEs: "Betty's Hope, la memoria azucarera",
        intro:
          "Premier chapitre à Betty's Hope, plantation fondée en 1650 et devenue au XVIIIe siècle la plus grande et la plus productive des cent soixante plantations sucrières qui couvraient alors la totalité d'Antigua, une économie entièrement bâtie sur le travail forcé de dizaines de milliers d'esclaves déportés d'Afrique de l'Ouest. L'un des deux moulins à vent du site, restauré avec ses mécanismes d'origine, permet de comprendre le processus complet de transformation de la canne à sucre tel qu'il se pratiquait il y a plus de trois siècles.",
        introEn:
          "The first chapter unfolds at Betty's Hope, a plantation founded in 1650 that became, by the 18th century, the largest and most productive of the one hundred and sixty sugar plantations that then covered the whole of Antigua, an economy entirely built on the forced labour of tens of thousands of enslaved people deported from West Africa. One of the site's two windmills, restored with its original machinery, allows visitors to understand the full sugar cane processing chain as it was practised over three centuries ago.",
        introEs:
          "El primer capítulo se desarrolla en Betty's Hope, plantación fundada en 1650 que se convirtió en el siglo XVIII en la más grande y productiva de las ciento sesenta plantaciones azucareras que entonces cubrían toda Antigua, una economía enteramente construida sobre el trabajo forzado de decenas de miles de esclavos deportados de África Occidental. Uno de los dos molinos de viento del lugar, restaurado con su maquinaria original, permite comprender el proceso completo de transformación de la caña de azúcar tal como se practicaba hace más de tres siglos.",
        galleryImages: `${R2}/journeys/antigua-bettyshope-gallery1.jpg,${R2}/journeys/antigua-bettyshope-gallery2.jpg,${R2}/journeys/antigua-bettyshope-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Les moulins à vent et le musée du site",
            titleEn: "The windmills and the site museum",
            titleEs: "Los molinos de viento y el museo del lugar",
            description:
              "Visite guidée des moulins à vent restaurés de Betty's Hope et du petit musée retraçant l'histoire de l'économie sucrière coloniale et de la traite des esclaves à Antigua.",
            descriptionEn:
              "A guided visit to the restored windmills of Betty's Hope and the small museum tracing the history of the colonial sugar economy and the slave trade in Antigua.",
            descriptionEs:
              "Visita guiada a los molinos de viento restaurados de Betty's Hope y al pequeño museo que narra la historia de la economía azucarera colonial y la trata de esclavos en Antigua.",
            image: `${R2}/journeys/antigua-bettyshope-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le village de St John's et son marché",
            titleEn: "St John's village and its market",
            titleEs: "El pueblo de St John's y su mercado",
            description:
              "Promenade dans la capitale St John's, à la découverte de son marché coloré et de sa cathédrale anglicane, avant un déjeuner de spécialités locales à base de fruit à pain.",
            descriptionEn:
              "A stroll through the capital St John's, discovering its colourful market and Anglican cathedral, before a lunch of local breadfruit specialities.",
            descriptionEs:
              "Paseo por la capital St John's, para descubrir su colorido mercado y su catedral anglicana, antes de un almuerzo de especialidades locales a base de fruta del pan.",
            image: `${R2}/journeys/antigua-bettyshope-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Devil's Bridge et la côte atlantique",
        titleEn: "Devil's Bridge and the Atlantic Coast",
        titleEs: "Devil's Bridge y la costa atlántica",
        intro:
          "Route vers la côte est d'Antigua, exposée sans protection récifale à l'océan Atlantique, où des siècles d'érosion ont sculpté Devil's Bridge, arche de calcaire naturelle sous laquelle les vagues s'engouffrent en formant des geysers d'écume qui peuvent jaillir à plusieurs mètres de hauteur. Le nom du site proviendrait de récits d'esclaves qui, selon la légende locale, se seraient jetés depuis cette falaise pour échapper à leur condition, faisant de ce lieu autant un site géologique spectaculaire qu'un lieu de mémoire chargé d'histoire.",
        introEn:
          "The road to Antigua's east coast, exposed with no reef protection to the Atlantic Ocean, where centuries of erosion have carved Devil's Bridge, a natural limestone arch under which waves surge, forming spray geysers that can shoot several metres high. The site's name is said to come from accounts of enslaved people who, according to local legend, threw themselves from this cliff to escape their condition, making the place as much a spectacular geological site as a place of memory laden with history.",
        introEs:
          "Ruta hacia la costa este de Antigua, expuesta sin protección de arrecife al océano Atlántico, donde siglos de erosión han esculpido Devil's Bridge, arco natural de piedra caliza bajo el cual las olas se precipitan formando géiseres de espuma que pueden alcanzar varios metros de altura. El nombre del lugar procedería de relatos de esclavos que, según la leyenda local, se habrían arrojado desde este acantilado para escapar de su condición, lo que convierte este lugar en un sitio geológico tan espectacular como un lugar de memoria cargado de historia.",
        galleryImages: `${R2}/journeys/antigua-devilsbridge-gallery1.jpg,${R2}/journeys/antigua-devilsbridge-gallery2.jpg,${R2}/journeys/antigua-devilsbridge-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 35,
        days: [
          {
            dayNumber: 1,
            title: "L'arche naturelle et les geysers d'écume",
            titleEn: "The natural arch and the spray geysers",
            titleEs: "El arco natural y los géiseres de espuma",
            description:
              "Visite de Devil's Bridge, arche de calcaire naturelle où les vagues atlantiques forment des geysers d'écume spectaculaires, et découverte des formations rocheuses environnantes.",
            descriptionEn:
              "A visit to Devil's Bridge, a natural limestone arch where Atlantic waves form spectacular spray geysers, and a discovery of the surrounding rock formations.",
            descriptionEs:
              "Visita a Devil's Bridge, arco natural de piedra caliza donde las olas atlánticas forman espectaculares géiseres de espuma, y descubrimiento de las formaciones rocosas circundantes.",
            image: `${R2}/journeys/antigua-devilsbridge-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Une plage isolée de la côte est",
            titleEn: "A secluded east coast beach",
            titleEs: "Una playa aislada de la costa este",
            description:
              "Journée sur l'une des plages isolées de la côte est d'Antigua, moins fréquentée que la côte ouest, entre baignade et détente loin de toute autre présence touristique.",
            descriptionEn:
              "A day at one of the secluded beaches on Antigua's east coast, less crowded than the west coast, between swimming and relaxation far from any other tourist presence.",
            descriptionEs:
              "Día en una de las playas aisladas de la costa este de Antigua, menos concurrida que la costa oeste, entre baño y descanso lejos de cualquier otra presencia turística.",
            image: `${R2}/journeys/antigua-devilsbridge-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

journeyTrips.push(
  {
    destinationSlug: "grenade",
    tour: {
      name: "Grenade : le parc de sculptures sous-marines et Carriacou",
      nameEn: "Grenada: The Underwater Sculpture Park and Carriacou",
      nameEs: "Granada: el parque de esculturas submarinas y Carriacou",
      slug: "grenade-sculptures-carriacou",
      image: `${R2}/journeys/grenade-sculptures-carriacou-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le premier parc de sculptures sous-marines au monde, puis une île sœur restée à l'écart de tout développement touristique",
      taglineEn: "The world's first underwater sculpture park, then a sister island that has stayed off all tourist development",
      taglineEs: "El primer parque de esculturas submarinas del mundo, y después una isla hermana que se ha mantenido al margen de todo desarrollo turístico",
      description:
        "Un voyage entre deux facettes méconnues de Grenade, loin de Saint-Georges et de Grand Anse : le parc de sculptures sous-marines de Molinere Bay, premier musée subaquatique au monde créé en 2006 par le sculpteur britannique Jason deCaires Taylor pour offrir un nouveau substrat corallien tout en détournant la pression touristique des récifs naturels, puis Carriacou, île sœur de Grenade restée largement à l'écart du tourisme de masse et connue pour sa tradition séculaire de construction de goélettes en bois.",
      descriptionEn:
        "A journey between two little-known sides of Grenada, far from St George's and Grand Anse: the Molinere Bay underwater sculpture park, the world's first underwater museum created in 2006 by British sculptor Jason deCaires Taylor to offer new coral substrate while diverting tourist pressure from natural reefs, then Carriacou, Grenada's sister island that has stayed largely off the mass-tourism trail and is known for its centuries-old tradition of wooden schooner building.",
      descriptionEs:
        "Un viaje entre dos caras poco conocidas de Granada, lejos de St George's y Grand Anse: el parque de esculturas submarinas de Molinere Bay, primer museo subacuático del mundo creado en 2006 por el escultor británico Jason deCaires Taylor para ofrecer un nuevo sustrato coralino mientras desviaba la presión turística de los arrecifes naturales, y después Carriacou, isla hermana de Granada que se ha mantenido en gran parte al margen del turismo de masas y conocida por su tradición centenaria de construcción de goletas de madera.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 169,
    },
    chapters: [
      {
        title: "Le parc de sculptures sous-marines",
        titleEn: "The Underwater Sculpture Park",
        titleEs: "El parque de esculturas submarinas",
        intro:
          "Premier chapitre au parc de sculptures sous-marines de Molinere Bay, premier musée subaquatique au monde installé en 2006 par le sculpteur britannique Jason deCaires Taylor, qui immergea des dizaines de statues en béton spécialement conçu pour favoriser la colonisation corallienne. Ce projet artistique et écologique, qui compte aujourd'hui plus de soixante-cinq œuvres réparties sur plusieurs sites, poursuivait un double objectif : détourner la pression des plongeurs des récifs naturels fragilisés par l'ouragan Ivan de 2004, tout en offrant un nouveau substrat vivant à la vie marine.",
        introEn:
          "The first chapter unfolds at the Molinere Bay underwater sculpture park, the world's first underwater museum installed in 2006 by British sculptor Jason deCaires Taylor, who submerged dozens of statues made of concrete specially designed to encourage coral colonisation. This artistic and ecological project, now numbering over sixty-five works spread across several sites, pursued a dual aim: diverting diver pressure from natural reefs weakened by Hurricane Ivan in 2004, while offering a new living substrate to marine life.",
        introEs:
          "El primer capítulo se desarrolla en el parque de esculturas submarinas de Molinere Bay, primer museo subacuático del mundo instalado en 2006 por el escultor británico Jason deCaires Taylor, que sumergió decenas de estatuas de hormigón especialmente diseñado para favorecer la colonización coralina. Este proyecto artístico y ecológico, que hoy cuenta con más de sesenta y cinco obras repartidas en varios lugares, perseguía un doble objetivo: desviar la presión de los buceadores de los arrecifes naturales debilitados por el huracán Ivan de 2004, ofreciendo a la vez un nuevo sustrato vivo a la vida marina.",
        galleryImages: `${R2}/journeys/grenade-sculptures-gallery1.jpg,${R2}/journeys/grenade-sculptures-gallery2.jpg,${R2}/journeys/grenade-sculptures-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Snorkeling parmi les statues englouties",
            titleEn: "Snorkelling among the submerged statues",
            titleEs: "Esnórquel entre las estatuas sumergidas",
            description:
              "Snorkeling au-dessus du parc de sculptures sous-marines de Molinere Bay, à la découverte de statues progressivement recouvertes de coraux et d'éponges depuis leur installation en 2006.",
            descriptionEn:
              "Snorkelling above the Molinere Bay underwater sculpture park, discovering statues progressively covered in corals and sponges since their installation in 2006.",
            descriptionEs:
              "Esnórquel sobre el parque de esculturas submarinas de Molinere Bay, para descubrir estatuas progresivamente cubiertas de corales y esponjas desde su instalación en 2006.",
            image: `${R2}/journeys/grenade-sculptures-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Plongée au cœur du musée subaquatique",
            titleEn: "A dive at the heart of the underwater museum",
            titleEs: "Inmersión en el corazón del museo subacuático",
            description:
              "Plongée encadrée au cœur du parc de sculptures, avec un guide spécialisé qui commente l'évolution de la colonisation corallienne sur les œuvres depuis leur installation.",
            descriptionEn:
              "A guided dive at the heart of the sculpture park, with a specialised guide commenting on the coral colonisation's progress on the works since their installation.",
            descriptionEs:
              "Inmersión guiada en el corazón del parque de esculturas, con un guía especializado que comenta la evolución de la colonización coralina sobre las obras desde su instalación.",
            image: `${R2}/journeys/grenade-sculptures-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Carriacou, l'île sœur préservée",
        titleEn: "Carriacou, the Preserved Sister Island",
        titleEs: "Carriacou, la isla hermana preservada",
        intro:
          "Traversée en bateau vers Carriacou, plus grande des îles dépendantes de Grenade mais restée largement épargnée par le tourisme de masse, dont la petite capitale Hillsborough conserve une tradition séculaire de construction navale artisanale héritée des chantiers écossais du XVIIIe siècle. Les goélettes en bois, encore construites à la main sur les plages de l'île selon des méthodes transmises de génération en génération, participent chaque été à une régate traditionnelle qui rassemble toute la communauté locale.",
        introEn:
          "A boat crossing to Carriacou, the largest of Grenada's dependent islands but one that has stayed largely spared mass tourism, whose small capital Hillsborough retains a centuries-old tradition of artisanal shipbuilding inherited from 18th-century Scottish shipyards. Wooden schooners, still built by hand on the island's beaches using methods passed down through generations, take part every summer in a traditional regatta that brings together the whole local community.",
        introEs:
          "Travesía en barco hacia Carriacou, la más grande de las islas dependientes de Granada pero que se ha mantenido en gran parte a salvo del turismo de masas, cuya pequeña capital Hillsborough conserva una tradición centenaria de construcción naval artesanal heredada de los astilleros escoceses del siglo XVIII. Las goletas de madera, todavía construidas a mano en las playas de la isla según métodos transmitidos de generación en generación, participan cada verano en una regata tradicional que reúne a toda la comunidad local.",
        galleryImages: `${R2}/journeys/grenade-carriacou-gallery1.jpg,${R2}/journeys/grenade-carriacou-gallery2.jpg,${R2}/journeys/grenade-carriacou-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Le chantier naval traditionnel de Windward",
            titleEn: "The traditional Windward shipyard",
            titleEs: "El astillero tradicional de Windward",
            description:
              "Visite du chantier naval traditionnel du village de Windward, où des goélettes en bois sont encore construites entièrement à la main selon des méthodes héritées des colons écossais.",
            descriptionEn:
              "A visit to the traditional shipyard of Windward village, where wooden schooners are still built entirely by hand using methods inherited from Scottish settlers.",
            descriptionEs:
              "Visita al astillero tradicional del pueblo de Windward, donde todavía se construyen goletas de madera enteramente a mano según métodos heredados de los colonos escoceses.",
            image: `${R2}/journeys/grenade-carriacou-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les plages désertes de Carriacou",
            titleEn: "The deserted beaches of Carriacou",
            titleEs: "Las playas desiertas de Carriacou",
            description:
              "Journée sur l'une des plages désertes de Carriacou, île restée largement à l'écart du tourisme de masse, entre baignade et déjeuner de poisson grillé dans une paillote familiale.",
            descriptionEn:
              "A day on one of Carriacou's deserted beaches, an island that has stayed largely off the mass-tourism trail, between swimming and a grilled fish lunch at a family beach shack.",
            descriptionEs:
              "Día en una de las playas desiertas de Carriacou, isla que se ha mantenido en gran parte al margen del turismo de masas, entre baño y almuerzo de pescado a la parrilla en una cabaña familiar.",
            image: `${R2}/journeys/grenade-carriacou-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "trinite-et-tobago",
    tour: {
      name: "Trinité-et-Tobago : Pigeon Point et les tortues",
      nameEn: "Trinidad and Tobago: Pigeon Point and the Turtles",
      nameEs: "Trinidad y Tobago: Pigeon Point y las tortugas",
      slug: "trinite-et-tobago-pigeonpoint-tortues",
      image: `${R2}/journeys/trinite-pigeonpoint-tortues-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "L'une des plages les plus photographiées des Caraïbes, puis l'une des plus importantes zones de ponte de tortues luths au monde",
      taglineEn: "One of the most photographed beaches in the Caribbean, then one of the world's most important leatherback turtle nesting grounds",
      taglineEs: "Una de las playas más fotografiadas del Caribe, y después una de las zonas de anidación de tortugas laúd más importantes del mundo",
      description:
        "Un voyage sur l'île de Tobago, loin du carnaval de Port-d'Espagne : Pigeon Point, plage à la jetée de chaume emblématique devenue l'une des images les plus reproduites des Caraïbes, puis la côte nord de Trinité, où la plage de Grande Rivière accueille chaque année entre mars et août l'une des plus importantes concentrations mondiales de tortues luths venues pondre, le plus grand reptile marin vivant pouvant peser plus de cinq cents kilos.",
      descriptionEn:
        "A journey to the island of Tobago, far from the Port of Spain carnival: Pigeon Point, a beach with an emblematic thatched jetty that has become one of the most reproduced images of the Caribbean, then the north coast of Trinidad, where Grande Rivière beach welcomes every year between March and August one of the world's most important concentrations of nesting leatherback turtles, the largest living marine reptile, which can weigh over five hundred kilos.",
      descriptionEs:
        "Un viaje a la isla de Tobago, lejos del carnaval de Puerto España: Pigeon Point, playa con un emblemático muelle de paja que se ha convertido en una de las imágenes más reproducidas del Caribe, y después la costa norte de Trinidad, donde la playa de Grande Rivière acoge cada año entre marzo y agosto una de las concentraciones mundiales más importantes de tortugas laúd que acuden a desovar, el mayor reptil marino vivo, que puede pesar más de quinientos kilos.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mars à août",
      whenLabelEn: "March to August",
      whenLabelEs: "Marzo a agosto",
      bestMonths: "march,april,may,june,july,august",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 171,
    },
    chapters: [
      {
        title: "Pigeon Point, l'image de Tobago",
        titleEn: "Pigeon Point, the Image of Tobago",
        titleEs: "Pigeon Point, la imagen de Tobago",
        intro:
          "Premier chapitre à Pigeon Point, plage de sable blanc bordée d'une eau turquoise peu profonde dont la jetée coiffée d'un toit de chaume, plantée directement dans le lagon, est devenue au fil des décennies l'une des images les plus reproduites de tout l'archipel des Caraïbes. Ce parc de loisirs protégé, l'un des rares de Tobago à faire payer un droit d'entrée, doit sa préservation exceptionnelle à une gestion communautaire qui limite volontairement la construction hôtelière sur son littoral.",
        introEn:
          "The first chapter unfolds at Pigeon Point, a white-sand beach lined with shallow turquoise water whose thatched-roof jetty, planted directly in the lagoon, has become over the decades one of the most reproduced images of the entire Caribbean archipelago. This protected leisure park, one of the few in Tobago charging an entry fee, owes its exceptional preservation to community management that deliberately limits hotel construction along its coastline.",
        introEs:
          "El primer capítulo se desarrolla en Pigeon Point, playa de arena blanca bordeada de agua turquesa poco profunda cuyo muelle de tejado de paja, plantado directamente en la laguna, se ha convertido a lo largo de las décadas en una de las imágenes más reproducidas de todo el archipiélago caribeño. Este parque recreativo protegido, uno de los pocos de Tobago que cobra entrada, debe su excepcional conservación a una gestión comunitaria que limita voluntariamente la construcción hotelera en su litoral.",
        galleryImages: `${R2}/journeys/trinite-pigeonpoint-gallery1.jpg,${R2}/journeys/trinite-pigeonpoint-gallery2.jpg,${R2}/journeys/trinite-pigeonpoint-gallery3.jpg`,
        mapMarkerX: 80,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "La plage et le lagon de Pigeon Point",
            titleEn: "The Pigeon Point beach and lagoon",
            titleEs: "La playa y la laguna de Pigeon Point",
            description:
              "Journée sur la plage de Pigeon Point, baignade dans le lagon turquoise peu profond et photographie de la jetée de chaume emblématique de Tobago.",
            descriptionEn:
              "A day on Pigeon Point beach, swimming in the shallow turquoise lagoon and photographing Tobago's emblematic thatched jetty.",
            descriptionEs:
              "Día en la playa de Pigeon Point, baño en la laguna turquesa poco profunda y fotografías del emblemático muelle de paja de Tobago.",
            image: `${R2}/journeys/trinite-pigeonpoint-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Snorkeling au récif de Buccoo",
            titleEn: "Snorkelling at Buccoo Reef",
            titleEs: "Esnórquel en el arrecife de Buccoo",
            description:
              "Sortie en bateau vers le récif de Buccoo, parc marin protégé au large de Pigeon Point, snorkeling parmi coraux et poissons tropicaux avant un passage par la piscine naturelle de Nylon Pool.",
            descriptionEn:
              "A boat trip to Buccoo Reef, a protected marine park off Pigeon Point, snorkelling among corals and tropical fish before a stop at the natural pool known as Nylon Pool.",
            descriptionEs:
              "Salida en barco hacia el arrecife de Buccoo, parque marino protegido frente a Pigeon Point, esnórquel entre corales y peces tropicales antes de pasar por la piscina natural de Nylon Pool.",
            image: `${R2}/journeys/trinite-pigeonpoint-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Grande Rivière et les tortues luths",
        titleEn: "Grande Rivière and the Leatherback Turtles",
        titleEs: "Grande Rivière y las tortugas laúd",
        intro:
          "Traversée vers la côte nord de Trinité, où le petit village de Grande Rivière accueille chaque année entre mars et août l'une des plus importantes concentrations mondiales de tortues luths venues pondre sur ses plages. Ce plus grand reptile marin vivant, pouvant peser plus de cinq cents kilos et parcourir des milliers de kilomètres depuis ses zones d'alimentation, revient nuit après nuit creuser son nid dans le sable selon un cycle biologique surveillé depuis des décennies par des programmes de conservation communautaires.",
        introEn:
          "A crossing to the north coast of Trinidad, where the small village of Grande Rivière welcomes every year between March and August one of the world's most important concentrations of leatherback turtles coming to nest on its beaches. This largest living marine reptile, which can weigh over five hundred kilos and travel thousands of kilometres from its feeding grounds, returns night after night to dig its nest in the sand, a biological cycle monitored for decades by community conservation programmes.",
        introEs:
          "Travesía hacia la costa norte de Trinidad, donde el pequeño pueblo de Grande Rivière acoge cada año entre marzo y agosto una de las concentraciones mundiales más importantes de tortugas laúd que acuden a desovar en sus playas. Este mayor reptil marino vivo, que puede pesar más de quinientos kilos y recorrer miles de kilómetros desde sus zonas de alimentación, regresa noche tras noche a cavar su nido en la arena según un ciclo biológico vigilado desde hace décadas por programas de conservación comunitarios.",
        galleryImages: `${R2}/journeys/trinite-tortues-gallery1.jpg,${R2}/journeys/trinite-tortues-gallery2.jpg,${R2}/journeys/trinite-tortues-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Observation nocturne de la ponte des tortues luths",
            titleEn: "A night watch of nesting leatherback turtles",
            titleEs: "Observación nocturna de la puesta de las tortugas laúd",
            description:
              "Sortie nocturne encadrée sur la plage de Grande Rivière pour observer une tortue luth creuser son nid et pondre ses œufs, sous la surveillance de guides formés à la conservation de l'espèce.",
            descriptionEn:
              "A guided night outing on Grande Rivière beach to observe a leatherback turtle digging its nest and laying its eggs, supervised by guides trained in species conservation.",
            descriptionEs:
              "Salida nocturna guiada por la playa de Grande Rivière para observar a una tortuga laúd cavar su nido y poner sus huevos, bajo la supervisión de guías formados en la conservación de la especie.",
            image: `${R2}/journeys/trinite-tortues-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La forêt tropicale et la rivière de Grande Rivière",
            titleEn: "The rainforest and the Grande Rivière river",
            titleEs: "La selva tropical y el río de Grande Rivière",
            description:
              "Randonnée dans la forêt tropicale entourant le village de Grande Rivière, à la recherche d'une avifaune abondante, puis baignade dans les eaux douces de la rivière voisine.",
            descriptionEn:
              "A hike through the rainforest surrounding Grande Rivière village, in search of abundant birdlife, then a swim in the fresh waters of the nearby river.",
            descriptionEs:
              "Caminata por la selva tropical que rodea el pueblo de Grande Rivière, en busca de una abundante avifauna, y baño en las aguas dulces del río cercano.",
            image: `${R2}/journeys/trinite-tortues-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

journeyTrips.push(
  {
    destinationSlug: "aruba",
    tour: {
      name: "Aruba : le windsurf et le cunucu",
      nameEn: "Aruba: Windsurfing and the Cunucu",
      nameEs: "Aruba: el windsurf y el cunucu",
      slug: "aruba-windsurf-cunucu",
      image: `${R2}/journeys/aruba-windsurf-cunucu-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des alizés parmi les plus constants des Caraïbes qui ont fait d'Aruba une capitale mondiale du windsurf, puis l'arrière-pays rural aux maisons colorées",
      taglineEn: "Trade winds among the steadiest in the Caribbean that have made Aruba a world windsurfing capital, then the rural interior of colourful houses",
      taglineEs: "Vientos alisios entre los más constantes del Caribe que han convertido a Aruba en una capital mundial del windsurf, y después el interior rural de casas coloridas",
      description:
        "Un voyage entre vent et intérieur des terres à Aruba, loin d'Oranjestad et du parc national d'Arikok : les plages de Fisherman's Huts et de l'aéroport, où des alizés d'une régularité rare dans les Caraïbes ont fait d'Aruba l'une des capitales mondiales du windsurf et du kitesurf depuis les années 1980, puis les cunucu, hameaux ruraux de l'arrière-pays aux maisons traditionnelles peintes de couleurs vives, où se perpétue un mode de vie éloigné des complexes hôteliers de la côte.",
      descriptionEn:
        "A journey between wind and inland Aruba, far from Oranjestad and Arikok National Park: the beaches of Fisherman's Huts and the airport strip, where trade winds of a rare steadiness in the Caribbean have made Aruba one of the world's windsurfing and kitesurfing capitals since the 1980s, then the cunucu, rural hamlets of the interior with traditional houses painted in bright colours, where a way of life far removed from the coastal resort complexes carries on.",
      descriptionEs:
        "Un viaje entre viento e interior en Aruba, lejos de Oranjestad y del parque nacional de Arikok: las playas de Fisherman's Huts y del aeropuerto, donde vientos alisios de una constancia poco común en el Caribe han convertido a Aruba en una de las capitales mundiales del windsurf y el kitesurf desde la década de 1980, y después los cunucu, caseríos rurales del interior de casas tradicionales pintadas de colores vivos, donde perdura un modo de vida alejado de los complejos hoteleros de la costa.",
      price: 2000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Toute l'année",
      whenLabelEn: "Year-round",
      whenLabelEs: "Todo el año",
      bestMonths: "january,february,march,april,may,june,july,august,september,october,november,december",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 173,
    },
    chapters: [
      {
        title: "Fisherman's Huts, le spot de windsurf",
        titleEn: "Fisherman's Huts, the Windsurf Spot",
        titleEs: "Fisherman's Huts, el spot de windsurf",
        intro:
          "Premier chapitre à Fisherman's Huts, plage du nord d'Aruba dont les alizés soufflent avec une régularité et une force remarquables presque toute l'année, une conséquence directe de la position de l'île en dehors de la zone cyclonique des Caraïbes qui garantit des conditions stables rarement égalées dans la région. Cette fiabilité météorologique a fait d'Aruba, dès les années 1980, l'un des spots de windsurf et de kitesurf les plus réputés au monde, accueillant régulièrement des compétitions internationales.",
        introEn:
          "The first chapter unfolds at Fisherman's Huts, a beach in northern Aruba where trade winds blow with remarkable steadiness and strength almost year-round, a direct consequence of the island's position outside the Caribbean cyclone belt, which guarantees stable conditions rarely matched in the region. This meteorological reliability made Aruba, from the 1980s onward, one of the world's most renowned windsurfing and kitesurfing spots, regularly hosting international competitions.",
        introEs:
          "El primer capítulo se desarrolla en Fisherman's Huts, playa del norte de Aruba donde los vientos alisios soplan con notable constancia y fuerza casi todo el año, una consecuencia directa de la posición de la isla fuera de la zona ciclónica del Caribe, que garantiza condiciones estables rara vez igualadas en la región. Esta fiabilidad meteorológica convirtió a Aruba, desde la década de 1980, en uno de los spots de windsurf y kitesurf más reputados del mundo, sede habitual de competiciones internacionales.",
        galleryImages: `${R2}/journeys/aruba-windsurf-gallery1.jpg,${R2}/journeys/aruba-windsurf-gallery2.jpg,${R2}/journeys/aruba-windsurf-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Initiation au windsurf sur les alizés constants",
            titleEn: "A windsurfing lesson in the steady trade winds",
            titleEs: "Iniciación al windsurf con los vientos alisios constantes",
            description:
              "Cours de windsurf avec un moniteur local à Fisherman's Huts, spot réputé pour la régularité de ses alizés, dans des eaux peu profondes idéales pour l'apprentissage.",
            descriptionEn:
              "A windsurfing lesson with a local instructor at Fisherman's Huts, a spot renowned for its steady trade winds, in shallow waters ideal for learning.",
            descriptionEs:
              "Clase de windsurf con un monitor local en Fisherman's Huts, spot célebre por la constancia de sus vientos alisios, en aguas poco profundas ideales para aprender.",
            image: `${R2}/journeys/aruba-windsurf-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Kitesurf face aux dunes de sable",
            titleEn: "Kitesurfing facing the sand dunes",
            titleEs: "Kitesurf frente a las dunas de arena",
            description:
              "Session de kitesurf face aux dunes de sable de la côte nord d'Aruba, encadrée par un moniteur, dans des conditions de vent considérées parmi les plus fiables des Caraïbes.",
            descriptionEn:
              "A kitesurfing session facing the sand dunes of Aruba's north coast, supervised by an instructor, in wind conditions considered among the most reliable in the Caribbean.",
            descriptionEs:
              "Sesión de kitesurf frente a las dunas de arena de la costa norte de Aruba, supervisada por un monitor, en condiciones de viento consideradas entre las más fiables del Caribe.",
            image: `${R2}/journeys/aruba-windsurf-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le cunucu, l'arrière-pays coloré",
        titleEn: "The Cunucu, the Colourful Interior",
        titleEs: "El cunucu, el interior colorido",
        intro:
          "Route vers l'intérieur des terres d'Aruba, où les cunucu, hameaux ruraux traditionnels, conservent des maisons basses aux façades peintes de jaune, de bleu ou de rose vif, un style architectural hérité de l'époque coloniale néerlandaise et adapté au climat aride et venteux de l'île. Ce mode de vie rural, structuré autour de petites exploitations d'aloe vera et de cactus, contraste radicalement avec l'urbanisation dense de la côte touristique et offre un aperçu de l'Aruba authentique loin des complexes hôteliers.",
        introEn:
          "The road into Aruba's interior, where the cunucu, traditional rural hamlets, retain low houses with facades painted yellow, blue, or bright pink, an architectural style inherited from the Dutch colonial era and adapted to the island's arid, windy climate. This rural way of life, structured around small aloe vera and cactus holdings, contrasts radically with the dense urbanisation of the tourist coast and offers a glimpse of authentic Aruba far from the resort complexes.",
        introEs:
          "Ruta hacia el interior de Aruba, donde los cunucu, caseríos rurales tradicionales, conservan casas bajas de fachadas pintadas de amarillo, azul o rosa vivo, estilo arquitectónico heredado de la época colonial neerlandesa y adaptado al clima árido y ventoso de la isla. Este modo de vida rural, estructurado en torno a pequeñas explotaciones de aloe vera y cactus, contrasta radicalmente con la densa urbanización de la costa turística y ofrece una visión de la Aruba auténtica lejos de los complejos hoteleros.",
        galleryImages: `${R2}/journeys/aruba-cunucu-gallery1.jpg,${R2}/journeys/aruba-cunucu-gallery2.jpg,${R2}/journeys/aruba-cunucu-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Un village de cunucu et ses maisons colorées",
            titleEn: "A cunucu village and its colourful houses",
            titleEs: "Un pueblo de cunucu y sus casas coloridas",
            description:
              "Promenade dans un village traditionnel de cunucu, à la découverte des maisons basses aux façades peintes de couleurs vives et de l'artisanat local encore pratiqué par les habitants.",
            descriptionEn:
              "A stroll through a traditional cunucu village, discovering the low houses with brightly painted facades and the local crafts still practised by residents.",
            descriptionEs:
              "Paseo por un pueblo tradicional de cunucu, para descubrir las casas bajas de fachadas pintadas de colores vivos y la artesanía local todavía practicada por los habitantes.",
            image: `${R2}/journeys/aruba-cunucu-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les plantations d'aloe vera et le désert intérieur",
            titleEn: "The aloe vera plantations and the interior desert",
            titleEs: "Las plantaciones de aloe vera y el desierto interior",
            description:
              "Visite d'une plantation d'aloe vera, culture historique de l'intérieur aride d'Aruba depuis le XIXe siècle, puis route à travers le paysage désertique ponctué de cactus géants.",
            descriptionEn:
              "A visit to an aloe vera plantation, a historic crop of Aruba's arid interior since the 19th century, then a drive through the desert landscape dotted with giant cacti.",
            descriptionEs:
              "Visita a una plantación de aloe vera, cultivo histórico del árido interior de Aruba desde el siglo XIX, y ruta por el paisaje desértico salpicado de cactus gigantes.",
            image: `${R2}/journeys/aruba-cunucu-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "dominique",
    tour: {
      name: "Dominique : l'Emerald Pool et Titou Gorge",
      nameEn: "Dominica: Emerald Pool and Titou Gorge",
      nameEs: "Dominica: Emerald Pool y Titou Gorge",
      slug: "dominique-emeraldpool-titougorge",
      image: `${R2}/journeys/dominique-emeraldpool-titougorge-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une piscine naturelle nichée sous une cascade au cœur de la forêt tropicale, puis une gorge volcanique rendue célèbre par le cinéma",
      taglineEn: "A natural pool nestled beneath a waterfall in the heart of the rainforest, then a volcanic gorge made famous by film",
      taglineEs: "Una piscina natural enclavada bajo una cascada en el corazón de la selva tropical, y después una garganta volcánica hecha famosa por el cine",
      description:
        "Un voyage dans l'intérieur volcanique de la Dominique, loin de Roseau et du Boiling Lake : l'Emerald Pool, bassin naturel d'un vert émeraude niché sous une cascade au cœur de la forêt tropicale, l'un des sites les plus accessibles et les plus photographiés de l'île, puis Titou Gorge, canyon volcanique étroit aux parois sombres où l'on progresse en nageant, rendu célèbre par une scène tournée pour la saga Pirates des Caraïbes.",
      descriptionEn:
        "A journey into Dominica's volcanic interior, far from Roseau and the Boiling Lake: the Emerald Pool, an emerald-green natural basin nestled beneath a waterfall at the heart of the rainforest, one of the island's most accessible and most photographed sites, then Titou Gorge, a narrow volcanic canyon with dark walls that visitors swim through, made famous by a scene filmed for the Pirates of the Caribbean saga.",
      descriptionEs:
        "Un viaje al interior volcánico de Dominica, lejos de Roseau y del Boiling Lake: el Emerald Pool, piscina natural de un verde esmeralda enclavada bajo una cascada en el corazón de la selva tropical, uno de los lugares más accesibles y fotografiados de la isla, y después Titou Gorge, estrecho cañón volcánico de paredes oscuras que se recorre nadando, hecho famoso por una escena rodada para la saga Piratas del Caribe.",
      price: 2200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 175,
    },
    chapters: [
      {
        title: "L'Emerald Pool",
        titleEn: "The Emerald Pool",
        titleEs: "El Emerald Pool",
        intro:
          "Premier chapitre à l'Emerald Pool, bassin naturel d'un vert émeraude alimenté par une cascade qui chute de quelques mètres au cœur d'une forêt tropicale dense, l'un des sites naturels les plus accessibles de la Dominique grâce à un sentier court aménagé depuis la route principale. La couleur émeraude de l'eau, qui donne son nom au site, provient de la réflexion de la canopée environnante sur une eau d'une pureté remarquable, alimentée directement par les précipitations abondantes du centre montagneux de l'île.",
        introEn:
          "The first chapter unfolds at the Emerald Pool, an emerald-green natural basin fed by a waterfall dropping a few metres amid dense rainforest, one of Dominica's most accessible natural sites thanks to a short trail leading from the main road. The water's emerald colour, which gives the site its name, comes from the surrounding canopy reflecting on remarkably pure water, fed directly by the abundant rainfall of the island's mountainous centre.",
        introEs:
          "El primer capítulo se desarrolla en el Emerald Pool, piscina natural de un verde esmeralda alimentada por una cascada que cae unos metros en el corazón de una densa selva tropical, uno de los lugares naturales más accesibles de Dominica gracias a un corto sendero habilitado desde la carretera principal. El color esmeralda del agua, que da nombre al lugar, procede del reflejo del dosel arbóreo circundante sobre un agua de notable pureza, alimentada directamente por las abundantes precipitaciones del centro montañoso de la isla.",
        galleryImages: `${R2}/journeys/dominique-emeraldpool-gallery1.jpg,${R2}/journeys/dominique-emeraldpool-gallery2.jpg,${R2}/journeys/dominique-emeraldpool-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Baignade sous la cascade de l'Emerald Pool",
            titleEn: "A swim beneath the Emerald Pool waterfall",
            titleEs: "Baño bajo la cascada del Emerald Pool",
            description:
              "Courte randonnée à travers la forêt tropicale jusqu'à l'Emerald Pool, baignade dans le bassin naturel directement sous la chute d'eau, entourée d'une végétation dense.",
            descriptionEn:
              "A short hike through the rainforest to the Emerald Pool, a swim in the natural basin directly beneath the waterfall, surrounded by dense vegetation.",
            descriptionEs:
              "Corta caminata por la selva tropical hasta el Emerald Pool, baño en la piscina natural directamente bajo la cascada, rodeada de una densa vegetación.",
            image: `${R2}/journeys/dominique-emeraldpool-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La forêt tropicale du parc national Morne Trois Pitons",
            titleEn: "The rainforest of Morne Trois Pitons National Park",
            titleEs: "La selva tropical del parque nacional Morne Trois Pitons",
            description:
              "Randonnée dans le parc national Morne Trois Pitons, classé à l'UNESCO, à travers une forêt tropicale abritant l'une des plus fortes concentrations de sources chaudes et de fumerolles des Caraïbes.",
            descriptionEn:
              "A hike in Morne Trois Pitons National Park, UNESCO-listed, through a rainforest sheltering one of the Caribbean's highest concentrations of hot springs and fumaroles.",
            descriptionEs:
              "Caminata por el parque nacional Morne Trois Pitons, declarado por la UNESCO, a través de una selva tropical que alberga una de las mayores concentraciones de fuentes termales y fumarolas del Caribe.",
            image: `${R2}/journeys/dominique-emeraldpool-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Titou Gorge, le canyon volcanique",
        titleEn: "Titou Gorge, the Volcanic Canyon",
        titleEs: "Titou Gorge, el cañón volcánico",
        intro:
          "Route vers Titou Gorge, canyon volcanique étroit aux parois de roche noire sculptées par des siècles d'érosion, où l'on progresse en nageant dans une eau fraîche entre deux falaises qui se resserrent parfois à moins de deux mètres l'une de l'autre. Ce site spectaculaire, rendu célèbre par une scène tournée pour le second volet de la saga Pirates des Caraïbes en 2006, se termine par une petite cascade que les nageurs les plus aventureux franchissent en plongeant depuis un rebord rocheux.",
        introEn:
          "The road to Titou Gorge, a narrow volcanic canyon with black rock walls sculpted by centuries of erosion, through which visitors swim in cool water between two cliffs that sometimes narrow to less than two metres apart. This spectacular site, made famous by a scene filmed for the second instalment of the Pirates of the Caribbean saga in 2006, ends at a small waterfall that the most adventurous swimmers cross by jumping from a rocky ledge.",
        introEs:
          "Ruta hacia Titou Gorge, estrecho cañón volcánico de paredes de roca negra esculpidas por siglos de erosión, que se recorre nadando en agua fresca entre dos acantilados que a veces se estrechan a menos de dos metros de distancia. Este espectacular lugar, hecho famoso por una escena rodada para la segunda entrega de la saga Piratas del Caribe en 2006, termina en una pequeña cascada que los nadadores más aventureros cruzan saltando desde un saliente rocoso.",
        galleryImages: `${R2}/journeys/dominique-titougorge-gallery1.jpg,${R2}/journeys/dominique-titougorge-gallery2.jpg,${R2}/journeys/dominique-titougorge-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Nage à travers le canyon volcanique",
            titleEn: "A swim through the volcanic canyon",
            titleEs: "Nado a través del cañón volcánico",
            description:
              "Nage encadrée à travers Titou Gorge, entre parois de roche volcanique noire qui se resserrent par endroits, jusqu'à une petite cascade au fond du canyon.",
            descriptionEn:
              "A guided swim through Titou Gorge, between black volcanic rock walls that narrow in places, to a small waterfall at the back of the canyon.",
            descriptionEs:
              "Nado guiado a través de Titou Gorge, entre paredes de roca volcánica negra que se estrechan en algunos tramos, hasta una pequeña cascada al fondo del cañón.",
            image: `${R2}/journeys/dominique-titougorge-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les sources chaudes de Wotten Waven",
            titleEn: "The hot springs of Wotten Waven",
            titleEs: "Las fuentes termales de Wotten Waven",
            description:
              "Détente dans les sources chaudes naturelles du village de Wotten Waven, alimentées par l'activité volcanique résiduelle de l'île, après l'effort de la nage dans Titou Gorge.",
            descriptionEn:
              "Relaxation in the natural hot springs of Wotten Waven village, fed by the island's residual volcanic activity, after the exertion of swimming through Titou Gorge.",
            descriptionEs:
              "Descanso en las fuentes termales naturales del pueblo de Wotten Waven, alimentadas por la actividad volcánica residual de la isla, tras el esfuerzo del nado en Titou Gorge.",
            image: `${R2}/journeys/dominique-titougorge-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "cuba",
    tour: {
      name: "Cuba : Trinidad, la ville coloniale",
      nameEn: "Cuba: Trinidad, the Colonial Town",
      nameEs: "Cuba: Trinidad, la ciudad colonial",
      slug: "cuba-trinidad-coloniale",
      image: `${R2}/tours/cuba-trinidad-coloniale.jpg`,
      images: `${R2}/trips/cuba-trinidad-gallery-1.jpg,${R2}/trips/cuba-trinidad-gallery-2.jpg,${R2}/trips/cuba-trinidad-gallery-3.jpg,${R2}/trips/cuba-trinidad-gallery-4.jpg,${R2}/trips/cuba-trinidad-gallery-5.jpg,${R2}/trips/cuba-trinidad-gallery-6.jpg`,
      tagline: "Une ville figée dans le temps depuis l'effondrement du commerce du sucre au XIXe siècle, classée à l'UNESCO",
      taglineEn: "A town frozen in time since the collapse of the sugar trade in the 19th century, UNESCO-listed",
      taglineEs: "Una ciudad detenida en el tiempo desde el colapso del comercio del azúcar en el siglo XIX, declarada por la UNESCO",
      description:
        "Trinidad, fondée en 1514 et classée à l'UNESCO en 1988, doit sa préservation exceptionnelle à l'effondrement de l'industrie sucrière régionale à la fin du XIXe siècle, qui gela l'expansion urbaine et figea la ville dans son architecture coloniale espagnole. Les rues pavées de galets, les maisons aux façades pastel ornées de grilles en fer forgé et les calèches qui continuent de circuler composent aujourd'hui l'une des villes coloniales les mieux conservées de toutes les Caraïbes.",
      descriptionEn:
        "Trinidad, founded in 1514 and UNESCO-listed in 1988, owes its exceptional preservation to the collapse of the regional sugar industry at the end of the 19th century, which froze urban expansion and preserved the town in its Spanish colonial architecture. Cobblestone streets, pastel-facade houses adorned with wrought-iron grilles, and horse-drawn carriages that still circulate today make up one of the best-preserved colonial towns in the entire Caribbean.",
      descriptionEs:
        "Trinidad, fundada en 1514 y declarada por la UNESCO en 1988, debe su excepcional conservación al colapso de la industria azucarera regional a finales del siglo XIX, que congeló la expansión urbana y detuvo la ciudad en su arquitectura colonial española. Las calles empedradas, las casas de fachadas pastel adornadas con rejas de hierro forjado y los carruajes que todavía circulan componen hoy una de las ciudades coloniales mejor conservadas de todo el Caribe.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Nov à avril",
      whenLabelEn: "Nov to April",
      whenLabelEs: "Nov a abril",
      bestMonths: "november,december,january,february,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 152,
    },
    sections: [
      {
        heading: "Une ville gelée par l'effondrement du sucre",
        headingEn: "A Town Frozen by the Sugar Collapse",
        headingEs: "Una ciudad congelada por el colapso del azúcar",
        body:
          "Trinidad prospéra du XVIIe au XIXe siècle grâce au commerce du sucre produit dans la vallée voisine des Ingenios, où plus de cinquante moulins actionnés par le travail d'esclaves transformaient la canne en une fortune considérable pour les familles de planteurs locales. L'abolition de l'esclavage en 1886 et la concurrence de nouvelles régions sucrières plus mécanisées provoquèrent un déclin économique brutal qui, paradoxalement, préserva la ville de toute reconstruction moderne pendant plus d'un siècle.",
        bodyEn:
          "Trinidad flourished from the 17th to the 19th century thanks to the sugar trade produced in the nearby Valley of the Sugar Mills, where over fifty mills powered by enslaved labour turned cane into considerable fortunes for local planter families. The abolition of slavery in 1886 and competition from newer, more mechanised sugar regions caused a brutal economic decline that, paradoxically, preserved the town from any modern reconstruction for over a century.",
        bodyEs:
          "Trinidad prosperó del siglo XVII al XIX gracias al comercio del azúcar producido en el cercano Valle de los Ingenios, donde más de cincuenta molinos accionados por el trabajo esclavo transformaban la caña en una fortuna considerable para las familias de hacendados locales. La abolición de la esclavitud en 1886 y la competencia de nuevas regiones azucareras más mecanizadas provocaron un brutal declive económico que, paradójicamente, preservó la ciudad de cualquier reconstrucción moderna durante más de un siglo.",
      },
      {
        heading: "La vallée des Ingenios et les moulins à sucre",
        headingEn: "The Valley of the Sugar Mills",
        headingEs: "El valle de los Ingenios",
        body:
          "La vallée des Ingenios, classée à l'UNESCO au même titre que Trinidad, conserve les vestiges de plus de soixante-dix plantations sucrières actives au XIXe siècle, dont la tour Manaca Iznaga, haute de quarante-cinq mètres et construite pour surveiller les esclaves travaillant dans les champs environnants. Cette vallée, aujourd'hui traversée par un train à vapeur d'époque, offre un témoignage rare et complet de l'économie de plantation qui fit autrefois la richesse de Trinidad.",
        bodyEn:
          "The Valley of the Sugar Mills, UNESCO-listed alongside Trinidad, retains the remains of over seventy sugar plantations active in the 19th century, including the Manaca Iznaga tower, forty-five metres tall and built to watch over enslaved people working in the surrounding fields. This valley, today crossed by a period steam train, offers a rare and complete testimony to the plantation economy that once made Trinidad's fortune.",
        bodyEs:
          "El valle de los Ingenios, declarado por la UNESCO junto con Trinidad, conserva los vestigios de más de setenta plantaciones azucareras activas en el siglo XIX, incluida la torre Manaca Iznaga, de cuarenta y cinco metros de altura y construida para vigilar a los esclavos que trabajaban en los campos circundantes. Este valle, hoy recorrido por un tren de vapor de época, ofrece un testimonio raro y completo de la economía de plantación que antaño hizo la riqueza de Trinidad.",
      },
    ],
    hotels: [
      {
        name: "Casa particular rénovée du centre historique",
        nameEn: "A Renovated Casa Particular in the Historic Centre",
        nameEs: "Casa particular renovada del centro histórico",
        description:
          "Une casa particular traditionnelle rénovée au cœur du centre historique classé, cour intérieure ombragée, à distance de marche de la Plaza Mayor et de ses musées.",
        descriptionEn:
          "A traditional casa particular renovated at the heart of the listed historic centre, a shaded inner courtyard, within walking distance of the Plaza Mayor and its museums.",
        descriptionEs:
          "Una casa particular tradicional renovada en el corazón del centro histórico declarado, patio interior sombreado, a poca distancia a pie de la Plaza Mayor y sus museos.",
        image: `${R2}/trips/cuba-trinidad-hotel-1.jpg`,
      },
      {
        name: "Hôtel colonial de la Plaza Mayor",
        nameEn: "A Plaza Mayor Colonial Hotel",
        nameEs: "Hotel colonial de la Plaza Mayor",
        description:
          "Un hôtel installé dans une ancienne demeure coloniale donnant sur la Plaza Mayor, terrasse sur le toit avec vue sur les toits de tuiles de la vieille ville.",
        descriptionEn:
          "A hotel housed in a former colonial residence overlooking the Plaza Mayor, a rooftop terrace with views over the old town's tiled roofs.",
        descriptionEs:
          "Un hotel instalado en una antigua residencia colonial con vistas a la Plaza Mayor, terraza en la azotea con vistas a los tejados de tejas del casco antiguo.",
        image: `${R2}/trips/cuba-trinidad-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "bahamas",
    tour: {
      name: "Bahamas : Harbour Island, la plage rose",
      nameEn: "The Bahamas: Harbour Island, the Pink Beach",
      nameEs: "Bahamas: Harbour Island, la playa rosa",
      slug: "bahamas-harbour-island",
      image: `${R2}/tours/bahamas-harbour-island.jpg`,
      images: `${R2}/trips/bahamas-harbour-gallery-1.jpg,${R2}/trips/bahamas-harbour-gallery-2.jpg,${R2}/trips/bahamas-harbour-gallery-3.jpg,${R2}/trips/bahamas-harbour-gallery-4.jpg,${R2}/trips/bahamas-harbour-gallery-5.jpg,${R2}/trips/bahamas-harbour-gallery-6.jpg`,
      tagline: "Trois kilomètres de sable rosé, teinté par des micro-organismes marins, sur l'une des plus anciennes colonies britanniques des Bahamas",
      taglineEn: "Three kilometres of pink-tinted sand, coloured by marine micro-organisms, on one of the Bahamas' oldest British colonies",
      taglineEs: "Tres kilómetros de arena rosada, teñida por microorganismos marinos, en una de las colonias británicas más antiguas de las Bahamas",
      description:
        "Harbour Island, à quelques minutes de bateau d'Eleuthera, doit sa réputation mondiale à une plage de plus de trois kilomètres dont le sable prend une teinte rosée distinctive, causée par les coquilles broyées d'un minuscule organisme marin appelé foraminifère mêlées au sable corallien blanc. Colonisée dès 1648, avant même Nassau, l'île a conservé une atmosphère de petit village antillais aux maisons de bois colorées, largement épargnée par le développement hôtelier de masse qui a transformé d'autres îles bahaméennes.",
      descriptionEn:
        "Harbour Island, a few minutes by boat from Eleuthera, owes its worldwide reputation to a beach over three kilometres long whose sand takes on a distinctive pink hue, caused by the crushed shells of a tiny marine organism called foraminifera mixed with white coral sand. Settled as early as 1648, even before Nassau, the island has retained the atmosphere of a small West Indian village of colourful wooden houses, largely spared the mass hotel development that has transformed other Bahamian islands.",
      descriptionEs:
        "Harbour Island, a pocos minutos en barco de Eleuthera, debe su fama mundial a una playa de más de tres kilómetros cuya arena adquiere un tono rosado distintivo, causado por las conchas trituradas de un diminuto organismo marino llamado foraminífero mezcladas con arena coralina blanca. Colonizada ya en 1648, incluso antes que Nassau, la isla ha conservado la atmósfera de un pequeño pueblo antillano de casas de madera coloridas, en gran parte a salvo del desarrollo hotelero masivo que ha transformado otras islas bahameñas.",
      price: 3200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 154,
    },
    sections: [
      {
        heading: "Le mystère du sable rose",
        headingEn: "The Mystery of the Pink Sand",
        headingEs: "El misterio de la arena rosa",
        body:
          "La couleur rosée de la plage d'Harbour Island provient des coquilles microscopiques broyées d'un organisme marin unicellulaire appelé foraminifère, dont le squelette teinté de rouge se mélange au sable corallien blanc classique des Bahamas. Cette teinte, plus visible tôt le matin ou juste après une averse lorsque le sable est humide, reste suffisamment rare dans le monde pour avoir valu à cette plage un classement régulier parmi les plus belles de la planète par la presse internationale.",
        bodyEn:
          "The pink colour of Harbour Island's beach comes from the crushed microscopic shells of a single-celled marine organism called foraminifera, whose reddish-tinted skeleton mixes with the classic white coral sand of the Bahamas. This hue, more visible early in the morning or just after a shower when the sand is damp, remains rare enough worldwide to have earned this beach a regular ranking among the most beautiful on the planet from the international press.",
        bodyEs:
          "El color rosado de la playa de Harbour Island procede de las conchas microscópicas trituradas de un organismo marino unicelular llamado foraminífero, cuyo esqueleto teñido de rojo se mezcla con la clásica arena coralina blanca de las Bahamas. Este tono, más visible temprano por la mañana o justo después de un chubasco cuando la arena está húmeda, sigue siendo lo bastante raro en el mundo como para haber valido a esta playa una clasificación regular entre las más bellas del planeta por parte de la prensa internacional.",
      },
      {
        heading: "Une colonie plus ancienne que Nassau",
        headingEn: "A Colony Older Than Nassau",
        headingEs: "Una colonia más antigua que Nassau",
        body:
          "Harbour Island fut colonisée dès 1648 par des puritains anglais en quête de liberté religieuse, faisant d'elle l'une des toutes premières colonies européennes de l'archipel des Bahamas, antérieure de plusieurs décennies à la fondation de Nassau. Son unique village, Dunmore Town, conserve un plan urbain hérité de cette époque et des maisons en bois aux couleurs pastel typiques de l'architecture antillaise britannique, parcourues par des voiturettes de golf plutôt que par des voitures, seul moyen de transport motorisé autorisé sur l'île.",
        bodyEn:
          "Harbour Island was settled as early as 1648 by English Puritans seeking religious freedom, making it one of the very first European colonies in the Bahamian archipelago, predating the founding of Nassau by several decades. Its only village, Dunmore Town, retains an urban layout inherited from that era and pastel-coloured wooden houses typical of British West Indian architecture, travelled by golf carts rather than cars, the only motorised transport allowed on the island.",
        bodyEs:
          "Harbour Island fue colonizada ya en 1648 por puritanos ingleses en busca de libertad religiosa, lo que la convierte en una de las primerísimas colonias europeas del archipiélago bahameño, anterior en varias décadas a la fundación de Nassau. Su único pueblo, Dunmore Town, conserva un trazado urbano heredado de esa época y casas de madera de colores pastel típicas de la arquitectura antillana británica, recorridas por carritos de golf en lugar de coches, único medio de transporte motorizado permitido en la isla.",
      },
    ],
    hotels: [
      {
        name: "Cottage rose en bord de plage",
        nameEn: "A Pink Beachfront Cottage",
        nameEs: "Cabaña rosa junto a la playa",
        description:
          "Un cottage traditionnel en bois directement sur la plage rose, terrasse privée face à l'océan, à distance de marche du village de Dunmore Town.",
        descriptionEn:
          "A traditional wooden cottage directly on the pink beach, a private terrace facing the ocean, within walking distance of Dunmore Town.",
        descriptionEs:
          "Una cabaña tradicional de madera directamente en la playa rosa, terraza privada frente al océano, a poca distancia a pie del pueblo de Dunmore Town.",
        image: `${R2}/trips/bahamas-harbour-hotel-1.jpg`,
      },
      {
        name: "Boutique-hôtel de Dunmore Town",
        nameEn: "A Dunmore Town Boutique Hotel",
        nameEs: "Hotel boutique de Dunmore Town",
        description:
          "Un boutique-hôtel installé dans une ancienne demeure coloniale du village de Dunmore Town, jardin tropical intérieur, déplacements en voiturette de golf incluse.",
        descriptionEn:
          "A boutique hotel housed in a former colonial residence in Dunmore Town, an indoor tropical garden, golf cart transport included.",
        descriptionEs:
          "Un hotel boutique instalado en una antigua residencia colonial del pueblo de Dunmore Town, jardín tropical interior, desplazamientos en carrito de golf incluidos.",
        image: `${R2}/trips/bahamas-harbour-hotel-2.jpg`,
      },
    ],
  },
];

standardTrips.push(
  {
    destinationSlug: "jamaique",
    tour: {
      name: "Jamaïque : Negril",
      nameEn: "Jamaica: Negril",
      nameEs: "Jamaica: Negril",
      slug: "jamaique-negril",
      image: `${R2}/tours/jamaique-negril.jpg`,
      images: `${R2}/trips/jamaique-negril-gallery-1.jpg,${R2}/trips/jamaique-negril-gallery-2.jpg,${R2}/trips/jamaique-negril-gallery-3.jpg,${R2}/trips/jamaique-negril-gallery-4.jpg,${R2}/trips/jamaique-negril-gallery-5.jpg,${R2}/trips/jamaique-negril-gallery-6.jpg`,
      tagline: "Sept kilomètres de plage ininterrompue à l'ouest de la Jamaïque, et des falaises où sauter dans une mer turquoise au coucher du soleil",
      taglineEn: "Seven kilometres of uninterrupted beach on Jamaica's west coast, and cliffs to leap from into a turquoise sea at sunset",
      taglineEs: "Siete kilómetros de playa ininterrumpida en el oeste de Jamaica, y acantilados desde donde saltar a un mar turquesa al atardecer",
      description:
        "Negril, à la pointe ouest de la Jamaïque, s'est développée à partir des années 1960 autour de deux atouts géographiques uniques sur l'île : Seven Mile Beach, sept kilomètres de sable blanc ininterrompu parmi les plus longs des Caraïbes, et les falaises de calcaire du sud, d'où les visiteurs sautent depuis des plateformes naturelles dans une mer turquoise au moment précis du coucher de soleil, rituel devenu emblématique de l'atmosphère décontractée de la ville.",
      descriptionEn:
        "Negril, on Jamaica's western tip, developed from the 1960s onward around two geographic assets unique on the island: Seven Mile Beach, seven kilometres of uninterrupted white sand among the longest in the Caribbean, and the limestone cliffs to the south, from which visitors leap off natural platforms into a turquoise sea at the exact moment of sunset, a ritual that has become emblematic of the town's laid-back atmosphere.",
      descriptionEs:
        "Negril, en la punta oeste de Jamaica, se desarrolló a partir de la década de 1960 en torno a dos atractivos geográficos únicos en la isla: Seven Mile Beach, siete kilómetros de arena blanca ininterrumpida entre las más largas del Caribe, y los acantilados calizos del sur, desde donde los visitantes saltan desde plataformas naturales a un mar turquesa en el momento exacto del atardecer, ritual que se ha convertido en emblema del ambiente relajado de la ciudad.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "freedom",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 6,
      featured: false,
      order: 156,
    },
    sections: [
      {
        heading: "Seven Mile Beach",
        headingEn: "Seven Mile Beach",
        headingEs: "Seven Mile Beach",
        body:
          "Seven Mile Beach, qui s'étire en réalité sur environ dix kilomètres malgré son nom, doit sa formation à un vaste récif corallien qui protège la côte des vagues et permet au sable corallien fin de s'accumuler sans interruption sur toute sa longueur. Cette plage, la plus longue de Jamaïque, reste bordée sur toute sa façade de complexes hôteliers et de bars de plage qui ont fait de Negril, dès les années 1970, la destination balnéaire la plus prisée de l'île par les voyageurs internationaux.",
        bodyEn:
          "Seven Mile Beach, which actually stretches for about ten kilometres despite its name, owes its formation to a vast coral reef that protects the coast from waves and allows fine coral sand to accumulate uninterrupted along its entire length. This beach, Jamaica's longest, remains lined along its whole length with resort complexes and beach bars that made Negril, from the 1970s onward, the island's most popular beach destination for international travellers.",
        bodyEs:
          "Seven Mile Beach, que en realidad se extiende unos diez kilómetros pese a su nombre, debe su formación a un vasto arrecife de coral que protege la costa de las olas y permite que la fina arena coralina se acumule sin interrupción a lo largo de toda su longitud. Esta playa, la más larga de Jamaica, sigue bordeada en toda su fachada de complejos hoteleros y bares de playa que convirtieron a Negril, desde la década de 1970, en el destino de playa más popular de la isla entre los viajeros internacionales.",
      },
      {
        heading: "Les falaises et le rituel du coucher de soleil",
        headingEn: "The Cliffs and the Sunset Ritual",
        headingEs: "Los acantilados y el ritual del atardecer",
        body:
          "Les falaises calcaires du sud de Negril, hautes de plusieurs mètres et plongeant directement dans une eau translucide, ont donné naissance à un rituel local devenu emblématique : sauter depuis des plateformes naturelles ou aménagées au moment précis où le soleil disparaît à l'horizon, un geste célébré chaque soir par des dizaines de visiteurs rassemblés dans les bars perchés en surplomb de la mer. La pointe ouest de la Jamaïque, dépourvue de relief à l'ouest jusqu'à l'horizon, offre par ailleurs l'un des meilleurs points d'observation du coucher de soleil de toutes les Caraïbes.",
        bodyEn:
          "Negril's southern limestone cliffs, several metres high and plunging straight into translucent water, gave rise to a local ritual that has become emblematic: leaping from natural or purpose-built platforms at the exact moment the sun disappears over the horizon, a gesture celebrated every evening by dozens of visitors gathered at bars perched overlooking the sea. Jamaica's western tip, with no landmass to the west all the way to the horizon, also offers one of the best sunset-watching spots in the entire Caribbean.",
        bodyEs:
          "Los acantilados calizos del sur de Negril, de varios metros de altura y que se sumergen directamente en agua translúcida, dieron origen a un ritual local que se ha convertido en emblemático: saltar desde plataformas naturales o habilitadas en el momento exacto en que el sol desaparece en el horizonte, un gesto celebrado cada tarde por decenas de visitantes reunidos en bares encaramados sobre el mar. La punta oeste de Jamaica, sin relieve hacia el oeste hasta el horizonte, ofrece además uno de los mejores puntos de observación del atardecer de todo el Caribe.",
      },
    ],
    hotels: [
      {
        name: "Resort sur Seven Mile Beach",
        nameEn: "A Seven Mile Beach Resort",
        nameEs: "Resort en Seven Mile Beach",
        description:
          "Un resort directement sur Seven Mile Beach, chambres avec vue sur l'océan, accès direct au sable blanc et aux bars de plage animés le soir.",
        descriptionEn:
          "A resort directly on Seven Mile Beach, rooms overlooking the ocean, direct access to the white sand and the beach bars lively in the evening.",
        descriptionEs:
          "Un resort directamente en Seven Mile Beach, habitaciones con vistas al océano, acceso directo a la arena blanca y a los bares de playa animados por la noche.",
        image: `${R2}/trips/jamaique-negril-hotel-1.jpg`,
      },
      {
        name: "Boutique-hôtel des falaises du sud",
        nameEn: "A South Cliffs Boutique Hotel",
        nameEs: "Hotel boutique de los acantilados del sur",
        description:
          "Un boutique-hôtel perché sur les falaises calcaires du sud de Negril, plateforme privée pour sauter dans la mer, vue imprenable sur le coucher de soleil.",
        descriptionEn:
          "A boutique hotel perched on Negril's southern limestone cliffs, a private platform for leaping into the sea, unobstructed sunset views.",
        descriptionEs:
          "Un hotel boutique encaramado en los acantilados calizos del sur de Negril, plataforma privada para saltar al mar, vistas privilegiadas al atardecer.",
        image: `${R2}/trips/jamaique-negril-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "republique-dominicaine",
    tour: {
      name: "République dominicaine : Samaná",
      nameEn: "Dominican Republic: Samaná",
      nameEs: "República Dominicana: Samaná",
      slug: "republique-dominicaine-samana",
      image: `${R2}/tours/republique-dominicaine-samana.jpg`,
      images: `${R2}/trips/rd-samana-gallery-1.jpg,${R2}/trips/rd-samana-gallery-2.jpg,${R2}/trips/rd-samana-gallery-3.jpg,${R2}/trips/rd-samana-gallery-4.jpg,${R2}/trips/rd-samana-gallery-5.jpg,${R2}/trips/rd-samana-gallery-6.jpg`,
      tagline: "Plus de vingt mille baleines à bosse viennent s'y reproduire chaque hiver, dans l'une des plus importantes zones d'observation au monde",
      taglineEn: "Over twenty thousand humpback whales come here to breed every winter, in one of the world's most important observation zones",
      taglineEs: "Más de veinte mil ballenas jorobadas acuden aquí a reproducirse cada invierno, en una de las zonas de observación más importantes del mundo",
      description:
        "La baie de Samaná, dans le nord-est de la République dominicaine, accueille chaque année entre janvier et mars plus de vingt mille baleines à bosse venues des eaux froides de l'Atlantique Nord pour s'y reproduire et mettre bas, faisant de la région l'une des principales zones d'observation de cette espèce dans tout l'hémisphère occidental. La péninsule voisine, encore largement couverte de forêt tropicale, abrite également la cascade d'El Limon, accessible uniquement à cheval ou à pied à travers une végétation luxuriante.",
      descriptionEn:
        "Samaná Bay, in the north-east of the Dominican Republic, welcomes over twenty thousand humpback whales every year between January and March, arriving from the cold waters of the North Atlantic to breed and calve, making the region one of the main observation zones for this species in the entire western hemisphere. The neighbouring peninsula, still largely covered in rainforest, is also home to El Limon waterfall, accessible only on horseback or on foot through lush vegetation.",
      descriptionEs:
        "La bahía de Samaná, en el noreste de la República Dominicana, acoge cada año entre enero y marzo a más de veinte mil ballenas jorobadas llegadas de las frías aguas del Atlántico Norte para reproducirse y parir, lo que convierte a la región en una de las principales zonas de observación de esta especie en todo el hemisferio occidental. La península vecina, todavía en gran parte cubierta de selva tropical, alberga además la cascada de El Limón, accesible solo a caballo o a pie a través de una vegetación exuberante.",
      price: 2000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Jan à mars",
      whenLabelEn: "Jan to March",
      whenLabelEs: "Ene a marzo",
      bestMonths: "january,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 158,
    },
    sections: [
      {
        heading: "Le sanctuaire des baleines à bosse",
        headingEn: "The Humpback Whale Sanctuary",
        headingEs: "El santuario de las ballenas jorobadas",
        body:
          "La baie de Samaná, classée sanctuaire marin national dès 1986, accueille chaque hiver plus de vingt mille baleines à bosse qui parcourent près de six mille kilomètres depuis les eaux froides du Groenland et de l'Islande pour venir s'y reproduire dans des eaux plus chaudes et peu profondes. Les mâles y déploient des chants complexes pouvant durer plus de vingt minutes, tandis que les femelles donnent naissance à des baleineaux qui resteront dans la baie plusieurs semaines avant d'entamer le long voyage de retour vers le nord.",
        bodyEn:
          "Samaná Bay, designated a national marine sanctuary as early as 1986, welcomes over twenty thousand humpback whales every winter, which travel nearly six thousand kilometres from the cold waters of Greenland and Iceland to breed in warmer, shallower waters. Males perform complex songs that can last over twenty minutes, while females give birth to calves that will stay in the bay for several weeks before starting the long journey back north.",
        bodyEs:
          "La bahía de Samaná, declarada santuario marino nacional ya en 1986, acoge cada invierno a más de veinte mil ballenas jorobadas que recorren casi seis mil kilómetros desde las frías aguas de Groenlandia e Islandia para reproducirse en aguas más cálidas y poco profundas. Los machos despliegan cantos complejos que pueden durar más de veinte minutos, mientras que las hembras dan a luz a ballenatos que permanecerán en la bahía varias semanas antes de emprender el largo viaje de regreso hacia el norte.",
      },
      {
        heading: "La cascade d'El Limon",
        headingEn: "El Limon Waterfall",
        headingEs: "La cascada de El Limón",
        body:
          "La cascade d'El Limon, qui chute de plus de quarante mètres au cœur de la péninsule de Samaná, reste accessible uniquement à cheval ou à pied à travers une forêt tropicale dense, un trajet d'environ une heure qui traverse plantations de cacao et petites exploitations agricoles familiales. Le bassin naturel au pied de la chute, suffisamment profond pour la baignade, offre une récompense rafraîchissante après une randonnée qui demeure l'une des excursions les plus prisées de la région.",
        bodyEn:
          "El Limon waterfall, which falls over forty metres in the heart of the Samaná peninsula, remains accessible only on horseback or on foot through dense rainforest, a roughly one-hour journey crossing cacao plantations and small family farms. The natural pool at the foot of the falls, deep enough for swimming, offers a refreshing reward after a hike that remains one of the region's most popular excursions.",
        bodyEs:
          "La cascada de El Limón, que cae más de cuarenta metros en el corazón de la península de Samaná, sigue siendo accesible solo a caballo o a pie a través de una densa selva tropical, un trayecto de aproximadamente una hora que atraviesa plantaciones de cacao y pequeñas explotaciones familiares. La piscina natural al pie de la cascada, lo bastante profunda para el baño, ofrece una recompensa refrescante tras una caminata que sigue siendo una de las excursiones más populares de la región.",
      },
    ],
    hotels: [
      {
        name: "Lodge en surplomb de la baie de Samaná",
        nameEn: "A Lodge Overlooking Samaná Bay",
        nameEs: "Lodge con vistas a la bahía de Samaná",
        description:
          "Un lodge en surplomb de la baie de Samaná, chambres avec vue sur l'océan, point de départ pratique pour les sorties d'observation des baleines à bosse.",
        descriptionEn:
          "A lodge overlooking Samaná Bay, rooms with ocean views, a convenient base for humpback whale watching outings.",
        descriptionEs:
          "Un lodge con vistas a la bahía de Samaná, habitaciones con vistas al océano, punto de partida práctico para las salidas de observación de ballenas jorobadas.",
        image: `${R2}/trips/rd-samana-hotel-1.jpg`,
      },
      {
        name: "Cabañas de la péninsule de Samaná",
        nameEn: "Samaná Peninsula Cabañas",
        nameEs: "Cabañas de la península de Samaná",
        description:
          "Des cabañas simples au cœur de la péninsule de Samaná, entourées de végétation tropicale, à courte distance à cheval de la cascade d'El Limon.",
        descriptionEn:
          "Simple cabañas at the heart of the Samaná peninsula, surrounded by tropical vegetation, a short horseback ride from El Limon waterfall.",
        descriptionEs:
          "Cabañas sencillas en el corazón de la península de Samaná, rodeadas de vegetación tropical, a poca distancia a caballo de la cascada de El Limón.",
        image: `${R2}/trips/rd-samana-hotel-2.jpg`,
      },
    ],
  },
);

standardTrips.push(
  {
    destinationSlug: "sainte-lucie",
    tour: {
      name: "Sainte-Lucie : Marigot Bay et Rodney Bay",
      nameEn: "Saint Lucia: Marigot Bay and Rodney Bay",
      nameEs: "Santa Lucía: Marigot Bay y Rodney Bay",
      slug: "sainte-lucie-marigot-rodney",
      image: `${R2}/tours/sainte-lucie-marigot-rodney.jpg`,
      images: `${R2}/trips/stlucie-marigot-gallery-1.jpg,${R2}/trips/stlucie-marigot-gallery-2.jpg,${R2}/trips/stlucie-marigot-gallery-3.jpg,${R2}/trips/stlucie-marigot-gallery-4.jpg,${R2}/trips/stlucie-marigot-gallery-5.jpg,${R2}/trips/stlucie-marigot-gallery-6.jpg`,
      tagline: "Une baie si parfaitement abritée qu'elle servit de décor à Hollywood, sur la côte nord de l'île loin des volcans",
      taglineEn: "A bay so perfectly sheltered it once served as a Hollywood backdrop, on the island's north coast far from the volcanoes",
      taglineEs: "Una bahía tan perfectamente resguardada que sirvió de escenario a Hollywood, en la costa norte de la isla lejos de los volcanes",
      description:
        "La côte nord de Sainte-Lucie, loin de Soufrière et des Pitons volcaniques, révèle un visage plus mondain de l'île autour de Marigot Bay, crique naturelle si parfaitement abritée par des collines boisées qu'elle fut choisie comme décor pour le tournage du film Docteur Dolittle en 1967, et de Rodney Bay, marina animée bordée de restaurants et de bars qui concentre l'essentiel de la vie nocturne du nord de l'île.",
      descriptionEn:
        "Saint Lucia's north coast, far from Soufrière and the volcanic Pitons, reveals a more worldly side of the island around Marigot Bay, a natural cove so perfectly sheltered by wooded hills that it was chosen as a filming location for Doctor Dolittle in 1967, and Rodney Bay, a lively marina lined with restaurants and bars concentrating most of the island's northern nightlife.",
      descriptionEs:
        "La costa norte de Santa Lucía, lejos de Soufrière y los Pitones volcánicos, revela una cara más mundana de la isla en torno a Marigot Bay, cala natural tan perfectamente resguardada por colinas boscosas que fue elegida como escenario para el rodaje de la película Doctor Dolittle en 1967, y Rodney Bay, animado puerto deportivo bordeado de restaurantes y bares que concentra la mayor parte de la vida nocturna del norte de la isla.",
      price: 2300,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 160,
    },
    sections: [
      {
        heading: "Marigot Bay, la baie hollywoodienne",
        headingEn: "Marigot Bay, the Hollywood Bay",
        headingEs: "Marigot Bay, la bahía hollywoodense",
        body:
          "Marigot Bay, crique naturelle protégée par des collines densément boisées qui plongent presque directement dans une eau turquoise, doit sa notoriété internationale au tournage du film Docteur Dolittle en 1967, dont l'équipe construisit un village flottant temporaire pour les besoins du film. Cette configuration géographique exceptionnelle, l'une des baies les mieux abritées de toutes les Caraïbes, en fait aujourd'hui un mouillage prisé des voiliers de plaisance qui viennent s'y réfugier lors des tempêtes tropicales.",
        bodyEn:
          "Marigot Bay, a natural cove protected by densely wooded hills plunging almost directly into turquoise water, owes its international fame to the filming of Doctor Dolittle in 1967, for which the crew built a temporary floating village. This exceptional geographic configuration, one of the best-sheltered bays in the entire Caribbean, makes it today a favoured anchorage for pleasure yachts seeking refuge during tropical storms.",
        bodyEs:
          "Marigot Bay, cala natural protegida por colinas densamente boscosas que se sumergen casi directamente en agua turquesa, debe su fama internacional al rodaje de la película Doctor Dolittle en 1967, para la cual el equipo construyó un pueblo flotante temporal. Esta configuración geográfica excepcional, una de las bahías mejor resguardadas de todo el Caribe, la convierte hoy en un fondeadero apreciado por los veleros de recreo que buscan refugio durante las tormentas tropicales.",
      },
      {
        heading: "Rodney Bay et la vie nocturne du nord",
        headingEn: "Rodney Bay and the Northern Nightlife",
        headingEs: "Rodney Bay y la vida nocturna del norte",
        body:
          "Rodney Bay, aménagée autour d'une marina moderne construite dans les années 1970, concentre l'essentiel des restaurants, bars et boutiques du nord de Sainte-Lucie, offrant un contraste animé avec l'atmosphère plus tranquille du reste de l'île. La promenade de Reduit Beach, plage de sable doré bordée de palmiers en léger arc de cercle, complète cette zone touristique développée qui reste néanmoins à taille humaine comparée à d'autres destinations caribéennes plus densément urbanisées.",
        bodyEn:
          "Rodney Bay, built around a modern marina constructed in the 1970s, concentrates most of northern Saint Lucia's restaurants, bars, and shops, offering a lively contrast with the calmer atmosphere of the rest of the island. The Reduit Beach promenade, a gently curving golden-sand beach lined with palm trees, rounds out this developed tourist area, which nonetheless remains human-scale compared to other, more densely urbanised Caribbean destinations.",
        bodyEs:
          "Rodney Bay, construida en torno a un moderno puerto deportivo edificado en la década de 1970, concentra la mayor parte de los restaurantes, bares y tiendas del norte de Santa Lucía, ofreciendo un animado contraste con el ambiente más tranquilo del resto de la isla. El paseo de Reduit Beach, playa de arena dorada bordeada de palmeras en suave arco, completa esta zona turística desarrollada que, no obstante, mantiene una escala humana en comparación con otros destinos caribeños más densamente urbanizados.",
      },
    ],
    hotels: [
      {
        name: "Villa en surplomb de Marigot Bay",
        nameEn: "A Villa Overlooking Marigot Bay",
        nameEs: "Villa con vistas a Marigot Bay",
        description:
          "Une villa en surplomb de Marigot Bay, piscine privée avec vue sur les voiliers ancrés dans la baie, à distance de marche du petit village de pêcheurs.",
        descriptionEn:
          "A villa overlooking Marigot Bay, a private pool with views over the yachts anchored in the bay, within walking distance of the small fishing village.",
        descriptionEs:
          "Una villa con vistas a Marigot Bay, piscina privada con vistas a los veleros anclados en la bahía, a poca distancia a pie del pequeño pueblo de pescadores.",
        image: `${R2}/trips/stlucie-marigot-hotel-1.jpg`,
      },
      {
        name: "Hôtel de la marina de Rodney Bay",
        nameEn: "A Rodney Bay Marina Hotel",
        nameEs: "Hotel del puerto deportivo de Rodney Bay",
        description:
          "Un hôtel donnant directement sur la marina de Rodney Bay, à distance de marche de Reduit Beach et des restaurants animés du quartier.",
        descriptionEn:
          "A hotel overlooking the Rodney Bay marina directly, within walking distance of Reduit Beach and the district's lively restaurants.",
        descriptionEs:
          "Un hotel con vistas directas al puerto deportivo de Rodney Bay, a poca distancia a pie de Reduit Beach y los animados restaurantes del barrio.",
        image: `${R2}/trips/stlucie-marigot-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "barbade",
    tour: {
      name: "Barbade : la côte ouest et la route du rhum",
      nameEn: "Barbados: The West Coast and the Rum Route",
      nameEs: "Barbados: la costa oeste y la ruta del ron",
      slug: "barbade-cote-ouest-rhum",
      image: `${R2}/tours/barbade-cote-ouest-rhum.jpg`,
      images: `${R2}/trips/barbade-ouest-gallery-1.jpg,${R2}/trips/barbade-ouest-gallery-2.jpg,${R2}/trips/barbade-ouest-gallery-3.jpg,${R2}/trips/barbade-ouest-gallery-4.jpg,${R2}/trips/barbade-ouest-gallery-5.jpg,${R2}/trips/barbade-ouest-gallery-6.jpg`,
      tagline: "Le berceau mondial du rhum, distillé sans interruption depuis le XVIIe siècle sur la côte caribéenne la plus calme de l'île",
      taglineEn: "The world's birthplace of rum, distilled without interruption since the 17th century on the island's calmest Caribbean coast",
      taglineEs: "La cuna mundial del ron, destilado sin interrupción desde el siglo XVII en la costa caribeña más tranquila de la isla",
      description:
        "La côte ouest de la Barbade, aux eaux calmes protégées de la houle atlantique, abrite depuis 1703 la distillerie Mount Gay, la plus ancienne marque de rhum encore en activité au monde, dans une région qui revendique avoir inventé ce spiritueux au XVIIe siècle à partir des surplus de mélasse de la culture sucrière locale. Cette côte, surnommée la « Platinum Coast » pour ses complexes hôteliers haut de gamme, concentre également les plus belles plages de sable blanc de l'île, à l'abri des vents alizés qui balaient la côte est.",
      descriptionEn:
        "Barbados's west coast, with calm waters protected from the Atlantic swell, has been home since 1703 to the Mount Gay distillery, the world's oldest still-operating rum brand, in a region that claims to have invented the spirit in the 17th century from surplus molasses of the local sugar industry. This coast, nicknamed the \"Platinum Coast\" for its upscale resort complexes, also concentrates the island's finest white-sand beaches, sheltered from the trade winds that sweep the east coast.",
      descriptionEs:
        "La costa oeste de Barbados, de aguas tranquilas protegidas del oleaje atlántico, alberga desde 1703 la destilería Mount Gay, la marca de ron más antigua todavía activa del mundo, en una región que reivindica haber inventado este espirituoso en el siglo XVII a partir de los excedentes de melaza de la industria azucarera local. Esta costa, apodada la «Costa de Platino» por sus complejos hoteleros de alta gama, concentra además las playas de arena blanca más bellas de la isla, resguardadas de los vientos alisios que azotan la costa este.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 162,
    },
    sections: [
      {
        heading: "Mount Gay, la plus ancienne marque de rhum au monde",
        headingEn: "Mount Gay, the World's Oldest Rum Brand",
        headingEs: "Mount Gay, la marca de ron más antigua del mundo",
        body:
          "La distillerie Mount Gay, dont les premiers documents attestent d'une production remontant à 1703, revendique le titre de plus ancienne marque de rhum encore en activité au monde, une affirmation étayée par des registres commerciaux ininterrompus depuis plus de trois siècles. La Barbade elle-même dispute à d'autres îles caribéennes le titre de lieu de naissance du rhum, un document de 1651 décrivant déjà un spiritueux local appelé « kill-devil » distillé à partir des résidus de la production sucrière.",
        bodyEn:
          "The Mount Gay distillery, whose earliest documents attest to production dating back to 1703, claims the title of the world's oldest still-operating rum brand, an assertion backed by uninterrupted trading records spanning over three centuries. Barbados itself disputes with other Caribbean islands the title of rum's birthplace, a 1651 document already describing a local spirit called \"kill-devil\" distilled from sugar production residues.",
        bodyEs:
          "La destilería Mount Gay, cuyos primeros documentos atestiguan una producción que se remonta a 1703, reivindica el título de marca de ron más antigua todavía activa del mundo, una afirmación respaldada por registros comerciales ininterrumpidos desde hace más de tres siglos. La propia Barbados disputa con otras islas caribeñas el título de lugar de nacimiento del ron, ya que un documento de 1651 describe un espirituoso local llamado «kill-devil» destilado a partir de los residuos de la producción azucarera.",
      },
      {
        heading: "La Platinum Coast et ses plages abritées",
        headingEn: "The Platinum Coast and its Sheltered Beaches",
        headingEs: "La Costa de Platino y sus playas resguardadas",
        body:
          "La côte ouest de la Barbade, surnommée la « Platinum Coast » pour la concentration de résidences et d'hôtels haut de gamme qui la bordent depuis les années 1960, bénéficie d'eaux naturellement calmes protégées de la houle atlantique par la forme même de l'île, offrant des conditions de baignade optimales toute l'année. Cette façade caribéenne, plus abritée que la côte est, attira dès le XIXe siècle une clientèle britannique fortunée, posant les bases d'un tourisme haut de gamme qui perdure encore aujourd'hui.",
        bodyEn:
          "Barbados's west coast, nicknamed the \"Platinum Coast\" for the concentration of upscale residences and hotels lining it since the 1960s, benefits from naturally calm waters protected from the Atlantic swell by the island's very shape, offering optimal swimming conditions year-round. This Caribbean-facing side, more sheltered than the east coast, attracted a wealthy British clientele as early as the 19th century, laying the foundations for an upscale tourism that endures today.",
        bodyEs:
          "La costa oeste de Barbados, apodada la «Costa de Platino» por la concentración de residencias y hoteles de alta gama que la bordean desde la década de 1960, se beneficia de aguas naturalmente tranquilas protegidas del oleaje atlántico por la propia forma de la isla, lo que ofrece condiciones de baño óptimas durante todo el año. Esta fachada caribeña, más resguardada que la costa este, atrajo ya en el siglo XIX a una clientela británica adinerada, sentando las bases de un turismo de alta gama que perdura hoy.",
      },
    ],
    hotels: [
      {
        name: "Villa de la Platinum Coast",
        nameEn: "A Platinum Coast Villa",
        nameEs: "Villa de la Costa de Platino",
        description:
          "Une villa élégante sur la côte ouest de la Barbade, piscine privée face à une mer calme, à courte distance de la distillerie Mount Gay.",
        descriptionEn:
          "An elegant villa on Barbados's west coast, a private pool facing a calm sea, a short distance from the Mount Gay distillery.",
        descriptionEs:
          "Una elegante villa en la costa oeste de Barbados, piscina privada frente a un mar tranquilo, a poca distancia de la destilería Mount Gay.",
        image: `${R2}/trips/barbade-ouest-hotel-1.jpg`,
      },
      {
        name: "Boutique-hôtel en bord de plage",
        nameEn: "A Beachfront Boutique Hotel",
        nameEs: "Hotel boutique junto a la playa",
        description:
          "Un boutique-hôtel directement sur une plage de la côte ouest, jardin tropical intérieur, dégustations de rhum organisées sur place plusieurs fois par semaine.",
        descriptionEn:
          "A boutique hotel directly on a west coast beach, an indoor tropical garden, rum tastings organised on site several times a week.",
        descriptionEs:
          "Un hotel boutique directamente en una playa de la costa oeste, jardín tropical interior, degustaciones de ron organizadas in situ varias veces por semana.",
        image: `${R2}/trips/barbade-ouest-hotel-2.jpg`,
      },
    ],
  },
);

standardTrips.push(
  {
    destinationSlug: "porto-rico",
    tour: {
      name: "Porto Rico : El Yunque, la forêt tropicale",
      nameEn: "Puerto Rico: El Yunque, the Rainforest",
      nameEs: "Puerto Rico: El Yunque, la selva tropical",
      slug: "porto-rico-elyunque",
      image: `${R2}/tours/porto-rico-elyunque.jpg`,
      images: `${R2}/trips/pr-elyunque-gallery-1.jpg,${R2}/trips/pr-elyunque-gallery-2.jpg,${R2}/trips/pr-elyunque-gallery-3.jpg,${R2}/trips/pr-elyunque-gallery-4.jpg,${R2}/trips/pr-elyunque-gallery-5.jpg,${R2}/trips/pr-elyunque-gallery-6.jpg`,
      tagline: "La seule forêt tropicale humide du réseau forestier national américain, à moins d'une heure de San Juan",
      taglineEn: "The only tropical rainforest in the US national forest system, less than an hour from San Juan",
      taglineEs: "La única selva tropical húmeda del sistema forestal nacional estadounidense, a menos de una hora de San Juan",
      description:
        "El Yunque, à moins d'une heure de route de San Juan, est la seule forêt tropicale humide gérée par le service forestier des États-Unis parmi l'ensemble de ses forêts nationales, un statut unique qui protège plus de onze mille hectares de canopée dense abritant le coqui, minuscule grenouille endémique dont le chant nocturne est devenu le symbole sonore de Porto Rico. Ses cascades accessibles à pied, dont La Mina et La Coca, comptent parmi les excursions les plus populaires de l'île.",
      descriptionEn:
        "El Yunque, less than an hour's drive from San Juan, is the only tropical rainforest managed by the US Forest Service among its entire national forest system, a unique status protecting over eleven thousand hectares of dense canopy sheltering the coqui, a tiny endemic frog whose night-time call has become Puerto Rico's audible symbol. Its waterfalls accessible on foot, including La Mina and La Coca, rank among the island's most popular excursions.",
      descriptionEs:
        "El Yunque, a menos de una hora en coche de San Juan, es la única selva tropical húmeda gestionada por el Servicio Forestal de Estados Unidos dentro de todo su sistema de bosques nacionales, un estatus único que protege más de once mil hectáreas de dosel arbóreo denso que alberga al coquí, diminuta rana endémica cuyo canto nocturno se ha convertido en el símbolo sonoro de Puerto Rico. Sus cascadas accesibles a pie, entre ellas La Mina y La Coca, se cuentan entre las excursiones más populares de la isla.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 164,
    },
    sections: [
      {
        heading: "Une forêt tropicale unique dans le système forestier américain",
        headingEn: "A Rainforest Unique in the American Forest System",
        headingEs: "Una selva tropical única en el sistema forestal estadounidense",
        body:
          "El Yunque, protégée sous une forme ou une autre depuis 1876, date qui en fait l'une des plus anciennes réserves forestières de l'hémisphère occidental, reste aujourd'hui la seule forêt tropicale humide gérée par le service forestier des États-Unis parmi l'ensemble de son réseau de forêts nationales couvrant pourtant le pays entier. Cette rareté administrative reflète la position unique de Porto Rico, territoire américain sous les tropiques, et permet la préservation de plus de deux cent quarante espèces d'arbres et de vingt espèces d'orchidées endémiques.",
        bodyEn:
          "El Yunque, protected in some form since 1876, a date making it one of the oldest forest reserves in the western hemisphere, remains today the only tropical rainforest managed by the US Forest Service across its entire national forest network, despite that network covering the whole country. This administrative rarity reflects Puerto Rico's unique position as an American territory in the tropics, and allows the preservation of over two hundred and forty tree species and twenty endemic orchid species.",
        bodyEs:
          "El Yunque, protegida de una forma u otra desde 1876, fecha que la convierte en una de las reservas forestales más antiguas del hemisferio occidental, sigue siendo hoy la única selva tropical húmeda gestionada por el Servicio Forestal de Estados Unidos dentro de toda su red de bosques nacionales, pese a que esta cubre todo el país. Esta rareza administrativa refleja la posición única de Puerto Rico, territorio estadounidense en los trópicos, y permite la preservación de más de doscientas cuarenta especies de árboles y veinte especies de orquídeas endémicas.",
      },
      {
        heading: "Le coqui, symbole sonore de Porto Rico",
        headingEn: "The Coqui, Puerto Rico's Audible Symbol",
        headingEs: "El coquí, símbolo sonoro de Puerto Rico",
        body:
          "Le coqui, minuscule grenouille endémique de moins de trois centimètres de long qui doit son nom onomatopéique à son chant caractéristique, est devenu au fil des générations le symbole sonore de Porto Rico, entendu chaque soir dans la forêt d'El Yunque comme dans les jardins de San Juan. Contrairement à la plupart des grenouilles, le coqui se développe directement à partir de l'œuf sans passer par un stade têtard aquatique, une adaptation qui lui a permis de coloniser des milieux forestiers dépourvus de points d'eau permanents.",
        bodyEn:
          "The coqui, a tiny endemic frog under three centimetres long that owes its onomatopoeic name to its characteristic call, has over generations become Puerto Rico's audible symbol, heard every evening in El Yunque forest as well as in San Juan gardens. Unlike most frogs, the coqui develops directly from the egg without going through an aquatic tadpole stage, an adaptation that allowed it to colonise forest habitats lacking permanent water points.",
        bodyEs:
          "El coquí, diminuta rana endémica de menos de tres centímetros de longitud que debe su nombre onomatopéyico a su canto característico, se ha convertido a lo largo de generaciones en el símbolo sonoro de Puerto Rico, escuchado cada noche tanto en la selva de El Yunque como en los jardines de San Juan. A diferencia de la mayoría de las ranas, el coquí se desarrolla directamente a partir del huevo sin pasar por una fase de renacuajo acuático, una adaptación que le permitió colonizar hábitats forestales carentes de puntos de agua permanentes.",
      },
    ],
    hotels: [
      {
        name: "Lodge en lisière d'El Yunque",
        nameEn: "A Lodge on the Edge of El Yunque",
        nameEs: "Lodge en el límite de El Yunque",
        description:
          "Un lodge écologique en lisière de la forêt d'El Yunque, chambres avec vue sur la canopée, sentiers d'observation du coqui accessibles directement depuis la propriété.",
        descriptionEn:
          "An eco-lodge on the edge of El Yunque forest, rooms overlooking the canopy, coqui-observation trails accessible directly from the property.",
        descriptionEs:
          "Un ecolodge en el límite de la selva de El Yunque, habitaciones con vistas al dosel arbóreo, senderos de observación del coquí accesibles directamente desde la propiedad.",
        image: `${R2}/trips/pr-elyunque-hotel-1.jpg`,
      },
      {
        name: "Maison d'hôtes de Rio Grande",
        nameEn: "A Rio Grande Guesthouse",
        nameEs: "Casa de huéspedes de Río Grande",
        description:
          "Une maison d'hôtes familiale dans la ville de Rio Grande, à courte distance en voiture de l'entrée principale d'El Yunque et de ses cascades.",
        descriptionEn:
          "A family guesthouse in the town of Rio Grande, a short drive from El Yunque's main entrance and its waterfalls.",
        descriptionEs:
          "Una casa de huéspedes familiar en la ciudad de Río Grande, a poca distancia en coche de la entrada principal de El Yunque y sus cascadas.",
        image: `${R2}/trips/pr-elyunque-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "antigua-et-barbuda",
    tour: {
      name: "Antigua-et-Barbuda : les 365 plages",
      nameEn: "Antigua and Barbuda: The 365 Beaches",
      nameEs: "Antigua y Barbuda: las 365 playas",
      slug: "antigua-et-barbuda-365-plages",
      image: `${R2}/tours/antigua-365-plages.jpg`,
      images: `${R2}/trips/antigua-plages-gallery-1.jpg,${R2}/trips/antigua-plages-gallery-2.jpg,${R2}/trips/antigua-plages-gallery-3.jpg,${R2}/trips/antigua-plages-gallery-4.jpg,${R2}/trips/antigua-plages-gallery-5.jpg,${R2}/trips/antigua-plages-gallery-6.jpg`,
      tagline: "Une plage différente pour chaque jour de l'année, selon la légende touristique la plus répétée de toutes les Petites Antilles",
      taglineEn: "A different beach for every day of the year, according to the most-repeated tourism legend in the Lesser Antilles",
      taglineEs: "Una playa distinta para cada día del año, según la leyenda turística más repetida de las Antillas Menores",
      description:
        "Antigua revendique depuis des décennies de posséder trois cent soixante-cinq plages, une pour chaque jour de l'année, un slogan touristique devenu si célèbre qu'il figure sur la plaque d'immatriculation officielle des véhicules de l'île. Si le chiffre exact reste sujet à débat parmi les géographes locaux, le littoral extrêmement découpé de l'île, alternant criques isolées et longues étendues de sable blanc, offre effectivement une diversité de plages rarement égalée sur une île de cette taille.",
      descriptionEn:
        "Antigua has claimed for decades to have three hundred and sixty-five beaches, one for every day of the year, a tourism slogan so famous it appears on the island's official vehicle licence plates. While the exact figure remains a matter of debate among local geographers, the island's extremely jagged coastline, alternating between secluded coves and long stretches of white sand, does indeed offer a diversity of beaches rarely matched on an island this size.",
      descriptionEs:
        "Antigua reivindica desde hace décadas poseer trescientas sesenta y cinco playas, una para cada día del año, eslogan turístico tan célebre que figura en la matrícula oficial de los vehículos de la isla. Aunque la cifra exacta sigue siendo objeto de debate entre los geógrafos locales, el litoral extremadamente recortado de la isla, que alterna calas aisladas y largas extensiones de arena blanca, ofrece efectivamente una diversidad de playas rara vez igualada en una isla de este tamaño.",
      price: 2200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 166,
    },
    sections: [
      {
        heading: "L'origine du slogan des 365 plages",
        headingEn: "The Origin of the 365 Beaches Slogan",
        headingEs: "El origen del eslogan de las 365 playas",
        body:
          "Le slogan des trois cent soixante-cinq plages, popularisé à partir des années 1970 par l'office du tourisme antiguais, s'appuie sur le littoral exceptionnellement découpé de l'île, dont le tracé côtier dépasse deux cent soixante kilomètres pour une superficie totale de moins de trois cents kilomètres carrés. Si le décompte exact varie selon la définition retenue d'une « plage », l'idée centrale reste vérifiable sur le terrain : il est possible de passer chaque jour d'un séjour d'un an sur une étendue de sable différente sans jamais répéter le même endroit.",
        bodyEn:
          "The three-hundred-and-sixty-five-beaches slogan, popularised from the 1970s onward by the Antiguan tourism board, relies on the island's exceptionally jagged coastline, whose outline exceeds two hundred and sixty kilometres for a total area of under three hundred square kilometres. While the exact count varies depending on the definition of a \"beach\" used, the central idea remains verifiable on the ground: it is possible to spend every day of a year-long stay on a different stretch of sand without ever repeating the same spot.",
        bodyEs:
          "El eslogan de las trescientas sesenta y cinco playas, popularizado a partir de la década de 1970 por la oficina de turismo antigueña, se apoya en el litoral excepcionalmente recortado de la isla, cuyo trazado costero supera los doscientos sesenta kilómetros para una superficie total de menos de trescientos kilómetros cuadrados. Aunque el recuento exacto varía según la definición de «playa» que se adopte, la idea central sigue siendo comprobable sobre el terreno: es posible pasar cada día de una estancia de un año en una extensión de arena diferente sin repetir jamás el mismo lugar.",
      },
      {
        heading: "Half Moon Bay et les plages de l'est",
        headingEn: "Half Moon Bay and the Eastern Beaches",
        headingEs: "Half Moon Bay y las playas del este",
        body:
          "Half Moon Bay, sur la côte est exposée à l'Atlantique, forme un arc de sable rose pâle presque parfait au sein d'une réserve naturelle protégée, ses eaux plus agitées que celles de la côte ouest offrant des conditions idéales pour le bodyboard et le surf léger. Cette diversité de conditions marines d'une côte à l'autre, rare sur une île aussi compacte, permet aux visiteurs de choisir chaque jour entre plage abritée et calme ou plage plus dynamique exposée aux alizés, selon l'humeur du moment.",
        bodyEn:
          "Half Moon Bay, on the Atlantic-exposed east coast, forms an almost perfect arc of pale pink sand within a protected nature reserve, its choppier waters compared to the west coast offering ideal conditions for bodyboarding and light surfing. This diversity of marine conditions from one coast to the other, rare on such a compact island, allows visitors to choose each day between a sheltered, calm beach or a more dynamic one exposed to the trade winds, according to the mood of the moment.",
        bodyEs:
          "Half Moon Bay, en la costa este expuesta al Atlántico, forma un arco de arena rosa pálido casi perfecto dentro de una reserva natural protegida, con aguas más agitadas que las de la costa oeste que ofrecen condiciones ideales para el bodyboard y el surf ligero. Esta diversidad de condiciones marinas de una costa a otra, poco común en una isla tan compacta, permite a los visitantes elegir cada día entre una playa resguardada y tranquila o una más dinámica expuesta a los alisios, según el ánimo del momento.",
      },
    ],
    hotels: [
      {
        name: "Resort de plage privée",
        nameEn: "A Private Beach Resort",
        nameEs: "Resort de playa privada",
        description:
          "Un resort donnant sur une plage privée de la côte ouest, piscine face à la mer, location de bateau incluse pour explorer les criques voisines de l'île.",
        descriptionEn:
          "A resort overlooking a private west coast beach, a pool facing the sea, boat rental included to explore the island's nearby coves.",
        descriptionEs:
          "Un resort con vistas a una playa privada de la costa oeste, piscina frente al mar, alquiler de barco incluido para explorar las calas cercanas de la isla.",
        image: `${R2}/trips/antigua-plages-hotel-1.jpg`,
      },
      {
        name: "Boutique-hôtel près de Half Moon Bay",
        nameEn: "A Boutique Hotel near Half Moon Bay",
        nameEs: "Hotel boutique cerca de Half Moon Bay",
        description:
          "Un boutique-hôtel à courte distance de Half Moon Bay, jardin tropical intérieur, navette quotidienne vers différentes plages de l'île selon les envies des hôtes.",
        descriptionEn:
          "A boutique hotel a short distance from Half Moon Bay, an indoor tropical garden, a daily shuttle to different island beaches according to guests' wishes.",
        descriptionEs:
          "Un hotel boutique a poca distancia de Half Moon Bay, jardín tropical interior, transporte diario a diferentes playas de la isla según los deseos de los huéspedes.",
        image: `${R2}/trips/antigua-plages-hotel-2.jpg`,
      },
    ],
  },
);

standardTrips.push(
  {
    destinationSlug: "grenade",
    tour: {
      name: "Grenade : Grand Anse",
      nameEn: "Grenada: Grand Anse",
      nameEs: "Granada: Grand Anse",
      slug: "grenade-grand-anse",
      image: `${R2}/tours/grenade-grand-anse.jpg`,
      images: `${R2}/trips/grenade-grandanse-gallery-1.jpg,${R2}/trips/grenade-grandanse-gallery-2.jpg,${R2}/trips/grenade-grandanse-gallery-3.jpg,${R2}/trips/grenade-grandanse-gallery-4.jpg,${R2}/trips/grenade-grandanse-gallery-5.jpg,${R2}/trips/grenade-grandanse-gallery-6.jpg`,
      tagline: "Deux kilomètres de sable blanc en croissant, à quelques minutes seulement de la capitale la plus pittoresque des Petites Antilles",
      taglineEn: "Two kilometres of crescent-shaped white sand, just minutes from the most picturesque capital in the Lesser Antilles",
      taglineEs: "Dos kilómetros de arena blanca en forma de media luna, a solo minutos de la capital más pintoresca de las Antillas Menores",
      description:
        "Grand Anse, à quelques minutes seulement du port coloré de Saint-Georges, s'étire sur deux kilomètres de sable blanc en croissant régulièrement classés parmi les plus belles plages des Caraïbes, à l'abri d'une eau calme protégée par la configuration naturelle de la baie. Grenade, surnommée l'« île aux épices » pour sa production de muscade qui représentait jadis près de la moitié de l'offre mondiale, imprègne même l'atmosphère de cette plage de parfums de cannelle et de girofle vendus par des marchands ambulants le long du rivage.",
      descriptionEn:
        "Grand Anse, just minutes from the colourful port of St George's, stretches over two kilometres of crescent-shaped white sand regularly ranked among the Caribbean's finest beaches, sheltered by calm water protected by the bay's natural shape. Grenada, nicknamed the \"Spice Island\" for its nutmeg production, which once accounted for nearly half of world supply, even infuses this beach's atmosphere with cinnamon and clove scents sold by roaming vendors along the shore.",
      descriptionEs:
        "Grand Anse, a solo minutos del colorido puerto de St George's, se extiende a lo largo de dos kilómetros de arena blanca en forma de media luna, clasificados con regularidad entre las playas más bellas del Caribe, resguardada por aguas tranquilas protegidas por la forma natural de la bahía. Granada, apodada la «isla de las especias» por su producción de nuez moscada, que antaño representaba casi la mitad de la oferta mundial, impregna incluso la atmósfera de esta playa de aromas de canela y clavo vendidos por comerciantes ambulantes a lo largo de la orilla.",
      price: 2000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 168,
    },
    sections: [
      {
        heading: "Une plage en croissant protégée par la baie",
        headingEn: "A Crescent Beach Protected by the Bay",
        headingEs: "Una playa en media luna protegida por la bahía",
        body:
          "Grand Anse doit sa forme en croissant régulier et son eau exceptionnellement calme à la configuration de la baie qui l'abrite, protégée à ses deux extrémités par des promontoires rocheux qui brisent la houle avant qu'elle n'atteigne le rivage. Cette protection naturelle, combinée à une pente douce qui rend le rivage accessible aux nageurs de tous niveaux, explique pourquoi cette plage reste régulièrement citée parmi les plus belles de toutes les Petites Antilles par les guides de voyage internationaux.",
        bodyEn:
          "Grand Anse owes its regular crescent shape and exceptionally calm water to the configuration of the sheltering bay, protected at both ends by rocky headlands that break the swell before it reaches the shore. This natural protection, combined with a gentle slope that makes the shore accessible to swimmers of all levels, explains why this beach remains regularly cited among the most beautiful in the entire Lesser Antilles by international travel guides.",
        bodyEs:
          "Grand Anse debe su forma regular de media luna y su agua excepcionalmente tranquila a la configuración de la bahía que la resguarda, protegida en sus dos extremos por promontorios rocosos que rompen el oleaje antes de que alcance la orilla. Esta protección natural, combinada con una suave pendiente que hace la orilla accesible a nadadores de todos los niveles, explica por qué esta playa sigue siendo citada con regularidad entre las más bellas de todas las Antillas Menores por las guías de viaje internacionales.",
      },
      {
        heading: "L'île aux épices, à quelques pas du sable",
        headingEn: "The Spice Island, Steps from the Sand",
        headingEs: "La isla de las especias, a pocos pasos de la arena",
        body:
          "Grenade produisait jusqu'aux années 2000 près de la moitié de la muscade consommée dans le monde, une production introduite au XIXe siècle et qui a valu à l'île son surnom d'« île aux épices », visible jusque sur son drapeau national orné d'une muscade stylisée. Bien que l'ouragan Ivan de 2004 ait détruit une grande partie des plantations historiques, la culture des épices reste profondément ancrée dans l'identité locale, et des marchands ambulants continuent de proposer muscade, cannelle et girofle fraîchement récoltés le long des plages de l'île.",
        bodyEn:
          "Grenada produced, until the 2000s, nearly half of the nutmeg consumed worldwide, a crop introduced in the 19th century that earned the island its nickname of \"Spice Island,\" visible even on its national flag adorned with a stylised nutmeg. Although Hurricane Ivan in 2004 destroyed much of the historic plantations, spice cultivation remains deeply anchored in local identity, and roaming vendors continue to offer freshly harvested nutmeg, cinnamon, and clove along the island's beaches.",
        bodyEs:
          "Granada producía, hasta la década de 2000, casi la mitad de la nuez moscada consumida en el mundo, un cultivo introducido en el siglo XIX que valió a la isla su apodo de «isla de las especias», visible incluso en su bandera nacional adornada con una nuez moscada estilizada. Aunque el huracán Ivan de 2004 destruyó gran parte de las plantaciones históricas, el cultivo de especias sigue profundamente arraigado en la identidad local, y comerciantes ambulantes continúan ofreciendo nuez moscada, canela y clavo recién cosechados a lo largo de las playas de la isla.",
      },
    ],
    hotels: [
      {
        name: "Resort en bord de plage à Grand Anse",
        nameEn: "A Grand Anse Beachfront Resort",
        nameEs: "Resort junto a la playa en Grand Anse",
        description:
          "Un resort directement sur la plage de Grand Anse, jardins tropicaux luxuriants, à distance de marche du port de Saint-Georges et de son marché aux épices.",
        descriptionEn:
          "A resort directly on Grand Anse beach, lush tropical gardens, within walking distance of St George's port and its spice market.",
        descriptionEs:
          "Un resort directamente en la playa de Grand Anse, exuberantes jardines tropicales, a poca distancia a pie del puerto de St George's y su mercado de especias.",
        image: `${R2}/trips/grenade-grandanse-hotel-1.jpg`,
      },
      {
        name: "Villa en surplomb de la baie",
        nameEn: "A Villa Overlooking the Bay",
        nameEs: "Villa con vistas a la bahía",
        description:
          "Une villa en surplomb de la baie de Grand Anse, piscine privée avec vue sur le sable blanc en croissant, jardin planté de manguiers et de muscadiers.",
        descriptionEn:
          "A villa overlooking Grand Anse bay, a private pool with views over the crescent of white sand, a garden planted with mango and nutmeg trees.",
        descriptionEs:
          "Una villa con vistas a la bahía de Grand Anse, piscina privada con vistas a la media luna de arena blanca, jardín plantado de mangos y nueces moscadas.",
        image: `${R2}/trips/grenade-grandanse-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "trinite-et-tobago",
    tour: {
      name: "Trinité-et-Tobago : Caroni et Maracas Bay",
      nameEn: "Trinidad and Tobago: Caroni and Maracas Bay",
      nameEs: "Trinidad y Tobago: Caroni y Maracas Bay",
      slug: "trinite-et-tobago-caroni-maracas",
      image: `${R2}/tours/trinite-caroni-maracas.jpg`,
      images: `${R2}/trips/trinite-caroni-gallery-1.jpg,${R2}/trips/trinite-caroni-gallery-2.jpg,${R2}/trips/trinite-caroni-gallery-3.jpg,${R2}/trips/trinite-caroni-gallery-4.jpg,${R2}/trips/trinite-caroni-gallery-5.jpg,${R2}/trips/trinite-caroni-gallery-6.jpg`,
      tagline: "Des milliers d'ibis écarlates qui embrasent chaque soir un marais de mangrove, à quelques kilomètres de la plage la plus prisée de l'île",
      taglineEn: "Thousands of scarlet ibises that set a mangrove swamp ablaze every evening, a few kilometres from the island's most popular beach",
      taglineEs: "Miles de ibis escarlata que incendian cada noche un pantano de manglar, a pocos kilómetros de la playa más popular de la isla",
      description:
        "La réserve de Caroni, marais de mangrove aux portes de Port-d'Espagne, accueille chaque soir au crépuscule des milliers d'ibis écarlates qui viennent s'y percher pour la nuit, transformant progressivement les arbres verts en un embrasement rouge vif visible depuis les barques d'observation qui sillonnent les canaux. Cet oiseau, emblème national de Trinité, partage l'affiche avec Maracas Bay, plage la plus fréquentée de l'île où se déguste depuis des générations le bake and shark, sandwich frit devenu l'institution culinaire locale.",
      descriptionEn:
        "The Caroni Swamp reserve, a mangrove wetland at the gates of Port of Spain, welcomes thousands of scarlet ibises every evening at dusk, coming to roost for the night and gradually turning the green trees into a bright red blaze visible from the observation boats that ply the channels. This bird, Trinidad's national emblem, shares the bill with Maracas Bay, the island's busiest beach where bake and shark, a fried sandwich that has become a local culinary institution, has been enjoyed for generations.",
      descriptionEs:
        "La reserva de Caroni, pantano de manglar a las puertas de Puerto España, acoge cada tarde al anochecer a miles de ibis escarlata que acuden a posarse para pasar la noche, transformando progresivamente los árboles verdes en un resplandor rojo vivo visible desde las barcas de observación que recorren los canales. Esta ave, emblema nacional de Trinidad, comparte protagonismo con Maracas Bay, la playa más frecuentada de la isla donde se degusta desde hace generaciones el bake and shark, sándwich frito convertido en institución culinaria local.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 170,
    },
    sections: [
      {
        heading: "L'embrasement rouge de la réserve de Caroni",
        headingEn: "The Red Blaze of the Caroni Reserve",
        headingEs: "El resplandor rojo de la reserva de Caroni",
        body:
          "La réserve de Caroni, plus grande zone humide de Trinité classée en 1953, doit son spectacle quotidien à la coloration écarlate spectaculaire de l'ibis rouge, oiseau qui tire sa teinte vive des crustacés riches en carotène qu'il consomme dans les eaux saumâtres de la mangrove. Chaque soir au crépuscule, des milliers d'individus convergent depuis les zones d'alimentation environnantes pour se percher en groupe sur les mêmes arbres, un rituel de sécurité collective qui offre aux visiteurs en barque un spectacle ornithologique parmi les plus saisissants des Caraïbes.",
        bodyEn:
          "The Caroni reserve, Trinidad's largest wetland, protected since 1953, owes its daily spectacle to the spectacular scarlet colouring of the scarlet ibis, a bird whose vivid hue comes from the carotene-rich crustaceans it eats in the mangrove's brackish waters. Every evening at dusk, thousands of individuals converge from surrounding feeding grounds to roost together in the same trees, a collective safety ritual that offers boat-borne visitors one of the Caribbean's most striking ornithological spectacles.",
        bodyEs:
          "La reserva de Caroni, mayor humedal de Trinidad protegido desde 1953, debe su espectáculo diario a la espectacular coloración escarlata del ibis rojo, ave que obtiene su intenso tono de los crustáceos ricos en caroteno que consume en las aguas salobres del manglar. Cada tarde al anochecer, miles de individuos convergen desde las zonas de alimentación circundantes para posarse en grupo en los mismos árboles, un ritual de seguridad colectiva que ofrece a los visitantes en barca uno de los espectáculos ornitológicos más impresionantes del Caribe.",
      },
      {
        heading: "Maracas Bay et le bake and shark",
        headingEn: "Maracas Bay and Bake and Shark",
        headingEs: "Maracas Bay y el bake and shark",
        body:
          "Maracas Bay, à une trentaine de minutes de route sinueuse depuis Port-d'Espagne à travers les montagnes du Nord, reste la plage la plus fréquentée de Trinité, bordée d'une rangée d'étals qui servent depuis des générations le bake and shark, sandwich composé de requin frit et de pain frit garni selon les goûts de chacun d'une dizaine de sauces et condiments. Ce plat, devenu une véritable institution culinaire dominicale pour les habitants de Port-d'Espagne, incarne à lui seul l'identité gastronomique décontractée de l'île.",
        bodyEn:
          "Maracas Bay, about thirty minutes along a winding road from Port of Spain through the Northern Range, remains Trinidad's busiest beach, lined with a row of stalls that have served bake and shark for generations, a sandwich made of fried shark and fried bread topped, according to individual taste, with a dozen sauces and condiments. This dish, which has become a genuine Sunday culinary institution for Port of Spain residents, embodies on its own the island's laid-back gastronomic identity.",
        bodyEs:
          "Maracas Bay, a unos treinta minutos por una carretera sinuosa desde Puerto España a través de las montañas del Norte, sigue siendo la playa más frecuentada de Trinidad, bordeada de una hilera de puestos que sirven desde hace generaciones el bake and shark, sándwich compuesto de tiburón frito y pan frito aderezado, según el gusto de cada uno, con una decena de salsas y condimentos. Este plato, convertido en una auténtica institución culinaria dominical para los habitantes de Puerto España, encarna por sí solo la identidad gastronómica relajada de la isla.",
      },
    ],
    hotels: [
      {
        name: "Lodge en lisière de la réserve de Caroni",
        nameEn: "A Lodge on the Edge of the Caroni Reserve",
        nameEs: "Lodge en el límite de la reserva de Caroni",
        description:
          "Un lodge simple en lisière de la réserve de Caroni, chambres avec vue sur les canaux de mangrove, point de départ pratique pour la sortie en barque du crépuscule.",
        descriptionEn:
          "A simple lodge on the edge of the Caroni reserve, rooms overlooking the mangrove channels, a convenient base for the dusk boat outing.",
        descriptionEs:
          "Un sencillo lodge en el límite de la reserva de Caroni, habitaciones con vistas a los canales de manglar, punto de partida práctico para la salida en barca al anochecer.",
        image: `${R2}/trips/trinite-caroni-hotel-1.jpg`,
      },
      {
        name: "Villa en surplomb de Maracas Bay",
        nameEn: "A Villa Overlooking Maracas Bay",
        nameEs: "Villa con vistas a Maracas Bay",
        description:
          "Une villa en surplomb de Maracas Bay, terrasse avec vue sur la baie et les montagnes du Nord environnantes, à distance de marche des étals de bake and shark.",
        descriptionEn:
          "A villa overlooking Maracas Bay, a terrace with views over the bay and the surrounding Northern Range, within walking distance of the bake and shark stalls.",
        descriptionEs:
          "Una villa con vistas a Maracas Bay, terraza con vistas a la bahía y las montañas del Norte circundantes, a poca distancia a pie de los puestos de bake and shark.",
        image: `${R2}/trips/trinite-caroni-hotel-2.jpg`,
      },
    ],
  },
);

standardTrips.push(
  {
    destinationSlug: "aruba",
    tour: {
      name: "Aruba : Eagle Beach et le désert",
      nameEn: "Aruba: Eagle Beach and the Desert",
      nameEs: "Aruba: Eagle Beach y el desierto",
      slug: "aruba-eaglebeach-desert",
      image: `${R2}/tours/aruba-eaglebeach-desert.jpg`,
      images: `${R2}/trips/aruba-eaglebeach-gallery-1.jpg,${R2}/trips/aruba-eaglebeach-gallery-2.jpg,${R2}/trips/aruba-eaglebeach-gallery-3.jpg,${R2}/trips/aruba-eaglebeach-gallery-4.jpg,${R2}/trips/aruba-eaglebeach-gallery-5.jpg,${R2}/trips/aruba-eaglebeach-gallery-6.jpg`,
      tagline: "Une île des Caraïbes trop sèche pour la pluie mais assez unique pour ses deux arbres fofoti tordus devenus l'emblème le plus photographié du pays",
      taglineEn: "A Caribbean island too dry for rain but unique enough for its two twisted divi-divi trees to become the country's most photographed emblem",
      taglineEs: "Una isla caribeña demasiado seca para la lluvia pero lo bastante singular como para que sus dos torcidos árboles fofoti se hayan convertido en el emblema más fotografiado del país",
      description:
        "Aruba, contrairement à la plupart de ses voisines caribéennes tropicales, se distingue par un climat semi-aride qui la place en dehors de la zone cyclonique de l'Atlantique, façonnant un paysage unique où Eagle Beach, plage de sable blanc immaculé régulièrement classée parmi les plus belles du monde, côtoie un intérieur désertique planté de cactus géants et de flamboyants arbres fofoti, dont les silhouettes sculptées par le vent constant sont devenues le symbole visuel le plus reproduit de l'île.",
      descriptionEn:
        "Aruba, unlike most of its tropical Caribbean neighbours, stands out for a semi-arid climate that places it outside the Atlantic cyclone belt, shaping a unique landscape where Eagle Beach, an immaculate white-sand beach regularly ranked among the world's finest, sits alongside a desert interior planted with giant cacti and flamboyant divi-divi trees, whose silhouettes sculpted by the constant wind have become the island's most reproduced visual symbol.",
      descriptionEs:
        "Aruba, a diferencia de la mayoría de sus vecinas caribeñas tropicales, destaca por un clima semiárido que la sitúa fuera de la zona ciclónica del Atlántico, dando forma a un paisaje único donde Eagle Beach, playa de arena blanca inmaculada clasificada con regularidad entre las más bellas del mundo, convive con un interior desértico plantado de cactus gigantes y llamativos árboles fofoti, cuyas siluetas esculpidas por el viento constante se han convertido en el símbolo visual más reproducido de la isla.",
      price: 2300,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Toute l'année",
      whenLabelEn: "Year-round",
      whenLabelEs: "Todo el año",
      bestMonths: "january,february,march,april,may,june,july,august,september,october,november,december",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 172,
    },
    sections: [
      {
        heading: "Eagle Beach et ses arbres fofoti emblématiques",
        headingEn: "Eagle Beach and its Emblematic Divi-Divi Trees",
        headingEs: "Eagle Beach y sus emblemáticos árboles fofoti",
        body:
          "Eagle Beach, régulièrement citée parmi les plus belles plages du monde par la presse internationale, doit une partie de sa notoriété visuelle à quelques arbres fofoti isolés sur son sable, dont les troncs et branches se sont courbés horizontalement sous l'effet des alizés qui soufflent sur l'île avec une régularité remarquable presque toute l'année. Ces silhouettes tourmentées, devenues l'image la plus reproduite d'Aruba sur les réseaux sociaux et les brochures touristiques, témoignent à elles seules du climat venteux et sec qui distingue l'île du reste des Caraïbes.",
        bodyEn:
          "Eagle Beach, regularly cited among the world's most beautiful beaches by the international press, owes part of its visual fame to a few isolated divi-divi trees on its sand, whose trunks and branches have curved horizontally under the effect of trade winds that blow across the island with remarkable steadiness almost year-round. These tormented silhouettes, which have become Aruba's most reproduced image on social media and in tourist brochures, testify on their own to the windy, dry climate that sets the island apart from the rest of the Caribbean.",
        bodyEs:
          "Eagle Beach, citada con regularidad entre las playas más bellas del mundo por la prensa internacional, debe parte de su fama visual a algunos árboles fofoti aislados en su arena, cuyos troncos y ramas se han curvado horizontalmente por efecto de los vientos alisios que soplan sobre la isla con notable constancia casi todo el año. Estas atormentadas siluetas, convertidas en la imagen más reproducida de Aruba en redes sociales y folletos turísticos, dan testimonio por sí solas del clima ventoso y seco que distingue a la isla del resto del Caribe.",
      },
      {
        heading: "Un climat désertique unique dans les Caraïbes",
        headingEn: "A Desert Climate Unique in the Caribbean",
        headingEs: "Un clima desértico único en el Caribe",
        body:
          "Aruba, située en dehors de la ceinture cyclonique atlantique et balayée par des alizés constants qui limitent l'accumulation de nuages, reçoit moins de cinq cents millimètres de précipitations par an, un climat semi-aride exceptionnel pour une île tropicale des Caraïbes. Cette sécheresse a façonné un paysage intérieur unique dans la région, planté de cactus candélabres géants et de broussailles épineuses, exploré depuis le parc national d'Arikok qui couvre près d'un cinquième du territoire de l'île.",
        bodyEn:
          "Aruba, located outside the Atlantic cyclone belt and swept by constant trade winds that limit cloud accumulation, receives under five hundred millimetres of rainfall a year, an exceptional semi-arid climate for a tropical Caribbean island. This dryness has shaped a landscape unique in the region, planted with giant candelabra cacti and thorny scrub, explored from Arikok National Park, which covers nearly a fifth of the island's territory.",
        bodyEs:
          "Aruba, situada fuera del cinturón ciclónico atlántico y barrida por vientos alisios constantes que limitan la acumulación de nubes, recibe menos de quinientos milímetros de precipitaciones al año, un clima semiárido excepcional para una isla tropical caribeña. Esta sequedad ha dado forma a un paisaje interior único en la región, plantado de cactus candelabro gigantes y matorral espinoso, explorado desde el parque nacional de Arikok, que cubre casi una quinta parte del territorio de la isla.",
      },
    ],
    hotels: [
      {
        name: "Resort face à Eagle Beach",
        nameEn: "A Resort Facing Eagle Beach",
        nameEs: "Resort frente a Eagle Beach",
        description:
          "Un resort directement face à Eagle Beach, chambres avec vue sur les arbres fofoti emblématiques et l'océan, piscine à débordement en bord de sable.",
        descriptionEn:
          "A resort directly facing Eagle Beach, rooms overlooking the emblematic divi-divi trees and the ocean, an infinity pool at the edge of the sand.",
        descriptionEs:
          "Un resort directamente frente a Eagle Beach, habitaciones con vistas a los emblemáticos árboles fofoti y al océano, piscina infinita al borde de la arena.",
        image: `${R2}/trips/aruba-eaglebeach-hotel-1.jpg`,
      },
      {
        name: "Lodge en lisière du parc d'Arikok",
        nameEn: "A Lodge on the Edge of Arikok Park",
        nameEs: "Lodge en el límite del parque de Arikok",
        description:
          "Un lodge simple en lisière du parc national d'Arikok, chambres avec vue sur le paysage désertique, point de départ pratique pour explorer l'intérieur de l'île.",
        descriptionEn:
          "A simple lodge on the edge of Arikok National Park, rooms overlooking the desert landscape, a convenient base for exploring the island's interior.",
        descriptionEs:
          "Un sencillo lodge en el límite del parque nacional de Arikok, habitaciones con vistas al paisaje desértico, punto de partida práctico para explorar el interior de la isla.",
        image: `${R2}/trips/aruba-eaglebeach-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "dominique",
    tour: {
      name: "Dominique : Champagne Reef et Trafalgar Falls",
      nameEn: "Dominica: Champagne Reef and Trafalgar Falls",
      nameEs: "Dominica: Champagne Reef y las cataratas Trafalgar",
      slug: "dominique-champagnereef-trafalgar",
      image: `${R2}/tours/dominique-champagnereef-trafalgar.jpg`,
      images: `${R2}/trips/dominique-champagne-gallery-1.jpg,${R2}/trips/dominique-champagne-gallery-2.jpg,${R2}/trips/dominique-champagne-gallery-3.jpg,${R2}/trips/dominique-champagne-gallery-4.jpg,${R2}/trips/dominique-champagne-gallery-5.jpg,${R2}/trips/dominique-champagne-gallery-6.jpg`,
      tagline: "Des bulles volcaniques qui remontent du fond marin comme dans une coupe de champagne, à quelques kilomètres de deux chutes d'eau jumelles",
      taglineEn: "Volcanic bubbles rising from the seabed like in a glass of champagne, a few kilometres from twin waterfalls",
      taglineEs: "Burbujas volcánicas que suben del fondo marino como en una copa de champán, a pocos kilómetros de dos cascadas gemelas",
      description:
        "Champagne Reef, sur la côte sud-ouest de la Dominique, doit son nom à des milliers de bulles de gaz volcanique qui remontent en permanence du fond marin à travers des fissures géothermiques, créant l'illusion de nager dans une coupe de champagne géante et réchauffant localement l'eau de plusieurs degrés. À quelques kilomètres de là, les chutes jumelles de Trafalgar, alimentées par deux cours d'eau distincts qui dévalent côte à côte une même paroi rocheuse, comptent parmi les cascades les plus accessibles et les plus photographiées de l'île volcanique.",
      descriptionEn:
        "Champagne Reef, on Dominica's south-west coast, owes its name to thousands of volcanic gas bubbles constantly rising from the seabed through geothermal fissures, creating the illusion of swimming in a giant glass of champagne and locally warming the water by several degrees. A few kilometres away, the twin Trafalgar Falls, fed by two distinct waterways tumbling side by side down the same rock face, rank among the most accessible and most photographed waterfalls on this volcanic island.",
      descriptionEs:
        "Champagne Reef, en la costa suroeste de Dominica, debe su nombre a miles de burbujas de gas volcánico que suben permanentemente del fondo marino a través de fisuras geotérmicas, creando la ilusión de nadar en una copa de champán gigante y calentando localmente el agua varios grados. A pocos kilómetros de allí, las cataratas gemelas de Trafalgar, alimentadas por dos cursos de agua distintos que descienden uno junto al otro por la misma pared rocosa, se cuentan entre las cascadas más accesibles y fotografiadas de esta isla volcánica.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 174,
    },
    sections: [
      {
        heading: "Champagne Reef, nager dans des bulles volcaniques",
        headingEn: "Champagne Reef, Swimming in Volcanic Bubbles",
        headingEs: "Champagne Reef, nadar entre burbujas volcánicas",
        body:
          "Champagne Reef tire son nom d'un phénomène géothermique unique : des fissures volcaniques sous-marines libèrent en permanence des flux de bulles de gaz carbonique qui remontent à la surface, créant un effet visuel proche de celui d'une coupe de champagne et réchauffant localement l'eau de plusieurs degrés par rapport aux zones environnantes. Ce récif, situé à proximité immédiate de la Soufrière Bay et du volcan sous-marin encore actif qui l'alimente, compte parmi les sites de snorkeling les plus singuliers de toutes les Caraïbes.",
        bodyEn:
          "Champagne Reef takes its name from a unique geothermal phenomenon: underwater volcanic fissures constantly release streams of carbon dioxide bubbles that rise to the surface, creating a visual effect close to that of a glass of champagne and locally warming the water by several degrees compared to surrounding areas. This reef, located in the immediate vicinity of Soufrière Bay and the still-active underwater volcano feeding it, ranks among the most singular snorkelling sites in the entire Caribbean.",
        bodyEs:
          "Champagne Reef debe su nombre a un fenómeno geotérmico único: fisuras volcánicas submarinas liberan permanentemente corrientes de burbujas de dióxido de carbono que suben a la superficie, creando un efecto visual cercano al de una copa de champán y calentando localmente el agua varios grados en comparación con las zonas circundantes. Este arrecife, situado en las inmediaciones de la bahía de Soufrière y del volcán submarino todavía activo que lo alimenta, se cuenta entre los lugares de esnórquel más singulares de todo el Caribe.",
      },
      {
        heading: "Les chutes jumelles de Trafalgar",
        headingEn: "The Twin Trafalgar Falls",
        headingEs: "Las cataratas gemelas de Trafalgar",
        body:
          "Les chutes de Trafalgar, surnommées les « Mère et Père » par les habitants en raison de leur taille inégale, dévalent côte à côte la même paroi rocheuse volcanique depuis des sources distinctes, l'une alimentée par une rivière d'eau douce classique et l'autre par une source chaude d'origine volcanique. Accessibles par un court sentier depuis le village de Trafalgar, ces chutes comptent parmi les cascades les plus visitées de la Dominique, une popularité qui n'a pourtant jamais entamé le caractère sauvage de leur cadre forestier environnant.",
        bodyEn:
          "Trafalgar Falls, nicknamed \"Mother and Father\" by locals due to their unequal size, tumble side by side down the same volcanic rock face from distinct sources, one fed by a classic freshwater river and the other by a hot spring of volcanic origin. Accessible by a short trail from Trafalgar village, these falls rank among Dominica's most visited waterfalls, a popularity that has nonetheless never diminished the wild character of their surrounding forest setting.",
        bodyEs:
          "Las cataratas de Trafalgar, apodadas «Madre y Padre» por los lugareños debido a su desigual tamaño, descienden una junto a la otra por la misma pared de roca volcánica desde fuentes distintas, una alimentada por un río de agua dulce clásico y la otra por una fuente termal de origen volcánico. Accesibles por un corto sendero desde el pueblo de Trafalgar, estas cataratas se cuentan entre las más visitadas de Dominica, una popularidad que, sin embargo, nunca ha mermado el carácter salvaje de su entorno forestal circundante.",
      },
    ],
    hotels: [
      {
        name: "Lodge en surplomb de Soufrière Bay",
        nameEn: "A Lodge Overlooking Soufrière Bay",
        nameEs: "Lodge con vistas a la bahía de Soufrière",
        description:
          "Un lodge en surplomb de Soufrière Bay, chambres avec vue sur l'océan, centre de plongée intégré pour explorer Champagne Reef et ses bulles volcaniques.",
        descriptionEn:
          "A lodge overlooking Soufrière Bay, rooms with ocean views, an on-site dive centre for exploring Champagne Reef and its volcanic bubbles.",
        descriptionEs:
          "Un lodge con vistas a la bahía de Soufrière, habitaciones con vistas al océano, centro de buceo integrado para explorar Champagne Reef y sus burbujas volcánicas.",
        image: `${R2}/trips/dominique-champagne-hotel-1.jpg`,
      },
      {
        name: "Maison d'hôtes du village de Trafalgar",
        nameEn: "A Trafalgar Village Guesthouse",
        nameEs: "Casa de huéspedes del pueblo de Trafalgar",
        description:
          "Une maison d'hôtes familiale dans le village de Trafalgar, à distance de marche des chutes jumelles, cuisine locale préparée à partir de produits cultivés sur place.",
        descriptionEn:
          "A family guesthouse in Trafalgar village, within walking distance of the twin falls, local cuisine prepared from produce grown on site.",
        descriptionEs:
          "Una casa de huéspedes familiar en el pueblo de Trafalgar, a poca distancia a pie de las cataratas gemelas, cocina local preparada con productos cultivados in situ.",
        image: `${R2}/trips/dominique-champagne-hotel-2.jpg`,
      },
    ],
  },
);

async function main() {
  const { runSeedBatch, disconnect } = await import("./lib/seedTripsRunner");
  try {
    await runSeedBatch({ newStandardTrips: standardTrips, newJourneyTrips: journeyTrips });
  } finally {
    await disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
