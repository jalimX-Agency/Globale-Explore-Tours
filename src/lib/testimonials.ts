import { db } from "@/lib/db";

export type TestimonialItem = { quote: string; author: string };

// Loaded on the server and passed to <Testimonials> as props — it used to fetch these itself
// from an API route after hydration, so the server HTML carried no reviews (and not even the
// TripAdvisor rating line, since the section rendered nothing while empty) for any crawler
// that doesn't run JavaScript.
export async function getTestimonials(): Promise<TestimonialItem[]> {
  const testimonials = await db.testimonial.findMany({
    orderBy: { order: "asc" },
    select: { quote: true, author: true, location: true },
  });
  return testimonials.map((t) => ({
    quote: t.quote,
    author: t.location ? `${t.author}, ${t.location}` : t.author,
  }));
}
