/**
 * About STEM•SPARK - Page 2: Vision
 */
import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function AboutStem2() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Our Vision</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            We envision a world where women thrive in STEM fields, driving
            innovation and positive change. A world where gender is no longer
            a barrier to pursuing scientific passions.
          </p>

          <div className="text-center p-6 bg-gold-50 rounded-book border-2 border-gold-200">
            <Lightbulb className="w-16 h-16 text-gold-600 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-3 text-gold-900">Looking Ahead</h3>
            <p className="text-ink-light">
              By 2030, we aim to have supported 100,000 women in their STEM
              journeys, creating a ripple effect of inspiration and achievement.
            </p>
          </div>

          <p>
            Through mentorship, education, and community building, we're creating
            lasting change that will benefit generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}
