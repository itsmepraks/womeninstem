import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative">
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
              Igniting curiosity, one spark at a time.
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-gray-400 leading-relaxed">
              A space-themed platform empowering girls and women in STEM through
              interactive learning, mentorship, and community-driven experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center items-center text-sm">
              <span className="glass px-4 py-2 rounded-full">🚀 Interactive Learning</span>
              <span className="glass px-4 py-2 rounded-full">🌟 Mentorship</span>
              <span className="glass px-4 py-2 rounded-full">💫 Community</span>
              <span className="glass px-4 py-2 rounded-full">🎯 Gamification</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-gradient-nebula rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              Launch Your Journey
            </button>
            <button className="px-8 py-4 glass rounded-full font-semibold text-lg hover:shadow-glow-blue transition-all duration-300">
              Explore Resources
            </button>
          </div>

          {/* Status Badge */}
          <div className="pt-12">
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-aurora-500"></span>
              </span>
              <span className="text-sm font-medium">Under Active Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text bg-gradient-nebula">What's Coming</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Learning Paths',
                description: 'Gamified STEM journeys tailored to your interests and goals',
              },
              {
                icon: '👥',
                title: 'Mentorship Network',
                description: 'Connect with inspiring women leading the way in STEM fields',
              },
              {
                icon: '📚',
                title: 'Resource Library',
                description: 'Curated collection of tutorials, articles, and career guides',
              },
              {
                icon: '🏆',
                title: 'Achievements',
                description: 'Earn badges and rewards as you reach learning milestones',
              },
              {
                icon: '💬',
                title: 'Community Forum',
                description: 'Safe space for discussions, questions, and peer support',
              },
              {
                icon: '🔭',
                title: 'Career Explorer',
                description: 'Discover diverse career paths and opportunities in STEM',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 space-y-4"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-gray-400">
            Built with 💜 by{' '}
            <a
              href="https://praks.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nebula-400 hover:text-nebula-300 transition-colors"
            >
              Prakriti Bista
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Empowering the next generation of women in STEM
          </p>
        </div>
      </footer>
    </main>
  );
}
