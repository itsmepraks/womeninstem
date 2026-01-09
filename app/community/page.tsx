import { Container, Card, Button, Badge } from '@/components/ui';
import { MessageSquare, Users, Lightbulb, Trophy, Heart, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/components/ui/Badge';

export const metadata = {
  title: 'Community - STEM•SPARK',
  description: 'Join a supportive community of women in STEM. Share, learn, and grow together',
};

// Define valid color type to match Badge variants
type BadgeVariant = NonNullable<BadgeProps['variant']>;

export default function CommunityPage() {
  const forumCategories = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'General Discussions',
      description: 'Share experiences, ask questions, and connect with peers',
      topics: 234,
      color: 'nebula' as BadgeVariant,
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Career Advice',
      description: 'Get guidance on career paths, interviews, and professional growth',
      topics: 156,
      color: 'stardust' as BadgeVariant,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Study Groups',
      description: 'Form study groups and collaborate on learning projects',
      topics: 89,
      color: 'aurora' as BadgeVariant,
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Achievements',
      description: 'Celebrate wins and milestones with the community',
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
      title: 'Just got accepted into a CS program! 🎉',
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
              Coming Soon
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text bg-gradient-nebula">Join the</span>{' '}
              <span className="gradient-text bg-gradient-aurora">Community</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with thousands of women in STEM. A safe, supportive space to ask questions,
              share experiences, and grow together.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="glass px-4 py-2 rounded-full">
                <Users className="w-4 h-4 inline mr-2" />
                1,000+ Members
              </span>
              <span className="glass px-4 py-2 rounded-full">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Active Discussions
              </span>
              <span className="glass px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 inline mr-2" />
                Supportive Environment
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
              Explore Forum Categories
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find your space to connect, learn, and contribute
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => (
              <Card key={index} hover className="group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={cn(
                      'p-3 rounded-xl group-hover:scale-110 transition-transform',
                      {
                        'bg-nebula-500/20 text-nebula-400': category.color === 'nebula',
                        'bg-aurora-500/20 text-aurora-400': category.color === 'aurora',
                        'bg-cosmic-500/20 text-cosmic-400': category.color === 'cosmic',
                        'bg-stardust-500/20 text-stardust-400': category.color === 'stardust',
                        'bg-supernova-500/20 text-supernova-400': category.color === 'supernova',
                      }
                    )}>
                      {category.icon}
                    </div>
                    <Badge variant={category.color} size="sm">
                      {category.topics} topics
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>

                  <Button variant="ghost" className="w-full">
                    Browse Topics →
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
              Trending Discussions
            </h2>
            <p className="text-gray-400 text-lg">
              See what the community is talking about
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {recentDiscussions.map((discussion, index) => (
              <Card key={index} hover className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-nebula flex items-center justify-center text-xl">
                    💬
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-nebula-400 transition-colors">
                      {discussion.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
                      <span>by {discussion.author}</span>
                      <span>•</span>
                      <Badge variant="cosmic" size="sm">{discussion.category}</Badge>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {discussion.replies} replies
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
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
              Our Community Values
            </h2>
            <p className="text-gray-400 text-lg">
              Creating a safe and welcoming space for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🤝',
                title: 'Respect & Inclusion',
                desc: 'Treat everyone with kindness and respect diverse perspectives',
              },
              {
                icon: '💡',
                title: 'Constructive Support',
                desc: 'Offer helpful feedback and encouragement to fellow members',
              },
              {
                icon: '🛡️',
                title: 'Safe Space',
                desc: 'Zero tolerance for harassment, discrimination, or negativity',
              },
              {
                icon: '📚',
                title: 'Share Knowledge',
                desc: 'Help others learn by sharing your experiences and expertise',
              },
              {
                icon: '🎯',
                title: 'Stay On Topic',
                desc: 'Keep discussions relevant and add value to conversations',
              },
              {
                icon: '✨',
                title: 'Celebrate Success',
                desc: 'Acknowledge and celebrate the achievements of others',
              },
            ].map((value, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="text-5xl">{value.icon}</div>
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
              Community Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '💬', title: 'Discussion Forums', desc: 'Topic-based forums for all your STEM questions' },
                { icon: '👥', title: 'Study Groups', desc: 'Form or join study groups with peers' },
                { icon: '📅', title: 'Community Events', desc: 'Participate in webinars, workshops, and meetups' },
                { icon: '🏆', title: 'Reputation System', desc: 'Earn points and badges for helpful contributions' },
                { icon: '🔔', title: 'Smart Notifications', desc: 'Stay updated on topics and people you follow' },
                { icon: '🔍', title: 'Advanced Search', desc: 'Find answers quickly with powerful search' },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
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
            <Users className="w-16 h-16 mx-auto text-supernova-400" />
            <Badge variant="supernova" size="lg">
              🚀 Launching Soon
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Be Part of Something Special
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join the waitlist and be among the first to connect with an amazing community
              of women in STEM.
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
