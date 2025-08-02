import { Card } from "@/components/ui/card";
import { Cpu, Database, AppWindow } from "lucide-react";
import { addOnsData } from "@/lib/data";

const icons = {
  ram: Cpu,
  storage: Database,
  apps: AppWindow,
};

const AddOnCard = ({ addon }: { addon: (typeof addOnsData)[0] }) => {
  const Icon = icons[addon.id as keyof typeof icons];

  return (
    <Card className="bg-verit-green-2 group p-6 rounded-2xl text-center border border-gray-200 shadow-md transition hover:shadow-lg hover:border-verit-green-light text-white hover:text-verit-green-light">
      <div className="inline-block bg-verit-green-light/10 group-hover:bg-verit-green-light/20 p-4 rounded-full mb-4 transition ">
        <Icon className="h-6 w-6 text-verit-green-light " />
      </div>
      <h3 className="text-lg font-semibold  ">{addon.title}</h3>
      <p className="text-sm text-white  ">{addon.price}</p>
    </Card>
  );
};

export function AddOns() {
  return (
    <section className="pt-16 pb-12 bg-verit-green text-white m-6 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 ">
          Add-Ons
        </h2>
        <p className="text-base  text-center mb-12 max-w-2xl mx-auto">
          Enhance your VeritSpace experience with these flexible add-ons. Add-on
          fees cover the cost of dedicated hardware resources.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {addOnsData.map((addon) => (
            <AddOnCard key={addon.id} addon={addon} />
          ))}
        </div>
      </div>
    </section>
  );
}
