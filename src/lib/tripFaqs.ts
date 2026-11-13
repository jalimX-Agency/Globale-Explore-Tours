import type { FaqData } from "@/components/get/FaqAccordion";

// Trip-specific questions shown on a trip page (with FAQPage structured data), keyed by trip
// slug. Every answer restates facts already on the trip page (itinerary, inclusions, best
// months); prices are left to the page itself so they can never drift from the database.
// Started with the Morocco circuits, the agency's sales priority in November 2026.

type Qa = [question: string, answer: string];

function faqs(fr: Qa[], en: Qa[], es: Qa[]): FaqData[] {
  return fr.map(([question, answer], i) => ({
    question,
    answer,
    questionEn: en[i][0],
    answerEn: en[i][1],
    questionEs: es[i][0],
    answerEs: es[i][1],
  }));
}

const CUSTOM: [Qa, Qa, Qa] = [
  [
    "Peut-on adapter ce circuit ?",
    "Oui. Comme tous nos voyages, ce circuit peut être ajusté : dates, catégorie d'hébergement, nuits supplémentaires ou extension. Envoyez-nous une demande, un conseiller vous répond avec une proposition sur mesure.",
  ],
  [
    "Can this tour be adapted?",
    "Yes. Like all our trips, this tour can be adjusted: dates, hotel category, extra nights or an extension. Send us a request and an advisor will reply with a tailor-made proposal.",
  ],
  [
    "¿Se puede adaptar este circuito?",
    "Sí. Como todos nuestros viajes, este circuito puede ajustarse: fechas, categoría de alojamiento, noches adicionales o una extensión. Envíenos una solicitud y un asesor le responderá con una propuesta a medida.",
  ],
];

export const TRIP_FAQS: Record<string, FaqData[]> = {
  "maroc-circuit-villes-imperiales-8j": faqs(
    [
      [
        "Quelles villes visite-t-on pendant le circuit des villes impériales ?",
        "Marrakech, Casablanca, Rabat, Meknès, le site romain de Volubilis et Fès. Le retour vers Marrakech traverse le Moyen Atlas par Immouzer du Kandar, Ifrane et Beni Mellal.",
      ],
      [
        "Quels repas sont inclus ?",
        "Les petits-déjeuners et les dîners, du dîner du premier soir au petit-déjeuner du dernier jour. Les déjeuners ne sont pas inclus, ce qui laisse le choix de goûter la cuisine locale en route.",
      ],
      [
        "Le circuit est-il accompagné ?",
        "Oui, c'est un circuit accompagné, avec un guide local pour les visites et le transport en autocar ou minibus. Une journée libre à Marrakech permet aussi de flâner à son rythme.",
      ],
      [
        "Quelle est la meilleure période pour ce circuit ?",
        "Le printemps (mars à mai) et l'automne (septembre à novembre), quand les températures sont les plus agréables pour visiter les médinas et prendre la route.",
      ],
      CUSTOM[0],
    ],
    [
      [
        "Which cities does the imperial cities tour visit?",
        "Marrakech, Casablanca, Rabat, Meknes, the Roman site of Volubilis and Fez. The drive back to Marrakech crosses the Middle Atlas via Immouzer du Kandar, Ifrane and Beni Mellal.",
      ],
      [
        "Which meals are included?",
        "Breakfasts and dinners, from dinner on the first evening to breakfast on the last day. Lunches are not included, so you can try local food along the way.",
      ],
      [
        "Is the tour guided?",
        "Yes, it is a guided tour, with a local guide for the visits and transport by coach or minibus. A free day in Marrakech also lets you explore at your own pace.",
      ],
      [
        "When is the best time for this tour?",
        "Spring (March to May) and autumn (September to November), when temperatures are most pleasant for exploring the medinas and travelling by road.",
      ],
      CUSTOM[1],
    ],
    [
      [
        "¿Qué ciudades visita el circuito de las ciudades imperiales?",
        "Marrakech, Casablanca, Rabat, Mequinez, el yacimiento romano de Volubilis y Fez. El regreso a Marrakech cruza el Medio Atlas por Immouzer du Kandar, Ifrane y Beni Mellal.",
      ],
      [
        "¿Qué comidas están incluidas?",
        "Los desayunos y las cenas, desde la cena de la primera noche hasta el desayuno del último día. Los almuerzos no están incluidos, así puede probar la cocina local durante el viaje.",
      ],
      [
        "¿Es un circuito guiado?",
        "Sí, es un circuito acompañado, con un guía local para las visitas y transporte en autocar o minibús. Un día libre en Marrakech permite además pasear a su ritmo.",
      ],
      [
        "¿Cuál es la mejor época para este circuito?",
        "La primavera (de marzo a mayo) y el otoño (de septiembre a noviembre), cuando las temperaturas son más agradables para visitar las medinas y viajar por carretera.",
      ],
      CUSTOM[2],
    ],
  ),

  "maroc-grand-sud-kasbahs-8j": faqs(
    [
      [
        "Quel est l'itinéraire du circuit grand sud ?",
        "Marrakech, le col du Tizi n'Tichka à 2 260 m, la kasbah d'Aït Ben Haddou et Ouarzazate, les gorges du Todra jusqu'à Erfoud, le Tafilalet et ses oasis, puis le retour par Tazarine et Ouarzazate avant deux jours à Marrakech.",
      ],
      [
        "Les journées de route sont-elles longues ?",
        "Certaines étapes sont longues : environ 220 km de Marrakech à Ouarzazate, 320 km jusqu'à Erfoud et 350 km pour revenir par Tazarine. Le véhicule est climatisé et les paysages du sud occupent une grande partie de la route.",
      ],
      [
        "Quels repas sont inclus ?",
        "La pension complète, du dîner du premier jour au petit-déjeuner du dernier jour, y compris pendant la journée libre à Marrakech.",
      ],
      [
        "Quelle est la meilleure période pour le grand sud ?",
        "D'octobre à novembre et de février à avril. En été, la chaleur est forte dans le sud et aux portes du Sahara.",
      ],
      CUSTOM[0],
    ],
    [
      [
        "What is the route of the southern Morocco tour?",
        "Marrakech, the Tizi n'Tichka pass at 2,260 m, the kasbah of Ait Ben Haddou and Ouarzazate, the Todra gorges to Erfoud, the Tafilalet and its oases, then back via Tazarine and Ouarzazate before two days in Marrakech.",
      ],
      [
        "Are the driving days long?",
        "Some stages are long: about 220 km from Marrakech to Ouarzazate, 320 km to Erfoud and 350 km back via Tazarine. The vehicle is air-conditioned and the southern landscapes fill much of the drive.",
      ],
      [
        "Which meals are included?",
        "Full board, from dinner on the first day to breakfast on the last day, including the free day in Marrakech.",
      ],
      [
        "When is the best time for southern Morocco?",
        "October to November and February to April. In summer the heat is strong in the south and at the edge of the Sahara.",
      ],
      CUSTOM[1],
    ],
    [
      [
        "¿Cuál es el itinerario del circuito por el gran sur?",
        "Marrakech, el puerto del Tizi n'Tichka a 2.260 m, la kasba de Ait Ben Haddou y Ouarzazate, las gargantas del Todra hasta Erfoud, el Tafilalet y sus oasis, y la vuelta por Tazarine y Ouarzazate antes de dos días en Marrakech.",
      ],
      [
        "¿Son largas las jornadas de carretera?",
        "Algunas etapas son largas: unos 220 km de Marrakech a Ouarzazate, 320 km hasta Erfoud y 350 km de regreso por Tazarine. El vehículo tiene aire acondicionado y los paisajes del sur ocupan gran parte del trayecto.",
      ],
      [
        "¿Qué comidas están incluidas?",
        "La pensión completa, desde la cena del primer día hasta el desayuno del último, incluido el día libre en Marrakech.",
      ],
      [
        "¿Cuál es la mejor época para el gran sur?",
        "De octubre a noviembre y de febrero a abril. En verano el calor es fuerte en el sur y a las puertas del Sáhara.",
      ],
      CUSTOM[2],
    ],
  ),

  "maroc-desert-riad-kasbah-5j": faqs(
    [
      [
        "Où dort-on pendant ce voyage dans le désert ?",
        "En riad à Marrakech, une nuit en bivouac dans les dunes de l'Erg Lihoudi, près de Zagora, puis en hôtel à Ouarzazate.",
      ],
      [
        "Comment se déroulent les trajets ?",
        "En 4x4 climatisé avec un chauffeur francophone, de Marrakech à Zagora et l'Erg Lihoudi, puis à travers le lac Iriki jusqu'à Foum Zguid et Ouarzazate, avant le retour par Aït Ben Haddou et le col du Tizi n'Tichka.",
      ],
      [
        "Quels repas sont inclus ?",
        "Quatre petits-déjeuners et deux dîners : celui du bivouac et celui de Ouarzazate. Les autres repas sont libres.",
      ],
      [
        "Quelle est la meilleure période pour le désert marocain ?",
        "D'octobre à novembre et de février à avril, quand les journées sont douces. Les nuits dans le désert restent fraîches : prévoyez un vêtement chaud.",
      ],
      CUSTOM[0],
    ],
    [
      [
        "Where do you sleep on this desert trip?",
        "In a riad in Marrakech, one night in a desert camp in the Erg Lihoudi dunes near Zagora, then in a hotel in Ouarzazate.",
      ],
      [
        "How do you travel?",
        "By air-conditioned 4x4 with a French-speaking driver, from Marrakech to Zagora and the Erg Lihoudi, then across Lake Iriki to Foum Zguid and Ouarzazate, before returning via Ait Ben Haddou and the Tizi n'Tichka pass.",
      ],
      [
        "Which meals are included?",
        "Four breakfasts and two dinners: at the desert camp and in Ouarzazate. Other meals are at your own choice.",
      ],
      [
        "When is the best time for the Moroccan desert?",
        "October to November and February to April, when days are mild. Desert nights stay cool, so bring something warm.",
      ],
      CUSTOM[1],
    ],
    [
      [
        "¿Dónde se duerme durante este viaje al desierto?",
        "En un riad en Marrakech, una noche en campamento en las dunas del Erg Lihoudi, cerca de Zagora, y después en un hotel en Ouarzazate.",
      ],
      [
        "¿Cómo son los trayectos?",
        "En 4x4 con aire acondicionado y conductor francófono, de Marrakech a Zagora y el Erg Lihoudi, después a través del lago Iriki hasta Foum Zguid y Ouarzazate, con regreso por Ait Ben Haddou y el puerto del Tizi n'Tichka.",
      ],
      [
        "¿Qué comidas están incluidas?",
        "Cuatro desayunos y dos cenas: la del campamento y la de Ouarzazate. Las demás comidas son libres.",
      ],
      [
        "¿Cuál es la mejor época para el desierto marroquí?",
        "De octubre a noviembre y de febrero a abril, cuando los días son suaves. Las noches en el desierto siguen siendo frescas: lleve algo de abrigo.",
      ],
      CUSTOM[2],
    ],
  ),

  "maroc-fes-chefchaouen-5j": faqs(
    [
      [
        "Ce voyage à Fès et Chefchaouen se fait-il en groupe ?",
        "En petit groupe limité à cinq participants, en véhicule privé avec chauffeur, et avec des guides locaux à Fès et à Chefchaouen. Les départs sont garantis.",
      ],
      [
        "Combien de temps passe-t-on à Chefchaouen ?",
        "Une première découverte le jour de l'arrivée, après environ 200 km de route depuis Fès, puis une matinée libre le lendemain pour flâner dans les souks et les ruelles bleues avant le retour.",
      ],
      [
        "Quels repas sont inclus ?",
        "La demi-pension : quatre petits-déjeuners, quatre dîners et un déjeuner.",
      ],
      [
        "Quelle est la meilleure période pour Fès et Chefchaouen ?",
        "Le printemps (mars à mai) et l'automne (septembre à novembre), quand il fait bon pour marcher dans les médinas.",
      ],
      CUSTOM[0],
    ],
    [
      [
        "Is this Fez and Chefchaouen trip in a group?",
        "In a small group of up to five travellers, by private vehicle with a driver, with local guides in Fez and Chefchaouen. Departures are guaranteed.",
      ],
      [
        "How much time do you spend in Chefchaouen?",
        "A first look round on arrival day, after about 200 km by road from Fez, then a free morning the next day to wander the souks and blue alleys before heading back.",
      ],
      [
        "Which meals are included?",
        "Half board: four breakfasts, four dinners and one lunch.",
      ],
      [
        "When is the best time for Fez and Chefchaouen?",
        "Spring (March to May) and autumn (September to November), when it is pleasant to walk through the medinas.",
      ],
      CUSTOM[1],
    ],
    [
      [
        "¿Este viaje a Fez y Chefchaouen es en grupo?",
        "En grupo reducido de hasta cinco viajeros, en vehículo privado con conductor y con guías locales en Fez y Chefchaouen. Las salidas están garantizadas.",
      ],
      [
        "¿Cuánto tiempo se pasa en Chefchaouen?",
        "Un primer recorrido el día de la llegada, tras unos 200 km de carretera desde Fez, y una mañana libre al día siguiente para pasear por los zocos y las callejuelas azules antes del regreso.",
      ],
      [
        "¿Qué comidas están incluidas?",
        "Media pensión: cuatro desayunos, cuatro cenas y un almuerzo.",
      ],
      [
        "¿Cuál es la mejor época para Fez y Chefchaouen?",
        "La primavera (de marzo a mayo) y el otoño (de septiembre a noviembre), cuando apetece caminar por las medinas.",
      ],
      CUSTOM[2],
    ],
  ),
};
