import { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Sparkles, Home, RefreshCw, Building, Droplets, Hammer, Grid3X3, PartyPopper } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselApi 
} from "@/components/ui/carousel";

const allServices = [
  {
    slug: "nettoyage-en-profondeur",
    title: "Nettoyage en profondeur",
    description: "Un nettoyage complet de votre maison de fond en comble",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
  },
  {
    slug: "nettoyage-standard",
    title: "Nettoyage standard",
    description: "Entretien régulier pour une maison toujours propre",
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=400&h=300&fit=crop",
  },
  {
    slug: "nettoyage-demenagement",
    title: "Déménagement",
    description: "Nettoyage complet avant ou après déménagement",
    icon: Home,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    slug: "nettoyage-vitres",
    title: "Nettoyage de vitres",
    description: "Fenêtres cristallines et sans traces",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop",
  },
  {
    slug: "nettoyage-apres-construction",
    title: "Après construction",
    description: "Élimination de la poussière et des débris de construction",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
  },
  {
    slug: "nettoyage-tapis",
    title: "Nettoyage de tapis",
    description: "Nettoyage en profondeur de vos tapis et moquettes",
    icon: Building,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop",
  },
  {
    slug: "nettoyage-ceramique-coulis",
    title: "Céramique & coulis",
    description: "Restauration de l'éclat de vos carrelages",
    icon: Grid3X3,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
  },
  {
    slug: "nettoyage-evenementiel",
    title: "Événementiel",
    description: "Nettoyage avant et après vos événements",
    icon: PartyPopper,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
  },
];

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
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Autres services
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Découvrez nos autres services de nettoyage professionnel
        </p>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={service.slug} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <Link to={`/services/${service.slug}`} className="block group">
                  <div className="rounded-2xl overflow-hidden bg-card border border-border">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Duck Dots Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(services.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index * 4)}
              className={`transition-all duration-200 ${
                Math.floor(current / 4) === index
                  ? "text-primary"
                  : "text-muted-foreground/50"
              }`}
              aria-label={`Aller au groupe ${index + 1}`}
            >
              <span className="text-2xl">🐤</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServicesCarousel;
