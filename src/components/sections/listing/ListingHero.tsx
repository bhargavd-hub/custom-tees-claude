import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image?: string;
};

export function ListingHero({ title, description, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-brand text-white">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,white_2px,transparent_2px)] [background-size:24px_24px]" />
      <div className="container-wide relative grid gap-6 py-10 md:grid-cols-[1fr_1.4fr] md:items-center md:py-14">
        <div className="relative h-44 md:h-56">
          <Image
            src={image ?? "https://placehold.co/700x500/E51E2A/FFFFFF?text=1UP&font=poppins"}
            alt=""
            fill
            className="object-contain"
            sizes="(min-width: 768px) 40vw, 100vw"
            priority
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Catalog
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
