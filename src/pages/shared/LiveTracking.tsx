
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const activeReps = [
  { id: '2', lat: 40.7128, lng: -74.0060, name: 'John Doe', status: 'Visiting Customer', lastUpdate: '2 mins ago' },
  { id: '3', lat: 40.7200, lng: -73.9900, name: 'Jane Smith', status: 'In Transit', lastUpdate: '5 mins ago' }
];

export default function LiveTracking() {
  return (
    <div className="h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Live Field Tracking</h1>
        <p className="text-slate-500">Monitor your sales representatives in real-time</p>
      </div>
      
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden relative">
        <MapContainer center={[40.7150, -74.0000]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {activeReps.map(rep => (
            <Marker key={rep.id} position={[rep.lat, rep.lng]}>
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-slate-900">{rep.name}</h3>
                  <p className="text-sm text-slate-600 mb-2">{rep.status}</p>
                  <p className="text-xs text-slate-400">Updated: {rep.lastUpdate}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
