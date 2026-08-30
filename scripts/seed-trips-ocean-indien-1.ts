// Océan Indien batch 1 (full region) — Maldives, Seychelles, Mauritius, Réunion. New trips
// bringing each destination to at least 3, styled on Black Tomato's real structure (a short
// number of named-hotel chapters, not an exhaustive day-by-day grind) rather than copying
// their text. This completes all 4 destinations in the Océan Indien region. Run with:
//   npx tsx scripts/seed-trips-ocean-indien-1.ts
// Requires scripts/upload-images-ocean-indien-1.ts to have been run first (this script
// refuses to write anything if a referenced image isn't already live in R2 — see
// seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "maldives",
    tour: {
      name: "Maldives : îles locales et l'atoll de Baa",
      nameEn: "Maldives: Local Islands and Baa Atoll",
      nameEs: "Maldivas: islas locales y el atolón de Baa",
      slug: "maldives-iles-locales-baa",
      image: `${R2}/journeys/maldives-iles-locales-baa-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le vrai visage habité des Maldives, loin des îles-resorts, puis une réserve de biosphère peuplée de raies manta",
      taglineEn: "The real, inhabited face of the Maldives, far from the resort islands, then a biosphere reserve populated by manta rays",
      taglineEs: "El verdadero rostro habitado de las Maldivas, lejos de las islas-resort, y después una reserva de biosfera poblada de mantarrayas",
      description:
        "Un voyage qui dépasse le cliché du bungalow sur pilotis : Maafushi, une île locale habitée où guesthouses familiales et plages publiques ont ouvert le pays aux voyageurs indépendants depuis 2009, puis l'atoll de Baa, réserve de biosphère classée par l'UNESCO où des dizaines de raies manta se rassemblent certains mois de l'année sur des stations de nettoyage naturelles.",
      descriptionEn:
        "A journey beyond the overwater-bungalow cliché: Maafushi, an inhabited local island where family guesthouses and public beaches have opened the country to independent travellers since 2009, then Baa Atoll, a UNESCO-listed biosphere reserve where dozens of manta rays gather certain months of the year at natural cleaning stations.",
      descriptionEs:
        "Un viaje que va más allá del tópico del bungaló sobre pilotes: Maafushi, una isla local habitada donde las casas de huéspedes familiares y las playas públicas han abierto el país a los viajeros independientes desde 2009, y después el atolón de Baa, reserva de biosfera declarada por la UNESCO donde decenas de mantarrayas se reúnen ciertos meses del año en estaciones de limpieza naturales.",
      price: 3400,
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
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 74,
    },
    chapters: [
      {
        title: "Maafushi, l'île locale",
        titleEn: "Maafushi, the Local Island",
        titleEs: "Maafushi, la isla local",
        intro:
          "Premier chapitre à Maafushi, l'une des premières îles habitées des Maldives à avoir ouvert des guesthouses aux touristes indépendants après un assouplissement de la législation en 2009, mettant fin au monopole des îles-resorts. La vie locale, rythmée par la pêche et les cinq prières quotidiennes, s'y découvre au fil de ruelles animées, tandis qu'une plage publique séparée par un rideau de sable permet la baignade en maillot de bain dans un pays majoritairement musulman.",
        introEn:
          "The first chapter unfolds in Maafushi, one of the first inhabited Maldivian islands to open guesthouses to independent tourists after a 2009 relaxation of legislation ended the resort islands' monopoly. Local life, shaped by fishing and the five daily prayers, is discovered along lively lanes, while a public beach separated by a sand barrier allows swimming in swimwear in a majority-Muslim country.",
        introEs:
          "El primer capítulo se desarrolla en Maafushi, una de las primeras islas habitadas de las Maldivas en abrir casas de huéspedes a turistas independientes tras una flexibilización de la legislación en 2009 que puso fin al monopolio de las islas-resort. La vida local, marcada por la pesca y las cinco oraciones diarias, se descubre por calles animadas, mientras que una playa pública separada por una barrera de arena permite bañarse en traje de baño en un país de mayoría musulmana.",
        galleryImages: `${R2}/journeys/maldives-maafushi-gallery1.jpg,${R2}/journeys/maldives-maafushi-gallery2.jpg,${R2}/journeys/maldives-maafushi-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "La vie d'une île locale maldivienne",
            titleEn: "Life on a local Maldivian island",
            titleEs: "La vida en una isla local maldiva",
            description:
              "Promenade dans les ruelles de Maafushi à la rencontre des habitants, visite du port de pêche au retour des bateaux en fin de journée, dîner de poisson grillé fraîchement pêché.",
            descriptionEn:
              "A stroll through Maafushi's lanes meeting residents, a visit to the fishing harbour as boats return at the end of the day, a dinner of freshly caught grilled fish.",
            descriptionEs:
              "Paseo por las calles de Maafushi al encuentro de los habitantes, visita al puerto pesquero a la vuelta de los barcos al final del día, cena de pescado a la parrilla recién capturado.",
            image: `${R2}/journeys/maldives-maafushi-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Excursion en bateau et banc de sable",
            titleEn: "A boat excursion and a sandbank",
            titleEs: "Excursión en barco y banco de arena",
            description:
              "Excursion en bateau vers un banc de sable isolé au milieu du lagon, snorkeling parmi les raies pastenagues, avant un retour à Maafushi en fin d'après-midi.",
            descriptionEn:
              "A boat excursion to an isolated sandbank in the middle of the lagoon, snorkelling among stingrays, before a return to Maafushi in the late afternoon.",
            descriptionEs:
              "Excursión en barco hasta un banco de arena aislado en medio de la laguna, esnórquel entre rayas látigo, antes de regresar a Maafushi al final de la tarde.",
            image: `${R2}/journeys/maldives-maafushi-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'atoll de Baa et les raies manta",
        titleEn: "Baa Atoll and the Manta Rays",
        titleEs: "El atolón de Baa y las mantarrayas",
        intro:
          "Vol vers l'atoll de Baa, seule réserve de biosphère des Maldives classée par l'UNESCO, dont la baie de Hanifaru concentre certains mois de l'année l'une des plus fortes densités de raies manta au monde, venues se nourrir de plancton porté par les courants de mousson. Le site, strictement réglementé pour limiter le nombre de nageurs simultanés, reste l'une des expériences de snorkeling les plus spectaculaires de l'océan Indien.",
        introEn:
          "A flight to Baa Atoll, the Maldives' only UNESCO-listed biosphere reserve, whose Hanifaru Bay concentrates, certain months of the year, one of the highest densities of manta rays in the world, drawn to feed on plankton carried by the monsoon currents. The site, strictly regulated to limit the number of simultaneous swimmers, remains one of the Indian Ocean's most spectacular snorkelling experiences.",
        introEs:
          "Vuelo hacia el atolón de Baa, única reserva de biosfera de las Maldivas declarada por la UNESCO, cuya bahía de Hanifaru concentra, ciertos meses del año, una de las mayores densidades de mantarrayas del mundo, atraídas para alimentarse de plancton transportado por las corrientes del monzón. El lugar, estrictamente regulado para limitar el número de nadadores simultáneos, sigue siendo una de las experiencias de esnórquel más espectaculares del océano Índico.",
        galleryImages: `${R2}/journeys/maldives-baa-gallery1.jpg,${R2}/journeys/maldives-baa-gallery2.jpg,${R2}/journeys/maldives-baa-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Installation dans l'atoll de Baa",
            titleEn: "Settling into Baa Atoll",
            titleEs: "Instalación en el atolón de Baa",
            description:
              "Vol puis bateau vers l'atoll de Baa, installation dans un lodge en bord de lagon, briefing sur les règles strictes de la réserve de biosphère avant la première sortie en mer.",
            descriptionEn:
              "A flight then a boat to Baa Atoll, settling into a lagoon-side lodge, a briefing on the biosphere reserve's strict rules before the first outing at sea.",
            descriptionEs:
              "Vuelo y barco hacia el atolón de Baa, instalación en un lodge junto a la laguna, briefing sobre las estrictas normas de la reserva de biosfera antes de la primera salida al mar.",
            image: `${R2}/journeys/maldives-baa-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Snorkeling avec les raies manta à Hanifaru",
            titleEn: "Snorkelling with manta rays at Hanifaru",
            titleEs: "Esnórquel con mantarrayas en Hanifaru",
            description:
              "Sortie en bateau vers la baie de Hanifaru, snorkeling encadré parmi des dizaines de raies manta venues se nourrir de plancton, l'un des rassemblements les plus denses de l'espèce au monde.",
            descriptionEn:
              "A boat outing to Hanifaru Bay, guided snorkelling among dozens of manta rays feeding on plankton, one of the densest gatherings of the species in the world.",
            descriptionEs:
              "Salida en barco hacia la bahía de Hanifaru, esnórquel guiado entre decenas de mantarrayas que se alimentan de plancton, una de las concentraciones más densas de la especie en el mundo.",
            image: `${R2}/journeys/maldives-baa-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "seychelles",
    tour: {
      name: "Seychelles : Aldabra et l'île de Denis",
      nameEn: "Seychelles: Aldabra and Denis Island",
      nameEs: "Seychelles: Aldabra y la isla de Denis",
      slug: "seychelles-aldabra-denis",
      image: `${R2}/journeys/seychelles-aldabra-denis-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le plus grand atoll corallien soulevé du monde, presque intouché depuis sa formation, puis une île privée entièrement corallienne",
      taglineEn: "The world's largest raised coral atoll, almost untouched since its formation, then an entirely coral private island",
      taglineEs: "El mayor atolón de coral elevado del mundo, casi intacto desde su formación, y después una isla privada enteramente coralina",
      description:
        "Un voyage entre deux extrêmes de l'archipel seychellois : Aldabra, le plus grand atoll corallien soulevé du monde, classé à l'UNESCO et si isolé qu'il n'accueille qu'un nombre infime de visiteurs chaque année, abritant la plus importante population de tortues géantes de la planète, puis l'île de Denis, îlot corallien privé au nord de l'archipel, où palmiers et sable blanc composent un tableau plus classique mais tout aussi préservé.",
      descriptionEn:
        "A journey between two extremes of the Seychellois archipelago: Aldabra, the world's largest raised coral atoll, UNESCO-listed and so remote that it welcomes only a tiny number of visitors each year, home to the planet's largest population of giant tortoises, then Denis Island, a private coral islet in the north of the archipelago, where palm trees and white sand compose a more classic but equally preserved picture.",
      descriptionEs:
        "Un viaje entre dos extremos del archipiélago seychellense: Aldabra, el mayor atolón de coral elevado del mundo, declarado por la UNESCO y tan aislado que recibe solo un número ínfimo de visitantes cada año, hogar de la mayor población de tortugas gigantes del planeta, y después la isla de Denis, un islote de coral privado al norte del archipiélago, donde palmeras y arena blanca componen un cuadro más clásico pero igualmente preservado.",
      price: 12000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Avril-mai | Oct-nov",
      whenLabelEn: "April-May | Oct-Nov",
      whenLabelEs: "Abr-mayo | oct-nov",
      bestMonths: "april,may,october,november",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 2,
      featured: false,
      order: 75,
    },
    chapters: [
      {
        title: "Aldabra, l'atoll intouché",
        titleEn: "Aldabra, the Untouched Atoll",
        titleEs: "Aldabra, el atolón intacto",
        intro:
          "Premier chapitre à Aldabra, atoll corallien soulevé si vaste qu'il pourrait contenir l'île de Manhattan, classé au patrimoine mondial de l'UNESCO et accessible uniquement par bateau après plusieurs jours de navigation depuis Mahé. L'isolement extrême du site, protégé de tout développement touristique de masse, a permis à plus de cent mille tortues géantes, soit la plus importante population mondiale, de prospérer sans quasiment aucune interférence humaine depuis des siècles.",
        introEn:
          "The first chapter unfolds at Aldabra, a raised coral atoll so vast it could contain the island of Manhattan, a UNESCO World Heritage Site accessible only by boat after several days' sailing from Mahé. The site's extreme isolation, protected from any mass tourism development, has allowed over one hundred thousand giant tortoises, the world's largest population, to thrive with virtually no human interference for centuries.",
        introEs:
          "El primer capítulo se desarrolla en Aldabra, un atolón de coral elevado tan vasto que podría contener la isla de Manhattan, declarado Patrimonio Mundial de la UNESCO y accesible solo en barco tras varios días de navegación desde Mahé. El aislamiento extremo del lugar, protegido de cualquier desarrollo de turismo de masas, ha permitido que más de cien mil tortugas gigantes, la mayor población mundial, prosperen prácticamente sin interferencia humana durante siglos.",
        galleryImages: `${R2}/journeys/seychelles-aldabra-gallery1.jpg,${R2}/journeys/seychelles-aldabra-gallery2.jpg,${R2}/journeys/seychelles-aldabra-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Arrivée sur l'atoll après plusieurs jours de mer",
            titleEn: "Arrival at the atoll after several days at sea",
            titleEs: "Llegada al atolón tras varios días de mar",
            description:
              "Débarquement sur Aldabra après la traversée en bateau depuis Mahé, rencontre avec l'équipe scientifique résidente qui gère la station de recherche présente sur l'atoll depuis les années 1970.",
            descriptionEn:
              "Landing on Aldabra after the boat crossing from Mahé, a meeting with the resident scientific team running the research station that has operated on the atoll since the 1970s.",
            descriptionEs:
              "Desembarco en Aldabra tras la travesía en barco desde Mahé, encuentro con el equipo científico residente que gestiona la estación de investigación presente en el atolón desde la década de 1970.",
            image: `${R2}/journeys/seychelles-aldabra-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Parmi les tortues géantes d'Aldabra",
            titleEn: "Among the giant tortoises of Aldabra",
            titleEs: "Entre las tortugas gigantes de Aldabra",
            description:
              "Exploration à pied de l'atoll parmi des dizaines de milliers de tortues géantes en liberté totale, puis navigation en kayak dans le lagon intérieur, poumon bleu de l'atoll fermé à toute activité de pêche.",
            descriptionEn:
              "An on-foot exploration of the atoll among tens of thousands of giant tortoises in complete freedom, then a kayak paddle through the inner lagoon, the atoll's blue lung, closed to all fishing activity.",
            descriptionEs:
              "Exploración a pie del atolón entre decenas de miles de tortugas gigantes en total libertad, y navegación en kayak por la laguna interior, el pulmón azul del atolón cerrado a toda actividad pesquera.",
            image: `${R2}/journeys/seychelles-aldabra-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'île de Denis",
        titleEn: "Denis Island",
        titleEs: "La isla de Denis",
        intro:
          "Retour vers le nord de l'archipel et l'île de Denis, îlot corallien privé d'à peine un kilomètre et demi de long, entièrement entouré d'un lagon turquoise peu profond. Contrairement aux îles granitiques du cœur de l'archipel, Denis, de formation corallienne récente, offre un paysage plus plat mais une eau translucide propice au snorkeling directement depuis la plage, sans nécessiter d'excursion en bateau.",
        introEn:
          "A return to the north of the archipelago and Denis Island, a private coral islet barely a kilometre and a half long, entirely surrounded by a shallow turquoise lagoon. Unlike the granite islands at the archipelago's heart, Denis, of recent coral formation, offers a flatter landscape but translucent water ideal for snorkelling directly from the beach, with no boat excursion needed.",
        introEs:
          "Regreso al norte del archipiélago y a la isla de Denis, un islote de coral privado de apenas un kilómetro y medio de largo, enteramente rodeado de una laguna turquesa poco profunda. A diferencia de las islas graníticas del corazón del archipiélago, Denis, de formación coralina reciente, ofrece un paisaje más llano pero un agua translúcida ideal para el esnórquel directamente desde la playa, sin necesidad de excursión en barco.",
        galleryImages: `${R2}/journeys/seychelles-denis-gallery1.jpg,${R2}/journeys/seychelles-denis-gallery2.jpg,${R2}/journeys/seychelles-denis-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Snorkeling depuis la plage",
            titleEn: "Snorkelling from the beach",
            titleEs: "Esnórquel desde la playa",
            description:
              "Vol vers l'île de Denis, première sortie snorkeling directement depuis la plage dans un lagon peu profond peuplé de poissons-clowns et de tortues vertes.",
            descriptionEn:
              "A flight to Denis Island, a first snorkelling outing directly from the beach in a shallow lagoon populated by clownfish and green turtles.",
            descriptionEs:
              "Vuelo a la isla de Denis, primera salida de esnórquel directamente desde la playa en una laguna poco profunda poblada de peces payaso y tortugas verdes.",
            image: `${R2}/journeys/seychelles-denis-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le phare et la pêche traditionnelle",
            titleEn: "The lighthouse and traditional fishing",
            titleEs: "El faro y la pesca tradicional",
            description:
              "Visite du phare historique de l'île, construit en 1910, puis sortie de pêche traditionnelle au gros avec des marins locaux, avant un dîner de clôture les pieds dans le sable.",
            descriptionEn:
              "A visit to the island's historic lighthouse, built in 1910, then a traditional big-game fishing outing with local sailors, before a closing dinner with feet in the sand.",
            descriptionEs:
              "Visita al histórico faro de la isla, construido en 1910, y salida de pesca de altura tradicional con marineros locales, antes de una cena de despedida con los pies en la arena.",
            image: `${R2}/journeys/seychelles-denis-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "maurice",
    tour: {
      name: "Île Maurice : Grand Bassin et l'île aux Cerfs",
      nameEn: "Mauritius: Grand Bassin and Île aux Cerfs",
      nameEs: "Isla Mauricio: Grand Bassin y la isla de los Ciervos",
      slug: "maurice-grandbassin-iledescerfs",
      image: `${R2}/journeys/maurice-grandbassin-cerfs-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un lac sacré niché dans un cratère volcanique, puis un îlot de sable blanc au large de la côte est",
      taglineEn: "A sacred lake nestled in a volcanic crater, then a white-sand islet off the east coast",
      taglineEs: "Un lago sagrado enclavado en un cráter volcánico, y después un islote de arena blanca frente a la costa este",
      description:
        "Un voyage entre deux facettes intérieures et côtières de l'île Maurice, à l'écart du parcours classique de la côte ouest : Grand Bassin, lac sacré niché dans un cratère volcanique et haut lieu de pèlerinage hindou où convergent chaque année des centaines de milliers de fidèles, puis l'île aux Cerfs, îlot de sable blanc au large de la côte est, accessible uniquement en bateau et entièrement dédié à la détente balnéaire.",
      descriptionEn:
        "A journey between two inland and coastal facets of Mauritius, off the usual west-coast circuit: Grand Bassin, a sacred lake nestled in a volcanic crater and a major Hindu pilgrimage site drawing hundreds of thousands of worshippers each year, then Île aux Cerfs, a white-sand islet off the east coast, reachable only by boat and entirely devoted to beachside relaxation.",
      descriptionEs:
        "Un viaje entre dos facetas, interior y costera, de la isla Mauricio, al margen del recorrido clásico de la costa oeste: Grand Bassin, lago sagrado enclavado en un cráter volcánico y gran lugar de peregrinación hindú al que acuden cada año cientos de miles de fieles, y después la isla de los Ciervos (Île aux Cerfs), islote de arena blanca frente a la costa este, accesible solo en barco y enteramente dedicado al descanso frente al mar.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mai à nov",
      whenLabelEn: "May to Nov",
      whenLabelEs: "May a nov",
      bestMonths: "may,june,july,august,september,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,family,honeymoon",
      maxGuests: 6,
      featured: false,
      order: 76,
    },
    chapters: [
      {
        title: "Grand Bassin, le lac sacré",
        titleEn: "Grand Bassin, the Sacred Lake",
        titleEs: "Grand Bassin, el lago sagrado",
        intro:
          "Premier chapitre à Grand Bassin, connu localement sous le nom de Ganga Talao, lac de cratère considéré par la communauté hindoue mauricienne comme relié spirituellement au Gange indien. Chaque année lors du festival de Maha Shivaratri, des centaines de milliers de pèlerins convergent à pied depuis toute l'île, faisant de ce site le plus grand lieu de rassemblement hindou hors d'Inde et du Népal.",
        introEn:
          "The first chapter unfolds at Grand Bassin, locally known as Ganga Talao, a crater lake considered by the Mauritian Hindu community to be spiritually connected to India's Ganges River. Each year during the Maha Shivaratri festival, hundreds of thousands of pilgrims converge on foot from across the island, making this site the largest Hindu gathering place outside India and Nepal.",
        introEs:
          "El primer capítulo se desarrolla en Grand Bassin, conocido localmente como Ganga Talao, un lago de cráter considerado por la comunidad hindú mauriciana como espiritualmente conectado con el Ganges indio. Cada año, durante el festival de Maha Shivaratri, cientos de miles de peregrinos convergen a pie desde toda la isla, convirtiendo este lugar en el mayor punto de reunión hindú fuera de India y Nepal.",
        galleryImages: `${R2}/journeys/maurice-grandbassin-gallery1.jpg,${R2}/journeys/maurice-grandbassin-gallery2.jpg,${R2}/journeys/maurice-grandbassin-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Le lac sacré et ses temples",
            titleEn: "The sacred lake and its temples",
            titleEs: "El lago sagrado y sus templos",
            description:
              "Visite du lac de Grand Bassin et de ses temples colorés dédiés à Shiva, dont une statue haute de plus de trente mètres domine le site, l'une des plus hautes statues hindoues hors d'Inde.",
            descriptionEn:
              "A visit to Grand Bassin lake and its colourful temples dedicated to Shiva, including a statue over thirty metres tall dominating the site, one of the tallest Hindu statues outside India.",
            descriptionEs:
              "Visita al lago de Grand Bassin y sus coloridos templos dedicados a Shiva, entre ellos una estatua de más de treinta metros de altura que domina el lugar, una de las estatuas hindúes más altas fuera de India.",
            image: `${R2}/journeys/maurice-grandbassin-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Plantations de thé et route panoramique",
            titleEn: "Tea plantations and a scenic road",
            titleEs: "Plantaciones de té y ruta panorámica",
            description:
              "Visite d'une plantation de thé dans les hauteurs de Bois Chéri, dégustation face à un panorama sur le sud sauvage de l'île, puis route jusqu'aux gorges de la Rivière Noire pour un coucher de soleil sur la côte.",
            descriptionEn:
              "A visit to a tea plantation in the Bois Chéri highlands, a tasting with a view over the island's wild south, then a drive to the Black River Gorges for a coastal sunset.",
            descriptionEs:
              "Visita a una plantación de té en las alturas de Bois Chéri, degustación frente a un panorama sobre el sur salvaje de la isla, y ruta hasta las gargantas del Río Negro para un atardecer sobre la costa.",
            image: `${R2}/journeys/maurice-grandbassin-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'île aux Cerfs",
        titleEn: "Île aux Cerfs",
        titleEs: "La isla de los Ciervos",
        intro:
          "Route vers la côte est et embarquement pour l'île aux Cerfs, îlot de sable blanc entouré d'un lagon peu profond, longtemps réservé à la chasse aux cerfs introduits par les colons hollandais avant de devenir l'une des destinations balnéaires les plus prisées de l'île. Le parcours de golf conçu par Bernhard Langer, seul terrain insulaire de ce type dans l'océan Indien, complète une offre entièrement tournée vers la détente.",
        introEn:
          "The road to the east coast and departure for Île aux Cerfs, a white-sand islet surrounded by a shallow lagoon, long reserved for hunting the deer introduced by Dutch colonists before becoming one of the island's most sought-after beach destinations. A golf course designed by Bernhard Langer, the only island course of its kind in the Indian Ocean, rounds out an offering entirely geared toward relaxation.",
        introEs:
          "Ruta hacia la costa este y embarque hacia la isla de los Ciervos, islote de arena blanca rodeado de una laguna poco profunda, reservado durante mucho tiempo a la caza de los ciervos introducidos por los colonos holandeses antes de convertirse en uno de los destinos de playa más solicitados de la isla. El campo de golf diseñado por Bernhard Langer, único campo insular de este tipo en el océano Índico, completa una oferta enteramente orientada al descanso.",
        galleryImages: `${R2}/journeys/maurice-iledescerfs-gallery1.jpg,${R2}/journeys/maurice-iledescerfs-gallery2.jpg,${R2}/journeys/maurice-iledescerfs-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Traversée et plage de l'île aux Cerfs",
            titleEn: "The crossing and Île aux Cerfs beach",
            titleEs: "Travesía y playa de la isla de los Ciervos",
            description:
              "Traversée en bateau vers l'île aux Cerfs, journée de plage dans le lagon peu profond, déjeuner de fruits de mer les pieds dans le sable face à la barrière de corail.",
            descriptionEn:
              "A boat crossing to Île aux Cerfs, a beach day in the shallow lagoon, a seafood lunch with feet in the sand facing the coral reef.",
            descriptionEs:
              "Travesía en barco hasta la isla de los Ciervos, día de playa en la laguna poco profunda, almuerzo de marisco con los pies en la arena frente a la barrera de coral.",
            image: `${R2}/journeys/maurice-iledescerfs-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La cascade Vacoas et retour",
            titleEn: "Vacoas waterfall and the return",
            titleEs: "La cascada Vacoas y regreso",
            description:
              "Excursion en bateau vers la cascade GRSE, qui se jette directement dans le lagon depuis une falaise voisine, avant le retour vers la côte est en fin de journée.",
            descriptionEn:
              "A boat excursion to GRSE waterfall, which plunges directly into the lagoon from a nearby cliff, before the return to the east coast at the end of the day.",
            descriptionEs:
              "Excursión en barco hacia la cascada GRSE, que cae directamente a la laguna desde un acantilado cercano, antes del regreso a la costa este al final del día.",
            image: `${R2}/journeys/maurice-iledescerfs-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "reunion",
    tour: {
      name: "La Réunion : la côte sauvage du Sud et les baleines de Saint-Leu",
      nameEn: "Réunion: The Wild South Coast and the Whales of Saint-Leu",
      nameEs: "La Reunión: la costa salvaje del Sur y las ballenas de Saint-Leu",
      slug: "reunion-sud-sauvage-saintleu",
      image: `${R2}/journeys/reunion-sudsauvage-saintleu-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des coulées de lave qui plongent directement dans l'océan, puis des baleines à bosse visibles depuis le rivage",
      taglineEn: "Lava flows plunging straight into the ocean, then humpback whales visible from the shore",
      taglineEs: "Coladas de lava que se sumergen directamente en el océano, y después ballenas jorobadas visibles desde la orilla",
      description:
        "Un voyage le long des côtes de La Réunion, entre le Sud Sauvage, où les coulées de lave du Piton de la Fournaise ont façonné un littoral noir et déchiqueté ponctué de la statue de la Vierge au Parasol, et Saint-Leu sur la côte ouest, l'un des meilleurs points d'observation au monde pour les baleines à bosse qui viennent mettre bas dans les eaux calmes du lagon entre juillet et octobre.",
      descriptionEn:
        "A journey along Réunion's coastline, between the Sud Sauvage, where lava flows from Piton de la Fournaise have shaped a jagged black shoreline dotted with the Vierge au Parasol statue, and Saint-Leu on the west coast, one of the best places in the world to observe humpback whales that come to calve in the lagoon's calm waters between July and October.",
      descriptionEs:
        "Un viaje a lo largo de las costas de La Reunión, entre el Sud Sauvage, donde las coladas de lava del Piton de la Fournaise han modelado un litoral negro y escarpado salpicado por la estatua de la Vierge au Parasol, y Saint-Leu en la costa oeste, uno de los mejores lugares del mundo para observar ballenas jorobadas que acuden a parir en las aguas tranquilas de la laguna entre julio y octubre.",
      price: 2700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Juil à oct",
      whenLabelEn: "July to Oct",
      whenLabelEs: "Jul a oct",
      bestMonths: "july,august,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 77,
    },
    chapters: [
      {
        title: "Le Sud Sauvage",
        titleEn: "The Sud Sauvage",
        titleEs: "El Sud Sauvage",
        intro:
          "Premier chapitre le long du Sud Sauvage, littoral façonné par plusieurs siècles de coulées de lave du Piton de la Fournaise qui se jettent directement dans l'océan Indien. La statue de la Vierge au Parasol, érigée sur un piton rocheux entouré d'embruns à Sainte-Rose, doit sa préservation à une éruption de 1977 qui s'est arrêtée aux portes de l'église voisine, un événement resté gravé dans la mémoire locale.",
        introEn:
          "The first chapter unfolds along the Sud Sauvage, a coastline shaped by centuries of lava flows from Piton de la Fournaise plunging straight into the Indian Ocean. The statue of the Vierge au Parasol, erected on a rocky spur surrounded by sea spray at Sainte-Rose, owes its preservation to a 1977 eruption that stopped at the doors of the neighbouring church, an event still etched in local memory.",
        introEs:
          "El primer capítulo se desarrolla a lo largo del Sud Sauvage, un litoral moldeado por siglos de coladas de lava del Piton de la Fournaise que caen directamente al océano Índico. La estatua de la Vierge au Parasol, erigida en un peñasco rodeado de espuma en Sainte-Rose, debe su conservación a una erupción de 1977 que se detuvo en las puertas de la iglesia vecina, un episodio que sigue grabado en la memoria local.",
        galleryImages: `${R2}/journeys/reunion-sudsauvage-gallery1.jpg,${R2}/journeys/reunion-sudsauvage-gallery2.jpg,${R2}/journeys/reunion-sudsauvage-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Les coulées de lave de 2007",
            titleEn: "The 2007 lava flows",
            titleEs: "Las coladas de lava de 2007",
            description:
              "Randonnée le long du littoral de Piton Sainte-Rose, sur les coulées de lave figées de l'éruption de 2007, qui ont ajouté plusieurs hectares de terre noire à l'île en quelques semaines seulement.",
            descriptionEn:
              "A hike along the Piton Sainte-Rose coastline, over the frozen lava flows from the 2007 eruption, which added several hectares of black land to the island in just a few weeks.",
            descriptionEs:
              "Caminata por el litoral de Piton Sainte-Rose, sobre las coladas de lava solidificada de la erupción de 2007, que añadieron varias hectáreas de tierra negra a la isla en solo unas semanas.",
            image: `${R2}/journeys/reunion-sudsauvage-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La Vierge au Parasol et Grand Anse",
            titleEn: "The Vierge au Parasol and Grand Anse",
            titleEs: "La Vierge au Parasol y Grand Anse",
            description:
              "Visite de la statue de la Vierge au Parasol, épargnée par l'éruption de 1977, puis après-midi à Grand Anse, l'une des rares plages de sable blanc du sud de l'île, aménagée avec une piscine naturelle protégée des courants.",
            descriptionEn:
              "A visit to the Vierge au Parasol statue, spared by the 1977 eruption, then an afternoon at Grand Anse, one of the rare white-sand beaches in the island's south, fitted with a natural pool sheltered from the currents.",
            descriptionEs:
              "Visita a la estatua de la Vierge au Parasol, respetada por la erupción de 1977, y tarde en Grand Anse, una de las escasas playas de arena blanca del sur de la isla, con una piscina natural protegida de las corrientes.",
            image: `${R2}/journeys/reunion-sudsauvage-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Saint-Leu et les baleines à bosse",
        titleEn: "Saint-Leu and the Humpback Whales",
        titleEs: "Saint-Leu y las ballenas jorobadas",
        intro:
          "Route vers Saint-Leu, sur la côte ouest plus abritée de l'île, où les baleines à bosse viennent chaque année entre juillet et octobre mettre bas et allaiter leurs baleineaux dans des eaux calmes avant de repartir vers l'Antarctique. La proximité du lagon avec la côte permet des observations depuis le rivage, tandis que des sorties en bateau encadrées par une charte d'approche stricte offrent des rencontres plus rapprochées.",
        introEn:
          "The road to Saint-Leu, on the island's more sheltered west coast, where humpback whales come every year between July and October to calve and nurse their young in calm waters before heading back to Antarctica. The lagoon's proximity to the coast allows observation from the shore, while boat outings governed by a strict approach charter offer closer encounters.",
        introEs:
          "Ruta hacia Saint-Leu, en la costa oeste más resguardada de la isla, donde las ballenas jorobadas acuden cada año entre julio y octubre a parir y amamantar a sus crías en aguas tranquilas antes de partir de nuevo hacia la Antártida. La cercanía de la laguna a la costa permite la observación desde la orilla, mientras que las salidas en barco, regidas por una estricta carta de aproximación, ofrecen encuentros más cercanos.",
        galleryImages: `${R2}/journeys/reunion-saintleu-gallery1.jpg,${R2}/journeys/reunion-saintleu-gallery2.jpg,${R2}/journeys/reunion-saintleu-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 50,
        days: [
          {
            dayNumber: 1,
            title: "Observation des baleines depuis le rivage",
            titleEn: "Whale watching from the shore",
            titleEs: "Observación de ballenas desde la orilla",
            description:
              "Matinée d'observation des baleines à bosse depuis les points de vue de la côte de Saint-Leu, où les sauts et les jets d'eau restent visibles à l'œil nu depuis le rivage entre juillet et octobre.",
            descriptionEn:
              "A morning of humpback whale watching from Saint-Leu's coastal viewpoints, where breaches and spouts remain visible to the naked eye from the shore between July and October.",
            descriptionEs:
              "Mañana de observación de ballenas jorobadas desde los miradores de la costa de Saint-Leu, donde los saltos y chorros de agua siguen siendo visibles a simple vista desde la orilla entre julio y octubre.",
            image: `${R2}/journeys/reunion-saintleu-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sortie en bateau à la rencontre des baleines",
            titleEn: "A boat outing to meet the whales",
            titleEs: "Salida en barco al encuentro de las ballenas",
            description:
              "Sortie en bateau encadrée par une charte d'observation stricte, à la recherche des baleines à bosse et de leurs baleineaux, avant un dernier après-midi de snorkeling dans le lagon protégé de Saint-Leu.",
            descriptionEn:
              "A boat outing governed by a strict observation charter, in search of humpback whales and their calves, before one last snorkelling afternoon in the protected Saint-Leu lagoon.",
            descriptionEs:
              "Salida en barco regida por una estricta carta de observación, en busca de ballenas jorobadas y sus crías, antes de una última tarde de esnórquel en la laguna protegida de Saint-Leu.",
            image: `${R2}/journeys/reunion-saintleu-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "maldives",
    tour: {
      name: "Maldives : croisière de plongée en liveaboard",
      nameEn: "Maldives: A Liveaboard Diving Cruise",
      nameEs: "Maldivas: crucero de buceo en liveaboard",
      slug: "maldives-liveaboard",
      image: `${R2}/tours/maldives-liveaboard.jpg`,
      images: `${R2}/trips/maldives-liveaboard-gallery-1.jpg,${R2}/trips/maldives-liveaboard-gallery-2.jpg,${R2}/trips/maldives-liveaboard-gallery-3.jpg,${R2}/trips/maldives-liveaboard-gallery-4.jpg,${R2}/trips/maldives-liveaboard-gallery-5.jpg,${R2}/trips/maldives-liveaboard-gallery-6.jpg`,
      tagline: "Un bateau pour seul hôtel, et un atoll différent chaque matin au réveil",
      taglineEn: "A boat as your only hotel, and a different atoll to wake up to every morning",
      taglineEs: "Un barco como único hotel, y un atolón distinto cada mañana al despertar",
      description:
        "Une croisière en liveaboard permet d'explorer plusieurs atolls maldiviens en une semaine, là où un séjour en resort limite l'exploration à un seul lagon. Les canaux entre atolls, appelés kandus, concentrent des courants riches en nutriments qui attirent requins-baleines, raies manta et bancs de requins gris, dans des sites de plongée souvent inaccessibles depuis la terre ferme.",
      descriptionEn:
        "A liveaboard cruise allows exploration of several Maldivian atolls in a single week, where a resort stay limits exploration to a single lagoon. The channels between atolls, called kandus, concentrate nutrient-rich currents that attract whale sharks, manta rays, and schools of grey reef sharks, at dive sites often inaccessible from land.",
      descriptionEs:
        "Un crucero en liveaboard permite explorar varios atolones maldivos en una semana, mientras que una estancia en un resort limita la exploración a una sola laguna. Los canales entre atolones, llamados kandus, concentran corrientes ricas en nutrientes que atraen tiburones ballena, mantarrayas y bancos de tiburones grises, en lugares de buceo a menudo inaccesibles desde tierra firme.",
      price: 5200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      whenLabel: "Nov à avril",
      whenLabelEn: "Nov to April",
      whenLabelEs: "Nov a abril",
      bestMonths: "november,december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 78,
    },
    sections: [
      {
        heading: "Les kandus et leurs courants poissonneux",
        headingEn: "The kandus and their fish-rich currents",
        headingEs: "Los kandus y sus corrientes ricas en peces",
        body:
          "Les kandus, canaux naturels séparant les atolls, concentrent une vie marine exceptionnelle grâce aux courants qui y circulent en continu. Les plongées dérivantes qui s'y pratiquent permettent d'observer, selon la saison, des bancs de centaines de requins gris de récif, des raies aigles et parfois des requins-marteaux au large des zones les plus profondes.",
        bodyEn:
          "The kandus, natural channels separating the atolls, concentrate exceptional marine life thanks to the currents that flow through them continuously. The drift dives practised there allow sightings, depending on the season, of schools of hundreds of grey reef sharks, eagle rays, and sometimes hammerhead sharks off the deeper zones.",
        bodyEs:
          "Los kandus, canales naturales que separan los atolones, concentran una vida marina excepcional gracias a las corrientes que circulan por ellos de forma continua. Las inmersiones de deriva que se practican allí permiten observar, según la temporada, bancos de cientos de tiburones grises de arrecife, rayas águila y a veces tiburones martillo frente a las zonas más profundas.",
      },
      {
        heading: "Requins-baleines et raies manta",
        headingEn: "Whale sharks and manta rays",
        headingEs: "Tiburones ballena y mantarrayas",
        body:
          "L'atoll de Baa, réserve de biosphère classée par l'UNESCO, et le sud de l'atoll d'Ari comptent parmi les meilleurs sites au monde pour nager aux côtés de raies manta venues se nourrir sur des stations de nettoyage naturelles, ainsi que de requins-baleines présents toute l'année dans certaines zones, une rareté pour cette espèce généralement migratrice.",
        bodyEn:
          "Baa Atoll, a UNESCO-listed biosphere reserve, and the south of Ari Atoll rank among the best places in the world to swim alongside manta rays that come to feed at natural cleaning stations, as well as whale sharks present year-round in certain areas, a rarity for a species that is generally migratory.",
        bodyEs:
          "El atolón de Baa, reserva de biosfera declarada por la UNESCO, y el sur del atolón de Ari se cuentan entre los mejores lugares del mundo para nadar junto a mantarrayas que acuden a alimentarse en estaciones de limpieza naturales, además de tiburones ballena presentes todo el año en ciertas zonas, una rareza para una especie generalmente migratoria.",
      },
    ],
    hotels: [
      {
        name: "Cabine Deluxe à bord du MV Emperor Serenity",
        nameEn: "Deluxe Cabin aboard the MV Emperor Serenity",
        nameEs: "Camarote Deluxe a bordo del MV Emperor Serenity",
        description:
          "Une cabine climatisée avec hublot à bord d'un bateau de croisière dédié à la plongée, pont supérieur aménagé pour la détente entre deux plongées.",
        descriptionEn:
          "An air-conditioned cabin with a porthole aboard a dedicated dive cruise boat, an upper deck fitted out for relaxing between dives.",
        descriptionEs:
          "Un camarote climatizado con ojo de buey a bordo de un barco de crucero dedicado al buceo, cubierta superior acondicionada para relajarse entre inmersiones.",
        image: `${R2}/trips/maldives-liveaboard-hotel-serenity.jpg`,
      },
      {
        name: "Suite Panoramique à bord du Carpe Diem",
        nameEn: "Panoramic Suite aboard the Carpe Diem",
        nameEs: "Suite Panorámica a bordo del Carpe Diem",
        description:
          "Une suite plus spacieuse avec grandes fenêtres, à bord d'un bateau plus intimiste limité à un nombre restreint de plongeurs par croisière.",
        descriptionEn:
          "A more spacious suite with large windows, aboard a more intimate boat limited to a small number of divers per cruise.",
        descriptionEs:
          "Una suite más espaciosa con grandes ventanales, a bordo de un barco más íntimo limitado a un número reducido de buceadores por crucero.",
        image: `${R2}/trips/maldives-liveaboard-hotel-carpediem.jpg`,
      },
    ],
  },
  {
    destinationSlug: "seychelles",
    tour: {
      name: "Seychelles : Silhouette, l'île sanctuaire",
      nameEn: "Seychelles: Silhouette, the Sanctuary Island",
      nameEs: "Seychelles: Silhouette, la isla santuario",
      slug: "seychelles-silhouette",
      image: `${R2}/tours/seychelles-silhouette.jpg`,
      images: `${R2}/trips/seychelles-silhouette-gallery-1.jpg,${R2}/trips/seychelles-silhouette-gallery-2.jpg,${R2}/trips/seychelles-silhouette-gallery-3.jpg,${R2}/trips/seychelles-silhouette-gallery-4.jpg,${R2}/trips/seychelles-silhouette-gallery-5.jpg,${R2}/trips/seychelles-silhouette-gallery-6.jpg`,
      tagline: "Une île presque entièrement classée parc national, où les tortues géantes se déplacent encore librement",
      taglineEn: "An island almost entirely classified as national park, where giant tortoises still roam freely",
      taglineEs: "Una isla casi enteramente declarada parque nacional, donde las tortugas gigantes todavía se desplazan en libertad",
      description:
        "L'île de Silhouette, troisième plus grande des Seychelles, est protégée à plus de quatre-vingt-dix pour cent par le statut de parc national, ce qui en fait l'une des îles les mieux préservées de l'océan Indien. Ses pitons de granite couverts de forêt tropicale primaire, encore largement inexplorés scientifiquement jusque dans les années 1990, abritent des espèces endémiques que l'on ne trouve nulle part ailleurs, tandis que des tortues géantes d'Aldabra, réintroduites avec succès, se déplacent en liberté sur l'île.",
      descriptionEn:
        "Silhouette Island, the third largest in the Seychelles, is over ninety percent protected as a national park, making it one of the best-preserved islands in the Indian Ocean. Its granite peaks covered in primary rainforest, still largely scientifically unexplored until the 1990s, shelter endemic species found nowhere else, while successfully reintroduced Aldabra giant tortoises roam freely across the island.",
      descriptionEs:
        "La isla de Silhouette, la tercera más grande de las Seychelles, está protegida en más de un noventa por ciento bajo el estatuto de parque nacional, lo que la convierte en una de las islas mejor conservadas del océano Índico. Sus picos de granito cubiertos de selva tropical primaria, todavía en gran parte inexplorados científicamente hasta la década de 1990, albergan especies endémicas que no se encuentran en ningún otro lugar, mientras que tortugas gigantes de Aldabra, reintroducidas con éxito, se desplazan en libertad por la isla.",
      price: 5800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Avril-mai | Oct-nov",
      whenLabelEn: "April-May | Oct-Nov",
      whenLabelEs: "Abr-mayo | oct-nov",
      bestMonths: "april,may,october,november",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 2,
      featured: false,
      order: 79,
    },
    sections: [
      {
        heading: "La forêt primaire et ses pitons de granite",
        headingEn: "The primary forest and its granite peaks",
        headingEs: "El bosque primario y sus picos de granito",
        body:
          "Les sentiers de randonnée de Silhouette traversent une forêt tropicale primaire classée parmi les mieux conservées de l'océan Indien, où subsistent des espèces végétales et animales endémiques encore mal recensées. L'ascension du Mont Dauban, point culminant de l'île, offre une vue à trois cent soixante degrés sur l'archipel environnant, récompense d'une randonnée exigeante à travers une végétation dense.",
        bodyEn:
          "Silhouette's hiking trails cross primary rainforest ranked among the best-preserved in the Indian Ocean, home to endemic plant and animal species still poorly documented. The climb up Mont Dauban, the island's highest point, offers a three-hundred-sixty-degree view over the surrounding archipelago, the reward for a demanding hike through dense vegetation.",
        bodyEs:
          "Los senderos de Silhouette atraviesan un bosque tropical primario considerado entre los mejor conservados del océano Índico, donde sobreviven especies vegetales y animales endémicas todavía poco documentadas. La ascensión al Mont Dauban, el punto más alto de la isla, ofrece una vista de trescientos sesenta grados sobre el archipiélago circundante, recompensa de una caminata exigente a través de una vegetación densa.",
      },
      {
        heading: "Les tortues géantes en liberté",
        headingEn: "The free-roaming giant tortoises",
        headingEs: "Las tortugas gigantes en libertad",
        body:
          "Une population de tortues géantes d'Aldabra, réintroduites sur l'île depuis plusieurs décennies, se déplace librement sur Silhouette, offrant des rencontres inattendues au détour des sentiers. Le centre de recherche marine de l'île, actif depuis 2001, mène des programmes de restauration corallienne que les visiteurs peuvent découvrir lors de sessions d'information organisées ponctuellement.",
        bodyEn:
          "A population of Aldabra giant tortoises, reintroduced to the island decades ago, roams freely across Silhouette, offering unexpected encounters along the trails. The island's marine research centre, active since 2001, runs coral restoration programmes that visitors can learn about during occasional information sessions.",
        bodyEs:
          "Una población de tortugas gigantes de Aldabra, reintroducidas en la isla hace décadas, se desplaza libremente por Silhouette, ofreciendo encuentros inesperados en los senderos. El centro de investigación marina de la isla, activo desde 2001, lleva a cabo programas de restauración coralina que los visitantes pueden conocer en sesiones informativas organizadas puntualmente.",
      },
    ],
    hotels: [
      {
        name: "Hilton Seychelles Labriz Resort & Spa",
        nameEn: "Hilton Seychelles Labriz Resort & Spa",
        nameEs: "Hilton Seychelles Labriz Resort & Spa",
        description:
          "Le seul grand établissement de l'île, villas dispersées dans la végétation tropicale en bord de plage, accès direct aux sentiers du parc national.",
        descriptionEn:
          "The island's only large property, villas scattered through tropical vegetation on the beachfront, direct access to the national park's trails.",
        descriptionEs:
          "El único gran establecimiento de la isla, villas dispersas entre la vegetación tropical frente a la playa, acceso directo a los senderos del parque nacional.",
        image: `${R2}/trips/seychelles-silhouette-hotel-labriz.jpg`,
      },
      {
        name: "Auberge de la Forêt",
        nameEn: "Auberge de la Forêt",
        nameEs: "Auberge de la Forêt",
        description:
          "Un petit établissement familial plus simple, niché en lisière de forêt, tenu par l'une des familles installées sur l'île depuis plusieurs générations.",
        descriptionEn:
          "A simpler small family-run property, tucked at the forest's edge, run by one of the families settled on the island for generations.",
        descriptionEs:
          "Un pequeño establecimiento familiar más sencillo, situado al borde del bosque, gestionado por una de las familias instaladas en la isla desde hace generaciones.",
        image: `${R2}/trips/seychelles-silhouette-hotel-foret.jpg`,
      },
    ],
  },
  {
    destinationSlug: "maurice",
    tour: {
      name: "Île Maurice : Rodrigues, l'autre île",
      nameEn: "Mauritius: Rodrigues, the Other Island",
      nameEs: "Isla Mauricio: Rodrigues, la otra isla",
      slug: "maurice-rodrigues",
      image: `${R2}/tours/maurice-rodrigues.jpg`,
      images: `${R2}/trips/maurice-rodrigues-gallery-1.jpg,${R2}/trips/maurice-rodrigues-gallery-2.jpg,${R2}/trips/maurice-rodrigues-gallery-3.jpg,${R2}/trips/maurice-rodrigues-gallery-4.jpg,${R2}/trips/maurice-rodrigues-gallery-5.jpg,${R2}/trips/maurice-rodrigues-gallery-6.jpg`,
      tagline: "Une île sœur à cinq cents kilomètres au large, où le temps semble s'être arrêté il y a plusieurs décennies",
      taglineEn: "A sister island five hundred kilometres offshore, where time seems to have stopped decades ago",
      taglineEs: "Una isla hermana a quinientos kilómetros mar adentro, donde el tiempo parece haberse detenido hace varias décadas",
      description:
        "Rodrigues, dépendance autonome de l'île Maurice située à cinq cents kilomètres au large, cultive une identité culturelle distincte, plus proche des traditions créoles rurales que du rythme touristique de l'île principale. Le lagon, l'un des plus vastes de l'océan Indien, se découvre en pêchant l'ourite (poulpe local) aux côtés des femmes rodriguaises qui perpétuent cette pratique ancestrale à marée basse.",
      descriptionEn:
        "Rodrigues, an autonomous dependency of Mauritius located five hundred kilometres offshore, cultivates a distinct cultural identity, closer to rural Creole traditions than the main island's tourist pace. The lagoon, one of the largest in the Indian Ocean, is explored by octopus fishing alongside Rodriguan women who keep alive this ancestral practice at low tide.",
      descriptionEs:
        "Rodrigues, dependencia autónoma de la isla Mauricio situada a quinientos kilómetros mar adentro, cultiva una identidad cultural propia, más cercana a las tradiciones criollas rurales que al ritmo turístico de la isla principal. La laguna, una de las más extensas del océano Índico, se descubre pescando pulpo junto a las mujeres rodriguesas que perpetúan esta práctica ancestral con marea baja.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mai à oct",
      whenLabelEn: "May to Oct",
      whenLabelEs: "May a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 80,
    },
    sections: [
      {
        heading: "La pêche à l'ourite dans le lagon",
        headingEn: "Octopus fishing in the lagoon",
        headingEs: "La pesca del pulpo en la laguna",
        body:
          "Le lagon de Rodrigues, l'un des plus vastes de l'océan Indien avec plus de deux cents kilomètres carrés, s'assèche partiellement à marée basse, révélant des étendues où les femmes de l'île pêchent l'ourite à l'aide d'une simple tige métallique, selon une méthode transmise de génération en génération. Une sortie accompagnée permet de s'initier à cette pêche traditionnelle, aussi bien technique que sociale.",
        bodyEn:
          "Rodrigues's lagoon, one of the largest in the Indian Ocean at over two hundred square kilometres, partly dries out at low tide, revealing expanses where the island's women fish for octopus using a simple metal rod, following a method passed down through generations. An accompanied outing offers an introduction to this traditional fishing practice, as much technical as it is social.",
        bodyEs:
          "La laguna de Rodrigues, una de las más extensas del océano Índico con más de doscientos kilómetros cuadrados, se seca parcialmente con la marea baja, dejando al descubierto extensiones donde las mujeres de la isla pescan pulpo con una simple varilla metálica, según un método transmitido de generación en generación. Una salida acompañada permite iniciarse en esta pesca tradicional, tan técnica como social.",
      },
      {
        heading: "François Leguat et les tortues géantes",
        headingEn: "François Leguat and the giant tortoises",
        headingEs: "François Leguat y las tortugas gigantes",
        body:
          "La réserve naturelle François Leguat, aménagée dans une ancienne plantation reconvertie en sanctuaire, réintroduit des tortues géantes d'Aldabra dans un écosystème qui a perdu ses espèces endémiques après la colonisation. Les grottes calcaires voisines, creusées par les eaux souterraines, se visitent lors d'une randonnée guidée à travers des galeries encore largement inexplorées.",
        bodyEn:
          "The François Leguat Giant Tortoise Reserve, set up in a former plantation converted into a sanctuary, reintroduces Aldabra giant tortoises into an ecosystem that lost its endemic species after colonisation. The nearby limestone caves, carved out by underground water, are visited on a guided hike through galleries still largely unexplored.",
        bodyEs:
          "La reserva natural François Leguat, instalada en una antigua plantación reconvertida en santuario, reintroduce tortugas gigantes de Aldabra en un ecosistema que perdió sus especies endémicas tras la colonización. Las cuevas calizas cercanas, excavadas por aguas subterráneas, se visitan en una caminata guiada por galerías todavía en gran parte inexploradas.",
      },
    ],
    hotels: [
      {
        name: "Tekoma Boutique Hotel",
        nameEn: "Tekoma Boutique Hotel",
        nameEs: "Tekoma Boutique Hotel",
        description:
          "Un hôtel de charme en bord de lagon, chambres avec vue sur l'eau, restaurant mettant à l'honneur la cuisine créole rodriguaise à base de poisson et d'ourite.",
        descriptionEn:
          "A boutique hotel on the lagoon's edge, rooms overlooking the water, a restaurant showcasing Rodriguan Creole cuisine based on fish and octopus.",
        descriptionEs:
          "Un hotel con encanto a orillas de la laguna, habitaciones con vistas al agua, restaurante que destaca la cocina criolla rodriguesa a base de pescado y pulpo.",
        image: `${R2}/trips/maurice-rodrigues-hotel-tekoma.jpg`,
      },
      {
        name: "Cotton Bay Hotel",
        nameEn: "Cotton Bay Hotel",
        nameEs: "Cotton Bay Hotel",
        description:
          "Un hôtel familial en bord de plage sur la côte est, plus simple, entouré de dunes et de filaos, accès direct à l'une des plus belles plages de l'île.",
        descriptionEn:
          "A family-run beachfront hotel on the east coast, simpler, surrounded by dunes and casuarina trees, direct access to one of the island's most beautiful beaches.",
        descriptionEs:
          "Un hotel familiar frente a la playa en la costa este, más sencillo, rodeado de dunas y casuarinas, acceso directo a una de las playas más bellas de la isla.",
        image: `${R2}/trips/maurice-rodrigues-hotel-cottonbay.jpg`,
      },
    ],
  },
  {
    destinationSlug: "reunion",
    tour: {
      name: "La Réunion : le cirque de Cilaos, thermes et vignoble d'altitude",
      nameEn: "Réunion: The Cilaos Cirque, Thermal Baths and High-Altitude Vineyard",
      nameEs: "La Reunión: el circo de Cilaos, termas y viñedo de altitud",
      slug: "reunion-cilaos",
      image: `${R2}/tours/reunion-cilaos.jpg`,
      images: `${R2}/trips/reunion-cilaos-gallery-1.jpg,${R2}/trips/reunion-cilaos-gallery-2.jpg,${R2}/trips/reunion-cilaos-gallery-3.jpg,${R2}/trips/reunion-cilaos-gallery-4.jpg,${R2}/trips/reunion-cilaos-gallery-5.jpg,${R2}/trips/reunion-cilaos-gallery-6.jpg`,
      tagline: "Deux cent quarante virages pour y accéder, un vignoble à mille deux cents mètres et des thermes qui attirent les curistes depuis 1896",
      taglineEn: "Two hundred and forty bends to get there, a vineyard at twelve hundred metres, and thermal baths drawing visitors since 1896",
      taglineEs: "Doscientas cuarenta curvas para llegar, un viñedo a mil doscientos metros y unas termas que atraen a curistas desde 1896",
      description:
        "Le cirque de Cilaos, troisième cirque volcanique de La Réunion après Salazie et Mafate, se distingue par son accès routier — une route de montagne comptant plus de deux cents virages construite au prix d'efforts considérables dans les années 1930 — et par ses sources thermales, exploitées depuis la fin du XIXe siècle. Le village, niché à plus de mille mètres d'altitude, cultive l'une des rares vignes de l'océan Indien et perpétue une tradition de broderie fine reconnue dans toute la France.",
      descriptionEn:
        "The Cilaos cirque, the third volcanic cirque on Réunion after Salazie and Mafate, stands out for its road access — a mountain road with over two hundred bends, built at considerable effort in the 1930s — and for its thermal springs, exploited since the late 19th century. The village, nestled over a thousand metres up, grows one of the Indian Ocean's rare vineyards and keeps alive a fine embroidery tradition recognised throughout France.",
      descriptionEs:
        "El circo de Cilaos, el tercer circo volcánico de La Reunión después de Salazie y Mafate, destaca por su acceso por carretera, una ruta de montaña con más de doscientas curvas construida a costa de considerables esfuerzos en la década de 1930, y por sus fuentes termales, explotadas desde finales del siglo XIX. El pueblo, enclavado a más de mil metros de altitud, cultiva uno de los escasos viñedos del océano Índico y perpetúa una tradición de bordado fino reconocida en toda Francia.",
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
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 81,
    },
    sections: [
      {
        heading: "La route aux deux cent quarante virages",
        headingEn: "The road of two hundred and forty bends",
        headingEs: "La carretera de las doscientas cuarenta curvas",
        body:
          "La route qui mène à Cilaos, achevée en 1932 après des années de travaux dans une roche volcanique particulièrement dure, reste l'une des routes de montagne les plus spectaculaires de France, avec plus de deux cents virages sur une trentaine de kilomètres. Le village, encerclé de remparts vertigineux culminant à plus de deux mille cinq cents mètres, ne s'est longtemps révélé accessible que par cette unique voie, façonnant une identité culturelle distincte des autres cirques de l'île.",
        bodyEn:
          "The road to Cilaos, completed in 1932 after years of work through particularly hard volcanic rock, remains one of France's most spectacular mountain roads, with over two hundred bends across roughly thirty kilometres. The village, ringed by dizzying ramparts rising over two thousand five hundred metres, was for a long time accessible only via this single route, shaping a cultural identity distinct from the island's other cirques.",
        bodyEs:
          "La carretera que lleva a Cilaos, terminada en 1932 tras años de obras en una roca volcánica particularmente dura, sigue siendo una de las carreteras de montaña más espectaculares de Francia, con más de doscientas curvas en unos treinta kilómetros. El pueblo, rodeado de murallas vertiginosas que superan los dos mil quinientos metros, solo fue accesible durante mucho tiempo por esta única vía, forjando una identidad cultural distinta a la de los demás circos de la isla.",
      },
      {
        heading: "Les thermes et le vignoble d'altitude",
        headingEn: "The thermal baths and the high-altitude vineyard",
        headingEs: "Las termas y el viñedo de altitud",
        body:
          "Les thermes de Cilaos, exploités depuis 1896, puisent une eau chaude naturellement chargée en minéraux, réputée pour ses vertus contre les rhumatismes, dans un établissement rénové qui accueille curistes et voyageurs de passage. Le vignoble local, cultivé sur des terrasses à plus de mille mètres d'altitude, produit un vin de niche unique dans l'océan Indien, tandis que l'artisanat de la broderie, transmis depuis le XIXe siècle par les religieuses du village, orne encore de nombreux intérieurs créoles.",
        bodyEn:
          "The Cilaos thermal baths, in operation since 1896, draw naturally mineral-rich hot water, renowned for its benefits against rheumatism, in a renovated establishment welcoming both spa-goers and passing travellers. The local vineyard, grown on terraces over a thousand metres up, produces a niche wine unique in the Indian Ocean, while the embroidery craft, passed down since the 19th century by the village's nuns, still adorns many Creole interiors.",
        bodyEs:
          "Las termas de Cilaos, en funcionamiento desde 1896, extraen un agua caliente naturalmente rica en minerales, célebre por sus propiedades contra el reumatismo, en un establecimiento renovado que acoge tanto a curistas como a viajeros de paso. El viñedo local, cultivado en terrazas a más de mil metros de altitud, produce un vino de nicho único en el océano Índico, mientras que el bordado artesanal, transmitido desde el siglo XIX por las religiosas del pueblo, todavía adorna numerosos interiores criollos.",
      },
    ],
    hotels: [
      {
        name: "Le Vieux Cep",
        nameEn: "Le Vieux Cep",
        nameEs: "Le Vieux Cep",
        description:
          "Un hôtel familial au cœur du village de Cilaos, chambres avec vue sur les remparts environnants, restaurant servant une cuisine créole de montagne aux lentilles locales.",
        descriptionEn:
          "A family-run hotel at the heart of Cilaos village, rooms overlooking the surrounding ramparts, a restaurant serving mountain Creole cuisine with local lentils.",
        descriptionEs:
          "Un hotel familiar en el corazón del pueblo de Cilaos, habitaciones con vistas a las murallas circundantes, restaurante que sirve cocina criolla de montaña con lentejas locales.",
        image: `${R2}/trips/reunion-cilaos-hotel-vieuxcep.jpg`,
      },
      {
        name: "Le Relais des Cimes",
        nameEn: "Le Relais des Cimes",
        nameEs: "Le Relais des Cimes",
        description:
          "Un établissement plus simple en surplomb du village, terrasse avec vue panoramique sur le cirque, idéal point de départ pour les randonnées matinales.",
        descriptionEn:
          "A simpler property overlooking the village, a terrace with a panoramic view of the cirque, an ideal starting point for morning hikes.",
        descriptionEs:
          "Un establecimiento más sencillo con vistas al pueblo, terraza con vista panorámica del circo, punto de partida ideal para las caminatas matutinas.",
        image: `${R2}/trips/reunion-cilaos-hotel-relaisdescimes.jpg`,
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
