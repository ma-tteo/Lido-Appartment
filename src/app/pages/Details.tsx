import Navigation from "@/shared/components/Navigation";
import OpenStreetMap from "@/shared/components/OpenStreetMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { 
  Bed, 
  Bath, 
  Wifi, 
  Car, 
  Utensils, 
  WashingMachine, 
  Tv, 
  Wind,
  MapPin,
  Calendar,
  Clock,
  Users,
  Home,
  Navigation as NavigationIcon
} from "lucide-react";

import livingRoom from "@/assets/Galleria Fotografica1.JPG";
import bedroom from "@/assets/Galleria Fotografica2.jpg";
import secondBedroom from "@/assets/Galleria Fotografica3.JPG";
import bathroom from "@/assets/Galleria Fotografica4.JPG";

const Details = () => {
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
              Dettagli Appartamento
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tutte le informazioni sul nostro moderno appartamento a Tortoreto Lido
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contatti">Contattaci</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Apartment Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Panoramica Appartamento
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="elegant-shadow">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
                    <div className="font-medium">4 Ospiti</div>
                    <div className="text-sm text-muted-foreground">Max persone</div>
                  </CardContent>
                </Card>
                <Card className="elegant-shadow">
                  <CardContent className="p-4 text-center">
                    <Bed className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
                    <div className="font-medium">2 Camere</div>
                    <div className="text-sm text-muted-foreground">Matrimoniale + doppia</div>
                  </CardContent>
                </Card>
                <Card className="elegant-shadow">
                  <CardContent className="p-4 text-center">
                    <Bath className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
                    <div className="font-medium">1 Bagno</div>
                    <div className="text-sm text-muted-foreground">Completo</div>
                  </CardContent>
                </Card>
                <Card className="elegant-shadow">
                  <CardContent className="p-4 text-center">
                    <Home className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
                    <div className="font-medium">1° Piano</div>
                    <div className="text-sm text-muted-foreground">Con ascensore</div>
                  </CardContent>
                </Card>
              </div>

              <div className="prose max-w-none">
                <p className="text-muted-foreground mb-4">
                  Appartamento di recente costruzione situato al primo piano con ascensore nel cuore di Tortoreto Lido. 
                  La posizione strategica permette di raggiungere il mare in soli 5 minuti a piedi e di avere tutti i 
                  servizi a portata di mano.
                </p>
                <p className="text-muted-foreground">
                  L'appartamento è completamente arredato e attrezzato per garantire un soggiorno confortevole. 
                  La zona è tranquilla ma centrale, con ampia disponibilità di parcheggi gratuiti.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={livingRoom} alt="Soggiorno" className="rounded-lg aspect-square object-cover hover-lift" />
              <img src={bedroom} alt="Camera matrimoniale" className="rounded-lg aspect-square object-cover hover-lift" />
              <img src={secondBedroom} alt="Cameretta" className="rounded-lg aspect-square object-cover hover-lift" />
              <img src={bathroom} alt="Bagno" className="rounded-lg aspect-square object-cover hover-lift" />
            </div>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-16 bg-sand-warm/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Descrizione Ambienti
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="elegant-shadow hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-ocean-blue" />
                  Soggiorno e Cucina
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cucina completamente attrezzata</li>
                  <li>• Forno a microonde</li>
                  <li>• Lavastoviglie</li>
                  <li>• Frigorifero</li>
                  <li>• Piano cottura</li>
                  <li>• Tavolo da pranzo</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-ocean-blue" />
                  Camera Matrimoniale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Letto matrimoniale</li>
                  <li>• Divisibile in due singoli</li>
                  <li>• Armadio spazioso</li>
                  <li>• Accesso al balcone</li>
                  <li>• Finestre luminose</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-ocean-blue" />
                  Cameretta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Due letti singoli</li>
                  <li>• Ideale per bambini</li>
                  <li>• Armadio</li>
                  <li>• Finestra luminosa</li>
                  <li>• Ambiente accogliente</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-ocean-blue" />
                  Bagno e Balcone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bagno completo</li>
                  <li>• Doccia</li>
                  <li>• Lavatrice</li>
                  <li>• Balcone perimetrale</li>
                  <li>• Vista sulla zona</li>
                  <li>• Spazio per stendere</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Servizi e Dotazioni
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="elegant-shadow hover-lift">
              <CardContent className="p-6 text-center">
                <WashingMachine className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Lavatrice</h3>
                <p className="text-sm text-muted-foreground">Lavatrice a disposizione degli ospiti</p>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardContent className="p-6 text-center">
                <Utensils className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Lavastoviglie</h3>
                <p className="text-sm text-muted-foreground">Per maggiore comodità</p>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardContent className="p-6 text-center">
                <Tv className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Televisione</h3>
                <p className="text-sm text-muted-foreground">TV per il relax serale</p>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardContent className="p-6 text-center">
                <Wind className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Ferro da Stiro</h3>
                <p className="text-sm text-muted-foreground">Ferro e asse da stiro inclusi</p>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardContent className="p-6 text-center">
                <Car className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Parcheggio</h3>
                <p className="text-sm text-muted-foreground">Ampia disponibilità zona</p>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardContent className="p-6 text-center">
                <Home className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Ascensore</h3>
                <p className="text-sm text-muted-foreground">Accesso comodo al 1° piano</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Check-in/out Rules */}
      <section className="py-16 bg-gradient-shore">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Informazioni sul Soggiorno
          </h2>

          <Card className="max-w-4xl mx-auto elegant-shadow">
            <CardHeader>
              <CardTitle className="text-center">Note Importanti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Da Portare</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Lenzuola e federe</li>
                    <li>• Asciugamani da bagno</li>
                    <li>• Asciugamani da mare</li>
                    <li>• Prodotti per l'igiene personale</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Già Presente</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Tutto l'occorrente per cucina</li>
                    <li>• Elettrodomestici funzionanti</li>
                    <li>• Prodotti per pulizia base</li>
                    <li>• Appartamento pulito</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Posizione e Zona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Appartamento situato nel centro di Tortoreto Lido, vicino a tutti i servizi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-ocean-blue" />
                  Mappa Interattiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <OpenStreetMap />
              </CardContent>
            </Card>

            {/* Location Details */}
            <div className="space-y-6">
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <NavigationIcon className="h-5 w-5 text-ocean-blue" />
                    Indirizzo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-medium text-foreground">Via Giovanni XXIII</div>
                    <div className="text-muted-foreground">64018 Tortoreto Lido (TE)</div>
                    <div className="text-muted-foreground">Abruzzo, Italia</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle>Distanze</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">🏖️ Mare</span>
                      <span className="font-medium">400m (5 min a piedi)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">🛒 Supermercato</span>
                      <span className="font-medium">200m (3 min a piedi)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">🚗 Sottopasso Via Carducci</span>
                      <span className="font-medium">100m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">🏛️ Alba Adriatica</span>
                      <span className="font-medium">5 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">🏛️ Giulianova</span>
                      <span className="font-medium">10 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">🏛️ San Benedetto del Tronto</span>
                      <span className="font-medium">12 km</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle>Servizi Zona</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <span>🅿️</span> Parcheggi disponibili
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🍕</span> Ristoranti
                    </div>
                    <div className="flex items-center gap-1">
                      <span>☕</span> Bar e caffè
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🏥</span> Farmacia
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🏖️</span> Stabilimenti balneari
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🚌</span> Trasporti pubblici
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Vivi le Tue Vacanze a Tortoreto
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Non perdere l'opportunità di trascorrere una fantastica settimana a Tortoreto Lido. 
            Contattaci per scoprire le disponibilità.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contatti">Contattaci Ora</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
              <Link to="/">Torna alla Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;