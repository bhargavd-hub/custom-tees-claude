import Link from "next/link";

const CATEGORIES = [
  { label: "T-Shirts", icon: "👕", href: "/listing?cat=tshirts" },
  { label: "Tank Tops", icon: "🎽", href: "/listing?cat=tanks" },
  { label: "Polos", icon: "👔", href: "/listing?cat=polos" },
  { label: "Sweatshirts", icon: "🧥", href: "/listing?cat=sweatshirts" },
  { label: "Hoodies", icon: "🧤", href: "/listing?cat=hoodies" },
  { label: "Hats", icon: "🧢", href: "/listing?cat=hats" },
  { label: "Bottoms", icon: "👖", href: "/listing?cat=bottoms" },
];

export function CategoryStrip() {
  return (
    <section className="bg-white pb-8 pt-2">
      <div className="container-wide">
        <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {CATEGORIES.map((c) => (
            <li key={c.label}>
              <Link
                href={c.href}
                className="group flex flex-col items-center rounded-[10px] border border-[#CCCCCC] bg-white p-4 transition-shadow hover:border-ink-muted hover:shadow-card"
              >
                <span className="flex aspect-square w-full items-center justify-center rounded-lg bg-cream text-5xl">
                  {c.icon}
                </span>
                <span className="mt-3 flex w-full items-center justify-between pt-3">
                  <span className="text-lg font-bold text-ink">{c.label}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-xs">
                    ›
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
