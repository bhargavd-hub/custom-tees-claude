"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What is the turnaround time for custom t-shirts?",
    answer:
      "Most orders are completed within 5–7 business days, with timing depending on print method, quantity, and artwork approval.",
  },
  {
    question: "How does online ordering work?",
    answer:
      "Use our online design tool to upload artwork or create a design, select your product and quantity, then checkout. We'll confirm your order and send a proof for approval.",
  },
  {
    question: "Is there a minimum order requirement?",
    answer:
      "No minimum! You can order as few as 1 shirt or as many as you need with no extra fees.",
  },
  {
    question: "Can I use my own design or logo?",
    answer:
      "Absolutely. Upload your artwork in PNG, PDF, AI, or EPS format. Our team reviews it for print quality for free.",
  },
  {
    question: "What types of garments can you print?",
    answer:
      "We print on t-shirts, hoodies, tank tops, polos, sweatshirts, hats, and more from brands like Gildan, Bella+Canvas, District, and Next Level.",
  },
  {
    question: "Where is Custom Tees DFW located?",
    answer:
      "1225 E. Crosby Rd., Suite A1, Carrollton, TX 75006. Proudly serving the DFW area since 2011.",
  },
  {
    question: "Do you offer rush printing?",
    answer:
      "Yes! We offer 24–72 hour rush printing with no rush fees. Contact us to check availability for your specific order.",
  },
  {
    question: "What printing methods do you offer?",
    answer:
      "We offer Screen Printing, Digital (DTG), Direct to Film (DTF), Vinyl Printing, and Embroidery to suit any project.",
  },
];

function PlusXIcon({ open }: { open: boolean }) {
  return (
    <span className="relative inline-block h-6 w-6 shrink-0">
      <span
        className="absolute left-[11px] top-[5px] block h-[14px] w-[2px] rounded-sm bg-brand-deep"
        style={{ transform: open ? "rotate(45deg)" : "none", transformOrigin: "center" }}
      />
      <span
        className="absolute left-[5px] top-[11px] block h-[2px] w-[14px] rounded-sm bg-brand-deep"
        style={{ transform: open ? "rotate(45deg)" : "none", transformOrigin: "center" }}
      />
    </span>
  );
}

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container-wide">
        <div className="mx-auto flex max-w-[1072px] flex-col items-start gap-10 lg:flex-row lg:gap-20">
          {/* Left card */}
          <article
            className="relative w-full flex-shrink-0 overflow-hidden rounded-[32px] bg-wine px-8 py-10 text-white lg:w-[372px] lg:h-[510px]"
            style={{
              clipPath: "polygon(0 0, 79% 0, 100% 26%, 100% 100%, 0 100%)",
            }}
          >
            <div className="relative z-10 flex h-full flex-col items-center justify-between text-center">
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight text-white md:text-[32px] md:leading-[42px]">
                  Still have questions?
                </h3>
                <p className="mt-4 font-body text-base leading-6 text-white">
                  Explore our guides and FAQs to choose the right product,
                  print method, and timeline.
                </p>
              </div>
              <button
                type="button"
                className="mt-8 inline-flex h-12 items-center rounded-pill bg-white px-8 font-display text-[15px] font-bold text-[#072835] hover:bg-cream"
              >
                Help Center
              </button>
            </div>
          </article>

          {/* Right: accordion */}
          <div className="flex-1">
            <h2 className="mb-5 font-display text-2xl font-bold leading-tight text-ink md:text-3xl lg:text-[32px] lg:leading-10">
              Frequently Asked Questions
            </h2>
            <ul className="flex flex-col">
              {FAQS.map((f, i) => {
                const isOpen = openIdx === i;
                return (
                  <li
                    key={f.question}
                    className={[
                      "border-b border-line-soft",
                      i === 0 ? "border-t" : "",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left font-display text-base font-bold leading-6 text-ink md:text-lg"
                    >
                      <span>{f.question}</span>
                      <PlusXIcon open={isOpen} />
                    </button>
                    <div
                      className="overflow-hidden transition-[max-height] duration-300 ease-out"
                      style={{ maxHeight: isOpen ? 200 : 0 }}
                    >
                      <p className="pb-4 font-body text-base leading-6 text-[#212121]">
                        {f.answer}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
