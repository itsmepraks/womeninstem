import { Container, Card, Button, Badge } from '@/components/ui';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Award, 
  Heart, 
  Sparkles,
  Target,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  UserCheck,
  Mail,
  Rocket
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/components/ui/Badge';

export const metadata = {
  title: 'Mentorship - STEM•SPARK',
  description: 'Connect with inspiring women leading the way in STEM fields',
};

// Define valid color type to match Badge variants
type BadgeVariant = NonNullable<BadgeProps['variant']>;

export default function MentorshipPage() {
  const mentorshipTypes = [
    {
      icon: <Users className="w-8 h-8" strokeWidth={2} />,
      title: '1-on-1 Mentorship',
      description: 'Get personalized guidance from experienced professionals',
      features: ['Regular meetings', 'Career advice', 'Skill development'],
      color: 'nebula' as BadgeVariant,
    },
    {
      icon: <MessageCircle className="w-8 h-8" strokeWidth={2} />,
      title: 'Group Sessions',
      description: 'Learn alongside peers in small group mentoring',
      features: ['Peer learning', 'Shared experiences', 'Network building'],
      color: 'aurora' as BadgeVariant,
    },
    {
      icon: <Award className="w-8 h-8" strokeWidth={2} />,
      title: 'Expert Workshops',
      description: 'Attend workshops led by industry experts',
      features: ['Skill-focused', 'Interactive', 'Q&A sessions'],
      color: 'cosmic' as BadgeVariant,
    },
  ];

  const mentorProfiles = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Scientist',
      company: 'Tech Innovation Lab',
      expertise: ['Machine Learning', 'AI Ethics', 'Research'],
      availability: 'Open for mentees',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Senior Software Engineer',
      company: 'Cloud Systems Inc',
      expertise: ['Full-Stack Dev', 'Cloud Architecture', 'Leadership'],
      availability: 'Limited spots',
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Biomedical Engineer',
      company: 'HealthTech Solutions',
      expertise: ['Medical Devices', 'Research', 'Innovation'],
      availability: 'Open for mentees',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <Container size="lg">
          <div className="text-center space-y-8">
            <Badge variant="aurora" size="lg" dot className="inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" strokeWidth={2.5} />
              Coming Soon
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-aurora-400">Find Your</span>
              {' '}
              <span className="text-nebula-400">Mentor</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with inspiring women who are leading the way in STEM. Get guidance,
              support, and insights to accelerate your journey.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <Users className="w-4 h-4 text-nebula-400" strokeWidth={2.5} />
                100+ Mentors
              </span>
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <Target className="w-4 h-4 text-aurora-400" strokeWidth={2.5} />
                All Industries
              </span>
              <span className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 hover:bg-white/10 transition-elegant">
                <Sparkles className="w-4 h-4 text-stardust-400" strokeWidth={2.5} />
                Free Platform
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Mentorship Types */}
      <section className="py-20 px-4">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              How Mentorship Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the mentorship style that works best for your learning goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mentorshipTypes.map((type, index) => (
              <Card key={index} hover>
                <div className="space-y-6">
                  <div className={cn(
                    'inline-flex p-4 rounded-xl',
                    {
                      'bg-nebula-500/20 text-nebula-400': type.color === 'nebula',
                      'bg-aurora-500/20 text-aurora-400': type.color === 'aurora',
                      'bg-cosmic-blue-500/20 text-cosmic-blue-400': type.color === 'cosmic',
                      'bg-stardust-500/20 text-stardust-400': type.color === 'stardust',
                      'bg-supernova-500/20 text-supernova-400': type.color === 'supernova',
                    }
                  )}>
                    {type.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-2 text-white">
                      {type.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{type.description}</p>
                    
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-aurora-400" strokeWidth={2.5} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Mentors Preview */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Meet Our Mentors
            </h2>
            <p className="text-gray-400 text-lg">
              Preview of the amazing mentors joining our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mentorProfiles.map((mentor, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  {/* Avatar with Icon */}
                  <div className="w-20 h-20 rounded-full bg-nebula-600 shadow-glow-nebula flex items-center justify-center">
                    <UserCheck className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1 text-white">
                      {mentor.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{mentor.role}</p>
                    <p className="text-gray-500 text-xs">{mentor.company}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="cosmic" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-aurora-400 animate-pulse-subtle"></div>
                      <span className="text-gray-400">{mentor.availability}</span>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full">
                    View Profile →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Mentorship Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" strokeWidth={2.5} />,
                title: 'Career Guidance',
                desc: 'Get insights into different career paths and make informed decisions about your future',
                color: 'text-nebula-400',
                bgColor: 'bg-nebula-500/10'
              },
              {
                icon: <Lightbulb className="w-6 h-6" strokeWidth={2.5} />,
                title: 'Skill Development',
                desc: 'Learn practical skills and industry best practices from experienced professionals',
                color: 'text-stardust-400',
                bgColor: 'bg-stardust-500/10'
              },
              {
                icon: <Users className="w-6 h-6" strokeWidth={2.5} />,
                title: 'Network Building',
                desc: 'Connect with professionals and expand your network in the STEM community',
                color: 'text-cosmic-blue-400',
                bgColor: 'bg-cosmic-blue-500/10'
              },
              {
                icon: <Rocket className="w-6 h-6" strokeWidth={2.5} />,
                title: 'Confidence Boost',
                desc: 'Gain confidence and motivation from someone who has walked the path before you',
                color: 'text-aurora-400',
                bgColor: 'bg-aurora-500/10'
              },
              {
                icon: <TrendingUp className="w-6 h-6" strokeWidth={2.5} />,
                title: 'Personal Growth',
                desc: 'Develop both professionally and personally with ongoing support and feedback',
                color: 'text-supernova-400',
                bgColor: 'bg-supernova-500/10'
              },
              {
                icon: <Sparkles className="w-6 h-6" strokeWidth={2.5} />,
                title: 'Inspiration',
                desc: 'Be inspired by successful women breaking barriers in STEM fields',
                color: 'text-nebula-400',
                bgColor: 'bg-nebula-500/10'
              },
            ].map((benefit, index) => (
              <div key={index} className="glass p-6 rounded-premium flex gap-4 group hover:bg-white/10 transition-elegant">
                <div className={cn('flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform-elegant', benefit.color, benefit.bgColor)}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <Container size="md">
          <div className="glass-strong rounded-premium p-8 md:p-12 text-center space-y-6 shadow-elegant-lg">
            <div className="inline-flex p-4 rounded-full bg-aurora-500/20 mb-4">
              <Calendar className="w-16 h-16 text-aurora-400" strokeWidth={2} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Ready to Find Your Mentor?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We&apos;re building connections that will shape the future of women in STEM.
              Join the waitlist to be first in line!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-aurora-400 focus:border-transparent transition-elegant hover:border-white/20"
              />
              <Button variant="primary" className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" strokeWidth={2.5} />
                Join Waitlist
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Or{' '}
              <Link href="/community" className="text-nebula-400 hover:text-nebula-300 transition-colors-elegant">
                join the community
              </Link>
              {' '}to connect with peers
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
