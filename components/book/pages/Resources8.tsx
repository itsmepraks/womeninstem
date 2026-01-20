/**
 * Resources Chapter Page 8 - Page 17
 * STEM Organizations
 */
import React from 'react';
import { Building2, Globe2 } from 'lucide-react';

export default function Resources8() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">STEM Organizations</h2>
      </div>

      <p className="body-text">
        Joining professional organizations connects you with a community of like-minded women, 
        provides access to exclusive resources, and opens doors to career opportunities.
      </p>

      {/* Organizations List */}
      <div className="space-y-3">
        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-burgundy-200">
          <Building2 className="w-8 h-8 text-burgundy-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif font-semibold text-ink mb-1">Society of Women Engineers (SWE)</h3>
            <p className="text-sm text-ink-light">The world's largest advocate for women in engineering and technology.</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-forest-200">
          <Globe2 className="w-8 h-8 text-forest-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif font-semibold text-ink mb-1">Association for Women in Science (AWIS)</h3>
            <p className="text-sm text-ink-light">Advocates for women in all STEM fields through networking and professional development.</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-gold-200">
          <Building2 className="w-8 h-8 text-gold-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif font-semibold text-ink mb-1">Women in Technology International (WITI)</h3>
            <p className="text-sm text-ink-light">Empowers women in technology through networking, mentoring, and skill building.</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-parchment-light rounded-book border border-sepia-200">
          <Globe2 className="w-8 h-8 text-sepia-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif font-semibold text-ink mb-1">Association for Women in Mathematics (AWM)</h3>
            <p className="text-sm text-ink-light">Supports and promotes women in mathematical sciences and research.</p>
          </div>
        </div>
      </div>

      {/* Membership Benefits */}
      <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200 mt-6">
        <h3 className="font-serif text-lg font-semibold text-ink mb-3">Why Join?</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-ink-light">
          <div>• Networking opportunities</div>
          <div>• Exclusive job boards</div>
          <div>• Conference discounts</div>
          <div>• Mentorship programs</div>
          <div>• Scholarships & awards</div>
          <div>• Professional development</div>
        </div>
      </div>

      {/* Chapter Ending */}
      <div className="text-center pt-6">
        <div className="ornamental-divider" />
        <p className="text-sm font-serif text-ink-light italic mt-3">
          End of Chapter Three
        </p>
      </div>

      {/* Page Number */}
      <div className="text-center mt-4">
        <p className="page-number-ornate">17</p>
      </div>
    </div>
  );
}
