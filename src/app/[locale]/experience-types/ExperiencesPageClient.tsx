"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { type TourCardData } from "@/components/get/TourCard";
import { TripsShowcase } from "@/components/get/TripsShowcase";

type Lang = "fr" | "en" | "es";

function L(obj: Record<string, string>, lang: string) {
  return obj[lang] || obj["en"] || Object.values(obj)[0];
}

// ── WHO cards ──────────────────────────────────────────────
const WHO_CARDS = [
  {
    key: "family",
    label: { fr: "FAMILY TRAVEL", en: "FAMILY TRAVEL", es: "FAMILY TRAVEL" },
    hover: {
      fr: "Notre équipe est composée de parents voyageurs, ce qui signifie que nous savons ce qu'il faut pour s'assurer que votre nièce de 3 ans et vos grands-parents de 80 ans profitent de l'expérience autant les uns que les autres. Le voyage en famille n'a jamais été aussi serein.",
      en: "Our team is full of family travellers, meaning we know what it takes to make sure both your 3 year old niece and 80 year old grandparents enjoy the experience just as much as each other. Family travel has never been so stress free.",
      es: "Nuestro equipo está lleno de viajeros en familia, lo que significa que sabemos lo que se necesita para garantizar que tanto su sobrina de 3 años como sus abuelos de 80 disfruten de la experiencia por igual."
    },
    img: "/experiences/who-family.jpg",
    href: "/excursions?travelers=family",
  },
  {
    key: "couples",
    label: { fr: "COUPLES HOLIDAYS", en: "COUPLES HOLIDAYS", es: "COUPLES HOLIDAYS" },
    hover: {
      fr: "Conçu pour prendre en compte les désirs et les besoins de chacun de vous deux à chaque étape du voyage. Nos itinéraires pour couples sont parfaitement rythmés pour vous permettre de profiter du meilleur d'un pays tout en vous assurant de passer les moments privilégiés que vous recherchez ensemble.",
      en: "Designed to take both yours and your partners wants and needs into every step of the journey. Our couple itineraries are paced perfectly for you to enjoy the very best a country has to offer whilst making sure you enjoy the quality time together you’re after.",
      es: "Diseñado para tener en cuenta los deseos y necesidades de ambos en cada paso del viaje. Nuestros itinerarios para parejas tienen el ritmo perfecto para disfrutar de lo mejor del país."
    },
    img: "/experiences/who-couples.jpg",
    href: "/excursions?travelers=couples",
  },
  {
    key: "groups",
    label: { fr: "PRIVATE GROUP TRAVEL", en: "PRIVATE GROUP TRAVEL", es: "PRIVATE GROUP TRAVEL" },
    hover: {
      fr: "Partir ensemble est l'un des plaisirs les plus purs de la vie. C'est la partie simple. Réussir la planification, en revanche – avec tant de personnes à satisfaire et de facteurs à prendre en compte – est l'étape où vous aurez besoin d'un coup de main. Parlez aux experts.",
      en: "Going away together is one of life’s purest pleasures. That’s the uncomplicated part. Pulling off the planning, however – with so many people to please and factors to consider – is where you’re going to need a helping hand. Talk to the experts.",
      es: "Viajar juntos es uno de los placeres más puros de la vida. Esa es la parte sencilla. Sin embargo, planificarlo todo con tanta gente a la que complacer es donde necesita ayuda."
    },
    img: "/experiences/who-groups.jpg",
    href: "/excursions?travelers=groups",
  },
  {
    key: "solo",
    label: { fr: "SOLO TRAVEL", en: "SOLO TRAVEL", es: "SOLO TRAVEL" },
    hover: {
      fr: "Parfois, vous voulez partir seul – pour découvrir le monde à votre propre rythme et selon vos propres termes. Qu'il s'agisse d'une métropole ou des limites du monde connu, nous vous aiderons à voyager en solo.",
      en: "Sometimes, you want to go it alone – to experience the world at your own pace and on your own terms. Be it metropolitan or ‘edge of the known world’, we’ll help you go solo.",
      es: "A veces, quiere viajar solo: experimentar el mundo a su propio ritmo y bajo sus propios términos. Ya sea en una metrópoli o en el fin del mundo, le ayudamos."
    },
    img: "/experiences/who-solo.jpg",
    href: "/excursions?travelers=solo",
  },
  {
    key: "honeymoon",
    label: { fr: "LUXURY HONEYMOONS", en: "LUXURY HONEYMOONS", es: "LUXURY HONEYMOONS" },
    hover: {
      fr: "Nous créons des lunes de miel de rêve pour les jeunes mariés depuis des années. C'est l'un des voyages les plus gratifiants et les plus passionnants que nous aimons imaginer. En savoir plus sur les détails de notre service de lune de miel ici.",
      en: "We’ve been crafting dream honeymoons for newly married couples for years. It’s one of the most rewarding and exciting trips we love to create. Learn more about the ins and outs of our honeymoon service here.",
      es: "Llevamos años designing lunas de miel de ensueño para recién casados. Es uno de los viajes más gratificantes y elegantes que nos encanta crear."
    },
    img: "/experiences/who-honeymoon.jpg",
    href: "/excursions?travelers=honeymoon",
  },
];

