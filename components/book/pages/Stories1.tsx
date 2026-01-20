/**
 * Success Stories - Page 1: Introduction
 */
import React from 'react';
import { Star } from 'lucide-react';

export default function Stories1() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="chapter-number">Chapter 4</div>
        <h2 className="chapter-heading">Success Stories</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Be inspired by the journeys of women who have made their mark in
            STEM fields. Their stories show that with determination and support,
            anything is possible.
          </p>

          <div className="text-center p-6 bg-burgundy-50 rounded-book border-2 border-burgundy-200">
            <Star className="w-16 h-16 text-gold-600 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-3 text-burgundy-900">Real Stories, Real Impact</h3>
            <p className="text-ink-light">
              Discover how women from diverse backgrounds have overcome challenges
              and achieved remarkable success in STEM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
