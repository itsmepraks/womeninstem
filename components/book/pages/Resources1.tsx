/**
 * Learning Resources - Page 1: Overview
 */
import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Resources1() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="chapter-number">Chapter 3</div>
        <h2 className="chapter-heading">Learning Resources</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Access a comprehensive collection of resources designed to support
            your STEM journey. From beginner tutorials to advanced concepts,
            we've curated content to help you succeed.
          </p>

          <div className="text-center p-6 bg-forest-50 rounded-book border-2 border-forest-200">
            <BookOpen className="w-16 h-16 text-forest-600 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-3 text-forest-900">Start Learning</h3>
            <p className="text-ink-light">
              Browse through tutorials, courses, workshops, and learning paths
              designed specifically for women in STEM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