// ── WHAT cards ─────────────────────────────────────────────
const WHAT_CARDS = [
  {
    key: "slow",
    label: { fr: "SLOW TRAVEL", en: "SLOW TRAVEL", es: "SLOW TRAVEL" },
    hover: {
      fr: "Le slow travel ne consiste pas seulement à prendre plus de temps. Il s'agit de se rapprocher, d'aller plus en profondeur et de s'imprégner véritablement des lieux que vous visitez.",
      en: "Slow travel isn’t just about taking longer. It’s about getting closer, going deeper, and really absorbing the places you visit.",
      es: "El viaje lento no es solo tardar más tiempo. Se trata de acercarse, profundizar y absorber verdaderamente los lugares que visita."
    },
    img: "/experiences/what-slow.jpg",
    href: "/excursions?theme=relax",
  },
  {
    key: "unusual",
    label: { fr: "UNUSUAL HOLIDAYS", en: "UNUSUAL HOLIDAYS", es: "UNUSUAL HOLIDAYS" },
    hover: {
      fr: "Le monde a beau être conquis, assez de secrets demeurent pour nous garder éveillés toute la nuit, à rêver de façons de vous emmener dans les recoins les plus uniques du globe. Le seul problème est de choisir par quelle aventure commencer…",
      en: "The world may be conquered, but enough secrets remain to keep us up all night, dreaming of ways to whisk you off to the most unique corners of the globe. The only problem is picking which adventure to embark on first…",
      es: "El mundo puede estar conquistado, pero quedan suficientes secretos para soñar con formas de llevarlo a los rincones más únicos del planeta."
    },
    img: "/experiences/what-unusual.jpg",
    href: "/excursions",
  },
  {
    key: "food",
    label: { fr: "CULINARY TRAVEL", en: "CULINARY TRAVEL", es: "CULINARY TRAVEL" },
    hover: {
      fr: "Ce sont des voyages culinaires et des escapades axées sur l'alimentation dans notre vaste (et savoureux) monde. Suivez vos goûts. Rassasiez vos sens.",
      en: "These are culinary trips and food-focused forays into our wide (and flavoursome) world. Follow your tastes. Sate your senses.",
      es: "Estos son viajes culinarios enfocados en la comida en nuestro amplio y sabroso mundo. Siga sus gustos. Satisfaga sus sentidos."
    },
    img: "/experiences/what-food.jpg",
    href: "/excursions?theme=culture",
  },
  {
    key: "safari",
    label: { fr: "AFRICAN SAFARIS", en: "AFRICAN SAFARIS", es: "AFRICAN SAFARIS" },
    hover: {
      fr: "Avec ces voyages à couper le souffle, nous avons ramené le safari à ses origines aventureuses et palpitantes. Que vous souhaitiez approcher les gorilles du Rwanda ou assister au spectacle de la Grande Migration, nous avons l'expertise nécessaire pour réaliser vos rêves de safari.",
      en: "With these breath-taking trips, we’ve brought safari back to its adventurous and thrill-seeking origins. Whether you want to trek to the gorillas of Rwanda or witness the spectacle of the Great Migration, we have the expertise to make your safari dreams come true.",
      es: "Con estos viajes impresionante, devolvemos el safari a sus orígenes aventureros. Ya sea que quiera ver gorilas en Ruanda o la Gran Migración."
    },
    img: "/experiences/what-safari.jpg",
    href: "/excursions?theme=adventure",
  },
  {
    key: "eclipse",
    label: { fr: "ECLIPSE TRAVEL", en: "ECLIPSE TRAVEL", es: "ECLIPSE TRAVEL" },
    hover: {
      fr: "Le voyage pour éclipse célèbre de manière historique le monde naturel et notre place dans le cosmos plus large. Notre équipe d'experts vous emmènera là où l'éclipse est la plus saisissante, et nous le ferons avec confort, luxe et élégance.",
      en: "Eclipse travel marks a historic celebration of the natural world and our place in the wider cosmos. Our team of experts will take you to wherever in the world the eclipse is at its most arresting, and we’ll do it in comfort, luxury, and plenty of style.",
      es: "El viaje de eclipse celebra de manera histórica el mundo natural y nuestro lugar en el cosmos. Le llevamos a donde sea más impresionante."
    },
    img: "/experiences/what-eclipse.jpg",
    href: "/excursions",
  },
  {
    key: "train",
    label: { fr: "LUXURY TRAIN TRAVEL", en: "LUXURY TRAIN TRAVEL", es: "LUXURY TRAIN TRAVEL" },
    hover: {
      fr: "Nous vous montrerons la joie de voyager à travers le monde par le rail, que vous souhaitiez admirer le mont Fuji depuis le train à grande vitesse Shinkansen du Japon ou explorer les Highlands écossais à bord du Royal Scotsman de Belmond.",
      en: "We’ll show you the joy to be found travelling across the world by rail, whether you want to admire Mount Fuji from Japan’s Shinkansen Bullet Train (we know just the seat) or explore the wild Scottish Highlands aboard Belmond’s Royal Scotsman.",
      es: "Le mostraremos la alegría de viajar por el mundo sobre rieles, ya sea admirando el Monte Fuji o explorando las Highlands escocesas."
    },
    img: "/experiences/what-train.jpg",
    href: "/excursions",
  },
  {
    key: "ranches",
    label: { fr: "LUXURY DUDE RANCHES", en: "LUXURY DUDE RANCHES", es: "LUXURY DUDE RANCHES" },
    hover: {
      fr: "Les ranchs promettent une aventure pure – faire de la randonnée dans des montagnes majestueuses et se délecter de paysages parmi les plus impressionnants du pays. Tout cela avant de se retrouver en famille pour une soirée de jeu, de musique et de détente au bar.",
      en: "Dude ranches promise pure adventure – hiking up majestic mountains, and revelling in some of the most awe-inspiring landscapes in the country. All before regrouping with your family for a night of shuffleboard, jukebox hits, and a seat at the bar.",
      es: "Los ranchos prometen aventura pura: caminar por montañas majestuosas y deleitarse con paisajes impresionantes antes de cenar en familia."
    },
    img: "/experiences/what-ranches.jpg",
    href: "/excursions",
  },
  {
    key: "proposal",
    label: { fr: "PROPOSAL SERVICE", en: "PROPOSAL SERVICE", es: "PROPOSAL SERVICE" },
    hover: {
      fr: "Vous avez trouvé l'élu(e) de votre cœur et vous souhaitez faire votre demande en mariage avec style ? Ce moment restera à jamais gravé dans votre mémoire et nous sommes là pour vous aider à en faire la demande la plus parfaite pour vous et votre bien-aimé(e).",
      en: "Found the one and want to propose in style? The moment will be a memory forever and we’re here to help you make sure it’s the most perfect of proposals for you and your loved one.",
      es: "¿Encontró a su media naranja y quiere proponerse con estilo? El momento será un recuerdo para siempre y le ayudamos a planificarlo."
    },
    img: "/experiences/what-proposal.jpg",
    href: "/excursions",
  },
];

