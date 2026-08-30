// Amérique du Sud batch 1 — Argentina, Chile, Peru. New trips bringing each destination to at
// least 3, styled on Black Tomato's real structure (a short number of named-hotel chapters,
// not an exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-amerique-du-sud-1.ts
// Requires scripts/upload-images-amerique-du-sud-1.ts to have been run first (this script
// refuses to write anything if a referenced image isn't already live in R2 — see
// seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "argentine",
    tour: {
      name: "Argentine : Iguazu et le Nord-Ouest andin",
      nameEn: "Argentina: Iguazu and the Andean Northwest",
      nameEs: "Argentina: Iguazú y el Noroeste andino",
      slug: "argentine-iguazu-noroeste",
      image: `${R2}/journeys/argentine-iguazu-noroeste-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Deux cent soixante-quinze cascades qui font trembler le sol, puis des montagnes striées de quatorze couleurs",
      taglineEn: "Two hundred and seventy-five waterfalls that shake the ground, then mountains striped in fourteen colours",
      taglineEs: "Doscientas setenta y cinco cascadas que hacen temblar el suelo, y después montañas rayadas de catorce colores",
      description:
        "Un voyage entre deux extrêmes géographiques de l'Argentine : les chutes d'Iguazu, deux cent soixante-quinze cascades réparties sur près de trois kilomètres à la frontière du Brésil, classées à l'UNESCO, puis le Nord-Ouest andin, région désertique d'altitude où les montagnes strient leurs flancs de quatorze couleurs minérales différentes autour de la ville coloniale de Salta.",
      descriptionEn:
        "A journey between two geographic extremes of Argentina: Iguazu Falls, two hundred and seventy-five cascades spread across nearly three kilometres on the Brazilian border, a UNESCO World Heritage Site, then the Andean Northwest, a high-altitude desert region where mountains stripe their flanks in fourteen different mineral colours around the colonial town of Salta.",
      descriptionEs:
        "Un viaje entre dos extremos geográficos de Argentina: las cataratas de Iguazú, doscientas setenta y cinco cascadas repartidas a lo largo de casi tres kilómetros en la frontera con Brasil, declaradas por la UNESCO, y después el Noroeste andino, una región desértica de altura donde las montañas rayan sus laderas con catorce colores minerales distintos en torno a la ciudad colonial de Salta.",
      price: 4000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Avr-juin | Sept-oct",
      whenLabelEn: "April-June | Sept-Oct",
      whenLabelEs: "Abr-jun | sept-oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 44,
    },
    chapters: [
      {
        title: "Les chutes d'Iguazu",
        titleEn: "Iguazu Falls",
        titleEs: "Las cataratas de Iguazú",
        intro:
          "Premier chapitre aux chutes d'Iguazu, système de deux cent soixante-quinze cascades qui font pâlir jusqu'aux chutes du Niagara par leur ampleur. La Gorge du Diable, où quatorze cascades se rejoignent dans un mur d'eau et d'écume assourdissant, se découvre par une passerelle métallique qui avance au cœur même du nuage de vapeur.",
        introEn:
          "The first chapter unfolds at Iguazu Falls, a system of two hundred and seventy-five cascades that dwarf even Niagara Falls in scale. The Devil's Throat, where fourteen waterfalls converge into a deafening wall of water and spray, is reached by a metal walkway that advances straight into the cloud of mist.",
        introEs:
          "El primer capítulo se desarrolla en las cataratas de Iguazú, un sistema de doscientas setenta y cinco cascadas que hacen palidecer incluso a las cataratas del Niágara por su magnitud. La Garganta del Diablo, donde catorce cascadas se unen en un muro de agua y espuma ensordecedor, se descubre mediante una pasarela metálica que avanza hasta el propio centro de la nube de vapor.",
        galleryImages: `${R2}/journeys/argentine-iguazu-gallery1.jpg,${R2}/journeys/argentine-iguazu-gallery2.jpg,${R2}/journeys/argentine-iguazu-gallery3.jpg`,
        mapMarkerX: 85,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "La Gorge du Diable",
            titleEn: "The Devil's Throat",
            titleEs: "La Garganta del Diablo",
            description:
              "Marche le long de la passerelle métallique jusqu'à la Gorge du Diable, point culminant du système de chutes où le fracas de l'eau couvre toute conversation, mouillés garantis par les embruns projetés à plusieurs dizaines de mètres.",
            descriptionEn:
              "A walk along the metal walkway to the Devil's Throat, the highlight of the falls system where the roar of the water drowns out all conversation, a soaking from the spray thrown tens of metres into the air guaranteed.",
            descriptionEs:
              "Caminata por la pasarela metálica hasta la Garganta del Diablo, el punto culminante del sistema de cataratas donde el estruendo del agua ahoga cualquier conversación, con una mojadura garantizada por la espuma proyectada a decenas de metros.",
            image: `${R2}/journeys/argentine-iguazu-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sentier inférieur et excursion en bateau",
            titleEn: "The lower trail and a boat excursion",
            titleEs: "El sendero inferior y excursión en barco",
            description:
              "Marche le long du sentier inférieur, au plus près des chutes, puis excursion en bateau qui s'approche jusqu'au pied de la cascade San Martín, pour une expérience à la fois visuelle et sensorielle du site.",
            descriptionEn:
              "A walk along the lower trail, right up close to the falls, then a boat excursion that approaches the foot of San Martín Falls, for an experience that's both visual and sensory.",
            descriptionEs:
              "Caminata por el sendero inferior, muy cerca de las cataratas, y excursión en barco que se acerca hasta el pie de la cascada San Martín, para una experiencia tanto visual como sensorial del lugar.",
            image: `${R2}/journeys/argentine-iguazu-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Salta et la Quebrada de Humahuaca",
        titleEn: "Salta and the Quebrada de Humahuaca",
        titleEs: "Salta y la Quebrada de Humahuaca",
        intro:
          "Vol vers Salta, ville coloniale surnommée « la Linda » pour ses façades espagnoles préservées, point de départ vers la Quebrada de Humahuaca, gorge classée à l'UNESCO où l'érosion a sculpté des montagnes striées de rouge, de vert et de violet. Le village de Purmamarca, dominé par la Colline aux Sept Couleurs, reste l'un des sites les plus photographiés d'Argentine.",
        introEn:
          "A flight to Salta, a colonial town nicknamed \"la Linda\" for its preserved Spanish façades, the starting point for the Quebrada de Humahuaca, a UNESCO-listed gorge where erosion has sculpted mountains striped in red, green, and violet. The village of Purmamarca, dominated by the Hill of Seven Colours, remains one of the most photographed sites in Argentina.",
        introEs:
          "Vuelo hacia Salta, ciudad colonial apodada «la Linda» por sus fachadas españolas conservadas, punto de partida hacia la Quebrada de Humahuaca, un desfiladero declarado por la UNESCO donde la erosión ha esculpido montañas rayadas de rojo, verde y violeta. El pueblo de Purmamarca, dominado por el Cerro de los Siete Colores, sigue siendo uno de los lugares más fotografiados de Argentina.",
        galleryImages: `${R2}/journeys/argentine-noroeste-gallery1.jpg,${R2}/journeys/argentine-noroeste-gallery2.jpg,${R2}/journeys/argentine-noroeste-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Salta la Linda et ses façades coloniales",
            titleEn: "Salta la Linda and its colonial facades",
            titleEs: "Salta la Linda y sus fachadas coloniales",
            description:
              "Visite du centre historique de Salta, cathédrale baroque rose et façades coloniales intactes, puis montée en téléphérique jusqu'au Cerro San Bernardo pour une vue d'ensemble sur la ville et les montagnes environnantes.",
            descriptionEn:
              "A visit to Salta's historic centre, a pink baroque cathedral and intact colonial facades, then a cable car ride up Cerro San Bernardo for an overview of the city and surrounding mountains.",
            descriptionEs:
              "Visita al centro histórico de Salta, catedral barroca rosa y fachadas coloniales intactas, y subida en teleférico al cerro San Bernardo para una vista de conjunto de la ciudad y las montañas circundantes.",
            image: `${R2}/journeys/argentine-noroeste-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La Colline aux Sept Couleurs et Purmamarca",
            titleEn: "The Hill of Seven Colours and Purmamarca",
            titleEs: "El Cerro de los Siete Colores y Purmamarca",
            description:
              "Route à travers la Quebrada de Humahuaca jusqu'au village de Purmamarca, dominé par la Colline aux Sept Couleurs, puis visite du marché artisanal local, réputé pour ses tissages en laine de lama et d'alpaga.",
            descriptionEn:
              "A drive through the Quebrada de Humahuaca to the village of Purmamarca, dominated by the Hill of Seven Colours, then a visit to the local artisan market, known for its llama and alpaca wool weavings.",
            descriptionEs:
              "Ruta por la Quebrada de Humahuaca hasta el pueblo de Purmamarca, dominado por el Cerro de los Siete Colores, y visita al mercado artesanal local, conocido por sus tejidos de lana de llama y alpaca.",
            image: `${R2}/journeys/argentine-noroeste-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "chili",
    tour: {
      name: "Chili : l'île de Pâques et l'archipel de Chiloé",
      nameEn: "Chile: Easter Island and the Chiloé Archipelago",
      nameEs: "Chile: la isla de Pascua y el archipiélago de Chiloé",
      slug: "chili-pascua-chiloe",
      image: `${R2}/journeys/chili-pascua-chiloe-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des géants de pierre isolés au milieu du Pacifique, puis des maisons sur pilotis et des églises de bois classées à l'UNESCO",
      taglineEn: "Stone giants isolated in the middle of the Pacific, then stilt houses and UNESCO-listed wooden churches",
      taglineEs: "Gigantes de piedra aislados en medio del Pacífico, y después casas sobre pilotes e iglesias de madera declaradas por la UNESCO",
      description:
        "Un voyage entre deux îles chiliennes aux mythologies opposées : l'île de Pâques, territoire polynésien le plus isolé au monde, où près de mille moaïs de pierre veillent sur les côtes, puis l'archipel de Chiloé, au sud du Chili continental, où les maisons colorées sur pilotis et les églises de bois construites sans un seul clou, classées à l'UNESCO, témoignent d'un syncrétisme unique entre traditions indigènes et catholicisme jésuite.",
      descriptionEn:
        "A journey between two Chilean islands of opposing mythologies: Easter Island, the most isolated Polynesian territory in the world, where nearly a thousand stone moai watch over the coastline, then the Chiloé Archipelago, off southern mainland Chile, where colourful stilt houses and UNESCO-listed wooden churches built without a single nail bear witness to a unique syncretism between indigenous traditions and Jesuit Catholicism.",
      descriptionEs:
        "Un viaje entre dos islas chilenas de mitologías opuestas: la isla de Pascua, el territorio polinesio más aislado del mundo, donde cerca de mil moáis de piedra vigilan la costa, y después el archipiélago de Chiloé, al sur del Chile continental, donde las coloridas casas sobre pilotes y las iglesias de madera construidas sin un solo clavo, declaradas por la UNESCO, dan testimonio de un sincretismo único entre tradiciones indígenas y catolicismo jesuita.",
      price: 5200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 8,
      durationUnit: "nights",
      duration: "8 nuits",
      durationEn: "8 nights",
      durationEs: "8 noches",
      whenLabel: "Oct à mars",
      whenLabelEn: "Oct to March",
      whenLabelEs: "Oct a marzo",
      bestMonths: "october,november,december,january,february,march",
      category: "multi-day",
      theme: "culture",
      feeling: "freedom",
      travelerTypes: "couples,solo,honeymoon",
      maxGuests: 6,
      featured: false,
      order: 45,
    },
    chapters: [
      {
        title: "L'île de Pâques",
        titleEn: "Easter Island",
        titleEs: "La isla de Pascua",
        intro:
          "Premier chapitre sur l'île de Pâques, ou Rapa Nui, territoire habité le plus isolé de la planète, à plus de trois mille cinq cents kilomètres des côtes chiliennes. Près de neuf cents moaïs, statues monumentales sculptées entre le XIIIe et le XVIe siècle par la civilisation rapa nui, se dressent encore sur l'île, dont la plus grande concentration se trouve sur la plateforme cérémonielle d'Ahu Tongariki, quinze statues alignées face à l'océan.",
        introEn:
          "The first chapter unfolds on Easter Island, or Rapa Nui, the most isolated inhabited territory on the planet, more than three thousand five hundred kilometres from the Chilean coast. Nearly nine hundred moai, monumental statues carved between the 13th and 16th centuries by the Rapa Nui civilisation, still stand on the island, their greatest concentration found at the Ahu Tongariki ceremonial platform, fifteen statues lined up facing the ocean.",
        introEs:
          "El primer capítulo se desarrolla en la isla de Pascua, o Rapa Nui, el territorio habitado más aislado del planeta, a más de tres mil quinientos kilómetros de las costas chilenas. Cerca de novecientos moáis, estatuas monumentales talladas entre los siglos XIII y XVI por la civilización rapa nui, todavía se erigen en la isla, cuya mayor concentración se encuentra en la plataforma ceremonial de Ahu Tongariki, quince estatuas alineadas frente al océano.",
        galleryImages: `${R2}/journeys/chili-pascua-gallery1.jpg,${R2}/journeys/chili-pascua-gallery2.jpg,${R2}/journeys/chili-pascua-gallery3.jpg`,
        mapMarkerX: 10,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Ahu Tongariki et le volcan Rano Raraku",
            titleEn: "Ahu Tongariki and Rano Raraku volcano",
            titleEs: "Ahu Tongariki y el volcán Rano Raraku",
            description:
              "Visite d'Ahu Tongariki, quinze moaïs alignés face à l'océan au lever du soleil, puis du volcan Rano Raraku, carrière où furent sculptés la quasi-totalité des moaïs, dont plusieurs sont restés inachevés à flanc de cratère.",
            descriptionEn:
              "A visit to Ahu Tongariki, fifteen moai lined up facing the ocean at sunrise, then to Rano Raraku volcano, the quarry where almost all the moai were carved, several of which remain unfinished on the crater's slope.",
            descriptionEs:
              "Visita a Ahu Tongariki, quince moáis alineados frente al océano al amanecer, y al volcán Rano Raraku, la cantera donde se tallaron casi todos los moáis, varios de los cuales quedaron inacabados en la ladera del cráter.",
            image: `${R2}/journeys/chili-pascua-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le volcan Rano Kau et le village cérémoniel d'Orongo",
            titleEn: "Rano Kau volcano and the ceremonial village of Orongo",
            titleEs: "El volcán Rano Kau y el poblado ceremonial de Orongo",
            description:
              "Randonnée jusqu'au cratère du volcan Rano Kau, immense caldeira remplie d'un lac tapissé de roseaux, puis visite du village cérémoniel d'Orongo, où se déroulait le rituel de l'homme-oiseau jusqu'au XIXe siècle.",
            descriptionEn:
              "A hike to the crater of Rano Kau volcano, an immense caldera filled with a reed-carpeted lake, then a visit to the ceremonial village of Orongo, where the birdman ritual took place until the 19th century.",
            descriptionEs:
              "Caminata hasta el cráter del volcán Rano Kau, una inmensa caldera con un lago tapizado de juncos, y visita al poblado ceremonial de Orongo, donde se celebraba el ritual del hombre pájaro hasta el siglo XIX.",
            image: `${R2}/journeys/chili-pascua-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'archipel de Chiloé",
        titleEn: "The Chiloé Archipelago",
        titleEs: "El archipiélago de Chiloé",
        intro:
          "Vol vers l'archipel de Chiloé, au sud du Chili continental, où l'isolement a préservé une culture insulaire unique, mélange de traditions indigènes huilliches et de catholicisme introduit par les missionnaires jésuites au XVIIe siècle. Les palafitos, maisons colorées construites sur pilotis au-dessus de l'eau, et les seize églises de bois classées à l'UNESCO, bâties sans un seul clou métallique, composent un paysage architectural qui ne ressemble à aucun autre au Chili.",
        introEn:
          "A flight to the Chiloé Archipelago, off southern mainland Chile, where isolation has preserved a unique island culture, a blend of indigenous Huilliche traditions and Catholicism introduced by Jesuit missionaries in the 17th century. The palafitos, colourful houses built on stilts above the water, and the sixteen UNESCO-listed wooden churches, built without a single metal nail, compose an architectural landscape unlike anywhere else in Chile.",
        introEs:
          "Vuelo hacia el archipiélago de Chiloé, al sur del Chile continental, donde el aislamiento ha preservado una cultura insular única, mezcla de tradiciones indígenas huilliches y del catolicismo introducido por los misioneros jesuitas en el siglo XVII. Los palafitos, casas de colores construidas sobre pilotes encima del agua, y las dieciséis iglesias de madera declaradas por la UNESCO, construidas sin un solo clavo metálico, componen un paisaje arquitectónico que no se parece a ningún otro en Chile.",
        galleryImages: `${R2}/journeys/chili-chiloe-gallery1.jpg,${R2}/journeys/chili-chiloe-gallery2.jpg,${R2}/journeys/chili-chiloe-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 85,
        days: [
          {
            dayNumber: 1,
            title: "Les palafitos de Castro",
            titleEn: "The palafitos of Castro",
            titleEs: "Los palafitos de Castro",
            description:
              "Visite de Castro, capitale de l'archipel, et de ses quartiers de palafitos aux façades colorées construites sur pilotis, avant une dégustation de curanto, plat traditionnel cuit sous terre avec des pierres chaudes.",
            descriptionEn:
              "A visit to Castro, the archipelago's capital, and its neighbourhoods of colourful palafitos built on stilts, followed by a tasting of curanto, a traditional dish cooked underground with hot stones.",
            descriptionEs:
              "Visita a Castro, capital del archipiélago, y a sus barrios de palafitos de fachadas coloridas construidos sobre pilotes, seguida de una degustación de curanto, plato tradicional cocinado bajo tierra con piedras calientes.",
            image: `${R2}/journeys/chili-chiloe-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les églises de bois et la mythologie chilote",
            titleEn: "The wooden churches and Chilote mythology",
            titleEs: "Las iglesias de madera y la mitología chilota",
            description:
              "Visite de plusieurs églises de bois classées à l'UNESCO, dont celle de Nercón, puis rencontre avec un conteur local pour une initiation à la mythologie chilote, peuplée de créatures marines et de bateaux fantômes.",
            descriptionEn:
              "A visit to several UNESCO-listed wooden churches, including the one at Nercón, then a meeting with a local storyteller for an introduction to Chilote mythology, populated by sea creatures and ghost ships.",
            descriptionEs:
              "Visita a varias iglesias de madera declaradas por la UNESCO, entre ellas la de Nercón, y encuentro con un narrador local para una iniciación a la mitología chilota, poblada de criaturas marinas y barcos fantasma.",
            image: `${R2}/journeys/chili-chiloe-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "perou",
    tour: {
      name: "Pérou : le lac Titicaca et le canyon de Colca",
      nameEn: "Peru: Lake Titicaca and Colca Canyon",
      nameEs: "Perú: el lago Titicaca y el cañón del Colca",
      slug: "perou-titicaca-colca",
      image: `${R2}/journeys/perou-titicaca-colca-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des îles flottantes tissées en roseau, puis l'un des plus profonds canyons du monde survolé par des condors",
      taglineEn: "Floating islands woven from reeds, then one of the world's deepest canyons soared over by condors",
      taglineEs: "Islas flotantes tejidas con totora, y después uno de los cañones más profundos del mundo sobrevolado por cóndores",
      description:
        "Un voyage dans le sud du Pérou, entre le lac Titicaca, le plus haut lac navigable du monde à plus de trois mille huit cents mètres, où vivent encore les Uros sur des îles artificielles tissées en roseau totora, et le canyon de Colca, deux fois plus profond que le Grand Canyon américain, où planent chaque matin des condors des Andes aux ailes de plus de trois mètres d'envergure.",
      descriptionEn:
        "A journey through southern Peru, between Lake Titicaca, the highest navigable lake in the world at over three thousand eight hundred metres, where the Uros people still live on artificial islands woven from totora reeds, and Colca Canyon, twice as deep as the American Grand Canyon, where Andean condors with wingspans over three metres soar every morning.",
      descriptionEs:
        "Un viaje por el sur de Perú, entre el lago Titicaca, el lago navegable más alto del mundo a más de tres mil ochocientos metros, donde los uros todavía viven en islas artificiales tejidas con totora, y el cañón del Colca, dos veces más profundo que el Gran Cañón estadounidense, donde cada mañana planean cóndores andinos con alas de más de tres metros de envergadura.",
      price: 3400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Avr à oct",
      whenLabelEn: "April to Oct",
      whenLabelEs: "Abr a oct",
      bestMonths: "april,may,june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 46,
    },
    chapters: [
      {
        title: "Le lac Titicaca",
        titleEn: "Lake Titicaca",
        titleEs: "El lago Titicaca",
        intro:
          "Premier chapitre sur le lac Titicaca, considéré par la mythologie inca comme le lieu de naissance du soleil. Les îles flottantes des Uros, construites et régulièrement rechargées en roseau totora séché, abritent encore aujourd'hui plusieurs familles qui vivent selon des méthodes largement inchangées depuis des siècles, tandis que l'île de Taquile, accessible en bateau, conserve des traditions textiles inscrites au patrimoine immatériel de l'UNESCO.",
        introEn:
          "The first chapter unfolds on Lake Titicaca, considered in Inca mythology to be the birthplace of the sun. The floating islands of the Uros, built and regularly topped up with dried totora reed, still shelter several families today who live using methods largely unchanged for centuries, while Taquile Island, reached by boat, preserves textile traditions listed as UNESCO intangible heritage.",
        introEs:
          "El primer capítulo se desarrolla en el lago Titicaca, considerado por la mitología inca como el lugar de nacimiento del sol. Las islas flotantes de los uros, construidas y recargadas regularmente con totora seca, todavía albergan hoy a varias familias que viven según métodos apenas cambiados en siglos, mientras que la isla de Taquile, accesible en barco, conserva tradiciones textiles inscritas en el patrimonio inmaterial de la UNESCO.",
        galleryImages: `${R2}/journeys/perou-titicaca-gallery1.jpg,${R2}/journeys/perou-titicaca-gallery2.jpg,${R2}/journeys/perou-titicaca-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Les îles flottantes des Uros",
            titleEn: "The floating islands of the Uros",
            titleEs: "Las islas flotantes de los uros",
            description:
              "Navigation vers les îles flottantes des Uros, construction entièrement en roseau totora que les familles rechargent en permanence pour compenser la décomposition naturelle du matériau, rencontre avec les habitants et démonstration de construction traditionnelle.",
            descriptionEn:
              "A boat trip to the floating islands of the Uros, built entirely from totora reed that families constantly replenish to offset the material's natural decay, a meeting with residents and a demonstration of traditional construction.",
            descriptionEs:
              "Navegación hacia las islas flotantes de los uros, construidas enteramente con totora que las familias recargan constantemente para compensar la descomposición natural del material, encuentro con los habitantes y demostración de construcción tradicional.",
            image: `${R2}/journeys/perou-titicaca-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "L'île de Taquile et ses tisserands",
            titleEn: "Taquile Island and its weavers",
            titleEs: "La isla de Taquile y sus tejedores",
            description:
              "Navigation vers l'île de Taquile, dont les habitants, hommes comme femmes, pratiquent un tissage traditionnel inscrit au patrimoine culturel immatériel de l'UNESCO, déjeuner de truite fraîche du lac face à la cordillère bolivienne au loin.",
            descriptionEn:
              "A boat trip to Taquile Island, whose inhabitants, men and women alike, practise traditional weaving listed as UNESCO intangible cultural heritage, a lunch of fresh lake trout facing the Bolivian cordillera in the distance.",
            descriptionEs:
              "Navegación hacia la isla de Taquile, cuyos habitantes, hombres y mujeres por igual, practican un tejido tradicional inscrito en el patrimonio cultural inmaterial de la UNESCO, almuerzo de trucha fresca del lago frente a la cordillera boliviana a lo lejos.",
            image: `${R2}/journeys/perou-titicaca-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le canyon de Colca",
        titleEn: "Colca Canyon",
        titleEs: "El cañón del Colca",
        intro:
          "Route vers le canyon de Colca, deux fois plus profond que le Grand Canyon américain, creusé entre deux volcans par la rivière du même nom. Le village de Chivay et les terrasses agricoles pré-incas qui structurent encore les flancs du canyon témoignent de plus de mille ans d'agriculture continue, tandis que la Croix du Condor offre, chaque matin, l'un des meilleurs points d'observation au monde pour ce rapace emblématique des Andes.",
        introEn:
          "The road to Colca Canyon, twice as deep as the American Grand Canyon, carved between two volcanoes by the river of the same name. The village of Chivay and the pre-Inca agricultural terraces that still structure the canyon's flanks bear witness to over a thousand years of continuous farming, while the Cross of the Condor offers, every morning, one of the best viewpoints in the world for this emblematic Andean raptor.",
        introEs:
          "Ruta hacia el cañón del Colca, dos veces más profundo que el Gran Cañón estadounidense, excavado entre dos volcanes por el río homónimo. El pueblo de Chivay y las terrazas agrícolas preincaicas que todavía estructuran las laderas del cañón dan testimonio de más de mil años de agricultura continua, mientras que la Cruz del Cóndor ofrece, cada mañana, uno de los mejores miradores del mundo para esta ave rapaz emblemática de los Andes.",
        galleryImages: `${R2}/journeys/perou-colca-gallery1.jpg,${R2}/journeys/perou-colca-gallery2.jpg,${R2}/journeys/perou-colca-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 85,
        days: [
          {
            dayNumber: 1,
            title: "Chivay et les terrasses pré-incas",
            titleEn: "Chivay and the pre-Inca terraces",
            titleEs: "Chivay y las terrazas preincaicas",
            description:
              "Route vers Chivay à travers l'altiplano, arrêt parmi les vigognes sauvages de la réserve nationale de Salinas y Aguada Blanca, puis découverte des terrasses agricoles pré-incas qui structurent le canyon depuis plus de mille ans.",
            descriptionEn:
              "The road to Chivay across the altiplano, a stop among the wild vicuñas of the Salinas y Aguada Blanca national reserve, then a look at the pre-Inca agricultural terraces that have structured the canyon for over a thousand years.",
            descriptionEs:
              "Ruta hacia Chivay a través del altiplano, parada entre las vicuñas salvajes de la reserva nacional de Salinas y Aguada Blanca, y descubrimiento de las terrazas agrícolas preincaicas que estructuran el cañón desde hace más de mil años.",
            image: `${R2}/journeys/perou-colca-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La Croix du Condor à l'aube",
            titleEn: "The Cross of the Condor at dawn",
            titleEs: "La Cruz del Cóndor al amanecer",
            description:
              "Départ matinal vers la Croix du Condor, point de vue où les courants ascendants portent chaque matin plusieurs condors des Andes, dont l'envergure peut dépasser trois mètres, avant le retour vers Arequipa en fin de journée.",
            descriptionEn:
              "An early departure to the Cross of the Condor, a viewpoint where rising air currents carry several Andean condors every morning, their wingspan sometimes exceeding three metres, before the return to Arequipa at the end of the day.",
            descriptionEs:
              "Salida matutina hacia la Cruz del Cóndor, un mirador donde las corrientes ascendentes elevan cada mañana a varios cóndores andinos, cuya envergadura puede superar los tres metros, antes del regreso a Arequipa al final del día.",
            image: `${R2}/journeys/perou-colca-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "argentine",
    tour: {
      name: "Argentine : Mendoza, le vignoble au pied des Andes",
      nameEn: "Argentina: Mendoza, the Vineyard at the Foot of the Andes",
      nameEs: "Argentina: Mendoza, el viñedo al pie de los Andes",
      slug: "argentine-mendoza",
      image: `${R2}/tours/argentine-mendoza.jpg`,
      images: `${R2}/trips/argentine-mendoza-gallery-1.jpg,${R2}/trips/argentine-mendoza-gallery-2.jpg,${R2}/trips/argentine-mendoza-gallery-3.jpg,${R2}/trips/argentine-mendoza-gallery-4.jpg,${R2}/trips/argentine-mendoza-gallery-5.jpg,${R2}/trips/argentine-mendoza-gallery-6.jpg`,
      tagline: "La plus grande région viticole d'Amérique du Sud, à l'ombre du plus haut sommet des Andes",
      taglineEn: "South America's largest wine region, in the shadow of the Andes' highest peak",
      taglineEs: "La mayor región vitivinícola de Sudamérica, a la sombra de la cumbre más alta de los Andes",
      description:
        "Mendoza, capitale du malbec argentin, s'étend au pied de l'Aconcagua, point culminant des Andes et de tout l'hémisphère sud. Les vignobles, irrigués par un système de canaux hérité des civilisations précolombiennes, produisent certains des meilleurs vins de haute altitude au monde, tandis que la ville elle-même, reconstruite après le séisme de 1861, se distingue par ses larges avenues bordées de platanes et ses places ombragées.",
      descriptionEn:
        "Mendoza, capital of Argentine malbec, stretches out at the foot of Aconcagua, the highest peak in the Andes and the entire southern hemisphere. The vineyards, irrigated by a canal system inherited from pre-Columbian civilisations, produce some of the finest high-altitude wines in the world, while the city itself, rebuilt after the 1861 earthquake, stands out for its wide, plane-tree-lined avenues and shaded squares.",
      descriptionEs:
        "Mendoza, capital del malbec argentino, se extiende al pie del Aconcagua, el punto más alto de los Andes y de todo el hemisferio sur. Los viñedos, irrigados por un sistema de canales heredado de las civilizaciones precolombinas, producen algunos de los mejores vinos de altura del mundo, mientras que la propia ciudad, reconstruida tras el terremoto de 1861, destaca por sus amplias avenidas bordeadas de plátanos y sus plazas con sombra.",
      price: 3100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mars-avr | Oct-nov",
      whenLabelEn: "March-April | Oct-Nov",
      whenLabelEs: "Marzo-abr | oct-nov",
      bestMonths: "march,april,october,november",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,groups",
      maxGuests: 6,
      featured: false,
      order: 47,
    },
    sections: [
      {
        heading: "La route des vins de malbec",
        headingEn: "The Malbec Wine Route",
        headingEs: "La ruta del vino de malbec",
        body:
          "La région de Mendoza compte plus de mille bodegas, des grandes maisons historiques aux domaines familiaux boutique, toutes organisées autour du malbec, cépage français devenu l'emblème du pays après avoir presque disparu de son terroir d'origine. Les dégustations s'accompagnent souvent d'un déjeuner en plein air sous les vignes, face à la cordillère enneigée.",
        bodyEn:
          "The Mendoza region counts over a thousand wineries, from grand historic houses to boutique family estates, all organised around malbec, a French grape variety that became the country's emblem after nearly disappearing from its original terroir. Tastings are often accompanied by an open-air lunch beneath the vines, facing the snow-capped cordillera.",
        bodyEs:
          "La región de Mendoza cuenta con más de mil bodegas, desde grandes casas históricas hasta fincas familiares boutique, todas organizadas en torno al malbec, una variedad francesa convertida en emblema del país tras casi desaparecer de su terruño original. Las catas suelen ir acompañadas de un almuerzo al aire libre entre las viñas, frente a la cordillera nevada.",
      },
      {
        heading: "L'Aconcagua et la haute montagne",
        headingEn: "Aconcagua and the high mountains",
        headingEs: "El Aconcagua y la alta montaña",
        body:
          "À moins de deux heures de route, le parc provincial de l'Aconcagua permet d'approcher, sans nécessité d'expérience alpine, le point culminant de l'hémisphère sud à près de sept mille mètres. Une randonnée jusqu'à la lagune de Horcones offre une vue frontale sur le sommet, généralement dégagé le matin avant que les nuages ne s'installent en fin de journée.",
        bodyEn:
          "Less than two hours' drive away, Aconcagua Provincial Park allows visitors, with no mountaineering experience required, to approach the highest point in the southern hemisphere at nearly seven thousand metres. A hike to Laguna de Horcones offers a head-on view of the summit, usually clear in the morning before clouds move in later in the day.",
        bodyEs:
          "A menos de dos horas en coche, el parque provincial del Aconcagua permite acercarse, sin necesidad de experiencia alpina, al punto más alto del hemisferio sur, a casi siete mil metros. Una caminata hasta la laguna de Horcones ofrece una vista frontal de la cumbre, generalmente despejada por la mañana antes de que las nubes se instalen al final del día.",
      },
    ],
    hotels: [
      {
        name: "Cavas Wine Lodge",
        nameEn: "Cavas Wine Lodge",
        nameEs: "Cavas Wine Lodge",
        description:
          "Un lodge entouré de vignes dans la vallée d'Uco, chaque chambre disposant de sa propre terrasse et piscine privée face à la cordillère.",
        descriptionEn:
          "A lodge surrounded by vines in the Uco Valley, each room with its own private terrace and plunge pool facing the cordillera.",
        descriptionEs:
          "Un lodge rodeado de viñedos en el valle de Uco, cada habitación con su propia terraza y piscina privada frente a la cordillera.",
        image: `${R2}/trips/argentine-mendoza-hotel-cavas.jpg`,
      },
      {
        name: "Diplomatic Hotel Mendoza",
        nameEn: "Diplomatic Hotel Mendoza",
        nameEs: "Diplomatic Hotel Mendoza",
        description:
          "Un hôtel au cœur du centre historique, à deux pas des places ombragées et des restaurants de parrilla réputés dans toute la ville.",
        descriptionEn:
          "A hotel in the heart of the historic centre, steps from shaded squares and parrilla restaurants renowned throughout the city.",
        descriptionEs:
          "Un hotel en el corazón del centro histórico, a pocos pasos de las plazas con sombra y de las parrillas más reputadas de la ciudad.",
        image: `${R2}/trips/argentine-mendoza-hotel-diplomatic.jpg`,
      },
    ],
  },
  {
    destinationSlug: "chili",
    tour: {
      name: "Chili : Torres del Paine, la Patagonie australe",
      nameEn: "Chile: Torres del Paine, Southern Patagonia",
      nameEs: "Chile: Torres del Paine, la Patagonia austral",
      slug: "chili-torres-del-paine",
      image: `${R2}/tours/chili-torres-del-paine.jpg`,
      images: `${R2}/trips/chili-paine-gallery-1.jpg,${R2}/trips/chili-paine-gallery-2.jpg,${R2}/trips/chili-paine-gallery-3.jpg,${R2}/trips/chili-paine-gallery-4.jpg,${R2}/trips/chili-paine-gallery-5.jpg,${R2}/trips/chili-paine-gallery-6.jpg`,
      tagline: "Trois tours de granite surgies de la Patagonie, dans l'un des derniers grands espaces sauvages du monde",
      taglineEn: "Three granite towers rising from Patagonia, in one of the world's last great wildernesses",
      taglineEs: "Tres torres de granito surgidas de la Patagonia, en uno de los últimos grandes espacios salvajes del mundo",
      description:
        "Le parc national Torres del Paine, à l'extrême sud du Chili, doit son nom à trois tours de granite qui s'élèvent à plus de deux mille cinq cents mètres au-dessus des plaines patagonnes. Considéré par beaucoup comme l'un des plus beaux parcs nationaux du monde, il abrite aussi des glaciers vieux de plusieurs millénaires, des lacs aux couleurs turquoise inattendues et l'une des dernières populations sauvages de pumas d'Amérique du Sud.",
      descriptionEn:
        "Torres del Paine National Park, in the far south of Chile, takes its name from three granite towers that rise over two thousand five hundred metres above the Patagonian plains. Considered by many to be one of the world's most beautiful national parks, it also shelters glaciers thousands of years old, lakes of unexpected turquoise colour, and one of South America's last wild puma populations.",
      descriptionEs:
        "El parque nacional Torres del Paine, en el extremo sur de Chile, debe su nombre a tres torres de granito que se elevan más de dos mil quinientos metros sobre las llanuras patagónicas. Considerado por muchos uno de los parques nacionales más bellos del mundo, alberga también glaciares de varios milenios de antigüedad, lagos de un inesperado color turquesa y una de las últimas poblaciones salvajes de pumas de Sudamérica.",
      price: 4600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 48,
    },
    sections: [
      {
        heading: "Le trek des Tours, jusqu'au mirador emblématique",
        headingEn: "The Towers Trek, to the iconic viewpoint",
        headingEs: "El trekking de las Torres, hasta el mirador emblemático",
        body:
          "La randonnée jusqu'au mirador des Torres, l'une des plus emblématiques de Patagonie, grimpe à travers forêts de lenga et moraines rocheuses avant de déboucher sur une vue frontale des trois tours de granite, souvent embrasées de rose au lever du soleil. Une étape exigeante mais accessible sans expérience technique, sur une journée complète.",
        bodyEn:
          "The hike to the Towers viewpoint, one of the most iconic in Patagonia, climbs through lenga forest and rocky moraines before opening onto a head-on view of the three granite towers, often glowing pink at sunrise. A demanding but technically accessible stage, taking a full day.",
        bodyEs:
          "La caminata hasta el mirador de las Torres, una de las más emblemáticas de la Patagonia, asciende por bosques de lenga y morrenas rocosas antes de desembocar en una vista frontal de las tres torres de granito, a menudo teñidas de rosa al amanecer. Una etapa exigente pero accesible sin experiencia técnica, en una jornada completa.",
      },
      {
        heading: "Le lac Grey et son glacier",
        headingEn: "Grey Lake and its glacier",
        headingEs: "El lago Grey y su glaciar",
        body:
          "Une navigation sur le lac Grey approche au plus près du front du glacier du même nom, dont les blocs de glace bleue, parfois vieux de plusieurs milliers d'années, dérivent silencieusement sur l'eau. Les eaux turquoise du lac Pehoé et les vallées environnantes offrent quant à elles certains des points de vue les plus photographiés sur les tours elles-mêmes.",
        bodyEn:
          "A boat trip on Grey Lake approaches the face of the glacier of the same name, whose blue ice blocks, sometimes thousands of years old, drift silently on the water. The turquoise waters of Lake Pehoé and the surrounding valleys, meanwhile, offer some of the most photographed viewpoints of the towers themselves.",
        bodyEs:
          "Una navegación por el lago Grey se acerca hasta el frente del glaciar homónimo, cuyos bloques de hielo azul, a veces con miles de años de antigüedad, derivan en silencio sobre el agua. Las aguas turquesa del lago Pehoé y los valles circundantes ofrecen, por su parte, algunos de los miradores más fotografiados de las propias torres.",
      },
    ],
    hotels: [
      {
        name: "Explora Patagonia",
        nameEn: "Explora Patagonia",
        nameEs: "Explora Patagonia",
        description:
          "Un lodge isolé au bord du lac Pehoé, entièrement tourné vers les tours de granite, excursions guidées quotidiennes incluses selon le niveau de chacun.",
        descriptionEn:
          "An isolated lodge on the shore of Lake Pehoé, entirely oriented toward the granite towers, daily guided excursions included according to each guest's level.",
        descriptionEs:
          "Un lodge aislado a orillas del lago Pehoé, completamente orientado hacia las torres de granito, con excursiones guiadas diarias incluidas según el nivel de cada uno.",
        image: `${R2}/trips/chili-paine-hotel-explora.jpg`,
      },
      {
        name: "Patagonia Camp",
        nameEn: "Patagonia Camp",
        nameEs: "Patagonia Camp",
        description:
          "Un campement de yourtes de style mongol en bord du lac Toro, offrant un confort inattendu au cœur de la nature sauvage patagonne, feu de cheminée dans chaque tente.",
        descriptionEn:
          "A camp of Mongolian-style yurts on the shore of Lake Toro, offering unexpected comfort at the heart of wild Patagonian nature, a fireplace in every tent.",
        descriptionEs:
          "Un campamento de yurtas de estilo mongol a orillas del lago Toro, que ofrece un confort inesperado en pleno corazón de la naturaleza salvaje patagónica, chimenea en cada tienda.",
        image: `${R2}/trips/chili-paine-hotel-patagoniacamp.jpg`,
      },
    ],
  },
  {
    destinationSlug: "perou",
    tour: {
      name: "Pérou : l'Amazonie, sur les traces du fleuve",
      nameEn: "Peru: The Amazon, Following the River",
      nameEs: "Perú: la Amazonía, tras la huella del río",
      slug: "perou-amazonie",
      image: `${R2}/tours/perou-amazonie.jpg`,
      images: `${R2}/trips/perou-amazonie-gallery-1.jpg,${R2}/trips/perou-amazonie-gallery-2.jpg,${R2}/trips/perou-amazonie-gallery-3.jpg,${R2}/trips/perou-amazonie-gallery-4.jpg,${R2}/trips/perou-amazonie-gallery-5.jpg,${R2}/trips/perou-amazonie-gallery-6.jpg`,
      tagline: "Le poumon vert de la planète, exploré en canoë silencieux depuis un lodge au cœur de la jungle",
      taglineEn: "The planet's green lung, explored by silent canoe from a lodge deep in the jungle",
      taglineEs: "El pulmón verde del planeta, explorado en canoa silenciosa desde un lodge en pleno corazón de la selva",
      description:
        "Loin des sommets andins, l'Amazonie péruvienne autour de Puerto Maldonado abrite l'une des plus fortes biodiversités de la planète : plus de cinq cents espèces d'oiseaux, treize espèces de singes et des lacs-oxbows où caïmans et loutres géantes se croisent au fil de sorties en canoë silencieux, loin de tout moteur.",
      descriptionEn:
        "Far from the Andean peaks, the Peruvian Amazon around Puerto Maldonado shelters some of the highest biodiversity on the planet: over five hundred bird species, thirteen species of monkey, and oxbow lakes where caimans and giant otters are encountered on silent canoe outings, far from any engine.",
      descriptionEs:
        "Lejos de las cumbres andinas, la Amazonía peruana en torno a Puerto Maldonado alberga una de las mayores biodiversidades del planeta: más de quinientas especies de aves, trece especies de monos y lagos en herradura donde caimanes y nutrias gigantes se cruzan en silenciosas salidas en canoa, lejos de cualquier motor.",
      price: 3000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "May a sept",
      bestMonths: "may,june,july,august,september",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 49,
    },
    sections: [
      {
        heading: "Le lac Sandoval et ses loutres géantes",
        headingEn: "Lake Sandoval and its giant otters",
        headingEs: "El lago Sandoval y sus nutrias gigantes",
        body:
          "Une marche à travers la forêt jusqu'au lac Sandoval, lac-oxbow formé par un ancien méandre de la rivière, permet d'observer en canoë l'une des dernières familles de loutres géantes d'Amazonie, prédateur au sommet de la chaîne alimentaire aquatique pouvant mesurer jusqu'à deux mètres de long.",
        bodyEn:
          "A walk through the forest to Lake Sandoval, an oxbow lake formed by an ancient river bend, allows visitors to observe by canoe one of the Amazon's last families of giant otters, an apex aquatic predator that can grow up to two metres long.",
        bodyEs:
          "Una caminata por el bosque hasta el lago Sandoval, un lago en herradura formado por un antiguo meandro del río, permite observar en canoa a una de las últimas familias de nutrias gigantes de la Amazonía, un depredador en la cima de la cadena alimentaria acuática que puede medir hasta dos metros de largo.",
      },
      {
        heading: "La tour de canopée et les perroquets de la Collpa",
        headingEn: "The canopy tower and the Collpa's parrots",
        headingEs: "La torre del dosel y los loros de la Collpa",
        body:
          "Une tour d'observation métallique, haute de plus de trente mètres, permet d'accéder à la canopée elle-même, là où vit la majorité de la biodiversité amazonienne, souvent invisible depuis le sol. Au lever du jour, une collpa (falaise d'argile) voisine attire des centaines de perroquets et d'aras venus consommer les minéraux du sol, un spectacle coloré et bruyant unique à la région.",
        bodyEn:
          "A metal observation tower, over thirty metres high, provides access to the canopy itself, where most of the Amazon's biodiversity lives, often invisible from the ground. At dawn, a nearby collpa (clay lick) attracts hundreds of parrots and macaws that come to consume the soil's minerals, a colourful, noisy spectacle unique to the region.",
        bodyEs:
          "Una torre de observación metálica, de más de treinta metros de altura, permite acceder al propio dosel, donde vive la mayor parte de la biodiversidad amazónica, a menudo invisible desde el suelo. Al amanecer, una collpa (paredón de arcilla) cercana atrae a cientos de loros y guacamayos que acuden a consumir los minerales del suelo, un espectáculo colorido y ruidoso único de la región.",
      },
    ],
    hotels: [
      {
        name: "Inkaterra Reserva Amazónica",
        nameEn: "Inkaterra Reserva Amazónica",
        nameEs: "Inkaterra Reserva Amazónica",
        description:
          "Un lodge en bungalows sur pilotis au bord de la rivière Madre de Dios, moustiquaires et vérandas privées, réserve privée de plus de quatre cents hectares.",
        descriptionEn:
          "A lodge of stilted bungalows on the banks of the Madre de Dios river, mosquito nets and private verandas, a private reserve of over four hundred hectares.",
        descriptionEs:
          "Un lodge de bungalós sobre pilotes a orillas del río Madre de Dios, mosquiteras y porches privados, reserva privada de más de cuatrocientas hectáreas.",
        image: `${R2}/trips/perou-amazonie-hotel-inkaterra.jpg`,
      },
      {
        name: "Refugio Amazonas",
        nameEn: "Refugio Amazonas",
        nameEs: "Refugio Amazonas",
        description:
          "Un lodge plus reculé, accessible uniquement en bateau, chambres ouvertes sur la forêt sans mur sur un côté, pour s'endormir au son de la jungle.",
        descriptionEn:
          "A more remote lodge, accessible only by boat, rooms open to the forest with no wall on one side, for falling asleep to the sound of the jungle.",
        descriptionEs:
          "Un lodge más apartado, accesible solo en barco, habitaciones abiertas al bosque sin pared en un lado, para dormirse con el sonido de la selva.",
        image: `${R2}/trips/perou-amazonie-hotel-refugio.jpg`,
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
