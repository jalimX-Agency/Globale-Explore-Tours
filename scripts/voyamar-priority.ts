// Puts supplier circuits first everywhere trips are listed. Every list on the site sorts by
// `featured` desc then `order` asc, so supplier circuits get featured=true with a negative
// order, and the older trips of the same destination lose `featured` (their own order is kept,
// so they stay in their previous sequence, just after the supplier circuits).
// Add a destination's slugs here when its circuits are published, then run:
//   npx tsx scripts/voyamar-priority.ts
// Safe to re-run.

process.loadEnvFile(".env");

// destination slug -> supplier circuit slugs, in display order
const PRIORITY: Record<string, string[]> = {
  maroc: [
    "maroc-circuit-villes-imperiales-8j",
    "maroc-grand-sud-kasbahs-8j",
    "maroc-desert-riad-kasbah-5j",
    "maroc-fes-chefchaouen-5j",
  ],
  kenya: [
    "kenya-essentiel-amboseli-tsavo-mombasa-8j",
    "kenya-evasion-masai-mara-amboseli-10j",
    "kenya-decouvertes-masai-mara-mombasa-12j",
    "kenya-autrement-samburu-masai-mara-14j",
    "kenya-mombasa-tsavo-plage-safari-10j",
    "kenya-train-savanes-plages-9j",
    "kenya-tanzanie-combine-safari-12j",
  ],
  egypte: [
    "egypte-croisiere-fil-du-nil-8j",
    "egypte-incontournables-nil-8j",
    "egypte-croisiere-nil-pharaonique-8j",
    "egypte-le-caire-pyramides-4j",
    "egypte-dahabeya-nil-8j",
    "egypte-paysages-nil-caire-9j",
    "egypte-decouvertes-caire-nil-9j",
    "egypte-splendeurs-caire-nil-12j",
    "egypte-trois-capitales-nil-privatif-10j",
    "egypte-nil-mer-rouge-hurghada-15j",
    "egypte-jordanie-combine-nil-petra-16j",
    "egypte-nil-oasis-fayoum-13j",
    "egypte-nil-lac-nasser-abou-simbel-11j",
    "egypte-caire-nil-dahabeya-9j",
    "egypte-odyssee-pharaons-11j",
    "egypte-secrets-nil-caire-assouan-16j",
  ],
  tanzanie: [
    "tanzanie-zanzibar-epices-ocean-10j",
    "tanzanie-saadani-safari-zanzibar-11j",
    "tanzanie-essentiel-safari-nord-8j",
    "tanzanie-escapade-terre-sauvage-10j",
    "tanzanie-couleurs-quatre-parcs-10j",
    "tanzanie-autrement-lac-natron-11j",
    "tanzanie-evasion-safari-zanzibar-11j",
  ],
  "afrique-du-sud": [
    "afrique-du-sud-safari-dream-kruger-eswatini-10j",
    "afrique-du-sud-le-cap-kruger-eswatini-13j",
    "afrique-du-sud-intimiste-petit-groupe-13j",
    "afrique-du-sud-drakensberg-lesotho-le-cap-15j",
    "afrique-du-sud-grand-tour-route-jardin-18j",
    "afrique-du-sud-le-cap-kruger-victoria-chobe-13j",
  ],
  namibie: [
    "namibie-decouverte-etosha-sossusvlei-12j",
    "namibie-couleurs-4x4-petit-groupe-14j",
    "namibie-victoria-chobe-caprivi-etosha-16j",
  ],
  senegal: [
    "senegal-authentique-slow-travel-9j",
    "senegal-decouverte-saint-louis-lompoul-9j",
    "senegal-visages-saloum-casamance-9j",
  ],
  tunisie: ["tunisie-mer-oasis-sahara-8j", "tunisie-saharienne-djerba-ksar-ghilane-8j"],
  botswana: ["botswana-okavango-moremi-chobe-12j"],
  rwanda: ["rwanda-gorilles-akagera-nyungwe-kivu-12j"],
  thailande: [
    "thailande-incontournables-bangkok-chiang-mai-10j",
    "thailande-bangkok-khao-lak-sejour-11j",
    "thailande-sud-khao-sok-krabi-koh-lanta-11j",
    "thailande-paradis-phuket-krabi-phi-phi-12j",
    "thailande-intimiste-kanchanaburi-chiang-mai-13j",
    "thailande-nord-sud-khao-sok-khao-lak-15j",
    "thailande-joyaux-sud-phang-nga-phi-phi-12j",
    "thailande-grand-tour-koh-lanta-krabi-17j",
  ],
  indonesie: [
    "indonesie-bali-ubud-plage-sejour-12j",
    "indonesie-bali-roue-libre-chauffeur-11j",
    "indonesie-instant-balinais-prive-11j",
    "indonesie-bali-passion-12j",
    "indonesie-bali-ubud-gili-sejour-14j",
    "indonesie-bali-autre-angle-prive-14j",
    "indonesie-trio-iles-bali-nusa-penida-lembongan-11j",
    "indonesie-boheme-balinaise-gili-15j",
    "indonesie-bali-authentique-14j",
    "indonesie-reverie-balinaise-chauffeur-16j",
    "indonesie-esprit-balinais-prive-15j",
    "indonesie-perles-bali-java-bromo-13j",
    "indonesie-bali-java-celebes-toraja-17j",
    "indonesie-evasion-privilege-bali-12j",
  ],
  cambodge: [
    "cambodge-magie-angkor-battambang-kampot-14j",
    "cambodge-intimiste-angkor-koh-sdach-14j",
    "cambodge-indispensable-prive-11j",
    "cambodge-thailande-angkor-chiang-mai-13j",
    "cambodge-laos-luang-prabang-angkor-12j",
    "cambodge-immersion-mondulkiri-ratanakiri-17j",
  ],
  "sri-lanka": [
    "sri-lanka-incontournables-sigiriya-kandy-galle-10j",
    "sri-lanka-grand-tour-anuradhapura-udawalawe-12j",
    "sri-lanka-magie-haputale-yala-12j",
    "sri-lanka-experiences-knuckles-gal-oya-13j",
    "sri-lanka-merveille-ceylan-prive-11j",
    "sri-lanka-aventure-trincomalee-mirissa-prive-12j",
    "sri-lanka-grand-tour-jaffna-prive-14j",
    "sri-lanka-sigiriya-kandy-plage-beruwala-10j",
    "sri-lanka-grand-tour-maldives-15j",
  ],
  vietnam: [
    "vietnam-incontournables-halong-hoi-an-mekong-12j",
    "vietnam-magie-halong-hue-delta-mekong-15j",
    "vietnam-intimiste-pu-luong-lan-ha-17j",
    "vietnam-cambodge-incontournables-angkor-15j",
  ],
  malaisie: [
    "malaisie-joyaux-malacca-ipoh-penang-10j",
    "malaisie-a-la-folie-taman-negara-cameron-penang-prive-10j",
    "malaisie-sur-la-route-autotour-malacca-penang-10j",
    "malaisie-trio-malacca-kuala-lumpur-langkawi-prive-10j",
    "malaisie-passion-taman-negara-tioman-prive-10j",
    "malaisie-kuala-lumpur-langkawi-rebak-10j",
    "malaisie-kuala-lumpur-perhentian-10j",
  ],
  chine: [
    "chine-joyaux-pekin-pingyao-xian-shanghai-12j",
    "chine-incontournables-shaolin-suzhou-13j",
    "chine-passion-pekin-guilin-hong-kong-15j",
    "chine-essentiels-pekin-xian-shanghai-prive-14j",
    "chine-tresors-du-yunnan-13j",
    "chine-hong-kong-guilin-pekin-15j",
    "chine-pays-des-pandas-chengdu-prive-16j",
    "chine-millenaire-croisiere-yangtze-17j",
  ],
  japon: [
    "japon-incontournables-himeji-kyoto-fuji-tokyo-12j",
    "japon-trio-tokyo-hakone-kyoto-liberte-12j",
    "japon-megalopoles-tokyo-kyoto-koya-hiroshima-liberte-14j",
    "japon-magie-hiroshima-koya-takayama-fuji-14j",
    "japon-beaute-tokyo-osaka-hiroshima-kyoto-liberte-16j",
    "japon-famille-tokyo-kyoto-universal-liberte-16j",
    "japon-esprit-shikoku-naoshima-kyoto-liberte-16j",
    "japon-instant-manga-okayama-miyajima-liberte-17j",
    "japon-panorama-fukuoka-okinawa-liberte-21j",
    "japon-autre-angle-kinosaki-matsue-tsuwano-liberte-21j",
    "japon-merveilles-du-nord-hokkaido-tohoku-18j",
  ],
  "coree-du-sud": [
    "coree-du-sud-pays-du-matin-calme-12j",
    "coree-du-sud-panorama-liberte-seoul-busan-12j",
    "coree-du-sud-japon-passion-liberte-15j",
  ],
  mongolie: [
    "mongolie-pays-des-nomades-gobi-orkhon-15j",
  ],
  laos: [
    "laos-passion-luang-prabang-vang-vieng-10j",
    "laos-experience-nong-khiaw-nam-ou-prive-13j",
    "laos-grand-tour-indochine-cambodge-vietnam-21j",
  ],
  philippines: [
    "philippines-manille-boracay-11j",
    "philippines-ile-en-ile-bohol-dumaguete-siquijor-14j",
    "philippines-bohol-chocolate-hills-prive-11j",
    "philippines-beaute-visayas-siquijor-bohol-12j",
    "philippines-passion-palawan-coron-el-nido-11j",
  ],
  ouzbekistan: [
    "ouzbekistan-intimiste-khiva-boukhara-samarcande-12j",
  ],
  inde: [
    "inde-magie-du-rajasthan-12j",
    "inde-joyaux-inde-du-sud-tamil-nadu-kerala-11j",
    "inde-rajasthan-intimiste-thar-bundi-ranthambore-15j",
    "inde-merveilles-du-kerala-munnar-backwaters-14j",
    "inde-beaute-du-ladakh-prive-14j",
  ],
  reunion: [
    "reunion-joyau-ocean-indien-cirques-volcan-10j",
    "reunion-autotour-volcans-lagons-11j",
  ],
  maldives: [
    "maldives-sri-lanka-incontournables-adaaran-13j",
  ],
  jordanie: [
    "jordanie-incontournables-chateaux-petra-wadi-rum-8j",
    "jordanie-entre-nous-salt-petra-mer-morte-8j",
    "jordanie-express-petra-wadi-rum-5j",
    "jordanie-circuit-et-sejour-mer-morte-ou-aqaba-10j",
    "jordanie-intimiste-petra-wadi-rum-aqaba-8j",
    "jordanie-etoile-aqaba-petra-wadi-rum-privatif-8j",
    "jordanie-legendes-privatif-petra-mer-morte-8j",
    "jordanie-magnifique-privatif-5-etoiles-10j",
  ],
  "emirats-arabes-unis": [
    "emirats-arabes-unis-dubai-abu-dhabi-al-ain-musandam-7j",
    "emirats-arabes-unis-il-etait-une-fois-6j",
    "emirats-arabes-unis-oman-entre-mers-et-deserts-12j",
  ],
  israel: [
    "israel-super-bleu-tel-aviv-massada-jerusalem-galilee-8j",
    "israel-escapade-autour-de-jerusalem-8j",
  ],
  oman: [
    "oman-decouverte-mascate-nizwa-wahiba-sur-8j",
  ],
  "etats-unis": [
    "etats-unis-new-york-big-apple-6j",
    "etats-unis-new-york-magie-manhattan-high-line-6j",
    "etats-unis-new-york-frenchies-city-pass-6j",
    "etats-unis-new-york-big-apple-autrement-bronx-brooklyn-6j",
    "etats-unis-incontournables-est-boston-washington-9j",
    "etats-unis-essentiel-floride-keys-everglades-9j",
    "etats-unis-cap-sur-la-floride-saint-augustine-9j",
    "etats-unis-floride-croisiere-msc-bahamas-12j",
    "etats-unis-decouverte-louisiane-plantations-bayous-9j",
    "etats-unis-new-york-intimiste-7j",
    "etats-unis-new-york-noel-tresors-7j",
    "etats-unis-new-york-chicago-niagara-12j",
    "etats-unis-new-york-key-west-charleston-savannah-13j",
    "etats-unis-rythmes-du-sud-houston-memphis-nashville-12j",
    "etats-unis-grand-tour-du-sud-atlanta-key-west-14j",
    "etats-unis-ame-du-sud-texas-bayous-atlanta-14j",
    "etats-unis-casinos-aux-bayous-route-66-14j",
    "etats-unis-music-road-dallas-memphis-chicago-14j",
    "etats-unis-est-intimiste-niagara-cape-cod-12j",
    "etats-unis-texas-louisiane-intimiste-14j",
    "etats-unis-south-music-intimiste-blues-bayous-15j",
    "etats-unis-american-ouest-route-66-grand-canyon-san-francisco-10j",
    "etats-unis-cap-sur-l-ouest-san-francisco-los-angeles-11j",
    "etats-unis-legendes-de-l-ouest-lake-powell-sequoia-11j",
    "etats-unis-apercu-de-l-ouest-grand-canyon-las-vegas-8j",
    "etats-unis-incontournables-ouest-cote-pacifique-canyons-14j",
    "etats-unis-rocheuses-lac-tahoe-yellowstone-rushmore-16j",
    "etats-unis-tresors-de-l-ouest-joshua-tree-yosemite-12j",
    "etats-unis-grand-tour-de-l-ouest-arches-yellowstone-17j",
    "etats-unis-ouest-et-hawai-honolulu-14j",
    "etats-unis-ouest-sauvage-moab-yellowstone-badlands-14j",
    "etats-unis-ouest-en-famille-universal-yosemite-15j",
    "etats-unis-ouest-et-polynesie-tahiti-moorea-21j",
    "etats-unis-ouest-entre-nous-10-voyageurs-15j",
    "etats-unis-ouest-intimiste-zion-highway-1-15j",
    "etats-unis-deserts-et-canyons-intimistes-zion-14j",
    "etats-unis-grand-tour-des-rocheuses-intimiste-santa-fe-16j",
    "etats-unis-echappee-sauvage-intimiste-glacier-seattle-15j",
  ],
  canada: [
    "canada-cap-sur-la-belle-province-quebec-saguenay-8j",
    "canada-i-love-canada-toronto-niagara-quebec-8j",
    "canada-incontournables-du-canada-niagara-tadoussac-10j",
    "canada-beautes-de-l-est-canadien-12j",
    "canada-magie-du-canada-gaspesie-14j",
    "canada-est-canadien-intimiste-12j",
    "canada-pays-du-homard-bleu-gaspesie-maritimes-14j",
    "canada-autotour-le-quebec-c-est-chouette-14j",
    "canada-decouverte-des-rocheuses-canadiennes-11j",
    "canada-grandeur-canadienne-saint-laurent-rocheuses-18j",
    "canada-usa-canada-west-rocheuses-yellowstone-15j",
    "canada-i-love-usa-canada-quebec-new-york-11j",
    "canada-merveilles-usa-canada-boston-washington-12j",
    "canada-au-coeur-de-l-hiver-canadien-saguenay-9j",
    "canada-naya-hiver-au-lac-morency-8j",
    "canada-autotour-entre-glace-et-erables-9j",
    "canada-autotour-toi-moi-et-le-froid-10j",
  ],
  mexique: [
    "mexique-cap-sur-le-yucatan-palenque-chichen-itza-9j",
    "mexique-decouverte-du-yucatan-petit-groupe-9j",
    "mexique-cap-sur-le-mexique-mexico-chiapas-yucatan-11j",
    "mexique-incontournables-oaxaca-chiapas-yucatan-12j",
    "mexique-hola-mexico-privatif-12j",
    "mexique-couleurs-du-mexique-villes-coloniales-14j",
  ],
  "costa-rica": [
    "costa-rica-cap-sur-le-costa-rica-arenal-rincon-monteverde-10j",
    "costa-rica-incontournables-du-costa-rica-10j",
    "costa-rica-hola-costa-rica-privatif-manuel-antonio-11j",
    "costa-rica-tresors-du-costa-rica-tarcoles-manuel-antonio-12j",
    "costa-rica-magie-du-costa-rica-tortuguero-13j",
    "costa-rica-essentiel-costa-rica-nicaragua-granada-leon-12j",
    "costa-rica-splendeurs-du-costa-rica-corcovado-dota-13j",
  ],
  panama: [
    "panama-decouverte-du-panama-canal-embera-portobelo-10j",
    "panama-splendeurs-du-panama-boca-chica-boquete-13j",
    "panama-couleurs-du-panama-coiba-boquete-bocas-14j",
  ],
  guatemala: [
    "guatemala-decouverte-du-guatemala-tikal-atitlan-12j",
    "guatemala-cap-sur-le-guatemala-copan-rio-dulce-12j",
    "guatemala-couleurs-du-guatemala-et-du-mexique-19j",
  ],
  belize: [
    "belize-guatemala-et-belize-tikal-atitlan-ambergris-16j",
  ],
  perou: [
    "perou-incontournables-du-perou-titicaca-machu-picchu-11j",
    "perou-hola-perou-nasca-arequipa-machu-picchu-11j",
    "perou-impressions-du-perou-colca-titicaca-cuzco-14j",
  ],
  bolivie: [
    "bolivie-cap-sur-la-bolivie-sucre-uyuni-titicaca-15j",
    "bolivie-couleurs-du-perou-et-de-la-bolivie-17j",
    "bolivie-perles-des-andes-chili-bolivie-perou-17j",
  ],
  equateur: [
    "equateur-decouverte-de-l-equateur-amazonie-cuenca-13j",
    "equateur-tresors-de-l-equateur-et-des-galapagos-13j",
  ],
  colombie: [
    "colombie-cap-sur-la-colombie-medellin-carthagene-10j",
    "colombie-couleurs-de-colombie-salento-guatape-11j",
  ],
  chili: [
    "chili-couleurs-du-chili-patagonie-atacama-13j",
    "chili-merveilles-du-chili-atacama-ile-de-paques-12j",
    "chili-merveilles-du-chili-patagonie-ile-de-paques-15j",
  ],
  argentine: [
    "argentine-decouverte-de-l-argentine-salta-iguazu-10j",
    "argentine-du-tango-a-la-samba-buenos-aires-iguazu-rio-10j",
    "argentine-apercu-d-argentine-pampa-ushuaia-calafate-bariloche-13j",
    "argentine-au-coeur-de-la-patagonie-ushuaia-torres-del-paine-14j",
    "argentine-couleurs-andines-atacama-salta-buenos-aires-14j",
    "argentine-merveilles-d-argentine-patagonie-nord-ouest-15j",
    "argentine-impressions-d-argentine-ushuaia-jujuy-iguazu-16j",
    "argentine-decouverte-du-bout-du-monde-cap-horn-16j",
  ],
  bresil: [
    "bresil-echappee-bresilienne-rio-buzios-9j",
    "bresil-apercu-du-bresil-rio-paraty-9j",
    "bresil-ola-brasil-privatif-rio-iguacu-salvador-10j",
    "bresil-merveilles-du-bresil-iguacu-rio-salvador-10j",
    "bresil-incontournables-du-bresil-salvador-paraty-iguacu-11j",
    "bresil-bresil-d-emotions-rio-lencois-jericoacoara-12j",
    "bresil-impressions-du-bresil-ouro-preto-iguacu-paraty-14j",
  ],
  italie: [
    "italie-venise-iles-de-la-lagune-4j",
    "italie-cap-sur-les-pouilles-matera-alberobello-lecce-8j",
    "italie-decouverte-de-la-sicile-palerme-etna-syracuse-8j",
    "italie-cap-sur-milan-et-les-lacs-italiens-8j",
    "italie-cap-sur-rome-florence-et-venise-8j",
    "italie-en-etoile-depuis-terracina-rome-naples-capri-8j",
    "italie-incontournables-de-naples-et-des-pouilles-8j",
    "italie-cap-sur-la-toscane-et-les-cinque-terre-8j",
    "italie-cap-sur-rome-naples-et-la-cote-amalfitaine-8j",
    "italie-cap-sur-la-sardaigne-8j",
    "italie-cap-sur-les-iles-eoliennes-stromboli-vulcano-8j",
    "italie-cap-sur-l-italie-du-nord-au-sud-10j",
  ],
  espagne: [
    "espagne-nouvel-an-a-madrid-ou-seville-4j",
    "espagne-cap-sur-l-andalousie-grenade-cordoue-seville-8j",
    "espagne-cap-sur-les-canaries-tenerife-gran-canaria-la-gomera-8j",
    "espagne-cap-sur-madrid-et-la-castille-tolede-salamanque-8j",
  ],
  turquie: [
    "turquie-istanbul-romantique-4j",
    "turquie-merveilles-de-la-turquie-cappadoce-pamukkale-ephese-8j",
  ],
  pologne: [
    "pologne-cracovie-en-liberte-noel-nouvel-an-4j",
    "pologne-cap-sur-cracovie-et-les-tatras-5j",
    "pologne-de-varsovie-a-cracovie-privatif-6j",
    "pologne-merveilles-de-la-pologne-cracovie-gdansk-varsovie-8j",
    "pologne-cap-sur-la-pologne-gdansk-torun-wroclaw-cracovie-8j",
  ],
  norvege: [
    "norvege-escapade-dans-les-fjords-enneiges-5j",
    "norvege-decouverte-des-fjords-geiranger-bergen-8j",
    "norvege-cap-sur-les-capitales-scandinaves-oslo-copenhague-stockholm-8j",
    "norvege-cap-sur-la-norvege-en-hiver-tromso-lofoten-7j",
    "norvege-norvege-du-nord-tromso-lofoten-cap-nord-8j",
    "norvege-tresors-de-l-arctique-cap-nord-laponie-8j",
    "norvege-norvege-du-sud-en-train-et-en-bateau-8j",
    "norvege-le-meilleur-des-fjords-route-atlantique-lysefjord-10j",
    "norvege-cap-sur-la-norvege-cap-nord-lofoten-bergen-11j",
    "norvege-cap-sur-la-norvege-et-les-iles-lofoten-11j",
    "norvege-cap-sur-la-scandinavie-norvege-finlande-suede-14j",
  ],
  islande: [
    "islande-islande-du-sud-autotour-5j",
    "islande-cap-sur-l-islande-en-hiver-6j",
    "islande-splendeurs-boreales-8j",
    "islande-aventure-islandaise-tour-de-l-ile-8j",
    "islande-charme-de-l-islande-myvatn-snaefellsnes-8j",
    "islande-merveilles-de-l-islande-fjords-de-l-ouest-12j",
  ],
  irlande: [
    "irlande-cap-sur-l-irlande-du-nord-chaussee-des-geants-5j",
    "irlande-cap-sur-l-irlande-kerry-dingle-connemara-8j",
    "irlande-beautes-irlandaises-connemara-moher-kerry-8j",
    "irlande-de-l-irlande-sauvage-aux-highlands-d-ecosse-12j",
  ],
  portugal: [
    "portugal-decouverte-de-l-algarve-8j",
    "portugal-magie-du-portugal-lisbonne-porto-8j",
    "portugal-au-fil-du-douro-croisiere-8j",
  ],
  autriche: [
    "autriche-merveilles-de-vienne-bratislava-budapest-5j",
    "autriche-tresors-d-europe-centrale-vienne-budapest-prague-8j",
  ],
  "republique-tcheque": [
    "republique-tcheque-prague-ville-aux-cent-clochers-4j",
    "republique-tcheque-cap-sur-prague-et-vienne-cesky-krumlov-6j",
  ],
  "royaume-uni": [
    "royaume-uni-terres-celtiques-irlande-ecosse-6j",
    "royaume-uni-charmes-et-traditions-anglaises-cornouailles-8j",
    "royaume-uni-cap-sur-l-ecosse-highlands-skye-8j",
  ],
  croatie: [
    "croatie-la-croatie-d-ile-en-ile-en-bateau-10j",
  ],
  france: [
    "france-merveilles-de-la-corse-8j",
  ],
  malte: [
    "malte-decouverte-de-malte-la-valette-gozo-8j",
  ],
  georgie: [
    "georgie-cap-sur-la-georgie-tbilissi-kakhetie-kazbegi-8j",
  ],
  hongrie: [
    "hongrie-decouverte-de-budapest-privatif-4j",
  ],
  montenegro: [
    "montenegro-essentiel-du-montenegro-kotor-budva-8j",
  ],
  finlande: [
    "finlande-laponie-rovaniemi-ou-suomu-5j",
    "finlande-echappee-lapone-ranua-tornio-5j",
    "finlande-naya-club-saaga-yllas-5j",
    "finlande-multi-activites-akaslompolo-7j",
    "finlande-reveillon-du-nouvel-an-en-laponie-7j",
    "finlande-levi-hotel-and-spa-multi-activites-8j",
    "finlande-finlande-en-ete-levi-soleil-de-minuit-8j",
    "finlande-cap-nord-lofoten-et-les-trois-laponies-8j",
  ],
  suede: [
    "suede-cap-sur-la-suede-stockholm-bohuslan-malmo-8j",
    "suede-cap-sur-la-baltique-stockholm-helsinki-riga-gdansk-13j",
  ],
  "iles-feroe": [
    "iles-feroe-cap-sur-les-iles-feroe-6j",
  ],
  estonie: [
    "estonie-marches-de-noel-a-tallinn-4j",
    "estonie-tresors-des-pays-baltes-tallinn-riga-courlande-vilnius-8j",
  ],
  lettonie: [
    "lettonie-marches-de-noel-a-riga-4j",
    "lettonie-au-coeur-des-capitales-baltes-riga-tallinn-5j",
    "lettonie-splendeurs-des-pays-baltes-riga-vilnius-tallinn-8j",
  ],
  lituanie: [
    "lituanie-marches-de-noel-a-vilnius-4j",
    "lituanie-splendeurs-des-pays-baltes-de-vilnius-a-tallinn-8j",
  ],
};

async function main() {
  const { PrismaClient } = await import("@prisma/client");
  const db = new PrismaClient();
  try {
    let base = -100000;
    for (const [destinationSlug, slugs] of Object.entries(PRIORITY)) {
      const destination = await db.destination.findUnique({ where: { slug: destinationSlug }, select: { id: true } });
      if (!destination) throw new Error(`Unknown destination: ${destinationSlug}`);
      const found = await db.tour.findMany({ where: { slug: { in: slugs } }, select: { slug: true } });
      const missing = slugs.filter((s) => !found.some((f) => f.slug === s));
      if (missing.length) throw new Error(`Unknown tour slug(s) for ${destinationSlug}: ${missing.join(", ")}`);

      for (const [i, slug] of slugs.entries()) {
        await db.tour.update({ where: { slug }, data: { featured: true, order: base + i } });
      }
      const demoted = await db.tour.updateMany({
        where: { destinationId: destination.id, slug: { notIn: slugs }, featured: true },
        data: { featured: false },
      });
      console.log(`${destinationSlug}: ${slugs.length} supplier circuit(s) first, ${demoted.count} older trip(s) un-featured`);
      base += 1000;
    }
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
