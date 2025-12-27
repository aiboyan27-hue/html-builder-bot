import { Link } from "react-router-dom";
import { Shield, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceDescriptionProps {
  title: string;
  description: string[];
}

const ServiceDescription = ({ title, description }: ServiceDescriptionProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Description */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {title}
            </h2>
            {description.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right - Why Card */}
          <div className="lg:col-span-2">
            <div className="bg-primary/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Pourquoi Élite Propreté ?
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">Service 5 étoiles</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">Équipe vérifiée et assurée</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">Entreprise locale de Montréal</span>
                </div>
              </div>
              <Button 
                asChild 
                className="w-full mt-8 bg-foreground hover:bg-foreground/90 text-background rounded-lg py-6 text-base font-semibold uppercase tracking-wide"
              >
                <Link to="/booking">Obtenir une estimation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDescription;
