// Amérique du Sud batch 2 — Brazil, Colombia, Costa Rica. Sourced from Pexels (free commercial
// license, no attribution required) via WebFetch on pexels.com search pages, then verified
// live with a direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-amerique-du-sud-2.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Brésil : Salvador de Bahia, l'âme afro-brésilienne" --
  { key: "tours/bresil-salvador-bahia.jpg", url: "https://images.pexels.com/photos/14059772/pexels-photo-14059772.jpeg" },
  { key: "trips/bresil-salvador-gallery-1.jpg", url: "https://images.pexels.com/photos/31792604/pexels-photo-31792604.jpeg" },
  { key: "trips/bresil-salvador-gallery-2.jpg", url: "https://images.pexels.com/photos/29847792/pexels-photo-29847792.jpeg" },
  { key: "trips/bresil-salvador-gallery-3.jpg", url: "https://images.pexels.com/photos/28649811/pexels-photo-28649811.jpeg" },
  { key: "trips/bresil-salvador-gallery-4.jpg", url: "https://images.pexels.com/photos/36708146/pexels-photo-36708146.jpeg" },
  { key: "trips/bresil-salvador-gallery-5.jpg", url: "https://images.pexels.com/photos/15267416/pexels-photo-15267416.jpeg" },
  { key: "trips/bresil-salvador-gallery-6.jpg", url: "https://images.pexels.com/photos/20798654/pexels-photo-20798654.jpeg" },
  { key: "trips/bresil-salvador-hotel-fera.jpg", url: "https://images.pexels.com/photos/1598546/pexels-photo-1598546.jpeg" },
  { key: "trips/bresil-salvador-hotel-convento.jpg", url: "https://images.pexels.com/photos/5344838/pexels-photo-5344838.jpeg" },

  // -- Journey trip: "Brésil : l'Amazonie et le Pantanal" --
  { key: "journeys/bresil-amazonie-pantanal-hero.jpg", url: "https://images.pexels.com/photos/17217451/pexels-photo-17217451.jpeg" },
  { key: "journeys/bresil-amazonie-gallery1.jpg", url: "https://images.pexels.com/photos/32940346/pexels-photo-32940346.jpeg" },
  { key: "journeys/bresil-amazonie-gallery2.jpg", url: "https://images.pexels.com/photos/32940348/pexels-photo-32940348.jpeg" },
  { key: "journeys/bresil-amazonie-gallery3.jpg", url: "https://images.pexels.com/photos/28587122/pexels-photo-28587122.jpeg" },
  { key: "journeys/bresil-amazonie-day1.jpg", url: "https://images.pexels.com/photos/32940347/pexels-photo-32940347.jpeg" },
  { key: "journeys/bresil-amazonie-day2.jpg", url: "https://images.pexels.com/photos/26774682/pexels-photo-26774682.jpeg" },
  { key: "journeys/bresil-pantanal-gallery1.jpg", url: "https://images.pexels.com/photos/26605601/pexels-photo-26605601.jpeg" },
  { key: "journeys/bresil-pantanal-gallery2.jpg", url: "https://images.pexels.com/photos/27125072/pexels-photo-27125072.jpeg" },
  { key: "journeys/bresil-pantanal-gallery3.jpg", url: "https://images.pexels.com/photos/9224842/pexels-photo-9224842.jpeg" },
  { key: "journeys/bresil-pantanal-day1.jpg", url: "https://images.pexels.com/photos/36504727/pexels-photo-36504727.jpeg" },
  { key: "journeys/bresil-pantanal-day2.jpg", url: "https://images.pexels.com/photos/13395503/pexels-photo-13395503.jpeg" },

  // -- Standard trip: "Colombie : Bogotá et Villa de Leyva, les hauts plateaux andins" --
  { key: "tours/colombie-bogota-villa-de-leyva.jpg", url: "https://images.pexels.com/photos/32452956/pexels-photo-32452956.jpeg" },
  { key: "trips/colombie-bogota-gallery-1.jpg", url: "https://images.pexels.com/photos/16808749/pexels-photo-16808749.jpeg" },
  { key: "trips/colombie-bogota-gallery-2.jpg", url: "https://images.pexels.com/photos/33675799/pexels-photo-33675799.jpeg" },
  { key: "trips/colombie-bogota-gallery-3.jpg", url: "https://images.pexels.com/photos/31342123/pexels-photo-31342123.jpeg" },
  { key: "trips/colombie-bogota-gallery-4.jpg", url: "https://images.pexels.com/photos/17413264/pexels-photo-17413264.jpeg" },
  { key: "trips/colombie-bogota-gallery-5.jpg", url: "https://images.pexels.com/photos/13802695/pexels-photo-13802695.jpeg" },
  { key: "trips/colombie-bogota-gallery-6.jpg", url: "https://images.pexels.com/photos/31342298/pexels-photo-31342298.jpeg" },
  { key: "trips/colombie-bogota-hotel-clickclack.jpg", url: "https://images.pexels.com/photos/29119037/pexels-photo-29119037.jpeg" },
  { key: "trips/colombie-bogota-hotel-plazamayor.jpg", url: "https://images.pexels.com/photos/33786940/pexels-photo-33786940.jpeg" },

  // -- Journey trip: "Colombie : Tayrona et la Cité Perdue" --
  { key: "journeys/colombie-tayrona-ciudadperdida-hero.jpg", url: "https://images.pexels.com/photos/12227830/pexels-photo-12227830.jpeg" },
  { key: "journeys/colombie-tayrona-gallery1.jpg", url: "https://images.pexels.com/photos/12768649/pexels-photo-12768649.jpeg" },
  { key: "journeys/colombie-tayrona-gallery2.jpg", url: "https://images.pexels.com/photos/38037065/pexels-photo-38037065.jpeg" },
  { key: "journeys/colombie-tayrona-gallery3.jpg", url: "https://images.pexels.com/photos/3660318/pexels-photo-3660318.jpeg" },
  { key: "journeys/colombie-tayrona-day1.jpg", url: "https://images.pexels.com/photos/38037063/pexels-photo-38037063.jpeg" },
  { key: "journeys/colombie-tayrona-day2.jpg", url: "https://images.pexels.com/photos/36886870/pexels-photo-36886870.jpeg" },
  { key: "journeys/colombie-ciudadperdida-gallery1.jpg", url: "https://images.pexels.com/photos/14587191/pexels-photo-14587191.jpeg" },
  { key: "journeys/colombie-ciudadperdida-gallery2.jpg", url: "https://images.pexels.com/photos/8900983/pexels-photo-8900983.jpeg" },
  { key: "journeys/colombie-ciudadperdida-gallery3.jpg", url: "https://images.pexels.com/photos/12768651/pexels-photo-12768651.jpeg" },
  { key: "journeys/colombie-ciudadperdida-day1.jpg", url: "https://images.pexels.com/photos/20794392/pexels-photo-20794392.jpeg" },
  { key: "journeys/colombie-ciudadperdida-day2.jpg", url: "https://images.pexels.com/photos/30314589/pexels-photo-30314589.jpeg" },

  // -- Standard trip: "Costa Rica : la péninsule d'Osa, la jungle la plus intense de la planète" --
  { key: "tours/costa-rica-osa.jpg", url: "https://images.pexels.com/photos/35690053/pexels-photo-35690053.jpeg" },
  { key: "trips/costa-rica-osa-gallery-1.jpg", url: "https://images.pexels.com/photos/18172804/pexels-photo-18172804.jpeg" },
  { key: "trips/costa-rica-osa-gallery-2.jpg", url: "https://images.pexels.com/photos/32835457/pexels-photo-32835457.jpeg" },
  { key: "trips/costa-rica-osa-gallery-3.jpg", url: "https://images.pexels.com/photos/32902974/pexels-photo-32902974.jpeg" },
  { key: "trips/costa-rica-osa-gallery-4.jpg", url: "https://images.pexels.com/photos/24738451/pexels-photo-24738451.jpeg" },
  { key: "trips/costa-rica-osa-gallery-5.jpg", url: "https://images.pexels.com/photos/29635792/pexels-photo-29635792.jpeg" },
  { key: "trips/costa-rica-osa-gallery-6.jpg", url: "https://images.pexels.com/photos/6198925/pexels-photo-6198925.jpeg" },
  { key: "trips/costa-rica-osa-hotel-laparios.jpg", url: "https://images.pexels.com/photos/37790193/pexels-photo-37790193.jpeg" },
  { key: "trips/costa-rica-osa-hotel-corcovado.jpg", url: "https://images.pexels.com/photos/6790680/pexels-photo-6790680.jpeg" },

  // -- Journey trip: "Costa Rica : Tortuguero et le Guanacaste" --
  { key: "journeys/costa-rica-tortuguero-guanacaste-hero.jpg", url: "https://images.pexels.com/photos/39179603/pexels-photo-39179603.jpeg" },
  { key: "journeys/costa-rica-tortuguero-gallery1.jpg", url: "https://images.pexels.com/photos/7702010/pexels-photo-7702010.jpeg" },
  { key: "journeys/costa-rica-tortuguero-gallery2.jpg", url: "https://images.pexels.com/photos/12390407/pexels-photo-12390407.png" },
  { key: "journeys/costa-rica-tortuguero-gallery3.jpg", url: "https://images.pexels.com/photos/14434745/pexels-photo-14434745.jpeg" },
  { key: "journeys/costa-rica-tortuguero-day1.jpg", url: "https://images.pexels.com/photos/25863476/pexels-photo-25863476.jpeg" },
  { key: "journeys/costa-rica-tortuguero-day2.jpg", url: "https://images.pexels.com/photos/36881379/pexels-photo-36881379.jpeg" },
  { key: "journeys/costa-rica-guanacaste-gallery1.jpg", url: "https://images.pexels.com/photos/15365631/pexels-photo-15365631.jpeg" },
  { key: "journeys/costa-rica-guanacaste-gallery2.jpg", url: "https://images.pexels.com/photos/15365638/pexels-photo-15365638.jpeg" },
  { key: "journeys/costa-rica-guanacaste-gallery3.jpg", url: "https://images.pexels.com/photos/14863857/pexels-photo-14863857.jpeg" },
  { key: "journeys/costa-rica-guanacaste-day1.jpg", url: "https://images.pexels.com/photos/15365639/pexels-photo-15365639.jpeg" },
  { key: "journeys/costa-rica-guanacaste-day2.jpg", url: "https://images.pexels.com/photos/14470302/pexels-photo-14470302.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/amerique-du-sud-2.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
