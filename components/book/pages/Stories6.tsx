/**
 * Success Stories - Page 6: Career Transitions
 */
import React from 'react';

export default function Stories6() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Career Transitions</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            It's never too late to start a career in STEM. Meet women who
            successfully transitioned into STEM fields from other careers.
          </p>

          <p>
            Their stories demonstrate that with dedication and the right
            resources, you can pivot into a rewarding STEM career at any
            stage of life.
          </p>

          <div className="book-quote">
            <p>
              "Changing careers was scary, but staying where I wasn't fulfilled
              was scarier."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
