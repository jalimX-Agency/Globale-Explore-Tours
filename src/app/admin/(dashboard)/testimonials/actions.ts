"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { testimonialFormSchema, type TestimonialFormValues } from "./schema";

async function assertAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

// No redirect() here — testimonials are managed entirely from a dialog on the list page,
// not a separate route, so the client just closes the dialog and refreshes on success.
export async function createTestimonial(raw: TestimonialFormValues) {
  await assertAdmin();
  const values = testimonialFormSchema.parse(raw);
  const testimonial = await db.testimonial.create({ data: values });
  revalidatePath("/admin/testimonials");
  revalidatePath("/[locale]", "layout");
  return testimonial;
}

export async function updateTestimonial(id: string, raw: TestimonialFormValues) {
  await assertAdmin();
  const values = testimonialFormSchema.parse(raw);
  await db.testimonial.update({ where: { id }, data: values });
  revalidatePath("/admin/testimonials");
  revalidatePath("/[locale]", "layout");
}

export async function deleteTestimonial(id: string) {
  await assertAdmin();
  await db.testimonial.delete({ where: { id } });
  revalidatePath("/admin/testimonials");
  revalidatePath("/[locale]", "layout");
}
