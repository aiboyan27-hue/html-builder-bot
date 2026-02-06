import { Star } from "lucide-react";

const reviews = [
  {
    name: "Tamim Moradi",
    text: "Service incroyable. Prix concurrentiel. Tout simplement satisfait de la qualité du service.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Nadjombe J",
    badge: "Guide Local",
    text: "Bon service professionnel, je suis très impressionné par la rapidité et la propreté. Ils ont nettoyé mon appartement en 2 heures et il avait l'air complètement nouveau.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Alejandro Costas",
    text: "Service impeccable autant clientèle que professionnel. L'équipe a fait mes 3 étages de maison et je suis très satisfait. Je recommande!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

const ContactReviews = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
          Ce que vos voisins disent
        </h2>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border/50 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  {review.badge && (
                    <p className="text-xs text-muted-foreground">{review.badge}</p>
                  )}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {review.text}
              </p>

              {/* Posted on Google */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Publié sur</p>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Rating Stat */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              ★★★★★ 5 étoiles – Avis Google
            </h3>
            <p className="text-muted-foreground">
              Appréciés partout au Québec avec une note parfaite. Des avis authentiques de clients réels.
            </p>
          </div>

          {/* Homes Cleaned Stat */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Des centaines de maisons nettoyées à travers le Québec
            </h3>
            <p className="text-muted-foreground">
              Du nettoyage occasionnel aux nettoyages réguliers, des centaines de clients nous font confiance pour un travail bien fait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactReviews;
