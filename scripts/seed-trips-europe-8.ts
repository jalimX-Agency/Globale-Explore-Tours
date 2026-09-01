// Europe batch 8 — Pays-Bas, Belgique, Chypre. Final Europe batch: brings all 24 European
// destinations to at least 3 trips. Styled on Black Tomato's real structure (a short number of
// named-hotel chapters, not an exhaustive day-by-day grind) rather than copying their text.
// Run with:
//   npx tsx scripts/seed-trips-europe-8.ts
// Requires scripts/upload-images-europe-8.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "pays-bas",
    tour: {
      name: "Pays-Bas : Utrecht et Giethoorn",
      nameEn: "Netherlands: Utrecht and Giethoorn",
      nameEs: "Países Bajos: Utrecht y Giethoorn",
      slug: "pays-bas-utrecht-giethoorn",
      image: `${R2}/journeys/pays-bas-utrecht-giethoorn-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Des canaux médiévaux creusés sur deux niveaux, puis un village sans une seule route où l'on se déplace exclusivement en barque",
      taglineEn: "Medieval canals dug on two levels, then a village with not a single road, where travel happens exclusively by boat",
      taglineEs: "Canales medievales excavados en dos niveles, y después un pueblo sin una sola carretera, donde se circula exclusivamente en barca",
      description:
        "Un voyage loin d'Amsterdam et des champs de tulipes : Utrecht, ville universitaire dont les canaux médiévaux du Oudegracht furent creusés dès le XIIe siècle sur deux niveaux distincts, un système unique au monde où des quais inférieurs servaient historiquement d'entrepôts directement accessibles depuis l'eau, puis Giethoorn, village surnommé la « Venise du Nord », dont l'absence quasi totale de routes carrossables impose depuis des siècles un déplacement exclusif en barque à travers un réseau de canaux bordés de maisons au toit de chaume.",
      descriptionEn:
        "A journey far from Amsterdam and the tulip fields: Utrecht, a university town whose medieval Oudegracht canals were dug as early as the 12th century on two distinct levels, a system unique in the world where lower wharves historically served as warehouses directly accessible from the water, then Giethoorn, a village nicknamed the \"Venice of the North,\" whose near-total absence of driveable roads has for centuries required travel exclusively by boat across a network of canals lined with thatched-roof houses.",
      descriptionEs:
        "Un viaje lejos de Ámsterdam y los campos de tulipanes: Utrecht, ciudad universitaria cuyos canales medievales del Oudegracht se excavaron ya en el siglo XII en dos niveles distintos, un sistema único en el mundo donde los muelles inferiores servían históricamente de almacenes directamente accesibles desde el agua, y después Giethoorn, pueblo apodado la «Venecia del Norte», cuya ausencia casi total de carreteras transitables exige desde hace siglos desplazarse exclusivamente en barca por una red de canales bordeados de casas de tejado de paja.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Avril à sept",
      whenLabelEn: "April to Sept",
      whenLabelEs: "Abril a sept",
      bestMonths: "april,may,june,july,august,september",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 218,
    },
    chapters: [
      {
        title: "Utrecht et ses canaux à deux niveaux",
        titleEn: "Utrecht and Its Two-Level Canals",
        titleEs: "Utrecht y sus canales de dos niveles",
        intro:
          "Premier chapitre à Utrecht, ville universitaire dont le centre historique s'organise autour de l'Oudegracht, canal médiéval creusé dès le XIIe siècle selon un système unique au monde de quais superposés sur deux niveaux distincts. Les quais inférieurs, directement au bord de l'eau, servaient historiquement d'entrepôts et de caves marchandes accessibles depuis les bateaux, tandis que les quais supérieurs accueillaient la circulation piétonne et commerciale de la ville, une configuration architecturale qui distingue radicalement Utrecht d'Amsterdam et de ses canaux à niveau unique.",
        introEn:
          "The first chapter unfolds in Utrecht, a university town whose historic centre is organised around the Oudegracht, a medieval canal dug as early as the 12th century following a system unique in the world of stacked wharves on two distinct levels. The lower wharves, directly at the water's edge, historically served as warehouses and merchant cellars accessible from boats, while the upper wharves handled the city's pedestrian and commercial traffic, an architectural configuration that radically distinguishes Utrecht from Amsterdam and its single-level canals.",
        introEs:
          "El primer capítulo se desarrolla en Utrecht, ciudad universitaria cuyo centro histórico se organiza en torno al Oudegracht, canal medieval excavado ya en el siglo XII según un sistema único en el mundo de muelles superpuestos en dos niveles distintos. Los muelles inferiores, directamente a la orilla del agua, servían históricamente de almacenes y bodegas mercantiles accesibles desde los barcos, mientras que los muelles superiores acogían el tráfico peatonal y comercial de la ciudad, una configuración arquitectónica que distingue radicalmente Utrecht de Ámsterdam y sus canales de nivel único.",
        galleryImages: `${R2}/journeys/pays-bas-utrecht-gallery1.jpg,${R2}/journeys/pays-bas-utrecht-gallery2.jpg,${R2}/journeys/pays-bas-utrecht-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Balade en barque sur l'Oudegracht",
            titleEn: "A boat ride along the Oudegracht",
            titleEs: "Paseo en barca por el Oudegracht",
            description:
              "Balade en barque le long de l'Oudegracht, découvrant depuis l'eau le système unique de quais superposés sur deux niveaux qui caractérise Utrecht.",
            descriptionEn:
              "A boat ride along the Oudegracht, discovering from the water the unique system of stacked two-level wharves that characterises Utrecht.",
            descriptionEs:
              "Paseo en barca por el Oudegracht, descubriendo desde el agua el sistema único de muelles superpuestos en dos niveles que caracteriza Utrecht.",
            image: `${R2}/journeys/pays-bas-utrecht-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La tour Dom et le centre historique",
            titleEn: "Dom Tower and the historic centre",
            titleEs: "La torre Dom y el centro histórico",
            description:
              "Ascension de la tour Dom, plus haute tour d'église des Pays-Bas, avant une promenade dans le centre historique universitaire d'Utrecht.",
            descriptionEn:
              "An ascent of Dom Tower, the tallest church tower in the Netherlands, followed by a stroll through Utrecht's historic university centre.",
            descriptionEs:
              "Ascenso a la torre Dom, la torre de iglesia más alta de los Países Bajos, antes de un paseo por el centro histórico universitario de Utrecht.",
            image: `${R2}/journeys/pays-bas-utrecht-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Giethoorn, la Venise du Nord",
        titleEn: "Giethoorn, the Venice of the North",
        titleEs: "Giethoorn, la Venecia del Norte",
        intro:
          "Route vers Giethoorn, village surnommé la « Venise du Nord » dont l'origine remonte au XIIIe siècle, lorsque des moines fuyant les persécutions religieuses s'y installèrent et commencèrent à extraire la tourbe, creusant progressivement le réseau de canaux qui allait devenir la principale voie de circulation du village. Aujourd'hui encore, Giethoorn ne compte quasiment aucune route carrossable au cœur de son centre historique, imposant aux résidents comme aux visiteurs un déplacement exclusif en barque électrique silencieuse ou à rames le long de canaux bordés de plus de cent quatre-vingts ponts en bois et de maisons traditionnelles au toit de chaume.",
        introEn:
          "The road to Giethoorn, a village nicknamed the \"Venice of the North\" whose origin dates back to the 13th century, when monks fleeing religious persecution settled there and began extracting peat, gradually digging the network of canals that would become the village's main means of circulation. To this day, Giethoorn has virtually no driveable roads at the heart of its historic centre, requiring residents and visitors alike to travel exclusively by silent electric boat or rowing boat along canals lined with over a hundred and eighty wooden bridges and traditional thatched-roof houses.",
        introEs:
          "Ruta hacia Giethoorn, pueblo apodado la «Venecia del Norte» cuyo origen se remonta al siglo XIII, cuando monjes que huían de persecuciones religiosas se instalaron allí y comenzaron a extraer turba, excavando progresivamente la red de canales que se convertiría en la principal vía de circulación del pueblo. Todavía hoy, Giethoorn no cuenta con prácticamente ninguna carretera transitable en el corazón de su centro histórico, lo que obliga a residentes y visitantes por igual a desplazarse exclusivamente en barca eléctrica silenciosa o de remos por canales bordeados de más de ciento ochenta puentes de madera y casas tradicionales de tejado de paja.",
        galleryImages: `${R2}/journeys/pays-bas-giethoorn-gallery1.jpg,${R2}/journeys/pays-bas-giethoorn-gallery2.jpg,${R2}/journeys/pays-bas-giethoorn-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Navigation silencieuse à travers Giethoorn",
            titleEn: "A silent boat trip through Giethoorn",
            titleEs: "Navegación silenciosa por Giethoorn",
            description:
              "Navigation en barque électrique silencieuse à travers les canaux de Giethoorn, village dépourvu de route carrossable au cœur de son centre historique.",
            descriptionEn:
              "A trip by silent electric boat through the canals of Giethoorn, a village with no driveable road at the heart of its historic centre.",
            descriptionEs:
              "Navegación en barca eléctrica silenciosa por los canales de Giethoorn, pueblo sin carretera transitable en el corazón de su centro histórico.",
            image: `${R2}/journeys/pays-bas-giethoorn-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "À vélo le long des chemins de halage",
            titleEn: "Cycling along the towpaths",
            titleEs: "En bicicleta por los caminos de sirga",
            description:
              "Balade à vélo le long des chemins de halage qui longent les canaux de Giethoorn, entre chaumières traditionnelles et jardins fleuris.",
            descriptionEn:
              "A bike ride along the towpaths that run alongside Giethoorn's canals, between traditional thatched cottages and flower gardens.",
            descriptionEs:
              "Paseo en bicicleta por los caminos de sirga que bordean los canales de Giethoorn, entre casas de tejado de paja tradicionales y jardines floridos.",
            image: `${R2}/journeys/pays-bas-giethoorn-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "belgique",
    tour: {
      name: "Belgique : les Ardennes et Gand",
      nameEn: "Belgium: the Ardennes and Ghent",
      nameEs: "Bélgica: las Ardenas y Gante",
      slug: "belgique-ardennes-gand",
      image: `${R2}/journeys/belgique-ardennes-gand-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une forêt de collines et de grottes qui fut le théâtre de la dernière grande offensive allemande de 1944, puis une ville flamande dominée par un château féodal en plein centre",
      taglineEn: "A forest of hills and caves that was the site of Germany's last major 1944 offensive, then a Flemish city dominated by a feudal castle at its very centre",
      taglineEs: "Un bosque de colinas y cuevas que fue escenario de la última gran ofensiva alemana de 1944, y después una ciudad flamenca dominada por un castillo feudal en pleno centro",
      description:
        "Un voyage loin de Bruxelles et de Bruges : les Ardennes belges, massif forestier vallonné dont les grottes calcaires et les châteaux médiévaux dissimulent une histoire plus sombre, celle de la bataille des Ardennes de l'hiver 1944-1945, dernière grande offensive allemande à l'Ouest qui coûta la vie à des dizaines de milliers de soldats dans des conditions hivernales extrêmes, puis Gand, ville flamande dominée en plein centre historique par le Gravensteen, château fort du XIIe siècle entouré de douves qui demeure l'un des rares exemples européens de forteresse féodale intégrée au cœur d'un tissu urbain moderne.",
      descriptionEn:
        "A journey far from Brussels and Bruges: the Belgian Ardennes, a hilly forested massif whose limestone caves and medieval castles conceal a darker history, that of the Battle of the Bulge in the winter of 1944-1945, Germany's last major offensive in the West, which cost tens of thousands of soldiers their lives in extreme winter conditions, then Ghent, a Flemish city dominated at the very heart of its historic centre by the Gravensteen, a 12th-century moated castle that remains one of Europe's rare examples of a feudal fortress embedded within a modern urban fabric.",
      descriptionEs:
        "Un viaje lejos de Bruselas y Brujas: las Ardenas belgas, macizo forestal ondulado cuyas cuevas calizas y castillos medievales ocultan una historia más sombría, la de la batalla de las Ardenas del invierno de 1944-1945, última gran ofensiva alemana en el Oeste que costó la vida a decenas de miles de soldados en condiciones invernales extremas, y después Gante, ciudad flamenca dominada en pleno centro histórico por el Gravensteen, castillo fortificado del siglo XII rodeado de fosos que sigue siendo uno de los pocos ejemplos europeos de fortaleza feudal integrada en el corazón de un tejido urbano moderno.",
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
      order: 220,
    },
    chapters: [
      {
        title: "Les Ardennes, forêts et mémoire",
        titleEn: "The Ardennes, Forests and Memory",
        titleEs: "Las Ardenas, bosques y memoria",
        intro:
          "Premier chapitre dans les Ardennes belges, massif forestier vallonné dont les paysages de collines densément boisées et de grottes calcaires, comme celles de Han-sur-Lesse ou de Remouchamps, contrastent avec le souvenir plus sombre de la bataille des Ardennes de l'hiver 1944-1945. Cette offensive, dernière tentative allemande de percer les lignes alliées à l'Ouest, se déroula dans des conditions hivernales extrêmes qui coûtèrent la vie à des dizaines de milliers de soldats des deux camps, un épisode dont plusieurs musées et mémoriaux disséminés à travers la région, notamment à Bastogne, perpétuent aujourd'hui la mémoire.",
        introEn:
          "The first chapter unfolds in the Belgian Ardennes, a hilly forested massif whose landscapes of densely wooded hills and limestone caves, such as those of Han-sur-Lesse or Remouchamps, contrast with the darker memory of the Battle of the Bulge in the winter of 1944-1945. This offensive, Germany's last attempt to break through Allied lines in the West, unfolded in extreme winter conditions that cost tens of thousands of soldiers on both sides their lives, an episode whose memory is kept alive today by several museums and memorials scattered across the region, notably in Bastogne.",
        introEs:
          "El primer capítulo se desarrolla en las Ardenas belgas, macizo forestal ondulado cuyos paisajes de colinas densamente boscosas y cuevas calizas, como las de Han-sur-Lesse o Remouchamps, contrastan con el recuerdo más sombrío de la batalla de las Ardenas del invierno de 1944-1945. Esta ofensiva, último intento alemán de romper las líneas aliadas en el Oeste, se desarrolló en condiciones invernales extremas que costaron la vida a decenas de miles de soldados de ambos bandos, un episodio cuya memoria perpetúan hoy varios museos y monumentos conmemorativos repartidos por la región, especialmente en Bastogne.",
        galleryImages: `${R2}/journeys/belgique-ardennes-gallery1.jpg,${R2}/journeys/belgique-ardennes-gallery2.jpg,${R2}/journeys/belgique-ardennes-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "Exploration des grottes de Han-sur-Lesse",
            titleEn: "Exploring the caves of Han-sur-Lesse",
            titleEs: "Exploración de las cuevas de Han-sur-Lesse",
            description:
              "Exploration des grottes calcaires de Han-sur-Lesse, réseau souterrain parmi les plus visités de Belgique, creusé par la rivière Lesse sur des millions d'années.",
            descriptionEn:
              "An exploration of the limestone caves of Han-sur-Lesse, one of Belgium's most visited underground networks, carved by the Lesse River over millions of years.",
            descriptionEs:
              "Exploración de las cuevas calizas de Han-sur-Lesse, una de las redes subterráneas más visitadas de Bélgica, excavada por el río Lesse a lo largo de millones de años.",
            image: `${R2}/journeys/belgique-ardennes-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sur les traces de la bataille des Ardennes",
            titleEn: "In the footsteps of the Battle of the Bulge",
            titleEs: "Siguiendo las huellas de la batalla de las Ardenas",
            description:
              "Visite des mémoriaux de Bastogne, dédiés à la bataille des Ardennes de l'hiver 1944-1945, dernière grande offensive allemande à l'Ouest.",
            descriptionEn:
              "A visit to the memorials of Bastogne, dedicated to the Battle of the Bulge of the winter of 1944-1945, Germany's last major offensive in the West.",
            descriptionEs:
              "Visita a los monumentos conmemorativos de Bastogne, dedicados a la batalla de las Ardenas del invierno de 1944-1945, última gran ofensiva alemana en el Oeste.",
            image: `${R2}/journeys/belgique-ardennes-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Gand et le château du Gravensteen",
        titleEn: "Ghent and Gravensteen Castle",
        titleEs: "Gante y el castillo de Gravensteen",
        intro:
          "Route vers Gand, ville flamande dont le centre historique reste dominé par le Gravensteen, « château des comtes » du XIIe siècle entouré de douves, qui demeure l'un des rares exemples européens de forteresse féodale intégrée directement au cœur d'un tissu urbain moderne plutôt que reléguée en périphérie. Construit en 1180 par le comte Philippe d'Alsace après un voyage aux croisades qui l'inspira dans son architecture défensive, le château servit successivement de résidence comtale, de prison, d'hôtel des monnaies puis d'usine textile avant sa restauration au XXe siècle, un parcours qui témoigne de la capacité d'adaptation du bâti historique gantois.",
        introEn:
          "The road to Ghent, a Flemish city whose historic centre remains dominated by the Gravensteen, the 12th-century \"Castle of the Counts\" surrounded by a moat, which remains one of Europe's rare examples of a feudal fortress embedded directly within a modern urban fabric rather than relegated to the outskirts. Built in 1180 by Count Philip of Alsace after a crusading journey that inspired its defensive architecture, the castle successively served as a count's residence, a prison, a mint, and a textile factory before its 20th-century restoration, a history that testifies to the adaptability of Ghent's historic built fabric.",
        introEs:
          "Ruta hacia Gante, ciudad flamenca cuyo centro histórico sigue dominado por el Gravensteen, el «castillo de los condes» del siglo XII rodeado de un foso, que sigue siendo uno de los pocos ejemplos europeos de fortaleza feudal integrada directamente en el corazón de un tejido urbano moderno en lugar de relegada a las afueras. Construido en 1180 por el conde Felipe de Alsacia tras un viaje a las cruzadas que inspiró su arquitectura defensiva, el castillo sirvió sucesivamente de residencia condal, prisión, casa de moneda y fábrica textil antes de su restauración en el siglo XX, un recorrido que da testimonio de la capacidad de adaptación del patrimonio histórico de Gante.",
        galleryImages: `${R2}/journeys/belgique-gand-gallery1.jpg,${R2}/journeys/belgique-gand-gallery2.jpg,${R2}/journeys/belgique-gand-gallery3.jpg`,
        mapMarkerX: 25,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Le château du Gravensteen",
            titleEn: "Gravensteen Castle",
            titleEs: "El castillo de Gravensteen",
            description:
              "Visite du Gravensteen, château fort du XIIe siècle entouré de douves qui domine encore aujourd'hui le centre historique de Gand.",
            descriptionEn:
              "A visit to the Gravensteen, a 12th-century moated castle that still dominates Ghent's historic centre today.",
            descriptionEs:
              "Visita al Gravensteen, castillo fortificado del siglo XII rodeado de foso que todavía hoy domina el centro histórico de Gante.",
            image: `${R2}/journeys/belgique-gand-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Balade en barque sur les canaux de Gand",
            titleEn: "A boat ride on the canals of Ghent",
            titleEs: "Paseo en barca por los canales de Gante",
            description:
              "Balade en barque sur les canaux de Gand, entre façades des guildes médiévales et vue sur les trois tours emblématiques du centre historique.",
            descriptionEn:
              "A boat ride on the canals of Ghent, between medieval guild-house facades and views of the three iconic towers of the historic centre.",
            descriptionEs:
              "Paseo en barca por los canales de Gante, entre fachadas de los gremios medievales y vistas de las tres torres emblemáticas del centro histórico.",
            image: `${R2}/journeys/belgique-gand-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "chypre",
    tour: {
      name: "Chypre : les Troodos et la péninsule d'Akamas",
      nameEn: "Cyprus: the Troodos Mountains and Akamas Peninsula",
      nameEs: "Chipre: los Troodos y la península de Akamas",
      slug: "chypre-troodos-akamas",
      image: `${R2}/journeys/chypre-troodos-akamas-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Neuf églises byzantines peintes classées à l'UNESCO nichées dans les montagnes, puis la dernière côte sauvage de Chypre où nichent des tortues marines",
      taglineEn: "Nine UNESCO-listed painted Byzantine churches nestled in the mountains, then Cyprus's last wild coastline, where sea turtles nest",
      taglineEs: "Nueve iglesias bizantinas pintadas declaradas por la UNESCO enclavadas en las montañas, y después la última costa salvaje de Chipre, donde anidan tortugas marinas",
      description:
        "Un voyage loin de Paphos et de son parc archéologique : les monts Troodos, massif montagneux du centre de l'île qui abrite neuf églises byzantines peintes classées au patrimoine mondial de l'UNESCO, dont les fresques intérieures d'une richesse exceptionnelle contrastent délibérément avec des façades extérieures modestes en pierre ou en bois destinées à dissimuler leur valeur aux envahisseurs successifs, puis la péninsule d'Akamas, dernière grande étendue de littoral chypriote demeurée sans développement touristique, où les plages de Lara accueillent chaque été la ponte de tortues caouannes et vertes menacées.",
      descriptionEn:
        "A journey far from Paphos and its archaeological park: the Troodos Mountains, a mountain massif at the island's centre home to nine painted Byzantine churches UNESCO World Heritage listed, whose exceptionally rich interior frescoes deliberately contrast with modest exterior facades of stone or wood meant to conceal their value from successive invaders, then the Akamas Peninsula, Cyprus's last major stretch of coastline to remain free of tourist development, where the beaches of Lara host the nesting of endangered loggerhead and green sea turtles every summer.",
      descriptionEs:
        "Un viaje lejos de Pafos y su parque arqueológico: los montes Troodos, macizo montañoso del centro de la isla que alberga nueve iglesias bizantinas pintadas declaradas Patrimonio de la Humanidad por la UNESCO, cuyos frescos interiores de una riqueza excepcional contrastan deliberadamente con fachadas exteriores modestas de piedra o madera destinadas a ocultar su valor a los sucesivos invasores, y después la península de Akamas, último gran tramo de litoral chipriota que permanece sin desarrollo turístico, donde las playas de Lara acogen cada verano la puesta de tortugas bobas y verdes en peligro de extinción.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mai à juin | Sept à oct",
      whenLabelEn: "May to June | Sept to Oct",
      whenLabelEs: "May a jun | sept a oct",
      bestMonths: "may,june,september,october",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 222,
    },
    chapters: [
      {
        title: "Les Troodos, montagnes des fresques byzantines",
        titleEn: "The Troodos, Mountains of Byzantine Frescoes",
        titleEs: "Los Troodos, montañas de los frescos bizantinos",
        intro:
          "Premier chapitre dans les monts Troodos, massif montagneux du centre de Chypre qui abrite neuf églises et monastères byzantins peints, classés ensemble au patrimoine mondial de l'UNESCO pour leur cycle exceptionnel de fresques religieuses couvrant une période allant du XIe au XVIe siècle. Ces édifices adoptent délibérément une architecture extérieure modeste, en pierre brute ou en bois, souvent recouverte d'un toit incliné supplémentaire destiné à protéger les fresques de la neige hivernale, une discrétion qui visait également à dissimuler la richesse intérieure de ces sanctuaires aux yeux des envahisseurs successifs de l'île.",
        introEn:
          "The first chapter unfolds in the Troodos Mountains, a mountain massif at the centre of Cyprus home to nine painted Byzantine churches and monasteries, jointly UNESCO World Heritage listed for their exceptional cycle of religious frescoes spanning a period from the 11th to the 16th century. These buildings deliberately adopt a modest exterior architecture, in raw stone or wood, often covered with an additional sloped roof meant to protect the frescoes from winter snow, a discretion that also aimed to conceal the interior wealth of these sanctuaries from the island's successive invaders.",
        introEs:
          "El primer capítulo se desarrolla en los montes Troodos, macizo montañoso del centro de Chipre que alberga nueve iglesias y monasterios bizantinos pintados, declarados conjuntamente Patrimonio de la Humanidad por la UNESCO por su excepcional ciclo de frescos religiosos que abarca un período que va del siglo XI al XVI. Estos edificios adoptan deliberadamente una arquitectura exterior modesta, de piedra en bruto o madera, a menudo cubierta con un tejado inclinado adicional destinado a proteger los frescos de la nieve invernal, una discreción que también buscaba ocultar la riqueza interior de estos santuarios a los ojos de los sucesivos invasores de la isla.",
        galleryImages: `${R2}/journeys/chypre-troodos-gallery1.jpg,${R2}/journeys/chypre-troodos-gallery2.jpg,${R2}/journeys/chypre-troodos-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Les fresques du monastère de Kykkos",
            titleEn: "The frescoes of Kykkos Monastery",
            titleEs: "Los frescos del monasterio de Kykkos",
            description:
              "Visite du monastère de Kykkos, l'un des plus riches et des plus vénérés de Chypre, fondé au XIe siècle et niché au cœur des montagnes Troodos.",
            descriptionEn:
              "A visit to Kykkos Monastery, one of Cyprus's richest and most revered, founded in the 11th century and nestled in the heart of the Troodos Mountains.",
            descriptionEs:
              "Visita al monasterio de Kykkos, uno de los más ricos y venerados de Chipre, fundado en el siglo XI y enclavado en el corazón de los montes Troodos.",
            image: `${R2}/journeys/chypre-troodos-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les villages viticoles des Troodos",
            titleEn: "The wine villages of the Troodos",
            titleEs: "Los pueblos vitivinícolas de los Troodos",
            description:
              "Dégustation de vins dans les villages viticoles en terrasses des Troodos, où la vigne est cultivée en altitude depuis l'Antiquité.",
            descriptionEn:
              "A wine tasting in the terraced wine villages of the Troodos, where vines have been cultivated at altitude since antiquity.",
            descriptionEs:
              "Degustación de vinos en los pueblos vitivinícolas en terrazas de los Troodos, donde la vid se cultiva en altitud desde la Antigüedad.",
            image: `${R2}/journeys/chypre-troodos-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La péninsule sauvage d'Akamas",
        titleEn: "The Wild Akamas Peninsula",
        titleEs: "La península salvaje de Akamas",
        intro:
          "Route vers la péninsule d'Akamas, à l'extrémité occidentale de l'île, dernière grande étendue de littoral chypriote demeurée sans développement touristique et protégée depuis 1989 en tant que parc national, dont les gorges, les falaises et les criques isolées abritent une biodiversité méditerranéenne exceptionnelle. Les plages de Lara, accessibles uniquement par une piste non goudronnée, accueillent chaque été la ponte de tortues caouannes et de tortues vertes menacées, un programme de conservation local surveillant les nids afin de protéger l'une des dernières populations reproductrices significatives de Méditerranée orientale.",
        introEn:
          "The road to the Akamas Peninsula, at the island's western tip, Cyprus's last major stretch of coastline to remain free of tourist development and protected since 1989 as a national park, whose gorges, cliffs, and secluded coves harbour exceptional Mediterranean biodiversity. The beaches of Lara, accessible only by an unpaved track, host the nesting of endangered loggerhead and green sea turtles every summer, a local conservation programme monitoring the nests to protect one of the last significant breeding populations in the Eastern Mediterranean.",
        introEs:
          "Ruta hacia la península de Akamas, en el extremo occidental de la isla, último gran tramo de litoral chipriota que permanece sin desarrollo turístico y protegido desde 1989 como parque nacional, cuyos desfiladeros, acantilados y calas aisladas albergan una biodiversidad mediterránea excepcional. Las playas de Lara, accesibles únicamente por una pista sin asfaltar, acogen cada verano la puesta de tortugas bobas y verdes en peligro de extinción, un programa de conservación local que vigila los nidos para proteger una de las últimas poblaciones reproductoras significativas del Mediterráneo oriental.",
        galleryImages: `${R2}/journeys/chypre-akamas-gallery1.jpg,${R2}/journeys/chypre-akamas-gallery2.jpg,${R2}/journeys/chypre-akamas-gallery3.jpg`,
        mapMarkerX: 10,
        mapMarkerY: 30,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée dans les gorges d'Avakas",
            titleEn: "A hike through Avakas Gorge",
            titleEs: "Caminata por el desfiladero de Avakas",
            description:
              "Randonnée à travers les gorges d'Avakas, canyon calcaire étroit creusé par l'érosion au cœur de la péninsule d'Akamas.",
            descriptionEn:
              "A hike through Avakas Gorge, a narrow limestone canyon carved by erosion at the heart of the Akamas Peninsula.",
            descriptionEs:
              "Caminata por el desfiladero de Avakas, estrecho cañón calizo excavado por la erosión en el corazón de la península de Akamas.",
            image: `${R2}/journeys/chypre-akamas-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Observation des tortues marines à Lara",
            titleEn: "Sea turtle watching at Lara",
            titleEs: "Observación de tortugas marinas en Lara",
            description:
              "Visite guidée des plages de Lara, site de ponte protégé des tortues caouannes et vertes, accompagnée par les bénévoles du programme de conservation local.",
            descriptionEn:
              "A guided visit to the beaches of Lara, a protected nesting site for loggerhead and green sea turtles, accompanied by volunteers from the local conservation programme.",
            descriptionEs:
              "Visita guiada a las playas de Lara, lugar de puesta protegido de tortugas bobas y verdes, acompañada por voluntarios del programa de conservación local.",
            image: `${R2}/journeys/chypre-akamas-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "pays-bas",
    tour: {
      name: "Pays-Bas : Keukenhof et les moulins de Kinderdijk",
      nameEn: "Netherlands: Keukenhof and the Windmills of Kinderdijk",
      nameEs: "Países Bajos: Keukenhof y los molinos de Kinderdijk",
      slug: "pays-bas-keukenhof-kinderdijk",
      image: `${R2}/tours/pays-bas-keukenhof-kinderdijk.jpg`,
      images: `${R2}/trips/pays-bas-keukenhof-gallery-1.jpg,${R2}/trips/pays-bas-keukenhof-gallery-2.jpg,${R2}/trips/pays-bas-keukenhof-gallery-3.jpg,${R2}/trips/pays-bas-keukenhof-gallery-4.jpg,${R2}/trips/pays-bas-keukenhof-gallery-5.jpg,${R2}/trips/pays-bas-keukenhof-gallery-6.jpg`,
      tagline: "Sept millions de bulbes plantés chaque année dans le plus grand jardin de fleurs du monde, à quelques kilomètres de dix-neuf moulins classés à l'UNESCO",
      taglineEn: "Seven million bulbs planted each year in the world's largest flower garden, a few kilometres from nineteen UNESCO-listed windmills",
      taglineEs: "Siete millones de bulbos plantados cada año en el jardín de flores más grande del mundo, a pocos kilómetros de diecinueve molinos declarados por la UNESCO",
      description:
        "Le Keukenhof, ouvert seulement huit semaines par an entre mars et mai, voit plus de sept millions de bulbes de tulipes, jacinthes et narcisses plantés à la main chaque automne par une équipe de jardiniers selon un plan renouvelé annuellement, faisant de ce jardin de trente-deux hectares le plus grand jardin de fleurs à bulbes du monde. À une trentaine de kilomètres de là, les dix-neuf moulins à vent de Kinderdijk, construits au XVIIIe siècle pour drainer les polders environnants et classés au patrimoine mondial de l'UNESCO depuis 1997, forment la plus grande concentration de moulins historiques préservés des Pays-Bas.",
      descriptionEn:
        "Keukenhof, open only eight weeks a year between March and May, sees more than seven million tulip, hyacinth, and daffodil bulbs hand-planted each autumn by a team of gardeners following a plan renewed annually, making this thirty-two-hectare garden the world's largest bulb flower garden. Some thirty kilometres away, the nineteen windmills of Kinderdijk, built in the 18th century to drain the surrounding polders and UNESCO World Heritage listed since 1997, form the largest concentration of preserved historic windmills in the Netherlands.",
      descriptionEs:
        "Keukenhof, abierto solo ocho semanas al año entre marzo y mayo, ve cómo más de siete millones de bulbos de tulipanes, jacintos y narcisos son plantados a mano cada otoño por un equipo de jardineros según un plan renovado anualmente, lo que convierte a este jardín de treinta y dos hectáreas en el jardín de flores de bulbo más grande del mundo. A unos treinta kilómetros de allí, los diecinueve molinos de viento de Kinderdijk, construidos en el siglo XVIII para drenar los pólderes circundantes y declarados Patrimonio de la Humanidad por la UNESCO desde 1997, forman la mayor concentración de molinos históricos preservados de los Países Bajos.",
      price: 1500,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 3,
      durationUnit: "nights",
      duration: "3 nuits",
      durationEn: "3 nights",
      durationEs: "3 noches",
      whenLabel: "Mars à mai",
      whenLabelEn: "March to May",
      whenLabelEs: "Marzo a mayo",
      bestMonths: "march,april,may",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,family,groups",
      maxGuests: 6,
      featured: false,
      order: 217,
    },
    sections: [
      {
        heading: "Sept millions de bulbes plantés à la main",
        headingEn: "Seven Million Hand-Planted Bulbs",
        headingEs: "Siete millones de bulbos plantados a mano",
        body:
          "Le Keukenhof, dont le nom signifie littéralement « jardin de la cuisine » en référence à son usage médiéval comme potager pour un château voisin, s'étend aujourd'hui sur trente-deux hectares où plus de sept millions de bulbes de tulipes, jacinthes et narcisses sont plantés à la main chaque automne par une équipe permanente de jardiniers, selon un motif entièrement redessiné d'une année sur l'autre. Le jardin ne reste ouvert au public que huit semaines par an, entre mars et mai, une fenêtre étroite qui coïncide avec le pic de floraison et qui attire chaque saison plus d'un million et demi de visiteurs du monde entier.",
        bodyEn:
          "Keukenhof, whose name literally means \"kitchen garden\" in reference to its medieval use as a vegetable garden for a nearby castle, today spans thirty-two hectares where more than seven million tulip, hyacinth, and daffodil bulbs are hand-planted each autumn by a permanent team of gardeners, following a pattern entirely redesigned from one year to the next. The garden remains open to the public for only eight weeks a year, between March and May, a narrow window that coincides with peak bloom and draws over a million and a half visitors from around the world each season.",
        bodyEs:
          "Keukenhof, cuyo nombre significa literalmente «jardín de la cocina» en referencia a su uso medieval como huerto para un castillo cercano, se extiende hoy por treinta y dos hectáreas donde más de siete millones de bulbos de tulipanes, jacintos y narcisos son plantados a mano cada otoño por un equipo permanente de jardineros, según un motivo rediseñado por completo de un año a otro. El jardín permanece abierto al público solo ocho semanas al año, entre marzo y mayo, una estrecha ventana que coincide con el pico de floración y que atrae cada temporada a más de un millón y medio de visitantes de todo el mundo.",
      },
      {
        heading: "Kinderdijk, dix-neuf moulins classés à l'UNESCO",
        headingEn: "Kinderdijk, Nineteen UNESCO-Listed Windmills",
        headingEs: "Kinderdijk, diecinueve molinos declarados por la UNESCO",
        body:
          "Les dix-neuf moulins à vent de Kinderdijk, construits vers 1740 pour drainer l'eau des polders environnants et l'évacuer vers la rivière Lek, forment la plus grande concentration de moulins historiques préservés des Pays-Bas et furent inscrits au patrimoine mondial de l'UNESCO en 1997 en tant que témoignage exceptionnel du savoir-faire hydraulique néerlandais. Ces moulins, dont plusieurs restent habités par des meuniers gardiens qui ouvrent leur intérieur à la visite, continuent aujourd'hui de fonctionner occasionnellement en complément d'un système de pompage moderne, perpétuant un savoir-faire technique vieux de près de trois siècles.",
        bodyEn:
          "The nineteen windmills of Kinderdijk, built around 1740 to drain water from the surrounding polders and channel it to the Lek River, form the largest concentration of preserved historic windmills in the Netherlands and were inscribed on the UNESCO World Heritage list in 1997 as an exceptional testament to Dutch hydraulic engineering know-how. Several of these mills remain inhabited by caretaker millers who open their interiors to visitors, and today still occasionally operate alongside a modern pumping system, perpetuating a technical know-how nearly three centuries old.",
        bodyEs:
          "Los diecinueve molinos de viento de Kinderdijk, construidos hacia 1740 para drenar el agua de los pólderes circundantes y canalizarla hacia el río Lek, forman la mayor concentración de molinos históricos preservados de los Países Bajos y fueron inscritos en el Patrimonio de la Humanidad de la UNESCO en 1997 como testimonio excepcional del saber hacer hidráulico neerlandés. Varios de estos molinos siguen habitados por molineros guardianes que abren su interior a las visitas, y hoy todavía funcionan ocasionalmente junto a un sistema de bombeo moderno, perpetuando un saber técnico de casi tres siglos de antigüedad.",
      },
    ],
    hotels: [
      {
        name: "Maison de canal à Leyde",
        nameEn: "A Canal House in Leiden",
        nameEs: "Casa de canal en Leiden",
        description:
          "Une maison de canal rénovée à Leyde, à courte distance du Keukenhof et des champs de tulipes environnants au printemps.",
        descriptionEn:
          "A renovated canal house in Leiden, a short distance from Keukenhof and the surrounding tulip fields in spring.",
        descriptionEs:
          "Una casa de canal renovada en Leiden, a poca distancia de Keukenhof y los campos de tulipanes circundantes en primavera.",
        image: `${R2}/trips/pays-bas-keukenhof-hotel-1.jpg`,
      },
      {
        name: "Ferme traditionnelle près de Kinderdijk",
        nameEn: "A Traditional Farmhouse Near Kinderdijk",
        nameEs: "Granja tradicional cerca de Kinderdijk",
        description:
          "Une ferme traditionnelle rénovée à proximité de Kinderdijk, chambres avec vue directe sur les moulins et les polders environnants.",
        descriptionEn:
          "A renovated traditional farmhouse near Kinderdijk, rooms with a direct view of the windmills and surrounding polders.",
        descriptionEs:
          "Una granja tradicional renovada cerca de Kinderdijk, habitaciones con vistas directas a los molinos y los pólderes circundantes.",
        image: `${R2}/trips/pays-bas-keukenhof-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "belgique",
    tour: {
      name: "Belgique : Bruges, les canaux",
      nameEn: "Belgium: Bruges, the Canals",
      nameEs: "Bélgica: Brujas, los canales",
      slug: "belgique-bruges-canaux",
      image: `${R2}/tours/belgique-bruges-canaux.jpg`,
      images: `${R2}/trips/belgique-bruges-gallery-1.jpg,${R2}/trips/belgique-bruges-gallery-2.jpg,${R2}/trips/belgique-bruges-gallery-3.jpg,${R2}/trips/belgique-bruges-gallery-4.jpg,${R2}/trips/belgique-bruges-gallery-5.jpg,${R2}/trips/belgique-bruges-gallery-6.jpg`,
      tagline: "La « Venise du Nord » médiévale, dont le centre historique entier reste gelé dans son plan urbain du XIIIe siècle",
      taglineEn: "The medieval \"Venice of the North,\" whose entire historic centre remains frozen in its 13th-century urban plan",
      taglineEs: "La medieval «Venecia del Norte», cuyo centro histórico entero permanece congelado en su trazado urbano del siglo XIII",
      description:
        "Bruges, surnommée la « Venise du Nord » pour son réseau de canaux médiévaux qui serpentent à travers la ville, doit la préservation quasi intacte de son centre historique à un déclin économique brutal survenu à la fin du XVe siècle, lorsque l'ensablement progressif du fleuve Zwin coupa la ville de son accès direct à la mer et mit fin à son âge d'or commercial. Ce gel économique inattendu, qui aurait pu s'avérer catastrophique, permit paradoxalement à Bruges d'échapper aux vagues successives de démolition et de reconstruction urbaine qui transformèrent la plupart des autres grandes villes européennes, préservant jusqu'à aujourd'hui un plan urbain et une architecture gothique flamande quasiment intacts depuis le XIIIe siècle.",
      descriptionEn:
        "Bruges, nicknamed the \"Venice of the North\" for its network of medieval canals winding through the city, owes the near-intact preservation of its historic centre to an abrupt economic decline at the end of the 15th century, when the progressive silting up of the Zwin river cut the city off from its direct access to the sea and ended its commercial golden age. This unexpected economic freeze, which could have proven catastrophic, paradoxically allowed Bruges to escape the successive waves of demolition and urban reconstruction that transformed most other major European cities, preserving to this day an urban plan and Flemish Gothic architecture virtually intact since the 13th century.",
      descriptionEs:
        "Brujas, apodada la «Venecia del Norte» por su red de canales medievales que serpentean por la ciudad, debe la preservación casi intacta de su centro histórico a un brusco declive económico ocurrido a finales del siglo XV, cuando el progresivo azolvamiento del río Zwin cortó a la ciudad su acceso directo al mar y puso fin a su edad de oro comercial. Esta inesperada parálisis económica, que podría haber resultado catastrófica, permitió paradójicamente a Brujas escapar de las sucesivas oleadas de demolición y reconstrucción urbana que transformaron la mayoría de las demás grandes ciudades europeas, preservando hasta hoy un trazado urbano y una arquitectura gótica flamenca prácticamente intactos desde el siglo XIII.",
      price: 1600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 3,
      durationUnit: "nights",
      duration: "3 nuits",
      durationEn: "3 nights",
      durationEs: "3 noches",
      whenLabel: "Avril à oct",
      whenLabelEn: "April to Oct",
      whenLabelEs: "Abril a oct",
      bestMonths: "april,may,june,july,august,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 219,
    },
    sections: [
      {
        heading: "Un déclin économique qui préserva la ville",
        headingEn: "An Economic Decline That Preserved the City",
        headingEs: "Un declive económico que preservó la ciudad",
        body:
          "Bruges, l'une des villes les plus riches et les plus commercialement actives d'Europe au XIVe siècle grâce à son accès direct à la mer du Nord via le fleuve Zwin, connut à la fin du XVe siècle un déclin économique brutal lorsque l'ensablement progressif de ce fleuve coupa définitivement la ville de son port maritime, la reléguant au rang de cité secondaire pendant plusieurs siècles. Ce gel économique inattendu, s'il fut douloureux pour ses habitants de l'époque, permit paradoxalement à la ville d'échapper aux vagues de modernisation urbaine qui transformèrent la plupart des grandes villes européennes, préservant jusqu'à aujourd'hui un centre historique gothique flamand quasiment figé depuis le XIIIe siècle.",
        bodyEn:
          "Bruges, one of Europe's richest and most commercially active cities in the 14th century thanks to its direct access to the North Sea via the Zwin river, experienced a brutal economic decline at the end of the 15th century when the progressive silting up of this river permanently cut the city off from its seaport, relegating it to secondary status for several centuries. This unexpected economic freeze, painful as it was for its residents at the time, paradoxically allowed the city to escape the waves of urban modernisation that transformed most major European cities, preserving to this day a Flemish Gothic historic centre virtually frozen since the 13th century.",
        bodyEs:
          "Brujas, una de las ciudades más ricas y comercialmente activas de Europa en el siglo XIV gracias a su acceso directo al mar del Norte a través del río Zwin, sufrió a finales del siglo XV un brusco declive económico cuando el progresivo azolvamiento de este río cortó definitivamente a la ciudad su puerto marítimo, relegándola al rango de ciudad secundaria durante varios siglos. Esta inesperada parálisis económica, aunque dolorosa para sus habitantes de la época, permitió paradójicamente a la ciudad escapar de las oleadas de modernización urbana que transformaron a la mayoría de las grandes ciudades europeas, preservando hasta hoy un centro histórico gótico flamenco prácticamente congelado desde el siglo XIII.",
      },
      {
        heading: "Le beffroi et les canaux médiévaux",
        headingEn: "The Belfry and the Medieval Canals",
        headingEs: "El campanario y los canales medievales",
        body:
          "Le beffroi de Bruges, tour de quatre-vingt-trois mètres construite à partir du XIIIe siècle et dont les trois cent soixante-six marches mènent à un carillon de quarante-sept cloches, domine toujours la Grand-Place et servait historiquement de tour de guet et de coffre-fort municipal pour les documents et trésors de la ville. Le réseau de canaux médiévaux, dont le tracé demeure quasiment inchangé depuis l'âge d'or commercial de la ville, se parcourt aujourd'hui en barque traditionnelle, offrant une perspective unique sur les façades à pignons et les ponts de pierre qui firent la renommée internationale de Bruges dès le XIVe siècle.",
        bodyEn:
          "Bruges' Belfry, an eighty-three-metre tower built starting in the 13th century whose three hundred and sixty-six steps lead to a carillon of forty-seven bells, still dominates the Market Square and historically served as a watchtower and municipal safe for the city's documents and treasures. The network of medieval canals, whose layout remains virtually unchanged since the city's commercial golden age, can today be explored by traditional boat, offering a unique perspective on the gabled facades and stone bridges that earned Bruges international renown as early as the 14th century.",
        bodyEs:
          "El campanario de Brujas, torre de ochenta y tres metros construida a partir del siglo XIII cuyos trescientos sesenta y seis escalones conducen a un carillón de cuarenta y siete campanas, sigue dominando la plaza mayor y servía históricamente de torre de vigilancia y caja fuerte municipal para los documentos y tesoros de la ciudad. La red de canales medievales, cuyo trazado permanece prácticamente inalterado desde la edad de oro comercial de la ciudad, puede recorrerse hoy en barca tradicional, ofreciendo una perspectiva única de las fachadas con gabletes y los puentes de piedra que dieron a Brujas renombre internacional ya en el siglo XIV.",
      },
    ],
    hotels: [
      {
        name: "Maison de guilde rénovée au bord d'un canal",
        nameEn: "A Renovated Guild House on a Canal",
        nameEs: "Casa gremial renovada junto a un canal",
        description:
          "Une ancienne maison de guilde rénovée directement au bord d'un canal, à distance de marche du beffroi et de la Grand-Place.",
        descriptionEn:
          "A former guild house renovated directly on the banks of a canal, within walking distance of the Belfry and Market Square.",
        descriptionEs:
          "Una antigua casa gremial renovada directamente a orillas de un canal, a poca distancia a pie del campanario y la plaza mayor.",
        image: `${R2}/trips/belgique-bruges-hotel-1.jpg`,
      },
      {
        name: "Hôtel de charme dans le quartier des béguinages",
        nameEn: "A Boutique Hotel in the Beguinage Quarter",
        nameEs: "Hotel con encanto en el barrio del beguinaje",
        description:
          "Un hôtel de charme installé dans une demeure historique près du béguinage, quartier paisible classé au patrimoine mondial de l'UNESCO.",
        descriptionEn:
          "A boutique hotel set in a historic residence near the Beguinage, a peaceful UNESCO World Heritage listed quarter.",
        descriptionEs:
          "Un hotel con encanto instalado en una residencia histórica cerca del beguinaje, tranquilo barrio declarado Patrimonio de la Humanidad por la UNESCO.",
        image: `${R2}/trips/belgique-bruges-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "chypre",
    tour: {
      name: "Chypre : Paphos et le rocher d'Aphrodite",
      nameEn: "Cyprus: Paphos and Aphrodite's Rock",
      nameEs: "Chipre: Pafos y la roca de Afrodita",
      slug: "chypre-paphos-aphrodite",
      image: `${R2}/tours/chypre-paphos-aphrodite.jpg`,
      images: `${R2}/trips/chypre-paphos-gallery-1.jpg,${R2}/trips/chypre-paphos-gallery-2.jpg,${R2}/trips/chypre-paphos-gallery-3.jpg,${R2}/trips/chypre-paphos-gallery-4.jpg,${R2}/trips/chypre-paphos-gallery-5.jpg,${R2}/trips/chypre-paphos-gallery-6.jpg`,
      tagline: "Le rivage mythologique où serait née Aphrodite des flots, au-dessus de mosaïques romaines parmi les mieux préservées de Méditerranée orientale",
      taglineEn: "The mythological shore where Aphrodite is said to have been born from the waves, above Roman mosaics among the best preserved in the Eastern Mediterranean",
      taglineEs: "La orilla mitológica donde se dice que nació Afrodita de las olas, sobre mosaicos romanos entre los mejor conservados del Mediterráneo oriental",
      description:
        "Petra tou Romiou, littéralement le « rocher du Grec » mais plus connu sous le nom de rocher d'Aphrodite, désigne selon la mythologie grecque le rivage précis où la déesse de l'amour serait née de l'écume des vagues, un site qui fit de Chypre tout entière une destination de pèlerinage antique dédiée à son culte. Le parc archéologique de Paphos, classé au patrimoine mondial de l'UNESCO, abrite quant à lui des villas romaines dont les sols de mosaïques figuratives, représentant des scènes mythologiques avec un degré de préservation et de détail exceptionnel, comptent parmi les plus belles de toute la Méditerranée orientale.",
      descriptionEn:
        "Petra tou Romiou, literally the \"rock of the Greek\" but better known as Aphrodite's Rock, marks according to Greek mythology the exact shore where the goddess of love is said to have been born from the sea foam, a site that made Cyprus as a whole an ancient pilgrimage destination dedicated to her cult. The Paphos Archaeological Park, UNESCO World Heritage listed, is home to Roman villas whose figurative mosaic floors, depicting mythological scenes with an exceptional degree of preservation and detail, rank among the finest in the entire Eastern Mediterranean.",
      descriptionEs:
        "Petra tou Romiou, literalmente la «roca del Griego» pero más conocida como la roca de Afrodita, marca según la mitología griega la orilla exacta donde la diosa del amor habría nacido de la espuma de las olas, un lugar que convirtió a Chipre entera en un destino de peregrinación antiguo dedicado a su culto. El parque arqueológico de Pafos, declarado Patrimonio de la Humanidad por la UNESCO, alberga por su parte villas romanas cuyos suelos de mosaicos figurativos, que representan escenas mitológicas con un grado de conservación y detalle excepcional, se cuentan entre los más bellos de todo el Mediterráneo oriental.",
      price: 1700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | sept a oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 221,
    },
    sections: [
      {
        heading: "Le rocher où naquit Aphrodite",
        headingEn: "The Rock Where Aphrodite Was Born",
        headingEs: "La roca donde nació Afrodita",
        body:
          "Petra tou Romiou, formation rocheuse spectaculaire émergeant directement des eaux turquoise de la côte sud-ouest de Chypre, désigne selon la mythologie grecque antique le rivage précis où la déesse Aphrodite serait née de l'écume soulevée par les flots après que Cronos eut jeté à la mer les organes de son père Ouranos. Cette légende fondatrice fit de Chypre tout entière, dès l'Antiquité, une destination de pèlerinage dédiée au culte de la déesse de l'amour et de la beauté, un héritage mythologique qui imprègne encore aujourd'hui l'identité culturelle et touristique de l'île.",
        bodyEn:
          "Petra tou Romiou, a spectacular rock formation emerging directly from the turquoise waters of Cyprus's south-western coast, marks according to ancient Greek mythology the exact shore where the goddess Aphrodite is said to have been born from the foam stirred up by the waves after Cronus threw his father Uranus's severed organs into the sea. This founding legend made Cyprus as a whole, as early as antiquity, a pilgrimage destination dedicated to the cult of the goddess of love and beauty, a mythological legacy that still permeates the island's cultural and tourist identity today.",
        bodyEs:
          "Petra tou Romiou, espectacular formación rocosa que emerge directamente de las aguas turquesas de la costa suroeste de Chipre, marca según la mitología griega antigua la orilla exacta donde la diosa Afrodita habría nacido de la espuma levantada por las olas después de que Cronos arrojara al mar los órganos de su padre Urano. Esta leyenda fundacional convirtió a Chipre entera, ya desde la Antigüedad, en un destino de peregrinación dedicado al culto de la diosa del amor y la belleza, un legado mitológico que todavía hoy impregna la identidad cultural y turística de la isla.",
      },
      {
        heading: "Les mosaïques romaines du parc archéologique de Paphos",
        headingEn: "The Roman Mosaics of Paphos Archaeological Park",
        headingEs: "Los mosaicos romanos del parque arqueológico de Pafos",
        body:
          "Le parc archéologique de Paphos, classé au patrimoine mondial de l'UNESCO en 1980, abrite plusieurs villas romaines datant des IIe et IVe siècles, dont les sols de mosaïques figuratives comptent parmi les mieux préservés et les plus détaillés de toute la Méditerranée orientale. La Maison de Dionysos, la plus célèbre de ces villas, s'étend sur plus de deux mille mètres carrés de mosaïques représentant des scènes mythologiques d'une précision remarquable, notamment le triomphe du dieu du vin et la légende de Narcisse, des œuvres qui témoignent du raffinement artistique et de la prospérité de la ville sous domination romaine.",
        bodyEn:
          "Paphos Archaeological Park, UNESCO World Heritage listed since 1980, is home to several Roman villas dating from the 2nd and 4th centuries, whose figurative mosaic floors rank among the best preserved and most detailed in the entire Eastern Mediterranean. The House of Dionysus, the most famous of these villas, spans over two thousand square metres of mosaics depicting mythological scenes of remarkable precision, notably the triumph of the god of wine and the legend of Narcissus, works that testify to the artistic refinement and prosperity of the city under Roman rule.",
        bodyEs:
          "El parque arqueológico de Pafos, declarado Patrimonio de la Humanidad por la UNESCO desde 1980, alberga varias villas romanas que datan de los siglos II y IV, cuyos suelos de mosaicos figurativos se cuentan entre los mejor conservados y más detallados de todo el Mediterráneo oriental. La Casa de Dionisio, la más famosa de estas villas, se extiende por más de dos mil metros cuadrados de mosaicos que representan escenas mitológicas de notable precisión, en particular el triunfo del dios del vino y la leyenda de Narciso, obras que dan testimonio del refinamiento artístico y la prosperidad de la ciudad bajo dominación romana.",
      },
    ],
    hotels: [
      {
        name: "Villa en surplomb du rocher d'Aphrodite",
        nameEn: "A Villa Overlooking Aphrodite's Rock",
        nameEs: "Villa con vistas a la roca de Afrodita",
        description:
          "Une villa en surplomb du rivage mythologique de Petra tou Romiou, piscine à débordement face à la mer Méditerranée turquoise.",
        descriptionEn:
          "A villa overlooking the mythological shore of Petra tou Romiou, an infinity pool facing the turquoise Mediterranean Sea.",
        descriptionEs:
          "Una villa con vistas a la orilla mitológica de Petra tou Romiou, piscina infinita frente al mar Mediterráneo turquesa.",
        image: `${R2}/trips/chypre-paphos-hotel-1.jpg`,
      },
      {
        name: "Hôtel de charme près du parc archéologique",
        nameEn: "A Boutique Hotel Near the Archaeological Park",
        nameEs: "Hotel con encanto cerca del parque arqueológico",
        description:
          "Un hôtel de charme au cœur de Paphos, à distance de marche du parc archéologique et de ses mosaïques romaines classées à l'UNESCO.",
        descriptionEn:
          "A boutique hotel at the heart of Paphos, within walking distance of the archaeological park and its UNESCO-listed Roman mosaics.",
        descriptionEs:
          "Un hotel con encanto en el corazón de Pafos, a poca distancia a pie del parque arqueológico y sus mosaicos romanos declarados por la UNESCO.",
        image: `${R2}/trips/chypre-paphos-hotel-2.jpg`,
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
