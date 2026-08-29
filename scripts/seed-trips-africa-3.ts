// Batch 3 — Namibia, Mozambique, Malawi. New trips bringing each destination to at least 3,
// styled on Black Tomato's real structure (a short number of named-hotel chapters, not an
// exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-africa-3.ts
// Requires scripts/upload-images-africa-3.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "namibie",
    tour: {
      name: "Namibie : la bande de Caprivi, le pays de l'eau",
      nameEn: "Namibia: the Caprivi Strip, the Land of Water",
      nameEs: "Namibia: la franja de Caprivi, el país del agua",
      slug: "namibie-caprivi",
      image: `${R2}/journeys/namibie-caprivi-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Hippopotames, éléphants et cinq fleuves, dans la Namibie la plus verte et la moins connue",
      taglineEn: "Hippos, elephants, and five rivers, in Namibia's greenest and least-known corner",
      taglineEs: "Hipopótamos, elefantes y cinco ríos, en la Namibia más verde y menos conocida",
      description:
        "À l'opposé du désert namibien, la région de Zambèzi (l'ex-bande de Caprivi), fine bande de terre coincée entre quatre pays, traversée par cinq fleuves. Une Namibie verte et aquatique, peuplée d'hippopotames et de troupeaux d'éléphants qui migrent librement entre le Botswana et la Namibie au fil des saisons.",
      descriptionEn:
        "The opposite of the Namibian desert: the Zambezi Region (the former Caprivi Strip), a narrow strip of land wedged between four countries, crossed by five rivers. A green, water-rich Namibia, home to hippos and elephant herds that migrate freely between Botswana and Namibia with the seasons.",
      descriptionEs:
        "Lo opuesto al desierto namibio: la región de Zambeze (la antigua franja de Caprivi), una estrecha franja de tierra encajada entre cuatro países, atravesada por cinco ríos. Una Namibia verde y acuática, poblada de hipopótamos y manadas de elefantes que migran libremente entre Botsuana y Namibia según la estación.",
      price: 4600,
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
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 18,
    },
    chapters: [
      {
        title: "Mudumu et la rivière Kwando",
        titleEn: "Mudumu and the Kwando River",
        titleEs: "Mudumu y el río Kwando",
        intro:
          "Premier chapitre le long de la rivière Kwando, à la lisière du parc national de Mudumu, corridor de migration emprunté par des milliers d'éléphants entre le Botswana et la Namibie selon les saisons. Les croisières en bateau permettent d'observer hippopotames et crocodiles du Nil au plus près, tandis que la rivière attire une avifaune exceptionnelle, avec plus de quatre cent trente espèces recensées dans la région.",
        introEn:
          "The first chapter unfolds along the Kwando River, on the edge of Mudumu National Park, a migration corridor used by thousands of elephants between Botswana and Namibia depending on the season. Boat cruises allow close encounters with hippos and Nile crocodiles, while the river attracts exceptional birdlife, with over four hundred and thirty species recorded in the region.",
        introEs:
          "El primer capítulo se desarrolla a lo largo del río Kwando, al borde del parque nacional de Mudumu, un corredor migratorio utilizado por miles de elefantes entre Botsuana y Namibia según la estación. Los cruceros en barco permiten observar de cerca hipopótamos y cocodrilos del Nilo, mientras que el río atrae una avifauna excepcional, con más de cuatrocientas treinta especies registradas en la región.",
        galleryImages: `${R2}/journeys/namibie-mudumu-gallery1.jpg,${R2}/journeys/namibie-mudumu-gallery2.jpg,${R2}/journeys/namibie-mudumu-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Croisière sur la Kwando",
            titleEn: "Kwando River cruise",
            titleEs: "Crucero por el Kwando",
            description:
              "Arrivée au camp en bord de rivière. Croisière en fin de journée sur la Kwando pour observer les hippopotames et une avifaune particulièrement riche, entre pygargues vocifères et martins-pêcheurs.",
            descriptionEn:
              "Arrival at the riverside camp. A late-afternoon cruise on the Kwando to observe hippos and a particularly rich birdlife, from African fish eagles to kingfishers.",
            descriptionEs:
              "Llegada al campamento junto al río. Crucero al final de la tarde por el Kwando para observar hipopótamos y una avifauna especialmente rica, entre pigargos vocingleros y martines pescadores.",
            image: `${R2}/journeys/namibie-mudumu-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Safari dans le corridor des éléphants",
            titleEn: "Safari in the elephant corridor",
            titleEs: "Safari en el corredor de los elefantes",
            description:
              "Safari matinal dans le parc de Mudumu, sur les traces des troupeaux d'éléphants qui empruntent ce corridor de migration entre le Botswana et la Namibie au fil des saisons.",
            descriptionEn:
              "A morning safari in Mudumu National Park, tracking the elephant herds that use this migration corridor between Botswana and Namibia through the seasons.",
            descriptionEs:
              "Safari matutino en el parque de Mudumu, siguiendo el rastro de las manadas de elefantes que utilizan este corredor migratorio entre Botsuana y Namibia según la estación.",
            image: `${R2}/journeys/namibie-mudumu-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Nkasa Rupara, le delta secret",
        titleEn: "Nkasa Rupara, the Secret Delta",
        titleEs: "Nkasa Rupara, el delta secreto",
        intro:
          "Extension vers le parc national de Nkasa Rupara, souvent surnommé le « petit Okavango namibien », un réseau de marécages et d'îlots où troupeaux de buffles et lions se disputent le territoire avec des colonies de hippopotames. Accessible seulement en 4x4 lors de la saison sèche, ce parc reste l'un des moins visités de Namibie, garantissant une expérience de safari particulièrement intime.",
        introEn:
          "An extension into Nkasa Rupara National Park, often nicknamed \"Namibia's little Okavango,\" a network of marshes and islets where buffalo herds and lions contest the territory with hippo colonies. Accessible only by 4x4 in the dry season, this park remains one of the least visited in Namibia, guaranteeing a particularly intimate safari experience.",
        introEs:
          "Extensión hacia el parque nacional de Nkasa Rupara, a menudo apodado el «pequeño Okavango namibio», una red de pantanos e islotes donde manadas de búfalos y leones se disputan el territorio con colonias de hipopótamos. Accesible solo en 4x4 durante la temporada seca, este parque sigue siendo uno de los menos visitados de Namibia, lo que garantiza una experiencia de safari particularmente íntima.",
        galleryImages: `${R2}/journeys/namibie-nkasa-gallery1.jpg,${R2}/journeys/namibie-nkasa-gallery2.jpg,${R2}/journeys/namibie-nkasa-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Transfert vers Nkasa Rupara",
            titleEn: "Transfer to Nkasa Rupara",
            titleEs: "Traslado a Nkasa Rupara",
            description:
              "Transfert en 4x4 vers le parc national de Nkasa Rupara à travers des pistes sablonneuses. Premier safari l'après-midi dans ce delta secret, à la recherche des buffles et des lions qui s'y disputent le territoire.",
            descriptionEn:
              "A 4x4 transfer to Nkasa Rupara National Park across sandy tracks. A first afternoon safari in this secret delta, looking for the buffalo and lions that contest the territory.",
            descriptionEs:
              "Traslado en 4x4 al parque nacional de Nkasa Rupara por pistas arenosas. Primer safari por la tarde en este delta secreto, en busca de los búfalos y leones que se disputan el territorio.",
            image: `${R2}/journeys/namibie-nkasa-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Marécages et colonies d'hippopotames",
            titleEn: "Marshes and hippo colonies",
            titleEs: "Pantanos y colonias de hipopótamos",
            description:
              "Journée complète de safari à travers les marécages de Nkasa Rupara, entre observations de colonies d'hippopotames et derniers instants au bord de l'eau avant le retour vers Windhoek.",
            descriptionEn:
              "A full day of safari through the Nkasa Rupara marshes, between hippo colony sightings and last moments by the water before the return to Windhoek.",
            descriptionEs:
              "Día completo de safari por los pantanos de Nkasa Rupara, entre avistamientos de colonias de hipopótamos y últimos momentos junto al agua antes de regresar a Windhoek.",
            image: `${R2}/journeys/namibie-nkasa-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "mozambique",
    tour: {
      name: "Mozambique : île de Mozambique et les Quirimbas",
      nameEn: "Mozambique: Mozambique Island and the Quirimbas",
      nameEs: "Mozambique: la isla de Mozambique y las Quirimbas",
      slug: "mozambique-ile-quirimbas",
      image: `${R2}/journeys/mozambique-ilha-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une cité-musée classée à l'UNESCO, puis un archipel de trente-deux îles à l'écart du monde",
      taglineEn: "A UNESCO-listed museum city, then an archipelago of thirty-two islands off the beaten path",
      taglineEs: "Una ciudad-museo declarada por la UNESCO, y después un archipiélago de treinta y dos islas alejado del mundo",
      description:
        "Le nord du Mozambique, à l'opposé des plages du sud : l'île de Mozambique, cité swahilie et portugaise classée au patrimoine mondial de l'UNESCO qui a donné son nom au pays tout entier, puis l'archipel des Quirimbas, trente-deux îles coralliennes parmi les moins visitées de l'océan Indien.",
      descriptionEn:
        "Northern Mozambique, the polar opposite of the southern beaches: Mozambique Island, a Swahili-Portuguese city listed as a UNESCO World Heritage Site that gave the entire country its name, then the Quirimbas Archipelago, thirty-two coral islands among the least visited in the Indian Ocean.",
      descriptionEs:
        "El norte de Mozambique, todo lo contrario de las playas del sur: la isla de Mozambique, ciudad suajili-portuguesa declarada Patrimonio Mundial de la UNESCO que dio su nombre a todo el país, y después el archipiélago de las Quirimbas, treinta y dos islas de coral entre las menos visitadas del océano Índico.",
      price: 4400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Avr à nov",
      whenLabelEn: "April to Nov",
      whenLabelEs: "Abr a nov",
      bestMonths: "april,may,june,july,august,september,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 6,
      featured: false,
      order: 19,
    },
    chapters: [
      {
        title: "L'île de Mozambique",
        titleEn: "Mozambique Island",
        titleEs: "La isla de Mozambique",
        intro:
          "Premier chapitre sur l'île de Mozambique, comptoir swahili puis portugais depuis le XVIe siècle, dont la vieille ville de pierre et de chaux, classée à l'UNESCO, mêle architecture coloniale, mosquées et la forteresse Saint-Sébastien, la plus ancienne construction européenne encore debout dans l'hémisphère sud. Les ruelles étroites de la ville de Macuti, quartier traditionnel aux toits de palme, offrent un contraste saisissant avec la pierre blanche de la vieille ville.",
        introEn:
          "The first chapter unfolds on Mozambique Island, a Swahili and later Portuguese trading post since the 16th century, whose UNESCO-listed Stone Town blends colonial architecture, mosques, and the São Sebastião Fortress, the oldest European structure still standing in the southern hemisphere. The narrow lanes of Macuti Town, the traditional palm-thatched quarter, offer a striking contrast to the white stone of the old town.",
        introEs:
          "El primer capítulo se desarrolla en la isla de Mozambique, enclave suajili y después portugués desde el siglo XVI, cuyo casco antiguo de piedra, declarado por la UNESCO, combina arquitectura colonial, mezquitas y la fortaleza de San Sebastián, la construcción europea más antigua aún en pie del hemisferio sur. Las estrechas calles de la ciudad de Macuti, el barrio tradicional de techos de palma, ofrecen un contraste llamativo con la piedra blanca del casco antiguo.",
        galleryImages: `${R2}/journeys/mozambique-ilha-gallery1.jpg,${R2}/journeys/mozambique-ilha-gallery2.jpg,${R2}/journeys/mozambique-ilha-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "La vieille ville et la forteresse",
            titleEn: "The old town and the fortress",
            titleEs: "El casco antiguo y la fortaleza",
            description:
              "Visite à pied de la vieille ville de pierre, du palais de São Paulo et de la forteresse Saint-Sébastien, avec un guide local qui retrace cinq siècles d'échanges entre l'Afrique, l'Inde et l'Europe.",
            descriptionEn:
              "A walking tour of the Stone Town, the São Paulo Palace, and the São Sebastião Fortress, with a local guide tracing five centuries of exchange between Africa, India, and Europe.",
            descriptionEs:
              "Recorrido a pie por el casco antiguo de piedra, el palacio de São Paulo y la fortaleza de San Sebastián, con un guía local que traza cinco siglos de intercambios entre África, India y Europa.",
            image: `${R2}/journeys/mozambique-ilha-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Macuti et les artisans locaux",
            titleEn: "Macuti and local artisans",
            titleEs: "Macuti y los artesanos locales",
            description:
              "Matinée dans le quartier de Macuti, aux ruelles animées et aux maisons traditionnelles en feuilles de palme, à la rencontre de pêcheurs et d'artisans qui perpétuent des savoir-faire séculaires.",
            descriptionEn:
              "A morning in the Macuti quarter, with its lively lanes and traditional palm-leaf houses, meeting fishermen and artisans who carry on centuries-old skills.",
            descriptionEs:
              "Mañana en el barrio de Macuti, con sus animadas callejuelas y casas tradicionales de hojas de palma, al encuentro de pescadores y artesanos que perpetúan saberes seculares.",
            image: `${R2}/journeys/mozambique-ilha-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'archipel des Quirimbas",
        titleEn: "The Quirimbas Archipelago",
        titleEs: "El archipiélago de las Quirimbas",
        intro:
          "Envol vers l'archipel des Quirimbas, trente-deux îles coralliennes protégées en grande partie par un parc national marin. Ibo, ancienne capitale coloniale aujourd'hui à moitié engloutie par la végétation, se visite au fil de ses ruines et de ses ateliers d'argenterie traditionnelle, tandis que les îles plus reculées de l'archipel offrent certains des récifs les mieux préservés de l'océan Indien.",
        introEn:
          "A flight to the Quirimbas Archipelago, thirty-two coral islands largely protected by a marine national park. Ibo, a former colonial capital now half-swallowed by vegetation, is explored through its ruins and traditional silversmith workshops, while the archipelago's more remote islands offer some of the best-preserved reefs in the Indian Ocean.",
        introEs:
          "Vuelo hacia el archipiélago de las Quirimbas, treinta y dos islas de coral protegidas en gran parte por un parque nacional marino. Ibo, antigua capital colonial hoy medio engullida por la vegetación, se recorre entre sus ruinas y talleres de platería tradicional, mientras que las islas más remotas del archipiélago ofrecen algunos de los arrecifes mejor conservados del océano Índico.",
        galleryImages: `${R2}/journeys/mozambique-quirimbas-gallery1.jpg,${R2}/journeys/mozambique-quirimbas-gallery2.jpg,${R2}/journeys/mozambique-quirimbas-gallery3.jpg`,
        mapMarkerX: 80,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Ibo, la ville engloutie par la végétation",
            titleEn: "Ibo, the town swallowed by vegetation",
            titleEs: "Ibo, la ciudad engullida por la vegetación",
            description:
              "Vol vers l'archipel des Quirimbas et visite d'Ibo, ancienne capitale coloniale dont les demeures en ruine sont peu à peu reconquises par les racines des banians. Visite d'un atelier de filigrane d'argent, artisanat local transmis depuis des générations.",
            descriptionEn:
              "A flight to the Quirimbas Archipelago and a visit to Ibo, a former colonial capital whose ruined mansions are gradually being reclaimed by banyan roots. A visit to a silver filigree workshop, a local craft passed down for generations.",
            descriptionEs:
              "Vuelo hacia el archipiélago de las Quirimbas y visita a Ibo, antigua capital colonial cuyas mansiones en ruinas van siendo reconquistadas poco a poco por las raíces de los banianos. Visita a un taller de filigrana de plata, artesanía local transmitida durante generaciones.",
            image: `${R2}/journeys/mozambique-quirimbas-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Snorkeling sur les récifs du parc marin",
            titleEn: "Snorkelling the marine park's reefs",
            titleEs: "Esnórquel en los arrecifes del parque marino",
            description:
              "Journée en boutre traditionnel vers les îles les plus reculées de l'archipel, snorkeling sur des récifs coralliens parmi les mieux préservés de l'océan Indien, déjeuner sur un banc de sable isolé.",
            descriptionEn:
              "A day aboard a traditional dhow to the archipelago's most remote islands, snorkelling on coral reefs among the best-preserved in the Indian Ocean, lunch on an isolated sandbank.",
            descriptionEs:
              "Día en dhow tradicional hacia las islas más remotas del archipiélago, esnórquel en arrecifes de coral entre los mejor conservados del océano Índico, almuerzo en un banco de arena aislado.",
            image: `${R2}/journeys/mozambique-quirimbas-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "malawi",
    tour: {
      name: "Malawi : Majete et le mont Mulanje",
      nameEn: "Malawi: Majete and Mount Mulanje",
      nameEs: "Malaui: Majete y el monte Mulanje",
      slug: "malawi-majete-mulanje",
      image: `${R2}/journeys/malawi-majete-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le retour des Big Five dans une réserve renée de ses cendres, puis l'île dans le ciel des théiers",
      taglineEn: "The return of the Big Five to a reserve reborn from the ashes, then the island in the sky above the tea estates",
      taglineEs: "El regreso de los Big Five a una reserva renacida de sus cenizas, y después la isla en el cielo sobre los tetales",
      description:
        "Un voyage entre la réserve de Majete, où le programme African Parks a réintroduit avec succès l'ensemble des Big Five après des décennies de braconnage intensif, et le mont Mulanje, massif granitique isolé surgissant des plaines de théiers, surnommé « l'île dans le ciel » pour ses sommets souvent noyés dans les nuages.",
      descriptionEn:
        "A journey between Majete Wildlife Reserve, where the African Parks programme successfully reintroduced the entire Big Five after decades of intensive poaching, and Mount Mulanje, an isolated granite massif rising from the tea plains, nicknamed \"the island in the sky\" for its peaks often shrouded in cloud.",
      descriptionEs:
        "Un viaje entre la reserva de Majete, donde el programa African Parks reintrodujo con éxito a todos los Big Five tras décadas de caza furtiva intensiva, y el monte Mulanje, un macizo granítico aislado que emerge de las llanuras de tetales, apodado «la isla en el cielo» por sus cumbres a menudo envueltas en nubes.",
      price: 3700,
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
      feeling: "challenged",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 20,
    },
    chapters: [
      {
        title: "Majete",
        titleEn: "Majete",
        titleEs: "Majete",
        intro:
          "Premier chapitre dans la réserve de Majete, un exemple spectaculaire de restauration écologique : entièrement vidée de ses grands mammifères par le braconnage dans les années 1990, la réserve a vu réintroduits éléphants, lions, léopards, rhinocéros noirs et buffles depuis 2003, devenant la première réserve du Malawi à réunir de nouveau les Big Five.",
        introEn:
          "The first chapter unfolds in Majete Wildlife Reserve, a spectacular example of ecological restoration: entirely emptied of its large mammals by poaching in the 1990s, the reserve has seen elephants, lions, leopards, black rhinos, and buffalo reintroduced since 2003, becoming the first reserve in Malawi to reunite the Big Five.",
        introEs:
          "El primer capítulo se desarrolla en la reserva de Majete, un ejemplo espectacular de restauración ecológica: completamente vaciada de sus grandes mamíferos por la caza furtiva en los años noventa, la reserva ha visto reintroducidos elefantes, leones, leopardos, rinocerontes negros y búfalos desde 2003, convirtiéndose en la primera reserva de Malaui en reunir de nuevo a los Big Five.",
        galleryImages: `${R2}/journeys/malawi-majete-gallery1.jpg,${R2}/journeys/malawi-majete-gallery2.jpg,${R2}/journeys/malawi-majete-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Safari à la recherche des Big Five",
            titleEn: "Big Five safari",
            titleEs: "Safari en busca de los Big Five",
            description:
              "Safari en 4x4 dès l'arrivée à la recherche des Big Five, avec une attention particulière portée aux rhinocéros noirs, farouchement protégés par une unité anti-braconnage dédiée.",
            descriptionEn:
              "A 4x4 safari from the moment of arrival, seeking out the Big Five, with particular attention to the black rhinos, fiercely protected by a dedicated anti-poaching unit.",
            descriptionEs:
              "Safari en 4x4 desde la llegada en busca de los Big Five, con especial atención a los rinocerontes negros, ferozmente protegidos por una unidad antifurtiva dedicada.",
            image: `${R2}/journeys/malawi-majete-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Croisière sur la Shire et cascades de Kapichira",
            titleEn: "Shire River cruise and Kapichira Falls",
            titleEs: "Crucero por el Shire y cataratas de Kapichira",
            description:
              "Croisière matinale sur la rivière Shire à la recherche des hippopotames, puis visite des chutes de Kapichira, deuxième plus grande cascade du Malawi, aux abords de la réserve.",
            descriptionEn:
              "A morning cruise on the Shire River looking for hippos, then a visit to Kapichira Falls, Malawi's second-largest waterfall, on the reserve's edge.",
            descriptionEs:
              "Crucero matutino por el río Shire en busca de hipopótamos, y después visita a las cataratas de Kapichira, la segunda más grande de Malaui, en los límites de la reserva.",
            image: `${R2}/journeys/malawi-majete-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le mont Mulanje",
        titleEn: "Mount Mulanje",
        titleEs: "El monte Mulanje",
        intro:
          "Direction le mont Mulanje, massif granitique isolé de plus de trois mille mètres qui domine les plantations de thé de la région du Sud, surnommé « l'île dans le ciel ». Les sentiers de trekking traversent des forêts de cèdres endémiques avant d'atteindre des plateaux d'altitude où nichent des cascades et des piscines naturelles, avec une vue qui s'étend par temps clair jusqu'au Mozambique voisin.",
        introEn:
          "On to Mount Mulanje, an isolated granite massif over three thousand metres tall that towers over the tea plantations of the Southern Region, nicknamed \"the island in the sky.\" Trekking trails cross forests of endemic cedar before reaching high-altitude plateaus dotted with waterfalls and natural pools, with views extending as far as neighbouring Mozambique on a clear day.",
        introEs:
          "Rumbo al monte Mulanje, un macizo granítico aislado de más de tres mil metros que domina las plantaciones de té de la región Sur, apodado «la isla en el cielo». Los senderos de trekking atraviesan bosques de cedros endémicos antes de alcanzar mesetas de altitud salpicadas de cascadas y piscinas naturales, con vistas que en días despejados llegan hasta el vecino Mozambique.",
        galleryImages: `${R2}/journeys/malawi-mulanje-gallery1.jpg,${R2}/journeys/malawi-mulanje-gallery2.jpg,${R2}/journeys/malawi-mulanje-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 85,
        days: [
          {
            dayNumber: 1,
            title: "Ascension à travers les forêts de cèdres",
            titleEn: "Climb through the cedar forests",
            titleEs: "Ascensión por los bosques de cedros",
            description:
              "Départ matinal pour l'ascension du mont Mulanje à travers des forêts de cèdres endémiques, nuit en refuge de montagne géré par des porteurs locaux, une tradition du massif depuis des générations.",
            descriptionEn:
              "A morning departure to climb Mount Mulanje through forests of endemic cedar, an overnight stay in a mountain hut run by local porters, a tradition on the massif for generations.",
            descriptionEs:
              "Salida matutina para ascender el monte Mulanje a través de bosques de cedros endémicos, noche en un refugio de montaña gestionado por porteadores locales, una tradición del macizo desde hace generaciones.",
            image: `${R2}/journeys/malawi-mulanje-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Plateaux d'altitude et cascades",
            titleEn: "High-altitude plateaus and waterfalls",
            titleEs: "Mesetas de altitud y cascadas",
            description:
              "Randonnée à travers les plateaux d'altitude du massif, ponctués de cascades et de piscines naturelles, avec par temps clair une vue portant jusqu'au Mozambique voisin, avant la descente vers les plantations de thé.",
            descriptionEn:
              "A hike across the massif's high-altitude plateaus, dotted with waterfalls and natural pools, with views on a clear day reaching as far as neighbouring Mozambique, before the descent to the tea plantations.",
            descriptionEs:
              "Caminata por las mesetas de altitud del macizo, salpicadas de cascadas y piscinas naturales, con vistas en días despejados hasta el vecino Mozambique, antes del descenso hacia las plantaciones de té.",
            image: `${R2}/journeys/malawi-mulanje-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "namibie",
    tour: {
      name: "Namibie : Etosha, le grand safari",
      nameEn: "Namibia: Etosha, the Great Safari",
      nameEs: "Namibia: Etosha, el gran safari",
      slug: "namibie-etosha",
      image: `${R2}/tours/namibie-etosha.jpg`,
      images: `${R2}/trips/namibie-etosha-gallery-1.jpg,${R2}/trips/namibie-etosha-gallery-2.jpg,${R2}/trips/namibie-etosha-gallery-3.jpg,${R2}/trips/namibie-etosha-gallery-4.jpg,${R2}/trips/namibie-etosha-gallery-5.jpg,${R2}/trips/namibie-etosha-gallery-6.jpg`,
      tagline: "Un lac salé asséché grand comme la Belgique, où toute la faune d'Afrique australe se retrouve aux points d'eau",
      taglineEn: "A dried salt pan the size of Belgium, where all of southern Africa's wildlife gathers at the waterholes",
      taglineEs: "Un lago salado seco del tamaño de Bélgica, donde toda la fauna del África austral se reúne en los abrevaderos",
      description:
        "Le parc national d'Etosha, l'un des plus grands sanctuaires animaliers d'Afrique, organisé autour d'un lac salé asséché si vaste qu'il est visible depuis l'espace. En saison sèche, la faune se concentre autour d'une poignée de points d'eau, offrant des observations d'une densité rare : éléphants, lions, rhinocéros noirs et oryx gemsbok, emblème du désert namibien.",
      descriptionEn:
        "Etosha National Park, one of Africa's greatest wildlife sanctuaries, built around a dried salt pan so vast it's visible from space. In the dry season, wildlife concentrates around a handful of waterholes, offering unusually dense sightings: elephants, lions, black rhinos, and gemsbok oryx, the emblem of the Namibian desert.",
      descriptionEs:
        "El parque nacional de Etosha, uno de los mayores santuarios de fauna de África, organizado en torno a un lago salado seco tan vasto que es visible desde el espacio. En la temporada seca, la fauna se concentra en un puñado de abrevaderos, ofreciendo avistamientos de una densidad poco común: elefantes, leones, rinocerontes negros y órices gemsbok, emblema del desierto namibio.",
      price: 4300,
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
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 21,
    },
    sections: [
      {
        heading: "Le lac salé et l'est du parc",
        headingEn: "The salt pan and the eastern park",
        headingEs: "El lago salado y el este del parque",
        body:
          "Le voyage débute par l'est du parc, autour du point d'eau de Namutoni, un ancien fort colonial allemand transformé en camp. Les safaris matinaux et vespéraux permettent d'observer les troupeaux au bord du lac salé, dont l'étendue blanche et craquelée s'étend jusqu'à l'horizon en saison sèche, créant des mirages où semblent flotter les animaux au loin.",
        bodyEn:
          "The trip begins in the eastern part of the park, around the Namutoni waterhole, a former German colonial fort turned camp. Morning and evening safaris allow herds to be observed along the salt pan, whose cracked white expanse stretches to the horizon in the dry season, creating mirages where distant animals seem to float.",
        bodyEs:
          "El viaje comienza por el este del parque, en torno al abrevadero de Namutoni, un antiguo fuerte colonial alemán convertido en campamento. Los safaris matutinos y vespertinos permiten observar las manadas junto al lago salado, cuya extensión blanca y agrietada se pierde en el horizonte durante la temporada seca, creando espejismos donde los animales lejanos parecen flotar.",
      },
      {
        heading: "Okaukuejo et les points d'eau illuminés",
        headingEn: "Okaukuejo and the floodlit waterholes",
        headingEs: "Okaukuejo y los abrevaderos iluminados",
        body:
          "Étape à Okaukuejo, dont le point d'eau illuminé la nuit est une institution du safari namibien : il n'est pas rare d'y voir se succéder rhinocéros noirs, lions et hyènes tachetées à quelques mètres de la terrasse d'observation, sans jamais quitter le camp. Le jour, les pistes autour du camp comptent parmi les plus giboyeuses du parc.",
        bodyEn:
          "A stay at Okaukuejo, whose floodlit night waterhole is an institution of Namibian safari: it's not unusual to see black rhinos, lions, and spotted hyenas take turns just metres from the viewing deck, without ever leaving camp. By day, the tracks around the camp are among the most wildlife-rich in the park.",
        bodyEs:
          "Etapa en Okaukuejo, cuyo abrevadero iluminado por la noche es toda una institución del safari namibio: no es raro ver sucederse rinocerontes negros, leones e hienas manchadas a pocos metros de la terraza de observación, sin salir nunca del campamento. De día, las pistas alrededor del campamento se cuentan entre las más ricas en fauna del parque.",
      },
    ],
    hotels: [
      {
        name: "Namutoni Fort Camp",
        nameEn: "Namutoni Fort Camp",
        nameEs: "Namutoni Fort Camp",
        description:
          "Un ancien fort colonial allemand aux murs blanchis à la chaux, reconverti en camp avec vue sur le point d'eau, mélange atmosphérique d'histoire coloniale et de safari moderne.",
        descriptionEn:
          "A former whitewashed German colonial fort, converted into a camp overlooking the waterhole, an atmospheric mix of colonial history and modern safari.",
        descriptionEs:
          "Un antiguo fuerte colonial alemán de muros encalados, reconvertido en campamento con vistas al abrevadero, una mezcla atmosférica de historia colonial y safari moderno.",
        image: `${R2}/trips/namibie-etosha-hotel-namutoni.jpg`,
      },
      {
        name: "Okaukuejo Resort",
        nameEn: "Okaukuejo Resort",
        nameEs: "Okaukuejo Resort",
        description:
          "L'adresse historique du parc, connue dans le monde entier pour son point d'eau illuminé toute la nuit, chambres simples mais la meilleure position d'observation d'Etosha.",
        descriptionEn:
          "The park's historic address, known worldwide for its all-night floodlit waterhole, simple rooms but the best observation spot in Etosha.",
        descriptionEs:
          "La dirección histórica del parque, conocida en todo el mundo por su abrevadero iluminado toda la noche, habitaciones sencillas pero la mejor posición de observación de Etosha.",
        image: `${R2}/trips/namibie-etosha-hotel-okaukuejo.jpg`,
      },
    ],
  },
  {
    destinationSlug: "mozambique",
    tour: {
      name: "Mozambique : Gorongosa, la renaissance sauvage",
      nameEn: "Mozambique: Gorongosa, the Wild Rebirth",
      nameEs: "Mozambique: Gorongosa, el renacer salvaje",
      slug: "mozambique-gorongosa",
      image: `${R2}/tours/mozambique-gorongosa.jpg`,
      images: `${R2}/trips/mozambique-gorongosa-gallery-1.jpg,${R2}/trips/mozambique-gorongosa-gallery-2.jpg,${R2}/trips/mozambique-gorongosa-gallery-3.jpg,${R2}/trips/mozambique-gorongosa-gallery-4.jpg,${R2}/trips/mozambique-gorongosa-gallery-5.jpg,${R2}/trips/mozambique-gorongosa-gallery-6.jpg`,
      tagline: "Un parc décimé par la guerre civile, aujourd'hui l'une des plus grandes success story de conservation en Afrique",
      taglineEn: "A park devastated by civil war, now one of Africa's greatest conservation success stories",
      taglineEs: "Un parque devastado por la guerra civil, hoy una de las mayores historias de éxito de conservación en África",
      description:
        "Loin des plages de l'océan Indien, le parc national de Gorongosa incarne l'un des projets de restauration écologique les plus ambitieux d'Afrique : après avoir perdu plus de 90% de sa faune durant la guerre civile mozambicaine, le parc a vu réintroduits éléphants, lions et lycaons, dans un paysage de savane, de forêt et de lac qui compte parmi les plus divers du continent.",
      descriptionEn:
        "Far from the Indian Ocean beaches, Gorongosa National Park embodies one of Africa's most ambitious ecological restoration projects: after losing more than 90% of its wildlife during the Mozambican civil war, the park has seen elephants, lions, and wild dogs reintroduced, across a landscape of savannah, forest, and lake among the most diverse on the continent.",
      descriptionEs:
        "Lejos de las playas del océano Índico, el parque nacional de Gorongosa encarna uno de los proyectos de restauración ecológica más ambiciosos de África: tras perder más del 90% de su fauna durante la guerra civil mozambiqueña, el parque ha visto reintroducidos elefantes, leones y licaones, en un paisaje de sabana, bosque y lago entre los más diversos del continente.",
      price: 3600,
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
      travelerTypes: "couples,solo,groups,family",
      maxGuests: 6,
      featured: false,
      order: 22,
    },
    sections: [
      {
        heading: "Le lac Urema et la plaine centrale",
        headingEn: "Lake Urema and the central floodplain",
        headingEs: "El lago Urema y la llanura central",
        body:
          "Le cœur du parc s'organise autour du lac Urema, dont les rives attirent hippopotames, crocodiles et l'une des plus fortes concentrations d'oiseaux d'eau d'Afrique australe. Les safaris en 4x4 sillonnent la plaine centrale, où buffles et antilopes se sont reconstitués en troupeaux de plusieurs centaines de têtes depuis le lancement du programme de restauration en 2004.",
        bodyEn:
          "The heart of the park is organised around Lake Urema, whose shores attract hippos, crocodiles, and one of southern Africa's highest concentrations of waterbirds. 4x4 safaris cross the central floodplain, where buffalo and antelope have rebuilt herds several hundred strong since the restoration programme launched in 2004.",
        bodyEs:
          "El corazón del parque se organiza en torno al lago Urema, cuyas orillas atraen hipopótamos, cocodrilos y una de las concentraciones de aves acuáticas más altas de África austral. Los safaris en 4x4 recorren la llanura central, donde búfalos y antílopes han reconstituido manadas de varios cientos de cabezas desde el inicio del programa de restauración en 2004.",
      },
      {
        heading: "Le mont Gorongosa et les communautés locales",
        headingEn: "Mount Gorongosa and the local communities",
        headingEs: "El monte Gorongosa y las comunidades locales",
        body:
          "Excursion vers les contreforts du mont Gorongosa, dont la forêt tropicale abrite des espèces endémiques encore récemment découvertes par la science. Le programme de conservation implique étroitement les communautés riveraines, avec des visites de projets agricoles et éducatifs financés par les revenus du tourisme, une dimension rarement aussi visible dans un parc africain.",
        bodyEn:
          "An excursion to the foothills of Mount Gorongosa, whose rainforest shelters endemic species only recently discovered by science. The conservation programme closely involves neighbouring communities, with visits to agricultural and educational projects funded by tourism revenue — a dimension rarely this visible in an African park.",
        bodyEs:
          "Excursión a las estribaciones del monte Gorongosa, cuya selva tropical alberga especies endémicas descubiertas por la ciencia solo recientemente. El programa de conservación implica estrechamente a las comunidades vecinas, con visitas a proyectos agrícolas y educativos financiados por los ingresos del turismo, una dimensión pocas veces tan visible en un parque africano.",
      },
    ],
    hotels: [
      {
        name: "Chitengo Camp",
        nameEn: "Chitengo Camp",
        nameEs: "Chitengo Camp",
        description:
          "Le camp historique du parc, entièrement rénové, bungalows simples au bord d'une zone boisée fréquentée par les babouins, piscine avec vue sur la plaine.",
        descriptionEn:
          "The park's historic camp, fully renovated, simple bungalows on the edge of a wooded area frequented by baboons, a pool overlooking the plain.",
        descriptionEs:
          "El campamento histórico del parque, totalmente renovado, bungalós sencillos al borde de una zona boscosa frecuentada por babuinos, piscina con vistas a la llanura.",
        image: `${R2}/trips/mozambique-gorongosa-hotel-chitengo.jpg`,
      },
      {
        name: "Explore Gorongosa Camp",
        nameEn: "Explore Gorongosa Camp",
        nameEs: "Explore Gorongosa Camp",
        description:
          "Un camp de safari plus intimiste sur les rives de la rivière Mussicadzi, tentes de toile surélevées, programme éducatif sur place expliquant le travail de restauration du parc.",
        descriptionEn:
          "A more intimate safari camp on the banks of the Mussicadzi River, raised canvas tents, an on-site educational programme explaining the park's restoration work.",
        descriptionEs:
          "Un campamento de safari más íntimo a orillas del río Mussicadzi, tiendas de lona elevadas, programa educativo in situ que explica el trabajo de restauración del parque.",
        image: `${R2}/trips/mozambique-gorongosa-hotel-explore.jpg`,
      },
    ],
  },
  {
    destinationSlug: "malawi",
    tour: {
      name: "Malawi : le plateau du Nyika, l'Afrique en altitude",
      nameEn: "Malawi: the Nyika Plateau, Africa at Altitude",
      nameEs: "Malaui: la meseta de Nyika, África en altitud",
      slug: "malawi-plateau-nyika",
      image: `${R2}/tours/malawi-plateau-nyika.jpg`,
      images: `${R2}/trips/malawi-nyika-gallery-1.jpg,${R2}/trips/malawi-nyika-gallery-2.jpg,${R2}/trips/malawi-nyika-gallery-3.jpg,${R2}/trips/malawi-nyika-gallery-4.jpg,${R2}/trips/malawi-nyika-gallery-5.jpg,${R2}/trips/malawi-nyika-gallery-6.jpg`,
      tagline: "Des collines à l'anglaise à plus de deux mille mètres, peuplées de zèbres et d'antilopes rouannes",
      taglineEn: "Rolling hills reminiscent of England, above two thousand metres, home to zebra and roan antelope",
      taglineEs: "Colinas de aspecto inglés a más de dos mil metros, pobladas de cebras y antílopes ruanos",
      description:
        "Le plateau du Nyika, point culminant du Malawi à plus de deux mille cinq cents mètres, dévoile un paysage inattendu en Afrique australe : des collines herbeuses ondulées à perte de vue, souvent comparées à la campagne anglaise, où vivent en liberté zèbres de Crawshay, antilopes rouannes et une concentration exceptionnelle d'orchidées sauvages.",
      descriptionEn:
        "The Nyika Plateau, Malawi's highest point at over two thousand five hundred metres, reveals an unexpected landscape for southern Africa: rolling grassy hills stretching to the horizon, often compared to the English countryside, home to free-roaming Crawshay's zebra, roan antelope, and an exceptional concentration of wild orchids.",
      descriptionEs:
        "La meseta de Nyika, el punto más alto de Malaui con más de dos mil quinientos metros, revela un paisaje inesperado para el África austral: colinas herbosas onduladas que se pierden en el horizonte, a menudo comparadas con el campo inglés, donde viven en libertad cebras de Crawshay, antílopes ruanos y una concentración excepcional de orquídeas silvestres.",
      price: 3300,
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
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 23,
    },
    sections: [
      {
        heading: "Les collines du Nyika et ses zèbres",
        headingEn: "The Nyika hills and its zebra",
        headingEs: "Las colinas de Nyika y sus cebras",
        body:
          "Le parc national du Nyika, le plus ancien et le plus vaste de Malawi, se découvre en randonnée ou à cheval, une rareté en Afrique australe rendue possible par l'absence de prédateurs dangereux sur le plateau. Les zèbres de Crawshay, sous-espèce endémique aux rayures plus fines que leurs cousins des plaines, se rassemblent en troupeaux de plusieurs centaines de têtes visibles depuis les crêtes environnantes.",
        bodyEn:
          "Nyika National Park, Malawi's oldest and largest, is explored on foot or on horseback — a rarity in southern Africa, made possible by the absence of dangerous predators on the plateau. Crawshay's zebra, an endemic subspecies with finer stripes than their lowland cousins, gather in herds several hundred strong, visible from the surrounding ridges.",
        bodyEs:
          "El parque nacional de Nyika, el más antiguo y extenso de Malaui, se descubre a pie o a caballo, una rareza en el África austral posible gracias a la ausencia de depredadores peligrosos en la meseta. Las cebras de Crawshay, subespecie endémica de rayas más finas que sus primas de las llanuras, se reúnen en manadas de varios cientos de cabezas visibles desde las crestas circundantes.",
      },
      {
        heading: "Orchidées sauvages et forêts de pins",
        headingEn: "Wild orchids and pine forests",
        headingEs: "Orquídeas silvestres y bosques de pinos",
        body:
          "Le plateau abrite plus de deux cents espèces d'orchidées sauvages, la plus forte concentration d'Afrique australe, ainsi que des poches de forêt de brume abritant des singes colobes noirs et blancs. Le climat frais, parfois proche de zéro la nuit en hiver, contraste avec la chaleur du reste du Malawi et permet des randonnées en pleine journée sans la contrainte habituelle de la chaleur africaine.",
        bodyEn:
          "The plateau shelters over two hundred species of wild orchid, the highest concentration in southern Africa, along with pockets of mist forest home to black-and-white colobus monkeys. The cool climate, sometimes near freezing at night in winter, contrasts with the heat of the rest of Malawi and allows full-day hikes without the usual constraint of African heat.",
        bodyEs:
          "La meseta alberga más de doscientas especies de orquídeas silvestres, la mayor concentración del África austral, además de bolsas de bosque de niebla que albergan colobos blanquinegros. El clima fresco, a veces cercano a cero por la noche en invierno, contrasta con el calor del resto de Malaui y permite caminatas de día completo sin la habitual limitación del calor africano.",
      },
    ],
    hotels: [
      {
        name: "Chelinda Lodge",
        nameEn: "Chelinda Lodge",
        nameEs: "Chelinda Lodge",
        description:
          "Le seul établissement du plateau, chalets en bois de pin construits sur pilotis avec cheminée, offrant une vue sur les collines vallonnées et leurs troupeaux de zèbres.",
        descriptionEn:
          "The plateau's only property, pine chalets built on stilts with fireplaces, overlooking the rolling hills and their zebra herds.",
        descriptionEs:
          "El único establecimiento de la meseta, chalés de madera de pino construidos sobre pilotes con chimenea, con vistas a las colinas onduladas y sus manadas de cebras.",
        image: `${R2}/trips/malawi-nyika-hotel-lodge.jpg`,
      },
      {
        name: "Chelinda Camp",
        nameEn: "Chelinda Camp",
        nameEs: "Chelinda Camp",
        description:
          "Une option plus légère à quelques minutes du lodge principal, tentes confortables chauffées, cuisine servie autour d'un feu de camp sous un ciel étoilé rarement égalé.",
        descriptionEn:
          "A lighter option a few minutes from the main lodge, comfortable heated tents, meals served around a campfire under a rarely matched starry sky.",
        descriptionEs:
          "Una opción más ligera a pocos minutos del lodge principal, tiendas confortables con calefacción, comidas servidas junto a una fogata bajo un cielo estrellado difícil de igualar.",
        image: `${R2}/trips/malawi-nyika-hotel-camp.jpg`,
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
