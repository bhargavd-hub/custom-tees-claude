import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductGallery } from "@/components/sections/detail/ProductGallery";
import { ProductInfo } from "@/components/sections/detail/ProductInfo";
import { ProductDescription } from "@/components/sections/detail/ProductDescription";
import { RelatedProducts } from "@/components/sections/detail/RelatedProducts";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { PRODUCT_DETAIL } from "@/lib/products";

const GALLERY_IMAGES = [
  "https://placehold.co/800x800/6E869C/FFFFFF?text=Front&font=poppins",
  "https://placehold.co/800x800/6E869C/FFFFFF?text=Back&font=poppins",
  "https://placehold.co/800x800/6E869C/FFFFFF?text=Detail&font=poppins",
  "https://placehold.co/800x800/6E869C/FFFFFF?text=Lifestyle&font=poppins",
];

export const metadata: Metadata = {
  title: `${PRODUCT_DETAIL.title} — Custom Tees`,
  description: PRODUCT_DETAIL.description,
};

export default function DetailPage() {
  return (
    <>
      <section className="bg-white py-6">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "T-Shirts", href: "/listing" },
              { label: PRODUCT_DETAIL.title },
            ]}
          />
        </div>
      </section>

      <section className="bg-white pb-12 md:pb-16">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <ProductGallery images={GALLERY_IMAGES} alt={PRODUCT_DETAIL.title} />
          <ProductInfo product={PRODUCT_DETAIL} />
        </div>
      </section>

      <ProductDescription />
      <RelatedProducts />
      <Testimonials />
      <FaqSection />
    </>
  );
}
