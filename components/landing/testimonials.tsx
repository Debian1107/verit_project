"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, Award, CheckCircle } from "lucide-react";
import { testimonialsData } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-verit-green via-verit-green to-verit-green-2 m-6 rounded-3xl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_50%)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Quote className="h-16 w-16 text-verit-green-light rotate-12" />
      </div>
      <div className="absolute top-20 right-16 opacity-15">
        <Award className="h-12 w-12 text-verit-green-light -rotate-12" />
      </div>
      <div className="absolute bottom-16 left-20 opacity-10">
        <Users className="h-14 w-14 text-verit-green-light rotate-6" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center bg-verit-green-light/10 px-4 py-2 rounded-full border border-verit-green-light/20">
              <CheckCircle className="h-5 w-5 text-verit-green-light mr-2" />
              <span className="text-verit-green-light font-medium text-sm">
                Client Success Stories
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-verit-green-light to-white bg-clip-text text-transparent">
              Accounting & Tax Firms
            </span>
            <br />
            <span className="text-verit-green-light">Nationwide</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have transformed their practice
            with VeritSpace
          </p>

          {/* Stats section */}
          <div className="flex justify-center items-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-verit-green-light">
                500+
              </div>
              <div className="text-sm text-white/70">Happy Clients</div>
            </div>
            <div className="h-8 w-px bg-verit-green-light/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-verit-green-light">
                99.9%
              </div>
              <div className="text-sm text-white/70">Uptime</div>
            </div>
            <div className="h-8 w-px bg-verit-green-light/30" />
            <div className="text-center">
              <div className="text-2xl font-bold text-verit-green-light">
                24/7
              </div>
              <div className="text-sm text-white/70">Support</div>
            </div>
          </div>
        </div>

        {/* Enhanced testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="group p-8 rounded-3xl shadow-xl bg-gradient-to-br from-verit-green-2 to-verit-green-2/80 text-white hover:shadow-2xl transition-all duration-500 hover:border-verit-green-light border-2 border-verit-green-light/20 hover:scale-105 relative overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              {/* Card background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-verit-green-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="h-8 w-8 text-verit-green-light" />
              </div>

              <CardContent className="p-0 relative z-10">
                {/* Enhanced star rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current transform group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-verit-green-light font-medium bg-verit-green-light/10 px-2 py-1 rounded-full">
                    Verified
                  </div>
                </div>

                {/* Enhanced quote */}
                <div className="relative">
                  <Quote className="h-6 w-6 text-verit-green-light/40 mb-3" />
                  <p className="text-base md:text-lg italic text-white/95 leading-relaxed mb-6 relative z-10">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Enhanced author section */}
                <div className="flex items-center pt-4 border-t border-verit-green-light/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-verit-green-light/20 to-verit-green-light/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-verit-green-light" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg group-hover:text-verit-green-light transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-white/70">Verified Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16 pt-12 border-t border-verit-green-light/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to join our success stories?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Experience the difference that thousands of accounting professionals
            trust
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-verit-green-light text-verit-green font-bold rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Free Trial
            <CheckCircle className="ml-2 h-5 w-5" />
          </button>
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
