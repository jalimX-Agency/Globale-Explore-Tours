// Africa batch — new trips bringing each destination to at least 3, styled on Black
// Tomato's real structure (a short number of named-hotel chapters, not an exhaustive
// day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-africa.ts
// Requires scripts/upload-images-africa.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "afrique-du-sud",
    tour: {
      name: "Afrique du Sud : KwaZulu-Natal, du Drakensberg à la mer",
      nameEn: "South Africa: KwaZulu-Natal, from the Drakensberg to the Sea",
      nameEs: "Sudáfrica: KwaZulu-Natal, del Drakensberg al mar",
      slug: "afrique-du-sud-kwazulu-natal",
      image: `${R2}/journeys/afrique-du-sud-kzn-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Montagnes zouloues, réserves géantes et lagunes classées à l'UNESCO",
      taglineEn: "Zulu mountains, giant game reserves, and a UNESCO-listed wetland",
      taglineEs: "Montañas zulúes, grandes reservas y humedales declarados por la UNESCO",
      description:
        "Une facette méconnue de l'Afrique du Sud, loin du Cap et du Kruger : les sommets spectaculaires du Drakensberg, la culture zouloue toujours vivante dans ses villages, et les eaux classées à l'UNESCO du parc iSimangaliso, où hippopotames et crocodiles partagent l'estuaire avec les baleines à bosse au large.",
      descriptionEn:
        "A lesser-known face of South Africa, far from Cape Town and Kruger: the Drakensberg's dramatic peaks, Zulu culture still alive in its villages, and the UNESCO-listed waters of iSimangaliso Wetland Park, where hippos and crocodiles share the estuary with humpback whales offshore.",
      descriptionEs:
        "Una cara menos conocida de Sudáfrica, lejos de Ciudad del Cabo y el Kruger: los picos espectaculares del Drakensberg, la cultura zulú aún viva en sus poblados, y las aguas declaradas por la UNESCO del parque de iSimangaliso, donde hipopótamos y cocodrilos comparten el estuario con ballenas jorobadas mar adentro.",
      price: 5200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "May a sept",
      bestMonths: "may,june,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 6,
    },
    chapters: [
      {
        title: "Le Drakensberg",
        titleEn: "The Drakensberg",
        titleEs: "El Drakensberg",
        intro:
          "Premier chapitre au pied du Drakensberg, littéralement « la montagne des dragons », dont les falaises de basalte culminent à plus de 3000 mètres. Classé à l'UNESCO pour ses paysages autant que pour ses milliers de peintures rupestres San, vieilles de plusieurs millénaires. Randonnées à travers des vallées verdoyantes, avec la chaîne enneigée en toile de fond une bonne partie de l'année.",
        introEn:
          "The first chapter unfolds at the foot of the Drakensberg — literally \"the dragon mountains\" — whose basalt cliffs rise past 3,000 metres. UNESCO-listed for its landscapes as much as its thousands of San rock paintings, some several millennia old. Hikes wind through green valleys with the snow-capped range as a backdrop for much of the year.",
        introEs:
          "El primer capítulo se desarrolla al pie del Drakensberg, literalmente «la montaña de los dragones», cuyos acantilados de basalto superan los 3000 metros. Declarado por la UNESCO tanto por sus paisajes como por sus miles de pinturas rupestres san, de varios milenios de antigüedad. Caminatas por valles verdes con la cordillera nevada de fondo buena parte del año.",
        galleryImages: `${R2}/journeys/afrique-du-sud-kzn-drakensberg-gallery1.jpg,${R2}/journeys/afrique-du-sud-kzn-drakensberg-gallery2.jpg,${R2}/journeys/afrique-du-sud-kzn-drakensberg-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée dans les contreforts",
            titleEn: "Hiking the foothills",
            titleEs: "Senderismo en las estribaciones",
            description:
              "Arrivée dans la région du Drakensberg, installation dans un lodge de montagne. Première randonnée l'après-midi vers l'amphithéâtre naturel de Cathedral Peak, avec vue sur les sommets environnants.",
            descriptionEn:
              "Arrival in the Drakensberg region, settling into a mountain lodge. A first afternoon hike toward the natural amphitheatre of Cathedral Peak, with views over the surrounding summits.",
            descriptionEs:
              "Llegada a la región del Drakensberg, instalación en un lodge de montaña. Primera caminata por la tarde hacia el anfiteatro natural de Cathedral Peak, con vistas a las cumbres circundantes.",
            image: `${R2}/journeys/afrique-du-sud-kzn-drakensberg-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Peintures rupestres San",
            titleEn: "San rock art",
            titleEs: "Arte rupestre san",
            description:
              "Excursion guidée vers l'un des sites de peintures rupestres San les mieux préservés de la région, avec un guide local qui explique la signification de ces représentations vieilles de plusieurs milliers d'années.",
            descriptionEn:
              "A guided excursion to one of the region's best-preserved San rock art sites, with a local guide explaining the meaning behind these depictions, several thousand years old.",
            descriptionEs:
              "Excursión guiada a uno de los yacimientos de arte rupestre san mejor conservados de la región, con un guía local que explica el significado de estas representaciones de varios milenios de antigüedad.",
            image: `${R2}/journeys/afrique-du-sud-kzn-drakensberg-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "iSimangaliso et la côte zouloue",
        titleEn: "iSimangaliso and the Zulu Coast",
        titleEs: "iSimangaliso y la costa zulú",
        intro:
          "Direction la côte et le parc iSimangaliso, premier site inscrit au patrimoine mondial de l'UNESCO en Afrique du Sud, où se rencontrent forêts de dunes, lacs et estuaires. Des safaris en bateau permettent d'observer hippopotames et crocodiles du Nil dans leur habitat naturel, tandis qu'au large, les baleines à bosse migrent le long de la côte entre juin et novembre. Une visite de village zoulou complète le tableau, avec ses huttes traditionnelles en forme de ruche et ses danseurs en tenue cérémonielle.",
        introEn:
          "On to the coast and iSimangaliso Wetland Park, South Africa's first UNESCO World Heritage Site, where dune forests, lakes, and estuaries all meet. Boat safaris allow close encounters with hippos and Nile crocodiles in their natural habitat, while offshore, humpback whales migrate along the coast between June and November. A Zulu village visit rounds out the picture, with its traditional beehive-shaped huts and dancers in ceremonial dress.",
        introEs:
          "Rumbo a la costa y al parque de iSimangaliso, el primer sitio declarado Patrimonio Mundial de la UNESCO en Sudáfrica, donde se encuentran bosques de dunas, lagos y estuarios. Los safaris en barco permiten observar de cerca hipopótamos y cocodrilos del Nilo en su hábitat natural, mientras que mar adentro las ballenas jorobadas migran a lo largo de la costa entre junio y noviembre. Una visita a un poblado zulú completa el cuadro, con sus tradicionales chozas en forma de colmena y sus bailarines en atuendo ceremonial.",
        galleryImages: `${R2}/journeys/afrique-du-sud-kzn-isimangaliso-gallery1.jpg,${R2}/journeys/afrique-du-sud-kzn-isimangaliso-gallery2.jpg,${R2}/journeys/afrique-du-sud-kzn-isimangaliso-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Transfert et safari en bateau",
            titleEn: "Transfer and boat safari",
            titleEs: "Traslado y safari en barco",
            description:
              "Transfert vers la côte et le parc iSimangaliso. Safari en bateau sur le lac Sainte-Lucie l'après-midi, à la recherche des hippopotames et des crocodiles du Nil.",
            descriptionEn:
              "Transfer to the coast and iSimangaliso Wetland Park. An afternoon boat safari on Lake St Lucia, looking for hippos and Nile crocodiles.",
            descriptionEs:
              "Traslado a la costa y al parque de iSimangaliso. Safari en barco por el lago Santa Lucía por la tarde, en busca de hipopótamos y cocodrilos del Nilo.",
            image: `${R2}/journeys/afrique-du-sud-kzn-isimangaliso-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Village zoulou et plage",
            titleEn: "Zulu village and beach",
            titleEs: "Poblado zulú y playa",
            description:
              "Visite d'un village zoulou traditionnel le matin, danses et présentation de l'artisanat local. L'après-midi, temps libre sur les plages sauvages de Cape Vidal, avec une chance d'apercevoir des baleines à bosse au large en saison.",
            descriptionEn:
              "A traditional Zulu village visit in the morning, with dance and local craft demonstrations. In the afternoon, free time on the wild beaches of Cape Vidal, with a chance of spotting humpback whales offshore in season.",
            descriptionEs:
              "Visita a un poblado zulú tradicional por la mañana, con danzas y demostraciones de artesanía local. Por la tarde, tiempo libre en las playas salvajes de Cape Vidal, con posibilidad de avistar ballenas jorobadas mar adentro en temporada.",
            image: `${R2}/journeys/afrique-du-sud-kzn-isimangaliso-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "botswana",
    tour: {
      name: "Botswana : Chobe, le fleuve aux éléphants",
      nameEn: "Botswana: Chobe, the River of Elephants",
      nameEs: "Botsuana: Chobe, el río de los elefantes",
      slug: "botswana-chobe-elephants",
      image: `${R2}/journeys/botswana-chobe-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La plus forte concentration d'éléphants d'Afrique, au fil de l'eau",
      taglineEn: "Africa's highest concentration of elephants, drifting along the water",
      taglineEs: "La mayor concentración de elefantes de África, a la deriva sobre el agua",
      description:
        "Le parc national de Chobe abrite la plus forte concentration d'éléphants du continent africain — plus de cinquante mille individus. Ce voyage alterne safaris en 4x4 et croisières sur la rivière Chobe, où des troupeaux entiers viennent boire et se baigner au coucher du soleil, avant une extension vers les canaux plus secrets de Linyanti.",
      descriptionEn:
        "Chobe National Park is home to the highest concentration of elephants on the African continent — over fifty thousand individuals. This trip alternates 4x4 safaris and cruises on the Chobe River, where entire herds come to drink and bathe at sunset, before an extension into the more secret channels of Linyanti.",
      descriptionEs:
        "El parque nacional de Chobe alberga la mayor concentración de elefantes del continente africano: más de cincuenta mil ejemplares. Este viaje alterna safaris en 4x4 y cruceros por el río Chobe, donde manadas enteras acuden a beber y bañarse al atardecer, antes de una extensión hacia los canales más secretos de Linyanti.",
      price: 4800,
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
      feeling: "distraction",
      travelerTypes: "family,couples,groups",
      maxGuests: 6,
      featured: false,
      order: 7,
    },
    chapters: [
      {
        title: "Chobe",
        titleEn: "Chobe",
        titleEs: "Chobe",
        intro:
          "Premier chapitre le long de la rivière Chobe, frontière naturelle avec la Namibie. C'est ici que se concentre, en saison sèche, l'une des plus grandes populations d'éléphants au monde, attirés par l'eau alors que le reste du paysage s'assèche. Les croisières en fin de journée offrent des rencontres rapprochées avec des troupeaux entiers venus se baigner, souvent accompagnés d'hippopotames, de crocodiles et de buffles.",
        introEn:
          "The first chapter unfolds along the Chobe River, a natural border with Namibia. This is where, in the dry season, one of the world's largest elephant populations concentrates, drawn by water as the rest of the landscape dries out. Late-afternoon cruises bring close encounters with entire herds coming to bathe, often alongside hippos, crocodiles, and buffalo.",
        introEs:
          "El primer capítulo se desarrolla a lo largo del río Chobe, frontera natural con Namibia. Aquí se concentra, en la temporada seca, una de las mayores poblaciones de elefantes del mundo, atraídos por el agua mientras el resto del paisaje se seca. Los cruceros al final de la tarde ofrecen encuentros cercanos con manadas enteras que acuden a bañarse, a menudo junto a hipopótamos, cocodrilos y búfalos.",
        galleryImages: `${R2}/journeys/botswana-chobe-gallery1.jpg,${R2}/journeys/botswana-chobe-gallery2.jpg,${R2}/journeys/botswana-chobe-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Arrivée et croisière au coucher du soleil",
            titleEn: "Arrival and sunset cruise",
            titleEs: "Llegada y crucero al atardecer",
            description:
              "Arrivée à Kasane, installation au lodge en bord de rivière. Croisière en fin de journée sur la Chobe pour observer les premiers troupeaux d'éléphants venus se rafraîchir.",
            descriptionEn:
              "Arrival in Kasane, settling into the riverside lodge. A late-afternoon cruise on the Chobe to watch the first elephant herds coming to cool off.",
            descriptionEs:
              "Llegada a Kasane, instalación en el lodge junto al río. Crucero al final de la tarde por el Chobe para observar las primeras manadas de elefantes que acuden a refrescarse.",
            image: `${R2}/journeys/botswana-chobe-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Safari matinal dans le parc",
            titleEn: "Morning safari in the park",
            titleEs: "Safari matutino en el parque",
            description:
              "Safari en 4x4 dès l'aube dans le parc national de Chobe, à la recherche des grands troupeaux mais aussi des lions et léopards qui chassent près du fleuve.",
            descriptionEn:
              "A dawn 4x4 safari in Chobe National Park, tracking the big herds as well as the lions and leopards that hunt near the river.",
            descriptionEs:
              "Safari en 4x4 al amanecer en el parque nacional de Chobe, en busca de las grandes manadas y también de los leones y leopardos que cazan cerca del río.",
            image: `${R2}/journeys/botswana-chobe-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Linyanti",
        titleEn: "Linyanti",
        titleEs: "Linyanti",
        intro:
          "Extension vers les canaux plus confidentiels de Linyanti, à l'écart des circuits les plus fréquentés de Chobe. Cette zone de marais et de forêts riveraines, gérée en partenariat avec les communautés locales, offre une expérience de safari plus intime, avec une faune tout aussi riche mais beaucoup moins de véhicules sur les pistes.",
        introEn:
          "An extension into the more secluded channels of Linyanti, away from Chobe's busier circuits. This wetland and riverine forest area, managed in partnership with local communities, offers a more intimate safari experience, with wildlife just as rich but far fewer vehicles on the tracks.",
        introEs:
          "Extensión hacia los canales más discretos de Linyanti, alejados de los circuitos más frecuentados de Chobe. Esta zona de humedales y bosques ribereños, gestionada en colaboración con las comunidades locales, ofrece una experiencia de safari más íntima, con una fauna igual de rica pero muchos menos vehículos en las pistas.",
        galleryImages: `${R2}/journeys/botswana-linyanti-gallery1.jpg,${R2}/journeys/botswana-linyanti-gallery2.jpg,${R2}/journeys/botswana-linyanti-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Transfert vers Linyanti",
            titleEn: "Transfer to Linyanti",
            titleEs: "Traslado a Linyanti",
            description:
              "Transfert en petit avion vers la concession privée de Linyanti. Premier safari l'après-midi dans cette zone préservée, réputée pour ses lycaons, l'un des prédateurs les plus rares d'Afrique.",
            descriptionEn:
              "A light aircraft transfer to the private Linyanti concession. A first afternoon safari in this pristine area, known for its African wild dogs, one of Africa's rarest predators.",
            descriptionEs:
              "Traslado en avioneta a la concesión privada de Linyanti. Primer safari por la tarde en esta zona virgen, conocida por sus licaones, uno de los depredadores más raros de África.",
            image: `${R2}/journeys/botswana-linyanti-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Marais et forêts riveraines",
            titleEn: "Wetlands and riverine forest",
            titleEs: "Humedales y bosque ribereño",
            description:
              "Journée complète de safari entre marais et forêts riveraines, avec une pause pique-nique au bord de l'eau. Retour au camp pour un dîner sous les étoiles, dernière soirée du voyage.",
            descriptionEn:
              "A full day of safari between wetlands and riverine forest, with a picnic break by the water. Back to camp for a dinner under the stars, the trip's final evening.",
            descriptionEs:
              "Día completo de safari entre humedales y bosque ribereño, con una pausa para picnic junto al agua. Regreso al campamento para una cena bajo las estrellas, última noche del viaje.",
            image: `${R2}/journeys/botswana-linyanti-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "egypte",
    tour: {
      name: "Égypte : Sinaï et désert Blanc, l'autre Égypte",
      nameEn: "Egypt: Sinai and the White Desert, the Other Egypt",
      nameEs: "Egipto: Sinaí y el desierto Blanco, el otro Egipto",
      slug: "egypte-sinai-desert-blanc",
      image: `${R2}/journeys/egypte-sinai-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un lever de soleil sur le mont Sinaï, une nuit sous les formations de craie du désert Blanc",
      taglineEn: "Sunrise on Mount Sinai, a night among the White Desert's chalk formations",
      taglineEs: "Un amanecer en el monte Sinaí, una noche entre las formaciones de tiza del desierto Blanco",
      description:
        "Loin du Nil et des foules, une Égypte désertique et spirituelle. Ascension nocturne du mont Sinaï pour un lever de soleil au sommet, visite du monastère Sainte-Catherine, l'un des plus anciens au monde encore habité, puis un vol vers l'oasis de Bahariya et une nuit en camp au cœur du désert Blanc, paysage lunaire de formations de craie sculptées par le vent.",
      descriptionEn:
        "Far from the Nile and the crowds, a desert and spiritual side of Egypt. A night ascent of Mount Sinai for a summit sunrise, a visit to Saint Catherine's Monastery, one of the oldest continuously inhabited monasteries in the world, then a flight to the Bahariya Oasis and a night camping in the heart of the White Desert, a lunar landscape of wind-carved chalk formations.",
      descriptionEs:
        "Lejos del Nilo y de las multitudes, un Egipto desértico y espiritual. Ascensión nocturna al monte Sinaí para ver el amanecer desde la cima, visita al monasterio de Santa Catalina, uno de los más antiguos del mundo aún habitados, y después un vuelo hasta el oasis de Bahariya y una noche de acampada en pleno desierto Blanco, un paisaje lunar de formaciones de tiza esculpidas por el viento.",
      price: 3100,
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
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 8,
    },
    chapters: [
      {
        title: "Le Sinaï",
        titleEn: "Sinai",
        titleEs: "El Sinaí",
        intro:
          "Premier chapitre dans la péninsule du Sinaï, terre sacrée pour trois religions monothéistes. L'ascension du mont Moïse (2285 mètres) débute au milieu de la nuit pour atteindre le sommet avant l'aube, dans le silence complet du désert montagneux. Le monastère Sainte-Catherine, fondé au VIe siècle au pied du mont, abrite l'une des plus anciennes bibliothèques religieuses au monde, juste derrière celle du Vatican.",
        introEn:
          "The first chapter unfolds in the Sinai Peninsula, sacred ground for three monotheistic religions. The ascent of Mount Moses (2,285 metres) begins in the middle of the night to reach the summit before dawn, in the complete silence of the desert mountains. Saint Catherine's Monastery, founded in the 6th century at the mountain's foot, holds one of the oldest religious libraries in the world, second only to the Vatican's.",
        introEs:
          "El primer capítulo se desarrolla en la península del Sinaí, tierra sagrada para tres religiones monoteístas. La ascensión al monte Moisés (2285 metros) comienza en plena noche para alcanzar la cima antes del amanecer, en el silencio absoluto de las montañas del desierto. El monasterio de Santa Catalina, fundado en el siglo VI al pie del monte, alberga una de las bibliotecas religiosas más antiguas del mundo, solo por detrás de la del Vaticano.",
        galleryImages: `${R2}/journeys/egypte-sinai-gallery1.jpg,${R2}/journeys/egypte-sinai-gallery2.jpg,${R2}/journeys/egypte-sinai-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Ascension nocturne du mont Sinaï",
            titleEn: "Night ascent of Mount Sinai",
            titleEs: "Ascensión nocturna al monte Sinaí",
            description:
              "Départ en début de nuit pour l'ascension du mont Sinaï à pied ou à dos de chameau jusqu'aux 750 dernières marches. Lever de soleil au sommet, puis descente pour un petit-déjeuner bédouin au pied de la montagne.",
            descriptionEn:
              "A late-night departure to climb Mount Sinai on foot or by camel up to the final 750 steps. Sunrise at the summit, then a descent for a Bedouin breakfast at the mountain's base.",
            descriptionEs:
              "Salida a última hora de la noche para ascender el monte Sinaí a pie o en camello hasta los últimos 750 escalones. Amanecer en la cima, y después descenso para un desayuno beduino al pie de la montaña.",
            image: `${R2}/journeys/egypte-sinai-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Monastère Sainte-Catherine",
            titleEn: "Saint Catherine's Monastery",
            titleEs: "Monasterio de Santa Catalina",
            description:
              "Matinée de repos, puis visite du monastère Sainte-Catherine, construit autour du site présumé du buisson ardent. Sa collection d'icônes byzantines et son isolement en font un lieu unique, encore habité par une petite communauté de moines orthodoxes.",
            descriptionEn:
              "A morning of rest, then a visit to Saint Catherine's Monastery, built around the site traditionally identified as the burning bush. Its collection of Byzantine icons and its isolation make it a unique place, still home to a small community of Orthodox monks.",
            descriptionEs:
              "Mañana de descanso y después visita al monasterio de Santa Catalina, construido en torno al lugar tradicionalmente identificado con la zarza ardiente. Su colección de iconos bizantinos y su aislamiento lo convierten en un lugar único, todavía habitado por una pequeña comunidad de monjes ortodoxos.",
            image: `${R2}/journeys/egypte-sinai-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le désert Blanc",
        titleEn: "The White Desert",
        titleEs: "El desierto Blanco",
        intro:
          "Vol vers l'oasis de Bahariya puis route vers le désert Blanc, où le vent a sculpté au fil des millénaires d'immenses formations de craie aux allures de champignons géants ou d'animaux figés. Un campement léger est installé au coucher du soleil directement parmi les formations, pour un dîner préparé sur feu de bois et une nuit à la belle étoile dans l'un des paysages les plus singuliers d'Égypte.",
        introEn:
          "A flight to the Bahariya Oasis, then a drive to the White Desert, where wind has carved immense chalk formations over millennia into shapes resembling giant mushrooms or frozen animals. A light camp is set up at sunset right among the formations, for a dinner cooked over an open fire and a night under the stars in one of Egypt's most singular landscapes.",
        introEs:
          "Vuelo hasta el oasis de Bahariya y después carretera hasta el desierto Blanco, donde el viento ha esculpido a lo largo de milenios inmensas formaciones de tiza con aspecto de hongos gigantes o animales petrificados. Al atardecer se instala un campamento ligero justo entre las formaciones, para una cena preparada al fuego de leña y una noche a la intemperie en uno de los paisajes más singulares de Egipto.",
        galleryImages: `${R2}/journeys/egypte-desert-blanc-gallery1.jpg,${R2}/journeys/egypte-desert-blanc-gallery2.jpg,${R2}/journeys/egypte-desert-blanc-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Vol vers Bahariya et désert Noir",
            titleEn: "Flight to Bahariya and the Black Desert",
            titleEs: "Vuelo a Bahariya y desierto Negro",
            description:
              "Vol matinal vers l'oasis de Bahariya. Route en 4x4 à travers le désert Noir, ainsi nommé pour les roches volcaniques sombres qui parsèment le sable doré, avant d'entrer dans le désert Blanc en fin de journée.",
            descriptionEn:
              "A morning flight to the Bahariya Oasis. A 4x4 drive through the Black Desert, named for the dark volcanic rock scattered across the golden sand, before entering the White Desert late in the day.",
            descriptionEs:
              "Vuelo matutino al oasis de Bahariya. Ruta en 4x4 por el desierto Negro, llamado así por las rocas volcánicas oscuras que salpican la arena dorada, antes de entrar en el desierto Blanco al final del día.",
            image: `${R2}/journeys/egypte-desert-blanc-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Nuit dans le désert Blanc",
            titleEn: "A night in the White Desert",
            titleEs: "Una noche en el desierto Blanco",
            description:
              "Journée libre parmi les formations de craie sculptées par le vent, dont la célèbre « Champignon » et le « Poulet ». Installation du campement au coucher du soleil, dîner bédouin préparé sur place et nuit sous l'un des ciels les plus purs d'Égypte.",
            descriptionEn:
              "A free day among the wind-carved chalk formations, including the famous \"Mushroom\" and \"Chicken\" rocks. Camp is set up at sunset, a Bedouin dinner is cooked on site, and the night unfolds under one of Egypt's clearest skies.",
            descriptionEs:
              "Día libre entre las formaciones de tiza esculpidas por el viento, entre ellas las célebres rocas del «Champiñón» y el «Pollo». Instalación del campamento al atardecer, cena beduina preparada in situ y noche bajo uno de los cielos más limpios de Egipto.",
            image: `${R2}/journeys/egypte-desert-blanc-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "afrique-du-sud",
    tour: {
      name: "Afrique du Sud : la Garden Route, de Port Elizabeth au Cap",
      nameEn: "South Africa: the Garden Route, from Port Elizabeth to Cape Town",
      nameEs: "Sudáfrica: la Garden Route, de Port Elizabeth a Ciudad del Cabo",
      slug: "afrique-du-sud-garden-route",
      image: `${R2}/tours/afrique-du-sud-garden-route.jpg`,
      images: `${R2}/trips/afrique-du-sud-garden-route-gallery-1.jpg,${R2}/trips/afrique-du-sud-garden-route-gallery-2.jpg,${R2}/trips/afrique-du-sud-garden-route-gallery-3.jpg,${R2}/trips/afrique-du-sud-garden-route-gallery-4.jpg,${R2}/trips/afrique-du-sud-garden-route-gallery-5.jpg,${R2}/trips/afrique-du-sud-garden-route-gallery-6.jpg`,
      tagline: "Une route côtière entre forêts anciennes, lagunes et baleines franches",
      taglineEn: "A coastal drive between ancient forests, lagoons, and southern right whales",
      taglineEs: "Una ruta costera entre bosques antiguos, lagunas y ballenas francas",
      description:
        "Un road-trip le long de l'une des plus belles routes côtières du monde, entre l'océan Indien et les montagnes. Forêts indigènes de Tsitsikamma, lagune de Knysna, et, de juin à novembre, l'observation des baleines franches australes depuis les falaises de Hermanus.",
      descriptionEn:
        "A road trip along one of the world's most beautiful coastal routes, between the Indian Ocean and the mountains. Tsitsikamma's indigenous forests, the Knysna lagoon, and — June to November — watching southern right whales from the cliffs of Hermanus.",
      descriptionEs:
        "Un viaje por carretera a lo largo de una de las rutas costeras más bellas del mundo, entre el océano Índico y las montañas. Los bosques indígenas de Tsitsikamma, la laguna de Knysna y, de junio a noviembre, la observación de ballenas francas australes desde los acantilados de Hermanus.",
      price: 3200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Juin à nov",
      whenLabelEn: "June to Nov",
      whenLabelEs: "Jun a nov",
      bestMonths: "june,july,august,september,october,november",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,family,solo",
      maxGuests: 6,
      featured: false,
      order: 9,
    },
    sections: [
      {
        heading: "Tsitsikamma et Knysna, la forêt et la lagune",
        headingEn: "Tsitsikamma and Knysna, forest and lagoon",
        headingEs: "Tsitsikamma y Knysna, el bosque y la laguna",
        body:
          "Le voyage suit la Garden Route vers l'ouest, à travers le parc national de Tsitsikamma, où des forêts indigènes centenaires plongent directement dans l'océan. Le pont suspendu de Storms River, à trente mètres au-dessus des flots, ouvre une vue vertigineuse sur l'embouchure. Plus loin, la lagune de Knysna, protégée par ses célèbres « Heads » rocheux, se découvre en bateau ou à vélo le long de ses rives boisées.",
        bodyEn:
          "The trip follows the Garden Route west, through Tsitsikamma National Park, where centuries-old indigenous forest drops straight into the ocean. Storms River's suspension bridge, thirty metres above the water, opens onto a dizzying view of the river mouth. Further on, the Knysna lagoon, guarded by its famous rocky \"Heads,\" is best discovered by boat or by bike along its wooded shores.",
        bodyEs:
          "El viaje sigue la Garden Route hacia el oeste, a través del parque nacional de Tsitsikamma, donde un bosque indígena centenario cae directamente sobre el océano. El puente colgante de Storms River, a treinta metros sobre el agua, ofrece una vista vertiginosa de la desembocadura. Más adelante, la laguna de Knysna, protegida por sus famosos «Heads» rocosos, se descubre en barco o en bicicleta por sus orillas boscosas.",
      },
      {
        heading: "Hermanus et la route jusqu'au Cap",
        headingEn: "Hermanus and the road to Cape Town",
        headingEs: "Hermanus y el camino a Ciudad del Cabo",
        body:
          "Dernière étape à Hermanus, l'un des meilleurs points d'observation au monde pour les baleines franches australes, visibles depuis les falaises sans même embarquer. Entre juin et novembre, il n'est pas rare d'en apercevoir plusieurs directement depuis le sentier côtier. Le voyage se termine par la route jusqu'au Cap, en longeant les vignobles de la vallée de Hemel-en-Aarde.",
        bodyEn:
          "The final stop is Hermanus, one of the best whale-watching spots in the world for southern right whales — visible from the cliffs without even boarding a boat. Between June and November, it's common to spot several right from the coastal path. The trip ends with the drive to Cape Town, along the vineyards of the Hemel-en-Aarde valley.",
        bodyEs:
          "Última etapa en Hermanus, uno de los mejores puntos del mundo para observar ballenas francas australes, visibles desde los acantilados sin necesidad de embarcar. Entre junio y noviembre, es habitual avistar varias directamente desde el sendero costero. El viaje termina con la carretera hasta Ciudad del Cabo, bordeando los viñedos del valle de Hemel-en-Aarde.",
      },
    ],
    hotels: [
      {
        name: "Tsitsikamma Village Inn",
        nameEn: "Tsitsikamma Village Inn",
        nameEs: "Tsitsikamma Village Inn",
        description:
          "Une auberge de charme au cœur du village de Storms River, chambres cosy aux couleurs de la forêt environnante, idéale comme camp de base pour les randonnées du parc national.",
        descriptionEn:
          "A charming inn in the heart of Storms River village, cosy rooms echoing the colours of the surrounding forest, an ideal base for hikes in the national park.",
        descriptionEs:
          "Una posada con encanto en el corazón del pueblo de Storms River, habitaciones acogedoras con los colores del bosque circundante, base ideal para las caminatas del parque nacional.",
        image: `${R2}/trips/afrique-du-sud-garden-route-hotel-tsitsikamma.jpg`,
      },
      {
        name: "Birkenhead House, Hermanus",
        nameEn: "Birkenhead House, Hermanus",
        nameEs: "Birkenhead House, Hermanus",
        description:
          "Une villa de bord de mer perchée sur les falaises d'Hermanus, chaque chambre offrant une vue directe sur l'océan — certaines permettent d'observer les baleines sans quitter son lit.",
        descriptionEn:
          "A clifftop seaside villa in Hermanus, every room with a direct ocean view — some let you watch whales without leaving your bed.",
        descriptionEs:
          "Una villa junto al mar encaramada en los acantilados de Hermanus, con vistas directas al océano desde todas las habitaciones — algunas permiten observar ballenas sin salir de la cama.",
        image: `${R2}/trips/afrique-du-sud-garden-route-hotel-hermanus.jpg`,
      },
    ],
  },
  {
    destinationSlug: "botswana",
    tour: {
      name: "Botswana : Kalahari et Makgadikgadi, le désert autrement",
      nameEn: "Botswana: the Kalahari and Makgadikgadi, the desert differently",
      nameEs: "Botsuana: Kalahari y Makgadikgadi, el desierto de otra manera",
      slug: "botswana-kalahari-makgadikgadi",
      image: `${R2}/tours/botswana-kalahari-makgadikgadi.jpg`,
      images: `${R2}/trips/botswana-kalahari-gallery-1.jpg,${R2}/trips/botswana-kalahari-gallery-2.jpg,${R2}/trips/botswana-kalahari-gallery-3.jpg,${R2}/trips/botswana-kalahari-gallery-4.jpg,${R2}/trips/botswana-kalahari-gallery-5.jpg,${R2}/trips/botswana-kalahari-gallery-6.jpg`,
      tagline: "Bushmen, suricates et nuits étoilées sur le plus grand désert de sel du monde",
      taglineEn: "Bushmen, meerkats, and starlit nights on the world's largest salt pan",
      taglineEs: "Bosquimanos, suricatas y noches estrelladas en el mayor desierto de sal del mundo",
      description:
        "Loin des canaux de l'Okavango, une autre facette du Botswana : le désert du Kalahari et les vastes étendues de sel de Makgadikgadi, où l'horizon se confond avec le ciel. Rencontre avec des communautés San, sortie à pied parmi des colonies de suricates habitués à la présence humaine, et nuit à la belle étoile sur le sel, loin de toute pollution lumineuse.",
      descriptionEn:
        "Far from the channels of the Okavango, another face of Botswana: the Kalahari Desert and the vast salt flats of Makgadikgadi, where the horizon blurs into the sky. Time spent with San communities, a walk among meerkat colonies used to human presence, and a night under the stars out on the pan, far from any light pollution.",
      descriptionEs:
        "Lejos de los canales del Okavango, otra cara de Botsuana: el desierto de Kalahari y las vastas llanuras de sal de Makgadikgadi, donde el horizonte se funde con el cielo. Encuentro con comunidades san, una caminata entre colonias de suricatas acostumbradas a la presencia humana, y una noche a la intemperie sobre la sal, lejos de toda contaminación lumínica.",
      price: 4100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Avr à oct",
      whenLabelEn: "April to Oct",
      whenLabelEs: "Abr a oct",
      bestMonths: "april,may,june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 10,
    },
    sections: [
      {
        heading: "Sur les traces des San du Kalahari",
        headingEn: "Following the San of the Kalahari",
        headingEs: "Tras la pista de los san del Kalahari",
        body:
          "Le voyage débute dans le désert du Kalahari, terre ancestrale du peuple San, l'une des plus anciennes cultures continues au monde. Une marche guidée par des membres de la communauté fait découvrir les techniques de survie transmises depuis des générations : recherche d'eau, plantes médicinales, techniques de chasse traditionnelles. Un moment d'échange rare, loin de toute mise en scène touristique.",
        bodyEn:
          "The trip begins in the Kalahari Desert, ancestral home of the San people, one of the oldest continuous cultures on Earth. A walk guided by community members reveals survival techniques passed down for generations: finding water, medicinal plants, traditional hunting methods. A rare exchange, far from any staged tourist performance.",
        bodyEs:
          "El viaje comienza en el desierto de Kalahari, tierra ancestral del pueblo san, una de las culturas continuas más antiguas del mundo. Una caminata guiada por miembros de la comunidad revela técnicas de supervivencia transmitidas durante generaciones: búsqueda de agua, plantas medicinales, técnicas de caza tradicionales. Un intercambio poco común, lejos de cualquier puesta en escena turística.",
      },
      {
        heading: "Makgadikgadi, le désert de sel",
        headingEn: "Makgadikgadi, the salt desert",
        headingEs: "Makgadikgadi, el desierto de sal",
        body:
          "Direction les pans de Makgadikgadi, vestiges d'un lac préhistorique aujourd'hui asséché, dont l'étendue blanche s'étend à perte de vue. Sortie en quad sur le sel, à la rencontre de colonies de suricates suffisamment habitués aux visiteurs pour grimper sur les épaules en guise de poste d'observation. La nuit, un campement léger est installé en plein cœur du désert : sans aucune lumière artificielle à des kilomètres à la ronde, le ciel étoilé y est parmi les plus spectaculaires d'Afrique australe.",
        bodyEn:
          "On to the Makgadikgadi Pans, the remains of a prehistoric lake now dried out, a white expanse stretching to the horizon. A quad-bike outing across the salt leads to meerkat colonies habituated enough to climb onto visitors' shoulders as a lookout post. At night, a light camp is set up in the heart of the desert: with no artificial light for kilometres around, the starlit sky here is among the most spectacular in southern Africa.",
        bodyEs:
          "Rumbo a las salinas de Makgadikgadi, restos de un lago prehistórico hoy seco, cuya extensión blanca se pierde en el horizonte. Una salida en quad sobre la sal lleva a colonias de suricatas lo bastante habituadas a los visitantes como para subirse a sus hombros a modo de puesto de observación. Por la noche se instala un campamento ligero en pleno corazón del desierto: sin ninguna luz artificial en kilómetros a la redonda, el cielo estrellado aquí es de los más espectaculares de África austral.",
      },
    ],
    hotels: [
      {
        name: "Kalahari San Camp",
        nameEn: "Kalahari San Camp",
        nameEs: "Kalahari San Camp",
        description:
          "Un camp discret en lisière du désert, tentes de toile posées sur des plateformes en bois, pensé pour minimiser l'impact sur cet environnement fragile tout en restant proche des communautés San locales.",
        descriptionEn:
          "A discreet camp on the desert's edge, canvas tents set on wooden platforms, designed to minimise impact on this fragile environment while staying close to the local San communities.",
        descriptionEs:
          "Un campamento discreto al borde del desierto, tiendas de lona sobre plataformas de madera, pensado para minimizar el impacto en este entorno frágil sin dejar de estar cerca de las comunidades san locales.",
        image: `${R2}/trips/botswana-kalahari-hotel-kalahari.jpg`,
      },
      {
        name: "Jack's Camp, Makgadikgadi",
        nameEn: "Jack's Camp, Makgadikgadi",
        nameEs: "Jack's Camp, Makgadikgadi",
        description:
          "Un camp mythique au style rétro-colonial assumé, tentes meublées d'antiquités et de tapis persans en plein désert, référence historique de l'exploration des pans depuis les années 1960.",
        descriptionEn:
          "A legendary camp with an unapologetic retro-colonial style, tents furnished with antiques and Persian rugs in the middle of the desert, a historic reference point for pan exploration since the 1960s.",
        descriptionEs:
          "Un campamento legendario de estilo retro-colonial sin disculpas, tiendas amuebladas con antigüedades y alfombras persas en pleno desierto, referencia histórica de la exploración de las salinas desde los años sesenta.",
        image: `${R2}/trips/botswana-kalahari-hotel-makgadikgadi.jpg`,
      },
    ],
  },
  {
    destinationSlug: "egypte",
    tour: {
      name: "Égypte : la mer Rouge, plongée entre Hurghada et El Gouna",
      nameEn: "Egypt: the Red Sea, Diving between Hurghada and El Gouna",
      nameEs: "Egipto: el mar Rojo, buceo entre Hurghada y El Gouna",
      slug: "egypte-mer-rouge-hurghada",
      image: `${R2}/tours/egypte-mer-rouge-hurghada.jpg`,
      images: `${R2}/trips/egypte-mer-rouge-gallery-1.jpg,${R2}/trips/egypte-mer-rouge-gallery-2.jpg,${R2}/trips/egypte-mer-rouge-gallery-3.jpg,${R2}/trips/egypte-mer-rouge-gallery-4.jpg,${R2}/trips/egypte-mer-rouge-gallery-5.jpg,${R2}/trips/egypte-mer-rouge-gallery-6.jpg`,
      tagline: "Récifs coralliens intacts et épaves légendaires, à quelques mètres du désert",
      taglineEn: "Pristine coral reefs and legendary wrecks, just metres from the desert",
      taglineEs: "Arrecifes de coral intactos y pecios legendarios, a pocos metros del desierto",
      description:
        "Une Égypte balnéaire et sous-marine, loin des sites pharaoniques. La mer Rouge égyptienne compte parmi les meilleurs spots de plongée au monde, avec des récifs coralliens d'une densité rare et des dizaines d'épaves, dont le célèbre Thistlegorm. Entre deux sorties en mer, la ville lagunaire d'El Gouna, entièrement construite autour de canaux, offre une parenthèse plus douce.",
      descriptionEn:
        "A coastal, underwater side of Egypt, far from the pharaonic sites. The Egyptian Red Sea ranks among the world's best diving spots, with unusually dense coral reefs and dozens of wrecks, including the famous Thistlegorm. Between dives, the lagoon town of El Gouna, built entirely around canals, offers a gentler pace.",
      descriptionEs:
        "Un Egipto costero y submarino, lejos de los yacimientos faraónicos. El mar Rojo egipcio se cuenta entre los mejores puntos de buceo del mundo, con arrecifes de coral de una densidad poco común y decenas de pecios, entre ellos el célebre Thistlegorm. Entre inmersión e inmersión, la ciudad lacustre de El Gouna, construida enteramente en torno a canales, ofrece una pausa más apacible.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mars à mai | Sept à nov",
      whenLabelEn: "March to May | Sept to Nov",
      whenLabelEs: "Marzo a mayo | Sept a nov",
      bestMonths: "march,april,may,september,october,november",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 11,
    },
    sections: [
      {
        heading: "Hurghada, porte d'entrée sur la mer Rouge",
        headingEn: "Hurghada, gateway to the Red Sea",
        headingEs: "Hurghada, puerta de entrada al mar Rojo",
        body:
          "Le séjour débute à Hurghada, base historique de la plongée en mer Rouge égyptienne. Les sorties bateau à la journée permettent d'explorer plusieurs sites en une seule excursion : le récif de Giftun, réputé pour ses tortues et ses bancs de poissons-chirurgiens, ou encore l'épave du Thistlegorm, cargo militaire britannique coulé en 1941, aujourd'hui l'une des plongées sur épave les plus réputées au monde.",
        bodyEn:
          "The stay begins in Hurghada, the historic base for diving the Egyptian Red Sea. Day boat trips allow several sites to be explored in a single outing: Giftun Reef, known for its turtles and schools of surgeonfish, or the wreck of the Thistlegorm, a British military cargo ship sunk in 1941, now one of the most celebrated wreck dives in the world.",
        bodyEs:
          "La estancia comienza en Hurghada, base histórica del buceo en el mar Rojo egipcio. Las salidas en barco de día permiten explorar varios puntos en una sola excursión: el arrecife de Giftun, conocido por sus tortugas y bancos de peces cirujano, o el pecio del Thistlegorm, un carguero militar británico hundido en 1941, hoy una de las inmersiones en pecio más célebres del mundo.",
      },
      {
        heading: "El Gouna, la ville aux canaux",
        headingEn: "El Gouna, the town of canals",
        headingEs: "El Gouna, la ciudad de los canales",
        body:
          "Cap ensuite sur El Gouna, à une heure au nord, une ville entièrement conçue autour d'un réseau de lagunes et de canaux, où l'on se déplace parfois en bateau-taxi d'un quartier à l'autre. L'ambiance y est plus détendue qu'à Hurghada, entre marina, spas et plages privées, tout en restant à proximité de récifs tout aussi spectaculaires côté nord de la mer Rouge.",
        bodyEn:
          "Next, El Gouna, an hour to the north, a town designed entirely around a network of lagoons and canals, where a water-taxi sometimes gets you between neighbourhoods faster than a car. The mood is more relaxed than in Hurghada, between the marina, spas, and private beaches, while staying close to reefs just as spectacular on the Red Sea's northern side.",
        bodyEs:
          "A continuación, El Gouna, una hora al norte, una ciudad diseñada enteramente en torno a una red de lagunas y canales, donde a veces un taxi acuático resulta más rápido que un coche para moverse entre barrios. El ambiente es más relajado que en Hurghada, entre la marina, los spas y las playas privadas, sin dejar de estar cerca de arrecifes igual de espectaculares en el lado norte del mar Rojo.",
      },
    ],
    hotels: [
      {
        name: "Sahl Hasheesh Dive Lodge",
        nameEn: "Sahl Hasheesh Dive Lodge",
        nameEs: "Sahl Hasheesh Dive Lodge",
        description:
          "Un hôtel pensé pour les plongeurs, à quelques pas d'un récif accessible directement depuis la plage, avec un centre de plongée intégré et des sorties bateau organisées chaque matin.",
        descriptionEn:
          "A hotel built for divers, steps from a reef accessible directly from the beach, with an in-house dive centre and boat trips organised every morning.",
        descriptionEs:
          "Un hotel pensado para buceadores, a pocos pasos de un arrecife accesible directamente desde la playa, con centro de buceo propio y salidas en barco organizadas cada mañana.",
        image: `${R2}/trips/egypte-mer-rouge-hotel-hurghada.jpg`,
      },
      {
        name: "Lagoon Villas, El Gouna",
        nameEn: "Lagoon Villas, El Gouna",
        nameEs: "Lagoon Villas, El Gouna",
        description:
          "Des villas donnant directement sur un canal privé, chacune avec son propre ponton, dans un cadre résidentiel calme à dix minutes de la marina et de ses restaurants.",
        descriptionEn:
          "Villas opening directly onto a private canal, each with its own jetty, in a quiet residential setting ten minutes from the marina and its restaurants.",
        descriptionEs:
          "Villas con acceso directo a un canal privado, cada una con su propio embarcadero, en un entorno residencial tranquilo a diez minutos de la marina y sus restaurantes.",
        image: `${R2}/trips/egypte-mer-rouge-hotel-elgouna.jpg`,
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
