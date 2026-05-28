import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icon";
import { FaqAccordion, type FaqItem } from "@/components/ui/FaqAccordion";
import { IMG } from "@/lib/images";

const FAQS: FaqItem[] = [
  {
    question: "What is the turnaround time for custom t-shirts?",
    answer:
      "Most orders are completed within 5–7 business days, with timing depending on print method, quantity and artwork approval.",
  },
  {
    question: "Is there a minimum order requirement?",
    answer:
      "Nope — order a single tee or a thousand, the same price tiers apply.",
  },
  {
    question: "Can I use my own design or logo?",
    answer:
      "Absolutely. Upload vector art (AI, EPS, SVG, PDF) or high-resolution PNG/JPG, and we'll optimize before press.",
  },
  {
    question: "What types of garments can you print on?",
    answer:
      "Tees, polos, sweatshirts, hoodies, hats, bags, totes and more — we'll happily print on most apparel and accessories.",
  },
  {
    question: "Do you offer rush or same-day delivery?",
    answer:
      "Yes. Rush options are available as fast as 48 hours, and local Texas pickup can be same-day depending on capacity.",
  },
  {
    question: "Where is Custom Tees located?",
    answer:
      "We're in Carrollton, TX — visit us at 1225 E. Crosby Rd, Suite A1, Carrollton, TX 75006.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-wide grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <article className="overflow-hidden rounded-2xl bg-cream p-7 lg:sticky lg:top-28 lg:p-9">
          <p className="font-display text-2xl font-bold text-ink md:text-3xl">
            Still have questions?
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Explore our guides and FAQs to find the right garment, decoration
            method and turnaround for your project.
          </p>
          <div className="relative mx-auto mt-6 h-44 w-full max-w-[260px] overflow-hidden rounded-xl">
            <Image
              src={IMG.faqIllustration}
              alt=""
              fill
              sizes="260px"
              className="object-cover"
            />
          </div>
          <Link
            href="#"
            className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-pill bg-ink px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-ink/85"
          >
            Help Center
            <ChevronRight size={14} />
          </Link>
        </article>

        <div>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl lg:text-[2.5rem]">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
