// Batch 4 — Tanzania, Rwanda, Senegal. New trips bringing each destination to at least 3,
// styled on Black Tomato's real structure (a short number of named-hotel chapters, not an
// exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-africa-4.ts
// Requires scripts/upload-images-africa-4.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "tanzanie",
    tour: {
      name: "Tanzanie : le circuit du Sud, Ruaha et le Nyerere",
      nameEn: "Tanzania: the Southern Circuit, Ruaha and Nyerere",
      nameEs: "Tanzania: el circuito del Sur, Ruaha y Nyerere",
      slug: "tanzanie-circuit-sud",
      image: `${R2}/journeys/tanzanie-circuit-sud-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Les mêmes safaris que le Nord, sans les foules — la Tanzanie que les habitués gardent pour eux",
      taglineEn: "The same safaris as the North, without the crowds — the Tanzania regulars keep to themselves",
      taglineEs: "Los mismos safaris que el Norte, sin las multitudes: la Tanzania que los habituales se guardan para sí",
      description:
        "Loin du Serengeti et de ses véhicules en file, le circuit du Sud tanzanien reste l'un des secrets les mieux gardés du safari africain : le parc de Ruaha, plus grand parc national de Tanzanie, et le Nyerere (ex-Selous), plus vaste réserve giboyeuse d'Afrique, où lions, lycaons et éléphants se croisent sans jamais plus de deux ou trois véhicules sur la même piste.",
      descriptionEn:
        "Far from the Serengeti and its lines of vehicles, Tanzania's Southern Circuit remains one of African safari's best-kept secrets: Ruaha, Tanzania's largest national park, and Nyerere (formerly Selous), Africa's biggest game reserve, where lions, wild dogs, and elephants are encountered with never more than two or three vehicles on the same track.",
      descriptionEs:
        "Lejos del Serengeti y sus filas de vehículos, el circuito del Sur tanzano sigue siendo uno de los secretos mejor guardados del safari africano: el parque de Ruaha, el mayor parque nacional de Tanzania, y el Nyerere (antes Selous), la reserva de caza más extensa de África, donde leones, licaones y elefantes se cruzan sin nunca más de dos o tres vehículos en la misma pista.",
      price: 5100,
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
      order: 24,
    },
    chapters: [
      {
        title: "Ruaha",
        titleEn: "Ruaha",
        titleEs: "Ruaha",
        intro:
          "Premier chapitre dans le parc de Ruaha, le plus grand de Tanzanie, à la croisée des faunes d'Afrique de l'Est et australe. La rivière Great Ruaha, dont le lit s'assèche partiellement en saison sèche, concentre une faune considérable sur ses derniers points d'eau, tandis que les baobabs centenaires qui parsèment le paysage abritent l'une des plus fortes densités de lions de Tanzanie.",
        introEn:
          "The first chapter unfolds in Ruaha National Park, Tanzania's largest, at the crossroads of East and southern African wildlife. The Great Ruaha River, whose bed partially dries out in the dry season, concentrates considerable wildlife around its last remaining waterholes, while the centuries-old baobabs dotting the landscape shelter one of Tanzania's highest densities of lions.",
        introEs:
          "El primer capítulo se desarrolla en el parque de Ruaha, el más grande de Tanzania, en el cruce entre la fauna de África oriental y austral. El río Great Ruaha, cuyo cauce se seca parcialmente en la temporada seca, concentra una fauna considerable en sus últimos puntos de agua, mientras que los baobabs centenarios que salpican el paisaje albergan una de las mayores densidades de leones de Tanzania.",
        galleryImages: `${R2}/journeys/tanzanie-ruaha-gallery1.jpg,${R2}/journeys/tanzanie-ruaha-gallery2.jpg,${R2}/journeys/tanzanie-ruaha-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Safari le long de la Great Ruaha",
            titleEn: "Safari along the Great Ruaha",
            titleEs: "Safari a lo largo del Great Ruaha",
            description:
              "Arrivée par vol interne et premier safari l'après-midi le long de la rivière Great Ruaha, où lions et éléphants se rassemblent autour des dernières poches d'eau de la saison sèche.",
            descriptionEn:
              "Arrival by light aircraft and a first afternoon safari along the Great Ruaha River, where lions and elephants gather around the last remaining water pockets of the dry season.",
            descriptionEs:
              "Llegada en avioneta y primer safari por la tarde a lo largo del río Great Ruaha, donde leones y elefantes se reúnen en torno a los últimos reductos de agua de la temporada seca.",
            image: `${R2}/journeys/tanzanie-ruaha-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les baobabs et les lions de Ruaha",
            titleEn: "The baobabs and lions of Ruaha",
            titleEs: "Los baobabs y los leones de Ruaha",
            description:
              "Journée complète de safari parmi les baobabs centenaires du parc, réputé pour abriter l'une des plus fortes concentrations de lions de Tanzanie, avec une chance réelle d'observer une coalition de mâles.",
            descriptionEn:
              "A full day of safari among the park's centuries-old baobabs, known for hosting one of Tanzania's highest concentrations of lions, with a real chance of spotting a coalition of males.",
            descriptionEs:
              "Día completo de safari entre los baobabs centenarios del parque, conocido por albergar una de las mayores concentraciones de leones de Tanzania, con una posibilidad real de avistar una coalición de machos.",
            image: `${R2}/journeys/tanzanie-ruaha-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le Nyerere",
        titleEn: "Nyerere National Park",
        titleEs: "El Nyerere",
        intro:
          "Vol vers le Nyerere, rebaptisé en hommage au premier président tanzanien mais toujours connu sous son ancien nom de Selous, une réserve grande comme la Suisse où les safaris en bateau sur la rivière Rufiji complètent les sorties en 4x4. C'est l'un des derniers refuges du lycaon, prédateur le plus menacé d'Afrique, et l'une des rares zones où les safaris à pied restent autorisés.",
        introEn:
          "A flight to Nyerere, renamed in tribute to Tanzania's first president but still widely known by its former name, Selous — a reserve the size of Switzerland where boat safaris on the Rufiji River complement 4x4 outings. It's one of the last strongholds of the African wild dog, Africa's most endangered predator, and one of the few areas where walking safaris remain permitted.",
        introEs:
          "Vuelo hacia el Nyerere, renombrado en homenaje al primer presidente tanzano pero todavía conocido ampliamente por su antiguo nombre, Selous, una reserva del tamaño de Suiza donde los safaris en barco por el río Rufiji complementan las salidas en 4x4. Es uno de los últimos refugios del licaón, el depredador más amenazado de África, y una de las pocas zonas donde los safaris a pie siguen permitidos.",
        galleryImages: `${R2}/journeys/tanzanie-nyerere-gallery1.jpg,${R2}/journeys/tanzanie-nyerere-gallery2.jpg,${R2}/journeys/tanzanie-nyerere-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 65,
        days: [
          {
            dayNumber: 1,
            title: "Vol vers le Nyerere et safari en bateau",
            titleEn: "Flight to Nyerere and boat safari",
            titleEs: "Vuelo a Nyerere y safari en barco",
            description:
              "Vol vers le Nyerere, installation au camp en bord de rivière. Safari en bateau sur la Rufiji en fin de journée, à la recherche des hippopotames et des crocodiles du Nil.",
            descriptionEn:
              "A flight to Nyerere, settling into the riverside camp. A late-afternoon boat safari on the Rufiji, looking for hippos and Nile crocodiles.",
            descriptionEs:
              "Vuelo a Nyerere, instalación en el campamento junto al río. Safari en barco por el Rufiji al final de la tarde, en busca de hipopótamos y cocodrilos del Nilo.",
            image: `${R2}/journeys/tanzanie-nyerere-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Safari à pied sur les traces des lycaons",
            titleEn: "Walking safari tracking wild dogs",
            titleEs: "Safari a pie tras la pista de los licaones",
            description:
              "Safari à pied accompagné d'un ranger armé, l'une des rares expériences du genre encore autorisées en Tanzanie, à la recherche des lycaons, le prédateur le plus menacé du continent.",
            descriptionEn:
              "A walking safari accompanied by an armed ranger, one of the few experiences of its kind still permitted in Tanzania, tracking African wild dogs, the continent's most endangered predator.",
            descriptionEs:
              "Safari a pie acompañado de un ranger armado, una de las pocas experiencias de este tipo aún permitidas en Tanzania, en busca de licaones, el depredador más amenazado del continente.",
            image: `${R2}/journeys/tanzanie-nyerere-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "rwanda",
    tour: {
      name: "Rwanda : le lac Kivu et l'Akagera",
      nameEn: "Rwanda: Lake Kivu and Akagera",
      nameEs: "Ruanda: el lago Kivu y el Akagera",
      slug: "rwanda-kivu-akagera",
      image: `${R2}/journeys/rwanda-kivu-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un lac paisible entre les collines, puis un safari de savane avec les Big Five au complet",
      taglineEn: "A peaceful lake between the hills, then a savannah safari with the full Big Five",
      taglineEs: "Un lago apacible entre colinas, y después un safari de sabana con los Big Five al completo",
      description:
        "Une facette inattendue du Rwanda, pays associé avant tout aux volcans et aux gorilles : le lac Kivu, l'un des grands lacs les plus paisibles d'Afrique, bordé de plantations de café et de plages de sable, puis le parc de l'Akagera, savane à l'est du pays où lions et rhinocéros noirs ont été réintroduits, réunissant à nouveau les Big Five sur le sol rwandais.",
      descriptionEn:
        "An unexpected side of Rwanda, a country associated above all with volcanoes and gorillas: Lake Kivu, one of Africa's most peaceful great lakes, lined with coffee plantations and sandy beaches, then Akagera National Park, savannah in the east of the country where lions and black rhinos have been reintroduced, reuniting the full Big Five on Rwandan soil.",
      descriptionEs:
        "Una cara inesperada de Ruanda, un país asociado sobre todo a los volcanes y los gorilas: el lago Kivu, uno de los grandes lagos más apacibles de África, bordeado de plantaciones de café y playas de arena, y después el parque de Akagera, sabana al este del país donde se han reintroducido leones y rinocerontes negros, reuniendo de nuevo a los Big Five en suelo ruandés.",
      price: 4000,
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
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 25,
    },
    chapters: [
      {
        title: "Le lac Kivu",
        titleEn: "Lake Kivu",
        titleEs: "El lago Kivu",
        intro:
          "Premier chapitre au bord du lac Kivu, l'un des grands lacs africains les plus sûrs pour la baignade — aucun crocodile ni hippopotame n'y vit, en raison de niveaux élevés de dioxyde de carbone dissous en profondeur. Les collines environnantes, couvertes de plantations de café et de thé, se découvrent en kayak ou lors d'une croisière au coucher du soleil vers de petites îles habitées par des pêcheurs.",
        introEn:
          "The first chapter unfolds on the shores of Lake Kivu, one of Africa's great lakes safe for swimming — no crocodiles or hippos live there, due to high levels of dissolved carbon dioxide at depth. The surrounding hills, covered in coffee and tea plantations, are explored by kayak or on a sunset cruise to small islands inhabited by fishermen.",
        introEs:
          "El primer capítulo se desarrolla a orillas del lago Kivu, uno de los grandes lagos africanos seguros para nadar, ya que no viven en él cocodrilos ni hipopótamos, debido a los altos niveles de dióxido de carbono disuelto en profundidad. Las colinas circundantes, cubiertas de plantaciones de café y té, se descubren en kayak o en un crucero al atardecer hacia pequeñas islas habitadas por pescadores.",
        galleryImages: `${R2}/journeys/rwanda-kivu-gallery1.jpg,${R2}/journeys/rwanda-kivu-gallery2.jpg,${R2}/journeys/rwanda-kivu-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Kayak sur le lac Kivu",
            titleEn: "Kayaking on Lake Kivu",
            titleEs: "Kayak en el lago Kivu",
            description:
              "Sortie en kayak le long des rives du lac Kivu, entre plantations de café en terrasses et petits villages de pêcheurs, avec une eau suffisamment sûre pour la baignade en fin de parcours.",
            descriptionEn:
              "A kayak outing along the shores of Lake Kivu, between terraced coffee plantations and small fishing villages, with water safe enough for a swim at the end of the route.",
            descriptionEs:
              "Salida en kayak a lo largo de las orillas del lago Kivu, entre plantaciones de café en terrazas y pequeños pueblos de pescadores, con agua lo bastante segura para bañarse al final del recorrido.",
            image: `${R2}/journeys/rwanda-kivu-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Croisière au coucher du soleil",
            titleEn: "Sunset cruise",
            titleEs: "Crucero al atardecer",
            description:
              "Croisière en fin de journée sur le lac Kivu vers de petites îles habitées, avec un arrêt pour observer les pêcheurs préparer leurs filets pour la pêche nocturne, une tradition locale accompagnée de chants.",
            descriptionEn:
              "A late-afternoon cruise on Lake Kivu to small inhabited islands, with a stop to watch fishermen preparing their nets for the night's fishing, a local tradition accompanied by singing.",
            descriptionEs:
              "Crucero al final de la tarde por el lago Kivu hacia pequeñas islas habitadas, con una parada para observar a los pescadores preparar sus redes para la pesca nocturna, una tradición local acompañada de cantos.",
            image: `${R2}/journeys/rwanda-kivu-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le parc de l'Akagera",
        titleEn: "Akagera National Park",
        titleEs: "El parque de Akagera",
        intro:
          "Direction l'est et le parc national de l'Akagera, dont la restauration écologique menée par African Parks depuis 2010 est considérée comme un modèle sur le continent : lions réintroduits en 2015, rhinocéros noirs en 2017, permettant de réunir à nouveau les Big Five. Le parc conserve aussi la plus grande population d'hippopotames et de crocodiles du Rwanda le long du lac Ihema.",
        introEn:
          "East to Akagera National Park, whose ecological restoration led by African Parks since 2010 is considered a model on the continent: lions reintroduced in 2015, black rhinos in 2017, once again reuniting the Big Five. The park also holds Rwanda's largest population of hippos and crocodiles along Lake Ihema.",
        introEs:
          "Rumbo al este y al parque nacional de Akagera, cuya restauración ecológica liderada por African Parks desde 2010 se considera un modelo en el continente: leones reintroducidos en 2015, rinocerontes negros en 2017, reuniendo de nuevo a los Big Five. El parque también alberga la mayor población de hipopótamos y cocodrilos de Ruanda a lo largo del lago Ihema.",
        galleryImages: `${R2}/journeys/rwanda-akagera-gallery1.jpg,${R2}/journeys/rwanda-akagera-gallery2.jpg,${R2}/journeys/rwanda-akagera-gallery3.jpg`,
        mapMarkerX: 80,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Safari à la recherche des Big Five",
            titleEn: "Big Five safari",
            titleEs: "Safari en busca de los Big Five",
            description:
              "Transfert vers l'Akagera et premier safari en 4x4 à la recherche des Big Five, réunis à nouveau grâce au programme de réintroduction mené depuis 2015.",
            descriptionEn:
              "A transfer to Akagera and a first 4x4 safari in search of the Big Five, reunited thanks to the reintroduction programme running since 2015.",
            descriptionEs:
              "Traslado a Akagera y primer safari en 4x4 en busca de los Big Five, reunidos de nuevo gracias al programa de reintroducción en marcha desde 2015.",
            image: `${R2}/journeys/rwanda-akagera-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Safari en bateau sur le lac Ihema",
            titleEn: "Boat safari on Lake Ihema",
            titleEs: "Safari en barco por el lago Ihema",
            description:
              "Safari en bateau sur le lac Ihema, qui abrite la plus forte concentration d'hippopotames et de crocodiles du Rwanda, avant un dernier safari en 4x4 en fin de journée.",
            descriptionEn:
              "A boat safari on Lake Ihema, home to Rwanda's highest concentration of hippos and crocodiles, before a final 4x4 safari at the end of the day.",
            descriptionEs:
              "Safari en barco por el lago Ihema, que alberga la mayor concentración de hipopótamos y cocodrilos de Ruanda, antes de un último safari en 4x4 al final del día.",
            image: `${R2}/journeys/rwanda-akagera-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "senegal",
    tour: {
      name: "Sénégal : Saint-Louis et le parc du Djoudj",
      nameEn: "Senegal: Saint-Louis and Djoudj National Park",
      nameEs: "Senegal: Saint-Louis y el parque del Djoudj",
      slug: "senegal-saint-louis-djoudj",
      image: `${R2}/journeys/senegal-saint-louis-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une ancienne capitale coloniale classée à l'UNESCO, puis trois millions d'oiseaux migrateurs",
      taglineEn: "A former UNESCO-listed colonial capital, then three million migratory birds",
      taglineEs: "Una antigua capital colonial declarada por la UNESCO, y después tres millones de aves migratorias",
      description:
        "Le nord du Sénégal, entre histoire coloniale et nature sauvage : Saint-Louis, première capitale de l'Afrique-Occidentale française, classée à l'UNESCO pour son architecture coloniale et ses façades colorées, puis le parc national des oiseaux du Djoudj, troisième plus grande réserve ornithologique au monde, où plus de trois millions d'oiseaux migrateurs hivernent chaque année.",
      descriptionEn:
        "Northern Senegal, between colonial history and untamed nature: Saint-Louis, the former capital of French West Africa, UNESCO-listed for its colonial architecture and colourful façades, then Djoudj National Bird Sanctuary, the world's third-largest ornithological reserve, where over three million migratory birds winter every year.",
      descriptionEs:
        "El norte de Senegal, entre historia colonial y naturaleza salvaje: Saint-Louis, antigua capital del África Occidental Francesa, declarada por la UNESCO por su arquitectura colonial y sus fachadas de colores, y después el parque nacional de aves del Djoudj, la tercera reserva ornitológica más grande del mundo, donde más de tres millones de aves migratorias invernan cada año.",
      price: 2800,
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
      feeling: "distraction",
      travelerTypes: "couples,family,solo",
      maxGuests: 6,
      featured: false,
      order: 26,
    },
    chapters: [
      {
        title: "Saint-Louis",
        titleEn: "Saint-Louis",
        titleEs: "Saint-Louis",
        intro:
          "Premier chapitre à Saint-Louis, fondée en 1659 sur une île du fleuve Sénégal, première capitale de l'Afrique-Occidentale française et aujourd'hui classée au patrimoine mondial de l'UNESCO pour son plan urbain et son architecture coloniale intacte. Les calèches remplacent encore les voitures dans certaines rues de l'île, tandis que le quartier de pêcheurs de Guet Ndar, l'un des plus densément peuplés d'Afrique, anime le front de mer de ses pirogues colorées.",
        introEn:
          "The first chapter unfolds in Saint-Louis, founded in 1659 on an island in the Senegal River, the former capital of French West Africa and today a UNESCO World Heritage Site for its urban plan and intact colonial architecture. Horse-drawn carriages still outnumber cars on some of the island's streets, while the fishing quarter of Guet Ndar, one of the most densely populated in Africa, animates the seafront with its colourful pirogues.",
        introEs:
          "El primer capítulo se desarrolla en Saint-Louis, fundada en 1659 en una isla del río Senegal, antigua capital del África Occidental Francesa y hoy declarada Patrimonio Mundial de la UNESCO por su trazado urbano y su arquitectura colonial intacta. Los coches de caballos todavía superan a los automóviles en algunas calles de la isla, mientras que el barrio pesquero de Guet Ndar, uno de los más densamente poblados de África, anima el frente marítimo con sus coloridas piraguas.",
        galleryImages: `${R2}/journeys/senegal-saint-louis-gallery1.jpg,${R2}/journeys/senegal-saint-louis-gallery2.jpg,${R2}/journeys/senegal-saint-louis-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "L'île et l'architecture coloniale",
            titleEn: "The island and its colonial architecture",
            titleEs: "La isla y su arquitectura colonial",
            description:
              "Visite à pied de l'île de Saint-Louis, ses façades colorées et son pont Faidherbe, ouvrage métallique du XIXe siècle attribué à l'atelier d'Eiffel, avec un tour en calèche pour prendre la mesure de la ville.",
            descriptionEn:
              "A walking tour of Saint-Louis Island, its colourful façades, and the Faidherbe Bridge, a 19th-century metal structure attributed to the Eiffel workshop, with a horse-drawn carriage ride to take the city's measure.",
            descriptionEs:
              "Recorrido a pie por la isla de Saint-Louis, sus fachadas de colores y el puente Faidherbe, una estructura metálica del siglo XIX atribuida al taller de Eiffel, con un paseo en calesa para tomarle el pulso a la ciudad.",
            image: `${R2}/journeys/senegal-saint-louis-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Guet Ndar et le fleuve Sénégal",
            titleEn: "Guet Ndar and the Senegal River",
            titleEs: "Guet Ndar y el río Senegal",
            description:
              "Matinée dans le quartier de pêcheurs de Guet Ndar, l'un des plus densément peuplés d'Afrique, à observer le retour des pirogues colorées chargées de la pêche du jour. L'après-midi, croisière sur le fleuve Sénégal jusqu'à la Langue de Barbarie.",
            descriptionEn:
              "A morning in the Guet Ndar fishing quarter, one of the most densely populated in Africa, watching colourful pirogues return laden with the day's catch. In the afternoon, a cruise on the Senegal River to the Langue de Barbarie sandspit.",
            descriptionEs:
              "Mañana en el barrio pesquero de Guet Ndar, uno de los más densamente poblados de África, observando el regreso de las coloridas piraguas cargadas con la pesca del día. Por la tarde, crucero por el río Senegal hasta la Langue de Barbarie.",
            image: `${R2}/journeys/senegal-saint-louis-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le parc national des oiseaux du Djoudj",
        titleEn: "Djoudj National Bird Sanctuary",
        titleEs: "El parque nacional de aves del Djoudj",
        intro:
          "Direction le parc national des oiseaux du Djoudj, classé à l'UNESCO et troisième réserve ornithologique mondiale, où pélicans blancs, flamants roses, cormorans et hérons se comptent par millions entre novembre et mars. Une sortie en pirogue au lever du soleil permet d'approcher au plus près les colonies de pélicans nichant sur les îlots du parc, l'un des spectacles ornithologiques les plus denses au monde.",
        introEn:
          "On to Djoudj National Bird Sanctuary, UNESCO-listed and the world's third-largest ornithological reserve, where white pelicans, pink flamingos, cormorants, and herons number in the millions between November and March. A sunrise pirogue outing allows a close approach to pelican colonies nesting on the park's islets, one of the densest birdwatching spectacles on Earth.",
        introEs:
          "Rumbo al parque nacional de aves del Djoudj, declarado por la UNESCO y tercera reserva ornitológica del mundo, donde pelícanos blancos, flamencos rosados, cormoranes y garzas se cuentan por millones entre noviembre y marzo. Una salida en piragua al amanecer permite acercarse a las colonias de pelícanos que anidan en los islotes del parque, uno de los espectáculos ornitológicos más densos del mundo.",
        galleryImages: `${R2}/journeys/senegal-djoudj-gallery1.jpg,${R2}/journeys/senegal-djoudj-gallery2.jpg,${R2}/journeys/senegal-djoudj-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Sortie en pirogue au lever du soleil",
            titleEn: "Sunrise pirogue outing",
            titleEs: "Salida en piragua al amanecer",
            description:
              "Transfert vers le parc du Djoudj et sortie en pirogue dès le lever du soleil pour approcher les colonies de pélicans blancs nichant sur les îlots, entourés de flamants roses et de cormorans.",
            descriptionEn:
              "A transfer to Djoudj National Park and a sunrise pirogue outing to approach the white pelican colonies nesting on the islets, surrounded by pink flamingos and cormorants.",
            descriptionEs:
              "Traslado al parque del Djoudj y salida en piragua al amanecer para acercarse a las colonias de pelícanos blancos que anidan en los islotes, rodeados de flamencos rosados y cormoranes.",
            image: `${R2}/journeys/senegal-djoudj-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Observation ornithologique et retour",
            titleEn: "Birdwatching and return",
            titleEs: "Observación ornitológica y regreso",
            description:
              "Matinée d'observation ornithologique guidée à travers les différents habitats du parc, entre vasières, roselières et plans d'eau, avant le retour vers Dakar en fin de journée.",
            descriptionEn:
              "A morning of guided birdwatching across the park's different habitats, between mudflats, reed beds, and open water, before the return to Dakar at the end of the day.",
            descriptionEs:
              "Mañana de observación ornitológica guiada por los distintos hábitats del parque, entre marismas, cañaverales y láminas de agua, antes del regreso a Dakar al final del día.",
            image: `${R2}/journeys/senegal-djoudj-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "tanzanie",
    tour: {
      name: "Tanzanie : l'ascension du Kilimandjaro, le toit de l'Afrique",
      nameEn: "Tanzania: Climbing Kilimanjaro, the Roof of Africa",
      nameEs: "Tanzania: la ascensión al Kilimanjaro, el techo de África",
      slug: "tanzanie-kilimandjaro",
      image: `${R2}/tours/tanzanie-kilimandjaro.jpg`,
      images: `${R2}/trips/tanzanie-kilimandjaro-gallery-1.jpg,${R2}/trips/tanzanie-kilimandjaro-gallery-2.jpg,${R2}/trips/tanzanie-kilimandjaro-gallery-3.jpg,${R2}/trips/tanzanie-kilimandjaro-gallery-4.jpg,${R2}/trips/tanzanie-kilimandjaro-gallery-5.jpg,${R2}/trips/tanzanie-kilimandjaro-gallery-6.jpg`,
      tagline: "Cinq écosystèmes traversés en une semaine, jusqu'au sommet du plus haut sommet libre du monde",
      taglineEn: "Five ecosystems crossed in one week, to the summit of the world's tallest free-standing mountain",
      taglineEs: "Cinco ecosistemas atravesados en una semana, hasta la cima de la montaña independiente más alta del mundo",
      description:
        "L'ascension du Kilimandjaro, point culminant de l'Afrique à 5895 mètres, ne nécessite aucune expérience technique d'alpinisme mais traverse cinq écosystèmes en une semaine : forêt tropicale, lande, désert alpin et enfin glaciers sommitaux. La voie Machame, la plus scénique, est privilégiée pour son taux de réussite élevé et son acclimatation progressive.",
      descriptionEn:
        "The ascent of Kilimanjaro, Africa's highest point at 5,895 metres, requires no technical climbing experience but crosses five ecosystems in a single week: rainforest, moorland, alpine desert, and finally summit glaciers. The Machame Route, the most scenic, is favoured for its high success rate and gradual acclimatisation.",
      descriptionEs:
        "La ascensión al Kilimanjaro, el punto más alto de África con 5895 metros, no requiere experiencia técnica de alpinismo pero atraviesa cinco ecosistemas en una semana: selva tropical, páramo, desierto alpino y finalmente glaciares en la cumbre. Se privilegia la ruta Machame, la más escénica, por su alta tasa de éxito y su aclimatación progresiva.",
      price: 3800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Jan-fév | Juin à oct",
      whenLabelEn: "Jan-Feb | June to Oct",
      whenLabelEs: "Ene-feb | jun a oct",
      bestMonths: "january,february,june,july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 27,
    },
    sections: [
      {
        heading: "La voie Machame, à travers cinq écosystèmes",
        headingEn: "The Machame Route, through five ecosystems",
        headingEs: "La ruta Machame, a través de cinco ecosistemas",
        body:
          "L'ascension débute dans la forêt tropicale humide, où colobes et turacos accompagnent les premiers pas, avant de traverser la lande d'altitude puis le désert alpin, paysage lunaire de rochers volcaniques où la végétation disparaît presque totalement. Six à sept jours de marche, avec des étapes courtes qui privilégient l'acclimatation sur la vitesse — la clé d'un sommet réussi à cette altitude.",
        bodyEn:
          "The climb begins in humid rainforest, where colobus monkeys and turacos accompany the first steps, before crossing high-altitude moorland and then alpine desert, a lunar landscape of volcanic rock where vegetation nearly disappears entirely. Six to seven days of walking, with short daily stages that prioritise acclimatisation over speed — the key to a successful summit at this altitude.",
        bodyEs:
          "La ascensión comienza en la selva tropical húmeda, donde colobos y turacos acompañan los primeros pasos, antes de atravesar el páramo de altitud y después el desierto alpino, un paisaje lunar de rocas volcánicas donde la vegetación casi desaparece por completo. Seis o siete días de caminata, con etapas cortas que priorizan la aclimatación sobre la velocidad, la clave de una cumbre lograda a esta altitud.",
      },
      {
        heading: "Uhuru Peak, au lever du soleil",
        headingEn: "Uhuru Peak, at sunrise",
        headingEs: "Uhuru Peak, al amanecer",
        body:
          "L'assaut final débute au milieu de la nuit depuis le camp de Barafu, pour atteindre Uhuru Peak, le point culminant du Kilimandjaro, au lever du soleil — le moment où les glaciers sommitaux, en recul rapide, s'embrasent de lumière dorée. La descente s'effectue le jour même par un itinéraire différent, offrant une vue continue sur la plaine du Serengeti au loin.",
        bodyEn:
          "The final push begins in the middle of the night from Barafu Camp, to reach Uhuru Peak, Kilimanjaro's highest point, at sunrise — the moment when the rapidly retreating summit glaciers catch fire with golden light. The descent takes place the same day via a different route, offering a continuous view over the Serengeti plain in the distance.",
        bodyEs:
          "El ataque final comienza en plena noche desde el campamento de Barafu, para alcanzar el Uhuru Peak, el punto más alto del Kilimanjaro, al amanecer, el momento en que los glaciares de la cumbre, en rápido retroceso, se encienden con luz dorada. El descenso se realiza el mismo día por una ruta diferente, con vistas continuas a la llanura del Serengeti a lo lejos.",
      },
    ],
    hotels: [
      {
        name: "Machame Gate Lodge",
        nameEn: "Machame Gate Lodge",
        nameEs: "Machame Gate Lodge",
        description:
          "Un lodge confortable au pied du parc, dernière nuit avec eau chaude et lit avant plusieurs jours de camping en altitude, briefing complet avec l'équipe de guides et porteurs.",
        descriptionEn:
          "A comfortable lodge at the foot of the park, the last night with hot water and a bed before several days of high-altitude camping, a full briefing with the guide and porter team.",
        descriptionEs:
          "Un lodge cómodo al pie del parque, última noche con agua caliente y cama antes de varios días de acampada en altitud, briefing completo con el equipo de guías y porteadores.",
        image: `${R2}/trips/tanzanie-kilimandjaro-hotel-machame.jpg`,
      },
      {
        name: "Kilimanjaro Wonders Hotel, Moshi",
        nameEn: "Kilimanjaro Wonders Hotel, Moshi",
        nameEs: "Kilimanjaro Wonders Hotel, Moshi",
        description:
          "Un hôtel au pied de la montagne à Moshi, piscine et massages bienvenus au retour de l'ascension, vue directe sur le sommet enfin conquis depuis la terrasse.",
        descriptionEn:
          "A hotel at the mountain's foot in Moshi, a pool and welcome massages on return from the climb, a direct view of the now-conquered summit from the terrace.",
        descriptionEs:
          "Un hotel al pie de la montaña en Moshi, piscina y masajes bienvenidos al regreso de la ascensión, vista directa a la cumbre ya conquistada desde la terraza.",
        image: `${R2}/trips/tanzanie-kilimandjaro-hotel-moshi.jpg`,
      },
    ],
  },
  {
    destinationSlug: "rwanda",
    tour: {
      name: "Rwanda : la forêt de Nyungwe, sur les traces des chimpanzés",
      nameEn: "Rwanda: Nyungwe Forest, Tracking Chimpanzees",
      nameEs: "Ruanda: el bosque de Nyungwe, tras la pista de los chimpancés",
      slug: "rwanda-nyungwe",
      image: `${R2}/tours/rwanda-nyungwe.jpg`,
      images: `${R2}/trips/rwanda-nyungwe-gallery-1.jpg,${R2}/trips/rwanda-nyungwe-gallery-2.jpg,${R2}/trips/rwanda-nyungwe-gallery-3.jpg,${R2}/trips/rwanda-nyungwe-gallery-4.jpg,${R2}/trips/rwanda-nyungwe-gallery-5.jpg,${R2}/trips/rwanda-nyungwe-gallery-6.jpg`,
      tagline: "L'une des plus anciennes forêts tropicales d'Afrique, et une marche suspendue à quarante mètres de haut",
      taglineEn: "One of Africa's oldest rainforests, and a walkway suspended forty metres up",
      taglineEs: "Uno de los bosques tropicales más antiguos de África, y un paseo suspendido a cuarenta metros de altura",
      description:
        "La forêt de Nyungwe, l'une des plus anciennes d'Afrique et véritable château d'eau de la région des Grands Lacs, abrite treize espèces de primates dont des communautés de chimpanzés habituées à la présence humaine. Le parc offre aussi le seul pont suspendu en canopée d'Afrique de l'Est, à quarante mètres au-dessus de la forêt.",
      descriptionEn:
        "Nyungwe Forest, one of Africa's oldest and a true water tower for the Great Lakes region, is home to thirteen primate species including chimpanzee communities habituated to human presence. The park also offers East Africa's only canopy suspension bridge, forty metres above the forest floor.",
      descriptionEs:
        "El bosque de Nyungwe, uno de los más antiguos de África y auténtica torre de agua de la región de los Grandes Lagos, alberga trece especies de primates, entre ellas comunidades de chimpancés habituadas a la presencia humana. El parque ofrece también el único puente colgante en el dosel de África Oriental, a cuarenta metros sobre el bosque.",
      price: 3600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Juin à août | Déc à fév",
      whenLabelEn: "June to Aug | Dec to Feb",
      whenLabelEs: "Jun a ago | dic a feb",
      bestMonths: "june,july,august,december,january,february",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 28,
    },
    sections: [
      {
        heading: "Le trekking des chimpanzés",
        headingEn: "Chimpanzee trekking",
        headingEs: "El trekking de los chimpancés",
        body:
          "Le trekking débute avant l'aube pour rejoindre la communauté de chimpanzés là où elle a passé la nuit, avant que le groupe ne se disperse pour la journée dans la canopée. Contrairement aux gorilles, les chimpanzés se déplacent rapidement et bruyamment dans les arbres, rendant chaque rencontre différente — parfois une heure de marche suffit, parfois la journée entière y passe.",
        bodyEn:
          "The trek begins before dawn to reach the chimpanzee community where it spent the night, before the group disperses into the canopy for the day. Unlike gorillas, chimpanzees move quickly and noisily through the trees, making every encounter different — sometimes an hour's walk is enough, sometimes it takes the whole day.",
        bodyEs:
          "El trekking comienza antes del amanecer para llegar hasta la comunidad de chimpancés donde pasó la noche, antes de que el grupo se disperse por el dosel durante el día. A diferencia de los gorilas, los chimpancés se desplazan rápida y ruidosamente entre los árboles, haciendo que cada encuentro sea distinto: a veces basta una hora de camino, a veces se necesita el día entero.",
      },
      {
        heading: "Le pont suspendu et la piste des cascades",
        headingEn: "The canopy walkway and waterfall trail",
        headingEs: "El puente colgante y la ruta de las cascadas",
        body:
          "Le pont suspendu de Nyungwe, composé de trois plateformes reliées par des passerelles métalliques, offre une perspective rare sur la canopée depuis quarante mètres de hauteur, avec une vue portant jusqu'aux volcans Virunga par temps clair. La piste des cascades, plus tranquille, serpente à travers une forêt primaire ponctuée de chutes d'eau et d'orchidées sauvages.",
        bodyEn:
          "Nyungwe's canopy walkway, made up of three platforms linked by metal footbridges, offers a rare perspective on the canopy from forty metres up, with views reaching as far as the Virunga volcanoes on a clear day. The quieter waterfall trail winds through primary forest dotted with waterfalls and wild orchids.",
        bodyEs:
          "El puente colgante de Nyungwe, formado por tres plataformas unidas por pasarelas metálicas, ofrece una perspectiva poco común del dosel desde cuarenta metros de altura, con vistas que alcanzan los volcanes Virunga en días despejados. La ruta de las cascadas, más tranquila, serpentea por un bosque primario salpicado de cascadas y orquídeas silvestres.",
      },
    ],
    hotels: [
      {
        name: "Nyungwe Forest Lodge",
        nameEn: "Nyungwe Forest Lodge",
        nameEs: "Nyungwe Forest Lodge",
        description:
          "Un lodge entouré d'une plantation de thé en activité, chambres avec vue sur la canopée, spa utilisant des huiles essentielles produites localement à partir des plantes de la forêt.",
        descriptionEn:
          "A lodge surrounded by a working tea plantation, rooms with canopy views, a spa using essential oils produced locally from the forest's own plants.",
        descriptionEs:
          "Un lodge rodeado de una plantación de té en activo, habitaciones con vistas al dosel, spa que utiliza aceites esenciales producidos localmente a partir de las plantas del bosque.",
        image: `${R2}/trips/rwanda-nyungwe-hotel-lodge.jpg`,
      },
      {
        name: "Gisakura Guest House",
        nameEn: "Gisakura Guest House",
        nameEs: "Gisakura Guest House",
        description:
          "Une option plus simple et conviviale gérée par l'office du tourisme rwandais, à deux pas de l'entrée du parc, idéale pour un départ matinal vers le trekking des chimpanzés.",
        descriptionEn:
          "A simpler, friendly option run by the Rwandan tourism board, steps from the park entrance, ideal for an early departure to chimpanzee trekking.",
        descriptionEs:
          "Una opción más sencilla y acogedora gestionada por la oficina de turismo ruandesa, a pocos pasos de la entrada del parque, ideal para una salida matutina hacia el trekking de los chimpancés.",
        image: `${R2}/trips/rwanda-nyungwe-hotel-gisakura.jpg`,
      },
    ],
  },
  {
    destinationSlug: "senegal",
    tour: {
      name: "Sénégal : la Casamance, l'Afrique verte",
      nameEn: "Senegal: Casamance, Green Africa",
      nameEs: "Senegal: la Casamance, el África verde",
      slug: "senegal-casamance",
      image: `${R2}/tours/senegal-casamance.jpg`,
      images: `${R2}/trips/senegal-casamance-gallery-1.jpg,${R2}/trips/senegal-casamance-gallery-2.jpg,${R2}/trips/senegal-casamance-gallery-3.jpg,${R2}/trips/senegal-casamance-gallery-4.jpg,${R2}/trips/senegal-casamance-gallery-5.jpg,${R2}/trips/senegal-casamance-gallery-6.jpg`,
      tagline: "Mangroves infinies, cases à impluvium et une culture diola qui n'a rien à voir avec Dakar",
      taglineEn: "Endless mangroves, impluvium huts, and a Diola culture worlds apart from Dakar",
      taglineEs: "Manglares infinitos, chozas de impluvio y una cultura diola muy distinta de la de Dakar",
      description:
        "Séparée du reste du Sénégal par la Gambie, la Casamance forme une région à part, surnommée « l'Afrique verte » pour ses paysages luxuriants de mangroves, rizières et palmeraies, aux antipodes du Sahel sénégalais. Le pays diola, avec ses cases à impluvium traditionnelles et ses cérémonies animistes toujours vivantes, offre l'un des visages les plus authentiques d'Afrique de l'Ouest.",
      descriptionEn:
        "Separated from the rest of Senegal by the Gambia, Casamance forms a region apart, nicknamed \"green Africa\" for its lush landscapes of mangroves, rice paddies, and palm groves, worlds away from the Senegalese Sahel. Diola country, with its traditional impluvium huts and still-living animist ceremonies, offers one of the most authentic faces of West Africa.",
      descriptionEs:
        "Separada del resto de Senegal por Gambia, la Casamance forma una región aparte, apodada el «África verde» por sus exuberantes paisajes de manglares, arrozales y palmerales, en las antípodas del Sahel senegalés. El país diola, con sus tradicionales chozas de impluvio y sus ceremonias animistas todavía vivas, ofrece uno de los rostros más auténticos de África Occidental.",
      price: 2400,
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
      feeling: "contentment",
      travelerTypes: "couples,family,solo",
      maxGuests: 6,
      featured: false,
      order: 29,
    },
    sections: [
      {
        heading: "Les bolongs et la mangrove",
        headingEn: "The bolongs and the mangrove",
        headingEs: "Los bolongs y el manglar",
        body:
          "Exploration en pirogue traditionnelle des bolongs, chenaux d'eau saumâtre serpentant à travers l'une des plus vastes mangroves d'Afrique de l'Ouest. Les villages de pêcheurs qui la bordent vivent au rythme des marées, la récolte des huîtres se faisant directement sur les racines des palétuviers.",
        bodyEn:
          "An exploration by traditional pirogue of the bolongs, brackish-water channels winding through one of West Africa's largest mangrove forests. The fishing villages that line them live by the rhythm of the tides, oysters harvested directly from the mangrove roots.",
        bodyEs:
          "Exploración en piragua tradicional de los bolongs, canales de agua salobre que serpentean por uno de los manglares más extensos de África Occidental. Los pueblos de pescadores que lo bordean viven al ritmo de las mareas, con la recolección de ostras directamente en las raíces de los mangles.",
      },
      {
        heading: "Villages diola et cases à impluvium",
        headingEn: "Diola villages and impluvium huts",
        headingEs: "Poblados diola y chozas de impluvio",
        body:
          "Visite de villages diola construits autour de cases à impluvium, architecture circulaire unique qui recueille l'eau de pluie en son centre. La société diola, restée largement animiste malgré l'influence de l'islam et du christianisme, organise encore aujourd'hui des cérémonies rituelles autour des bois sacrés, dont l'accès reste réservé aux initiés.",
        bodyEn:
          "A visit to Diola villages built around impluvium huts, a unique circular architecture that collects rainwater at its centre. Diola society, which has remained largely animist despite the influence of Islam and Christianity, still holds ritual ceremonies around sacred groves today, access to which remains reserved for the initiated.",
        bodyEs:
          "Visita a poblados diola construidos en torno a chozas de impluvio, una arquitectura circular única que recoge el agua de lluvia en su centro. La sociedad diola, que se ha mantenido en gran parte animista a pesar de la influencia del islam y el cristianismo, todavía celebra hoy ceremonias rituales en torno a bosques sagrados, cuyo acceso sigue reservado a los iniciados.",
      },
    ],
    hotels: [
      {
        name: "Casamance Lodge, Carabane",
        nameEn: "Casamance Lodge, Carabane",
        nameEs: "Casamance Lodge, Carabane",
        description:
          "Un lodge sur l'île de Carabane, ancien comptoir colonial à l'embouchure du fleuve Casamance, cases traditionnelles rénovées et accès direct aux plages désertes de l'île.",
        descriptionEn:
          "A lodge on Carabane Island, a former colonial trading post at the mouth of the Casamance River, renovated traditional huts with direct access to the island's deserted beaches.",
        descriptionEs:
          "Un lodge en la isla de Carabane, antiguo enclave colonial en la desembocadura del río Casamance, cabañas tradicionales renovadas con acceso directo a las playas desiertas de la isla.",
        image: `${R2}/trips/senegal-casamance-hotel-carabane.jpg`,
      },
      {
        name: "Le Bouhannier, Cap Skirring",
        nameEn: "Le Bouhannier, Cap Skirring",
        nameEs: "Le Bouhannier, Cap Skirring",
        description:
          "Un établissement en bord de plage à Cap Skirring, chambres simples entourées de cocotiers, restaurant servant une cuisine casamançaise généreuse en fruits de mer.",
        descriptionEn:
          "A beachfront property in Cap Skirring, simple rooms surrounded by coconut palms, a restaurant serving generous Casamance cuisine rich in seafood.",
        descriptionEs:
          "Un establecimiento frente a la playa en Cap Skirring, habitaciones sencillas rodeadas de cocoteros, restaurante que sirve una generosa cocina casamancesa rica en mariscos.",
        image: `${R2}/trips/senegal-casamance-hotel-bouhannier.jpg`,
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
