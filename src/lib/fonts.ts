import { Oswald, Cabin } from "next/font/google";

export const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// Cabin: the closest free/licensed match to the reference site's body typeface — their own
// stylesheet falls back to Cabin when their paid Brandon Grotesque font isn't available.
export const inter = Cabin({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
