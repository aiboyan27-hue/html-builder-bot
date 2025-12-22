import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">Prime Cleaner</h3>
            <p className="text-sm text-background/60 mb-4">
              © 2025 The Prime Cleaner.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>
                <Link to="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>
                <Link
                  to="/services/deep-cleaning"
                  className="hover:text-background transition-colors"
                >
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services/move-in-out"
                  className="hover:text-background transition-colors"
                >
                  Move In/Out
                </Link>
              </li>
              <li>
                <Link
                  to="/services/standard-cleaning"
                  className="hover:text-background transition-colors"
                >
                  Standard Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>
                <a
                  href="tel:3055752776"
                  className="hover:text-background transition-colors"
                >
                  (305) 575-2776
                </a>
              </li>
              <li>Miami, Florida</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
