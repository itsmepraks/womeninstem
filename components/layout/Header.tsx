'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-nebula-400 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-nebula-400/30 animate-pulse" />
            </div>
            <span className="font-display text-xl md:text-2xl font-bold">
              <span className="gradient-text bg-gradient-nebula">STEM</span>
              <span className="text-stardust-400">•</span>
              <span className="gradient-text bg-gradient-aurora">SPARK</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                  isActive(item.href)
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-nebula-400 rounded-full" />
                )}
                <span className="absolute inset-0 rounded-full bg-gradient-nebula opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/explore"
              className="px-6 py-2.5 bg-gradient-nebula rounded-full font-semibold text-sm hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-deep-space/95 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
            {/* Navigation Links */}
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'glass text-white bg-white/10 shadow-glow-blue'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {isActive(item.href) && (
                    <span className="w-2 h-2 bg-nebula-400 rounded-full animate-pulse" />
                  )}
                </div>
              </Link>
            ))}

            {/* CTA Button - Mobile */}
            <div className="pt-4">
              <Link
                href="/explore"
                className="block text-center px-8 py-4 bg-gradient-nebula rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Footer */}
            <div className="pt-8 text-center text-sm text-gray-400">
              <p>Empowering women in STEM</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
