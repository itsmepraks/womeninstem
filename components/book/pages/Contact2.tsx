/**
 * Contact Chapter Page 2 - Page 31
 * Final Message & Next Steps
 */
import React from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function Contact2() {
  return (
    <div className="h-full flex flex-col justify-between space-y-6">
      <div className="space-y-6">
        <div className="border-b-2 border-sepia-300 pb-4">
          <h2 className="section-heading">Your Journey Begins Now</h2>
        </div>
        <p className="body-text">You've reached the end of this book, but your STEM journey is just beginning. Every page you've read, every story that inspired you, every resource you've discovered—they're all tools for your success.</p>
        <div className="bg-gradient-to-br from-burgundy-50 to-burgundy-100 p-6 rounded-page border-2 border-burgundy-200">
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-burgundy-600 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-ink mb-3">Thank You</h3>
            <p className="text-ink-light leading-relaxed mb-4">Thank you for joining us on this journey through STEM•SPARK. We hope this book has inspired you, equipped you with resources, and shown you that you belong in STEM.</p>
            <p className="font-serif text-lg italic text-burgundy-700">The world needs your unique perspective, creativity, and brilliance.</p>
          </div>
        </div>
        <div className="bg-gold-50 p-5 rounded-page border-2 border-gold-200">
          <h3 className="font-serif text-lg font-semibold text-ink mb-3 flex items-center gap-2"><ArrowRight className="w-6 h-6 text-gold-600" />Next Steps</h3>
          <ul className="space-y-2 text-sm text-ink-light">
            <li>✓ Bookmark pages you want to revisit</li>
            <li>✓ Explore the resources we've shared</li>
            <li>✓ Connect with our community</li>
            <li>✓ Start your first STEM project</li>
            <li>✓ Share this book with others</li>
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-center bg-gradient-to-br from-parchment-light to-cream-100 p-6 rounded-page border-2 border-gold-300">
          <Heart className="w-10 h-10 text-burgundy-600 mx-auto mb-3" />
          <p className="font-serif text-xl italic text-ink">Go forth and spark curiosity.</p>
          <p className="text-sm text-ink-light mt-2">— The STEM•SPARK Team</p>
        </div>
        <div className="text-center pt-6">
          <div className="ornamental-divider" />
          <p className="text-sm font-serif text-ink-light italic mt-3">The End</p>
          <p className="text-xs text-ink-light/70 mt-2">Press Home to return to the beginning</p>
        </div>
        <div className="text-center mt-4"><p className="page-number-ornate">31</p></div>
      </div>
    </div>
  );
}
