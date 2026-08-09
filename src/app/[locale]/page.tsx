import { Hero } from "@/components/get/Hero";
import { TrustStrip } from "@/components/get/TrustStrip";
import { FeaturedTours } from "@/components/get/FeaturedTours";
import { Mission } from "@/components/get/Mission";
import { Testimonials } from "@/components/get/Testimonials";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustStrip />
      <FeaturedTours />
      <Mission />
      <Testimonials />
    </main>
  );
}
