/**
 * Learning Resources - Page 3: Mathematics
 */
import React from 'react';

export default function Resources3() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Mathematics</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Build a strong mathematical foundation essential for STEM success.
            Our resources cover algebra, calculus, statistics, and more.
          </p>

          <p>
            Mathematics is the language of science and technology. We make it
            accessible with clear explanations, practical examples, and
            interactive problem-solving.
          </p>

          <div className="book-quote">
            <p>
              "Mathematics is not about numbers, it's about patterns and logic."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
