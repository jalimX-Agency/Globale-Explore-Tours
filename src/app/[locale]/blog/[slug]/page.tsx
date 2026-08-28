import type { Metadata } from "next";
import Image from "next/image";
import { cache } from "react";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { LocaleLink } from "@/components/get/LocaleLink";
import { Breadcrumb } from "@/components/get/Breadcrumb";
import { ArrowLeft } from "lucide-react";
import { pageMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";

// Cached per-request so generateMetadata and the page body share one query instead of two.
const getPost = cache((slug: string) => db.blogPost.findUnique({ where: { slug } }));

export const revalidate = 3600;

function pick(locale: Locale, frText: string, enText: string, esText: string) {
  if (locale === "en") return enText || frText;
  if (locale === "es") return esText || frText;
  return frText;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const post = await getPost(slug);
  if (!post) return { title: "Article" };
  return pageMetadata({
    locale,
    path: `/blog/${slug}`,
    title: pick(locale, post.title, post.titleEn, post.titleEs),
    description: pick(locale, post.excerpt, post.excerptEn, post.excerptEs) || undefined,
    image: post.image || undefined,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const post = await getPost(slug);
  if (!post) notFound();

  const title = pick(locale, post.title, post.titleEn, post.titleEs);
  const content = pick(locale, post.content, post.contentEn, post.contentEs);
  const excerpt = pick(locale, post.excerpt, post.excerptEn, post.excerptEs);
  const journalLabel = locale === "en" ? "Travel Journal" : locale === "es" ? "Diario de viaje" : "Journal";
  const breadcrumb = [{ label: journalLabel, href: "/blog" }, { label: title }];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(locale, breadcrumb, `/blog/${slug}`) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            headline: title,
            description: excerpt || undefined,
            image: post.image || undefined,
            url: `https://www.globaleexploretours.com/${locale}/blog/${slug}`,
            datePublished: post.createdAt,
            dateModified: post.updatedAt,
            author: post.author || undefined,
          }),
        }}
      />
      <Breadcrumb items={breadcrumb} />

      <LocaleLink
        href="/blog"
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
      >
        <ArrowLeft className="size-3.5" />
        {journalLabel}
      </LocaleLink>

      <div className="mt-6 mb-8">
        {post.category && <p className="label-eyebrow text-neutral-400">{post.category}</p>}
        <h1 className="font-display mt-2 text-3xl sm:text-4xl">{title}</h1>
        {post.author && <p className="mt-3 text-sm text-neutral-500">Par {post.author}</p>}
      </div>

      {post.image && (
        <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-sm bg-neutral-100">
          <Image src={post.image} alt={title} fill className="object-cover" priority />
        </div>
      )}

      {/* `content` is authored HTML entered by an admin (see /admin/blog), never raw
          visitor input, so there is no XSS risk from rendering it directly. */}
      <div
        className="prose prose-neutral max-w-none prose-headings:font-display prose-img:rounded-sm"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}
