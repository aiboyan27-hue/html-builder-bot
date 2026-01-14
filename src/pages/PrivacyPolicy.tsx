import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container max-w-4xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Comprendre et respecter votre vie privée est notre engagement
          </p>

          {/* Introduction */}
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              La présente politique de confidentialité (la « Politique ») décrit les pratiques d'Aura Nettoyage en matière de protection des renseignements personnels lorsque vous visitez, utilisez ou interagissez avec le site{" "}
              <a href="https://www.auranettoyage.com" className="underline hover:text-primary">
                www.auranettoyage.com
              </a>{" "}
              (le « Site ») ainsi que nos services, outils numériques et communications (collectivement, les « Services »).
            </p>

            <p>
              En utilisant les Services, vous consentez à la collecte, à l'utilisation et au traitement de vos renseignements personnels conformément à la présente Politique. Pour toute question, vous pouvez nous joindre à{" "}
              <a href="mailto:support@auranettoyage.com" className="underline hover:text-primary">
                support@auranettoyage.com
              </a>
              .
            </p>

            <p className="font-bold uppercase text-sm tracking-wide">
              EN UTILISANT LES SERVICES, VOUS CONSENTEZ À LA COLLECTE, À L'UTILISATION ET AU TRAITEMENT DE VOS RENSEIGNEMENTS PERSONNELS TEL QUE DÉCRIT DANS LA PRÉSENTE POLITIQUE DE CONFIDENTIALITÉ.
            </p>

            {/* Section I */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                I. RENSEIGNEMENTS PERSONNELS COLLECTÉS
              </h2>
              <p>
                Les renseignements personnels que nous collectons peuvent être hébergés et traités au Canada ou dans d'autres juridictions où Aura Nettoyage ou ses fournisseurs de services disposent d'infrastructures. En utilisant nos Services et en nous fournissant des renseignements, vous consentez à ce traitement, y compris à l'extérieur de votre province ou pays de résidence.
              </p>
              <p className="mt-4">
                <strong>Note :</strong> Certaines juridictions peuvent offrir un niveau de protection différent de celui du Québec. Aura Nettoyage applique toutefois des mesures de protection équivalentes à celles prévues par les lois québécoises et canadiennes. Si vous n'acceptez pas cette Politique, veuillez ne pas utiliser nos Services.
              </p>
            </div>

            {/* Section II */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                II. DÉFINITIONS
              </h2>
              <ul className="space-y-3">
                <li>
                  <strong>« Compte »</strong> : Compte utilisateur permettant d'accéder à certaines fonctionnalités
                </li>
                <li>
                  <strong>« Entreprise »</strong> : Aura Nettoyage
                </li>
                <li>
                  <strong>« Pays »</strong> : Canada (Québec)
                </li>
                <li>
                  <strong>« Cookies »</strong> : Fichiers stockés sur votre appareil permettant d'améliorer l'expérience utilisateur
                </li>
                <li>
                  <strong>« Responsable du traitement »</strong> : Aura Nettoyage
                </li>
                <li>
                  <strong>« Renseignements personnels »</strong> : Toute information permettant d'identifier une personne
                </li>
                <li>
                  <strong>« Service »</strong> : Le site web et les services d'Aura Nettoyage
                </li>
                <li>
                  <strong>« Fournisseur de services »</strong> : Tiers traitant des données pour notre compte
                </li>
                <li>
                  <strong>« Utilisateur / Vous »</strong> : Toute personne utilisant nos Services
                </li>
              </ul>
            </div>

            {/* Section III */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                III. COLLECTE ET UTILISATION DES DONNÉES
              </h2>
              <p className="mb-4">
                Nous collectons des renseignements personnels et non personnels lorsque vous :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Demandez une soumission ou un service</li>
                <li>Communiquez avec nous</li>
                <li>Naviguez sur notre site</li>
                <li>Effectuez un paiement</li>
                <li>Interagissez avec nos publicités ou réseaux sociaux</li>
              </ul>
              <p className="mt-4">
                Ces renseignements peuvent inclure : nom, courriel, téléphone, adresse, informations de paiement, données de navigation, adresse IP, type d'appareil et cookies.
              </p>
            </div>

            {/* Section IV */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                IV. UTILISATION DES RENSEIGNEMENTS
              </h2>
              <p className="mb-4">
                Nous utilisons les renseignements afin de :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir nos services de nettoyage</li>
                <li>Traiter les demandes et paiements</li>
                <li>Communiquer avec vous</li>
                <li>Améliorer notre site et nos services</li>
                <li>Effectuer des activités marketing (avec consentement)</li>
                <li>Respecter nos obligations légales</li>
                <li>Prévenir la fraude et assurer la sécurité</li>
              </ul>
            </div>

            {/* Section V */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                V. PARTAGE DES RENSEIGNEMENTS
              </h2>
              <p className="mb-4">
                Nous pouvons partager vos renseignements avec :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nos fournisseurs technologiques (paiement, hébergement, CRM)</li>
                <li>Des partenaires nécessaires à l'exécution du service</li>
                <li>Les autorités légales lorsque requis</li>
              </ul>
              <p className="mt-4 font-semibold">
                Aura Nettoyage ne vend jamais vos renseignements personnels.
              </p>
            </div>

            {/* Section VI */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                VI. COOKIES ET TECHNOLOGIES SIMILAIRES
              </h2>
              <p className="mb-4">
                Nous utilisons des cookies pour :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mémoriser vos préférences</li>
                <li>Analyser l'utilisation du site</li>
                <li>Offrir une expérience personnalisée</li>
                <li>Diffuser du contenu et des publicités pertinentes</li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences via votre navigateur.
              </p>
            </div>

            {/* Section VII */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                VII. GESTION DE VOS PRÉFÉRENCES
              </h2>
              <p className="mb-4">
                Vous pouvez :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modifier ou supprimer vos renseignements</li>
                <li>Retirer votre consentement aux communications marketing</li>
                <li>Gérer les paramètres de localisation</li>
                <li>Demander l'accès à vos données</li>
              </ul>
              <p className="mt-4">
                Pour toute demande :{" "}
                <a href="mailto:support@auranettoyage.com" className="underline hover:text-primary">
                  support@auranettoyage.com
                </a>
              </p>
            </div>

            {/* Section VIII */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                VIII. PROTECTION DES ENFANTS
              </h2>
              <p>
                Les Services ne s'adressent pas aux personnes de moins de 13 ans. Nous ne collectons pas volontairement de renseignements concernant des enfants.
              </p>
            </div>

            {/* Section IX */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                IX. TIERS
              </h2>
              <p>
                Nous ne sommes pas responsables des pratiques de confidentialité des sites ou services tiers accessibles via notre site.
              </p>
            </div>

            {/* Section X */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                X. MODIFICATIONS
              </h2>
              <p>
                Cette Politique peut être mise à jour à tout moment. La version la plus récente sera toujours affichée sur notre site.
              </p>
            </div>

            {/* Section XI */}
            <div className="pt-6">
              <h2 className="font-bold text-foreground mb-4">
                XI. NOUS JOINDRE
              </h2>
              <p>
                📧{" "}
                <a href="mailto:support@auranettoyage.com" className="underline hover:text-primary">
                  support@auranettoyage.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
