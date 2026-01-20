/**
 * About STEM•SPARK - Page 3: Values
 */
import React from 'react';
import { Heart, Users, Trophy } from 'lucide-react';

export default function AboutStem3() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Our Core Values</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <Heart className="w-12 h-12 text-burgundy-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-lg mb-2">Inclusion</h3>
              <p className="text-sm text-ink-light">
                Creating welcoming spaces for women of all backgrounds in STEM.
              </p>
            </div>
            <div className="text-center p-4">
              <Users className="w-12 h-12 text-sepia-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-lg mb-2">Community</h3>
              <p className="text-sm text-ink-light">
                Building supportive networks that foster growth and collaboration.
              </p>
            </div>
            <div className="text-center p-4">
              <Trophy className="w-12 h-12 text-gold-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-sm text-ink-light">
                Promoting high-quality education and professional development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
