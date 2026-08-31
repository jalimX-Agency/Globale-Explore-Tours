// Asie du Sud-Est batch 1 (full region) — Vietnam, Cambodge, Indonésie, Myanmar, Laos, Bornéo,
// Philippines, Malaisie, Singapour. New trips bringing each destination to at least 3, styled
// on Black Tomato's real structure (a short number of named-hotel chapters, not an exhaustive
// day-by-day grind) rather than copying their text. This completes all 9 destinations in the
// Asie du Sud-Est region. Run with:
//   npx tsx scripts/seed-trips-asie-sud-est-1.ts
// Requires scripts/upload-images-asie-sud-est-1.ts to have been run first (this script refuses
// to write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "vietnam",
    tour: {
      name: "Vietnam : le delta du Mékong et Phu Quoc",
      nameEn: "Vietnam: The Mekong Delta and Phu Quoc",
      nameEs: "Vietnam: el delta del Mekong y Phu Quoc",
      slug: "vietnam-mekong-phuquoc",
      image: `${R2}/journeys/vietnam-mekong-phuquoc-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un labyrinthe de canaux et de marchés flottants, puis la plus grande île du pays, longtemps épargnée par le tourisme",
      taglineEn: "A maze of canals and floating markets, then the country's largest island, long spared by tourism",
      taglineEs: "Un laberinto de canales y mercados flotantes, y después la isla más grande del país, largo tiempo a salvo del turismo",
      description:
        "Un voyage vers le sud du Vietnam, loin de Hanoï et de la baie d'Halong : le delta du Mékong, grenier à riz du pays où des millions de personnes vivent au rythme des marées et des marchés flottants, puis Phu Quoc, la plus grande île du Vietnam, dont les plages de sable blanc et les villages de pêcheurs sont restés longtemps à l'écart du tourisme de masse malgré un développement récent accéléré.",
      descriptionEn:
        "A journey to southern Vietnam, far from Hanoi and Ha Long Bay: the Mekong Delta, the country's rice granary where millions of people live by the rhythm of the tides and floating markets, then Phu Quoc, Vietnam's largest island, whose white sand beaches and fishing villages long stayed off the mass-tourism trail despite recent rapid development.",
      descriptionEs:
        "Un viaje hacia el sur de Vietnam, lejos de Hanói y la bahía de Ha Long: el delta del Mekong, granero de arroz del país donde millones de personas viven al ritmo de las mareas y los mercados flotantes, y después Phu Quoc, la isla más grande de Vietnam, cuyas playas de arena blanca y pueblos de pescadores permanecieron mucho tiempo al margen del turismo de masas pese a un desarrollo reciente acelerado.",
      price: 2200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Dec à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 121,
    },
    chapters: [
      {
        title: "Le delta du Mékong",
        titleEn: "The Mekong Delta",
        titleEs: "El delta del Mekong",
        intro:
          "Premier chapitre dans le delta du Mékong, surnommé le « grenier à riz » du Vietnam, où le fleuve se divise en neuf bras avant de rejoindre la mer, irriguant une mosaïque de rizières, de vergers flottants et de canaux qui structurent toute la vie locale. Les marchés flottants de Cai Rang et Cai Be, où des centaines de bateaux chargés de fruits et légumes se négocient dès l'aube, comptent parmi les scènes les plus vivantes du Vietnam rural.",
        introEn:
          "The first chapter unfolds in the Mekong Delta, nicknamed Vietnam's \"rice granary,\" where the river splits into nine branches before reaching the sea, irrigating a mosaic of rice paddies, floating orchards, and canals that structure all of local life. The floating markets of Cai Rang and Cai Be, where hundreds of boats loaded with fruit and vegetables trade from dawn, rank among the liveliest scenes of rural Vietnam.",
        introEs:
          "El primer capítulo se desarrolla en el delta del Mekong, apodado el «granero de arroz» de Vietnam, donde el río se divide en nueve brazos antes de llegar al mar, irrigando un mosaico de arrozales, huertos flotantes y canales que estructuran toda la vida local. Los mercados flotantes de Cai Rang y Cai Be, donde cientos de barcos cargados de frutas y verduras se negocian desde el amanecer, se cuentan entre las escenas más vivas del Vietnam rural.",
        galleryImages: `${R2}/journeys/vietnam-mekong-gallery1.jpg,${R2}/journeys/vietnam-mekong-gallery2.jpg,${R2}/journeys/vietnam-mekong-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Le marché flottant de Cai Rang à l'aube",
            titleEn: "Cai Rang floating market at dawn",
            titleEs: "El mercado flotante de Cai Rang al amanecer",
            description:
              "Sortie en bateau dès l'aube vers le marché flottant de Cai Rang, le plus grand du delta, où des centaines d'embarcations chargées de fruits et légumes se négocient au fil de l'eau.",
            descriptionEn:
              "A boat outing at dawn to Cai Rang floating market, the delta's largest, where hundreds of boats loaded with fruit and vegetables trade on the water.",
            descriptionEs:
              "Salida en barco al amanecer hacia el mercado flotante de Cai Rang, el más grande del delta, donde cientos de embarcaciones cargadas de frutas y verduras se negocian sobre el agua.",
            image: `${R2}/journeys/vietnam-mekong-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Vergers et canaux étroits en sampan",
            titleEn: "Orchards and narrow canals by sampan",
            titleEs: "Huertos y canales estrechos en sampán",
            description:
              "Navigation en petit sampan à travers les canaux étroits bordés de cocotiers, visite d'un verger flottant et d'un atelier familial de fabrication de bonbons à la noix de coco.",
            descriptionEn:
              "A ride in a small sampan through narrow canals lined with coconut palms, a visit to a floating orchard and a family workshop making coconut candy.",
            descriptionEs:
              "Navegación en un pequeño sampán por estrechos canales bordeados de cocoteros, visita a un huerto flotante y a un taller familiar de fabricación de dulces de coco.",
            image: `${R2}/journeys/vietnam-mekong-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Phu Quoc, l'île préservée",
        titleEn: "Phu Quoc, the Preserved Island",
        titleEs: "Phu Quoc, la isla preservada",
        intro:
          "Vol vers Phu Quoc, la plus grande île du Vietnam nichée dans le golfe de Thaïlande, dont l'intérieur montagneux et forestier reste largement protégé par un parc national malgré le développement rapide de la côte. L'île conserve un savoir-faire séculaire de production de nuoc-mam, la sauce de poisson fermentée emblématique de la cuisine vietnamienne, ainsi que des villages de pêcheurs traditionnels le long de sa côte sud moins fréquentée.",
        introEn:
          "A flight to Phu Quoc, Vietnam's largest island nestled in the Gulf of Thailand, whose mountainous, forested interior remains largely protected by a national park despite rapid development along the coast. The island retains a centuries-old expertise in producing nuoc-mam, the fermented fish sauce emblematic of Vietnamese cuisine, as well as traditional fishing villages along its less-visited south coast.",
        introEs:
          "Vuelo hacia Phu Quoc, la isla más grande de Vietnam enclavada en el golfo de Tailandia, cuyo interior montañoso y boscoso permanece en gran parte protegido por un parque nacional pese al rápido desarrollo de la costa. La isla conserva un saber centenario en la producción de nuoc-mam, la salsa de pescado fermentada emblemática de la cocina vietnamita, así como pueblos de pescadores tradicionales a lo largo de su menos frecuentada costa sur.",
        galleryImages: `${R2}/journeys/vietnam-phuquoc-gallery1.jpg,${R2}/journeys/vietnam-phuquoc-gallery2.jpg,${R2}/journeys/vietnam-phuquoc-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 85,
        days: [
          {
            dayNumber: 1,
            title: "Les plages du sud et un village de pêcheurs",
            titleEn: "The southern beaches and a fishing village",
            titleEs: "Las playas del sur y un pueblo de pescadores",
            description:
              "Journée sur les plages de sable blanc du sud de l'île, moins fréquentées que la côte ouest, puis visite d'un village de pêcheurs traditionnel et d'une fabrique artisanale de nuoc-mam.",
            descriptionEn:
              "A day on the white sand beaches of the island's south, less crowded than the west coast, then a visit to a traditional fishing village and an artisanal nuoc-mam factory.",
            descriptionEs:
              "Día en las playas de arena blanca del sur de la isla, menos concurridas que la costa oeste, y visita a un pueblo de pescadores tradicional y a una fábrica artesanal de nuoc-mam.",
            image: `${R2}/journeys/vietnam-phuquoc-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sortie en bateau vers les îlots du sud",
            titleEn: "A boat trip to the southern islets",
            titleEs: "Salida en barco hacia los islotes del sur",
            description:
              "Excursion en bateau vers les petits îlots au sud de Phu Quoc, snorkeling au-dessus de récifs coralliens préservés et déjeuner de fruits de mer fraîchement pêchés sur une plage isolée.",
            descriptionEn:
              "A boat excursion to the small islets south of Phu Quoc, snorkelling above preserved coral reefs and a lunch of freshly caught seafood on a secluded beach.",
            descriptionEs:
              "Excursión en barco hacia los pequeños islotes al sur de Phu Quoc, esnórquel sobre arrecifes de coral preservados y almuerzo de marisco recién capturado en una playa aislada.",
            image: `${R2}/journeys/vietnam-phuquoc-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "cambodge",
    tour: {
      name: "Cambodge : les Cardamomes et Koh Rong",
      nameEn: "Cambodia: The Cardamom Mountains and Koh Rong",
      nameEs: "Camboya: las Cardamomo y Koh Rong",
      slug: "cambodge-cardamomes-kohrong",
      image: `${R2}/journeys/cambodge-cardamomes-kohrong-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "L'une des dernières grandes forêts primaires d'Asie du Sud-Est, puis une île aux eaux bioluminescentes",
      taglineEn: "One of the last great primary forests of South-East Asia, then an island with bioluminescent waters",
      taglineEs: "Uno de los últimos grandes bosques primarios del sudeste asiático, y después una isla de aguas bioluminiscentes",
      description:
        "Un voyage entre deux facettes sauvages du Cambodge, loin d'Angkor : les montagnes des Cardamomes, l'une des dernières grandes forêts primaires intactes d'Asie du Sud-Est où survivent éléphants et léopards indochinois, puis Koh Rong, île du golfe de Thaïlande dont les eaux s'illuminent certaines nuits d'un plancton bioluminescent, un phénomène naturel rare qui attire les voyageurs venus dormir sur ses plages désertes.",
      descriptionEn:
        "A journey between two wild sides of Cambodia, far from Angkor: the Cardamom Mountains, one of the last intact great primary forests of South-East Asia where elephants and Indochinese leopards still survive, then Koh Rong, an island in the Gulf of Thailand whose waters light up certain nights with bioluminescent plankton, a rare natural phenomenon that draws travellers to sleep on its deserted beaches.",
      descriptionEs:
        "Un viaje entre dos caras salvajes de Camboya, lejos de Angkor: las montañas Cardamomo, uno de los últimos grandes bosques primarios intactos del sudeste asiático donde todavía sobreviven elefantes y leopardos indochinos, y después Koh Rong, isla del golfo de Tailandia cuyas aguas se iluminan ciertas noches con plancton bioluminiscente, un raro fenómeno natural que atrae a viajeros a dormir en sus playas desiertas.",
      price: 2100,
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
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 123,
    },
    chapters: [
      {
        title: "Les montagnes des Cardamomes",
        titleEn: "The Cardamom Mountains",
        titleEs: "Las montañas Cardamomo",
        intro:
          "Premier chapitre dans les Cardamomes, chaîne de montagnes du sud-ouest du Cambodge qui abrite l'une des dernières grandes forêts primaires intactes d'Asie du Sud-Est, épargnée par la déforestation grâce à son isolement pendant les décennies de conflit qui ont touché le pays. Des programmes de conservation, portés par des rangers locaux formés à la lutte contre le braconnage, permettent la survie d'éléphants d'Asie, de léopards indochinois et d'une faune aviaire exceptionnelle.",
        introEn:
          "The first chapter unfolds in the Cardamoms, a mountain range in south-western Cambodia home to one of the last intact great primary forests of South-East Asia, spared deforestation thanks to its isolation during the decades of conflict that affected the country. Conservation programmes, led by local rangers trained to fight poaching, allow Asian elephants, Indochinese leopards, and an exceptional variety of birdlife to survive.",
        introEs:
          "El primer capítulo se desarrolla en las Cardamomo, cordillera del suroeste de Camboya que alberga uno de los últimos grandes bosques primarios intactos del sudeste asiático, a salvo de la deforestación gracias a su aislamiento durante las décadas de conflicto que afectaron al país. Programas de conservación, liderados por guardabosques locales formados en la lucha contra la caza furtiva, permiten la supervivencia de elefantes asiáticos, leopardos indochinos y una avifauna excepcional.",
        galleryImages: `${R2}/journeys/cambodge-cardamomes-gallery1.jpg,${R2}/journeys/cambodge-cardamomes-gallery2.jpg,${R2}/journeys/cambodge-cardamomes-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée dans la forêt primaire",
            titleEn: "A hike through the primary forest",
            titleEs: "Caminata por el bosque primario",
            description:
              "Randonnée guidée par un ranger local dans la forêt primaire des Cardamomes, à la recherche de traces d'éléphants sauvages et d'une avifaune exceptionnelle, jusqu'à un poste d'observation en canopée.",
            descriptionEn:
              "A hike guided by a local ranger through the Cardamoms' primary forest, in search of wild elephant tracks and exceptional birdlife, to a canopy observation post.",
            descriptionEs:
              "Caminata guiada por un guardabosques local por el bosque primario de las Cardamomo, en busca de rastros de elefantes salvajes y una avifauna excepcional, hasta un puesto de observación en el dosel arbóreo.",
            image: `${R2}/journeys/cambodge-cardamomes-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Kayak sur la rivière et cascade cachée",
            titleEn: "Kayaking the river to a hidden waterfall",
            titleEs: "Kayak por el río hasta una cascada oculta",
            description:
              "Descente en kayak d'une rivière des Cardamomes jusqu'à une cascade isolée, baignade dans un bassin naturel entouré de jungle dense, loin de toute autre présence.",
            descriptionEn:
              "A kayak descent of a Cardamom river to an isolated waterfall, a swim in a natural pool surrounded by dense jungle, far from any other presence.",
            descriptionEs:
              "Descenso en kayak por un río de las Cardamomo hasta una cascada aislada, baño en una piscina natural rodeada de selva densa, lejos de cualquier otra presencia.",
            image: `${R2}/journeys/cambodge-cardamomes-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Koh Rong et le plancton bioluminescent",
        titleEn: "Koh Rong and the Bioluminescent Plankton",
        titleEs: "Koh Rong y el plancton bioluminiscente",
        intro:
          "Route vers la côte puis bateau jusqu'à Koh Rong, deuxième plus grande île du Cambodge dont l'intérieur reste couvert de jungle et dont certaines plages, dépourvues d'électricité et de route, ont conservé une atmosphère authentique loin des complexes hôteliers. Certaines nuits sans lune, le plancton bioluminescent qui prospère dans ses eaux peu profondes s'illumine au moindre mouvement, transformant chaque pas dans l'eau en une traînée de lumière bleutée.",
        introEn:
          "A drive to the coast then a boat to Koh Rong, Cambodia's second-largest island, whose interior remains covered in jungle and whose beaches, some without electricity or roads, have kept an authentic atmosphere far from resort complexes. On certain moonless nights, the bioluminescent plankton thriving in its shallow waters lights up at the slightest movement, turning every step in the water into a trail of blue light.",
        introEs:
          "Ruta hacia la costa y barco hasta Koh Rong, segunda isla más grande de Camboya, cuyo interior sigue cubierto de selva y cuyas playas, algunas sin electricidad ni carreteras, han conservado una atmósfera auténtica lejos de los complejos hoteleros. Ciertas noches sin luna, el plancton bioluminiscente que prospera en sus aguas poco profundas se ilumina con el más mínimo movimiento, convirtiendo cada paso en el agua en una estela de luz azulada.",
        galleryImages: `${R2}/journeys/cambodge-kohrong-gallery1.jpg,${R2}/journeys/cambodge-kohrong-gallery2.jpg,${R2}/journeys/cambodge-kohrong-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Les plages sauvages de la côte est",
            titleEn: "The wild beaches of the east coast",
            titleEs: "Las playas salvajes de la costa este",
            description:
              "Traversée en bateau à longue queue vers les plages sauvages de la côte est de Koh Rong, dépourvues d'électricité et de route, journée de farniente loin de toute autre présence.",
            descriptionEn:
              "A longtail boat crossing to the wild beaches of Koh Rong's east coast, with no electricity or roads, a day of relaxation far from any other presence.",
            descriptionEs:
              "Travesía en barco de cola larga hacia las playas salvajes de la costa este de Koh Rong, sin electricidad ni carreteras, día de descanso lejos de cualquier otra presencia.",
            image: `${R2}/journeys/cambodge-kohrong-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Baignade nocturne dans le plancton bioluminescent",
            titleEn: "A night swim in the bioluminescent plankton",
            titleEs: "Baño nocturno en el plancton bioluminiscente",
            description:
              "Sortie en bateau au crépuscule pour observer le plancton bioluminescent qui illumine les eaux peu profondes de l'île, baignade nocturne les nuits sans lune pour une expérience optimale.",
            descriptionEn:
              "A boat trip at dusk to observe the bioluminescent plankton lighting up the island's shallow waters, a night swim on moonless nights for the best experience.",
            descriptionEs:
              "Salida en barco al atardecer para observar el plancton bioluminiscente que ilumina las aguas poco profundas de la isla, baño nocturno en las noches sin luna para una experiencia óptima.",
            image: `${R2}/journeys/cambodge-kohrong-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

journeyTrips.push(
  {
    destinationSlug: "indonesie",
    tour: {
      name: "Indonésie : Komodo et les dragons",
      nameEn: "Indonesia: Komodo and the Dragons",
      nameEs: "Indonesia: Komodo y los dragones",
      slug: "indonesie-komodo-dragons",
      image: `${R2}/journeys/indonesie-komodo-dragons-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le plus grand lézard vivant au monde dans son habitat naturel, puis un archipel de collines émeraude et de plages roses",
      taglineEn: "The world's largest living lizard in its natural habitat, then an archipelago of emerald hills and pink beaches",
      taglineEs: "El lagarto vivo más grande del mundo en su hábitat natural, y después un archipiélago de colinas esmeralda y playas rosas",
      description:
        "Un voyage loin de Bali : le parc national de Komodo, classé à l'UNESCO, seul endroit au monde où survit à l'état sauvage le dragon de Komodo, plus grand lézard vivant pouvant dépasser trois mètres, puis les îles voisines de l'archipel, dont les collines de savane doré de Padar et la rare plage de sable rose de Komodo, colorée par des fragments de corail rouge mêlés au sable blanc.",
      descriptionEn:
        "A journey far from Bali: Komodo National Park, UNESCO-listed, the only place in the world where the Komodo dragon survives in the wild, the largest living lizard, sometimes exceeding three metres, then the archipelago's neighbouring islands, including Padar's golden savanna hills and Komodo's rare pink sand beach, coloured by fragments of red coral mixed with white sand.",
      descriptionEs:
        "Un viaje lejos de Bali: el parque nacional de Komodo, declarado por la UNESCO, único lugar del mundo donde sobrevive en libertad el dragón de Komodo, el lagarto vivo más grande, que a veces supera los tres metros, y después las islas vecinas del archipiélago, entre ellas las colinas de sabana dorada de Padar y la rara playa de arena rosa de Komodo, coloreada por fragmentos de coral rojo mezclados con arena blanca.",
      price: 2900,
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
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 125,
    },
    chapters: [
      {
        title: "Le parc national de Komodo",
        titleEn: "Komodo National Park",
        titleEs: "El parque nacional de Komodo",
        intro:
          "Premier chapitre au parc national de Komodo, seul endroit au monde où le dragon de Komodo survit à l'état sauvage, un varan géant pouvant peser plus de quatre-vingt-dix kilos et dont la morsure, chargée de bactéries et de venin, suffit à immobiliser un buffle en quelques jours. Classé à l'UNESCO depuis 1991, le parc s'étend sur plusieurs îles volcaniques aux collines couvertes de savane, un paysage aride qui contraste avec la jungle tropicale du reste de l'Indonésie.",
        introEn:
          "The first chapter unfolds at Komodo National Park, the only place in the world where the Komodo dragon survives in the wild, a giant monitor lizard weighing over ninety kilos, whose bite, loaded with bacteria and venom, is enough to immobilise a buffalo within days. UNESCO-listed since 1991, the park spans several volcanic islands with savanna-covered hills, an arid landscape contrasting with the tropical jungle of the rest of Indonesia.",
        introEs:
          "El primer capítulo se desarrolla en el parque nacional de Komodo, único lugar del mundo donde el dragón de Komodo sobrevive en libertad, un varano gigante que puede pesar más de noventa kilos y cuya mordedura, cargada de bacterias y veneno, basta para inmovilizar a un búfalo en pocos días. Declarado por la UNESCO desde 1991, el parque se extiende por varias islas volcánicas de colinas cubiertas de sabana, un paisaje árido que contrasta con la selva tropical del resto de Indonesia.",
        galleryImages: `${R2}/journeys/indonesie-komodo-gallery1.jpg,${R2}/journeys/indonesie-komodo-gallery2.jpg,${R2}/journeys/indonesie-komodo-gallery3.jpg`,
        mapMarkerX: 70,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Sur les traces des dragons de Komodo",
            titleEn: "On the trail of the Komodo dragons",
            titleEs: "Tras las huellas de los dragones de Komodo",
            description:
              "Randonnée guidée par un ranger sur l'île de Rinca à la recherche de dragons de Komodo dans leur habitat naturel, entre savane sèche et points d'eau où se rassemblent les varans.",
            descriptionEn:
              "A ranger-guided hike on Rinca Island in search of Komodo dragons in their natural habitat, between dry savanna and waterholes where the monitors gather.",
            descriptionEs:
              "Caminata guiada por un guardabosques en la isla de Rinca en busca de dragones de Komodo en su hábitat natural, entre sabana seca y puntos de agua donde se reúnen los varanos.",
            image: `${R2}/journeys/indonesie-komodo-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Plongée avec les raies manta",
            titleEn: "Diving with manta rays",
            titleEs: "Buceo con mantarrayas",
            description:
              "Sortie en bateau vers un site de plongée réputé pour ses raies manta, présentes toute l'année dans les eaux riches en plancton du parc national de Komodo.",
            descriptionEn:
              "A boat trip to a dive site renowned for its manta rays, present year-round in the plankton-rich waters of Komodo National Park.",
            descriptionEs:
              "Salida en barco hacia un lugar de buceo célebre por sus mantarrayas, presentes todo el año en las aguas ricas en plancton del parque nacional de Komodo.",
            image: `${R2}/journeys/indonesie-komodo-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Padar et la plage rose",
        titleEn: "Padar and the Pink Beach",
        titleEs: "Padar y la playa rosa",
        intro:
          "Route en bateau vers Padar, île devenue l'un des points de vue les plus photographiés d'Indonésie depuis son sommet, offrant un panorama sur trois baies aux eaux turquoise séparées par des collines de savane doré. À proximité, la plage rose de Komodo, l'une des rares au monde, doit sa teinte à des fragments de corail rouge broyés par les vagues et mêlés au sable blanc corallien.",
        introEn:
          "A boat ride to Padar, an island that has become one of Indonesia's most photographed viewpoints from its summit, offering a panorama over three turquoise bays separated by golden savanna hills. Nearby, Komodo's pink beach, one of the rare few in the world, owes its hue to fragments of red coral crushed by the waves and mixed with white coral sand.",
        introEs:
          "Ruta en barco hacia Padar, isla que se ha convertido en uno de los miradores más fotografiados de Indonesia desde su cima, con un panorama sobre tres bahías de aguas turquesas separadas por colinas de sabana dorada. Cerca de allí, la playa rosa de Komodo, una de las pocas del mundo, debe su tono a fragmentos de coral rojo triturados por las olas y mezclados con arena blanca coralina.",
        galleryImages: `${R2}/journeys/indonesie-padar-gallery1.jpg,${R2}/journeys/indonesie-padar-gallery2.jpg,${R2}/journeys/indonesie-padar-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Le point de vue de Padar au lever du soleil",
            titleEn: "The Padar viewpoint at sunrise",
            titleEs: "El mirador de Padar al amanecer",
            description:
              "Ascension jusqu'au sommet de Padar avant l'aube pour admirer le lever du soleil sur les trois baies aux eaux turquoise séparées par des collines de savane doré.",
            descriptionEn:
              "An ascent to the summit of Padar before dawn to admire sunrise over the three turquoise bays separated by golden savanna hills.",
            descriptionEs:
              "Ascenso a la cima de Padar antes del amanecer para admirar la salida del sol sobre las tres bahías de aguas turquesas separadas por colinas de sabana dorada.",
            image: `${R2}/journeys/indonesie-padar-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Snorkeling sur la plage rose",
            titleEn: "Snorkelling at the pink beach",
            titleEs: "Esnórquel en la playa rosa",
            description:
              "Journée sur la plage rose de Komodo, l'une des rares au monde, snorkeling au-dessus de récifs coralliens peu profonds accessibles directement depuis le rivage.",
            descriptionEn:
              "A day at Komodo's pink beach, one of the rare few in the world, snorkelling above shallow coral reefs accessible directly from the shore.",
            descriptionEs:
              "Día en la playa rosa de Komodo, una de las pocas del mundo, esnórquel sobre arrecifes de coral poco profundos accesibles directamente desde la orilla.",
            image: `${R2}/journeys/indonesie-padar-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "myanmar",
    tour: {
      name: "Myanmar : Hpa-An, entre grottes et rocher sacré",
      nameEn: "Myanmar: Hpa-An, Between Caves and a Sacred Rock",
      nameEs: "Myanmar: Hpa-An, entre cuevas y una roca sagrada",
      slug: "myanmar-hpaan-zwegabin",
      image: `${R2}/journeys/myanmar-hpaan-zwegabin-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des grottes bouddhistes creusées dans des pitons calcaires, puis un monastère perché où logent les moines seuls avec les singes",
      taglineEn: "Buddhist caves carved into limestone peaks, then a monastery where monks live alone alongside monkeys",
      taglineEs: "Cuevas budistas excavadas en picos calizos, y después un monasterio encaramado donde los monjes viven solos junto a los monos",
      description:
        "Un voyage dans l'état Kayin, loin de Bagan et du lac Inle : Hpa-An, petite ville nichée parmi des pitons calcaires spectaculaires qui abritent des grottes bouddhistes ornées de milliers de statues, puis le mont Zwegabin, sommet le plus élevé de la région couronné d'un monastère où les moines partagent leur toit avec des singes en liberté et où l'ascension nocturne permet d'assister au lever du soleil sur les rizières environnantes.",
      descriptionEn:
        "A journey through Kayin State, far from Bagan and Inle Lake: Hpa-An, a small town nestled among spectacular limestone peaks that shelter Buddhist caves adorned with thousands of statues, then Mount Zwegabin, the region's highest summit crowned by a monastery where monks share their roof with free-roaming monkeys and where a night ascent allows visitors to catch sunrise over the surrounding rice paddies.",
      descriptionEs:
        "Un viaje por el estado de Kayin, lejos de Bagan y del lago Inle: Hpa-An, pequeña ciudad enclavada entre espectaculares picos calizos que albergan cuevas budistas adornadas con miles de estatuas, y después el monte Zwegabin, la cumbre más alta de la región coronada por un monasterio donde los monjes comparten su techo con monos en libertad y donde un ascenso nocturno permite asistir al amanecer sobre los arrozales circundantes.",
      price: 2500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Nov à fév",
      whenLabelEn: "Nov to Feb",
      whenLabelEs: "Nov a feb",
      bestMonths: "november,december,january,february",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 127,
    },
    chapters: [
      {
        title: "Les grottes bouddhistes de Hpa-An",
        titleEn: "The Buddhist Caves of Hpa-An",
        titleEs: "Las cuevas budistas de Hpa-An",
        intro:
          "Premier chapitre à Hpa-An, petite ville de l'état Kayin nichée parmi des pitons calcaires qui émergent brusquement des rizières environnantes, un paysage largement épargné par le tourisme de masse qui touche d'autres régions du Myanmar. La grotte de Sadan, transformée en sanctuaire bouddhiste depuis des siècles, traverse de part en part l'une de ces montagnes calcaires et débouche sur un lac entouré de rizières, un parcours ponctué de milliers de statues de Bouddha nichées dans la roche.",
        introEn:
          "The first chapter unfolds in Hpa-An, a small town in Kayin State nestled among limestone peaks that rise abruptly from the surrounding rice paddies, a landscape largely spared the mass tourism affecting other regions of Myanmar. Sadan Cave, turned into a Buddhist sanctuary for centuries, runs straight through one of these limestone mountains and opens onto a lake surrounded by rice paddies, a route punctuated by thousands of Buddha statues nestled in the rock.",
        introEs:
          "El primer capítulo se desarrolla en Hpa-An, pequeña ciudad del estado de Kayin enclavada entre picos calizos que emergen bruscamente de los arrozales circundantes, un paisaje en gran parte a salvo del turismo de masas que afecta a otras regiones de Myanmar. La cueva de Sadan, convertida en santuario budista desde hace siglos, atraviesa de lado a lado una de estas montañas calizas y desemboca en un lago rodeado de arrozales, un recorrido salpicado de miles de estatuas de Buda encajadas en la roca.",
        galleryImages: `${R2}/journeys/myanmar-hpaan-gallery1.jpg,${R2}/journeys/myanmar-hpaan-gallery2.jpg,${R2}/journeys/myanmar-hpaan-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "La traversée de la grotte de Sadan",
            titleEn: "Crossing Sadan Cave",
            titleEs: "La travesía de la cueva de Sadan",
            description:
              "Traversée à pied de la grotte de Sadan, sanctuaire bouddhiste creusé dans un piton calcaire et orné de milliers de statues de Bouddha, jusqu'à un lac entouré de rizières de l'autre côté de la montagne.",
            descriptionEn:
              "A walk through Sadan Cave, a Buddhist sanctuary carved into a limestone peak and adorned with thousands of Buddha statues, to a lake surrounded by rice paddies on the other side of the mountain.",
            descriptionEs:
              "Travesía a pie por la cueva de Sadan, santuario budista excavado en un pico calizo y adornado con miles de estatuas de Buda, hasta un lago rodeado de arrozales al otro lado de la montaña.",
            image: `${R2}/journeys/myanmar-hpaan-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Kayak parmi les pitons calcaires",
            titleEn: "Kayaking among the limestone peaks",
            titleEs: "Kayak entre los picos calizos",
            description:
              "Sortie en kayak sur la rivière Thanlwin au coucher du soleil, entre les pitons calcaires qui se reflètent dans l'eau, avec un arrêt dans un village de pêcheurs traditionnel.",
            descriptionEn:
              "A kayak outing on the Thanlwin River at sunset, among the limestone peaks reflected in the water, with a stop at a traditional fishing village.",
            descriptionEs:
              "Salida en kayak por el río Thanlwin al atardecer, entre los picos calizos que se reflejan en el agua, con parada en un pueblo de pescadores tradicional.",
            image: `${R2}/journeys/myanmar-hpaan-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le mont Zwegabin et son monastère",
        titleEn: "Mount Zwegabin and its Monastery",
        titleEs: "El monte Zwegabin y su monasterio",
        intro:
          "Route vers le mont Zwegabin, sommet le plus élevé de la région de Hpa-An, couronné d'un monastère où une poignée de moines vivent en quasi-autarcie aux côtés de macaques en liberté totale, nourris quotidiennement selon une tradition bouddhiste locale. L'ascension nocturne, réalisée à la lampe frontale pour atteindre le sommet avant l'aube, est récompensée par un lever de soleil embrasant les rizières et les pitons calcaires environnants.",
        introEn:
          "The road to Mount Zwegabin, the highest summit in the Hpa-An region, crowned by a monastery where a handful of monks live in near self-sufficiency alongside fully free-roaming macaques, fed daily according to a local Buddhist tradition. The night ascent, made by headlamp to reach the summit before dawn, is rewarded by a sunrise setting the surrounding rice paddies and limestone peaks ablaze.",
        introEs:
          "Ruta hacia el monte Zwegabin, la cumbre más alta de la región de Hpa-An, coronada por un monasterio donde un puñado de monjes viven en casi total autosuficiencia junto a macacos completamente en libertad, alimentados a diario según una tradición budista local. El ascenso nocturno, realizado con linterna frontal para llegar a la cima antes del amanecer, se ve recompensado por una salida del sol que incendia los arrozales y los picos calizos circundantes.",
        galleryImages: `${R2}/journeys/myanmar-zwegabin-gallery1.jpg,${R2}/journeys/myanmar-zwegabin-gallery2.jpg,${R2}/journeys/myanmar-zwegabin-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Ascension nocturne vers le sommet",
            titleEn: "A night ascent to the summit",
            titleEs: "Ascenso nocturno hacia la cima",
            description:
              "Ascension du mont Zwegabin de nuit à la lampe frontale, à travers une forêt dense, pour atteindre le sommet et son monastère avant le lever du soleil sur les rizières environnantes.",
            descriptionEn:
              "A night ascent of Mount Zwegabin by headlamp, through dense forest, to reach the summit and its monastery before sunrise over the surrounding rice paddies.",
            descriptionEs:
              "Ascenso al monte Zwegabin de noche con linterna frontal, a través de un bosque denso, para llegar a la cima y a su monasterio antes de la salida del sol sobre los arrozales circundantes.",
            image: `${R2}/journeys/myanmar-zwegabin-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le monastère et ses macaques en liberté",
            titleEn: "The monastery and its free-roaming macaques",
            titleEs: "El monasterio y sus macacos en libertad",
            description:
              "Visite du monastère sommital de Zwegabin, où les moines partagent leur quotidien avec des macaques en liberté totale, puis descente par un sentier différent à travers la jungle.",
            descriptionEn:
              "A visit to the summit monastery of Zwegabin, where monks share their daily life with fully free-roaming macaques, then a descent by a different trail through the jungle.",
            descriptionEs:
              "Visita al monasterio de la cima de Zwegabin, donde los monjes comparten su día a día con macacos completamente en libertad, y descenso por un sendero diferente a través de la selva.",
            image: `${R2}/journeys/myanmar-zwegabin-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

journeyTrips.push(
  {
    destinationSlug: "laos",
    tour: {
      name: "Laos : la plaine des Jarres et Vang Vieng",
      nameEn: "Laos: The Plain of Jars and Vang Vieng",
      nameEs: "Laos: la llanura de las Jarras y Vang Vieng",
      slug: "laos-plainedesjarres-vangvieng",
      image: `${R2}/journeys/laos-plainedesjarres-vangvieng-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des milliers de jarres mégalithiques dont l'origine reste un mystère, puis une bourgade karstique posée sur la rivière Nam Song",
      taglineEn: "Thousands of megalithic jars whose origin remains a mystery, then a karst-ringed town on the Nam Song River",
      taglineEs: "Miles de jarras megalíticas cuyo origen sigue siendo un misterio, y después una localidad kárstica a orillas del río Nam Song",
      description:
        "Un voyage dans le centre du Laos, loin de Luang Prabang et du Mékong : la plaine des Jarres, plateau du Xieng Khouang parsemé de plus de deux mille jarres de pierre mégalithiques vieilles de deux mille ans dont l'usage exact reste débattu par les archéologues, puis Vang Vieng, bourgade nichée entre rizières et pitons karstiques le long de la rivière Nam Song, longtemps prisée des routards pour son cadre spectaculaire.",
      descriptionEn:
        "A journey through central Laos, far from Luang Prabang and the Mekong: the Plain of Jars, a plateau in Xieng Khouang dotted with over two thousand megalithic stone jars two thousand years old, whose exact purpose remains debated by archaeologists, then Vang Vieng, a town nestled between rice paddies and karst peaks along the Nam Song River, long favoured by backpackers for its spectacular setting.",
      descriptionEs:
        "Un viaje por el centro de Laos, lejos de Luang Prabang y del Mekong: la llanura de las Jarras, meseta de Xieng Khouang salpicada de más de dos mil jarras de piedra megalíticas de dos mil años cuyo uso exacto sigue siendo debatido por los arqueólogos, y después Vang Vieng, localidad enclavada entre arrozales y picos kársticos a orillas del río Nam Song, apreciada durante mucho tiempo por los mochileros por su entorno espectacular.",
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
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 129,
    },
    chapters: [
      {
        title: "La plaine des Jarres",
        titleEn: "The Plain of Jars",
        titleEs: "La llanura de las Jarras",
        intro:
          "Premier chapitre sur le plateau du Xieng Khouang, où plus de deux mille jarres de pierre mégalithiques, certaines hautes de plus de trois mètres et vieilles d'environ deux mille ans, sont dispersées sur des dizaines de sites archéologiques encore en partie déminés des bombes non explosées héritées de la guerre secrète menée en Laos dans les années 1960 et 1970. L'usage exact de ces jarres reste débattu, entre hypothèses funéraires et récipients de stockage rituel, sans qu'aucune inscription n'ait jamais permis de trancher.",
        introEn:
          "The first chapter unfolds on the Xieng Khouang plateau, where over two thousand megalithic stone jars, some over three metres tall and roughly two thousand years old, are scattered across dozens of archaeological sites still being partly cleared of unexploded ordnance left over from the secret war waged in Laos in the 1960s and 1970s. The exact purpose of these jars remains debated, between funerary hypotheses and ritual storage vessels, with no inscription ever settling the question.",
        introEs:
          "El primer capítulo se desarrolla en la meseta de Xieng Khouang, donde más de dos mil jarras de piedra megalíticas, algunas de más de tres metros de altura y de unos dos mil años de antigüedad, están dispersas por decenas de yacimientos arqueológicos todavía en parte desminados de bombas sin explotar heredadas de la guerra secreta librada en Laos en las décadas de 1960 y 1970. El uso exacto de estas jarras sigue siendo debatido, entre hipótesis funerarias y recipientes de almacenamiento ritual, sin que ninguna inscripción haya permitido zanjar la cuestión.",
        galleryImages: `${R2}/journeys/laos-plainedesjarres-gallery1.jpg,${R2}/journeys/laos-plainedesjarres-gallery2.jpg,${R2}/journeys/laos-plainedesjarres-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Le site principal des jarres mégalithiques",
            titleEn: "The main site of the megalithic jars",
            titleEs: "El yacimiento principal de las jarras megalíticas",
            description:
              "Visite du site principal de la plaine des Jarres, le plus vaste et le plus densément peuplé de jarres de pierre, accompagné d'un guide expliquant les différentes hypothèses archéologiques sur leur origine.",
            descriptionEn:
              "A visit to the main site of the Plain of Jars, the largest and most densely populated with stone jars, accompanied by a guide explaining the various archaeological hypotheses about their origin.",
            descriptionEs:
              "Visita al yacimiento principal de la llanura de las Jarras, el más extenso y densamente poblado de jarras de piedra, acompañado de un guía que explica las distintas hipótesis arqueológicas sobre su origen.",
            image: `${R2}/journeys/laos-plainedesjarres-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les villages Hmong et Tai Dam du plateau",
            titleEn: "The Hmong and Tai Dam villages of the plateau",
            titleEs: "Los pueblos hmong y tai dam de la meseta",
            description:
              "Route à travers le plateau du Xieng Khouang à la rencontre de villages Hmong et Tai Dam, minorités ethniques qui perpétuent un artisanat textile distinct dans cette région reculée du Laos.",
            descriptionEn:
              "A drive across the Xieng Khouang plateau to meet Hmong and Tai Dam villages, ethnic minorities who carry on a distinct textile craft in this remote region of Laos.",
            descriptionEs:
              "Ruta por la meseta de Xieng Khouang al encuentro de pueblos hmong y tai dam, minorías étnicas que perpetúan una artesanía textil distinta en esta remota región de Laos.",
            image: `${R2}/journeys/laos-plainedesjarres-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Vang Vieng et la rivière Nam Song",
        titleEn: "Vang Vieng and the Nam Song River",
        titleEs: "Vang Vieng y el río Nam Song",
        intro:
          "Route vers Vang Vieng, bourgade nichée dans un cadre spectaculaire de pitons karstiques qui surplombent la rivière Nam Song et les rizières environnantes, longtemps réputée pour une vie nocturne intense avant de se repositionner ces dernières années vers un tourisme d'aventure plus tranquille. Grottes, lagons d'eau turquoise et sentiers de randonnée à travers les montagnes calcaires composent aujourd'hui l'essentiel des activités de cette région redevenue plus paisible.",
        introEn:
          "The road to Vang Vieng, a town nestled in a spectacular setting of karst peaks overlooking the Nam Song River and surrounding rice paddies, long known for an intense nightlife before repositioning in recent years toward calmer adventure tourism. Caves, turquoise lagoons, and hiking trails through the limestone mountains now make up the bulk of activities in this region that has become more peaceful again.",
        introEs:
          "Ruta hacia Vang Vieng, localidad enclavada en un entorno espectacular de picos kársticos que dominan el río Nam Song y los arrozales circundantes, conocida durante mucho tiempo por una intensa vida nocturna antes de reposicionarse en los últimos años hacia un turismo de aventura más tranquilo. Cuevas, lagunas de agua turquesa y senderos de excursión por las montañas calizas componen hoy la mayor parte de las actividades de esta región que ha vuelto a ser más apacible.",
        galleryImages: `${R2}/journeys/laos-vangvieng-gallery1.jpg,${R2}/journeys/laos-vangvieng-gallery2.jpg,${R2}/journeys/laos-vangvieng-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Kayak sur la rivière Nam Song",
            titleEn: "Kayaking the Nam Song River",
            titleEs: "Kayak por el río Nam Song",
            description:
              "Descente en kayak de la rivière Nam Song entre les pitons karstiques, avec des arrêts dans des grottes et lagons d'eau turquoise accessibles uniquement depuis l'eau.",
            descriptionEn:
              "A kayak descent of the Nam Song River among the karst peaks, with stops at caves and turquoise lagoons accessible only from the water.",
            descriptionEs:
              "Descenso en kayak por el río Nam Song entre los picos kársticos, con paradas en cuevas y lagunas de agua turquesa accesibles solo desde el agua.",
            image: `${R2}/journeys/laos-vangvieng-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée jusqu'à un point de vue karstique",
            titleEn: "A hike to a karst viewpoint",
            titleEs: "Caminata hasta un mirador kárstico",
            description:
              "Randonnée jusqu'à un point de vue en surplomb des pitons karstiques de Vang Vieng, panorama sur les rizières et la rivière Nam Song serpentant à travers la vallée.",
            descriptionEn:
              "A hike to a viewpoint overlooking the karst peaks of Vang Vieng, a panorama over the rice paddies and the Nam Song River winding through the valley.",
            descriptionEs:
              "Caminata hasta un mirador que domina los picos kársticos de Vang Vieng, panorama sobre los arrozales y el río Nam Song serpenteando por el valle.",
            image: `${R2}/journeys/laos-vangvieng-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "bornee",
    tour: {
      name: "Bornéo : les grottes de Mulu et le Sarawak",
      nameEn: "Borneo: The Mulu Caves and Sarawak",
      nameEs: "Borneo: las cuevas de Mulu y Sarawak",
      slug: "bornee-mulu-sarawak",
      image: `${R2}/journeys/bornee-mulu-sarawak-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "L'un des plus grands réseaux de grottes calcaires au monde, puis la jungle profonde du Sarawak malaisien",
      taglineEn: "One of the largest limestone cave networks in the world, then the deep jungle of Malaysian Sarawak",
      taglineEs: "Una de las mayores redes de cuevas calizas del mundo, y después la selva profunda del Sarawak malasio",
      description:
        "Un voyage dans le nord de Bornéo, loin de Kota Kinabalu et de la rivière Kinabatangan : le parc national de Gunung Mulu, classé à l'UNESCO pour l'un des plus grands réseaux de grottes calcaires au monde, dont la chambre de Sarawak pourrait contenir plusieurs cathédrales, puis la jungle profonde du Sarawak malaisien, où des ponts suspendus en canopée et une faune abondante, dont l'orang-outan, subsistent dans l'une des forêts tropicales les plus anciennes de la planète.",
      descriptionEn:
        "A journey through northern Borneo, far from Kota Kinabalu and the Kinabatangan River: Gunung Mulu National Park, UNESCO-listed for one of the largest limestone cave networks in the world, whose Sarawak Chamber could hold several cathedrals, then the deep jungle of Malaysian Sarawak, where suspended canopy bridges and abundant wildlife, including the orangutan, survive in one of the oldest tropical rainforests on the planet.",
      descriptionEs:
        "Un viaje por el norte de Borneo, lejos de Kota Kinabalu y del río Kinabatangan: el parque nacional de Gunung Mulu, declarado por la UNESCO por una de las mayores redes de cuevas calizas del mundo, cuya cámara de Sarawak podría albergar varias catedrales, y después la selva profunda del Sarawak malasio, donde puentes colgantes en el dosel arbóreo y una fauna abundante, incluido el orangután, subsisten en una de las selvas tropicales más antiguas del planeta.",
      price: 3300,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mars à oct",
      whenLabelEn: "March to Oct",
      whenLabelEs: "Marzo a oct",
      bestMonths: "march,april,may,june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 131,
    },
    chapters: [
      {
        title: "Les grottes de Gunung Mulu",
        titleEn: "The Gunung Mulu Caves",
        titleEs: "Las cuevas de Gunung Mulu",
        intro:
          "Premier chapitre au parc national de Gunung Mulu, classé à l'UNESCO pour abriter l'un des plus grands réseaux de grottes calcaires connus au monde, dont la chambre de Sarawak, unique cavité naturelle assez vaste pour contenir plusieurs cathédrales gothiques. La grotte du Vent et la grotte du Cerf, aménagées de passerelles pour la visite, abritent des millions de chauves-souris dont l'envol groupé au crépuscule forme un spectacle naturel saisissant, une spirale noire qui s'étire parfois sur plus d'une heure.",
        introEn:
          "The first chapter unfolds at Gunung Mulu National Park, UNESCO-listed for housing one of the largest known limestone cave networks in the world, including the Sarawak Chamber, a unique natural cavity vast enough to hold several Gothic cathedrals. Wind Cave and Deer Cave, fitted with walkways for visitors, shelter millions of bats whose mass exodus at dusk forms a striking natural spectacle, a black spiral that sometimes stretches on for over an hour.",
        introEs:
          "El primer capítulo se desarrolla en el parque nacional de Gunung Mulu, declarado por la UNESCO por albergar una de las mayores redes de cuevas calizas conocidas del mundo, incluida la cámara de Sarawak, cavidad natural única lo bastante amplia como para contener varias catedrales góticas. La cueva del Viento y la cueva del Ciervo, equipadas con pasarelas para la visita, albergan millones de murciélagos cuyo vuelo masivo al anochecer forma un espectáculo natural impresionante, una espiral negra que a veces se prolonga más de una hora.",
        galleryImages: `${R2}/journeys/bornee-mulu-gallery1.jpg,${R2}/journeys/bornee-mulu-gallery2.jpg,${R2}/journeys/bornee-mulu-gallery3.jpg`,
        mapMarkerX: 70,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "La grotte du Cerf et l'envol des chauves-souris",
            titleEn: "Deer Cave and the bat exodus",
            titleEs: "La cueva del Ciervo y el vuelo de los murciélagos",
            description:
              "Visite de la grotte du Cerf, l'un des plus grands passages souterrains au monde accessibles au public, puis observation au crépuscule de l'envol de millions de chauves-souris quittant la grotte en une spirale continue.",
            descriptionEn:
              "A visit to Deer Cave, one of the largest publicly accessible underground passages in the world, then an evening observation of millions of bats leaving the cave in a continuous spiral.",
            descriptionEs:
              "Visita a la cueva del Ciervo, uno de los mayores pasadizos subterráneos del mundo accesibles al público, y observación al atardecer del vuelo de millones de murciélagos que abandonan la cueva en una espiral continua.",
            image: `${R2}/journeys/bornee-mulu-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La chambre de Sarawak, la plus grande cavité connue",
            titleEn: "The Sarawak Chamber, the largest known cavity",
            titleEs: "La cámara de Sarawak, la mayor cavidad conocida",
            description:
              "Excursion vers la grotte du Vent et ses formations de calcite sculptées, puis approche de la chambre de Sarawak, unique cavité naturelle assez vaste pour contenir plusieurs cathédrales.",
            descriptionEn:
              "An excursion to Wind Cave and its sculpted calcite formations, then an approach to the Sarawak Chamber, a unique natural cavity vast enough to hold several cathedrals.",
            descriptionEs:
              "Excursión a la cueva del Viento y sus esculpidas formaciones de calcita, y aproximación a la cámara de Sarawak, cavidad natural única lo bastante amplia como para contener varias catedrales.",
            image: `${R2}/journeys/bornee-mulu-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La jungle profonde du Sarawak",
        titleEn: "The Deep Jungle of Sarawak",
        titleEs: "La selva profunda de Sarawak",
        intro:
          "Route vers la jungle profonde du Sarawak malaisien, l'une des forêts tropicales les plus anciennes de la planète, dont l'âge est estimé à plus de cent trente millions d'années, largement antérieure aux forêts amazoniennes ou congolaises. Des ponts suspendus en canopée, aménagés à plusieurs dizaines de mètres du sol, permettent d'observer une faune abondante incluant l'orang-outan de Bornéo, espèce en danger dont la survie dépend directement de la préservation de cet écosystème unique.",
        introEn:
          "The road into the deep jungle of Malaysian Sarawak, one of the oldest tropical rainforests on the planet, estimated at over one hundred and thirty million years old, far predating the Amazon or Congo rainforests. Canopy suspension bridges, built several dozen metres above the ground, allow visitors to observe abundant wildlife including the Bornean orangutan, an endangered species whose survival depends directly on the preservation of this unique ecosystem.",
        introEs:
          "Ruta hacia la selva profunda del Sarawak malasio, una de las selvas tropicales más antiguas del planeta, con una edad estimada en más de ciento treinta millones de años, muy anterior a las selvas amazónica o congoleña. Puentes colgantes en el dosel arbóreo, instalados a varias decenas de metros del suelo, permiten observar una fauna abundante que incluye el orangután de Borneo, especie en peligro cuya supervivencia depende directamente de la preservación de este ecosistema único.",
        galleryImages: `${R2}/journeys/bornee-sarawak-gallery1.jpg,${R2}/journeys/bornee-sarawak-gallery2.jpg,${R2}/journeys/bornee-sarawak-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Le pont suspendu en canopée",
            titleEn: "The canopy suspension bridge",
            titleEs: "El puente colgante en el dosel arbóreo",
            description:
              "Traversée d'un pont suspendu en canopée à plusieurs dizaines de mètres du sol, à la recherche d'orangs-outans et d'une avifaune abondante dans l'une des plus anciennes forêts tropicales du monde.",
            descriptionEn:
              "A crossing of a canopy suspension bridge several dozen metres above the ground, in search of orangutans and abundant birdlife in one of the world's oldest tropical rainforests.",
            descriptionEs:
              "Cruce de un puente colgante en el dosel arbóreo a varias decenas de metros del suelo, en busca de orangutanes y una abundante avifauna en una de las selvas tropicales más antiguas del mundo.",
            image: `${R2}/journeys/bornee-sarawak-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Rencontre avec une communauté Iban",
            titleEn: "Meeting an Iban community",
            titleEs: "Encuentro con una comunidad iban",
            description:
              "Visite d'une maison longue traditionnelle de la communauté Iban, groupe ethnique dayak du Sarawak, partage d'un repas et découverte de l'artisanat local du tissage de rotin.",
            descriptionEn:
              "A visit to a traditional longhouse of the Iban community, a Dayak ethnic group in Sarawak, sharing a meal and discovering local rattan-weaving crafts.",
            descriptionEs:
              "Visita a una casa larga tradicional de la comunidad iban, grupo étnico dayak de Sarawak, comida compartida y descubrimiento de la artesanía local del tejido de ratán.",
            image: `${R2}/journeys/bornee-sarawak-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

journeyTrips.push(
  {
    destinationSlug: "philippines",
    tour: {
      name: "Philippines : les rizières de Banaue et Sagada",
      nameEn: "Philippines: The Banaue Rice Terraces and Sagada",
      nameEs: "Filipinas: las terrazas de arroz de Banaue y Sagada",
      slug: "philippines-banaue-sagada",
      image: `${R2}/journeys/philippines-banaue-sagada-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des rizières en terrasses vieilles de deux mille ans surnommées le huitième merveille du monde, puis des cercueils suspendus à flanc de falaise",
      taglineEn: "Two-thousand-year-old rice terraces nicknamed the eighth wonder of the world, then coffins hanging on a cliff face",
      taglineEs: "Terrazas de arroz de dos mil años apodadas la octava maravilla del mundo, y después ataúdes colgados en la ladera de un acantilado",
      description:
        "Un voyage dans les montagnes de la Cordillère, au nord de Luzon, loin de Palawan et Bohol : les rizières en terrasses de Banaue, sculptées à flanc de montagne il y a environ deux mille ans par le peuple Ifugao et surnommées la « huitième merveille du monde », puis Sagada, village de montagne où la tradition funéraire des cercueils suspendus, accrochés depuis des siècles aux falaises calcaires, reste pratiquée par certaines familles.",
      descriptionEn:
        "A journey through the Cordillera mountains of northern Luzon, far from Palawan and Bohol: the Banaue rice terraces, carved into the mountainside about two thousand years ago by the Ifugao people and nicknamed the \"eighth wonder of the world,\" then Sagada, a mountain village where the funerary tradition of hanging coffins, attached for centuries to limestone cliffs, is still practised by some families.",
      descriptionEs:
        "Un viaje por las montañas de la Cordillera, al norte de Luzón, lejos de Palawan y Bohol: las terrazas de arroz de Banaue, talladas en la ladera de la montaña hace unos dos mil años por el pueblo ifugao y apodadas la «octava maravilla del mundo», y después Sagada, pueblo de montaña donde la tradición funeraria de los ataúdes colgantes, fijados desde hace siglos a los acantilados calizos, sigue siendo practicada por algunas familias.",
      price: 2200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Nov à mai",
      whenLabelEn: "Nov to May",
      whenLabelEs: "Nov a mayo",
      bestMonths: "november,december,january,february,march,april,may",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 133,
    },
    chapters: [
      {
        title: "Les rizières en terrasses de Banaue",
        titleEn: "The Banaue Rice Terraces",
        titleEs: "Las terrazas de arroz de Banaue",
        intro:
          "Premier chapitre à Banaue, où le peuple Ifugao a sculpté à flanc de montagne, il y a environ deux mille ans et entièrement à la main, des rizières en terrasses qui s'élèvent jusqu'à mille cinq cents mètres d'altitude et qui, mises bout à bout, s'étendraient sur plus de vingt mille kilomètres. Ce système d'irrigation ancestral, encore alimenté aujourd'hui par un réseau de canaux détournant l'eau des forêts environnantes, a valu à ces rizières le surnom de « huitième merveille du monde » et un classement à l'UNESCO.",
        introEn:
          "The first chapter unfolds in Banaue, where the Ifugao people carved rice terraces into the mountainside entirely by hand about two thousand years ago, rising to fifteen hundred metres in altitude and, laid end to end, stretching over twenty thousand kilometres. This ancestral irrigation system, still fed today by a network of channels diverting water from the surrounding forests, earned these terraces the nickname \"eighth wonder of the world\" and UNESCO listing.",
        introEs:
          "El primer capítulo se desarrolla en Banaue, donde el pueblo ifugao talló en la ladera de la montaña, hace unos dos mil años y enteramente a mano, terrazas de arroz que se elevan hasta mil quinientos metros de altitud y que, puestas una tras otra, se extenderían más de veinte mil kilómetros. Este sistema de riego ancestral, todavía alimentado hoy por una red de canales que desvían el agua de los bosques circundantes, valió a estas terrazas el apodo de «octava maravilla del mundo» y su declaración por la UNESCO.",
        galleryImages: `${R2}/journeys/philippines-banaue-gallery1.jpg,${R2}/journeys/philippines-banaue-gallery2.jpg,${R2}/journeys/philippines-banaue-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Le point de vue de Banaue et le village de Batad",
            titleEn: "The Banaue viewpoint and Batad village",
            titleEs: "El mirador de Banaue y el pueblo de Batad",
            description:
              "Visite du point de vue principal sur les rizières de Banaue, puis randonnée jusqu'au village reculé de Batad, accessible uniquement à pied, dont les rizières en amphithéâtre comptent parmi les plus spectaculaires de la région.",
            descriptionEn:
              "A visit to the main viewpoint over the Banaue terraces, then a hike to the remote village of Batad, accessible only on foot, whose amphitheatre-shaped terraces rank among the region's most spectacular.",
            descriptionEs:
              "Visita al mirador principal sobre las terrazas de Banaue, y caminata hasta el remoto pueblo de Batad, accesible solo a pie, cuyas terrazas en forma de anfiteatro se cuentan entre las más espectaculares de la región.",
            image: `${R2}/journeys/philippines-banaue-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Rencontre avec des sculpteurs Ifugao",
            titleEn: "Meeting Ifugao woodcarvers",
            titleEs: "Encuentro con talladores ifugao",
            description:
              "Visite d'un atelier de sculpteurs Ifugao, réputés pour leurs statuettes en bois de riz appelées bulul, gardiennes traditionnelles des récoltes selon les croyances animistes locales.",
            descriptionEn:
              "A visit to an Ifugao woodcarvers' workshop, known for their wooden rice guardian figures called bulul, traditional protectors of the harvest according to local animist beliefs.",
            descriptionEs:
              "Visita a un taller de talladores ifugao, célebres por sus estatuillas de madera llamadas bulul, guardianas tradicionales de las cosechas según las creencias animistas locales.",
            image: `${R2}/journeys/philippines-banaue-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Sagada et les cercueils suspendus",
        titleEn: "Sagada and the Hanging Coffins",
        titleEs: "Sagada y los ataúdes colgantes",
        intro:
          "Route vers Sagada, village de montagne où la communauté Igorot pratique depuis plusieurs siècles la tradition funéraire des cercueils suspendus, accrochés à flanc de falaise calcaire pour rapprocher les défunts du ciel selon les croyances locales. Bien que largement remplacée par des rites funéraires plus modernes, cette pratique perdure encore aujourd'hui pour certaines familles, faisant de Sagada l'un des sites culturels les plus singuliers des Philippines.",
        introEn:
          "The road to Sagada, a mountain village where the Igorot community has practised the hanging-coffin funerary tradition for several centuries, attaching them to limestone cliff faces to bring the deceased closer to the sky according to local beliefs. Though largely replaced by more modern funeral rites, the practice still continues today for some families, making Sagada one of the most singular cultural sites in the Philippines.",
        introEs:
          "Ruta hacia Sagada, pueblo de montaña donde la comunidad igorot practica desde hace varios siglos la tradición funeraria de los ataúdes colgantes, fijados en las paredes de acantilados calizos para acercar a los difuntos al cielo según las creencias locales. Aunque en gran parte sustituida por ritos funerarios más modernos, la práctica persiste hoy en algunas familias, lo que convierte a Sagada en uno de los lugares culturales más singulares de Filipinas.",
        galleryImages: `${R2}/journeys/philippines-sagada-gallery1.jpg,${R2}/journeys/philippines-sagada-gallery2.jpg,${R2}/journeys/philippines-sagada-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Les falaises aux cercueils suspendus",
            titleEn: "The hanging coffin cliffs",
            titleEs: "Los acantilados de los ataúdes colgantes",
            description:
              "Randonnée jusqu'aux falaises calcaires d'Echo Valley où sont suspendus des cercueils traditionnels, certains vieux de plusieurs décennies, selon une pratique funéraire toujours vivante dans la communauté Igorot.",
            descriptionEn:
              "A hike to the limestone cliffs of Echo Valley where traditional coffins hang, some decades old, following a funerary practice still alive within the Igorot community.",
            descriptionEs:
              "Caminata hasta los acantilados calizos de Echo Valley donde cuelgan ataúdes tradicionales, algunos de varias décadas de antigüedad, según una práctica funeraria todavía viva en la comunidad igorot.",
            image: `${R2}/journeys/philippines-sagada-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les grottes de Sumaguing et les rizières de Sagada",
            titleEn: "Sumaguing Cave and the Sagada rice terraces",
            titleEs: "La cueva de Sumaguing y las terrazas de Sagada",
            description:
              "Exploration de la grotte de Sumaguing, réseau de galeries calcaires ornées de formations spectaculaires, puis promenade dans les rizières en terrasses moins connues qui entourent le village de Sagada.",
            descriptionEn:
              "An exploration of Sumaguing Cave, a network of limestone galleries adorned with spectacular formations, then a stroll through the lesser-known rice terraces surrounding Sagada village.",
            descriptionEs:
              "Exploración de la cueva de Sumaguing, red de galerías calizas adornadas con espectaculares formaciones, y paseo por las menos conocidas terrazas de arroz que rodean el pueblo de Sagada.",
            image: `${R2}/journeys/philippines-sagada-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "malaisie",
    tour: {
      name: "Malaisie : les îles Perhentian et Taman Negara",
      nameEn: "Malaysia: The Perhentian Islands and Taman Negara",
      nameEs: "Malasia: las islas Perhentian y Taman Negara",
      slug: "malaisie-perhentian-tamannegara",
      image: `${R2}/journeys/malaisie-perhentian-tamannegara-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Deux îles jumelles sans voiture ni feu rouge, puis l'une des plus anciennes forêts tropicales du monde",
      taglineEn: "Twin islands with no cars or traffic lights, then one of the world's oldest tropical rainforests",
      taglineEs: "Dos islas gemelas sin coches ni semáforos, y después una de las selvas tropicales más antiguas del mundo",
      description:
        "Un voyage entre deux visages sauvages de la Malaisie, loin de Kuala Lumpur et des Cameron Highlands : les îles Perhentian, archipel de la côte est où deux îles jumelles sans voiture ni route bitumée abritent des récifs coralliens préservés, puis Taman Negara, forêt tropicale estimée à plus de cent trente millions d'années, l'une des plus anciennes au monde, explorée depuis le plus long pont suspendu en canopée de la planète.",
      descriptionEn:
        "A journey between two wild faces of Malaysia, far from Kuala Lumpur and the Cameron Highlands: the Perhentian Islands, an east-coast archipelago where two twin islands with no cars or paved roads shelter preserved coral reefs, then Taman Negara, a tropical rainforest estimated at over one hundred and thirty million years old, one of the oldest in the world, explored from the planet's longest canopy suspension bridge.",
      descriptionEs:
        "Un viaje entre dos caras salvajes de Malasia, lejos de Kuala Lumpur y las Cameron Highlands: las islas Perhentian, archipiélago de la costa este donde dos islas gemelas sin coches ni carreteras asfaltadas albergan arrecifes de coral preservados, y después Taman Negara, selva tropical estimada en más de ciento treinta millones de años, una de las más antiguas del mundo, explorada desde el puente colgante en el dosel arbóreo más largo del planeta.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mars à oct",
      whenLabelEn: "March to Oct",
      whenLabelEs: "Marzo a oct",
      bestMonths: "march,april,may,june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 135,
    },
    chapters: [
      {
        title: "Les îles Perhentian",
        titleEn: "The Perhentian Islands",
        titleEs: "Las islas Perhentian",
        intro:
          "Premier chapitre aux îles Perhentian, archipel de la côte est malaisienne composé de deux îles jumelles, Besar et Kecil, dépourvues de voiture et de route bitumée, où les déplacements se font à pied le long de sentiers côtiers ou en bateau-taxi entre les plages. Les récifs coralliens qui entourent les îles, protégés par leur statut de parc marin depuis 1994, comptent parmi les mieux préservés de la péninsule malaise et abritent tortues, requins de récif et une biodiversité corallienne exceptionnelle.",
        introEn:
          "The first chapter unfolds on the Perhentian Islands, an east-coast Malaysian archipelago made up of two twin islands, Besar and Kecil, with no cars or paved roads, where getting around means walking coastal trails or taking a water taxi between beaches. The coral reefs surrounding the islands, protected by marine park status since 1994, rank among the best preserved on the Malay Peninsula and shelter turtles, reef sharks, and exceptional coral biodiversity.",
        introEs:
          "El primer capítulo se desarrolla en las islas Perhentian, archipiélago de la costa este malasia formado por dos islas gemelas, Besar y Kecil, sin coches ni carreteras asfaltadas, donde los desplazamientos se hacen a pie por senderos costeros o en taxi acuático entre playas. Los arrecifes de coral que rodean las islas, protegidos por su estatus de parque marino desde 1994, se cuentan entre los mejor conservados de la península malaya y albergan tortugas, tiburones de arrecife y una biodiversidad coralina excepcional.",
        galleryImages: `${R2}/journeys/malaisie-perhentian-gallery1.jpg,${R2}/journeys/malaisie-perhentian-gallery2.jpg,${R2}/journeys/malaisie-perhentian-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Snorkeling parmi les tortues et les récifs",
            titleEn: "Snorkelling among turtles and reefs",
            titleEs: "Esnórquel entre tortugas y arrecifes",
            description:
              "Sortie en bateau vers plusieurs points de snorkeling autour des îles Perhentian, à la recherche de tortues marines, de requins de récif à pointe noire et de coraux préservés.",
            descriptionEn:
              "A boat trip to several snorkelling spots around the Perhentian Islands, in search of sea turtles, blacktip reef sharks, and preserved corals.",
            descriptionEs:
              "Salida en barco hacia varios puntos de esnórquel alrededor de las islas Perhentian, en busca de tortugas marinas, tiburones de arrecife de punta negra y corales preservados.",
            image: `${R2}/journeys/malaisie-perhentian-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Traversée à pied entre les plages",
            titleEn: "A walk between the beaches",
            titleEs: "Travesía a pie entre las playas",
            description:
              "Marche le long des sentiers côtiers reliant les différentes plages de l'île, seul moyen de déplacement sur ces îles sans voiture, avec des arrêts dans des criques isolées.",
            descriptionEn:
              "A walk along the coastal trails linking the island's different beaches, the only way to get around on these car-free islands, with stops at secluded coves.",
            descriptionEs:
              "Caminata por los senderos costeros que unen las diferentes playas de la isla, único medio de desplazamiento en estas islas sin coches, con paradas en calas aisladas.",
            image: `${R2}/journeys/malaisie-perhentian-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Taman Negara, la forêt millénaire",
        titleEn: "Taman Negara, the Ancient Forest",
        titleEs: "Taman Negara, el bosque milenario",
        intro:
          "Route vers Taman Negara, forêt tropicale dont l'âge est estimé à plus de cent trente millions d'années, largement antérieure aux forêts amazoniennes, ce qui en fait l'un des écosystèmes tropicaux les plus anciens de la planète. Le plus long pont suspendu en canopée du monde, aménagé à quarante mètres du sol sur plus de cinq cents mètres de long, permet d'observer la forêt depuis la cime des arbres, tandis que des affûts nocturnes le long des rivières révèlent une faune discrète incluant tapirs et éléphants pygmées.",
        introEn:
          "The road to Taman Negara, a tropical rainforest estimated at over one hundred and thirty million years old, far predating the Amazon, making it one of the oldest tropical ecosystems on the planet. The world's longest canopy suspension bridge, built forty metres above the ground and over five hundred metres long, allows visitors to observe the forest from the treetops, while night hides along the rivers reveal discreet wildlife including tapirs and pygmy elephants.",
        introEs:
          "Ruta hacia Taman Negara, selva tropical con una edad estimada en más de ciento treinta millones de años, muy anterior a la Amazonia, lo que la convierte en uno de los ecosistemas tropicales más antiguos del planeta. El puente colgante en el dosel arbóreo más largo del mundo, instalado a cuarenta metros del suelo a lo largo de más de quinientos metros, permite observar el bosque desde la copa de los árboles, mientras que puestos de observación nocturnos junto a los ríos revelan una fauna discreta que incluye tapires y elefantes pigmeos.",
        galleryImages: `${R2}/journeys/malaisie-tamannegara-gallery1.jpg,${R2}/journeys/malaisie-tamannegara-gallery2.jpg,${R2}/journeys/malaisie-tamannegara-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 50,
        days: [
          {
            dayNumber: 1,
            title: "Le plus long pont suspendu en canopée",
            titleEn: "The world's longest canopy suspension bridge",
            titleEs: "El puente colgante en el dosel arbóreo más largo del mundo",
            description:
              "Traversée du plus long pont suspendu en canopée du monde, à quarante mètres de hauteur, offrant une vue rare sur la cime de l'une des plus anciennes forêts tropicales de la planète.",
            descriptionEn:
              "A crossing of the world's longest canopy suspension bridge, forty metres up, offering a rare view over the treetops of one of the planet's oldest tropical rainforests.",
            descriptionEs:
              "Cruce del puente colgante en el dosel arbóreo más largo del mundo, a cuarenta metros de altura, con una vista poco común sobre la copa de una de las selvas tropicales más antiguas del planeta.",
            image: `${R2}/journeys/malaisie-tamannegara-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Affût nocturne le long de la rivière",
            titleEn: "A night hide along the river",
            titleEs: "Puesto de observación nocturno junto al río",
            description:
              "Sortie nocturne en bateau le long de la rivière Tembeling à la recherche d'une faune discrète, tapirs, civettes et parfois éléphants pygmées venus s'abreuver au crépuscule.",
            descriptionEn:
              "A night boat trip along the Tembeling River in search of discreet wildlife, tapirs, civets, and sometimes pygmy elephants coming to drink at dusk.",
            descriptionEs:
              "Salida nocturna en barco por el río Tembeling en busca de una fauna discreta, tapires, civetas y a veces elefantes pigmeos que acuden a beber al atardecer.",
            image: `${R2}/journeys/malaisie-tamannegara-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "singapour",
    tour: {
      name: "Singapour : Katong et l'île de Pulau Ubin",
      nameEn: "Singapore: Katong and Pulau Ubin Island",
      nameEs: "Singapur: Katong y la isla de Pulau Ubin",
      slug: "singapour-katong-pulauubin",
      image: `${R2}/journeys/singapour-katong-pulauubin-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un quartier peranakan aux façades pastel, puis la dernière île de la cité-État restée figée dans les années 1960",
      taglineEn: "A Peranakan quarter of pastel facades, then the city-state's last island frozen in the 1960s",
      taglineEs: "Un barrio peranakan de fachadas pastel, y después la última isla de la ciudad-estado congelada en la década de 1960",
      description:
        "Un voyage dans le Singapour intime, loin de Marina Bay et du gratte-ciel : Katong et Joo Chiat, quartiers résidentiels aux maisons-boutiques peranakan couvertes de carreaux de céramique colorés, héritage de la culture métisse sino-malaise qui prospéra dans le détroit de Malacca, puis Pulau Ubin, dernière île rurale de Singapour où villages en bois, forêt secondaire et absence quasi totale de béton offrent un aperçu du pays avant son développement fulgurant.",
      descriptionEn:
        "A journey through intimate Singapore, far from Marina Bay and the skyscrapers: Katong and Joo Chiat, residential districts of Peranakan shophouses covered in colourful ceramic tiles, a legacy of the mixed Chinese-Malay culture that thrived in the Strait of Malacca, then Pulau Ubin, Singapore's last rural island, where wooden villages, secondary forest, and an almost total absence of concrete offer a glimpse of the country before its lightning-fast development.",
      descriptionEs:
        "Un viaje por el Singapur íntimo, lejos de Marina Bay y los rascacielos: Katong y Joo Chiat, barrios residenciales de casas-tienda peranakan cubiertas de coloridos azulejos de cerámica, legado de la cultura mestiza sino-malaya que prosperó en el estrecho de Malaca, y después Pulau Ubin, última isla rural de Singapur, donde pueblos de madera, bosque secundario y una ausencia casi total de hormigón ofrecen una visión del país antes de su fulgurante desarrollo.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Fév à avril | Juil à sept",
      whenLabelEn: "Feb to April | July to Sept",
      whenLabelEs: "Feb a abril | jul a sept",
      bestMonths: "february,march,april,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 137,
    },
    chapters: [
      {
        title: "Katong, le cœur peranakan de Singapour",
        titleEn: "Katong, Singapore's Peranakan Heart",
        titleEs: "Katong, el corazón peranakan de Singapur",
        intro:
          "Premier chapitre à Katong et Joo Chiat, quartiers résidentiels de l'est de Singapour qui concentrent la plus grande densité de maisons-boutiques peranakan de la cité-État, façades pastel ornées de carreaux de céramique importés d'Angleterre et de motifs en bois finement sculptés. Cette architecture témoigne de la culture peranakan, née du métissage entre marchands chinois installés dès le XVe siècle et populations malaises locales, dont la cuisine, les costumes et la langue créole perdurent encore aujourd'hui dans le quartier.",
        introEn:
          "The first chapter unfolds in Katong and Joo Chiat, residential districts in eastern Singapore that concentrate the city-state's highest density of Peranakan shophouses, pastel facades adorned with ceramic tiles imported from England and finely carved wooden motifs. This architecture bears witness to Peranakan culture, born from the intermarriage of Chinese merchants settled from the 15th century onward and local Malay populations, whose cuisine, dress, and creole language still endure in the district today.",
        introEs:
          "El primer capítulo se desarrolla en Katong y Joo Chiat, barrios residenciales del este de Singapur que concentran la mayor densidad de casas-tienda peranakan de la ciudad-estado, fachadas pastel adornadas con azulejos de cerámica importados de Inglaterra y motivos de madera finamente tallados. Esta arquitectura da testimonio de la cultura peranakan, nacida del mestizaje entre comerciantes chinos establecidos desde el siglo XV y poblaciones malayas locales, cuya cocina, trajes y lengua criolla perduran todavía hoy en el barrio.",
        galleryImages: `${R2}/journeys/singapour-katong-gallery1.jpg,${R2}/journeys/singapour-katong-gallery2.jpg,${R2}/journeys/singapour-katong-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 50,
        days: [
          {
            dayNumber: 1,
            title: "Les maisons-boutiques de Koon Seng Road",
            titleEn: "The shophouses of Koon Seng Road",
            titleEs: "Las casas-tienda de Koon Seng Road",
            description:
              "Promenade le long de Koon Seng Road, à la découverte des maisons-boutiques peranakan aux façades pastel les mieux préservées de Singapour, puis visite d'un atelier de broderie traditionnelle.",
            descriptionEn:
              "A stroll along Koon Seng Road, discovering Singapore's best-preserved pastel-facade Peranakan shophouses, then a visit to a traditional embroidery workshop.",
            descriptionEs:
              "Paseo por Koon Seng Road, para descubrir las casas-tienda peranakan de fachada pastel mejor conservadas de Singapur, y visita a un taller de bordado tradicional.",
            image: `${R2}/journeys/singapour-katong-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Cours de cuisine peranakan",
            titleEn: "A Peranakan cooking class",
            titleEs: "Clase de cocina peranakan",
            description:
              "Cours de cuisine peranakan avec une famille locale, préparation de laksa et de kueh traditionnels, à la découverte d'une gastronomie née du métissage sino-malais.",
            descriptionEn:
              "A Peranakan cooking class with a local family, preparing traditional laksa and kueh, discovering a cuisine born of Chinese-Malay intermarriage.",
            descriptionEs:
              "Clase de cocina peranakan con una familia local, preparación de laksa y kueh tradicionales, para descubrir una gastronomía nacida del mestizaje sino-malayo.",
            image: `${R2}/journeys/singapour-katong-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Pulau Ubin, l'île figée dans le temps",
        titleEn: "Pulau Ubin, the Island Frozen in Time",
        titleEs: "Pulau Ubin, la isla detenida en el tiempo",
        intro:
          "Traversée en bateau à moteur artisanal vers Pulau Ubin, dernière île rurale de Singapour, restée volontairement à l'écart du développement urbain qui a transformé le reste de la cité-État depuis les années 1960. Sans route bitumée ni immeuble, l'île se parcourt à vélo le long de villages en bois habités par une poignée de familles, à travers une forêt secondaire qui a repris ses droits sur d'anciennes carrières de granit et plantations de caoutchouc.",
        introEn:
          "A crossing by traditional motorboat to Pulau Ubin, Singapore's last rural island, deliberately kept apart from the urban development that has transformed the rest of the city-state since the 1960s. With no paved roads or buildings, the island is explored by bicycle along wooden villages inhabited by a handful of families, through secondary forest that has reclaimed former granite quarries and rubber plantations.",
        introEs:
          "Travesía en lancha motora tradicional hacia Pulau Ubin, última isla rural de Singapur, mantenida deliberadamente al margen del desarrollo urbano que ha transformado el resto de la ciudad-estado desde la década de 1960. Sin carreteras asfaltadas ni edificios, la isla se recorre en bicicleta por pueblos de madera habitados por un puñado de familias, a través de un bosque secundario que ha recuperado antiguas canteras de granito y plantaciones de caucho.",
        galleryImages: `${R2}/journeys/singapour-pulauubin-gallery1.jpg,${R2}/journeys/singapour-pulauubin-gallery2.jpg,${R2}/journeys/singapour-pulauubin-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "À vélo à travers les villages en bois",
            titleEn: "Cycling through the wooden villages",
            titleEs: "En bicicleta por los pueblos de madera",
            description:
              "Location de vélo pour explorer Pulau Ubin à travers ses villages en bois, ses anciennes carrières de granit reconverties en étangs et sa forêt secondaire.",
            descriptionEn:
              "Bicycle rental to explore Pulau Ubin through its wooden villages, former granite quarries converted into ponds, and secondary forest.",
            descriptionEs:
              "Alquiler de bicicleta para explorar Pulau Ubin a través de sus pueblos de madera, antiguas canteras de granito reconvertidas en estanques y su bosque secundario.",
            image: `${R2}/journeys/singapour-pulauubin-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La réserve de mangrove de Chek Jawa",
            titleEn: "The Chek Jawa mangrove reserve",
            titleEs: "La reserva de manglar de Chek Jawa",
            description:
              "Promenade sur les passerelles en bois de la réserve de Chek Jawa, à la découverte de six écosystèmes côtiers distincts, entre mangrove, récif corallien et forêt littorale.",
            descriptionEn:
              "A walk along the wooden boardwalks of the Chek Jawa reserve, discovering six distinct coastal ecosystems, between mangrove, coral reef, and coastal forest.",
            descriptionEs:
              "Paseo por las pasarelas de madera de la reserva de Chek Jawa, para descubrir seis ecosistemas costeros distintos, entre manglar, arrecife de coral y bosque litoral.",
            image: `${R2}/journeys/singapour-pulauubin-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
);

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "vietnam",
    tour: {
      name: "Vietnam : Hoi An et la côte centrale",
      nameEn: "Vietnam: Hoi An and the Central Coast",
      nameEs: "Vietnam: Hoi An y la costa central",
      slug: "vietnam-hoian-cote-centrale",
      image: `${R2}/tours/vietnam-hoian-cote-centrale.jpg`,
      images: `${R2}/trips/vietnam-hoian-gallery-1.jpg,${R2}/trips/vietnam-hoian-gallery-2.jpg,${R2}/trips/vietnam-hoian-gallery-3.jpg,${R2}/trips/vietnam-hoian-gallery-4.jpg,${R2}/trips/vietnam-hoian-gallery-5.jpg,${R2}/trips/vietnam-hoian-gallery-6.jpg`,
      tagline: "Un ancien comptoir commercial classé à l'UNESCO, où des milliers de lanternes en soie s'allument chaque soir",
      taglineEn: "A former UNESCO-listed trading port, where thousands of silk lanterns light up every evening",
      taglineEs: "Un antiguo puesto comercial declarado por la UNESCO, donde miles de farolillos de seda se encienden cada noche",
      description:
        "Hoi An, ancien comptoir commercial prospère entre le XVe et le XIXe siècle où marchands chinois, japonais et européens échangeaient soieries et céramiques, a conservé une vieille ville classée à l'UNESCO d'une rare homogénéité architecturale. Chaque soir, des milliers de lanternes en soie colorée s'allument le long de la rivière Thu Bon, tradition ravivée dans les années 1990 qui a fait de la ville l'une des plus photogéniques d'Asie du Sud-Est.",
      descriptionEn:
        "Hoi An, a once-prosperous trading port between the 15th and 19th centuries where Chinese, Japanese, and European merchants traded silks and ceramics, has preserved a UNESCO-listed old town of rare architectural homogeneity. Every evening, thousands of colourful silk lanterns light up along the Thu Bon River, a tradition revived in the 1990s that has made the town one of the most photogenic in South-East Asia.",
      descriptionEs:
        "Hoi An, antiguo puesto comercial próspero entre los siglos XV y XIX donde comerciantes chinos, japoneses y europeos intercambiaban sedas y cerámicas, ha conservado un casco antiguo declarado por la UNESCO de rara homogeneidad arquitectónica. Cada noche, miles de farolillos de seda de colores se encienden a lo largo del río Thu Bon, tradición revivida en la década de 1990 que ha convertido a la ciudad en una de las más fotogénicas del sudeste asiático.",
      price: 2000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Fév à avril | Août à oct",
      whenLabelEn: "Feb to April | Aug to Oct",
      whenLabelEs: "Feb a abril | ago a oct",
      bestMonths: "february,march,april,august,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 120,
    },
    sections: [
      {
        heading: "Une vieille ville figée depuis quatre siècles",
        headingEn: "An Old Town Frozen for Four Centuries",
        headingEs: "Un casco antiguo detenido desde hace cuatro siglos",
        body:
          "La vieille ville de Hoi An, classée à l'UNESCO en 1999, doit sa préservation exceptionnelle à son déclin commercial progressif à partir du XIXe siècle, lorsque l'ensablement de la rivière Thu Bon détourna le trafic maritime vers Da Nang, gelant ainsi son architecture. Les maisons marchandes en bois, le pont couvert japonais construit au XVIIe siècle et les assemblées chinoises aux toits ornés de dragons témoignent d'un cosmopolitisme commercial rare pour l'époque en Asie du Sud-Est.",
        bodyEn:
          "Hoi An's old town, UNESCO-listed in 1999, owes its exceptional preservation to its gradual commercial decline from the 19th century onward, when the silting of the Thu Bon River diverted maritime traffic to Da Nang, freezing its architecture in place. The wooden merchant houses, the 17th-century covered Japanese bridge, and the Chinese assembly halls with dragon-adorned roofs bear witness to a commercial cosmopolitanism rare for the era in South-East Asia.",
        bodyEs:
          "El casco antiguo de Hoi An, declarado por la UNESCO en 1999, debe su excepcional conservación a su declive comercial progresivo a partir del siglo XIX, cuando el sedimento del río Thu Bon desvió el tráfico marítimo hacia Da Nang, congelando así su arquitectura. Las casas comerciales de madera, el puente cubierto japonés construido en el siglo XVII y las asambleas chinas de tejados adornados con dragones dan testimonio de un cosmopolitismo comercial poco común para la época en el sudeste asiático.",
      },
      {
        heading: "Les lanternes et l'artisanat de la soie",
        headingEn: "The Lanterns and Silk Craft",
        headingEs: "Los farolillos y la artesanía de la seda",
        body:
          "Les lanternes en soie colorée, fabriquées à la main selon un savoir-faire transmis dans les ateliers familiaux de la ville, illuminent chaque soir les rues de la vieille ville et se reflètent dans les eaux de la rivière Thu Bon lors du festival mensuel de la pleine lune, où l'électricité est coupée au profit de ce seul éclairage. La tradition de la soie, héritée du commerce florissant des siècles passés, perdure dans plusieurs ateliers de tailleurs capables de confectionner un vêtement sur mesure en moins de vingt-quatre heures.",
        bodyEn:
          "Colourful silk lanterns, handmade using skills passed down in the town's family workshops, light up the old town's streets every evening and reflect in the waters of the Thu Bon River during the monthly full moon festival, when electricity is cut in favour of this lighting alone. The silk tradition, inherited from the flourishing trade of centuries past, endures in several tailoring workshops capable of making a bespoke garment in under twenty-four hours.",
        bodyEs:
          "Los farolillos de seda de colores, hechos a mano según un saber transmitido en los talleres familiares de la ciudad, iluminan cada noche las calles del casco antiguo y se reflejan en las aguas del río Thu Bon durante el festival mensual de la luna llena, cuando se corta la electricidad en favor de esta única iluminación. La tradición de la seda, heredada del floreciente comercio de siglos pasados, perdura en varios talleres de sastres capaces de confeccionar una prenda a medida en menos de veinticuatro horas.",
      },
    ],
    hotels: [
      {
        name: "Maison-boutique rénovée de la vieille ville",
        nameEn: "A Renovated Old Town Shophouse",
        nameEs: "Casa-tienda renovada del casco antiguo",
        description:
          "Une ancienne maison-boutique marchande rénovée au cœur de la vieille ville classée, cour intérieure ombragée, à distance de marche des principaux temples et du pont japonais.",
        descriptionEn:
          "A former merchant shophouse renovated at the heart of the listed old town, a shaded inner courtyard, within walking distance of the main temples and the Japanese bridge.",
        descriptionEs:
          "Una antigua casa-tienda comercial renovada en el corazón del casco antiguo declarado, patio interior sombreado, a poca distancia a pie de los principales templos y del puente japonés.",
        image: `${R2}/trips/vietnam-hoian-hotel-1.jpg`,
      },
      {
        name: "Resort de la plage An Bang",
        nameEn: "An An Bang Beach Resort",
        nameEs: "Resort de la playa de An Bang",
        description:
          "Un resort en bord de plage à An Bang, à courte distance en vélo de la vieille ville de Hoi An, chambres avec vue sur la mer de Chine méridionale.",
        descriptionEn:
          "A beachfront resort at An Bang, a short bike ride from Hoi An's old town, rooms overlooking the South China Sea.",
        descriptionEs:
          "Un resort junto a la playa en An Bang, a poca distancia en bicicleta del casco antiguo de Hoi An, habitaciones con vistas al mar de China Meridional.",
        image: `${R2}/trips/vietnam-hoian-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "cambodge",
    tour: {
      name: "Cambodge : Battambang et la campagne du Bamboo Train",
      nameEn: "Cambodia: Battambang and the Bamboo Train Countryside",
      nameEs: "Camboya: Battambang y la campiña del tren de bambú",
      slug: "cambodge-battambang-campagne",
      image: `${R2}/tours/cambodge-battambang-campagne.jpg`,
      images: `${R2}/trips/cambodge-battambang-gallery-1.jpg,${R2}/trips/cambodge-battambang-gallery-2.jpg,${R2}/trips/cambodge-battambang-gallery-3.jpg,${R2}/trips/cambodge-battambang-gallery-4.jpg,${R2}/trips/cambodge-battambang-gallery-5.jpg,${R2}/trips/cambodge-battambang-gallery-6.jpg`,
      tagline: "Un train de bambou artisanal qui file à travers les rizières, dans la ville coloniale la mieux préservée du pays",
      taglineEn: "A handmade bamboo train rattling through rice paddies, in the country's best-preserved colonial town",
      taglineEs: "Un tren de bambú artesanal que atraviesa los arrozales, en la ciudad colonial mejor conservada del país",
      description:
        "Battambang, deuxième ville du Cambodge et ancienne capitale régionale française, a conservé le patrimoine colonial le mieux préservé du pays, largement épargné par les destructions qui ont touché Phnom Penh. La région environnante se découvre à bord du célèbre norry, ou train de bambou, plateforme artisanale montée sur essieux de wagonnets qui file à toute vitesse sur d'anciennes voies ferrées à travers rizières et villages, avant une ascension vers des grottes qui furent le théâtre de tragédies pendant les années Khmers rouges.",
      descriptionEn:
        "Battambang, Cambodia's second city and a former French regional capital, has retained the country's best-preserved colonial heritage, largely spared the destruction that affected Phnom Penh. The surrounding countryside is explored aboard the famous norry, or bamboo train, a handmade platform mounted on trolley axles that speeds along old railway tracks through rice paddies and villages, before an ascent to caves that were the scene of tragedies during the Khmer Rouge years.",
      descriptionEs:
        "Battambang, segunda ciudad de Camboya y antigua capital regional francesa, ha conservado el patrimonio colonial mejor preservado del país, en gran parte a salvo de las destrucciones que afectaron a Phnom Penh. La campiña circundante se descubre a bordo del célebre norry, o tren de bambú, plataforma artesanal montada sobre ejes de vagonetas que circula a toda velocidad por antiguas vías férreas entre arrozales y pueblos, antes de un ascenso hacia cuevas que fueron escenario de tragedias durante los años de los jemeres rojos.",
      price: 1700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
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
      order: 122,
    },
    sections: [
      {
        heading: "Le Bamboo Train, une curiosité ferroviaire artisanale",
        headingEn: "The Bamboo Train, a Handmade Railway Curiosity",
        headingEs: "El tren de bambú, una curiosidad ferroviaria artesanal",
        body:
          "Le norry, ou Bamboo Train, consiste en une simple plateforme de bambou posée sur deux essieux de wagonnets récupérés, propulsée par un petit moteur et pouvant atteindre quarante kilomètres à l'heure sur d'anciennes voies ferrées à écartement métrique construites par les Français. Lorsque deux norries se croisent sur cette voie unique, celui transportant le moins de passagers est démonté à la main et reposé sur les rails après le passage de l'autre, un ballet logistique devenu l'une des attractions les plus singulières du pays.",
        bodyEn:
          "The norry, or Bamboo Train, consists of a simple bamboo platform set on two salvaged trolley axles, powered by a small engine and capable of reaching forty kilometres per hour on old metre-gauge railway tracks built by the French. When two norries meet on this single track, the one carrying fewer passengers is dismantled by hand and reassembled on the rails after the other has passed, a logistical ballet that has become one of the country's most singular attractions.",
        bodyEs:
          "El norry, o tren de bambú, consiste en una simple plataforma de bambú montada sobre dos ejes de vagonetas recuperadas, propulsada por un pequeño motor y capaz de alcanzar los cuarenta kilómetros por hora en antiguas vías férreas de ancho métrico construidas por los franceses. Cuando dos norries se cruzan en esta vía única, el que transporta menos pasajeros se desmonta a mano y se vuelve a colocar sobre los raíles tras el paso del otro, un ballet logístico que se ha convertido en una de las atracciones más singulares del país.",
      },
      {
        heading: "L'architecture coloniale française",
        headingEn: "French Colonial Architecture",
        headingEs: "La arquitectura colonial francesa",
        body:
          "Battambang conserve le plus vaste ensemble de bâtiments coloniaux français du Cambodge, ancienne capitale régionale largement épargnée par les bombardements et les destructions des décennies de conflit qui ont touché le reste du pays. Les façades ocre et jaune des anciens bâtiments administratifs, aujourd'hui reconvertis en cafés et galeries d'art, bordent des rues encore parcourues de vélos-remorques traditionnels appelés remorque-motos.",
        bodyEn:
          "Battambang retains the largest ensemble of French colonial buildings in Cambodia, a former regional capital largely spared the bombing and destruction of the decades of conflict that affected the rest of the country. The ochre and yellow facades of former administrative buildings, now converted into cafés and art galleries, line streets still plied by traditional trailer-bikes called remorque-motos.",
        bodyEs:
          "Battambang conserva el conjunto más extenso de edificios coloniales franceses de Camboya, antigua capital regional en gran parte a salvo de los bombardeos y destrucciones de las décadas de conflicto que afectaron al resto del país. Las fachadas ocre y amarillas de los antiguos edificios administrativos, hoy reconvertidos en cafés y galerías de arte, bordean calles todavía recorridas por remolques tradicionales llamados remorque-motos.",
      },
    ],
    hotels: [
      {
        name: "Maison coloniale rénovée de Battambang",
        nameEn: "A Renovated Colonial House in Battambang",
        nameEs: "Casa colonial renovada en Battambang",
        description:
          "Une ancienne demeure coloniale française rénovée au cœur de Battambang, jardin tropical intérieur, à distance de marche des galeries d'art et du marché central.",
        descriptionEn:
          "A former French colonial residence renovated at the heart of Battambang, an indoor tropical garden, within walking distance of the art galleries and central market.",
        descriptionEs:
          "Una antigua residencia colonial francesa renovada en el corazón de Battambang, jardín tropical interior, a poca distancia a pie de las galerías de arte y el mercado central.",
        image: `${R2}/trips/cambodge-battambang-hotel-1.jpg`,
      },
      {
        name: "Ferme d'hôtes de la campagne environnante",
        nameEn: "A Countryside Farm Guesthouse",
        nameEs: "Granja de huéspedes de la campiña circundante",
        description:
          "Une ferme d'hôtes familiale à courte distance de Battambang, chambres simples au milieu des rizières, repas préparés à partir de produits cultivés sur place.",
        descriptionEn:
          "A family farm guesthouse a short distance from Battambang, simple rooms amid rice paddies, meals prepared from produce grown on site.",
        descriptionEs:
          "Una granja de huéspedes familiar a poca distancia de Battambang, habitaciones sencillas en medio de arrozales, comidas preparadas con productos cultivados in situ.",
        image: `${R2}/trips/cambodge-battambang-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "indonesie",
    tour: {
      name: "Indonésie : le Kawah Ijen et les volcans de Java",
      nameEn: "Indonesia: Kawah Ijen and the Volcanoes of Java",
      nameEs: "Indonesia: el Kawah Ijen y los volcanes de Java",
      slug: "indonesie-kawahijen-java",
      image: `${R2}/tours/indonesie-kawahijen-java.jpg`,
      images: `${R2}/trips/indonesie-ijen-gallery-1.jpg,${R2}/trips/indonesie-ijen-gallery-2.jpg,${R2}/trips/indonesie-ijen-gallery-3.jpg,${R2}/trips/indonesie-ijen-gallery-4.jpg,${R2}/trips/indonesie-ijen-gallery-5.jpg,${R2}/trips/indonesie-ijen-gallery-6.jpg`,
      tagline: "Des flammes bleues surnaturelles qui n'apparaissent que la nuit, au bord d'un lac le plus acide au monde",
      taglineEn: "Otherworldly blue flames that appear only at night, on the edge of the world's most acidic lake",
      taglineEs: "Llamas azules sobrenaturales que solo aparecen de noche, al borde del lago más ácido del mundo",
      description:
        "Le Kawah Ijen, volcan actif de l'est de Java, abrite dans son cratère un lac au taux d'acidité le plus élevé au monde ainsi qu'un phénomène naturel unique : des flammes bleues électriques, provoquées par la combustion de gaz soufrés au contact de l'air, visibles uniquement de nuit. Des mineurs de soufre continuent d'extraire à la main, dans des conditions extrêmement pénibles, la roche jaune vif qui donne naissance à ce spectacle, la portant ensuite en paniers de bambou sur plusieurs kilomètres.",
      descriptionEn:
        "Kawah Ijen, an active volcano in eastern Java, holds within its crater the most acidic lake in the world along with a unique natural phenomenon: electric blue flames caused by sulphurous gases combusting on contact with air, visible only at night. Sulphur miners continue to extract by hand, under extremely gruelling conditions, the bright yellow rock that gives rise to this spectacle, carrying it afterwards in bamboo baskets over several kilometres.",
      descriptionEs:
        "El Kawah Ijen, volcán activo del este de Java, alberga en su cráter el lago con la mayor acidez del mundo, así como un fenómeno natural único: llamas azules eléctricas, provocadas por la combustión de gases sulfurosos al contacto con el aire, visibles solo de noche. Los mineros de azufre siguen extrayendo a mano, en condiciones extremadamente duras, la roca amarilla intensa que da lugar a este espectáculo, transportándola después en cestas de bambú a lo largo de varios kilómetros.",
      price: 2100,
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
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 124,
    },
    sections: [
      {
        heading: "Les flammes bleues du Kawah Ijen",
        headingEn: "The Blue Flames of Kawah Ijen",
        headingEs: "Las llamas azules del Kawah Ijen",
        body:
          "Les flammes bleues du Kawah Ijen, phénomène observable dans seulement deux endroits au monde, sont provoquées par la combustion spontanée de gaz soufrés à très haute température au contact de l'oxygène de l'air, un feu électrique qui n'est visible que dans l'obscurité totale précédant l'aube. L'ascension nocturne, réalisée à la lampe frontale à travers un terrain volcanique parfois traversé de nuages de gaz toxiques nécessitant un masque, culmine face à ce spectacle avant que le lever du soleil ne révèle le lac turquoise le plus acide du monde.",
        bodyEn:
          "The blue flames of Kawah Ijen, a phenomenon observable in only two places in the world, are caused by the spontaneous combustion of very high-temperature sulphurous gases on contact with oxygen in the air, an electric fire visible only in the total darkness before dawn. The night ascent, made by headlamp across volcanic terrain sometimes crossed by toxic gas clouds requiring a mask, culminates facing this spectacle before sunrise reveals the world's most acidic turquoise lake.",
        bodyEs:
          "Las llamas azules del Kawah Ijen, fenómeno observable en solo dos lugares del mundo, son provocadas por la combustión espontánea de gases sulfurosos a muy alta temperatura al contacto con el oxígeno del aire, un fuego eléctrico visible únicamente en la oscuridad total previa al amanecer. El ascenso nocturno, realizado con linterna frontal por un terreno volcánico a veces atravesado por nubes de gas tóxico que requieren mascarilla, culmina frente a este espectáculo antes de que la salida del sol revele el lago turquesa más ácido del mundo.",
      },
      {
        heading: "Les mineurs de soufre du cratère",
        headingEn: "The Crater's Sulphur Miners",
        headingEs: "Los mineros de azufre del cráter",
        body:
          "Plusieurs centaines de mineurs continuent chaque jour de descendre dans le cratère du Kawah Ijen pour extraire à la main des blocs de soufre solidifié, qu'ils transportent ensuite dans des paniers de bambou pesant parfois plus de quatre-vingt-dix kilos sur plusieurs kilomètres de sentier escarpé jusqu'à une usine de pesée. Ce travail, parmi les plus pénibles et dangereux d'Indonésie en raison de l'exposition prolongée aux gaz toxiques, reste pourtant recherché pour sa rémunération supérieure à d'autres emplois manuels de la région.",
        bodyEn:
          "Several hundred miners still descend into the Kawah Ijen crater every day to extract blocks of solidified sulphur by hand, which they then carry in bamboo baskets sometimes weighing over ninety kilos along several kilometres of steep trail to a weighing station. This work, among the most gruelling and dangerous in Indonesia due to prolonged exposure to toxic gases, nonetheless remains sought after for its pay, higher than other manual jobs in the region.",
        bodyEs:
          "Varios cientos de mineros siguen bajando cada día al cráter del Kawah Ijen para extraer a mano bloques de azufre solidificado, que después transportan en cestas de bambú que a veces pesan más de noventa kilos a lo largo de varios kilómetros de sendero escarpado hasta una estación de pesaje. Este trabajo, entre los más duros y peligrosos de Indonesia debido a la exposición prolongada a gases tóxicos, sigue siendo, sin embargo, muy solicitado por su remuneración superior a otros empleos manuales de la región.",
      },
    ],
    hotels: [
      {
        name: "Lodge de montagne au pied du Kawah Ijen",
        nameEn: "A Mountain Lodge at the Foot of Kawah Ijen",
        nameEs: "Lodge de montaña al pie del Kawah Ijen",
        description:
          "Un lodge de montagne simple au pied du Kawah Ijen, point de départ de l'ascension nocturne, chambres chauffées et service de réveil avant l'aube pour l'excursion aux flammes bleues.",
        descriptionEn:
          "A simple mountain lodge at the foot of Kawah Ijen, the starting point for the night ascent, heated rooms and a pre-dawn wake-up service for the blue flames excursion.",
        descriptionEs:
          "Un sencillo lodge de montaña al pie del Kawah Ijen, punto de partida del ascenso nocturno, habitaciones con calefacción y servicio de despertador antes del amanecer para la excursión a las llamas azules.",
        image: `${R2}/trips/indonesie-ijen-hotel-1.jpg`,
      },
      {
        name: "Boutique-hôtel des plantations de café de Banyuwangi",
        nameEn: "A Banyuwangi Coffee Plantation Boutique Hotel",
        nameEs: "Hotel boutique de las plantaciones de café de Banyuwangi",
        description:
          "Un boutique-hôtel installé au milieu d'une plantation de café de Banyuwangi, chambres avec vue sur les volcans environnants, dégustation de café cultivé sur place.",
        descriptionEn:
          "A boutique hotel set amid a Banyuwangi coffee plantation, rooms overlooking the surrounding volcanoes, a tasting of coffee grown on site.",
        descriptionEs:
          "Un hotel boutique instalado en medio de una plantación de café de Banyuwangi, habitaciones con vistas a los volcanes circundantes, degustación de café cultivado in situ.",
        image: `${R2}/trips/indonesie-ijen-hotel-2.jpg`,
      },
    ],
  },
];

standardTrips.push(
  {
    destinationSlug: "myanmar",
    tour: {
      name: "Myanmar : Mrauk-U, la cité oubliée de l'Arakan",
      nameEn: "Myanmar: Mrauk-U, the Forgotten City of Arakan",
      nameEs: "Myanmar: Mrauk-U, la ciudad olvidada de Arakan",
      slug: "myanmar-mrauk-u-arakan",
      image: `${R2}/tours/myanmar-mrauk-u-arakan.jpg`,
      images: `${R2}/trips/myanmar-mrauku-gallery-1.jpg,${R2}/trips/myanmar-mrauku-gallery-2.jpg,${R2}/trips/myanmar-mrauku-gallery-3.jpg,${R2}/trips/myanmar-mrauku-gallery-4.jpg,${R2}/trips/myanmar-mrauku-gallery-5.jpg,${R2}/trips/myanmar-mrauku-gallery-6.jpg`,
      tagline: "Une ancienne capitale royale aussi riche que Bagan en temples, mais restée presque inconnue des voyageurs",
      taglineEn: "A former royal capital as rich in temples as Bagan, yet almost unknown to travellers",
      taglineEs: "Una antigua capital real tan rica en templos como Bagan, pero casi desconocida para los viajeros",
      description:
        "Mrauk-U, capitale du royaume d'Arakan pendant plus de trois cent cinquante ans jusqu'à sa chute au XVIIIe siècle, comptait selon les récits de marchands européens de l'époque parmi les villes les plus riches d'Asie, rivalisant en puissance commerciale avec Amsterdam ou Londres. Contrairement à Bagan, l'éloignement et l'accès longtemps restreint de cette région de l'ouest du Myanmar ont préservé ses centaines de temples et stupas d'un tourisme de masse, offrant une expérience de découverte rare.",
      descriptionEn:
        "Mrauk-U, capital of the Arakan kingdom for over three hundred and fifty years until its fall in the 18th century, ranked, according to the accounts of European merchants of the time, among the wealthiest cities in Asia, rivalling Amsterdam or London in commercial power. Unlike Bagan, the remoteness and long-restricted access to this region of western Myanmar have spared its hundreds of temples and stupas from mass tourism, offering a rare discovery experience.",
      descriptionEs:
        "Mrauk-U, capital del reino de Arakan durante más de trescientos cincuenta años hasta su caída en el siglo XVIII, se contaba, según los relatos de comerciantes europeos de la época, entre las ciudades más ricas de Asia, rivalizando en poder comercial con Ámsterdam o Londres. A diferencia de Bagan, el aislamiento y el acceso durante mucho tiempo restringido a esta región del oeste de Myanmar han preservado sus cientos de templos y estupas del turismo de masas, ofreciendo una experiencia de descubrimiento poco común.",
      price: 2700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Nov à fév",
      whenLabelEn: "Nov to Feb",
      whenLabelEs: "Nov a feb",
      bestMonths: "november,december,january,february",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 126,
    },
    sections: [
      {
        heading: "Une capitale royale rivale des grandes puissances commerciales",
        headingEn: "A Royal Capital Rivalling the Great Trading Powers",
        headingEs: "Una capital real rival de las grandes potencias comerciales",
        body:
          "Mrauk-U régna pendant plus de trois cent cinquante ans sur un royaume d'Arakan suffisamment puissant pour compter des ambassades portugaises et hollandaises, et pour lever une armée capable de menacer le Bengale voisin. Les récits de marchands européens de passage décrivaient une cité aussi peuplée et riche que les grandes capitales commerciales de l'époque, avant que le royaume ne soit conquis par la dynastie birmane des Konbaung en 1785, précipitant un déclin qui a paradoxalement préservé ses temples de toute reconstruction moderne.",
        bodyEn:
          "Mrauk-U reigned for over three hundred and fifty years over an Arakan kingdom powerful enough to host Portuguese and Dutch embassies, and to raise an army capable of threatening neighbouring Bengal. Accounts from passing European merchants described a city as populous and wealthy as the great trading capitals of the era, before the kingdom was conquered by the Burmese Konbaung dynasty in 1785, precipitating a decline that paradoxically preserved its temples from any modern reconstruction.",
        bodyEs:
          "Mrauk-U reinó durante más de trescientos cincuenta años sobre un reino de Arakan lo bastante poderoso como para contar con embajadas portuguesas y holandesas, y para levantar un ejército capaz de amenazar a la vecina Bengala. Los relatos de comerciantes europeos de paso describían una ciudad tan poblada y rica como las grandes capitales comerciales de la época, antes de que el reino fuera conquistado por la dinastía birmana Konbaung en 1785, precipitando un declive que paradójicamente preservó sus templos de cualquier reconstrucción moderna.",
      },
      {
        heading: "Des centaines de temples encore méconnus",
        headingEn: "Hundreds of Still Little-Known Temples",
        headingEs: "Cientos de templos todavía poco conocidos",
        body:
          "Le temple de Shittaung, littéralement « sanctuaire des quatre-vingt mille images », abrite un dédale de couloirs concentriques ornés de bas-reliefs bouddhistes datant du XVIe siècle, tandis que le temple de Koe-thaung, plus vaste encore, aurait compté quatre-vingt-dix mille statues du Bouddha selon la légende locale. L'éloignement de la région, longtemps difficile d'accès par voie fluviale uniquement et soumise à des restrictions de déplacement, a préservé l'ensemble de toute reconstruction moderne, contrairement à certains temples de Bagan.",
        bodyEn:
          "Shittaung Temple, literally the \"shrine of eighty thousand images,\" holds a maze of concentric corridors adorned with Buddhist bas-reliefs dating from the 16th century, while Koe-thaung Temple, even larger, is said by local legend to have once held ninety thousand Buddha statues. The region's remoteness, long accessible only by river and subject to travel restrictions, has preserved the whole complex from any modern reconstruction, unlike some temples at Bagan.",
        bodyEs:
          "El templo de Shittaung, literalmente «santuario de las ochenta mil imágenes», alberga un laberinto de pasillos concéntricos adornados con relieves budistas del siglo XVI, mientras que el templo de Koe-thaung, todavía más extenso, habría albergado noventa mil estatuas de Buda según la leyenda local. El aislamiento de la región, durante mucho tiempo accesible solo por vía fluvial y sujeta a restricciones de desplazamiento, ha preservado el conjunto de cualquier reconstrucción moderna, a diferencia de algunos templos de Bagan.",
      },
    ],
    hotels: [
      {
        name: "Lodge en bord de rivière Kaladan",
        nameEn: "A Kaladan Riverside Lodge",
        nameEs: "Lodge a orillas del río Kaladan",
        description:
          "Un lodge simple en bord de la rivière Kaladan, chambres avec vue sur l'eau, point de départ pratique pour explorer les temples de Mrauk-U en bicyclette ou en charrette à bœufs.",
        descriptionEn:
          "A simple lodge on the banks of the Kaladan River, rooms overlooking the water, a convenient base for exploring the temples of Mrauk-U by bicycle or ox cart.",
        descriptionEs:
          "Un sencillo lodge a orillas del río Kaladan, habitaciones con vistas al agua, punto de partida práctico para explorar los templos de Mrauk-U en bicicleta o en carreta de bueyes.",
        image: `${R2}/trips/myanmar-mrauku-hotel-1.jpg`,
      },
      {
        name: "Maison d'hôtes au cœur des temples",
        nameEn: "A Guesthouse at the Heart of the Temples",
        nameEs: "Casa de huéspedes en el corazón de los templos",
        description:
          "Une maison d'hôtes familiale nichée entre les temples de Mrauk-U, terrasse offrant une vue sur les stupas environnants au coucher du soleil, repas préparés selon les traditions culinaires de l'Arakan.",
        descriptionEn:
          "A family guesthouse nestled among the temples of Mrauk-U, a terrace offering views over the surrounding stupas at sunset, meals prepared following Arakanese culinary traditions.",
        descriptionEs:
          "Una casa de huéspedes familiar enclavada entre los templos de Mrauk-U, terraza con vistas a las estupas circundantes al atardecer, comidas preparadas según las tradiciones culinarias de Arakan.",
        image: `${R2}/trips/myanmar-mrauku-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "laos",
    tour: {
      name: "Laos : le plateau des Bolaven et les cascades du sud",
      nameEn: "Laos: The Bolaven Plateau and the Southern Waterfalls",
      nameEs: "Laos: la meseta de Bolaven y las cascadas del sur",
      slug: "laos-bolaven-cascades",
      image: `${R2}/tours/laos-bolaven-cascades.jpg`,
      images: `${R2}/trips/laos-bolaven-gallery-1.jpg,${R2}/trips/laos-bolaven-gallery-2.jpg,${R2}/trips/laos-bolaven-gallery-3.jpg,${R2}/trips/laos-bolaven-gallery-4.jpg,${R2}/trips/laos-bolaven-gallery-5.jpg,${R2}/trips/laos-bolaven-gallery-6.jpg`,
      tagline: "Un plateau volcanique fertile où le café pousse à l'ombre, ponctué de cascades parmi les plus spectaculaires du pays",
      taglineEn: "A fertile volcanic plateau where coffee grows in the shade, dotted with some of the country's most spectacular waterfalls",
      taglineEs: "Una fértil meseta volcánica donde el café crece a la sombra, salpicada de algunas de las cascadas más espectaculares del país",
      description:
        "Le plateau des Bolaven, dans le sud du Laos, doit sa fertilité exceptionnelle à des sols volcaniques qui en font depuis l'époque coloniale française la principale région productrice de café du pays, cultivé à l'ombre selon des méthodes traditionnelles largement inchangées. Le plateau, qui culmine à plus de mille deux cents mètres, concentre également certaines des cascades les plus spectaculaires du Laos, dont les chutes de Tad Fane qui plongent de plus de cent vingt mètres dans une gorge couverte de jungle.",
      descriptionEn:
        "The Bolaven Plateau, in southern Laos, owes its exceptional fertility to volcanic soils that have made it, since the era of French colonial rule, the country's main coffee-producing region, grown in the shade using largely unchanged traditional methods. The plateau, which rises over twelve hundred metres, also concentrates some of the most spectacular waterfalls in Laos, including the Tad Fane falls, which plunge over one hundred and twenty metres into a jungle-covered gorge.",
      descriptionEs:
        "La meseta de Bolaven, en el sur de Laos, debe su excepcional fertilidad a suelos volcánicos que la han convertido, desde la época del dominio colonial francés, en la principal región productora de café del país, cultivado a la sombra según métodos tradicionales apenas cambiados. La meseta, que se eleva más de mil doscientos metros, concentra también algunas de las cascadas más espectaculares de Laos, entre ellas las cataratas de Tad Fane, que caen más de ciento veinte metros en una garganta cubierta de selva.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Nov à fév",
      whenLabelEn: "Nov to Feb",
      whenLabelEs: "Nov a feb",
      bestMonths: "november,december,january,february",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 128,
    },
    sections: [
      {
        heading: "Les plantations de café du plateau",
        headingEn: "The Plateau's Coffee Plantations",
        headingEs: "Las plantaciones de café de la meseta",
        body:
          "Le plateau des Bolaven, introduit à la culture du café par les colons français au début du XXe siècle, bénéficie de sols volcaniques rouges exceptionnellement fertiles et d'une altitude qui tempère le climat tropical, des conditions idéales pour la production d'arabica et de robusta de qualité. Les plantations familiales, cultivées à l'ombre d'arbres fruitiers selon des méthodes traditionnelles, se visitent au fil de la route du café, itinéraire ponctué de villages des minorités ethniques Laven et Alak.",
        bodyEn:
          "The Bolaven Plateau, introduced to coffee cultivation by French colonists in the early 20th century, benefits from exceptionally fertile red volcanic soils and an altitude that tempers the tropical climate, ideal conditions for producing quality arabica and robusta. The family plantations, grown in the shade of fruit trees using traditional methods, are visited along the coffee route, an itinerary dotted with villages of the Laven and Alak ethnic minorities.",
        bodyEs:
          "La meseta de Bolaven, introducida al cultivo del café por los colonos franceses a comienzos del siglo XX, se beneficia de suelos volcánicos rojos excepcionalmente fértiles y de una altitud que atempera el clima tropical, condiciones ideales para la producción de arábica y robusta de calidad. Las plantaciones familiares, cultivadas a la sombra de árboles frutales según métodos tradicionales, se visitan a lo largo de la ruta del café, itinerario salpicado de pueblos de las minorías étnicas laven y alak.",
      },
      {
        heading: "Les cascades de Tad Fane et Tad Yuang",
        headingEn: "The Tad Fane and Tad Yuang Waterfalls",
        headingEs: "Las cascadas de Tad Fane y Tad Yuang",
        body:
          "Les chutes de Tad Fane, formées par deux cours d'eau jumeaux qui plongent simultanément de plus de cent vingt mètres dans une gorge couverte d'une jungle dense, comptent parmi les plus hautes et les plus photographiées du Laos, observables depuis un point de vue aménagé en surplomb. À proximité, les chutes de Tad Yuang, moins hautes mais accessibles à la baignade, offrent un bassin naturel rafraîchissant entouré de forêt tropicale.",
        bodyEn:
          "Tad Fane falls, formed by two twin waterways that plunge simultaneously over one hundred and twenty metres into a gorge covered in dense jungle, rank among the highest and most photographed in Laos, observable from a purpose-built overlook. Nearby, Tad Yuang falls, lower but open for swimming, offer a refreshing natural pool surrounded by tropical forest.",
        bodyEs:
          "Las cataratas de Tad Fane, formadas por dos cursos de agua gemelos que caen simultáneamente más de ciento veinte metros en una garganta cubierta de selva densa, se cuentan entre las más altas y fotografiadas de Laos, observables desde un mirador habilitado. Cerca de allí, las cataratas de Tad Yuang, menos altas pero aptas para el baño, ofrecen una piscina natural refrescante rodeada de bosque tropical.",
      },
    ],
    hotels: [
      {
        name: "Lodge au milieu des plantations de café",
        nameEn: "A Lodge Amid the Coffee Plantations",
        nameEs: "Lodge en medio de las plantaciones de café",
        description:
          "Un lodge simple installé au milieu d'une plantation de café du plateau des Bolaven, chambres avec vue sur les rangées de caféiers, dégustation de café cultivé sur place.",
        descriptionEn:
          "A simple lodge set amid a coffee plantation on the Bolaven Plateau, rooms overlooking the rows of coffee bushes, a tasting of coffee grown on site.",
        descriptionEs:
          "Un sencillo lodge instalado en medio de una plantación de café de la meseta de Bolaven, habitaciones con vistas a las hileras de cafetos, degustación de café cultivado in situ.",
        image: `${R2}/trips/laos-bolaven-hotel-1.jpg`,
      },
      {
        name: "Maison d'hôtes près des chutes de Tad Fane",
        nameEn: "A Guesthouse near Tad Fane Falls",
        nameEs: "Casa de huéspedes cerca de las cataratas de Tad Fane",
        description:
          "Une maison d'hôtes en surplomb des chutes de Tad Fane, terrasse avec vue directe sur les deux cascades jumelles, cuisine locale à base de produits du plateau.",
        descriptionEn:
          "A guesthouse overlooking Tad Fane falls, a terrace with a direct view of the twin waterfalls, local cuisine made from plateau produce.",
        descriptionEs:
          "Una casa de huéspedes con vistas a las cataratas de Tad Fane, terraza con vistas directas a las dos cascadas gemelas, cocina local a base de productos de la meseta.",
        image: `${R2}/trips/laos-bolaven-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "bornee",
    tour: {
      name: "Bornéo : le mont Kinabalu",
      nameEn: "Borneo: Mount Kinabalu",
      nameEs: "Borneo: el monte Kinabalu",
      slug: "bornee-mont-kinabalu",
      image: `${R2}/tours/bornee-mont-kinabalu.jpg`,
      images: `${R2}/trips/bornee-kinabalu-gallery-1.jpg,${R2}/trips/bornee-kinabalu-gallery-2.jpg,${R2}/trips/bornee-kinabalu-gallery-3.jpg,${R2}/trips/bornee-kinabalu-gallery-4.jpg,${R2}/trips/bornee-kinabalu-gallery-5.jpg,${R2}/trips/bornee-kinabalu-gallery-6.jpg`,
      tagline: "Le plus haut sommet d'Asie du Sud-Est entre la Himalaya et la Nouvelle-Guinée, gravi en deux jours depuis la jungle tropicale",
      taglineEn: "The highest peak in South-East Asia between the Himalayas and New Guinea, climbed in two days from the tropical jungle",
      taglineEs: "La cumbre más alta del sudeste asiático entre el Himalaya y Nueva Guinea, escalada en dos días desde la selva tropical",
      description:
        "Le mont Kinabalu, culminant à plus de quatre mille cent mètres, est le plus haut sommet entre l'Himalaya et la Nouvelle-Guinée, une ascension accessible sans expérience technique mais suffisamment exigeante physiquement pour être gravie en deux jours avec une nuit en refuge d'altitude. Classé à l'UNESCO pour sa biodiversité exceptionnelle, le parc qui l'entoure abrite plus de cinq mille espèces végétales sur un gradient altitudinal qui passe de la jungle tropicale humide à une végétation alpine rase en quelques kilomètres seulement.",
      descriptionEn:
        "Mount Kinabalu, rising over four thousand one hundred metres, is the highest peak between the Himalayas and New Guinea, a climb accessible without technical experience but physically demanding enough to be tackled over two days with a night at a high-altitude lodge. UNESCO-listed for its exceptional biodiversity, the surrounding park shelters over five thousand plant species across an altitudinal gradient that shifts from humid tropical jungle to sparse alpine vegetation within just a few kilometres.",
      descriptionEs:
        "El monte Kinabalu, que se eleva más de cuatro mil cien metros, es la cumbre más alta entre el Himalaya y Nueva Guinea, una ascensión accesible sin experiencia técnica pero lo bastante exigente físicamente como para realizarse en dos días con una noche en un refugio de altitud. Declarado por la UNESCO por su excepcional biodiversidad, el parque que lo rodea alberga más de cinco mil especies vegetales en un gradiente altitudinal que pasa de la selva tropical húmeda a una vegetación alpina rala en apenas unos kilómetros.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mars à août",
      whenLabelEn: "March to August",
      whenLabelEs: "Marzo a agosto",
      bestMonths: "march,april,may,june,july,august",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 130,
    },
    sections: [
      {
        heading: "L'ascension du plus haut sommet d'Asie du Sud-Est",
        headingEn: "The Climb of South-East Asia's Highest Peak",
        headingEs: "La ascensión a la cumbre más alta del sudeste asiático",
        body:
          "L'ascension du mont Kinabalu, répartie sur deux jours avec une nuit dans un refuge à plus de trois mille trois cents mètres, ne nécessite aucune expérience technique en alpinisme mais reste physiquement exigeante sur les derniers mètres, où des cordes fixes aident à franchir un dôme de granite lisse avant d'atteindre le sommet de Low's Peak. Le départ du dernier tronçon a lieu avant l'aube, à la frontale, pour atteindre le sommet à temps pour un lever de soleil qui embrase les formations granitiques environnantes.",
        bodyEn:
          "The ascent of Mount Kinabalu, spread over two days with a night at a lodge above three thousand three hundred metres, requires no technical mountaineering experience but remains physically demanding on the final metres, where fixed ropes help climbers cross a smooth granite dome before reaching the summit of Low's Peak. The final stretch departs before dawn, by headlamp, to reach the summit in time for a sunrise that sets the surrounding granite formations ablaze.",
        bodyEs:
          "La ascensión al monte Kinabalu, repartida en dos días con una noche en un refugio a más de tres mil trescientos metros, no requiere experiencia técnica en montañismo pero sigue siendo físicamente exigente en los últimos metros, donde cuerdas fijas ayudan a superar una cúpula de granito liso antes de alcanzar la cima de Low's Peak. La salida del último tramo se realiza antes del amanecer, con linterna frontal, para llegar a la cima a tiempo para una salida del sol que incendia las formaciones graníticas circundantes.",
      },
      {
        heading: "Un gradient de biodiversité unique au monde",
        headingEn: "A Biodiversity Gradient Unique in the World",
        headingEs: "Un gradiente de biodiversidad único en el mundo",
        body:
          "Le parc du Kinabalu, classé à l'UNESCO en 2000, concentre plus de cinq mille espèces de plantes vasculaires sur ses flancs, dont plus de sept cents espèces d'orchidées et plusieurs variétés de plantes carnivores du genre Nepenthes qui ne poussent nulle part ailleurs sur Terre. L'ascension traverse en une seule journée une forêt tropicale humide grouillant d'oiseaux, une forêt de montagne couverte de mousse, puis une végétation alpine rase, un raccourci saisissant à travers plusieurs écosystèmes normalement séparés par des milliers de kilomètres de latitude.",
        bodyEn:
          "Kinabalu Park, UNESCO-listed in 2000, concentrates over five thousand species of vascular plants on its slopes, including over seven hundred orchid species and several varieties of carnivorous Nepenthes pitcher plants found nowhere else on Earth. The climb crosses, in a single day, a humid tropical forest teeming with birds, a moss-covered mountain forest, then sparse alpine vegetation, a striking shortcut through several ecosystems normally separated by thousands of kilometres of latitude.",
        bodyEs:
          "El parque del Kinabalu, declarado por la UNESCO en 2000, concentra más de cinco mil especies de plantas vasculares en sus laderas, entre ellas más de setecientas especies de orquídeas y varias variedades de plantas carnívoras del género Nepenthes que no crecen en ningún otro lugar de la Tierra. La ascensión atraviesa en un solo día un bosque tropical húmedo bullicioso de aves, un bosque de montaña cubierto de musgo y después una vegetación alpina rala, un atajo impactante a través de varios ecosistemas normalmente separados por miles de kilómetros de latitud.",
      },
    ],
    hotels: [
      {
        name: "Refuge d'altitude sur le mont Kinabalu",
        nameEn: "A High-Altitude Lodge on Mount Kinabalu",
        nameEs: "Refugio de altitud en el monte Kinabalu",
        description:
          "Un refuge de montagne à plus de trois mille trois cents mètres d'altitude, dortoirs chauffés et repas chauds servis avant le départ nocturne vers le sommet.",
        descriptionEn:
          "A mountain lodge above three thousand three hundred metres, heated dormitories and hot meals served before the night departure for the summit.",
        descriptionEs:
          "Un refugio de montaña a más de tres mil trescientos metros de altitud, dormitorios con calefacción y comidas calientes servidas antes de la salida nocturna hacia la cima.",
        image: `${R2}/trips/bornee-kinabalu-hotel-1.jpg`,
      },
      {
        name: "Lodge au pied du parc national",
        nameEn: "A Lodge at the Foot of the National Park",
        nameEs: "Lodge al pie del parque nacional",
        description:
          "Un lodge confortable au pied du parc national de Kinabalu, chambres avec vue sur le sommet, spa aux sources chaudes de Poring pour récupérer après l'ascension.",
        descriptionEn:
          "A comfortable lodge at the foot of Kinabalu National Park, rooms overlooking the summit, a spa at the Poring hot springs to recover after the climb.",
        descriptionEs:
          "Un cómodo lodge al pie del parque nacional de Kinabalu, habitaciones con vistas a la cima, spa en las fuentes termales de Poring para recuperarse tras la ascensión.",
        image: `${R2}/trips/bornee-kinabalu-hotel-2.jpg`,
      },
    ],
  },
);

standardTrips.push(
  {
    destinationSlug: "philippines",
    tour: {
      name: "Philippines : Siargao, l'île du surf",
      nameEn: "Philippines: Siargao, the Surfing Island",
      nameEs: "Filipinas: Siargao, la isla del surf",
      slug: "philippines-siargao-surf",
      image: `${R2}/tours/philippines-siargao-surf.jpg`,
      images: `${R2}/trips/philippines-siargao-gallery-1.jpg,${R2}/trips/philippines-siargao-gallery-2.jpg,${R2}/trips/philippines-siargao-gallery-3.jpg,${R2}/trips/philippines-siargao-gallery-4.jpg,${R2}/trips/philippines-siargao-gallery-5.jpg,${R2}/trips/philippines-siargao-gallery-6.jpg`,
      tagline: "Une vague en forme de coquille qui a fait de cette île en forme de larme la capitale du surf des Philippines",
      taglineEn: "A shell-shaped wave that has made this teardrop-shaped island the surfing capital of the Philippines",
      taglineEs: "Una ola en forma de concha que ha convertido a esta isla en forma de lágrima en la capital del surf de Filipinas",
      description:
        "Siargao, île en forme de larme dans l'archipel de Mindanao, doit sa réputation mondiale à Cloud 9, vague tubulaire exceptionnelle qui accueille chaque année une étape du circuit professionnel de surf. Longtemps accessible uniquement par ferry, l'île a conservé, au-delà de sa scène surf désormais internationale, des lagons cachés, des piscines naturelles et des villages de pêcheurs qui font d'elle l'une des destinations les plus authentiques de l'archipel philippin.",
      descriptionEn:
        "Siargao, a teardrop-shaped island in the Mindanao archipelago, owes its worldwide reputation to Cloud 9, an exceptional barrelling wave that hosts a stop on the professional surfing circuit every year. Long accessible only by ferry, the island has retained, beyond its now-international surf scene, hidden lagoons, natural pools, and fishing villages that make it one of the most authentic destinations in the Philippine archipelago.",
      descriptionEs:
        "Siargao, isla en forma de lágrima en el archipiélago de Mindanao, debe su reputación mundial a Cloud 9, una excepcional ola tubular que acoge cada año una etapa del circuito profesional de surf. Accesible durante mucho tiempo solo en ferri, la isla ha conservado, más allá de su ya internacional escena de surf, lagunas escondidas, piscinas naturales y pueblos de pescadores que la convierten en uno de los destinos más auténticos del archipiélago filipino.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Sept à nov",
      whenLabelEn: "Sept to Nov",
      whenLabelEs: "Sept a nov",
      bestMonths: "september,october,november",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 132,
    },
    sections: [
      {
        heading: "Cloud 9, la vague qui a mis Siargao sur la carte",
        headingEn: "Cloud 9, the Wave that Put Siargao on the Map",
        headingEs: "Cloud 9, la ola que puso a Siargao en el mapa",
        body:
          "Cloud 9, vague de récif tubulaire exceptionnelle découverte par des surfeurs australiens dans les années 1990, doit son nom à l'expression anglaise désignant un état d'euphorie totale, tant la qualité de son tube impressionna ses premiers découvreurs. Cette vague, qui accueille chaque année une étape du circuit mondial de surf professionnel, transforma en une génération un village de pêcheurs isolé en destination internationale, sans que Siargao ne perde pour autant son atmosphère décontractée.",
        bodyEn:
          "Cloud 9, an exceptional barrelling reef wave discovered by Australian surfers in the 1990s, owes its name to the English expression for a state of total euphoria, so impressed were its first discoverers by the quality of its barrel. This wave, which hosts a stop on the world professional surfing circuit every year, transformed an isolated fishing village into an international destination within a generation, without Siargao losing its laid-back atmosphere.",
        bodyEs:
          "Cloud 9, excepcional ola de arrecife tubular descubierta por surfistas australianos en la década de 1990, debe su nombre a la expresión inglesa que designa un estado de euforia total, tal fue la impresión que causó la calidad de su tubo a sus primeros descubridores. Esta ola, que acoge cada año una etapa del circuito mundial de surf profesional, transformó en una generación un aislado pueblo de pescadores en destino internacional, sin que Siargao perdiera por ello su ambiente relajado.",
      },
      {
        heading: "Les piscines naturelles et lagons cachés",
        headingEn: "The Natural Pools and Hidden Lagoons",
        headingEs: "Las piscinas naturales y lagunas escondidas",
        body:
          "Au-delà de sa scène surf, Siargao dévoile des piscines naturelles creusées dans la roche corallienne, comme le fameux Magpupungko qui n'apparaît qu'à marée basse, ainsi que la lagune de Sugba, étendue d'eau turquoise entourée de mangroves où plongeoirs et kayaks permettent d'explorer un écosystème préservé. L'île de Guyam et l'îlot de Naked, minuscules bancs de sable coiffés de palmiers accessibles en bateau à quelques minutes de la côte, complètent ce tableau d'une île restée largement épargnée par le développement de masse.",
        bodyEn:
          "Beyond its surf scene, Siargao reveals natural pools carved into the coral rock, such as the famous Magpupungko that appears only at low tide, as well as Sugba Lagoon, a stretch of turquoise water surrounded by mangroves where diving platforms and kayaks allow exploration of a preserved ecosystem. Guyam Island and Naked Island, tiny palm-topped sandbanks reachable by boat within minutes of the coast, round out the picture of an island largely spared mass development.",
        bodyEs:
          "Más allá de su escena de surf, Siargao revela piscinas naturales excavadas en la roca coralina, como la famosa Magpupungko, que solo aparece con marea baja, así como la laguna de Sugba, extensión de agua turquesa rodeada de manglares donde plataformas de salto y kayaks permiten explorar un ecosistema preservado. La isla de Guyam y el islote de Naked, diminutos bancos de arena coronados de palmeras accesibles en barco a pocos minutos de la costa, completan el cuadro de una isla en gran parte a salvo del desarrollo masivo.",
      },
    ],
    hotels: [
      {
        name: "Lodge de surf près de Cloud 9",
        nameEn: "A Surf Lodge near Cloud 9",
        nameEs: "Lodge de surf cerca de Cloud 9",
        description:
          "Un lodge de surf à distance de marche de Cloud 9, chambres simples avec hamacs, casiers à planches et vue directe sur la vague depuis la terrasse commune.",
        descriptionEn:
          "A surf lodge within walking distance of Cloud 9, simple rooms with hammocks, board racks, and a direct view of the wave from the common terrace.",
        descriptionEs:
          "Un lodge de surf a poca distancia a pie de Cloud 9, habitaciones sencillas con hamacas, estanterías para tablas y vistas directas a la ola desde la terraza común.",
        image: `${R2}/trips/philippines-siargao-hotel-1.jpg`,
      },
      {
        name: "Villa de plage à General Luna",
        nameEn: "A General Luna Beach Villa",
        nameEs: "Villa de playa en General Luna",
        description:
          "Une villa de plage à General Luna, principal village de l'île, jardin tropical et location de vélos pour explorer les piscines naturelles et lagons environnants.",
        descriptionEn:
          "A beach villa in General Luna, the island's main village, a tropical garden and bicycle rental to explore the surrounding natural pools and lagoons.",
        descriptionEs:
          "Una villa de playa en General Luna, principal pueblo de la isla, jardín tropical y alquiler de bicicletas para explorar las piscinas naturales y lagunas circundantes.",
        image: `${R2}/trips/philippines-siargao-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "malaisie",
    tour: {
      name: "Malaisie : Penang, street art et George Town",
      nameEn: "Malaysia: Penang, Street Art and George Town",
      nameEs: "Malasia: Penang, arte urbano y George Town",
      slug: "malaisie-penang-georgetown",
      image: `${R2}/tours/malaisie-penang-georgetown.jpg`,
      images: `${R2}/trips/malaisie-penang-gallery-1.jpg,${R2}/trips/malaisie-penang-gallery-2.jpg,${R2}/trips/malaisie-penang-gallery-3.jpg,${R2}/trips/malaisie-penang-gallery-4.jpg,${R2}/trips/malaisie-penang-gallery-5.jpg,${R2}/trips/malaisie-penang-gallery-6.jpg`,
      tagline: "Une ville coloniale classée à l'UNESCO devenue à ciel ouvert le plus grand musée de street art d'Asie du Sud-Est",
      taglineEn: "A UNESCO-listed colonial city that has become South-East Asia's largest open-air street art museum",
      taglineEs: "Una ciudad colonial declarada por la UNESCO convertida en el mayor museo de arte urbano al aire libre del sudeste asiático",
      description:
        "George Town, capitale historique de Penang classée à l'UNESCO pour son patrimoine architectural sino-portugais unique, s'est transformée depuis 2012 en une galerie à ciel ouvert grâce à des dizaines de fresques murales peintes par l'artiste lituanien Ernest Zacharevic et ses successeurs. La ville, réputée pour abriter la scène street food la plus riche du pays, mêle temples chinois, mosquées et églises coloniales dans un dédale de ruelles restées largement piétonnes.",
      descriptionEn:
        "George Town, Penang's historic capital UNESCO-listed for its unique Sino-Portuguese architectural heritage, has transformed since 2012 into an open-air gallery thanks to dozens of murals painted by Lithuanian artist Ernest Zacharevic and his successors. The city, renowned for hosting the country's richest street food scene, blends Chinese temples, mosques, and colonial churches within a maze of largely pedestrian lanes.",
      descriptionEs:
        "George Town, capital histórica de Penang declarada por la UNESCO por su singular patrimonio arquitectónico sino-portugués, se ha transformado desde 2012 en una galería al aire libre gracias a decenas de murales pintados por el artista lituano Ernest Zacharevic y sus sucesores. La ciudad, célebre por albergar la escena de comida callejera más rica del país, combina templos chinos, mezquitas e iglesias coloniales en un laberinto de callejuelas en gran parte peatonales.",
      price: 1800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Dec à avril",
      whenLabelEn: "Dec to April",
      whenLabelEs: "Dic a abril",
      bestMonths: "december,january,february,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 134,
    },
    sections: [
      {
        heading: "Le plus grand musée de street art d'Asie du Sud-Est",
        headingEn: "South-East Asia's Largest Street Art Museum",
        headingEs: "El mayor museo de arte urbano del sudeste asiático",
        body:
          "L'artiste lituanien Ernest Zacharevic, invité en 2012 dans le cadre d'un festival d'art urbain, peignit une série de fresques interactives mêlant personnages peints et objets réels, comme des enfants sur un vrai vélo ou une fillette juchée sur une véritable chaise, qui déclenchèrent un engouement inattendu. Des dizaines d'autres artistes locaux et internationaux ont depuis complété cette galerie à ciel ouvert répartie dans tout le centre historique, faisant de George Town une référence mondiale du street art.",
        bodyEn:
          "Lithuanian artist Ernest Zacharevic, invited in 2012 as part of an urban art festival, painted a series of interactive murals blending painted characters with real objects, such as children on an actual bicycle or a girl perched on a real chair, which sparked an unexpected craze. Dozens of other local and international artists have since added to this open-air gallery spread across the entire historic centre, making George Town a world reference for street art.",
        bodyEs:
          "El artista lituano Ernest Zacharevic, invitado en 2012 en el marco de un festival de arte urbano, pintó una serie de murales interactivos que combinaban personajes pintados con objetos reales, como niños sobre una bicicleta de verdad o una niña sentada en una silla real, lo que desencadenó un inesperado furor. Desde entonces, decenas de artistas locales e internacionales han completado esta galería al aire libre repartida por todo el centro histórico, convirtiendo a George Town en una referencia mundial del arte urbano.",
      },
      {
        heading: "Un patrimoine architectural sino-portugais unique",
        headingEn: "A Unique Sino-Portuguese Architectural Heritage",
        headingEs: "Un patrimonio arquitectónico sino-portugués único",
        body:
          "George Town, classée à l'UNESCO en 2008 aux côtés de Malacca, doit son statut à un mélange architectural unique en Asie du Sud-Est, où boutiques chinoises à colonnades, clan houses ornées de porcelaine et bâtiments coloniaux britanniques se côtoient sur quelques rues. La ville abrite également l'une des scènes de street food les plus réputées d'Asie, où étals hawker vieux de plusieurs générations continuent de servir des plats emblématiques comme le char kway teow ou le laksa assam.",
        bodyEn:
          "George Town, UNESCO-listed in 2008 alongside Malacca, owes its status to an architectural blend unique in South-East Asia, where colonnaded Chinese shophouses, porcelain-adorned clan houses, and British colonial buildings sit side by side across a handful of streets. The city also hosts one of Asia's most celebrated street food scenes, where hawker stalls generations old continue to serve emblematic dishes like char kway teow or laksa assam.",
        bodyEs:
          "George Town, declarada por la UNESCO en 2008 junto a Malaca, debe su estatus a una mezcla arquitectónica única en el sudeste asiático, donde tiendas chinas de columnatas, casas de clanes adornadas con porcelana y edificios coloniales británicos conviven en unas pocas calles. La ciudad alberga además una de las escenas de comida callejera más célebres de Asia, donde puestos hawker de varias generaciones siguen sirviendo platos emblemáticos como el char kway teow o el laksa assam.",
      },
    ],
    hotels: [
      {
        name: "Maison-boutique rénovée du centre historique",
        nameEn: "A Renovated Shophouse in the Historic Centre",
        nameEs: "Casa-tienda renovada del centro histórico",
        description:
          "Une ancienne maison-boutique sino-portugaise rénovée au cœur du centre historique classé, cour intérieure ombragée, à distance de marche des principales fresques de street art.",
        descriptionEn:
          "A former Sino-Portuguese shophouse renovated at the heart of the listed historic centre, a shaded inner courtyard, within walking distance of the main street art murals.",
        descriptionEs:
          "Una antigua casa-tienda sino-portuguesa renovada en el corazón del centro histórico declarado, patio interior sombreado, a poca distancia a pie de los principales murales de arte urbano.",
        image: `${R2}/trips/malaisie-penang-hotel-1.jpg`,
      },
      {
        name: "Hôtel de charme près du front de mer",
        nameEn: "A Boutique Hotel near the Waterfront",
        nameEs: "Hotel con encanto cerca del paseo marítimo",
        description:
          "Un hôtel de charme installé dans un ancien entrepôt colonial près du front de mer de George Town, à courte distance des étals de street food du quartier chinois.",
        descriptionEn:
          "A boutique hotel housed in a former colonial warehouse near George Town's waterfront, a short distance from the street food stalls of Chinatown.",
        descriptionEs:
          "Un hotel con encanto instalado en un antiguo almacén colonial cerca del paseo marítimo de George Town, a poca distancia de los puestos de comida callejera del barrio chino.",
        image: `${R2}/trips/malaisie-penang-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "singapour",
    tour: {
      name: "Singapour : Sentosa et les îles du sud",
      nameEn: "Singapore: Sentosa and the Southern Islands",
      nameEs: "Singapur: Sentosa y las islas del sur",
      slug: "singapour-sentosa-iles-sud",
      image: `${R2}/tours/singapour-sentosa-iles-sud.jpg`,
      images: `${R2}/trips/singapour-sentosa-gallery-1.jpg,${R2}/trips/singapour-sentosa-gallery-2.jpg,${R2}/trips/singapour-sentosa-gallery-3.jpg,${R2}/trips/singapour-sentosa-gallery-4.jpg,${R2}/trips/singapour-sentosa-gallery-5.jpg,${R2}/trips/singapour-sentosa-gallery-6.jpg`,
      tagline: "D'une ancienne base militaire britannique à une île de loisirs, à quelques minutes de téléphérique du centre-ville",
      taglineEn: "From a former British military base to a leisure island, minutes away from downtown by cable car",
      taglineEs: "De una antigua base militar británica a una isla de ocio, a pocos minutos en teleférico del centro urbano",
      description:
        "Sentosa, île reliée à Singapour par un pont, un téléphérique et un monorail, était encore dans les années 1960 une base militaire britannique surnommée Pulau Blakang Mati, l'« île de la mort par-derrière », avant d'être reconvertie en destination de loisirs à partir de 1972. Ses plages artificielles bordées de sable importé, ses forts historiques datant de la Seconde Guerre mondiale et sa proximité immédiate avec les gratte-ciel de Singapour en font une escapade improbable en pleine cité-État.",
      descriptionEn:
        "Sentosa, an island connected to Singapore by a bridge, a cable car, and a monorail, was still a British military base as late as the 1960s, nicknamed Pulau Blakang Mati, the \"island of death from behind,\" before being converted into a leisure destination starting in 1972. Its artificial beaches lined with imported sand, its historic forts dating from the Second World War, and its immediate proximity to Singapore's skyscrapers make it an improbable escape in the heart of the city-state.",
      descriptionEs:
        "Sentosa, isla conectada a Singapur por un puente, un teleférico y un monorraíl, todavía era en la década de 1960 una base militar británica apodada Pulau Blakang Mati, la «isla de la muerte por detrás», antes de reconvertirse en destino de ocio a partir de 1972. Sus playas artificiales bordeadas de arena importada, sus fuertes históricos de la Segunda Guerra Mundial y su inmediata proximidad a los rascacielos de Singapur la convierten en una escapada improbable en pleno corazón de la ciudad-estado.",
      price: 1700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Fév à avril | Juil à sept",
      whenLabelEn: "Feb to April | July to Sept",
      whenLabelEs: "Feb a abril | jul a sept",
      bestMonths: "february,march,april,july,august,september",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 136,
    },
    sections: [
      {
        heading: "D'une base militaire à une île de loisirs",
        headingEn: "From a Military Base to a Leisure Island",
        headingEs: "De una base militar a una isla de ocio",
        body:
          "Sentosa, connue jusque dans les années 1970 sous le nom de Pulau Blakang Mati, servit de base militaire britannique puis japonaise pendant la Seconde Guerre mondiale, avant que le gouvernement singapourien ne décide en 1972 de la reconvertir en destination de loisirs et de la renommer Sentosa, qui signifie « paix et tranquillité » en malais. Les forts de Siloso et de Fort Serapong, avec leurs canons encore en place face à la mer, témoignent aujourd'hui de ce passé militaire au sein d'une île désormais vouée aux plages et aux parcs à thème.",
        bodyEn:
          "Sentosa, known until the 1970s as Pulau Blakang Mati, served as a British and then Japanese military base during the Second World War, before the Singaporean government decided in 1972 to convert it into a leisure destination and rename it Sentosa, meaning \"peace and tranquillity\" in Malay. The forts of Siloso and Fort Serapong, with their cannons still in place facing the sea, now bear witness to this military past within an island now devoted to beaches and theme parks.",
        bodyEs:
          "Sentosa, conocida hasta la década de 1970 como Pulau Blakang Mati, sirvió como base militar británica y después japonesa durante la Segunda Guerra Mundial, antes de que el gobierno singapurense decidiera en 1972 reconvertirla en destino de ocio y rebautizarla como Sentosa, que significa «paz y tranquilidad» en malayo. Los fuertes de Siloso y Fort Serapong, con sus cañones todavía en su sitio frente al mar, dan testimonio hoy de ese pasado militar dentro de una isla ahora dedicada a las playas y los parques temáticos.",
      },
      {
        heading: "Les îles du sud, un archipel méconnu",
        headingEn: "The Southern Islands, a Little-Known Archipelago",
        headingEs: "Las islas del sur, un archipiélago poco conocido",
        body:
          "Au-delà de Sentosa, l'archipel des îles du Sud de Singapour, accessible en bateau depuis le port de Marina South, reste largement méconnu des visiteurs malgré des plages tranquilles et des sentiers de randonnée offrant une vue rare sur le détroit de Singapour et les cargos qui l'empruntent. St John's Island et Lazarus Island, reliées par une digue piétonne, permettent une escapade improbable loin de l'agitation urbaine, à moins d'une heure de bateau du centre-ville.",
        bodyEn:
          "Beyond Sentosa, Singapore's Southern Islands archipelago, reachable by boat from Marina South pier, remains largely unknown to visitors despite quiet beaches and hiking trails offering a rare view over the Singapore Strait and the cargo ships passing through it. St John's Island and Lazarus Island, linked by a pedestrian causeway, allow for an improbable escape from urban bustle, less than an hour's boat ride from downtown.",
        bodyEs:
          "Más allá de Sentosa, el archipiélago de las islas del Sur de Singapur, accesible en barco desde el embarcadero de Marina South, sigue siendo en gran parte desconocido para los visitantes pese a sus tranquilas playas y senderos de excursión que ofrecen una vista poco común sobre el estrecho de Singapur y los cargueros que lo cruzan. St John's Island y Lazarus Island, unidas por una calzada peatonal, permiten una escapada improbable lejos del bullicio urbano, a menos de una hora en barco del centro.",
      },
    ],
    hotels: [
      {
        name: "Resort de plage de Sentosa",
        nameEn: "A Sentosa Beach Resort",
        nameEs: "Resort de playa de Sentosa",
        description:
          "Un resort en bord de plage sur l'île de Sentosa, piscines à débordement face à la mer, à distance de marche des forts historiques et des plages artificielles.",
        descriptionEn:
          "A beachfront resort on Sentosa Island, infinity pools facing the sea, within walking distance of the historic forts and artificial beaches.",
        descriptionEs:
          "Un resort junto a la playa en la isla de Sentosa, piscinas infinitas frente al mar, a poca distancia a pie de los fuertes históricos y las playas artificiales.",
        image: `${R2}/trips/singapour-sentosa-hotel-1.jpg`,
      },
      {
        name: "Hôtel-boutique face aux îles du Sud",
        nameEn: "A Boutique Hotel Facing the Southern Islands",
        nameEs: "Hotel boutique frente a las islas del Sur",
        description:
          "Un hôtel-boutique près du port de Marina South, point de départ pratique pour rejoindre en bateau les îles du Sud, chambres avec vue sur le détroit de Singapour.",
        descriptionEn:
          "A boutique hotel near Marina South pier, a convenient base for taking a boat to the Southern Islands, rooms overlooking the Singapore Strait.",
        descriptionEs:
          "Un hotel boutique cerca del embarcadero de Marina South, punto de partida práctico para llegar en barco a las islas del Sur, habitaciones con vistas al estrecho de Singapur.",
        image: `${R2}/trips/singapour-sentosa-hotel-2.jpg`,
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
