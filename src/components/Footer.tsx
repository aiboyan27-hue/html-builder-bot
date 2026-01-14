import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import auraLogo from "@/assets/aura-logo.png";

const services = [
  { slug: "nettoyage-en-profondeur", title: "Nettoyage en profondeur" },
  { slug: "nettoyage-standard", title: "Nettoyage régulier" },
  { slug: "nettoyage-demenagement", title: "Nettoyage d'emménagement et de déménagement" },
  { slug: "nettoyage-vitres", title: "Nettoyage de vitres" },
  { slug: "nettoyage-apres-construction", title: "Nettoyage après construction" },
  { slug: "nettoyage-tapis", title: "Nettoyage de tapis" },
  { slug: "nettoyage-ceramique", title: "Nettoyage de céramique et joints" },
  { slug: "nettoyage-evenementiel", title: "Nettoyage événementiel" },
  { slug: "nettoyage-commercial", title: "Nettoyage commercial" },
];

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
                <Link to="/commercial" className="hover:text-primary-foreground transition-colors">
                  Obtenir une soumission
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
                <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
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
              <li>
                <a
                  href="mailto:info@auranettoyage.ca"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@auranettoyage.ca
                </a>
              </li>
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
