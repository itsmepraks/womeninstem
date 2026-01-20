/**
 * Get Involved Chapter Page 4 - Page 27
 * Start a STEM Club
 */
import React from 'react';
import { Users, Target } from 'lucide-react';

export default function GetInvolved4() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Start a STEM Club</h2>
      </div>
      <p className="body-text">Starting a STEM club is one of the most impactful ways to get involved.</p>
      <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200 mb-6">
        <h3 className="font-serif text-lg font-semibold text-ink mb-3">Why Start a Club?</h3>
        <ul className="space-y-2 text-sm text-ink-light">
          <li>• Build a community of students</li>
          <li>• Develop leadership skills</li>
          <li>• Create lasting impact</li>
          <li>• Strengthen college applications</li>
        </ul>
      </div>
      <div className="space-y-3">
        <h3 className="font-serif text-xl font-semibold text-ink flex items-center gap-2"><Target className="w-6 h-6 text-forest-600" />Steps to Start</h3>
        <div className="border-l-4 border-gold-500 pl-5 py-2 bg-parchment-light rounded-r-book">
          <h4 className="font-serif font-semibold text-ink mb-1">1. Define Your Focus</h4>
          <p className="text-sm text-ink-light">Choose a specific focus: coding, robotics, women in STEM, etc.</p>
        </div>
        <div className="border-l-4 border-forest-500 pl-5 py-2 bg-parchment-light rounded-r-book">
          <h4 className="font-serif font-semibold text-ink mb-1">2. Find a Faculty Advisor</h4>
          <p className="text-sm text-ink-light">Look for a teacher passionate about STEM.</p>
        </div>
        <div className="border-l-4 border-burgundy-500 pl-5 py-2 bg-parchment-light rounded-r-book">
          <h4 className="font-serif font-semibold text-ink mb-1">3. Recruit Members</h4>
          <p className="text-sm text-ink-light">Start with friends, expand through promotion.</p>
        </div>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">27</p></div>
    </div>
  );
}
