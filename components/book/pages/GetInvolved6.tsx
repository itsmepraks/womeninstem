/**
 * Get Involved Chapter Page 6 - Page 29
 * Join Our Community
 */
import React from 'react';
import { Users, MessageCircle, Calendar } from 'lucide-react';

export default function GetInvolved6() {
  return (
    <div className="h-full space-y-6">
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Join STEM•SPARK Community</h2>
      </div>
      <p className="body-text">Ready to take the next step? Join our growing community of women in STEM.</p>
      <div className="space-y-4">
        <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200">
          <Users className="w-8 h-8 text-burgundy-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">Community Forum</h3>
          <p className="text-sm text-ink-light">Connect with peers, ask questions, share experiences, and find support from women at all stages of their STEM journey.</p>
        </div>
        <div className="bg-forest-50 p-5 rounded-page border-2 border-forest-200">
          <MessageCircle className="w-8 h-8 text-forest-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">Monthly Meetups</h3>
          <p className="text-sm text-ink-light">Join virtual and local meetups to network, learn from guest speakers, and collaborate on projects.</p>
        </div>
        <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200">
          <Calendar className="w-8 h-8 text-gold-600 mb-3" />
          <h3 className="font-serif text-lg font-semibold text-ink mb-2">Events & Workshops</h3>
          <p className="text-sm text-ink-light">Participate in hands-on workshops, webinars, and special events designed to build skills and connections.</p>
        </div>
      </div>
      <div className="text-center bg-burgundy-50 p-6 rounded-page border-2 border-burgundy-200 mt-6">
        <h3 className="font-serif text-2xl font-bold text-ink mb-2">You Belong Here</h3>
        <p className="text-ink-light">Whether you're just starting out or leading the way, our community welcomes you with open arms.</p>
      </div>
      <div className="text-center pt-6">
        <div className="ornamental-divider" />
        <p className="text-sm font-serif text-ink-light italic mt-3">End of Chapter Five</p>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">29</p></div>
    </div>
  );
}
