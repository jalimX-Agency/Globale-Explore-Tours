import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { BlogForm } from "../blog-form";
import type { BlogPostFormValues } from "../schema";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [post, categories] = await Promise.all([
    db.blogPost.findUnique({ where: { id } }),
    db.blogPost.findMany({
      distinct: ["category"],
      where: { category: { not: "" } },
      select: { category: true },
      orderBy: { category: "asc" },
    }),
  ]);
  if (!post) notFound();

  const defaultValues: BlogPostFormValues = {
    title: post.title,
    titleEn: post.titleEn,
    titleEs: post.titleEs,
    slug: post.slug,
    excerpt: post.excerpt,
    excerptEn: post.excerptEn,
    excerptEs: post.excerptEs,
    content: post.content,
    contentEn: post.contentEn,
    contentEs: post.contentEs,
    image: post.image,
    category: post.category,
    author: post.author,
    featured: post.featured,
    order: post.order,
  };

  return <BlogForm postId={post.id} defaultValues={defaultValues} categories={categories.map((c) => c.category)} />;
}
