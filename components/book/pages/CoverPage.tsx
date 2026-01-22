/**
 * Book cover page - Elegant minimal design with animation
 */
'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useBookStore } from '@/lib/store/bookStore';

export default function CoverPage() {
  const { goToPage } = useBookStore();

  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center min-h-[450px]">
      {/* Logo Icon */}
      <div className="mb-8 animate-float">
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
      <div className="space-y-2 mb-10">
        <p className="text-2xl md:text-3xl font-serif italic text-white/60">
          Igniting Curiosity
        </p>
        <p className="text-2xl md:text-3xl font-serif italic text-white/60">
          Empowering Women in STEM
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => goToPage(1)}
        className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full transition-all duration-300 hover:scale-105"
      >
        <span className="text-white font-medium">Start Exploring</span>
        <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Author */}
      <p className="mt-12 text-sm text-white/30 tracking-wider uppercase">
        Created by Prakriti Bista
      </p>
    </div>
  );
}
