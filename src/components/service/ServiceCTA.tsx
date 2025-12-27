import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServiceCTA = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professionnel et fiable
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Vous pouvez réserver directement sur notre site ou nous contacter par texto, téléphone ou courriel. Contactez-nous dès aujourd'hui.
            </p>
          </div>
          <Button 
            asChild 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-10 py-6 text-base font-semibold uppercase tracking-wide whitespace-nowrap"
          >
            <Link to="/booking">Réserver un nettoyage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
