/**
 * Book cover page component
 */
import React from 'react';
import { cn } from '@/lib/utils';

export default function CoverPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-burgundy-600 via-burgundy-700 to-burgundy-900 text-parchment">
      {/* Decorative border */}
      <div className="absolute inset-8 border-4 border-gold-400 rounded-book opacity-50" />
      <div className="absolute inset-12 border-2 border-gold-400/30 rounded-book" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Main Title */}
        <div className="space-y-2">
          <div className="text-gold-400 text-sm font-serif uppercase tracking-wider mb-4">
            A Journey of Discovery
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-bold tracking-tight text-shadow-vintage">
            STEM•SPARK
          </h1>
          <div className="chapter-ornament text-gold-400" />
        </div>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl font-serif italic text-parchment/90 max-w-md mx-auto leading-relaxed">
          Igniting Curiosity,
          <br />
          Empowering Women
          <br />
          in STEM
        </p>

        {/* Decorative element */}
        <div className="pt-8">
          <div className="w-24 h-1 bg-gold-400 mx-auto" />
        </div>

        {/* Author/Creator */}
        <p className="text-sm font-serif text-parchment/70 tracking-wide pt-4">
          Created by Prakriti Bista
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 text-gold-400/30 text-4xl">❦</div>
      <div className="absolute top-4 right-4 text-gold-400/30 text-4xl">❦</div>
      <div className="absolute bottom-4 left-4 text-gold-400/30 text-4xl">❦</div>
      <div className="absolute bottom-4 right-4 text-gold-400/30 text-4xl">❦</div>
    </div>
  );
}
