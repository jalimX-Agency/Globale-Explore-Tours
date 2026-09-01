// Europe batch 5 — République tchèque, Allemagne, Slovénie. New trips bringing each destination
// to at least 3, styled on Black Tomato's real structure (a short number of named-hotel chapters,
// not an exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-europe-5.ts
// Requires scripts/upload-images-europe-5.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "republique-tcheque",
    tour: {
      name: "République tchèque : la Moravie viticole et la Suisse bohémienne",
      nameEn: "Czech Republic: Wine-Growing Moravia and Bohemian Switzerland",
      nameEs: "República Checa: la Moravia vitivinícola y la Suiza bohemia",
      slug: "tcheque-moravie-boheme",
      image: `${R2}/journeys/tcheque-moravie-boheme-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une région viticole aux collines douces où la bière n'est pas reine, puis un massif gréseux où un pont naturel de pierre défie la gravité",
      taglineEn: "A wine region of gentle hills where beer isn't king, then a sandstone massif where a natural stone bridge defies gravity",
      taglineEs: "Una región vitivinícola de colinas suaves donde la cerveza no es reina, y después un macizo de arenisca donde un puente natural de piedra desafía la gravedad",
      description:
        "Un voyage loin de Prague et de Český Krumlov : la Moravie du Sud, seule grande région viticole de République tchèque, où les coteaux vallonnés autour de Mikulov produisent depuis des siècles des vins blancs qui contrastent avec la réputation brassicole du pays, puis la Suisse bohémienne, massif de grès sculpté par l'érosion qui abrite Pravčická brána, la plus grande arche de pierre naturelle d'Europe continentale avec une envergure de plus de vingt-six mètres.",
      descriptionEn:
        "A journey far from Prague and Český Krumlov: South Moravia, the Czech Republic's only major wine region, where the rolling hills around Mikulov have produced white wines for centuries, contrasting with the country's brewing reputation, then Bohemian Switzerland, a sandstone massif sculpted by erosion that is home to Pravčická brána, continental Europe's largest natural stone arch with a span of over twenty-six metres.",
      descriptionEs:
        "Un viaje lejos de Praga y Český Krumlov: Moravia del Sur, la única gran región vitivinícola de la República Checa, donde las colinas onduladas alrededor de Mikulov producen desde hace siglos vinos blancos que contrastan con la reputación cervecera del país, y después la Suiza bohemia, macizo de arenisca esculpido por la erosión que alberga Pravčická brána, el arco de piedra natural más grande de la Europa continental con una envergadura de más de veintiséis metros.",
      price: 1900,
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
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 200,
    },
    chapters: [
      {
        title: "La Moravie, terre de vin",
        titleEn: "Moravia, Wine Country",
        titleEs: "Moravia, tierra de vino",
        intro:
          "Premier chapitre en Moravie du Sud, unique grande région viticole de République tchèque, où les coteaux vallonnés autour de Mikulov et Valtice produisent depuis l'époque médiévale des vins blancs aromatiques qui contrastent avec la réputation brassicole du pays. Cette région, ponctuée de villages aux façades colorées et de caves familiales creusées à même le calcaire, reste largement méconnue des voyageurs internationaux malgré une tradition viticole continue de plus de mille ans, entretenue aujourd'hui par des centaines de petits producteurs indépendants.",
        introEn:
          "The first chapter unfolds in South Moravia, the Czech Republic's only major wine region, where rolling hills around Mikulov and Valtice have produced aromatic white wines since medieval times, contrasting with the country's brewing reputation. This region, dotted with villages of colourful facades and family cellars carved directly into the limestone, remains largely unknown to international travellers despite a continuous winemaking tradition of over a thousand years, kept alive today by hundreds of small independent producers.",
        introEs:
          "El primer capítulo se desarrolla en Moravia del Sur, la única gran región vitivinícola de la República Checa, donde las colinas onduladas alrededor de Mikulov y Valtice producen desde la época medieval vinos blancos aromáticos que contrastan con la reputación cervecera del país. Esta región, salpicada de pueblos de fachadas coloridas y bodegas familiares excavadas directamente en la caliza, sigue siendo en gran medida desconocida para los viajeros internacionales pese a una tradición vitivinícola continua de más de mil años, mantenida hoy por cientos de pequeños productores independientes.",
        galleryImages: `${R2}/journeys/tcheque-moravie-gallery1.jpg,${R2}/journeys/tcheque-moravie-gallery2.jpg,${R2}/journeys/tcheque-moravie-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Dégustation dans les caves de Valtice",
            titleEn: "A tasting in the cellars of Valtice",
            titleEs: "Degustación en las bodegas de Valtice",
            description:
              "Dégustation de vins blancs moraves dans les caves familiales de Valtice, village viticole dont le château baroque figure au patrimoine mondial de l'UNESCO aux côtés de celui de Lednice.",
            descriptionEn:
              "A tasting of Moravian white wines in the family cellars of Valtice, a wine village whose baroque château is UNESCO World Heritage listed alongside that of Lednice.",
            descriptionEs:
              "Degustación de vinos blancos moravos en las bodegas familiares de Valtice, pueblo vitivinícola cuyo castillo barroco figura en el Patrimonio de la Humanidad de la UNESCO junto al de Lednice.",
            image: `${R2}/journeys/tcheque-moravie-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Vélo à travers les collines de Mikulov",
            titleEn: "Cycling through the hills of Mikulov",
            titleEs: "Bicicleta por las colinas de Mikulov",
            description:
              "Balade à vélo à travers les collines viticoles de Mikulov, ponctuées de chapelles baroques et de petites caves familiales ouvertes à la dégustation.",
            descriptionEn:
              "A bike ride through the wine-growing hills of Mikulov, dotted with baroque chapels and small family cellars open for tastings.",
            descriptionEs:
              "Paseo en bicicleta por las colinas vitícolas de Mikulov, salpicadas de capillas barrocas y pequeñas bodegas familiares abiertas para degustación.",
            image: `${R2}/journeys/tcheque-moravie-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La Suisse bohémienne et l'arche de pierre",
        titleEn: "Bohemian Switzerland and the Stone Arch",
        titleEs: "La Suiza bohemia y el arco de piedra",
        intro:
          "Route vers la Suisse bohémienne, massif de grès sculpté sur des millions d'années par l'érosion en un paysage de canyons étroits, de tours rocheuses et de forêts denses, classé parc national depuis 2000. Le site abrite Pravčická brána, la plus grande arche de pierre naturelle d'Europe continentale avec une envergure de plus de vingt-six mètres et une hauteur de seize mètres, formation si photogénique qu'elle inspira en partie le décor du film Le Monde de Narnia : Le Prince Caspian, tourné dans la région en 2007.",
        introEn:
          "The road to Bohemian Switzerland, a sandstone massif sculpted over millions of years by erosion into a landscape of narrow canyons, rock towers, and dense forests, designated a national park since 2000. The site is home to Pravčická brána, continental Europe's largest natural stone arch with a span of over twenty-six metres and a height of sixteen metres, a formation so photogenic it partly inspired the setting of The Chronicles of Narnia: Prince Caspian, filmed in the region in 2007.",
        introEs:
          "Ruta hacia la Suiza bohemia, macizo de arenisca esculpido a lo largo de millones de años por la erosión en un paisaje de cañones estrechos, torres rocosas y bosques densos, declarado parque nacional desde 2000. El lugar alberga Pravčická brána, el arco de piedra natural más grande de la Europa continental con una envergadura de más de veintiséis metros y una altura de dieciséis metros, formación tan fotogénica que inspiró en parte el decorado de la película Las crónicas de Narnia: el príncipe Caspian, rodada en la región en 2007.",
        galleryImages: `${R2}/journeys/tcheque-boheme-gallery1.jpg,${R2}/journeys/tcheque-boheme-gallery2.jpg,${R2}/journeys/tcheque-boheme-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée jusqu'à Pravčická brána",
            titleEn: "A hike to Pravčická brána",
            titleEs: "Caminata hasta Pravčická brána",
            description:
              "Randonnée à travers les canyons gréseux de la Suisse bohémienne jusqu'à Pravčická brána, la plus grande arche de pierre naturelle d'Europe continentale.",
            descriptionEn:
              "A hike through the sandstone canyons of Bohemian Switzerland to Pravčická brána, continental Europe's largest natural stone arch.",
            descriptionEs:
              "Caminata por los cañones de arenisca de la Suiza bohemia hasta Pravčická brána, el arco de piedra natural más grande de la Europa continental.",
            image: `${R2}/journeys/tcheque-boheme-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Descente en radeau sur les gorges de la Kamenice",
            titleEn: "A raft descent through the Kamenice gorges",
            titleEs: "Descenso en balsa por las gargantas del Kamenice",
            description:
              "Descente en radeau de bois traditionnel sur les gorges étroites de la rivière Kamenice, encaissées entre des parois de grès couvertes de mousse.",
            descriptionEn:
              "A traditional wooden raft descent through the narrow gorges of the Kamenice River, hemmed in by moss-covered sandstone walls.",
            descriptionEs:
              "Descenso en balsa de madera tradicional por las estrechas gargantas del río Kamenice, encajonadas entre paredes de arenisca cubiertas de musgo.",
            image: `${R2}/journeys/tcheque-boheme-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "allemagne",
    tour: {
      name: "Allemagne : la vallée du Rhin et la Suisse saxonne",
      nameEn: "Germany: the Rhine Valley and Saxon Switzerland",
      nameEs: "Alemania: el valle del Rin y la Suiza sajona",
      slug: "allemagne-rhin-saxonne",
      image: `${R2}/journeys/allemagne-rhin-saxonne-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une vallée fluviale bordée de plus de quarante châteaux médiévaux, puis un massif gréseux qui inspira les peintures romantiques de Caspar David Friedrich",
      taglineEn: "A river valley lined with over forty medieval castles, then a sandstone massif that inspired Caspar David Friedrich's Romantic paintings",
      taglineEs: "Un valle fluvial bordeado por más de cuarenta castillos medievales, y después un macizo de arenisca que inspiró las pinturas románticas de Caspar David Friedrich",
      description:
        "Un voyage loin de Berlin et de Munich : la vallée du Rhin moyen entre Coblence et Bingen, classée à l'UNESCO, où plus de quarante châteaux et forteresses médiévaux se succèdent sur soixante-cinq kilomètres au-dessus de vignobles en terrasses, puis la Suisse saxonne, massif de grès aux formations rocheuses spectaculaires qui inspira au XIXe siècle les peintures romantiques de Caspar David Friedrich, dont le célèbre Voyageur contemplant une mer de nuages fut peint depuis l'un de ses sommets.",
      descriptionEn:
        "A journey far from Berlin and Munich: the Middle Rhine Valley between Koblenz and Bingen, UNESCO listed, where more than forty medieval castles and fortresses follow one another over sixty-five kilometres above terraced vineyards, then Saxon Switzerland, a sandstone massif of spectacular rock formations that inspired Caspar David Friedrich's 19th-century Romantic paintings, whose famous Wanderer above the Sea of Fog was painted from one of its summits.",
      descriptionEs:
        "Un viaje lejos de Berlín y Múnich: el valle del Rin Medio entre Coblenza y Bingen, declarado por la UNESCO, donde más de cuarenta castillos y fortalezas medievales se suceden a lo largo de sesenta y cinco kilómetros sobre viñedos en terrazas, y después la Suiza sajona, macizo de arenisca de formaciones rocosas espectaculares que inspiró en el siglo XIX las pinturas románticas de Caspar David Friedrich, cuyo célebre Caminante sobre el mar de nubes fue pintado desde una de sus cumbres.",
      price: 2200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
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
      order: 202,
    },
    chapters: [
      {
        title: "La vallée du Rhin et ses châteaux",
        titleEn: "The Rhine Valley and Its Castles",
        titleEs: "El valle del Rin y sus castillos",
        intro:
          "Premier chapitre dans la vallée du Rhin moyen, classée au patrimoine mondial de l'UNESCO, où plus de quarante châteaux et forteresses médiévaux se succèdent sur soixante-cinq kilomètres entre Coblence et Bingen, construits pour la plupart entre le XIe et le XIVe siècle par des seigneurs locaux qui prélevaient un péage sur le trafic fluvial. Le rocher de la Lorelei, à cent trente-deux mètres au-dessus du fleuve, marque le point le plus étroit et le plus dangereux du Rhin, un passage que la légende attribue au chant envoûtant d'une sirène qui aurait attiré les bateliers vers les récifs.",
        introEn:
          "The first chapter unfolds in the Middle Rhine Valley, UNESCO World Heritage listed, where more than forty medieval castles and fortresses follow one another over sixty-five kilometres between Koblenz and Bingen, most built between the 11th and 14th centuries by local lords who levied a toll on river traffic. The Lorelei rock, a hundred and thirty-two metres above the river, marks the Rhine's narrowest and most dangerous point, a passage legend attributes to a siren's beguiling song said to have lured boatmen onto the reefs.",
        introEs:
          "El primer capítulo se desarrolla en el valle del Rin Medio, declarado Patrimonio de la Humanidad por la UNESCO, donde más de cuarenta castillos y fortalezas medievales se suceden a lo largo de sesenta y cinco kilómetros entre Coblenza y Bingen, construidos en su mayoría entre los siglos XI y XIV por señores locales que cobraban un peaje sobre el tráfico fluvial. La roca de Lorelei, a ciento treinta y dos metros sobre el río, marca el punto más estrecho y peligroso del Rin, un paso que la leyenda atribuye al canto hechizante de una sirena que habría atraído a los barqueros hacia los arrecifes.",
        galleryImages: `${R2}/journeys/allemagne-rhin-gallery1.jpg,${R2}/journeys/allemagne-rhin-gallery2.jpg,${R2}/journeys/allemagne-rhin-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 50,
        days: [
          {
            dayNumber: 1,
            title: "Croisière sur le Rhin jusqu'au rocher de la Lorelei",
            titleEn: "A Rhine cruise to the Lorelei rock",
            titleEs: "Crucero por el Rin hasta la roca de Lorelei",
            description:
              "Croisière fluviale à travers la vallée du Rhin, entre châteaux médiévaux et vignobles en terrasses, jusqu'au rocher de la Lorelei et son passage légendaire.",
            descriptionEn:
              "A river cruise through the Rhine Valley, between medieval castles and terraced vineyards, to the Lorelei rock and its legendary passage.",
            descriptionEs:
              "Crucero fluvial por el valle del Rin, entre castillos medievales y viñedos en terrazas, hasta la roca de Lorelei y su legendario paso.",
            image: `${R2}/journeys/allemagne-rhin-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Visite du château de Marksburg",
            titleEn: "A visit to Marksburg Castle",
            titleEs: "Visita al castillo de Marksburg",
            description:
              "Visite du château de Marksburg, seule forteresse de la vallée jamais détruite ni conquise, dont l'architecture médiévale d'origine reste intacte depuis le XIIIe siècle.",
            descriptionEn:
              "A visit to Marksburg Castle, the only fortress in the valley never destroyed or conquered, whose original medieval architecture remains intact since the 13th century.",
            descriptionEs:
              "Visita al castillo de Marksburg, única fortaleza del valle nunca destruida ni conquistada, cuya arquitectura medieval original permanece intacta desde el siglo XIII.",
            image: `${R2}/journeys/allemagne-rhin-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La Suisse saxonne, terre des peintres romantiques",
        titleEn: "Saxon Switzerland, Land of the Romantic Painters",
        titleEs: "La Suiza sajona, tierra de los pintores románticos",
        intro:
          "Route vers la Suisse saxonne, massif de grès sculpté par l'Elbe et ses affluents en un paysage de tables rocheuses isolées, de gorges profondes et de forêts qui inspira au XIXe siècle toute une génération de peintres romantiques allemands. Caspar David Friedrich, figure majeure du mouvement, peignit depuis les sommets de la région son célèbre Voyageur contemplant une mer de nuages, tandis que le pont de Bastei, passerelle de pierre construite en 1851 à quelque cent quatre-vingt-quatorze mètres au-dessus de l'Elbe, relie entre elles plusieurs aiguilles rocheuses spectaculaires.",
        introEn:
          "The road to Saxon Switzerland, a sandstone massif sculpted by the Elbe and its tributaries into a landscape of isolated rock tables, deep gorges, and forests that inspired an entire generation of 19th-century German Romantic painters. Caspar David Friedrich, a major figure of the movement, painted his famous Wanderer above the Sea of Fog from the region's summits, while the Bastei Bridge, a stone footbridge built in 1851 some hundred and ninety-four metres above the Elbe, links together several spectacular rock spires.",
        introEs:
          "Ruta hacia la Suiza sajona, macizo de arenisca esculpido por el Elba y sus afluentes en un paisaje de mesetas rocosas aisladas, gargantas profundas y bosques que inspiró en el siglo XIX a toda una generación de pintores románticos alemanes. Caspar David Friedrich, figura destacada del movimiento, pintó desde las cumbres de la región su célebre Caminante sobre el mar de nubes, mientras que el puente de Bastei, pasarela de piedra construida en 1851 a unos ciento noventa y cuatro metros sobre el Elba, conecta entre sí varias espectaculares agujas rocosas.",
        galleryImages: `${R2}/journeys/allemagne-saxonne-gallery1.jpg,${R2}/journeys/allemagne-saxonne-gallery2.jpg,${R2}/journeys/allemagne-saxonne-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Traversée du pont de Bastei",
            titleEn: "Crossing the Bastei Bridge",
            titleEs: "Travesía del puente de Bastei",
            description:
              "Traversée du pont de Bastei, passerelle de pierre reliant plusieurs aiguilles rocheuses spectaculaires à près de deux cents mètres au-dessus de l'Elbe.",
            descriptionEn:
              "A crossing of the Bastei Bridge, a stone footbridge linking several spectacular rock spires nearly two hundred metres above the Elbe.",
            descriptionEs:
              "Travesía del puente de Bastei, pasarela de piedra que conecta varias espectaculares agujas rocosas a casi doscientos metros sobre el Elba.",
            image: `${R2}/journeys/allemagne-saxonne-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée sur les traces des peintres romantiques",
            titleEn: "A hike in the footsteps of the Romantic painters",
            titleEs: "Caminata siguiendo los pasos de los pintores románticos",
            description:
              "Randonnée à travers les tables rocheuses de la Suisse saxonne, sur les points de vue mêmes qui inspirèrent Caspar David Friedrich et les peintres romantiques allemands.",
            descriptionEn:
              "A hike across the rock tables of Saxon Switzerland, at the very viewpoints that inspired Caspar David Friedrich and the German Romantic painters.",
            descriptionEs:
              "Caminata por las mesetas rocosas de la Suiza sajona, en los mismos miradores que inspiraron a Caspar David Friedrich y a los pintores románticos alemanes.",
            image: `${R2}/journeys/allemagne-saxonne-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "slovenie",
    tour: {
      name: "Slovénie : les Alpes juliennes et la vallée de la Soča",
      nameEn: "Slovenia: the Julian Alps and the Soča Valley",
      nameEs: "Eslovenia: los Alpes julianos y el valle del Soča",
      slug: "slovenie-triglav-soca",
      image: `${R2}/journeys/slovenie-triglav-soca-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un massif alpin dominé par le seul sommet figurant sur un drapeau national, puis une rivière d'une transparence si pure qu'elle semble teintée à l'émeraude",
      taglineEn: "An alpine massif dominated by the only peak featured on a national flag, then a river so purely transparent it seems tinted emerald",
      taglineEs: "Un macizo alpino dominado por la única cumbre que figura en una bandera nacional, y después un río de una transparencia tan pura que parece teñido de esmeralda",
      description:
        "Un voyage loin du lac de Bled et de Ljubljana : le parc national du Triglav, seul parc national de Slovénie, dominé par le mont Triglav, plus haut sommet du pays dont la silhouette figure sur le drapeau national, un honneur que ne partage aucune autre montagne au monde, puis la vallée de la Soča, dont les eaux d'une transparence exceptionnelle prennent une teinte émeraude si intense qu'elle semble artificielle, résultat de la composition minérale unique du lit rocheux de la rivière.",
      descriptionEn:
        "A journey far from Lake Bled and Ljubljana: Triglav National Park, Slovenia's only national park, dominated by Mount Triglav, the country's highest peak whose silhouette appears on the national flag, an honour shared by no other mountain in the world, then the Soča Valley, whose exceptionally clear waters take on an emerald hue so intense it seems artificial, the result of the river's uniquely mineral-rich rocky bed.",
      descriptionEs:
        "Un viaje lejos del lago Bled y Liubliana: el parque nacional de Triglav, único parque nacional de Eslovenia, dominado por el monte Triglav, la cumbre más alta del país, cuya silueta figura en la bandera nacional, un honor que ninguna otra montaña del mundo comparte, y después el valle del Soča, cuyas aguas de una transparencia excepcional adquieren un tono esmeralda tan intenso que parece artificial, resultado de la composición mineral única del lecho rocoso del río.",
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
      order: 204,
    },
    chapters: [
      {
        title: "Le parc national du Triglav",
        titleEn: "Triglav National Park",
        titleEs: "El parque nacional de Triglav",
        intro:
          "Premier chapitre dans le parc national du Triglav, seul parc national de Slovénie et l'un des plus anciens d'Europe, dominé par le mont Triglav, dont la silhouette à trois sommets figure sur le drapeau national et les armoiries du pays, un honneur qu'aucune autre montagne au monde ne partage avec sa nation. Culminant à deux mille huit cent soixante-quatre mètres, ce sommet reste selon la tradition populaire slovène un rite de passage informel, gravir le Triglav au moins une fois dans sa vie étant considéré par beaucoup comme une expérience fondatrice de l'identité nationale.",
        introEn:
          "The first chapter unfolds in Triglav National Park, Slovenia's only national park and one of the oldest in Europe, dominated by Mount Triglav, whose three-peaked silhouette appears on the national flag and coat of arms, an honour no other mountain in the world shares with its nation. Rising to two thousand eight hundred and sixty-four metres, this summit remains, by Slovenian popular tradition, an informal rite of passage — climbing Triglav at least once in one's life is considered by many a formative experience of national identity.",
        introEs:
          "El primer capítulo se desarrolla en el parque nacional de Triglav, único parque nacional de Eslovenia y uno de los más antiguos de Europa, dominado por el monte Triglav, cuya silueta de tres cumbres figura en la bandera nacional y el escudo del país, un honor que ninguna otra montaña del mundo comparte con su nación. Con una altitud de dos mil ochocientos sesenta y cuatro metros, esta cumbre sigue siendo, según la tradición popular eslovena, un rito de paso informal: ascender el Triglav al menos una vez en la vida es considerado por muchos una experiencia formativa de la identidad nacional.",
        galleryImages: `${R2}/journeys/slovenie-triglav-gallery1.jpg,${R2}/journeys/slovenie-triglav-gallery2.jpg,${R2}/journeys/slovenie-triglav-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée dans la vallée de Vrata",
            titleEn: "A hike through the Vrata Valley",
            titleEs: "Caminata por el valle de Vrata",
            description:
              "Randonnée dans la vallée glaciaire de Vrata, point de départ classique de l'ascension du mont Triglav, entre parois rocheuses abruptes et forêts alpines.",
            descriptionEn:
              "A hike through the glacial Vrata Valley, the classic starting point for the ascent of Mount Triglav, between steep rock walls and alpine forests.",
            descriptionEs:
              "Caminata por el valle glaciar de Vrata, punto de partida clásico para la ascensión al monte Triglav, entre paredes rocosas escarpadas y bosques alpinos.",
            image: `${R2}/journeys/slovenie-triglav-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le lac de Bohinj et ses cascades",
            titleEn: "Lake Bohinj and its waterfalls",
            titleEs: "El lago Bohinj y sus cascadas",
            description:
              "Exploration du lac de Bohinj, le plus grand lac naturel de Slovénie, et randonnée jusqu'à la cascade de Savica qui alimente en partie la rivière Sava.",
            descriptionEn:
              "An exploration of Lake Bohinj, Slovenia's largest natural lake, and a hike to Savica Falls, which partly feeds the Sava River.",
            descriptionEs:
              "Exploración del lago Bohinj, el mayor lago natural de Eslovenia, y caminata hasta la cascada de Savica, que alimenta en parte el río Sava.",
            image: `${R2}/journeys/slovenie-triglav-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La vallée émeraude de la Soča",
        titleEn: "The Emerald Soča Valley",
        titleEs: "El valle esmeralda del Soča",
        intro:
          "Route vers la vallée de la Soča, dont les eaux d'une transparence exceptionnelle prennent une teinte émeraude si intense qu'elle semble artificielle, un phénomène dû à la composition minérale particulière du lit calcaire de la rivière et à la pureté de ses sources glaciaires. Théâtre de combats parmi les plus meurtriers de la Première Guerre mondiale lors des douze batailles de l'Isonzo, la vallée conserve aujourd'hui les traces de ce passé tragique tout en s'étant imposée comme l'un des hauts lieux européens du rafting et du kayak en eaux vives.",
        introEn:
          "The road to the Soča Valley, whose exceptionally clear waters take on an emerald hue so intense it seems artificial, a phenomenon caused by the particular mineral composition of the river's limestone bed and the purity of its glacial sources. The site of some of the deadliest fighting of the First World War during the twelve Battles of the Isonzo, the valley today retains traces of this tragic past while having established itself as one of Europe's premier destinations for whitewater rafting and kayaking.",
        introEs:
          "Ruta hacia el valle del Soča, cuyas aguas de una transparencia excepcional adquieren un tono esmeralda tan intenso que parece artificial, fenómeno debido a la composición mineral particular del lecho calizo del río y a la pureza de sus fuentes glaciares. Escenario de algunos de los combates más mortíferos de la Primera Guerra Mundial durante las doce batallas del Isonzo, el valle conserva hoy las huellas de este pasado trágico a la vez que se ha consolidado como uno de los grandes destinos europeos del rafting y el kayak en aguas bravas.",
        galleryImages: `${R2}/journeys/slovenie-soca-gallery1.jpg,${R2}/journeys/slovenie-soca-gallery2.jpg,${R2}/journeys/slovenie-soca-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Rafting sur les eaux émeraude de la Soča",
            titleEn: "Rafting on the emerald waters of the Soča",
            titleEs: "Rafting en las aguas esmeralda del Soča",
            description:
              "Descente en rafting sur les eaux émeraude de la Soča, l'une des rivières les plus limpides d'Europe, à travers des gorges calcaires étroites.",
            descriptionEn:
              "A rafting descent on the emerald waters of the Soča, one of Europe's clearest rivers, through narrow limestone gorges.",
            descriptionEs:
              "Descenso en rafting por las aguas esmeralda del Soča, uno de los ríos más cristalinos de Europa, a través de estrechas gargantas calizas.",
            image: `${R2}/journeys/slovenie-soca-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sur les traces des batailles de l'Isonzo",
            titleEn: "In the footsteps of the Isonzo battles",
            titleEs: "Siguiendo las huellas de las batallas del Isonzo",
            description:
              "Visite des vestiges des batailles de l'Isonzo, l'un des affrontements les plus meurtriers de la Première Guerre mondiale, dont les tranchées et musées jalonnent encore la vallée.",
            descriptionEn:
              "A visit to the remains of the Isonzo battles, one of the deadliest confrontations of the First World War, whose trenches and museums still dot the valley.",
            descriptionEs:
              "Visita a los vestigios de las batallas del Isonzo, uno de los enfrentamientos más mortíferos de la Primera Guerra Mundial, cuyas trincheras y museos aún jalonan el valle.",
            image: `${R2}/journeys/slovenie-soca-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "republique-tcheque",
    tour: {
      name: "République tchèque : Český Krumlov et la Bohême du Sud",
      nameEn: "Czech Republic: Český Krumlov and South Bohemia",
      nameEs: "República Checa: Český Krumlov y la Bohemia del Sur",
      slug: "tcheque-cesky-krumlov-boheme-sud",
      image: `${R2}/tours/tcheque-cesky-krumlov-boheme-sud.jpg`,
      images: `${R2}/trips/tcheque-cesky-krumlov-gallery-1.jpg,${R2}/trips/tcheque-cesky-krumlov-gallery-2.jpg,${R2}/trips/tcheque-cesky-krumlov-gallery-3.jpg,${R2}/trips/tcheque-cesky-krumlov-gallery-4.jpg,${R2}/trips/tcheque-cesky-krumlov-gallery-5.jpg,${R2}/trips/tcheque-cesky-krumlov-gallery-6.jpg`,
      tagline: "Une ville médiévale enroulée cinq fois sur elle-même par un méandre de la Vltava, deuxième plus grand château de République tchèque",
      taglineEn: "A medieval town wrapped five times around itself by a bend in the Vltava, home to the Czech Republic's second-largest castle",
      taglineEs: "Una ciudad medieval enrollada cinco veces sobre sí misma por un meandro del Vltava, con el segundo castillo más grande de la República Checa",
      description:
        "Český Krumlov, ville médiévale de Bohême du Sud, doit sa forme si particulière à un méandre en fer à cheval de la rivière Vltava qui enroule le centre historique sur lui-même à cinq reprises, créant un labyrinthe de ruelles pavées quasiment inchangé depuis le XIVe siècle. Le château de la ville, deuxième plus grand complexe castral de République tchèque après celui de Prague, domine la cité depuis un éperon rocheux et abrite une tour peinte en trompe-l'œil dont la fausse pierre de taille trompe l'œil des visiteurs depuis le XVIe siècle.",
      descriptionEn:
        "Český Krumlov, a medieval town in South Bohemia, owes its distinctive shape to a horseshoe bend in the Vltava River that wraps the historic centre around itself five times, creating a maze of cobbled lanes virtually unchanged since the 14th century. The town's castle, the Czech Republic's second-largest castle complex after Prague's, overlooks the city from a rocky spur and is home to a trompe-l'œil painted tower whose fake ashlar stonework has been fooling visitors' eyes since the 16th century.",
      descriptionEs:
        "Český Krumlov, ciudad medieval de Bohemia del Sur, debe su forma tan particular a un meandro en herradura del río Vltava que envuelve el centro histórico sobre sí mismo cinco veces, creando un laberinto de callejuelas empedradas prácticamente inalterado desde el siglo XIV. El castillo de la ciudad, segundo complejo castrense más grande de la República Checa tras el de Praga, domina la urbe desde un espolón rocoso y alberga una torre pintada en trampantojo cuya falsa sillería engaña la vista de los visitantes desde el siglo XVI.",
      price: 1700,
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
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 199,
    },
    sections: [
      {
        heading: "Une ville enroulée cinq fois sur elle-même",
        headingEn: "A Town Wrapped Five Times Around Itself",
        headingEs: "Una ciudad enrollada cinco veces sobre sí misma",
        body:
          "Le centre historique de Český Krumlov, classé au patrimoine mondial de l'UNESCO depuis 1992, doit sa configuration singulière à un méandre en fer à cheval de la Vltava qui enserre la vieille ville sur elle-même à cinq reprises, un phénomène géologique si prononcé que la rivière semble par endroits couler dans plusieurs directions simultanément. Cette topographie exceptionnelle a préservé la ville d'une urbanisation moderne excessive, laissant intact un dédale de ruelles pavées, de façades Renaissance et de cours intérieures gothiques quasiment inchangé depuis le XIVe siècle.",
        bodyEn:
          "Český Krumlov's historic centre, UNESCO World Heritage listed since 1992, owes its singular layout to a horseshoe bend in the Vltava that wraps around the old town five times, a geological phenomenon so pronounced that the river seems in places to flow in several directions at once. This exceptional topography spared the town from excessive modern urbanisation, leaving a maze of cobbled lanes, Renaissance facades, and Gothic courtyards virtually unchanged since the 14th century.",
        bodyEs:
          "El centro histórico de Český Krumlov, declarado Patrimonio de la Humanidad por la UNESCO desde 1992, debe su singular configuración a un meandro en herradura del Vltava que rodea el casco antiguo cinco veces, un fenómeno geológico tan pronunciado que el río parece en algunos tramos fluir en varias direcciones a la vez. Esta topografía excepcional preservó a la ciudad de una urbanización moderna excesiva, dejando intacto un laberinto de callejuelas empedradas, fachadas renacentistas y patios góticos prácticamente inalterado desde el siglo XIV.",
      },
      {
        heading: "Le château et sa tour en trompe-l'œil",
        headingEn: "The Castle and Its Trompe-l'œil Tower",
        headingEs: "El castillo y su torre en trampantojo",
        body:
          "Le château de Český Krumlov, deuxième plus grand complexe castral de République tchèque après celui de Prague, s'étend sur quarante bâtiments et cours répartis sur un éperon rocheux dominant la Vltava, avec une histoire architecturale continue s'étendant du XIIIe au XIXe siècle. Sa tour circulaire, entièrement recouverte au XVIe siècle d'une fresque en trompe-l'œil imitant une fausse pierre de taille sgraffito, trompe l'œil des visiteurs depuis plus de quatre siècles et offre depuis son sommet un panorama complet sur les toits rouges enroulés de la vieille ville.",
        bodyEn:
          "Český Krumlov Castle, the Czech Republic's second-largest castle complex after Prague's, spans forty buildings and courtyards spread across a rocky spur overlooking the Vltava, with a continuous architectural history running from the 13th to the 19th century. Its circular tower, entirely covered in the 16th century with a trompe-l'œil sgraffito fresco imitating fake ashlar stonework, has been fooling visitors' eyes for over four centuries and offers from its summit a complete panorama over the old town's wrapped red rooftops.",
        bodyEs:
          "El castillo de Český Krumlov, segundo complejo castrense más grande de la República Checa tras el de Praga, se extiende por cuarenta edificios y patios repartidos en un espolón rocoso que domina el Vltava, con una historia arquitectónica continua que abarca del siglo XIII al XIX. Su torre circular, cubierta enteramente en el siglo XVI con un fresco en trampantojo de sgraffito que imita una falsa sillería, engaña la vista de los visitantes desde hace más de cuatro siglos y ofrece desde su cima un panorama completo sobre los tejados rojos enrollados del casco antiguo.",
      },
    ],
    hotels: [
      {
        name: "Maison Renaissance rénovée dans la vieille ville",
        nameEn: "A Renovated Renaissance House in the Old Town",
        nameEs: "Casa renacentista renovada en el casco antiguo",
        description:
          "Une maison Renaissance rénovée dans le dédale de la vieille ville, plafonds voûtés d'origine, à distance de marche du château et de la place principale.",
        descriptionEn:
          "A renovated Renaissance house in the maze of the old town, original vaulted ceilings, within walking distance of the castle and main square.",
        descriptionEs:
          "Una casa renacentista renovada en el laberinto del casco antiguo, techos abovedados originales, a poca distancia a pie del castillo y la plaza principal.",
        image: `${R2}/trips/tcheque-cesky-krumlov-hotel-1.jpg`,
      },
      {
        name: "Auberge au bord de la Vltava",
        nameEn: "An Inn on the Banks of the Vltava",
        nameEs: "Posada a orillas del Vltava",
        description:
          "Une auberge traditionnelle au bord de la Vltava, terrasse donnant directement sur la rivière et vue sur le méandre qui enroule la ville.",
        descriptionEn:
          "A traditional inn on the banks of the Vltava, a terrace facing directly onto the river with a view of the bend that wraps around the town.",
        descriptionEs:
          "Una posada tradicional a orillas del Vltava, terraza con vistas directas al río y al meandro que envuelve la ciudad.",
        image: `${R2}/trips/tcheque-cesky-krumlov-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "allemagne",
    tour: {
      name: "Allemagne : les Alpes bavaroises et Berchtesgaden",
      nameEn: "Germany: the Bavarian Alps and Berchtesgaden",
      nameEs: "Alemania: los Alpes bávaros y Berchtesgaden",
      slug: "allemagne-alpes-bavaroises-berchtesgaden",
      image: `${R2}/tours/allemagne-alpes-bavaroises-berchtesgaden.jpg`,
      images: `${R2}/trips/allemagne-berchtesgaden-gallery-1.jpg,${R2}/trips/allemagne-berchtesgaden-gallery-2.jpg,${R2}/trips/allemagne-berchtesgaden-gallery-3.jpg,${R2}/trips/allemagne-berchtesgaden-gallery-4.jpg,${R2}/trips/allemagne-berchtesgaden-gallery-5.jpg,${R2}/trips/allemagne-berchtesgaden-gallery-6.jpg`,
      tagline: "Un lac alpin d'une pureté telle que la baignade y est réglementée, encerclé de parois calcaires qui renvoient un écho à la trompette",
      taglineEn: "An alpine lake so pure that swimming in it is regulated, ringed by limestone walls that echo a trumpet call",
      taglineEs: "Un lago alpino de una pureza tal que el baño está regulado, rodeado de paredes calizas que devuelven el eco de una trompeta",
      description:
        "Le Königssee, lac alpin niché dans le parc national de Berchtesgaden à la frontière autrichienne, compte parmi les plans d'eau les plus purs d'Allemagne, une qualité qui interdit toute navigation à moteur thermique et impose depuis des décennies l'usage exclusif de bateaux électriques silencieux pour préserver son écosystème. Les parois calcaires abruptes qui l'encerclent produisent un écho si net que les bateliers y interrompent traditionnellement leur trajet pour jouer un air de trompette, dont les répétitions successives résonnent jusqu'à sept fois contre la roche.",
      descriptionEn:
        "The Königssee, an alpine lake nestled in Berchtesgaden National Park on the Austrian border, ranks among Germany's purest bodies of water, a quality that bans any combustion-engine boats and has for decades required the exclusive use of silent electric boats to preserve its ecosystem. The steep limestone walls that ring it produce an echo so clear that boatmen traditionally pause their crossing to play a trumpet tune, its successive repetitions echoing off the rock as many as seven times.",
      descriptionEs:
        "El Königssee, lago alpino enclavado en el parque nacional de Berchtesgaden en la frontera austriaca, se cuenta entre las masas de agua más puras de Alemania, una cualidad que prohíbe cualquier navegación con motor de combustión y exige desde hace décadas el uso exclusivo de barcos eléctricos silenciosos para preservar su ecosistema. Las escarpadas paredes calizas que lo rodean producen un eco tan nítido que los barqueros interrumpen tradicionalmente su trayecto para tocar una melodía de trompeta, cuyas repeticiones sucesivas resuenan hasta siete veces contra la roca.",
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
      theme: "adventure",
      feeling: "revitalized",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 201,
    },
    sections: [
      {
        heading: "Le Königssee, l'un des lacs les plus purs d'Allemagne",
        headingEn: "The Königssee, One of Germany's Purest Lakes",
        headingEs: "El Königssee, uno de los lagos más puros de Alemania",
        body:
          "Le Königssee, dont les eaux d'un vert profond doivent leur clarté exceptionnelle à l'absence quasi totale d'affluents pollués et à une profondeur atteignant plus de cent quatre-vingts mètres, reste depuis les années 1900 interdit à toute embarcation à moteur thermique afin de préserver son écosystème fragile. Seuls des bateaux électriques silencieux, en service continu depuis plus d'un siècle, sont autorisés à sillonner ses eaux, une réglementation précoce pour l'époque qui fait aujourd'hui du lac l'un des environnements aquatiques les mieux préservés d'Europe centrale.",
        bodyEn:
          "The Königssee, whose deep green waters owe their exceptional clarity to the near-total absence of polluted tributaries and a depth exceeding a hundred and eighty metres, has since the 1900s banned any combustion-engine boats to preserve its fragile ecosystem. Only silent electric boats, in continuous service for over a century, are permitted to ply its waters, an early-for-its-time regulation that today makes the lake one of central Europe's best-preserved aquatic environments.",
        bodyEs:
          "El Königssee, cuyas aguas de un verde profundo deben su claridad excepcional a la ausencia casi total de afluentes contaminados y a una profundidad que supera los ciento ochenta metros, prohíbe desde la década de 1900 cualquier embarcación con motor de combustión para preservar su frágil ecosistema. Solo barcos eléctricos silenciosos, en servicio continuo desde hace más de un siglo, están autorizados a surcar sus aguas, una normativa precoz para su época que hace hoy del lago uno de los entornos acuáticos mejor conservados de Europa central.",
      },
      {
        heading: "L'écho de la trompette et le nid d'aigle",
        headingEn: "The Trumpet Echo and the Eagle's Nest",
        headingEs: "El eco de la trompeta y el nido de águila",
        body:
          "Les parois calcaires abruptes qui encerclent le Königssee, culminant à plus de deux mille mètres, produisent un phénomène acoustique remarquable exploité de longue date par les bateliers, qui interrompent traditionnellement la traversée pour jouer un air de trompette dont l'écho se répercute jusqu'à sept fois contre la roche. Non loin de là, le Kehlsteinhaus, surnommé le « nid d'aigle », pavillon construit en 1938 au sommet d'un éperon rocheux à mille huit cents mètres d'altitude, offre aujourd'hui un panorama exceptionnel sur l'ensemble du massif de Berchtesgaden.",
        bodyEn:
          "The steep limestone walls that ring the Königssee, rising to over two thousand metres, produce a remarkable acoustic phenomenon long exploited by boatmen, who traditionally pause the crossing to play a trumpet tune whose echo bounces off the rock as many as seven times. Not far away, the Kehlsteinhaus, nicknamed the \"Eagle's Nest,\" a pavilion built in 1938 atop a rocky spur at eighteen hundred metres altitude, today offers an exceptional panorama over the entire Berchtesgaden massif.",
        bodyEs:
          "Las escarpadas paredes calizas que rodean el Königssee, que se elevan a más de dos mil metros, producen un notable fenómeno acústico explotado desde hace tiempo por los barqueros, que interrumpen tradicionalmente la travesía para tocar una melodía de trompeta cuyo eco rebota contra la roca hasta siete veces. No lejos de allí, el Kehlsteinhaus, apodado el «nido de águila», pabellón construido en 1938 en lo alto de un espolón rocoso a mil ochocientos metros de altitud, ofrece hoy un panorama excepcional sobre todo el macizo de Berchtesgaden.",
      },
    ],
    hotels: [
      {
        name: "Chalet alpin au bord du Königssee",
        nameEn: "An Alpine Chalet on the Shores of the Königssee",
        nameEs: "Chalet alpino a orillas del Königssee",
        description:
          "Un chalet alpin traditionnel au bord du Königssee, chambres avec vue directe sur le lac et les parois calcaires environnantes.",
        descriptionEn:
          "A traditional alpine chalet on the shores of the Königssee, rooms with a direct view of the lake and surrounding limestone walls.",
        descriptionEs:
          "Un chalet alpino tradicional a orillas del Königssee, habitaciones con vistas directas al lago y a las paredes calizas circundantes.",
        image: `${R2}/trips/allemagne-berchtesgaden-hotel-1.jpg`,
      },
      {
        name: "Hôtel de montagne à Berchtesgaden",
        nameEn: "A Mountain Hotel in Berchtesgaden",
        nameEs: "Hotel de montaña en Berchtesgaden",
        description:
          "Un hôtel de montagne au cœur de Berchtesgaden, à courte distance du Königssee et du téléphérique menant au Kehlsteinhaus.",
        descriptionEn:
          "A mountain hotel at the heart of Berchtesgaden, a short distance from the Königssee and the cable car leading to the Kehlsteinhaus.",
        descriptionEs:
          "Un hotel de montaña en el corazón de Berchtesgaden, a poca distancia del Königssee y del teleférico que sube al Kehlsteinhaus.",
        image: `${R2}/trips/allemagne-berchtesgaden-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "slovenie",
    tour: {
      name: "Slovénie : le lac de Bled",
      nameEn: "Slovenia: Lake Bled",
      nameEs: "Eslovenia: el lago Bled",
      slug: "slovenie-lac-bled",
      image: `${R2}/tours/slovenie-lac-bled.jpg`,
      images: `${R2}/trips/slovenie-bled-gallery-1.jpg,${R2}/trips/slovenie-bled-gallery-2.jpg,${R2}/trips/slovenie-bled-gallery-3.jpg,${R2}/trips/slovenie-bled-gallery-4.jpg,${R2}/trips/slovenie-bled-gallery-5.jpg,${R2}/trips/slovenie-bled-gallery-6.jpg`,
      tagline: "Le seul îlot naturel de Slovénie, où les mariés doivent porter leur promise dans les bras sur quatre-vingt-dix-neuf marches",
      taglineEn: "Slovenia's only natural islet, where grooms must carry their bride up ninety-nine steps",
      taglineEs: "El único islote natural de Eslovenia, donde los novios deben llevar en brazos a la novia por noventa y nueve escalones",
      description:
        "Le lac de Bled, niché au pied des Alpes juliennes, doit sa renommée mondiale à son îlot central, unique île naturelle de Slovénie, sur laquelle se dresse une église de pèlerinage accessible uniquement par barque à rames traditionnelle appelée pletna. Une coutume locale tenace veut que tout jeune marié porte sa promise dans les bras le long des quatre-vingt-dix-dix-neuf marches qui montent jusqu'à l'église, un rituel censé garantir un mariage heureux et que continuent d'honorer de nombreux couples slovènes.",
      descriptionEn:
        "Lake Bled, nestled at the foot of the Julian Alps, owes its worldwide fame to its central islet, Slovenia's only natural island, on which stands a pilgrimage church accessible only by traditional rowing boat known as a pletna. A persistent local custom holds that every newlywed groom must carry his bride in his arms up the ninety-nine steps leading to the church, a ritual said to guarantee a happy marriage that many Slovenian couples continue to honour.",
      descriptionEs:
        "El lago Bled, enclavado al pie de los Alpes julianos, debe su fama mundial a su islote central, la única isla natural de Eslovenia, sobre la que se alza una iglesia de peregrinación accesible únicamente en barca de remos tradicional llamada pletna. Una arraigada costumbre local exige que todo recién casado lleve a su novia en brazos por los noventa y nueve escalones que suben hasta la iglesia, un ritual que se dice garantiza un matrimonio feliz y que muchas parejas eslovenas siguen honrando.",
      price: 1600,
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
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 203,
    },
    sections: [
      {
        heading: "L'unique île naturelle de Slovénie",
        headingEn: "Slovenia's Only Natural Island",
        headingEs: "La única isla natural de Eslovenia",
        body:
          "L'îlot du lac de Bled, unique île naturelle de tout le territoire slovène, se forma il y a plusieurs millénaires par accumulation progressive de sédiments glaciaires au centre du lac, avant d'être choisi dès le haut Moyen Âge comme site d'un sanctuaire préchrétien puis d'une église chrétienne successive. L'accès à l'île reste aujourd'hui exclusivement réservé aux pletnas, barques à rames traditionnelles construites selon des méthodes artisanales transmises de génération en génération par un nombre restreint de familles de bateliers.",
        bodyEn:
          "The islet in Lake Bled, the only natural island in all of Slovenian territory, formed several millennia ago through the gradual accumulation of glacial sediment at the centre of the lake, before being chosen as early as the High Middle Ages as the site of a pre-Christian shrine and later a successive Christian church. Access to the island remains today exclusively reserved for pletnas, traditional rowing boats built using artisanal methods passed down through generations by a small number of boatman families.",
        bodyEs:
          "El islote del lago Bled, única isla natural de todo el territorio esloveno, se formó hace varios milenios por la acumulación progresiva de sedimentos glaciares en el centro del lago, antes de ser elegido ya en la Alta Edad Media como emplazamiento de un santuario precristiano y después de una sucesiva iglesia cristiana. El acceso a la isla sigue estando hoy reservado exclusivamente a las pletnas, barcas de remos tradicionales construidas según métodos artesanales transmitidos de generación en generación por un reducido número de familias de barqueros.",
      },
      {
        heading: "Le château et la légende des quatre-vingt-dix-neuf marches",
        headingEn: "The Castle and the Legend of the Ninety-Nine Steps",
        headingEs: "El castillo y la leyenda de los noventa y nueve escalones",
        body:
          "Le château de Bled, perché sur une falaise à plus de cent mètres au-dessus du lac, compte parmi les plus anciens châteaux de Slovénie avec des origines remontant au XIe siècle, offrant depuis ses remparts un panorama emblématique sur l'île et les Alpes juliennes environnantes. Une coutume locale tenace veut que tout jeune marié porte sa promise dans les bras le long des quatre-vingt-dix-neuf marches qui montent jusqu'à l'église de l'île, un rituel censé garantir un mariage heureux et que continuent d'honorer de nombreux couples slovènes chaque année.",
        bodyEn:
          "Bled Castle, perched on a cliff over a hundred metres above the lake, ranks among Slovenia's oldest castles with origins dating back to the 11th century, offering from its ramparts an iconic panorama over the island and the surrounding Julian Alps. A persistent local custom holds that every newlywed groom must carry his bride in his arms up the ninety-nine steps leading to the island's church, a ritual said to guarantee a happy marriage that many Slovenian couples continue to honour each year.",
        bodyEs:
          "El castillo de Bled, encaramado en un acantilado a más de cien metros sobre el lago, se cuenta entre los castillos más antiguos de Eslovenia, con orígenes que se remontan al siglo XI, y ofrece desde sus murallas un panorama emblemático sobre la isla y los Alpes julianos circundantes. Una arraigada costumbre local exige que todo recién casado lleve a su novia en brazos por los noventa y nueve escalones que suben hasta la iglesia de la isla, un ritual que se dice garantiza un matrimonio feliz y que muchas parejas eslovenas siguen honrando cada año.",
      },
    ],
    hotels: [
      {
        name: "Villa de charme en surplomb du lac de Bled",
        nameEn: "A Boutique Villa Overlooking Lake Bled",
        nameEs: "Villa con encanto con vistas al lago Bled",
        description:
          "Une villa de charme en surplomb du lac de Bled, terrasse avec vue directe sur l'île et le château, à courte distance du ponton des pletnas.",
        descriptionEn:
          "A boutique villa overlooking Lake Bled, a terrace with a direct view of the island and castle, a short distance from the pletna dock.",
        descriptionEs:
          "Una villa con encanto con vistas al lago Bled, terraza con vistas directas a la isla y al castillo, a poca distancia del embarcadero de las pletnas.",
        image: `${R2}/trips/slovenie-bled-hotel-1.jpg`,
      },
      {
        name: "Auberge de charme au bord du lac",
        nameEn: "A Charming Lakeside Inn",
        nameEs: "Posada con encanto a orillas del lago",
        description:
          "Une auberge de charme directement au bord du lac de Bled, ponton privé et vue sur les Alpes juliennes environnantes.",
        descriptionEn:
          "A charming inn directly on the shores of Lake Bled, a private dock and views of the surrounding Julian Alps.",
        descriptionEs:
          "Una posada con encanto directamente a orillas del lago Bled, embarcadero privado y vistas a los Alpes julianos circundantes.",
        image: `${R2}/trips/slovenie-bled-hotel-2.jpg`,
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
