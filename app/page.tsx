import Link from 'next/link';
import { BookOpen, Sparkles, Heart, ArrowRight } from 'lucide-react';

/**
 * Book-themed homepage that serves as the cover and gateway to the reading experience
 */
export default function Home() {
  return (
    <div className="relative min-h-screen bg-parchment">
      {/* Subtle paper texture background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0 paper-texture" />
      </div>

      {/* Book Cover Opening Animation */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Book Cover Design */}
          <div className="relative">
            {/* Main Cover */}
            <div className="bg-gradient-to-br from-burgundy-600 via-burgundy-700 to-burgundy-900 rounded-page shadow-book-xl p-12 md:p-16 lg:p-20 border-4 border-gold-400 relative overflow-hidden">
              {/* Decorative corner ornaments */}
              <div className="absolute top-4 left-4 text-gold-400/40 text-3xl">❦</div>
              <div className="absolute top-4 right-4 text-gold-400/40 text-3xl">❦</div>
              <div className="absolute bottom-4 left-4 text-gold-400/40 text-3xl">❦</div>
              <div className="absolute bottom-4 right-4 text-gold-400/40 text-3xl">❦</div>

              {/* Inner decorative border */}
              <div className="absolute inset-8 border-2 border-gold-400/30 rounded-book" />

              {/* Cover Content */}
              <div className="relative z-10 text-center space-y-8">
                {/* Emblem */}
                <div className="inline-flex p-6 bg-gold-400/20 rounded-full border-2 border-gold-400 mb-4">
                  <Sparkles className="w-16 h-16 text-gold-400" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <div className="space-y-3">
                  <div className="text-gold-400 text-sm font-serif uppercase tracking-widest mb-3">
                    An Interactive Journey Through
                  </div>
                  <h1 className="font-serif text-6xl md:text-8xl font-bold text-parchment tracking-tight drop-shadow-lg">
                    STEM•SPARK
                  </h1>
                  <div className="flex items-center justify-center gap-4 my-4">
                    <div className="w-16 h-0.5 bg-gold-400" />
                    <Sparkles className="w-5 h-5 text-gold-400" />
                    <div className="w-16 h-0.5 bg-gold-400" />
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-2xl md:text-3xl font-serif italic text-parchment/90 max-w-2xl mx-auto leading-relaxed">
                  Empowering Women in Science, Technology, Engineering & Mathematics
                </p>

                {/* Open Book CTA */}
                <div className="pt-8">
                  <Link
                    href="/read"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gold-500 text-burgundy-900 rounded-book font-serif font-bold text-xl hover:bg-gold-400 hover:shadow-book-lg transition-all duration-300 transform hover:scale-105 border-2 border-gold-600"
                  >
                    <BookOpen className="w-6 h-6" strokeWidth={2.5} />
                    Open the Book
                    <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                  </Link>
                </div>

                {/* Subtitle text */}
                <p className="text-sm font-serif text-parchment/70 tracking-wide pt-4">
                  32 Pages • 6 Chapters • Infinite Inspiration
                </p>
              </div>
            </div>

            {/* Book spine shadow effect */}
            <div className="absolute -left-2 top-4 bottom-4 w-2 bg-gradient-to-b from-burgundy-900 via-burgundy-800 to-burgundy-900 rounded-l-lg opacity-60" />
            <div className="absolute -right-2 top-4 bottom-4 w-2 bg-gradient-to-b from-burgundy-900 via-burgundy-800 to-burgundy-900 rounded-r-lg opacity-60" />
          </div>
        </div>
      </section>

      {/* Chapter Preview Section */}
      <section className="relative py-20 px-4 bg-parchment-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
              What's Inside
            </h2>
            <p className="text-ink-light text-lg max-w-2xl mx-auto">
              Six comprehensive chapters filled with knowledge, inspiration, and resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                chapter: 'Chapter 1',
                title: 'Welcome',
                icon: '🏠',
                description: 'Begin your journey with an introduction to STEM•SPARK',
                color: 'burgundy',
              },
              {
                chapter: 'Chapter 2',
                title: 'About STEM•SPARK',
                icon: '✨',
                description: 'Discover our mission, vision, and commitment to your success',
                color: 'sepia',
              },
              {
                chapter: 'Chapter 3',
                title: 'Learning Resources',
                icon: '📚',
                description: 'Curated collection of courses, scholarships, and opportunities',
                color: 'forest',
              },
              {
                chapter: 'Chapter 4',
                title: 'Success Stories',
                icon: '🌟',
                description: 'Inspiring profiles of pioneering women in STEM fields',
                color: 'gold',
              },
              {
                chapter: 'Chapter 5',
                title: 'Get Involved',
                icon: '🤝',
                description: 'Ways to participate, volunteer, and make an impact',
                color: 'burgundy',
              },
              {
                chapter: 'Chapter 6',
                title: 'Connect With Us',
                icon: '📧',
                description: 'Reach out and become part of our growing community',
                color: 'sepia',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="book-card hover-lift-book p-6 space-y-4 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{item.icon}</div>
                  <span className="text-sm font-serif text-ink-light">{item.chapter}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-burgundy-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-burgundy-600 font-serif text-sm font-semibold">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA to start reading */}
          <div className="text-center mt-16">
            <Link
              href="/read"
              className="inline-flex items-center gap-3 px-8 py-4 bg-burgundy-600 text-parchment rounded-book font-serif font-bold text-lg hover:bg-burgundy-700 hover:shadow-book-lg transition-all duration-300 transform hover:scale-105 border-2 border-burgundy-800"
            >
              <BookOpen className="w-6 h-6" strokeWidth={2.5} />
              Start Reading Now
              <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-sepia-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
              Why STEM•SPARK?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-parchment p-8 rounded-page border-2 border-sepia-200 shadow-book">
              <div className="w-12 h-12 bg-burgundy-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-parchment" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                Interactive Book Experience
              </h3>
              <p className="text-ink-light leading-relaxed">
                Turn pages, bookmark favorites, and navigate chapters in an immersive reading 
                experience that makes learning memorable and engaging.
              </p>
            </div>

            <div className="bg-parchment p-8 rounded-page border-2 border-sepia-200 shadow-book">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-parchment" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                Built for Women in STEM
              </h3>
              <p className="text-ink-light leading-relaxed">
                Every resource, story, and opportunity is curated specifically to support and 
                empower women pursuing careers in STEM fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 bg-burgundy-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink">
              Your Journey Awaits
            </h2>
            <p className="text-xl text-ink-light max-w-2xl mx-auto leading-relaxed">
              Turn the first page and discover a world of possibilities. Every chapter brings 
              new knowledge, every story provides inspiration, and every resource opens doors.
            </p>
            <div className="pt-6">
              <Link
                href="/read"
                className="inline-flex items-center gap-3 px-10 py-5 bg-burgundy-600 text-parchment rounded-book font-serif font-bold text-xl hover:bg-burgundy-700 hover:shadow-book-xl transition-all duration-300 transform hover:scale-105 border-2 border-burgundy-800"
              >
                Begin Your Story
                <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
