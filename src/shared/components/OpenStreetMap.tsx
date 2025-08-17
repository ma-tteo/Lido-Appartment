import { MapPin } from 'lucide-react';

const OpenStreetMap = () => {
  // Tortoreto Lido coordinates
  const latitude = 42.788;
  const longitude = 13.943;
  
  // OpenStreetMap iframe URL
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01},${latitude-0.01},${longitude+0.01},${latitude+0.01}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div className="relative h-64 w-full rounded-lg overflow-hidden border">
      <iframe
        src={mapUrl}
        className="h-full w-full"
        style={{ border: 'none' }}
        title="Mappa di Tortoreto Lido"
      />
      <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm p-2 rounded-md shadow-sm border">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-medium">Appartamento Tortoreto Lido</span>
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          Via Giovanni XXIII
        </div>
      </div>
    </div>
  );
};

export default OpenStreetMap;