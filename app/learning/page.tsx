import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Learning Paths - STEM•SPARK',
  description: 'Structured STEM courses for different skill levels',
};

export default function LearningPage() {
  const learningPaths = [
    {
      title: 'Programming & Computer Science',
      description: 'From Python fundamentals to advanced algorithms and data structures',
      level: 'Beginner to Advanced',
      courses: 12,
    },
    {
      title: 'Data Science & Analytics',
      description: 'Data analysis, visualization, statistics, and machine learning basics',
      level: 'Intermediate',
      courses: 8,
    },
    {
      title: 'Engineering Fundamentals',
      description: 'Core engineering principles, design thinking, and problem-solving',
      level: 'Beginner',
      courses: 10,
    },
    {
      title: 'Scientific Research',
      description: 'Research methodology, data collection, and scientific writing',
      level: 'All Levels',
      courses: 6,
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
            Learning Paths
          </h1>
          
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Structured courses covering STEM fundamentals to advanced topics. 
            Learn at your own pace with clear progression and practical exercises.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <Badge variant="neutral">50+ Courses</Badge>
            <Badge variant="neutral">Self-Paced</Badge>
            <Badge variant="neutral">Progress Tracking</Badge>
          </div>
        </div>
      </section>

      {/* Learning Paths Grid */}
      <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Available Paths
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Choose a focus area that matches your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {path.title}
                    </h3>
                    <Badge variant="primary">{path.courses} courses</Badge>
                  </div>
                  
                  <p className="text-neutral-600 dark:text-neutral-400">{path.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-neutral-500 dark:text-neutral-500">Level:</span>
                    <span className="text-neutral-700 dark:text-neutral-300">{path.level}</span>
                  </div>

                  <div className="pt-4">
                    <Button variant="ghost" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Path',
                description: 'Select a learning path that aligns with your interests and career goals',
              },
              {
                step: '2',
                title: 'Complete Courses',
                description: 'Work through structured lessons, exercises, and projects',
              },
              {
                step: '3',
                title: 'Track Progress',
                description: 'Monitor your completion and build your portfolio',
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-100">
                What's Included
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Structured Curriculum', desc: 'Step-by-step lessons organized by difficulty' },
                  { title: 'Practice Exercises', desc: 'Hands-on problems to reinforce concepts' },
                  { title: 'Projects', desc: 'Build real applications to demonstrate skills' },
                  { title: 'Assessments', desc: 'Track your understanding with quizzes' },
                  { title: 'Progress Tracking', desc: 'See your completion status and achievements' },
                  { title: 'Community Support', desc: 'Ask questions and learn from others' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-1">{item.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Badge variant="accent">Currently Building</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Course Content In Development
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            We're creating course materials and exercises. Get notified when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Button variant="primary">Notify Me</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
