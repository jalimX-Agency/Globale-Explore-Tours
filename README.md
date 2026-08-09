# Globale Explore Tours — Site web

Site Next.js trilingue (FR / EN / ES) pour Globale Explore Tours, agence d'excursions basée à Agadir.
Construit selon le playbook `luxury-hospitality-nextjs`.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · Prisma 6 + Neon Postgres ·
NextAuth (admin) · Cloudflare R2 (images) · Resend (emails) · Framer Motion · react-hook-form + zod

## Démarrage

```bash
npm install
cp .env.example .env.local   # remplir les variables (voir docs/brief-projet-recherche.md)
npm run db:push              # synchronise le schema Prisma vers Neon
npx tsx scripts/create-admin.ts contac@globaleexploretours.com "MotDePasseSolide!"
npm run dev
```

## Structure

- `src/app/` — pages publiques + `admin/` (dashboard protégé) + `api/`
- `src/components/` — composants UI (`ui/` = shadcn, `get/` = composants marque)
- `src/lib/i18n/` — contexte de langue + traductions `fr.ts` / `en.ts` / `es.ts`
- `prisma/schema.prisma` — modèles `Tour`, `BlogPost`, `GalleryImage`, `Testimonial`, `Booking` (demande, pas de paiement en ligne), `ContactMessage`, `User`

## Notes de build

- `next.config.ts` a `typescript.ignoreBuildErrors: true` (pattern volontaire du playbook pour itérer vite) — ne pas s'y fier pour la vérification de types, lancer `npx tsc --noEmit` séparément si besoin.
- `sitemap.ts` interroge la DB au build — nécessite un `DATABASE_URL` valide (Neon) pour que `npm run build` aboutisse.
- Design tokens actuels dans `globals.css` (palette teal/clay Agadir, polices Fraunces + Inter) sont **provisoires**, en attente de validation de la direction artistique avec le client.

Voir `docs/brief-projet-recherche.md` (dossier client) pour le cahier des charges complet, le catalogue de circuits, et les infos manquantes à obtenir du client.
