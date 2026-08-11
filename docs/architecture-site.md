# Plan du site — Globale Explore Tours

Architecture inspirée du modèle Black Tomato, désormais avec un vrai catalogue multi-destinations
(le client passe d'un catalogue Agadir-only à des voyages dans le monde entier, "comme Black Tomato").
Trilingue FR/EN/ES via un vrai routing par préfixe d'URL — `/fr/...`, `/en/...`, `/es/...` (chaque
langue est une page servie/indexée séparément, pas un simple toggle JS — nécessaire pour le
référencement, voir commit "add real i18n routing").

## Arborescence

```
/                              Accueil — vidéo hero, histoire (Mission), avis, "Start your Journey"
                                (par type de voyageur), excursions vedettes
/excursions                    Catalogue complet — filtrable par ?theme= et ?travelers=
/excursions/[slug]             Fiche excursion — galerie, description, inclus, avis, formulaire
/sejours-multi-jours           Circuits multi-jours (Merzouga, etc.)
/sejours-multi-jours/[slug]    Fiche circuit — itinéraire jour par jour
/transferts-aeroport           Transferts aéroport/port
/a-propos                      Histoire, les guides nommés (Momo, Hassane, Ahmed), avis TripAdvisor #1/92
/blog                          Journal (SEO/GEO)
/blog/[slug]                   Article
/contact                       Formulaire de contact + WhatsApp + carte
/reserver                      Formulaire de demande de réservation (récap excursion + coordonnées)
/mentions-legales              Mentions légales
/politique-de-confidentialite  Politique de confidentialité
/conditions-de-reservation     Conditions de réservation

/admin                         Dashboard (protégé) — login existe, CRUD pas encore construit
/admin/login                   Connexion admin
/admin/excursions              CRUD Tour (à construire)
/admin/sejours                 CRUD séjours multi-jours (à construire)
/admin/blog                    CRUD BlogPost (à construire)
/admin/galerie                 CRUD GalleryImage (à construire)
/admin/avis                    CRUD Testimonial (à construire)
/admin/reservations            Liste des Booking (à construire)
/admin/messages                Liste des ContactMessage (à construire)
```

## Navigation principale (header)

`Excursions · Expériences (menu par thème) · À propos` + icône "Plus" (Séjours multi-jours,
Transferts, Blog, Contact) + sélecteur de langue (FR/EN/ES) + CTA "Enquire Now" (accent rouge).

## Modèle de données — Destination

Le catalogue est maintenant structuré autour d'un vrai modèle `Destination` (pays), et non plus de
simples chaînes de texte sur `Tour`. Voir `prisma/schema.prisma`.

- **Maroc** : la destination réelle et principale — les 12 excursions Agadir existantes, données
  vérifiées (prix, durées, avis TripAdvisor réels).
- **5 destinations exemple** (Japon, Islande, Kenya, Italie, Maldives), une excursion signature
  chacune, avec itinéraire jour par jour (`ItineraryDay`) — contenu original écrit dans le style
  éditorial de Black Tomato, **mais ce sont des voyages de démonstration pour le nouveau catalogue,
  pas des offres vérifiées** : les prix sont des fourchettes indicatives, pas des devis obtenus
  auprès de prestataires terrain (hôtels, guides locaux, transport). À valider/ajuster avec le
  client avant toute vraie commercialisation.
- Aucun faux avis n'a été créé pour ces 5 destinations — les seuls témoignages du site restent les
  12 vrais avis TripAdvisor d'Agadir.

## Page `/excursions` — catalogue filtrable

Server component qui lit `?theme=` (adventure/culture/relax/family) et `?travelers=`
(family/couples/groups/honeymoon/solo, stocké sur `Tour.travelerTypes`, tags posés par nous sur les
17 excursions existantes) et filtre côté base de données. Alimente les liens déjà posés dans la nav
("Expériences") et dans la section homepage "Start your Journey" (types de voyageurs).

## Images

Toutes les photos (12 excursions Agadir + 5 voyages exemple + 6 destinations + 5 tuiles "type de
voyageur") viennent de Pexels (licence gratuite, usage commercial, pas d'attribution requise) —
jamais de photos scrapées depuis blacktomato.com. Stockées sur Cloudflare R2.

## Statut

- [x] Structure définie
- [x] Routes réelles (plus des stubs — homepage, `/excursions` filtrable, etc.)
- [x] `sitemap.ts` à jour, routing i18n réel (`/fr`, `/en`, `/es`)
- [x] Modèle `Destination` + catalogue Maroc (réel) + 5 destinations exemple (contenu original, prix indicatifs)
- [x] Photos réelles (Pexels) pour tout le catalogue actuel — plus de "Photo à venir" sur les tours seedés
- [ ] Dashboard admin (CRUD) — pas encore construit, tout le contenu passe par `src/lib/seed.ts`
- [ ] Validation client des prix/itinéraires des 5 destinations exemple avant mise en vente réelle
- [ ] Décision sur nomadsoultrips.com (toujours en attente depuis l'audit initial)
