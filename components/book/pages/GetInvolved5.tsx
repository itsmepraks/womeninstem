/**
 * Get Involved Chapter Page 5 - Page 28
 * Advocacy & Outreach
 */
import React from 'react';
import { Megaphone } from 'lucide-react';

export default function GetInvolved5() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Advocacy & Outreach</h2>
      </div>
      <p className="body-text">Use your voice to promote change and raise awareness about women in STEM.</p>
      <div className="space-y-4">
        <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200">
          <Megaphone className="w-8 h-8 text-burgundy-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">Speak Up</h3>
          <ul className="space-y-2 text-sm text-ink-light">
            <li>• Present at school assemblies</li>
            <li>• Write articles about women in STEM</li>
            <li>• Create social media content</li>
            <li>• Advocate for STEM funding</li>
          </ul>
        </div>
        <div className="bg-forest-50 p-5 rounded-page border-2 border-forest-200">
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">Share Your Story</h3>
          <p className="text-sm text-ink-light mb-2">Your journey can inspire others. Consider:</p>
          <ul className="space-y-1 text-sm text-ink-light">
            <li>• Writing blog posts</li>
            <li>• Creating video content</li>
            <li>• Speaking at local events</li>
            <li>• Mentoring younger students</li>
          </ul>
        </div>
      </div>
      <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200">
        <h3 className="font-serif text-lg font-semibold text-ink mb-3">Making a Difference</h3>
        <p className="text-sm text-ink-light">Every voice counts. When you share your experiences and advocate for inclusion, you help create pathways for others to follow.</p>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">28</p></div>
    </div>
  );
}
