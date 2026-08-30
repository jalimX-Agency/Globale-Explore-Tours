// Batch 5 — Zambia, Uganda, Tunisia, Zimbabwe. New trips bringing each destination to at least
// 3, styled on Black Tomato's real structure (a short number of named-hotel chapters, not an
// exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-africa-5.ts
// Requires scripts/upload-images-africa-5.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "zambie",
    tour: {
      name: "Zambie : le parc du Kafue, la nature à l'état brut",
      nameEn: "Zambia: Kafue National Park, Nature in the Raw",
      nameEs: "Zambia: el parque de Kafue, la naturaleza en estado puro",
      slug: "zambie-kafue",
      image: `${R2}/journeys/zambie-kafue-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "L'un des plus grands parcs d'Afrique, deux fois plus vaste que la Belgique, et pourtant presque vide de visiteurs",
      taglineEn: "One of Africa's largest parks, twice the size of Belgium, and yet almost empty of visitors",
      taglineEs: "Uno de los mayores parques de África, del doble de tamaño que Bélgica, y sin embargo casi vacío de visitantes",
      description:
        "Le parc national du Kafue, l'un des plus vastes du continent africain, reste paradoxalement l'un des moins connus, faute d'infrastructures développées à la hauteur de sa superficie. Les plaines inondables de Busanga au nord et les rives boisées de la rivière Kafue au centre offrent deux visages radicalement différents d'un même parc, où lions, guépards et antilopes lechwe se partagent un territoire d'une ampleur presque incomparable en Afrique.",
      descriptionEn:
        "Kafue National Park, one of the largest on the African continent, remains paradoxically one of the least known, for want of infrastructure to match its scale. The Busanga floodplains in the north and the wooded banks of the Kafue River at its centre offer two radically different faces of the same park, where lions, cheetahs, and lechwe antelope share a territory of an extent almost unmatched in Africa.",
      descriptionEs:
        "El parque nacional de Kafue, uno de los más extensos del continente africano, sigue siendo paradójicamente uno de los menos conocidos, por falta de infraestructuras a la altura de su tamaño. Las llanuras inundables de Busanga al norte y las orillas boscosas del río Kafue en el centro ofrecen dos caras radicalmente distintas de un mismo parque, donde leones, guepardos y antílopes lechwe comparten un territorio de una extensión casi incomparable en África.",
      price: 4700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Juin à oct",
      whenLabelEn: "June to Oct",
      whenLabelEs: "Jun a oct",
      bestMonths: "june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 30,
    },
    chapters: [
      {
        title: "Les plaines de Busanga",
        titleEn: "The Busanga Plains",
        titleEs: "Las llanuras de Busanga",
        intro:
          "Premier chapitre sur les plaines inondables de Busanga, accessibles seulement en saison sèche lorsque les eaux se retirent et révèlent une savane à perte de vue, comparée par certains aux plaines du Serengeti pour son ouverture et sa densité de vie sauvage. Les lions de Busanga, connus pour grimper aux termitières pour observer leur territoire, y côtoient l'une des plus fortes populations d'antilopes lechwe d'Afrique.",
        introEn:
          "The first chapter unfolds on the Busanga floodplains, accessible only in the dry season when the waters recede to reveal grassland stretching to the horizon, compared by some to the Serengeti plains for its openness and density of wildlife. The Busanga lions, known for climbing termite mounds to survey their territory, share the plains with one of Africa's largest populations of lechwe antelope.",
        introEs:
          "El primer capítulo se desarrolla en las llanuras inundables de Busanga, accesibles solo en la temporada seca, cuando las aguas se retiran y dejan al descubierto una sabana que se pierde en el horizonte, comparada por algunos con las llanuras del Serengeti por su amplitud y densidad de vida salvaje. Los leones de Busanga, conocidos por subirse a termiteros para vigilar su territorio, conviven allí con una de las mayores poblaciones de antílopes lechwe de África.",
        galleryImages: `${R2}/journeys/zambie-busanga-gallery1.jpg,${R2}/journeys/zambie-busanga-gallery2.jpg,${R2}/journeys/zambie-busanga-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Vol vers Busanga et premier safari",
            titleEn: "Flight to Busanga and first game drive",
            titleEs: "Vuelo a Busanga y primer safari",
            description:
              "Vol léger vers les plaines de Busanga, installation au camp saisonnier. Premier safari en fin de journée à la recherche des lions grimpeurs de termitières, une particularité locale rarement observée ailleurs.",
            descriptionEn:
              "A light aircraft flight to the Busanga Plains, settling into the seasonal camp. A first late-afternoon game drive in search of the termite-mound-climbing lions, a local quirk rarely seen elsewhere.",
            descriptionEs:
              "Vuelo en avioneta a las llanuras de Busanga, instalación en el campamento estacional. Primer safari al final del día en busca de los leones que trepan a los termiteros, una peculiaridad local poco vista en otros lugares.",
            image: `${R2}/journeys/zambie-busanga-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les lechwes et les guépards des plaines",
            titleEn: "Lechwe antelope and the plains' cheetahs",
            titleEs: "Los lechwes y los guepardos de las llanuras",
            description:
              "Journée complète de safari à travers les plaines ouvertes de Busanga, parmi les troupeaux d'antilopes lechwe et à la recherche des guépards, plus à l'aise ici que dans les zones plus boisées du parc.",
            descriptionEn:
              "A full day of safari across Busanga's open plains, among herds of lechwe antelope and searching for cheetahs, more at ease here than in the park's more wooded areas.",
            descriptionEs:
              "Día completo de safari por las llanuras abiertas de Busanga, entre manadas de antílopes lechwe y en busca de guepardos, más cómodos aquí que en las zonas más boscosas del parque.",
            image: `${R2}/journeys/zambie-busanga-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La rivière Kafue et Nanzhila",
        titleEn: "The Kafue River and Nanzhila",
        titleEs: "El río Kafue y Nanzhila",
        intro:
          "Transfert vers le centre du parc, le long de la rivière Kafue, dont les rives boisées de miombo abritent une faune plus discrète mais tout aussi riche : léopards, élans du Cap et l'une des plus grandes diversités d'antilopes d'Afrique, avec plus de vingt espèces recensées dans le parc. Les rapides de Kafue offrent un décor spectaculaire pour des safaris en bateau au coucher du soleil.",
        introEn:
          "A transfer to the park's centre, along the Kafue River, whose miombo-wooded banks shelter wildlife that's more discreet but just as rich: leopards, eland, and one of Africa's greatest antelope diversities, with over twenty species recorded in the park. The Kafue rapids provide a spectacular backdrop for sunset boat safaris.",
        introEs:
          "Traslado al centro del parque, a lo largo del río Kafue, cuyas orillas boscosas de miombo albergan una fauna más discreta pero igualmente rica: leopardos, elandes y una de las mayores diversidades de antílopes de África, con más de veinte especies registradas en el parque. Los rápidos de Kafue ofrecen un escenario espectacular para los safaris en barco al atardecer.",
        galleryImages: `${R2}/journeys/zambie-kafueriver-gallery1.jpg,${R2}/journeys/zambie-kafueriver-gallery2.jpg,${R2}/journeys/zambie-kafueriver-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Transfert et safari en bateau sur la Kafue",
            titleEn: "Transfer and boat safari on the Kafue",
            titleEs: "Traslado y safari en barco por el Kafue",
            description:
              "Transfert par piste vers le centre du parc, le long de la rivière Kafue. Safari en bateau au coucher du soleil face aux rapides, avec une chance d'observer hippopotames et une avifaune abondante.",
            descriptionEn:
              "An overland transfer to the park's centre, along the Kafue River. A sunset boat safari facing the rapids, with a chance to see hippos and abundant birdlife.",
            descriptionEs:
              "Traslado por pista hacia el centro del parque, a lo largo del río Kafue. Safari en barco al atardecer frente a los rápidos, con posibilidad de ver hipopótamos y abundante avifauna.",
            image: `${R2}/journeys/zambie-kafueriver-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sur les traces des antilopes rares",
            titleEn: "Tracking rare antelope",
            titleEs: "Tras la pista de los antílopes raros",
            description:
              "Safari matinal à la recherche des antilopes les plus rares du parc — élans du Cap, antilopes-chevalines et sitatungas des marais — dans les forêts de miombo qui bordent la rivière.",
            descriptionEn:
              "A morning safari in search of the park's rarest antelope — eland, roan antelope, and marsh-dwelling sitatunga — through the miombo woodlands lining the river.",
            descriptionEs:
              "Safari matutino en busca de los antílopes más raros del parque: elandes, antílopes caballares y sitatungas de pantano, en los bosques de miombo que bordean el río.",
            image: `${R2}/journeys/zambie-kafueriver-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "ouganda",
    tour: {
      name: "Ouganda : les monts Rwenzori et le lac Bunyonyi",
      nameEn: "Uganda: the Rwenzori Mountains and Lake Bunyonyi",
      nameEs: "Uganda: los montes Rwenzori y el lago Bunyonyi",
      slug: "ouganda-rwenzori-bunyonyi",
      image: `${R2}/journeys/ouganda-rwenzori-bunyonyi-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Les « montagnes de la Lune » couvertes de glaciers équatoriaux, puis le calme absolu d'un lac de cratère",
      taglineEn: "The 'Mountains of the Moon' capped with equatorial glaciers, then the total calm of a crater lake",
      taglineEs: "Las «montañas de la Luna» cubiertas de glaciares ecuatoriales, y después la calma absoluta de un lago de cráter",
      description:
        "Un voyage entre deux Ouganda méconnus : les monts Rwenzori, surnommés « montagnes de la Lune » par les géographes de l'Antiquité, dont les sommets portent l'un des derniers glaciers équatoriaux au monde, puis le lac Bunyonyi, l'un des lacs les plus profonds d'Afrique, niché entre des collines terrassées où ni crocodile ni hippopotame ne troublent la baignade.",
      descriptionEn:
        "A journey between two little-known sides of Uganda: the Rwenzori Mountains, nicknamed the 'Mountains of the Moon' by ancient geographers, whose peaks carry one of the world's last equatorial glaciers, then Lake Bunyonyi, one of Africa's deepest lakes, nestled among terraced hills where neither crocodiles nor hippos trouble the swimming.",
      descriptionEs:
        "Un viaje entre dos caras poco conocidas de Uganda: los montes Rwenzori, apodados «montañas de la Luna» por los geógrafos de la Antigüedad, cuyas cumbres sostienen uno de los últimos glaciares ecuatoriales del mundo, y después el lago Bunyonyi, uno de los lagos más profundos de África, enclavado entre colinas en terrazas donde ni cocodrilos ni hipopótamos perturban el baño.",
      price: 4200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Juin à sept | Déc à fév",
      whenLabelEn: "June to Sept | Dec to Feb",
      whenLabelEs: "Jun a sept | dic a feb",
      bestMonths: "june,july,august,september,december,january,february",
      category: "multi-day",
      theme: "adventure",
      feeling: "contentment",
      travelerTypes: "couples,solo,honeymoon",
      maxGuests: 6,
      featured: false,
      order: 31,
    },
    chapters: [
      {
        title: "Les monts Rwenzori",
        titleEn: "The Rwenzori Mountains",
        titleEs: "Los montes Rwenzori",
        intro:
          "Premier chapitre dans le massif du Rwenzori, chaîne de plus de cent kilomètres de long culminant à plus de cinq mille mètres, seule chaîne non volcanique d'Afrique de l'Est et l'un des derniers endroits du continent où subsistent des glaciers, aujourd'hui en recul rapide. Le trek traverse cinq zones climatiques distinctes en quelques jours, de la forêt tropicale à la lande afro-alpine peuplée de lobélies géantes et de séneçons arborescents, plantes endémiques aux silhouettes surréalistes.",
        introEn:
          "The first chapter unfolds in the Rwenzori massif, a range over one hundred kilometres long rising above five thousand metres, East Africa's only non-volcanic range and one of the continent's last places where glaciers survive, now retreating fast. The trek crosses five distinct climate zones within a few days, from rainforest to Afro-alpine moorland populated by giant lobelias and tree groundsels, endemic plants with surreal silhouettes.",
        introEs:
          "El primer capítulo se desarrolla en el macizo del Rwenzori, una cordillera de más de cien kilómetros que supera los cinco mil metros, la única cadena no volcánica de África Oriental y uno de los últimos lugares del continente donde sobreviven glaciares, hoy en rápido retroceso. El trekking atraviesa cinco zonas climáticas distintas en pocos días, desde la selva tropical hasta el páramo afroalpino poblado de lobelias gigantes y senecios arbóreos, plantas endémicas de siluetas surrealistas.",
        galleryImages: `${R2}/journeys/ouganda-rwenzori-gallery1.jpg,${R2}/journeys/ouganda-rwenzori-gallery2.jpg,${R2}/journeys/ouganda-rwenzori-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 50,
        days: [
          {
            dayNumber: 1,
            title: "Entrée dans la forêt tropicale du Rwenzori",
            titleEn: "Entering the Rwenzori rainforest",
            titleEs: "Entrada en la selva tropical del Rwenzori",
            description:
              "Départ du trek à travers la forêt tropicale de basse altitude, où cascades et lianes accompagnent la montée progressive vers les premières landes d'altitude, nuit en refuge géré par la communauté locale.",
            descriptionEn:
              "The trek sets off through low-altitude rainforest, where waterfalls and vines accompany the gradual climb toward the first high-altitude moorlands, an overnight stay in a community-run hut.",
            descriptionEs:
              "Inicio del trekking a través de la selva tropical de baja altitud, donde cascadas y lianas acompañan el ascenso progresivo hacia los primeros páramos de altitud, noche en un refugio gestionado por la comunidad local.",
            image: `${R2}/journeys/ouganda-rwenzori-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La lande afro-alpine et les glaciers",
            titleEn: "The Afro-alpine moorland and the glaciers",
            titleEs: "El páramo afroalpino y los glaciares",
            description:
              "Ascension à travers la lande afro-alpine, peuplée de lobélies géantes aux formes irréelles, jusqu'à un point de vue sur les glaciers sommitaux du massif, parmi les derniers subsistant sur le continent africain.",
            descriptionEn:
              "A climb through the Afro-alpine moorland, populated by giant lobelias with otherworldly shapes, to a viewpoint over the massif's summit glaciers, among the last remaining on the African continent.",
            descriptionEs:
              "Ascensión a través del páramo afroalpino, poblado de lobelias gigantes de formas irreales, hasta un mirador sobre los glaciares de la cumbre del macizo, entre los últimos que quedan en el continente africano.",
            image: `${R2}/journeys/ouganda-rwenzori-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le lac Bunyonyi",
        titleEn: "Lake Bunyonyi",
        titleEs: "El lago Bunyonyi",
        intro:
          "Descente vers le lac Bunyonyi, dont le nom signifie « lieu de nombreux petits oiseaux » en kinyarwanda, un lac de cratère si profond qu'aucun hippopotame ni crocodile ne peut y survivre, rendant la baignade possible en toute tranquillité. Vingt-neuf îles parsèment ses eaux, dont certaines portent une histoire propre, comme l'île dite « de la Punition », autrefois utilisée pour bannir les femmes non mariées enceintes.",
        introEn:
          "A descent to Lake Bunyonyi, whose name means \"place of many little birds\" in Kinyarwanda, a crater lake so deep that neither hippo nor crocodile can survive in it, making swimming possible in complete peace. Twenty-nine islands dot its waters, some carrying their own history, such as the so-called \"Punishment Island,\" once used to banish unmarried pregnant women.",
        introEs:
          "Descenso hacia el lago Bunyonyi, cuyo nombre significa «lugar de muchos pajaritos» en kinyaruanda, un lago de cráter tan profundo que ni hipopótamos ni cocodrilos pueden sobrevivir en él, lo que permite bañarse con total tranquilidad. Veintinueve islas salpican sus aguas, algunas con una historia propia, como la llamada «isla del Castigo», antes utilizada para desterrar a mujeres solteras embarazadas.",
        galleryImages: `${R2}/journeys/ouganda-bunyonyi-gallery1.jpg,${R2}/journeys/ouganda-bunyonyi-gallery2.jpg,${R2}/journeys/ouganda-bunyonyi-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Descente et canoë sur le lac",
            titleEn: "Descent and canoeing on the lake",
            titleEs: "Descenso y piragüismo en el lago",
            description:
              "Transfert vers le lac Bunyonyi, sortie en canoë traditionnel entre les vingt-neuf îles du lac, avec une halte sur l'une d'entre elles pour en découvrir l'histoire locale.",
            descriptionEn:
              "A transfer to Lake Bunyonyi, an outing in a traditional dugout canoe among the lake's twenty-nine islands, with a stop on one to learn its local history.",
            descriptionEs:
              "Traslado al lago Bunyonyi, salida en canoa tradicional entre las veintinueve islas del lago, con una parada en una de ellas para conocer su historia local.",
            image: `${R2}/journeys/ouganda-bunyonyi-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée sur les collines terrassées",
            titleEn: "A hike across the terraced hills",
            titleEs: "Caminata por las colinas en terrazas",
            description:
              "Randonnée le long des collines terrassées qui entourent le lac, à la rencontre des communautés locales pratiquant une agriculture en terrasses séculaire, avant une dernière baignade au coucher du soleil.",
            descriptionEn:
              "A hike along the terraced hills surrounding the lake, meeting local communities who practise centuries-old terrace farming, before one last swim at sunset.",
            descriptionEs:
              "Caminata por las colinas en terrazas que rodean el lago, al encuentro de comunidades locales que practican una agricultura en terrazas centenaria, antes de un último baño al atardecer.",
            image: `${R2}/journeys/ouganda-bunyonyi-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "tunisie",
    tour: {
      name: "Tunisie : Kairouan et Dougga, sur la route de l'intérieur",
      nameEn: "Tunisia: Kairouan and Dougga, the Inland Route",
      nameEs: "Túnez: Kairouan y Dougga, la ruta del interior",
      slug: "tunisie-kairouan-dougga",
      image: `${R2}/journeys/tunisie-kairouan-dougga-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La quatrième ville sainte de l'islam, puis les ruines romaines les mieux conservées d'Afrique du Nord",
      taglineEn: "Islam's fourth holiest city, then North Africa's best-preserved Roman ruins",
      taglineEs: "La cuarta ciudad santa del islam, y después las ruinas romanas mejor conservadas del norte de África",
      description:
        "L'intérieur méconnu de la Tunisie, loin des plages et du désert : Kairouan, fondée en 670 et considérée comme la quatrième ville sainte de l'islam après La Mecque, Médine et Jérusalem, puis Dougga, cité romaine perchée sur une colline dont l'état de conservation exceptionnel en fait le site antique le plus complet d'Afrique du Nord.",
      descriptionEn:
        "Tunisia's little-known interior, far from the beaches and the desert: Kairouan, founded in 670 and considered Islam's fourth holiest city after Mecca, Medina, and Jerusalem, then Dougga, a Roman city perched on a hilltop whose exceptional state of preservation makes it North Africa's most complete ancient site.",
      descriptionEs:
        "El interior poco conocido de Túnez, lejos de las playas y del desierto: Kairouan, fundada en 670 y considerada la cuarta ciudad santa del islam tras La Meca, Medina y Jerusalén, y después Dougga, ciudad romana encaramada en una colina cuyo excepcional estado de conservación la convierte en el yacimiento antiguo más completo del norte de África.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mars à mai | Oct-nov",
      whenLabelEn: "March to May | Oct-Nov",
      whenLabelEs: "Marzo a mayo | oct-nov",
      bestMonths: "march,april,may,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 32,
    },
    chapters: [
      {
        title: "Kairouan, la ville sainte",
        titleEn: "Kairouan, the Holy City",
        titleEs: "Kairouan, la ciudad santa",
        intro:
          "Premier chapitre à Kairouan, fondée par le général arabe Oqba ibn Nafi en 670 et devenue l'un des principaux foyers de diffusion de l'islam et de la culture arabe en Afrique du Nord. La Grande Mosquée, dont certaines colonnes proviennent de temples romains et byzantins recyclés, ouvre sa vaste cour de marbre aux visiteurs non musulmans, une rareté parmi les grandes mosquées historiques du monde arabe.",
        introEn:
          "The first chapter unfolds in Kairouan, founded by the Arab general Oqba ibn Nafi in 670 and which became one of the main centres for the spread of Islam and Arab culture in North Africa. The Great Mosque, some of whose columns were recycled from Roman and Byzantine temples, opens its vast marble courtyard to non-Muslim visitors, a rarity among the great historic mosques of the Arab world.",
        introEs:
          "El primer capítulo se desarrolla en Kairouan, fundada por el general árabe Oqba ibn Nafi en el año 670 y convertida en uno de los principales focos de difusión del islam y la cultura árabe en el norte de África. La Gran Mezquita, cuyas columnas proceden en parte de templos romanos y bizantinos reutilizados, abre su vasto patio de mármol a los visitantes no musulmanes, una rareza entre las grandes mezquitas históricas del mundo árabe.",
        galleryImages: `${R2}/journeys/tunisie-kairouan-gallery1.jpg,${R2}/journeys/tunisie-kairouan-gallery2.jpg,${R2}/journeys/tunisie-kairouan-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "La Grande Mosquée et la médina",
            titleEn: "The Great Mosque and the medina",
            titleEs: "La Gran Mezquita y la medina",
            description:
              "Visite de la Grande Mosquée de Kairouan, l'une des plus anciennes d'Afrique du Nord, puis promenade dans la médina classée à l'UNESCO, entre échoppes de tapis et de cuivre martelé.",
            descriptionEn:
              "A visit to the Great Mosque of Kairouan, one of the oldest in North Africa, then a stroll through the UNESCO-listed medina, among carpet stalls and hammered copperware.",
            descriptionEs:
              "Visita a la Gran Mezquita de Kairouan, una de las más antiguas del norte de África, y paseo por la medina declarada por la UNESCO, entre puestos de alfombras y cobre repujado.",
            image: `${R2}/journeys/tunisie-kairouan-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les bassins des Aghlabides et l'artisanat local",
            titleEn: "The Aghlabid Basins and local crafts",
            titleEs: "Las albercas de los aglabíes y la artesanía local",
            description:
              "Visite des bassins des Aghlabides, système hydraulique du IXe siècle encore visible aujourd'hui, puis rencontre avec des artisans tapissiers de Kairouan, réputés pour leurs tapis de haute laine tissés à la main.",
            descriptionEn:
              "A visit to the Aghlabid Basins, a 9th-century hydraulic system still visible today, then a meeting with Kairouan's carpet weavers, renowned for their hand-woven high-wool rugs.",
            descriptionEs:
              "Visita a las albercas de los aglabíes, un sistema hidráulico del siglo IX todavía visible hoy, y encuentro con los artesanos alfombreros de Kairouan, célebres por sus alfombras de lana gruesa tejidas a mano.",
            image: `${R2}/journeys/tunisie-kairouan-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Dougga, la cité romaine",
        titleEn: "Dougga, the Roman City",
        titleEs: "Dougga, la ciudad romana",
        intro:
          "Direction Dougga, classée au patrimoine mondial de l'UNESCO et considérée comme le site romain le mieux conservé d'Afrique du Nord. Perché sur une colline dominant la vallée de l'oued Khalled, le site conserve un théâtre pouvant accueillir trois mille cinq cents spectateurs, un capitole aux colonnes intactes et un mausolée numide antérieur à la conquête romaine, témoignant de plus de mille ans d'occupation continue.",
        introEn:
          "On to Dougga, a UNESCO World Heritage Site considered North Africa's best-preserved Roman site. Perched on a hill overlooking the Oued Khalled valley, the site retains a theatre that could seat three thousand five hundred spectators, a capitol with intact columns, and a Numidian mausoleum predating the Roman conquest, testifying to over a thousand years of continuous occupation.",
        introEs:
          "Rumbo a Dougga, declarada Patrimonio Mundial de la UNESCO y considerada el yacimiento romano mejor conservado del norte de África. Encaramado en una colina que domina el valle del oued Khalled, el sitio conserva un teatro con capacidad para tres mil quinientos espectadores, un capitolio de columnas intactas y un mausoleo númida anterior a la conquista romana, testimonio de más de mil años de ocupación continua.",
        galleryImages: `${R2}/journeys/tunisie-dougga-gallery1.jpg,${R2}/journeys/tunisie-dougga-gallery2.jpg,${R2}/journeys/tunisie-dougga-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Le théâtre et le capitole de Dougga",
            titleEn: "Dougga's theatre and capitol",
            titleEs: "El teatro y el capitolio de Dougga",
            description:
              "Visite du site archéologique de Dougga au lever du jour, avant l'arrivée des groupes, en commençant par le théâtre romain et le capitole, dont les colonnes corinthiennes dominent encore la vallée.",
            descriptionEn:
              "A visit to the Dougga archaeological site at dawn, before the tour groups arrive, starting with the Roman theatre and the capitol, whose Corinthian columns still dominate the valley.",
            descriptionEs:
              "Visita al yacimiento arqueológico de Dougga al amanecer, antes de la llegada de los grupos, comenzando por el teatro romano y el capitolio, cuyas columnas corintias todavía dominan el valle.",
            image: `${R2}/journeys/tunisie-dougga-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le mausolée numide et retour vers Tunis",
            titleEn: "The Numidian mausoleum and the return to Tunis",
            titleEs: "El mausoleo númida y regreso a Túnez",
            description:
              "Visite du mausolée numide, antérieur de plusieurs siècles à la présence romaine, puis route de retour vers Tunis à travers les paysages vallonnés de la Tunisie du nord-ouest.",
            descriptionEn:
              "A visit to the Numidian mausoleum, predating the Roman presence by several centuries, then the road back to Tunis through the rolling landscapes of northwestern Tunisia.",
            descriptionEs:
              "Visita al mausoleo númida, anterior en varios siglos a la presencia romana, y ruta de regreso a Túnez a través de los paisajes ondulados del noroeste tunecino.",
            image: `${R2}/journeys/tunisie-dougga-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "zimbabwe",
    tour: {
      name: "Zimbabwe : le Grand Zimbabwe et les collines de Matobo",
      nameEn: "Zimbabwe: Great Zimbabwe and the Matobo Hills",
      nameEs: "Zimbabue: el Gran Zimbabue y las colinas de Matobo",
      slug: "zimbabwe-grand-zimbabwe-matobo",
      image: `${R2}/journeys/zimbabwe-grandzim-matobo-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Les ruines qui ont donné son nom au pays, puis des collines de granite peuplées de rhinocéros et d'art rupestre millénaire",
      taglineEn: "The ruins that gave the country its name, then granite hills home to rhinos and millennia-old rock art",
      taglineEs: "Las ruinas que dieron nombre al país, y después colinas de granito pobladas de rinocerontes y arte rupestre milenario",
      description:
        "Un voyage entre deux sites qui racontent l'histoire profonde du Zimbabwe : le Grand Zimbabwe, ancienne capitale médiévale dont les murailles de pierre sèche ont donné son nom au pays tout entier, puis les collines de Matobo, paysage de rochers de granite sculptés par l'érosion, sanctuaire de rhinocéros et musée à ciel ouvert d'art rupestre san vieux de plusieurs millénaires.",
      descriptionEn:
        "A journey between two sites that tell Zimbabwe's deep history: Great Zimbabwe, a former medieval capital whose dry-stone walls gave the entire country its name, then the Matobo Hills, a landscape of granite boulders sculpted by erosion, a rhino sanctuary and an open-air museum of San rock art several millennia old.",
      descriptionEs:
        "Un viaje entre dos yacimientos que cuentan la historia profunda de Zimbabue: el Gran Zimbabue, antigua capital medieval cuyas murallas de piedra seca dieron nombre a todo el país, y después las colinas de Matobo, un paisaje de rocas de granito esculpidas por la erosión, santuario de rinocerontes y museo al aire libre de arte rupestre san de varios milenios de antigüedad.",
      price: 3400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avr à sept",
      whenLabelEn: "April to Sept",
      whenLabelEs: "Abr a sept",
      bestMonths: "april,may,june,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 33,
    },
    chapters: [
      {
        title: "Le Grand Zimbabwe",
        titleEn: "Great Zimbabwe",
        titleEs: "El Gran Zimbabue",
        intro:
          "Premier chapitre au Grand Zimbabwe, classé au patrimoine mondial de l'UNESCO, capitale d'un royaume commercial florissant entre le XIe et le XVe siècle, dont les échanges s'étendaient jusqu'à la Chine et l'Inde via la côte swahilie. L'Enceinte Royale, mur de pierre sèche haute de onze mètres construit sans aucun mortier, reste l'une des plus grandes structures précoloniales d'Afrique subsaharienne.",
        introEn:
          "The first chapter unfolds at Great Zimbabwe, a UNESCO World Heritage Site, capital of a thriving trading kingdom between the 11th and 15th centuries, whose trade networks reached as far as China and India via the Swahili coast. The Great Enclosure, an eleven-metre-high dry-stone wall built without any mortar, remains one of sub-Saharan Africa's largest precolonial structures.",
        introEs:
          "El primer capítulo se desarrolla en el Gran Zimbabue, declarado Patrimonio Mundial de la UNESCO, capital de un floreciente reino comercial entre los siglos XI y XV, cuyos intercambios llegaban hasta China e India a través de la costa suajili. El Gran Recinto, un muro de piedra seca de once metros de altura construido sin ningún mortero, sigue siendo una de las mayores estructuras precoloniales del África subsahariana.",
        galleryImages: `${R2}/journeys/zimbabwe-grandzim-gallery1.jpg,${R2}/journeys/zimbabwe-grandzim-gallery2.jpg,${R2}/journeys/zimbabwe-grandzim-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "L'Enceinte Royale et la Colline",
            titleEn: "The Great Enclosure and the Hill Complex",
            titleEs: "El Gran Recinto y el Complejo de la Colina",
            description:
              "Visite de l'Enceinte Royale, chef-d'œuvre d'architecture en pierre sèche, puis ascension vers le Complexe de la Colline, résidence royale fortifiée offrant une vue d'ensemble sur le site et la vallée environnante.",
            descriptionEn:
              "A visit to the Great Enclosure, a masterpiece of dry-stone architecture, then a climb to the Hill Complex, a fortified royal residence offering an overview of the site and surrounding valley.",
            descriptionEs:
              "Visita al Gran Recinto, obra maestra de la arquitectura en piedra seca, y ascenso al Complejo de la Colina, residencia real fortificada con vistas panorámicas del sitio y el valle circundante.",
            image: `${R2}/journeys/zimbabwe-grandzim-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Musée du site et artisanat local",
            titleEn: "The site museum and local crafts",
            titleEs: "El museo del sitio y la artesanía local",
            description:
              "Visite du musée du site, qui conserve les célèbres oiseaux de stéatite emblèmes du pays, puis rencontre avec des sculpteurs sur pierre de la région, héritiers d'une tradition artistique séculaire.",
            descriptionEn:
              "A visit to the site museum, which houses the famous soapstone birds that are emblems of the country, then a meeting with local stone sculptors, heirs to a centuries-old artistic tradition.",
            descriptionEs:
              "Visita al museo del sitio, que conserva las famosas aves de esteatita, emblemas del país, y encuentro con escultores en piedra de la región, herederos de una tradición artística centenaria.",
            image: `${R2}/journeys/zimbabwe-grandzim-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Les collines de Matobo",
        titleEn: "The Matobo Hills",
        titleEs: "Las colinas de Matobo",
        intro:
          "Direction les collines de Matobo, paysage unique de rochers de granite en équilibre sculptés par des millions d'années d'érosion, classé à l'UNESCO pour sa densité exceptionnelle d'art rupestre san, dont certaines peintures remonteraient à plus de treize mille ans. Le parc abrite aussi l'une des plus fortes densités de rhinocéros noirs et blancs d'Afrique australe, ainsi que la tombe de Cecil Rhodes, sur un promontoire surnommé « la vue du monde ».",
        introEn:
          "On to the Matobo Hills, a unique landscape of balancing granite boulders sculpted by millions of years of erosion, UNESCO-listed for its exceptional density of San rock art, some paintings reportedly over thirteen thousand years old. The park also holds one of southern Africa's highest densities of black and white rhinos, along with Cecil Rhodes's grave, on a promontory nicknamed \"World's View.\"",
        introEs:
          "Rumbo a las colinas de Matobo, un paisaje único de rocas de granito en equilibrio esculpidas por millones de años de erosión, declarado por la UNESCO por su excepcional densidad de arte rupestre san, con pinturas que se remontarían a más de trece mil años. El parque alberga también una de las mayores densidades de rinocerontes negros y blancos del África austral, además de la tumba de Cecil Rhodes, en un promontorio apodado «la vista del mundo».",
        galleryImages: `${R2}/journeys/zimbabwe-matobo-gallery1.jpg,${R2}/journeys/zimbabwe-matobo-gallery2.jpg,${R2}/journeys/zimbabwe-matobo-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 80,
        days: [
          {
            dayNumber: 1,
            title: "Tracking des rhinocéros à pied",
            titleEn: "Rhino tracking on foot",
            titleEs: "Seguimiento de rinocerontes a pie",
            description:
              "Tracking à pied des rhinocéros blancs et noirs en compagnie d'un ranger spécialisé, dans l'un des sanctuaires les plus denses en rhinocéros d'Afrique australe.",
            descriptionEn:
              "On-foot tracking of white and black rhinos alongside a specialist ranger, in one of southern Africa's densest rhino sanctuaries.",
            descriptionEs:
              "Seguimiento a pie de rinocerontes blancos y negros junto a un ranger especializado, en uno de los santuarios con mayor densidad de rinocerontes del África austral.",
            image: `${R2}/journeys/zimbabwe-matobo-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Art rupestre et la tombe de Cecil Rhodes",
            titleEn: "Rock art and Cecil Rhodes's grave",
            titleEs: "Arte rupestre y la tumba de Cecil Rhodes",
            description:
              "Visite de grottes ornées de peintures rupestres san millénaires, puis ascension jusqu'à la tombe de Cecil Rhodes, sur un promontoire de granite offrant un panorama à trois cent soixante degrés sur les collines de Matobo.",
            descriptionEn:
              "A visit to caves adorned with millennia-old San rock paintings, then a climb to Cecil Rhodes's grave, on a granite promontory offering a three-hundred-sixty-degree panorama over the Matobo Hills.",
            descriptionEs:
              "Visita a cuevas decoradas con pinturas rupestres san milenarias, y ascenso hasta la tumba de Cecil Rhodes, en un promontorio de granito con un panorama de trescientos sesenta grados sobre las colinas de Matobo.",
            image: `${R2}/journeys/zimbabwe-matobo-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "zambie",
    tour: {
      name: "Zambie : le Bas-Zambèze, safari en canoë",
      nameEn: "Zambia: the Lower Zambezi, Canoe Safari",
      nameEs: "Zambia: el Bajo Zambeze, safari en canoa",
      slug: "zambie-bas-zambeze",
      image: `${R2}/tours/zambie-bas-zambeze.jpg`,
      images: `${R2}/trips/zambie-bas-zambeze-gallery-1.jpg,${R2}/trips/zambie-bas-zambeze-gallery-2.jpg,${R2}/trips/zambie-bas-zambeze-gallery-3.jpg,${R2}/trips/zambie-bas-zambeze-gallery-4.jpg,${R2}/trips/zambie-bas-zambeze-gallery-5.jpg,${R2}/trips/zambie-bas-zambeze-gallery-6.jpg`,
      tagline: "Pagayer à hauteur d'hippopotame, dans l'un des derniers grands fleuves sauvages d'Afrique",
      taglineEn: "Paddling at hippo's-eye level, on one of Africa's last great wild rivers",
      taglineEs: "Remando a la altura de los hipopótamos, en uno de los últimos grandes ríos salvajes de África",
      description:
        "Le parc national du Bas-Zambèze, en face du parc zimbabwéen de Mana Pools de l'autre côté du fleuve, se découvre avant tout en canoë, glissant silencieusement entre les bancs d'hippopotames et les troupeaux d'éléphants qui viennent boire jusque dans l'eau. Un safari à hauteur de rivière, sans moteur, dans l'un des paysages fluviaux les plus spectaculaires d'Afrique australe.",
      descriptionEn:
        "Lower Zambezi National Park, facing Zimbabwe's Mana Pools across the river, is explored above all by canoe, gliding silently past pods of hippos and elephant herds that wade right into the water to drink. A river-level safari, engine-free, through one of southern Africa's most spectacular riverine landscapes.",
      descriptionEs:
        "El parque nacional del Bajo Zambeze, frente al parque zimbabuense de Mana Pools al otro lado del río, se descubre sobre todo en canoa, deslizándose en silencio entre manadas de hipopótamos y elefantes que se adentran en el agua para beber. Un safari a ras de río, sin motor, por uno de los paisajes fluviales más espectaculares del África austral.",
      price: 4100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mai à oct",
      whenLabelEn: "May to Oct",
      whenLabelEs: "Mayo a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 34,
    },
    sections: [
      {
        heading: "Safari en canoë sur le Zambèze",
        headingEn: "Canoe safari on the Zambezi",
        headingEs: "Safari en canoa por el Zambeze",
        body:
          "La descente en canoë se fait au fil du courant, entre bancs de sable où somnolent les crocodiles et chenaux étroits fréquentés par les éléphants, qui traversent parfois la rivière à la nage juste devant les embarcations. Les guides, formés à lire le comportement des hippopotames, maintiennent une distance respectueuse tout en assurant des rencontres d'une proximité rare avec la faune.",
        bodyEn:
          "The canoe descent follows the current, past sandbanks where crocodiles doze and narrow channels frequented by elephants, which sometimes swim across the river right in front of the boats. Guides, trained to read hippo behaviour, keep a respectful distance while still allowing unusually close wildlife encounters.",
        bodyEs:
          "El descenso en canoa sigue la corriente, entre bancos de arena donde dormitan los cocodrilos y canales estrechos frecuentados por elefantes, que a veces cruzan el río a nado justo delante de las embarcaciones. Los guías, formados para leer el comportamiento de los hipopótamos, mantienen una distancia prudente sin dejar de propiciar encuentros de una cercanía poco común con la fauna.",
      },
      {
        heading: "Safaris à pied et 4x4 dans la vallée",
        headingEn: "Walking and 4x4 safaris in the valley",
        headingEs: "Safaris a pie y en 4x4 en el valle",
        body:
          "En complément du canoë, des safaris à pied et en 4x4 explorent l'intérieur de la vallée, réputée pour sa forte densité de léopards et pour ses immenses arbres à saucisses et acacias-parapluies qui bordent le fleuve. La vallée du Bas-Zambèze reste l'une des zones les moins visitées d'Afrique australe, avec un nombre de lodges volontairement limité par les autorités zambiennes.",
        bodyEn:
          "Alongside the canoeing, walking and 4x4 safaris explore the valley's interior, known for its high density of leopards and for the immense sausage trees and umbrella acacias lining the river. The Lower Zambezi Valley remains one of the least-visited areas in southern Africa, with the number of lodges deliberately capped by Zambian authorities.",
        bodyEs:
          "Como complemento a la canoa, los safaris a pie y en 4x4 exploran el interior del valle, conocido por su alta densidad de leopardos y por los inmensos árboles de salchicha y acacias sombrilla que bordean el río. El valle del Bajo Zambeze sigue siendo una de las zonas menos visitadas del África austral, con un número de lodges deliberadamente limitado por las autoridades zambianas.",
      },
    ],
    hotels: [
      {
        name: "Sausage Tree Camp",
        nameEn: "Sausage Tree Camp",
        nameEs: "Sausage Tree Camp",
        description:
          "Un camp de safari intimiste sous les arbres à saucisses en bord de fleuve, tentes de toile avec vue directe sur l'eau, embarcadère privé pour les sorties en canoë.",
        descriptionEn:
          "An intimate safari camp beneath riverside sausage trees, canvas tents with a direct view of the water, a private jetty for canoe outings.",
        descriptionEs:
          "Un campamento de safari íntimo bajo los árboles de salchicha a orillas del río, tiendas de lona con vistas directas al agua, embarcadero privado para las salidas en canoa.",
        image: `${R2}/trips/zambie-bas-zambeze-hotel-sausagetree.jpg`,
      },
      {
        name: "Chiawa Camp",
        nameEn: "Chiawa Camp",
        nameEs: "Chiawa Camp",
        description:
          "Un camp historique, parmi les premiers du parc, réputé pour ses guides spécialisés dans le canoë et la lecture du comportement des grands mammifères.",
        descriptionEn:
          "A historic camp, among the park's first, known for guides specialised in canoeing and reading the behaviour of large mammals.",
        descriptionEs:
          "Un campamento histórico, de los primeros del parque, conocido por sus guías especializados en canoa y en la lectura del comportamiento de los grandes mamíferos.",
        image: `${R2}/trips/zambie-bas-zambeze-hotel-chiawa.jpg`,
      },
    ],
  },
  {
    destinationSlug: "ouganda",
    tour: {
      name: "Ouganda : Murchison Falls, le Nil déchaîné",
      nameEn: "Uganda: Murchison Falls, the Nile Unleashed",
      nameEs: "Uganda: Murchison Falls, el Nilo desatado",
      slug: "ouganda-murchison-falls",
      image: `${R2}/tours/ouganda-murchison-falls.jpg`,
      images: `${R2}/trips/ouganda-murchison-falls-gallery-1.jpg,${R2}/trips/ouganda-murchison-falls-gallery-2.jpg,${R2}/trips/ouganda-murchison-falls-gallery-3.jpg,${R2}/trips/ouganda-murchison-falls-gallery-4.jpg,${R2}/trips/ouganda-murchison-falls-gallery-5.jpg,${R2}/trips/ouganda-murchison-falls-gallery-6.jpg`,
      tagline: "Le fleuve le plus long du monde comprimé dans une gorge de sept mètres de large, puis un safari sur ses rives",
      taglineEn: "The world's longest river squeezed through a gorge just seven metres wide, then a safari along its banks",
      taglineEs: "El río más largo del mundo comprimido en una garganta de siete metros de ancho, y después un safari en sus orillas",
      description:
        "Le parc national de Murchison Falls, le plus grand d'Ouganda, s'organise autour des chutes du même nom, point où le Nil Victoria tout entier se comprime dans une gorge de rocher large de sept mètres seulement avant de plonger avec une puissance assourdissante. Le parc environnant, savane et forêt-galerie, abrite girafes de Rothschild, lions et l'une des plus fortes concentrations d'hippopotames d'Afrique de l'Est le long du fleuve.",
      descriptionEn:
        "Murchison Falls National Park, Uganda's largest, is built around the falls that give it its name, the point where the entire Victoria Nile is squeezed through a rocky gorge just seven metres wide before plunging with deafening power. The surrounding park, savannah and riverine forest, is home to Rothschild's giraffe, lions, and one of East Africa's highest concentrations of hippos along the river.",
      descriptionEs:
        "El parque nacional de Murchison Falls, el más grande de Uganda, se organiza en torno a las cataratas que le dan nombre, el punto donde todo el Nilo Victoria se comprime en una garganta rocosa de apenas siete metros de ancho antes de precipitarse con una potencia ensordecedora. El parque circundante, sabana y bosque de ribera, alberga jirafas de Rothschild, leones y una de las mayores concentraciones de hipopótamos de África Oriental a lo largo del río.",
      price: 3500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à fév | Juin à sept",
      whenLabelEn: "Dec to Feb | June to Sept",
      whenLabelEs: "Dic a feb | jun a sept",
      bestMonths: "december,january,february,june,july,august,september",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 35,
    },
    sections: [
      {
        heading: "Les chutes et la croisière sur le Nil",
        headingEn: "The falls and the Nile cruise",
        headingEs: "Las cataratas y el crucero por el Nilo",
        body:
          "Une croisière en bateau remonte le Nil Victoria jusqu'au pied des chutes, où l'eau entière du fleuve rugit à travers l'étroite gorge rocheuse — un contraste saisissant avec la largeur paisible du Nil en amont et en aval. Le trajet permet d'observer crocodiles du Nil, hippopotames et une avifaune exceptionnelle, dont le rare bec-en-sabot, l'un des oiseaux les plus recherchés d'Afrique.",
        bodyEn:
          "A boat cruise heads up the Victoria Nile to the foot of the falls, where the entire river roars through the narrow rocky gorge — a striking contrast with the Nile's peaceful width both upstream and downstream. The trip allows sightings of Nile crocodiles, hippos, and exceptional birdlife, including the rare shoebill stork, one of Africa's most sought-after birds.",
        bodyEs:
          "Un crucero en barco remonta el Nilo Victoria hasta el pie de las cataratas, donde todo el caudal del río ruge a través de la estrecha garganta rocosa, un contraste llamativo con la anchura apacible del Nilo aguas arriba y aguas abajo. El trayecto permite observar cocodrilos del Nilo, hipopótamos y una avifauna excepcional, entre ella el raro picozapato, una de las aves más buscadas de África.",
      },
      {
        heading: "Safari dans la savane au nord du Nil",
        headingEn: "Savannah safari north of the Nile",
        headingEs: "Safari en la sabana al norte del Nilo",
        body:
          "Le secteur nord du parc, savane parsemée d'arbres à beurre et de palmiers rôniers, abrite la plus forte population de girafes de Rothschild d'Ouganda, sous-espèce menacée reconnaissable à ses pattes blanches. Lions, buffles et cobs de Buffon complètent une faune de savane particulièrement dense pour l'Afrique de l'Est.",
        bodyEn:
          "The park's northern sector, savannah dotted with shea trees and borassus palms, holds Uganda's largest population of Rothschild's giraffe, an endangered subspecies recognisable by its white legs. Lions, buffalo, and Uganda kob round out a savannah wildlife particularly dense for East Africa.",
        bodyEs:
          "El sector norte del parque, una sabana salpicada de árboles de karité y palmeras borasus, alberga la mayor población de jirafas de Rothschild de Uganda, una subespecie amenazada reconocible por sus patas blancas. Leones, búfalos y cobos de Buffon completan una fauna de sabana particularmente densa para África Oriental.",
      },
    ],
    hotels: [
      {
        name: "Paraa Safari Lodge",
        nameEn: "Paraa Safari Lodge",
        nameEs: "Paraa Safari Lodge",
        description:
          "Un lodge historique surplombant le Nil, à deux pas de l'embarcadère pour les croisières vers les chutes, chambres avec vue directe sur le fleuve.",
        descriptionEn:
          "A historic lodge overlooking the Nile, steps from the jetty for cruises to the falls, rooms with a direct view of the river.",
        descriptionEs:
          "Un lodge histórico con vistas al Nilo, a pocos pasos del embarcadero para los cruceros hacia las cataratas, habitaciones con vistas directas al río.",
        image: `${R2}/trips/ouganda-murchison-falls-hotel-paraa.jpg`,
      },
      {
        name: "Baker's Lodge",
        nameEn: "Baker's Lodge",
        nameEs: "Baker's Lodge",
        description:
          "Un lodge plus intimiste sur la rive du Nil, nommé d'après l'explorateur qui découvrit les chutes en 1864, terrasse en surplomb idéale pour observer les hippopotames au crépuscule.",
        descriptionEn:
          "A more intimate lodge on the Nile's bank, named after the explorer who discovered the falls in 1864, an overhanging terrace ideal for watching hippos at dusk.",
        descriptionEs:
          "Un lodge más íntimo a orillas del Nilo, llamado así por el explorador que descubrió las cataratas en 1864, terraza elevada ideal para observar hipopótamos al anochecer.",
        image: `${R2}/trips/ouganda-murchison-falls-hotel-bakers.jpg`,
      },
    ],
  },
  {
    destinationSlug: "tunisie",
    tour: {
      name: "Tunisie : Djerba, l'île aux mille couleurs",
      nameEn: "Tunisia: Djerba, the Island of a Thousand Colours",
      nameEs: "Túnez: Djerba, la isla de los mil colores",
      slug: "tunisie-djerba",
      image: `${R2}/tours/tunisie-djerba.jpg`,
      images: `${R2}/trips/tunisie-djerba-gallery-1.jpg,${R2}/trips/tunisie-djerba-gallery-2.jpg,${R2}/trips/tunisie-djerba-gallery-3.jpg,${R2}/trips/tunisie-djerba-gallery-4.jpg,${R2}/trips/tunisie-djerba-gallery-5.jpg,${R2}/trips/tunisie-djerba-gallery-6.jpg`,
      tagline: "La plus grande île d'Afrique du Nord, entre plages de sable fin, poteries berbères et l'une des plus anciennes synagogues au monde",
      taglineEn: "North Africa's largest island, between fine sandy beaches, Berber pottery, and one of the world's oldest synagogues",
      taglineEs: "La isla más grande del norte de África, entre playas de arena fina, cerámica bereber y una de las sinagogas más antiguas del mundo",
      description:
        "Djerba, la plus grande île d'Afrique du Nord, mêle plages de sable fin bordées de palmeraies, villages berbères aux maisons blanchies à la chaux et la synagogue de la Ghriba, l'un des plus anciens lieux de culte juif au monde, encore vivante et fréquentée. L'île, longtemps épargnée par le tourisme de masse, conserve un artisanat de poterie et de tissage transmis de génération en génération.",
      descriptionEn:
        "Djerba, North Africa's largest island, blends fine sandy beaches lined with palm groves, whitewashed Berber villages, and the Ghriba synagogue, one of the oldest Jewish places of worship in the world, still active and visited. The island, long spared from mass tourism, preserves pottery and weaving crafts passed down through generations.",
      descriptionEs:
        "Djerba, la isla más grande del norte de África, combina playas de arena fina bordeadas de palmerales, pueblos bereberes de casas encaladas y la sinagoga de la Ghriba, uno de los lugares de culto judío más antiguos del mundo, todavía activa y visitada. La isla, durante mucho tiempo al margen del turismo de masas, conserva una artesanía de cerámica y tejido transmitida de generación en generación.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Avr à juin | Sept-oct",
      whenLabelEn: "April to June | Sept-Oct",
      whenLabelEs: "Abr a jun | sept-oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,family,honeymoon",
      maxGuests: 6,
      featured: false,
      order: 36,
    },
    sections: [
      {
        heading: "Houmt Souk et la synagogue de la Ghriba",
        headingEn: "Houmt Souk and the Ghriba synagogue",
        headingEs: "Houmt Souk y la sinagoga de la Ghriba",
        body:
          "Houmt Souk, capitale de l'île, se découvre au fil de son souk couvert et de son architecture fondouk, ancien caravansérail aujourd'hui transformé en hôtels et boutiques. À l'intérieur des terres, la synagogue de la Ghriba, dont les origines remonteraient à plus de deux mille ans, accueille chaque année un pèlerinage rassemblant des juifs tunisiens du monde entier.",
        bodyEn:
          "Houmt Souk, the island's capital, is explored through its covered souk and fondouk architecture, former caravanserais now converted into hotels and shops. Inland, the Ghriba synagogue, whose origins reportedly date back over two thousand years, hosts an annual pilgrimage that brings together Tunisian Jews from around the world.",
        bodyEs:
          "Houmt Souk, la capital de la isla, se descubre recorriendo su zoco cubierto y su arquitectura fondouk, antiguos caravasares hoy convertidos en hoteles y tiendas. Tierra adentro, la sinagoga de la Ghriba, cuyos orígenes se remontarían a más de dos mil años, acoge cada año una peregrinación que reúne a judíos tunecinos de todo el mundo.",
      },
      {
        heading: "Villages berbères et poteries de Guellala",
        headingEn: "Berber villages and the pottery of Guellala",
        headingEs: "Poblados bereberes y la cerámica de Guellala",
        body:
          "Le village de Guellala, connu pour ses poteries d'argile cuites dans des fours traditionnels creusés à même le sol, perpétue un artisanat séculaire visible dans les nombreux ateliers ouverts aux visiteurs. Les mosquées fortifiées de l'île, comme celle de Guellala, témoignent d'une architecture berbère unique, pensée pour résister aux invasions et à la chaleur.",
        bodyEn:
          "The village of Guellala, known for its clay pottery fired in traditional kilns dug into the ground, keeps alive a centuries-old craft visible in the many workshops open to visitors. The island's fortified mosques, such as the one in Guellala, showcase a unique Berber architecture, designed to withstand both invasions and the heat.",
        bodyEs:
          "El pueblo de Guellala, conocido por su cerámica de arcilla cocida en hornos tradicionales excavados en el suelo, mantiene viva una artesanía centenaria visible en los numerosos talleres abiertos a los visitantes. Las mezquitas fortificadas de la isla, como la de Guellala, muestran una arquitectura bereber única, pensada para resistir invasiones y el calor.",
      },
    ],
    hotels: [
      {
        name: "Dar Dhiafa",
        nameEn: "Dar Dhiafa",
        nameEs: "Dar Dhiafa",
        description:
          "Un ensemble de maisons traditionnelles restaurées dans le village de Houmt Souk, cour intérieure ombragée, décoration entièrement artisanale.",
        descriptionEn:
          "A cluster of restored traditional houses in the village of Houmt Souk, a shaded inner courtyard, entirely handcrafted decor.",
        descriptionEs:
          "Un conjunto de casas tradicionales restauradas en el pueblo de Houmt Souk, patio interior con sombra, decoración completamente artesanal.",
        image: `${R2}/trips/tunisie-djerba-hotel-dardhiafa.jpg`,
      },
      {
        name: "Yasmin Djerba",
        nameEn: "Yasmin Djerba",
        nameEs: "Yasmin Djerba",
        description:
          "Un hôtel en bord de plage dans la zone touristique de Midoun, grande piscine et accès direct au sable, idéal pour combiner détente et excursions culturelles.",
        descriptionEn:
          "A beachfront hotel in the tourist zone of Midoun, a large pool and direct beach access, ideal for combining relaxation and cultural excursions.",
        descriptionEs:
          "Un hotel frente a la playa en la zona turística de Midoun, gran piscina y acceso directo a la arena, ideal para combinar relax y excursiones culturales.",
        image: `${R2}/trips/tunisie-djerba-hotel-yasmin.jpg`,
      },
    ],
  },
  {
    destinationSlug: "zimbabwe",
    tour: {
      name: "Zimbabwe : Mana Pools, le sanctuaire du Zambèze",
      nameEn: "Zimbabwe: Mana Pools, the Zambezi Sanctuary",
      nameEs: "Zimbabue: Mana Pools, el santuario del Zambeze",
      slug: "zimbabwe-mana-pools",
      image: `${R2}/tours/zimbabwe-mana-pools.jpg`,
      images: `${R2}/trips/zimbabwe-mana-pools-gallery-1.jpg,${R2}/trips/zimbabwe-mana-pools-gallery-2.jpg,${R2}/trips/zimbabwe-mana-pools-gallery-3.jpg,${R2}/trips/zimbabwe-mana-pools-gallery-4.jpg,${R2}/trips/zimbabwe-mana-pools-gallery-5.jpg,${R2}/trips/zimbabwe-mana-pools-gallery-6.jpg`,
      tagline: "L'un des seuls parcs d'Afrique où l'on peut marcher et pagayer librement parmi les éléphants, sans guide obligatoire",
      taglineEn: "One of the only parks in Africa where you can walk and paddle freely among elephants, no mandatory guide required",
      taglineEs: "Uno de los únicos parques de África donde se puede caminar y remar libremente entre elefantes, sin guía obligatorio",
      description:
        "Le parc national de Mana Pools, classé à l'UNESCO, doit son nom aux quatre bassins permanents laissés par un ancien méandre du Zambèze, qui attirent une concentration exceptionnelle d'éléphants, de buffles et de lycaons en saison sèche. C'est l'un des rares parcs africains où la marche libre, sans guide obligatoire, reste autorisée — une expérience à hauteur d'homme au milieu de la grande faune.",
      descriptionEn:
        "Mana Pools National Park, a UNESCO World Heritage Site, takes its name from four permanent pools left by an old bend of the Zambezi, which attract an exceptional concentration of elephants, buffalo, and wild dogs in the dry season. It's one of the rare African parks where unguided walking remains permitted — a human-scale experience amid the region's big game.",
      descriptionEs:
        "El parque nacional de Mana Pools, declarado por la UNESCO, debe su nombre a las cuatro lagunas permanentes que dejó un antiguo meandro del Zambeze, que atraen una concentración excepcional de elefantes, búfalos y licaones en la temporada seca. Es uno de los pocos parques africanos donde caminar sin guía sigue estando permitido, una experiencia a escala humana en medio de la gran fauna.",
      price: 4500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mai à oct",
      whenLabelEn: "May to Oct",
      whenLabelEs: "Mayo a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 37,
    },
    sections: [
      {
        heading: "Canoë sur le Zambèze",
        headingEn: "Canoeing on the Zambezi",
        headingEs: "Piragüismo en el Zambeze",
        body:
          "La descente en canoë le long des berges de Mana Pools glisse entre bancs de sable et hauts arbres à gousses où les éléphants se dressent parfois sur leurs pattes arrière pour atteindre les feuillages les plus hauts, un comportement rarement observé ailleurs sur le continent. Les rives, plates et dégagées, offrent une visibilité rare sur la faune qui vient boire au fil de la journée.",
        bodyEn:
          "The canoe trip along Mana Pools' banks glides between sandbanks and tall albida trees, where elephants sometimes rear up on their hind legs to reach the highest foliage, a behaviour rarely seen elsewhere on the continent. The flat, open banks offer unusually clear sightlines onto the wildlife coming down to drink throughout the day.",
        bodyEs:
          "El descenso en canoa a lo largo de las orillas de Mana Pools se desliza entre bancos de arena y altos árboles de albida, donde los elefantes a veces se yerguen sobre sus patas traseras para alcanzar el follaje más alto, un comportamiento pocas veces observado en otras partes del continente. Las orillas, planas y despejadas, ofrecen una visibilidad poco común sobre la fauna que baja a beber a lo largo del día.",
      },
      {
        heading: "Marche libre parmi les lycaons",
        headingEn: "Unguided walking among wild dogs",
        headingEs: "Caminata libre entre licaones",
        body:
          "Mana Pools abrite l'une des populations de lycaons les mieux étudiées d'Afrique, ce prédateur social et hautement menacé qui chasse en meute organisée. La possibilité de marcher librement dans certaines zones du parc, une réglementation unique en Afrique australe, permet une immersion rarement égalée dans le rythme de la brousse, entre empreintes fraîches et alarmes des babouins signalant un prédateur proche.",
        bodyEn:
          "Mana Pools shelters one of the best-studied wild dog populations in Africa, a highly social and endangered predator that hunts in organised packs. The possibility of walking freely in certain zones of the park, a regulation unique in southern Africa, allows for an immersion in the rhythm of the bush rarely matched elsewhere, between fresh tracks and baboon alarm calls signalling a nearby predator.",
        bodyEs:
          "Mana Pools alberga una de las poblaciones de licaones mejor estudiadas de África, un depredador social y muy amenazado que caza en manadas organizadas. La posibilidad de caminar libremente en ciertas zonas del parque, una normativa única en el África austral, permite una inmersión pocas veces igualada en el ritmo del monte, entre huellas frescas y las llamadas de alarma de los babuinos que señalan un depredador cercano.",
      },
    ],
    hotels: [
      {
        name: "Ruckomechi Camp",
        nameEn: "Ruckomechi Camp",
        nameEs: "Ruckomechi Camp",
        description:
          "Un camp de safari en bord de fleuve à l'intérieur du parc, tentes de luxe surélevées avec vue directe sur le Zambèze et la rive zambienne au loin.",
        descriptionEn:
          "A riverside safari camp inside the park, raised luxury tents with a direct view of the Zambezi and the Zambian bank beyond.",
        descriptionEs:
          "Un campamento de safari a orillas del río dentro del parque, tiendas de lujo elevadas con vistas directas al Zambeze y a la orilla zambiana a lo lejos.",
        image: `${R2}/trips/zimbabwe-mana-pools-hotel-ruckomechi.jpg`,
      },
      {
        name: "Zambezi Expeditions Camp",
        nameEn: "Zambezi Expeditions Camp",
        nameEs: "Zambezi Expeditions Camp",
        description:
          "Un camp plus simple et mobile, dédié aux expéditions en canoë de plusieurs jours, équipe de guides spécialisés dans la lecture du comportement des éléphants.",
        descriptionEn:
          "A simpler, mobile camp dedicated to multi-day canoe expeditions, staffed by guides specialised in reading elephant behaviour.",
        descriptionEs:
          "Un campamento más sencillo y móvil, dedicado a las expediciones en canoa de varios días, con un equipo de guías especializados en la lectura del comportamiento de los elefantes.",
        image: `${R2}/trips/zimbabwe-mana-pools-hotel-expeditions.jpg`,
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
