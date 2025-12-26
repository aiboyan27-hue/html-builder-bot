import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

const ServiceFAQ = ({ faqs }: ServiceFAQProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          FAQs
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Questions générales sur nos services de nettoyage
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-background"
            >
              <AccordionTrigger className="text-left font-medium text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServiceFAQ;
