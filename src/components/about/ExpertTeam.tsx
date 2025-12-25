const ExpertTeam = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=450&fit=crop"
              alt="Expert cleaning team"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right - Text */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Expert Cleaning Team
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You can feel confident that our cleaning team will care for your home like it's their own. All cleaners are background-checked and take pride in delivering consistent, high-quality results. We've completed thousands of cleanings, and we follow a detailed checklist to ensure every visit meets your standard.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Clear Pricing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use a transparent and standardized pricing system based on the size and condition of your property. Contact us today or fill out our online form for a personalized quote. We accept credit card payments and offer auto-pay so you don't have to think about it again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
