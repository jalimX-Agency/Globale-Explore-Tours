export {};

// Caraïbes batch 1 (full region) — Cuba, Bahamas, Jamaïque, République dominicaine,
// Sainte-Lucie, Barbade, Porto Rico, Antigua-et-Barbuda, Grenade, Trinité-et-Tobago, Aruba,
// Dominique. Sources and uploads every image referenced by scripts/seed-trips-caraibes-1.ts.
// Run this first; the seed script refuses to write anything if a referenced image isn't
// already live.
//   npx tsx scripts/upload-images-caraibes-1.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Cuba : Trinidad, la ville coloniale (standard) ---
    { key: "tours/cuba-trinidad-coloniale.jpg", url: "https://images.pexels.com/photos/22848148/pexels-photo-22848148.jpeg" },
    { key: "trips/cuba-trinidad-gallery-1.jpg", url: "https://images.pexels.com/photos/17377196/pexels-photo-17377196.jpeg" },
    { key: "trips/cuba-trinidad-gallery-2.jpg", url: "https://images.pexels.com/photos/17377194/pexels-photo-17377194.jpeg" },
    { key: "trips/cuba-trinidad-gallery-3.jpg", url: "https://images.pexels.com/photos/16717009/pexels-photo-16717009.jpeg" },
    { key: "trips/cuba-trinidad-gallery-4.jpg", url: "https://images.pexels.com/photos/16897801/pexels-photo-16897801.jpeg" },
    { key: "trips/cuba-trinidad-gallery-5.jpg", url: "https://images.pexels.com/photos/17377191/pexels-photo-17377191.jpeg" },
    { key: "trips/cuba-trinidad-gallery-6.jpg", url: "https://images.pexels.com/photos/19760354/pexels-photo-19760354.jpeg" },
    { key: "trips/cuba-trinidad-hotel-1.jpg", url: "https://images.pexels.com/photos/16716995/pexels-photo-16716995.jpeg" },
    { key: "trips/cuba-trinidad-hotel-2.jpg", url: "https://images.pexels.com/photos/4226148/pexels-photo-4226148.jpeg" },

    // --- Cuba : Santiago de Cuba et Baracoa (journey) ---
    { key: "journeys/cuba-santiago-baracoa-hero.jpg", url: "https://images.pexels.com/photos/11534768/pexels-photo-11534768.jpeg" },
    { key: "journeys/cuba-santiago-gallery1.jpg", url: "https://images.pexels.com/photos/19330813/pexels-photo-19330813.jpeg" },
    { key: "journeys/cuba-santiago-gallery2.jpg", url: "https://images.pexels.com/photos/17377222/pexels-photo-17377222.jpeg" },
    { key: "journeys/cuba-santiago-gallery3.jpg", url: "https://images.pexels.com/photos/37224649/pexels-photo-37224649.jpeg" },
    { key: "journeys/cuba-santiago-day1.jpg", url: "https://images.pexels.com/photos/11534768/pexels-photo-11534768.jpeg" },
    { key: "journeys/cuba-santiago-day2.jpg", url: "https://images.pexels.com/photos/19330813/pexels-photo-19330813.jpeg" },
    { key: "journeys/cuba-baracoa-gallery1.jpg", url: "https://images.pexels.com/photos/35400517/pexels-photo-35400517.jpeg" },
    { key: "journeys/cuba-baracoa-gallery2.jpg", url: "https://images.pexels.com/photos/16103101/pexels-photo-16103101.jpeg" },
    { key: "journeys/cuba-baracoa-gallery3.jpg", url: "https://images.pexels.com/photos/37224649/pexels-photo-37224649.jpeg" },
    { key: "journeys/cuba-baracoa-day1.jpg", url: "https://images.pexels.com/photos/35400517/pexels-photo-35400517.jpeg" },
    { key: "journeys/cuba-baracoa-day2.jpg", url: "https://images.pexels.com/photos/16103101/pexels-photo-16103101.jpeg" },

    // --- Bahamas : Harbour Island, la plage rose (standard) ---
    { key: "tours/bahamas-harbour-island.jpg", url: "https://images.pexels.com/photos/35864358/pexels-photo-35864358.jpeg" },
    { key: "trips/bahamas-harbour-gallery-1.jpg", url: "https://images.pexels.com/photos/2598040/pexels-photo-2598040.jpeg" },
    { key: "trips/bahamas-harbour-gallery-2.jpg", url: "https://images.pexels.com/photos/3226884/pexels-photo-3226884.jpeg" },
    { key: "trips/bahamas-harbour-gallery-3.jpg", url: "https://images.pexels.com/photos/9400834/pexels-photo-9400834.jpeg" },
    { key: "trips/bahamas-harbour-gallery-4.jpg", url: "https://images.pexels.com/photos/1287459/pexels-photo-1287459.jpeg" },
    { key: "trips/bahamas-harbour-gallery-5.jpg", url: "https://images.pexels.com/photos/4768461/pexels-photo-4768461.jpeg" },
    { key: "trips/bahamas-harbour-gallery-6.jpg", url: "https://images.pexels.com/photos/11952441/pexels-photo-11952441.jpeg" },
    { key: "trips/bahamas-harbour-hotel-1.jpg", url: "https://images.pexels.com/photos/35864358/pexels-photo-35864358.jpeg" },
    { key: "trips/bahamas-harbour-hotel-2.jpg", url: "https://images.pexels.com/photos/2598040/pexels-photo-2598040.jpeg" },

    // --- Bahamas : Andros et Bimini (journey) ---
    { key: "journeys/bahamas-andros-bimini-hero.jpg", url: "https://images.pexels.com/photos/8332426/pexels-photo-8332426.jpeg" },
    { key: "journeys/bahamas-andros-gallery1.jpg", url: "https://images.pexels.com/photos/9169066/pexels-photo-9169066.jpeg" },
    { key: "journeys/bahamas-andros-gallery2.jpg", url: "https://images.pexels.com/photos/39274235/pexels-photo-39274235.jpeg" },
    { key: "journeys/bahamas-andros-gallery3.jpg", url: "https://images.pexels.com/photos/8332426/pexels-photo-8332426.jpeg" },
    { key: "journeys/bahamas-andros-day1.jpg", url: "https://images.pexels.com/photos/9169066/pexels-photo-9169066.jpeg" },
    { key: "journeys/bahamas-andros-day2.jpg", url: "https://images.pexels.com/photos/39274235/pexels-photo-39274235.jpeg" },
    { key: "journeys/bahamas-bimini-gallery1.jpg", url: "https://images.pexels.com/photos/4784503/pexels-photo-4784503.jpeg" },
    { key: "journeys/bahamas-bimini-gallery2.jpg", url: "https://images.pexels.com/photos/5008816/pexels-photo-5008816.jpeg" },
    { key: "journeys/bahamas-bimini-gallery3.jpg", url: "https://images.pexels.com/photos/9406888/pexels-photo-9406888.jpeg" },
    { key: "journeys/bahamas-bimini-day1.jpg", url: "https://images.pexels.com/photos/4321156/pexels-photo-4321156.jpeg" },
    { key: "journeys/bahamas-bimini-day2.jpg", url: "https://images.pexels.com/photos/5008831/pexels-photo-5008831.jpeg" },

    // --- Jamaïque : Negril (standard) ---
    { key: "tours/jamaique-negril.jpg", url: "https://images.pexels.com/photos/1869329/pexels-photo-1869329.jpeg" },
    { key: "trips/jamaique-negril-gallery-1.jpg", url: "https://images.pexels.com/photos/19565413/pexels-photo-19565413.jpeg" },
    { key: "trips/jamaique-negril-gallery-2.jpg", url: "https://images.pexels.com/photos/10586592/pexels-photo-10586592.jpeg" },
    { key: "trips/jamaique-negril-gallery-3.jpg", url: "https://images.pexels.com/photos/11479687/pexels-photo-11479687.jpeg" },
    { key: "trips/jamaique-negril-gallery-4.jpg", url: "https://images.pexels.com/photos/10586591/pexels-photo-10586591.jpeg" },
    { key: "trips/jamaique-negril-gallery-5.jpg", url: "https://images.pexels.com/photos/16314764/pexels-photo-16314764.jpeg" },
    { key: "trips/jamaique-negril-gallery-6.jpg", url: "https://images.pexels.com/photos/1869329/pexels-photo-1869329.jpeg" },
    { key: "trips/jamaique-negril-hotel-1.jpg", url: "https://images.pexels.com/photos/19565413/pexels-photo-19565413.jpeg" },
    { key: "trips/jamaique-negril-hotel-2.jpg", url: "https://images.pexels.com/photos/10586592/pexels-photo-10586592.jpeg" },

    // --- Jamaïque : Port Antonio et le Blue Lagoon (journey) ---
    { key: "journeys/jamaique-portantonio-hero.jpg", url: "https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg" },
    { key: "journeys/jamaique-bluelagoon-gallery1.jpg", url: "https://images.pexels.com/photos/9158432/pexels-photo-9158432.jpeg" },
    { key: "journeys/jamaique-bluelagoon-gallery2.jpg", url: "https://images.pexels.com/photos/9158430/pexels-photo-9158430.jpeg" },
    { key: "journeys/jamaique-bluelagoon-gallery3.jpg", url: "https://images.pexels.com/photos/7864822/pexels-photo-7864822.jpeg" },
    { key: "journeys/jamaique-bluelagoon-day1.jpg", url: "https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg" },
    { key: "journeys/jamaique-bluelagoon-day2.jpg", url: "https://images.pexels.com/photos/7864820/pexels-photo-7864820.jpeg" },
    { key: "journeys/jamaique-riorafting-gallery1.jpg", url: "https://images.pexels.com/photos/11820457/pexels-photo-11820457.jpeg" },
    { key: "journeys/jamaique-riorafting-gallery2.jpg", url: "https://images.pexels.com/photos/4627338/pexels-photo-4627338.jpeg" },
    { key: "journeys/jamaique-riorafting-gallery3.jpg", url: "https://images.pexels.com/photos/7864822/pexels-photo-7864822.jpeg" },
    { key: "journeys/jamaique-riorafting-day1.jpg", url: "https://images.pexels.com/photos/11820457/pexels-photo-11820457.jpeg" },
    { key: "journeys/jamaique-riorafting-day2.jpg", url: "https://images.pexels.com/photos/4627338/pexels-photo-4627338.jpeg" },

    // --- République dominicaine : Samaná (standard) ---
    { key: "tours/republique-dominicaine-samana.jpg", url: "https://images.pexels.com/photos/13832617/pexels-photo-13832617.jpeg" },
    { key: "trips/rd-samana-gallery-1.jpg", url: "https://images.pexels.com/photos/30160756/pexels-photo-30160756.jpeg" },
    { key: "trips/rd-samana-gallery-2.jpg", url: "https://images.pexels.com/photos/15679010/pexels-photo-15679010.jpeg" },
    { key: "trips/rd-samana-gallery-3.jpg", url: "https://images.pexels.com/photos/13820932/pexels-photo-13820932.jpeg" },
    { key: "trips/rd-samana-gallery-4.jpg", url: "https://images.pexels.com/photos/33392582/pexels-photo-33392582.jpeg" },
    { key: "trips/rd-samana-gallery-5.jpg", url: "https://images.pexels.com/photos/13832617/pexels-photo-13832617.jpeg" },
    { key: "trips/rd-samana-gallery-6.jpg", url: "https://images.pexels.com/photos/30160756/pexels-photo-30160756.jpeg" },
    { key: "trips/rd-samana-hotel-1.jpg", url: "https://images.pexels.com/photos/30160756/pexels-photo-30160756.jpeg" },
    { key: "trips/rd-samana-hotel-2.jpg", url: "https://images.pexels.com/photos/13832617/pexels-photo-13832617.jpeg" },

    // --- République dominicaine : Jarabacoa et le Pico Duarte (journey) ---
    { key: "journeys/rd-jarabacoa-picoduarte-hero.jpg", url: "https://images.pexels.com/photos/38413304/pexels-photo-38413304.jpeg" },
    { key: "journeys/rd-jarabacoa-gallery1.jpg", url: "https://images.pexels.com/photos/36999030/pexels-photo-36999030.jpeg" },
    { key: "journeys/rd-jarabacoa-gallery2.jpg", url: "https://images.pexels.com/photos/38413304/pexels-photo-38413304.jpeg" },
    { key: "journeys/rd-jarabacoa-gallery3.jpg", url: "https://images.pexels.com/photos/39143712/pexels-photo-39143712.jpeg" },
    { key: "journeys/rd-jarabacoa-day1.jpg", url: "https://images.pexels.com/photos/38413304/pexels-photo-38413304.jpeg" },
    { key: "journeys/rd-jarabacoa-day2.jpg", url: "https://images.pexels.com/photos/36999030/pexels-photo-36999030.jpeg" },
    { key: "journeys/rd-picoduarte-gallery1.jpg", url: "https://images.pexels.com/photos/39143712/pexels-photo-39143712.jpeg" },
    { key: "journeys/rd-picoduarte-gallery2.jpg", url: "https://images.pexels.com/photos/38413304/pexels-photo-38413304.jpeg" },
    { key: "journeys/rd-picoduarte-gallery3.jpg", url: "https://images.pexels.com/photos/36999030/pexels-photo-36999030.jpeg" },
    { key: "journeys/rd-picoduarte-day1.jpg", url: "https://images.pexels.com/photos/39143712/pexels-photo-39143712.jpeg" },
    { key: "journeys/rd-picoduarte-day2.jpg", url: "https://images.pexels.com/photos/38413304/pexels-photo-38413304.jpeg" },

    // --- Sainte-Lucie : Marigot Bay et Rodney Bay (standard) ---
    { key: "tours/sainte-lucie-marigot-rodney.jpg", url: "https://images.pexels.com/photos/5685184/pexels-photo-5685184.jpeg" },
    { key: "trips/stlucie-marigot-gallery-1.jpg", url: "https://images.pexels.com/photos/13835631/pexels-photo-13835631.jpeg" },
    { key: "trips/stlucie-marigot-gallery-2.jpg", url: "https://images.pexels.com/photos/29311388/pexels-photo-29311388.jpeg" },
    { key: "trips/stlucie-marigot-gallery-3.jpg", url: "https://images.pexels.com/photos/36137526/pexels-photo-36137526.jpeg" },
    { key: "trips/stlucie-marigot-gallery-4.jpg", url: "https://images.pexels.com/photos/36095870/pexels-photo-36095870.jpeg" },
    { key: "trips/stlucie-marigot-gallery-5.jpg", url: "https://images.pexels.com/photos/2414296/pexels-photo-2414296.jpeg" },
    { key: "trips/stlucie-marigot-gallery-6.jpg", url: "https://images.pexels.com/photos/13369294/pexels-photo-13369294.jpeg" },
    { key: "trips/stlucie-marigot-hotel-1.jpg", url: "https://images.pexels.com/photos/5685184/pexels-photo-5685184.jpeg" },
    { key: "trips/stlucie-marigot-hotel-2.jpg", url: "https://images.pexels.com/photos/13835631/pexels-photo-13835631.jpeg" },

    // --- Sainte-Lucie : Anse Chastanet et la forêt tropicale (journey) ---
    { key: "journeys/stlucie-ansechastanet-foret-hero.jpg", url: "https://images.pexels.com/photos/7001750/pexels-photo-7001750.jpeg" },
    { key: "journeys/stlucie-reef-gallery1.jpg", url: "https://images.pexels.com/photos/10226157/pexels-photo-10226157.jpeg" },
    { key: "journeys/stlucie-reef-gallery2.jpg", url: "https://images.pexels.com/photos/4836789/pexels-photo-4836789.jpeg" },
    { key: "journeys/stlucie-reef-gallery3.jpg", url: "https://images.pexels.com/photos/7970796/pexels-photo-7970796.jpeg" },
    { key: "journeys/stlucie-reef-day1.jpg", url: "https://images.pexels.com/photos/7001750/pexels-photo-7001750.jpeg" },
    { key: "journeys/stlucie-reef-day2.jpg", url: "https://images.pexels.com/photos/10226157/pexels-photo-10226157.jpeg" },
    { key: "journeys/stlucie-foret-gallery1.jpg", url: "https://images.pexels.com/photos/4938780/pexels-photo-4938780.jpeg" },
    { key: "journeys/stlucie-foret-gallery2.jpg", url: "https://images.pexels.com/photos/28518788/pexels-photo-28518788.jpeg" },
    { key: "journeys/stlucie-foret-gallery3.jpg", url: "https://images.pexels.com/photos/23696872/pexels-photo-23696872.jpeg" },
    { key: "journeys/stlucie-foret-day1.jpg", url: "https://images.pexels.com/photos/9223080/pexels-photo-9223080.jpeg" },
    { key: "journeys/stlucie-foret-day2.jpg", url: "https://images.pexels.com/photos/4938780/pexels-photo-4938780.jpeg" },

    // --- Barbade : la côte ouest et la route du rhum (standard) ---
    { key: "tours/barbade-cote-ouest-rhum.jpg", url: "https://images.pexels.com/photos/14250687/pexels-photo-14250687.jpeg" },
    { key: "trips/barbade-ouest-gallery-1.jpg", url: "https://images.pexels.com/photos/35010454/pexels-photo-35010454.jpeg" },
    { key: "trips/barbade-ouest-gallery-2.jpg", url: "https://images.pexels.com/photos/35010455/pexels-photo-35010455.jpeg" },
    { key: "trips/barbade-ouest-gallery-3.jpg", url: "https://images.pexels.com/photos/30086886/pexels-photo-30086886.jpeg" },
    { key: "trips/barbade-ouest-gallery-4.jpg", url: "https://images.pexels.com/photos/2419619/pexels-photo-2419619.jpeg" },
    { key: "trips/barbade-ouest-gallery-5.jpg", url: "https://images.pexels.com/photos/14250687/pexels-photo-14250687.jpeg" },
    { key: "trips/barbade-ouest-gallery-6.jpg", url: "https://images.pexels.com/photos/35010454/pexels-photo-35010454.jpeg" },
    { key: "trips/barbade-ouest-hotel-1.jpg", url: "https://images.pexels.com/photos/14250687/pexels-photo-14250687.jpeg" },
    { key: "trips/barbade-ouest-hotel-2.jpg", url: "https://images.pexels.com/photos/35010455/pexels-photo-35010455.jpeg" },

    // --- Barbade : la côte est sauvage et Oistins (journey) ---
    { key: "journeys/barbade-est-oistins-hero.jpg", url: "https://images.pexels.com/photos/30086886/pexels-photo-30086886.jpeg" },
    { key: "journeys/barbade-est-gallery1.jpg", url: "https://images.pexels.com/photos/35010454/pexels-photo-35010454.jpeg" },
    { key: "journeys/barbade-est-gallery2.jpg", url: "https://images.pexels.com/photos/35010455/pexels-photo-35010455.jpeg" },
    { key: "journeys/barbade-est-gallery3.jpg", url: "https://images.pexels.com/photos/30086886/pexels-photo-30086886.jpeg" },
    { key: "journeys/barbade-est-day1.jpg", url: "https://images.pexels.com/photos/35010454/pexels-photo-35010454.jpeg" },
    { key: "journeys/barbade-est-day2.jpg", url: "https://images.pexels.com/photos/30086886/pexels-photo-30086886.jpeg" },
    { key: "journeys/barbade-oistins-gallery1.jpg", url: "https://images.pexels.com/photos/37703370/pexels-photo-37703370.jpeg" },
    { key: "journeys/barbade-oistins-gallery2.jpg", url: "https://images.pexels.com/photos/14250687/pexels-photo-14250687.jpeg" },
    { key: "journeys/barbade-oistins-gallery3.jpg", url: "https://images.pexels.com/photos/2419619/pexels-photo-2419619.jpeg" },
    { key: "journeys/barbade-oistins-day1.jpg", url: "https://images.pexels.com/photos/37703370/pexels-photo-37703370.jpeg" },
    { key: "journeys/barbade-oistins-day2.jpg", url: "https://images.pexels.com/photos/14250687/pexels-photo-14250687.jpeg" },

    // --- Porto Rico : El Yunque, la forêt tropicale (standard) ---
    { key: "tours/porto-rico-elyunque.jpg", url: "https://images.pexels.com/photos/784148/pexels-photo-784148.jpeg" },
    { key: "trips/pr-elyunque-gallery-1.jpg", url: "https://images.pexels.com/photos/31529632/pexels-photo-31529632.jpeg" },
    { key: "trips/pr-elyunque-gallery-2.jpg", url: "https://images.pexels.com/photos/19768831/pexels-photo-19768831.jpeg" },
    { key: "trips/pr-elyunque-gallery-3.jpg", url: "https://images.pexels.com/photos/20014663/pexels-photo-20014663.jpeg" },
    { key: "trips/pr-elyunque-gallery-4.jpg", url: "https://images.pexels.com/photos/20014665/pexels-photo-20014665.jpeg" },
    { key: "trips/pr-elyunque-gallery-5.jpg", url: "https://images.pexels.com/photos/784148/pexels-photo-784148.jpeg" },
    { key: "trips/pr-elyunque-gallery-6.jpg", url: "https://images.pexels.com/photos/31529632/pexels-photo-31529632.jpeg" },
    { key: "trips/pr-elyunque-hotel-1.jpg", url: "https://images.pexels.com/photos/20014663/pexels-photo-20014663.jpeg" },
    { key: "trips/pr-elyunque-hotel-2.jpg", url: "https://images.pexels.com/photos/20014665/pexels-photo-20014665.jpeg" },

    // --- Porto Rico : Culebra et Vieques (journey) ---
    { key: "journeys/pr-culebra-vieques-hero.jpg", url: "https://images.pexels.com/photos/20058486/pexels-photo-20058486.jpeg" },
    { key: "journeys/pr-culebra-gallery1.jpg", url: "https://images.pexels.com/photos/20058472/pexels-photo-20058472.jpeg" },
    { key: "journeys/pr-culebra-gallery2.jpg", url: "https://images.pexels.com/photos/11493264/pexels-photo-11493264.png" },
    { key: "journeys/pr-culebra-gallery3.jpg", url: "https://images.pexels.com/photos/20058469/pexels-photo-20058469.jpeg" },
    { key: "journeys/pr-culebra-day1.jpg", url: "https://images.pexels.com/photos/20058486/pexels-photo-20058486.jpeg" },
    { key: "journeys/pr-culebra-day2.jpg", url: "https://images.pexels.com/photos/20058472/pexels-photo-20058472.jpeg" },
    { key: "journeys/pr-vieques-gallery1.jpg", url: "https://images.pexels.com/photos/20058469/pexels-photo-20058469.jpeg" },
    { key: "journeys/pr-vieques-gallery2.jpg", url: "https://images.pexels.com/photos/11493264/pexels-photo-11493264.png" },
    { key: "journeys/pr-vieques-gallery3.jpg", url: "https://images.pexels.com/photos/20058486/pexels-photo-20058486.jpeg" },
    { key: "journeys/pr-vieques-day1.jpg", url: "https://images.pexels.com/photos/20058469/pexels-photo-20058469.jpeg" },
    { key: "journeys/pr-vieques-day2.jpg", url: "https://images.pexels.com/photos/11493264/pexels-photo-11493264.png" },

    // --- Antigua-et-Barbuda : les 365 plages (standard) ---
    { key: "tours/antigua-365-plages.jpg", url: "https://images.pexels.com/photos/27146413/pexels-photo-27146413.jpeg" },
    { key: "trips/antigua-plages-gallery-1.jpg", url: "https://images.pexels.com/photos/16893066/pexels-photo-16893066.jpeg" },
    { key: "trips/antigua-plages-gallery-2.jpg", url: "https://images.pexels.com/photos/18194830/pexels-photo-18194830.jpeg" },
    { key: "trips/antigua-plages-gallery-3.jpg", url: "https://images.pexels.com/photos/10657034/pexels-photo-10657034.jpeg" },
    { key: "trips/antigua-plages-gallery-4.jpg", url: "https://images.pexels.com/photos/5416513/pexels-photo-5416513.jpeg" },
    { key: "trips/antigua-plages-gallery-5.jpg", url: "https://images.pexels.com/photos/2444852/pexels-photo-2444852.jpeg" },
    { key: "trips/antigua-plages-gallery-6.jpg", url: "https://images.pexels.com/photos/27146413/pexels-photo-27146413.jpeg" },
    { key: "trips/antigua-plages-hotel-1.jpg", url: "https://images.pexels.com/photos/27146413/pexels-photo-27146413.jpeg" },
    { key: "trips/antigua-plages-hotel-2.jpg", url: "https://images.pexels.com/photos/18194830/pexels-photo-18194830.jpeg" },

    // --- Antigua-et-Barbuda : Betty's Hope et Devil's Bridge (journey) ---
    { key: "journeys/antigua-bettyshope-devilsbridge-hero.jpg", url: "https://images.pexels.com/photos/10657034/pexels-photo-10657034.jpeg" },
    { key: "journeys/antigua-bettyshope-gallery1.jpg", url: "https://images.pexels.com/photos/16893066/pexels-photo-16893066.jpeg" },
    { key: "journeys/antigua-bettyshope-gallery2.jpg", url: "https://images.pexels.com/photos/5416513/pexels-photo-5416513.jpeg" },
    { key: "journeys/antigua-bettyshope-gallery3.jpg", url: "https://images.pexels.com/photos/2444852/pexels-photo-2444852.jpeg" },
    { key: "journeys/antigua-bettyshope-day1.jpg", url: "https://images.pexels.com/photos/16893066/pexels-photo-16893066.jpeg" },
    { key: "journeys/antigua-bettyshope-day2.jpg", url: "https://images.pexels.com/photos/5416513/pexels-photo-5416513.jpeg" },
    { key: "journeys/antigua-devilsbridge-gallery1.jpg", url: "https://images.pexels.com/photos/10657034/pexels-photo-10657034.jpeg" },
    { key: "journeys/antigua-devilsbridge-gallery2.jpg", url: "https://images.pexels.com/photos/18194830/pexels-photo-18194830.jpeg" },
    { key: "journeys/antigua-devilsbridge-gallery3.jpg", url: "https://images.pexels.com/photos/27146413/pexels-photo-27146413.jpeg" },
    { key: "journeys/antigua-devilsbridge-day1.jpg", url: "https://images.pexels.com/photos/10657034/pexels-photo-10657034.jpeg" },
    { key: "journeys/antigua-devilsbridge-day2.jpg", url: "https://images.pexels.com/photos/18194830/pexels-photo-18194830.jpeg" },

    // --- Grenade : Grand Anse (standard) ---
    { key: "tours/grenade-grand-anse.jpg", url: "https://images.pexels.com/photos/1366528/pexels-photo-1366528.jpeg" },
    { key: "trips/grenade-grandanse-gallery-1.jpg", url: "https://images.pexels.com/photos/11846400/pexels-photo-11846400.jpeg" },
    { key: "trips/grenade-grandanse-gallery-2.jpg", url: "https://images.pexels.com/photos/11846401/pexels-photo-11846401.jpeg" },
    { key: "trips/grenade-grandanse-gallery-3.jpg", url: "https://images.pexels.com/photos/1366528/pexels-photo-1366528.jpeg" },
    { key: "trips/grenade-grandanse-gallery-4.jpg", url: "https://images.pexels.com/photos/11846400/pexels-photo-11846400.jpeg" },
    { key: "trips/grenade-grandanse-gallery-5.jpg", url: "https://images.pexels.com/photos/11846401/pexels-photo-11846401.jpeg" },
    { key: "trips/grenade-grandanse-gallery-6.jpg", url: "https://images.pexels.com/photos/1366528/pexels-photo-1366528.jpeg" },
    { key: "trips/grenade-grandanse-hotel-1.jpg", url: "https://images.pexels.com/photos/1366528/pexels-photo-1366528.jpeg" },
    { key: "trips/grenade-grandanse-hotel-2.jpg", url: "https://images.pexels.com/photos/11846400/pexels-photo-11846400.jpeg" },

    // --- Grenade : le parc de sculptures sous-marines et Carriacou (journey) ---
    { key: "journeys/grenade-sculptures-carriacou-hero.jpg", url: "https://images.pexels.com/photos/2499769/pexels-photo-2499769.jpeg" },
    { key: "journeys/grenade-sculptures-gallery1.jpg", url: "https://images.pexels.com/photos/31973396/pexels-photo-31973396.jpeg" },
    { key: "journeys/grenade-sculptures-gallery2.jpg", url: "https://images.pexels.com/photos/31973393/pexels-photo-31973393.jpeg" },
    { key: "journeys/grenade-sculptures-gallery3.jpg", url: "https://images.pexels.com/photos/35252463/pexels-photo-35252463.jpeg" },
    { key: "journeys/grenade-sculptures-day1.jpg", url: "https://images.pexels.com/photos/2499769/pexels-photo-2499769.jpeg" },
    { key: "journeys/grenade-sculptures-day2.jpg", url: "https://images.pexels.com/photos/31973396/pexels-photo-31973396.jpeg" },
    { key: "journeys/grenade-carriacou-gallery1.jpg", url: "https://images.pexels.com/photos/11846401/pexels-photo-11846401.jpeg" },
    { key: "journeys/grenade-carriacou-gallery2.jpg", url: "https://images.pexels.com/photos/1366528/pexels-photo-1366528.jpeg" },
    { key: "journeys/grenade-carriacou-gallery3.jpg", url: "https://images.pexels.com/photos/11846400/pexels-photo-11846400.jpeg" },
    { key: "journeys/grenade-carriacou-day1.jpg", url: "https://images.pexels.com/photos/11846401/pexels-photo-11846401.jpeg" },
    { key: "journeys/grenade-carriacou-day2.jpg", url: "https://images.pexels.com/photos/1366528/pexels-photo-1366528.jpeg" },

    // --- Trinité-et-Tobago : Caroni et Maracas Bay (standard) ---
    { key: "tours/trinite-caroni-maracas.jpg", url: "https://images.pexels.com/photos/16978873/pexels-photo-16978873.jpeg" },
    { key: "trips/trinite-caroni-gallery-1.jpg", url: "https://images.pexels.com/photos/29586027/pexels-photo-29586027.jpeg" },
    { key: "trips/trinite-caroni-gallery-2.jpg", url: "https://images.pexels.com/photos/20605448/pexels-photo-20605448.jpeg" },
    { key: "trips/trinite-caroni-gallery-3.jpg", url: "https://images.pexels.com/photos/15744748/pexels-photo-15744748.jpeg" },
    { key: "trips/trinite-caroni-gallery-4.jpg", url: "https://images.pexels.com/photos/18033727/pexels-photo-18033727.jpeg" },
    { key: "trips/trinite-caroni-gallery-5.jpg", url: "https://images.pexels.com/photos/16978873/pexels-photo-16978873.jpeg" },
    { key: "trips/trinite-caroni-gallery-6.jpg", url: "https://images.pexels.com/photos/29586027/pexels-photo-29586027.jpeg" },
    { key: "trips/trinite-caroni-hotel-1.jpg", url: "https://images.pexels.com/photos/20605448/pexels-photo-20605448.jpeg" },
    { key: "trips/trinite-caroni-hotel-2.jpg", url: "https://images.pexels.com/photos/15744748/pexels-photo-15744748.jpeg" },

    // --- Trinité-et-Tobago : Pigeon Point et les tortues (journey) ---
    { key: "journeys/trinite-pigeonpoint-tortues-hero.jpg", url: "https://images.pexels.com/photos/5376665/pexels-photo-5376665.jpeg" },
    { key: "journeys/trinite-pigeonpoint-gallery1.jpg", url: "https://images.pexels.com/photos/18363516/pexels-photo-18363516.jpeg" },
    { key: "journeys/trinite-pigeonpoint-gallery2.jpg", url: "https://images.pexels.com/photos/5376665/pexels-photo-5376665.jpeg" },
    { key: "journeys/trinite-pigeonpoint-gallery3.jpg", url: "https://images.pexels.com/photos/18363516/pexels-photo-18363516.jpeg" },
    { key: "journeys/trinite-pigeonpoint-day1.jpg", url: "https://images.pexels.com/photos/5376665/pexels-photo-5376665.jpeg" },
    { key: "journeys/trinite-pigeonpoint-day2.jpg", url: "https://images.pexels.com/photos/18363516/pexels-photo-18363516.jpeg" },
    { key: "journeys/trinite-tortues-gallery1.jpg", url: "https://images.pexels.com/photos/3661927/pexels-photo-3661927.jpeg" },
    { key: "journeys/trinite-tortues-gallery2.jpg", url: "https://images.pexels.com/photos/3661924/pexels-photo-3661924.jpeg" },
    { key: "journeys/trinite-tortues-gallery3.jpg", url: "https://images.pexels.com/photos/12184241/pexels-photo-12184241.jpeg" },
    { key: "journeys/trinite-tortues-day1.jpg", url: "https://images.pexels.com/photos/3661924/pexels-photo-3661924.jpeg" },
    { key: "journeys/trinite-tortues-day2.jpg", url: "https://images.pexels.com/photos/3661927/pexels-photo-3661927.jpeg" },

    // --- Aruba : Eagle Beach et le désert (standard) ---
    { key: "tours/aruba-eaglebeach-desert.jpg", url: "https://images.pexels.com/photos/32481935/pexels-photo-32481935.jpeg" },
    { key: "trips/aruba-eaglebeach-gallery-1.jpg", url: "https://images.pexels.com/photos/36895098/pexels-photo-36895098.jpeg" },
    { key: "trips/aruba-eaglebeach-gallery-2.jpg", url: "https://images.pexels.com/photos/36997649/pexels-photo-36997649.jpeg" },
    { key: "trips/aruba-eaglebeach-gallery-3.jpg", url: "https://images.pexels.com/photos/20441841/pexels-photo-20441841.jpeg" },
    { key: "trips/aruba-eaglebeach-gallery-4.jpg", url: "https://images.pexels.com/photos/32044503/pexels-photo-32044503.jpeg" },
    { key: "trips/aruba-eaglebeach-gallery-5.jpg", url: "https://images.pexels.com/photos/32481935/pexels-photo-32481935.jpeg" },
    { key: "trips/aruba-eaglebeach-gallery-6.jpg", url: "https://images.pexels.com/photos/36895098/pexels-photo-36895098.jpeg" },
    { key: "trips/aruba-eaglebeach-hotel-1.jpg", url: "https://images.pexels.com/photos/32481935/pexels-photo-32481935.jpeg" },
    { key: "trips/aruba-eaglebeach-hotel-2.jpg", url: "https://images.pexels.com/photos/20441841/pexels-photo-20441841.jpeg" },

    // --- Aruba : le windsurf et le cunucu (journey) ---
    { key: "journeys/aruba-windsurf-cunucu-hero.jpg", url: "https://images.pexels.com/photos/32044503/pexels-photo-32044503.jpeg" },
    { key: "journeys/aruba-windsurf-gallery1.jpg", url: "https://images.pexels.com/photos/32044503/pexels-photo-32044503.jpeg" },
    { key: "journeys/aruba-windsurf-gallery2.jpg", url: "https://images.pexels.com/photos/20441841/pexels-photo-20441841.jpeg" },
    { key: "journeys/aruba-windsurf-gallery3.jpg", url: "https://images.pexels.com/photos/36895098/pexels-photo-36895098.jpeg" },
    { key: "journeys/aruba-windsurf-day1.jpg", url: "https://images.pexels.com/photos/32044503/pexels-photo-32044503.jpeg" },
    { key: "journeys/aruba-windsurf-day2.jpg", url: "https://images.pexels.com/photos/20441841/pexels-photo-20441841.jpeg" },
    { key: "journeys/aruba-cunucu-gallery1.jpg", url: "https://images.pexels.com/photos/36997649/pexels-photo-36997649.jpeg" },
    { key: "journeys/aruba-cunucu-gallery2.jpg", url: "https://images.pexels.com/photos/32481935/pexels-photo-32481935.jpeg" },
    { key: "journeys/aruba-cunucu-gallery3.jpg", url: "https://images.pexels.com/photos/36895098/pexels-photo-36895098.jpeg" },
    { key: "journeys/aruba-cunucu-day1.jpg", url: "https://images.pexels.com/photos/36997649/pexels-photo-36997649.jpeg" },
    { key: "journeys/aruba-cunucu-day2.jpg", url: "https://images.pexels.com/photos/32481935/pexels-photo-32481935.jpeg" },

    // --- Dominique : Champagne Reef et Trafalgar Falls (standard) ---
    { key: "tours/dominique-champagnereef-trafalgar.jpg", url: "https://images.pexels.com/photos/39175584/pexels-photo-39175584.jpeg" },
    { key: "trips/dominique-champagne-gallery-1.jpg", url: "https://images.pexels.com/photos/38954091/pexels-photo-38954091.jpeg" },
    { key: "trips/dominique-champagne-gallery-2.jpg", url: "https://images.pexels.com/photos/14854317/pexels-photo-14854317.jpeg" },
    { key: "trips/dominique-champagne-gallery-3.jpg", url: "https://images.pexels.com/photos/31359625/pexels-photo-31359625.jpeg" },
    { key: "trips/dominique-champagne-gallery-4.jpg", url: "https://images.pexels.com/photos/12832511/pexels-photo-12832511.jpeg" },
    { key: "trips/dominique-champagne-gallery-5.jpg", url: "https://images.pexels.com/photos/39175584/pexels-photo-39175584.jpeg" },
    { key: "trips/dominique-champagne-gallery-6.jpg", url: "https://images.pexels.com/photos/38954091/pexels-photo-38954091.jpeg" },
    { key: "trips/dominique-champagne-hotel-1.jpg", url: "https://images.pexels.com/photos/38954091/pexels-photo-38954091.jpeg" },
    { key: "trips/dominique-champagne-hotel-2.jpg", url: "https://images.pexels.com/photos/14854317/pexels-photo-14854317.jpeg" },

    // --- Dominique : l'Emerald Pool et Titou Gorge (journey) ---
    { key: "journeys/dominique-emeraldpool-titougorge-hero.jpg", url: "https://images.pexels.com/photos/31359625/pexels-photo-31359625.jpeg" },
    { key: "journeys/dominique-emeraldpool-gallery1.jpg", url: "https://images.pexels.com/photos/39175584/pexels-photo-39175584.jpeg" },
    { key: "journeys/dominique-emeraldpool-gallery2.jpg", url: "https://images.pexels.com/photos/38954091/pexels-photo-38954091.jpeg" },
    { key: "journeys/dominique-emeraldpool-gallery3.jpg", url: "https://images.pexels.com/photos/14854317/pexels-photo-14854317.jpeg" },
    { key: "journeys/dominique-emeraldpool-day1.jpg", url: "https://images.pexels.com/photos/39175584/pexels-photo-39175584.jpeg" },
    { key: "journeys/dominique-emeraldpool-day2.jpg", url: "https://images.pexels.com/photos/38954091/pexels-photo-38954091.jpeg" },
    { key: "journeys/dominique-titougorge-gallery1.jpg", url: "https://images.pexels.com/photos/35773542/pexels-photo-35773542.jpeg" },
    { key: "journeys/dominique-titougorge-gallery2.jpg", url: "https://images.pexels.com/photos/12367477/pexels-photo-12367477.jpeg" },
    { key: "journeys/dominique-titougorge-gallery3.jpg", url: "https://images.pexels.com/photos/33984555/pexels-photo-33984555.jpeg" },
    { key: "journeys/dominique-titougorge-day1.jpg", url: "https://images.pexels.com/photos/35773542/pexels-photo-35773542.jpeg" },
    { key: "journeys/dominique-titougorge-day2.jpg", url: "https://images.pexels.com/photos/33984540/pexels-photo-33984540.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/caraibes-1.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
