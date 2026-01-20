/**
 * About STEM•SPARK Page 5 - Page 8
 * Our Approach
 */
import React from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutStem5() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Our Approach</h2>
      </div>

      {/* Introduction */}
      <p className="body-text">
        STEM•SPARK uses a unique, multi-faceted approach to empower women in STEM. 
        We've designed every aspect of our platform with one goal in mind: your success.
      </p>

      {/* Four Pillars */}
      <div className="space-y-4 mt-6">
        <div className="flex gap-4 p-5 bg-gradient-to-r from-burgundy-50 to-parchment-light rounded-page border-2 border-burgundy-200">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-burgundy-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-parchment" />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">Interactive Learning</h3>
            <p className="text-sm text-ink-light">
              Our book-style interface makes learning engaging and memorable. Flip through 
              pages, bookmark your favorites, and progress at your own pace through carefully 
              curated content designed specifically for women entering STEM fields.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 bg-gradient-to-r from-forest-50 to-parchment-light rounded-page border-2 border-forest-200">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-parchment" />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">Mentorship Network</h3>
            <p className="text-sm text-ink-light">
              Connect with experienced women in STEM who understand your journey. Our 
              mentorship program pairs you with professionals who can guide, inspire, 
              and support your growth.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 bg-gradient-to-r from-gold-50 to-parchment-light rounded-page border-2 border-gold-200">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-parchment" />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">Achievement System</h3>
            <p className="text-sm text-ink-light">
              Celebrate every milestone with our gamified achievement system. Earn badges, 
              track your progress, and visualize your growth journey as you master new skills.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 bg-gradient-to-r from-sepia-50 to-parchment-light rounded-page border-2 border-sepia-200">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-sepia-600 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-parchment" />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">Career Pathways</h3>
            <p className="text-sm text-ink-light">
              Explore diverse STEM career options, understand what each role entails, and 
              discover opportunities that align with your interests and strengths.
            </p>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div className="text-center mt-6">
        <p className="page-number-ornate">8</p>
      </div>
    </div>
  );
}
