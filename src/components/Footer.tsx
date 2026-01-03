import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import auraLogo from "@/assets/aura-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img 
              src={auraLogo} 
              alt="Aura Nettoyage" 
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/70 mb-6">
              Service de nettoyage professionnel et fiable pour votre tranquillité d'esprit.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <Link to="/" className="hover:text-primary-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-primary-foreground transition-colors">
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <Link
                  to="/services/nettoyage-en-profondeur"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Nettoyage en profondeur
                </Link>
              </li>
              <li>
                <Link
                  to="/services/nettoyage-demenagement"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Nettoyage déménagement
                </Link>
              </li>
              <li>
                <Link
                  to="/services/nettoyage-standard"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Nettoyage standard
                </Link>
              </li>
              <li>
                <Link
                  to="/services/nettoyage-commercial"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Nettoyage commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a
                  href="tel:5141234567"
                  className="hover:text-primary-foreground transition-colors"
                >
                  (514) 123-4567
                </a>
              </li>
              <li>info@auranettoyage.ca</li>
              <li>Montréal, Québec</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Aura Nettoyage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;