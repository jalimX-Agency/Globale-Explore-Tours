import { db } from "@/lib/db";
import { BlogForm } from "../blog-form";
import type { BlogPostFormValues } from "../schema";

const emptyValues: BlogPostFormValues = {
  title: "",
  titleEn: "",
  titleEs: "",
  slug: "",
  excerpt: "",
  excerptEn: "",
  excerptEs: "",
  content: "",
  contentEn: "",
  contentEs: "",
  image: "",
  category: "",
  author: "",
  featured: false,
  order: 0,
};

export default async function NewBlogPostPage() {
  const categories = await db.blogPost.findMany({
    distinct: ["category"],
    where: { category: { not: "" } },
    select: { category: true },
    orderBy: { category: "asc" },
  });
  return <BlogForm defaultValues={emptyValues} categories={categories.map((c) => c.category)} />;
}
