import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Calendar } from "@/shared/components/ui/calendar";
import { Badge } from "@/shared/components/ui/badge";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { 
  Calendar as CalendarIcon, 
  Users, 
  Euro, 
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail
} from "lucide-react";
import { useToast } from "@/shared/hooks/use-toast";
import { format, addDays } from "date-fns";
import { it } from "date-fns/locale";

const AdvancedBooking = () => {
  const [selectedDates, setSelectedDates] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined
  });

  const [bookingData, setBookingData] = useState({
    guests: 2,
    name: '',
    email: '',
    phone: '',
    requests: ''
  });

  const { toast } = useToast();

  // Disponibilità fissa per demo (23-31 Agosto 2025)
  const availablePeriod = {
    from: new Date(2025, 7, 23), // 23 agosto 2025
    to: new Date(2025, 7, 31)    // 31 agosto 2025
  };

  const pricePerNight = 68.75; // 550€ / 8 notti
  const totalPrice = 550;

  const isDateAvailable = (date: Date) => {
    return date >= availablePeriod.from && date <= availablePeriod.to;
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    if (!selectedDates.from || (selectedDates.from && selectedDates.to)) {
      // Starting new selection
      setSelectedDates({ from: date, to: undefined });
    } else if (selectedDates.from && !selectedDates.to) {
      // Completing selection
      if (date < selectedDates.from) {
        setSelectedDates({ from: date, to: selectedDates.from });
      } else {
        setSelectedDates({ from: selectedDates.from, to: date });
      }
    }
  };

  const calculateNights = () => {
    if (selectedDates.from && selectedDates.to) {
      const diffTime = selectedDates.to.getTime() - selectedDates.from.getTime();
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    return nights * pricePerNight;
  };

  const handleBookingSubmit = () => {
    if (!selectedDates.from || !selectedDates.to) {
      toast({
        title: "Seleziona le date",
        description: "Devi selezionare il periodo di soggiorno.",
        variant: "destructive"
      });
      return;
    }

    if (!bookingData.name || !bookingData.email) {
      toast({
        title: "Compila i campi obbligatori",
        description: "Nome ed email sono necessari per procedere.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Richiesta di prenotazione inviata!",
      description: "Ti contatteremo entro 24 ore per confermare la disponibilità.",
    });

    // Reset form
    setSelectedDates({ from: undefined, to: undefined });
    setBookingData({ guests: 2, name: '', email: '', phone: '', requests: '' });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-ocean mb-4">
              Sistema di Prenotazione Avanzato
            </h2>
            <p className="text-xl text-muted-foreground">
              Scegli le tue date e prenota in modo semplice e veloce
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <Card className="lg:col-span-2 elegant-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-ocean-blue" />
                  Seleziona le Date
                </CardTitle>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Disponibile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Non disponibile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-ocean-blue rounded-full"></div>
                    <span>Selezionato</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="range"
                  selected={selectedDates}
                  onSelect={(range) => {
                    if (range?.from) {
                      setSelectedDates({
                        from: range.from,
                        to: range.to
                      });
                    }
                  }}
                  disabled={(date) => !isDateAvailable(date)}
                  locale={it}
                  className="w-full"
                  classNames={{
                    day_selected: "bg-ocean-blue text-white",
                    day_range_start: "bg-ocean-blue text-white",
                    day_range_end: "bg-ocean-blue text-white",
                    day_range_middle: "bg-ocean-blue/20",
                  }}
                />

                {/* Available Period Info */}
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-800">Periodo Disponibile</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    <strong>23 - 31 Agosto 2025</strong> (8 notti) - Unico periodo disponibile per l'estate 2025
                  </p>
                </div>

                {/* Selected Period */}
                {selectedDates.from && selectedDates.to && (
                  <div className="mt-4 p-4 bg-ocean-blue/10 border border-ocean-blue/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarIcon className="h-5 w-5 text-ocean-blue" />
                      <span className="font-semibold text-ocean-blue">Periodo Selezionato</span>
                    </div>
                    <p className="text-ocean-blue text-sm">
                      <strong>
                        {format(selectedDates.from, "d MMMM", { locale: it })} - {format(selectedDates.to, "d MMMM yyyy", { locale: it })}
                      </strong> ({calculateNights()} notti)
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Booking Form & Summary */}
            <div className="space-y-6">
              {/* Booking Summary */}
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="h-5 w-5 text-ocean-blue" />
                    Riepilogo Prenotazione
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Prezzo per notte</span>
                    <span className="font-medium">€{pricePerNight.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Notti</span>
                    <span className="font-medium">{calculateNights() || 8}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Ospiti</span>
                    <Select value={bookingData.guests.toString()} onValueChange={(value) => 
                      setBookingData(prev => ({ ...prev, guests: parseInt(value) }))
                    }>
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Totale</span>
                      <span className="text-2xl font-bold text-ocean-blue">
                        €{selectedDates.from && selectedDates.to ? calculateTotal().toFixed(2) : totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guest Information */}
              <Card className="elegant-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-ocean-blue" />
                    Informazioni Ospite
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="guestName">Nome e Cognome *</Label>
                    <Input
                      id="guestName"
                      value={bookingData.name}
                      onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Il tuo nome completo"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guestEmail">Email *</Label>
                    <Input
                      id="guestEmail"
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guestPhone">Telefono</Label>
                    <Input
                      id="guestPhone"
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guestRequests">Richieste speciali</Label>
                    <Textarea
                      id="guestRequests"
                      value={bookingData.requests}
                      onChange={(e) => setBookingData(prev => ({ ...prev, requests: e.target.value }))}
                      placeholder="Eventuali richieste particolari..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Book Now Button */}
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleBookingSubmit}
                className="w-full"
              >
                Richiedi Prenotazione
              </Button>

              {/* Contact Info */}
              <Card className="elegant-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-ocean-blue" />
                      <span>info@appartamento-tortoreto.it</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-ocean-blue" />
                      <span>+39 123 456 7890</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-ocean-blue" />
                      <span>Risposta entro 24 ore</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedBooking;