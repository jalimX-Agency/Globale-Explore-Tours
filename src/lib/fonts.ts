import { Oswald, Inter } from "next/font/google";

export const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});
