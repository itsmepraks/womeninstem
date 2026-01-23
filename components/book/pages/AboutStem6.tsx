/**
 * About STEM•SPARK - Page 6: Impact
 */
import React from 'react';

export default function AboutStem6() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Our Impact</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Since our founding, STEM•SPARK has made a measurable difference in
            the lives of women pursuing STEM careers. Our community continues
            to grow and evolve.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="text-center p-6 bg-burgundy-50 rounded-book">
              <div className="text-4xl font-bold text-burgundy-600 mb-2">10K+</div>
              <p className="text-sm text-ink-light font-serif">Women Empowered</p>
            </div>
            <div className="text-center p-6 bg-gold-50 rounded-book">
              <div className="text-4xl font-bold text-gold-600 mb-2">500+</div>
              <p className="text-sm text-ink-light font-serif">Resources Available</p>
            </div>
          </div>

          <p>
            These numbers represent real people pursuing their dreams, finding
            their communities, and making their mark in STEM fields.
          </p>
        </div>
      </div>
    </div>
  );
}
