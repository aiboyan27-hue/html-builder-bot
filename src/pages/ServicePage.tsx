import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Bed, Bath, UtensilsCrossed, Sofa, Home, Briefcase, Grid3X3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceDescription from "@/components/service/ServiceDescription";
import CleaningChecklist from "@/components/service/CleaningChecklist";
import AddOns from "@/components/service/AddOns";
import WhyUs from "@/components/WhyUs";

import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import { Button } from "@/components/ui/button";

// Services with add-ons
const servicesWithAddOns = [
  "nettoyage-en-profondeur",
  "nettoyage-regulier",
  "nettoyage-demenagement",
  "nettoyage-apres-construction",
  "nettoyage-evenementiel"
];

// Services with checklist but NO add-ons
const servicesWithChecklistOnly = [
  "nettoyage-vitres",
  "nettoyage-tapis",
  "nettoyage-ceramique"
];

// Service data for all services
const servicesData: Record<string, {
  heroTitle: string;
  heroSubtitle: string;
  heroBenefits: string[];
  heroImage: string;
  descriptionTitle: string;
  description: string[];
  checklist: Array<{
    title: string;
    icon: React.ElementType;
    items: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}> = {
  "nettoyage-en-profondeur": {
    heroTitle: "Service de nettoyage en profondeur",
    heroSubtitle: "Un nettoyage vraiment rafraîchissant — chaque coin, chaque surface.",
    heroBenefits: [
      "Nettoyage complet de haut en bas de votre maison",
      "Parfait pour les maisons non nettoyées depuis 30+ jours",
      "Personnalisé selon vos besoins",
    ],
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage professionnel en profondeur",
    description: [
      "Nos spécialistes ont réalisé des milliers de nettoyages en profondeur, rendant les maisons impeccables de fond en comble. Nous nettoyons les zones difficiles d'accès, éliminons la saleté accumulée et personnalisons chaque nettoyage.",
      "Chaque visite suit une liste de vérification détaillée pour garantir que rien n'est oublié. C'est le service parfait pour un nouveau départ ou un renouveau saisonnier.",
    ],
    checklist: [
      {
        title: "Chambres",
        icon: Bed,
        items: ["Faire les lits", "Épousseter les têtes de lit et les surfaces"],
      },
      {
        title: "Cuisine",
        icon: UtensilsCrossed,
        items: ["Nettoyer toutes les surfaces", "Nettoyer les façades d'armoires", "Nettoyer l'intérieur et l'extérieur du micro-ondes", "Nettoyer les électroménagers accessibles", "Sortir les poubelles"],
      },
      {
        title: "Salle de bain",
        icon: Bath,
        items: ["Nettoyer la douche et les toilettes", "Nettoyer les robinetteries", "Faire briller les surfaces métalliques", "Sortir les poubelles"],
      },
      {
        title: "Toute la maison",
        icon: Home,
        items: ["Nettoyer les poignées de porte et les interrupteurs", "Nettoyer les plinthes", "Passer l'aspirateur et laver les planchers"],
      },
      {
        title: "Salon",
        icon: Sofa,
        items: ["Épousseter les surfaces", "Aspirer le divan et les meubles rembourrés"],
      },
      {
        title: "Bureau",
        icon: Briefcase,
        items: ["Épousseter les bureaux et les tables", "Sortir les poubelles"],
      },
    ],
    faqs: [
      {
        question: "Quelle est la différence entre un nettoyage en profondeur et un nettoyage régulier ?",
        answer: "Le nettoyage en profondeur est destiné aux logements très sales ou lorsque des options supplémentaires sont nécessaires (four, frigo, fenêtres). Le nettoyage régulier convient aux maisons déjà bien entretenues.",
      },
      {
        question: "Combien de temps dure un nettoyage ?",
        answer: "Généralement entre 4 et 8 heures, selon la taille du logement, son état et les options choisies.",
      },
      {
        question: "À quelle fréquence devrais-je faire un nettoyage en profondeur ?",
        answer: "Tous les 3 à 6 mois, ou lorsque le logement semble plus sale que d'habitude. Certains clients le font de façon saisonnière.",
      },
      {
        question: "Nettoyez-vous l'intérieur du frigo et du four ?",
        answer: "Oui, sur demande. Ce sont des options supplémentaires courantes lors d'un nettoyage en profondeur.",
      },
      {
        question: "Dois-je nettoyer avant votre arrivée ?",
        answer: "Ce n'est pas nécessaire. Ramasser les objets personnels aide simplement à se concentrer sur le nettoyage plutôt que le rangement.",
      },
      {
        question: "Et si mon logement est très sale ?",
        answer: "Aucun jugement. Nous pourrions avoir besoin de plus de temps, et nous en discuterons avec vous avant de commencer.",
      },
    ],
  },
  "nettoyage-regulier": {
    heroTitle: "Service de nettoyage régulier",
    heroSubtitle: "Un entretien régulier pour garder votre maison toujours impeccable.",
    heroBenefits: [
      "Entretien hebdomadaire, bimensuel ou mensuel",
      "Parfait pour maintenir la propreté entre les nettoyages en profondeur",
      "Service rapide et efficace",
    ],
    heroImage: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage régulier professionnel",
    description: [
      "Notre service de nettoyage régulier est conçu pour les familles occupées de Montréal. Nous maintenons la propreté de votre maison avec des visites régulières.",
      "Revenez toujours dans un espace frais et accueillant. Disponible selon votre horaire.",
    ],
    checklist: [
      { title: "Chambres", icon: Bed, items: ["Faire les lits", "Épousseter les têtes de lit et les surfaces"] },
      { title: "Cuisine", icon: UtensilsCrossed, items: ["Nettoyer toutes les surfaces", "Nettoyer les façades d'armoires", "Nettoyer l'intérieur et l'extérieur du micro-ondes", "Nettoyer les électroménagers accessibles", "Sortir les poubelles"] },
      { title: "Salle de bain", icon: Bath, items: ["Nettoyer la douche et les toilettes", "Nettoyer les robinetteries", "Faire briller les surfaces métalliques", "Sortir les poubelles"] },
      { title: "Toute la maison", icon: Home, items: ["Nettoyer les poignées de porte et les interrupteurs", "Nettoyer les plinthes", "Passer l'aspirateur et laver les planchers"] },
      { title: "Salon", icon: Sofa, items: ["Épousseter les surfaces", "Aspirer le divan et les meubles rembourrés"] },
      { title: "Bureau", icon: Briefcase, items: ["Épousseter les bureaux et les tables", "Sortir les poubelles"] },
    ],
    faqs: [
      { question: "À quelle fréquence recommandez-vous le nettoyage régulier ?", answer: "Nous recommandons un nettoyage hebdomadaire ou bimensuel pour un entretien optimal." },
      { question: "Puis-je modifier ma fréquence de nettoyage ?", answer: "Oui, vous pouvez ajuster votre calendrier à tout moment." },
      { question: "Que comprend le nettoyage régulier ?", answer: "Époussettage, aspirateur, vadrouille, nettoyage des salles de bain et cuisine." },
      { question: "Utilisez-vous mes produits ou les vôtres ?", answer: "Nous apportons nos propres produits écologiques, mais pouvons utiliser les vôtres sur demande." },
      { question: "Combien de temps dure un nettoyage régulier ?", answer: "Généralement 2-3 heures selon la taille de votre maison." },
    ],
  },
  "nettoyage-demenagement": {
    heroTitle: "Nettoyage d'emménagement et de déménagement",
    heroSubtitle: "Commencez frais ou partez l'esprit tranquille.",
    heroBenefits: [
      "Nettoyage complet avant ou après déménagement",
      "Récupérez votre dépôt de garantie",
      "Emménagez dans un espace impeccable",
    ],
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage professionnel de déménagement",
    description: [
      "Le déménagement est assez stressant. Laissez-nous gérer le nettoyage pour que vous puissiez vous concentrer sur l'essentiel.",
      "Que vous emménagiez ou quittiez, nous nous assurons que chaque surface brille.",
    ],
    checklist: [
      { title: "Chambres", icon: Bed, items: ["Faire les lits", "Épousseter les têtes de lit et les surfaces"] },
      { title: "Cuisine", icon: UtensilsCrossed, items: ["Nettoyer toutes les surfaces", "Nettoyer les façades d'armoires", "Nettoyer l'intérieur et l'extérieur du micro-ondes", "Nettoyer les électroménagers accessibles", "Sortir les poubelles"] },
      { title: "Salle de bain", icon: Bath, items: ["Nettoyer la douche et les toilettes", "Nettoyer les robinetteries", "Faire briller les surfaces métalliques", "Sortir les poubelles"] },
      { title: "Toute la maison", icon: Home, items: ["Nettoyer les poignées de porte et les interrupteurs", "Nettoyer les plinthes", "Passer l'aspirateur et laver les planchers"] },
      { title: "Salon", icon: Sofa, items: ["Épousseter les surfaces", "Aspirer le divan et les meubles rembourrés"] },
      { title: "Bureau", icon: Briefcase, items: ["Épousseter les bureaux et les tables", "Sortir les poubelles"] },
    ],
    faqs: [
      { question: "Offrez-vous une garantie de dépôt ?", answer: "Nous offrons un nettoyage de qualité qui aide à récupérer les dépôts." },
      { question: "Quand devrais-je réserver ?", answer: "Réservez dès que vous connaissez votre date de déménagement." },
      { question: "Nettoyez-vous les maisons vides ou meublées ?", answer: "Les deux ! Les maisons vides permettent un nettoyage plus complet." },
      { question: "Combien de temps à l'avance réserver ?", answer: "Au moins 3-5 jours, plus si possible." },
      { question: "Faites-vous les retouches si le propriétaire n'est pas satisfait ?", answer: "Oui, nous offrons des retouches gratuites dans les 24h." },
    ],
  },
  "nettoyage-vitres": {
    heroTitle: "Nettoyage de vitres",
    heroSubtitle: "Des fenêtres cristallines qui laissent entrer la lumière.",
    heroBenefits: [
      "Intérieur et extérieur des fenêtres",
      "Techniques professionnelles sans traces",
      "Service pour résidentiel et commercial",
    ],
    heroImage: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage professionnel de vitres",
    description: [
      "Des fenêtres propres transforment l'apparence de votre maison et laissent entrer plus de lumière naturelle.",
      "Notre équipe utilise des techniques professionnelles pour un résultat sans traces, à l'intérieur comme à l'extérieur.",
    ],
    checklist: [
      { 
        title: "Fenêtres extérieures", 
        icon: Grid3X3, 
        items: ["Nettoyer les cadres", "Nettoyer les vitres", "Laver les vitres", "Laver les moustiquaires"] 
      },
      { 
        title: "Fenêtres intérieures", 
        icon: Grid3X3, 
        items: ["Nettoyer les cadres", "Nettoyer les vitres", "Laver les vitres", "Sécher les vitres"] 
      },
    ],
    faqs: [
      { question: "Nettoyez-vous les fenêtres en hauteur ?", answer: "Oui, jusqu'à 3 étages avec équipement sécuritaire." },
      { question: "Utilisez-vous des produits écologiques ?", answer: "Oui, tous nos produits sont écologiques et sécuritaires." },
      { question: "Quelle est la fréquence recommandée ?", answer: "Nous recommandons 2-4 fois par an selon l'environnement." },
      { question: "Nettoyez-vous les moustiquaires ?", answer: "Oui, le nettoyage des moustiquaires est inclus." },
      { question: "Travaillez-vous par temps de pluie ?", answer: "Nous reportons si nécessaire pour garantir la qualité." },
    ],
  },
  "nettoyage-apres-construction": {
    heroTitle: "Nettoyage après construction",
    heroSubtitle: "Éliminez la poussière et les débris de construction.",
    heroBenefits: [
      "Élimination complète de la poussière de construction",
      "Nettoyage des surfaces, fenêtres et sols",
      "Prêt à emménager après rénovation",
    ],
    heroImage: "/lovable-uploads/nettoyage-apres-construction-hero.png",
    descriptionTitle: "Nettoyage professionnel après construction",
    description: [
      "Après des travaux de construction ou de rénovation, votre espace a besoin d'un nettoyage spécialisé.",
      "Nous éliminons la poussière fine, les résidus et préparons votre espace pour l'occupation.",
    ],
    checklist: [
      { title: "Chambres", icon: Bed, items: ["Faire les lits", "Épousseter les têtes de lit et les surfaces"] },
      { title: "Cuisine", icon: UtensilsCrossed, items: ["Nettoyer toutes les surfaces", "Nettoyer les façades d'armoires", "Nettoyer l'intérieur et l'extérieur du micro-ondes", "Nettoyer les électroménagers accessibles", "Sortir les poubelles"] },
      { title: "Salle de bain", icon: Bath, items: ["Nettoyer la douche et les toilettes", "Nettoyer les robinetteries", "Faire briller les surfaces métalliques", "Sortir les poubelles"] },
      { title: "Toute la maison", icon: Home, items: ["Nettoyer les poignées de porte et les interrupteurs", "Nettoyer les plinthes", "Passer l'aspirateur et laver les planchers"] },
      { title: "Salon", icon: Sofa, items: ["Épousseter les surfaces", "Aspirer le divan et les meubles rembourrés"] },
      { title: "Bureau", icon: Briefcase, items: ["Épousseter les bureaux et les tables", "Sortir les poubelles"] },
    ],
    faqs: [
      { question: "Combien de temps après les travaux ?", answer: "Attendez que tous les travaux soient terminés et la poussière retombée (24-48h)." },
      { question: "Plusieurs passages sont-ils nécessaires ?", answer: "Parfois 2-3 passages selon l'ampleur des travaux." },
      { question: "Gérez-vous les gros débris ?", answer: "Non, les débris de construction doivent être retirés avant notre arrivée." },
      { question: "Nettoyez-vous les conduits ?", answer: "Nous recommandons un service spécialisé pour les conduits." },
      { question: "Quelle surface pouvez-vous couvrir ?", answer: "Nous gérons des projets de toutes tailles, résidentiels et commerciaux." },
    ],
  },
  "nettoyage-tapis": {
    heroTitle: "Nettoyage de tapis",
    heroSubtitle: "Redonnez vie à vos tapis et moquettes.",
    heroBenefits: [
      "Élimination des taches tenaces",
      "Nettoyage en profondeur des fibres",
      "Traitement anti-allergènes",
    ],
    heroImage: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage professionnel de tapis",
    description: [
      "Les tapis accumulent poussière, allergènes et taches au fil du temps. Notre nettoyage en profondeur restaure leur apparence et leur fraîcheur.",
      "Nous utilisons des équipements professionnels et des produits sécuritaires pour toute la famille.",
    ],
    checklist: [
      { 
        title: "1. Inspection préalable", 
        icon: Briefcase, 
        items: ["Identifier le type de fibre et son état", "Vérifier les taches ou dommages"] 
      },
      { 
        title: "2. Préparation", 
        icon: Briefcase, 
        items: ["Aspirer pour retirer poussière et débris", "Tester la solution sur une zone cachée"] 
      },
      { 
        title: "3. Processus de nettoyage", 
        icon: Briefcase, 
        items: ["Appliquer la solution de nettoyage", "Utiliser une brosse douce ou extraction à vapeur"] 
      },
      { 
        title: "4. Rinçage et extraction", 
        icon: Briefcase, 
        items: ["Rincer à l'eau", "Extraire l'humidité pour accélérer le séchage"] 
      },
      { 
        title: "5. Étapes finales", 
        icon: Briefcase, 
        items: ["Inspecter les taches restantes", "Laisser sécher complètement", "Brosser les fibres pour restaurer la texture"] 
      },
    ],
    faqs: [
      { question: "Combien de temps pour sécher ?", answer: "Généralement 4-8 heures selon l'humidité et la ventilation." },
      { question: "Toutes les taches partent-elles ?", answer: "La plupart oui, mais certaines taches anciennes peuvent persister." },
      { question: "Le nettoyage est-il sécuritaire pour les animaux ?", answer: "Oui, nous utilisons des produits non toxiques." },
      { question: "Déplacez-vous les meubles ?", answer: "Nous pouvons déplacer les petits meubles. Les gros doivent être déplacés avant." },
      { question: "À quelle fréquence nettoyer les tapis ?", answer: "Nous recommandons 1-2 fois par an pour les zones à fort passage." },
    ],
  },
  "nettoyage-ceramique": {
    heroTitle: "Nettoyage de céramique et joints",
    heroSubtitle: "Redonnez l'éclat d'origine à vos planchers.",
    heroBenefits: [
      "Nettoyage en profondeur des carreaux",
      "Blanchiment et scellement des joints",
      "Traitement protecteur longue durée",
    ],
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage professionnel de céramique et joints",
    description: [
      "Les joints de céramique accumulent saleté, moisissures et taches au fil du temps. Notre service redonne l'éclat d'origine à vos planchers.",
      "Nous utilisons des équipements professionnels et offrons un scellement protecteur pour prolonger la durée de vie de vos sols.",
    ],
    checklist: [
      { 
        title: "1. Préparation", 
        icon: Briefcase, 
        items: ["Inspecter le plancher", "Passer l'aspirateur", "Laver le plancher", "Appliquer un pré-nettoyant"] 
      },
      { 
        title: "2. Nettoyage et scellement", 
        icon: Briefcase, 
        items: ["Frotter les lignes de joints", "Sécher le plancher", "Appliquer un scellant sur les joints", "Appliquer un scellant coloré ou transparent (optionnel)"] 
      },
    ],
    faqs: [
      { question: "Combien de temps dure le traitement ?", answer: "Généralement 2-4 heures selon la surface à traiter." },
      { question: "Faut-il éviter de marcher sur le sol après ?", answer: "Nous recommandons d'attendre 24h avant de marcher sur les zones traitées." },
      { question: "Le scellement est-il permanent ?", answer: "Le scellement dure généralement 2-3 ans selon l'usage." },
      { question: "Traitez-vous les murs carrelés ?", answer: "Oui, nous traitons les murs de douche et autres surfaces carrelées." },
      { question: "Utilisez-vous des produits écologiques ?", answer: "Oui, nos produits sont sécuritaires et respectueux de l'environnement." },
    ],
  },
  "nettoyage-commercial": {
    heroTitle: "Nettoyage commercial",
    heroSubtitle: "Des espaces de travail impeccables pour votre entreprise.",
    heroBenefits: [
      "Bureaux, commerces et espaces d'affaires",
      "Horaires flexibles selon vos besoins",
      "Équipes professionnelles et fiables",
    ],
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage professionnel pour entreprises",
    description: [
      "Un environnement de travail propre améliore la productivité et l'image de votre entreprise. Nous comprenons que chaque espace commercial a des besoins uniques.",
      "Nous offrons des services de nettoyage commercial adaptés à tous types d'espaces professionnels à Montréal : bureaux, cliniques, commerces, restaurants et plus.",
      "Notre équipe est disponible en dehors des heures d'ouverture pour minimiser les perturbations à votre activité. Contactez-nous pour une soumission personnalisée.",
    ],
    checklist: [], // No checklist for commercial
    faqs: [
      { question: "Travaillez-vous en dehors des heures de bureau ?", answer: "Oui, nous nous adaptons à vos horaires pour minimiser les perturbations." },
      { question: "Quelle est la fréquence recommandée ?", answer: "Quotidien, hebdomadaire ou mensuel selon vos besoins et votre budget." },
      { question: "Fournissez-vous les produits ?", answer: "Oui, nous apportons tout le nécessaire. Nous pouvons aussi utiliser vos produits." },
      { question: "Êtes-vous assurés ?", answer: "Oui, nous sommes entièrement assurés et cautionnés." },
      { question: "Pouvez-vous gérer de grands espaces ?", answer: "Oui, nous avons des équipes pour tous types de superficies." },
    ],
  },
  "nettoyage-evenementiel": {
    heroTitle: "Nettoyage événementiel",
    heroSubtitle: "Avant et après vos événements, nous gérons tout.",
    heroBenefits: [
      "Préparation avant l'événement",
      "Nettoyage complet après la fête",
      "Service flexible selon vos horaires",
    ],
    heroImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage professionnel pour événements",
    description: [
      "Organisez votre événement l'esprit tranquille. Nous préparons votre espace avant et le remettons en ordre après.",
      "Mariages, fêtes, réunions corporatives — nous gérons tous types d'événements.",
    ],
    checklist: [
      { title: "Chambres", icon: Bed, items: ["Faire les lits", "Épousseter les têtes de lit et les surfaces"] },
      { title: "Cuisine", icon: UtensilsCrossed, items: ["Nettoyer toutes les surfaces", "Nettoyer les façades d'armoires", "Nettoyer l'intérieur et l'extérieur du micro-ondes", "Nettoyer les électroménagers accessibles", "Sortir les poubelles"] },
      { title: "Salle de bain", icon: Bath, items: ["Nettoyer la douche et les toilettes", "Nettoyer les robinetteries", "Faire briller les surfaces métalliques", "Sortir les poubelles"] },
      { title: "Toute la maison", icon: Home, items: ["Nettoyer les poignées de porte et les interrupteurs", "Nettoyer les plinthes", "Passer l'aspirateur et laver les planchers"] },
      { title: "Salon", icon: Sofa, items: ["Épousseter les surfaces", "Aspirer le divan et les meubles rembourrés"] },
      { title: "Bureau", icon: Briefcase, items: ["Épousseter les bureaux et les tables", "Sortir les poubelles"] },
    ],
    faqs: [
      { question: "Travaillez-vous tard le soir ?", answer: "Oui, nous nous adaptons à vos horaires, même tard en soirée." },
      { question: "Gérez-vous la vaisselle ?", answer: "Oui, sur demande nous pouvons gérer vaisselle et rangement." },
      { question: "Quel préavis est nécessaire ?", answer: "Idéalement 1-2 semaines, mais nous faisons notre possible pour les urgences." },
      { question: "Travaillez-vous les week-ends ?", answer: "Oui, les week-ends sont notre période la plus occupée pour les événements." },
      { question: "Pouvez-vous gérer de grands espaces ?", answer: "Oui, nous avons des équipes pour les grands événements." },
    ],
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId as keyof typeof servicesData];

  // Scroll to top when service changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

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

  const hasAddOns = servicesWithAddOns.includes(serviceId as string);
  const hasChecklist = service.checklist.length > 0;
  const isCommercial = serviceId === "nettoyage-commercial";

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero 
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        benefits={service.heroBenefits}
        image={service.heroImage}
      />

      <ServiceDescription 
        title={service.descriptionTitle}
        description={service.description}
      />

      {hasChecklist && (
        <CleaningChecklist checklist={service.checklist} />
      )}

      {hasAddOns && (
        <AddOns />
      )}

      <WhyUs />

      <ServiceFAQ faqs={service.faqs} />

      <ServiceCTA />

      <Footer />
    </main>
  );
};

export default ServicePage;
