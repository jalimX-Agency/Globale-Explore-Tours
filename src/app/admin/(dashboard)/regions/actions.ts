"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { extractR2Urls, cleanupOrphanedR2Urls } from "@/lib/r2";
import { regionFormSchema, type RegionFormValues } from "./schema";

async function assertAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

// Regions are a fixed set of 11 (one per continent grouping) seeded alongside the first
// destination in each — there's no "create" or "delete" here, only editing the page
// content (hero image/video, heading, intro copy) for an existing one.
export async function updateRegion(id: string, raw: RegionFormValues) {
  await assertAdmin();
  const values = regionFormSchema.parse(raw);

  const before = await db.region.findUnique({ where: { id } });

  await db.region.update({ where: { id }, data: values });

  if (before) await cleanupOrphanedR2Urls(extractR2Urls(before), extractR2Urls(values));

  revalidatePath("/admin/regions");
  revalidatePath("/[locale]", "layout");
}
