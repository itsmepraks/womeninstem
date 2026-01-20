/**
 * Get Involved - Page 2: Mentorship
 */
import React from 'react';

export default function GetInvolved2() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Mentorship Program</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Whether you're seeking guidance or ready to give back, our
            mentorship program connects experienced professionals with those
            beginning their STEM journey.
          </p>

          <p>
            Mentorship is a two-way street. Mentees gain valuable insights
            and advice, while mentors develop leadership skills and stay
            connected with emerging trends.
          </p>

          <div className="book-quote">
            <p>
              "A mentor is someone who sees more talent and ability within you
              than you see in yourself."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
