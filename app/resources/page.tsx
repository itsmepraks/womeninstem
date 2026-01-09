import { Container, Card, Button, Badge } from '@/components/ui';
import { BookOpen, FileText, Video, Newspaper, ExternalLink, Search } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/components/ui/Badge';

export const metadata = {
  title: 'Resources - STEM•SPARK',
  description: 'Curated collection of tutorials, articles, tools, and career guides for women in STEM',
};

// Define valid color type to match Badge variants
type BadgeVariant = NonNullable<BadgeProps['variant']>;

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Tutorials & Guides',
      description: 'Step-by-step tutorials for learning new skills',
      count: '150+ resources',
      color: 'nebula' as BadgeVariant,
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: 'Articles & Blogs',
      description: 'In-depth articles on STEM topics and careers',
      count: '200+ articles',
      color: 'cosmic' as BadgeVariant,
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Content',
      description: 'Educational videos and recorded webinars',
      count: '80+ videos',
      color: 'aurora' as BadgeVariant,
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Career Resources',
      description: 'Resume templates, interview prep, and career advice',
      count: '50+ resources',
      color: 'stardust' as BadgeVariant,
    },
  ];

  const featuredResources = [
    {
      type: 'Tutorial',
      title: 'Getting Started with Python Programming',
      description: 'A beginner-friendly guide to learning Python from scratch',
      author: 'Dr. Sarah Chen',
      readTime: '15 min read',
      tags: ['Python', 'Beginner', 'Programming'],
    },
    {
      type: 'Article',
      title: 'Breaking Into the Tech Industry: A Woman\'s Guide',
      description: 'Navigate your tech career with insights from industry leaders',
      author: 'Maria Rodriguez',
      readTime: '10 min read',
      tags: ['Career', 'Tech', 'Advice'],
    },
    {
      type: 'Video',
      title: 'Introduction to Machine Learning Concepts',
      description: 'Learn the fundamentals of ML in this comprehensive video',
      author: 'Dr. Aisha Patel',
      readTime: '45 min watch',
      tags: ['Machine Learning', 'AI', 'Advanced'],
    },
  ];

  const toolsAndPlatforms = [
    { name: 'GitHub', desc: 'Version control and collaboration', icon: '💻' },
    { name: 'Kaggle', desc: 'Data science competitions', icon: '📊' },
    { name: 'Stack Overflow', desc: 'Q&A for programmers', icon: '💬' },
    { name: 'Coursera', desc: 'Online courses', icon: '🎓' },
    { name: 'LeetCode', desc: 'Coding practice', icon: '⚡' },
    { name: 'Dev.to', desc: 'Developer community', icon: '👥' },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <Container size="lg">
          <div className="text-center space-y-8">
            <Badge variant="cosmic" size="lg" dot>
              Coming Soon
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text bg-gradient-cosmic">Resource</span>{' '}
              <span className="gradient-text bg-gradient-nebula">Library</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your curated collection of tutorials, articles, tools, and career guides.
              Everything you need to succeed in STEM, all in one place.
            </p>

            {/* Search Bar Preview */}
            <div className="max-w-2xl mx-auto pt-4">
              <div className="glass rounded-full p-3 flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400"
                  disabled
                />
                <Button variant="primary" size="sm">Search</Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="glass px-4 py-2 rounded-full">📚 500+ Resources</span>
              <span className="glass px-4 py-2 rounded-full">🆓 All Free</span>
              <span className="glass px-4 py-2 rounded-full">✨ Curated Content</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find exactly what you need to level up your skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <Card key={index} hover className="group">
                <div className="space-y-4 text-center">
                  <div className={cn(
                    'inline-flex p-4 rounded-xl group-hover:scale-110 transition-transform',
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
                  
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                    <Badge variant={category.color} size="sm">
                      {category.count}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 bg-white/5">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Featured Resources
            </h2>
            <p className="text-gray-400 text-lg">
              Hand-picked content to help you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="nebula" size="sm">{resource.type}</Badge>
                    <span className="text-xs text-gray-500">{resource.readTime}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2 line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {resource.description}
                    </p>
                    <p className="text-xs text-gray-500">by {resource.author}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full" rightIcon={<ExternalLink className="w-4 h-4" />}>
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="secondary">Browse All Resources</Button>
          </div>
        </Container>
      </section>

      {/* Tools & Platforms */}
      <section className="py-20 px-4">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Essential Tools & Platforms
            </h2>
            <p className="text-gray-400 text-lg">
              Recommended tools for your STEM journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolsAndPlatforms.map((tool, index) => (
              <div key={index} className="glass p-4 rounded-xl hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{tool.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-nebula-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-400">{tool.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-nebula-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Topics */}
      <section className="py-20 px-4 bg-white/5">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Popular Topics
            </h2>
            <p className="text-gray-400 text-lg">
              Explore resources by topic
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Python', 'JavaScript', 'Data Science', 'Machine Learning', 'Web Development',
              'Career Advice', 'Interview Prep', 'Algorithms', 'Database', 'Cloud Computing',
              'Cybersecurity', 'Mobile Development', 'UI/UX Design', 'DevOps', 'Blockchain',
            ].map((topic, index) => (
              <button
                key={index}
                className="px-4 py-2 glass rounded-full hover:bg-white/10 transition-all text-sm"
              >
                {topic}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Contribution CTA */}
      <section className="py-20 px-4">
        <Container size="md">
          <div className="glass rounded-3xl p-8 md:p-12 text-center space-y-6">
            <BookOpen className="w-16 h-16 mx-auto text-cosmic-400" />
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Have a Resource to Share?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Help grow our library! Contribute tutorials, articles, or tools that have
              helped you in your STEM journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="primary">Submit Resource</Button>
              <Button variant="secondary">View Guidelines</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Get Weekly Resource Roundup
            </h2>
            <p className="text-gray-400 text-lg">
              Receive curated STEM resources delivered to your inbox every week
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmic-400"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
