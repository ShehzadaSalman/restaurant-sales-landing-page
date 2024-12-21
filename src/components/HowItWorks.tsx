import { Phone, MessageSquare, ChefHat } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Customers Call",
    description: "Customers call your restaurant's number"
  },
  {
    icon: MessageSquare,
    title: "AI Takes Order",
    description: "A.I. Sales Agent greets them, understands their order, and upsells intelligently"
  },
  {
    icon: ChefHat,
    title: "Kitchen Receives Order",
    description: "The order is sent directly to your kitchen or POS system for processing"
  }
];

export const HowItWorks = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-indigo-500 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};