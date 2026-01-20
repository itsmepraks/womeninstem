/**
 * Resources Chapter Page 2 - Page 11
 * Online Courses & MOOCs
 */
import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Resources2() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Online Courses & MOOCs</h2>
      </div>

      <p className="body-text">
        Massive Open Online Courses (MOOCs) have revolutionized education, making world-class 
        STEM instruction accessible to anyone with an internet connection. Here are the top 
        platforms for women in STEM:
      </p>

      {/* Platform List */}
      <div className="space-y-4">
        <div className="border-l-4 border-burgundy-500 pl-5 py-3 bg-parchment-light rounded-r-book">
          <h3 className="font-serif text-lg font-semibold text-ink mb-1 flex items-center gap-2">
            Coursera
            <ExternalLink className="w-4 h-4 text-burgundy-600" />
          </h3>
          <p className="text-sm text-ink-light mb-2">
            Partners with top universities to offer courses in computer science, data science, 
            engineering, and more. Many courses offer financial aid for women.
          </p>
          <p className="text-xs text-ink-light/70 italic">
            Featured: Machine Learning by Stanford, Python for Everybody
          </p>
        </div>

        <div className="border-l-4 border-forest-500 pl-5 py-3 bg-parchment-light rounded-r-book">
          <h3 className="font-serif text-lg font-semibold text-ink mb-1 flex items-center gap-2">
            edX
            <ExternalLink className="w-4 h-4 text-forest-600" />
          </h3>
          <p className="text-sm text-ink-light mb-2">
            Founded by MIT and Harvard, edX offers MicroMasters programs and professional 
            certificates in cutting-edge STEM fields.
          </p>
          <p className="text-xs text-ink-light/70 italic">
            Featured: CS50's Introduction to Computer Science, Data Science
          </p>
        </div>

        <div className="border-l-4 border-gold-500 pl-5 py-3 bg-parchment-light rounded-r-book">
          <h3 className="font-serif text-lg font-semibold text-ink mb-1 flex items-center gap-2">
            Khan Academy
            <ExternalLink className="w-4 h-4 text-gold-600" />
          </h3>
          <p className="text-sm text-ink-light mb-2">
            Free, comprehensive courses in mathematics, science, and computing. Perfect for 
            building foundational knowledge at your own pace.
          </p>
          <p className="text-xs text-ink-light/70 italic">
            Featured: Calculus, Biology, Computer Programming
          </p>
        </div>

        <div className="border-l-4 border-sepia-500 pl-5 py-3 bg-parchment-light rounded-r-book">
          <h3 className="font-serif text-lg font-semibold text-ink mb-1 flex items-center gap-2">
            Udacity
            <ExternalLink className="w-4 h-4 text-sepia-600" />
          </h3>
          <p className="text-sm text-ink-light mb-2">
            Industry-focused nanodegree programs in AI, data science, programming, and cloud 
            computing. Includes mentorship and career services.
          </p>
          <p className="text-xs text-ink-light/70 italic">
            Featured: AI Programming with Python, Data Analyst
          </p>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="bg-gold-50 p-4 rounded-page border-2 border-gold-200 mt-6">
        <p className="text-sm font-serif text-ink">
          <strong>💡 Pro Tip:</strong> Many of these platforms offer financial aid or scholarships 
          specifically for women. Don't hesitate to apply—education should be accessible to all.
        </p>
      </div>

      {/* Page Number */}
      <div className="text-center mt-4">
        <p className="page-number-ornate">11</p>
      </div>
    </div>
  );
}
