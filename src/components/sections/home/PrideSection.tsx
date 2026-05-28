import Image from "next/image";
import { IMG } from "@/lib/images";

const FEATURES = [
  {
    title: "Free Shipping",
    body: "Enjoy free standard shipping on all qualifying orders. Fast and reliable delivery to your door.",
  },
  {
    title: "No Rush Fees",
    body: "No added fees for rush orders, check for availability and exceptions.",
  },
  {
    title: "No Setup Fees",
    body: "No Gimmick, absolutely real deal on custom t-shirt printing without any setup fees.",
  },
  {
    title: "No Minimum",
    body: "No minimum custom t-shirt printing with our various tshirt printing options.",
  },
  {
    title: "24-72 Hrs Printing",
    body: "Quality t-shirt printing with super fast turnaround time, and in some case as fast as few hours.",
  },
  {
    title: "Free Artwork Review",
    body: "Get your artwork review and edited by our t-shirt design specialist for free.",
  },
];

export function PrideSection() {
  return (
    <section className="bg-white px-3 pb-6">
      <div className="overflow-hidden rounded-section bg-cream py-12 md:py-20">
        <div className="container-wide">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[60px]">
            <div className="relative h-72 w-full overflow-hidden rounded-section bg-[#D1D1E2] sm:h-96 lg:h-[628px] lg:w-[540px] lg:shrink-0">
              <Image
                src={IMG.prideCollage}
                alt="Custom Tees lifestyle photography"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="mb-10">
                <h2 className="font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[40px] lg:leading-[48px]">
                  We take <span className="emphasis-red">Pride</span> in
                </h2>
                <h2 className="font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[40px] lg:leading-[48px]">
                  doing things <span className="emphasis-red">A Little Different</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <article
                    key={f.title}
                    className="rounded-xl bg-white p-6"
                  >
                    <h3 className="font-display text-xl font-bold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-ink-muted">
                      {f.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
