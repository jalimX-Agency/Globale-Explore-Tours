const R2 = process.env.NEXT_PUBLIC_R2_URL!;

export type Localized = { fr: string; en: string; es: string };

export type ReassuranceCard = { title: Localized; body: Localized };
export type FaqPair = { question: Localized; answer: Localized };
export type DestinationCard = { key: string; image: string; name: Localized; blurb: Localized; href: string };
export type LinkCard = { key: string; image: string; title: Localized; desc: Localized; href: string };
export type LinkCardGroup = { heading: Localized; cards: LinkCard[] };
// A named carousel section within a page — e.g. couples-holidays' "Romance" / "Adventure" /
// "Culture & Cuisine" / "Beach & Relaxation" — each with its own real, theme-filtered trip carousel.
// Mirrors Black Tomato's real couples-holidays page, which is built from several of these
// category sections rather than one flat "types of trip" grid.
export type CategorySection = {
  key: string;
  heading: Localized;
  intro: Localized;
  themeParam?: "adventure" | "culture" | "relax" | "family";
};

export type TravelerTypePage = {
  slug: string;
  travelerTypeKey: "family" | "couples" | "groups" | "honeymoon" | "solo";
  heroImage: string;
  heroTitle: Localized;
  heroSubtitle: Localized;
  overviewTitle: Localized;
  overviewBody: Localized;
  categorySections?: CategorySection[];
  bestDestinations: DestinationCard[];
  linkCardGroups?: LinkCardGroup[];
  reassurance: ReassuranceCard[];
  faqs: FaqPair[];
};

