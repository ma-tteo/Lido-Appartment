import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import NearbyAttractions from "@/components/NearbyAttractions";
import AdvancedBooking from "@/components/AdvancedBooking";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen main-content">
      <Navigation />
      <Hero />
      <Gallery />
      <NearbyAttractions />
      <AdvancedBooking />
      <Reviews />
      
      {/* Footer */}
      <footer className="bg-deep-ocean text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="font-serif text-xl mb-2">Appartamento Tortoreto Lido</h3>
            <p className="text-white/80">Via Giovanni XXIII - 64018 Tortoreto Lido (TE)</p>
          </div>
          <div className="text-white/60 text-sm">
            © 2025 Appartamento Tortoreto Lido. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;