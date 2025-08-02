import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cloud, Headset, ShieldCheck, BarChart } from "lucide-react";
import { heroData } from "@/lib/data";
import { Header } from "./header";

const icons = {
  cloud: Cloud,
  headset: Headset,
  shield: ShieldCheck,
  chart: BarChart,
};

export function Hero() {
  return (
    <>
      <section className="relative bg-[#072530] text-white pb-20 pt-6 overflow-hidden  m-6 rounded-3xl">
        {/* Optional background effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#072530] via-[#07303a] to-[#081d25] opacity-90" />

        {/* Header */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 mt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {heroData.title}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                {heroData.subtitle.text}
                <span className="text-[#36ae58] font-semibold">
                  {heroData.subtitle.highlight}
                </span>
                {heroData.subtitle.extra}
              </p>

              {/* Benefits */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
                {heroData.benefits.map((benefit) => {
                  const Icon = icons[benefit.icon as keyof typeof icons];
                  return (
                    <div
                      key={benefit.text}
                      className="flex items-start gap-3 text-gray-200"
                    >
                      <Icon className="h-7 w-7 text-[#36ae58] flex-shrink-0" />
                      <span>{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#36ae58] text-white h-12 px-8 text-base rounded-full shadow-md"
                >
                  View Plans
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-gray-500 bg-transparent h-12 px-8 text-base rounded-full"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>

            {/* Right Card Preview */}
            <div className="hidden lg:flex justify-center">
              <Card className="bg-white text-gray-900 p-6 rounded-2xl w-full max-w-sm shadow-xl transform rotate-[-3deg]">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">
                    {heroData.previewCard.planName}
                  </h3>
                  <div className="bg-[#36ae58] text-white font-bold px-3 py-1 rounded-full text-sm shadow-sm">
                    {heroData.previewCard.badge}
                  </div>
                </div>
                <div className="my-6 text-center">
                  <span className="text-5xl font-extrabold">
                    ${heroData.previewCard.price}
                  </span>
                  <span className="text-gray-500">/user/month</span>
                </div>
                <ul className="space-y-3 text-sm text-left">
                  {heroData.previewCard.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#36ae58]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  variant={"empty"}
                  className="w-full mt-6 bg-[#36ae58] text-white h-12 text-base rounded-full"
                >
                  Get Started
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
