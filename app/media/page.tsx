import SectionHeading from '@/components/ui/SectionHeading';
import LiveFeed from '@/components/ui/LiveFeed';
import { books, podcasts, documentaries, youtubeChannels } from '@/data/media';

const bookCategoryLabels: Record<string, string> = {
  challenges: 'Understanding the Challenges',
  solutions: 'Solutions & Action',
  biography: 'Biographies & Memoirs',
  'young-readers': 'Young Readers',
};

const podcastCategoryLabels: Record<string, string> = {
  general: 'General Women in STEM',
  technology: 'Technology',
  science: 'Science',
  career: 'Career Development',
};

export default function MediaPage() {
  const bookCategories = ['challenges', 'solutions', 'biography', 'young-readers'] as const;
  const podcastCategories = ['general', 'technology', 'science', 'career'] as const;

  return (
    <div className="max-w-[880px] mx-auto px-6 md:px-10">
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-10">
        <h1 className="font-display text-[2.75rem] text-text-heading font-light leading-tight">
          Books, podcasts, <em className="italic text-accent-primary">and more</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[520px]">
          Some of these are fetched automatically. Others are hand-picked recommendations that we update over time.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {[
            { label: 'Live podcasts', href: '#live-podcasts' },
            { label: 'Live books', href: '#live-books' },
            { label: 'Curated books', href: '#curated-books' },
            { label: 'Curated podcasts', href: '#curated-podcasts' },
            { label: 'Documentaries', href: '#documentaries' },
            { label: 'YouTube', href: '#youtube' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs px-3.5 py-1.5 rounded-pill bg-accent-secondary/10 text-accent-primary hover:bg-accent-secondary/20 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Live podcasts from iTunes API */}
      <section id="live-podcasts" className="pb-10">
        <LiveFeed
          endpoint="/api/resources/podcasts"
          title="Podcasts"
          limit={12}
          emptyMessage="Podcast feed is loading. Check back in a moment."
        />
      </section>

      {/* Live books from Google Books API */}
      <section id="live-books" className="pb-10">
        <LiveFeed
          endpoint="/api/resources/books"
          title="Books"
          limit={12}
          emptyMessage="Book feed is loading. Check back in a moment."
        />
      </section>

      {/* Curated books (static fallback — these are hand-picked) */}
      <section id="curated-books" className="pb-10">
        <SectionHeading title="Curated book list" />
        <p className="text-sm text-text-muted mb-4">
          Hand-picked recommendations. These don&apos;t auto-update — they&apos;re books we think are worth reading.
        </p>
        {bookCategories.map((cat) => {
          const filtered = books.filter((b) => b.category === cat);
          if (filtered.length === 0) return null;
          return (
            <div key={cat} className="mb-6">
              <h3 className="text-label text-accent-primary mb-3">
                {bookCategoryLabels[cat]}
              </h3>
              <div className="space-y-2">
                {filtered.map((book) => (
                  <div key={book.title} className="card-white p-4 flex items-baseline gap-2">
                    <span className="text-body text-text-heading font-medium">{book.title}</span>
                    <span className="text-sm text-text-muted">by {book.author}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Curated podcasts (static fallback) */}
      <section id="curated-podcasts" className="pb-10">
        <SectionHeading title="Curated podcast list" />
        <p className="text-sm text-text-muted mb-4">
          Hand-picked shows. The live feed above pulls from iTunes automatically — this list is our personal picks.
        </p>
        {podcastCategories.map((cat) => {
          const filtered = podcasts.filter((p) => p.category === cat);
          if (filtered.length === 0) return null;
          return (
            <div key={cat} className="mb-6">
              <h3 className="text-label text-accent-primary mb-3">
                {podcastCategoryLabels[cat]}
              </h3>
              <div className="space-y-2">
                {filtered.map((pod) => (
                  <div key={pod.name} className="card-white p-4">
                    <span className="text-body text-text-heading font-medium">{pod.name}</span>
                    {pod.host && <span className="text-sm text-text-muted ml-2">— {pod.host}</span>}
                    <p className="text-sm text-text-secondary mt-1">{pod.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Documentaries */}
      <section id="documentaries" className="pb-10">
        <SectionHeading title="Documentaries" />
        <div className="space-y-2">
          {documentaries.map((doc) => (
            <div key={doc.title} className="card-white p-4 flex items-baseline gap-2">
              <span className="text-body text-text-heading font-medium">{doc.title}</span>
              {doc.year && <span className="text-sm text-text-muted">({doc.year})</span>}
              <span className="text-sm text-text-secondary">— {doc.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube */}
      <section id="youtube" className="pb-10">
        <SectionHeading title="YouTube channels" />
        <div className="space-y-2">
          {youtubeChannels.map((ch) => (
            <div key={ch.name} className="card-white p-4">
              <span className="text-body text-text-heading font-medium">{ch.name}</span>
              {ch.host && <span className="text-sm text-text-muted ml-2">— {ch.host}</span>}
              <p className="text-sm text-text-secondary mt-1">{ch.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-10">
        <div className="p-5 bg-accent-gold/[0.04] rounded-organic border border-accent-gold/[0.08]">
          <p className="text-sm text-text-muted">
            Live feeds (podcasts, books) pull from iTunes and Google Books APIs automatically every 24 hours.
            Curated lists, documentaries, and YouTube channels are hand-picked and updated less frequently.
            <a href="https://github.com/itsmepraks/womeninstem/issues/new?title=Suggest+media&labels=resource-suggestion" target="_blank" rel="noopener noreferrer" className="text-accent-primary ml-1 underline underline-offset-2 hover:text-accent-secondary transition-colors">
              Suggest something we missed.
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
