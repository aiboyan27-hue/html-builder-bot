import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import WhyLocals from "@/components/about/WhyLocals";
import ExpertTeam from "@/components/about/ExpertTeam";
import TrustMetrics from "@/components/about/TrustMetrics";
import GoogleMap from "@/components/about/GoogleMap";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <OurStory />
      <CoreValues />
      <WhyLocals />
      <ExpertTeam />
      <TrustMetrics />
      <GoogleMap />
      <AboutCTA />
      <Footer />
    </main>
  );
};

export default About;
