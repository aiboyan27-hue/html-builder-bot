import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <span className="text-xs font-bold text-foreground uppercase tracking-wide">THE</span>
              <span className="text-sm font-bold text-foreground uppercase tracking-wide">PRIME</span>
              <span className="text-sm font-bold text-primary uppercase tracking-wide">CLEANER</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <div className="relative">
              <button
                className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
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
                <div className="bg-card rounded-xl shadow-elevated border border-border p-2 min-w-[200px] z-50">
                  <Link
                    to="/services/deep-cleaning"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  >
                    Deep Cleaning
                  </Link>
                  <Link
                    to="/services/move-in-out"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  >
                    Move In/Out
                  </Link>
                  <Link
                    to="/services/standard-cleaning"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  >
                    Standard Cleaning
                  </Link>
                  <Link
                    to="/services/vacation-rental"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  >
                    Vacation Rental
                  </Link>
                </div>
              </div>
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
              Sign In
            </Link>
          </nav>

          {/* Desktop CTA - Right aligned */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:3055752776"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (305) 575 - 2776
            </a>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide"
            >
              <Link to="/quote">Book Now</Link>
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
            <Link
              to="/about"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="space-y-2">
              <p className="py-2 text-foreground font-medium flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </p>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/deep-cleaning"
                  className="block py-1.5 text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Deep Cleaning
                </Link>
                <Link
                  to="/services/move-in-out"
                  className="block py-1.5 text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Move In/Out
                </Link>
                <Link
                  to="/services/standard-cleaning"
                  className="block py-1.5 text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Standard Cleaning
                </Link>
                <Link
                  to="/services/vacation-rental"
                  className="block py-1.5 text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vacation Rental
                </Link>
              </div>
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
              Sign In
            </Link>
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="tel:3055752776"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                (305) 575 - 2776
              </a>
              <Button asChild className="w-full rounded-full py-3 font-bold uppercase tracking-wide">
                <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                  Book Now
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
