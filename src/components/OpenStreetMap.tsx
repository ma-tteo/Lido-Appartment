import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OpenStreetMap = () => {
  // Tortoreto Lido coordinates
  const position: [number, number] = [42.788, 13.943];

  return (
    <div className="h-64 w-full rounded-lg overflow-hidden">
      <MapContainer
        center={position}
        zoom={15}
        className="h-full w-full"
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="p-2">
              <strong>Appartamento Tortoreto Lido</strong><br />
              Via Giovanni XXIII
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OpenStreetMap;