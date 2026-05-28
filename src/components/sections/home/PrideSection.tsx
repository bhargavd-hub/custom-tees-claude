import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PrideSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Promise"
          title={
            <>
              We Take Pride in doing{" "}
              <span className="text-brand">A Little Different</span>
            </>
          }
          description="From small businesses to championship teams, we obsess over every stitch and print. Premium garments, sharper prints and shipping faster than the other guys."
        />
      </div>
      <div className="container-wide mt-10">
        <div className="relative h-64 overflow-hidden rounded-2xl md:h-80 lg:h-[420px]">
          <Image
            src="https://placehold.co/1600x600/D7C6A7/1A1A1A?text=Custom+Tees+Community&font=poppins"
            alt="People wearing custom tees"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
