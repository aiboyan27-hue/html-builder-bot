import { Link } from "react-router-dom";
import { Sparkles, Home, RefreshCw, Building, Droplets, Hammer, Grid3X3, PartyPopper } from "lucide-react";

const services = [
  {
    slug: "nettoyage-en-profondeur",
    title: "Nettoyage en profondeur",
    icon: Sparkles,
  },
  {
    slug: "nettoyage-standard",
    title: "Nettoyage standard",
    icon: RefreshCw,
  },
  {
    slug: "nettoyage-demenagement",
    title: "Nettoyage après déménagement",
    icon: Home,
  },
  {
    slug: "nettoyage-vitres",
    title: "Nettoyage de vitres",
    icon: Droplets,
  },
  {
    slug: "nettoyage-apres-construction",
    title: "Nettoyage après construction",
    icon: Hammer,
  },
  {
    slug: "nettoyage-tapis",
    title: "Nettoyage de tapis",
    icon: Building,
  },
  {
    slug: "nettoyage-commercial",
    title: "Nettoyage commercial",
    icon: Building,
  },
  {
    slug: "nettoyage-evenementiel",
    title: "Nettoyage événementiel",
    icon: PartyPopper,
  },
];

interface ServiceMegaMenuProps {
  onClose: () => void;
}

const ServiceMegaMenu = ({ onClose }: ServiceMegaMenuProps) => {
  return (
    <div className="absolute top-full left-0 right-0 w-screen bg-primary z-50 animate-fade-in">
      <div className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                onClick={onClose}
                className="flex items-center gap-3 text-primary-foreground hover:text-foreground transition-colors group py-2"
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{service.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceMegaMenu;
