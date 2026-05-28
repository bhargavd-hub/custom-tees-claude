import Link from "next/link";
import { ChevronLeft, ChevronRight } from "./Icon";
import { cn } from "@/lib/cn";

type Props = {
  current: number;
  total: number;
  basePath: string;
};

export function Pagination({ current, total, basePath }: Props) {
  const pages = Array.from({ length: total }).map((_, i) => i + 1);
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 py-10">
      <Link
        href={`${basePath}?page=${Math.max(1, current - 1)}`}
        aria-label="Previous page"
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-pill border border-line bg-white text-ink hover:border-ink-muted",
          current === 1 && "pointer-events-none opacity-50",
        )}
      >
        <ChevronLeft size={16} />
      </Link>
      {pages.map((p) => {
        const active = p === current;
        return (
          <Link
            key={p}
            href={`${basePath}?page=${p}`}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex h-10 min-w-[2.5rem] items-center justify-center rounded-pill border px-3 text-sm font-medium",
              active
                ? "border-brand bg-brand text-white"
                : "border-line bg-white text-ink hover:border-ink-muted",
            )}
          >
            {p}
          </Link>
        );
      })}
      <Link
        href={`${basePath}?page=${Math.min(total, current + 1)}`}
        aria-label="Next page"
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-pill border border-line bg-white text-ink hover:border-ink-muted",
          current === total && "pointer-events-none opacity-50",
        )}
      >
        <ChevronRight size={16} />
      </Link>
    </nav>
  );
}
