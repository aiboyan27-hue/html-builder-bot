import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are cleaning supplies provided?",
    answer:
      "Yes! We bring all necessary cleaning supplies and equipment, including HEPA vacuums and non-toxic products safe for pets and children.",
  },
  {
    question: "Can I customize my cleaning?",
    answer:
      "Absolutely. If you need extra attention on certain areas like the kitchen or bathrooms, just let us know and we'll tailor the checklist.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "No, you don't need to be home as long as we have access instructions. Many clients provide a key or door code.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold py-5 hover:no-underline">
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

export default FAQ;
