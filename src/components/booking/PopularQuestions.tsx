import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    q: "Can my pets be at home while you clean?",
    a: "Yes! We love furry friends. Just let us know about any pets so our team can be prepared. We recommend securing pets in a safe area during the cleaning for their comfort and safety.",
  },
  {
    q: "Will you use my vacuum?",
    a: "We bring our own professional-grade equipment, but we're happy to use yours if you prefer. Just let us know in the special requests.",
  },
  {
    q: "Will you use this specific cleaning product that I provide?",
    a: "Absolutely! If you have specific products you'd like us to use, please have them ready and let us know in advance.",
  },
  {
    q: "How do I pay?",
    a: "Payment is collected after the cleaning is complete. We accept all major credit cards, debit cards, and electronic payments.",
  },
  {
    q: "Can I tip?",
    a: "Tips are never expected but always appreciated. You can tip in cash or add it to your payment after the service.",
  },
  {
    q: "How do I prepare my house for a cleaning?",
    a: "A quick tidy-up helps us maximize cleaning time. Pick up clothing, toys, and personal items from floors and surfaces. No need to clean before we clean!",
  },
  {
    q: "Can I make any special requests?",
    a: "Yes! We accommodate special requests whenever possible. Add your notes during booking or contact us directly.",
  },
  {
    q: "Do I have to be home during my appointment?",
    a: "No, you don't have to be home. Many clients provide entry instructions. We're bonded and insured for your peace of mind.",
  },
  {
    q: "When will I get a confirmation?",
    a: "You'll receive an email confirmation immediately after booking, with a reminder 24 hours before your appointment.",
  },
  {
    q: "Do you have a phone number?",
    a: "Yes! You can reach us at (514) 123-4567 for any questions or concerns.",
  },
  {
    q: "How do I select a date and time?",
    a: "After completing this form, you'll be able to choose from available appointment slots that work for your schedule.",
  },
  {
    q: "Can I later reschedule my booking online?",
    a: "Yes, you can reschedule online up to 24 hours before your appointment at no charge.",
  },
  {
    q: "Why do I have to enter a zipcode?",
    a: "Your zip code helps us confirm we service your area and provide accurate pricing and availability.",
  },
];

const PopularQuestions = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-bold text-[hsl(210,29%,24%)] mb-4">
        Popular Questions
      </h3>

      <Accordion type="single" collapsible className="space-y-1">
        {questions.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-none"
          >
            <AccordionTrigger className="text-sm text-left font-medium text-foreground py-3 hover:no-underline [&[data-state=open]>svg]:rotate-90 [&>svg]:rotate-0 [&>svg]:transition-transform">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-3 pt-0">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PopularQuestions;
