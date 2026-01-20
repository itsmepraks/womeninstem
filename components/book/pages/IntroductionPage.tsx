/**
 * Introduction Page - Page 2 of Home Chapter
 */
import React from 'react';
import { Sparkles, Target, Users, BookOpen } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div className="h-full space-y-6">
      {/* Chapter Header */}
      <div className="text-center border-b-2 border-sepia-300 pb-4 mb-6">
        <p className="text-sm font-serif uppercase tracking-wider text-sepia-600 mb-2">
          Chapter One: Welcome
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink">
          What is STEM•SPARK?
        </h1>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <p className="body-text">
          STEM•SPARK is more than just a platform—it's a movement. We believe that every 
          woman and girl has the potential to excel in Science, Technology, Engineering, 
          and Mathematics. Our interactive book-style platform makes learning engaging, 
          accessible, and inspiring.
        </p>

        {/* Mission Statement */}
        <div className="bg-sepia-50 p-6 rounded-page border-2 border-sepia-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-burgundy-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-parchment" />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink mb-2">
                Our Mission
              </h2>
              <p className="text-ink-light leading-relaxed">
                To ignite curiosity and empower the next generation of women in STEM through 
                interactive learning experiences, mentorship connections, and a supportive community.
              </p>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4 bg-parchment-light rounded-book border border-sepia-200">
            <BookOpen className="w-8 h-8 text-burgundy-600 mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-ink mb-2">Learn</h3>
            <p className="text-sm text-ink-light">
              Interactive lessons and hands-on projects
            </p>
          </div>

          <div className="text-center p-4 bg-parchment-light rounded-book border border-sepia-200">
            <Users className="w-8 h-8 text-burgundy-600 mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-ink mb-2">Connect</h3>
            <p className="text-sm text-ink-light">
              Find mentors and join a supportive community
            </p>
          </div>

          <div className="text-center p-4 bg-parchment-light rounded-book border border-sepia-200">
            <Target className="w-8 h-8 text-burgundy-600 mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-ink mb-2">Achieve</h3>
            <p className="text-sm text-ink-light">
              Track progress and earn achievements
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center mt-8 pt-6 border-t border-sepia-200">
          <p className="text-ink-light font-serif italic">
            Turn the page to learn how to navigate this interactive experience →
          </p>
        </div>
      </div>
    </div>
  );
}
