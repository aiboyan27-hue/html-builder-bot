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
    heroImage: "/lovable-uploads/nettoyage-en-profondeur-hero.png",
    descriptionTitle: "Nettoyage professionnel en profondeur",
    description: [
      "Notre équipe est spécialisée dans le nettoyage en profondeur afin de redonner à votre maison toute sa fraîcheur, du sol au plafond. Nous prenons soin des zones difficiles d'accès, éliminons la saleté accumulée et adaptons chaque nettoyage à vos besoins spécifiques.",
      "Chaque visite est réalisée selon une liste de vérification détaillée, assurant un travail complet et soigné, sans rien laisser au hasard. C'est le service idéal pour repartir sur de bonnes bases ou pour un grand ménage saisonnier.",
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
    heroImage: "/lovable-uploads/nettoyage-regulier-hero.png",
    descriptionTitle: "Nettoyage régulier professionnel",
    description: [
      "Notre service de nettoyage régulier permet de garder votre maison propre et fraîche en tout temps. Des centaines de personnes nous font confiance pour l'entretien continu de leur espace. À chaque visite, nous dépoussiérons, passons l'aspirateur, lavons les sols et nettoyons les surfaces selon une liste détaillée.",
      "Idéal pour un entretien hebdomadaire ou aux deux semaines, afin de réduire le stress et garder votre maison toujours prête à recevoir.",
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
      { question: "Que comprend le nettoyage récurrent ?", answer: "Époussetage, aspirateur, lavage des planchers, nettoyage de la salle de bain et de la cuisine, ainsi qu'un entretien général pour garder votre logement propre entre les visites." },
      { question: "À quelle fréquence devrais-je planifier un nettoyage ?", answer: "Une fréquence hebdomadaire est idéale pour les maisons occupées ou avec animaux. Aux deux semaines convient à la majorité des gens, et le mensuel est parfait pour un entretien léger." },
      { question: "Aurais-je toujours la même personne pour le nettoyage ?", answer: "Nous faisons de notre mieux pour assurer la même personne. Si un changement est nécessaire, nous vous en informerons à l'avance." },
      { question: "Le premier nettoyage est-il différent ?", answer: "Oui. La première visite prend généralement plus de temps et peut coûter un peu plus, car elle permet de remettre le logement à niveau. Les visites suivantes sont plus rapides." },
      { question: "Est-ce que je fais des économies avec un service récurrent ?", answer: "Oui. Le service hebdomadaire offre 15 % de rabais, aux deux semaines 10 %, et mensuel 5 %. Plus la fréquence est élevée, plus vous économisez." },
      { question: "Que faire si je dois annuler ou reporter un nettoyage ?", answer: "Aucun problème. Il suffit simplement de nous en informer à l'avance." },
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
    heroImage: "/lovable-uploads/nettoyage-demenagement-hero.png",
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
      { question: "Qu'est-ce qui est inclus dans un nettoyage de déménagement ?", answer: "Tout ce qui est inclus dans notre nettoyage standard, avec une attention particulière aux zones clés. Des options peuvent être ajoutées selon vos besoins." },
      { question: "Dois-je avoir tout déménagé avant le nettoyage ?", answer: "Oui, c'est recommandé. Nettoyer une fois le logement vide permet un résultat optimal et évite qu'il se salisse de nouveau après." },
      { question: "Nettoyez-vous l'intérieur du frigo, du four et des armoires ?", answer: "Oui. Pour les nettoyages de déménagement, l'intérieur des électroménagers et des armoires est inclus, car ce sont des points souvent vérifiés." },
      { question: "Est-ce que ce service aide à récupérer mon dépôt ?", answer: "C'est notre objectif principal. Nous nettoyons selon les standards attendus, sans toutefois pouvoir garantir la décision finale du propriétaire." },
      { question: "Quelle est la différence entre un nettoyage d'emménagement et de déménagement ?", answer: "Le nettoyage est similaire, mais l'objectif change. Le déménagement vise à laisser le logement impeccable, tandis que l'emménagement assure un espace propre avant de s'installer." },
      { question: "Quand devrais-je réserver avant mon déménagement ?", answer: "Idéalement 2 à 5 jours à l'avance. Les plages se remplissent rapidement, donc plus tôt vous réservez, mieux c'est." },
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
    heroImage: "/lovable-uploads/nettoyage-vitres-hero.png",
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
      { question: "Nettoyez-vous l'intérieur et l'extérieur ?", answer: "Oui. Nous offrons le nettoyage intérieur, extérieur ou les deux. La majorité des clients choisissent les deux pour un résultat optimal." },
      { question: "Nettoyez-vous les fenêtres en hauteur ou difficiles d'accès ?", answer: "Oui. Nous disposons de l'équipement nécessaire pour nettoyer les fenêtres en hauteur ou difficiles d'accès." },
      { question: "Pouvez-vous enlever les taches d'eau dure ?", answer: "Oui. Nous pouvons traiter les taches causées par l'eau dure." },
      { question: "À quelle fréquence devrais-je faire nettoyer mes fenêtres ?", answer: "Tous les 3 mois est idéal. Cela aide à prévenir l'accumulation de taches permanentes." },
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
      { question: "Ai-je besoin de deux nettoyages ?", answer: "Nous le recommandons souvent. Le premier nettoyage élimine environ 90 % de la poussière, puis un second passage permet de retirer les résidus qui se redéposent après quelques jours." },
      { question: "Combien de temps dure le nettoyage ?", answer: "Cela dépend de la taille du projet et de l'ampleur des travaux. Une petite rénovation peut prendre quelques heures, tandis qu'un projet plus important peut nécessiter une journée complète ou davantage." },
      { question: "Quand devrais-je planifier le nettoyage ?", answer: "Idéalement lorsque les travaux sont terminés ou presque. Cela évite d'avoir à refaire un nettoyage à cause de nouvelles poussières." },
      { question: "Combien ça coûte ?", answer: "Le prix varie selon la superficie et l'état des lieux. Nous fournissons toujours une estimation claire avant de commencer." },
      { question: "Enlevez-vous la peinture ou le silicone (calfeutrage) ?", answer: "Normalement, ces travaux sont faits par la compagnie de construction. Nous pouvons toutefois nous en occuper au besoin, mais cela demande plus de temps et peut entraîner des frais supplémentaires." },
      { question: "Pourquoi un nettoyage après construction est-il nécessaire ?", answer: "Les travaux laissent une fine poussière partout : sur les surfaces, dans les armoires, etc. Un nettoyage régulier ne suffit pas à l'éliminer complètement." },
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
      { question: "Quelle méthode utilisez-vous pour nettoyer les tapis ?", answer: "Nous utilisons l'extraction à l'eau chaude, aussi appelée nettoyage à la vapeur. C'est la méthode recommandée par les fabricants, car elle permet de nettoyer en profondeur et d'extraire immédiatement la saleté." },
      { question: "Combien de temps faut-il pour que le tapis sèche ?", answer: "En général, entre 4 et 8 heures, selon l'humidité et la circulation d'air. Ouvrir les fenêtres ou utiliser des ventilateurs peut accélérer le séchage." },
      { question: "Pouvez-vous enlever les taches et odeurs causées par les animaux ?", answer: "Oui. Nous utilisons des traitements enzymatiques spécialement conçus pour éliminer les taches et neutraliser les odeurs à la source." },
      { question: "Est-ce que le nettoyage enlève toutes les taches ?", answer: "Nous pouvons enlever ou réduire considérablement la majorité des taches. Certaines peuvent toutefois être permanentes. Nous vous informerons clairement de ce qui est possible après l'évaluation." },
      { question: "À quelle fréquence devrais-je faire nettoyer mes tapis ?", answer: "Tous les 12 à 18 mois pour un foyer standard. Une fréquence plus élevée est recommandée en présence d'animaux, d'enfants, d'allergies ou de fort achalandage." },
      { question: "Quels types de meubles rembourrés nettoyez-vous ?", answer: "La plupart des canapés, chaises, ottomans et matelas en tissu. Nous vérifions toujours les étiquettes d'entretien. Certains tissus nécessitent un nettoyage à sec seulement. Le cuir n'est pas inclus." },
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
      { question: "Que comprend le nettoyage de céramique et joints ?", answer: "Nous éliminons la saleté incrustée et les taches sur la céramique et les joints afin de leur redonner leur couleur et leur apparence d'origine." },
      { question: "Comment déterminez-vous le prix ?", answer: "Envoyez-nous simplement quelques photos des zones à nettoyer ainsi que la superficie approximative. Nous analyserons le tout et vous fournirons une soumission." },
      { question: "Est-ce sécuritaire pour tous les types de céramique ?", answer: "Oui. Nous utilisons des méthodes sécuritaires et adaptées pour la céramique, le porcelaine, le marbre et autres surfaces similaires." },
      { question: "Appliquez-vous un scellant après le nettoyage des joints ?", answer: "Oui, sur demande. L'application d'un scellant aide à prévenir les taches futures et facilite l'entretien à long terme." },
      { question: "Pouvez-vous corriger des joints décolorés ?", answer: "Oui. Le nettoyage permet souvent d'éclaircir les joints et de leur redonner une apparence uniforme. Dans certains cas de décoloration sévère, le résultat peut être limité — nous vous en informerons avant de commencer." },
      { question: "À quelle fréquence devrais-je faire nettoyer la céramique et les joints ?", answer: "En général, un nettoyage par année est suffisant pour la plupart des résidences. Les zones très fréquentées peuvent nécessiter un entretien plus fréquent." },
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
    heroImage: "/lovable-uploads/nettoyage-evenementiel-hero.png",
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
      { question: "Pouvez-vous nettoyer avant, pendant et après l'événement ?", answer: "Oui. Nous pouvons intervenir avant, pendant et après l'événement, selon vos besoins." },
      { question: "Quels types d'événements nettoyez-vous ?", answer: "Tous types d'événements : fêtes privées, événements corporatifs, mariages, anniversaires et rassemblements. Petits ou grands." },
      { question: "Combien de nettoyeurs sont nécessaires ?", answer: "Cela dépend de l'événement et du lieu. Contactez-nous et nous vous aiderons à déterminer ce qui est le plus adapté." },
      { question: "Combien de temps après l'événement pouvez-vous intervenir ?", answer: "Immédiatement après l'événement ou le lendemain matin, selon ce qui vous convient le mieux." },
      { question: "Est-ce que vous sortez les poubelles ?", answer: "Oui." },
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
