// Europe batch 1 — Islande, Italie, France. New trips bringing each destination to at least 3,
// styled on Black Tomato's real structure (a short number of named-hotel chapters, not an
// exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-europe-1.ts
// Requires scripts/upload-images-europe-1.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "islande",
    tour: {
      name: "Islande : Snæfellsnes et Landmannalaugar",
      nameEn: "Iceland: Snæfellsnes and Landmannalaugar",
      nameEs: "Islandia: Snæfellsnes y Landmannalaugar",
      slug: "islande-snaefellsnes-landmannalaugar",
      image: `${R2}/journeys/islande-snaefellsnes-landmannalaugar-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une péninsule surnommée « l'Islande en miniature », puis des montagnes de rhyolite aux couleurs presque irréelles",
      taglineEn: "A peninsula nicknamed \"Iceland in miniature,\" then rhyolite mountains in almost unreal colours",
      taglineEs: "Una península apodada «Islandia en miniatura», y después montañas de riolita de colores casi irreales",
      description:
        "Un voyage loin du Cercle d'Or et de la côte sud : la péninsule de Snæfellsnes, surnommée « l'Islande en miniature » pour concentrer sur cent kilomètres glaciers, volcans, plages de sable noir et falaises à oiseaux, puis Landmannalaugar, au cœur des hautes terres, dont les montagnes de rhyolite strient le paysage de bandes rose, verte et orangée uniques au monde, accessibles seulement quelques semaines par an lorsque les pistes dégèlent.",
      descriptionEn:
        "A journey far from the Golden Circle and the south coast: the Snæfellsnes peninsula, nicknamed \"Iceland in miniature\" for concentrating glaciers, volcanoes, black-sand beaches, and bird cliffs within a hundred kilometres, then Landmannalaugar, deep in the highlands, whose rhyolite mountains streak the landscape with bands of pink, green, and orange found nowhere else on earth, accessible only a few weeks a year once the tracks thaw.",
      descriptionEs:
        "Un viaje lejos del Círculo de Oro y la costa sur: la península de Snæfellsnes, apodada «Islandia en miniatura» por concentrar en cien kilómetros glaciares, volcanes, playas de arena negra y acantilados de aves, y después Landmannalaugar, en pleno corazón de las tierras altas, cuyas montañas de riolita rayan el paisaje con bandas rosas, verdes y anaranjadas únicas en el mundo, accesibles solo unas semanas al año cuando las pistas se deshielan.",
      price: 3800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Juin à août",
      whenLabelEn: "June to August",
      whenLabelEs: "Jun a agosto",
      bestMonths: "june,july,august",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 177,
    },
    chapters: [
      {
        title: "Snæfellsnes, l'Islande en miniature",
        titleEn: "Snæfellsnes, Iceland in Miniature",
        titleEs: "Snæfellsnes, Islandia en miniatura",
        intro:
          "Premier chapitre sur la péninsule de Snæfellsnes, qui s'avance sur une centaine de kilomètres dans l'Atlantique Nord et concentre à elle seule la quasi-totalité des paysages islandais : le glacier Snæfellsjökull, volcan sous-glaciaire qui inspira Jules Verne pour Voyage au centre de la Terre, des plages de sable noir et de sable doré côte à côte, et la montagne de Kirkjufell, sommet en forme de chapeau de sorcière devenu l'un des sujets photographiques les plus recherchés du pays.",
        introEn:
          "The first chapter unfolds on the Snæfellsnes peninsula, which juts about a hundred kilometres into the North Atlantic and concentrates on its own almost the entirety of Icelandic landscapes: the Snæfellsjökull glacier, a sub-glacial volcano that inspired Jules Verne's Journey to the Centre of the Earth, black-sand and golden-sand beaches side by side, and Kirkjufell mountain, a witch's-hat-shaped peak that has become one of the country's most sought-after photographic subjects.",
        introEs:
          "El primer capítulo se desarrolla en la península de Snæfellsnes, que se adentra unos cien kilómetros en el Atlántico Norte y concentra por sí sola casi la totalidad de los paisajes islandeses: el glaciar Snæfellsjökull, volcán subglacial que inspiró a Julio Verne para Viaje al centro de la Tierra, playas de arena negra y de arena dorada una junto a otra, y la montaña de Kirkjufell, cumbre en forma de sombrero de bruja convertida en uno de los motivos fotográficos más buscados del país.",
        galleryImages: `${R2}/journeys/islande-snaefellsnes-gallery1.jpg,${R2}/journeys/islande-snaefellsnes-gallery2.jpg,${R2}/journeys/islande-snaefellsnes-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 35,
        days: [
          {
            dayNumber: 1,
            title: "Kirkjufell et les plages de sable noir",
            titleEn: "Kirkjufell and the black-sand beaches",
            titleEs: "Kirkjufell y las playas de arena negra",
            description:
              "Découverte de la montagne de Kirkjufell et de sa cascade jumelle, puis promenade sur les plages de sable noir volcanique qui bordent la côte nord de la péninsule.",
            descriptionEn:
              "A discovery of Kirkjufell mountain and its twin waterfall, then a walk along the black volcanic sand beaches lining the peninsula's north coast.",
            descriptionEs:
              "Descubrimiento de la montaña de Kirkjufell y su cascada gemela, y paseo por las playas de arena negra volcánica que bordean la costa norte de la península.",
            image: `${R2}/journeys/islande-snaefellsnes-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le tour du glacier Snæfellsjökull",
            titleEn: "A circuit around Snæfellsjökull glacier",
            titleEs: "El circuito alrededor del glaciar Snæfellsjökull",
            description:
              "Route panoramique autour du volcan glaciaire de Snæfellsjökull, arrêts aux falaises à oiseaux d'Arnarstapi et au petit port de pêche de Hellnar niché entre lave et océan.",
            descriptionEn:
              "A scenic drive around the Snæfellsjökull ice volcano, stops at the Arnarstapi bird cliffs and the small fishing port of Hellnar nestled between lava and ocean.",
            descriptionEs:
              "Ruta panorámica alrededor del volcán glaciar de Snæfellsjökull, paradas en los acantilados de aves de Arnarstapi y en el pequeño puerto pesquero de Hellnar, enclavado entre lava y océano.",
            image: `${R2}/journeys/islande-snaefellsnes-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Landmannalaugar, les montagnes de couleur",
        titleEn: "Landmannalaugar, the Coloured Mountains",
        titleEs: "Landmannalaugar, las montañas de color",
        intro:
          "Route vers les hautes terres et Landmannalaugar, accessible seulement en 4x4 quelques semaines par an entre fin juin et début septembre, une fois les pistes non goudronnées et les gués praticables. Les montagnes de rhyolite qui entourent le site tirent leurs teintes roses, vertes et orangées d'une roche volcanique riche en minéraux rares, un phénomène géologique qui ne se retrouve nulle part ailleurs dans le monde à une telle échelle et qui fait de la région le point de départ du célèbre trek de Laugavegur.",
        introEn:
          "The road to the highlands and Landmannalaugar, accessible only by 4x4 for a few weeks a year between late June and early September, once the unpaved tracks and river fords become passable. The rhyolite mountains surrounding the site owe their pink, green, and orange hues to volcanic rock rich in rare minerals, a geological phenomenon found nowhere else in the world at such a scale and that makes the region the starting point of the famous Laugavegur trek.",
        introEs:
          "Ruta hacia las tierras altas y Landmannalaugar, accesible solo en 4x4 unas semanas al año entre finales de junio y principios de septiembre, una vez que las pistas sin asfaltar y los vados son transitables. Las montañas de riolita que rodean el lugar deben sus tonos rosas, verdes y anaranjados a una roca volcánica rica en minerales poco comunes, un fenómeno geológico que no se encuentra en ningún otro lugar del mundo a tal escala y que convierte a la región en el punto de partida de la famosa ruta de Laugavegur.",
        galleryImages: `${R2}/journeys/islande-landmannalaugar-gallery1.jpg,${R2}/journeys/islande-landmannalaugar-gallery2.jpg,${R2}/journeys/islande-landmannalaugar-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée parmi les montagnes de rhyolite",
            titleEn: "A hike among the rhyolite mountains",
            titleEs: "Caminata entre las montañas de riolita",
            description:
              "Randonnée sur les premiers kilomètres du sentier de Laugavegur, à travers un paysage de montagnes de rhyolite striées de rose, de vert et d'orange, jusqu'à un champ de lave noire encore fumant.",
            descriptionEn:
              "A hike along the first kilometres of the Laugavegur trail, through a landscape of rhyolite mountains streaked with pink, green, and orange, to a still-steaming black lava field.",
            descriptionEs:
              "Caminata por los primeros kilómetros del sendero de Laugavegur, a través de un paisaje de montañas de riolita rayadas de rosa, verde y naranja, hasta un campo de lava negra todavía humeante.",
            image: `${R2}/journeys/islande-landmannalaugar-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Baignade dans les sources chaudes naturelles",
            titleEn: "A soak in the natural hot springs",
            titleEs: "Baño en las fuentes termales naturales",
            description:
              "Baignade dans la rivière chaude naturelle de Landmannalaugar, alimentée par l'activité géothermique locale, où l'eau brûlante se mêle à un ruisseau glacé venu de la montagne.",
            descriptionEn:
              "A soak in the natural hot river of Landmannalaugar, fed by local geothermal activity, where scalding water mixes with an icy stream flowing down from the mountain.",
            descriptionEs:
              "Baño en el río termal natural de Landmannalaugar, alimentado por la actividad geotérmica local, donde el agua hirviendo se mezcla con un arroyo helado que baja de la montaña.",
            image: `${R2}/journeys/islande-landmannalaugar-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "italie",
    tour: {
      name: "Italie : la Sicile et les îles Éoliennes",
      nameEn: "Italy: Sicily and the Aeolian Islands",
      nameEs: "Italia: Sicilia y las islas Eolias",
      slug: "italie-sicile-eoliennes",
      image: `${R2}/journeys/italie-sicile-eoliennes-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un théâtre antique face à l'Etna, puis un volcan qui crache des gerbes de lave presque toutes les vingt minutes depuis l'Antiquité",
      taglineEn: "An ancient theatre facing Mount Etna, then a volcano spouting bursts of lava roughly every twenty minutes since antiquity",
      taglineEs: "Un teatro antiguo frente al Etna, y después un volcán que escupe chorros de lava casi cada veinte minutos desde la Antigüedad",
      description:
        "Un voyage loin de Rome, Florence et la côte amalfitaine : Taormina, cité perchée sur la côte est de Sicile dont le théâtre grec antique encadre l'Etna, plus haut volcan actif d'Europe, en toile de fond, puis les îles Éoliennes, archipel volcanique au large dont Stromboli, surnommé le « phare de la Méditerranée », entre en éruption de manière quasi continue depuis plus de deux mille ans, un spectacle visible de nuit depuis un bateau à distance de sécurité.",
      descriptionEn:
        "A journey far from Rome, Florence, and the Amalfi Coast: Taormina, a town perched on Sicily's east coast whose ancient Greek theatre frames Mount Etna, Europe's highest active volcano, as a backdrop, then the Aeolian Islands, an offshore volcanic archipelago where Stromboli, nicknamed the \"lighthouse of the Mediterranean,\" has erupted almost continuously for over two thousand years, a spectacle visible at night from a boat at a safe distance.",
      descriptionEs:
        "Un viaje lejos de Roma, Florencia y la costa de Amalfi: Taormina, ciudad encaramada en la costa este de Sicilia cuyo antiguo teatro griego enmarca el Etna, el volcán activo más alto de Europa, como telón de fondo, y después las islas Eolias, archipiélago volcánico costero donde Stromboli, apodado el «faro del Mediterráneo», entra en erupción de manera casi continua desde hace más de dos mil años, un espectáculo visible de noche desde un barco a distancia segura.",
      price: 3200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | sept a oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 179,
    },
    chapters: [
      {
        title: "Taormina et l'Etna",
        titleEn: "Taormina and Mount Etna",
        titleEs: "Taormina y el Etna",
        intro:
          "Premier chapitre à Taormina, cité perchée sur un promontoire rocheux de la côte est sicilienne, dont le théâtre grec du IIIe siècle avant notre ère, remanié par les Romains, offre depuis ses gradins une vue simultanée sur la mer Ionienne et sur l'Etna, plus haut volcan actif d'Europe qui culmine à plus de trois mille trois cents mètres et entre régulièrement en éruption sous les yeux des spectateurs.",
        introEn:
          "The first chapter unfolds in Taormina, a town perched on a rocky promontory on Sicily's east coast, whose Greek theatre from the 3rd century BCE, later reworked by the Romans, offers from its tiers a simultaneous view of the Ionian Sea and Mount Etna, Europe's highest active volcano, rising over three thousand three hundred metres and erupting regularly before spectators' eyes.",
        introEs:
          "El primer capítulo se desarrolla en Taormina, ciudad encaramada en un promontorio rocoso de la costa este siciliana, cuyo teatro griego del siglo III antes de nuestra era, remodelado después por los romanos, ofrece desde sus gradas una vista simultánea sobre el mar Jónico y el Etna, el volcán activo más alto de Europa, que se eleva más de tres mil trescientos metros y entra en erupción con regularidad ante los espectadores.",
        galleryImages: `${R2}/journeys/italie-sicile-gallery1.jpg,${R2}/journeys/italie-sicile-gallery2.jpg,${R2}/journeys/italie-sicile-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Le théâtre grec et la vieille ville",
            titleEn: "The Greek theatre and the old town",
            titleEs: "El teatro griego y el casco antiguo",
            description:
              "Visite du théâtre grec antique de Taormina, dont les gradins encadrent l'Etna en toile de fond, puis promenade dans les ruelles médiévales de la vieille ville jusqu'au belvédère de la Piazza IX Aprile.",
            descriptionEn:
              "A visit to Taormina's ancient Greek theatre, its tiers framing Mount Etna as a backdrop, then a stroll through the old town's medieval lanes to the Piazza IX Aprile lookout.",
            descriptionEs:
              "Visita al antiguo teatro griego de Taormina, cuyas gradas enmarcan el Etna como telón de fondo, y paseo por las callejuelas medievales del casco antiguo hasta el mirador de la Piazza IX Aprile.",
            image: `${R2}/journeys/italie-sicile-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Ascension sur les flancs de l'Etna",
            titleEn: "An ascent on the slopes of Etna",
            titleEs: "Ascensión por las laderas del Etna",
            description:
              "Excursion sur les flancs de l'Etna, entre coulées de lave figées et cratères éteints, avec un guide volcanologue qui explique l'activité éruptive régulière du plus haut volcan d'Europe.",
            descriptionEn:
              "An excursion on the slopes of Etna, among frozen lava flows and extinct craters, with a volcanologist guide explaining the regular eruptive activity of Europe's highest volcano.",
            descriptionEs:
              "Excursión por las laderas del Etna, entre coladas de lava solidificadas y cráteres extintos, con un guía vulcanólogo que explica la actividad eruptiva regular del volcán más alto de Europa.",
            image: `${R2}/journeys/italie-sicile-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Les îles Éoliennes et Stromboli",
        titleEn: "The Aeolian Islands and Stromboli",
        titleEs: "Las islas Eolias y Stromboli",
        intro:
          "Traversée en bateau vers l'archipel des Éoliennes, classé à l'UNESCO pour son intérêt volcanologique exceptionnel, dont Stromboli reste en activité quasi continue depuis plus de deux mille ans, un phénomène si régulier qu'il a donné son nom à un type d'éruption reconnu par les volcanologues du monde entier. Le sommet de l'île, accessible uniquement accompagné d'un guide certifié en raison du danger, offre au crépuscule le spectacle de gerbes de lave incandescentes projetées toutes les vingt minutes environ.",
        introEn:
          "A boat crossing to the Aeolian archipelago, UNESCO-listed for its exceptional volcanological interest, where Stromboli has remained in near-continuous activity for over two thousand years, a phenomenon so regular it lent its name to a type of eruption recognised by volcanologists worldwide. The island's summit, accessible only with a certified guide due to the danger, offers at dusk the spectacle of incandescent lava bursts thrown up roughly every twenty minutes.",
        introEs:
          "Travesía en barco hacia el archipiélago de las Eolias, declarado por la UNESCO por su excepcional interés vulcanológico, donde Stromboli permanece en actividad casi continua desde hace más de dos mil años, un fenómeno tan regular que dio nombre a un tipo de erupción reconocido por los vulcanólogos de todo el mundo. La cima de la isla, accesible solo con un guía certificado debido al peligro, ofrece al atardecer el espectáculo de chorros de lava incandescente lanzados aproximadamente cada veinte minutos.",
        galleryImages: `${R2}/journeys/italie-eoliennes-gallery1.jpg,${R2}/journeys/italie-eoliennes-gallery2.jpg,${R2}/journeys/italie-eoliennes-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Le village de Stromboli et la Sciara del Fuoco",
            titleEn: "Stromboli village and the Sciara del Fuoco",
            titleEs: "El pueblo de Stromboli y la Sciara del Fuoco",
            description:
              "Promenade dans le village de Stromboli, aux maisons blanches typiques, puis observation depuis la mer de la Sciara del Fuoco, coulée de lave qui dévale directement dans l'océan.",
            descriptionEn:
              "A stroll through Stromboli village, with its typical white houses, then an observation from the sea of the Sciara del Fuoco, a lava flow that plunges directly into the ocean.",
            descriptionEs:
              "Paseo por el pueblo de Stromboli, de típicas casas blancas, y observación desde el mar de la Sciara del Fuoco, colada de lava que cae directamente al océano.",
            image: `${R2}/journeys/italie-eoliennes-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "L'éruption nocturne vue depuis un bateau",
            titleEn: "The night eruption seen from a boat",
            titleEs: "La erupción nocturna vista desde un barco",
            description:
              "Sortie en bateau au crépuscule pour observer à distance de sécurité les gerbes de lave incandescente projetées par le cratère de Stromboli, actif de manière quasi continue depuis l'Antiquité.",
            descriptionEn:
              "A boat trip at dusk to observe from a safe distance the incandescent lava bursts thrown up by Stromboli's crater, active almost continuously since antiquity.",
            descriptionEs:
              "Salida en barco al atardecer para observar a distancia segura los chorros de lava incandescente lanzados por el cráter de Stromboli, activo de manera casi continua desde la Antigüedad.",
            image: `${R2}/journeys/italie-eoliennes-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "france",
    tour: {
      name: "France : la Dordogne et la vallée de la Loire",
      nameEn: "France: The Dordogne and the Loire Valley",
      nameEs: "Francia: la Dordoña y el valle del Loira",
      slug: "france-dordogne-loire",
      image: `${R2}/journeys/france-dordogne-loire-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une rivière bordée de châteaux médiévaux et de grottes ornées, puis la vallée des rois de France et de ses châteaux Renaissance",
      taglineEn: "A river lined with medieval castles and painted caves, then the valley of the kings of France and its Renaissance châteaux",
      taglineEs: "Un río bordeado de castillos medievales y cuevas pintadas, y después el valle de los reyes de Francia y sus castillos renacentistas",
      description:
        "Un voyage loin de Paris et de la Côte d'Azur : la Dordogne, dont la rivière serpente entre des châteaux médiévaux perchés sur des falaises calcaires et des grottes ornées de peintures pariétales vieilles de plus de dix-sept mille ans, dont Lascaux, puis la vallée de la Loire, classée à l'UNESCO, où les rois de France firent bâtir à la Renaissance certains des châteaux les plus raffinés d'Europe, de Chambord à Chenonceau.",
      descriptionEn:
        "A journey far from Paris and the Côte d'Azur: the Dordogne, whose river winds between medieval castles perched on limestone cliffs and caves adorned with cave paintings over seventeen thousand years old, including Lascaux, then the Loire Valley, UNESCO-listed, where the kings of France had some of Europe's most refined Renaissance châteaux built, from Chambord to Chenonceau.",
      descriptionEs:
        "Un viaje lejos de París y la Costa Azul: la Dordoña, cuyo río serpentea entre castillos medievales encaramados en acantilados calizos y cuevas adornadas con pinturas rupestres de más de diecisiete mil años, entre ellas Lascaux, y después el valle del Loira, declarado por la UNESCO, donde los reyes de Francia mandaron construir en el Renacimiento algunos de los castillos más refinados de Europa, desde Chambord hasta Chenonceau.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | sept a oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 181,
    },
    chapters: [
      {
        title: "La Dordogne, châteaux et grottes ornées",
        titleEn: "The Dordogne, Castles and Painted Caves",
        titleEs: "La Dordoña, castillos y cuevas pintadas",
        intro:
          "Premier chapitre en Dordogne, dont la vallée concentre l'une des plus fortes densités de châteaux médiévaux de France, perchés sur des falaises calcaires qui dominent la rivière du même nom, ainsi qu'un ensemble exceptionnel de grottes ornées de peintures pariétales préhistoriques, dont la grotte de Lascaux, découverte en 1940 et surnommée la « chapelle Sixtine de la préhistoire » pour la qualité de ses fresques vieilles de plus de dix-sept mille ans.",
        introEn:
          "The first chapter unfolds in the Dordogne, whose valley concentrates one of the highest densities of medieval castles in France, perched on limestone cliffs overlooking the river of the same name, along with an exceptional set of caves adorned with prehistoric cave paintings, including the Lascaux cave, discovered in 1940 and nicknamed the \"Sistine Chapel of prehistory\" for the quality of its frescoes, over seventeen thousand years old.",
        introEs:
          "El primer capítulo se desarrolla en la Dordoña, cuyo valle concentra una de las mayores densidades de castillos medievales de Francia, encaramados en acantilados calizos que dominan el río homónimo, además de un conjunto excepcional de cuevas adornadas con pinturas rupestres prehistóricas, entre ellas la cueva de Lascaux, descubierta en 1940 y apodada la «capilla Sixtina de la prehistoria» por la calidad de sus frescos, de más de diecisiete mil años de antigüedad.",
        galleryImages: `${R2}/journeys/france-dordogne-gallery1.jpg,${R2}/journeys/france-dordogne-gallery2.jpg,${R2}/journeys/france-dordogne-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Le château de Beynac et la rivière en canoë",
            titleEn: "Château de Beynac and the river by canoe",
            titleEs: "El castillo de Beynac y el río en canoa",
            description:
              "Visite du château de Beynac, forteresse médiévale perchée à plus de cent cinquante mètres au-dessus de la rivière, puis descente en canoë de la Dordogne entre falaises et villages de pierre.",
            descriptionEn:
              "A visit to Château de Beynac, a medieval fortress perched over one hundred and fifty metres above the river, then a canoe descent of the Dordogne between cliffs and stone villages.",
            descriptionEs:
              "Visita al castillo de Beynac, fortaleza medieval encaramada a más de ciento cincuenta metros sobre el río, y descenso en canoa por la Dordoña entre acantilados y pueblos de piedra.",
            image: `${R2}/journeys/france-dordogne-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Lascaux IV et l'art pariétal préhistorique",
            titleEn: "Lascaux IV and prehistoric cave art",
            titleEs: "Lascaux IV y el arte rupestre prehistórico",
            description:
              "Visite du fac-similé de Lascaux IV, reconstitution fidèle de la grotte originale fermée au public depuis 1963, à la découverte des fresques préhistoriques parmi les mieux préservées au monde.",
            descriptionEn:
              "A visit to the Lascaux IV facsimile, a faithful reconstruction of the original cave closed to the public since 1963, discovering prehistoric frescoes among the best-preserved in the world.",
            descriptionEs:
              "Visita al facsímil de Lascaux IV, reconstrucción fiel de la cueva original cerrada al público desde 1963, para descubrir frescos prehistóricos entre los mejor conservados del mundo.",
            image: `${R2}/journeys/france-dordogne-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La vallée de la Loire, les châteaux Renaissance",
        titleEn: "The Loire Valley, the Renaissance Châteaux",
        titleEs: "El valle del Loira, los castillos renacentistas",
        intro:
          "Route vers la vallée de la Loire, classée au patrimoine mondial de l'UNESCO et surnommée le « jardin de la France », où les rois François Ier et Henri II firent bâtir à la Renaissance certains des châteaux les plus raffinés d'Europe. Le château de Chenonceau, construit à cheval sur le Cher et disputé au XVIe siècle entre Diane de Poitiers et Catherine de Médicis, et le château de Chambord, dont l'escalier à double révolution serait attribué à Léonard de Vinci, comptent parmi les joyaux architecturaux de cette vallée royale.",
        introEn:
          "The road to the Loire Valley, UNESCO World Heritage listed and nicknamed the \"garden of France,\" where kings Francis I and Henry II had some of Europe's most refined Renaissance châteaux built. Château de Chenonceau, built spanning the Cher River and contested in the 16th century between Diane de Poitiers and Catherine de' Medici, and Château de Chambord, whose double-helix staircase is said to be attributed to Leonardo da Vinci, rank among the architectural jewels of this royal valley.",
        introEs:
          "Ruta hacia el valle del Loira, declarado Patrimonio de la Humanidad por la UNESCO y apodado el «jardín de Francia», donde los reyes Francisco I y Enrique II mandaron construir en el Renacimiento algunos de los castillos más refinados de Europa. El castillo de Chenonceau, construido a caballo sobre el río Cher y disputado en el siglo XVI entre Diana de Poitiers y Catalina de Médici, y el castillo de Chambord, cuya escalera de doble hélice se atribuiría a Leonardo da Vinci, se cuentan entre las joyas arquitectónicas de este valle real.",
        galleryImages: `${R2}/journeys/france-loire-gallery1.jpg,${R2}/journeys/france-loire-gallery2.jpg,${R2}/journeys/france-loire-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Le château de Chenonceau sur le Cher",
            titleEn: "Château de Chenonceau on the Cher",
            titleEs: "El castillo de Chenonceau sobre el Cher",
            description:
              "Visite du château de Chenonceau, construit sur cinq arches enjambant le Cher, dont la galerie suspendue au-dessus de la rivière fut le théâtre d'une rivalité célèbre entre deux reines de France.",
            descriptionEn:
              "A visit to Château de Chenonceau, built on five arches spanning the Cher, whose gallery suspended above the river was the stage for a famous rivalry between two French queens.",
            descriptionEs:
              "Visita al castillo de Chenonceau, construido sobre cinco arcos que salvan el río Cher, cuya galería suspendida sobre el río fue escenario de una célebre rivalidad entre dos reinas de Francia.",
            image: `${R2}/journeys/france-loire-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Chambord et son escalier à double révolution",
            titleEn: "Chambord and its double-helix staircase",
            titleEs: "Chambord y su escalera de doble hélice",
            description:
              "Visite du château de Chambord, plus vaste des châteaux de la Loire, dont l'escalier à double révolution permet à deux personnes de se croiser sans jamais se voir, une prouesse attribuée à Léonard de Vinci.",
            descriptionEn:
              "A visit to Château de Chambord, the largest of the Loire châteaux, whose double-helix staircase allows two people to pass each other without ever seeing one another, a feat attributed to Leonardo da Vinci.",
            descriptionEs:
              "Visita al castillo de Chambord, el más extenso de los castillos del Loira, cuya escalera de doble hélice permite a dos personas cruzarse sin verse nunca, una proeza atribuida a Leonardo da Vinci.",
            image: `${R2}/journeys/france-loire-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "islande",
    tour: {
      name: "Islande : les Westfjords",
      nameEn: "Iceland: The Westfjords",
      nameEs: "Islandia: los Westfjords",
      slug: "islande-westfjords",
      image: `${R2}/tours/islande-westfjords.jpg`,
      images: `${R2}/trips/islande-westfjords-gallery-1.jpg,${R2}/trips/islande-westfjords-gallery-2.jpg,${R2}/trips/islande-westfjords-gallery-3.jpg,${R2}/trips/islande-westfjords-gallery-4.jpg,${R2}/trips/islande-westfjords-gallery-5.jpg,${R2}/trips/islande-westfjords-gallery-6.jpg`,
      tagline: "La région la plus reculée d'Islande, où renards arctiques et falaises à un million d'oiseaux marins remplacent les foules du Cercle d'Or",
      taglineEn: "Iceland's most remote region, where arctic foxes and cliffs home to a million seabirds replace the Golden Circle crowds",
      taglineEs: "La región más remota de Islandia, donde zorros árticos y acantilados con un millón de aves marinas sustituyen a las multitudes del Círculo de Oro",
      description:
        "Les Westfjords, péninsule reculée du nord-ouest de l'Islande accessible par une route sinueuse qui longe des dizaines de fjords, restent la région la moins visitée du pays malgré des paysages parmi les plus spectaculaires, dont les falaises de Látrabjarg qui abritent près d'un million d'oiseaux marins nicheurs, la plus grande concentration d'Europe. Cette péninsule, dépourvue d'arbres et balayée par les vents, abrite également l'une des dernières populations sauvages de renards arctiques du pays.",
      descriptionEn:
        "The Westfjords, a remote peninsula in north-west Iceland reached by a winding road hugging dozens of fjords, remain the country's least-visited region despite some of its most spectacular landscapes, including the Látrabjarg cliffs sheltering nearly a million nesting seabirds, Europe's largest concentration. This treeless, wind-swept peninsula is also home to one of the country's last wild arctic fox populations.",
      descriptionEs:
        "Los Westfjords, remota península del noroeste de Islandia a la que se llega por una carretera sinuosa que bordea decenas de fiordos, siguen siendo la región menos visitada del país pese a contar con algunos de sus paisajes más espectaculares, entre ellos los acantilados de Látrabjarg, que albergan casi un millón de aves marinas nidificantes, la mayor concentración de Europa. Esta península sin árboles y azotada por el viento alberga además una de las últimas poblaciones salvajes de zorros árticos del país.",
      price: 3100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Juin à août",
      whenLabelEn: "June to August",
      whenLabelEs: "Jun a agosto",
      bestMonths: "june,july,august",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 176,
    },
    sections: [
      {
        heading: "Látrabjarg, la plus grande falaise à oiseaux d'Europe",
        headingEn: "Látrabjarg, Europe's Largest Bird Cliff",
        headingEs: "Látrabjarg, el mayor acantilado de aves de Europa",
        body:
          "Les falaises de Látrabjarg, qui s'étirent sur quatorze kilomètres et culminent à plus de quatre cents mètres au-dessus de l'océan, abritent chaque été près d'un million d'oiseaux marins nicheurs, dont l'une des plus grandes colonies de macareux moines d'Europe, un oiseau devenu le symbole visuel de l'Islande. La falaise, pointe la plus occidentale d'Europe, servit également de site de sauvetage lors du naufrage d'un chalutier britannique en 1947, un épisode qui reste gravé dans la mémoire locale des habitants des Westfjords.",
        bodyEn:
          "The Látrabjarg cliffs, stretching fourteen kilometres and rising over four hundred metres above the ocean, shelter nearly a million nesting seabirds every summer, including one of Europe's largest Atlantic puffin colonies, a bird that has become Iceland's visual symbol. The cliff, Europe's westernmost point, also served as a rescue site when a British trawler sank there in 1947, an episode still etched in the local memory of Westfjords residents.",
        bodyEs:
          "Los acantilados de Látrabjarg, que se extienden catorce kilómetros y se elevan más de cuatrocientos metros sobre el océano, albergan cada verano casi un millón de aves marinas nidificantes, entre ellas una de las mayores colonias de frailecillos de Europa, ave convertida en símbolo visual de Islandia. El acantilado, punto más occidental de Europa, sirvió también de escenario de rescate durante el naufragio de un arrastrero británico en 1947, episodio que sigue grabado en la memoria local de los habitantes de los Westfjords.",
      },
      {
        heading: "Une péninsule dépourvue d'arbres, royaume du renard arctique",
        headingEn: "A Treeless Peninsula, Kingdom of the Arctic Fox",
        headingEs: "Una península sin árboles, reino del zorro ártico",
        body:
          "Les Westfjords, formées par une activité volcanique remontant à plus de seize millions d'années, la plus ancienne roche de tout le pays, restent largement dépourvues d'arbres et balayées par des vents constants qui découragent toute végétation haute. Cet environnement rude a permis au renard arctique, seul mammifère terrestre autochtone d'Islande arrivé sur l'île en marchant sur la banquise il y a des millénaires, de prospérer dans la réserve naturelle de Hornstrandir, sanctuaire sans route ni habitation permanente au cœur de la péninsule.",
        bodyEn:
          "The Westfjords, formed by volcanic activity dating back over sixteen million years, the oldest rock in the entire country, remain largely treeless and swept by constant winds that discourage any tall vegetation. This harsh environment has allowed the arctic fox, Iceland's only native land mammal, which arrived on the island by walking across sea ice millennia ago, to thrive in the Hornstrandir nature reserve, a roadless sanctuary with no permanent habitation at the heart of the peninsula.",
        bodyEs:
          "Los Westfjords, formados por una actividad volcánica que se remonta a más de dieciséis millones de años, la roca más antigua de todo el país, siguen en gran parte desprovistos de árboles y azotados por vientos constantes que impiden cualquier vegetación alta. Este entorno duro ha permitido que el zorro ártico, único mamífero terrestre autóctono de Islandia, llegado a la isla caminando sobre el hielo marino hace milenios, prospere en la reserva natural de Hornstrandir, santuario sin carreteras ni vivienda permanente en el corazón de la península.",
      },
    ],
    hotels: [
      {
        name: "Lodge face au fjord d'Ísafjörður",
        nameEn: "A Lodge Facing Ísafjörður Fjord",
        nameEs: "Lodge frente al fiordo de Ísafjörður",
        description:
          "Un lodge simple face au fjord d'Ísafjörður, principale ville des Westfjords, chambres avec vue sur les montagnes environnantes et les eaux calmes du fjord.",
        descriptionEn:
          "A simple lodge facing Ísafjörður fjord, the Westfjords' main town, rooms overlooking the surrounding mountains and the fjord's calm waters.",
        descriptionEs:
          "Un sencillo lodge frente al fiordo de Ísafjörður, principal ciudad de los Westfjords, habitaciones con vistas a las montañas circundantes y las aguas tranquilas del fiordo.",
        image: `${R2}/trips/islande-westfjords-hotel-1.jpg`,
      },
      {
        name: "Ferme d'hôtes près de Látrabjarg",
        nameEn: "A Farm Guesthouse near Látrabjarg",
        nameEs: "Granja de huéspedes cerca de Látrabjarg",
        description:
          "Une ferme d'hôtes familiale à courte distance des falaises de Látrabjarg, chambres simples avec vue sur l'océan, petit-déjeuner à base de produits locaux.",
        descriptionEn:
          "A family farm guesthouse a short distance from the Látrabjarg cliffs, simple rooms overlooking the ocean, breakfast made from local produce.",
        descriptionEs:
          "Una granja de huéspedes familiar a poca distancia de los acantilados de Látrabjarg, habitaciones sencillas con vistas al océano, desayuno con productos locales.",
        image: `${R2}/trips/islande-westfjords-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "italie",
    tour: {
      name: "Italie : Venise et les Dolomites",
      nameEn: "Italy: Venice and the Dolomites",
      nameEs: "Italia: Venecia y las Dolomitas",
      slug: "italie-venise-dolomites",
      image: `${R2}/tours/italie-venise-dolomites.jpg`,
      images: `${R2}/trips/italie-venise-gallery-1.jpg,${R2}/trips/italie-venise-gallery-2.jpg,${R2}/trips/italie-venise-gallery-3.jpg,${R2}/trips/italie-venise-gallery-4.jpg,${R2}/trips/italie-venise-gallery-5.jpg,${R2}/trips/italie-venise-gallery-6.jpg`,
      tagline: "Une cité bâtie sur cent dix-huit îlots, puis des sommets dolomitiques classés à l'UNESCO qui s'embrasent au coucher du soleil",
      taglineEn: "A city built on one hundred and eighteen islets, then UNESCO-listed dolomite peaks that blaze at sunset",
      taglineEs: "Una ciudad construida sobre ciento dieciocho islotes, y después cumbres dolomíticas declaradas por la UNESCO que se encienden al atardecer",
      description:
        "Un voyage dans le nord de l'Italie, loin de Rome et de la côte amalfitaine : Venise, cité unique au monde bâtie sur cent dix-huit îlots reliés par plus de quatre cents ponts, dont les canaux et les palais de marbre témoignent de la puissance de la République maritime qui domina la Méditerranée pendant près d'un millénaire, puis les Dolomites, massif montagneux classé à l'UNESCO dont les sommets de calcaire s'embrasent chaque soir d'une lumière rose orangée appelée l'enrosadira.",
      descriptionEn:
        "A journey through northern Italy, far from Rome and the Amalfi Coast: Venice, a city unique in the world built on one hundred and eighteen islets linked by over four hundred bridges, whose canals and marble palaces bear witness to the power of the maritime republic that dominated the Mediterranean for nearly a millennium, then the Dolomites, a UNESCO-listed mountain range whose limestone peaks blaze every evening with a pink-orange glow called enrosadira.",
      descriptionEs:
        "Un viaje por el norte de Italia, lejos de Roma y la costa de Amalfi: Venecia, ciudad única en el mundo construida sobre ciento dieciocho islotes unidos por más de cuatrocientos puentes, cuyos canales y palacios de mármol dan testimonio del poder de la república marítima que dominó el Mediterráneo durante casi un milenio, y después las Dolomitas, macizo montañoso declarado por la UNESCO cuyas cumbres calizas se encienden cada tarde con un resplandor rosa anaranjado llamado enrosadira.",
      price: 2700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mai à juin | Sept à oct",
      whenLabelEn: "May to June | Sept to Oct",
      whenLabelEs: "May a junio | sept a oct",
      bestMonths: "may,june,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 178,
    },
    sections: [
      {
        heading: "Venise, la Sérénissime",
        headingEn: "Venice, the Serene Republic",
        headingEs: "Venecia, la Serenísima",
        body:
          "Venise, bâtie à partir du Ve siècle sur un archipel de cent dix-huit îlots marécageux pour échapper aux invasions barbares, devint entre le Xe et le XVIIIe siècle la capitale d'une République maritime, surnommée la Sérénissime, qui contrôla une grande partie du commerce entre l'Europe et l'Orient. Ses palais gothiques et Renaissance, construits sur des pilotis de bois enfoncés dans la lagune, et la place Saint-Marc, cœur historique de la cité, comptent parmi les ensembles architecturaux les mieux préservés d'Europe.",
        bodyEn:
          "Venice, built from the 5th century onward on an archipelago of one hundred and eighteen marshy islets to escape barbarian invasions, became between the 10th and 18th centuries the capital of a maritime republic, nicknamed the Serene Republic, that controlled a large share of trade between Europe and the East. Its Gothic and Renaissance palaces, built on wooden piles driven into the lagoon, and St Mark's Square, the city's historic heart, rank among Europe's best-preserved architectural ensembles.",
        bodyEs:
          "Venecia, construida a partir del siglo V sobre un archipiélago de ciento dieciocho islotes pantanosos para escapar de las invasiones bárbaras, se convirtió entre los siglos X y XVIII en la capital de una república marítima, apodada la Serenísima, que controló gran parte del comercio entre Europa y Oriente. Sus palacios góticos y renacentistas, construidos sobre pilotes de madera hincados en la laguna, y la plaza de San Marcos, corazón histórico de la ciudad, se cuentan entre los conjuntos arquitectónicos mejor conservados de Europa.",
      },
      {
        heading: "Les Dolomites et l'enrosadira",
        headingEn: "The Dolomites and the Enrosadira",
        headingEs: "Las Dolomitas y la enrosadira",
        body:
          "Les Dolomites, classées à l'UNESCO en 2009, doivent leur nom au minéral de dolomite qui compose leurs sommets calcaires, formés il y a plus de deux cent cinquante millions d'années au fond d'un océan tropical avant d'être soulevés par la tectonique des plaques. Ce massif offre chaque soir le phénomène de l'enrosadira, embrasement rose puis orangé des parois rocheuses au coucher du soleil provoqué par la réflexion de la lumière sur les cristaux de dolomite, un spectacle qui attire photographes et randonneurs du monde entier.",
        bodyEn:
          "The Dolomites, UNESCO-listed in 2009, owe their name to the dolomite mineral that makes up their limestone peaks, formed over two hundred and fifty million years ago at the bottom of a tropical ocean before being uplifted by plate tectonics. This massif offers every evening the enrosadira phenomenon, a pink-then-orange blaze on the rock faces at sunset caused by light reflecting off dolomite crystals, a spectacle that draws photographers and hikers from around the world.",
        bodyEs:
          "Las Dolomitas, declaradas por la UNESCO en 2009, deben su nombre al mineral de dolomita que compone sus cumbres calizas, formadas hace más de doscientos cincuenta millones de años en el fondo de un océano tropical antes de ser levantadas por la tectónica de placas. Este macizo ofrece cada tarde el fenómeno de la enrosadira, resplandor rosa y luego anaranjado de las paredes rocosas al atardecer provocado por el reflejo de la luz en los cristales de dolomita, un espectáculo que atrae a fotógrafos y excursionistas de todo el mundo.",
      },
    ],
    hotels: [
      {
        name: "Palazzo rénové près de la place Saint-Marc",
        nameEn: "A Renovated Palazzo near St Mark's Square",
        nameEs: "Palazzo renovado cerca de la plaza de San Marcos",
        description:
          "Un ancien palazzo vénitien rénové à distance de marche de la place Saint-Marc, chambres avec vue sur un canal, petit-déjeuner servi sur une terrasse donnant sur l'eau.",
        descriptionEn:
          "A former Venetian palazzo renovated within walking distance of St Mark's Square, rooms overlooking a canal, breakfast served on a terrace facing the water.",
        descriptionEs:
          "Un antiguo palazzo veneciano renovado a poca distancia a pie de la plaza de San Marcos, habitaciones con vistas a un canal, desayuno servido en una terraza frente al agua.",
        image: `${R2}/trips/italie-venise-hotel-1.jpg`,
      },
      {
        name: "Refuge de montagne dans les Dolomites",
        nameEn: "A Mountain Refuge in the Dolomites",
        nameEs: "Refugio de montaña en las Dolomitas",
        description:
          "Un refuge de montagne traditionnel dans les Dolomites, chambres avec vue sur les sommets calcaires, terrasse idéale pour observer le phénomène de l'enrosadira au coucher du soleil.",
        descriptionEn:
          "A traditional mountain refuge in the Dolomites, rooms overlooking the limestone peaks, a terrace ideal for observing the enrosadira phenomenon at sunset.",
        descriptionEs:
          "Un refugio de montaña tradicional en las Dolomitas, habitaciones con vistas a las cumbres calizas, terraza ideal para observar el fenómeno de la enrosadira al atardecer.",
        image: `${R2}/trips/italie-venise-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "france",
    tour: {
      name: "France : la Bretagne et le Mont-Saint-Michel",
      nameEn: "France: Brittany and Mont-Saint-Michel",
      nameEs: "Francia: Bretaña y el Mont-Saint-Michel",
      slug: "france-bretagne-mont-saint-michel",
      image: `${R2}/tours/france-bretagne-mont-saint-michel.jpg`,
      images: `${R2}/trips/france-bretagne-gallery-1.jpg,${R2}/trips/france-bretagne-gallery-2.jpg,${R2}/trips/france-bretagne-gallery-3.jpg,${R2}/trips/france-bretagne-gallery-4.jpg,${R2}/trips/france-bretagne-gallery-5.jpg,${R2}/trips/france-bretagne-gallery-6.jpg`,
      tagline: "Une abbaye médiévale posée sur un îlot rocheux, où la marée la plus forte d'Europe continentale monte à la vitesse d'un cheval au galop",
      taglineEn: "A medieval abbey perched on a rocky islet, where continental Europe's strongest tide rises at the speed of a galloping horse",
      taglineEs: "Una abadía medieval posada sobre un islote rocoso, donde la marea más fuerte de la Europa continental sube a la velocidad de un caballo al galope",
      description:
        "Un voyage dans l'ouest de la France, loin de Paris et de la Côte d'Azur : le Mont-Saint-Michel, îlot rocheux couronné d'une abbaye bénédictine fondée au VIIIe siècle, dont la baie connaît l'un des plus forts marnages d'Europe continentale, capable de faire monter la mer à la vitesse d'un cheval au galop selon l'expression locale, puis la côte bretonne, ponctuée de ports de pêche colorés, de phares battus par les vents et de menhirs mégalithiques vieux de plus de six mille ans.",
      descriptionEn:
        "A journey through western France, far from Paris and the Côte d'Azur: Mont-Saint-Michel, a rocky islet crowned by a Benedictine abbey founded in the 8th century, whose bay has one of continental Europe's strongest tidal ranges, capable of raising the sea at the speed of a galloping horse according to local lore, then the Breton coast, dotted with colourful fishing ports, wind-battered lighthouses, and megalithic standing stones over six thousand years old.",
      descriptionEs:
        "Un viaje por el oeste de Francia, lejos de París y la Costa Azul: el Mont-Saint-Michel, islote rocoso coronado por una abadía benedictina fundada en el siglo VIII, cuya bahía registra uno de los mayores rangos de marea de la Europa continental, capaz de hacer subir el mar a la velocidad de un caballo al galope según el dicho local, y después la costa bretona, salpicada de coloridos puertos pesqueros, faros azotados por el viento y menhires megalíticos de más de seis mil años.",
      price: 2200,
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
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 180,
    },
    sections: [
      {
        heading: "Le Mont-Saint-Michel et sa marée légendaire",
        headingEn: "Mont-Saint-Michel and its Legendary Tide",
        headingEs: "El Mont-Saint-Michel y su marea legendaria",
        body:
          "Le Mont-Saint-Michel, îlot rocheux couronné d'une abbaye bénédictine fondée en 708 selon la légende à la suite d'une apparition de l'archange Michel, connaît dans sa baie l'un des plus forts marnages d'Europe continentale, avec un écart pouvant dépasser quatorze mètres entre marée haute et marée basse. Cette marée, qui isolait autrefois le mont plusieurs heures par jour et forgea sa réputation de « merveille de l'Occident », reste réputée pour sa vitesse de montée, comparée depuis des siècles à celle d'un cheval au galop.",
        bodyEn:
          "Mont-Saint-Michel, a rocky islet crowned by a Benedictine abbey founded in 708 according to legend following an apparition of the Archangel Michael, has one of continental Europe's strongest tidal ranges in its bay, with a gap that can exceed fourteen metres between high and low tide. This tide, which once isolated the mount for several hours a day and forged its reputation as the \"marvel of the West,\" remains famous for the speed of its rise, compared for centuries to that of a galloping horse.",
        bodyEs:
          "El Mont-Saint-Michel, islote rocoso coronado por una abadía benedictina fundada en 708 según la leyenda tras una aparición del arcángel Miguel, registra en su bahía uno de los mayores rangos de marea de la Europa continental, con una diferencia que puede superar los catorce metros entre pleamar y bajamar. Esta marea, que antaño aislaba el monte varias horas al día y forjó su fama de «maravilla de Occidente», sigue siendo célebre por la velocidad de su subida, comparada desde hace siglos con la de un caballo al galope.",
      },
      {
        heading: "Les menhirs et les ports de pêche bretons",
        headingEn: "The Standing Stones and Breton Fishing Ports",
        headingEs: "Los menhires y los puertos pesqueros bretones",
        body:
          "La côte bretonne conserve l'un des plus grands ensembles mégalithiques au monde, dont les alignements de Carnac, plus de trois mille menhirs dressés il y a environ six mille ans selon un plan dont la fonction exacte reste débattue par les archéologues. Cette côte sauvage, où se succèdent ports de pêche aux maisons colorées et phares emblématiques battus par les vents atlantiques, conserve également une identité celtique forte, perceptible dans la langue bretonne et les fest-noz, fêtes traditionnelles rythmées par la musique et la danse.",
        bodyEn:
          "The Breton coast preserves one of the largest megalithic ensembles in the world, including the Carnac alignments, over three thousand standing stones erected around six thousand years ago according to a layout whose exact purpose remains debated by archaeologists. This wild coast, lined with fishing ports of colourful houses and emblematic lighthouses battered by Atlantic winds, also retains a strong Celtic identity, perceptible in the Breton language and in fest-noz, traditional festivals driven by music and dance.",
        bodyEs:
          "La costa bretona conserva uno de los mayores conjuntos megalíticos del mundo, entre ellos los alineamientos de Carnac, más de tres mil menhires erigidos hace unos seis mil años según un trazado cuya función exacta sigue siendo debatida por los arqueólogos. Esta costa salvaje, bordeada de puertos pesqueros de casas coloridas y emblemáticos faros azotados por los vientos atlánticos, conserva además una fuerte identidad celta, perceptible en la lengua bretona y en los fest-noz, fiestas tradicionales marcadas por la música y el baile.",
      },
    ],
    hotels: [
      {
        name: "Maison de pêcheur rénovée sur la baie",
        nameEn: "A Renovated Fisherman's House on the Bay",
        nameEs: "Casa de pescador renovada en la bahía",
        description:
          "Une ancienne maison de pêcheur rénovée en surplomb de la baie du Mont-Saint-Michel, chambres avec vue sur l'abbaye, jardin donnant sur les prés salés environnants.",
        descriptionEn:
          "A former fisherman's house renovated overlooking the Mont-Saint-Michel bay, rooms overlooking the abbey, a garden facing the surrounding salt marshes.",
        descriptionEs:
          "Una antigua casa de pescador renovada con vistas a la bahía del Mont-Saint-Michel, habitaciones con vistas a la abadía, jardín frente a las marismas circundantes.",
        image: `${R2}/trips/france-bretagne-hotel-1.jpg`,
      },
      {
        name: "Villa de charme sur la côte bretonne",
        nameEn: "A Charming Villa on the Breton Coast",
        nameEs: "Villa con encanto en la costa bretona",
        description:
          "Une villa de charme sur la côte bretonne, à courte distance des alignements de Carnac, jardin planté d'hortensias donnant sur l'océan Atlantique.",
        descriptionEn:
          "A charming villa on the Breton coast, a short distance from the Carnac alignments, a garden planted with hydrangeas facing the Atlantic Ocean.",
        descriptionEs:
          "Una villa con encanto en la costa bretona, a poca distancia de los alineamientos de Carnac, jardín plantado de hortensias frente al océano Atlántico.",
        image: `${R2}/trips/france-bretagne-hotel-2.jpg`,
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
