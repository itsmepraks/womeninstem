/**
 * Get Involved Chapter Page 2 - Page 25
 * STEM Competitions
 */
import React from 'react';
import { Trophy } from 'lucide-react';

export default function GetInvolved2() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">STEM Competitions</h2>
      </div>
      <p className="body-text">Competitions provide incredible opportunities to test your skills and showcase your talents.</p>
      <div className="space-y-4">
        <div className="flex gap-4 p-5 bg-burgundy-50 rounded-page border-2 border-burgundy-200">
          <Trophy className="w-10 h-10 text-burgundy-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">Science Fairs</h3>
            <p className="text-sm text-ink-light mb-2">Design and conduct original research, then present your findings.</p>
            <ul className="text-sm text-ink-light space-y-1">
              <li>• Regeneron ISEF - International Science Fair</li>
              <li>• Google Science Fair</li>
              <li>• Local and state science fairs</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 p-5 bg-forest-50 rounded-page border-2 border-forest-200">
          <Trophy className="w-10 h-10 text-forest-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">Coding Competitions</h3>
            <ul className="text-sm text-ink-light space-y-1">
              <li>• Girls Who Code Competitions</li>
              <li>• Technovation Challenge</li>
              <li>• Congressional App Challenge</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-sepia-50 p-5 rounded-page border-2 border-sepia-200">
        <h3 className="font-serif text-lg font-semibold text-ink mb-3">Tips for Success</h3>
        <ul className="space-y-2 text-sm text-ink-light">
          <li>✓ Start early with plenty of preparation time</li>
          <li>✓ Focus on learning, not just winning</li>
          <li>✓ Network with participants and mentors</li>
        </ul>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">25</p></div>
    </div>
  );
}
