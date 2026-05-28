import { HeroSection } from "@/components/sections/home/HeroSection";
import { CategoryStrip } from "@/components/sections/home/CategoryStrip";
import { PrideSection } from "@/components/sections/home/PrideSection";
import { HowToOrder } from "@/components/sections/home/HowToOrder";
import { BestSellers } from "@/components/sections/home/BestSellers";
import { ProcessBand } from "@/components/sections/home/ProcessBand";
import { BrandLogosStrip } from "@/components/ui/BrandLogosStrip";
import { CommunitySection } from "@/components/sections/home/CommunitySection";
import { WhyOrderWithUs } from "@/components/sections/home/WhyOrderWithUs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { TexasMap } from "@/components/sections/home/TexasMap";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryStrip />
      <PrideSection />
      <HowToOrder />
      <BestSellers />
      <ProcessBand />
      <CommunitySection />
      <BrandLogosStrip />
      <WhyOrderWithUs />
      <Testimonials />
      <FaqSection />
      <TexasMap />
    </>
  );
}
