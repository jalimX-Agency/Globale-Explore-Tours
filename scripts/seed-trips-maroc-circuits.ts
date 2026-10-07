// Morocco circuits batch — 4 new journey-format trips added to the existing "maroc" destination:
// imperial cities, grand sud & kasbahs, desert/riad/kasbah by private 4x4, Fes & Chefchaouen.
// Prices are per-person "from" prices (cheapest departure). Run with:
//   npx tsx scripts/seed-trips-maroc-circuits.ts
// Requires scripts/upload-images-maroc-circuits.ts to have been run first (this script refuses to
// write anything if a referenced image isn't already live in R2 — see seedTripsRunner.ts).

process.loadEnvFile(".env");

import type { NewJourneyTrip } from "./lib/seedTripsRunner";

const R2 = process.env.NEXT_PUBLIC_R2_URL!;
const img = (key: string) => `${R2}/journeys/maroc-${key}.jpg`;
const gallery = (...keys: string[]) => keys.map(img).join(",");

const journeyTrips: NewJourneyTrip[] = [
  // ───────────────────────── 1. Imperial cities ─────────────────────────
  {
    destinationSlug: "maroc",
    tour: {
      name: "Maroc : le circuit des villes impériales, de Marrakech à Fès",
      nameEn: "Morocco: The Imperial Cities Circuit, from Marrakech to Fez",
      nameEs: "Marruecos: el circuito de las ciudades imperiales, de Marrakech a Fez",
      slug: "maroc-circuit-villes-imperiales-8j",
      image: img("marrakech-koutoubia-palmeraie"),
      format: "journey",
      mapImage: "",
      tagline: "Le grand classique pour une première approche du Maroc, avec un guide à vos côtés",
      taglineEn: "The essential first look at Morocco, with a guide at your side",
      taglineEs: "El gran clásico para una primera toma de contacto con Marruecos, con guía",
      description:
        "Marrakech, Casablanca, Rabat, Meknès, Volubilis, Fès : huit jours pour parcourir les anciennes cités impériales, leurs médinas, leurs souks et leurs saveurs. Un circuit accompagné, pensé comme une première découverte du Maroc, avec une journée libre à Marrakech et un hébergement en hôtels 3* ou 4* selon la formule choisie.",
      descriptionEn:
        "Marrakech, Casablanca, Rabat, Meknes, Volubilis, Fez: eight days through Morocco's old imperial cities, their medinas, souks and flavours. An escorted circuit built as a first discovery of the country, with a free day in Marrakech and a choice of 3* or 4* hotels depending on the package.",
      descriptionEs:
        "Marrakech, Casablanca, Rabat, Mequinez, Volúbilis, Fez: ocho días por las antiguas ciudades imperiales de Marruecos, sus medinas, sus zocos y sus sabores. Un circuito acompañado, pensado como primera toma de contacto con el país, con una jornada libre en Marrakech y hoteles de 3* o 4* según la fórmula elegida.",
      price: 455,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      includes:
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtel 3* ou 4*,Petits-déjeuners et dîners,Transport en autocar ou minibus,Guide local,Visites et entrées au programme,Assistance locale",
      includesEn:
        "Flights from France,Airport transfers,7 nights in a 3* or 4* hotel,Breakfasts and dinners,Coach or minibus transport,Local guide,Visits and entrance fees listed,Local assistance",
      includesEs:
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hotel de 3* o 4*,Desayunos y cenas,Transporte en autocar o minibús,Guía local,Visitas y entradas del programa,Asistencia local",
      departureFrom: "Barcelone, Toulouse",
      whenLabel: "Mars à mai | Sept à nov",
      whenLabelEn: "March to May | Sept to Nov",
      whenLabelEs: "Marzo a mayo | Sept a nov",
      bestMonths: "march,april,may,september,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "contentment",
      travelerTypes: "couples,groups,family",
      maxGuests: 12,
      featured: false,
      order: 20,
    },
    chapters: [
      {
        title: "Marrakech",
        titleEn: "Marrakech",
        titleEs: "Marrakech",
        intro:
          "La ville rouge ouvre le voyage : jardins de la Ménara, minaret de la Koutoubia, et la place Jemaa el-Fna qui s'anime à la tombée du jour. Une journée libre laisse le temps de flâner dans les souks ou de s'attabler sur une terrasse.",
        introEn:
          "The red city opens the journey: the Menara gardens, the Koutoubia minaret, and Jemaa el-Fna square coming alive at dusk. A free day leaves time to wander the souks or settle onto a terrace.",
        introEs:
          "La ciudad roja abre el viaje: los jardines de la Menara, el minarete de la Koutubia y la plaza Jemaa el-Fna que se anima al caer la tarde. Una jornada libre deja tiempo para pasear por los zocos o sentarse en una terraza.",
        galleryImages: gallery("marrakech-koutoubia-palmeraie", "marrakech-porte-medina", "marrakech-terrasse"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 1,
            title: "Envol vers Marrakech",
            titleEn: "Flight to Marrakech",
            titleEs: "Vuelo a Marrakech",
            description:
              "Envol à destination du Maroc, accueil à l'aéroport par notre représentant et transfert à l'hôtel. Dîner à l'hôtel (ou repas froid selon les horaires de vol), première nuit à Marrakech.",
            descriptionEn:
              "Fly to Morocco, meet our representative at the airport and transfer to the hotel. Dinner at the hotel (or a cold meal depending on flight times), first night in Marrakech.",
            descriptionEs:
              "Vuelo a Marruecos, recibimiento en el aeropuerto por nuestro representante y traslado al hotel. Cena en el hotel (o cena fría según el horario del vuelo), primera noche en Marrakech.",
            image: img("cuisine-tajines"),
            images: "",
          },
          {
            dayNumber: 2,
            title: "Marrakech, de la Ménara à Jemaa el-Fna",
            titleEn: "Marrakech, from the Menara to Jemaa el-Fna",
            titleEs: "Marrakech, de la Menara a Jemaa el-Fna",
            description:
              "Visite de Marrakech : les jardins de la Ménara et leurs oliviers, la mosquée de la Koutoubia, chef-d'œuvre de l'art almohade, puis promenade dans les ruelles de la médina jusqu'à la célèbre place Jemaa el-Fna.",
            descriptionEn:
              "A visit of Marrakech: the Menara gardens and their olive trees, the Koutoubia mosque, a masterpiece of Almohad art, then a stroll through the medina's lanes to the famous Jemaa el-Fna square.",
            descriptionEs:
              "Visita de Marrakech: los jardines de la Menara y sus olivos, la mezquita de la Koutubia, obra maestra del arte almohade, y paseo por las callejuelas de la medina hasta la célebre plaza Jemaa el-Fna.",
            image: img("jemaa-el-fna"),
            images: "",
          },
          {
            dayNumber: 3,
            title: "Journée libre à Marrakech",
            titleEn: "Free day in Marrakech",
            titleEs: "Jornada libre en Marrakech",
            description:
              "Journée libre en demi-pension à l'hôtel, pour flâner à votre rythme. Des excursions sont possibles pour découvrir la ville et la région.",
            descriptionEn:
              "A free day on half board at the hotel, to wander at your own pace. Excursions are available to explore the city and the surrounding region.",
            descriptionEs:
              "Jornada libre en media pensión en el hotel, para pasear a su ritmo. Hay excursiones disponibles para descubrir la ciudad y la región.",
            image: img("marrakech-terrasse"),
            images: "",
          },
        ],
      },
      {
        title: "Casablanca, Rabat et Meknès",
        titleEn: "Casablanca, Rabat and Meknes",
        titleEs: "Casablanca, Rabat y Mequinez",
        intro:
          "Du Maroc moderne de Casablanca à la capitale administrative de Rabat, entre océan Atlantique, palais royal, jardins andalous et kasbah blanche et bleue. Au passage, Meknès et le site romain de Volubilis annoncent Fès.",
        introEn:
          "From the modern Morocco of Casablanca to the administrative capital Rabat, between the Atlantic, the royal palace, Andalusian gardens and a white-and-blue kasbah. Along the way, Meknes and the Roman site of Volubilis herald Fez.",
        introEs:
          "Del Marruecos moderno de Casablanca a la capital administrativa de Rabat, entre el Atlántico, el palacio real, jardines andaluces y una kasbah blanca y azul. De camino, Mequinez y el sitio romano de Volúbilis anuncian Fez.",
        galleryImages: gallery("casablanca-hassan2", "rabat-kasbah-bateaux", "rabat-mausolee", "porte-bleue-chat"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 4,
            title: "Marrakech – Casablanca",
            titleEn: "Marrakech – Casablanca",
            titleEs: "Marrakech – Casablanca",
            description:
              "Route vers Casablanca, capitale économique et plus grande ville du royaume, et visite de la ville.",
            descriptionEn:
              "Drive to Casablanca, the kingdom's economic capital and largest city, and a visit of the city.",
            descriptionEs:
              "Ruta hacia Casablanca, capital económica y mayor ciudad del reino, y visita de la ciudad.",
            image: img("casablanca-hassan2"),
            images: "",
          },
          {
            dayNumber: 5,
            title: "Rabat, Meknès et Volubilis jusqu'à Fès",
            titleEn: "Rabat, Meknes and Volubilis on to Fez",
            titleEs: "Rabat, Mequinez y Volúbilis hasta Fez",
            description:
              "Visite de Rabat, capitale administrative : le Palais royal (Mechouar), les jardins et la kasbah des Oudayas, le mausolée Mohammed V. Puis Meknès et le site romain de Volubilis, avant l'arrivée à Fès.",
            descriptionEn:
              "A visit of Rabat, the administrative capital: the Royal Palace (Mechouar), the Oudayas gardens and kasbah, the Mohammed V mausoleum. Then Meknes and the Roman site of Volubilis, before arriving in Fez.",
            descriptionEs:
              "Visita de Rabat, capital administrativa: el Palacio Real (Mechouar), los jardines y la kasbah de los Oudayas, el mausoleo de Mohamed V. Después Mequinez y el sitio romano de Volúbilis, antes de llegar a Fez.",
            image: img("rabat-mausolee"),
            images: "",
          },
        ],
      },
      {
        title: "Fès",
        titleEn: "Fez",
        titleEs: "Fez",
        intro:
          "Fès, la plus ancienne des villes impériales : une médina labyrinthique classée à l'UNESCO, des artisans qui travaillent comme il y a mille ans, des medersas couvertes de zellige. Une journée entière pour s'y perdre avec un guide.",
        introEn:
          "Fez, the oldest of the imperial cities: a labyrinthine UNESCO-listed medina, craftsmen working as they did a thousand years ago, medersas covered in zellige tilework. A whole day to get lost in it with a guide.",
        introEs:
          "Fez, la más antigua de las ciudades imperiales: una medina laberíntica declarada Patrimonio de la UNESCO, artesanos que trabajan como hace mil años y medersas cubiertas de azulejos zellige. Un día entero para perderse en ella con un guía.",
        galleryImages: gallery("fes-vue-medina", "fes-tanneries", "fes-medersa-fontaine"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 6,
            title: "Fès, capitale spirituelle et culturelle",
            titleEn: "Fez, spiritual and cultural capital",
            titleEs: "Fez, capital espiritual y cultural",
            description:
              "Journée consacrée à Fès : la médina de Fès el-Bali et ses souks, la zaouïa de Moulay Idriss, une medersa et la place Nejjarine, au cœur de l'artisanat fassi.",
            descriptionEn:
              "A day devoted to Fez: the Fes el-Bali medina and its souks, the Moulay Idriss zaouia, a medersa and Nejjarine square, at the heart of Fez craftsmanship.",
            descriptionEs:
              "Jornada dedicada a Fez: la medina de Fez el-Bali y sus zocos, la zauía de Mulay Idris, una medersa y la plaza Nejjarine, en el corazón de la artesanía fasí.",
            image: img("fes-tanneries"),
            images: "",
          },
        ],
      },
      {
        title: "Retour par le Moyen Atlas",
        titleEn: "Back through the Middle Atlas",
        titleEs: "Regreso por el Medio Atlas",
        intro:
          "Le chemin du retour traverse le Moyen Atlas, ses forêts autour d'Ifrane et ses villages berbères, avant de retrouver Marrakech et ses remparts face au Haut Atlas.",
        introEn:
          "The return journey crosses the Middle Atlas, its forests around Ifrane and its Berber villages, before reaching Marrakech and its ramparts facing the High Atlas.",
        introEs:
          "El camino de vuelta atraviesa el Medio Atlas, sus bosques en torno a Ifrane y sus pueblos bereberes, antes de llegar a Marrakech y sus murallas frente al Alto Atlas.",
        galleryImages: gallery("marrakech-atlas-remparts", "remparts-atlas-neige", "marrakech-koutoubia-bassin"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 7,
            title: "Fès – Moyen Atlas – Marrakech",
            titleEn: "Fez – Middle Atlas – Marrakech",
            titleEs: "Fez – Medio Atlas – Marrakech",
            description:
              "Route vers Marrakech à travers les paysages du Moyen Atlas, par le village berbère d'Immouzer du Kandar, Ifrane et Beni Mellal. En cas de mauvais temps, l'itinéraire peut être adapté.",
            descriptionEn:
              "Drive to Marrakech through the Middle Atlas landscapes, via the Berber village of Immouzer du Kandar, Ifrane and Beni Mellal. In bad weather, the route may be adapted.",
            descriptionEs:
              "Ruta hacia Marrakech por los paisajes del Medio Atlas, pasando por el pueblo bereber de Immouzer du Kandar, Ifrane y Beni Mellal. Con mal tiempo, el itinerario puede adaptarse.",
            image: img("marrakech-atlas-remparts"),
            images: "",
          },
          {
            dayNumber: 8,
            title: "Retour",
            titleEn: "Return home",
            titleEs: "Regreso",
            description:
              "Petit-déjeuner, temps libre puis transfert à l'aéroport en fonction des horaires de vol.",
            descriptionEn:
              "Breakfast, free time, then transfer to the airport according to flight times.",
            descriptionEs:
              "Desayuno, tiempo libre y traslado al aeropuerto según el horario del vuelo.",
            image: img("marrakech-koutoubia-bassin"),
            images: "",
          },
        ],
      },
    ],
  },

  // ───────────────────────── 2. Grand sud & kasbahs ─────────────────────────
  {
    destinationSlug: "maroc",
    tour: {
      name: "Maroc : grand sud, kasbahs et gorges, de Marrakech à Erfoud",
      nameEn: "Morocco: The Grand South, Kasbahs and Gorges, from Marrakech to Erfoud",
      nameEs: "Marruecos: gran sur, kasbahs y gargantas, de Marrakech a Erfoud",
      slug: "maroc-grand-sud-kasbahs-8j",
      image: img("kasbah-ait-benhaddou"),
      format: "journey",
      mapImage: "",
      tagline: "Le col du Tizi n'Tichka, Aït Ben Haddou et les portes du désert en huit jours",
      taglineEn: "The Tizi n'Tichka pass, Aït Ben Haddou and the gateway to the desert in eight days",
      taglineEs: "El puerto de Tizi n'Tichka, Aït Ben Haddou y las puertas del desierto en ocho días",
      description:
        "Huit jours entre Marrakech et le grand sud : le col du Tizi n'Tichka à 2 260 m, la kasbah d'Aït Ben Haddou, les palmeraies de la vallée du Draa, les gorges du Dadès et du Todra, puis le Tafilalet aux portes du Sahara. Un circuit accompagné, avec deux jours complets à Marrakech dont une journée libre. Une version en 4x4 avec hébergement en hôtels 4* est également proposée.",
      descriptionEn:
        "Eight days between Marrakech and the deep south: the Tizi n'Tichka pass at 2,260 m, the kasbah of Aït Ben Haddou, the palm groves of the Draa valley, the Dadès and Todra gorges, then the Tafilalet on the edge of the Sahara. An escorted circuit with two full days in Marrakech, one of them free. A 4x4 version with 4* hotels is also available.",
      descriptionEs:
        "Ocho días entre Marrakech y el gran sur: el puerto de Tizi n'Tichka a 2.260 m, la kasbah de Aït Ben Haddou, las palmeras del valle del Draa, las gargantas del Dadès y del Todra, y el Tafilalet a las puertas del Sahara. Un circuito acompañado, con dos días completos en Marrakech, uno de ellos libre. También se ofrece una versión en 4x4 con hoteles de 4*.",
      price: 647,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 7,
      durationUnit: "nights",
      duration: "7 nuits",
      durationEn: "7 nights",
      durationEs: "7 noches",
      includes:
        "Vols depuis la France,Transferts aéroport,7 nuits en hôtel 3* ou 4*,Pension complète du dîner du jour 1 au petit-déjeuner du jour 8,Véhicule climatisé,Guide accompagnateur francophone ou chauffeur francophone,Visites et entrées au programme,Assistance locale",
      includesEn:
        "Flights from France,Airport transfers,7 nights in a 3* or 4* hotel,Full board from dinner on day 1 to breakfast on day 8,Air-conditioned vehicle,French-speaking guide or driver,Visits and entrance fees listed,Local assistance",
      includesEs:
        "Vuelos desde Francia,Traslados al aeropuerto,7 noches en hotel de 3* o 4*,Pensión completa desde la cena del día 1 hasta el desayuno del día 8,Vehículo con aire acondicionado,Guía acompañante o conductor francófono,Visitas y entradas del programa,Asistencia local",
      departureFrom: "Toulouse, Barcelone",
      whenLabel: "Oct à nov | Fév à avr",
      whenLabelEn: "Oct to Nov | Feb to Apr",
      whenLabelEs: "Oct a nov | Feb a abr",
      bestMonths: "october,november,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "freedom",
      travelerTypes: "couples,groups",
      maxGuests: 12,
      featured: false,
      order: 21,
    },
    chapters: [
      {
        title: "Marrakech",
        titleEn: "Marrakech",
        titleEs: "Marrakech",
        intro:
          "Deux jours complets à Marrakech pour commencer en douceur : les jardins de la Ménara, la Koutoubia, la médina et ses souks, avant de prendre la route du sud.",
        introEn:
          "Two full days in Marrakech to ease in: the Menara gardens, the Koutoubia, the medina and its souks, before heading south.",
        introEs:
          "Dos días completos en Marrakech para empezar con calma: los jardines de la Menara, la Koutubia, la medina y sus zocos, antes de poner rumbo al sur.",
        galleryImages: gallery("marrakech-menara", "marrakech-koutoubia-bassin", "marche-epices"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 1,
            title: "Envol vers Marrakech",
            titleEn: "Flight to Marrakech",
            titleEs: "Vuelo a Marrakech",
            description:
              "Envol à destination du Maroc, accueil à l'aéroport et transfert à l'hôtel. Dîner (ou repas froid selon les horaires de vol) et nuit à Marrakech.",
            descriptionEn:
              "Fly to Morocco, airport welcome and transfer to the hotel. Dinner (or a cold meal depending on flight times) and overnight in Marrakech.",
            descriptionEs:
              "Vuelo a Marruecos, recibimiento en el aeropuerto y traslado al hotel. Cena (o cena fría según el horario del vuelo) y noche en Marrakech.",
            image: img("patio-riad"),
            images: "",
          },
          {
            dayNumber: 2,
            title: "Marrakech, de la Ménara à la médina",
            titleEn: "Marrakech, from the Menara to the medina",
            titleEs: "Marrakech, de la Menara a la medina",
            description:
              "Visite de Marrakech : les jardins de la Ménara, la mosquée de la Koutoubia, puis la médina jusqu'à la place Jemaa el-Fna.",
            descriptionEn:
              "A visit of Marrakech: the Menara gardens, the Koutoubia mosque, then the medina as far as Jemaa el-Fna square.",
            descriptionEs:
              "Visita de Marrakech: los jardines de la Menara, la mezquita de la Koutubia y la medina hasta la plaza Jemaa el-Fna.",
            image: img("marrakech-menara"),
            images: "",
          },
        ],
      },
      {
        title: "Aït Ben Haddou et Ouarzazate",
        titleEn: "Aït Ben Haddou and Ouarzazate",
        titleEs: "Aït Ben Haddou y Uarzazate",
        intro:
          "Au-delà du col du Tizi n'Tichka, le paysage change : kasbahs de terre rouge, vallées de palmiers et décors de cinéma, car Ouarzazate est surnommée le Hollywood du Maroc.",
        introEn:
          "Beyond the Tizi n'Tichka pass the landscape changes: red-earth kasbahs, palm-filled valleys and film sets, for Ouarzazate is nicknamed Morocco's Hollywood.",
        introEs:
          "Más allá del puerto de Tizi n'Tichka el paisaje cambia: kasbahs de adobe rojo, valles de palmeras y decorados de cine, pues Uarzazate es conocida como el Hollywood de Marruecos.",
        galleryImages: gallery("kasbah-ait-benhaddou", "ait-benhaddou-vue", "mosquee-rose"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 3,
            title: "Marrakech – Aït Ben Haddou – Ouarzazate",
            titleEn: "Marrakech – Aït Ben Haddou – Ouarzazate",
            titleEs: "Marrakech – Aït Ben Haddou – Uarzazate",
            description:
              "Départ vers Ouarzazate (220 km) par le col du Tizi n'Tichka et ses vues sur le Haut Atlas, avec la visite de la kasbah d'Aït Ben Haddou, village fortifié en terre.",
            descriptionEn:
              "Drive to Ouarzazate (220 km) over the Tizi n'Tichka pass and its views of the High Atlas, with a visit to the kasbah of Aït Ben Haddou, a fortified earthen village.",
            descriptionEs:
              "Ruta hacia Uarzazate (220 km) por el puerto de Tizi n'Tichka y sus vistas al Alto Atlas, con visita a la kasbah de Aït Ben Haddou, pueblo fortificado de adobe.",
            image: img("kasbah-ait-benhaddou"),
            images: "",
          },
        ],
      },
      {
        title: "Gorges du Todra et Tafilalet",
        titleEn: "The Todra Gorge and the Tafilalet",
        titleEs: "Las gargantas del Todra y el Tafilalet",
        intro:
          "Des gorges du Todra aux portes du Sahara : parois de roche rouge, palmeraies, oasis du Tafilalet et routes de piste qui rappellent que le désert commence ici.",
        introEn:
          "From the Todra gorges to the edge of the Sahara: red rock walls, palm groves, the oases of the Tafilalet and tracks that remind you the desert begins here.",
        introEs:
          "De las gargantas del Todra a las puertas del Sahara: paredes de roca roja, palmerales, los oasis del Tafilalet y pistas que recuerdan que aquí empieza el desierto.",
        galleryImages: gallery("gorges-todra", "gorges-todra-vallee", "route-dades", "vallee-palmeraie-draa"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 4,
            title: "Ouarzazate – gorges du Todra – Erfoud",
            titleEn: "Ouarzazate – Todra Gorge – Erfoud",
            titleEs: "Uarzazate – gargantas del Todra – Erfoud",
            description:
              "Route vers les gorges du Todra (320 km jusqu'à Erfoud), entre palmeraies et vallées, jusqu'aux portes du désert.",
            descriptionEn:
              "Drive to the Todra gorges (320 km as far as Erfoud), through palm groves and valleys, to the edge of the desert.",
            descriptionEs:
              "Ruta hacia las gargantas del Todra (320 km hasta Erfoud), entre palmerales y valles, hasta las puertas del desierto.",
            image: img("gorges-todra"),
            images: "",
          },
          {
            dayNumber: 5,
            title: "Erfoud – Tazarine – Ouarzazate",
            titleEn: "Erfoud – Tazarine – Ouarzazate",
            titleEs: "Erfoud – Tazarine – Uarzazate",
            description:
              "Découverte de la région présaharienne du Tafilalet, de ses paysages désertiques et de ses oasis, puis retour vers Ouarzazate par Tazarine (350 km).",
            descriptionEn:
              "A look at the pre-Saharan Tafilalet region, its desert landscapes and oases, then back to Ouarzazate via Tazarine (350 km).",
            descriptionEs:
              "Descubrimiento de la región presahariana del Tafilalet, sus paisajes desérticos y sus oasis, y regreso a Uarzazate por Tazarine (350 km).",
            image: img("vallee-palmeraie-draa"),
            images: "",
          },
        ],
      },
      {
        title: "Retour à Marrakech",
        titleEn: "Back to Marrakech",
        titleEs: "Regreso a Marrakech",
        intro:
          "Le retour offre un dernier panorama sur le Haut Atlas, puis une journée libre en pension complète pour retrouver la médina, les jardins et les souks avant le départ.",
        introEn:
          "The return offers one last panorama of the High Atlas, then a free day on full board to revisit the medina, gardens and souks before departure.",
        introEs:
          "El regreso ofrece un último panorama del Alto Atlas, y después una jornada libre en pensión completa para volver a la medina, los jardines y los zocos antes de la partida.",
        galleryImages: gallery("remparts-atlas-neige", "jardin-majorelle", "marche-epices"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 6,
            title: "Ouarzazate – Marrakech",
            titleEn: "Ouarzazate – Marrakech",
            titleEs: "Uarzazate – Marrakech",
            description:
              "Retour à Marrakech (200 km) avec une vue panoramique sur le Haut Atlas.",
            descriptionEn:
              "Back to Marrakech (200 km) with a panoramic view of the High Atlas.",
            descriptionEs:
              "Regreso a Marrakech (200 km) con vista panorámica del Alto Atlas.",
            image: img("remparts-atlas-neige"),
            images: "",
          },
          {
            dayNumber: 7,
            title: "Journée libre à Marrakech",
            titleEn: "Free day in Marrakech",
            titleEs: "Jornada libre en Marrakech",
            description:
              "Journée libre en pension complète, avec de nombreuses possibilités d'excursions en option.",
            descriptionEn:
              "A free day on full board, with many optional excursions available.",
            descriptionEs:
              "Jornada libre en pensión completa, con numerosas excursiones opcionales.",
            image: img("jardin-majorelle"),
            images: "",
          },
          {
            dayNumber: 8,
            title: "Retour",
            titleEn: "Return home",
            titleEs: "Regreso",
            description:
              "Petit-déjeuner, temps libre puis transfert à l'aéroport en fonction des horaires de vol.",
            descriptionEn:
              "Breakfast, free time, then transfer to the airport according to flight times.",
            descriptionEs:
              "Desayuno, tiempo libre y traslado al aeropuerto según el horario del vuelo.",
            image: img("marrakech-koutoubia-bassin"),
            images: "",
          },
        ],
      },
    ],
  },

  // ───────────────────────── 3. Desert, riad & kasbah ─────────────────────────
  {
    destinationSlug: "maroc",
    tour: {
      name: "Maroc : désert, riad et kasbah en 4x4 privatif",
      nameEn: "Morocco: Desert, Riad and Kasbah by Private 4x4",
      nameEs: "Marruecos: desierto, riad y kasbah en 4x4 privado",
      slug: "maroc-desert-riad-kasbah-5j",
      image: img("chameau-dunes"),
      format: "journey",
      mapImage: "",
      tagline: "Une nuit en bivouac dans les dunes, un riad à Marrakech et Aït Ben Haddou",
      taglineEn: "A night in a dune bivouac, a riad in Marrakech and Aït Ben Haddou",
      taglineEs: "Una noche en vivac entre las dunas, un riad en Marrakech y Aït Ben Haddou",
      description:
        "Cinq jours pour goûter au désert sans renoncer au confort : un 4x4 climatisé avec chauffeur francophone, le col du Tizi n'Tichka, une nuit en bivouac à l'Erg Lihoudi, le lac Iriki, Ouarzazate et la kasbah d'Aït Ben Haddou. Hébergement en riad à Marrakech et en hôtel à Ouarzazate, départs garantis.",
      descriptionEn:
        "Five days to taste the desert without giving up comfort: an air-conditioned 4x4 with a French-speaking driver, the Tizi n'Tichka pass, a night in a bivouac at Erg Lihoudi, Lake Iriki, Ouarzazate and the kasbah of Aït Ben Haddou. Stays in a riad in Marrakech and a hotel in Ouarzazate, guaranteed departures.",
      descriptionEs:
        "Cinco días para probar el desierto sin renunciar a la comodidad: un 4x4 con aire acondicionado y conductor francófono, el puerto de Tizi n'Tichka, una noche en vivac en el Erg Lihoudi, el lago Iriki, Uarzazate y la kasbah de Aït Ben Haddou. Alojamiento en un riad en Marrakech y en un hotel en Uarzazate, salidas garantizadas.",
      price: 1042,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      includes:
        "Vols depuis la France,Transferts aéroport,4 nuits en riad / bivouac / hôtel,4 petits-déjeuners et 2 dîners,4x4 avec chauffeur francophone,Guide local pour Marrakech,Visites et entrées au programme,Assistance locale",
      includesEn:
        "Flights from France,Airport transfers,4 nights in a riad / bivouac / hotel,4 breakfasts and 2 dinners,4x4 with a French-speaking driver,Local guide for Marrakech,Visits and entrance fees listed,Local assistance",
      includesEs:
        "Vuelos desde Francia,Traslados al aeropuerto,4 noches en riad / vivac / hotel,4 desayunos y 2 cenas,4x4 con conductor francófono,Guía local en Marrakech,Visitas y entradas del programa,Asistencia local",
      departureFrom: "Barcelone",
      whenLabel: "Oct à nov | Fév à avr",
      whenLabelEn: "Oct to Nov | Feb to Apr",
      whenLabelEs: "Oct a nov | Feb a abr",
      bestMonths: "october,november,february,march,april",
      category: "multi-day",
      theme: "adventure",
      feeling: "revitalized",
      travelerTypes: "couples,solo,groups",
      maxGuests: 6,
      featured: false,
      order: 22,
    },
    chapters: [
      {
        title: "Marrakech",
        titleEn: "Marrakech",
        titleEs: "Marrakech",
        intro:
          "Le voyage commence dans un riad de la médina, entre cours à arcades, fontaines et lanternes ajourées, avant de laisser la ville rouge pour les dunes.",
        introEn:
          "The journey begins in a medina riad, among arcaded courtyards, fountains and pierced lanterns, before leaving the red city for the dunes.",
        introEs:
          "El viaje comienza en un riad de la medina, entre patios con arcos, fuentes y farolillos calados, antes de dejar la ciudad roja por las dunas.",
        galleryImages: gallery("riad-cour-arches", "marrakech-menara-reflet", "souk-lanterne"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 1,
            title: "Envol vers Marrakech",
            titleEn: "Flight to Marrakech",
            titleEs: "Vuelo a Marrakech",
            description:
              "Envol à destination du Maroc, accueil à l'aéroport, transfert à l'hôtel et installation. Dîner libre et nuit à Marrakech.",
            descriptionEn:
              "Fly to Morocco, airport welcome, transfer to the hotel and settling in. Dinner at leisure and overnight in Marrakech.",
            descriptionEs:
              "Vuelo a Marruecos, recibimiento en el aeropuerto, traslado al hotel e instalación. Cena libre y noche en Marrakech.",
            image: img("riad-cour-arches"),
            images: "",
          },
        ],
      },
      {
        title: "Zagora et l'Erg Lihoudi",
        titleEn: "Zagora and Erg Lihoudi",
        titleEs: "Zagora y el Erg Lihoudi",
        intro:
          "Du Haut Atlas aux premières dunes, le paysage s'ouvre peu à peu jusqu'à l'Erg Lihoudi, où la nuit se passe en bivouac sous un ciel d'étoiles, loin de tout.",
        introEn:
          "From the High Atlas to the first dunes, the landscape gradually opens up as far as Erg Lihoudi, where the night is spent in a bivouac under a sky full of stars, far from everything.",
        introEs:
          "Del Alto Atlas a las primeras dunas, el paisaje se va abriendo hasta el Erg Lihoudi, donde la noche transcurre en vivac bajo un cielo de estrellas, lejos de todo.",
        galleryImages: gallery("chameau-dunes", "4x4-dunes", "zagora-panneau"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 2,
            title: "Marrakech – Zagora – Erg Lihoudi",
            titleEn: "Marrakech – Zagora – Erg Lihoudi",
            titleEs: "Marrakech – Zagora – Erg Lihoudi",
            description:
              "Départ en 4x4 climatisé vers Zagora et le désert, en passant par Ouarzazate. Depuis l'Atlas, le paysage s'ouvre sur les dunes de l'Erg Lihoudi, où l'on passe la nuit en bivouac. Dîner inclus.",
            descriptionEn:
              "Set off in an air-conditioned 4x4 towards Zagora and the desert, via Ouarzazate. From the Atlas, the landscape opens onto the dunes of Erg Lihoudi, where you spend the night in a bivouac. Dinner included.",
            descriptionEs:
              "Salida en 4x4 con aire acondicionado hacia Zagora y el desierto, pasando por Uarzazate. Desde el Atlas, el paisaje se abre a las dunas del Erg Lihoudi, donde se pasa la noche en vivac. Cena incluida.",
            image: img("4x4-dunes"),
            images: "",
          },
        ],
      },
      {
        title: "Lac Iriki et Ouarzazate",
        titleEn: "Lake Iriki and Ouarzazate",
        titleEs: "Lago Iriki y Uarzazate",
        intro:
          "Une traversée du grand désert du lac Iriki jusqu'à Foum Zguid, puis la route de Ouarzazate, entre kasbahs de terre et vallées de palmiers.",
        introEn:
          "A crossing of the great Lake Iriki desert as far as Foum Zguid, then the road to Ouarzazate, among earthen kasbahs and palm-filled valleys.",
        introEs:
          "Una travesía del gran desierto del lago Iriki hasta Foum Zguid, y después la carretera de Uarzazate, entre kasbahs de adobe y valles de palmeras.",
        galleryImages: gallery("kasbah-ruines-vallee", "palmeraie", "mosquee-rose"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 3,
            title: "Erg Lihoudi – lac Iriki – Foum Zguid – Ouarzazate",
            titleEn: "Erg Lihoudi – Lake Iriki – Foum Zguid – Ouarzazate",
            titleEs: "Erg Lihoudi – lago Iriki – Foum Zguid – Uarzazate",
            description:
              "Départ vers Foum Zguid en traversant le grand désert du lac Iriki, puis route vers Ouarzazate. Dîner inclus.",
            descriptionEn:
              "Set off for Foum Zguid across the great Lake Iriki desert, then on to Ouarzazate. Dinner included.",
            descriptionEs:
              "Salida hacia Foum Zguid cruzando el gran desierto del lago Iriki, y después hacia Uarzazate. Cena incluida.",
            image: img("kasbah-ruines-vallee"),
            images: "",
          },
        ],
      },
      {
        title: "Aït Ben Haddou et retour à Marrakech",
        titleEn: "Aït Ben Haddou and back to Marrakech",
        titleEs: "Aït Ben Haddou y regreso a Marrakech",
        intro:
          "Ouarzazate, le « Hollywood berbère », puis la kasbah d'Aït Ben Haddou et le col du Tizi n'Tichka à 2 260 m, pour une dernière soirée à Marrakech avant le retour.",
        introEn:
          "Ouarzazate, the \"Berber Hollywood\", then the kasbah of Aït Ben Haddou and the Tizi n'Tichka pass at 2,260 m, for a last evening in Marrakech before heading home.",
        introEs:
          "Uarzazate, el «Hollywood bereber», y después la kasbah de Aït Ben Haddou y el puerto de Tizi n'Tichka a 2.260 m, para una última tarde en Marrakech antes del regreso.",
        galleryImages: gallery("ait-benhaddou-vue", "kasbah-ait-benhaddou", "remparts-atlas-neige"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 4,
            title: "Ouarzazate – Aït Ben Haddou – Marrakech",
            titleEn: "Ouarzazate – Aït Ben Haddou – Marrakech",
            titleEs: "Uarzazate – Aït Ben Haddou – Marrakech",
            description:
              "Ouarzazate, le « Hollywood berbère », puis la kasbah d'Aït Ben Haddou, avant de franchir le col du Tizi n'Tichka pour rejoindre Marrakech.",
            descriptionEn:
              "Ouarzazate, the \"Berber Hollywood\", then the kasbah of Aït Ben Haddou, before crossing the Tizi n'Tichka pass to reach Marrakech.",
            descriptionEs:
              "Uarzazate, el «Hollywood bereber», y después la kasbah de Aït Ben Haddou, antes de cruzar el puerto de Tizi n'Tichka para llegar a Marrakech.",
            image: img("ait-benhaddou-vue"),
            images: "",
          },
          {
            dayNumber: 5,
            title: "Retour",
            titleEn: "Return home",
            titleEs: "Regreso",
            description:
              "Petit-déjeuner, temps libre puis transfert à l'aéroport en fonction des horaires de vol.",
            descriptionEn:
              "Breakfast, free time, then transfer to the airport according to flight times.",
            descriptionEs:
              "Desayuno, tiempo libre y traslado al aeropuerto según el horario del vuelo.",
            image: img("souk-lanterne"),
            images: "",
          },
        ],
      },
    ],
  },

  // ───────────────────────── 4. Fes & Chefchaouen ─────────────────────────
  {
    destinationSlug: "maroc",
    tour: {
      name: "Maroc : Fès et Chefchaouen, la médina et la ville bleue",
      nameEn: "Morocco: Fez and Chefchaouen, the Medina and the Blue City",
      nameEs: "Marruecos: Fez y Chefchaouen, la medina y la ciudad azul",
      slug: "maroc-fes-chefchaouen-5j",
      image: img("chefchaouen-ruelle-escaliers"),
      format: "journey",
      mapImage: "",
      tagline: "Cinq jours en privatif entre la médina de Fès et les ruelles bleues de Chefchaouen",
      taglineEn: "Five private days between the Fez medina and the blue lanes of Chefchaouen",
      taglineEs: "Cinco días en privado entre la medina de Fez y las callejuelas azules de Chefchaouen",
      description:
        "Une escapade de cinq jours en véhicule privé avec chauffeur : une journée de visite guidée dans la médina de Fès, la route vers Chefchaouen et ses ruelles bleues, puis une matinée libre dans les souks avant le retour. Départs garantis, limités à cinq participants, en demi-pension avec guides locaux.",
      descriptionEn:
        "A five-day escape in a private vehicle with a driver: a guided day in the Fez medina, the road to Chefchaouen and its blue lanes, then a free morning in the souks before heading back. Guaranteed departures, limited to five participants, on half board with local guides.",
      descriptionEs:
        "Una escapada de cinco días en vehículo privado con conductor: una jornada de visita guiada por la medina de Fez, la carretera a Chefchaouen y sus callejuelas azules, y una mañana libre en los zocos antes del regreso. Salidas garantizadas, limitadas a cinco participantes, en media pensión con guías locales.",
      price: 1473,
      originalPrice: 0,
      currency: "EUR",
      durationValue: 4,
      durationUnit: "nights",
      duration: "4 nuits",
      durationEn: "4 nights",
      durationEs: "4 noches",
      includes:
        "Vols depuis la France,Transferts aéroport,4 nuits en hôtel,Demi-pension (4 petits-déjeuners 4 dîners et 1 déjeuner),Véhicule privé avec chauffeur,Guides locaux à Fès et Chefchaouen,Visites et entrées au programme,Assistance locale",
      includesEn:
        "Flights from France,Airport transfers,4 nights in a hotel,Half board (4 breakfasts 4 dinners and 1 lunch),Private vehicle with driver,Local guides in Fez and Chefchaouen,Visits and entrance fees listed,Local assistance",
      includesEs:
        "Vuelos desde Francia,Traslados al aeropuerto,4 noches en hotel,Media pensión (4 desayunos 4 cenas y 1 almuerzo),Vehículo privado con conductor,Guías locales en Fez y Chefchaouen,Visitas y entradas del programa,Asistencia local",
      departureFrom: "Marseille",
      whenLabel: "Mars à mai | Sept à nov",
      whenLabelEn: "March to May | Sept to Nov",
      whenLabelEs: "Marzo a mayo | Sept a nov",
      bestMonths: "march,april,may,september,october,november",
      category: "multi-day",
      theme: "culture",
      feeling: "distraction",
      travelerTypes: "couples,honeymoon,solo",
      maxGuests: 5,
      featured: false,
      order: 23,
    },
    chapters: [
      {
        title: "Fès",
        titleEn: "Fez",
        titleEs: "Fez",
        intro:
          "Fès et sa médina, l'une des plus vastes du monde arabe : un dédale de ruelles, de medersas aux cours couvertes de zellige et de souks où l'on s'oriente à l'odeur des épices et du cuir.",
        introEn:
          "Fez and its medina, one of the largest in the Arab world: a maze of lanes, medersas with zellige-covered courtyards and souks where you find your way by the smell of spices and leather.",
        introEs:
          "Fez y su medina, una de las más extensas del mundo árabe: un dédalo de callejuelas, medersas con patios cubiertos de zellige y zocos donde uno se orienta por el olor de las especias y del cuero.",
        galleryImages: gallery("fes-vue-medina", "fes-medersa-fontaine", "medersa-cour", "riad-patio-fontaine"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 1,
            title: "Arrivée à Fès",
            titleEn: "Arrival in Fez",
            titleEs: "Llegada a Fez",
            description:
              "Arrivée à Fès, transfert à l'hôtel et installation. Temps libre pour se reposer et s'imprégner de l'ambiance de la ville.",
            descriptionEn:
              "Arrival in Fez, transfer to the hotel and settling in. Free time to rest and soak up the atmosphere of the city.",
            descriptionEs:
              "Llegada a Fez, traslado al hotel e instalación. Tiempo libre para descansar e impregnarse del ambiente de la ciudad.",
            image: img("riad-patio-fontaine"),
            images: "",
          },
          {
            dayNumber: 2,
            title: "Fès, visite guidée",
            titleEn: "Fez, guided visit",
            titleEs: "Fez, visita guiada",
            description:
              "Journée de visite guidée de Fès, de ses trésors historiques et culturels, dans l'atmosphère unique de la médina.",
            descriptionEn:
              "A full day of guided sightseeing in Fez, through its historical and cultural treasures, in the unique atmosphere of the medina.",
            descriptionEs:
              "Jornada de visita guiada por Fez, sus tesoros históricos y culturales, en el ambiente único de la medina.",
            image: img("fes-medersa-fontaine"),
            images: "",
          },
        ],
      },
      {
        title: "Chefchaouen, la ville bleue",
        titleEn: "Chefchaouen, the Blue City",
        titleEs: "Chefchaouen, la ciudad azul",
        intro:
          "Chefchaouen déroule ses ruelles peintes en bleu, ses escaliers fleuris et ses patios, loin de l'agitation des grandes villes impériales. On y flâne sans programme, appareil photo en main.",
        introEn:
          "Chefchaouen unfolds its blue-painted lanes, flower-lined stairways and courtyards, far from the bustle of the big imperial cities. You wander with no agenda, camera in hand.",
        introEs:
          "Chefchaouen despliega sus callejuelas pintadas de azul, sus escaleras floridas y sus patios, lejos del bullicio de las grandes ciudades imperiales. Se pasea sin programa, cámara en mano.",
        galleryImages: gallery(
          "chefchaouen-ruelle-escaliers",
          "chefchaouen-patio",
          "chefchaouen-escaliers-femme",
          "chefchaouen-ruelle-tapis"
        ),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 3,
            title: "Fès – Chefchaouen",
            titleEn: "Fez – Chefchaouen",
            titleEs: "Fez – Chefchaouen",
            description:
              "Route confortable vers Chefchaouen (200 km) à travers les paysages marocains, puis découverte de la ville bleue et de ses ruelles pittoresques.",
            descriptionEn:
              "A comfortable drive to Chefchaouen (200 km) through Moroccan landscapes, then a first look at the blue city and its picturesque lanes.",
            descriptionEs:
              "Ruta cómoda hacia Chefchaouen (200 km) por los paisajes marroquíes, y después descubrimiento de la ciudad azul y sus pintorescas callejuelas.",
            image: img("chefchaouen-ruelle-escaliers"),
            images: "",
          },
          {
            dayNumber: 4,
            title: "Chefchaouen – Fès",
            titleEn: "Chefchaouen – Fez",
            titleEs: "Chefchaouen – Fez",
            description:
              "Matinée libre pour flâner dans les souks de Chefchaouen ou en découvrir les recoins, puis retour vers Fès.",
            descriptionEn:
              "A free morning to browse the Chefchaouen souks or explore its hidden corners, then back to Fez.",
            descriptionEs:
              "Mañana libre para pasear por los zocos de Chefchaouen o descubrir sus rincones, y regreso a Fez.",
            image: img("epices-pyramides"),
            images: "",
          },
        ],
      },
      {
        title: "Départ",
        titleEn: "Departure",
        titleEs: "Partida",
        intro:
          "Un dernier petit-déjeuner à Fès, entre portes ciselées et zellige, avant le transfert à l'aéroport.",
        introEn:
          "One last breakfast in Fez, among carved doors and zellige tilework, before the airport transfer.",
        introEs:
          "Un último desayuno en Fez, entre puertas labradas y azulejos zellige, antes del traslado al aeropuerto.",
        galleryImages: gallery("portes-zellige", "souk-fruits", "epices-pyramides"),
        mapMarkerX: 0,
        mapMarkerY: 0,
        days: [
          {
            dayNumber: 5,
            title: "Retour",
            titleEn: "Return home",
            titleEs: "Regreso",
            description:
              "Petit-déjeuner puis transfert à l'aéroport en fonction des horaires de vol.",
            descriptionEn:
              "Breakfast, then transfer to the airport according to flight times.",
            descriptionEs:
              "Desayuno y traslado al aeropuerto según el horario del vuelo.",
            image: img("portes-zellige"),
            images: "",
          },
        ],
      },
    ],
  },
];

async function main() {
  const { runSeedBatch, disconnect } = await import("./lib/seedTripsRunner");
  try {
    await runSeedBatch({ newStandardTrips: [], newJourneyTrips: journeyTrips });
    console.log("\nDone.");
  } finally {
    await disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
