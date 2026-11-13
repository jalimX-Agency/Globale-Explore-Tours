"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { extractR2Urls, cleanupOrphanedR2Urls } from "@/lib/r2";
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
  revalidateTag("blog", { expire: 0 }); // cached journal listing
  revalidatePath("/[locale]/blog", "page");
  revalidatePath("/[locale]/blog/[slug]", "page");
  revalidatePath("/sitemap.xml");
  revalidatePath("/llms.txt");
  revalidatePath("/[locale]/destinations/[region]/[country]", "page"); // destination pages list their guides
  revalidatePath("/[locale]/destinations/[region]/[country]/[slug]", "page"); // and so do trip pages
  redirect(`/admin/blog/${post.id}`);
}

export async function updateBlogPost(id: string, raw: BlogPostFormValues) {
  await assertAdmin();
  const values = blogPostFormSchema.parse(raw);

  const before = await db.blogPost.findUnique({ where: { id } });

  await db.blogPost.update({ where: { id }, data: values });

  if (before) await cleanupOrphanedR2Urls(extractR2Urls(before), extractR2Urls(values));

  revalidatePath("/admin/blog");
  revalidateTag("blog", { expire: 0 }); // cached journal listing
  revalidatePath("/[locale]/blog", "page");
  revalidatePath("/[locale]/blog/[slug]", "page");
  revalidatePath("/sitemap.xml");
  revalidatePath("/llms.txt");
  revalidatePath("/[locale]/destinations/[region]/[country]", "page"); // destination pages list their guides
  revalidatePath("/[locale]/destinations/[region]/[country]/[slug]", "page"); // and so do trip pages
}

export async function deleteBlogPost(id: string) {
  await assertAdmin();
  const before = await db.blogPost.findUnique({ where: { id } });

  await db.blogPost.delete({ where: { id } });

  if (before) await cleanupOrphanedR2Urls(extractR2Urls(before), new Set());

  revalidatePath("/admin/blog");
  revalidateTag("blog", { expire: 0 }); // cached journal listing
  revalidatePath("/[locale]/blog", "page");
  revalidatePath("/[locale]/blog/[slug]", "page");
  revalidatePath("/sitemap.xml");
  revalidatePath("/llms.txt");
  revalidatePath("/[locale]/destinations/[region]/[country]", "page"); // destination pages list their guides
  revalidatePath("/[locale]/destinations/[region]/[country]/[slug]", "page"); // and so do trip pages
}
