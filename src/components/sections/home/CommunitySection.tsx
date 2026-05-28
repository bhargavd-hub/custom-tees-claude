import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "@/components/ui/Icon";

const PILLARS = [
  { title: "Schools & Teams", body: "Cheer squads, athletics, marching bands and academic clubs." },
  { title: "Non-Profits", body: "Fundraisers, donor swag and event volunteer kits." },
  { title: "Businesses & Events", body: "Branded uniforms, conferences and grand openings." },
];

export function CommunitySection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-wide grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-[440px]">
          <Image
            src="https://placehold.co/800x600/E47A4E/FFFFFF?text=Community+Day&font=poppins"
            alt="Community organization wearing custom tees"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Built for community
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Community Organizations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            We've outfitted more than 1,200 teams, classrooms and local
            non-profits across Texas. Group pricing, sponsor logos and a
            dedicated rep — all included.
          </p>
          <ul className="mt-6 space-y-4">
            {PILLARS.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand" />
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    {p.title}
                  </p>
                  <p className="text-sm text-ink-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button href="#" variant="outline" size="lg" className="mt-8">
            Group Inquiry
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
