# Globale Explore Tours — Site web

Site Next.js trilingue (FR / EN / ES) pour Globale Explore Tours, agence d'excursions .
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

## Publier un article de blog par API

`POST /api/blog-posts` crée un article sans passer par l'admin ni par la base de données —
utile pour les scripts et l'automatisation. Désactivé tant que `BLOG_API_KEY` n'est pas défini
(clé aléatoire d'au moins 32 caractères, ex. `openssl rand -hex 32`) dans les variables
d'environnement Vercel. Cette clé donne le même pouvoir qu'un compte admin : ne jamais la
committer ni la partager.

```bash
curl -X POST https://www.globaleexploretours.com/api/blog-posts \
  -H "Authorization: Bearer $BLOG_API_KEY" -H "Content-Type: application/json" \
  -d '{"slug":"mon-article","title":"Titre","content":"<p>…</p>"}'
```

Champs optionnels : `titleEn/Es`, `excerpt(En/Es)`, `contentEn/Es`, `image` (URL https),
`category`, `author`, `featured`, `order`. Un slug existant renvoie `409` (création uniquement —
les modifications passent par `/admin/blog`). Exemple complet :
`BLOG_API_KEY=… npx tsx scripts/publish-blog-seo-batch-1.ts`.

## Notes de build

- `next.config.ts` a `typescript.ignoreBuildErrors: true` (pattern volontaire du playbook pour itérer vite) — ne pas s'y fier pour la vérification de types, lancer `npx tsc --noEmit` séparément si besoin.
- `sitemap.ts` interroge la DB au build — nécessite un `DATABASE_URL` valide (Neon) pour que `npm run build` aboutisse.
- Design tokens actuels dans `globals.css` (palette teal/clay Agadir, polices Fraunces + Inter) sont **provisoires**, en attente de validation de la direction artistique avec le client.

Voir `docs/brief-projet-recherche.md` (dossier client) pour le cahier des charges complet, le catalogue de circuits, et les infos manquantes à obtenir du client.
