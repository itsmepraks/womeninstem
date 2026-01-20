/**
 * How to use this interactive book
 */
import React from 'react';
import { MousePointer, Keyboard, Bookmark } from 'lucide-react';

export default function HowToUsePage() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="chapter-number">Guide</div>
        <h2 className="chapter-heading">How to Navigate</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            This interactive book offers multiple ways to explore its content.
            Choose the method that works best for you.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <MousePointer className="w-8 h-8 text-burgundy-600 flex-shrink-0" />
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">Click Navigation</h3>
                <p className="text-sm text-ink-light">
                  Use the arrow buttons on either side of the page to turn pages.
                  Click the page numbers to jump to specific sections.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Keyboard className="w-8 h-8 text-sepia-600 flex-shrink-0" />
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">Keyboard Shortcuts</h3>
                <p className="text-sm text-ink-light">
                  Use arrow keys (← →) for page navigation, Home for the first page,
                  and End for the last page.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Bookmark className="w-8 h-8 text-gold-600 flex-shrink-0" />
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">Bookmarks</h3>
                <p className="text-sm text-ink-light">
                  Save your favorite pages by clicking the bookmark icon. Return to
                  them anytime from the bookmark panel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
