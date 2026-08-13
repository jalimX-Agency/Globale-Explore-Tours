"use client";

import { LocaleLink } from "@/components/get/LocaleLink";
import { useLanguage } from "@/lib/i18n/context";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const { t } = useLanguage();

  return (
    <nav className="font-body flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
      <LocaleLink href="/" className="hover:text-neutral-800">
        {t("nav.home")}
      </LocaleLink>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="opacity-50">/</span>
          {item.href ? (
            <LocaleLink href={item.href} className="hover:text-neutral-800">
              {item.label}
            </LocaleLink>
          ) : (
            <span className="text-neutral-800">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
