// Amérique du Sud batch 5 (final) — Honduras, Nicaragua, Guyana. Sourced from Pexels (free
// commercial license, no attribution required) via WebFetch on pexels.com search pages, then
// verified live with a direct HEAD/GET before being listed here. Run with:
//   npx tsx scripts/upload-images-amerique-du-sud-5.ts
// Safe to re-run — already-uploaded keys are skipped (see scripts/lib/uploadImages.ts).

export {};

process.loadEnvFile(".env");

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // -- Standard trip: "Honduras : Pico Bonito, la jungle entre montagne et mer" --
  { key: "tours/honduras-pico-bonito.jpg", url: "https://images.pexels.com/photos/13058811/pexels-photo-13058811.jpeg" },
  { key: "trips/honduras-picobonito-gallery-1.jpg", url: "https://images.pexels.com/photos/27058486/pexels-photo-27058486.jpeg" },
  { key: "trips/honduras-picobonito-gallery-2.jpg", url: "https://images.pexels.com/photos/2918143/pexels-photo-2918143.jpeg" },
  { key: "trips/honduras-picobonito-gallery-3.jpg", url: "https://images.pexels.com/photos/32795451/pexels-photo-32795451.jpeg" },
  { key: "trips/honduras-picobonito-gallery-4.jpg", url: "https://images.pexels.com/photos/19121437/pexels-photo-19121437.jpeg" },
  { key: "trips/honduras-picobonito-gallery-5.jpg", url: "https://images.pexels.com/photos/7950510/pexels-photo-7950510.jpeg" },
  { key: "trips/honduras-picobonito-gallery-6.jpg", url: "https://images.pexels.com/photos/19710604/pexels-photo-19710604.jpeg" },
  { key: "trips/honduras-picobonito-hotel-lodge.jpg", url: "https://images.pexels.com/photos/37790193/pexels-photo-37790193.jpeg" },
  { key: "trips/honduras-picobonito-hotel-omega.jpg", url: "https://images.pexels.com/photos/6790680/pexels-photo-6790680.jpeg" },

  // -- Journey trip: "Honduras : le lac Yojoa et le parc de Celaque" --
  { key: "journeys/honduras-yojoa-celaque-hero.jpg", url: "https://images.pexels.com/photos/25489548/pexels-photo-25489548.jpeg" },
  { key: "journeys/honduras-yojoa-gallery1.jpg", url: "https://images.pexels.com/photos/14406490/pexels-photo-14406490.jpeg" },
  { key: "journeys/honduras-yojoa-gallery2.jpg", url: "https://images.pexels.com/photos/28807259/pexels-photo-28807259.jpeg" },
  { key: "journeys/honduras-yojoa-gallery3.jpg", url: "https://images.pexels.com/photos/14510481/pexels-photo-14510481.jpeg" },
  { key: "journeys/honduras-yojoa-day1.jpg", url: "https://images.pexels.com/photos/28807279/pexels-photo-28807279.jpeg" },
  { key: "journeys/honduras-yojoa-day2.jpg", url: "https://images.pexels.com/photos/17840032/pexels-photo-17840032.jpeg" },
  { key: "journeys/honduras-celaque-gallery1.jpg", url: "https://images.pexels.com/photos/36932651/pexels-photo-36932651.jpeg" },
  { key: "journeys/honduras-celaque-gallery2.jpg", url: "https://images.pexels.com/photos/25489548/pexels-photo-25489548.jpeg" },
  { key: "journeys/honduras-celaque-gallery3.jpg", url: "https://images.pexels.com/photos/13058811/pexels-photo-13058811.jpeg" },
  { key: "journeys/honduras-celaque-day1.jpg", url: "https://images.pexels.com/photos/27058486/pexels-photo-27058486.jpeg" },
  { key: "journeys/honduras-celaque-day2.jpg", url: "https://images.pexels.com/photos/2918143/pexels-photo-2918143.jpeg" },

  // -- Standard trip: "Nicaragua : San Juan del Sur, la côte Pacifique du surf" --
  { key: "tours/nicaragua-sanjuandelsur.jpg", url: "https://images.pexels.com/photos/29058680/pexels-photo-29058680.jpeg" },
  { key: "trips/nicaragua-sjds-gallery-1.jpg", url: "https://images.pexels.com/photos/29699860/pexels-photo-29699860.jpeg" },
  { key: "trips/nicaragua-sjds-gallery-2.jpg", url: "https://images.pexels.com/photos/29699856/pexels-photo-29699856.jpeg" },
  { key: "trips/nicaragua-sjds-gallery-3.jpg", url: "https://images.pexels.com/photos/3600602/pexels-photo-3600602.jpeg" },
  { key: "trips/nicaragua-sjds-gallery-4.jpg", url: "https://images.pexels.com/photos/29559229/pexels-photo-29559229.jpeg" },
  { key: "trips/nicaragua-sjds-gallery-5.jpg", url: "https://images.pexels.com/photos/36047148/pexels-photo-36047148.jpeg" },
  { key: "trips/nicaragua-sjds-gallery-6.jpg", url: "https://images.pexels.com/photos/4011451/pexels-photo-4011451.jpeg" },
  { key: "trips/nicaragua-sjds-hotel-selina.jpg", url: "https://images.pexels.com/photos/32262441/pexels-photo-32262441.jpeg" },
  { key: "trips/nicaragua-sjds-hotel-victoriano.jpg", url: "https://images.pexels.com/photos/7292829/pexels-photo-7292829.jpeg" },

  // -- Journey trip: "Nicaragua : León et les Corn Islands" --
  { key: "journeys/nicaragua-leon-cornislands-hero.jpg", url: "https://images.pexels.com/photos/5274760/pexels-photo-5274760.jpeg" },
  { key: "journeys/nicaragua-leon-gallery1.jpg", url: "https://images.pexels.com/photos/13068954/pexels-photo-13068954.jpeg" },
  { key: "journeys/nicaragua-leon-gallery2.jpg", url: "https://images.pexels.com/photos/21953238/pexels-photo-21953238.jpeg" },
  { key: "journeys/nicaragua-leon-gallery3.jpg", url: "https://images.pexels.com/photos/9539308/pexels-photo-9539308.jpeg" },
  { key: "journeys/nicaragua-leon-day1.jpg", url: "https://images.pexels.com/photos/5275159/pexels-photo-5275159.jpeg" },
  { key: "journeys/nicaragua-leon-day2.jpg", url: "https://images.pexels.com/photos/21953238/pexels-photo-21953238.jpeg" },
  { key: "journeys/nicaragua-cornislands-gallery1.jpg", url: "https://images.pexels.com/photos/5274754/pexels-photo-5274754.jpeg" },
  { key: "journeys/nicaragua-cornislands-gallery2.jpg", url: "https://images.pexels.com/photos/5274758/pexels-photo-5274758.jpeg" },
  { key: "journeys/nicaragua-cornislands-gallery3.jpg", url: "https://images.pexels.com/photos/10490921/pexels-photo-10490921.jpeg" },
  { key: "journeys/nicaragua-cornislands-day1.jpg", url: "https://images.pexels.com/photos/4011451/pexels-photo-4011451.jpeg" },
  { key: "journeys/nicaragua-cornislands-day2.jpg", url: "https://images.pexels.com/photos/5274754/pexels-photo-5274754.jpeg" },

  // -- Standard trip: "Guyana : la savane du Rupununi" --
  { key: "tours/guyana-rupununi.jpg", url: "https://images.pexels.com/photos/24964727/pexels-photo-24964727.jpeg" },
  { key: "trips/guyana-rupununi-gallery-1.jpg", url: "https://images.pexels.com/photos/8439228/pexels-photo-8439228.jpeg" },
  { key: "trips/guyana-rupununi-gallery-2.jpg", url: "https://images.pexels.com/photos/2575701/pexels-photo-2575701.jpeg" },
  { key: "trips/guyana-rupununi-gallery-3.jpg", url: "https://images.pexels.com/photos/23709283/pexels-photo-23709283.jpeg" },
  { key: "trips/guyana-rupununi-gallery-4.jpg", url: "https://images.pexels.com/photos/26551060/pexels-photo-26551060.jpeg" },
  { key: "trips/guyana-rupununi-gallery-5.jpg", url: "https://images.pexels.com/photos/24743518/pexels-photo-24743518.jpeg" },
  { key: "trips/guyana-rupununi-gallery-6.jpg", url: "https://images.pexels.com/photos/35327201/pexels-photo-35327201.jpeg" },
  { key: "trips/guyana-rupununi-hotel-karanambu.jpg", url: "https://images.pexels.com/photos/10807574/pexels-photo-10807574.jpeg" },
  { key: "trips/guyana-rupununi-hotel-rockview.jpg", url: "https://images.pexels.com/photos/18556799/pexels-photo-18556799.jpeg" },

  // -- Journey trip: "Guyana : Shell Beach et les chutes d'Orinduik" --
  { key: "journeys/guyana-shellbeach-orinduik-hero.jpg", url: "https://images.pexels.com/photos/38925528/pexels-photo-38925528.jpeg" },
  { key: "journeys/guyana-shellbeach-gallery1.jpg", url: "https://images.pexels.com/photos/3661924/pexels-photo-3661924.jpeg" },
  { key: "journeys/guyana-shellbeach-gallery2.jpg", url: "https://images.pexels.com/photos/3661927/pexels-photo-3661927.jpeg" },
  { key: "journeys/guyana-shellbeach-gallery3.jpg", url: "https://images.pexels.com/photos/3866697/pexels-photo-3866697.jpeg" },
  { key: "journeys/guyana-shellbeach-day1.jpg", url: "https://images.pexels.com/photos/28036262/pexels-photo-28036262.jpeg" },
  { key: "journeys/guyana-shellbeach-day2.jpg", url: "https://images.pexels.com/photos/3661926/pexels-photo-3661926.jpeg" },
  { key: "journeys/guyana-orinduik-gallery1.jpg", url: "https://images.pexels.com/photos/6129833/pexels-photo-6129833.jpeg" },
  { key: "journeys/guyana-orinduik-gallery2.jpg", url: "https://images.pexels.com/photos/9615607/pexels-photo-9615607.jpeg" },
  { key: "journeys/guyana-orinduik-gallery3.jpg", url: "https://images.pexels.com/photos/32182187/pexels-photo-32182187.jpeg" },
  { key: "journeys/guyana-orinduik-day1.jpg", url: "https://images.pexels.com/photos/3974275/pexels-photo-3974275.jpeg" },
  { key: "journeys/guyana-orinduik-day2.jpg", url: "https://images.pexels.com/photos/17025854/pexels-photo-17025854.jpeg" },
];

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");
  await uploadImageBatch(images, "scripts/.manifests/amerique-du-sud-5.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
