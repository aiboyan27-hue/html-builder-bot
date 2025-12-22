import { Sparkles, Home, RefreshCw, Building, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Customize your deep clean. We focus on your priorities for a perfect finish.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Home,
    title: "Move In/Out",
    description: "Start fresh or leave clean. We handle the heavy lifting for your transition.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: RefreshCw,
    title: "Standard Upkeep",
    description: "Weekly or bi-weekly maintenance to keep your home sparkling.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Building,
    title: "Vacation Rental",
    description: "Turnovers made easy. Get those 5-star host reviews effortlessly.",
    color: "bg-violet-500/10 text-violet-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What we clean
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive cleaning solutions tailored to your lifestyle and needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-2xl border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
