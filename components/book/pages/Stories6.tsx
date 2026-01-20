/**
 * Stories Chapter Page 6 - Page 23
 * Your Story Matters
 */
import React from 'react';
import { Pen, Heart } from 'lucide-react';

export default function Stories6() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Your Story Matters</h2>
      </div>
      <div className="space-y-4">
        <p className="body-text">Every woman in STEM has a unique story. Your journey—with its challenges, triumphs, discoveries, and growth—matters just as much as the stories you've read here.</p>
        <div className="bg-burgundy-50 p-6 rounded-page border-2 border-burgundy-200">
          <div className="flex items-center gap-3 mb-4">
            <Pen className="w-8 h-8 text-burgundy-600" />
            <h3 className="font-serif text-xl font-semibold text-ink">Write Your Chapter</h3>
          </div>
          <p className="text-sm text-ink-light mb-4">You are the author of your own STEM story. Every challenge you overcome, every concept you master, every project you complete adds a new page to your narrative.</p>
          <ul className="space-y-2 text-sm text-ink-light">
            <li>✓ Your first "Hello World" program</li>
            <li>✓ The experiment that sparked your curiosity</li>
            <li>✓ The problem you solved creatively</li>
            <li>✓ The mentor who believed in you</li>
            <li>✓ The moment you realized you belong in STEM</li>
          </ul>
        </div>
        <p className="body-text">The women whose stories fill these pages were once where you are now—at the beginning of their journey, filled with questions and dreams. They persevered, and so can you.</p>
      </div>
      <div className="text-center bg-gold-50 p-6 rounded-page border-2 border-gold-200 mt-6">
        <Heart className="w-10 h-10 text-gold-600 mx-auto mb-3" />
        <p className="font-serif text-xl text-ink mb-2">You are the next success story.</p>
        <p className="text-sm text-ink-light italic">And we can't wait to see what you'll achieve.</p>
      </div>
      <div className="text-center pt-6">
        <div className="ornamental-divider" />
        <p className="text-sm font-serif text-ink-light italic mt-3">End of Chapter Four</p>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">23</p></div>
    </div>
  );
}
