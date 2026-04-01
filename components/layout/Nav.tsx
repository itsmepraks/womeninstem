'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/navigation';
import { SITE_NAME } from '@/lib/constants';

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 md:px-10 py-5">
      {/* Logo */}
      <Link href="/" className="font-display text-2xl text-text-heading font-medium">
        {SITE_NAME}
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-1.5">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`text-sm px-4 py-2.5 rounded-3xl transition-colors ${
                isActive
                  ? 'bg-accent-secondary/10 text-accent-primary font-medium'
                  : 'text-text-body hover:text-text-heading'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/connect"
          className="ml-2 text-sm px-5 py-2.5 rounded-3xl bg-surface-dark text-bg-primary font-medium hover:bg-text-heading transition-colors"
        >
          Explore more
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2 text-text-heading"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-b border-accent-primary/5 p-6 flex flex-col gap-2 md:hidden z-50">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-base text-text-body py-2 hover:text-text-heading transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/connect"
            className="btn-primary text-center mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Explore more
          </Link>
        </div>
      )}
    </nav>
  );
}
