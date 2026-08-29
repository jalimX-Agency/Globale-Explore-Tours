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
    destinationSlug: "kenya",
    tour: {
      name: "Kenya du Nord : Lewa et Samburu",
      nameEn: "Northern Kenya: Lewa and Samburu",
      nameEs: "Kenia del Norte: Lewa y Samburu",
      slug: "kenya-nord-lewa-samburu",
      image: `${R2}/journeys/kenya-nord-hero.jpg`,
      format: "journey",
      mapImage: `${R2}/journeys/kenya-nord-map.svg`,
      tagline: "Conservatoires privés et rhinocéros blancs du Nord, dans un Kenya loin des foules",
      taglineEn: "Private conservancies and the world's last northern white rhinos, in a Kenya far from the crowds",
      taglineEs: "Reservas privadas y los últimos rinocerontes blancos del norte, en un Kenia lejos de las multitudes",
      description:
        "Un safari différent, loin du Masai Mara : direction les conservatoires privés du centre du Kenya, où Ol Pejeta protège les deux derniers rhinocéros blancs du Nord au monde, puis les paysages semi-arides de Samburu, royaume des girafes réticulées et des gérénuks. Moins de véhicules, plus d'espace, et des guides issus des communautés qui gèrent elles-mêmes ces terres.",
      descriptionEn:
        "A different kind of safari, away from the Masai Mara: first, the private conservancies of central Kenya, where Ol Pejeta protects the world's last two northern white rhinos, then the semi-arid landscapes of Samburu, home to reticulated giraffes and gerenuks found nowhere else. Fewer vehicles, more space, and guides drawn from the communities who manage this land themselves.",
      descriptionEs:
        "Un safari distinto, lejos del Masai Mara: primero las reservas privadas del centro de Kenia, donde Ol Pejeta protege a los dos últimos rinocerontes blancos del norte del mundo, y después los paisajes semiáridos de Samburu, hogar de jirafas reticuladas y gerenuks que no se ven en ningún otro lugar. Menos vehículos, más espacio, y guías salidos de las comunidades que gestionan esta tierra.",
      price: 9800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Juin à oct | Jan-fév",
      whenLabelEn: "June to Oct | Jan-Feb",
      whenLabelEs: "Jun a oct | Ene-feb",
      bestMonths: "june,july,august,september,october,january,february",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 4,
    },
    chapters: [
      {
        title: "Ol Pejeta et Lewa",
        titleEn: "Ol Pejeta and Lewa",
        titleEs: "Ol Pejeta y Lewa",
        intro:
          "Premier arrêt dans les hauts plateaux du centre du Kenya, où deux conservatoires privés font figure de référence mondiale pour la protection des espèces menacées. À Ol Pejeta vivent Najin et Fatu, les deux dernières rhinocéros blancs du Nord sur Terre, sous la garde permanente de rangers. Lewa, voisin immédiat, ajoute ses propres populations de rhinocéros noirs et de zèbres de Grévy, une espèce rare au pelage si particulier.",
        introEn:
          "First stop in Kenya's central highlands, where two private conservancies have become a global reference point for protecting endangered species. Ol Pejeta is home to Najin and Fatu, the last two northern white rhinos left on Earth, under permanent ranger guard. Neighbouring Lewa adds its own black rhino population and Grevy's zebra, a rare species with an unusually fine-striped coat.",
        introEs:
          "Primera parada en las tierras altas del centro de Kenia, donde dos reservas privadas se han convertido en referencia mundial para la protección de especies amenazadas. En Ol Pejeta viven Najin y Fatu, las dos últimas rinocerontes blancas del norte sobre la Tierra, bajo guardia permanente de rangers. Lewa, su vecina inmediata, suma sus propias poblaciones de rinocerontes negros y cebras de Grevy, una especie rara de pelaje muy particular.",
        galleryImages: `${R2}/journeys/kenya-nord-lewa-gallery1.jpg,${R2}/journeys/kenya-nord-lewa-gallery2.jpg,${R2}/journeys/kenya-nord-lewa-gallery3.jpg`,
        mapMarkerX: 42,
        mapMarkerY: 17,
        days: [
          {
            dayNumber: 1,
            title: "Arrivée à Ol Pejeta",
            titleEn: "Arrival at Ol Pejeta",
            titleEs: "Llegada a Ol Pejeta",
            description:
              "Vol léger depuis Nairobi vers la piste d'Ol Pejeta. Premier safari l'après-midi même, à la recherche des rhinocéros blancs du Sud qui partagent le sanctuaire, et rencontre possible avec l'équipe de rangers qui veille jour et nuit sur Najin et Fatu, les deux dernières femelles rhinocéros blancs du Nord au monde.",
            descriptionEn:
              "A light aircraft flight from Nairobi to Ol Pejeta's airstrip. A first game drive that same afternoon, looking for the southern white rhinos who share the sanctuary, with a chance to meet the ranger team that guards Najin and Fatu — the world's last two northern white rhino females — day and night.",
            descriptionEs:
              "Vuelo en avioneta desde Nairobi hasta la pista de Ol Pejeta. Primer safari esa misma tarde, en busca de los rinocerontes blancos del sur que comparten el santuario, con posibilidad de conocer al equipo de rangers que vigila día y noche a Najin y Fatu, las dos últimas hembras de rinoceronte blanco del norte del mundo.",
            image: "",
            images: "",
          },
          {
            dayNumber: 2,
            title: "Lewa et ses zèbres de Grévy",
            titleEn: "Lewa and its Grevy's zebra",
            titleEs: "Lewa y sus cebras de Grevy",
            description:
              "Journée à Lewa, conservatoire voisin classé au patrimoine mondial de l'UNESCO, à la recherche des zèbres de Grévy et des rhinocéros noirs. Le soir, dîner en plein air organisé par la communauté Maasai locale, qui reverse une partie des revenus du tourisme à la gestion du conservatoire.",
            descriptionEn:
              "A day at Lewa, the neighbouring UNESCO World Heritage-listed conservancy, tracking Grevy's zebra and black rhino. In the evening, an open-air dinner hosted by the local Maasai community, which reinvests a share of tourism revenue into managing the conservancy.",
            descriptionEs:
              "Día en Lewa, la reserva vecina declarada Patrimonio Mundial de la UNESCO, en busca de cebras de Grevy y rinocerontes negros. Por la noche, cena al aire libre organizada por la comunidad maasái local, que reinvierte parte de los ingresos del turismo en la gestión de la reserva.",
            image: "",
            images: "",
          },
        ],
      },
      {
        title: "Samburu",
        titleEn: "Samburu",
        titleEs: "Samburu",
        intro:
          "Direction le nord et les paysages semi-arides de Samburu, où la rivière Ewaso Ng'iro dessine une bande verte au milieu d'un décor presque désertique. C'est ici que vivent les « cinq spéciaux du Nord » : girafe réticulée, zèbre de Grévy, oryx beisa, gérénuk et autruche somalienne, cinq espèces qu'on ne croise nulle part ailleurs au Kenya. Les guides samburu, reconnaissables à leurs parures rouges, transmettent une connaissance du terrain acquise depuis l'enfance.",
        introEn:
          "North to the semi-arid landscapes of Samburu, where the Ewaso Ng'iro river cuts a green ribbon through an almost desert setting. This is home to the \"Samburu Special Five\": reticulated giraffe, Grevy's zebra, beisa oryx, gerenuk, and Somali ostrich — five species found nowhere else in Kenya. Samburu guides, recognisable by their red regalia, pass down a knowledge of this ground learned since childhood.",
        introEs:
          "Rumbo al norte y a los paisajes semiáridos de Samburu, donde el río Ewaso Ng'iro traza una franja verde en un entorno casi desértico. Aquí viven los «cinco especiales del norte»: jirafa reticulada, cebra de Grevy, órix beisa, gerenuk y avestruz somalí, cinco especies que no se encuentran en ningún otro lugar de Kenia. Los guías samburu, reconocibles por sus atuendos rojos, transmiten un conocimiento del terreno aprendido desde la infancia.",
        galleryImages: `${R2}/journeys/kenya-nord-samburu-gallery1.jpg,${R2}/journeys/kenya-nord-samburu-gallery2.jpg,${R2}/journeys/kenya-nord-samburu-gallery3.jpg,${R2}/journeys/kenya-nord-samburu-gallery4.jpg`,
        mapMarkerX: 47,
        mapMarkerY: 76,
        days: [
          {
            dayNumber: 1,
            title: "Transfert et safari du soir",
            titleEn: "Transfer and evening game drive",
            titleEs: "Traslado y safari vespertino",
            description:
              "Transfert par piste vers Samburu, déjeuner en chemin. Premier safari en fin de journée le long de la rivière Ewaso Ng'iro, où se rassemblent éléphants et buffles à l'heure où la chaleur retombe.",
            descriptionEn:
              "An overland transfer to Samburu, with lunch en route. A first late-afternoon game drive along the Ewaso Ng'iro river, where elephants and buffalo gather as the heat of the day fades.",
            descriptionEs:
              "Traslado por carretera hacia Samburu, con almuerzo en el camino. Primer safari al final de la tarde a lo largo del río Ewaso Ng'iro, donde se reúnen elefantes y búfalos cuando baja el calor del día.",
            image: "",
            images: "",
          },
          {
            dayNumber: 2,
            title: "Sur les traces des cinq spéciaux du Nord",
            titleEn: "Tracking the Samburu Special Five",
            titleEs: "Tras la pista de los cinco especiales del norte",
            description:
              "Journée complète consacrée à la recherche des cinq espèces propres à cette région : girafe réticulée, zèbre de Grévy, oryx beisa, gérénuk et autruche somalienne. En fin d'après-midi, visite d'un village samburu pour comprendre le mode de vie semi-nomade encore pratiqué par la communauté.",
            descriptionEn:
              "A full day spent tracking the five species unique to this region: reticulated giraffe, Grevy's zebra, beisa oryx, gerenuk, and Somali ostrich. In the late afternoon, a visit to a Samburu village to learn about the semi-nomadic way of life the community still follows today.",
            descriptionEs:
              "Día completo dedicado a la búsqueda de las cinco especies propias de esta región: jirafa reticulada, cebra de Grevy, órix beisa, gerenuk y avestruz somalí. Al final de la tarde, visita a un poblado samburu para conocer el modo de vida semi-nómada que la comunidad aún practica.",
            image: "",
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "kenya",
    tour: {
      name: "Kenya : la côte swahilie, de Diani à Lamu",
      nameEn: "Kenya: the Swahili Coast, from Diani to Lamu",
      nameEs: "Kenia: la costa suajili, de Diani a Lamu",
      slug: "kenya-cote-diani-lamu",
      image: `${R2}/tours/kenya-cote-diani-lamu.jpg`,
      images: `${R2}/trips/kenya-cote-gallery-1.jpg,${R2}/trips/kenya-cote-gallery-2.jpg,${R2}/trips/kenya-cote-gallery-3.jpg,${R2}/trips/kenya-cote-gallery-4.jpg,${R2}/trips/kenya-cote-gallery-5.jpg,${R2}/trips/kenya-cote-gallery-6.jpg`,
      tagline: "Sable blanc, dhows en bois et ruelles millénaires — le Kenya que le safari ne montre jamais",
      taglineEn: "White sand, wooden dhows, and thousand-year-old lanes — the Kenya safaris never show you",
      taglineEs: "Arena blanca, dhows de madera y callejuelas milenarias — el Kenia que el safari nunca muestra",
      description:
        "Un Kenya balnéaire et culturel, loin des pistes de safari. Diani Beach déroule des kilomètres de sable blanc bordés de récifs coralliens, avant de rejoindre Lamu, cité swahilie classée à l'UNESCO où aucune voiture ne circule et où la vie suit encore le rythme des dhows à voile. Deux visages du Kenya que peu de circuits combinent.",
      descriptionEn:
        "A coastal, cultural side of Kenya, far from the safari trail. Diani Beach unrolls miles of white sand fringed by coral reefs, before the trip moves on to Lamu, a UNESCO-listed Swahili town with no cars, where life still runs to the rhythm of sailing dhows. Two faces of Kenya that few itineraries combine.",
      descriptionEs:
        "Un Kenia costero y cultural, lejos de las rutas de safari. Diani Beach despliega kilómetros de arena blanca bordeados de arrecifes de coral, antes de llegar a Lamu, ciudad suajili declarada por la UNESCO donde no circulan coches y la vida aún sigue el ritmo de los dhows a vela. Dos caras de Kenia que pocos circuitos combinan.",
      price: 5400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Jan-fév | Juin à oct",
      whenLabelEn: "Jan-Feb | June to Oct",
      whenLabelEs: "Ene-feb | Jun a oct",
      bestMonths: "january,february,june,july,august,september,october",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,honeymoon,family",
      maxGuests: 6,
      featured: false,
      order: 5,
    },
    sections: [
      {
        heading: "Diani Beach, sable blanc et récifs",
        headingEn: "Diani Beach, white sand and reefs",
        headingEs: "Diani Beach, arena blanca y arrecifes",
        body:
          "Le voyage commence sur la côte sud de Mombasa, à Diani Beach, régulièrement citée parmi les plus belles plages d'Afrique. Le sable blanc s'étend sur près de dix kilomètres, protégé par une barrière de corail qui crée des eaux calmes et turquoise, idéales pour le snorkeling ou une sortie en kitesurf. Les journées s'organisent au rythme de chacun : farniente à l'ombre des cocotiers, sortie en boutre traditionnel au coucher du soleil, ou excursion vers la forêt de Shimba Hills, à quelques kilomètres à peine, où vivent les derniers éléphants et sables de la région.",
        bodyEn:
          "The trip begins on Mombasa's south coast, at Diani Beach, regularly ranked among Africa's most beautiful shores. White sand stretches for nearly ten kilometres, protected by a coral barrier that keeps the turquoise water calm — ideal for snorkelling or a kitesurfing session. Days move at their own pace: lounging in the shade of coconut palms, a sunset outing on a traditional dhow, or an excursion to Shimba Hills forest just a few kilometres inland, home to the region's last elephants and sable antelope.",
        bodyEs:
          "El viaje comienza en la costa sur de Mombasa, en Diani Beach, considerada habitualmente una de las playas más bellas de África. La arena blanca se extiende casi diez kilómetros, protegida por una barrera de coral que mantiene aguas tranquilas y turquesas, ideales para el buceo con tubo o una sesión de kitesurf. Los días transcurren al ritmo de cada uno: descanso a la sombra de los cocoteros, una salida en dhow tradicional al atardecer, o una excursión al bosque de Shimba Hills, a pocos kilómetros, donde viven los últimos elefantes y antílopes sable de la región.",
      },
      {
        heading: "Lamu, cité swahilie hors du temps",
        headingEn: "Lamu, a Swahili town out of time",
        headingEs: "Lamu, una ciudad suajili fuera del tiempo",
        body:
          "Vol court vers l'archipel de Lamu, où le temps semble s'être arrêté. Fondée il y a plus de sept siècles, la vieille ville — classée au patrimoine mondial de l'UNESCO — se visite exclusivement à pied ou à dos d'âne, aucune voiture n'y étant autorisée. Ruelles étroites, portes en bois sculpté, mosquées en corail et places ombragées racontent l'histoire d'un carrefour commercial entre l'Afrique, l'Arabie et l'Inde. Une sortie en dhow au coucher du soleil, entre les mangroves et les bancs de sable, clôt le séjour.",
        bodyEn:
          "A short flight to the Lamu archipelago, where time seems to have stopped. Founded more than seven centuries ago, the UNESCO World Heritage old town is explored entirely on foot or by donkey — no cars are allowed. Narrow lanes, carved wooden doors, coral-stone mosques, and shaded squares tell the story of a trading crossroads between Africa, Arabia, and India. A sunset dhow sail through the mangroves and sandbanks closes out the stay.",
        bodyEs:
          "Vuelo corto hacia el archipiélago de Lamu, donde el tiempo parece haberse detenido. Fundada hace más de siete siglos, el casco antiguo — Patrimonio Mundial de la UNESCO — se recorre exclusivamente a pie o en burro, ya que no se permiten coches. Callejuelas estrechas, puertas de madera tallada, mezquitas de piedra coralina y plazas con sombra cuentan la historia de un cruce comercial entre África, Arabia e India. Una salida en dhow al atardecer, entre manglares y bancos de arena, cierra la estancia.",
      },
    ],
    hotels: [
      {
        name: "Diani Reef Beach Lodge",
        nameEn: "Diani Reef Beach Lodge",
        nameEs: "Diani Reef Beach Lodge",
        description:
          "Un lodge en bord de plage entièrement tourné vers l'océan Indien, bungalows en bois et chaume nichés dans un jardin tropical. Piscine à débordement face au lagon, spa ouvert sur la mer, et accès direct à la plage protégée par la barrière de corail.",
        descriptionEn:
          "A beachfront lodge facing entirely onto the Indian Ocean, timber-and-thatch bungalows set in a tropical garden. An infinity pool overlooking the lagoon, a spa open to the sea, and direct access to the reef-protected beach.",
        descriptionEs:
          "Un lodge frente a la playa completamente orientado al océano Índico, bungalós de madera y techo de paja en un jardín tropical. Piscina infinita frente a la laguna, spa abierto al mar y acceso directo a la playa protegida por el arrecife.",
        image: `${R2}/trips/kenya-cote-hotel-diani.jpg`,
      },
      {
        name: "Lamu House",
        nameEn: "Lamu House",
        nameEs: "Lamu House",
        description:
          "Une maison swahilie du XIXe siècle restaurée avec soin, terrasse sur les toits avec vue sur le port de boutres, mobilier en bois sculpté local et cour intérieure ombragée. L'adresse la plus authentique pour dormir dans la vieille ville.",
        descriptionEn:
          "A carefully restored 19th-century Swahili house, a rooftop terrace looking over the dhow harbour, locally carved wooden furniture, and a shaded inner courtyard. The most authentic address to stay in the old town.",
        descriptionEs:
          "Una casa suajili del siglo XIX restaurada con esmero, terraza en la azotea con vistas al puerto de dhows, mobiliario de madera tallada local y un patio interior con sombra. La dirección más auténtica para alojarse en el casco antiguo.",
        image: `${R2}/trips/kenya-cote-hotel-lamu.jpg`,
      },
    ],
  },
];

async function main() {
  const { runSeedBatch, disconnect } = await import("./lib/seedTripsRunner");
  try {
    await runSeedBatch({ newStandardTrips: standardTrips, newJourneyTrips: journeyTrips });
    console.log("\nDone. Kenya now has 3 trips (1 existing + these 2 new).");
  } finally {
    await disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
