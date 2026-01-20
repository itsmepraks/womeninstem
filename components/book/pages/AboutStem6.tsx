/**
 * About STEM•SPARK Page 6 - Page 9
 * Join Our Community
 */
import React from 'react';
import { Heart, Star, Zap } from 'lucide-react';

export default function AboutStem6() {
  return (
    <div className="h-full space-y-6">
      {/* Page Header */}
      <div className="border-b-2 border-sepia-300 pb-4">
        <h2 className="section-heading">Join Our Community</h2>
      </div>

      {/* Opening */}
      <p className="body-text">
        When you join STEM•SPARK, you're not just accessing educational content—you're 
        becoming part of a global community of passionate, ambitious women who are changing 
        the world through STEM.
      </p>

      {/* Community Benefits */}
      <div className="bg-burgundy-50 p-6 rounded-page border-2 border-burgundy-200">
        <h3 className="font-serif text-xl font-semibold text-ink mb-4 text-center">
          What You'll Gain
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Heart className="w-6 h-6 text-burgundy-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-serif font-semibold text-ink mb-1">Support & Encouragement</h4>
              <p className="text-sm text-ink-light">
                A safe space where you can ask questions, share challenges, and celebrate 
                victories with people who understand your journey.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Star className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-serif font-semibold text-ink mb-1">Networking Opportunities</h4>
              <p className="text-sm text-ink-light">
                Connect with peers, mentors, and industry professionals who can open doors 
                and provide valuable career insights.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-forest-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-serif font-semibold text-ink mb-1">Continuous Growth</h4>
              <p className="text-sm text-ink-light">
                Access to ever-expanding resources, workshops, events, and learning 
                opportunities that keep you at the forefront of STEM innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-br from-gold-100 to-gold-50 p-6 rounded-page border-2 border-gold-300 mt-6">
        <h3 className="font-serif text-2xl font-bold text-ink mb-3">
          Your Journey Starts Here
        </h3>
        <p className="text-ink-light mb-4">
          Every page you turn brings you closer to your goals. Every connection you make 
          strengthens our community. Every skill you master makes you a role model for others.
        </p>
        <p className="font-serif text-lg italic text-burgundy-700">
          Welcome to STEM•SPARK. Welcome to your future.
        </p>
      </div>

      {/* Chapter Ending */}
      <div className="text-center pt-6">
        <div className="ornamental-divider" />
        <p className="text-sm font-serif text-ink-light italic mt-3">
          End of Chapter Two
        </p>
      </div>

      {/* Page Number */}
      <div className="text-center mt-4">
        <p className="page-number-ornate">9</p>
      </div>
    </div>
  );
}
