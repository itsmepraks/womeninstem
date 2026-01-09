import { Container, Card, Button, Badge } from '@/components/ui';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/components/ui/Badge';

export const metadata = {
  title: 'Community - STEM•SPARK',
  description: 'Connect with other women in STEM through discussions and support',
};

// Define valid color type to match Badge variants
type BadgeVariant = NonNullable<BadgeProps['variant']>;

export default function CommunityPage() {
  const forumCategories = [
    {
      title: 'General Discussions',
      description: 'Share experiences and connect with others',
      topics: 234,
      color: 'nebula' as BadgeVariant,
    },
    {
      title: 'Career Advice',
      description: 'Get guidance on career paths and professional growth',
      topics: 156,
      color: 'stardust' as BadgeVariant,
    },
    {
      title: 'Study Groups',
      description: 'Form groups and collaborate on learning',
      topics: 89,
      color: 'aurora' as BadgeVariant,
    },
    {
      title: 'Achievements',
      description: 'Share milestones and accomplishments',
      topics: 178,
      color: 'cosmic' as BadgeVariant,
    },
  ];

  const recentDiscussions = [
    {
      title: 'How did you get your first internship in tech?',
      author: 'Sarah K.',
      replies: 24,
      category: 'Career Advice',
      tags: ['internship', 'career', 'advice'],
    },
    {
      title: 'Study group for Python beginners',
      author: 'Maria R.',
      replies: 18,
      category: 'Study Groups',
      tags: ['python', 'beginners', 'study-group'],
    },
    {
      title: 'Got accepted into a CS program',
      author: 'Alex T.',
      replies: 45,
      category: 'Achievements',
      tags: ['celebration', 'education'],
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <Container size="lg">
          <div className="text-center space-y-8">
            <Badge variant="supernova" size="lg" dot>
              In Development
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text bg-gradient-nebula">Community</span>{' '}
              <span className="gradient-text bg-gradient-aurora">Forum</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with women in STEM. Ask questions, share experiences, 
              and learn from each other.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="glass px-4 py-2 rounded-full">
                Active Discussions
              </span>
              <span className="glass px-4 py-2 rounded-full">
                Peer Support
              </span>
              <span className="glass px-4 py-2 rounded-full">
                Study Groups
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Forum Categories */}
      <section className="py-20 px-4">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Forum Categories
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find discussions on topics that interest you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => (
              <Card key={index} hover className="group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-2xl font-semibold">
                      {category.title}
                    </h3>
                    <Badge variant={category.color} size="sm">
                      {category.topics} topics
                    </Badge>
                  </div>
                  
                  <p className="text-gray-400">{category.description}</p>

                  <Button variant="ghost" className="w-full">
                    Browse Topics
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent Discussions Preview */}
      <section className="py-20 px-4 bg-white/5">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Recent Discussions
            </h2>
            <p className="text-gray-400 text-lg">
              See what people are talking about
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {recentDiscussions.map((discussion, index) => (
              <Card key={index} hover className="group">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg group-hover:text-nebula-400 transition-colors">
                    {discussion.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                    <span>by {discussion.author}</span>
                    <span>•</span>
                    <Badge variant="cosmic" size="sm">{discussion.category}</Badge>
                    <span>•</span>
                    <span>{discussion.replies} replies</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {discussion.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="secondary">View All Discussions</Button>
          </div>
        </Container>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 px-4">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Community Guidelines
            </h2>
            <p className="text-gray-400 text-lg">
              Help us maintain a respectful environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Be Respectful',
                desc: 'Treat everyone with respect and kindness',
              },
              {
                title: 'Stay On Topic',
                desc: 'Keep discussions relevant and constructive',
              },
              {
                title: 'Help Others',
                desc: 'Share your knowledge and experience',
              },
              {
                title: 'Ask Questions',
                desc: 'No question is too basic or simple',
              },
              {
                title: 'Give Credit',
                desc: 'Acknowledge sources and contributions',
              },
              {
                title: 'Report Issues',
                desc: 'Help us address problems promptly',
              },
            ].map((value, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-nebula text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white/5">
        <Container size="lg">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Forum Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Topic-Based Discussions', desc: 'Organized forums for different interests' },
                { title: 'Study Groups', desc: 'Form or join study groups' },
                { title: 'Event Listings', desc: 'Find webinars, workshops, and meetups' },
                { title: 'Reputation System', desc: 'Build reputation through contributions' },
                { title: 'Notifications', desc: 'Stay updated on topics you follow' },
                { title: 'Search', desc: 'Find answers to your questions quickly' },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-nebula flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <Container size="md">
          <div className="text-center space-y-6">
            <Badge variant="supernova" size="lg">
              Currently Building
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Forum Coming Soon
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're building the community forum. Get notified when it launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-supernova-400"
              />
              <Button variant="primary">Join Waitlist</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
