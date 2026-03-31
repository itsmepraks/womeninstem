import Link from 'next/link';
import { SITE_NAME, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-accent-primary/5 mt-16">
      <div className="max-w-[880px] mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <span className="font-display text-xl text-text-heading font-medium">
              {SITE_NAME}
            </span>
            <p className="text-sm text-text-secondary mt-2 max-w-xs">
              Resources, mentors, and community for women building the future of STEM.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-label mb-3">Pages</p>
              <div className="flex flex-col gap-2">
                <Link href="/learning" className="text-sm text-text-body hover:text-text-heading transition-colors">Learning</Link>
                <Link href="/connect" className="text-sm text-text-body hover:text-text-heading transition-colors">Connect</Link>
                <Link href="/resources" className="text-sm text-text-body hover:text-text-heading transition-colors">Resources</Link>
                <Link href="/about" className="text-sm text-text-body hover:text-text-heading transition-colors">About</Link>
              </div>
            </div>
            <div>
              <p className="text-label mb-3">Social</p>
              <div className="flex flex-col gap-2">
                <a href={SOCIAL_LINKS.twitter} className="text-sm text-text-body hover:text-text-heading transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href={SOCIAL_LINKS.github} className="text-sm text-text-body hover:text-text-heading transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={SOCIAL_LINKS.linkedin} className="text-sm text-text-body hover:text-text-heading transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-text-muted mt-10">
          Built with care by{' '}
          <a href={SOCIAL_LINKS.website} className="underline underline-offset-2 hover:text-text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
            Prakriti Bista
          </a>
        </p>
      </div>
    </footer>
  );
}
