import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icon";
import { IMG } from "@/lib/images";

const THUMBS = [IMG.communityThumb1, IMG.communityThumb2, IMG.communityThumb3];

export function CommunitySection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            For Every Occasion
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.5rem]">
            Community Organizations
          </h2>

          <ul className="mt-5 space-y-3 text-lg font-display font-semibold text-ink/85 md:text-xl">
            <li>Schools & Teams</li>
            <li className="text-ink-muted/80">Businesses & Events</li>
          </ul>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
            Bring your group together with a clean, coordinated look that builds
            pride on game day and beyond.
          </p>

          <ul className="mt-6 flex items-center gap-3">
            {THUMBS.map((src, idx) => (
              <li
                key={idx}
                className="relative h-16 w-14 overflow-hidden rounded-md bg-surface md:h-20 md:w-16"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>

          <Link
            href="#quote"
            className="mt-8 inline-flex h-11 w-fit items-center gap-2 rounded-pill bg-ink px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-ink/85"
          >
            Get A Quote
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className="relative h-72 overflow-hidden rounded-2xl md:h-[460px]">
          <Image
            src={IMG.communityCrowd}
            alt="Community organization wearing custom tees"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
