import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import PricingSection from "@/components/PricingSection";
import LocationMap from "@/components/LocationMap";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <PricingSection />
      <LocationMap />
      
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