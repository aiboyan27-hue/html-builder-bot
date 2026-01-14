import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Home, RefreshCw, Building, Droplets, Hammer, Grid3X3, PartyPopper, Briefcase } from "lucide-react";

const services = [
  { slug: "nettoyage-en-profondeur", title: "Nettoyage en profondeur", icon: Sparkles },
  { slug: "nettoyage-regulier", title: "Nettoyage régulier", icon: RefreshCw },
  { slug: "nettoyage-demenagement", title: "Nettoyage d'emménagement et de déménagement", icon: Home },
  { slug: "nettoyage-vitres", title: "Nettoyage de vitres", icon: Droplets },
  { slug: "nettoyage-apres-construction", title: "Nettoyage après construction", icon: Hammer },
  { slug: "nettoyage-tapis", title: "Nettoyage de tapis", icon: Building },
  { slug: "nettoyage-ceramique", title: "Nettoyage de céramique et joints", icon: Grid3X3 },
  { slug: "nettoyage-evenementiel", title: "Nettoyage événementiel", icon: PartyPopper },
  { slug: "nettoyage-commercial", title: "Nettoyage commercial", icon: Briefcase },
];

interface ServiceMegaMenuProps {
  onClose: () => void;
}

const ServiceMegaMenu = ({ onClose }: ServiceMegaMenuProps) => {
  const navigate = useNavigate();

  const handleServiceClick = (slug: string) => {
    onClose();
    navigate(`/services/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="absolute top-full left-0 right-0 w-screen bg-background border-b border-border shadow-md z-50 animate-fade-in">
      <div className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.slug}
                onClick={() => handleServiceClick(service.slug)}
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group py-2 text-left"
              >
                <Icon className="w-4 h-4 flex-shrink-0 text-primary" />
                <span className="text-sm font-medium">{service.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceMegaMenu;
