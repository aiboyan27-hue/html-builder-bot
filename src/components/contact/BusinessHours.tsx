import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Mon-Fri", hours: "8:30 AM - 7:30 PM" },
  { day: "Sat", hours: "8:30 AM - 7:30 PM" },
  { day: "Sun", hours: "9:00 AM - 5:00 PM" },
];

const BusinessHours = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
            Business Hours
          </h2>

          {/* Hours Table */}
          <div className="space-y-1">
            {/* Header */}
            <div className="grid grid-cols-2 gap-8 pb-2">
              <span className="text-base text-muted-foreground">Day</span>
              <span className="text-base text-muted-foreground">Hours</span>
            </div>
            {/* Rows */}
            {hours.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-8 py-3">
                <span className="text-base font-medium text-foreground">{item.day}</span>
                <span className="text-base text-foreground">{item.hours}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-bold uppercase tracking-wide rounded-md"
          >
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
