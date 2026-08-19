import type { Localized, DestinationCard } from "@/lib/experienceTypesData";

const R2 = "https://pub-6777907d6a4e4378b16e81847f00f2d2.r2.dev";

export type FamilySubPageCategory = "who" | "when" | "what";

export type FamilySubPage = {
  slug: string;
  category: FamilySubPageCategory;
  // Matches the real Tour.theme enum when a sub-page's angle maps onto one — used to narrow
  // the real trip carousel beyond the base travelerTypes:"family" filter. Left undefined when
  // the sub-page doesn't correspond to a single theme (e.g. a season, or "multi-generational").
  themeParam?: "adventure" | "culture" | "relax" | "family";
  heroImage: string;
  title: Localized;
  intro: Localized;
  bestDestinations: DestinationCard[];
};

export const FAMILY_SUB_PAGES: FamilySubPage[] = [
  // ── Who's travelling? ──
  {
    slug: "toddlers",
    category: "who",
    heroImage: `${R2}/experiences/what-family.jpg`,
    title: { fr: "Voyager avec de tout-petits", en: "Travelling with toddlers", es: "Viajar con niños pequeños" },
    intro: {
      fr: "Avec un enfant de moins de 4 ans, le voyage se juge à d'autres critères : vols courts, hébergements calmes, journées qui laissent la place à la sieste. On construit l'itinéraire autour de ce rythme-là, pas contre lui.",
      en: "With a child under 4, a trip gets judged on different terms: short flights, calm accommodation, days that leave room for a nap. We build the itinerary around that rhythm, not against it.",
      es: "Con un niño menor de 4 años, el viaje se juzga con otros criterios: vuelos cortos, alojamientos tranquilos, días que dejan espacio para la siesta. Construimos el itinerario alrededor de ese ritmo, no en contra de él.",
    },
    bestDestinations: [
      {
        key: "portugal",
        image: `${R2}/destinations/portugal-hero.jpg`,
        name: { fr: "Portugal", en: "Portugal", es: "Portugal" },
        blurb: {
          fr: "Vol court, distances courtes, et une côte de sable doux parfaite pour les premiers pas au bord de l'eau. Le Portugal pardonne un emploi du temps imprévisible.",
          en: "A short flight, short distances, and a soft-sand coast perfect for first steps by the water. Portugal forgives an unpredictable schedule.",
          es: "Vuelo corto, distancias cortas, y una costa de arena suave perfecta para los primeros pasos junto al agua. Portugal perdona un horario impredecible.",
        },
        href: "/destinations/europe/portugal",
      },
      {
        key: "croatie",
        image: `${R2}/destinations/croatie-hero.jpg`,
        name: { fr: "Croatie", en: "Croatia", es: "Croacia" },
        blurb: {
          fr: "Des criques où l'eau reste calme et peu profonde, idéales pour un tout-petit qui découvre la mer sans se faire surprendre par une vague.",
          en: "Coves where the water stays calm and shallow — ideal for a toddler discovering the sea without being caught off guard by a wave.",
          es: "Calas donde el agua permanece calmada y poco profunda, ideales para que un pequeño descubra el mar sin sorprenderse con una ola.",
        },
        href: "/destinations/europe/croatie",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Une île, une villa avec piscine, et rien d'autre à organiser — le format le plus reposant qui existe avec un enfant en bas âge.",
          en: "One island, one villa with a pool, and nothing else to organise — about the most restful format there is with a young child.",
          es: "Una isla, una villa con piscina, y nada más que organizar — el formato más descansado que existe con un niño pequeño.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Un riad tranquille avec patio, des trajets courts entre chaque étape, et des guides habitués à adapter une journée entière au rythme d'une sieste.",
          en: "A quiet riad with a courtyard, short transfers between stops, and guides used to reshaping a whole day around one nap.",
          es: "Un riad tranquilo con patio, trayectos cortos entre cada etapa, y guías acostumbrados a adaptar todo un día al ritmo de una siesta.",
        },
        href: "/destinations/afrique/maroc",
      },
    ],
  },
  {
    slug: "teens",
    category: "who",
    heroImage: `${R2}/destinations/espagne-hero.jpg`,
    title: { fr: "Voyager avec des ados", en: "Travelling with teens", es: "Viajar con adolescentes" },
    intro: {
      fr: "Un ado ne s'ennuie pas de la même façon qu'un enfant de 8 ans — il s'ennuie de tourisme passif. On construit des journées avec de vraies sensations : de l'action, un peu de liberté encadrée, et de quoi raconter au retour.",
      en: "A teenager gets bored differently than an 8-year-old — they get bored of passive sightseeing. We build days with real sensation: action, a little supervised freedom, and something worth telling their friends about.",
      es: "Un adolescente se aburre de forma distinta a un niño de 8 años — se aburre del turismo pasivo. Construimos días con sensaciones reales: acción, algo de libertad supervisada, y algo que contar al volver.",
    },
    bestDestinations: [
      {
        key: "espagne",
        image: `${R2}/destinations/espagne-hero.jpg`,
        name: { fr: "Espagne", en: "Spain", es: "España" },
        blurb: {
          fr: "Barcelone pour l'énergie urbaine, le surf sur la côte, des tapas à toute heure — un pays qui a le bon rythme pour un ado, ni trop lent ni trop scolaire.",
          en: "Barcelona for urban energy, surfing on the coast, tapas at any hour — a country with just the right pace for a teenager, never too slow, never too lecture-hall.",
          es: "Barcelona por la energía urbana, surf en la costa, tapas a cualquier hora — un país con el ritmo justo para un adolescente, ni demasiado lento ni demasiado de manual escolar.",
        },
        href: "/destinations/europe/espagne",
      },
      {
        key: "islande",
        image: `${R2}/destinations/islande.jpg`,
        name: { fr: "Islande", en: "Iceland", es: "Islandia" },
        blurb: {
          fr: "Glaciers, geysers, plage de sable noir — le genre de paysage qui impressionne même un adolescent qui prétend n'être impressionné par rien.",
          en: "Glaciers, geysers, a black-sand beach — the kind of landscape that impresses even a teenager who claims nothing impresses them.",
          es: "Glaciares, géiseres, una playa de arena negra — el tipo de paisaje que impresiona incluso a un adolescente que dice que nada le impresiona.",
        },
        href: "/destinations/europe/islande",
      },
      {
        key: "turquie",
        image: `${R2}/destinations/turquie-hero.jpg`,
        name: { fr: "Turquie", en: "Turkey", es: "Turquía" },
        blurb: {
          fr: "Un survol en montgolfière en Cappadoce, le grand bazar d'Istanbul, la mer Égée pour finir — trois ambiances qui gardent l'attention d'un bout à l'autre.",
          en: "A hot-air balloon flight over Cappadocia, Istanbul's grand bazaar, the Aegean to finish — three moods that keep a teenager's attention the whole way through.",
          es: "Un vuelo en globo sobre Capadocia, el gran bazar de Istanbul, el Egeo para terminar — tres ambientes que mantienen la atención de principio a fin.",
        },
        href: "/destinations/europe/turquie",
      },
      {
        key: "kenya",
        image: `${R2}/destinations/kenya.jpg`,
        name: { fr: "Kenya", en: "Kenya", es: "Kenia" },
        blurb: {
          fr: "Un safari filmé au téléphone plutôt que raconté dans un livre — la grande migration a un effet garanti, même sur un ado équipé d'écouteurs.",
          en: "A safari filmed on a phone rather than read about in a book — the Great Migration has a guaranteed effect, even on a teen with headphones in.",
          es: "Un safari filmado con el móvil en lugar de leído en un libro — la gran migración tiene un efecto garantizado, incluso en un adolescente con auriculares puestos.",
        },
        href: "/destinations/afrique/kenya",
      },
    ],
  },
  {
    slug: "adults",
    category: "who",
    heroImage: `${R2}/destinations/italie.jpg`,
    title: { fr: "Voyager avec des enfants devenus grands", en: "Travelling with adult children", es: "Viajar con hijos ya adultos" },
    intro: {
      fr: "Les enfants ont grandi, mais l'envie de voyager ensemble reste — juste différemment. Moins de logistique, plus de moments partagés en tant qu'adultes : un bon dîner, une randonnée, une conversation qui dure.",
      en: "The kids have grown up, but the wish to travel together hasn't — it just looks different now. Less logistics, more moments shared as adults: a good dinner, a hike, a conversation that runs long.",
      es: "Los hijos han crecido, pero el deseo de viajar juntos permanece — solo que de otra forma. Menos logística, más momentos compartidos como adultos: una buena cena, una caminata, una conversación que se alarga.",
    },
    bestDestinations: [
      {
        key: "italie",
        image: `${R2}/destinations/italie.jpg`,
        name: { fr: "Italie", en: "Italy", es: "Italia" },
        blurb: {
          fr: "Un dîner qui s'étire, un verre de vin toscan, une conversation qui n'a plus besoin d'être surveillée par personne — l'Italie change de visage une fois les enfants devenus adultes.",
          en: "A dinner that runs long, a glass of Tuscan wine, a conversation that no longer needs anyone keeping watch — Italy shows a different face once the kids are grown.",
          es: "Una cena que se alarga, una copa de vino toscano, una conversación que ya no necesita que nadie la vigile — Italia muestra otra cara una vez que los hijos son adultos.",
        },
        href: "/destinations/europe/italie",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Sauter d'île en île au gré de l'envie collective, sans avoir à négocier un programme pour trois âges différents — juste des adultes qui décident ensemble.",
          en: "Island-hopping on a shared whim, with no need to negotiate a programme for three different age groups — just adults deciding together.",
          es: "Saltar de isla en isla según el antojo colectivo, sin tener que negociar un programa para tres edades distintas — solo adultos decidiendo juntos.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "portugal",
        image: `${R2}/destinations/portugal-hero.jpg`,
        name: { fr: "Portugal", en: "Portugal", es: "Portugal" },
        blurb: {
          fr: "Une dégustation dans la vallée du Douro, un dîner de fruits de mer à Lisbonne — le genre de programme qu'on choisit d'un commun accord, pour une fois sans compromis pour personne.",
          en: "A tasting in the Douro Valley, a seafood dinner in Lisbon — the kind of programme chosen by mutual agreement, for once without a compromise for anyone.",
          es: "Una degustación en el valle del Duero, una cena de mariscos en Lisboa — el tipo de programa que se elige de común acuerdo, por una vez sin ceder por nadie.",
        },
        href: "/destinations/europe/portugal",
      },
      {
        key: "croatie",
        image: `${R2}/destinations/croatie-hero.jpg`,
        name: { fr: "Croatie", en: "Croatia", es: "Croacia" },
        blurb: {
          fr: "Les remparts de Dubrovnik au petit matin, une île à explorer en bateau privé — une Croatie plus lente, pensée pour des adultes qui n'ont plus besoin d'être occupés en permanence.",
          en: "Dubrovnik's walls at first light, an island explored by private boat — a slower Croatia, built for adults who no longer need constant entertaining.",
          es: "Las murallas de Dubrovnik al amanecer, una isla explorada en barco privado — una Croacia más lenta, pensada para adultos que ya no necesitan entretenimiento constante.",
        },
        href: "/destinations/europe/croatie",
      },
    ],
  },
  {
    slug: "multi-generational",
    category: "who",
    heroImage: `${R2}/destinations/france-hero.jpg`,
    title: { fr: "Voyage multi-générationnel", en: "Multi-generational travel", es: "Viaje multigeneracional" },
    intro: {
      fr: "Trois générations, trois rythmes, un seul voyage. On construit un itinéraire qui garde tout le monde ensemble l'essentiel du temps, sans jamais forcer un grand-parent à courir ou un enfant à s'ennuyer.",
      en: "Three generations, three paces, one trip. We build an itinerary that keeps everyone together most of the time, without ever making a grandparent rush or a child sit through boredom.",
      es: "Tres generaciones, tres ritmos, un solo viaje. Construimos un itinerario que mantiene a todos juntos la mayor parte del tiempo, sin obligar nunca a un abuelo a correr ni a un niño a aburrirse.",
    },
    bestDestinations: [
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Un riad confortable en base, des excursions courtes en journée, et un hammam en fin d'après-midi qui remet tout le monde d'accord, quel que soit l'âge.",
          en: "A comfortable riad as a base, short day excursions, and a late-afternoon hammam that puts everyone back on the same page, whatever their age.",
          es: "Un riad confortable como base, excursiones cortas durante el día, y un hammam a última hora de la tarde que reconcilia a todos, sea la edad que sea.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "italie",
        image: `${R2}/destinations/italie.jpg`,
        name: { fr: "Italie", en: "Italy", es: "Italia" },
        blurb: {
          fr: "Rome pour l'émerveillement de tous, la Toscane pour ralentir en fin de séjour — un classique qui a fait ses preuves auprès de trois générations à la fois.",
          en: "Rome for wonder shared by all, Tuscany to slow down at the end — a classic proven to work across three generations at once.",
          es: "Roma por el asombro compartido por todos, la Toscana para bajar el ritmo al final — un clásico que ha demostrado funcionar con tres generaciones a la vez.",
        },
        href: "/destinations/europe/italie",
      },
      {
        key: "france",
        image: `${R2}/destinations/france-hero.jpg`,
        name: { fr: "France", en: "France", es: "Francia" },
        blurb: {
          fr: "Des villages perchés faciles à explorer à tout âge, et une Côte d'Azur où chacun trouve sa place — au bord de l'eau ou à l'ombre d'une terrasse.",
          en: "Hilltop villages easy to explore at any age, and a Côte d'Azur where everyone finds their spot — by the water, or in the shade of a terrace.",
          es: "Pueblos encaramados fáciles de explorar a cualquier edad, y una Costa Azul donde cada uno encuentra su lugar — junto al agua o a la sombra de una terraza.",
        },
        href: "/destinations/europe/france",
      },
      {
        key: "kenya",
        image: `${R2}/destinations/kenya.jpg`,
        name: { fr: "Kenya", en: "Kenya", es: "Kenia" },
        blurb: {
          fr: "Un safari en véhicule confortable, un rythme lent imposé par la nature elle-même — personne n'a besoin de courir pour voir un lion.",
          en: "A safari from a comfortable vehicle, a slow pace set by nature itself — nobody has to run to see a lion.",
          es: "Un safari en vehículo confortable, un ritmo lento que impone la propia naturaleza — nadie necesita correr para ver un león.",
        },
        href: "/destinations/afrique/kenya",
      },
    ],
  },
  // ── When to travel? ──
  {
    slug: "spring",
    category: "when",
    heroImage: `${R2}/destinations/portugal-hero.jpg`,
    title: { fr: "Voyager en famille au printemps", en: "Family travel in spring", es: "Viajar en familia en primavera" },
    intro: {
      fr: "Les températures sont douces, les sites moins bondés, et les enfants sortent tout juste de l'hiver — le printemps a ce format idéal pour une famille qui veut du beau temps sans la foule de l'été.",
      en: "Mild temperatures, thinner crowds, and kids just out of winter — spring has that ideal shape for a family wanting good weather without the summer crush.",
      es: "Temperaturas suaves, menos aglomeraciones, y niños que acaban de salir del invierno — la primavera tiene ese formato ideal para una familia que quiere buen tiempo sin la multitud del verano.",
    },
    bestDestinations: [
      {
        key: "portugal",
        image: `${R2}/destinations/portugal-hero.jpg`,
        name: { fr: "Portugal", en: "Portugal", es: "Portugal" },
        blurb: {
          fr: "Avril et mai offrent un climat parfait à Lisbonne comme sur la côte — ni la chaleur de l'été, ni la fraîcheur de l'hiver.",
          en: "April and May bring perfect weather to Lisbon and the coast alike — neither summer's heat nor winter's chill.",
          es: "Abril y mayo ofrecen un clima perfecto tanto en Lisboa como en la costa — ni el calor del verano, ni el frío del invierno.",
        },
        href: "/destinations/europe/portugal",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Les îles retrouvent leurs couleurs sans la chaleur écrasante de juillet — un printemps grec se visite au rythme d'une famille, pas d'une file d'attente.",
          en: "The islands come back to colour without July's crushing heat — a Greek spring is explored at a family's pace, not a queue's.",
          es: "Las islas recuperan sus colores sin el calor agobiante de julio — una primavera griega se recorre al ritmo de una familia, no de una cola.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Avant les grandes chaleurs de l'été, le désert et les villes impériales se découvrent dans une lumière particulièrement douce.",
          en: "Ahead of summer's real heat, the desert and imperial cities reveal themselves in a particularly gentle light.",
          es: "Antes del gran calor del verano, el desierto y las ciudades imperiales se descubren con una luz especialmente suave.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "croatie",
        image: `${R2}/destinations/croatie-hero.jpg`,
        name: { fr: "Croatie", en: "Croatia", es: "Croacia" },
        blurb: {
          fr: "Les remparts de Dubrovnik se visitent sans la chaleur ni la foule de juillet, et l'eau commence déjà à se réchauffer.",
          en: "Dubrovnik's walls without July's heat or crowds, and the water is already starting to warm up.",
          es: "Las murallas de Dubrovnik sin el calor ni la multitud de julio, y el agua ya empieza a templarse.",
        },
        href: "/destinations/europe/croatie",
      },
    ],
  },
  {
    slug: "summer",
    category: "when",
    heroImage: `${R2}/destinations/maldives.jpg`,
    title: { fr: "Voyager en famille en été", en: "Family travel in summer", es: "Viajar en familia en verano" },
    intro: {
      fr: "Les grandes vacances laissent enfin le temps de vraiment partir — la question n'est plus quand, mais où, entre les plages qui font l'unanimité et les destinations un peu plus fraîches pour ceux qui fuient la chaleur.",
      en: "The long summer break finally leaves room for a real trip — the question isn't when anymore, but where, between beaches everyone agrees on and cooler destinations for those escaping the heat.",
      es: "Las vacaciones de verano por fin dejan tiempo para un viaje real — la pregunta ya no es cuándo, sino a dónde, entre playas en las que todos están de acuerdo y destinos más frescos para quienes escapan del calor.",
    },
    bestDestinations: [
      {
        key: "maldives",
        image: `${R2}/destinations/maldives.jpg`,
        name: { fr: "Maldives", en: "Maldives", es: "Maldivas" },
        blurb: {
          fr: "Un lagon peu profond et calme, parfait pour les premières séances de snorkeling en famille, et un climat stable toute l'année.",
          en: "A shallow, calm lagoon perfect for a family's first snorkelling sessions, with a stable climate all year round.",
          es: "Una laguna poco profunda y tranquila, perfecta para las primeras sesiones de esnórquel en familia, con un clima estable todo el año.",
        },
        href: "/destinations/ocean-indien/maldives",
      },
      {
        key: "croatie",
        image: `${R2}/destinations/croatie-hero.jpg`,
        name: { fr: "Croatie", en: "Croatia", es: "Croacia" },
        blurb: {
          fr: "L'Adriatique à son meilleur — eau turquoise, criques accessibles en bateau, et des glaciers artisanaux à chaque coin de rue.",
          en: "The Adriatic at its best — turquoise water, coves reachable by boat, and an artisan gelato shop on every corner.",
          es: "El Adriático en su mejor momento — agua turquesa, calas accesibles en barco, y una heladería artesanal en cada esquina.",
        },
        href: "/destinations/europe/croatie",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Sauter d'île en île en plein été, avec une eau à température parfaite et des journées qui s'étirent tard dans la soirée.",
          en: "Island-hopping in the height of summer, with perfectly warm water and days that stretch late into the evening.",
          es: "Saltar de isla en isla en pleno verano, con un agua a temperatura perfecta y días que se alargan hasta bien entrada la noche.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "espagne",
        image: `${R2}/destinations/espagne-hero.jpg`,
        name: { fr: "Espagne", en: "Spain", es: "España" },
        blurb: {
          fr: "Ville et plage à quelques minutes l'une de l'autre — la formule qui évite de choisir entre visiter et se baigner tous les jours de l'été.",
          en: "City and beach minutes apart — the formula that avoids choosing between sightseeing and swimming every single day of summer.",
          es: "Ciudad y playa a pocos minutos una de la otra — la fórmula que evita elegir entre visitar y bañarse cada día del verano.",
        },
        href: "/destinations/europe/espagne",
      },
    ],
  },
  {
    slug: "autumn",
    category: "when",
    heroImage: `${R2}/destinations/croatie-hero.jpg`,
    title: { fr: "Voyager en famille à l'automne", en: "Family travel in autumn", es: "Viajar en familia en otoño" },
    intro: {
      fr: "Après la rentrée, l'automne offre des tarifs plus doux, des sites vidés des foules d'été, et une lumière particulière qui change complètement le visage d'une destination déjà connue.",
      en: "After the back-to-school rush, autumn brings gentler prices, sites emptied of summer crowds, and a particular light that completely changes the face of an already-familiar destination.",
      es: "Tras la vuelta al colegio, el otoño trae precios más suaves, lugares vaciados de las multitudes del verano, y una luz particular que cambia por completo el rostro de un destino ya conocido.",
    },
    bestDestinations: [
      {
        key: "italie",
        image: `${R2}/destinations/italie.jpg`,
        name: { fr: "Italie", en: "Italy", es: "Italia" },
        blurb: {
          fr: "Les vendanges en Toscane, Rome sans la chaleur de juillet — l'automne est sans doute la saison la plus généreuse pour découvrir l'Italie en famille.",
          en: "Grape harvest in Tuscany, Rome without July's heat — autumn is arguably the most generous season for discovering Italy as a family.",
          es: "La vendimia en la Toscana, Roma sin el calor de julio — el otoño es quizá la temporada más generosa para descubrir Italia en familia.",
        },
        href: "/destinations/europe/italie",
      },
      {
        key: "turquie",
        image: `${R2}/destinations/turquie-hero.jpg`,
        name: { fr: "Turquie", en: "Turkey", es: "Turquía" },
        blurb: {
          fr: "La Cappadoce sans la chaleur de l'été et sans la foule des vacances — le meilleur moment pour un vol en montgolfière au lever du jour.",
          en: "Cappadocia without summer's heat and without the holiday crowds — the best time for a sunrise hot-air balloon flight.",
          es: "Capadocia sin el calor del verano y sin la multitud de las vacaciones — el mejor momento para un vuelo en globo al amanecer.",
        },
        href: "/destinations/europe/turquie",
      },
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Les grandes chaleurs de l'été retombent, et le désert redevient accessible en journée sans avoir à se cacher du soleil.",
          en: "Summer's real heat has passed, and the desert becomes workable again during the day without hiding from the sun.",
          es: "El gran calor del verano ya ha pasado, y el desierto vuelve a ser accesible durante el día sin esconderse del sol.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "portugal",
        image: `${R2}/destinations/portugal-hero.jpg`,
        name: { fr: "Portugal", en: "Portugal", es: "Portugal" },
        blurb: {
          fr: "La vallée du Douro en pleines vendanges, et Lisbonne enfin dégagée de la foule estivale — l'automne portugais se déguste littéralement.",
          en: "The Douro Valley mid-harvest, and Lisbon finally clear of the summer crowds — Portuguese autumn is one to be tasted, literally.",
          es: "El valle del Duero en plena vendimia, y Lisboa por fin libre de la multitud estival — el otoño portugués se saborea, literalmente.",
        },
        href: "/destinations/europe/portugal",
      },
    ],
  },
  {
    slug: "winter",
    category: "when",
    heroImage: `${R2}/destinations/suisse-hero.jpg`,
    title: { fr: "Voyager en famille en hiver", en: "Family travel in winter", es: "Viajar en familia en invierno" },
    intro: {
      fr: "L'hiver n'est pas une saison creuse — c'est une saison à part, entre neige et aurores boréales, ou un safari sans la chaleur écrasante de l'été.",
      en: "Winter isn't a quiet season to wait out — it's a season of its own, between snow and northern lights, or a safari without summer's crushing heat.",
      es: "El invierno no es una temporada muerta — es una temporada propia, entre nieve y auroras boreales, o un safari sin el calor agobiante del verano.",
    },
    bestDestinations: [
      {
        key: "suisse",
        image: `${R2}/destinations/suisse-hero.jpg`,
        name: { fr: "Suisse", en: "Switzerland", es: "Suiza" },
        blurb: {
          fr: "Un chalet au pied des pistes, un funiculaire qui monte droit dans la neige — l'hiver suisse a un format familial presque parfait.",
          en: "A chalet at the foot of the slopes, a funicular climbing straight into the snow — Swiss winter has an almost perfect family shape.",
          es: "Un chalet al pie de las pistas, un funicular que sube directo hacia la nieve — el invierno suizo tiene un formato familiar casi perfecto.",
        },
        href: "/destinations/europe/suisse",
      },
      {
        key: "norvege",
        image: `${R2}/destinations/norvege-hero.jpg`,
        name: { fr: "Norvège", en: "Norway", es: "Noruega" },
        blurb: {
          fr: "Une aurore boréale reste l'un des rares spectacles naturels qui impressionne vraiment un enfant — et un adulte tout autant.",
          en: "A northern light remains one of the rare natural spectacles that genuinely impresses a child — and an adult just as much.",
          es: "Una aurora boreal sigue siendo uno de los pocos espectáculos naturales que realmente impresiona a un niño — y a un adulto por igual.",
        },
        href: "/destinations/europe/norvege",
      },
      {
        key: "islande",
        image: `${R2}/destinations/islande.jpg`,
        name: { fr: "Islande", en: "Iceland", es: "Islandia" },
        blurb: {
          fr: "Un bain thermal en pleine neige, un ciel d'aurores boréales — l'Islande transforme l'hiver en attraction plutôt qu'en contrainte.",
          en: "A hot spring soak in the middle of the snow, a sky full of northern lights — Iceland turns winter into an attraction rather than a constraint.",
          es: "Un baño termal en plena nieve, un cielo de auroras boreales — Islandia convierte el invierno en atracción en lugar de en obstáculo.",
        },
        href: "/destinations/europe/islande",
      },
      {
        key: "kenya",
        image: `${R2}/destinations/kenya.jpg`,
        name: { fr: "Kenya", en: "Kenya", es: "Kenia" },
        blurb: {
          fr: "L'hiver européen est justement la meilleure fenêtre pour un safari — climat sec, animaux regroupés autour des points d'eau restants.",
          en: "European winter is actually the best window for a safari — dry weather, animals gathered around what water remains.",
          es: "El invierno europeo es justo la mejor ventana para un safari — clima seco, animales agrupados alrededor del agua que queda.",
        },
        href: "/destinations/afrique/kenya",
      },
    ],
  },
  // ── What type of trip? ──
  {
    slug: "adventure",
    category: "what",
    themeParam: "adventure",
    heroImage: `${R2}/experiences/what-adventure.jpg`,
    title: { fr: "Aventure en famille", en: "Family adventure", es: "Aventura en familia" },
    intro: {
      fr: "Quad dans les dunes, randonnée sur un glacier, nuit sous tente dans le désert — pour les familles qui préfèrent revenir avec des histoires plutôt que des photos de plage.",
      en: "Quad biking in the dunes, a glacier hike, a night under canvas in the desert — for families who'd rather come home with stories than beach photos.",
      es: "Quad en las dunas, senderismo sobre un glaciar, una noche bajo la tienda en el desierto — para familias que prefieren volver con historias en lugar de fotos de playa.",
    },
    bestDestinations: [
      {
        key: "islande",
        image: `${R2}/destinations/islande.jpg`,
        name: { fr: "Islande", en: "Iceland", es: "Islandia" },
        blurb: {
          fr: "Randonnée sur un glacier encadrée par un guide, cascade après cascade — une aventure spectaculaire mais toujours mesurée pour un groupe familial.",
          en: "A guided glacier hike, waterfall after waterfall — a spectacular adventure, but always paced for a family group.",
          es: "Senderismo guiado sobre un glaciar, cascada tras cascada — una aventura espectacular, pero siempre medida para un grupo familiar.",
        },
        href: "/destinations/europe/islande",
      },
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Quad dans les dunes, nuit sous tente berbère, ciel étoilé sans aucune lumière alentour — l'aventure du désert, sans jamais sortir du confort.",
          en: "Quad biking in the dunes, a night under Berber canvas, a sky full of stars with no light around for miles — desert adventure, without ever leaving comfort behind.",
          es: "Quad en las dunas, una noche bajo una tienda beréber, un cielo estrellado sin ninguna luz alrededor — la aventura del desierto, sin renunciar nunca a la comodidad.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "kenya",
        image: `${R2}/destinations/kenya.jpg`,
        name: { fr: "Kenya", en: "Kenya", es: "Kenia" },
        blurb: {
          fr: "Safari en 4x4 à ciel ouvert, marche encadrée en lisière de savane — l'aventure vécue à hauteur d'enfant, jamais forcée.",
          en: "A safari in an open-top 4x4, a guided walk at the edge of the savannah — adventure at a child's own pace, never forced.",
          es: "Safari en 4x4 descapotable, caminata guiada en el borde de la sabana — la aventura vivida a la altura de un niño, nunca forzada.",
        },
        href: "/destinations/afrique/kenya",
      },
      {
        key: "norvege",
        image: `${R2}/destinations/norvege-hero.jpg`,
        name: { fr: "Norvège", en: "Norway", es: "Noruega" },
        blurb: {
          fr: "Kayak sur un fjord immobile, randonnée courte vers un point de vue vertigineux — une aventure douce, encadrée du début à la fin.",
          en: "Kayaking on a still fjord, a short hike to a vertigo-inducing viewpoint — a gentle adventure, guided from start to finish.",
          es: "Kayak en un fiordo inmóvil, una caminata corta hasta un mirador vertiginoso — una aventura suave, guiada de principio a fin.",
        },
        href: "/destinations/europe/norvege",
      },
    ],
  },
  {
    slug: "wildlife",
    category: "what",
    heroImage: `${R2}/destinations/kenya.jpg`,
    title: { fr: "Faune sauvage en famille", en: "Family wildlife trips", es: "Fauna salvaje en familia" },
    intro: {
      fr: "Un lion à quelques mètres, une baleine qui souffle à la surface, une aurore boréale qui n'a rien à voir avec un documentaire — voir la nature de près marque un enfant plus longtemps que n'importe quel musée.",
      en: "A lion a few metres away, a whale surfacing to breathe, a northern light that has nothing to do with a documentary — seeing nature up close stays with a child longer than any museum.",
      es: "Un león a pocos metros, una ballena que sale a respirar, una aurora boreal que no tiene nada que ver con un documental — ver la naturaleza de cerca deja más huella en un niño que cualquier museo.",
    },
    bestDestinations: [
      {
        key: "kenya",
        image: `${R2}/destinations/kenya.jpg`,
        name: { fr: "Kenya", en: "Kenya", es: "Kenia" },
        blurb: {
          fr: "La grande migration, des lions à quelques mètres du véhicule, des guides qui savent raconter ce qu'on voit plutôt que juste le montrer.",
          en: "The Great Migration, lions just metres from the vehicle, guides who know how to narrate what you're seeing rather than just point at it.",
          es: "La gran migración, leones a pocos metros del vehículo, guías que saben narrar lo que se ve en lugar de solo señalarlo.",
        },
        href: "/destinations/afrique/kenya",
      },
      {
        key: "maldives",
        image: `${R2}/destinations/maldives.jpg`,
        name: { fr: "Maldives", en: "Maldives", es: "Maldivas" },
        blurb: {
          fr: "Tortues et raies mantas visibles en snorkeling à quelques mètres de la villa — la faune sauvage ici se découvre sous l'eau plutôt qu'en 4x4.",
          en: "Turtles and manta rays visible while snorkelling just metres from the villa — wildlife here is discovered underwater rather than from a 4x4.",
          es: "Tortugas y mantarrayas visibles haciendo esnórquel a pocos metros de la villa — la fauna salvaje aquí se descubre bajo el agua en lugar de en un 4x4.",
        },
        href: "/destinations/ocean-indien/maldives",
      },
      {
        key: "islande",
        image: `${R2}/destinations/islande.jpg`,
        name: { fr: "Islande", en: "Iceland", es: "Islandia" },
        blurb: {
          fr: "Baleines au large de Húsavík, macareux sur les falaises — une faune différente, discrète, qui se découvre au fil d'une sortie en bateau.",
          en: "Whales off Húsavík, puffins on the cliffs — a different, quieter wildlife, discovered over the course of a boat trip.",
          es: "Ballenas frente a Húsavík, frailecillos en los acantilados — una fauna distinta, discreta, que se descubre a lo largo de una salida en barco.",
        },
        href: "/destinations/europe/islande",
      },
      {
        key: "norvege",
        image: `${R2}/destinations/norvege-hero.jpg`,
        name: { fr: "Norvège", en: "Norway", es: "Noruega" },
        blurb: {
          fr: "Des orques observées depuis un bateau silencieux dans un fjord — un souvenir que ni un enfant ni un parent n'oublie vraiment.",
          en: "Orcas observed from a quiet boat inside a fjord — a memory neither child nor parent really forgets.",
          es: "Orcas observadas desde un barco silencioso dentro de un fiordo — un recuerdo que ni un niño ni un padre olvida de verdad.",
        },
        href: "/destinations/europe/norvege",
      },
    ],
  },
  {
    slug: "cultural",
    category: "what",
    themeParam: "culture",
    heroImage: `${R2}/experiences/what-culture.jpg`,
    title: { fr: "Immersion culturelle en famille", en: "Family cultural immersion", es: "Inmersión cultural en familia" },
    intro: {
      fr: "Un cours de cuisine, un artisan qui montre son geste, un marché qu'on traverse en s'arrêtant à chaque étal — la culture se transmet mieux par les mains que par un audio-guide.",
      en: "A cooking class, an artisan showing their craft, a market crossed one stall at a time — culture passes on better through hands-on moments than an audio guide.",
      es: "Una clase de cocina, un artesano mostrando su oficio, un mercado que se recorre parando en cada puesto — la cultura se transmite mejor con las manos que con una audioguía.",
    },
    bestDestinations: [
      {
        key: "italie",
        image: `${R2}/destinations/italie.jpg`,
        name: { fr: "Italie", en: "Italy", es: "Italia" },
        blurb: {
          fr: "Un cours de pâtes fraîches en Toscane, un guide qui raconte Rome comme une histoire plutôt qu'une liste de dates — la culture s'y mange autant qu'elle se visite.",
          en: "A fresh pasta class in Tuscany, a guide who tells Rome's story rather than a list of dates — culture here is eaten as much as it's visited.",
          es: "Una clase de pasta fresca en la Toscana, un guía que cuenta Roma como una historia en lugar de una lista de fechas — la cultura aquí se come tanto como se visita.",
        },
        href: "/destinations/europe/italie",
      },
      {
        key: "japon",
        image: `${R2}/destinations/japon.jpg`,
        name: { fr: "Japon", en: "Japan", es: "Japón" },
        blurb: {
          fr: "Un temple, un comptoir de ramen, un jardin zen — le Japon impressionne les enfants par ses contrastes plus que par ses discours.",
          en: "A temple, a ramen counter, a zen garden — Japan impresses children through its contrasts more than through explanations.",
          es: "Un templo, una barra de ramen, un jardín zen — Japón impresiona a los niños con sus contrastes más que con discursos.",
        },
        href: "/destinations/asie/japon",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "L'Acropole racontée comme un mythe plutôt qu'un cours d'histoire, et un déjeuner de mezze partagé sur une terrasse en fin de journée.",
          en: "The Acropolis told as a myth rather than a history lesson, and a shared mezze lunch on a terrace at the end of the day.",
          es: "La Acrópolis contada como un mito en lugar de una clase de historia, y un almuerzo de mezze compartido en una terraza al final del día.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Un souk traversé lentement, un atelier de tapis, un tajine préparé avec la famille qui vous reçoit — la culture s'y vit avant de se raconter.",
          en: "A souk crossed slowly, a carpet workshop, a tagine cooked with the family hosting you — culture here is lived before it's explained.",
          es: "Un zoco recorrido con calma, un taller de alfombras, un tajín preparado con la familia que los recibe — la cultura aquí se vive antes de contarse.",
        },
        href: "/destinations/afrique/maroc",
      },
    ],
  },
  {
    slug: "beach",
    category: "what",
    themeParam: "relax",
    heroImage: `${R2}/experiences/what-relax.jpg`,
    title: { fr: "Plage et détente en famille", en: "Family beach & relaxation", es: "Playa y descanso en familia" },
    intro: {
      fr: "Parfois, la meilleure activité en famille, c'est de ne rien faire du tout, ensemble, au bord de l'eau. Ces destinations sont pensées pour un rythme qui n'a rien à prouver.",
      en: "Sometimes the best family activity is doing absolutely nothing, together, by the water. These destinations are built for a pace that has nothing to prove.",
      es: "A veces la mejor actividad en familia es no hacer absolutamente nada, juntos, junto al agua. Estos destinos están pensados para un ritmo que no tiene nada que demostrar.",
    },
    bestDestinations: [
      {
        key: "maldives",
        image: `${R2}/destinations/maldives.jpg`,
        name: { fr: "Maldives", en: "Maldives", es: "Maldivas" },
        blurb: {
          fr: "Une villa sur pilotis, un lagon calme et peu profond, et strictement rien d'autre au programme que la plage et l'eau.",
          en: "An overwater villa, a calm and shallow lagoon, and strictly nothing else on the agenda beyond the beach and the water.",
          es: "Una villa sobre el agua, una laguna calmada y poco profunda, y estrictamente nada más en el programa aparte de la playa y el agua.",
        },
        href: "/destinations/ocean-indien/maldives",
      },
      {
        key: "croatie",
        image: `${R2}/destinations/croatie-hero.jpg`,
        name: { fr: "Croatie", en: "Croatia", es: "Croacia" },
        blurb: {
          fr: "Des criques accessibles en bateau, une eau limpide, et l'île de Hvar pour un rythme volontairement ralenti.",
          en: "Coves reachable by boat, clear water, and the island of Hvar for a pace deliberately slowed right down.",
          es: "Calas accesibles en barco, agua transparente, y la isla de Hvar para un ritmo deliberadamente ralentizado.",
        },
        href: "/destinations/europe/croatie",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Une île, une villa avec piscine face à la mer — le format le plus reposant pour une famille qui a besoin de vraies vacances.",
          en: "One island, one villa with a pool facing the sea — about the most restful format for a family that needs an actual holiday.",
          es: "Una isla, una villa con piscina frente al mar — el formato más descansado para una familia que necesita unas vacaciones de verdad.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "portugal",
        image: `${R2}/destinations/portugal-hero.jpg`,
        name: { fr: "Portugal", en: "Portugal", es: "Portugal" },
        blurb: {
          fr: "Une côte de sable doux, un vol court, et des distances suffisamment courtes pour ne jamais transformer les vacances en logistique.",
          en: "A soft-sand coast, a short flight, and distances short enough that the holiday never turns into logistics.",
          es: "Una costa de arena suave, un vuelo corto, y distancias lo bastante cortas para que las vacaciones nunca se conviertan en logística.",
        },
        href: "/destinations/europe/portugal",
      },
    ],
  },
  {
    slug: "bucket-list",
    category: "what",
    heroImage: `${R2}/destinations/islande.jpg`,
    title: { fr: "Le grand voyage à cocher", en: "The bucket-list trip", es: "El gran viaje pendiente" },
    intro: {
      fr: "Certains voyages se planifient depuis des années — celui qu'on repousse toujours en se disant « un jour ». Ce sont ceux-là qu'on aime construire le plus soigneusement.",
      en: "Some trips have been on the list for years — the ones always pushed to 'someday.' These are the ones we most enjoy building with real care.",
      es: "Algunos viajes llevan años en la lista — los que siempre se posponen para 'algún día'. Son precisamente esos los que más nos gusta construir con cuidado.",
    },
    bestDestinations: [
      {
        key: "islande",
        image: `${R2}/destinations/islande.jpg`,
        name: { fr: "Islande", en: "Iceland", es: "Islandia" },
        blurb: {
          fr: "Glaciers, geysers, aurores boréales — un voyage qui a l'habitude de rester en tête de liste plus longtemps que n'importe quel autre.",
          en: "Glaciers, geysers, northern lights — a trip that tends to stay at the top of the list longer than almost any other.",
          es: "Glaciares, géiseres, auroras boreales — un viaje que suele quedarse en lo alto de la lista más tiempo que casi cualquier otro.",
        },
        href: "/destinations/europe/islande",
      },
      {
        key: "japon",
        image: `${R2}/destinations/japon.jpg`,
        name: { fr: "Japon", en: "Japan", es: "Japón" },
        blurb: {
          fr: "Kyoto et Tokyo, deux visages d'un même pays, à découvrir avant que les enfants ne soient trop grands pour s'émerveiller de tout.",
          en: "Kyoto and Tokyo, two faces of the same country, worth discovering before the kids get too old to marvel at everything.",
          es: "Kioto y Tokio, dos caras de un mismo país, para descubrir antes de que los niños sean demasiado mayores para maravillarse con todo.",
        },
        href: "/destinations/asie/japon",
      },
      {
        key: "kenya",
        image: `${R2}/destinations/kenya.jpg`,
        name: { fr: "Kenya", en: "Kenya", es: "Kenia" },
        blurb: {
          fr: "Le premier safari en famille reste, année après année, l'un des voyages les plus demandés — et l'un de ceux qui déçoit le moins.",
          en: "A first family safari remains, year after year, one of the most requested trips — and one of the least likely to disappoint.",
          es: "El primer safari en familia sigue siendo, año tras año, uno de los viajes más solicitados — y de los que menos decepcionan.",
        },
        href: "/destinations/afrique/kenya",
      },
      {
        key: "maldives",
        image: `${R2}/destinations/maldives.jpg`,
        name: { fr: "Maldives", en: "Maldives", es: "Maldivas" },
        blurb: {
          fr: "Une villa sur pilotis reste l'image la plus recherchée des vacances de rêve — et l'une des rares qui ressemble vraiment à la photo une fois sur place.",
          en: "An overwater villa remains the single most searched image of a dream holiday — and one of the rare ones that actually looks like the photo once you're there.",
          es: "Una villa sobre el agua sigue siendo la imagen más buscada de unas vacaciones de ensueño — y una de las pocas que de verdad se parece a la foto una vez allí.",
        },
        href: "/destinations/ocean-indien/maldives",
      },
    ],
  },
  {
    slug: "graduation",
    category: "what",
    heroImage: `${R2}/destinations/turquie-hero.jpg`,
    title: { fr: "Voyage de fin d'études", en: "Graduation trip", es: "Viaje de fin de curso" },
    intro: {
      fr: "La fin du lycée ou d'un cycle d'études marque un vrai cap — un voyage qui célèbre ça, avec assez de liberté pour se sentir grand, et assez de cadre pour rassurer les parents.",
      en: "Finishing school or a degree marks a real turning point — a trip that celebrates it, with enough freedom to feel grown-up, and enough structure to reassure the parents.",
      es: "Terminar el instituto o una etapa de estudios marca un momento real — un viaje que lo celebra, con suficiente libertad para sentirse mayor, y suficiente estructura para tranquilizar a los padres.",
    },
    bestDestinations: [
      {
        key: "turquie",
        image: `${R2}/destinations/turquie-hero.jpg`,
        name: { fr: "Turquie", en: "Turkey", es: "Turquía" },
        blurb: {
          fr: "Un vol en montgolfière au lever du jour en Cappadoce, puis Istanbul pour l'énergie — un voyage qui marque, dans le bon sens du terme.",
          en: "A sunrise balloon flight over Cappadocia, then Istanbul for the energy — a trip that leaves a mark, in the best way.",
          es: "Un vuelo en globo al amanecer sobre Capadocia, y después Istanbul por la energía — un viaje que deja huella, en el buen sentido.",
        },
        href: "/destinations/europe/turquie",
      },
      {
        key: "japon",
        image: `${R2}/destinations/japon.jpg`,
        name: { fr: "Japon", en: "Japan", es: "Japón" },
        blurb: {
          fr: "Tokyo pour l'effet de dépaysement total, Kyoto pour la respiration — un voyage assez marquant pour clôturer une étape en beauté.",
          en: "Tokyo for the full sense of being somewhere else entirely, Kyoto to catch your breath — striking enough to close a chapter properly.",
          es: "Tokio por la sensación de estar en otro mundo por completo, Kioto para tomar aire — un viaje lo bastante impactante para cerrar una etapa por lo alto.",
        },
        href: "/destinations/asie/japon",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Sauter d'île en île avec des amis ou en famille élargie — une liberté encadrée, exactement ce qu'il faut à cet âge-là.",
          en: "Island-hopping with friends or extended family — supervised freedom, exactly what's called for at that age.",
          es: "Saltar de isla en isla con amigos o familia extendida — libertad supervisada, justo lo que se necesita a esa edad.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "espagne",
        image: `${R2}/destinations/espagne-hero.jpg`,
        name: { fr: "Espagne", en: "Spain", es: "España" },
        blurb: {
          fr: "Barcelone pour l'énergie, la côte pour souffler — un format court et vivant, parfait pour une célébration entre deux étapes de vie.",
          en: "Barcelona for the energy, the coast to catch a breath — a short, lively format, perfect for a celebration between two life stages.",
          es: "Barcelona por la energía, la costa para tomar aire — un formato corto y animado, perfecto para una celebración entre dos etapas de la vida.",
        },
        href: "/destinations/europe/espagne",
      },
    ],
  },
  {
    slug: "mother-daughter",
    category: "what",
    heroImage: `${R2}/destinations/grece-hero.jpg`,
    title: { fr: "Voyage mère-fille", en: "Mother-daughter trip", es: "Viaje madre e hija" },
    intro: {
      fr: "Un temps rien qu'à deux, sans le reste de la famille à gérer — pour marquer une étape, ou simplement se retrouver, à un rythme qui n'appartient qu'à vous deux.",
      en: "Time just for the two of you, with no rest of the family to manage — to mark a milestone, or simply to reconnect, at a pace that belongs only to you two.",
      es: "Tiempo solo para las dos, sin el resto de la familia que gestionar — para marcar una etapa, o simplemente reencontrarse, a un ritmo que solo les pertenece a ustedes dos.",
    },
    bestDestinations: [
      {
        key: "maroc",
        image: `${R2}/destinations/maroc.jpg`,
        name: { fr: "Maroc", en: "Morocco", es: "Marruecos" },
        blurb: {
          fr: "Un hammam partagé, un souk traversé en prenant son temps, un riad avec patio — le genre de programme qui se savoure à deux.",
          en: "A shared hammam, a souk crossed without hurrying, a riad with a courtyard — the kind of programme best savoured together.",
          es: "Un hammam compartido, un zoco recorrido sin prisa, un riad con patio — el tipo de programa que se disfruta mejor entre dos.",
        },
        href: "/destinations/afrique/maroc",
      },
      {
        key: "italie",
        image: `${R2}/destinations/italie.jpg`,
        name: { fr: "Italie", en: "Italy", es: "Italia" },
        blurb: {
          fr: "Un cours de cuisine à deux en Toscane, une glace partagée dans les rues de Rome — l'Italie a un vrai talent pour ce genre de moment.",
          en: "A cooking class for two in Tuscany, a shared gelato in the streets of Rome — Italy has a real talent for this kind of moment.",
          es: "Una clase de cocina para dos en la Toscana, un helado compartido por las calles de Roma — Italia tiene un talento real para este tipo de momento.",
        },
        href: "/destinations/europe/italie",
      },
      {
        key: "grece",
        image: `${R2}/destinations/grece-hero.jpg`,
        name: { fr: "Grèce", en: "Greece", es: "Grecia" },
        blurb: {
          fr: "Un coucher de soleil à Santorin, une journée sans horaire sur une île plus discrète — un cadre qui invite naturellement à la conversation.",
          en: "A sunset in Santorini, an unscheduled day on a quieter island — a setting that naturally invites conversation.",
          es: "Una puesta de sol en Santorini, un día sin horario en una isla más discreta — un entorno que invita de forma natural a la conversación.",
        },
        href: "/destinations/europe/grece",
      },
      {
        key: "portugal",
        image: `${R2}/destinations/portugal-hero.jpg`,
        name: { fr: "Portugal", en: "Portugal", es: "Portugal" },
        blurb: {
          fr: "Un tramway à Lisbonne, une dégustation dans la vallée du Douro — un format compact, facile à deux, sans grande logistique.",
          en: "A tram ride in Lisbon, a tasting in the Douro Valley — a compact format, easy for two, with no heavy logistics.",
          es: "Un tranvía en Lisboa, una degustación en el valle del Duero — un formato compacto, fácil para dos, sin gran logística.",
        },
        href: "/destinations/europe/portugal",
      },
    ],
  },
  {
    slug: "father-son",
    category: "what",
    heroImage: `${R2}/destinations/norvege-hero.jpg`,
    title: { fr: "Voyage père-fils", en: "Father-son trip", es: "Viaje padre e hijo" },
    intro: {
      fr: "Un peu d'aventure, un peu de grand air, et le temps de vraiment se parler — sans écran, sans le reste de la famille, juste tous les deux.",
      en: "A bit of adventure, a lot of fresh air, and real time to talk — no screens, no rest of the family, just the two of you.",
      es: "Algo de aventura, mucho aire libre, y tiempo real para hablar — sin pantallas, sin el resto de la familia, solo ustedes dos.",
    },
    bestDestinations: [
      {
        key: "islande",
        image: `${R2}/destinations/islande.jpg`,
        name: { fr: "Islande", en: "Iceland", es: "Islandia" },
        blurb: {
          fr: "Une randonnée sur un glacier, une cascade après l'autre — le genre de décor qui donne envie de se taire et de simplement regarder, ensemble.",
          en: "A glacier hike, waterfall after waterfall — the kind of backdrop that makes you want to stay quiet and just look, together.",
          es: "Una caminata sobre un glaciar, una cascada tras otra — el tipo de paisaje que da ganas de callarse y simplemente mirar, juntos.",
        },
        href: "/destinations/europe/islande",
      },
      {
        key: "kenya",
        image: `${R2}/destinations/kenya.jpg`,
        name: { fr: "Kenya", en: "Kenya", es: "Kenia" },
        blurb: {
          fr: "Un safari en 4x4 à ciel ouvert, un lever de soleil sur la savane — un moment père-fils qui n'a pas besoin de mots pour compter.",
          en: "A safari in an open-top 4x4, sunrise over the savannah — a father-son moment that doesn't need words to matter.",
          es: "Un safari en 4x4 descapotable, un amanecer sobre la sabana — un momento padre e hijo que no necesita palabras para importar.",
        },
        href: "/destinations/afrique/kenya",
      },
      {
        key: "norvege",
        image: `${R2}/destinations/norvege-hero.jpg`,
        name: { fr: "Norvège", en: "Norway", es: "Noruega" },
        blurb: {
          fr: "Kayak sur un fjord au calme total, randonnée vers un point de vue qui donne le vertige — le genre d'aventure qui rapproche sans effort.",
          en: "Kayaking on a completely still fjord, a hike to a vertigo-inducing viewpoint — the kind of adventure that brings people closer without trying.",
          es: "Kayak en un fiordo en calma total, una caminata hasta un mirador que da vértigo — el tipo de aventura que acerca sin esfuerzo.",
        },
        href: "/destinations/europe/norvege",
      },
      {
        key: "turquie",
        image: `${R2}/destinations/turquie-hero.jpg`,
        name: { fr: "Turquie", en: "Turkey", es: "Turquía" },
        blurb: {
          fr: "Un vol en montgolfière au lever du jour en Cappadoce, un bazar à explorer sans plan précis — assez d'action pour ne jamais s'ennuyer.",
          en: "A sunrise balloon flight over Cappadocia, a bazaar explored with no fixed plan — enough action to never get bored.",
          es: "Un vuelo en globo al amanecer sobre Capadocia, un bazar explorado sin un plan fijo — suficiente acción para no aburrirse nunca.",
        },
        href: "/destinations/europe/turquie",
      },
    ],
  },
];

export function getFamilySubPage(slug: string) {
  return FAMILY_SUB_PAGES.find((p) => p.slug === slug);
}
