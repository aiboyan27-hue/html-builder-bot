import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I customize my cleaning?",
    answer: "Absolutely! We understand every home is different. During booking, you can specify areas that need extra attention, skip certain rooms, or add special requests. Our team will accommodate your preferences.",
  },
  {
    question: "What does frequent cleaning include?",
    answer: "Our frequent cleaning service includes dusting, vacuuming, mopping, bathroom sanitization, kitchen cleaning, and general tidying. We focus on maintaining your space between deep cleans.",
  },
  {
    question: "Can I leave a key for the cleaners?",
    answer: "Yes, many of our clients provide a spare key or access code. We have secure key management protocols and all our staff are background-checked for your peace of mind.",
  },
  {
    question: "Can I trust your cleaners?",
    answer: "All our cleaners undergo thorough background checks, are fully insured, and receive professional training. We've completed 7000+ cleanings with a 4.9 Google rating.",
  },
  {
    question: "Are cleaning supplies provided?",
    answer: "Yes! We bring all necessary cleaning supplies and equipment. We use eco-friendly, high-quality products. If you prefer specific products, just let us know.",
  },
];

const ContactFAQ = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
          FAQs
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-foreground/20 rounded-lg px-6 data-[state=open]:border-foreground/30"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
