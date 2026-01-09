'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SOCIAL_LINKS, SITE_NAME } from '@/lib/constants';

/**
 * Footer component with navigation, social links, and back to top functionality
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-deep-space/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-nebula blur-lg opacity-50 group-hover:opacity-75 transition-opacity rounded-full" />
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-nebula">
                  <span className="text-xl">✨</span>
                </div>
              </div>
              <span className="font-display text-lg font-bold">
                <span className="gradient-text bg-gradient-nebula">STEM</span>
                <span className="text-stardust-400">•</span>
                <span className="gradient-text bg-gradient-aurora">SPARK</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Igniting curiosity, one spark at a time. Empowering girls and women in STEM
              through interactive learning and community.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Contribute
                </a>
              </li>
              <li>
                <a
                  href={`${SOCIAL_LINKS.github}/blob/main/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Guidelines
                </a>
              </li>
              <li>
                <a
                  href={`${SOCIAL_LINKS.github}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Report Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2.5 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2.5 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2.5 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-2.5 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
                aria-label="Website"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </a>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Follow our journey as we build a platform for the next generation of women in
              STEM.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} {SITE_NAME}. Built with{' '}
            <span className="text-supernova-400">💜</span> by{' '}
            <a
              href={SOCIAL_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nebula-400 hover:text-nebula-300 transition-colors"
            >
              Prakriti Bista
            </a>
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="glass p-1.5 rounded-lg group-hover:bg-white/10 transition-all group-hover:-translate-y-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
