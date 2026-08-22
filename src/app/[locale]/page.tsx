import { Hero } from "@/components/get/Hero";
import { Mission } from "@/components/get/Mission";
import { Testimonials } from "@/components/get/Testimonials";
import { TravelerTypes } from "@/components/get/TravelerTypes";
import { FeaturedTours } from "@/components/get/FeaturedTours";
import { OurApproach } from "@/components/get/OurApproach";
import { TrustStrip } from "@/components/get/TrustStrip";
import { ClosingCta } from "@/components/get/ClosingCta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Mission />
      <Testimonials />
      <TravelerTypes />
      <FeaturedTours />
      <OurApproach />
      <TrustStrip />
      <ClosingCta />
    </main>
  );
}
