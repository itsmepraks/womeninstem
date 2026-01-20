/**
 * About STEM•SPARK Page 1 - Page 4
 * Our Story
 */
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AboutStem1() {
  return (
    <div className="h-full space-y-6">
      {/* Chapter Divider */}
      <div className="chapter-divider-ornate" />

      {/* Chapter Header */}
      <div className="text-center mb-8">
        <p className="chapter-number">Chapter Two</p>
        <h1 className="chapter-heading">About STEM•SPARK</h1>
        <p className="text-lg font-serif italic text-ink-light mt-2">
          Our Mission & Vision
        </p>
      </div>

      {/* Opening Quote */}
      <div className="book-quote">
        The future belongs to those who believe in the beauty of their dreams.
        <div className="text-right mt-2 text-sm font-serif text-ink-light not-italic">
          — Eleanor Roosevelt
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="drop-cap body-text">
          In 2026, a vision was born: to create a space where every woman and girl could 
          discover her potential in STEM fields. STEM•SPARK emerged from the recognition 
          that while women make up half the population, they remain significantly 
          underrepresented in science, technology, engineering, and mathematics careers.
        </p>

        <p className="body-text">
          We knew that traditional learning platforms weren't enough. We needed something 
          that would captivate, inspire, and engage—something that would make learning 
          feel less like work and more like an adventure.
        </p>

        <p className="body-text">
          That's why we created this interactive book experience. By combining the 
          timeless appeal of turning pages with modern technology, we've built a platform 
          that makes STEM education accessible, enjoyable, and empowering.
        </p>
      </div>

      {/* Decorative Element */}
      <div className="flex items-center justify-center gap-3 mt-8 text-burgundy-400">
        <Sparkles className="w-6 h-6" />
        <span className="font-serif text-sm uppercase tracking-wider">Est. 2026</span>
        <Sparkles className="w-6 h-6" />
      </div>
    </div>
  );
}
