import { Check } from "lucide-react";

const benefits = [
  "24/7 Availability: Never miss a single call, even during peak hours or late nights.",
  "Error-Free Orders: Say goodbye to miscommunication and incorrect orders.",
  "Upsell Capability: Smart A.I. suggests add-ons to increase average order value.",
  "Cost-Effective: Reduce the need for additional staff while handling more calls.",
  "Easy Integration: Works seamlessly with your current systems."
];

export const Benefits = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};