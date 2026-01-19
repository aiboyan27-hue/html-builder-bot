import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Fournissez-vous les produits et équipements de nettoyage ?",
    answer:
      "Oui. Nous apportons tout le matériel et les produits nécessaires pour effectuer le nettoyage. Nous utilisons des produits de haute qualité, non toxiques, sécuritaires pour les enfants, les animaux et l'environnement.",
  },
  {
    question: "Puis-je personnaliser mon service de nettoyage ?",
    answer:
      "Absolument. Si certaines zones comme la cuisine, les salles de bain ou les espaces à fort passage nécessitent plus d'attention, il suffit de nous le mentionner. Nous adaptons le service selon vos besoins et vos priorités.",
  },
  {
    question: "Qu'est-ce qui est inclus dans un nettoyage régulier ?",
    answer:
      "Nos services de nettoyage régulier comprennent les tâches essentielles telles que l'époussetage, l'aspiration, le lavage des planchers, le nettoyage de la cuisine et des salles de bain, ainsi que le rangement général pour maintenir votre espace propre et agréable.",
  },
  {
    question: "Puis-je faire confiance à vos équipes de nettoyage ?",
    answer:
      "Oui, sans hésitation. Nos équipes sont soigneusement sélectionnées et font l'objet de vérifications rigoureuses afin de garantir un service professionnel, fiable et sécuritaire.",
  },
  {
    question: "Comment fonctionne le paiement ?",
    answer:
      "Après avoir communiqué avec nous, nous vous enverrons un lien de paiement sécurisé. Une préautorisation est effectuée sur votre carte environ 24 heures avant le nettoyage à des fins de vérification — aucun montant n'est débité à ce moment. Le paiement est effectué uniquement une fois le service complété, et un reçu vous est transmis par courriel. Ce processus éprouvé assure une expérience simple, sécurisée et sans souci.",
  },
  {
    question: "Dois-je être présent(e) lors du nettoyage ?",
    answer:
      "Non, votre présence n'est pas obligatoire, tant que nous avons accès à votre espace. Pour un premier nettoyage, nous recommandons toutefois une courte visite ou un suivi afin de nous assurer que tout correspond à vos attentes.",
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
