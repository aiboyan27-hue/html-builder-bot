import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground max-w-lg leading-tight">
            Ready to Experience a Prime Cleaning?
          </h2>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-bold uppercase tracking-wide rounded-md w-fit"
          >
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
