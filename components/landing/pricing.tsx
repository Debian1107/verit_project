import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/data";

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Flexible pricing options to fit your firm's needs.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-2 border-verit-blue md:scale-105"
                  : "border"
              }`}
            >
              {plan.featured && (
                <div className="bg-[#36ae58] text-white text-sm font-bold text-center py-1.5 rounded-t-xl">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-8">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <p className="text-gray-600 mt-2 h-12">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow">
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500">/user/month</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-verit-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-8 pt-0">
                <Button
                  size="lg"
                  className={`w-full h-12 text-base font-semibold ${
                    plan.featured
                      ? "bg-[#36ae58] text-white "
                      : "bg-white text-black border-2 border-black hover:bg-blue-50"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center text-gray-600">
          <p>
            <strong>Professional onboarding and implementation:</strong> $200
            setup fee per server ($500 for UltraTax)
          </p>
        </div>
      </div>
    </section>
  );
}
