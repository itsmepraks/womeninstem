import Link from 'next/link';
import { 
  Rocket, 
  Sparkles, 
  Users, 
  Target, 
  GraduationCap, 
  BookOpen, 
  Award, 
  MessageCircle, 
  Telescope,
  UserCheck,
  Zap
} from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight">
              <span className="text-nebula-400">STEM</span>
              <span className="text-stardust-400">•</span>
              <span className="text-aurora-400">SPARK</span>
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
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <Rocket className="w-4 h-4 text-nebula-400" strokeWidth={2.5} />
                <span>Interactive Learning</span>
              </span>
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <Sparkles className="w-4 h-4 text-aurora-400" strokeWidth={2.5} />
                <span>Mentorship</span>
              </span>
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <Users className="w-4 h-4 text-cosmic-blue-400" strokeWidth={2.5} />
                <span>Community</span>
              </span>
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <Target className="w-4 h-4 text-supernova-400" strokeWidth={2.5} />
                <span>Gamification</span>
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/explore"
              className="px-8 py-4 bg-nebula-600 text-white rounded-full font-semibold text-lg hover:bg-nebula-500 hover:shadow-glow-nebula transition-elegant transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" strokeWidth={2.5} />
              Launch Your Journey
            </Link>
            <Link
              href="/resources"
              className="px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/10 hover:shadow-elegant transition-elegant inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" strokeWidth={2.5} />
              Explore Resources
            </Link>
          </div>

          {/* Status Badge */}
          <div className="pt-12">
            <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full shadow-elegant">
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-nebula-400">What&apos;s Coming</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Explore the powerful features we&apos;re building to support your STEM journey
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-nebula-400',
                bgColor: 'bg-nebula-500/10',
                title: 'Learning Paths',
                description: 'Gamified STEM journeys tailored to your interests and goals',
                href: '/learning',
              },
              {
                icon: <UserCheck className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-aurora-400',
                bgColor: 'bg-aurora-500/10',
                title: 'Mentorship Network',
                description: 'Connect with inspiring women leading the way in STEM fields',
                href: '/mentorship',
              },
              {
                icon: <BookOpen className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-cosmic-blue-400',
                bgColor: 'bg-cosmic-blue-500/10',
                title: 'Resource Library',
                description: 'Curated collection of tutorials, articles, and career guides',
                href: '/resources',
              },
              {
                icon: <Award className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-stardust-400',
                bgColor: 'bg-stardust-500/10',
                title: 'Achievements',
                description: 'Earn badges and rewards as you reach learning milestones',
                href: '/explore',
              },
              {
                icon: <MessageCircle className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-supernova-400',
                bgColor: 'bg-supernova-500/10',
                title: 'Community Forum',
                description: 'Safe space for discussions, questions, and peer support',
                href: '/community',
              },
              {
                icon: <Telescope className="w-8 h-8" strokeWidth={2} />,
                iconColor: 'text-cosmic-blue-400',
                bgColor: 'bg-cosmic-blue-500/10',
                title: 'Career Explorer',
                description: 'Discover diverse career paths and opportunities in STEM',
                href: '/explore',
              },
            ].map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="glass p-6 rounded-premium hover:bg-white/10 transition-elegant space-y-4 group hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform-elegant`}>
                  <div className={feature.iconColor}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold group-hover:text-nebula-400 transition-colors-elegant">
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

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Join the Movement</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Be part of something extraordinary
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                icon: <Users className="w-6 h-6" strokeWidth={2.5} />,
                value: '1,000+', 
                label: 'Future Members',
                color: 'text-nebula-400'
              },
              { 
                icon: <BookOpen className="w-6 h-6" strokeWidth={2.5} />,
                value: '50+', 
                label: 'Learning Paths',
                color: 'text-aurora-400'
              },
              { 
                icon: <UserCheck className="w-6 h-6" strokeWidth={2.5} />,
                value: '100+', 
                label: 'Mentors',
                color: 'text-cosmic-blue-400'
              },
              { 
                icon: <Zap className="w-6 h-6" strokeWidth={2.5} />,
                value: '24/7', 
                label: 'Community Support',
                color: 'text-stardust-400'
              },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3 glass p-6 rounded-premium hover:bg-white/10 transition-elegant group">
                <div className={`inline-flex p-3 rounded-lg bg-white/5 ${stat.color} group-hover:scale-110 transition-transform-elegant`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-premium p-8 md:p-12 text-center space-y-6 shadow-elegant-lg">
            <div className="inline-flex p-4 rounded-full bg-nebula-500/20 mb-4">
              <Sparkles className="w-10 h-10 text-nebula-400" strokeWidth={2} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Join thousands of women discovering their potential in STEM. 
              Start learning, connect with mentors, and become part of a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/explore"
                className="px-8 py-4 bg-nebula-600 text-white rounded-full font-semibold text-lg hover:bg-nebula-500 hover:shadow-glow-nebula transition-elegant transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" strokeWidth={2.5} />
                Get Started Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/10 hover:shadow-elegant transition-elegant inline-flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
