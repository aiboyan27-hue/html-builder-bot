import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight max-w-xl">
            Prêt pour un nettoyage
            <br />
            professionnel ?
          </h2>
          
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-3 font-semibold text-sm uppercase tracking-wide w-fit"
          >
            <Link to="/commercial">Obtenir une soumission</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
