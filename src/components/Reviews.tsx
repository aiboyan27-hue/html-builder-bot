import { Star } from "lucide-react";

const reviews = [
  {
    name: "Diane Fargale",
    time: "1 week ago",
    text: "I had such a wonderful experience; timely, professional and made my new apartment sparkle! Highly recommend.",
    rating: 5,
  },
  {
    name: "Ryan Wilner",
    time: "2 weeks ago",
    text: "Excellent, consistent service! Great communication and professionalism. I highly recommend for anyone in Miami.",
    rating: 5,
  },
  {
    name: "Irene B.",
    time: "Local Guide",
    text: "Kerli and Michelle were amazing!!! I was in need of a deep cleaning and they definitely delivered. Attention to detail was superb.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">4.9</div>
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            What your neighbors say
          </h2>
          <p className="text-muted-foreground">Based on 350+ Google Reviews</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="p-6 bg-card rounded-2xl border border-border hover:shadow-card transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.time}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
