import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect, useCallback } from "react";

// ============================================
// EDITABLE SERVICES DATA - Update this list to change services
// ============================================
const services = [
  {
    slug: "house-condo",
    title: "House & Condo Cleaning",
    description:
      "Professional cleaning for houses and condos. A reliable, detailed clean that keeps your space fresh and comfortable.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
  },
  {
    slug: "move-in-out",
    title: "Move In & Out Cleaning",
    description:
      "A thorough move-in / move-out clean so you can hand over (or receive) a spotless home with confidence.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    slug: "post-construction",
    title: "Post Construction Cleaning",
    description:
      "Deep post-renovation cleaning to remove dust and debris and make the space move-in ready.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    description:
      "Consistent office cleaning to keep your workspace professional, healthy, and presentable for staff and clients.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    slug: "regular-cleaning",
    title: "Regular House Cleaning",
    description:
      "Recurring weekly or bi-weekly cleaning to maintain a tidy home without the stress.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
  },
  {
    slug: "power-washing",
    title: "Power Washing Cleaning",
    description:
      "Exterior power washing for driveways, patios, and outdoor surfaces for a clean, refreshed look.",
    image: "https://images.unsplash.com/photo-1558618047-f4b511b44991?w=600&h=400&fit=crop",
  },
  {
    slug: "after-party",
    title: "After Party Cleaning",
    description:
      "Before or after event cleaning to reset your space quickly—trash removal, surfaces, floors, and bathrooms.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
  },
  {
    slug: "eco-cleaning",
    title: "Eco Cleaning",
    description:
      "Green cleaning options using eco-friendly products for a healthier home and a lower environmental impact.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
];

const Services = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What we clean
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Arrow Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Carousel */}
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem
                  key={service.slug}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block h-full"
                  >
                    <div className="h-full bg-[#FFF8E7] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden rounded-t-2xl m-3 mb-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 pt-4">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 ${
                  index === current
                    ? "text-2xl"
                    : "text-xl opacity-50 hover:opacity-75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                🐥
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
