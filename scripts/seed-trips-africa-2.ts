// Batch 2 — Madagascar, Ethiopia, Ghana. New trips bringing each destination to at least 3,
// styled on Black Tomato's real structure (a short number of named-hotel chapters, not an
// exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-africa-2.ts
// Requires scripts/upload-images-africa-2.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "madagascar",
    tour: {
      name: "Madagascar : Nosy Be et les îles du Nord",
      nameEn: "Madagascar: Nosy Be and the Northern Islands",
      nameEs: "Madagascar: Nosy Be y las islas del Norte",
      slug: "madagascar-nosy-be-iles-nord",
      image: `${R2}/journeys/madagascar-nosybe-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Plantations d'ylang-ylang, requins-baleines et archipel préservé au large de l'océan Indien",
      taglineEn: "Ylang-ylang plantations, whale sharks, and an unspoiled archipelago in the Indian Ocean",
      taglineEs: "Plantaciones de ylang-ylang, tiburones ballena y un archipiélago virgen en el océano Índico",
      description:
        "Une facette balnéaire de Madagascar, à l'opposé des forêts et canyons du reste de l'île : Nosy Be, l'« île aux parfums », couverte de plantations d'ylang-ylang, puis l'archipel préservé de Nosy Iranja et Nosy Tanikely, où requins-baleines et tortues vertes se croisent dans une eau cristalline.",
      descriptionEn:
        "A coastal side of Madagascar, far from the forests and canyons of the rest of the island: Nosy Be, the \"perfume island,\" covered in ylang-ylang plantations, then the unspoiled archipelago of Nosy Iranja and Nosy Tanikely, where whale sharks and green turtles glide through crystal-clear water.",
      descriptionEs:
        "Una cara costera de Madagascar, muy distinta de los bosques y cañones del resto de la isla: Nosy Be, la «isla de los perfumes», cubierta de plantaciones de ylang-ylang, y después el archipiélago virgen de Nosy Iranja y Nosy Tanikely, donde tiburones ballena y tortugas verdes se cruzan en aguas cristalinas.",
      price: 4200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Oct à déc | Avr-mai",
      whenLabelEn: "Oct to Dec | Apr-May",
      whenLabelEs: "Oct a dic | abr-may",
      bestMonths: "october,november,december,april,may",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 12,
    },
    chapters: [
      {
        title: "Nosy Be",
        titleEn: "Nosy Be",
        titleEs: "Nosy Be",
        intro:
          "Premier chapitre sur Nosy Be, surnommée « l'île aux parfums » pour ses vastes plantations d'ylang-ylang, de vanille et de cacao dont les effluves flottent dans l'air à la tombée du jour. Le mont Passot offre depuis son sommet une vue sur sept lacs de cratère et l'ensemble de l'archipel, particulièrement spectaculaire au coucher du soleil.",
        introEn:
          "The first chapter unfolds on Nosy Be, nicknamed the \"perfume island\" for its vast ylang-ylang, vanilla, and cocoa plantations, whose scent drifts through the air at dusk. Mount Passot's summit looks out over seven crater lakes and the whole archipelago, especially spectacular at sunset.",
        introEs:
          "El primer capítulo se desarrolla en Nosy Be, apodada la «isla de los perfumes» por sus vastas plantaciones de ylang-ylang, vainilla y cacao, cuyo aroma flota en el aire al caer la tarde. Desde la cima del monte Passot se divisan siete lagos de cráter y todo el archipiélago, especialmente espectacular al atardecer.",
        galleryImages: `${R2}/journeys/madagascar-nosybe-gallery1.jpg,${R2}/journeys/madagascar-nosybe-gallery2.jpg,${R2}/journeys/madagascar-nosybe-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Plantations et village de pêcheurs",
            titleEn: "Plantations and fishing village",
            titleEs: "Plantaciones y pueblo de pescadores",
            description:
              "Visite d'une plantation d'ylang-ylang avec démonstration de distillation traditionnelle, puis arrêt au village de pêcheurs de Dzamandzar pour observer la construction de pirogues à balancier.",
            descriptionEn:
              "A visit to an ylang-ylang plantation with a traditional distillation demonstration, then a stop in the fishing village of Dzamandzar to watch outrigger canoes being built.",
            descriptionEs:
              "Visita a una plantación de ylang-ylang con demostración de destilación tradicional, y después parada en el pueblo pesquero de Dzamandzar para ver la construcción de piraguas con balancín.",
            image: `${R2}/journeys/madagascar-nosybe-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Mont Passot et lacs de cratère",
            titleEn: "Mount Passot and crater lakes",
            titleEs: "Monte Passot y lagos de cráter",
            description:
              "Ascension du mont Passot en fin d'après-midi pour admirer les sept lacs sacrés de cratère et un coucher de soleil panoramique sur l'ensemble de l'archipel.",
            descriptionEn:
              "A late-afternoon ascent of Mount Passot to admire the seven sacred crater lakes and a panoramic sunset over the whole archipelago.",
            descriptionEs:
              "Ascensión al monte Passot al final de la tarde para admirar los siete lagos sagrados de cráter y una puesta de sol panorámica sobre todo el archipiélago.",
            image: `${R2}/journeys/madagascar-nosybe-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'archipel : Nosy Iranja et Nosy Tanikely",
        titleEn: "The Archipelago: Nosy Iranja and Nosy Tanikely",
        titleEs: "El archipiélago: Nosy Iranja y Nosy Tanikely",
        intro:
          "Excursion en bateau vers Nosy Iranja, deux îlots reliés par un banc de sable qui n'apparaît qu'à marée basse, puis vers la réserve marine de Nosy Tanikely, où tortues vertes et bancs de poissons tropicaux se laissent observer en snorkeling. D'octobre à décembre, des sorties dédiées permettent de nager aux côtés de requins-baleines, de passage dans ces eaux riches en plancton.",
        introEn:
          "A boat excursion to Nosy Iranja, two islets linked by a sandbank that appears only at low tide, then to the Nosy Tanikely marine reserve, where green turtles and shoals of tropical fish can be observed snorkelling. From October to December, dedicated outings allow swimming alongside whale sharks, passing through these plankton-rich waters.",
        introEs:
          "Excursión en barco a Nosy Iranja, dos islotes unidos por un banco de arena que solo aparece con la marea baja, y después a la reserva marina de Nosy Tanikely, donde se pueden observar tortugas verdes y bancos de peces tropicales haciendo esnórquel. De octubre a diciembre, salidas específicas permiten nadar junto a tiburones ballena, de paso por estas aguas ricas en plancton.",
        galleryImages: `${R2}/journeys/madagascar-archipel-gallery1.jpg,${R2}/journeys/madagascar-archipel-gallery2.jpg,${R2}/journeys/madagascar-archipel-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Nosy Iranja et son banc de sable",
            titleEn: "Nosy Iranja and its sandbank",
            titleEs: "Nosy Iranja y su banco de arena",
            description:
              "Traversée en bateau vers Nosy Iranja. Traversée à pied du banc de sable qui relie les deux îlots à marée basse, déjeuner de fruits de mer sur la plage.",
            descriptionEn:
              "A boat crossing to Nosy Iranja. A walk across the sandbank connecting the two islets at low tide, with a seafood lunch on the beach.",
            descriptionEs:
              "Travesía en barco hasta Nosy Iranja. Cruce a pie del banco de arena que une los dos islotes con la marea baja, almuerzo de mariscos en la playa.",
            image: `${R2}/journeys/madagascar-archipel-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Snorkeling à Nosy Tanikely",
            titleEn: "Snorkelling at Nosy Tanikely",
            titleEs: "Esnórquel en Nosy Tanikely",
            description:
              "Journée dans la réserve marine de Nosy Tanikely, snorkeling parmi les tortues vertes et les bancs de poissons tropicaux, avec, en saison, une sortie dédiée à la recherche des requins-baleines.",
            descriptionEn:
              "A day in the Nosy Tanikely marine reserve, snorkelling among green turtles and shoals of tropical fish, with, in season, a dedicated outing to look for whale sharks.",
            descriptionEs:
              "Día en la reserva marina de Nosy Tanikely, esnórquel entre tortugas verdes y bancos de peces tropicales, con, en temporada, una salida dedicada a la búsqueda de tiburones ballena.",
            image: `${R2}/journeys/madagascar-archipel-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "ethiopie",
    tour: {
      name: "Éthiopie : Simien et Gondar, montagnes et châteaux",
      nameEn: "Ethiopia: Simien and Gondar, Mountains and Castles",
      nameEs: "Etiopía: Simien y Gondar, montañas y castillos",
      slug: "ethiopie-simien-gondar",
      image: `${R2}/journeys/ethiopie-simien-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des babouins géladas sur fond de falaises vertigineuses, puis les châteaux royaux du « Camelot africain »",
      taglineEn: "Gelada baboons against a backdrop of dizzying cliffs, then the royal castles of Africa's \"Camelot\"",
      taglineEs: "Papiones gelada con acantilados vertiginosos de fondo, y después los castillos reales del «Camelot africano»",
      description:
        "Un voyage entre les sommets du parc national du Simien, classé à l'UNESCO, où les babouins géladas broutent au bord de falaises de plus de mille mètres, et Gondar, ancienne capitale impériale surnommée le « Camelot d'Afrique » pour ses châteaux du XVIIe siècle.",
      descriptionEn:
        "A journey between the peaks of the UNESCO-listed Simien Mountains National Park, where gelada baboons graze at the edge of cliffs over a thousand metres high, and Gondar, the former imperial capital nicknamed \"Africa's Camelot\" for its 17th-century castles.",
      descriptionEs:
        "Un viaje entre las cumbres del parque nacional de las montañas Simien, declarado por la UNESCO, donde los papiones gelada pastan al borde de acantilados de más de mil metros, y Gondar, antigua capital imperial apodada el «Camelot de África» por sus castillos del siglo XVII.",
      price: 3900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Oct à mars",
      whenLabelEn: "Oct to March",
      whenLabelEs: "Oct a marzo",
      bestMonths: "october,november,december,january,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 13,
    },
    chapters: [
      {
        title: "Le Simien",
        titleEn: "The Simien Mountains",
        titleEs: "El Simien",
        intro:
          "Premier chapitre dans le parc national du Simien, un massif montagneux spectaculaire où l'érosion a sculpté des pics et des gorges vertigineuses, parfois comparé au Grand Canyon éthiopien. La randonnée sur le plateau de Chennek permet une approche à quelques mètres des babouins géladas, une espèce endémique reconnaissable à la tache rouge en forme de cœur sur leur poitrine, qui vivent en troupes de plusieurs centaines d'individus sans crainte de l'homme.",
        introEn:
          "The first chapter unfolds in Simien Mountains National Park, a spectacular massif where erosion has carved dizzying peaks and gorges, sometimes compared to Ethiopia's own Grand Canyon. A hike across the Chennek plateau allows a close approach, just metres away, to gelada baboons — an endemic species recognisable by the red, heart-shaped patch on their chest, living in troops of several hundred with no fear of humans.",
        introEs:
          "El primer capítulo se desarrolla en el parque nacional de las montañas Simien, un macizo espectacular donde la erosión ha esculpido picos y gargantas vertiginosas, a veces comparado con el Gran Cañón etíope. La caminata por la meseta de Chennek permite acercarse a pocos metros a los papiones gelada, una especie endémica reconocible por la mancha roja en forma de corazón en su pecho, que viven en tropas de varios cientos de individuos sin temor al ser humano.",
        galleryImages: `${R2}/journeys/ethiopie-simien-gallery1.jpg,${R2}/journeys/ethiopie-simien-gallery2.jpg,${R2}/journeys/ethiopie-simien-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée sur le plateau de Chennek",
            titleEn: "Hiking the Chennek plateau",
            titleEs: "Senderismo por la meseta de Chennek",
            description:
              "Randonnée matinale sur le plateau de Chennek, à la rencontre des troupes de babouins géladas qui broutent en toute confiance à quelques mètres des sentiers, avec les falaises du Simien en toile de fond.",
            descriptionEn:
              "A morning hike across the Chennek plateau, encountering troops of gelada baboons grazing confidently just metres from the trails, with the Simien cliffs as a backdrop.",
            descriptionEs:
              "Caminata matutina por la meseta de Chennek, al encuentro de tropas de papiones gelada que pastan con total confianza a pocos metros de los senderos, con los acantilados del Simien de fondo.",
            image: `${R2}/journeys/ethiopie-simien-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Point de vue d'Imet Gogo",
            titleEn: "Imet Gogo viewpoint",
            titleEs: "Mirador de Imet Gogo",
            description:
              "Randonnée vers le point de vue d'Imet Gogo, promontoire offrant une vue à trois cent soixante degrés sur les gorges du Simien, l'un des panoramas les plus spectaculaires d'Éthiopie.",
            descriptionEn:
              "A hike to the Imet Gogo viewpoint, a promontory offering a three-hundred-sixty-degree view over the Simien gorges, one of Ethiopia's most spectacular panoramas.",
            descriptionEs:
              "Caminata hasta el mirador de Imet Gogo, un promontorio con vistas de trescientos sesenta grados sobre las gargantas del Simien, uno de los panoramas más espectaculares de Etiopía.",
            image: `${R2}/journeys/ethiopie-simien-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Gondar",
        titleEn: "Gondar",
        titleEs: "Gondar",
        intro:
          "Descente vers Gondar, capitale de l'empire éthiopien du XVIIe au XIXe siècle, dont l'enceinte royale de Fasil Ghebbi rassemble six châteaux de pierre aux influences portugaises, indiennes et arabes mêlées, valant à la ville son surnom de « Camelot d'Afrique ». La visite se termine par les bains de Fasilides, toujours utilisés chaque année lors de la fête de Timkat pour une bénédiction collective de l'eau.",
        introEn:
          "A descent to Gondar, capital of the Ethiopian empire from the 17th to the 19th century, whose royal enclosure of Fasil Ghebbi gathers six stone castles blending Portuguese, Indian, and Arab influences — earning the city its nickname \"Africa's Camelot.\" The visit ends at Fasilides' Bath, still used every year during the Timkat festival for a collective blessing of the water.",
        introEs:
          "Descenso a Gondar, capital del imperio etíope entre los siglos XVII y XIX, cuyo recinto real de Fasil Ghebbi reúne seis castillos de piedra que mezclan influencias portuguesas, indias y árabes, lo que le vale a la ciudad su apodo de «Camelot de África». La visita termina en los baños de Fasilidas, todavía utilizados cada año durante la fiesta de Timkat para una bendición colectiva del agua.",
        galleryImages: `${R2}/journeys/ethiopie-gondar-gallery1.jpg,${R2}/journeys/ethiopie-gondar-gallery2.jpg,${R2}/journeys/ethiopie-gondar-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Les châteaux de Fasil Ghebbi",
            titleEn: "The castles of Fasil Ghebbi",
            titleEs: "Los castillos de Fasil Ghebbi",
            description:
              "Visite de l'enceinte royale de Fasil Ghebbi et de ses six châteaux de pierre, témoins d'un empire qui mêlait influences locales, portugaises et arabes bien avant la colonisation européenne du continent.",
            descriptionEn:
              "A visit to the royal enclosure of Fasil Ghebbi and its six stone castles, evidence of an empire that blended local, Portuguese, and Arab influences well before Europe colonised the continent.",
            descriptionEs:
              "Visita al recinto real de Fasil Ghebbi y sus seis castillos de piedra, testigos de un imperio que mezclaba influencias locales, portuguesas y árabes mucho antes de la colonización europea del continente.",
            image: `${R2}/journeys/ethiopie-gondar-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Bains de Fasilides et église Debre Berhan Selassie",
            titleEn: "Fasilides' Bath and Debre Berhan Selassie Church",
            titleEs: "Baños de Fasilidas e iglesia de Debre Berhan Selassie",
            description:
              "Visite des bains de Fasilides, toujours en eau, puis de l'église Debre Berhan Selassie, dont le plafond peint de cent quarante visages d'anges ailés est considéré comme l'un des joyaux de l'art éthiopien.",
            descriptionEn:
              "A visit to Fasilides' Bath, still filled with water, then to Debre Berhan Selassie Church, whose ceiling painted with a hundred and forty winged angel faces is considered one of the jewels of Ethiopian art.",
            descriptionEs:
              "Visita a los baños de Fasilidas, todavía con agua, y después a la iglesia de Debre Berhan Selassie, cuyo techo pintado con ciento cuarenta rostros de ángeles alados se considera una de las joyas del arte etíope.",
            image: `${R2}/journeys/ethiopie-gondar-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "ghana",
    tour: {
      name: "Ghana : la région de la Volta, cascades et singes sacrés",
      nameEn: "Ghana: the Volta Region, Waterfalls and Sacred Monkeys",
      nameEs: "Ghana: la región del Volta, cascadas y monos sagrados",
      slug: "ghana-region-volta",
      image: `${R2}/journeys/ghana-volta-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La plus haute cascade d'Afrique de l'Ouest et un sanctuaire où les singes sont protégés par la tradition",
      taglineEn: "West Africa's highest waterfall and a sanctuary where tradition protects the monkeys",
      taglineEs: "La cascada más alta de África Occidental y un santuario donde la tradición protege a los monos",
      description:
        "La région de la Volta, à l'est du Ghana, dévoile un pays de collines verdoyantes largement ignoré des circuits classiques : les chutes de Wli, les plus hautes d'Afrique de l'Ouest, le sanctuaire de Tafi Atome où des colonies de singes mona sont protégées depuis des générations par croyance traditionnelle, et la culture ewe, distincte du reste du pays.",
      descriptionEn:
        "The Volta Region, in eastern Ghana, reveals a country of green hills largely overlooked by classic circuits: Wli Falls, the highest in West Africa, the Tafi Atome sanctuary where colonies of mona monkeys have been protected for generations by traditional belief, and Ewe culture, distinct from the rest of the country.",
      descriptionEs:
        "La región del Volta, al este de Ghana, revela un país de colinas verdes en gran parte ignorado por los circuitos clásicos: las cataratas de Wli, las más altas de África Occidental, el santuario de Tafi Atome donde colonias de monos mona llevan generaciones protegidas por creencias tradicionales, y la cultura ewe, distinta del resto del país.",
      price: 3100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 14,
    },
    chapters: [
      {
        title: "Les chutes de Wli et le mont Afadjato",
        titleEn: "Wli Falls and Mount Afadjato",
        titleEs: "Las cataratas de Wli y el monte Afadjato",
        intro:
          "Premier chapitre autour des chutes de Wli, qui tombent d'une seule volée de cent quarante mètres au cœur d'une réserve forestière abritant des milliers de chauves-souris frugivores nichées dans les falaises environnantes. À proximité, l'ascension du mont Afadjato, point culminant du Ghana à 885 mètres, offre une vue sur la frontière togolaise voisine.",
        introEn:
          "The first chapter centres on Wli Falls, which drop a single 140-metre plunge in the heart of a forest reserve home to thousands of fruit bats nesting in the surrounding cliffs. Nearby, the ascent of Mount Afadjato, Ghana's highest point at 885 metres, offers a view over the neighbouring Togolese border.",
        introEs:
          "El primer capítulo gira en torno a las cataratas de Wli, que caen en un único salto de ciento cuarenta metros en el corazón de una reserva forestal que alberga miles de murciélagos frugívoros anidados en los acantilados circundantes. Cerca de allí, la ascensión al monte Afadjato, el punto más alto de Ghana con 885 metros, ofrece vistas sobre la vecina frontera togolesa.",
        galleryImages: `${R2}/journeys/ghana-wli-gallery1.jpg,${R2}/journeys/ghana-wli-gallery2.jpg,${R2}/journeys/ghana-wli-gallery3.jpg`,
        mapMarkerX: 70,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée aux chutes de Wli",
            titleEn: "Hike to Wli Falls",
            titleEs: "Caminata a las cataratas de Wli",
            description:
              "Randonnée à travers la réserve forestière jusqu'au pied des chutes de Wli, avec une pause baignade dans le bassin naturel et l'observation des colonies de chauves-souris frugivores nichées dans les falaises.",
            descriptionEn:
              "A hike through the forest reserve to the foot of Wli Falls, with a swim break in the natural pool and a chance to observe the fruit bat colonies nesting in the cliffs.",
            descriptionEs:
              "Caminata por la reserva forestal hasta el pie de las cataratas de Wli, con una pausa para bañarse en la poza natural y observar las colonias de murciélagos frugívoros anidados en los acantilados.",
            image: `${R2}/journeys/ghana-wli-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Ascension du mont Afadjato",
            titleEn: "Climbing Mount Afadjato",
            titleEs: "Ascensión al monte Afadjato",
            description:
              "Ascension matinale du mont Afadjato, point culminant du Ghana, à travers une forêt dense avant d'atteindre un sommet dégagé offrant une vue sur les collines environnantes et le Togo voisin.",
            descriptionEn:
              "A morning climb up Mount Afadjato, Ghana's highest point, through dense forest before reaching an open summit with views over the surrounding hills and neighbouring Togo.",
            descriptionEs:
              "Ascensión matutina al monte Afadjato, el punto más alto de Ghana, a través de un bosque denso antes de alcanzar una cima despejada con vistas a las colinas circundantes y al vecino Togo.",
            image: `${R2}/journeys/ghana-wli-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Tafi Atome et le lac Volta",
        titleEn: "Tafi Atome and Lake Volta",
        titleEs: "Tafi Atome y el lago Volta",
        intro:
          "Direction le sanctuaire de Tafi Atome, où des colonies de singes mona vivent en toute liberté au cœur du village, protégées depuis des générations par une croyance traditionnelle qui les considère comme sacrés. Dernière étape au bord du lac Volta, le plus grand réservoir artificiel du monde par sa surface, pour une croisière en fin de journée et une immersion dans la culture ewe, dont les tissages kente comptent parmi les plus réputés du pays.",
        introEn:
          "On to the Tafi Atome sanctuary, where colonies of mona monkeys live freely at the heart of the village, protected for generations by a traditional belief that considers them sacred. A final stop on the shores of Lake Volta, the world's largest reservoir by surface area, for a late-afternoon cruise and an immersion in Ewe culture, whose kente weaving ranks among the country's most renowned.",
        introEs:
          "Rumbo al santuario de Tafi Atome, donde colonias de monos mona viven en total libertad en el corazón del pueblo, protegidos desde hace generaciones por una creencia tradicional que los considera sagrados. Última etapa a orillas del lago Volta, el mayor embalse artificial del mundo por superficie, para un crucero al final del día y una inmersión en la cultura ewe, cuyos tejidos kente se cuentan entre los más reconocidos del país.",
        galleryImages: `${R2}/journeys/ghana-tafiatome-gallery1.jpg,${R2}/journeys/ghana-tafiatome-gallery2.jpg,${R2}/journeys/ghana-tafiatome-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Le sanctuaire des singes de Tafi Atome",
            titleEn: "The Tafi Atome monkey sanctuary",
            titleEs: "El santuario de monos de Tafi Atome",
            description:
              "Visite du sanctuaire de Tafi Atome au petit matin, moment où les singes mona sont les plus actifs, avec une explication par un guide villageois des croyances traditionnelles qui assurent leur protection depuis des générations.",
            descriptionEn:
              "A visit to the Tafi Atome sanctuary early in the morning, when the mona monkeys are most active, with a village guide explaining the traditional beliefs that have ensured their protection for generations.",
            descriptionEs:
              "Visita al santuario de Tafi Atome a primera hora de la mañana, momento en que los monos mona están más activos, con la explicación de un guía del pueblo sobre las creencias tradicionales que garantizan su protección desde hace generaciones.",
            image: `${R2}/journeys/ghana-tafiatome-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Croisière sur le lac Volta et tissage kente",
            titleEn: "Lake Volta cruise and kente weaving",
            titleEs: "Crucero por el lago Volta y tejido kente",
            description:
              "Croisière en fin de journée sur le lac Volta, puis visite d'un atelier de tissage kente pour observer la confection de ce tissu traditionnel, chaque motif et couleur portant une signification précise dans la culture ewe.",
            descriptionEn:
              "A late-afternoon cruise on Lake Volta, then a visit to a kente weaving workshop to watch this traditional cloth being made, each pattern and colour carrying a precise meaning in Ewe culture.",
            descriptionEs:
              "Crucero al final del día por el lago Volta, y después visita a un taller de tejido kente para observar la confección de esta tela tradicional, donde cada motivo y color tiene un significado preciso en la cultura ewe.",
            image: `${R2}/journeys/ghana-tafiatome-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "madagascar",
    tour: {
      name: "Madagascar : Isalo et le Sud, canyons et lémuriens",
      nameEn: "Madagascar: Isalo and the South, Canyons and Lemurs",
      nameEs: "Madagascar: Isalo y el Sur, cañones y lémures",
      slug: "madagascar-isalo-sud",
      image: `${R2}/tours/madagascar-isalo-sud.jpg`,
      images: `${R2}/trips/madagascar-isalo-gallery-1.jpg,${R2}/trips/madagascar-isalo-gallery-2.jpg,${R2}/trips/madagascar-isalo-gallery-3.jpg,${R2}/trips/madagascar-isalo-gallery-4.jpg,${R2}/trips/madagascar-isalo-gallery-5.jpg,${R2}/trips/madagascar-isalo-gallery-6.jpg`,
      tagline: "Un désert de grès sculpté par le vent, et des lémuriens catta qui n'ont jamais connu la peur de l'homme",
      taglineEn: "A sandstone desert carved by the wind, and ring-tailed lemurs that have never learned to fear humans",
      taglineEs: "Un desierto de arenisca esculpido por el viento, y lémures de cola anillada que nunca han aprendido a temer al hombre",
      description:
        "Le sud aride de Madagascar, à l'opposé des forêts humides du centre : les canyons de grès du parc national de l'Isalo, sculptés par des millions d'années d'érosion, et la réserve communautaire d'Anja, où des colonies entières de lémuriens catta vivent en liberté au milieu des rochers.",
      descriptionEn:
        "The arid south of Madagascar, a world away from the rainforests of the centre: the sandstone canyons of Isalo National Park, carved by millions of years of erosion, and the Anja Community Reserve, where entire troops of ring-tailed lemurs live freely among the rocks.",
      descriptionEs:
        "El árido sur de Madagascar, muy distinto de las selvas húmedas del centro: los cañones de arenisca del parque nacional de Isalo, esculpidos por millones de años de erosión, y la reserva comunitaria de Anja, donde colonias enteras de lémures de cola anillada viven en libertad entre las rocas.",
      price: 3400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
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
      order: 15,
    },
    sections: [
      {
        heading: "L'Isalo, un désert de grès à ciel ouvert",
        headingEn: "Isalo, an open-air sandstone desert",
        headingEs: "Isalo, un desierto de arenisca a cielo abierto",
        body:
          "Le parc national de l'Isalo déroule un paysage inattendu à Madagascar : canyons profonds, piscines naturelles d'eau turquoise et formations rocheuses érodées en formes improbables. Une randonnée mène à la piscine noire et à la piscine bleue, deux bassins naturels alimentés par des sources où il est possible de se baigner après plusieurs heures de marche sous le soleil.",
        bodyEn:
          "Isalo National Park unfolds an unexpected landscape for Madagascar: deep canyons, turquoise natural pools, and rock formations eroded into improbable shapes. A hike leads to the Black Pool and the Blue Pool, two spring-fed natural basins where a swim is well earned after hours of walking under the sun.",
        bodyEs:
          "El parque nacional de Isalo despliega un paisaje inesperado para Madagascar: cañones profundos, piscinas naturales de agua turquesa y formaciones rocosas erosionadas en formas improbables. Una caminata conduce a la piscina negra y a la piscina azul, dos pozas naturales alimentadas por manantiales donde uno se puede bañar tras varias horas de marcha bajo el sol.",
      },
      {
        heading: "Anja, la réserve des lémuriens catta",
        headingEn: "Anja, the ring-tailed lemur reserve",
        headingEs: "Anja, la reserva de los lémures de cola anillada",
        body:
          "La réserve communautaire d'Anja, gérée entièrement par le village voisin, protège plusieurs centaines de lémuriens catta au milieu d'un amphithéâtre de granite. Habitués à une présence humaine respectueuse, les lémuriens se laissent approcher à quelques mètres, offrant des observations rarement possibles ailleurs sur l'île. Les revenus du tourisme financent directement l'école et le dispensaire du village.",
        bodyEn:
          "The Anja Community Reserve, run entirely by the neighbouring village, protects several hundred ring-tailed lemurs within a granite amphitheatre. Used to a respectful human presence, the lemurs allow visitors to approach within a few metres, offering close observation rarely possible elsewhere on the island. Tourism revenue directly funds the village's school and health clinic.",
        bodyEs:
          "La reserva comunitaria de Anja, gestionada enteramente por el pueblo vecino, protege a varios cientos de lémures de cola anillada en un anfiteatro de granito. Acostumbrados a una presencia humana respetuosa, los lémures permiten acercarse a pocos metros, ofreciendo una observación rara vez posible en otro lugar de la isla. Los ingresos del turismo financian directamente la escuela y el dispensario del pueblo.",
      },
    ],
    hotels: [
      {
        name: "Isalo Rock Lodge",
        nameEn: "Isalo Rock Lodge",
        nameEs: "Isalo Rock Lodge",
        description:
          "Un lodge construit à même la roche du massif de l'Isalo, chambres avec vue directe sur les canyons, piscine à débordement face au coucher de soleil sur le grès.",
        descriptionEn:
          "A lodge built directly into the rock of the Isalo massif, rooms with direct canyon views, an infinity pool facing the sunset over the sandstone.",
        descriptionEs:
          "Un lodge construido directamente en la roca del macizo de Isalo, habitaciones con vistas directas a los cañones, piscina infinita frente a la puesta de sol sobre la arenisca.",
        image: `${R2}/trips/madagascar-isalo-hotel-isalo.jpg`,
      },
      {
        name: "Anja Eco Lodge",
        nameEn: "Anja Eco Lodge",
        nameEs: "Anja Eco Lodge",
        description:
          "Un petit établissement géré par la communauté locale à deux pas de la réserve, cases traditionnelles rénovées, cuisine familiale malgache servie sur une terrasse ombragée.",
        descriptionEn:
          "A small community-run property steps from the reserve, renovated traditional huts, home-style Malagasy cooking served on a shaded terrace.",
        descriptionEs:
          "Un pequeño establecimiento gestionado por la comunidad local a pocos pasos de la reserva, cabañas tradicionales renovadas, cocina casera malgache servida en una terraza con sombra.",
        image: `${R2}/trips/madagascar-isalo-hotel-anja.jpg`,
      },
    ],
  },
  {
    destinationSlug: "ethiopie",
    tour: {
      name: "Éthiopie : la vallée de l'Omo, mosaïque de peuples",
      nameEn: "Ethiopia: the Omo Valley, a Mosaic of Peoples",
      nameEs: "Etiopía: el valle del Omo, mosaico de pueblos",
      slug: "ethiopie-vallee-omo",
      image: `${R2}/tours/ethiopie-vallee-omo.jpg`,
      images: `${R2}/trips/ethiopie-omo-gallery-1.jpg,${R2}/trips/ethiopie-omo-gallery-2.jpg,${R2}/trips/ethiopie-omo-gallery-3.jpg,${R2}/trips/ethiopie-omo-gallery-4.jpg,${R2}/trips/ethiopie-omo-gallery-5.jpg,${R2}/trips/ethiopie-omo-gallery-6.jpg`,
      tagline: "Plus de quinze ethnies aux traditions intactes, dans l'un des creusets culturels les plus riches d'Afrique",
      taglineEn: "More than fifteen ethnic groups with intact traditions, in one of Africa's richest cultural crossroads",
      taglineEs: "Más de quince etnias con tradiciones intactas, en uno de los crisoles culturales más ricos de África",
      description:
        "Loin des hauts plateaux du nord éthiopien, la vallée de l'Omo abrite l'une des plus grandes diversités ethniques d'Afrique : Mursi et leurs plateaux labiaux, Hamer et leur cérémonie du saut du taureau, Karo et leurs peintures corporelles. Un voyage qui se construit autour de rencontres, jamais de mise en scène touristique.",
      descriptionEn:
        "Far from Ethiopia's northern highlands, the Omo Valley is home to one of Africa's greatest ethnic diversities: the Mursi and their lip plates, the Hamer and their bull-jumping ceremony, the Karo and their body painting. A journey built around genuine encounters, never a staged tourist show.",
      descriptionEs:
        "Lejos de los altiplanos del norte de Etiopía, el valle del Omo alberga una de las mayores diversidades étnicas de África: los mursi y sus platos labiales, los hamer y su ceremonia del salto del toro, los karo y sus pinturas corporales. Un viaje construido en torno a encuentros genuinos, nunca una puesta en escena turística.",
      price: 3500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Août à fév",
      whenLabelEn: "Aug to Feb",
      whenLabelEs: "Ago a feb",
      bestMonths: "august,september,october,november,december,january,february",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 16,
    },
    sections: [
      {
        heading: "Marchés et villages Hamer et Karo",
        headingEn: "Hamer and Karo markets and villages",
        headingEs: "Mercados y poblados hamer y karo",
        body:
          "Le voyage débute par la visite du marché de Turmi, où les Hamer viennent échanger bétail et récoltes dans un tourbillon de couleurs et de parures. Un séjour prolongé dans un village Karo, sur les rives du fleuve Omo, permet d'observer les peintures corporelles rituelles réalisées à l'argile blanche et à l'ocre, renouvelées chaque jour selon l'inspiration de chacun.",
        bodyEn:
          "The trip begins with a visit to the Turmi market, where the Hamer come to trade cattle and produce in a whirl of colour and adornment. An extended stay in a Karo village on the banks of the Omo River allows time to observe the ritual body painting done in white clay and ochre, reinvented daily according to each person's inspiration.",
        bodyEs:
          "El viaje comienza con la visita al mercado de Turmi, donde los hamer acuden a intercambiar ganado y cosechas en un torbellino de colores y adornos. Una estancia prolongada en un poblado karo, a orillas del río Omo, permite observar las pinturas corporales rituales realizadas con arcilla blanca y ocre, reinventadas cada día según la inspiración de cada persona.",
      },
      {
        heading: "Les Mursi et le parc du Mago",
        headingEn: "The Mursi and Mago National Park",
        headingEs: "Los mursi y el parque de Mago",
        body:
          "Direction le parc national du Mago, territoire des Mursi, connus pour les plateaux labiaux portés par les femmes dès l'adolescence, un symbole de statut social plutôt qu'une simple curiosité esthétique. La visite se fait toujours accompagnée d'un guide local qui connaît personnellement la communauté, condition indispensable pour un échange respectueux plutôt qu'une observation à distance.",
        bodyEn:
          "On to Mago National Park, home to the Mursi, known for the lip plates worn by women from adolescence onward — a marker of social status rather than a mere aesthetic curiosity. The visit is always accompanied by a local guide personally known to the community, an essential condition for a respectful exchange rather than a distant observation.",
        bodyEs:
          "Rumbo al parque nacional de Mago, territorio de los mursi, conocidos por los platos labiales que llevan las mujeres desde la adolescencia, un símbolo de estatus social más que una simple curiosidad estética. La visita siempre se hace acompañada de un guía local conocido personalmente por la comunidad, condición indispensable para un intercambio respetuoso en lugar de una observación a distancia.",
      },
    ],
    hotels: [
      {
        name: "Buska Lodge, Turmi",
        nameEn: "Buska Lodge, Turmi",
        nameEs: "Buska Lodge, Turmi",
        description:
          "Un lodge simple mais confortable en plein territoire Hamer, huttes rondes inspirées de l'architecture locale, point de départ idéal pour les visites de marchés et villages environnants.",
        descriptionEn:
          "A simple but comfortable lodge in the heart of Hamer territory, round huts inspired by local architecture, an ideal base for visiting nearby markets and villages.",
        descriptionEs:
          "Un lodge sencillo pero cómodo en pleno territorio hamer, cabañas redondas inspiradas en la arquitectura local, base ideal para visitar los mercados y poblados cercanos.",
        image: `${R2}/trips/ethiopie-omo-hotel-turmi.jpg`,
      },
      {
        name: "Jinka Resort",
        nameEn: "Jinka Resort",
        nameEs: "Jinka Resort",
        description:
          "Un établissement à la lisière du parc du Mago, chambres avec vue sur la vallée, dernière étape confortable avant le retour vers Addis-Abeba.",
        descriptionEn:
          "A property on the edge of Mago National Park, rooms with valley views, a comfortable last stop before the return to Addis Ababa.",
        descriptionEs:
          "Un establecimiento al borde del parque de Mago, habitaciones con vistas al valle, última etapa cómoda antes del regreso a Adís Abeba.",
        image: `${R2}/trips/ethiopie-omo-hotel-jinka.jpg`,
      },
    ],
  },
  {
    destinationSlug: "ghana",
    tour: {
      name: "Ghana : le Nord, savane et mosquées de terre",
      nameEn: "Ghana: the North, Savannah and Mud Mosques",
      nameEs: "Ghana: el Norte, sabana y mezquitas de barro",
      slug: "ghana-nord-mole",
      image: `${R2}/tours/ghana-nord-mole.jpg`,
      images: `${R2}/trips/ghana-nord-gallery-1.jpg,${R2}/trips/ghana-nord-gallery-2.jpg,${R2}/trips/ghana-nord-gallery-3.jpg,${R2}/trips/ghana-nord-gallery-4.jpg,${R2}/trips/ghana-nord-gallery-5.jpg,${R2}/trips/ghana-nord-gallery-6.jpg`,
      tagline: "Éléphants en liberté et architecture soudano-sahélienne, loin de la côte",
      taglineEn: "Free-roaming elephants and Sudano-Sahelian architecture, far from the coast",
      taglineEs: "Elefantes en libertad y arquitectura sudanosaheliana, lejos de la costa",
      description:
        "Une facette du Ghana méconnue des voyageurs qui s'arrêtent sur la côte : le parc national de Mole, plus grande réserve animalière du pays où les éléphants se croisent parfois à pied, et la mosquée de Larabanga, l'un des plus anciens exemples d'architecture soudano-sahélienne en terre crue d'Afrique de l'Ouest.",
      descriptionEn:
        "A side of Ghana unknown to travellers who stop only on the coast: Mole National Park, the country's largest game reserve, where elephants are sometimes encountered on foot, and Larabanga Mosque, one of West Africa's oldest examples of mud-built Sudano-Sahelian architecture.",
      descriptionEs:
        "Una cara de Ghana desconocida para los viajeros que solo se quedan en la costa: el parque nacional de Mole, la mayor reserva animal del país, donde a veces se pueden ver elefantes a pie, y la mezquita de Larabanga, uno de los ejemplos más antiguos de arquitectura sudanosaheliana de barro en África Occidental.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,family,groups",
      maxGuests: 6,
      featured: false,
      order: 17,
    },
    sections: [
      {
        heading: "Le parc national de Mole",
        headingEn: "Mole National Park",
        headingEs: "El parque nacional de Mole",
        body:
          "Le parc national de Mole, plus grande aire protégée du Ghana, se visite en partie à pied, accompagné d'un ranger armé — l'une des rares réserves d'Afrique de l'Ouest où cette approche reste possible. Éléphants, antilopes cobes et parfois lions se croisent le long de la rivière, avec une vue imprenable depuis la terrasse du lodge, construit à flanc de colline directement au-dessus d'un point d'eau fréquenté par la faune.",
        bodyEn:
          "Mole National Park, Ghana's largest protected area, is partly explored on foot, accompanied by an armed ranger — one of the few reserves in West Africa where this remains possible. Elephants, kob antelope, and occasionally lions are encountered along the river, with an unobstructed view from the lodge terrace, built into the hillside directly above a waterhole frequented by wildlife.",
        bodyEs:
          "El parque nacional de Mole, la mayor área protegida de Ghana, se recorre en parte a pie, acompañado de un ranger armado, una de las pocas reservas de África Occidental donde este enfoque sigue siendo posible. Elefantes, antílopes cobo y a veces leones se cruzan a lo largo del río, con una vista inmejorable desde la terraza del lodge, construido en la ladera justo encima de un abrevadero frecuentado por la fauna.",
      },
      {
        heading: "Larabanga et Tamale",
        headingEn: "Larabanga and Tamale",
        headingEs: "Larabanga y Tamale",
        body:
          "À quelques kilomètres du parc, le village de Larabanga abrite la plus ancienne mosquée du Ghana, un édifice en terre crue et bois datant du XVIIIe siècle dans le style soudano-sahélien, avec ses contreforts caractéristiques en pointe. Étape finale à Tamale, capitale régionale animée, pour une immersion dans un marché local loin des circuits touristiques du sud.",
        bodyEn:
          "A few kilometres from the park, the village of Larabanga is home to Ghana's oldest mosque, an 18th-century mud-and-wood building in the Sudano-Sahelian style, with its distinctive pointed buttresses. A final stop in Tamale, a lively regional capital, for an immersion in a local market far from the tourist circuits of the south.",
        bodyEs:
          "A pocos kilómetros del parque, el pueblo de Larabanga alberga la mezquita más antigua de Ghana, un edificio de barro y madera del siglo XVIII de estilo sudanosaheliano, con sus característicos contrafuertes puntiagudos. Última etapa en Tamale, animada capital regional, para una inmersión en un mercado local lejos de los circuitos turísticos del sur.",
      },
    ],
    hotels: [
      {
        name: "Mole Motel",
        nameEn: "Mole Motel",
        nameEs: "Mole Motel",
        description:
          "Le seul hébergement à l'intérieur du parc, construit sur un promontoire dominant un point d'eau où viennent boire éléphants et antilopes, visibles depuis la piscine ou la terrasse du restaurant.",
        descriptionEn:
          "The only accommodation inside the park, built on a promontory overlooking a waterhole where elephants and antelope come to drink, visible from the pool or the restaurant terrace.",
        descriptionEs:
          "El único alojamiento dentro del parque, construido en un promontorio que domina un abrevadero donde acuden a beber elefantes y antílopes, visibles desde la piscina o la terraza del restaurante.",
        image: `${R2}/trips/ghana-nord-hotel-mole.jpg`,
      },
      {
        name: "Discovery Lodge, Tamale",
        nameEn: "Discovery Lodge, Tamale",
        nameEs: "Discovery Lodge, Tamale",
        description:
          "Un établissement simple et bien tenu en périphérie de Tamale, jardin tropical et chambres climatisées, une étape confortable avant le vol retour vers Accra.",
        descriptionEn:
          "A simple, well-kept property on the outskirts of Tamale, a tropical garden and air-conditioned rooms, a comfortable stop before the flight back to Accra.",
        descriptionEs:
          "Un establecimiento sencillo y bien cuidado en las afueras de Tamale, jardín tropical y habitaciones con aire acondicionado, una etapa cómoda antes del vuelo de regreso a Accra.",
        image: `${R2}/trips/ghana-nord-hotel-tamale.jpg`,
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
