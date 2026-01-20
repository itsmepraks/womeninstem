/**
 * Get Involved Chapter Page 1 - Page 24
 * Introduction to Getting Involved
 */
import React from 'react';
import { HandHeart, Users, Sparkles } from 'lucide-react';

export default function GetInvolved1() {
  return (
    <div className="h-full space-y-6">
      <div className="chapter-divider-ornate" />
      <div className="text-center mb-8">
        <p className="chapter-number">Chapter Five</p>
        <h1 className="chapter-heading">Get Involved</h1>
        <p className="text-lg font-serif italic text-ink-light mt-2">Join the Movement</p>
      </div>
      <div className="book-quote">
        Alone we can do so little; together we can do so much.
        <div className="text-right mt-2 text-sm font-serif text-ink-light not-italic">— Helen Keller</div>
      </div>
      <div className="space-y-4">
        <p className="drop-cap body-text">The journey to a more inclusive STEM future isn't one we take alone. Every contribution helps build a stronger community.</p>
        <p className="body-text">This chapter explores the many ways you can get involved—from competitions to initiatives. Your voice matters.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200">
          <HandHeart className="w-8 h-8 text-burgundy-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">Make an Impact</h3>
          <p className="text-sm text-ink-light">From volunteering to advocacy, discover opportunities to make a real difference.</p>
        </div>
        <div className="bg-forest-50 p-5 rounded-page border-2 border-forest-200">
          <Users className="w-8 h-8 text-forest-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">Build Community</h3>
          <p className="text-sm text-ink-light">Connect with like-minded individuals and create lasting networks.</p>
        </div>
      </div>
      <div className="text-center mt-6"><p className="page-number-ornate">24</p></div>
    </div>
  );
}
