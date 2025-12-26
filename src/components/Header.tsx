import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X, Sparkles, Home, RefreshCw, Building, Droplets, Hammer, Grid3X3, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { slug: "nettoyage-en-profondeur", title: "Nettoyage en profondeur", icon: Sparkles },
  { slug: "nettoyage-standard", title: "Nettoyage standard", icon: RefreshCw },
  { slug: "nettoyage-demenagement", title: "Nettoyage après déménagement", icon: Home },
  { slug: "nettoyage-vitres", title: "Nettoyage de vitres", icon: Droplets },
  { slug: "nettoyage-apres-construction", title: "Nettoyage après construction", icon: Hammer },
  { slug: "nettoyage-tapis", title: "Nettoyage de tapis", icon: Building },
  { slug: "nettoyage-ceramique-coulis", title: "Nettoyage céramique & coulis", icon: Grid3X3 },
  { slug: "nettoyage-evenementiel", title: "Nettoyage événementiel", icon: PartyPopper },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/30">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-primary-foreground rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold text-foreground uppercase tracking-wide">ÉLITE</span>
              <span className="text-sm font-bold text-primary uppercase tracking-wide">PROPRETÉ</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              À propos
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <Link
              to="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/signin"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Connexion
            </Link>
          </nav>

          {/* Desktop CTA - Right aligned */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:5141234567"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (514) 123-4567
            </a>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide"
            >
              <Link to="/quote">Réserver</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-width Services Mega Menu */}
      <div
        className={`absolute top-full left-0 right-0 w-full bg-primary overflow-hidden transition-all duration-300 ease-in-out ${
          servicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={() => setServicesOpen(false)}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4 space-y-4">
            <Link
              to="/about"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <div className="space-y-2">
              <button 
                className="w-full py-2 text-foreground font-medium flex items-center justify-between"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2 bg-primary/10 rounded-lg py-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 py-1.5 text-muted-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{service.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/signin"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connexion
            </Link>
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="tel:5141234567"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                (514) 123-4567
              </a>
              <Button asChild className="w-full rounded-full py-3 font-bold uppercase tracking-wide">
                <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                  Réserver
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
