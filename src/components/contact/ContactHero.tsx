import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
];

const ContactHero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Contactez-nous,
              <br />
              en tout temps.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Une entreprise locale et familiale prête à répondre à vos besoins de nettoyage
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-bold uppercase tracking-wide rounded-md"
            >
              <Link to="/commercial">Obtenir une soumission</Link>
            </Button>

            {/* Rating Row */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Client ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Adoré par les Montréalais - 7000+ nettoyages
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-muted aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop"
                alt="Notre équipe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;