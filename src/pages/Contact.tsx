import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import BusinessHours from "@/components/contact/BusinessHours";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactReviews from "@/components/contact/ContactReviews";
import ContactCTA from "@/components/contact/ContactCTA";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ContactHero />
        <BusinessHours />
        <ContactFAQ />
        <ContactReviews />
        <ContactCTA />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;