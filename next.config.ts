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
  // Baseline security headers — the only external origin the app ever loads from is the R2
  // image bucket (see images.remotePatterns above); there's no analytics/maps script wired
  // up despite the NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL env vars existing
  // (grepped: unused), so this CSP doesn't need to allowlist them yet — add hosts here if
  // those ever get wired up. `unsafe-eval` is dev-only (Turbopack's Fast Refresh needs it);
  // production never sends it.
  async headers() {
    const isProd = process.env.NODE_ENV === "production";
    const scriptSrc = isProd ? "'self' 'unsafe-inline'" : "'self' 'unsafe-inline' 'unsafe-eval'";
    const csp = [
      "default-src 'self'",
      `script-src ${scriptSrc}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://*.r2.dev",
      "media-src 'self' https://*.r2.dev",
      "font-src 'self' data:",
      // *.r2.dev is the public CDN read path; *.r2.cloudflarestorage.com is the direct
      // upload endpoint the admin's video-upload PUT talks to (see src/lib/r2.ts) — a
      // different origin from the public bucket domain, both needed here.
      "connect-src 'self' https://*.r2.dev https://*.r2.cloudflarestorage.com" + (isProd ? "" : " ws:"),
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; ");

    const securityHeaders = [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
      ...(isProd
        ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }]
        : []),
    ];

    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
