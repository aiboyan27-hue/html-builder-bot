import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const CommercialContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir votre nom et numéro de téléphone.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Demande envoyée !",
      description: "Nous vous rappelons rapidement.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-heading text-h1 font-bold text-foreground mb-4">
                Obtenir une soumission
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des solutions de nettoyage professionnelles pour bureaux, commerces et espaces d'affaires à Montréal.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Contactez-nous
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Nous offrons des services de nettoyage commercial adaptés à vos besoins. Contactez-nous pour une soumission gratuite.
                  </p>
                </div>

                <div className="space-y-6">
                  <a 
                    href="tel:5141234567" 
                    className="flex items-center gap-4 p-4 bg-card border border-border hover:border-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        (514) 123-4567
                      </p>
                      <p className="text-sm text-muted-foreground">Appelez-nous maintenant</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-card border border-border">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">info@auranettoyage.ca</p>
                      <p className="text-sm text-muted-foreground">Écrivez-nous</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-card border border-border">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Montréal, Québec</p>
                      <p className="text-sm text-muted-foreground">Région métropolitaine</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-accent/10 border border-accent/20">
                  <p className="text-foreground font-medium">
                    ✓ Nous vous rappelons rapidement
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Soumission gratuite sous 24 heures
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Merci !
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Votre demande a été envoyée. Nous vous contacterons sous peu.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Envoyer une autre demande
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                      Demandez une soumission gratuite
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <Label htmlFor="name" className="text-foreground">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="mt-1.5"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-foreground">
                          Numéro de téléphone *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(514) 000-0000"
                          className="mt-1.5"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          Courriel (optionnel)
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@courriel.com"
                          className="mt-1.5"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground">
                          Message (optionnel)
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez vos besoins de nettoyage commercial..."
                          rows={4}
                          className="mt-1.5"
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer la demande
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CommercialContact;
