import SectionHeading from '@/components/ui/SectionHeading';
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
          Media <em className="italic text-accent-primary">library</em>
        </h1>
        <p className="text-body-lg text-text-body mt-3 max-w-[520px]">
          Books, podcasts, documentaries, and channels that amplify women in STEM.
        </p>

        {/* Quick nav */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            { label: 'Books', href: '#books' },
            { label: 'Podcasts', href: '#podcasts' },
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

      {/* ─── BOOKS ─── */}
      <section id="books" className="pb-12">
        <SectionHeading title="Books" accent={`${books.length} titles`} />

        {bookCategories.map((cat) => {
          const filtered = books.filter((b) => b.category === cat);
          if (filtered.length === 0) return null;
          return (
            <div key={cat} className="mb-8">
              <h3 className="text-label text-accent-primary mb-3">
                {bookCategoryLabels[cat]}
              </h3>
              <div className="space-y-2.5">
                {filtered.map((book) => (
                  <div
                    key={book.title}
                    className="card-white p-5 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-body text-text-heading font-medium italic">
                        {book.title}
                      </span>
                      <p className="text-xs text-text-secondary mt-1">
                        by {book.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── PODCASTS ─── */}
      <section id="podcasts" className="pb-12">
        <SectionHeading title="Podcasts" accent={`${podcasts.length} shows`} />

        {podcastCategories.map((cat) => {
          const filtered = podcasts.filter((p) => p.category === cat);
          if (filtered.length === 0) return null;
          return (
            <div key={cat} className="mb-8">
              <h3 className="text-label text-accent-primary mb-3">
                {podcastCategoryLabels[cat]}
              </h3>
              <div className="space-y-2.5">
                {filtered.map((podcast) => (
                  <div
                    key={podcast.name}
                    className="card-white p-5 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-body text-text-heading font-medium">
                        {podcast.name}
                      </span>
                      {podcast.host && (
                        <span className="text-xs text-text-muted ml-2">
                          ({podcast.host})
                        </span>
                      )}
                      <p className="text-xs text-text-secondary mt-1">
                        {podcast.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── DOCUMENTARIES ─── */}
      <section id="documentaries" className="pb-12">
        <SectionHeading title="Documentaries" accent={`${documentaries.length} films`} />
        <div className="space-y-2.5">
          {documentaries.map((doc) => (
            <div
              key={doc.title}
              className="card-white p-5 flex items-center justify-between"
            >
              <div>
                <span className="text-body text-text-heading font-medium">
                  {doc.title}
                </span>
                {doc.year && (
                  <span className="text-xs text-text-muted ml-2">
                    ({doc.year})
                  </span>
                )}
                <p className="text-xs text-text-secondary mt-1">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── YOUTUBE ─── */}
      <section id="youtube" className="pb-12">
        <SectionHeading title="YouTube Channels" accent={`${youtubeChannels.length} channels`} />
        <div className="space-y-2.5">
          {youtubeChannels.map((channel) => (
            <div
              key={channel.name}
              className="card-white p-5 flex items-center justify-between"
            >
              <div>
                <span className="text-body text-text-heading font-medium">
                  {channel.name}
                </span>
                {channel.host && (
                  <span className="text-xs text-text-muted ml-2">
                    ({channel.host})
                  </span>
                )}
                <p className="text-xs text-text-secondary mt-1">
                  {channel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
