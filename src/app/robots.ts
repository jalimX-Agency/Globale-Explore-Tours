import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin/", "/api/"] },
      // Explicit allow rules for every major traditional + AI search/answer-engine crawler —
      // several (Google-Extended, OAI-SearchBot, PerplexityBot, ClaudeBot/anthropic-ai) are
      // distinct from their "regular" indexing crawler and are opt-in for AI training/citation.
      {
        userAgent: [
          "Googlebot",
          "Google-Extended",
          "Bingbot",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Applebot",
          "Applebot-Extended",
          "Amazonbot",
          "meta-externalagent",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.globaleexploretours.com/sitemap.xml",
  };
}
