import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Users } from "lucide-react";
import apartmentHero from "@/assets/apartment-living-room.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-shore opacity-95 z-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 hero-title leading-tight">
            Appartamento a Tortoreto Lido
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Moderno appartamento per le tue vacanze estive. 
            A soli 400m dal mare, 4 posti letto, completamente attrezzato.
          </p>
          
          {/* Key Info Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-sm mx-auto">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 elegant-shadow">
              <MapPin className="h-6 w-6 text-ocean-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-foreground">Distanza Mare</div>
              <div className="text-xs text-muted-foreground">Solo 400m</div>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 elegant-shadow">
              <Users className="h-6 w-6 text-ocean-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-foreground">Ospiti</div>
              <div className="text-xs text-muted-foreground">Fino a 4 persone</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild className="hover-lift">
              <Link to="/contatti">Contattaci</Link>
            </Button>
            <Button variant="coastal" size="xl" asChild className="hover-lift">
              <Link to="/dettagli">Scopri di Più</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;