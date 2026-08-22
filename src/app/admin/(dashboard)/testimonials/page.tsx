import { db } from "@/lib/db";
import { TestimonialsPageClient } from "./TestimonialsPageClient";

export default async function TestimonialsListPage() {
  const testimonials = await db.testimonial.findMany({ orderBy: { order: "asc" } });
  return <TestimonialsPageClient data={testimonials} />;
}
