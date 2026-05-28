import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  label: string;
  href: string;
  image?: string;
  active?: boolean;
};

export function CategoryPill({ label, href, image, active }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center gap-2 text-center",
        "transition-transform hover:-translate-y-0.5",
      )}
    >
      <span
        className={cn(
          "flex h-20 w-20 items-center justify-center rounded-full border-2 bg-white p-3 shadow-sm transition-colors md:h-24 md:w-24",
          active ? "border-brand" : "border-line group-hover:border-brand",
        )}
      >
        {image ? (
          <Image src={image} alt="" width={64} height={64} className="object-contain" />
        ) : (
          <span className="font-display text-2xl font-bold text-brand">
            {label.charAt(0)}
          </span>
        )}
      </span>
      <span className="text-xs font-semibold text-ink md:text-sm">{label}</span>
    </Link>
  );
}
