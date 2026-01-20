/**
 * Stories Chapter Page 2 - Page 19
 * Dr. Mae Jemison Profile
 */
import React from 'react';
import { Rocket } from 'lucide-react';

export default function Stories2() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Dr. Mae Jemison</h2>
        <p className="text-sm font-serif italic text-ink-light mt-1">First African American Woman in Space</p>
      </div>
      <div className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 p-6 rounded-page border-2 border-burgundy-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-burgundy-600 rounded-full flex items-center justify-center">
            <Rocket className="w-8 h-8 text-parchment" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink">Dr. Mae C. Jemison</h3>
            <p className="text-sm text-ink-light">Engineer, Physician, NASA Astronaut</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p className="body-text">In 1992, Dr. Mae Jemison made history by becoming the first African American woman to travel to space aboard the Space Shuttle Endeavour.</p>
        <p className="body-text">Before joining NASA, she earned her medical degree and served as a Peace Corps doctor. She proved that you can excel in multiple fields.</p>
      </div>
      <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200">
        <h3 className="font-serif font-semibold text-ink mb-3">🌟 Key Achievements</h3>
        <ul className="space-y-2 text-sm text-ink-light">
          <li>• First African American woman in space (1992)</li>
          <li>• Chemical Engineering degree from Stanford</li>
          <li>• Medical degree from Cornell University</li>
          <li>• Inducted into National Women's Hall of Fame</li>
        </ul>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">19</p></div>
    </div>
  );
}
