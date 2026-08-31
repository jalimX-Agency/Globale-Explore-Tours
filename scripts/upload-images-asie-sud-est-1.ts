export {};

// Asie du Sud-Est batch 1 (full region) — Vietnam, Cambodge, Indonésie, Myanmar, Laos, Bornéo,
// Philippines, Malaisie, Singapour. Sources and uploads every image referenced by
// scripts/seed-trips-asie-sud-est-1.ts. Run this first; the seed script refuses to write
// anything if a referenced image isn't already live.
//   npx tsx scripts/upload-images-asie-sud-est-1.ts

process.loadEnvFile(".env");

async function main() {
  const { uploadImageBatch } = await import("./lib/uploadImages");

  const images = [
    // --- Vietnam : Hoi An et la côte centrale (standard) ---
    { key: "tours/vietnam-hoian-cote-centrale.jpg", url: "https://images.pexels.com/photos/13222573/pexels-photo-13222573.jpeg" },
    { key: "trips/vietnam-hoian-gallery-1.jpg", url: "https://images.pexels.com/photos/6558641/pexels-photo-6558641.jpeg" },
    { key: "trips/vietnam-hoian-gallery-2.jpg", url: "https://images.pexels.com/photos/29920035/pexels-photo-29920035.jpeg" },
    { key: "trips/vietnam-hoian-gallery-3.jpg", url: "https://images.pexels.com/photos/33206785/pexels-photo-33206785.jpeg" },
    { key: "trips/vietnam-hoian-gallery-4.jpg", url: "https://images.pexels.com/photos/35083807/pexels-photo-35083807.jpeg" },
    { key: "trips/vietnam-hoian-gallery-5.jpg", url: "https://images.pexels.com/photos/32045721/pexels-photo-32045721.jpeg" },
    { key: "trips/vietnam-hoian-gallery-6.jpg", url: "https://images.pexels.com/photos/39122836/pexels-photo-39122836.jpeg" },
    { key: "trips/vietnam-hoian-hotel-1.jpg", url: "https://images.pexels.com/photos/33186289/pexels-photo-33186289.jpeg" },
    { key: "trips/vietnam-hoian-hotel-2.jpg", url: "https://images.pexels.com/photos/6558641/pexels-photo-6558641.jpeg" },

    // --- Vietnam : le delta du Mékong et Phu Quoc (journey) ---
    { key: "journeys/vietnam-mekong-phuquoc-hero.jpg", url: "https://images.pexels.com/photos/5952214/pexels-photo-5952214.jpeg" },
    { key: "journeys/vietnam-mekong-gallery1.jpg", url: "https://images.pexels.com/photos/37563955/pexels-photo-37563955.jpeg" },
    { key: "journeys/vietnam-mekong-gallery2.jpg", url: "https://images.pexels.com/photos/28428682/pexels-photo-28428682.jpeg" },
    { key: "journeys/vietnam-mekong-gallery3.jpg", url: "https://images.pexels.com/photos/2134258/pexels-photo-2134258.jpeg" },
    { key: "journeys/vietnam-mekong-day1.jpg", url: "https://images.pexels.com/photos/5218142/pexels-photo-5218142.jpeg" },
    { key: "journeys/vietnam-mekong-day2.jpg", url: "https://images.pexels.com/photos/28428681/pexels-photo-28428681.jpeg" },
    { key: "journeys/vietnam-phuquoc-gallery1.jpg", url: "https://images.pexels.com/photos/4603354/pexels-photo-4603354.jpeg" },
    { key: "journeys/vietnam-phuquoc-gallery2.jpg", url: "https://images.pexels.com/photos/34765150/pexels-photo-34765150.jpeg" },
    { key: "journeys/vietnam-phuquoc-gallery3.jpg", url: "https://images.pexels.com/photos/24416306/pexels-photo-24416306.jpeg" },
    { key: "journeys/vietnam-phuquoc-day1.jpg", url: "https://images.pexels.com/photos/6769701/pexels-photo-6769701.jpeg" },
    { key: "journeys/vietnam-phuquoc-day2.jpg", url: "https://images.pexels.com/photos/36636305/pexels-photo-36636305.jpeg" },

    // --- Cambodge : Battambang et la campagne (standard) ---
    { key: "tours/cambodge-battambang-campagne.jpg", url: "https://images.pexels.com/photos/37321436/pexels-photo-37321436.jpeg" },
    { key: "trips/cambodge-battambang-gallery-1.jpg", url: "https://images.pexels.com/photos/37261318/pexels-photo-37261318.jpeg" },
    { key: "trips/cambodge-battambang-gallery-2.jpg", url: "https://images.pexels.com/photos/35245658/pexels-photo-35245658.jpeg" },
    { key: "trips/cambodge-battambang-gallery-3.jpg", url: "https://images.pexels.com/photos/31377017/pexels-photo-31377017.jpeg" },
    { key: "trips/cambodge-battambang-gallery-4.jpg", url: "https://images.pexels.com/photos/31859370/pexels-photo-31859370.jpeg" },
    { key: "trips/cambodge-battambang-gallery-5.jpg", url: "https://images.pexels.com/photos/37321398/pexels-photo-37321398.jpeg" },
    { key: "trips/cambodge-battambang-gallery-6.jpg", url: "https://images.pexels.com/photos/30622825/pexels-photo-30622825.jpeg" },
    { key: "trips/cambodge-battambang-hotel-1.jpg", url: "https://images.pexels.com/photos/37321436/pexels-photo-37321436.jpeg" },
    { key: "trips/cambodge-battambang-hotel-2.jpg", url: "https://images.pexels.com/photos/31859370/pexels-photo-31859370.jpeg" },

    // --- Cambodge : les Cardamomes et Koh Rong (journey) ---
    { key: "journeys/cambodge-cardamomes-kohrong-hero.jpg", url: "https://images.pexels.com/photos/36607750/pexels-photo-36607750.jpeg" },
    { key: "journeys/cambodge-cardamomes-gallery1.jpg", url: "https://images.pexels.com/photos/31957027/pexels-photo-31957027.jpeg" },
    { key: "journeys/cambodge-cardamomes-gallery2.jpg", url: "https://images.pexels.com/photos/19143427/pexels-photo-19143427.jpeg" },
    { key: "journeys/cambodge-cardamomes-gallery3.jpg", url: "https://images.pexels.com/photos/9939690/pexels-photo-9939690.jpeg" },
    { key: "journeys/cambodge-cardamomes-day1.jpg", url: "https://images.pexels.com/photos/19525920/pexels-photo-19525920.jpeg" },
    { key: "journeys/cambodge-cardamomes-day2.jpg", url: "https://images.pexels.com/photos/11494430/pexels-photo-11494430.jpeg" },
    { key: "journeys/cambodge-kohrong-gallery1.jpg", url: "https://images.pexels.com/photos/12002133/pexels-photo-12002133.jpeg" },
    { key: "journeys/cambodge-kohrong-gallery2.jpg", url: "https://images.pexels.com/photos/12001665/pexels-photo-12001665.jpeg" },
    { key: "journeys/cambodge-kohrong-gallery3.jpg", url: "https://images.pexels.com/photos/4614028/pexels-photo-4614028.jpeg" },
    { key: "journeys/cambodge-kohrong-day1.jpg", url: "https://images.pexels.com/photos/36607751/pexels-photo-36607751.jpeg" },
    { key: "journeys/cambodge-kohrong-day2.jpg", url: "https://images.pexels.com/photos/37088531/pexels-photo-37088531.jpeg" },

    // --- Indonésie : le Kawah Ijen et les volcans de Java (standard) ---
    { key: "tours/indonesie-kawahijen-java.jpg", url: "https://images.pexels.com/photos/20261014/pexels-photo-20261014.jpeg" },
    { key: "trips/indonesie-ijen-gallery-1.jpg", url: "https://images.pexels.com/photos/38132000/pexels-photo-38132000.jpeg" },
    { key: "trips/indonesie-ijen-gallery-2.jpg", url: "https://images.pexels.com/photos/4313045/pexels-photo-4313045.jpeg" },
    { key: "trips/indonesie-ijen-gallery-3.jpg", url: "https://images.pexels.com/photos/12397206/pexels-photo-12397206.jpeg" },
    { key: "trips/indonesie-ijen-gallery-4.jpg", url: "https://images.pexels.com/photos/34391006/pexels-photo-34391006.jpeg" },
    { key: "trips/indonesie-ijen-gallery-5.jpg", url: "https://images.pexels.com/photos/2412716/pexels-photo-2412716.jpeg" },
    { key: "trips/indonesie-ijen-gallery-6.jpg", url: "https://images.pexels.com/photos/4579063/pexels-photo-4579063.jpeg" },
    { key: "trips/indonesie-ijen-hotel-1.jpg", url: "https://images.pexels.com/photos/38132000/pexels-photo-38132000.jpeg" },
    { key: "trips/indonesie-ijen-hotel-2.jpg", url: "https://images.pexels.com/photos/4313045/pexels-photo-4313045.jpeg" },

    // --- Indonésie : Komodo et les dragons (journey) ---
    { key: "journeys/indonesie-komodo-dragons-hero.jpg", url: "https://images.pexels.com/photos/8856172/pexels-photo-8856172.jpeg" },
    { key: "journeys/indonesie-komodo-gallery1.jpg", url: "https://images.pexels.com/photos/38330318/pexels-photo-38330318.jpeg" },
    { key: "journeys/indonesie-komodo-gallery2.jpg", url: "https://images.pexels.com/photos/6776702/pexels-photo-6776702.jpeg" },
    { key: "journeys/indonesie-komodo-gallery3.jpg", url: "https://images.pexels.com/photos/18563866/pexels-photo-18563866.jpeg" },
    { key: "journeys/indonesie-komodo-day1.jpg", url: "https://images.pexels.com/photos/8856173/pexels-photo-8856173.jpeg" },
    { key: "journeys/indonesie-komodo-day2.jpg", url: "https://images.pexels.com/photos/18592082/pexels-photo-18592082.jpeg" },
    { key: "journeys/indonesie-padar-gallery1.jpg", url: "https://images.pexels.com/photos/37680404/pexels-photo-37680404.jpeg" },
    { key: "journeys/indonesie-padar-gallery2.jpg", url: "https://images.pexels.com/photos/10392196/pexels-photo-10392196.jpeg" },
    { key: "journeys/indonesie-padar-gallery3.jpg", url: "https://images.pexels.com/photos/4741215/pexels-photo-4741215.jpeg" },
    { key: "journeys/indonesie-padar-day1.jpg", url: "https://images.pexels.com/photos/28535883/pexels-photo-28535883.jpeg" },
    { key: "journeys/indonesie-padar-day2.jpg", url: "https://images.pexels.com/photos/38330320/pexels-photo-38330320.jpeg" },

    // --- Myanmar : Mrauk-U, la cité oubliée (standard) ---
    { key: "tours/myanmar-mrauk-u-arakan.jpg", url: "https://images.pexels.com/photos/9251062/pexels-photo-9251062.jpeg" },
    { key: "trips/myanmar-mrauku-gallery-1.jpg", url: "https://images.pexels.com/photos/35995678/pexels-photo-35995678.jpeg" },
    { key: "trips/myanmar-mrauku-gallery-2.jpg", url: "https://images.pexels.com/photos/27168161/pexels-photo-27168161.jpeg" },
    { key: "trips/myanmar-mrauku-gallery-3.jpg", url: "https://images.pexels.com/photos/4571307/pexels-photo-4571307.jpeg" },
    { key: "trips/myanmar-mrauku-gallery-4.jpg", url: "https://images.pexels.com/photos/5153686/pexels-photo-5153686.jpeg" },
    { key: "trips/myanmar-mrauku-gallery-5.jpg", url: "https://images.pexels.com/photos/9251088/pexels-photo-9251088.jpeg" },
    { key: "trips/myanmar-mrauku-gallery-6.jpg", url: "https://images.pexels.com/photos/9251062/pexels-photo-9251062.jpeg" },
    { key: "trips/myanmar-mrauku-hotel-1.jpg", url: "https://images.pexels.com/photos/4571307/pexels-photo-4571307.jpeg" },
    { key: "trips/myanmar-mrauku-hotel-2.jpg", url: "https://images.pexels.com/photos/27168161/pexels-photo-27168161.jpeg" },

    // --- Myanmar : Hpa-An, entre grottes et rocher sacré (journey) ---
    { key: "journeys/myanmar-hpaan-zwegabin-hero.jpg", url: "https://images.pexels.com/photos/30269726/pexels-photo-30269726.jpeg" },
    { key: "journeys/myanmar-hpaan-gallery1.jpg", url: "https://images.pexels.com/photos/33660828/pexels-photo-33660828.jpeg" },
    { key: "journeys/myanmar-hpaan-gallery2.jpg", url: "https://images.pexels.com/photos/14776232/pexels-photo-14776232.jpeg" },
    { key: "journeys/myanmar-hpaan-gallery3.jpg", url: "https://images.pexels.com/photos/30174264/pexels-photo-30174264.jpeg" },
    { key: "journeys/myanmar-hpaan-day1.jpg", url: "https://images.pexels.com/photos/33660828/pexels-photo-33660828.jpeg" },
    { key: "journeys/myanmar-hpaan-day2.jpg", url: "https://images.pexels.com/photos/30269726/pexels-photo-30269726.jpeg" },
    { key: "journeys/myanmar-zwegabin-gallery1.jpg", url: "https://images.pexels.com/photos/28706867/pexels-photo-28706867.jpeg" },
    { key: "journeys/myanmar-zwegabin-gallery2.jpg", url: "https://images.pexels.com/photos/38336566/pexels-photo-38336566.jpeg" },
    { key: "journeys/myanmar-zwegabin-gallery3.jpg", url: "https://images.pexels.com/photos/37511187/pexels-photo-37511187.jpeg" },
    { key: "journeys/myanmar-zwegabin-day1.jpg", url: "https://images.pexels.com/photos/9364258/pexels-photo-9364258.jpeg" },
    { key: "journeys/myanmar-zwegabin-day2.jpg", url: "https://images.pexels.com/photos/8002089/pexels-photo-8002089.jpeg" },

    // --- Laos : le plateau des Bolaven et les cascades du sud (standard) ---
    { key: "tours/laos-bolaven-cascades.jpg", url: "https://images.pexels.com/photos/5646317/pexels-photo-5646317.jpeg" },
    { key: "trips/laos-bolaven-gallery-1.jpg", url: "https://images.pexels.com/photos/10615691/pexels-photo-10615691.jpeg" },
    { key: "trips/laos-bolaven-gallery-2.jpg", url: "https://images.pexels.com/photos/10615679/pexels-photo-10615679.jpeg" },
    { key: "trips/laos-bolaven-gallery-3.jpg", url: "https://images.pexels.com/photos/5646317/pexels-photo-5646317.jpeg" },
    { key: "trips/laos-bolaven-gallery-4.jpg", url: "https://images.pexels.com/photos/34241398/pexels-photo-34241398.jpeg" },
    { key: "trips/laos-bolaven-gallery-5.jpg", url: "https://images.pexels.com/photos/10615691/pexels-photo-10615691.jpeg" },
    { key: "trips/laos-bolaven-gallery-6.jpg", url: "https://images.pexels.com/photos/10615679/pexels-photo-10615679.jpeg" },
    { key: "trips/laos-bolaven-hotel-1.jpg", url: "https://images.pexels.com/photos/5646317/pexels-photo-5646317.jpeg" },
    { key: "trips/laos-bolaven-hotel-2.jpg", url: "https://images.pexels.com/photos/34241398/pexels-photo-34241398.jpeg" },

    // --- Laos : la plaine des Jarres et Vang Vieng (journey) ---
    { key: "journeys/laos-plainedesjarres-vangvieng-hero.jpg", url: "https://images.pexels.com/photos/31495676/pexels-photo-31495676.jpeg" },
    { key: "journeys/laos-plainedesjarres-gallery1.jpg", url: "https://images.pexels.com/photos/924633/pexels-photo-924633.jpeg" },
    { key: "journeys/laos-plainedesjarres-gallery2.jpg", url: "https://images.pexels.com/photos/34241398/pexels-photo-34241398.jpeg" },
    { key: "journeys/laos-plainedesjarres-gallery3.jpg", url: "https://images.pexels.com/photos/31495676/pexels-photo-31495676.jpeg" },
    { key: "journeys/laos-plainedesjarres-day1.jpg", url: "https://images.pexels.com/photos/31495676/pexels-photo-31495676.jpeg" },
    { key: "journeys/laos-plainedesjarres-day2.jpg", url: "https://images.pexels.com/photos/924633/pexels-photo-924633.jpeg" },
    { key: "journeys/laos-vangvieng-gallery1.jpg", url: "https://images.pexels.com/photos/10849935/pexels-photo-10849935.jpeg" },
    { key: "journeys/laos-vangvieng-gallery2.jpg", url: "https://images.pexels.com/photos/28706867/pexels-photo-28706867.jpeg" },
    { key: "journeys/laos-vangvieng-gallery3.jpg", url: "https://images.pexels.com/photos/38336566/pexels-photo-38336566.jpeg" },
    { key: "journeys/laos-vangvieng-day1.jpg", url: "https://images.pexels.com/photos/10849935/pexels-photo-10849935.jpeg" },
    { key: "journeys/laos-vangvieng-day2.jpg", url: "https://images.pexels.com/photos/28706867/pexels-photo-28706867.jpeg" },

    // --- Bornéo : le mont Kinabalu (standard) ---
    { key: "tours/bornee-mont-kinabalu.jpg", url: "https://images.pexels.com/photos/38374409/pexels-photo-38374409.jpeg" },
    { key: "trips/bornee-kinabalu-gallery-1.jpg", url: "https://images.pexels.com/photos/37988772/pexels-photo-37988772.jpeg" },
    { key: "trips/bornee-kinabalu-gallery-2.jpg", url: "https://images.pexels.com/photos/37988766/pexels-photo-37988766.jpeg" },
    { key: "trips/bornee-kinabalu-gallery-3.jpg", url: "https://images.pexels.com/photos/37988773/pexels-photo-37988773.jpeg" },
    { key: "trips/bornee-kinabalu-gallery-4.jpg", url: "https://images.pexels.com/photos/3119774/pexels-photo-3119774.jpeg" },
    { key: "trips/bornee-kinabalu-gallery-5.jpg", url: "https://images.pexels.com/photos/37482583/pexels-photo-37482583.jpeg" },
    { key: "trips/bornee-kinabalu-gallery-6.jpg", url: "https://images.pexels.com/photos/38374409/pexels-photo-38374409.jpeg" },
    { key: "trips/bornee-kinabalu-hotel-1.jpg", url: "https://images.pexels.com/photos/37988772/pexels-photo-37988772.jpeg" },
    { key: "trips/bornee-kinabalu-hotel-2.jpg", url: "https://images.pexels.com/photos/3119774/pexels-photo-3119774.jpeg" },

    // --- Bornéo : les grottes de Mulu et le Sarawak (journey) ---
    { key: "journeys/bornee-mulu-sarawak-hero.jpg", url: "https://images.pexels.com/photos/6870966/pexels-photo-6870966.jpeg" },
    { key: "journeys/bornee-mulu-gallery1.jpg", url: "https://images.pexels.com/photos/6870951/pexels-photo-6870951.jpeg" },
    { key: "journeys/bornee-mulu-gallery2.jpg", url: "https://images.pexels.com/photos/6870953/pexels-photo-6870953.jpeg" },
    { key: "journeys/bornee-mulu-gallery3.jpg", url: "https://images.pexels.com/photos/29201928/pexels-photo-29201928.jpeg" },
    { key: "journeys/bornee-mulu-day1.jpg", url: "https://images.pexels.com/photos/6876991/pexels-photo-6876991.jpeg" },
    { key: "journeys/bornee-mulu-day2.jpg", url: "https://images.pexels.com/photos/6870966/pexels-photo-6870966.jpeg" },
    { key: "journeys/bornee-sarawak-gallery1.jpg", url: "https://images.pexels.com/photos/4542636/pexels-photo-4542636.jpeg" },
    { key: "journeys/bornee-sarawak-gallery2.jpg", url: "https://images.pexels.com/photos/37320638/pexels-photo-37320638.jpeg" },
    { key: "journeys/bornee-sarawak-gallery3.jpg", url: "https://images.pexels.com/photos/10913926/pexels-photo-10913926.jpeg" },
    { key: "journeys/bornee-sarawak-day1.jpg", url: "https://images.pexels.com/photos/4542636/pexels-photo-4542636.jpeg" },
    { key: "journeys/bornee-sarawak-day2.jpg", url: "https://images.pexels.com/photos/37320638/pexels-photo-37320638.jpeg" },

    // --- Philippines : Siargao, l'île du surf (standard) ---
    { key: "tours/philippines-siargao-surf.jpg", url: "https://images.pexels.com/photos/38265496/pexels-photo-38265496.jpeg" },
    { key: "trips/philippines-siargao-gallery-1.jpg", url: "https://images.pexels.com/photos/3533659/pexels-photo-3533659.jpeg" },
    { key: "trips/philippines-siargao-gallery-2.jpg", url: "https://images.pexels.com/photos/19635555/pexels-photo-19635555.jpeg" },
    { key: "trips/philippines-siargao-gallery-3.jpg", url: "https://images.pexels.com/photos/34961121/pexels-photo-34961121.jpeg" },
    { key: "trips/philippines-siargao-gallery-4.jpg", url: "https://images.pexels.com/photos/32632231/pexels-photo-32632231.jpeg" },
    { key: "trips/philippines-siargao-gallery-5.jpg", url: "https://images.pexels.com/photos/19716803/pexels-photo-19716803.jpeg" },
    { key: "trips/philippines-siargao-gallery-6.jpg", url: "https://images.pexels.com/photos/2807218/pexels-photo-2807218.jpeg" },
    { key: "trips/philippines-siargao-hotel-1.jpg", url: "https://images.pexels.com/photos/2410111/pexels-photo-2410111.jpeg" },
    { key: "trips/philippines-siargao-hotel-2.jpg", url: "https://images.pexels.com/photos/34961121/pexels-photo-34961121.jpeg" },

    // --- Philippines : les rizières de Banaue et Sagada (journey) ---
    { key: "journeys/philippines-banaue-sagada-hero.jpg", url: "https://images.pexels.com/photos/3698534/pexels-photo-3698534.jpeg" },
    { key: "journeys/philippines-banaue-gallery1.jpg", url: "https://images.pexels.com/photos/37445545/pexels-photo-37445545.jpeg" },
    { key: "journeys/philippines-banaue-gallery2.jpg", url: "https://images.pexels.com/photos/10046458/pexels-photo-10046458.jpeg" },
    { key: "journeys/philippines-banaue-gallery3.jpg", url: "https://images.pexels.com/photos/10046455/pexels-photo-10046455.jpeg" },
    { key: "journeys/philippines-banaue-day1.jpg", url: "https://images.pexels.com/photos/11283650/pexels-photo-11283650.jpeg" },
    { key: "journeys/philippines-banaue-day2.jpg", url: "https://images.pexels.com/photos/37445537/pexels-photo-37445537.jpeg" },
    { key: "journeys/philippines-sagada-gallery1.jpg", url: "https://images.pexels.com/photos/35521644/pexels-photo-35521644.jpeg" },
    { key: "journeys/philippines-sagada-gallery2.jpg", url: "https://images.pexels.com/photos/15328461/pexels-photo-15328461.jpeg" },
    { key: "journeys/philippines-sagada-gallery3.jpg", url: "https://images.pexels.com/photos/8282283/pexels-photo-8282283.jpeg" },
    { key: "journeys/philippines-sagada-day1.jpg", url: "https://images.pexels.com/photos/37445335/pexels-photo-37445335.jpeg" },
    { key: "journeys/philippines-sagada-day2.jpg", url: "https://images.pexels.com/photos/37445550/pexels-photo-37445550.jpeg" },

    // --- Malaisie : Penang, street art et George Town (standard) ---
    { key: "tours/malaisie-penang-georgetown.jpg", url: "https://images.pexels.com/photos/38531745/pexels-photo-38531745.jpeg" },
    { key: "trips/malaisie-penang-gallery-1.jpg", url: "https://images.pexels.com/photos/12587163/pexels-photo-12587163.jpeg" },
    { key: "trips/malaisie-penang-gallery-2.jpg", url: "https://images.pexels.com/photos/38531741/pexels-photo-38531741.jpeg" },
    { key: "trips/malaisie-penang-gallery-3.jpg", url: "https://images.pexels.com/photos/35222171/pexels-photo-35222171.jpeg" },
    { key: "trips/malaisie-penang-gallery-4.jpg", url: "https://images.pexels.com/photos/38531739/pexels-photo-38531739.jpeg" },
    { key: "trips/malaisie-penang-gallery-5.jpg", url: "https://images.pexels.com/photos/30867351/pexels-photo-30867351.jpeg" },
    { key: "trips/malaisie-penang-gallery-6.jpg", url: "https://images.pexels.com/photos/38531746/pexels-photo-38531746.jpeg" },
    { key: "trips/malaisie-penang-hotel-1.jpg", url: "https://images.pexels.com/photos/38546807/pexels-photo-38546807.jpeg" },
    { key: "trips/malaisie-penang-hotel-2.jpg", url: "https://images.pexels.com/photos/38546802/pexels-photo-38546802.jpeg" },

    // --- Malaisie : les îles Perhentian et Taman Negara (journey) ---
    { key: "journeys/malaisie-perhentian-tamannegara-hero.jpg", url: "https://images.pexels.com/photos/38207224/pexels-photo-38207224.jpeg" },
    { key: "journeys/malaisie-perhentian-gallery1.jpg", url: "https://images.pexels.com/photos/5444487/pexels-photo-5444487.jpeg" },
    { key: "journeys/malaisie-perhentian-gallery2.jpg", url: "https://images.pexels.com/photos/5444614/pexels-photo-5444614.jpeg" },
    { key: "journeys/malaisie-perhentian-gallery3.jpg", url: "https://images.pexels.com/photos/4768468/pexels-photo-4768468.jpeg" },
    { key: "journeys/malaisie-perhentian-day1.jpg", url: "https://images.pexels.com/photos/38207224/pexels-photo-38207224.jpeg" },
    { key: "journeys/malaisie-perhentian-day2.jpg", url: "https://images.pexels.com/photos/5444487/pexels-photo-5444487.jpeg" },
    { key: "journeys/malaisie-tamannegara-gallery1.jpg", url: "https://images.pexels.com/photos/19385862/pexels-photo-19385862.jpeg" },
    { key: "journeys/malaisie-tamannegara-gallery2.jpg", url: "https://images.pexels.com/photos/13627811/pexels-photo-13627811.jpeg" },
    { key: "journeys/malaisie-tamannegara-gallery3.jpg", url: "https://images.pexels.com/photos/10913926/pexels-photo-10913926.jpeg" },
    { key: "journeys/malaisie-tamannegara-day1.jpg", url: "https://images.pexels.com/photos/19385862/pexels-photo-19385862.jpeg" },
    { key: "journeys/malaisie-tamannegara-day2.jpg", url: "https://images.pexels.com/photos/13627811/pexels-photo-13627811.jpeg" },

    // --- Singapour : Sentosa et les îles du sud (standard) ---
    { key: "tours/singapour-sentosa-iles-sud.jpg", url: "https://images.pexels.com/photos/5237211/pexels-photo-5237211.jpeg" },
    { key: "trips/singapour-sentosa-gallery-1.jpg", url: "https://images.pexels.com/photos/23331416/pexels-photo-23331416.jpeg" },
    { key: "trips/singapour-sentosa-gallery-2.jpg", url: "https://images.pexels.com/photos/26621257/pexels-photo-26621257.jpeg" },
    { key: "trips/singapour-sentosa-gallery-3.jpg", url: "https://images.pexels.com/photos/30085677/pexels-photo-30085677.jpeg" },
    { key: "trips/singapour-sentosa-gallery-4.jpg", url: "https://images.pexels.com/photos/8645103/pexels-photo-8645103.jpeg" },
    { key: "trips/singapour-sentosa-gallery-5.jpg", url: "https://images.pexels.com/photos/11527352/pexels-photo-11527352.jpeg" },
    { key: "trips/singapour-sentosa-gallery-6.jpg", url: "https://images.pexels.com/photos/9022610/pexels-photo-9022610.jpeg" },
    { key: "trips/singapour-sentosa-hotel-1.jpg", url: "https://images.pexels.com/photos/31671370/pexels-photo-31671370.jpeg" },
    { key: "trips/singapour-sentosa-hotel-2.jpg", url: "https://images.pexels.com/photos/15831716/pexels-photo-15831716.jpeg" },

    // --- Singapour : Katong et l'île de Pulau Ubin (journey) ---
    { key: "journeys/singapour-katong-pulauubin-hero.jpg", url: "https://images.pexels.com/photos/15398167/pexels-photo-15398167.jpeg" },
    { key: "journeys/singapour-katong-gallery1.jpg", url: "https://images.pexels.com/photos/11062438/pexels-photo-11062438.jpeg" },
    { key: "journeys/singapour-katong-gallery2.jpg", url: "https://images.pexels.com/photos/32862829/pexels-photo-32862829.jpeg" },
    { key: "journeys/singapour-katong-gallery3.jpg", url: "https://images.pexels.com/photos/11062447/pexels-photo-11062447.jpeg" },
    { key: "journeys/singapour-katong-day1.jpg", url: "https://images.pexels.com/photos/15398168/pexels-photo-15398168.jpeg" },
    { key: "journeys/singapour-katong-day2.jpg", url: "https://images.pexels.com/photos/11062445/pexels-photo-11062445.jpeg" },
    { key: "journeys/singapour-pulauubin-gallery1.jpg", url: "https://images.pexels.com/photos/20137671/pexels-photo-20137671.jpeg" },
    { key: "journeys/singapour-pulauubin-gallery2.jpg", url: "https://images.pexels.com/photos/20137670/pexels-photo-20137670.jpeg" },
    { key: "journeys/singapour-pulauubin-gallery3.jpg", url: "https://images.pexels.com/photos/5097151/pexels-photo-5097151.jpeg" },
    { key: "journeys/singapour-pulauubin-day1.jpg", url: "https://images.pexels.com/photos/20137676/pexels-photo-20137676.jpeg" },
    { key: "journeys/singapour-pulauubin-day2.jpg", url: "https://images.pexels.com/photos/4627231/pexels-photo-4627231.jpeg" },
  ];

  await uploadImageBatch(images, "scripts/.manifests/asie-sud-est-1.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
