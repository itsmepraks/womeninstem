/**
 * Contact Chapter Page 1 - Page 30
 * Contact Information
 */
import React from 'react';
import { Mail, MessageSquare, Send, Globe } from 'lucide-react';

export default function Contact1() {
  return (
    <div className="h-full space-y-6">
      <div className="chapter-divider-ornate" />
      <div className="text-center mb-8">
        <p className="chapter-number">Chapter Six</p>
        <h1 className="chapter-heading">Connect With Us</h1>
        <p className="text-lg font-serif italic text-ink-light mt-2">Let's Stay in Touch</p>
      </div>
      <p className="body-text">Have questions, feedback, or ideas? We'd love to hear from you. The STEM•SPARK team is here to support your journey.</p>
      <div className="space-y-4 mt-6">
        <div className="flex gap-4 p-5 bg-burgundy-50 rounded-page border-2 border-burgundy-200">
          <Mail className="w-10 h-10 text-burgundy-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">Email Us</h3>
            <p className="text-sm text-ink-light mb-2">For general inquiries, partnerships, or support:</p>
            <a href="mailto:hello@stemspark.dev" className="text-burgundy-600 font-semibold hover:text-burgundy-700 transition-colors">hello@stemspark.dev</a>
          </div>
        </div>
        <div className="flex gap-4 p-5 bg-forest-50 rounded-page border-2 border-forest-200">
          <MessageSquare className="w-10 h-10 text-forest-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">Join the Discussion</h3>
            <p className="text-sm text-ink-light">Connect with our community on social media and forums to share ideas and get support.</p>
          </div>
        </div>
        <div className="flex gap-4 p-5 bg-gold-50 rounded-page border-2 border-gold-200">
          <Send className="w-10 h-10 text-gold-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">Newsletter</h3>
            <p className="text-sm text-ink-light">Subscribe to our newsletter for updates on new content, events, and opportunities in STEM.</p>
          </div>
        </div>
        <div className="flex gap-4 p-5 bg-sepia-50 rounded-page border-2 border-sepia-200">
          <Globe className="w-10 h-10 text-sepia-600 flex-shrink-0" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">Follow Us Online</h3>
            <p className="text-sm text-ink-light mb-2">Stay connected through our social channels:</p>
            <div className="flex gap-3 text-sm">
              <a href="#" className="text-burgundy-600 hover:text-burgundy-700 transition-colors">Twitter</a>
              <span className="text-ink-light">•</span>
              <a href="#" className="text-burgundy-600 hover:text-burgundy-700 transition-colors">LinkedIn</a>
              <span className="text-ink-light">•</span>
              <a href="#" className="text-burgundy-600 hover:text-burgundy-700 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4"><p className="page-number-ornate">30</p></div>
    </div>
  );
}
