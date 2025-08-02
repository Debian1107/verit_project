import { whyChooseUsData } from "@/lib/data";
import { Server, ShieldCheck, Clock, Scaling } from "lucide-react";

const icons = {
  server: Server,
  shield: ShieldCheck,
  clock: Clock,
  scaling: Scaling,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Why Firms Choose VeritSpace
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Discover the unique benefits that make VeritSpace the preferred choice
          for growing firms.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-verit-green-light hover:shadow-md transition duration-300 ease-in-out"
              >
                <div className="flex justify-center mb-4 ">
                  <div className="bg-verit-green-light/10 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-verit-green-light" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
