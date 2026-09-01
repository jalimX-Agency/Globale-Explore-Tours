export {};

// Europe batch 4 (Norvège, Turquie, Autriche). Sources and uploads every image referenced by
// scripts/seed-trips-europe-4.ts. Run this first; the seed script refuses to write anything
// if a referenced image isn't already live.
//   npx tsx scripts/upload-images-europe-4.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Norvège : Tromsø et les aurores boréales (standard) ---
    { key: "tours/norvege-tromso-aurores.jpg", url: "https://images.pexels.com/photos/37422493/pexels-photo-37422493.jpeg" },
    { key: "trips/norvege-tromso-gallery-1.jpg", url: "https://images.pexels.com/photos/35765198/pexels-photo-35765198.jpeg" },
    { key: "trips/norvege-tromso-gallery-2.jpg", url: "https://images.pexels.com/photos/20743085/pexels-photo-20743085.jpeg" },
    { key: "trips/norvege-tromso-gallery-3.jpg", url: "https://images.pexels.com/photos/37433315/pexels-photo-37433315.jpeg" },
    { key: "trips/norvege-tromso-gallery-4.jpg", url: "https://images.pexels.com/photos/37433320/pexels-photo-37433320.jpeg" },
    { key: "trips/norvege-tromso-gallery-5.jpg", url: "https://images.pexels.com/photos/15688616/pexels-photo-15688616.jpeg" },
    { key: "trips/norvege-tromso-gallery-6.jpg", url: "https://images.pexels.com/photos/37422508/pexels-photo-37422508.jpeg" },
    { key: "trips/norvege-tromso-hotel-1.jpg", url: "https://images.pexels.com/photos/31036779/pexels-photo-31036779.jpeg" },
    { key: "trips/norvege-tromso-hotel-2.jpg", url: "https://images.pexels.com/photos/14644608/pexels-photo-14644608.jpeg" },

    // --- Norvège : le Svalbard et le cap Nord (journey) ---
    { key: "journeys/norvege-svalbard-nordkapp-hero.jpg", url: "https://images.pexels.com/photos/39194145/pexels-photo-39194145.jpeg" },
    { key: "journeys/norvege-svalbard-gallery1.jpg", url: "https://images.pexels.com/photos/18716589/pexels-photo-18716589.jpeg" },
    { key: "journeys/norvege-svalbard-gallery2.jpg", url: "https://images.pexels.com/photos/39194145/pexels-photo-39194145.jpeg" },
    { key: "journeys/norvege-svalbard-gallery3.jpg", url: "https://images.pexels.com/photos/18716589/pexels-photo-18716589.jpeg" },
    { key: "journeys/norvege-svalbard-day1.jpg", url: "https://images.pexels.com/photos/39194145/pexels-photo-39194145.jpeg" },
    { key: "journeys/norvege-svalbard-day2.jpg", url: "https://images.pexels.com/photos/18716589/pexels-photo-18716589.jpeg" },
    { key: "journeys/norvege-nordkapp-gallery1.jpg", url: "https://images.pexels.com/photos/13176980/pexels-photo-13176980.jpeg" },
    { key: "journeys/norvege-nordkapp-gallery2.jpg", url: "https://images.pexels.com/photos/31664541/pexels-photo-31664541.jpeg" },
    { key: "journeys/norvege-nordkapp-gallery3.jpg", url: "https://images.pexels.com/photos/37968340/pexels-photo-37968340.jpeg" },
    { key: "journeys/norvege-nordkapp-day1.jpg", url: "https://images.pexels.com/photos/18178868/pexels-photo-18178868.jpeg" },
    { key: "journeys/norvege-nordkapp-day2.jpg", url: "https://images.pexels.com/photos/28171565/pexels-photo-28171565.jpeg" },

    // --- Turquie : Antalya, la côte turquoise (standard) ---
    { key: "tours/turquie-antalya-cote-turquoise.jpg", url: "https://images.pexels.com/photos/922509/pexels-photo-922509.jpeg" },
    { key: "trips/turquie-antalya-gallery-1.jpg", url: "https://images.pexels.com/photos/6979387/pexels-photo-6979387.jpeg" },
    { key: "trips/turquie-antalya-gallery-2.jpg", url: "https://images.pexels.com/photos/21041377/pexels-photo-21041377.jpeg" },
    { key: "trips/turquie-antalya-gallery-3.jpg", url: "https://images.pexels.com/photos/38721770/pexels-photo-38721770.jpeg" },
    { key: "trips/turquie-antalya-gallery-4.jpg", url: "https://images.pexels.com/photos/31717526/pexels-photo-31717526.jpeg" },
    { key: "trips/turquie-antalya-gallery-5.jpg", url: "https://images.pexels.com/photos/17836951/pexels-photo-17836951.jpeg" },
    { key: "trips/turquie-antalya-gallery-6.jpg", url: "https://images.pexels.com/photos/24394868/pexels-photo-24394868.jpeg" },
    { key: "trips/turquie-antalya-hotel-1.jpg", url: "https://images.pexels.com/photos/922509/pexels-photo-922509.jpeg" },
    { key: "trips/turquie-antalya-hotel-2.jpg", url: "https://images.pexels.com/photos/6979387/pexels-photo-6979387.jpeg" },

    // --- Turquie : Pamukkale et Éphèse (journey) ---
    { key: "journeys/turquie-pamukkale-ephese-hero.jpg", url: "https://images.pexels.com/photos/32602795/pexels-photo-32602795.jpeg" },
    { key: "journeys/turquie-pamukkale-gallery1.jpg", url: "https://images.pexels.com/photos/26614130/pexels-photo-26614130.jpeg" },
    { key: "journeys/turquie-pamukkale-gallery2.jpg", url: "https://images.pexels.com/photos/5319469/pexels-photo-5319469.jpeg" },
    { key: "journeys/turquie-pamukkale-gallery3.jpg", url: "https://images.pexels.com/photos/6979814/pexels-photo-6979814.jpeg" },
    { key: "journeys/turquie-pamukkale-day1.jpg", url: "https://images.pexels.com/photos/37847653/pexels-photo-37847653.jpeg" },
    { key: "journeys/turquie-pamukkale-day2.jpg", url: "https://images.pexels.com/photos/31627867/pexels-photo-31627867.jpeg" },
    { key: "journeys/turquie-ephese-gallery1.jpg", url: "https://images.pexels.com/photos/15123091/pexels-photo-15123091.jpeg" },
    { key: "journeys/turquie-ephese-gallery2.jpg", url: "https://images.pexels.com/photos/14474360/pexels-photo-14474360.jpeg" },
    { key: "journeys/turquie-ephese-gallery3.jpg", url: "https://images.pexels.com/photos/37505478/pexels-photo-37505478.jpeg" },
    { key: "journeys/turquie-ephese-day1.jpg", url: "https://images.pexels.com/photos/38644887/pexels-photo-38644887.jpeg" },
    { key: "journeys/turquie-ephese-day2.jpg", url: "https://images.pexels.com/photos/39279257/pexels-photo-39279257.jpeg" },

    // --- Autriche : Innsbruck et le Tyrol (standard) ---
    { key: "tours/autriche-innsbruck-tyrol.jpg", url: "https://images.pexels.com/photos/20807992/pexels-photo-20807992.jpeg" },
    { key: "trips/autriche-innsbruck-gallery-1.jpg", url: "https://images.pexels.com/photos/34408230/pexels-photo-34408230.jpeg" },
    { key: "trips/autriche-innsbruck-gallery-2.jpg", url: "https://images.pexels.com/photos/35115405/pexels-photo-35115405.jpeg" },
    { key: "trips/autriche-innsbruck-gallery-3.jpg", url: "https://images.pexels.com/photos/15814562/pexels-photo-15814562.jpeg" },
    { key: "trips/autriche-innsbruck-gallery-4.jpg", url: "https://images.pexels.com/photos/36597107/pexels-photo-36597107.jpeg" },
    { key: "trips/autriche-innsbruck-gallery-5.jpg", url: "https://images.pexels.com/photos/33843014/pexels-photo-33843014.jpeg" },
    { key: "trips/autriche-innsbruck-gallery-6.jpg", url: "https://images.pexels.com/photos/24972051/pexels-photo-24972051.jpeg" },
    { key: "trips/autriche-innsbruck-hotel-1.jpg", url: "https://images.pexels.com/photos/29792182/pexels-photo-29792182.jpeg" },
    { key: "trips/autriche-innsbruck-hotel-2.jpg", url: "https://images.pexels.com/photos/20807992/pexels-photo-20807992.jpeg" },

    // --- Autriche : Graz et la vallée de la Wachau (journey) ---
    { key: "journeys/autriche-graz-wachau-hero.jpg", url: "https://images.pexels.com/photos/33562263/pexels-photo-33562263.jpeg" },
    { key: "journeys/autriche-graz-gallery1.jpg", url: "https://images.pexels.com/photos/31899457/pexels-photo-31899457.jpeg" },
    { key: "journeys/autriche-graz-gallery2.jpg", url: "https://images.pexels.com/photos/30345054/pexels-photo-30345054.jpeg" },
    { key: "journeys/autriche-graz-gallery3.jpg", url: "https://images.pexels.com/photos/36092874/pexels-photo-36092874.jpeg" },
    { key: "journeys/autriche-graz-day1.jpg", url: "https://images.pexels.com/photos/37295712/pexels-photo-37295712.jpeg" },
    { key: "journeys/autriche-graz-day2.jpg", url: "https://images.pexels.com/photos/36988147/pexels-photo-36988147.jpeg" },
    { key: "journeys/autriche-wachau-gallery1.jpg", url: "https://images.pexels.com/photos/32674846/pexels-photo-32674846.jpeg" },
    { key: "journeys/autriche-wachau-gallery2.jpg", url: "https://images.pexels.com/photos/34513551/pexels-photo-34513551.jpeg" },
    { key: "journeys/autriche-wachau-gallery3.jpg", url: "https://images.pexels.com/photos/37110106/pexels-photo-37110106.jpeg" },
    { key: "journeys/autriche-wachau-day1.jpg", url: "https://images.pexels.com/photos/34513559/pexels-photo-34513559.jpeg" },
    { key: "journeys/autriche-wachau-day2.jpg", url: "https://images.pexels.com/photos/10359562/pexels-photo-10359562.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/europe-4.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
