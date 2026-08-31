export {};

// Asie batch 1 (full region) — Japon, Thaïlande, Chine, Mongolie, Corée du Sud, Ouzbékistan,
// Taïwan. Sources and uploads every image referenced by scripts/seed-trips-asie-1.ts. Run this
// first; the seed script refuses to write anything if a referenced image isn't already live.
//   npx tsx scripts/upload-images-asie-1.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Japon : les Alpes japonaises, Takayama et Shirakawa-go (standard) ---
    { key: "tours/japon-alpes-shirakawago.jpg", url: "https://images.pexels.com/photos/38086226/pexels-photo-38086226.jpeg" },
    { key: "trips/japon-alpes-gallery-1.jpg", url: "https://images.pexels.com/photos/37434008/pexels-photo-37434008.jpeg" },
    { key: "trips/japon-alpes-gallery-2.jpg", url: "https://images.pexels.com/photos/16592317/pexels-photo-16592317.jpeg" },
    { key: "trips/japon-alpes-gallery-3.jpg", url: "https://images.pexels.com/photos/31290709/pexels-photo-31290709.jpeg" },
    { key: "trips/japon-alpes-gallery-4.jpg", url: "https://images.pexels.com/photos/32662864/pexels-photo-32662864.jpeg" },
    { key: "trips/japon-alpes-gallery-5.jpg", url: "https://images.pexels.com/photos/33241056/pexels-photo-33241056.jpeg" },
    { key: "trips/japon-alpes-gallery-6.jpg", url: "https://images.pexels.com/photos/28251127/pexels-photo-28251127.jpeg" },
    { key: "trips/japon-alpes-hotel-1.jpg", url: "https://images.pexels.com/photos/36920147/pexels-photo-36920147.jpeg" },
    { key: "trips/japon-alpes-hotel-2.jpg", url: "https://images.pexels.com/photos/29550813/pexels-photo-29550813.jpeg" },

    // --- Japon : Naoshima, l'île de l'art, et le Kumano Kodo (journey) ---
    { key: "journeys/japon-naoshima-kumanokodo-hero.jpg", url: "https://images.pexels.com/photos/29241411/pexels-photo-29241411.jpeg" },
    { key: "journeys/japon-naoshima-gallery1.jpg", url: "https://images.pexels.com/photos/31651448/pexels-photo-31651448.jpeg" },
    { key: "journeys/japon-naoshima-gallery2.jpg", url: "https://images.pexels.com/photos/31442854/pexels-photo-31442854.jpeg" },
    { key: "journeys/japon-naoshima-gallery3.jpg", url: "https://images.pexels.com/photos/36618203/pexels-photo-36618203.jpeg" },
    { key: "journeys/japon-naoshima-day1.jpg", url: "https://images.pexels.com/photos/31178037/pexels-photo-31178037.jpeg" },
    { key: "journeys/japon-naoshima-day2.jpg", url: "https://images.pexels.com/photos/31442854/pexels-photo-31442854.jpeg" },
    { key: "journeys/japon-kumanokodo-gallery1.jpg", url: "https://images.pexels.com/photos/13827789/pexels-photo-13827789.jpeg" },
    { key: "journeys/japon-kumanokodo-gallery2.jpg", url: "https://images.pexels.com/photos/37124835/pexels-photo-37124835.jpeg" },
    { key: "journeys/japon-kumanokodo-gallery3.jpg", url: "https://images.pexels.com/photos/33149699/pexels-photo-33149699.jpeg" },
    { key: "journeys/japon-kumanokodo-day1.jpg", url: "https://images.pexels.com/photos/31216539/pexels-photo-31216539.jpeg" },
    { key: "journeys/japon-kumanokodo-day2.jpg", url: "https://images.pexels.com/photos/37991599/pexels-photo-37991599.jpeg" },

    // --- Thaïlande : Chiang Mai et le triangle d'or (standard) ---
    { key: "tours/thailande-chiangmai-triangle-or.jpg", url: "https://images.pexels.com/photos/37250801/pexels-photo-37250801.jpeg" },
    { key: "trips/thailande-chiangmai-gallery-1.jpg", url: "https://images.pexels.com/photos/37248535/pexels-photo-37248535.jpeg" },
    { key: "trips/thailande-chiangmai-gallery-2.jpg", url: "https://images.pexels.com/photos/32258975/pexels-photo-32258975.jpeg" },
    { key: "trips/thailande-chiangmai-gallery-3.jpg", url: "https://images.pexels.com/photos/31743689/pexels-photo-31743689.jpeg" },
    { key: "trips/thailande-chiangmai-gallery-4.jpg", url: "https://images.pexels.com/photos/16986823/pexels-photo-16986823.jpeg" },
    { key: "trips/thailande-chiangmai-gallery-5.jpg", url: "https://images.pexels.com/photos/10548021/pexels-photo-10548021.jpeg" },
    { key: "trips/thailande-chiangmai-gallery-6.jpg", url: "https://images.pexels.com/photos/889931/pexels-photo-889931.jpeg" },
    { key: "trips/thailande-chiangmai-hotel-1.jpg", url: "https://images.pexels.com/photos/32258975/pexels-photo-32258975.jpeg" },
    { key: "trips/thailande-chiangmai-hotel-2.jpg", url: "https://images.pexels.com/photos/10548021/pexels-photo-10548021.jpeg" },

    // --- Thaïlande : Sukhothai et Koh Lanta (journey) ---
    { key: "journeys/thailande-sukhothai-kohlanta-hero.jpg", url: "https://images.pexels.com/photos/8821868/pexels-photo-8821868.jpeg" },
    { key: "journeys/thailande-sukhothai-gallery1.jpg", url: "https://images.pexels.com/photos/38006077/pexels-photo-38006077.jpeg" },
    { key: "journeys/thailande-sukhothai-gallery2.jpg", url: "https://images.pexels.com/photos/8960647/pexels-photo-8960647.jpeg" },
    { key: "journeys/thailande-sukhothai-gallery3.jpg", url: "https://images.pexels.com/photos/37135450/pexels-photo-37135450.jpeg" },
    { key: "journeys/thailande-sukhothai-day1.jpg", url: "https://images.pexels.com/photos/130131/pexels-photo-130131.jpeg" },
    { key: "journeys/thailande-sukhothai-day2.jpg", url: "https://images.pexels.com/photos/8960647/pexels-photo-8960647.jpeg" },
    { key: "journeys/thailande-kohlanta-gallery1.jpg", url: "https://images.pexels.com/photos/1647064/pexels-photo-1647064.jpeg" },
    { key: "journeys/thailande-kohlanta-gallery2.jpg", url: "https://images.pexels.com/photos/30613914/pexels-photo-30613914.jpeg" },
    { key: "journeys/thailande-kohlanta-gallery3.jpg", url: "https://images.pexels.com/photos/35126171/pexels-photo-35126171.jpeg" },
    { key: "journeys/thailande-kohlanta-day1.jpg", url: "https://images.pexels.com/photos/31833429/pexels-photo-31833429.jpeg" },
    { key: "journeys/thailande-kohlanta-day2.jpg", url: "https://images.pexels.com/photos/37833647/pexels-photo-37833647.jpeg" },

    // --- Chine : Guilin et les rizières de Longsheng (standard) ---
    { key: "tours/chine-guilin-longsheng.jpg", url: "https://images.pexels.com/photos/38820609/pexels-photo-38820609.jpeg" },
    { key: "trips/chine-guilin-gallery-1.jpg", url: "https://images.pexels.com/photos/37996852/pexels-photo-37996852.jpeg" },
    { key: "trips/chine-guilin-gallery-2.jpg", url: "https://images.pexels.com/photos/36535024/pexels-photo-36535024.jpeg" },
    { key: "trips/chine-guilin-gallery-3.jpg", url: "https://images.pexels.com/photos/36535023/pexels-photo-36535023.jpeg" },
    { key: "trips/chine-guilin-gallery-4.jpg", url: "https://images.pexels.com/photos/24246260/pexels-photo-24246260.jpeg" },
    { key: "trips/chine-guilin-gallery-5.jpg", url: "https://images.pexels.com/photos/33899273/pexels-photo-33899273.jpeg" },
    { key: "trips/chine-guilin-gallery-6.jpg", url: "https://images.pexels.com/photos/24246270/pexels-photo-24246270.jpeg" },
    { key: "trips/chine-guilin-hotel-1.jpg", url: "https://images.pexels.com/photos/6713735/pexels-photo-6713735.jpeg" },
    { key: "trips/chine-guilin-hotel-2.jpg", url: "https://images.pexels.com/photos/2362085/pexels-photo-2362085.jpeg" },

    // --- Chine : Zhangjiajie et Fenghuang (journey) ---
    { key: "journeys/chine-zhangjiajie-fenghuang-hero.jpg", url: "https://images.pexels.com/photos/39014232/pexels-photo-39014232.jpeg" },
    { key: "journeys/chine-zhangjiajie-gallery1.jpg", url: "https://images.pexels.com/photos/25000765/pexels-photo-25000765.jpeg" },
    { key: "journeys/chine-zhangjiajie-gallery2.jpg", url: "https://images.pexels.com/photos/34683501/pexels-photo-34683501.jpeg" },
    { key: "journeys/chine-zhangjiajie-gallery3.jpg", url: "https://images.pexels.com/photos/37621083/pexels-photo-37621083.jpeg" },
    { key: "journeys/chine-zhangjiajie-day1.jpg", url: "https://images.pexels.com/photos/39014236/pexels-photo-39014236.jpeg" },
    { key: "journeys/chine-zhangjiajie-day2.jpg", url: "https://images.pexels.com/photos/34683501/pexels-photo-34683501.jpeg" },
    { key: "journeys/chine-fenghuang-gallery1.jpg", url: "https://images.pexels.com/photos/4839146/pexels-photo-4839146.jpeg" },
    { key: "journeys/chine-fenghuang-gallery2.jpg", url: "https://images.pexels.com/photos/4839157/pexels-photo-4839157.jpeg" },
    { key: "journeys/chine-fenghuang-gallery3.jpg", url: "https://images.pexels.com/photos/34285491/pexels-photo-34285491.jpeg" },
    { key: "journeys/chine-fenghuang-day1.jpg", url: "https://images.pexels.com/photos/4839155/pexels-photo-4839155.jpeg" },
    { key: "journeys/chine-fenghuang-day2.jpg", url: "https://images.pexels.com/photos/33672248/pexels-photo-33672248.jpeg" },

    // --- Mongolie : le lac Khövsgöl et les steppes du nord (standard) ---
    { key: "tours/mongolie-khovsgol-nord.jpg", url: "https://images.pexels.com/photos/37079568/pexels-photo-37079568.jpeg" },
    { key: "trips/mongolie-khovsgol-gallery-1.jpg", url: "https://images.pexels.com/photos/24778693/pexels-photo-24778693.jpeg" },
    { key: "trips/mongolie-khovsgol-gallery-2.jpg", url: "https://images.pexels.com/photos/4321774/pexels-photo-4321774.jpeg" },
    { key: "trips/mongolie-khovsgol-gallery-3.jpg", url: "https://images.pexels.com/photos/4324954/pexels-photo-4324954.jpeg" },
    { key: "trips/mongolie-khovsgol-gallery-4.jpg", url: "https://images.pexels.com/photos/6408356/pexels-photo-6408356.jpeg" },
    { key: "trips/mongolie-khovsgol-gallery-5.jpg", url: "https://images.pexels.com/photos/24778684/pexels-photo-24778684.jpeg" },
    { key: "trips/mongolie-khovsgol-gallery-6.jpg", url: "https://images.pexels.com/photos/28560707/pexels-photo-28560707.jpeg" },
    { key: "trips/mongolie-khovsgol-hotel-1.jpg", url: "https://images.pexels.com/photos/4321774/pexels-photo-4321774.jpeg" },
    { key: "trips/mongolie-khovsgol-hotel-2.jpg", url: "https://images.pexels.com/photos/14544975/pexels-photo-14544975.jpeg" },

    // --- Mongolie : l'Altaï et les aigles des Kazakhs (journey) ---
    { key: "journeys/mongolie-altai-aigle-hero.jpg", url: "https://images.pexels.com/photos/4588821/pexels-photo-4588821.jpeg" },
    { key: "journeys/mongolie-altai-gallery1.jpg", url: "https://images.pexels.com/photos/3932279/pexels-photo-3932279.jpeg" },
    { key: "journeys/mongolie-altai-gallery2.jpg", url: "https://images.pexels.com/photos/6408359/pexels-photo-6408359.jpeg" },
    { key: "journeys/mongolie-altai-gallery3.jpg", url: "https://images.pexels.com/photos/14901619/pexels-photo-14901619.jpeg" },
    { key: "journeys/mongolie-altai-day1.jpg", url: "https://images.pexels.com/photos/30326289/pexels-photo-30326289.jpeg" },
    { key: "journeys/mongolie-altai-day2.jpg", url: "https://images.pexels.com/photos/9247655/pexels-photo-9247655.jpeg" },
    { key: "journeys/mongolie-aigle-gallery1.jpg", url: "https://images.pexels.com/photos/5275469/pexels-photo-5275469.jpeg" },
    { key: "journeys/mongolie-aigle-gallery2.jpg", url: "https://images.pexels.com/photos/5275477/pexels-photo-5275477.jpeg" },
    { key: "journeys/mongolie-aigle-gallery3.jpg", url: "https://images.pexels.com/photos/5275478/pexels-photo-5275478.jpeg" },
    { key: "journeys/mongolie-aigle-day1.jpg", url: "https://images.pexels.com/photos/5275514/pexels-photo-5275514.jpeg" },
    { key: "journeys/mongolie-aigle-day2.jpg", url: "https://images.pexels.com/photos/6408364/pexels-photo-6408364.jpeg" },

    // --- Corée du Sud : l'île de Jeju (standard) ---
    { key: "tours/coree-du-sud-jeju.jpg", url: "https://images.pexels.com/photos/13314461/pexels-photo-13314461.jpeg" },
    { key: "trips/coree-jeju-gallery-1.jpg", url: "https://images.pexels.com/photos/28525306/pexels-photo-28525306.jpeg" },
    { key: "trips/coree-jeju-gallery-2.jpg", url: "https://images.pexels.com/photos/34350147/pexels-photo-34350147.jpeg" },
    { key: "trips/coree-jeju-gallery-3.jpg", url: "https://images.pexels.com/photos/30966647/pexels-photo-30966647.jpeg" },
    { key: "trips/coree-jeju-gallery-4.jpg", url: "https://images.pexels.com/photos/8850965/pexels-photo-8850965.jpeg" },
    { key: "trips/coree-jeju-gallery-5.jpg", url: "https://images.pexels.com/photos/11687637/pexels-photo-11687637.jpeg" },
    { key: "trips/coree-jeju-gallery-6.jpg", url: "https://images.pexels.com/photos/13314461/pexels-photo-13314461.jpeg" },
    { key: "trips/coree-jeju-hotel-1.jpg", url: "https://images.pexels.com/photos/28525306/pexels-photo-28525306.jpeg" },
    { key: "trips/coree-jeju-hotel-2.jpg", url: "https://images.pexels.com/photos/34350147/pexels-photo-34350147.jpeg" },

    // --- Corée du Sud : le mont Seorak et Andong (journey) ---
    { key: "journeys/coree-seorak-andong-hero.jpg", url: "https://images.pexels.com/photos/35215226/pexels-photo-35215226.jpeg" },
    { key: "journeys/coree-seorak-gallery1.jpg", url: "https://images.pexels.com/photos/36178961/pexels-photo-36178961.jpeg" },
    { key: "journeys/coree-seorak-gallery2.jpg", url: "https://images.pexels.com/photos/12597052/pexels-photo-12597052.jpeg" },
    { key: "journeys/coree-seorak-gallery3.jpg", url: "https://images.pexels.com/photos/37384688/pexels-photo-37384688.jpeg" },
    { key: "journeys/coree-seorak-day1.jpg", url: "https://images.pexels.com/photos/35215229/pexels-photo-35215229.jpeg" },
    { key: "journeys/coree-seorak-day2.jpg", url: "https://images.pexels.com/photos/18845505/pexels-photo-18845505.jpeg" },
    { key: "journeys/coree-andong-gallery1.jpg", url: "https://images.pexels.com/photos/36153261/pexels-photo-36153261.jpeg" },
    { key: "journeys/coree-andong-gallery2.jpg", url: "https://images.pexels.com/photos/11067514/pexels-photo-11067514.jpeg" },
    { key: "journeys/coree-andong-gallery3.jpg", url: "https://images.pexels.com/photos/6483288/pexels-photo-6483288.jpeg" },
    { key: "journeys/coree-andong-day1.jpg", url: "https://images.pexels.com/photos/11556175/pexels-photo-11556175.jpeg" },
    { key: "journeys/coree-andong-day2.jpg", url: "https://images.pexels.com/photos/26559059/pexels-photo-26559059.jpeg" },

    // --- Ouzbékistan : la vallée de Ferghana, artisanat et vergers (standard) ---
    { key: "tours/ouzbekistan-fergana-artisanat.jpg", url: "https://images.pexels.com/photos/33817464/pexels-photo-33817464.jpeg" },
    { key: "trips/ouzbekistan-fergana-gallery-1.jpg", url: "https://images.pexels.com/photos/10482703/pexels-photo-10482703.jpeg" },
    { key: "trips/ouzbekistan-fergana-gallery-2.jpg", url: "https://images.pexels.com/photos/29475568/pexels-photo-29475568.jpeg" },
    { key: "trips/ouzbekistan-fergana-gallery-3.jpg", url: "https://images.pexels.com/photos/10482700/pexels-photo-10482700.jpeg" },
    { key: "trips/ouzbekistan-fergana-gallery-4.jpg", url: "https://images.pexels.com/photos/16796299/pexels-photo-16796299.jpeg" },
    { key: "trips/ouzbekistan-fergana-gallery-5.jpg", url: "https://images.pexels.com/photos/33817464/pexels-photo-33817464.jpeg" },
    { key: "trips/ouzbekistan-fergana-gallery-6.jpg", url: "https://images.pexels.com/photos/10482696/pexels-photo-10482696.jpeg" },
    { key: "trips/ouzbekistan-fergana-hotel-1.jpg", url: "https://images.pexels.com/photos/29475576/pexels-photo-29475576.jpeg" },
    { key: "trips/ouzbekistan-fergana-hotel-2.jpg", url: "https://images.pexels.com/photos/10482703/pexels-photo-10482703.jpeg" },

    // --- Ouzbékistan : Noukous et le désert du Kyzylkoum (journey) ---
    { key: "journeys/ouzbekistan-noukous-kyzylkoum-hero.jpg", url: "https://images.pexels.com/photos/36429280/pexels-photo-36429280.jpeg" },
    { key: "journeys/ouzbekistan-noukous-gallery1.jpg", url: "https://images.pexels.com/photos/36446923/pexels-photo-36446923.jpeg" },
    { key: "journeys/ouzbekistan-noukous-gallery2.jpg", url: "https://images.pexels.com/photos/36612746/pexels-photo-36612746.jpeg" },
    { key: "journeys/ouzbekistan-noukous-gallery3.jpg", url: "https://images.pexels.com/photos/36429318/pexels-photo-36429318.jpeg" },
    { key: "journeys/ouzbekistan-noukous-day1.jpg", url: "https://images.pexels.com/photos/36612745/pexels-photo-36612745.jpeg" },
    { key: "journeys/ouzbekistan-noukous-day2.jpg", url: "https://images.pexels.com/photos/36429281/pexels-photo-36429281.jpeg" },
    { key: "journeys/ouzbekistan-kyzylkoum-gallery1.jpg", url: "https://images.pexels.com/photos/33816999/pexels-photo-33816999.jpeg" },
    { key: "journeys/ouzbekistan-kyzylkoum-gallery2.jpg", url: "https://images.pexels.com/photos/28448930/pexels-photo-28448930.jpeg" },
    { key: "journeys/ouzbekistan-kyzylkoum-gallery3.jpg", url: "https://images.pexels.com/photos/36429277/pexels-photo-36429277.jpeg" },
    { key: "journeys/ouzbekistan-kyzylkoum-day1.jpg", url: "https://images.pexels.com/photos/28448927/pexels-photo-28448927.jpeg" },
    { key: "journeys/ouzbekistan-kyzylkoum-day2.jpg", url: "https://images.pexels.com/photos/9497619/pexels-photo-9497619.jpeg" },

    // --- Taïwan : Kenting et la côte sud tropicale (standard) ---
    { key: "tours/taiwan-kenting-sud.jpg", url: "https://images.pexels.com/photos/7855251/pexels-photo-7855251.jpeg" },
    { key: "trips/taiwan-kenting-gallery-1.jpg", url: "https://images.pexels.com/photos/30682275/pexels-photo-30682275.jpeg" },
    { key: "trips/taiwan-kenting-gallery-2.jpg", url: "https://images.pexels.com/photos/12757653/pexels-photo-12757653.jpeg" },
    { key: "trips/taiwan-kenting-gallery-3.jpg", url: "https://images.pexels.com/photos/14182616/pexels-photo-14182616.jpeg" },
    { key: "trips/taiwan-kenting-gallery-4.jpg", url: "https://images.pexels.com/photos/30682274/pexels-photo-30682274.jpeg" },
    { key: "trips/taiwan-kenting-gallery-5.jpg", url: "https://images.pexels.com/photos/36063297/pexels-photo-36063297.jpeg" },
    { key: "trips/taiwan-kenting-gallery-6.jpg", url: "https://images.pexels.com/photos/7855251/pexels-photo-7855251.jpeg" },
    { key: "trips/taiwan-kenting-hotel-1.jpg", url: "https://images.pexels.com/photos/30682275/pexels-photo-30682275.jpeg" },
    { key: "trips/taiwan-kenting-hotel-2.jpg", url: "https://images.pexels.com/photos/12757653/pexels-photo-12757653.jpeg" },

    // --- Taïwan : le lac du Soleil et de la Lune et Jiufen (journey) ---
    { key: "journeys/taiwan-sunmoonlake-jiufen-hero.jpg", url: "https://images.pexels.com/photos/7898777/pexels-photo-7898777.png" },
    { key: "journeys/taiwan-sunmoonlake-gallery1.jpg", url: "https://images.pexels.com/photos/34661081/pexels-photo-34661081.jpeg" },
    { key: "journeys/taiwan-sunmoonlake-gallery2.jpg", url: "https://images.pexels.com/photos/38867653/pexels-photo-38867653.jpeg" },
    { key: "journeys/taiwan-sunmoonlake-gallery3.jpg", url: "https://images.pexels.com/photos/5656454/pexels-photo-5656454.jpeg" },
    { key: "journeys/taiwan-sunmoonlake-day1.jpg", url: "https://images.pexels.com/photos/7898777/pexels-photo-7898777.png" },
    { key: "journeys/taiwan-sunmoonlake-day2.jpg", url: "https://images.pexels.com/photos/5656454/pexels-photo-5656454.jpeg" },
    { key: "journeys/taiwan-jiufen-gallery1.jpg", url: "https://images.pexels.com/photos/37975552/pexels-photo-37975552.jpeg" },
    { key: "journeys/taiwan-jiufen-gallery2.jpg", url: "https://images.pexels.com/photos/32207825/pexels-photo-32207825.jpeg" },
    { key: "journeys/taiwan-jiufen-gallery3.jpg", url: "https://images.pexels.com/photos/32228101/pexels-photo-32228101.jpeg" },
    { key: "journeys/taiwan-jiufen-day1.jpg", url: "https://images.pexels.com/photos/37975552/pexels-photo-37975552.jpeg" },
    { key: "journeys/taiwan-jiufen-day2.jpg", url: "https://images.pexels.com/photos/32207825/pexels-photo-32207825.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/asie-1.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
