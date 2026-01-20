/**
 * Stories Chapter Page 5 - Page 22
 * Student Innovators
 */
import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function Stories5() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Student Innovators</h2>
      </div>
      <p className="body-text">Young women are already making significant contributions to STEM, proving that age is no barrier to innovation.</p>
      <div className="space-y-4">
        <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200">
          <div className="flex items-start gap-3 mb-2">
            <Lightbulb className="w-8 h-8 text-gold-600 flex-shrink-0" />
            <div>
              <h3 className="font-serif text-lg font-semibold text-ink mb-1">Gitanjali Rao</h3>
              <p className="text-xs text-ink-light mb-2">Young Scientist & Inventor</p>
              <p className="text-sm text-ink-light">At age 15, invented Tethys, a device using carbon nanotube technology to detect lead in water. TIME's First Kid of the Year.</p>
            </div>
          </div>
        </div>
        <div className="bg-forest-50 p-5 rounded-page border-2 border-forest-200">
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">Your Peers Are Innovating</h3>
          <ul className="space-y-2 text-sm text-ink-light">
            <li>• Creating apps that solve community problems</li>
            <li>• Conducting original scientific research</li>
            <li>• Winning science fairs and competitions</li>
            <li>• Starting STEM clubs and initiatives</li>
            <li>• Building projects that make a difference</li>
          </ul>
        </div>
      </div>
      <div className="bg-burgundy-50 p-4 rounded-page border-2 border-burgundy-200 mt-4">
        <p className="text-sm font-serif text-ink"><strong>🚀 You Can Too:</strong> These students started where you are now. With curiosity and persistence, you can make your own impact in STEM.</p>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">22</p></div>
    </div>
  );
}
