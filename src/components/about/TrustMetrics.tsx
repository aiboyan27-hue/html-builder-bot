import { Star } from "lucide-react";

const TrustMetrics = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Rating */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-primary">
                4.9
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Google rating from 350+ users
            </h3>
            <p className="text-muted-foreground">
              Trusted across Miami with a nearly perfect score. Real feedback from real clients.
            </p>
          </div>

          {/* Right - Homes Cleaned */}
          <div>
            <div className="mb-4">
              <span className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground">
                7000+
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Homes cleaned across South Florida
            </h3>
            <p className="text-muted-foreground">
              From one-time resets to long-term clients. We've been trusted thousands of times to get the job done right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
