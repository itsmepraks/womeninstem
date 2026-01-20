/**
 * Resources Chapter Page 4 - Page 13
 * Research Opportunities
 */
import React from 'react';
import { Microscope, Beaker } from 'lucide-react';

export default function Resources4() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Research Opportunities</h2>
      </div>

      <p className="body-text">
        Hands-on research experience is invaluable for STEM careers. These programs connect 
        women with research labs, projects, and mentors at leading institutions.
      </p>

      {/* REU Programs */}
      <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200">
        <div className="flex items-center gap-3 mb-3">
          <Microscope className="w-8 h-8 text-burgundy-600" />
          <h3 className="font-serif text-xl font-semibold text-ink">
            NSF Research Experience for Undergraduates (REU)
          </h3>
        </div>
        <p className="text-sm text-ink-light mb-3">
          10-week summer research programs across the U.S. Students receive stipends, housing, 
          and the opportunity to work on cutting-edge research projects.
        </p>
        <div className="grid md:grid-cols-2 gap-3 text-xs">
          <div className="bg-parchment p-3 rounded-book">
            <strong className="text-ink">Fields:</strong>
            <p className="text-ink-light">Biology, Chemistry, Physics, Engineering, Computer Science, Mathematics</p>
          </div>
          <div className="bg-parchment p-3 rounded-book">
            <strong className="text-ink">Benefits:</strong>
            <p className="text-ink-light">$5,000+ stipend, housing, travel support, mentorship</p>
          </div>
        </div>
      </div>

      {/* Other Opportunities */}
      <div className="space-y-3 mt-6">
        <div className="border-l-4 border-forest-500 pl-4 py-2 bg-parchment-light rounded-r-book">
          <h4 className="font-serif font-semibold text-ink mb-1">Women in Science Summer Programs</h4>
          <p className="text-sm text-ink-light">
            Targeted research experiences at institutions like MIT, Stanford, and Caltech 
            specifically designed to support women in STEM research.
          </p>
        </div>

        <div className="border-l-4 border-gold-500 pl-4 py-2 bg-parchment-light rounded-r-book">
          <h4 className="font-serif font-semibold text-ink mb-1">NASA Internships</h4>
          <p className="text-sm text-ink-light">
            Work on real space missions and research projects. Multiple internship pathways 
            for undergraduates and graduate students.
          </p>
        </div>

        <div className="border-l-4 border-sepia-500 pl-4 py-2 bg-parchment-light rounded-r-book">
          <h4 className="font-serif font-semibold text-ink mb-1">DOE Science Undergraduate Laboratory Internships</h4>
          <p className="text-sm text-ink-light">
            Research at Department of Energy national laboratories on energy, environment, 
            and national security projects.
          </p>
        </div>
      </div>

      {/* Application Tips */}
      <div className="bg-gold-50 p-4 rounded-page border-2 border-gold-200 mt-4">
        <Beaker className="w-6 h-6 text-gold-600 mb-2" />
        <p className="text-sm font-serif text-ink">
          <strong>Application Tip:</strong> Start looking for summer research opportunities in 
          December/January. Many programs have deadlines in February and March.
        </p>
      </div>

      {/* Page Number */}
      <div className="text-center mt-4">
        <p className="page-number-ornate">13</p>
      </div>
    </div>
  );
}
