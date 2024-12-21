import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the A.I. in understanding orders?",
    answer: "Our A.I. uses advanced natural language processing with over 98% accuracy in order understanding. It's trained on millions of restaurant orders and continuously learns from interactions."
  },
  {
    question: "Can I customize the A.I.'s responses?",
    answer: "Yes! You can fully customize greetings, upsell scripts, and responses to match your restaurant's brand voice and menu offerings."
  },
  {
    question: "What happens if a customer asks a question the A.I. can't answer?",
    answer: "In rare cases where the A.I. cannot handle a request, it can seamlessly transfer the call to a human operator or take a message for follow-up."
  },
  {
    question: "How does the integration process work?",
    answer: "Our team handles the entire integration process, including menu setup, POS integration, and staff training. Most restaurants are up and running within 48 hours."
  }
];

export const FAQ = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};