/**
 * Explore Chapter - Platform overview
 */
import React from 'react';
import { Compass, BookOpen, Users, Sparkles, ArrowRight } from 'lucide-react';
import { useBookStore } from '@/lib/store/bookStore';

export default function ExplorePage() {
    const { goToPage } = useBookStore();

    const features = [
        {
            icon: BookOpen,
            title: 'Learning Paths',
            description: 'Curated courses, tutorials, and resources for your STEM journey',
            chapter: 2,
        },
        {
            icon: Users,
            title: 'Mentorship',
            description: 'Connect with experienced professionals who can guide your path',
            chapter: 3,
        },
        {
            icon: Sparkles,
            title: 'Community',
            description: 'Network with like-minded women pursuing STEM careers',
            chapter: 4,
        },
        {
            icon: Compass,
            title: 'Resources',
            description: 'Companies hiring, events, organizations, and more',
            chapter: 5,
        },
    ];

    return (
        <div className="min-h-[50vh] flex flex-col">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Explore STEM•SPARK
                </h1>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                    Your all-in-one platform for resources, mentorship, community,
                    and opportunities in STEM.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 flex-1">
                {features.map((feature) => (
                    <button
                        key={feature.title}
                        onClick={() => goToPage(feature.chapter)}
                        className="glass-card text-left group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                <feature.icon className="w-6 h-6 text-white/70" strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-display text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    {feature.title}
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Tip */}
            <div className="mt-12 text-center">
                <p className="text-white/30 text-sm">
                    Click any section to jump to that chapter, or use the arrows to navigate
                </p>
            </div>
        </div>
    );
}
