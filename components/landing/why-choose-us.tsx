"use client";

import { whyChooseUsData } from "@/lib/data";
import {
  Server,
  ShieldCheck,
  Clock,
  Scaling,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const icons = {
  server: Server,
  shield: ShieldCheck,
  clock: Clock,
  scaling: Scaling,
};

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(34,197,94,0.03),transparent_50%)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-16 left-8 opacity-10">
        <TrendingUp className="h-20 w-20 text-verit-green-light rotate-12" />
      </div>
      <div className="absolute top-32 right-12 opacity-8">
        <Sparkles className="h-16 w-16 text-verit-green-light -rotate-12" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-6">
        <CheckCircle className="h-18 w-18 text-verit-green-light rotate-6" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center bg-gradient-to-r from-verit-green-light/10 to-verit-green/10 px-6 py-3 rounded-full border border-verit-green-light/20 shadow-sm">
              <CheckCircle className="h-5 w-5 text-verit-green-light mr-3" />
              <span className="text-verit-green-light font-semibold text-sm">
                Why Choose Us
              </span>
              <div className="ml-3 flex space-x-1">
                <div className="w-1 h-1 bg-verit-green-light rounded-full"></div>
                <div className="w-1 h-1 bg-verit-green-light rounded-full"></div>
                <div className="w-1 h-1 bg-verit-green-light rounded-full"></div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-verit-green-light to-verit-green bg-clip-text text-transparent">
              Firms Choose
            </span>
            <br />
            <span className="text-verit-green-light">VeritSpace</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover the unique benefits that make VeritSpace the{" "}
            <span className="text-verit-green-light font-semibold">
              preferred choice
            </span>{" "}
            for growing accounting and tax firms nationwide.
          </p>

          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-verit-green-light mr-2" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-verit-green-light mr-2" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-verit-green-light mr-2" />
              <span>24/7 Expert Support</span>
            </div>
          </div>
        </div>

        {/* Enhanced features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyChooseUsData.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <div
                key={item.title}
                className="group relative text-center p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-verit-green-light hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                {/* Card background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-verit-green-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-verit-green-light/10 text-verit-green-light text-sm font-bold rounded-full flex items-center justify-center group-hover:bg-verit-green-light group-hover:text-white transition-all duration-300">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  {/* Enhanced icon container */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-verit-green-light/15 to-verit-green/10 group-hover:from-verit-green-light/25 group-hover:to-verit-green/15 p-6 rounded-2xl transition-all duration-500 border border-verit-green-light/20 group-hover:border-verit-green-light/40 group-hover:scale-110">
                        <Icon className="h-10 w-10 text-verit-green-light group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-2xl bg-verit-green-light/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                    </div>
                  </div>

                  {/* Enhanced content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-verit-green-light transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Learn more link */}
                  <div className="inline-flex items-center text-sm text-verit-green-light opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:text-verit-green cursor-pointer">
                    <span className="mr-2 font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to experience the{" "}
              <span className="text-verit-green-light">
                VeritSpace advantage?
              </span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of accounting professionals who have transformed
              their practice
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center px-8 py-4 bg-verit-green-light text-white font-bold rounded-full hover:bg-verit-green transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <button className="inline-flex items-center px-8 py-4 bg-white text-verit-green-light font-bold rounded-full border-2 border-verit-green-light hover:bg-verit-green-light hover:text-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
                Schedule Demo
                <CheckCircle className="ml-2 h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              No credit card required • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
