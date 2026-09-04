export {};

// Enrichment pass for the 6 existing "Croisières" trips created in seed-trips-croisieres.ts:
// appends 4 more gallery images to each standard trip's Tour.images, adds a 3rd TourSection to
// each standard trip, and appends 3 more gallery images to each journey chapter's
// JourneyChapter.galleryImages. Purely additive — no existing rows are deleted, only extended.
// Requires scripts/upload-images-croisieres-extra.ts to have been run first (every URL below
// must already be live in R2).
//   npx tsx scripts/enrich-trips-croisieres.ts

process.loadEnvFile(".env");

async function main() {
  const { db } = await import("../src/lib/db");

  const R2 = process.env.NEXT_PUBLIC_R2_URL!;

  // ── Guard rail: every referenced image must already be live in R2 ──
  const newUrls = [
    `${R2}/trips/egypte-croisiere-gallery-7.jpg`,
    `${R2}/trips/egypte-croisiere-gallery-8.jpg`,
    `${R2}/trips/egypte-croisiere-gallery-9.jpg`,
    `${R2}/trips/egypte-croisiere-gallery-10.jpg`,
    `${R2}/trips/grece-croisiere-gallery-7.jpg`,
    `${R2}/trips/grece-croisiere-gallery-8.jpg`,
    `${R2}/trips/grece-croisiere-gallery-9.jpg`,
    `${R2}/trips/grece-croisiere-gallery-10.jpg`,
    `${R2}/trips/etats-unis-croisiere-gallery-7.jpg`,
    `${R2}/trips/etats-unis-croisiere-gallery-8.jpg`,
    `${R2}/trips/etats-unis-croisiere-gallery-9.jpg`,
    `${R2}/trips/etats-unis-croisiere-gallery-10.jpg`,
    `${R2}/journeys/norvege-croisiere-ch1-gallery4.jpg`,
    `${R2}/journeys/norvege-croisiere-ch1-gallery5.jpg`,
    `${R2}/journeys/norvege-croisiere-ch1-gallery6.jpg`,
    `${R2}/journeys/norvege-croisiere-ch2-gallery4.jpg`,
    `${R2}/journeys/norvege-croisiere-ch2-gallery5.jpg`,
    `${R2}/journeys/norvege-croisiere-ch2-gallery6.jpg`,
    `${R2}/journeys/saintelucie-croisiere-ch1-gallery4.jpg`,
    `${R2}/journeys/saintelucie-croisiere-ch1-gallery5.jpg`,
    `${R2}/journeys/saintelucie-croisiere-ch1-gallery6.jpg`,
    `${R2}/journeys/saintelucie-croisiere-ch2-gallery4.jpg`,
    `${R2}/journeys/saintelucie-croisiere-ch2-gallery5.jpg`,
    `${R2}/journeys/saintelucie-croisiere-ch2-gallery6.jpg`,
    `${R2}/journeys/vietnam-croisiere-ch1-gallery4.jpg`,
    `${R2}/journeys/vietnam-croisiere-ch1-gallery5.jpg`,
    `${R2}/journeys/vietnam-croisiere-ch1-gallery6.jpg`,
    `${R2}/journeys/vietnam-croisiere-ch2-gallery4.jpg`,
    `${R2}/journeys/vietnam-croisiere-ch2-gallery5.jpg`,
    `${R2}/journeys/vietnam-croisiere-ch2-gallery6.jpg`,
  ];
  for (const url of newUrls) {
    const res = await fetch(url, { method: "HEAD" }).catch(() => null);
    if (!res || !res.ok) throw new Error(`Referenced image is not live: ${url}`);
  }
  console.log(`Verified ${newUrls.length} referenced image(s) are live.`);

  // ── Standard trips: extend Tour.images + add a 3rd TourSection ──
  const standardUpdates: {
    slug: string;
    extraImages: string[];
    section3: {
      heading: string; headingEn: string; headingEs: string;
      body: string; bodyEn: string; bodyEs: string;
    };
  }[] = [
    {
      slug: "egypte-croisiere-mer-rouge",
      extraImages: [
        `${R2}/trips/egypte-croisiere-gallery-7.jpg`,
        `${R2}/trips/egypte-croisiere-gallery-8.jpg`,
        `${R2}/trips/egypte-croisiere-gallery-9.jpg`,
        `${R2}/trips/egypte-croisiere-gallery-10.jpg`,
      ],
      section3: {
        heading: "Entre désert et récifs, un littoral hors du temps",
        headingEn: "Between Desert and Reef, a Timeless Coastline",
        headingEs: "Entre desierto y arrecife, un litoral fuera del tiempo",
        body:
          "La côte égyptienne de la mer Rouge présente un contraste géologique rare : des montagnes désertiques arides, parmi les plus anciennes formations rocheuses d'Afrique, plongent directement dans une eau turquoise sans aucune transition végétale, un paysage que les communautés bédouines de la région parcourent depuis des siècles selon des routes de chameaux encore empruntées aujourd'hui. Cette rencontre brutale entre l'aridité la plus totale et l'une des mers les plus riches en vie marine du globe reste l'image la plus frappante de toute la croisière.",
        bodyEn:
          "Egypt's Red Sea coast presents a rare geological contrast: arid desert mountains, among Africa's oldest rock formations, plunge straight into turquoise water with no vegetation in between, a landscape the region's Bedouin communities have crossed for centuries along camel routes still used today. This stark meeting of total aridity and one of the most marine-life-rich seas on the planet remains the most striking image of the entire cruise.",
        bodyEs:
          "La costa egipcia del mar Rojo presenta un contraste geológico poco frecuente: montañas desérticas áridas, entre las formaciones rocosas más antiguas de África, se sumergen directamente en un agua turquesa sin transición vegetal alguna, un paisaje que las comunidades beduinas de la región recorren desde hace siglos por rutas de camellos todavía utilizadas hoy. Este encuentro brusco entre la aridez más absoluta y uno de los mares más ricos en vida marina del planeta sigue siendo la imagen más impactante de todo el crucero.",
      },
    },
    {
      slug: "grece-croisiere-mediterranee",
      extraImages: [
        `${R2}/trips/grece-croisiere-gallery-7.jpg`,
        `${R2}/trips/grece-croisiere-gallery-8.jpg`,
        `${R2}/trips/grece-croisiere-gallery-9.jpg`,
        `${R2}/trips/grece-croisiere-gallery-10.jpg`,
      ],
      section3: {
        heading: "La vie à l'ancre, tavernes et couchers de soleil",
        headingEn: "Life at Anchor, Tavernas and Sunsets",
        headingEs: "La vida al ancla, tabernas y atardeceres",
        body:
          "Une croisière à voile en Grèce se vit autant à bord qu'à terre : chaque mouillage devient l'occasion de rejoindre en annexe une taverne familiale accessible uniquement par la mer, où le poisson du jour est servi encore tiède du gril face au coucher de soleil sur l'eau. Ce rythme, dicté par le vent et les mouillages plutôt que par un itinéraire fixe, reste l'essence même de la navigation en mer Égée depuis l'Antiquité, lorsque les marins grecs déjà couraient d'île en île au gré des étés.",
        bodyEn:
          "A sailing cruise in Greece is lived as much on board as ashore: each anchorage becomes a chance to take the tender to a family-run taverna accessible only by sea, where the day's catch is served still warm from the grill facing the sunset over the water. This rhythm, dictated by wind and anchorages rather than a fixed itinerary, remains the very essence of sailing in the Aegean since antiquity, when Greek sailors already island-hopped through the summer months.",
        bodyEs:
          "Un crucero a vela en Grecia se vive tanto a bordo como en tierra: cada fondeo se convierte en la ocasión de acercarse en la lancha auxiliar a una taberna familiar accesible solo por mar, donde el pescado del día se sirve todavía templado de la parrilla frente a la puesta de sol sobre el agua. Este ritmo, dictado por el viento y los fondeaderos en lugar de un itinerario fijo, sigue siendo la esencia misma de la navegación en el mar Egeo desde la Antigüedad, cuando los marineros griegos ya saltaban de isla en isla durante los veranos.",
      },
    },
    {
      slug: "etats-unis-croisiere-nouvelle-angleterre",
      extraImages: [
        `${R2}/trips/etats-unis-croisiere-gallery-7.jpg`,
        `${R2}/trips/etats-unis-croisiere-gallery-8.jpg`,
        `${R2}/trips/etats-unis-croisiere-gallery-9.jpg`,
        `${R2}/trips/etats-unis-croisiere-gallery-10.jpg`,
      ],
      section3: {
        heading: "La pêche au homard, une tradition vivante",
        headingEn: "Lobster Fishing, a Living Tradition",
        headingEs: "La pesca de langosta, una tradición viva",
        body:
          "Le Maine produit à lui seul plus de quatre-vingts pour cent des homards pêchés aux États-Unis, une industrie portée par plus de quatre mille pêcheurs titulaires d'une licence qui relèvent chaque jour des milliers de casiers disposés le long de la côte selon des droits de pêche transmis de génération en génération au sein des familles. Croiser au large de Camden ou de Stonington, c'est croiser ces bateaux de travail aux couleurs vives dès l'aube, une scène restée pratiquement inchangée depuis plus d'un siècle malgré la modernisation des équipements.",
        bodyEn:
          "Maine alone produces over eighty per cent of the lobster caught in the United States, an industry carried by more than four thousand licensed fishermen who haul thousands of traps laid along the coast each day, under fishing rights passed down through families across generations. Cruising off Camden or Stonington means crossing paths with these brightly coloured working boats from dawn, a scene that has remained practically unchanged for over a century despite modernised equipment.",
        bodyEs:
          "Maine produce por sí solo más del ochenta por ciento de la langosta capturada en Estados Unidos, una industria sostenida por más de cuatro mil pescadores con licencia que recogen cada día miles de nasas dispuestas a lo largo de la costa, bajo derechos de pesca transmitidos de generación en generación dentro de las familias. Navegar frente a Camden o Stonington es cruzarse con estos barcos de trabajo de colores vivos desde el amanecer, una escena que ha permanecido prácticamente inalterada durante más de un siglo pese a la modernización del equipamiento.",
      },
    },
  ];

  for (const upd of standardUpdates) {
    const tour = await db.tour.findUnique({ where: { slug: upd.slug }, select: { id: true, images: true } });
    if (!tour) throw new Error(`Tour not found: ${upd.slug}`);
    const combinedImages = `${tour.images},${upd.extraImages.join(",")}`;
    await db.tour.update({ where: { id: tour.id }, data: { images: combinedImages } });
    await db.tourSection.create({
      data: {
        tourId: tour.id,
        heading: upd.section3.heading,
        headingEn: upd.section3.headingEn,
        headingEs: upd.section3.headingEs,
        body: upd.section3.body,
        bodyEn: upd.section3.bodyEn,
        bodyEs: upd.section3.bodyEs,
        order: 2,
      },
    });
    console.log(`OK   ${upd.slug} — +${upd.extraImages.length} images, +1 section`);
  }

  // ── Journey trips: extend each chapter's galleryImages ──
  const chapterUpdates: { tourSlug: string; chapterOrder: number; extraImages: string[] }[] = [
    {
      tourSlug: "norvege-croisiere-fjords",
      chapterOrder: 0,
      extraImages: [
        `${R2}/journeys/norvege-croisiere-ch1-gallery4.jpg`,
        `${R2}/journeys/norvege-croisiere-ch1-gallery5.jpg`,
        `${R2}/journeys/norvege-croisiere-ch1-gallery6.jpg`,
      ],
    },
    {
      tourSlug: "norvege-croisiere-fjords",
      chapterOrder: 1,
      extraImages: [
        `${R2}/journeys/norvege-croisiere-ch2-gallery4.jpg`,
        `${R2}/journeys/norvege-croisiere-ch2-gallery5.jpg`,
        `${R2}/journeys/norvege-croisiere-ch2-gallery6.jpg`,
      ],
    },
    {
      tourSlug: "saintelucie-croisiere-caraibes",
      chapterOrder: 0,
      extraImages: [
        `${R2}/journeys/saintelucie-croisiere-ch1-gallery4.jpg`,
        `${R2}/journeys/saintelucie-croisiere-ch1-gallery5.jpg`,
        `${R2}/journeys/saintelucie-croisiere-ch1-gallery6.jpg`,
      ],
    },
    {
      tourSlug: "saintelucie-croisiere-caraibes",
      chapterOrder: 1,
      extraImages: [
        `${R2}/journeys/saintelucie-croisiere-ch2-gallery4.jpg`,
        `${R2}/journeys/saintelucie-croisiere-ch2-gallery5.jpg`,
        `${R2}/journeys/saintelucie-croisiere-ch2-gallery6.jpg`,
      ],
    },
    {
      tourSlug: "vietnam-croisiere-halong",
      chapterOrder: 0,
      extraImages: [
        `${R2}/journeys/vietnam-croisiere-ch1-gallery4.jpg`,
        `${R2}/journeys/vietnam-croisiere-ch1-gallery5.jpg`,
        `${R2}/journeys/vietnam-croisiere-ch1-gallery6.jpg`,
      ],
    },
    {
      tourSlug: "vietnam-croisiere-halong",
      chapterOrder: 1,
      extraImages: [
        `${R2}/journeys/vietnam-croisiere-ch2-gallery4.jpg`,
        `${R2}/journeys/vietnam-croisiere-ch2-gallery5.jpg`,
        `${R2}/journeys/vietnam-croisiere-ch2-gallery6.jpg`,
      ],
    },
  ];

  for (const upd of chapterUpdates) {
    const tour = await db.tour.findUnique({ where: { slug: upd.tourSlug }, select: { id: true } });
    if (!tour) throw new Error(`Tour not found: ${upd.tourSlug}`);
    const chapter = await db.journeyChapter.findFirst({
      where: { tourId: tour.id, order: upd.chapterOrder },
      select: { id: true, galleryImages: true },
    });
    if (!chapter) throw new Error(`Chapter not found: ${upd.tourSlug} order ${upd.chapterOrder}`);
    const combined = `${chapter.galleryImages},${upd.extraImages.join(",")}`;
    await db.journeyChapter.update({ where: { id: chapter.id }, data: { galleryImages: combined } });
    console.log(`OK   ${upd.tourSlug} chapter ${upd.chapterOrder} — +${upd.extraImages.length} images`);
  }

  console.log("\nDone.");
  await db.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
