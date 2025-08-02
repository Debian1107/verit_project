import { featuresData, pricingPlans } from "@/lib/data";
import { Check, X } from "lucide-react";

export function FeaturesTable() {
  return (
    <section id="features" className="pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Compare Plans
        </h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="bg--[#072530]">
                <th className="sticky left-0 bg-[#072530] p-6 text-base font-bold text-white z-10 border-r border-gray-600 w-1/4">
                  Features
                </th>
                {pricingPlans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`p-6 text-base font-bold text-center border-r border-gray-600 last:border-r-0 w-1/4 ${
                      plan.featured
                        ? "text-white bg-[#072530]"
                        : "text-white bg-[#072530]"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span>{plan.name}</span>
                      {plan.featured && (
                        <span className="bg-[#36ae58] text-white text-xs font-bold px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featuresData.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td
                    className={`sticky left-0 p-6 font-semibold text-gray-900 z-10 border-r border-gray-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    {feature.name}
                  </td>
                  <td className="p-6 text-center text-gray-700 font-medium border-r border-gray-200">
                    <div className="flex items-center justify-center gap-2">
                      {feature.core === "Add-on Available" ? (
                        <>
                          <X className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-500 text-sm">
                            {feature.core}
                          </span>
                        </>
                      ) : (
                        <>
                          <Check className="h-4 w-4 text-verit-green" />
                          <span>{feature.core}</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="p-6 text-center text-gray-700 font-medium border-r border-gray-200 bg-blue-50/30">
                    <div className="flex items-center justify-center gap-2">
                      {feature.pro === "Add-on Available" ? (
                        <>
                          <X className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-500 text-sm">
                            {feature.pro}
                          </span>
                        </>
                      ) : (
                        <>
                          <Check className="h-4 w-4 text-verit-green" />
                          <span className="font-semibold text-gray-900">
                            {feature.pro}
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="p-6 text-center text-gray-700 font-medium">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-verit-green" />
                      <span>{feature.complete}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call-to-action buttons aligned with table columns */}
        <div className="mt-8 overflow-x-auto">
          <div className="min-w-[700px] flex justify-center">
            {/* Empty space for Features column */}
            {/* Buttons aligned with plan columns */}
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="w-1/4 px-4 text-center">
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    plan.featured
                      ? "bg-[#36ae58] text-white  shadow-lg"
                      : "bg-white text-black border-2 border-black hover:bg-blue-50"
                  }`}
                >
                  Choose {plan.name}
                </button>
                <p className="text-sm text-gray-600 mt-3">
                  Starting at{" "}
                  <span className="font-bold text-gray-900">
                    ${plan.price}/user/mo
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
