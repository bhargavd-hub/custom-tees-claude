import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2", className)}
      aria-label="Custom Tees home"
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full",
          variant === "light" ? "bg-white text-brand" : "bg-brand text-white",
        )}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4 6.5 8 3l4 2 4-2 4 3.5-2.5 4.5L15 9.5V21H9V9.5L6.5 11 4 6.5Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display text-xl font-extrabold lowercase tracking-tight",
            variant === "light" ? "text-white" : "text-brand",
          )}
          style={{ fontStyle: "italic" }}
        >
          Custom
        </span>
        <span
          className={cn(
            "-mt-1 font-display text-base font-bold uppercase tracking-[0.25em]",
            variant === "light" ? "text-white/80" : "text-ink",
          )}
        >
          Tees
        </span>
      </span>
    </Link>
  );
}
