import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { LocaleLink } from "@/components/get/LocaleLink";
import { ArrowLeft } from "lucide-react";

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
  const post = await db.blogPost.findUnique({
    where: { slug },
    select: { title: true, titleEn: true, titleEs: true },
  });
  return { title: post ? pick(locale, post.title, post.titleEn, post.titleEs) : "Article" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const post = await db.blogPost.findUnique({ where: { slug } });
  if (!post) notFound();

  const title = pick(locale, post.title, post.titleEn, post.titleEs);
  const content = pick(locale, post.content, post.contentEn, post.contentEs);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <LocaleLink
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
      >
        <ArrowLeft className="size-3.5" />
        Journal
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
