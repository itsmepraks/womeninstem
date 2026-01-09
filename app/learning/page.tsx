import { Container, Card, Button, Badge } from '@/components/ui';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/components/ui/Badge';

export const metadata = {
  title: 'Learning Paths - STEM•SPARK',
  description: 'Browse structured STEM learning paths and courses',
};

// Define valid color type to match Badge variants
type BadgeVariant = NonNullable<BadgeProps['variant']>;

export default function LearningPage() {
  const learningPaths = [
    {
      title: 'Programming & Computer Science',
      description: 'Python fundamentals to advanced algorithms',
      level: 'Beginner to Advanced',
      courses: 12,
      color: 'nebula' as BadgeVariant,
    },
    {
      title: 'Data Science & Analytics',
      description: 'Data analysis, visualization, and statistics',
      level: 'Intermediate',
      courses: 8,
      color: 'cosmic' as BadgeVariant,
    },
    {
      title: 'Engineering Fundamentals',
      description: 'Core engineering principles and design',
      level: 'Beginner',
      courses: 10,
      color: 'aurora' as BadgeVariant,
    },
    {
      title: 'Scientific Research',
      description: 'Research methods and scientific inquiry',
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
              <Badge variant="nebula" size="lg">
                In Development
              </Badge>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text bg-gradient-nebula">Learning Paths</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Structured courses for different STEM fields. Learn at your own pace
              and track your progress.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="glass px-4 py-2 rounded-full">50+ Courses</span>
              <span className="glass px-4 py-2 rounded-full">Self-Paced</span>
              <span className="glass px-4 py-2 rounded-full">Progress Tracking</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Learning Paths Preview */}
      <section className="py-20 px-4">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Available Paths
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose a focus area and start learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} hover className="group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-2xl font-semibold">
                      {path.title}
                    </h3>
                    <Badge variant={path.color} size="sm">
                      {path.courses} courses
                    </Badge>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 mb-3">{path.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="text-gray-300">{path.level}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="ghost" className="w-full">
                      View Path →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
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
                description: 'Select a learning path that matches your goals',
              },
              {
                step: '02',
                title: 'Complete Courses',
                description: 'Work through lessons, projects, and exercises',
              },
              {
                step: '03',
                title: 'Track Progress',
                description: 'Monitor your completion and skill development',
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
              What's Included
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Structured Curriculum', desc: 'Step-by-step lessons and materials' },
                { title: 'Practice Projects', desc: 'Build real applications' },
                { title: 'Exercises', desc: 'Reinforce concepts through practice' },
                { title: 'Assessments', desc: 'Test your understanding' },
                { title: 'Progress Tracking', desc: 'See your completion status' },
                { title: 'Community Access', desc: 'Connect with other learners' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-nebula-400"></div>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Get Notified When We Launch
            </h2>
            <p className="text-gray-400 text-lg">
              We're creating the course content. Sign up to be notified when it's ready.
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
