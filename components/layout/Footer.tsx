'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, SOCIAL_LINKS, SITE_NAME } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: NAV_ITEMS.map((item) => ({
        label: item.label,
        href: item.href,
      })),
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API', href: '/api' },
        { label: 'Events', href: '/events' },
        { label: 'Help Center', href: '/help' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'GitHub', href: SOCIAL_LINKS.github },
        { label: 'Twitter', href: SOCIAL_LINKS.twitter },
        { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Code of Conduct', href: '/code-of-conduct' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gray-900">
                STEM<span className="text-gray-400">•</span>SPARK
              </span>
            </Link>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Supporting women in STEM through education, mentorship, and community.
            </p>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
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

        {/* Newsletter */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-12 shadow-soft">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-600 text-sm">
                Get notified about new resources and opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} {SITE_NAME}. Created by{' '}
              <a
                href={SOCIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Prakriti Bista
              </a>
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 px-4 py-2 bg-primary-600 text-white rounded-lg shadow-medium hover:bg-primary-700 transition-all z-40 text-sm font-medium"
          aria-label="Back to top"
        >
          Back to top
        </button>
      )}
    </footer>
  );
}
