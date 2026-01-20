/**
 * How To Use Page - Page 3 of Home Chapter
 */
import React from 'react';
import { ChevronLeft, ChevronRight, BookMarked, Home, Keyboard } from 'lucide-react';

export default function HowToUsePage() {
  return (
    <div className="h-full space-y-6">
      {/* Chapter Header */}
      <div className="text-center border-b-2 border-sepia-300 pb-4 mb-6">
        <p className="text-sm font-serif uppercase tracking-wider text-sepia-600 mb-2">
          Chapter One: Welcome
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink">
          How to Use This Book
        </h1>
      </div>

      {/* Navigation Guide */}
      <div className="space-y-6">
        <p className="body-text">
          This interactive book is designed to be intuitive and enjoyable. Here's how to 
          navigate and make the most of your STEM•SPARK experience:
        </p>

        {/* Navigation Methods */}
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
            <div className="flex-shrink-0 w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-burgundy-700" />
              <ChevronRight className="w-5 h-5 text-burgundy-700" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-semibold text-ink mb-1">Page Navigation</h3>
              <p className="text-sm text-ink-light">
                Click the arrow buttons on either side of the page or use your keyboard 
                arrow keys (← →) to flip between pages.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
            <div className="flex-shrink-0 w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center">
              <BookMarked className="w-5 h-5 text-burgundy-700" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-semibold text-ink mb-1">Table of Contents</h3>
              <p className="text-sm text-ink-light">
                Click the bookmark icon in the top-right corner to open the table of contents 
                and jump directly to any chapter.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
            <div className="flex-shrink-0 w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center">
              <Keyboard className="w-5 h-5 text-burgundy-700" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-semibold text-ink mb-1">Keyboard Shortcuts</h3>
              <div className="text-sm text-ink-light space-y-1 mt-2">
                <div className="flex justify-between">
                  <span>Next page:</span>
                  <code className="bg-sepia-100 px-2 py-1 rounded text-sepia-700">→ or PageDown</code>
                </div>
                <div className="flex justify-between">
                  <span>Previous page:</span>
                  <code className="bg-sepia-100 px-2 py-1 rounded text-sepia-700">← or PageUp</code>
                </div>
                <div className="flex justify-between">
                  <span>First page:</span>
                  <code className="bg-sepia-100 px-2 py-1 rounded text-sepia-700">Home</code>
                </div>
                <div className="flex justify-between">
                  <span>Last page:</span>
                  <code className="bg-sepia-100 px-2 py-1 rounded text-sepia-700">End</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200 mt-6">
          <h3 className="font-serif font-semibold text-ink mb-2 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Track Your Progress
          </h3>
          <p className="text-sm text-ink-light">
            Watch the progress bar at the top of each page to see how far you've journeyed 
            through the book. Your reading position is automatically saved, so you can pick 
            up right where you left off.
          </p>
        </div>

        {/* Ready to Begin */}
        <div className="text-center mt-8 pt-6 border-t-2 border-burgundy-200">
          <p className="font-serif text-xl text-burgundy-700 mb-2">
            Ready to Begin?
          </p>
          <p className="text-ink-light font-serif italic">
            Turn the page to start your STEM•SPARK journey →
          </p>
        </div>
      </div>
    </div>
  );
}
