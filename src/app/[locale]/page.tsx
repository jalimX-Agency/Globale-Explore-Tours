import { Hero } from "@/components/get/Hero";
import { Mission } from "@/components/get/Mission";
import { TrustStrip } from "@/components/get/TrustStrip";
import { FeaturedTours } from "@/components/get/FeaturedTours";
import { Testimonials } from "@/components/get/Testimonials";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Mission />
      <TrustStrip />
      <FeaturedTours />
      <Testimonials />
    </main>
  );
}
