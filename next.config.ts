import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No `output: "standalone"` — that's for Docker/self-hosted builds and breaks Vercel's
  // own build trace step (ENOENT on next-server.js.nft.json). Vercel needs its default output.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
    ],
  },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
  // /reserver was renamed to /faire-une-demande; content seeded via seed.ts still has real
  // ContentBlock.ctaHref rows pointing at the old path, and external backlinks may too.
  async redirects() {
    return [
      { source: "/:locale/reserver", destination: "/:locale/faire-une-demande", permanent: true },
      { source: "/:locale/reserver/:path*", destination: "/:locale/faire-une-demande/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
