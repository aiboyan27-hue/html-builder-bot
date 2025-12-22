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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-sm">
              PC
            </div>
            <span className="font-bold text-lg text-foreground">Prime Cleaner</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
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
                  <Link
                    to="/services/deep-cleaning"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-colors"
                  >
                    Deep Cleaning
                  </Link>
                  <Link
                    to="/services/move-in-out"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-colors"
                  >
                    Move In/Out
                  </Link>
                  <Link
                    to="/services/standard-cleaning"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-colors"
                  >
                    Standard Cleaning
                  </Link>
                  <Link
                    to="/services/vacation-rental"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent rounded-lg transition-colors"
                  >
                    Vacation Rental
                  </Link>
                </div>
              </div>
            </div>
            {isHome ? (
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Reviews
              </button>
            ) : (
              <Link
                to="/#reviews"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Reviews
              </Link>
            )}
            <Link
              to="/quote"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:3055752776"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (305) 575-2776
            </a>
            <Button asChild size="sm" className="rounded-full px-6">
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
              About
            </Link>
            <div className="space-y-2">
              <p className="py-2 text-foreground font-medium">Services</p>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/deep-cleaning"
                  className="block py-1 text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Deep Cleaning
                </Link>
                <Link
                  to="/services/move-in-out"
                  className="block py-1 text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Move In/Out
                </Link>
                <Link
                  to="/services/standard-cleaning"
                  className="block py-1 text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Standard Cleaning
                </Link>
                <Link
                  to="/services/vacation-rental"
                  className="block py-1 text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vacation Rental
                </Link>
              </div>
            </div>
            <Link
              to="/quote"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="tel:3055752776"
                className="flex items-center gap-2 text-foreground font-medium"
              >
                <Phone className="w-4 h-4" />
                (305) 575-2776
              </a>
              <Button asChild className="w-full rounded-full">
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
