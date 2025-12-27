import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="relative bg-primary rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Professional & Reliable
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 max-w-xl mx-auto">
              Instant pricing. No commitment. Book your peace of mind today.
            </h2>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-10 text-base mt-4"
            >
              <Link to="/booking">Book Cleaning Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
