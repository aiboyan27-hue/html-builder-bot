import { Star } from "lucide-react";

const reviews = [
  {
    name: "Diane Fargale",
    time: "1 week ago",
    text: "I had such a wonderful experience; timely professional and made my new apartment sparkle!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Ryan Wilner",
    time: "2 weeks ago",
    text: "Excellent, consistent service! Great communication and professionalism. I highly recommend.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Irene B",
    time: "Local guide • 2 weeks ago",
    text: "Kerli and Michelle were amazing!!! I was in need of a deep cleaning and they definitely delivered. I loved the attention to detail an... very much appreciated them asking for a",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
];

const ContactReviews = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
          What your neighbors say
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
                  <p className="text-xs text-muted-foreground">{review.time}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {review.text}
              </p>

              {/* Posted on Google */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-1">Posted On</p>
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
              <span className="text-6xl md:text-7xl font-bold text-primary">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
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
            <span className="text-6xl md:text-7xl font-bold text-foreground block mb-4">
              7000+
            </span>
            <h3 className="text-xl font-bold text-foreground mb-2">
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

export default ContactReviews;
