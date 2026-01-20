/**
 * About STEM•SPARK Page 4 - Page 7
 * Why STEM Matters
 */
import React from 'react';

export default function AboutStem4() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Why STEM Matters</h2>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="body-text">
          STEM fields are shaping the future of our world. From developing sustainable 
          energy solutions to creating life-saving medical technologies, from building 
          artificial intelligence to exploring space—STEM is at the heart of human progress.
        </p>

        {/* Statistics */}
        <div className="bg-sepia-50 p-6 rounded-page border-2 border-sepia-200 my-6">
          <h3 className="font-serif text-xl font-semibold text-ink mb-4 text-center">
            The Current Reality
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-parchment rounded-book border border-sepia-200">
              <div className="text-3xl font-bold text-burgundy-600 mb-1">28%</div>
              <p className="text-sm text-ink-light">of STEM workforce are women</p>
            </div>
            <div className="text-center p-4 bg-parchment rounded-book border border-sepia-200">
              <div className="text-3xl font-bold text-burgundy-600 mb-1">50%</div>
              <p className="text-sm text-ink-light">of the population</p>
            </div>
          </div>
          <p className="text-sm text-center text-ink-light mt-3 italic">
            There's a clear gap we're working to close.
          </p>
        </div>

        <p className="body-text">
          Women bring unique perspectives, creative problem-solving approaches, and diverse 
          thinking to STEM fields. When women are underrepresented, we all lose out on 
          innovations and solutions that could change the world.
        </p>

        {/* Impact Areas */}
        <div className="space-y-3 mt-6">
          <h3 className="font-serif text-xl font-semibold text-ink mb-3">Impact of Women in STEM</h3>
          
          <div className="border-l-4 border-gold-500 pl-4 py-2">
            <h4 className="font-serif font-semibold text-ink">Economic Empowerment</h4>
            <p className="text-sm text-ink-light">
              STEM careers offer higher salaries and greater job security, providing 
              financial independence and stability.
            </p>
          </div>

          <div className="border-l-4 border-burgundy-500 pl-4 py-2">
            <h4 className="font-serif font-semibold text-ink">Innovation & Progress</h4>
            <p className="text-sm text-ink-light">
              Diverse teams produce more innovative solutions and better products for everyone.
            </p>
          </div>

          <div className="border-l-4 border-forest-500 pl-4 py-2">
            <h4 className="font-serif font-semibold text-ink">Role Models</h4>
            <p className="text-sm text-ink-light">
              Each woman in STEM inspires the next generation to follow in her footsteps.
            </p>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center mt-6">
        <p className="page-number-ornate">7</p>
      </div>
    </div>
  );
}
