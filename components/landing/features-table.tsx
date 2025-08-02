"use client";
import { featuresData, pricingPlans } from "@/lib/data";
import {
  Check,
  X,
  Star,
  Crown,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function FeaturesTable() {
  return (
    <section
      id="features"
      className="pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.03),transparent_50%)]" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Sparkles className="h-16 w-16 text-verit-green-light rotate-12" />
      </div>
      <div className="absolute top-20 right-16 opacity-8">
        <Shield className="h-14 w-14 text-verit-green-light -rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center bg-gradient-to-r from-verit-green-light/10 to-verit-green/10 px-6 py-3 rounded-full border border-verit-green-light/20 shadow-sm">
              <Star className="h-5 w-5 text-verit-green-light mr-3" />
              <span className="text-verit-green-light font-semibold text-sm">
                Feature Comparison
              </span>
              <div className="ml-3 flex space-x-1">
                <div className="w-1 h-1 bg-verit-green-light rounded-full"></div>
                <div className="w-1 h-1 bg-verit-green-light rounded-full"></div>
                <div className="w-1 h-1 bg-verit-green-light rounded-full"></div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-verit-green-light to-verit-green bg-clip-text text-transparent">
              Compare Plans
            </span>
            <br />
            <span className="text-gray-900">Find Your Perfect Fit</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that scales with your firm's growth and unlock the
            features you need most
          </p>
        </div>

        {/* Enhanced table container */}
        <div className="overflow-x-auto bg-white rounded-3xl shadow-2xl border border-gray-100 relative">
          {/* Table gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-verit-green-light/5 via-transparent to-verit-green/5 rounded-3xl pointer-events-none" />

          <table className="w-full min-w-[700px] text-left relative z-10">
            <thead>
              <tr className="bg-gradient-to-r from-verit-green-2 via-verit-green to-verit-green-2">
                <th className="sticky left-0 bg-gradient-to-r from-verit-green-2 to-verit-green p-8 text-lg font-bold text-white z-20 border-r border-verit-green-light/30 w-1/4 rounded-tl-3xl">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 mr-3" />
                    Features
                  </div>
                </th>
                {pricingPlans.map((plan, index) => (
                  <th
                    key={plan.name}
                    className={`relative p-8 text-lg font-bold text-center border-r border-verit-green-light/30 last:border-r-0 w-1/4 ${
                      plan.featured
                        ? "text-white bg-gradient-to-br from-verit-green-light to-verit-green"
                        : "text-white bg-gradient-to-br from-verit-green-2 to-verit-green"
                    } ${
                      index === pricingPlans.length - 1 ? "rounded-tr-3xl" : ""
                    }`}
                  >
                    {/* Premium glow effect for featured plan */}
                    {plan.featured && (
                      <div className="absolute inset-0 bg-gradient-to-br from-verit-green-light/20 to-transparent rounded-t-3xl" />
                    )}

                    <div className="flex flex-col items-center gap-3 relative z-10">
                      <div className="flex items-center">
                        {plan.featured && (
                          <Crown className="h-5 w-5 mr-2 text-yellow-300" />
                        )}
                        <span className="text-xl">{plan.name}</span>
                        {plan.featured && (
                          <Crown className="h-5 w-5 ml-2 text-yellow-300" />
                        )}
                      </div>
                      {plan.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-verit-green text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-yellow-200">
                          <Star className="h-3 w-3 inline mr-1" />
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
                  className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-verit-green-light/5 hover:to-transparent transition-all duration-300 group ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                  }`}
                >
                  <td
                    className={`sticky left-0 p-6 font-semibold text-gray-900 z-10 border-r border-gray-200 group-hover:border-verit-green-light/20 transition-colors duration-300 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-verit-green-light rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {feature.name}
                    </div>
                  </td>

                  {/* Core Plan */}
                  <td className="p-6 text-center text-gray-700 font-medium border-r border-gray-200 group-hover:border-verit-green-light/20 transition-colors duration-300">
                    <div className="flex items-center justify-center gap-3">
                      {feature.core === "Add-on Available" ? (
                        <>
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <X className="h-4 w-4 text-gray-400" />
                          </div>
                          <span className="text-gray-500 text-sm font-medium">
                            {feature.core}
                          </span>
                        </>
                      ) : (
                        <div className="flex justify-between w-full ">
                          <div className="w-8 h-8 bg-verit-green-light/20 rounded-full flex items-center justify-center group-hover:bg-verit-green-light/30 transition-colors duration-300">
                            <Check className="h-4 w-4 text-verit-green-light" />
                          </div>
                          <span className="font-medium">{feature.core}</span>
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Pro Plan (Featured) */}
                  <td className="p-6 text-center text-gray-700 font-medium border-r border-gray-200 bg-gradient-to-r from-verit-green-light/5 to-transparent group-hover:from-verit-green-light/10 transition-all duration-300">
                    <div className="flex items-center justify-center gap-3">
                      {feature.pro === "Add-on Available" ? (
                        <>
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <X className="h-4 w-4 text-gray-400" />
                          </div>
                          <span className="text-gray-500 text-sm font-medium">
                            {feature.pro}
                          </span>
                        </>
                      ) : (
                        <div className="flex justify-between w-full ">
                          <div className="w-8 h-8 bg-verit-green-light/30 rounded-full flex items-center justify-center group-hover:bg-verit-green-light/40 transition-colors duration-300 shadow-sm">
                            <Check className="h-5 w-5 text-verit-green-light" />
                          </div>
                          <span className="font-bold text-gray-900">
                            {feature.pro}
                          </span>
                          <Zap className="h-4 w-4 text-verit-green-light ml-1" />
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Complete Plan */}
                  <td className="p-6 text-center text-gray-700 font-medium">
                    <div className="flex justify-between w-full">
                      <div className="w-8 h-8 bg-gradient-to-br from-verit-green-light to-verit-green rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-bold text-gray-900 truncate max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {feature.complete}
                      </span>
                      <Crown className="h-4 w-4 text-verit-green-light ml-1" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Enhanced CTA buttons section */}
        <div className="mt-12 overflow-x-auto">
          <div className=" flex items-center align-middle justify-center">
            {/* Empty space for Features column */}

            {/* Enhanced buttons aligned with plan columns */}
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className="w-1/4 px-4 text-center">
                <button
                  className={`group w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl ${
                    plan.featured
                      ? "bg-gradient-to-r from-verit-green-light to-verit-green text-white hover:from-verit-green hover:to-verit-green-2 shadow-verit-green-light/25"
                      : "bg-white text-gray-900 border-2 border-gray-200 hover:border-verit-green-light hover:bg-verit-green-light/5"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {plan.featured && <Star className="h-4 w-4 mr-2" />}
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>

                <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-600 mb-1">Starting at</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${plan.price}
                    <span className="text-sm font-normal text-gray-600">
                      /user/mo
                    </span>
                  </p>
                  {plan.featured && (
                    <p className="text-xs text-verit-green-light font-semibold mt-1">
                      ⚡ Best Value
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust section */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-verit-green-light mr-2" />
              <span>30-day free trial</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-verit-green-light mr-2" />
              <span>No setup fees</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-verit-green-light mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>

          <p className="text-lg text-gray-600">
            Questions about features?{" "}
            <a
              href="#contact"
              className="text-verit-green-light font-semibold hover:text-verit-green transition-colors duration-200"
            >
              Contact our experts
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
