// Asie batch 1 (full region) — Japon, Thaïlande, Chine, Mongolie, Corée du Sud, Ouzbékistan,
// Taïwan. New trips bringing each destination to at least 3, styled on Black Tomato's real
// structure (a short number of named-hotel chapters, not an exhaustive day-by-day grind)
// rather than copying their text. This completes all 7 destinations in the Asie region. Run
// with:
//   npx tsx scripts/seed-trips-asie-1.ts
// Requires scripts/upload-images-asie-1.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "japon",
    tour: {
      name: "Japon : Naoshima, l'île de l'art, et le Kumano Kodo",
      nameEn: "Japan: Naoshima, the Art Island, and the Kumano Kodo",
      nameEs: "Japón: Naoshima, la isla del arte, y el Kumano Kodo",
      slug: "japon-naoshima-kumanokodo",
      image: `${R2}/journeys/japon-naoshima-kumanokodo-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une île de pêcheurs transformée en musée à ciel ouvert, puis l'un des deux seuls chemins de pèlerinage classés à l'UNESCO au monde",
      taglineEn: "A fishing island turned open-air museum, then one of only two pilgrimage trails in the world UNESCO-listed",
      taglineEs: "Una isla de pescadores transformada en museo al aire libre, y después una de las dos únicas rutas de peregrinación del mundo declaradas por la UNESCO",
      description:
        "Un voyage loin des circuits classiques Tokyo-Kyoto : Naoshima, île autrefois industrielle de la mer intérieure de Seto métamorphosée depuis les années 1990 par la fondation Benesse en un musée à ciel ouvert mêlant œuvres monumentales et architecture de Tando Ando, puis le Kumano Kodo, réseau de sentiers de pèlerinage vieux de plus de mille ans qui ne partage avec le chemin de Compostelle le statut de patrimoine mondial de l'UNESCO pour un itinéraire pédestre.",
      descriptionEn:
        "A journey far from the classic Tokyo-Kyoto circuit: Naoshima, once an industrial island in the Seto Inland Sea transformed since the 1990s by the Benesse Foundation into an open-air museum blending monumental artworks with Tadao Ando's architecture, then the Kumano Kodo, a network of pilgrimage trails over a thousand years old that shares with the Camino de Santiago the rare status of a UNESCO World Heritage walking route.",
      descriptionEs:
        "Un viaje lejos del circuito clásico Tokio-Kioto: Naoshima, antigua isla industrial del mar Interior de Seto transformada desde la década de 1990 por la fundación Benesse en un museo al aire libre que combina obras monumentales con la arquitectura de Tadao Ando, y después el Kumano Kodo, red de senderos de peregrinación de más de mil años que comparte con el Camino de Santiago el raro estatus de ruta a pie declarada Patrimonio de la Humanidad por la UNESCO.",
      price: 3400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avril à juin | Sept à nov",
      whenLabelEn: "April to June | Sept to Nov",
      whenLabelEs: "Abril a junio | sept a nov",
      bestMonths: "april,may,june,september,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 107,
    },
    chapters: [
      {
        title: "Naoshima, l'île de l'art",
        titleEn: "Naoshima, the Art Island",
        titleEs: "Naoshima, la isla del arte",
        intro:
          "Premier chapitre à Naoshima, petite île de la mer intérieure de Seto qui sombrait dans le déclin industriel avant que la fondation Benesse ne décide, à partir de 1992, d'y implanter musées et œuvres d'art contemporain plutôt que des infrastructures touristiques classiques. La citrouille jaune à pois de Yayoi Kusama posée sur une jetée, devenue l'un des symboles les plus photographiés du Japon, n'est que le prélude à un ensemble muséal signé par l'architecte Tadao Ando, en partie enterré dans la colline pour préserver le paysage.",
        introEn:
          "The first chapter unfolds on Naoshima, a small island in the Seto Inland Sea that was sinking into industrial decline before the Benesse Foundation decided, starting in 1992, to install museums and contemporary artworks rather than conventional tourist infrastructure. Yayoi Kusama's yellow polka-dot pumpkin sitting on a pier, now one of Japan's most photographed symbols, is only the prelude to a museum complex designed by architect Tadao Ando, partly buried into the hillside to preserve the landscape.",
        introEs:
          "El primer capítulo se desarrolla en Naoshima, pequeña isla del mar Interior de Seto que se hundía en el declive industrial antes de que la fundación Benesse decidiera, a partir de 1992, instalar museos y obras de arte contemporáneo en lugar de infraestructuras turísticas convencionales. La calabaza amarilla de lunares de Yayoi Kusama posada en un muelle, convertida en uno de los símbolos más fotografiados de Japón, no es más que el preludio de un complejo museístico firmado por el arquitecto Tadao Ando, parcialmente enterrado en la colina para preservar el paisaje.",
        galleryImages: `${R2}/journeys/japon-naoshima-gallery1.jpg,${R2}/journeys/japon-naoshima-gallery2.jpg,${R2}/journeys/japon-naoshima-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Le Benesse Art Site et l'architecture de Tadao Ando",
            titleEn: "The Benesse Art Site and Tadao Ando's architecture",
            titleEs: "El Benesse Art Site y la arquitectura de Tadao Ando",
            description:
              "Visite du Chichu Art Museum, en grande partie souterrain, et du Benesse House Museum, deux réalisations de l'architecte Tadao Ando qui dialoguent avec les œuvres de Monet, James Turrell et Walter De Maria.",
            descriptionEn:
              "A visit to the largely underground Chichu Art Museum and the Benesse House Museum, two works by architect Tadao Ando that engage in dialogue with pieces by Monet, James Turrell, and Walter De Maria.",
            descriptionEs:
              "Visita al Chichu Art Museum, en gran parte subterráneo, y al Benesse House Museum, dos obras del arquitecto Tadao Ando que dialogan con piezas de Monet, James Turrell y Walter De Maria.",
            image: `${R2}/journeys/japon-naoshima-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le village d'art et les maisons transformées",
            titleEn: "The art village and transformed houses",
            titleEs: "El pueblo del arte y las casas transformadas",
            description:
              "Promenade dans le village de pêcheurs d'Honmura, à la découverte du projet Art House, ancien bâtiments transformés en installations artistiques, avant un passage devant la citrouille jaune de Yayoi Kusama.",
            descriptionEn:
              "A stroll through the fishing village of Honmura, discovering the Art House Project, former buildings converted into art installations, before a stop at Yayoi Kusama's yellow pumpkin.",
            descriptionEs:
              "Paseo por el pueblo de pescadores de Honmura, para descubrir el Art House Project, antiguos edificios transformados en instalaciones artísticas, antes de pasar por la calabaza amarilla de Yayoi Kusama.",
            image: `${R2}/journeys/japon-naoshima-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le Kumano Kodo, le chemin sacré",
        titleEn: "The Kumano Kodo, the Sacred Path",
        titleEs: "El Kumano Kodo, el camino sagrado",
        intro:
          "Route vers la péninsule de Kii pour marcher sur une portion du Kumano Kodo, réseau de sentiers de pèlerinage tracés depuis plus de mille ans à travers une forêt de cèdres et reliant trois grands sanctuaires shintoïstes. Ce chemin partage avec celui de Compostelle le très rare statut de site classé à l'UNESCO pour un itinéraire de marche plutôt qu'un monument isolé, un jumelage officialisé en 1998 entre les deux routes de pèlerinage.",
        introEn:
          "The road to the Kii Peninsula to walk a stretch of the Kumano Kodo, a network of pilgrimage trails laid out over a thousand years ago through a cedar forest, linking three major Shinto shrines. This path shares with the Camino de Santiago the very rare status of a UNESCO-listed walking route rather than a single monument, a twinning formalised in 1998 between the two pilgrimage routes.",
        introEs:
          "Ruta hacia la península de Kii para caminar por un tramo del Kumano Kodo, red de senderos de peregrinación trazados hace más de mil años a través de un bosque de cedros y que une tres grandes santuarios sintoístas. Este camino comparte con el de Santiago de Compostela el rarísimo estatus de ruta a pie declarada por la UNESCO en lugar de un monumento aislado, un hermanamiento oficializado en 1998 entre ambas rutas de peregrinación.",
        galleryImages: `${R2}/journeys/japon-kumanokodo-gallery1.jpg,${R2}/journeys/japon-kumanokodo-gallery2.jpg,${R2}/journeys/japon-kumanokodo-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée jusqu'au grand sanctuaire de Kumano Hongu",
            titleEn: "A hike to the great Kumano Hongu shrine",
            titleEs: "Caminata hasta el gran santuario de Kumano Hongu",
            description:
              "Marche sur le tronçon Nakahechi du Kumano Kodo, à travers une forêt de cèdres centenaires, jusqu'au grand sanctuaire de Kumano Hongu, l'un des trois piliers spirituels du pèlerinage.",
            descriptionEn:
              "A walk along the Nakahechi stretch of the Kumano Kodo, through a forest of century-old cedars, to the great Kumano Hongu shrine, one of the pilgrimage's three spiritual pillars.",
            descriptionEs:
              "Caminata por el tramo Nakahechi del Kumano Kodo, a través de un bosque de cedros centenarios, hasta el gran santuario de Kumano Hongu, uno de los tres pilares espirituales de la peregrinación.",
            image: `${R2}/journeys/japon-kumanokodo-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le sanctuaire de Nachi et sa cascade sacrée",
            titleEn: "Nachi Shrine and its sacred waterfall",
            titleEs: "El santuario de Nachi y su cascada sagrada",
            description:
              "Visite du sanctuaire de Nachi, bâti face à la plus haute cascade à chute unique du Japon, vénérée comme une divinité shintoïste depuis des siècles, avant une nuit dans une auberge traditionnelle proposant un bain thermal.",
            descriptionEn:
              "A visit to Nachi Shrine, built facing Japan's tallest single-drop waterfall, venerated as a Shinto deity for centuries, before a night at a traditional inn offering a hot spring bath.",
            descriptionEs:
              "Visita al santuario de Nachi, construido frente a la cascada de caída única más alta de Japón, venerada como deidad sintoísta desde hace siglos, antes de una noche en una posada tradicional con baño termal.",
            image: `${R2}/journeys/japon-kumanokodo-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "thailande",
    tour: {
      name: "Thaïlande : Sukhothai et Koh Lanta",
      nameEn: "Thailand: Sukhothai and Koh Lanta",
      nameEs: "Tailandia: Sukhothai y Koh Lanta",
      slug: "thailande-sukhothai-kohlanta",
      image: `${R2}/journeys/thailande-sukhothai-kohlanta-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le berceau du premier royaume thaï, puis une île de la mer d'Andaman restée à l'écart du tourisme de masse",
      taglineEn: "The cradle of the first Thai kingdom, then an Andaman Sea island that has stayed off the mass-tourism trail",
      taglineEs: "La cuna del primer reino tailandés, y después una isla del mar de Andamán que se ha mantenido al margen del turismo de masas",
      description:
        "Un voyage entre deux Thaïlande rarement associées : Sukhothai, première capitale du royaume siamois fondée au XIIIe siècle et considérée comme le berceau de l'écriture et de l'identité thaïes, dont les ruines de brique et les bouddhas monumentaux s'étendent au milieu de bassins et de jardins, puis Koh Lanta, île de la mer d'Andaman restée plus préservée que Phuket ou Koh Phi Phi, où subsiste encore un village de pêcheurs sur pilotis.",
      descriptionEn:
        "A journey between two rarely associated sides of Thailand: Sukhothai, the first capital of the Siamese kingdom founded in the 13th century and considered the cradle of Thai script and identity, whose brick ruins and monumental Buddhas spread among ponds and gardens, then Koh Lanta, an Andaman Sea island that has remained more unspoilt than Phuket or Koh Phi Phi, where a stilted fishing village still survives.",
      descriptionEs:
        "Un viaje entre dos Tailandias rara vez asociadas: Sukhothai, primera capital del reino siamés fundada en el siglo XIII y considerada la cuna de la escritura y la identidad tailandesas, cuyas ruinas de ladrillo y budas monumentales se extienden entre estanques y jardines, y después Koh Lanta, isla del mar de Andamán que se ha mantenido más virgen que Phuket o Koh Phi Phi, donde todavía subsiste un pueblo de pescadores sobre pilotes.",
      price: 2200,
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
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 109,
    },
    chapters: [
      {
        title: "Sukhothai, le berceau du royaume siamois",
        titleEn: "Sukhothai, the Cradle of the Siamese Kingdom",
        titleEs: "Sukhothai, la cuna del reino siamés",
        intro:
          "Premier chapitre à Sukhothai, fondée en 1238 comme première capitale indépendante d'un royaume thaï, dont le nom signifie littéralement « aube du bonheur ». C'est ici que le roi Ramkhamhaeng aurait fait graver au XIIIe siècle la première inscription connue en alphabet thaï, faisant de la ville le berceau symbolique de l'identité et de l'écriture nationales, aujourd'hui préservé dans un vaste parc historique classé à l'UNESCO.",
        introEn:
          "The first chapter unfolds in Sukhothai, founded in 1238 as the first independent capital of a Thai kingdom, its name literally meaning \"dawn of happiness.\" It was here that King Ramkhamhaeng is said to have had the first known inscription in Thai script carved in the 13th century, making the city the symbolic cradle of national identity and writing, now preserved in a vast UNESCO-listed historical park.",
        introEs:
          "El primer capítulo se desarrolla en Sukhothai, fundada en 1238 como primera capital independiente de un reino tailandés, cuyo nombre significa literalmente «amanecer de la felicidad». Fue aquí donde el rey Ramkhamhaeng habría hecho grabar en el siglo XIII la primera inscripción conocida en alfabeto tailandés, lo que convierte a la ciudad en la cuna simbólica de la identidad y la escritura nacionales, hoy preservada en un vasto parque histórico declarado por la UNESCO.",
        galleryImages: `${R2}/journeys/thailande-sukhothai-gallery1.jpg,${R2}/journeys/thailande-sukhothai-gallery2.jpg,${R2}/journeys/thailande-sukhothai-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Le parc historique à vélo",
            titleEn: "The historical park by bicycle",
            titleEs: "El parque histórico en bicicleta",
            description:
              "Exploration à vélo du parc historique de Sukhothai, entre bouddhas monumentaux, bassins de lotus et vestiges de temples de brique, jusqu'au Wat Mahathat, principal sanctuaire du royaume.",
            descriptionEn:
              "A cycling exploration of Sukhothai Historical Park, among monumental Buddhas, lotus ponds, and brick temple remains, to Wat Mahathat, the kingdom's main sanctuary.",
            descriptionEs:
              "Exploración en bicicleta del parque histórico de Sukhothai, entre budas monumentales, estanques de loto y vestigios de templos de ladrillo, hasta el Wat Mahathat, principal santuario del reino.",
            image: `${R2}/journeys/thailande-sukhothai-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Si Satchanalai, la cité sœur",
            titleEn: "Si Satchanalai, the sister city",
            titleEs: "Si Satchanalai, la ciudad hermana",
            description:
              "Excursion jusqu'à Si Satchanalai, ancienne cité satellite de Sukhothai nichée dans un méandre de rivière, dont les ruines moins fréquentées offrent une atmosphère plus intime.",
            descriptionEn:
              "An excursion to Si Satchanalai, a former satellite city of Sukhothai nestled in a river bend, whose less-visited ruins offer a more intimate atmosphere.",
            descriptionEs:
              "Excursión hasta Si Satchanalai, antigua ciudad satélite de Sukhothai enclavada en un meandro del río, cuyas ruinas menos frecuentadas ofrecen un ambiente más íntimo.",
            image: `${R2}/journeys/thailande-sukhothai-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Koh Lanta et la mer d'Andaman",
        titleEn: "Koh Lanta and the Andaman Sea",
        titleEs: "Koh Lanta y el mar de Andamán",
        intro:
          "Vol vers le sud jusqu'à Koh Lanta, île de la province de Krabi restée plus tranquille que ses voisines Phuket et Koh Phi Phi, en partie grâce à un accès plus long qui a longtemps découragé le tourisme de masse. La communauté des Chao Ley, ou « gitans de la mer », y perpétue un mode de vie traditionnel de pêche dans un village sur pilotis, tandis que la côte ouest de l'île s'étire en plages de sable ponctuées de formations calcaires typiques de la mer d'Andaman.",
        introEn:
          "A flight south to Koh Lanta, an island in Krabi province that has stayed quieter than its neighbours Phuket and Koh Phi Phi, partly thanks to a longer journey that has long discouraged mass tourism. The Chao Ley community, or \"sea gypsies,\" carries on a traditional fishing way of life in a stilted village, while the island's west coast stretches into sandy beaches dotted with limestone formations typical of the Andaman Sea.",
        introEs:
          "Vuelo hacia el sur hasta Koh Lanta, isla de la provincia de Krabi que se ha mantenido más tranquila que sus vecinas Phuket y Koh Phi Phi, en parte gracias a un acceso más largo que durante mucho tiempo desanimó el turismo de masas. La comunidad chao ley, o «gitanos del mar», perpetúa allí un modo de vida pesquero tradicional en un pueblo sobre pilotes, mientras que la costa oeste de la isla se extiende en playas de arena salpicadas de formaciones calizas típicas del mar de Andamán.",
        galleryImages: `${R2}/journeys/thailande-kohlanta-gallery1.jpg,${R2}/journeys/thailande-kohlanta-gallery2.jpg,${R2}/journeys/thailande-kohlanta-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 85,
        days: [
          {
            dayNumber: 1,
            title: "Le village des Chao Ley et la vieille ville",
            titleEn: "The Chao Ley village and the old town",
            titleEs: "El pueblo chao ley y el casco antiguo",
            description:
              "Visite du village sur pilotis de la communauté Chao Ley, puis promenade dans la vieille ville de Koh Lanta, ancien comptoir commercial aux maisons de bois sur la côte est.",
            descriptionEn:
              "A visit to the stilted village of the Chao Ley community, then a stroll through Koh Lanta's old town, a former trading post of wooden houses on the east coast.",
            descriptionEs:
              "Visita al pueblo sobre pilotes de la comunidad chao ley, y paseo por el casco antiguo de Koh Lanta, antiguo puesto comercial de casas de madera en la costa este.",
            image: `${R2}/journeys/thailande-kohlanta-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Excursion en bateau vers les îles voisines",
            titleEn: "A boat excursion to the neighbouring islands",
            titleEs: "Excursión en barco a las islas vecinas",
            description:
              "Sortie en longtail boat vers les petites îles voisines de Koh Rok, snorkeling au-dessus de récifs coralliens préservés, loin de l'affluence des sites plus connus de la région.",
            descriptionEn:
              "A longtail boat trip to the small neighbouring islands of Koh Rok, snorkelling above preserved coral reefs, far from the crowds of the region's better-known sites.",
            descriptionEs:
              "Salida en longtail boat hacia las pequeñas islas vecinas de Koh Rok, esnórquel sobre arrecifes de coral preservados, lejos de la afluencia de los lugares más conocidos de la región.",
            image: `${R2}/journeys/thailande-kohlanta-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "chine",
    tour: {
      name: "Chine : Zhangjiajie et Fenghuang",
      nameEn: "China: Zhangjiajie and Fenghuang",
      nameEs: "China: Zhangjiajie y Fenghuang",
      slug: "chine-zhangjiajie-fenghuang",
      image: `${R2}/journeys/chine-zhangjiajie-fenghuang-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Les pitons rocheux qui ont inspiré les montagnes flottantes d'Avatar, puis une cité fluviale de plus de mille trois cents ans",
      taglineEn: "The rock pillars that inspired the floating mountains of Avatar, then a river city over thirteen hundred years old",
      taglineEs: "Los pilares rocosos que inspiraron las montañas flotantes de Avatar, y después una ciudad fluvial de más de mil trescientos años",
      description:
        "Un voyage dans la province du Hunan, loin de Pékin et Xi'an : Zhangjiajie, forêt de plus de trois mille pitons de grès et de quartzite qui inspira les montagnes flottantes du film Avatar, explorée depuis des passerelles de verre suspendues au-dessus du vide, puis Fenghuang, cité fluviale vieille de plus de treize siècles dont les maisons sur pilotis en bois bordent encore la rivière Tuo, largement épargnée par le tourisme de masse qui touche d'autres villes anciennes chinoises.",
      descriptionEn:
        "A journey through Hunan province, far from Beijing and Xi'an: Zhangjiajie, a forest of over three thousand sandstone and quartzite pillars that inspired the floating mountains of the film Avatar, explored from glass walkways suspended over the void, then Fenghuang, a river city over thirteen centuries old whose wooden stilt houses still line the Tuo River, largely spared the mass tourism affecting other ancient Chinese towns.",
      descriptionEs:
        "Un viaje por la provincia de Hunan, lejos de Pekín y Xi'an: Zhangjiajie, bosque de más de tres mil pilares de arenisca y cuarcita que inspiró las montañas flotantes de la película Avatar, explorado desde pasarelas de cristal suspendidas sobre el vacío, y después Fenghuang, ciudad fluvial de más de trece siglos cuyas casas de madera sobre pilotes todavía bordean el río Tuo, en gran parte a salvo del turismo de masas que afecta a otras ciudades antiguas chinas.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avril à mai | Sept à nov",
      whenLabelEn: "April to May | Sept to Nov",
      whenLabelEs: "Abril a mayo | sept a nov",
      bestMonths: "april,may,september,october,november",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 111,
    },
    chapters: [
      {
        title: "Zhangjiajie, les montagnes d'Avatar",
        titleEn: "Zhangjiajie, the Avatar Mountains",
        titleEs: "Zhangjiajie, las montañas de Avatar",
        intro:
          "Premier chapitre à Zhangjiajie, premier parc forestier national de Chine créé en 1982, qui rassemble plus de trois mille pitons de grès et de quartzite sculptés par des millions d'années d'érosion. L'un des pitons les plus emblématiques, rebaptisé « montagne Avatar-Hallelujah » après la sortie du film de James Cameron qui s'en inspira pour ses montagnes flottantes, se découvre depuis un pont de verre suspendu à plus de trois cents mètres au-dessus des gorges.",
        introEn:
          "The first chapter unfolds at Zhangjiajie, China's first national forest park created in 1982, which gathers over three thousand sandstone and quartzite pillars sculpted by millions of years of erosion. One of the most iconic pillars, renamed \"Avatar Hallelujah Mountain\" after James Cameron's film that drew inspiration from it for its floating mountains, is best seen from a glass bridge suspended over three hundred metres above the gorges.",
        introEs:
          "El primer capítulo se desarrolla en Zhangjiajie, primer parque forestal nacional de China creado en 1982, que reúne más de tres mil pilares de arenisca y cuarcita esculpidos por millones de años de erosión. Uno de los pilares más emblemáticos, rebautizado «montaña Avatar Aleluya» tras el estreno de la película de James Cameron que se inspiró en él para sus montañas flotantes, se descubre desde un puente de cristal suspendido a más de trescientos metros sobre las gargantas.",
        galleryImages: `${R2}/journeys/chine-zhangjiajie-gallery1.jpg,${R2}/journeys/chine-zhangjiajie-gallery2.jpg,${R2}/journeys/chine-zhangjiajie-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Le pont de verre le plus haut du monde",
            titleEn: "The world's highest glass bridge",
            titleEs: "El puente de cristal más alto del mundo",
            description:
              "Traversée du pont de verre de Zhangjiajie, suspendu à plus de trois cents mètres au-dessus d'une gorge, avant une randonnée sur les crêtes de la montagne Tianzi pour admirer la forêt de pitons rocheux.",
            descriptionEn:
              "A crossing of the Zhangjiajie glass bridge, suspended over three hundred metres above a gorge, then a hike along the Tianzi Mountain ridges to admire the forest of rock pillars.",
            descriptionEs:
              "Cruce del puente de cristal de Zhangjiajie, suspendido a más de trescientos metros sobre una garganta, y caminata por las crestas de la montaña Tianzi para admirar el bosque de pilares rocosos.",
            image: `${R2}/journeys/chine-zhangjiajie-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "L'ascenseur de Bailong et le canyon de verre",
            titleEn: "The Bailong elevator and the glass canyon",
            titleEs: "El ascensor de Bailong y el cañón de cristal",
            description:
              "Ascension à bord du Bailong, ascenseur extérieur le plus haut du monde taillé à même la falaise, puis marche sur les passerelles suspendues du Grand Canyon de Zhangjiajie.",
            descriptionEn:
              "An ascent aboard the Bailong Elevator, the world's tallest outdoor lift carved into the cliff face itself, then a walk on the suspended walkways of the Zhangjiajie Grand Canyon.",
            descriptionEs:
              "Ascenso a bordo del Bailong, el ascensor exterior más alto del mundo tallado directamente en el acantilado, y caminata por las pasarelas suspendidas del Gran Cañón de Zhangjiajie.",
            image: `${R2}/journeys/chine-zhangjiajie-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Fenghuang, la cité phénix",
        titleEn: "Fenghuang, the Phoenix City",
        titleEs: "Fenghuang, la ciudad fénix",
        intro:
          "Route vers Fenghuang, dont le nom signifie « phénix » et dont l'histoire remonte à plus de treize cents ans, cité fluviale fondée par les dynasties Ming et Qing le long de la rivière Tuo. Les maisons en bois sur pilotis, les ponts couverts et les remparts de pierre encore intacts confèrent à la ville une atmosphère préservée, en partie due à son isolement historique dans les montagnes du Hunan qui l'a longtemps tenue à l'écart des grands axes touristiques.",
        introEn:
          "The road to Fenghuang, whose name means \"phoenix\" and whose history stretches back over thirteen hundred years, a river city founded during the Ming and Qing dynasties along the Tuo River. The wooden stilt houses, covered bridges, and still-intact stone ramparts give the town a preserved atmosphere, partly due to its historical isolation in the Hunan mountains that long kept it off the main tourist routes.",
        introEs:
          "Ruta hacia Fenghuang, cuyo nombre significa «fénix» y cuya historia se remonta a más de mil trescientos años, ciudad fluvial fundada durante las dinastías Ming y Qing a orillas del río Tuo. Las casas de madera sobre pilotes, los puentes cubiertos y las murallas de piedra todavía intactas confieren a la ciudad una atmósfera preservada, debida en parte a su aislamiento histórico en las montañas de Hunan que la mantuvo mucho tiempo al margen de las grandes rutas turísticas.",
        galleryImages: `${R2}/journeys/chine-fenghuang-gallery1.jpg,${R2}/journeys/chine-fenghuang-gallery2.jpg,${R2}/journeys/chine-fenghuang-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Les maisons sur pilotis de la rivière Tuo",
            titleEn: "The stilt houses of the Tuo River",
            titleEs: "Las casas sobre pilotes del río Tuo",
            description:
              "Promenade en bateau sur la rivière Tuo au coucher du soleil, à la découverte des maisons en bois sur pilotis suspendues au-dessus de l'eau, puis dîner dans un restaurant flottant traditionnel.",
            descriptionEn:
              "A boat ride on the Tuo River at sunset, discovering the wooden stilt houses suspended above the water, then dinner at a traditional floating restaurant.",
            descriptionEs:
              "Paseo en barco por el río Tuo al atardecer, para descubrir las casas de madera sobre pilotes suspendidas sobre el agua, y cena en un restaurante flotante tradicional.",
            image: `${R2}/journeys/chine-fenghuang-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les remparts et la vieille ville de Fenghuang",
            titleEn: "The ramparts and Fenghuang's old town",
            titleEs: "Las murallas y el casco antiguo de Fenghuang",
            description:
              "Marche le long des remparts de pierre de la dynastie Ming, puis exploration des ruelles pavées de la vieille ville, entre ateliers d'artisans en argent et maisons traditionnelles miao et tujia.",
            descriptionEn:
              "A walk along the Ming-dynasty stone ramparts, then an exploration of the old town's cobbled lanes, among silver-craft workshops and traditional Miao and Tujia houses.",
            descriptionEs:
              "Caminata por las murallas de piedra de la dinastía Ming, y exploración de las callejuelas empedradas del casco antiguo, entre talleres de plateros y casas tradicionales miao y tujia.",
            image: `${R2}/journeys/chine-fenghuang-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "mongolie",
    tour: {
      name: "Mongolie : l'Altaï et les aigles des Kazakhs",
      nameEn: "Mongolia: The Altai and the Kazakh Eagle Hunters",
      nameEs: "Mongolia: el Altái y las águilas de los kazajos",
      slug: "mongolie-altai-aigle",
      image: `${R2}/journeys/mongolie-altai-aigle-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Les montagnes les plus reculées du pays, puis une tradition de chasse à l'aigle vieille de plusieurs siècles transmise de père en fille",
      taglineEn: "The country's most remote mountains, then a centuries-old eagle-hunting tradition passed from father to daughter",
      taglineEs: "Las montañas más remotas del país, y después una tradición de caza con águila centenaria transmitida de padre a hija",
      description:
        "Un voyage dans l'extrême ouest de la Mongolie, à l'opposé du désert de Gobi : les montagnes de l'Altaï, chaîne reculée à la frontière du Kazakhstan, de la Russie et de la Chine, puis la communauté kazakhe d'Ölgii, qui perpétue depuis des siècles la chasse à l'aigle royal, tradition transmise oralement de génération en génération et récemment rouverte aux femmes chasseuses.",
      descriptionEn:
        "A journey through Mongolia's far west, the opposite of the Gobi Desert: the Altai Mountains, a remote range on the border of Kazakhstan, Russia, and China, then the Kazakh community of Ölgii, which has practised golden eagle hunting for centuries, a tradition passed down orally from generation to generation and recently reopened to women hunters.",
      descriptionEs:
        "Un viaje por el extremo oeste de Mongolia, lo opuesto al desierto de Gobi: las montañas del Altái, cordillera remota en la frontera de Kazajistán, Rusia y China, y después la comunidad kazaja de Ölgii, que practica desde hace siglos la caza con águila real, tradición transmitida oralmente de generación en generación y reabierta recientemente a las cazadoras mujeres.",
      price: 3500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Sept à oct",
      whenLabelEn: "Sept to Oct",
      whenLabelEs: "Sept a oct",
      bestMonths: "september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 113,
    },
    chapters: [
      {
        title: "Les montagnes de l'Altaï",
        titleEn: "The Altai Mountains",
        titleEs: "Las montañas del Altái",
        intro:
          "Premier chapitre dans les montagnes de l'Altaï, chaîne reculée à l'extrême ouest de la Mongolie où se rejoignent les frontières du Kazakhstan, de la Russie et de la Chine, région parmi les moins visitées du pays malgré des sommets dépassant quatre mille mètres et des glaciers encore actifs. Les steppes d'altitude, parcourues par des troupeaux de chameaux de Bactriane à deux bosses, contrastent avec les vallées verdoyantes où campent encore des familles semi-nomades l'été.",
        introEn:
          "The first chapter unfolds in the Altai Mountains, a remote range in Mongolia's far west where the borders of Kazakhstan, Russia, and China meet, one of the country's least-visited regions despite peaks over four thousand metres and still-active glaciers. High-altitude steppes, roamed by herds of two-humped Bactrian camels, contrast with green valleys where semi-nomadic families still camp in summer.",
        introEs:
          "El primer capítulo se desarrolla en las montañas del Altái, cordillera remota en el extremo oeste de Mongolia donde confluyen las fronteras de Kazajistán, Rusia y China, una de las regiones menos visitadas del país pese a contar con cumbres de más de cuatro mil metros y glaciares todavía activos. Las estepas de altitud, recorridas por rebaños de camellos bactrianos de dos jorobas, contrastan con valles verdes donde todavía acampan familias seminómadas en verano.",
        galleryImages: `${R2}/journeys/mongolie-altai-gallery1.jpg,${R2}/journeys/mongolie-altai-gallery2.jpg,${R2}/journeys/mongolie-altai-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "À cheval dans les steppes de l'Altaï",
            titleEn: "On horseback across the Altai steppes",
            titleEs: "A caballo por las estepas del Altái",
            description:
              "Randonnée à cheval dans les steppes reculées de l'Altaï, à la rencontre de familles semi-nomades qui campent sous ger l'été, avec vue sur les sommets glaciaires en toile de fond.",
            descriptionEn:
              "A horseback ride through the remote Altai steppes, meeting semi-nomadic families camping under ger in summer, with glaciated peaks as a backdrop.",
            descriptionEs:
              "Caminata a caballo por las remotas estepas del Altái, al encuentro de familias seminómadas que acampan bajo gers en verano, con las cumbres glaciares como telón de fondo.",
            image: `${R2}/journeys/mongolie-altai-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Nuit sous ger chez une famille nomade",
            titleEn: "A night in a ger with a nomadic family",
            titleEs: "Noche en un ger con una familia nómada",
            description:
              "Nuit chez une famille nomade de l'Altaï, partage d'un repas traditionnel à base de produits laitiers de chamelle et de mouton, autour d'un poêle central alimenté à la bouse séchée.",
            descriptionEn:
              "A night with an Altai nomadic family, sharing a traditional meal of camel dairy products and mutton, around a central stove fuelled by dried dung.",
            descriptionEs:
              "Noche con una familia nómada del Altái, compartiendo una comida tradicional a base de lácteos de camella y cordero, en torno a una estufa central alimentada con boñiga seca.",
            image: `${R2}/journeys/mongolie-altai-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Ölgii et les aigles des Kazakhs",
        titleEn: "Ölgii and the Kazakh Eagle Hunters",
        titleEs: "Ölgii y las águilas de los kazajos",
        intro:
          "Route vers Ölgii, capitale de la minorité kazakhe de Mongolie qui représente près de neuf dixièmes de la population locale et perpétue depuis des siècles la chasse au renard et au lièvre avec des aigles royaux dressés. Cette tradition, transmise oralement de génération en génération et longtemps réservée aux hommes, s'est récemment rouverte aux femmes chasseuses, dont la plus connue est devenue une figure internationale après un documentaire consacré à son apprentissage.",
        introEn:
          "The road to Ölgii, capital of Mongolia's Kazakh minority, which makes up nearly nine-tenths of the local population and has practised fox and hare hunting with trained golden eagles for centuries. This tradition, passed down orally from generation to generation and long reserved for men, has recently reopened to women hunters, the most famous of whom became an international figure after a documentary about her training.",
        introEs:
          "Ruta hacia Ölgii, capital de la minoría kazaja de Mongolia, que representa casi nueve décimas partes de la población local y practica desde hace siglos la caza de zorros y liebres con águilas reales adiestradas. Esta tradición, transmitida oralmente de generación en generación y reservada durante mucho tiempo a los hombres, se ha reabierto recientemente a las cazadoras mujeres, la más conocida de las cuales se convirtió en una figura internacional tras un documental sobre su aprendizaje.",
        galleryImages: `${R2}/journeys/mongolie-aigle-gallery1.jpg,${R2}/journeys/mongolie-aigle-gallery2.jpg,${R2}/journeys/mongolie-aigle-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Rencontre avec une famille de chasseurs à l'aigle",
            titleEn: "Meeting an eagle-hunting family",
            titleEs: "Encuentro con una familia de cazadores con águila",
            description:
              "Visite d'une famille kazakhe d'Ölgii perpétuant la chasse à l'aigle royal, démonstration du dressage et de la relation entre le chasseur et son aigle, capturé jeune puis relâché après plusieurs années.",
            descriptionEn:
              "A visit to a Kazakh family from Ölgii carrying on golden eagle hunting, a demonstration of the training and the bond between hunter and eagle, captured young and released after several years.",
            descriptionEs:
              "Visita a una familia kazaja de Ölgii que perpetúa la caza con águila real, demostración del adiestramiento y del vínculo entre el cazador y su águila, capturada joven y liberada tras varios años.",
            image: `${R2}/journeys/mongolie-aigle-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Démonstration de chasse à cheval",
            titleEn: "A horseback hunting demonstration",
            titleEs: "Demostración de caza a caballo",
            description:
              "Démonstration de chasse à l'aigle à cheval dans les collines autour d'Ölgii, technique ancestrale où l'aigle, perché sur le bras ganté du chasseur, est lâché à vue d'un renard ou d'un lièvre.",
            descriptionEn:
              "A demonstration of horseback eagle hunting in the hills around Ölgii, an ancestral technique in which the eagle, perched on the hunter's gloved arm, is released at the sight of a fox or hare.",
            descriptionEs:
              "Demostración de caza con águila a caballo en las colinas alrededor de Ölgii, técnica ancestral en la que el águila, posada en el brazo enguantado del cazador, es soltada al avistar un zorro o una liebre.",
            image: `${R2}/journeys/mongolie-aigle-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "coree-du-sud",
    tour: {
      name: "Corée du Sud : le mont Seorak et Andong",
      nameEn: "South Korea: Mount Seorak and Andong",
      nameEs: "Corea del Sur: el monte Seorak y Andong",
      slug: "coree-du-sud-seorak-andong",
      image: `${R2}/journeys/coree-seorak-andong-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le plus spectaculaire massif granitique du pays, puis un village confucéen préservé depuis six cents ans",
      taglineEn: "The country's most spectacular granite massif, then a Confucian village preserved for six hundred years",
      taglineEs: "El macizo granítico más espectacular del país, y después un pueblo confuciano preservado desde hace seiscientos años",
      description:
        "Un voyage entre deux facettes traditionnelles de la Corée du Sud, loin de Séoul et de Gyeongju : le parc national du mont Seorak, massif granitique aux pics escarpés et aux temples bouddhistes accrochés à la roche, considéré comme le plus spectaculaire du pays, puis Andong, ville confucéenne dont le village de Hahoe, classé à l'UNESCO, conserve depuis six cents ans une architecture traditionnelle de maisons à toit de chaume et de tuile.",
      descriptionEn:
        "A journey between two traditional sides of South Korea, far from Seoul and Gyeongju: Seoraksan National Park, a granite massif of jagged peaks and Buddhist temples clinging to the rock, considered the country's most spectacular, then Andong, a Confucian city whose Hahoe village, UNESCO-listed, has preserved traditional thatched- and tile-roofed house architecture for six hundred years.",
      descriptionEs:
        "Un viaje entre dos caras tradicionales de Corea del Sur, lejos de Seúl y Gyeongju: el parque nacional del monte Seorak, macizo granítico de picos escarpados y templos budistas aferrados a la roca, considerado el más espectacular del país, y después Andong, ciudad confuciana cuyo pueblo de Hahoe, declarado por la UNESCO, conserva desde hace seiscientos años una arquitectura tradicional de casas con tejado de paja y de teja.",
      price: 2500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avril à mai | Oct à nov",
      whenLabelEn: "April to May | Oct to Nov",
      whenLabelEs: "Abril a mayo | oct a nov",
      bestMonths: "april,may,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 115,
    },
    chapters: [
      {
        title: "Le mont Seorak et ses temples",
        titleEn: "Mount Seorak and its Temples",
        titleEs: "El monte Seorak y sus templos",
        intro:
          "Premier chapitre au parc national du mont Seorak, massif granitique de la côte est considéré comme le plus spectaculaire de Corée du Sud, dont les pics escarpés se parent chaque automne de couleurs flamboyantes qui attirent des randonneurs du pays entier. Le temple de Sinheungsa, fondé au VIIe siècle et abritant l'un des plus grands bouddhas de bronze du pays, sert de point de départ à plusieurs sentiers menant vers des sommets granitiques polis par l'érosion.",
        introEn:
          "The first chapter unfolds at Seoraksan National Park, an east-coast granite massif considered South Korea's most spectacular, whose jagged peaks are adorned each autumn with blazing colours that draw hikers from across the country. Sinheungsa Temple, founded in the 7th century and home to one of the country's largest bronze Buddhas, serves as the starting point for several trails leading to granite summits polished by erosion.",
        introEs:
          "El primer capítulo se desarrolla en el parque nacional del monte Seorak, macizo granítico de la costa este considerado el más espectacular de Corea del Sur, cuyos picos escarpados se visten cada otoño de colores flamígeros que atraen a excursionistas de todo el país. El templo de Sinheungsa, fundado en el siglo VII y que alberga uno de los mayores budas de bronce del país, sirve de punto de partida a varios senderos que conducen a cumbres graníticas pulidas por la erosión.",
        galleryImages: `${R2}/journeys/coree-seorak-gallery1.jpg,${R2}/journeys/coree-seorak-gallery2.jpg,${R2}/journeys/coree-seorak-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Le temple de Sinheungsa et le téléphérique",
            titleEn: "Sinheungsa Temple and the cable car",
            titleEs: "El templo de Sinheungsa y el teleférico",
            description:
              "Visite du temple de Sinheungsa et de son grand bouddha de bronze, puis ascension en téléphérique jusqu'à un promontoire rocheux offrant une vue panoramique sur les pics du mont Seorak.",
            descriptionEn:
              "A visit to Sinheungsa Temple and its great bronze Buddha, then a cable car ascent to a rocky outcrop offering a panoramic view over the peaks of Mount Seorak.",
            descriptionEs:
              "Visita al templo de Sinheungsa y a su gran buda de bronce, y ascenso en teleférico hasta un promontorio rocoso con vistas panorámicas sobre las cumbres del monte Seorak.",
            image: `${R2}/journeys/coree-seorak-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée jusqu'à Ulsanbawi",
            titleEn: "A hike to Ulsanbawi",
            titleEs: "Caminata hasta Ulsanbawi",
            description:
              "Randonnée jusqu'au sommet rocheux d'Ulsanbawi, formation granitique aux six pics distincts, accessible par un escalier métallique aménagé à flanc de falaise.",
            descriptionEn:
              "A hike to the rocky summit of Ulsanbawi, a granite formation with six distinct peaks, reached by a metal staircase set into the cliffside.",
            descriptionEs:
              "Caminata hasta la cumbre rocosa de Ulsanbawi, formación granítica de seis picos distintos, accesible por una escalera metálica dispuesta en la ladera del acantilado.",
            image: `${R2}/journeys/coree-seorak-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Andong et le village de Hahoe",
        titleEn: "Andong and Hahoe Village",
        titleEs: "Andong y el pueblo de Hahoe",
        intro:
          "Route vers Andong, considérée comme le cœur du confucianisme coréen en raison de la concentration exceptionnelle d'académies et de clans lettrés qui s'y sont établis à partir du XVe siècle. Le village de Hahoe, niché dans un méandre de la rivière Nakdong et classé à l'UNESCO, conserve une architecture traditionnelle de maisons à toit de chaume ou de tuile organisées selon une hiérarchie sociale confucéenne encore lisible dans le plan du village.",
        introEn:
          "The road to Andong, considered the heart of Korean Confucianism owing to the exceptional concentration of academies and scholarly clans that settled there from the 15th century onward. Hahoe Village, nestled in a bend of the Nakdong River and UNESCO-listed, retains traditional architecture of thatched- or tile-roofed houses arranged according to a Confucian social hierarchy still legible in the village layout.",
        introEs:
          "Ruta hacia Andong, considerada el corazón del confucianismo coreano por la excepcional concentración de academias y clanes letrados que se establecieron allí a partir del siglo XV. El pueblo de Hahoe, enclavado en un meandro del río Nakdong y declarado por la UNESCO, conserva una arquitectura tradicional de casas con tejado de paja o de teja organizadas según una jerarquía social confuciana todavía legible en el trazado del pueblo.",
        galleryImages: `${R2}/journeys/coree-andong-gallery1.jpg,${R2}/journeys/coree-andong-gallery2.jpg,${R2}/journeys/coree-andong-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Le village de Hahoe et ses maisons ancestrales",
            titleEn: "Hahoe Village and its ancestral houses",
            titleEs: "El pueblo de Hahoe y sus casas ancestrales",
            description:
              "Visite du village de Hahoe, à la découverte des maisons ancestrales des clans Ryu, et assistance à une représentation du masque traditionnel de Hahoe, art populaire séculaire classé au patrimoine immatériel.",
            descriptionEn:
              "A visit to Hahoe Village, discovering the ancestral houses of the Ryu clans, and attendance at a performance of the traditional Hahoe mask dance, a centuries-old folk art on the intangible heritage list.",
            descriptionEs:
              "Visita al pueblo de Hahoe, para descubrir las casas ancestrales de los clanes Ryu, y asistencia a una representación de la máscara tradicional de Hahoe, arte popular centenario incluido en el patrimonio inmaterial.",
            image: `${R2}/journeys/coree-andong-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les académies confucéennes de Dosan",
            titleEn: "The Confucian academies of Dosan",
            titleEs: "Las academias confucianas de Dosan",
            description:
              "Visite de l'académie confucéenne de Dosan Seowon, fondée au XVIe siècle par l'un des plus grands philosophes coréens, dans un cadre boisé au bord d'une rivière propice à la méditation.",
            descriptionEn:
              "A visit to Dosan Seowon Confucian Academy, founded in the 16th century by one of Korea's greatest philosophers, in a wooded riverside setting conducive to meditation.",
            descriptionEs:
              "Visita a la academia confuciana de Dosan Seowon, fundada en el siglo XVI por uno de los grandes filósofos coreanos, en un entorno boscoso junto a un río propicio para la meditación.",
            image: `${R2}/journeys/coree-andong-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "ouzbekistan",
    tour: {
      name: "Ouzbékistan : Noukous et le désert du Kyzylkoum",
      nameEn: "Uzbekistan: Nukus and the Kyzylkum Desert",
      nameEs: "Uzbekistán: Nukus y el desierto de Kyzylkum",
      slug: "ouzbekistan-noukous-kyzylkoum",
      image: `${R2}/journeys/ouzbekistan-noukous-kyzylkoum-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un musée d'art interdit soviétique perdu au bout du monde, puis des coques de navires rouillées échouées en plein désert",
      taglineEn: "A museum of forbidden Soviet art lost at the end of the world, then rusted ship hulls stranded in the middle of the desert",
      taglineEs: "Un museo de arte prohibido soviético perdido en el fin del mundo, y después cascos de barcos oxidados varados en pleno desierto",
      description:
        "Un voyage dans l'ouest reculé de l'Ouzbékistan, loin de Samarcande et Khiva : Noukous, capitale du Karakalpakstan qui abrite un improbable musée d'art d'avant-garde soviétique interdit, sauvé de la destruction par un collectionneur qui le fit venir dans cette ville isolée où les autorités moscovites ne pouvaient l'atteindre, puis le désert du Kyzylkoum et les rives asséchées de la mer d'Aral, où des coques de bateaux rouillées reposent depuis des décennies sur un sol devenu sable.",
      descriptionEn:
        "A journey through remote western Uzbekistan, far from Samarkand and Khiva: Nukus, capital of Karakalpakstan, home to an improbable museum of forbidden Soviet avant-garde art, saved from destruction by a collector who brought it to this isolated city beyond the reach of Moscow's authorities, then the Kyzylkum Desert and the dried-up shores of the Aral Sea, where rusted ship hulls have rested for decades on ground turned to sand.",
      descriptionEs:
        "Un viaje por el remoto oeste de Uzbekistán, lejos de Samarcanda y Jiva: Nukus, capital de Karakalpakistán, que alberga un improbable museo de arte de vanguardia soviética prohibido, salvado de la destrucción por un coleccionista que lo llevó a esta ciudad aislada, fuera del alcance de las autoridades moscovitas, y después el desierto de Kyzylkum y las orillas secas del mar de Aral, donde cascos de barcos oxidados descansan desde hace décadas sobre un suelo convertido en arena.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avril à mai | Sept à oct",
      whenLabelEn: "April to May | Sept to Oct",
      whenLabelEs: "Abril a mayo | sept a oct",
      bestMonths: "april,may,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 117,
    },
    chapters: [
      {
        title: "Noukous, le musée interdit",
        titleEn: "Nukus, the Forbidden Museum",
        titleEs: "Nukus, el museo prohibido",
        intro:
          "Premier chapitre à Noukous, capitale de la région autonome du Karakalpakstan, qui abrite l'un des musées d'art les plus surprenants d'Asie centrale : plus de quatre-vingt-dix mille œuvres d'avant-garde soviétique interdites sous Staline, sauvées par le collectionneur Igor Savitsky, qui profita de l'éloignement de la ville pour constituer discrètement cette collection à l'abri de la censure moscovite. Le musée Savitsky, surnommé le « Louvre du désert », révèle un pan méconnu de l'histoire de l'art du XXe siècle.",
        introEn:
          "The first chapter unfolds in Nukus, capital of the autonomous region of Karakalpakstan, home to one of Central Asia's most surprising art museums: over ninety thousand works of Soviet avant-garde art banned under Stalin, saved by collector Igor Savitsky, who took advantage of the city's remoteness to quietly assemble this collection away from Moscow's censorship. The Savitsky Museum, nicknamed the \"Louvre of the desert,\" reveals a little-known chapter of 20th-century art history.",
        introEs:
          "El primer capítulo se desarrolla en Nukus, capital de la región autónoma de Karakalpakistán, que alberga uno de los museos de arte más sorprendentes de Asia Central: más de noventa mil obras de vanguardia soviética prohibidas bajo Stalin, salvadas por el coleccionista Igor Savitsky, que aprovechó el aislamiento de la ciudad para reunir discretamente esta colección lejos de la censura moscovita. El museo Savitsky, apodado el «Louvre del desierto», revela un capítulo poco conocido de la historia del arte del siglo XX.",
        galleryImages: `${R2}/journeys/ouzbekistan-noukous-gallery1.jpg,${R2}/journeys/ouzbekistan-noukous-gallery2.jpg,${R2}/journeys/ouzbekistan-noukous-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Le musée Savitsky et l'avant-garde interdite",
            titleEn: "The Savitsky Museum and forbidden avant-garde",
            titleEs: "El museo Savitsky y la vanguardia prohibida",
            description:
              "Visite guidée du musée Savitsky, à la découverte de peintures d'avant-garde soviétique sauvées de la destruction, entre expressionnisme, constructivisme et art turkestanais méconnu en Occident.",
            descriptionEn:
              "A guided visit to the Savitsky Museum, discovering Soviet avant-garde paintings saved from destruction, spanning expressionism, constructivism, and Turkestani art little known in the West.",
            descriptionEs:
              "Visita guiada al museo Savitsky, para descubrir pinturas de vanguardia soviética salvadas de la destrucción, entre expresionismo, constructivismo y arte turquestano poco conocido en Occidente.",
            image: `${R2}/journeys/ouzbekistan-noukous-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les forteresses antiques du Karakalpakstan",
            titleEn: "The ancient fortresses of Karakalpakstan",
            titleEs: "Las fortalezas antiguas de Karakalpakistán",
            description:
              "Excursion vers les forteresses en terre crue d'Ayaz-Kala et Toprak-Kala, vestiges du royaume antique de Khorezm datant de plus de deux mille ans, dressées au milieu du désert.",
            descriptionEn:
              "An excursion to the mud-brick fortresses of Ayaz-Kala and Toprak-Kala, remains of the ancient kingdom of Khorezm dating back over two thousand years, standing amid the desert.",
            descriptionEs:
              "Excursión hacia las fortalezas de adobe de Ayaz-Kala y Toprak-Kala, vestigios del antiguo reino de Corasmia de más de dos mil años, erguidas en pleno desierto.",
            image: `${R2}/journeys/ouzbekistan-noukous-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le désert du Kyzylkoum et l'ancien rivage de l'Aral",
        titleEn: "The Kyzylkum Desert and the Former Aral Shore",
        titleEs: "El desierto de Kyzylkum y la antigua orilla del Aral",
        intro:
          "Route vers le désert du Kyzylkoum et l'ancien port de Moynaq, autrefois florissante ville de pêcheurs sur les rives de la mer d'Aral, quatrième plus grand lac du monde avant que les projets d'irrigation soviétiques ne détournent ses fleuves nourriciers à partir des années 1960. La mer a depuis reculé de plus de cent kilomètres, laissant derrière elle un désert de sel où reposent, échouées, les coques rouillées des bateaux de pêche, désormais l'un des sites les plus saisissants du désastre écologique.",
        introEn:
          "The road to the Kyzylkum Desert and the former port of Moynaq, once a thriving fishing town on the shores of the Aral Sea, the fourth-largest lake in the world before Soviet irrigation projects diverted its feeding rivers from the 1960s onward. The sea has since retreated over a hundred kilometres, leaving behind a salt desert where the rusted hulls of fishing boats now lie stranded, one of the most striking sites of this ecological disaster.",
        introEs:
          "Ruta hacia el desierto de Kyzylkum y el antiguo puerto de Moynaq, en su día una próspera ciudad pesquera a orillas del mar de Aral, cuarto lago más grande del mundo antes de que los proyectos de riego soviéticos desviaran sus ríos alimentadores a partir de la década de 1960. El mar ha retrocedido desde entonces más de cien kilómetros, dejando tras de sí un desierto de sal donde yacen varados los cascos oxidados de los barcos de pesca, uno de los lugares más impactantes de este desastre ecológico.",
        galleryImages: `${R2}/journeys/ouzbekistan-kyzylkoum-gallery1.jpg,${R2}/journeys/ouzbekistan-kyzylkoum-gallery2.jpg,${R2}/journeys/ouzbekistan-kyzylkoum-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Le cimetière de bateaux de Moynaq",
            titleEn: "The Moynaq ship graveyard",
            titleEs: "El cementerio de barcos de Moynaq",
            description:
              "Visite du cimetière de bateaux de Moynaq, où reposent depuis des décennies les coques rouillées des chalutiers échoués par le recul de la mer d'Aral, et du petit musée local retraçant cette catastrophe écologique.",
            descriptionEn:
              "A visit to the Moynaq ship graveyard, where the rusted hulls of trawlers stranded by the Aral Sea's retreat have rested for decades, and the small local museum tracing this ecological disaster.",
            descriptionEs:
              "Visita al cementerio de barcos de Moynaq, donde descansan desde hace décadas los cascos oxidados de los arrastreros varados por el retroceso del mar de Aral, y al pequeño museo local que narra esta catástrofe ecológica.",
            image: `${R2}/journeys/ouzbekistan-kyzylkoum-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Nuit sous yourte dans le désert du Kyzylkoum",
            titleEn: "A night in a yurt in the Kyzylkum Desert",
            titleEs: "Noche en yurta en el desierto de Kyzylkum",
            description:
              "Route à travers le désert du Kyzylkoum jusqu'à un campement de yourtes, dîner traditionnel préparé par une famille locale et nuit sous un ciel étoilé loin de toute pollution lumineuse.",
            descriptionEn:
              "A drive through the Kyzylkum Desert to a yurt camp, a traditional dinner prepared by a local family, and a night under a starry sky far from any light pollution.",
            descriptionEs:
              "Ruta por el desierto de Kyzylkum hasta un campamento de yurtas, cena tradicional preparada por una familia local y noche bajo un cielo estrellado lejos de toda contaminación lumínica.",
            image: `${R2}/journeys/ouzbekistan-kyzylkoum-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "taiwan",
    tour: {
      name: "Taïwan : le lac du Soleil et de la Lune et Jiufen",
      nameEn: "Taiwan: Sun Moon Lake and Jiufen",
      nameEs: "Taiwán: el lago del Sol y la Luna y Jiufen",
      slug: "taiwan-sunmoonlake-jiufen",
      image: `${R2}/journeys/taiwan-sunmoonlake-jiufen-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le plus grand lac de l'île, entouré de temples et de théiers, puis une ville minière aux ruelles éclairées de lanternes rouges",
      taglineEn: "The island's largest lake, ringed by temples and tea plantations, then a mining town with lantern-lit lanes",
      taglineEs: "El mayor lago de la isla, rodeado de templos y plantaciones de té, y después una ciudad minera de callejuelas iluminadas con farolillos rojos",
      description:
        "Un voyage dans le centre et le nord montagneux de Taïwan, loin de Taipei et des gorges de Taroko : le lac du Soleil et de la Lune, le plus grand lac naturel de l'île, entouré de temples bouddhistes et de plantations de thé oolong à flanc de colline, puis Jiufen, ancienne ville minière accrochée aux montagnes du nord-est dont les ruelles en escalier éclairées de lanternes rouges auraient inspiré l'univers du film d'animation « Le Voyage de Chihiro ».",
      descriptionEn:
        "A journey through Taiwan's mountainous centre and north, far from Taipei and Taroko Gorge: Sun Moon Lake, the island's largest natural lake, ringed by Buddhist temples and hillside oolong tea plantations, then Jiufen, a former mining town clinging to the north-eastern mountains whose lantern-lit stepped lanes are said to have inspired the world of the animated film \"Spirited Away.\"",
      descriptionEs:
        "Un viaje por el centro y el norte montañoso de Taiwán, lejos de Taipéi y de las gargantas de Taroko: el lago del Sol y la Luna, el mayor lago natural de la isla, rodeado de templos budistas y plantaciones de té oolong en las laderas, y después Jiufen, antigua ciudad minera aferrada a las montañas del noreste cuyas callejuelas escalonadas iluminadas con farolillos rojos habrían inspirado el universo de la película de animación «El viaje de Chihiro».",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mars à mai | Oct à nov",
      whenLabelEn: "March to May | Oct to Nov",
      whenLabelEs: "Marzo a mayo | oct a nov",
      bestMonths: "march,april,may,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 119,
    },
    chapters: [
      {
        title: "Le lac du Soleil et de la Lune",
        titleEn: "Sun Moon Lake",
        titleEs: "El lago del Sol y la Luna",
        intro:
          "Premier chapitre au lac du Soleil et de la Lune, le plus grand lac naturel de Taïwan, dont le nom provient de sa forme divisée en deux moitiés, l'une ronde comme le soleil et l'autre en croissant comme la lune. Le temple de Wenwu, dédié à Confucius et au dieu de la guerre Guan Yu, surplombe les eaux turquoise depuis une colline boisée, tandis que les collines environnantes comptent parmi les principales régions productrices de thé oolong de l'île.",
        introEn:
          "The first chapter unfolds at Sun Moon Lake, Taiwan's largest natural lake, whose name comes from its shape divided into two halves, one round like the sun and the other crescent-shaped like the moon. Wenwu Temple, dedicated to Confucius and the god of war Guan Yu, overlooks the turquoise waters from a wooded hill, while the surrounding hills rank among the island's main oolong tea-producing regions.",
        introEs:
          "El primer capítulo se desarrolla en el lago del Sol y la Luna, el mayor lago natural de Taiwán, cuyo nombre proviene de su forma dividida en dos mitades, una redonda como el sol y otra en forma de media luna. El templo de Wenwu, dedicado a Confucio y al dios de la guerra Guan Yu, domina las aguas turquesas desde una colina boscosa, mientras que las colinas circundantes se cuentan entre las principales regiones productoras de té oolong de la isla.",
        galleryImages: `${R2}/journeys/taiwan-sunmoonlake-gallery1.jpg,${R2}/journeys/taiwan-sunmoonlake-gallery2.jpg,${R2}/journeys/taiwan-sunmoonlake-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Croisière sur le lac et le temple de Wenwu",
            titleEn: "A lake cruise and Wenwu Temple",
            titleEs: "Crucero por el lago y el templo de Wenwu",
            description:
              "Croisière en bateau sur le lac du Soleil et de la Lune, entre ses deux rives symboliques, puis visite du temple de Wenwu perché sur une colline dominant les eaux turquoise.",
            descriptionEn:
              "A boat cruise on Sun Moon Lake, between its two symbolic shores, then a visit to Wenwu Temple, perched on a hill overlooking the turquoise waters.",
            descriptionEs:
              "Crucero en barco por el lago del Sol y la Luna, entre sus dos orillas simbólicas, y visita al templo de Wenwu, encaramado en una colina que domina las aguas turquesas.",
            image: `${R2}/journeys/taiwan-sunmoonlake-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les plantations de thé oolong des collines",
            titleEn: "The oolong tea plantations of the hills",
            titleEs: "Las plantaciones de té oolong de las colinas",
            description:
              "Visite d'une plantation de thé oolong à flanc de colline, dégustation commentée par un producteur local, avec vue sur le lac depuis les rangées de théiers en terrasses.",
            descriptionEn:
              "A visit to a hillside oolong tea plantation, a guided tasting with a local producer, with views over the lake from the terraced rows of tea bushes.",
            descriptionEs:
              "Visita a una plantación de té oolong en la ladera, degustación comentada por un productor local, con vistas al lago desde las hileras de teteros en terrazas.",
            image: `${R2}/journeys/taiwan-sunmoonlake-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Jiufen, la ville aux lanternes",
        titleEn: "Jiufen, the Lantern Town",
        titleEs: "Jiufen, la ciudad de los farolillos",
        intro:
          "Route vers Jiufen, ancienne ville minière prospère à l'époque de la ruée vers l'or au tournant du XXe siècle, tombée dans l'oubli après l'épuisement des mines avant d'être redécouverte grâce à un film taïwanais primé à Venise en 1989. Ses ruelles en escalier bordées de maisons de thé traditionnelles, éclairées le soir de lanternes rouges suspendues, offrent une vue plongeante sur la côte nord-est et auraient partiellement inspiré l'univers visuel du studio Ghibli.",
        introEn:
          "The road to Jiufen, a former mining town that thrived during the gold rush at the turn of the 20th century, fell into obscurity once the mines were exhausted, then was rediscovered thanks to a Taiwanese film awarded in Venice in 1989. Its stepped lanes lined with traditional teahouses, lit in the evening by hanging red lanterns, offer a sweeping view over the north-eastern coast and are said to have partly inspired Studio Ghibli's visual world.",
        introEs:
          "Ruta hacia Jiufen, antigua ciudad minera próspera en la época de la fiebre del oro a comienzos del siglo XX, caída en el olvido tras el agotamiento de las minas antes de ser redescubierta gracias a una película taiwanesa premiada en Venecia en 1989. Sus callejuelas escalonadas bordeadas de casas de té tradicionales, iluminadas por la noche con farolillos rojos colgantes, ofrecen una vista privilegiada sobre la costa noreste y habrían inspirado en parte el universo visual del estudio Ghibli.",
        galleryImages: `${R2}/journeys/taiwan-jiufen-gallery1.jpg,${R2}/journeys/taiwan-jiufen-gallery2.jpg,${R2}/journeys/taiwan-jiufen-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Les maisons de thé traditionnelles au crépuscule",
            titleEn: "The traditional teahouses at dusk",
            titleEs: "Las casas de té tradicionales al anochecer",
            description:
              "Promenade dans les ruelles en escalier de Jiufen au moment où s'allument les lanternes rouges, halte dans une maison de thé traditionnelle avec vue sur la côte nord-est.",
            descriptionEn:
              "A walk through Jiufen's stepped lanes as the red lanterns light up, a stop at a traditional teahouse overlooking the north-eastern coast.",
            descriptionEs:
              "Paseo por las callejuelas escalonadas de Jiufen en el momento en que se encienden los farolillos rojos, parada en una casa de té tradicional con vistas a la costa noreste.",
            image: `${R2}/journeys/taiwan-jiufen-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le musée de la mine d'or et le village voisin de Jinguashi",
            titleEn: "The gold mine museum and neighbouring Jinguashi",
            titleEs: "El museo de la mina de oro y el vecino Jinguashi",
            description:
              "Visite du musée de la mine d'or de Jinguashi, village minier voisin de Jiufen, à la découverte de l'histoire de la ruée vers l'or taïwanaise et d'une galerie de mine restaurée ouverte au public.",
            descriptionEn:
              "A visit to the gold mine museum of Jinguashi, a mining village neighbouring Jiufen, discovering the history of Taiwan's gold rush and a restored mine gallery open to the public.",
            descriptionEs:
              "Visita al museo de la mina de oro de Jinguashi, pueblo minero vecino de Jiufen, para descubrir la historia de la fiebre del oro taiwanesa y una galería minera restaurada abierta al público.",
            image: `${R2}/journeys/taiwan-jiufen-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "japon",
    tour: {
      name: "Japon : les Alpes japonaises, Takayama et Shirakawa-go",
      nameEn: "Japan: The Japanese Alps, Takayama and Shirakawa-go",
      nameEs: "Japón: los Alpes japoneses, Takayama y Shirakawa-go",
      slug: "japon-alpes-shirakawago",
      image: `${R2}/tours/japon-alpes-shirakawago.jpg`,
      images: `${R2}/trips/japon-alpes-gallery-1.jpg,${R2}/trips/japon-alpes-gallery-2.jpg,${R2}/trips/japon-alpes-gallery-3.jpg,${R2}/trips/japon-alpes-gallery-4.jpg,${R2}/trips/japon-alpes-gallery-5.jpg,${R2}/trips/japon-alpes-gallery-6.jpg`,
      tagline: "Un village de fermes aux toits pentus vieux de plusieurs siècles, niché au cœur des montagnes du centre du Japon",
      taglineEn: "A village of centuries-old steep-roofed farmhouses, nestled in the mountains of central Japan",
      taglineEs: "Un pueblo de granjas de tejados inclinados centenarias, enclavado en las montañas del centro de Japón",
      description:
        "Les Alpes japonaises, chaîne de montagnes qui traverse le centre de l'archipel, abritent un Japon rural largement épargné par le tourisme de masse. Takayama, ancienne ville marchande aux maisons de bois préservées, et Shirakawa-go, hameau classé à l'UNESCO dont les fermes gassho-zukuri arborent des toits de chaume pentus à quarante-cinq degrés conçus pour résister aux lourdes chutes de neige, offrent un contrepoint saisissant aux mégapoles japonaises.",
      descriptionEn:
        "The Japanese Alps, a mountain range crossing the centre of the archipelago, are home to a rural Japan largely spared mass tourism. Takayama, a former merchant town with preserved wooden houses, and Shirakawa-go, a UNESCO-listed hamlet whose gassho-zukuri farmhouses feature forty-five-degree thatched roofs designed to withstand heavy snowfall, offer a striking counterpoint to Japan's megacities.",
      descriptionEs:
        "Los Alpes japoneses, cordillera que atraviesa el centro del archipiélago, albergan un Japón rural en gran parte a salvo del turismo de masas. Takayama, antigua ciudad comercial de casas de madera preservadas, y Shirakawa-go, aldea declarada por la UNESCO cuyas granjas gassho-zukuri lucen tejados de paja inclinados cuarenta y cinco grados diseñados para resistir intensas nevadas, ofrecen un contrapunto llamativo a las megaciudades japonesas.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Oct à nov | Jan à fév",
      whenLabelEn: "Oct to Nov | Jan to Feb",
      whenLabelEs: "Oct a nov | ene a feb",
      bestMonths: "october,november,january,february",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 106,
    },
    sections: [
      {
        heading: "Takayama, la petite Kyoto des Alpes",
        headingEn: "Takayama, the Little Kyoto of the Alps",
        headingEs: "Takayama, la pequeña Kioto de los Alpes",
        body:
          "Takayama, surnommée la « petite Kyoto » pour son quartier historique de maisons marchandes en bois sombre datant de l'époque Edo, doit sa prospérité passée au commerce du bois et à un savoir-faire d'ébénisterie encore visible dans ses temples et sanctuaires. Le marché matinal qui se tient depuis des siècles le long de la rivière Miyagawa reste un rendez-vous quotidien pour les producteurs locaux venus vendre légumes, cornichons fermentés et artisanat.",
        bodyEn:
          "Takayama, nicknamed the \"little Kyoto\" for its historic district of dark-wood merchant houses from the Edo period, owes its past prosperity to the timber trade and a woodworking expertise still visible in its temples and shrines. The morning market held for centuries along the Miyagawa River remains a daily gathering point for local producers selling vegetables, fermented pickles, and handicrafts.",
        bodyEs:
          "Takayama, apodada la «pequeña Kioto» por su barrio histórico de casas comerciales de madera oscura de la era Edo, debe su prosperidad pasada al comercio de la madera y a un saber ebanista todavía visible en sus templos y santuarios. El mercado matutino que se celebra desde hace siglos a orillas del río Miyagawa sigue siendo una cita diaria para los productores locales que venden verduras, encurtidos fermentados y artesanía.",
      },
      {
        heading: "Shirakawa-go, les fermes gassho-zukuri",
        headingEn: "Shirakawa-go, the Gassho-Zukuri Farmhouses",
        headingEs: "Shirakawa-go, las granjas gassho-zukuri",
        body:
          "Le hameau de Shirakawa-go, niché dans une vallée reculée des Alpes japonaises, conserve plus d'une centaine de fermes traditionnelles de style gassho-zukuri, littéralement « mains jointes en prière », en référence à la forme de leurs toits de chaume inclinés à quarante-cinq degrés. Cette architecture, conçue sans clou pour résister aux chutes de neige pouvant dépasser trois mètres, permettait autrefois d'abriter plusieurs générations sous un même toit tout en réservant les étages supérieurs à l'élevage de vers à soie.",
        bodyEn:
          "The hamlet of Shirakawa-go, tucked away in a remote valley of the Japanese Alps, preserves over a hundred traditional gassho-zukuri farmhouses, literally \"hands joined in prayer,\" a reference to the shape of their forty-five-degree thatched roofs. This architecture, built without nails to withstand snowfall exceeding three metres, once housed several generations under one roof while reserving the upper floors for silkworm farming.",
        bodyEs:
          "La aldea de Shirakawa-go, enclavada en un valle remoto de los Alpes japoneses, conserva más de un centenar de granjas tradicionales de estilo gassho-zukuri, literalmente «manos juntas en oración», en referencia a la forma de sus tejados de paja inclinados cuarenta y cinco grados. Esta arquitectura, construida sin clavos para resistir nevadas que pueden superar los tres metros, albergaba antaño a varias generaciones bajo un mismo techo, reservando los pisos superiores a la cría de gusanos de seda.",
      },
    ],
    hotels: [
      {
        name: "Auberge traditionnelle de Takayama",
        nameEn: "A Traditional Takayama Inn",
        nameEs: "Posada tradicional de Takayama",
        description:
          "Un ryokan traditionnel au cœur du quartier historique de Takayama, futon sur tatami, bain thermal privé et dîner kaiseki préparé à partir de produits de la région montagneuse.",
        descriptionEn:
          "A traditional ryokan at the heart of Takayama's historic district, futon on tatami, a private hot spring bath, and a kaiseki dinner prepared from regional mountain produce.",
        descriptionEs:
          "Un ryokan tradicional en el corazón del barrio histórico de Takayama, futón sobre tatami, baño termal privado y cena kaiseki preparada con productos de la región montañosa.",
        image: `${R2}/trips/japon-alpes-hotel-1.jpg`,
      },
      {
        name: "Ferme gassho-zukuri de Shirakawa-go",
        nameEn: "A Shirakawa-go Gassho-Zukuri Farmhouse",
        nameEs: "Granja gassho-zukuri de Shirakawa-go",
        description:
          "Une nuit dans une ferme gassho-zukuri classée à l'UNESCO, chambres simples sous la charpente en bois du toit de chaume, repas familial préparé par les hôtes du village.",
        descriptionEn:
          "A night in a UNESCO-listed gassho-zukuri farmhouse, simple rooms beneath the wooden frame of the thatched roof, a family meal prepared by the village hosts.",
        descriptionEs:
          "Una noche en una granja gassho-zukuri declarada por la UNESCO, habitaciones sencillas bajo el armazón de madera del tejado de paja, comida familiar preparada por los anfitriones del pueblo.",
        image: `${R2}/trips/japon-alpes-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "thailande",
    tour: {
      name: "Thaïlande : Chiang Mai et le triangle d'or",
      nameEn: "Thailand: Chiang Mai and the Golden Triangle",
      nameEs: "Tailandia: Chiang Mai y el triángulo dorado",
      slug: "thailande-chiangmai-triangle-or",
      image: `${R2}/tours/thailande-chiangmai-triangle-or.jpg`,
      images: `${R2}/trips/thailande-chiangmai-gallery-1.jpg,${R2}/trips/thailande-chiangmai-gallery-2.jpg,${R2}/trips/thailande-chiangmai-gallery-3.jpg,${R2}/trips/thailande-chiangmai-gallery-4.jpg,${R2}/trips/thailande-chiangmai-gallery-5.jpg,${R2}/trips/thailande-chiangmai-gallery-6.jpg`,
      tagline: "Plus de trois cents temples bouddhistes dans une ancienne capitale du royaume Lanna, aux portes des montagnes du nord",
      taglineEn: "Over three hundred Buddhist temples in a former capital of the Lanna kingdom, at the gateway to the northern mountains",
      taglineEs: "Más de trescientos templos budistas en una antigua capital del reino Lanna, a las puertas de las montañas del norte",
      description:
        "Chiang Mai, capitale du royaume Lanna fondée en 1296 et restée indépendante du Siam pendant des siècles, concentre plus de trois cents temples bouddhistes dans et autour de ses remparts historiques. La ville sert également de porte d'entrée vers le triangle d'or, région montagneuse à la frontière du Laos et du Myanmar où vivent des tribus des collines aux traditions distinctes, et où le Mékong marque la frontière entre trois pays.",
      descriptionEn:
        "Chiang Mai, capital of the Lanna kingdom founded in 1296 and independent from Siam for centuries, concentrates over three hundred Buddhist temples in and around its historic ramparts. The city also serves as the gateway to the Golden Triangle, a mountainous region on the border of Laos and Myanmar where hill tribes with distinct traditions live, and where the Mekong marks the border between three countries.",
      descriptionEs:
        "Chiang Mai, capital del reino Lanna fundada en 1296 e independiente de Siam durante siglos, concentra más de trescientos templos budistas dentro y alrededor de sus murallas históricas. La ciudad sirve también de puerta de entrada al triángulo dorado, región montañosa en la frontera de Laos y Myanmar donde viven tribus de las colinas con tradiciones distintas, y donde el Mekong marca la frontera entre tres países.",
      price: 2000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Nov à fév",
      whenLabelEn: "Nov to Feb",
      whenLabelEs: "Nov a feb",
      bestMonths: "november,december,january,february",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 108,
    },
    sections: [
      {
        heading: "Les trois cents temples de Chiang Mai",
        headingEn: "The three hundred temples of Chiang Mai",
        headingEs: "Los trescientos templos de Chiang Mai",
        body:
          "Chiang Mai concentre plus de trois cents temples bouddhistes dans et autour de sa vieille ville carrée entourée de douves, héritage de sept siècles d'histoire comme capitale du royaume Lanna. Le Wat Phra That Doi Suthep, perché sur une colline surplombant la ville et accessible par un escalier de plus de trois cents marches gardé par des naga, reste le sanctuaire le plus vénéré de la région et un lieu de pèlerinage actif depuis le XIVe siècle.",
        bodyEn:
          "Chiang Mai concentrates over three hundred Buddhist temples in and around its square moated old town, a legacy of seven centuries of history as the capital of the Lanna kingdom. Wat Phra That Doi Suthep, perched on a hill overlooking the city and reached by a staircase of over three hundred steps guarded by naga serpents, remains the region's most venerated sanctuary and an active pilgrimage site since the 14th century.",
        bodyEs:
          "Chiang Mai concentra más de trescientos templos budistas dentro y alrededor de su casco antiguo cuadrado rodeado de fosos, legado de siete siglos de historia como capital del reino Lanna. El Wat Phra That Doi Suthep, encaramado en una colina que domina la ciudad y accesible por una escalinata de más de trescientos escalones custodiada por naga, sigue siendo el santuario más venerado de la región y un lugar de peregrinación activo desde el siglo XIV.",
      },
      {
        heading: "Le triangle d'or et les tribus des collines",
        headingEn: "The Golden Triangle and the hill tribes",
        headingEs: "El triángulo dorado y las tribus de las colinas",
        body:
          "Le triangle d'or, région montagneuse où se rejoignent les frontières de la Thaïlande, du Laos et du Myanmar le long du Mékong, doit son nom à son passé de première zone mondiale de production d'opium, aujourd'hui largement remplacée par le tourisme et l'agriculture de substitution. La région reste habitée par des tribus des collines telles que les Akha, Karen et Hmong, dont les villages perpétuent des costumes traditionnels et un artisanat textile distinct de la culture thaïe des plaines.",
        bodyEn:
          "The Golden Triangle, a mountainous region where the borders of Thailand, Laos, and Myanmar meet along the Mekong, owes its name to its past as the world's leading opium-producing zone, now largely replaced by tourism and crop substitution. The region remains home to hill tribes such as the Akha, Karen, and Hmong, whose villages carry on traditional dress and textile crafts distinct from lowland Thai culture.",
        bodyEs:
          "El triángulo dorado, región montañosa donde confluyen las fronteras de Tailandia, Laos y Myanmar a lo largo del Mekong, debe su nombre a su pasado como principal zona mundial de producción de opio, hoy sustituida en gran parte por el turismo y los cultivos alternativos. La región sigue habitada por tribus de las colinas como los akha, karen y hmong, cuyos pueblos perpetúan trajes tradicionales y una artesanía textil distinta de la cultura tailandesa de las llanuras.",
      },
    ],
    hotels: [
      {
        name: "Boutique-hôtel de la vieille ville de Chiang Mai",
        nameEn: "A Chiang Mai Old Town Boutique Hotel",
        nameEs: "Hotel boutique del casco antiguo de Chiang Mai",
        description:
          "Un boutique-hôtel installé dans une maison en teck rénovée à l'intérieur des douves de la vieille ville, jardin tropical intérieur, à distance de marche des principaux temples.",
        descriptionEn:
          "A boutique hotel housed in a renovated teak house within the old town's moat, an indoor tropical garden, within walking distance of the main temples.",
        descriptionEs:
          "Un hotel boutique instalado en una casa de teca renovada dentro del foso del casco antiguo, jardín tropical interior, a poca distancia a pie de los principales templos.",
        image: `${R2}/trips/thailande-chiangmai-hotel-1.jpg`,
      },
      {
        name: "Lodge de montagne du triangle d'or",
        nameEn: "A Golden Triangle Mountain Lodge",
        nameEs: "Lodge de montaña del triángulo dorado",
        description:
          "Un lodge en surplomb du Mékong, à la frontière du Laos et du Myanmar, chambres avec vue sur le fleuve et excursions organisées vers les villages des tribus des collines.",
        descriptionEn:
          "A lodge overlooking the Mekong, on the border of Laos and Myanmar, rooms with river views and organised excursions to hill tribe villages.",
        descriptionEs:
          "Un lodge con vistas al Mekong, en la frontera de Laos y Myanmar, habitaciones con vistas al río y excursiones organizadas a los pueblos de las tribus de las colinas.",
        image: `${R2}/trips/thailande-chiangmai-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "chine",
    tour: {
      name: "Chine : Guilin et les rizières de Longsheng",
      nameEn: "China: Guilin and the Longsheng Rice Terraces",
      nameEs: "China: Guilin y las terrazas de arroz de Longsheng",
      slug: "chine-guilin-longsheng",
      image: `${R2}/tours/chine-guilin-longsheng.jpg`,
      images: `${R2}/trips/chine-guilin-gallery-1.jpg,${R2}/trips/chine-guilin-gallery-2.jpg,${R2}/trips/chine-guilin-gallery-3.jpg,${R2}/trips/chine-guilin-gallery-4.jpg,${R2}/trips/chine-guilin-gallery-5.jpg,${R2}/trips/chine-guilin-gallery-6.jpg`,
      tagline: "Un paysage de pitons karstiques qui orne les billets de banque chinois depuis des décennies, puis des rizières en terrasses vieilles de sept cents ans",
      taglineEn: "A karst peak landscape that has adorned Chinese banknotes for decades, then seven-hundred-year-old rice terraces",
      taglineEs: "Un paisaje de picos kársticos que adorna los billetes chinos desde hace décadas, y después terrazas de arroz de setecientos años",
      description:
        "Guilin, dans le sud de la Chine, doit sa renommée à ses pitons karstiques qui émergent brusquement de la plaine le long de la rivière Li, un paysage si emblématique qu'il figure au dos du billet de vingt yuans. À une heure de route, les rizières en terrasses de Longsheng, littéralement « dos du dragon », dessinent depuis sept cents ans des courbes concentriques à flanc de montagne, cultivées par les minorités Zhuang et Yao selon des méthodes largement inchangées.",
      descriptionEn:
        "Guilin, in southern China, owes its fame to karst peaks that rise abruptly from the plain along the Li River, a landscape so iconic it appears on the back of the twenty-yuan banknote. An hour's drive away, the Longsheng rice terraces, literally the \"dragon's backbone,\" have traced concentric curves across the mountainside for seven hundred years, farmed by the Zhuang and Yao minorities using largely unchanged methods.",
      descriptionEs:
        "Guilin, en el sur de China, debe su fama a los picos kársticos que emergen bruscamente de la llanura a lo largo del río Li, un paisaje tan emblemático que figura en el reverso del billete de veinte yuanes. A una hora en coche, las terrazas de arroz de Longsheng, literalmente «espalda del dragón», dibujan desde hace setecientos años curvas concéntricas en la ladera de la montaña, cultivadas por las minorías zhuang y yao según métodos apenas cambiados.",
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
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 110,
    },
    sections: [
      {
        heading: "La rivière Li et ses pitons karstiques",
        headingEn: "The Li River and its karst peaks",
        headingEs: "El río Li y sus picos kársticos",
        body:
          "La rivière Li, qui serpente entre Guilin et la petite ville de Yangshuo sur une cinquantaine de kilomètres, traverse un paysage de pitons karstiques calcaires sculptés par des millions d'années d'érosion, un décor si célèbre en Chine qu'il figure au verso du billet de vingt yuans. Une croisière traditionnelle en radeau de bambou, ou en bateau touristique pour les distances plus longues, permet de découvrir ce paysage classé parmi les plus beaux du pays, entre villages de pêcheurs et buffles d'eau se baignant dans les hauts-fonds.",
        bodyEn:
          "The Li River, which winds between Guilin and the small town of Yangshuo over about fifty kilometres, crosses a landscape of limestone karst peaks sculpted by millions of years of erosion, a scene so famous in China it appears on the back of the twenty-yuan banknote. A traditional bamboo raft cruise, or a tourist boat for longer distances, reveals this landscape ranked among the country's most beautiful, past fishing villages and water buffalo bathing in the shallows.",
        bodyEs:
          "El río Li, que serpentea entre Guilin y la pequeña ciudad de Yangshuo a lo largo de unos cincuenta kilómetros, atraviesa un paisaje de picos kársticos calizos esculpidos por millones de años de erosión, una estampa tan célebre en China que figura en el reverso del billete de veinte yuanes. Un crucero tradicional en balsa de bambú, o en barco turístico para distancias más largas, permite descubrir este paisaje considerado uno de los más bellos del país, entre pueblos de pescadores y búfalos de agua bañándose en los bajíos.",
      },
      {
        heading: "Les rizières en terrasses du dos du dragon",
        headingEn: "The Dragon's Backbone Rice Terraces",
        headingEs: "Las terrazas de arroz de la espalda del dragón",
        body:
          "Les rizières en terrasses de Longsheng, sculptées à flanc de montagne depuis la dynastie Yuan il y a environ sept cents ans, doivent leur surnom de « dos du dragon » à leurs courbes concentriques qui épousent le relief comme des écailles. La région reste habitée par les minorités Zhuang et Yao, ces dernières réputées pour la longueur exceptionnelle de leurs cheveux, jamais coupés depuis l'adolescence selon une tradition encore vivante dans certains villages.",
        bodyEn:
          "The Longsheng rice terraces, carved into the mountainside since the Yuan dynasty about seven hundred years ago, owe their nickname \"dragon's backbone\" to their concentric curves hugging the terrain like scales. The region remains home to the Zhuang and Yao minorities, the latter renowned for the exceptional length of their hair, never cut since adolescence according to a tradition still alive in some villages.",
        bodyEs:
          "Las terrazas de arroz de Longsheng, talladas en la ladera de la montaña desde la dinastía Yuan hace unos setecientos años, deben su apodo de «espalda del dragón» a sus curvas concéntricas que abrazan el relieve como escamas. La región sigue habitada por las minorías zhuang y yao, estas últimas célebres por la longitud excepcional de su cabello, nunca cortado desde la adolescencia según una tradición todavía viva en algunos pueblos.",
      },
    ],
    hotels: [
      {
        name: "Hôtel au bord de la rivière Li",
        nameEn: "A Li River Hotel",
        nameEs: "Hotel a orillas del río Li",
        description:
          "Un hôtel avec vue directe sur la rivière Li et ses pitons karstiques à Yangshuo, terrasse donnant sur l'eau, point de départ idéal pour les croisières en radeau de bambou.",
        descriptionEn:
          "A hotel with a direct view of the Li River and its karst peaks in Yangshuo, a terrace overlooking the water, an ideal starting point for bamboo raft cruises.",
        descriptionEs:
          "Un hotel con vistas directas al río Li y sus picos kársticos en Yangshuo, terraza junto al agua, punto de partida ideal para los cruceros en balsa de bambú.",
        image: `${R2}/trips/chine-guilin-hotel-1.jpg`,
      },
      {
        name: "Maison d'hôtes des rizières de Longsheng",
        nameEn: "A Longsheng Terraces Guesthouse",
        nameEs: "Casa de huéspedes de las terrazas de Longsheng",
        description:
          "Une maison d'hôtes en bois tenue par une famille Zhuang, chambres avec vue sur les rizières en terrasses, cuisine locale préparée à partir de riz cultivé sur place.",
        descriptionEn:
          "A wooden guesthouse run by a Zhuang family, rooms overlooking the terraced rice fields, local cuisine prepared from rice grown on site.",
        descriptionEs:
          "Una casa de huéspedes de madera gestionada por una familia zhuang, habitaciones con vistas a las terrazas de arroz, cocina local preparada con arroz cultivado in situ.",
        image: `${R2}/trips/chine-guilin-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "mongolie",
    tour: {
      name: "Mongolie : le lac Khövsgöl et les steppes du nord",
      nameEn: "Mongolia: Lake Khövsgöl and the Northern Steppes",
      nameEs: "Mongolia: el lago Khövsgöl y las estepas del norte",
      slug: "mongolie-khovsgol-nord",
      image: `${R2}/tours/mongolie-khovsgol-nord.jpg`,
      images: `${R2}/trips/mongolie-khovsgol-gallery-1.jpg,${R2}/trips/mongolie-khovsgol-gallery-2.jpg,${R2}/trips/mongolie-khovsgol-gallery-3.jpg,${R2}/trips/mongolie-khovsgol-gallery-4.jpg,${R2}/trips/mongolie-khovsgol-gallery-5.jpg,${R2}/trips/mongolie-khovsgol-gallery-6.jpg`,
      tagline: "Un lac d'eau douce si pur qu'il concentre à lui seul près d'un quart des réserves du pays, entouré de forêts de taïga",
      taglineEn: "A freshwater lake so pure it alone holds nearly a quarter of the country's reserves, ringed by taiga forest",
      taglineEs: "Un lago de agua dulce tan puro que concentra por sí solo casi una cuarta parte de las reservas del país, rodeado de bosques de taiga",
      description:
        "Le lac Khövsgöl, dans l'extrême nord de la Mongolie près de la frontière russe, concentre à lui seul près d'un quart des réserves d'eau douce du pays et compte parmi les lacs les plus purs d'Asie. Surnommée la « mère bleue », cette étendue d'eau entourée de forêts de taïga et de montagnes reste la terre des Tsaatan, derniers éleveurs de rennes de Mongolie, dont le mode de vie nomade contraste radicalement avec les steppes arides du désert de Gobi.",
      descriptionEn:
        "Lake Khövsgöl, in Mongolia's far north near the Russian border, alone holds nearly a quarter of the country's freshwater reserves and ranks among Asia's purest lakes. Nicknamed the \"blue mother,\" this expanse of water surrounded by taiga forest and mountains remains the land of the Tsaatan, Mongolia's last reindeer herders, whose nomadic way of life contrasts sharply with the arid steppes of the Gobi Desert.",
      descriptionEs:
        "El lago Khövsgöl, en el extremo norte de Mongolia cerca de la frontera rusa, concentra por sí solo casi una cuarta parte de las reservas de agua dulce del país y se cuenta entre los lagos más puros de Asia. Apodado la «madre azul», esta extensión de agua rodeada de bosques de taiga y montañas sigue siendo la tierra de los tsaatan, últimos pastores de renos de Mongolia, cuyo modo de vida nómada contrasta radicalmente con las áridas estepas del desierto de Gobi.",
      price: 3200,
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
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 112,
    },
    sections: [
      {
        heading: "La « mère bleue », un lac parmi les plus purs d'Asie",
        headingEn: "The \"blue mother,\" one of Asia's purest lakes",
        headingEs: "La «madre azul», uno de los lagos más puros de Asia",
        body:
          "Le lac Khövsgöl, surnommé la « mère bleue » en mongol, s'étend sur plus de cent trente kilomètres de long dans une dépression tectonique nichée entre des montagnes couvertes de taïga, à proximité immédiate du lac Baïkal russe dont il partage la formation géologique. Ses eaux, parmi les plus pures d'Asie, restent gelées près de cinq mois par an, une période durant laquelle les habitants traversent traditionnellement la glace à cheval ou en camion pour rejoindre l'autre rive.",
        bodyEn:
          "Lake Khövsgöl, nicknamed the \"blue mother\" in Mongolian, stretches over a hundred and thirty kilometres in a tectonic depression nestled among taiga-covered mountains, in close proximity to Russia's Lake Baikal, with which it shares its geological formation. Its waters, among the purest in Asia, stay frozen for nearly five months a year, a period during which locals traditionally cross the ice on horseback or by truck to reach the opposite shore.",
        bodyEs:
          "El lago Khövsgöl, apodado la «madre azul» en mongol, se extiende más de ciento treinta kilómetros en una depresión tectónica enclavada entre montañas cubiertas de taiga, muy cerca del lago Baikal ruso, con el que comparte su formación geológica. Sus aguas, entre las más puras de Asia, permanecen heladas casi cinco meses al año, periodo durante el cual los habitantes cruzan tradicionalmente el hielo a caballo o en camión para llegar a la otra orilla.",
      },
      {
        heading: "Les Tsaatan, derniers éleveurs de rennes",
        headingEn: "The Tsaatan, Mongolia's Last Reindeer Herders",
        headingEs: "Los tsaatan, últimos pastores de renos",
        body:
          "Les Tsaatan, dont le nom signifie littéralement « peuple du renne », comptent parmi les derniers éleveurs nomades de rennes au monde, une communauté réduite à quelques dizaines de familles qui vivent dans la taïga au nord du lac Khövsgöl. Contrairement au reste de la Mongolie où domine l'élevage de chevaux et de chameaux, les Tsaatan dépendent entièrement du renne pour le lait, le transport et le déplacement de leurs campements plusieurs fois par an au gré des pâturages de lichen.",
        bodyEn:
          "The Tsaatan, whose name literally means \"reindeer people,\" rank among the last nomadic reindeer herders in the world, a community reduced to a few dozen families living in the taiga north of Lake Khövsgöl. Unlike the rest of Mongolia, where horse and camel herding dominate, the Tsaatan depend entirely on reindeer for milk, transport, and moving their camps several times a year following lichen pastures.",
        bodyEs:
          "Los tsaatan, cuyo nombre significa literalmente «pueblo del reno», se cuentan entre los últimos pastores nómadas de renos del mundo, una comunidad reducida a unas pocas decenas de familias que viven en la taiga al norte del lago Khövsgöl. A diferencia del resto de Mongolia, donde predomina la cría de caballos y camellos, los tsaatan dependen por completo del reno para la leche, el transporte y el traslado de sus campamentos varias veces al año siguiendo los pastos de liquen.",
      },
    ],
    hotels: [
      {
        name: "Campement de ger au bord du lac Khövsgöl",
        nameEn: "A Ger Camp on Lake Khövsgöl",
        nameEs: "Campamento de ger a orillas del lago Khövsgöl",
        description:
          "Un campement de yourtes traditionnelles sur la rive du lac Khövsgöl, poêle central chauffé au bois, dîner préparé à partir de produits laitiers de la région et de poisson pêché localement.",
        descriptionEn:
          "A camp of traditional gers on the shore of Lake Khövsgöl, a wood-fuelled central stove, a dinner prepared from regional dairy products and locally caught fish.",
        descriptionEs:
          "Un campamento de yurtas tradicionales a orillas del lago Khövsgöl, estufa central con calefacción de leña, cena preparada con lácteos de la región y pescado capturado localmente.",
        image: `${R2}/trips/mongolie-khovsgol-hotel-1.jpg`,
      },
      {
        name: "Nuit chez une famille de la steppe du nord",
        nameEn: "A Night with a Northern Steppe Family",
        nameEs: "Noche con una familia de la estepa del norte",
        description:
          "Une nuit sous ger chez une famille d'éleveurs de la steppe du nord, initiation à la traite des juments et dégustation de produits laitiers fermentés selon des méthodes ancestrales.",
        descriptionEn:
          "A night under a ger with a herding family from the northern steppe, an introduction to mare milking and a tasting of fermented dairy products made using ancestral methods.",
        descriptionEs:
          "Una noche bajo un ger con una familia de pastores de la estepa del norte, iniciación al ordeño de yeguas y degustación de lácteos fermentados según métodos ancestrales.",
        image: `${R2}/trips/mongolie-khovsgol-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "coree-du-sud",
    tour: {
      name: "Corée du Sud : l'île de Jeju",
      nameEn: "South Korea: Jeju Island",
      nameEs: "Corea del Sur: la isla de Jeju",
      slug: "coree-du-sud-jeju",
      image: `${R2}/tours/coree-du-sud-jeju.jpg`,
      images: `${R2}/trips/coree-jeju-gallery-1.jpg,${R2}/trips/coree-jeju-gallery-2.jpg,${R2}/trips/coree-jeju-gallery-3.jpg,${R2}/trips/coree-jeju-gallery-4.jpg,${R2}/trips/coree-jeju-gallery-5.jpg,${R2}/trips/coree-jeju-gallery-6.jpg`,
      tagline: "Une île volcanique classée à l'UNESCO pour son relief, sa lave et ses grottes de tunnel de lave",
      taglineEn: "A volcanic island UNESCO-listed for its relief, lava, and lava tube caves",
      taglineEs: "Una isla volcánica declarada por la UNESCO por su relieve, su lava y sus cuevas de tubos volcánicos",
      description:
        "Jeju, plus grande île de Corée du Sud formée par une activité volcanique remontant à deux millions d'années, concentre en un seul territoire des cratères, des tunnels de lave et une côte de falaises noires classés au patrimoine mondial de l'UNESCO. Le mont Hallasan, plus haut sommet du pays culminant à plus de mille neuf cents mètres au centre de l'île, et les célèbres haenyeo, plongeuses traditionnelles qui récoltent fruits de mer en apnée depuis des générations, forgent l'identité singulière de cette île longtemps considérée comme la Hawaï coréenne.",
      descriptionEn:
        "Jeju, South Korea's largest island formed by volcanic activity dating back two million years, concentrates within a single territory craters, lava tubes, and a coast of black cliffs listed as UNESCO World Heritage. Mount Hallasan, the country's highest peak rising over nineteen hundred metres at the island's centre, and the famous haenyeo, traditional free-diving women who have harvested seafood for generations, forge the singular identity of this island long considered Korea's Hawaii.",
      descriptionEs:
        "Jeju, la isla más grande de Corea del Sur formada por actividad volcánica que se remonta a dos millones de años, concentra en un solo territorio cráteres, tubos volcánicos y una costa de acantilados negros declarados Patrimonio de la Humanidad por la UNESCO. El monte Hallasan, la cumbre más alta del país, con más de mil novecientos metros en el centro de la isla, y las célebres haenyeo, buceadoras tradicionales que recolectan mariscos en apnea desde hace generaciones, forjan la identidad singular de esta isla considerada durante mucho tiempo el Hawái coreano.",
      price: 2100,
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
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 114,
    },
    sections: [
      {
        heading: "Le mont Hallasan et les tunnels de lave",
        headingEn: "Mount Hallasan and the lava tubes",
        headingEs: "El monte Hallasan y los tubos volcánicos",
        body:
          "Le mont Hallasan, volcan bouclier éteint culminant à plus de mille neuf cents mètres au centre de l'île, reste le point le plus haut de Corée du Sud et le cœur d'un parc national classé à l'UNESCO abritant plus de mille sept cents espèces végétales. Les tunnels de lave de Manjanggul, formés il y a environ deux cent mille ans par des coulées volcaniques, comptent parmi les plus longs et les mieux préservés au monde, ouverts sur près d'un kilomètre à la visite.",
        bodyEn:
          "Mount Hallasan, an extinct shield volcano rising over nineteen hundred metres at the island's centre, remains South Korea's highest point and the heart of a UNESCO-listed national park sheltering over seventeen hundred plant species. The Manjanggul lava tubes, formed about two hundred thousand years ago by volcanic flows, rank among the longest and best-preserved in the world, with nearly a kilometre open to visitors.",
        bodyEs:
          "El monte Hallasan, volcán en escudo extinto que se eleva más de mil novecientos metros en el centro de la isla, sigue siendo el punto más alto de Corea del Sur y el corazón de un parque nacional declarado por la UNESCO que alberga más de mil setecientas especies vegetales. Los tubos volcánicos de Manjanggul, formados hace unos doscientos mil años por coladas de lava, se cuentan entre los más largos y mejor conservados del mundo, con casi un kilómetro abierto a las visitas.",
      },
      {
        heading: "Les haenyeo, plongeuses traditionnelles",
        headingEn: "The Haenyeo, Traditional Free-Divers",
        headingEs: "Las haenyeo, buceadoras tradicionales",
        body:
          "Les haenyeo, littéralement « femmes de la mer », plongent en apnée depuis des générations pour récolter ormeaux, oursins et algues sur les fonds rocheux de Jeju, sans bouteille d'oxygène, une pratique classée au patrimoine culturel immatériel de l'UNESCO en 2016. Autrefois plusieurs dizaines de milliers, elles ne sont plus qu'environ quatre mille aujourd'hui, majoritairement âgées de plus de soixante ans, et perpétuent un système matriarcal singulier qui plaçait traditionnellement les femmes au centre de l'économie familiale de l'île.",
        bodyEn:
          "The haenyeo, literally \"women of the sea,\" have free-dived for generations to harvest abalone, sea urchins, and seaweed from Jeju's rocky seabeds, with no oxygen tank, a practice added to UNESCO's intangible cultural heritage list in 2016. Once numbering several tens of thousands, they are now only about four thousand, mostly over sixty years old, and carry on a singular matriarchal system that traditionally placed women at the centre of the island's family economy.",
        bodyEs:
          "Las haenyeo, literalmente «mujeres del mar», bucean en apnea desde hace generaciones para recolectar abulones, erizos de mar y algas en los fondos rocosos de Jeju, sin botella de oxígeno, una práctica incluida en el patrimonio cultural inmaterial de la UNESCO en 2016. Antes varias decenas de miles, hoy no son más de unas cuatro mil, en su mayoría mayores de sesenta años, y perpetúan un singular sistema matriarcal que tradicionalmente situaba a las mujeres en el centro de la economía familiar de la isla.",
      },
    ],
    hotels: [
      {
        name: "Villa côtière du sud de Jeju",
        nameEn: "A South Jeju Coastal Villa",
        nameEs: "Villa costera del sur de Jeju",
        description:
          "Une villa contemporaine sur la côte sud de Jeju, face aux falaises volcaniques, chambres avec vue sur l'océan et accès direct à des plages de sable noir volcanique.",
        descriptionEn:
          "A contemporary villa on Jeju's south coast, facing the volcanic cliffs, rooms with ocean views and direct access to black volcanic sand beaches.",
        descriptionEs:
          "Una villa contemporánea en la costa sur de Jeju, frente a los acantilados volcánicos, habitaciones con vistas al océano y acceso directo a playas de arena negra volcánica.",
        image: `${R2}/trips/coree-jeju-hotel-1.jpg`,
      },
      {
        name: "Hôtel de bord de mer près du mont Hallasan",
        nameEn: "A Seaside Hotel near Mount Hallasan",
        nameEs: "Hotel frente al mar cerca del monte Hallasan",
        description:
          "Un hôtel de bord de mer à courte distance du parc national du Hallasan, chambres modernes, point de départ pratique pour les randonnées et les tunnels de lave voisins.",
        descriptionEn:
          "A seaside hotel a short distance from Hallasan National Park, modern rooms, a convenient base for hikes and the nearby lava tubes.",
        descriptionEs:
          "Un hotel frente al mar a poca distancia del parque nacional de Hallasan, habitaciones modernas, punto de partida práctico para las caminatas y los tubos volcánicos cercanos.",
        image: `${R2}/trips/coree-jeju-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "ouzbekistan",
    tour: {
      name: "Ouzbékistan : la vallée de Ferghana, artisanat et vergers",
      nameEn: "Uzbekistan: The Fergana Valley, Crafts and Orchards",
      nameEs: "Uzbekistán: el valle de Fergana, artesanía y huertos",
      slug: "ouzbekistan-fergana-artisanat",
      image: `${R2}/tours/ouzbekistan-fergana-artisanat.jpg`,
      images: `${R2}/trips/ouzbekistan-fergana-gallery-1.jpg,${R2}/trips/ouzbekistan-fergana-gallery-2.jpg,${R2}/trips/ouzbekistan-fergana-gallery-3.jpg,${R2}/trips/ouzbekistan-fergana-gallery-4.jpg,${R2}/trips/ouzbekistan-fergana-gallery-5.jpg,${R2}/trips/ouzbekistan-fergana-gallery-6.jpg`,
      tagline: "La vallée la plus densément peuplée d'Asie centrale, berceau de la céramique et de la soie ouzbèkes",
      taglineEn: "Central Asia's most densely populated valley, the birthplace of Uzbek ceramics and silk",
      taglineEs: "El valle más densamente poblado de Asia Central, cuna de la cerámica y la seda uzbekas",
      description:
        "La vallée de Ferghana, à l'est de l'Ouzbékistan et coupée du reste du pays par une chaîne de montagnes, reste largement à l'écart des circuits classiques de Samarcande et Khiva malgré une richesse artisanale exceptionnelle. Ses ateliers de céramique de Rishtan, actifs depuis plus de huit siècles, et ses fermes de vers à soie de Marghilan, perpétuent des savoir-faire transmis de génération en génération dans une vallée surnommée le « jardin de l'Ouzbékistan » pour la fertilité de ses vergers d'abricotiers.",
      descriptionEn:
        "The Fergana Valley, in eastern Uzbekistan and cut off from the rest of the country by a mountain range, remains largely off the classic Samarkand and Khiva circuits despite exceptional craft traditions. Its Rishtan ceramic workshops, active for over eight centuries, and its Marghilan silkworm farms, carry on skills passed down through generations in a valley nicknamed the \"garden of Uzbekistan\" for the fertility of its apricot orchards.",
      descriptionEs:
        "El valle de Fergana, al este de Uzbekistán y separado del resto del país por una cordillera, permanece en gran parte al margen de los circuitos clásicos de Samarcanda y Jiva pese a una riqueza artesanal excepcional. Sus talleres de cerámica de Rishtan, activos desde hace más de ocho siglos, y sus granjas de gusanos de seda de Marghilan, perpetúan saberes transmitidos de generación en generación en un valle apodado el «jardín de Uzbekistán» por la fertilidad de sus huertos de albaricoqueros.",
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
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 116,
    },
    sections: [
      {
        heading: "Rishtan, la capitale de la céramique",
        headingEn: "Rishtan, the Ceramics Capital",
        headingEs: "Rishtan, la capital de la cerámica",
        body:
          "Rishtan, petite ville de la vallée de Ferghana, produit depuis plus de huit siècles une céramique reconnaissable entre toutes à son émail bleu-vert appelé ishkor, obtenu à partir de cendres de plantes locales selon une recette tenue secrète par les familles de potiers. Les ateliers familiaux, transmis de père en fils depuis des générations, ouvrent leurs portes aux visiteurs pour observer le tournage, la peinture à main levée et la cuisson dans des fours traditionnels creusés dans la terre.",
        bodyEn:
          "Rishtan, a small town in the Fergana Valley, has for over eight centuries produced ceramics instantly recognisable by their blue-green glaze called ishkor, obtained from local plant ash according to a recipe kept secret by families of potters. Family workshops, passed down from father to son for generations, open their doors to visitors to observe wheel-throwing, freehand painting, and firing in traditional kilns dug into the earth.",
        bodyEs:
          "Rishtan, pequeña ciudad del valle de Fergana, produce desde hace más de ocho siglos una cerámica reconocible entre todas por su esmalte azul verdoso llamado ishkor, obtenido a partir de cenizas de plantas locales según una receta mantenida en secreto por las familias de alfareros. Los talleres familiares, transmitidos de padre a hijo durante generaciones, abren sus puertas a los visitantes para observar el torneado, la pintura a mano alzada y la cocción en hornos tradicionales excavados en la tierra.",
      },
      {
        heading: "Marghilan et la route de la soie vivante",
        headingEn: "Marghilan and the Living Silk Road",
        headingEs: "Marghilan y la ruta de la seda viva",
        body:
          "Marghilan, l'une des plus anciennes villes d'Ouzbékistan, reste un centre actif de production de soie ikat, technique de teinture par réserve où les fils sont teints avant le tissage pour créer des motifs flous caractéristiques. La fabrique Yodgorlik, l'une des dernières à produire encore de la soie entièrement à la main, dévoile tout le processus depuis l'élevage des vers à soie jusqu'au tissage sur métiers en bois, un savoir-faire qui fit jadis la richesse de la ville sur la route de la soie.",
        bodyEn:
          "Marghilan, one of Uzbekistan's oldest cities, remains an active centre of ikat silk production, a resist-dyeing technique where threads are dyed before weaving to create characteristic blurred patterns. The Yodgorlik factory, one of the last still producing silk entirely by hand, reveals the whole process from silkworm rearing to weaving on wooden looms, a craft that once made the city's fortune on the Silk Road.",
        bodyEs:
          "Marghilan, una de las ciudades más antiguas de Uzbekistán, sigue siendo un centro activo de producción de seda ikat, técnica de teñido por reserva en la que los hilos se tiñen antes del tejido para crear los característicos motivos difuminados. La fábrica Yodgorlik, una de las últimas que todavía produce seda enteramente a mano, revela todo el proceso desde la cría de gusanos de seda hasta el tejido en telares de madera, un saber que antaño forjó la riqueza de la ciudad en la Ruta de la Seda.",
      },
    ],
    hotels: [
      {
        name: "Maison d'hôtes d'un potier à Rishtan",
        nameEn: "A Potter's Guesthouse in Rishtan",
        nameEs: "Casa de huéspedes de un alfarero en Rishtan",
        description:
          "Une maison d'hôtes attenante à l'atelier d'une famille de potiers de Rishtan, cour intérieure traditionnelle, initiation possible au tournage sur demande.",
        descriptionEn:
          "A guesthouse adjoining the workshop of a Rishtan family of potters, a traditional inner courtyard, an optional introduction to wheel-throwing on request.",
        descriptionEs:
          "Una casa de huéspedes contigua al taller de una familia de alfareros de Rishtan, patio interior tradicional, posible iniciación al torno bajo petición.",
        image: `${R2}/trips/ouzbekistan-fergana-hotel-1.jpg`,
      },
      {
        name: "Hôtel de charme de Marghilan",
        nameEn: "A Marghilan Boutique Hotel",
        nameEs: "Hotel con encanto de Marghilan",
        description:
          "Un hôtel de charme installé dans une demeure marchande rénovée de Marghilan, à distance de marche de la fabrique de soie Yodgorlik et du bazar local.",
        descriptionEn:
          "A boutique hotel housed in a renovated merchant residence in Marghilan, within walking distance of the Yodgorlik silk factory and the local bazaar.",
        descriptionEs:
          "Un hotel con encanto instalado en una residencia de comerciantes renovada en Marghilan, a poca distancia a pie de la fábrica de seda Yodgorlik y del bazar local.",
        image: `${R2}/trips/ouzbekistan-fergana-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "taiwan",
    tour: {
      name: "Taïwan : Kenting et la côte sud tropicale",
      nameEn: "Taiwan: Kenting and the Tropical South Coast",
      nameEs: "Taiwán: Kenting y la costa sur tropical",
      slug: "taiwan-kenting-sud",
      image: `${R2}/tours/taiwan-kenting-sud.jpg`,
      images: `${R2}/trips/taiwan-kenting-gallery-1.jpg,${R2}/trips/taiwan-kenting-gallery-2.jpg,${R2}/trips/taiwan-kenting-gallery-3.jpg,${R2}/trips/taiwan-kenting-gallery-4.jpg,${R2}/trips/taiwan-kenting-gallery-5.jpg,${R2}/trips/taiwan-kenting-gallery-6.jpg`,
      tagline: "Le premier parc national de Taïwan, où récifs coralliens et forêt tropicale se rejoignent à la pointe sud de l'île",
      taglineEn: "Taiwan's first national park, where coral reefs and tropical forest meet at the island's southern tip",
      taglineEs: "El primer parque nacional de Taiwán, donde arrecifes de coral y selva tropical se encuentran en la punta sur de la isla",
      description:
        "Kenting, à la pointe sud de Taïwan, abrite le premier parc national du pays, créé en 1984 pour protéger un écosystème unique où forêt tropicale, récifs coralliens et formations de corail fossilisé se rejoignent sur un territoire restreint. Loin de l'image industrielle souvent associée à Taïwan, la région se distingue par un climat tropical toute l'année, des plages de sable blanc et une scène de surf locale née dans les années 1990.",
      descriptionEn:
        "Kenting, at Taiwan's southern tip, is home to the country's first national park, created in 1984 to protect a unique ecosystem where tropical forest, coral reefs, and fossilised coral formations meet within a small territory. Far from the industrial image often associated with Taiwan, the region stands out for its year-round tropical climate, white sand beaches, and a local surf scene born in the 1990s.",
      descriptionEs:
        "Kenting, en la punta sur de Taiwán, alberga el primer parque nacional del país, creado en 1984 para proteger un ecosistema único donde selva tropical, arrecifes de coral y formaciones de coral fosilizado se encuentran en un territorio reducido. Lejos de la imagen industrial a menudo asociada a Taiwán, la región destaca por un clima tropical durante todo el año, playas de arena blanca y una escena local de surf nacida en la década de 1990.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Mars à juin | Sept à nov",
      whenLabelEn: "March to June | Sept to Nov",
      whenLabelEs: "Marzo a junio | sept a nov",
      bestMonths: "march,april,may,june,september,october,november",
      category: "multi-day",
      theme: "relax",
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 118,
    },
    sections: [
      {
        heading: "Le premier parc national de Taïwan",
        headingEn: "Taiwan's First National Park",
        headingEs: "El primer parque nacional de Taiwán",
        body:
          "Le parc national de Kenting, créé en 1984 comme premier du genre à Taïwan, protège un territoire restreint où se côtoient forêt tropicale, dunes de corail fossilisé et récifs coralliens vivants au large, un écosystème rare pour une latitude subtropicale. Les falaises de corail levé de Maobitou, sculptées par des millénaires d'érosion marine, et le phare de Eluanbi, marquant la pointe la plus méridionale de l'île, comptent parmi les sites les plus photographiés de la région.",
        bodyEn:
          "Kenting National Park, created in 1984 as Taiwan's first, protects a small territory where tropical forest, fossilised coral dunes, and living coral reefs offshore sit side by side, a rare ecosystem for a subtropical latitude. The uplifted coral cliffs of Maobitou, sculpted by millennia of marine erosion, and the Eluanbi lighthouse, marking the island's southernmost point, rank among the region's most photographed sites.",
        bodyEs:
          "El parque nacional de Kenting, creado en 1984 como el primero de su tipo en Taiwán, protege un territorio reducido donde conviven selva tropical, dunas de coral fosilizado y arrecifes de coral vivo mar adentro, un ecosistema poco común para una latitud subtropical. Los acantilados de coral levantado de Maobitou, esculpidos por milenios de erosión marina, y el faro de Eluanbi, que marca el punto más meridional de la isla, se cuentan entre los lugares más fotografiados de la región.",
      },
      {
        heading: "Les plages et la scène de surf du sud",
        headingEn: "The beaches and southern surf scene",
        headingEs: "Las playas y la escena de surf del sur",
        body:
          "Les plages de Kenting, exposées aux vagues régulières générées par le canal de Bashi entre Taïwan et les Philippines, ont vu naître dans les années 1990 la première scène de surf organisée de l'île, aujourd'hui animée d'écoles et de compétitions locales. Le marché de nuit de Kenting, l'un des plus réputés du sud de Taïwan, complète l'ambiance décontractée de cette station balnéaire qui attire chaque été surfeurs et familles taïwanaises en quête de plages moins fréquentées que celles du nord.",
        bodyEn:
          "Kenting's beaches, exposed to the steady waves generated by the Bashi Channel between Taiwan and the Philippines, saw the birth in the 1990s of the island's first organised surf scene, now home to schools and local competitions. Kenting's night market, one of the most renowned in southern Taiwan, rounds out the laid-back atmosphere of this beach town that draws surfers and Taiwanese families every summer in search of beaches less crowded than those in the north.",
        bodyEs:
          "Las playas de Kenting, expuestas a las olas regulares generadas por el canal de Bashi entre Taiwán y Filipinas, vieron nacer en la década de 1990 la primera escena de surf organizada de la isla, hoy animada por escuelas y competiciones locales. El mercado nocturno de Kenting, uno de los más reputados del sur de Taiwán, completa el ambiente relajado de esta localidad balnearia que atrae cada verano a surfistas y familias taiwanesas en busca de playas menos concurridas que las del norte.",
      },
    ],
    hotels: [
      {
        name: "Resort de plage de Kenting",
        nameEn: "A Kenting Beach Resort",
        nameEs: "Resort de playa de Kenting",
        description:
          "Un resort en bord de plage à Kenting, piscine face à l'océan, chambres modernes à distance de marche du marché de nuit et des principaux spots de surf.",
        descriptionEn:
          "A beachfront resort in Kenting, a pool facing the ocean, modern rooms within walking distance of the night market and the main surf spots.",
        descriptionEs:
          "Un resort junto a la playa en Kenting, piscina frente al océano, habitaciones modernas a poca distancia a pie del mercado nocturno y los principales spots de surf.",
        image: `${R2}/trips/taiwan-kenting-hotel-1.jpg`,
      },
      {
        name: "Boutique-hôtel du parc national",
        nameEn: "A National Park Boutique Hotel",
        nameEs: "Hotel boutique del parque nacional",
        description:
          "Un boutique-hôtel niché en lisière du parc national de Kenting, jardin tropical, à courte distance des falaises de corail de Maobitou et du phare de Eluanbi.",
        descriptionEn:
          "A boutique hotel nestled on the edge of Kenting National Park, a tropical garden, a short distance from the Maobitou coral cliffs and the Eluanbi lighthouse.",
        descriptionEs:
          "Un hotel boutique enclavado en el límite del parque nacional de Kenting, jardín tropical, a poca distancia de los acantilados de coral de Maobitou y del faro de Eluanbi.",
        image: `${R2}/trips/taiwan-kenting-hotel-2.jpg`,
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
