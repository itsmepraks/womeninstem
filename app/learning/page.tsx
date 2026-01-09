import { Container, Card, Button, Badge } from '@/components/ui';
import { BookOpen, Code, Cpu, FlaskConical, GraduationCap, LineChart } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/components/ui/Badge';

export const metadata = {
  title: 'Learning Paths - STEM•SPARK',
  description: 'Explore gamified STEM learning journeys tailored to your interests and goals',
};

// Define valid color type to match Badge variants
type BadgeVariant = NonNullable<BadgeProps['variant']>;

export default function LearningPage() {
  const learningPaths = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming & Computer Science',
      description: 'From Python basics to advanced algorithms',
      level: 'Beginner to Advanced',
      courses: 12,
      color: 'nebula' as BadgeVariant,
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Data Science & Analytics',
      description: 'Master data analysis and visualization',
      level: 'Intermediate',
      courses: 8,
      color: 'cosmic' as BadgeVariant,
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Engineering Fundamentals',
      description: 'Learn engineering principles and design',
      level: 'Beginner',
      courses: 10,
      color: 'aurora' as BadgeVariant,
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Scientific Research',
      description: 'Dive into scientific methods and inquiry',
      level: 'All Levels',
      courses: 6,
      color: 'stardust' as BadgeVariant,
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <Container size="lg">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Badge variant="nebula" size="lg" dot>
                Coming Soon
              </Badge>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text bg-gradient-nebula">Learning Paths</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Gamified STEM journeys designed for every skill level. Learn at your own pace,
              earn achievements, and build the skills to transform your future.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="glass px-4 py-2 rounded-full">
                <GraduationCap className="w-4 h-4 inline mr-2" />
                50+ Courses
              </span>
              <span className="glass px-4 py-2 rounded-full">
                <BookOpen className="w-4 h-4 inline mr-2" />
                Interactive Lessons
              </span>
              <span className="glass px-4 py-2 rounded-full">
                ✨ Earn Badges
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Learning Paths Preview */}
      <section className="py-20 px-4">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Explore Learning Paths
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose your path and start your journey in the world of STEM
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} hover className="group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={cn(
                      'p-3 rounded-xl group-hover:scale-110 transition-transform',
                      {
                        'bg-nebula-500/20 text-nebula-400': path.color === 'nebula',
                        'bg-aurora-500/20 text-aurora-400': path.color === 'aurora',
                        'bg-cosmic-500/20 text-cosmic-400': path.color === 'cosmic',
                        'bg-stardust-500/20 text-stardust-400': path.color === 'stardust',
                        'bg-supernova-500/20 text-supernova-400': path.color === 'supernova',
                      }
                    )}>
                      {path.icon}
                    </div>
                    <Badge variant={path.color} size="sm">
                      {path.courses} courses
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-2">
                      {path.title}
                    </h3>
                    <p className="text-gray-400 mb-3">{path.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="text-gray-300">{path.level}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="ghost" className="w-full">
                      Explore Path →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white/5">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Path',
                description: 'Select a learning path that aligns with your interests and career goals',
              },
              {
                step: '02',
                title: 'Learn & Practice',
                description: 'Complete interactive lessons, projects, and quizzes at your own pace',
              },
              {
                step: '03',
                title: 'Earn Achievements',
                description: 'Collect badges, track progress, and celebrate your milestones',
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-nebula text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4">
        <Container size="lg">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              What's Included in Each Path
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '📚', title: 'Structured Curriculum', desc: 'Step-by-step lessons designed by experts' },
                { icon: '💻', title: 'Hands-on Projects', desc: 'Build real-world applications and portfolios' },
                { icon: '🎯', title: 'Practice Exercises', desc: 'Reinforce learning with interactive challenges' },
                { icon: '✅', title: 'Quizzes & Assessments', desc: 'Test your knowledge and track progress' },
                { icon: '🏆', title: 'Achievement Badges', desc: 'Earn recognition for your accomplishments' },
                { icon: '👥', title: 'Peer Support', desc: 'Connect with fellow learners in the community' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
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
            <Badge variant="stardust" size="lg">
              🚀 Launching Soon
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Get Ready to Level Up
            </h2>
            <p className="text-gray-400 text-lg">
              We're creating an amazing learning experience. Be the first to know when we launch!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-nebula-400"
              />
              <Button variant="primary">Notify Me</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
