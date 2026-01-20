/**
 * Resources Chapter Page 7 - Page 16
 * Mentorship Programs
 */
import React from 'react';
import { UserCheck, Heart, MessageSquare } from 'lucide-react';

export default function Resources7() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Mentorship Programs</h2>
      </div>

      <p className="body-text">
        Having a mentor can make all the difference in your STEM journey. These programs 
        connect aspiring women in STEM with experienced professionals who provide guidance, 
        support, and career advice.
      </p>

      {/* Featured Programs */}
      <div className="space-y-4 mt-6">
        <div className="bg-burgundy-50 p-5 rounded-page border-2 border-burgundy-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-burgundy-600 rounded-full flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-parchment" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-ink">
              Million Women Mentors
            </h3>
          </div>
          <p className="text-sm text-ink-light mb-2">
            Connects girls and women with STEM mentors through structured programs and events. 
            Over 4 million mentoring engagements facilitated nationwide.
          </p>
          <p className="text-xs text-burgundy-600 font-semibold">Free | All Ages | National Network</p>
        </div>

        <div className="bg-forest-50 p-5 rounded-page border-2 border-forest-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-parchment" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-ink">
              Girls Who Code Mentorship
            </h3>
          </div>
          <p className="text-sm text-ink-light mb-2">
            Pairs young women learning to code with professional women in tech. Includes 
            virtual meetups, career guidance, and project collaboration.
          </p>
          <p className="text-xs text-forest-600 font-semibold">Free | Ages 13-18 | Virtual & Local</p>
        </div>

        <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-parchment" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-ink">
              Society of Women Engineers Mentorship
            </h3>
          </div>
          <p className="text-sm text-ink-light mb-2">
            One-on-one mentorship matching for SWE members at all career stages. Access to 
            career counselors and leadership development resources.
          </p>
          <p className="text-xs text-gold-600 font-semibold">SWE Membership Required | All Career Stages</p>
        </div>
      </div>

      {/* Finding a Mentor */}
      <div className="bg-sepia-50 p-5 rounded-page border-2 border-sepia-200 mt-6">
        <h3 className="font-serif text-lg font-semibold text-ink mb-3">Tips for Finding a Mentor</h3>
        <ul className="space-y-2 text-sm text-ink-light">
          <li>✓ Look for someone 5-10 years ahead in your desired career path</li>
          <li>✓ Attend professional conferences and networking events</li>
          <li>✓ Join online communities and professional organizations</li>
          <li>✓ Be specific about what you hope to gain from mentorship</li>
          <li>✓ Respect their time and come prepared to meetings</li>
        </ul>
      </div>

      {/* Page Number */}
      <div className="text-center mt-4">
        <p className="page-number-ornate">16</p>
      </div>
    </div>
  );
}
