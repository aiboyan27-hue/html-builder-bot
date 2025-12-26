import { useParams, Link } from "react-router-dom";
import { Bed, Bath, UtensilsCrossed, Sofa, Home, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceDescription from "@/components/service/ServiceDescription";
import CleaningChecklist from "@/components/service/CleaningChecklist";
import AddOns from "@/components/service/AddOns";
import ExpertTeamSection from "@/components/service/ExpertTeamSection";
import OtherServicesCarousel from "@/components/service/OtherServicesCarousel";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceCTA from "@/components/service/ServiceCTA";
import { Button } from "@/components/ui/button";

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
        items: ["Faire les lits", "Épousseter les têtes de lit"],
      },
      {
        title: "Cuisine",
        icon: UtensilsCrossed,
        items: ["Nettoyer les surfaces", "Nettoyer les façades d'armoires", "Nettoyer int./ext. micro-ondes", "Nettoyer les électroménagers", "Sortir les poubelles"],
      },
      {
        title: "Salle de bain",
        icon: Bath,
        items: ["Nettoyer douche & toilette", "Nettoyer les robinetteries", "Faire briller les métaux", "Sortir les poubelles"],
      },
      {
        title: "Toute la maison",
        icon: Home,
        items: ["Nettoyer poignées & interrupteurs", "Nettoyer les plinthes", "Passer l'aspirateur & la vadrouille"],
      },
      {
        title: "Salon",
        icon: Sofa,
        items: ["Épousseter les surfaces", "Aspirer le canapé"],
      },
      {
        title: "Bureau",
        icon: Briefcase,
        items: ["Épousseter bureaux & tables", "Sortir les poubelles"],
      },
    ],
    faqs: [
      {
        question: "Le nettoyage en profondeur est-il sécuritaire pour les animaux et les enfants ?",
        answer: "Absolument ! Nous utilisons des produits écologiques et non toxiques, sécuritaires pour toute la famille, y compris les animaux de compagnie.",
      },
      {
        question: "Dois-je préparer ma maison ?",
        answer: "Nous vous recommandons de ranger les objets personnels et de dégager les surfaces pour un nettoyage optimal. Aucune préparation majeure n'est nécessaire.",
      },
      {
        question: "Puis-je demander des zones spécifiques à nettoyer ?",
        answer: "Bien sûr ! Indiquez-nous vos priorités et nous adapterons notre service en conséquence.",
      },
      {
        question: "Les produits de nettoyage sont-ils fournis ?",
        answer: "Oui, nous apportons tous les produits et équipements nécessaires. Si vous préférez vos propres produits, faites-le nous savoir.",
      },
      {
        question: "À quelle fréquence devrait-on faire un nettoyage en profondeur ?",
        answer: "Nous recommandons un nettoyage en profondeur tous les 3-6 mois, ou plus fréquemment si vous avez des animaux ou des allergies.",
      },
    ],
  },
  "nettoyage-standard": {
    heroTitle: "Service de nettoyage standard",
    heroSubtitle: "Un entretien régulier pour garder votre maison toujours impeccable.",
    heroBenefits: [
      "Entretien hebdomadaire, bimensuel ou mensuel",
      "Parfait pour maintenir la propreté entre les nettoyages en profondeur",
      "Service rapide et efficace",
    ],
    heroImage: "https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage standard professionnel",
    description: [
      "Notre service de nettoyage standard est conçu pour les familles occupées de Montréal. Nous maintenons la propreté de votre maison avec des visites régulières.",
      "Revenez toujours dans un espace frais et accueillant. Disponible selon votre horaire.",
    ],
    checklist: [
      { title: "Chambres", icon: Bed, items: ["Faire les lits", "Épousseter les surfaces"] },
      { title: "Cuisine", icon: UtensilsCrossed, items: ["Nettoyer les comptoirs", "Nettoyer les électroménagers (extérieur)"] },
      { title: "Salle de bain", icon: Bath, items: ["Nettoyer et désinfecter", "Nettoyer les miroirs"] },
      { title: "Toute la maison", icon: Home, items: ["Passer l'aspirateur", "Passer la vadrouille"] },
      { title: "Salon", icon: Sofa, items: ["Épousseter", "Ranger"] },
      { title: "Bureau", icon: Briefcase, items: ["Épousseter", "Vider les poubelles"] },
    ],
    faqs: [
      { question: "À quelle fréquence recommandez-vous le nettoyage standard ?", answer: "Nous recommandons un nettoyage hebdomadaire ou bimensuel pour un entretien optimal." },
      { question: "Puis-je modifier ma fréquence de nettoyage ?", answer: "Oui, vous pouvez ajuster votre calendrier à tout moment." },
      { question: "Que comprend le nettoyage standard ?", answer: "Époussettage, aspirateur, vadrouille, nettoyage des salles de bain et cuisine." },
      { question: "Utilisez-vous mes produits ou les vôtres ?", answer: "Nous apportons nos propres produits écologiques, mais pouvons utiliser les vôtres sur demande." },
      { question: "Combien de temps dure un nettoyage standard ?", answer: "Généralement 2-3 heures selon la taille de votre maison." },
    ],
  },
  "nettoyage-demenagement": {
    heroTitle: "Nettoyage après déménagement",
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
      { title: "Chambres", icon: Bed, items: ["Nettoyer placards vides", "Épousseter partout"] },
      { title: "Cuisine", icon: UtensilsCrossed, items: ["Nettoyer tous les électroménagers int./ext.", "Nettoyer les armoires"] },
      { title: "Salle de bain", icon: Bath, items: ["Désinfection complète", "Nettoyer les carreaux"] },
      { title: "Toute la maison", icon: Home, items: ["Nettoyer les fenêtres", "Aspirateur et vadrouille partout"] },
      { title: "Salon", icon: Sofa, items: ["Nettoyage complet", "Plinthes et coins"] },
      { title: "Bureau", icon: Briefcase, items: ["Nettoyage complet", "Prêt pour inspection"] },
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
      { title: "Fenêtres intérieures", icon: Home, items: ["Nettoyage des vitres", "Cadres et rebords", "Moustiquaires"] },
      { title: "Fenêtres extérieures", icon: Home, items: ["Nettoyage complet", "Cadres extérieurs", "Jusqu'à 3 étages"] },
      { title: "Portes vitrées", icon: Home, items: ["Portes-fenêtres", "Portes d'entrée", "Baies vitrées"] },
      { title: "Vérandas", icon: Home, items: ["Toiture vitrée", "Parois", "Structure"] },
      { title: "Miroirs", icon: Home, items: ["Grands miroirs", "Miroirs de salle de bain"] },
      { title: "Finitions", icon: Home, items: ["Séchage parfait", "Inspection finale"] },
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
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage professionnel après construction",
    description: [
      "Après des travaux de construction ou de rénovation, votre espace a besoin d'un nettoyage spécialisé.",
      "Nous éliminons la poussière fine, les résidus et préparons votre espace pour l'occupation.",
    ],
    checklist: [
      { title: "Surfaces", icon: Home, items: ["Dépoussiérage complet", "Nettoyage des murs", "Plafonds accessibles"] },
      { title: "Fenêtres", icon: Home, items: ["Retrait des étiquettes", "Nettoyage des cadres", "Vitres intérieures/extérieures"] },
      { title: "Sols", icon: Home, items: ["Aspiration approfondie", "Lavage des sols durs", "Nettoyage des joints"] },
      { title: "Cuisine", icon: UtensilsCrossed, items: ["Nettoyage des armoires", "Électroménagers", "Comptoirs"] },
      { title: "Salle de bain", icon: Bath, items: ["Désinfection", "Robinetterie", "Carrelage"] },
      { title: "Finitions", icon: Briefcase, items: ["Plinthes", "Prises électriques", "Interrupteurs"] },
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
      { title: "Préparation", icon: Home, items: ["Inspection", "Aspiration préliminaire", "Identification des taches"] },
      { title: "Traitement", icon: Home, items: ["Prétraitement des taches", "Produits adaptés aux fibres", "Temps de pause"] },
      { title: "Nettoyage", icon: Home, items: ["Extraction à l'eau chaude", "Brossage des fibres", "Rinçage"] },
      { title: "Séchage", icon: Home, items: ["Extraction de l'humidité", "Ventilation", "Vérification"] },
      { title: "Finition", icon: Home, items: ["Brossage final", "Traitement protecteur optionnel"] },
      { title: "Inspection", icon: Briefcase, items: ["Vérification des taches", "Satisfaction client"] },
    ],
    faqs: [
      { question: "Combien de temps pour sécher ?", answer: "Généralement 4-8 heures selon l'humidité et la ventilation." },
      { question: "Toutes les taches partent-elles ?", answer: "La plupart oui, mais certaines taches anciennes peuvent persister." },
      { question: "Le nettoyage est-il sécuritaire pour les animaux ?", answer: "Oui, nous utilisons des produits non toxiques." },
      { question: "Déplacez-vous les meubles ?", answer: "Nous pouvons déplacer les petits meubles. Les gros doivent être déplacés avant." },
      { question: "À quelle fréquence nettoyer les tapis ?", answer: "Nous recommandons 1-2 fois par an pour les zones à fort passage." },
    ],
  },
  "nettoyage-ceramique-coulis": {
    heroTitle: "Nettoyage céramique & coulis",
    heroSubtitle: "Restaurez l'éclat de vos carrelages et joints.",
    heroBenefits: [
      "Nettoyage en profondeur des joints",
      "Restauration de la couleur d'origine",
      "Protection longue durée",
    ],
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=800&fit=crop",
    descriptionTitle: "Nettoyage professionnel de céramique et coulis",
    description: [
      "Les joints de carrelage s'encrassent avec le temps, donnant un aspect terne à vos sols et murs.",
      "Notre nettoyage spécialisé restaure la couleur d'origine et protège vos surfaces pour longtemps.",
    ],
    checklist: [
      { title: "Sols de cuisine", icon: UtensilsCrossed, items: ["Carrelage", "Joints", "Coins et bords"] },
      { title: "Salle de bain", icon: Bath, items: ["Sol", "Murs de douche", "Contour de baignoire"] },
      { title: "Entrée", icon: Home, items: ["Carrelage", "Plinthes", "Seuils"] },
      { title: "Buanderie", icon: Home, items: ["Sol complet", "Sous les appareils"] },
      { title: "Terrasse", icon: Home, items: ["Carrelage extérieur", "Joints résistants"] },
      { title: "Protection", icon: Briefcase, items: ["Scellant optionnel", "Conseils d'entretien"] },
    ],
    faqs: [
      { question: "Pouvez-vous changer la couleur des joints ?", answer: "Nous nettoyons pour restaurer la couleur d'origine. La recoloration est un service séparé." },
      { question: "Le scellant est-il recommandé ?", answer: "Oui, il protège les joints et facilite l'entretien futur." },
      { question: "Combien de temps dure le traitement ?", answer: "Le scellant dure généralement 1-3 ans selon l'usage." },
      { question: "Travaillez-vous sur les murs ?", answer: "Oui, nous nettoyons carrelages muraux et de sol." },
      { question: "Y a-t-il un temps de séchage ?", answer: "Évitez de marcher sur les sols pendant 2-4 heures après le traitement." },
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
      { title: "Avant l'événement", icon: Home, items: ["Nettoyage complet", "Mise en place", "Dernières retouches"] },
      { title: "Pendant (optionnel)", icon: Home, items: ["Maintien de propreté", "Gestion des déchets"] },
      { title: "Après l'événement", icon: Home, items: ["Ramassage complet", "Nettoyage des surfaces", "Vaisselle si nécessaire"] },
      { title: "Sols", icon: Home, items: ["Aspiration", "Lavage", "Traitement des taches"] },
      { title: "Cuisine", icon: UtensilsCrossed, items: ["Nettoyage complet", "Électroménagers", "Poubelles"] },
      { title: "Extérieur", icon: Home, items: ["Terrasse", "Entrée", "Stationnement"] },
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

      <CleaningChecklist checklist={service.checklist} />

      <AddOns />

      <ExpertTeamSection />

      <OtherServicesCarousel />

      <ServiceFAQ faqs={service.faqs} />

      <ServiceCTA />

      <Footer />
    </main>
  );
};

export default ServicePage;
