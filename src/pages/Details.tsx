import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  Home
} from "lucide-react";

import livingRoom from "@/assets/apartment-living-room.jpg";
import bedroom from "@/assets/apartment-bedroom.jpg";
import secondBedroom from "@/assets/apartment-second-bedroom.jpg";
import bathroom from "@/assets/apartment-bathroom.jpg";

const Details = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-shore">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-ocean mb-6">
              Dettagli Appartamento
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tutte le informazioni sul nostro moderno appartamento a Tortoreto Lido
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contatti">Prenota Ora - 550€</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Apartment Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-deep-ocean mb-6">
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
          <h2 className="text-3xl font-serif font-bold text-deep-ocean mb-12 text-center">
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
                  <li>• Zona living confortevole</li>
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
                  <li>• Arredamento moderno</li>
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
                  <li>• Vicina al bagno</li>
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
                  <li>• Bagno completo moderno</li>
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
          <h2 className="text-3xl font-serif font-bold text-deep-ocean mb-12 text-center">
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
          <h2 className="text-3xl font-serif font-bold text-deep-ocean mb-12 text-center">
            Informazioni Check-in/Check-out
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Calendar className="h-5 w-5" />
                  Check-in
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Sabato 23 Agosto 2025
                    </div>
                    <div className="text-sm text-muted-foreground">Dalle ore 15:00 in poi</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Vi aspettiamo per la consegna delle chiavi e una breve presentazione dell'appartamento.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <Calendar className="h-5 w-5" />
                  Check-out
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Sabato 31 Agosto 2025
                    </div>
                    <div className="text-sm text-muted-foreground">Entro le ore 10:00</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Riconsegna delle chiavi e breve controllo dell'appartamento.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 max-w-4xl mx-auto elegant-shadow">
            <CardHeader>
              <CardTitle className="text-center">Note Importanti</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-deep-ocean mb-2">Da Portare</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Lenzuola e federe</li>
                    <li>• Asciugamani da bagno</li>
                    <li>• Asciugamani da mare</li>
                    <li>• Prodotti per l'igiene personale</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-ocean mb-2">Già Presente</h4>
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
          <h2 className="text-3xl font-serif font-bold text-deep-ocean mb-12 text-center">
            Posizione Strategica
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="elegant-shadow hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-ocean-blue" />
                  Indirizzo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="font-medium">Via Giovanni XXIII</div>
                  <div className="text-muted-foreground">64018 Tortoreto Lido (TE)</div>
                  <div className="text-muted-foreground">Vicino al sottopasso Via Carducci</div>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardHeader>
                <CardTitle>Distanze</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Mare</span>
                    <span className="font-medium">400m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Supermercato</span>
                    <span className="font-medium">200m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Centro</span>
                    <span className="font-medium">300m</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover-lift">
              <CardHeader>
                <CardTitle>Comodità</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>✓ Zona centrale e ben servita</div>
                  <div>✓ Parcheggi disponibili</div>
                  <div>✓ Vicino a ristoranti e bar</div>
                  <div>✓ Fermata autobus</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Prenota le Tue Vacanze
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Non perdere l'opportunità di trascorrere una fantastica settimana a Tortoreto Lido. 
            Il periodo 23-31 Agosto è l'unico disponibile per l'estate 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contatti">Prenota Ora - 550€</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-deep-ocean" asChild>
              <Link to="/">Torna alla Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;