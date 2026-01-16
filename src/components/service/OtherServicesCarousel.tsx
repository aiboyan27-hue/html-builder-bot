import { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Sparkles, Home, RefreshCw, Building, Droplets, Hammer, Grid3X3, PartyPopper } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
const allServices = [{
  slug: "nettoyage-en-profondeur",
  title: "Nettoyage en profondeur",
  description: "Un nettoyage complet de votre maison de fond en comble",
  icon: Sparkles,
  image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
}, {
  slug: "nettoyage-standard",
  title: "Nettoyage standard",
  description: "Entretien régulier pour une maison toujours propre",
  icon: RefreshCw,
  image: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=400&h=300&fit=crop"
}, {
  slug: "nettoyage-demenagement",
  title: "Déménagement",
  description: "Nettoyage complet avant ou après déménagement",
  icon: Home,
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
}, {
  slug: "nettoyage-vitres",
  title: "Nettoyage de vitres",
  description: "Fenêtres cristallines et sans traces",
  icon: Droplets,
  image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop"
}, {
  slug: "nettoyage-apres-construction",
  title: "Après construction",
  description: "Élimination de la poussière et des débris de construction",
  icon: Hammer,
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
}, {
  slug: "nettoyage-tapis",
  title: "Nettoyage de tapis",
  description: "Nettoyage en profondeur de vos tapis et moquettes",
  icon: Building,
  image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop"
}, {
  slug: "nettoyage-ceramique-coulis",
  title: "Céramique & coulis",
  description: "Restauration de l'éclat de vos carrelages",
  icon: Grid3X3,
  image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop"
}, {
  slug: "nettoyage-evenementiel",
  title: "Événementiel",
  description: "Nettoyage avant et après vos événements",
  icon: PartyPopper,
  image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop"
}];
const OtherServicesCarousel = () => {
  const { serviceId } = useParams();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Filter out the current service
  const services = allServices.filter(s => s.slug !== serviceId);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Autres services
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <CarouselItem key={service.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="block group"
                  >
                    <div className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                          <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`text-xl transition-opacity ${
                current === index ? "opacity-100" : "opacity-40"
              }`}
              aria-label={`Aller au service ${index + 1}`}
            >
              🦆
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServicesCarousel;