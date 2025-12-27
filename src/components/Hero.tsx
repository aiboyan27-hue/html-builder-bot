import { Link } from "react-router-dom";
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-background -z-10" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <div className="flex -space-x-1">
                {[...Array(3)].map((_, i) => <div key={i} className="w-5 h-5 rounded-full bg-primary/20 border-2 border-accent" />)}
              </div>
              Miami Locals Love Us
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
              We clean.
              <br />
              You'll find{" "}
              <span className="text-primary relative">
                <span className="inline-block h-[1.2em] overflow-hidden align-bottom">
                  <span className="flex flex-col animate-text-rotate">
                    <span>joy.</span>
                    <span>time.</span>
                    <span>peace.</span>
                    <span>joy.</span>
                  </span>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in-up animation-delay-400">
              Feel good about your clean home again. Trusted by 7,000+ clients
              across South Florida for reliable, high-standard cleaning.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Button asChild size="lg" className="rounded-full px-8 text-base">
                <Link to="/booking">Get Instant Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
                <a href="tel:3055752776">Call (305) 575-2776</a>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground">
                      {String.fromCharCode(65 + i)}
                    </div>)}
                </div>
                <span className="text-2xl font-bold text-foreground">+7k</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  360+ 5-Star Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated animate-float">
              <img alt="Professional cleaner at work" className="w-full h-auto object-cover" src="/lovable-uploads/19cd016a-0dd4-44ae-9eb3-6b8ee9cdfec4.png" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      100% Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;