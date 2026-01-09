'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, SOCIAL_LINKS, SITE_NAME } from '@/lib/constants';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  // Footer link sections
  const footerSections = [
    {
      title: 'Platform',
      links: NAV_ITEMS.map((item) => ({
        label: item.label,
        href: item.href,
      })),
    },
    {
      title: 'About',
      links: [
        { label: 'Our Mission', href: '/about' },
        { label: 'Team', href: '/about#team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Events', href: '/events' },
        { label: 'Scholarships', href: '/scholarships' },
        { label: 'Help Center', href: '/help' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Code of Conduct', href: '/code-of-conduct' },
        { label: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section - Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 group mb-4"
            >
              <span className="font-display text-2xl font-bold">
                <span className="gradient-text bg-gradient-nebula">STEM</span>
                <span className="text-stardust-400">•</span>
                <span className="gradient-text bg-gradient-aurora">SPARK</span>
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              A learning platform connecting women in STEM through education, 
              mentorship, and community.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Website
              </a>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-display font-semibold text-white mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm">
                Get notified about new content, events, and opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-nebula-400 focus:border-transparent transition-all"
                aria-label="Email address"
              />
              <button className="px-6 py-3 bg-gradient-nebula rounded-lg font-semibold whitespace-nowrap hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} {SITE_NAME}. All rights reserved.
              </p>
              <p className="mt-1">
                Created by{' '}
                <a
                  href={SOCIAL_LINKS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nebula-400 hover:text-nebula-300 transition-colors"
                >
                  Prakriti Bista
                </a>
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-white transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-all duration-300 z-40 text-sm ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        Back to top
      </button>

      {/* Decorative gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nebula-400/50 to-transparent" />
    </footer>
  );
}
