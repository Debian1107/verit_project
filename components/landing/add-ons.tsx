"use client";
import { Card } from "@/components/ui/card";
import { Cpu, Database, AppWindow, ArrowRight, Sparkles } from "lucide-react";
import { addOnsData } from "@/lib/data";

const icons = {
  ram: Cpu,
  storage: Database,
  apps: AppWindow,
};

const AddOnCard = ({ addon }: { addon: (typeof addOnsData)[0] }) => {
  const Icon = icons[addon.id as keyof typeof icons];

  return (
    <Card className="bg-verit-green-2 group p-8 rounded-3xl text-center border-2 border-verit-green-light/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-verit-green-light hover:scale-105 text-white relative overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-verit-green-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <Sparkles className="h-5 w-5 text-verit-green-light" />
      </div>

      <div className="relative z-10">
        {/* Enhanced icon container */}
        <div className="inline-flex bg-gradient-to-br from-verit-green-light/15 to-verit-green-light/5 group-hover:from-verit-green-light/25 group-hover:to-verit-green-light/10 p-6 rounded-2xl mb-6 transition-all duration-300 border border-verit-green-light/10 group-hover:border-verit-green-light/30">
          <Icon className="h-8 w-8 text-verit-green-light group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-verit-green-light transition-colors duration-300">
          {addon.title}
        </h3>
        <p className="text-lg font-semibold text-verit-green-light mb-4">
          {addon.price}
        </p>

        {/* Call to action */}
        <div className="inline-flex items-center text-sm text-white/80 group-hover:text-verit-green-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="mr-2">Learn more</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Card>
  );
};

export function AddOns() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-verit-green to-verit-green-2 text-white m-6 rounded-3xl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-verit-green-light rounded-full mr-3" />
            <Sparkles className="h-6 w-6 text-verit-green-light" />
            <div className="h-1 w-12 bg-verit-green-light rounded-full ml-3" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-verit-green-light bg-clip-text text-transparent">
            Premium Add-Ons
          </h2>

          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Supercharge your VeritSpace experience with our premium add-ons.
            Each enhancement is powered by dedicated hardware resources to
            ensure
            <span className="text-verit-green-light font-semibold">
              {" "}
              optimal performance
            </span>
            .
          </p>
        </div>

        {/* Enhanced grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {addOnsData.map((addon, index) => (
            <div
              key={addon.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AddOnCard addon={addon} />
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16 pt-12 border-t border-verit-green-light/20">
          <p className="text-verit-green-light/80 text-sm mb-4">
            Need help choosing the right add-ons for your needs?
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-verit-green-light/10 hover:bg-verit-green-light/20 text-verit-green-light border border-verit-green-light/30 hover:border-verit-green-light rounded-full transition-all duration-300 hover:scale-105">
            <span className="mr-2">Contact our team</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
