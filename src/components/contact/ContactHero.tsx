import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
const avatars = ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"];
const ContactHero = () => {
  return <section className="py-16 md:py-24">
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
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-bold uppercase tracking-wide rounded-md">
              <Link to="/soumission">Contactez-nous</Link>
            </Button>

            {/* Rating Row */}
            










          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-muted aspect-[4/5]">
              <img src="/lovable-uploads/contact-hero.png" alt="Notre équipe de nettoyage" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactHero;