'use client';

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

// Real organizations from our data, mapped to their headquarters/primary locations
const markers = [
  // North America
  { lat: 37.39, lng: -122.08, label: 'AnitaB.org', desc: 'Home of the Grace Hopper Celebration', size: 16, color: '#c47a52' },
  { lat: 40.71, lng: -74.01, label: 'Girls Who Code', desc: '500,000+ girls reached', size: 14, color: '#e8976b' },
  { lat: 38.90, lng: -77.04, label: 'AAUW', desc: 'American Association of University Women', size: 12, color: '#c47a52' },
  { lat: 47.61, lng: -122.33, label: 'Ada Developers Academy', desc: 'Free coding bootcamp for women', size: 10, color: '#e8976b' },
  { lat: 42.36, lng: -71.06, label: 'MIT EECS Women', desc: 'Women in engineering at MIT', size: 10, color: '#f4c87a' },
  { lat: 34.05, lng: -118.24, label: 'Black Girls CODE', desc: 'Teaching girls of color to code', size: 12, color: '#c47a52' },
  { lat: 30.27, lng: -97.74, label: 'National Center for Women & IT', desc: 'NCWIT — Boulder / Austin', size: 10, color: '#e8976b' },
  { lat: 33.75, lng: -84.39, label: 'NSBE', desc: 'National Society of Black Engineers', size: 11, color: '#f4c87a' },

  // Europe
  { lat: 51.51, lng: -0.13, label: 'WISE Campaign', desc: 'Women in Science & Engineering (UK)', size: 12, color: '#c47a52' },
  { lat: 48.86, lng: 2.35, label: 'European Women in Mathematics', desc: 'EWM — Pan-European network', size: 10, color: '#e8976b' },
  { lat: 46.23, lng: 6.05, label: 'CERN', desc: 'Led by Fabiola Gianotti, first woman DG', size: 12, color: '#f4c87a' },
  { lat: 52.52, lng: 13.40, label: 'Django Girls', desc: 'Free coding workshops worldwide', size: 10, color: '#e8976b' },
  { lat: 59.33, lng: 18.07, label: 'Athena SWAN', desc: 'Gender equality in STEM academia', size: 10, color: '#c47a52' },

  // Asia Pacific
  { lat: 35.68, lng: 139.69, label: 'JSWE', desc: 'Japan Society of Women Engineers', size: 10, color: '#f4c87a' },
  { lat: 1.35, lng: 103.82, label: 'Women Who Code Asia', desc: '360,000+ global members', size: 10, color: '#e8976b' },
  { lat: 19.08, lng: 72.88, label: 'STEM programs India', desc: 'Growing women in tech community', size: 10, color: '#c47a52' },
  { lat: -33.87, lng: 151.21, label: 'Women in Technology AU', desc: 'Australian WIT network', size: 10, color: '#f4c87a' },

  // Africa & Latin America
  { lat: -1.29, lng: 36.82, label: 'AWSE', desc: 'African Women in Science & Engineering', size: 10, color: '#c47a52' },
  { lat: 6.52, lng: 3.38, label: 'OWSD Africa', desc: 'Women scientists in developing countries', size: 10, color: '#e8976b' },
  { lat: -23.55, lng: -46.63, label: 'RedMIM', desc: 'Women in STEM across Latin America', size: 10, color: '#f4c87a' },
  { lat: 4.71, lng: -74.07, label: 'Científicas Colombianas', desc: 'Women scientists in Colombia', size: 8, color: '#e8976b' },
];

export default function ConnectMap() {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
      zoomControl={false}
      style={{ height: '100%', width: '100%', borderRadius: '1.25rem' }}
      attributionControl={false}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {markers.map((m) => (
        <CircleMarker
          key={m.label}
          center={[m.lat, m.lng]}
          radius={m.size}
          pathOptions={{
            color: 'transparent',
            fillColor: m.color,
            fillOpacity: 0.55,
          }}
        >
          <Popup>
            <div style={{ fontFamily: 'system-ui', minWidth: 160 }}>
              <strong style={{ fontSize: 13, color: '#3d2518' }}>{m.label}</strong>
              <br />
              <span style={{ fontSize: 11, color: '#6b5344' }}>{m.desc}</span>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
