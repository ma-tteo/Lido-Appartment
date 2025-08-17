import Navigation from "@/shared/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen main-content bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-shore">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Prezzi e Disponibilità
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Contattaci per scoprire le tariffe e verificare se l'appartamento è libero.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex justify-center">
          <Card className="elegant-shadow w-full max-w-lg text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Phone className="h-6 w-6 text-ocean-blue" />
                Richiedi un Preventivo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Per conoscere i prezzi aggiornati e le disponibilità, ti invitiamo a contattarci direttamente. 
                Chiamaci o scrivici su WhatsApp per una risposta rapida.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contatti">
                  <Phone className="mr-2 h-4 w-4" /> Vai ai Contatti
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Pricing;