import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Oups ! Page non trouvée</p>
          <Button asChild>
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;