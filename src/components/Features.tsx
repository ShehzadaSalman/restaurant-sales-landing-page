import { 
  Globe2, 
  BarChart2, 
  MessageSquare, 
  Settings 
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced conversation capabilities for seamless interaction"
  },
  {
    icon: Globe2,
    title: "Multi-Language Support",
    description: "Supports multiple languages for diverse customer bases"
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description: "Monitor performance and gain valuable insights"
  },
  {
    icon: Settings,
    title: "Customizable Scripts",
    description: "Tailor greetings and upsell scripts to your menu"
  }
];

export const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 bg-indigo-100 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};