'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import Button from '@/components/ui/Button';

/**
 * Sophisticated Header component with elegant navigation and premium styling
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-elegant',
        isScrolled 
          ? 'glass-strong shadow-elegant-lg backdrop-blur-2xl' 
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Sophisticated Logo Icon */}
            <div className="relative">
              {/* Animated glow ring */}
              <div className="absolute inset-0 rounded-full bg-nebula-500/20 blur-md group-hover:bg-nebula-500/30 transition-elegant" />
              
              {/* Logo circle with icon */}
              <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-nebula-600 shadow-glow-nebula group-hover:bg-nebula-500 group-hover:shadow-elegant-lg transition-elegant">
                <Sparkles 
                  className="w-5 h-5 md:w-6 md:h-6 text-white" 
                  strokeWidth={2.5}
                />
              </div>
            </div>

            {/* Logo Text */}
            <div className="font-display text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-nebula-400 group-hover:text-nebula-300 transition-colors-elegant">
                STEM
              </span>
              <span className="text-stardust-400 group-hover:text-stardust-300 transition-colors-elegant mx-0.5">
                •
              </span>
              <span className="text-aurora-400 group-hover:text-aurora-300 transition-colors-elegant">
                SPARK
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-elegant',
                  'relative overflow-hidden',
                  isActiveRoute(item.href)
                    ? 'bg-white/10 text-white shadow-inner-subtle'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                {/* Active indicator line */}
                {isActiveRoute(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-nebula-400 rounded-full" />
                )}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2.5 rounded-lg transition-elegant',
              'hover:bg-white/10',
              'focus:outline-none focus:ring-2 focus:ring-nebula-500 focus:ring-offset-2 focus:ring-offset-deep-space'
            )}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
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
          'md:hidden fixed inset-0 top-16 transition-elegant',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-deep-space/95 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full overflow-y-auto scrollbar-elegant">
          <div className="px-4 py-6 space-y-2">
            {/* Navigation Links */}
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block px-5 py-3 rounded-premium text-base font-medium transition-elegant',
                  'relative',
                  isActiveRoute(item.href)
                    ? 'bg-nebula-600 text-white shadow-glow-nebula'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                {/* Active indicator */}
                {isActiveRoute(item.href) && (
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/50 rounded-full" />
                )}
                <span className={cn(isActiveRoute(item.href) && 'pl-2')}>
                  {item.label}
                </span>
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-6">
              <Button variant="primary" size="md" className="w-full">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Footer */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <p className="text-center text-sm text-gray-500">
                Igniting curiosity in STEM
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Header Spacer - Use this to prevent content from hiding under fixed header
 */
export function HeaderSpacer() {
  return <div className="h-16 md:h-20" />;
}
