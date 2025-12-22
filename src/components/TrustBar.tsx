const TrustBar = () => {
  const logos = [
    "Google", "Yelp", "Thumbtack", "HomeAdvisor", 
    "Angi", "Nextdoor", "BBB", "Trust Pilot", "Houzz"
  ];

  return (
    <section className="py-8 border-y border-border bg-muted/30 overflow-hidden">
      <div className="container flex flex-col sm:flex-row items-center gap-6">
        <div className="text-center sm:text-left shrink-0">
          <p className="text-3xl font-bold text-foreground">7,000+</p>
          <p className="text-sm text-muted-foreground">Clients Trust Prime</p>
        </div>
        
        <div className="w-px h-12 bg-border hidden sm:block" />
        
        <div className="flex-1 overflow-hidden relative">
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-2 mx-2 bg-background rounded-lg text-muted-foreground text-sm font-medium"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
