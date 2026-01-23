/**
 * Resources Chapter - Companies, Events, Organizations + Heat Map
 */
'use client';

import React, { useState } from 'react';
import { Building2, Calendar, Award, MapPin, ExternalLink } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import for the map to avoid SSR issues
const ActivityMap = dynamic(() => import('./ActivityMap'), {
    ssr: false,
    loading: () => (
        <div className="aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center border border-white/10 animate-pulse">
            <div className="text-white/30">Loading map...</div>
        </div>
    )
});

export default function ResourcesPage() {
    const [activeTab, setActiveTab] = useState<'map' | 'companies' | 'events' | 'orgs'>('map');

    const companies = [
        { name: 'Google', initiative: 'Women Techmakers', location: 'Global' },
        { name: 'Microsoft', initiative: 'DigiGirlz', location: 'Global' },
        { name: 'IBM', initiative: 'Women in Technology', location: 'Global' },
        { name: 'Salesforce', initiative: 'Women in Tech', location: 'San Francisco' },
        { name: 'Adobe', initiative: 'Women@Adobe', location: 'San Jose' },
        { name: 'Intel', initiative: 'Women at Intel Network', location: 'Santa Clara' },
    ];

    const events = [
        { name: 'Grace Hopper Celebration', date: 'October 2026', location: 'Orlando, FL' },
        { name: 'Women in Data Science', date: 'March 2026', location: 'Stanford, CA' },
        { name: 'Lesbians Who Tech Summit', date: 'February 2026', location: 'San Francisco' },
        { name: 'Women Impact Tech', date: 'Various', location: 'Virtual' },
    ];

    const organizations = [
        { name: 'AnitaB.org', focus: 'Women in Computing', url: 'anitab.org' },
        { name: 'NCWIT', focus: 'Women in IT', url: 'ncwit.org' },
        { name: 'Women in Tech Fund', focus: 'Funding & Support', url: 'womenintechfund.org' },
        { name: 'Rewriting the Code', focus: 'College Women', url: 'rewritingthecode.org' },
    ];

    const tabs = [
        { id: 'map' as const, label: 'Activity Map', icon: MapPin },
        { id: 'companies' as const, label: 'Companies', icon: Building2 },
        { id: 'events' as const, label: 'Events', icon: Calendar },
        { id: 'orgs' as const, label: 'Organizations', icon: Award },
    ];

    return (
        <div className="min-h-[50vh]">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Resources
                </h1>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                    Companies hiring, upcoming events, and organizations supporting women in STEM.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                ? 'bg-white/15 text-white'
                                : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="glass rounded-xl p-6">
                {activeTab === 'map' && (
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="w-5 h-5 text-white/70" />
                            <h2 className="font-display text-lg font-semibold text-white">
                                Women in STEM Activity Map
                            </h2>
                        </div>
                        <p className="text-white/40 text-sm mb-4">
                            Explore companies, organizations, and events supporting women in STEM across the US.
                        </p>
                        <ActivityMap />
                    </div>
                )}

                {activeTab === 'companies' && (
                    <div className="grid md:grid-cols-2 gap-3">
                        {companies.map((company) => (
                            <div
                                key={company.name}
                                className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
                            >
                                <div className="font-medium text-white">{company.name}</div>
                                <div className="text-white/50 text-sm">{company.initiative}</div>
                                <div className="text-white/30 text-xs mt-1 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {company.location}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'events' && (
                    <div className="space-y-3">
                        {events.map((event) => (
                            <div
                                key={event.name}
                                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5"
                            >
                                <div>
                                    <div className="font-medium text-white">{event.name}</div>
                                    <div className="text-white/30 text-xs flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {event.location}
                                    </div>
                                </div>
                                <div className="text-white/50 text-sm">{event.date}</div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'orgs' && (
                    <div className="grid md:grid-cols-2 gap-3">
                        {organizations.map((org) => (
                            <div
                                key={org.name}
                                className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors group cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="font-medium text-white">{org.name}</div>
                                    <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors" />
                                </div>
                                <div className="text-white/50 text-sm">{org.focus}</div>
                                <div className="text-white/30 text-xs mt-1">{org.url}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
