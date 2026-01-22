/**
 * Learning Paths Chapter - Resources & Courses
 */
import React from 'react';
import { Code, Database, Brain, Microscope, Calculator, Cpu } from 'lucide-react';

export default function LearningPage() {
    const paths = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'HTML, CSS, JavaScript, React, and modern frameworks',
            resources: ['freeCodeCamp', 'The Odin Project', 'MDN Web Docs'],
        },
        {
            icon: Database,
            title: 'Data Science',
            description: 'Python, R, data analysis, and machine learning',
            resources: ['Kaggle', 'DataCamp', 'Coursera'],
        },
        {
            icon: Brain,
            title: 'AI & Machine Learning',
            description: 'Neural networks, deep learning, and AI applications',
            resources: ['Fast.ai', 'Google AI', 'DeepLearning.AI'],
        },
        {
            icon: Microscope,
            title: 'Life Sciences',
            description: 'Biology, chemistry, and biotech resources',
            resources: ['Khan Academy', 'Coursera', 'edX'],
        },
        {
            icon: Calculator,
            title: 'Mathematics',
            description: 'Calculus, statistics, and applied mathematics',
            resources: ['Khan Academy', 'Brilliant', 'MIT OpenCourseWare'],
        },
        {
            icon: Cpu,
            title: 'Engineering',
            description: 'Mechanical, electrical, and software engineering',
            resources: ['MIT OpenCourseWare', 'Udacity', 'Coursera'],
        },
    ];

    return (
        <div className="min-h-[50vh]">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Learning Paths
                </h1>
                <p className="text-white/50 text-lg max-w-2xl mx-auto">
                    Curated resources and courses to help you grow in your STEM journey.
                </p>
            </div>

            {/* Learning Paths Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paths.map((path) => (
                    <div
                        key={path.title}
                        className="glass-card group cursor-pointer"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                <path.icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-display font-semibold text-white">
                                {path.title}
                            </h3>
                        </div>
                        <p className="text-white/40 text-sm mb-4">
                            {path.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {path.resources.map((resource) => (
                                <span
                                    key={resource}
                                    className="px-2 py-1 text-xs bg-white/5 rounded-full text-white/50"
                                >
                                    {resource}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Note */}
            <div className="mt-8 p-4 glass rounded-xl text-center">
                <p className="text-white/40 text-sm">
                    All resources listed are free or have free tiers available.
                </p>
            </div>
        </div>
    );
}
