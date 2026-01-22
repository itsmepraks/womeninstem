'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import { useBookStore } from '@/lib/store/bookStore';

/**
 * Glassmorphic Header - controls book chapter navigation
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentPage, goToPage } = useBookStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (chapter: number) => {
    goToPage(chapter);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    goToPage(0); // Go to cover
  };

  const isActiveChapter = (chapter: number) => {
    return currentPage === chapter;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-strong'
          : 'bg-black/20 backdrop-blur-sm'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - goes to cover */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-lg group-hover:bg-white/20 transition-all duration-300" />
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
            </div>
            <div className="font-display text-lg font-bold tracking-tight">
              <span className="text-white">STEM</span>
              <span className="text-white/40 mx-0.5">•</span>
              <span className="text-white/80">SPARK</span>
            </div>
          </button>

          {/* Desktop Navigation - chapters */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.chapter)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  isActiveChapter(item.chapter)
                    ? 'bg-white/15 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA - go to cover */}
          <div className="hidden md:block">
            <button
              onClick={handleLogoClick}
              className="btn-primary text-sm"
            >
              Start Reading
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2.5 rounded-lg transition-all duration-300',
              'hover:bg-white/10',
              'focus:outline-none focus:ring-2 focus:ring-white/20'
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6 text-white" strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-16 transition-all duration-300',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative h-full overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.chapter)}
                className={cn(
                  'block w-full text-left px-5 py-4 rounded-xl text-base font-medium transition-all duration-300',
                  isActiveChapter(item.chapter)
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6">
              <button
                onClick={handleLogoClick}
                className="btn-primary w-full justify-center"
              >
                Start Reading
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
