/**
 * Contact - Page 2: Stay Connected
 */
import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

export default function Contact2() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="chapter-heading">Stay Connected</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            Follow us on social media to stay updated with the latest news,
            events, and resources from STEM•SPARK.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <Twitter className="w-12 h-12 text-burgundy-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold mb-2">Twitter</h3>
              <p className="text-sm text-ink-light">@stemspark</p>
            </div>
            <div className="text-center p-4">
              <Github className="w-12 h-12 text-sepia-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-ink-light">@stemspark</p>
            </div>
            <div className="text-center p-4">
              <Linkedin className="w-12 h-12 text-gold-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-ink-light">STEM•SPARK</p>
            </div>
          </div>

          <div className="book-quote">
            <p>
              Thank you for being part of our journey to empower women in STEM.
              Together, we're making a difference.
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-serif font-bold text-burgundy-700">
              ✨ The End ✨
            </p>
            <p className="text-sm text-ink-light mt-2">
              But your journey is just beginning...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
