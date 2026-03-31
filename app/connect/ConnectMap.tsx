'use client';

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

const markers = [
  { lat: 37.77, lng: -122.42, label: 'San Francisco', size: 14, color: '#e8976b' },
  { lat: 51.51, lng: -0.13, label: 'London', size: 12, color: '#c47a52' },
  { lat: 35.68, lng: 139.69, label: 'Tokyo', size: 10, color: '#f4c87a' },
  { lat: 1.35, lng: 103.82, label: 'Singapore', size: 8, color: '#e8976b' },
  { lat: 48.86, lng: 2.35, label: 'Paris', size: 10, color: '#c47a52' },
  { lat: -33.87, lng: 151.21, label: 'Sydney', size: 8, color: '#f4c87a' },
  { lat: 40.71, lng: -74.01, label: 'New York', size: 14, color: '#e8976b' },
  { lat: 19.08, lng: 72.88, label: 'Mumbai', size: 12, color: '#c47a52' },
  { lat: 52.52, lng: 13.4, label: 'Berlin', size: 10, color: '#e8976b' },
  { lat: -23.55, lng: -46.63, label: 'São Paulo', size: 8, color: '#f4c87a' },
];

export default function ConnectMap() {
  return (
    <MapContainer
      center={[25, 10]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', borderRadius: '1.25rem' }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      {markers.map((m) => (
        <CircleMarker
          key={m.label}
          center={[m.lat, m.lng]}
          radius={m.size}
          pathOptions={{
            color: 'transparent',
            fillColor: m.color,
            fillOpacity: 0.5,
          }}
        >
          <Popup>
            <span className="font-body text-sm text-text-heading font-medium">
              {m.label}
            </span>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
