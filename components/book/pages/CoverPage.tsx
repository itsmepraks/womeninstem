/**
 * Book cover page - Elegant minimal design
 */
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CoverPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center min-h-[450px]">
      {/* Logo Icon */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10">
          <Sparkles className="w-12 h-12 text-white/80" strokeWidth={1.5} />
        </div>
      </div>

      {/* Main Title */}
      <div className="space-y-4 mb-8">
        <div className="text-white/30 text-sm uppercase tracking-[0.3em] mb-6">
          A Journey of Discovery
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white">
          STEM•SPARK
        </h1>
        <div className="w-16 h-px bg-white/20 mx-auto my-6" />
      </div>

      {/* Subtitle */}
      <div className="space-y-2 mb-12">
        <p className="text-2xl md:text-3xl font-serif italic text-white/60">
          Igniting Curiosity
        </p>
        <p className="text-2xl md:text-3xl font-serif italic text-white/60">
          Empowering Women in STEM
        </p>
      </div>

      {/* Author */}
      <p className="text-sm text-white/30 tracking-wider uppercase">
        Created by Prakriti Bista
      </p>
    </div>
  );
}
