import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { label: string; href?: string };

// Same visual slot as the single "← [section]" back-link every admin form used before this —
// drops in with the same size/color so replacing one with the other causes no layout shift.
export function AdminBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="size-3.5 shrink-0 text-muted-foreground/50" />}
            {item.href && !isLast ? (
              <Link href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-medium text-foreground" : undefined}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
