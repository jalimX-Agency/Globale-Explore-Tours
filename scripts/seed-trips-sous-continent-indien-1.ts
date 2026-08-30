// Sous-continent Indien batch 1 (full region) — Inde, Sri Lanka, Bhoutan, Népal. New trips
// bringing each destination to at least 3, styled on Black Tomato's real structure (a short
// number of named-hotel chapters, not an exhaustive day-by-day grind) rather than copying
// their text. This completes all 4 destinations in the Sous-continent Indien region. Run with:
//   npx tsx scripts/seed-trips-sous-continent-indien-1.ts
// Requires scripts/upload-images-sous-continent-indien-1.ts to have been run first (this script
// refuses to write anything if a referenced image isn't already live in R2 — see
// seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "inde",
    tour: {
      name: "Inde : Varanasi et le désert du Thar",
      nameEn: "India: Varanasi and the Thar Desert",
      nameEs: "India: Varanasi y el desierto del Thar",
      slug: "inde-varanasi-thar",
      image: `${R2}/journeys/inde-varanasi-thar-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La ville la plus sacrée de l'hindouisme sur les rives du Gange, puis une nuit sous les étoiles au milieu des dunes",
      taglineEn: "Hinduism's holiest city on the banks of the Ganges, then a night under the stars amid the dunes",
      taglineEs: "La ciudad más sagrada del hinduismo a orillas del Ganges, y después una noche bajo las estrellas en medio de las dunas",
      description:
        "Un voyage entre deux Indes aux antipodes l'une de l'autre : Varanasi, l'une des plus anciennes villes continuellement habitées au monde et lieu le plus sacré de l'hindouisme, où les rituels funéraires et les cérémonies quotidiennes se déroulent sur les ghats au bord du Gange, puis Jaisalmer et le désert du Thar, dont la citadelle de grès doré émerge des dunes comme un mirage avant une nuit de bivouac sous un ciel saharien.",
      descriptionEn:
        "A journey between two opposite Indias: Varanasi, one of the world's oldest continuously inhabited cities and Hinduism's holiest site, where funeral rituals and daily ceremonies unfold on the ghats along the Ganges, then Jaisalmer and the Thar Desert, whose golden sandstone citadel rises from the dunes like a mirage before a night camped under a Saharan-like sky.",
      descriptionEs:
        "Un viaje entre dos Indias completamente opuestas: Varanasi, una de las ciudades habitadas de forma continua más antiguas del mundo y el lugar más sagrado del hinduismo, donde los rituales funerarios y las ceremonias cotidianas se desarrollan en los ghats a orillas del Ganges, y después Jaisalmer y el desierto del Thar, cuya ciudadela de arenisca dorada emerge de las dunas como un espejismo antes de una noche de vivac bajo un cielo casi sahariano.",
      price: 3100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Oct à mars",
      whenLabelEn: "Oct to March",
      whenLabelEs: "Oct a marzo",
      bestMonths: "october,november,december,january,february,march",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 82,
    },
    chapters: [
      {
        title: "Varanasi et les ghats du Gange",
        titleEn: "Varanasi and the Ganges Ghats",
        titleEs: "Varanasi y los ghats del Ganges",
        intro:
          "Premier chapitre à Varanasi, ville sacrée où l'hindouisme situe le passage le plus direct vers la libération de l'âme, ce qui explique l'afflux constant de pèlerins venus se baigner dans les eaux du Gange ou y accompagner leurs défunts. Les quelque quatre-vingts ghats, escaliers de pierre descendant vers le fleuve, s'animent dès l'aube de rituels ancestraux, tandis que la cérémonie du soir de l'aarti, offrande de lumière au fleuve sacré, rassemble chaque jour des centaines de fidèles.",
        introEn:
          "The first chapter unfolds in Varanasi, a sacred city where Hinduism situates the most direct path to the soul's liberation, explaining the constant flow of pilgrims coming to bathe in the Ganges or accompany their dead there. The roughly eighty ghats, stone steps descending to the river, come alive with ancestral rituals from dawn, while the evening aarti ceremony, an offering of light to the sacred river, gathers hundreds of worshippers every day.",
        introEs:
          "El primer capítulo se desarrolla en Varanasi, ciudad sagrada donde el hinduismo sitúa el camino más directo hacia la liberación del alma, lo que explica la afluencia constante de peregrinos que acuden a bañarse en las aguas del Ganges o a acompañar allí a sus difuntos. Los aproximadamente ochenta ghats, escalinatas de piedra que descienden hacia el río, se animan desde el amanecer con rituales ancestrales, mientras que la ceremonia vespertina del aarti, una ofrenda de luz al río sagrado, reúne cada día a cientos de fieles.",
        galleryImages: `${R2}/journeys/inde-varanasi-gallery1.jpg,${R2}/journeys/inde-varanasi-gallery2.jpg,${R2}/journeys/inde-varanasi-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Croisière à l'aube sur le Gange",
            titleEn: "A dawn cruise on the Ganges",
            titleEs: "Crucero al amanecer por el Ganges",
            description:
              "Sortie en bateau sur le Gange dès le lever du soleil, moment le plus intense pour observer les rituels matinaux depuis l'eau, avant une marche à travers les ruelles étroites de la vieille ville.",
            descriptionEn:
              "A boat outing on the Ganges at sunrise, the most intense moment to observe the morning rituals from the water, before a walk through the old town's narrow lanes.",
            descriptionEs:
              "Salida en barco por el Ganges al amanecer, el momento más intenso para observar los rituales matutinos desde el agua, antes de una caminata por las estrechas callejuelas del casco antiguo.",
            image: `${R2}/journeys/inde-varanasi-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La cérémonie de l'aarti au coucher du soleil",
            titleEn: "The evening aarti ceremony",
            titleEs: "La ceremonia del aarti al atardecer",
            description:
              "Journée libre pour explorer les temples de la ville, puis assistance à la cérémonie de l'aarti au crépuscule sur le ghat principal, offrande rituelle de lumière et de chants au fleuve sacré.",
            descriptionEn:
              "A free day to explore the city's temples, then attendance at the aarti ceremony at dusk on the main ghat, a ritual offering of light and chanting to the sacred river.",
            descriptionEs:
              "Día libre para explorar los templos de la ciudad, y asistencia a la ceremonia del aarti al anochecer en el ghat principal, ofrenda ritual de luz y cantos al río sagrado.",
            image: `${R2}/journeys/inde-varanasi-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Jaisalmer et le désert du Thar",
        titleEn: "Jaisalmer and the Thar Desert",
        titleEs: "Jaisalmer y el desierto del Thar",
        intro:
          "Vol vers Jaisalmer, surnommée la « cité dorée » pour les remparts de grès qui prennent une teinte miel au coucher du soleil, seule forteresse habitée d'Inde où vivent encore plusieurs milliers de personnes à l'intérieur même de ses murs. Les dunes de Sam, à une heure de route, offrent le décor d'une nuit de bivouac sous tente traditionnelle, loin de toute pollution lumineuse, dans le désert du Thar qui s'étend jusqu'à la frontière pakistanaise.",
        introEn:
          "A flight to Jaisalmer, nicknamed the \"Golden City\" for its sandstone ramparts that turn honey-coloured at sunset, India's only inhabited fort, still home to several thousand people within its very walls. The Sam dunes, an hour's drive away, provide the setting for a night camped under a traditional tent, far from any light pollution, in the Thar Desert stretching to the Pakistani border.",
        introEs:
          "Vuelo hacia Jaisalmer, apodada la «ciudad dorada» por sus murallas de arenisca que adquieren un tono miel al atardecer, el único fuerte habitado de India, donde todavía viven varios miles de personas dentro de sus propios muros. Las dunas de Sam, a una hora en coche, ofrecen el escenario de una noche de vivac bajo tienda tradicional, lejos de toda contaminación lumínica, en el desierto del Thar que se extiende hasta la frontera pakistaní.",
        galleryImages: `${R2}/journeys/inde-thar-gallery1.jpg,${R2}/journeys/inde-thar-gallery2.jpg,${R2}/journeys/inde-thar-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "La cité dorée et son fort habité",
            titleEn: "The Golden City and its inhabited fort",
            titleEs: "La ciudad dorada y su fuerte habitado",
            description:
              "Visite du fort de Jaisalmer, seule forteresse habitée d'Inde, et de ses havelis richement sculptées, anciennes demeures de marchands qui prospéraient sur les routes caravanières du désert.",
            descriptionEn:
              "A visit to Jaisalmer Fort, India's only inhabited fortress, and its richly carved havelis, former merchant mansions that thrived on the desert's caravan routes.",
            descriptionEs:
              "Visita al fuerte de Jaisalmer, único fuerte habitado de India, y a sus havelis ricamente esculpidas, antiguas mansiones de comerciantes que prosperaron en las rutas caravaneras del desierto.",
            image: `${R2}/journeys/inde-thar-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Coucher de soleil et bivouac dans les dunes de Sam",
            titleEn: "Sunset and a bivouac in the Sam dunes",
            titleEs: "Atardecer y vivac en las dunas de Sam",
            description:
              "Excursion à dos de dromadaire jusqu'aux dunes de Sam pour le coucher de soleil, puis nuit sous tente traditionnelle avec dîner et musique folklorique rajasthanie autour d'un feu de camp.",
            descriptionEn:
              "A camel excursion to the Sam dunes for sunset, then a night under a traditional tent with dinner and Rajasthani folk music around a campfire.",
            descriptionEs:
              "Excursión en dromedario hasta las dunas de Sam para el atardecer, y noche bajo tienda tradicional con cena y música folclórica rajastaní alrededor de una hoguera.",
            image: `${R2}/journeys/inde-thar-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "sri-lanka",
    tour: {
      name: "Sri Lanka : Yala et Arugam Bay",
      nameEn: "Sri Lanka: Yala and Arugam Bay",
      nameEs: "Sri Lanka: Yala y Arugam Bay",
      slug: "sri-lanka-yala-arugambay",
      image: `${R2}/journeys/sri-lanka-yala-arugambay-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La plus forte densité de léopards au monde, puis des vagues parmi les plus longues d'Asie sur la côte est",
      taglineEn: "The highest density of leopards in the world, then some of Asia's longest waves on the east coast",
      taglineEs: "La mayor densidad de leopardos del mundo, y después algunas de las olas más largas de Asia en la costa este",
      description:
        "Un voyage entre deux facettes sauvages du Sri Lanka : le parc national de Yala, qui revendique la plus forte densité de léopards au monde grâce à l'absence de grands prédateurs concurrents, puis Arugam Bay, village de surf de la côte est dont la vague droite, longue de plusieurs centaines de mètres, attire des surfeurs du monde entier depuis les années 1970.",
      descriptionEn:
        "A journey between two wild sides of Sri Lanka: Yala National Park, which claims the highest density of leopards in the world thanks to the absence of competing large predators, then Arugam Bay, an east-coast surf village whose right-hand wave, several hundred metres long, has drawn surfers from around the world since the 1970s.",
      descriptionEs:
        "Un viaje entre dos caras salvajes de Sri Lanka: el parque nacional de Yala, que reivindica la mayor densidad de leopardos del mundo gracias a la ausencia de grandes depredadores competidores, y después Arugam Bay, pueblo de surf de la costa este cuya ola derecha, de varios cientos de metros de longitud, atrae a surfistas de todo el mundo desde la década de 1970.",
      price: 2600,
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
      order: 83,
    },
    chapters: [
      {
        title: "Le parc national de Yala",
        titleEn: "Yala National Park",
        titleEs: "El parque nacional de Yala",
        intro:
          "Premier chapitre à Yala, parc national le plus visité du Sri Lanka mais aussi celui qui revendique la plus forte densité de léopards au monde, estimée à un individu pour à peine cinq kilomètres carrés dans certaines zones. L'absence de tigres ou d'autres grands félins concurrents sur l'île a permis au léopard de Sri Lanka, sous-espèce endémique, de s'imposer comme prédateur dominant sans nécessité de dissimulation excessive, rendant les observations diurnes plus fréquentes qu'ailleurs en Asie.",
        introEn:
          "The first chapter unfolds at Yala, Sri Lanka's most visited national park but also the one claiming the highest density of leopards in the world, estimated at one individual per barely five square kilometres in some areas. The absence of tigers or other competing big cats on the island has allowed the Sri Lankan leopard, an endemic subspecies, to establish itself as the dominant predator without excessive need for concealment, making daytime sightings more frequent than elsewhere in Asia.",
        introEs:
          "El primer capítulo se desarrolla en Yala, el parque nacional más visitado de Sri Lanka pero también el que reivindica la mayor densidad de leopardos del mundo, estimada en un individuo por apenas cinco kilómetros cuadrados en algunas zonas. La ausencia de tigres u otros grandes felinos competidores en la isla ha permitido que el leopardo de Sri Lanka, subespecie endémica, se imponga como depredador dominante sin necesidad de ocultarse en exceso, lo que hace que los avistamientos diurnos sean más frecuentes que en otras partes de Asia.",
        galleryImages: `${R2}/journeys/sri-lanka-yala-gallery1.jpg,${R2}/journeys/sri-lanka-yala-gallery2.jpg,${R2}/journeys/sri-lanka-yala-gallery3.jpg`,
        mapMarkerX: 70,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Premier safari à la recherche des léopards",
            titleEn: "A first safari in search of leopards",
            titleEs: "Primer safari en busca de leopardos",
            description:
              "Safari en 4x4 dès l'aube dans le parc de Yala, à la recherche du léopard de Sri Lanka, aux côtés d'éléphants, de crocodiles marins et d'une avifaune abondante autour des lagunes du parc.",
            descriptionEn:
              "A 4x4 safari at dawn in Yala park, in search of the Sri Lankan leopard, alongside elephants, saltwater crocodiles, and abundant birdlife around the park's lagoons.",
            descriptionEs:
              "Safari en 4x4 al amanecer en el parque de Yala, en busca del leopardo de Sri Lanka, junto a elefantes, cocodrilos marinos y una abundante avifauna en torno a las lagunas del parque.",
            image: `${R2}/journeys/sri-lanka-yala-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Safari de l'après-midi et ruines côtières",
            titleEn: "An afternoon safari and coastal ruins",
            titleEs: "Safari de la tarde y ruinas costeras",
            description:
              "Second safari en fin de journée, moment propice à l'observation des ours paresseux, puis visite des vestiges du temple côtier de Sithulpahuwa, ancien monastère bouddhiste niché au cœur du parc.",
            descriptionEn:
              "A second safari at the end of the day, a favourable time to spot sloth bears, then a visit to the remains of the coastal Sithulpahuwa temple, an ancient Buddhist monastery nestled at the heart of the park.",
            descriptionEs:
              "Segundo safari al final del día, momento propicio para observar osos perezosos, y visita a los vestigios del templo costero de Sithulpahuwa, antiguo monasterio budista enclavado en pleno corazón del parque.",
            image: `${R2}/journeys/sri-lanka-yala-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Arugam Bay",
        titleEn: "Arugam Bay",
        titleEs: "Arugam Bay",
        intro:
          "Route vers Arugam Bay, sur la côte est de l'île, dont la vague droite de Main Point, longue de plusieurs centaines de mètres lorsque les conditions sont idéales, a fait la réputation internationale de ce village de pêcheurs depuis sa découverte par des surfeurs australiens dans les années 1970. La saison de mousson du sud-ouest, qui rend la côte ouest inutilisable, épargne la côte est et y garantit des conditions optimales entre mai et septembre.",
        introEn:
          "The road to Arugam Bay, on the island's east coast, whose Main Point right-hander, several hundred metres long under ideal conditions, has built this fishing village's international reputation since its discovery by Australian surfers in the 1970s. The southwest monsoon season, which makes the west coast unusable, spares the east coast and guarantees optimal conditions between May and September.",
        introEs:
          "Ruta hacia Arugam Bay, en la costa este de la isla, cuya ola derecha de Main Point, de varios cientos de metros en condiciones ideales, ha forjado la reputación internacional de este pueblo de pescadores desde su descubrimiento por surfistas australianos en la década de 1970. La temporada del monzón del suroeste, que deja inutilizable la costa oeste, respeta la costa este y garantiza condiciones óptimas entre mayo y septiembre.",
        galleryImages: `${R2}/journeys/sri-lanka-arugambay-gallery1.jpg,${R2}/journeys/sri-lanka-arugambay-gallery2.jpg,${R2}/journeys/sri-lanka-arugambay-gallery3.jpg`,
        mapMarkerX: 80,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Initiation au surf à Main Point",
            titleEn: "A surf lesson at Main Point",
            titleEs: "Iniciación al surf en Main Point",
            description:
              "Cours de surf avec un moniteur local sur les vagues plus douces de Baby Point, adaptées aux débutants, avant d'observer les surfeurs confirmés affronter la vague de Main Point en fin de journée.",
            descriptionEn:
              "A surf lesson with a local instructor on the gentler waves of Baby Point, suited to beginners, before watching experienced surfers tackle the Main Point wave at the end of the day.",
            descriptionEs:
              "Clase de surf con un monitor local en las olas más suaves de Baby Point, aptas para principiantes, antes de observar a los surfistas experimentados enfrentarse a la ola de Main Point al final del día.",
            image: `${R2}/journeys/sri-lanka-arugambay-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Lagune de Pottuvil et éléphants sauvages",
            titleEn: "Pottuvil Lagoon and wild elephants",
            titleEs: "Laguna de Pottuvil y elefantes salvajes",
            description:
              "Excursion en bateau sur la lagune de Pottuvil, à la recherche de crocodiles et d'une avifaune abondante, avec une chance d'apercevoir des éléphants sauvages venus s'abreuver en fin de journée.",
            descriptionEn:
              "A boat excursion on Pottuvil Lagoon, in search of crocodiles and abundant birdlife, with a chance to spot wild elephants coming to drink at the end of the day.",
            descriptionEs:
              "Excursión en barco por la laguna de Pottuvil, en busca de cocodrilos y una abundante avifauna, con posibilidad de avistar elefantes salvajes que acuden a beber al final del día.",
            image: `${R2}/journeys/sri-lanka-arugambay-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "bhoutan",
    tour: {
      name: "Bhoutan : la vallée de Haa et Gangtey",
      nameEn: "Bhutan: The Haa Valley and Gangtey",
      nameEs: "Bután: el valle de Haa y Gangtey",
      slug: "bhoutan-haa-gangtey",
      image: `${R2}/journeys/bhoutan-haa-gangtey-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une vallée fermée aux étrangers jusqu'en 2002, puis un sanctuaire de grues à cou noir dans une vallée glaciaire en forme de U",
      taglineEn: "A valley closed to foreigners until 2002, then a black-necked crane sanctuary in a U-shaped glacial valley",
      taglineEs: "Un valle cerrado a los extranjeros hasta 2002, y después un santuario de grullas de cuello negro en un valle glaciar en forma de U",
      description:
        "Un voyage entre deux vallées bhoutanaises restées longtemps à l'écart du tourisme : Haa, vallée frontalière avec le Tibet qui ne s'est ouverte aux visiteurs étrangers qu'en 2002 en raison de sa proximité stratégique avec la Chine, et Gangtey, dans la vallée glaciaire de Phobjikha, dont la forme en U caractéristique accueille chaque hiver des grues à cou noir venues du plateau tibétain, considérées comme sacrées par la tradition bouddhiste locale.",
      descriptionEn:
        "A journey between two Bhutanese valleys long kept off the tourist trail: Haa, a valley bordering Tibet that only opened to foreign visitors in 2002 due to its strategic proximity to China, and Gangtey, in the Phobjikha glacial valley, whose characteristic U-shape hosts black-necked cranes from the Tibetan plateau every winter, considered sacred by local Buddhist tradition.",
      descriptionEs:
        "Un viaje entre dos valles butaneses mantenidos durante mucho tiempo al margen del turismo: Haa, un valle fronterizo con el Tíbet que no se abrió a los visitantes extranjeros hasta 2002 debido a su cercanía estratégica con China, y Gangtey, en el valle glaciar de Phobjikha, cuya característica forma de U acoge cada invierno a grullas de cuello negro llegadas de la meseta tibetana, consideradas sagradas por la tradición budista local.",
      price: 4600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Nov à fév",
      whenLabelEn: "Nov to Feb",
      whenLabelEs: "Nov a feb",
      bestMonths: "november,december,january,february",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 84,
    },
    chapters: [
      {
        title: "La vallée de Haa",
        titleEn: "The Haa Valley",
        titleEs: "El valle de Haa",
        intro:
          "Premier chapitre dans la vallée de Haa, restée fermée aux étrangers jusqu'en 2002 en raison de sa position frontalière stratégique avec le Tibet chinois, ce qui en fait aujourd'hui l'une des régions les moins visitées du Bhoutan malgré sa proximité relative avec Paro. La vallée abrite les temples jumeaux de Lhakhang Karpo (le temple blanc) et Lhakhang Nagpo (le temple noir), ainsi qu'une tradition d'élevage de yaks encore pleinement vivante sur les hauteurs environnantes.",
        introEn:
          "The first chapter unfolds in the Haa Valley, kept closed to foreigners until 2002 due to its strategic border position with Chinese-controlled Tibet, making it today one of Bhutan's least-visited regions despite its relative proximity to Paro. The valley is home to the twin temples of Lhakhang Karpo (the White Temple) and Lhakhang Nagpo (the Black Temple), as well as a yak-herding tradition still fully alive in the surrounding highlands.",
        introEs:
          "El primer capítulo se desarrolla en el valle de Haa, que permaneció cerrado a los extranjeros hasta 2002 debido a su posición fronteriza estratégica con el Tíbet chino, lo que lo convierte hoy en una de las regiones menos visitadas de Bután pese a su relativa cercanía a Paro. El valle alberga los templos gemelos de Lhakhang Karpo (el templo blanco) y Lhakhang Nagpo (el templo negro), además de una tradición de cría de yaks todavía plenamente viva en las alturas circundantes.",
        galleryImages: `${R2}/journeys/bhoutan-haa-gallery1.jpg,${R2}/journeys/bhoutan-haa-gallery2.jpg,${R2}/journeys/bhoutan-haa-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Les temples jumeaux de Haa",
            titleEn: "The twin temples of Haa",
            titleEs: "Los templos gemelos de Haa",
            description:
              "Visite des temples jumeaux de Lhakhang Karpo et Lhakhang Nagpo, parmi les plus anciens de la vallée, puis promenade dans le village de Haa, dont l'architecture traditionnelle reste largement préservée.",
            descriptionEn:
              "A visit to the twin temples of Lhakhang Karpo and Lhakhang Nagpo, among the valley's oldest, then a walk through Haa village, whose traditional architecture remains largely preserved.",
            descriptionEs:
              "Visita a los templos gemelos de Lhakhang Karpo y Lhakhang Nagpo, entre los más antiguos del valle, y paseo por el pueblo de Haa, cuya arquitectura tradicional sigue en gran parte preservada.",
            image: `${R2}/journeys/bhoutan-haa-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée vers un campement de yaks",
            titleEn: "A hike to a yak herders' camp",
            titleEs: "Caminata hasta un campamento de yaks",
            description:
              "Randonnée sur les hauteurs de la vallée à la rencontre d'éleveurs semi-nomades de yaks, dégustation de fromage et de beurre de yak préparés selon des méthodes traditionnelles.",
            descriptionEn:
              "A hike into the valley's highlands to meet semi-nomadic yak herders, a tasting of yak cheese and butter prepared using traditional methods.",
            descriptionEs:
              "Caminata por las alturas del valle al encuentro de pastores seminómadas de yaks, degustación de queso y mantequilla de yak preparados según métodos tradicionales.",
            image: `${R2}/journeys/bhoutan-haa-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Gangtey et la vallée de Phobjikha",
        titleEn: "Gangtey and the Phobjikha Valley",
        titleEs: "Gangtey y el valle de Phobjikha",
        intro:
          "Route vers Gangtey, dans la vallée glaciaire de Phobjikha, dont la forme en U caractéristique et l'absence de lignes électriques enterrées volontairement préservent l'habitat naturel des grues à cou noir. Ces oiseaux migrateurs, considérés comme des incarnations sacrées dans la tradition bouddhiste locale, effectuent chaque année un vol rituel de trois tours au-dessus du monastère de Gangtey avant de se poser dans la vallée, un comportement qui a donné naissance à un festival annuel célébrant leur arrivée.",
        introEn:
          "The road to Gangtey, in the glacial Phobjikha Valley, whose characteristic U-shape and deliberately buried power lines preserve the natural habitat of the black-necked crane. These migratory birds, considered sacred incarnations in local Buddhist tradition, perform a ritual three-circle flight over Gangtey Monastery each year before landing in the valley, a behaviour that has given rise to an annual festival celebrating their arrival.",
        introEs:
          "Ruta hacia Gangtey, en el valle glaciar de Phobjikha, cuya característica forma de U y sus líneas eléctricas deliberadamente soterradas preservan el hábitat natural de la grulla de cuello negro. Estas aves migratorias, consideradas encarnaciones sagradas en la tradición budista local, realizan cada año un vuelo ritual de tres vueltas sobre el monasterio de Gangtey antes de posarse en el valle, un comportamiento que ha dado origen a un festival anual que celebra su llegada.",
        galleryImages: `${R2}/journeys/bhoutan-gangtey-gallery1.jpg,${R2}/journeys/bhoutan-gangtey-gallery2.jpg,${R2}/journeys/bhoutan-gangtey-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Le monastère de Gangtey",
            titleEn: "Gangtey Monastery",
            titleEs: "El monasterio de Gangtey",
            description:
              "Visite du monastère de Gangtey, perché sur une colline dominant toute la vallée de Phobjikha, puis randonnée le long du sentier de la nature qui traverse la vallée marécageuse.",
            descriptionEn:
              "A visit to Gangtey Monastery, perched on a hill overlooking the entire Phobjikha Valley, then a hike along the nature trail crossing the marshy valley floor.",
            descriptionEs:
              "Visita al monasterio de Gangtey, encaramado en una colina que domina todo el valle de Phobjikha, y caminata por el sendero natural que atraviesa el fondo pantanoso del valle.",
            image: `${R2}/journeys/bhoutan-gangtey-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "À la recherche des grues à cou noir",
            titleEn: "In search of the black-necked cranes",
            titleEs: "En busca de las grullas de cuello negro",
            description:
              "Visite du centre d'information sur les grues à cou noir, puis observation depuis des postes dédiés de ces oiseaux migrateurs venus hiverner dans la vallée depuis le plateau tibétain.",
            descriptionEn:
              "A visit to the black-necked crane information centre, then observation from dedicated hides of these migratory birds that come to winter in the valley from the Tibetan plateau.",
            descriptionEs:
              "Visita al centro de información sobre las grullas de cuello negro, y observación desde puestos dedicados de estas aves migratorias que acuden a invernar en el valle desde la meseta tibetana.",
            image: `${R2}/journeys/bhoutan-gangtey-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "nepal",
    tour: {
      name: "Népal : Bandipur et le Haut Mustang",
      nameEn: "Nepal: Bandipur and Upper Mustang",
      nameEs: "Nepal: Bandipur y el Alto Mustang",
      slug: "nepal-bandipur-mustang",
      image: `${R2}/journeys/nepal-bandipur-mustang-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une cité marchande newar figée sur sa crête, puis un royaume interdit ouvert au tourisme depuis seulement 1992",
      taglineEn: "A Newari trading town frozen on its ridge, then a forbidden kingdom opened to tourism only since 1992",
      taglineEs: "Una ciudad comercial newar detenida en su cresta, y después un reino prohibido abierto al turismo solo desde 1992",
      description:
        "Un voyage entre deux Népal rarement associés l'un à l'autre : Bandipur, ancienne cité marchande newar perchée sur une crête à mille cinq cents mètres, dont l'architecture intacte a longtemps profité de son isolement après la construction d'une route qui la contourna dans les années 1970, puis le Haut Mustang, ancien royaume himalayen resté fermé aux étrangers jusqu'en 1992 et dont le paysage désertique évoque davantage le plateau tibétain que le Népal des cartes postales.",
      descriptionEn:
        "A journey between two rarely associated Nepals: Bandipur, a former Newari trading town perched on a ridge at fifteen hundred metres, whose intact architecture long benefited from its isolation after a road bypassed it in the 1970s, then Upper Mustang, a former Himalayan kingdom kept closed to foreigners until 1992, whose desert landscape evokes the Tibetan plateau far more than postcard Nepal.",
      descriptionEs:
        "Un viaje entre dos Nepales rara vez asociados entre sí: Bandipur, antigua ciudad comercial newar encaramada en una cresta a mil quinientos metros, cuya arquitectura intacta se benefició durante mucho tiempo de su aislamiento tras la construcción de una carretera que la esquivó en la década de 1970, y después el Alto Mustang, antiguo reino himalayo que permaneció cerrado a los extranjeros hasta 1992 y cuyo paisaje desértico evoca mucho más la meseta tibetana que el Nepal de postal.",
      price: 3600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Mars à mai | Sept à nov",
      whenLabelEn: "March to May | Sept to Nov",
      whenLabelEs: "Marzo a mayo | sept a nov",
      bestMonths: "march,april,may,september,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 85,
    },
    chapters: [
      {
        title: "Bandipur, la cité newar figée dans le temps",
        titleEn: "Bandipur, the Newari Town Frozen in Time",
        titleEs: "Bandipur, la ciudad newar detenida en el tiempo",
        intro:
          "Premier chapitre à Bandipur, cité commerçante fondée par les marchands newars le long de l'ancienne route caravanière reliant l'Inde au Tibet, dont la prospérité s'effondra lorsqu'une route moderne construite dans les années 1970 la contourna, la figeant paradoxalement dans son architecture du XIXe siècle. La place principale, entièrement piétonne et pavée, s'anime encore chaque soir de marchands ambulants et d'habitants venus discuter sur les terrasses des maisons à colombages newars.",
        introEn:
          "The first chapter unfolds in Bandipur, a trading town founded by Newari merchants along the old caravan route linking India to Tibet, whose prosperity collapsed when a modern road built in the 1970s bypassed it, paradoxically freezing it in its 19th-century architecture. The main square, entirely pedestrian and paved, still comes alive every evening with street vendors and residents chatting on the terraces of half-timbered Newari houses.",
        introEs:
          "El primer capítulo se desarrolla en Bandipur, ciudad comercial fundada por mercaderes newars a lo largo de la antigua ruta caravanera que unía India con el Tíbet, cuya prosperidad se desplomó cuando una carretera moderna construida en la década de 1970 la esquivó, congelándola paradójicamente en su arquitectura del siglo XIX. La plaza principal, enteramente peatonal y empedrada, todavía se anima cada noche con vendedores ambulantes y vecinos que charlan en las terrazas de las casas newars de entramado de madera.",
        galleryImages: `${R2}/journeys/nepal-bandipur-gallery1.jpg,${R2}/journeys/nepal-bandipur-gallery2.jpg,${R2}/journeys/nepal-bandipur-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "La place principale et l'architecture newar",
            titleEn: "The main square and Newari architecture",
            titleEs: "La plaza principal y la arquitectura newar",
            description:
              "Promenade dans la place principale piétonne de Bandipur, bordée de maisons newars à colombages du XIXe siècle, puis visite d'un atelier familial de fabrication de fromage à l'ancienne.",
            descriptionEn:
              "A stroll through Bandipur's pedestrian main square, lined with 19th-century half-timbered Newari houses, then a visit to a family workshop making cheese the old-fashioned way.",
            descriptionEs:
              "Paseo por la plaza principal peatonal de Bandipur, bordeada de casas newars de entramado de madera del siglo XIX, y visita a un taller familiar de fabricación de queso a la manera tradicional.",
            image: `${R2}/journeys/nepal-bandipur-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La grotte de Siddha et vue sur l'Himalaya",
            titleEn: "Siddha Cave and Himalaya views",
            titleEs: "La cueva de Siddha y vistas al Himalaya",
            description:
              "Excursion à la grotte de Siddha, l'une des plus grandes du Népal, puis randonnée jusqu'à un point de vue offrant un panorama sur la chaîne himalayenne incluant l'Annapurna et le Manaslu.",
            descriptionEn:
              "An excursion to Siddha Cave, one of Nepal's largest, then a hike to a viewpoint offering a panorama over the Himalayan range including Annapurna and Manaslu.",
            descriptionEs:
              "Excursión a la cueva de Siddha, una de las más grandes de Nepal, y caminata hasta un mirador con panorama sobre la cadena del Himalaya, incluidos el Annapurna y el Manaslu.",
            image: `${R2}/journeys/nepal-bandipur-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le Haut Mustang, le royaume interdit",
        titleEn: "Upper Mustang, the Forbidden Kingdom",
        titleEs: "El Alto Mustang, el reino prohibido",
        intro:
          "Vol vers Jomsom puis route vers le Haut Mustang, ancien royaume himalayen resté fermé aux visiteurs étrangers jusqu'en 1992 en raison de sa position frontalière sensible avec le Tibet chinois, encore soumis à un permis spécial et à un quota de visiteurs. Le paysage désertique aux falaises érodées de couleurs ocre et rouge, ponctué de monastères bouddhistes tibétains et de grottes troglodytes vieilles de plusieurs siècles, contraste radicalement avec le Népal himalayen plus verdoyant traversé jusque-là.",
        introEn:
          "A flight to Jomsom then the road to Upper Mustang, a former Himalayan kingdom kept closed to foreign visitors until 1992 due to its sensitive border position with Chinese-controlled Tibet, still subject to a special permit and a visitor quota. The desert landscape of eroded ochre and red cliffs, dotted with Tibetan Buddhist monasteries and centuries-old cave dwellings, contrasts radically with the greener Himalayan Nepal crossed so far.",
        introEs:
          "Vuelo a Jomsom y ruta hacia el Alto Mustang, antiguo reino himalayo que permaneció cerrado a los visitantes extranjeros hasta 1992 debido a su sensible posición fronteriza con el Tíbet chino, todavía sujeto a un permiso especial y a un cupo de visitantes. El paisaje desértico de acantilados erosionados de tonos ocre y rojo, salpicado de monasterios budistas tibetanos y viviendas rupestres centenarias, contrasta radicalmente con el Nepal himalayo más verde recorrido hasta entonces.",
        galleryImages: `${R2}/journeys/nepal-mustang-gallery1.jpg,${R2}/journeys/nepal-mustang-gallery2.jpg,${R2}/journeys/nepal-mustang-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Route vers Lo Manthang, la capitale ceinte de murailles",
            titleEn: "The road to Lo Manthang, the walled capital",
            titleEs: "Ruta hacia Lo Manthang, la capital amurallada",
            description:
              "Route à travers le paysage désertique du Haut Mustang jusqu'à Lo Manthang, capitale historique du royaume encore ceinte de ses murailles d'origine, visite du palais royal et des monastères environnants.",
            descriptionEn:
              "A drive through the desert landscape of Upper Mustang to Lo Manthang, the kingdom's historic capital still ringed by its original walls, a visit to the royal palace and surrounding monasteries.",
            descriptionEs:
              "Ruta por el paisaje desértico del Alto Mustang hasta Lo Manthang, capital histórica del reino todavía rodeada de sus murallas originales, visita al palacio real y a los monasterios circundantes.",
            image: `${R2}/journeys/nepal-mustang-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les grottes troglodytes et les monastères peints",
            titleEn: "The cave dwellings and painted monasteries",
            titleEs: "Las viviendas rupestres y los monasterios pintados",
            description:
              "Visite des grottes troglodytes creusées dans les falaises érodées, dont l'usage originel reste débattu par les archéologues, puis d'un monastère peint de fresques bouddhistes tibétaines vieilles de plusieurs siècles, avant le retour vers Jomsom.",
            descriptionEn:
              "A visit to the cave dwellings carved into the eroded cliffs, whose original purpose remains debated by archaeologists, then a monastery painted with centuries-old Tibetan Buddhist frescoes, before the return to Jomsom.",
            descriptionEs:
              "Visita a las viviendas rupestres excavadas en los acantilados erosionados, cuyo uso original sigue siendo debatido por los arqueólogos, y a un monasterio pintado con frescos budistas tibetanos centenarios, antes del regreso a Jomsom.",
            image: `${R2}/journeys/nepal-mustang-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "inde",
    tour: {
      name: "Inde : le Kerala, les backwaters en houseboat",
      nameEn: "India: Kerala, the Backwaters by Houseboat",
      nameEs: "India: Kerala, los backwaters en casa flotante",
      slug: "inde-kerala-backwaters",
      image: `${R2}/tours/inde-kerala-backwaters.jpg`,
      images: `${R2}/trips/inde-kerala-gallery-1.jpg,${R2}/trips/inde-kerala-gallery-2.jpg,${R2}/trips/inde-kerala-gallery-3.jpg,${R2}/trips/inde-kerala-gallery-4.jpg,${R2}/trips/inde-kerala-gallery-5.jpg,${R2}/trips/inde-kerala-gallery-6.jpg`,
      tagline: "Un réseau de canaux et de lagunes bordé de cocotiers, exploré à bord d'une péniche traditionnelle transformée en hôtel flottant",
      taglineEn: "A network of canals and lagoons lined with coconut palms, explored aboard a traditional barge turned floating hotel",
      taglineEs: "Una red de canales y lagunas bordeada de cocoteros, explorada a bordo de una barcaza tradicional convertida en hotel flotante",
      description:
        "Le Kerala, surnommé « le pays de Dieu » pour la luxuriance de ses paysages, se découvre en grande partie depuis l'eau : plus de neuf cents kilomètres de canaux, lacs et lagunes reliant villages de pêcheurs et rizières, sillonnés à bord d'un kettuvallam, péniche de riz traditionnelle reconvertie en hôtel flottant avec équipage. Loin du rythme effréné du nord de l'Inde, le Kerala impose naturellement une lenteur bienvenue.",
      descriptionEn:
        "Kerala, nicknamed \"God's Own Country\" for the lushness of its landscapes, is explored largely from the water: over nine hundred kilometres of canals, lakes, and lagoons connecting fishing villages and rice paddies, navigated aboard a kettuvallam, a traditional rice barge converted into a crewed floating hotel. Far from the frenetic pace of northern India, Kerala naturally imposes a welcome slowness.",
      descriptionEs:
        "Kerala, apodado «la tierra de Dios» por la exuberancia de sus paisajes, se descubre en gran parte desde el agua: más de novecientos kilómetros de canales, lagos y lagunas que conectan pueblos de pescadores y arrozales, recorridos a bordo de un kettuvallam, barcaza de arroz tradicional reconvertida en hotel flotante con tripulación. Lejos del ritmo frenético del norte de India, Kerala impone de forma natural una lentitud bienvenida.",
      price: 2500,
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
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 86,
    },
    sections: [
      {
        heading: "Deux nuits à bord d'un kettuvallam",
        headingEn: "Two nights aboard a kettuvallam",
        headingEs: "Dos noches a bordo de un kettuvallam",
        body:
          "Le kettuvallam, littéralement « bateau aux planches liées », était autrefois utilisé pour transporter le riz le long des backwaters avant d'être reconverti en hébergement touristique à partir des années 1990. Naviguer à son bord, généralement à une vitesse à peine plus rapide que la marche, permet d'observer la vie quotidienne des villages riverains, entre lessive au bord de l'eau et pêche au filet traditionnelle.",
        bodyEn:
          "The kettuvallam, literally \"boat with tied planks,\" was once used to transport rice along the backwaters before being converted into tourist accommodation starting in the 1990s. Sailing aboard one, generally at a pace barely faster than walking, allows visitors to observe the daily life of riverside villages, between laundry done at the water's edge and traditional net fishing.",
        bodyEs:
          "El kettuvallam, literalmente «barco de tablas atadas», se usaba antiguamente para transportar arroz por los canales antes de reconvertirse en alojamiento turístico a partir de la década de 1990. Navegar a bordo, generalmente a una velocidad apenas superior a la de caminar, permite observar la vida cotidiana de los pueblos ribereños, entre la colada a orillas del agua y la pesca tradicional con red.",
      },
      {
        heading: "L'ayurveda et la cuisine du Kerala",
        headingEn: "Ayurveda and Kerala cuisine",
        headingEs: "El ayurveda y la cocina de Kerala",
        body:
          "Le Kerala revendique une tradition ayurvédique parmi les plus anciennes et les mieux préservées d'Inde, avec des centres spécialisés proposant massages à l'huile chaude et soins personnalisés selon les principes de cette médecine traditionnelle millénaire. La cuisine locale, généreuse en noix de coco, tamarin et poisson frais, se déguste traditionnellement sur une feuille de bananier lors d'un sadhya, repas festif composé de nombreux petits plats.",
        bodyEn:
          "Kerala claims one of India's oldest and best-preserved Ayurvedic traditions, with specialised centres offering hot-oil massages and personalised treatments based on the principles of this ancient traditional medicine. The local cuisine, generous with coconut, tamarind, and fresh fish, is traditionally eaten off a banana leaf during a sadhya, a festive meal made up of numerous small dishes.",
        bodyEs:
          "Kerala reivindica una de las tradiciones ayurvédicas más antiguas y mejor conservadas de India, con centros especializados que ofrecen masajes con aceite caliente y tratamientos personalizados según los principios de esta medicina tradicional milenaria. La cocina local, generosa en coco, tamarindo y pescado fresco, se degusta tradicionalmente sobre una hoja de plátano en un sadhya, comida festiva compuesta de numerosos platos pequeños.",
      },
    ],
    hotels: [
      {
        name: "Kettuvallam privé sur les backwaters",
        nameEn: "Private Kettuvallam on the Backwaters",
        nameEs: "Kettuvallam privado en los backwaters",
        description:
          "Une péniche traditionnelle entièrement privatisée pour deux nuits, chambre climatisée à bord, équipage dédié incluant un cuisinier préparant les repas au fil de la navigation.",
        descriptionEn:
          "A traditional barge fully privatised for two nights, an air-conditioned cabin on board, a dedicated crew including a cook preparing meals along the way.",
        descriptionEs:
          "Una barcaza tradicional totalmente privatizada durante dos noches, camarote climatizado a bordo, tripulación dedicada que incluye un cocinero que prepara las comidas durante la navegación.",
        image: `${R2}/trips/inde-kerala-hotel-kettuvallam.jpg`,
      },
      {
        name: "Kumarakom Lake Resort",
        nameEn: "Kumarakom Lake Resort",
        nameEs: "Kumarakom Lake Resort",
        description:
          "Un ensemble de villas traditionnelles en bois de style keralais au bord du lac Vembanad, jardins tropicaux et spa ayurvédique sur place.",
        descriptionEn:
          "A cluster of traditional Kerala-style wooden villas on the shore of Lake Vembanad, tropical gardens and an on-site Ayurvedic spa.",
        descriptionEs:
          "Un conjunto de villas tradicionales de madera al estilo de Kerala a orillas del lago Vembanad, jardines tropicales y spa ayurvédico in situ.",
        image: `${R2}/trips/inde-kerala-hotel-kumarakom.jpg`,
      },
    ],
  },
  {
    destinationSlug: "sri-lanka",
    tour: {
      name: "Sri Lanka : le Triangle Culturel, Sigiriya et les cités anciennes",
      nameEn: "Sri Lanka: The Cultural Triangle, Sigiriya and the Ancient Cities",
      nameEs: "Sri Lanka: el Triángulo Cultural, Sigiriya y las ciudades antiguas",
      slug: "sri-lanka-triangle-culturel",
      image: `${R2}/tours/sri-lanka-triangle-culturel.jpg`,
      images: `${R2}/trips/sri-lanka-triangle-gallery-1.jpg,${R2}/trips/sri-lanka-triangle-gallery-2.jpg,${R2}/trips/sri-lanka-triangle-gallery-3.jpg,${R2}/trips/sri-lanka-triangle-gallery-4.jpg,${R2}/trips/sri-lanka-triangle-gallery-5.jpg,${R2}/trips/sri-lanka-triangle-gallery-6.jpg`,
      tagline: "Une forteresse rocheuse vieille de mille cinq cents ans, entourée d'anciennes capitales englouties par la jungle",
      taglineEn: "A fifteen-hundred-year-old rock fortress, surrounded by ancient capitals swallowed by the jungle",
      taglineEs: "Una fortaleza rocosa de mil quinientos años, rodeada de antiguas capitales engullidas por la selva",
      description:
        "Le Triangle Culturel du Sri Lanka, dans le centre-nord de l'île, concentre les vestiges de plus de deux mille ans de civilisation cinghalaise : Sigiriya, forteresse rocheuse du Ve siècle culminant à plus de deux cents mètres et classée à l'UNESCO, les cités anciennes d'Anuradhapura et Polonnaruwa, capitales successives du royaume aujourd'hui à moitié reprises par la végétation, et les grottes peintes de Dambulla, sanctuaire bouddhiste en activité depuis plus de deux mille ans.",
      descriptionEn:
        "Sri Lanka's Cultural Triangle, in the north-central part of the island, concentrates the remains of over two thousand years of Sinhalese civilisation: Sigiriya, a fifth-century rock fortress rising over two hundred metres and UNESCO-listed, the ancient cities of Anuradhapura and Polonnaruwa, successive capitals of the kingdom now half-reclaimed by vegetation, and the painted caves of Dambulla, a Buddhist sanctuary in continuous use for over two thousand years.",
      descriptionEs:
        "El Triángulo Cultural de Sri Lanka, en el centro-norte de la isla, concentra los vestigios de más de dos mil años de civilización cingalesa: Sigiriya, fortaleza rocosa del siglo V que se eleva más de doscientos metros y está declarada por la UNESCO, las antiguas ciudades de Anuradhapura y Polonnaruwa, capitales sucesivas del reino hoy medio recuperadas por la vegetación, y las cuevas pintadas de Dambulla, santuario budista en activo desde hace más de dos mil años.",
      price: 2200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Jan à mars | Juil à sept",
      whenLabelEn: "Jan to March | July to Sept",
      whenLabelEs: "Ene a marzo | jul a sept",
      bestMonths: "january,february,march,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 87,
    },
    sections: [
      {
        heading: "Sigiriya, le rocher du Lion",
        headingEn: "Sigiriya, the Lion Rock",
        headingEs: "Sigiriya, la roca del León",
        body:
          "La forteresse de Sigiriya, bâtie au Ve siècle par un roi parricide en quête de refuge inexpugnable, se dresse sur un piton rocheux de plus de deux cents mètres accessible par un escalier métallique aménagé entre les pattes d'un lion géant sculpté à même la roche, dont seules les pattes subsistent aujourd'hui. Les fresques des demoiselles célestes, peintes sur une paroi abritée à mi-hauteur, comptent parmi les plus anciens exemples de peinture cinghalaise encore visibles.",
        bodyEn:
          "The Sigiriya fortress, built in the 5th century by a patricidal king seeking an impregnable refuge, stands on a rocky outcrop over two hundred metres high, reached by a metal staircase set between the paws of a giant lion carved into the rock itself, of which only the paws survive today. The frescoes of the celestial maidens, painted on a sheltered rock face halfway up, rank among the oldest surviving examples of Sinhalese painting.",
        bodyEs:
          "La fortaleza de Sigiriya, construida en el siglo V por un rey parricida en busca de un refugio inexpugnable, se alza sobre un peñasco de más de doscientos metros al que se accede por una escalera metálica dispuesta entre las patas de un león gigante esculpido en la propia roca, del que hoy solo sobreviven las patas. Los frescos de las doncellas celestiales, pintados en una pared resguardada a media altura, se cuentan entre los ejemplos más antiguos de pintura cingalesa que aún se conservan.",
      },
      {
        heading: "Polonnaruwa, Anuradhapura et les grottes de Dambulla",
        headingEn: "Polonnaruwa, Anuradhapura, and the Dambulla caves",
        headingEs: "Polonnaruwa, Anuradhapura y las cuevas de Dambulla",
        body:
          "Polonnaruwa, capitale du XIIe siècle remarquablement préservée et suffisamment compacte pour se visiter à vélo, conserve le Gal Vihara, ensemble de bouddhas monumentaux sculptés dans un seul bloc de granite. Anuradhapura, plus ancienne et plus étendue, abrite l'un des plus vieux arbres plantés par l'homme au monde, issu d'une bouture du figuier sous lequel Bouddha aurait atteint l'illumination. Les grottes de Dambulla, temple troglodyte peint et sculpté depuis le Ier siècle avant notre ère, restent un lieu de culte actif visité quotidiennement par les pèlerins.",
        bodyEn:
          "Polonnaruwa, a remarkably preserved 12th-century capital compact enough to explore by bicycle, holds the Gal Vihara, a set of monumental Buddhas carved from a single block of granite. Anuradhapura, older and more sprawling, is home to one of the world's oldest trees planted by human hands, grown from a cutting of the fig tree under which the Buddha is said to have reached enlightenment. The Dambulla caves, a cave temple painted and carved since the 1st century BCE, remain an active place of worship visited daily by pilgrims.",
        bodyEs:
          "Polonnaruwa, capital del siglo XII notablemente conservada y lo bastante compacta como para visitarla en bicicleta, conserva el Gal Vihara, un conjunto de budas monumentales tallados en un único bloque de granito. Anuradhapura, más antigua y extensa, alberga uno de los árboles plantados por el hombre más antiguos del mundo, nacido de un esqueje de la higuera bajo la cual Buda habría alcanzado la iluminación. Las cuevas de Dambulla, templo rupestre pintado y esculpido desde el siglo I antes de nuestra era, siguen siendo un lugar de culto activo visitado a diario por peregrinos.",
      },
    ],
    hotels: [
      {
        name: "Jetwing Vil Uyana",
        nameEn: "Jetwing Vil Uyana",
        nameEs: "Jetwing Vil Uyana",
        description:
          "Un lodge construit autour de zones humides reconstituées à deux pas de Sigiriya, chambres sur pilotis avec vue sur les oiseaux d'eau et le rocher au loin.",
        descriptionEn:
          "A lodge built around reconstructed wetlands steps from Sigiriya, stilted rooms overlooking waterbirds and the rock in the distance.",
        descriptionEs:
          "Un lodge construido en torno a humedales reconstituidos a pocos pasos de Sigiriya, habitaciones sobre pilotes con vistas a las aves acuáticas y a la roca a lo lejos.",
        image: `${R2}/trips/sri-lanka-triangle-hotel-viluyana.jpg`,
      },
      {
        name: "Heritance Kandalama",
        nameEn: "Heritance Kandalama",
        nameEs: "Heritance Kandalama",
        description:
          "Un hôtel conçu par l'architecte Geoffrey Bawa, littéralement intégré à la falaise et à la jungle environnante, vue sur le lac artificiel de Kandalama et le rocher de Sigiriya.",
        descriptionEn:
          "A hotel designed by architect Geoffrey Bawa, literally built into the cliff and surrounding jungle, with a view over the artificial Kandalama lake and Sigiriya rock.",
        descriptionEs:
          "Un hotel diseñado por el arquitecto Geoffrey Bawa, literalmente integrado en el acantilado y la selva circundante, con vistas al lago artificial de Kandalama y a la roca de Sigiriya.",
        image: `${R2}/trips/sri-lanka-triangle-hotel-kandalama.jpg`,
      },
    ],
  },
  {
    destinationSlug: "bhoutan",
    tour: {
      name: "Bhoutan : la vallée de Bumthang, le cœur spirituel du royaume",
      nameEn: "Bhutan: The Bumthang Valley, the Kingdom's Spiritual Heart",
      nameEs: "Bután: el valle de Bumthang, el corazón espiritual del reino",
      slug: "bhoutan-bumthang",
      image: `${R2}/tours/bhoutan-bumthang.jpg`,
      images: `${R2}/trips/bhoutan-bumthang-gallery-1.jpg,${R2}/trips/bhoutan-bumthang-gallery-2.jpg,${R2}/trips/bhoutan-bumthang-gallery-3.jpg,${R2}/trips/bhoutan-bumthang-gallery-4.jpg,${R2}/trips/bhoutan-bumthang-gallery-5.jpg,${R2}/trips/bhoutan-bumthang-gallery-6.jpg`,
      tagline: "Quatre vallées reculées qui concentrent certains des plus anciens monastères du royaume",
      taglineEn: "Four remote valleys concentrating some of the kingdom's oldest monasteries",
      taglineEs: "Cuatro valles remotos que concentran algunos de los monasterios más antiguos del reino",
      description:
        "La région de Bumthang, regroupant quatre vallées reculées du centre du Bhoutan, est considérée par beaucoup comme le cœur spirituel du royaume, en raison de la concentration exceptionnelle de temples et monastères parmi les plus anciens du pays, dont certains antérieurs à l'introduction officielle du bouddhisme au VIIe siècle. Moins visitée que la vallée de Paro, la région conserve un mode de vie rural largement tourné vers l'élevage de yaks et la culture du sarrasin.",
      descriptionEn:
        "The Bumthang region, encompassing four remote valleys in central Bhutan, is considered by many to be the kingdom's spiritual heart, owing to an exceptional concentration of temples and monasteries among the country's oldest, some predating the official introduction of Buddhism in the 7th century. Less visited than the Paro Valley, the region retains a rural way of life largely centred on yak herding and buckwheat farming.",
      descriptionEs:
        "La región de Bumthang, que agrupa cuatro valles remotos del centro de Bután, es considerada por muchos el corazón espiritual del reino, debido a una concentración excepcional de templos y monasterios entre los más antiguos del país, algunos anteriores a la introducción oficial del budismo en el siglo VII. Menos visitada que el valle de Paro, la región conserva un modo de vida rural centrado en gran medida en la cría de yaks y el cultivo de trigo sarraceno.",
      price: 4200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mars à mai | Sept à nov",
      whenLabelEn: "March to May | Sept to Nov",
      whenLabelEs: "Marzo a mayo | sept a nov",
      bestMonths: "march,april,may,september,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 88,
    },
    sections: [
      {
        heading: "Les temples parmi les plus anciens du royaume",
        headingEn: "Some of the kingdom's oldest temples",
        headingEs: "Algunos de los templos más antiguos del reino",
        body:
          "Le temple de Jambay Lhakhang, l'un des plus anciens du Bhoutan, aurait été construit en une seule nuit au VIIe siècle par le roi tibétain Songtsen Gampo, selon la légende locale, pour immobiliser un démon géant dont le corps s'étendait sur tout l'Himalaya. Le monastère de Kurjey, à proximité, conserve l'empreinte corporelle laissée dans la roche par le grand maître Padmasambhava, figure fondatrice du bouddhisme tantrique tibétain vénérée dans tout le royaume.",
        bodyEn:
          "Jambay Lhakhang Temple, one of the oldest in Bhutan, is said by local legend to have been built in a single night in the 7th century by Tibetan king Songtsen Gampo, to pin down a giant demon whose body stretched across the entire Himalayas. Nearby Kurjey Monastery preserves the body imprint left in the rock by the great master Padmasambhava, the founding figure of Tibetan tantric Buddhism venerated throughout the kingdom.",
        bodyEs:
          "El templo de Jambay Lhakhang, uno de los más antiguos de Bután, habría sido construido en una sola noche en el siglo VII por el rey tibetano Songtsen Gampo, según la leyenda local, para inmovilizar a un demonio gigante cuyo cuerpo se extendía por todo el Himalaya. El monasterio de Kurjey, cercano, conserva la huella corporal dejada en la roca por el gran maestro Padmasambhava, figura fundadora del budismo tántrico tibetano venerada en todo el reino.",
      },
      {
        heading: "Les vallées de yaks et le miel sauvage",
        headingEn: "The yak valleys and wild honey",
        headingEs: "Los valles de yaks y la miel silvestre",
        body:
          "La vallée reculée de Tang, la plus haute des quatre vallées de Bumthang, reste habitée par des éleveurs semi-nomades de yaks qui vivent selon des méthodes largement inchangées depuis des générations. La région est également réputée pour son miel sauvage, récolté à flanc de falaise selon une technique périlleuse transmise de père en fils, ainsi que pour ses fromages de yak et sa bière locale à base d'orge.",
        bodyEn:
          "The remote Tang Valley, the highest of Bumthang's four valleys, remains home to semi-nomadic yak herders who live using methods largely unchanged for generations. The region is also known for its wild honey, harvested on cliff faces using a perilous technique passed down from father to son, as well as its yak cheeses and local barley beer.",
        bodyEs:
          "El remoto valle de Tang, el más alto de los cuatro valles de Bumthang, sigue habitado por pastores seminómadas de yaks que viven según métodos apenas cambiados durante generaciones. La región es también conocida por su miel silvestre, recolectada en paredes de acantilado mediante una técnica peligrosa transmitida de padre a hijo, así como por sus quesos de yak y su cerveza local de cebada.",
      },
    ],
    hotels: [
      {
        name: "Amankora Bumthang",
        nameEn: "Amankora Bumthang",
        nameEs: "Amankora Bumthang",
        description:
          "Un lodge de style monastique en pleine forêt de pins, architecture épurée inspirée des dzongs traditionnels, spa utilisant des plantes médicinales locales.",
        descriptionEn:
          "A monastery-style lodge deep in a pine forest, pared-back architecture inspired by traditional dzongs, a spa using local medicinal plants.",
        descriptionEs:
          "Un lodge de estilo monástico en pleno bosque de pinos, arquitectura depurada inspirada en los dzongs tradicionales, spa que utiliza plantas medicinales locales.",
        image: `${R2}/trips/bhoutan-bumthang-hotel-amankora.jpg`,
      },
      {
        name: "Mountain Lodge Bumthang",
        nameEn: "Mountain Lodge Bumthang",
        nameEs: "Mountain Lodge Bumthang",
        description:
          "Un hôtel plus simple au cœur de la vallée, chambres avec poêle à bois traditionnel, restaurant servant une cuisine bhoutanaise familiale au piment et fromage.",
        descriptionEn:
          "A simpler hotel at the heart of the valley, rooms with traditional wood-burning stoves, a restaurant serving homestyle Bhutanese cuisine with chilli and cheese.",
        descriptionEs:
          "Un hotel más sencillo en el corazón del valle, habitaciones con estufa de leña tradicional, restaurante que sirve cocina butanesa casera con chile y queso.",
        image: `${R2}/trips/bhoutan-bumthang-hotel-mountainlodge.jpg`,
      },
    ],
  },
  {
    destinationSlug: "nepal",
    tour: {
      name: "Népal : Namche Bazaar, sur les contreforts de l'Everest",
      nameEn: "Nepal: Namche Bazaar, on the Foothills of Everest",
      nameEs: "Nepal: Namche Bazaar, en las estribaciones del Everest",
      slug: "nepal-namche-bazaar",
      image: `${R2}/tours/nepal-namche-bazaar.jpg`,
      images: `${R2}/trips/nepal-namche-gallery-1.jpg,${R2}/trips/nepal-namche-gallery-2.jpg,${R2}/trips/nepal-namche-gallery-3.jpg,${R2}/trips/nepal-namche-gallery-4.jpg,${R2}/trips/nepal-namche-gallery-5.jpg,${R2}/trips/nepal-namche-gallery-6.jpg`,
      tagline: "La capitale sherpa du Khumbu, porte d'entrée vers le toit du monde",
      taglineEn: "The Sherpa capital of the Khumbu, gateway to the roof of the world",
      taglineEs: "La capital sherpa del Khumbu, puerta de entrada al techo del mundo",
      description:
        "Namche Bazaar, village en amphithéâtre niché à plus de trois mille quatre cents mètres d'altitude, sert de capitale non officielle au peuple sherpa et de dernier point de ravitaillement avant les sommets himalayens. Sans nécessiter le trek complet vers le camp de base de l'Everest, qui demande généralement deux semaines, une marche de quelques jours depuis Lukla permet déjà d'atteindre cette altitude et d'apercevoir, par temps clair, le sommet de l'Everest lui-même depuis un point de vue accessible.",
      descriptionEn:
        "Namche Bazaar, an amphitheatre-shaped village nestled over three thousand four hundred metres up, serves as the unofficial capital of the Sherpa people and the last resupply point before the Himalayan peaks. Without requiring the full trek to Everest Base Camp, which generally takes two weeks, a few days' walk from Lukla already reaches this altitude and, on a clear day, offers a view of Everest's summit itself from an accessible viewpoint.",
      descriptionEs:
        "Namche Bazaar, pueblo en forma de anfiteatro enclavado a más de tres mil cuatrocientos metros de altitud, sirve de capital no oficial del pueblo sherpa y último punto de aprovisionamiento antes de las cumbres del Himalaya. Sin necesidad del trekking completo hasta el campo base del Everest, que suele requerir dos semanas, una caminata de unos días desde Lukla ya permite alcanzar esta altitud y divisar, en días despejados, la propia cumbre del Everest desde un mirador accesible.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Oct-nov | Mars à mai",
      whenLabelEn: "Oct-Nov | March to May",
      whenLabelEs: "Oct-nov | marzo a mayo",
      bestMonths: "october,november,march,april,may",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 89,
    },
    sections: [
      {
        heading: "Le vol vers Lukla et la vallée du Khumbu",
        headingEn: "The flight to Lukla and the Khumbu Valley",
        headingEs: "El vuelo a Lukla y el valle del Khumbu",
        body:
          "Le vol vers Lukla, dont la piste d'atterrissage inclinée et perchée à flanc de montagne compte parmi les plus impressionnantes au monde, marque le début de la marche à travers la vallée du Khumbu. Le sentier longe la rivière Dudh Kosi, traverse plusieurs ponts suspendus vertigineux et croise régulièrement des caravanes de yaks transportant du matériel vers les villages d'altitude, seul moyen de transport de marchandises dans une région dépourvue de routes carrossables.",
        bodyEn:
          "The flight to Lukla, whose sloped airstrip perched on a mountainside ranks among the world's most dramatic, marks the start of the walk through the Khumbu Valley. The trail follows the Dudh Kosi River, crosses several vertiginous suspension bridges, and regularly passes caravans of yaks carrying supplies to the high-altitude villages, the only means of transporting goods in a region with no roads for vehicles.",
        bodyEs:
          "El vuelo a Lukla, cuya pista de aterrizaje inclinada y encaramada en la ladera de la montaña se cuenta entre las más impresionantes del mundo, marca el inicio de la caminata por el valle del Khumbu. El sendero bordea el río Dudh Kosi, cruza varios puentes colgantes vertiginosos y se cruza con regularidad con caravanas de yaks que transportan material hacia los pueblos de altitud, único medio de transporte de mercancías en una región sin carreteras.",
      },
      {
        heading: "Namche Bazaar et le monastère de Tengboche",
        headingEn: "Namche Bazaar and Tengboche Monastery",
        headingEs: "Namche Bazaar y el monasterio de Tengboche",
        body:
          "Namche Bazaar, construit en amphithéâtre à flanc de colline, concentre boutiques d'équipement de trek, cybercafés et maisons d'hôtes qui en font le véritable centre névralgique du Khumbu. Une excursion d'une journée jusqu'au monastère de Tengboche, à plus de trois mille huit cents mètres, offre l'une des vues les plus complètes sur l'Everest, le Lhotse et l'Ama Dablam, trois des plus hauts sommets de la région réunis dans un même panorama.",
        bodyEn:
          "Namche Bazaar, built as an amphitheatre against the hillside, concentrates trekking gear shops, cybercafés, and guesthouses that make it the true nerve centre of the Khumbu. A day excursion to Tengboche Monastery, over three thousand eight hundred metres up, offers one of the most complete views of Everest, Lhotse, and Ama Dablam, three of the region's highest peaks united in a single panorama.",
        bodyEs:
          "Namche Bazaar, construido en anfiteatro sobre la ladera, concentra tiendas de equipo de trekking, cibercafés y casas de huéspedes que la convierten en el verdadero centro neurálgico del Khumbu. Una excursión de un día hasta el monasterio de Tengboche, a más de tres mil ochocientos metros, ofrece una de las vistas más completas del Everest, el Lhotse y el Ama Dablam, tres de las cumbres más altas de la región reunidas en un mismo panorama.",
      },
    ],
    hotels: [
      {
        name: "Yeti Mountain Home Namche",
        nameEn: "Yeti Mountain Home Namche",
        nameEs: "Yeti Mountain Home Namche",
        description:
          "Un lodge de montagne confortable au cœur de Namche Bazaar, chauffage central rare à cette altitude, chambres avec vue sur les sommets environnants.",
        descriptionEn:
          "A comfortable mountain lodge at the heart of Namche Bazaar, central heating rare at this altitude, rooms overlooking the surrounding peaks.",
        descriptionEs:
          "Un cómodo lodge de montaña en el corazón de Namche Bazaar, calefacción central poco habitual a esta altitud, habitaciones con vistas a las cumbres circundantes.",
        image: `${R2}/trips/nepal-namche-hotel-yeti.jpg`,
      },
      {
        name: "Panorama Lodge",
        nameEn: "Panorama Lodge",
        nameEs: "Panorama Lodge",
        description:
          "Un lodge plus simple tenu par une famille sherpa, poêle central autour duquel se rassemblent les trekkeurs en soirée, cuisine familiale au dal bhat traditionnel.",
        descriptionEn:
          "A simpler lodge run by a Sherpa family, a central stove around which trekkers gather in the evening, home cooking with traditional dal bhat.",
        descriptionEs:
          "Un lodge más sencillo gestionado por una familia sherpa, estufa central en torno a la cual se reúnen los trekkers por la noche, cocina familiar con dal bhat tradicional.",
        image: `${R2}/trips/nepal-namche-hotel-panorama.jpg`,
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
