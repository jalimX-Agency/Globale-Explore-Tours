"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

type LocaleLinkProps = React.ComponentProps<typeof Link>;

// Wraps next/link and automatically prefixes internal paths with the current locale
// (/excursions -> /fr/excursions) so every in-app link stays on a crawlable, language-specific URL.
export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const { language } = useLanguage();
  const isInternal = typeof href === "string" && href.startsWith("/");
  const finalHref = isInternal ? `/${language}${href === "/" ? "" : href}` : href;
  return <Link href={finalHref} {...props} />;
}
