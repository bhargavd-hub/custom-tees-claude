import { StarIcon } from "./Icon";
import { cn } from "@/lib/cn";

export function StarRating({
  rating,
  size = 14,
  count,
  className,
}: {
  rating: number;
  size?: number;
  count?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5 text-amber-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            size={size}
            filled={i < Math.round(rating)}
            className={i < Math.round(rating) ? "text-amber-500" : "text-line"}
          />
        ))}
      </div>
      {typeof count === "number" && (
        <span className="text-xs text-ink-muted">({count})</span>
      )}
    </div>
  );
}
