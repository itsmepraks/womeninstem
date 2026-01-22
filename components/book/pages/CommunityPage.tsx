/**
 * Community Chapter - Network & Collaborate
 */
import React from 'react';
import { MessageSquare, Globe, Calendar, Hash } from 'lucide-react';

export default function CommunityPage() {
    const communities = [
        {
            name: 'Women in Tech',
            members: '50K+',
            platform: 'Discord',
            icon: Hash,
        },
        {
            name: 'She Codes',
            members: '30K+',
            platform: 'Slack',
            icon: MessageSquare,
        },
        {
            name: 'Tech Ladies',
            members: '100K+',
            platform: 'Online',
            icon: Globe,
        },
        {
            name: 'Women Who Code',
            members: '200K+',
            platform: 'Global',
            icon: Globe,
        },
    ];

    const events = [
        { name: 'Grace Hopper Celebration', type: 'Conference', date: 'Annual - October' },
        { name: 'Women in Tech Summit', type: 'Summit', date: 'Various dates' },
        { name: 'SheHacks', type: 'Hackathon', date: 'Various dates' },
        { name: 'PyLadies Meetups', type: 'Meetup', date: 'Monthly' },
    ];

    return (
        <div className="min-h-[50vh]">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Community
                </h1>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                    Connect with like-minded women in STEM, share experiences, and grow together.
                </p>
            </div>

            {/* Communities */}
            <div className="mb-10">
                <h2 className="font-display text-xl font-semibold text-white mb-4">
                    Online Communities
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {communities.map((community) => (
                        <div
                            key={community.name}
                            className="glass-card flex items-center gap-4"
                        >
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                <community.icon className="w-6 h-6 text-white/70" strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-display font-semibold text-white">
                                    {community.name}
                                </h3>
                                <p className="text-white/40 text-sm">
                                    {community.members} members · {community.platform}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Events */}
            <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-white/70" />
                    <h2 className="font-display text-xl font-semibold text-white">
                        Major Events
                    </h2>
                </div>
                <div className="space-y-3">
                    {events.map((event) => (
                        <div
                            key={event.name}
                            className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5"
                        >
                            <div>
                                <div className="font-medium text-white text-sm">{event.name}</div>
                                <div className="text-white/40 text-xs">{event.type}</div>
                            </div>
                            <div className="text-white/30 text-xs">{event.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
