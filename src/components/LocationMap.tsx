import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MapPin, Navigation } from "lucide-react";

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [map, setMap] = useState<any>(null);

  const initializeMap = async (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      // Dynamically import mapbox-gl
      const mapboxgl = (await import('mapbox-gl')).default;
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.accessToken = token;
      
      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [13.943, 42.788], // Tortoreto Lido coordinates
        zoom: 15,
      });

      // Add marker for apartment
      new mapboxgl.Marker({
        color: '#3b82f6'
      })
        .setLngLat([13.943, 42.788])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div style="padding: 10px;"><strong>Appartamento Tortoreto Lido</strong><br>Via Giovanni XXIII</div>')
        )
        .addTo(newMap);

      // Add navigation controls
      newMap.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setMap(newMap);
      setShowTokenInput(false);
    } catch (error) {
      console.error('Errore nel caricamento della mappa:', error);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-ocean mb-4">
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
              {showTokenInput ? (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Per visualizzare la mappa interattiva, inserisci il tuo token Mapbox.
                    Puoi ottenerlo gratuitamente su{' '}
                    <a 
                      href="https://mapbox.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ocean-blue hover:underline"
                    >
                      mapbox.com
                    </a>
                  </p>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Inserisci Mapbox Token..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleTokenSubmit()}
                    />
                    <Button onClick={handleTokenSubmit} variant="hero">
                      Carica Mappa
                    </Button>
                  </div>
                </div>
              ) : (
                <div ref={mapContainer} className="h-64 w-full rounded-lg" />
              )}
            </CardContent>
          </Card>

          {/* Location Details */}
          <div className="space-y-6">
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-ocean-blue" />
                  Indirizzo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-medium text-deep-ocean">Via Giovanni XXIII</div>
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
  );
};

export default LocationMap;