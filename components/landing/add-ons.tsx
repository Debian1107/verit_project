import { Card } from "@/components/ui/card"
import { Cpu, Database, AppWindow } from "lucide-react"
import { addOnsData } from "@/lib/data"

const icons = {
  ram: Cpu,
  storage: Database,
  apps: AppWindow,
}

const AddOnCard = ({ addon }: { addon: (typeof addOnsData)[0] }) => {
  const Icon = icons[addon.id as keyof typeof icons]
  return (
    <Card className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-200/80 shadow-sm">
      <div className="inline-block bg-gray-200 p-3 rounded-full mb-4">
        <Icon className="h-6 w-6 text-gray-700" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{addon.title}</h3>
      <p className="text-gray-600 mt-1 text-sm">{addon.price}</p>
    </Card>
  )
}

export function AddOns() {
  return (
    <section className="pt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">Add-Ons</h2>
        <p className="text-base text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Enhance your VeritSpace experience with these flexible add-ons. Add-on fees cover the cost of dedicated
          hardware resources.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {addOnsData.map((addon) => (
            <AddOnCard key={addon.id} addon={addon} />
          ))}
        </div>
      </div>
    </section>
  )
}
