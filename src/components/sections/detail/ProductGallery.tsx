"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-6">
      <div className="relative aspect-square w-full overflow-hidden rounded-card border border-line bg-surface lg:flex-1">
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-contain"
        />
      </div>
      <ul className="flex flex-row gap-3 overflow-x-auto lg:flex-col">
        {images.map((src, idx) => (
          <li key={src + idx} className="shrink-0">
            <button
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Show image ${idx + 1}`}
              aria-current={idx === active}
              className={cn(
                "relative block h-20 w-20 overflow-hidden rounded-lg border-2 bg-surface transition-colors",
                idx === active ? "border-brand" : "border-line hover:border-ink-muted",
              )}
            >
              <Image src={src} alt="" fill className="object-contain" sizes="80px" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
