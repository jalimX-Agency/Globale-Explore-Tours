import { Hero } from "@/components/get/Hero";
import { Mission } from "@/components/get/Mission";
import { Testimonials } from "@/components/get/Testimonials";
import { TrustStrip } from "@/components/get/TrustStrip";
import { FeaturedTours } from "@/components/get/FeaturedTours";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Mission />
      <Testimonials />
      <TrustStrip />
      <FeaturedTours />
    </main>
  );
}
