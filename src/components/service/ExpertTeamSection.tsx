import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ExpertTeamSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
              alt="Notre équipe de nettoyage"
              className="rounded-2xl shadow-elevated w-full max-w-md"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Équipe de nettoyage experte
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Faites confiance à notre équipe de nettoyage pour prendre soin de votre maison comme si c'était la leur. Tous nos nettoyeurs sont vérifiés et prennent à cœur de livrer des résultats constants et de haute qualité. Nous avons réalisé des milliers de nettoyages et suivons une liste de vérification détaillée pour garantir que chaque visite répond à vos standards.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Tarification claire
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nous utilisons un système de tarification transparent et standardisé basé sur la taille et l'état de votre propriété. Contactez-nous aujourd'hui ou remplissez notre formulaire en ligne pour un devis personnalisé. Nous acceptons les paiements par carte de crédit et offrons le prélèvement automatique pour vous simplifier la vie.
            </p>

            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-6 text-base font-semibold uppercase tracking-wide"
            >
              <Link to="/booking">Réserver maintenant</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeamSection;
