import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Award, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const milestones = [
  { year: "2018", title: "The Beginning", description: "Started as a small family operation with just Kerli and her son, cleaning homes in the Miami area." },
  { year: "2019", title: "Growing Trust", description: "Reached 500 satisfied clients and hired our first team members." },
  { year: "2021", title: "Expanding Services", description: "Launched vacation rental cleaning and move in/out services." },
  { year: "2023", title: "7,000+ Clients", description: "Became one of Miami's most trusted cleaning services with 6,000+ completed cleanings." },
];

const values = [
  { icon: Heart, title: "Care Like Family", description: "We treat every home as if it were our own mother's. That's the Prime Cleaner promise." },
  { icon: Users, title: "Consistent Teams", description: "You'll see the same friendly faces each visit. We build relationships, not just clean homes." },
  { icon: Award, title: "Excellence Always", description: "We're never satisfied with 'good enough.' Every corner, every surface gets our full attention." },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-light via-background to-background">
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Built by a Mom & Son Who Care
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                The Prime Cleaner started in 2018 when Kerli, a mother who had spent years cleaning homes for her own family, decided to share her passion with the Miami community. Her son joined her with a mission: to create a cleaning service that treats every home like family.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to serve over 7,000 clients across South Florida, but we've never lost that family touch. Every cleaner on our team is trained to deliver the same care and attention that started in Kerli's own home.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="Clean modern home"
                className="rounded-3xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-elevated border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
                    K
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Kerli</p>
                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              These aren't just words on a wall. They guide every decision we make and every home we clean.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8 rounded-2xl bg-muted/30">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From a two-person team to Miami's most trusted cleaning service.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm text-primary font-medium mb-1">{milestone.year}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">7,000+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">6,000+</p>
              <p className="text-muted-foreground">Cleanings Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</p>
              <p className="text-muted-foreground flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> Rating
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</p>
              <p className="text-muted-foreground">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Experience the Prime Cleaner Difference
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands of Miami families who trust us with their homes.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-10">
            <Link to="/quote">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
