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
      "Après avoir communiqué avec nous, nous vous enverrons un lien de paiement sécurisé. Une préautorisation est effectuée sur votre carte environ 24 heures avant le nettoyage à des fins de vérification — aucun montant n'est débité à ce moment. Le paiement est effectué uniquement une fois le service complété, et un reçu vous est transmis par courriel. Ce processus assure une expérience simple, sécurisée et sans souci.",
  },
  {
    question: "Dois-je être présent(e) lors du nettoyage ?",
    answer:
      "Votre présence n'est pas nécessaire, tant que nous avons accès à votre espace. Pour un premier nettoyage, nous aimons toutefois faire un court suivi avec vous afin de nous assurer que tout est à la hauteur de vos attentes.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          F.A.Q
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
