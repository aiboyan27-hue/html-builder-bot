import { Link } from "react-router-dom";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-background -z-10" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge - Prime Cleaner style */}
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center border-4 border-primary">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                  Montréal Local
                </span>
                <span className="text-xs text-muted-foreground mt-1">Qualité garantie</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-h1 font-extrabold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Nous nettoyons.
              <br />
              Vous trouvez{" "}
              <span className="text-accent relative">
                <span className="inline-block h-[1.2em] overflow-hidden align-bottom">
                  <span className="flex flex-col animate-text-rotate">
                    <span>la joie.</span>
                    <span>le temps.</span>
                    <span>la paix.</span>
                    <span>la joie.</span>
                  </span>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 animate-fade-in-up animation-delay-400">
              Retrouvez le plaisir d'un foyer propre. Plus de 7 000 clients nous font confiance à Montréal.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Button asChild size="lg" className="px-8 text-base">
                <Link to="/booking">Réserver maintenant</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 text-base">
                <a href="tel:5141234567">Appelez (514) 123-4567</a>
              </Button>
            </div>

            {/* Commercial CTA */}
            <div className="mt-4 animate-fade-in-up animation-delay-600">
              <Button asChild variant="secondary" size="lg" className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/commercial">Nettoyage commercial – Cliquez ici</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">4.9 (500+ avis)</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated animate-float">
              <img alt="Professional cleaner at work" className="w-full h-auto object-cover" src="/lovable-uploads/19cd016a-0dd4-44ae-9eb3-6b8ee9cdfec4.png" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      100% Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;