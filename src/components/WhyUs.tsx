import { BadgeCheck, Star, Users, Leaf, CheckCircle, XCircle } from "lucide-react";
const trustCards = [{
  icon: BadgeCheck,
  title: "Satisfaction garantie",
  description: "Si ce n'est pas parfait, nous revenons — sans frais."
}, {
  icon: Star,
  title: "Service 5 étoiles",
  description: "Des équipes fiables, formées et attentives aux détails."
}, {
  icon: Users,
  title: "La même équipe, chaque visite",
  description: "Un service constant avec des visages familiers."
}, {
  icon: Leaf,
  title: "Produits sécuritaires",
  description: "Des produits non toxiques, sûrs pour les enfants et les animaux."
}];
const comparisonRows = ["Professionnels vérifiés et assurés", "Des milliers de clients satisfaits", "Réservation simple et rapide", "Qualité constante, visite après visite", "Satisfaction garantie", "Équipes entièrement assurées", "Rappels automatiques de rendez-vous", "Accompagnement client dédié", "Avantages sur certains services spécialisés", "Produits écologiques et sécuritaires"];
const WhyUs = () => {
  return <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Pourquoi nous choisir?
        </h2>
        
        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustCards.map((card, index) => {
          const IconComponent = card.icon;
          return <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>;
        })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div></div>
            <div className="text-center font-semibold text-primary">Aura Nettoyage</div>
            <div className="text-center font-semibold text-muted-foreground">Autres</div>
          </div>
          {comparisonRows.map((row, index) => <div key={index} className="grid grid-cols-3 gap-2 py-3 border-b border-border">
              <div className="text-sm text-foreground">{row}</div>
              <div className="text-center">
                <CheckCircle className="w-5 h-5 text-primary mx-auto" />
              </div>
              <div className="text-center">
                <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyUs;