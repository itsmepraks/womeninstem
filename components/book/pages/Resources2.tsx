/**
 * Learning Resources - Page 2: Programming
 */
import React from 'react';
import { Code } from 'lucide-react';

export default function Resources2() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Programming Resources</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Master programming languages and frameworks with our curated learning
            paths. From Python to JavaScript, we cover the essentials.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-parchment-light rounded-book border-2 border-sepia-200">
              <Code className="w-8 h-8 text-burgundy-600 mb-2" />
              <h3 className="font-serif font-semibold text-lg mb-2">Web Development</h3>
              <p className="text-sm text-ink-light">
                HTML, CSS, JavaScript, React, and modern web technologies.
              </p>
            </div>
            <div className="p-4 bg-parchment-light rounded-book border-2 border-sepia-200">
              <Code className="w-8 h-8 text-sepia-600 mb-2" />
              <h3 className="font-serif font-semibold text-lg mb-2">Data Science</h3>
              <p className="text-sm text-ink-light">
                Python, R, data analysis, machine learning fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
