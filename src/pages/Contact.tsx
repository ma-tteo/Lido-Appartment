import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Calendar,
  Euro,
  MapPin,
  Clock,
  Users,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Messaggio Inviato!",
      description: "Ti risponderemo al più presto per la tua prenotazione.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-shore">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-ocean mb-6">
              Contatti e Prenotazioni
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scrivi per prenotare il tuo soggiorno dal 23 al 31 Agosto 2025
            </p>
            <div className="bg-coral/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto elegant-shadow">
              <div className="text-3xl font-bold text-deep-ocean mb-2">
                550€
              </div>
              <div className="text-sm text-muted-foreground">
                per 8 notti (23-31 Agosto 2025)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageCircle className="h-6 w-6 text-ocean-blue" />
                  Richiedi Informazioni
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome e Cognome *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Il tuo nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="la-tua-email@esempio.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+39 123 456 7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Messaggio</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Scrivi qui la tua richiesta di prenotazione o eventuali domande..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Invia Richiesta
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campi obbligatori. Ti risponderemo entro 24 ore.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Booking Summary & Contact Info */}
            <div className="space-y-6">
              
              {/* Booking Summary */}
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-ocean-blue" />
                    Riepilogo Prenotazione
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Periodo</span>
                    </div>
                    <span className="font-medium">23-31 Agosto 2025</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Notti</span>
                    </div>
                    <span className="font-medium">8 notti</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Ospiti max</span>
                    </div>
                    <span className="font-medium">4 persone</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Distanza mare</span>
                    </div>
                    <span className="font-medium">400m</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 bg-ocean-blue/10 rounded-lg px-4">
                    <div className="flex items-center gap-2">
                      <Euro className="h-5 w-5 text-ocean-blue" />
                      <span className="font-semibold">Prezzo Totale</span>
                    </div>
                    <span className="text-2xl font-bold text-ocean-blue">550€</span>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    Incluso nel Prezzo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Appartamento completo 4 posti</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Cucina completamente attrezzata</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Tutti gli elettrodomestici</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Balcone perimetrale</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Pulizia iniziale</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Parcheggio zona</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-800">
                      <strong>Nota:</strong> Biancheria da letto e da bagno non fornita
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Direct Contact */}
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-ocean-blue" />
                    Contatto Diretto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-ocean-blue" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">info@appartamento-tortoreto.it</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-ocean-blue" />
                      <div>
                        <div className="font-medium">Telefono</div>
                        <div className="text-sm text-muted-foreground">+39 123 456 7890</div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground mt-4">
                      Preferibilmente contatti via email per avere tutto per iscritto
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-sand-warm/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-deep-ocean mb-12 text-center">
            Domande Frequenti
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Quando posso fare il check-in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Il check-in è sabato 23 agosto dalle ore 15:00 in poi. Vi aspetteremo per la consegna delle chiavi.
                </p>
              </CardContent>
            </Card>

            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="text-lg">È richiesto un deposito?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sì, è richiesto un deposito cauzionale che vi verrà restituito al check-out se tutto è in ordine.
                </p>
              </CardContent>
            </Card>

            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Sono ammessi animali?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gli animali non sono ammessi nell'appartamento per motivi di igiene e allergie.
                </p>
              </CardContent>
            </Card>

            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="text-lg">C'è il parcheggio?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sì, c'è ampia disponibilità di parcheggi gratuiti nella zona dell'appartamento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-deep-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Pronto per le Vacanze?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Non aspettare, il periodo 23-31 Agosto è l'unico disponibile per l'estate 2025!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Compila il Form Sopra
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-deep-ocean" asChild>
              <Link to="/dettagli">Vedi Dettagli</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;