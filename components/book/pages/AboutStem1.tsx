/**
 * About STEM•SPARK - Page 1: Mission
 */
import React from 'react';
import { Target } from 'lucide-react';

export default function AboutStem1() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="chapter-number">Chapter 2</div>
        <h2 className="chapter-heading">About STEM•SPARK</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            STEM•SPARK was founded with a singular vision: to ignite curiosity and
            empower women to pursue their passions in Science, Technology,
            Engineering, and Mathematics.
          </p>

          <div className="text-center p-6 bg-burgundy-50 rounded-book border-2 border-burgundy-200">
            <Target className="w-16 h-16 text-burgundy-600 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-3 text-burgundy-900">Our Mission</h3>
            <p className="text-ink-light">
              To provide accessible, engaging STEM education and resources for
              women of all backgrounds, creating pathways to success in
              technology fields.
            </p>
          </div>

          <p>
            We believe that diversity in STEM isn't just important—it's essential
            for innovation and progress. Every woman who enters a STEM field brings
            unique perspectives and solutions to the world's challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
