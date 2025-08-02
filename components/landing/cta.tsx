import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-verit-dark-header text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready for Peak Performance?
        </h2>
        <p className="text-lg text-gray-300 mt-4 mb-8 max-w-2xl mx-auto">
          Stop letting slow software hold you back. Join thousands of
          high-performing firms who trust VeritSpace to accelerate their
          workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#36ae58]  h-12 px-8 text-base">
            Choose Your Plan
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-gray-500 hover:bg-gray-800 hover:text-white bg-transparent h-12 px-8 text-base"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
