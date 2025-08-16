import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Home, Info, Phone, MapPin, Calendar, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { to: "/", text: "Home", icon: <Home className="inline h-4 w-4 mr-1" /> },
  { to: "/dettagli", text: "Dettagli", icon: <Info className="inline h-4 w-4 mr-1" /> },
  { to: "/prezzi", text: "Disponibilità", icon: <Calendar className="inline h-4 w-4 mr-1" /> },
  { to: "/contatti", text: "Contatti", icon: <Phone className="inline h-4 w-4 mr-1" /> },
];

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
              <MapPin className="h-6 w-6 text-ocean-blue" />
              <span className="font-serif font-semibold text-xl text-foreground">
                Tortoreto Lido
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className={`text-sm font-medium transition-colors hover:text-ocean-blue ${
                    location.pathname === link.to ? "text-ocean-blue" : "text-muted-foreground"
                  }`}
                >
                  {link.icon}
                  {link.text}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
              <Button variant="hero" size="sm" className="hidden md:inline-flex" asChild>
                <Link to="/contatti">Contatti</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  onClick={toggleMobileMenu}
                  className={`text-lg font-medium transition-colors hover:text-ocean-blue flex items-center ${
                    location.pathname === link.to ? "text-ocean-blue" : "text-foreground"
                  }`}
                >
                  {link.icon}
                  {link.text}
                </Link>
              ))}
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contatti" onClick={toggleMobileMenu}>Contattaci Ora</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
