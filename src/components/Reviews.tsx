import { Link } from "react-router-dom";
import { Star } from "lucide-react";

// ============================================
// EDITABLE REVIEWS DATA - Update this list to change reviews
// ============================================
const reviews = [
  {
    id: 1,
    name: "Tamim Moradi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Service incroyable. Prix concurrentiel. Tout simplement satisfait de la qualité du service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nadjombe J",
    badge: "Guide Local",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "Bon service professionnel, je suis très impressionné par la rapidité et la propreté. Ils ont nettoyé mon appartement en 2 heures et il avait l'air complètement nouveau.",
    rating: 5,
  },
  {
    id: 3,
    name: "Alejandro Costas",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "Service impeccable autant clientèle que professionnel. L'équipe a fait mes 3 étages de maison et je suis très satisfait. Je recommande!",
    rating: 5,
  },
];

const GoogleLogo = () => (
  <span className="text-sm font-medium">
    <span className="text-blue-500">G</span>
    <span className="text-red-500">o</span>
    <span className="text-yellow-500">o</span>
    <span className="text-blue-500">g</span>
    <span className="text-green-500">l</span>
    <span className="text-red-500">e</span>
  </span>
);

const StarRating = ({ count = 5, size = "w-4 h-4" }: { count?: number; size?: string }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className={`${size} fill-amber-400 text-amber-400`} />
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ce que vos voisins disent
          </h2>
        </div>

        {/* Reviews Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-muted/40 rounded-2xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="mb-4">
                <StarRating />
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {review.name}
                  </h4>
                  {review.badge && (
                    <p className="text-xs text-muted-foreground">{review.badge}</p>
                  )}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6">
                {review.text}
              </p>

              {/* Posted on Google */}
              <div className="mt-auto">
                <p className="text-xs text-muted-foreground mb-1">Publié sur</p>
                <GoogleLogo />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Rating Stat */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <StarRating size="w-6 h-6" />
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

        {/* CTA Row */}
        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left: Text */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground italic mb-3">
                Professionnel et fiable
              </h3>
              <p className="text-muted-foreground max-w-lg">
                Contactez-nous dès aujourd'hui pour obtenir une soumission personnalisée. Nous sommes disponibles par téléphone, courriel ou texto.
              </p>
            </div>

            {/* Right: Button */}
            <div className="flex-shrink-0">
              <Link
                to="/commercial"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
              >
                Obtenir une soumission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
