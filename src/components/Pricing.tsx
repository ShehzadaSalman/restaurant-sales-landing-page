import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "299",
    features: [
      "Up to 500 calls per month",
      "Basic menu integration",
      "Email support",
      "Standard reporting"
    ]
  },
  {
    name: "Professional",
    price: "499",
    popular: true,
    features: [
      "Up to 2000 calls per month",
      "Advanced menu integration",
      "Priority support",
      "Advanced analytics",
      "Custom voice personality"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited calls",
      "Full system integration",
      "24/7 dedicated support",
      "Custom features",
      "Multiple locations"
    ]
  }
];

export const Pricing = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Flexible Plans for Your Business
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-sm p-8 relative ${
                plan.popular ? 'border-2 border-indigo-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};