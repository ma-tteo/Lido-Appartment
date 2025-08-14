import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Calendar, Check, X } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-16 bg-gradient-shore">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-ocean mb-4">
            Prezzi e Disponibilità
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Periodo disponibile per l'estate 2025 con tutte le informazioni sui costi
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Available Period Card */}
          <Card className="mb-8 elegant-shadow">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl text-deep-ocean">
                <Calendar className="h-6 w-6 text-ocean-blue" />
                Periodo Disponibile
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-gradient-ocean text-white rounded-lg p-6 mb-6">
                <div className="text-3xl font-bold mb-2">23 - 31 Agosto 2025</div>
                <div className="text-lg opacity-90">8 notti consecutive</div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h4 className="font-semibold text-deep-ocean mb-2">Check-in</h4>
                  <div className="text-muted-foreground">
                    <div>📅 Sabato 23 Agosto</div>
                    <div>🕐 Dalle ore 15:00</div>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-deep-ocean mb-2">Check-out</h4>
                  <div className="text-muted-foreground">
                    <div>📅 Sabato 31 Agosto</div>
                    <div>🕐 Entro le ore 10:00</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Table */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Available Period */}
            <Card className="elegant-shadow hover-lift">
              <CardHeader>
                <CardTitle className="text-center text-ocean-blue">
                  Periodo Disponibile
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-deep-ocean mb-2">
                  550€
                </div>
                <div className="text-muted-foreground mb-4">
                  per 8 notti (23-31 Agosto)
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Appartamento completo</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>4 posti letto</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Cucina attrezzata</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>Balcone perimetrale</span>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contatti">Prenota Ora</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Unavailable Periods */}
            <Card className="elegant-shadow opacity-75">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">
                  Altri Periodi
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-muted-foreground mb-2">
                  Non Disponibili
                </div>
                <div className="text-muted-foreground mb-4">
                  Estate 2025
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500" />
                    <span>Luglio 2025</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500" />
                    <span>1-22 Agosto 2025</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500" />
                    <span>Settembre 2025</span>
                  </div>
                </div>
                <Button variant="outline" size="lg" className="w-full" disabled>
                  Non Disponibile
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Additional Info */}
          <Card className="mt-6 elegant-shadow">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-deep-ocean mb-4 text-center">
                Informazioni Aggiuntive
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong>Biancheria:</strong> Non fornita (lenzuola e asciugamani)
                </div>
                <div>
                  <strong>Pulizie:</strong> Appartamento pulito all'arrivo
                </div>
                <div>
                  <strong>Deposito:</strong> Da concordare al momento della prenotazione
                </div>
                <div>
                  <strong>Pagamento:</strong> Saldo all'arrivo
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;