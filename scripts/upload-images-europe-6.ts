export {};

// Europe batch 6 (Hongrie, Irlande, Pologne). Sources and uploads every image referenced by
// scripts/seed-trips-europe-6.ts. Run this first; the seed script refuses to write anything
// if a referenced image isn't already live.
//   npx tsx scripts/upload-images-europe-6.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Hongrie : le lac Balaton et la presqu'île de Tihany (standard) ---
    { key: "tours/hongrie-balaton-tihany.jpg", url: "https://images.pexels.com/photos/29202987/pexels-photo-29202987.jpeg" },
    { key: "trips/hongrie-balaton-gallery-1.jpg", url: "https://images.pexels.com/photos/15227907/pexels-photo-15227907.jpeg" },
    { key: "trips/hongrie-balaton-gallery-2.jpg", url: "https://images.pexels.com/photos/13014224/pexels-photo-13014224.jpeg" },
    { key: "trips/hongrie-balaton-gallery-3.jpg", url: "https://images.pexels.com/photos/28927327/pexels-photo-28927327.jpeg" },
    { key: "trips/hongrie-balaton-gallery-4.jpg", url: "https://images.pexels.com/photos/18310246/pexels-photo-18310246.jpeg" },
    { key: "trips/hongrie-balaton-gallery-5.jpg", url: "https://images.pexels.com/photos/29202989/pexels-photo-29202989.jpeg" },
    { key: "trips/hongrie-balaton-gallery-6.jpg", url: "https://images.pexels.com/photos/12537145/pexels-photo-12537145.jpeg" },
    { key: "trips/hongrie-balaton-hotel-1.jpg", url: "https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg" },
    { key: "trips/hongrie-balaton-hotel-2.jpg", url: "https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg" },

    // --- Hongrie : Eger et le karst d'Aggtelek (journey) ---
    { key: "journeys/hongrie-eger-aggtelek-hero.jpg", url: "https://images.pexels.com/photos/33943992/pexels-photo-33943992.jpeg" },
    { key: "journeys/hongrie-eger-gallery1.jpg", url: "https://images.pexels.com/photos/39173984/pexels-photo-39173984.jpeg" },
    { key: "journeys/hongrie-eger-gallery2.jpg", url: "https://images.pexels.com/photos/33943991/pexels-photo-33943991.jpeg" },
    { key: "journeys/hongrie-eger-gallery3.jpg", url: "https://images.pexels.com/photos/39173985/pexels-photo-39173985.jpeg" },
    { key: "journeys/hongrie-eger-day1.jpg", url: "https://images.pexels.com/photos/39173986/pexels-photo-39173986.jpeg" },
    { key: "journeys/hongrie-eger-day2.jpg", url: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg" },
    { key: "journeys/hongrie-aggtelek-gallery1.jpg", url: "https://images.pexels.com/photos/34204887/pexels-photo-34204887.jpeg" },
    { key: "journeys/hongrie-aggtelek-gallery2.jpg", url: "https://images.pexels.com/photos/15938633/pexels-photo-15938633.jpeg" },
    { key: "journeys/hongrie-aggtelek-gallery3.jpg", url: "https://images.pexels.com/photos/19160536/pexels-photo-19160536.jpeg" },
    { key: "journeys/hongrie-aggtelek-day1.jpg", url: "https://images.pexels.com/photos/6870966/pexels-photo-6870966.jpeg" },
    { key: "journeys/hongrie-aggtelek-day2.jpg", url: "https://images.pexels.com/photos/13427457/pexels-photo-13427457.jpeg" },

    // --- Irlande : les falaises de Moher et le comté de Clare (standard) ---
    { key: "tours/irlande-falaises-moher-clare.jpg", url: "https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg" },
    { key: "trips/irlande-moher-gallery-1.jpg", url: "https://images.pexels.com/photos/38110027/pexels-photo-38110027.jpeg" },
    { key: "trips/irlande-moher-gallery-2.jpg", url: "https://images.pexels.com/photos/13309293/pexels-photo-13309293.jpeg" },
    { key: "trips/irlande-moher-gallery-3.jpg", url: "https://images.pexels.com/photos/34244282/pexels-photo-34244282.jpeg" },
    { key: "trips/irlande-moher-gallery-4.jpg", url: "https://images.pexels.com/photos/13416240/pexels-photo-13416240.jpeg" },
    { key: "trips/irlande-moher-gallery-5.jpg", url: "https://images.pexels.com/photos/36009183/pexels-photo-36009183.jpeg" },
    { key: "trips/irlande-moher-gallery-6.jpg", url: "https://images.pexels.com/photos/28126975/pexels-photo-28126975.jpeg" },
    { key: "trips/irlande-moher-hotel-1.jpg", url: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg" },
    { key: "trips/irlande-moher-hotel-2.jpg", url: "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg" },

    // --- Irlande : l'anneau du Kerry et les îles d'Aran (journey) ---
    { key: "journeys/irlande-kerry-aran-hero.jpg", url: "https://images.pexels.com/photos/38545195/pexels-photo-38545195.jpeg" },
    { key: "journeys/irlande-kerry-gallery1.jpg", url: "https://images.pexels.com/photos/37344425/pexels-photo-37344425.jpeg" },
    { key: "journeys/irlande-kerry-gallery2.jpg", url: "https://images.pexels.com/photos/38176211/pexels-photo-38176211.jpeg" },
    { key: "journeys/irlande-kerry-gallery3.jpg", url: "https://images.pexels.com/photos/38612696/pexels-photo-38612696.jpeg" },
    { key: "journeys/irlande-kerry-day1.jpg", url: "https://images.pexels.com/photos/38289876/pexels-photo-38289876.jpeg" },
    { key: "journeys/irlande-kerry-day2.jpg", url: "https://images.pexels.com/photos/37566315/pexels-photo-37566315.jpeg" },
    { key: "journeys/irlande-aran-gallery1.jpg", url: "https://images.pexels.com/photos/33846142/pexels-photo-33846142.jpeg" },
    { key: "journeys/irlande-aran-gallery2.jpg", url: "https://images.pexels.com/photos/33880807/pexels-photo-33880807.jpeg" },
    { key: "journeys/irlande-aran-gallery3.jpg", url: "https://images.pexels.com/photos/33912099/pexels-photo-33912099.jpeg" },
    { key: "journeys/irlande-aran-day1.jpg", url: "https://images.pexels.com/photos/8568147/pexels-photo-8568147.jpeg" },
    { key: "journeys/irlande-aran-day2.jpg", url: "https://images.pexels.com/photos/33865643/pexels-photo-33865643.jpeg" },

    // --- Pologne : Cracovie et Zakopane, les Tatras (standard) ---
    { key: "tours/pologne-cracovie-zakopane-tatras.jpg", url: "https://images.pexels.com/photos/37459506/pexels-photo-37459506.jpeg" },
    { key: "trips/pologne-zakopane-gallery-1.jpg", url: "https://images.pexels.com/photos/6023585/pexels-photo-6023585.jpeg" },
    { key: "trips/pologne-zakopane-gallery-2.jpg", url: "https://images.pexels.com/photos/33676501/pexels-photo-33676501.jpeg" },
    { key: "trips/pologne-zakopane-gallery-3.jpg", url: "https://images.pexels.com/photos/37635220/pexels-photo-37635220.jpeg" },
    { key: "trips/pologne-zakopane-gallery-4.jpg", url: "https://images.pexels.com/photos/11029910/pexels-photo-11029910.jpeg" },
    { key: "trips/pologne-zakopane-gallery-5.jpg", url: "https://images.pexels.com/photos/29803520/pexels-photo-29803520.jpeg" },
    { key: "trips/pologne-zakopane-gallery-6.jpg", url: "https://images.pexels.com/photos/7459628/pexels-photo-7459628.jpeg" },
    { key: "trips/pologne-zakopane-hotel-1.jpg", url: "https://images.pexels.com/photos/6394617/pexels-photo-6394617.jpeg" },
    { key: "trips/pologne-zakopane-hotel-2.jpg", url: "https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg" },

    // --- Pologne : Gdansk et la forêt de Bialowieza (journey) ---
    { key: "journeys/pologne-gdansk-bialowieza-hero.jpg", url: "https://images.pexels.com/photos/20836244/pexels-photo-20836244.jpeg" },
    { key: "journeys/pologne-gdansk-gallery1.jpg", url: "https://images.pexels.com/photos/33256755/pexels-photo-33256755.jpeg" },
    { key: "journeys/pologne-gdansk-gallery2.jpg", url: "https://images.pexels.com/photos/2130807/pexels-photo-2130807.jpeg" },
    { key: "journeys/pologne-gdansk-gallery3.jpg", url: "https://images.pexels.com/photos/14018882/pexels-photo-14018882.jpeg" },
    { key: "journeys/pologne-gdansk-day1.jpg", url: "https://images.pexels.com/photos/8003036/pexels-photo-8003036.jpeg" },
    { key: "journeys/pologne-gdansk-day2.jpg", url: "https://images.pexels.com/photos/20728512/pexels-photo-20728512.jpeg" },
    { key: "journeys/pologne-bialowieza-gallery1.jpg", url: "https://images.pexels.com/photos/20753796/pexels-photo-20753796.jpeg" },
    { key: "journeys/pologne-bialowieza-gallery2.jpg", url: "https://images.pexels.com/photos/15154993/pexels-photo-15154993.jpeg" },
    { key: "journeys/pologne-bialowieza-gallery3.jpg", url: "https://images.pexels.com/photos/12554496/pexels-photo-12554496.jpeg" },
    { key: "journeys/pologne-bialowieza-day1.jpg", url: "https://images.pexels.com/photos/20753795/pexels-photo-20753795.jpeg" },
    { key: "journeys/pologne-bialowieza-day2.jpg", url: "https://images.pexels.com/photos/13069594/pexels-photo-13069594.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/europe-6.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
