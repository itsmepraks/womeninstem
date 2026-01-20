/**
 * Get Involved Chapter Page 3 - Page 26
 * Volunteer Opportunities
 */
import React from 'react';
import { Heart } from 'lucide-react';

export default function GetInvolved3() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Volunteer Opportunities</h2>
      </div>
      <p className="body-text">Volunteering in STEM allows you to give back while developing leadership skills.</p>
      <div className="space-y-4">
        <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-8 h-8 text-burgundy-600" />
            <h3 className="font-serif text-xl font-semibold text-ink">Teaching & Tutoring</h3>
          </div>
          <p className="text-sm text-ink-light mb-3">Share your STEM knowledge with younger students.</p>
          <ul className="space-y-1 text-sm text-ink-light">
            <li>• Tutor at local schools</li>
            <li>• Lead coding workshops for kids</li>
            <li>• Volunteer at STEM camps</li>
            <li>• Host virtual tutoring sessions</li>
          </ul>
        </div>
        <div className="bg-forest-50 p-5 rounded-page border-2 border-forest-200">
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">Community Outreach</h3>
          <ul className="space-y-1 text-sm text-ink-light">
            <li>• Organize STEM demonstrations</li>
            <li>• Participate in museum programs</li>
            <li>• Help with Girls in STEM events</li>
            <li>• Support maker spaces</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">26</p></div>
    </div>
  );
}
