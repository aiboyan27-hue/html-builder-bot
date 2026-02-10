import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Clock, DollarSign, Sparkles, Home, RefreshCw, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const servicesData = {
  "deep-cleaning": {
    icon: Sparkles,
    title: "Nettoyage en profondeur",
    subtitle: "Un nettoyage complet de votre espace",
    description: "Notre service de nettoyage en profondeur va au-delà de la surface. Nous nettoyons chaque coin, chaque recoin et chaque endroit souvent oublié pour donner à votre espace un rafraîchissement complet. Parfait pour les nouveaux clients, le nettoyage saisonnier ou lorsque votre espace nécessite une attention particulière.",
    price: "Sur devis",
    duration: "4-6 heures",
    includes: [
      "Toutes les surfaces essuyées et désinfectées",
      "Intérieur des appareils (four, micro-ondes, réfrigérateur)",
      "Plinthes et cadres de portes nettoyés",
      "Luminaires et ventilateurs de plafond dépoussiérés",
      "Intérieur des armoires et tiroirs essuyés",
      "Fenêtres nettoyées (intérieur)",
      "Nettoyage détaillé des salles de bain",
      "Dégraissage de la cuisine",
    ],
    perfectFor: [
      "Nouveaux clients",
      "Avant ou après des événements",
      "Nettoyage saisonnier",
      "Emménagement dans un nouveau logement",
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  },
  "move-in-out": {
    icon: Home,
    title: "Nettoyage déménagement",
    subtitle: "Commencez frais ou partez impeccable",
    description: "Le déménagement est suffisamment stressant. Laissez-nous nous occuper du nettoyage pour que vous puissiez vous concentrer sur ce qui compte. Que vous emménagiez ou déménagiez, nous nous assurerons que chaque surface brille.",
    price: "Sur devis",
    duration: "5-8 heures",
    includes: [
      "Nettoyage complet en profondeur de toutes les pièces",
      "Intérieur de toutes les armoires et placards",
      "Tous les appareils nettoyés à l'intérieur et à l'extérieur",
      "Rebords et rails de fenêtres nettoyés",
      "Interrupteurs et prises essuyés",
      "Balayage du garage (si applicable)",
      "Enlèvement de tout débris laissé",
      "Inspection finale",
    ],
    perfectFor: [
      "Locataires récupérant leur dépôt",
      "Vendeurs préparant une visite",
      "Nouveaux propriétaires emménageant",
      "Gestionnaires immobiliers",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  "standard-cleaning": {
    icon: RefreshCw,
    title: "Nettoyage standard",
    subtitle: "Entretien régulier pour garder votre espace impeccable",
    description: "Notre service le plus populaire pour les familles occupées. Nous maintiendrons la propreté de votre espace avec des visites régulières, pour que vous rentriez toujours dans un espace frais et accueillant. Disponible hebdomadaire, bimensuel ou mensuel.",
    price: "Sur devis",
    duration: "2-3 heures",
    includes: [
      "Époussetage de toutes les surfaces accessibles",
      "Aspiration et lavage des planchers",
      "Comptoirs et appareils de cuisine (extérieur)",
      "Nettoyage et désinfection des salles de bain",
      "Faire les lits et ranger",
      "Sortie des poubelles",
      "Nettoyage des miroirs et vitres",
      "Rangement général",
    ],
    perfectFor: [
      "Professionnels occupés",
      "Familles avec enfants",
      "Propriétaires d'animaux",
      "Tous ceux qui valorisent leur temps",
    ],
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=800&h=600&fit=crop",
  },
  "vacation-rental": {
    icon: Building,
    title: "Location de vacances",
    subtitle: "Nettoyage 5 étoiles pour des avis 5 étoiles",
    description: "Des rotations rapides et complètes qui gardent vos invités heureux et vos avis élogieux. Nous comprenons les horaires serrés des hôtes Airbnb et VRBO, et nous offrons un nettoyage de qualité hôtelière à chaque fois.",
    price: "Sur devis",
    duration: "2-4 heures",
    includes: [
      "Nettoyage complet de la propriété",
      "Draps frais et lits faits",
      "Arrangement des serviettes (style hôtelier)",
      "Vérification du réapprovisionnement des essentiels",
      "Réinitialisation et désinfection de la cuisine",
      "Vérification rapide des appareils",
      "Mise en scène d'accueil (si demandé)",
      "Présentation prête pour les photos",
    ],
    perfectFor: [
      "Hôtes Airbnb",
      "Gestionnaires de propriétés VRBO",
      "Propriétaires de locations à court terme",
      "Sociétés de gestion immobilière",
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service non trouvé</h1>
          <Button asChild>
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-light via-background to-background">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{service.subtitle}</p>
              <p className="text-muted-foreground mb-8">{service.description}</p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{service.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{service.duration}</span>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/soumission">Obtenir une soumission</Link>
              </Button>
            </div>

            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-3xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Ce qui est inclus</h2>
              <div className="grid gap-4">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Parfait pour</h2>
              <div className="grid gap-4">
                {service.perfectFor.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-muted/50 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">Vous ne savez pas quel service choisir ?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contactez-nous et nous vous aiderons à choisir le plan de nettoyage parfait pour votre espace.
                </p>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="tel:5144486566">Appelez (514) 448-6566</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Prêt pour un espace impeccable ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Obtenez une soumission personnalisée. Sans engagement.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-10">
            <Link to="/soumission">Obtenir une soumission</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
