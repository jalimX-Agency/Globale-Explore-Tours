import type { Localized } from "@/lib/experienceTypesData";

const R2 = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev";

export type WhatTypePage = {
  slug: string;
  themeParam?: "adventure" | "culture" | "relax" | "family";
  destinationSlug?: string;
  regionSlug?: string;
  heroImage: string;
  title: Localized;
  intro: Localized;
};

export const WHAT_TYPE_PAGES: WhatTypePage[] = [
  {
    slug: "adventure-holidays",
    themeParam: "adventure",
    heroImage: `${R2}/experiences/what-adventure.jpg`,
    title: { fr: "Voyages d'aventure", en: "Adventure holidays", es: "Vacaciones de aventura" },
    intro: {
      fr: "Le voyage d'aventure, c'est sortir du confort habituel sans sortir du confort tout court — un quad qui grimpe une dune, une randonnée sur un glacier, une nuit sous tente dans le désert. Ce n'est pas une question de performance physique, mais de sensation : le cœur qui s'accélère un instant, puis le calme qui suit. Nos itinéraires d'aventure dosent exactement ce niveau-là — assez pour se sentir vivant, jamais assez pour se sentir en danger.",
      en: "Adventure travel means stepping outside the everyday, without stepping outside comfort altogether — a quad climbing a dune, a hike across a glacier, a night under canvas in the desert. It isn't about physical performance so much as sensation: the heartbeat that quickens for a moment, then the calm that follows. Our adventure itineraries are dosed to exactly that level — enough to feel alive, never enough to feel at risk.",
      es: "El viaje de aventura consiste en salir de lo habitual sin salir de la comodidad — un quad que sube una duna, una caminata sobre un glaciar, una noche bajo la tienda en el desierto. No se trata de rendimiento físico, sino de sensación: el corazón que se acelera un instante, y la calma que llega después. Nuestros itinerarios de aventura dosifican exactamente ese nivel — lo suficiente para sentirse vivo, nunca lo suficiente para sentirse en peligro.",
    },
  },
  {
    slug: "cultural-holidays",
    themeParam: "culture",
    heroImage: `${R2}/experiences/what-culture.jpg`,
    title: { fr: "Immersion culturelle", en: "Cultural holidays", es: "Vacaciones culturales" },
    intro: {
      fr: "Voyager pour la culture, ce n'est pas cocher une liste de musées. C'est un cours de cuisine dans une maison berbère, un souk traversé avec un guide qui connaît chaque marchand par son prénom, une conversation qui en dit plus qu'un audioguide. Nos voyages culturels privilégient la rencontre à la visite — et le temps de vraiment comprendre un endroit plutôt que de simplement le traverser.",
      en: "Travelling for culture isn't about ticking off a list of museums. It's a cooking class in a Berber home, a souk crossed with a guide who knows every stallholder by name, a conversation that says more than any audio guide. Our cultural trips favour real encounters over sightseeing — and the time to actually understand a place rather than just pass through it.",
      es: "Viajar por cultura no es marcar una lista de museos. Es una clase de cocina en una casa bereber, un zoco recorrido con un guía que conoce a cada vendedor por su nombre, una conversación que dice más que cualquier audioguía. Nuestros viajes culturales prefieren el encuentro real a la simple visita — y el tiempo de entender de verdad un lugar en lugar de solo atravesarlo.",
    },
  },
  {
    slug: "wellness-holidays",
    themeParam: "relax",
    heroImage: `${R2}/experiences/what-relax.jpg`,
    title: { fr: "Bien-être et détente", en: "Wellness holidays", es: "Vacaciones de bienestar" },
    intro: {
      fr: "Le vrai luxe, parfois, c'est de ne rien avoir à faire. Un hammam qui dure aussi longtemps qu'on le souhaite, une plage sans personne d'autre à l'horizon, une journée sans montre. Nos voyages bien-être ne cherchent pas à vous occuper — ils cherchent à vous laisser tranquille, dans le meilleur sens du terme.",
      en: "Sometimes real luxury is having nothing to do. A hammam that lasts exactly as long as you want, a beach with no one else on the horizon, a day with no watch to check. Our wellness trips don't try to keep you busy — they try to leave you alone, in the best possible sense.",
      es: "A veces el verdadero lujo es no tener nada que hacer. Un hammam que dura tanto como se desee, una playa sin nadie más en el horizonte, un día sin reloj. Nuestros viajes de bienestar no buscan mantenerlo ocupado — buscan dejarlo tranquilo, en el mejor sentido posible.",
    },
  },
  {
    slug: "family-experiences",
    themeParam: "family",
    heroImage: `${R2}/experiences/what-family.jpg`,
    title: { fr: "Expériences en famille", en: "Family experiences", es: "Experiencias en familia" },
    intro: {
      fr: "Un bon voyage en famille se reconnaît à un détail simple : tout le monde, à un moment donné, oublie de regarder son téléphone. Nos expériences en famille sont pensées pour ça — des activités qui parlent aux enfants sans ennuyer les parents, et un rythme qui n'épuise personne.",
      en: "A good family trip is recognisable by one simple detail: at some point, everyone forgets to check their phone. Our family experiences are built for exactly that — activities that speak to children without boring the parents, and a pace that wears no one out.",
      es: "Un buen viaje en familia se reconoce por un detalle simple: en algún momento, todos se olvidan de mirar el teléfono. Nuestras experiencias en familia están pensadas para eso — actividades que hablan a los niños sin aburrir a los padres, y un ritmo que no agota a nadie.",
    },
  },
  {
    slug: "safari-holidays",
    destinationSlug: "kenya",
    regionSlug: "afrique",
    heroImage: `${R2}/destinations/kenya.jpg`,
    title: { fr: "Safaris", en: "Safaris", es: "Safaris" },
    intro: {
      fr: "Il y a un avant et un après premier safari. Le moment où un lion traverse la piste à quelques mètres du véhicule, où la savane s'étend à perte de vue, où le silence est soudain interrompu par un troupeau en mouvement — des instants qu'aucune photo ne rend vraiment justice. Nos safaris sont construits avec des guides qui savent où regarder, et surtout, quand se taire.",
      en: "There's a before and an after your first safari. The moment a lion crosses the track metres from the vehicle, when the savannah stretches out of sight, when silence is suddenly broken by a moving herd — moments no photo really does justice to. Our safaris are built with guides who know where to look, and, more importantly, when to stay quiet.",
      es: "Hay un antes y un después del primer safari. El momento en que un león cruza la pista a pocos metros del vehículo, cuando la sabana se extiende hasta donde alcanza la vista, cuando el silencio se rompe de repente por una manada en movimiento — instantes que ninguna foto hace justicia. Nuestros safaris están construidos con guías que saben dónde mirar, y sobre todo, cuándo callar.",
    },
  },
  {
    slug: "train-journeys",
    destinationSlug: "suisse",
    regionSlug: "europe",
    heroImage: `${R2}/destinations/suisse-hero.jpg`,
    title: { fr: "Voyages en train", en: "Train journeys", es: "Viajes en tren" },
    intro: {
      fr: "Il y a une joie particulière à voir un paysage défiler par la fenêtre d'un train plutôt que depuis un siège d'avion — le rythme plus lent, la montagne qui grossit peu à peu, le lac qui apparaît d'un coup au détour d'un tunnel. Nos voyages en train privilégient cette lenteur-là, celle qui laisse le temps de vraiment regarder.",
      en: "There's a particular joy in watching a landscape unfold through a train window rather than from a plane seat — the slower rhythm, the mountain growing closer bit by bit, the lake appearing all at once around a tunnel bend. Our train journeys favour exactly that slowness, the kind that leaves time to really look.",
      es: "Hay una alegría particular en ver un paisaje desfilar por la ventana de un tren en lugar de desde un asiento de avión — el ritmo más lento, la montaña que crece poco a poco, el lago que aparece de repente al salir de un túnel. Nuestros viajes en tren privilegian esa lentitud, la que deja tiempo para mirar de verdad.",
    },
  },
  {
    slug: "desert-holidays",
    destinationSlug: "maroc",
    regionSlug: "afrique",
    heroImage: `${R2}/destinations/maroc.jpg`,
    title: { fr: "Voyages dans le désert", en: "Desert holidays", es: "Viajes al desierto" },
    intro: {
      fr: "Le désert a ce pouvoir rare de rendre le silence presque physique. Une nuit sous tente dans le grand Sahara, un ciel sans une seule lumière artificielle, des dunes qui changent de couleur toutes les heures — un décor qui ne ressemble à aucun autre, et qu'on ne voit vraiment qu'en s'y arrêtant.",
      en: "The desert has a rare power to make silence feel almost physical. A night under canvas in the great Sahara, a sky with not a single artificial light, dunes that change colour by the hour — a setting like no other, and one you only really see by stopping in it.",
      es: "El desierto tiene ese poder raro de hacer que el silencio se sienta casi físico. Una noche bajo la tienda en el gran Sahara, un cielo sin una sola luz artificial, dunas que cambian de color cada hora — un escenario como ningún otro, y que solo se ve de verdad deteniéndose en él.",
    },
  },
  {
    slug: "island-holidays",
    destinationSlug: "maldives",
    regionSlug: "ocean-indien",
    heroImage: `${R2}/destinations/maldives.jpg`,
    title: { fr: "Îles et lagons", en: "Islands & lagoons", es: "Islas y lagunas" },
    intro: {
      fr: "Certaines destinations n'ont besoin d'aucun programme. Une villa sur pilotis, un lagon à quelques marches de la terrasse, et rien d'autre à décider que l'heure du prochain repas. Nos séjours sur les îles sont pensés pour ce genre de vide volontaire — le plus difficile à trouver, et le plus recherché.",
      en: "Some destinations need no itinerary at all. An overwater villa, a lagoon a few steps from the terrace, and nothing else to decide but when to eat next. Our island stays are built for exactly that kind of deliberate emptiness — the hardest kind to find, and the most sought after.",
      es: "Algunos destinos no necesitan ningún programa. Una villa sobre el agua, una laguna a pocos pasos de la terraza, y nada más que decidir salvo la hora de la próxima comida. Nuestras estancias en las islas están pensadas para ese tipo de vacío deliberado — el más difícil de encontrar, y el más buscado.",
    },
  },
];

export function getWhatTypePage(slug: string) {
  return WHAT_TYPE_PAGES.find((p) => p.slug === slug);
}
