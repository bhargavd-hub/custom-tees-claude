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
      aria-label="Custom Tees DFW home"
      className={cn("inline-flex items-center", className)}
    >
      <span
        className={cn(
          "font-display text-[22px] font-extrabold leading-none tracking-tight",
          variant === "light" ? "text-white" : "text-brand-deep",
        )}
      >
        CustomTees<span className="text-brand">DFW</span>
      </span>
    </Link>
  );
}
