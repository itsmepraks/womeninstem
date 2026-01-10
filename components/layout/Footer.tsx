'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, Github, Twitter, Linkedin, Globe, Heart, Sparkles } from 'lucide-react';
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
            {/* Sophisticated Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-3 group mb-4 transition-transform-elegant hover:scale-105"
            >
              {/* Logo Icon */}
              <div className="relative">
                <Sparkles 
                  className="w-8 h-8 text-nebula-400 group-hover:text-nebula-300 transition-colors-elegant" 
                  strokeWidth={2.5}
                />
                <div className="absolute inset-0 blur-lg bg-nebula-400/20 group-hover:bg-nebula-400/30 transition-elegant" />
              </div>
              
              {/* Logo Text */}
              <div className="font-display text-2xl font-bold tracking-tight">
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

            <p className="text-gray-400 mb-6 leading-relaxed">
              Igniting curiosity and empowering the next generation of women in STEM through
              interactive learning, mentorship, and community.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-lg hover:bg-white/10 transition-elegant hover:shadow-elegant group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cosmic-blue-400 transition-colors-elegant" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-lg hover:bg-white/10 transition-elegant hover:shadow-elegant group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-cosmic-blue-400 transition-colors-elegant" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-lg hover:bg-white/10 transition-elegant hover:shadow-elegant group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cosmic-blue-400 transition-colors-elegant" />
              </a>
              <a
                href={SOCIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-lg hover:bg-white/10 transition-elegant hover:shadow-elegant group"
                aria-label="Website"
              >
                <Globe className="w-5 h-5 text-gray-400 group-hover:text-cosmic-blue-400 transition-colors-elegant" />
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
                          className="text-gray-400 hover:text-white transition-colors-elegant text-sm hover:translate-x-0.5 inline-block"
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
        <div className="glass-strong rounded-premium p-6 md:p-8 mb-12 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-white">
                Stay Connected
              </h3>
              <p className="text-gray-400 text-sm">
                Get updates on new content, events, and opportunities in STEM.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-nebula-400 focus:border-transparent transition-elegant hover:border-white/20"
                aria-label="Email address"
              />
              <button className="px-6 py-3 bg-nebula-600 text-white rounded-lg font-semibold whitespace-nowrap hover:bg-nebula-500 hover:shadow-glow-nebula transition-elegant transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-nebula-500 focus:ring-offset-2 focus:ring-offset-deep-space">
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
              <p className="mt-1 flex items-center justify-center md:justify-start gap-1.5">
                <span>Built with</span>
                <Heart 
                  className="inline-block w-4 h-4 text-supernova-400 fill-supernova-400 animate-pulse-subtle" 
                  strokeWidth={0}
                />
                <span>by</span>
                <a
                  href={SOCIAL_LINKS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nebula-400 hover:text-nebula-300 transition-colors-elegant font-medium"
                >
                  Prakriti Bista
                </a>
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors-elegant"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors-elegant"
              >
                Terms
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-white transition-colors-elegant"
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
        className={`fixed bottom-8 right-8 p-3 glass-strong rounded-full hover:bg-white/15 transition-elegant z-40 shadow-elegant hover:shadow-elegant-lg group ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:text-nebula-300 transition-colors-elegant" />
        <span className="absolute inset-0 rounded-full bg-nebula-500/0 group-hover:bg-nebula-500/20 transition-elegant" />
      </button>

      {/* Decorative gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nebula-400/30 to-transparent" />
    </footer>
  );
}
