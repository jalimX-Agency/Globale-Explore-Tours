import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { BLOG_DESTINATIONS } from "@/lib/blogDestinations";
import { LOCALES } from "@/lib/i18n/locales";

// Public pages are cached for 7 days (`revalidate` in each page file) so the database is not
// woken up by every crawler visit: Neon bills compute while it is awake, and a request at least
// every 5 minutes keeps it awake all month. Anything that changes content must therefore
// revalidate on demand — admin actions already do; these helpers cover the API routes.

/** Every public page. For changes that touch many pages (trips, destinations, menus). */
export function revalidateAllPages() {
  revalidatePath("/[locale]", "layout");
  revalidatePath("/sitemap.xml");
  revalidatePath("/llms.txt");
}

/** After a blog post is published: the blog pages plus the destination and trip pages that list it. */
export async function revalidateBlogPost(post: { slug: string; category: string }) {
  revalidatePath("/[locale]/blog", "page");
  revalidatePath("/[locale]/blog/[slug]", "page"); // a visit before it existed may have cached the 404
  revalidatePath("/sitemap.xml");
  revalidatePath("/llms.txt");

  const mapped = BLOG_DESTINATIONS[post.slug] ?? [];
  const destinations = await db.destination.findMany({
    where: { OR: [{ slug: { in: mapped } }, ...(post.category ? [{ name: post.category }] : [])] },
    select: { slug: true, regionSlug: true, tours: { select: { slug: true } } },
  });
  // The destination page and each of its trip pages list the destination's guides.
  for (const d of destinations) {
    for (const locale of LOCALES) {
      revalidatePath(`/${locale}/destinations/${d.regionSlug}/${d.slug}`);
      for (const t of d.tours) revalidatePath(`/${locale}/destinations/${d.regionSlug}/${d.slug}/${t.slug}`);
    }
  }
}
