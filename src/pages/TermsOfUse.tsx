import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container max-w-4xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
            Conditions d'utilisation
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Des attentes claires et transparentes
          </p>

          {/* Content */}
          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Section 1 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                1. Conditions générales
              </h2>
              <p>
                L'utilisation et l'accès au site Aura Nettoyage impliquent l'acceptation pleine et entière des présentes conditions d'utilisation. En accédant à ce site ou en réservant un service, vous reconnaissez avoir pris connaissance de ces conditions et les accepter.
              </p>
              <p className="mt-4">
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                2. Droit de refus de service
              </h2>
              <p className="mb-4">
                Aura Nettoyage se réserve le droit de refuser ou d'interrompre un service, à sa discrétion, notamment dans les cas suivants (liste non exhaustive) :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Impossibilité d'accéder aux lieux</li>
                <li>Absence d'électricité ou d'eau</li>
                <li>Informations incomplètes ou inexactes lors de la réservation</li>
                <li>Service demandé hors du périmètre initialement prévu</li>
                <li>Comportement inapproprié ou irrespectueux envers notre équipe</li>
                <li>Conditions de travail jugées non sécuritaires</li>
                <li>Problèmes de paiement ou informations de facturation invalides</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                3. Paiement
              </h2>
              <p className="mb-4">
                Les paiements sont acceptés par :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cartes de crédit : Visa, Mastercard, American Express</li>
                <li>Virements Interac</li>
              </ul>
              <p className="mt-4">
                Le paiement est exigible le jour du service. Aura Nettoyage se réserve le droit de conserver une méthode de paiement valide au dossier.
              </p>
              <p className="mt-4 font-semibold">
                Aucun paiement en argent comptant n'est accepté.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                4. Dommages matériels et accidents
              </h2>
              <p>
                Nous traitons chaque espace avec soin. Toutefois, des incidents peuvent survenir.
              </p>
              <p className="mt-4">
                Nous recommandons fortement de sécuriser ou de ranger tout objet fragile, de valeur ou irremplaçable avant le service.
              </p>
              <p className="mt-4">
                Aura Nettoyage ne peut être tenu responsable des dommages causés par des installations défectueuses, des objets mal fixés, des luminaires, ventilateurs, cadres ou autres éléments instables.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                5. Qualité du service et satisfaction
              </h2>
              <p>
                Le nettoyage étant un service personnalisé et subjectif, Aura Nettoyage ne procède pas à des remboursements.
              </p>
              <p className="mt-4">
                Toutefois, si un élément du service ne répond pas à vos attentes, nous vous invitons à nous contacter rapidement afin de trouver une solution appropriée.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                6. Horaire et arrivée
              </h2>
              <p>
                Les heures d'arrivée sont fournies à titre indicatif et peuvent varier selon les conditions de la journée.
              </p>
              <p className="mt-4">
                Pour les immeubles à logements ou condominiums, le temps de service débute à l'arrivée de notre équipe sur place.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                7. Équipe de nettoyage
              </h2>
              <p>
                Nous faisons de notre mieux pour assurer une constance dans les équipes affectées à votre service, sans toutefois pouvoir le garantir en raison de congés, maladies ou ajustements opérationnels.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                8. Utilisation du site
              </h2>
              <p>
                Il est interdit d'utiliser ce site à des fins illégales, abusives, frauduleuses ou offensantes. Toute tentative d'atteinte à la sécurité ou au bon fonctionnement du site est strictement interdite.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                9. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu présent sur ce site, incluant les textes, images, logos et éléments visuels, est la propriété exclusive d'Aura Nettoyage. Toute reproduction ou utilisation sans autorisation est interdite.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                10. Communications
              </h2>
              <p>
                En demandant une soumission ou en communiquant avec Aura Nettoyage, vous consentez à recevoir des communications liées à nos services par courriel, téléphone ou message texte.
              </p>
              <p className="mt-4">
                Vous pouvez en tout temps demander à ne plus recevoir ces communications.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                11. Modifications
              </h2>
              <p>
                Aura Nettoyage se réserve le droit de modifier les présentes conditions d'utilisation à tout moment, sans préavis. Les conditions applicables sont celles en vigueur au moment de l'utilisation du site ou du service.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-bold text-foreground mb-4">
                12. Nous joindre
              </h2>
              <p>
                Montréal, Québec
                <br />
                <a href="mailto:info@auranettoyage.com" className="underline hover:text-primary">
                  info@auranettoyage.com
                </a>
              </p>
              <p className="mt-2">
                Téléphone Aura Nettoyage
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
