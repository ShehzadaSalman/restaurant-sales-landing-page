import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "This A.I. has transformed our order-taking process! Orders are always accurate, and sales have increased by 20% in the first month.",
    author: "John Smith",
    role: "Owner, The Fresh Kitchen"
  },
  {
    quote: "We've reduced our staffing costs while improving customer service. The AI never gets tired and always maintains a friendly tone.",
    author: "Sarah Johnson",
    role: "Manager, Bella Italia"
  }
];

export const Testimonials = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Restaurant Owners Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6 text-gray-700">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};