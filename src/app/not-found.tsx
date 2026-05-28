import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="container-wide text-center">
        <p className="font-display text-7xl font-extrabold text-brand md:text-8xl">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">
          We can't find that page
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted md:text-base">
          The page you were looking for might have moved, or never existed.
          Try heading back to the catalog.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="primary" size="lg">
            Back home
          </Button>
          <Button href="/listing" variant="outline" size="lg">
            Browse catalog
          </Button>
        </div>
      </div>
    </section>
  );
}
