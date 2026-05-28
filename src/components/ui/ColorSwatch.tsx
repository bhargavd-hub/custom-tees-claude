"use client";

import { cn } from "@/lib/cn";

type SwatchProps = {
  color: string;
  label?: string;
  selected?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

export function ColorSwatch({
  color,
  label,
  selected,
  size = "md",
  onClick,
}: SwatchProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label ?? color}
      aria-pressed={selected}
      title={label ?? color}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-full border transition-all",
        sizeMap[size],
        selected
          ? "border-ink ring-2 ring-offset-1 ring-ink"
          : "border-line hover:border-ink-muted",
      )}
      style={{ backgroundColor: color }}
    />
  );
}

export function ColorDots({ colors }: { colors: string[] }) {
  const visible = colors.slice(0, 6);
  const remaining = colors.length - visible.length;
  return (
    <div className="flex items-center gap-1">
      {visible.map((c, i) => (
        <span
          key={`${c}-${i}`}
          className="block h-3 w-3 rounded-full border border-line"
          style={{ backgroundColor: c }}
          aria-hidden
        />
      ))}
      {remaining > 0 && (
        <span className="ml-1 text-[11px] font-medium text-ink-muted">
          +{remaining}
        </span>
      )}
    </div>
  );
}
