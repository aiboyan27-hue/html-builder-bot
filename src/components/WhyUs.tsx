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
const comparisonRows = ["Professionnels vérifiés et assurés", "Des milliers de clients satisfaits", "Réservation simple et rapide", "Qualité constante, visite après visite", "Satisfaction garantie", "Équipes entièrement assurées", "Rappels automatiques de rendez-vous", "Produits écologiques et sécuritaires"];
const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Pourquoi choisir Aura Nettoyage?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Un service de confiance, professionnel et adapté à vos besoins
        </p>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustCards.map((card, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Aura Nettoyage vs. Autres entreprises
          </h3>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold">
              <div className="p-4">Avantages</div>
              <div className="p-4 text-center">Aura Nettoyage</div>
              <div className="p-4 text-center">Autres</div>
            </div>
            {comparisonRows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
              >
                <div className="p-4 text-foreground">{row}</div>
                <div className="p-4 flex justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
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