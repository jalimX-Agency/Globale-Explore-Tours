// The Andes — 13 journey-format trips: Peru (3), Bolivia (3), Ecuador (2), Colombia (2) and Chile (3),
// all existing destinations. Near-identical supplier programmes (yearly editions, private versions,
// Amazon, Nasca, Galápagos, Cartagena, Chiloé and Easter Island extensions) are grouped on one page and
// described inside each trip. Prices are per-person "from" prices. Supplier product ids are kept in
// SUPPLIER_REF. Run with:
//   npx tsx scripts/seed-trips-andes-circuits.ts
// Requires scripts/upload-images-and-circuits.ts to have been run first.

process.loadEnvFile(".env");

import type { L3 } from "./lib/circuitBuilders";

export const SUPPLIER_REF: Record<string, string[]> = {
  "perou-incontournables-du-perou-titicaca-machu-picchu-11j": ["329218", "123998", "172878", "387398"],
  "perou-hola-perou-nasca-arequipa-machu-picchu-11j": ["407040", "407041"],
  "perou-impressions-du-perou-colca-titicaca-cuzco-14j": ["406158", "406518", "406498", "406519", "408398", "408418"],
  "bolivie-cap-sur-la-bolivie-sucre-uyuni-titicaca-15j": ["411459"],
  "bolivie-couleurs-du-perou-et-de-la-bolivie-17j": ["398478"],
  "bolivie-perles-des-andes-chili-bolivie-perou-17j": ["309418"],
  "equateur-decouverte-de-l-equateur-amazonie-cuenca-13j": ["396418", "300558", "396458", "300560"],
  "equateur-tresors-de-l-equateur-et-des-galapagos-13j": ["401878"],
  "colombie-cap-sur-la-colombie-medellin-carthagene-10j": ["410738", "411438", "411418"],
  "colombie-couleurs-de-colombie-salento-guatape-11j": ["399278", "291320", "398458", "398459", "294658", "296398"],
  "chili-couleurs-du-chili-patagonie-atacama-13j": ["409058", "399519", "409098", "399539", "409078", "399538", "409118", "399558"],
  "chili-merveilles-du-chili-atacama-ile-de-paques-12j": ["383299", "124938"],
  "chili-merveilles-du-chili-patagonie-ile-de-paques-15j": ["404718"],
};

const T_HOME: L3 = ["Arrivée en France", "Arrival in France", "Llegada a Francia"];
const HOME: L3 = ["Arrivée en France dans la journée.", "Arrival in France during the day.", "Llegada a Francia durante el día."];
const arr = (city: L3): [L3, L3] => [
  [`Arrivée à ${city[0]}`, `Arrival in ${city[1]}`, `Llegada a ${city[2]}`],
  [`Envol pour ${city[0]}, accueil et transfert à l'hôtel.`, `Flight to ${city[1]}, welcome and transfer to the hotel.`, `Vuelo a ${city[2]}, recibimiento y traslado al hotel.`],
];
const dep = (city: L3): [L3, L3] => [
  [`${city[0]} – vol retour`, `${city[1]} – flight home`, `${city[2]} – vuelo de regreso`],
  ["Temps libre selon l'horaire du vol, puis transfert à l'aéroport et envol pour la France.", "Free time depending on your flight, then transfer to the airport and fly to France.", "Tiempo libre según el horario del vuelo, traslado al aeropuerto y vuelo a Francia."],
];
const join = (a: L3, b: L3): L3 => [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`, `${a[2]} ${b[2]}`];
const LIM: L3 = ["Lima", "Lima", "Lima"];
const SCL: L3 = ["Santiago du Chili", "Santiago de Chile", "Santiago de Chile"];
const UIO: L3 = ["Quito", "Quito", "Quito"];
const BOG: L3 = ["Bogotá", "Bogotá", "Bogotá"];
const CTG: L3 = ["Carthagène", "Cartagena", "Cartagena"];

// Peru / Bolivia shared texts
const X_AREQ: L3 = ["Arequipa, la ville blanche bâtie en pierre volcanique au pied du Misti, et le couvent de Santa Catalina, ville dans la ville aux murs bleus et ocre.", "Arequipa, the white city built of volcanic stone at the foot of El Misti, and the Santa Catalina convent, a city within the city with blue and ochre walls.", "Arequipa, la ciudad blanca construida en piedra volcánica al pie del Misti, y el convento de Santa Catalina, ciudad dentro de la ciudad de muros azules y ocres."];
const X_SILLU: L3 = ["L'altiplano et ses lagunes peuplées de flamants, les tours funéraires de Sillustani, puis Puno au bord du lac Titicaca.", "The altiplano and its flamingo lagoons, the burial towers of Sillustani, then Puno on Lake Titicaca.", "El altiplano y sus lagunas pobladas de flamencos, las torres funerarias de Sillustani, y Puno a orillas del lago Titicaca."];
const X_TITI: L3 = ["Le lac Titicaca, plus haut lac navigable du monde : les îles flottantes des Uros faites de roseaux, puis une nuit chez l'habitant dans la communauté de Luquina.", "Lake Titicaca, the highest navigable lake in the world: the floating reed islands of the Uros, then a night with a family in the Luquina community.", "El lago Titicaca, el lago navegable más alto del mundo: las islas flotantes de los uros hechas de totora, y una noche con una familia en la comunidad de Luquina."];
const X_CUZCO: L3 = ["Cuzco, ancienne capitale de l'Empire inca : la place d'Armes, le Coricancha, temple du Soleil devenu couvent, et la forteresse de Sacsayhuamán.", "Cuzco, former capital of the Inca Empire: the Plaza de Armas, the Coricancha, temple of the Sun turned convent, and the fortress of Sacsayhuamán.", "Cuzco, antigua capital del Imperio inca: la plaza de Armas, el Coricancha, templo del Sol convertido en convento, y la fortaleza de Sacsayhuamán."];
const X_SACRED: L3 = ["La Vallée sacrée des Incas, le marché de Pisac et la forteresse d'Ollantaytambo, puis le train vers Aguas Calientes.", "The Sacred Valley of the Incas, the Pisac market and the Ollantaytambo fortress, then the train to Aguas Calientes.", "El Valle Sagrado de los incas, el mercado de Pisac y la fortaleza de Ollantaytambo, y el tren hacia Aguas Calientes."];
const X_MACHU: L3 = ["Le Machu Picchu, cité inca perchée entre les pics, découvert au petit matin, puis retour dans la Vallée sacrée.", "Machu Picchu, the Inca city perched between the peaks, discovered in the early morning, then back to the Sacred Valley.", "El Machu Picchu, ciudad inca encaramada entre los picos, descubierta por la mañana temprano, y regreso al Valle Sagrado."];
const X_UYUNI: L3 = ["Le salar d'Uyuni, plus grand désert de sel du monde, l'île Incahuasi et ses cactus géants, et le cimetière de trains.", "The Uyuni salt flat, the largest in the world, Incahuasi island and its giant cacti, and the train cemetery.", "El salar de Uyuni, el mayor desierto de sal del mundo, la isla Incahuasi y sus cactus gigantes, y el cementerio de trenes."];
const X_SUCRE: L3 = ["Sucre, la ville blanche, capitale constitutionnelle de la Bolivie, ses églises et ses maisons coloniales.", "Sucre, the white city, constitutional capital of Bolivia, its churches and colonial houses.", "Sucre, la ciudad blanca, capital constitucional de Bolivia, sus iglesias y sus casas coloniales."];
const X_POTOSI: L3 = ["Potosí et son Cerro Rico, la montagne d'argent qui fit la fortune de l'Espagne, puis la route vers Uyuni.", "Potosí and its Cerro Rico, the silver mountain that made Spain's fortune, then the road to Uyuni.", "Potosí y su Cerro Rico, la montaña de plata que hizo la fortuna de España, y la carretera hacia Uyuni."];
const X_LAPAZ: L3 = ["La Paz, capitale la plus haute du monde, ses téléphériques, son marché des sorcières et la vallée de la Lune.", "La Paz, the highest capital in the world, its cable cars, its witches' market and the Valley of the Moon.", "La Paz, la capital más alta del mundo, sus teleféricos, su mercado de las brujas y el valle de la Luna."];
const X_SOLEIL: L3 = ["Copacabana et l'île du Soleil sur le lac Titicaca, berceau mythique des Incas, et l'île de la Lune.", "Copacabana and the Island of the Sun on Lake Titicaca, mythical birthplace of the Incas, and the Island of the Moon.", "Copacabana y la isla del Sol en el lago Titicaca, cuna mítica de los incas, y la isla de la Luna."];
// Chile shared texts
const X_ATACAMA: L3 = ["San Pedro de Atacama, le désert le plus aride du monde, et la vallée de la Lune au coucher du soleil.", "San Pedro de Atacama, the driest desert in the world, and the Valley of the Moon at sunset.", "San Pedro de Atacama, el desierto más árido del mundo, y el valle de la Luna al atardecer."];
const X_LAGUNAS: L3 = ["Les lagunes altiplaniques Miscanti et Miñiques à plus de 4 000 mètres, et les flamants du salar d'Atacama.", "The altiplano lagoons of Miscanti and Miñiques above 4,000 metres, and the flamingos of the Atacama salt flat.", "Las lagunas altiplánicas Miscanti y Miñiques a más de 4.000 metros, y los flamencos del salar de Atacama."];
const X_TATIO: L3 = ["Les geysers du Tatio à l'aube, puis les villages andins de Machuca.", "The Tatio geysers at dawn, then the Andean villages of Machuca.", "Los géiseres del Tatio al amanecer, y los pueblos andinos de Machuca."];
const X_VALPO: L3 = ["Valparaíso, port aux maisons colorées accrochées aux collines, ses funiculaires et ses fresques.", "Valparaíso, a port of colourful houses clinging to the hills, its funiculars and murals.", "Valparaíso, puerto de casas de colores colgadas de las colinas, sus funiculares y sus murales."];
const X_SCL: L3 = ["Santiago, la place d'Armes, le palais de la Moneda et le mont San Cristóbal face aux Andes.", "Santiago, the Plaza de Armas, La Moneda palace and San Cristóbal hill facing the Andes.", "Santiago, la plaza de Armas, el palacio de La Moneda y el cerro San Cristóbal frente a los Andes."];
const X_PAINE: L3 = ["Le parc de Torres del Paine, ses tours de granit, ses lacs turquoise, ses glaciers et ses guanacos.", "Torres del Paine park, its granite towers, turquoise lakes, glaciers and guanacos.", "El parque de Torres del Paine, sus torres de granito, sus lagos turquesa, sus glaciares y sus guanacos."];
const X_RAPA1: L3 = ["L'île de Pâques : la carrière de Rano Raraku où furent taillés les moaï, les quinze statues d'Ahu Tongariki et la plage d'Anakena.", "Easter Island: the Rano Raraku quarry where the moai were carved, the fifteen statues of Ahu Tongariki and Anakena beach.", "La isla de Pascua: la cantera de Rano Raraku donde se tallaron los moái, las quince estatuas de Ahu Tongariki y la playa de Anakena."];
const X_RAPA2: L3 = ["Le village cérémoniel d'Orongo au bord du cratère Rano Kau, les sept moaï d'Ahu Akivi tournés vers la mer et le coucher du soleil à Tahai.", "The ceremonial village of Orongo on the rim of Rano Kau crater, the seven moai of Ahu Akivi facing the sea and the sunset at Tahai.", "La aldea ceremonial de Orongo al borde del cráter Rano Kau, los siete moái de Ahu Akivi mirando al mar y la puesta de sol en Tahai."];
// Ecuador / Colombia
const X_QUITO: L3 = ["Quito, sa vieille ville classée par l'Unesco, ses églises baroques dorées et la colline du Panecillo.", "Quito, its UNESCO-listed old town, its gilded baroque churches and the Panecillo hill.", "Quito, su casco antiguo declarado por la Unesco, sus iglesias barrocas doradas y la colina del Panecillo."];
const X_OTAVALO: L3 = ["La lagune de cratère de Cuicocha, Cotacachi et le grand marché indigène d'Otavalo.", "The Cuicocha crater lagoon, Cotacachi and the great indigenous market of Otavalo.", "La laguna de cráter de Cuicocha, Cotacachi y el gran mercado indígena de Otavalo."];
const X_BANOS: L3 = ["Puyo et la route des cascades jusqu'à Baños, au pied du volcan Tungurahua, et le chaudron du Diable.", "Puyo and the waterfall road to Baños, at the foot of Tungurahua volcano, and the Devil's Cauldron.", "Puyo y la ruta de las cascadas hasta Baños, al pie del volcán Tungurahua, y el Pailón del Diablo."];
const X_INGA: L3 = ["Ingapirca, principal site inca d'Équateur, puis Cuenca, ville coloniale aux dômes bleus.", "Ingapirca, Ecuador's main Inca site, then Cuenca, a colonial town of blue domes.", "Ingapirca, principal sitio inca de Ecuador, y Cuenca, ciudad colonial de cúpulas azules."];
const X_AMAZ: L3 = ["La forêt amazonienne en lodge : pirogue sur la rivière, randonnée dans la jungle et rencontre avec une communauté kichwa.", "The Amazon forest from a lodge: a dugout canoe on the river, a jungle walk and a meeting with a Kichwa community.", "La selva amazónica en un lodge: piragua por el río, caminata por la selva y encuentro con una comunidad kichwa."];
const X_CTG: L3 = ["Carthagène des Indes, sa vieille ville fortifiée, ses balcons fleuris, le quartier de Getsemaní et le fort San Felipe.", "Cartagena de Indias, its walled old town, its flower-decked balconies, the Getsemaní district and the San Felipe fortress.", "Cartagena de Indias, su ciudad vieja amurallada, sus balcones floridos, el barrio de Getsemaní y el castillo de San Felipe."];
const X_MED: L3 = ["Medellín, la ville de l'éternel printemps, ses métrocâbles, la Comuna 13 et ses fresques, et la place Botero.", "Medellín, the city of eternal spring, its metro cable cars, Comuna 13 and its murals, and Botero square.", "Medellín, la ciudad de la eterna primavera, sus metrocables, la Comuna 13 y sus murales, y la plaza Botero."];
const X_GUATAPE: L3 = ["Guatapé, son village aux soubassements peints et le rocher d'El Peñol, 740 marches au-dessus des lacs.", "Guatapé, its village of painted façades and the El Peñol rock, 740 steps above the lakes.", "Guatapé, su pueblo de zócalos pintados y la piedra de El Peñol, 740 escalones sobre los lagos."];

async function main() {
  const { circuitBuilders } = await import("./lib/circuitBuilders");
  const DRY = { label: ["Mai à octobre", "May to October", "Mayo a octubre"] as L3, months: "may,june,july,august,september,october" };
  const pe = circuitBuilders({ destinationSlug: "perou", imagePrefix: "and", season: DRY });
  const bo = circuitBuilders({ destinationSlug: "bolivie", imagePrefix: "and", season: DRY });
  const ec = circuitBuilders({ destinationSlug: "equateur", imagePrefix: "and", season: { label: ["Juin à septembre", "June to September", "Junio a septiembre"], months: "june,july,august,september" } });
  const co = circuitBuilders({ destinationSlug: "colombie", imagePrefix: "and", season: { label: ["Décembre à mars", "December to March", "Diciembre a marzo"], months: "december,january,february,march" } });
  const cl = circuitBuilders({ destinationSlug: "chili", imagePrefix: "and", season: { label: ["Octobre à avril", "October to April", "Octubre a abril"], months: "october,november,december,january,february,march,april" } });
  const INC = (n: number, max: number, extra = ""): L3 => [
    `Vols depuis la France,Transferts aéroport,${n} nuits en hôtels et lodges,Transport en minibus ou autocar,Visites et entrées du programme,Guide francophone,Groupe de ${max} personnes au plus${extra}`,
    `Flights from France,Airport transfers,${n} nights in hotels and lodges,Transport by minibus or coach,Visits and entry fees in the programme,French-speaking guide,Group of ${max} at most${extra}`,
    `Vuelos desde Francia,Traslados al aeropuerto,${n} noches en hoteles y lodges,Transporte en minibús o autocar,Visitas y entradas del programa,Guía francófono,Grupo de ${max} personas como máximo${extra}`,
  ];
  const homeFromLima = (b: typeof pe, n: number, img: string) => b.day(n, ["Cuzco – Lima – vol retour", "Cuzco – Lima – flight home", "Cuzco – Lima – vuelo de regreso"], ["Vol vers Lima et envol pour la France.", "Flight to Lima and fly to France.", "Vuelo a Lima y vuelo a Francia."], img);

  const journeyTrips = [
    // ═════════════ PÉROU ═════════════
    pe.trip({
      slug: "perou-incontournables-du-perou-titicaca-machu-picchu-11j",
      name: ["Les incontournables du Pérou : Arequipa, le lac Titicaca, Cuzco et le Machu Picchu", "Highlights of Peru: Arequipa, Lake Titicaca, Cuzco and Machu Picchu", "Lo esencial del Perú: Arequipa, el lago Titicaca, Cuzco y Machu Picchu"],
      tagline: ["Une nuit chez l'habitant sur le Titicaca et une nuit sous tente dans la Vallée sacrée", "A night with a family on Lake Titicaca and a night in a tent in the Sacred Valley", "Una noche con una familia en el Titicaca y una noche en tienda en el Valle Sagrado"],
      description: [
        "Le Pérou essentiel en groupe de 20 personnes au plus : Lima, deux nuits à Arequipa pour s'habituer à l'altitude, Sillustani, le lac Titicaca et une nuit chez l'habitant à Luquina, Cuzco, la Vallée sacrée, le Machu Picchu et une nuit en tente haut de gamme face aux montagnes. Version I love Pérou à partir de 2 779 €, en privatif à partir de 4 626 €, ou prolongé en Amazonie (14 jours) à partir de 4 229 € par personne.",
        "Essential Peru in a group of 20 at most: Lima, two nights in Arequipa to adjust to the altitude, Sillustani, Lake Titicaca and a night with a family in Luquina, Cuzco, the Sacred Valley, Machu Picchu and a night in a luxury tent facing the mountains. I love Peru version from €2,779, private version from €4,626, or extended into the Amazon (14 days) from €4,229 per person.",
        "Lo esencial del Perú en grupo de 20 personas como máximo: Lima, dos noches en Arequipa para aclimatarse a la altitud, Sillustani, el lago Titicaca y una noche con una familia en Luquina, Cuzco, el Valle Sagrado, Machu Picchu y una noche en tienda de lujo frente a las montañas. Versión I love Perú desde 2.779 €, en privado desde 4.626 €, o prolongado en la Amazonía (14 días) desde 4.229 € por persona.",
      ],
      includes: INC(9, 20, ",Train Ollantaytambo – Aguas Calientes"),
      price: 2779, nights: 9, departureFrom: "Paris", image: "ip1",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,family,groups", maxGuests: 20, order: -49000,
      chapters: [
        pe.chapter(["Arequipa et le lac Titicaca", "Arequipa and Lake Titicaca", "Arequipa y el lago Titicaca"], ["La ville blanche et l'altiplano.", "The white city and the altiplano.", "La ciudad blanca y el altiplano."],
          ["mp5", "ip5", "ip2"],
          [
            pe.day(1, ...arr(LIM), "ip6"),
            pe.day(2, ["Lima – Arequipa", "Lima – Arequipa", "Lima – Arequipa"], ["Vol vers Arequipa, à 2 360 mètres.", "Flight to Arequipa, at 2,360 metres.", "Vuelo a Arequipa, a 2.360 metros."], "mp6"),
            pe.day(3, ["Arequipa", "Arequipa", "Arequipa"], X_AREQ, "mp5"),
            pe.day(4, ["Sillustani – Puno", "Sillustani – Puno", "Sillustani – Puno"], X_SILLU, "ip2"),
            pe.day(5, ["Lac Titicaca – Luquina", "Lake Titicaca – Luquina", "Lago Titicaca – Luquina"], X_TITI, "ip5"),
          ]),
        pe.chapter(["Cuzco et le Machu Picchu", "Cuzco and Machu Picchu", "Cuzco y Machu Picchu"], ["Au cœur de l'Empire inca.", "At the heart of the Inca Empire.", "En el corazón del Imperio inca."],
          ["ip1", "ip4", "ip3", "ip8"],
          [
            pe.day(6, ["Luquina – Cuzco", "Luquina – Cuzco", "Luquina – Cuzco"], ["La route de l'altiplano jusqu'à Cuzco.", "The altiplano road to Cuzco.", "La carretera del altiplano hasta Cuzco."], "ip4"),
            pe.day(7, ["Vallée sacrée – Aguas Calientes", "Sacred Valley – Aguas Calientes", "Valle Sagrado – Aguas Calientes"], X_SACRED, "ip3"),
            pe.day(8, ["Machu Picchu", "Machu Picchu", "Machu Picchu"], [`${X_MACHU[0]} Nuit en tente haut de gamme.`, `${X_MACHU[1]} A night in a luxury tent.`, `${X_MACHU[2]} Noche en tienda de lujo.`], "ip1"),
            pe.day(9, ["Vallée sacrée – Cuzco", "Sacred Valley – Cuzco", "Valle Sagrado – Cuzco"], X_CUZCO, "ip4"),
            homeFromLima(pe, 10, "ip6"), pe.day(11, T_HOME, HOME, "ip8"),
          ]),
      ],
    }),

    pe.trip({
      slug: "perou-hola-perou-nasca-arequipa-machu-picchu-11j",
      name: ["Hola Pérou : Paracas, Nasca, Arequipa, le Titicaca et le Machu Picchu", "Hola Peru: Paracas, Nasca, Arequipa, Titicaca and Machu Picchu", "Hola Perú: Paracas, Nasca, Arequipa, el Titicaca y Machu Picchu"],
      tagline: ["Par la route du désert côtier, des lignes de Nasca aux Andes", "By the coastal desert road, from the Nasca lines to the Andes", "Por la carretera del desierto costero, de las líneas de Nasca a los Andes"],
      description: [
        "Le Pérou par la route en groupe de 20 personnes au plus : Lima, Paracas et les oasis d'Ica, les lignes de Nasca, Arequipa, Sillustani et le lac Titicaca, Raqchi et l'église d'Andahuaylillas, la Vallée sacrée et le marché de Pisac, le Machu Picchu et Cuzco. Prolongé en Amazonie (14 jours) à partir de 3 811 € par personne.",
        "Peru by road in a group of 20 at most: Lima, Paracas and the oases of Ica, the Nasca lines, Arequipa, Sillustani and Lake Titicaca, Raqchi and the Andahuaylillas church, the Sacred Valley and the Pisac market, Machu Picchu and Cuzco. Extended into the Amazon (14 days) from €3,811 per person.",
        "El Perú por carretera en grupo de 20 personas como máximo: Lima, Paracas y los oasis de Ica, las líneas de Nasca, Arequipa, Sillustani y el lago Titicaca, Raqchi y la iglesia de Andahuaylillas, el Valle Sagrado y el mercado de Pisac, Machu Picchu y Cuzco. Prolongado en la Amazonía (14 días) desde 3.811 € por persona.",
      ],
      includes: INC(9, 20, ",Train Ollantaytambo – Aguas Calientes"),
      price: 3052, nights: 9, departureFrom: "Toulouse", image: "mp4",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 20, order: -48999,
      chapters: [
        pe.chapter(["La côte et Arequipa", "The coast and Arequipa", "La costa y Arequipa"], ["Désert, lignes et ville blanche.", "Desert, lines and the white city.", "Desierto, líneas y ciudad blanca."],
          ["ip6", "mp5", "mp6"],
          [
            pe.day(1, ...arr(LIM), "ip6"),
            pe.day(2, ["Paracas – Ica – Nasca", "Paracas – Ica – Nasca", "Paracas – Ica – Nasca"], ["La réserve de Paracas et ses îles Ballestas, peuplées d'otaries et de manchots, l'oasis de Huacachina près d'Ica, puis Nasca et ses géoglyphes géants.", "The Paracas reserve and its Ballestas islands, home to sea lions and penguins, the Huacachina oasis near Ica, then Nasca and its giant geoglyphs.", "La reserva de Paracas y sus islas Ballestas, pobladas de lobos marinos y pingüinos, el oasis de Huacachina cerca de Ica, y Nasca y sus geoglifos gigantes."], "mp3"),
            pe.day(3, ["Nasca – Arequipa", "Nasca – Arequipa", "Nasca – Arequipa"], ["La route côtière du Pacifique puis la montée vers Arequipa.", "The Pacific coast road, then the climb to Arequipa.", "La carretera costera del Pacífico y la subida hacia Arequipa."], "mp6"),
            pe.day(4, ["Arequipa", "Arequipa", "Arequipa"], X_AREQ, "mp5"),
          ]),
        pe.chapter(["Le Titicaca et Cuzco", "Titicaca and Cuzco", "El Titicaca y Cuzco"], ["L'altiplano et la Vallée sacrée.", "The altiplano and the Sacred Valley.", "El altiplano y el Valle Sagrado."],
          ["ip5", "mp2", "mp4", "ip4"],
          [
            pe.day(5, ["Sillustani – Puno", "Sillustani – Puno", "Sillustani – Puno"], X_SILLU, "ip2"),
            pe.day(6, ["Lac Titicaca", "Lake Titicaca", "Lago Titicaca"], ["Les îles flottantes des Uros et l'île de Taquile, sur le lac Titicaca.", "The floating islands of the Uros and Taquile island, on Lake Titicaca.", "Las islas flotantes de los uros y la isla de Taquile, en el lago Titicaca."], "ip5"),
            pe.day(7, ["Raqchi – Andahuaylillas – Cuzco", "Raqchi – Andahuaylillas – Cuzco", "Raqchi – Andahuaylillas – Cuzco"], ["La route des Andes par le col de La Raya, le temple inca de Raqchi et l'église d'Andahuaylillas, « chapelle Sixtine des Andes ».", "The Andes road over La Raya pass, the Inca temple of Raqchi and the Andahuaylillas church, the 'Sistine Chapel of the Andes'.", "La carretera de los Andes por el paso de La Raya, el templo inca de Raqchi y la iglesia de Andahuaylillas, «capilla Sixtina de los Andes»."], "mp2"),
            pe.day(8, ["Pisac – Aguas Calientes", "Pisac – Aguas Calientes", "Pisac – Aguas Calientes"], X_SACRED, "ip3"),
            pe.day(9, ["Machu Picchu – Cuzco", "Machu Picchu – Cuzco", "Machu Picchu – Cuzco"], ["Le Machu Picchu au petit matin, puis retour à Cuzco.", "Machu Picchu in the early morning, then back to Cuzco.", "Machu Picchu por la mañana temprano, y regreso a Cuzco."], "mp4"),
            homeFromLima(pe, 10, "ip4"), pe.day(11, T_HOME, HOME, "mp4"),
          ]),
      ],
    }),

    pe.trip({
      slug: "perou-impressions-du-perou-colca-titicaca-cuzco-14j",
      name: ["Impressions du Pérou : Arequipa, le canyon de Colca, le Titicaca, Cuzco et le Machu Picchu", "Impressions of Peru: Arequipa, the Colca Canyon, Titicaca, Cuzco and Machu Picchu", "Impresiones del Perú: Arequipa, el cañón del Colca, el Titicaca, Cuzco y Machu Picchu"],
      tagline: ["Le vol du condor, une nuit sur le Titicaca et trois jours à Cuzco", "The condor's flight, a night on Titicaca and three days in Cuzco", "El vuelo del cóndor, una noche en el Titicaca y tres días en Cuzco"],
      description: [
        "Le Pérou en profondeur en groupe de 18 personnes au plus : Arequipa, le canyon de Colca et le vol des condors, Puno et une nuit chez l'habitant à Luquina sur le lac Titicaca, Pisac et la Vallée sacrée, le Machu Picchu, puis trois jours à Cuzco. Variantes : avec l'Amazonie (17 jours) à partir de 3 823 €, avec Nasca à partir de 3 874 €, Nasca et Amazonie (20 jours) à partir de 4 614 €, ou une croisière en Amazonie (19 jours) à partir de 5 317 € par personne.",
        "Peru in depth in a group of 18 at most: Arequipa, the Colca Canyon and the flight of the condors, Puno and a night with a family in Luquina on Lake Titicaca, Pisac and the Sacred Valley, Machu Picchu, then three days in Cuzco. Variants: with the Amazon (17 days) from €3,823, with Nasca from €3,874, Nasca and the Amazon (20 days) from €4,614, or an Amazon cruise (19 days) from €5,317 per person.",
        "El Perú en profundidad en grupo de 18 personas como máximo: Arequipa, el cañón del Colca y el vuelo de los cóndores, Puno y una noche con una familia en Luquina en el lago Titicaca, Pisac y el Valle Sagrado, Machu Picchu, y tres días en Cuzco. Variantes: con la Amazonía (17 días) desde 3.823 €, con Nasca desde 3.874 €, Nasca y Amazonía (20 días) desde 4.614 €, o un crucero por la Amazonía (19 días) desde 5.317 € por persona.",
      ],
      includes: INC(12, 18, ",Train Ollantaytambo – Aguas Calientes"),
      price: 3083, nights: 12, departureFrom: "Lyon", image: "mp3",
      theme: "culture", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -48998,
      chapters: [
        pe.chapter(["Arequipa et Colca", "Arequipa and Colca", "Arequipa y el Colca"], ["La ville blanche et les condors.", "The white city and the condors.", "La ciudad blanca y los cóndores."],
          ["mp5", "mp3", "mp6"],
          [
            pe.day(1, ...arr(LIM), "ip6"),
            pe.day(2, ["Lima – Arequipa", "Lima – Arequipa", "Lima – Arequipa"], ["Vol vers Arequipa.", "Flight to Arequipa.", "Vuelo a Arequipa."], "mp6"),
            pe.day(3, ["Arequipa", "Arequipa", "Arequipa"], X_AREQ, "mp5"),
            pe.day(4, ["Arequipa – Colca", "Arequipa – Colca", "Arequipa – Colca"], ["La réserve de Pampa Cañahuas et ses vigognes, puis le canyon de Colca, deux fois plus profond que le Grand Canyon, et ses sources chaudes.", "The Pampa Cañahuas reserve and its vicuñas, then the Colca Canyon, twice as deep as the Grand Canyon, and its hot springs.", "La reserva de Pampa Cañahuas y sus vicuñas, y el cañón del Colca, dos veces más profundo que el Gran Cañón, y sus aguas termales."], "mp3"),
            pe.day(5, ["Croix du Condor – Puno", "Cruz del Cóndor – Puno", "Cruz del Cóndor – Puno"], ["Le belvédère de la Croix du Condor, où planent les grands rapaces, puis la traversée de l'altiplano jusqu'à Puno.", "The Cruz del Cóndor viewpoint, where the great birds soar, then across the altiplano to Puno.", "El mirador de la Cruz del Cóndor, donde planean las grandes aves, y la travesía del altiplano hasta Puno."], "ip2"),
          ]),
        pe.chapter(["Le Titicaca et la Vallée sacrée", "Titicaca and the Sacred Valley", "El Titicaca y el Valle Sagrado"], ["Îles, villages et Machu Picchu.", "Islands, villages and Machu Picchu.", "Islas, pueblos y Machu Picchu."],
          ["ip5", "mp2", "mp1"],
          [
            pe.day(6, ["Lac Titicaca – Luquina", "Lake Titicaca – Luquina", "Lago Titicaca – Luquina"], X_TITI, "ip5"),
            pe.day(7, ["Luquina – Cuzco", "Luquina – Cuzco", "Luquina – Cuzco"], ["La route de l'altiplano jusqu'à Cuzco.", "The altiplano road to Cuzco.", "La carretera del altiplano hasta Cuzco."], "mp2"),
            pe.day(8, ["Pisac – Aguas Calientes", "Pisac – Aguas Calientes", "Pisac – Aguas Calientes"], X_SACRED, "ip3"),
            pe.day(9, ["Machu Picchu", "Machu Picchu", "Machu Picchu"], X_MACHU, "mp1"),
          ]),
        pe.chapter(["Cuzco", "Cuzco", "Cuzco"], ["La capitale inca.", "The Inca capital.", "La capital inca."],
          ["ip4", "ip8"],
          [
            pe.day(10, ["Vallée sacrée – Cuzco", "Sacred Valley – Cuzco", "Valle Sagrado – Cuzco"], ["Les terrasses de Moray et les salines de Maras, puis Cuzco.", "The Moray terraces and the Maras salt pans, then Cuzco.", "Las terrazas de Moray y las salineras de Maras, y Cuzco."], "ip8"),
            pe.day(11, ["Cuzco", "Cuzco", "Cuzco"], X_CUZCO, "ip4"),
            pe.day(12, ["Cuzco", "Cuzco", "Cuzco"], ["Journée libre : la montagne aux Sept Couleurs en option, ou les marchés et musées de la ville.", "A free day: the Rainbow Mountain as an option, or the city's markets and museums.", "Día libre: la montaña de Siete Colores opcional, o los mercados y museos de la ciudad."], "ip4"),
            homeFromLima(pe, 13, "ip6"), pe.day(14, T_HOME, HOME, "mp3"),
          ]),
      ],
    }),

    // ═════════════ BOLIVIE ═════════════
    bo.trip({
      slug: "bolivie-cap-sur-la-bolivie-sucre-uyuni-titicaca-15j",
      name: ["Cap sur la Bolivie : Sucre, Potosí, le Sud Lípez, le salar d'Uyuni et le Titicaca", "Heading for Bolivia: Sucre, Potosí, Sud Lípez, the Uyuni salt flat and Titicaca", "Rumbo a Bolivia: Sucre, Potosí, el Sud Lípez, el salar de Uyuni y el Titicaca"],
      tagline: ["Les lagunes colorées et le désert de sel, en groupe de 12 au plus", "Colourful lagoons and the salt desert, in a group of 12 at most", "Lagunas de colores y desierto de sal, en grupo de 12 como máximo"],
      description: [
        "La Bolivie complète en petit groupe : Santa Cruz, deux jours à Sucre, Potosí, trois jours en 4x4 dans le Sud Lípez entre lagunes rouges et vertes, geysers et flamants, le salar d'Uyuni, La Paz, l'île du Soleil sur le lac Titicaca, et la vallée tropicale de Coroico dans les Yungas.",
        "Bolivia in full in a small group: Santa Cruz, two days in Sucre, Potosí, three days by 4x4 in Sud Lípez among red and green lagoons, geysers and flamingos, the Uyuni salt flat, La Paz, the Island of the Sun on Lake Titicaca, and the tropical valley of Coroico in the Yungas.",
        "Bolivia completa en grupo reducido: Santa Cruz, dos días en Sucre, Potosí, tres días en 4x4 por el Sud Lípez entre lagunas rojas y verdes, géiseres y flamencos, el salar de Uyuni, La Paz, la isla del Sol en el lago Titicaca, y el valle tropical de Coroico en los Yungas.",
      ],
      includes: INC(12, 12, ",Vols intérieurs,Circuit en 4x4 dans le Sud Lípez"),
      price: 5207, nights: 12, departureFrom: "Barcelone", image: "pb2",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -48997,
      chapters: [
        bo.chapter(["Sucre et Potosí", "Sucre and Potosí", "Sucre y Potosí"], ["Les villes coloniales.", "The colonial towns.", "Las ciudades coloniales."],
          ["pb1"],
          [
            bo.day(1, ...arr(["Santa Cruz", "Santa Cruz", "Santa Cruz"]), "pb1"),
            bo.day(2, ["Santa Cruz – Sucre", "Santa Cruz – Sucre", "Santa Cruz – Sucre"], ["Vol vers Sucre.", "Flight to Sucre.", "Vuelo a Sucre."], "pb1"),
            bo.day(3, ["Sucre", "Sucre", "Sucre"], X_SUCRE, "pb1"),
            bo.day(4, ["Potosí – Uyuni", "Potosí – Uyuni", "Potosí – Uyuni"], X_POTOSI, "pa6"),
          ]),
        bo.chapter(["Le Sud Lípez et Uyuni", "Sud Lípez and Uyuni", "El Sud Lípez y Uyuni"], ["Lagunes, volcans et sel.", "Lagoons, volcanoes and salt.", "Lagunas, volcanes y sal."],
          ["pa8", "pa6", "pb2"],
          [
            bo.day(5, ["Lagunes – Ojo de Perdiz", "Lagoons – Ojo de Perdiz", "Lagunas – Ojo de Perdiz"], ["En 4x4 à travers le Sud Lípez : déserts de pierre, volcans et lagunes d'altitude peuplées de flamants.", "By 4x4 across Sud Lípez: stone deserts, volcanoes and high lagoons full of flamingos.", "En 4x4 a través del Sud Lípez: desiertos de piedra, volcanes y lagunas de altura pobladas de flamencos."], "pa8"),
            bo.day(6, ["Laguna Colorada – San Pedro de Quemez", "Laguna Colorada – San Pedro de Quemez", "Laguna Colorada – San Pedro de Quemez"], ["La Laguna Colorada aux eaux rouges, la Laguna Verde et les geysers Sol de Mañana.", "The red waters of Laguna Colorada, Laguna Verde and the Sol de Mañana geysers.", "La Laguna Colorada de aguas rojas, la Laguna Verde y los géiseres Sol de Mañana."], "pa6"),
            bo.day(7, ["Salar d'Uyuni", "The Uyuni salt flat", "Salar de Uyuni"], X_UYUNI, "pb2"),
          ]),
        bo.chapter(["La Paz, le Titicaca et les Yungas", "La Paz, Titicaca and the Yungas", "La Paz, el Titicaca y los Yungas"], ["De l'altiplano aux vallées tropicales.", "From the altiplano to the tropical valleys.", "Del altiplano a los valles tropicales."],
          ["pb4", "pb5"],
          [
            bo.day(8, ["Uyuni – La Paz", "Uyuni – La Paz", "Uyuni – La Paz"], X_LAPAZ, "pb4"),
            bo.day(9, ["Lac Titicaca – île du Soleil", "Lake Titicaca – Island of the Sun", "Lago Titicaca – isla del Sol"], X_SOLEIL, "pb5"),
            bo.day(10, ["Île de la Lune – La Paz", "Island of the Moon – La Paz", "Isla de la Luna – La Paz"], ["Lever du soleil sur le lac, l'île de la Lune, puis retour à La Paz.", "Sunrise over the lake, the Island of the Moon, then back to La Paz.", "Amanecer sobre el lago, la isla de la Luna, y regreso a La Paz."], "pb5"),
            bo.day(11, ["La Paz – Coroico", "La Paz – Coroico", "La Paz – Coroico"], ["La descente spectaculaire des Andes vers les Yungas et le village de Coroico, entre plantations de café et forêt.", "The spectacular descent of the Andes to the Yungas and the village of Coroico, among coffee plantations and forest.", "El espectacular descenso de los Andes hacia los Yungas y el pueblo de Coroico, entre plantaciones de café y bosque."], "pb4"),
            bo.day(12, ["Coroico – La Paz", "Coroico – La Paz", "Coroico – La Paz"], ["Matinée dans les Yungas puis retour à La Paz.", "A morning in the Yungas, then back to La Paz.", "Mañana en los Yungas y regreso a La Paz."], "pb4"),
            bo.day(13, ["La Paz – Santa Cruz", "La Paz – Santa Cruz", "La Paz – Santa Cruz"], ["Vol vers Santa Cruz.", "Flight to Santa Cruz.", "Vuelo a Santa Cruz."], "pb1"),
            bo.day(14, ...dep(["Santa Cruz", "Santa Cruz", "Santa Cruz"]), "pb1"), bo.day(15, T_HOME, HOME, "pb2"),
          ]),
      ],
    }),

    bo.trip({
      slug: "bolivie-couleurs-du-perou-et-de-la-bolivie-17j",
      name: ["Couleurs du Pérou et de la Bolivie : Arequipa, La Paz, Uyuni, le Titicaca et le Machu Picchu", "Colours of Peru and Bolivia: Arequipa, La Paz, Uyuni, Titicaca and Machu Picchu", "Colores del Perú y Bolivia: Arequipa, La Paz, Uyuni, el Titicaca y Machu Picchu"],
      tagline: ["Deux pays andins autour du lac Titicaca, en groupe de 18 au plus", "Two Andean countries around Lake Titicaca, in a group of 18 at most", "Dos países andinos alrededor del lago Titicaca, en grupo de 18 como máximo"],
      description: [
        "Une grande boucle andine : Arequipa et Puno au Pérou, Copacabana et l'île du Soleil, deux jours à La Paz, Sucre, Potosí, le salar d'Uyuni, Tiwanaku, retour à Puno et les îles du Titicaca, puis la Vallée sacrée, le Machu Picchu et Cuzco.",
        "A great Andean loop: Arequipa and Puno in Peru, Copacabana and the Island of the Sun, two days in La Paz, Sucre, Potosí, the Uyuni salt flat, Tiwanaku, back to Puno and the Titicaca islands, then the Sacred Valley, Machu Picchu and Cuzco.",
        "Un gran circuito andino: Arequipa y Puno en el Perú, Copacabana y la isla del Sol, dos días en La Paz, Sucre, Potosí, el salar de Uyuni, Tiwanaku, regreso a Puno y las islas del Titicaca, y el Valle Sagrado, Machu Picchu y Cuzco.",
      ],
      includes: INC(15, 18, ",Vols intérieurs"),
      price: 4779, nights: 15, departureFrom: "Barcelone", image: "pb6",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -48996,
      chapters: [
        bo.chapter(["Arequipa et La Paz", "Arequipa and La Paz", "Arequipa y La Paz"], ["La ville blanche et le lac sacré.", "The white city and the sacred lake.", "La ciudad blanca y el lago sagrado."],
          ["pb3", "pb5", "pb4"],
          [
            bo.day(1, ...arr(LIM), "pb7"),
            bo.day(2, ["Lima – Arequipa", "Lima – Arequipa", "Lima – Arequipa"], ["Vol vers Arequipa.", "Flight to Arequipa.", "Vuelo a Arequipa."], "pb3"),
            bo.day(3, ["Arequipa", "Arequipa", "Arequipa"], X_AREQ, "pb3"),
            bo.day(4, ["Arequipa – Puno", "Arequipa – Puno", "Arequipa – Puno"], ["La traversée de l'altiplano et de ses lagunes jusqu'à Puno.", "Across the altiplano and its lagoons to Puno.", "La travesía del altiplano y sus lagunas hasta Puno."], "pb4"),
            bo.day(5, ["Copacabana – île du Soleil – La Paz", "Copacabana – Island of the Sun – La Paz", "Copacabana – isla del Sol – La Paz"], X_SOLEIL, "pb5"),
            bo.day(6, ["La Paz", "La Paz", "La Paz"], X_LAPAZ, "pb4"),
          ]),
        bo.chapter(["Sucre, Potosí et Uyuni", "Sucre, Potosí and Uyuni", "Sucre, Potosí y Uyuni"], ["Villes d'argent et désert de sel.", "Silver towns and salt desert.", "Ciudades de plata y desierto de sal."],
          ["pb1", "pb2", "pa8"],
          [
            bo.day(7, ["La Paz – Sucre", "La Paz – Sucre", "La Paz – Sucre"], ["Vol vers Sucre.", "Flight to Sucre.", "Vuelo a Sucre."], "pb1"),
            bo.day(8, ["Sucre", "Sucre", "Sucre"], X_SUCRE, "pb1"),
            bo.day(9, ["Potosí – Uyuni", "Potosí – Uyuni", "Potosí – Uyuni"], X_POTOSI, "pa8"),
            bo.day(10, ["Salar d'Uyuni", "The Uyuni salt flat", "Salar de Uyuni"], X_UYUNI, "pb2"),
            bo.day(11, ["Tiwanaku – Puno", "Tiwanaku – Puno", "Tiwanaku – Puno"], ["Vol vers La Paz, le site préinca de Tiwanaku et sa porte du Soleil, puis retour au Pérou par Desaguadero.", "Flight to La Paz, the pre-Inca site of Tiwanaku and its Gate of the Sun, then back into Peru via Desaguadero.", "Vuelo a La Paz, el sitio preinca de Tiwanaku y su puerta del Sol, y regreso al Perú por Desaguadero."], "pb4"),
          ]),
        bo.chapter(["Le Titicaca et Cuzco", "Titicaca and Cuzco", "El Titicaca y Cuzco"], ["Les îles et le Machu Picchu.", "The islands and Machu Picchu.", "Las islas y Machu Picchu."],
          ["pb6", "pb5"],
          [
            bo.day(12, ["Lac Titicaca", "Lake Titicaca", "Lago Titicaca"], ["Cinq heures de navigation sur le lac : les îles flottantes des Uros et l'île de Taquile.", "Five hours sailing on the lake: the floating islands of the Uros and Taquile island.", "Cinco horas de navegación por el lago: las islas flotantes de los uros y la isla de Taquile."], "pb5"),
            bo.day(13, ["Puno – Vallée sacrée", "Puno – Sacred Valley", "Puno – Valle Sagrado"], ["La route des Andes par le col de La Raya jusqu'à la Vallée sacrée.", "The Andes road over La Raya pass to the Sacred Valley.", "La carretera de los Andes por el paso de La Raya hasta el Valle Sagrado."], "ip3"),
            bo.day(14, ["Machu Picchu", "Machu Picchu", "Machu Picchu"], X_MACHU, "pb6"),
            bo.day(15, ["Pisac – Cuzco", "Pisac – Cuzco", "Pisac – Cuzco"], join(["Le marché de Pisac, puis Cuzco.", "The Pisac market, then Cuzco.", "El mercado de Pisac, y Cuzco."], X_CUZCO), "ip4"),
            bo.day(16, ["Cuzco – Lima – vol retour", "Cuzco – Lima – flight home", "Cuzco – Lima – vuelo de regreso"], ["Vol vers Lima et envol pour la France.", "Flight to Lima and fly to France.", "Vuelo a Lima y vuelo a Francia."], "pb7"),
            bo.day(17, T_HOME, HOME, "pb6"),
          ]),
      ],
    }),

    bo.trip({
      slug: "bolivie-perles-des-andes-chili-bolivie-perou-17j",
      name: ["Les perles des Andes : l'Atacama, le salar d'Uyuni, le Titicaca et le Machu Picchu", "Pearls of the Andes: the Atacama, the Uyuni salt flat, Titicaca and Machu Picchu", "Las perlas de los Andes: el Atacama, el salar de Uyuni, el Titicaca y Machu Picchu"],
      tagline: ["Trois pays andins, du désert chilien à la cité inca", "Three Andean countries, from the Chilean desert to the Inca city", "Tres países andinos, del desierto chileno a la ciudad inca"],
      description: [
        "La grande traversée des Andes en groupe de 20 personnes au plus : Santiago et Valparaíso au Chili, trois jours à San Pedro de Atacama et ses geysers, la traversée en 4x4 des lagunes du Sud Lípez jusqu'au salar d'Uyuni en Bolivie, La Paz, le lac Titicaca et l'île du Soleil, Puno, puis Cuzco, la Vallée sacrée et le Machu Picchu au Pérou.",
        "The great Andes crossing in a group of 20 at most: Santiago and Valparaíso in Chile, three days in San Pedro de Atacama and its geysers, a 4x4 crossing of the Sud Lípez lagoons to the Uyuni salt flat in Bolivia, La Paz, Lake Titicaca and the Island of the Sun, Puno, then Cuzco, the Sacred Valley and Machu Picchu in Peru.",
        "La gran travesía de los Andes en grupo de 20 personas como máximo: Santiago y Valparaíso en Chile, tres días en San Pedro de Atacama y sus géiseres, la travesía en 4x4 de las lagunas del Sud Lípez hasta el salar de Uyuni en Bolivia, La Paz, el lago Titicaca y la isla del Sol, Puno, y Cuzco, el Valle Sagrado y Machu Picchu en el Perú.",
      ],
      includes: INC(14, 20, ",Vols intérieurs,Traversée en 4x4 du Sud Lípez"),
      price: 7655, nights: 14, departureFrom: "Paris", image: "pa6",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 20, order: -48995,
      chapters: [
        bo.chapter(["Le Chili et l'Atacama", "Chile and the Atacama", "Chile y el Atacama"], ["Santiago, Valparaíso et le désert.", "Santiago, Valparaíso and the desert.", "Santiago, Valparaíso y el desierto."],
          ["pa4", "pa5", "pa6"],
          [
            bo.day(1, ...arr(SCL), "pa4"),
            bo.day(2, ["Santiago", "Santiago", "Santiago"], X_SCL, "pa4"),
            bo.day(3, ["Valparaíso", "Valparaíso", "Valparaíso"], X_VALPO, "pa4"),
            bo.day(4, ["Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama"], X_ATACAMA, "pa5"),
            bo.day(5, ["Lagunes altiplaniques", "The altiplano lagoons", "Lagunas altiplánicas"], X_LAGUNAS, "pa6"),
            bo.day(6, ["Geysers du Tatio", "The Tatio geysers", "Géiseres del Tatio"], X_TATIO, "pt8"),
          ]),
        bo.chapter(["La Bolivie", "Bolivia", "Bolivia"], ["Sud Lípez, Uyuni, La Paz et le Titicaca.", "Sud Lípez, Uyuni, La Paz and Titicaca.", "Sud Lípez, Uyuni, La Paz y el Titicaca."],
          ["pa8", "pb2", "pa2"],
          [
            bo.day(7, ["Hito Cajón – lagunes Verte et Rouge", "Hito Cajón – the Green and Red lagoons", "Hito Cajón – lagunas Verde y Colorada"], ["Passage en Bolivie à Hito Cajón et traversée en 4x4 des lagunes Verte et Rouge.", "Crossing into Bolivia at Hito Cajón and a 4x4 crossing of the Green and Red lagoons.", "Paso a Bolivia en Hito Cajón y travesía en 4x4 de las lagunas Verde y Colorada."], "pa8"),
            bo.day(8, ["Salar d'Uyuni", "The Uyuni salt flat", "Salar de Uyuni"], X_UYUNI, "pb2"),
            bo.day(9, ["Uyuni – La Paz", "Uyuni – La Paz", "Uyuni – La Paz"], X_LAPAZ, "pb4"),
            bo.day(10, ["Copacabana – îles de la Lune et du Soleil", "Copacabana – the Islands of the Moon and the Sun", "Copacabana – islas de la Luna y del Sol"], X_SOLEIL, "pa2"),
            bo.day(11, ["Île du Soleil – Puno", "Island of the Sun – Puno", "Isla del Sol – Puno"], ["Retour sur le continent et passage au Pérou jusqu'à Puno.", "Back to the mainland and into Peru to Puno.", "Regreso al continente y paso al Perú hasta Puno."], "pb5"),
          ]),
        bo.chapter(["Le Pérou inca", "Inca Peru", "El Perú inca"], ["Cuzco et le Machu Picchu.", "Cuzco and Machu Picchu.", "Cuzco y Machu Picchu."],
          ["pa7", "pa3"],
          [
            bo.day(12, ["Puno – Cuzco", "Puno – Cuzco", "Puno – Cuzco"], ["La route de l'altiplano jusqu'à Cuzco.", "The altiplano road to Cuzco.", "La carretera del altiplano hasta Cuzco."], "pa3"),
            bo.day(13, ["Vallée sacrée – Machu Picchu", "Sacred Valley – Machu Picchu", "Valle Sagrado – Machu Picchu"], X_MACHU, "pa7"),
            bo.day(14, ["Ollantaytambo – Pisac – Cuzco", "Ollantaytambo – Pisac – Cuzco", "Ollantaytambo – Pisac – Cuzco"], ["La forteresse d'Ollantaytambo et le marché de Pisac, puis Cuzco.", "The Ollantaytambo fortress and the Pisac market, then Cuzco.", "La fortaleza de Ollantaytambo y el mercado de Pisac, y Cuzco."], "pa3"),
            bo.day(15, ["Cuzco", "Cuzco", "Cuzco"], X_CUZCO, "ip4"),
            bo.day(16, ["Cuzco – Lima – vol retour", "Cuzco – Lima – flight home", "Cuzco – Lima – vuelo de regreso"], ["Vol vers Lima et envol pour la France.", "Flight to Lima and fly to France.", "Vuelo a Lima y vuelo a Francia."], "pa7"),
            bo.day(17, T_HOME, HOME, "pa6"),
          ]),
      ],
    }),

    // ═════════════ ÉQUATEUR ═════════════
    ec.trip({
      slug: "equateur-decouverte-de-l-equateur-amazonie-cuenca-13j",
      name: ["Découverte de l'Équateur : Quito, l'Amazonie, Baños, le Chimborazo, Cuenca et Otavalo", "Discovering Ecuador: Quito, the Amazon, Baños, Chimborazo, Cuenca and Otavalo", "Descubrimiento de Ecuador: Quito, la Amazonía, Baños, el Chimborazo, Cuenca y Otavalo"],
      tagline: ["La forêt amazonienne et l'avenue des volcans, en groupe de 18 au plus", "The Amazon forest and the Avenue of the Volcanoes, in a group of 18 at most", "La selva amazónica y la avenida de los volcanes, en grupo de 18 como máximo"],
      description: [
        "L'Équateur complet : Quito, deux nuits en lodge en Amazonie, Baños et ses cascades, le volcan Chimborazo et le village de Guamote, Ingapirca et Cuenca, le marché d'Otavalo, la ligne de l'équateur et le volcan Cotopaxi. Prolongé aux îles Galápagos (16 jours) à partir de 4 548 € par personne.",
        "Ecuador in full: Quito, two nights in an Amazon lodge, Baños and its waterfalls, Chimborazo volcano and the village of Guamote, Ingapirca and Cuenca, the Otavalo market, the equator line and Cotopaxi volcano. Extended to the Galápagos Islands (16 days) from €4,548 per person.",
        "Ecuador completo: Quito, dos noches en un lodge en la Amazonía, Baños y sus cascadas, el volcán Chimborazo y el pueblo de Guamote, Ingapirca y Cuenca, el mercado de Otavalo, la línea del ecuador y el volcán Cotopaxi. Prolongado a las islas Galápagos (16 días) desde 4.548 € por persona.",
      ],
      includes: INC(11, 18),
      price: 2769, nights: 11, departureFrom: "Barcelone", image: "de1",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -48994,
      chapters: [
        ec.chapter(["Quito et l'Amazonie", "Quito and the Amazon", "Quito y la Amazonía"], ["La capitale et la forêt.", "The capital and the forest.", "La capital y la selva."],
          ["de4", "de2", "de5"],
          [
            ec.day(1, ...arr(UIO), "de4"),
            ec.day(2, UIO, X_QUITO, "de4"),
            ec.day(3, ["Quito – Amazonie", "Quito – the Amazon", "Quito – Amazonía"], ["La descente des Andes vers le bassin amazonien et le lodge en forêt.", "The descent of the Andes to the Amazon basin and the forest lodge.", "El descenso de los Andes hacia la cuenca amazónica y el lodge en la selva."], "de2"),
            ec.day(4, ["Amazonie", "The Amazon", "Amazonía"], X_AMAZ, "de2"),
            ec.day(5, ["Puyo – Baños", "Puyo – Baños", "Puyo – Baños"], X_BANOS, "de5"),
          ]),
        ec.chapter(["L'avenue des volcans", "The Avenue of the Volcanoes", "La avenida de los volcanes"], ["Chimborazo, Ingapirca et Cuenca.", "Chimborazo, Ingapirca and Cuenca.", "Chimborazo, Ingapirca y Cuenca."],
          ["de1", "de6", "de8"],
          [
            ec.day(6, ["Chimborazo – Guamote", "Chimborazo – Guamote", "Chimborazo – Guamote"], ["Le volcan Chimborazo, le point de la Terre le plus éloigné de son centre, ses vigognes, puis le village indigène de Guamote.", "Chimborazo volcano, the point on Earth farthest from its centre, its vicuñas, then the indigenous village of Guamote.", "El volcán Chimborazo, el punto de la Tierra más alejado de su centro, sus vicuñas, y el pueblo indígena de Guamote."], "de1"),
            ec.day(7, ["Alausí – Ingapirca – Cuenca", "Alausí – Ingapirca – Cuenca", "Alausí – Ingapirca – Cuenca"], X_INGA, "de6"),
            ec.day(8, ["Cuenca – Quito", "Cuenca – Quito", "Cuenca – Quito"], ["Matinée à Cuenca et ses ateliers de chapeaux panama, puis vol vers Quito.", "A morning in Cuenca and its Panama hat workshops, then a flight to Quito.", "Mañana en Cuenca y sus talleres de sombreros de paja toquilla, y vuelo a Quito."], "de6"),
          ]),
        ec.chapter(["Le nord andin", "The northern Andes", "Los Andes del norte"], ["Otavalo, l'équateur et le Cotopaxi.", "Otavalo, the equator and Cotopaxi.", "Otavalo, el ecuador y el Cotopaxi."],
          ["de3", "te3"],
          [
            ec.day(9, ["Cuicocha – Otavalo", "Cuicocha – Otavalo", "Cuicocha – Otavalo"], X_OTAVALO, "de3"),
            ec.day(10, ["Mitad del Mundo – Quito", "Mitad del Mundo – Quito", "Mitad del Mundo – Quito"], ["Le monument de la Moitié du Monde, sur la ligne de l'équateur, puis retour à Quito.", "The Middle of the World monument, on the equator line, then back to Quito.", "El monumento de la Mitad del Mundo, sobre la línea del ecuador, y regreso a Quito."], "te3"),
            ec.day(11, ["Cotopaxi", "Cotopaxi", "Cotopaxi"], ["Le parc du Cotopaxi, l'un des plus hauts volcans actifs du monde, et sa lagune de Limpiopungo.", "Cotopaxi park, one of the highest active volcanoes in the world, and its Limpiopungo lagoon.", "El parque del Cotopaxi, uno de los volcanes activos más altos del mundo, y su laguna de Limpiopungo."], "de1"),
            ec.day(12, ...dep(UIO), "de4"), ec.day(13, T_HOME, HOME, "de1"),
          ]),
      ],
    }),

    ec.trip({
      slug: "equateur-tresors-de-l-equateur-et-des-galapagos-13j",
      name: ["Trésors de l'Équateur et des Galápagos : Otavalo, l'Amazonie, Cuenca, Santa Cruz et Isabela", "Treasures of Ecuador and the Galápagos: Otavalo, the Amazon, Cuenca, Santa Cruz and Isabela", "Tesoros de Ecuador y las Galápagos: Otavalo, la Amazonía, Cuenca, Santa Cruz e Isabela"],
      tagline: ["Les Andes, l'Amazonie puis cinq nuits aux Galápagos, en groupe de 16 au plus", "The Andes, the Amazon, then five nights in the Galápagos, in a group of 16 at most", "Los Andes, la Amazonía y cinco noches en las Galápagos, en grupo de 16 como máximo"],
      description: [
        "L'Équateur et les Galápagos : Quito et Otavalo, la ligne de l'équateur, une nuit en Amazonie, Baños et Riobamba, Ingapirca et Cuenca, Guayaquil, puis cinq nuits dans l'archipel des Galápagos, sur Santa Cruz et Isabela, à la rencontre des tortues géantes, des iguanes marins, des otaries et des fous à pieds bleus.",
        "Ecuador and the Galápagos: Quito and Otavalo, the equator line, a night in the Amazon, Baños and Riobamba, Ingapirca and Cuenca, Guayaquil, then five nights in the Galápagos archipelago, on Santa Cruz and Isabela, meeting giant tortoises, marine iguanas, sea lions and blue-footed boobies.",
        "Ecuador y las Galápagos: Quito y Otavalo, la línea del ecuador, una noche en la Amazonía, Baños y Riobamba, Ingapirca y Cuenca, Guayaquil, y cinco noches en el archipiélago de las Galápagos, en Santa Cruz e Isabela, al encuentro de tortugas gigantes, iguanas marinas, lobos marinos y piqueros de patas azules.",
      ],
      includes: INC(11, 16, ",Vols vers et depuis les Galápagos,Bateaux entre les îles"),
      price: 4345, nights: 11, departureFrom: "Lyon", image: "te1",
      theme: "adventure", feeling: "revitalized", travelerTypes: "couples,family,groups", maxGuests: 16, order: -48993,
      chapters: [
        ec.chapter(["Les Andes et l'Amazonie", "The Andes and the Amazon", "Los Andes y la Amazonía"], ["De Quito à Cuenca.", "From Quito to Cuenca.", "De Quito a Cuenca."],
          ["te3", "te4", "te5", "te8"],
          [
            ec.day(1, ...arr(UIO), "te3"),
            ec.day(2, ["Quito – Otavalo", "Quito – Otavalo", "Quito – Otavalo"], join(X_QUITO, X_OTAVALO), "te4"),
            ec.day(3, ["Ligne de l'équateur – Amazonie", "The equator line – the Amazon", "Línea del ecuador – Amazonía"], X_AMAZ, "de2"),
            ec.day(4, ["Puyo – Baños – Riobamba", "Puyo – Baños – Riobamba", "Puyo – Baños – Riobamba"], X_BANOS, "de5"),
            ec.day(5, ["Ingapirca – Cuenca", "Ingapirca – Cuenca", "Ingapirca – Cuenca"], X_INGA, "te8"),
            ec.day(6, ["Cuenca – Guayaquil", "Cuenca – Guayaquil", "Cuenca – Guayaquil"], ["Le parc du Cajas et ses lagunes, puis Guayaquil et son malecón.", "Cajas park and its lagoons, then Guayaquil and its malecón.", "El parque del Cajas y sus lagunas, y Guayaquil y su malecón."], "de8"),
          ]),
        ec.chapter(["Les Galápagos", "The Galápagos", "Las Galápagos"], ["Santa Cruz et Isabela.", "Santa Cruz and Isabela.", "Santa Cruz e Isabela."],
          ["te1", "te7"],
          [
            ec.day(7, ["Baltra – Santa Cruz", "Baltra – Santa Cruz", "Baltra – Santa Cruz"], ["Vol vers les Galápagos, les tortues géantes des hautes terres de Santa Cruz et la station Charles-Darwin.", "Flight to the Galápagos, the giant tortoises of the Santa Cruz highlands and the Charles Darwin station.", "Vuelo a las Galápagos, las tortugas gigantes de las tierras altas de Santa Cruz y la estación Charles Darwin."], "te1"),
            ec.day(8, ["Isabela – Concha de Perla", "Isabela – Concha de Perla", "Isabela – Concha de Perla"], ["En bateau vers Isabela et snorkeling dans la crique de Concha de Perla, parmi les otaries et les manchots.", "By boat to Isabela and snorkelling in the Concha de Perla cove, among sea lions and penguins.", "En barco a Isabela y esnórquel en la cala de Concha de Perla, entre lobos marinos y pingüinos."], "te7"),
            ec.day(9, ["Las Tintoreras – Santa Cruz", "Las Tintoreras – Santa Cruz", "Las Tintoreras – Santa Cruz"], ["L'îlot de Las Tintoreras, ses requins à pointe blanche et ses iguanes marins, puis retour à Santa Cruz.", "The Las Tintoreras islet, its whitetip sharks and marine iguanas, then back to Santa Cruz.", "El islote de Las Tintoreras, sus tiburones de punta blanca y sus iguanas marinas, y regreso a Santa Cruz."], "te7"),
            ec.day(10, ["Santa Cruz", "Santa Cruz", "Santa Cruz"], ["Journée libre ou croisière en option vers les îles voisines, la plage de Tortuga Bay.", "A free day or an optional cruise to the neighbouring islands, Tortuga Bay beach.", "Día libre o crucero opcional a las islas vecinas, la playa de Tortuga Bay."], "te1"),
            ec.day(11, ["Santa Cruz – Quito", "Santa Cruz – Quito", "Santa Cruz – Quito"], ["Vol de Baltra vers Quito.", "Flight from Baltra to Quito.", "Vuelo de Baltra a Quito."], "te3"),
            ec.day(12, ...dep(UIO), "te4"), ec.day(13, T_HOME, HOME, "te1"),
          ]),
      ],
    }),

    // ═════════════ COLOMBIE ═════════════
    co.trip({
      slug: "colombie-cap-sur-la-colombie-medellin-carthagene-10j",
      name: ["Cap sur la Colombie : Bogotá, Zipaquirá, Medellín, Guatapé et Carthagène", "Heading for Colombia: Bogotá, Zipaquirá, Medellín, Guatapé and Cartagena", "Rumbo a Colombia: Bogotá, Zipaquirá, Medellín, Guatapé y Cartagena"],
      tagline: ["Des Andes à la mer des Caraïbes, en groupe de 14 au plus", "From the Andes to the Caribbean Sea, in a group of 14 at most", "De los Andes al mar Caribe, en grupo de 14 como máximo"],
      description: [
        "La Colombie en dix jours : Bogotá et la cathédrale de sel de Zipaquirá, trois jours à Medellín avec Santa Fe de Antioquia et Guatapé, puis deux jours à Carthagène des Indes. Avec deux nuits de plus à Carthagène (12 jours) à partir de 3 081 €, ou une extension balnéaire (13 jours) à partir de 3 420 € par personne.",
        "Colombia in ten days: Bogotá and the Zipaquirá salt cathedral, three days in Medellín with Santa Fe de Antioquia and Guatapé, then two days in Cartagena de Indias. With two more nights in Cartagena (12 days) from €3,081, or a beach extension (13 days) from €3,420 per person.",
        "Colombia en diez días: Bogotá y la catedral de sal de Zipaquirá, tres días en Medellín con Santa Fe de Antioquia y Guatapé, y dos días en Cartagena de Indias. Con dos noches más en Cartagena (12 días) desde 3.081 €, o una extensión de playa (13 días) desde 3.420 € por persona.",
      ],
      includes: INC(8, 14, ",Vols intérieurs"),
      price: 2754, nights: 8, departureFrom: "Barcelone", image: "cc6",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 14, order: -48992,
      chapters: [
        co.chapter(["Bogotá et Medellín", "Bogotá and Medellín", "Bogotá y Medellín"], ["Les villes des Andes.", "The Andean cities.", "Las ciudades de los Andes."],
          ["cc5", "cc4", "cc2", "cc3"],
          [
            co.day(1, ...arr(BOG), "cc5"),
            co.day(2, ["Zipaquirá", "Zipaquirá", "Zipaquirá"], ["Le quartier colonial de la Candelaria et le musée de l'Or de Bogotá, puis la cathédrale de sel de Zipaquirá, creusée dans une mine.", "Bogotá's colonial Candelaria district and Gold Museum, then the Zipaquirá salt cathedral, carved inside a mine.", "El barrio colonial de La Candelaria y el museo del Oro de Bogotá, y la catedral de sal de Zipaquirá, excavada en una mina."], "cc5"),
            co.day(3, ["Bogotá – Medellín", "Bogotá – Medellín", "Bogotá – Medellín"], ["Vol vers Medellín.", "Flight to Medellín.", "Vuelo a Medellín."], "cc4"),
            co.day(4, ["Medellín", "Medellín", "Medellín"], X_MED, "cc4"),
            co.day(5, ["Santa Fe de Antioquia", "Santa Fe de Antioquia", "Santa Fe de Antioquia"], ["Santa Fe de Antioquia, ancienne capitale coloniale aux maisons blanches, et son pont suspendu de l'Occident.", "Santa Fe de Antioquia, a former colonial capital of white houses, and its Bridge of the West.", "Santa Fe de Antioquia, antigua capital colonial de casas blancas, y su puente de Occidente."], "cc2"),
            co.day(6, ["Guatapé – Carthagène", "Guatapé – Cartagena", "Guatapé – Cartagena"], join(X_GUATAPE, ["Puis vol vers Carthagène.", "Then a flight to Cartagena.", "Y vuelo a Cartagena."]), "cc3"),
          ]),
        co.chapter(["Carthagène des Indes", "Cartagena de Indias", "Cartagena de Indias"], ["La perle des Caraïbes.", "The pearl of the Caribbean.", "La perla del Caribe."],
          ["cc6", "cc7", "cc1"],
          [
            co.day(7, CTG, X_CTG, "cc6"),
            co.day(8, CTG, ["Journée libre : les îles du Rosaire en option, ou les plages et les ruelles de Getsemaní.", "A free day: the Rosario Islands as an option, or the beaches and alleys of Getsemaní.", "Día libre: las islas del Rosario opcional, o las playas y callejuelas de Getsemaní."], "cc7"),
            co.day(9, ...dep(CTG), "cc1"), co.day(10, T_HOME, HOME, "cc6"),
          ]),
      ],
    }),

    co.trip({
      slug: "colombie-couleurs-de-colombie-salento-guatape-11j",
      name: ["Couleurs de Colombie : Bogotá, la région du café, Medellín, Guatapé et Carthagène", "Colours of Colombia: Bogotá, the coffee region, Medellín, Guatapé and Cartagena", "Colores de Colombia: Bogotá, el Eje Cafetero, Medellín, Guatapé y Cartagena"],
      tagline: ["Les palmiers de cire de la vallée de Cocora et les villages colorés, en groupe de 18 au plus", "The wax palms of the Cocora valley and colourful villages, in a group of 18 at most", "Las palmas de cera del valle de Cocora y los pueblos de colores, en grupo de 18 como máximo"],
      description: [
        "La Colombie des couleurs : Bogotá, deux nuits à Salento dans la région du café avec la vallée de Cocora et Filandia, Medellín et Santa Elena, une nuit à Guatapé, puis Carthagène. Avec deux nuits de plus à Carthagène (13 jours) à partir de 3 321 €, ou sur la presqu'île de Barú à partir de 3 422 € par personne.",
        "Colourful Colombia: Bogotá, two nights in Salento in the coffee region with the Cocora valley and Filandia, Medellín and Santa Elena, a night in Guatapé, then Cartagena. With two more nights in Cartagena (13 days) from €3,321, or on the Barú peninsula from €3,422 per person.",
        "La Colombia de los colores: Bogotá, dos noches en Salento en el Eje Cafetero con el valle de Cocora y Filandia, Medellín y Santa Elena, una noche en Guatapé, y Cartagena. Con dos noches más en Cartagena (13 días) desde 3.321 €, o en la península de Barú desde 3.422 € por persona.",
      ],
      includes: INC(9, 18, ",Vols intérieurs"),
      price: 2914, nights: 9, departureFrom: "Paris", image: "kc5",
      theme: "culture", feeling: "contentment", travelerTypes: "couples,groups,solo", maxGuests: 18, order: -48991,
      chapters: [
        co.chapter(["Bogotá et la région du café", "Bogotá and the coffee region", "Bogotá y el Eje Cafetero"], ["Palmiers de cire et fincas.", "Wax palms and fincas.", "Palmas de cera y fincas."],
          ["kc5", "cc2"],
          [
            co.day(1, ...arr(BOG), "cc5"),
            co.day(2, BOG, ["Bogotá : le quartier colonial de la Candelaria, le musée de l'Or et le musée Botero, puis le mont Monserrate.", "Bogotá: the colonial Candelaria district, the Gold Museum and the Botero Museum, then Monserrate hill.", "Bogotá: el barrio colonial de La Candelaria, el museo del Oro y el museo Botero, y el cerro de Monserrate."], "cc5"),
            co.day(3, ["Bogotá – Pereira – Salento", "Bogotá – Pereira – Salento", "Bogotá – Pereira – Salento"], ["Vol vers Pereira et visite d'une finca de café, puis Salento.", "Flight to Pereira and a visit to a coffee finca, then Salento.", "Vuelo a Pereira y visita de una finca de café, y Salento."], "cc2"),
            co.day(4, ["Vallée de Cocora – Filandia", "The Cocora valley – Filandia", "Valle de Cocora – Filandia"], ["La vallée de Cocora et ses palmiers de cire hauts de soixante mètres, puis le village coloré de Filandia.", "The Cocora valley and its sixty-metre wax palms, then the colourful village of Filandia.", "El valle de Cocora y sus palmas de cera de sesenta metros, y el colorido pueblo de Filandia."], "kc5"),
          ]),
        co.chapter(["Medellín et Guatapé", "Medellín and Guatapé", "Medellín y Guatapé"], ["La ville et les lacs.", "The city and the lakes.", "La ciudad y los lagos."],
          ["cc4", "kc6", "cc3"],
          [
            co.day(5, ["Pereira – Medellín – Santa Elena", "Pereira – Medellín – Santa Elena", "Pereira – Medellín – Santa Elena"], ["Vol vers Medellín et les fermes fleuries de Santa Elena, berceau des silleteros.", "Flight to Medellín and the flower farms of Santa Elena, home of the silleteros.", "Vuelo a Medellín y las fincas de flores de Santa Elena, cuna de los silleteros."], "cc4"),
            co.day(6, ["Medellín", "Medellín", "Medellín"], X_MED, "cc4"),
            co.day(7, ["Guatapé", "Guatapé", "Guatapé"], X_GUATAPE, "kc6"),
          ]),
        co.chapter(["Carthagène des Indes", "Cartagena de Indias", "Cartagena de Indias"], ["La perle des Caraïbes.", "The pearl of the Caribbean.", "La perla del Caribe."],
          ["kc7", "kc8", "cc7"],
          [
            co.day(8, ["Guatapé – Medellín – Carthagène", "Guatapé – Medellín – Cartagena", "Guatapé – Medellín – Cartagena"], ["Vol vers Carthagène.", "Flight to Cartagena.", "Vuelo a Cartagena."], "kc8"),
            co.day(9, CTG, X_CTG, "kc7"),
            co.day(10, ...dep(CTG), "cc7"), co.day(11, T_HOME, HOME, "kc5"),
          ]),
      ],
    }),

    // ═════════════ CHILI ═════════════
    cl.trip({
      slug: "chili-couleurs-du-chili-patagonie-atacama-13j",
      name: ["Couleurs du Chili : la Patagonie, Torres del Paine, le désert d'Atacama et Valparaíso", "Colours of Chile: Patagonia, Torres del Paine, the Atacama Desert and Valparaíso", "Colores de Chile: la Patagonia, Torres del Paine, el desierto de Atacama y Valparaíso"],
      tagline: ["Des glaciers du sud au désert du nord, en groupe de 12 au plus", "From the southern glaciers to the northern desert, in a group of 12 at most", "De los glaciares del sur al desierto del norte, en grupo de 12 como máximo"],
      description: [
        "Le Chili du nord au sud en petit groupe : Santiago, la Patagonie avec les glaciers Balmaceda et Serrano et le parc de Torres del Paine, trois jours à San Pedro de Atacama avec la vallée de la Lune, les lagunes altiplaniques et les geysers du Tatio, puis Valparaíso. Avec l'île de Pâques (17 jours) à partir de 9 361 €, l'île de Chiloé (16 jours) à partir de 8 236 €, ou les deux (20 jours) à partir de 11 411 € par personne.",
        "Chile from north to south in a small group: Santiago, Patagonia with the Balmaceda and Serrano glaciers and Torres del Paine park, three days in San Pedro de Atacama with the Valley of the Moon, the altiplano lagoons and the Tatio geysers, then Valparaíso. With Easter Island (17 days) from €9,361, Chiloé island (16 days) from €8,236, or both (20 days) from €11,411 per person.",
        "Chile de norte a sur en grupo reducido: Santiago, la Patagonia con los glaciares Balmaceda y Serrano y el parque de Torres del Paine, tres días en San Pedro de Atacama con el valle de la Luna, las lagunas altiplánicas y los géiseres del Tatio, y Valparaíso. Con la isla de Pascua (17 días) desde 9.361 €, la isla de Chiloé (16 días) desde 8.236 €, o ambas (20 días) desde 11.411 € por persona.",
      ],
      includes: INC(10, 12, ",Vols intérieurs"),
      price: 6110, nights: 10, departureFrom: "Barcelone", image: "ch2",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,solo,groups", maxGuests: 12, order: -48990,
      chapters: [
        cl.chapter(["La Patagonie", "Patagonia", "La Patagonia"], ["Glaciers et tours de granit.", "Glaciers and granite towers.", "Glaciares y torres de granito."],
          ["ch2", "ch5", "pt1", "pt2"],
          [
            cl.day(1, ...arr(SCL), "ch7"),
            cl.day(2, ["Santiago", "Santiago", "Santiago"], X_SCL, "ch7"),
            cl.day(3, ["Punta Arenas – Puerto Natales", "Punta Arenas – Puerto Natales", "Punta Arenas – Puerto Natales"], ["Vol vers Punta Arenas, au bord du détroit de Magellan, puis la route de la pampa jusqu'à Puerto Natales.", "Flight to Punta Arenas, on the Strait of Magellan, then the pampa road to Puerto Natales.", "Vuelo a Punta Arenas, a orillas del estrecho de Magallanes, y la carretera de la pampa hasta Puerto Natales."], "ch5"),
            cl.day(4, ["Glaciers Balmaceda et Serrano", "The Balmaceda and Serrano glaciers", "Glaciares Balmaceda y Serrano"], ["Navigation dans le fjord de la Última Esperanza jusqu'aux glaciers Balmaceda et Serrano.", "Sailing up the Última Esperanza fjord to the Balmaceda and Serrano glaciers.", "Navegación por el fiordo de Última Esperanza hasta los glaciares Balmaceda y Serrano."], "pt2"),
            cl.day(5, ["Torres del Paine", "Torres del Paine", "Torres del Paine"], X_PAINE, "ch2"),
            cl.day(6, ["Punta Arenas – Santiago", "Punta Arenas – Santiago", "Punta Arenas – Santiago"], ["Retour à Punta Arenas et vol vers Santiago.", "Back to Punta Arenas and a flight to Santiago.", "Regreso a Punta Arenas y vuelo a Santiago."], "pt1"),
          ]),
        cl.chapter(["Le désert d'Atacama et Valparaíso", "The Atacama Desert and Valparaíso", "El desierto de Atacama y Valparaíso"], ["Lagunes, geysers et port coloré.", "Lagoons, geysers and a colourful port.", "Lagunas, géiseres y puerto de colores."],
          ["ch3", "ch4", "pt8", "mc2"],
          [
            cl.day(7, ["Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama"], X_ATACAMA, "ch3"),
            cl.day(8, ["Lagunes altiplaniques", "The altiplano lagoons", "Lagunas altiplánicas"], X_LAGUNAS, "ch4"),
            cl.day(9, ["Geysers du Tatio", "The Tatio geysers", "Géiseres del Tatio"], X_TATIO, "pt8"),
            cl.day(10, ["Calama – Santiago", "Calama – Santiago", "Calama – Santiago"], ["Vol vers Santiago.", "Flight to Santiago.", "Vuelo a Santiago."], "ch7"),
            cl.day(11, ["Valparaíso", "Valparaíso", "Valparaíso"], X_VALPO, "mc2"),
            cl.day(12, ...dep(SCL), "ch7"), cl.day(13, T_HOME, HOME, "ch2"),
          ]),
      ],
    }),

    cl.trip({
      slug: "chili-merveilles-du-chili-atacama-ile-de-paques-12j",
      name: ["Merveilles du Chili et de l'île de Pâques : Santiago, Valparaíso, l'Atacama et les moaï", "Wonders of Chile and Easter Island: Santiago, Valparaíso, the Atacama and the moai", "Maravillas de Chile y de la isla de Pascua: Santiago, Valparaíso, el Atacama y los moái"],
      tagline: ["Le désert le plus aride du monde puis l'île la plus isolée du Pacifique", "The driest desert in the world, then the most remote island in the Pacific", "El desierto más árido del mundo y la isla más aislada del Pacífico"],
      description: [
        "Le Chili en groupe de 16 personnes au plus : Santiago et Valparaíso, San Pedro de Atacama, la vallée de la Lune, les lagunes Miscanti et Miñiques et le salar d'Atacama, les geysers du Tatio en option, puis trois nuits sur l'île de Pâques, entre Rano Raraku, Anakena, Orongo et Ahu Akivi.",
        "Chile in a group of 16 at most: Santiago and Valparaíso, San Pedro de Atacama, the Valley of the Moon, the Miscanti and Miñiques lagoons and the Atacama salt flat, the Tatio geysers as an option, then three nights on Easter Island, among Rano Raraku, Anakena, Orongo and Ahu Akivi.",
        "Chile en grupo de 16 personas como máximo: Santiago y Valparaíso, San Pedro de Atacama, el valle de la Luna, las lagunas Miscanti y Miñiques y el salar de Atacama, los géiseres del Tatio opcionales, y tres noches en la isla de Pascua, entre Rano Raraku, Anakena, Orongo y Ahu Akivi.",
      ],
      includes: INC(10, 16, ",Vols intérieurs"),
      price: 5317, nights: 10, departureFrom: "Genève", image: "mc6",
      theme: "culture", feeling: "freedom", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -48989,
      chapters: [
        cl.chapter(["Santiago et l'Atacama", "Santiago and the Atacama", "Santiago y el Atacama"], ["La capitale, le port et le désert.", "The capital, the port and the desert.", "La capital, el puerto y el desierto."],
          ["mc4", "mc2", "ch3", "pt7"],
          [
            cl.day(1, ...arr(SCL), "mc4"),
            cl.day(2, ["Santiago", "Santiago", "Santiago"], X_SCL, "mc7"),
            cl.day(3, ["Valparaíso", "Valparaíso", "Valparaíso"], X_VALPO, "mc2"),
            cl.day(4, ["Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama"], X_ATACAMA, "ch3"),
            cl.day(5, ["Lagunes Miscanti et Miñiques", "The Miscanti and Miñiques lagoons", "Lagunas Miscanti y Miñiques"], X_LAGUNAS, "pt7"),
            cl.day(6, ["San Pedro de Atacama", "San Pedro de Atacama", "San Pedro de Atacama"], ["Temps libre, ou les geysers du Tatio à l'aube en option, puis vol vers Santiago.", "Free time, or the Tatio geysers at dawn as an option, then a flight to Santiago.", "Tiempo libre, o los géiseres del Tatio al amanecer opcional, y vuelo a Santiago."], "pt8"),
          ]),
        cl.chapter(["L'île de Pâques", "Easter Island", "La isla de Pascua"], ["Les moaï de Rapa Nui.", "The moai of Rapa Nui.", "Los moái de Rapa Nui."],
          ["mc6"],
          [
            cl.day(7, ["Santiago – île de Pâques", "Santiago – Easter Island", "Santiago – isla de Pascua"], ["Cinq heures de vol au-dessus du Pacifique jusqu'à Rapa Nui, accueil avec un collier de fleurs.", "Five hours' flight over the Pacific to Rapa Nui, welcome with a flower lei.", "Cinco horas de vuelo sobre el Pacífico hasta Rapa Nui, recibimiento con un collar de flores."], "mc6"),
            cl.day(8, ["Rano Raraku – Anakena", "Rano Raraku – Anakena", "Rano Raraku – Anakena"], X_RAPA1, "mc6"),
            cl.day(9, ["Orongo – Akivi – Tahai", "Orongo – Akivi – Tahai", "Orongo – Akivi – Tahai"], X_RAPA2, "mc6"),
            cl.day(10, ["Île de Pâques – Santiago", "Easter Island – Santiago", "Isla de Pascua – Santiago"], ["Vol retour vers Santiago.", "Flight back to Santiago.", "Vuelo de regreso a Santiago."], "mc4"),
            cl.day(11, ...dep(SCL), "mc7"), cl.day(12, T_HOME, HOME, "mc6"),
          ]),
      ],
    }),

    cl.trip({
      slug: "chili-merveilles-du-chili-patagonie-ile-de-paques-15j",
      name: ["Merveilles du Chili, Patagonie et île de Pâques : Torres del Paine, l'Atacama et les moaï", "Wonders of Chile, Patagonia and Easter Island: Torres del Paine, the Atacama and the moai", "Maravillas de Chile, Patagonia e isla de Pascua: Torres del Paine, el Atacama y los moái"],
      tagline: ["Les trois Chili : les glaces du sud, le désert du nord et l'île des moaï", "The three Chiles: the southern ice, the northern desert and the island of the moai", "Los tres Chiles: los hielos del sur, el desierto del norte y la isla de los moái"],
      description: [
        "Le grand tour du Chili en groupe de 16 personnes au plus : la Patagonie et Torres del Paine depuis Puerto Natales, Santiago et Valparaíso, San Pedro de Atacama, ses lagunes et ses geysers, puis trois nuits sur l'île de Pâques.",
        "The grand tour of Chile in a group of 16 at most: Patagonia and Torres del Paine from Puerto Natales, Santiago and Valparaíso, San Pedro de Atacama, its lagoons and geysers, then three nights on Easter Island.",
        "La gran vuelta de Chile en grupo de 16 personas como máximo: la Patagonia y Torres del Paine desde Puerto Natales, Santiago y Valparaíso, San Pedro de Atacama, sus lagunas y sus géiseres, y tres noches en la isla de Pascua.",
      ],
      includes: INC(13, 16, ",Vols intérieurs"),
      price: 7624, nights: 13, departureFrom: "Genève", image: "pt1",
      theme: "adventure", feeling: "challenged", travelerTypes: "couples,groups,solo", maxGuests: 16, order: -48988,
      chapters: [
        cl.chapter(["La Patagonie", "Patagonia", "La Patagonia"], ["Puerto Natales et Torres del Paine.", "Puerto Natales and Torres del Paine.", "Puerto Natales y Torres del Paine."],
          ["pt1", "pt2", "pt3"],
          [
            cl.day(1, ...arr(SCL), "pt4"),
            cl.day(2, ["Punta Arenas – Puerto Natales", "Punta Arenas – Puerto Natales", "Punta Arenas – Puerto Natales"], ["Vol vers la Patagonie et route jusqu'à Puerto Natales.", "Flight to Patagonia and the drive to Puerto Natales.", "Vuelo a la Patagonia y carretera hasta Puerto Natales."], "pt2"),
            cl.day(3, ["Torres del Paine", "Torres del Paine", "Torres del Paine"], X_PAINE, "pt1"),
            cl.day(4, ["Puerto Natales – Punta Arenas", "Puerto Natales – Punta Arenas", "Puerto Natales – Punta Arenas"], ["Retour à Punta Arenas, au bord du détroit de Magellan.", "Back to Punta Arenas, on the Strait of Magellan.", "Regreso a Punta Arenas, a orillas del estrecho de Magallanes."], "pt3"),
            cl.day(5, ["Punta Arenas – Santiago", "Punta Arenas – Santiago", "Punta Arenas – Santiago"], ["Vol vers Santiago.", "Flight to Santiago.", "Vuelo a Santiago."], "pt4"),
            cl.day(6, ["Valparaíso", "Valparaíso", "Valparaíso"], X_VALPO, "pt5"),
          ]),
        cl.chapter(["Le désert d'Atacama", "The Atacama Desert", "El desierto de Atacama"], ["Lagunes et geysers.", "Lagoons and geysers.", "Lagunas y géiseres."],
          ["pt6", "pt7", "pt8"],
          [
            cl.day(7, ["Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama", "Calama – San Pedro de Atacama"], X_ATACAMA, "pt6"),
            cl.day(8, ["Lagunes Miscanti et Miñiques", "The Miscanti and Miñiques lagoons", "Lagunas Miscanti y Miñiques"], X_LAGUNAS, "pt7"),
            cl.day(9, ["Geysers du Tatio – Santiago", "Tatio geysers – Santiago", "Géiseres del Tatio – Santiago"], ["Les geysers du Tatio à l'aube en option, puis vol vers Santiago.", "The Tatio geysers at dawn as an option, then a flight to Santiago.", "Los géiseres del Tatio al amanecer opcional, y vuelo a Santiago."], "pt8"),
          ]),
        cl.chapter(["L'île de Pâques", "Easter Island", "La isla de Pascua"], ["Les moaï de Rapa Nui.", "The moai of Rapa Nui.", "Los moái de Rapa Nui."],
          ["mc6"],
          [
            cl.day(10, ["Santiago – île de Pâques", "Santiago – Easter Island", "Santiago – isla de Pascua"], ["Vol vers Rapa Nui, au milieu du Pacifique.", "Flight to Rapa Nui, in the middle of the Pacific.", "Vuelo a Rapa Nui, en medio del Pacífico."], "mc6"),
            cl.day(11, ["Rano Raraku – Anakena", "Rano Raraku – Anakena", "Rano Raraku – Anakena"], X_RAPA1, "mc6"),
            cl.day(12, ["Orongo – Akivi – Tahai", "Orongo – Akivi – Tahai", "Orongo – Akivi – Tahai"], X_RAPA2, "mc6"),
            cl.day(13, ["Île de Pâques – Santiago", "Easter Island – Santiago", "Isla de Pascua – Santiago"], ["Vol retour vers Santiago.", "Flight back to Santiago.", "Vuelo de regreso a Santiago."], "pt4"),
            cl.day(14, ...dep(SCL), "pt4"), cl.day(15, T_HOME, HOME, "pt1"),
          ]),
      ],
    }),
  ];

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
