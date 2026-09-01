// Europe batch 3 — Portugal, Croatie, Suisse. New trips bringing each destination to at least
// 3, styled on Black Tomato's real structure (a short number of named-hotel chapters, not an
// exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-europe-3.ts
// Requires scripts/upload-images-europe-3.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "portugal",
    tour: {
      name: "Portugal : Sintra et l'Algarve",
      nameEn: "Portugal: Sintra and the Algarve",
      nameEs: "Portugal: Sintra y el Algarve",
      slug: "portugal-sintra-algarve",
      image: `${R2}/journeys/portugal-sintra-algarve-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une colline de palais si extravagants qu'ils inspirèrent le mouvement romantique européen, puis des grottes marines sculptées dans la roche ocre",
      taglineEn: "A hill of palaces so extravagant they inspired the European Romantic movement, then sea caves carved into ochre rock",
      taglineEs: "Una colina de palacios tan extravagantes que inspiraron el movimiento romántico europeo, y después cuevas marinas talladas en roca ocre",
      description:
        "Un voyage loin de Lisbonne et de la vallée du Douro : Sintra, colline couverte de brume à une trentaine de kilomètres de la capitale, où l'aristocratie portugaise fit bâtir au XIXe siècle des palais aux styles éclectiques mêlant influences mauresques, gothiques et Renaissance, un ensemble si singulier que Lord Byron le qualifia d'« Éden glorieux », puis l'Algarve, dont les falaises calcaires ocre sculptées par l'érosion abritent des dizaines de grottes marines accessibles uniquement en kayak ou en bateau.",
      descriptionEn:
        "A journey far from Lisbon and the Douro Valley: Sintra, a mist-covered hill about thirty kilometres from the capital, where Portuguese aristocracy had eclectic palaces built in the 19th century blending Moorish, Gothic, and Renaissance influences, an ensemble so singular that Lord Byron called it a \"glorious Eden,\" then the Algarve, whose ochre limestone cliffs sculpted by erosion shelter dozens of sea caves accessible only by kayak or boat.",
      descriptionEs:
        "Un viaje lejos de Lisboa y el valle del Duero: Sintra, colina cubierta de niebla a unos treinta kilómetros de la capital, donde la aristocracia portuguesa mandó construir en el siglo XIX palacios de estilos eclécticos que mezclan influencias moriscas, góticas y renacentistas, un conjunto tan singular que Lord Byron lo calificó de «Edén glorioso», y después el Algarve, cuyos acantilados calizos ocres esculpidos por la erosión albergan decenas de cuevas marinas accesibles solo en kayak o en barco.",
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
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 188,
    },
    chapters: [
      {
        title: "Sintra, la colline des palais",
        titleEn: "Sintra, the Hill of Palaces",
        titleEs: "Sintra, la colina de los palacios",
        intro:
          "Premier chapitre à Sintra, classée au patrimoine mondial de l'UNESCO pour son paysage culturel exceptionnel, où le roi Ferdinand II fit bâtir à partir de 1840 le palais de Pena, forteresse aux couleurs vives mêlant tourelles mauresques, créneaux gothiques et dômes bulbeux qui devint le manifeste architectural du romantisme portugais. Cette effervescence architecturale, qui influença en retour le romantisme européen selon Lord Byron lui-même, se prolonge dans le domaine voisin de Quinta da Regaleira, dont le puits initiatique en spirale reste chargé d'une symbolique ésotérique encore débattue.",
        introEn:
          "The first chapter unfolds in Sintra, UNESCO World Heritage listed for its exceptional cultural landscape, where King Ferdinand II had Pena Palace built from 1840 onward, a brightly coloured fortress blending Moorish turrets, Gothic battlements, and bulbous domes that became the architectural manifesto of Portuguese Romanticism. This architectural effervescence, which in turn influenced European Romanticism according to Lord Byron himself, continues at the neighbouring Quinta da Regaleira estate, whose spiral initiation well remains charged with esoteric symbolism still debated today.",
        introEs:
          "El primer capítulo se desarrolla en Sintra, declarada Patrimonio de la Humanidad por la UNESCO por su excepcional paisaje cultural, donde el rey Fernando II mandó construir a partir de 1840 el palacio de Pena, fortaleza de colores vivos que mezcla torreones moriscos, almenas góticas y cúpulas bulbosas y que se convirtió en el manifiesto arquitectónico del romanticismo portugués. Esta efervescencia arquitectónica, que a su vez influyó en el romanticismo europeo según el propio Lord Byron, continúa en la vecina finca de Quinta da Regaleira, cuyo pozo iniciático en espiral sigue cargado de una simbología esotérica todavía debatida.",
        galleryImages: `${R2}/journeys/portugal-sintra-gallery1.jpg,${R2}/journeys/portugal-sintra-gallery2.jpg,${R2}/journeys/portugal-sintra-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 35,
        days: [
          {
            dayNumber: 1,
            title: "Le palais de Pena",
            titleEn: "Pena Palace",
            titleEs: "El palacio de Pena",
            description:
              "Visite du palais de Pena, forteresse romantique aux couleurs vives mêlant styles mauresque, gothique et Renaissance, perchée sur l'un des points culminants de la colline de Sintra.",
            descriptionEn:
              "A visit to Pena Palace, a brightly coloured Romantic fortress blending Moorish, Gothic, and Renaissance styles, perched on one of the highest points of the Sintra hill.",
            descriptionEs:
              "Visita al palacio de Pena, fortaleza romántica de colores vivos que mezcla estilos morisco, gótico y renacentista, encaramada en uno de los puntos más altos de la colina de Sintra.",
            image: `${R2}/journeys/portugal-sintra-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La Quinta da Regaleira et son puits initiatique",
            titleEn: "Quinta da Regaleira and its initiation well",
            titleEs: "La Quinta da Regaleira y su pozo iniciático",
            description:
              "Visite de la Quinta da Regaleira, domaine ésotérique du début du XXe siècle, dont le puits initiatique en spirale s'enfonce sous terre à travers grottes et tunnels symboliques.",
            descriptionEn:
              "A visit to Quinta da Regaleira, an early-20th-century esoteric estate whose spiral initiation well descends underground through symbolic caves and tunnels.",
            descriptionEs:
              "Visita a la Quinta da Regaleira, finca esotérica de comienzos del siglo XX, cuyo pozo iniciático en espiral se hunde bajo tierra a través de cuevas y túneles simbólicos.",
            image: `${R2}/journeys/portugal-sintra-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'Algarve et ses grottes marines",
        titleEn: "The Algarve and its Sea Caves",
        titleEs: "El Algarve y sus cuevas marinas",
        intro:
          "Route vers l'Algarve, façade sud du Portugal dont les falaises calcaires ocre, sculptées sur des millions d'années par l'érosion marine, abritent des dizaines de grottes accessibles uniquement depuis l'eau, dont Benagil, la plus célèbre, coiffée d'une ouverture naturelle dans son plafond qui laisse filtrer la lumière du soleil directement sur une plage de sable intérieure. Ces formations rocheuses, parmi les plus photographiées du littoral atlantique européen, se découvrent traditionnellement en kayak ou en petit bateau à moteur au départ des ports de pêche voisins.",
        introEn:
          "The road to the Algarve, Portugal's southern coast, whose ochre limestone cliffs, sculpted over millions of years by marine erosion, shelter dozens of caves accessible only from the water, including Benagil, the most famous, topped by a natural opening in its ceiling that lets sunlight filter directly onto an interior sand beach. These rock formations, among the most photographed on the European Atlantic coastline, are traditionally explored by kayak or small motorboat from nearby fishing ports.",
        introEs:
          "Ruta hacia el Algarve, fachada sur de Portugal cuyos acantilados calizos ocres, esculpidos durante millones de años por la erosión marina, albergan decenas de cuevas accesibles solo desde el agua, entre ellas Benagil, la más famosa, coronada por una abertura natural en su techo que deja filtrar la luz del sol directamente sobre una playa de arena interior. Estas formaciones rocosas, entre las más fotografiadas del litoral atlántico europeo, se descubren tradicionalmente en kayak o en pequeña lancha desde los puertos pesqueros cercanos.",
        galleryImages: `${R2}/journeys/portugal-algarve-gallery1.jpg,${R2}/journeys/portugal-algarve-gallery2.jpg,${R2}/journeys/portugal-algarve-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 80,
        days: [
          {
            dayNumber: 1,
            title: "Kayak vers la grotte de Benagil",
            titleEn: "Kayaking to Benagil Cave",
            titleEs: "Kayak hacia la cueva de Benagil",
            description:
              "Sortie en kayak le long des falaises ocre de l'Algarve jusqu'à la grotte de Benagil, dont l'ouverture au plafond laisse filtrer la lumière sur une plage de sable intérieure.",
            descriptionEn:
              "A kayak outing along the Algarve's ochre cliffs to Benagil Cave, whose ceiling opening lets sunlight filter onto an interior sand beach.",
            descriptionEs:
              "Salida en kayak a lo largo de los acantilados ocres del Algarve hasta la cueva de Benagil, cuya abertura en el techo deja filtrar la luz sobre una playa de arena interior.",
            image: `${R2}/journeys/portugal-algarve-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Croisière le long des falaises de Lagos",
            titleEn: "A cruise along the Lagos cliffs",
            titleEs: "Crucero por los acantilados de Lagos",
            description:
              "Sortie en bateau le long des falaises de Ponta da Piedade, près de Lagos, entre arches naturelles et grottes marines sculptées par des millénaires d'érosion.",
            descriptionEn:
              "A boat trip along the Ponta da Piedade cliffs near Lagos, among natural arches and sea caves sculpted by millennia of erosion.",
            descriptionEs:
              "Salida en barco por los acantilados de Ponta da Piedade, cerca de Lagos, entre arcos naturales y cuevas marinas esculpidas por milenios de erosión.",
            image: `${R2}/journeys/portugal-algarve-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "croatie",
    tour: {
      name: "Croatie : Zadar et les îles Kornati",
      nameEn: "Croatia: Zadar and the Kornati Islands",
      nameEs: "Croacia: Zadar y las islas Kornati",
      slug: "croatie-zadar-kornati",
      image: `${R2}/journeys/croatie-zadar-kornati-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un instrument de musique actionné par les vagues qu'Alfred Hitchcock qualifia de plus beau coucher de soleil du monde, puis un archipel de près de cent cinquante îles désertes",
      taglineEn: "A wave-powered musical instrument that Alfred Hitchcock called the world's most beautiful sunset, then an archipelago of nearly one hundred and fifty deserted islands",
      taglineEs: "Un instrumento musical accionado por las olas que Alfred Hitchcock calificó del atardecer más bello del mundo, y después un archipiélago de casi ciento cincuenta islas desiertas",
      description:
        "Un voyage sur la côte dalmate du nord, loin de Dubrovnik et de Hvar : Zadar, dont l'orgue marin, instrument architectural actionné par le mouvement des vagues sous une série de tuyaux submergés, produit des harmonies aléatoires face à un coucher de soleil qu'Alfred Hitchcock qualifia du plus beau du monde après sa visite en 1964, puis le parc national des Kornati, archipel de près de cent cinquante îles et îlots calcaires désertiques, largement dépourvus de végétation et d'eau douce, explorés en voilier au fil de criques isolées.",
      descriptionEn:
        "A journey along the northern Dalmatian coast, far from Dubrovnik and Hvar: Zadar, whose Sea Organ, an architectural instrument powered by wave motion beneath a series of submerged pipes, produces random harmonies facing a sunset that Alfred Hitchcock called the world's most beautiful after his 1964 visit, then Kornati National Park, an archipelago of nearly one hundred and fifty desert-like limestone islands and islets, largely bare of vegetation and fresh water, explored by sailboat among isolated coves.",
      descriptionEs:
        "Un viaje por la costa dálmata del norte, lejos de Dubrovnik y Hvar: Zadar, cuyo órgano marino, instrumento arquitectónico accionado por el movimiento de las olas bajo una serie de tubos sumergidos, produce armonías aleatorias frente a un atardecer que Alfred Hitchcock calificó del más bello del mundo tras su visita en 1964, y después el parque nacional de Kornati, archipiélago de casi ciento cincuenta islas e islotes calizos desérticos, en gran parte desprovistos de vegetación y agua dulce, explorado en velero entre calas aisladas.",
      price: 2700,
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
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 190,
    },
    chapters: [
      {
        title: "Zadar et l'orgue marin",
        titleEn: "Zadar and the Sea Organ",
        titleEs: "Zadar y el órgano marino",
        intro:
          "Premier chapitre à Zadar, ville dalmate à l'histoire millénaire dont le front de mer accueille depuis 2005 l'orgue marin, installation architecturale conçue par l'architecte croate Nikola Bašić, où le mouvement des vagues actionne un système de tuyaux submergés produisant des harmonies aléatoires et changeantes. Face à cet instrument unique au monde, le coucher de soleil sur l'Adriatique fut qualifié par Alfred Hitchcock, en visite dans la ville en 1964, de plus beau qu'il ait jamais vu.",
        introEn:
          "The first chapter unfolds in Zadar, a Dalmatian city with a millennia-old history whose waterfront has hosted the Sea Organ since 2005, an architectural installation designed by Croatian architect Nikola Bašić, where the movement of waves activates a system of submerged pipes producing random, ever-changing harmonies. Facing this unique instrument, the sunset over the Adriatic was called by Alfred Hitchcock, visiting the city in 1964, the most beautiful he had ever seen.",
        introEs:
          "El primer capítulo se desarrolla en Zadar, ciudad dálmata de historia milenaria cuyo paseo marítimo acoge desde 2005 el órgano marino, instalación arquitectónica diseñada por el arquitecto croata Nikola Bašić, donde el movimiento de las olas acciona un sistema de tubos sumergidos que produce armonías aleatorias y cambiantes. Frente a este instrumento único en el mundo, el atardecer sobre el Adriático fue calificado por Alfred Hitchcock, de visita en la ciudad en 1964, como el más bello que había visto jamás.",
        galleryImages: `${R2}/journeys/croatie-zadar-gallery1.jpg,${R2}/journeys/croatie-zadar-gallery2.jpg,${R2}/journeys/croatie-zadar-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "L'orgue marin au coucher du soleil",
            titleEn: "The Sea Organ at sunset",
            titleEs: "El órgano marino al atardecer",
            description:
              "Promenade sur le front de mer de Zadar jusqu'à l'orgue marin, où le mouvement des vagues produit des harmonies changeantes, face au coucher de soleil qui fit la réputation mondiale du site.",
            descriptionEn:
              "A stroll along Zadar's waterfront to the Sea Organ, where the movement of waves produces ever-changing harmonies, facing the sunset that made the site world-famous.",
            descriptionEs:
              "Paseo por el paseo marítimo de Zadar hasta el órgano marino, donde el movimiento de las olas produce armonías cambiantes, frente al atardecer que dio fama mundial al lugar.",
            image: `${R2}/journeys/croatie-zadar-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La vieille ville et le Salut au Soleil",
            titleEn: "The old town and Sun Salutation",
            titleEs: "El casco antiguo y el Saludo al Sol",
            description:
              "Promenade dans la vieille ville romaine de Zadar, puis visite du Salut au Soleil, installation lumineuse voisine de l'orgue marin qui capte l'énergie solaire pour s'illuminer chaque nuit.",
            descriptionEn:
              "A stroll through Zadar's Roman old town, then a visit to the Sun Salutation, a light installation next to the Sea Organ that captures solar energy to light up every night.",
            descriptionEs:
              "Paseo por el casco antiguo romano de Zadar, y visita al Saludo al Sol, instalación luminosa vecina del órgano marino que capta energía solar para iluminarse cada noche.",
            image: `${R2}/journeys/croatie-zadar-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le parc national des Kornati",
        titleEn: "Kornati National Park",
        titleEs: "El parque nacional de Kornati",
        intro:
          "Traversée en voilier vers le parc national des Kornati, archipel de près de cent cinquante îles et îlots calcaires désertiques dépourvus d'eau douce et de végétation haute, un paysage lunaire qui inspira l'écrivain irlandais George Bernard Shaw à écrire que le Créateur avait dû, le dernier jour de la création, laisser libre cours à un jeu de larmes de pierre et d'étoiles pour façonner ces îles. Ce parc marin, l'un des plus densément insulaires de toute la Méditerranée, reste largement préservé du tourisme de masse grâce à l'absence d'infrastructures permanentes.",
        introEn:
          "A sailboat crossing to Kornati National Park, an archipelago of nearly one hundred and fifty desert-like limestone islands and islets lacking fresh water and tall vegetation, a lunar landscape that inspired Irish writer George Bernard Shaw to write that the Creator must have, on the last day of creation, let loose a play of stone tears and stars to shape these islands. This marine park, one of the most densely islanded in the entire Mediterranean, remains largely preserved from mass tourism thanks to the absence of permanent infrastructure.",
        introEs:
          "Travesía en velero hacia el parque nacional de Kornati, archipiélago de casi ciento cincuenta islas e islotes calizos desérticos carentes de agua dulce y vegetación alta, un paisaje lunar que inspiró al escritor irlandés George Bernard Shaw a escribir que el Creador debió, el último día de la creación, dejar rienda suelta a un juego de lágrimas de piedra y estrellas para dar forma a estas islas. Este parque marino, uno de los más densamente insulares de todo el Mediterráneo, permanece en gran parte preservado del turismo de masas gracias a la ausencia de infraestructuras permanentes.",
        galleryImages: `${R2}/journeys/croatie-kornati-gallery1.jpg,${R2}/journeys/croatie-kornati-gallery2.jpg,${R2}/journeys/croatie-kornati-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Navigation entre les îles désertiques",
            titleEn: "Sailing among the desert-like islands",
            titleEs: "Navegación entre las islas desérticas",
            description:
              "Journée de navigation en voilier à travers l'archipel des Kornati, entre falaises calcaires plongeant directement dans une eau turquoise et criques isolées accessibles uniquement par bateau.",
            descriptionEn:
              "A day of sailing through the Kornati archipelago, between limestone cliffs plunging directly into turquoise water and isolated coves accessible only by boat.",
            descriptionEs:
              "Día de navegación en velero por el archipiélago de Kornati, entre acantilados calizos que se sumergen directamente en agua turquesa y calas aisladas accesibles solo en barco.",
            image: `${R2}/journeys/croatie-kornati-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Snorkeling et déjeuner de poisson sur une île déserte",
            titleEn: "Snorkelling and a fish lunch on a deserted island",
            titleEs: "Esnórquel y almuerzo de pescado en una isla desierta",
            description:
              "Snorkeling dans les eaux protégées du parc national, puis déjeuner de poisson fraîchement pêché préparé à bord, sur une île déserte dépourvue de toute infrastructure touristique.",
            descriptionEn:
              "Snorkelling in the park's protected waters, then a lunch of freshly caught fish prepared on board, on a deserted island with no tourist infrastructure.",
            descriptionEs:
              "Esnórquel en las aguas protegidas del parque nacional, y almuerzo de pescado recién capturado preparado a bordo, en una isla desierta sin ninguna infraestructura turística.",
            image: `${R2}/journeys/croatie-kornati-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "suisse",
    tour: {
      name: "Suisse : le Tessin et l'Appenzell",
      nameEn: "Switzerland: Ticino and Appenzell",
      nameEs: "Suiza: el Tesino y el Appenzell",
      slug: "suisse-ticino-appenzell",
      image: `${R2}/journeys/suisse-ticino-appenzell-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une Suisse italienne aux palmiers et aux lacs méditerranéens, puis un canton où les hommes portent encore la boucle d'oreille en or de la tradition paysanne",
      taglineEn: "An Italian-speaking Switzerland of palm trees and Mediterranean-feeling lakes, then a canton where men still wear the gold earring of peasant tradition",
      taglineEs: "Una Suiza italiana de palmeras y lagos de aire mediterráneo, y después un cantón donde los hombres todavía llevan el pendiente de oro de la tradición campesina",
      description:
        "Un voyage loin de Genève, Zermatt et Lucerne : le Tessin, seul canton entièrement italophone de Suisse, dont le lac de Lugano bordé de palmiers et de villas Belle Époque évoque davantage la Riviera italienne que les Alpes helvétiques, puis l'Appenzell, plus petit canton du pays, resté profondément attaché à ses traditions paysannes, où les hommes portent encore lors des fêtes la boucle d'oreille en or transmise depuis des générations et où les vaches sont menées à l'alpage chaque printemps en costume traditionnel brodé.",
      descriptionEn:
        "A journey far from Geneva, Zermatt, and Lucerne: Ticino, Switzerland's only fully Italian-speaking canton, whose Lake Lugano lined with palm trees and Belle Époque villas evokes the Italian Riviera far more than the Swiss Alps, then Appenzell, the country's smallest canton, deeply attached to its peasant traditions, where men still wear the gold earring passed down through generations at festivals and where cows are led up to the alpine pastures each spring in embroidered traditional dress.",
      descriptionEs:
        "Un viaje lejos de Ginebra, Zermatt y Lucerna: el Tesino, único cantón enteramente italófono de Suiza, cuyo lago Lugano bordeado de palmeras y villas de la Belle Époque evoca mucho más la Riviera italiana que los Alpes suizos, y después el Appenzell, el cantón más pequeño del país, profundamente apegado a sus tradiciones campesinas, donde los hombres todavía lucen en las fiestas el pendiente de oro transmitido durante generaciones y donde las vacas son conducidas a los pastos alpinos cada primavera con traje tradicional bordado.",
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
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 192,
    },
    chapters: [
      {
        title: "Le Tessin, la Suisse italienne",
        titleEn: "Ticino, Italian Switzerland",
        titleEs: "El Tesino, la Suiza italiana",
        intro:
          "Premier chapitre au Tessin, seul canton suisse entièrement italophone, dont le climat particulièrement doux permet la culture de palmiers et de citronniers sur les rives du lac de Lugano, bordées de villas Belle Époque construites au tournant du XXe siècle par une aristocratie européenne en quête de douceur méridionale sans quitter les frontières helvétiques. Cette atmosphère méditerranéenne, renforcée par une architecture et une gastronomie fortement influencées par l'Italie voisine, offre un visage de la Suisse radicalement différent des images alpines habituelles du pays.",
        introEn:
          "The first chapter unfolds in Ticino, Switzerland's only fully Italian-speaking canton, whose particularly mild climate allows palm and lemon trees to grow along the shores of Lake Lugano, lined with Belle Époque villas built at the turn of the 20th century by a European aristocracy seeking southern warmth without leaving Swiss borders. This Mediterranean atmosphere, reinforced by architecture and cuisine strongly influenced by neighbouring Italy, offers a face of Switzerland radically different from the country's usual alpine images.",
        introEs:
          "El primer capítulo se desarrolla en el Tesino, único cantón suizo enteramente italófono, cuyo clima particularmente suave permite el cultivo de palmeras y limoneros en las orillas del lago Lugano, bordeadas de villas de la Belle Époque construidas a comienzos del siglo XX por una aristocracia europea en busca de dulzura meridional sin abandonar las fronteras suizas. Esta atmósfera mediterránea, reforzada por una arquitectura y una gastronomía fuertemente influenciadas por la vecina Italia, ofrece una cara de Suiza radicalmente distinta de las habituales imágenes alpinas del país.",
        galleryImages: `${R2}/journeys/suisse-ticino-gallery1.jpg,${R2}/journeys/suisse-ticino-gallery2.jpg,${R2}/journeys/suisse-ticino-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Croisière sur le lac de Lugano",
            titleEn: "A cruise on Lake Lugano",
            titleEs: "Crucero por el lago Lugano",
            description:
              "Croisière en bateau sur le lac de Lugano, entre villas Belle Époque et villages en terrasses, avec vue sur le mont San Salvatore qui domine la baie.",
            descriptionEn:
              "A boat cruise on Lake Lugano, between Belle Époque villas and terraced villages, with views of Mount San Salvatore overlooking the bay.",
            descriptionEs:
              "Crucero en barco por el lago Lugano, entre villas de la Belle Époque y pueblos en terrazas, con vistas al monte San Salvatore que domina la bahía.",
            image: `${R2}/journeys/suisse-ticino-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les ruelles de la vieille ville de Lugano",
            titleEn: "The old town lanes of Lugano",
            titleEs: "Las callejuelas del casco antiguo de Lugano",
            description:
              "Promenade dans la vieille ville de Lugano, à l'architecture et à la gastronomie fortement influencées par l'Italie voisine, entre places ombragées et cathédrale Renaissance.",
            descriptionEn:
              "A stroll through Lugano's old town, its architecture and cuisine strongly influenced by neighbouring Italy, among shaded squares and a Renaissance cathedral.",
            descriptionEs:
              "Paseo por el casco antiguo de Lugano, de arquitectura y gastronomía fuertemente influenciadas por la vecina Italia, entre plazas sombreadas y catedral renacentista.",
            image: `${R2}/journeys/suisse-ticino-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'Appenzell, la Suisse traditionnelle",
        titleEn: "Appenzell, Traditional Switzerland",
        titleEs: "El Appenzell, la Suiza tradicional",
        intro:
          "Route vers l'Appenzell, plus petit canton de Suisse et l'un des derniers à avoir accordé le droit de vote aux femmes en 1990, où les traditions paysannes restent vivaces avec une intensité rare dans l'Europe contemporaine. Chaque printemps, les éleveurs conduisent leurs troupeaux vers les alpages en cortège costumé, vêtus de tenues traditionnelles brodées et parés de la boucle d'oreille en or transmise de génération en génération, un rituel appelé Alpaufzug qui rassemble encore aujourd'hui l'ensemble des villages de la région.",
        introEn:
          "The road to Appenzell, Switzerland's smallest canton and one of the last to grant women the right to vote in 1990, where peasant traditions remain vibrant with a rare intensity in contemporary Europe. Every spring, herders lead their livestock up to the alpine pastures in a costumed procession, wearing embroidered traditional dress and adorned with the gold earring passed down through generations, a ritual called Alpaufzug that still brings together the region's entire villages today.",
        introEs:
          "Ruta hacia el Appenzell, el cantón más pequeño de Suiza y uno de los últimos en conceder el derecho de voto a las mujeres en 1990, donde las tradiciones campesinas siguen vivas con una intensidad poco común en la Europa contemporánea. Cada primavera, los pastores conducen su ganado hacia los pastos alpinos en un cortejo ataviado, vestidos con trajes tradicionales bordados y adornados con el pendiente de oro transmitido de generación en generación, ritual llamado Alpaufzug que todavía hoy reúne a todos los pueblos de la región.",
        galleryImages: `${R2}/journeys/suisse-appenzell-gallery1.jpg,${R2}/journeys/suisse-appenzell-gallery2.jpg,${R2}/journeys/suisse-appenzell-gallery3.jpg`,
        mapMarkerX: 80,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Une ferme d'alpage et la fabrication du fromage",
            titleEn: "An alpine farm and cheesemaking",
            titleEs: "Una granja alpina y la elaboración del queso",
            description:
              "Visite d'une ferme d'alpage traditionnelle de l'Appenzell, démonstration de la fabrication artisanale du fromage local selon des méthodes transmises depuis des générations.",
            descriptionEn:
              "A visit to a traditional Appenzell alpine farm, a demonstration of artisanal local cheesemaking using methods passed down through generations.",
            descriptionEs:
              "Visita a una granja alpina tradicional del Appenzell, demostración de la elaboración artesanal del queso local según métodos transmitidos durante generaciones.",
            image: `${R2}/journeys/suisse-appenzell-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le village d'Appenzell et ses façades peintes",
            titleEn: "Appenzell village and its painted facades",
            titleEs: "El pueblo de Appenzell y sus fachadas pintadas",
            description:
              "Promenade dans le village d'Appenzell, aux façades de bois peintes de motifs floraux colorés, à la découverte de l'artisanat local de broderie encore pratiqué par quelques familles.",
            descriptionEn:
              "A stroll through Appenzell village, its wooden facades painted with colourful floral motifs, discovering the local embroidery craft still practised by a few families.",
            descriptionEs:
              "Paseo por el pueblo de Appenzell, de fachadas de madera pintadas con coloridos motivos florales, para descubrir la artesanía local de bordado todavía practicada por algunas familias.",
            image: `${R2}/journeys/suisse-appenzell-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "portugal",
    tour: {
      name: "Portugal : les Açores, São Miguel",
      nameEn: "Portugal: The Azores, São Miguel",
      nameEs: "Portugal: las Azores, São Miguel",
      slug: "portugal-acores-sao-miguel",
      image: `${R2}/tours/portugal-acores-sao-miguel.jpg`,
      images: `${R2}/trips/portugal-acores-gallery-1.jpg,${R2}/trips/portugal-acores-gallery-2.jpg,${R2}/trips/portugal-acores-gallery-3.jpg,${R2}/trips/portugal-acores-gallery-4.jpg,${R2}/trips/portugal-acores-gallery-5.jpg,${R2}/trips/portugal-acores-gallery-6.jpg`,
      tagline: "Un archipel volcanique perdu au milieu de l'Atlantique, où deux lacs de cratère aux couleurs opposées se touchent presque",
      taglineEn: "A volcanic archipelago lost in the middle of the Atlantic, where two crater lakes of opposing colours almost touch",
      taglineEs: "Un archipiélago volcánico perdido en pleno Atlántico, donde dos lagos de cráter de colores opuestos casi se tocan",
      description:
        "São Miguel, plus grande île de l'archipel portugais des Açores situé à plus de mille cinq cents kilomètres de Lisbonne en plein océan Atlantique, doit son surnom d'« île verte » à une végétation luxuriante nourrie par un climat océanique doux et des pluies fréquentes. Le site le plus emblématique de l'île, Sete Cidades, réunit dans un même cratère volcanique deux lacs aux couleurs opposées, l'un bleu et l'autre vert, séparés par un fin pont de terre selon une légende locale née des larmes d'une princesse et d'un berger séparés par un amour impossible.",
      descriptionEn:
        "São Miguel, the largest island of the Portuguese Azores archipelago located over fifteen hundred kilometres from Lisbon in the middle of the Atlantic Ocean, owes its nickname of \"green island\" to lush vegetation nourished by a mild oceanic climate and frequent rain. The island's most iconic site, Sete Cidades, brings together within a single volcanic crater two lakes of opposing colours, one blue and one green, separated by a thin land bridge, according to local legend born from the tears of a princess and a shepherd separated by an impossible love.",
      descriptionEs:
        "São Miguel, la isla más grande del archipiélago portugués de las Azores, situada a más de mil quinientos kilómetros de Lisboa en pleno océano Atlántico, debe su apodo de «isla verde» a una vegetación exuberante alimentada por un clima oceánico suave y lluvias frecuentes. El lugar más emblemático de la isla, Sete Cidades, reúne en un mismo cráter volcánico dos lagos de colores opuestos, uno azul y otro verde, separados por un fino puente de tierra según una leyenda local nacida de las lágrimas de una princesa y un pastor separados por un amor imposible.",
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
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 187,
    },
    sections: [
      {
        heading: "Sete Cidades, les lacs jumeaux",
        headingEn: "Sete Cidades, the Twin Lakes",
        headingEs: "Sete Cidades, los lagos gemelos",
        body:
          "Le cratère de Sete Cidades, formé par l'effondrement d'un volcan éteint il y a plusieurs milliers d'années, abrite deux lacs aux couleurs distinctes, Lagoa Azul et Lagoa Verde, dont la teinte différente s'explique scientifiquement par la profondeur variable des bassins et la réflexion différente de la lumière, mais que la légende locale attribue aux larmes bleues d'une princesse et aux yeux verts d'un berger séparés par un amour impossible. Le point de vue de Vista do Rei, aménagé au bord du cratère, offre l'un des panoramas les plus photographiés de tout l'archipel des Açores.",
        bodyEn:
          "The Sete Cidades crater, formed by the collapse of an extinct volcano several thousand years ago, holds two lakes of distinct colours, Lagoa Azul and Lagoa Verde, whose different hues are scientifically explained by the varying depth of the basins and different light reflection, but which local legend attributes to the blue tears of a princess and the green eyes of a shepherd separated by an impossible love. The Vista do Rei viewpoint, built on the crater's edge, offers one of the most photographed panoramas in the entire Azores archipelago.",
        bodyEs:
          "El cráter de Sete Cidades, formado por el hundimiento de un volcán extinto hace varios miles de años, alberga dos lagos de colores distintos, Lagoa Azul y Lagoa Verde, cuya diferencia de tono se explica científicamente por la profundidad variable de las cuencas y el distinto reflejo de la luz, pero que la leyenda local atribuye a las lágrimas azules de una princesa y los ojos verdes de un pastor separados por un amor imposible. El mirador de Vista do Rei, habilitado al borde del cráter, ofrece uno de los panoramas más fotografiados de todo el archipiélago de las Azores.",
      },
      {
        heading: "Une île volcanique aux sources chaudes naturelles",
        headingEn: "A Volcanic Island with Natural Hot Springs",
        headingEs: "Una isla volcánica de fuentes termales naturales",
        body:
          "São Miguel conserve une activité géothermique résiduelle perceptible dans la région de Furnas, où des sources chaudes naturelles et des fumerolles alimentent des bassins de baignade en plein air ainsi qu'une tradition culinaire unique : le cozido das Furnas, ragoût traditionnel cuit pendant plusieurs heures directement dans le sol volcanique chauffé, une méthode de cuisson qui exploite la chaleur souterraine plutôt qu'une source de feu classique. La lagune de Fogo, autre cratère volcanique de l'île, complète cet ensemble de paysages façonnés par un volcanisme actif depuis la formation de l'archipel.",
        bodyEn:
          "São Miguel retains residual geothermal activity perceptible in the Furnas region, where natural hot springs and fumaroles feed open-air bathing pools as well as a unique culinary tradition: cozido das Furnas, a traditional stew cooked for several hours directly in the heated volcanic soil, a cooking method that harnesses underground heat rather than a conventional fire source. Fogo Lagoon, another of the island's volcanic craters, rounds out this ensemble of landscapes shaped by volcanism active since the archipelago's formation.",
        bodyEs:
          "São Miguel conserva una actividad geotérmica residual perceptible en la región de Furnas, donde fuentes termales naturales y fumarolas alimentan piscinas de baño al aire libre, así como una tradición culinaria única: el cozido das Furnas, guiso tradicional cocinado durante varias horas directamente en el suelo volcánico calentado, método de cocción que aprovecha el calor subterráneo en lugar de una fuente de fuego convencional. La laguna de Fogo, otro cráter volcánico de la isla, completa este conjunto de paisajes moldeados por un vulcanismo activo desde la formación del archipiélago.",
      },
    ],
    hotels: [
      {
        name: "Lodge en surplomb du cratère de Sete Cidades",
        nameEn: "A Lodge Overlooking the Sete Cidades Crater",
        nameEs: "Lodge con vistas al cráter de Sete Cidades",
        description:
          "Un lodge en surplomb du cratère de Sete Cidades, chambres avec vue sur les deux lacs jumeaux, jardin planté d'hortensias typiques de l'île.",
        descriptionEn:
          "A lodge overlooking the Sete Cidades crater, rooms overlooking the twin lakes, a garden planted with the hydrangeas typical of the island.",
        descriptionEs:
          "Un lodge con vistas al cráter de Sete Cidades, habitaciones con vistas a los lagos gemelos, jardín plantado con las hortensias típicas de la isla.",
        image: `${R2}/trips/portugal-acores-hotel-1.jpg`,
      },
      {
        name: "Maison d'hôtes thermale à Furnas",
        nameEn: "A Thermal Guesthouse in Furnas",
        nameEs: "Casa de huéspedes termal en Furnas",
        description:
          "Une maison d'hôtes dans le village thermal de Furnas, piscine alimentée par les sources chaudes naturelles de la région, à distance de marche des fumerolles volcaniques.",
        descriptionEn:
          "A guesthouse in the thermal village of Furnas, a pool fed by the region's natural hot springs, within walking distance of the volcanic fumaroles.",
        descriptionEs:
          "Una casa de huéspedes en el pueblo termal de Furnas, piscina alimentada por las fuentes termales naturales de la región, a poca distancia a pie de las fumarolas volcánicas.",
        image: `${R2}/trips/portugal-acores-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "croatie",
    tour: {
      name: "Croatie : l'Istrie, Rovinj",
      nameEn: "Croatia: Istria, Rovinj",
      nameEs: "Croacia: Istria, Rovinj",
      slug: "croatie-istrie-rovinj",
      image: `${R2}/tours/croatie-istrie-rovinj.jpg`,
      images: `${R2}/trips/croatie-istrie-gallery-1.jpg,${R2}/trips/croatie-istrie-gallery-2.jpg,${R2}/trips/croatie-istrie-gallery-3.jpg,${R2}/trips/croatie-istrie-gallery-4.jpg,${R2}/trips/croatie-istrie-gallery-5.jpg,${R2}/trips/croatie-istrie-gallery-6.jpg`,
      tagline: "Une cité vénitienne posée sur une presqu'île, au cœur d'une région surnommée la « nouvelle Toscane » pour ses truffes et ses vignobles",
      taglineEn: "A Venetian town perched on a peninsula, at the heart of a region nicknamed the \"new Tuscany\" for its truffles and vineyards",
      taglineEs: "Una ciudad veneciana posada sobre una península, en el corazón de una región apodada la «nueva Toscana» por sus trufas y viñedos",
      description:
        "Rovinj, ancienne cité vénitienne bâtie sur une presqu'île du littoral istrien, conserve un centre historique aux ruelles pavées et aux façades colorées héritées de plusieurs siècles de domination de la République de Venise, dominé par le campanile de l'église Sainte-Euphémie visible depuis toute la baie. L'arrière-pays istrien, surnommé la « nouvelle Toscane » pour ses collines couvertes de vignobles et d'oliviers, abrite l'une des principales régions productrices de truffes blanches d'Europe, récoltées en forêt à l'aide de chiens dressés selon une tradition transmise de génération en génération.",
      descriptionEn:
        "Rovinj, a former Venetian town built on a peninsula on the Istrian coast, retains a historic centre of cobbled lanes and colourful facades inherited from several centuries of rule by the Republic of Venice, dominated by the bell tower of St Euphemia's Church visible from across the bay. The Istrian hinterland, nicknamed the \"new Tuscany\" for its hills covered in vineyards and olive groves, is home to one of Europe's main white truffle-producing regions, harvested in forests using dogs trained according to a tradition passed down through generations.",
      descriptionEs:
        "Rovinj, antigua ciudad veneciana construida sobre una península de la costa de Istria, conserva un centro histórico de callejuelas empedradas y fachadas coloridas heredadas de varios siglos de dominio de la República de Venecia, dominado por el campanario de la iglesia de Santa Eufemia visible desde toda la bahía. El interior de Istria, apodado la «nueva Toscana» por sus colinas cubiertas de viñedos y olivos, alberga una de las principales regiones productoras de trufas blancas de Europa, recolectadas en el bosque con perros adiestrados según una tradición transmitida de generación en generación.",
      price: 2000,
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
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 189,
    },
    sections: [
      {
        heading: "Rovinj, la Venise de l'Istrie",
        headingEn: "Rovinj, the Venice of Istria",
        headingEs: "Rovinj, la Venecia de Istria",
        body:
          "Rovinj, sous domination vénitienne de 1283 à 1797, conserve un centre historique bâti sur une ancienne île rattachée au continent au XVIIIe siècle par le comblement du bras de mer qui la séparait, un urbanisme dense de ruelles étroites et pavées héritées directement de l'architecture vénitienne. Le campanile de l'église Sainte-Euphémie, construit au XVIIIe siècle sur le modèle du campanile de Saint-Marc à Venise, culmine à plus de soixante mètres et reste visible depuis l'ensemble de la baie, servant historiquement de repère aux marins de la région.",
        bodyEn:
          "Rovinj, under Venetian rule from 1283 to 1797, retains a historic centre built on a former island connected to the mainland in the 18th century by filling in the strait that separated it, a dense urban layout of narrow, cobbled lanes directly inherited from Venetian architecture. The bell tower of St Euphemia's Church, built in the 18th century modelled on St Mark's Campanile in Venice, rises over sixty metres and remains visible from across the bay, historically serving as a landmark for local sailors.",
        bodyEs:
          "Rovinj, bajo dominio veneciano de 1283 a 1797, conserva un centro histórico construido sobre una antigua isla unida al continente en el siglo XVIII al rellenar el brazo de mar que la separaba, un urbanismo denso de calles estrechas y empedradas heredadas directamente de la arquitectura veneciana. El campanario de la iglesia de Santa Eufemia, construido en el siglo XVIII a imagen del campanario de San Marcos en Venecia, se eleva más de sesenta metros y sigue siendo visible desde toda la bahía, sirviendo históricamente de referencia a los marineros de la región.",
      },
      {
        heading: "L'Istrie, la nouvelle Toscane et ses truffes",
        headingEn: "Istria, the New Tuscany and its Truffles",
        headingEs: "Istria, la nueva Toscana y sus trufas",
        body:
          "L'arrière-pays istrien, surnommé la « nouvelle Toscane » pour ses collines couvertes de vignobles, d'oliveraies et de villages médiévaux perchés, abrite dans la forêt de Motovun l'une des principales régions productrices de truffes blanches d'Europe, dont la récolte se pratique traditionnellement à l'aube à l'aide de chiens dressés capables de détecter le précieux champignon souterrain. Cette tradition truffière, transmise de génération en génération au sein de familles locales, a contribué à faire de la gastronomie istrienne, mêlant influences italiennes et slaves, l'une des plus réputées de toute la Croatie.",
        bodyEn:
          "The Istrian hinterland, nicknamed the \"new Tuscany\" for its hills covered in vineyards, olive groves, and perched medieval villages, holds in the Motovun forest one of Europe's main white truffle-producing regions, traditionally harvested at dawn using trained dogs capable of detecting the precious underground fungus. This truffle-hunting tradition, passed down through generations within local families, has helped make Istrian cuisine, blending Italian and Slavic influences, one of the most renowned in all of Croatia.",
        bodyEs:
          "El interior de Istria, apodado la «nueva Toscana» por sus colinas cubiertas de viñedos, olivares y pueblos medievales encaramados, alberga en el bosque de Motovun una de las principales regiones productoras de trufas blancas de Europa, cuya recolección se practica tradicionalmente al amanecer con perros adiestrados capaces de detectar el preciado hongo subterráneo. Esta tradición trufera, transmitida de generación en generación dentro de las familias locales, ha contribuido a convertir la gastronomía de Istria, que mezcla influencias italianas y eslavas, en una de las más reputadas de toda Croacia.",
      },
    ],
    hotels: [
      {
        name: "Maison vénitienne rénovée du centre historique",
        nameEn: "A Renovated Venetian House in the Historic Centre",
        nameEs: "Casa veneciana renovada del centro histórico",
        description:
          "Une maison vénitienne rénovée dans les ruelles pavées de Rovinj, chambres avec vue sur la baie, à distance de marche du campanile de Sainte-Euphémie.",
        descriptionEn:
          "A renovated Venetian house in Rovinj's cobbled lanes, rooms overlooking the bay, within walking distance of St Euphemia's bell tower.",
        descriptionEs:
          "Una casa veneciana renovada en las callejuelas empedradas de Rovinj, habitaciones con vistas a la bahía, a poca distancia a pie del campanario de Santa Eufemia.",
        image: `${R2}/trips/croatie-istrie-hotel-1.jpg`,
      },
      {
        name: "Villa de charme au milieu des vignobles",
        nameEn: "A Charming Villa Amid the Vineyards",
        nameEs: "Villa con encanto entre viñedos",
        description:
          "Une villa de charme au cœur de l'arrière-pays istrien, entourée de vignobles et d'oliveraies, à courte distance de la forêt de Motovun réputée pour ses truffes blanches.",
        descriptionEn:
          "A charming villa at the heart of the Istrian hinterland, surrounded by vineyards and olive groves, a short distance from the Motovun forest renowned for its white truffles.",
        descriptionEs:
          "Una villa con encanto en el corazón del interior de Istria, rodeada de viñedos y olivares, a poca distancia del bosque de Motovun célebre por sus trufas blancas.",
        image: `${R2}/trips/croatie-istrie-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "suisse",
    tour: {
      name: "Suisse : Interlaken et la Jungfrau",
      nameEn: "Switzerland: Interlaken and the Jungfrau",
      nameEs: "Suiza: Interlaken y la Jungfrau",
      slug: "suisse-interlaken-jungfrau",
      image: `${R2}/tours/suisse-interlaken-jungfrau.jpg`,
      images: `${R2}/trips/suisse-interlaken-gallery-1.jpg,${R2}/trips/suisse-interlaken-gallery-2.jpg,${R2}/trips/suisse-interlaken-gallery-3.jpg,${R2}/trips/suisse-interlaken-gallery-4.jpg,${R2}/trips/suisse-interlaken-gallery-5.jpg,${R2}/trips/suisse-interlaken-gallery-6.jpg`,
      tagline: "Une ville nichée entre deux lacs turquoise, porte d'entrée vers la gare ferroviaire la plus haute d'Europe",
      taglineEn: "A town nestled between two turquoise lakes, gateway to the highest railway station in Europe",
      taglineEs: "Una ciudad enclavada entre dos lagos turquesa, puerta de entrada a la estación de ferrocarril más alta de Europa",
      description:
        "Interlaken, dont le nom signifie littéralement « entre les lacs » en référence à sa position entre le lac de Thoune et le lac de Brienz aux eaux turquoise d'origine glaciaire, sert de porte d'entrée à la région de la Jungfrau, où un train à crémaillère achevé en 1912 après seize ans de travaux grimpe jusqu'à la gare ferroviaire la plus haute d'Europe, à plus de trois mille quatre cents mètres d'altitude, offrant un accès direct au glacier d'Aletsch, plus grand glacier des Alpes classé à l'UNESCO.",
      descriptionEn:
        "Interlaken, whose name literally means \"between the lakes\" in reference to its position between Lake Thun and Lake Brienz, both turquoise-hued glacial lakes, serves as the gateway to the Jungfrau region, where a rack railway completed in 1912 after sixteen years of construction climbs to the highest railway station in Europe, over three thousand four hundred metres up, offering direct access to the Aletsch Glacier, the largest glacier in the Alps and UNESCO-listed.",
      descriptionEs:
        "Interlaken, cuyo nombre significa literalmente «entre los lagos» en referencia a su posición entre el lago Thun y el lago Brienz, de aguas turquesas de origen glaciar, sirve de puerta de entrada a la región de la Jungfrau, donde un tren de cremallera terminado en 1912 tras dieciséis años de obras sube hasta la estación de ferrocarril más alta de Europa, a más de tres mil cuatrocientos metros de altitud, ofreciendo acceso directo al glaciar de Aletsch, el mayor glaciar de los Alpes, declarado por la UNESCO.",
      price: 3300,
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
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 191,
    },
    sections: [
      {
        heading: "Le Jungfraujoch, le toit de l'Europe",
        headingEn: "The Jungfraujoch, the Roof of Europe",
        headingEs: "El Jungfraujoch, el techo de Europa",
        body:
          "Le Jungfraujoch, surnommé le « toit de l'Europe », abrite depuis 1912 la gare ferroviaire la plus haute du continent à plus de trois mille quatre cents mètres d'altitude, achevée après seize années de travaux de percement à travers la roche des sommets de l'Eiger et du Mönch. Ce chantier titanesque, réalisé sans les moyens mécaniques modernes, offre aujourd'hui un accès direct au glacier d'Aletsch, plus grand glacier des Alpes avec ses vingt-trois kilomètres de longueur, classé au patrimoine naturel mondial de l'UNESCO.",
        bodyEn:
          "The Jungfraujoch, nicknamed the \"roof of Europe,\" has held since 1912 the continent's highest railway station at over three thousand four hundred metres, completed after sixteen years of tunnelling through the rock of the Eiger and Mönch summits. This titanic project, carried out without modern mechanical means, now offers direct access to the Aletsch Glacier, the largest glacier in the Alps at twenty-three kilometres long, listed as UNESCO World Natural Heritage.",
        bodyEs:
          "El Jungfraujoch, apodado el «techo de Europa», alberga desde 1912 la estación de ferrocarril más alta del continente a más de tres mil cuatrocientos metros de altitud, terminada tras dieciséis años de trabajos de perforación a través de la roca de las cumbres del Eiger y el Mönch. Esta titánica obra, realizada sin los medios mecánicos modernos, ofrece hoy acceso directo al glaciar de Aletsch, el mayor glaciar de los Alpes con sus veintitrés kilómetros de longitud, declarado Patrimonio Natural Mundial por la UNESCO.",
      },
      {
        heading: "Entre deux lacs turquoise",
        headingEn: "Between Two Turquoise Lakes",
        headingEs: "Entre dos lagos turquesa",
        body:
          "Interlaken doit son nom et sa position stratégique à sa situation entre le lac de Thoune et le lac de Brienz, deux étendues d'eau glaciaire dont la couleur turquoise distinctive provient de fines particules de roche broyée par les glaciers environnants, en suspension dans l'eau et appelées farine de roche. Cette position centrale fit historiquement de la ville un carrefour commercial dès le Moyen Âge, avant de devenir au XIXe siècle l'une des premières destinations du tourisme alpin naissant, popularisée notamment par les récits de voyage de nombreux écrivains romantiques européens.",
        bodyEn:
          "Interlaken owes its name and strategic position to its location between Lake Thun and Lake Brienz, two glacial bodies of water whose distinctive turquoise colour comes from fine rock particles ground by the surrounding glaciers, suspended in the water and called rock flour. This central position historically made the town a commercial crossroads as early as the Middle Ages, before becoming in the 19th century one of the first destinations of the nascent alpine tourism industry, popularised in particular by the travel writings of numerous European Romantic writers.",
        bodyEs:
          "Interlaken debe su nombre y su posición estratégica a su ubicación entre el lago Thun y el lago Brienz, dos masas de agua glaciar cuyo distintivo color turquesa procede de finas partículas de roca molida por los glaciares circundantes, en suspensión en el agua y llamadas harina de roca. Esta posición central convirtió históricamente a la ciudad en un cruce de caminos comercial ya en la Edad Media, antes de convertirse en el siglo XIX en uno de los primeros destinos del incipiente turismo alpino, popularizado en particular por los relatos de viaje de numerosos escritores románticos europeos.",
      },
    ],
    hotels: [
      {
        name: "Chalet en surplomb du lac de Brienz",
        nameEn: "A Chalet Overlooking Lake Brienz",
        nameEs: "Chalet con vistas al lago Brienz",
        description:
          "Un chalet traditionnel en surplomb du lac de Brienz, chambres avec vue sur les eaux turquoise et les sommets environnants, à courte distance du départ du train vers le Jungfraujoch.",
        descriptionEn:
          "A traditional chalet overlooking Lake Brienz, rooms overlooking the turquoise waters and the surrounding peaks, a short distance from the train departure point to the Jungfraujoch.",
        descriptionEs:
          "Un chalet tradicional con vistas al lago Brienz, habitaciones con vistas a las aguas turquesas y las cumbres circundantes, a poca distancia del punto de salida del tren hacia el Jungfraujoch.",
        image: `${R2}/trips/suisse-interlaken-hotel-1.jpg`,
      },
      {
        name: "Hôtel de montagne au cœur d'Interlaken",
        nameEn: "A Mountain Hotel at the Heart of Interlaken",
        nameEs: "Hotel de montaña en el corazón de Interlaken",
        description:
          "Un hôtel de montagne au cœur d'Interlaken, chambres avec vue sur l'Eiger, le Mönch et la Jungfrau, à distance de marche des rives des deux lacs.",
        descriptionEn:
          "A mountain hotel at the heart of Interlaken, rooms overlooking the Eiger, Mönch, and Jungfrau, within walking distance of both lakeshores.",
        descriptionEs:
          "Un hotel de montaña en el corazón de Interlaken, habitaciones con vistas al Eiger, el Mönch y la Jungfrau, a poca distancia a pie de las orillas de ambos lagos.",
        image: `${R2}/trips/suisse-interlaken-hotel-2.jpg`,
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
