import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import apartmentHero from "@/assets/apartment-living-room.jpg";
import beachHero from "@/assets/tortoreto-beach-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-shore opacity-95 z-10"></div>
        <img 
          src={beachHero} 
          alt="Tortoreto Lido Beach" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 hero-title leading-tight">
            Appartamento a Tortoreto Lido
          </h1>
          <p className="text-xl md:text-2xl text-deep-ocean/80 mb-8 max-w-2xl mx-auto">
            Moderno appartamento per le tue vacanze estive. 
            A soli 400m dal mare, 4 posti letto, completamente attrezzato.
          </p>
          
          {/* Key Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 elegant-shadow">
              <Calendar className="h-6 w-6 text-ocean-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-deep-ocean">Periodo</div>
              <div className="text-xs text-muted-foreground">23-31 Agosto 2025</div>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 elegant-shadow">
              <MapPin className="h-6 w-6 text-ocean-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-deep-ocean">Distanza Mare</div>
              <div className="text-xs text-muted-foreground">Solo 400m</div>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 elegant-shadow">
              <Users className="h-6 w-6 text-ocean-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-deep-ocean">Ospiti</div>
              <div className="text-xs text-muted-foreground">Fino a 4 persone</div>
            </div>
          </div>
          
          {/* Price highlight */}
          <div className="bg-coral/20 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto elegant-shadow">
            <div className="text-2xl md:text-3xl font-bold text-deep-ocean">
              550€
            </div>
            <div className="text-sm text-muted-foreground">
              per 8 notti (23-31 Agosto)
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild className="hover-lift">
              <Link to="/contatti">Prenota Ora</Link>
            </Button>
            <Button variant="coastal" size="xl" asChild className="hover-lift">
              <Link to="/dettagli">Scopri di Più</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Apartment preview image */}
      <div className="absolute bottom-8 right-8 hidden lg:block z-20">
        <div className="w-64 h-48 rounded-lg overflow-hidden elegant-shadow hover-lift">
          <img 
            src={apartmentHero} 
            alt="Appartamento Tortoreto Lido" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;