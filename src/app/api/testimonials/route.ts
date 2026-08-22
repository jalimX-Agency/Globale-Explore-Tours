import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Public, read-only — powers the homepage/experience-type Testimonials carousel. No auth:
// this only ever returns testimonial rows an admin already chose to publish.
export async function GET() {
  const testimonials = await db.testimonial.findMany({
    orderBy: { order: "asc" },
    select: { quote: true, author: true, location: true },
  });
  const items = testimonials.map((t) => ({
    quote: t.quote,
    author: t.location ? `${t.author}, ${t.location}` : t.author,
  }));
  return NextResponse.json({ items });
}
