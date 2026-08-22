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

export default function NewBlogPostPage() {
  return <BlogForm defaultValues={emptyValues} />;
}
