/**
 * About STEM•SPARK - Page 5: Team
 */
import React from 'react';

export default function AboutStem5() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Our Team</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            STEM•SPARK is powered by a diverse team of educators, engineers,
            designers, and advocates who share a passion for empowering women
            in STEM fields.
          </p>

          <p>
            Our team members come from various backgrounds and specializations,
            bringing unique perspectives and expertise to create a comprehensive
            learning experience.
          </p>

          <div className="book-quote">
            <p>
              Together, we're building a future where every woman has the
              opportunity to thrive in STEM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
