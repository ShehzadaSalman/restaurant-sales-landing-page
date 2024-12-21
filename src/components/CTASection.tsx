import { Button } from "./ui/button";

export const CTASection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Serve More Customers Without Lifting a Finger?
        </h2>
        <p className="text-xl mb-8 text-indigo-100">
          Join hundreds of restaurants already using our AI Voice Agent
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white hover:bg-gray-100 text-indigo-600">
            Start Your Free Trial
          </Button>
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-indigo-600">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};