import { useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-sm">
              PC
            </div>
            <span className="font-bold text-lg text-foreground">Prime Cleaner</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                  servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="bg-card rounded-xl shadow-elevated border border-border p-2 min-w-[180px]">
                  <a href="#services" className="block px-4 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-colors">
                    Deep Cleaning
                  </a>
                  <a href="#services" className="block px-4 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-colors">
                    Move In/Out
                  </a>
                  <a href="#services" className="block px-4 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-colors">
                    Standard Cleaning
                  </a>
                </div>
              </div>
            </div>
            <a href="#reviews" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:3055752776" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (305) 575-2776
            </a>
            <Button size="sm" className="rounded-full px-6">
              Book Now
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4 space-y-4">
            <a href="#about" className="block py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#services" className="block py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#reviews" className="block py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              Reviews
            </a>
            <a href="#contact" className="block py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <div className="pt-4 border-t border-border space-y-3">
              <a href="tel:3055752776" className="flex items-center gap-2 text-foreground font-medium">
                <Phone className="w-4 h-4" />
                (305) 575-2776
              </a>
              <Button className="w-full rounded-full">Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
