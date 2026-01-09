import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Logo/Title */}
          <div className="space-y-6">
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight">
              <span className="text-primary-600 dark:text-primary-400">STEM</span>
              <span className="text-neutral-400">•</span>
              <span className="text-primary-600 dark:text-primary-400">SPARK</span>
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 font-light max-w-3xl mx-auto">
              Supporting women in STEM through education, mentorship, and community.
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A platform connecting women in science, technology, engineering, and mathematics. 
              Access courses, find mentors, and contribute to a growing community.
            </p>
            
            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <Badge variant="neutral">Structured Learning</Badge>
              <Badge variant="neutral">Mentor Matching</Badge>
              <Badge variant="neutral">Community Forums</Badge>
              <Badge variant="neutral">Career Resources</Badge>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/explore">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Status */}
          <div className="pt-8">
            <Badge variant="primary" size="sm" dot>
              In Active Development
            </Badge>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
              What We Offer
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Resources and connections to support your STEM career
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Learning Paths',
                description: 'Structured courses covering fundamentals to advanced topics in various STEM fields',
                href: '/learning',
              },
              {
                title: 'Mentorship',
                description: 'Connect with experienced professionals for guidance and career advice',
                href: '/mentorship',
              },
              {
                title: 'Resource Library',
                description: 'Curated articles, tutorials, and tools for continued learning',
                href: '/resources',
              },
              {
                title: 'Community Forum',
                description: 'Ask questions, share experiences, and learn from peers',
                href: '/community',
              },
              {
                title: 'Career Guidance',
                description: 'Information about different STEM career paths and opportunities',
                href: '/explore',
              },
              {
                title: 'Progress Tracking',
                description: 'Monitor your learning progress and completed courses',
                href: '/explore',
              },
            ].map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card hover className="h-full">
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Built for Contributors
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            STEM•SPARK is an open-source project focused on creating practical resources 
            for women in STEM. We prioritize substance over style, contribution over consumption, 
            and meaningful work over flashy features.
          </p>
          <div className="pt-4">
            <Link href="/about">
              <Button variant="primary">
                Learn About Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
