import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="font-display text-6xl md:text-8xl font-bold">
              <span className="gradient-text bg-gradient-nebula">STEM</span>
              <span className="text-stardust-400">•</span>
              <span className="gradient-text bg-gradient-aurora">SPARK</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              A learning platform for women in STEM
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">
              Connect with mentors, access learning resources, and contribute to a community
              focused on supporting women pursuing careers in science, technology, engineering, and mathematics.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center items-center text-sm">
              <span className="glass px-4 py-2 rounded-full">Learning Paths</span>
              <span className="glass px-4 py-2 rounded-full">Mentorship</span>
              <span className="glass px-4 py-2 rounded-full">Community</span>
              <span className="glass px-4 py-2 rounded-full">Resources</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/explore"
              className="px-8 py-4 bg-gradient-nebula rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/resources"
              className="px-8 py-4 glass rounded-full font-semibold text-lg hover:shadow-glow-blue transition-all duration-300"
            >
              Browse Resources
            </Link>
          </div>

          {/* Status Badge */}
          <div className="pt-12">
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-aurora-500"></span>
              </span>
              <span className="text-sm font-medium">In Active Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text bg-gradient-nebula">What We're Building</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Learning Paths',
                description: 'Structured courses and tutorials for different STEM fields',
                href: '/learning',
              },
              {
                title: 'Mentorship Network',
                description: 'Connect with experienced women working in STEM careers',
                href: '/mentorship',
              },
              {
                title: 'Resource Library',
                description: 'Curated tutorials, articles, and career preparation materials',
                href: '/resources',
              },
              {
                title: 'Progress Tracking',
                description: 'Track your learning progress and completed courses',
                href: '/explore',
              },
              {
                title: 'Community Forum',
                description: 'Discuss topics, ask questions, and share experiences',
                href: '/community',
              },
              {
                title: 'Career Resources',
                description: 'Job boards, interview preparation, and industry insights',
                href: '/explore',
              },
            ].map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 space-y-4 group"
              >
                <h3 className="font-display text-xl font-semibold group-hover:text-nebula-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
