import { 
  Shield, 
  Droplets, 
  Users, 
  CheckSquare, 
  Wind, 
  Sparkles, 
  Star, 
  Heart 
} from "lucide-react";

const features = [
  { 
    icon: Shield, 
    title: "Vetted pros", 
    description: "Background checked and insured." 
  },
  { 
    icon: Droplets, 
    title: "Non-toxic products", 
    description: "Safe for your kids and pets." 
  },
  { 
    icon: Users, 
    title: "Same team, every time", 
    description: "Familiar faces every time." 
  },
  { 
    icon: CheckSquare, 
    title: "Custom checklists", 
    description: "Cleaning that fits your lifestyle." 
  },
  { 
    icon: Wind, 
    title: "HEPA vacuums", 
    description: "Captures dust and allergens." 
  },
  { 
    icon: Sparkles, 
    title: "Sanitized supplies", 
    description: "Fresh tools for every home." 
  },
  { 
    icon: Star, 
    title: "6000+ cleanings", 
    description: "A track record of trust." 
  },
  { 
    icon: Heart, 
    title: "360+ 5-star reviews", 
    description: "Loved by Miami locals." 
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header - Left aligned */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Miami locals trust us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We're not just another cleaning company.
            <br />
            Here's how we deliver on our promises over and over again.
          </p>
        </div>

        {/* Features Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-muted/60 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              
              {/* Text */}
              <div className="pt-1">
                <h3 className="font-medium text-muted-foreground text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-foreground font-medium text-sm leading-snug">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
