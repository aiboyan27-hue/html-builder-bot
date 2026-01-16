import { 
  BadgeCheck, 
  Star, 
  Users, 
  Leaf,
  CheckCircle,
  XCircle
} from "lucide-react";

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
  },
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
  "Produits écologiques et sécuritaires",
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section 1: Trust Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Pourquoi nous choisir
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustCards.map((card) => (
              <div 
                key={card.title} 
                className="bg-muted/50 border border-border p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4">
                  <card.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Comparison Table */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Ce qui nous distingue
          </h2>

          <div className="max-w-3xl mx-auto">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-2">
              <div></div>
              <div className="w-32 md:w-40 text-center">
                <span className="inline-block bg-foreground text-background px-4 py-2 font-semibold text-sm">
                  Notre service
                </span>
              </div>
              <div className="w-32 md:w-40 text-center">
                <span className="inline-block bg-muted text-muted-foreground px-4 py-2 font-semibold text-sm">
                  Autres entreprises
                </span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-border">
              {comparisonRows.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-[1fr_auto_auto] gap-4 py-4 items-center ${
                    index % 2 === 1 ? 'bg-muted/30' : ''
                  }`}
                >
                  <span className="text-foreground text-sm md:text-base pl-2">
                    {row}
                  </span>
                  <div className="w-32 md:w-40 flex justify-center">
                    <CheckCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="w-32 md:w-40 flex justify-center">
                    <XCircle className="w-6 h-6 text-destructive" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;