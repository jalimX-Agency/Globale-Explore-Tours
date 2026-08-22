"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { blogPostFormSchema, type BlogPostFormValues } from "./schema";

async function assertAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

export async function createBlogPost(raw: BlogPostFormValues) {
  await assertAdmin();
  const values = blogPostFormSchema.parse(raw);
  const post = await db.blogPost.create({ data: values });
  revalidatePath("/admin/blog");
  revalidatePath("/[locale]/blog", "page");
  redirect(`/admin/blog/${post.id}`);
}

export async function updateBlogPost(id: string, raw: BlogPostFormValues) {
  await assertAdmin();
  const values = blogPostFormSchema.parse(raw);
  await db.blogPost.update({ where: { id }, data: values });
  revalidatePath("/admin/blog");
  revalidatePath("/[locale]/blog", "page");
  revalidatePath("/[locale]/blog/[slug]", "page");
}

export async function deleteBlogPost(id: string) {
  await assertAdmin();
  await db.blogPost.delete({ where: { id } });
  revalidatePath("/admin/blog");
  revalidatePath("/[locale]/blog", "page");
}
