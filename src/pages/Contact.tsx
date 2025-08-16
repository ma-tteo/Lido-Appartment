import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = "+393208581998";
  const whatsappNumber = "393208581998";

  return (
    <main className="min-h-screen main-content bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-shore">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Contattaci
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Siamo a tua disposizione. Scegli il modo più comodo per te.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex justify-center">
          <Card className="elegant-shadow w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-serif">
                Parla subito con noi
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Per informazioni sulla disponibilità, prezzi o qualsiasi altra domanda, il modo più rapido è tramite WhatsApp o una telefonata.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {/* WhatsApp Card */}
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="block group">
                  <Card className="hover-lift h-full">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <MessageSquare className="h-12 w-12 text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                      <p className="text-muted-foreground text-sm mb-4">Risposta rapida</p>
                      <Button variant="hero" className="bg-green-500 hover:bg-green-600 w-full">Invia un Messaggio</Button>
                    </CardContent>
                  </Card>
                </a>

                {/* Phone Card */}
                <a href={`tel:${phoneNumber}`} className="block group">
                  <Card className="hover-lift h-full">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <Phone className="h-12 w-12 text-ocean-blue mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Telefonata</h3>
                      <p className="text-muted-foreground text-sm mb-4">Contatto diretto</p>
                      <Button variant="hero" className="w-full">Chiama Ora</Button>
                    </CardContent>
                  </Card>
                </a>
              </div>

              <div className="text-center mt-8">
                <p className="text-lg font-medium text-foreground">
                  {phoneNumber.replace('+39', '+39 ')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Contact;
