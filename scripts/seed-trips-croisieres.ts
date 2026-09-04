// New "Croisières" (cruise) theme — Egypt, Greece, USA as standard trips; Norway, Saint Lucia,
// Vietnam as journey trips. Each nests under an EXISTING destination and is tagged
// theme: "cruise", which the /experience-types/croisieres landing page (see
// scripts/create-experience-type-croisieres.ts) surfaces automatically via Tour.theme filter.
// Run with:
//   npx tsx scripts/seed-trips-croisieres.ts
// Requires scripts/upload-images-croisieres.ts to have been run first.

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "norvege",
    tour: {
      name: "Norvège : croisière dans les fjords",
      nameEn: "Norway: A Fjord Cruise",
      nameEs: "Noruega: crucero por los fiordos",
      slug: "norvege-croisiere-fjords",
      image: `${R2}/journeys/norvege-croisiere-fjords-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des parois rocheuses de mille mètres qui plongent directement dans une eau immobile, sculptées par des glaciers depuis l'ère glaciaire",
      taglineEn: "Thousand-metre rock walls plunging straight into still water, carved by glaciers since the Ice Age",
      taglineEs: "Paredes rocosas de mil metros que se sumergen directamente en aguas quietas, esculpidas por glaciares desde la era glaciar",
      description:
        "Une croisière à bord d'un petit navire d'expédition qui se faufile là où les grands paquebots ne passent pas, à travers le Geirangerfjord, classé au patrimoine mondial de l'UNESCO, dont les parois verticales culminent à plus de mille cinq cents mètres et laissent tomber des cascades comme les Sept Sœurs directement dans l'eau du fjord, puis vers les îles Lofoten, archipel de pics dentelés qui émergent abruptement de la mer de Norvège au-delà du cercle polaire arctique.",
      descriptionEn:
        "A cruise aboard a small expedition ship that slips into places the large liners can't reach, through the Geirangerfjord, UNESCO World Heritage listed, whose vertical walls rise over fifteen hundred metres and drop waterfalls such as the Seven Sisters straight into the fjord's water, then on to the Lofoten Islands, an archipelago of jagged peaks rising abruptly from the Norwegian Sea beyond the Arctic Circle.",
      descriptionEs:
        "Un crucero a bordo de un pequeño buque de expedición que se adentra donde los grandes transatlánticos no pueden llegar, a través del Geirangerfjord, declarado Patrimonio de la Humanidad por la UNESCO, cuyas paredes verticales superan los mil quinientos metros y dejan caer cascadas como las Siete Hermanas directamente en el agua del fiordo, y después hacia las islas Lofoten, archipiélago de picos dentados que emergen abruptamente del mar de Noruega más allá del círculo polar ártico.",
      price: 4200,
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
      theme: "cruise",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 226,
    },
    chapters: [
      {
        title: "Le Geirangerfjord et les Sept Sœurs",
        titleEn: "Geirangerfjord and the Seven Sisters",
        titleEs: "El Geirangerfjord y las Siete Hermanas",
        intro:
          "Premier chapitre dans le Geirangerfjord, l'un des fjords les plus spectaculaires de Norvège et classé au patrimoine mondial de l'UNESCO depuis 2005, dont les parois rocheuses verticales s'élèvent à plus de mille cinq cents mètres au-dessus d'une eau d'un vert profond, si étroite par endroits qu'un navire d'expédition peut s'en approcher bien plus près qu'un grand paquebot. La cascade des Sept Sœurs, composée de sept flux distincts qui dévalent la paroi rocheuse côte à côte, fait face de l'autre côté du fjord à la cascade du Prétendant, dont la légende locale veut qu'elle ait tenté sans succès de courtiser les sept sœurs.",
        introEn:
          "The first chapter unfolds in the Geirangerfjord, one of Norway's most spectacular fjords and UNESCO World Heritage listed since 2005, whose vertical rock walls rise over fifteen hundred metres above deep green water, narrow enough in places that an expedition ship can approach far closer than a large liner ever could. The Seven Sisters waterfall, made up of seven distinct streams cascading down the rock face side by side, faces the Suitor waterfall across the fjord, which local legend says tried unsuccessfully to court the seven sisters.",
        introEs:
          "El primer capítulo se desarrolla en el Geirangerfjord, uno de los fiordos más espectaculares de Noruega y declarado Patrimonio de la Humanidad por la UNESCO desde 2005, cuyas paredes rocosas verticales se elevan a más de mil quinientos metros sobre un agua de verde profundo, tan estrecho en algunos puntos que un buque de expedición puede acercarse mucho más que un gran transatlántico. La cascada de las Siete Hermanas, formada por siete corrientes distintas que caen por la pared rocosa una junto a otra, se enfrenta al otro lado del fiordo a la cascada del Pretendiente, que según la leyenda local intentó sin éxito cortejar a las siete hermanas.",
        galleryImages: `${R2}/journeys/norvege-croisiere-ch1-gallery1.jpg,${R2}/journeys/norvege-croisiere-ch1-gallery2.jpg,${R2}/journeys/norvege-croisiere-ch1-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Navigation au pied des Sept Sœurs",
            titleEn: "Sailing beneath the Seven Sisters",
            titleEs: "Navegación al pie de las Siete Hermanas",
            description:
              "Navigation au cœur du Geirangerfjord, au pied de la cascade des Sept Sœurs, dans des eaux si étroites que les parois rocheuses semblent à portée de main.",
            descriptionEn:
              "Sailing through the heart of the Geirangerfjord, beneath the Seven Sisters waterfall, in waters so narrow the rock walls seem within arm's reach.",
            descriptionEs:
              "Navegación por el corazón del Geirangerfjord, al pie de la cascada de las Siete Hermanas, en aguas tan estrechas que las paredes rocosas parecen al alcance de la mano.",
            image: `${R2}/journeys/norvege-croisiere-ch1-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée jusqu'au belvédère de Dalsnibba",
            titleEn: "A hike to the Dalsnibba viewpoint",
            titleEs: "Caminata hasta el mirador de Dalsnibba",
            description:
              "Excursion jusqu'au belvédère de Dalsnibba, à plus de mille cinq cents mètres d'altitude, pour un panorama complet sur le Geirangerfjord depuis les hauteurs.",
            descriptionEn:
              "An excursion to the Dalsnibba viewpoint, over fifteen hundred metres up, for a complete panorama over the Geirangerfjord from above.",
            descriptionEs:
              "Excursión hasta el mirador de Dalsnibba, a más de mil quinientos metros de altitud, para un panorama completo sobre el Geirangerfjord desde las alturas.",
            image: `${R2}/journeys/norvege-croisiere-ch1-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Les îles Lofoten, au-delà du cercle polaire",
        titleEn: "The Lofoten Islands, Beyond the Arctic Circle",
        titleEs: "Las islas Lofoten, más allá del círculo polar",
        intro:
          "Route vers les îles Lofoten, archipel de pics granitiques dentelés qui émergent abruptement de la mer de Norvège à plus de cent kilomètres au-delà du cercle polaire arctique, un relief si saisissant qu'il est visible depuis l'espace. Les villages de pêcheurs traditionnels, comme Reine et Henningsvær, conservent leurs rangées de cabanes rouges sur pilotis appelées rorbuer, construites à l'origine pour loger les pêcheurs venus chaque hiver pour la saison de la morue skrei, une tradition qui perdure depuis le Moyen Âge.",
        introEn:
          "The road to the Lofoten Islands, an archipelago of jagged granite peaks rising abruptly from the Norwegian Sea over a hundred kilometres beyond the Arctic Circle, a relief so striking it is visible from space. Traditional fishing villages such as Reine and Henningsvær retain their rows of red stilted cabins called rorbuer, originally built to house fishermen arriving each winter for the skrei cod season, a tradition that has endured since the Middle Ages.",
        introEs:
          "Ruta hacia las islas Lofoten, archipiélago de picos de granito dentados que emergen abruptamente del mar de Noruega a más de cien kilómetros más allá del círculo polar ártico, un relieve tan llamativo que es visible desde el espacio. Los pueblos de pescadores tradicionales, como Reine y Henningsvær, conservan sus hileras de cabañas rojas sobre pilotes llamadas rorbuer, construidas originalmente para alojar a los pescadores que llegaban cada invierno para la temporada del bacalao skrei, una tradición que perdura desde la Edad Media.",
        galleryImages: `${R2}/journeys/norvege-croisiere-ch2-gallery1.jpg,${R2}/journeys/norvege-croisiere-ch2-gallery2.jpg,${R2}/journeys/norvege-croisiere-ch2-gallery3.jpg`,
        mapMarkerX: 70,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Le village de pêcheurs de Reine",
            titleEn: "The fishing village of Reine",
            titleEs: "El pueblo de pescadores de Reine",
            description:
              "Escale à Reine, village de pêcheurs niché entre pics granitiques et fjord, dont les cabanes rouges sur pilotis comptent parmi les paysages les plus photographiés de Norvège.",
            descriptionEn:
              "A stop in Reine, a fishing village nestled between granite peaks and fjord, whose red stilted cabins rank among Norway's most photographed landscapes.",
            descriptionEs:
              "Escala en Reine, pueblo de pescadores enclavado entre picos de granito y fiordo, cuyas cabañas rojas sobre pilotes se cuentan entre los paisajes más fotografiados de Noruega.",
            image: `${R2}/journeys/norvege-croisiere-ch2-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée jusqu'au sommet de Reinebringen",
            titleEn: "A hike to the summit of Reinebringen",
            titleEs: "Caminata hasta la cima de Reinebringen",
            description:
              "Ascension du Reinebringen par un escalier de plus de dix-huit cents marches en pierre, pour un panorama classé parmi les plus spectaculaires de Norvège sur l'archipel des Lofoten.",
            descriptionEn:
              "An ascent of Reinebringen via a staircase of over eighteen hundred stone steps, for a panorama ranked among Norway's most spectacular over the Lofoten archipelago.",
            descriptionEs:
              "Ascensión al Reinebringen por una escalera de más de mil ochocientos escalones de piedra, para un panorama considerado uno de los más espectaculares de Noruega sobre el archipiélago de Lofoten.",
            image: `${R2}/journeys/norvege-croisiere-ch2-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "sainte-lucie",
    tour: {
      name: "Sainte-Lucie : croisière dans les Caraïbes",
      nameEn: "Saint Lucia: A Caribbean Cruise",
      nameEs: "Santa Lucía: crucero por el Caribe",
      slug: "saintelucie-croisiere-caraibes",
      image: `${R2}/journeys/saintelucie-croisiere-caraibes-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Deux pics volcaniques jumeaux qui plongent directement dans la mer des Caraïbes, puis une île voisine où les voiliers mouillent dans une baie protégée",
      taglineEn: "Twin volcanic peaks plunging straight into the Caribbean Sea, then a neighbouring island where sailboats anchor in a sheltered bay",
      taglineEs: "Dos picos volcánicos gemelos que se sumergen directamente en el mar Caribe, y después una isla vecina donde los veleros fondean en una bahía protegida",
      description:
        "Une croisière à bord d'un petit voilier de charme qui mouille chaque soir dans une baie différente plutôt que d'accoster dans un grand port de croisière, en commençant par les Pitons de Sainte-Lucie, deux flèches volcaniques jumelles classées au patrimoine mondial de l'UNESCO qui plongent directement dans la mer des Caraïbes depuis plus de sept cent cinquante mètres, puis vers l'île voisine de Bequia, dont la baie protégée d'Admiralty Bay reste un mouillage historique pour les voiliers depuis l'époque de la marine à voile.",
      descriptionEn:
        "A cruise aboard a small charming sailing ship that anchors in a different bay each evening rather than docking at a large cruise port, beginning with Saint Lucia's Pitons, twin volcanic spires UNESCO World Heritage listed that plunge straight into the Caribbean Sea from over seven hundred and fifty metres, then on to the neighbouring island of Bequia, whose sheltered Admiralty Bay has remained a historic anchorage for sailing ships since the age of sail.",
      descriptionEs:
        "Un crucero a bordo de un pequeño y encantador velero que fondea cada noche en una bahía distinta en lugar de atracar en un gran puerto de cruceros, comenzando por los Pitones de Santa Lucía, dos agujas volcánicas gemelas declaradas Patrimonio de la Humanidad por la UNESCO que se sumergen directamente en el mar Caribe desde más de setecientos cincuenta metros, y después hacia la isla vecina de Bequia, cuya protegida Admiralty Bay sigue siendo un fondeadero histórico para veleros desde la época de la navegación a vela.",
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
      theme: "cruise",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,groups",
      maxGuests: 6,
      featured: false,
      order: 227,
    },
    chapters: [
      {
        title: "Les Pitons de Sainte-Lucie",
        titleEn: "The Pitons of Saint Lucia",
        titleEs: "Los Pitones de Santa Lucía",
        intro:
          "Premier chapitre au mouillage face aux Pitons de Sainte-Lucie, Gros Piton et Petit Piton, deux flèches volcaniques jumelles vieilles de deux cent mille ans qui plongent directement dans la mer des Caraïbes et furent inscrites au patrimoine mondial de l'UNESCO en 2004 pour leur valeur géologique et biologique exceptionnelle. Les eaux protégées de la réserve marine de Soufrière, qui s'étend au pied des Pitons, comptent parmi les meilleurs sites de plongée et de snorkeling des Petites Antilles, avec des récifs coralliens abritant plus de cent soixante-huit espèces de poissons recensées.",
        introEn:
          "The first chapter anchors facing the Pitons of Saint Lucia, Gros Piton and Petit Piton, twin volcanic spires two hundred thousand years old that plunge straight into the Caribbean Sea and were inscribed on the UNESCO World Heritage list in 2004 for their exceptional geological and biological value. The protected waters of the Soufrière Marine Reserve, stretching at the foot of the Pitons, rank among the finest diving and snorkelling sites in the Lesser Antilles, with coral reefs home to over a hundred and sixty-eight recorded fish species.",
        introEs:
          "El primer capítulo fondea frente a los Pitones de Santa Lucía, Gros Piton y Petit Piton, dos agujas volcánicas gemelas de doscientos mil años de antigüedad que se sumergen directamente en el mar Caribe y fueron inscritas en el Patrimonio de la Humanidad de la UNESCO en 2004 por su excepcional valor geológico y biológico. Las aguas protegidas de la reserva marina de Soufrière, que se extiende al pie de los Pitones, se cuentan entre los mejores lugares de buceo y esnórquel de las Antillas Menores, con arrecifes de coral que albergan más de ciento sesenta y ocho especies de peces registradas.",
        galleryImages: `${R2}/journeys/saintelucie-croisiere-ch1-gallery1.jpg,${R2}/journeys/saintelucie-croisiere-ch1-gallery2.jpg,${R2}/journeys/saintelucie-croisiere-ch1-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Snorkeling dans la réserve marine de Soufrière",
            titleEn: "Snorkelling in the Soufrière Marine Reserve",
            titleEs: "Esnórquel en la reserva marina de Soufrière",
            description:
              "Séance de snorkeling dans la réserve marine de Soufrière, au pied des Pitons, parmi des récifs coralliens abritant plus de cent soixante-huit espèces de poissons recensées.",
            descriptionEn:
              "A snorkelling session in the Soufrière Marine Reserve, at the foot of the Pitons, among coral reefs home to over a hundred and sixty-eight recorded fish species.",
            descriptionEs:
              "Sesión de esnórquel en la reserva marina de Soufrière, al pie de los Pitones, entre arrecifes de coral que albergan más de ciento sesenta y ocho especies de peces registradas.",
            image: `${R2}/journeys/saintelucie-croisiere-ch1-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les sources chaudes volcaniques de Sulphur Springs",
            titleEn: "The volcanic hot springs of Sulphur Springs",
            titleEs: "Las fuentes termales volcánicas de Sulphur Springs",
            description:
              "Excursion jusqu'à Sulphur Springs, volcan accessible en voiture dont les sources chaudes et boues minérales continuent de fumer visiblement à ciel ouvert.",
            descriptionEn:
              "An excursion to Sulphur Springs, a drive-in volcano whose hot springs and mineral mud continue to visibly steam in the open air.",
            descriptionEs:
              "Excursión hasta Sulphur Springs, volcán accesible en coche cuyas fuentes termales y barros minerales siguen humeando visiblemente al aire libre.",
            image: `${R2}/journeys/saintelucie-croisiere-ch1-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Bequia, le mouillage historique des voiliers",
        titleEn: "Bequia, the Historic Sailing Anchorage",
        titleEs: "Bequia, el fondeadero histórico de los veleros",
        intro:
          "Route vers Bequia, petite île des Grenadines dont la baie protégée d'Admiralty Bay reste un mouillage naturel prisé des voiliers depuis l'époque de la marine à voile, une tradition maritime qui perdure aujourd'hui à travers un chantier naval artisanal encore actif où des bateaux en bois sont construits selon des méthodes séculaires. Le village de Port Elizabeth, qui borde la baie, conserve une atmosphère de petit port de pêche préservé du développement touristique de masse qui a transformé la plupart des autres îles des Petites Antilles.",
        introEn:
          "The road to Bequia, a small island in the Grenadines whose sheltered Admiralty Bay remains a favoured natural anchorage for sailing ships since the age of sail, a maritime tradition that continues today through a still-active traditional boatyard where wooden boats are built using centuries-old methods. The village of Port Elizabeth, lining the bay, retains the atmosphere of a small fishing port spared the mass tourist development that has transformed most other islands of the Lesser Antilles.",
        introEs:
          "Ruta hacia Bequia, pequeña isla de las Granadinas cuya protegida Admiralty Bay sigue siendo un fondeadero natural apreciado por los veleros desde la época de la navegación a vela, una tradición marítima que perdura hoy a través de un astillero tradicional todavía activo donde se construyen barcos de madera según métodos centenarios. El pueblo de Port Elizabeth, que bordea la bahía, conserva la atmósfera de un pequeño puerto pesquero al margen del desarrollo turístico de masas que ha transformado la mayoría de las demás islas de las Antillas Menores.",
        galleryImages: `${R2}/journeys/saintelucie-croisiere-ch2-gallery1.jpg,${R2}/journeys/saintelucie-croisiere-ch2-gallery2.jpg,${R2}/journeys/saintelucie-croisiere-ch2-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Le chantier naval artisanal de Bequia",
            titleEn: "Bequia's traditional boatyard",
            titleEs: "El astillero tradicional de Bequia",
            description:
              "Visite du chantier naval artisanal de Bequia, où des bateaux en bois sont encore construits à la main selon des méthodes transmises de génération en génération.",
            descriptionEn:
              "A visit to Bequia's traditional boatyard, where wooden boats are still handbuilt using methods passed down through generations.",
            descriptionEs:
              "Visita al astillero tradicional de Bequia, donde todavía se construyen a mano barcos de madera según métodos transmitidos de generación en generación.",
            image: `${R2}/journeys/saintelucie-croisiere-ch2-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Journée mouillage à Princess Margaret Beach",
            titleEn: "A day at anchor off Princess Margaret Beach",
            titleEs: "Día fondeados frente a Princess Margaret Beach",
            description:
              "Journée de détente au mouillage face à Princess Margaret Beach, plage de sable doré bordée de raisiniers accessible uniquement par bateau ou par un sentier côtier.",
            descriptionEn:
              "A relaxed day at anchor off Princess Margaret Beach, a golden-sand beach lined with sea grape trees accessible only by boat or coastal path.",
            descriptionEs:
              "Día de relax fondeados frente a Princess Margaret Beach, playa de arena dorada bordeada de uvas de mar accesible solo en barco o por un sendero costero.",
            image: `${R2}/journeys/saintelucie-croisiere-ch2-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "vietnam",
    tour: {
      name: "Vietnam : croisière dans la baie d'Ha Long",
      nameEn: "Vietnam: A Ha Long Bay Cruise",
      nameEs: "Vietnam: crucero por la bahía de Ha Long",
      slug: "vietnam-croisiere-halong",
      image: `${R2}/journeys/vietnam-croisiere-halong-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Près de deux mille îles calcaires surgissant d'une mer émeraude, puis une baie voisine où les mêmes pitons se dressent loin des foules",
      taglineEn: "Nearly two thousand limestone islands rising from an emerald sea, then a neighbouring bay where the same karst peaks stand far from the crowds",
      taglineEs: "Casi dos mil islas calizas que emergen de un mar esmeralda, y después una bahía vecina donde los mismos picos kársticos se alzan lejos de las multitudes",
      description:
        "Une croisière à bord d'une jonque traditionnelle en bois à travers la baie d'Ha Long, classée au patrimoine mondial de l'UNESCO, dont près de deux mille îles et îlots calcaires surgissent d'une mer émeraude selon un paysage karstique façonné sur plus de vingt millions d'années, puis vers la baie voisine de Lan Ha, formée des mêmes pitons rocheux mais restée largement à l'écart du tourisme de masse qui concentre l'essentiel des visiteurs sur la seule baie d'Ha Long.",
      descriptionEn:
        "A cruise aboard a traditional wooden junk through Ha Long Bay, UNESCO World Heritage listed, whose nearly two thousand limestone islands and islets rise from an emerald sea in a karst landscape shaped over more than twenty million years, then on to the neighbouring Lan Ha Bay, formed of the same rocky peaks but largely spared the mass tourism that concentrates most visitors on Ha Long Bay alone.",
      descriptionEs:
        "Un crucero a bordo de una junco tradicional de madera por la bahía de Ha Long, declarada Patrimonio de la Humanidad por la UNESCO, cuyas casi dos mil islas e islotes calizos emergen de un mar esmeralda en un paisaje kárstico formado a lo largo de más de veinte millones de años, y después hacia la vecina bahía de Lan Ha, formada por los mismos picos rocosos pero al margen en gran medida del turismo de masas que concentra a la mayoría de los visitantes solo en la bahía de Ha Long.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Oct à avril",
      whenLabelEn: "Oct to April",
      whenLabelEs: "Oct a abril",
      bestMonths: "october,november,december,january,february,march,april",
      category: "multi-day",
      theme: "cruise",
      feeling: "contentment",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 228,
    },
    chapters: [
      {
        title: "La baie d'Ha Long, un paysage karstique classé à l'UNESCO",
        titleEn: "Ha Long Bay, a UNESCO-Listed Karst Landscape",
        titleEs: "La bahía de Ha Long, un paisaje kárstico declarado por la UNESCO",
        intro:
          "Premier chapitre dans la baie d'Ha Long, dont les près de deux mille îles et îlots calcaires, sculptés sur plus de vingt millions d'années par l'érosion, furent inscrits au patrimoine mondial de l'UNESCO en 1994 pour leur valeur esthétique et géologique exceptionnelle. La légende vietnamienne raconte que ces pitons rocheux seraient les vestiges d'un dragon envoyé par les dieux pour défendre le pays des envahisseurs, crachant des pierres précieuses dans la mer qui se seraient transformées en ces innombrables îles calcaires.",
        introEn:
          "The first chapter unfolds in Ha Long Bay, whose nearly two thousand limestone islands and islets, shaped over more than twenty million years by erosion, were inscribed on the UNESCO World Heritage list in 1994 for their exceptional aesthetic and geological value. Vietnamese legend tells that these rocky peaks are the remains of a dragon sent by the gods to defend the country from invaders, spitting jewels into the sea that turned into these countless limestone islands.",
        introEs:
          "El primer capítulo se desarrolla en la bahía de Ha Long, cuyas casi dos mil islas e islotes calizos, esculpidos a lo largo de más de veinte millones de años por la erosión, fueron inscritos en el Patrimonio de la Humanidad de la UNESCO en 1994 por su excepcional valor estético y geológico. La leyenda vietnamita cuenta que estos picos rocosos son los restos de un dragón enviado por los dioses para defender el país de los invasores, que escupió joyas al mar que se convirtieron en estas innumerables islas calizas.",
        galleryImages: `${R2}/journeys/vietnam-croisiere-ch1-gallery1.jpg,${R2}/journeys/vietnam-croisiere-ch1-gallery2.jpg,${R2}/journeys/vietnam-croisiere-ch1-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "La grotte de Sung Sot, la « grotte de la Surprise »",
            titleEn: "Sung Sot Cave, the \"Surprise Cave\"",
            titleEs: "La cueva de Sung Sot, la «cueva de la Sorpresa»",
            description:
              "Exploration de la grotte de Sung Sot, l'une des plus vastes de la baie d'Ha Long, dont les stalactites et stalagmites ont valu son surnom de « grotte de la Surprise ».",
            descriptionEn:
              "An exploration of Sung Sot Cave, one of the largest in Ha Long Bay, whose stalactites and stalagmites earned it the nickname \"Surprise Cave.\"",
            descriptionEs:
              "Exploración de la cueva de Sung Sot, una de las más grandes de la bahía de Ha Long, cuyas estalactitas y estalagmitas le valieron el apodo de «cueva de la Sorpresa».",
            image: `${R2}/journeys/vietnam-croisiere-ch1-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Kayak entre les pitons calcaires",
            titleEn: "Kayaking among the limestone peaks",
            titleEs: "Kayak entre los picos calizos",
            description:
              "Sortie en kayak au ras de l'eau entre les pitons calcaires de la baie, à travers des arches naturelles inaccessibles aux plus grandes embarcations.",
            descriptionEn:
              "A kayak outing at water level among the bay's limestone peaks, through natural arches inaccessible to larger boats.",
            descriptionEs:
              "Salida en kayak a ras de agua entre los picos calizos de la bahía, a través de arcos naturales inaccesibles para embarcaciones más grandes.",
            image: `${R2}/journeys/vietnam-croisiere-ch1-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La baie de Lan Ha, la sœur préservée d'Ha Long",
        titleEn: "Lan Ha Bay, Ha Long's Unspoiled Sister",
        titleEs: "La bahía de Lan Ha, la hermana preservada de Ha Long",
        intro:
          "Route vers la baie de Lan Ha, formée des mêmes pitons calcaires que sa voisine plus célèbre mais restée largement à l'écart du tourisme de masse qui concentre l'essentiel des visiteurs sur la seule baie d'Ha Long, en partie grâce à sa position au sein du parc national de Cat Ba, protégé depuis 1986. Ses eaux plus calmes et ses plus de cent trente plages de sable fin nichées entre les îlots karstiques en font une destination privilégiée pour la baignade et le kayak, loin de l'affluence des grands bateaux touristiques.",
        introEn:
          "The road to Lan Ha Bay, formed of the same limestone peaks as its more famous neighbour but largely spared the mass tourism that concentrates most visitors on Ha Long Bay alone, thanks in part to its position within Cat Ba National Park, protected since 1986. Its calmer waters and more than a hundred and thirty fine-sand beaches tucked among the karst islets make it a favoured spot for swimming and kayaking, far from the crowds of the large tour boats.",
        introEs:
          "Ruta hacia la bahía de Lan Ha, formada por los mismos picos calizos que su vecina más famosa pero al margen en gran medida del turismo de masas que concentra a la mayoría de los visitantes solo en la bahía de Ha Long, en parte gracias a su ubicación dentro del parque nacional de Cat Ba, protegido desde 1986. Sus aguas más tranquilas y sus más de ciento treinta playas de arena fina enclavadas entre los islotes kársticos la convierten en un lugar preferido para el baño y el kayak, lejos de la afluencia de los grandes barcos turísticos.",
        galleryImages: `${R2}/journeys/vietnam-croisiere-ch2-gallery1.jpg,${R2}/journeys/vietnam-croisiere-ch2-gallery2.jpg,${R2}/journeys/vietnam-croisiere-ch2-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Baignade sur une plage isolée de Lan Ha",
            titleEn: "A swim on a secluded Lan Ha beach",
            titleEs: "Baño en una playa aislada de Lan Ha",
            description:
              "Escale sur l'une des plus de cent trente plages de sable fin de la baie de Lan Ha, nichée entre les îlots karstiques et accessible uniquement par bateau.",
            descriptionEn:
              "A stop on one of Lan Ha Bay's more than a hundred and thirty fine-sand beaches, tucked among the karst islets and accessible only by boat.",
            descriptionEs:
              "Parada en una de las más de ciento treinta playas de arena fina de la bahía de Lan Ha, enclavada entre los islotes kársticos y accesible solo en barco.",
            image: `${R2}/journeys/vietnam-croisiere-ch2-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le parc national de Cat Ba",
            titleEn: "Cat Ba National Park",
            titleEs: "El parque nacional de Cat Ba",
            description:
              "Excursion dans le parc national de Cat Ba, protégé depuis 1986, dont les forêts denses abritent le langur de Cat Ba, primate parmi les plus rares au monde.",
            descriptionEn:
              "An excursion into Cat Ba National Park, protected since 1986, whose dense forests are home to the Cat Ba langur, one of the world's rarest primates.",
            descriptionEs:
              "Excursión por el parque nacional de Cat Ba, protegido desde 1986, cuyos densos bosques albergan al langur de Cat Ba, uno de los primates más raros del mundo.",
            image: `${R2}/journeys/vietnam-croisiere-ch2-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "egypte",
    tour: {
      name: "Égypte : croisière en mer Rouge",
      nameEn: "Egypt: A Red Sea Cruise",
      nameEs: "Egipto: crucero por el mar Rojo",
      slug: "egypte-croisiere-mer-rouge",
      image: `${R2}/tours/egypte-croisiere-mer-rouge.jpg`,
      images: `${R2}/trips/egypte-croisiere-gallery-1.jpg,${R2}/trips/egypte-croisiere-gallery-2.jpg,${R2}/trips/egypte-croisiere-gallery-3.jpg,${R2}/trips/egypte-croisiere-gallery-4.jpg,${R2}/trips/egypte-croisiere-gallery-5.jpg,${R2}/trips/egypte-croisiere-gallery-6.jpg`,
      tagline: "Une mer si salée et si claire que la visibilité sous-marine y dépasse souvent trente mètres, bordée de récifs coralliens parmi les plus préservés au monde",
      taglineEn: "A sea so salty and clear that underwater visibility often exceeds thirty metres, lined with some of the best-preserved coral reefs in the world",
      taglineEs: "Un mar tan salado y transparente que la visibilidad submarina supera a menudo los treinta metros, bordeado de arrecifes de coral entre los mejor conservados del mundo",
      description:
        "La mer Rouge, dont la salinité exceptionnellement élevée et l'absence quasi totale d'apport d'eau douce par des fleuves offrent une clarté remarquable avec une visibilité sous-marine dépassant souvent trente mètres, abrite des récifs coralliens parmi les plus préservés et les plus diversifiés au monde, avec plus de deux cents espèces de coraux recensées. Une croisière au départ de Hurghada ou Marsa Alam permet de mouiller successivement au large de récifs isolés et d'îlots désertiques, loin des zones les plus fréquentées par la plongée côtière classique.",
      descriptionEn:
        "The Red Sea, whose exceptionally high salinity and near-total absence of freshwater river input give it remarkable clarity, with underwater visibility often exceeding thirty metres, is home to some of the best-preserved and most diverse coral reefs in the world, with over two hundred recorded coral species. A cruise departing from Hurghada or Marsa Alam allows successive anchorages off isolated reefs and desert islets, far from the areas most frequented by classic shore diving.",
      descriptionEs:
        "El mar Rojo, cuya salinidad excepcionalmente alta y la ausencia casi total de aporte de agua dulce de ríos le confieren una claridad notable, con una visibilidad submarina que a menudo supera los treinta metros, alberga algunos de los arrecifes de coral mejor conservados y más diversos del mundo, con más de doscientas especies de coral registradas. Un crucero que parte de Hurghada o Marsa Alam permite fondear sucesivamente frente a arrecifes aislados e islotes desérticos, lejos de las zonas más frecuentadas por el buceo costero clásico.",
      price: 2800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Avril à juin | Sept à nov",
      whenLabelEn: "April to June | Sept to Nov",
      whenLabelEs: "Abril a junio | sept a nov",
      bestMonths: "april,may,june,september,october,november",
      category: "multi-day",
      theme: "cruise",
      feeling: "revitalized",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 223,
    },
    sections: [
      {
        heading: "Une mer d'une clarté exceptionnelle",
        headingEn: "A Sea of Exceptional Clarity",
        headingEs: "Un mar de una claridad excepcional",
        body:
          "La mer Rouge doit sa clarté remarquable à une combinaison unique de facteurs géographiques : une salinité exceptionnellement élevée, un taux d'évaporation important sous ce climat désertique, et l'absence quasi totale de fleuve s'y déversant, contrairement à la plupart des autres mers du globe. Cette eau d'une transparence rare offre une visibilité sous-marine qui dépasse souvent trente mètres, une condition qui explique pourquoi la région compte parmi les destinations de plongée les plus réputées au monde depuis les premières explorations sous-marines du commandant Jacques-Yves Cousteau dans les années 1950.",
        bodyEn:
          "The Red Sea owes its remarkable clarity to a unique combination of geographic factors: exceptionally high salinity, significant evaporation under this desert climate, and the near-total absence of any river flowing into it, unlike most other seas on the globe. This rare transparency offers underwater visibility that often exceeds thirty metres, a condition that explains why the region has ranked among the world's most renowned diving destinations since Commander Jacques-Yves Cousteau's first underwater explorations there in the 1950s.",
        bodyEs:
          "El mar Rojo debe su notable claridad a una combinación única de factores geográficos: una salinidad excepcionalmente alta, una evaporación importante bajo este clima desértico, y la ausencia casi total de ríos que desemboquen en él, a diferencia de la mayoría de los demás mares del planeta. Esta rara transparencia ofrece una visibilidad submarina que a menudo supera los treinta metros, una condición que explica por qué la región se cuenta entre los destinos de buceo más renombrados del mundo desde las primeras exploraciones submarinas del comandante Jacques-Yves Cousteau en la década de 1950.",
      },
      {
        heading: "Des récifs coralliens parmi les plus préservés au monde",
        headingEn: "Some of the World's Best-Preserved Coral Reefs",
        headingEs: "Algunos de los arrecifes de coral mejor conservados del mundo",
        body:
          "Les récifs coralliens de la mer Rouge, épargnés par le blanchissement massif qui a frappé la plupart des autres récifs du globe grâce à une résilience thermique particulière de leurs coraux, abritent plus de deux cents espèces de coraux recensées et plus de mille espèces de poissons, dont environ dix pour cent sont endémiques à la région. Une croisière permet d'accéder à des sites isolés comme les récifs de Brothers ou de Daedalus, accessibles uniquement en plusieurs heures de navigation depuis la côte et donc largement préservés de la fréquentation des excursions de plongée côtière.",
        bodyEn:
          "The Red Sea's coral reefs, spared the mass bleaching that has struck most other reefs worldwide thanks to a particular thermal resilience of their corals, are home to over two hundred recorded coral species and more than a thousand fish species, around ten per cent of which are endemic to the region. A cruise provides access to isolated sites such as the Brothers or Daedalus reefs, reachable only after several hours' sailing from the coast and thus largely spared the traffic of shore diving excursions.",
        bodyEs:
          "Los arrecifes de coral del mar Rojo, a salvo del blanqueamiento masivo que ha afectado a la mayoría de los demás arrecifes del mundo gracias a una particular resiliencia térmica de sus corales, albergan más de doscientas especies de coral registradas y más de mil especies de peces, de las cuales cerca del diez por ciento son endémicas de la región. Un crucero permite acceder a lugares aislados como los arrecifes de Brothers o Daedalus, accesibles solo tras varias horas de navegación desde la costa y por ello en gran medida al margen de la afluencia de las excursiones de buceo costero.",
      },
    ],
    hotels: [
      {
        name: "Cabine avec vue sur mer à bord du navire",
        nameEn: "A Sea-View Cabin Aboard the Ship",
        nameEs: "Camarote con vista al mar a bordo del barco",
        description:
          "Une cabine climatisée avec vue directe sur la mer Rouge, à bord d'un navire de croisière de petite capacité privilégiant les mouillages isolés.",
        descriptionEn:
          "An air-conditioned cabin with a direct view of the Red Sea, aboard a small-capacity cruise ship favouring isolated anchorages.",
        descriptionEs:
          "Un camarote climatizado con vista directa al mar Rojo, a bordo de un barco de crucero de pequeña capacidad que prioriza los fondeaderos aislados.",
        image: `${R2}/trips/egypte-croisiere-hotel-1.jpg`,
      },
      {
        name: "Suite avec terrasse privée sur le pont supérieur",
        nameEn: "A Suite with a Private Terrace on the Upper Deck",
        nameEs: "Suite con terraza privada en la cubierta superior",
        description:
          "Une suite spacieuse sur le pont supérieur, terrasse privée donnant directement sur l'eau et les récifs coralliens environnants.",
        descriptionEn:
          "A spacious suite on the upper deck, a private terrace facing directly onto the water and the surrounding coral reefs.",
        descriptionEs:
          "Una amplia suite en la cubierta superior, terraza privada con vistas directas al agua y los arrecifes de coral circundantes.",
        image: `${R2}/trips/egypte-croisiere-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "grece",
    tour: {
      name: "Grèce : croisière en Méditerranée",
      nameEn: "Greece: A Mediterranean Cruise",
      nameEs: "Grecia: crucero por el Mediterráneo",
      slug: "grece-croisiere-mediterranee",
      image: `${R2}/tours/grece-croisiere-mediterranee.jpg`,
      images: `${R2}/trips/grece-croisiere-gallery-1.jpg,${R2}/trips/grece-croisiere-gallery-2.jpg,${R2}/trips/grece-croisiere-gallery-3.jpg,${R2}/trips/grece-croisiere-gallery-4.jpg,${R2}/trips/grece-croisiere-gallery-5.jpg,${R2}/trips/grece-croisiere-gallery-6.jpg`,
      tagline: "Plus de six mille îles et îlots disséminés en mer Égée, dont moins de deux cents sont habités",
      taglineEn: "Over six thousand islands and islets scattered across the Aegean Sea, fewer than two hundred of them inhabited",
      taglineEs: "Más de seis mil islas e islotes dispersos por el mar Egeo, de los cuales menos de doscientos están habitados",
      description:
        "La Grèce compte plus de six mille îles et îlots disséminés entre la mer Égée et la mer Ionienne, dont moins de deux cents sont habités, un archipel si vaste qu'une vie entière ne suffirait pas à tous les visiter. Une croisière à bord d'un voilier de petite capacité permet de relier en une semaine plusieurs îles aux identités radicalement différentes, des villages aux dômes bleus des Cyclades aux criques désertes accessibles uniquement par la mer, en mouillant chaque soir dans un port différent plutôt que de suivre l'itinéraire figé d'un grand paquebot.",
      descriptionEn:
        "Greece has over six thousand islands and islets scattered between the Aegean and Ionian Seas, fewer than two hundred of them inhabited, an archipelago so vast that a lifetime wouldn't be enough to visit them all. A cruise aboard a small-capacity sailing ship makes it possible to link several islands with radically different identities in a single week, from the blue-domed villages of the Cyclades to deserted coves accessible only by sea, anchoring in a different port each evening rather than following a large liner's fixed itinerary.",
      descriptionEs:
        "Grecia cuenta con más de seis mil islas e islotes dispersos entre el mar Egeo y el mar Jónico, de los cuales menos de doscientos están habitados, un archipiélago tan vasto que toda una vida no bastaría para visitarlos todos. Un crucero a bordo de un velero de pequeña capacidad permite enlazar en una semana varias islas de identidades radicalmente distintas, desde los pueblos de cúpulas azules de las Cícladas hasta calas desiertas accesibles solo por mar, fondeando cada noche en un puerto diferente en lugar de seguir el itinerario fijo de un gran transatlántico.",
      price: 3200,
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
      theme: "cruise",
      feeling: "freedom",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 6,
      featured: false,
      order: 224,
    },
    sections: [
      {
        heading: "Un archipel de plus de six mille îles",
        headingEn: "An Archipelago of Over Six Thousand Islands",
        headingEs: "Un archipiélago de más de seis mil islas",
        body:
          "L'archipel grec, qui compte plus de six mille îles et îlots selon les estimations géographiques les plus larges, dont seules moins de deux cents sont habitées en permanence, doit sa formation à un passé géologique tourmenté fait de volcanisme et de mouvements tectoniques qui ont fragmenté ce qui fut autrefois une masse continentale plus continue. Cette dispersion extrême, unique en Méditerranée par son ampleur, fait de la croisière le moyen le plus naturel de découvrir plusieurs identités insulaires radicalement différentes en un seul voyage, plutôt que de se limiter à une ou deux îles accessibles par avion ou ferry classique.",
        bodyEn:
          "The Greek archipelago, which counts over six thousand islands and islets by the broadest geographical estimates, of which fewer than two hundred are permanently inhabited, owes its formation to a turbulent geological past of volcanism and tectonic movement that fragmented what was once a more continuous landmass. This extreme dispersion, unique in the Mediterranean for its scale, makes cruising the most natural way to discover several radically different island identities in a single trip, rather than being limited to the one or two islands reachable by plane or a classic ferry.",
        bodyEs:
          "El archipiélago griego, que cuenta con más de seis mil islas e islotes según las estimaciones geográficas más amplias, de las cuales menos de doscientas están habitadas de forma permanente, debe su formación a un pasado geológico turbulento de vulcanismo y movimientos tectónicos que fragmentaron lo que en su día fue una masa continental más continua. Esta dispersión extrema, única en el Mediterráneo por su magnitud, convierte al crucero en la forma más natural de descubrir varias identidades insulares radicalmente distintas en un solo viaje, en lugar de limitarse a una o dos islas accesibles en avión o ferry clásico.",
      },
      {
        heading: "Des Cyclades aux criques désertes",
        headingEn: "From the Cyclades to Deserted Coves",
        headingEs: "De las Cícladas a las calas desiertas",
        body:
          "Une semaine de croisière permet de relier des îles aux identités radicalement distinctes : les villages aux maisons cubiques et dômes bleus des Cyclades, rendus célèbres par Santorin et Mykonos mais reproduits avec plus de authenticité sur des îles moins visitées comme Folégandros ou Sikinos, puis des criques désertes accessibles uniquement par la mer, où un voilier de petite capacité peut mouiller loin de toute route carrossable. Cette liberté de mouillage, impossible pour un grand paquebot limité aux ports en eau profonde, reste l'argument central de la croisière à voile en mer Égée.",
        bodyEn:
          "A week's cruise makes it possible to link islands with radically distinct identities: the cube-shaped houses and blue domes of the Cyclades villages, made famous by Santorini and Mykonos but reproduced with greater authenticity on less-visited islands like Folegandros or Sikinos, then deserted coves accessible only by sea, where a small-capacity sailing ship can anchor far from any driveable road. This freedom of anchorage, impossible for a large liner confined to deep-water ports, remains the central appeal of a sailing cruise in the Aegean.",
        bodyEs:
          "Una semana de crucero permite enlazar islas de identidades radicalmente distintas: las casas cúbicas y cúpulas azules de los pueblos de las Cícladas, hechas famosas por Santorini y Míkonos pero reproducidas con mayor autenticidad en islas menos visitadas como Folégandros o Sikinos, y después calas desiertas accesibles solo por mar, donde un velero de pequeña capacidad puede fondear lejos de cualquier carretera transitable. Esta libertad de fondeo, imposible para un gran transatlántico limitado a puertos de aguas profundas, sigue siendo el argumento central del crucero a vela por el mar Egeo.",
      },
    ],
    hotels: [
      {
        name: "Cabine double avec hublot panoramique",
        nameEn: "A Double Cabin with a Panoramic Porthole",
        nameEs: "Camarote doble con ojo de buey panorámico",
        description:
          "Une cabine double climatisée avec hublot panoramique, à bord d'un voilier de petite capacité qui mouille chaque soir dans un port différent.",
        descriptionEn:
          "An air-conditioned double cabin with a panoramic porthole, aboard a small-capacity sailing ship that anchors in a different port each evening.",
        descriptionEs:
          "Un camarote doble climatizado con ojo de buey panorámico, a bordo de un velero de pequeña capacidad que fondea cada noche en un puerto distinto.",
        image: `${R2}/trips/grece-croisiere-hotel-1.jpg`,
      },
      {
        name: "Suite pont supérieur avec vue sur les Cyclades",
        nameEn: "An Upper-Deck Suite Overlooking the Cyclades",
        nameEs: "Suite en cubierta superior con vistas a las Cícladas",
        description:
          "Une suite sur le pont supérieur avec vue dégagée sur les îles des Cyclades, terrasse privée pour observer le coucher de soleil en mer.",
        descriptionEn:
          "An upper-deck suite with an open view of the Cycladic islands, a private terrace for watching the sunset at sea.",
        descriptionEs:
          "Una suite en la cubierta superior con vistas despejadas a las islas Cícladas, terraza privada para contemplar la puesta de sol en el mar.",
        image: `${R2}/trips/grece-croisiere-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "etats-unis",
    tour: {
      name: "États-Unis : croisière côtière de Nouvelle-Angleterre",
      nameEn: "USA: A New England Coastal Cruise",
      nameEs: "Estados Unidos: crucero costero de Nueva Inglaterra",
      slug: "etats-unis-croisiere-nouvelle-angleterre",
      image: `${R2}/tours/etats-unis-croisiere-nouvelle-angleterre.jpg`,
      images: `${R2}/trips/etats-unis-croisiere-gallery-1.jpg,${R2}/trips/etats-unis-croisiere-gallery-2.jpg,${R2}/trips/etats-unis-croisiere-gallery-3.jpg,${R2}/trips/etats-unis-croisiere-gallery-4.jpg,${R2}/trips/etats-unis-croisiere-gallery-5.jpg,${R2}/trips/etats-unis-croisiere-gallery-6.jpg`,
      tagline: "Une côte rocheuse ponctuée de plus de soixante-dix phares historiques, à l'automne où les forêts s'embrasent de couleurs avant l'hiver",
      taglineEn: "A rocky coastline dotted with over seventy historic lighthouses, in autumn when the forests blaze with colour before winter",
      taglineEs: "Una costa rocosa salpicada de más de setenta faros históricos, en otoño cuando los bosques se encienden de color antes del invierno",
      description:
        "La côte du Maine, dont le littoral découpé s'étend sur plus de cinq mille cinq cents kilomètres une fois comptées toutes ses baies et péninsules, malgré une distance à vol d'oiseau de moins de cinq cents kilomètres, abrite plus de soixante-dix phares historiques encore debout, certains actifs depuis le XVIIIe siècle. Une croisière côtière à l'automne, lorsque les forêts d'érables environnantes s'embrasent de rouge et d'orange avant l'hiver, permet de relier des ports de pêcheurs préservés comme Camden ou Bar Harbor, accessibles uniquement par une navigation lente le long d'une côte trop découpée pour l'automobile.",
      descriptionEn:
        "The Maine coastline, whose jagged shore stretches over five thousand five hundred kilometres once every bay and peninsula is counted, despite a straight-line distance of under five hundred kilometres, is home to more than seventy historic lighthouses still standing, some active since the 18th century. A coastal cruise in autumn, when the surrounding maple forests blaze red and orange before winter, makes it possible to link preserved fishing ports such as Camden or Bar Harbor, reachable only by slow sailing along a coast too jagged for a car.",
      descriptionEs:
        "La costa de Maine, cuyo litoral recortado se extiende más de cinco mil quinientos kilómetros contando todas sus bahías y penínsulas, pese a una distancia en línea recta de menos de quinientos kilómetros, alberga más de setenta faros históricos todavía en pie, algunos activos desde el siglo XVIII. Un crucero costero en otoño, cuando los bosques de arces circundantes se encienden de rojo y naranja antes del invierno, permite enlazar puertos pesqueros preservados como Camden o Bar Harbor, accesibles solo mediante una navegación lenta a lo largo de una costa demasiado recortada para el automóvil.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Sept à oct",
      whenLabelEn: "Sept to Oct",
      whenLabelEs: "Sept a oct",
      bestMonths: "september,october",
      category: "multi-day",
      theme: "cruise",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 225,
    },
    sections: [
      {
        heading: "Une côte rocheuse aux soixante-dix phares",
        headingEn: "A Rocky Coast of Seventy Lighthouses",
        headingEs: "Una costa rocosa de setenta faros",
        body:
          "La côte du Maine, dont le littoral extraordinairement découpé s'étend sur plus de cinq mille cinq cents kilomètres une fois comptées toutes ses baies, péninsules et îles, malgré une distance à vol d'oiseau entre ses extrémités de moins de cinq cents kilomètres, reste ponctuée de plus de soixante-dix phares historiques encore debout, dont certains, comme celui de Portland Head Light, sont actifs depuis la fin du XVIIIe siècle sur ordre direct du président George Washington. Cette géométrie côtière complexe, façonnée par les glaciers de la dernière ère glaciaire, explique pourquoi une croisière reste le moyen le plus naturel d'explorer cette côte, largement inaccessible par la route.",
        bodyEn:
          "The Maine coastline, whose extraordinarily jagged shore stretches over five thousand five hundred kilometres once every bay, peninsula, and island is counted, despite a straight-line distance between its extremities of under five hundred kilometres, remains dotted with more than seventy historic lighthouses still standing, some of which, like Portland Head Light, have been active since the late 18th century on the direct order of President George Washington. This complex coastal geometry, shaped by the glaciers of the last Ice Age, explains why a cruise remains the most natural way to explore this coast, largely inaccessible by road.",
        bodyEs:
          "La costa de Maine, cuyo litoral extraordinariamente recortado se extiende más de cinco mil quinientos kilómetros contando todas sus bahías, penínsulas e islas, pese a una distancia en línea recta entre sus extremos de menos de quinientos kilómetros, sigue salpicada de más de setenta faros históricos todavía en pie, algunos de los cuales, como el de Portland Head Light, están activos desde finales del siglo XVIII por orden directa del presidente George Washington. Esta compleja geometría costera, moldeada por los glaciares de la última era glaciar, explica por qué un crucero sigue siendo la forma más natural de explorar esta costa, en gran medida inaccesible por carretera.",
      },
      {
        heading: "L'été indien, entre forêts embrasées et ports de pêcheurs",
        headingEn: "Indian Summer, Between Blazing Forests and Fishing Ports",
        headingEs: "El veranillo de San Martín, entre bosques encendidos y puertos pesqueros",
        body:
          "L'automne en Nouvelle-Angleterre, période durant laquelle les forêts d'érables qui bordent la côte s'embrasent de rouge, d'orange et de jaune avant la chute des feuilles, attire chaque année des visiteurs venus spécifiquement observer ce phénomène connu localement sous le nom de « fall foliage ». Une croisière côtière durant cette saison permet de relier des ports de pêcheurs historiques comme Camden, dont le port pittoresque reste actif pour la pêche au homard, ou Bar Harbor, porte d'entrée du parc national d'Acadia, tout en profitant d'un rythme de navigation lent adapté à l'observation des couleurs automnales depuis le pont.",
        bodyEn:
          "Autumn in New England, the period when the maple forests lining the coast blaze red, orange, and yellow before the leaves fall, draws visitors each year specifically to observe this phenomenon known locally as \"fall foliage.\" A coastal cruise during this season makes it possible to link historic fishing ports such as Camden, whose picturesque harbour remains active for lobster fishing, or Bar Harbor, the gateway to Acadia National Park, all while enjoying a slow sailing pace suited to watching the autumn colours from the deck.",
        bodyEs:
          "El otoño en Nueva Inglaterra, período durante el cual los bosques de arces que bordean la costa se encienden de rojo, naranja y amarillo antes de la caída de las hojas, atrae cada año a visitantes que acuden específicamente a observar este fenómeno conocido localmente como «fall foliage». Un crucero costero durante esta temporada permite enlazar puertos pesqueros históricos como Camden, cuyo pintoresco puerto sigue activo para la pesca de langosta, o Bar Harbor, puerta de entrada al parque nacional de Acadia, disfrutando de un ritmo de navegación lento adecuado para contemplar los colores otoñales desde cubierta.",
      },
    ],
    hotels: [
      {
        name: "Cabine avec vue sur la côte rocheuse",
        nameEn: "A Cabin Overlooking the Rocky Coast",
        nameEs: "Camarote con vistas a la costa rocosa",
        description:
          "Une cabine confortable avec vue directe sur la côte rocheuse du Maine, à bord d'un navire côtier de petite capacité.",
        descriptionEn:
          "A comfortable cabin with a direct view of Maine's rocky coastline, aboard a small-capacity coastal ship.",
        descriptionEs:
          "Un cómodo camarote con vistas directas a la costa rocosa de Maine, a bordo de un barco costero de pequeña capacidad.",
        image: `${R2}/trips/etats-unis-croisiere-hotel-1.jpg`,
      },
      {
        name: "Suite avec balcon privé et vue sur les phares",
        nameEn: "A Suite with a Private Balcony and Lighthouse Views",
        nameEs: "Suite con balcón privado y vistas a los faros",
        description:
          "Une suite avec balcon privé, vue dégagée sur les phares historiques qui ponctuent la côte du Maine tout au long de la croisière.",
        descriptionEn:
          "A suite with a private balcony, an open view of the historic lighthouses dotting the Maine coast throughout the cruise.",
        descriptionEs:
          "Una suite con balcón privado, vistas despejadas a los faros históricos que salpican la costa de Maine durante todo el crucero.",
        image: `${R2}/trips/etats-unis-croisiere-hotel-2.jpg`,
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
