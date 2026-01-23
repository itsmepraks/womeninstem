'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Sample data for women-in-STEM activity locations
const activityData = [
    { id: 1, name: 'Google Women Techmakers', type: 'company', lat: 37.4220, lng: -122.0841, city: 'Mountain View, CA' },
    { id: 2, name: 'Microsoft DigiGirlz', type: 'company', lat: 47.6062, lng: -122.3321, city: 'Seattle, WA' },
    { id: 3, name: 'AnitaB.org', type: 'organization', lat: 37.3861, lng: -122.0839, city: 'Palo Alto, CA' },
    { id: 4, name: 'Girls Who Code HQ', type: 'organization', lat: 40.7128, lng: -74.0060, city: 'New York, NY' },
    { id: 5, name: 'Women Who Code', type: 'organization', lat: 37.7749, lng: -122.4194, city: 'San Francisco, CA' },
    { id: 6, name: 'Grace Hopper Celebration', type: 'event', lat: 28.5383, lng: -81.3792, city: 'Orlando, FL' },
    { id: 7, name: 'Society of Women Engineers', type: 'organization', lat: 41.8781, lng: -87.6298, city: 'Chicago, IL' },
    { id: 8, name: 'Black Girls CODE', type: 'organization', lat: 37.8044, lng: -122.2712, city: 'Oakland, CA' },
    { id: 9, name: 'Lesbians Who Tech', type: 'event', lat: 37.7749, lng: -122.4194, city: 'San Francisco, CA' },
    { id: 10, name: 'Women in Data Science', type: 'event', lat: 37.4275, lng: -122.1697, city: 'Stanford, CA' },
    { id: 11, name: 'IBM Women in Tech', type: 'company', lat: 41.1077, lng: -73.7191, city: 'Armonk, NY' },
    { id: 12, name: 'Salesforce Women in Tech', type: 'company', lat: 37.7897, lng: -122.3972, city: 'San Francisco, CA' },
    { id: 13, name: 'MIT Women in STEM', type: 'organization', lat: 42.3601, lng: -71.0942, city: 'Cambridge, MA' },
    { id: 14, name: 'Women in Tech Summit', type: 'event', lat: 38.9072, lng: -77.0369, city: 'Washington, DC' },
    { id: 15, name: 'PyLadies Global', type: 'organization', lat: 34.0522, lng: -118.2437, city: 'Los Angeles, CA' },
];

// Get color based on type
const getMarkerColor = (type: string) => {
    switch (type) {
        case 'company': return '#3B82F6'; // blue
        case 'organization': return '#10B981'; // green
        case 'event': return '#F59E0B'; // amber
        default: return '#6B7280'; // gray
    }
};

export default function ActivityMap() {
    const [mounted, setMounted] = useState(false);
    const [filter, setFilter] = useState<'all' | 'company' | 'organization' | 'event'>('all');

    useEffect(() => {
        setMounted(true);
    }, []);

    const filteredData = filter === 'all'
        ? activityData
        : activityData.filter(item => item.type === filter);

    if (!mounted) {
        return (
            <div className="aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <div className="text-white/30">Loading map...</div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
                {[
                    { id: 'all', label: 'All', count: activityData.length },
                    { id: 'company', label: 'Companies', count: activityData.filter(d => d.type === 'company').length },
                    { id: 'organization', label: 'Organizations', count: activityData.filter(d => d.type === 'organization').length },
                    { id: 'event', label: 'Events', count: activityData.filter(d => d.type === 'event').length },
                ].map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => setFilter(btn.id as typeof filter)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${filter === btn.id
                                ? 'bg-white/20 text-white'
                                : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
                            }`}
                    >
                        {btn.label} ({btn.count})
                    </button>
                ))}
            </div>

            {/* Map */}
            <div className="aspect-[2/1] rounded-lg overflow-hidden border border-white/10">
                <MapContainer
                    center={[39.8283, -98.5795]}
                    zoom={4}
                    style={{ height: '100%', width: '100%', background: '#1a1a1a' }}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />
                    {filteredData.map((location) => (
                        <CircleMarker
                            key={location.id}
                            center={[location.lat, location.lng]}
                            radius={8}
                            pathOptions={{
                                fillColor: getMarkerColor(location.type),
                                color: '#ffffff',
                                weight: 2,
                                opacity: 0.8,
                                fillOpacity: 0.6,
                            }}
                        >
                            <Popup>
                                <div className="text-black p-1">
                                    <div className="font-semibold text-sm">{location.name}</div>
                                    <div className="text-xs text-gray-600">{location.city}</div>
                                    <div className="text-xs capitalize mt-1 px-2 py-0.5 rounded-full inline-block"
                                        style={{ backgroundColor: getMarkerColor(location.type) + '20', color: getMarkerColor(location.type) }}>
                                        {location.type}
                                    </div>
                                </div>
                            </Popup>
                        </CircleMarker>
                    ))}
                </MapContainer>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-xs text-white/50">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span>Companies</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span>Organizations</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <span>Events</span>
                </div>
            </div>
        </div>
    );
}
