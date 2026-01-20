/**
 * Resources Chapter Page 3 - Page 12
 * STEM Scholarships & Funding
 */
import React from 'react';
import { DollarSign, Award } from 'lucide-react';

export default function Resources3() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Scholarships & Funding</h2>
      </div>

      <p className="body-text">
        Financial support shouldn't be a barrier to STEM education. Numerous organizations 
        offer scholarships specifically designed to support women pursuing STEM degrees.
      </p>

      {/* Major Scholarships */}
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-burgundy-50 rounded-page border border-burgundy-200">
          <Award className="w-8 h-8 text-burgundy-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif font-semibold text-ink mb-1">
              Society of Women Engineers (SWE) Scholarships
            </h3>
            <p className="text-sm text-ink-light mb-2">
              Over 260 scholarships awarded annually to women studying engineering and 
              computer science. Awards range from $1,000 to $15,000.
            </p>
            <p className="text-xs text-burgundy-600 font-semibold">Deadline: Varies, typically February</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-forest-50 rounded-page border border-forest-200">
          <DollarSign className="w-8 h-8 text-forest-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif font-semibold text-ink mb-1">
              Google Women Techmakers Scholars Program
            </h3>
            <p className="text-sm text-ink-light mb-2">
              $10,000 scholarship for women in computer science and related fields. Includes 
              retreat and networking opportunities with Google engineers.
            </p>
            <p className="text-xs text-forest-600 font-semibold">Deadline: December</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-gold-50 rounded-page border border-gold-200">
          <Award className="w-8 h-8 text-gold-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif font-semibold text-ink mb-1">
              Microsoft Research PhD Fellowship
            </h3>
            <p className="text-sm text-ink-light mb-2">
              Covers two years of tuition and fees, plus annual conference travel allowance. 
              For outstanding PhD students in computing-related fields.
            </p>
            <p className="text-xs text-gold-600 font-semibold">Deadline: September</p>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-sepia-50 p-5 rounded-page border-2 border-sepia-200">
        <h3 className="font-serif text-lg font-semibold text-ink mb-3">More Funding Sources</h3>
        <ul className="space-y-2 text-sm text-ink-light">
          <li>• <strong>AAUW Career Development Grants</strong> - Women pursuing STEM careers</li>
          <li>• <strong>P.E.O. Scholar Awards</strong> - Graduate women in STEM</li>
          <li>• <strong>AWIS Fellowships</strong> - Association for Women in Science</li>
          <li>• <strong>NSF Graduate Research Fellowship</strong> - Research-focused students</li>
        </ul>
      </div>

      {/* Page Number */}
      <div className="text-center mt-4">
        <p className="page-number-ornate">12</p>
      </div>
    </div>
  );
}
