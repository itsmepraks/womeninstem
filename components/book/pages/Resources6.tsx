/**
 * Learning Resources - Page 6: Technology
 */
import React from 'react';

export default function Resources6() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Technology</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Stay current with emerging technologies and industry trends.
            Explore artificial intelligence, cloud computing, cybersecurity,
            and more.
          </p>

          <p>
            Technology evolves rapidly. Our curated resources help you stay
            ahead of the curve and develop skills that are in high demand.
          </p>

          <div className="book-quote">
            <p>
              "The best way to predict the future is to create it."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
