import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, ChevronDown, Menu, X, Sparkles, Home, RefreshCw, Building, Droplets, Hammer, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import auraLogo from "@/assets/aura-logo.png";

const services = [
  { slug: "nettoyage-en-profondeur", title: "Nettoyage en profondeur", icon: Sparkles },
  { slug: "nettoyage-standard", title: "Nettoyage standard", icon: RefreshCw },
  { slug: "nettoyage-demenagement", title: "Nettoyage après déménagement", icon: Home },
  { slug: "nettoyage-vitres", title: "Nettoyage de vitres", icon: Droplets },
  { slug: "nettoyage-apres-construction", title: "Nettoyage après construction", icon: Hammer },
  { slug: "nettoyage-tapis", title: "Nettoyage de tapis", icon: Building },
  { slug: "nettoyage-commercial", title: "Nettoyage commercial", icon: Building },
  { slug: "nettoyage-evenementiel", title: "Nettoyage événementiel", icon: PartyPopper },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const handleServiceClick = (slug: string) => {
    const path = `/services/${slug}`;
    setMobileMenuOpen(false);
    setServicesOpen(false);
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/30">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick("/")} className="flex items-center">
            <img 
              src={auraLogo} 
              alt="Aura Nettoyage" 
              className="h-14 md:h-16 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => handleNavClick("/about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              À propos
            </button>
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
            <button
              onClick={() => handleNavClick("/contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
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
              onClick={() => handleNavClick("/booking")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide"
            >
              Réserver
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
                <button
                  key={service.slug}
                  onClick={() => handleServiceClick(service.slug)}
                  className="flex items-center gap-3 text-primary-foreground hover:text-foreground transition-colors group py-2 text-left"
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4 space-y-4">
            <button
              onClick={() => handleNavClick("/about")}
              className="block py-2 text-foreground font-medium w-full text-left"
            >
              À propos
            </button>
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
                      <button
                        key={service.slug}
                        onClick={() => handleServiceClick(service.slug)}
                        className="flex items-center gap-3 py-1.5 text-muted-foreground hover:text-primary w-full text-left"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{service.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <button
              onClick={() => handleNavClick("/contact")}
              className="block py-2 text-foreground font-medium w-full text-left"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="tel:5141234567"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                (514) 123-4567
              </a>
              <Button onClick={() => handleNavClick("/booking")} className="w-full rounded-full py-3 font-bold uppercase tracking-wide">
                Réserver
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
