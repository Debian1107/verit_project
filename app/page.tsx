import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import dynamic from "next/dynamic";

const FeaturesTable = dynamic(() =>
  import("@/components/landing/features-table").then((mod) => mod.FeaturesTable)
);
const AddOns = dynamic(() =>
  import("@/components/landing/add-ons").then((mod) => mod.AddOns)
);
const WhyChooseUs = dynamic(() =>
  import("@/components/landing/why-choose-us").then((mod) => mod.WhyChooseUs)
);
const Testimonials = dynamic(() =>
  import("@/components/landing/testimonials").then((mod) => mod.Testimonials)
);
const Faq = dynamic(() =>
  import("@/components/landing/faq").then((mod) => mod.Faq)
);
const Cta = dynamic(() =>
  import("@/components/landing/cta").then((mod) => mod.Cta)
);
const Footer = dynamic(() =>
  import("@/components/landing/footer").then((mod) => mod.Footer)
);
const FloatingNav = dynamic(() =>
  import("@/components/landing/floating-nav").then((mod) => mod.FloatingNav)
);

export default function ProfessionalSaaSPageV2() {
  return (
    <div className="bg-white text-gray-800">
      <main>
        <Hero />
        <Pricing />
        <div className="bg-white py-16 md:py-24">
          <FeaturesTable />
          <AddOns />
        </div>
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
}
