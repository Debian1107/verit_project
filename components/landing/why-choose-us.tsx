import { whyChooseUsData } from "@/lib/data"
import { Server, ShieldCheck, Clock, Scaling } from "lucide-react"

const icons = {
  server: Server,
  shield: ShieldCheck,
  clock: Clock,
  scaling: Scaling,
}

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Why Firms Choose VeritSpace</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsData.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <div key={item.title} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-verit-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
