import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No `output: "standalone"` — that's for Docker/self-hosted builds and breaks Vercel's
  // own build trace step (ENOENT on next-server.js.nft.json). Vercel needs its default output.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.r2.dev",
        pathname: "/**",
      },
      {
        // R2's custom domain — every stored image URL now points here (see the migration
        // that moved DB rows off pub-....r2.dev); the r2.dev pattern above stays as a
        // fallback in case anything still references it.
        protocol: "https",
        hostname: "cdn.globaleexploretours.com",
        pathname: "/**",
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
  // Baseline security headers. External origins allowlisted below: the R2 image bucket (see
  // images.remotePatterns above), Google Analytics (GoogleAnalytics.tsx, inert until
  // NEXT_PUBLIC_GA_ID is set), Google Tag Manager (GoogleTagManager.tsx — note GTM can load
  // arbitrary third-party tags configured in its own dashboard; a new tag added there may need
  // its own host added here too, unlike a typical unrestricted-CSP GTM setup), and the free
  // Google Maps embed on the Contact page. `unsafe-eval` is dev-only (Turbopack's Fast Refresh
  // needs it); production never sends it.
  async headers() {
    const isProd = process.env.NODE_ENV === "production";
    const scriptSrc = isProd ? "'self' 'unsafe-inline'" : "'self' 'unsafe-inline' 'unsafe-eval'";
    const csp = [
      "default-src 'self'",
      // connect.facebook.net is pre-allowlisted for the Facebook Pixel tag — not wired up yet,
      // but added now so adding it as a GTM tag later doesn't need another CSP edit.
      `script-src ${scriptSrc} https://www.googletagmanager.com https://connect.facebook.net`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://*.r2.dev https://cdn.globaleexploretours.com https://www.googletagmanager.com https://www.google-analytics.com https://www.facebook.com",
      "media-src 'self' https://*.r2.dev https://cdn.globaleexploretours.com",
      "font-src 'self' data:",
      // *.r2.dev is the public CDN read path; *.r2.cloudflarestorage.com is the direct
      // upload endpoint the admin's video-upload PUT talks to (see src/lib/r2.ts) — a
      // different origin from the public bucket domain, both needed here. GTM/GA4 report to
      // googletagmanager.com and google-analytics.com respectively; Facebook Pixel's beacon
      // (once wired up) reports to facebook.com/connect.facebook.net.
      "connect-src 'self' https://*.r2.dev https://*.r2.cloudflarestorage.com https://www.googletagmanager.com https://www.google-analytics.com https://www.facebook.com https://connect.facebook.net" +
        (isProd ? "" : " ws:"),
      // The Contact page's location map is Google's free no-API-key embed iframe; GTM's
      // <noscript> fallback is a hidden iframe too.
      "frame-src https://www.google.com https://www.googletagmanager.com",
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
