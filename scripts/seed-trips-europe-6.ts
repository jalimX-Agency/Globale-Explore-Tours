// Europe batch 6 — Hongrie, Irlande, Pologne. New trips bringing each destination to at least 3,
// styled on Black Tomato's real structure (a short number of named-hotel chapters, not an
// exhaustive day-by-day grind) rather than copying their text. Run with:
//   npx tsx scripts/seed-trips-europe-6.ts
// Requires scripts/upload-images-europe-6.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "hongrie",
    tour: {
      name: "Hongrie : Eger et le karst d'Aggtelek",
      nameEn: "Hungary: Eger and the Aggtelek Karst",
      nameEs: "Hungría: Eger y el karst de Aggtelek",
      slug: "hongrie-eger-aggtelek",
      image: `${R2}/journeys/hongrie-eger-aggtelek-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une ville viticole dont les caves creusées dans le tuf abritent le « Sang de Taureau », puis un réseau de grottes classé qui s'étend sur deux pays",
      taglineEn: "A wine town whose tuff-carved cellars hold \"Bull's Blood,\" then a UNESCO cave network spanning two countries",
      taglineEs: "Una ciudad vitivinícola cuyas bodegas excavadas en toba albergan la «Sangre de Toro», y después una red de cuevas declarada que se extiende por dos países",
      description:
        "Un voyage loin de Budapest et du lac Balaton : Eger, ville baroque du nord-est de la Hongrie dont la Vallée de la Belle Femme concentre plus de deux cents caves creusées dans la roche tufacée, productrices du célèbre Egri Bikavér ou « Sang de Taureau », puis le karst d'Aggtelek, massif calcaire classé au patrimoine mondial de l'UNESCO qui abrite plus de deux cent quarante grottes dont la Baradla, réseau souterrain de vingt-cinq kilomètres partagé avec la Slovaquie voisine.",
      descriptionEn:
        "A journey far from Budapest and Lake Balaton: Eger, a baroque town in north-eastern Hungary whose Valley of the Beautiful Woman concentrates over two hundred cellars carved into the tuff rock, producing the famous Egri Bikavér, or \"Bull's Blood,\" then the Aggtelek Karst, a limestone massif UNESCO World Heritage listed, home to more than two hundred and forty caves including the Baradla, a twenty-five-kilometre underground network shared with neighbouring Slovakia.",
      descriptionEs:
        "Un viaje lejos de Budapest y el lago Balaton: Eger, ciudad barroca del noreste de Hungría cuyo Valle de la Bella Mujer concentra más de doscientas bodegas excavadas en la roca de toba, productoras del célebre Egri Bikavér o «Sangre de Toro», y después el karst de Aggtelek, macizo calizo declarado Patrimonio de la Humanidad por la UNESCO que alberga más de doscientas cuarenta cuevas, entre ellas la Baradla, red subterránea de veinticinco kilómetros compartida con la vecina Eslovaquia.",
      price: 1600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "May a sept",
      bestMonths: "may,june,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 206,
    },
    chapters: [
      {
        title: "Eger et la vallée du Sang de Taureau",
        titleEn: "Eger and the Valley of Bull's Blood",
        titleEs: "Eger y el valle de la Sangre de Toro",
        intro:
          "Premier chapitre à Eger, ville baroque nichée dans les collines viticoles du nord-est de la Hongrie, dont la Vallée de la Belle Femme concentre plus de deux cents caves familiales creusées directement dans la roche tufacée volcanique. Ces caves produisent depuis des siècles l'Egri Bikavér, littéralement « Sang de Taureau », vin rouge tannique dont le nom tire son origine, selon la légende locale, du siège de la forteresse d'Eger en 1552, où les soldats hongrois, la barbe teintée de vin lors des combats, auraient convaincu les assaillants ottomans qu'ils puisaient leur force du sang de taureau.",
        introEn:
          "The first chapter unfolds in Eger, a baroque town nestled in the wine-growing hills of north-eastern Hungary, whose Valley of the Beautiful Woman concentrates over two hundred family cellars carved directly into volcanic tuff rock. These cellars have for centuries produced Egri Bikavér, literally \"Bull's Blood,\" a tannic red wine whose name, according to local legend, traces back to the 1552 siege of Eger Castle, where Hungarian soldiers, their beards stained with wine during the fighting, are said to have convinced the attacking Ottoman forces they drew their strength from bull's blood.",
        introEs:
          "El primer capítulo se desarrolla en Eger, ciudad barroca enclavada en las colinas vitícolas del noreste de Hungría, cuyo Valle de la Bella Mujer concentra más de doscientas bodegas familiares excavadas directamente en la roca de toba volcánica. Estas bodegas producen desde hace siglos el Egri Bikavér, literalmente «Sangre de Toro», vino tinto tánico cuyo nombre se remonta, según la leyenda local, al asedio del castillo de Eger en 1552, cuando los soldados húngaros, con la barba teñida de vino durante los combates, habrían convencido a los atacantes otomanos de que extraían su fuerza de la sangre de toro.",
        galleryImages: `${R2}/journeys/hongrie-eger-gallery1.jpg,${R2}/journeys/hongrie-eger-gallery2.jpg,${R2}/journeys/hongrie-eger-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 35,
        days: [
          {
            dayNumber: 1,
            title: "Dégustation dans la Vallée de la Belle Femme",
            titleEn: "A tasting in the Valley of the Beautiful Woman",
            titleEs: "Degustación en el Valle de la Bella Mujer",
            description:
              "Dégustation de vins rouges dans les caves familiales creusées dans le tuf volcanique de la Vallée de la Belle Femme, dont l'Egri Bikavér, le célèbre « Sang de Taureau ».",
            descriptionEn:
              "A tasting of red wines in the family cellars carved into the volcanic tuff of the Valley of the Beautiful Woman, including Egri Bikavér, the famous \"Bull's Blood.\"",
            descriptionEs:
              "Degustación de vinos tintos en las bodegas familiares excavadas en la toba volcánica del Valle de la Bella Mujer, entre ellos el Egri Bikavér, la célebre «Sangre de Toro».",
            image: `${R2}/journeys/hongrie-eger-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La forteresse d'Eger et son passé de siège",
            titleEn: "Eger Castle and its history of siege",
            titleEs: "El castillo de Eger y su pasado de asedio",
            description:
              "Visite de la forteresse d'Eger, dont le siège légendaire de 1552 face aux troupes ottomanes reste gravé dans la mémoire nationale hongroise.",
            descriptionEn:
              "A visit to Eger Castle, whose legendary 1552 siege against Ottoman forces remains etched in Hungarian national memory.",
            descriptionEs:
              "Visita al castillo de Eger, cuyo legendario asedio de 1552 frente a las tropas otomanas sigue grabado en la memoria nacional húngara.",
            image: `${R2}/journeys/hongrie-eger-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le karst d'Aggtelek et la grotte de Baradla",
        titleEn: "The Aggtelek Karst and Baradla Cave",
        titleEs: "El karst de Aggtelek y la cueva de Baradla",
        intro:
          "Route vers le karst d'Aggtelek, massif calcaire classé au patrimoine mondial de l'UNESCO qui abrite plus de deux cent quarante grottes formées sur des millions d'années par l'érosion souterraine, dont la Baradla, réseau de vingt-cinq kilomètres partagé avec la Slovaquie voisine et l'une des plus grandes grottes de stalactites d'Europe. Ce territoire karstique, resté largement préservé du tourisme de masse malgré son inscription au patrimoine mondial depuis 1995, offre également des paysages de surface caractéristiques faits de dolines, de gouffres et de prairies calcaires peu peuplées.",
        introEn:
          "The road to the Aggtelek Karst, a limestone massif UNESCO World Heritage listed, home to more than two hundred and forty caves formed over millions of years by underground erosion, including the Baradla, a twenty-five-kilometre network shared with neighbouring Slovakia and one of Europe's largest stalactite caves. This karst territory, largely spared from mass tourism despite its World Heritage listing since 1995, also offers characteristic surface landscapes of sinkholes, chasms, and sparsely populated limestone meadows.",
        introEs:
          "Ruta hacia el karst de Aggtelek, macizo calizo declarado Patrimonio de la Humanidad por la UNESCO, que alberga más de doscientas cuarenta cuevas formadas a lo largo de millones de años por la erosión subterránea, entre ellas la Baradla, red de veinticinco kilómetros compartida con la vecina Eslovaquia y una de las mayores cuevas de estalactitas de Europa. Este territorio kárstico, en gran medida preservado del turismo de masas pese a su inscripción en el Patrimonio de la Humanidad desde 1995, ofrece también paisajes de superficie característicos formados por dolinas, simas y praderas calizas escasamente pobladas.",
        galleryImages: `${R2}/journeys/hongrie-aggtelek-gallery1.jpg,${R2}/journeys/hongrie-aggtelek-gallery2.jpg,${R2}/journeys/hongrie-aggtelek-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Exploration de la grotte de Baradla",
            titleEn: "Exploring Baradla Cave",
            titleEs: "Exploración de la cueva de Baradla",
            description:
              "Exploration guidée de la grotte de Baradla, réseau souterrain de vingt-cinq kilomètres orné de formations de stalactites parmi les plus spectaculaires d'Europe.",
            descriptionEn:
              "A guided exploration of Baradla Cave, a twenty-five-kilometre underground network adorned with some of Europe's most spectacular stalactite formations.",
            descriptionEs:
              "Exploración guiada de la cueva de Baradla, red subterránea de veinticinco kilómetros adornada con formaciones de estalactitas entre las más espectaculares de Europa.",
            image: `${R2}/journeys/hongrie-aggtelek-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée sur les prairies karstiques",
            titleEn: "A hike across the karst meadows",
            titleEs: "Caminata por las praderas kársticas",
            description:
              "Randonnée à travers les prairies calcaires du parc national d'Aggtelek, ponctuées de dolines et de gouffres qui témoignent de l'activité karstique souterraine.",
            descriptionEn:
              "A hike across the limestone meadows of Aggtelek National Park, dotted with sinkholes and chasms that bear witness to the underground karst activity.",
            descriptionEs:
              "Caminata por las praderas calizas del parque nacional de Aggtelek, salpicadas de dolinas y simas que dan testimonio de la actividad kárstica subterránea.",
            image: `${R2}/journeys/hongrie-aggtelek-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "irlande",
    tour: {
      name: "Irlande : l'anneau du Kerry et les îles d'Aran",
      nameEn: "Ireland: the Ring of Kerry and the Aran Islands",
      nameEs: "Irlanda: el anillo de Kerry y las islas de Aran",
      slug: "irlande-kerry-aran",
      image: `${R2}/journeys/irlande-kerry-aran-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une route côtière de cent soixante kilomètres qui longe l'extrémité sud-ouest de l'Europe, puis des îles où le gaélique reste la langue du quotidien",
      taglineEn: "A hundred-and-sixty-kilometre coastal route hugging Europe's south-western edge, then islands where Gaelic remains the everyday language",
      taglineEs: "Una ruta costera de ciento sesenta kilómetros que bordea el extremo suroeste de Europa, y después unas islas donde el gaélico sigue siendo la lengua cotidiana",
      description:
        "Un voyage loin des falaises de Moher et du Burren : l'anneau du Kerry, route côtière de cent soixante kilomètres qui contourne la péninsule d'Iveragh entre plages désertes, montagnes et villages de pêcheurs, puis les îles d'Aran, trois îlots calcaires posés à l'entrée de la baie de Galway où le gaélique reste la langue du quotidien et où des forts de pierre préhistoriques comme Dún Aonghasa surplombent des falaises abruptes qui plongent directement dans l'Atlantique.",
      descriptionEn:
        "A journey far from the Cliffs of Moher and the Burren: the Ring of Kerry, a hundred-and-sixty-kilometre coastal route circling the Iveragh Peninsula between deserted beaches, mountains, and fishing villages, then the Aran Islands, three limestone islets at the mouth of Galway Bay where Gaelic remains the everyday language and where prehistoric stone forts such as Dún Aonghasa overlook sheer cliffs plunging directly into the Atlantic.",
      descriptionEs:
        "Un viaje lejos de los acantilados de Moher y el Burren: el anillo de Kerry, ruta costera de ciento sesenta kilómetros que rodea la península de Iveragh entre playas desiertas, montañas y pueblos de pescadores, y después las islas de Aran, tres islotes calizos situados en la entrada de la bahía de Galway donde el gaélico sigue siendo la lengua cotidiana y donde fuertes de piedra prehistóricos como Dún Aonghasa dominan acantilados escarpados que se sumergen directamente en el Atlántico.",
      price: 2300,
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
      order: 208,
    },
    chapters: [
      {
        title: "L'anneau du Kerry",
        titleEn: "The Ring of Kerry",
        titleEs: "El anillo de Kerry",
        intro:
          "Premier chapitre le long de l'anneau du Kerry, route côtière de cent soixante kilomètres qui contourne la péninsule d'Iveragh à l'extrémité sud-ouest de l'Irlande, entre plages désertes balayées par les vents atlantiques, montagnes de MacGillycuddy's Reeks culminant à plus de mille mètres et villages de pêcheurs colorés comme Portmagee. Le parcours, popularisé dès le XIXe siècle par les voyageurs britanniques en quête de panoramas romantiques, offre à chaque virage une vue différente sur l'océan, l'île déserte de Skellig Michael visible par temps clair, et les vestiges d'habitats préhistoriques dispersés le long du littoral.",
        introEn:
          "The first chapter follows the Ring of Kerry, a hundred-and-sixty-kilometre coastal route circling the Iveragh Peninsula at Ireland's south-western tip, between deserted beaches swept by Atlantic winds, the MacGillycuddy's Reeks mountains rising over a thousand metres, and colourful fishing villages such as Portmagee. The route, popularised as early as the 19th century by British travellers seeking romantic vistas, offers a different ocean view at every turn, the deserted island of Skellig Michael visible in clear weather, and the remains of prehistoric settlements scattered along the coastline.",
        introEs:
          "El primer capítulo recorre el anillo de Kerry, ruta costera de ciento sesenta kilómetros que rodea la península de Iveragh en el extremo suroeste de Irlanda, entre playas desiertas azotadas por los vientos atlánticos, las montañas de MacGillycuddy's Reeks, que superan los mil metros, y coloridos pueblos de pescadores como Portmagee. La ruta, popularizada ya en el siglo XIX por viajeros británicos en busca de paisajes románticos, ofrece en cada curva una vista distinta del océano, la isla deshabitada de Skellig Michael visible en días despejados, y los vestigios de asentamientos prehistóricos dispersos a lo largo del litoral.",
        galleryImages: `${R2}/journeys/irlande-kerry-gallery1.jpg,${R2}/journeys/irlande-kerry-gallery2.jpg,${R2}/journeys/irlande-kerry-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Route côtière jusqu'à Portmagee",
            titleEn: "A coastal drive to Portmagee",
            titleEs: "Ruta costera hasta Portmagee",
            description:
              "Route panoramique le long de l'anneau du Kerry jusqu'au village de pêcheurs de Portmagee, point de vue privilégié sur l'île monastique déserte de Skellig Michael.",
            descriptionEn:
              "A scenic drive along the Ring of Kerry to the fishing village of Portmagee, a privileged viewpoint over the deserted monastic island of Skellig Michael.",
            descriptionEs:
              "Ruta panorámica por el anillo de Kerry hasta el pueblo pesquero de Portmagee, mirador privilegiado sobre la deshabitada isla monástica de Skellig Michael.",
            image: `${R2}/journeys/irlande-kerry-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Randonnée dans les MacGillycuddy's Reeks",
            titleEn: "A hike in the MacGillycuddy's Reeks",
            titleEs: "Caminata por las MacGillycuddy's Reeks",
            description:
              "Randonnée dans les MacGillycuddy's Reeks, chaîne montagneuse qui culmine à plus de mille mètres et abrite les plus hauts sommets d'Irlande.",
            descriptionEn:
              "A hike in the MacGillycuddy's Reeks, a mountain range rising over a thousand metres and home to Ireland's highest peaks.",
            descriptionEs:
              "Caminata por las MacGillycuddy's Reeks, cadena montañosa que supera los mil metros y alberga las cumbres más altas de Irlanda.",
            image: `${R2}/journeys/irlande-kerry-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Les îles d'Aran, gardiennes du gaélique",
        titleEn: "The Aran Islands, Guardians of Gaelic",
        titleEs: "Las islas de Aran, guardianas del gaélico",
        intro:
          "Route vers les îles d'Aran, trois îlots calcaires posés à l'entrée de la baie de Galway où le gaélique reste, aujourd'hui encore, la langue parlée au quotidien par une majorité d'habitants, un statut linguistique préservé qui fait de l'archipel l'un des derniers bastions de la culture irlandaise traditionnelle. L'île principale d'Inishmore abrite Dún Aonghasa, fort de pierre préhistorique datant potentiellement de l'âge du bronze, dont les murailles semi-circulaires surplombent directement une falaise verticale de quatre-vingt-sept mètres plongeant dans l'Atlantique, sans aucune barrière de sécurité moderne.",
        introEn:
          "The road to the Aran Islands, three limestone islets at the mouth of Galway Bay where Gaelic remains, to this day, the language spoken daily by a majority of residents, a preserved linguistic status that makes the archipelago one of the last bastions of traditional Irish culture. The main island of Inishmore is home to Dún Aonghasa, a prehistoric stone fort potentially dating to the Bronze Age, whose semi-circular walls overlook a sheer eighty-seven-metre cliff plunging directly into the Atlantic, with no modern safety barrier at all.",
        introEs:
          "Ruta hacia las islas de Aran, tres islotes calizos situados en la entrada de la bahía de Galway donde el gaélico sigue siendo hoy, todavía, la lengua hablada a diario por una mayoría de habitantes, un estatus lingüístico preservado que convierte al archipiélago en uno de los últimos bastiones de la cultura irlandesa tradicional. La isla principal, Inishmore, alberga Dún Aonghasa, fuerte de piedra prehistórico que podría datar de la Edad del Bronce, cuyas murallas semicirculares dominan un acantilado vertical de ochenta y siete metros que se sumerge directamente en el Atlántico, sin ninguna barrera de seguridad moderna.",
        galleryImages: `${R2}/journeys/irlande-aran-gallery1.jpg,${R2}/journeys/irlande-aran-gallery2.jpg,${R2}/journeys/irlande-aran-gallery3.jpg`,
        mapMarkerX: 15,
        mapMarkerY: 35,
        days: [
          {
            dayNumber: 1,
            title: "Vélo à travers les murets de pierre d'Inishmore",
            titleEn: "Cycling through Inishmore's stone walls",
            titleEs: "Bicicleta entre los muros de piedra de Inishmore",
            description:
              "Balade à vélo sur l'île d'Inishmore, à travers un dédale de murets de pierre sèche qui délimitent des parcelles cultivées depuis des siècles.",
            descriptionEn:
              "A bike ride on Inishmore, through a maze of dry-stone walls that have marked out cultivated plots for centuries.",
            descriptionEs:
              "Paseo en bicicleta por la isla de Inishmore, a través de un laberinto de muros de piedra seca que delimitan parcelas cultivadas desde hace siglos.",
            image: `${R2}/journeys/irlande-aran-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le fort préhistorique de Dún Aonghasa",
            titleEn: "The prehistoric fort of Dún Aonghasa",
            titleEs: "El fuerte prehistórico de Dún Aonghasa",
            description:
              "Visite de Dún Aonghasa, fort de pierre préhistorique dont les murailles semi-circulaires surplombent une falaise verticale de quatre-vingt-sept mètres sans aucune barrière.",
            descriptionEn:
              "A visit to Dún Aonghasa, a prehistoric stone fort whose semi-circular walls overlook an eighty-seven-metre sheer cliff with no barrier at all.",
            descriptionEs:
              "Visita a Dún Aonghasa, fuerte de piedra prehistórico cuyas murallas semicirculares dominan un acantilado vertical de ochenta y siete metros sin ninguna barrera.",
            image: `${R2}/journeys/irlande-aran-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "pologne",
    tour: {
      name: "Pologne : Gdańsk et la forêt de Białowieża",
      nameEn: "Poland: Gdańsk and Białowieża Forest",
      nameEs: "Polonia: Gdansk y el bosque de Białowieża",
      slug: "pologne-gdansk-bialowieza",
      image: `${R2}/journeys/pologne-gdansk-bialowieza-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un port hanséatique où naquit le mouvement Solidarność, puis la dernière forêt primaire de plaine d'Europe, refuge du plus grand mammifère terrestre du continent",
      taglineEn: "A Hanseatic port where the Solidarity movement was born, then Europe's last lowland primeval forest, refuge of the continent's largest land mammal",
      taglineEs: "Un puerto hanseático donde nació el movimiento Solidaridad, y después el último bosque primario de llanura de Europa, refugio del mayor mamífero terrestre del continente",
      description:
        "Un voyage loin de Cracovie et des Tatras : Gdańsk, port hanséatique sur la Baltique dont les chantiers navals virent naître en 1980 le syndicat Solidarność, mouvement ouvrier qui allait précipiter la chute du communisme en Europe de l'Est, puis la forêt de Białowieża, dernière forêt primaire de plaine subsistant en Europe, classée à l'UNESCO et refuge d'environ six cents bisons européens réintroduits au XXe siècle après leur extinction totale à l'état sauvage en 1919.",
      descriptionEn:
        "A journey far from Kraków and the Tatras: Gdańsk, a Hanseatic port on the Baltic whose shipyards saw the birth in 1980 of the Solidarity trade union, a workers' movement that would precipitate the fall of communism in Eastern Europe, then Białowieża Forest, Europe's last surviving lowland primeval forest, UNESCO World Heritage listed and home to around six hundred European bison reintroduced in the 20th century after their total extinction in the wild in 1919.",
      descriptionEs:
        "Un viaje lejos de Cracovia y los Tatras: Gdansk, puerto hanseático en el Báltico cuyos astilleros vieron nacer en 1980 el sindicato Solidaridad, movimiento obrero que precipitaría la caída del comunismo en Europa del Este, y después el bosque de Białowieża, último bosque primario de llanura que subsiste en Europa, declarado por la UNESCO y refugio de unos seiscientos bisontes europeos reintroducidos en el siglo XX tras su extinción total en estado salvaje en 1919.",
      price: 2000,
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
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 210,
    },
    chapters: [
      {
        title: "Gdańsk, berceau de Solidarność",
        titleEn: "Gdańsk, the Birthplace of Solidarity",
        titleEs: "Gdansk, cuna de Solidaridad",
        intro:
          "Premier chapitre à Gdańsk, port hanséatique sur la Baltique dont l'histoire millénaire de commerce maritime croise en 1980 l'un des tournants majeurs du XXe siècle européen : la naissance, dans les chantiers navals Lénine de la ville, du syndicat indépendant Solidarność, premier syndicat libre d'un pays du bloc soviétique, dont les grèves menées par un jeune électricien nommé Lech Wałęsa allaient précipiter en moins d'une décennie la chute du régime communiste polonais. La vieille ville, reconstruite à l'identique après sa destruction quasi totale en 1945, conserve aujourd'hui des façades hanséatiques colorées qui rappellent l'âge d'or commercial de la cité.",
        introEn:
          "The first chapter unfolds in Gdańsk, a Hanseatic port on the Baltic whose millennium-long history of maritime trade intersected in 1980 with one of the major turning points of 20th-century Europe: the birth, in the city's Lenin Shipyard, of the independent Solidarity trade union, the first free union in a Soviet bloc country, whose strikes led by a young electrician named Lech Wałęsa would precipitate the fall of the Polish communist regime within less than a decade. The old town, rebuilt to its original appearance after near-total destruction in 1945, today retains colourful Hanseatic facades that recall the city's commercial golden age.",
        introEs:
          "El primer capítulo se desarrolla en Gdansk, puerto hanseático en el Báltico cuya milenaria historia de comercio marítimo se cruzó en 1980 con uno de los grandes puntos de inflexión de la Europa del siglo XX: el nacimiento, en el astillero Lenin de la ciudad, del sindicato independiente Solidaridad, primer sindicato libre de un país del bloque soviético, cuyas huelgas lideradas por un joven electricista llamado Lech Wałęsa precipitarían en menos de una década la caída del régimen comunista polaco. El casco antiguo, reconstruido fielmente tras su destrucción casi total en 1945, conserva hoy coloridas fachadas hanseáticas que recuerdan la edad de oro comercial de la ciudad.",
        galleryImages: `${R2}/journeys/pologne-gdansk-gallery1.jpg,${R2}/journeys/pologne-gdansk-gallery2.jpg,${R2}/journeys/pologne-gdansk-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Sur les traces de Solidarność",
            titleEn: "In the footsteps of Solidarity",
            titleEs: "Siguiendo las huellas de Solidaridad",
            description:
              "Visite des anciens chantiers navals Lénine, berceau du syndicat Solidarność, et du musée qui retrace la naissance du mouvement qui précipita la chute du communisme.",
            descriptionEn:
              "A visit to the former Lenin Shipyard, birthplace of the Solidarity trade union, and the museum tracing the birth of the movement that precipitated the fall of communism.",
            descriptionEs:
              "Visita al antiguo astillero Lenin, cuna del sindicato Solidaridad, y al museo que narra el nacimiento del movimiento que precipitó la caída del comunismo.",
            image: `${R2}/journeys/pologne-gdansk-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La vieille ville hanséatique",
            titleEn: "The Hanseatic old town",
            titleEs: "El casco antiguo hanseático",
            description:
              "Promenade dans la vieille ville de Gdańsk, reconstruite à l'identique après 1945, entre façades hanséatiques colorées et grues médiévales sur les quais de la Motława.",
            descriptionEn:
              "A stroll through Gdańsk's old town, rebuilt to its original appearance after 1945, between colourful Hanseatic facades and medieval cranes along the Motława riverbanks.",
            descriptionEs:
              "Paseo por el casco antiguo de Gdansk, reconstruido fielmente tras 1945, entre coloridas fachadas hanseáticas y grúas medievales en los muelles del Motława.",
            image: `${R2}/journeys/pologne-gdansk-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La forêt primaire de Białowieża",
        titleEn: "The Primeval Forest of Białowieża",
        titleEs: "El bosque primario de Białowieża",
        intro:
          "Route vers la forêt de Białowieża, dernière forêt primaire de plaine subsistant en Europe, classée au patrimoine mondial de l'UNESCO et partagée à la frontière avec la Biélorussie, dont les arbres centenaires jamais exploités industriellement forment un écosystème d'une richesse biologique unique sur le continent. La forêt reste le principal refuge du bison européen, plus grand mammifère terrestre d'Europe, dont la population sauvage totale s'éteignit en 1919 avant d'être reconstituée à partir de quelques dizaines d'individus survivants en captivité, un effort de conservation qui compte aujourd'hui environ six cents bisons dans le seul territoire polonais.",
        introEn:
          "The road to Białowieża Forest, Europe's last surviving lowland primeval forest, UNESCO World Heritage listed and shared across the border with Belarus, whose centuries-old trees, never industrially logged, form an ecosystem of unique biological richness on the continent. The forest remains the principal refuge of the European bison, the continent's largest land mammal, whose entire wild population went extinct in 1919 before being reconstituted from a few dozen surviving captive individuals, a conservation effort that today counts around six hundred bison in Polish territory alone.",
        introEs:
          "Ruta hacia el bosque de Białowieża, último bosque primario de llanura que subsiste en Europa, declarado Patrimonio de la Humanidad por la UNESCO y compartido en la frontera con Bielorrusia, cuyos árboles centenarios, nunca explotados industrialmente, forman un ecosistema de una riqueza biológica única en el continente. El bosque sigue siendo el principal refugio del bisonte europeo, el mayor mamífero terrestre del continente, cuya población salvaje total se extinguió en 1919 antes de ser reconstituida a partir de unas pocas decenas de individuos supervivientes en cautividad, un esfuerzo de conservación que hoy cuenta con unos seiscientos bisontes solo en territorio polaco.",
        galleryImages: `${R2}/journeys/pologne-bialowieza-gallery1.jpg,${R2}/journeys/pologne-bialowieza-gallery2.jpg,${R2}/journeys/pologne-bialowieza-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Sur les traces du bison européen",
            titleEn: "In search of the European bison",
            titleEs: "En busca del bisonte europeo",
            description:
              "Randonnée guidée dans la forêt de Białowieża à la recherche du bison européen, plus grand mammifère terrestre du continent, réintroduit après son extinction en 1919.",
            descriptionEn:
              "A guided hike through Białowieża Forest in search of the European bison, the continent's largest land mammal, reintroduced after its 1919 extinction.",
            descriptionEs:
              "Caminata guiada por el bosque de Białowieża en busca del bisonte europeo, el mayor mamífero terrestre del continente, reintroducido tras su extinción en 1919.",
            image: `${R2}/journeys/pologne-bialowieza-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les arbres centenaires de la forêt primaire",
            titleEn: "The centuries-old trees of the primeval forest",
            titleEs: "Los árboles centenarios del bosque primario",
            description:
              "Promenade parmi les arbres centenaires jamais exploités industriellement de Białowieża, dernière forêt primaire de plaine subsistant en Europe.",
            descriptionEn:
              "A walk among the centuries-old, never industrially logged trees of Białowieża, Europe's last surviving lowland primeval forest.",
            descriptionEs:
              "Paseo entre los árboles centenarios nunca explotados industrialmente de Białowieża, último bosque primario de llanura que subsiste en Europa.",
            image: `${R2}/journeys/pologne-bialowieza-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "hongrie",
    tour: {
      name: "Hongrie : le lac Balaton et la presqu'île de Tihany",
      nameEn: "Hungary: Lake Balaton and the Tihany Peninsula",
      nameEs: "Hungría: el lago Balaton y la península de Tihany",
      slug: "hongrie-balaton-tihany",
      image: `${R2}/tours/hongrie-balaton-tihany.jpg`,
      images: `${R2}/trips/hongrie-balaton-gallery-1.jpg,${R2}/trips/hongrie-balaton-gallery-2.jpg,${R2}/trips/hongrie-balaton-gallery-3.jpg,${R2}/trips/hongrie-balaton-gallery-4.jpg,${R2}/trips/hongrie-balaton-gallery-5.jpg,${R2}/trips/hongrie-balaton-gallery-6.jpg`,
      tagline: "Le plus grand lac d'Europe centrale, surnommé la « mer hongroise », dont une presqu'île volcanique parfume l'air entier de lavande en été",
      taglineEn: "Central Europe's largest lake, nicknamed the \"Hungarian Sea,\" whose volcanic peninsula perfumes the entire air with lavender in summer",
      taglineEs: "El lago más grande de Europa central, apodado el «mar húngaro», cuya península volcánica perfuma todo el aire con lavanda en verano",
      description:
        "Le lac Balaton, plus grand lac d'Europe centrale avec une superficie de près de six cents kilomètres carrés, s'est vu attribuer par les Hongrois le surnom affectueux de « mer hongroise », référence à l'absence historique d'accès du pays à une véritable côte maritime. La presqu'île volcanique de Tihany, qui s'avance dans le lac depuis sa rive nord, cultive depuis les années 1920 des champs de lavande dont le parfum embaume l'ensemble du territoire en juillet, une tradition agricole qui coexiste avec une abbaye bénédictine millénaire fondée en 1055.",
      descriptionEn:
        "Lake Balaton, Central Europe's largest lake with a surface area of nearly six hundred square kilometres, has earned from Hungarians the affectionate nickname of the \"Hungarian Sea,\" a reference to the country's historic lack of access to a true sea coast. The volcanic Tihany Peninsula, jutting into the lake from its northern shore, has cultivated lavender fields since the 1920s whose scent perfumes the entire area in July, an agricultural tradition that coexists with a thousand-year-old Benedictine abbey founded in 1055.",
      descriptionEs:
        "El lago Balaton, el mayor lago de Europa central con una superficie de casi seiscientos kilómetros cuadrados, ha recibido de los húngaros el cariñoso apodo de «mar húngaro», en referencia a la histórica falta de acceso del país a una verdadera costa marítima. La península volcánica de Tihany, que se adentra en el lago desde su orilla norte, cultiva desde la década de 1920 campos de lavanda cuyo perfume impregna toda la zona en julio, una tradición agrícola que convive con una abadía benedictina milenaria fundada en 1055.",
      price: 1500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 3,
      durationUnit: "nights",
      duration: "3 nuits",
      durationEn: "3 nights",
      durationEs: "3 noches",
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "May a sept",
      bestMonths: "may,june,july,august,september",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 205,
    },
    sections: [
      {
        heading: "La « mer hongroise »",
        headingEn: "The \"Hungarian Sea\"",
        headingEs: "El «mar húngaro»",
        body:
          "Le lac Balaton, avec ses près de six cents kilomètres carrés de superficie et sa longueur de plus de soixante-dix-sept kilomètres, constitue le plus grand lac d'Europe centrale et s'est vu attribuer par les Hongrois le surnom affectueux de « mer hongroise », en référence à l'absence historique d'accès du pays à une véritable côte maritime depuis le traité de Trianon de 1920. Ses eaux peu profondes, dont la température de surface peut dépasser vingt-cinq degrés en été, en font l'une des destinations balnéaires intérieures les plus prisées d'Europe centrale.",
        bodyEn:
          "Lake Balaton, with nearly six hundred square kilometres of surface area and a length of over seventy-seven kilometres, is Central Europe's largest lake and has earned from Hungarians the affectionate nickname of the \"Hungarian Sea,\" in reference to the country's historic lack of access to a true sea coast since the 1920 Treaty of Trianon. Its shallow waters, whose surface temperature can exceed twenty-five degrees in summer, make it one of Central Europe's most popular inland bathing destinations.",
        bodyEs:
          "El lago Balaton, con casi seiscientos kilómetros cuadrados de superficie y una longitud de más de setenta y siete kilómetros, es el mayor lago de Europa central y ha recibido de los húngaros el cariñoso apodo de «mar húngaro», en referencia a la histórica falta de acceso del país a una verdadera costa marítima desde el tratado de Trianon de 1920. Sus aguas poco profundas, cuya temperatura superficial puede superar los veinticinco grados en verano, lo convierten en uno de los destinos balnearios interiores más apreciados de Europa central.",
      },
      {
        heading: "Tihany, la presqu'île à la lavande",
        headingEn: "Tihany, the Lavender Peninsula",
        headingEs: "Tihany, la península de la lavanda",
        body:
          "La presqu'île volcanique de Tihany, formée par d'anciens geysers aujourd'hui éteints, cultive depuis les années 1920 des champs de lavande dont le parfum embaume l'ensemble du territoire durant la floraison de juillet, une tradition agricole introduite pour exploiter le sol volcanique particulier de la péninsule. L'abbaye bénédictine de Tihany, fondée en 1055 et dont la crypte abrite la tombe du roi fondateur András Ier, domine la presqu'île depuis ses hauteurs et offre un panorama complet sur l'ensemble du lac Balaton et ses rives environnantes.",
        bodyEn:
          "The volcanic Tihany Peninsula, formed by ancient now-extinct geysers, has cultivated lavender fields since the 1920s whose scent perfumes the entire area during the July bloom, an agricultural tradition introduced to make use of the peninsula's distinctive volcanic soil. Tihany Abbey, a Benedictine abbey founded in 1055 whose crypt holds the tomb of founding king András I, overlooks the peninsula from its heights and offers a complete panorama over the whole of Lake Balaton and its surrounding shores.",
        bodyEs:
          "La península volcánica de Tihany, formada por antiguos géiseres hoy extintos, cultiva desde la década de 1920 campos de lavanda cuyo perfume impregna toda la zona durante la floración de julio, una tradición agrícola introducida para aprovechar el particular suelo volcánico de la península. La abadía benedictina de Tihany, fundada en 1055 y cuya cripta alberga la tumba del rey fundador András I, domina la península desde sus alturas y ofrece un panorama completo sobre todo el lago Balaton y sus orillas circundantes.",
      },
    ],
    hotels: [
      {
        name: "Villa au bord du lac Balaton",
        nameEn: "A Villa on the Shores of Lake Balaton",
        nameEs: "Villa a orillas del lago Balaton",
        description:
          "Une villa directement au bord du lac Balaton, ponton privé et terrasse orientée vers le coucher de soleil sur les eaux du lac.",
        descriptionEn:
          "A villa directly on the shores of Lake Balaton, a private dock and a terrace facing the sunset over the lake's waters.",
        descriptionEs:
          "Una villa directamente a orillas del lago Balaton, embarcadero privado y terraza orientada hacia la puesta de sol sobre las aguas del lago.",
        image: `${R2}/trips/hongrie-balaton-hotel-1.jpg`,
      },
      {
        name: "Maison d'hôtes au cœur des lavandes de Tihany",
        nameEn: "A Guesthouse Amid the Lavender Fields of Tihany",
        nameEs: "Casa de huéspedes en los campos de lavanda de Tihany",
        description:
          "Une maison d'hôtes nichée au milieu des champs de lavande de Tihany, à courte distance de l'abbaye bénédictine et de ses points de vue sur le lac.",
        descriptionEn:
          "A guesthouse nestled amid the lavender fields of Tihany, a short distance from the Benedictine abbey and its lake viewpoints.",
        descriptionEs:
          "Una casa de huéspedes enclavada entre los campos de lavanda de Tihany, a poca distancia de la abadía benedictina y sus miradores sobre el lago.",
        image: `${R2}/trips/hongrie-balaton-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "irlande",
    tour: {
      name: "Irlande : les falaises de Moher et le comté de Clare",
      nameEn: "Ireland: the Cliffs of Moher and County Clare",
      nameEs: "Irlanda: los acantilados de Moher y el condado de Clare",
      slug: "irlande-falaises-moher-clare",
      image: `${R2}/tours/irlande-falaises-moher-clare.jpg`,
      images: `${R2}/trips/irlande-moher-gallery-1.jpg,${R2}/trips/irlande-moher-gallery-2.jpg,${R2}/trips/irlande-moher-gallery-3.jpg,${R2}/trips/irlande-moher-gallery-4.jpg,${R2}/trips/irlande-moher-gallery-5.jpg,${R2}/trips/irlande-moher-gallery-6.jpg`,
      tagline: "Des falaises verticales de plus de deux cents mètres, puis un plateau calcaire lunaire qui abrite plus de mille espèces végétales",
      taglineEn: "Sheer cliffs rising over two hundred metres, then a lunar limestone plateau home to over a thousand plant species",
      taglineEs: "Acantilados verticales de más de doscientos metros, y después una meseta caliza lunar que alberga más de mil especies vegetales",
      description:
        "Les falaises de Moher, formation rocheuse verticale qui s'élève par endroits à plus de deux cents mètres au-dessus de l'océan Atlantique sur près de quatorze kilomètres, comptent parmi les sites naturels les plus visités d'Irlande et servirent de décor à plusieurs scènes du film Harry Potter et le Prince de sang-mêlé. Non loin de là, le Burren, plateau calcaire karstique aux allures lunaires façonné il y a plus de trois cent cinquante millions d'années, abrite paradoxalement une flore d'une richesse exceptionnelle, avec plus de mille espèces végétales dont des orchidées arctiques et méditerranéennes coexistant dans les fissures de la roche.",
      descriptionEn:
        "The Cliffs of Moher, a sheer rock formation rising in places over two hundred metres above the Atlantic Ocean across nearly fourteen kilometres, rank among Ireland's most visited natural sites and served as the backdrop for several scenes in Harry Potter and the Half-Blood Prince. Not far away, the Burren, a lunar-looking karst limestone plateau shaped over three hundred and fifty million years ago, paradoxically harbours an exceptionally rich flora, with over a thousand plant species including Arctic and Mediterranean orchids coexisting in the cracks of the rock.",
      descriptionEs:
        "Los acantilados de Moher, formación rocosa vertical que se eleva en algunos puntos a más de doscientos metros sobre el océano Atlántico a lo largo de casi catorce kilómetros, se cuentan entre los lugares naturales más visitados de Irlanda y sirvieron de escenario para varias escenas de la película Harry Potter y el misterio del príncipe. No lejos de allí, el Burren, meseta caliza kárstica de aspecto lunar formada hace más de trescientos cincuenta millones de años, alberga paradójicamente una flora de una riqueza excepcional, con más de mil especies vegetales, entre ellas orquídeas árticas y mediterráneas que coexisten en las grietas de la roca.",
      price: 1800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Mai à sept",
      whenLabelEn: "May to Sept",
      whenLabelEs: "May a sept",
      bestMonths: "may,june,july,august,september",
      category: "multi-day",
      theme: "adventure",
      feeling: "revitalized",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 207,
    },
    sections: [
      {
        heading: "Les falaises de Moher, à pic sur l'Atlantique",
        headingEn: "The Cliffs of Moher, Sheer Above the Atlantic",
        headingEs: "Los acantilados de Moher, a pico sobre el Atlántico",
        body:
          "Les falaises de Moher, qui s'étendent sur près de quatorze kilomètres le long de la côte du comté de Clare et culminent à plus de deux cents mètres à leur point le plus haut, se sont formées il y a plus de trois cents millions d'années par accumulation de couches successives de grès et de schiste, aujourd'hui exposées par l'érosion continue de l'océan Atlantique. Le site, qui accueille chaque année plus d'un million de visiteurs, servit également de décor à plusieurs scènes du film Harry Potter et le Prince de sang-mêlé, où les falaises représentent l'entrée de la grotte de Voldemort.",
        bodyEn:
          "The Cliffs of Moher, stretching nearly fourteen kilometres along the County Clare coast and rising to over two hundred metres at their highest point, formed over three hundred million years ago through the accumulation of successive layers of sandstone and shale, today exposed by the Atlantic Ocean's continuous erosion. The site, which welcomes over a million visitors each year, also served as the backdrop for several scenes in Harry Potter and the Half-Blood Prince, where the cliffs represent the entrance to Voldemort's cave.",
        bodyEs:
          "Los acantilados de Moher, que se extienden casi catorce kilómetros a lo largo de la costa del condado de Clare y alcanzan más de doscientos metros en su punto más alto, se formaron hace más de trescientos millones de años por la acumulación de capas sucesivas de arenisca y esquisto, hoy expuestas por la erosión continua del océano Atlántico. El lugar, que recibe cada año a más de un millón de visitantes, sirvió también de escenario para varias escenas de Harry Potter y el misterio del príncipe, donde los acantilados representan la entrada de la cueva de Voldemort.",
      },
      {
        heading: "Le Burren, un jardin dans la roche",
        headingEn: "The Burren, a Garden in the Rock",
        headingEs: "El Burren, un jardín en la roca",
        body:
          "Le Burren, dont le nom gaélique Boireann signifie littéralement « lieu rocheux », s'étend sur environ deux cent cinquante kilomètres carrés de plateau calcaire karstique façonné il y a plus de trois cent cinquante millions d'années, offrant un paysage lunaire dépourvu de sol visible qui contraste radicalement avec les paysages verdoyants habituels de l'Irlande. Ce désert de pierre apparent abrite paradoxalement l'une des flores les plus diverses d'Irlande, avec plus de mille espèces végétales, dont des orchidées arctiques-alpines et méditerranéennes qui coexistent contre toute logique climatique dans les fissures protectrices de la roche calcaire.",
        bodyEn:
          "The Burren, whose Gaelic name Boireann literally means \"rocky place,\" spans around two hundred and fifty square kilometres of karst limestone plateau shaped over three hundred and fifty million years ago, offering a lunar landscape devoid of visible soil that contrasts radically with Ireland's usual green landscapes. This apparent stone desert paradoxically harbours one of Ireland's most diverse floras, with over a thousand plant species, including Arctic-alpine and Mediterranean orchids that coexist against all climatic logic in the protective cracks of the limestone rock.",
        bodyEs:
          "El Burren, cuyo nombre gaélico Boireann significa literalmente «lugar rocoso», se extiende por unos doscientos cincuenta kilómetros cuadrados de meseta caliza kárstica formada hace más de trescientos cincuenta millones de años, ofreciendo un paisaje lunar carente de suelo visible que contrasta radicalmente con los habituales paisajes verdes de Irlanda. Este aparente desierto de piedra alberga paradójicamente una de las floras más diversas de Irlanda, con más de mil especies vegetales, entre ellas orquídeas ártico-alpinas y mediterráneas que coexisten contra toda lógica climática en las grietas protectoras de la roca caliza.",
      },
    ],
    hotels: [
      {
        name: "Cottage traditionnel dans le Burren",
        nameEn: "A Traditional Cottage in the Burren",
        nameEs: "Cottage tradicional en el Burren",
        description:
          "Un cottage traditionnel en pierre au cœur du Burren, à courte distance des falaises de Moher et des sentiers de randonnée à travers le plateau calcaire.",
        descriptionEn:
          "A traditional stone cottage at the heart of the Burren, a short distance from the Cliffs of Moher and the hiking trails across the limestone plateau.",
        descriptionEs:
          "Un cottage tradicional de piedra en el corazón del Burren, a poca distancia de los acantilados de Moher y de los senderos de excursión por la meseta caliza.",
        image: `${R2}/trips/irlande-moher-hotel-1.jpg`,
      },
      {
        name: "Auberge de charme au bord de l'Atlantique",
        nameEn: "A Charming Inn on the Atlantic Coast",
        nameEs: "Posada con encanto en la costa atlántica",
        description:
          "Une auberge de charme sur la côte du comté de Clare, chambres avec vue sur l'océan à distance de marche des falaises de Moher.",
        descriptionEn:
          "A charming inn on the County Clare coast, rooms with ocean views within walking distance of the Cliffs of Moher.",
        descriptionEs:
          "Una posada con encanto en la costa del condado de Clare, habitaciones con vistas al océano a poca distancia a pie de los acantilados de Moher.",
        image: `${R2}/trips/irlande-moher-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "pologne",
    tour: {
      name: "Pologne : Cracovie et Zakopane, les Tatras",
      nameEn: "Poland: Kraków and Zakopane, the Tatra Mountains",
      nameEs: "Polonia: Cracovia y Zakopane, los Tatras",
      slug: "pologne-cracovie-zakopane-tatras",
      image: `${R2}/tours/pologne-cracovie-zakopane-tatras.jpg`,
      images: `${R2}/trips/pologne-zakopane-gallery-1.jpg,${R2}/trips/pologne-zakopane-gallery-2.jpg,${R2}/trips/pologne-zakopane-gallery-3.jpg,${R2}/trips/pologne-zakopane-gallery-4.jpg,${R2}/trips/pologne-zakopane-gallery-5.jpg,${R2}/trips/pologne-zakopane-gallery-6.jpg`,
      tagline: "La « capitale d'hiver » de la Pologne, où une architecture en bois régionale unique a inspiré un style national entier",
      taglineEn: "Poland's \"winter capital,\" where a unique regional wooden architecture inspired an entire national style",
      taglineEs: "La «capital de invierno» de Polonia, donde una arquitectura de madera regional única inspiró todo un estilo nacional",
      description:
        "Zakopane, ville de montagne nichée au pied des Tatras et surnommée depuis le XIXe siècle la « capitale d'hiver » de la Pologne, doit sa renommée architecturale au style Zakopane, courant né à la fin du XIXe siècle sous l'impulsion de l'architecte Stanisław Witkiewicz, qui s'inspira des chalets en bois traditionnels de la région montagnarde des Podhaliens pour créer un style décoratif entier, aujourd'hui reconnu comme l'une des premières tentatives d'architecture nationale polonaise consciente. Les Tatras, seule chaîne alpine de Pologne, culminent au mont Rysy à deux mille cinq cents mètres et offrent un contraste saisissant avec les plaines qui composent l'essentiel du territoire polonais.",
      descriptionEn:
        "Zakopane, a mountain town nestled at the foot of the Tatras and nicknamed since the 19th century Poland's \"winter capital,\" owes its architectural fame to the Zakopane Style, a movement born in the late 19th century under the impetus of architect Stanisław Witkiewicz, who drew on the traditional wooden chalets of the Podhale highland region to create an entire decorative style, today recognised as one of the earliest conscious attempts at a Polish national architecture. The Tatras, Poland's only alpine range, peak at Mount Rysy at two thousand five hundred metres and offer a striking contrast with the plains that make up most of Polish territory.",
      descriptionEs:
        "Zakopane, ciudad de montaña enclavada al pie de los Tatras y apodada desde el siglo XIX la «capital de invierno» de Polonia, debe su fama arquitectónica al estilo Zakopane, movimiento nacido a finales del siglo XIX por impulso del arquitecto Stanisław Witkiewicz, que se inspiró en los chalets de madera tradicionales de la región montañosa de Podhale para crear todo un estilo decorativo, hoy reconocido como uno de los primeros intentos conscientes de una arquitectura nacional polaca. Los Tatras, única cadena alpina de Polonia, culminan en el monte Rysy a dos mil quinientos metros y ofrecen un contraste llamativo con las llanuras que componen la mayor parte del territorio polaco.",
      price: 1700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Déc à mars | Juin à sept",
      whenLabelEn: "Dec to March | June to Sept",
      whenLabelEs: "Dic a marzo | jun a sept",
      bestMonths: "december,january,february,march,june,july,august,september",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 209,
    },
    sections: [
      {
        heading: "Le style Zakopane, une architecture nationale",
        headingEn: "The Zakopane Style, a National Architecture",
        headingEs: "El estilo Zakopane, una arquitectura nacional",
        body:
          "Le style Zakopane, né à la fin du XIXe siècle sous l'impulsion de l'architecte et écrivain Stanisław Witkiewicz, s'inspira des chalets en bois traditionnels des bergers Podhaliens pour créer un langage décoratif entièrement nouveau, caractérisé par des toits pentus, des poutres sculptées et des motifs géométriques peints directement issus de l'artisanat populaire local. Ce mouvement, aujourd'hui reconnu comme l'une des premières tentatives conscientes de créer une architecture nationale polonaise distincte des influences autrichiennes et allemandes environnantes, reste visible dans plusieurs villas historiques de Zakopane classées monuments protégés.",
        bodyEn:
          "The Zakopane Style, born in the late 19th century under the impetus of architect and writer Stanisław Witkiewicz, drew on the traditional wooden chalets of the Podhale shepherds to create an entirely new decorative language, characterised by steep roofs, carved beams, and geometric motifs painted directly from local folk craftsmanship. This movement, today recognised as one of the earliest conscious attempts to create a Polish national architecture distinct from the surrounding Austrian and German influences, remains visible in several historic Zakopane villas listed as protected monuments.",
        bodyEs:
          "El estilo Zakopane, nacido a finales del siglo XIX por impulso del arquitecto y escritor Stanisław Witkiewicz, se inspiró en los chalets de madera tradicionales de los pastores de Podhale para crear un lenguaje decorativo completamente nuevo, caracterizado por techos empinados, vigas talladas y motivos geométricos pintados extraídos directamente de la artesanía popular local. Este movimiento, hoy reconocido como uno de los primeros intentos conscientes de crear una arquitectura nacional polaca distinta de las influencias austriacas y alemanas circundantes, sigue siendo visible en varias villas históricas de Zakopane declaradas monumentos protegidos.",
      },
      {
        heading: "Les Tatras, seule chaîne alpine de Pologne",
        headingEn: "The Tatras, Poland's Only Alpine Range",
        headingEs: "Los Tatras, única cadena alpina de Polonia",
        body:
          "Les Tatras, seule chaîne de montagnes véritablement alpines de Pologne, s'étendent à cheval sur la frontière slovaque et culminent côté polonais au mont Rysy, à deux mille cinq cents mètres d'altitude, offrant un contraste géographique saisissant avec les vastes plaines qui composent l'essentiel du territoire national. Le parc national des Tatras, créé en 1954 pour protéger cet écosystème montagnard unique en Pologne, abrite une faune remarquable incluant le chamois des Tatras et l'ours brun, ainsi qu'un réseau de sentiers de randonnée qui attire chaque année des centaines de milliers de visiteurs vers ses lacs glaciaires et ses sommets rocheux.",
        bodyEn:
          "The Tatras, Poland's only truly alpine mountain range, straddle the Slovak border and peak on the Polish side at Mount Rysy, at two thousand five hundred metres altitude, offering a striking geographic contrast with the vast plains that make up most of the national territory. Tatra National Park, created in 1954 to protect this mountain ecosystem unique in Poland, is home to remarkable wildlife including the Tatra chamois and the brown bear, as well as a network of hiking trails that draws hundreds of thousands of visitors each year to its glacial lakes and rocky summits.",
        bodyEs:
          "Los Tatras, única cadena montañosa verdaderamente alpina de Polonia, se extienden a caballo sobre la frontera eslovaca y culminan en el lado polaco en el monte Rysy, a dos mil quinientos metros de altitud, ofreciendo un contraste geográfico llamativo con las vastas llanuras que componen la mayor parte del territorio nacional. El parque nacional de los Tatras, creado en 1954 para proteger este ecosistema de montaña único en Polonia, alberga una fauna notable que incluye la gamuza de los Tatras y el oso pardo, así como una red de senderos de excursión que atrae cada año a cientos de miles de visitantes a sus lagos glaciares y cumbres rocosas.",
      },
    ],
    hotels: [
      {
        name: "Chalet en bois de style Zakopane",
        nameEn: "A Zakopane-Style Wooden Chalet",
        nameEs: "Chalet de madera al estilo Zakopane",
        description:
          "Un chalet en bois construit dans le style Zakopane traditionnel, poutres sculptées et motifs peints, à distance de marche du centre-ville et des remontées mécaniques.",
        descriptionEn:
          "A wooden chalet built in the traditional Zakopane style, carved beams and painted motifs, within walking distance of downtown and the ski lifts.",
        descriptionEs:
          "Un chalet de madera construido en el estilo Zakopane tradicional, vigas talladas y motivos pintados, a poca distancia a pie del centro y los remontes.",
        image: `${R2}/trips/pologne-zakopane-hotel-1.jpg`,
      },
      {
        name: "Auberge de montagne au pied des Tatras",
        nameEn: "A Mountain Inn at the Foot of the Tatras",
        nameEs: "Posada de montaña al pie de los Tatras",
        description:
          "Une auberge de montagne traditionnelle au pied des Tatras, point de départ pratique pour les randonnées vers les lacs glaciaires et les sommets rocheux.",
        descriptionEn:
          "A traditional mountain inn at the foot of the Tatras, a convenient starting point for hikes to the glacial lakes and rocky summits.",
        descriptionEs:
          "Una posada de montaña tradicional al pie de los Tatras, punto de partida práctico para las excursiones a los lagos glaciares y las cumbres rocosas.",
        image: `${R2}/trips/pologne-zakopane-hotel-2.jpg`,
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
