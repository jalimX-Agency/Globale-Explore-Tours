// Amérique du Sud batch 3 — Ecuador, Bolivia, Panama. New trips bringing each destination to
// at least 3, styled on Black Tomato's real structure (a short number of named-hotel chapters,
// not an exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-amerique-du-sud-3.ts
// Requires scripts/upload-images-amerique-du-sud-3.ts to have been run first (this script
// refuses to write anything if a referenced image isn't already live in R2 — see
// seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "equateur",
    tour: {
      name: "Équateur : l'avenue des Volcans et Cuenca",
      nameEn: "Ecuador: the Avenue of the Volcanoes and Cuenca",
      nameEs: "Ecuador: la avenida de los Volcanes y Cuenca",
      slug: "equateur-avenue-volcans-cuenca",
      image: `${R2}/journeys/equateur-volcans-cuenca-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un volcan parmi les plus symétriques du monde, puis la ville coloniale la mieux préservée du pays",
      taglineEn: "One of the world's most symmetrical volcanoes, then the country's best-preserved colonial city",
      taglineEs: "Uno de los volcanes más simétricos del mundo, y después la ciudad colonial mejor conservada del país",
      description:
        "Un voyage à travers le sud des Andes équatoriennes, surnommé « l'avenue des Volcans » par l'explorateur Alexander von Humboldt : le Cotopaxi, l'un des volcans actifs les plus symétriques du monde, puis Cuenca, ville coloniale classée à l'UNESCO dont les toits de tuile rouge et les rivières bordées de saules pleureurs en font la mieux préservée du pays.",
      descriptionEn:
        "A journey through the southern Ecuadorian Andes, nicknamed the \"Avenue of the Volcanoes\" by explorer Alexander von Humboldt: Cotopaxi, one of the world's most symmetrical active volcanoes, then Cuenca, a UNESCO-listed colonial city whose red-tile roofs and willow-lined rivers make it the country's best-preserved.",
      descriptionEs:
        "Un viaje por el sur de los Andes ecuatorianos, apodado la «avenida de los Volcanes» por el explorador Alexander von Humboldt: el Cotopaxi, uno de los volcanes activos más simétricos del mundo, y después Cuenca, ciudad colonial declarada por la UNESCO cuyos tejados de teja roja y ríos bordeados de sauces llorones la convierten en la mejor conservada del país.",
      price: 3200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Juin à sept",
      whenLabelEn: "June to Sept",
      whenLabelEs: "Jun a sept",
      bestMonths: "june,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 56,
    },
    chapters: [
      {
        title: "Le volcan Cotopaxi",
        titleEn: "Cotopaxi Volcano",
        titleEs: "El volcán Cotopaxi",
        intro:
          "Premier chapitre au pied du Cotopaxi, volcan actif culminant à près de cinq mille neuf cents mètres et considéré comme l'un des plus symétriques de la planète. Le parc national environnant, páramo d'altitude où paissent des chevaux sauvages, permet une randonnée jusqu'au refuge José Rivas, à plus de quatre mille sept cents mètres, avec une vue directe sur le glacier sommital.",
        introEn:
          "The first chapter unfolds at the foot of Cotopaxi, an active volcano rising to nearly five thousand nine hundred metres and considered one of the most symmetrical on the planet. The surrounding national park, a high-altitude páramo grazed by wild horses, allows a hike to the José Rivas refuge, over four thousand seven hundred metres up, with a direct view of the summit glacier.",
        introEs:
          "El primer capítulo se desarrolla al pie del Cotopaxi, volcán activo que culmina a casi cinco mil novecientos metros y considerado uno de los más simétricos del planeta. El parque nacional circundante, un páramo de altitud donde pastan caballos salvajes, permite una caminata hasta el refugio José Rivas, a más de cuatro mil setecientos metros, con vista directa al glaciar de la cumbre.",
        galleryImages: `${R2}/journeys/equateur-cotopaxi-gallery1.jpg,${R2}/journeys/equateur-cotopaxi-gallery2.jpg,${R2}/journeys/equateur-cotopaxi-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 35,
        days: [
          {
            dayNumber: 1,
            title: "Le páramo et les chevaux sauvages",
            titleEn: "The páramo and the wild horses",
            titleEs: "El páramo y los caballos salvajes",
            description:
              "Arrivée au parc national Cotopaxi, randonnée à travers le páramo d'altitude où paissent des troupeaux de chevaux sauvages, avec une vue constante sur le cône presque parfait du volcan.",
            descriptionEn:
              "Arrival at Cotopaxi National Park, a hike through the high-altitude páramo where herds of wild horses graze, with a constant view of the volcano's near-perfect cone.",
            descriptionEs:
              "Llegada al parque nacional Cotopaxi, caminata por el páramo de altitud donde pastan manadas de caballos salvajes, con vista constante al cono casi perfecto del volcán.",
            image: `${R2}/journeys/equateur-cotopaxi-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Ascension jusqu'au refuge José Rivas",
            titleEn: "The climb to the José Rivas refuge",
            titleEs: "Ascensión hasta el refugio José Rivas",
            description:
              "Randonnée jusqu'au refuge José Rivas, à plus de quatre mille sept cents mètres d'altitude, point de départ des expéditions vers le sommet, avec une vue frontale sur le glacier qui coiffe le volcan.",
            descriptionEn:
              "A hike to the José Rivas refuge, over four thousand seven hundred metres up, the starting point for summit expeditions, with a head-on view of the glacier capping the volcano.",
            descriptionEs:
              "Caminata hasta el refugio José Rivas, a más de cuatro mil setecientos metros de altitud, punto de partida de las expediciones a la cumbre, con vista frontal al glaciar que corona el volcán.",
            image: `${R2}/journeys/equateur-cotopaxi-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Cuenca, la ville coloniale",
        titleEn: "Cuenca, the Colonial City",
        titleEs: "Cuenca, la ciudad colonial",
        intro:
          "Route vers Cuenca, classée au patrimoine mondial de l'UNESCO pour son plan urbain hérité de la Renaissance espagnole et son architecture coloniale exceptionnellement préservée. La ville, traversée par quatre rivières bordées de saules pleureurs, est aussi le principal centre de fabrication du chapeau dit « panama », en réalité originaire d'Équateur et non du pays voisin.",
        introEn:
          "The road to Cuenca, a UNESCO World Heritage Site for its Spanish Renaissance-inspired urban plan and exceptionally preserved colonial architecture. The city, crossed by four rivers lined with weeping willows, is also the main production centre for the so-called \"Panama hat,\" which actually originates in Ecuador, not the neighbouring country.",
        introEs:
          "Ruta hacia Cuenca, declarada Patrimonio Mundial de la UNESCO por su trazado urbano heredado del Renacimiento español y su arquitectura colonial excepcionalmente conservada. La ciudad, atravesada por cuatro ríos bordeados de sauces llorones, es también el principal centro de fabricación del llamado sombrero «panamá», en realidad originario de Ecuador y no del país vecino.",
        galleryImages: `${R2}/journeys/equateur-cuenca-gallery1.jpg,${R2}/journeys/equateur-cuenca-gallery2.jpg,${R2}/journeys/equateur-cuenca-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Le centre historique et les rivières de Cuenca",
            titleEn: "Cuenca's historic centre and rivers",
            titleEs: "El centro histórico y los ríos de Cuenca",
            description:
              "Visite du centre historique de Cuenca, cathédrale aux dômes bleus et façades coloniales intactes, puis promenade le long du río Tomebamba, bordé de saules pleureurs et de maisons suspendues.",
            descriptionEn:
              "A visit to Cuenca's historic centre, a cathedral with blue domes and intact colonial facades, then a walk along the Río Tomebamba, lined with weeping willows and hanging houses.",
            descriptionEs:
              "Visita al centro histórico de Cuenca, catedral de cúpulas azules y fachadas coloniales intactas, y paseo a lo largo del río Tomebamba, bordeado de sauces llorones y casas colgantes.",
            image: `${R2}/journeys/equateur-cuenca-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les ateliers du chapeau panama et le parc national Cajas",
            titleEn: "The Panama hat workshops and Cajas National Park",
            titleEs: "Los talleres del sombrero panamá y el parque nacional Cajas",
            description:
              "Visite d'un atelier familial de fabrication du chapeau panama, tissé à la main à partir de fibres de paille toquilla, puis excursion au parc national Cajas, paysage de lacs glaciaires et de páramo à plus de quatre mille mètres.",
            descriptionEn:
              "A visit to a family workshop making Panama hats, hand-woven from toquilla straw fibres, then an excursion to Cajas National Park, a landscape of glacial lakes and páramo above four thousand metres.",
            descriptionEs:
              "Visita a un taller familiar de fabricación del sombrero panamá, tejido a mano con fibras de paja toquilla, y excursión al parque nacional Cajas, paisaje de lagos glaciares y páramo a más de cuatro mil metros.",
            image: `${R2}/journeys/equateur-cuenca-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "bolivie",
    tour: {
      name: "Bolivie : Sucre et Potosí, les villes de l'argent colonial",
      nameEn: "Bolivia: Sucre and Potosí, the Colonial Silver Towns",
      nameEs: "Bolivia: Sucre y Potosí, las ciudades de la plata colonial",
      slug: "bolivie-sucre-potosi",
      image: `${R2}/journeys/bolivie-sucre-potosi-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La capitale constitutionnelle toute blanche, puis la montagne qui a longtemps financé l'empire espagnol",
      taglineEn: "The all-white constitutional capital, then the mountain that once financed the Spanish empire",
      taglineEs: "La capital constitucional totalmente blanca, y después la montaña que financió durante siglos al imperio español",
      description:
        "Un voyage à travers l'histoire coloniale de la Bolivie : Sucre, capitale constitutionnelle du pays dont le centre historique entièrement blanchi à la chaux lui a valu son classement à l'UNESCO, puis Potosí, ville minière fondée au pied du Cerro Rico, montagne dont l'argent extrait pendant des siècles a longtemps financé l'empire espagnol, au prix d'un coût humain considérable pour les mineurs indigènes et africains.",
      descriptionEn:
        "A journey through Bolivia's colonial history: Sucre, the country's constitutional capital, whose entirely whitewashed historic centre earned it UNESCO status, then Potosí, a mining town founded at the foot of Cerro Rico, a mountain whose silver, extracted for centuries, long financed the Spanish empire, at considerable human cost to Indigenous and African miners.",
      descriptionEs:
        "Un viaje a través de la historia colonial de Bolivia: Sucre, capital constitucional del país, cuyo centro histórico enteramente encalado le valió su declaración por la UNESCO, y después Potosí, ciudad minera fundada al pie del Cerro Rico, montaña cuya plata, extraída durante siglos, financió largamente al imperio español, a un coste humano considerable para los mineros indígenas y africanos.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avr à oct",
      whenLabelEn: "April to Oct",
      whenLabelEs: "Abr a oct",
      bestMonths: "april,may,june,july,august,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 57,
    },
    chapters: [
      {
        title: "Sucre, la ville blanche",
        titleEn: "Sucre, the White City",
        titleEs: "Sucre, la ciudad blanca",
        intro:
          "Premier chapitre à Sucre, capitale constitutionnelle de la Bolivie dont une ordonnance municipale impose depuis des générations le blanchiment à la chaux de toutes les façades du centre historique, classé à l'UNESCO. La Casa de la Libertad, où fut signée la déclaration d'indépendance du pays en 1825, et le couvent de San Felipe Neri, dont les toits en terrasse offrent une vue d'ensemble sur la ville, résument l'importance historique de Sucre dans la construction de la nation.",
        introEn:
          "The first chapter unfolds in Sucre, Bolivia's constitutional capital, where a municipal ordinance has for generations required all facades in the UNESCO-listed historic centre to be whitewashed. The Casa de la Libertad, where the country's declaration of independence was signed in 1825, and the Convent of San Felipe Neri, whose terraced roofs offer a panoramic view of the city, sum up Sucre's historical importance in building the nation.",
        introEs:
          "El primer capítulo se desarrolla en Sucre, capital constitucional de Bolivia, donde una ordenanza municipal exige desde hace generaciones el encalado de todas las fachadas del centro histórico, declarado por la UNESCO. La Casa de la Libertad, donde se firmó la declaración de independencia del país en 1825, y el convento de San Felipe Neri, cuyos tejados en terraza ofrecen una vista de conjunto de la ciudad, resumen la importancia histórica de Sucre en la construcción de la nación.",
        galleryImages: `${R2}/journeys/bolivie-sucre-gallery1.jpg,${R2}/journeys/bolivie-sucre-gallery2.jpg,${R2}/journeys/bolivie-sucre-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "La Casa de la Libertad et le centre blanc",
            titleEn: "The Casa de la Libertad and the white centre",
            titleEs: "La Casa de la Libertad y el centro blanco",
            description:
              "Visite de la Casa de la Libertad, où fut signée la déclaration d'indépendance bolivienne, puis promenade dans le centre historique entièrement blanchi à la chaux, entre places ombragées et façades néoclassiques.",
            descriptionEn:
              "A visit to the Casa de la Libertad, where Bolivia's declaration of independence was signed, then a walk through the entirely whitewashed historic centre, between shaded squares and neoclassical facades.",
            descriptionEs:
              "Visita a la Casa de la Libertad, donde se firmó la declaración de independencia boliviana, y paseo por el centro histórico completamente encalado, entre plazas con sombra y fachadas neoclásicas.",
            image: `${R2}/journeys/bolivie-sucre-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le couvent de San Felipe Neri et les empreintes de dinosaures",
            titleEn: "The Convent of San Felipe Neri and the dinosaur tracks",
            titleEs: "El convento de San Felipe Neri y las huellas de dinosaurios",
            description:
              "Montée sur les toits-terrasses du couvent de San Felipe Neri pour une vue d'ensemble sur la ville blanche, puis excursion vers Cal Orck'o, paroi rocheuse verticale portant plus de cinq mille empreintes de dinosaures fossilisées.",
            descriptionEn:
              "A climb to the terraced rooftops of the Convent of San Felipe Neri for a panoramic view of the white city, then an excursion to Cal Orck'o, a vertical rock face bearing over five thousand fossilised dinosaur tracks.",
            descriptionEs:
              "Subida a los tejados en terraza del convento de San Felipe Neri para una vista de conjunto de la ciudad blanca, y excursión a Cal Orck'o, una pared rocosa vertical con más de cinco mil huellas fosilizadas de dinosaurios.",
            image: `${R2}/journeys/bolivie-sucre-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Potosí et le Cerro Rico",
        titleEn: "Potosí and Cerro Rico",
        titleEs: "Potosí y el Cerro Rico",
        intro:
          "Route vers Potosí, ville la plus haute du monde à plus de quatre mille mètres, fondée au XVIe siècle au pied du Cerro Rico, dont les gisements d'argent parmi les plus riches jamais découverts ont longtemps financé l'empire espagnol. La ville, classée à l'UNESCO, conserve l'ancienne Casa de la Moneda, où était frappée la monnaie coloniale, tandis que les mines, encore en activité aujourd'hui à échelle artisanale, se visitent en compagnie d'anciens mineurs devenus guides.",
        introEn:
          "The road to Potosí, the highest city in the world at over four thousand metres, founded in the 16th century at the foot of Cerro Rico, whose silver deposits, among the richest ever discovered, long financed the Spanish empire. The UNESCO-listed city preserves the old Casa de la Moneda, where colonial coinage was minted, while the mines, still active today on a small scale, can be visited with former miners turned guides.",
        introEs:
          "Ruta hacia Potosí, la ciudad más alta del mundo a más de cuatro mil metros, fundada en el siglo XVI al pie del Cerro Rico, cuyos yacimientos de plata, entre los más ricos jamás descubiertos, financiaron durante mucho tiempo al imperio español. La ciudad, declarada por la UNESCO, conserva la antigua Casa de la Moneda, donde se acuñaba la moneda colonial, mientras que las minas, todavía activas hoy a pequeña escala, se visitan junto a antiguos mineros convertidos en guías.",
        galleryImages: `${R2}/journeys/bolivie-potosi-gallery1.jpg,${R2}/journeys/bolivie-potosi-gallery2.jpg,${R2}/journeys/bolivie-potosi-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "La Casa de la Moneda et le centre colonial",
            titleEn: "The Casa de la Moneda and the colonial centre",
            titleEs: "La Casa de la Moneda y el centro colonial",
            description:
              "Visite de la Casa de la Moneda, ancienne fabrique de monnaie coloniale abritant aujourd'hui l'un des plus riches musées d'Amérique du Sud, puis promenade dans le centre colonial classé à l'UNESCO.",
            descriptionEn:
              "A visit to the Casa de la Moneda, a former colonial mint now housing one of South America's richest museums, then a walk through the UNESCO-listed colonial centre.",
            descriptionEs:
              "Visita a la Casa de la Moneda, antigua fábrica de moneda colonial que hoy alberga uno de los museos más ricos de Sudamérica, y paseo por el centro colonial declarado por la UNESCO.",
            image: `${R2}/journeys/bolivie-potosi-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Visite des mines du Cerro Rico",
            titleEn: "A visit to the Cerro Rico mines",
            titleEs: "Visita a las minas del Cerro Rico",
            description:
              "Visite guidée d'une mine encore en activité du Cerro Rico, en compagnie d'un ancien mineur, pour comprendre les conditions de travail extrêmes qui perdurent depuis près de cinq siècles au cœur de la montagne.",
            descriptionEn:
              "A guided visit to a still-active mine on Cerro Rico, accompanied by a former miner, to understand the extreme working conditions that have persisted for nearly five centuries inside the mountain.",
            descriptionEs:
              "Visita guiada a una mina todavía activa del Cerro Rico, acompañados de un antiguo minero, para comprender las condiciones de trabajo extremas que persisten desde hace casi cinco siglos en el interior de la montaña.",
            image: `${R2}/journeys/bolivie-potosi-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "panama",
    tour: {
      name: "Panama : Coiba et le peuple emberá",
      nameEn: "Panama: Coiba and the Emberá People",
      nameEs: "Panamá: Coiba y el pueblo emberá",
      slug: "panama-coiba-embera",
      image: `${R2}/journeys/panama-coiba-embera-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une ancienne colonie pénitentiaire devenue sanctuaire marin, puis un peuple qui vit encore au rythme du fleuve",
      taglineEn: "A former penal colony turned marine sanctuary, then a people who still live by the rhythm of the river",
      taglineEs: "Una antigua colonia penitenciaria convertida en santuario marino, y después un pueblo que todavía vive al ritmo del río",
      description:
        "Un voyage entre deux Panama isolés par choix ou par nécessité : l'île de Coiba, ancienne colonie pénitentiaire dont l'isolement forcé pendant plus de soixante-dix ans a paradoxalement préservé l'un des récifs coralliens les plus intacts d'Amérique centrale, puis une communauté emberá du fleuve Chagres, peuple autochtone qui a choisi de préserver un mode de vie traditionnel malgré la proximité de la capitale.",
      descriptionEn:
        "A journey between two Panamas isolated by choice or necessity: Coiba Island, a former penal colony whose forced isolation for over seventy years paradoxically preserved one of Central America's most intact coral reefs, then an Emberá community on the Chagres River, an Indigenous people who have chosen to preserve a traditional way of life despite their proximity to the capital.",
      descriptionEs:
        "Un viaje entre dos Panamás aislados por elección o por necesidad: la isla de Coiba, antigua colonia penitenciaria cuyo aislamiento forzado durante más de setenta años preservó paradójicamente uno de los arrecifes de coral más intactos de Centroamérica, y después una comunidad emberá del río Chagres, pueblo indígena que ha optado por preservar un modo de vida tradicional pese a la cercanía de la capital.",
      price: 3700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
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
      order: 58,
    },
    chapters: [
      {
        title: "L'île de Coiba",
        titleEn: "Coiba Island",
        titleEs: "La isla de Coiba",
        intro:
          "Premier chapitre à Coiba, plus grande île du Pacifique panaméen, dont l'ancienne colonie pénitentiaire, fermée en 2004, a paradoxalement protégé l'écosystème marin en tenant à distance pêcheurs et promoteurs pendant plus de soixante-dix ans. Le parc national marin, classé à l'UNESCO, abrite l'une des plus grandes populations de requins de récif d'Amérique centrale et constitue un point de passage saisonnier pour les baleines à bosse.",
        introEn:
          "The first chapter unfolds at Coiba, the largest island in the Panamanian Pacific, whose former penal colony, closed in 2004, paradoxically protected the marine ecosystem by keeping fishermen and developers at bay for over seventy years. The UNESCO-listed marine national park is home to one of Central America's largest reef shark populations and serves as a seasonal passage point for humpback whales.",
        introEs:
          "El primer capítulo se desarrolla en Coiba, la isla más grande del Pacífico panameño, cuya antigua colonia penitenciaria, cerrada en 2004, protegió paradójicamente el ecosistema marino al mantener alejados a pescadores y promotores durante más de setenta años. El parque nacional marino, declarado por la UNESCO, alberga una de las mayores poblaciones de tiburones de arrecife de Centroamérica y constituye un punto de paso estacional para las ballenas jorobadas.",
        galleryImages: `${R2}/journeys/panama-coiba-gallery1.jpg,${R2}/journeys/panama-coiba-gallery2.jpg,${R2}/journeys/panama-coiba-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Plongée sur les récifs de Coiba",
            titleEn: "Diving Coiba's reefs",
            titleEs: "Buceo en los arrecifes de Coiba",
            description:
              "Transfert en bateau vers Coiba, première sortie de plongée sur les récifs préservés du parc marin, à la recherche de requins de récif, de raies manta et de bancs de barracudas.",
            descriptionEn:
              "A boat transfer to Coiba, a first dive on the marine park's pristine reefs, in search of reef sharks, manta rays, and schools of barracuda.",
            descriptionEs:
              "Traslado en barco a Coiba, primera inmersión en los arrecifes preservados del parque marino, en busca de tiburones de arrecife, mantarrayas y bancos de barracudas.",
            image: `${R2}/journeys/panama-coiba-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "L'ancienne colonie pénitentiaire et la faune terrestre",
            titleEn: "The former penal colony and land wildlife",
            titleEs: "La antigua colonia penitenciaria y la fauna terrestre",
            description:
              "Visite des vestiges de l'ancienne colonie pénitentiaire, envahis par la végétation tropicale, puis randonnée dans la forêt de l'île à la recherche de singes hurleurs et d'aras rouges, seule population insulaire de l'espèce au Panama.",
            descriptionEn:
              "A visit to the remains of the former penal colony, overtaken by tropical vegetation, then a hike through the island's forest in search of howler monkeys and scarlet macaws, the only island population of the species in Panama.",
            descriptionEs:
              "Visita a los vestigios de la antigua colonia penitenciaria, invadidos por la vegetación tropical, y caminata por el bosque de la isla en busca de monos aulladores y guacamayas rojas, la única población insular de la especie en Panamá.",
            image: `${R2}/journeys/panama-coiba-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le peuple emberá du fleuve Chagres",
        titleEn: "The Emberá People of the Chagres River",
        titleEs: "El pueblo emberá del río Chagres",
        intro:
          "Retour vers le continent et navigation en pirogue traditionnelle sur le fleuve Chagres, qui alimente en partie le canal de Panama, jusqu'à une communauté emberá qui a choisi de préserver un mode de vie traditionnel en pleine forêt tropicale, à moins de deux heures de la capitale. Les villages emberá vivent principalement de l'artisanat, notamment la sculpture de graines de tagua et le tissage de paniers, ainsi que d'un tourisme communautaire strictement encadré.",
        introEn:
          "A return to the mainland and a journey by traditional dugout canoe on the Chagres River, which partly feeds the Panama Canal, to an Emberá community that has chosen to preserve a traditional way of life deep in the rainforest, less than two hours from the capital. Emberá villages live mainly from crafts, notably tagua nut carving and basket weaving, along with strictly regulated community tourism.",
        introEs:
          "Regreso al continente y navegación en piragua tradicional por el río Chagres, que alimenta en parte el canal de Panamá, hasta una comunidad emberá que ha optado por preservar un modo de vida tradicional en plena selva tropical, a menos de dos horas de la capital. Los poblados emberá viven principalmente de la artesanía, en particular la talla de semillas de tagua y el tejido de cestas, además de un turismo comunitario estrictamente regulado.",
        galleryImages: `${R2}/journeys/panama-embera-gallery1.jpg,${R2}/journeys/panama-embera-gallery2.jpg,${R2}/journeys/panama-embera-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Navigation sur le fleuve Chagres",
            titleEn: "A journey on the Chagres River",
            titleEs: "Navegación por el río Chagres",
            description:
              "Navigation en pirogue traditionnelle sur le fleuve Chagres, à travers la forêt tropicale qui borde le canal de Panama, jusqu'au village emberá, accueil traditionnel en musique et déjeuner de poisson grillé servi dans une feuille de bananier.",
            descriptionEn:
              "A journey by traditional dugout canoe on the Chagres River, through the rainforest bordering the Panama Canal, to the Emberá village, a traditional musical welcome and a lunch of grilled fish served in a banana leaf.",
            descriptionEs:
              "Navegación en piragua tradicional por el río Chagres, a través de la selva tropical que bordea el canal de Panamá, hasta el poblado emberá, recibimiento tradicional con música y almuerzo de pescado a la parrilla servido en una hoja de plátano.",
            image: `${R2}/journeys/panama-embera-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Artisanat emberá et cascade cachée",
            titleEn: "Emberá crafts and a hidden waterfall",
            titleEs: "Artesanía emberá y cascada escondida",
            description:
              "Découverte de l'artisanat emberá, sculpture de graines de tagua et peintures corporelles traditionnelles à base de jagua, puis randonnée jusqu'à une cascade isolée pour une baignade avant le retour vers Panama City.",
            descriptionEn:
              "A discovery of Emberá crafts, tagua nut carving and traditional jagua body paint, then a hike to an isolated waterfall for a swim before the return to Panama City.",
            descriptionEs:
              "Descubrimiento de la artesanía emberá, talla de semillas de tagua y pinturas corporales tradicionales a base de jagua, y caminata hasta una cascada aislada para bañarse antes del regreso a Ciudad de Panamá.",
            image: `${R2}/journeys/panama-embera-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "equateur",
    tour: {
      name: "Équateur : l'Amazonie de Cuyabeno",
      nameEn: "Ecuador: The Cuyabeno Amazon",
      nameEs: "Ecuador: la Amazonía de Cuyabeno",
      slug: "equateur-cuyabeno",
      image: `${R2}/tours/equateur-cuyabeno.jpg`,
      images: `${R2}/trips/equateur-cuyabeno-gallery-1.jpg,${R2}/trips/equateur-cuyabeno-gallery-2.jpg,${R2}/trips/equateur-cuyabeno-gallery-3.jpg,${R2}/trips/equateur-cuyabeno-gallery-4.jpg,${R2}/trips/equateur-cuyabeno-gallery-5.jpg,${R2}/trips/equateur-cuyabeno-gallery-6.jpg`,
      tagline: "La forêt amazonienne la plus facilement accessible du continent, à quelques heures de route de Quito",
      taglineEn: "The most easily accessible Amazon rainforest on the continent, just hours from Quito by road",
      taglineEs: "La selva amazónica más fácilmente accesible del continente, a pocas horas por carretera de Quito",
      description:
        "La réserve de production faunique de Cuyabeno, dans l'Amazonie équatorienne, offre un accès à la jungle amazonienne parmi les plus rapides du continent, sans nécessiter de vol interne supplémentaire. Ses lagunes d'eau noire, ses forêts inondées et sa densité de caïmans, singes et dauphins roses d'eau douce en font un concentré de biodiversité amazonienne sur une surface restreinte.",
      descriptionEn:
        "The Cuyabeno Wildlife Production Reserve, in the Ecuadorian Amazon, offers one of the fastest accesses to Amazon rainforest on the continent, with no need for an additional domestic flight. Its blackwater lagoons, flooded forests, and density of caimans, monkeys, and freshwater pink dolphins concentrate Amazonian biodiversity into a compact area.",
      descriptionEs:
        "La reserva de producción faunística de Cuyabeno, en la Amazonía ecuatoriana, ofrece uno de los accesos más rápidos a la selva amazónica del continente, sin necesidad de un vuelo interno adicional. Sus lagunas de aguas negras, sus bosques inundados y su densidad de caimanes, monos y delfines rosados de agua dulce concentran la biodiversidad amazónica en una superficie reducida.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Toute l'année | idéal oct à fév",
      whenLabelEn: "Year-round | ideal Oct to Feb",
      whenLabelEs: "Todo el año | ideal oct a feb",
      bestMonths: "october,november,december,january,february",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 59,
    },
    sections: [
      {
        heading: "Les lagunes d'eau noire et les dauphins roses",
        headingEn: "The blackwater lagoons and pink dolphins",
        headingEs: "Las lagunas de aguas negras y los delfines rosados",
        body:
          "Une navigation en pirogue à moteur silencieux sur la lagune Grande, cœur de la réserve, permet d'observer des dauphins roses d'eau douce, espèce rare qui ne survit que dans certains cours d'eau amazoniens. Une baignade au coucher du soleil, entourée de singes hurleurs annonçant la tombée de la nuit, reste l'un des moments forts du séjour.",
        bodyEn:
          "A trip by silent-motor canoe on Laguna Grande, the heart of the reserve, allows sightings of freshwater pink dolphins, a rare species that survives only in certain Amazonian waterways. A sunset swim, surrounded by howler monkeys announcing nightfall, remains one of the trip's highlights.",
        bodyEs:
          "Una navegación en canoa de motor silencioso por la Laguna Grande, corazón de la reserva, permite observar delfines rosados de agua dulce, una especie rara que solo sobrevive en ciertos cursos de agua amazónicos. Un baño al atardecer, rodeado de monos aulladores que anuncian la caída de la noche, sigue siendo uno de los momentos más destacados de la estancia.",
      },
      {
        heading: "Rencontre avec la communauté siona",
        headingEn: "Meeting the Siona community",
        headingEs: "Encuentro con la comunidad siona",
        body:
          "Une visite d'une communauté indigène siona, l'un des peuples autochtones les plus anciens de la région, permet de découvrir l'usage traditionnel des plantes médicinales de la forêt et la fabrication de la chicha, boisson fermentée à base de manioc préparée selon une méthode transmise depuis des générations.",
        bodyEn:
          "A visit to a Siona indigenous community, one of the region's oldest native peoples, offers insight into the traditional use of the forest's medicinal plants and the making of chicha, a fermented manioc drink prepared using a method passed down through generations.",
        bodyEs:
          "Una visita a una comunidad indígena siona, uno de los pueblos autóctonos más antiguos de la región, permite descubrir el uso tradicional de las plantas medicinales del bosque y la elaboración de la chicha, bebida fermentada a base de yuca preparada según un método transmitido durante generaciones.",
      },
    ],
    hotels: [
      {
        name: "Cuyabeno Lodge",
        nameEn: "Cuyabeno Lodge",
        nameEs: "Cuyabeno Lodge",
        description:
          "Un lodge en bois sur pilotis au bord de la lagune Grande, moustiquaires et vérandas privées, guides naturalistes bilingues résidents.",
        descriptionEn:
          "A wooden stilted lodge on the shore of Laguna Grande, mosquito nets and private verandas, resident bilingual naturalist guides.",
        descriptionEs:
          "Un lodge de madera sobre pilotes a orillas de la Laguna Grande, mosquiteras y porches privados, guías naturalistas bilingües residentes.",
        image: `${R2}/trips/equateur-cuyabeno-hotel-cuyabeno.jpg`,
      },
      {
        name: "Jamu Lodge",
        nameEn: "Jamu Lodge",
        nameEs: "Jamu Lodge",
        description:
          "Un lodge plus intimiste géré en partie par la communauté siona locale, cases traditionnelles rénovées, cuisine à base de produits de la forêt.",
        descriptionEn:
          "A more intimate lodge partly run by the local Siona community, renovated traditional huts, cuisine based on forest produce.",
        descriptionEs:
          "Un lodge más íntimo gestionado en parte por la comunidad siona local, cabañas tradicionales renovadas, cocina a base de productos del bosque.",
        image: `${R2}/trips/equateur-cuyabeno-hotel-jamu.jpg`,
      },
    ],
  },
  {
    destinationSlug: "bolivie",
    tour: {
      name: "Bolivie : le parc national Madidi",
      nameEn: "Bolivia: Madidi National Park",
      nameEs: "Bolivia: el parque nacional Madidi",
      slug: "bolivie-madidi",
      image: `${R2}/tours/bolivie-madidi.jpg`,
      images: `${R2}/trips/bolivie-madidi-gallery-1.jpg,${R2}/trips/bolivie-madidi-gallery-2.jpg,${R2}/trips/bolivie-madidi-gallery-3.jpg,${R2}/trips/bolivie-madidi-gallery-4.jpg,${R2}/trips/bolivie-madidi-gallery-5.jpg,${R2}/trips/bolivie-madidi-gallery-6.jpg`,
      tagline: "L'un des parcs les plus biodivers du monde, où l'Amazonie rencontre les contreforts andins",
      taglineEn: "One of the most biodiverse parks in the world, where the Amazon meets the Andean foothills",
      taglineEs: "Uno de los parques más biodiversos del mundo, donde la Amazonía se encuentra con las estribaciones andinas",
      description:
        "Le parc national Madidi, dans le nord-ouest de la Bolivie, s'étend de la forêt tropicale amazonienne jusqu'aux contreforts andins culminant à plus de cinq mille sept cents mètres, un dénivelé exceptionnel qui en fait l'un des parcs les plus biodivers de la planète, avec plus de mille espèces d'oiseaux recensées et onze espèces de singes. Accessible depuis Rurrenabaque par un simple trajet en bateau sur le fleuve Beni, le parc reste étonnamment peu visité comparé à ses équivalents péruviens ou équatoriens.",
      descriptionEn:
        "Madidi National Park, in northwestern Bolivia, stretches from Amazonian rainforest to Andean foothills rising over five thousand seven hundred metres, an exceptional elevation range that makes it one of the most biodiverse parks on the planet, with over a thousand recorded bird species and eleven species of monkey. Accessible from Rurrenabaque by a simple boat trip on the Beni River, the park remains surprisingly little-visited compared to its Peruvian or Ecuadorian counterparts.",
      descriptionEs:
        "El parque nacional Madidi, en el noroeste de Bolivia, se extiende desde la selva tropical amazónica hasta las estribaciones andinas que superan los cinco mil setecientos metros, un desnivel excepcional que lo convierte en uno de los parques más biodiversos del planeta, con más de mil especies de aves registradas y once especies de monos. Accesible desde Rurrenabaque mediante un simple trayecto en barco por el río Beni, el parque sigue siendo sorprendentemente poco visitado en comparación con sus equivalentes peruanos o ecuatorianos.",
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
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 60,
    },
    sections: [
      {
        heading: "La pampa et sa faune concentrée",
        headingEn: "The pampas and its concentrated wildlife",
        headingEs: "La pampa y su fauna concentrada",
        body:
          "La région de la pampa, zone humide en bordure du parc, concentre une faune particulièrement visible depuis un bateau : caïmans à lunettes se prélassant sur les berges, singes capucins et écureuils bondissant entre les branches, et une chance réelle d'observer un anaconda enroulé dans la végétation aquatique, notamment en fin de saison sèche.",
        bodyEn:
          "The pampas region, a wetland on the park's edge, concentrates wildlife that's particularly easy to spot from a boat: spectacled caimans basking on the banks, capuchin monkeys and squirrel monkeys leaping between branches, and a real chance of spotting an anaconda coiled in the aquatic vegetation, especially at the end of the dry season.",
        bodyEs:
          "La región de la pampa, un humedal en el borde del parque, concentra una fauna especialmente visible desde un barco: caimanes de anteojos tomando el sol en las orillas, monos capuchinos y monos ardilla saltando entre las ramas, y una posibilidad real de avistar una anaconda enroscada en la vegetación acuática, especialmente al final de la temporada seca.",
      },
      {
        heading: "La forêt vierge et les contreforts andins",
        headingEn: "The pristine forest and Andean foothills",
        headingEs: "El bosque virgen y las estribaciones andinas",
        body:
          "Plus en altitude, la forêt tropicale de montagne, encore largement inexplorée par la science, abrite des espèces découvertes seulement au cours des dernières décennies. Une randonnée guidée à travers ce dénivelé unique, de la plaine amazonienne aux premiers contreforts andins, permet de saisir l'ampleur du gradient écologique qui fait la réputation scientifique du parc.",
        bodyEn:
          "Higher up, the montane rainforest, still largely unexplored by science, shelters species discovered only in recent decades. A guided hike across this unique elevation range, from the Amazonian plain to the first Andean foothills, captures the scale of the ecological gradient that has made the park's scientific reputation.",
        bodyEs:
          "Más arriba, el bosque tropical de montaña, todavía en gran parte inexplorado por la ciencia, alberga especies descubiertas solo en las últimas décadas. Una caminata guiada a través de este desnivel único, desde la llanura amazónica hasta las primeras estribaciones andinas, permite captar la magnitud del gradiente ecológico que ha dado fama científica al parque.",
      },
    ],
    hotels: [
      {
        name: "Chalalán Ecolodge",
        nameEn: "Chalalán Ecolodge",
        nameEs: "Chalalán Ecolodge",
        description:
          "Un lodge communautaire géré par les habitants du village voisin de San José de Uchupiamonas, cases en matériaux locaux au bord d'un lac isolé au cœur du parc.",
        descriptionEn:
          "A community-run lodge managed by residents of the nearby village of San José de Uchupiamonas, huts of local materials on the shore of an isolated lake at the heart of the park.",
        descriptionEs:
          "Un lodge comunitario gestionado por los habitantes del vecino pueblo de San José de Uchupiamonas, cabañas de materiales locales a orillas de un lago aislado en pleno corazón del parque.",
        image: `${R2}/trips/bolivie-madidi-hotel-chalalan.jpg`,
      },
      {
        name: "San Miguel del Bala Lodge",
        nameEn: "San Miguel del Bala Lodge",
        nameEs: "San Miguel del Bala Lodge",
        description:
          "Un lodge plus accessible en bord de fleuve Beni, également géré par une communauté indigène locale, cabanes simples avec vue directe sur l'eau.",
        descriptionEn:
          "A more accessible lodge on the banks of the Beni River, also run by a local Indigenous community, simple cabins with a direct view of the water.",
        descriptionEs:
          "Un lodge más accesible a orillas del río Beni, también gestionado por una comunidad indígena local, cabañas sencillas con vistas directas al agua.",
        image: `${R2}/trips/bolivie-madidi-hotel-sanmiguel.jpg`,
      },
    ],
  },
  {
    destinationSlug: "panama",
    tour: {
      name: "Panama : Boquete, les hautes terres du café et du volcan Barú",
      nameEn: "Panama: Boquete, the Coffee and Volcán Barú Highlands",
      nameEs: "Panamá: Boquete, las tierras altas del café y el volcán Barú",
      slug: "panama-boquete",
      image: `${R2}/tours/panama-boquete.jpg`,
      images: `${R2}/trips/panama-boquete-gallery-1.jpg,${R2}/trips/panama-boquete-gallery-2.jpg,${R2}/trips/panama-boquete-gallery-3.jpg,${R2}/trips/panama-boquete-gallery-4.jpg,${R2}/trips/panama-boquete-gallery-5.jpg,${R2}/trips/panama-boquete-gallery-6.jpg`,
      tagline: "Le meilleur café de spécialité d'Amérique centrale, cultivé à l'ombre d'un volcan visible depuis les deux océans",
      taglineEn: "Central America's finest specialty coffee, grown in the shadow of a volcano visible from both oceans",
      taglineEs: "El mejor café de especialidad de Centroamérica, cultivado a la sombra de un volcán visible desde ambos océanos",
      description:
        "Boquete, petite ville de montagne nichée dans les hautes terres de l'ouest du Panama, doit sa renommée à son café geisha, régulièrement élu meilleur café du monde lors de compétitions internationales, cultivé sur les pentes volcaniques fertiles autour du volcan Barú, point culminant du pays d'où l'on peut apercevoir, par temps clair, l'océan Pacifique et la mer des Caraïbes simultanément.",
      descriptionEn:
        "Boquete, a small mountain town nestled in the highlands of western Panama, owes its fame to its geisha coffee, regularly voted the world's best coffee at international competitions, grown on the fertile volcanic slopes around Volcán Barú, the country's highest point, from which the Pacific Ocean and the Caribbean Sea can both be glimpsed on a clear day.",
      descriptionEs:
        "Boquete, un pequeño pueblo de montaña enclavado en las tierras altas del oeste de Panamá, debe su fama a su café geisha, elegido regularmente como el mejor café del mundo en competiciones internacionales, cultivado en las fértiles laderas volcánicas alrededor del volcán Barú, el punto más alto del país, desde donde se pueden divisar, en días despejados, el océano Pacífico y el mar Caribe simultáneamente.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Déc à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,honeymoon",
      maxGuests: 6,
      featured: false,
      order: 61,
    },
    sections: [
      {
        heading: "La route du café geisha",
        headingEn: "The Geisha Coffee Trail",
        headingEs: "La ruta del café geisha",
        body:
          "Les plantations de café qui entourent Boquete, situées entre mille deux cents et mille huit cents mètres d'altitude, bénéficient d'un microclimat qui a permis au geisha, variété éthiopienne longtemps oubliée, de révéler tout son potentiel aromatique. Les visites de fincas familiales, du cueillage à la torréfaction, se terminent par une dégustation comparative de plusieurs crus, dont certains se vendent parmi les plus chers du monde aux enchères.",
        bodyEn:
          "The coffee plantations surrounding Boquete, sitting between one thousand two hundred and one thousand eight hundred metres, benefit from a microclimate that has allowed geisha, a long-forgotten Ethiopian variety, to reveal its full aromatic potential. Visits to family fincas, from picking to roasting, end with a comparative tasting of several harvests, some of which sell among the highest prices in the world at auction.",
        bodyEs:
          "Las plantaciones de café que rodean Boquete, situadas entre mil doscientos y mil ochocientos metros de altitud, se benefician de un microclima que ha permitido a la variedad geisha, largamente olvidada y de origen etíope, revelar todo su potencial aromático. Las visitas a fincas familiares, desde la recolección hasta el tostado, terminan con una cata comparativa de varias cosechas, algunas de las cuales se venden entre las más caras del mundo en subasta.",
      },
      {
        heading: "Le volcan Barú et la vallée de Boquete",
        headingEn: "Volcán Barú and the Boquete Valley",
        headingEs: "El volcán Barú y el valle de Boquete",
        body:
          "L'ascension nocturne du volcan Barú, seul point du Panama d'où l'on peut voir les deux océans par temps parfaitement dégagé, débute vers minuit pour atteindre le sommet au lever du soleil. La vallée environnante, surnommée « le jardin éternel du Panama » pour son climat printanier permanent, se découvre aussi en tyrolienne à travers la canopée ou lors d'une baignade dans les rivières d'eau vive qui dévalent des pentes volcaniques.",
        bodyEn:
          "The night climb of Volcán Barú, the only point in Panama from which both oceans can be seen on a perfectly clear day, begins around midnight to reach the summit at sunrise. The surrounding valley, nicknamed \"Panama's eternal garden\" for its permanent spring-like climate, can also be explored by zipline through the canopy or with a swim in the whitewater rivers rushing down the volcanic slopes.",
        bodyEs:
          "La ascensión nocturna al volcán Barú, el único punto de Panamá desde el que se pueden ver ambos océanos en un día perfectamente despejado, comienza hacia la medianoche para alcanzar la cumbre al amanecer. El valle circundante, apodado «el jardín eterno de Panamá» por su clima primaveral permanente, también se descubre en tirolina a través del dosel o con un baño en los ríos de aguas bravas que bajan de las laderas volcánicas.",
      },
    ],
    hotels: [
      {
        name: "Finca Lérida",
        nameEn: "Finca Lérida",
        nameEs: "Finca Lérida",
        description:
          "Un lodge historique au cœur d'une plantation de café centenaire, chambres avec vue sur la forêt de nuages, sentiers d'observation ornithologique sur place.",
        descriptionEn:
          "A historic lodge at the heart of a century-old coffee plantation, rooms overlooking the cloud forest, on-site birdwatching trails.",
        descriptionEs:
          "Un lodge histórico en el corazón de una plantación de café centenaria, habitaciones con vistas al bosque nuboso, senderos de observación ornitológica in situ.",
        image: `${R2}/trips/panama-boquete-hotel-fincalerida.jpg`,
      },
      {
        name: "Boquete Garden Inn",
        nameEn: "Boquete Garden Inn",
        nameEs: "Boquete Garden Inn",
        description:
          "Un ensemble de bungalows au bord d'une rivière, jardins tropicaux entretenus par les propriétaires, ambiance familiale à deux pas du centre du village.",
        descriptionEn:
          "A cluster of bungalows on a riverbank, tropical gardens maintained by the owners, a family atmosphere steps from the village centre.",
        descriptionEs:
          "Un conjunto de bungalós a orillas de un río, jardines tropicales cuidados por los propietarios, ambiente familiar a pocos pasos del centro del pueblo.",
        image: `${R2}/trips/panama-boquete-hotel-gardeninn.jpg`,
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
