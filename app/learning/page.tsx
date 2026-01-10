import { Container, Card, Button, Badge } from '@/components/ui';
import { 
  BookOpen, 
  Code, 
  Cpu, 
  FlaskConical, 
  GraduationCap, 
  LineChart,
  Sparkles,
  CheckCircle2,
  Users,
  Target,
  Trophy,
  Laptop,
  FileText,
  Rocket
} from 'lucide-react';
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
      icon: <Code className="w-8 h-8" strokeWidth={2} />,
      title: 'Programming & Computer Science',
      description: 'From Python basics to advanced algorithms',
      level: 'Beginner to Advanced',
      courses: 12,
      color: 'nebula' as BadgeVariant,
    },
    {
      icon: <LineChart className="w-8 h-8" strokeWidth={2} />,
      title: 'Data Science & Analytics',
      description: 'Master data analysis and visualization',
      level: 'Intermediate',
      courses: 8,
      color: 'cosmic' as BadgeVariant,
    },
    {
      icon: <Cpu className="w-8 h-8" strokeWidth={2} />,
      title: 'Engineering Fundamentals',
      description: 'Learn engineering principles and design',
      level: 'Beginner',
      courses: 10,
      color: 'aurora' as BadgeVariant,
    },
    {
      icon: <FlaskConical className="w-8 h-8" strokeWidth={2} />,
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
              <Badge variant="nebula" size="lg" dot className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                Coming Soon
              </Badge>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-nebula-400">Learning Paths</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Gamified STEM journeys designed for every skill level. Learn at your own pace,
              earn achievements, and build the skills to transform your future.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <GraduationCap className="w-4 h-4 text-nebula-400" strokeWidth={2.5} />
                50+ Courses
              </span>
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <BookOpen className="w-4 h-4 text-aurora-400" strokeWidth={2.5} />
                Interactive Lessons
              </span>
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <Trophy className="w-4 h-4 text-stardust-400" strokeWidth={2.5} />
                Earn Badges
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Learning Paths Preview */}
      <section className="py-20 px-4">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
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
                      'p-3 rounded-xl group-hover:scale-110 transition-transform-elegant',
                      {
                        'bg-nebula-500/20 text-nebula-400': path.color === 'nebula',
                        'bg-aurora-500/20 text-aurora-400': path.color === 'aurora',
                        'bg-cosmic-blue-500/20 text-cosmic-blue-400': path.color === 'cosmic',
                        'bg-stardust-500/20 text-stardust-400': path.color === 'stardust',
                        'bg-supernova-500/20 text-supernova-400': path.color === 'supernova',
                      }
                    )}>
                      {path.icon}
                    </div>
                    <Badge variant={path.color} size="sm" className="inline-flex items-center gap-1">
                      <BookOpen className="w-3 h-3" strokeWidth={2.5} />
                      {path.courses} courses
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-2 text-white">
                      {path.title}
                    </h3>
                    <p className="text-gray-400 mb-3">{path.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-gray-500" strokeWidth={2.5} />
                      <span className="text-gray-500">Level:</span>
                      <span className="text-gray-300">{path.level}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="ghost" className="w-full inline-flex items-center justify-center gap-2">
                      <span>Explore Path</span>
                      <span>→</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: <Target className="w-6 h-6" strokeWidth={2.5} />,
                title: 'Choose Your Path',
                description: 'Select a learning path that aligns with your interests and career goals',
                color: 'text-nebula-400',
              },
              {
                step: '02',
                icon: <BookOpen className="w-6 h-6" strokeWidth={2.5} />,
                title: 'Learn & Practice',
                description: 'Complete interactive lessons, projects, and quizzes at your own pace',
                color: 'text-aurora-400',
              },
              {
                step: '03',
                icon: <Trophy className="w-6 h-6" strokeWidth={2.5} />,
                title: 'Earn Achievements',
                description: 'Collect badges, track progress, and celebrate your milestones',
                color: 'text-stardust-400',
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nebula-600 text-2xl font-bold text-white shadow-glow-nebula">
                  {item.step}
                </div>
                <div className={cn('inline-flex p-3 rounded-lg bg-white/5', item.color)}>
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4">
        <Container size="lg">
          <div className="glass-strong rounded-premium p-8 md:p-12 shadow-elegant-lg">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              What&apos;s Included in Each Path
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <BookOpen className="w-6 h-6" strokeWidth={2.5} />, 
                  title: 'Structured Curriculum', 
                  desc: 'Step-by-step lessons designed by experts',
                  color: 'text-nebula-400',
                  bgColor: 'bg-nebula-500/10'
                },
                { 
                  icon: <Laptop className="w-6 h-6" strokeWidth={2.5} />, 
                  title: 'Hands-on Projects', 
                  desc: 'Build real-world applications and portfolios',
                  color: 'text-cosmic-blue-400',
                  bgColor: 'bg-cosmic-blue-500/10'
                },
                { 
                  icon: <Target className="w-6 h-6" strokeWidth={2.5} />, 
                  title: 'Practice Exercises', 
                  desc: 'Reinforce learning with interactive challenges',
                  color: 'text-aurora-400',
                  bgColor: 'bg-aurora-500/10'
                },
                { 
                  icon: <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />, 
                  title: 'Quizzes & Assessments', 
                  desc: 'Test your knowledge and track progress',
                  color: 'text-supernova-400',
                  bgColor: 'bg-supernova-500/10'
                },
                { 
                  icon: <Trophy className="w-6 h-6" strokeWidth={2.5} />, 
                  title: 'Achievement Badges', 
                  desc: 'Earn recognition for your accomplishments',
                  color: 'text-stardust-400',
                  bgColor: 'bg-stardust-500/10'
                },
                { 
                  icon: <Users className="w-6 h-6" strokeWidth={2.5} />, 
                  title: 'Peer Support', 
                  desc: 'Connect with fellow learners in the community',
                  color: 'text-aurora-400',
                  bgColor: 'bg-aurora-500/10'
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className={cn('flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform-elegant', item.color, item.bgColor)}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Learning Benefits */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Our Learning Paths
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience a modern approach to STEM education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Sparkles className="w-8 h-8" strokeWidth={2} />,
                title: 'Self-Paced Learning',
                description: 'Learn on your schedule, at your own speed',
                color: 'nebula',
              },
              {
                icon: <Users className="w-8 h-8" strokeWidth={2} />,
                title: 'Expert Guidance',
                description: 'Curated content from industry professionals',
                color: 'aurora',
              },
              {
                icon: <Trophy className="w-8 h-8" strokeWidth={2} />,
                title: 'Recognition',
                description: 'Certificates and badges to showcase your skills',
                color: 'stardust',
              },
            ].map((benefit, index) => (
              <Card key={index} hover className="text-center group">
                <div className={cn(
                  'inline-flex p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform-elegant',
                  {
                    'bg-nebula-500/20 text-nebula-400': benefit.color === 'nebula',
                    'bg-aurora-500/20 text-aurora-400': benefit.color === 'aurora',
                    'bg-stardust-500/20 text-stardust-400': benefit.color === 'stardust',
                  }
                )}>
                  {benefit.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <Container size="md">
          <div className="text-center space-y-6">
            <Badge variant="stardust" size="lg" className="inline-flex items-center gap-2">
              <Rocket className="w-4 h-4" strokeWidth={2.5} />
              Launching Soon
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Get Ready to Level Up
            </h2>
            <p className="text-gray-400 text-lg">
              We&apos;re creating an amazing learning experience. Be the first to know when we launch!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-nebula-400 focus:border-transparent transition-elegant hover:border-white/20"
              />
              <Button variant="primary" className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                Notify Me
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
