import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Clock, DollarSign, Sparkles, Home, RefreshCw, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const servicesData = {
  "deep-cleaning": {
    icon: Sparkles,
    title: "Deep Cleaning",
    subtitle: "A thorough, top-to-bottom clean for your entire home",
    description: "Our deep cleaning service goes beyond the surface. We tackle every corner, every crevice, and every often-forgotten spot to give your home a complete refresh. Perfect for first-time clients, seasonal cleaning, or when your home needs extra attention.",
    price: "From $199",
    duration: "4-6 hours",
    includes: [
      "All surfaces wiped and sanitized",
      "Inside appliances (oven, microwave, fridge)",
      "Baseboards and door frames cleaned",
      "Light fixtures and ceiling fans dusted",
      "Inside cabinets and drawers wiped",
      "Windows cleaned (interior)",
      "Detailed bathroom scrubbing",
      "Kitchen degreasing",
    ],
    perfectFor: [
      "First-time clients",
      "Before or after events",
      "Seasonal deep cleaning",
      "Moving into a new home",
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  },
  "move-in-out": {
    icon: Home,
    title: "Move In/Out Cleaning",
    subtitle: "Start fresh or leave spotless",
    description: "Moving is stressful enough. Let us handle the cleaning so you can focus on what matters. Whether you're moving into a new place or leaving your old one, we'll make sure every surface sparkles.",
    price: "From $249",
    duration: "5-8 hours",
    includes: [
      "Complete deep cleaning of all rooms",
      "Inside all cabinets and closets",
      "All appliances cleaned inside and out",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Garage sweep (if applicable)",
      "Removal of any left-behind debris",
      "Final walkthrough inspection",
    ],
    perfectFor: [
      "Renters getting deposit back",
      "Sellers preparing for showing",
      "New homeowners moving in",
      "Property managers",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  "standard-cleaning": {
    icon: RefreshCw,
    title: "Standard Upkeep",
    subtitle: "Regular maintenance to keep your home sparkling",
    description: "Our most popular service for busy Miami families. We'll maintain your home's cleanliness with regular visits, so you always come home to a fresh, welcoming space. Available weekly, bi-weekly, or monthly.",
    price: "From $129",
    duration: "2-3 hours",
    includes: [
      "Dusting all accessible surfaces",
      "Vacuuming and mopping floors",
      "Kitchen counters and appliances (exterior)",
      "Bathroom cleaning and sanitizing",
      "Bed making and tidying",
      "Trash removal",
      "Mirror and glass cleaning",
      "General tidying up",
    ],
    perfectFor: [
      "Busy professionals",
      "Families with children",
      "Pet owners",
      "Anyone who values their time",
    ],
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=800&h=600&fit=crop",
  },
  "vacation-rental": {
    icon: Building,
    title: "Vacation Rental Turnover",
    subtitle: "5-star clean for 5-star reviews",
    description: "Quick, thorough turnovers that keep your guests happy and your reviews glowing. We understand the tight schedules of Airbnb and VRBO hosts, and we deliver hotel-quality cleaning every time.",
    price: "From $149",
    duration: "2-4 hours",
    includes: [
      "Full property cleaning",
      "Fresh linens and bed making",
      "Towel arrangement (hotel-style)",
      "Restocking essentials check",
      "Kitchen reset and sanitization",
      "Appliance spot-check",
      "Welcome staging (if requested)",
      "Photo-ready presentation",
    ],
    perfectFor: [
      "Airbnb hosts",
      "VRBO property managers",
      "Short-term rental owners",
      "Property management companies",
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-light via-background to-background">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{service.subtitle}</p>
              <p className="text-muted-foreground mb-8">{service.description}</p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{service.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{service.duration}</span>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/booking">Get Your Quote</Link>
              </Button>
            </div>

            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-3xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
              <div className="grid gap-4">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Perfect For</h2>
              <div className="grid gap-4">
                {service.perfectFor.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-muted/50 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">Not sure which service you need?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get in touch and we'll help you choose the perfect cleaning plan for your home.
                </p>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="tel:3055752776">Call (305) 575-2776</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready for a Spotless Home?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get your personalized quote in under 2 minutes. No commitment required.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-10">
            <Link to="/booking">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
