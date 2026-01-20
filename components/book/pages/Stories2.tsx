/**
 * Success Stories - Page 2: Software Engineering
 */
import React from 'react';

export default function Stories2() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Software Engineering Success</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Meet women who have built successful careers in software engineering,
            from startup founders to tech leads at major companies.
          </p>

          <div className="book-quote">
            <p>
              "I never saw myself as a 'typical' engineer, and that's exactly
              what made me valuable to my team."
            </p>
          </div>

          <p>
            Their stories highlight the importance of perseverance, continuous
            learning, and finding supportive communities.
          </p>
        </div>
      </div>
    </div>
  );
}
