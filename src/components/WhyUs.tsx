import { Shield, Leaf, Users, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "Vetted Pros", description: "Background checked & insured." },
  { icon: Leaf, title: "Eco-Friendly", description: "Safe for kids and pets." },
  { icon: Users, title: "Consistent Team", description: "Familiar faces every time." },
  { icon: Award, title: "6000+ Cleanings", description: "A track record of excellence." },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Miami locals trust us
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We're not just another cleaning company. Here's how we deliver on our promises over and over again.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Quote */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="Clean modern kitchen"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Quote card */}
            <div className="absolute -bottom-6 -left-6 right-12 bg-card rounded-2xl p-6 shadow-elevated border border-border">
              <h4 className="font-bold text-foreground mb-2">Built by a mom & son.</h4>
              <p className="text-sm text-muted-foreground italic">
                "We treat every home like it's our own. Everything we do is designed to earn your trust and keep it."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
