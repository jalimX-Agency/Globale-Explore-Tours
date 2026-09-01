// Europe batch 7 — Géorgie, Malte, Monténégro. New trips bringing each destination to at least 3,
// styled on Black Tomato's real structure (a short number of named-hotel chapters, not an
// exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-europe-7.ts
// Requires scripts/upload-images-europe-7.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "georgie",
    tour: {
      name: "Géorgie : la Svanétie et le Kazbek",
      nameEn: "Georgia: Svaneti and Mount Kazbek",
      nameEs: "Georgia: Svanetia y el monte Kazbek",
      slug: "georgie-svanetie-kazbek",
      image: `${R2}/journeys/georgie-svanetie-kazbek-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un village médiéval hérissé de plus de deux cents tours de pierre défensives, puis une église perchée face au deuxième plus haut sommet du Caucase",
      taglineEn: "A medieval village bristling with over two hundred defensive stone towers, then a church perched opposite the Caucasus's second-highest peak",
      taglineEs: "Un pueblo medieval erizado de más de doscientas torres de piedra defensivas, y después una iglesia encaramada frente al segundo pico más alto del Cáucaso",
      description:
        "Un voyage loin de Tbilissi et de la Kakhétie : la Svanétie, région montagneuse isolée du Grand Caucase où le village d'Ushguli, l'une des agglomérations habitées en permanence les plus hautes d'Europe à plus de deux mille mètres d'altitude, conserve plus de deux cents tours de pierre défensives médiévales construites par des clans familiaux rivaux, puis la région de Kazbegi, dominée par le mont Kazbek, cinquième plus haut sommet de Géorgie, où l'église de la Trinité de Guerguéti se dresse de façon spectaculaire à deux mille cent soixante-dix mètres face au glacier.",
      descriptionEn:
        "A journey far from Tbilisi and Kakheti: Svaneti, an isolated mountain region of the Greater Caucasus where the village of Ushguli, one of the highest permanently inhabited settlements in Europe at over two thousand metres, retains more than two hundred medieval defensive stone towers built by rival family clans, then the Kazbegi region, dominated by Mount Kazbek, Georgia's fifth-highest peak, where Gergeti Trinity Church stands spectacularly at two thousand one hundred and seventy metres facing the glacier.",
      descriptionEs:
        "Un viaje lejos de Tbilisi y Kakheti: Svanetia, región montañosa aislada del Gran Cáucaso donde el pueblo de Ushguli, uno de los asentamientos habitados permanentemente más altos de Europa a más de dos mil metros de altitud, conserva más de doscientas torres de piedra defensivas medievales construidas por clanes familiares rivales, y después la región de Kazbegi, dominada por el monte Kazbek, quinta cumbre más alta de Georgia, donde la iglesia de la Trinidad de Gergeti se alza de forma espectacular a dos mil ciento setenta metros frente al glaciar.",
      price: 2400,
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
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 212,
    },
    chapters: [
      {
        title: "La Svanétie et ses tours médiévales",
        titleEn: "Svaneti and Its Medieval Towers",
        titleEs: "Svanetia y sus torres medievales",
        intro:
          "Premier chapitre en Svanétie, région montagneuse isolée du Grand Caucase restée coupée du reste du pays par des cols enneigés une grande partie de l'année, ce qui lui permit de préserver jusqu'à aujourd'hui une architecture défensive médiévale unique en Europe. Le village d'Ushguli, communauté de quatre hameaux perchée à plus de deux mille mètres d'altitude et classée au patrimoine mondial de l'UNESCO, conserve plus de deux cents tours de pierre construites entre le IXe et le XIIIe siècle par des clans familiaux qui s'en servaient à la fois de refuge défensif contre les invasions et de résidence, une pratique architecturale qui perdura localement jusqu'au XXe siècle.",
        introEn:
          "The first chapter unfolds in Svaneti, an isolated mountain region of the Greater Caucasus cut off from the rest of the country by snow-covered passes for much of the year, which allowed it to preserve a medieval defensive architecture unique in Europe to this day. The village of Ushguli, a community of four hamlets perched above two thousand metres and UNESCO World Heritage listed, retains more than two hundred stone towers built between the 9th and 13th centuries by family clans who used them both as defensive refuges against invasions and as residences, an architectural practice that persisted locally into the 20th century.",
        introEs:
          "El primer capítulo se desarrolla en Svanetia, región montañosa aislada del Gran Cáucaso que permanece incomunicada del resto del país por puertos nevados durante buena parte del año, lo que le permitió preservar hasta hoy una arquitectura defensiva medieval única en Europa. El pueblo de Ushguli, comunidad de cuatro aldeas encaramada a más de dos mil metros de altitud y declarada Patrimonio de la Humanidad por la UNESCO, conserva más de doscientas torres de piedra construidas entre los siglos IX y XIII por clanes familiares que las usaban tanto de refugio defensivo contra las invasiones como de residencia, una práctica arquitectónica que persistió localmente hasta el siglo XX.",
        galleryImages: `${R2}/journeys/georgie-svanetie-gallery1.jpg,${R2}/journeys/georgie-svanetie-gallery2.jpg,${R2}/journeys/georgie-svanetie-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Ushguli et ses tours défensives",
            titleEn: "Ushguli and its defensive towers",
            titleEs: "Ushguli y sus torres defensivas",
            description:
              "Exploration d'Ushguli, l'une des agglomérations habitées en permanence les plus hautes d'Europe, et de ses plus de deux cents tours de pierre médiévales.",
            descriptionEn:
              "An exploration of Ushguli, one of the highest permanently inhabited settlements in Europe, and its more than two hundred medieval stone towers.",
            descriptionEs:
              "Exploración de Ushguli, uno de los asentamientos habitados permanentemente más altos de Europa, y sus más de doscientas torres de piedra medievales.",
            image: `${R2}/journeys/georgie-svanetie-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée jusqu'au glacier de Shkhara",
            titleEn: "A hike to the Shkhara glacier",
            titleEs: "Caminata hasta el glaciar de Shkhara",
            description:
              "Randonnée depuis Ushguli jusqu'aux abords du glacier de Shkhara, qui alimente les sources de l'Enguri au pied du plus haut sommet de Géorgie.",
            descriptionEn:
              "A hike from Ushguli to the edges of the Shkhara glacier, which feeds the sources of the Enguri River at the foot of Georgia's highest peak.",
            descriptionEs:
              "Caminata desde Ushguli hasta las inmediaciones del glaciar de Shkhara, que alimenta las fuentes del río Enguri al pie de la cumbre más alta de Georgia.",
            image: `${R2}/journeys/georgie-svanetie-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Kazbegi et l'église de la Trinité de Guerguéti",
        titleEn: "Kazbegi and Gergeti Trinity Church",
        titleEs: "Kazbegi y la iglesia de la Trinidad de Gergeti",
        intro:
          "Route vers la région de Kazbegi, dominée par le mont Kazbek, volcan endormi et cinquième plus haut sommet de Géorgie culminant à cinq mille cinquante-quatre mètres, dont la silhouette enneigée inspira au XIXe siècle plusieurs poèmes du grand écrivain russe Alexandre Pouchkine lors de ses voyages sur la route militaire géorgienne. L'église de la Trinité de Guerguéti, construite au XIVe siècle et perchée à deux mille cent soixante-dix mètres sur un promontoire isolé face au glacier, servit historiquement de cachette pour les trésors religieux les plus précieux du pays lors des invasions, en raison de son accès particulièrement difficile.",
        introEn:
          "The road to the Kazbegi region, dominated by Mount Kazbek, a dormant volcano and Georgia's fifth-highest peak rising to five thousand and fifty-four metres, whose snow-capped silhouette inspired several poems by the great Russian writer Alexander Pushkin in the 19th century during his travels along the Georgian Military Road. Gergeti Trinity Church, built in the 14th century and perched at two thousand one hundred and seventy metres on an isolated promontory facing the glacier, historically served as a hiding place for the country's most precious religious treasures during invasions, owing to its particularly difficult access.",
        introEs:
          "Ruta hacia la región de Kazbegi, dominada por el monte Kazbek, volcán inactivo y quinta cumbre más alta de Georgia, que se eleva a cinco mil cincuenta y cuatro metros, cuya silueta nevada inspiró en el siglo XIX varios poemas del gran escritor ruso Alexander Pushkin durante sus viajes por la carretera militar georgiana. La iglesia de la Trinidad de Gergeti, construida en el siglo XIV y encaramada a dos mil ciento setenta metros en un promontorio aislado frente al glaciar, sirvió históricamente de escondite para los tesoros religiosos más preciados del país durante las invasiones, debido a su acceso particularmente difícil.",
        galleryImages: `${R2}/journeys/georgie-kazbek-gallery1.jpg,${R2}/journeys/georgie-kazbek-gallery2.jpg,${R2}/journeys/georgie-kazbek-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée jusqu'à l'église de la Trinité",
            titleEn: "A hike to Trinity Church",
            titleEs: "Caminata hasta la iglesia de la Trinidad",
            description:
              "Randonnée jusqu'à l'église de la Trinité de Guerguéti, perchée à deux mille cent soixante-dix mètres face au glacier du mont Kazbek.",
            descriptionEn:
              "A hike to Gergeti Trinity Church, perched at two thousand one hundred and seventy metres facing the glacier of Mount Kazbek.",
            descriptionEs:
              "Caminata hasta la iglesia de la Trinidad de Gergeti, encaramada a dos mil ciento setenta metros frente al glaciar del monte Kazbek.",
            image: `${R2}/journeys/georgie-kazbek-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La route militaire géorgienne et la gorge de Dariali",
            titleEn: "The Georgian Military Road and Darial Gorge",
            titleEs: "La carretera militar georgiana y el desfiladero de Darial",
            description:
              "Parcours le long de la route militaire géorgienne, ancienne voie commerciale à travers la gorge de Dariali qui inspira les poèmes d'Alexandre Pouchkine.",
            descriptionEn:
              "A drive along the Georgian Military Road, an ancient trade route through Darial Gorge that inspired Alexander Pushkin's poems.",
            descriptionEs:
              "Recorrido por la carretera militar georgiana, antigua vía comercial a través del desfiladero de Darial que inspiró los poemas de Alexander Pushkin.",
            image: `${R2}/journeys/georgie-kazbek-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "malte",
    tour: {
      name: "Malte : La Valette et Marsaxlokk",
      nameEn: "Malta: Valletta and Marsaxlokk",
      nameEs: "Malta: La Valeta y Marsaxlokk",
      slug: "malte-valette-marsaxlokk",
      image: `${R2}/journeys/malte-valette-marsaxlokk-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une capitale baroque entièrement classée à l'UNESCO, construite en moins de quinze ans par les chevaliers de Saint-Jean, puis un port de pêcheurs aux barques peintes d'yeux protecteurs phéniciens",
      taglineEn: "A baroque capital entirely UNESCO listed, built in under fifteen years by the Knights of St John, then a fishing port with boats painted with protective Phoenician eyes",
      taglineEs: "Una capital barroca declarada íntegramente por la UNESCO, construida en menos de quince años por los caballeros de San Juan, y después un puerto pesquero de barcas pintadas con ojos protectores fenicios",
      description:
        "Un voyage loin de Gozo et des temples mégalithiques : La Valette, capitale de Malte entièrement classée au patrimoine mondial de l'UNESCO, fondée et construite en un temps record de moins de quinze ans à partir de 1566 par les chevaliers de l'ordre de Saint-Jean pour fortifier l'île après le grand siège ottoman de 1565, puis Marsaxlokk, village de pêcheurs traditionnel dont les barques colorées appelées luzzu arborent toujours sur leur proue un œil peint censé, selon une tradition remontant aux Phéniciens, éloigner le mauvais sort en mer.",
      descriptionEn:
        "A journey far from Gozo and the megalithic temples: Valletta, Malta's capital, entirely UNESCO World Heritage listed, founded and built in a record time of under fifteen years starting in 1566 by the Knights of the Order of St John to fortify the island after the great Ottoman siege of 1565, then Marsaxlokk, a traditional fishing village whose colourful boats known as luzzus still carry a painted eye on their bow, said in a tradition tracing back to the Phoenicians to ward off bad luck at sea.",
      descriptionEs:
        "Un viaje lejos de Gozo y los templos megalíticos: La Valeta, capital de Malta, declarada íntegramente Patrimonio de la Humanidad por la UNESCO, fundada y construida en un tiempo récord de menos de quince años a partir de 1566 por los caballeros de la Orden de San Juan para fortificar la isla tras el gran asedio otomano de 1565, y después Marsaxlokk, pueblo de pescadores tradicional cuyas coloridas barcas llamadas luzzu siguen luciendo en la proa un ojo pintado que, según una tradición que se remonta a los fenicios, aleja la mala suerte en el mar.",
      price: 1600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Avril à oct",
      whenLabelEn: "April to Oct",
      whenLabelEs: "Abril a oct",
      bestMonths: "april,may,june,july,august,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 214,
    },
    chapters: [
      {
        title: "La Valette, la capitale des chevaliers",
        titleEn: "Valletta, the Knights' Capital",
        titleEs: "La Valeta, la capital de los caballeros",
        intro:
          "Premier chapitre à La Valette, capitale de Malte fondée en 1566 par Jean de la Valette, grand maître de l'ordre des chevaliers de Saint-Jean, au lendemain du grand siège ottoman de 1565 qui faillit coûter l'île à l'ordre hospitalier. Construite en un temps record de moins de quinze ans selon un plan urbain rigoureusement quadrillé, exceptionnel pour l'époque, la ville entière fut classée au patrimoine mondial de l'UNESCO en 1980, une distinction rare accordée à une capitale dans son intégralité et qui témoigne de la densité architecturale baroque exceptionnelle concentrée sur cette péninsule de moins d'un kilomètre carré.",
        introEn:
          "The first chapter unfolds in Valletta, Malta's capital founded in 1566 by Jean de la Valette, Grand Master of the Order of the Knights of St John, in the aftermath of the great Ottoman siege of 1565 that nearly cost the island to the Hospitaller order. Built in a record time of under fifteen years to a rigorously gridded urban plan, exceptional for its time, the entire city was UNESCO World Heritage listed in 1980, a rare distinction granted to a capital in its entirety and one that testifies to the exceptional baroque architectural density concentrated on this peninsula of under one square kilometre.",
        introEs:
          "El primer capítulo se desarrolla en La Valeta, capital de Malta fundada en 1566 por Jean de la Valette, gran maestre de la orden de los caballeros de San Juan, tras el gran asedio otomano de 1565 que estuvo a punto de costarle la isla a la orden hospitalaria. Construida en un tiempo récord de menos de quince años según un plano urbano rigurosamente cuadriculado, excepcional para la época, la ciudad entera fue declarada Patrimonio de la Humanidad por la UNESCO en 1980, una distinción poco frecuente otorgada a una capital en su totalidad y que da testimonio de la excepcional densidad arquitectónica barroca concentrada en esta península de menos de un kilómetro cuadrado.",
        galleryImages: `${R2}/journeys/malte-valette-gallery1.jpg,${R2}/journeys/malte-valette-gallery2.jpg,${R2}/journeys/malte-valette-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 50,
        days: [
          {
            dayNumber: 1,
            title: "Les jardins Barrakka et les remparts",
            titleEn: "The Barrakka Gardens and the ramparts",
            titleEs: "Los jardines Barrakka y las murallas",
            description:
              "Promenade dans les jardins supérieurs de Barrakka, aménagés sur les remparts fortifiés de La Valette, offrant un panorama complet sur le Grand Port.",
            descriptionEn:
              "A stroll through the Upper Barrakka Gardens, laid out atop Valletta's fortified ramparts, offering a complete panorama over the Grand Harbour.",
            descriptionEs:
              "Paseo por los jardines superiores de Barrakka, dispuestos sobre las murallas fortificadas de La Valeta, con un panorama completo sobre el Gran Puerto.",
            image: `${R2}/journeys/malte-valette-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La co-cathédrale Saint-Jean",
            titleEn: "St John's Co-Cathedral",
            titleEs: "La cocatedral de San Juan",
            description:
              "Visite de la co-cathédrale Saint-Jean, dont l'intérieur baroque richement décoré abrite le célèbre tableau de la Décollation de saint Jean-Baptiste peint par le Caravage en 1608.",
            descriptionEn:
              "A visit to St John's Co-Cathedral, whose richly decorated baroque interior houses the famous Beheading of St John the Baptist painted by Caravaggio in 1608.",
            descriptionEs:
              "Visita a la cocatedral de San Juan, cuyo interior barroco ricamente decorado alberga el célebre cuadro de la Decapitación de san Juan Bautista pintado por Caravaggio en 1608.",
            image: `${R2}/journeys/malte-valette-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Marsaxlokk, le village des yeux protecteurs",
        titleEn: "Marsaxlokk, the Village of Protective Eyes",
        titleEs: "Marsaxlokk, el pueblo de los ojos protectores",
        intro:
          "Route vers Marsaxlokk, village de pêcheurs traditionnel du sud-est de l'île resté largement préservé du développement touristique intensif, dont le port abrite chaque jour des dizaines de barques colorées appelées luzzu, embarcations en bois peintes de rouge, jaune et vert vif selon une tradition ininterrompue depuis des générations. Chacune de ces barques arbore sur sa proue un œil peint, connu localement sous le nom d'Œil d'Osiris ou Œil d'Horus selon les interprétations, dont l'origine remonte selon la tradition locale aux marins phéniciens qui peuplèrent l'archipel maltais dès le premier millénaire avant notre ère et le considéraient comme une protection contre le mauvais sort en mer.",
        introEn:
          "The road to Marsaxlokk, a traditional fishing village in the island's south-east that has remained largely spared from intensive tourist development, whose harbour holds dozens of colourful boats called luzzus each day, wooden vessels painted bright red, yellow, and green following a tradition unbroken for generations. Each of these boats carries a painted eye on its bow, known locally as the Eye of Osiris or Eye of Horus depending on interpretation, whose origin, according to local tradition, traces back to the Phoenician sailors who settled the Maltese archipelago as early as the first millennium BCE and regarded it as protection against bad luck at sea.",
        introEs:
          "Ruta hacia Marsaxlokk, pueblo de pescadores tradicional del sureste de la isla que ha permanecido en gran medida al margen del desarrollo turístico intensivo, cuyo puerto alberga cada día decenas de coloridas barcas llamadas luzzu, embarcaciones de madera pintadas de rojo, amarillo y verde vivo según una tradición ininterrumpida durante generaciones. Cada una de estas barcas luce en la proa un ojo pintado, conocido localmente como Ojo de Osiris u Ojo de Horus según la interpretación, cuyo origen, según la tradición local, se remonta a los marineros fenicios que poblaron el archipiélago maltés ya en el primer milenio antes de nuestra era y lo consideraban una protección contra la mala suerte en el mar.",
        galleryImages: `${R2}/journeys/malte-marsaxlokk-gallery1.jpg,${R2}/journeys/malte-marsaxlokk-gallery2.jpg,${R2}/journeys/malte-marsaxlokk-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Le marché aux poissons de Marsaxlokk",
            titleEn: "The Marsaxlokk fish market",
            titleEs: "El mercado de pescado de Marsaxlokk",
            description:
              "Visite du marché dominical de Marsaxlokk, où les pêcheurs locaux vendent directement leur prise du jour parmi les luzzu colorées amarrées au port.",
            descriptionEn:
              "A visit to Marsaxlokk's Sunday market, where local fishermen sell their day's catch directly amid the colourful luzzus moored in the harbour.",
            descriptionEs:
              "Visita al mercado dominical de Marsaxlokk, donde los pescadores locales venden directamente su captura del día entre las coloridas luzzu amarradas en el puerto.",
            image: `${R2}/journeys/malte-marsaxlokk-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La grotte bleue et les falaises du sud",
            titleEn: "The Blue Grotto and the southern cliffs",
            titleEs: "La gruta azul y los acantilados del sur",
            description:
              "Excursion en barque jusqu'à la grotte bleue, série de cavernes marines où la lumière traversant l'eau turquoise crée un jeu de reflets phosphorescents.",
            descriptionEn:
              "A boat excursion to the Blue Grotto, a series of sea caves where light passing through the turquoise water creates a shimmering phosphorescent play of reflections.",
            descriptionEs:
              "Excursión en barca hasta la gruta azul, serie de cuevas marinas donde la luz que atraviesa el agua turquesa crea un juego de reflejos fosforescentes.",
            image: `${R2}/journeys/malte-marsaxlokk-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "montenegro",
    tour: {
      name: "Monténégro : le Durmitor et le Lovćen",
      nameEn: "Montenegro: Durmitor and Lovćen",
      nameEs: "Montenegro: el Durmitor y el Lovćen",
      slug: "montenegro-durmitor-lovcen",
      image: `${R2}/journeys/montenegro-durmitor-lovcen-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le deuxième plus profond canyon du monde après le Grand Canyon, puis un mausolée perché à mille sept cents mètres qui rend hommage au plus grand poète du pays",
      taglineEn: "The world's second-deepest canyon after the Grand Canyon, then a mausoleum perched at seventeen hundred metres honouring the country's greatest poet",
      taglineEs: "El segundo cañón más profundo del mundo después del Gran Cañón, y después un mausoleo encaramado a mil setecientos metros que rinde homenaje al mayor poeta del país",
      description:
        "Un voyage loin de la baie de Kotor et de Budva : le parc national du Durmitor, massif montagneux classé à l'UNESCO qui abrite le canyon de la Tara, deuxième plus profond canyon du monde après le Grand Canyon avec une profondeur atteignant treize cents mètres, ainsi que dix-huit lacs glaciaires d'altitude surnommés localement les « yeux de la montagne », puis le parc national du Lovćen, dont le sommet du mont Jezerski abrite le mausolée de Petar II Petrović-Njegoš, prince-évêque et plus grand poète national du Monténégro, accessible après l'ascension de quatre cent soixante et une marches creusées dans la roche.",
      descriptionEn:
        "A journey far from the Bay of Kotor and Budva: Durmitor National Park, a UNESCO-listed mountain massif home to Tara Canyon, the world's second-deepest canyon after the Grand Canyon at up to thirteen hundred metres deep, as well as eighteen high-altitude glacial lakes locally nicknamed the \"eyes of the mountain,\" then Lovćen National Park, whose Jezerski Peak summit is home to the mausoleum of Petar II Petrović-Njegoš, prince-bishop and Montenegro's greatest national poet, reached after climbing four hundred and sixty-one steps carved into the rock.",
      descriptionEs:
        "Un viaje lejos de la bahía de Kotor y Budva: el parque nacional de Durmitor, macizo montañoso declarado por la UNESCO que alberga el cañón del Tara, segundo cañón más profundo del mundo después del Gran Cañón con una profundidad de hasta mil trescientos metros, así como dieciocho lagos glaciares de altitud apodados localmente los «ojos de la montaña», y después el parque nacional de Lovćen, cuya cumbre del monte Jezerski alberga el mausoleo de Petar II Petrović-Njegoš, príncipe-obispo y mayor poeta nacional de Montenegro, al que se accede tras ascender cuatrocientos sesenta y un escalones tallados en la roca.",
      price: 2000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Juin à sept",
      whenLabelEn: "June to Sept",
      whenLabelEs: "Jun a sept",
      bestMonths: "june,july,august,september",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 216,
    },
    chapters: [
      {
        title: "Le Durmitor et le canyon de la Tara",
        titleEn: "Durmitor and Tara Canyon",
        titleEs: "El Durmitor y el cañón del Tara",
        intro:
          "Premier chapitre dans le parc national du Durmitor, massif montagneux classé au patrimoine mondial de l'UNESCO depuis 1980, dont le canyon de la Tara s'enfonce jusqu'à treize cents mètres de profondeur, faisant de lui le deuxième plus profond canyon du monde après le Grand Canyon du Colorado et le plus profond d'Europe. La rivière Tara qui creuse ce canyon compte parmi les cours d'eau les plus purs du continent et alimente également les dix-huit lacs glaciaires d'altitude du massif, surnommés localement les « yeux de la montagne » en raison de leur forme circulaire caractéristique et de leurs eaux d'une transparence remarquable.",
        introEn:
          "The first chapter unfolds in Durmitor National Park, a mountain massif UNESCO World Heritage listed since 1980, whose Tara Canyon plunges to thirteen hundred metres deep, making it the world's second-deepest canyon after the Colorado's Grand Canyon and the deepest in Europe. The Tara River that carved this canyon ranks among the continent's purest waterways and also feeds the massif's eighteen high-altitude glacial lakes, locally nicknamed the \"eyes of the mountain\" for their characteristic circular shape and remarkably clear waters.",
        introEs:
          "El primer capítulo se desarrolla en el parque nacional de Durmitor, macizo montañoso declarado Patrimonio de la Humanidad por la UNESCO desde 1980, cuyo cañón del Tara se hunde hasta mil trescientos metros de profundidad, lo que lo convierte en el segundo cañón más profundo del mundo después del Gran Cañón del Colorado y el más profundo de Europa. El río Tara que excava este cañón se cuenta entre los cursos de agua más puros del continente y alimenta también los dieciocho lagos glaciares de altitud del macizo, apodados localmente los «ojos de la montaña» por su característica forma circular y sus aguas de notable transparencia.",
        galleryImages: `${R2}/journeys/montenegro-durmitor-gallery1.jpg,${R2}/journeys/montenegro-durmitor-gallery2.jpg,${R2}/journeys/montenegro-durmitor-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Rafting sur le canyon de la Tara",
            titleEn: "Rafting through Tara Canyon",
            titleEs: "Rafting por el cañón del Tara",
            description:
              "Descente en rafting sur la rivière Tara, à travers le deuxième plus profond canyon du monde et le plus profond d'Europe, entre parois rocheuses vertigineuses.",
            descriptionEn:
              "A rafting descent on the Tara River, through the world's second-deepest canyon and Europe's deepest, between dizzying rock walls.",
            descriptionEs:
              "Descenso en rafting por el río Tara, a través del segundo cañón más profundo del mundo y el más profundo de Europa, entre vertiginosas paredes rocosas.",
            image: `${R2}/journeys/montenegro-durmitor-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée autour des lacs glaciaires",
            titleEn: "A hike around the glacial lakes",
            titleEs: "Caminata alrededor de los lagos glaciares",
            description:
              "Randonnée autour des lacs glaciaires du massif du Durmitor, surnommés les « yeux de la montagne » pour leur forme circulaire et leur eau limpide.",
            descriptionEn:
              "A hike around the Durmitor massif's glacial lakes, nicknamed the \"eyes of the mountain\" for their circular shape and clear water.",
            descriptionEs:
              "Caminata alrededor de los lagos glaciares del macizo del Durmitor, apodados los «ojos de la montaña» por su forma circular y su agua cristalina.",
            image: `${R2}/journeys/montenegro-durmitor-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le Lovćen et le mausolée de Njegoš",
        titleEn: "Lovćen and the Njegoš Mausoleum",
        titleEs: "El Lovćen y el mausoleo de Njegoš",
        intro:
          "Route vers le parc national du Lovćen, montagne sacrée du Monténégro dont le sommet du mont Jezerski, culminant à mille six cent cinquante-sept mètres, abrite le mausolée de Petar II Petrović-Njegoš, prince-évêque du XIXe siècle considéré comme le plus grand poète national du pays pour son œuvre épique La Couronne de montagne. Le mausolée, conçu par le sculpteur croate Ivan Meštrović et inauguré en 1974, n'est accessible qu'après l'ascension de quatre cent soixante et une marches creusées à travers un tunnel percé dans la roche, un effort récompensé par un panorama exceptionnel qui s'étend par temps clair jusqu'à la mer Adriatique et l'Albanie voisine.",
        introEn:
          "The road to Lovćen National Park, Montenegro's sacred mountain whose Jezerski Peak summit, rising to sixteen hundred and fifty-seven metres, is home to the mausoleum of Petar II Petrović-Njegoš, a 19th-century prince-bishop regarded as the country's greatest national poet for his epic work The Mountain Wreath. The mausoleum, designed by Croatian sculptor Ivan Meštrović and inaugurated in 1974, can only be reached after climbing four hundred and sixty-one steps carved through a tunnel bored into the rock, an effort rewarded with an exceptional panorama stretching in clear weather as far as the Adriatic Sea and neighbouring Albania.",
        introEs:
          "Ruta hacia el parque nacional de Lovćen, montaña sagrada de Montenegro cuya cumbre del monte Jezerski, que se eleva a mil seiscientos cincuenta y siete metros, alberga el mausoleo de Petar II Petrović-Njegoš, príncipe-obispo del siglo XIX considerado el mayor poeta nacional del país por su obra épica La corona de la montaña. El mausoleo, diseñado por el escultor croata Ivan Meštrović e inaugurado en 1974, solo es accesible tras ascender cuatrocientos sesenta y un escalones tallados a través de un túnel excavado en la roca, un esfuerzo recompensado con un panorama excepcional que se extiende en días despejados hasta el mar Adriático y la vecina Albania.",
        galleryImages: `${R2}/journeys/montenegro-lovcen-gallery1.jpg,${R2}/journeys/montenegro-lovcen-gallery2.jpg,${R2}/journeys/montenegro-lovcen-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "L'ascension jusqu'au mausolée de Njegoš",
            titleEn: "The climb to the Njegoš Mausoleum",
            titleEs: "La ascensión hasta el mausoleo de Njegoš",
            description:
              "Ascension des quatre cent soixante et une marches creusées dans la roche jusqu'au mausolée de Njegoš, sur le sommet du mont Jezerski.",
            descriptionEn:
              "A climb up the four hundred and sixty-one steps carved into the rock to the Njegoš Mausoleum, atop Jezerski Peak.",
            descriptionEs:
              "Ascensión por los cuatrocientos sesenta y un escalones tallados en la roca hasta el mausoleo de Njegoš, en la cima del monte Jezerski.",
            image: `${R2}/journeys/montenegro-lovcen-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Panorama sur l'Adriatique depuis le Lovćen",
            titleEn: "A panorama over the Adriatic from Lovćen",
            titleEs: "Panorama sobre el Adriático desde el Lovćen",
            description:
              "Randonnée à travers les crêtes du Lovćen jusqu'à des points de vue qui s'étendent par temps clair jusqu'à la mer Adriatique et l'Albanie voisine.",
            descriptionEn:
              "A hike across the ridges of Lovćen to viewpoints stretching in clear weather as far as the Adriatic Sea and neighbouring Albania.",
            descriptionEs:
              "Caminata por las crestas del Lovćen hasta miradores que se extienden en días despejados hasta el mar Adriático y la vecina Albania.",
            image: `${R2}/journeys/montenegro-lovcen-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "georgie",
    tour: {
      name: "Géorgie : la Kakhétie viticole",
      nameEn: "Georgia: Wine-Growing Kakheti",
      nameEs: "Georgia: la Kakheti vitivinícola",
      slug: "georgie-kakhetie-vin",
      image: `${R2}/tours/georgie-kakhetie-vin.jpg`,
      images: `${R2}/trips/georgie-kakhetie-gallery-1.jpg,${R2}/trips/georgie-kakhetie-gallery-2.jpg,${R2}/trips/georgie-kakhetie-gallery-3.jpg,${R2}/trips/georgie-kakhetie-gallery-4.jpg,${R2}/trips/georgie-kakhetie-gallery-5.jpg,${R2}/trips/georgie-kakhetie-gallery-6.jpg`,
      tagline: "Le berceau du vin le plus ancien du monde, où huit mille ans de tradition viticole se poursuivent dans des jarres d'argile enfouies sous terre",
      taglineEn: "The birthplace of the world's oldest wine, where eight thousand years of winemaking tradition continue in clay jars buried underground",
      taglineEs: "La cuna del vino más antiguo del mundo, donde ocho mil años de tradición vitivinícola continúan en tinajas de arcilla enterradas bajo tierra",
      description:
        "La Kakhétie, région viticole de l'est de la Géorgie, produit selon des traces archéologiques du vin en continu depuis plus de huit mille ans, une antériorité qui fait du pays le berceau reconnu de la viticulture mondiale, antérieure de plusieurs millénaires aux traditions viticoles françaises ou italiennes. La méthode traditionnelle du qvevri, jarre d'argile géante enfouie sous terre dans laquelle le raisin fermente avec ses peaux et ses pépins pendant plusieurs mois, reste pratiquée aujourd'hui par des centaines de familles de vignerons et fut inscrite en 2013 au patrimoine culturel immatériel de l'UNESCO.",
      descriptionEn:
        "Kakheti, a wine region in eastern Georgia, has according to archaeological evidence produced wine continuously for over eight thousand years, a precedence that makes the country the recognised birthplace of winemaking worldwide, predating French or Italian wine traditions by several millennia. The traditional qvevri method, a giant clay jar buried underground in which the grapes ferment with their skins and seeds for several months, is still practised today by hundreds of winemaking families and was inscribed in 2013 on UNESCO's Intangible Cultural Heritage list.",
      descriptionEs:
        "Kakheti, región vitivinícola del este de Georgia, produce según hallazgos arqueológicos vino de forma continua desde hace más de ocho mil años, una antigüedad que convierte al país en la cuna reconocida de la viticultura mundial, anterior en varios milenios a las tradiciones vitivinícolas francesas o italianas. El método tradicional del qvevri, tinaja de arcilla gigante enterrada bajo tierra en la que la uva fermenta con su piel y sus semillas durante varios meses, sigue practicándose hoy por cientos de familias vitivinícolas y fue inscrito en 2013 en el Patrimonio Cultural Inmaterial de la UNESCO.",
      price: 1700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Sept à oct",
      whenLabelEn: "Sept to Oct",
      whenLabelEs: "Sept a oct",
      bestMonths: "september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 211,
    },
    sections: [
      {
        heading: "Huit mille ans de tradition viticole",
        headingEn: "Eight Thousand Years of Winemaking Tradition",
        headingEs: "Ocho mil años de tradición vitivinícola",
        body:
          "Des fragments de poterie retrouvés dans des sites archéologiques kakhétiens et analysés en 2017 ont révélé des résidus d'acide tartrique datant de plus de huit mille ans, faisant de la Géorgie le plus ancien site connu de vinification continue au monde, une découverte qui redéfinit l'histoire viticole mondiale. La région compte aujourd'hui plus de cinq cents cépages autochtones répertoriés, un patrimoine génétique exceptionnel largement préservé par l'isolement relatif du pays durant la période soviétique, qui empêcha l'uniformisation variétale connue par la plupart des autres régions viticoles mondiales.",
        bodyEn:
          "Pottery fragments recovered from Kakhetian archaeological sites and analysed in 2017 revealed tartaric acid residues dating back over eight thousand years, making Georgia the world's oldest known site of continuous winemaking, a discovery that redefines global wine history. The region today counts more than five hundred recorded native grape varieties, an exceptional genetic heritage largely preserved by the country's relative isolation during the Soviet period, which prevented the varietal standardisation experienced by most other winemaking regions worldwide.",
        bodyEs:
          "Fragmentos de cerámica hallados en yacimientos arqueológicos de Kakheti y analizados en 2017 revelaron residuos de ácido tartárico de más de ocho mil años de antigüedad, lo que convierte a Georgia en el yacimiento más antiguo conocido de vinificación continua del mundo, un descubrimiento que redefine la historia vitivinícola mundial. La región cuenta hoy con más de quinientas variedades de uva autóctonas registradas, un patrimonio genético excepcional preservado en gran medida por el relativo aislamiento del país durante el período soviético, que impidió la uniformización varietal que sufrieron la mayoría de las demás regiones vitivinícolas del mundo.",
      },
      {
        heading: "Le qvevri, une méthode ancestrale classée à l'UNESCO",
        headingEn: "The Qvevri, an Ancestral Method UNESCO Listed",
        headingEs: "El qvevri, un método ancestral declarado por la UNESCO",
        body:
          "Le qvevri, jarre d'argile de forme ovoïde pouvant contenir jusqu'à plusieurs milliers de litres, est fabriqué selon des techniques artisanales transmises de génération en génération, puis enfoui sous terre où la température constante du sol permet une fermentation naturelle du raisin, peaux et pépins compris, pendant plusieurs mois voire plusieurs années. Cette méthode, inscrite en 2013 au patrimoine culturel immatériel de l'humanité par l'UNESCO, produit des vins ambrés distinctifs aux tanins prononcés, radicalement différents des vins occidentaux et aujourd'hui recherchés par une nouvelle génération d'amateurs de vins naturels à travers le monde.",
        bodyEn:
          "The qvevri, an egg-shaped clay jar that can hold up to several thousand litres, is crafted using artisanal techniques passed down through generations, then buried underground where the soil's constant temperature allows the grapes, skins and seeds included, to ferment naturally over several months or even years. This method, inscribed in 2013 on UNESCO's Intangible Cultural Heritage of Humanity list, produces distinctive amber wines with pronounced tannins, radically different from Western wines and today sought after by a new generation of natural wine enthusiasts around the world.",
        bodyEs:
          "El qvevri, tinaja de arcilla de forma ovoide que puede contener hasta varios miles de litros, se fabrica según técnicas artesanales transmitidas de generación en generación, y después se entierra bajo tierra, donde la temperatura constante del suelo permite una fermentación natural de la uva, incluidas la piel y las semillas, durante varios meses o incluso años. Este método, inscrito en 2013 en el Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO, produce vinos ámbar distintivos de taninos pronunciados, radicalmente diferentes de los vinos occidentales y hoy buscados por una nueva generación de aficionados a los vinos naturales en todo el mundo.",
      },
    ],
    hotels: [
      {
        name: "Maison de vignerons à Sighnaghi",
        nameEn: "A Winemaker's House in Sighnaghi",
        nameEs: "Casa de vinicultores en Sighnaghi",
        description:
          "Une maison de vignerons rénovée dans la ville fortifiée de Sighnaghi, cave à qvevri traditionnelle, à distance de marche des remparts et des vignobles environnants.",
        descriptionEn:
          "A renovated winemaker's house in the fortified town of Sighnaghi, a traditional qvevri cellar, within walking distance of the ramparts and surrounding vineyards.",
        descriptionEs:
          "Una casa de vinicultores renovada en la ciudad amurallada de Sighnaghi, bodega de qvevri tradicional, a poca distancia a pie de las murallas y los viñedos circundantes.",
        image: `${R2}/trips/georgie-kakhetie-hotel-1.jpg`,
      },
      {
        name: "Domaine viticole au cœur de la Kakhétie",
        nameEn: "A Wine Estate at the Heart of Kakheti",
        nameEs: "Finca vitivinícola en el corazón de Kakheti",
        description:
          "Un domaine viticole familial au cœur de la Kakhétie, chambres avec vue directe sur les rangs de vigne et dégustations organisées sur place.",
        descriptionEn:
          "A family wine estate at the heart of Kakheti, rooms with a direct view of the vine rows and tastings organised on site.",
        descriptionEs:
          "Una finca vitivinícola familiar en el corazón de Kakheti, habitaciones con vistas directas a las hileras de viñedo y degustaciones organizadas in situ.",
        image: `${R2}/trips/georgie-kakhetie-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "malte",
    tour: {
      name: "Malte : l'île de Gozo",
      nameEn: "Malta: the Island of Gozo",
      nameEs: "Malta: la isla de Gozo",
      slug: "malte-gozo",
      image: `${R2}/tours/malte-gozo.jpg`,
      images: `${R2}/trips/malte-gozo-gallery-1.jpg,${R2}/trips/malte-gozo-gallery-2.jpg,${R2}/trips/malte-gozo-gallery-3.jpg,${R2}/trips/malte-gozo-gallery-4.jpg,${R2}/trips/malte-gozo-gallery-5.jpg,${R2}/trips/malte-gozo-gallery-6.jpg`,
      tagline: "Un site mégalithique antérieur aux pyramides d'Égypte, sur une île où le rythme de vie reste délibérément plus lent que celui de la capitale",
      taglineEn: "A megalithic site predating the Egyptian pyramids, on an island where life deliberately moves slower than in the capital",
      taglineEs: "Un yacimiento megalítico anterior a las pirámides de Egipto, en una isla donde el ritmo de vida es deliberadamente más lento que en la capital",
      description:
        "Gozo, deuxième plus grande île de l'archipel maltais, se distingue de Malte par un rythme de vie délibérément plus rural et plus lent, préservé par une économie tournée vers l'agriculture et la pêche plutôt que vers le tourisme de masse concentré sur l'île principale. Le site mégalithique de Ggantija, dont la construction remonterait à environ 3600 avant notre ère, compte parmi les structures autonomes les plus anciennes jamais érigées par l'humanité, antérieures de plus de mille ans aux pyramides égyptiennes de Gizeh, et reste aujourd'hui entouré de légendes locales attribuant son édification à une géante mythique.",
      descriptionEn:
        "Gozo, the second-largest island in the Maltese archipelago, distinguishes itself from Malta through a deliberately more rural and slower pace of life, preserved by an economy geared toward agriculture and fishing rather than the mass tourism concentrated on the main island. The megalithic site of Ggantija, whose construction is believed to date to around 3600 BCE, ranks among the oldest freestanding structures ever erected by humanity, predating the Egyptian pyramids of Giza by over a thousand years, and remains today surrounded by local legends attributing its construction to a mythical giantess.",
      descriptionEs:
        "Gozo, segunda isla más grande del archipiélago maltés, se distingue de Malta por un ritmo de vida deliberadamente más rural y pausado, preservado por una economía orientada a la agricultura y la pesca en lugar del turismo de masas concentrado en la isla principal. El yacimiento megalítico de Ggantija, cuya construcción se remontaría a alrededor del año 3600 antes de nuestra era, se cuenta entre las estructuras autónomas más antiguas jamás erigidas por la humanidad, anterior en más de mil años a las pirámides egipcias de Giza, y sigue hoy rodeado de leyendas locales que atribuyen su edificación a una giganta mítica.",
      price: 1500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 3,
      durationUnit: "nights",
      duration: "3 nuits",
      durationEn: "3 nights",
      durationEs: "3 noches",
      whenLabel: "Avril à oct",
      whenLabelEn: "April to Oct",
      whenLabelEs: "Abril a oct",
      bestMonths: "april,may,june,july,august,september,october",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 213,
    },
    sections: [
      {
        heading: "Ggantija, plus ancienne qu'un site mégalithique connu",
        headingEn: "Ggantija, Older Than Any Known Megalithic Site",
        headingEs: "Ggantija, más antiguo que cualquier yacimiento megalítico conocido",
        body:
          "Le complexe mégalithique de Ggantija, dont la construction remonterait à environ 3600 avant notre ère, compte parmi les plus anciennes structures autonomes jamais érigées par l'humanité, antérieures de plus de mille ans aux pyramides égyptiennes de Gizeh et de plusieurs siècles à Stonehenge en Angleterre. Le nom Ggantija, qui signifie littéralement « tour de la géante » en maltais, provient d'une légende locale attribuant la construction du site à une femme géante nourrie de fèves et de miel, qui aurait porté seule les blocs de pierre monumentaux pesant jusqu'à cinquante tonnes.",
        bodyEn:
          "The megalithic complex of Ggantija, whose construction is believed to date to around 3600 BCE, ranks among the oldest freestanding structures ever erected by humanity, predating the Egyptian pyramids of Giza by over a thousand years and Stonehenge in England by several centuries. The name Ggantija, which literally means \"giantess's tower\" in Maltese, comes from a local legend attributing the site's construction to a giant woman fed on beans and honey, said to have single-handedly carried the monumental stone blocks weighing up to fifty tonnes.",
        bodyEs:
          "El complejo megalítico de Ggantija, cuya construcción se remontaría a alrededor del año 3600 antes de nuestra era, se cuenta entre las estructuras autónomas más antiguas jamás erigidas por la humanidad, anterior en más de mil años a las pirámides egipcias de Giza y en varios siglos a Stonehenge en Inglaterra. El nombre Ggantija, que significa literalmente «torre de la giganta» en maltés, proviene de una leyenda local que atribuye la construcción del yacimiento a una mujer gigante alimentada con habas y miel, que habría cargado ella sola los bloques de piedra monumentales de hasta cincuenta toneladas.",
      },
      {
        heading: "Un rythme de vie préservé",
        headingEn: "A Preserved Pace of Life",
        headingEs: "Un ritmo de vida preservado",
        body:
          "Gozo, dont l'économie reste largement tournée vers l'agriculture en terrasses et la pêche artisanale plutôt que vers le tourisme de masse concentré sur l'île principale de Malte, conserve un rythme de vie délibérément plus rural, symbolisé par les salines de Qbajjar, marais salants exploités selon des méthodes traditionnelles inchangées depuis des siècles le long de la côte nord de l'île. Le paysage côtier de Dwejra, dont l'ancienne fenêtre naturelle calcaire s'effondra en 2017 sous l'effet de l'érosion, conserve aujourd'hui un lagon intérieur spectaculaire relié à la mer par un tunnel souterrain, accessible en barque depuis la côte.",
        bodyEn:
          "Gozo, whose economy remains largely geared toward terraced agriculture and small-scale fishing rather than the mass tourism concentrated on Malta's main island, retains a deliberately more rural pace of life, symbolised by the Qbajjar salt pans, salt marshes worked using traditional methods unchanged for centuries along the island's northern coast. The coastal landscape of Dwejra, whose former natural limestone window collapsed in 2017 due to erosion, today retains a spectacular inland lagoon connected to the sea by an underground tunnel, accessible by boat from the coast.",
        bodyEs:
          "Gozo, cuya economía sigue orientada en gran medida a la agricultura en terrazas y la pesca artesanal en lugar del turismo de masas concentrado en la isla principal de Malta, conserva un ritmo de vida deliberadamente más rural, simbolizado por las salinas de Qbajjar, marismas explotadas según métodos tradicionales inalterados durante siglos a lo largo de la costa norte de la isla. El paisaje costero de Dwejra, cuya antigua ventana natural caliza se derrumbó en 2017 por efecto de la erosión, conserva hoy una espectacular laguna interior conectada al mar por un túnel subterráneo, accesible en barca desde la costa.",
      },
    ],
    hotels: [
      {
        name: "Maison en pierre calcaire à Victoria",
        nameEn: "A Limestone House in Victoria",
        nameEs: "Casa de piedra caliza en Victoria",
        description:
          "Une maison traditionnelle en pierre calcaire au cœur de Victoria, capitale de Gozo, à distance de marche de la Citadelle fortifiée.",
        descriptionEn:
          "A traditional limestone house at the heart of Victoria, Gozo's capital, within walking distance of the fortified Citadel.",
        descriptionEs:
          "Una casa tradicional de piedra caliza en el corazón de Victoria, capital de Gozo, a poca distancia a pie de la Ciudadela fortificada.",
        image: `${R2}/trips/malte-gozo-hotel-1.jpg`,
      },
      {
        name: "Villa au bord des falaises de Gozo",
        nameEn: "A Villa on the Cliffs of Gozo",
        nameEs: "Villa en los acantilados de Gozo",
        description:
          "Une villa en surplomb des falaises côtières de Gozo, piscine à débordement face à la Méditerranée, à courte distance du site de Dwejra.",
        descriptionEn:
          "A villa overlooking Gozo's coastal cliffs, an infinity pool facing the Mediterranean, a short distance from the Dwejra site.",
        descriptionEs:
          "Una villa con vistas a los acantilados costeros de Gozo, piscina infinita frente al Mediterráneo, a poca distancia del yacimiento de Dwejra.",
        image: `${R2}/trips/malte-gozo-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "montenegro",
    tour: {
      name: "Monténégro : la baie de Kotor",
      nameEn: "Montenegro: the Bay of Kotor",
      nameEs: "Montenegro: la bahía de Kotor",
      slug: "montenegro-baie-kotor",
      image: `${R2}/tours/montenegro-baie-kotor.jpg`,
      images: `${R2}/trips/montenegro-kotor-gallery-1.jpg,${R2}/trips/montenegro-kotor-gallery-2.jpg,${R2}/trips/montenegro-kotor-gallery-3.jpg,${R2}/trips/montenegro-kotor-gallery-4.jpg,${R2}/trips/montenegro-kotor-gallery-5.jpg,${R2}/trips/montenegro-kotor-gallery-6.jpg`,
      tagline: "Le fjord le plus méridional d'Europe, où une ville fortifiée médiévale grimpe le long d'une muraille de quatre kilomètres et demi jusqu'à la montagne",
      taglineEn: "Europe's southernmost fjord, where a medieval walled town climbs a four-and-a-half-kilometre wall up into the mountain",
      taglineEs: "El fiordo más meridional de Europa, donde una ciudad amurallada medieval trepa por una muralla de cuatro kilómetros y medio hasta la montaña",
      description:
        "La baie de Kotor, souvent qualifiée de fjord le plus méridional d'Europe bien que géologiquement il s'agisse d'un canyon fluvial submergé, s'enfonce sur près de trente kilomètres entre des montagnes abruptes qui plongent directement dans une eau d'un bleu profond. La vieille ville fortifiée de Kotor, classée au patrimoine mondial de l'UNESCO, est protégée par une muraille défensive de quatre kilomètres et demi qui grimpe à flanc de montagne jusqu'à la forteresse de Saint-Jean, perchée à deux cent soixante mètres d'altitude et accessible après l'ascension de plus de mille trois cents marches.",
      descriptionEn:
        "The Bay of Kotor, often described as Europe's southernmost fjord though geologically it is a submerged river canyon, stretches nearly thirty kilometres between steep mountains that plunge directly into deep blue water. Kotor's fortified old town, UNESCO World Heritage listed, is protected by a four-and-a-half-kilometre defensive wall that climbs the mountainside to St John's Fortress, perched at two hundred and sixty metres altitude and reached after climbing more than thirteen hundred steps.",
      descriptionEs:
        "La bahía de Kotor, a menudo descrita como el fiordo más meridional de Europa aunque geológicamente se trata de un cañón fluvial sumergido, se adentra casi treinta kilómetros entre montañas escarpadas que se sumergen directamente en un agua de azul profundo. El casco antiguo amurallado de Kotor, declarado Patrimonio de la Humanidad por la UNESCO, está protegido por una muralla defensiva de cuatro kilómetros y medio que trepa por la ladera de la montaña hasta la fortaleza de San Juan, encaramada a doscientos sesenta metros de altitud y accesible tras ascender más de mil trescientos escalones.",
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
      order: 215,
    },
    sections: [
      {
        heading: "Le fjord le plus méridional d'Europe",
        headingEn: "Europe's Southernmost Fjord",
        headingEs: "El fiordo más meridional de Europa",
        body:
          "La baie de Kotor, souvent présentée comme le fjord le plus méridional d'Europe bien que les géologues la classent techniquement comme un canyon fluvial submergé plutôt qu'un véritable fjord d'origine glaciaire, s'enfonce sur près de trente kilomètres entre des montagnes qui culminent à plus de mille sept cents mètres et plongent directement dans une eau d'un bleu profond. Cette configuration géographique spectaculaire, associée à quatre villes historiques fortifiées disposées le long de ses rives, valut à la baie son inscription au patrimoine mondial de l'UNESCO dès 1979.",
        bodyEn:
          "The Bay of Kotor, often presented as Europe's southernmost fjord though geologists technically classify it as a submerged river canyon rather than a true glacially formed fjord, stretches nearly thirty kilometres between mountains rising over seventeen hundred metres and plunging directly into deep blue water. This spectacular geographic configuration, combined with four historic fortified towns arranged along its shores, earned the bay its UNESCO World Heritage listing as early as 1979.",
        bodyEs:
          "La bahía de Kotor, a menudo presentada como el fiordo más meridional de Europa aunque los geólogos la clasifican técnicamente como un cañón fluvial sumergido y no como un verdadero fiordo de origen glaciar, se adentra casi treinta kilómetros entre montañas que superan los mil setecientos metros y se sumergen directamente en un agua de azul profundo. Esta espectacular configuración geográfica, combinada con cuatro ciudades históricas amuralladas dispuestas a lo largo de sus orillas, le valió a la bahía su inscripción en el Patrimonio de la Humanidad de la UNESCO ya en 1979.",
      },
      {
        heading: "Kotor et sa muraille de quatre kilomètres et demi",
        headingEn: "Kotor and Its Four-and-a-Half-Kilometre Wall",
        headingEs: "Kotor y su muralla de cuatro kilómetros y medio",
        body:
          "La vieille ville fortifiée de Kotor, dont les origines remontent à l'époque romaine bien que l'essentiel de son architecture actuelle date de la domination vénitienne entre le XIVe et le XVIIIe siècle, reste protégée par une muraille défensive de quatre kilomètres et demi qui serpente à flanc de montagne jusqu'à la forteresse de Saint-Jean, perchée à deux cent soixante mètres d'altitude. L'ascension des plus de mille trois cents marches qui mènent à la forteresse, bien qu'exigeante, est récompensée par un panorama exceptionnel sur l'ensemble de la baie et ses montagnes environnantes, particulièrement spectaculaire au coucher du soleil.",
        bodyEn:
          "Kotor's fortified old town, whose origins trace back to Roman times though most of its current architecture dates from Venetian rule between the 14th and 18th centuries, remains protected by a four-and-a-half-kilometre defensive wall that winds up the mountainside to St John's Fortress, perched at two hundred and sixty metres altitude. The climb up the more than thirteen hundred steps leading to the fortress, though demanding, is rewarded with an exceptional panorama over the entire bay and its surrounding mountains, particularly spectacular at sunset.",
        bodyEs:
          "El casco antiguo amurallado de Kotor, cuyos orígenes se remontan a la época romana aunque la mayor parte de su arquitectura actual data del dominio veneciano entre los siglos XIV y XVIII, sigue protegido por una muralla defensiva de cuatro kilómetros y medio que serpentea por la ladera de la montaña hasta la fortaleza de San Juan, encaramada a doscientos sesenta metros de altitud. La ascensión por los más de mil trescientos escalones que conducen a la fortaleza, aunque exigente, se ve recompensada con un panorama excepcional sobre toda la bahía y sus montañas circundantes, particularmente espectacular al atardecer.",
      },
    ],
    hotels: [
      {
        name: "Palais vénitien rénové dans la vieille ville",
        nameEn: "A Renovated Venetian Palace in the Old Town",
        nameEs: "Palacio veneciano renovado en el casco antiguo",
        description:
          "Un palais vénitien rénové dans la vieille ville fortifiée de Kotor, cour intérieure ombragée, à distance de marche des remparts et de la forteresse de Saint-Jean.",
        descriptionEn:
          "A renovated Venetian palace in Kotor's fortified old town, a shaded inner courtyard, within walking distance of the ramparts and St John's Fortress.",
        descriptionEs:
          "Un palacio veneciano renovado en el casco antiguo amurallado de Kotor, patio interior sombreado, a poca distancia a pie de las murallas y la fortaleza de San Juan.",
        image: `${R2}/trips/montenegro-kotor-hotel-1.jpg`,
      },
      {
        name: "Villa en surplomb de la baie de Kotor",
        nameEn: "A Villa Overlooking the Bay of Kotor",
        nameEs: "Villa con vistas a la bahía de Kotor",
        description:
          "Une villa en surplomb de la baie de Kotor, terrasse avec vue directe sur les montagnes environnantes et les eaux profondes du fjord.",
        descriptionEn:
          "A villa overlooking the Bay of Kotor, a terrace with a direct view of the surrounding mountains and the fjord's deep waters.",
        descriptionEs:
          "Una villa con vistas a la bahía de Kotor, terraza con vistas directas a las montañas circundantes y las aguas profundas del fiordo.",
        image: `${R2}/trips/montenegro-kotor-hotel-2.jpg`,
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