export const TRAVELER_TYPE_PAGES: TravelerTypePage[] = [
  {
    slug: "family-holidays",
    travelerTypeKey: "family",
    heroImage: `${R2}/experience-types/family-hero.jpg`,
    heroTitle: {
      fr: "Le voyage en famille, pensé pour vous tous",
      en: "Family travel, designed around all of you",
      es: "Viajes en familia, pensados para todos",
    },
    heroSubtitle: {
      fr: "Un rythme qui convient aux petits comme aux grands — pas de compromis.",
      en: "A pace that works for the little ones and the grown-ups alike — no compromises.",
      es: "Un ritmo que funciona tanto para los pequeños como para los mayores — sin compromisos.",
    },
    overviewTitle: {
      fr: "Un voyage pensé pour votre famille, pas pour « les familles »",
      en: "A trip built for your family, not for 'families'",
      es: "Un viaje pensado para su familia, no para «las familias»",
    },
    overviewBody: {
      fr: "Un bon voyage en famille ne se planifie pas en cochant des cases. Il se construit autour de ce qui vous ressemble vraiment — les envies des enfants, le rythme des grands-parents, et ce moment où tout le monde, enfin, est content en même temps.\n\nNos guides connaissent le terrain, mais surtout ils savent lire un groupe : quand ralentir, quand proposer une pause, quand transformer une visite en jeu. C'est cette attention qui fait la différence entre des vacances et un vrai souvenir de famille.",
      en: "A good family trip isn't planned by ticking boxes. It's built around what actually fits your family — the kids' curiosity, the grandparents' pace, and that rare moment when everyone's happy at once.\n\nOur guides know the ground, but more than that, they know how to read a group: when to slow down, when to call a break, when to turn a visit into a game. That attention is what turns a holiday into an actual family memory.",
      es: "Un buen viaje en familia no se planifica marcando casillas. Se construye alrededor de lo que realmente encaja con su familia — la curiosidad de los niños, el ritmo de los abuelos, y ese raro momento en que todos están contentos a la vez.\n\nNuestros guías conocen el terreno, pero sobre todo saben leer a un grupo: cuándo bajar el ritmo, cuándo proponer una pausa, cuándo convertir una visita en un juego. Esa atención es lo que convierte unas vacaciones en un verdadero recuerdo familiar.",
    },
    bestDestinations: [
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Notre terrain de jeu depuis toujours — et pas seulement parce qu'on y est nés. Balade à dos de chameau au coucher du soleil, quad dans les dunes, hammam en famille : ce sont des guides eux-mêmes parents qui construisent ces journées, en sachant exactement quand ralentir pour les petites jambes.",
          en: "Our home ground — and not just because we started here. A sunset camel ride, quad biking in the dunes, a family hammam: these days are built by guides who are parents themselves, and know exactly when to slow down for smaller legs.",
          es: "Nuestro terreno de siempre — y no solo porque nacimos aquí. Un paseo en camello al atardecer, quad en las dunas, un hammam en familia: estos días los construyen guías que son padres, y saben exactamente cuándo bajar el ritmo para las piernas más pequeñas.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "kenya",
        image: `${R2}/destinations/kenya.jpg`,
        name: { fr: "Kenya", en: "Kenya", es: "Kenia" },
        blurb: {
          fr: "Le premier safari reste un souvenir qui ne s'efface pas — pour les enfants comme pour les parents. Les grands espaces du Masai Mara laissent la place à l'émerveillement sans jamais presser personne, et les camps ouverts sur la savane deviennent vite le décor de dîners qu'on n'oublie pas.",
          en: "A first safari is a memory that never quite fades — for kids and parents alike. The wide-open spaces of the Masai Mara leave room for wonder without ever rushing anyone, and camps open onto the savannah quickly become the backdrop for dinners nobody forgets.",
          es: "Un primer safari es un recuerdo que nunca se borra del todo — tanto para los niños como para los padres. Los amplios espacios del Masai Mara dejan sitio al asombro sin apresurar a nadie, y los campamentos abiertos a la sabana se convierten rápido en el escenario de cenas inolvidables.",
        },
        href: "/destinations/afrique/kenya",
      },
      {
        key: "italie",
        image: `${R2}/destinations/italie.jpg`,
        name: { fr: "Italie", en: "Italy", es: "Italia" },
        blurb: {
          fr: "Rome pour l'émerveillement, la Toscane pour ralentir, la côte amalfitaine pour finir en beauté — un classique qui fonctionne à tout âge. Les grands-parents suivent facilement le rythme, les enfants ne s'ennuient jamais longtemps entre une glace et une fontaine, et tout le monde repart avec sa propre histoire.",
          en: "Rome for the wonder, Tuscany to slow down, the Amalfi Coast to finish in style — a classic that works at any age. Grandparents keep up easily, kids are never bored for long between a gelato and a fountain, and everyone comes home with their own version of the story.",
          es: "Roma por el asombro, la Toscana para bajar el ritmo, la costa amalfitana para terminar por todo lo alto — un clásico que funciona a cualquier edad. Los abuelos siguen el ritmo sin esfuerzo, los niños nunca se aburren mucho entre un helado y una fuente, y todos vuelven con su propia versión de la historia.",
        },
        href: "/destinations/europe/italie",
      },
      {
        key: "france",
        image: `${R2}/destinations/france-hero.jpg`,
        name: { fr: "France", en: "France", es: "Francia" },
        blurb: {
          fr: "De Paris aux villages perchés de Provence jusqu'à la lumière de la Côte d'Azur — trois ambiances en un seul voyage, chacune avec son propre rythme. Idéal pour une famille qui veut à la fois de la ville, de la campagne, et une plage où finir la journée.",
          en: "From Paris to the hilltop villages of Provence to the light of the Côte d'Azur — three moods in one trip, each with its own pace. Ideal for a family that wants city, countryside, and a beach to end the day on, all in the same itinerary.",
          es: "De París a los pueblos encaramados de Provenza hasta la luz de la Costa Azul — tres ambientes en un solo viaje, cada uno con su propio ritmo. Ideal para una familia que quiere ciudad, campo y una playa para terminar el día, todo en el mismo itinerario.",
        },
        href: "/destinations/europe/france",
      },
      {
        key: "portugal",
        image: `${R2}/destinations/portugal-hero.jpg`,
        name: { fr: "Portugal", en: "Portugal", es: "Portugal" },
        blurb: {
          fr: "Un tramway qui grimpe dans Lisbonne, des palais de conte de fées à Sintra, puis la vallée du Douro pour souffler — le Portugal a ce format compact et facile qui pardonne les journées un peu trop remplies. Les vols sont courts, les distances aussi.",
          en: "A tram climbing through Lisbon, fairy-tale palaces in Sintra, then the Douro Valley to catch your breath — Portugal has that compact, forgiving shape that survives a slightly overpacked day. Flights are short, and so are the distances in between.",
          es: "Un tranvía que sube por Lisboa, palacios de cuento en Sintra, y después el valle del Duero para tomar aire — Portugal tiene ese formato compacto y flexible que perdona un día un poco demasiado cargado. Los vuelos son cortos, y las distancias también.",
        },
        href: "/destinations/europe/portugal",
      },
      {
        key: "croatie",
        image: `${R2}/destinations/croatie-hero.jpg`,
        name: { fr: "Croatie", en: "Croatia", es: "Croacia" },
        blurb: {
          fr: "Les remparts de Dubrovnik à explorer comme un terrain de jeu, des criques où l'eau reste calme même pour les plus petits, et l'île de Hvar pour un dernier été à ralenti. Une destination qui pardonne un emploi du temps flexible, presque autant qu'elle le récompense.",
          en: "Dubrovnik's walls to explore like a playground, coves where the water stays calm even for the littlest ones, and the island of Hvar for one last slow-motion summer day. A destination that forgives a flexible schedule almost as much as it rewards one.",
          es: "Las murallas de Dubrovnik para explorar como un patio de juegos, calas de agua tranquila incluso para los más pequeños, y la isla de Hvar para un último día de verano a cámara lenta. Un destino que perdona un horario flexible casi tanto como lo recompensa.",
        },
        href: "/destinations/europe/croatie",
      },
    ],
    reassurance: [
      {
        title: { fr: "On a des enfants d'âges très différents", en: "Our kids are very different ages", es: "Nuestros hijos tienen edades muy distintas" },
        body: {
          fr: "On construit un itinéraire à plusieurs vitesses — une activité pour les petits, une autre juste à côté pour les ados, et des moments où tout le monde se retrouve.",
          en: "We build a multi-speed itinerary — one activity for the little ones, another right alongside for the teens, and moments where everyone comes back together.",
          es: "Construimos un itinerario a varias velocidades — una actividad para los pequeños, otra justo al lado para los adolescentes, y momentos en los que todos se reúnen.",
        },
      },
      {
        title: { fr: "On veut que les grands-parents puissent suivre", en: "We want the grandparents to keep up", es: "Queremos que los abuelos puedan seguir el ritmo" },
        body: {
          fr: "Rythme plus doux, moins de kilomètres par jour, des hébergements pensés pour le confort de trois générations à la fois.",
          en: "A gentler pace, fewer miles per day, accommodation chosen with three generations' comfort in mind.",
          es: "Un ritmo más suave, menos kilómetros al día, alojamientos pensados para el confort de tres generaciones a la vez.",
        },
      },
      {
        title: { fr: "Nos ados ne décrochent jamais de leur téléphone", en: "Our teens never look up from their phones", es: "Nuestros adolescentes no sueltan el móvil" },
        body: {
          fr: "On mise sur des expériences qui valent vraiment le détour — quad dans les dunes, cours de cuisine, rencontre avec un artisan — le genre de moment qu'on veut vraiment raconter.",
          en: "We lean on experiences worth actually putting the phone down for — quad biking in the dunes, a cooking class, meeting a craftsman — the kind of moment worth telling people about.",
          es: "Apostamos por experiencias que realmente merecen la pena — quad en las dunas, clase de cocina, encuentro con un artesano — el tipo de momento que de verdad se quiere contar.",
        },
      },
      {
        title: { fr: "On ne veut pas un emploi du temps chargé", en: "We don't want a packed schedule", es: "No queremos una agenda apretada" },
        body: {
          fr: "Chaque journée garde de la place libre — pour une sieste, une baignade improvisée, ou simplement rien faire ensemble.",
          en: "Every day keeps room to breathe — for a nap, an impromptu swim, or simply doing nothing together.",
          es: "Cada día deja espacio libre — para una siesta, un baño improvisado, o simplemente no hacer nada juntos.",
        },
      },
      {
        title: { fr: "On a peur qu'un voyage lointain soit trop fatigant pour eux", en: "We're worried a long-haul trip will wear them out", es: "Nos preocupa que un viaje largo los agote" },
        body: {
          fr: "On limite volontairement les longs trajets consécutifs et on prévoit toujours une journée « rien au programme » après un vol long — l'itinéraire respire, il ne s'enchaîne pas.",
          en: "We deliberately cap consecutive long transfers and always build in a nothing-planned day after a long flight — the itinerary breathes, it doesn't just chain forward.",
          es: "Limitamos a propósito los trayectos largos consecutivos y siempre incluimos un día sin nada planeado después de un vuelo largo — el itinerario respira, no se encadena sin parar.",
        },
      },
      {
        title: { fr: "On ne sait pas si les enfants vont accrocher avec une culture très différente", en: "We're not sure the kids will connect with a very different culture", es: "No sabemos si los niños conectarán con una cultura muy distinta" },
        body: {
          fr: "On choisit des rencontres concrètes plutôt que des visites passives — un marché, un atelier, un jeu partagé avec des enfants du pays — c'est presque toujours ce qui reste le plus longtemps en mémoire.",
          en: "We favour hands-on encounters over passive sightseeing — a market, a workshop, a shared game with local kids — that's almost always what sticks longest in a child's memory.",
          es: "Elegimos encuentros concretos en lugar de visitas pasivas — un mercado, un taller, un juego compartido con niños del lugar — casi siempre es lo que más tiempo queda en la memoria.",
        },
      },
      {
        title: { fr: "On aimerait aussi un peu de temps juste pour nous, sans culpabiliser", en: "We'd also like a little time just for us, without the guilt", es: "También nos gustaría algo de tiempo solo para nosotros, sin culpa" },
        body: {
          fr: "C'est prévu, pas improvisé : une soirée avec service de baby-sitting local de confiance, ou une activité pensée pour occuper les enfants pendant que vous prenez l'air à deux.",
          en: "It's planned, not improvised: an evening with trusted local babysitting, or an activity designed to keep the kids happy while the two of you get some air.",
          es: "Está previsto, no improvisado: una noche con servicio local de canguro de confianza, o una actividad pensada para entretener a los niños mientras ustedes dos toman aire.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Quel est le meilleur âge pour un premier grand voyage en famille ?", en: "What's the best age for a first big family trip?", es: "¿Cuál es la mejor edad para un primer gran viaje en familia?" },
        answer: {
          fr: "Il n'y a pas d'âge parfait — on adapte l'itinéraire à l'âge de vos enfants, pas l'inverse. Dès 4-5 ans, la plupart des excursions deviennent accessibles avec quelques ajustements de rythme.",
          en: "There's no perfect age — we adapt the itinerary to your children's age, not the other way around. From around 4-5, most excursions become workable with a few pace adjustments.",
          es: "No hay una edad perfecta — adaptamos el itinerario a la edad de sus hijos, no al revés. A partir de los 4-5 años, la mayoría de las excursiones son viables con algunos ajustes de ritmo.",
        },
      },
      {
        question: { fr: "Est-ce que vos guides sont habitués aux enfants ?", en: "Are your guides used to working with children?", es: "¿Sus guías están acostumbrados a los niños?" },
        answer: {
          fr: "Oui — plusieurs de nos guides sont eux-mêmes parents, et savent adapter une explication, une pause ou un rythme à un groupe avec des enfants.",
          en: "Yes — several of our guides are parents themselves, and know how to adapt an explanation, a break, or a pace to a group with kids.",
          es: "Sí — varios de nuestros guías son padres, y saben adaptar una explicación, una pausa o un ritmo a un grupo con niños.",
        },
      },
      {
        question: { fr: "Peut-on organiser un voyage multi-générationnel (grands-parents inclus) ?", en: "Can you organise a multi-generational trip (grandparents included)?", es: "¿Pueden organizar un viaje multigeneracional (con los abuelos incluidos)?" },
        answer: {
          fr: "Tout à fait — c'est l'un des voyages qu'on aime le plus construire. On choisit un rythme et des hébergements qui conviennent à trois générations à la fois.",
          en: "Absolutely — it's one of the trips we most enjoy building. We choose a pace and accommodation that suit three generations at once.",
          es: "Por supuesto — es uno de los viajes que más nos gusta construir. Elegimos un ritmo y unos alojamientos que convengan a tres generaciones a la vez.",
        },
      },
      {
        question: { fr: "Les excursions incluent-elles des sièges auto / équipements bébé ?", en: "Do excursions include car seats / baby equipment?", es: "¿Las excursiones incluyen sillas de coche / equipo para bebés?" },
        answer: {
          fr: "Parlez-nous de vos besoins spécifiques au moment de la demande — on s'organise pour que le matériel nécessaire soit prévu.",
          en: "Tell us about your specific needs when you enquire — we'll make sure the right equipment is arranged.",
          es: "Cuéntenos sus necesidades específicas al hacer la consulta — nos organizamos para que el equipo necesario esté previsto.",
        },
      },
      {
        question: { fr: "Quelle est la durée idéale pour un voyage en famille ?", en: "What's the ideal length for a family trip?", es: "¿Cuál es la duración ideal para un viaje en familia?" },
        answer: {
          fr: "Entre 5 et 9 nuits en général — assez pour vraiment se poser, pas assez pour que les enfants s'ennuient. On ajuste selon votre destination et vos contraintes.",
          en: "Generally between 5 and 9 nights — enough to really settle in, not so much that the kids get restless. We adjust based on your destination and constraints.",
          es: "Generalmente entre 5 y 9 noches — suficiente para instalarse de verdad, no tanto como para que los niños se aburran. Lo ajustamos según su destino y sus limitaciones.",
        },
      },
      {
        question: { fr: "Que se passe-t-il si un enfant tombe malade pendant le séjour ?", en: "What happens if a child falls ill during the trip?", es: "¿Qué pasa si un niño se enferma durante el viaje?" },
        answer: {
          fr: "Votre conseiller reste disponible tout au long du voyage et peut orienter vers un médecin ou une pharmacie de confiance en quelques minutes, où que vous soyez.",
          en: "Your travel advisor stays reachable throughout the trip and can point you to a trusted doctor or pharmacy within minutes, wherever you are.",
          es: "Su asesor de viaje sigue disponible durante todo el viaje y puede orientarle hacia un médico o una farmacia de confianza en pocos minutos, estén donde estén.",
        },
      },
      {
        question: { fr: "Peut-on ajuster l'itinéraire une fois sur place si les enfants sont fatigués ?", en: "Can the itinerary be adjusted on the ground if the kids get tired?", es: "¿Se puede ajustar el itinerario sobre el terreno si los niños se cansan?" },
        answer: {
          fr: "Oui — nos itinéraires sont volontairement souples. Un jour de moins pour une activité, un jour de plus au bord de la piscine : votre conseiller réorganise en temps réel.",
          en: "Yes — our itineraries are deliberately built with give in them. One less day of activity, one more by the pool: your advisor rearranges things in real time.",
          es: "Sí — nuestros itinerarios están construidos a propósito con margen. Un día menos de actividad, un día más junto a la piscina: su asesor reorganiza todo en tiempo real.",
        },
      },
      {
        question: { fr: "Proposez-vous des activités adaptées aux tout-petits (moins de 4 ans) ?", en: "Do you offer activities suited to toddlers under 4?", es: "¿Ofrecen actividades adecuadas para niños menores de 4 años?" },
        answer: {
          fr: "Oui, en les choisissant différemment — moins de marche, plus de plage et de jeux sensoriels, des trajets plus courts entre chaque étape.",
          en: "Yes, chosen differently — less walking, more beach and sensory play, shorter transfers between each stop.",
          es: "Sí, elegidas de otra manera — menos caminata, más playa y juego sensorial, trayectos más cortos entre cada etapa.",
        },
      },
    ],
  },
  {
    slug: "couples-holidays",
    travelerTypeKey: "couples",
    heroImage: `${R2}/experience-types/couples-hero.jpg`,
    heroTitle: {
      fr: "Un voyage à deux, à votre rythme",
      en: "A trip for two, at your pace",
      es: "Un viaje para dos, a su ritmo",
    },
    heroSubtitle: {
      fr: "Le meilleur d'une destination, sans jamais sacrifier le temps qui n'appartient qu'à vous.",
      en: "The best of a destination, without ever sacrificing the time that's just yours.",
      es: "Lo mejor de un destino, sin renunciar nunca al tiempo que es solo suyo.",
    },
    overviewTitle: {
      fr: "Fait pour deux, pas pour un groupe",
      en: "Made for two, not for a group",
      es: "Hecho para dos, no para un grupo",
    },
    overviewBody: {
      fr: "Un voyage de couple réussi n'est pas une version réduite d'un voyage de groupe. C'est un itinéraire pensé différemment — plus intime, avec de la place pour l'imprévu et pour ne rien faire ensemble.\n\nNos conseillers construisent chaque étape autour de ce que vous cherchez vraiment : la table qui vaut le détour, le point de vue au bon moment de la journée, l'hébergement où l'on a envie de rester un peu plus longtemps.",
      en: "A good couples' trip isn't a scaled-down group trip. It's an itinerary built differently — more intimate, with room for the unplanned and for doing nothing together.\n\nOur advisors build each stop around what you're actually after: the table worth the detour, the viewpoint at the right time of day, the stay you don't want to leave.",
      es: "Un buen viaje en pareja no es una versión reducida de un viaje en grupo. Es un itinerario pensado de otra manera — más íntimo, con espacio para lo imprevisto y para no hacer nada juntos.\n\nNuestros asesores construyen cada etapa en torno a lo que realmente buscan: la mesa que merece el desvío, el mirador en el momento justo del día, el alojamiento del que no querrán irse.",
    },
    categorySections: [
      {
        key: "romance",
        heading: { fr: "Escapades romantiques", en: "Romantic getaways", es: "Escapadas románticas" },
        intro: {
          fr: "Parfois, il suffit d'un beau décor et de la bonne personne pour le partager. Un boutique-hôtel face à l'océan, une terrasse où le dîner s'étire jusqu'à minuit — on trouve l'endroit qui vous ressemble, et on laisse toute la place à l'essentiel : être ensemble.",
          en: "Sometimes all it takes is a beautiful setting and the right person to share it with. A boutique hotel facing the ocean, a terrace where dinner runs long into the night — we find the place that feels made for you, and leave plenty of room to simply be together.",
          es: "A veces basta un entorno hermoso y la persona adecuada para compartirlo. Un hotel boutique frente al océano, una terraza donde la cena se alarga hasta la medianoche — encontramos el lugar que les va bien, y dejamos todo el espacio para lo esencial: estar juntos.",
        },
      },
      {
        key: "adventure",
        themeParam: "adventure",
        heading: { fr: "Aventure à deux", en: "Adventure for two", es: "Aventura en pareja" },
        intro: {
          fr: "Randonner ensemble, franchir une dune en quad, se dépasser au même rythme — les couples qui aiment le mouvement trouvent ici des itinéraires taillés pour deux, avec juste assez de défi pour rapprocher, jamais assez pour épuiser.",
          en: "Hiking together, crossing a dune by quad, pushing your limits at the same pace — couples who like to move will find itineraries built for two here, with just enough challenge to bring you closer, never enough to wear you out.",
          es: "Caminar juntos, cruzar una duna en quad, superarse al mismo ritmo — las parejas que disfrutan del movimiento encuentran aquí itinerarios hechos para dos, con el reto justo para acercarlos, nunca el suficiente para agotarlos.",
        },
      },
      {
        key: "culture",
        themeParam: "culture",
        heading: { fr: "Culture et gastronomie", en: "Culture & cuisine", es: "Cultura y gastronomía" },
        intro: {
          fr: "Un cours de cuisine à deux, un souk traversé sans se presser, une table qu'on découvre en demandant conseil à un local — pour les couples qui préfèrent comprendre un endroit plutôt que simplement le traverser.",
          en: "A cooking class for two, a souk crossed without hurrying, a table discovered by asking a local for advice — for couples who'd rather understand a place than just pass through it.",
          es: "Una clase de cocina para dos, un zoco recorrido sin prisa, una mesa descubierta pidiendo consejo a un local — para parejas que prefieren entender un lugar en vez de solo atravesarlo.",
        },
      },
      {
        key: "beach",
        themeParam: "relax",
        heading: { fr: "Plage et détente", en: "Beach & relaxation", es: "Playa y descanso" },
        intro: {
          fr: "Parfois, le meilleur voyage de couple est aussi le plus simple : une belle plage, une belle chambre, et rien d'autre au programme. On trouve le bout de côte qui n'attend que vous.",
          en: "Sometimes the best couples' trip is also the simplest: a great beach, a beautiful room, and nothing else on the agenda. We'll find the stretch of coast that has your name on it.",
          es: "A veces el mejor viaje en pareja es también el más simple: una gran playa, una habitación hermosa, y nada más en el programa. Encontramos el tramo de costa que los espera.",
        },
      },
    ],
    bestDestinations: [
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Un riad discret dans la médina, un dîner sur un toit face aux étoiles, une nuit sous tente dans le désert — le Maroc a ce talent rare de rendre chaque étape légèrement plus romantique que la précédente, sans jamais forcer le trait.",
          en: "A quiet riad in the medina, dinner on a rooftop under the stars, a night under canvas in the desert — Morocco has a rare knack for making every stop feel slightly more romantic than the last, without ever overplaying it.",
          es: "Un riad discreto en la medina, una cena en una azotea bajo las estrellas, una noche bajo jaima en el desierto — Marruecos tiene ese don poco común de hacer que cada etapa se sienta un poco más romántica que la anterior, sin forzar nunca la nota.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "italie",
        image: `${R2}/destinations/italie.jpg`,
        name: { fr: "Italie", en: "Italy", es: "Italia" },
        blurb: {
          fr: "Rome au petit matin, la Toscane en fin d'après-midi, la côte amalfitaine au coucher du soleil — l'Italie sait exactement quand vous laisser seuls. Un classique qu'on ne se lasse pas de recommencer, à chaque fois un peu différemment.",
          en: "Rome at first light, Tuscany in the late afternoon, the Amalfi Coast at sunset — Italy knows exactly when to leave you alone together. A classic we never tire of building again, a little differently each time.",
          es: "Roma al amanecer, la Toscana a última hora de la tarde, la costa amalfitana al atardecer — Italia sabe exactamente cuándo dejarles solos. Un clásico que nunca cansa repetir, un poco distinto cada vez.",
        },
        href: "/destinations/europe/italie",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Les îles ont ce format parfait pour deux : une terrasse blanchie à la chaux face à la mer Égée, un déjeuner de poisson qui s'étire jusqu'au milieu de l'après-midi, un coucher de soleil qu'on regarde sans dire un mot.",
          en: "The islands have that perfect shape for two: a whitewashed terrace facing the Aegean, a fish lunch that stretches well into the afternoon, a sunset you watch without saying a word.",
          es: "Las islas tienen ese formato perfecto para dos: una terraza encalada frente al mar Egeo, un almuerzo de pescado que se alarga hasta media tarde, una puesta de sol que se mira sin decir palabra.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "maldives",
        image: `${R2}/destinations/maldives.jpg`,
        name: { fr: "Maldives", en: "Maldives", es: "Maldivas" },
        blurb: {
          fr: "Pour les couples qui veulent que le monde entier disparaisse un moment : une villa sur pilotis, une échelle qui descend directement dans le lagon, et rien d'autre au programme que vous deux.",
          en: "For couples who want the whole world to disappear for a while: an overwater villa, a ladder straight down into the lagoon, and nothing else on the agenda but the two of you.",
          es: "Para parejas que quieren que el mundo entero desaparezca un rato: una villa sobre el agua, una escalera que baja directo a la laguna, y nada más en la agenda que ustedes dos.",
        },
        href: "/destinations/ocean-indien/maldives",
      },
      {
        key: "suisse",
        image: `${R2}/destinations/suisse-hero.jpg`,
        name: { fr: "Suisse", en: "Switzerland", es: "Suiza" },
        blurb: {
          fr: "Un train panoramique à travers les vignobles du Valais, le Cervin qui apparaît d'un coup au détour d'un virage, un chalet où se réchauffer le soir — la Suisse offre ce genre de décor qui rend les silences confortables.",
          en: "A panoramic train through the Valais vineyards, the Matterhorn appearing suddenly around a bend, a chalet to warm up in come evening — Switzerland offers the kind of backdrop that makes the silences feel comfortable.",
          es: "Un tren panorámico por los viñedos del Valais, el Cervino apareciendo de golpe en una curva, un chalet donde entrar en calor al anochecer — Suiza ofrece ese tipo de escenario que hace que los silencios se sientan cómodos.",
        },
        href: "/destinations/europe/suisse",
      },
      {
        key: "croatie",
        image: `${R2}/destinations/croatie-hero.jpg`,
        name: { fr: "Croatie", en: "Croatia", es: "Croacia" },
        blurb: {
          fr: "Une sortie en bateau privé le long de criques que personne d'autre ne connaît, les remparts de Dubrovnik au coucher du soleil, l'Adriatique dans toutes ses nuances de bleu — une destination qui garde encore une vraie part de secret.",
          en: "A private boat trip along coves no one else knows about, Dubrovnik's walls at sunset, the Adriatic in every shade of blue — a destination that still keeps a genuine sense of secret about it.",
          es: "Una salida en barco privado por calas que nadie más conoce, las murallas de Dubrovnik al atardecer, el Adriático en todos sus tonos de azul — un destino que todavía conserva una parte genuina de secreto.",
        },
        href: "/destinations/europe/croatie",
      },
    ],
    reassurance: [
      {
        title: { fr: "On ne veut pas d'un itinéraire trop chargé", en: "We don't want an overpacked itinerary", es: "No queremos un itinerario demasiado cargado" },
        body: {
          fr: "Chaque journée garde des heures libres — pour flâner, changer d'avis, ou juste rester au lit un peu plus longtemps.",
          en: "Every day keeps free hours — for wandering, changing your mind, or just staying in bed a little longer.",
          es: "Cada día guarda horas libres — para pasear, cambiar de idea, o simplemente quedarse en la cama un poco más.",
        },
      },
      {
        title: { fr: "On cherche des moments vraiment romantiques, pas clichés", en: "We want genuinely romantic moments, not clichés", es: "Buscamos momentos realmente románticos, no clichés" },
        body: {
          fr: "On évite les mises en scène toutes faites — un dîner bien placé, une vue au bon moment, ça suffit largement.",
          en: "We skip the staged setups — a well-placed dinner, a view at the right moment, that's plenty.",
          es: "Evitamos las puestas en escena preparadas — una cena bien situada, una vista en el momento justo, ya es suficiente.",
        },
      },
      {
        title: { fr: "On veut découvrir la destination sans faire du tourisme de masse", en: "We want to see the destination without the mass-tourism crowds", es: "Queremos descubrir el destino sin turismo masivo" },
        body: {
          fr: "Nos guides locaux évitent les heures de pointe et les sites saturés, quitte à réorganiser la journée.",
          en: "Our local guides dodge peak hours and saturated sites, even if it means rearranging the day.",
          es: "Nuestros guías locales evitan las horas punta y los lugares saturados, aunque eso signifique reorganizar el día.",
        },
      },
      {
        title: { fr: "On fête une occasion particulière", en: "We're celebrating something specific", es: "Estamos celebrando algo especial" },
        body: {
          fr: "Anniversaire, fiançailles, lune de miel tardive — dites-le-nous, et on glisse une attention particulière dans l'itinéraire.",
          en: "Anniversary, engagement, a delayed honeymoon — tell us, and we'll fold a special touch into the itinerary.",
          es: "Aniversario, compromiso, una luna de miel tardía — cuéntenoslo, y añadiremos un detalle especial al itinerario.",
        },
      },
      {
        title: { fr: "On n'a pas forcément les mêmes envies tous les deux", en: "The two of us don't always want the same thing", es: "Los dos no siempre queremos lo mismo" },
        body: {
          fr: "On construit une trame commune avec des branches en option — l'un part en randonnée pendant que l'autre reste au spa, et vous vous retrouvez pour le dîner.",
          en: "We build a shared backbone with optional branches — one of you hikes while the other stays at the spa, and you meet back up for dinner.",
          es: "Construimos una base común con ramas opcionales — uno hace senderismo mientras el otro se queda en el spa, y se reencuentran para la cena.",
        },
      },
      {
        title: { fr: "On a peur que la destination soit trop touristique pour être romantique", en: "We're worried the destination will feel too touristy to be romantic", es: "Nos preocupa que el destino sea demasiado turístico para ser romántico" },
        body: {
          fr: "Chaque destination a ses coins discrets — on les connaît, et on construit l'itinéraire autour d'eux plutôt qu'autour des sites les plus photographiés.",
          en: "Every destination has its quiet corners — we know them, and we build the itinerary around those rather than the most photographed sites.",
          es: "Cada destino tiene sus rincones discretos — los conocemos, y construimos el itinerario alrededor de ellos en lugar de los lugares más fotografiados.",
        },
      },
      {
        title: { fr: "On voyage rarement ensemble et on a peur de se tromper de destination", en: "We rarely travel together and worry about picking the wrong destination", es: "Rara vez viajamos juntos y nos preocupa elegir el destino equivocado" },
        body: {
          fr: "On commence par une conversation, pas par une brochure — vos rythmes, ce que vous aimez faire séparément et ensemble, avant même de parler de lieu.",
          en: "We start with a conversation, not a brochure — your pace, what you each like doing alone and together, before we even talk about where.",
          es: "Empezamos con una conversación, no con un folleto — sus ritmos, lo que les gusta hacer por separado y juntos, antes incluso de hablar del lugar.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Quelle est la durée idéale pour un voyage en couple ?", en: "What's the ideal length for a couples' trip?", es: "¿Cuál es la duración ideal para un viaje en pareja?" },
        answer: {
          fr: "En général entre 5 et 8 nuits — assez pour se déconnecter vraiment, sans que ça devienne un marathon.",
          en: "Generally 5 to 8 nights — enough to properly switch off, without it turning into a marathon.",
          es: "Generalmente entre 5 y 8 noches — suficiente para desconectar de verdad, sin que se convierta en una maratón.",
        },
      },
      {
        question: { fr: "Peut-on personnaliser l'itinéraire en cours de route ?", en: "Can the itinerary be adjusted along the way?", es: "¿Se puede personalizar el itinerario sobre la marcha?" },
        answer: {
          fr: "Oui, nos guides restent flexibles — si un lieu vous plaît particulièrement, on peut ajuster le programme du lendemain.",
          en: "Yes, our guides stay flexible — if you fall for a particular place, we can adjust the next day's plan.",
          es: "Sí, nuestros guías se mantienen flexibles — si un lugar les gusta especialmente, podemos ajustar el plan del día siguiente.",
        },
      },
      {
        question: { fr: "Est-ce adapté à un premier voyage ensemble ?", en: "Is this suitable for a first trip together?", es: "¿Es apto para un primer viaje juntos?" },
        answer: {
          fr: "Tout à fait — on construit l'itinéraire à votre rythme, sans présumer de ce que vous connaissez déjà l'un de l'autre en voyage.",
          en: "Absolutely — we build the itinerary at your pace, without assuming what you already know about each other on the road.",
          es: "Por supuesto — construimos el itinerario a su ritmo, sin dar por hecho lo que ya saben el uno del otro viajando.",
        },
      },
      {
        question: { fr: "Peut-on inclure une soirée ou un dîner spécial ?", en: "Can a special evening or dinner be included?", es: "¿Se puede incluir una cena o velada especial?" },
        answer: {
          fr: "Oui, on peut réserver une table particulière ou organiser un moment privé — précisez-le lors de votre demande.",
          en: "Yes, we can book a particular table or arrange a private moment — just mention it when you enquire.",
          es: "Sí, podemos reservar una mesa concreta u organizar un momento privado — indíquenlo al hacer la consulta.",
        },
      },
      {
        question: { fr: "Vos itinéraires conviennent-ils aussi aux jeunes couples avec petit budget ?", en: "Do your itineraries also suit younger couples on a smaller budget?", es: "¿Sus itinerarios también son adecuados para parejas jóvenes con presupuesto ajustado?" },
        answer: {
          fr: "On travaille avec plusieurs gammes d'hébergement — dites-nous votre budget, on construit l'itinéraire autour.",
          en: "We work across several accommodation tiers — tell us your budget, and we'll build the itinerary around it.",
          es: "Trabajamos con varias gamas de alojamiento — díganos su presupuesto y construiremos el itinerario en torno a él.",
        },
      },
      {
        question: { fr: "Peut-on faire certaines activités séparément puis se retrouver ?", en: "Can we do some activities apart and reunite later?", es: "¿Podemos hacer algunas actividades por separado y luego reencontrarnos?" },
        answer: {
          fr: "Oui, c'est même fréquent — on prévoit une activité chacun de son côté en milieu de journée, puis un moment commun le soir.",
          en: "Yes, it's actually common — we plan one activity each mid-day, then a shared moment in the evening.",
          es: "Sí, incluso es habitual — planificamos una actividad para cada uno a mediodía, y un momento compartido por la noche.",
        },
      },
      {
        question: { fr: "Proposez-vous des hébergements avec piscine privée ou vue isolée ?", en: "Do you offer accommodation with a private pool or secluded view?", es: "¿Ofrecen alojamientos con piscina privada o vistas aisladas?" },
        answer: {
          fr: "Oui, c'est l'une des demandes les plus fréquentes pour un voyage en couple — précisez-le et on cible les hébergements en conséquence.",
          en: "Yes, it's one of the most common requests for a couples' trip — mention it and we'll target accommodation accordingly.",
          es: "Sí, es una de las peticiones más habituales para un viaje en pareja — indíquenlo y buscaremos alojamientos en consecuencia.",
        },
      },
      {
        question: { fr: "Est-il possible de garder une part de surprise pour l'un des deux ?", en: "Can part of the trip stay a surprise for one of us?", es: "¿Se puede mantener una parte del viaje en secreto para uno de los dos?" },
        answer: {
          fr: "Tout à fait — on peut échanger uniquement avec vous et garder certains détails, y compris la destination elle-même, comme surprise jusqu'au dernier moment.",
          en: "Absolutely — we can correspond with just one of you and keep certain details, including the destination itself, a surprise until the last moment.",
          es: "Por supuesto — podemos comunicarnos solo con uno de ustedes y mantener ciertos detalles, incluido el propio destino, como sorpresa hasta el último momento.",
        },
      },
    ],
  },
  {
    slug: "luxury-group-holidays",
    travelerTypeKey: "groups",
    heroImage: `${R2}/experience-types/groups-hero.jpg`,
    heroTitle: {
      fr: "Voyager à plusieurs, sans la logistique",
      en: "Travel together, without the logistics",
      es: "Viajar en grupo, sin la logística",
    },
    heroSubtitle: {
      fr: "Le plaisir de partir ensemble, sans le casse-tête d'organiser tout le monde.",
      en: "The pleasure of going away together, without the headache of organising everyone.",
      es: "El placer de viajar juntos, sin el quebradero de cabeza de organizarlo todo.",
    },
    overviewTitle: {
      fr: "De bons voyages, sans le chaos du groupe",
      en: "Great trips, without the group-chat chaos",
      es: "Buenos viajes, sin el caos del grupo",
    },
    overviewBody: {
      fr: "Partir à plusieurs est l'un des grands plaisirs du voyage. L'organiser en est un autre — trouver un rythme qui convient à tous, gérer les envies différentes, réserver pour dix ou vingt personnes sans perdre en qualité.\n\nC'est exactement ce qu'on fait. On construit un itinéraire avec un fil conducteur commun, mais assez de souplesse pour que chacun y trouve ce qu'il cherche.",
      en: "Going away together is one of travel's great pleasures. Organising it is another — finding a pace that suits everyone, juggling different wants, booking for ten or twenty people without losing quality along the way.\n\nThat's exactly what we do. We build an itinerary with a shared throughline, but enough flexibility that everyone finds what they came for.",
      es: "Viajar en grupo es uno de los grandes placeres del viaje. Organizarlo es otro — encontrar un ritmo que convenga a todos, gestionar gustos distintos, reservar para diez o veinte personas sin perder calidad.\n\nEso es exactamente lo que hacemos. Construimos un itinerario con un hilo conductor común, pero con suficiente flexibilidad para que cada uno encuentre lo que busca.",
    },
    bestDestinations: [
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Notre terrain de jeu logistique préféré — les riads se prêtent bien aux grandes tablées, les excursions en groupe (buggy, quad, désert) sont déjà notre spécialité, et Marrakech comme Essaouira offrent largement de quoi occuper dix ou vingt personnes sans jamais s'ennuyer.",
          en: "Our favourite destination logistically — riads suit large groups well, group excursions (buggy, quad, desert) are already our specialty, and both Marrakech and Essaouira offer more than enough to keep ten or twenty people entertained without ever running dry.",
          es: "Nuestro destino favorito a nivel logístico — los riads se adaptan bien a grupos grandes, las excursiones en grupo (buggy, quad, desierto) ya son nuestra especialidad, y tanto Marrakech como Essaouira ofrecen de sobra para mantener entretenidas a diez o veinte personas sin agotarse nunca.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "kenya",
        image: `${R2}/destinations/kenya.jpg`,
        name: { fr: "Kenya", en: "Kenya", es: "Kenia" },
        blurb: {
          fr: "Un safari en groupe reste l'une des expériences les plus fédératrices qui soient — plusieurs véhicules, un même campement, et des soirées autour du feu qui rapprochent même les membres du groupe qui se connaissaient à peine avant de partir.",
          en: "A group safari remains one of the most bonding experiences there is — several vehicles, one shared camp, and evenings around the fire that bring even the group members who barely knew each other before the trip closer together.",
          es: "Un safari en grupo sigue siendo una de las experiencias que más unen — varios vehículos, un mismo campamento, y noches junto al fuego que acercan incluso a los miembros del grupo que apenas se conocían antes de salir de viaje.",
        },
        href: "/destinations/afrique/kenya",
      },
      {
        key: "croatie",
        image: `${R2}/destinations/croatie-hero.jpg`,
        name: { fr: "Croatie", en: "Croatia", es: "Croacia" },
        blurb: {
          fr: "Un bateau privé le long des criques de la côte dalmate, des maisons de charme groupées à quelques minutes les unes des autres, et Dubrovnik pour une dernière soirée animée — parfait pour un enterrement de vie de jeune fille ou un anniversaire marquant.",
          en: "A private boat along the Dalmatian coves, charming houses clustered a few minutes apart, and Dubrovnik for one last lively evening — perfect for a hen do or a milestone birthday.",
          es: "Un barco privado por las calas de la costa dálmata, casas con encanto agrupadas a pocos minutos entre sí, y Dubrovnik para una última noche animada — perfecto para una despedida de soltera o un cumpleaños importante.",
        },
        href: "/destinations/europe/croatie",
      },
      {
        key: "turquie",
        image: `${R2}/destinations/turquie-hero.jpg`,
        name: { fr: "Turquie", en: "Turkey", es: "Turquía" },
        blurb: {
          fr: "Istanbul pour l'énergie du groupe en journée et en soirée, la Cappadoce pour un vol en montgolfière qui reste le clou de tous les albums photo — une destination qui a le rythme et le volume pour absorber un grand groupe sans jamais se sentir à l'étroit.",
          en: "Istanbul for the group's daytime and evening energy, Cappadocia for a balloon flight that always ends up the highlight of every photo album — a destination with the pace and scale to absorb a large group without ever feeling cramped.",
          es: "Estambul por la energía del grupo de día y de noche, Capadocia por un vuelo en globo que siempre termina siendo lo más destacado de todos los álbumes de fotos — un destino con el ritmo y la escala para acoger a un grupo grande sin sentirse nunca apretado.",
        },
        href: "/destinations/europe/turquie",
      },
      {
        key: "islande",
        image: `${R2}/destinations/islande.jpg`,
        name: { fr: "Islande", en: "Iceland", es: "Islandia" },
        blurb: {
          fr: "Des minibus qui accueillent facilement un groupe entier, le Cercle d'Or à parcourir ensemble en une journée, et une nuit à guetter les aurores boréales qui devient vite le sujet de conversation de tout le voyage.",
          en: "Minibuses that easily fit a whole group, the Golden Circle to cover together in a day, and a night spent watching for the northern lights that quickly becomes the talking point of the entire trip.",
          es: "Minibuses que acogen fácilmente a todo el grupo, el Círculo Dorado para recorrer juntos en un día, y una noche buscando auroras boreales que rápidamente se convierte en el tema de conversación de todo el viaje.",
        },
        href: "/destinations/europe/islande",
      },
      {
        key: "portugal",
        image: `${R2}/destinations/portugal-hero.jpg`,
        name: { fr: "Portugal", en: "Portugal", es: "Portugal" },
        blurb: {
          fr: "Lisbonne pour une première soirée animée, la vallée du Douro pour une dégustation de porto en groupe qui tourne vite à la bonne humeur générale — une destination facile à organiser, avec des distances courtes entre chaque étape.",
          en: "Lisbon for a lively first evening, the Douro Valley for a group port-wine tasting that quickly turns into general good cheer — an easy destination to organise, with short distances between each stop.",
          es: "Lisboa para una primera noche animada, el valle del Duero para una cata de oporto en grupo que rápidamente se convierte en buen ambiente general — un destino fácil de organizar, con distancias cortas entre cada etapa.",
        },
        href: "/destinations/europe/portugal",
      },
    ],
    reassurance: [
      {
        title: { fr: "Notre groupe a des envies très différentes", en: "Our group wants very different things", es: "Nuestro grupo tiene gustos muy distintos" },
        body: {
          fr: "On construit un tronc commun, avec des options en parallèle — chacun peut composer sa journée sans casser le groupe.",
          en: "We build a shared core, with parallel options — everyone can shape their own day without splitting the group.",
          es: "Construimos una base común, con opciones en paralelo — cada uno puede componer su día sin romper el grupo.",
        },
      },
      {
        title: { fr: "On est un grand groupe, difficile à loger", en: "We're a large group, hard to accommodate", es: "Somos un grupo grande, difícil de alojar" },
        body: {
          fr: "On travaille avec des hébergements habitués aux groupes — chambres groupées, espaces communs, logistique pensée en amont.",
          en: "We work with places used to groups — clustered rooms, shared spaces, logistics sorted ahead of time.",
          es: "Trabajamos con alojamientos acostumbrados a grupos — habitaciones agrupadas, espacios comunes, logística resuelta de antemano.",
        },
      },
      {
        title: { fr: "On veut fêter une occasion particulière (EVJF, anniversaire...)", en: "We're celebrating something specific (a hen do, a milestone birthday...)", es: "Celebramos algo especial (despedida, cumpleaños...)" },
        body: {
          fr: "Dites-nous l'occasion, et on glisse un moment sur-mesure dans le programme — sans que ça pèse sur le reste du groupe.",
          en: "Tell us the occasion, and we'll fold in a tailored moment — without weighing down the rest of the group.",
          es: "Cuéntenos la ocasión, y añadiremos un momento a medida — sin que pese sobre el resto del grupo.",
        },
      },
      {
        title: { fr: "On a peur que ça coûte cher de voyager en groupe", en: "We're worried group travel gets expensive", es: "Nos preocupa que viajar en grupo salga caro" },
        body: {
          fr: "À partir d'un certain nombre, les tarifs par personne baissent — on vous donne un chiffrage clair dès la première demande.",
          en: "Past a certain group size, per-person rates drop — we give you a clear quote from the first enquiry.",
          es: "A partir de cierto número, las tarifas por persona bajan — le damos un presupuesto claro desde la primera consulta.",
        },
      },
      {
        title: { fr: "Il y a toujours quelqu'un qui traîne ou qui presse tout le monde", en: "There's always someone lagging behind or rushing everyone else", es: "Siempre hay alguien que se retrasa o que apura a todos" },
        body: {
          fr: "On construit des points de rendez-vous plutôt qu'un timing minute par minute — le groupe respire, et personne ne porte la pression de faire attendre les autres.",
          en: "We build in meeting points rather than a minute-by-minute schedule — the group breathes, and no one carries the pressure of holding everyone up.",
          es: "Construimos puntos de encuentro en lugar de un horario minuto a minuto — el grupo respira, y nadie carga con la presión de retrasar a los demás.",
        },
      },
      {
        title: { fr: "On veut un budget clair, sans mauvaise surprise à répartir après coup", en: "We want a clear budget, no unpleasant surprises to split after the fact", es: "Queremos un presupuesto claro, sin sorpresas que repartir después" },
        body: {
          fr: "Un chiffrage détaillé par personne est envoyé avant le départ, poste par poste — chacun sait exactement ce qu'il paie, et pour quoi.",
          en: "A detailed per-person breakdown goes out before departure, line by line — everyone knows exactly what they're paying, and for what.",
          es: "Se envía un presupuesto detallado por persona antes de la salida, partida por partida — cada uno sabe exactamente qué paga, y por qué.",
        },
      },
      {
        title: { fr: "Ce n'est pas nous qui organisons habituellement, on a peur d'oublier quelqu'un", en: "We're not usually the ones organising, and we're worried about leaving someone out", es: "No somos quienes organizamos normalmente, y nos preocupa dejar a alguien fuera" },
        body: {
          fr: "Un seul interlocuteur côté groupe suffit — on centralise les préférences de chacun (régimes, chambres, budget) à travers un formulaire simple envoyé à tout le monde.",
          en: "One point of contact on the group's side is enough — we gather everyone's preferences (diets, rooms, budget) through one simple form sent to the whole group.",
          es: "Basta con una sola persona de contacto en el grupo — centralizamos las preferencias de cada uno (dietas, habitaciones, presupuesto) mediante un formulario simple enviado a todos.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Quelle taille de groupe pouvez-vous accueillir ?", en: "What group size can you accommodate?", es: "¿Qué tamaño de grupo pueden acoger?" },
        answer: {
          fr: "De 6 à 25 personnes environ — au-delà, contactez-nous, on trouve une solution adaptée.",
          en: "Roughly 6 to 25 people — beyond that, get in touch and we'll find a solution.",
          es: "Aproximadamente de 6 a 25 personas — más allá, contáctenos y encontraremos una solución.",
        },
      },
      {
        question: { fr: "Y a-t-il des tarifs dégressifs pour les grands groupes ?", en: "Are there group discounts for larger groups?", es: "¿Hay tarifas reducidas para grupos grandes?" },
        answer: {
          fr: "Oui, généralement à partir de 8-10 personnes — on vous communique un chiffrage précis à la demande.",
          en: "Yes, typically from around 8-10 people — we'll give you a precise quote on request.",
          es: "Sí, normalmente a partir de 8-10 personas — le damos un presupuesto preciso a petición.",
        },
      },
      {
        question: { fr: "Peut-on avoir un seul guide pour tout le groupe ?", en: "Can we have one dedicated guide for the whole group?", es: "¿Podemos tener un solo guía para todo el grupo?" },
        answer: {
          fr: "Oui, c'est la formule la plus courante — un guide dédié qui connaît le groupe et adapte le rythme au fil des jours.",
          en: "Yes, that's the most common setup — one guide who gets to know the group and adjusts the pace as the days go on.",
          es: "Sí, es la fórmula más habitual — un guía dedicado que conoce al grupo y adapta el ritmo día a día.",
        },
      },
      {
        question: { fr: "Comment gérez-vous les régimes alimentaires différents dans un groupe ?", en: "How do you handle different dietary needs within a group?", es: "¿Cómo gestionan las diferentes dietas dentro de un grupo?" },
        answer: {
          fr: "On les recense en amont et on les transmet à chaque étape — restaurants, hôtels, pique-niques inclus.",
          en: "We collect them upfront and pass them on at every stop — restaurants, hotels, picnics included.",
          es: "Las recopilamos de antemano y las comunicamos en cada etapa — restaurantes, hoteles, picnics incluidos.",
        },
      },
      {
        question: { fr: "Peut-on scinder le groupe sur certaines activités ?", en: "Can the group split for certain activities?", es: "¿Se puede dividir el grupo en algunas actividades?" },
        answer: {
          fr: "Tout à fait — certaines excursions se prêtent bien à des sous-groupes, avant de se retrouver plus tard dans la journée.",
          en: "Absolutely — some excursions work well split into smaller groups, coming back together later in the day.",
          es: "Por supuesto — algunas excursiones se prestan bien a subgrupos, que se reencuentran más tarde en el día.",
        },
      },
      {
        question: { fr: "Comment se répartit le paiement entre les membres du groupe ?", en: "How is payment split between group members?", es: "¿Cómo se reparte el pago entre los miembros del grupo?" },
        answer: {
          fr: "Chacun peut régler sa propre part directement, ou un seul organisateur peut centraliser le paiement pour tout le groupe — comme vous préférez.",
          en: "Everyone can settle their own share directly, or one organiser can centralise payment for the whole group — whichever you prefer.",
          es: "Cada uno puede pagar su parte directamente, o un solo organizador puede centralizar el pago de todo el grupo — como prefieran.",
        },
      },
      {
        question: { fr: "Peut-on ajouter ou retirer des participants après la réservation ?", en: "Can participants be added or removed after booking?", es: "¿Se pueden añadir o quitar participantes después de reservar?" },
        answer: {
          fr: "Dans une certaine mesure oui, surtout si vous nous prévenez tôt — on ajuste l'hébergement et les activités en conséquence.",
          en: "To some extent yes, especially with early notice — we adjust accommodation and activities accordingly.",
          es: "En cierta medida sí, sobre todo si nos avisan con antelación — ajustamos el alojamiento y las actividades en consecuencia.",
        },
      },
      {
        question: { fr: "Organisez-vous des voyages d'entreprise ou de team building ?", en: "Do you organise corporate or team-building trips?", es: "¿Organizan viajes de empresa o de team building?" },
        answer: {
          fr: "Oui — même trame que pour un groupe d'amis, avec en plus des activités pensées pour souder l'équipe si vous le souhaitez.",
          en: "Yes — same backbone as a group of friends, with activities designed to bring the team together if you'd like.",
          es: "Sí — la misma base que para un grupo de amigos, con actividades pensadas para unir al equipo si lo desean.",
        },
      },
    ],
  },
  {
    slug: "solo-holidays",
    travelerTypeKey: "solo",
    heroImage: `${R2}/experience-types/solo-hero.jpg`,
    heroTitle: {
      fr: "Votre monde, à votre rythme",
      en: "Your world, your rhythm",
      es: "Su mundo, a su ritmo",
    },
    heroSubtitle: {
      fr: "Découvrir une destination seul, sans jamais se sentir livré à vous-même.",
      en: "See a destination alone, without ever feeling left to figure it out.",
      es: "Descubrir un destino solo, sin sentirse nunca abandonado a su suerte.",
    },
    overviewTitle: {
      fr: "Voyager seul, jamais isolé",
      en: "Travelling alone, never on your own",
      es: "Viajar solo, nunca aislado",
    },
    overviewBody: {
      fr: "Voyager seul, ce n'est pas voyager sans accompagnement. C'est choisir son propre rythme — s'attarder là où ça vous plaît, repartir quand vous le décidez — tout en ayant un guide sur qui compter.\n\nNos conseillers construisent des itinéraires solo qui laissent de la place à l'imprévu, sans jamais vous laisser sans solution.",
      en: "Travelling alone isn't travelling unsupported. It's choosing your own pace — lingering where you like, moving on when you decide — while still having a guide to count on.\n\nOur advisors build solo itineraries that leave room for the unplanned, without ever leaving you without a plan B.",
      es: "Viajar solo no es viajar sin apoyo. Es elegir su propio ritmo — quedarse donde le apetezca, seguir cuando usted decida — teniendo siempre un guía en quien confiar.\n\nNuestros asesores construyen itinerarios en solitario que dejan espacio para lo imprevisto, sin dejarle nunca sin una solución.",
    },
    bestDestinations: [
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Une médina qui se laisse apprivoiser pas à pas, un guide qui devient vite un point de repère plutôt qu'un simple accompagnateur, et cette sensation particulière de se perdre volontairement dans des ruelles qu'on sait pouvoir retrouver.",
          en: "A medina that reveals itself step by step, a guide who quickly becomes a point of reference rather than just an escort, and that particular feeling of getting deliberately lost in lanes you know you can find your way back from.",
          es: "Una medina que se deja descubrir paso a paso, un guía que rápidamente se convierte en un punto de referencia más que en un simple acompañante, y esa sensación particular de perderse a propósito por calles de las que sabe que puede volver.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "portugal",
        image: `${R2}/destinations/portugal-hero.jpg`,
        name: { fr: "Portugal", en: "Portugal", es: "Portugal" },
        blurb: {
          fr: "Lisbonne se traverse facilement à pied ou en tramway, les gens y sont naturellement bavards, et la vallée du Douro offre ce genre de silence qu'on apprécie particulièrement quand on n'a de compte à rendre à personne.",
          en: "Lisbon is easy to cross on foot or by tram, people there are naturally chatty, and the Douro Valley offers the kind of silence you particularly appreciate when you have no one to check in with.",
          es: "Lisboa se recorre fácilmente a pie o en tranvía, la gente allí es naturalmente conversadora, y el valle del Duero ofrece ese tipo de silencio que se aprecia especialmente cuando no hay que rendir cuentas a nadie.",
        },
        href: "/destinations/europe/portugal",
      },
      {
        key: "islande",
        image: `${R2}/destinations/islande.jpg`,
        name: { fr: "Islande", en: "Iceland", es: "Islandia" },
        blurb: {
          fr: "Peu de destinations donnent autant l'impression d'avoir le paysage pour soi seul — une cascade, une plage de sable noir, un ciel d'aurores boréales, et le sentiment d'être exactement où il fallait être, seul(e) mais jamais isolé(e).",
          en: "Few destinations give you as strong a sense of having the landscape entirely to yourself — a waterfall, a black sand beach, a sky full of northern lights, and the feeling of being exactly where you needed to be, alone but never isolated.",
          es: "Pocos destinos dan tanto la sensación de tener el paisaje solo para uno — una cascada, una playa de arena negra, un cielo de auroras boreales, y la sensación de estar exactamente donde había que estar, solo pero nunca aislado.",
        },
        href: "/destinations/europe/islande",
      },
      {
        key: "japon",
        image: `${R2}/destinations/japon.jpg`,
        name: { fr: "Japon", en: "Japan", es: "Japón" },
        blurb: {
          fr: "Un pays qui a un vrai talent pour accueillir les voyageurs solo — trains ponctuels, comptoirs de six places où l'on finit toujours par échanger quelques mots, et des temples qui se visitent aussi bien seul qu'accompagné.",
          en: "A country with a real talent for welcoming solo travellers — punctual trains, six-seat counters where you always end up exchanging a few words, and temples that work just as well visited alone as with company.",
          es: "Un país con un talento real para acoger a los viajeros solos — trenes puntuales, barras de seis asientos donde siempre se acaba intercambiando algunas palabras, y templos que se visitan igual de bien solo que acompañado.",
        },
        href: "/destinations/asie/japon",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Sauter d'île en île au gré de l'envie, s'attarder trois jours de plus si un endroit vous plaît, repartir sans avoir à convaincre personne — les Cyclades ont ce format flexible qui convient particulièrement aux voyages en solo.",
          en: "Island-hopping on a whim, staying three extra days if a place grabs you, moving on without having to convince anyone — the Cyclades have that flexible shape that suits solo travel particularly well.",
          es: "Saltar de isla en isla según el antojo, quedarse tres días más si un lugar gusta, seguir sin tener que convencer a nadie — las Cícladas tienen ese formato flexible que conviene especialmente al viaje en solitario.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "turquie",
        image: `${R2}/destinations/turquie-hero.jpg`,
        name: { fr: "Turquie", en: "Turkey", es: "Turquía" },
        blurb: {
          fr: "Istanbul se découvre à pied, un thé à la main, et la Cappadoce offre ce genre de matin où l'on se retrouve seul(e) face à des dizaines de montgolfières dans le ciel — un moment qu'on n'a pas besoin de partager pour qu'il compte.",
          en: "Istanbul is a walking city, best explored tea in hand, and Cappadocia offers that kind of morning where you find yourself alone facing dozens of hot-air balloons in the sky — a moment that doesn't need sharing to matter.",
          es: "Estambul se descubre a pie, té en mano, y Capadocia ofrece ese tipo de mañana en la que uno se encuentra solo frente a decenas de globos en el cielo — un momento que no necesita compartirse para importar.",
        },
        href: "/destinations/europe/turquie",
      },
    ],
    reassurance: [
      {
        title: { fr: "Je n'ai jamais voyagé seul(e), un peu d'appréhension", en: "I've never travelled solo before, and I'm a little nervous", es: "Nunca he viajado solo/a y tengo algo de aprensión" },
        body: {
          fr: "C'est plus courant qu'on le croit — nos guides savent mettre à l'aise dès le premier jour, sans jamais forcer le contact.",
          en: "It's more common than you'd think — our guides know how to put you at ease from day one, without ever forcing it.",
          es: "Es más habitual de lo que se cree — nuestros guías saben poner a gusto desde el primer día, sin forzar nunca el contacto.",
        },
      },
      {
        title: { fr: "Je veux de la liberté, mais pas me perdre", en: "I want freedom, but not to get lost", es: "Quiero libertad, pero no perderme" },
        body: {
          fr: "L'itinéraire pose un cadre clair — hébergements, transferts, points de contact — tout en laissant chaque journée ouverte.",
          en: "The itinerary sets a clear frame — accommodation, transfers, points of contact — while keeping every day open.",
          es: "El itinerario marca un marco claro — alojamientos, traslados, puntos de contacto — dejando cada día abierto.",
        },
      },
      {
        title: { fr: "Je préfère éviter les suppléments chambre single", en: "I'd rather avoid single-room supplements", es: "Prefiero evitar los suplementos de habitación individual" },
        body: {
          fr: "On négocie directement avec nos partenaires pour limiter ce surcoût dès que possible.",
          en: "We negotiate directly with our partners to limit that extra cost wherever we can.",
          es: "Negociamos directamente con nuestros socios para limitar ese sobrecoste siempre que sea posible.",
        },
      },
      {
        title: { fr: "J'aimerais rencontrer des locaux, pas juste visiter", en: "I'd like to meet locals, not just sightsee", es: "Me gustaría conocer a gente local, no solo hacer turismo" },
        body: {
          fr: "Nos guides sont d'ici — un déjeuner chez une famille, un atelier d'artisan, une vraie conversation, pas une visite scriptée.",
          en: "Our guides are from here — lunch at a family's home, an artisan's workshop, a real conversation, not a scripted visit.",
          es: "Nuestros guías son de aquí — un almuerzo en casa de una familia, un taller de artesano, una conversación real, no una visita guionizada.",
        },
      },
      {
        title: { fr: "Je m'inquiète de me sentir seul(e) le soir", en: "I worry about feeling lonely in the evenings", es: "Me preocupa sentirme solo/a por las noches" },
        body: {
          fr: "On choisit des hébergements avec un vrai espace commun — patio, terrasse, salon partagé — là où une conversation démarre naturellement si vous en avez envie, jamais si vous ne l'avez pas.",
          en: "We choose accommodation with a real communal space — a courtyard, a terrace, a shared lounge — where a conversation starts naturally if you feel like it, never if you don't.",
          es: "Elegimos alojamientos con un verdadero espacio común — patio, terraza, salón compartido — donde una conversación surge de forma natural si les apetece, nunca si no.",
        },
      },
      {
        title: { fr: "Je veux pouvoir changer d'avis en cours de route sans tout bouleverser", en: "I want the freedom to change my mind mid-trip without upending everything", es: "Quiero poder cambiar de opinión sobre la marcha sin trastocarlo todo" },
        body: {
          fr: "Rien n'est figé — un jour de plus quelque part, un jour de moins ailleurs, votre conseiller réorganise en quelques échanges.",
          en: "Nothing is fixed in stone — an extra day here, one less there, your advisor rearranges it in a couple of messages.",
          es: "Nada está fijado — un día más aquí, uno menos allá, su asesor lo reorganiza en un par de mensajes.",
        },
      },
      {
        title: { fr: "Je veux quelque chose au-delà d'un simple circuit touristique classique", en: "I want something beyond a standard sightseeing loop", es: "Quiero algo más allá de un circuito turístico clásico" },
        body: {
          fr: "On construit l'itinéraire autour d'un vrai centre d'intérêt — photographie, cuisine, randonnée, artisanat — plutôt qu'une liste de monuments à cocher.",
          en: "We build the itinerary around a real interest — photography, food, hiking, craftsmanship — rather than a checklist of monuments.",
          es: "Construimos el itinerario alrededor de un interés real — fotografía, cocina, senderismo, artesanía — en lugar de una lista de monumentos que marcar.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Est-ce plus cher de voyager seul(e) ?", en: "Is it more expensive to travel solo?", es: "¿Es más caro viajar solo/a?" },
        answer: {
          fr: "Certains hébergements appliquent un supplément chambre single — on cherche systématiquement les options qui le limitent.",
          en: "Some accommodation applies a single-room supplement — we always look for options that keep it low.",
          es: "Algunos alojamientos aplican un suplemento de habitación individual — buscamos siempre opciones que lo limiten.",
        },
      },
      {
        question: { fr: "Vais-je avoir un guide rien que pour moi ?", en: "Will I have a guide just for me?", es: "¿Tendré un guía solo para mí?" },
        answer: {
          fr: "Selon l'excursion, oui — beaucoup de nos circuits solo sont privés, avec un guide dédié du début à la fin.",
          en: "Depending on the excursion, yes — many of our solo trips are private, with a dedicated guide start to finish.",
          es: "Según la excursión, sí — muchos de nuestros circuitos en solitario son privados, con un guía dedicado de principio a fin.",
        },
      },
      {
        question: { fr: "Est-ce sécurisé de voyager seul(e) au Maroc ?", en: "Is it safe to travel solo in Morocco?", es: "¿Es seguro viajar solo/a por Marruecos?" },
        answer: {
          fr: "Nos itinéraires solo passent par des zones que nos guides connaissent bien, avec un point de contact disponible à tout moment du séjour.",
          en: "Our solo itineraries stick to areas our guides know well, with a contact point available throughout your stay.",
          es: "Nuestros itinerarios en solitario pasan por zonas que nuestros guías conocen bien, con un punto de contacto disponible durante toda la estancia.",
        },
      },
      {
        question: { fr: "Puis-je rejoindre un petit groupe si je préfère ne pas être seul(e) tout le temps ?", en: "Can I join a small group if I'd rather not be alone the whole time?", es: "¿Puedo unirme a un grupo pequeño si prefiero no estar solo/a todo el tiempo?" },
        answer: {
          fr: "Oui, certaines excursions se font en petit groupe — précisez votre préférence lors de la demande.",
          en: "Yes, some excursions run as small groups — just mention your preference when you enquire.",
          es: "Sí, algunas excursiones se hacen en grupo reducido — indique su preferencia al hacer la consulta.",
        },
      },
      {
        question: { fr: "Quelle est la durée idéale pour un premier voyage en solo ?", en: "What's the ideal length for a first solo trip?", es: "¿Cuál es la duración ideal para un primer viaje en solitario?" },
        answer: {
          fr: "Entre 4 et 7 nuits en général — assez pour prendre ses marques, sans que ce soit trop long pour une première fois.",
          en: "Generally 4 to 7 nights — enough to find your footing, without it being too long for a first time.",
          es: "Generalmente entre 4 y 7 noches — suficiente para orientarse, sin que sea demasiado largo para una primera vez.",
        },
      },
      {
        question: { fr: "Puis-je rester joignable par ma famille pendant le voyage ?", en: "Can my family still reach me during the trip?", es: "¿Mi familia podrá contactarme durante el viaje?" },
        answer: {
          fr: "Bien sûr — on vous communique une carte SIM locale ou un accès wifi fiable dès l'arrivée, et un numéro d'urgence reste actif tout le séjour.",
          en: "Of course — we set you up with a local SIM or reliable wifi access on arrival, and an emergency number stays active throughout your stay.",
          es: "Por supuesto — le proporcionamos una tarjeta SIM local o acceso wifi fiable al llegar, y un número de emergencia permanece activo durante toda la estancia.",
        },
      },
      {
        question: { fr: "Est-ce adapté si je n'ai jamais voyagé du tout ?", en: "Is this suitable if I've never travelled at all before?", es: "¿Es apto si nunca he viajado antes?" },
        answer: {
          fr: "Oui — on construit un itinéraire avec des repères clairs à chaque étape, transferts inclus, pour que le premier voyage se fasse en confiance.",
          en: "Yes — we build an itinerary with clear markers at every stage, transfers included, so a first trip happens with confidence.",
          es: "Sí — construimos un itinerario con puntos de referencia claros en cada etapa, traslados incluidos, para que el primer viaje se haga con confianza.",
        },
      },
      {
        question: { fr: "Que se passe-t-il si je souhaite raccourcir ou prolonger mon séjour une fois sur place ?", en: "What if I want to shorten or extend my stay once I'm there?", es: "¿Qué pasa si quiero acortar o prolongar mi estancia una vez allí?" },
        answer: {
          fr: "On reste disponible tout au long du séjour pour ajuster vols et hébergements si votre projet change en cours de route.",
          en: "We stay available throughout your stay to adjust flights and accommodation if your plans change along the way.",
          es: "Permanecemos disponibles durante toda la estancia para ajustar vuelos y alojamientos si sus planes cambian sobre la marcha.",
        },
      },
    ],
  },
  {
    slug: "luxury-honeymoons",
    travelerTypeKey: "honeymoon",
    heroImage: `${R2}/experience-types/honeymoon-hero.jpg`,
    heroTitle: {
      fr: "Le premier voyage de votre vie à deux",
      en: "The first trip of your life together",
      es: "El primer viaje de su vida juntos",
    },
    heroSubtitle: {
      fr: "Un itinéraire pensé comme un vrai commencement, pas comme des vacances de plus.",
      en: "An itinerary built like a real beginning, not just another holiday.",
      es: "Un itinerario pensado como un verdadero comienzo, no unas vacaciones más.",
    },
    overviewTitle: {
      fr: "Une lune de miel, pas un voyage comme les autres",
      en: "A honeymoon, not just another trip",
      es: "Una luna de miel, no un viaje cualquiera",
    },
    overviewBody: {
      fr: "On conçoit des lunes de miel depuis des années, et c'est l'un des voyages qu'on aime le plus construire. Chaque détail compte un peu plus : la première nuit, la table du dernier soir, la vue qu'on n'oublie pas.\n\nOn part de ce qui vous ressemble en tant que couple — pas d'un catalogue de destinations « romantiques » — pour construire un itinéraire qui marque vraiment le début de quelque chose.",
      en: "We've been designing honeymoons for years, and it's one of the trips we most love building. Every detail matters a little more: the first night, the table on the last evening, the view you don't forget.\n\nWe start from who you are as a couple — not a catalogue of 'romantic' destinations — to build an itinerary that genuinely marks the start of something.",
      es: "Llevamos años diseñando lunas de miel, y es uno de los viajes que más nos gusta construir. Cada detalle importa un poco más: la primera noche, la mesa de la última velada, la vista que no se olvida.\n\nPartimos de quiénes son ustedes como pareja — no de un catálogo de destinos «románticos» — para construir un itinerario que marque de verdad el comienzo de algo.",
    },
    bestDestinations: [
      {
        key: "maldives",
        image: `${R2}/destinations/maldives.jpg`,
        name: { fr: "Maldives", en: "Maldives", es: "Maldivas" },
        blurb: {
          fr: "Une villa sur pilotis, un lagon qui change de couleur trois fois par jour, et strictement aucune raison de quitter la terrasse — les Maldives restent la réponse la plus évidente quand on cherche l'endroit le plus romantique du monde, et elle tient ses promesses.",
          en: "An overwater villa, a lagoon that changes colour three times a day, and absolutely no reason to leave the deck — the Maldives remain the most obvious answer when you're looking for the world's most romantic setting, and they deliver on it.",
          es: "Una villa sobre el agua, una laguna que cambia de color tres veces al día, y ninguna razón para salir de la terraza — Maldivas sigue siendo la respuesta más evidente cuando se busca el lugar más romántico del mundo, y cumple lo que promete.",
        },
        href: "/destinations/ocean-indien/maldives",
      },
      {
        key: "italie",
        image: `${R2}/destinations/italie.jpg`,
        name: { fr: "Italie", en: "Italy", es: "Italia" },
        blurb: {
          fr: "Un dîner qui s'étire jusqu'à minuit sur une terrasse d'Amalfi, un coucher de soleil sur les collines toscanes, une gondole à Venise si vous y tenez vraiment — l'Italie sait, mieux que quiconque, comment faire durer un moment.",
          en: "A dinner that stretches to midnight on an Amalfi terrace, a sunset over the Tuscan hills, a gondola in Venice if you truly insist — Italy knows, better than anyone, how to make a moment last.",
          es: "Una cena que se alarga hasta la medianoche en una terraza de Amalfi, una puesta de sol sobre las colinas toscanas, una góndola en Venecia si de verdad insisten — Italia sabe, mejor que nadie, cómo hacer que un momento dure.",
        },
        href: "/destinations/europe/italie",
      },
      {
        key: "suisse",
        image: `${R2}/destinations/suisse-hero.jpg`,
        name: { fr: "Suisse", en: "Switzerland", es: "Suiza" },
        blurb: {
          fr: "Un chalet au-dessus des nuages, un funiculaire qui monte droit vers un sommet enneigé, et ce silence particulier des Alpes qui rend tout — même une simple tasse de thé sur un balcon — un peu plus solennel.",
          en: "A chalet above the clouds, a funicular climbing straight toward a snow-capped summit, and that particular Alpine silence that makes everything — even a simple cup of tea on a balcony — feel a little more solemn.",
          es: "Un chalet por encima de las nubes, un funicular que sube directo hacia una cumbre nevada, y ese silencio particular de los Alpes que hace que todo — incluso una simple taza de té en un balcón — se sienta un poco más solemne.",
        },
        href: "/destinations/europe/suisse",
      },
      {
        key: "norvege",
        image: `${R2}/destinations/norvege-hero.jpg`,
        name: { fr: "Norvège", en: "Norway", es: "Noruega" },
        blurb: {
          fr: "Une cabine vitrée face au ciel, une aurore boréale qui apparaît sans prévenir, et un fjord si silencieux qu'on s'entend penser — la Norvège offre ce genre de décor qu'on n'oublie jamais, surtout à deux.",
          en: "A glass-roofed cabin facing the sky, a northern light appearing without warning, and a fjord so silent you can hear yourself think — Norway offers the kind of backdrop you never forget, especially as two.",
          es: "Una cabaña con techo de cristal frente al cielo, una aurora boreal que aparece sin avisar, y un fiordo tan silencioso que se puede oír el propio pensamiento — Noruega ofrece ese tipo de escenario que nunca se olvida, sobre todo en pareja.",
        },
        href: "/destinations/europe/norvege",
      },
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Un riad avec patio et fontaine, un dîner sur un toit-terrasse face aux étoiles, et un désert qui n'appartient qu'à vous à la nuit tombée — le Maroc compose facilement l'un des voyages de noces les plus sensoriels qui existent.",
          en: "A riad with a courtyard and fountain, a rooftop dinner under the stars, and a desert that belongs only to you once night falls — Morocco easily composes one of the most sensory honeymoons there is.",
          es: "Un riad con patio y fuente, una cena en una terraza frente a las estrellas, y un desierto que solo les pertenece a ustedes al caer la noche — Marruecos compone fácilmente una de las lunas de miel más sensoriales que existen.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Une suite avec piscine privée creusée dans la falaise de Santorin, un coucher de soleil qui attire tout le monde au même endroit mais qui vous appartient quand même, et des îles voisines à découvrir en bateau privé.",
          en: "A suite with a private pool carved into the Santorini cliffside, a sunset that draws a crowd but still somehow feels like yours, and neighbouring islands to explore by private boat.",
          es: "Una suite con piscina privada excavada en el acantilado de Santorini, una puesta de sol que reúne a una multitud pero que igualmente se siente propia, e islas vecinas para descubrir en barco privado.",
        },
        href: "/destinations/europe/grece",
      },
    ],
    reassurance: [
      {
        title: { fr: "On veut que ce voyage soit vraiment différent des autres", en: "We want this trip to genuinely feel different from any other", es: "Queremos que este viaje sea realmente distinto a los demás" },
        body: {
          fr: "On construit l'itinéraire en partant de zéro — pas un modèle « lune de miel » standard, mais quelque chose taillé pour vous deux.",
          en: "We build the itinerary from scratch — not a standard 'honeymoon' template, but something cut for the two of you.",
          es: "Construimos el itinerario desde cero — no una plantilla estándar de «luna de miel», sino algo hecho a medida para ustedes dos.",
        },
      },
      {
        title: { fr: "On aimerait une attention particulière pour l'occasion", en: "We'd love a special touch for the occasion", es: "Nos gustaría un detalle especial para la ocasión" },
        body: {
          fr: "Dites-le-nous, et on glisse un moment ou un détail pensé spécialement pour votre lune de miel.",
          en: "Just tell us, and we'll fold in a moment or detail designed specifically for your honeymoon.",
          es: "Cuéntenoslo, y añadiremos un momento o detalle pensado especialmente para su luna de miel.",
        },
      },
      {
        title: { fr: "On ne veut pas d'un itinéraire trop chargé", en: "We don't want an overpacked itinerary", es: "No queremos un itinerario demasiado cargado" },
        body: {
          fr: "Chaque journée garde de la place libre — pour improviser, ou simplement ne rien faire ensemble.",
          en: "Every day keeps room to breathe — to improvise, or simply do nothing together.",
          es: "Cada día guarda espacio libre — para improvisar, o simplemente no hacer nada juntos.",
        },
      },
      {
        title: { fr: "On voyage juste après le mariage, on est un peu fatigués", en: "We're travelling right after the wedding and we're a little exhausted", es: "Viajamos justo después de la boda y estamos algo cansados" },
        body: {
          fr: "On peut construire les premiers jours autour du repos, avant de monter en rythme sur la suite du voyage.",
          en: "We can build the first few days around rest, before picking up the pace for the rest of the trip.",
          es: "Podemos construir los primeros días en torno al descanso, antes de subir el ritmo en el resto del viaje.",
        },
      },
      {
        title: { fr: "On a un budget serré après le mariage", en: "Our budget is tight after the wedding", es: "Tenemos un presupuesto ajustado después de la boda" },
        body: {
          fr: "On construit l'itinéraire pour donner la sensation du luxe là où ça compte le plus — la première nuit, le dîner d'un soir — sans que chaque instant du voyage ait le même prix.",
          en: "We build the itinerary to deliver that sense of luxury where it matters most — the first night, one standout dinner — without every moment of the trip carrying the same price tag.",
          es: "Construimos el itinerario para dar la sensación de lujo donde más importa — la primera noche, una cena destacada — sin que cada momento del viaje tenga el mismo precio.",
        },
      },
      {
        title: { fr: "On veut de l'intimité, pas une destination bondée de jeunes mariés", en: "We want privacy, not a destination crowded with other newlyweds", es: "Queremos intimidad, no un destino lleno de otras parejas de recién casados" },
        body: {
          fr: "On oriente vers des hébergements à taille humaine et des créneaux hors pics de fréquentation, plutôt que vers les adresses les plus citées pour les lunes de miel.",
          en: "We steer toward smaller-scale accommodation and off-peak windows, rather than the most name-checked honeymoon addresses.",
          es: "Nos orientamos hacia alojamientos de escala más humana y franjas fuera de las horas de mayor afluencia, en lugar de las direcciones más citadas para lunas de miel.",
        },
      },
      {
        title: { fr: "On veut un souvenir vraiment marquant, pas juste de belles photos", en: "We want a genuinely memorable trip, not just nice photos", es: "Queremos un recuerdo realmente memorable, no solo buenas fotos" },
        body: {
          fr: "On glisse toujours un moment fort et peu ordinaire dans l'itinéraire — un dîner privé inattendu, une excursion rare — le genre de souvenir qu'on raconte encore dix ans après.",
          en: "We always fold in one striking, out-of-the-ordinary moment — an unexpected private dinner, a rare excursion — the kind of memory still being told ten years on.",
          es: "Siempre incluimos un momento fuerte y poco habitual en el itinerario — una cena privada inesperada, una excursión poco común — el tipo de recuerdo que se sigue contando diez años después.",
        },
      },
    ],
    faqs: [
      {
        question: { fr: "Quelle est la meilleure période pour une lune de miel au Maroc ?", en: "What's the best time for a honeymoon in Morocco?", es: "¿Cuál es la mejor época para una luna de miel en Marruecos?" },
        answer: {
          fr: "Le printemps (avril-juin) et l'automne (septembre-octobre) offrent le meilleur climat — on adapte selon votre destination exacte.",
          en: "Spring (April-June) and autumn (September-October) offer the best weather — we adjust based on your exact destination.",
          es: "La primavera (abril-junio) y el otoño (septiembre-octubre) ofrecen el mejor clima — lo adaptamos según su destino exacto.",
        },
      },
      {
        question: { fr: "Peut-on combiner plusieurs destinations pour la lune de miel ?", en: "Can multiple destinations be combined for the honeymoon?", es: "¿Se pueden combinar varios destinos para la luna de miel?" },
        answer: {
          fr: "Oui, beaucoup de nos lunes de miel enchaînent deux ou trois étapes — on construit la transition pour que ça reste fluide.",
          en: "Yes, many of our honeymoons string together two or three stops — we build the transitions so it stays smooth.",
          es: "Sí, muchas de nuestras lunas de miel encadenan dos o tres etapas — construimos la transición para que sea fluida.",
        },
      },
      {
        question: { fr: "Proposez-vous des attentions spéciales (surclassement, décoration, etc.) ?", en: "Do you arrange special touches (upgrades, decoration, etc.)?", es: "¿Organizan detalles especiales (mejoras de categoría, decoración, etc.)?" },
        answer: {
          fr: "Selon les partenaires, oui — précisez-le lors de votre demande et on voit ce qui est possible.",
          en: "Depending on the partner, yes — mention it when you enquire and we'll see what's possible.",
          es: "Según el socio, sí — indíquelo al hacer la consulta y veremos qué es posible.",
        },
      },
      {
        question: { fr: "Combien de temps à l'avance faut-il réserver ?", en: "How far in advance should we book?", es: "¿Con cuánta antelación hay que reservar?" },
        answer: {
          fr: "Idéalement 3 à 6 mois avant, surtout en haute saison — mais on peut aussi organiser dans des délais plus courts.",
          en: "Ideally 3 to 6 months ahead, especially in high season — but we can also arrange things on shorter notice.",
          es: "Idealmente entre 3 y 6 meses antes, sobre todo en temporada alta — pero también podemos organizarlo con plazos más cortos.",
        },
      },
      {
        question: { fr: "Est-ce adapté si on n'a jamais voyagé ensemble avant ?", en: "Is this suitable if we've never travelled together before?", es: "¿Es adecuado si nunca hemos viajado juntos antes?" },
        answer: {
          fr: "Tout à fait — on construit un itinéraire équilibré, sans présumer de vos habitudes de voyage en tant que couple.",
          en: "Absolutely — we build a balanced itinerary, without assuming your travel habits as a couple.",
          es: "Por supuesto — construimos un itinerario equilibrado, sin dar por hecho sus hábitos de viaje como pareja.",
        },
      },
      {
        question: { fr: "Peut-on garder certains éléments du voyage secrets pour l'un des deux ?", en: "Can some parts of the trip be kept a surprise for one of us?", es: "¿Se pueden mantener algunos elementos del viaje en secreto para uno de los dos?" },
        answer: {
          fr: "Oui — on peut correspondre uniquement avec l'un de vous et réserver la surprise pour certains moments, voire pour la destination elle-même.",
          en: "Yes — we can correspond with just one of you and save the surprise for certain moments, or even the destination itself.",
          es: "Sí — podemos comunicarnos solo con uno de ustedes y guardar la sorpresa para ciertos momentos, o incluso para el propio destino.",
        },
      },
      {
        question: { fr: "Proposez-vous des lunes de miel différées, plusieurs mois après le mariage ?", en: "Do you arrange delayed honeymoons, taken months after the wedding?", es: "¿Organizan lunas de miel diferidas, meses después de la boda?" },
        answer: {
          fr: "Bien sûr — de plus en plus de couples partent quelques mois après, une fois le mariage retombé. L'itinéraire reste exactement aussi soigné.",
          en: "Of course — more and more couples travel a few months later, once the wedding dust has settled. The itinerary stays just as carefully built.",
          es: "Por supuesto — cada vez más parejas viajan unos meses después, una vez pasado el ajetreo de la boda. El itinerario se cuida exactamente igual.",
        },
      },
      {
        question: { fr: "Peut-on prolonger le voyage avec une étape supplémentaire ?", en: "Can the trip be extended with an extra stop?", es: "¿Se puede prolongar el viaje con una etapa adicional?" },
        answer: {
          fr: "Oui, très facilement — beaucoup de couples ajoutent une escale courte à l'aller ou au retour, on l'intègre à l'itinéraire d'ensemble.",
          en: "Yes, very easily — many couples add a short stopover on the way there or back, and we fold it into the overall itinerary.",
          es: "Sí, muy fácilmente — muchas parejas añaden una escala corta a la ida o a la vuelta, y la integramos en el itinerario global.",
        },
      },
    ],
  },
];

export function getTravelerTypePage(slug: string): TravelerTypePage | undefined {
  return TRAVELER_TYPE_PAGES.find((p) => p.slug === slug);
}
