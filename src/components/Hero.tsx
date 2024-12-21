import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionize Your Restaurant Orders with the Smart A.I. Voice Agent
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Never miss an order again. Our intelligent A.I. Sales Agent handles
            calls, upsells, and takes precise orders, boosting your revenue
            while saving your time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black border-white hover:bg-white hover:text-indigo-600"
            >
              Schedule a Free Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
