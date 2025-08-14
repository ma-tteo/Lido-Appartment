import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Check, X, Euro, Info } from "lucide-react";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen main-content">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-shore">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-ocean mb-6">
              Prezzi e Disponibilità
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Periodo disponibile estate 2025 a Tortoreto Lido
            </p>
          </div>
        </div>
      </section>

      {/* Available Period */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="elegant-shadow max-w-4xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-center justify-center">
                <Calendar className="h-6 w-6 text-ocean-blue" />
                Periodo Disponibile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-deep-ocean mb-2">23 - 31 Agosto 2025</div>
                  <div className="text-muted-foreground">8 notti consecutive</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ocean-blue mb-2">550€</div>
                  <div className="text-muted-foreground">Totale per tutto il periodo</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8 pt-6 border-t">
                <div>
                  <h4 className="font-semibold text-deep-ocean mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    Check-in
                  </h4>
                  <p className="text-muted-foreground">Sabato 23 Agosto dalle 15:00</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-ocean mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-red-600" />
                    Check-out
                  </h4>
                  <p className="text-muted-foreground">Sabato 31 Agosto entro le 10:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-sand-warm/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-deep-ocean mb-12 text-center">
            Dettagli Prezzo
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Available Period Card */}
            <Card className="elegant-shadow hover-lift border-ocean-blue/20">
              <CardHeader className="text-center">
                <CardTitle className="text-ocean-blue">Periodo Disponibile</CardTitle>
                <div className="text-sm text-muted-foreground">23-31 Agosto 2025</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-deep-ocean mb-2">550€</div>
                  <div className="text-muted-foreground">8 notti - Sabato/Sabato</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Appartamento completamente arredato</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Tutti gli elettrodomestici inclusi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Balcone perimetrale</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Ascensore e parcheggi disponibili</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>A 400m dal mare</span>
                  </div>
                </div>
                
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contatti">Prenota Ora</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Other Periods Card */}
            <Card className="elegant-shadow opacity-75">
              <CardHeader className="text-center">
                <CardTitle className="text-muted-foreground">Altri Periodi</CardTitle>
                <div className="text-sm text-muted-foreground">Luglio, Agosto, Settembre 2025</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-muted-foreground mb-2">NON</div>
                  <div className="text-muted-foreground">Disponibile</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500" />
                    <span>Luglio 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500" />
                    <span>1-22 Agosto 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500" />
                    <span>Settembre 2025</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" disabled>
                  Non Disponibile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="elegant-shadow max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-center justify-center">
                <Info className="h-6 w-6 text-ocean-blue" />
                Informazioni Aggiuntive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-deep-ocean mb-3">Biancheria</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Lenzuola e asciugamani NON forniti. Gli ospiti devono portare la propria biancheria da letto e da bagno.
                  </p>
                  
                  <h4 className="font-semibold text-deep-ocean mb-3">Pulizie</h4>
                  <p className="text-sm text-muted-foreground">
                    Appartamento consegnato pulito. Le pulizie finali sono a carico degli ospiti.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-deep-ocean mb-3">Cauzione</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Nessuna cauzione richiesta. Si chiede solo il rispetto dell'appartamento e delle regole condominiali.
                  </p>
                  
                  <h4 className="font-semibold text-deep-ocean mb-3">Pagamento</h4>
                  <p className="text-sm text-muted-foreground">
                    Pagamento del 50% alla prenotazione, saldo all'arrivo. Contanti o bonifico bancario.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Prenota le Tue Vacanze
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Il periodo 23-31 Agosto è l'unico disponibile per l'estate 2025. 
            Non perdere questa opportunità!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contatti">Contatta per Prenotare</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-deep-ocean" asChild>
              <Link to="/dettagli">Vedi Dettagli Appartamento</Link>
            </Button>
          </div>
        </div>
      </section>

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

export default Pricing;
