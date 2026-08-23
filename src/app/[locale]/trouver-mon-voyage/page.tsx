import type { Metadata } from "next";
import { TripFinderLanding } from "@/components/get/TripFinderLanding";

export const metadata: Metadata = {
  title: "Trip Finder",
};

export default function TripFinderPage() {
  return <TripFinderLanding />;
}
