/**
 * About STEM•SPARK Page 2 - Page 5
 * Our Mission
 */
import React from 'react';
import { Target, Heart, Lightbulb } from 'lucide-react';

export default function AboutStem2() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Our Mission</h2>
      </div>

      {/* Mission Statement */}
      <div className="bg-burgundy-50 p-6 rounded-page border-2 border-burgundy-200">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-burgundy-600 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-parchment" />
            </div>
          </div>
          <div>
            <p className="text-lg font-serif leading-relaxed text-ink">
              To ignite curiosity and empower women in STEM through interactive learning, 
              mentorship connections, and a supportive community that celebrates achievements 
              and fosters growth.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-4 mt-6">
        <h3 className="font-serif text-2xl font-semibold text-ink mb-4">Our Core Values</h3>

        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
          <Lightbulb className="w-8 h-8 text-gold-600 flex-shrink-0" />
          <div>
            <h4 className="font-serif font-semibold text-ink mb-1">Innovation</h4>
            <p className="text-sm text-ink-light">
              We embrace new ideas and cutting-edge approaches to education, constantly 
              evolving to meet the needs of our learners.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
          <Heart className="w-8 h-8 text-burgundy-600 flex-shrink-0" />
          <div>
            <h4 className="font-serif font-semibold text-ink mb-1">Inclusivity</h4>
            <p className="text-sm text-ink-light">
              Every woman and girl, regardless of background, age, or prior experience, 
              deserves access to quality STEM education.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
          <Sparkles className="w-8 h-8 text-forest-600 flex-shrink-0" />
          <div>
            <h4 className="font-serif font-semibold text-ink mb-1">Excellence</h4>
            <p className="text-sm text-ink-light">
              We are committed to providing high-quality content, resources, and support 
              that enable our community to achieve their full potential.
            </p>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="text-center mt-6 pt-4 border-t border-sepia-200">
        <p className="page-number-ornate">5</p>
      </div>
    </div>
  );
}
