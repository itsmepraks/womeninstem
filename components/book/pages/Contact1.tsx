/**
 * Contact - Page 1: Get in Touch
 */
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function Contact1() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="chapter-number">Chapter 6</div>
        <h2 className="chapter-heading">Connect With Us</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            We'd love to hear from you! Whether you have questions, feedback,
            or just want to say hello, there are several ways to get in touch
            with the STEM•SPARK team.
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-burgundy-50 rounded-book border-2 border-burgundy-200">
              <Mail className="w-12 h-12 text-burgundy-600 mb-3" />
              <h3 className="font-serif font-bold text-lg mb-2">Email Us</h3>
              <p className="text-sm text-ink-light">
                Reach out to us at hello@stemspark.dev for general inquiries
                and support.
              </p>
            </div>

            <div className="p-6 bg-gold-50 rounded-book border-2 border-gold-200">
              <MessageCircle className="w-12 h-12 text-gold-600 mb-3" />
              <h3 className="font-serif font-bold text-lg mb-2">Community Forum</h3>
              <p className="text-sm text-ink-light">
                Join discussions and connect with other members in our
                community forum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
