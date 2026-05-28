import Image from "next/image";
import { FaqAccordion, type FaqItem } from "@/components/ui/FaqAccordion";

const FAQS: FaqItem[] = [
  {
    question: "What is the minimum order quantity?",
    answer:
      "There is none. Order a single tee or a thousand — the same price-per-piece tiers apply once you cross each volume break.",
  },
  {
    question: "How long does printing take?",
    answer:
      "Standard turnaround is 5–7 business days after artwork approval. Rush options are available for as fast as 48 hours.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes — orders over $99 ship free anywhere in the continental U.S.",
  },
  {
    question: "Can I see a mock-up before printing?",
    answer:
      "Always. We send a free digital mock-up for approval before any ink hits a garment.",
  },
  {
    question: "What file formats do you accept for artwork?",
    answer:
      "Vector files (AI, EPS, SVG, PDF) are preferred. High-resolution PNG and JPG also work — our team will optimize before press.",
  },
  {
    question: "Do you offer eco-friendly printing options?",
    answer:
      "Yes. We offer water-based and discharge inks on cotton garments for a soft hand-feel and lower environmental impact.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream lg:sticky lg:top-28">
          <Image
            src="https://placehold.co/600x600/F2EBDD/7A1F2C?text=Got+Questions%3F&font=poppins"
            alt="Got questions"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            We've got answers
          </p>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </div>
    </section>
  );
}
