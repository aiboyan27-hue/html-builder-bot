import { Link } from "react-router-dom";
import { Star } from "lucide-react";

// ============================================
// EDITABLE REVIEWS DATA - Update this list to change reviews
// ============================================
const reviews = [
  {
    id: 1,
    name: "Diane Fargale",
    timeAgo: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "I had such a wonderful experience; timely professional and made my new apartment sparkle!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ryan Wilner",
    timeAgo: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Excellent, consistent service! Great communication and professionalism. I highly recommend.",
    rating: 5,
  },
  {
    id: 3,
    name: "Irene B",
    timeAgo: "Local guide • 2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Kerli and Michelle were amazing!!! I was in need of a deep cleaning and they definitely delivered. I loved the attention to detail an... very much appreciated them asking for a",
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
            What your neighbors say
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
                  <p className="text-xs text-muted-foreground">{review.timeAgo}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6">
                {review.text}
              </p>

              {/* Posted on Google */}
              <div className="mt-auto">
                <p className="text-xs text-muted-foreground mb-1">Posted On</p>
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
              <span className="text-6xl md:text-7xl font-bold text-primary">4.9</span>
              <StarRating size="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Google rating from 350+ users
            </h3>
            <p className="text-muted-foreground">
              Trusted across Miami with a nearly perfect score. Real feedback from real clients.
            </p>
          </div>

          {/* Homes Cleaned Stat */}
          <div>
            <div className="mb-4">
              <span className="text-6xl md:text-7xl font-bold text-foreground">7000+</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Homes cleaned across South Florida
            </h3>
            <p className="text-muted-foreground">
              From one-time resets to long-term clients. We've been trusted thousands of times to get the job done right.
            </p>
          </div>
        </div>

        {/* CTA Row */}
        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left: Text */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground italic mb-3">
                Professional & Reliable
              </h3>
              <p className="text-muted-foreground max-w-lg">
                You can book directly on our site or we are also available to chat via text, phone or email about your cleaning. Contact us today
              </p>
            </div>

            {/* Right: Button */}
            <div className="flex-shrink-0">
              <Link
                to="/booking"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-sm"
              >
                Book Cleaning Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
