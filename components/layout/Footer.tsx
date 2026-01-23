'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Github, Twitter, Linkedin, Globe, Heart, Sparkles } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS, SITE_NAME } from '@/lib/constants';
import { useBookStore } from '@/lib/store/bookStore';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { goToPage } = useBookStore();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button onClick={() => goToPage(0)} className="inline-flex items-center gap-3 group mb-6">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div className="font-display text-xl font-bold tracking-tight">
                <span className="text-white">STEM</span>
                <span className="text-white/40 mx-0.5">•</span>
                <span className="text-white/80">SPARK</span>
              </div>
            </button>

            <p className="text-white/50 mb-6 max-w-md leading-relaxed">
              Your all-in-one platform for resources, mentorship, community, and opportunities in STEM.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: SOCIAL_LINKS.github },
                { Icon: Twitter, href: SOCIAL_LINKS.twitter },
                { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                { Icon: Globe, href: SOCIAL_LINKS.website },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Chapters</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goToPage(item.chapter)}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'GitHub', href: SOCIAL_LINKS.github },
                { label: 'Twitter', href: SOCIAL_LINKS.twitter },
                { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
                { label: 'Website', href: SOCIAL_LINKS.website },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-elegant mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm text-center md:text-left">
            <p>© {currentYear} {SITE_NAME}. All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center md:justify-start gap-1.5">
              <span>Built with</span>
              <Heart
                className="w-3 h-3 text-white/60 fill-white/60"
                strokeWidth={0}
              />
              <span>by</span>
              <a
                href={SOCIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Prakriti Bista
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 nav-button z-40 ${showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
