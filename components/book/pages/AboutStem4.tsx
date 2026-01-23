/**
 * About STEM•SPARK - Page 4: History
 */
import React from 'react';

export default function AboutStem4() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Our Story</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            STEM•SPARK began as a simple idea: to create a platform where women
            interested in STEM could find resources, support, and inspiration.
            What started as a small community has grown into a vibrant ecosystem.
          </p>

          <div className="book-quote">
            <p>
              "Every great achievement starts with someone believing it's possible."
            </p>
          </div>

          <p>
            From our humble beginnings, we've grown to serve thousands of women
            worldwide, offering everything from coding tutorials to mentorship
            programs and career guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