export function ExperiencesPageClient({ tours }: { tours: TourCardData[] }) {
  const { language } = useLanguage();
  const lang = language as Lang;

  const [hoveredWho, setHoveredWho] = useState<string | null>(null);
  const [hoveredWhat, setHoveredWhat] = useState<string | null>(null);

  // Refs for drag-to-scroll functionality
  const whoTrackRef = useRef<HTMLDivElement>(null);
  const whoDrag = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false, captured: false });

  const whatTrackRef = useRef<HTMLDivElement>(null);
  const whatDrag = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false, captured: false });

  const createDragHandlers = (
    trackRef: React.RefObject<HTMLDivElement | null>,
    dragRef: React.MutableRefObject<{ active: boolean; startX: number; startScrollLeft: number; moved: boolean; captured: boolean }>
  ) => {
    const onPointerDown = (e: React.PointerEvent) => {
      const track = trackRef.current;
      if (!track) return;
      dragRef.current = { active: true, startX: e.clientX, startScrollLeft: track.scrollLeft, moved: false, captured: false };
    };

    const onPointerMove = (e: React.PointerEvent) => {
      const track = trackRef.current;
      if (!track || !dragRef.current.active) return;
      const delta = e.clientX - dragRef.current.startX;
      if (Math.abs(delta) > 4 && !dragRef.current.moved) {
        dragRef.current.moved = true;
        track.setPointerCapture(e.pointerId);
        dragRef.current.captured = true;
        track.classList.add("cursor-grabbing");
      }
      if (dragRef.current.moved) {
        track.scrollLeft = dragRef.current.startScrollLeft - delta;
      }
    };

    const onPointerUp = (e: React.PointerEvent) => {
      const track = trackRef.current;
      if (!track) return;
      dragRef.current.active = false;
      track.classList.remove("cursor-grabbing");
      if (dragRef.current.captured && track.hasPointerCapture(e.pointerId)) {
        track.releasePointerCapture(e.pointerId);
      }
      dragRef.current.captured = false;
    };

    const onClickCapture = (e: React.MouseEvent) => {
      if (dragRef.current.moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    return {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerLeave: onPointerUp,
      onClickCapture,
    };
  };

  const whoHandlers = createDragHandlers(whoTrackRef, whoDrag);
  const whatHandlers = createDragHandlers(whatTrackRef, whatDrag);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // subnav height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#2C2C2C] selection:bg-neutral-200">
      {/* Dynamic Font Injection to match Black Tomato exactly */}
      <style dangerouslySetInnerHTML={{__html: `
        @font-face {
          font-family: 'Chronicle Display';
          src: url('https://www.blacktomato.com/wp-content/themes/blacktomato/fonts/ChronicleDisplay-Roman.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Brandon Grotesque';
          src: url('https://www.blacktomato.com/wp-content/themes/blacktomato/fonts/brandon-regular-webfont.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Brandon Grotesque';
          src: url('https://www.blacktomato.com/wp-content/themes/blacktomato/fonts/brandon-medium-webfont.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Brandon Grotesque';
          src: url('https://www.blacktomato.com/wp-content/themes/blacktomato/fonts/brandon-bold-webfont.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        
        .bt-serif {
          font-family: 'Chronicle Display', Georgia, serif !important;
        }
        .bt-sans {
          font-family: 'Brandon Grotesque', Cabin, system-ui, sans-serif !important;
        }
        .bt-heading-gothic {
          font-family: var(--font-oswald), "League Gothic", "Arial Narrow", sans-serif !important;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
        }
        .section__nav .list li button {
          font-family: 'Brandon Grotesque', Cabin, system-ui, sans-serif !important;
        }
      `}} />

      {/* ══════════════ HERO SECTION ══════════════ */}
      <section className="relative h-[65vh] min-h-[460px] overflow-hidden flex items-center justify-center">
        <Image
          src="/experiences/hero.jpg"
          alt="Bhutan Mountain Guide"
          fill
          className="object-cover object-[center_35%]"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white z-10">
          <h1
            className="text-4xl sm:text-5xl lg:text-[54px] tracking-wide text-white max-w-4xl leading-tight font-light bt-serif"
          >
            {lang === "fr"
              ? "Trouvez votre voyage de luxe idéal"
              : lang === "es"
              ? "Encuentre su experiencia de viaje de lujo perfecta"
              : "Find Your Perfect Luxury Travel Experience"}
          </h1>
          <p className="mt-4 max-w-xl text-white/90 text-base font-light tracking-wide bt-sans">
            {lang === "fr"
              ? "Dites-nous comment vous voulez voyager. Nous nous occupons du reste."
              : lang === "es"
              ? "Díganos cómo quiere viajar. Nosotros nos encargamos de todo lo demás."
              : "Tell us how you want to travel. We’ll handle everything else."}
          </p>
          <div className="mt-8">
            <LocaleLink
              href="/reserver"
              className="inline-block border border-white text-white bg-transparent hover:bg-white hover:text-neutral-900 transition-colors uppercase tracking-[0.15em] text-xs font-semibold px-8 py-3.5 rounded-sm bt-sans"
            >
              {lang === "fr" ? "Commencer à planifier" : lang === "es" ? "Empezar a planificar" : "Start Planning"}
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* ══════════════ SUBNAV ══════════════ */}
      <nav className="sticky top-[72px] lg:top-[80px] z-30 bg-white border-y border-neutral-200 section__nav">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center py-4">
            <ul className="flex items-center gap-8 sm:gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-[#52575C] list">
              <li>
                <button
                  onClick={() => scrollToSection("whos-travelling")}
                  className="hover:text-black transition-colors"
                >
                  {lang === "fr" ? "Pour qui ?" : lang === "es" ? "¿Quién viaja?" : "Who's Travelling?"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("what-do-you-want-to-do")}
                  className="hover:text-black transition-colors"
                >
                  {lang === "fr" ? "Que faire ?" : lang === "es" ? "¿Qué desea hacer?" : "What do you want to do?"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-do-you-want-to-travel")}
                  className="hover:text-black transition-colors"
                >
                  {lang === "fr" ? "Comment voyager ?" : lang === "es" ? "¿Cómo desea viajar?" : "How do you want to travel?"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ══════════════ INTRO TEXT ══════════════ */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2
          className="text-2xl sm:text-[28px] text-[#2C2C2C] font-light leading-snug mb-5 bt-serif"
        >
          {lang === "fr"
            ? "Il ne s'agit pas toujours de savoir où vous voulez aller"
            : lang === "es"
            ? "No siempre se trata de saber adónde quiere ir"
            : "It's not always about where you want to go"}
        </h2>
        <p className="bt-sans text-[#52575C] text-[15px] leading-relaxed max-w-3xl mx-auto font-light">
          {lang === "fr"
            ? "Que vous planifiiez un safari en famille, une lune de miel romantique ou une aventure en solo, nos concepteurs de voyages experts créent des itinéraires entièrement personnalisés autour de vous. Pour nourrir vos envies. Suivre vos passions. Repousser vos limites. Nous sommes experts dans l'art de voyager et de connaître les lieux, ce qui fait de nous les personnes idéales pour vous aider à voyager comme vous en avez toujours rêvé."
            : lang === "es"
            ? "Ya sea que esté planeando un safari familiar, una luna de miel romántica o una aventure en solitario, nos planificadores de viajes expertos crean itinerarios completamente personalizados para usted. Para alimentar sus apetitos. Siga sus pasiones. Empuje sus límites."
            : "Whether you’re planning a family safari, romantic honeymoon, or solo adventure, our expert travel planners create fully personalised itineraries around you. To feed your appetites. Follow your passions. Push your limits. We’re experts in the art of going places and knowing places, and that makes us the perfect people to help you travel in ways you’ve always dreamed of."}
        </p>
        <div className="mt-8">
          <LocaleLink
            href="/contact"
            className="inline-block bg-[#2C2C2C] text-white hover:bg-neutral-800 transition-colors uppercase tracking-[0.15em] text-xs font-semibold px-8 py-3.5 rounded-sm bt-sans"
          >
            {lang === "fr" ? "Entrer en contact" : lang === "es" ? "Ponerse en contacto" : "Get in Touch"}
          </LocaleLink>
        </div>
      </section>

      {/* ══════════════ SECTION: WHO'S TRAVELLING ══════════════ */}
      <section id="whos-travelling" className="py-20 bg-[#FAF9F6] border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-12">
            <h2
              className="text-4xl sm:text-[44px] text-neutral-900 font-light tracking-wide bt-heading-gothic"
            >
              {lang === "fr" ? "Pas où, mais qui ?" : lang === "es" ? "No dónde, sino quién" : "Not Where, But Who?"}
            </h2>
            <div className="inline-block mt-3 border-b-2 border-[#e92679] pb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e92679] bt-sans">
                {lang === "fr" ? "POUR QUI ?" : lang === "es" ? "¿QUIÉN VIAJA?" : "WHO'S TRAVELLING?"}
              </span>
            </div>
          </header>

          <div
            ref={whoTrackRef}
            {...whoHandlers}
            className="flex gap-4 overflow-x-auto no-scrollbar pb-6 justify-start xl:justify-center cursor-grab select-none touch-pan-y"
          >
            {WHO_CARDS.map((card) => (
              <div
                key={card.key}
                className="relative flex-shrink-0 w-[220px] h-[460px] overflow-hidden cursor-pointer rounded-sm group bg-neutral-200"
                onMouseEnter={() => setHoveredWho(card.key)}
                onMouseLeave={() => setHoveredWho(null)}
              >
                <LocaleLink href={card.href} className="block w-full h-full" draggable={false}>
                  <Image
                    src={card.img}
                    alt={L(card.label, lang)}
                    fill
                    draggable={false}
                    className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/75 transition-colors duration-300 z-10" />

                  {/* Centered Title */}
                  <div className="absolute inset-0 flex items-center justify-center text-center p-4 z-20 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                    <h5
                      className="text-white text-sm font-bold tracking-[0.16em] leading-normal bt-sans uppercase"
                      style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
                    >
                      {L(card.label, lang)}
                    </h5>
                  </div>

                  {/* Hover Panel description */}
                  <AnimatePresence>
                    {hoveredWho === card.key && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 z-30 flex flex-col justify-center text-center p-5 text-white pointer-events-none"
                      >
                        <h5
                          className="text-xs font-bold tracking-[0.16em] uppercase text-white/50 mb-3 bt-sans"
                        >
                          {L(card.label, lang)}
                        </h5>
                        <p className="text-[12px] leading-relaxed text-white/95 font-light bt-sans">
                          {L(card.hover, lang)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </LocaleLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SECTION: WHAT DO YOU WANT TO DO ══════════════ */}
      <section id="what-do-you-want-to-do" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-12">
            <h2
              className="text-4xl sm:text-[44px] text-neutral-900 font-light tracking-wide bt-heading-gothic"
            >
              {lang === "fr" ? "Pas où, mais quoi ?" : lang === "es" ? "No dónde, sino qué" : "Not where, but what"}
            </h2>
            <div className="inline-block mt-3 border-b-2 border-[#e92679] pb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e92679] bt-sans">
                {lang === "fr" ? "QUE FAIRE ?" : lang === "es" ? "¿QUÉ DESEA HACER?" : "WHAT DO YOU WANT TO DO?"}
              </span>
            </div>
          </header>

          <div
            ref={whatTrackRef}
            {...whatHandlers}
            className="flex gap-4 overflow-x-auto no-scrollbar pb-6 justify-start xl:justify-center cursor-grab select-none touch-pan-y"
          >
            {WHAT_CARDS.map((card) => (
              <div
                key={card.key}
                className="relative flex-shrink-0 w-[220px] h-[460px] overflow-hidden cursor-pointer rounded-sm group bg-neutral-200"
                onMouseEnter={() => setHoveredWhat(card.key)}
                onMouseLeave={() => setHoveredWhat(null)}
              >
                <LocaleLink href={card.href} className="block w-full h-full" draggable={false}>
                  <Image
                    src={card.img}
                    alt={L(card.label, lang)}
                    fill
                    draggable={false}
                    className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/75 transition-colors duration-300 z-10" />

                  {/* Centered Title */}
                  <div className="absolute inset-0 flex items-center justify-center text-center p-4 z-20 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                    <h5
                      className="text-white text-sm font-bold tracking-[0.16em] leading-normal bt-sans uppercase"
                      style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
                    >
                      {L(card.label, lang)}
                    </h5>
                  </div>

                  {/* Hover Panel description */}
                  <AnimatePresence>
                    {hoveredWhat === card.key && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 z-30 flex flex-col justify-center text-center p-5 text-white pointer-events-none"
                      >
                        <h5
                          className="text-xs font-bold tracking-[0.16em] uppercase text-white/50 mb-3 bt-sans"
                        >
                          {L(card.label, lang)}
                        </h5>
                        <p className="text-[12px] leading-relaxed text-white/95 font-light bt-sans">
                          {L(card.hover, lang)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </LocaleLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SECTION: HOW DO YOU WANT TO TRAVEL ══════════════ */}
      <section id="how-do-you-want-to-travel" className="bg-[#1C1F22]">
        <TripsShowcase
          heading={
            lang === "fr" ? "Pas où, mais comment ?" : lang === "es" ? "No dónde, sino cómo" : "Not where, but how?"
          }
          blurb={
            lang === "fr"
              ? "Parcourez nos expériences de voyage phares, ou cliquez ci-dessous pour utiliser notre Trip Finder pour trouver exactement ce que vous recherchez."
              : lang === "es"
              ? "Explore nuestras experiencias de viaje exclusivas, o haga clic a continuación para usar nuestro buscador de viajes."
              : "Browse our signature travel experiences, or click below to use our Trip Finder to find exactly what you’re looking for."
          }
          tours={tours}
        />
      </section>

      {/* ══════════════ CTA BAR ══════════════ */}
      <section className="bg-[#1D5E91] py-14 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2
            className="text-2xl sm:text-[28px] text-white font-light tracking-wide bt-serif"
          >
            {lang === "fr" ? "Prêt à commencer ?" : lang === "es" ? "¿Listo para comenzar?" : "Ready to start?"}
          </h2>
          <LocaleLink
            href="/reserver"
            className="inline-block bg-white text-neutral-900 hover:bg-neutral-100 transition-colors uppercase tracking-[0.15em] text-xs font-semibold px-8 py-3.5 rounded-sm bt-sans"
          >
            {lang === "fr" ? "Commencer à planifier" : lang === "es" ? "Empezar a planificar" : "Start Planning"}
          </LocaleLink>
        </div>
      </section>
    </div>
  );
}
