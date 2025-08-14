import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Info, Phone, MapPin } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-ocean-blue" />
            <span className="font-serif font-semibold text-xl text-deep-ocean">
              Tortoreto Lido
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-ocean-blue ${
                location.pathname === "/" ? "text-ocean-blue" : "text-muted-foreground"
              }`}
            >
              <Home className="inline h-4 w-4 mr-1" />
              Home
            </Link>
            <Link 
              to="/dettagli" 
              className={`text-sm font-medium transition-colors hover:text-ocean-blue ${
                location.pathname === "/dettagli" ? "text-ocean-blue" : "text-muted-foreground"
              }`}
            >
              <Info className="inline h-4 w-4 mr-1" />
              Dettagli
            </Link>
            <Link 
              to="/contatti" 
              className={`text-sm font-medium transition-colors hover:text-ocean-blue ${
                location.pathname === "/contatti" ? "text-ocean-blue" : "text-muted-foreground"
              }`}
            >
              <Phone className="inline h-4 w-4 mr-1" />
              Contatti
            </Link>
          </div>
          
          <Button variant="hero" size="sm" asChild>
            <Link to="/contatti">Prenota Ora</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;