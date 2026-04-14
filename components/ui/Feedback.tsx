'use client';

import { useState } from 'react';

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-6">
        <p className="text-sm text-text-muted">Thanks for the feedback.</p>
      </div>
    );
  }

  return (
    <div className="text-center py-6 border-t border-accent-primary/5">
      <p className="text-sm text-text-muted mb-3">Was this page useful?</p>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setSubmitted(true)}
          className="text-sm px-4 py-2 rounded-pill bg-accent-secondary/10 text-accent-primary hover:bg-accent-secondary/20 transition-colors focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:outline-none"
        >
          Yes
        </button>
        <a
          href="https://github.com/itsmepraks/womeninstem/issues/new?title=Feedback&labels=feedback"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 rounded-pill bg-transparent text-text-muted hover:bg-accent-secondary/5 transition-colors focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:outline-none"
        >
          Could be better
        </a>
      </div>
    </div>
  );
}
