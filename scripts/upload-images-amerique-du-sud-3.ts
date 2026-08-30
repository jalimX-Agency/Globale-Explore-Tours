// Amérique du Sud batch 3 — Ecuador, Bolivia, Panama. Sourced from Pexels (free commercial
// license, no attribution required) via WebFetch on pexels.com search pages, then verified
// live with a direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-amerique-du-sud-3.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Équateur : l'Amazonie de Cuyabeno" --
  { key: "tours/equateur-cuyabeno.jpg", url: "https://images.pexels.com/photos/30299870/pexels-photo-30299870.jpeg" },
  { key: "trips/equateur-cuyabeno-gallery-1.jpg", url: "https://images.pexels.com/photos/33664253/pexels-photo-33664253.jpeg" },
  { key: "trips/equateur-cuyabeno-gallery-2.jpg", url: "https://images.pexels.com/photos/17862061/pexels-photo-17862061.jpeg" },
  { key: "trips/equateur-cuyabeno-gallery-3.jpg", url: "https://images.pexels.com/photos/16094393/pexels-photo-16094393.jpeg" },
  { key: "trips/equateur-cuyabeno-gallery-4.jpg", url: "https://images.pexels.com/photos/26967658/pexels-photo-26967658.jpeg" },
  { key: "trips/equateur-cuyabeno-gallery-5.jpg", url: "https://images.pexels.com/photos/47074/squirrel-monkey-monkey-climb-feeding-47074.jpeg" },
  { key: "trips/equateur-cuyabeno-gallery-6.jpg", url: "https://images.pexels.com/photos/14658638/pexels-photo-14658638.jpeg" },
  { key: "trips/equateur-cuyabeno-hotel-cuyabeno.jpg", url: "https://images.pexels.com/photos/36349806/pexels-photo-36349806.jpeg" },
  { key: "trips/equateur-cuyabeno-hotel-jamu.jpg", url: "https://images.pexels.com/photos/37812265/pexels-photo-37812265.jpeg" },

  // -- Journey trip: "Équateur : l'avenue des Volcans et Cuenca" --
  { key: "journeys/equateur-volcans-cuenca-hero.jpg", url: "https://images.pexels.com/photos/6276300/pexels-photo-6276300.jpeg" },
  { key: "journeys/equateur-cotopaxi-gallery1.jpg", url: "https://images.pexels.com/photos/29538988/pexels-photo-29538988.jpeg" },
  { key: "journeys/equateur-cotopaxi-gallery2.jpg", url: "https://images.pexels.com/photos/32693360/pexels-photo-32693360.jpeg" },
  { key: "journeys/equateur-cotopaxi-gallery3.jpg", url: "https://images.pexels.com/photos/30785381/pexels-photo-30785381.jpeg" },
  { key: "journeys/equateur-cotopaxi-day1.jpg", url: "https://images.pexels.com/photos/30785364/pexels-photo-30785364.jpeg" },
  { key: "journeys/equateur-cotopaxi-day2.jpg", url: "https://images.pexels.com/photos/36629933/pexels-photo-36629933.jpeg" },
  { key: "journeys/equateur-cuenca-gallery1.jpg", url: "https://images.pexels.com/photos/20608997/pexels-photo-20608997.jpeg" },
  { key: "journeys/equateur-cuenca-gallery2.jpg", url: "https://images.pexels.com/photos/27208538/pexels-photo-27208538.jpeg" },
  { key: "journeys/equateur-cuenca-gallery3.jpg", url: "https://images.pexels.com/photos/38461833/pexels-photo-38461833.jpeg" },
  { key: "journeys/equateur-cuenca-day1.jpg", url: "https://images.pexels.com/photos/34275181/pexels-photo-34275181.jpeg" },
  { key: "journeys/equateur-cuenca-day2.jpg", url: "https://images.pexels.com/photos/10824057/pexels-photo-10824057.jpeg" },

  // -- Standard trip: "Bolivie : le parc national Madidi" --
  { key: "tours/bolivie-madidi.jpg", url: "https://images.pexels.com/photos/26712718/pexels-photo-26712718.jpeg" },
  { key: "trips/bolivie-madidi-gallery-1.jpg", url: "https://images.pexels.com/photos/24743241/pexels-photo-24743241.jpeg" },
  { key: "trips/bolivie-madidi-gallery-2.jpg", url: "https://images.pexels.com/photos/27581080/pexels-photo-27581080.jpeg" },
  { key: "trips/bolivie-madidi-gallery-3.jpg", url: "https://images.pexels.com/photos/11856770/pexels-photo-11856770.jpeg" },
  { key: "trips/bolivie-madidi-gallery-4.jpg", url: "https://images.pexels.com/photos/33570703/pexels-photo-33570703.jpeg" },
  { key: "trips/bolivie-madidi-gallery-5.jpg", url: "https://images.pexels.com/photos/13818472/pexels-photo-13818472.jpeg" },
  { key: "trips/bolivie-madidi-gallery-6.jpg", url: "https://images.pexels.com/photos/15004490/pexels-photo-15004490.jpeg" },
  { key: "trips/bolivie-madidi-hotel-chalalan.jpg", url: "https://images.pexels.com/photos/10807574/pexels-photo-10807574.jpeg" },
  { key: "trips/bolivie-madidi-hotel-sanmiguel.jpg", url: "https://images.pexels.com/photos/18556799/pexels-photo-18556799.jpeg" },

  // -- Journey trip: "Bolivie : Sucre et Potosí, les villes de l'argent colonial" --
  { key: "journeys/bolivie-sucre-potosi-hero.jpg", url: "https://images.pexels.com/photos/7051846/pexels-photo-7051846.jpeg" },
  { key: "journeys/bolivie-sucre-gallery1.jpg", url: "https://images.pexels.com/photos/38412063/pexels-photo-38412063.jpeg" },
  { key: "journeys/bolivie-sucre-gallery2.jpg", url: "https://images.pexels.com/photos/19511731/pexels-photo-19511731.jpeg" },
  { key: "journeys/bolivie-sucre-gallery3.jpg", url: "https://images.pexels.com/photos/7051845/pexels-photo-7051845.jpeg" },
  { key: "journeys/bolivie-sucre-day1.jpg", url: "https://images.pexels.com/photos/14762213/pexels-photo-14762213.jpeg" },
  { key: "journeys/bolivie-sucre-day2.jpg", url: "https://images.pexels.com/photos/7052146/pexels-photo-7052146.jpeg" },
  { key: "journeys/bolivie-potosi-gallery1.jpg", url: "https://images.pexels.com/photos/33788947/pexels-photo-33788947.jpeg" },
  { key: "journeys/bolivie-potosi-gallery2.jpg", url: "https://images.pexels.com/photos/5503169/pexels-photo-5503169.jpeg" },
  { key: "journeys/bolivie-potosi-gallery3.jpg", url: "https://images.pexels.com/photos/5241956/pexels-photo-5241956.jpeg" },
  { key: "journeys/bolivie-potosi-day1.jpg", url: "https://images.pexels.com/photos/27954953/pexels-photo-27954953.jpeg" },
  { key: "journeys/bolivie-potosi-day2.jpg", url: "https://images.pexels.com/photos/27954952/pexels-photo-27954952.jpeg" },

  // -- Standard trip: "Panama : Boquete, les hautes terres du café et du volcan Barú" --
  { key: "tours/panama-boquete.jpg", url: "https://images.pexels.com/photos/7125591/pexels-photo-7125591.jpeg" },
  { key: "trips/panama-boquete-gallery-1.jpg", url: "https://images.pexels.com/photos/29892493/pexels-photo-29892493.jpeg" },
  { key: "trips/panama-boquete-gallery-2.jpg", url: "https://images.pexels.com/photos/29781258/pexels-photo-29781258.jpeg" },
  { key: "trips/panama-boquete-gallery-3.jpg", url: "https://images.pexels.com/photos/2380342/pexels-photo-2380342.jpeg" },
  { key: "trips/panama-boquete-gallery-4.jpg", url: "https://images.pexels.com/photos/15070301/pexels-photo-15070301.jpeg" },
  { key: "trips/panama-boquete-gallery-5.jpg", url: "https://images.pexels.com/photos/10824057/pexels-photo-10824057.jpeg" },
  { key: "trips/panama-boquete-gallery-6.jpg", url: "https://images.pexels.com/photos/6198925/pexels-photo-6198925.jpeg" },
  { key: "trips/panama-boquete-hotel-fincalerida.jpg", url: "https://images.pexels.com/photos/37790193/pexels-photo-37790193.jpeg" },
  { key: "trips/panama-boquete-hotel-gardeninn.jpg", url: "https://images.pexels.com/photos/6790680/pexels-photo-6790680.jpeg" },

  // -- Journey trip: "Panama : Coiba et le peuple emberá" --
  { key: "journeys/panama-coiba-embera-hero.jpg", url: "https://images.pexels.com/photos/38334554/pexels-photo-38334554.jpeg" },
  { key: "journeys/panama-coiba-gallery1.jpg", url: "https://images.pexels.com/photos/12572039/pexels-photo-12572039.jpeg" },
  { key: "journeys/panama-coiba-gallery2.jpg", url: "https://images.pexels.com/photos/4890136/pexels-photo-4890136.jpeg" },
  { key: "journeys/panama-coiba-gallery3.jpg", url: "https://images.pexels.com/photos/19896439/pexels-photo-19896439.jpeg" },
  { key: "journeys/panama-coiba-day1.jpg", url: "https://images.pexels.com/photos/8019037/pexels-photo-8019037.jpeg" },
  { key: "journeys/panama-coiba-day2.jpg", url: "https://images.pexels.com/photos/21930817/pexels-photo-21930817.jpeg" },
  { key: "journeys/panama-embera-gallery1.jpg", url: "https://images.pexels.com/photos/33664253/pexels-photo-33664253.jpeg" },
  { key: "journeys/panama-embera-gallery2.jpg", url: "https://images.pexels.com/photos/18556799/pexels-photo-18556799.jpeg" },
  { key: "journeys/panama-embera-gallery3.jpg", url: "https://images.pexels.com/photos/29220057/pexels-photo-29220057.jpeg" },
  { key: "journeys/panama-embera-day1.jpg", url: "https://images.pexels.com/photos/35071944/pexels-photo-35071944.jpeg" },
  { key: "journeys/panama-embera-day2.jpg", url: "https://images.pexels.com/photos/33833134/pexels-photo-33833134.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/amerique-du-sud-3.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
