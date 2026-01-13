import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-background -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge - Montréal Local */}
            <div className="inline-flex items-center gap-3 mb-6">
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

            {/* Heading - Simplified */}
            <h1 className="font-heading text-h1 font-extrabold text-foreground leading-tight mb-8">
              Nous nettoyons.
              <br />
              Vous trouvez{" "}
              <span className="text-accent">la tranquillité d'esprit.</span>
            </h1>

            {/* Single CTA */}
            <div className="flex justify-center lg:justify-start mb-10">
              <Button asChild size="lg" className="px-8 text-base">
                <Link to="/commercial">Obtenir une soumission</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
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

          {/* Image - Reduced size */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated max-w-sm lg:max-w-md mx-auto">
              <img
                alt="Professional cleaner at work"
                className="w-full h-auto object-cover aspect-[3/4]"
                src="/lovable-uploads/19cd016a-0dd4-44ae-9eb3-6b8ee9cdfec4.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;