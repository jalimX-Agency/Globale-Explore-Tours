// Amérique du Sud batch 4 — Uruguay, Guatemala, Belize. New trips bringing each destination to
// at least 3, styled on Black Tomato's real structure (a short number of named-hotel chapters,
// not an exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-amerique-du-sud-4.ts
// Requires scripts/upload-images-amerique-du-sud-4.ts to have been run first (this script
// refuses to write anything if a referenced image isn't already live in R2 — see
// seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "uruguay",
    tour: {
      name: "Uruguay : les estancias gauchesques et Cabo Polonio",
      nameEn: "Uruguay: The Gaucho Estancias and Cabo Polonio",
      nameEs: "Uruguay: las estancias gauchescas y Cabo Polonio",
      slug: "uruguay-estancias-cabo-polonio",
      image: `${R2}/journeys/uruguay-estancias-cabopolonio-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une nuit à dormir comme un gaucho, puis un village sans électricité gardé par des lions de mer",
      taglineEn: "A night spent living like a gaucho, then a village with no electricity guarded by sea lions",
      taglineEs: "Una noche viviendo como un gaucho, y después un pueblo sin electricidad custodiado por lobos marinos",
      description:
        "Un voyage dans l'Uruguay le plus rural : les estancias de l'intérieur des terres, où la culture gaucho reste pleinement vivante entre troupeaux de bovins et traditions équestres séculaires, puis Cabo Polonio, village de pêcheurs sans électricité ni route goudronnée, accessible uniquement en camion tout-terrain à travers les dunes, où vit l'une des plus grandes colonies de lions de mer d'Amérique du Sud.",
      descriptionEn:
        "A journey through Uruguay's most rural side: the estancias of the interior, where gaucho culture remains fully alive amid cattle herds and centuries-old equestrian traditions, then Cabo Polonio, a fishing village with no electricity or paved road, reachable only by off-road truck across the dunes, home to one of South America's largest sea lion colonies.",
      descriptionEs:
        "Un viaje por el Uruguay más rural: las estancias del interior, donde la cultura gaucha sigue plenamente viva entre manadas de ganado y tradiciones ecuestres centenarias, y después Cabo Polonio, un pueblo de pescadores sin electricidad ni carretera asfaltada, accesible solo en camión todoterreno a través de las dunas, donde vive una de las mayores colonias de lobos marinos de Sudamérica.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Oct-nov | Mars-avr",
      whenLabelEn: "Oct-Nov | March-April",
      whenLabelEs: "Oct-nov | marzo-abr",
      bestMonths: "october,november,december,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 62,
    },
    chapters: [
      {
        title: "L'estancia gauchesque",
        titleEn: "The Gaucho Estancia",
        titleEs: "La estancia gaucha",
        intro:
          "Premier chapitre dans une estancia de l'intérieur des terres, exploitation agricole traditionnelle où les gauchos, cavaliers emblématiques des plaines sud-américaines, perpétuent des méthodes d'élevage extensif transmises depuis le XIXe siècle. Randonnées à cheval à travers des collines ponctuées de troupeaux de bovins et de moutons, dans un pays qui compte plus de bêtes que d'habitants.",
        introEn:
          "The first chapter unfolds at an inland estancia, a traditional working ranch where gauchos, the emblematic horsemen of the South American plains, keep alive extensive livestock-raising methods passed down since the 19th century. Horseback rides across hills dotted with cattle and sheep, in a country that holds more livestock than people.",
        introEs:
          "El primer capítulo se desarrolla en una estancia del interior, una explotación agrícola tradicional donde los gauchos, jinetes emblemáticos de las llanuras sudamericanas, perpetúan métodos de cría extensiva transmitidos desde el siglo XIX. Cabalgatas por colinas salpicadas de manadas de vacas y ovejas, en un país que cuenta con más cabezas de ganado que habitantes.",
        galleryImages: `${R2}/journeys/uruguay-estancia-gallery1.jpg,${R2}/journeys/uruguay-estancia-gallery2.jpg,${R2}/journeys/uruguay-estancia-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Installation et première chevauchée",
            titleEn: "Arrival and a first ride",
            titleEs: "Instalación y primera cabalgata",
            description:
              "Arrivée à l'estancia, installation dans une chambre d'hôtes rustique, première chevauchée en fin de journée à travers les collines environnantes en compagnie des gauchos résidents.",
            descriptionEn:
              "Arrival at the estancia, check-in at a rustic guesthouse, a first late-afternoon ride across the surrounding hills alongside the resident gauchos.",
            descriptionEs:
              "Llegada a la estancia, instalación en una posada rústica, primera cabalgata al final del día por las colinas circundantes junto a los gauchos residentes.",
            image: `${R2}/journeys/uruguay-estancia-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Journée de travail avec les gauchos",
            titleEn: "A day's work with the gauchos",
            titleEs: "Jornada de trabajo con los gauchos",
            description:
              "Participation à une journée de travail traditionnelle avec les gauchos, rassemblement du bétail à cheval, puis soirée autour d'un asado accompagné de chants folkloriques.",
            descriptionEn:
              "Taking part in a traditional day's work with the gauchos, rounding up cattle on horseback, then an evening around an asado accompanied by folk songs.",
            descriptionEs:
              "Participación en una jornada de trabajo tradicional con los gauchos, reunión del ganado a caballo, y noche en torno a un asado con cantos folclóricos.",
            image: `${R2}/journeys/uruguay-estancia-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Cabo Polonio",
        titleEn: "Cabo Polonio",
        titleEs: "Cabo Polonio",
        intro:
          "Transfert en camion tout-terrain à travers les dunes de sable jusqu'à Cabo Polonio, village de pêcheurs sans réseau électrique public, où chaque maison produit sa propre énergie solaire. Le phare du cap, construit en 1881, surplombe l'une des plus grandes colonies de lions de mer et d'otaries à fourrure d'Amérique du Sud, visibles à quelques mètres seulement des rochers côtiers.",
        introEn:
          "An off-road truck transfer across the sand dunes to Cabo Polonio, a fishing village with no public electricity grid, where every house generates its own solar power. The cape's lighthouse, built in 1881, overlooks one of South America's largest colonies of sea lions and fur seals, visible just metres from the coastal rocks.",
        introEs:
          "Traslado en camión todoterreno a través de las dunas de arena hasta Cabo Polonio, un pueblo de pescadores sin red eléctrica pública, donde cada casa genera su propia energía solar. El faro del cabo, construido en 1881, domina una de las mayores colonias de lobos marinos y osos marinos de Sudamérica, visibles a solo unos metros de las rocas costeras.",
        galleryImages: `${R2}/journeys/uruguay-cabopolonio-gallery1.jpg,${R2}/journeys/uruguay-cabopolonio-gallery2.jpg,${R2}/journeys/uruguay-cabopolonio-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Traversée des dunes et installation",
            titleEn: "Crossing the dunes and settling in",
            titleEs: "Travesía de las dunas e instalación",
            description:
              "Transfert en camion tout-terrain à travers les dunes de sable jusqu'à Cabo Polonio, installation dans une cabane de pêcheur sans électricité, première soirée à la lueur des bougies face à l'océan.",
            descriptionEn:
              "An off-road truck transfer across the sand dunes to Cabo Polonio, settling into a fisherman's cabin with no electricity, a first candlelit evening facing the ocean.",
            descriptionEs:
              "Traslado en camión todoterreno a través de las dunas de arena hasta Cabo Polonio, instalación en una cabaña de pescador sin electricidad, primera noche a la luz de las velas frente al océano.",
            image: `${R2}/journeys/uruguay-cabopolonio-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le phare et la colonie de lions de mer",
            titleEn: "The lighthouse and the sea lion colony",
            titleEs: "El faro y la colonia de lobos marinos",
            description:
              "Montée au phare de Cabo Polonio pour une vue sur la colonie de lions de mer installée sur les rochers voisins, puis journée libre entre plage sauvage et randonnée dans les dunes environnantes.",
            descriptionEn:
              "A climb to the Cabo Polonio lighthouse for a view of the sea lion colony on the nearby rocks, then a free day between the wild beach and a hike through the surrounding dunes.",
            descriptionEs:
              "Subida al faro de Cabo Polonio para ver la colonia de lobos marinos instalada en las rocas vecinas, y día libre entre la playa salvaje y una caminata por las dunas circundantes.",
            image: `${R2}/journeys/uruguay-cabopolonio-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "guatemala",
    tour: {
      name: "Guatemala : Río Dulce et El Mirador, la cité perdue du Petén",
      nameEn: "Guatemala: Río Dulce and El Mirador, the Lost City of the Petén",
      nameEs: "Guatemala: Río Dulce y El Mirador, la ciudad perdida del Petén",
      slug: "guatemala-riodulce-mirador",
      image: `${R2}/journeys/guatemala-riodulce-mirador-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une culture garifuna née de naufragés africains, puis un trek de plusieurs jours vers la plus haute pyramide maya jamais construite",
      taglineEn: "A Garifuna culture born of shipwrecked Africans, then a multi-day trek to the tallest Maya pyramid ever built",
      taglineEs: "Una cultura garífuna nacida de náufragos africanos, y después un trekking de varios días hasta la pirámide maya más alta jamás construida",
      description:
        "Un voyage entre deux Guatemala aux antipodes l'un de l'autre : Livingston et le Río Dulce, seul accès du pays aux Caraïbes, où la culture garifuna, née de la rencontre entre marins africains naufragés et populations indigènes des Petites Antilles au XVIIe siècle, se perpétue en musique et en cuisine, puis El Mirador, cité maya la plus ancienne de la région, dont la pyramide de La Danta, la plus volumineuse jamais construite par les Mayas, ne se rejoint qu'au terme d'un trek de plusieurs jours en pleine jungle du Petén.",
      descriptionEn:
        "A journey between two opposite Guatemalas: Livingston and the Río Dulce, the country's only access to the Caribbean, where Garifuna culture, born from the meeting of shipwrecked African sailors and Indigenous peoples of the Lesser Antilles in the 17th century, lives on through music and food, then El Mirador, the region's oldest Maya city, whose La Danta pyramid, the most voluminous ever built by the Maya, can only be reached after a multi-day trek deep into the Petén jungle.",
      descriptionEs:
        "Un viaje entre dos Guatemalas opuestas: Livingston y el Río Dulce, el único acceso del país al Caribe, donde la cultura garífuna, nacida del encuentro entre marineros africanos náufragos y poblaciones indígenas de las Antillas Menores en el siglo XVII, se perpetúa en la música y la cocina, y después El Mirador, la ciudad maya más antigua de la región, cuya pirámide de La Danta, la más voluminosa jamás construida por los mayas, solo se alcanza tras un trekking de varios días en plena selva del Petén.",
      price: 3900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 8,
      durationUnit: "nights",
      duration: "8 nuits",
      durationEn: "8 nights",
      durationEs: "8 noches",
      whenLabel: "Jan à avril",
      whenLabelEn: "Jan to April",
      whenLabelEs: "Ene a abril",
      bestMonths: "january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 63,
    },
    chapters: [
      {
        title: "Livingston et le Río Dulce",
        titleEn: "Livingston and the Río Dulce",
        titleEs: "Livingston y el Río Dulce",
        intro:
          "Premier chapitre à Livingston, accessible uniquement par bateau, seule ville du Guatemala directement tournée vers les Caraïbes. La communauté garifuna, descendante de marins ouest-africains naufragés au XVIIe siècle qui se mêlèrent aux populations caribéennes autochtones, y perpétue une langue, une musique percussive appelée punta et une cuisine à base de noix de coco et de fruits de mer, classées au patrimoine culturel immatériel de l'UNESCO. La remontée du Río Dulce, gorge tropicale bordée de falaises couvertes de végétation, mène jusqu'au lac Izabal, le plus grand du pays.",
        introEn:
          "The first chapter unfolds in Livingston, reachable only by boat, the only town in Guatemala directly facing the Caribbean. The Garifuna community, descended from West African sailors shipwrecked in the 17th century who mixed with Indigenous Caribbean peoples, keeps alive a language, a percussive music called punta, and a cuisine based on coconut and seafood, listed as UNESCO intangible cultural heritage. The journey up the Río Dulce, a tropical gorge lined with vegetation-covered cliffs, leads to Lake Izabal, the country's largest.",
        introEs:
          "El primer capítulo se desarrolla en Livingston, accesible solo en barco, la única ciudad de Guatemala directamente orientada hacia el Caribe. La comunidad garífuna, descendiente de marineros de África Occidental náufragos en el siglo XVII que se mezclaron con poblaciones indígenas caribeñas, perpetúa una lengua, una música percusiva llamada punta y una cocina a base de coco y marisco, declaradas patrimonio cultural inmaterial de la UNESCO. La remontada del Río Dulce, un desfiladero tropical bordeado de acantilados cubiertos de vegetación, lleva hasta el lago Izabal, el más grande del país.",
        galleryImages: `${R2}/journeys/guatemala-riodulce-gallery1.jpg,${R2}/journeys/guatemala-riodulce-gallery2.jpg,${R2}/journeys/guatemala-riodulce-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Livingston et la culture garifuna",
            titleEn: "Livingston and Garifuna culture",
            titleEs: "Livingston y la cultura garífuna",
            description:
              "Arrivée à Livingston en bateau, découverte de la culture garifuna à travers un atelier de percussion punta et un déjeuner de tapado, ragoût de fruits de mer au lait de coco typique de la région.",
            descriptionEn:
              "Arrival in Livingston by boat, a discovery of Garifuna culture through a punta drumming workshop and a lunch of tapado, a coconut-milk seafood stew typical of the region.",
            descriptionEs:
              "Llegada a Livingston en barco, descubrimiento de la cultura garífuna a través de un taller de percusión punta y un almuerzo de tapado, guiso de marisco con leche de coco típico de la región.",
            image: `${R2}/journeys/guatemala-riodulce-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Navigation sur le Río Dulce",
            titleEn: "A journey up the Río Dulce",
            titleEs: "Navegación por el Río Dulce",
            description:
              "Navigation en bateau sur le Río Dulce, à travers une gorge tropicale bordée de falaises couvertes de végétation, avec un arrêt aux sources thermales naturelles qui jaillissent directement dans la rivière.",
            descriptionEn:
              "A boat journey up the Río Dulce, through a tropical gorge lined with vegetation-covered cliffs, with a stop at natural hot springs that flow directly into the river.",
            descriptionEs:
              "Navegación en barco por el Río Dulce, a través de un desfiladero tropical bordeado de acantilados cubiertos de vegetación, con parada en aguas termales naturales que brotan directamente en el río.",
            image: `${R2}/journeys/guatemala-riodulce-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "El Mirador, la cité perdue",
        titleEn: "El Mirador, the Lost City",
        titleEs: "El Mirador, la ciudad perdida",
        intro:
          "Départ pour le trek de plusieurs jours vers El Mirador, l'une des plus anciennes et des plus vastes cités mayas, fondée dès le VIe siècle avant notre ère, dont la pyramide de La Danta, avec un volume estimé supérieur à celui de la plupart des pyramides égyptiennes, reste inaccessible autrement qu'à pied ou à dos de mule à travers la jungle dense du Petén. L'absence totale de route a préservé le site de toute restauration excessive, offrant une expérience d'exploration proche de la découverte archéologique.",
        introEn:
          "Departure for the multi-day trek to El Mirador, one of the oldest and largest Maya cities, founded as early as the 6th century BCE, whose La Danta pyramid, with an estimated volume greater than most Egyptian pyramids, remains reachable only on foot or by mule through the dense jungle of the Petén. The total absence of roads has spared the site from excessive restoration, offering an exploration experience close to archaeological discovery.",
        introEs:
          "Salida para el trekking de varios días hacia El Mirador, una de las ciudades mayas más antiguas y extensas, fundada ya en el siglo VI antes de nuestra era, cuya pirámide de La Danta, con un volumen estimado superior al de la mayoría de las pirámides egipcias, sigue siendo accesible solo a pie o en mula a través de la densa selva del Petén. La ausencia total de carreteras ha preservado el sitio de una restauración excesiva, ofreciendo una experiencia de exploración cercana al descubrimiento arqueológico.",
        galleryImages: `${R2}/journeys/guatemala-mirador-gallery1.jpg,${R2}/journeys/guatemala-mirador-gallery2.jpg,${R2}/journeys/guatemala-mirador-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Marche à travers la jungle du Petén",
            titleEn: "Walking through the Petén jungle",
            titleEs: "Caminata por la selva del Petén",
            description:
              "Départ à pied à travers la jungle dense du Petén, accompagné de mules portant l'équipement, à la recherche de singes hurleurs et de toucans, nuit en campement au cœur de la forêt.",
            descriptionEn:
              "A departure on foot through the dense Petén jungle, accompanied by mules carrying the equipment, in search of howler monkeys and toucans, an overnight stay at a camp deep in the forest.",
            descriptionEs:
              "Salida a pie por la densa selva del Petén, acompañados de mulas que transportan el equipo, en busca de monos aulladores y tucanes, noche en un campamento en pleno bosque.",
            image: `${R2}/journeys/guatemala-mirador-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La pyramide de La Danta",
            titleEn: "La Danta Pyramid",
            titleEs: "La pirámide de La Danta",
            description:
              "Arrivée à El Mirador et ascension de la pyramide de La Danta, la plus volumineuse jamais construite par les Mayas, pour une vue à trois cent soixante degrés sur la canopée ininterrompue du Petén jusqu'au Mexique voisin.",
            descriptionEn:
              "Arrival at El Mirador and a climb up La Danta Pyramid, the most voluminous ever built by the Maya, for a three-hundred-sixty-degree view over the unbroken canopy of the Petén all the way to neighbouring Mexico.",
            descriptionEs:
              "Llegada a El Mirador y ascenso a la pirámide de La Danta, la más voluminosa jamás construida por los mayas, para una vista de trescientos sesenta grados sobre el dosel ininterrumpido del Petén hasta el vecino México.",
            image: `${R2}/journeys/guatemala-mirador-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "belize",
    tour: {
      name: "Belize : Cockscomb Basin et le village garifuna de Hopkins",
      nameEn: "Belize: Cockscomb Basin and the Garifuna Village of Hopkins",
      nameEs: "Belice: Cockscomb Basin y el pueblo garífuna de Hopkins",
      slug: "belize-cockscomb-hopkins",
      image: `${R2}/journeys/belize-cockscomb-hopkins-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le premier sanctuaire de jaguars au monde, puis un village où les tambours garifuna ne s'arrêtent jamais vraiment",
      taglineEn: "The world's first jaguar sanctuary, then a village where the Garifuna drums never really stop",
      taglineEs: "El primer santuario de jaguares del mundo, y después un pueblo donde los tambores garífunas nunca dejan de sonar del todo",
      description:
        "Un voyage dans le sud du Belize, entre le bassin de Cockscomb, première réserve au monde entièrement dédiée à la protection du jaguar, créée en 1986 à l'initiative d'un zoologiste britannique, et le village de Hopkins, l'une des communautés garifuna les plus vivantes du pays, où la musique traditionnelle punta et la pêche artisanale rythment encore le quotidien.",
      descriptionEn:
        "A journey through southern Belize, between the Cockscomb Basin, the world's first reserve entirely dedicated to jaguar protection, created in 1986 on the initiative of a British zoologist, and the village of Hopkins, one of the country's most vibrant Garifuna communities, where traditional punta music and small-scale fishing still shape daily life.",
      descriptionEs:
        "Un viaje por el sur de Belice, entre la cuenca de Cockscomb, la primera reserva del mundo dedicada por completo a la protección del jaguar, creada en 1986 por iniciativa de un zoólogo británico, y el pueblo de Hopkins, una de las comunidades garífunas más vivas del país, donde la música tradicional punta y la pesca artesanal todavía marcan el ritmo cotidiano.",
      price: 3200,
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
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 64,
    },
    chapters: [
      {
        title: "Le bassin de Cockscomb",
        titleEn: "The Cockscomb Basin",
        titleEs: "La cuenca de Cockscomb",
        intro:
          "Premier chapitre au bassin de Cockscomb, surnommé « le sanctuaire des jaguars », première réserve au monde entièrement consacrée à la protection de l'espèce depuis sa création en 1986. Si l'observation directe du félin reste rare en raison de ses mœurs nocturnes et discrètes, les sentiers du parc, qui traversent une forêt tropicale humide entourée des monts Maya, révèlent régulièrement empreintes fraîches et griffures sur les troncs, ainsi qu'une faune abondante de toucans, singes hurleurs et tapirs.",
        introEn:
          "The first chapter unfolds at the Cockscomb Basin, nicknamed \"the jaguar sanctuary,\" the world's first reserve entirely dedicated to protecting the species since its creation in 1986. While direct sightings of the cat remain rare due to its nocturnal, elusive habits, the park's trails, crossing humid rainforest ringed by the Maya Mountains, regularly reveal fresh tracks and claw marks on tree trunks, along with abundant wildlife including toucans, howler monkeys, and tapirs.",
        introEs:
          "El primer capítulo se desarrolla en la cuenca de Cockscomb, apodada «el santuario de los jaguares», la primera reserva del mundo dedicada por completo a la protección de la especie desde su creación en 1986. Aunque la observación directa del felino sigue siendo rara debido a sus hábitos nocturnos y discretos, los senderos del parque, que atraviesan una selva tropical húmeda rodeada por los montes Maya, revelan con regularidad huellas frescas y arañazos en los troncos, además de una fauna abundante de tucanes, monos aulladores y tapires.",
        galleryImages: `${R2}/journeys/belize-cockscomb-gallery1.jpg,${R2}/journeys/belize-cockscomb-gallery2.jpg,${R2}/journeys/belize-cockscomb-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Sur les traces du jaguar",
            titleEn: "On the trail of the jaguar",
            titleEs: "Tras el rastro del jaguar",
            description:
              "Randonnée guidée à travers les sentiers du bassin de Cockscomb, à la recherche d'empreintes et de traces de jaguar, dans la première réserve au monde créée spécifiquement pour protéger l'espèce.",
            descriptionEn:
              "A guided hike through the trails of the Cockscomb Basin, searching for jaguar tracks and signs, in the world's first reserve created specifically to protect the species.",
            descriptionEs:
              "Caminata guiada por los senderos de la cuenca de Cockscomb, en busca de huellas y rastros de jaguar, en la primera reserva del mundo creada específicamente para proteger la especie.",
            image: `${R2}/journeys/belize-cockscomb-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Cascades et baignade en rivière",
            titleEn: "Waterfalls and a river swim",
            titleEs: "Cascadas y baño en el río",
            description:
              "Randonnée jusqu'à plusieurs cascades isolées du parc, baignade dans des piscines naturelles d'eau douce, à la recherche de toucans et de singes hurleurs dans la canopée environnante.",
            descriptionEn:
              "A hike to several of the park's isolated waterfalls, a swim in natural freshwater pools, searching for toucans and howler monkeys in the surrounding canopy.",
            descriptionEs:
              "Caminata hasta varias cascadas aisladas del parque, baño en piscinas naturales de agua dulce, en busca de tucanes y monos aulladores en el dosel circundante.",
            image: `${R2}/journeys/belize-cockscomb-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le village garifuna de Hopkins",
        titleEn: "The Garifuna Village of Hopkins",
        titleEs: "El pueblo garífuna de Hopkins",
        intro:
          "Route vers Hopkins, village de pêcheurs fondé au XIXe siècle par des familles garifuna venues de Honduras, aujourd'hui considéré comme l'une des communautés les plus actives dans la préservation de cette culture unique. Les ateliers de percussion, où les tambours primero et segunda dialoguent selon des rythmes transmis oralement depuis des générations, et la cuisine à base de hudut, ragoût de poisson au lait de coco, offrent une immersion dans un patrimoine reconnu par l'UNESCO.",
        introEn:
          "The road to Hopkins, a fishing village founded in the 19th century by Garifuna families from Honduras, now considered one of the most active communities in preserving this unique culture. Drumming workshops, where the primero and segunda drums converse in rhythms passed down orally through generations, and cuisine built around hudut, a fish stew in coconut milk, offer an immersion into a heritage recognised by UNESCO.",
        introEs:
          "Ruta hacia Hopkins, un pueblo de pescadores fundado en el siglo XIX por familias garífunas llegadas de Honduras, hoy considerado una de las comunidades más activas en la preservación de esta cultura única. Los talleres de percusión, donde los tambores primero y segunda dialogan según ritmos transmitidos oralmente durante generaciones, y la cocina a base de hudut, guiso de pescado con leche de coco, ofrecen una inmersión en un patrimonio reconocido por la UNESCO.",
        galleryImages: `${R2}/journeys/belize-hopkins-gallery1.jpg,${R2}/journeys/belize-hopkins-gallery2.jpg,${R2}/journeys/belize-hopkins-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Atelier de percussion garifuna",
            titleEn: "A Garifuna drumming workshop",
            titleEs: "Taller de percusión garífuna",
            description:
              "Atelier de percussion avec des musiciens locaux, initiation aux rythmes traditionnels garifuna joués sur les tambours primero et segunda, transmis oralement depuis des générations.",
            descriptionEn:
              "A drumming workshop with local musicians, an introduction to traditional Garifuna rhythms played on the primero and segunda drums, passed down orally through generations.",
            descriptionEs:
              "Taller de percusión con músicos locales, iniciación a los ritmos tradicionales garífunas tocados en los tambores primero y segunda, transmitidos oralmente durante generaciones.",
            image: `${R2}/journeys/belize-hopkins-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Pêche traditionnelle et cuisine garifuna",
            titleEn: "Traditional fishing and Garifuna cuisine",
            titleEs: "Pesca tradicional y cocina garífuna",
            description:
              "Sortie de pêche traditionnelle en pirogue avec des pêcheurs locaux, suivie d'un atelier de cuisine garifuna pour préparer le hudut, ragoût de poisson au lait de coco, avant le retour vers Belize City.",
            descriptionEn:
              "A traditional fishing outing by dugout canoe with local fishermen, followed by a Garifuna cooking workshop to prepare hudut, a fish stew in coconut milk, before the return to Belize City.",
            descriptionEs:
              "Salida de pesca tradicional en piragua con pescadores locales, seguida de un taller de cocina garífuna para preparar el hudut, guiso de pescado con leche de coco, antes del regreso a Belize City.",
            image: `${R2}/journeys/belize-hopkins-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "uruguay",
    tour: {
      name: "Uruguay : Montevideo, la capitale bohème du Río de la Plata",
      nameEn: "Uruguay: Montevideo, the Bohemian Capital of the Río de la Plata",
      nameEs: "Uruguay: Montevideo, la capital bohemia del Río de la Plata",
      slug: "uruguay-montevideo",
      image: `${R2}/tours/uruguay-montevideo.jpg`,
      images: `${R2}/trips/uruguay-montevideo-gallery-1.jpg,${R2}/trips/uruguay-montevideo-gallery-2.jpg,${R2}/trips/uruguay-montevideo-gallery-3.jpg,${R2}/trips/uruguay-montevideo-gallery-4.jpg,${R2}/trips/uruguay-montevideo-gallery-5.jpg,${R2}/trips/uruguay-montevideo-gallery-6.jpg`,
      tagline: "Un tango né dans ses faubourgs, un marché centenaire et l'une des plus longues promenades maritimes du monde",
      taglineEn: "A tango born in its back streets, a century-old market, and one of the world's longest waterfront promenades",
      taglineEs: "Un tango nacido en sus arrabales, un mercado centenario y uno de los paseos marítimos más largos del mundo",
      description:
        "Montevideo, capitale la plus au sud du continent après Buenos Aires, revendique avec l'Argentine la paternité du tango, né dans ses quartiers populaires à la fin du XIXe siècle. La ville se découvre au fil de la Rambla, promenade continue de plus de vingt kilomètres le long du Río de la Plata, et du Mercado del Puerto, ancien marché couvert transformé en une succession de parrillas où grille la viande depuis plus d'un siècle.",
      descriptionEn:
        "Montevideo, the southernmost capital on the continent after Buenos Aires, shares with Argentina the claim to have invented tango, born in its working-class neighbourhoods in the late 19th century. The city is explored along the Rambla, a continuous promenade of over twenty kilometres along the Río de la Plata, and the Mercado del Puerto, a former covered market turned into a row of parrillas grilling meat for over a century.",
      descriptionEs:
        "Montevideo, la capital más al sur del continente después de Buenos Aires, reivindica junto con Argentina la paternidad del tango, nacido en sus barrios populares a finales del siglo XIX. La ciudad se descubre a lo largo de la Rambla, un paseo continuo de más de veinte kilómetros junto al Río de la Plata, y del Mercado del Puerto, antiguo mercado cubierto convertido en una sucesión de parrillas que asan carne desde hace más de un siglo.",
      price: 2300,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Oct-nov | Mars-avr",
      whenLabelEn: "Oct-Nov | March-April",
      whenLabelEs: "Oct-nov | marzo-abr",
      bestMonths: "october,november,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 65,
    },
    sections: [
      {
        heading: "La Ciudad Vieja et le Mercado del Puerto",
        headingEn: "The Ciudad Vieja and the Mercado del Puerto",
        headingEs: "La Ciudad Vieja y el Mercado del Puerto",
        body:
          "La Ciudad Vieja, quartier historique construit sur l'ancienne péninsule fortifiée, mêle façades Art déco et bâtiments coloniaux autour de la place de l'Indépendance. Le Mercado del Puerto, ancienne halle métallique du XIXe siècle, s'anime chaque midi de la fumée des parrillas où grillent asado et chorizo, une institution dominicale pour les habitants de la ville.",
        bodyEn:
          "The Ciudad Vieja, a historic quarter built on the old fortified peninsula, blends Art Deco facades and colonial buildings around Independence Square. The Mercado del Puerto, a former 19th-century iron market hall, comes alive every midday with the smoke of parrillas grilling asado and chorizo, a Sunday institution for the city's residents.",
        bodyEs:
          "La Ciudad Vieja, barrio histórico construido sobre la antigua península fortificada, combina fachadas Art Déco y edificios coloniales en torno a la plaza Independencia. El Mercado del Puerto, antigua nave metálica del siglo XIX, se anima cada mediodía con el humo de las parrillas que asan asado y chorizo, una institución dominical para los habitantes de la ciudad.",
      },
      {
        heading: "La Rambla et les milongas de tango",
        headingEn: "The Rambla and the tango milongas",
        headingEs: "La Rambla y las milongas de tango",
        body:
          "La Rambla, l'une des plus longues promenades maritimes continues au monde, se parcourt à vélo ou à pied entre joggeurs matinaux et pêcheurs installés sur la digue. Le soir, les milongas du quartier de Barrio Sur, berceau du tango montévidéen aux côtés du candombe, rythme afro-uruguayen joué au tambour, offrent une initiation à la danse dans une ambiance bien moins touristique qu'à Buenos Aires.",
        bodyEn:
          "The Rambla, one of the longest continuous waterfront promenades in the world, is explored by bike or on foot, among early-morning joggers and fishermen settled on the seawall. In the evening, the milongas of the Barrio Sur district, the birthplace of Montevidean tango alongside candombe, an Afro-Uruguayan rhythm played on drums, offer a dance introduction in an atmosphere far less touristy than Buenos Aires.",
        bodyEs:
          "La Rambla, uno de los paseos marítimos continuos más largos del mundo, se recorre en bicicleta o a pie, entre corredores matutinos y pescadores instalados en el dique. Por la noche, las milongas del barrio Sur, cuna del tango montevideano junto al candombe, ritmo afrouruguayo tocado con tambores, ofrecen una iniciación al baile en un ambiente mucho menos turístico que en Buenos Aires.",
      },
    ],
    hotels: [
      {
        name: "Cottage Hotel Carrasco",
        nameEn: "Cottage Hotel Carrasco",
        nameEs: "Cottage Hotel Carrasco",
        description:
          "Un hôtel de charme dans le quartier résidentiel de Carrasco, ancienne villa rénovée entourée d'un jardin, à deux pas de la plage et de l'aéroport international.",
        descriptionEn:
          "A boutique hotel in the residential district of Carrasco, a renovated former villa surrounded by a garden, steps from the beach and the international airport.",
        descriptionEs:
          "Un hotel con encanto en el barrio residencial de Carrasco, antigua villa renovada rodeada de jardín, a pocos pasos de la playa y del aeropuerto internacional.",
        image: `${R2}/trips/uruguay-montevideo-hotel-cottage.jpg`,
      },
      {
        name: "Alma Histórica Boutique Hotel",
        nameEn: "Alma Histórica Boutique Hotel",
        nameEs: "Alma Histórica Boutique Hotel",
        description:
          "Un hôtel installé dans un bâtiment historique de la Ciudad Vieja, à deux pas du Mercado del Puerto et de la place de l'Indépendance.",
        descriptionEn:
          "A hotel set in a historic building in the Ciudad Vieja, steps from the Mercado del Puerto and Independence Square.",
        descriptionEs:
          "Un hotel instalado en un edificio histórico de la Ciudad Vieja, a pocos pasos del Mercado del Puerto y de la plaza Independencia.",
        image: `${R2}/trips/uruguay-montevideo-hotel-almahistorica.jpg`,
      },
    ],
  },
  {
    destinationSlug: "guatemala",
    tour: {
      name: "Guatemala : Semuc Champey, les piscines turquoise de la jungle",
      nameEn: "Guatemala: Semuc Champey, the Turquoise Jungle Pools",
      nameEs: "Guatemala: Semuc Champey, las piscinas turquesa de la selva",
      slug: "guatemala-semuc-champey",
      image: `${R2}/tours/guatemala-semuc-champey.jpg`,
      images: `${R2}/trips/guatemala-semuc-gallery-1.jpg,${R2}/trips/guatemala-semuc-gallery-2.jpg,${R2}/trips/guatemala-semuc-gallery-3.jpg,${R2}/trips/guatemala-semuc-gallery-4.jpg,${R2}/trips/guatemala-semuc-gallery-5.jpg,${R2}/trips/guatemala-semuc-gallery-6.jpg`,
      tagline: "Des piscines en escalier d'un bleu-vert irréel, posées sur un pont naturel de calcaire au cœur de la jungle",
      taglineEn: "Turquoise stepped pools of an unreal blue-green, set on a natural limestone bridge deep in the jungle",
      taglineEs: "Piscinas escalonadas de un azul verdoso irreal, posadas sobre un puente natural de caliza en pleno corazón de la selva",
      description:
        "Semuc Champey, dans la région reculée de l'Alta Verapaz, est un pont naturel de calcaire de plus de trois cents mètres de long sur lequel se sont formées des piscines en escalier d'une couleur turquoise saisissante, alimentées par une rivière souterraine qui s'engouffre sous la formation rocheuse. Le site, longtemps difficile d'accès et donc préservé du tourisme de masse, reste l'une des merveilles naturelles les moins connues d'Amérique centrale.",
      descriptionEn:
        "Semuc Champey, in the remote Alta Verapaz region, is a natural limestone bridge over three hundred metres long on which strikingly turquoise stepped pools have formed, fed by an underground river that plunges beneath the rock formation. The site, long difficult to reach and thus spared mass tourism, remains one of Central America's least-known natural wonders.",
      descriptionEs:
        "Semuc Champey, en la remota región de Alta Verapaz, es un puente natural de caliza de más de trescientos metros de largo sobre el que se han formado piscinas escalonadas de un llamativo color turquesa, alimentadas por un río subterráneo que se sumerge bajo la formación rocosa. El lugar, durante mucho tiempo de difícil acceso y por ello preservado del turismo de masas, sigue siendo una de las maravillas naturales menos conocidas de Centroamérica.",
      price: 2300,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Jan à avril",
      whenLabelEn: "Jan to April",
      whenLabelEs: "Ene a abril",
      bestMonths: "january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 66,
    },
    sections: [
      {
        heading: "Les piscines turquoise et le mirador",
        headingEn: "The turquoise pools and the viewpoint",
        headingEs: "Las piscinas turquesa y el mirador",
        body:
          "Une randonnée jusqu'au mirador surplombant Semuc Champey offre la vue d'ensemble la plus spectaculaire sur les piscines en escalier, avant la descente pour se baigner dans une eau dont la clarté et la couleur changent selon l'heure et la luminosité. Les piscines, peu profondes et calmes, contrastent avec le grondement de la rivière Cahabón qui s'engouffre juste en dessous sous la roche calcaire.",
        bodyEn:
          "A hike to the viewpoint overlooking Semuc Champey offers the most spectacular overview of the stepped pools, before the descent to swim in water whose clarity and colour shift with the time of day and light. The shallow, calm pools contrast with the roar of the Cahabón River plunging just below beneath the limestone rock.",
        bodyEs:
          "Una caminata hasta el mirador que domina Semuc Champey ofrece la vista de conjunto más espectacular sobre las piscinas escalonadas, antes de bajar a bañarse en un agua cuya claridad y color cambian según la hora y la luz. Las piscinas, poco profundas y tranquilas, contrastan con el estruendo del río Cahabón, que se sumerge justo debajo bajo la roca caliza.",
      },
      {
        heading: "Les grottes de Kan'ba et les villages q'eqchi'",
        headingEn: "The Kan'ba caves and Q'eqchi' villages",
        headingEs: "Las cuevas de Kan'ba y los pueblos q'eqchi'",
        body:
          "Une exploration à la bougie des grottes de Kan'ba, en partie immergées, permet de nager et de grimper à travers un réseau de galeries calcaires ponctuées de petites cascades souterraines. La région reste habitée en majorité par le peuple maya q'eqchi', dont plusieurs villages proches proposent des visites guidées pour découvrir un mode de vie encore largement rural et traditionnel.",
        bodyEn:
          "A candlelit exploration of the partly submerged Kan'ba caves allows swimming and climbing through a network of limestone galleries dotted with small underground waterfalls. The region remains mostly inhabited by the Maya Q'eqchi' people, several nearby villages of whom offer guided visits to discover a way of life still largely rural and traditional.",
        bodyEs:
          "Una exploración a la luz de las velas de las cuevas de Kan'ba, parcialmente inundadas, permite nadar y trepar por una red de galerías calizas salpicadas de pequeñas cascadas subterráneas. La región sigue habitada mayoritariamente por el pueblo maya q'eqchi', cuyos pueblos cercanos ofrecen visitas guiadas para descubrir un modo de vida todavía en gran parte rural y tradicional.",
      },
    ],
    hotels: [
      {
        name: "Utopia Eco Hotel",
        nameEn: "Utopia Eco Hotel",
        nameEs: "Utopia Eco Hotel",
        description:
          "Un lodge écologique en bord de rivière à deux pas de Semuc Champey, bungalows en bois surélevés, hamacs suspendus face à la jungle.",
        descriptionEn:
          "An eco-lodge on the riverbank steps from Semuc Champey, raised wooden bungalows, hammocks strung facing the jungle.",
        descriptionEs:
          "Un ecolodge a orillas del río a pocos pasos de Semuc Champey, bungalós de madera elevados, hamacas colgadas frente a la selva.",
        image: `${R2}/trips/guatemala-semuc-hotel-utopia.jpg`,
      },
      {
        name: "Posada Las Marías",
        nameEn: "Posada Las Marías",
        nameEs: "Posada Las Marías",
        description:
          "Une auberge simple et conviviale dans le village voisin de Lanquín, gérée par une famille locale, point de départ idéal pour rejoindre Semuc Champey tôt le matin.",
        descriptionEn:
          "A simple, friendly guesthouse in the nearby village of Lanquín, run by a local family, an ideal starting point to reach Semuc Champey early in the morning.",
        descriptionEs:
          "Una posada sencilla y acogedora en el vecino pueblo de Lanquín, gestionada por una familia local, punto de partida ideal para llegar a Semuc Champey temprano por la mañana.",
        image: `${R2}/trips/guatemala-semuc-hotel-lasmarias.jpg`,
      },
    ],
  },
  {
    destinationSlug: "belize",
    tour: {
      name: "Belize : la péninsule de Placencia, l'autre Belize",
      nameEn: "Belize: The Placencia Peninsula, the Other Belize",
      nameEs: "Belice: la península de Placencia, el otro Belice",
      slug: "belize-placencia",
      image: `${R2}/tours/belize-placencia.jpg`,
      images: `${R2}/trips/belize-placencia-gallery-1.jpg,${R2}/trips/belize-placencia-gallery-2.jpg,${R2}/trips/belize-placencia-gallery-3.jpg,${R2}/trips/belize-placencia-gallery-4.jpg,${R2}/trips/belize-placencia-gallery-5.jpg,${R2}/trips/belize-placencia-gallery-6.jpg`,
      tagline: "Vingt-quatre kilomètres de plage de sable blanc, sans la foule des Cayes du nord",
      taglineEn: "Twenty-four kilometres of white-sand beach, without the crowds of the northern cayes",
      taglineEs: "Veinticuatro kilómetros de playa de arena blanca, sin las multitudes de los cayos del norte",
      description:
        "La péninsule de Placencia, dans le sud du Belize, reste à l'écart des circuits touristiques concentrés autour de Caye Caulker et d'Ambergris Caye, offrant vingt-quatre kilomètres de plage de sable blanc bordée de cocotiers et un rythme de vie encore largement dicté par la pêche artisanale. Au large, la passe de Gladden Spit attire chaque printemps des requins-baleines venus se nourrir des œufs de mérous lors de leur reproduction, l'un des rares endroits au monde où cette rencontre reste prévisible.",
      descriptionEn:
        "The Placencia Peninsula, in southern Belize, remains off the tourist circuits concentrated around Caye Caulker and Ambergris Caye, offering twenty-four kilometres of white-sand beach lined with coconut palms and a pace of life still largely dictated by small-scale fishing. Offshore, the Gladden Spit channel attracts whale sharks every spring, drawn to feed on grouper eggs during spawning, one of the few places in the world where this encounter remains predictable.",
      descriptionEs:
        "La península de Placencia, en el sur de Belice, se mantiene al margen de los circuitos turísticos concentrados en torno a Caye Caulker y Ambergris Caye, ofreciendo veinticuatro kilómetros de playa de arena blanca bordeada de cocoteros y un ritmo de vida todavía marcado en gran parte por la pesca artesanal. Mar adentro, el paso de Gladden Spit atrae cada primavera a tiburones ballena que acuden a alimentarse de huevos de mero durante su reproducción, uno de los pocos lugares del mundo donde este encuentro sigue siendo predecible.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mars à mai",
      whenLabelEn: "March to May",
      whenLabelEs: "Marzo a mayo",
      bestMonths: "march,april,may",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 67,
    },
    sections: [
      {
        heading: "Le village de pêcheurs et la plage sans fin",
        headingEn: "The fishing village and the endless beach",
        headingEs: "El pueblo de pescadores y la playa sin fin",
        body:
          "Le village de Placencia, construit le long d'une allée piétonne classée comme la plus étroite rue principale du monde selon le Livre Guinness, conserve une atmosphère décontractée typique des Caraïbes anglophones. La plage, qui s'étend sur toute la longueur de la péninsule, reste suffisamment vaste pour offrir des étendues désertes même en haute saison.",
        bodyEn:
          "The village of Placencia, built along a pedestrian lane recognised by the Guinness Book of Records as the narrowest main street in the world, retains a laid-back atmosphere typical of the English-speaking Caribbean. The beach, running the full length of the peninsula, remains vast enough to offer deserted stretches even in high season.",
        bodyEs:
          "El pueblo de Placencia, construido a lo largo de un callejón peatonal reconocido por el Libro Guinness como la calle principal más estrecha del mundo, conserva un ambiente relajado típico del Caribe anglófono. La playa, que se extiende a lo largo de toda la península, sigue siendo lo bastante vasta como para ofrecer tramos desiertos incluso en temporada alta.",
      },
      {
        heading: "Les requins-baleines de Gladden Spit",
        headingEn: "The whale sharks of Gladden Spit",
        headingEs: "Los tiburones ballena de Gladden Spit",
        body:
          "Chaque année, entre mars et juin, autour des pleines lunes, des mérous se rassemblent par milliers pour se reproduire à la passe de Gladden Spit, attirant des requins-baleines venus se nourrir des œufs libérés dans l'eau. Le phénomène, l'un des plus prévisibles au monde pour cette espèce autrement difficile à localiser, permet une rencontre en snorkeling encadrée par des règles strictes de la réserve marine.",
        bodyEn:
          "Each year, between March and June, around the full moons, groupers gather by the thousands to spawn at the Gladden Spit channel, drawing whale sharks that come to feed on the eggs released into the water. The phenomenon, one of the most predictable in the world for this otherwise hard-to-locate species, allows a snorkelling encounter governed by the marine reserve's strict rules.",
        bodyEs:
          "Cada año, entre marzo y junio, en torno a las lunas llenas, los meros se reúnen por millares para reproducirse en el paso de Gladden Spit, atrayendo a tiburones ballena que acuden a alimentarse de los huevos liberados en el agua. El fenómeno, uno de los más predecibles del mundo para esta especie por lo demás difícil de localizar, permite un encuentro en esnórquel regido por estrictas normas de la reserva marina.",
      },
    ],
    hotels: [
      {
        name: "Turtle Inn",
        nameEn: "Turtle Inn",
        nameEs: "Turtle Inn",
        description:
          "Un ensemble de villas balinaises en bord de plage, jardins tropicaux luxuriants, restaurant utilisant les produits d'un potager biologique sur place.",
        descriptionEn:
          "A cluster of Balinese-style beachfront villas, lush tropical gardens, a restaurant using produce from an on-site organic garden.",
        descriptionEs:
          "Un conjunto de villas de estilo balinés frente a la playa, jardines tropicales exuberantes, restaurante que utiliza productos de un huerto ecológico in situ.",
        image: `${R2}/trips/belize-placencia-hotel-turtleinn.jpg`,
      },
      {
        name: "Robert's Grove Beach Resort",
        nameEn: "Robert's Grove Beach Resort",
        nameEs: "Robert's Grove Beach Resort",
        description:
          "Un hôtel familial en bord de plage avec deux piscines et un ponton privé, point de départ pratique pour les excursions vers les cayes voisines.",
        descriptionEn:
          "A family-run beachfront hotel with two pools and a private pier, a convenient starting point for excursions to the nearby cayes.",
        descriptionEs:
          "Un hotel familiar frente a la playa con dos piscinas y un embarcadero privado, punto de partida práctico para las excursiones a los cayos vecinos.",
        image: `${R2}/trips/belize-placencia-hotel-robertsgrove.jpg`,
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
