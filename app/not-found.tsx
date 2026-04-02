import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10 py-24 text-center">
      <h1 className="font-display text-[4rem] text-accent-primary font-light">404</h1>
      <p className="text-body-lg text-text-heading mt-2 mb-2">Page not found</p>
      <p className="text-body text-text-secondary mb-8">
        Whatever you were looking for isn&apos;t here. Maybe try search?
      </p>
      <div className="flex gap-3 justify-center">
        <Link href="/" className="btn-primary">
          Go home
        </Link>
        <Link href="/resources" className="btn-secondary">
          Browse resources
        </Link>
      </div>
    </div>
  );
}
