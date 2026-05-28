import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard, type Testimonial } from "@/components/ui/TestimonialCard";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Jordan Reyes",
    role: "Coach, Westlake HS",
    avatar: "https://placehold.co/96x96/E51E2A/FFFFFF?text=JR&font=poppins",
    image: "https://placehold.co/640x400/2F4F3A/FFFFFF?text=Team+Photo&font=poppins",
    rating: 5,
    quote:
      "Reordered three years in a row. Print quality holds up after dozens of washes — and our coach gets compliments at every away game.",
  },
  {
    id: "t2",
    name: "Mia Patel",
    role: "Owner, Brewski Coffee",
    avatar: "https://placehold.co/96x96/7A1F2C/FFFFFF?text=MP&font=poppins",
    image: "https://placehold.co/640x400/D7C6A7/1A1A1A?text=Brewski+Crew&font=poppins",
    rating: 5,
    quote:
      "The team helped me pick a softer fabric for our barista staff. Three pickups later, they still ask for the same brand. Highest praise.",
  },
  {
    id: "t3",
    name: "Devon Walker",
    role: "Director, Texas Aid",
    avatar: "https://placehold.co/96x96/2F4F3A/FFFFFF?text=DW&font=poppins",
    image: "https://placehold.co/640x400/E47A4E/FFFFFF?text=Volunteer+Day&font=poppins",
    rating: 5,
    quote:
      "We needed 400 volunteer tees on a deadline. Custom Tees turned them around in under a week. Real people, real follow-up.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream-100 py-16 md:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Real reviews"
          title={
            <>
              Clients Love <span className="text-brand">Us</span>
            </>
          }
          description="Read what teams, businesses and community leaders say about working with Custom Tees."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
