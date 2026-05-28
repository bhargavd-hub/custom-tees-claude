import Image from "next/image";
import { StarRating } from "./StarRating";

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  avatar: string;
  image?: string;
  rating: number;
  quote: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-card">
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          {testimonial.role && (
            <p className="text-xs text-ink-muted">{testimonial.role}</p>
          )}
        </div>
      </div>
      <StarRating rating={testimonial.rating} className="mt-4" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        “{testimonial.quote}”
      </p>
      {testimonial.image && (
        <div className="mt-4 overflow-hidden rounded-lg">
          <Image
            src={testimonial.image}
            alt=""
            width={320}
            height={200}
            className="h-32 w-full object-cover"
          />
        </div>
      )}
    </article>
  );
}
