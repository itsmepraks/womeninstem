/**
 * Resources Chapter Page 1 - Page 10
 * Educational Platforms Overview
 */
import React from 'react';
import { GraduationCap, Monitor, Code, FlaskConical } from 'lucide-react';

export default function Resources1() {
  return (
    <div className="h-full space-y-6">
      {/* Chapter Divider */}
      <div className="chapter-divider-ornate" />

      {/* Chapter Header */}
      <div className="text-center mb-8">
        <p className="chapter-number">Chapter Three</p>
        <h1 className="chapter-heading">Learning Resources</h1>
        <p className="text-lg font-serif italic text-ink-light mt-2">
          Tools for Growth
        </p>
      </div>

      {/* Introduction */}
      <p className="body-text">
        The journey to STEM excellence is paved with quality resources. This chapter brings 
        together the best educational platforms, courses, and opportunities designed to 
        support women in their STEM pursuits.
      </p>

      {/* Platform Categories */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200">
          <Monitor className="w-8 h-8 text-burgundy-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">
            Online Learning Platforms
          </h3>
          <p className="text-sm text-ink-light">
            From massive open online courses to specialized bootcamps, discover platforms 
            offering flexible, high-quality STEM education.
          </p>
        </div>

        <div className="bg-forest-50 p-5 rounded-page border-2 border-forest-200">
          <FlaskConical className="w-8 h-8 text-forest-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">
            Research Opportunities
          </h3>
          <p className="text-sm text-ink-light">
            Connect with research labs, participate in citizen science, and contribute to 
            real-world scientific discovery.
          </p>
        </div>

        <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200">
          <GraduationCap className="w-8 h-8 text-gold-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">
            Scholarships & Funding
          </h3>
          <p className="text-sm text-ink-light">
            Financial support specifically for women in STEM, from undergraduate to 
            doctoral programs and beyond.
          </p>
        </div>

        <div className="bg-sepia-50 p-5 rounded-page border-2 border-sepia-200">
          <Code className="w-8 h-8 text-sepia-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">
            Professional Development
          </h3>
          <p className="text-sm text-ink-light">
            Conferences, workshops, and networking events designed to advance women's 
            careers in STEM fields.
          </p>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center mt-6">
        <p className="page-number-ornate">10</p>
      </div>
    </div>
  );
}
