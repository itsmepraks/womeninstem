/**
 * Stories Chapter Page 1 - Page 18
 * Introduction to Success Stories
 */
import React from 'react';
import { Star, Sparkles } from 'lucide-react';

export default function Stories1() {
  return (
    <div className="h-full space-y-6">
      <div className="chapter-divider-ornate" />
      <div className="text-center mb-8">
        <p className="chapter-number">Chapter Four</p>
        <h1 className="chapter-heading">Success Stories</h1>
        <p className="text-lg font-serif italic text-ink-light mt-2">Inspiration & Impact</p>
      </div>
      <div className="book-quote">
        We need to see more women in positions of power because we need diversity of thought to solve complex problems.
        <div className="text-right mt-2 text-sm font-serif text-ink-light not-italic">— Reshma Saujani</div>
      </div>
      <div className="space-y-4">
        <p className="drop-cap body-text">
          Throughout history, women have made groundbreaking contributions to STEM fields, often overcoming significant barriers. Their stories remind us that determination, curiosity, and passion can break through any ceiling.
        </p>
      </div>
      <div className="bg-burgundy-50 p-6 rounded-page border-2 border-burgundy-200 mt-6">
        <div className="flex items-start gap-4">
          <Star className="w-8 h-8 text-burgundy-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">Why These Stories Matter</h3>
            <p className="text-sm text-ink-light">Representation matters. When young women see others succeeding in STEM, they can envision themselves in those roles.</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6"><p className="page-number-ornate">18</p></div>
    </div>
  );
}
