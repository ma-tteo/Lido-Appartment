import Navigation from "@/shared/components/Navigation";
import Hero from "@/features/landing/components/Hero";
import Gallery from "@/features/gallery/components/Gallery";
import Reviews from "@/features/reviews/components/Reviews";
import NearbyAttractions from "@/features/landing/components/NearbyAttractions";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen main-content bg-background">
      <Helmet>
        <title>Appartamento Tortoreto Lido - Affitto Estivo a 400m dal Mare</title>
        <meta name="description" content="Affitta un moderno appartamento a Tortoreto Lido per le tue vacanze estive. 4 posti letto, comfort e posizione strategica a soli 5 minuti a piedi dalla spiaggia." />
      </Helmet>
      <Navigation />
      <Hero />
      <Gallery />
      <NearbyAttractions />
      <Reviews />
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="font-serif text-xl mb-2">Appartamento Tortoreto Lido</h3>
            <p className="text-secondary-foreground/80">Via Giovanni XXIII - 64018 Tortoreto Lido (TE)</p>
          </div>
          <div className="text-secondary-foreground/60 text-sm">
            © Appartamento Tortoreto Lido. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;