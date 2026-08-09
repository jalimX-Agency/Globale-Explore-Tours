# Plan du site — Globale Explore Tours

Architecture inspirée du modèle Black Tomato (pages destination en jump-nav) adaptée au catalogue
d'excursions d'Agadir. Trilingue FR/EN/ES sur chaque URL (préfixe de langue via le contexte i18n,
pas de sous-dossiers `/en/`, `/es/` — cohérent avec le pattern `luxury-hospitality-nextjs`).

## Arborescence

```
/                              Accueil — vidéo hero, réassurance, excursions vedettes, avis, CTA
/excursions                    Hub catalogue — Vue d'ensemble / Activités / Tours / Avis / FAQ (ancres)
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

/admin                         Dashboard (protégé)
/admin/login                   Connexion admin
/admin/excursions              CRUD Tour
/admin/sejours                 CRUD séjours multi-jours (Tour, category="multi-day")
/admin/blog                    CRUD BlogPost
/admin/galerie                 CRUD GalleryImage
/admin/avis                    CRUD Testimonial
/admin/reservations            Liste des Booking (demandes)
/admin/messages                Liste des ContactMessage
```

## Navigation principale (header)

`Accueil · Excursions · Séjours multi-jours · À propos · Blog · Contact` + sélecteur de langue (FR/EN/ES) + CTA "Réserver"

## Page `/excursions` — pattern jump-nav (repris de blacktomato.com/destinations/morocco)

Ancres : `#activites` · `#tours` · `#multi-jours` · `#avis` · `#faq` — chaque excursion pointe vers
`/excursions/[slug]` pour la fiche détaillée et le formulaire de demande.

## Statut

- [x] Structure définie
- [x] Routes scaffoldées (pages stub, compilent)
- [x] `sitemap.ts` mis à jour avec ces routes statiques
- [ ] Contenu réel de chaque page (texte + photos client)
