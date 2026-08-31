// Moyen-Orient batch 1 (full region) — Émirats arabes unis, Jordanie, Oman, Israël, Arabie
// saoudite, Qatar, Liban, Bahreïn. New trips bringing each destination to at least 3, styled
// on Black Tomato's real structure (a short number of named-hotel chapters, not an exhaustive
// day-by-day grind) rather than copying their text. This completes all 8 destinations in the
// Moyen-Orient region. Run with:
//   npx tsx scripts/seed-trips-moyen-orient-1.ts
// Requires scripts/upload-images-moyen-orient-1.ts to have been run first (this script
// refuses to write anything if a referenced image isn't already live in R2 — see
// seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip, NewWorldTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;

const journeyTrips: NewJourneyTrip[] = [
  {
    destinationSlug: "emirats-arabes-unis",
    tour: {
      name: "Émirats arabes unis : Jebel Jais et l'île de Sir Bani Yas",
      nameEn: "United Arab Emirates: Jebel Jais and Sir Bani Yas Island",
      nameEs: "Emiratos Árabes Unidos: Jebel Jais y la isla de Sir Bani Yas",
      slug: "emirats-arabes-unis-jebel-jais-sirbaniyas",
      image: `${R2}/journeys/emirats-jebeljais-sirbaniyas-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Le point culminant du pays et la plus longue tyrolienne du monde, puis une réserve où l'oryx d'Arabie a été sauvé de l'extinction",
      taglineEn: "The country's highest point and the world's longest zipline, then a reserve where the Arabian oryx was saved from extinction",
      taglineEs: "El punto más alto del país y la tirolina más larga del mundo, y después una reserva donde el órix de Arabia se salvó de la extinción",
      description:
        "Un voyage loin des gratte-ciel de Dubaï : Jebel Jais, plus haut sommet des Émirats à Ras al-Khaimah, où une route sinueuse mène à la plus longue tyrolienne du monde survolant plus de deux kilomètres de canyon rocheux, puis l'île de Sir Bani Yas, ancienne réserve privée du fondateur des Émirats transformée en sanctuaire de faune sauvage où l'oryx d'Arabie, jadis éteint dans la nature, a été réintroduit avec succès.",
      descriptionEn:
        "A journey far from Dubai's skyscrapers: Jebel Jais, the UAE's highest peak in Ras al-Khaimah, where a winding road leads to the world's longest zipline soaring over two kilometres of rocky canyon, then Sir Bani Yas Island, once the private reserve of the UAE's founding father, now a wildlife sanctuary where the Arabian oryx, once extinct in the wild, has been successfully reintroduced.",
      descriptionEs:
        "Un viaje lejos de los rascacielos de Dubái: Jebel Jais, el pico más alto de los Emiratos en Ras al-Khaimah, donde una carretera sinuosa conduce a la tirolina más larga del mundo, que sobrevuela más de dos kilómetros de cañón rocoso, y después la isla de Sir Bani Yas, antigua reserva privada del padre fundador de los Emiratos, hoy santuario de vida salvaje donde el órix de Arabia, antes extinto en libertad, ha sido reintroducido con éxito.",
      price: 2700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 90,
    },
    chapters: [
      {
        title: "Jebel Jais, le toit des Émirats",
        titleEn: "Jebel Jais, the Roof of the Emirates",
        titleEs: "Jebel Jais, el techo de los Emiratos",
        intro:
          "Premier chapitre à Jebel Jais, qui culmine à plus de mille neuf cents mètres dans l'émirat de Ras al-Khaimah, à moins de deux heures de route de Dubaï mais dans un tout autre univers de canyons rocheux et de routes en lacets. La montagne abrite Jais Flight, tyrolienne certifiée la plus longue du monde, ainsi que des sentiers de via ferrata et un tremplin panoramique suspendu au-dessus du vide, aménagés pour révéler un versant plus aventureux des Émirats.",
        introEn:
          "The first chapter unfolds at Jebel Jais, which rises over nineteen hundred metres in the emirate of Ras al-Khaimah, less than two hours' drive from Dubai yet a world away amid rocky canyons and switchback roads. The mountain is home to Jais Flight, the certified longest zipline in the world, along with via ferrata trails and a panoramic swing suspended over the void, built to reveal a more adventurous side of the Emirates.",
        introEs:
          "El primer capítulo se desarrolla en Jebel Jais, que se eleva más de mil novecientos metros en el emirato de Ras al-Khaimah, a menos de dos horas en coche de Dubái pero en un mundo completamente distinto de cañones rocosos y carreteras en zigzag. La montaña alberga Jais Flight, la tirolina certificada más larga del mundo, además de senderos de vía ferrata y un columpio panorámico suspendido sobre el vacío, diseñados para revelar una cara más aventurera de los Emiratos.",
        galleryImages: `${R2}/journeys/emirats-jebeljais-gallery1.jpg,${R2}/journeys/emirats-jebeljais-gallery2.jpg,${R2}/journeys/emirats-jebeljais-gallery3.jpg`,
        mapMarkerX: 75,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Jais Flight, la plus longue tyrolienne du monde",
            titleEn: "Jais Flight, the world's longest zipline",
            titleEs: "Jais Flight, la tirolina más larga del mundo",
            description:
              "Vol en tyrolienne sur plus de deux kilomètres au-dessus du canyon de Jebel Jais, à une vitesse pouvant dépasser cent vingt kilomètres à l'heure, encadré par des instructeurs certifiés.",
            descriptionEn:
              "A zipline flight over two kilometres above the Jebel Jais canyon, reaching speeds of over one hundred and twenty kilometres per hour, supervised by certified instructors.",
            descriptionEs:
              "Vuelo en tirolina de más de dos kilómetros sobre el cañón de Jebel Jais, alcanzando velocidades superiores a los ciento veinte kilómetros por hora, supervisado por instructores certificados.",
            image: `${R2}/journeys/emirats-jebeljais-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Route panoramique et village perché de montagne",
            titleEn: "The scenic road and a perched mountain village",
            titleEs: "Ruta panorámica y pueblo de montaña encaramado",
            description:
              "Route en lacets jusqu'au sommet de Jebel Jais, arrêt au village restauré de Shawka, puis promenade sur le tremplin panoramique suspendu au-dessus du canyon.",
            descriptionEn:
              "A winding drive to the summit of Jebel Jais, a stop at the restored village of Shawka, then a walk on the panoramic swing suspended above the canyon.",
            descriptionEs:
              "Ruta en zigzag hasta la cima de Jebel Jais, parada en el pueblo restaurado de Shawka, y paseo por el columpio panorámico suspendido sobre el cañón.",
            image: `${R2}/journeys/emirats-jebeljais-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "L'île de Sir Bani Yas",
        titleEn: "Sir Bani Yas Island",
        titleEs: "La isla de Sir Bani Yas",
        intro:
          "Bateau vers l'île de Sir Bani Yas, au large d'Abu Dhabi, transformée à partir des années 1970 en réserve naturelle par le cheikh Zayed, père fondateur des Émirats, qui y fit planter des millions d'arbres pour verdir un territoire jusque-là aride. L'île abrite aujourd'hui l'une des plus grandes populations d'oryx d'Arabie au monde, antilope emblématique déclarée éteinte à l'état sauvage en 1972 avant d'être réintroduite grâce à des programmes d'élevage comme celui-ci.",
        introEn:
          "A boat to Sir Bani Yas Island, off the coast of Abu Dhabi, transformed from the 1970s into a nature reserve by Sheikh Zayed, the UAE's founding father, who had millions of trees planted to green a previously arid territory. The island is now home to one of the largest populations of Arabian oryx in the world, an emblematic antelope declared extinct in the wild in 1972 before being reintroduced through breeding programmes like this one.",
        introEs:
          "Barco hacia la isla de Sir Bani Yas, frente a la costa de Abu Dabi, transformada a partir de la década de 1970 en reserva natural por el jeque Zayed, padre fundador de los Emiratos, que hizo plantar millones de árboles para reverdecer un territorio hasta entonces árido. La isla alberga hoy una de las mayores poblaciones de órix de Arabia del mundo, antílope emblemático declarado extinto en libertad en 1972 antes de ser reintroducido gracias a programas de cría como este.",
        galleryImages: `${R2}/journeys/emirats-sirbaniyas-gallery1.jpg,${R2}/journeys/emirats-sirbaniyas-gallery2.jpg,${R2}/journeys/emirats-sirbaniyas-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 75,
        days: [
          {
            dayNumber: 1,
            title: "Safari à la recherche de l'oryx d'Arabie",
            titleEn: "A safari in search of the Arabian oryx",
            titleEs: "Safari en busca del órix de Arabia",
            description:
              "Safari en 4x4 dans la réserve de Sir Bani Yas, à la recherche de l'oryx d'Arabie, de gazelles et de girafes introduites, sur un territoire entièrement dédié à la conservation.",
            descriptionEn:
              "A 4x4 safari in the Sir Bani Yas reserve, in search of the Arabian oryx, gazelles, and introduced giraffes, across a territory entirely devoted to conservation.",
            descriptionEs:
              "Safari en 4x4 en la reserva de Sir Bani Yas, en busca del órix de Arabia, gacelas y jirafas introducidas, en un territorio enteramente dedicado a la conservación.",
            image: `${R2}/journeys/emirats-sirbaniyas-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Plage isolée et kayak dans la mangrove",
            titleEn: "A secluded beach and mangrove kayaking",
            titleEs: "Playa aislada y kayak en el manglar",
            description:
              "Matinée de kayak dans les mangroves de l'île, puis après-midi libre sur une plage isolée du golfe Arabique, loin de toute autre présence touristique.",
            descriptionEn:
              "A morning of kayaking through the island's mangroves, then a free afternoon on a secluded beach on the Arabian Gulf, far from any other tourist presence.",
            descriptionEs:
              "Mañana de kayak por los manglares de la isla, y tarde libre en una playa aislada del golfo Arábigo, lejos de cualquier otra presencia turística.",
            image: `${R2}/journeys/emirats-sirbaniyas-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "jordanie",
    tour: {
      name: "Jordanie : Jerash et la mer Rouge à Aqaba",
      nameEn: "Jordan: Jerash and the Red Sea at Aqaba",
      nameEs: "Jordania: Jerash y el mar Rojo en Aqaba",
      slug: "jordanie-jerash-aqaba",
      image: `${R2}/journeys/jordanie-jerash-aqaba-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "L'une des cités romaines les mieux préservées hors d'Italie, puis des récifs coralliens à l'abri des cyclones",
      taglineEn: "One of the best-preserved Roman cities outside Italy, then coral reefs sheltered from cyclones",
      taglineEs: "Una de las ciudades romanas mejor conservadas fuera de Italia, y después arrecifes de coral a salvo de ciclones",
      description:
        "Un voyage entre deux Jordanie que la route de Pétra laisse souvent de côté : Jerash, cité gréco-romaine si bien préservée que son hippodrome, ses colonnades et son forum ovale donnent l'impression d'une ville figée depuis deux mille ans, puis Aqaba, seule ouverture du royaume sur la mer Rouge, dont les récifs coralliens abritent une biodiversité exceptionnelle protégée par la configuration géographique du golfe.",
      descriptionEn:
        "A journey between two sides of Jordan that the Petra route often overlooks: Jerash, a Greco-Roman city so well preserved that its hippodrome, colonnades, and oval forum feel frozen in time two thousand years on, then Aqaba, the kingdom's only outlet to the Red Sea, whose coral reefs shelter exceptional biodiversity protected by the gulf's geography.",
      descriptionEs:
        "Un viaje entre dos caras de Jordania que la ruta de Petra suele dejar de lado: Jerash, ciudad grecorromana tan bien conservada que su hipódromo, sus columnatas y su foro ovalado parecen detenidos en el tiempo hace dos mil años, y después Aqaba, única salida del reino al mar Rojo, cuyos arrecifes de coral albergan una biodiversidad excepcional protegida por la geografía del golfo.",
      price: 2400,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mars à mai | Sept à nov",
      whenLabelEn: "March to May | Sept to Nov",
      whenLabelEs: "Marzo a mayo | sept a nov",
      bestMonths: "march,april,may,september,october,november",
      category: "multi-day",
      theme: "adventure",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 91,
    },
    chapters: [
      {
        title: "Jerash, la Pompéi du Moyen-Orient",
        titleEn: "Jerash, the Pompeii of the Middle East",
        titleEs: "Jerash, la Pompeya de Oriente Medio",
        intro:
          "Premier chapitre à Jerash, souvent surnommée la Pompéi du Moyen-Orient pour l'ampleur et l'état de conservation de ses vestiges gréco-romains, ensevelis sous le sable pendant des siècles avant d'être redécouverts au XIXe siècle. La ville antique de Gerasa comptait parmi les plus prospères de la Décapole romaine, comme en témoignent son forum ovale bordé de colonnes ioniques, sa voie à colonnades longue de huit cents mètres et son hippodrome où se déroulent aujourd'hui des reconstitutions de courses de chars.",
        introEn:
          "The first chapter unfolds in Jerash, often nicknamed the Pompeii of the Middle East for the scale and state of preservation of its Greco-Roman remains, buried under sand for centuries before being rediscovered in the 19th century. The ancient city of Gerasa ranked among the most prosperous of the Roman Decapolis, as shown by its oval forum lined with Ionic columns, its eight-hundred-metre colonnaded street, and its hippodrome, where chariot-race re-enactments now take place.",
        introEs:
          "El primer capítulo se desarrolla en Jerash, apodada a menudo la Pompeya de Oriente Medio por la magnitud y el estado de conservación de sus vestigios grecorromanos, sepultados bajo la arena durante siglos antes de ser redescubiertos en el siglo XIX. La antigua ciudad de Gerasa se contaba entre las más prósperas de la Decápolis romana, como demuestran su foro ovalado bordeado de columnas jónicas, su calle columnata de ochocientos metros y su hipódromo, donde hoy se celebran recreaciones de carreras de cuadrigas.",
        galleryImages: `${R2}/journeys/jordanie-jerash-gallery1.jpg,${R2}/journeys/jordanie-jerash-gallery2.jpg,${R2}/journeys/jordanie-jerash-gallery3.jpg`,
        mapMarkerX: 40,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Le forum ovale et la voie à colonnades",
            titleEn: "The oval forum and the colonnaded street",
            titleEs: "El foro ovalado y la calle columnata",
            description:
              "Visite du forum ovale unique en son genre dans le monde romain, puis marche le long du cardo maximus, voie à colonnades encore pavée de ses dalles d'origine.",
            descriptionEn:
              "A visit to the oval forum, unique in the Roman world, then a walk along the cardo maximus, a colonnaded street still paved with its original stone slabs.",
            descriptionEs:
              "Visita al foro ovalado, único en su género en el mundo romano, y paseo por el cardo maximus, calle columnata todavía pavimentada con sus losas originales.",
            image: `${R2}/journeys/jordanie-jerash-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "L'hippodrome et les temples jumeaux",
            titleEn: "The hippodrome and the twin temples",
            titleEs: "El hipódromo y los templos gemelos",
            description:
              "Reconstitution de courses de chars et de combats de gladiateurs dans l'hippodrome antique, puis visite des temples de Zeus et d'Artémis surplombant la ville.",
            descriptionEn:
              "A re-enactment of chariot races and gladiator fights in the ancient hippodrome, then a visit to the temples of Zeus and Artemis overlooking the city.",
            descriptionEs:
              "Recreación de carreras de cuadrigas y combates de gladiadores en el antiguo hipódromo, y visita a los templos de Zeus y Artemisa que dominan la ciudad.",
            image: `${R2}/journeys/jordanie-jerash-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Aqaba et la mer Rouge",
        titleEn: "Aqaba and the Red Sea",
        titleEs: "Aqaba y el mar Rojo",
        intro:
          "Route vers Aqaba, seule ville portuaire de Jordanie et unique fenêtre du royaume sur la mer Rouge, dont les vingt-sept kilomètres de côte concentrent une densité remarquable de récifs coralliens à faible profondeur, accessibles aussi bien en plongée qu'en snorkeling. La configuration en entonnoir du golfe d'Aqaba limite les courants violents et protège les coraux, permettant une visibilité sous-marine qui dépasse souvent vingt-cinq mètres toute l'année.",
        introEn:
          "The road to Aqaba, Jordan's only port city and the kingdom's sole window onto the Red Sea, whose twenty-seven kilometres of coastline concentrate a remarkable density of shallow coral reefs, accessible by both diving and snorkelling. The funnel-shaped Gulf of Aqaba limits strong currents and protects the corals, allowing underwater visibility that often exceeds twenty-five metres year-round.",
        introEs:
          "Ruta hacia Aqaba, único puerto de Jordania y única ventana del reino al mar Rojo, cuyos veintisiete kilómetros de costa concentran una densidad notable de arrecifes de coral poco profundos, accesibles tanto para el buceo como para el esnórquel. La forma de embudo del golfo de Aqaba limita las corrientes fuertes y protege los corales, lo que permite una visibilidad submarina que a menudo supera los veinticinco metros durante todo el año.",
        galleryImages: `${R2}/journeys/jordanie-aqaba-gallery1.jpg,${R2}/journeys/jordanie-aqaba-gallery2.jpg,${R2}/journeys/jordanie-aqaba-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 80,
        days: [
          {
            dayNumber: 1,
            title: "Plongée sur les récifs coralliens d'Aqaba",
            titleEn: "Diving the coral reefs of Aqaba",
            titleEs: "Buceo en los arrecifes de coral de Aqaba",
            description:
              "Sortie de plongée encadrée sur les récifs coralliens du golfe d'Aqaba, à la découverte de tortues, poissons-clowns et coraux mous parmi les mieux préservés de la mer Rouge.",
            descriptionEn:
              "A guided dive on the coral reefs of the Gulf of Aqaba, discovering turtles, clownfish, and soft corals among the best-preserved in the Red Sea.",
            descriptionEs:
              "Salida de buceo guiada por los arrecifes de coral del golfo de Aqaba, para descubrir tortugas, peces payaso y corales blandos entre los mejor conservados del mar Rojo.",
            image: `${R2}/journeys/jordanie-aqaba-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Snorkeling et épave du Cedar Pride",
            titleEn: "Snorkelling and the Cedar Pride wreck",
            titleEs: "Esnórquel y el pecio del Cedar Pride",
            description:
              "Sortie en bateau vers le récif japonais puis snorkeling au-dessus de l'épave du Cedar Pride, cargo coulé volontairement en 1985 pour créer un récif artificiel.",
            descriptionEn:
              "A boat trip to the Japanese reef then snorkelling above the wreck of the Cedar Pride, a cargo ship deliberately sunk in 1985 to create an artificial reef.",
            descriptionEs:
              "Salida en barco hacia el arrecife japonés y esnórquel sobre el pecio del Cedar Pride, carguero hundido deliberadamente en 1985 para crear un arrecife artificial.",
            image: `${R2}/journeys/jordanie-aqaba-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "oman",
    tour: {
      name: "Oman : les fjords du Musandam et le Jebel Akhdar",
      nameEn: "Oman: The Musandam Fjords and Jebel Akhdar",
      nameEs: "Omán: los fiordos de Musandam y el Jebel Akhdar",
      slug: "oman-musandam-jebelakhdar",
      image: `${R2}/journeys/oman-musandam-jebelakhdar-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "La « Norvège de l'Arabie », enclave séparée du reste du pays, puis une montagne verte à deux mille mètres d'altitude",
      taglineEn: "The \"Norway of Arabia,\" an exclave cut off from the rest of the country, then a green mountain two thousand metres up",
      taglineEs: "La «Noruega de Arabia», enclave separado del resto del país, y después una montaña verde a dos mil metros de altitud",
      description:
        "Un voyage entre deux Oman aux antipodes l'un de l'autre : le Musandam, péninsule enclavée séparée du reste du pays par le territoire émirati et surnommée la « Norvège de l'Arabie » pour ses fjords spectaculaires creusés dans la roche, puis le Jebel Akhdar, « montagne verte » culminant à plus de deux mille mètres, dont les terrasses agricoles séculaires produisent roses et abricots dans un climat étonnamment tempéré pour la péninsule Arabique.",
      descriptionEn:
        "A journey between two opposite Omans: Musandam, a landlocked peninsula separated from the rest of the country by Emirati territory and nicknamed the \"Norway of Arabia\" for its spectacular fjords carved into the rock, then Jebel Akhdar, the \"Green Mountain\" rising over two thousand metres, whose centuries-old agricultural terraces produce roses and apricots in a climate surprisingly temperate for the Arabian Peninsula.",
      descriptionEs:
        "Un viaje entre dos Omanes completamente opuestos: Musandam, península enclavada separada del resto del país por territorio emiratí y apodada la «Noruega de Arabia» por sus espectaculares fiordos tallados en la roca, y después el Jebel Akhdar, la «montaña verde» que se eleva más de dos mil metros, cuyas terrazas agrícolas centenarias producen rosas y albaricoques en un clima sorprendentemente templado para la península arábiga.",
      price: 3200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Oct à avril",
      whenLabelEn: "Oct to April",
      whenLabelEs: "Oct a abril",
      bestMonths: "october,november,december,january,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 92,
    },
    chapters: [
      {
        title: "Les fjords du Musandam",
        titleEn: "The Musandam Fjords",
        titleEs: "Los fiordos de Musandam",
        intro:
          "Premier chapitre dans le Musandam, enclave omanaise complètement séparée du reste du pays par une bande de territoire émirati, ce qui lui vaut de rester à l'écart des grands flux touristiques malgré des paysages spectaculaires. Les falaises calcaires plongeant directement dans les eaux turquoise du détroit d'Ormuz, l'une des voies maritimes les plus stratégiques au monde, se découvrent traditionnellement à bord d'un dhow, boutre en bois typique de la région.",
        introEn:
          "The first chapter unfolds in Musandam, an Omani exclave entirely cut off from the rest of the country by a strip of Emirati territory, which keeps it off the main tourist trails despite spectacular scenery. The limestone cliffs plunging straight into the turquoise waters of the Strait of Hormuz, one of the world's most strategic shipping lanes, are traditionally explored aboard a dhow, the region's typical wooden sailing boat.",
        introEs:
          "El primer capítulo se desarrolla en Musandam, enclave omaní completamente separado del resto del país por una franja de territorio emiratí, lo que lo mantiene al margen de los grandes flujos turísticos pese a sus paisajes espectaculares. Los acantilados calizos que caen directamente sobre las aguas turquesas del estrecho de Ormuz, una de las rutas marítimas más estratégicas del mundo, se descubren tradicionalmente a bordo de un dhow, el barco de madera típico de la región.",
        galleryImages: `${R2}/journeys/oman-musandam-gallery1.jpg,${R2}/journeys/oman-musandam-gallery2.jpg,${R2}/journeys/oman-musandam-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Croisière en dhow dans les fjords",
            titleEn: "A dhow cruise through the fjords",
            titleEs: "Crucero en dhow por los fiordos",
            description:
              "Journée de croisière à bord d'un dhow traditionnel dans les fjords du Musandam, avec arrêts snorkeling au-dessus de récifs coralliens et observation des dauphins qui accompagnent souvent les bateaux.",
            descriptionEn:
              "A day-long cruise aboard a traditional dhow through the Musandam fjords, with snorkelling stops above coral reefs and dolphins that often accompany the boats.",
            descriptionEs:
              "Día de crucero a bordo de un dhow tradicional por los fiordos de Musandam, con paradas para esnorquelear sobre arrecifes de coral y avistamiento de delfines que a menudo acompañan a los barcos.",
            image: `${R2}/journeys/oman-musandam-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le village flottant de Kumzar",
            titleEn: "The floating village of Kumzar",
            titleEs: "El pueblo flotante de Kumzar",
            description:
              "Excursion en bateau jusqu'au village isolé de Kumzar, accessible uniquement par mer, où les habitants parlent le kumzari, langue unique mêlant persan, arabe et anglais.",
            descriptionEn:
              "A boat excursion to the isolated village of Kumzar, accessible only by sea, where residents speak Kumzari, a unique language blending Persian, Arabic, and English.",
            descriptionEs:
              "Excursión en barco hasta el aislado pueblo de Kumzar, accesible solo por mar, donde los habitantes hablan kumzari, lengua única que mezcla persa, árabe e inglés.",
            image: `${R2}/journeys/oman-musandam-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le Jebel Akhdar, la montagne verte",
        titleEn: "Jebel Akhdar, the Green Mountain",
        titleEs: "El Jebel Akhdar, la montaña verde",
        intro:
          "Route vers le Jebel Akhdar, massif des monts Hajar culminant à plus de deux mille mètres, dont l'altitude offre un climat tempéré unique dans la péninsule Arabique et permet la culture en terrasses de roses damascènes, de grenades et d'abricots depuis plusieurs siècles. Les villages accrochés aux terrasses, comme Misfat al-Abriyeen aux maisons de pisé traditionnelles, se découvrent au fil d'un réseau ancestral de canaux d'irrigation appelés falaj, classé à l'UNESCO.",
        introEn:
          "The road to Jebel Akhdar, a massif in the Hajar Mountains rising over two thousand metres, whose altitude offers a temperate climate unique in the Arabian Peninsula and has allowed terraced cultivation of Damask roses, pomegranates, and apricots for several centuries. The villages clinging to the terraces, like Misfat al-Abriyeen with its traditional mud-brick houses, are explored along an ancestral network of irrigation channels called falaj, UNESCO-listed.",
        introEs:
          "Ruta hacia el Jebel Akhdar, macizo de las montañas Hajar que se eleva más de dos mil metros, cuya altitud ofrece un clima templado único en la península arábiga y ha permitido el cultivo en terrazas de rosas de Damasco, granadas y albaricoques desde hace varios siglos. Los pueblos aferrados a las terrazas, como Misfat al-Abriyeen con sus casas tradicionales de adobe, se descubren siguiendo una red ancestral de canales de riego llamados falaj, declarada por la UNESCO.",
        galleryImages: `${R2}/journeys/oman-jebelakhdar-gallery1.jpg,${R2}/journeys/oman-jebelakhdar-gallery2.jpg,${R2}/journeys/oman-jebelakhdar-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 55,
        days: [
          {
            dayNumber: 1,
            title: "Les terrasses de roses et le canyon suspendu",
            titleEn: "The rose terraces and the hanging canyon",
            titleEs: "Las terrazas de rosas y el cañón colgante",
            description:
              "Randonnée le long des terrasses agricoles du Jebel Akhdar jusqu'au canyon suspendu, à flanc de falaise, offrant une vue vertigineuse sur les gorges de deux mille mètres de profondeur.",
            descriptionEn:
              "A hike along the agricultural terraces of Jebel Akhdar to the hanging canyon, set into the cliffside, offering a dizzying view over gorges two thousand metres deep.",
            descriptionEs:
              "Caminata por las terrazas agrícolas del Jebel Akhdar hasta el cañón colgante, adosado al acantilado, con vistas vertiginosas sobre gargantas de dos mil metros de profundidad.",
            image: `${R2}/journeys/oman-jebelakhdar-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Misfat al-Abriyeen et les canaux falaj",
            titleEn: "Misfat al-Abriyeen and the falaj channels",
            titleEs: "Misfat al-Abriyeen y los canales falaj",
            description:
              "Visite du village de Misfat al-Abriyeen, aux maisons de pisé accrochées à la falaise, le long des canaux d'irrigation falaj classés à l'UNESCO qui alimentent les vergers en terrasses.",
            descriptionEn:
              "A visit to the village of Misfat al-Abriyeen, its mud-brick houses clinging to the cliff, along the UNESCO-listed falaj irrigation channels that feed the terraced orchards.",
            descriptionEs:
              "Visita al pueblo de Misfat al-Abriyeen, con sus casas de adobe aferradas al acantilado, siguiendo los canales de riego falaj declarados por la UNESCO que alimentan los huertos en terrazas.",
            image: `${R2}/journeys/oman-jebelakhdar-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "israel",
    tour: {
      name: "Israël : la Galilée et le plateau du Golan",
      nameEn: "Israel: Galilee and the Golan Heights",
      nameEs: "Israel: Galilea y los Altos del Golán",
      slug: "israel-galilee-golan",
      image: `${R2}/journeys/israel-galilee-golan-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Les collines verdoyantes autour du lac où Jésus aurait marché sur les eaux, puis des vignobles à plus de mille mètres d'altitude",
      taglineEn: "The green hills around the lake where Jesus is said to have walked on water, then vineyards over a thousand metres up",
      taglineEs: "Las colinas verdes en torno al lago donde Jesús habría caminado sobre las aguas, y después viñedos a más de mil metros de altitud",
      description:
        "Un voyage dans le nord d'Israël, loin de Jérusalem et de la mer Morte : la Galilée, région verdoyante autour de son lac où se concentrent nombre de lieux évoqués dans les évangiles, puis le plateau du Golan, plateau volcanique annexé en 1981, aujourd'hui planté de vignobles d'altitude et de vergers de pommiers qui profitent d'un climat unique dans la région.",
      descriptionEn:
        "A journey through northern Israel, far from Jerusalem and the Dead Sea: Galilee, a green region around its lake concentrating many sites mentioned in the gospels, then the Golan Heights, a volcanic plateau annexed in 1981, now planted with high-altitude vineyards and apple orchards that benefit from a climate unique in the region.",
      descriptionEs:
        "Un viaje por el norte de Israel, lejos de Jerusalén y del mar Muerto: Galilea, región verde en torno a su lago que concentra numerosos lugares mencionados en los evangelios, y después los Altos del Golán, meseta volcánica anexionada en 1981, hoy plantada de viñedos de altitud y huertos de manzanos que se benefician de un clima único en la región.",
      price: 2600,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | sept a oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,groups,family",
      maxGuests: 6,
      featured: false,
      order: 93,
    },
    chapters: [
      {
        title: "La Galilée et son lac",
        titleEn: "Galilee and its Lake",
        titleEs: "Galilea y su lago",
        intro:
          "Premier chapitre en Galilée, région verdoyante du nord d'Israël organisée autour du lac de Tibériade, aussi appelé mer de Galilée, dont les rives concentrent plusieurs des lieux les plus évoqués des évangiles, de Capharnaüm à Tabgha. Loin de l'aridité du désert de Judée, la région surprend par ses collines couvertes d'oliviers et de vergers, ainsi que par un mode de vie rural rythmé par les kibboutz et moshavim agricoles fondés au XXe siècle.",
        introEn:
          "The first chapter unfolds in Galilee, a green region of northern Israel organised around Lake Tiberias, also known as the Sea of Galilee, whose shores concentrate several of the most-mentioned sites in the gospels, from Capernaum to Tabgha. Far from the aridity of the Judean desert, the region surprises with hills covered in olive trees and orchards, as well as a rural way of life shaped by the agricultural kibbutzim and moshavim founded in the 20th century.",
        introEs:
          "El primer capítulo se desarrolla en Galilea, región verde del norte de Israel organizada en torno al lago de Tiberíades, también llamado mar de Galilea, cuyas orillas concentran varios de los lugares más mencionados en los evangelios, de Cafarnaúm a Tabgha. Lejos de la aridez del desierto de Judea, la región sorprende por sus colinas cubiertas de olivos y huertos, así como por un modo de vida rural marcado por los kibutz y moshavim agrícolas fundados en el siglo XX.",
        galleryImages: `${R2}/journeys/israel-galilee-gallery1.jpg,${R2}/journeys/israel-galilee-gallery2.jpg,${R2}/journeys/israel-galilee-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Navigation sur le lac de Tibériade",
            titleEn: "Sailing on Lake Tiberias",
            titleEs: "Navegación por el lago de Tiberíades",
            description:
              "Sortie en bateau traditionnel sur le lac de Tibériade, visite des sites évangéliques de Capharnaüm et Tabgha sur la rive nord, puis promenade dans la vieille ville de Tibériade.",
            descriptionEn:
              "A traditional boat trip on Lake Tiberias, a visit to the gospel sites of Capernaum and Tabgha on the northern shore, then a stroll through the old town of Tiberias.",
            descriptionEs:
              "Salida en barco tradicional por el lago de Tiberíades, visita a los lugares evangélicos de Cafarnaúm y Tabgha en la orilla norte, y paseo por el casco antiguo de Tiberíades.",
            image: `${R2}/journeys/israel-galilee-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Nazareth et les collines de Galilée",
            titleEn: "Nazareth and the hills of Galilee",
            titleEs: "Nazaret y las colinas de Galilea",
            description:
              "Visite de Nazareth, ville où Jésus aurait grandi, puis randonnée dans les collines environnantes à travers oliveraies et villages druzes perchés.",
            descriptionEn:
              "A visit to Nazareth, the town where Jesus is said to have grown up, then a hike through the surrounding hills across olive groves and perched Druze villages.",
            descriptionEs:
              "Visita a Nazaret, ciudad donde Jesús habría crecido, y caminata por las colinas circundantes entre olivares y pueblos drusos encaramados.",
            image: `${R2}/journeys/israel-galilee-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Le plateau du Golan",
        titleEn: "The Golan Heights",
        titleEs: "Los Altos del Golán",
        intro:
          "Route vers le plateau du Golan, plateau volcanique d'altitude annexé par Israël en 1981 et dont le statut reste disputé internationalement, mais dont le climat frais et les sols basaltiques ont permis le développement inattendu d'une viticulture de qualité depuis les années 1980. Les vergers de pommiers et de cerisiers, les cascades du parc naturel de Yehudiya et les vues sur le mont Hermon enneigé une partie de l'année composent un paysage à part dans la région.",
        introEn:
          "The road to the Golan Heights, a volcanic upland plateau annexed by Israel in 1981 and whose status remains internationally disputed, but whose cool climate and basaltic soils have allowed the unexpected development of quality winemaking since the 1980s. Apple and cherry orchards, the waterfalls of Yehudiya Nature Reserve, and views of Mount Hermon, snow-capped part of the year, make for a landscape apart in the region.",
        introEs:
          "Ruta hacia los Altos del Golán, meseta volcánica de altitud anexionada por Israel en 1981 y cuyo estatus sigue siendo objeto de disputa internacional, pero cuyo clima fresco y suelos basálticos han permitido el inesperado desarrollo de una viticultura de calidad desde la década de 1980. Los huertos de manzanos y cerezos, las cascadas de la reserva natural de Yehudiya y las vistas al monte Hermón, nevado parte del año, componen un paisaje aparte en la región.",
        galleryImages: `${R2}/journeys/israel-golan-gallery1.jpg,${R2}/journeys/israel-golan-gallery2.jpg,${R2}/journeys/israel-golan-gallery3.jpg`,
        mapMarkerX: 65,
        mapMarkerY: 15,
        days: [
          {
            dayNumber: 1,
            title: "Vignobles d'altitude et dégustation",
            titleEn: "High-altitude vineyards and a tasting",
            titleEs: "Viñedos de altitud y degustación",
            description:
              "Visite d'un domaine viticole du plateau du Golan, dégustation de vins produits sur des sols volcaniques à plus de mille mètres d'altitude, avec vue sur les vergers environnants.",
            descriptionEn:
              "A visit to a Golan Heights winery, a tasting of wines produced on volcanic soils over a thousand metres up, with views over the surrounding orchards.",
            descriptionEs:
              "Visita a una bodega de los Altos del Golán, degustación de vinos producidos en suelos volcánicos a más de mil metros de altitud, con vistas a los huertos circundantes.",
            image: `${R2}/journeys/israel-golan-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les cascades de la réserve de Yehudiya",
            titleEn: "The waterfalls of Yehudiya reserve",
            titleEs: "Las cascadas de la reserva de Yehudiya",
            description:
              "Randonnée dans la réserve naturelle de Yehudiya jusqu'aux cascades qui dévalent les gorges basaltiques, avec vue sur le mont Hermon en toile de fond.",
            descriptionEn:
              "A hike in the Yehudiya nature reserve to the waterfalls tumbling through the basalt gorges, with Mount Hermon as a backdrop.",
            descriptionEs:
              "Caminata por la reserva natural de Yehudiya hasta las cascadas que descienden por las gargantas basálticas, con el monte Hermón como telón de fondo.",
            image: `${R2}/journeys/israel-golan-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "arabie-saoudite",
    tour: {
      name: "Arabie saoudite : les montagnes de l'Assir et Rijal Almaa",
      nameEn: "Saudi Arabia: The Asir Mountains and Rijal Almaa",
      nameEs: "Arabia Saudita: las montañas de Asir y Rijal Almaa",
      slug: "arabie-saoudite-assir-rijalalmaa",
      image: `${R2}/journeys/arabie-assir-rijalalmaa-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une région montagneuse et brumeuse à l'opposé du désert, puis un village aux façades peintes de motifs géométriques ancestraux",
      taglineEn: "A misty mountain region unlike the desert, then a village with facades painted in ancestral geometric patterns",
      taglineEs: "Una región montañosa y brumosa opuesta al desierto, y después un pueblo de fachadas pintadas con motivos geométricos ancestrales",
      description:
        "Un voyage dans le sud-ouest de l'Arabie saoudite, à l'opposé de l'image désertique du pays : les montagnes de l'Assir, qui culminent à près de trois mille mètres et bénéficient de la mousson indienne pour un climat frais et brumeux unique dans le royaume, puis Rijal Almaa, village-musée aux maisons de pierre ornées de motifs géométriques peints selon une tradition féminine appelée al-qatt al-asiri, classée par l'UNESCO.",
      descriptionEn:
        "A journey through south-western Saudi Arabia, the opposite of the country's desert image: the Asir Mountains, rising to nearly three thousand metres and benefiting from the Indian monsoon for a cool, misty climate unique in the kingdom, then Rijal Almaa, a museum-village of stone houses decorated with geometric patterns painted according to a women's tradition called al-qatt al-asiri, UNESCO-listed.",
      descriptionEs:
        "Un viaje por el suroeste de Arabia Saudita, lo opuesto a la imagen desértica del país: las montañas de Asir, que se elevan a casi tres mil metros y se benefician del monzón indio para un clima fresco y brumoso único en el reino, y después Rijal Almaa, pueblo-museo de casas de piedra decoradas con motivos geométricos pintados según una tradición femenina llamada al-qatt al-asiri, declarada por la UNESCO.",
      price: 2900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 6,
      durationUnit: "nights",
      duration: "6 nuits",
      durationEn: "6 nights",
      durationEs: "6 noches",
      whenLabel: "Mars à mai | Sept à nov",
      whenLabelEn: "March to May | Sept to Nov",
      whenLabelEs: "Marzo a mayo | sept a nov",
      bestMonths: "march,april,may,september,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 94,
    },
    chapters: [
      {
        title: "Abha et les hauteurs de l'Assir",
        titleEn: "Abha and the Asir Highlands",
        titleEs: "Abha y las alturas de Asir",
        intro:
          "Premier chapitre à Abha, capitale de la province de l'Assir perchée à plus de deux mille mètres d'altitude, dont le climat tempéré en fait une destination d'été prisée des Saoudiens eux-mêmes, à rebours de l'image désertique du royaume. Les nappes de brouillard qui enveloppent régulièrement les sommets, portées par la mousson indienne qui atteint cette pointe sud-ouest de la péninsule, nourrissent une végétation de genévriers qu'on ne trouve nulle part ailleurs dans le pays.",
        introEn:
          "The first chapter unfolds in Abha, capital of the Asir province perched over two thousand metres up, whose temperate climate makes it a popular summer destination for Saudis themselves, at odds with the kingdom's desert image. The banks of fog that regularly envelop the summits, carried by the Indian monsoon reaching this south-western tip of the peninsula, nourish a juniper forest found nowhere else in the country.",
        introEs:
          "El primer capítulo se desarrolla en Abha, capital de la provincia de Asir, encaramada a más de dos mil metros de altitud, cuyo clima templado la convierte en un destino veraniego popular entre los propios saudíes, en contraste con la imagen desértica del reino. Los bancos de niebla que envuelven regularmente las cumbres, arrastrados por el monzón indio que alcanza esta punta suroccidental de la península, nutren un bosque de enebros que no se encuentra en ningún otro lugar del país.",
        galleryImages: `${R2}/journeys/arabie-abha-gallery1.jpg,${R2}/journeys/arabie-abha-gallery2.jpg,${R2}/journeys/arabie-abha-gallery3.jpg`,
        mapMarkerX: 30,
        mapMarkerY: 70,
        days: [
          {
            dayNumber: 1,
            title: "Le téléphérique du Jebel Souda",
            titleEn: "The Jebel Soudah cable car",
            titleEs: "El teleférico del Jebel Souda",
            description:
              "Ascension en téléphérique jusqu'au sommet du Jebel Souda, point culminant du royaume, offrant une vue sur les nappes de brouillard qui s'accrochent aux versants boisés de genévriers.",
            descriptionEn:
              "A cable car ascent to the summit of Jebel Soudah, the kingdom's highest point, offering views over the fog banks clinging to the juniper-covered slopes.",
            descriptionEs:
              "Ascenso en teleférico hasta la cima del Jebel Souda, punto más alto del reino, con vistas a los bancos de niebla que se aferran a las laderas cubiertas de enebros.",
            image: `${R2}/journeys/arabie-abha-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le marché traditionnel et les villages de terrasses",
            titleEn: "The traditional market and terraced villages",
            titleEs: "El mercado tradicional y los pueblos en terrazas",
            description:
              "Visite du marché traditionnel d'Abha, puis route à travers les villages agricoles en terrasses de la région, où l'orge et le café sont cultivés à flanc de montagne depuis des siècles.",
            descriptionEn:
              "A visit to Abha's traditional market, then a drive through the region's terraced farming villages, where barley and coffee have been grown on mountainsides for centuries.",
            descriptionEs:
              "Visita al mercado tradicional de Abha, y ruta por los pueblos agrícolas en terrazas de la región, donde la cebada y el café se cultivan en laderas de montaña desde hace siglos.",
            image: `${R2}/journeys/arabie-abha-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Rijal Almaa, le village aux façades peintes",
        titleEn: "Rijal Almaa, the Painted-Facade Village",
        titleEs: "Rijal Almaa, el pueblo de las fachadas pintadas",
        intro:
          "Route vers Rijal Almaa, village-forteresse de plus de soixante tours de pierre et de bois construites sur plusieurs étages à flanc de montagne, aujourd'hui préservé comme musée à ciel ouvert de l'architecture traditionnelle de l'Assir. Les façades intérieures de nombreuses maisons portent les motifs géométriques colorés de l'al-qatt al-asiri, art pictural transmis de mère en fille depuis des générations et inscrit au patrimoine culturel immatériel de l'UNESCO en 2017.",
        introEn:
          "The road to Rijal Almaa, a fortress-village of over sixty stone-and-wood towers built across several storeys on a mountainside, now preserved as an open-air museum of traditional Asir architecture. The interior facades of many houses carry the colourful geometric patterns of al-qatt al-asiri, a pictorial art passed down from mother to daughter for generations and inscribed on UNESCO's intangible cultural heritage list in 2017.",
        introEs:
          "Ruta hacia Rijal Almaa, pueblo-fortaleza de más de sesenta torres de piedra y madera construidas en varios pisos en la ladera de la montaña, hoy conservado como museo al aire libre de la arquitectura tradicional de Asir. Las fachadas interiores de muchas casas lucen los coloridos motivos geométricos del al-qatt al-asiri, arte pictórico transmitido de madre a hija durante generaciones e inscrito en el patrimonio cultural inmaterial de la UNESCO en 2017.",
        galleryImages: `${R2}/journeys/arabie-rijalalmaa-gallery1.jpg,${R2}/journeys/arabie-rijalalmaa-gallery2.jpg,${R2}/journeys/arabie-rijalalmaa-gallery3.jpg`,
        mapMarkerX: 35,
        mapMarkerY: 78,
        days: [
          {
            dayNumber: 1,
            title: "Les tours de pierre du village-forteresse",
            titleEn: "The stone towers of the fortress-village",
            titleEs: "Las torres de piedra del pueblo-fortaleza",
            description:
              "Visite guidée des tours de pierre et de bois de Rijal Almaa, dont certaines comptent jusqu'à huit étages, et du musée local retraçant l'histoire du village comme carrefour caravanier.",
            descriptionEn:
              "A guided visit to the stone-and-wood towers of Rijal Almaa, some as tall as eight storeys, and the local museum tracing the village's history as a caravan crossroads.",
            descriptionEs:
              "Visita guiada a las torres de piedra y madera de Rijal Almaa, algunas de hasta ocho pisos, y al museo local que narra la historia del pueblo como cruce de caravanas.",
            image: `${R2}/journeys/arabie-rijalalmaa-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Initiation à l'art de l'al-qatt al-asiri",
            titleEn: "An introduction to al-qatt al-asiri art",
            titleEs: "Iniciación al arte del al-qatt al-asiri",
            description:
              "Atelier avec une artiste locale d'al-qatt al-asiri, art pictural féminin aux motifs géométriques colorés transmis de mère en fille, avant une marche dans les ruelles du village.",
            descriptionEn:
              "A workshop with a local al-qatt al-asiri artist, a women's pictorial art of colourful geometric patterns passed down from mother to daughter, before a walk through the village lanes.",
            descriptionEs:
              "Taller con una artista local de al-qatt al-asiri, arte pictórico femenino de motivos geométricos coloridos transmitido de madre a hija, antes de un paseo por las callejuelas del pueblo.",
            image: `${R2}/journeys/arabie-rijalalmaa-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "qatar",
    tour: {
      name: "Qatar : Al Zubarah et les mangroves d'Al Thakira",
      nameEn: "Qatar: Al Zubarah and the Al Thakira Mangroves",
      nameEs: "Catar: Al Zubarah y los manglares de Al Thakira",
      slug: "qatar-zubarah-thakira",
      image: `${R2}/journeys/qatar-zubarah-thakira-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une cité marchande fantôme classée à l'UNESCO, puis les seules mangroves naturelles de la péninsule qatarie",
      taglineEn: "A UNESCO-listed ghost trading city, then the only natural mangroves on the Qatari peninsula",
      taglineEs: "Una ciudad comercial fantasma declarada por la UNESCO, y después los únicos manglares naturales de la península catarí",
      description:
        "Un voyage dans le nord du Qatar, loin des tours de Doha : Al Zubarah, cité marchande fortifiée du XVIIIe siècle abandonnée après des décennies de conflits régionaux et aujourd'hui site archéologique classé à l'UNESCO, l'un des mieux préservés du Golfe, puis les mangroves d'Al Thakira, seule forêt de palétuviers naturelle du pays, explorée en kayak à travers un dédale de chenaux entre mer et désert.",
      descriptionEn:
        "A journey through northern Qatar, far from Doha's towers: Al Zubarah, a fortified 18th-century trading city abandoned after decades of regional conflict and now a UNESCO-listed archaeological site, one of the best-preserved in the Gulf, then the Al Thakira mangroves, the country's only natural mangrove forest, explored by kayak through a maze of channels between sea and desert.",
      descriptionEs:
        "Un viaje por el norte de Catar, lejos de las torres de Doha: Al Zubarah, ciudad comercial amurallada del siglo XVIII abandonada tras décadas de conflictos regionales y hoy yacimiento arqueológico declarado por la UNESCO, uno de los mejor conservados del Golfo, y después los manglares de Al Thakira, único bosque de manglares natural del país, explorado en kayak por un laberinto de canales entre el mar y el desierto.",
      price: 2300,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 95,
    },
    chapters: [
      {
        title: "Al Zubarah, la cité marchande fantôme",
        titleEn: "Al Zubarah, the Ghost Trading City",
        titleEs: "Al Zubarah, la ciudad comercial fantasma",
        intro:
          "Premier chapitre à Al Zubarah, fondée au XVIIIe siècle par des marchands venus du Koweït et rapidement devenue l'une des plus importantes places commerçantes du Golfe grâce au commerce de la perle, avant d'être détruite puis progressivement abandonnée au tournant du XXe siècle. Le site archéologique, l'un des mieux conservés de la péninsule Arabique, révèle le plan complet d'une ville marchande fortifiée avec ses souks, ses habitations et son fort restauré qui domine encore les environs.",
        introEn:
          "The first chapter unfolds at Al Zubarah, founded in the 18th century by merchants from Kuwait and quickly becoming one of the Gulf's most important trading posts thanks to the pearl trade, before being destroyed and gradually abandoned at the turn of the 20th century. The archaeological site, one of the best preserved on the Arabian Peninsula, reveals the complete layout of a fortified merchant city with its souks, dwellings, and restored fort still overlooking the surroundings.",
        introEs:
          "El primer capítulo se desarrolla en Al Zubarah, fundada en el siglo XVIII por comerciantes llegados de Kuwait y convertida rápidamente en una de las plazas comerciales más importantes del Golfo gracias al comercio de perlas, antes de ser destruida y abandonada progresivamente a comienzos del siglo XX. El yacimiento arqueológico, uno de los mejor conservados de la península arábiga, revela el trazado completo de una ciudad mercantil amurallada con sus zocos, viviendas y un fuerte restaurado que todavía domina los alrededores.",
        galleryImages: `${R2}/journeys/qatar-zubarah-gallery1.jpg,${R2}/journeys/qatar-zubarah-gallery2.jpg,${R2}/journeys/qatar-zubarah-gallery3.jpg`,
        mapMarkerX: 20,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Le fort et les vestiges de la cité marchande",
            titleEn: "The fort and the trading city's remains",
            titleEs: "El fuerte y los vestigios de la ciudad comercial",
            description:
              "Visite du fort restauré d'Al Zubarah puis marche à travers les fondations dégagées des souks et des maisons de marchands, avec un arrêt au centre d'interprétation du site.",
            descriptionEn:
              "A visit to the restored Al Zubarah fort then a walk through the excavated foundations of the souks and merchant houses, with a stop at the site's interpretation centre.",
            descriptionEs:
              "Visita al fuerte restaurado de Al Zubarah y paseo por los cimientos excavados de los zocos y las casas de comerciantes, con parada en el centro de interpretación del yacimiento.",
            image: `${R2}/journeys/qatar-zubarah-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Fort Barzan et le désert du nord",
            titleEn: "Barzan Towers and the northern desert",
            titleEs: "Las torres de Barzan y el desierto del norte",
            description:
              "Visite des tours de guet de Barzan, construites pour surveiller les caravanes et la côte, puis excursion dans le désert du nord du pays à bord d'un 4x4.",
            descriptionEn:
              "A visit to the Barzan watchtowers, built to monitor caravans and the coast, then an excursion into the country's northern desert aboard a 4x4.",
            descriptionEs:
              "Visita a las torres de vigilancia de Barzan, construidas para vigilar las caravanas y la costa, y excursión por el desierto del norte del país a bordo de un 4x4.",
            image: `${R2}/journeys/qatar-zubarah-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Les mangroves d'Al Thakira",
        titleEn: "The Al Thakira Mangroves",
        titleEs: "Los manglares de Al Thakira",
        intro:
          "Route vers Al Thakira, sur la côte nord-est du Qatar, où s'étend la seule forêt de mangrove naturelle du pays, un écosystème rare de palétuviers gris qui filtrent l'eau salée et abritent hérons, aigrettes et crabes violonistes. Le contraste entre ce dédale vert de racines aériennes et le désert environnant, visible en quelques minutes de route, illustre à lui seul la diversité inattendue des paysages qataris.",
        introEn:
          "The road to Al Thakira, on Qatar's north-eastern coast, home to the country's only natural mangrove forest, a rare ecosystem of grey mangroves that filter salt water and shelter herons, egrets, and fiddler crabs. The contrast between this green maze of aerial roots and the surrounding desert, visible within a few minutes' drive, illustrates on its own the unexpected diversity of Qatari landscapes.",
        introEs:
          "Ruta hacia Al Thakira, en la costa noreste de Catar, donde se extiende el único bosque de manglares natural del país, un ecosistema poco común de mangles grises que filtran el agua salada y albergan garzas, garcetas y cangrejos violinistas. El contraste entre este laberinto verde de raíces aéreas y el desierto circundante, visible a pocos minutos en coche, ilustra por sí solo la inesperada diversidad de los paisajes cataríes.",
        galleryImages: `${R2}/journeys/qatar-thakira-gallery1.jpg,${R2}/journeys/qatar-thakira-gallery2.jpg,${R2}/journeys/qatar-thakira-gallery3.jpg`,
        mapMarkerX: 60,
        mapMarkerY: 20,
        days: [
          {
            dayNumber: 1,
            title: "Kayak dans les mangroves d'Al Thakira",
            titleEn: "Kayaking through the Al Thakira mangroves",
            titleEs: "Kayak por los manglares de Al Thakira",
            description:
              "Sortie en kayak à travers les chenaux étroits des mangroves d'Al Thakira, à la recherche de hérons et de crabes violonistes, dans le seul écosystème de ce type du pays.",
            descriptionEn:
              "A kayak outing through the narrow channels of the Al Thakira mangroves, in search of herons and fiddler crabs, in the country's only ecosystem of its kind.",
            descriptionEs:
              "Salida en kayak por los estrechos canales de los manglares de Al Thakira, en busca de garzas y cangrejos violinistas, en el único ecosistema de este tipo del país.",
            image: `${R2}/journeys/qatar-thakira-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "La corniche d'Al Khor et le marché aux poissons",
            titleEn: "The Al Khor corniche and fish market",
            titleEs: "La corniche de Al Khor y el mercado de pescado",
            description:
              "Promenade sur la corniche de la ville portuaire d'Al Khor, visite du marché aux poissons matinal où arrivent encore les prises des pêcheurs locaux, avant le retour vers Doha.",
            descriptionEn:
              "A stroll along the corniche of the port town of Al Khor, a visit to the morning fish market where local fishermen's catches still arrive, before the return to Doha.",
            descriptionEs:
              "Paseo por la corniche de la ciudad portuaria de Al Khor, visita al mercado matutino de pescado donde todavía llegan las capturas de los pescadores locales, antes del regreso a Doha.",
            image: `${R2}/journeys/qatar-thakira-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "liban",
    tour: {
      name: "Liban : les cèdres de Dieu et la vallée de la Qadisha",
      nameEn: "Lebanon: The Cedars of God and the Qadisha Valley",
      nameEs: "Líbano: los cedros de Dios y el valle de Qadisha",
      slug: "liban-cedres-qadisha",
      image: `${R2}/journeys/liban-cedres-qadisha-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Une forêt de cèdres millénaires citée dans la Bible, puis une vallée sacrée creusée dans la montagne",
      taglineEn: "A forest of millennia-old cedars mentioned in the Bible, then a sacred valley carved into the mountain",
      taglineEs: "Un bosque de cedros milenarios citado en la Biblia, y después un valle sagrado excavado en la montaña",
      description:
        "Un voyage dans le nord montagneux du Liban, loin de Beyrouth et de Baalbek : la forêt des Cèdres de Dieu, dernier vestige des forêts de cèdres qui couvraient jadis tout le mont Liban et qui fournirent leur bois aux temples de l'Égypte antique, puis la vallée de la Qadisha, gorge encaissée classée à l'UNESCO où des monastères et ermitages chrétiens se sont accrochés à la roche depuis le début du christianisme.",
      descriptionEn:
        "A journey through mountainous northern Lebanon, far from Beirut and Baalbek: the Cedars of God forest, the last remnant of the cedar forests that once covered all of Mount Lebanon and supplied timber to the temples of ancient Egypt, then the Qadisha Valley, a deep gorge listed by UNESCO where Christian monasteries and hermitages have clung to the rock since the earliest days of Christianity.",
      descriptionEs:
        "Un viaje por el montañoso norte del Líbano, lejos de Beirut y Baalbek: el bosque de los Cedros de Dios, último vestigio de los bosques de cedros que antaño cubrían todo el monte Líbano y suministraron madera a los templos del antiguo Egipto, y después el valle de Qadisha, garganta encajada declarada por la UNESCO donde monasterios y ermitas cristianas se han aferrado a la roca desde los inicios del cristianismo.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mai à oct",
      whenLabelEn: "May to Oct",
      whenLabelEs: "May a oct",
      bestMonths: "may,june,july,august,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 96,
    },
    chapters: [
      {
        title: "La forêt des Cèdres de Dieu",
        titleEn: "The Cedars of God Forest",
        titleEs: "El bosque de los Cedros de Dios",
        intro:
          "Premier chapitre dans la forêt des Cèdres de Dieu, dernier vestige protégé des immenses forêts de cèdres du Liban qui couvraient jadis toute la montagne et dont le bois, réputé imputrescible, servit à construire les temples égyptiens et le premier Temple de Jérusalem. Certains arbres de ce bosquet classé à l'UNESCO sont âgés de plus de mille ans et culminent à plus de trente-cinq mètres, symbole national figurant jusque sur le drapeau du pays.",
        introEn:
          "The first chapter unfolds in the Cedars of God forest, the last protected remnant of the immense cedar forests of Lebanon that once covered the entire mountain and whose wood, famed for resisting rot, was used to build Egyptian temples and the First Temple of Jerusalem. Some trees in this UNESCO-listed grove are over a thousand years old and rise more than thirty-five metres, a national symbol that even appears on the country's flag.",
        introEs:
          "El primer capítulo se desarrolla en el bosque de los Cedros de Dios, último vestigio protegido de los inmensos bosques de cedros del Líbano que antaño cubrían toda la montaña y cuya madera, célebre por ser imputrescible, sirvió para construir los templos egipcios y el primer Templo de Jerusalén. Algunos árboles de esta arboleda declarada por la UNESCO tienen más de mil años y alcanzan más de treinta y cinco metros, símbolo nacional presente incluso en la bandera del país.",
        galleryImages: `${R2}/journeys/liban-cedres-gallery1.jpg,${R2}/journeys/liban-cedres-gallery2.jpg,${R2}/journeys/liban-cedres-gallery3.jpg`,
        mapMarkerX: 55,
        mapMarkerY: 25,
        days: [
          {
            dayNumber: 1,
            title: "Marche parmi les cèdres millénaires",
            titleEn: "A walk among the millennia-old cedars",
            titleEs: "Caminata entre los cedros milenarios",
            description:
              "Promenade dans le bosquet protégé des Cèdres de Dieu à la découverte des arbres les plus anciens, dont certains dépasseraient mille ans, avec vue sur les sommets environnants.",
            descriptionEn:
              "A walk through the protected grove of the Cedars of God to discover the oldest trees, some said to be over a thousand years old, with views over the surrounding peaks.",
            descriptionEs:
              "Paseo por la arboleda protegida de los Cedros de Dios para descubrir los árboles más antiguos, algunos de los cuales superarían los mil años, con vistas a las cumbres circundantes.",
            image: `${R2}/journeys/liban-cedres-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le village de montagne de Bcharré",
            titleEn: "The mountain village of Bcharré",
            titleEs: "El pueblo de montaña de Bcharré",
            description:
              "Visite de Bcharré, village natal du poète Khalil Gibran perché face à la vallée de la Qadisha, et de son musée aménagé dans un ancien monastère troglodyte.",
            descriptionEn:
              "A visit to Bcharré, the birthplace of poet Khalil Gibran perched facing the Qadisha Valley, and its museum housed in a former cave monastery.",
            descriptionEs:
              "Visita a Bcharré, pueblo natal del poeta Khalil Gibran encaramado frente al valle de Qadisha, y a su museo instalado en un antiguo monasterio rupestre.",
            image: `${R2}/journeys/liban-cedres-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "La vallée sacrée de la Qadisha",
        titleEn: "The Sacred Qadisha Valley",
        titleEs: "El valle sagrado de Qadisha",
        intro:
          "Descente vers la vallée de la Qadisha, gorge profonde creusée dans le mont Liban dont le nom signifie « sainte » en araméen, refuge pour des communautés monastiques chrétiennes depuis les tout premiers siècles du christianisme. Monastères et ermitages, certains encore habités par des moines ou des ermites, s'accrochent aux falaises abruptes au-dessus d'une rivière qui a sculpté ce paysage classé à l'UNESCO pour son importance à la fois naturelle et spirituelle.",
        introEn:
          "A descent into the Qadisha Valley, a deep gorge carved into Mount Lebanon whose name means \"holy\" in Aramaic, a refuge for Christian monastic communities since the earliest centuries of Christianity. Monasteries and hermitages, some still inhabited by monks or hermits, cling to the steep cliffs above a river that carved this landscape, UNESCO-listed for its combined natural and spiritual significance.",
        introEs:
          "Descenso hacia el valle de Qadisha, profunda garganta excavada en el monte Líbano cuyo nombre significa «santa» en arameo, refugio de comunidades monásticas cristianas desde los primeros siglos del cristianismo. Monasterios y ermitas, algunos todavía habitados por monjes o ermitaños, se aferran a los acantilados escarpados sobre un río que esculpió este paisaje, declarado por la UNESCO por su importancia tanto natural como espiritual.",
        galleryImages: `${R2}/journeys/liban-qadisha-gallery1.jpg,${R2}/journeys/liban-qadisha-gallery2.jpg,${R2}/journeys/liban-qadisha-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 45,
        days: [
          {
            dayNumber: 1,
            title: "Randonnée jusqu'au monastère de Deir Qannoubine",
            titleEn: "A hike to Deir Qannoubine Monastery",
            titleEs: "Caminata hasta el monasterio de Deir Qannoubine",
            description:
              "Randonnée le long des sentiers escarpés de la vallée jusqu'au monastère de Deir Qannoubine, l'un des plus anciens du Liban, autrefois siège du patriarcat maronite.",
            descriptionEn:
              "A hike along the valley's steep trails to Deir Qannoubine Monastery, one of the oldest in Lebanon, once the seat of the Maronite patriarchate.",
            descriptionEs:
              "Caminata por los empinados senderos del valle hasta el monasterio de Deir Qannoubine, uno de los más antiguos del Líbano, antigua sede del patriarcado maronita.",
            image: `${R2}/journeys/liban-qadisha-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les ermitages troglodytes et le fond de la vallée",
            titleEn: "The cave hermitages and the valley floor",
            titleEs: "Las ermitas rupestres y el fondo del valle",
            description:
              "Descente jusqu'au fond de la vallée pour visiter des ermitages troglodytes creusés dans la falaise, certains encore habités, le long de la rivière Qadisha.",
            descriptionEn:
              "A descent to the valley floor to visit cave hermitages carved into the cliff, some still inhabited, along the Qadisha River.",
            descriptionEs:
              "Descenso hasta el fondo del valle para visitar ermitas rupestres excavadas en el acantilado, algunas todavía habitadas, a orillas del río Qadisha.",
            image: `${R2}/journeys/liban-qadisha-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
  {
    destinationSlug: "bahrein",
    tour: {
      name: "Bahreïn : l'Arbre de Vie et les tumulus d'A'ali",
      nameEn: "Bahrain: The Tree of Life and the A'ali Burial Mounds",
      nameEs: "Baréin: el Árbol de la Vida y los túmulos de A'ali",
      slug: "bahrein-arbre-vie-aali",
      image: `${R2}/journeys/bahrein-arbrevie-aali-hero.jpg`,
      format: "journey",
      mapImage: "",
      tagline: "Un arbre solitaire vieux de plusieurs siècles au milieu du désert, puis l'un des plus grands cimetières préhistoriques au monde",
      taglineEn: "A centuries-old solitary tree in the middle of the desert, then one of the largest prehistoric cemeteries in the world",
      taglineEs: "Un árbol solitario centenario en pleno desierto, y después uno de los mayores cementerios prehistóricos del mundo",
      description:
        "Un voyage dans le Bahreïn rural, loin de Manama et de son front de mer : l'Arbre de Vie, acacia solitaire qui prospère depuis plusieurs siècles au milieu d'un désert sans point d'eau visible, dont la survie reste un mystère non résolu, puis les tumulus d'A'ali, l'une des plus grandes nécropoles préhistoriques au monde avec des dizaines de milliers de sépultures datant de la civilisation de Dilmoun.",
      descriptionEn:
        "A journey through rural Bahrain, far from Manama and its waterfront: the Tree of Life, a solitary acacia that has thrived for centuries in the middle of a desert with no visible water source, its survival still an unsolved mystery, then the A'ali burial mounds, one of the largest prehistoric necropolises in the world with tens of thousands of graves dating from the Dilmun civilisation.",
      descriptionEs:
        "Un viaje por el Baréin rural, lejos de Manama y su paseo marítimo: el Árbol de la Vida, acacia solitaria que prospera desde hace siglos en pleno desierto sin fuente de agua visible, cuya supervivencia sigue siendo un misterio sin resolver, y después los túmulos de A'ali, una de las mayores necrópolis prehistóricas del mundo con decenas de miles de sepulturas de la civilización de Dilmún.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 97,
    },
    chapters: [
      {
        title: "L'Arbre de Vie",
        titleEn: "The Tree of Life",
        titleEs: "El Árbol de la Vida",
        intro:
          "Premier chapitre auprès de l'Arbre de Vie, acacia solitaire qui prospère depuis plus de quatre siècles au milieu d'une étendue désertique dépourvue de tout point d'eau visible à des kilomètres à la ronde, un mystère que ni les botanistes ni les légendes locales n'ont jamais pleinement résolu. Certains y voient l'emplacement biblique du jardin d'Éden, d'autres l'attribuent à des racines profondes puisant dans une nappe phréatique invisible, mais l'arbre reste, envers et contre tout, l'un des symboles les plus photographiés du royaume.",
        introEn:
          "The first chapter is spent by the Tree of Life, a solitary acacia that has thrived for over four centuries amid a desert expanse with no visible water source for kilometres around, a mystery neither botanists nor local legend have ever fully solved. Some see it as the biblical location of the Garden of Eden, others attribute it to deep roots tapping an invisible aquifer, but the tree remains, against all odds, one of the kingdom's most photographed symbols.",
        introEs:
          "El primer capítulo transcurre junto al Árbol de la Vida, acacia solitaria que prospera desde hace más de cuatro siglos en medio de una extensión desértica sin fuente de agua visible en kilómetros a la redonda, un misterio que ni los botánicos ni la leyenda local han resuelto del todo. Algunos ven en él el emplazamiento bíblico del jardín del Edén, otros lo atribuyen a raíces profundas que alcanzan un acuífero invisible, pero el árbol sigue en pie, contra todo pronóstico, como uno de los símbolos más fotografiados del reino.",
        galleryImages: `${R2}/journeys/bahrein-arbrevie-gallery1.jpg,${R2}/journeys/bahrein-arbrevie-gallery2.jpg,${R2}/journeys/bahrein-arbrevie-gallery3.jpg`,
        mapMarkerX: 45,
        mapMarkerY: 60,
        days: [
          {
            dayNumber: 1,
            title: "L'Arbre de Vie au coucher du soleil",
            titleEn: "The Tree of Life at sunset",
            titleEs: "El Árbol de la Vida al atardecer",
            description:
              "Excursion dans le désert du sud du Bahreïn jusqu'à l'Arbre de Vie, avec un temps calme au coucher du soleil pour observer ce mesquite solitaire qui prospère sans point d'eau apparent.",
            descriptionEn:
              "An excursion into southern Bahrain's desert to the Tree of Life, with quiet time at sunset to observe this solitary mesquite thriving with no apparent water source.",
            descriptionEs:
              "Excursión por el desierto del sur de Baréin hasta el Árbol de la Vida, con tiempo tranquilo al atardecer para observar este mezquite solitario que prospera sin fuente de agua aparente.",
            image: `${R2}/journeys/bahrein-arbrevie-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Le champ pétrolier et les puits historiques",
            titleEn: "The oil field and historic wells",
            titleEs: "El campo petrolero y los pozos históricos",
            description:
              "Visite du site du premier puits de pétrole du Golfe, foré en 1932 à proximité, et du petit musée pétrolier qui retrace la découverte qui transforma l'économie du royaume.",
            descriptionEn:
              "A visit to the site of the Gulf's first oil well, drilled in 1932 nearby, and the small oil museum tracing the discovery that transformed the kingdom's economy.",
            descriptionEs:
              "Visita al lugar del primer pozo petrolero del Golfo, perforado en 1932 cerca de allí, y al pequeño museo del petróleo que narra el descubrimiento que transformó la economía del reino.",
            image: `${R2}/journeys/bahrein-arbrevie-day2.jpg`,
            images: "",
          },
        ],
      },
      {
        title: "Les tumulus d'A'ali",
        titleEn: "The A'ali Burial Mounds",
        titleEs: "Los túmulos de A'ali",
        intro:
          "Route vers A'ali, qui abrite l'une des plus grandes concentrations de tumulus funéraires préhistoriques au monde, avec des dizaines de milliers de sépultures en dôme datant de la civilisation de Dilmoun, florissante puissance commerciale du Golfe il y a plus de quatre mille ans. Certains tumulus royaux, réservés à l'élite de l'époque, atteignent quinze mètres de haut et sont visibles depuis la route, tandis que des ateliers de potiers installés à leurs pieds perpétuent un artisanat local vieux de plusieurs générations.",
        introEn:
          "The road to A'ali, home to one of the largest concentrations of prehistoric burial mounds in the world, with tens of thousands of dome-shaped graves dating from the Dilmun civilisation, a flourishing Gulf trading power over four thousand years ago. Some royal mounds, reserved for the era's elite, reach fifteen metres in height and are visible from the road, while potters' workshops set up at their base carry on a local craft several generations old.",
        introEs:
          "Ruta hacia A'ali, que alberga una de las mayores concentraciones de túmulos funerarios prehistóricos del mundo, con decenas de miles de sepulturas abovedadas de la civilización de Dilmún, floreciente potencia comercial del Golfo hace más de cuatro mil años. Algunos túmulos reales, reservados a la élite de la época, alcanzan quince metros de altura y son visibles desde la carretera, mientras que talleres de alfareros instalados a sus pies perpetúan un artesanado local de varias generaciones.",
        galleryImages: `${R2}/journeys/bahrein-aali-gallery1.jpg,${R2}/journeys/bahrein-aali-gallery2.jpg,${R2}/journeys/bahrein-aali-gallery3.jpg`,
        mapMarkerX: 50,
        mapMarkerY: 40,
        days: [
          {
            dayNumber: 1,
            title: "Les tumulus royaux de la civilisation de Dilmoun",
            titleEn: "The royal mounds of the Dilmun civilisation",
            titleEs: "Los túmulos reales de la civilización de Dilmún",
            description:
              "Visite des tumulus royaux d'A'ali, parmi les plus hauts de la nécropole, et du centre d'interprétation retraçant la civilisation de Dilmoun, puissance commerciale du Golfe il y a plus de quatre mille ans.",
            descriptionEn:
              "A visit to the royal mounds of A'ali, among the tallest in the necropolis, and the interpretation centre tracing the Dilmun civilisation, a Gulf trading power over four thousand years ago.",
            descriptionEs:
              "Visita a los túmulos reales de A'ali, entre los más altos de la necrópolis, y al centro de interpretación que narra la civilización de Dilmún, potencia comercial del Golfo hace más de cuatro mil años.",
            image: `${R2}/journeys/bahrein-aali-day1.jpg`,
            images: "",
          },
          {
            dayNumber: 2,
            title: "Les ateliers de potiers d'A'ali",
            titleEn: "The potters' workshops of A'ali",
            titleEs: "Los talleres de alfareros de A'ali",
            description:
              "Visite des ateliers de potiers installés au pied des tumulus, où se perpétue un artisanat familial transmis depuis plusieurs générations, avec démonstration au tour.",
            descriptionEn:
              "A visit to the potters' workshops set up at the foot of the mounds, where a family craft passed down through several generations continues, with a wheel-throwing demonstration.",
            descriptionEs:
              "Visita a los talleres de alfareros instalados al pie de los túmulos, donde perdura un artesanado familiar transmitido durante varias generaciones, con demostración al torno.",
            image: `${R2}/journeys/bahrein-aali-day2.jpg`,
            images: "",
          },
        ],
      },
    ],
  },
];

const standardTrips: NewWorldTrip[] = [
  {
    destinationSlug: "emirats-arabes-unis",
    tour: {
      name: "Émirats arabes unis : Abu Dhabi, mosquées et musées",
      nameEn: "United Arab Emirates: Abu Dhabi, Mosques and Museums",
      nameEs: "Emiratos Árabes Unidos: Abu Dabi, mezquitas y museos",
      slug: "emirats-arabes-unis-abu-dhabi-culture",
      image: `${R2}/tours/emirats-arabes-unis-abu-dhabi-culture.jpg`,
      images: `${R2}/trips/emirats-abudhabi-gallery-1.jpg,${R2}/trips/emirats-abudhabi-gallery-2.jpg,${R2}/trips/emirats-abudhabi-gallery-3.jpg,${R2}/trips/emirats-abudhabi-gallery-4.jpg,${R2}/trips/emirats-abudhabi-gallery-5.jpg,${R2}/trips/emirats-abudhabi-gallery-6.jpg`,
      tagline: "La capitale plus posée des Émirats, entre l'une des plus grandes mosquées du monde et un musée signé Jean Nouvel",
      taglineEn: "The Emirates' more measured capital, between one of the world's largest mosques and a museum designed by Jean Nouvel",
      taglineEs: "La capital más sosegada de los Emiratos, entre una de las mezquitas más grandes del mundo y un museo firmado por Jean Nouvel",
      description:
        "Abu Dhabi, capitale politique des Émirats souvent éclipsée par Dubaï dans l'imaginaire touristique, offre un visage plus posé et culturel du pays. La Grande Mosquée Cheikh Zayed, l'une des plus vastes au monde avec ses quatre-vingt-deux dômes et son tapis persan tissé d'une seule pièce, et le Louvre Abu Dhabi, coiffé d'une immense coupole ajourée signée Jean Nouvel qui projette une pluie de lumière filtrée, en sont les deux symboles les plus marquants.",
      descriptionEn:
        "Abu Dhabi, the Emirates' political capital often overshadowed by Dubai in the tourist imagination, offers a more measured, cultural face of the country. The Sheikh Zayed Grand Mosque, one of the largest in the world with its eighty-two domes and a Persian carpet woven in a single piece, and the Louvre Abu Dhabi, capped by a vast perforated dome designed by Jean Nouvel that casts a rain of filtered light, are its two most striking symbols.",
      descriptionEs:
        "Abu Dabi, capital política de los Emiratos a menudo eclipsada por Dubái en el imaginario turístico, ofrece una cara más sosegada y cultural del país. La Gran Mezquita Sheikh Zayed, una de las más grandes del mundo con sus ochenta y dos cúpulas y una alfombra persa tejida de una sola pieza, y el Louvre Abu Dabi, coronado por una inmensa cúpula calada firmada por Jean Nouvel que proyecta una lluvia de luz filtrada, son sus dos símbolos más destacados.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 98,
    },
    sections: [
      {
        heading: "La Grande Mosquée Cheikh Zayed",
        headingEn: "The Sheikh Zayed Grand Mosque",
        headingEs: "La Gran Mezquita Sheikh Zayed",
        body:
          "Achevée en 2007 après plus d'une décennie de travaux, la Grande Mosquée Cheikh Zayed peut accueillir plus de quarante mille fidèles et mêle des influences architecturales moghole, maure et fatimide dans un ensemble entièrement en marbre blanc. Son tapis principal, tissé d'une seule pièce par plus de mille artisans, figurait un temps parmi les plus grands au monde, tandis que ses lustres en cristal de Swarovski comptent parmi les plus imposants jamais réalisés pour un lieu de culte.",
        bodyEn:
          "Completed in 2007 after over a decade of construction, the Sheikh Zayed Grand Mosque can hold over forty thousand worshippers and blends Mughal, Moorish, and Fatimid architectural influences in an ensemble entirely of white marble. Its main carpet, woven as a single piece by over a thousand artisans, was for a time among the largest in the world, while its Swarovski crystal chandeliers rank among the most imposing ever made for a place of worship.",
        bodyEs:
          "Terminada en 2007 tras más de una década de obras, la Gran Mezquita Sheikh Zayed puede acoger a más de cuarenta mil fieles y combina influencias arquitectónicas mogol, morisca y fatimí en un conjunto enteramente de mármol blanco. Su alfombra principal, tejida de una sola pieza por más de mil artesanos, figuró durante un tiempo entre las más grandes del mundo, mientras que sus lámparas de cristal Swarovski se cuentan entre las más imponentes jamás realizadas para un lugar de culto.",
      },
      {
        heading: "Le Louvre Abu Dhabi et l'île de Saadiyat",
        headingEn: "Louvre Abu Dhabi and Saadiyat Island",
        headingEs: "El Louvre Abu Dabi y la isla de Saadiyat",
        body:
          "Le Louvre Abu Dhabi, ouvert en 2017 sur l'île culturelle de Saadiyat, présente des œuvres empruntées à treize institutions françaises sous une coupole géométrique de sept mille huit cents tonnes qui filtre la lumière du soleil en un motif changeant, surnommé « pluie de lumière ». À proximité, les plages immaculées de Saadiyat et le futur quartier des musées, qui doit accueillir un Guggenheim signé Frank Gehry, complètent la vocation culturelle affichée de l'île.",
        bodyEn:
          "Louvre Abu Dhabi, opened in 2017 on the cultural island of Saadiyat, displays works loaned by thirteen French institutions beneath a geometric dome weighing seven thousand eight hundred tonnes that filters sunlight into a shifting pattern, nicknamed the \"rain of light.\" Nearby, Saadiyat's pristine beaches and the future museum district, set to house a Guggenheim designed by Frank Gehry, round out the island's stated cultural ambitions.",
        bodyEs:
          "El Louvre Abu Dabi, inaugurado en 2017 en la isla cultural de Saadiyat, exhibe obras cedidas por trece instituciones francesas bajo una cúpula geométrica de siete mil ochocientas toneladas que filtra la luz solar en un patrón cambiante, apodado «lluvia de luz». Cerca de allí, las playas inmaculadas de Saadiyat y el futuro distrito de museos, que albergará un Guggenheim firmado por Frank Gehry, completan la vocación cultural declarada de la isla.",
      },
    ],
    hotels: [
      {
        name: "Villa au cœur de la corniche",
        nameEn: "A Villa on the Corniche",
        nameEs: "Villa en el corazón de la corniche",
        description:
          "Un hôtel donnant sur la corniche d'Abu Dhabi, à distance de marche de la mosquée illuminée le soir, chambres élégantes et piscine à débordement face au golfe Arabique.",
        descriptionEn:
          "A hotel overlooking Abu Dhabi's corniche, within walking distance of the mosque illuminated at night, elegant rooms and an infinity pool facing the Arabian Gulf.",
        descriptionEs:
          "Un hotel con vistas a la corniche de Abu Dabi, a poca distancia a pie de la mezquita iluminada por la noche, habitaciones elegantes y piscina infinita frente al golfo Arábigo.",
        image: `${R2}/trips/emirats-abudhabi-hotel-1.jpg`,
      },
      {
        name: "Resort de l'île de Saadiyat",
        nameEn: "A Saadiyat Island Resort",
        nameEs: "Resort de la isla de Saadiyat",
        description:
          "Un hôtel de plage sur l'île de Saadiyat, à deux pas du Louvre Abu Dhabi, chambres avec vue sur une plage immaculée classée parmi les plus belles du Golfe.",
        descriptionEn:
          "A beach hotel on Saadiyat Island, steps from the Louvre Abu Dhabi, rooms overlooking a pristine beach ranked among the finest in the Gulf.",
        descriptionEs:
          "Un hotel de playa en la isla de Saadiyat, a pocos pasos del Louvre Abu Dabi, habitaciones con vistas a una playa inmaculada considerada una de las más bellas del Golfo.",
        image: `${R2}/trips/emirats-abudhabi-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "jordanie",
    tour: {
      name: "Jordanie : la Mer Morte et la réserve de Dana",
      nameEn: "Jordan: The Dead Sea and Dana Reserve",
      nameEs: "Jordania: el Mar Muerto y la reserva de Dana",
      slug: "jordanie-mer-morte-dana",
      image: `${R2}/tours/jordanie-mer-morte-dana.jpg`,
      images: `${R2}/trips/jordanie-mermorte-gallery-1.jpg,${R2}/trips/jordanie-mermorte-gallery-2.jpg,${R2}/trips/jordanie-mermorte-gallery-3.jpg,${R2}/trips/jordanie-mermorte-gallery-4.jpg,${R2}/trips/jordanie-mermorte-gallery-5.jpg,${R2}/trips/jordanie-mermorte-gallery-6.jpg`,
      tagline: "Le point le plus bas de la surface terrestre, puis la plus grande réserve naturelle du royaume",
      taglineEn: "The lowest point on the Earth's surface, then the kingdom's largest nature reserve",
      taglineEs: "El punto más bajo de la superficie terrestre, y después la mayor reserva natural del reino",
      description:
        "Un séjour qui combine la Mer Morte, point le plus bas de la surface terrestre à plus de quatre cents mètres sous le niveau de la mer, dont la salinité extrême permet de flotter sans effort, et la réserve de biosphère de Dana, la plus grande et la plus diversifiée du royaume, qui s'étend sur quatre zones climatiques différentes entre plateau montagneux et désert du Wadi Araba.",
      descriptionEn:
        "A stay combining the Dead Sea, the lowest point on the Earth's surface at over four hundred metres below sea level, whose extreme salinity allows effortless floating, and the Dana Biosphere Reserve, the kingdom's largest and most diverse, spanning four distinct climatic zones between a mountainous plateau and the Wadi Araba desert.",
      descriptionEs:
        "Una estancia que combina el Mar Muerto, punto más bajo de la superficie terrestre a más de cuatrocientos metros bajo el nivel del mar, cuya salinidad extrema permite flotar sin esfuerzo, y la reserva de biosfera de Dana, la más grande y diversa del reino, que se extiende por cuatro zonas climáticas distintas entre una meseta montañosa y el desierto de Wadi Araba.",
      price: 2000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Mars à mai | Sept à nov",
      whenLabelEn: "March to May | Sept to Nov",
      whenLabelEs: "Marzo a mayo | sept a nov",
      bestMonths: "march,april,may,september,october,november",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 99,
    },
    sections: [
      {
        heading: "Flotter sur le point le plus bas de la planète",
        headingEn: "Floating on the lowest point on the planet",
        headingEs: "Flotar en el punto más bajo del planeta",
        body:
          "La Mer Morte, en réalité un lac salé sans exutoire situé à plus de quatre cents mètres sous le niveau de la mer, contient une concentration en sel près de dix fois supérieure à celle des océans, ce qui rend la flottaison involontaire et quasi impossible la noyade. Les boues minérales riches en magnésium et en potassium, récoltées sur ses rives, sont exploitées depuis l'Antiquité pour leurs vertus dermatologiques, encore vantées aujourd'hui par les spas qui bordent la côte.",
        bodyEn:
          "The Dead Sea, actually a landlocked salt lake sitting over four hundred metres below sea level, holds a salt concentration nearly ten times that of the oceans, which makes floating involuntary and drowning almost impossible. The mineral-rich mud, harvested from its shores and high in magnesium and potassium, has been used since antiquity for its dermatological properties, still touted today by the spas lining the coast.",
        bodyEs:
          "El Mar Muerto, en realidad un lago salado sin salida situado a más de cuatrocientos metros bajo el nivel del mar, contiene una concentración de sal casi diez veces superior a la de los océanos, lo que hace que flotar sea involuntario y el ahogamiento casi imposible. El barro mineral, rico en magnesio y potasio y recolectado en sus orillas, se ha utilizado desde la Antigüedad por sus propiedades dermatológicas, todavía promocionadas hoy por los spas que bordean la costa.",
      },
      {
        heading: "La réserve de Dana, la plus vaste du royaume",
        headingEn: "Dana Reserve, the kingdom's largest",
        headingEs: "La reserva de Dana, la más extensa del reino",
        body:
          "La réserve de biosphère de Dana, créée en 1989, s'étend sur plus de trois cents kilomètres carrés et traverse quatre zones climatiques distinctes, de la forêt méditerranéenne d'altitude au désert aride du Wadi Araba, abritant plus de huit cents espèces végétales et plusieurs centaines d'espèces animales dont le bouquetin de Nubie. Le village de Dana, aux maisons de pierre ottomanes restaurées, sert de point de départ à des randonnées qui descendent progressivement vers le désert, offrant l'une des transitions paysagères les plus spectaculaires de Jordanie.",
        bodyEn:
          "The Dana Biosphere Reserve, created in 1989, spans over three hundred square kilometres and crosses four distinct climatic zones, from high-altitude Mediterranean forest to the arid Wadi Araba desert, sheltering over eight hundred plant species and several hundred animal species including the Nubian ibex. The village of Dana, with its restored Ottoman stone houses, serves as a starting point for hikes that gradually descend toward the desert, offering one of Jordan's most spectacular landscape transitions.",
        bodyEs:
          "La reserva de biosfera de Dana, creada en 1989, se extiende por más de trescientos kilómetros cuadrados y atraviesa cuatro zonas climáticas distintas, desde el bosque mediterráneo de altitud hasta el árido desierto de Wadi Araba, y alberga más de ochocientas especies vegetales y varios cientos de especies animales, entre ellas la cabra montés de Nubia. El pueblo de Dana, de casas de piedra otomanas restauradas, sirve de punto de partida para caminatas que descienden progresivamente hacia el desierto, ofreciendo una de las transiciones paisajísticas más espectaculares de Jordania.",
      },
    ],
    hotels: [
      {
        name: "Resort de la rive de la Mer Morte",
        nameEn: "A Dead Sea Shore Resort",
        nameEs: "Resort a orillas del Mar Muerto",
        description:
          "Un hôtel de bord de mer directement sur la rive de la Mer Morte, plage privée d'accès aux eaux salées, spa proposant des soins aux boues minérales locales.",
        descriptionEn:
          "A beachfront hotel directly on the shore of the Dead Sea, a private beach with access to the salt waters, a spa offering treatments with local mineral mud.",
        descriptionEs:
          "Un hotel frente al mar directamente en la orilla del Mar Muerto, playa privada con acceso a las aguas saladas, spa con tratamientos de barro mineral local.",
        image: `${R2}/trips/jordanie-mermorte-hotel-1.jpg`,
      },
      {
        name: "Éco-lodge du village de Dana",
        nameEn: "The Dana Village Eco-Lodge",
        nameEs: "Ecolodge del pueblo de Dana",
        description:
          "Un éco-lodge en pierre au bord de la réserve, chambres simples avec vue sur les gorges de Dana, cuisine locale préparée à partir de produits cultivés dans le village.",
        descriptionEn:
          "A stone eco-lodge on the edge of the reserve, simple rooms overlooking the Dana gorges, local cuisine prepared from produce grown in the village.",
        descriptionEs:
          "Un ecolodge de piedra al borde de la reserva, habitaciones sencillas con vistas a las gargantas de Dana, cocina local preparada con productos cultivados en el pueblo.",
        image: `${R2}/trips/jordanie-mermorte-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "oman",
    tour: {
      name: "Oman : Salalah et les pluies de la mousson du Dhofar",
      nameEn: "Oman: Salalah and the Dhofar Monsoon Rains",
      nameEs: "Omán: Salalah y las lluvias del monzón de Dhofar",
      slug: "oman-salalah-dhofar",
      image: `${R2}/tours/oman-salalah-dhofar.jpg`,
      images: `${R2}/trips/oman-salalah-gallery-1.jpg,${R2}/trips/oman-salalah-gallery-2.jpg,${R2}/trips/oman-salalah-gallery-3.jpg,${R2}/trips/oman-salalah-gallery-4.jpg,${R2}/trips/oman-salalah-gallery-5.jpg,${R2}/trips/oman-salalah-gallery-6.jpg`,
      tagline: "La seule région de la péninsule Arabique où la mousson transforme le désert en prairie verdoyante chaque été",
      taglineEn: "The only region of the Arabian Peninsula where the monsoon turns desert into green grassland every summer",
      taglineEs: "La única región de la península arábiga donde el monzón transforma el desierto en pradera verde cada verano",
      description:
        "Salalah, capitale de la province du Dhofar dans le sud d'Oman, bénéficie chaque année entre juin et septembre du khareef, une mousson venue de l'océan Indien qui enveloppe les collines environnantes de brume fraîche et transforme le paysage désertique en prairie verdoyante ponctuée de cascades, un phénomène unique dans toute la péninsule Arabique qui attire chaque été des visiteurs du Golfe entier.",
      descriptionEn:
        "Salalah, capital of Oman's southern Dhofar province, benefits every year between June and September from the khareef, a monsoon arriving from the Indian Ocean that wraps the surrounding hills in cool mist and turns the desert landscape into green grassland dotted with waterfalls, a phenomenon unique across the entire Arabian Peninsula that draws visitors from the whole Gulf every summer.",
      descriptionEs:
        "Salalah, capital de la provincia sureña de Dhofar en Omán, se beneficia cada año entre junio y septiembre del khareef, un monzón llegado del océano Índico que envuelve las colinas circundantes en niebla fresca y transforma el paisaje desértico en pradera verde salpicada de cascadas, un fenómeno único en toda la península arábiga que atrae cada verano a visitantes de todo el Golfo.",
      price: 2200,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 5,
      durationUnit: "nights",
      duration: "5 nuits",
      durationEn: "5 nights",
      durationEs: "5 noches",
      whenLabel: "Juin à sept",
      whenLabelEn: "June to Sept",
      whenLabelEs: "Jun a sept",
      bestMonths: "june,july,august,september",
      category: "multi-day",
      theme: "relax",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 100,
    },
    sections: [
      {
        heading: "Le khareef, la mousson qui reverdit le désert",
        headingEn: "The khareef, the monsoon that greens the desert",
        headingEs: "El khareef, el monzón que reverdece el desierto",
        body:
          "Le khareef, mousson estivale qui touche les montagnes du Dhofar entre juin et septembre, enveloppe la région d'un brouillard frais et de pluies fines qui transforment en quelques semaines les collines arides en prairies d'un vert éclatant, un contraste saisissant avec le reste de la péninsule Arabique en plein été. Ce phénomène climatique unique, provoqué par la rencontre des courants de l'océan Indien avec le relief côtier, attire chaque année des centaines de milliers de visiteurs venus du Golfe pour échapper à la chaleur.",
        bodyEn:
          "The khareef, a summer monsoon affecting the Dhofar mountains between June and September, wraps the region in cool fog and fine rain that transform arid hills into brilliant green grassland within weeks, a striking contrast with the rest of the Arabian Peninsula at the height of summer. This unique climatic phenomenon, caused by Indian Ocean currents meeting the coastal terrain, draws hundreds of thousands of visitors from the Gulf each year seeking to escape the heat.",
        bodyEs:
          "El khareef, monzón estival que afecta a las montañas de Dhofar entre junio y septiembre, envuelve la región en niebla fresca y lluvia fina que transforman en pocas semanas las colinas áridas en praderas de un verde intenso, un contraste llamativo con el resto de la península arábiga en pleno verano. Este fenómeno climático único, provocado por el encuentro de las corrientes del océano Índico con el relieve costero, atrae cada año a cientos de miles de visitantes del Golfo que buscan escapar del calor.",
      },
      {
        heading: "Les cascades de Wadi Darbat et les plantations d'encens",
        headingEn: "The Wadi Darbat waterfalls and frankincense groves",
        headingEs: "Las cascadas de Wadi Darbat y los cultivos de incienso",
        body:
          "Le Wadi Darbat, vallée verdoyante à une vingtaine de kilomètres de Salalah, se couvre pendant la mousson de cascades temporaires et d'un lac qui n'existe qu'à cette saison, entourés de falaises calcaires spectaculaires. La région reste par ailleurs le berceau historique de l'encens, résine extraite des arbres à encens qui poussent à l'état sauvage sur les collines environnantes et qui fit la fortune commerciale du Dhofar depuis l'Antiquité, expédiée jusqu'en Égypte et à Rome.",
        bodyEn:
          "Wadi Darbat, a green valley about twenty kilometres from Salalah, is covered during the monsoon in temporary waterfalls and a lake that exists only in this season, surrounded by spectacular limestone cliffs. The region also remains the historic cradle of frankincense, a resin extracted from trees that grow wild on the surrounding hills and that made Dhofar's commercial fortune since antiquity, shipped as far as Egypt and Rome.",
        bodyEs:
          "El Wadi Darbat, valle verde a unos veinte kilómetros de Salalah, se cubre durante el monzón de cascadas temporales y un lago que solo existe en esta temporada, rodeados de espectaculares acantilados calizos. La región sigue siendo además la cuna histórica del incienso, resina extraída de árboles que crecen silvestres en las colinas circundantes y que forjó la fortuna comercial de Dhofar desde la Antigüedad, exportada hasta Egipto y Roma.",
      },
    ],
    hotels: [
      {
        name: "Resort de plage de Salalah",
        nameEn: "A Salalah Beach Resort",
        nameEs: "Resort de playa de Salalah",
        description:
          "Un hôtel de plage entouré de plantations de cocotiers, rare sur la péninsule Arabique, chambres avec vue sur la mer d'Arabie et piscines entourées de jardins tropicaux.",
        descriptionEn:
          "A beach hotel surrounded by coconut plantations, a rarity on the Arabian Peninsula, rooms overlooking the Arabian Sea and pools set in tropical gardens.",
        descriptionEs:
          "Un hotel de playa rodeado de plantaciones de cocoteros, poco habitual en la península arábiga, habitaciones con vistas al mar Arábigo y piscinas rodeadas de jardines tropicales.",
        image: `${R2}/trips/oman-salalah-hotel-1.jpg`,
      },
      {
        name: "Lodge des collines du Dhofar",
        nameEn: "A Dhofar Hills Lodge",
        nameEs: "Lodge de las colinas de Dhofar",
        description:
          "Un lodge simple niché dans les collines verdoyantes du Dhofar pendant la saison du khareef, chambres avec vue sur les prairies brumeuses et les cascades environnantes.",
        descriptionEn:
          "A simple lodge nestled in the green Dhofar hills during the khareef season, rooms overlooking misty grasslands and the surrounding waterfalls.",
        descriptionEs:
          "Un lodge sencillo enclavado en las colinas verdes de Dhofar durante la temporada del khareef, habitaciones con vistas a praderas brumosas y a las cascadas circundantes.",
        image: `${R2}/trips/oman-salalah-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "israel",
    tour: {
      name: "Israël : Tel-Aviv et la côte méditerranéenne",
      nameEn: "Israel: Tel Aviv and the Mediterranean Coast",
      nameEs: "Israel: Tel Aviv y la costa mediterránea",
      slug: "israel-telaviv-cote",
      image: `${R2}/tours/israel-telaviv-cote.jpg`,
      images: `${R2}/trips/israel-telaviv-gallery-1.jpg,${R2}/trips/israel-telaviv-gallery-2.jpg,${R2}/trips/israel-telaviv-gallery-3.jpg,${R2}/trips/israel-telaviv-gallery-4.jpg,${R2}/trips/israel-telaviv-gallery-5.jpg,${R2}/trips/israel-telaviv-gallery-6.jpg`,
      tagline: "La ville qui ne dort jamais du Moyen-Orient, entre architecture Bauhaus classée à l'UNESCO et plages urbaines animées",
      taglineEn: "The Middle East's city that never sleeps, between UNESCO-listed Bauhaus architecture and lively urban beaches",
      taglineEs: "La ciudad que nunca duerme de Oriente Medio, entre arquitectura Bauhaus declarada por la UNESCO y animadas playas urbanas",
      description:
        "Tel-Aviv, fondée en 1909 comme premier quartier hébreu moderne aux abords de la ville portuaire de Jaffa, s'est imposée en un siècle comme la capitale culturelle et festive d'Israël, à l'opposé de l'atmosphère recueillie de Jérusalem. La ville revendique la plus grande concentration au monde de bâtiments Bauhaus, plus de quatre mille, construits par des architectes juifs émigrés d'Allemagne dans les années 1930, aujourd'hui classés au patrimoine mondial de l'UNESCO.",
      descriptionEn:
        "Tel Aviv, founded in 1909 as the first modern Hebrew neighbourhood on the edge of the port city of Jaffa, has established itself over a century as Israel's cultural and party capital, the opposite of Jerusalem's contemplative atmosphere. The city claims the world's largest concentration of Bauhaus buildings, over four thousand, built by Jewish architects who emigrated from Germany in the 1930s, now UNESCO World Heritage listed.",
      descriptionEs:
        "Tel Aviv, fundada en 1909 como el primer barrio hebreo moderno a las afueras de la ciudad portuaria de Jaffa, se ha impuesto en un siglo como la capital cultural y festiva de Israel, lo opuesto al ambiente recogido de Jerusalén. La ciudad reivindica la mayor concentración del mundo de edificios Bauhaus, más de cuatro mil, construidos por arquitectos judíos emigrados de Alemania en la década de 1930, hoy declarados Patrimonio de la Humanidad por la UNESCO.",
      price: 2000,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | sept a oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "relax",
      feeling: "freedom",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 101,
    },
    sections: [
      {
        heading: "L'architecture Bauhaus de la Ville Blanche",
        headingEn: "The Bauhaus architecture of the White City",
        headingEs: "La arquitectura Bauhaus de la Ciudad Blanca",
        body:
          "Le quartier connu sous le nom de « Ville Blanche », classé au patrimoine mondial de l'UNESCO en 2003, rassemble la plus grande concentration au monde de bâtiments de style Bauhaus, construits pour la plupart par des architectes juifs formés en Allemagne et émigrés en Palestine mandataire dans les années 1930. Leurs façades épurées, balcons arrondis et fenêtres en bandeau, adaptés au climat méditerranéen, se découvrent au fil d'une promenade dans les rues Rothschild et Bialik.",
        bodyEn:
          "The district known as the \"White City,\" UNESCO World Heritage listed in 2003, holds the world's largest concentration of Bauhaus-style buildings, mostly built by Jewish architects trained in Germany and who emigrated to Mandatory Palestine in the 1930s. Their clean facades, rounded balconies, and ribbon windows, adapted to the Mediterranean climate, are discovered along a walk through Rothschild and Bialik streets.",
        bodyEs:
          "El barrio conocido como «Ciudad Blanca», declarado Patrimonio de la Humanidad por la UNESCO en 2003, reúne la mayor concentración del mundo de edificios de estilo Bauhaus, construidos en su mayoría por arquitectos judíos formados en Alemania y emigrados a la Palestina bajo mandato británico en la década de 1930. Sus fachadas depuradas, balcones redondeados y ventanas corridas, adaptados al clima mediterráneo, se descubren a lo largo de un paseo por las calles Rothschild y Bialik.",
      },
      {
        heading: "Jaffa et les plages urbaines",
        headingEn: "Jaffa and the urban beaches",
        headingEs: "Jaffa y las playas urbanas",
        body:
          "Jaffa, port antique mentionné dès la Bible et absorbé par Tel-Aviv en 1950, conserve un dédale de ruelles pavées, un marché aux puces animé et un port de pêche encore actif d'où partent chaque matin quelques barques. Les treize kilomètres de plages urbaines qui longent la ville, accessibles à pied depuis le centre, restent animées jusque tard le soir par les joueurs de matkot, sport de raquette devenu emblématique du littoral israélien.",
        bodyEn:
          "Jaffa, an ancient port mentioned as early as the Bible and absorbed by Tel Aviv in 1950, retains a maze of cobbled lanes, a lively flea market, and a still-active fishing harbour from which a few boats set out each morning. The thirteen kilometres of urban beaches lining the city, reachable on foot from the centre, stay busy late into the evening with matkot players, a paddle sport that has become emblematic of the Israeli coastline.",
        bodyEs:
          "Jaffa, puerto antiguo mencionado ya en la Biblia y absorbido por Tel Aviv en 1950, conserva un laberinto de callejuelas empedradas, un animado mercadillo y un puerto pesquero todavía activo del que zarpan cada mañana algunas barcas. Los trece kilómetros de playas urbanas que bordean la ciudad, accesibles a pie desde el centro, permanecen animados hasta bien entrada la noche con jugadores de matkot, deporte de raqueta que se ha convertido en emblema del litoral israelí.",
      },
    ],
    hotels: [
      {
        name: "Hôtel design du front de mer",
        nameEn: "A Design Hotel on the Seafront",
        nameEs: "Hotel de diseño frente al mar",
        description:
          "Un hôtel design directement sur la promenade du bord de mer, à distance de marche des plages et des rues Bauhaus, terrasse sur le toit avec vue sur la Méditerranée.",
        descriptionEn:
          "A design hotel right on the seafront promenade, within walking distance of the beaches and Bauhaus streets, a rooftop terrace overlooking the Mediterranean.",
        descriptionEs:
          "Un hotel de diseño directamente en el paseo marítimo, a poca distancia a pie de las playas y las calles Bauhaus, terraza en la azotea con vistas al Mediterráneo.",
        image: `${R2}/trips/israel-telaviv-hotel-1.jpg`,
      },
      {
        name: "Boutique-hôtel de Neve Tzedek",
        nameEn: "A Neve Tzedek Boutique Hotel",
        nameEs: "Hotel boutique de Neve Tzedek",
        description:
          "Un boutique-hôtel installé dans une maison rénovée du quartier historique de Neve Tzedek, à deux pas de Jaffa et de ses ruelles pavées.",
        descriptionEn:
          "A boutique hotel housed in a renovated building in the historic Neve Tzedek quarter, steps from Jaffa and its cobbled lanes.",
        descriptionEs:
          "Un hotel boutique instalado en una casa renovada del histórico barrio de Neve Tzedek, a pocos pasos de Jaffa y sus callejuelas empedradas.",
        image: `${R2}/trips/israel-telaviv-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "arabie-saoudite",
    tour: {
      name: "Arabie saoudite : Djeddah et Al-Balad, la vieille ville de corail",
      nameEn: "Saudi Arabia: Jeddah and Al-Balad, the Coral Old Town",
      nameEs: "Arabia Saudita: Yeda y Al-Balad, la ciudad vieja de coral",
      slug: "arabie-saoudite-djeddah-albalad",
      image: `${R2}/tours/arabie-saoudite-djeddah-albalad.jpg`,
      images: `${R2}/trips/arabie-djeddah-gallery-1.jpg,${R2}/trips/arabie-djeddah-gallery-2.jpg,${R2}/trips/arabie-djeddah-gallery-3.jpg,${R2}/trips/arabie-djeddah-gallery-4.jpg,${R2}/trips/arabie-djeddah-gallery-5.jpg,${R2}/trips/arabie-djeddah-gallery-6.jpg`,
      tagline: "Une ville de corail vieille de plus de mille ans, porte d'entrée historique des pèlerins vers La Mecque",
      taglineEn: "A coral-built city over a thousand years old, the historic gateway for pilgrims to Mecca",
      taglineEs: "Una ciudad de coral de más de mil años, puerta de entrada histórica de los peregrinos a La Meca",
      description:
        "Djeddah, principale ville portuaire d'Arabie saoudite sur la mer Rouge, servit pendant plus d'un millénaire de porte d'entrée aux pèlerins venus par bateau vers La Mecque, faisant d'elle un carrefour cosmopolite unique dans le royaume. Son quartier historique, Al-Balad, classé à l'UNESCO en 2014, conserve des maisons de plusieurs étages construites en corail extrait de la mer Rouge et ornées de balcons en bois finement ajourés appelés roshan.",
      descriptionEn:
        "Jeddah, Saudi Arabia's main port city on the Red Sea, served for over a millennium as the gateway for pilgrims arriving by boat to Mecca, making it a uniquely cosmopolitan crossroads in the kingdom. Its historic district, Al-Balad, UNESCO-listed in 2014, retains multi-storey houses built from coral quarried from the Red Sea and adorned with finely latticed wooden balconies called roshan.",
      descriptionEs:
        "Yeda, principal ciudad portuaria de Arabia Saudita en el mar Rojo, sirvió durante más de un milenio como puerta de entrada para los peregrinos que llegaban en barco a La Meca, lo que la convirtió en un cruce de caminos cosmopolita único en el reino. Su barrio histórico, Al-Balad, declarado por la UNESCO en 2014, conserva casas de varios pisos construidas con coral extraído del mar Rojo y adornadas con balcones de madera finamente calados llamados roshan.",
      price: 2100,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Oct à avril",
      whenLabelEn: "Oct to April",
      whenLabelEs: "Oct a abril",
      bestMonths: "october,november,december,january,february,march,april",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 102,
    },
    sections: [
      {
        heading: "Al-Balad, la ville de corail",
        headingEn: "Al-Balad, the Coral City",
        headingEs: "Al-Balad, la ciudad de coral",
        body:
          "Al-Balad, cœur historique de Djeddah fondé il y a plus de mille ans, doit son surnom de ville de corail à ses maisons construites en blocs de corail extraits des récifs de la mer Rouge, technique de construction locale adaptée au climat côtier humide. Les façades sont rythmées par des roshan, balcons en bois de teck finement ajourés qui permettaient traditionnellement aux femmes d'observer la rue sans être vues, tout en favorisant la circulation de l'air dans les étages.",
        bodyEn:
          "Al-Balad, Jeddah's historic heart founded over a thousand years ago, owes its nickname of coral city to houses built from blocks of coral quarried from the Red Sea reefs, a local construction technique adapted to the humid coastal climate. The facades are punctuated by roshan, finely latticed teak wood balconies that traditionally allowed women to observe the street unseen, while also promoting airflow through the upper floors.",
        bodyEs:
          "Al-Balad, corazón histórico de Yeda fundado hace más de mil años, debe su apodo de ciudad de coral a sus casas construidas con bloques de coral extraídos de los arrecifes del mar Rojo, técnica constructiva local adaptada al húmedo clima costero. Las fachadas están marcadas por roshan, balcones de madera de teca finamente calados que tradicionalmente permitían a las mujeres observar la calle sin ser vistas, favoreciendo además la circulación del aire en los pisos superiores.",
      },
      {
        heading: "Porte d'entrée historique des pèlerins",
        headingEn: "The historic gateway for pilgrims",
        headingEs: "Puerta de entrada histórica de los peregrinos",
        body:
          "Pendant plus d'un millénaire, avant l'avènement de l'aviation moderne, Djeddah fut le point de débarquement obligé des pèlerins venus par bateau de tout le monde musulman pour rejoindre La Mecque, distante d'environ soixante-dix kilomètres. Ce statut de carrefour cosmopolite a laissé une empreinte durable sur l'architecture et la population du quartier, où se mêlent des influences indiennes, africaines et d'Asie du Sud-Est héritées de générations de pèlerins qui s'y sont parfois établis.",
        bodyEn:
          "For over a millennium, before the advent of modern aviation, Jeddah was the obligatory landing point for pilgrims arriving by boat from across the Muslim world to reach Mecca, about seventy kilometres away. This status as a cosmopolitan crossroads left a lasting imprint on the district's architecture and population, blending Indian, African, and Southeast Asian influences inherited from generations of pilgrims who sometimes settled there.",
        bodyEs:
          "Durante más de un milenio, antes de la llegada de la aviación moderna, Yeda fue el punto de desembarco obligado de los peregrinos que llegaban en barco de todo el mundo musulmán para llegar a La Meca, a unos setenta kilómetros de distancia. Este estatus de cruce de caminos cosmopolita dejó una huella duradera en la arquitectura y la población del barrio, donde se mezclan influencias indias, africanas y del sudeste asiático heredadas de generaciones de peregrinos que a veces se establecieron allí.",
      },
    ],
    hotels: [
      {
        name: "Maison de corail rénovée d'Al-Balad",
        nameEn: "A Renovated Coral House in Al-Balad",
        nameEs: "Casa de coral renovada en Al-Balad",
        description:
          "Une maison de corail traditionnelle rénovée au cœur d'Al-Balad, balcons en bois roshan d'origine restaurés, à deux pas des ruelles animées du souk historique.",
        descriptionEn:
          "A traditional coral house renovated at the heart of Al-Balad, original roshan wooden balconies restored, steps from the lively lanes of the historic souk.",
        descriptionEs:
          "Una casa de coral tradicional renovada en el corazón de Al-Balad, balcones de madera roshan originales restaurados, a pocos pasos de las animadas callejuelas del zoco histórico.",
        image: `${R2}/trips/arabie-djeddah-hotel-1.jpg`,
      },
      {
        name: "Hôtel moderne du front de mer de Djeddah",
        nameEn: "A Modern Hotel on Jeddah's Waterfront",
        nameEs: "Hotel moderno en el paseo marítimo de Yeda",
        description:
          "Un hôtel contemporain sur la corniche de Djeddah, à courte distance en voiture d'Al-Balad, chambres avec vue sur la mer Rouge et la célèbre fontaine du Roi Fahd.",
        descriptionEn:
          "A contemporary hotel on Jeddah's corniche, a short drive from Al-Balad, rooms overlooking the Red Sea and the famous King Fahd Fountain.",
        descriptionEs:
          "Un hotel contemporáneo en la corniche de Yeda, a poca distancia en coche de Al-Balad, habitaciones con vistas al mar Rojo y a la famosa fuente del Rey Fahd.",
        image: `${R2}/trips/arabie-djeddah-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "qatar",
    tour: {
      name: "Qatar : Al Wakrah et la route de la perle",
      nameEn: "Qatar: Al Wakrah and the Pearl Route",
      nameEs: "Catar: Al Wakrah y la ruta de la perla",
      slug: "qatar-alwakrah-perle",
      image: `${R2}/tours/qatar-alwakrah-perle.jpg`,
      images: `${R2}/trips/qatar-alwakrah-gallery-1.jpg,${R2}/trips/qatar-alwakrah-gallery-2.jpg,${R2}/trips/qatar-alwakrah-gallery-3.jpg,${R2}/trips/qatar-alwakrah-gallery-4.jpg,${R2}/trips/qatar-alwakrah-gallery-5.jpg,${R2}/trips/qatar-alwakrah-gallery-6.jpg`,
      tagline: "Un port de pêcheurs restauré qui fut, avant le pétrole, la capitale de la perle naturelle du Golfe",
      taglineEn: "A restored fishing port that was, before oil, the Gulf's natural pearl capital",
      taglineEs: "Un puerto pesquero restaurado que fue, antes del petróleo, la capital de la perla natural del Golfo",
      description:
        "Al Wakrah, ville portuaire au sud de Doha, fut pendant des siècles l'un des principaux ports de pêche à la perle naturelle du Golfe, avant que l'industrie ne s'effondre dans les années 1930 avec l'arrivée des perles de culture japonaises. Son front de mer restauré, ses maisons de corail traditionnelles et son marché aux poissons matinal conservent l'atmosphère d'un Qatar antérieur au boom du gaz naturel qui a transformé le pays à partir des années 1990.",
      descriptionEn:
        "Al Wakrah, a port town south of Doha, was for centuries one of the Gulf's main natural pearl-fishing ports, before the industry collapsed in the 1930s with the arrival of Japanese cultured pearls. Its restored waterfront, traditional coral houses, and morning fish market retain the atmosphere of a Qatar that existed before the natural gas boom transformed the country from the 1990s onward.",
      descriptionEs:
        "Al Wakrah, ciudad portuaria al sur de Doha, fue durante siglos uno de los principales puertos de pesca de perlas naturales del Golfo, antes de que la industria se derrumbara en la década de 1930 con la llegada de las perlas cultivadas japonesas. Su paseo marítimo restaurado, sus casas de coral tradicionales y su mercado matutino de pescado conservan la atmósfera de un Catar anterior al auge del gas natural que transformó el país a partir de la década de 1990.",
      price: 1800,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 3,
      durationUnit: "nights",
      duration: "3 nuits",
      durationEn: "3 nights",
      durationEs: "3 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 103,
    },
    sections: [
      {
        heading: "L'âge d'or de la perle naturelle",
        headingEn: "The golden age of the natural pearl",
        headingEs: "La edad de oro de la perla natural",
        body:
          "Avant la découverte du pétrole, l'économie du Qatar reposait presque entièrement sur la pêche à la perle naturelle, une activité périlleuse pratiquée par des plongeurs en apnée qui descendaient parfois à plus de vingt mètres sans équipement, retenant leur souffle pendant plus d'une minute pour récolter des huîtres perlières. Al Wakrah comptait parmi les ports les plus actifs de cette industrie, qui employait jusqu'à la moitié de la population masculine du pays avant l'effondrement du marché dans les années 1930.",
        bodyEn:
          "Before the discovery of oil, Qatar's economy rested almost entirely on natural pearl diving, a perilous activity practised by free divers who sometimes descended over twenty metres with no equipment, holding their breath for over a minute to harvest pearl oysters. Al Wakrah ranked among the busiest ports of this industry, which employed up to half the country's male population before the market collapsed in the 1930s.",
        bodyEs:
          "Antes del descubrimiento del petróleo, la economía de Catar se basaba casi por completo en la pesca de perlas naturales, actividad peligrosa practicada por buceadores en apnea que a veces descendían más de veinte metros sin equipo, conteniendo la respiración durante más de un minuto para recolectar ostras perlíferas. Al Wakrah se contaba entre los puertos más activos de esta industria, que llegó a emplear a la mitad de la población masculina del país antes de que el mercado se derrumbara en la década de 1930.",
      },
      {
        heading: "Le front de mer restauré et le souk local",
        headingEn: "The restored waterfront and local souk",
        headingEs: "El paseo marítimo restaurado y el zoco local",
        body:
          "Le front de mer d'Al Wakrah, restauré dans le respect de l'architecture traditionnelle en corail et en gypse, s'anime chaque matin autour du retour des bateaux de pêche et d'un marché aux poissons où se négocient encore les prises du jour. Le petit souk voisin, plus modeste et moins touristique que celui de Doha, conserve une atmosphère de quartier authentique appréciée pour flâner en dehors des foules de la capitale.",
        bodyEn:
          "Al Wakrah's waterfront, restored in keeping with traditional coral-and-gypsum architecture, comes alive every morning around the return of fishing boats and a fish market where the day's catch is still traded. The nearby small souk, more modest and less touristy than Doha's, retains an authentic neighbourhood atmosphere appreciated for strolling away from the capital's crowds.",
        bodyEs:
          "El paseo marítimo de Al Wakrah, restaurado respetando la arquitectura tradicional de coral y yeso, se anima cada mañana en torno al regreso de los barcos de pesca y a un mercado de pescado donde todavía se negocia la captura del día. El pequeño zoco cercano, más modesto y menos turístico que el de Doha, conserva un ambiente de barrio auténtico apreciado para pasear lejos de las multitudes de la capital.",
      },
    ],
    hotels: [
      {
        name: "Maison d'hôtes du front de mer d'Al Wakrah",
        nameEn: "An Al Wakrah Waterfront Guesthouse",
        nameEs: "Casa de huéspedes del paseo marítimo de Al Wakrah",
        description:
          "Une maison d'hôtes de style traditionnel sur le front de mer restauré d'Al Wakrah, à distance de marche du marché aux poissons et du souk local.",
        descriptionEn:
          "A traditional-style guesthouse on Al Wakrah's restored waterfront, within walking distance of the fish market and local souk.",
        descriptionEs:
          "Una casa de huéspedes de estilo tradicional en el paseo marítimo restaurado de Al Wakrah, a poca distancia a pie del mercado de pescado y el zoco local.",
        image: `${R2}/trips/qatar-alwakrah-hotel-1.jpg`,
      },
      {
        name: "Hôtel du sud de Doha",
        nameEn: "A South Doha Hotel",
        nameEs: "Hotel del sur de Doha",
        description:
          "Un hôtel confortable entre Al Wakrah et Doha, chambres modernes, point de départ pratique pour explorer aussi bien le patrimoine perlier que la capitale.",
        descriptionEn:
          "A comfortable hotel between Al Wakrah and Doha, modern rooms, a convenient base for exploring both the pearling heritage and the capital.",
        descriptionEs:
          "Un cómodo hotel entre Al Wakrah y Doha, habitaciones modernas, punto de partida práctico para explorar tanto el patrimonio perlero como la capital.",
        image: `${R2}/trips/qatar-alwakrah-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "liban",
    tour: {
      name: "Liban : Byblos et la côte phénicienne",
      nameEn: "Lebanon: Byblos and the Phoenician Coast",
      nameEs: "Líbano: Biblos y la costa fenicia",
      slug: "liban-byblos-cote",
      image: `${R2}/tours/liban-byblos-cote.jpg`,
      images: `${R2}/trips/liban-byblos-gallery-1.jpg,${R2}/trips/liban-byblos-gallery-2.jpg,${R2}/trips/liban-byblos-gallery-3.jpg,${R2}/trips/liban-byblos-gallery-4.jpg,${R2}/trips/liban-byblos-gallery-5.jpg,${R2}/trips/liban-byblos-gallery-6.jpg`,
      tagline: "L'une des plus anciennes villes continuellement habitées au monde, berceau de l'alphabet moderne",
      taglineEn: "One of the world's oldest continuously inhabited cities, the birthplace of the modern alphabet",
      taglineEs: "Una de las ciudades habitadas de forma continua más antiguas del mundo, cuna del alfabeto moderno",
      description:
        "Byblos, sur la côte méditerranéenne à une trentaine de kilomètres de Beyrouth, revendique le titre de l'une des plus anciennes villes continuellement habitées au monde, occupée sans interruption depuis plus de sept mille ans. Port phénicien qui exporta jadis le papyrus égyptien vers toute la Méditerranée, donnant son nom au mot « bible », la ville superpose aujourd'hui vestiges phéniciens, romains, croisés et ottomans autour d'un petit port de pêche toujours actif.",
      descriptionEn:
        "Byblos, on the Mediterranean coast about thirty kilometres from Beirut, claims the title of one of the world's oldest continuously inhabited cities, occupied without interruption for over seven thousand years. A Phoenician port that once exported Egyptian papyrus across the Mediterranean, giving the word \"bible\" its name, the city today layers Phoenician, Roman, Crusader, and Ottoman remains around a small, still-active fishing harbour.",
      descriptionEs:
        "Biblos, en la costa mediterránea a unos treinta kilómetros de Beirut, reivindica el título de una de las ciudades habitadas de forma continua más antiguas del mundo, ocupada sin interrupción desde hace más de siete mil años. Puerto fenicio que antaño exportó papiro egipcio por todo el Mediterráneo, dando origen a la palabra «biblia», la ciudad superpone hoy vestigios fenicios, romanos, cruzados y otomanos en torno a un pequeño puerto pesquero todavía activo.",
      price: 1900,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      whenLabel: "Avril à juin | Sept à oct",
      whenLabelEn: "April to June | Sept to Oct",
      whenLabelEs: "Abril a junio | sept a oct",
      bestMonths: "april,may,june,september,october",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 104,
    },
    sections: [
      {
        heading: "Sept mille ans d'occupation continue",
        headingEn: "Seven thousand years of continuous occupation",
        headingEs: "Siete mil años de ocupación continua",
        body:
          "Les fouilles archéologiques de Byblos révèlent des traces d'occupation humaine continue depuis le néolithique, il y a plus de sept mille ans, faisant de la ville l'une des plus anciennes candidates au titre de plus vieille cité habitée sans interruption au monde. Le site superpose des vestiges phéniciens, hellénistiques, romains et croisés, dont un château construit par les croisés au XIIe siècle avec des colonnes romaines de récupération, offrant un raccourci saisissant à travers plusieurs millénaires d'histoire méditerranéenne.",
        bodyEn:
          "Archaeological excavations at Byblos reveal traces of continuous human occupation since the Neolithic, over seven thousand years ago, making the city one of the strongest candidates for the title of oldest continuously inhabited city in the world. The site layers Phoenician, Hellenistic, Roman, and Crusader remains, including a castle built by the Crusaders in the 12th century using recycled Roman columns, offering a striking shortcut through several millennia of Mediterranean history.",
        bodyEs:
          "Las excavaciones arqueológicas de Biblos revelan huellas de ocupación humana continua desde el Neolítico, hace más de siete mil años, lo que convierte a la ciudad en una de las principales candidatas al título de ciudad habitada sin interrupción más antigua del mundo. El yacimiento superpone vestigios fenicios, helenísticos, romanos y cruzados, incluido un castillo construido por los cruzados en el siglo XII con columnas romanas reutilizadas, ofreciendo un llamativo atajo a través de varios milenios de historia mediterránea.",
      },
      {
        heading: "Le berceau de l'alphabet",
        headingEn: "The birthplace of the alphabet",
        headingEs: "La cuna del alfabeto",
        body:
          "Byblos doit son nom grec au commerce du papyrus égyptien qui transitait par son port vers toute la Méditerranée, activité si étroitement associée à la ville que le mot grec pour « livre », biblion, en dérive directement, donnant naissance au mot « bible ». C'est également à Byblos que fut découvert le sarcophage du roi Ahiram, portant l'une des plus anciennes inscriptions connues de l'alphabet phénicien, ancêtre direct des alphabets grec, latin et donc de la plupart des systèmes d'écriture occidentaux actuels.",
        bodyEn:
          "Byblos owes its Greek name to the trade in Egyptian papyrus that passed through its port to the whole Mediterranean, an activity so closely tied to the city that the Greek word for \"book,\" biblion, derives directly from it, giving rise to the word \"bible.\" It was also at Byblos that the sarcophagus of King Ahiram was discovered, bearing one of the oldest known inscriptions of the Phoenician alphabet, a direct ancestor of the Greek and Latin alphabets and thus of most modern Western writing systems.",
        bodyEs:
          "Biblos debe su nombre griego al comercio de papiro egipcio que transitaba por su puerto hacia todo el Mediterráneo, actividad tan estrechamente ligada a la ciudad que la palabra griega para «libro», biblion, deriva directamente de ella, dando origen a la palabra «biblia». También en Biblos se descubrió el sarcófago del rey Ahiram, que porta una de las inscripciones más antiguas conocidas del alfabeto fenicio, antepasado directo de los alfabetos griego y latino y, por tanto, de la mayoría de los sistemas de escritura occidentales actuales.",
      },
    ],
    hotels: [
      {
        name: "Maison d'hôtes du port de Byblos",
        nameEn: "A Byblos Harbour Guesthouse",
        nameEs: "Casa de huéspedes del puerto de Biblos",
        description:
          "Une maison d'hôtes de charme surplombant le petit port de pêche de Byblos, à distance de marche du site archéologique et des ruelles du souk médiéval.",
        descriptionEn:
          "A charming guesthouse overlooking Byblos's small fishing harbour, within walking distance of the archaeological site and the medieval souk's lanes.",
        descriptionEs:
          "Una encantadora casa de huéspedes con vistas al pequeño puerto pesquero de Biblos, a poca distancia a pie del yacimiento arqueológico y las callejuelas del zoco medieval.",
        image: `${R2}/trips/liban-byblos-hotel-1.jpg`,
      },
      {
        name: "Hôtel de charme de la côte phénicienne",
        nameEn: "A Phoenician Coast Boutique Hotel",
        nameEs: "Hotel con encanto de la costa fenicia",
        description:
          "Un hôtel de charme installé dans une ancienne demeure côtière, jardin donnant sur la Méditerranée, à courte distance en voiture de Byblos et de Jbeil.",
        descriptionEn:
          "A boutique hotel housed in a former coastal residence, a garden overlooking the Mediterranean, a short drive from Byblos and Jbeil.",
        descriptionEs:
          "Un hotel con encanto instalado en una antigua residencia costera, jardín con vistas al Mediterráneo, a poca distancia en coche de Biblos y Jbeil.",
        image: `${R2}/trips/liban-byblos-hotel-2.jpg`,
      },
    ],
  },
  {
    destinationSlug: "bahrein",
    tour: {
      name: "Bahreïn : la route de la perle",
      nameEn: "Bahrain: The Pearling Trail",
      nameEs: "Baréin: la ruta de la perla",
      slug: "bahrein-route-perle",
      image: `${R2}/tours/bahrein-route-perle.jpg`,
      images: `${R2}/trips/bahrein-perle-gallery-1.jpg,${R2}/trips/bahrein-perle-gallery-2.jpg,${R2}/trips/bahrein-perle-gallery-3.jpg,${R2}/trips/bahrein-perle-gallery-4.jpg,${R2}/trips/bahrein-perle-gallery-5.jpg,${R2}/trips/bahrein-perle-gallery-6.jpg`,
      tagline: "Un parcours classé à l'UNESCO qui retrace mille cinq cents ans d'histoire de la perle naturelle du Golfe",
      taglineEn: "A UNESCO-listed trail tracing fifteen hundred years of Gulf natural pearl history",
      taglineEs: "Un recorrido declarado por la UNESCO que narra mil quinientos años de historia de la perla natural del Golfo",
      description:
        "Bahreïn fut pendant des siècles la capitale incontestée de la perle naturelle, ses bancs d'huîtres perlières comptant parmi les plus riches du Golfe jusqu'à l'effondrement du marché dans les années 1930. La route de la perle, classée à l'UNESCO en 2012, relie sur trois kilomètres à Muharraq des bâtiments historiques liés à cette industrie, d'anciennes maisons de marchands jusqu'aux bancs d'huîtres eux-mêmes, encore accessibles au large.",
      descriptionEn:
        "Bahrain was for centuries the undisputed capital of the natural pearl, its oyster beds ranking among the richest in the Gulf until the market collapsed in the 1930s. The Pearling Trail, UNESCO-listed in 2012, links historic buildings tied to this industry over three kilometres in Muharraq, from former merchant houses to the oyster beds themselves, still accessible offshore.",
      descriptionEs:
        "Baréin fue durante siglos la capital indiscutible de la perla natural, con bancos de ostras perlíferas entre los más ricos del Golfo hasta que el mercado se derrumbó en la década de 1930. La ruta de la perla, declarada por la UNESCO en 2012, une a lo largo de tres kilómetros en Muharraq edificios históricos ligados a esta industria, desde antiguas casas de comerciantes hasta los propios bancos de ostras, todavía accesibles mar adentro.",
      price: 1700,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 3,
      durationUnit: "nights",
      duration: "3 nuits",
      durationEn: "3 nights",
      durationEs: "3 noches",
      whenLabel: "Nov à mars",
      whenLabelEn: "Nov to March",
      whenLabelEs: "Nov a marzo",
      bestMonths: "november,december,january,february,march",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,solo,family",
      maxGuests: 6,
      featured: false,
      order: 105,
    },
    sections: [
      {
        heading: "La route de la perle de Muharraq",
        headingEn: "The Muharraq Pearling Trail",
        headingEs: "La ruta de la perla de Muharraq",
        body:
          "La route de la perle, premier site du Golfe classé à l'UNESCO pour un ensemble culturel plutôt qu'un monument isolé, relie sur trois kilomètres à Muharraq dix-sept bâtiments historiques : maisons de marchands perliers, mosquées, majlis où se négociaient les cargaisons, et un fort côtier, jusqu'à trois bancs d'huîtres perlières encore visibles au large. Le parcours retrace l'ensemble de la chaîne économique de la perle naturelle, de la plongée jusqu'à la vente, telle qu'elle fonctionnait avant l'irruption des perles de culture japonaises.",
        bodyEn:
          "The Pearling Trail, the first site in the Gulf listed by UNESCO for a cultural ensemble rather than a single monument, links seventeen historic buildings over three kilometres in Muharraq: pearl merchants' houses, mosques, majlis where cargoes were negotiated, and a coastal fort, extending to three oyster beds still visible offshore. The trail traces the entire economic chain of the natural pearl, from diving to sale, as it operated before the arrival of Japanese cultured pearls.",
        bodyEs:
          "La ruta de la perla, primer sitio del Golfo declarado por la UNESCO por un conjunto cultural más que por un monumento aislado, une a lo largo de tres kilómetros en Muharraq diecisiete edificios históricos: casas de comerciantes de perlas, mezquitas, majlis donde se negociaban los cargamentos y un fuerte costero, hasta llegar a tres bancos de ostras perlíferas todavía visibles mar adentro. El recorrido narra toda la cadena económica de la perla natural, desde el buceo hasta la venta, tal como funcionaba antes de la irrupción de las perlas cultivadas japonesas.",
      },
      {
        heading: "Sortie en mer sur les bancs d'huîtres historiques",
        headingEn: "A sea outing to the historic oyster beds",
        headingEs: "Salida al mar hacia los bancos de ostras históricos",
        body:
          "Une sortie en dhow traditionnel permet de rejoindre l'un des bancs d'huîtres perlières classés au large de Muharraq, où des plongeurs font aujourd'hui la démonstration des techniques ancestrales de plongée en apnée, sans équipement, qui faisaient jadis la richesse et le danger de ce métier. Bahreïn reste par ailleurs l'un des rares endroits du Golfe où le commerce de perles naturelles subsiste, à échelle réduite, dans quelques boutiques spécialisées de Manama.",
        bodyEn:
          "An outing aboard a traditional dhow reaches one of the listed pearl oyster beds off Muharraq, where divers today demonstrate the ancestral free-diving techniques, with no equipment, that once made this trade both lucrative and dangerous. Bahrain also remains one of the few places in the Gulf where the natural pearl trade survives, on a smaller scale, in a handful of specialised shops in Manama.",
        bodyEs:
          "Una salida a bordo de un dhow tradicional permite llegar a uno de los bancos de ostras perlíferas declarados frente a Muharraq, donde hoy los buceadores hacen una demostración de las técnicas ancestrales de buceo en apnea, sin equipo, que antaño hacían de este oficio algo tan lucrativo como peligroso. Baréin sigue siendo además uno de los pocos lugares del Golfo donde el comercio de perlas naturales subsiste, a menor escala, en algunas tiendas especializadas de Manama.",
      },
    ],
    hotels: [
      {
        name: "Maison de marchand rénovée à Muharraq",
        nameEn: "A Renovated Merchant House in Muharraq",
        nameEs: "Casa de comerciante renovada en Muharraq",
        description:
          "Une ancienne maison de marchand perlier rénovée sur la route de la perle, cour intérieure traditionnelle, à distance de marche des bâtiments classés à l'UNESCO.",
        descriptionEn:
          "A former pearl merchant's house renovated on the Pearling Trail, a traditional inner courtyard, within walking distance of the UNESCO-listed buildings.",
        descriptionEs:
          "Una antigua casa de comerciante de perlas renovada en la ruta de la perla, patio interior tradicional, a poca distancia a pie de los edificios declarados por la UNESCO.",
        image: `${R2}/trips/bahrein-perle-hotel-1.jpg`,
      },
      {
        name: "Hôtel du front de mer de Manama",
        nameEn: "A Manama Waterfront Hotel",
        nameEs: "Hotel del paseo marítimo de Manama",
        description:
          "Un hôtel confortable sur le front de mer de Manama, à courte distance en voiture de Muharraq et de la route de la perle, chambres avec vue sur le golfe Arabique.",
        descriptionEn:
          "A comfortable hotel on Manama's waterfront, a short drive from Muharraq and the Pearling Trail, rooms overlooking the Arabian Gulf.",
        descriptionEs:
          "Un cómodo hotel en el paseo marítimo de Manama, a poca distancia en coche de Muharraq y la ruta de la perla, habitaciones con vistas al golfo Arábigo.",
        image: `${R2}/trips/bahrein-perle-hotel-2.jpg`,
      },
    ],
  },
];

async function main() {
  const { runSeedBatch, disconnect } = await import("./lib/seedTripsRunner");
  try {
    await runSeedBatch({ newStandardTrips: standardTrips, newJourneyTrips: journeyTrips });
  } finally {
    await disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
