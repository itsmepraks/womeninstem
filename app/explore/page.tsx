import { Container, Card, Button, Badge } from '@/components/ui';
import { 
  Rocket, 
  Sparkles, 
  Target, 
  Zap, 
  CheckCircle2, 
  Mail,
  TrendingUp,
  Compass
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Explore - STEM•SPARK',
  description: 'Discover your STEM journey and explore all the opportunities available on STEM•SPARK',
};

export default function ExplorePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <Container size="lg">
          <div className="text-center space-y-8">
            <Badge variant="nebula" size="lg" className="inline-flex items-center gap-2">
              <Rocket className="w-4 h-4" strokeWidth={2.5} />
              Coming Soon
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-nebula-400">Explore</span>
              {' '}
              <span className="text-white">Your</span>
              {' '}
              <span className="text-aurora-400">Journey</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your personalized dashboard to discover learning paths, connect with mentors,
              and explore the vast universe of STEM opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/learning">
                <Button variant="primary" size="lg" leftIcon={<Rocket className="w-5 h-5" strokeWidth={2.5} />}>
                  Start Learning
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="secondary" size="lg" leftIcon={<Compass className="w-5 h-5" strokeWidth={2.5} />}>
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4">
        <Container size="xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-ink">
            What You&apos;ll Discover
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A personalized experience designed to accelerate your STEM journey
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8" strokeWidth={2} />,
                title: 'Personalized Dashboard',
                description: 'Track your progress, achievements, and learning goals in one place',
                color: 'nebula',
              },
              {
                icon: <Sparkles className="w-8 h-8" strokeWidth={2} />,
                title: 'Recommended Paths',
                description: 'Get AI-powered suggestions based on your interests and skill level',
                color: 'aurora',
              },
              {
                icon: <Zap className="w-8 h-8" strokeWidth={2} />,
                title: 'Quick Actions',
                description: 'Easy access to continue learning, message mentors, or join discussions',
                color: 'stardust',
              },
              {
                icon: <TrendingUp className="w-8 h-8" strokeWidth={2} />,
                title: 'Discover New',
                description: 'Explore trending topics, popular courses, and featured content',
                color: 'cosmic',
              },
            ].map((feature, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-lg ${
                    feature.color === 'nebula' ? 'bg-nebula-500/20 text-nebula-400' :
                    feature.color === 'aurora' ? 'bg-aurora-500/20 text-aurora-400' :
                    feature.color === 'stardust' ? 'bg-stardust-500/20 text-stardust-400' :
                    'bg-cosmic-blue-500/20 text-cosmic-blue-400'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Coming Soon Details */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <Container size="lg">
          <div className="glass-strong rounded-premium p-8 md:p-12 space-y-8 shadow-elegant-lg">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Building Your Launch Pad
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We&apos;re crafting an exceptional experience to help you navigate your STEM journey.
                Here&apos;s what&apos;s coming:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              {[
                'Personalized learning recommendations',
                'Progress tracking and analytics',
                'Achievement showcase',
                'Quick access to active courses',
                'Mentor connection hub',
                'Community highlights',
                'Upcoming events calendar',
                'Resource bookmarks',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nebula-600 flex items-center justify-center shadow-glow-nebula">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">Want to be notified when we launch?</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-nebula-400 focus:border-transparent transition-elegant hover:border-white/20"
                />
                <Button variant="primary" className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" strokeWidth={2.5} />
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <Container size="md">
          <div className="text-center space-y-6">
            <div className="inline-flex p-4 rounded-full bg-nebula-500/20 mb-4">
              <Compass className="w-12 h-12 text-nebula-400" strokeWidth={2} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400 text-lg">
              While we&apos;re building the Explore hub, you can start learning and connecting with the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/learning">
                <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
                  <Sparkles className="w-5 h-5" strokeWidth={2.5} />
                  Browse Learning Paths
                </Button>
              </Link>
              <Link href="/mentorship">
                <Button variant="secondary" size="lg" className="inline-flex items-center gap-2">
                  <Target className="w-5 h-5" strokeWidth={2.5} />
                  Find a Mentor
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
