import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const ContactFooter = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Contact */}
          <div className="space-y-6">
            {/* Logo Placeholder */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold uppercase tracking-wide">THE</span>
                <span className="text-sm font-bold uppercase tracking-wide">PRIME</span>
                <span className="text-sm font-bold text-primary uppercase tracking-wide">CLEANER</span>
              </div>
            </div>

            <p className="text-sm text-background/60">
              © 2025 The Prime Cleaner.
            </p>

            <div className="space-y-2">
              <p className="text-sm text-background/80">
                Prefer to book by phone?
                <br />
                Call or text us at
              </p>
              <a
                href="tel:3055752776"
                className="text-sm text-background underline hover:text-primary transition-colors"
              >
                (305) 575-2776
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <Link to="/" className="block text-sm text-background/80 hover:text-background transition-colors">
              Home
            </Link>
            <Link to="/quote" className="block text-sm text-background/80 hover:text-background transition-colors">
              Book now
            </Link>
            <Link to="/about" className="block text-sm text-background/80 hover:text-background transition-colors">
              About
            </Link>
            <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
              Careers
            </a>
            <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
              Terms of use
            </a>
            <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
              Privacy policy
            </a>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background mb-2">Services</h4>
            <Link to="/services/deep-cleaning" className="block text-sm text-background/80 hover:text-background transition-colors">
              Deep Cleaning
            </Link>
            <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
              Window Cleaning
            </a>
            <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
              Carpet Cleaning
            </a>
            <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
              Tile & Grout Cleaning
            </a>
            <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
              Post Fumigation Cleaning
            </a>
            <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
              Event Cleaning
            </a>
            <Link to="/services/move-in-out" className="block text-sm text-background/80 hover:text-background transition-colors">
              Move In Cleaning
            </Link>
            <Link to="/services/standard-cleaning" className="block text-sm text-background/80 hover:text-background transition-colors">
              Standard Cleaning
            </Link>
            <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">
              Post Construction
            </a>
          </div>

          {/* Mascot Placeholder */}
          <div className="hidden lg:flex items-start justify-end">
            <div className="bg-primary/20 rounded-2xl p-6 text-center">
              <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-4xl">🦆</span>
              </div>
              <p className="text-xs text-background/60 italic">
                "Let's get quacking on that mess!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
