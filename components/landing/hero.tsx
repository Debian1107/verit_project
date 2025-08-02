import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cloud, Headset, ShieldCheck, BarChart } from "lucide-react";
import { heroData } from "@/lib/data";

const icons = {
  cloud: Cloud,
  headset: Headset,
  shield: ShieldCheck,
  chart: BarChart,
};

export function Hero() {
  return (
    <section className="bg-[#072530] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {heroData.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              {heroData.subtitle.text}
              <span className="text-[#36ae58] font-semibold">
                {heroData.subtitle.highlight}
              </span>
              {heroData.subtitle.extra}
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6 text-left">
              {heroData.benefits.map((benefit) => {
                const Icon = icons[benefit.icon as keyof typeof icons];
                return (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <Icon className="h-7 w-7 text-[#36ae58] flex-shrink-0" />
                    <span className="text-gray-200">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#36ae58] text-white  h-12 px-8 text-base"
              >
                View Plans
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-gray-500 hover:bg-gray-800 hover:text-white bg-transparent h-12 px-8 text-base"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <Card className="bg-white text-gray-900 p-6 rounded-2xl w-full max-w-sm shadow-2xl transform -rotate-3">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">
                  {heroData.previewCard.planName}
                </h3>
                <div className="bg-[#36ae58] text-white font-bold px-3 py-1 rounded-full">
                  {heroData.previewCard.badge}
                </div>
              </div>
              <div className="my-6 text-center">
                <span className="text-5xl font-extrabold">
                  ${heroData.previewCard.price}
                </span>
                <span className="text-gray-500">/user/month</span>
              </div>
              <ul className="space-y-3 text-sm">
                {heroData.previewCard.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-verit-green" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="w-full mt-6 bg-[#36ae58] text-white  h-12 text-base"
              >
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
