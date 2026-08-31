// Australasie batch 1 (full region) — Nouvelle-Zélande, Australie, Fidji, Polynésie française,
// Nouvelle-Calédonie, Vanuatu, Samoa. New trips bringing each destination to at least 3, styled
// on Black Tomato's real structure (a short number of named-hotel chapters, not an exhaustive
// day-by-day grind) rather than copying their text. This completes all 7 destinations in the
// Australasie region. Run with:
//   npx tsx scripts/seed-trips-australasie-1.ts
// Requires scripts/upload-images-australasie-1.ts to have been run first (this script refuses
// to write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "nouvelle-zelande",
    tour: {
      name: "Nouvelle-Zélande : Abel Tasman et les Marlborough Sounds",
      nameEn: "New Zealand: Abel Tasman and the Marlborough Sounds",
      nameEs: "Nueva Zelanda: Abel Tasman y los Marlborough Sounds",
      slug: "nouvelle-zelande-abeltasman-marlborough",
      image: `${R2}/journeys/nz-abeltasman-marlborough-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le plus petit et le plus ensoleillé des parcs nationaux du pays, puis un dédale de baies noyées taillé dans la roche",
      taglineEn: "The country's smallest and sunniest national park, then a maze of drowned valleys carved into the rock",
      taglineEs: "El parque nacional más pequeño y soleado del país, y después un laberinto de valles inundados tallados en la roca",
      description:
        "Un voyage au sommet de l'île du Sud, loin de Queenstown et du Fiordland : le parc national d'Abel Tasman, le plus petit et le plus ensoleillé du pays, dont les plages de sable doré et les criques bordées de forêt se découvrent en kayak de mer, puis les Marlborough Sounds, réseau de vallées englouties par la montée des eaux il y a des milliers d'années, aujourd'hui labyrinthe de baies calmes propice à la navigation et à la dégustation des vins de la région.",
      descriptionEn:
        "A journey to the top of the South Island, far from Queenstown and Fiordland: Abel Tasman National Park, the country's smallest and sunniest, whose golden-sand beaches and forest-lined coves are best explored by sea kayak, then the Marlborough Sounds, a network of valleys drowned by rising seas thousands of years ago, now a labyrinth of calm bays suited to sailing and tasting the region's wines.",
      descriptionEs:
        "Un viaje a la cima de la isla Sur, lejos de Queenstown y Fiordland: el parque nacional de Abel Tasman, el más pequeño y soleado del país, cuyas playas de arena dorada y calas bordeadas de bosque se descubren en kayak de mar, y después los Marlborough Sounds, red de valles inundados por la subida del mar hace miles de años, hoy un laberinto de bahías tranquilas propicio para la navegación y la degustación de los vinos de la región.",
      price: 3300,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Déc à mars",
      whenLabelEn: "Dec to March",
      whenLabelEs: "Dic a marzo",
      bestMonths: "december,january,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 139,
    },
    chapters: [
      {
        title: "Le parc national d'Abel Tasman",
        titleEn: "Abel Tasman National Park",
        titleEs: "El parque nacional de Abel Tasman",
        intro:
          "Premier chapitre à Abel Tasman, plus petit parc national de Nouvelle-Zélande mais aussi l'un des plus ensoleillés du pays grâce à sa position abritée au nord de l'île du Sud. Ses plages de sable doré, séparées les unes des autres par des promontoires boisés et accessibles uniquement par bateau, à pied ou en kayak de mer, s'étirent sur plus de cinquante kilomètres de littoral préservé, longtemps fréquenté par les Maori pour la pêche avant de devenir un sanctuaire naturel protégé en 1942.",
        introEn:
          "The first chapter unfolds at Abel Tasman, New Zealand's smallest national park but also one of its sunniest thanks to its sheltered position at the top of the South Island. Its golden-sand beaches, separated from one another by wooded headlands and reachable only by boat, on foot, or by sea kayak, stretch over fifty kilometres of preserved coastline, long used by Māori for fishing before becoming a protected nature sanctuary in 1942.",
        introEs:
          "El primer capítulo se desarrolla en Abel Tasman, el parque nacional más pequeño de Nueva Zelanda pero también uno de los más soleados gracias a su posición resguardada en la cima de la isla Sur. Sus playas de arena dorada, separadas entre sí por promontorios boscosos y accesibles solo en barco, a pie o en kayak de mar, se extienden a lo largo de más de cincuenta kilómetros de litoral preservado, frecuentado durante mucho tiempo por los maoríes para la pesca antes de convertirse en santuario natural protegido en 1942.",
        galleryImages: `${R2}/journeys/nz-abeltasman-gallery1.jpg,${R2}/journeys/nz-abeltasman-gallery2.jpg,${R2}/journeys/nz-abeltasman-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Kayak de mer le long des plages dorées",
            titleEn: "Sea kayaking along the golden beaches",
            titleEs: "Kayak de mar por las playas doradas",
            description:
              "Sortie en kayak de mer le long de la côte d'Abel Tasman, entre plages de sable doré et criques isolées, avec une chance d'apercevoir des phoques à fourrure sur les rochers.",
            descriptionEn:
              "A sea kayaking outing along the Abel Tasman coast, between golden-sand beaches and secluded coves, with a chance to spot fur seals on the rocks.",
            descriptionEs:
              "Salida en kayak de mar por la costa de Abel Tasman, entre playas de arena dorada y calas aisladas, con posibilidad de avistar lobos marinos en las rocas.",
            image: `${R2}/journeys/nz-abeltasman-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée sur le sentier côtier",
            titleEn: "A hike along the coastal track",
            titleEs: "Caminata por el sendero costero",
            description:
              "Randonnée sur un tronçon du sentier côtier d'Abel Tasman, l'une des neuf grandes randonnées officielles de Nouvelle-Zélande, à travers forêt native et plages désertes.",
            descriptionEn:
              "A hike along a stretch of the Abel Tasman Coast Track, one of New Zealand's nine official Great Walks, through native forest and deserted beaches.",
            descriptionEs:
              "Caminata por un tramo del sendero costero de Abel Tasman, una de las nueve grandes rutas oficiales de Nueva Zelanda, a través de bosque nativo y playas desiertas.",
            image: `${R2}/journeys/nz-abeltasman-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Les Marlborough Sounds",
        titleEn: "The Marlborough Sounds",
        titleEs: "Los Marlborough Sounds",
        intro:
          "Route vers les Marlborough Sounds, réseau labyrinthique de vallées fluviales englouties par la montée des eaux il y a environ dix mille ans, formant aujourd'hui près de mille cinq cents kilomètres de littoral découpé accessible presque uniquement par bateau. La région abrite également les vignobles de Marlborough, premiers du pays à avoir planté du sauvignon blanc dans les années 1970, aujourd'hui reconnus comme l'une des références mondiales de ce cépage.",
        introEn:
          "The road to the Marlborough Sounds, a labyrinthine network of river valleys drowned by rising seas around ten thousand years ago, forming today nearly fifteen hundred kilometres of jagged coastline accessible almost exclusively by boat. The region is also home to the Marlborough vineyards, the first in the country to plant sauvignon blanc in the 1970s, now recognised as one of the world's benchmarks for the variety.",
        introEs:
          "Ruta hacia los Marlborough Sounds, red laberíntica de valles fluviales inundados por la subida del mar hace unos diez mil años, que forma hoy casi mil quinientos kilómetros de litoral recortado accesible casi exclusivamente en barco. La región alberga también los viñedos de Marlborough, los primeros del país en plantar sauvignon blanc en la década de 1970, hoy reconocidos como una de las referencias mundiales de esta variedad.",
        galleryImages: `${R2}/journeys/nz-marlborough-gallery1.jpg,${R2}/journeys/nz-marlborough-gallery2.jpg,${R2}/journeys/nz-marlborough-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Croisière dans les baies noyées",
            titleEn: "A cruise through the drowned bays",
            titleEs: "Crucero por las bahías inundadas",
            description:
              "Croisière en bateau à travers les Marlborough Sounds, entre baies calmes et péninsules boisées, avec un arrêt dans une ferme d'élevage de moules vertes locales.",
            descriptionEn:
              "A boat cruise through the Marlborough Sounds, among calm bays and wooded peninsulas, with a stop at a local green-lipped mussel farm.",
            descriptionEs:
              "Crucero en barco por los Marlborough Sounds, entre bahías tranquilas y penínsulas boscosas, con parada en una granja local de mejillones verdes.",
            image: `${R2}/journeys/nz-marlborough-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Dégustation dans les vignobles de Marlborough",
            titleEn: "A tasting in the Marlborough vineyards",
            titleEs: "Degustación en los viñedos de Marlborough",
            description:
              "Visite d'un domaine viticole de Marlborough, région pionnière du sauvignon blanc néo-zélandais, dégustation commentée par un vigneron local face aux collines de vignes.",
            descriptionEn:
              "A visit to a Marlborough winery, the pioneering region of New Zealand sauvignon blanc, a guided tasting with a local winemaker facing the vine-covered hills.",
            descriptionEs:
              "Visita a una bodega de Marlborough, región pionera del sauvignon blanc neozelandés, degustación comentada por un viticultor local frente a las colinas de viñedos.",
            image: `${R2}/journeys/nz-marlborough-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

journeyTrips.push(
  {
    destinationSlug: "australie",
    tour: {
      name: "Australie : Tasmanie, Cradle Mountain et Wineglass Bay",
      nameEn: "Australia: Tasmania, Cradle Mountain and Wineglass Bay",
      nameEs: "Australia: Tasmania, Cradle Mountain y Wineglass Bay",
      slug: "australie-tasmanie-cradle-wineglass",
      image: `${R2}/journeys/australie-tasmanie-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une montagne aux allures alpines qui donne son nom à l'une des plus grandes randonnées du pays, puis une baie en forme de verre à vin classée parmi les plus belles plages du monde",
      taglineEn: "An alpine-looking mountain that gives its name to one of the country's great walks, then a wine-glass-shaped bay ranked among the world's finest beaches",
      taglineEs: "Una montaña de aspecto alpino que da nombre a una de las grandes rutas del país, y después una bahía en forma de copa de vino clasificada entre las playas más bellas del mundo",
      description:
        "Un voyage en Tasmanie, île au sud de l'Australie continentale restée largement sauvage : Cradle Mountain, sommet dolomitique qui se reflète dans le lac Dove et donne son nom à l'une des grandes randonnées du pays, puis Wineglass Bay, dans le parc national de Freycinet, dont la courbe parfaite de sable blanc a valu plusieurs fois le titre de plus belle plage du monde décerné par des magazines internationaux.",
      descriptionEn:
        "A journey through Tasmania, an island south of mainland Australia that has remained largely wild: Cradle Mountain, a dolomite peak reflected in Dove Lake and lending its name to one of the country's great walks, then Wineglass Bay, in Freycinet National Park, whose perfect curve of white sand has repeatedly earned the title of the world's most beautiful beach from international magazines.",
      descriptionEs:
        "Un viaje por Tasmania, isla al sur de la Australia continental que ha permanecido en gran parte salvaje: Cradle Mountain, cumbre dolomítica que se refleja en el lago Dove y da nombre a una de las grandes rutas del país, y después Wineglass Bay, en el parque nacional de Freycinet, cuya curva perfecta de arena blanca ha merecido varias veces el título de playa más bella del mundo otorgado por revistas internacionales.",
      price: 3100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Déc à mars",
      whenLabelEn: "Dec to March",
      whenLabelEs: "Dic a marzo",
      bestMonths: "december,january,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 141,
    },
    chapters: [
      {
        title: "Cradle Mountain",
        titleEn: "Cradle Mountain",
        titleEs: "Cradle Mountain",
        intro:
          "Premier chapitre à Cradle Mountain, sommet dolomitique dentelé qui culmine à plus de mille cinq cents mètres et se reflète, par temps calme, dans les eaux sombres du lac Dove en contrebas. La montagne donne son nom à l'Overland Track, l'une des grandes randonnées les plus réputées d'Australie, un sentier de six jours à travers une lande alpine unique, peuplée de wombats, de diables de Tasmanie et de pandanus préhistoriques.",
        introEn:
          "The first chapter unfolds at Cradle Mountain, a jagged dolomite peak rising over fifteen hundred metres and reflected, in calm weather, in the dark waters of Dove Lake below. The mountain lends its name to the Overland Track, one of Australia's most renowned great walks, a six-day trail through a unique alpine moorland home to wombats, Tasmanian devils, and prehistoric pandani plants.",
        introEs:
          "El primer capítulo se desarrolla en Cradle Mountain, cumbre dolomítica dentada que se eleva más de mil quinientos metros y se refleja, con tiempo tranquilo, en las oscuras aguas del lago Dove a sus pies. La montaña da nombre al Overland Track, una de las grandes rutas más reputadas de Australia, sendero de seis días a través de un páramo alpino único, poblado de wombats, demonios de Tasmania y pandani prehistóricos.",
        galleryImages: `${R2}/journeys/australie-cradlemountain-gallery1.jpg,${R2}/journeys/australie-cradlemountain-gallery2.jpg,${R2}/journeys/australie-cradlemountain-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Le tour du lac Dove",
            titleEn: "The Dove Lake circuit",
            titleEs: "El circuito del lago Dove",
            description:
              "Randonnée sur le sentier qui fait le tour du lac Dove, offrant les vues les plus emblématiques sur Cradle Mountain, à travers une forêt tempérée de myrtes antarctiques.",
            descriptionEn:
              "A hike along the trail circling Dove Lake, offering the most iconic views of Cradle Mountain, through a temperate forest of Antarctic beech.",
            descriptionEs:
              "Caminata por el sendero que rodea el lago Dove, con las vistas más emblemáticas de Cradle Mountain, a través de un bosque templado de hayas antárticas.",
            image: `${R2}/journeys/australie-cradlemountain-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "À la recherche des diables de Tasmanie",
            titleEn: "In search of Tasmanian devils",
            titleEs: "En busca de los demonios de Tasmania",
            description:
              "Sortie nocturne guidée à la recherche de la faune nocturne de la région, dont le diable de Tasmanie, marsupial carnivore emblématique de l'île aujourd'hui menacé.",
            descriptionEn:
              "A guided night outing in search of the region's nocturnal wildlife, including the Tasmanian devil, the island's emblematic and now endangered carnivorous marsupial.",
            descriptionEs:
              "Salida nocturna guiada en busca de la fauna nocturna de la región, incluido el demonio de Tasmania, marsupial carnívoro emblemático de la isla hoy amenazado.",
            image: `${R2}/journeys/australie-cradlemountain-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Wineglass Bay et le parc de Freycinet",
        titleEn: "Wineglass Bay and Freycinet National Park",
        titleEs: "Wineglass Bay y el parque de Freycinet",
        intro:
          "Route vers la côte est jusqu'au parc national de Freycinet, où la baie de Wineglass Bay doit son nom à sa forme parfaite de verre à vin, courbe de sable blanc immaculé encadrée par des collines de granit rose. Plusieurs fois désignée parmi les plus belles plages du monde par des magazines internationaux, la baie reste accessible uniquement par un sentier de randonnée depuis un point de vue en surplomb, ce qui préserve son isolement malgré sa notoriété.",
        introEn:
          "The road to the east coast and Freycinet National Park, where Wineglass Bay owes its name to its perfect wine-glass shape, a curve of immaculate white sand framed by pink granite hills. Repeatedly named among the world's most beautiful beaches by international magazines, the bay remains accessible only via a hiking trail from an overlooking viewpoint, which preserves its isolation despite its fame.",
        introEs:
          "Ruta hacia la costa este hasta el parque nacional de Freycinet, donde la bahía de Wineglass Bay debe su nombre a su forma perfecta de copa de vino, curva de arena blanca inmaculada enmarcada por colinas de granito rosa. Nombrada varias veces entre las playas más bellas del mundo por revistas internacionales, la bahía sigue siendo accesible solo por un sendero de excursión desde un mirador, lo que preserva su aislamiento pese a su fama.",
        galleryImages: `${R2}/journeys/australie-wineglassbay-gallery1.jpg,${R2}/journeys/australie-wineglassbay-gallery2.jpg,${R2}/journeys/australie-wineglassbay-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 50,
        days: [
          {
            dayNumber: 1,
            title: "Le point de vue sur Wineglass Bay",
            titleEn: "The Wineglass Bay lookout",
            titleEs: "El mirador de Wineglass Bay",
            description:
              "Randonnée jusqu'au point de vue sur Wineglass Bay, offrant la vue classique sur sa courbe parfaite de sable blanc, puis descente jusqu'à la plage elle-même pour un bain dans les eaux cristallines.",
            descriptionEn:
              "A hike to the Wineglass Bay lookout, offering the classic view over its perfect curve of white sand, then a descent to the beach itself for a swim in the crystal-clear waters.",
            descriptionEs:
              "Caminata hasta el mirador de Wineglass Bay, con la vista clásica de su curva perfecta de arena blanca, y descenso hasta la propia playa para un baño en las aguas cristalinas.",
            image: `${R2}/journeys/australie-wineglassbay-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Kayak de mer autour de la péninsule de Freycinet",
            titleEn: "Sea kayaking around the Freycinet Peninsula",
            titleEs: "Kayak de mar alrededor de la península de Freycinet",
            description:
              "Sortie en kayak de mer autour de la péninsule de Freycinet, entre collines de granit rose plongeant dans l'eau turquoise, avec observation possible de dauphins.",
            descriptionEn:
              "A sea kayaking outing around the Freycinet Peninsula, between pink granite hills plunging into turquoise water, with a chance to spot dolphins.",
            descriptionEs:
              "Salida en kayak de mar alrededor de la península de Freycinet, entre colinas de granito rosa que se sumergen en agua turquesa, con posibilidad de avistar delfines.",
            image: `${R2}/journeys/australie-wineglassbay-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "fidji",
    tour: {
      name: "Fidji : les îles Yasawa et le village traditionnel",
      nameEn: "Fiji: The Yasawa Islands and the Traditional Village",
      nameEs: "Fiyi: las islas Yasawa y el pueblo tradicional",
      slug: "fidji-yasawa-village",
      image: `${R2}/journeys/fidji-yasawa-village-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un chapelet d'îles volcaniques immortalisées par le cinéma, puis une cérémonie du kava au cœur d'un village encore régi par les chefs coutumiers",
      taglineEn: "A string of volcanic islands immortalised on film, then a kava ceremony at the heart of a village still governed by customary chiefs",
      taglineEs: "Un collar de islas volcánicas inmortalizadas por el cine, y después una ceremonia de kava en el corazón de un pueblo todavía regido por jefes consuetudinarios",
      description:
        "Un voyage entre deux facettes des Fidji, loin des Mamanuca : les Yasawa, chapelet de seize îles volcaniques aux eaux turquoise qui servirent de décor au film Le Lagon bleu, puis un village traditionnel fidjien où la vie communautaire reste organisée autour du chef coutumier et où la cérémonie du kava, breuvage aux vertus relaxantes préparé à partir d'une racine locale, marque encore l'accueil de tout visiteur.",
      descriptionEn:
        "A journey between two sides of Fiji, far from the Mamanuca: the Yasawas, a string of sixteen volcanic islands with turquoise waters that served as the backdrop for the film The Blue Lagoon, then a traditional Fijian village where communal life remains organised around the customary chief and where the kava ceremony, a relaxing drink prepared from a local root, still marks the welcome of every visitor.",
      descriptionEs:
        "Un viaje entre dos caras de Fiyi, lejos de las Mamanuca: las Yasawa, collar de dieciséis islas volcánicas de aguas turquesas que sirvieron de escenario a la película La laguna azul, y después un pueblo tradicional fiyiano donde la vida comunitaria sigue organizada en torno al jefe consuetudinario y donde la ceremonia del kava, bebida de propiedades relajantes preparada a partir de una raíz local, todavía marca la bienvenida a todo visitante.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mai à oct",
      whenLabelEn: "May to Oct",
      whenLabelEs: "May a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 143,
    },
    chapters: [
      {
        title: "Les îles Yasawa",
        titleEn: "The Yasawa Islands",
        titleEs: "Las islas Yasawa",
        intro:
          "Premier chapitre aux Yasawa, chapelet de seize îles volcaniques au nord-ouest de Viti Levu, longtemps interdites d'accès aux étrangers avant l'ouverture progressive du tourisme dans les années 1980. Ces îles aux eaux turquoise et aux plages désertes ont servi de décor au tournage du film Le Lagon bleu en 1980, contribuant à leur notoriété internationale sans pour autant entamer l'authenticité des villages de pêcheurs qui continuent d'y vivre au rythme des marées.",
        introEn:
          "The first chapter unfolds in the Yasawas, a string of sixteen volcanic islands north-west of Viti Levu, long off-limits to foreigners before tourism gradually opened up in the 1980s. These islands with turquoise waters and deserted beaches served as the backdrop for the film The Blue Lagoon in 1980, contributing to their international fame without eroding the authenticity of the fishing villages that continue to live there by the rhythm of the tides.",
        introEs:
          "El primer capítulo se desarrolla en las Yasawa, collar de dieciséis islas volcánicas al noroeste de Viti Levu, vetadas durante mucho tiempo a los extranjeros antes de que el turismo se abriera progresivamente en la década de 1980. Estas islas de aguas turquesas y playas desiertas sirvieron de escenario al rodaje de la película La laguna azul en 1980, contribuyendo a su fama internacional sin mermar la autenticidad de los pueblos de pescadores que siguen viviendo allí al ritmo de las mareas.",
        galleryImages: `${R2}/journeys/fidji-yasawa-gallery1.jpg,${R2}/journeys/fidji-yasawa-gallery2.jpg,${R2}/journeys/fidji-yasawa-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Snorkeling dans la grotte bleue de Sawa-i-Lau",
            titleEn: "Snorkelling in the Sawa-i-Lau blue cave",
            titleEs: "Esnórquel en la cueva azul de Sawa-i-Lau",
            description:
              "Baignade dans la grotte calcaire de Sawa-i-Lau, dont l'ouverture au sommet laisse filtrer une lumière bleutée sur l'eau, lieu sacré selon les croyances fidjiennes locales.",
            descriptionEn:
              "A swim in the limestone cave of Sawa-i-Lau, whose ceiling opening lets a blue-tinted light filter onto the water, a sacred site according to local Fijian beliefs.",
            descriptionEs:
              "Baño en la cueva caliza de Sawa-i-Lau, cuya apertura superior deja filtrar una luz azulada sobre el agua, lugar sagrado según las creencias fiyianas locales.",
            image: `${R2}/journeys/fidji-yasawa-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Navigation entre les îles volcaniques",
            titleEn: "Sailing among the volcanic islands",
            titleEs: "Navegación entre las islas volcánicas",
            description:
              "Sortie en bateau entre plusieurs îles de l'archipel des Yasawa, arrêts snorkeling sur des récifs coralliens préservés et plage isolée pour un déjeuner de fruits de mer.",
            descriptionEn:
              "A boat trip among several islands of the Yasawa archipelago, snorkelling stops on preserved coral reefs, and a secluded beach for a seafood lunch.",
            descriptionEs:
              "Salida en barco entre varias islas del archipiélago de las Yasawa, paradas para esnorquelear en arrecifes de coral preservados y playa aislada para un almuerzo de marisco.",
            image: `${R2}/journeys/fidji-yasawa-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Un village traditionnel fidjien",
        titleEn: "A Traditional Fijian Village",
        titleEs: "Un pueblo tradicional fiyiano",
        intro:
          "Visite d'un village traditionnel fidjien, où la vie communautaire reste organisée autour du chef coutumier et où chaque visiteur est accueilli par une cérémonie du kava, breuvage préparé à partir de la racine pilée d'une plante locale et partagé selon un rituel précis qui remonte à plusieurs siècles. Cette tradition, encore pleinement vivante dans les villages ruraux de l'archipel, scelle symboliquement l'accueil de l'étranger dans la communauté.",
        introEn:
          "A visit to a traditional Fijian village, where communal life remains organised around the customary chief and where every visitor is welcomed with a kava ceremony, a drink prepared from the crushed root of a local plant and shared according to a precise ritual dating back several centuries. This tradition, still fully alive in the archipelago's rural villages, symbolically seals the welcome of the outsider into the community.",
        introEs:
          "Visita a un pueblo tradicional fiyiano, donde la vida comunitaria sigue organizada en torno al jefe consuetudinario y donde cada visitante es recibido con una ceremonia de kava, bebida preparada a partir de la raíz machacada de una planta local y compartida según un ritual preciso que se remonta varios siglos. Esta tradición, todavía plenamente viva en los pueblos rurales del archipiélago, sella simbólicamente la bienvenida del forastero en la comunidad.",
        galleryImages: `${R2}/journeys/fidji-village-gallery1.jpg,${R2}/journeys/fidji-village-gallery2.jpg,${R2}/journeys/fidji-village-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "La cérémonie du kava et l'accueil du village",
            titleEn: "The kava ceremony and village welcome",
            titleEs: "La ceremonia del kava y la bienvenida del pueblo",
            description:
              "Participation à une cérémonie du kava traditionnelle, accueil par le chef du village selon un protocole coutumier précis, suivi d'une visite guidée des habitations communautaires.",
            descriptionEn:
              "Participation in a traditional kava ceremony, a welcome from the village chief following a precise customary protocol, followed by a guided visit of the communal dwellings.",
            descriptionEs:
              "Participación en una ceremonia tradicional de kava, bienvenida del jefe del pueblo según un protocolo consuetudinario preciso, seguida de una visita guiada a las viviendas comunitarias.",
            image: `${R2}/journeys/fidji-village-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Chants et danses meke au coucher du soleil",
            titleEn: "Meke songs and dances at sunset",
            titleEs: "Cantos y danzas meke al atardecer",
            description:
              "Assistance à une représentation de meke, chants et danses traditionnels fidjiens racontant des légendes locales, organisée au coucher du soleil sur la plage du village.",
            descriptionEn:
              "Attendance at a performance of meke, traditional Fijian songs and dances recounting local legends, held at sunset on the village beach.",
            descriptionEs:
              "Asistencia a una representación de meke, cantos y danzas tradicionales fiyianas que narran leyendas locales, organizada al atardecer en la playa del pueblo.",
            image: `${R2}/journeys/fidji-village-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

journeyTrips.push(
  {
    destinationSlug: "polynesie-francaise",
    tour: {
      name: "Polynésie française : Rangiroa et Moorea",
      nameEn: "French Polynesia: Rangiroa and Moorea",
      nameEs: "Polinesia Francesa: Rangiroa y Moorea",
      slug: "polynesie-francaise-rangiroa-moorea",
      image: `${R2}/journeys/polynesie-rangiroa-moorea-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "L'un des plus grands atolls au monde, où des centaines de requins gris patrouillent une passe naturelle, puis une baie en forme de cœur",
      taglineEn: "One of the world's largest atolls, where hundreds of grey sharks patrol a natural pass, then a heart-shaped bay",
      taglineEs: "Uno de los atolones más grandes del mundo, donde cientos de tiburones grises patrullan un paso natural, y después una bahía en forma de corazón",
      description:
        "Un voyage entre deux visages de la Polynésie française, loin de Bora Bora : Rangiroa, deuxième plus grand atoll au monde dont la passe de Tiputa concentre l'une des plus fortes densités de requins gris de récif de tout le Pacifique, puis Moorea, île sœur de Tahiti dont la baie de Cook, en forme de cœur, est encadrée par des pics volcaniques abrupts qui plongent directement dans un lagon turquoise.",
      descriptionEn:
        "A journey between two faces of French Polynesia, far from Bora Bora: Rangiroa, the world's second-largest atoll, whose Tiputa Pass concentrates one of the highest densities of grey reef sharks in the entire Pacific, then Moorea, Tahiti's sister island, whose heart-shaped Cook's Bay is framed by sheer volcanic peaks plunging straight into a turquoise lagoon.",
      descriptionEs:
        "Un viaje entre dos caras de la Polinesia Francesa, lejos de Bora Bora: Rangiroa, segundo atolón más grande del mundo, cuyo paso de Tiputa concentra una de las mayores densidades de tiburones grises de arrecife de todo el Pacífico, y después Moorea, isla hermana de Tahití, cuya bahía de Cook, en forma de corazón, está enmarcada por escarpados picos volcánicos que se sumergen directamente en una laguna turquesa.",
      price: 4200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Mai à oct",
      whenLabelEn: "May to Oct",
      whenLabelEs: "May a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 145,
    },
    chapters: [
      {
        title: "Rangiroa et la passe de Tiputa",
        titleEn: "Rangiroa and Tiputa Pass",
        titleEs: "Rangiroa y el paso de Tiputa",
        intro:
          "Premier chapitre à Rangiroa, deuxième plus grand atoll au monde après celui de Kwajalein dans les îles Marshall, dont le lagon intérieur est si vaste que l'île de Tahiti tout entière pourrait y tenir. La passe de Tiputa, l'un des deux points d'entrée de l'océan dans le lagon, concentre grâce à ses forts courants nourriciers l'une des plus fortes densités de requins gris de récif au monde, offrant des conditions de plongée dérivante exceptionnelles.",
        introEn:
          "The first chapter unfolds at Rangiroa, the world's second-largest atoll after Kwajalein in the Marshall Islands, whose inner lagoon is so vast that the entire island of Tahiti could fit inside it. Tiputa Pass, one of two points where the ocean enters the lagoon, concentrates, thanks to its nutrient-rich currents, one of the highest densities of grey reef sharks in the world, offering exceptional drift-diving conditions.",
        introEs:
          "El primer capítulo se desarrolla en Rangiroa, segundo atolón más grande del mundo tras el de Kwajalein en las islas Marshall, cuya laguna interior es tan vasta que toda la isla de Tahití cabría en ella. El paso de Tiputa, uno de los dos puntos de entrada del océano a la laguna, concentra, gracias a sus corrientes ricas en nutrientes, una de las mayores densidades de tiburones grises de arrecife del mundo, ofreciendo condiciones excepcionales para el buceo de deriva.",
        galleryImages: `${R2}/journeys/polynesie-rangiroa-gallery1.jpg,${R2}/journeys/polynesie-rangiroa-gallery2.jpg,${R2}/journeys/polynesie-rangiroa-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Plongée dérivante dans la passe de Tiputa",
            titleEn: "Drift diving in Tiputa Pass",
            titleEs: "Buceo de deriva en el paso de Tiputa",
            description:
              "Plongée dérivante dans la passe de Tiputa, portée par le courant entrant, à la rencontre de centaines de requins gris de récif et parfois de dauphins qui viennent y jouer.",
            descriptionEn:
              "A drift dive in Tiputa Pass, carried by the incoming current, encountering hundreds of grey reef sharks and sometimes dolphins that come to play there.",
            descriptionEs:
              "Buceo de deriva en el paso de Tiputa, arrastrado por la corriente entrante, al encuentro de cientos de tiburones grises de arrecife y a veces delfines que acuden a jugar allí.",
            image: `${R2}/journeys/polynesie-rangiroa-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Snorkeling dans le lagon bleu",
            titleEn: "Snorkelling in the blue lagoon",
            titleEs: "Esnórquel en la laguna azul",
            description:
              "Excursion en bateau vers le lagon bleu, bassin naturel isolé à l'intérieur même de l'atoll, snorkeling parmi une vie corallienne préservée loin de tout autre visiteur.",
            descriptionEn:
              "A boat excursion to the blue lagoon, a natural pool isolated within the atoll itself, snorkelling among preserved coral life far from any other visitor.",
            descriptionEs:
              "Excursión en barco hacia la laguna azul, piscina natural aislada dentro del propio atolón, esnórquel entre una vida coralina preservada lejos de cualquier otro visitante.",
            image: `${R2}/journeys/polynesie-rangiroa-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Moorea, l'île en forme de cœur",
        titleEn: "Moorea, the Heart-Shaped Island",
        titleEs: "Moorea, la isla en forma de corazón",
        intro:
          "Vol vers Moorea, île sœur de Tahiti dont la silhouette caractéristique, vue du ciel, évoque un cœur bordé de deux baies profondes, celle de Cook et celle d'Opunohu, encadrées par des pics volcaniques vieux de plus de deux millions d'années. Contrairement à Bora Bora, Moorea a conservé une population locale importante et une agriculture active, notamment de vanille et d'ananas, qui se mêle sans effort à un tourisme resté à taille humaine.",
        introEn:
          "A flight to Moorea, Tahiti's sister island whose characteristic silhouette, seen from the air, evokes a heart bordered by two deep bays, Cook's Bay and Opunohu Bay, framed by volcanic peaks over two million years old. Unlike Bora Bora, Moorea has retained a substantial local population and active agriculture, notably vanilla and pineapple, which blends effortlessly with tourism that has stayed human-scale.",
        introEs:
          "Vuelo hacia Moorea, isla hermana de Tahití cuya silueta característica, vista desde el aire, evoca un corazón bordeado por dos bahías profundas, la de Cook y la de Opunohu, enmarcadas por picos volcánicos de más de dos millones de años. A diferencia de Bora Bora, Moorea ha conservado una población local importante y una agricultura activa, en particular de vainilla y piña, que se mezcla sin esfuerzo con un turismo que ha mantenido una escala humana.",
        galleryImages: `${R2}/journeys/polynesie-moorea-gallery1.jpg,${R2}/journeys/polynesie-moorea-gallery2.jpg,${R2}/journeys/polynesie-moorea-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Le belvédère et les baies jumelles",
            titleEn: "The lookout and the twin bays",
            titleEs: "El mirador y las bahías gemelas",
            description:
              "Route vers le belvédère de Moorea, point de vue offrant une vision simultanée sur les baies de Cook et d'Opunohu encadrées par les pics volcaniques du Mont Rotui.",
            descriptionEn:
              "A drive to the Moorea lookout, a viewpoint offering a simultaneous view over Cook's Bay and Opunohu Bay, framed by the volcanic peaks of Mount Rotui.",
            descriptionEs:
              "Ruta hacia el mirador de Moorea, punto de vista que ofrece una visión simultánea de las bahías de Cook y Opunohu, enmarcadas por los picos volcánicos del monte Rotui.",
            image: `${R2}/journeys/polynesie-moorea-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Nage avec les raies pastenagues",
            titleEn: "Swimming with stingrays",
            titleEs: "Nadar con rayas látigo",
            description:
              "Sortie en bateau vers un banc de sable peu profond du lagon de Moorea, où raies pastenagues et requins à pointe noire s'approchent naturellement des nageurs en toute sécurité.",
            descriptionEn:
              "A boat trip to a shallow sandbank in Moorea's lagoon, where stingrays and blacktip reef sharks naturally approach swimmers in complete safety.",
            descriptionEs:
              "Salida en barco hacia un banco de arena poco profundo de la laguna de Moorea, donde rayas látigo y tiburones de punta negra se acercan de forma natural a los nadadores con total seguridad.",
            image: `${R2}/journeys/polynesie-moorea-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "nouvelle-caledonie",
    tour: {
      name: "Nouvelle-Calédonie : la rivière Bleue et une tribu du Nord",
      nameEn: "New Caledonia: The Blue River and a Northern Tribe",
      nameEs: "Nueva Caledonia: el río Azul y una tribu del Norte",
      slug: "nouvelle-caledonie-riviere-bleue-tribu",
      image: `${R2}/journeys/nc-riviere-bleue-tribu-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une forêt hantée par des troncs pétrifiés qui abrite l'oiseau national menacé, puis une tribu kanak qui perpétue la coutume",
      taglineEn: "A forest haunted by petrified trunks that shelters the endangered national bird, then a Kanak tribe carrying on custom",
      taglineEs: "Un bosque poblado de troncos petrificados que alberga el ave nacional en peligro, y después una tribu canaca que perpetúa la costumbre",
      description:
        "Un voyage dans l'intérieur sauvage de la Grande Terre, loin de Nouméa et de l'Île des Pins : le parc de la rivière Bleue, forêt tropicale humide où se dressent des troncs de kaoris pétrifiés par la montée des eaux d'un lac de barrage, refuge du cagou, oiseau emblématique incapable de voler menacé d'extinction, puis une tribu kanak de la province Nord où la coutume, système de dons et de rituels ancestraux, continue de régir la vie sociale.",
      descriptionEn:
        "A journey into the wild interior of Grande Terre, far from Nouméa and the Isle of Pines: Blue River Park, a humid tropical forest where petrified kauri trunks stand, drowned by the rising waters of a dam lake, a refuge for the cagou, an emblematic flightless bird threatened with extinction, then a Kanak tribe in the Northern Province, where custom, a system of ancestral gifts and rituals, continues to govern social life.",
      descriptionEs:
        "Un viaje al salvaje interior de la Grande Terre, lejos de Numea y de la Isla de los Pinos: el parque del río Azul, selva tropical húmeda donde se alzan troncos de kauri petrificados por la subida de las aguas de un lago de presa, refugio del cagú, emblemática ave incapaz de volar amenazada de extinción, y después una tribu canaca de la provincia Norte, donde la costumbre, sistema de dones y rituales ancestrales, sigue rigiendo la vida social.",
      price: 3000,
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
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 147,
    },
    chapters: [
      {
        title: "Le parc de la rivière Bleue",
        titleEn: "Blue River Park",
        titleEs: "El parque del río Azul",
        intro:
          "Premier chapitre au parc provincial de la rivière Bleue, forêt tropicale humide qui s'étend autour d'un lac artificiel créé dans les années 1950 pour l'hydroélectricité, dont la montée des eaux a noyé et pétrifié des centaines de kaoris, arbres géants endémiques dont certains troncs émergent encore aujourd'hui de la surface. Le parc constitue également le principal refuge du cagou, oiseau national incapable de voler dont le cri nocturne particulier lui a valu le surnom de « chien qui aboie » chez les premiers colons.",
        introEn:
          "The first chapter unfolds at Blue River Provincial Park, a humid tropical forest spreading around an artificial lake created in the 1950s for hydroelectricity, whose rising waters drowned and petrified hundreds of kauri, giant endemic trees, some of whose trunks still emerge from the surface today. The park is also the main refuge of the cagou, the national flightless bird whose distinctive nocturnal cry earned it the nickname \"barking dog\" among early settlers.",
        introEs:
          "El primer capítulo se desarrolla en el parque provincial del río Azul, selva tropical húmeda que se extiende en torno a un lago artificial creado en la década de 1950 para la hidroelectricidad, cuya subida de las aguas ahogó y petrificó cientos de kauris, árboles gigantes endémicos, algunos de cuyos troncos todavía emergen hoy de la superficie. El parque constituye además el principal refugio del cagú, ave nacional incapaz de volar cuyo peculiar canto nocturno le valió el apodo de «perro que ladra» entre los primeros colonos.",
        galleryImages: `${R2}/journeys/nc-rivierebleue-gallery1.jpg,${R2}/journeys/nc-rivierebleue-gallery2.jpg,${R2}/journeys/nc-rivierebleue-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "La forêt aux kaoris pétrifiés",
            titleEn: "The petrified kauri forest",
            titleEs: "El bosque de kauris petrificados",
            description:
              "Randonnée à travers la forêt de la rivière Bleue, à la découverte des troncs de kaoris pétrifiés émergeant du lac de barrage, vestiges d'une forêt engloutie il y a plusieurs décennies.",
            descriptionEn:
              "A hike through the Blue River forest, discovering the petrified kauri trunks emerging from the dam lake, remnants of a forest submerged several decades ago.",
            descriptionEs:
              "Caminata por el bosque del río Azul, para descubrir los troncos de kauris petrificados que emergen del lago de la presa, vestigios de un bosque sumergido hace varias décadas.",
            image: `${R2}/journeys/nc-rivierebleue-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "À la recherche du cagou",
            titleEn: "In search of the cagou",
            titleEs: "En busca del cagú",
            description:
              "Sortie matinale guidée à la recherche du cagou, oiseau national incapable de voler et menacé d'extinction, dans l'une des dernières zones de forêt primaire préservée de la Grande Terre.",
            descriptionEn:
              "A guided morning outing in search of the cagou, the flightless national bird threatened with extinction, in one of the last preserved areas of primary forest on Grande Terre.",
            descriptionEs:
              "Salida matutina guiada en busca del cagú, ave nacional incapaz de volar y amenazada de extinción, en una de las últimas zonas de bosque primario preservado de la Grande Terre.",
            image: `${R2}/journeys/nc-rivierebleue-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Une tribu kanak de la province Nord",
        titleEn: "A Kanak Tribe of the Northern Province",
        titleEs: "Una tribu canaca de la provincia Norte",
        intro:
          "Route vers la province Nord de la Grande Terre, à la rencontre d'une tribu kanak où la coutume, système de dons rituels et d'obligations sociales transmis depuis des générations, continue de structurer la vie communautaire aux côtés des institutions modernes. La visite débute traditionnellement par un geste coutumier de présentation, offrande symbolique remise au chef pour solliciter l'autorisation de pénétrer sur les terres tribales.",
        introEn:
          "The road to the Northern Province of Grande Terre, to meet a Kanak tribe where custom, a system of ritual gifts and social obligations passed down through generations, continues to structure communal life alongside modern institutions. The visit traditionally begins with a customary gesture of introduction, a symbolic offering presented to the chief to request permission to enter tribal lands.",
        introEs:
          "Ruta hacia la provincia Norte de la Grande Terre, al encuentro de una tribu canaca donde la costumbre, sistema de dones rituales y obligaciones sociales transmitido durante generaciones, sigue estructurando la vida comunitaria junto a las instituciones modernas. La visita comienza tradicionalmente con un gesto consuetudinario de presentación, ofrenda simbólica entregada al jefe para solicitar autorización para entrar en las tierras tribales.",
        galleryImages: `${R2}/journeys/nc-tribu-gallery1.jpg,${R2}/journeys/nc-tribu-gallery2.jpg,${R2}/journeys/nc-tribu-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Le geste coutumier et la case traditionnelle",
            titleEn: "The customary gesture and the traditional hut",
            titleEs: "El gesto consuetudinario y la choza tradicional",
            description:
              "Accueil dans la tribu selon le geste coutumier traditionnel, visite de la grande case ronde du chef et explication du système de la coutume qui régit encore la vie sociale kanak.",
            descriptionEn:
              "A welcome into the tribe following the traditional customary gesture, a visit to the chief's great round hut, and an explanation of the custom system that still governs Kanak social life.",
            descriptionEs:
              "Recibimiento en la tribu según el gesto consuetudinario tradicional, visita a la gran choza redonda del jefe y explicación del sistema de la costumbre que todavía rige la vida social canaca.",
            image: `${R2}/journeys/nc-tribu-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Préparation du bougna, plat traditionnel",
            titleEn: "Preparing bougna, a traditional dish",
            titleEs: "Preparación del bougna, plato tradicional",
            description:
              "Participation à la préparation du bougna, plat traditionnel kanak cuit à l'étouffée dans des feuilles de bananier sur des pierres chauffées, partagé en famille selon la coutume locale.",
            descriptionEn:
              "Participation in preparing bougna, a traditional Kanak dish steamed in banana leaves over heated stones, shared with the family according to local custom.",
            descriptionEs:
              "Participación en la preparación del bougna, plato tradicional canaco cocido al vapor en hojas de plátano sobre piedras calientes, compartido en familia según la costumbre local.",
            image: `${R2}/journeys/nc-tribu-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

journeyTrips.push(
  {
    destinationSlug: "vanuatu",
    tour: {
      name: "Vanuatu : Pentecôte et le volcan Ambrym",
      nameEn: "Vanuatu: Pentecost and the Ambrym Volcano",
      nameEs: "Vanuatu: Pentecostés y el volcán Ambrym",
      slug: "vanuatu-pentecost-ambrym",
      image: `${R2}/journeys/vanuatu-pentecost-ambrym-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un saut rituel depuis une tour de bois, ancêtre du saut à l'élastique, puis une île volcanique deux fois active gardée par des sorciers réputés",
      taglineEn: "A ritual leap from a wooden tower, the ancestor of bungee jumping, then a twice-active volcanic island watched over by reputed sorcerers",
      taglineEs: "Un salto ritual desde una torre de madera, antepasado del puenting, y después una isla volcánica doblemente activa vigilada por reputados hechiceros",
      description:
        "Un voyage entre deux facettes spectaculaires du Vanuatu, loin de Port-Vila et du mont Yasur : l'île de Pentecôte, où les hommes sautent chaque printemps depuis des tours de bois de plus de vingt mètres avec pour seule protection des lianes attachées aux chevilles, rituel ancestral qui inspira le saut à l'élastique moderne, puis Ambrym, l'une des rares îles au monde à abriter deux volcans actifs simultanément et réputée pour ses traditions de sculpture sur bois et de magie noire.",
      descriptionEn:
        "A journey between two spectacular sides of Vanuatu, far from Port Vila and Mount Yasur: Pentecost Island, where men leap each spring from wooden towers over twenty metres tall with only vines tied to their ankles for protection, an ancestral ritual that inspired modern bungee jumping, then Ambrym, one of the rare islands in the world to shelter two active volcanoes simultaneously and renowned for its woodcarving and black magic traditions.",
      descriptionEs:
        "Un viaje entre dos caras espectaculares de Vanuatu, lejos de Port Vila y del monte Yasur: la isla de Pentecostés, donde los hombres saltan cada primavera desde torres de madera de más de veinte metros con lianas atadas a los tobillos como única protección, ritual ancestral que inspiró el moderno puenting, y después Ambrym, una de las pocas islas del mundo que alberga dos volcanes activos simultáneamente y célebre por sus tradiciones de escultura en madera y magia negra.",
      price: 3400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avril à juin",
      whenLabelEn: "April to June",
      whenLabelEs: "Abril a junio",
      bestMonths: "april,may,june",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 149,
    },
    chapters: [
      {
        title: "Pentecôte et le naghol",
        titleEn: "Pentecost and the Naghol",
        titleEs: "Pentecostés y el naghol",
        intro:
          "Premier chapitre sur l'île de Pentecôte, où se pratique chaque année entre avril et juin le naghol, rituel de saut depuis une tour de bois pouvant dépasser vingt mètres, effectué avec pour seule protection des lianes de liane sauvage attachées aux chevilles et calculées au centimètre près pour freiner la chute juste avant le sol. Ce rituel, lié à la fertilité des récoltes d'ignames selon la tradition locale, aurait directement inspiré le saut à l'élastique moderne après avoir été popularisé par un reportage télévisé néo-zélandais dans les années 1970.",
        introEn:
          "The first chapter unfolds on Pentecost Island, where the naghol is practised every year between April and June, a ritual leap from a wooden tower that can exceed twenty metres, made with only wild vines tied to the ankles for protection, calculated to the centimetre to brake the fall just before the ground. This ritual, linked to yam harvest fertility according to local tradition, is said to have directly inspired modern bungee jumping after being popularised by a New Zealand television report in the 1970s.",
        introEs:
          "El primer capítulo se desarrolla en la isla de Pentecostés, donde se practica cada año entre abril y junio el naghol, ritual de salto desde una torre de madera que puede superar los veinte metros, realizado con lianas silvestres atadas a los tobillos como única protección, calculadas al centímetro para frenar la caída justo antes del suelo. Este ritual, ligado a la fertilidad de las cosechas de ñame según la tradición local, habría inspirado directamente el moderno puenting tras ser popularizado por un reportaje de televisión neozelandés en la década de 1970.",
        galleryImages: `${R2}/journeys/vanuatu-pentecost-gallery1.jpg,${R2}/journeys/vanuatu-pentecost-gallery2.jpg,${R2}/journeys/vanuatu-pentecost-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 35,
        days: [
          {
            dayNumber: 1,
            title: "Assister au naghol, le saut rituel",
            titleEn: "Witnessing the naghol, the ritual leap",
            titleEs: "Presenciar el naghol, el salto ritual",
            description:
              "Assistance à une cérémonie de naghol, saut rituel depuis une tour de bois pratiqué par les hommes du village pour assurer la fertilité des récoltes d'ignames, sous le regard de la communauté rassemblée.",
            descriptionEn:
              "Attendance at a naghol ceremony, a ritual leap from a wooden tower practised by the village's men to ensure the fertility of the yam harvest, watched by the gathered community.",
            descriptionEs:
              "Asistencia a una ceremonia de naghol, salto ritual desde una torre de madera practicado por los hombres del pueblo para asegurar la fertilidad de las cosechas de ñame, ante la mirada de la comunidad reunida.",
            image: `${R2}/journeys/vanuatu-pentecost-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Rencontre avec les bâtisseurs de tours",
            titleEn: "Meeting the tower builders",
            titleEs: "Encuentro con los constructores de torres",
            description:
              "Visite du village pour rencontrer les bâtisseurs de la tour de naghol, qui perpétuent un savoir-faire transmis oralement sur le choix du bois et le calcul précis de la longueur des lianes.",
            descriptionEn:
              "A visit to the village to meet the builders of the naghol tower, who carry on skills passed down orally on choosing the wood and precisely calculating the length of the vines.",
            descriptionEs:
              "Visita al pueblo para conocer a los constructores de la torre de naghol, que perpetúan un saber transmitido oralmente sobre la elección de la madera y el cálculo preciso de la longitud de las lianas.",
            image: `${R2}/journeys/vanuatu-pentecost-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Ambrym, l'île aux deux volcans",
        titleEn: "Ambrym, the Island of Two Volcanoes",
        titleEs: "Ambrym, la isla de los dos volcanes",
        intro:
          "Vol vers Ambrym, l'une des rares îles au monde à abriter deux volcans actifs simultanément, le Marum et le Benbow, dont les lacs de lave visibles depuis le sommet comptent parmi les plus accessibles de la planète. L'île est également réputée dans tout le Vanuatu pour ses traditions de sculpture sur bois et de magie noire, un savoir-faire transmis de génération en génération et associé à des cérémonies secrètes réservées aux initiés.",
        introEn:
          "A flight to Ambrym, one of the rare islands in the world sheltering two simultaneously active volcanoes, Marum and Benbow, whose lava lakes visible from the summit rank among the most accessible on the planet. The island is also renowned throughout Vanuatu for its woodcarving and black magic traditions, a craft passed down through generations and associated with secret ceremonies reserved for initiates.",
        introEs:
          "Vuelo hacia Ambrym, una de las pocas islas del mundo que alberga dos volcanes activos simultáneamente, el Marum y el Benbow, cuyos lagos de lava visibles desde la cima se cuentan entre los más accesibles del planeta. La isla es también célebre en todo Vanuatu por sus tradiciones de escultura en madera y magia negra, un saber transmitido de generación en generación y asociado a ceremonias secretas reservadas a los iniciados.",
        galleryImages: `${R2}/journeys/vanuatu-ambrym-gallery1.jpg,${R2}/journeys/vanuatu-ambrym-gallery2.jpg,${R2}/journeys/vanuatu-ambrym-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Ascension vers le lac de lave du Marum",
            titleEn: "Ascent to the Marum lava lake",
            titleEs: "Ascenso al lago de lava del Marum",
            description:
              "Randonnée à travers un désert de cendres volcaniques jusqu'au bord du cratère du Marum, où un lac de lave en fusion bouillonne en permanence à quelques centaines de mètres sous les pieds des visiteurs.",
            descriptionEn:
              "A hike across a desert of volcanic ash to the rim of the Marum crater, where a molten lava lake bubbles constantly a few hundred metres beneath visitors' feet.",
            descriptionEs:
              "Caminata por un desierto de cenizas volcánicas hasta el borde del cráter del Marum, donde un lago de lava fundida burbujea permanentemente a pocos cientos de metros bajo los pies de los visitantes.",
            image: `${R2}/journeys/vanuatu-ambrym-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les sculpteurs sur bois du village",
            titleEn: "The village woodcarvers",
            titleEs: "Los escultores en madera del pueblo",
            description:
              "Visite d'un atelier de sculpteurs sur bois d'Ambrym, réputés dans tout le Vanuatu pour leurs statues rituelles et leurs tambours à fente sculptés dans des troncs entiers.",
            descriptionEn:
              "A visit to a workshop of Ambrym woodcarvers, renowned throughout Vanuatu for their ritual statues and slit drums carved from entire tree trunks.",
            descriptionEs:
              "Visita a un taller de escultores en madera de Ambrym, célebres en todo Vanuatu por sus estatuas rituales y sus tambores de hendidura tallados en troncos enteros.",
            image: `${R2}/journeys/vanuatu-ambrym-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "samoa",
    tour: {
      name: "Samoa : Lalomanu et la vie en fale",
      nameEn: "Samoa: Lalomanu and Fale Life",
      nameEs: "Samoa: Lalomanu y la vida en fale",
      slug: "samoa-lalomanu-fale",
      image: `${R2}/journeys/samoa-lalomanu-fale-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une plage classée parmi les plus belles du Pacifique, où dormir dans une hutte ouverte sur l'océan reste la norme plutôt que l'exception",
      taglineEn: "A beach ranked among the most beautiful in the Pacific, where sleeping in a hut open to the ocean remains the norm rather than the exception",
      taglineEs: "Una playa clasificada entre las más bellas del Pacífico, donde dormir en una choza abierta al océano sigue siendo la norma más que la excepción",
      description:
        "Un voyage sur la côte sud-est d'Upolu, loin d'Apia et de To Sua : Lalomanu, plage de sable blanc plusieurs fois classée parmi les plus belles du Pacifique Sud, reconstruite après le tsunami de 2009 selon les traditions locales, où l'on dort encore dans des fale, huttes traditionnelles ouvertes sur les quatre côtés et fermées la nuit par de simples stores en fibres tressées, un mode d'hébergement qui reste la norme plutôt que l'exception dans cette partie de l'archipel.",
      descriptionEn:
        "A journey along the south-east coast of Upolu, far from Apia and To Sua: Lalomanu, a white-sand beach repeatedly ranked among the most beautiful in the South Pacific, rebuilt after the 2009 tsunami following local traditions, where people still sleep in fale, traditional huts open on all four sides and closed at night by simple woven-fibre blinds, a form of accommodation that remains the norm rather than the exception in this part of the archipelago.",
      descriptionEs:
        "Un viaje por la costa sureste de Upolu, lejos de Apia y de To Sua: Lalomanu, playa de arena blanca clasificada varias veces entre las más bellas del Pacífico Sur, reconstruida tras el tsunami de 2009 siguiendo las tradiciones locales, donde todavía se duerme en fale, chozas tradicionales abiertas por los cuatro lados y cerradas de noche con simples persianas de fibra trenzada, forma de alojamiento que sigue siendo la norma más que la excepción en esta parte del archipiélago.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mai à oct",
      whenLabelEn: "May to Oct",
      whenLabelEs: "May a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 151,
    },
    chapters: [
      {
        title: "Lalomanu, une renaissance après le tsunami",
        titleEn: "Lalomanu, a Rebirth After the Tsunami",
        titleEs: "Lalomanu, un renacer tras el tsunami",
        intro:
          "Premier chapitre à Lalomanu, plage de sable blanc bordée d'une eau turquoise peu profonde, plusieurs fois désignée parmi les plus belles du Pacifique Sud avant d'être dévastée par le tsunami de septembre 2009, qui frappa durement la côte sud-est d'Upolu. Reconstruite dans les années qui suivirent selon des méthodes traditionnelles mais avec des normes de sécurité renforcées, la plage a retrouvé son atmosphère paisible tout en conservant la mémoire de cet événement dans plusieurs mémoriaux locaux.",
        introEn:
          "The first chapter unfolds at Lalomanu, a white-sand beach lined with shallow turquoise water, repeatedly named among the most beautiful in the South Pacific before being devastated by the September 2009 tsunami, which struck the south-east coast of Upolu hard. Rebuilt in the years that followed using traditional methods but with strengthened safety standards, the beach has regained its peaceful atmosphere while preserving the memory of this event in several local memorials.",
        introEs:
          "El primer capítulo se desarrolla en Lalomanu, playa de arena blanca bordeada de agua turquesa poco profunda, nombrada varias veces entre las más bellas del Pacífico Sur antes de ser devastada por el tsunami de septiembre de 2009, que golpeó duramente la costa sureste de Upolu. Reconstruida en los años siguientes según métodos tradicionales pero con normas de seguridad reforzadas, la playa ha recuperado su ambiente apacible conservando la memoria de este acontecimiento en varios memoriales locales.",
        galleryImages: `${R2}/journeys/samoa-lalomanu-gallery1.jpg,${R2}/journeys/samoa-lalomanu-gallery2.jpg,${R2}/journeys/samoa-lalomanu-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Snorkeling sur le récif de Lalomanu",
            titleEn: "Snorkelling on the Lalomanu reef",
            titleEs: "Esnórquel en el arrecife de Lalomanu",
            description:
              "Snorkeling sur le récif corallien peu profond de Lalomanu, accessible directement depuis la plage, parmi poissons tropicaux colorés et coraux mous préservés.",
            descriptionEn:
              "Snorkelling on Lalomanu's shallow coral reef, directly accessible from the beach, among colourful tropical fish and preserved soft corals.",
            descriptionEs:
              "Esnórquel en el arrecife de coral poco profundo de Lalomanu, accesible directamente desde la playa, entre coloridos peces tropicales y corales blandos preservados.",
            image: `${R2}/journeys/samoa-lalomanu-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "L'île de Nu'utele et ses sentiers côtiers",
            titleEn: "Nu'utele Island and its coastal trails",
            titleEs: "La isla de Nu'utele y sus senderos costeros",
            description:
              "Traversée en bateau vers l'îlot voisin de Nu'utele, réserve naturelle inhabitée, randonnée le long de ses sentiers côtiers à la recherche d'oiseaux marins nichant sur les falaises.",
            descriptionEn:
              "A boat crossing to the neighbouring islet of Nu'utele, an uninhabited nature reserve, a hike along its coastal trails in search of seabirds nesting on the cliffs.",
            descriptionEs:
              "Travesía en barco hacia el vecino islote de Nu'utele, reserva natural deshabitada, caminata por sus senderos costeros en busca de aves marinas que anidan en los acantilados.",
            image: `${R2}/journeys/samoa-lalomanu-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La vie traditionnelle en fale",
        titleEn: "Traditional Fale Life",
        titleEs: "La vida tradicional en fale",
        intro:
          "Nuit dans un fale, hutte traditionnelle samoane ouverte sur ses quatre côtés et fermée le soir par de simples stores tressés en feuilles de pandanus, un mode d'hébergement qui reste la norme plutôt que l'exception le long de la côte sud d'Upolu. Cette architecture ouverte, pensée pour favoriser la circulation de l'air sous le climat tropical, reflète également une conception samoane de l'intimité où la vie communautaire prime sur la séparation stricte des espaces.",
        introEn:
          "A night in a fale, a traditional Samoan hut open on its four sides and closed at night by simple blinds woven from pandanus leaves, a form of accommodation that remains the norm rather than the exception along Upolu's south coast. This open architecture, designed to promote airflow in the tropical climate, also reflects a Samoan conception of privacy in which communal life takes precedence over strict separation of spaces.",
        introEs:
          "Noche en un fale, choza tradicional samoana abierta por sus cuatro lados y cerrada de noche con simples persianas trenzadas de hojas de pandano, forma de alojamiento que sigue siendo la norma más que la excepción a lo largo de la costa sur de Upolu. Esta arquitectura abierta, pensada para favorecer la circulación del aire en el clima tropical, refleja también una concepción samoana de la intimidad en la que la vida comunitaria prevalece sobre la separación estricta de los espacios.",
        galleryImages: `${R2}/journeys/samoa-fale-gallery1.jpg,${R2}/journeys/samoa-fale-gallery2.jpg,${R2}/journeys/samoa-fale-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Une nuit sous fale au bord de l'océan",
            titleEn: "A night in a fale by the ocean",
            titleEs: "Una noche en un fale junto al océano",
            description:
              "Installation dans un fale traditionnel ouvert directement sur la plage, dîner préparé par une famille locale et nuit bercée par le bruit des vagues à quelques mètres seulement.",
            descriptionEn:
              "Settling into a traditional fale opening directly onto the beach, a dinner prepared by a local family, and a night lulled by the sound of waves just a few metres away.",
            descriptionEs:
              "Instalación en un fale tradicional abierto directamente a la playa, cena preparada por una familia local y noche arrullada por el sonido de las olas a pocos metros.",
            image: `${R2}/journeys/samoa-fale-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le dimanche samoan et le repas umu",
            titleEn: "Samoan Sunday and the umu feast",
            titleEs: "El domingo samoano y la comida umu",
            description:
              "Participation à un umu, repas dominical traditionnel cuit sur des pierres chauffées enterrées, moment central de la vie sociale samoane partagé en famille élargie.",
            descriptionEn:
              "Participation in an umu, a traditional Sunday meal cooked over buried heated stones, a central moment of Samoan social life shared with the extended family.",
            descriptionEs:
              "Participación en un umu, comida dominical tradicional cocida sobre piedras calientes enterradas, momento central de la vida social samoana compartido en familia extendida.",
            image: `${R2}/journeys/samoa-fale-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "nouvelle-zelande",
    tour: {
      name: "Nouvelle-Zélande : Rotorua et la baie des Îles",
      nameEn: "New Zealand: Rotorua and the Bay of Islands",
      nameEs: "Nueva Zelanda: Rotorua y la bahía de las Islas",
      slug: "nouvelle-zelande-rotorua-baiedesiles",
      image: `${R2}/tours/nouvelle-zelande-rotorua-baiedesiles.jpg`,
      images: `${R2}/trips/nz-rotorua-gallery-1.jpg,${R2}/trips/nz-rotorua-gallery-2.jpg,${R2}/trips/nz-rotorua-gallery-3.jpg,${R2}/trips/nz-rotorua-gallery-4.jpg,${R2}/trips/nz-rotorua-gallery-5.jpg,${R2}/trips/nz-rotorua-gallery-6.jpg`,
      tagline: "Une terre qui fume, où bouillonnent des geysers et des lacs multicolores, berceau de la culture maorie",
      taglineEn: "A steaming land of bubbling geysers and multicoloured lakes, the cradle of Māori culture",
      taglineEs: "Una tierra humeante de géiseres burbujeantes y lagos multicolores, cuna de la cultura maorí",
      description:
        "Rotorua, au cœur de l'île du Nord, se dresse sur l'une des zones géothermiques les plus actives au monde, où geysers, lacs de boue bouillonnante et sources aux couleurs minérales spectaculaires témoignent d'une activité volcanique permanente. La ville reste également l'un des principaux foyers de la culture maorie du pays, où hongi traditionnels, sculptures sur bois et cérémonies du haka se transmettent encore de génération en génération.",
      descriptionEn:
        "Rotorua, at the heart of the North Island, stands on one of the most active geothermal zones in the world, where geysers, bubbling mud lakes, and springs with spectacular mineral colours bear witness to permanent volcanic activity. The town also remains one of the country's main centres of Māori culture, where traditional hongi greetings, wood carving, and haka ceremonies are still passed down through generations.",
      descriptionEs:
        "Rotorua, en el corazón de la isla Norte, se alza sobre una de las zonas geotérmicas más activas del mundo, donde géiseres, lagos de barro burbujeante y fuentes de espectaculares colores minerales dan testimonio de una actividad volcánica permanente. La ciudad sigue siendo además uno de los principales focos de la cultura maorí del país, donde el saludo tradicional hongi, la escultura en madera y las ceremonias de haka todavía se transmiten de generación en generación.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Nov à avril",
      whenLabelEn: "Nov to April",
      whenLabelEs: "Nov a abril",
      bestMonths: "november,december,january,february,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 138,
    },
    sections: [
      {
        heading: "Une terre géothermique en perpétuelle activité",
        headingEn: "A Geothermal Land in Perpetual Activity",
        headingEs: "Una tierra geotérmica en perpetua actividad",
        body:
          "Rotorua repose sur la caldeira d'un supervolcan endormi depuis plus de deux cent mille ans, dont l'activité résiduelle continue d'alimenter geysers, fumerolles et lacs de boue bouillonnante visibles dans plusieurs vallées géothermiques aménagées pour la visite. Le geyser Pohutu, le plus grand de l'hémisphère sud, projette régulièrement de l'eau à plus de trente mètres de hauteur, tandis que l'odeur soufrée caractéristique de la ville, surnommée « Rotten-rua » par les premiers colons, imprègne l'atmosphère en permanence.",
        bodyEn:
          "Rotorua sits atop the caldera of a supervolcano dormant for over two hundred thousand years, whose residual activity continues to fuel geysers, fumaroles, and bubbling mud lakes visible in several geothermal valleys developed for visitors. The Pohutu geyser, the largest in the southern hemisphere, regularly shoots water over thirty metres high, while the town's characteristic sulphur smell, earning it the nickname \"Rotten-rua\" from early settlers, permeates the atmosphere permanently.",
        bodyEs:
          "Rotorua se asienta sobre la caldera de un supervolcán dormido desde hace más de doscientos mil años, cuya actividad residual sigue alimentando géiseres, fumarolas y lagos de barro burbujeante visibles en varios valles geotérmicos habilitados para la visita. El géiser Pohutu, el más grande del hemisferio sur, proyecta regularmente agua a más de treinta metros de altura, mientras que el característico olor sulfuroso de la ciudad, que le valió el apodo de «Rotten-rua» entre los primeros colonos, impregna la atmósfera de forma permanente.",
      },
      {
        heading: "Le berceau de la culture maorie",
        headingEn: "The Cradle of Māori Culture",
        headingEs: "La cuna de la cultura maorí",
        body:
          "Rotorua concentre l'une des plus fortes proportions de population maorie de Nouvelle-Zélande, héritage direct de la tribu Te Arawa qui s'y établit il y a plusieurs siècles en exploitant la chaleur géothermique pour cuisiner et se réchauffer. Les villages culturels de la région proposent des repas hangi, cuits traditionnellement dans des fours en terre chauffés par des pierres volcaniques, ainsi que des représentations de haka et de poi, danses rituelles qui continuent de transmettre l'histoire orale du peuple maori aux nouvelles générations.",
        bodyEn:
          "Rotorua concentrates one of New Zealand's highest proportions of Māori population, a direct legacy of the Te Arawa tribe who settled there several centuries ago, harnessing geothermal heat for cooking and warmth. The region's cultural villages offer hangi meals, traditionally cooked in earth ovens heated by volcanic stones, as well as performances of haka and poi, ritual dances that continue to pass down the oral history of the Māori people to new generations.",
        bodyEs:
          "Rotorua concentra una de las mayores proporciones de población maorí de Nueva Zelanda, legado directo de la tribu Te Arawa que se estableció allí hace varios siglos aprovechando el calor geotérmico para cocinar y calentarse. Los pueblos culturales de la región ofrecen comidas hangi, cocinadas tradicionalmente en hornos de tierra calentados con piedras volcánicas, así como representaciones de haka y poi, danzas rituales que siguen transmitiendo la historia oral del pueblo maorí a las nuevas generaciones.",
      },
    ],
    hotels: [
      {
        name: "Lodge géothermique de Rotorua",
        nameEn: "A Rotorua Geothermal Lodge",
        nameEs: "Lodge geotérmico de Rotorua",
        description:
          "Un lodge en surplomb d'une vallée géothermique, bains thermaux privés alimentés par des sources naturelles, chambres avec vue sur les fumerolles environnantes.",
        descriptionEn:
          "A lodge overlooking a geothermal valley, private thermal baths fed by natural springs, rooms overlooking the surrounding fumaroles.",
        descriptionEs:
          "Un lodge con vistas a un valle geotérmico, baños termales privados alimentados por fuentes naturales, habitaciones con vistas a las fumarolas circundantes.",
        image: `${R2}/trips/nz-rotorua-hotel-1.jpg`,
      },
      {
        name: "Villa au bord du lac Rotorua",
        nameEn: "A Lake Rotorua Villa",
        nameEs: "Villa a orillas del lago Rotorua",
        description:
          "Une villa au bord du lac Rotorua, à distance de marche des villages culturels maoris, jardin donnant sur l'eau et sources d'eau chaude naturelles à proximité.",
        descriptionEn:
          "A villa on the shore of Lake Rotorua, within walking distance of Māori cultural villages, a garden overlooking the water and natural hot springs nearby.",
        descriptionEs:
          "Una villa a orillas del lago Rotorua, a poca distancia a pie de los pueblos culturales maoríes, jardín con vistas al agua y fuentes termales naturales cerca.",
        image: `${R2}/trips/nz-rotorua-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "australie",
    tour: {
      name: "Australie : Cairns, la Grande Barrière et Daintree",
      nameEn: "Australia: Cairns, the Great Barrier Reef and Daintree",
      nameEs: "Australia: Cairns, la Gran Barrera y Daintree",
      slug: "australie-cairns-daintree",
      image: `${R2}/tours/australie-cairns-daintree.jpg`,
      images: `${R2}/trips/australie-cairns-gallery-1.jpg,${R2}/trips/australie-cairns-gallery-2.jpg,${R2}/trips/australie-cairns-gallery-3.jpg,${R2}/trips/australie-cairns-gallery-4.jpg,${R2}/trips/australie-cairns-gallery-5.jpg,${R2}/trips/australie-cairns-gallery-6.jpg`,
      tagline: "Le seul endroit au monde où deux sites classés à l'UNESCO, un récif corallien et une forêt tropicale, se touchent",
      taglineEn: "The only place in the world where two UNESCO-listed sites, a coral reef and a rainforest, touch",
      taglineEs: "El único lugar del mundo donde dos sitios declarados por la UNESCO, un arrecife de coral y una selva tropical, se tocan",
      description:
        "Cairns, porte d'entrée du nord du Queensland, offre un accès direct à deux écosystèmes classés à l'UNESCO qui se rencontrent nulle part ailleurs sur Terre : la Grande Barrière de corail, plus vaste structure vivante de la planète visible depuis l'espace, et la forêt tropicale de Daintree, considérée comme la plus ancienne forêt tropicale continue au monde avec plus de cent quatre-vingts millions d'années d'existence ininterrompue.",
      descriptionEn:
        "Cairns, the gateway to northern Queensland, offers direct access to two UNESCO-listed ecosystems that meet nowhere else on Earth: the Great Barrier Reef, the planet's largest living structure visible from space, and the Daintree Rainforest, considered the world's oldest continuous tropical rainforest with over one hundred and eighty million years of unbroken existence.",
      descriptionEs:
        "Cairns, puerta de entrada al norte de Queensland, ofrece acceso directo a dos ecosistemas declarados por la UNESCO que no se encuentran en ningún otro lugar de la Tierra: la Gran Barrera de Coral, la estructura viva más extensa del planeta visible desde el espacio, y la selva tropical de Daintree, considerada la selva tropical continua más antigua del mundo con más de ciento ochenta millones de años de existencia ininterrumpida.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Juin à oct",
      whenLabelEn: "June to Oct",
      whenLabelEs: "Jun a oct",
      bestMonths: "june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 140,
    },
    sections: [
      {
        heading: "La Grande Barrière de corail depuis Cairns",
        headingEn: "The Great Barrier Reef from Cairns",
        headingEs: "La Gran Barrera de Coral desde Cairns",
        body:
          "La Grande Barrière de corail, qui s'étend sur plus de deux mille trois cents kilomètres le long de la côte du Queensland, reste la seule structure vivante visible depuis l'espace et abrite plus de quatre cents espèces de coraux ainsi que des milliers d'espèces de poissons. Depuis Cairns, des excursions en bateau rapide permettent de rejoindre en moins d'une heure des récifs extérieurs préservés, où plongée et snorkeling révèlent une biodiversité corallienne parmi les plus riches au monde, malgré les menaces posées par le réchauffement climatique.",
        bodyEn:
          "The Great Barrier Reef, stretching over two thousand three hundred kilometres along the Queensland coast, remains the only living structure visible from space and shelters over four hundred coral species along with thousands of fish species. From Cairns, fast boat excursions reach preserved outer reefs in under an hour, where diving and snorkelling reveal coral biodiversity among the richest in the world, despite the threats posed by climate change.",
        bodyEs:
          "La Gran Barrera de Coral, que se extiende más de dos mil trescientos kilómetros a lo largo de la costa de Queensland, sigue siendo la única estructura viva visible desde el espacio y alberga más de cuatrocientas especies de coral, además de miles de especies de peces. Desde Cairns, excursiones en barco rápido permiten llegar en menos de una hora a arrecifes exteriores preservados, donde el buceo y el esnórquel revelan una biodiversidad coralina entre las más ricas del mundo, pese a las amenazas que plantea el cambio climático.",
      },
      {
        heading: "Daintree, la plus ancienne forêt tropicale du monde",
        headingEn: "Daintree, the World's Oldest Tropical Rainforest",
        headingEs: "Daintree, la selva tropical más antigua del mundo",
        body:
          "La forêt tropicale de Daintree, estimée à plus de cent quatre-vingts millions d'années, a survécu sans interruption aux ères glaciaires qui ont détruit la plupart des autres forêts tropicales de la planète, faisant d'elle un sanctuaire génétique unique abritant des espèces végétales et animales antérieures à l'apparition des dinosaures. Le point de rencontre entre la forêt et la Grande Barrière, où la canopée touche presque le récif corallien à Cape Tribulation, constitue l'un des rares endroits au monde où deux écosystèmes classés à l'UNESCO coexistent sur un même territoire.",
        bodyEn:
          "The Daintree Rainforest, estimated at over one hundred and eighty million years old, survived uninterrupted through the ice ages that destroyed most of the planet's other rainforests, making it a unique genetic sanctuary home to plant and animal species predating the appearance of dinosaurs. The meeting point between the forest and the Great Barrier Reef, where the canopy almost touches the coral reef at Cape Tribulation, is one of the rare places on Earth where two UNESCO-listed ecosystems coexist on the same territory.",
        bodyEs:
          "La selva tropical de Daintree, con una antigüedad estimada de más de ciento ochenta millones de años, sobrevivió sin interrupción a las eras glaciares que destruyeron la mayoría de las demás selvas tropicales del planeta, lo que la convierte en un santuario genético único que alberga especies vegetales y animales anteriores a la aparición de los dinosaurios. El punto de encuentro entre el bosque y la Gran Barrera de Coral, donde el dosel arbóreo casi toca el arrecife de coral en Cape Tribulation, es uno de los pocos lugares del mundo donde dos ecosistemas declarados por la UNESCO coexisten en el mismo territorio.",
      },
    ],
    hotels: [
      {
        name: "Lodge en pleine forêt de Daintree",
        nameEn: "A Daintree Rainforest Lodge",
        nameEs: "Lodge en plena selva de Daintree",
        description:
          "Un lodge écologique niché au cœur de la forêt de Daintree, cabanes sur pilotis entourées de canopée tropicale, sentiers d'observation de la faune nocturne.",
        descriptionEn:
          "An eco-lodge nestled at the heart of the Daintree forest, stilted cabins surrounded by tropical canopy, trails for observing nocturnal wildlife.",
        descriptionEs:
          "Un ecolodge enclavado en el corazón de la selva de Daintree, cabañas sobre pilotes rodeadas de dosel tropical, senderos de observación de fauna nocturna.",
        image: `${R2}/trips/australie-cairns-hotel-1.jpg`,
      },
      {
        name: "Resort du front de mer de Cairns",
        nameEn: "A Cairns Waterfront Resort",
        nameEs: "Resort del paseo marítimo de Cairns",
        description:
          "Un resort sur l'esplanade de Cairns, piscine à débordement face à la mer de Corail, point de départ pratique pour les excursions vers la Grande Barrière.",
        descriptionEn:
          "A resort on Cairns' esplanade, an infinity pool facing the Coral Sea, a convenient base for excursions to the Great Barrier Reef.",
        descriptionEs:
          "Un resort en el paseo marítimo de Cairns, piscina infinita frente al mar del Coral, punto de partida práctico para las excursiones a la Gran Barrera.",
        image: `${R2}/trips/australie-cairns-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "fidji",
    tour: {
      name: "Fidji : Taveuni, l'île jardin",
      nameEn: "Fiji: Taveuni, the Garden Island",
      nameEs: "Fiyi: Taveuni, la isla jardín",
      slug: "fidji-taveuni-cascades",
      image: `${R2}/tours/fidji-taveuni-cascades.jpg`,
      images: `${R2}/trips/fidji-taveuni-gallery-1.jpg,${R2}/trips/fidji-taveuni-gallery-2.jpg,${R2}/trips/fidji-taveuni-gallery-3.jpg,${R2}/trips/fidji-taveuni-gallery-4.jpg,${R2}/trips/fidji-taveuni-gallery-5.jpg,${R2}/trips/fidji-taveuni-gallery-6.jpg`,
      tagline: "Une île volcanique surnommée « l'île jardin » pour sa pluviométrie exceptionnelle et ses cascades en cascade",
      taglineEn: "A volcanic island nicknamed the \"garden island\" for its exceptional rainfall and cascading waterfalls",
      taglineEs: "Una isla volcánica apodada la «isla jardín» por su excepcional pluviometría y sus cascadas escalonadas",
      description:
        "Taveuni, troisième plus grande île des Fidji, doit son surnom d'« île jardin » à une pluviométrie parmi les plus élevées du Pacifique Sud, qui nourrit une végétation tropicale exceptionnellement dense et une succession de cascades dévalant son relief volcanique escarpé. Traversée en son centre par le cent quatre-vingtième méridien, l'île offre également la possibilité rare de se tenir simultanément dans l'hémisphère est et ouest, un jour et le lendemain à la fois.",
      descriptionEn:
        "Taveuni, Fiji's third-largest island, owes its \"garden island\" nickname to rainfall among the highest in the South Pacific, which nourishes exceptionally dense tropical vegetation and a succession of waterfalls tumbling down its steep volcanic terrain. Crossed through its centre by the 180th meridian, the island also offers the rare possibility of standing simultaneously in the eastern and western hemispheres, one day and the next at once.",
      descriptionEs:
        "Taveuni, tercera isla más grande de Fiyi, debe su apodo de «isla jardín» a una pluviometría entre las más altas del Pacífico Sur, que nutre una vegetación tropical excepcionalmente densa y una sucesión de cascadas que descienden por su escarpado relieve volcánico. Atravesada por su centro por el meridiano 180, la isla ofrece además la rara posibilidad de situarse simultáneamente en los hemisferios este y oeste, en un día y en el siguiente a la vez.",
      price: 2500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mai à oct",
      whenLabelEn: "May to Oct",
      whenLabelEs: "May a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 142,
    },
    sections: [
      {
        heading: "Les cascades de la vallée de Bouma",
        headingEn: "The Waterfalls of Bouma Valley",
        headingEs: "Las cascadas del valle de Bouma",
        body:
          "Le parc national de Bouma, qui couvre près de la moitié de la superficie de Taveuni, protège trois cascades successives accessibles par un sentier de randonnée à travers une forêt tropicale primaire d'une densité rare. La plus haute des trois, alimentée par des pluies pouvant dépasser six mille millimètres par an sur les hauteurs de l'île, se jette dans un bassin naturel où la baignade est possible toute l'année, entourée d'une végétation qui a valu à Taveuni son surnom d'île jardin.",
        bodyEn:
          "Bouma National Park, covering nearly half of Taveuni's surface area, protects three successive waterfalls reached by a hiking trail through a primary rainforest of rare density. The tallest of the three, fed by rainfall that can exceed six thousand millimetres a year on the island's heights, tumbles into a natural pool open for swimming year-round, surrounded by vegetation that earned Taveuni its garden island nickname.",
        bodyEs:
          "El parque nacional de Bouma, que cubre casi la mitad de la superficie de Taveuni, protege tres cascadas sucesivas accesibles por un sendero de excursión a través de una selva tropical primaria de rara densidad. La más alta de las tres, alimentada por lluvias que pueden superar los seis mil milímetros anuales en las alturas de la isla, cae en una piscina natural donde se puede nadar todo el año, rodeada de una vegetación que valió a Taveuni su apodo de isla jardín.",
      },
      {
        heading: "Le récif du Grand Mur Blanc",
        headingEn: "The Great White Wall Reef",
        headingEs: "El arrecife de la Gran Muralla Blanca",
        body:
          "Les eaux de Taveuni sont réputées parmi les plongeurs pour le récif du Grand Mur Blanc, paroi corallienne recouverte d'anémones et de coraux mous d'un blanc éclatant qui plonge verticalement dans le passage de Somosomo, courant particulièrement riche en nutriments entre Taveuni et l'île voisine de Vanua Levu. Ce site, considéré comme l'un des meilleurs spots de plongée de tout le Pacifique Sud, doit sa spectaculaire biodiversité à la rencontre de courants océaniques qui nourrissent en continu ses formations coralliennes.",
        bodyEn:
          "Taveuni's waters are renowned among divers for the Great White Wall reef, a coral wall covered in anemones and dazzling white soft corals that plunges vertically into the Somosomo Strait, a current particularly rich in nutrients between Taveuni and the neighbouring island of Vanua Levu. This site, considered one of the best dive spots in the entire South Pacific, owes its spectacular biodiversity to the meeting of ocean currents that continuously feed its coral formations.",
        bodyEs:
          "Las aguas de Taveuni son célebres entre los buceadores por el arrecife de la Gran Muralla Blanca, pared coralina cubierta de anémonas y corales blandos de un blanco deslumbrante que se sumerge verticalmente en el paso de Somosomo, corriente particularmente rica en nutrientes entre Taveuni y la vecina isla de Vanua Levu. Este lugar, considerado uno de los mejores puntos de buceo de todo el Pacífico Sur, debe su espectacular biodiversidad al encuentro de corrientes oceánicas que alimentan continuamente sus formaciones coralinas.",
      },
    ],
    hotels: [
      {
        name: "Lodge de plongée face au passage de Somosomo",
        nameEn: "A Dive Lodge Facing Somosomo Strait",
        nameEs: "Lodge de buceo frente al paso de Somosomo",
        description:
          "Un lodge de plongée sur la côte de Taveuni, face au passage de Somosomo et au récif du Grand Mur Blanc, centre de plongée intégré et chambres avec vue sur l'océan.",
        descriptionEn:
          "A dive lodge on the Taveuni coast, facing Somosomo Strait and the Great White Wall reef, an on-site dive centre and rooms overlooking the ocean.",
        descriptionEs:
          "Un lodge de buceo en la costa de Taveuni, frente al paso de Somosomo y al arrecife de la Gran Muralla Blanca, centro de buceo integrado y habitaciones con vistas al océano.",
        image: `${R2}/trips/fidji-taveuni-hotel-1.jpg`,
      },
      {
        name: "Bungalows au bord de la vallée de Bouma",
        nameEn: "Bouma Valley Bungalows",
        nameEs: "Bungalós junto al valle de Bouma",
        description:
          "Des bungalows simples en bordure du parc national de Bouma, terrasses avec vue sur la forêt tropicale, à distance de marche des cascades du parc.",
        descriptionEn:
          "Simple bungalows on the edge of Bouma National Park, terraces overlooking the rainforest, within walking distance of the park's waterfalls.",
        descriptionEs:
          "Bungalós sencillos en el límite del parque nacional de Bouma, terrazas con vistas a la selva tropical, a poca distancia a pie de las cascadas del parque.",
        image: `${R2}/trips/fidji-taveuni-hotel-2.jpg`,
      },
    ],
  },
];

standardTrips.push(
  {
    destinationSlug: "polynesie-francaise",
    tour: {
      name: "Polynésie française : les Marquises",
      nameEn: "French Polynesia: The Marquesas",
      nameEs: "Polinesia Francesa: las Marquesas",
      slug: "polynesie-francaise-marquises",
      image: `${R2}/tours/polynesie-francaise-marquises.jpg`,
      images: `${R2}/trips/polynesie-marquises-gallery-1.jpg,${R2}/trips/polynesie-marquises-gallery-2.jpg,${R2}/trips/polynesie-marquises-gallery-3.jpg,${R2}/trips/polynesie-marquises-gallery-4.jpg,${R2}/trips/polynesie-marquises-gallery-5.jpg,${R2}/trips/polynesie-marquises-gallery-6.jpg`,
      tagline: "Un archipel sans récif corallien ni lagon, où des falaises abruptes plongent directement dans un océan sans protection",
      taglineEn: "An archipelago with no coral reef or lagoon, where sheer cliffs plunge straight into an unprotected ocean",
      taglineEs: "Un archipiélago sin arrecife de coral ni laguna, donde acantilados escarpados se sumergen directamente en un océano sin protección",
      description:
        "Les Marquises, archipel le plus reculé de Polynésie française à plus de mille cinq cents kilomètres de Tahiti, se distinguent radicalement du reste du territoire par l'absence totale de récif corallien protecteur, laissant leurs falaises volcaniques vertigineuses plonger directement dans un océan Pacifique sans lagon. Paul Gauguin y passa ses dernières années et y repose aujourd'hui, attiré comme d'autres artistes par des paysages d'une sauvagerie rare, entre vallées profondes, chevaux sauvages et sites archéologiques polynésiens parmi les mieux préservés.",
      descriptionEn:
        "The Marquesas, French Polynesia's most remote archipelago, over fifteen hundred kilometres from Tahiti, differ radically from the rest of the territory in the total absence of a protective coral reef, leaving their vertiginous volcanic cliffs to plunge straight into a lagoon-less Pacific Ocean. Paul Gauguin spent his final years there and now rests there, drawn like other artists by landscapes of rare wildness, between deep valleys, wild horses, and some of the best-preserved Polynesian archaeological sites.",
      descriptionEs:
        "Las Marquesas, archipiélago más remoto de la Polinesia Francesa a más de mil quinientos kilómetros de Tahití, se distinguen radicalmente del resto del territorio por la ausencia total de arrecife de coral protector, dejando que sus vertiginosos acantilados volcánicos se sumerjan directamente en un océano Pacífico sin laguna. Paul Gauguin pasó allí sus últimos años y hoy descansa allí, atraído como otros artistas por paisajes de rara salvajez, entre valles profundos, caballos salvajes y algunos de los yacimientos arqueológicos polinesios mejor conservados.",
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
      whenLabelEs: "May a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 144,
    },
    sections: [
      {
        heading: "Un archipel sans lagon, façonné par l'océan",
        headingEn: "A Lagoon-Less Archipelago, Shaped by the Ocean",
        headingEs: "Un archipiélago sin laguna, moldeado por el océano",
        body:
          "Contrairement à la plupart des îles polynésiennes, les Marquises n'ont jamais développé de récif corallien barrière autour de leurs côtes, un phénomène attribué à la jeunesse géologique relative de l'archipel et à la froideur inhabituelle des courants océaniques qui les entourent. L'absence de lagon expose directement les falaises volcaniques, certaines dépassant mille mètres de hauteur, à la houle du Pacifique, façonnant un paysage de baies profondes et de pics acérés radicalement différent des atolls plats de Bora Bora ou des Tuamotu.",
        bodyEn:
          "Unlike most Polynesian islands, the Marquesas never developed a barrier coral reef around their coasts, a phenomenon attributed to the archipelago's relative geological youth and the unusually cold ocean currents surrounding them. The absence of a lagoon exposes the volcanic cliffs, some over a thousand metres high, directly to the Pacific swell, shaping a landscape of deep bays and sharp peaks radically different from the flat atolls of Bora Bora or the Tuamotus.",
        bodyEs:
          "A diferencia de la mayoría de las islas polinesias, las Marquesas nunca desarrollaron un arrecife de coral barrera alrededor de sus costas, fenómeno atribuido a la relativa juventud geológica del archipiélago y a la inusual frialdad de las corrientes oceánicas que lo rodean. La ausencia de laguna expone directamente los acantilados volcánicos, algunos de más de mil metros de altura, al oleaje del Pacífico, dando forma a un paisaje de bahías profundas y picos afilados radicalmente distinto de los atolones planos de Bora Bora o de las Tuamotu.",
      },
      {
        heading: "Sur les traces de Paul Gauguin",
        headingEn: "In the Footsteps of Paul Gauguin",
        headingEs: "Tras los pasos de Paul Gauguin",
        body:
          "Paul Gauguin s'installa à Hiva Oa en 1901, quittant Tahiti qu'il jugeait déjà trop marquée par l'influence occidentale, et y peignit certaines de ses œuvres les plus sombres avant d'y mourir en 1903. Sa tombe, au cimetière du Calvaire dominant la baie d'Atuona, reste un lieu de pèlerinage pour les amateurs d'art, tandis que les Marquises conservent l'une des plus fortes concentrations de sites archéologiques polynésiens, dont des tikis monumentaux sculptés dans la pierre volcanique et des plateformes cérémonielles vieilles de plusieurs siècles.",
        bodyEn:
          "Paul Gauguin settled on Hiva Oa in 1901, leaving Tahiti, which he already considered too marked by Western influence, and painted some of his darkest works there before dying in 1903. His grave, at Calvary Cemetery overlooking Atuona Bay, remains a pilgrimage site for art lovers, while the Marquesas preserve one of the highest concentrations of Polynesian archaeological sites, including monumental tikis carved from volcanic stone and centuries-old ceremonial platforms.",
        bodyEs:
          "Paul Gauguin se instaló en Hiva Oa en 1901, dejando Tahití, que ya consideraba demasiado marcada por la influencia occidental, y pintó allí algunas de sus obras más sombrías antes de morir en 1903. Su tumba, en el cementerio del Calvario que domina la bahía de Atuona, sigue siendo un lugar de peregrinación para los amantes del arte, mientras que las Marquesas conservan una de las mayores concentraciones de yacimientos arqueológicos polinesios, incluidos tikis monumentales tallados en piedra volcánica y plataformas ceremoniales centenarias.",
      },
    ],
    hotels: [
      {
        name: "Lodge en surplomb de la baie d'Atuona",
        nameEn: "A Lodge Overlooking Atuona Bay",
        nameEs: "Lodge con vistas a la bahía de Atuona",
        description:
          "Un lodge simple en surplomb de la baie d'Atuona sur l'île d'Hiva Oa, chambres avec vue sur l'océan sans lagon, à distance de marche de la tombe de Paul Gauguin.",
        descriptionEn:
          "A simple lodge overlooking Atuona Bay on Hiva Oa island, rooms overlooking the lagoon-less ocean, within walking distance of Paul Gauguin's grave.",
        descriptionEs:
          "Un sencillo lodge con vistas a la bahía de Atuona en la isla de Hiva Oa, habitaciones con vistas al océano sin laguna, a poca distancia a pie de la tumba de Paul Gauguin.",
        image: `${R2}/trips/polynesie-marquises-hotel-1.jpg`,
      },
      {
        name: "Pension familiale de Nuku Hiva",
        nameEn: "A Nuku Hiva Family Guesthouse",
        nameEs: "Pensión familiar de Nuku Hiva",
        description:
          "Une pension familiale sur l'île de Nuku Hiva, plus grande île des Marquises, chambres simples et repas partagés à base de produits locaux avec les hôtes.",
        descriptionEn:
          "A family guesthouse on Nuku Hiva, the largest Marquesan island, simple rooms and shared meals of local produce with the hosts.",
        descriptionEs:
          "Una pensión familiar en la isla de Nuku Hiva, la más grande de las Marquesas, habitaciones sencillas y comidas compartidas con productos locales junto a los anfitriones.",
        image: `${R2}/trips/polynesie-marquises-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "nouvelle-caledonie",
    tour: {
      name: "Nouvelle-Calédonie : les îles Loyauté",
      nameEn: "New Caledonia: The Loyalty Islands",
      nameEs: "Nueva Caledonia: las islas Loyauté",
      slug: "nouvelle-caledonie-iles-loyaute",
      image: `${R2}/tours/nouvelle-caledonie-iles-loyaute.jpg`,
      images: `${R2}/trips/nc-loyaute-gallery-1.jpg,${R2}/trips/nc-loyaute-gallery-2.jpg,${R2}/trips/nc-loyaute-gallery-3.jpg,${R2}/trips/nc-loyaute-gallery-4.jpg,${R2}/trips/nc-loyaute-gallery-5.jpg,${R2}/trips/nc-loyaute-gallery-6.jpg`,
      tagline: "Des atolls surélevés aux eaux parmi les plus transparentes du Pacifique, où la coutume kanak régit encore l'accès aux terres",
      taglineEn: "Uplifted atolls with some of the clearest waters in the Pacific, where Kanak custom still governs access to the land",
      taglineEs: "Atolones levantados de aguas entre las más transparentes del Pacífico, donde la costumbre canaca todavía rige el acceso a la tierra",
      description:
        "Les îles Loyauté, archipel corallien à l'est de la Grande Terre composé principalement de Lifou, Maré et Ouvéa, se distinguent par leur nature d'atolls surélevés dépourvus de rivières, dont les eaux comptent parmi les plus transparentes de tout le Pacifique Sud. Contrairement au reste de la Nouvelle-Calédonie, ces îles restent administrées selon le droit coutumier kanak, où l'accès à certaines terres et plages reste soumis à l'autorisation des chefs de tribu.",
      descriptionEn:
        "The Loyalty Islands, a coral archipelago east of Grande Terre made up mainly of Lifou, Maré, and Ouvéa, stand out for their nature as uplifted atolls with no rivers, whose waters rank among the clearest in the entire South Pacific. Unlike the rest of New Caledonia, these islands remain administered under Kanak customary law, where access to certain lands and beaches remains subject to the authorisation of tribal chiefs.",
      descriptionEs:
        "Las islas Loyauté, archipiélago coralino al este de la Grande Terre compuesto principalmente por Lifou, Maré y Ouvéa, destacan por su naturaleza de atolones levantados sin ríos, cuyas aguas se cuentan entre las más transparentes de todo el Pacífico Sur. A diferencia del resto de Nueva Caledonia, estas islas siguen administradas según el derecho consuetudinario canaco, donde el acceso a ciertas tierras y playas sigue sujeto a la autorización de los jefes tribales.",
      price: 2800,
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
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 146,
    },
    sections: [
      {
        heading: "Des atolls surélevés aux eaux exceptionnellement claires",
        headingEn: "Uplifted Atolls with Exceptionally Clear Waters",
        headingEs: "Atolones levantados de aguas excepcionalmente claras",
        body:
          "Les îles Loyauté se distinguent géologiquement du reste de la Nouvelle-Calédonie par leur nature d'atolls coralliens soulevés par des mouvements tectoniques, un relief qui les prive de rivières et donc de tout apport sédimentaire susceptible de troubler leurs eaux côtières. Cette absence totale de sédimentation, combinée à des récifs frangeants exceptionnellement préservés, offre une transparence sous-marine qui compte parmi les meilleures du Pacifique Sud, appréciée aussi bien pour la plongée que pour la simple observation depuis la surface.",
        bodyEn:
          "The Loyalty Islands differ geologically from the rest of New Caledonia in their nature as coral atolls uplifted by tectonic movements, a terrain that deprives them of rivers and thus any sediment input that might cloud their coastal waters. This total absence of sedimentation, combined with exceptionally preserved fringing reefs, offers underwater clarity that ranks among the best in the South Pacific, appreciated for both diving and simple observation from the surface.",
        bodyEs:
          "Las islas Loyauté se distinguen geológicamente del resto de Nueva Caledonia por su naturaleza de atolones coralinos levantados por movimientos tectónicos, un relieve que las priva de ríos y, por tanto, de cualquier aporte de sedimentos que pudiera enturbiar sus aguas costeras. Esta ausencia total de sedimentación, combinada con arrecifes de franja excepcionalmente preservados, ofrece una transparencia submarina que se cuenta entre las mejores del Pacífico Sur, apreciada tanto para el buceo como para la simple observación desde la superficie.",
      },
      {
        heading: "La coutume kanak, toujours en vigueur",
        headingEn: "Kanak Custom, Still in Force",
        headingEs: "La costumbre canaca, todavía vigente",
        body:
          "Les îles Loyauté restent régies par un statut coutumier particulier au sein de la Nouvelle-Calédonie, où les terres appartiennent collectivement aux clans kanak et où l'accès à certaines plages ou sites naturels nécessite l'accord préalable du chef de tribu concerné, généralement obtenu par l'intermédiaire d'un guide local. Cette organisation sociale, fondée sur un système de dons et de contre-dons appelé la coutume, structure encore aujourd'hui l'essentiel de la vie sociale et cérémonielle des îles.",
        bodyEn:
          "The Loyalty Islands remain governed by a particular customary status within New Caledonia, where land belongs collectively to Kanak clans and access to certain beaches or natural sites requires the prior agreement of the relevant tribal chief, generally obtained through a local guide. This social organisation, based on a system of gifts and counter-gifts called custom, still structures most of the islands' social and ceremonial life today.",
        bodyEs:
          "Las islas Loyauté siguen regidas por un estatus consuetudinario particular dentro de Nueva Caledonia, donde las tierras pertenecen colectivamente a los clanes canacos y el acceso a ciertas playas o lugares naturales requiere el acuerdo previo del jefe tribal correspondiente, obtenido generalmente a través de un guía local. Esta organización social, basada en un sistema de dones y contradones llamado la costumbre, sigue estructurando hoy la mayor parte de la vida social y ceremonial de las islas.",
      },
    ],
    hotels: [
      {
        name: "Bungalows de plage à Lifou",
        nameEn: "Beach Bungalows in Lifou",
        nameEs: "Bungalós de playa en Lifou",
        description:
          "Des bungalows simples en bord de plage sur l'île de Lifou, gérés par une tribu locale, jardin de cocotiers et accès direct à une eau d'une transparence remarquable.",
        descriptionEn:
          "Simple beachfront bungalows on Lifou island, run by a local tribe, a coconut palm garden and direct access to remarkably clear water.",
        descriptionEs:
          "Bungalós sencillos junto a la playa en la isla de Lifou, gestionados por una tribu local, jardín de cocoteros y acceso directo a un agua de notable transparencia.",
        image: `${R2}/trips/nc-loyaute-hotel-1.jpg`,
      },
      {
        name: "Case d'hôtes traditionnelle à Ouvéa",
        nameEn: "A Traditional Guest Hut in Ouvéa",
        nameEs: "Choza de huéspedes tradicional en Ouvéa",
        description:
          "Une case d'hôtes de style traditionnel sur l'île d'Ouvéa, tenue par une famille locale, à distance de marche de la plage classée parmi les plus belles de l'archipel.",
        descriptionEn:
          "A traditional-style guest hut on Ouvéa island, run by a local family, within walking distance of the beach ranked among the most beautiful in the archipelago.",
        descriptionEs:
          "Una choza de huéspedes de estilo tradicional en la isla de Ouvéa, gestionada por una familia local, a poca distancia a pie de la playa clasificada entre las más bellas del archipiélago.",
        image: `${R2}/trips/nc-loyaute-hotel-2.jpg`,
      },
    ],
  },
);

standardTrips.push(
  {
    destinationSlug: "vanuatu",
    tour: {
      name: "Vanuatu : Espiritu Santo",
      nameEn: "Vanuatu: Espiritu Santo",
      nameEs: "Vanuatu: Espiritu Santo",
      slug: "vanuatu-espiritu-santo",
      image: `${R2}/tours/vanuatu-espiritu-santo.jpg`,
      images: `${R2}/trips/vanuatu-santo-gallery-1.jpg,${R2}/trips/vanuatu-santo-gallery-2.jpg,${R2}/trips/vanuatu-santo-gallery-3.jpg,${R2}/trips/vanuatu-santo-gallery-4.jpg,${R2}/trips/vanuatu-santo-gallery-5.jpg,${R2}/trips/vanuatu-santo-gallery-6.jpg`,
      tagline: "Une base militaire américaine oubliée dans la jungle, des trous d'eau turquoise et l'épave du plus grand paquebot jamais coulé volontairement",
      taglineEn: "A forgotten American military base in the jungle, turquoise blue holes, and the wreck of the largest liner ever deliberately sunk",
      taglineEs: "Una base militar estadounidense olvidada en la selva, pozos azules turquesa y el pecio del mayor transatlántico jamás hundido deliberadamente",
      description:
        "Espiritu Santo, plus grande île du Vanuatu, servit de base arrière majeure aux forces américaines pendant la guerre du Pacifique, épisode qui inspira le roman puis la comédie musicale South Pacific de James Michener. L'île conserve aujourd'hui les vestiges rouillés de cette occupation militaire, des trous d'eau douce turquoise nichés dans la jungle appelés blue holes, ainsi que l'épave du SS President Coolidge, paquebot de luxe reconverti en transport de troupes et coulé en 1942, aujourd'hui l'un des plus grands sites de plongée sur épave accessibles au monde.",
      descriptionEn:
        "Espiritu Santo, Vanuatu's largest island, served as a major rear base for American forces during the Pacific War, an episode that inspired the novel and then the musical South Pacific by James Michener. The island today retains the rusting remnants of this military occupation, turquoise freshwater sinkholes nestled in the jungle called blue holes, as well as the wreck of the SS President Coolidge, a luxury liner converted into a troop carrier and sunk in 1942, now one of the largest accessible wreck-diving sites in the world.",
      descriptionEs:
        "Espiritu Santo, la isla más grande de Vanuatu, sirvió de base logística importante para las fuerzas estadounidenses durante la guerra del Pacífico, episodio que inspiró la novela y después el musical South Pacific de James Michener. La isla conserva hoy los vestigios oxidados de esta ocupación militar, pozos de agua dulce turquesa enclavados en la selva llamados blue holes, así como el pecio del SS President Coolidge, transatlántico de lujo reconvertido en transporte de tropas y hundido en 1942, hoy uno de los mayores sitios de buceo en pecios accesibles del mundo.",
      price: 3000,
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
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 148,
    },
    sections: [
      {
        heading: "Les blue holes, trous d'eau turquoise dans la jungle",
        headingEn: "The Blue Holes, Turquoise Sinkholes in the Jungle",
        headingEs: "Los blue holes, pozos turquesa en la selva",
        body:
          "Les blue holes d'Espiritu Santo, dont les plus connus sont ceux de Nanda et de Matevulu, sont des trous d'eau douce naturels formés dans la roche calcaire, alimentés par des rivières souterraines qui leur confèrent une couleur turquoise saisissante et une transparence quasi parfaite. Entourés d'une jungle dense et de racines d'arbres géants plongeant directement dans l'eau, ces bassins naturels, dont certains dépassent quinze mètres de profondeur, offrent un cadre de baignade unique loin de toute infrastructure touristique.",
        bodyEn:
          "The blue holes of Espiritu Santo, the best known being Nanda and Matevulu, are natural freshwater sinkholes formed in limestone rock, fed by underground rivers that give them a striking turquoise colour and near-perfect clarity. Surrounded by dense jungle and the roots of giant trees plunging directly into the water, these natural pools, some over fifteen metres deep, offer a unique swimming setting far from any tourist infrastructure.",
        bodyEs:
          "Los blue holes de Espiritu Santo, los más conocidos de los cuales son los de Nanda y Matevulu, son pozos de agua dulce naturales formados en roca caliza, alimentados por ríos subterráneos que les confieren un llamativo color turquesa y una transparencia casi perfecta. Rodeados de selva densa y raíces de árboles gigantes que se sumergen directamente en el agua, estas piscinas naturales, algunas de más de quince metros de profundidad, ofrecen un entorno de baño único lejos de cualquier infraestructura turística.",
      },
      {
        heading: "L'épave du SS President Coolidge",
        headingEn: "The Wreck of the SS President Coolidge",
        headingEs: "El pecio del SS President Coolidge",
        body:
          "Le SS President Coolidge, paquebot de luxe transformé en navire de transport de troupes pendant la Seconde Guerre mondiale, heurta accidentellement deux mines posées par les forces américaines elles-mêmes en 1942 et coula en une heure au large de Luganville, sans faire de victime grâce à la discipline de l'évacuation. L'épave, longue de plus de deux cents mètres et reposant à faible profondeur, reste accessible aux plongeurs de tous niveaux et conserve encore des jeeps, des casques et du matériel militaire intact, faisant d'elle l'un des plus grands sites de plongée sur épave accessibles au monde.",
        bodyEn:
          "The SS President Coolidge, a luxury liner converted into a troop transport during the Second World War, accidentally struck two mines laid by American forces themselves in 1942 and sank within an hour off Luganville, with no casualties thanks to the discipline of the evacuation. The wreck, over two hundred metres long and lying at shallow depth, remains accessible to divers of all levels and still holds jeeps, helmets, and intact military equipment, making it one of the largest accessible wreck-diving sites in the world.",
        bodyEs:
          "El SS President Coolidge, transatlántico de lujo transformado en buque de transporte de tropas durante la Segunda Guerra Mundial, chocó accidentalmente con dos minas colocadas por las propias fuerzas estadounidenses en 1942 y se hundió en una hora frente a Luganville, sin víctimas gracias a la disciplina de la evacuación. El pecio, de más de doscientos metros de largo y situado a poca profundidad, sigue siendo accesible para buceadores de todos los niveles y todavía conserva jeeps, cascos y material militar intacto, lo que lo convierte en uno de los mayores sitios de buceo en pecios accesibles del mundo.",
      },
    ],
    hotels: [
      {
        name: "Lodge en bord de plage à Luganville",
        nameEn: "A Beachfront Lodge in Luganville",
        nameEs: "Lodge junto a la playa en Luganville",
        description:
          "Un lodge simple en bord de plage à proximité de Luganville, centre de plongée intégré pour explorer l'épave du SS President Coolidge, chambres avec vue sur le passage de Segond.",
        descriptionEn:
          "A simple beachfront lodge near Luganville, an on-site dive centre for exploring the SS President Coolidge wreck, rooms overlooking Segond Channel.",
        descriptionEs:
          "Un sencillo lodge junto a la playa cerca de Luganville, centro de buceo integrado para explorar el pecio del SS President Coolidge, habitaciones con vistas al paso de Segond.",
        image: `${R2}/trips/vanuatu-santo-hotel-1.jpg`,
      },
      {
        name: "Bungalows près des blue holes",
        nameEn: "Bungalows near the Blue Holes",
        nameEs: "Bungalós cerca de los blue holes",
        description:
          "Des bungalows simples nichés dans la jungle à proximité des blue holes de Matevulu et Nanda, gérés par une famille locale, cuisine à base de produits de la ferme voisine.",
        descriptionEn:
          "Simple bungalows nestled in the jungle near the Matevulu and Nanda blue holes, run by a local family, cuisine made from produce from the neighbouring farm.",
        descriptionEs:
          "Bungalós sencillos enclavados en la selva cerca de los blue holes de Matevulu y Nanda, gestionados por una familia local, cocina a base de productos de la granja vecina.",
        image: `${R2}/trips/vanuatu-santo-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "samoa",
    tour: {
      name: "Samoa : Savai'i, l'île sacrée",
      nameEn: "Samoa: Savai'i, the Sacred Island",
      nameEs: "Samoa: Savai'i, la isla sagrada",
      slug: "samoa-savaii",
      image: `${R2}/tours/samoa-savaii.jpg`,
      images: `${R2}/trips/samoa-savaii-gallery-1.jpg,${R2}/trips/samoa-savaii-gallery-2.jpg,${R2}/trips/samoa-savaii-gallery-3.jpg,${R2}/trips/samoa-savaii-gallery-4.jpg,${R2}/trips/samoa-savaii-gallery-5.jpg,${R2}/trips/samoa-savaii-gallery-6.jpg`,
      tagline: "La plus grande île de Polynésie après la Nouvelle-Zélande, recouverte de champs de lave et considérée comme le berceau spirituel du peuple samoan",
      taglineEn: "The largest island in Polynesia after New Zealand, covered in lava fields and considered the spiritual cradle of the Samoan people",
      taglineEs: "La isla más grande de Polinesia después de Nueva Zelanda, cubierta de campos de lava y considerada la cuna espiritual del pueblo samoano",
      description:
        "Savai'i, plus grande île de Samoa et l'une des plus vastes de toute la Polynésie, reste largement rurale et moins développée que l'île voisine d'Upolu, ce qui en fait le lieu où les traditions fa'a Samoa, le « mode de vie samoan », se perpétuent avec le plus d'authenticité. Considérée par la mythologie locale comme le berceau originel du peuple polynésien, l'île porte encore les cicatrices d'éruptions volcaniques du début du XXe siècle, dont les champs de lave noire et les grottes de tunnels de lave témoignent aujourd'hui.",
      descriptionEn:
        "Savai'i, Samoa's largest island and one of the largest in all of Polynesia, remains largely rural and less developed than neighbouring Upolu, making it the place where fa'a Samoa traditions, the \"Samoan way,\" are carried on with the most authenticity. Considered by local mythology as the original cradle of the Polynesian people, the island still bears the scars of early 20th-century volcanic eruptions, its black lava fields and lava tube caves standing as testimony today.",
      descriptionEs:
        "Savai'i, la isla más grande de Samoa y una de las más extensas de toda la Polinesia, sigue siendo en gran parte rural y menos desarrollada que la vecina Upolu, lo que la convierte en el lugar donde las tradiciones fa'a Samoa, el «modo de vida samoano», se perpetúan con mayor autenticidad. Considerada por la mitología local como la cuna original del pueblo polinesio, la isla todavía lleva las cicatrices de erupciones volcánicas de comienzos del siglo XX, cuyos campos de lava negra y cuevas de tubos volcánicos dan testimonio hoy.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mai à oct",
      whenLabelEn: "May to Oct",
      whenLabelEs: "May a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 150,
    },
    sections: [
      {
        heading: "Les champs de lave de Saleaula",
        headingEn: "The Saleaula Lava Fields",
        headingEs: "Los campos de lava de Saleaula",
        body:
          "Les éruptions successives du mont Matavanu entre 1905 et 1911 ensevelirent plusieurs villages du nord de Savai'i sous des coulées de lave noire, dont les vestiges pétrifiés restent visibles aujourd'hui à Saleaula, notamment les ruines d'une église dont seuls les murs de pierre résistèrent à la chaleur. Ce paysage lunaire de roche volcanique noire, qui contraste radicalement avec la végétation tropicale environnante, s'étend sur plusieurs kilomètres et témoigne de la puissance destructrice de l'un des événements géologiques les plus marquants de l'histoire samoane récente.",
        bodyEn:
          "The successive eruptions of Mount Matavanu between 1905 and 1911 buried several villages in northern Savai'i under black lava flows, whose petrified remains are still visible today at Saleaula, notably the ruins of a church whose stone walls alone withstood the heat. This lunar landscape of black volcanic rock, radically contrasting with the surrounding tropical vegetation, stretches over several kilometres and bears witness to the destructive power of one of the most significant geological events in recent Samoan history.",
        bodyEs:
          "Las erupciones sucesivas del monte Matavanu entre 1905 y 1911 sepultaron varios pueblos del norte de Savai'i bajo coladas de lava negra, cuyos vestigios petrificados siguen siendo visibles hoy en Saleaula, en particular las ruinas de una iglesia cuyos muros de piedra fueron los únicos que resistieron el calor. Este paisaje lunar de roca volcánica negra, que contrasta radicalmente con la vegetación tropical circundante, se extiende varios kilómetros y da testimonio del poder destructivo de uno de los acontecimientos geológicos más significativos de la historia samoana reciente.",
      },
      {
        heading: "Le berceau mythologique du peuple polynésien",
        headingEn: "The Mythological Cradle of the Polynesian People",
        headingEs: "La cuna mitológica del pueblo polinesio",
        body:
          "La mythologie samoane situe à Savai'i le lieu de création du monde et le point de départ des migrations qui peuplèrent l'ensemble du triangle polynésien, de Hawaï à l'île de Pâques en passant par la Nouvelle-Zélande, une tradition orale qui confère à l'île un statut spirituel unique dans la région. Cette identité de berceau ancestral se retrouve dans la vitalité du fa'a Samoa, mode de vie communautaire structuré autour des matai, chefs de famille élargie, et de cérémonies traditionnelles qui restent pleinement intégrées au quotidien des villages ruraux de l'île.",
        bodyEn:
          "Samoan mythology places at Savai'i the site of the world's creation and the starting point of the migrations that populated the entire Polynesian triangle, from Hawaii to Easter Island via New Zealand, an oral tradition that gives the island a unique spiritual status in the region. This identity as an ancestral cradle is reflected in the vitality of fa'a Samoa, a communal way of life structured around matai, extended-family chiefs, and traditional ceremonies that remain fully integrated into the daily life of the island's rural villages.",
        bodyEs:
          "La mitología samoana sitúa en Savai'i el lugar de la creación del mundo y el punto de partida de las migraciones que poblaron todo el triángulo polinesio, desde Hawái hasta la isla de Pascua pasando por Nueva Zelanda, una tradición oral que confiere a la isla un estatus espiritual único en la región. Esta identidad de cuna ancestral se refleja en la vitalidad del fa'a Samoa, modo de vida comunitario estructurado en torno a los matai, jefes de familia extendida, y ceremonias tradicionales que permanecen plenamente integradas en el día a día de los pueblos rurales de la isla.",
      },
    ],
    hotels: [
      {
        name: "Resort de plage au sud de Savai'i",
        nameEn: "A South Savai'i Beach Resort",
        nameEs: "Resort de playa al sur de Savai'i",
        description:
          "Un resort de plage simple au sud de Savai'i, bungalows en bois avec vue sur l'océan, à courte distance des champs de lave et des grottes de tunnels volcaniques.",
        descriptionEn:
          "A simple beach resort in southern Savai'i, wooden bungalows overlooking the ocean, a short distance from the lava fields and volcanic tunnel caves.",
        descriptionEs:
          "Un sencillo resort de playa al sur de Savai'i, bungalós de madera con vistas al océano, a poca distancia de los campos de lava y las cuevas de tubos volcánicos.",
        image: `${R2}/trips/samoa-savaii-hotel-1.jpg`,
      },
      {
        name: "Fale traditionnel familial",
        nameEn: "A Traditional Family Fale",
        nameEs: "Fale familiar tradicional",
        description:
          "Un fale traditionnel ouvert sur l'océan, hébergé par une famille samoane du village, immersion dans le fa'a Samoa et repas communautaires partagés selon la coutume locale.",
        descriptionEn:
          "A traditional fale open to the ocean, hosted by a Samoan family from the village, immersion in fa'a Samoa and shared communal meals following local custom.",
        descriptionEs:
          "Un fale tradicional abierto al océano, alojado por una familia samoana del pueblo, inmersión en el fa'a Samoa y comidas comunitarias compartidas según la costumbre local.",
        image: `${R2}/trips/samoa-savaii-hotel-2.jpg`,
      },
    ],
  },
);

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
