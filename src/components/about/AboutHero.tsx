const AboutHero = () => {
  return <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Maison propre, plus de liberté.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Personnel rigoureusement sélectionnées. Produits non toxiques. Résultats constants.
            <br />
              trust, and growth — one clean at a time
            </p>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden shadow-elevated max-w-md lg:max-w-lg">
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=500&fit=crop" alt="Team members" className="w-full h-auto object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutHero;