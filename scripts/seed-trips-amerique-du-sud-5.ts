// Amérique du Sud batch 5 (final) — Honduras, Nicaragua, Guyana. New trips bringing each
// destination to at least 3, styled on Black Tomato's real structure (a short number of
// named-hotel chapters, not an exhaustive day-by-day grind) rather than copying their text.
// This completes all 15 destinations in the Amérique du Sud region. Run with:
//   npx tsx scripts/seed-trips-amerique-du-sud-5.ts
// Requires scripts/upload-images-amerique-du-sud-5.ts to have been run first (this script
// refuses to write anything if a referenced image isn't already live in R2 — see
// seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "honduras",
    tour: {
      name: "Honduras : le lac Yojoa et le parc de Celaque",
      nameEn: "Honduras: Lake Yojoa and Celaque National Park",
      nameEs: "Honduras: el lago Yojoa y el parque de Celaque",
      slug: "honduras-yojoa-celaque",
      image: `${R2}/journeys/honduras-yojoa-celaque-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le plus grand lac naturel du pays, refuge de plus de quatre cents espèces d'oiseaux, puis le plus haut sommet du Honduras enveloppé de brume",
      taglineEn: "The country's largest natural lake, home to over four hundred bird species, then Honduras's highest peak wrapped in mist",
      taglineEs: "El mayor lago natural del país, refugio de más de cuatrocientas especies de aves, y después la cumbre más alta de Honduras envuelta en niebla",
      description:
        "Un voyage dans le centre montagneux du Honduras, entre le lac Yojoa, plus grand lac naturel du pays et halte migratoire majeure pour plus de quatre cents espèces d'oiseaux, entouré de plantations de café en altitude, et le parc national de Celaque, dont le sommet du Cerro Las Minas, point culminant du pays à plus de deux mille sept cents mètres, se dresse au cœur d'une forêt de nuages presque toujours enveloppée de brume.",
      descriptionEn:
        "A journey through the mountainous heart of Honduras, between Lake Yojoa, the country's largest natural lake and a major migratory stopover for over four hundred bird species, ringed by high-altitude coffee plantations, and Celaque National Park, whose Cerro Las Minas summit, the country's highest point at over two thousand seven hundred metres, rises at the heart of a cloud forest almost always wrapped in mist.",
      descriptionEs:
        "Un viaje por el centro montañoso de Honduras, entre el lago Yojoa, el mayor lago natural del país y una parada migratoria importante para más de cuatrocientas especies de aves, rodeado de plantaciones de café en altura, y el parque nacional de Celaque, cuya cumbre del Cerro Las Minas, el punto más alto del país con más de dos mil setecientos metros, se alza en pleno bosque nuboso casi siempre envuelto en niebla.",
      price: 2500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 68,
    },
    chapters: [
      {
        title: "Le lac Yojoa",
        titleEn: "Lake Yojoa",
        titleEs: "El lago Yojoa",
        intro:
          "Premier chapitre au lac Yojoa, seul lac naturel d'importance du Honduras, dont les rives accueillent plus de quatre cents espèces d'oiseaux recensées, un record pour un site d'une telle superficie en Amérique centrale. Les collines environnantes, couvertes de plantations de café à l'ombre d'arbres natifs, produisent l'un des cafés les mieux notés du pays, tandis que plusieurs cascades, dont Pulhapanzak haute de plus de quarante mètres, ponctuent les environs.",
        introEn:
          "The first chapter unfolds at Lake Yojoa, Honduras's only major natural lake, whose shores host over four hundred recorded bird species, a record for a site of this size in Central America. The surrounding hills, covered in shade-grown coffee plantations beneath native trees, produce some of the country's best-rated coffee, while several waterfalls, including Pulhapanzak, over forty metres high, punctuate the area.",
        introEs:
          "El primer capítulo se desarrolla en el lago Yojoa, el único lago natural importante de Honduras, cuyas orillas albergan más de cuatrocientas especies de aves registradas, un récord para un lugar de este tamaño en Centroamérica. Las colinas circundantes, cubiertas de plantaciones de café a la sombra de árboles nativos, producen uno de los cafés mejor valorados del país, mientras que varias cascadas, entre ellas Pulhapanzak, de más de cuarenta metros de altura, salpican los alrededores.",
        galleryImages: `${R2}/journeys/honduras-yojoa-gallery1.jpg,${R2}/journeys/honduras-yojoa-gallery2.jpg,${R2}/journeys/honduras-yojoa-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Observation ornithologique sur le lac",
            titleEn: "Birdwatching on the lake",
            titleEs: "Observación ornitológica en el lago",
            description:
              "Sortie en bateau sur le lac Yojoa au lever du jour, moment le plus propice pour observer martins-pêcheurs, aigrettes et parfois l'aigle pêcheur, dans l'un des meilleurs sites ornithologiques d'Amérique centrale.",
            descriptionEn:
              "A boat outing on Lake Yojoa at daybreak, the best time to observe kingfishers, egrets, and sometimes the osprey, in one of Central America's best birdwatching sites.",
            descriptionEs:
              "Salida en barco por el lago Yojoa al amanecer, el momento más propicio para observar martines pescadores, garzas y a veces el águila pescadora, en uno de los mejores lugares ornitológicos de Centroamérica.",
            image: `${R2}/journeys/honduras-yojoa-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Plantation de café et cascade de Pulhapanzak",
            titleEn: "A coffee plantation and Pulhapanzak Falls",
            titleEs: "Plantación de café y la cascada de Pulhapanzak",
            description:
              "Visite d'une plantation de café cultivé à l'ombre sur les collines environnantes, puis excursion à la cascade de Pulhapanzak, dont le rideau d'eau de plus de quarante mètres peut s'observer d'aussi près qu'à quelques mètres derrière le rideau lui-même.",
            descriptionEn:
              "A visit to a shade-grown coffee plantation on the surrounding hills, then an excursion to Pulhapanzak Falls, whose curtain of water over forty metres high can be observed from just metres behind the falls themselves.",
            descriptionEs:
              "Visita a una plantación de café cultivado a la sombra en las colinas circundantes, y excursión a la cascada de Pulhapanzak, cuya cortina de agua de más de cuarenta metros puede observarse desde apenas unos metros detrás de la propia cortina.",
            image: `${R2}/journeys/honduras-yojoa-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le parc national de Celaque",
        titleEn: "Celaque National Park",
        titleEs: "El parque nacional de Celaque",
        intro:
          "Route vers le parc national de Celaque, dont le nom signifie « boîte d'eau » en langue lenca, en référence aux nombreuses rivières qui prennent leur source sur ses pentes. Le Cerro Las Minas, point culminant du Honduras à plus de deux mille sept cents mètres, se rejoint par un sentier traversant une forêt de nuages où chênes et pins centenaires disparaissent régulièrement dans la brume, offrant une expérience de randonnée radicalement différente du reste du pays.",
        introEn:
          "The road to Celaque National Park, whose name means \"water box\" in the Lenca language, a reference to the many rivers that rise on its slopes. Cerro Las Minas, Honduras's highest point at over two thousand seven hundred metres, is reached via a trail crossing a cloud forest where centuries-old oaks and pines regularly vanish into the mist, offering a hiking experience radically different from the rest of the country.",
        introEs:
          "Ruta hacia el parque nacional de Celaque, cuyo nombre significa «caja de agua» en lengua lenca, en referencia a los numerosos ríos que nacen en sus laderas. El Cerro Las Minas, el punto más alto de Honduras con más de dos mil setecientos metros, se alcanza por un sendero que atraviesa un bosque nuboso donde robles y pinos centenarios desaparecen con regularidad entre la niebla, ofreciendo una experiencia de senderismo radicalmente distinta al resto del país.",
        galleryImages: `${R2}/journeys/honduras-celaque-gallery1.jpg,${R2}/journeys/honduras-celaque-gallery2.jpg,${R2}/journeys/honduras-celaque-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Entrée dans la forêt de nuages",
            titleEn: "Entering the cloud forest",
            titleEs: "Entrada en el bosque nuboso",
            description:
              "Départ à pied à travers la forêt de nuages de Celaque, où chênes et pins centenaires couverts de mousse et d'épiphytes créent une atmosphère quasi surnaturelle, nuit en refuge de montagne.",
            descriptionEn:
              "A departure on foot through the Celaque cloud forest, where centuries-old oaks and pines covered in moss and epiphytes create an almost otherworldly atmosphere, an overnight stay at a mountain refuge.",
            descriptionEs:
              "Salida a pie por el bosque nuboso de Celaque, donde robles y pinos centenarios cubiertos de musgo y epífitas crean una atmósfera casi sobrenatural, noche en un refugio de montaña.",
            image: `${R2}/journeys/honduras-celaque-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Ascension du Cerro Las Minas",
            titleEn: "The climb up Cerro Las Minas",
            titleEs: "Ascensión al Cerro Las Minas",
            description:
              "Ascension jusqu'au sommet du Cerro Las Minas, point culminant du Honduras, avec une vue qui s'étend par temps dégagé jusqu'au Salvador et au Guatemala voisins, avant la longue redescente vers le point de départ.",
            descriptionEn:
              "A climb to the summit of Cerro Las Minas, Honduras's highest point, with views extending on a clear day as far as neighbouring El Salvador and Guatemala, before the long descent back to the starting point.",
            descriptionEs:
              "Ascensión hasta la cima del Cerro Las Minas, el punto más alto de Honduras, con vistas que en días despejados llegan hasta los vecinos El Salvador y Guatemala, antes del largo descenso hacia el punto de partida.",
            image: `${R2}/journeys/honduras-celaque-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "nicaragua",
    tour: {
      name: "Nicaragua : León et les Corn Islands",
      nameEn: "Nicaragua: León and the Corn Islands",
      nameEs: "Nicaragua: León y las Corn Islands",
      slug: "nicaragua-leon-corn-islands",
      image: `${R2}/journeys/nicaragua-leon-cornislands-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une capitale intellectuelle rivale de Grenade, dévalée en planche sur un volcan noir, puis des îles caribéennes créoles à l'anglaise",
      taglineEn: "An intellectual capital rivalling Granada, ridden down a black volcano on a board, then English-speaking Creole Caribbean islands",
      taglineEs: "Una capital intelectual rival de Granada, descendida en tabla por un volcán negro, y después islas caribeñas criollas de habla inglesa",
      description:
        "Un voyage entre deux Nicaragua que tout oppose : León, rivale historique de Grenade et berceau de la révolution sandiniste, dont les églises baroques classées à l'UNESCO côtoient le Cerro Negro, volcan de cendres noires dévalé en planche de bois à plus de quatre-vingts kilomètres à l'heure, puis les Corn Islands, deux îlots caribéens à la culture créole anglophone, aux antipodes du Nicaragua hispanophone du Pacifique.",
      descriptionEn:
        "A journey between two Nicaraguas that could not be more different: León, Granada's historic rival and the birthplace of the Sandinista revolution, whose UNESCO-listed baroque churches sit alongside Cerro Negro, a black-ash volcano ridden down on a wooden board at speeds over eighty kilometres per hour, then the Corn Islands, two Caribbean islets with an English-speaking Creole culture, worlds away from Spanish-speaking Pacific Nicaragua.",
      descriptionEs:
        "Un viaje entre dos Nicaraguas completamente opuestas: León, rival histórica de Granada y cuna de la revolución sandinista, cuyas iglesias barrocas declaradas por la UNESCO conviven con el Cerro Negro, un volcán de cenizas negras que se desciende en tabla de madera a más de ochenta kilómetros por hora, y después las Corn Islands, dos islotes caribeños de cultura criolla anglófona, en las antípodas de la Nicaragua hispanohablante del Pacífico.",
      price: 3400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
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
      order: 69,
    },
    chapters: [
      {
        title: "León et le volcan Cerro Negro",
        titleEn: "León and Cerro Negro Volcano",
        titleEs: "León y el volcán Cerro Negro",
        intro:
          "Premier chapitre à León, fondée en 1610 et berceau intellectuel du Nicaragua, dont la cathédrale, la plus grande d'Amérique centrale, classée à l'UNESCO, abrite la tombe du poète Rubén Darío, figure fondatrice de la littérature latino-américaine moderne. À une heure de route, le Cerro Negro, volcan le plus jeune d'Amérique centrale né en 1850, se descend en planche de bois sur ses pentes de cendres noires, une activité popularisée localement sous le nom de « volcano boarding ».",
        introEn:
          "The first chapter unfolds in León, founded in 1610 and Nicaragua's intellectual cradle, whose cathedral, the largest in Central America and UNESCO-listed, holds the tomb of poet Rubén Darío, a founding figure of modern Latin American literature. An hour's drive away, Cerro Negro, Central America's youngest volcano, born in 1850, is descended on a wooden board down its black ash slopes, an activity locally popularised as \"volcano boarding.\"",
        introEs:
          "El primer capítulo se desarrolla en León, fundada en 1610 y cuna intelectual de Nicaragua, cuya catedral, la más grande de Centroamérica y declarada por la UNESCO, alberga la tumba del poeta Rubén Darío, figura fundadora de la literatura latinoamericana moderna. A una hora en coche, el Cerro Negro, el volcán más joven de Centroamérica nacido en 1850, se desciende en tabla de madera por sus laderas de ceniza negra, una actividad popularizada localmente como «volcano boarding».",
        galleryImages: `${R2}/journeys/nicaragua-leon-gallery1.jpg,${R2}/journeys/nicaragua-leon-gallery2.jpg,${R2}/journeys/nicaragua-leon-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "La cathédrale de León et ses fresques murales",
            titleEn: "León's cathedral and its murals",
            titleEs: "La catedral de León y sus murales",
            description:
              "Visite de la cathédrale de León, la plus grande d'Amérique centrale, dont les toits-terrasses offrent une vue sur la chaîne de volcans environnante, puis promenade parmi les fresques murales sandinistes qui recouvrent plusieurs pâtés de maisons du centre.",
            descriptionEn:
              "A visit to León's cathedral, the largest in Central America, whose rooftop terraces offer a view of the surrounding volcano chain, then a walk among the Sandinista murals covering several blocks of the centre.",
            descriptionEs:
              "Visita a la catedral de León, la más grande de Centroamérica, cuyos tejados en terraza ofrecen vistas a la cadena de volcanes circundante, y paseo entre los murales sandinistas que cubren varias manzanas del centro.",
            image: `${R2}/journeys/nicaragua-leon-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le volcano boarding du Cerro Negro",
            titleEn: "Volcano boarding at Cerro Negro",
            titleEs: "Volcano boarding en el Cerro Negro",
            description:
              "Ascension du Cerro Negro, volcan le plus jeune d'Amérique centrale, puis descente en planche de bois sur ses pentes de cendres noires à plus de quatre-vingts kilomètres à l'heure, une activité née dans la région dans les années 2000.",
            descriptionEn:
              "A climb up Cerro Negro, Central America's youngest volcano, then a wooden-board descent down its black ash slopes at over eighty kilometres per hour, an activity born in the region in the 2000s.",
            descriptionEs:
              "Ascensión al Cerro Negro, el volcán más joven de Centroamérica, y descenso en tabla de madera por sus laderas de ceniza negra a más de ochenta kilómetros por hora, una actividad nacida en la región en la década de 2000.",
            image: `${R2}/journeys/nicaragua-leon-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Les Corn Islands",
        titleEn: "The Corn Islands",
        titleEs: "Las Corn Islands",
        intro:
          "Vol vers les Corn Islands, deux îlots caribéens à l'écart des circuits touristiques du Pacifique nicaraguayen, peuplés d'une communauté créole anglophone dont les origines remontent aux corsaires et pêcheurs des Petites Antilles. L'anglais y reste la langue dominante, tout comme le reggae et une cuisine à base de rondon, ragoût de fruits de mer au lait de coco, dans une ambiance radicalement différente du reste du pays.",
        introEn:
          "A flight to the Corn Islands, two Caribbean islets off the beaten path of Nicaragua's Pacific tourist circuits, populated by an English-speaking Creole community whose origins trace back to privateers and fishermen from the Lesser Antilles. English remains the dominant language there, as does reggae and a cuisine built around rondon, a coconut-milk seafood stew, in an atmosphere radically different from the rest of the country.",
        introEs:
          "Vuelo hacia las Corn Islands, dos islotes caribeños al margen de los circuitos turísticos del Pacífico nicaragüense, poblados por una comunidad criolla anglófona cuyos orígenes se remontan a corsarios y pescadores de las Antillas Menores. El inglés sigue siendo allí la lengua dominante, al igual que el reggae y una cocina a base de rondón, guiso de marisco con leche de coco, en un ambiente radicalmente distinto al resto del país.",
        galleryImages: `${R2}/journeys/nicaragua-cornislands-gallery1.jpg,${R2}/journeys/nicaragua-cornislands-gallery2.jpg,${R2}/journeys/nicaragua-cornislands-gallery3.jpg`,
        mapMarkerX: 80,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Little Corn Island sans voitures",
            titleEn: "Car-free Little Corn Island",
            titleEs: "Little Corn Island sin coches",
            description:
              "Vol puis traversée en bateau vers Little Corn Island, îlot sans voitures ni routes goudronnées, où l'on se déplace uniquement à pied entre les plages de sable blanc et les récifs coralliens proches du rivage.",
            descriptionEn:
              "A flight then a boat crossing to Little Corn Island, a car-free islet with no paved roads, where movement is entirely on foot between white-sand beaches and coral reefs close to shore.",
            descriptionEs:
              "Vuelo y travesía en barco hacia Little Corn Island, un islote sin coches ni carreteras asfaltadas, donde solo se puede desplazar a pie entre playas de arena blanca y arrecifes de coral cercanos a la orilla.",
            image: `${R2}/journeys/nicaragua-cornislands-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Plongée et cuisine créole",
            titleEn: "Diving and Creole cuisine",
            titleEs: "Buceo y cocina criolla",
            description:
              "Sortie de plongée sur les récifs préservés autour de l'île, puis atelier de cuisine créole pour préparer le rondon, ragoût de fruits de mer au lait de coco emblématique des Corn Islands.",
            descriptionEn:
              "A dive on the island's pristine surrounding reefs, then a Creole cooking workshop to prepare rondon, the seafood-and-coconut-milk stew emblematic of the Corn Islands.",
            descriptionEs:
              "Salida de buceo por los arrecifes preservados alrededor de la isla, y taller de cocina criolla para preparar el rondón, guiso de marisco con leche de coco emblemático de las Corn Islands.",
            image: `${R2}/journeys/nicaragua-cornislands-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "guyana",
    tour: {
      name: "Guyana : Shell Beach et les chutes d'Orinduik",
      nameEn: "Guyana: Shell Beach and Orinduik Falls",
      nameEs: "Guyana: Shell Beach y las cataratas de Orinduik",
      slug: "guyana-shellbeach-orinduik",
      image: `${R2}/journeys/guyana-shellbeach-orinduik-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une plage où naissent quatre espèces de tortues marines, puis des chutes qui dévalent des marches de jaspe à la frontière du Brésil",
      taglineEn: "A beach where four species of sea turtle are born, then falls cascading over jasper steps on the Brazilian border",
      taglineEs: "Una playa donde nacen cuatro especies de tortugas marinas, y después unas cataratas que descienden por escalones de jaspe en la frontera con Brasil",
      description:
        "Un voyage entre deux Guyana méconnus : Shell Beach, quatre-vingt-dix kilomètres de plage sur la côte atlantique où viennent pondre chaque année quatre espèces de tortues marines, protégées par des communautés amérindiennes formées à la conservation, puis les chutes d'Orinduik, à la frontière du Brésil, où la rivière Ireng dévale une série de terrasses de jaspe rougeâtre au lieu du grès habituel des autres chutes du pays.",
      descriptionEn:
        "A journey between two little-known sides of Guyana: Shell Beach, ninety kilometres of Atlantic coastline where four species of sea turtle nest each year, protected by Amerindian communities trained in conservation, then Orinduik Falls, on the Brazilian border, where the Ireng River cascades over a series of reddish jasper terraces instead of the sandstone typical of the country's other falls.",
      descriptionEs:
        "Un viaje entre dos Guyanas poco conocidas: Shell Beach, noventa kilómetros de costa atlántica donde cada año desovan cuatro especies de tortugas marinas, protegidas por comunidades amerindias formadas en conservación, y después las cataratas de Orinduik, en la frontera con Brasil, donde el río Ireng desciende por una serie de terrazas de jaspe rojizo en lugar de la arenisca habitual de las demás cataratas del país.",
      price: 4100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Mars à juin",
      whenLabelEn: "March to June",
      whenLabelEs: "Marzo a junio",
      bestMonths: "march,april,may,june",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 70,
    },
    chapters: [
      {
        title: "Shell Beach et les tortues marines",
        titleEn: "Shell Beach and the Sea Turtles",
        titleEs: "Shell Beach y las tortugas marinas",
        intro:
          "Premier chapitre à Shell Beach, longue bande de plage atlantique accessible uniquement par bateau, où viennent pondre chaque année quatre espèces de tortues marines, dont la tortue luth, la plus grande de toutes, pouvant peser plus de cinq cents kilogrammes. Les communautés amérindiennes arawak et carib, autrefois chasseurs d'œufs de tortue, se sont converties à la conservation et encadrent aujourd'hui les visites nocturnes sur la plage.",
        introEn:
          "The first chapter unfolds at Shell Beach, a long stretch of Atlantic coastline reachable only by boat, where four species of sea turtle nest each year, including the leatherback, the largest of all, which can weigh over five hundred kilograms. The Arawak and Carib Amerindian communities, once turtle-egg hunters, have turned to conservation and now oversee the night visits to the beach.",
        introEs:
          "El primer capítulo se desarrolla en Shell Beach, una larga franja de costa atlántica accesible solo en barco, donde cada año desovan cuatro especies de tortugas marinas, entre ellas la tortuga laúd, la más grande de todas, que puede pesar más de quinientos kilogramos. Las comunidades amerindias arawak y carib, antes cazadoras de huevos de tortuga, se han convertido a la conservación y hoy supervisan las visitas nocturnas a la playa.",
        galleryImages: `${R2}/journeys/guyana-shellbeach-gallery1.jpg,${R2}/journeys/guyana-shellbeach-gallery2.jpg,${R2}/journeys/guyana-shellbeach-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Navigation vers Shell Beach",
            titleEn: "The journey to Shell Beach",
            titleEs: "Navegación hacia Shell Beach",
            description:
              "Navigation en bateau le long de la côte atlantique jusqu'à Shell Beach, installation dans un campement géré par la communauté amérindienne locale, dédiée à la protection des tortues marines.",
            descriptionEn:
              "A boat journey along the Atlantic coast to Shell Beach, settling into a camp run by the local Amerindian community, dedicated to protecting sea turtles.",
            descriptionEs:
              "Navegación en barco a lo largo de la costa atlántica hasta Shell Beach, instalación en un campamento gestionado por la comunidad amerindia local, dedicada a la protección de las tortugas marinas.",
            image: `${R2}/journeys/guyana-shellbeach-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sortie nocturne sur la plage aux tortues",
            titleEn: "A night outing on the turtle beach",
            titleEs: "Salida nocturna en la playa de las tortugas",
            description:
              "Sortie nocturne guidée le long de la plage pour assister, à distance respectueuse, à la ponte des tortues marines, encadrée par des rangers communautaires formés à la conservation des espèces menacées.",
            descriptionEn:
              "A guided night outing along the beach to witness, from a respectful distance, sea turtles nesting, overseen by community rangers trained in the conservation of endangered species.",
            descriptionEs:
              "Salida nocturna guiada a lo largo de la playa para presenciar, a una distancia respetuosa, la puesta de las tortugas marinas, supervisada por guardaparques comunitarios formados en la conservación de especies amenazadas.",
            image: `${R2}/journeys/guyana-shellbeach-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Les chutes d'Orinduik",
        titleEn: "Orinduik Falls",
        titleEs: "Las cataratas de Orinduik",
        intro:
          "Vol vers les chutes d'Orinduik, à la frontière du Brésil, où la rivière Ireng dévale une série de larges terrasses naturelles de jaspe rougeâtre, une particularité géologique rare qui distingue ces chutes des autres cascades du pays, généralement formées de grès. La baignade dans les bassins naturels au pied des terrasses reste possible presque toute l'année, entourée d'une savane qui s'étend jusqu'à l'horizon brésilien.",
        introEn:
          "A flight to Orinduik Falls, on the Brazilian border, where the Ireng River cascades over a series of wide natural terraces of reddish jasper, a rare geological feature that sets these falls apart from the country's other cascades, usually formed of sandstone. Swimming in the natural pools at the foot of the terraces remains possible almost year-round, surrounded by savanna stretching to the Brazilian horizon.",
        introEs:
          "Vuelo hacia las cataratas de Orinduik, en la frontera con Brasil, donde el río Ireng desciende por una serie de amplias terrazas naturales de jaspe rojizo, una particularidad geológica rara que distingue estas cataratas de las demás cascadas del país, generalmente formadas de arenisca. El baño en las piscinas naturales al pie de las terrazas sigue siendo posible casi todo el año, rodeado de una sabana que se extiende hasta el horizonte brasileño.",
        galleryImages: `${R2}/journeys/guyana-orinduik-gallery1.jpg,${R2}/journeys/guyana-orinduik-gallery2.jpg,${R2}/journeys/guyana-orinduik-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Vol vers Orinduik et premières terrasses de jaspe",
            titleEn: "Flight to Orinduik and the first jasper terraces",
            titleEs: "Vuelo a Orinduik y primeras terrazas de jaspe",
            description:
              "Vol en petit avion au-dessus de la savane du Rupununi jusqu'aux chutes d'Orinduik, première baignade dans les bassins naturels formés par les terrasses de jaspe rougeâtre.",
            descriptionEn:
              "A light aircraft flight over the Rupununi savanna to Orinduik Falls, a first swim in the natural pools formed by the reddish jasper terraces.",
            descriptionEs:
              "Vuelo en avioneta sobre la sabana del Rupununi hasta las cataratas de Orinduik, primer baño en las piscinas naturales formadas por las terrazas de jaspe rojizo.",
            image: `${R2}/journeys/guyana-orinduik-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Pique-nique à la frontière du Brésil",
            titleEn: "A picnic on the Brazilian border",
            titleEs: "Picnic en la frontera con Brasil",
            description:
              "Journée libre autour des chutes d'Orinduik, pique-nique face à la frontière brésilienne visible depuis les terrasses de jaspe, avant le vol retour vers Georgetown en fin de journée.",
            descriptionEn:
              "A free day around Orinduik Falls, a picnic facing the Brazilian border visible from the jasper terraces, before the return flight to Georgetown at the end of the day.",
            descriptionEs:
              "Día libre en torno a las cataratas de Orinduik, picnic frente a la frontera brasileña visible desde las terrazas de jaspe, antes del vuelo de regreso a Georgetown al final del día.",
            image: `${R2}/journeys/guyana-orinduik-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "honduras",
    tour: {
      name: "Honduras : Pico Bonito, la jungle entre montagne et mer",
      nameEn: "Honduras: Pico Bonito, the Jungle Between Mountain and Sea",
      nameEs: "Honduras: Pico Bonito, la selva entre montaña y mar",
      slug: "honduras-pico-bonito",
      image: `${R2}/tours/honduras-pico-bonito.jpg`,
      images: `${R2}/trips/honduras-picobonito-gallery-1.jpg,${R2}/trips/honduras-picobonito-gallery-2.jpg,${R2}/trips/honduras-picobonito-gallery-3.jpg,${R2}/trips/honduras-picobonito-gallery-4.jpg,${R2}/trips/honduras-picobonito-gallery-5.jpg,${R2}/trips/honduras-picobonito-gallery-6.jpg`,
      tagline: "Une montagne qui plonge directement dans les Caraïbes, entre rivières à rafting et cascades cachées",
      taglineEn: "A mountain that plunges straight into the Caribbean, between rafting rivers and hidden waterfalls",
      taglineEs: "Una montaña que se sumerge directamente en el Caribe, entre ríos para hacer rafting y cascadas escondidas",
      description:
        "Le parc national Pico Bonito, près de La Ceiba sur la côte caraïbe du Honduras, s'étend d'un sommet culminant à plus de deux mille sept cents mètres jusqu'à quelques kilomètres seulement de la mer, créant un dénivelé exceptionnel qui concentre plusieurs écosystèmes tropicaux sur un territoire restreint. La rivière Cangrejal, qui dévale ses pentes, compte parmi les meilleurs spots de rafting en eaux vives d'Amérique centrale.",
      descriptionEn:
        "Pico Bonito National Park, near La Ceiba on Honduras's Caribbean coast, stretches from a summit rising over two thousand seven hundred metres to just a few kilometres from the sea, creating an exceptional elevation range that concentrates several tropical ecosystems within a small territory. The Cangrejal River, rushing down its slopes, ranks among Central America's best whitewater rafting spots.",
      descriptionEs:
        "El parque nacional Pico Bonito, cerca de La Ceiba en la costa caribeña de Honduras, se extiende desde una cumbre que supera los dos mil setecientos metros hasta apenas unos kilómetros del mar, creando un desnivel excepcional que concentra varios ecosistemas tropicales en un territorio reducido. El río Cangrejal, que desciende por sus laderas, se cuenta entre los mejores lugares de rafting en aguas bravas de Centroamérica.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Fév à mai",
      whenLabelEn: "Feb to May",
      whenLabelEs: "Feb a mayo",
      bestMonths: "february,march,april,may",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 71,
    },
    sections: [
      {
        heading: "Rafting sur la rivière Cangrejal",
        headingEn: "Rafting on the Cangrejal River",
        headingEs: "Rafting en el río Cangrejal",
        body:
          "La rivière Cangrejal, alimentée par les précipitations abondantes du parc, offre des rapides classés jusqu'à la catégorie IV, encadrés par des guides formés aux standards internationaux. Les tronçons plus calmes, en amont, permettent une descente en tubing pour une expérience plus contemplative, entourée d'une forêt tropicale humide particulièrement dense.",
        bodyEn:
          "The Cangrejal River, fed by the park's abundant rainfall, offers rapids classed up to category IV, guided by staff trained to international standards. The calmer stretches upstream allow a tubing descent for a more contemplative experience, surrounded by particularly dense humid rainforest.",
        bodyEs:
          "El río Cangrejal, alimentado por las abundantes precipitaciones del parque, ofrece rápidos clasificados hasta la categoría IV, guiados por personal formado según estándares internacionales. Los tramos más tranquilos, río arriba, permiten un descenso en tubing para una experiencia más contemplativa, rodeada de una selva tropical húmeda particularmente densa.",
      },
      {
        heading: "Les cascades cachées et l'observation ornithologique",
        headingEn: "Hidden waterfalls and birdwatching",
        headingEs: "Las cascadas escondidas y la observación ornitológica",
        body:
          "Plusieurs sentiers de randonnée mènent à des cascades isolées nichées dans la forêt, dont certaines n'ont été cartographiées que récemment. Le parc, qui abrite plus de quatre cents espèces d'oiseaux recensées, reste l'un des meilleurs sites d'Amérique centrale pour observer le quetzal resplendissant et le toucan à carène, dans des sentiers accessibles dès le lever du jour.",
        bodyEn:
          "Several hiking trails lead to isolated waterfalls tucked into the forest, some only mapped in recent years. The park, home to over four hundred recorded bird species, remains one of Central America's best sites to observe the resplendent quetzal and the keel-billed toucan, on trails accessible from first light.",
        bodyEs:
          "Varios senderos de senderismo conducen a cascadas aisladas escondidas en el bosque, algunas cartografiadas solo recientemente. El parque, que alberga más de cuatrocientas especies de aves registradas, sigue siendo uno de los mejores lugares de Centroamérica para observar el quetzal resplandeciente y el tucán pico iris, en senderos accesibles desde el amanecer.",
      },
    ],
    hotels: [
      {
        name: "The Lodge at Pico Bonito",
        nameEn: "The Lodge at Pico Bonito",
        nameEs: "The Lodge at Pico Bonito",
        description:
          "Un lodge en pleine réserve privée de quatre cents hectares, bungalows en bois surélevés reliés par des sentiers forestiers, piscine naturelle alimentée par une source de montagne.",
        descriptionEn:
          "A lodge within a private four-hundred-hectare reserve, raised wooden bungalows linked by forest trails, a natural pool fed by a mountain spring.",
        descriptionEs:
          "Un lodge en plena reserva privada de cuatrocientas hectáreas, bungalós de madera elevados conectados por senderos forestales, piscina natural alimentada por un manantial de montaña.",
        image: `${R2}/trips/honduras-picobonito-hotel-lodge.jpg`,
      },
      {
        name: "Omega Tours Jungle Lodge",
        nameEn: "Omega Tours Jungle Lodge",
        nameEs: "Omega Tours Jungle Lodge",
        description:
          "Un camp plus simple en bord de rivière Cangrejal, spécialisé dans les activités de rafting et de canyoning, ambiance conviviale autour d'un restaurant commun.",
        descriptionEn:
          "A simpler camp on the banks of the Cangrejal River, specialising in rafting and canyoning activities, a friendly atmosphere around a shared restaurant.",
        descriptionEs:
          "Un campamento más sencillo a orillas del río Cangrejal, especializado en actividades de rafting y barranquismo, ambiente cordial en torno a un restaurante común.",
        image: `${R2}/trips/honduras-picobonito-hotel-omega.jpg`,
      },
    ],
  },
  {
    destinationSlug: "nicaragua",
    tour: {
      name: "Nicaragua : San Juan del Sur, la côte Pacifique du surf",
      nameEn: "Nicaragua: San Juan del Sur, the Pacific Surf Coast",
      nameEs: "Nicaragua: San Juan del Sur, la costa pacífica del surf",
      slug: "nicaragua-sanjuandelsur",
      image: `${R2}/tours/nicaragua-sanjuandelsur.jpg`,
      images: `${R2}/trips/nicaragua-sjds-gallery-1.jpg,${R2}/trips/nicaragua-sjds-gallery-2.jpg,${R2}/trips/nicaragua-sjds-gallery-3.jpg,${R2}/trips/nicaragua-sjds-gallery-4.jpg,${R2}/trips/nicaragua-sjds-gallery-5.jpg,${R2}/trips/nicaragua-sjds-gallery-6.jpg`,
      tagline: "Des vagues constantes toute l'année, dans l'un des derniers repaires de surf encore abordables d'Amérique centrale",
      taglineEn: "Consistent waves all year round, in one of Central America's last affordable surf havens",
      taglineEs: "Olas constantes todo el año, en uno de los últimos refugios de surf todavía asequibles de Centroamérica",
      description:
        "San Juan del Sur, ancien village de pêcheurs sur la côte Pacifique du Nicaragua, s'est transformé en destination surf reconnue grâce à des vents thermiques réguliers qui garantissent des conditions favorables presque toute l'année. Les plages voisines de Maderas et Hermosa, moins fréquentées que la baie principale, offrent des vagues adaptées aussi bien aux débutants qu'aux surfeurs expérimentés, dans un décor de collines sèches qui plongent directement dans l'océan.",
      descriptionEn:
        "San Juan del Sur, a former fishing village on Nicaragua's Pacific coast, has become a recognised surf destination thanks to steady thermal winds that guarantee favourable conditions almost year-round. The nearby beaches of Maderas and Hermosa, less crowded than the main bay, offer waves suited to both beginners and experienced surfers, set against dry hills plunging straight into the ocean.",
      descriptionEs:
        "San Juan del Sur, antiguo pueblo de pescadores en la costa pacífica de Nicaragua, se ha convertido en un destino de surf reconocido gracias a vientos térmicos regulares que garantizan condiciones favorables casi todo el año. Las playas vecinas de Maderas y Hermosa, menos concurridas que la bahía principal, ofrecen olas aptas tanto para principiantes como para surfistas experimentados, en un decorado de colinas secas que caen directamente al océano.",
      price: 2200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mars-mai | Nov-déc",
      whenLabelEn: "March-May | Nov-Dec",
      whenLabelEs: "Marzo-mayo | nov-dic",
      bestMonths: "march,april,may,november,december",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 72,
    },
    sections: [
      {
        heading: "Les plages de Maderas et Hermosa",
        headingEn: "Maderas and Hermosa beaches",
        headingEs: "Las playas de Maderas y Hermosa",
        body:
          "La plage de Maderas, accessible par une piste non goudronnée, reste l'un des spots favoris des surfeurs débutants grâce à des vagues régulières et peu puissantes, tandis que la plage Hermosa, plus exposée, attire les surfeurs confirmés en quête de vagues plus creuses. Des cours particuliers avec des moniteurs locaux permettent une progression rapide, quel que soit le niveau de départ.",
        bodyEn:
          "Maderas beach, reached via an unpaved track, remains a favourite spot for beginner surfers thanks to steady, gentle waves, while Hermosa beach, more exposed, attracts experienced surfers seeking hollower breaks. Private lessons with local instructors allow rapid progress, regardless of starting level.",
        bodyEs:
          "La playa de Maderas, accesible por una pista sin asfaltar, sigue siendo uno de los lugares favoritos de los surfistas principiantes gracias a olas regulares y poco potentes, mientras que la playa Hermosa, más expuesta, atrae a surfistas experimentados en busca de olas más huecas. Las clases particulares con monitores locales permiten un progreso rápido, sea cual sea el nivel de partida.",
      },
      {
        heading: "La baie de San Juan et ses couchers de soleil",
        headingEn: "San Juan Bay and its sunsets",
        headingEs: "La bahía de San Juan y sus atardeceres",
        body:
          "La baie principale de San Juan del Sur, en forme de fer à cheval, offre des couchers de soleil réputés dans toute l'Amérique centrale, observables depuis les bars de plage installés directement sur le sable. La statue du Christ de la Miséricorde, perchée sur une colline dominant la baie, offre une vue d'ensemble accessible après une courte randonnée.",
        bodyEn:
          "The horseshoe-shaped main bay of San Juan del Sur offers sunsets renowned throughout Central America, best observed from the beach bars set up directly on the sand. The statue of Christ of Mercy, perched on a hill overlooking the bay, offers a panoramic view reached after a short hike.",
        bodyEs:
          "La bahía principal de San Juan del Sur, en forma de herradura, ofrece atardeceres célebres en toda Centroamérica, observables desde los bares de playa instalados directamente sobre la arena. La estatua del Cristo de la Misericordia, encaramada en una colina que domina la bahía, ofrece una vista de conjunto accesible tras una breve caminata.",
      },
    ],
    hotels: [
      {
        name: "Selina San Juan del Sur",
        nameEn: "Selina San Juan del Sur",
        nameEs: "Selina San Juan del Sur",
        description:
          "Un hôtel décontracté en bord de plage, terrasse commune propice aux rencontres entre voyageurs, cours de surf organisés directement sur place.",
        descriptionEn:
          "A laid-back beachfront hotel, a shared terrace ideal for meeting fellow travellers, surf lessons organised directly on-site.",
        descriptionEs:
          "Un hotel relajado frente a la playa, terraza común propicia para conocer a otros viajeros, clases de surf organizadas directamente in situ.",
        image: `${R2}/trips/nicaragua-sjds-hotel-selina.jpg`,
      },
      {
        name: "Hotel Victoriano",
        nameEn: "Hotel Victoriano",
        nameEs: "Hotel Victoriano",
        description:
          "Un hôtel plus intimiste au cœur du village, architecture coloniale rénovée, piscine sur le toit avec vue sur la baie.",
        descriptionEn:
          "A more intimate hotel at the heart of the village, renovated colonial architecture, a rooftop pool overlooking the bay.",
        descriptionEs:
          "Un hotel más íntimo en el corazón del pueblo, arquitectura colonial renovada, piscina en la azotea con vistas a la bahía.",
        image: `${R2}/trips/nicaragua-sjds-hotel-victoriano.jpg`,
      },
    ],
  },
  {
    destinationSlug: "guyana",
    tour: {
      name: "Guyana : la savane du Rupununi",
      nameEn: "Guyana: The Rupununi Savanna",
      nameEs: "Guyana: la sabana del Rupununi",
      slug: "guyana-rupununi",
      image: `${R2}/tours/guyana-rupununi.jpg`,
      images: `${R2}/trips/guyana-rupununi-gallery-1.jpg,${R2}/trips/guyana-rupununi-gallery-2.jpg,${R2}/trips/guyana-rupununi-gallery-3.jpg,${R2}/trips/guyana-rupununi-gallery-4.jpg,${R2}/trips/guyana-rupununi-gallery-5.jpg,${R2}/trips/guyana-rupununi-gallery-6.jpg`,
      tagline: "Des fourmiliers géants et des cow-boys amérindiens, dans l'une des dernières grandes savanes préservées d'Amérique du Sud",
      taglineEn: "Giant anteaters and Amerindian cowboys, in one of South America's last great preserved savannas",
      taglineEs: "Osos hormigueros gigantes y vaqueros amerindios, en una de las últimas grandes sabanas preservadas de Sudamérica",
      description:
        "La savane du Rupununi, dans le sud reculé du Guyana à la frontière du Brésil, offre un paysage radicalement différent de la forêt tropicale qui couvre le reste du pays : des étendues d'herbes à perte de vue, ponctuées de fourmiliers géants, de tatous et de troupeaux gérés depuis des générations par des ranchers amérindiens à cheval. La région, l'une des moins peuplées et des moins visitées d'Amérique du Sud, reste presque exclusivement accessible par avion léger.",
      descriptionEn:
        "The Rupununi savanna, in Guyana's remote south on the Brazilian border, offers a landscape radically different from the rainforest covering the rest of the country: grasslands stretching to the horizon, dotted with giant anteaters, armadillos, and cattle herds managed for generations by Amerindian ranchers on horseback. The region, one of the least populated and least visited in South America, remains accessible almost exclusively by light aircraft.",
      descriptionEs:
        "La sabana del Rupununi, en el remoto sur de Guyana en la frontera con Brasil, ofrece un paisaje radicalmente distinto de la selva tropical que cubre el resto del país: extensiones de hierba que se pierden en el horizonte, salpicadas de osos hormigueros gigantes, armadillos y manadas de ganado gestionadas durante generaciones por rancheros amerindios a caballo. La región, una de las menos pobladas y menos visitadas de Sudamérica, sigue siendo accesible casi exclusivamente en avioneta.",
      price: 3800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Sept à nov | Fév-mars",
      whenLabelEn: "Sept to Nov | Feb-March",
      whenLabelEs: "Sept a nov | feb-marzo",
      bestMonths: "september,october,november,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 73,
    },
    sections: [
      {
        heading: "Les ranchs et les cow-boys vaqueros",
        headingEn: "The ranches and the vaquero cowboys",
        headingEs: "Los ranchos y los vaqueros",
        body:
          "Les ranchs du Rupununi, certains en activité depuis plus d'un siècle, sont gérés par des communautés amérindiennes macushi et wapishana selon des méthodes d'élevage extensif adaptées au climat de savane. Un séjour dans l'un de ces ranchs familiaux permet de participer aux activités quotidiennes, du rassemblement du bétail à cheval jusqu'aux repas préparés selon des recettes traditionnelles.",
        bodyEn:
          "The Rupununi's ranches, some active for over a century, are run by Macushi and Wapishana Amerindian communities using extensive livestock-raising methods suited to the savanna climate. A stay at one of these family ranches allows guests to take part in daily activities, from rounding up cattle on horseback to meals prepared using traditional recipes.",
        bodyEs:
          "Los ranchos del Rupununi, algunos en actividad desde hace más de un siglo, están gestionados por comunidades amerindias macushi y wapishana según métodos de cría extensiva adaptados al clima de sabana. Una estancia en uno de estos ranchos familiares permite participar en las actividades cotidianas, desde la reunión del ganado a caballo hasta las comidas preparadas según recetas tradicionales.",
      },
      {
        heading: "Fourmiliers géants et faune de savane",
        headingEn: "Giant anteaters and savanna wildlife",
        headingEs: "Osos hormigueros gigantes y fauna de sabana",
        body:
          "Des safaris en 4x4 ou à cheval au lever et au coucher du soleil, moments où la faune est la plus active, permettent d'observer des fourmiliers géants pouvant mesurer jusqu'à deux mètres de long, des tatous géants et, plus rarement, des jaguars qui traversent parfois les pistes à l'aube. Les zones humides voisines attirent également hoatzins et ibis rouges, dans un paysage qui évoque davantage la savane africaine que l'Amazonie voisine.",
        bodyEn:
          "4x4 or horseback safaris at dawn and dusk, when wildlife is most active, allow sightings of giant anteaters that can measure up to two metres long, giant armadillos, and, more rarely, jaguars that sometimes cross the tracks at daybreak. Nearby wetlands also attract hoatzins and scarlet ibis, in a landscape that evokes the African savanna more than the neighbouring Amazon.",
        bodyEs:
          "Los safaris en 4x4 o a caballo al amanecer y al atardecer, momentos en que la fauna está más activa, permiten observar osos hormigueros gigantes que pueden medir hasta dos metros de largo, armadillos gigantes y, más raramente, jaguares que a veces cruzan las pistas al amanecer. Los humedales cercanos atraen también hoatzines e ibis escarlatas, en un paisaje que evoca más a la sabana africana que a la vecina Amazonía.",
      },
    ],
    hotels: [
      {
        name: "Karanambu Lodge",
        nameEn: "Karanambu Lodge",
        nameEs: "Karanambu Lodge",
        description:
          "Un lodge familial historique au bord de la rivière Rupununi, célèbre pour son programme de réhabilitation des loutres géantes, chambres simples dans un cadre exceptionnel.",
        descriptionEn:
          "A historic family lodge on the banks of the Rupununi River, famous for its giant otter rehabilitation programme, simple rooms in an exceptional setting.",
        descriptionEs:
          "Un histórico lodge familiar a orillas del río Rupununi, célebre por su programa de rehabilitación de nutrias gigantes, habitaciones sencillas en un entorno excepcional.",
        image: `${R2}/trips/guyana-rupununi-hotel-karanambu.jpg`,
      },
      {
        name: "Rock View Lodge",
        nameEn: "Rock View Lodge",
        nameEs: "Rock View Lodge",
        description:
          "Un lodge entouré de vergers et de jardins, géré par une famille anglo-amérindienne installée dans la région depuis plusieurs générations, point de départ pour des excursions dans la savane environnante.",
        descriptionEn:
          "A lodge surrounded by orchards and gardens, run by an Anglo-Amerindian family settled in the region for generations, a base for excursions into the surrounding savanna.",
        descriptionEs:
          "Un lodge rodeado de huertos y jardines, gestionado por una familia angloamerindia asentada en la región desde hace generaciones, punto de partida para excursiones por la sabana circundante.",
        image: `${R2}/trips/guyana-rupununi-hotel-rockview.jpg`,
      },
    ],
  },
];

async function main() {
  const { runSeedBatch, disconnect } = await import("./lib/seedTripsRunner");
  try {
    await runSeedBatch({ newStandardTrips: standardTrips, newJourneyTrips: journeyTrips });
    console.log("\nDone.");
  } finally {
    await disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
