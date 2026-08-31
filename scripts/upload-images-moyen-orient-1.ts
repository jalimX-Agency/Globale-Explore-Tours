export {};

// Moyen-Orient batch 1 (full region) — Émirats arabes unis, Jordanie, Oman, Israël, Arabie
// saoudite, Qatar, Liban, Bahreïn. Sources and uploads every image referenced by
// scripts/seed-trips-moyen-orient-1.ts. Run this first; the seed script refuses to write
// anything if a referenced image isn't already live.
//   npx tsx scripts/upload-images-moyen-orient-1.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Émirats arabes unis : Abu Dhabi, mosquées et musées (standard) ---
    { key: "tours/emirats-arabes-unis-abu-dhabi-culture.jpg", url: "https://images.pexels.com/photos/32119558/pexels-photo-32119558.jpeg" },
    { key: "trips/emirats-abudhabi-gallery-1.jpg", url: "https://images.pexels.com/photos/36351393/pexels-photo-36351393.jpeg" },
    { key: "trips/emirats-abudhabi-gallery-2.jpg", url: "https://images.pexels.com/photos/13569996/pexels-photo-13569996.jpeg" },
    { key: "trips/emirats-abudhabi-gallery-3.jpg", url: "https://images.pexels.com/photos/34029394/pexels-photo-34029394.jpeg" },
    { key: "trips/emirats-abudhabi-gallery-4.jpg", url: "https://images.pexels.com/photos/24862670/pexels-photo-24862670.jpeg" },
    { key: "trips/emirats-abudhabi-gallery-5.jpg", url: "https://images.pexels.com/photos/31773951/pexels-photo-31773951.jpeg" },
    { key: "trips/emirats-abudhabi-gallery-6.jpg", url: "https://images.pexels.com/photos/32119558/pexels-photo-32119558.jpeg" },
    { key: "trips/emirats-abudhabi-hotel-1.jpg", url: "https://images.pexels.com/photos/6094965/pexels-photo-6094965.jpeg" },
    { key: "trips/emirats-abudhabi-hotel-2.jpg", url: "https://images.pexels.com/photos/13748548/pexels-photo-13748548.jpeg" },

    // --- Émirats arabes unis : Jebel Jais et l'île de Sir Bani Yas (journey) ---
    { key: "journeys/emirats-jebeljais-sirbaniyas-hero.jpg", url: "https://images.pexels.com/photos/19197265/pexels-photo-19197265.jpeg" },
    { key: "journeys/emirats-jebeljais-gallery1.jpg", url: "https://images.pexels.com/photos/32762474/pexels-photo-32762474.jpeg" },
    { key: "journeys/emirats-jebeljais-gallery2.jpg", url: "https://images.pexels.com/photos/24738306/pexels-photo-24738306.jpeg" },
    { key: "journeys/emirats-jebeljais-gallery3.jpg", url: "https://images.pexels.com/photos/19197269/pexels-photo-19197269.jpeg" },
    { key: "journeys/emirats-jebeljais-day1.jpg", url: "https://images.pexels.com/photos/27990775/pexels-photo-27990775.jpeg" },
    { key: "journeys/emirats-jebeljais-day2.jpg", url: "https://images.pexels.com/photos/31215741/pexels-photo-31215741.jpeg" },
    { key: "journeys/emirats-sirbaniyas-gallery1.jpg", url: "https://images.pexels.com/photos/7101204/pexels-photo-7101204.jpeg" },
    { key: "journeys/emirats-sirbaniyas-gallery2.jpg", url: "https://images.pexels.com/photos/3258233/pexels-photo-3258233.jpeg" },
    { key: "journeys/emirats-sirbaniyas-gallery3.jpg", url: "https://images.pexels.com/photos/4813557/pexels-photo-4813557.jpeg" },
    { key: "journeys/emirats-sirbaniyas-day1.jpg", url: "https://images.pexels.com/photos/29820789/pexels-photo-29820789.jpeg" },
    { key: "journeys/emirats-sirbaniyas-day2.jpg", url: "https://images.pexels.com/photos/12042650/pexels-photo-12042650.jpeg" },

    // --- Jordanie : la Mer Morte et la réserve de Dana (standard) ---
    { key: "tours/jordanie-mer-morte-dana.jpg", url: "https://images.pexels.com/photos/30645989/pexels-photo-30645989.jpeg" },
    { key: "trips/jordanie-mermorte-gallery-1.jpg", url: "https://images.pexels.com/photos/35776142/pexels-photo-35776142.jpeg" },
    { key: "trips/jordanie-mermorte-gallery-2.jpg", url: "https://images.pexels.com/photos/3370311/pexels-photo-3370311.jpeg" },
    { key: "trips/jordanie-mermorte-gallery-3.jpg", url: "https://images.pexels.com/photos/18283935/pexels-photo-18283935.jpeg" },
    { key: "trips/jordanie-mermorte-gallery-4.jpg", url: "https://images.pexels.com/photos/30645991/pexels-photo-30645991.jpeg" },
    { key: "trips/jordanie-mermorte-gallery-5.jpg", url: "https://images.pexels.com/photos/13171166/pexels-photo-13171166.jpeg" },
    { key: "trips/jordanie-mermorte-gallery-6.jpg", url: "https://images.pexels.com/photos/17140100/pexels-photo-17140100.jpeg" },
    { key: "trips/jordanie-mermorte-hotel-1.jpg", url: "https://images.pexels.com/photos/30129074/pexels-photo-30129074.png" },
    { key: "trips/jordanie-mermorte-hotel-2.jpg", url: "https://images.pexels.com/photos/25860817/pexels-photo-25860817.jpeg" },

    // --- Jordanie : Jerash et la mer Rouge à Aqaba (journey) ---
    { key: "journeys/jordanie-jerash-aqaba-hero.jpg", url: "https://images.pexels.com/photos/18682587/pexels-photo-18682587.jpeg" },
    { key: "journeys/jordanie-jerash-gallery1.jpg", url: "https://images.pexels.com/photos/5205811/pexels-photo-5205811.jpeg" },
    { key: "journeys/jordanie-jerash-gallery2.jpg", url: "https://images.pexels.com/photos/18717601/pexels-photo-18717601.jpeg" },
    { key: "journeys/jordanie-jerash-gallery3.jpg", url: "https://images.pexels.com/photos/18717612/pexels-photo-18717612.jpeg" },
    { key: "journeys/jordanie-jerash-day1.jpg", url: "https://images.pexels.com/photos/18717595/pexels-photo-18717595.jpeg" },
    { key: "journeys/jordanie-jerash-day2.jpg", url: "https://images.pexels.com/photos/14494357/pexels-photo-14494357.jpeg" },
    { key: "journeys/jordanie-aqaba-gallery1.jpg", url: "https://images.pexels.com/photos/3940023/pexels-photo-3940023.jpeg" },
    { key: "journeys/jordanie-aqaba-gallery2.jpg", url: "https://images.pexels.com/photos/17668226/pexels-photo-17668226.jpeg" },
    { key: "journeys/jordanie-aqaba-gallery3.jpg", url: "https://images.pexels.com/photos/11195127/pexels-photo-11195127.jpeg" },
    { key: "journeys/jordanie-aqaba-day1.jpg", url: "https://images.pexels.com/photos/1540108/pexels-photo-1540108.jpeg" },
    { key: "journeys/jordanie-aqaba-day2.jpg", url: "https://images.pexels.com/photos/35206706/pexels-photo-35206706.jpeg" },

    // --- Oman : Salalah et les pluies de la mousson du Dhofar (standard) ---
    { key: "tours/oman-salalah-dhofar.jpg", url: "https://images.pexels.com/photos/11423767/pexels-photo-11423767.jpeg" },
    { key: "trips/oman-salalah-gallery-1.jpg", url: "https://images.pexels.com/photos/11445076/pexels-photo-11445076.jpeg" },
    { key: "trips/oman-salalah-gallery-2.jpg", url: "https://images.pexels.com/photos/28893363/pexels-photo-28893363.jpeg" },
    { key: "trips/oman-salalah-gallery-3.jpg", url: "https://images.pexels.com/photos/17936746/pexels-photo-17936746.jpeg" },
    { key: "trips/oman-salalah-gallery-4.jpg", url: "https://images.pexels.com/photos/28864005/pexels-photo-28864005.jpeg" },
    { key: "trips/oman-salalah-gallery-5.jpg", url: "https://images.pexels.com/photos/13036011/pexels-photo-13036011.jpeg" },
    { key: "trips/oman-salalah-gallery-6.jpg", url: "https://images.pexels.com/photos/11423767/pexels-photo-11423767.jpeg" },
    { key: "trips/oman-salalah-hotel-1.jpg", url: "https://images.pexels.com/photos/28893363/pexels-photo-28893363.jpeg" },
    { key: "trips/oman-salalah-hotel-2.jpg", url: "https://images.pexels.com/photos/17936746/pexels-photo-17936746.jpeg" },

    // --- Oman : les fjords du Musandam et le Jebel Akhdar (journey) ---
    { key: "journeys/oman-musandam-jebelakhdar-hero.jpg", url: "https://images.pexels.com/photos/36152060/pexels-photo-36152060.jpeg" },
    { key: "journeys/oman-musandam-gallery1.jpg", url: "https://images.pexels.com/photos/36152063/pexels-photo-36152063.jpeg" },
    { key: "journeys/oman-musandam-gallery2.jpg", url: "https://images.pexels.com/photos/36152058/pexels-photo-36152058.jpeg" },
    { key: "journeys/oman-musandam-gallery3.jpg", url: "https://images.pexels.com/photos/36152060/pexels-photo-36152060.jpeg" },
    { key: "journeys/oman-musandam-day1.jpg", url: "https://images.pexels.com/photos/36152063/pexels-photo-36152063.jpeg" },
    { key: "journeys/oman-musandam-day2.jpg", url: "https://images.pexels.com/photos/36152058/pexels-photo-36152058.jpeg" },
    { key: "journeys/oman-jebelakhdar-gallery1.jpg", url: "https://images.pexels.com/photos/38404378/pexels-photo-38404378.jpeg" },
    { key: "journeys/oman-jebelakhdar-gallery2.jpg", url: "https://images.pexels.com/photos/38404331/pexels-photo-38404331.jpeg" },
    { key: "journeys/oman-jebelakhdar-gallery3.jpg", url: "https://images.pexels.com/photos/38404332/pexels-photo-38404332.jpeg" },
    { key: "journeys/oman-jebelakhdar-day1.jpg", url: "https://images.pexels.com/photos/38404379/pexels-photo-38404379.jpeg" },
    { key: "journeys/oman-jebelakhdar-day2.jpg", url: "https://images.pexels.com/photos/38404335/pexels-photo-38404335.jpeg" },

    // --- Israël : Tel-Aviv et la côte méditerranéenne (standard) ---
    { key: "tours/israel-telaviv-cote.jpg", url: "https://images.pexels.com/photos/34059840/pexels-photo-34059840.jpeg" },
    { key: "trips/israel-telaviv-gallery-1.jpg", url: "https://images.pexels.com/photos/5028008/pexels-photo-5028008.jpeg" },
    { key: "trips/israel-telaviv-gallery-2.jpg", url: "https://images.pexels.com/photos/35916176/pexels-photo-35916176.jpeg" },
    { key: "trips/israel-telaviv-gallery-3.jpg", url: "https://images.pexels.com/photos/11491050/pexels-photo-11491050.jpeg" },
    { key: "trips/israel-telaviv-gallery-4.jpg", url: "https://images.pexels.com/photos/18837986/pexels-photo-18837986.jpeg" },
    { key: "trips/israel-telaviv-gallery-5.jpg", url: "https://images.pexels.com/photos/33933850/pexels-photo-33933850.jpeg" },
    { key: "trips/israel-telaviv-gallery-6.jpg", url: "https://images.pexels.com/photos/2002604/pexels-photo-2002604.jpeg" },
    { key: "trips/israel-telaviv-hotel-1.jpg", url: "https://images.pexels.com/photos/18837987/pexels-photo-18837987.jpeg" },
    { key: "trips/israel-telaviv-hotel-2.jpg", url: "https://images.pexels.com/photos/17699658/pexels-photo-17699658.jpeg" },

    // --- Israël : la Galilée et le plateau du Golan (journey) ---
    { key: "journeys/israel-galilee-golan-hero.jpg", url: "https://images.pexels.com/photos/36442700/pexels-photo-36442700.jpeg" },
    { key: "journeys/israel-galilee-gallery1.jpg", url: "https://images.pexels.com/photos/9280866/pexels-photo-9280866.jpeg" },
    { key: "journeys/israel-galilee-gallery2.jpg", url: "https://images.pexels.com/photos/33924951/pexels-photo-33924951.jpeg" },
    { key: "journeys/israel-galilee-gallery3.jpg", url: "https://images.pexels.com/photos/5194666/pexels-photo-5194666.jpeg" },
    { key: "journeys/israel-galilee-day1.jpg", url: "https://images.pexels.com/photos/11268395/pexels-photo-11268395.jpeg" },
    { key: "journeys/israel-galilee-day2.jpg", url: "https://images.pexels.com/photos/2102619/pexels-photo-2102619.jpeg" },
    { key: "journeys/israel-golan-gallery1.jpg", url: "https://images.pexels.com/photos/30187310/pexels-photo-30187310.jpeg" },
    { key: "journeys/israel-golan-gallery2.jpg", url: "https://images.pexels.com/photos/2102651/pexels-photo-2102651.jpeg" },
    { key: "journeys/israel-golan-gallery3.jpg", url: "https://images.pexels.com/photos/5194666/pexels-photo-5194666.jpeg" },
    { key: "journeys/israel-golan-day1.jpg", url: "https://images.pexels.com/photos/30187310/pexels-photo-30187310.jpeg" },
    { key: "journeys/israel-golan-day2.jpg", url: "https://images.pexels.com/photos/5194666/pexels-photo-5194666.jpeg" },

    // --- Arabie saoudite : Djeddah et Al-Balad (standard) ---
    { key: "tours/arabie-saoudite-djeddah-albalad.jpg", url: "https://images.pexels.com/photos/28558770/pexels-photo-28558770.jpeg" },
    { key: "trips/arabie-djeddah-gallery-1.jpg", url: "https://images.pexels.com/photos/28558787/pexels-photo-28558787.jpeg" },
    { key: "trips/arabie-djeddah-gallery-2.jpg", url: "https://images.pexels.com/photos/36230498/pexels-photo-36230498.jpeg" },
    { key: "trips/arabie-djeddah-gallery-3.jpg", url: "https://images.pexels.com/photos/28506300/pexels-photo-28506300.jpeg" },
    { key: "trips/arabie-djeddah-gallery-4.jpg", url: "https://images.pexels.com/photos/36230499/pexels-photo-36230499.jpeg" },
    { key: "trips/arabie-djeddah-gallery-5.jpg", url: "https://images.pexels.com/photos/36230496/pexels-photo-36230496.jpeg" },
    { key: "trips/arabie-djeddah-gallery-6.jpg", url: "https://images.pexels.com/photos/38008335/pexels-photo-38008335.jpeg" },
    { key: "trips/arabie-djeddah-hotel-1.jpg", url: "https://images.pexels.com/photos/28558787/pexels-photo-28558787.jpeg" },
    { key: "trips/arabie-djeddah-hotel-2.jpg", url: "https://images.pexels.com/photos/36230498/pexels-photo-36230498.jpeg" },

    // --- Arabie saoudite : les montagnes de l'Assir et Rijal Almaa (journey) ---
    { key: "journeys/arabie-assir-rijalalmaa-hero.jpg", url: "https://images.pexels.com/photos/35450188/pexels-photo-35450188.jpeg" },
    { key: "journeys/arabie-abha-gallery1.jpg", url: "https://images.pexels.com/photos/35450193/pexels-photo-35450193.jpeg" },
    { key: "journeys/arabie-abha-gallery2.jpg", url: "https://images.pexels.com/photos/36772107/pexels-photo-36772107.jpeg" },
    { key: "journeys/arabie-abha-gallery3.jpg", url: "https://images.pexels.com/photos/36673466/pexels-photo-36673466.jpeg" },
    { key: "journeys/arabie-abha-day1.jpg", url: "https://images.pexels.com/photos/35450193/pexels-photo-35450193.jpeg" },
    { key: "journeys/arabie-abha-day2.jpg", url: "https://images.pexels.com/photos/36772107/pexels-photo-36772107.jpeg" },
    { key: "journeys/arabie-rijalalmaa-gallery1.jpg", url: "https://images.pexels.com/photos/35450189/pexels-photo-35450189.jpeg" },
    { key: "journeys/arabie-rijalalmaa-gallery2.jpg", url: "https://images.pexels.com/photos/32556089/pexels-photo-32556089.jpeg" },
    { key: "journeys/arabie-rijalalmaa-gallery3.jpg", url: "https://images.pexels.com/photos/36673466/pexels-photo-36673466.jpeg" },
    { key: "journeys/arabie-rijalalmaa-day1.jpg", url: "https://images.pexels.com/photos/35450189/pexels-photo-35450189.jpeg" },
    { key: "journeys/arabie-rijalalmaa-day2.jpg", url: "https://images.pexels.com/photos/32556089/pexels-photo-32556089.jpeg" },

    // --- Qatar : Al Wakrah et la route de la perle (standard) ---
    { key: "tours/qatar-alwakrah-perle.jpg", url: "https://images.pexels.com/photos/30580960/pexels-photo-30580960.jpeg" },
    { key: "trips/qatar-alwakrah-gallery-1.jpg", url: "https://images.pexels.com/photos/19363344/pexels-photo-19363344.jpeg" },
    { key: "trips/qatar-alwakrah-gallery-2.jpg", url: "https://images.pexels.com/photos/15410473/pexels-photo-15410473.jpeg" },
    { key: "trips/qatar-alwakrah-gallery-3.jpg", url: "https://images.pexels.com/photos/16106134/pexels-photo-16106134.jpeg" },
    { key: "trips/qatar-alwakrah-gallery-4.jpg", url: "https://images.pexels.com/photos/30163308/pexels-photo-30163308.jpeg" },
    { key: "trips/qatar-alwakrah-gallery-5.jpg", url: "https://images.pexels.com/photos/33955052/pexels-photo-33955052.jpeg" },
    { key: "trips/qatar-alwakrah-gallery-6.jpg", url: "https://images.pexels.com/photos/19748320/pexels-photo-19748320.jpeg" },
    { key: "trips/qatar-alwakrah-hotel-1.jpg", url: "https://images.pexels.com/photos/36806386/pexels-photo-36806386.jpeg" },
    { key: "trips/qatar-alwakrah-hotel-2.jpg", url: "https://images.pexels.com/photos/31186058/pexels-photo-31186058.jpeg" },

    // --- Qatar : Al Zubarah et les mangroves d'Al Thakira (journey) ---
    { key: "journeys/qatar-zubarah-thakira-hero.jpg", url: "https://images.pexels.com/photos/37924606/pexels-photo-37924606.jpeg" },
    { key: "journeys/qatar-zubarah-gallery1.jpg", url: "https://images.pexels.com/photos/37924636/pexels-photo-37924636.jpeg" },
    { key: "journeys/qatar-zubarah-gallery2.jpg", url: "https://images.pexels.com/photos/37924624/pexels-photo-37924624.jpeg" },
    { key: "journeys/qatar-zubarah-gallery3.jpg", url: "https://images.pexels.com/photos/34853733/pexels-photo-34853733.jpeg" },
    { key: "journeys/qatar-zubarah-day1.jpg", url: "https://images.pexels.com/photos/37924617/pexels-photo-37924617.jpeg" },
    { key: "journeys/qatar-zubarah-day2.jpg", url: "https://images.pexels.com/photos/7604347/pexels-photo-7604347.jpeg" },
    { key: "journeys/qatar-thakira-gallery1.jpg", url: "https://images.pexels.com/photos/32584145/pexels-photo-32584145.jpeg" },
    { key: "journeys/qatar-thakira-gallery2.jpg", url: "https://images.pexels.com/photos/30124610/pexels-photo-30124610.jpeg" },
    { key: "journeys/qatar-thakira-gallery3.jpg", url: "https://images.pexels.com/photos/30002372/pexels-photo-30002372.jpeg" },
    { key: "journeys/qatar-thakira-day1.jpg", url: "https://images.pexels.com/photos/32584145/pexels-photo-32584145.jpeg" },
    { key: "journeys/qatar-thakira-day2.jpg", url: "https://images.pexels.com/photos/30124670/pexels-photo-30124670.jpeg" },

    // --- Liban : Byblos et la côte phénicienne (standard) ---
    { key: "tours/liban-byblos-cote.jpg", url: "https://images.pexels.com/photos/11653262/pexels-photo-11653262.jpeg" },
    { key: "trips/liban-byblos-gallery-1.jpg", url: "https://images.pexels.com/photos/11187256/pexels-photo-11187256.jpeg" },
    { key: "trips/liban-byblos-gallery-2.jpg", url: "https://images.pexels.com/photos/12259291/pexels-photo-12259291.jpeg" },
    { key: "trips/liban-byblos-gallery-3.jpg", url: "https://images.pexels.com/photos/4659944/pexels-photo-4659944.jpeg" },
    { key: "trips/liban-byblos-gallery-4.jpg", url: "https://images.pexels.com/photos/38518166/pexels-photo-38518166.jpeg" },
    { key: "trips/liban-byblos-gallery-5.jpg", url: "https://images.pexels.com/photos/28079748/pexels-photo-28079748.jpeg" },
    { key: "trips/liban-byblos-gallery-6.jpg", url: "https://images.pexels.com/photos/26989064/pexels-photo-26989064.jpeg" },
    { key: "trips/liban-byblos-hotel-1.jpg", url: "https://images.pexels.com/photos/36340574/pexels-photo-36340574.jpeg" },
    { key: "trips/liban-byblos-hotel-2.jpg", url: "https://images.pexels.com/photos/38136051/pexels-photo-38136051.jpeg" },

    // --- Liban : les cèdres de Dieu et la vallée de la Qadisha (journey) ---
    { key: "journeys/liban-cedres-qadisha-hero.jpg", url: "https://images.pexels.com/photos/20269615/pexels-photo-20269615.jpeg" },
    { key: "journeys/liban-cedres-gallery1.jpg", url: "https://images.pexels.com/photos/35537312/pexels-photo-35537312.jpeg" },
    { key: "journeys/liban-cedres-gallery2.jpg", url: "https://images.pexels.com/photos/34363649/pexels-photo-34363649.jpeg" },
    { key: "journeys/liban-cedres-gallery3.jpg", url: "https://images.pexels.com/photos/33194103/pexels-photo-33194103.jpeg" },
    { key: "journeys/liban-cedres-day1.jpg", url: "https://images.pexels.com/photos/20269615/pexels-photo-20269615.jpeg" },
    { key: "journeys/liban-cedres-day2.jpg", url: "https://images.pexels.com/photos/36481023/pexels-photo-36481023.jpeg" },
    { key: "journeys/liban-qadisha-gallery1.jpg", url: "https://images.pexels.com/photos/13171166/pexels-photo-13171166.jpeg" },
    { key: "journeys/liban-qadisha-gallery2.jpg", url: "https://images.pexels.com/photos/17140100/pexels-photo-17140100.jpeg" },
    { key: "journeys/liban-qadisha-gallery3.jpg", url: "https://images.pexels.com/photos/25860817/pexels-photo-25860817.jpeg" },
    { key: "journeys/liban-qadisha-day1.jpg", url: "https://images.pexels.com/photos/18916925/pexels-photo-18916925.jpeg" },
    { key: "journeys/liban-qadisha-day2.jpg", url: "https://images.pexels.com/photos/36723754/pexels-photo-36723754.jpeg" },

    // --- Bahreïn : la route de la perle (standard) ---
    { key: "tours/bahrein-route-perle.jpg", url: "https://images.pexels.com/photos/24590669/pexels-photo-24590669.jpeg" },
    { key: "trips/bahrein-perle-gallery-1.jpg", url: "https://images.pexels.com/photos/24590668/pexels-photo-24590668.jpeg" },
    { key: "trips/bahrein-perle-gallery-2.jpg", url: "https://images.pexels.com/photos/24590628/pexels-photo-24590628.jpeg" },
    { key: "trips/bahrein-perle-gallery-3.jpg", url: "https://images.pexels.com/photos/24590603/pexels-photo-24590603.jpeg" },
    { key: "trips/bahrein-perle-gallery-4.jpg", url: "https://images.pexels.com/photos/36806386/pexels-photo-36806386.jpeg" },
    { key: "trips/bahrein-perle-gallery-5.jpg", url: "https://images.pexels.com/photos/31186058/pexels-photo-31186058.jpeg" },
    { key: "trips/bahrein-perle-gallery-6.jpg", url: "https://images.pexels.com/photos/31186059/pexels-photo-31186059.jpeg" },
    { key: "trips/bahrein-perle-hotel-1.jpg", url: "https://images.pexels.com/photos/24590603/pexels-photo-24590603.jpeg" },
    { key: "trips/bahrein-perle-hotel-2.jpg", url: "https://images.pexels.com/photos/8824667/pexels-photo-8824667.jpeg" },

    // --- Bahreïn : l'Arbre de Vie et les tumulus d'A'ali (journey) ---
    { key: "journeys/bahrein-arbrevie-aali-hero.jpg", url: "https://images.pexels.com/photos/20155307/pexels-photo-20155307.jpeg" },
    { key: "journeys/bahrein-arbrevie-gallery1.jpg", url: "https://images.pexels.com/photos/34799656/pexels-photo-34799656.jpeg" },
    { key: "journeys/bahrein-arbrevie-gallery2.jpg", url: "https://images.pexels.com/photos/35905339/pexels-photo-35905339.jpeg" },
    { key: "journeys/bahrein-arbrevie-gallery3.jpg", url: "https://images.pexels.com/photos/5713282/pexels-photo-5713282.jpeg" },
    { key: "journeys/bahrein-arbrevie-day1.jpg", url: "https://images.pexels.com/photos/31545862/pexels-photo-31545862.jpeg" },
    { key: "journeys/bahrein-arbrevie-day2.jpg", url: "https://images.pexels.com/photos/30505509/pexels-photo-30505509.jpeg" },
    { key: "journeys/bahrein-aali-gallery1.jpg", url: "https://images.pexels.com/photos/32988331/pexels-photo-32988331.jpeg" },
    { key: "journeys/bahrein-aali-gallery2.jpg", url: "https://images.pexels.com/photos/36943572/pexels-photo-36943572.jpeg" },
    { key: "journeys/bahrein-aali-gallery3.jpg", url: "https://images.pexels.com/photos/34489194/pexels-photo-34489194.jpeg" },
    { key: "journeys/bahrein-aali-day1.jpg", url: "https://images.pexels.com/photos/32988331/pexels-photo-32988331.jpeg" },
    { key: "journeys/bahrein-aali-day2.jpg", url: "https://images.pexels.com/photos/36943572/pexels-photo-36943572.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/moyen-orient-1.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
