/**
 * Resources Chapter Page 5 - Page 14
 * Professional Development
 */
import React from 'react';
import { Briefcase, Users2, TrendingUp } from 'lucide-react';

export default function Resources5() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Professional Development</h2>
      </div>

      <p className="body-text">
        Advancing in STEM requires continuous learning and networking. These conferences, 
        workshops, and professional organizations offer invaluable opportunities for growth.
      </p>

      {/* Conferences */}
      <div className="space-y-4">
        <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200">
          <div className="flex items-start gap-3">
            <Users2 className="w-8 h-8 text-burgundy-600 flex-shrink-0" />
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                Grace Hopper Celebration
              </h3>
              <p className="text-sm text-ink-light mb-2">
                The world's largest gathering of women technologists. Features keynotes from 
                industry leaders, technical sessions, career fair, and networking opportunities.
              </p>
              <p className="text-xs text-burgundy-600 font-semibold">Annual | September | Virtual & In-Person</p>
            </div>
          </div>
        </div>

        <div className="bg-forest-50 p-5 rounded-page border-2 border-forest-200">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-8 h-8 text-forest-600 flex-shrink-0" />
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                Women in Data Science (WiDS) Conference
              </h3>
              <p className="text-sm text-ink-light mb-2">
                Stanford-hosted conference with 600+ regional events worldwide. Technical talks, 
                workshops, and datathon competition.
              </p>
              <p className="text-xs text-forest-600 font-semibold">Annual | March | Global Locations</p>
            </div>
          </div>
        </div>

        <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200">
          <div className="flex items-start gap-3">
            <Briefcase className="w-8 h-8 text-gold-600 flex-shrink-0" />
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                Society of Women Engineers Annual Conference
              </h3>
              <p className="text-sm text-ink-light mb-2">
                Professional development sessions, career fair with 300+ companies, and 
                networking with 15,000+ women engineers.
              </p>
              <p className="text-xs text-gold-600 font-semibold">Annual | October | Various Cities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Organizations */}
      <div className="bg-sepia-50 p-5 rounded-page border-2 border-sepia-200 mt-6">
        <h3 className="font-serif text-lg font-semibold text-ink mb-3">Key Professional Organizations</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-ink-light">
          <div>
            <strong className="text-ink">• SWE</strong> - Society of Women Engineers
          </div>
          <div>
            <strong className="text-ink">• AWIS</strong> - Association for Women in Science
          </div>
          <div>
            <strong className="text-ink">• AWM</strong> - Association for Women in Mathematics
          </div>
          <div>
            <strong className="text-ink">• WiCS</strong> - Women in Computer Science
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center mt-4">
        <p className="page-number-ornate">14</p>
      </div>
    </div>
  );
}
