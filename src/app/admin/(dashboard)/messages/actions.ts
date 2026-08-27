"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

async function assertAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

export async function setMessageRead(id: string, read: boolean) {
  await assertAdmin();
  await db.contactMessage.update({ where: { id }, data: { read } });
  revalidatePath("/admin/messages");
}

export async function deleteMessage(id: string) {
  await assertAdmin();
  await db.contactMessage.delete({ where: { id } });
  revalidatePath("/admin/messages");
}
