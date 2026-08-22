import type { Metadata } from "next";
import Image from "next/image";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { LocaleLink } from "@/components/get/LocaleLink";

export const metadata: Metadata = {
  title: "Journal",
};

function pick(locale: Locale, frText: string, enText: string, esText: string) {
  if (locale === "en") return enText || frText;
  if (locale === "es") return esText || frText;
  return frText;
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const posts = await db.blogPost.findMany({
    orderBy: [{ featured: "desc" }, { order: "asc" }],
  });

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <p className="label-eyebrow text-neutral-400">Journal</p>
        <h1 className="font-display mt-2 text-3xl sm:text-4xl">Nos conseils et récits de voyage</h1>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-neutral-500">Aucun article publié pour l&apos;instant.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <LocaleLink key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-neutral-100">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={pick(locale, post.title, post.titleEn, post.titleEs)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="pt-4">
                {post.category && <p className="label-eyebrow text-neutral-400">{post.category}</p>}
                <h2 className="font-display mt-1 text-lg leading-snug">
                  {pick(locale, post.title, post.titleEn, post.titleEs)}
                </h2>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-500">
                    {pick(locale, post.excerpt, post.excerptEn, post.excerptEs)}
                  </p>
                )}
              </div>
            </LocaleLink>
          ))}
        </div>
      )}
    </main>
  );
}
