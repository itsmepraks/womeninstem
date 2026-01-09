import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">
              STEM<span className="text-gray-400">•</span>SPARK
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Supporting women in STEM through structured learning, mentorship connections, and community collaboration.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Access courses, connect with mentors, and join a community focused on advancing 
              women's careers in science, technology, engineering, and mathematics.
            </p>
          </div>

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

          <div className="pt-8">
            <Badge variant="primary" size="sm" dot>
              Currently in Development
            </Badge>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text bg-gradient-nebula">What&apos;s Coming</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Learning Paths',
                description: 'Structured courses covering programming, data science, engineering, and research methods',
                href: '/learning',
              },
              {
                title: 'Mentorship',
                description: 'Connect with experienced professionals for career guidance and advice',
                href: '/mentorship',
              },
              {
                title: 'Resource Library',
                description: 'Curated articles, tutorials, and tools for continued learning',
                href: '/resources',
              },
              {
                title: 'Community Forum',
                description: 'Discussions, questions, and peer support from other women in STEM',
                href: '/community',
              },
              {
                title: 'Career Resources',
                description: 'Information about different STEM careers and job opportunities',
                href: '/explore',
              },
              {
                title: 'Progress Tracking',
                description: 'Monitor your learning journey and completed courses',
                href: '/explore',
              },
            ].map((feature, index) => (
              <Card key={index} hover href={feature.href}>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-soft">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Built for the STEM Community
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                STEM•SPARK addresses the gender gap in STEM fields by providing practical resources, 
                mentorship connections, and a supportive community. We focus on creating meaningful 
                tools that help women build careers in science and technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This is an open-source project that prioritizes substance over style and 
                contribution over consumption.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <Button variant="primary" size="lg">
                    Read Our Mission
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Open Source', value: 'MIT License' },
              { label: 'Status', value: 'Active Development' },
              { label: 'Focus', value: 'Women in STEM' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
