// Amérique du Nord batch 1 — Canada, États-Unis, Mexique. First region after completing the
// Africa pilot. New trips bringing each destination to at least 3, styled on Black Tomato's
// real structure (a short number of named-hotel chapters, not an exhaustive day-by-day grind)
// rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-amerique-du-nord.ts
// Requires scripts/upload-images-amerique-du-nord.ts to have been run first (this script
// refuses to write anything if a referenced image isn't already live in R2 — see
// seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "canada",
    tour: {
      name: "Canada : Québec et Charlevoix, la route du fleuve",
      nameEn: "Canada: Quebec City and Charlevoix, the River Road",
      nameEs: "Canadá: Quebec y Charlevoix, la ruta del río",
      slug: "canada-quebec-charlevoix",
      image: `${R2}/journeys/canada-quebec-charlevoix-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La seule ville fortifiée d'Amérique du Nord au nord du Mexique, puis des baleines à quelques mètres du rivage",
      taglineEn: "The only walled city in North America north of Mexico, then whales just metres from the shore",
      taglineEs: "La única ciudad amurallada de Norteamérica al norte de México, y después ballenas a pocos metros de la orilla",
      description:
        "Un voyage entre deux visages du Québec francophone : la vieille ville de Québec, seule cité fortifiée d'Amérique du Nord au nord du Mexique, classée au patrimoine mondial de l'UNESCO, puis la région de Charlevoix, où le fleuve Saint-Laurent s'élargit jusqu'à ressembler à une mer intérieure et attire chaque été plusieurs espèces de baleines à quelques mètres du rivage.",
      descriptionEn:
        "A journey between two faces of French-speaking Quebec: the old town of Quebec City, the only walled city in North America north of Mexico, a UNESCO World Heritage Site, then the Charlevoix region, where the Saint Lawrence River widens until it resembles an inland sea and draws several whale species within metres of the shore each summer.",
      descriptionEs:
        "Un viaje entre dos caras del Quebec francófono: el casco antiguo de la ciudad de Quebec, la única ciudad amurallada de Norteamérica al norte de México, declarada Patrimonio Mundial de la UNESCO, y después la región de Charlevoix, donde el río San Lorenzo se ensancha hasta parecer un mar interior y atrae cada verano a varias especies de ballenas a pocos metros de la orilla.",
      price: 3600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Juin à sept",
      whenLabelEn: "June to Sept",
      whenLabelEs: "Jun a sept",
      bestMonths: "june,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,family,solo",
      maxGuests: 6,
      featured: false,
      order: 38,
    },
    chapters: [
      {
        title: "La vieille ville de Québec",
        titleEn: "Old Quebec City",
        titleEs: "El casco antiguo de Quebec",
        intro:
          "Premier chapitre dans la vieille ville de Québec, fondée en 1608 et seule ville fortifiée d'Amérique du Nord au nord du Mexique encore ceinte de ses murailles d'origine. Les rues pavées du Petit-Champlain, la terrasse Dufferin surplombant le Saint-Laurent et le château Frontenac, hôtel emblématique visible depuis presque tous les points de la ville, composent un décor européen à quelques heures d'avion de l'Europe elle-même.",
        introEn:
          "The first chapter unfolds in Old Quebec City, founded in 1608 and the only walled city in North America north of Mexico still ringed by its original ramparts. The cobblestone streets of Petit-Champlain, the Dufferin Terrace overlooking the Saint Lawrence, and the Château Frontenac, an emblematic hotel visible from almost every corner of the city, compose a European backdrop just hours from Europe by plane.",
        introEs:
          "El primer capítulo se desarrolla en el casco antiguo de Quebec, fundado en 1608 y única ciudad amurallada de Norteamérica al norte de México que aún conserva sus murallas originales. Las calles empedradas de Petit-Champlain, la terraza Dufferin con vistas al San Lorenzo y el château Frontenac, hotel emblemático visible desde casi cualquier punto de la ciudad, componen un decorado europeo a pocas horas de avión de la propia Europa.",
        galleryImages: `${R2}/journeys/canada-quebec-gallery1.jpg,${R2}/journeys/canada-quebec-gallery2.jpg,${R2}/journeys/canada-quebec-gallery3.jpg`,
        mapMarkerX: 70,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Le Petit-Champlain et la terrasse Dufferin",
            titleEn: "Petit-Champlain and the Dufferin Terrace",
            titleEs: "Petit-Champlain y la terraza Dufferin",
            description:
              "Promenade dans les rues pavées du quartier historique du Petit-Champlain, le plus ancien quartier commerçant d'Amérique du Nord, puis marche le long de la terrasse Dufferin au coucher du soleil, vue plongeante sur le fleuve Saint-Laurent.",
            descriptionEn:
              "A stroll through the cobblestone streets of the historic Petit-Champlain quarter, North America's oldest shopping district, then a walk along the Dufferin Terrace at sunset, with a sweeping view over the Saint Lawrence River.",
            descriptionEs:
              "Paseo por las calles empedradas del histórico barrio de Petit-Champlain, el distrito comercial más antiguo de Norteamérica, y caminata por la terraza Dufferin al atardecer, con vistas al río San Lorenzo.",
            image: `${R2}/journeys/canada-quebec-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les remparts et l'île d'Orléans",
            titleEn: "The ramparts and Île d'Orléans",
            titleEs: "Las murallas y la isla de Orléans",
            description:
              "Marche le long des remparts fortifiés de la ville, puis excursion sur l'île d'Orléans, réputée pour ses vergers et ses cabanes à sucre, à quelques minutes seulement du centre-ville.",
            descriptionEn:
              "A walk along the city's fortified ramparts, then an excursion to Île d'Orléans, known for its orchards and sugar shacks, just minutes from downtown.",
            descriptionEs:
              "Caminata a lo largo de las murallas fortificadas de la ciudad, y excursión a la isla de Orléans, conocida por sus huertos y sus cabañas de azúcar, a solo minutos del centro.",
            image: `${R2}/journeys/canada-quebec-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Charlevoix et les baleines",
        titleEn: "Charlevoix and the Whales",
        titleEs: "Charlevoix y las ballenas",
        intro:
          "Route vers Charlevoix, région de villages d'artistes et de montagnes qui plongent directement dans le Saint-Laurent, élargi ici jusqu'à ressembler à une mer intérieure. Au large de Tadoussac, à la confluence du Saint-Laurent et du fjord du Saguenay, bélugas, rorquals communs et parfois baleines bleues viennent se nourrir chaque été dans des eaux exceptionnellement riches en krill.",
        introEn:
          "The road to Charlevoix, a region of artists' villages and mountains that plunge straight into the Saint Lawrence, widened here until it resembles an inland sea. Off Tadoussac, at the confluence of the Saint Lawrence and the Saguenay Fjord, belugas, fin whales, and sometimes blue whales come to feed each summer in waters exceptionally rich in krill.",
        introEs:
          "Ruta hacia Charlevoix, región de pueblos de artistas y montañas que caen directamente sobre el San Lorenzo, ensanchado aquí hasta parecer un mar interior. Frente a Tadoussac, en la confluencia del San Lorenzo y el fiordo del Saguenay, belugas, rorcuales comunes y a veces ballenas azules acuden a alimentarse cada verano en aguas excepcionalmente ricas en kril.",
        galleryImages: `${R2}/journeys/canada-charlevoix-gallery1.jpg,${R2}/journeys/canada-charlevoix-gallery2.jpg,${R2}/journeys/canada-charlevoix-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Route des Saveurs et village de Baie-Saint-Paul",
            titleEn: "The Flavour Trail and Baie-Saint-Paul",
            titleEs: "La Ruta de los Sabores y el pueblo de Baie-Saint-Paul",
            description:
              "Route vers Charlevoix le long du Saint-Laurent, arrêt dans le village d'artistes de Baie-Saint-Paul et dégustation le long de la Route des Saveurs, qui regroupe fromageries et cidreries locales.",
            descriptionEn:
              "The drive to Charlevoix along the Saint Lawrence, a stop in the artists' village of Baie-Saint-Paul, and tastings along the Flavour Trail, which links local cheesemakers and cideries.",
            descriptionEs:
              "Ruta hacia Charlevoix a lo largo del San Lorenzo, parada en el pueblo de artistas de Baie-Saint-Paul y degustaciones a lo largo de la Ruta de los Sabores, que reúne queserías y sidrerías locales.",
            image: `${R2}/journeys/canada-charlevoix-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Observation des baleines à Tadoussac",
            titleEn: "Whale watching at Tadoussac",
            titleEs: "Avistamiento de ballenas en Tadoussac",
            description:
              "Sortie en bateau depuis Tadoussac à la confluence du Saint-Laurent et du Saguenay, à la recherche des bélugas résidents et des rorquals de passage, dans l'un des meilleurs sites d'observation de baleines au monde.",
            descriptionEn:
              "A boat trip from Tadoussac at the confluence of the Saint Lawrence and the Saguenay, in search of resident belugas and passing fin whales, in one of the world's best whale-watching sites.",
            descriptionEs:
              "Salida en barco desde Tadoussac, en la confluencia del San Lorenzo y el Saguenay, en busca de las belugas residentes y los rorcuales de paso, en uno de los mejores lugares del mundo para el avistamiento de ballenas.",
            image: `${R2}/journeys/canada-charlevoix-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "etats-unis",
    tour: {
      name: "États-Unis : Hawaï, Maui et Big Island",
      nameEn: "United States: Hawaii, Maui and the Big Island",
      nameEs: "Estados Unidos: Hawái, Maui y Big Island",
      slug: "etats-unis-hawaii-maui-bigisland",
      image: `${R2}/journeys/etats-unis-hawaii-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La route sinueuse de Hana bordée de cascades, puis un volcan toujours en éruption",
      taglineEn: "The winding, waterfall-lined Road to Hana, then a volcano still actively erupting",
      taglineEs: "La sinuosa carretera de Hana bordeada de cascadas, y después un volcán todavía en erupción",
      description:
        "Un voyage entre deux îles hawaïennes aux caractères opposés : Maui, avec sa mythique route de Hana aux six cents virages bordée de cascades et de forêts tropicales, puis la Big Island, la plus jeune et la plus vaste de l'archipel, où le parc national des volcans abrite l'un des volcans les plus actifs de la planète, dont les coulées ont façonné des paysages lunaires de lave noire.",
      descriptionEn:
        "A journey between two Hawaiian islands of opposite character: Maui, with its legendary Road to Hana and its six hundred curves lined with waterfalls and rainforest, then the Big Island, the youngest and largest in the archipelago, where Hawai'i Volcanoes National Park shelters one of the planet's most active volcanoes, whose flows have shaped lunar landscapes of black lava.",
      descriptionEs:
        "Un viaje entre dos islas hawaianas de carácter opuesto: Maui, con su mítica carretera de Hana y sus seiscientas curvas bordeadas de cascadas y selva tropical, y después Big Island, la más joven y extensa del archipiélago, donde el parque nacional de los volcanes alberga uno de los volcanes más activos del planeta, cuyas coladas han esculpido paisajes lunares de lava negra.",
      price: 5400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 8,
      durationUnit: "nights",
      duration: "8 nuits",
      durationEn: "8 nights",
      durationEs: "8 noches",
      whenLabel: "Avr-juin | Sept-oct",
      whenLabelEn: "April-June | Sept-Oct",
      whenLabelEs: "Abr-jun | sept-oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 39,
    },
    chapters: [
      {
        title: "Maui et la route de Hana",
        titleEn: "Maui and the Road to Hana",
        titleEs: "Maui y la carretera de Hana",
        intro:
          "Premier chapitre à Maui, dominée par le volcan endormi de Haleakala, dont le sommet à plus de trois mille mètres offre un lever de soleil au-dessus des nuages parmi les plus photographiés du Pacifique. La route de Hana, longue de cent kilomètres mais comptant plus de six cents virages, longe la côte nord-est de l'île entre cascades, forêts de bambous et petites plages de sable noir accessibles seulement à pied.",
        introEn:
          "The first chapter unfolds on Maui, dominated by the dormant Haleakala volcano, whose summit above three thousand metres offers a sunrise above the clouds that ranks among the Pacific's most photographed. The Road to Hana, just one hundred kilometres long but with over six hundred curves, hugs the island's northeast coast between waterfalls, bamboo forests, and small black-sand beaches reachable only on foot.",
        introEs:
          "El primer capítulo se desarrolla en Maui, dominada por el volcán dormido de Haleakala, cuya cumbre a más de tres mil metros ofrece un amanecer sobre las nubes entre los más fotografiados del Pacífico. La carretera de Hana, de solo cien kilómetros pero con más de seiscientas curvas, bordea la costa noreste de la isla entre cascadas, bosques de bambú y pequeñas playas de arena negra accesibles solo a pie.",
        galleryImages: `${R2}/journeys/etats-unis-maui-gallery1.jpg,${R2}/journeys/etats-unis-maui-gallery2.jpg,${R2}/journeys/etats-unis-maui-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 50,
        days: [
          {
            dayNumber: 1,
            title: "Lever de soleil au sommet du Haleakala",
            titleEn: "Sunrise atop Haleakala",
            titleEs: "Amanecer en la cima del Haleakala",
            description:
              "Départ avant l'aube pour le sommet du volcan Haleakala, à plus de trois mille mètres d'altitude, pour un lever de soleil au-dessus de la mer de nuages. Après-midi de repos sur les plages du sud de l'île.",
            descriptionEn:
              "A pre-dawn departure for the summit of Haleakala volcano, over three thousand metres up, for a sunrise above a sea of clouds. An afternoon of rest on the island's southern beaches.",
            descriptionEs:
              "Salida antes del amanecer hacia la cumbre del volcán Haleakala, a más de tres mil metros de altitud, para un amanecer sobre un mar de nubes. Tarde de descanso en las playas del sur de la isla.",
            image: `${R2}/journeys/etats-unis-maui-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La route de Hana et ses cascades",
            titleEn: "The Road to Hana and its waterfalls",
            titleEs: "La carretera de Hana y sus cascadas",
            description:
              "Journée entière sur la route de Hana, avec des arrêts aux cascades de Wailua et de Waimoku, dans la forêt de bambous du parc d'État d'Ohe'o, et sur les plages de sable noir de Wai'anapanapa.",
            descriptionEn:
              "A full day on the Road to Hana, with stops at Wailua and Waimoku Falls, in the bamboo forest of Ohe'o State Park, and on the black-sand beaches of Wai'anapanapa.",
            descriptionEs:
              "Día completo por la carretera de Hana, con paradas en las cascadas de Wailua y Waimoku, en el bosque de bambú del parque estatal de Ohe'o, y en las playas de arena negra de Wai'anapanapa.",
            image: `${R2}/journeys/etats-unis-maui-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Big Island et le parc des volcans",
        titleEn: "The Big Island and Volcanoes National Park",
        titleEs: "Big Island y el parque de los volcanes",
        intro:
          "Vol vers la Big Island, la plus jeune et la plus vaste des îles hawaïennes, encore façonnée par l'activité volcanique. Le parc national des volcans d'Hawaï, classé à l'UNESCO, permet d'approcher le cratère du Kilauea, l'un des volcans les plus actifs au monde, et de marcher à travers un tunnel de lave formé il y a des siècles, avant une nuit d'observation des étoiles au sommet du Mauna Kea, l'un des meilleurs sites astronomiques de la planète.",
        introEn:
          "A flight to the Big Island, the youngest and largest of the Hawaiian Islands, still being shaped by volcanic activity. Hawai'i Volcanoes National Park, a UNESCO World Heritage Site, allows visitors to approach the crater of Kilauea, one of the most active volcanoes in the world, and walk through a centuries-old lava tube, before a night of stargazing atop Mauna Kea, one of the best astronomical sites on the planet.",
        introEs:
          "Vuelo hacia Big Island, la más joven y extensa de las islas hawaianas, todavía modelada por la actividad volcánica. El parque nacional de los volcanes de Hawái, declarado por la UNESCO, permite acercarse al cráter del Kilauea, uno de los volcanes más activos del mundo, y caminar por un tubo de lava formado hace siglos, antes de una noche de observación de estrellas en la cima del Mauna Kea, uno de los mejores lugares astronómicos del planeta.",
        galleryImages: `${R2}/journeys/etats-unis-bigisland-gallery1.jpg,${R2}/journeys/etats-unis-bigisland-gallery2.jpg,${R2}/journeys/etats-unis-bigisland-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Le cratère du Kilauea et les tunnels de lave",
            titleEn: "Kilauea's crater and the lava tubes",
            titleEs: "El cráter del Kilauea y los tubos de lava",
            description:
              "Vol vers la Big Island et visite du parc national des volcans, avec une marche jusqu'au bord du cratère du Kilauea et une traversée du tunnel de lave de Thurston, formé par une ancienne coulée.",
            descriptionEn:
              "A flight to the Big Island and a visit to the volcanoes national park, with a walk to the rim of Kilauea's crater and a walk through the Thurston Lava Tube, formed by an ancient flow.",
            descriptionEs:
              "Vuelo a Big Island y visita al parque nacional de los volcanes, con una caminata hasta el borde del cráter del Kilauea y un recorrido por el tubo de lava de Thurston, formado por una antigua colada.",
            image: `${R2}/journeys/etats-unis-bigisland-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Nuit d'observation des étoiles au Mauna Kea",
            titleEn: "A night of stargazing atop Mauna Kea",
            titleEs: "Noche de observación de estrellas en el Mauna Kea",
            description:
              "Journée libre le long de la côte de lave noire, puis ascension en fin de journée vers le sommet du Mauna Kea pour une soirée d'observation des étoiles, dans l'un des ciels les plus purs de la planète.",
            descriptionEn:
              "A free day along the black lava coast, then a late-afternoon ascent to the summit of Mauna Kea for an evening of stargazing, beneath one of the clearest skies on Earth.",
            descriptionEs:
              "Día libre a lo largo de la costa de lava negra, y ascenso al final del día hasta la cima del Mauna Kea para una noche de observación de estrellas, bajo uno de los cielos más limpios del planeta.",
            image: `${R2}/journeys/etats-unis-bigisland-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "mexique",
    tour: {
      name: "Mexique : la Barranca del Cobre et la Basse-Californie",
      nameEn: "Mexico: the Copper Canyon and Baja California",
      nameEs: "México: la Barranca del Cobre y Baja California",
      slug: "mexique-copper-canyon-baja",
      image: `${R2}/journeys/mexique-copper-baja-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un canyon quatre fois plus vaste que le Grand Canyon, puis des baleines grises qui viennent mettre bas à quelques mètres des bateaux",
      taglineEn: "A canyon system four times larger than the Grand Canyon, then grey whales that come to calve just metres from the boats",
      taglineEs: "Un cañón cuatro veces más grande que el Gran Cañón, y después ballenas grises que vienen a parir a pocos metros de los barcos",
      description:
        "Un voyage entre deux Mexiques extrêmes et méconnus : la Barranca del Cobre, réseau de canyons de la Sierra Tarahumara plus vaste que le Grand Canyon américain, traversé à bord du légendaire train El Chepe, puis la Basse-Californie, péninsule désertique où les baleines grises viennent chaque hiver mettre bas dans des lagunes si calmes que les mères laissent parfois leurs baleineaux s'approcher des bateaux d'observation.",
      descriptionEn:
        "A journey between two extreme, little-known sides of Mexico: the Copper Canyon, a canyon system in the Sierra Tarahumara larger than the American Grand Canyon, crossed aboard the legendary El Chepe train, then Baja California, a desert peninsula where grey whales come each winter to calve in lagoons so calm that mothers sometimes let their calves approach the observation boats.",
      descriptionEs:
        "Un viaje entre dos Méxicos extremos y poco conocidos: la Barranca del Cobre, un sistema de cañones de la Sierra Tarahumara más extenso que el Gran Cañón estadounidense, atravesado a bordo del legendario tren El Chepe, y después Baja California, una península desértica donde las ballenas grises acuden cada invierno a parir en lagunas tan tranquilas que las madres a veces dejan que sus crías se acerquen a los barcos de observación.",
      price: 4800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 8,
      durationUnit: "nights",
      duration: "8 nuits",
      durationEn: "8 nights",
      durationEs: "8 noches",
      whenLabel: "Jan à mars | Oct-nov",
      whenLabelEn: "Jan to March | Oct-Nov",
      whenLabelEs: "Ene a marzo | oct-nov",
      bestMonths: "january,february,march,october,november",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 40,
    },
    chapters: [
      {
        title: "La Barranca del Cobre",
        titleEn: "The Copper Canyon",
        titleEs: "La Barranca del Cobre",
        intro:
          "Premier chapitre à bord du train El Chepe, l'un des plus spectaculaires du monde, qui traverse trente-sept ponts et quatre-vingt-six tunnels à travers la Barranca del Cobre, réseau de canyons de la Sierra Tarahumara dont la superficie totale dépasse celle du Grand Canyon américain. La région reste habitée par le peuple tarahumara, réputé pour ses courses de fond traditionnelles à travers un terrain vertigineux.",
        introEn:
          "The first chapter unfolds aboard the El Chepe train, one of the world's most spectacular, crossing thirty-seven bridges and eighty-six tunnels through the Copper Canyon, a canyon system in the Sierra Tarahumara whose total area exceeds that of the American Grand Canyon. The region remains home to the Tarahumara people, renowned for their traditional long-distance running across vertiginous terrain.",
        introEs:
          "El primer capítulo se desarrolla a bordo del tren El Chepe, uno de los más espectaculares del mundo, que cruza treinta y siete puentes y ochenta y seis túneles a través de la Barranca del Cobre, un sistema de cañones de la Sierra Tarahumara cuya superficie total supera la del Gran Cañón estadounidense. La región sigue habitada por el pueblo tarahumara, célebre por sus carreras de fondo tradicionales por un terreno vertiginoso.",
        galleryImages: `${R2}/journeys/mexique-coppercanyon-gallery1.jpg,${R2}/journeys/mexique-coppercanyon-gallery2.jpg,${R2}/journeys/mexique-coppercanyon-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 35,
        days: [
          {
            dayNumber: 1,
            title: "À bord du train El Chepe",
            titleEn: "Aboard the El Chepe train",
            titleEs: "A bordo del tren El Chepe",
            description:
              "Départ à bord du train El Chepe, traversée de ponts vertigineux et de tunnels creusés dans la roche, avec un arrêt au belvédère du Divisadero, offrant une vue plongeante sur trois canyons à la fois.",
            descriptionEn:
              "Departure aboard the El Chepe train, crossing vertiginous bridges and tunnels carved into the rock, with a stop at the Divisadero viewpoint, offering a sweeping view over three canyons at once.",
            descriptionEs:
              "Salida a bordo del tren El Chepe, cruzando puentes vertiginosos y túneles excavados en la roca, con parada en el mirador de Divisadero, con vistas a tres cañones a la vez.",
            image: `${R2}/journeys/mexique-coppercanyon-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Rencontre avec le peuple tarahumara",
            titleEn: "Meeting the Tarahumara people",
            titleEs: "Encuentro con el pueblo tarahumara",
            description:
              "Randonnée dans le canyon à la rencontre de communautés tarahumaras, réputées pour leurs courses de fond traditionnelles, et visite d'une grotte encore habitée selon les méthodes ancestrales.",
            descriptionEn:
              "A hike into the canyon to meet Tarahumara communities, renowned for their traditional long-distance running, and a visit to a cave still inhabited using ancestral methods.",
            descriptionEs:
              "Caminata por el cañón al encuentro de comunidades tarahumaras, célebres por sus carreras de fondo tradicionales, y visita a una cueva todavía habitada según métodos ancestrales.",
            image: `${R2}/journeys/mexique-coppercanyon-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La Basse-Californie et les baleines grises",
        titleEn: "Baja California and the Grey Whales",
        titleEs: "Baja California y las ballenas grises",
        intro:
          "Vol vers la Basse-Californie, longue péninsule désertique bordée par le Pacifique, où la lagune de San Ignacio accueille chaque hiver l'une des plus grandes concentrations de baleines grises au monde, venues des eaux arctiques pour mettre bas dans ces eaux peu profondes et protégées. Contrairement à la plupart des sites d'observation de baleines, les mères laissent parfois leurs petits s'approcher volontairement des embarcations, dans une rencontre encadrée par des règles strictes de protection.",
        introEn:
          "A flight to Baja California, a long desert peninsula bordered by the Pacific, where the San Ignacio Lagoon hosts one of the world's largest concentrations of grey whales every winter, arriving from Arctic waters to calve in these shallow, protected waters. Unlike most whale-watching sites, mothers sometimes let their calves voluntarily approach the boats, an encounter governed by strict protection rules.",
        introEs:
          "Vuelo hacia Baja California, una larga península desértica bordeada por el Pacífico, donde la laguna de San Ignacio acoge cada invierno una de las mayores concentraciones de ballenas grises del mundo, llegadas desde aguas árticas para parir en estas aguas poco profundas y protegidas. A diferencia de la mayoría de los lugares de avistamiento de ballenas, las madres a veces dejan que sus crías se acerquen voluntariamente a las embarcaciones, un encuentro regido por estrictas normas de protección.",
        galleryImages: `${R2}/journeys/mexique-baja-gallery1.jpg,${R2}/journeys/mexique-baja-gallery2.jpg,${R2}/journeys/mexique-baja-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Vol vers la lagune de San Ignacio",
            titleEn: "Flight to San Ignacio Lagoon",
            titleEs: "Vuelo a la laguna de San Ignacio",
            description:
              "Vol vers la Basse-Californie et transfert vers la lagune de San Ignacio, réserve de biosphère classée à l'UNESCO, installation dans un camp géré par une coopérative de pêcheurs locaux reconvertis dans l'écotourisme.",
            descriptionEn:
              "A flight to Baja California and transfer to San Ignacio Lagoon, a UNESCO biosphere reserve, settling into a camp run by a cooperative of local fishermen turned ecotourism guides.",
            descriptionEs:
              "Vuelo a Baja California y traslado a la laguna de San Ignacio, reserva de biosfera declarada por la UNESCO, instalación en un campamento gestionado por una cooperativa de pescadores locales reconvertidos al ecoturismo.",
            image: `${R2}/journeys/mexique-baja-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sortie en bateau parmi les baleines grises",
            titleEn: "A boat outing among the grey whales",
            titleEs: "Salida en barco entre las ballenas grises",
            description:
              "Sortie en petit bateau sur la lagune à la rencontre des baleines grises et de leurs baleineaux, dans l'un des rares endroits au monde où l'espèce s'approche volontairement des embarcations humaines.",
            descriptionEn:
              "A small-boat outing on the lagoon to meet the grey whales and their calves, in one of the few places in the world where the species voluntarily approaches human boats.",
            descriptionEs:
              "Salida en pequeño barco por la laguna al encuentro de las ballenas grises y sus crías, en uno de los pocos lugares del mundo donde la especie se acerca voluntariamente a las embarcaciones humanas.",
            image: `${R2}/journeys/mexique-baja-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "canada",
    tour: {
      name: "Canada : la Nouvelle-Écosse et l'Île-du-Prince-Édouard",
      nameEn: "Canada: Nova Scotia and Prince Edward Island",
      nameEs: "Canadá: Nueva Escocia y la Isla del Príncipe Eduardo",
      slug: "canada-nouvelle-ecosse-ipe",
      image: `${R2}/tours/canada-nouvelle-ecosse-ipe.jpg`,
      images: `${R2}/trips/canada-nouvelle-ecosse-ipe-gallery-1.jpg,${R2}/trips/canada-nouvelle-ecosse-ipe-gallery-2.jpg,${R2}/trips/canada-nouvelle-ecosse-ipe-gallery-3.jpg,${R2}/trips/canada-nouvelle-ecosse-ipe-gallery-4.jpg,${R2}/trips/canada-nouvelle-ecosse-ipe-gallery-5.jpg,${R2}/trips/canada-nouvelle-ecosse-ipe-gallery-6.jpg`,
      tagline: "Les plus hautes marées du monde, des phares rouge et blanc, et le pays d'Anne… la maison aux pignons verts",
      taglineEn: "The world's highest tides, red-and-white lighthouses, and the home of Anne of Green Gables",
      taglineEs: "Las mareas más altas del mundo, faros rojos y blancos, y la tierra de Ana, la de Tejas Verdes",
      description:
        "Loin des Rocheuses, les provinces maritimes du Canada offrent un visage entièrement différent du pays : la baie de Fundy, où les marées les plus hautes du monde font varier le niveau de l'eau de plus de seize mètres deux fois par jour, et l'Île-du-Prince-Édouard, avec ses falaises de grès rouge et ses champs de pommes de terre en damier, rendue célèbre par le roman Anne… la maison aux pignons verts.",
      descriptionEn:
        "Far from the Rockies, Canada's Maritime provinces offer an entirely different face of the country: the Bay of Fundy, where the world's highest tides shift the water level by over sixteen metres twice a day, and Prince Edward Island, with its red sandstone cliffs and checkerboard potato fields, made famous by the novel Anne of Green Gables.",
      descriptionEs:
        "Lejos de las Rocosas, las provincias marítimas de Canadá ofrecen una cara completamente distinta del país: la bahía de Fundy, donde las mareas más altas del mundo hacen variar el nivel del agua más de dieciséis metros dos veces al día, y la Isla del Príncipe Eduardo, con sus acantilados de arenisca roja y sus campos de patatas a cuadros, hecha famosa por la novela Ana, la de Tejas Verdes.",
      price: 3200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Juin à sept",
      whenLabelEn: "June to Sept",
      whenLabelEs: "Jun a sept",
      bestMonths: "june,july,august,september",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "family,couples,groups",
      maxGuests: 6,
      featured: false,
      order: 41,
    },
    sections: [
      {
        heading: "La baie de Fundy et ses marées record",
        headingEn: "The Bay of Fundy and its record tides",
        headingEs: "La bahía de Fundy y sus mareas récord",
        body:
          "À marée basse, il est possible de marcher sur le plancher océanique au pied des rochers en forme de pot de fleurs de Hopewell Rocks, avant que la mer ne remonte de plus de seize mètres en quelques heures et ne les transforme en îlots. Le phénomène, unique au monde par son ampleur, façonne toute la vie locale, des horaires de pêche aux excursions en rafting sur le mascaret.",
        bodyEn:
          "At low tide, it's possible to walk on the ocean floor at the foot of the flowerpot-shaped rocks of Hopewell Rocks, before the sea rises more than sixteen metres in a few hours and turns them into islets. The phenomenon, unique in the world for its scale, shapes the whole of local life, from fishing schedules to tidal-bore rafting excursions.",
        bodyEs:
          "Con marea baja, es posible caminar sobre el lecho oceánico al pie de las rocas con forma de macetero de Hopewell Rocks, antes de que el mar suba más de dieciséis metros en unas horas y las convierta en islotes. El fenómeno, único en el mundo por su magnitud, marca toda la vida local, desde los horarios de pesca hasta las excursiones de rafting sobre la ola de marea.",
      },
      {
        heading: "L'Île-du-Prince-Édouard et ses falaises rouges",
        headingEn: "Prince Edward Island and its red cliffs",
        headingEs: "La Isla del Príncipe Eduardo y sus acantilados rojos",
        body:
          "L'Île-du-Prince-Édouard, la plus petite province canadienne, se parcourt à un rythme tranquille entre plages de sable et falaises de grès rouge oxydé. La ferme de Green Gables, qui a inspiré le roman d'Anne… la maison aux pignons verts, reste un lieu de pèlerinage littéraire, tandis que les villages de pêcheurs autour de la baie de Malpeque servent certaines des meilleures huîtres d'Amérique du Nord.",
        bodyEn:
          "Prince Edward Island, Canada's smallest province, is explored at a gentle pace between sandy beaches and oxidised red sandstone cliffs. The Green Gables farmhouse, which inspired the novel Anne of Green Gables, remains a literary pilgrimage site, while the fishing villages around Malpeque Bay serve some of North America's finest oysters.",
        bodyEs:
          "La Isla del Príncipe Eduardo, la provincia canadiense más pequeña, se recorre a un ritmo tranquilo entre playas de arena y acantilados de arenisca roja oxidada. La granja de Green Gables, que inspiró la novela Ana, la de Tejas Verdes, sigue siendo un lugar de peregrinación literaria, mientras que los pueblos de pescadores en torno a la bahía de Malpeque sirven algunas de las mejores ostras de Norteamérica.",
      },
    ],
    hotels: [
      {
        name: "Rossmount Inn",
        nameEn: "Rossmount Inn",
        nameEs: "Rossmount Inn",
        description:
          "Une auberge historique près de Saint Andrews, chambres douillettes et restaurant réputé pour ses fruits de mer pêchés localement dans la baie de Fundy.",
        descriptionEn:
          "A historic inn near Saint Andrews, cosy rooms and a restaurant renowned for seafood caught locally in the Bay of Fundy.",
        descriptionEs:
          "Una posada histórica cerca de Saint Andrews, habitaciones acogedoras y restaurante conocido por sus mariscos pescados localmente en la bahía de Fundy.",
        image: `${R2}/trips/canada-nouvelle-ecosse-ipe-hotel-rossmount.jpg`,
      },
      {
        name: "The Great George",
        nameEn: "The Great George",
        nameEs: "The Great George",
        description:
          "Un boutique-hôtel dans plusieurs maisons historiques du centre de Charlottetown, à deux pas des restaurants de fruits de mer et de la ferme de Green Gables.",
        descriptionEn:
          "A boutique hotel spread across several historic houses in downtown Charlottetown, steps from seafood restaurants and the Green Gables farmhouse.",
        descriptionEs:
          "Un hotel boutique repartido en varias casas históricas del centro de Charlottetown, a pocos pasos de restaurantes de marisco y de la granja de Green Gables.",
        image: `${R2}/trips/canada-nouvelle-ecosse-ipe-hotel-greatgeorge.jpg`,
      },
    ],
  },
  {
    destinationSlug: "etats-unis",
    tour: {
      name: "États-Unis : New York et la Nouvelle-Angleterre en couleurs d'automne",
      nameEn: "United States: New York and New England in Fall Colours",
      nameEs: "Estados Unidos: Nueva York y Nueva Inglaterra en colores de otoño",
      slug: "etats-unis-newyork-nouvelle-angleterre",
      image: `${R2}/tours/etats-unis-newyork-nouvelle-angleterre.jpg`,
      images: `${R2}/trips/etats-unis-nyne-gallery-1.jpg,${R2}/trips/etats-unis-nyne-gallery-2.jpg,${R2}/trips/etats-unis-nyne-gallery-3.jpg,${R2}/trips/etats-unis-nyne-gallery-4.jpg,${R2}/trips/etats-unis-nyne-gallery-5.jpg,${R2}/trips/etats-unis-nyne-gallery-6.jpg`,
      tagline: "La ville qui ne dort jamais, puis des routes de montagne embrasées par les couleurs de l'automne",
      taglineEn: "The city that never sleeps, then mountain roads ablaze with autumn colour",
      taglineEs: "La ciudad que nunca duerme, y después carreteras de montaña encendidas por los colores del otoño",
      description:
        "Un voyage entre l'énergie urbaine de New York et la Nouvelle-Angleterre à l'automne, lorsque les forêts d'érables du Vermont et du New Hampshire s'embrasent de rouge et d'or dans l'un des plus beaux spectacles naturels d'Amérique du Nord, le fameux « leaf peeping » qui attire chaque année des visiteurs du monde entier.",
      descriptionEn:
        "A journey between the urban energy of New York and New England in autumn, when the maple forests of Vermont and New Hampshire blaze with red and gold in one of North America's most spectacular natural displays, the famous \"leaf peeping\" that draws visitors from around the world every year.",
      descriptionEs:
        "Un viaje entre la energía urbana de Nueva York y Nueva Inglaterra en otoño, cuando los bosques de arces de Vermont y New Hampshire se encienden de rojo y oro en uno de los espectáculos naturales más bellos de Norteamérica, el famoso «leaf peeping» que atrae cada año a visitantes de todo el mundo.",
      price: 3400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Sept-oct",
      whenLabelEn: "Sept-Oct",
      whenLabelEs: "Sept-oct",
      bestMonths: "september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 42,
    },
    sections: [
      {
        heading: "New York, cinq jours dans la ville qui ne dort jamais",
        headingEn: "New York, five days in the city that never sleeps",
        headingEs: "Nueva York, cinco días en la ciudad que nunca duerme",
        body:
          "New York se découvre à pied autant qu'en métro, entre les gratte-ciel de Manhattan, les vergers urbains de Central Park déjà teintés d'automne, et les quartiers de Brooklyn, où galeries d'art et cafés de spécialité ont remplacé les anciens entrepôts industriels. Un dîner au sommet d'un gratte-ciel offre une vue qui résume à elle seule l'ampleur de la ville.",
        bodyEn:
          "New York is explored as much on foot as by subway, between the skyscrapers of Manhattan, the urban orchards of Central Park already tinged with autumn, and the neighbourhoods of Brooklyn, where art galleries and specialty coffee shops have replaced the old industrial warehouses. Dinner atop a skyscraper offers a view that alone sums up the scale of the city.",
        bodyEs:
          "Nueva York se descubre tanto a pie como en metro, entre los rascacielos de Manhattan, los huertos urbanos de Central Park ya teñidos de otoño, y los barrios de Brooklyn, donde galerías de arte y cafeterías de especialidad han sustituido a los antiguos almacenes industriales. Una cena en lo alto de un rascacielos ofrece una vista que resume por sí sola la magnitud de la ciudad.",
      },
      {
        heading: "La route des couleurs, du Vermont au New Hampshire",
        headingEn: "The Colour Trail, from Vermont to New Hampshire",
        headingEs: "La ruta de los colores, de Vermont a New Hampshire",
        body:
          "La route serpente ensuite à travers le Vermont et le New Hampshire, où des kilomètres d'érablières s'embrasent de rouge, d'orange et de jaune entre mi-septembre et mi-octobre. Étapes dans des villages de charpente blanche typiques de la Nouvelle-Angleterre, dégustation de cidre chaud et de tarte aux pommes fraîchement sortie du four dans des fermes familiales ouvertes aux visiteurs.",
        bodyEn:
          "The road then winds through Vermont and New Hampshire, where miles of maple groves blaze red, orange, and yellow between mid-September and mid-October. Stops in white-clapboard villages typical of New England, tastings of hot cider and apple pie fresh from the oven at family farms open to visitors.",
        bodyEs:
          "La ruta serpentea después por Vermont y New Hampshire, donde kilómetros de arces se encienden de rojo, naranja y amarillo entre mediados de septiembre y mediados de octubre. Paradas en pueblos de tablas blancas típicos de Nueva Inglaterra, degustación de sidra caliente y tarta de manzana recién horneada en granjas familiares abiertas a los visitantes.",
      },
    ],
    hotels: [
      {
        name: "The Ludlow Hotel, New York",
        nameEn: "The Ludlow Hotel, New York",
        nameEs: "The Ludlow Hotel, Nueva York",
        description:
          "Un hôtel de charme sur le Lower East Side, décoration mêlant bois brut et velours, terrasse sur le toit avec vue sur les toits de Manhattan.",
        descriptionEn:
          "A boutique hotel on the Lower East Side, decor blending raw wood and velvet, a rooftop terrace overlooking Manhattan's skyline.",
        descriptionEs:
          "Un hotel con encanto en el Lower East Side, decoración que combina madera cruda y terciopelo, terraza en la azotea con vistas a los tejados de Manhattan.",
        image: `${R2}/trips/etats-unis-nyne-hotel-ludlow.jpg`,
      },
      {
        name: "Woodstock Inn, Vermont",
        nameEn: "Woodstock Inn, Vermont",
        nameEs: "Woodstock Inn, Vermont",
        description:
          "Une auberge historique au cœur d'un village classé parmi les plus pittoresques du Vermont, cheminée dans le hall et vue directe sur les collines colorées à l'automne.",
        descriptionEn:
          "A historic inn at the heart of a village ranked among Vermont's most picturesque, a fireplace in the lobby and a direct view of the hills in autumn colour.",
        descriptionEs:
          "Una posada histórica en el corazón de un pueblo considerado entre los más pintorescos de Vermont, chimenea en el vestíbulo y vistas directas a las colinas coloreadas en otoño.",
        image: `${R2}/trips/etats-unis-nyne-hotel-woodstockinn.jpg`,
      },
    ],
  },
  {
    destinationSlug: "mexique",
    tour: {
      name: "Mexique : Oaxaca, l'âme culturelle du pays",
      nameEn: "Mexico: Oaxaca, the Country's Cultural Soul",
      nameEs: "México: Oaxaca, el alma cultural del país",
      slug: "mexique-oaxaca",
      image: `${R2}/tours/mexique-oaxaca.jpg`,
      images: `${R2}/trips/mexique-oaxaca-gallery-1.jpg,${R2}/trips/mexique-oaxaca-gallery-2.jpg,${R2}/trips/mexique-oaxaca-gallery-3.jpg,${R2}/trips/mexique-oaxaca-gallery-4.jpg,${R2}/trips/mexique-oaxaca-gallery-5.jpg,${R2}/trips/mexique-oaxaca-gallery-6.jpg`,
      tagline: "La capitale gastronomique du Mexique, entre marchés colorés, mezcal artisanal et ruines zapotèques",
      taglineEn: "Mexico's gastronomic capital, between colourful markets, artisanal mezcal, and Zapotec ruins",
      taglineEs: "La capital gastronómica de México, entre mercados de colores, mezcal artesanal y ruinas zapotecas",
      description:
        "Loin des plages de la Riviera Maya, Oaxaca est considérée par beaucoup comme la capitale culturelle et gastronomique du Mexique : une ville coloniale classée à l'UNESCO, entourée de villages spécialisés dans le tissage, la poterie noire et la distillation artisanale du mezcal, et dominée par les ruines de Monte Albán, ancienne capitale zapotèque perchée sur un plateau montagneux.",
      descriptionEn:
        "Far from the beaches of the Riviera Maya, Oaxaca is considered by many to be Mexico's cultural and gastronomic capital: a UNESCO-listed colonial city, surrounded by villages specialising in weaving, black pottery, and artisanal mezcal distilling, and dominated by the ruins of Monte Albán, a former Zapotec capital perched on a mountain plateau.",
      descriptionEs:
        "Lejos de las playas de la Riviera Maya, Oaxaca es considerada por muchos la capital cultural y gastronómica de México: una ciudad colonial declarada por la UNESCO, rodeada de pueblos especializados en el tejido, la cerámica negra y la destilación artesanal del mezcal, y dominada por las ruinas de Monte Albán, antigua capital zapoteca encaramada en una meseta montañosa.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Oct-nov | Fév à avr",
      whenLabelEn: "Oct-Nov | Feb to April",
      whenLabelEs: "Oct-nov | feb a abr",
      bestMonths: "october,november,february,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 43,
    },
    sections: [
      {
        heading: "Le centre historique et les marchés d'Oaxaca",
        headingEn: "Oaxaca's historic centre and markets",
        headingEs: "El centro histórico y los mercados de Oaxaca",
        body:
          "Le centre historique d'Oaxaca, classé à l'UNESCO, se découvre au fil de ses églises baroques couvertes de feuilles d'or et de ses marchés débordants de piments séchés, de mole aux vingt ingrédients et de chapulines grillés, sauterelles épicées considérées comme une spécialité locale. La ville est aussi réputée pour ses ateliers de textile, où les tisserands zapotèques perpétuent des motifs vieux de plusieurs siècles.",
        bodyEn:
          "Oaxaca's UNESCO-listed historic centre is explored through its baroque, gold-leaf-covered churches and its markets overflowing with dried chillies, twenty-ingredient mole, and grilled chapulines, spiced grasshoppers considered a local delicacy. The city is also known for its textile workshops, where Zapotec weavers keep alive patterns centuries old.",
        bodyEs:
          "El centro histórico de Oaxaca, declarado por la UNESCO, se descubre entre sus iglesias barrocas cubiertas de pan de oro y sus mercados desbordantes de chiles secos, mole de veinte ingredientes y chapulines a la parrilla, saltamontes especiados considerados una especialidad local. La ciudad es también conocida por sus talleres textiles, donde los tejedores zapotecas perpetúan motivos centenarios.",
      },
      {
        heading: "Monte Albán et la route du mezcal",
        headingEn: "Monte Albán and the Mezcal Route",
        headingEs: "Monte Albán y la ruta del mezcal",
        body:
          "Monte Albán, perchée sur un plateau artificiellement nivelé il y a plus de deux mille cinq cents ans, fut la capitale de la civilisation zapotèque et compte parmi les plus anciennes cités urbanisées d'Amérique. La route du mezcal, qui serpente à travers les villages voisins de Santiago Matatlán, permet de visiter des distilleries familiales où l'agave est encore cuit dans des fours en terre selon des méthodes séculaires.",
        bodyEn:
          "Monte Albán, perched on a plateau artificially levelled over two thousand five hundred years ago, was the capital of Zapotec civilisation and ranks among the oldest urbanised cities in the Americas. The Mezcal Route, winding through the nearby villages of Santiago Matatlán, allows visits to family distilleries where agave is still roasted in earthen pits using centuries-old methods.",
        bodyEs:
          "Monte Albán, encaramada en una meseta nivelada artificialmente hace más de dos mil quinientos años, fue la capital de la civilización zapoteca y se cuenta entre las ciudades urbanizadas más antiguas de América. La ruta del mezcal, que serpentea por los pueblos vecinos de Santiago Matatlán, permite visitar destilerías familiares donde el agave todavía se cuece en hornos de tierra según métodos centenarios.",
      },
    ],
    hotels: [
      {
        name: "Casa Oaxaca",
        nameEn: "Casa Oaxaca",
        nameEs: "Casa Oaxaca",
        description:
          "Un hôtel-boutique dans une demeure coloniale restaurée du centre historique, patio intérieur planté de bougainvilliers, restaurant gastronomique réputé dans toute la ville.",
        descriptionEn:
          "A boutique hotel in a restored colonial mansion in the historic centre, an inner courtyard planted with bougainvillea, a gastronomic restaurant known throughout the city.",
        descriptionEs:
          "Un hotel boutique en una mansión colonial restaurada del centro histórico, patio interior con buganvillas, restaurante gastronómico conocido en toda la ciudad.",
        image: `${R2}/trips/mexique-oaxaca-hotel-casaoaxaca.jpg`,
      },
      {
        name: "Quinta Real Oaxaca",
        nameEn: "Quinta Real Oaxaca",
        nameEs: "Quinta Real Oaxaca",
        description:
          "Un hôtel installé dans un ancien couvent du XVIe siècle, arcades de pierre et jardins intérieurs, à deux pas du centre historique et de ses marchés.",
        descriptionEn:
          "A hotel set in a former 16th-century convent, stone arcades and interior gardens, steps from the historic centre and its markets.",
        descriptionEs:
          "Un hotel instalado en un antiguo convento del siglo XVI, arcadas de piedra y jardines interiores, a pocos pasos del centro histórico y sus mercados.",
        image: `${R2}/trips/mexique-oaxaca-hotel-quintareal.jpg`,
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
