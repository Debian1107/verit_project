import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonialsData } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-verit-green">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Trusted by Accounting & Tax Firms Nationwide
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="p-6 rounded-2xl shadow-md bg-verit-green-2 text-white hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="italic text-white/90">"{testimonial.quote}"</p>
                <p className="mt-4 font-bold text-white">
                  - {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
