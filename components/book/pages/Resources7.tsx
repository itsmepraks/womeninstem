/**
 * Learning Resources - Page 7: Workshops & Events
 */
import React from 'react';

export default function Resources7() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Workshops & Events</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Join live workshops, webinars, and virtual events designed to
            enhance your skills and connect you with experts in the field.
          </p>

          <p>
            Our events range from beginner-friendly coding workshops to
            advanced technical seminars. Participate, learn, and network with
            like-minded women in STEM.
          </p>
        </div>
      </div>
    </div>
  );
}
