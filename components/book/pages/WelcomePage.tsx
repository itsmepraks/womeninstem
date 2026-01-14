/**
 * Welcome page after cover
 */
import React from 'react';
import { BookOpen, Sparkles, Heart } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="h-full w-full flex flex-col justify-center p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Chapter number */}
        <div className="chapter-number">Prologue</div>

        {/* Main heading */}
        <h2 className="chapter-heading">Welcome to Your Journey</h2>

        {/* Ornamental divider */}
        <div className="ornamental-divider" />

        {/* Body content */}
        <div className="body-text space-y-6">
          <p className="drop-cap">
            Welcome to STEM•SPARK, where curiosity meets opportunity and dreams
            take flight. This is more than a platform—it&apos;s a community, a
            resource, and a celebration of women making their mark in Science,
            Technology, Engineering, and Mathematics.
          </p>

          <p>
            Within these digital pages, you&apos;ll discover stories of resilience,
            find resources to fuel your growth, and connect with a vibrant
            community of like-minded individuals who believe in the power of
            STEM to change the world.
          </p>
        </div>

        {/* Featured icons */}
        <div className="flex items-center justify-center gap-8 py-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mb-3 mx-auto">
              <BookOpen className="w-8 h-8 text-burgundy-600" />
            </div>
            <p className="text-sm font-serif text-ink-light">Learn</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-3 mx-auto">
              <Sparkles className="w-8 h-8 text-gold-600" />
            </div>
            <p className="text-sm font-serif text-ink-light">Discover</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mb-3 mx-auto">
              <Heart className="w-8 h-8 text-forest-600" />
            </div>
            <p className="text-sm font-serif text-ink-light">Connect</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="book-quote">
          <p>
            Turn the page to begin exploring. Your journey in STEM starts here.
          </p>
        </div>
      </div>
    </div>
  );
}
