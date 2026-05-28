import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/images";

function HeroFieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-xl">
      {children}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container-wide pt-8 pb-4">
        <div className="flex flex-col gap-3 lg:flex-row">
          {/* Main hero image */}
          <article className="relative h-[420px] w-full overflow-hidden rounded-card md:h-[480px] lg:h-[510px] lg:w-[900px] lg:shrink-0">
            <Image
              src={IMG.heroMain}
              alt="Custom T-Shirts"
              fill
              priority
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-transparent" />

            <h1 className="absolute left-6 top-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl md:leading-[1.17]">
              Custom T-Shirts
              <br />
              For Groups, Events &amp; Businesses
            </h1>

            <div className="absolute inset-x-6 bottom-6 rounded-pill bg-white/50 p-5 backdrop-blur-md">
              <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center">
                  <div className="flex items-center gap-3 lg:border-r lg:border-white/40 lg:pr-6">
                    <HeroFieldIcon>✉</HeroFieldIcon>
                    <div>
                      <div className="text-xs font-medium text-white">Email Address</div>
                      <div className="text-sm font-bold text-white">Enter Your Email</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 lg:border-r lg:border-white/40 lg:pr-6">
                    <HeroFieldIcon>👕</HeroFieldIcon>
                    <div>
                      <div className="text-xs font-medium text-white">Product</div>
                      <div className="flex items-center gap-1 text-sm font-bold text-white">
                        T-Shirts <span className="text-[10px]">▾</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HeroFieldIcon>#</HeroFieldIcon>
                    <div>
                      <div className="text-xs font-medium text-white">Quantity</div>
                      <div className="text-sm font-bold text-white">800</div>
                    </div>
                  </div>
                </div>
                <Link href="#quote" className="btn-dark shrink-0">
                  Request Quote
                </Link>
              </div>
            </div>
          </article>

          {/* Side stacked cards */}
          <div className="flex flex-1 flex-col gap-3">
            <article className="relative min-h-[248px] flex-1 overflow-hidden rounded-card">
              <Image
                src={IMG.heroDesign}
                alt="Design your t-shirts online"
                fill
                sizes="(min-width: 1024px) 530px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <h2 className="font-display text-2xl font-bold leading-snug text-white md:text-[28px] md:leading-9">
                  Design Your
                  <br />
                  T-Shirts Online
                </h2>
                <Link
                  href="#"
                  className="inline-flex h-[38px] w-fit items-center rounded-pill bg-white px-5 text-base font-bold text-ink hover:bg-cream"
                >
                  Get Started
                </Link>
              </div>
            </article>

            <article className="relative min-h-[248px] flex-1 overflow-hidden rounded-card bg-wine">
              <Image
                src={IMG.heroPremium}
                alt="Premium tees and apparel"
                fill
                sizes="(min-width: 1024px) 530px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <h2 className="font-display text-2xl font-bold leading-snug text-white md:text-[28px] md:leading-9">
                  Premium
                  <br />
                  Tees &amp; Apparel
                </h2>
                <Link
                  href="/listing"
                  className="inline-flex h-[38px] w-fit items-center rounded-pill bg-white px-5 text-base font-bold text-ink hover:bg-cream"
                >
                  Shop Now
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
