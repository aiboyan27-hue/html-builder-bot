const Story = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Image Card */}
          <div className="relative mb-10">
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop"
                alt="Prime Cleaner founders"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Name Tags */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-sm font-medium text-foreground">Ana (Mom)</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-sm font-medium text-foreground">Jay (Son)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Built by a mom & son.
              <br />
              Trusted by thousands.
            </h2>
          </div>

          {/* Body Text */}
          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We started The Prime Cleaner with one mission: to bring peace of mind and high standards to every home we enter.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From background-checked crews to non-toxic supplies, everything we do is designed to earn your trust and keep it.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're local. We're consistent.
              <br />
              And we treat every home like it's our own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
