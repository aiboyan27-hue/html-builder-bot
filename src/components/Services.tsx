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
    title: "Nettoyage en profondeur",
    description:
      "Un nettoyage en profondeur, fait selon ce qui est important pour vous. Parce que les petits détails font toute la différence.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
  },
  {
    slug: "move-in-out",
    title: "Nettoyage avant emménagement",
    description:
      "Emménagez dans un espace propre et accueillant. Tout est nettoyé et désinfecté avant votre arrivée.",
    image: "/lovable-uploads/service-emmenagement.png",
  },
  {
    slug: "post-construction",
    title: "Nettoyage après déménagement",
    description:
      "Un nettoyage complet avant de remettre les clés. Pour partir sans souci.",
    image: "/lovable-uploads/service-demenagement.png",
  },
  {
    slug: "office-cleaning",
    title: "Nettoyage commercial",
    description:
      "Un entretien régulier pour garder vos espaces de travail propres, bien entretenus et professionnels, autant pour vos employés que pour vos clients.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    slug: "regular-cleaning",
    title: "Nettoyage régulier",
    description:
      "Profitez d'une maison propre et fraîche, semaine après semaine. On s'occupe de l'entretien régulier pour vous simplifier la vie.",
    image: "/lovable-uploads/service-nettoyage-regulier.png",
  },
  {
    slug: "post-construction",
    title: "Nettoyage après construction",
    description:
      "Un nettoyage minutieux après les travaux, pour un espace propre et prêt à être utilisé.",
    image: "/lovable-uploads/service-apres-construction.png",
  },
  {
    slug: "nettoyage-evenementiel",
    title: "Nettoyage événementiel",
    description:
      "Un nettoyage rapide et efficace avant ou après vos événements.",
    image: "/lovable-uploads/service-evenementiel.png",
  },
  {
    slug: "nettoyage-ceramique",
    title: "Nettoyage de céramique et joints",
    description:
      "Redonnez à vos surfaces en céramique un aspect propre et rafraîchi grâce à un nettoyage en profondeur réalisé par des experts.",
    image: "/lovable-uploads/service-ceramique.png",
  },
  {
    slug: "nettoyage-location-courte-duree",
    title: "Nettoyage pour locations de courte durée",
    description:
      "Idéal pour les locations de courte durée. Un nettoyage fiable entre chaque séjour pour obtenir des avis 5 étoiles, séjour après séjour.",
    image: "/lovable-uploads/service-location-courte-duree.png",
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
            Nos services
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
                    to="/commercial"
                    className="group block h-full"
                  >
                    <div className="h-full bg-[#FFF8E7] rounded-2xl overflow-hidden shadow-sm hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
