/**
 * Stories Chapter Page 3 - Page 20
 * Katherine Johnson Profile
 */
import React from 'react';
import { Calculator } from 'lucide-react';

export default function Stories3() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Katherine Johnson</h2>
        <p className="text-sm font-serif italic text-ink-light mt-1">NASA Mathematician & Space Pioneer</p>
      </div>
      <div className="bg-gradient-to-br from-forest-50 to-forest-100 p-6 rounded-page border-2 border-forest-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center">
            <Calculator className="w-8 h-8 text-parchment" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink">Katherine Johnson</h3>
            <p className="text-sm text-ink-light">1918-2020 | Mathematician</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p className="body-text">Katherine Johnson's mathematical genius was instrumental in NASA's early space missions. Her calculations were critical to the success of Apollo Moon landing.</p>
        <p className="body-text">Astronaut John Glenn requested she personally verify the electronic computer's calculations before his historic 1962 orbital mission, saying "If she says they're good, then I'm ready to go."</p>
      </div>
      <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200">
        <h3 className="font-serif font-semibold text-ink mb-3">💫 Major Contributions</h3>
        <ul className="space-y-2 text-sm text-ink-light">
          <li>• Calculated trajectory for Alan Shepard's 1961 flight</li>
          <li>• Verified calculations for John Glenn's orbital mission</li>
          <li>• Worked on Apollo Moon landing programs</li>
          <li>• Presidential Medal of Freedom recipient (2015)</li>
          <li>• Subject of "Hidden Figures" book and movie</li>
        </ul>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">20</p></div>
    </div>
  );
}
