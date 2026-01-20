/**
 * Introduction page - Overview of the platform
 */
import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="chapter-number">Introduction</div>
        <h2 className="chapter-heading">About This Journey</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            This interactive book is your guide through the exciting world of
            STEM education and empowerment. Each chapter is designed to inspire,
            educate, and connect you with resources and opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="text-center p-4">
              <Target className="w-12 h-12 text-burgundy-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-lg mb-2">Our Focus</h3>
              <p className="text-sm text-ink-light">
                Breaking barriers and creating pathways for women in STEM fields.
              </p>
            </div>
            <div className="text-center p-4">
              <Lightbulb className="w-12 h-12 text-gold-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-lg mb-2">Your Path</h3>
              <p className="text-sm text-ink-light">
                Discover resources, stories, and connections to fuel your journey.
              </p>
            </div>
          </div>

          <p>
            Navigate through each chapter at your own pace, bookmark important
            pages, and return anytime to continue your exploration.
          </p>
        </div>
      </div>
    </div>
  );
}
