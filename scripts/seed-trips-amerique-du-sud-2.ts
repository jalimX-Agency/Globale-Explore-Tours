// Amérique du Sud batch 2 — Brazil, Colombia, Costa Rica. New trips bringing each destination
// to at least 3, styled on Black Tomato's real structure (a short number of named-hotel
// chapters, not an exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-amerique-du-sud-2.ts
// Requires scripts/upload-images-amerique-du-sud-2.ts to have been run first (this script
// refuses to write anything if a referenced image isn't already live in R2 — see
// seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "bresil",
    tour: {
      name: "Brésil : l'Amazonie et le Pantanal",
      nameEn: "Brazil: The Amazon and the Pantanal",
      nameEs: "Brasil: la Amazonía y el Pantanal",
      slug: "bresil-amazonie-pantanal",
      image: `${R2}/journeys/bresil-amazonie-pantanal-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le plus grand fleuve du monde au cœur de la forêt, puis la plus grande zone humide de la planète peuplée de jaguars",
      taglineEn: "The world's largest river deep in the forest, then the planet's biggest wetland, home to jaguars",
      taglineEs: "El río más grande del mundo en pleno corazón de la selva, y después el mayor humedal del planeta, poblado de jaguares",
      description:
        "Un voyage entre deux visages sauvages du Brésil : l'Amazonie autour de Manaus, où le fleuve Amazone rencontre le Rio Negro dans une « rencontre des eaux » spectaculaire visible à l'œil nu, puis le Pantanal, la plus grande zone humide de la planète, où la visibilité exceptionnelle du terrain découvert en fait le meilleur endroit au monde pour observer des jaguars sauvages.",
      descriptionEn:
        "A journey between two wild faces of Brazil: the Amazon around Manaus, where the Amazon River meets the Rio Negro in a spectacular \"meeting of waters\" visible to the naked eye, then the Pantanal, the planet's largest wetland, where the terrain's exceptional visibility makes it the best place in the world to observe wild jaguars.",
      descriptionEs:
        "Un viaje entre dos caras salvajes de Brasil: la Amazonía en torno a Manaos, donde el río Amazonas se encuentra con el Rio Negro en un espectacular «encuentro de las aguas» visible a simple vista, y después el Pantanal, el mayor humedal del planeta, donde la excepcional visibilidad del terreno abierto lo convierte en el mejor lugar del mundo para observar jaguares salvajes.",
      price: 5000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 8,
      durationUnit: "nights",
      duration: "8 nuits",
      durationEn: "8 nights",
      durationEs: "8 noches",
      whenLabel: "Juil à oct",
      whenLabelEn: "July to Oct",
      whenLabelEs: "Jul a oct",
      bestMonths: "july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 50,
    },
    chapters: [
      {
        title: "L'Amazonie et la rencontre des eaux",
        titleEn: "The Amazon and the Meeting of the Waters",
        titleEs: "La Amazonía y el encuentro de las aguas",
        intro:
          "Premier chapitre à Manaus, porte d'entrée de l'Amazonie brésilienne, où se produit la « rencontre des eaux » : les eaux sombres du Rio Negro et les eaux boueuses de l'Amazone coulent côte à côte sur plusieurs kilomètres sans se mélanger, en raison de différences de température, de vitesse et de densité. Un lodge flottant en pleine forêt permet des sorties nocturnes en canoë à la recherche de caïmans, dont les yeux reflètent la lumière des lampes torches.",
        introEn:
          "The first chapter unfolds in Manaus, gateway to the Brazilian Amazon, where the \"meeting of the waters\" occurs: the dark waters of the Rio Negro and the muddy waters of the Amazon flow side by side for several kilometres without mixing, due to differences in temperature, speed, and density. A floating lodge deep in the forest allows night canoe outings in search of caimans, their eyes reflecting the light of torches.",
        introEs:
          "El primer capítulo se desarrolla en Manaos, puerta de entrada a la Amazonía brasileña, donde se produce el «encuentro de las aguas»: las aguas oscuras del Rio Negro y las aguas fangosas del Amazonas fluyen una junto a la otra durante varios kilómetros sin mezclarse, debido a diferencias de temperatura, velocidad y densidad. Un lodge flotante en pleno bosque permite salidas nocturnas en canoa en busca de caimanes, cuyos ojos reflejan la luz de las linternas.",
        galleryImages: `${R2}/journeys/bresil-amazonie-gallery1.jpg,${R2}/journeys/bresil-amazonie-gallery2.jpg,${R2}/journeys/bresil-amazonie-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "La rencontre des eaux et installation au lodge flottant",
            titleEn: "The Meeting of the Waters and check-in at the floating lodge",
            titleEs: "El encuentro de las aguas e instalación en el lodge flotante",
            description:
              "Bateau jusqu'à la rencontre des eaux, phénomène visible à l'œil nu où les eaux du Rio Negro et de l'Amazone coulent côte à côte sans se mélanger, puis installation dans un lodge flottant en pleine forêt.",
            descriptionEn:
              "A boat trip to the Meeting of the Waters, a phenomenon visible to the naked eye where the waters of the Rio Negro and the Amazon flow side by side without mixing, then check-in at a floating lodge deep in the forest.",
            descriptionEs:
              "Barco hasta el encuentro de las aguas, un fenómeno visible a simple vista donde las aguas del Rio Negro y del Amazonas fluyen una junto a la otra sin mezclarse, e instalación en un lodge flotante en pleno bosque.",
            image: `${R2}/journeys/bresil-amazonie-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sortie nocturne à la recherche des caïmans",
            titleEn: "A night outing in search of caimans",
            titleEs: "Salida nocturna en busca de caimanes",
            description:
              "Sortie en canoë de nuit sur les affluents calmes de l'Amazone, lampe torche à la main pour repérer les yeux rougeoyants des caïmans, accompagnée d'un guide local né dans la forêt.",
            descriptionEn:
              "A night canoe outing on the calm tributaries of the Amazon, torch in hand to spot the glowing eyes of caimans, accompanied by a local guide born in the forest.",
            descriptionEs:
              "Salida nocturna en canoa por los afluentes tranquilos del Amazonas, linterna en mano para localizar los ojos brillantes de los caimanes, acompañados de un guía local nacido en el bosque.",
            image: `${R2}/journeys/bresil-amazonie-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le Pantanal et les jaguars",
        titleEn: "The Pantanal and the Jaguars",
        titleEs: "El Pantanal y los jaguares",
        intro:
          "Vol vers le Pantanal, plus grande zone humide de la planète, dont les eaux peu profondes et la végétation basse offrent une visibilité inégalée sur la faune, à l'inverse de la dense canopée amazonienne. La région abrite la plus forte densité de jaguars du continent, ainsi que des populations considérables de caïmans, de loutres géantes et de plus de six cent cinquante espèces d'oiseaux.",
        introEn:
          "A flight to the Pantanal, the planet's largest wetland, whose shallow waters and low vegetation offer unmatched wildlife visibility, unlike the dense Amazonian canopy. The region holds the continent's highest density of jaguars, along with considerable populations of caimans, giant otters, and over six hundred and fifty bird species.",
        introEs:
          "Vuelo hacia el Pantanal, el mayor humedal del planeta, cuyas aguas poco profundas y vegetación baja ofrecen una visibilidad inigualable de la fauna, a diferencia del denso dosel amazónico. La región alberga la mayor densidad de jaguares del continente, además de poblaciones considerables de caimanes, nutrias gigantes y más de seiscientas cincuenta especies de aves.",
        galleryImages: `${R2}/journeys/bresil-pantanal-gallery1.jpg,${R2}/journeys/bresil-pantanal-gallery2.jpg,${R2}/journeys/bresil-pantanal-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Safari en bateau sur la rivière Cuiabá",
            titleEn: "Boat safari on the Cuiabá River",
            titleEs: "Safari en barco por el río Cuiabá",
            description:
              "Safari en bateau sur la rivière Cuiabá, réputée pour abriter la plus forte concentration de jaguars observables au monde, aux côtés de caïmans et de loutres géantes se prélassant sur les berges.",
            descriptionEn:
              "A boat safari on the Cuiabá River, known for hosting the world's highest concentration of observable jaguars, alongside caimans and giant otters basking on the banks.",
            descriptionEs:
              "Safari en barco por el río Cuiabá, conocido por albergar la mayor concentración observable de jaguares del mundo, junto a caimanes y nutrias gigantes tumbados en las orillas.",
            image: `${R2}/journeys/bresil-pantanal-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Safari à cheval et coucher de soleil sur les zones humides",
            titleEn: "Horseback safari and sunset over the wetlands",
            titleEs: "Safari a caballo y atardecer sobre los humedales",
            description:
              "Safari à cheval à travers les zones humides du Pantanal, à la recherche de fourmiliers géants et de cerfs des marais, avant un coucher de soleil qui embrase les eaux peu profondes de mille reflets.",
            descriptionEn:
              "A horseback safari across the Pantanal wetlands, in search of giant anteaters and marsh deer, before a sunset that sets the shallow waters ablaze with a thousand reflections.",
            descriptionEs:
              "Safari a caballo por los humedales del Pantanal, en busca de osos hormigueros gigantes y ciervos de los pantanos, antes de un atardecer que enciende las aguas poco profundas con mil reflejos.",
            image: `${R2}/journeys/bresil-pantanal-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "colombie",
    tour: {
      name: "Colombie : Tayrona et la Cité Perdue",
      nameEn: "Colombia: Tayrona and the Lost City",
      nameEs: "Colombia: Tayrona y la Ciudad Perdida",
      slug: "colombie-tayrona-ciudad-perdida",
      image: `${R2}/journeys/colombie-tayrona-ciudadperdida-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des plages de jungle vierge sans une seule route, puis une cité précolombienne plus vieille que le Machu Picchu",
      taglineEn: "Untouched jungle beaches with not a single road, then a pre-Columbian city older than Machu Picchu",
      taglineEs: "Playas de selva virgen sin una sola carretera, y después una ciudad precolombina más antigua que Machu Picchu",
      description:
        "Un voyage sur la côte caraïbe la moins domestiquée de Colombie : le parc national de Tayrona, dont les plages de sable blanc bordées de jungle ne sont accessibles qu'à pied ou à cheval, puis la Cité Perdue, cité précolombienne fondée par le peuple tayrona plusieurs siècles avant Machu Picchu, atteinte au terme d'un trek de plusieurs jours à travers la Sierra Nevada de Santa Marta.",
      descriptionEn:
        "A journey along Colombia's wildest Caribbean coast: Tayrona National Park, whose white-sand beaches fringed with jungle can only be reached on foot or horseback, then the Lost City, a pre-Columbian city founded by the Tayrona people centuries before Machu Picchu, reached after a multi-day trek through the Sierra Nevada de Santa Marta.",
      descriptionEs:
        "Un viaje por la costa caribeña menos domesticada de Colombia: el parque nacional de Tayrona, cuyas playas de arena blanca bordeadas de selva solo son accesibles a pie o a caballo, y después la Ciudad Perdida, ciudad precolombina fundada por el pueblo tayrona varios siglos antes que Machu Picchu, alcanzada tras un trekking de varios días por la Sierra Nevada de Santa Marta.",
      price: 3300,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 8,
      durationUnit: "nights",
      duration: "8 nuits",
      durationEn: "8 nights",
      durationEs: "8 noches",
      whenLabel: "Déc à mars",
      whenLabelEn: "Dec to March",
      whenLabelEs: "Dic a marzo",
      bestMonths: "december,january,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 51,
    },
    chapters: [
      {
        title: "Le parc national de Tayrona",
        titleEn: "Tayrona National Park",
        titleEs: "El parque nacional de Tayrona",
        intro:
          "Premier chapitre dans le parc national de Tayrona, où la Sierra Nevada de Santa Marta plonge directement dans la mer des Caraïbes sans qu'aucune route ne vienne interrompre le paysage. Les plages de Cabo San Juan et de La Piscina, accessibles uniquement après une marche en forêt tropicale, comptent parmi les plus photogéniques d'Amérique du Sud, avec leurs rochers granitiques polis par des siècles d'érosion.",
        introEn:
          "The first chapter unfolds in Tayrona National Park, where the Sierra Nevada de Santa Marta plunges straight into the Caribbean Sea with no road interrupting the landscape. The beaches of Cabo San Juan and La Piscina, reachable only after a walk through rainforest, rank among the most photogenic in South America, with their granite boulders polished by centuries of erosion.",
        introEs:
          "El primer capítulo se desarrolla en el parque nacional de Tayrona, donde la Sierra Nevada de Santa Marta se sumerge directamente en el mar Caribe sin que ninguna carretera interrumpa el paisaje. Las playas de Cabo San Juan y La Piscina, accesibles solo tras una caminata por la selva tropical, se cuentan entre las más fotogénicas de Sudamérica, con sus rocas graníticas pulidas por siglos de erosión.",
        galleryImages: `${R2}/journeys/colombie-tayrona-gallery1.jpg,${R2}/journeys/colombie-tayrona-gallery2.jpg,${R2}/journeys/colombie-tayrona-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Marche jusqu'à Cabo San Juan",
            titleEn: "The walk to Cabo San Juan",
            titleEs: "Caminata hasta Cabo San Juan",
            description:
              "Marche à travers la forêt tropicale du parc jusqu'à la plage de Cabo San Juan, où un promontoire rocheux sépare deux baies de sable blanc, nuit en hamac suspendu face à l'océan.",
            descriptionEn:
              "A walk through the park's rainforest to Cabo San Juan beach, where a rocky promontory separates two white-sand bays, an overnight stay in a hammock facing the ocean.",
            descriptionEs:
              "Caminata por la selva tropical del parque hasta la playa de Cabo San Juan, donde un promontorio rocoso separa dos bahías de arena blanca, noche en hamaca frente al océano.",
            image: `${R2}/journeys/colombie-tayrona-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La Piscina et les vestiges tayronas",
            titleEn: "La Piscina and Tayrona remains",
            titleEs: "La Piscina y los vestigios tayronas",
            description:
              "Baignade à La Piscina, baie naturellement protégée des courants par une barrière de corail, puis visite de Pueblito, vestiges d'un ancien village tayrona encore visible au milieu de la forêt.",
            descriptionEn:
              "A swim at La Piscina, a bay naturally sheltered from currents by a coral barrier, then a visit to Pueblito, the remains of an old Tayrona village still visible amid the forest.",
            descriptionEs:
              "Baño en La Piscina, bahía naturalmente protegida de las corrientes por una barrera de coral, y visita a Pueblito, vestigios de un antiguo poblado tayrona todavía visible en medio del bosque.",
            image: `${R2}/journeys/colombie-tayrona-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le trek vers la Cité Perdue",
        titleEn: "The Trek to the Lost City",
        titleEs: "El trekking hacia la Ciudad Perdida",
        intro:
          "Départ pour le trek de plusieurs jours vers la Cité Perdue, fondée par le peuple tayrona vers l'an 800, soit environ six cents ans avant la fondation du Machu Picchu. Redécouverte seulement en 1972 par des pilleurs de tombes, la cité ne se dévoile qu'au terme de l'ascension de plus de mille deux cents marches de pierre originales, à travers une jungle dense où vivent encore des communautés indigènes kogis, descendants directs des Tayronas.",
        introEn:
          "Departure for the multi-day trek to the Lost City, founded by the Tayrona people around the year 800, roughly six hundred years before the founding of Machu Picchu. Rediscovered only in 1972 by grave robbers, the city reveals itself only after climbing over one thousand two hundred original stone steps, through dense jungle still home to indigenous Kogi communities, direct descendants of the Tayronas.",
        introEs:
          "Salida para el trekking de varios días hacia la Ciudad Perdida, fundada por el pueblo tayrona hacia el año 800, unos seiscientos años antes de la fundación de Machu Picchu. Redescubierta solo en 1972 por saqueadores de tumbas, la ciudad se revela únicamente tras el ascenso de más de mil doscientos escalones de piedra originales, a través de una selva densa donde todavía viven comunidades indígenas kogis, descendientes directos de los tayronas.",
        galleryImages: `${R2}/journeys/colombie-ciudadperdida-gallery1.jpg,${R2}/journeys/colombie-ciudadperdida-gallery2.jpg,${R2}/journeys/colombie-ciudadperdida-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "À travers la Sierra Nevada de Santa Marta",
            titleEn: "Through the Sierra Nevada de Santa Marta",
            titleEs: "A través de la Sierra Nevada de Santa Marta",
            description:
              "Marche à travers la jungle dense de la Sierra Nevada de Santa Marta, traversées de rivières à gué et nuits en campement rustique, à la rencontre de communautés indigènes kogis le long du sentier.",
            descriptionEn:
              "A walk through the dense jungle of the Sierra Nevada de Santa Marta, river crossings on foot, and nights at rustic camps, meeting indigenous Kogi communities along the trail.",
            descriptionEs:
              "Caminata por la densa selva de la Sierra Nevada de Santa Marta, vadeos de ríos y noches en campamentos rústicos, al encuentro de comunidades indígenas kogis a lo largo del sendero.",
            image: `${R2}/journeys/colombie-ciudadperdida-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "L'ascension finale vers la Cité Perdue",
            titleEn: "The final climb to the Lost City",
            titleEs: "El ascenso final hacia la Ciudad Perdida",
            description:
              "Ascension des mille deux cents marches de pierre originales jusqu'aux terrasses circulaires de la Cité Perdue, encore enveloppées par la jungle, avant la longue redescente vers le point de départ.",
            descriptionEn:
              "A climb up the one thousand two hundred original stone steps to the Lost City's circular terraces, still enveloped by jungle, before the long descent back to the starting point.",
            descriptionEs:
              "Ascenso por los mil doscientos escalones de piedra originales hasta las terrazas circulares de la Ciudad Perdida, todavía envueltas por la selva, antes del largo descenso hacia el punto de partida.",
            image: `${R2}/journeys/colombie-ciudadperdida-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "costa-rica",
    tour: {
      name: "Costa Rica : Tortuguero et le Guanacaste",
      nameEn: "Costa Rica: Tortuguero and Guanacaste",
      nameEs: "Costa Rica: Tortuguero y Guanacaste",
      slug: "costa-rica-tortuguero-guanacaste",
      image: `${R2}/journeys/costa-rica-tortuguero-guanacaste-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des canaux tropicaux où naissent les tortues vertes, puis la forêt tropicale sèche et ses plages du Pacifique",
      taglineEn: "Tropical canals where green turtles are born, then dry tropical forest and Pacific beaches",
      taglineEs: "Canales tropicales donde nacen las tortugas verdes, y después el bosque tropical seco y sus playas del Pacífico",
      description:
        "Un voyage entre deux Costa Rica opposés : Tortuguero, réseau de canaux tropicaux accessible uniquement en bateau, où la plus importante population de tortues vertes de l'hémisphère occidental vient pondre chaque année sur les plages, puis le Guanacaste, région de forêt tropicale sèche au climat radicalement différent, dont les plages du Pacifique comptent parmi les plus prisées d'Amérique centrale.",
      descriptionEn:
        "A journey between two opposite sides of Costa Rica: Tortuguero, a network of tropical canals reachable only by boat, where the western hemisphere's largest population of green turtles comes to nest on the beaches each year, then Guanacaste, a dry tropical forest region with a radically different climate, whose Pacific beaches rank among the most sought-after in Central America.",
      descriptionEs:
        "Un viaje entre dos Costa Ricas opuestas: Tortuguero, una red de canales tropicales accesible solo en barco, donde la mayor población de tortugas verdes del hemisferio occidental acude cada año a desovar en las playas, y después Guanacaste, una región de bosque tropical seco de clima radicalmente distinto, cuyas playas del Pacífico se cuentan entre las más codiciadas de Centroamérica.",
      price: 3500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Juil à oct",
      whenLabelEn: "July to Oct",
      whenLabelEs: "Jul a oct",
      bestMonths: "july,august,september,october",
      category: "multi-day",
      theme: "family",
      feeling: "contentment",
      travelerTypes: "family,couples,groups",
      maxGuests: 6,
      featured: false,
      order: 52,
    },
    chapters: [
      {
        title: "Tortuguero et les canaux tropicaux",
        titleEn: "Tortuguero and the Tropical Canals",
        titleEs: "Tortuguero y los canales tropicales",
        intro:
          "Premier chapitre à Tortuguero, surnommé le « petit Amazone » costaricien, accessible uniquement en bateau à travers un réseau de canaux naturels et artificiels bordés de jungle dense. La plage de Tortuguero accueille chaque année la plus importante ponte de tortues vertes de tout l'hémisphère occidental, un spectacle nocturne strictement encadré par des gardes-parcs pour protéger les femelles.",
        introEn:
          "The first chapter unfolds in Tortuguero, nicknamed Costa Rica's \"little Amazon,\" reachable only by boat through a network of natural and artificial canals lined with dense jungle. Tortuguero beach hosts the western hemisphere's largest annual green turtle nesting, a nighttime spectacle strictly supervised by park rangers to protect the females.",
        introEs:
          "El primer capítulo se desarrolla en Tortuguero, apodado el «pequeño Amazonas» costarricense, accesible solo en barco a través de una red de canales naturales y artificiales bordeados de selva densa. La playa de Tortuguero acoge cada año la mayor puesta de tortugas verdes de todo el hemisferio occidental, un espectáculo nocturno estrictamente supervisado por guardaparques para proteger a las hembras.",
        galleryImages: `${R2}/journeys/costa-rica-tortuguero-gallery1.jpg,${R2}/journeys/costa-rica-tortuguero-gallery2.jpg,${R2}/journeys/costa-rica-tortuguero-gallery3.jpg`,
        mapMarkerX: 70,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Navigation dans les canaux de Tortuguero",
            titleEn: "Navigating the canals of Tortuguero",
            titleEs: "Navegación por los canales de Tortuguero",
            description:
              "Navigation en bateau silencieux à travers les canaux de Tortuguero, à la recherche de caïmans, de singes hurleurs et de la riche avifaune qui peuple les rives, avant l'installation au lodge accessible uniquement par voie fluviale.",
            descriptionEn:
              "A silent boat trip through the canals of Tortuguero, in search of caimans, howler monkeys, and the rich birdlife populating the banks, before checking in at a lodge reachable only by river.",
            descriptionEs:
              "Navegación en barco silencioso por los canales de Tortuguero, en busca de caimanes, monos aulladores y la rica avifauna que puebla las orillas, antes de instalarse en un lodge accesible solo por vía fluvial.",
            image: `${R2}/journeys/costa-rica-tortuguero-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La ponte des tortues vertes",
            titleEn: "The nesting of the green turtles",
            titleEs: "La puesta de las tortugas verdes",
            description:
              "Sortie nocturne guidée sur la plage de Tortuguero pour assister, à distance respectueuse, à la ponte des tortues vertes, encadrée par des gardes-parcs qui limitent le nombre de visiteurs et l'usage de la lumière.",
            descriptionEn:
              "A guided night outing on Tortuguero beach to witness, from a respectful distance, the nesting of green turtles, overseen by park rangers who limit visitor numbers and the use of light.",
            descriptionEs:
              "Salida nocturna guiada por la playa de Tortuguero para presenciar, a una distancia respetuosa, la puesta de las tortugas verdes, supervisada por guardaparques que limitan el número de visitantes y el uso de luz.",
            image: `${R2}/journeys/costa-rica-tortuguero-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le Guanacaste et ses plages",
        titleEn: "Guanacaste and its Beaches",
        titleEs: "Guanacaste y sus playas",
        intro:
          "Vol vers le Guanacaste, région de forêt tropicale sèche au climat radicalement différent du reste du pays, où la pluie ne tombe que quelques mois par an. Le parc national de Rincón de la Vieja, dominé par un volcan actif, complète des plages pacifiques comme celle de Playa Conchal, entièrement composée de fragments de coquillages broyés par des siècles de ressac.",
        introEn:
          "A flight to Guanacaste, a dry tropical forest region with a climate radically different from the rest of the country, where rain falls only a few months of the year. Rincón de la Vieja National Park, dominated by an active volcano, complements Pacific beaches such as Playa Conchal, made entirely of shell fragments ground down by centuries of surf.",
        introEs:
          "Vuelo hacia Guanacaste, una región de bosque tropical seco de clima radicalmente distinto al resto del país, donde la lluvia solo cae unos pocos meses al año. El parque nacional de Rincón de la Vieja, dominado por un volcán activo, se complementa con playas pacíficas como Playa Conchal, formada enteramente por fragmentos de conchas molidas por siglos de oleaje.",
        galleryImages: `${R2}/journeys/costa-rica-guanacaste-gallery1.jpg,${R2}/journeys/costa-rica-guanacaste-gallery2.jpg,${R2}/journeys/costa-rica-guanacaste-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Le volcan Rincón de la Vieja et ses sources chaudes",
            titleEn: "Rincón de la Vieja volcano and its hot springs",
            titleEs: "El volcán Rincón de la Vieja y sus aguas termales",
            description:
              "Randonnée dans le parc national de Rincón de la Vieja, entre fumerolles volcaniques et bains de boue naturels, puis détente dans des sources chaudes alimentées par l'activité géothermique du volcan.",
            descriptionEn:
              "A hike in Rincón de la Vieja National Park, between volcanic fumaroles and natural mud baths, then relaxation in hot springs fed by the volcano's geothermal activity.",
            descriptionEs:
              "Caminata por el parque nacional de Rincón de la Vieja, entre fumarolas volcánicas y baños de barro naturales, y relax en aguas termales alimentadas por la actividad geotérmica del volcán.",
            image: `${R2}/journeys/costa-rica-guanacaste-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Playa Conchal et coucher de soleil sur le Pacifique",
            titleEn: "Playa Conchal and sunset over the Pacific",
            titleEs: "Playa Conchal y atardecer sobre el Pacífico",
            description:
              "Journée de plage à Playa Conchal, entièrement composée de coquillages broyés, avec possibilité de snorkeling dans une eau translucide, avant un dernier coucher de soleil sur le Pacifique.",
            descriptionEn:
              "A beach day at Playa Conchal, made entirely of crushed shells, with the chance to snorkel in translucent water, before one last sunset over the Pacific.",
            descriptionEs:
              "Día de playa en Playa Conchal, formada enteramente por conchas molidas, con posibilidad de hacer esnórquel en aguas translúcidas, antes de un último atardecer sobre el Pacífico.",
            image: `${R2}/journeys/costa-rica-guanacaste-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "bresil",
    tour: {
      name: "Brésil : Salvador de Bahia, l'âme afro-brésilienne",
      nameEn: "Brazil: Salvador de Bahia, the Afro-Brazilian Soul",
      nameEs: "Brasil: Salvador de Bahía, el alma afrobrasileña",
      slug: "bresil-salvador-bahia",
      image: `${R2}/tours/bresil-salvador-bahia.jpg`,
      images: `${R2}/trips/bresil-salvador-gallery-1.jpg,${R2}/trips/bresil-salvador-gallery-2.jpg,${R2}/trips/bresil-salvador-gallery-3.jpg,${R2}/trips/bresil-salvador-gallery-4.jpg,${R2}/trips/bresil-salvador-gallery-5.jpg,${R2}/trips/bresil-salvador-gallery-6.jpg`,
      tagline: "Le berceau de la capoeira et du candomblé, dans le plus grand centre historique colonial d'Amérique",
      taglineEn: "The birthplace of capoeira and candomblé, in the Americas' largest colonial historic centre",
      taglineEs: "La cuna de la capoeira y el candomblé, en el mayor centro histórico colonial de América",
      description:
        "Salvador de Bahia, première capitale du Brésil colonial, concentre l'héritage africain le plus vivant du pays : le Pelourinho, centre historique classé à l'UNESCO aux façades colorées, résonne du son des tambours de l'afoxé et des rodas de capoeira improvisées, tandis que les terreiros de candomblé perpétuent des cultes religieux d'origine yoruba transmis depuis l'époque de l'esclavage.",
      descriptionEn:
        "Salvador de Bahia, Brazil's first colonial capital, concentrates the country's most vivid African heritage: the Pelourinho, a UNESCO-listed historic centre with colourful facades, resounds with afoxé drumming and impromptu capoeira circles, while candomblé terreiros keep alive Yoruba-rooted religious practices passed down since the era of slavery.",
      descriptionEs:
        "Salvador de Bahía, primera capital del Brasil colonial, concentra el legado africano más vivo del país: el Pelourinho, centro histórico declarado por la UNESCO de fachadas coloridas, resuena con los tambores del afoxé y las ruedas de capoeira improvisadas, mientras que los terreiros de candomblé perpetúan cultos religiosos de origen yoruba transmitidos desde la época de la esclavitud.",
      price: 2700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Sept à nov | Mars-avr",
      whenLabelEn: "Sept to Nov | March-April",
      whenLabelEs: "Sept a nov | marzo-abr",
      bestMonths: "september,october,november,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 53,
    },
    sections: [
      {
        heading: "Le Pelourinho et ses rythmes",
        headingEn: "The Pelourinho and its rhythms",
        headingEs: "El Pelourinho y sus ritmos",
        body:
          "Le Pelourinho, plus vaste ensemble d'architecture coloniale portugaise d'Amérique, se visite au son des tambours : cours de capoeira en plein air, écoles de percussion afro-brésilienne comme l'Olodum, et églises baroques couvertes d'or, dont celle de São Francisco, dont l'intérieur rivalise avec les plus riches du Portugal.",
        bodyEn:
          "The Pelourinho, the largest ensemble of Portuguese colonial architecture in the Americas, is explored to the sound of drums: open-air capoeira classes, Afro-Brazilian percussion schools like Olodum, and gold-covered baroque churches, including São Francisco, whose interior rivals the richest in Portugal.",
        bodyEs:
          "El Pelourinho, el mayor conjunto de arquitectura colonial portuguesa de América, se visita al son de los tambores: clases de capoeira al aire libre, escuelas de percusión afrobrasileña como Olodum, e iglesias barrocas cubiertas de oro, entre ellas la de São Francisco, cuyo interior rivaliza con las más ricas de Portugal.",
      },
      {
        heading: "Candomblé et cuisine bahianaise",
        headingEn: "Candomblé and Bahian cuisine",
        headingEs: "Candomblé y cocina bahiana",
        body:
          "Une visite guidée d'un terreiro de candomblé, avec l'accord préalable de la communauté religieuse, permet de comprendre ce culte afro-brésilien né de la rencontre forcée entre traditions yoruba et catholicisme colonial. La cuisine bahianaise, héritière directe de cette histoire, se déguste dans les baianas do acarajé, vendeuses de rue en costume traditionnel qui frisent l'acarajé, beignet de haricots noirs, sur des rues entières du centre.",
        bodyEn:
          "A guided visit to a candomblé terreiro, with the religious community's prior agreement, offers insight into this Afro-Brazilian faith born of the forced encounter between Yoruba traditions and colonial Catholicism. Bahian cuisine, a direct heir to this history, is savoured from the baianas do acarajé, street vendors in traditional dress who fry acarajé, black-eyed pea fritters, along entire streets of the centre.",
        bodyEs:
          "Una visita guiada a un terreiro de candomblé, con el acuerdo previo de la comunidad religiosa, permite comprender este culto afrobrasileño nacido del encuentro forzado entre tradiciones yoruba y catolicismo colonial. La cocina bahiana, heredera directa de esta historia, se degusta en las baianas do acarajé, vendedoras callejeras en traje tradicional que fríen el acarajé, buñuelo de frijoles negros, a lo largo de calles enteras del centro.",
      },
    ],
    hotels: [
      {
        name: "Fera Palace Hotel",
        nameEn: "Fera Palace Hotel",
        nameEs: "Fera Palace Hotel",
        description:
          "Un hôtel Art déco des années 1940 entièrement rénové, situé face à la baie de Todos os Santos, à deux pas du Pelourinho.",
        descriptionEn:
          "A fully renovated 1940s Art Deco hotel, facing the Bay of All Saints, steps from the Pelourinho.",
        descriptionEs:
          "Un hotel Art Déco de los años 1940 totalmente renovado, frente a la bahía de Todos los Santos, a pocos pasos del Pelourinho.",
        image: `${R2}/trips/bresil-salvador-hotel-fera.jpg`,
      },
      {
        name: "Convento do Carmo",
        nameEn: "Convento do Carmo",
        nameEs: "Convento do Carmo",
        description:
          "Un ancien couvent du XVIIe siècle transformé en hôtel de charme, cellules de moines converties en chambres, cloître silencieux au cœur de la ville animée.",
        descriptionEn:
          "A former 17th-century convent turned boutique hotel, monks' cells converted into rooms, a silent cloister at the heart of the lively city.",
        descriptionEs:
          "Un antiguo convento del siglo XVII convertido en hotel con encanto, celdas de monjes transformadas en habitaciones, claustro silencioso en el corazón de la animada ciudad.",
        image: `${R2}/trips/bresil-salvador-hotel-convento.jpg`,
      },
    ],
  },
  {
    destinationSlug: "colombie",
    tour: {
      name: "Colombie : Bogotá et Villa de Leyva, les hauts plateaux andins",
      nameEn: "Colombia: Bogotá and Villa de Leyva, the Andean Highlands",
      nameEs: "Colombia: Bogotá y Villa de Leyva, los altiplanos andinos",
      slug: "colombie-bogota-villa-de-leyva",
      image: `${R2}/tours/colombie-bogota-villa-de-leyva.jpg`,
      images: `${R2}/trips/colombie-bogota-gallery-1.jpg,${R2}/trips/colombie-bogota-gallery-2.jpg,${R2}/trips/colombie-bogota-gallery-3.jpg,${R2}/trips/colombie-bogota-gallery-4.jpg,${R2}/trips/colombie-bogota-gallery-5.jpg,${R2}/trips/colombie-bogota-gallery-6.jpg`,
      tagline: "Une capitale à deux mille six cents mètres d'altitude, puis l'une des plus grandes places pavées d'Amérique du Sud",
      taglineEn: "A capital at two thousand six hundred metres, then one of South America's largest cobblestone squares",
      taglineEs: "Una capital a dos mil seiscientos metros de altitud, y después una de las plazas empedradas más grandes de Sudamérica",
      description:
        "Loin de la côte caraïbe, le centre andin de la Colombie révèle un pays différent : Bogotá, capitale perchée à deux mille six cents mètres, dont le quartier colonial de La Candelaria et le musée de l'Or comptent parmi les plus riches d'Amérique latine, puis Villa de Leyva, village colonial figé dans le temps autour d'une place pavée de plus de quatorze mille mètres carrés, l'une des plus grandes du continent.",
      descriptionEn:
        "Far from the Caribbean coast, Colombia's Andean heartland reveals a different country: Bogotá, a capital perched at two thousand six hundred metres, whose colonial La Candelaria district and Gold Museum rank among the richest in Latin America, then Villa de Leyva, a colonial village frozen in time around a cobblestone square of over fourteen thousand square metres, one of the largest on the continent.",
      descriptionEs:
        "Lejos de la costa caribeña, el centro andino de Colombia revela un país distinto: Bogotá, capital encaramada a dos mil seiscientos metros, cuyo barrio colonial de La Candelaria y Museo del Oro se cuentan entre los más ricos de Latinoamérica, y después Villa de Leyva, pueblo colonial detenido en el tiempo en torno a una plaza empedrada de más de catorce mil metros cuadrados, una de las más grandes del continente.",
      price: 2500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Déc à fév | Juil-août",
      whenLabelEn: "Dec to Feb | July-Aug",
      whenLabelEs: "Dic a feb | jul-ago",
      bestMonths: "december,january,february,july,august",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 54,
    },
    sections: [
      {
        heading: "Bogotá, La Candelaria et le musée de l'Or",
        headingEn: "Bogotá, La Candelaria, and the Gold Museum",
        headingEs: "Bogotá, La Candelaria y el Museo del Oro",
        body:
          "Le quartier colonial de La Candelaria, aux façades multicolores et balcons de bois sculpté, concentre l'essentiel du patrimoine historique de Bogotá, tandis que le musée de l'Or conserve plus de trente-quatre mille pièces d'orfèvrerie précolombienne, dont la célèbre balsa muisca qui aurait inspiré la légende d'El Dorado. Le funiculaire jusqu'au sommet du Monserrate offre une vue d'ensemble sur les huit millions d'habitants de la capitale.",
        bodyEn:
          "The colonial La Candelaria district, with its multicoloured facades and carved wooden balconies, concentrates the bulk of Bogotá's historic heritage, while the Gold Museum holds over thirty-four thousand pieces of pre-Columbian goldwork, including the famous Muisca raft believed to have inspired the legend of El Dorado. A funicular to the top of Monserrate offers an overview of the capital's eight million inhabitants.",
        bodyEs:
          "El barrio colonial de La Candelaria, de fachadas multicolores y balcones de madera tallada, concentra la mayor parte del patrimonio histórico de Bogotá, mientras que el Museo del Oro conserva más de treinta y cuatro mil piezas de orfebrería precolombina, entre ellas la célebre balsa muisca que habría inspirado la leyenda de El Dorado. El funicular hasta la cima de Monserrate ofrece una vista de conjunto de los ocho millones de habitantes de la capital.",
      },
      {
        heading: "Villa de Leyva, figée dans le temps",
        headingEn: "Villa de Leyva, frozen in time",
        headingEs: "Villa de Leyva, detenida en el tiempo",
        body:
          "Villa de Leyva, fondée en 1572, doit sa préservation exceptionnelle à l'absence de gisements miniers dans la région, qui a détourné les colons espagnols et laissé la ville presque intacte depuis quatre siècles. Sa place principale, entièrement pavée de larges pierres irrégulières, reste l'une des plus vastes d'Amérique du Sud, tandis que les environs abritent des fossiles marins vieux de plusieurs millions d'années, vestiges d'un océan disparu.",
        bodyEn:
          "Villa de Leyva, founded in 1572, owes its exceptional preservation to the absence of mineral deposits in the region, which diverted Spanish colonists and left the town almost untouched for four centuries. Its main square, entirely paved with large irregular stones, remains one of the largest in South America, while the surrounding area holds marine fossils millions of years old, remnants of a vanished ocean.",
        bodyEs:
          "Villa de Leyva, fundada en 1572, debe su excepcional conservación a la ausencia de yacimientos mineros en la región, lo que desvió a los colonos españoles y dejó la ciudad casi intacta durante cuatro siglos. Su plaza principal, enteramente empedrada con grandes piedras irregulares, sigue siendo una de las más extensas de Sudamérica, mientras que los alrededores albergan fósiles marinos de varios millones de años, vestigios de un océano desaparecido.",
      },
    ],
    hotels: [
      {
        name: "Click Clack Hotel Bogotá",
        nameEn: "Click Clack Hotel Bogotá",
        nameEs: "Click Clack Hotel Bogotá",
        description:
          "Un hôtel design dans le quartier branché de Chapinero, décoration industrielle et bar sur le toit avec vue sur les collines qui encerclent la ville.",
        descriptionEn:
          "A design hotel in the trendy Chapinero district, industrial decor and a rooftop bar with a view of the hills ringing the city.",
        descriptionEs:
          "Un hotel de diseño en el animado barrio de Chapinero, decoración industrial y bar en la azotea con vistas a las colinas que rodean la ciudad.",
        image: `${R2}/trips/colombie-bogota-hotel-clickclack.jpg`,
      },
      {
        name: "Hotel Plaza Mayor Villa de Leyva",
        nameEn: "Hotel Plaza Mayor Villa de Leyva",
        nameEs: "Hotel Plaza Mayor Villa de Leyva",
        description:
          "Un hôtel colonial rénové à deux pas de la place principale, patio intérieur fleuri et murs blanchis à la chaux typiques de la région.",
        descriptionEn:
          "A renovated colonial hotel steps from the main square, a flowering inner courtyard and whitewashed walls typical of the region.",
        descriptionEs:
          "Un hotel colonial renovado a pocos pasos de la plaza principal, patio interior florido y muros encalados típicos de la región.",
        image: `${R2}/trips/colombie-bogota-hotel-plazamayor.jpg`,
      },
    ],
  },
  {
    destinationSlug: "costa-rica",
    tour: {
      name: "Costa Rica : la péninsule d'Osa, la jungle la plus intense de la planète",
      nameEn: "Costa Rica: The Osa Peninsula, the Most Intense Jungle on Earth",
      nameEs: "Costa Rica: la península de Osa, la selva más intensa del planeta",
      slug: "costa-rica-osa",
      image: `${R2}/tours/costa-rica-osa.jpg`,
      images: `${R2}/trips/costa-rica-osa-gallery-1.jpg,${R2}/trips/costa-rica-osa-gallery-2.jpg,${R2}/trips/costa-rica-osa-gallery-3.jpg,${R2}/trips/costa-rica-osa-gallery-4.jpg,${R2}/trips/costa-rica-osa-gallery-5.jpg,${R2}/trips/costa-rica-osa-gallery-6.jpg`,
      tagline: "Surnommée par le National Geographic « l'endroit le plus intensément biodivers de la Terre »",
      taglineEn: "Called by National Geographic 'the most biologically intense place on Earth'",
      taglineEs: "Apodada por National Geographic «el lugar más biológicamente intenso de la Tierra»",
      description:
        "La péninsule d'Osa, dans le sud reculé du Costa Rica, abrite le parc national de Corcovado, surnommé par le magazine National Geographic « l'endroit le plus intensément biodivers de la Terre ». Loin des circuits touristiques classiques du pays, la péninsule reste l'un des derniers refuges du jaguar, du tapir de Baird et de l'ara rouge en Amérique centrale, accessible uniquement par avion léger ou par une route non goudronnée.",
      descriptionEn:
        "The Osa Peninsula, in Costa Rica's remote south, is home to Corcovado National Park, nicknamed by National Geographic magazine \"the most biologically intense place on Earth.\" Far from the country's usual tourist circuits, the peninsula remains one of Central America's last refuges for jaguars, Baird's tapirs, and scarlet macaws, accessible only by light aircraft or an unpaved road.",
      descriptionEs:
        "La península de Osa, en el sur remoto de Costa Rica, alberga el parque nacional de Corcovado, apodado por la revista National Geographic «el lugar más biológicamente intenso de la Tierra». Lejos de los circuitos turísticos habituales del país, la península sigue siendo uno de los últimos refugios del jaguar, el tapir de Baird y la guacamaya roja en Centroamérica, accesible solo en avioneta o por una carretera sin asfaltar.",
      price: 3600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 55,
    },
    sections: [
      {
        heading: "Le parc national de Corcovado",
        headingEn: "Corcovado National Park",
        headingEs: "El parque nacional de Corcovado",
        body:
          "Corcovado protège la plus grande étendue de forêt tropicale humide de plaine encore intacte sur la côte Pacifique d'Amérique centrale. Les randonnées guidées, obligatoires dans le parc, permettent d'observer les quatre espèces de singes du pays, des tapirs de Baird se baignant dans les rivières, et, avec beaucoup de chance, les empreintes fraîches d'un jaguar, prédateur dont la population s'est stabilisée grâce à des décennies de protection stricte.",
        bodyEn:
          "Corcovado protects the largest expanse of intact lowland rainforest remaining on Central America's Pacific coast. Guided hikes, mandatory within the park, allow visitors to observe the country's four monkey species, Baird's tapirs bathing in rivers, and, with a lot of luck, the fresh tracks of a jaguar, a predator whose population has stabilised thanks to decades of strict protection.",
        bodyEs:
          "Corcovado protege la mayor extensión de selva tropical húmeda de tierras bajas que aún permanece intacta en la costa pacífica de Centroamérica. Las caminatas guiadas, obligatorias dentro del parque, permiten observar las cuatro especies de monos del país, tapires de Baird bañándose en los ríos y, con mucha suerte, las huellas frescas de un jaguar, un depredador cuya población se ha estabilizado gracias a décadas de protección estricta.",
      },
      {
        heading: "Snorkeling au Caño Island et plages sauvages",
        headingEn: "Snorkelling at Caño Island and wild beaches",
        headingEs: "Esnórquel en la isla del Caño y playas salvajes",
        body:
          "Une excursion en bateau vers l'île de Caño, réserve biologique protégée entourée de récifs coralliens, permet d'observer tortues marines, raies et parfois des requins-baleines de passage. Les plages sauvages qui bordent la péninsule, presque toujours désertes, offrent un contraste saisissant avec les stations balnéaires plus fréquentées du reste du pays.",
        bodyEn:
          "A boat excursion to Caño Island, a protected biological reserve surrounded by coral reefs, allows sightings of sea turtles, rays, and occasionally passing whale sharks. The wild beaches lining the peninsula, almost always deserted, offer a striking contrast to the more crowded resort towns elsewhere in the country.",
        bodyEs:
          "Una excursión en barco a la isla del Caño, reserva biológica protegida rodeada de arrecifes de coral, permite observar tortugas marinas, rayas y a veces tiburones ballena de paso. Las playas salvajes que bordean la península, casi siempre desiertas, ofrecen un contraste llamativo con las localidades turísticas más concurridas del resto del país.",
      },
    ],
    hotels: [
      {
        name: "Lapa Rios Lodge",
        nameEn: "Lapa Rios Lodge",
        nameEs: "Lapa Rios Lodge",
        description:
          "Un lodge de bungalows en pleine réserve privée en surplomb de l'océan, architecture ouverte sur la jungle, guides naturalistes résidents.",
        descriptionEn:
          "A lodge of bungalows within a private reserve overlooking the ocean, architecture open to the jungle, resident naturalist guides.",
        descriptionEs:
          "Un lodge de bungalós en plena reserva privada con vistas al océano, arquitectura abierta a la selva, guías naturalistas residentes.",
        image: `${R2}/trips/costa-rica-osa-hotel-laparios.jpg`,
      },
      {
        name: "Corcovado Wilderness Lodge",
        nameEn: "Corcovado Wilderness Lodge",
        nameEs: "Corcovado Wilderness Lodge",
        description:
          "Un lodge plus rustique aux abords immédiats du parc national, tentes de toile sur plateforme en bois, dîners communautaires à la lueur des bougies.",
        descriptionEn:
          "A more rustic lodge on the immediate edge of the national park, canvas tents on wooden platforms, communal candlelit dinners.",
        descriptionEs:
          "Un lodge más rústico en los límites inmediatos del parque nacional, tiendas de lona sobre plataformas de madera, cenas comunitarias a la luz de las velas.",
        image: `${R2}/trips/costa-rica-osa-hotel-corcovado.jpg`,
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
