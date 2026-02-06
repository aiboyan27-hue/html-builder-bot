import { Star } from "lucide-react";

const reviews = [
  {
    name: "Tamim Moradi",
    text: "Service incroyable. Prix concurrentiel. Tout simplement satisfait de la qualité du service.",
    avatar: "/lovable-uploads/avatar-tamim.png",
    timeAgo: "Il y a une semaine",
    link: "https://www.google.com/maps/contrib/114338990355153957049/place/ChIJNXRhTZ2XCwQRv3iD9ynG5Ig/@45.4783825,-74.4791624,9z/data=!4m6!1m5!8m4!1e1!2s114338990355153957049!3m1!1e1?hl=fr-CA&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Nadjombe J",
    badge: "Guide Local",
    text: "Bon service professionnel, je suis très impressionné par la rapidité et la propreté. Ils ont nettoyé mon appartement en 2 heures et il avait l'air complètement nouveau.",
    avatar: "/lovable-uploads/avatar-nadjombe.png",
    timeAgo: "Il y a 2 semaines",
    link: "https://www.google.com/maps/contrib/111693630022488787170/place/ChIJNXRhTZ2XCwQRv3iD9ynG5Ig/@25.9029805,-74.5019456,4z/data=!4m6!1m5!8m4!1e1!2s111693630022488787170!3m1!1e1?hl=fr-CA&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Alejandro Costas",
    text: "Service impeccable autant clientèle que professionnel. L'équipe a fait mes 3 étages de maison et je suis très satisfait. Je recommande!",
    avatar: "",
    timeAgo: "Il y a 2 semaines",
    link: "https://www.google.com/maps/contrib/117747275226408416173/place/ChIJNXRhTZ2XCwQRv3iD9ynG5Ig/@32.8906403,-80.355104,5z/data=!4m6!1m5!8m4!1e1!2s117747275226408416173!3m1!1e1?hl=fr-CA&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
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
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground text-sm hover:underline"
                  >
                    {review.name}
                  </a>
                  {review.badge && (
                    <p className="text-xs text-muted-foreground">{review.badge}</p>
                  )}
                  <p className="text-xs text-muted-foreground">{review.timeAgo}</p>
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
