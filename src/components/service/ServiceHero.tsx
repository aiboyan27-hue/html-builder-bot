import { Link } from "react-router-dom";
import { Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  benefits: string[];
  image: string;
}

const ServiceHero = ({ title, subtitle, benefits, image }: ServiceHeroProps) => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {subtitle}
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background rounded-lg px-8 py-6 text-base font-semibold uppercase tracking-wide"
              >
                <Link to="/quote">Réserver maintenant</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground/5 rounded-lg px-8 py-6 text-base font-medium"
              >
                <a href="tel:5141234567" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (514) 123-4567
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={image}
                alt={title}
                className="rounded-3xl shadow-elevated w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
