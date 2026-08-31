export {};

// Australasie batch 1 (full region) — Nouvelle-Zélande, Australie, Fidji, Polynésie française,
// Nouvelle-Calédonie, Vanuatu, Samoa. Sources and uploads every image referenced by
// scripts/seed-trips-australasie-1.ts. Run this first; the seed script refuses to write
// anything if a referenced image isn't already live.
//   npx tsx scripts/upload-images-australasie-1.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Nouvelle-Zélande : Rotorua et la baie des Îles (standard) ---
    { key: "tours/nouvelle-zelande-rotorua-baiedesiles.jpg", url: "https://images.pexels.com/photos/15206557/pexels-photo-15206557.jpeg" },
    { key: "trips/nz-rotorua-gallery-1.jpg", url: "https://images.pexels.com/photos/5926331/pexels-photo-5926331.jpeg" },
    { key: "trips/nz-rotorua-gallery-2.jpg", url: "https://images.pexels.com/photos/6071597/pexels-photo-6071597.jpeg" },
    { key: "trips/nz-rotorua-gallery-3.jpg", url: "https://images.pexels.com/photos/11671236/pexels-photo-11671236.jpeg" },
    { key: "trips/nz-rotorua-gallery-4.jpg", url: "https://images.pexels.com/photos/12774064/pexels-photo-12774064.jpeg" },
    { key: "trips/nz-rotorua-gallery-5.jpg", url: "https://images.pexels.com/photos/6379620/pexels-photo-6379620.jpeg" },
    { key: "trips/nz-rotorua-gallery-6.jpg", url: "https://images.pexels.com/photos/4664658/pexels-photo-4664658.jpeg" },
    { key: "trips/nz-rotorua-hotel-1.jpg", url: "https://images.pexels.com/photos/5926331/pexels-photo-5926331.jpeg" },
    { key: "trips/nz-rotorua-hotel-2.jpg", url: "https://images.pexels.com/photos/6071597/pexels-photo-6071597.jpeg" },

    // --- Nouvelle-Zélande : Abel Tasman et les Marlborough Sounds (journey) ---
    { key: "journeys/nz-abeltasman-marlborough-hero.jpg", url: "https://images.pexels.com/photos/38415289/pexels-photo-38415289.jpeg" },
    { key: "journeys/nz-abeltasman-gallery1.jpg", url: "https://images.pexels.com/photos/38415285/pexels-photo-38415285.jpeg" },
    { key: "journeys/nz-abeltasman-gallery2.jpg", url: "https://images.pexels.com/photos/38415287/pexels-photo-38415287.jpeg" },
    { key: "journeys/nz-abeltasman-gallery3.jpg", url: "https://images.pexels.com/photos/38415286/pexels-photo-38415286.jpeg" },
    { key: "journeys/nz-abeltasman-day1.jpg", url: "https://images.pexels.com/photos/38415289/pexels-photo-38415289.jpeg" },
    { key: "journeys/nz-abeltasman-day2.jpg", url: "https://images.pexels.com/photos/38415287/pexels-photo-38415287.jpeg" },
    { key: "journeys/nz-marlborough-gallery1.jpg", url: "https://images.pexels.com/photos/38173502/pexels-photo-38173502.jpeg" },
    { key: "journeys/nz-marlborough-gallery2.jpg", url: "https://images.pexels.com/photos/38415286/pexels-photo-38415286.jpeg" },
    { key: "journeys/nz-marlborough-gallery3.jpg", url: "https://images.pexels.com/photos/38415285/pexels-photo-38415285.jpeg" },
    { key: "journeys/nz-marlborough-day1.jpg", url: "https://images.pexels.com/photos/38173502/pexels-photo-38173502.jpeg" },
    { key: "journeys/nz-marlborough-day2.jpg", url: "https://images.pexels.com/photos/38415286/pexels-photo-38415286.jpeg" },

    // --- Australie : Cairns, la Grande Barrière et Daintree (standard) ---
    { key: "tours/australie-cairns-daintree.jpg", url: "https://images.pexels.com/photos/34492256/pexels-photo-34492256.jpeg" },
    { key: "trips/australie-cairns-gallery-1.jpg", url: "https://images.pexels.com/photos/34492250/pexels-photo-34492250.jpeg" },
    { key: "trips/australie-cairns-gallery-2.jpg", url: "https://images.pexels.com/photos/35762005/pexels-photo-35762005.jpeg" },
    { key: "trips/australie-cairns-gallery-3.jpg", url: "https://images.pexels.com/photos/7863208/pexels-photo-7863208.jpeg" },
    { key: "trips/australie-cairns-gallery-4.jpg", url: "https://images.pexels.com/photos/7863205/pexels-photo-7863205.jpeg" },
    { key: "trips/australie-cairns-gallery-5.jpg", url: "https://images.pexels.com/photos/4702369/pexels-photo-4702369.jpeg" },
    { key: "trips/australie-cairns-gallery-6.jpg", url: "https://images.pexels.com/photos/26447294/pexels-photo-26447294.jpeg" },
    { key: "trips/australie-cairns-hotel-1.jpg", url: "https://images.pexels.com/photos/37671815/pexels-photo-37671815.jpeg" },
    { key: "trips/australie-cairns-hotel-2.jpg", url: "https://images.pexels.com/photos/37719237/pexels-photo-37719237.jpeg" },

    // --- Australie : Tasmanie, Cradle Mountain et Wineglass Bay (journey) ---
    { key: "journeys/australie-tasmanie-hero.jpg", url: "https://images.pexels.com/photos/18163254/pexels-photo-18163254.jpeg" },
    { key: "journeys/australie-cradlemountain-gallery1.jpg", url: "https://images.pexels.com/photos/37971025/pexels-photo-37971025.jpeg" },
    { key: "journeys/australie-cradlemountain-gallery2.jpg", url: "https://images.pexels.com/photos/34453706/pexels-photo-34453706.jpeg" },
    { key: "journeys/australie-cradlemountain-gallery3.jpg", url: "https://images.pexels.com/photos/37786315/pexels-photo-37786315.jpeg" },
    { key: "journeys/australie-cradlemountain-day1.jpg", url: "https://images.pexels.com/photos/18622979/pexels-photo-18622979.jpeg" },
    { key: "journeys/australie-cradlemountain-day2.jpg", url: "https://images.pexels.com/photos/36246139/pexels-photo-36246139.jpeg" },
    { key: "journeys/australie-wineglassbay-gallery1.jpg", url: "https://images.pexels.com/photos/15204229/pexels-photo-15204229.jpeg" },
    { key: "journeys/australie-wineglassbay-gallery2.jpg", url: "https://images.pexels.com/photos/29397277/pexels-photo-29397277.jpeg" },
    { key: "journeys/australie-wineglassbay-gallery3.jpg", url: "https://images.pexels.com/photos/17794846/pexels-photo-17794846.jpeg" },
    { key: "journeys/australie-wineglassbay-day1.jpg", url: "https://images.pexels.com/photos/17794855/pexels-photo-17794855.jpeg" },
    { key: "journeys/australie-wineglassbay-day2.jpg", url: "https://images.pexels.com/photos/29397281/pexels-photo-29397281.jpeg" },

    // --- Fidji : Taveuni, l'île jardin (standard) ---
    { key: "tours/fidji-taveuni-cascades.jpg", url: "https://images.pexels.com/photos/2214386/pexels-photo-2214386.jpeg" },
    { key: "trips/fidji-taveuni-gallery-1.jpg", url: "https://images.pexels.com/photos/2043242/pexels-photo-2043242.jpeg" },
    { key: "trips/fidji-taveuni-gallery-2.jpg", url: "https://images.pexels.com/photos/12846925/pexels-photo-12846925.jpeg" },
    { key: "trips/fidji-taveuni-gallery-3.jpg", url: "https://images.pexels.com/photos/14742499/pexels-photo-14742499.png" },
    { key: "trips/fidji-taveuni-gallery-4.jpg", url: "https://images.pexels.com/photos/9456595/pexels-photo-9456595.jpeg" },
    { key: "trips/fidji-taveuni-gallery-5.jpg", url: "https://images.pexels.com/photos/2214386/pexels-photo-2214386.jpeg" },
    { key: "trips/fidji-taveuni-gallery-6.jpg", url: "https://images.pexels.com/photos/2043242/pexels-photo-2043242.jpeg" },
    { key: "trips/fidji-taveuni-hotel-1.jpg", url: "https://images.pexels.com/photos/2214386/pexels-photo-2214386.jpeg" },
    { key: "trips/fidji-taveuni-hotel-2.jpg", url: "https://images.pexels.com/photos/2043242/pexels-photo-2043242.jpeg" },

    // --- Fidji : les îles Yasawa et le village traditionnel (journey) ---
    { key: "journeys/fidji-yasawa-village-hero.jpg", url: "https://images.pexels.com/photos/33732083/pexels-photo-33732083.jpeg" },
    { key: "journeys/fidji-yasawa-gallery1.jpg", url: "https://images.pexels.com/photos/33732082/pexels-photo-33732082.jpeg" },
    { key: "journeys/fidji-yasawa-gallery2.jpg", url: "https://images.pexels.com/photos/33732084/pexels-photo-33732084.jpeg" },
    { key: "journeys/fidji-yasawa-gallery3.jpg", url: "https://images.pexels.com/photos/33732079/pexels-photo-33732079.jpeg" },
    { key: "journeys/fidji-yasawa-day1.jpg", url: "https://images.pexels.com/photos/33732087/pexels-photo-33732087.jpeg" },
    { key: "journeys/fidji-yasawa-day2.jpg", url: "https://images.pexels.com/photos/33732025/pexels-photo-33732025.jpeg" },
    { key: "journeys/fidji-village-gallery1.jpg", url: "https://images.pexels.com/photos/26088002/pexels-photo-26088002.jpeg" },
    { key: "journeys/fidji-village-gallery2.jpg", url: "https://images.pexels.com/photos/26088001/pexels-photo-26088001.jpeg" },
    { key: "journeys/fidji-village-gallery3.jpg", url: "https://images.pexels.com/photos/26088005/pexels-photo-26088005.jpeg" },
    { key: "journeys/fidji-village-day1.jpg", url: "https://images.pexels.com/photos/26088002/pexels-photo-26088002.jpeg" },
    { key: "journeys/fidji-village-day2.jpg", url: "https://images.pexels.com/photos/26088005/pexels-photo-26088005.jpeg" },

    // --- Polynésie française : les Marquises (standard) ---
    { key: "tours/polynesie-francaise-marquises.jpg", url: "https://images.pexels.com/photos/27273245/pexels-photo-27273245.jpeg" },
    { key: "trips/polynesie-marquises-gallery-1.jpg", url: "https://images.pexels.com/photos/27273247/pexels-photo-27273247.jpeg" },
    { key: "trips/polynesie-marquises-gallery-2.jpg", url: "https://images.pexels.com/photos/8640764/pexels-photo-8640764.jpeg" },
    { key: "trips/polynesie-marquises-gallery-3.jpg", url: "https://images.pexels.com/photos/10141388/pexels-photo-10141388.jpeg" },
    { key: "trips/polynesie-marquises-gallery-4.jpg", url: "https://images.pexels.com/photos/8640809/pexels-photo-8640809.jpeg" },
    { key: "trips/polynesie-marquises-gallery-5.jpg", url: "https://images.pexels.com/photos/27273245/pexels-photo-27273245.jpeg" },
    { key: "trips/polynesie-marquises-gallery-6.jpg", url: "https://images.pexels.com/photos/27273247/pexels-photo-27273247.jpeg" },
    { key: "trips/polynesie-marquises-hotel-1.jpg", url: "https://images.pexels.com/photos/8640764/pexels-photo-8640764.jpeg" },
    { key: "trips/polynesie-marquises-hotel-2.jpg", url: "https://images.pexels.com/photos/10141388/pexels-photo-10141388.jpeg" },

    // --- Polynésie française : Rangiroa et Moorea (journey) ---
    { key: "journeys/polynesie-rangiroa-moorea-hero.jpg", url: "https://images.pexels.com/photos/33980509/pexels-photo-33980509.jpeg" },
    { key: "journeys/polynesie-rangiroa-gallery1.jpg", url: "https://images.pexels.com/photos/34492256/pexels-photo-34492256.jpeg" },
    { key: "journeys/polynesie-rangiroa-gallery2.jpg", url: "https://images.pexels.com/photos/7863208/pexels-photo-7863208.jpeg" },
    { key: "journeys/polynesie-rangiroa-gallery3.jpg", url: "https://images.pexels.com/photos/4702369/pexels-photo-4702369.jpeg" },
    { key: "journeys/polynesie-rangiroa-day1.jpg", url: "https://images.pexels.com/photos/35762005/pexels-photo-35762005.jpeg" },
    { key: "journeys/polynesie-rangiroa-day2.jpg", url: "https://images.pexels.com/photos/7863205/pexels-photo-7863205.jpeg" },
    { key: "journeys/polynesie-moorea-gallery1.jpg", url: "https://images.pexels.com/photos/33980508/pexels-photo-33980508.jpeg" },
    { key: "journeys/polynesie-moorea-gallery2.jpg", url: "https://images.pexels.com/photos/33980623/pexels-photo-33980623.jpeg" },
    { key: "journeys/polynesie-moorea-gallery3.jpg", url: "https://images.pexels.com/photos/33980616/pexels-photo-33980616.jpeg" },
    { key: "journeys/polynesie-moorea-day1.jpg", url: "https://images.pexels.com/photos/33980643/pexels-photo-33980643.jpeg" },
    { key: "journeys/polynesie-moorea-day2.jpg", url: "https://images.pexels.com/photos/28653403/pexels-photo-28653403.jpeg" },

    // --- Nouvelle-Calédonie : les îles Loyauté (standard) ---
    { key: "tours/nouvelle-caledonie-iles-loyaute.jpg", url: "https://images.pexels.com/photos/33784535/pexels-photo-33784535.jpeg" },
    { key: "trips/nc-loyaute-gallery-1.jpg", url: "https://images.pexels.com/photos/6464069/pexels-photo-6464069.jpeg" },
    { key: "trips/nc-loyaute-gallery-2.jpg", url: "https://images.pexels.com/photos/39207725/pexels-photo-39207725.jpeg" },
    { key: "trips/nc-loyaute-gallery-3.jpg", url: "https://images.pexels.com/photos/39207728/pexels-photo-39207728.jpeg" },
    { key: "trips/nc-loyaute-gallery-4.jpg", url: "https://images.pexels.com/photos/34269011/pexels-photo-34269011.jpeg" },
    { key: "trips/nc-loyaute-gallery-5.jpg", url: "https://images.pexels.com/photos/33784535/pexels-photo-33784535.jpeg" },
    { key: "trips/nc-loyaute-gallery-6.jpg", url: "https://images.pexels.com/photos/6464069/pexels-photo-6464069.jpeg" },
    { key: "trips/nc-loyaute-hotel-1.jpg", url: "https://images.pexels.com/photos/33784535/pexels-photo-33784535.jpeg" },
    { key: "trips/nc-loyaute-hotel-2.jpg", url: "https://images.pexels.com/photos/6464069/pexels-photo-6464069.jpeg" },

    // --- Nouvelle-Calédonie : la rivière Bleue et une tribu du Nord (journey) ---
    { key: "journeys/nc-riviere-bleue-tribu-hero.jpg", url: "https://images.pexels.com/photos/33344472/pexels-photo-33344472.jpeg" },
    { key: "journeys/nc-rivierebleue-gallery1.jpg", url: "https://images.pexels.com/photos/39219105/pexels-photo-39219105.jpeg" },
    { key: "journeys/nc-rivierebleue-gallery2.jpg", url: "https://images.pexels.com/photos/39207727/pexels-photo-39207727.jpeg" },
    { key: "journeys/nc-rivierebleue-gallery3.jpg", url: "https://images.pexels.com/photos/33344472/pexels-photo-33344472.jpeg" },
    { key: "journeys/nc-rivierebleue-day1.jpg", url: "https://images.pexels.com/photos/39219105/pexels-photo-39219105.jpeg" },
    { key: "journeys/nc-rivierebleue-day2.jpg", url: "https://images.pexels.com/photos/39207727/pexels-photo-39207727.jpeg" },
    { key: "journeys/nc-tribu-gallery1.jpg", url: "https://images.pexels.com/photos/32696007/pexels-photo-32696007.jpeg" },
    { key: "journeys/nc-tribu-gallery2.jpg", url: "https://images.pexels.com/photos/35212881/pexels-photo-35212881.jpeg" },
    { key: "journeys/nc-tribu-gallery3.jpg", url: "https://images.pexels.com/photos/7263527/pexels-photo-7263527.jpeg" },
    { key: "journeys/nc-tribu-day1.jpg", url: "https://images.pexels.com/photos/32696007/pexels-photo-32696007.jpeg" },
    { key: "journeys/nc-tribu-day2.jpg", url: "https://images.pexels.com/photos/7263527/pexels-photo-7263527.jpeg" },

    // --- Vanuatu : Espiritu Santo (standard) ---
    { key: "tours/vanuatu-espiritu-santo.jpg", url: "https://images.pexels.com/photos/4719669/pexels-photo-4719669.jpeg" },
    { key: "trips/vanuatu-santo-gallery-1.jpg", url: "https://images.pexels.com/photos/12921445/pexels-photo-12921445.jpeg" },
    { key: "trips/vanuatu-santo-gallery-2.jpg", url: "https://images.pexels.com/photos/4719669/pexels-photo-4719669.jpeg" },
    { key: "trips/vanuatu-santo-gallery-3.jpg", url: "https://images.pexels.com/photos/12921445/pexels-photo-12921445.jpeg" },
    { key: "trips/vanuatu-santo-gallery-4.jpg", url: "https://images.pexels.com/photos/4719669/pexels-photo-4719669.jpeg" },
    { key: "trips/vanuatu-santo-gallery-5.jpg", url: "https://images.pexels.com/photos/12921445/pexels-photo-12921445.jpeg" },
    { key: "trips/vanuatu-santo-gallery-6.jpg", url: "https://images.pexels.com/photos/4719669/pexels-photo-4719669.jpeg" },
    { key: "trips/vanuatu-santo-hotel-1.jpg", url: "https://images.pexels.com/photos/4719669/pexels-photo-4719669.jpeg" },
    { key: "trips/vanuatu-santo-hotel-2.jpg", url: "https://images.pexels.com/photos/12921445/pexels-photo-12921445.jpeg" },

    // --- Vanuatu : Pentecôte et le volcan Ambrym (journey) ---
    { key: "journeys/vanuatu-pentecost-ambrym-hero.jpg", url: "https://images.pexels.com/photos/7263527/pexels-photo-7263527.jpeg" },
    { key: "journeys/vanuatu-pentecost-gallery1.jpg", url: "https://images.pexels.com/photos/32696007/pexels-photo-32696007.jpeg" },
    { key: "journeys/vanuatu-pentecost-gallery2.jpg", url: "https://images.pexels.com/photos/35212881/pexels-photo-35212881.jpeg" },
    { key: "journeys/vanuatu-pentecost-gallery3.jpg", url: "https://images.pexels.com/photos/7263527/pexels-photo-7263527.jpeg" },
    { key: "journeys/vanuatu-pentecost-day1.jpg", url: "https://images.pexels.com/photos/32696007/pexels-photo-32696007.jpeg" },
    { key: "journeys/vanuatu-pentecost-day2.jpg", url: "https://images.pexels.com/photos/7263527/pexels-photo-7263527.jpeg" },
    { key: "journeys/vanuatu-ambrym-gallery1.jpg", url: "https://images.pexels.com/photos/29940256/pexels-photo-29940256.jpeg" },
    { key: "journeys/vanuatu-ambrym-gallery2.jpg", url: "https://images.pexels.com/photos/68645/hawaii-volcano-hot-fire-68645.jpeg" },
    { key: "journeys/vanuatu-ambrym-gallery3.jpg", url: "https://images.pexels.com/photos/9906088/pexels-photo-9906088.jpeg" },
    { key: "journeys/vanuatu-ambrym-day1.jpg", url: "https://images.pexels.com/photos/68645/hawaii-volcano-hot-fire-68645.jpeg" },
    { key: "journeys/vanuatu-ambrym-day2.jpg", url: "https://images.pexels.com/photos/9906088/pexels-photo-9906088.jpeg" },

    // --- Samoa : Savai'i, l'île sacrée (standard) ---
    { key: "tours/samoa-savaii.jpg", url: "https://images.pexels.com/photos/11621237/pexels-photo-11621237.jpeg" },
    { key: "trips/samoa-savaii-gallery-1.jpg", url: "https://images.pexels.com/photos/36137382/pexels-photo-36137382.jpeg" },
    { key: "trips/samoa-savaii-gallery-2.jpg", url: "https://images.pexels.com/photos/17131058/pexels-photo-17131058.jpeg" },
    { key: "trips/samoa-savaii-gallery-3.jpg", url: "https://images.pexels.com/photos/31086786/pexels-photo-31086786.jpeg" },
    { key: "trips/samoa-savaii-gallery-4.jpg", url: "https://images.pexels.com/photos/3423152/pexels-photo-3423152.jpeg" },
    { key: "trips/samoa-savaii-gallery-5.jpg", url: "https://images.pexels.com/photos/3423147/pexels-photo-3423147.jpeg" },
    { key: "trips/samoa-savaii-gallery-6.jpg", url: "https://images.pexels.com/photos/11621237/pexels-photo-11621237.jpeg" },
    { key: "trips/samoa-savaii-hotel-1.jpg", url: "https://images.pexels.com/photos/36137382/pexels-photo-36137382.jpeg" },
    { key: "trips/samoa-savaii-hotel-2.jpg", url: "https://images.pexels.com/photos/17131058/pexels-photo-17131058.jpeg" },

    // --- Samoa : Lalomanu et la vie en fale (journey) ---
    { key: "journeys/samoa-lalomanu-fale-hero.jpg", url: "https://images.pexels.com/photos/36137382/pexels-photo-36137382.jpeg" },
    { key: "journeys/samoa-lalomanu-gallery1.jpg", url: "https://images.pexels.com/photos/17131058/pexels-photo-17131058.jpeg" },
    { key: "journeys/samoa-lalomanu-gallery2.jpg", url: "https://images.pexels.com/photos/36815420/pexels-photo-36815420.jpeg" },
    { key: "journeys/samoa-lalomanu-gallery3.jpg", url: "https://images.pexels.com/photos/31086786/pexels-photo-31086786.jpeg" },
    { key: "journeys/samoa-lalomanu-day1.jpg", url: "https://images.pexels.com/photos/36137382/pexels-photo-36137382.jpeg" },
    { key: "journeys/samoa-lalomanu-day2.jpg", url: "https://images.pexels.com/photos/36815420/pexels-photo-36815420.jpeg" },
    { key: "journeys/samoa-fale-gallery1.jpg", url: "https://images.pexels.com/photos/3423152/pexels-photo-3423152.jpeg" },
    { key: "journeys/samoa-fale-gallery2.jpg", url: "https://images.pexels.com/photos/3423147/pexels-photo-3423147.jpeg" },
    { key: "journeys/samoa-fale-gallery3.jpg", url: "https://images.pexels.com/photos/17131058/pexels-photo-17131058.jpeg" },
    { key: "journeys/samoa-fale-day1.jpg", url: "https://images.pexels.com/photos/36137382/pexels-photo-36137382.jpeg" },
    { key: "journeys/samoa-fale-day2.jpg", url: "https://images.pexels.com/photos/3423152/pexels-photo-3423152.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/australasie-1.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
