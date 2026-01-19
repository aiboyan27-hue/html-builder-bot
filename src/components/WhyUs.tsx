import { BadgeCheck, Star, Users, Leaf, CheckCircle, XCircle } from "lucide-react";

const trustCards = [
  {
    icon: BadgeCheck,
    title: "Satisfaction garantie",
    description: "Si ce n'est pas parfait, nous revenons — sans frais."
  },
  {
    icon: Star,
    title: "Service 5 étoiles",
    description: "Des équipes fiables, formées et attentives aux détails."
  },
  {
    icon: Users,
    title: "La même équipe, chaque visite",
    description: "Un service constant avec des visages familiers."
  },
  {
    icon: Leaf,
    title: "Produits sécuritaires",
    description: "Des produits non toxiques, sûrs pour les enfants et les animaux."
  }
];

const comparisonRows = [
  "Professionnels vérifiés et assurés",
  "Des milliers de clients satisfaits",
  "Réservation simple et rapide",
  "Qualité constante, visite après visite",
  "Satisfaction garantie",
  "Équipes entièrement assurées",
  "Rappels automatiques de rendez-vous",
  "Accompagnement client dédié",
  "Avantages sur certains services spécialisés",
  "Produits écologiques et sécuritaires"
];

const WhyUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi nous choisir
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous ne sommes pas une entreprise de nettoyage comme les autres.
            <br />
            Voici comment nous tenons nos promesses, encore et encore.
          </p>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {trustCards.map((card) => (
            <div 
              key={card.title} 
              className="bg-[#FFF8E7] rounded-2xl p-6 text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-7 h-7 text-foreground" />
              </div>
              
              {/* Text */}
              <h3 className="font-bold text-foreground text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Ce qui nous distingue
          </h3>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/40 border-b">
              <div className="p-4 font-medium text-foreground"></div>
              <div className="p-4 font-bold text-foreground text-center">
                Aura Nettoyage
              </div>
              <div className="p-4 font-medium text-muted-foreground text-center">
                Les autres
              </div>
            </div>
            
            {/* Rows */}
            {comparisonRows.map((row, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 ${index !== comparisonRows.length - 1 ? 'border-b' : ''}`}
              >
                <div className="p-4 text-sm text-foreground">
                  {row}
                </div>
                <div className="p-4 flex justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="p-4 flex justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
