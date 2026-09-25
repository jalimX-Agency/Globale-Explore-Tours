"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { DEFAULT_BLOG_TOPICS } from "@/lib/blogTopicDefaults";

async function assertAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

function refresh() {
  revalidatePath("/admin/blog/planning");
}

const topicSchema = z.object({
  title: z.string().trim().min(3, "Le titre est requis"),
  slug: z
    .string()
    .trim()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Lien : lettres minuscules, chiffres et tirets uniquement")
    .max(120),
  notes: z.string().trim().max(2000).default(""),
});

async function nextOrder() {
  const last = await db.blogTopic.findFirst({ orderBy: { order: "desc" }, select: { order: true } });
  return (last?.order ?? -1) + 1;
}

export async function createTopic(raw: { title: string; slug: string; notes: string }) {
  await assertAdmin();
  const values = topicSchema.parse(raw);
  if (await db.blogTopic.findUnique({ where: { slug: values.slug } })) {
    throw new Error("Un sujet avec ce lien existe déjà.");
  }
  // A topic whose post already exists is recorded as published rather than queued again.
  const published = await db.blogPost.findUnique({ where: { slug: values.slug }, select: { id: true } });
  await db.blogTopic.create({
    data: {
      ...values,
      order: await nextOrder(),
      ...(published ? { status: "published", publishedAt: new Date() } : {}),
    },
  });
  refresh();
}

export async function updateTopic(id: string, raw: { title: string; slug: string; notes: string }) {
  await assertAdmin();
  const values = topicSchema.parse(raw);
  const clash = await db.blogTopic.findUnique({ where: { slug: values.slug } });
  if (clash && clash.id !== id) throw new Error("Un sujet avec ce lien existe déjà.");
  await db.blogTopic.update({ where: { id }, data: values });
  refresh();
}

export async function deleteTopic(id: string) {
  await assertAdmin();
  await db.blogTopic.delete({ where: { id } });
  refresh();
}

/** Puts a failed or skipped topic back in the queue, at its current position. */
export async function requeueTopic(id: string) {
  await assertAdmin();
  await db.blogTopic.update({ where: { id }, data: { status: "planned" } });
  refresh();
}

/** Swaps a topic with its neighbour in calendar order. */
export async function moveTopic(id: string, direction: "up" | "down") {
  await assertAdmin();
  const topics = await db.blogTopic.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }], select: { id: true } });
  const index = topics.findIndex((t) => t.id === id);
  const target = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || target < 0 || target >= topics.length) return;
  [topics[index], topics[target]] = [topics[target], topics[index]];
  // Rewrites every position so legacy duplicate `order` values can't make the swap a no-op.
  await db.$transaction(topics.map((t, order) => db.blogTopic.update({ where: { id: t.id }, data: { order } })));
  refresh();
}

/** Adds the starter calendar (src/lib/blogTopicDefaults.ts), skipping slugs already present. */
export async function importDefaultTopics() {
  await assertAdmin();
  const existingTopics = new Set((await db.blogTopic.findMany({ select: { slug: true } })).map((t) => t.slug));
  const publishedPosts = new Set(
    (
      await db.blogPost.findMany({
        where: { slug: { in: DEFAULT_BLOG_TOPICS.map((t) => t.slug) } },
        select: { slug: true },
      })
    ).map((p) => p.slug)
  );
  let order = await nextOrder();
  const now = new Date();
  const toCreate = DEFAULT_BLOG_TOPICS.filter((t) => !existingTopics.has(t.slug)).map((t) => ({
    ...t,
    order: order++,
    ...(publishedPosts.has(t.slug) ? { status: "published", publishedAt: now } : {}),
  }));
  if (toCreate.length > 0) await db.blogTopic.createMany({ data: toCreate });
  refresh();
  return toCreate.length;
}
