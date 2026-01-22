/**
 * Mentorship Chapter - Connect with mentors
 */
import React from 'react';
import { Users, MessageCircle, Calendar, Award } from 'lucide-react';

export default function MentorshipPage() {
    const benefits = [
        {
            icon: MessageCircle,
            title: 'One-on-One Guidance',
            description: 'Get personalized advice from experienced professionals',
        },
        {
            icon: Calendar,
            title: 'Regular Check-ins',
            description: 'Scheduled sessions to track your progress and goals',
        },
        {
            icon: Award,
            title: 'Career Navigation',
            description: 'Help with job applications, interviews, and career decisions',
        },
        {
            icon: Users,
            title: 'Network Expansion',
            description: 'Connect with a broader community through your mentor',
        },
    ];

    const organizations = [
        { name: 'Women Who Code', focus: 'Tech & Engineering' },
        { name: 'Girls Who Code', focus: 'Computer Science' },
        { name: 'Society of Women Engineers', focus: 'Engineering' },
        { name: 'AnitaB.org', focus: 'Technology' },
        { name: 'Black Girls CODE', focus: 'Tech & Programming' },
        { name: 'Lesbians Who Tech', focus: 'LGBTQ+ in Tech' },
    ];

    return (
        <div className="min-h-[50vh]">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Mentorship
                </h1>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                    Connect with experienced professionals who can guide your STEM journey.
                </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-4 p-4 glass rounded-xl">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                            <benefit.icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-display font-semibold text-white mb-1">
                                {benefit.title}
                            </h3>
                            <p className="text-white/40 text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Organizations */}
            <div className="glass rounded-xl p-6">
                <h2 className="font-display text-xl font-semibold text-white mb-4">
                    Mentorship Organizations
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {organizations.map((org) => (
                        <div
                            key={org.name}
                            className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
                        >
                            <div className="font-medium text-white text-sm">{org.name}</div>
                            <div className="text-white/40 text-xs">{org.focus}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
