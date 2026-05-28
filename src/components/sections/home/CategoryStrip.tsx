import { CategoryPill } from "@/components/ui/CategoryPill";

const CATEGORIES = [
  { label: "T-Shirts", href: "/listing?cat=tshirts" },
  { label: "Polo Shirts", href: "/listing?cat=polos" },
  { label: "Sweatshirts", href: "/listing?cat=sweatshirts" },
  { label: "Jackets", href: "/listing?cat=jackets" },
  { label: "Headwear", href: "/listing?cat=headwear" },
  { label: "Bags", href: "/listing?cat=bags" },
  { label: "Accessories", href: "/listing?cat=accessories" },
];

export function CategoryStrip() {
  return (
    <section className="border-y border-line bg-white py-8 md:py-10">
      <div className="container-wide">
        <ul className="flex items-start justify-start gap-4 overflow-x-auto pb-2 md:justify-center md:gap-8 lg:gap-12">
          {CATEGORIES.map((c) => (
            <li key={c.label} className="shrink-0">
              <CategoryPill label={c.label} href={c.href} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
