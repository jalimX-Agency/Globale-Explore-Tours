import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { BlogForm } from "../blog-form";
import type { BlogPostFormValues } from "../schema";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await db.blogPost.findUnique({ where: { id } });
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

  return <BlogForm postId={post.id} defaultValues={defaultValues} />;
}
