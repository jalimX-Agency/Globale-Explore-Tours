"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { bookingStatusSchema, type BookingStatusValues } from "./schema";

async function assertAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

export async function updateBookingStatus(id: string, raw: BookingStatusValues) {
  await assertAdmin();
  const { status } = bookingStatusSchema.parse(raw);
  await db.booking.update({ where: { id }, data: { status } });
  revalidatePath("/admin/demandes");
}

export async function deleteBooking(id: string) {
  await assertAdmin();
  await db.booking.delete({ where: { id } });
  revalidatePath("/admin/demandes");
}
