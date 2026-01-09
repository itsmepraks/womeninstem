import { Container, Card, Button, Badge } from '@/components/ui';
import Link from 'next/link';

export const metadata = {
  title: 'Explore - STEM•SPARK',
  description: 'Your dashboard for STEM learning and community',
};

export default function ExplorePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <Container size="lg">
          <div className="text-center space-y-8">
            <Badge variant="nebula" size="lg">
              In Development
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text bg-gradient-nebula">Your</span>{' '}
              <span className="gradient-text bg-gradient-aurora">Dashboard</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Track your learning progress, access courses, and connect with mentors
              all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/learning">
                <Button variant="primary" size="lg">
                  Browse Courses
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="secondary" size="lg">
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Dashboard Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Progress Tracking',
                description: 'Monitor your course completion and learning goals',
              },
              {
                title: 'Course Access',
                description: 'Continue where you left off in your learning paths',
              },
              {
                title: 'Mentor Connections',
                description: 'Message mentors and schedule sessions',
              },
              {
                title: 'Community Updates',
                description: 'See new discussions and community activity',
              },
            ].map((feature, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
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
      <section className="py-20 px-4 bg-white/5">
        <Container size="lg">
          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Building Your Dashboard
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Features planned for the dashboard:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              {[
                'Course recommendations based on your goals',
                'Progress tracking and completion statistics',
                'Quick access to active courses',
                'Mentor connection management',
                'Community discussion highlights',
                'Upcoming events and webinars',
                'Resource bookmarks',
                'Achievement history',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-nebula-400"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">Want to be notified when this is ready?</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-nebula-400"
                />
                <Button variant="primary">Notify Me</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Start Learning Now
            </h2>
            <p className="text-gray-400 text-lg">
              While we build the dashboard, you can browse courses and join the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/learning">
                <Button variant="primary" size="lg">
                  View Learning Paths
                </Button>
              </Link>
              <Link href="/mentorship">
                <Button variant="secondary" size="lg">
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
