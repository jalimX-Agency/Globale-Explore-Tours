// Europe batch 4 — Norvège, Turquie, Autriche. New trips bringing each destination to at
// least 3, styled on Black Tomato's real structure (a short number of named-hotel chapters,
// not an exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-europe-4.ts
// Requires scripts/upload-images-europe-4.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "norvege",
    tour: {
      name: "Norvège : le Svalbard et le cap Nord",
      nameEn: "Norway: Svalbard and the North Cape",
      nameEs: "Noruega: Svalbard y el cabo Norte",
      slug: "norvege-svalbard-nordkapp",
      image: `${R2}/journeys/norvege-svalbard-nordkapp-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un archipel arctique où les ours polaires sont plus nombreux que les habitants, puis une falaise qui marque la fin de l'Europe continentale",
      taglineEn: "An Arctic archipelago where polar bears outnumber residents, then a cliff marking the end of continental Europe",
      taglineEs: "Un archipiélago ártico donde los osos polares superan en número a los habitantes, y después un acantilado que marca el fin de la Europa continental",
      description:
        "Un voyage vers l'extrême nord de la Norvège, loin de Bergen et des Lofoten : le Svalbard, archipel arctique où vivent environ trois mille habitants pour plus de deux mille cinq cents ours polaires, une densité qui impose de sortir armé hors des zones habitées, puis le cap Nord, promontoire rocheux qui plonge à plus de trois cents mètres dans l'océan Arctique et marque symboliquement le point le plus septentrional d'Europe continentale accessible par la route.",
      descriptionEn:
        "A journey to the far north of Norway, far from Bergen and the Lofoten Islands: Svalbard, an Arctic archipelago home to around three thousand residents and over two thousand five hundred polar bears, a density that requires carrying a weapon outside inhabited areas, then the North Cape, a rocky promontory plunging over three hundred metres into the Arctic Ocean and symbolically marking the northernmost point of continental Europe accessible by road.",
      descriptionEs:
        "Un viaje al extremo norte de Noruega, lejos de Bergen y las Lofoten: Svalbard, archipiélago ártico donde viven unos tres mil habitantes frente a más de dos mil quinientos osos polares, una densidad que obliga a salir armado fuera de las zonas habitadas, y después el cabo Norte, promontorio rocoso que se sumerge más de trescientos metros en el océano Ártico y marca simbólicamente el punto más septentrional de la Europa continental accesible por carretera.",
      price: 4600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Juin à août",
      whenLabelEn: "June to August",
      whenLabelEs: "Jun a agosto",
      bestMonths: "june,july,august",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 194,
    },
    chapters: [
      {
        title: "Le Svalbard, le royaume de l'ours polaire",
        titleEn: "Svalbard, the Kingdom of the Polar Bear",
        titleEs: "Svalbard, el reino del oso polar",
        intro:
          "Premier chapitre au Svalbard, archipel arctique norvégien situé à mi-chemin entre le continent et le pôle Nord, où la population d'ours polaires, estimée à plus de deux mille cinq cents individus, dépasse largement les quelque trois mille habitants humains répartis dans les rares implantations de l'archipel. Cette proximité avec le plus grand prédateur terrestre du monde impose une règle stricte, presque unique au monde : quiconque quitte les limites de la principale ville de Longyearbyen doit être accompagné d'une arme à feu ou d'un guide armé, une précaution qui témoigne du caractère authentiquement sauvage de ce territoire.",
        introEn:
          "The first chapter unfolds on Svalbard, a Norwegian Arctic archipelago located halfway between the mainland and the North Pole, where the polar bear population, estimated at over two thousand five hundred individuals, far outnumbers the roughly three thousand human residents spread across the archipelago's few settlements. This proximity to the world's largest land predator imposes a strict rule, almost unique in the world: anyone leaving the limits of the main town of Longyearbyen must be accompanied by a firearm or an armed guide, a precaution that testifies to the genuinely wild character of this territory.",
        introEs:
          "El primer capítulo se desarrolla en Svalbard, archipiélago ártico noruego situado a medio camino entre el continente y el Polo Norte, donde la población de osos polares, estimada en más de dos mil quinientos individuos, supera con creces a los aproximadamente tres mil habitantes humanos repartidos en los pocos asentamientos del archipiélago. Esta proximidad con el mayor depredador terrestre del mundo impone una regla estricta, casi única en el mundo: cualquiera que salga de los límites de la principal ciudad, Longyearbyen, debe ir acompañado de un arma de fuego o un guía armado, precaución que da testimonio del carácter auténticamente salvaje de este territorio.",
        galleryImages: `${R2}/journeys/norvege-svalbard-gallery1.jpg,${R2}/journeys/norvege-svalbard-gallery2.jpg,${R2}/journeys/norvege-svalbard-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 10,
        days: [
          {
            dayNumber: 1,
            title: "Croisière à la recherche des ours polaires",
            titleEn: "A cruise in search of polar bears",
            titleEs: "Crucero en busca de osos polares",
            description:
              "Sortie en bateau le long des côtes du Svalbard, accompagnée d'un guide naturaliste armé, à la recherche d'ours polaires, de phoques et de morses dans leur habitat naturel arctique.",
            descriptionEn:
              "A boat trip along the Svalbard coastline, accompanied by an armed naturalist guide, in search of polar bears, seals, and walruses in their natural Arctic habitat.",
            descriptionEs:
              "Salida en barco a lo largo de la costa de Svalbard, acompañada de un guía naturalista armado, en busca de osos polares, focas y morsas en su hábitat ártico natural.",
            image: `${R2}/journeys/norvege-svalbard-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Longyearbyen, la ville la plus septentrionale du monde",
            titleEn: "Longyearbyen, the world's northernmost town",
            titleEs: "Longyearbyen, la ciudad más septentrional del mundo",
            description:
              "Visite de Longyearbyen, principale ville de l'archipel et l'une des agglomérations les plus septentrionales du monde, dont le cimetière historique fut fermé après la découverte que le permafrost empêchait toute décomposition.",
            descriptionEn:
              "A visit to Longyearbyen, the archipelago's main town and one of the world's northernmost settlements, whose historic cemetery was closed after it was discovered that the permafrost prevented all decomposition.",
            descriptionEs:
              "Visita a Longyearbyen, principal ciudad del archipiélago y uno de los asentamientos más septentrionales del mundo, cuyo cementerio histórico fue cerrado tras descubrirse que el permafrost impedía toda descomposición.",
            image: `${R2}/journeys/norvege-svalbard-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le cap Nord, la fin de l'Europe",
        titleEn: "The North Cape, the End of Europe",
        titleEs: "El cabo Norte, el fin de Europa",
        intro:
          "Route vers le cap Nord, promontoire rocheux qui plonge à plus de trois cents mètres dans l'océan Arctique et marque symboliquement, bien que ce ne soit pas géographiquement exact, le point le plus septentrional d'Europe continentale accessible par la route. Le site, visité dès le XVIe siècle par des explorateurs anglais en quête d'une route maritime vers l'Asie par le nord, offre entre mai et juillet le spectacle du soleil de minuit, phénomène durant lequel l'astre reste visible vingt-quatre heures sur vingt-quatre au-dessus de l'horizon.",
        introEn:
          "The road to the North Cape, a rocky promontory plunging over three hundred metres into the Arctic Ocean and symbolically marking, though not geographically accurately, the northernmost point of continental Europe accessible by road. The site, visited as early as the 16th century by English explorers seeking a northern sea route to Asia, offers between May and July the spectacle of the midnight sun, a phenomenon during which the sun remains visible twenty-four hours a day above the horizon.",
        introEs:
          "Ruta hacia el cabo Norte, promontorio rocoso que se sumerge más de trescientos metros en el océano Ártico y marca simbólicamente, aunque no sea geográficamente exacto, el punto más septentrional de la Europa continental accesible por carretera. El lugar, visitado ya en el siglo XVI por exploradores ingleses en busca de una ruta marítima hacia Asia por el norte, ofrece entre mayo y julio el espectáculo del sol de medianoche, fenómeno durante el cual el astro permanece visible las veinticuatro horas del día sobre el horizonte.",
        galleryImages: `${R2}/journeys/norvege-nordkapp-gallery1.jpg,${R2}/journeys/norvege-nordkapp-gallery2.jpg,${R2}/journeys/norvege-nordkapp-gallery3.jpg`,
        mapMarkerX: 70,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Le globe emblématique du cap Nord",
            titleEn: "The North Cape's iconic globe",
            titleEs: "El emblemático globo del cabo Norte",
            description:
              "Visite du plateau du cap Nord et de son globe métallique emblématique, installé en 1988, avant une marche le long des falaises qui plongent directement dans l'océan Arctique.",
            descriptionEn:
              "A visit to the North Cape plateau and its iconic metal globe, installed in 1988, then a walk along the cliffs that plunge directly into the Arctic Ocean.",
            descriptionEs:
              "Visita a la meseta del cabo Norte y a su emblemático globo metálico, instalado en 1988, antes de una caminata por los acantilados que se sumergen directamente en el océano Ártico.",
            image: `${R2}/journeys/norvege-nordkapp-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le soleil de minuit sur l'océan Arctique",
            titleEn: "The midnight sun over the Arctic Ocean",
            titleEs: "El sol de medianoche sobre el océano Ártico",
            description:
              "Nuit d'observation du soleil de minuit depuis le plateau du cap Nord, phénomène durant lequel l'astre reste visible en continu au-dessus de l'horizon entre mai et juillet.",
            descriptionEn:
              "A night observing the midnight sun from the North Cape plateau, a phenomenon during which the sun remains continuously visible above the horizon between May and July.",
            descriptionEs:
              "Noche de observación del sol de medianoche desde la meseta del cabo Norte, fenómeno durante el cual el astro permanece visible de forma continua sobre el horizonte entre mayo y julio.",
            image: `${R2}/journeys/norvege-nordkapp-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "turquie",
    tour: {
      name: "Turquie : Pamukkale et Éphèse",
      nameEn: "Turkey: Pamukkale and Ephesus",
      nameEs: "Turquía: Pamukkale y Éfeso",
      slug: "turquie-pamukkale-ephese",
      image: `${R2}/journeys/turquie-pamukkale-ephese-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un « château de coton » de calcaire blanc formé par des sources thermales millénaires, puis la troisième plus grande bibliothèque du monde antique",
      taglineEn: "A white limestone \"cotton castle\" formed by millennia-old thermal springs, then the third-largest library of the ancient world",
      taglineEs: "Un «castillo de algodón» de piedra caliza blanca formado por fuentes termales milenarias, y después la tercera biblioteca más grande del mundo antiguo",
      description:
        "Un voyage dans le sud-ouest de la Turquie, loin d'Istanbul et de la Cappadoce : Pamukkale, littéralement « château de coton », dont les terrasses de calcaire blanc immaculé, formées sur des millénaires par des sources thermales riches en calcium, accueillent depuis l'Antiquité des bassins d'eau chaude naturelle, puis Éphèse, l'une des cités les mieux préservées de l'Antiquité méditerranéenne, dont la bibliothèque de Celsus comptait parmi les trois plus grandes du monde antique avec ses quelque douze mille rouleaux de manuscrits.",
      descriptionEn:
        "A journey through south-western Turkey, far from Istanbul and Cappadocia: Pamukkale, literally \"cotton castle,\" whose immaculate white limestone terraces, formed over millennia by calcium-rich thermal springs, have hosted natural hot-water pools since antiquity, then Ephesus, one of the best-preserved cities of the ancient Mediterranean, whose Library of Celsus ranked among the three largest in the ancient world with some twelve thousand manuscript scrolls.",
      descriptionEs:
        "Un viaje por el suroeste de Turquía, lejos de Estambul y Capadocia: Pamukkale, literalmente «castillo de algodón», cuyas terrazas de piedra caliza blanca inmaculada, formadas a lo largo de milenios por fuentes termales ricas en calcio, acogen desde la Antigüedad piscinas de agua caliente natural, y después Éfeso, una de las ciudades mejor conservadas de la Antigüedad mediterránea, cuya biblioteca de Celso se contaba entre las tres más grandes del mundo antiguo con unos doce mil rollos de manuscritos.",
      price: 2300,
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
      order: 196,
    },
    chapters: [
      {
        title: "Pamukkale, le château de coton",
        titleEn: "Pamukkale, the Cotton Castle",
        titleEs: "Pamukkale, el castillo de algodón",
        intro:
          "Premier chapitre à Pamukkale, dont les terrasses de calcaire blanc, formées sur des millénaires par la calcification progressive d'une eau thermale riche en carbonate de calcium jaillissant à plus de trente-cinq degrés, ont valu à ce site le surnom de « château de coton » pour leur aspect neigeux visible à des kilomètres à la ronde. Ces bassins naturels en cascade, exploités depuis l'Antiquité pour leurs vertus thérapeutiques présumées, restent aujourd'hui partiellement accessibles à la baignade selon un système de rotation destiné à préserver la formation géologique classée à l'UNESCO.",
        introEn:
          "The first chapter unfolds at Pamukkale, whose white limestone terraces, formed over millennia by the gradual calcification of a thermal water rich in calcium carbonate gushing at over thirty-five degrees, earned this site its nickname of \"cotton castle\" for its snow-like appearance visible for kilometres around. These cascading natural pools, exploited since antiquity for their presumed therapeutic properties, remain today partially open to bathing under a rotation system designed to preserve the UNESCO-listed geological formation.",
        introEs:
          "El primer capítulo se desarrolla en Pamukkale, cuyas terrazas de piedra caliza blanca, formadas a lo largo de milenios por la calcificación progresiva de un agua termal rica en carbonato de calcio que brota a más de treinta y cinco grados, valieron a este lugar el apodo de «castillo de algodón» por su aspecto nevado visible a kilómetros de distancia. Estas piscinas naturales en cascada, explotadas desde la Antigüedad por sus presuntas propiedades terapéuticas, siguen hoy parcialmente accesibles para el baño según un sistema de rotación destinado a preservar la formación geológica declarada por la UNESCO.",
        galleryImages: `${R2}/journeys/turquie-pamukkale-gallery1.jpg,${R2}/journeys/turquie-pamukkale-gallery2.jpg,${R2}/journeys/turquie-pamukkale-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 50,
        days: [
          {
            dayNumber: 1,
            title: "Baignade dans les bassins de travertin",
            titleEn: "A swim in the travertine pools",
            titleEs: "Baño en las piscinas de travertino",
            description:
              "Baignade pieds nus dans les bassins en terrasses de Pamukkale, où l'eau thermale riche en calcium continue de sculpter les formations calcaires blanches, selon les mêmes règles de préservation qu'à l'Antiquité.",
            descriptionEn:
              "A barefoot swim in the terraced pools of Pamukkale, where calcium-rich thermal water continues to sculpt the white limestone formations, under the same preservation rules as in antiquity.",
            descriptionEs:
              "Baño descalzo en las piscinas escalonadas de Pamukkale, donde el agua termal rica en calcio sigue esculpiendo las formaciones calizas blancas, según las mismas normas de preservación que en la Antigüedad.",
            image: `${R2}/journeys/turquie-pamukkale-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Hiérapolis, la cité thermale antique",
            titleEn: "Hierapolis, the ancient thermal city",
            titleEs: "Hierápolis, la antigua ciudad termal",
            description:
              "Visite des ruines d'Hiérapolis, cité gréco-romaine fondée au IIe siècle avant notre ère au sommet des terrasses pour exploiter les vertus thérapeutiques des sources thermales.",
            descriptionEn:
              "A visit to the ruins of Hierapolis, a Greco-Roman city founded in the 2nd century BCE atop the terraces to exploit the therapeutic properties of the thermal springs.",
            descriptionEs:
              "Visita a las ruinas de Hierápolis, ciudad grecorromana fundada en el siglo II antes de nuestra era en lo alto de las terrazas para explotar las propiedades terapéuticas de las fuentes termales.",
            image: `${R2}/journeys/turquie-pamukkale-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Éphèse, la cité antique",
        titleEn: "Ephesus, the Ancient City",
        titleEs: "Éfeso, la ciudad antigua",
        intro:
          "Route vers Éphèse, l'une des cités les mieux préservées de l'Antiquité méditerranéenne, dont la façade monumentale de la bibliothèque de Celsus, reconstituée au XXe siècle à partir des fragments d'origine, comptait au IIe siècle parmi les trois plus grandes bibliothèques du monde antique avec ses quelque douze mille rouleaux de manuscrits conservés dans des niches protégées de l'humidité. La ville, qui compta jusqu'à deux cent cinquante mille habitants à son apogée romaine, abrite également le grand théâtre antique, capable d'accueillir vingt-cinq mille spectateurs et encore utilisé aujourd'hui pour des concerts.",
        introEn:
          "The road to Ephesus, one of the best-preserved cities of the ancient Mediterranean, whose monumental facade of the Library of Celsus, reconstructed in the 20th century from original fragments, ranked in the 2nd century among the three largest libraries of the ancient world with some twelve thousand manuscript scrolls kept in niches protected from humidity. The city, which had up to two hundred and fifty thousand inhabitants at its Roman peak, is also home to the great ancient theatre, capable of holding twenty-five thousand spectators and still used today for concerts.",
        introEs:
          "Ruta hacia Éfeso, una de las ciudades mejor conservadas de la Antigüedad mediterránea, cuya fachada monumental de la biblioteca de Celso, reconstruida en el siglo XX a partir de fragmentos originales, se contaba en el siglo II entre las tres bibliotecas más grandes del mundo antiguo con unos doce mil rollos de manuscritos conservados en nichos protegidos de la humedad. La ciudad, que llegó a tener doscientos cincuenta mil habitantes en su apogeo romano, alberga además el gran teatro antiguo, capaz de acoger a veinticinco mil espectadores y todavía utilizado hoy para conciertos.",
        galleryImages: `${R2}/journeys/turquie-ephese-gallery1.jpg,${R2}/journeys/turquie-ephese-gallery2.jpg,${R2}/journeys/turquie-ephese-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "La bibliothèque de Celsus et la voie des Curètes",
            titleEn: "The Library of Celsus and Curetes Street",
            titleEs: "La biblioteca de Celso y la calle de los Curetes",
            description:
              "Visite de la bibliothèque de Celsus, façade monumentale reconstituée qui abritait l'une des plus grandes collections de manuscrits de l'Antiquité, puis promenade sur la voie des Curètes bordée de vestiges romains.",
            descriptionEn:
              "A visit to the Library of Celsus, a reconstructed monumental facade that once held one of antiquity's largest manuscript collections, then a walk along Curetes Street, lined with Roman remains.",
            descriptionEs:
              "Visita a la biblioteca de Celso, fachada monumental reconstruida que albergaba una de las mayores colecciones de manuscritos de la Antigüedad, y paseo por la calle de los Curetes, bordeada de vestigios romanos.",
            image: `${R2}/journeys/turquie-ephese-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le grand théâtre antique et la maison de la Vierge",
            titleEn: "The great ancient theatre and the House of the Virgin",
            titleEs: "El gran teatro antiguo y la casa de la Virgen",
            description:
              "Visite du grand théâtre antique d'Éphèse, capable d'accueillir vingt-cinq mille spectateurs, puis excursion jusqu'à la maison de la Vierge Marie, lieu de pèlerinage niché sur les hauteurs environnantes.",
            descriptionEn:
              "A visit to Ephesus's great ancient theatre, capable of holding twenty-five thousand spectators, then an excursion to the House of the Virgin Mary, a pilgrimage site nestled in the surrounding hills.",
            descriptionEs:
              "Visita al gran teatro antiguo de Éfeso, capaz de acoger a veinticinco mil espectadores, y excursión hasta la casa de la Virgen María, lugar de peregrinación enclavado en las colinas circundantes.",
            image: `${R2}/journeys/turquie-ephese-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "autriche",
    tour: {
      name: "Autriche : Graz et la vallée de la Wachau",
      nameEn: "Austria: Graz and the Wachau Valley",
      nameEs: "Austria: Graz y el valle de Wachau",
      slug: "autriche-graz-wachau",
      image: `${R2}/journeys/autriche-graz-wachau-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La deuxième ville d'Autriche, dont l'université forme un cinquième de sa population, puis un canyon viticole creusé par le Danube",
      taglineEn: "Austria's second city, where the university makes up a fifth of its population, then a wine-growing canyon carved by the Danube",
      taglineEs: "La segunda ciudad de Austria, donde la universidad forma una quinta parte de su población, y después un cañón vitivinícola excavado por el Danubio",
      description:
        "Un voyage loin de Vienne et du Salzkammergut : Graz, deuxième ville d'Autriche dont l'atmosphère jeune et créative, portée par une population étudiante représentant près d'un cinquième de ses habitants, contraste avec le classicisme viennois, puis la vallée de la Wachau, gorge creusée par le Danube entre vignobles en terrasses et villages médiévaux, classée à l'UNESCO pour un paysage culturel façonné par plus de deux mille ans de viticulture continue.",
      descriptionEn:
        "A journey far from Vienna and the Salzkammergut: Graz, Austria's second city, whose young, creative atmosphere, driven by a student population representing nearly a fifth of its residents, contrasts with Viennese classicism, then the Wachau Valley, a gorge carved by the Danube between terraced vineyards and medieval villages, UNESCO-listed for a cultural landscape shaped by over two thousand years of continuous winemaking.",
      descriptionEs:
        "Un viaje lejos de Viena y el Salzkammergut: Graz, segunda ciudad de Austria, cuya atmósfera joven y creativa, impulsada por una población estudiantil que representa casi una quinta parte de sus habitantes, contrasta con el clasicismo vienés, y después el valle de Wachau, garganta excavada por el Danubio entre viñedos en terrazas y pueblos medievales, declarado por la UNESCO por un paisaje cultural moldeado por más de dos mil años de viticultura continua.",
      price: 2400,
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
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 198,
    },
    chapters: [
      {
        title: "Graz, la ville étudiante",
        titleEn: "Graz, the Student City",
        titleEs: "Graz, la ciudad universitaria",
        intro:
          "Premier chapitre à Graz, deuxième ville d'Autriche dont le centre historique, classé au patrimoine mondial de l'UNESCO, reste dominé par le Schlossberg, colline boisée couronnée d'une tour de l'horloge emblématique et surplombant la rivière Mur qui traverse la ville. Graz revendique la plus forte proportion d'étudiants par habitant de toute l'Autriche, une population universitaire qui insuffle à la ville une effervescence culturelle et créative perceptible dans ses galeries d'art contemporain et son architecture résolument moderne, à l'image du Kunsthaus, musée aux allures de vaisseau spatial installé au cœur de la vieille ville baroque.",
        introEn:
          "The first chapter unfolds in Graz, Austria's second city, whose historic centre, UNESCO World Heritage listed, remains dominated by the Schlossberg, a wooded hill crowned by an emblematic clock tower overlooking the Mur River running through the city. Graz claims the highest proportion of students per capita in all of Austria, a university population that breathes cultural and creative effervescence into the city, perceptible in its contemporary art galleries and resolutely modern architecture, exemplified by the Kunsthaus, a museum shaped like a spaceship installed at the heart of the baroque old town.",
        introEs:
          "El primer capítulo se desarrolla en Graz, segunda ciudad de Austria, cuyo centro histórico, declarado Patrimonio de la Humanidad por la UNESCO, sigue dominado por el Schlossberg, colina boscosa coronada por una emblemática torre del reloj que domina el río Mur, que atraviesa la ciudad. Graz reivindica la mayor proporción de estudiantes per cápita de toda Austria, una población universitaria que insufla a la ciudad una efervescencia cultural y creativa perceptible en sus galerías de arte contemporáneo y su arquitectura resueltamente moderna, encarnada por el Kunsthaus, museo con aspecto de nave espacial instalado en el corazón del casco antiguo barroco.",
        galleryImages: `${R2}/journeys/autriche-graz-gallery1.jpg,${R2}/journeys/autriche-graz-gallery2.jpg,${R2}/journeys/autriche-graz-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Le Schlossberg et la tour de l'horloge",
            titleEn: "The Schlossberg and the clock tower",
            titleEs: "El Schlossberg y la torre del reloj",
            description:
              "Ascension jusqu'au Schlossberg, colline boisée qui domine Graz, pour découvrir la tour de l'horloge emblématique et un panorama complet sur la vieille ville classée à l'UNESCO.",
            descriptionEn:
              "An ascent to the Schlossberg, a wooded hill overlooking Graz, to discover the emblematic clock tower and a full panorama over the UNESCO-listed old town.",
            descriptionEs:
              "Ascenso al Schlossberg, colina boscosa que domina Graz, para descubrir la emblemática torre del reloj y un panorama completo sobre el casco antiguo declarado por la UNESCO.",
            image: `${R2}/journeys/autriche-graz-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le Kunsthaus et l'îlot Murinsel",
            titleEn: "The Kunsthaus and Murinsel island",
            titleEs: "El Kunsthaus y la isla Murinsel",
            description:
              "Visite du Kunsthaus, musée d'art contemporain à l'architecture futuriste, puis promenade jusqu'à l'îlot artificiel de Murinsel, plateforme flottante installée au milieu de la rivière Mur.",
            descriptionEn:
              "A visit to the Kunsthaus, a contemporary art museum with futuristic architecture, then a stroll to Murinsel, an artificial floating platform installed in the middle of the Mur River.",
            descriptionEs:
              "Visita al Kunsthaus, museo de arte contemporáneo de arquitectura futurista, y paseo hasta la isla artificial de Murinsel, plataforma flotante instalada en medio del río Mur.",
            image: `${R2}/journeys/autriche-graz-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La vallée de la Wachau",
        titleEn: "The Wachau Valley",
        titleEs: "El valle de Wachau",
        intro:
          "Route vers la vallée de la Wachau, gorge d'une trentaine de kilomètres creusée par le Danube entre Melk et Krems, classée au patrimoine mondial de l'UNESCO pour un paysage culturel façonné par plus de deux mille ans de viticulture continue sur des terrasses abruptes qui bordent le fleuve. Le village de Dürnstein, dominé par les ruines du château où Richard Cœur de Lion fut emprisonné en 1192 après la troisième croisade, et l'abbaye baroque de Melk, perchée sur un promontoire rocheux au-dessus du fleuve, comptent parmi les étapes les plus emblématiques de cette vallée viticole.",
        introEn:
          "The road to the Wachau Valley, a roughly thirty-kilometre gorge carved by the Danube between Melk and Krems, UNESCO World Heritage listed for a cultural landscape shaped by over two thousand years of continuous winemaking on steep terraces lining the river. The village of Dürnstein, dominated by the ruins of the castle where Richard the Lionheart was imprisoned in 1192 after the Third Crusade, and the baroque Melk Abbey, perched on a rocky promontory above the river, rank among the most emblematic stops in this wine-growing valley.",
        introEs:
          "Ruta hacia el valle de Wachau, garganta de unos treinta kilómetros excavada por el Danubio entre Melk y Krems, declarada Patrimonio de la Humanidad por la UNESCO por un paisaje cultural moldeado por más de dos mil años de viticultura continua en empinadas terrazas que bordean el río. El pueblo de Dürnstein, dominado por las ruinas del castillo donde Ricardo Corazón de León fue encarcelado en 1192 tras la tercera cruzada, y la abadía barroca de Melk, encaramada en un promontorio rocoso sobre el río, se cuentan entre las etapas más emblemáticas de este valle vitivinícola.",
        galleryImages: `${R2}/journeys/autriche-wachau-gallery1.jpg,${R2}/journeys/autriche-wachau-gallery2.jpg,${R2}/journeys/autriche-wachau-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Croisière sur le Danube jusqu'à Dürnstein",
            titleEn: "A Danube cruise to Dürnstein",
            titleEs: "Crucero por el Danubio hasta Dürnstein",
            description:
              "Croisière sur le Danube à travers la vallée de la Wachau, entre vignobles en terrasses et villages médiévaux, jusqu'à Dürnstein et les ruines du château où fut emprisonné Richard Cœur de Lion.",
            descriptionEn:
              "A Danube cruise through the Wachau Valley, between terraced vineyards and medieval villages, to Dürnstein and the ruins of the castle where Richard the Lionheart was imprisoned.",
            descriptionEs:
              "Crucero por el Danubio a través del valle de Wachau, entre viñedos en terrazas y pueblos medievales, hasta Dürnstein y las ruinas del castillo donde fue encarcelado Ricardo Corazón de León.",
            image: `${R2}/journeys/autriche-wachau-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "L'abbaye baroque de Melk et dégustation de vin",
            titleEn: "Melk Baroque Abbey and a wine tasting",
            titleEs: "La abadía barroca de Melk y degustación de vino",
            description:
              "Visite de l'abbaye baroque de Melk, perchée sur un promontoire rocheux au-dessus du Danube, puis dégustation de vins blancs produits sur les terrasses viticoles de la vallée depuis l'Antiquité.",
            descriptionEn:
              "A visit to Melk Baroque Abbey, perched on a rocky promontory above the Danube, then a tasting of white wines produced on the valley's terraced vineyards since antiquity.",
            descriptionEs:
              "Visita a la abadía barroca de Melk, encaramada en un promontorio rocoso sobre el Danubio, y degustación de vinos blancos producidos en las terrazas vitícolas del valle desde la Antigüedad.",
            image: `${R2}/journeys/autriche-wachau-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "norvege",
    tour: {
      name: "Norvège : Tromsø et les aurores boréales",
      nameEn: "Norway: Tromsø and the Northern Lights",
      nameEs: "Noruega: Tromsø y las auroras boreales",
      slug: "norvege-tromso-aurores",
      image: `${R2}/tours/norvege-tromso-aurores.jpg`,
      images: `${R2}/trips/norvege-tromso-gallery-1.jpg,${R2}/trips/norvege-tromso-gallery-2.jpg,${R2}/trips/norvege-tromso-gallery-3.jpg,${R2}/trips/norvege-tromso-gallery-4.jpg,${R2}/trips/norvege-tromso-gallery-5.jpg,${R2}/trips/norvege-tromso-gallery-6.jpg`,
      tagline: "La « porte de l'Arctique », l'une des villes du monde offrant les meilleures chances d'observer les aurores boréales",
      taglineEn: "The \"gateway to the Arctic,\" one of the world's best cities for observing the Northern Lights",
      taglineEs: "La «puerta del Ártico», una de las ciudades del mundo con mejores probabilidades de observar las auroras boreales",
      description:
        "Tromsø, surnommée la « porte de l'Arctique », se situe directement sous la ceinture aurorale, zone circumpolaire où l'activité géomagnétique terrestre rend les aurores boréales visibles avec une régularité inégalée ailleurs dans le monde entre septembre et avril. Cette ville de plus de soixante-dix mille habitants, la plus grande au nord du cercle polaire arctique, combine infrastructures modernes et accès direct à une nature sauvage, faisant d'elle l'une des bases les plus prisées pour observer ce phénomène lumineux depuis des bateaux, des igloos de verre ou de simples excursions en pleine nature.",
      descriptionEn:
        "Tromsø, nicknamed the \"gateway to the Arctic,\" sits directly beneath the auroral belt, a circumpolar zone where Earth's geomagnetic activity makes the Northern Lights visible with unmatched regularity elsewhere in the world between September and April. This city of over seventy thousand residents, the largest north of the Arctic Circle, combines modern infrastructure with direct access to wild nature, making it one of the most sought-after bases for observing this luminous phenomenon from boats, glass igloos, or simple outings in the wilderness.",
      descriptionEs:
        "Tromsø, apodada la «puerta del Ártico», se sitúa directamente bajo el cinturón auroral, zona circumpolar donde la actividad geomagnética terrestre hace visibles las auroras boreales con una regularidad inigualada en el resto del mundo entre septiembre y abril. Esta ciudad de más de setenta mil habitantes, la más grande al norte del círculo polar ártico, combina infraestructuras modernas con acceso directo a una naturaleza salvaje, lo que la convierte en una de las bases más solicitadas para observar este fenómeno luminoso desde barcos, iglús de cristal o simples excursiones en plena naturaleza.",
      price: 3400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Sept à avril",
      whenLabelEn: "Sept to April",
      whenLabelEs: "Sept a abril",
      bestMonths: "september,october,november,december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 6,
      featured: false,
      order: 193,
    },
    sections: [
      {
        heading: "La ceinture aurorale et la porte de l'Arctique",
        headingEn: "The Auroral Belt and the Gateway to the Arctic",
        headingEs: "El cinturón auroral y la puerta del Ártico",
        body:
          "Tromsø se situe directement sous la ceinture aurorale, zone circumpolaire où les particules chargées du vent solaire, canalisées par le champ magnétique terrestre, entrent en collision avec l'atmosphère pour produire les aurores boréales avec une régularité et une intensité inégalées ailleurs dans le monde. Cette position géographique privilégiée, combinée à un climat étonnamment doux pour sa latitude grâce au Gulf Stream, a valu à la ville son surnom de « porte de l'Arctique » et en a fait, depuis le XIXe siècle, un point de départ historique pour les expéditions polaires vers le pôle Nord et le Groenland.",
        bodyEn:
          "Tromsø sits directly beneath the auroral belt, a circumpolar zone where charged particles from the solar wind, channelled by Earth's magnetic field, collide with the atmosphere to produce the Northern Lights with unmatched regularity and intensity elsewhere in the world. This privileged geographic position, combined with a climate surprisingly mild for its latitude thanks to the Gulf Stream, earned the city its nickname of \"gateway to the Arctic\" and made it, since the 19th century, a historic starting point for polar expeditions toward the North Pole and Greenland.",
        bodyEs:
          "Tromsø se sitúa directamente bajo el cinturón auroral, zona circumpolar donde las partículas cargadas del viento solar, canalizadas por el campo magnético terrestre, chocan con la atmósfera para producir las auroras boreales con una regularidad e intensidad inigualadas en el resto del mundo. Esta posición geográfica privilegiada, combinada con un clima sorprendentemente suave para su latitud gracias a la Corriente del Golfo, valió a la ciudad su apodo de «puerta del Ártico» y la convirtió, desde el siglo XIX, en un punto de partida histórico para las expediciones polares hacia el Polo Norte y Groenlandia.",
      },
      {
        heading: "Une ville arctique aux multiples visages",
        headingEn: "An Arctic City of Many Faces",
        headingEs: "Una ciudad ártica de múltiples caras",
        body:
          "Tromsø, plus grande ville au nord du cercle polaire arctique avec plus de soixante-dix mille habitants, conserve une vie culturelle animée malgré sa latitude extrême, portée par une importante population étudiante et par des institutions comme la cathédrale arctique, édifice moderne aux allures de banquise stylisée construit en 1965. La ville reste également le point de départ privilégié d'excursions en traîneau à chiens ou en motoneige à travers les montagnes environnantes, ainsi que des safaris à la baleine qui profitent de la présence hivernale de cétacés venus se nourrir dans les fjords voisins.",
        bodyEn:
          "Tromsø, the largest city north of the Arctic Circle with over seventy thousand residents, retains a lively cultural scene despite its extreme latitude, driven by a substantial student population and institutions such as the Arctic Cathedral, a modern building resembling a stylised ice floe built in 1965. The city also remains the preferred starting point for dog-sledding or snowmobile excursions through the surrounding mountains, as well as whale safaris that take advantage of the winter presence of cetaceans coming to feed in the nearby fjords.",
        bodyEs:
          "Tromsø, la ciudad más grande al norte del círculo polar ártico con más de setenta mil habitantes, conserva una vida cultural animada pese a su latitud extrema, impulsada por una importante población estudiantil y por instituciones como la catedral ártica, edificio moderno con aspecto de banquisa estilizada construido en 1965. La ciudad sigue siendo además el punto de partida preferido para excursiones en trineo de perros o motonieve por las montañas circundantes, así como para safaris de avistamiento de ballenas que aprovechan la presencia invernal de cetáceos que acuden a alimentarse en los fiordos cercanos.",
      },
    ],
    hotels: [
      {
        name: "Lodge d'observation des aurores boréales",
        nameEn: "A Northern Lights Observation Lodge",
        nameEs: "Lodge de observación de auroras boreales",
        description:
          "Un lodge simple à l'écart de la pollution lumineuse de Tromsø, chambres avec fenêtres orientées vers le ciel pour observer les aurores boréales sans quitter son lit.",
        descriptionEn:
          "A simple lodge away from Tromsø's light pollution, rooms with sky-facing windows for observing the Northern Lights without leaving bed.",
        descriptionEs:
          "Un sencillo lodge alejado de la contaminación lumínica de Tromsø, habitaciones con ventanas orientadas al cielo para observar las auroras boreales sin salir de la cama.",
        image: `${R2}/trips/norvege-tromso-hotel-1.jpg`,
      },
      {
        name: "Hôtel de charme au cœur de Tromsø",
        nameEn: "A Boutique Hotel at the Heart of Tromsø",
        nameEs: "Hotel con encanto en el corazón de Tromsø",
        description:
          "Un hôtel de charme au cœur de Tromsø, à distance de marche de la cathédrale arctique, point de départ pratique pour les excursions en traîneau à chiens et safaris à la baleine.",
        descriptionEn:
          "A boutique hotel at the heart of Tromsø, within walking distance of the Arctic Cathedral, a convenient base for dog-sledding excursions and whale safaris.",
        descriptionEs:
          "Un hotel con encanto en el corazón de Tromsø, a poca distancia a pie de la catedral ártica, punto de partida práctico para las excursiones en trineo de perros y safaris de ballenas.",
        image: `${R2}/trips/norvege-tromso-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "turquie",
    tour: {
      name: "Turquie : Antalya, la côte turquoise",
      nameEn: "Turkey: Antalya, the Turquoise Coast",
      nameEs: "Turquía: Antalya, la costa turquesa",
      slug: "turquie-antalya-cote-turquoise",
      image: `${R2}/tours/turquie-antalya-cote-turquoise.jpg`,
      images: `${R2}/trips/turquie-antalya-gallery-1.jpg,${R2}/trips/turquie-antalya-gallery-2.jpg,${R2}/trips/turquie-antalya-gallery-3.jpg,${R2}/trips/turquie-antalya-gallery-4.jpg,${R2}/trips/turquie-antalya-gallery-5.jpg,${R2}/trips/turquie-antalya-gallery-6.jpg`,
      tagline: "Une côte méditerranéenne où falaises calcaires et cités antiques se succèdent sur plus de deux mille kilomètres",
      taglineEn: "A Mediterranean coast where limestone cliffs and ancient cities follow one another over two thousand kilometres",
      taglineEs: "Una costa mediterránea donde acantilados calizos y ciudades antiguas se suceden a lo largo de más de dos mil kilómetros",
      description:
        "Antalya, principale ville de la côte turquoise turque, doit son nom moderne à la couleur particulière de ses eaux, où le calcaire dissous dans la mer Méditerranée produit une teinte turquoise distinctive visible sur l'ensemble du littoral. Cette côte, jadis connue sous le nom de Lycie puis de Pamphylie dans l'Antiquité, concentre des dizaines de cités gréco-romaines aujourd'hui en ruines, dont Termessos, forteresse naturelle jamais conquise par Alexandre le Grand lui-même, qui préféra contourner ses défenses naturelles plutôt que d'engager le siège.",
      descriptionEn:
        "Antalya, the main city on Turkey's turquoise coast, owes its modern name to the particular colour of its waters, where limestone dissolved in the Mediterranean Sea produces a distinctive turquoise hue visible along the entire coastline. This coast, once known as Lycia and then Pamphylia in antiquity, concentrates dozens of Greco-Roman cities now in ruins, including Termessos, a natural fortress never conquered even by Alexander the Great, who preferred to bypass its natural defences rather than lay siege.",
      descriptionEs:
        "Antalya, principal ciudad de la costa turquesa turca, debe su nombre moderno al color particular de sus aguas, donde la caliza disuelta en el mar Mediterráneo produce un tono turquesa distintivo visible en todo el litoral. Esta costa, antaño conocida como Licia y después como Panfilia en la Antigüedad, concentra decenas de ciudades grecorromanas hoy en ruinas, entre ellas Termeso, fortaleza natural nunca conquistada ni siquiera por Alejandro Magno, que prefirió esquivar sus defensas naturales antes que emprender el asedio.",
      price: 1900,
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
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 195,
    },
    sections: [
      {
        heading: "La couleur turquoise et le vieux port",
        headingEn: "The Turquoise Colour and the Old Harbour",
        headingEs: "El color turquesa y el puerto antiguo",
        body:
          "Le nom de « côte turquoise », adopté à partir des années 1980 pour promouvoir la région auprès des voyageurs internationaux, décrit précisément la teinte particulière des eaux d'Antalya, où le calcaire dissous dans la mer Méditerranée diffracte la lumière selon un spectre distinctif oscillant entre le bleu profond et le vert émeraude. Le vieux port de Kaleiçi, quartier historique aux ruelles ottomanes préservées et aux maisons traditionnelles en bois, offre un contraste saisissant entre l'effervescence balnéaire moderne de la ville et son patrimoine architectural multiséculaire.",
        bodyEn:
          "The name \"turquoise coast,\" adopted from the 1980s onward to promote the region to international travellers, precisely describes the particular hue of Antalya's waters, where limestone dissolved in the Mediterranean Sea diffracts light in a distinctive spectrum ranging from deep blue to emerald green. The old harbour of Kaleiçi, a historic district of preserved Ottoman lanes and traditional wooden houses, offers a striking contrast between the city's modern seaside bustle and its centuries-old architectural heritage.",
        bodyEs:
          "El nombre de «costa turquesa», adoptado a partir de la década de 1980 para promocionar la región entre los viajeros internacionales, describe con precisión el tono particular de las aguas de Antalya, donde la caliza disuelta en el mar Mediterráneo difracta la luz según un espectro distintivo que oscila entre el azul profundo y el verde esmeralda. El puerto antiguo de Kaleiçi, barrio histórico de callejuelas otomanas preservadas y casas tradicionales de madera, ofrece un contraste llamativo entre el bullicio balneario moderno de la ciudad y su patrimonio arquitectónico centenario.",
      },
      {
        heading: "Termessos, la forteresse qu'Alexandre ne conquit jamais",
        headingEn: "Termessos, the Fortress Alexander Never Conquered",
        headingEs: "Termeso, la fortaleza que Alejandro nunca conquistó",
        body:
          "Termessos, cité antique perchée à plus de mille mètres d'altitude sur un plateau montagneux quasiment inaccessible, résista en 333 avant notre ère au siège d'Alexandre le Grand, qui préféra finalement contourner ses défenses naturelles plutôt que d'engager des troupes dans un assaut jugé trop coûteux. Cette position stratégique exceptionnelle, jamais reproduite par aucune autre cité de la région, explique la préservation remarquable de ses vestiges, restés hors d'atteinte des pillages et des tremblements de terre qui affectèrent les cités antiques plus accessibles de la côte.",
        bodyEn:
          "Termessos, an ancient city perched over a thousand metres up on a nearly inaccessible mountain plateau, withstood a siege by Alexander the Great in 333 BCE, who ultimately preferred to bypass its natural defences rather than commit troops to an assault deemed too costly. This exceptional strategic position, never matched by any other city in the region, explains the remarkable preservation of its remains, which stayed out of reach of the looting and earthquakes that affected the more accessible ancient cities of the coast.",
        bodyEs:
          "Termeso, antigua ciudad encaramada a más de mil metros de altitud en una meseta montañosa casi inaccesible, resistió en el año 333 antes de nuestra era el asedio de Alejandro Magno, que finalmente prefirió esquivar sus defensas naturales antes que comprometer tropas en un asalto considerado demasiado costoso. Esta excepcional posición estratégica, nunca igualada por ninguna otra ciudad de la región, explica la notable preservación de sus vestigios, que permanecieron fuera del alcance de los saqueos y terremotos que afectaron a las ciudades antiguas más accesibles de la costa.",
      },
    ],
    hotels: [
      {
        name: "Maison ottomane rénovée à Kaleiçi",
        nameEn: "A Renovated Ottoman House in Kaleiçi",
        nameEs: "Casa otomana renovada en Kaleiçi",
        description:
          "Une maison ottomane rénovée dans les ruelles pavées de Kaleiçi, cour intérieure ombragée, à distance de marche du vieux port et des remparts historiques.",
        descriptionEn:
          "A renovated Ottoman house in the cobbled lanes of Kaleiçi, a shaded inner courtyard, within walking distance of the old harbour and historic ramparts.",
        descriptionEs:
          "Una casa otomana renovada en las callejuelas empedradas de Kaleiçi, patio interior sombreado, a poca distancia a pie del puerto antiguo y las murallas históricas.",
        image: `${R2}/trips/turquie-antalya-hotel-1.jpg`,
      },
      {
        name: "Resort en surplomb de la côte turquoise",
        nameEn: "A Resort Overlooking the Turquoise Coast",
        nameEs: "Resort con vistas a la costa turquesa",
        description:
          "Un resort en surplomb de la côte turquoise, piscine à débordement face à la mer Méditerranée, à courte distance des cités antiques environnantes.",
        descriptionEn:
          "A resort overlooking the turquoise coast, an infinity pool facing the Mediterranean Sea, a short distance from the surrounding ancient cities.",
        descriptionEs:
          "Un resort con vistas a la costa turquesa, piscina infinita frente al mar Mediterráneo, a poca distancia de las ciudades antiguas circundantes.",
        image: `${R2}/trips/turquie-antalya-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "autriche",
    tour: {
      name: "Autriche : Innsbruck et le Tyrol",
      nameEn: "Austria: Innsbruck and Tyrol",
      nameEs: "Austria: Innsbruck y el Tirol",
      slug: "autriche-innsbruck-tyrol",
      image: `${R2}/tours/autriche-innsbruck-tyrol.jpg`,
      images: `${R2}/trips/autriche-innsbruck-gallery-1.jpg,${R2}/trips/autriche-innsbruck-gallery-2.jpg,${R2}/trips/autriche-innsbruck-gallery-3.jpg,${R2}/trips/autriche-innsbruck-gallery-4.jpg,${R2}/trips/autriche-innsbruck-gallery-5.jpg,${R2}/trips/autriche-innsbruck-gallery-6.jpg`,
      tagline: "La seule capitale mondiale à avoir accueilli deux fois les Jeux olympiques d'hiver, encerclée par les sommets du Tyrol",
      taglineEn: "The only world capital to have hosted the Winter Olympics twice, encircled by the peaks of Tyrol",
      taglineEs: "La única capital mundial que ha acogido dos veces los Juegos Olímpicos de Invierno, rodeada por las cumbres del Tirol",
      description:
        "Innsbruck, capitale du Tyrol nichée dans une vallée encaissée entre des sommets dépassant deux mille cinq cents mètres, accueillit les Jeux olympiques d'hiver en 1964 puis en 1976, un doublé qu'aucune autre ville au monde n'a jamais répété. Le tremplin de saut à ski de Bergisel, reconstruit en 2002 selon les plans de l'architecte irakienne Zaha Hadid, domine toujours la ville depuis les hauteurs, tandis que le Toit d'Or, balcon médiéval recouvert de deux mille sept cents tuiles de cuivre doré, reste le symbole le plus photographié de la vieille ville.",
      descriptionEn:
        "Innsbruck, the Tyrolean capital nestled in a deep valley between peaks exceeding two thousand five hundred metres, hosted the Winter Olympics in 1964 and again in 1976, a double no other city in the world has ever repeated. The Bergisel ski jump, rebuilt in 2002 to designs by Iraqi architect Zaha Hadid, still overlooks the city from the heights, while the Golden Roof, a medieval balcony covered with two thousand seven hundred gilded copper tiles, remains the old town's most photographed symbol.",
      descriptionEs:
        "Innsbruck, capital del Tirol enclavada en un valle encajado entre cumbres que superan los dos mil quinientos metros, acogió los Juegos Olímpicos de Invierno en 1964 y de nuevo en 1976, un doblete que ninguna otra ciudad del mundo ha repetido jamás. El trampolín de salto de esquí de Bergisel, reconstruido en 2002 según los planos de la arquitecta iraquí Zaha Hadid, sigue dominando la ciudad desde las alturas, mientras que el Tejadillo de Oro, balcón medieval cubierto con dos mil setecientas tejas de cobre dorado, sigue siendo el símbolo más fotografiado del casco antiguo.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Déc à mars | Juin à sept",
      whenLabelEn: "Dec to March | June to Sept",
      whenLabelEs: "Dic a marzo | jun a sept",
      bestMonths: "december,january,february,march,june,july,august,september",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 197,
    },
    sections: [
      {
        heading: "Deux fois capitale olympique",
        headingEn: "Twice an Olympic Capital",
        headingEs: "Dos veces capital olímpica",
        body:
          "Innsbruck reste à ce jour la seule ville au monde à avoir accueilli deux fois les Jeux olympiques d'hiver, en 1964 puis en 1976, cette dernière édition ayant été confiée à la ville en urgence après le retrait de Denver, initialement désignée mais dont les habitants avaient refusé par référendum de financer l'événement. Le tremplin de saut à ski de Bergisel, entièrement reconstruit en 2002 selon les plans de l'architecte irakienne Zaha Hadid, domine toujours la ville depuis les hauteurs et reste utilisé chaque année pour une étape de la Tournée des quatre tremplins.",
        bodyEn:
          "Innsbruck remains to this day the only city in the world to have hosted the Winter Olympics twice, in 1964 and again in 1976, the latter edition having been awarded to the city in an emergency after Denver withdrew, initially designated but whose residents had refused by referendum to fund the event. The Bergisel ski jump, entirely rebuilt in 2002 to designs by Iraqi architect Zaha Hadid, still overlooks the city from the heights and remains used every year for a stage of the Four Hills Tournament.",
        bodyEs:
          "Innsbruck sigue siendo hasta hoy la única ciudad del mundo que ha acogido dos veces los Juegos Olímpicos de Invierno, en 1964 y de nuevo en 1976, esta última edición otorgada a la ciudad de urgencia tras la retirada de Denver, inicialmente designada pero cuyos habitantes habían rechazado por referéndum financiar el evento. El trampolín de salto de esquí de Bergisel, reconstruido enteramente en 2002 según los planos de la arquitecta iraquí Zaha Hadid, sigue dominando la ciudad desde las alturas y continúa utilizándose cada año para una etapa del Torneo de los Cuatro Trampolines.",
      },
      {
        heading: "Le Toit d'Or et la vieille ville tyrolienne",
        headingEn: "The Golden Roof and the Tyrolean Old Town",
        headingEs: "El Tejadillo de Oro y el casco antiguo tirolés",
        body:
          "Le Toit d'Or, balcon médiéval construit vers 1500 pour l'empereur Maximilien Ier et recouvert de deux mille sept cents tuiles de cuivre doré, servait originellement de loge royale pour observer les tournois et spectacles organisés sur la place en contrebas. La vieille ville d'Innsbruck, dont les maisons aux façades colorées et aux oriels caractéristiques s'organisent en un dédale de ruelles piétonnes, conserve ainsi un cœur historique tyrolien authentique directement encerclé par les sommets alpins visibles depuis presque chaque rue.",
        bodyEn:
          "The Golden Roof, a medieval balcony built around 1500 for Emperor Maximilian I and covered with two thousand seven hundred gilded copper tiles, originally served as a royal box for watching tournaments and shows staged in the square below. Innsbruck's old town, whose colourful-facaded houses with characteristic oriel windows form a maze of pedestrian lanes, thus retains an authentic Tyrolean historic heart directly encircled by alpine peaks visible from almost every street.",
        bodyEs:
          "El Tejadillo de Oro, balcón medieval construido hacia 1500 para el emperador Maximiliano I y cubierto con dos mil setecientas tejas de cobre dorado, servía originalmente de palco real para observar torneos y espectáculos organizados en la plaza de abajo. El casco antiguo de Innsbruck, cuyas casas de fachadas coloridas y característicos miradores se organizan en un laberinto de calles peatonales, conserva así un auténtico corazón histórico tirolés directamente rodeado de cumbres alpinas visibles desde casi cualquier calle.",
      },
    ],
    hotels: [
      {
        name: "Maison tyrolienne rénovée dans la vieille ville",
        nameEn: "A Renovated Tyrolean House in the Old Town",
        nameEs: "Casa tirolesa renovada en el casco antiguo",
        description:
          "Une maison tyrolienne rénovée dans la vieille ville d'Innsbruck, chambres avec oriel traditionnel, à distance de marche du Toit d'Or et du tremplin de Bergisel.",
        descriptionEn:
          "A renovated Tyrolean house in Innsbruck's old town, rooms with a traditional oriel window, within walking distance of the Golden Roof and the Bergisel ski jump.",
        descriptionEs:
          "Una casa tirolesa renovada en el casco antiguo de Innsbruck, habitaciones con mirador tradicional, a poca distancia a pie del Tejadillo de Oro y el trampolín de Bergisel.",
        image: `${R2}/trips/autriche-innsbruck-hotel-1.jpg`,
      },
      {
        name: "Chalet de montagne en périphérie d'Innsbruck",
        nameEn: "A Mountain Chalet on the Edge of Innsbruck",
        nameEs: "Chalet de montaña en las afueras de Innsbruck",
        description:
          "Un chalet de montagne traditionnel en périphérie d'Innsbruck, chambres avec vue sur les sommets du Tyrol, à courte distance des remontées mécaniques et des sentiers de randonnée.",
        descriptionEn:
          "A traditional mountain chalet on the edge of Innsbruck, rooms overlooking the peaks of Tyrol, a short distance from the ski lifts and hiking trails.",
        descriptionEs:
          "Un chalet de montaña tradicional en las afueras de Innsbruck, habitaciones con vistas a las cumbres del Tirol, a poca distancia de los remontes y los senderos de excursión.",
        image: `${R2}/trips/autriche-innsbruck-hotel-2.jpg`,
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
