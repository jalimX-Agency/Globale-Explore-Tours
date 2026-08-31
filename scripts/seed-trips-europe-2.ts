// Europe batch 2 — Royaume-Uni, Espagne, Grèce. New trips bringing each destination to at
// least 3 (Grèce already had 2, so just one new trip here). Styled on Black Tomato's real
// structure (a short number of named-hotel chapters, not an exhaustive day-by-day grind)
// rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-europe-2.ts
// Requires scripts/upload-images-europe-2.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "royaume-uni",
    tour: {
      name: "Royaume-Uni : le pays de Galles et le Lake District",
      nameEn: "United Kingdom: Wales and the Lake District",
      nameEs: "Reino Unido: Gales y el Distrito de los Lagos",
      slug: "royaume-uni-galles-lakedistrict",
      image: `${R2}/journeys/royaume-uni-galles-lakedistrict-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le plus haut sommet d'Angleterre et du pays de Galles réunis dans un même parc national, puis les lacs qui inspirèrent les poètes romantiques anglais",
      taglineEn: "England and Wales's highest peaks united in a single national park, then the lakes that inspired the English Romantic poets",
      taglineEs: "Las cumbres más altas de Inglaterra y Gales reunidas en un mismo parque nacional, y después los lagos que inspiraron a los poetas románticos ingleses",
      description:
        "Un voyage loin de Londres et des Highlands écossaises : le parc national de Snowdonia, au nord du pays de Galles, dont le sommet du Yr Wyddfa culmine à plus de mille mètres au milieu d'un paysage de lacs glaciaires et de villages en ardoise, puis le Lake District, région vallonnée du nord-ouest de l'Angleterre qui inspira au XIXe siècle les poètes romantiques William Wordsworth et Samuel Taylor Coleridge, aujourd'hui classée à l'UNESCO pour son paysage culturel exceptionnel.",
      descriptionEn:
        "A journey far from London and the Scottish Highlands: Snowdonia National Park, in north Wales, whose Yr Wyddfa summit rises over a thousand metres amid a landscape of glacial lakes and slate villages, then the Lake District, a hilly region in north-west England that inspired 19th-century Romantic poets William Wordsworth and Samuel Taylor Coleridge, today UNESCO-listed for its exceptional cultural landscape.",
      descriptionEs:
        "Un viaje lejos de Londres y las Tierras Altas escocesas: el parque nacional de Snowdonia, en el norte de Gales, cuya cumbre de Yr Wyddfa se eleva más de mil metros en medio de un paisaje de lagos glaciares y pueblos de pizarra, y después el Distrito de los Lagos, región ondulada del noroeste de Inglaterra que inspiró en el siglo XIX a los poetas románticos William Wordsworth y Samuel Taylor Coleridge, hoy declarada por la UNESCO por su excepcional paisaje cultural.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "May a sept",
      bestMonths: "may,june,july,august,september",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 183,
    },
    chapters: [
      {
        title: "Snowdonia et le pays de Galles",
        titleEn: "Snowdonia and Wales",
        titleEs: "Snowdonia y Gales",
        intro:
          "Premier chapitre au parc national de Snowdonia, dont le sommet du Yr Wyddfa, plus haute montagne d'Angleterre et du pays de Galles réunis à plus de mille mètres, domine un paysage de lacs glaciaires, de vallées encaissées et de villages construits en ardoise extraite des carrières environnantes qui firent la richesse de la région au XIXe siècle. Un petit train à crémaillère, en service depuis 1896, permet de rejoindre le sommet sans effort pour ceux qui préfèrent la vue au dénivelé.",
        introEn:
          "The first chapter unfolds at Snowdonia National Park, whose Yr Wyddfa summit, the highest mountain in England and Wales combined at over a thousand metres, overlooks a landscape of glacial lakes, deep valleys, and villages built from slate quarried in the surrounding hills that made the region's fortune in the 19th century. A small rack railway, in service since 1896, reaches the summit effortlessly for those who prefer the view to the climb.",
        introEs:
          "El primer capítulo se desarrolla en el parque nacional de Snowdonia, cuya cumbre de Yr Wyddfa, la montaña más alta de Inglaterra y Gales juntas con más de mil metros, domina un paisaje de lagos glaciares, valles encajados y pueblos construidos con pizarra extraída de las canteras circundantes que forjaron la riqueza de la región en el siglo XIX. Un pequeño tren de cremallera, en servicio desde 1896, permite llegar a la cima sin esfuerzo para quienes prefieren la vista al desnivel.",
        galleryImages: `${R2}/journeys/royaume-uni-galles-gallery1.jpg,${R2}/journeys/royaume-uni-galles-gallery2.jpg,${R2}/journeys/royaume-uni-galles-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "L'ascension du Yr Wyddfa",
            titleEn: "The ascent of Yr Wyddfa",
            titleEs: "La ascensión al Yr Wyddfa",
            description:
              "Randonnée jusqu'au sommet du Yr Wyddfa par l'un des sentiers balisés du parc, panorama sur les lacs glaciaires et les vallées environnantes depuis le plus haut point d'Angleterre et du pays de Galles.",
            descriptionEn:
              "A hike to the summit of Yr Wyddfa along one of the park's waymarked trails, a panorama over the glacial lakes and surrounding valleys from the highest point in England and Wales.",
            descriptionEs:
              "Caminata hasta la cima del Yr Wyddfa por uno de los senderos señalizados del parque, panorama sobre los lagos glaciares y los valles circundantes desde el punto más alto de Inglaterra y Gales.",
            image: `${R2}/journeys/royaume-uni-galles-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les villages en ardoise et le château de Harlech",
            titleEn: "The slate villages and Harlech Castle",
            titleEs: "Los pueblos de pizarra y el castillo de Harlech",
            description:
              "Visite d'un village construit en ardoise extraite des carrières voisines, puis découverte du château de Harlech, forteresse médiévale classée à l'UNESCO perchée sur un promontoire rocheux face à la mer.",
            descriptionEn:
              "A visit to a village built from slate quarried nearby, then a discovery of Harlech Castle, a UNESCO-listed medieval fortress perched on a rocky promontory facing the sea.",
            descriptionEs:
              "Visita a un pueblo construido con pizarra extraída de las canteras vecinas, y descubrimiento del castillo de Harlech, fortaleza medieval declarada por la UNESCO encaramada en un promontorio rocoso frente al mar.",
            image: `${R2}/journeys/royaume-uni-galles-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le Lake District, les lacs des poètes",
        titleEn: "The Lake District, the Poets' Lakes",
        titleEs: "El Distrito de los Lagos, los lagos de los poetas",
        intro:
          "Route vers le Lake District, région vallonnée du nord-ouest de l'Angleterre classée au patrimoine mondial de l'UNESCO en 2017 pour son paysage culturel façonné à la fois par l'agriculture pastorale et par l'inspiration littéraire qu'il offrit aux poètes romantiques William Wordsworth et Samuel Taylor Coleridge à la fin du XVIIIe siècle. Le lac de Windermere, plus grand plan d'eau naturel d'Angleterre, et la maison de Wordsworth à Grasmere restent les étapes incontournables de cette région qui façonna durablement le regard occidental sur la nature sauvage.",
        introEn:
          "The road to the Lake District, a hilly region in north-west England, UNESCO World Heritage listed in 2017 for a cultural landscape shaped both by pastoral farming and by the literary inspiration it offered Romantic poets William Wordsworth and Samuel Taylor Coleridge in the late 18th century. Lake Windermere, England's largest natural body of water, and Wordsworth's house at Grasmere remain the unmissable stops in a region that lastingly shaped the Western gaze on wild nature.",
        introEs:
          "Ruta hacia el Distrito de los Lagos, región ondulada del noroeste de Inglaterra, declarada Patrimonio de la Humanidad por la UNESCO en 2017 por un paisaje cultural moldeado tanto por la agricultura pastoril como por la inspiración literaria que ofreció a los poetas románticos William Wordsworth y Samuel Taylor Coleridge a finales del siglo XVIII. El lago Windermere, mayor masa de agua natural de Inglaterra, y la casa de Wordsworth en Grasmere siguen siendo las etapas imprescindibles de una región que moldeó de forma duradera la mirada occidental sobre la naturaleza salvaje.",
        galleryImages: `${R2}/journeys/royaume-uni-lakedistrict-gallery1.jpg,${R2}/journeys/royaume-uni-lakedistrict-gallery2.jpg,${R2}/journeys/royaume-uni-lakedistrict-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Croisière sur le lac de Windermere",
            titleEn: "A cruise on Lake Windermere",
            titleEs: "Crucero por el lago Windermere",
            description:
              "Croisière en bateau sur le lac de Windermere, plus grand plan d'eau naturel d'Angleterre, entre collines verdoyantes et villages de pierre qui bordent ses rives.",
            descriptionEn:
              "A boat cruise on Lake Windermere, England's largest natural body of water, between green hills and stone villages lining its shores.",
            descriptionEs:
              "Crucero en barco por el lago Windermere, mayor masa de agua natural de Inglaterra, entre colinas verdes y pueblos de piedra que bordean sus orillas.",
            image: `${R2}/journeys/royaume-uni-lakedistrict-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sur les pas de Wordsworth à Grasmere",
            titleEn: "In Wordsworth's footsteps at Grasmere",
            titleEs: "Tras los pasos de Wordsworth en Grasmere",
            description:
              "Visite de Dove Cottage, maison du poète William Wordsworth à Grasmere, puis randonnée sur les sentiers qui inspirèrent nombre de ses poèmes consacrés à la nature du Lake District.",
            descriptionEn:
              "A visit to Dove Cottage, the home of poet William Wordsworth in Grasmere, then a hike along the trails that inspired many of his poems devoted to the Lake District's nature.",
            descriptionEs:
              "Visita a Dove Cottage, casa del poeta William Wordsworth en Grasmere, y caminata por los senderos que inspiraron muchos de sus poemas dedicados a la naturaleza del Distrito de los Lagos.",
            image: `${R2}/journeys/royaume-uni-lakedistrict-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "espagne",
    tour: {
      name: "Espagne : les îles Canaries, Tenerife et La Palma",
      nameEn: "Spain: The Canary Islands, Tenerife and La Palma",
      nameEs: "España: las islas Canarias, Tenerife y La Palma",
      slug: "espagne-canaries-tenerife-lapalma",
      image: `${R2}/journeys/espagne-canaries-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le plus haut sommet d'Espagne, volcan encore actif qui domine un archipel né du feu, puis l'un des ciels les plus purs du monde",
      taglineEn: "Spain's highest peak, a still-active volcano towering over an archipelago born of fire, then one of the purest skies in the world",
      taglineEs: "La cumbre más alta de España, volcán todavía activo que domina un archipiélago nacido del fuego, y después uno de los cielos más puros del mundo",
      description:
        "Un voyage vers les îles Canaries, archipel espagnol au large du Maroc né d'une activité volcanique toujours en cours : Tenerife, dont le pic du Teide culmine à plus de trois mille sept cents mètres et reste le plus haut sommet d'Espagne, puis La Palma, surnommée « l'île belle » et « l'île des étoiles » pour abriter l'un des plus grands complexes d'observatoires astronomiques au monde, installé sur ses hauteurs grâce à un ciel classé parmi les plus purs de la planète.",
      descriptionEn:
        "A journey to the Canary Islands, a Spanish archipelago off the coast of Morocco born of volcanic activity still ongoing today: Tenerife, whose Mount Teide rises over three thousand seven hundred metres and remains Spain's highest peak, then La Palma, nicknamed the \"beautiful island\" and \"island of the stars\" for hosting one of the largest astronomical observatory complexes in the world, built on its heights thanks to a sky ranked among the purest on the planet.",
      descriptionEs:
        "Un viaje a las islas Canarias, archipiélago español frente a la costa de Marruecos nacido de una actividad volcánica todavía activa hoy: Tenerife, cuyo pico del Teide se eleva más de tres mil setecientos metros y sigue siendo la cumbre más alta de España, y después La Palma, apodada «la isla bonita» y «la isla de las estrellas» por albergar uno de los mayores complejos de observatorios astronómicos del mundo, instalado en sus alturas gracias a un cielo clasificado entre los más puros del planeta.",
      price: 2500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Toute l'année",
      whenLabelEn: "Year-round",
      whenLabelEs: "Todo el año",
      bestMonths: "january,february,march,april,may,june,july,august,september,october,november,december",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 185,
    },
    chapters: [
      {
        title: "Tenerife et le pic du Teide",
        titleEn: "Tenerife and Mount Teide",
        titleEs: "Tenerife y el pico del Teide",
        intro:
          "Premier chapitre à Tenerife, plus grande des îles Canaries, dont le pic du Teide, volcan toujours considéré comme actif par les services de surveillance espagnols, culmine à plus de trois mille sept cents mètres et reste à la fois le plus haut sommet d'Espagne et la troisième plus grande structure volcanique du monde depuis sa base sous-marine. Le parc national qui l'entoure, classé à l'UNESCO, présente un paysage lunaire de coulées de lave pétrifiées si singulier qu'il servit de décor à plusieurs tournages de science-fiction.",
        introEn:
          "The first chapter unfolds on Tenerife, the largest of the Canary Islands, whose Mount Teide, a volcano still considered active by Spanish monitoring services, rises over three thousand seven hundred metres and remains both Spain's highest peak and the world's third-largest volcanic structure measured from its underwater base. The UNESCO-listed national park surrounding it presents a lunar landscape of petrified lava flows so singular it has served as a backdrop for several science-fiction films.",
        introEs:
          "El primer capítulo se desarrolla en Tenerife, la mayor de las islas Canarias, cuyo pico del Teide, volcán todavía considerado activo por los servicios de vigilancia españoles, se eleva más de tres mil setecientos metros y sigue siendo tanto la cumbre más alta de España como la tercera estructura volcánica más grande del mundo medida desde su base submarina. El parque nacional que lo rodea, declarado por la UNESCO, presenta un paisaje lunar de coladas de lava petrificadas tan singular que ha servido de escenario para varios rodajes de ciencia ficción.",
        galleryImages: `${R2}/journeys/espagne-tenerife-gallery1.jpg,${R2}/journeys/espagne-tenerife-gallery2.jpg,${R2}/journeys/espagne-tenerife-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Le téléphérique du Teide",
            titleEn: "The Teide cable car",
            titleEs: "El teleférico del Teide",
            description:
              "Ascension en téléphérique jusqu'à proximité du sommet du Teide, panorama exceptionnel sur l'archipel des Canaries et le paysage lunaire de coulées de lave figées du parc national.",
            descriptionEn:
              "A cable car ascent to near the summit of Teide, an exceptional panorama over the Canary archipelago and the lunar landscape of frozen lava flows in the national park.",
            descriptionEs:
              "Ascenso en teleférico hasta cerca de la cima del Teide, panorama excepcional sobre el archipiélago canario y el paisaje lunar de coladas de lava solidificadas del parque nacional.",
            image: `${R2}/journeys/espagne-tenerife-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les formations volcaniques de Los Roques de García",
            titleEn: "The Los Roques de García volcanic formations",
            titleEs: "Las formaciones volcánicas de Los Roques de García",
            description:
              "Randonnée parmi les formations rocheuses de Los Roques de García, sculptées par l'érosion volcanique, avant un coucher de soleil sur la mer de nuages qui se forme régulièrement en contrebas du parc.",
            descriptionEn:
              "A hike among the rock formations of Los Roques de García, sculpted by volcanic erosion, before a sunset over the sea of clouds that regularly forms below the park.",
            descriptionEs:
              "Caminata entre las formaciones rocosas de Los Roques de García, esculpidas por la erosión volcánica, antes de un atardecer sobre el mar de nubes que se forma con regularidad bajo el parque.",
            image: `${R2}/journeys/espagne-tenerife-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La Palma, l'île des étoiles",
        titleEn: "La Palma, the Island of Stars",
        titleEs: "La Palma, la isla de las estrellas",
        intro:
          "Traversée vers La Palma, île volcanique la plus au nord-ouest de l'archipel, surnommée « l'île des étoiles » pour abriter sur les hauteurs du Roque de los Muchachos l'un des plus grands complexes d'observatoires astronomiques au monde, installé là grâce à un ciel classé parmi les plus purs de la planète et protégé depuis 1988 par une loi locale limitant strictement la pollution lumineuse. L'île entière fut par ailleurs déclarée réserve de biosphère par l'UNESCO en 2002 pour la diversité de ses écosystèmes volcaniques.",
        introEn:
          "A crossing to La Palma, the north-westernmost volcanic island of the archipelago, nicknamed the \"island of stars\" for hosting on the heights of Roque de los Muchachos one of the largest astronomical observatory complexes in the world, built there thanks to a sky ranked among the purest on the planet and protected since 1988 by a local law strictly limiting light pollution. The entire island was also declared a UNESCO biosphere reserve in 2002 for the diversity of its volcanic ecosystems.",
        introEs:
          "Travesía hacia La Palma, la isla volcánica más noroccidental del archipiélago, apodada «la isla de las estrellas» por albergar en las alturas del Roque de los Muchachos uno de los mayores complejos de observatorios astronómicos del mundo, instalado allí gracias a un cielo clasificado entre los más puros del planeta y protegido desde 1988 por una ley local que limita estrictamente la contaminación lumínica. Toda la isla fue además declarada reserva de biosfera por la UNESCO en 2002 por la diversidad de sus ecosistemas volcánicos.",
        galleryImages: `${R2}/journeys/espagne-lapalma-gallery1.jpg,${R2}/journeys/espagne-lapalma-gallery2.jpg,${R2}/journeys/espagne-lapalma-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Les observatoires du Roque de los Muchachos",
            titleEn: "The Roque de los Muchachos observatories",
            titleEs: "Los observatorios del Roque de los Muchachos",
            description:
              "Visite du complexe d'observatoires astronomiques du Roque de los Muchachos, à plus de deux mille quatre cents mètres d'altitude, l'un des sites d'observation les mieux équipés au monde.",
            descriptionEn:
              "A visit to the Roque de los Muchachos astronomical observatory complex, over two thousand four hundred metres up, one of the best-equipped observation sites in the world.",
            descriptionEs:
              "Visita al complejo de observatorios astronómicos del Roque de los Muchachos, a más de dos mil cuatrocientos metros de altitud, uno de los lugares de observación mejor equipados del mundo.",
            image: `${R2}/journeys/espagne-lapalma-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Observation nocturne sous l'un des ciels les plus purs du monde",
            titleEn: "A night observation under one of the world's purest skies",
            titleEs: "Observación nocturna bajo uno de los cielos más puros del mundo",
            description:
              "Sortie nocturne encadrée par un astronome pour observer la Voie lactée depuis l'un des ciels les plus purs du monde, protégé par une loi locale limitant strictement la pollution lumineuse depuis 1988.",
            descriptionEn:
              "A night outing guided by an astronomer to observe the Milky Way under one of the purest skies in the world, protected by a local law strictly limiting light pollution since 1988.",
            descriptionEs:
              "Salida nocturna guiada por un astrónomo para observar la Vía Láctea bajo uno de los cielos más puros del mundo, protegido por una ley local que limita estrictamente la contaminación lumínica desde 1988.",
            image: `${R2}/journeys/espagne-lapalma-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "royaume-uni",
    tour: {
      name: "Royaume-Uni : les Cornouailles",
      nameEn: "United Kingdom: Cornwall",
      nameEs: "Reino Unido: Cornualles",
      slug: "royaume-uni-cornouailles",
      image: `${R2}/tours/royaume-uni-cornouailles.jpg`,
      images: `${R2}/trips/royaume-uni-cornouailles-gallery-1.jpg,${R2}/trips/royaume-uni-cornouailles-gallery-2.jpg,${R2}/trips/royaume-uni-cornouailles-gallery-3.jpg,${R2}/trips/royaume-uni-cornouailles-gallery-4.jpg,${R2}/trips/royaume-uni-cornouailles-gallery-5.jpg,${R2}/trips/royaume-uni-cornouailles-gallery-6.jpg`,
      tagline: "Une pointe rocheuse battue par l'Atlantique, où légendes arthuriennes et villages de pêcheurs colorés composent une Angleterre à part",
      taglineEn: "A rocky headland battered by the Atlantic, where Arthurian legends and colourful fishing villages compose an England apart",
      taglineEs: "Una punta rocosa azotada por el Atlántico, donde leyendas artúricas y coloridos pueblos de pescadores componen una Inglaterra aparte",
      description:
        "Les Cornouailles, pointe la plus au sud-ouest de l'Angleterre entourée par l'Atlantique sur trois côtés, conservent un caractère celtique distinct du reste du pays, perceptible dans la langue cornique encore enseignée localement et dans les légendes du roi Arthur qui situent à Tintagel le lieu de sa naissance. Le village de pêcheurs de St Ives, dont la lumière particulière attira au XXe siècle une colonie d'artistes internationaux, incarne aujourd'hui l'identité artistique et maritime de cette région restée à l'écart des grandes routes touristiques britanniques.",
      descriptionEn:
        "Cornwall, England's south-westernmost tip surrounded by the Atlantic on three sides, retains a Celtic character distinct from the rest of the country, perceptible in the Cornish language still taught locally and in the legends of King Arthur that place his birthplace at Tintagel. The fishing village of St Ives, whose distinctive light drew an international artist colony in the 20th century, today embodies the artistic and maritime identity of a region that has stayed off Britain's main tourist routes.",
      descriptionEs:
        "Cornualles, la punta más suroccidental de Inglaterra rodeada por el Atlántico en tres lados, conserva un carácter celta distinto del resto del país, perceptible en la lengua córnica todavía enseñada localmente y en las leyendas del rey Arturo que sitúan en Tintagel el lugar de su nacimiento. El pueblo de pescadores de St Ives, cuya luz particular atrajo en el siglo XX a una colonia de artistas internacionales, encarna hoy la identidad artística y marítima de una región que se ha mantenido al margen de las grandes rutas turísticas británicas.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "May a sept",
      bestMonths: "may,june,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 182,
    },
    sections: [
      {
        heading: "St Ives, la colonie d'artistes au bord de l'Atlantique",
        headingEn: "St Ives, the Artist Colony by the Atlantic",
        headingEs: "St Ives, la colonia de artistas junto al Atlántico",
        body:
          "St Ives, village de pêcheurs aux maisons blanches serrées autour d'un port encore actif, attira à partir des années 1920 une colonie d'artistes internationaux séduits par une qualité de lumière particulière, due à la réflexion du soleil sur l'océan environnant sur trois côtés. Cette tradition artistique perdure aujourd'hui à travers une antenne de la Tate Gallery londonienne installée directement face à la plage, ainsi que de nombreux ateliers d'artistes encore en activité dans les ruelles pavées de la vieille ville.",
        bodyEn:
          "St Ives, a fishing village of white houses clustered around a still-active harbour, drew an international artist colony from the 1920s onward, attracted by a particular quality of light caused by the sun reflecting off the ocean surrounding it on three sides. This artistic tradition endures today through a branch of London's Tate Gallery installed directly facing the beach, as well as numerous artists' studios still active in the old town's cobbled lanes.",
        bodyEs:
          "St Ives, pueblo de pescadores de casas blancas apiñadas en torno a un puerto todavía activo, atrajo a partir de la década de 1920 a una colonia de artistas internacionales seducidos por una calidad de luz particular, debida al reflejo del sol sobre el océano que lo rodea por tres lados. Esta tradición artística perdura hoy a través de una sede de la Tate Gallery londinense instalada directamente frente a la playa, así como numerosos talleres de artistas todavía activos en las callejuelas empedradas del casco antiguo.",
      },
      {
        heading: "Tintagel et les légendes arthuriennes",
        headingEn: "Tintagel and the Arthurian Legends",
        headingEs: "Tintagel y las leyendas artúricas",
        body:
          "Les ruines du château de Tintagel, perchées sur un promontoire rocheux relié à la côte par un pont piétonnier suspendu, sont associées depuis le XIIe siècle à la légende de la naissance du roi Arthur, popularisée par le chroniqueur Geoffrey de Monmouth. Bien que les fouilles archéologiques n'aient jamais confirmé de lien direct avec le mythique souverain, le site reste l'un des lieux les plus chargés de symbolique de toute la mythologie britannique, visité chaque année par des dizaines de milliers de passionnés de légendes arthuriennes.",
        bodyEn:
          "The ruins of Tintagel Castle, perched on a rocky promontory linked to the coast by a suspended footbridge, have been associated since the 12th century with the legend of King Arthur's birth, popularised by the chronicler Geoffrey of Monmouth. Although archaeological excavations have never confirmed any direct link to the mythical ruler, the site remains one of the most symbolically charged places in all of British mythology, visited every year by tens of thousands of Arthurian legend enthusiasts.",
        bodyEs:
          "Las ruinas del castillo de Tintagel, encaramadas en un promontorio rocoso unido a la costa por una pasarela peatonal suspendida, están asociadas desde el siglo XII a la leyenda del nacimiento del rey Arturo, popularizada por el cronista Geoffrey de Monmouth. Aunque las excavaciones arqueológicas nunca han confirmado un vínculo directo con el mítico soberano, el lugar sigue siendo uno de los sitios con mayor carga simbólica de toda la mitología británica, visitado cada año por decenas de miles de aficionados a las leyendas artúricas.",
      },
    ],
    hotels: [
      {
        name: "Cottage de pêcheur rénové à St Ives",
        nameEn: "A Renovated Fisherman's Cottage in St Ives",
        nameEs: "Cabaña de pescador renovada en St Ives",
        description:
          "Un cottage de pêcheur rénové dans les ruelles pavées de St Ives, chambres avec vue sur le port, à distance de marche de la Tate St Ives et des plages environnantes.",
        descriptionEn:
          "A renovated fisherman's cottage in the cobbled lanes of St Ives, rooms overlooking the harbour, within walking distance of Tate St Ives and the surrounding beaches.",
        descriptionEs:
          "Una cabaña de pescador renovada en las callejuelas empedradas de St Ives, habitaciones con vistas al puerto, a poca distancia a pie de la Tate St Ives y las playas circundantes.",
        image: `${R2}/trips/royaume-uni-cornouailles-hotel-1.jpg`,
      },
      {
        name: "Manoir de campagne près de Tintagel",
        nameEn: "A Country Manor near Tintagel",
        nameEs: "Casa solariega cerca de Tintagel",
        description:
          "Un manoir de campagne à courte distance de Tintagel, jardins entretenus donnant sur la lande cornouaillaise, à quelques minutes en voiture des falaises atlantiques.",
        descriptionEn:
          "A country manor a short distance from Tintagel, tended gardens overlooking the Cornish moorland, a few minutes' drive from the Atlantic cliffs.",
        descriptionEs:
          "Una casa solariega a poca distancia de Tintagel, jardines cuidados con vistas al páramo de Cornualles, a pocos minutos en coche de los acantilados atlánticos.",
        image: `${R2}/trips/royaume-uni-cornouailles-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "espagne",
    tour: {
      name: "Espagne : le Pays basque, Saint-Sébastien",
      nameEn: "Spain: The Basque Country, San Sebastián",
      nameEs: "España: el País Vasco, San Sebastián",
      slug: "espagne-pays-basque",
      image: `${R2}/tours/espagne-pays-basque.jpg`,
      images: `${R2}/trips/espagne-paysbasque-gallery-1.jpg,${R2}/trips/espagne-paysbasque-gallery-2.jpg,${R2}/trips/espagne-paysbasque-gallery-3.jpg,${R2}/trips/espagne-paysbasque-gallery-4.jpg,${R2}/trips/espagne-paysbasque-gallery-5.jpg,${R2}/trips/espagne-paysbasque-gallery-6.jpg`,
      tagline: "La ville qui compte le plus d'étoiles Michelin par habitant au monde, autour d'une baie en forme de coquillage",
      taglineEn: "The city with the most Michelin stars per capita in the world, around a shell-shaped bay",
      taglineEs: "La ciudad con más estrellas Michelin per cápita del mundo, en torno a una bahía en forma de concha",
      description:
        "Saint-Sébastien, capitale culinaire du Pays basque espagnol, revendique la plus forte concentration d'étoiles Michelin par habitant au monde, un titre porté par des générations de chefs qui perpétuent une tradition gastronomique bâtie sur les pintxos, petites bouchées servies dans les bars à tapas de la vieille ville. La baie de la Concha, en forme de coquillage parfait, et une identité basque distincte, perceptible dans l'euskara, l'une des langues les plus anciennes d'Europe, complètent le caractère unique de cette ville qui ne ressemble à aucune autre en Espagne.",
      descriptionEn:
        "San Sebastián, the culinary capital of the Spanish Basque Country, claims the highest concentration of Michelin stars per capita in the world, a title carried by generations of chefs who carry on a gastronomic tradition built on pintxos, small bites served in the old town's tapas bars. La Concha bay, shaped like a perfect shell, and a distinct Basque identity, perceptible in Euskara, one of Europe's oldest languages, round out the unique character of a city unlike any other in Spain.",
      descriptionEs:
        "San Sebastián, capital culinaria del País Vasco español, reivindica la mayor concentración de estrellas Michelin per cápita del mundo, un título sostenido por generaciones de chefs que perpetúan una tradición gastronómica construida sobre los pintxos, pequeños bocados servidos en los bares de tapas del casco antiguo. La bahía de la Concha, en forma de concha perfecta, y una identidad vasca distinta, perceptible en el euskera, una de las lenguas más antiguas de Europa, completan el carácter único de una ciudad que no se parece a ninguna otra en España.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "May a sept",
      bestMonths: "may,june,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 6,
      featured: false,
      order: 184,
    },
    sections: [
      {
        heading: "La capitale mondiale des pintxos",
        headingEn: "The World Capital of Pintxos",
        headingEs: "La capital mundial de los pintxos",
        body:
          "Saint-Sébastien revendique la plus forte concentration d'étoiles Michelin par habitant au monde, un titre soutenu par une tradition de pintxos, petites bouchées présentées sur le comptoir des bars de la vieille ville et généralement dégustées debout en enchaînant plusieurs établissements au fil de la soirée. Cette culture culinaire populaire, transmise de génération en génération, coexiste avec une gastronomie étoilée d'exception qui a fait de la ville l'une des références mondiales de la haute cuisine contemporaine.",
        bodyEn:
          "San Sebastián claims the highest concentration of Michelin stars per capita in the world, a title upheld by a tradition of pintxos, small bites displayed on the counters of the old town's bars and generally enjoyed standing while moving between several establishments over the course of an evening. This popular culinary culture, passed down through generations, coexists with an exceptional starred gastronomy that has made the city one of the world's benchmarks for contemporary haute cuisine.",
        bodyEs:
          "San Sebastián reivindica la mayor concentración de estrellas Michelin per cápita del mundo, un título sostenido por una tradición de pintxos, pequeños bocados presentados en la barra de los bares del casco antiguo y generalmente degustados de pie recorriendo varios establecimientos a lo largo de la noche. Esta cultura culinaria popular, transmitida de generación en generación, convive con una gastronomía estrellada de excepción que ha convertido a la ciudad en una de las referencias mundiales de la alta cocina contemporánea.",
      },
      {
        heading: "La baie de la Concha et l'identité basque",
        headingEn: "La Concha Bay and Basque Identity",
        headingEs: "La bahía de la Concha y la identidad vasca",
        body:
          "La baie de la Concha, dont la courbe presque parfaite en forme de coquillage lui vaut d'être régulièrement citée parmi les plus belles baies urbaines du monde, est bordée d'une promenade Belle Époque construite à la fin du XIXe siècle lorsque la ville devint la destination estivale privilégiée de la famille royale espagnole. Saint-Sébastien conserve par ailleurs une identité basque affirmée, perceptible dans la présence de l'euskara, langue dont l'origine reste l'une des plus mystérieuses d'Europe, sans lien démontré avec aucune autre famille linguistique connue.",
        bodyEn:
          "La Concha bay, whose nearly perfect shell-shaped curve has it regularly cited among the world's most beautiful urban bays, is lined with a Belle Époque promenade built in the late 19th century when the city became the Spanish royal family's favoured summer destination. San Sebastián also retains a strong Basque identity, perceptible in the presence of Euskara, a language whose origin remains one of the most mysterious in Europe, with no demonstrated link to any other known language family.",
        bodyEs:
          "La bahía de la Concha, cuya curva casi perfecta en forma de concha le vale ser citada con regularidad entre las bahías urbanas más bellas del mundo, está bordeada por un paseo de la Belle Époque construido a finales del siglo XIX cuando la ciudad se convirtió en el destino veraniego preferido de la familia real española. San Sebastián conserva además una identidad vasca marcada, perceptible en la presencia del euskera, lengua cuyo origen sigue siendo uno de los más misteriosos de Europa, sin vínculo demostrado con ninguna otra familia lingüística conocida.",
      },
    ],
    hotels: [
      {
        name: "Hôtel Belle Époque face à la baie",
        nameEn: "A Belle Époque Hotel Facing the Bay",
        nameEs: "Hotel Belle Époque frente a la bahía",
        description:
          "Un hôtel de style Belle Époque directement sur la promenade de la Concha, chambres avec vue sur la baie, à distance de marche de la vieille ville et de ses bars à pintxos.",
        descriptionEn:
          "A Belle Époque-style hotel directly on the Concha promenade, rooms overlooking the bay, within walking distance of the old town and its pintxos bars.",
        descriptionEs:
          "Un hotel de estilo Belle Époque directamente en el paseo de la Concha, habitaciones con vistas a la bahía, a poca distancia a pie del casco antiguo y sus bares de pintxos.",
        image: `${R2}/trips/espagne-paysbasque-hotel-1.jpg`,
      },
      {
        name: "Boutique-hôtel de la vieille ville",
        nameEn: "An Old Town Boutique Hotel",
        nameEs: "Hotel boutique del casco antiguo",
        description:
          "Un boutique-hôtel installé dans un bâtiment historique de la vieille ville de Saint-Sébastien, au cœur du quartier des bars à pintxos les plus réputés de la ville.",
        descriptionEn:
          "A boutique hotel housed in a historic building in San Sebastián's old town, at the heart of the district with the city's most renowned pintxos bars.",
        descriptionEs:
          "Un hotel boutique instalado en un edificio histórico del casco antiguo de San Sebastián, en el corazón del barrio de los bares de pintxos más reputados de la ciudad.",
        image: `${R2}/trips/espagne-paysbasque-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "grece",
    tour: {
      name: "Grèce : la Crète",
      nameEn: "Greece: Crete",
      nameEs: "Grecia: Creta",
      slug: "grece-crete",
      image: `${R2}/tours/grece-crete.jpg`,
      images: `${R2}/trips/grece-crete-gallery-1.jpg,${R2}/trips/grece-crete-gallery-2.jpg,${R2}/trips/grece-crete-gallery-3.jpg,${R2}/trips/grece-crete-gallery-4.jpg,${R2}/trips/grece-crete-gallery-5.jpg,${R2}/trips/grece-crete-gallery-6.jpg`,
      tagline: "Le berceau de la première civilisation avancée d'Europe, puis la plus longue gorge du continent creusée dans les Montagnes Blanches",
      taglineEn: "The cradle of Europe's first advanced civilisation, then the continent's longest gorge carved into the White Mountains",
      taglineEs: "La cuna de la primera civilización avanzada de Europa, y después la garganta más larga del continente excavada en las Montañas Blancas",
      description:
        "La Crète, plus grande île de Grèce, fut le berceau de la civilisation minoenne, considérée comme la première civilisation avancée d'Europe, dont le palais de Knossos, avec ses fresques colorées et son dédale de pièces qui inspira le mythe du labyrinthe du Minotaure, témoigne d'un raffinement architectural vieux de plus de trois mille cinq cents ans. L'île abrite également les gorges de Samaria, la plus longue gorge d'Europe avec ses seize kilomètres creusés dans les Montagnes Blanches, parcourue à pied en une journée entière jusqu'à la mer de Libye.",
      descriptionEn:
        "Crete, Greece's largest island, was the cradle of the Minoan civilisation, considered Europe's first advanced civilisation, whose Knossos palace, with its colourful frescoes and maze of rooms that inspired the myth of the Minotaur's labyrinth, bears witness to an architectural refinement over three thousand five hundred years old. The island is also home to the Samaria Gorge, Europe's longest gorge at sixteen kilometres, carved into the White Mountains and walked in a full day down to the Libyan Sea.",
      descriptionEs:
        "Creta, la isla más grande de Grecia, fue la cuna de la civilización minoica, considerada la primera civilización avanzada de Europa, cuyo palacio de Knossos, con sus coloridos frescos y su laberinto de estancias que inspiró el mito del laberinto del Minotauro, da testimonio de un refinamiento arquitectónico de más de tres mil quinientos años. La isla alberga además las gargantas de Samaria, la garganta más larga de Europa con sus dieciséis kilómetros excavados en las Montañas Blancas, recorrida a pie en un día completo hasta el mar de Libia.",
      price: 2000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | sept a oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 186,
    },
    sections: [
      {
        heading: "Knossos et la civilisation minoenne",
        headingEn: "Knossos and the Minoan Civilisation",
        headingEs: "Knossos y la civilización minoica",
        body:
          "Le palais de Knossos, dont les fondations remontent à plus de trois mille cinq cents ans, fut le centre politique et religieux de la civilisation minoenne, considérée comme la première civilisation avancée d'Europe, dont le raffinement artistique se lit encore dans les fresques colorées représentant des scènes de saut d'acrobates sur des taureaux. Le dédale complexe de pièces et de couloirs du palais, redécouvert par l'archéologue britannique Arthur Evans au début du XXe siècle, inspira le mythe grec du labyrinthe du Minotaure, monstre mi-homme mi-taureau enfermé selon la légende sous les fondations mêmes du palais.",
        bodyEn:
          "The palace of Knossos, whose foundations date back over three thousand five hundred years, was the political and religious centre of the Minoan civilisation, considered Europe's first advanced civilisation, whose artistic refinement can still be read in colourful frescoes depicting scenes of acrobats leaping over bulls. The palace's complex maze of rooms and corridors, rediscovered by British archaeologist Arthur Evans in the early 20th century, inspired the Greek myth of the Minotaur's labyrinth, a half-man, half-bull monster said by legend to be confined beneath the palace's very foundations.",
        bodyEs:
          "El palacio de Knossos, cuyos cimientos se remontan a más de tres mil quinientos años, fue el centro político y religioso de la civilización minoica, considerada la primera civilización avanzada de Europa, cuyo refinamiento artístico todavía se percibe en los coloridos frescos que representan escenas de acróbatas saltando sobre toros. El complejo laberinto de estancias y pasillos del palacio, redescubierto por el arqueólogo británico Arthur Evans a comienzos del siglo XX, inspiró el mito griego del laberinto del Minotauro, monstruo mitad hombre mitad toro encerrado según la leyenda bajo los propios cimientos del palacio.",
      },
      {
        heading: "Les gorges de Samaria, la plus longue d'Europe",
        headingEn: "Samaria Gorge, Europe's Longest",
        headingEs: "Las gargantas de Samaria, la más larga de Europa",
        body:
          "Les gorges de Samaria, qui s'étendent sur seize kilomètres au cœur du parc national des Montagnes Blanches, comptent parmi les plus longues d'Europe et se parcourent traditionnellement en une journée complète de marche, depuis un plateau d'altitude jusqu'à la petite plage isolée d'Agia Roumeli sur la mer de Libye. Le point le plus étroit du canyon, surnommé les Portes de fer, se resserre à seulement trois mètres de large entre des parois rocheuses qui s'élèvent à plus de trois cents mètres de hauteur, un passage qui abrite le bouquetin de Crète, sous-espèce endémique protégée.",
        bodyEn:
          "Samaria Gorge, stretching sixteen kilometres through the heart of the White Mountains National Park, ranks among the longest in Europe and is traditionally walked in a full day, from a high plateau down to the small isolated beach of Agia Roumeli on the Libyan Sea. The canyon's narrowest point, nicknamed the Iron Gates, closes to just three metres wide between rock walls rising over three hundred metres, a passage sheltering the Cretan ibex, a protected endemic subspecies.",
        bodyEs:
          "Las gargantas de Samaria, que se extienden dieciséis kilómetros en el corazón del parque nacional de las Montañas Blancas, se cuentan entre las más largas de Europa y se recorren tradicionalmente en una jornada completa de caminata, desde una meseta de altitud hasta la pequeña playa aislada de Agia Roumeli en el mar de Libia. El punto más estrecho del cañón, apodado las Puertas de Hierro, se cierra hasta solo tres metros de ancho entre paredes rocosas que se elevan más de trescientos metros, un paso que alberga la cabra montés de Creta, subespecie endémica protegida.",
      },
    ],
    hotels: [
      {
        name: "Boutique-hôtel près du palais de Knossos",
        nameEn: "A Boutique Hotel near Knossos Palace",
        nameEs: "Hotel boutique cerca del palacio de Knossos",
        description:
          "Un boutique-hôtel à courte distance du site archéologique de Knossos, jardin méditerranéen intérieur, à proximité d'Héraklion et de son musée archéologique.",
        descriptionEn:
          "A boutique hotel a short distance from the Knossos archaeological site, an indoor Mediterranean garden, near Heraklion and its archaeological museum.",
        descriptionEs:
          "Un hotel boutique a poca distancia del yacimiento arqueológico de Knossos, jardín mediterráneo interior, cerca de Heraclión y su museo arqueológico.",
        image: `${R2}/trips/grece-crete-hotel-1.jpg`,
      },
      {
        name: "Auberge de montagne près des gorges de Samaria",
        nameEn: "A Mountain Inn near Samaria Gorge",
        nameEs: "Posada de montaña cerca de las gargantas de Samaria",
        description:
          "Une auberge de montagne simple à l'entrée du parc national des Montagnes Blanches, point de départ pratique pour la randonnée d'une journée à travers les gorges de Samaria.",
        descriptionEn:
          "A simple mountain inn at the entrance to the White Mountains National Park, a convenient base for the day-long hike through Samaria Gorge.",
        descriptionEs:
          "Una sencilla posada de montaña a la entrada del parque nacional de las Montañas Blancas, punto de partida práctico para la caminata de un día por las gargantas de Samaria.",
        image: `${R2}/trips/grece-crete-hotel-2.jpg`,
      },
    ],
  },
];

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
