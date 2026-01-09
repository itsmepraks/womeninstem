import { Container, Card, Button, Badge } from '@/components/ui';
import { Users, MessageCircle, Calendar, Award, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Mentorship - STEM•SPARK',
  description: 'Connect with inspiring women leading the way in STEM fields',
};

export default function MentorshipPage() {
  const mentorshipTypes = [
    {
      icon: <Users className="w-8 h-8" />,
      title: '1-on-1 Mentorship',
      description: 'Get personalized guidance from experienced professionals',
      features: ['Regular meetings', 'Career advice', 'Skill development'],
      color: 'nebula',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Group Sessions',
      description: 'Learn alongside peers in small group mentoring',
      features: ['Peer learning', 'Shared experiences', 'Network building'],
      color: 'aurora',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Workshops',
      description: 'Attend workshops led by industry experts',
      features: ['Skill-focused', 'Interactive', 'Q&A sessions'],
      color: 'cosmic',
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
            <Badge variant="aurora" size="lg" dot>
              Coming Soon
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text bg-gradient-aurora">Find Your</span>{' '}
              <span className="gradient-text bg-gradient-nebula">Mentor</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with inspiring women who are leading the way in STEM. Get guidance,
              support, and insights to accelerate your journey.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="glass px-4 py-2 rounded-full">
                <Users className="w-4 h-4 inline mr-2" />
                100+ Mentors
              </span>
              <span className="glass px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 inline mr-2" />
                All Industries
              </span>
              <span className="glass px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 inline mr-2" />
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
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
                  <div className={`inline-flex p-4 rounded-xl bg-${type.color}-500/20 text-${type.color}-400`}>
                    {type.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{type.description}</p>
                    
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
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
      <section className="py-20 px-4 bg-white/5">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
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
                  {/* Avatar Placeholder */}
                  <div className="w-20 h-20 rounded-full bg-gradient-nebula flex items-center justify-center text-3xl">
                    👩‍🔬
                  </div>
                  
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">
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
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Mentorship Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Career Guidance',
                desc: 'Get insights into different career paths and make informed decisions about your future',
              },
              {
                icon: '💡',
                title: 'Skill Development',
                desc: 'Learn practical skills and industry best practices from experienced professionals',
              },
              {
                icon: '🤝',
                title: 'Network Building',
                desc: 'Connect with professionals and expand your network in the STEM community',
              },
              {
                icon: '🚀',
                title: 'Confidence Boost',
                desc: 'Gain confidence and motivation from someone who has walked the path before you',
              },
              {
                icon: '📈',
                title: 'Personal Growth',
                desc: 'Develop both professionally and personally with ongoing support and feedback',
              },
              {
                icon: '🌟',
                title: 'Inspiration',
                desc: 'Be inspired by successful women breaking barriers in STEM fields',
              },
            ].map((benefit, index) => (
              <div key={index} className="glass p-6 rounded-xl flex gap-4">
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
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
          <div className="glass rounded-3xl p-8 md:p-12 text-center space-y-6">
            <Calendar className="w-16 h-16 mx-auto text-nebula-400" />
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Ready to Find Your Mentor?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're building connections that will shape the future of women in STEM.
              Join the waitlist to be first in line!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-aurora-400"
              />
              <Button variant="primary">Join Waitlist</Button>
            </div>
            <p className="text-sm text-gray-500">
              Or{' '}
              <Link href="/community" className="text-nebula-400 hover:text-nebula-300">
                join the community
              </Link>{' '}
              to connect with peers
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
