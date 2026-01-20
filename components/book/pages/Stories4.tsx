/**
 * Stories Chapter Page 4 - Page 21
 * Modern STEM Leaders
 */
import React from 'react';
import { Code, Cpu } from 'lucide-react';

export default function Stories4() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Modern STEM Leaders</h2>
      </div>
      <p className="body-text">Today's women in STEM are building technologies that shape our world and creating the innovations of tomorrow.</p>
      <div className="space-y-4">
        <div className="flex gap-4 p-5 bg-burgundy-50 rounded-page border-2 border-burgundy-200">
          <div className="w-12 h-12 bg-burgundy-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Code className="w-6 h-6 text-parchment" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-1">Reshma Saujani</h3>
            <p className="text-xs text-ink-light mb-2">Founder, Girls Who Code</p>
            <p className="text-sm text-ink-light">Founded Girls Who Code in 2012, teaching computer science to over 500,000 girls and closing the gender gap in technology.</p>
          </div>
        </div>
        <div className="flex gap-4 p-5 bg-forest-50 rounded-page border-2 border-forest-200">
          <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Cpu className="w-6 h-6 text-parchment" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-1">Dr. Fei-Fei Li</h3>
            <p className="text-xs text-ink-light mb-2">AI Researcher, Stanford Professor</p>
            <p className="text-sm text-ink-light">Pioneer in AI and computer vision. Created ImageNet, catalyzing the deep learning revolution. Co-founder of AI4ALL.</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">21</p></div>
    </div>
  );
}
