/**
 * Resources Chapter Page 6 - Page 15
 * Books & Publications
 */
import React from 'react';
import { BookOpen, Library } from 'lucide-react';

export default function Resources6() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Books & Publications</h2>
      </div>

      <p className="body-text">
        Expand your knowledge and find inspiration in these carefully selected books written 
        by and for women in STEM.
      </p>

      {/* Inspiring Reads */}
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
          <Library className="w-10 h-10 text-burgundy-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-1">
              "Hidden Figures" by Margot Lee Shetterly
            </h3>
            <p className="text-sm text-ink-light mb-2">
              The untold story of African American women mathematicians at NASA who helped 
              win the Space Race.
            </p>
            <p className="text-xs text-ink-light/70 italic">Inspiration | Biography | History</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
          <BookOpen className="w-10 h-10 text-forest-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-1">
              "Lean In" by Sheryl Sandberg
            </h3>
            <p className="text-sm text-ink-light mb-2">
              Practical advice for women navigating careers in male-dominated fields and 
              overcoming workplace challenges.
            </p>
            <p className="text-xs text-ink-light/70 italic">Career Development | Leadership</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
          <Library className="w-10 h-10 text-gold-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-1">
              "The Glass Universe" by Dava Sobel
            </h3>
            <p className="text-sm text-ink-light mb-2">
              Chronicles the Harvard Observatory women who measured the stars and pioneered 
              astrophysics in the early 1900s.
            </p>
            <p className="text-xs text-ink-light/70 italic">History | Astronomy | Women in Science</p>
          </div>
        </div>
      </div>

      {/* Technical Books */}
      <div className="bg-sepia-50 p-5 rounded-page border-2 border-sepia-200 mt-6">
        <h3 className="font-serif text-lg font-semibold text-ink mb-3">Essential Technical Reads</h3>
        <ul className="space-y-2 text-sm text-ink-light">
          <li>• <strong className="text-ink">"Clean Code" by Robert C. Martin</strong> - Software engineering principles</li>
          <li>• <strong className="text-ink">"Introduction to Algorithms"</strong> - Fundamental computer science</li>
          <li>• <strong className="text-ink">"The Pragmatic Programmer"</strong> - Career-long reference for developers</li>
          <li>• <strong className="text-ink">"Data Science from Scratch"</strong> - Python & data science fundamentals</li>
        </ul>
      </div>

      {/* Journals */}
      <div className="mt-4 p-4 bg-burgundy-50 rounded-page border border-burgundy-200">
        <p className="text-sm font-serif text-ink">
          <strong>📚 Academic Journals:</strong> Nature, Science, IEEE publications, and discipline-specific 
          journals regularly feature research by women scientists.
        </p>
      </div>

      {/* Page Number */}
      <div className="text-center mt-4">
        <p className="page-number-ornate">15</p>
      </div>
    </div>
  );
}
