/**
 * Success Stories - Page 4: Research & Academia
 */
import React from 'react';

export default function Stories4() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Research Excellence</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Discover the groundbreaking work of women researchers and academics
            who are pushing the boundaries of scientific knowledge.
          </p>

          <p>
            Their contributions to research institutions and universities are
            shaping the future of science and inspiring the next generation.
          </p>

          <div className="book-quote">
            <p>
              "Research is about asking the right questions and having the
              courage to seek answers."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
