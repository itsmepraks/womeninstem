/**
 * Get Involved - Page 1: Introduction
 */
import React from 'react';
import { Users } from 'lucide-react';

export default function GetInvolved1() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="chapter-number">Chapter 5</div>
        <h2 className="chapter-heading">Get Involved</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Join our vibrant community and become part of the movement to
            empower women in STEM. There are many ways to get involved,
            contribute, and grow.
          </p>

          <div className="text-center p-6 bg-forest-50 rounded-book border-2 border-forest-200">
            <Users className="w-16 h-16 text-forest-600 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-3 text-forest-900">Join the Community</h3>
            <p className="text-ink-light">
              Connect with thousands of women in STEM who share your passion
              for learning and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
