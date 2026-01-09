import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Community - STEM•SPARK',
  description: 'Connect with other women in STEM through discussions and support',
};

export default function CommunityPage() {
  const forumCategories = [
    {
      title: 'General Discussions',
      description: 'Share experiences, ask questions, and connect with others',
      topics: 234,
    },
    {
      title: 'Career Advice',
      description: 'Get guidance on career paths, interviews, and growth',
      topics: 156,
    },
    {
      title: 'Study Groups',
      description: 'Form study groups and collaborate on learning',
      topics: 89,
    },
    {
      title: 'Achievements',
      description: 'Share your milestones and accomplishments',
      topics: 178,
    },
  ];

  const recentDiscussions = [
    {
      title: 'How did you get your first tech internship?',
      author: 'Sarah K.',
      replies: 24,
      category: 'Career Advice',
    },
    {
      title: 'Study group for Python beginners',
      author: 'Maria R.',
      replies: 18,
      category: 'Study Groups',
    },
    {
      title: 'Just got accepted into a CS program',
      author: 'Alex T.',
      replies: 45,
      category: 'Achievements',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="primary" dot>
            In Development
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-100">
            Community Forum
          </h1>
          
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Connect with women in STEM fields. Ask questions, share experiences, 
            and learn from others facing similar challenges.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <Badge variant="neutral">Discussions</Badge>
            <Badge variant="neutral">Study Groups</Badge>
            <Badge variant="neutral">Career Advice</Badge>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Forum Categories
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Browse discussions by topic
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {category.title}
                    </h3>
                    <Badge variant="neutral">{category.topics} topics</Badge>
                  </div>
                  
                  <p className="text-neutral-600 dark:text-neutral-400">{category.description}</p>

                  <Button variant="ghost" className="w-full">
                    Browse Topics
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Recent Discussions
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              See what people are talking about
            </p>
          </div>

          <div className="space-y-4">
            {recentDiscussions.map((discussion, index) => (
              <Card key={index} hover>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                    {discussion.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                    <span>by {discussion.author}</span>
                    <span>•</span>
                    <Badge variant="neutral" size="sm">{discussion.category}</Badge>
                    <span>•</span>
                    <span>{discussion.replies} replies</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="secondary">View All Discussions</Button>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Community Guidelines
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Help us maintain a respectful environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Be Respectful', desc: 'Treat everyone with respect and kindness' },
              { title: 'Stay On Topic', desc: 'Keep discussions relevant and constructive' },
              { title: 'Help Others', desc: 'Share your knowledge and experience' },
              { title: 'Ask Questions', desc: 'No question is too basic' },
              { title: 'Give Credit', desc: 'Acknowledge sources and contributions' },
              { title: 'Report Issues', desc: 'Help us address problems promptly' },
            ].map((guideline, index) => (
              <Card key={index}>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-lg font-bold mb-2">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-neutral-100">{guideline.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{guideline.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Badge variant="accent">Currently Building</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Forum Launching Soon
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            We're building the community forum infrastructure. Get notified when it's ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Button variant="primary">Join Waitlist</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
