import Link from "next/link";
import { ChevronRight } from "./Icon";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="font-medium text-ink">
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight size={12} className="text-ink-subtle" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
