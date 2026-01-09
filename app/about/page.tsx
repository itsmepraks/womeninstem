import { Container, Card, Button, Badge } from '@/components/ui';
import { Target, Heart, Users, Sparkles, Mail, Github, Linkedin, Globe } from 'lucide-react';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'About - STEM•SPARK',
  description: 'Learn about our mission to empower girls and women in STEM through interactive learning and community',
};

export default function AboutPage() {
  const stats = [
    { value: '1,000+', label: 'Future Members' },
    { value: '50+', label: 'Learning Paths' },
    { value: '100+', label: 'Mentors' },
    { value: '24/7', label: 'Community Support' },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Inclusivity',
      description: 'Creating a welcoming space for all women in STEM, regardless of background or experience level',
      color: 'supernova',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Providing high-quality content and experiences that inspire learning and growth',
      color: 'stardust',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building meaningful connections that foster collaboration and support',
      color: 'aurora',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Empowerment',
      description: 'Equipping women with skills, confidence, and opportunities to thrive in STEM',
      color: 'nebula',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <Container size="lg">
          <div className="text-center space-y-8">
            <Badge variant="nebula" size="lg">
              ✨ Our Story
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text bg-gradient-nebula">Empowering</span>{' '}
              <span className="gradient-text bg-gradient-aurora">Women</span>{' '}
              in STEM
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              STEM•SPARK is more than a platform—it&apos;s a movement to ignite curiosity,
              foster connections, and break down barriers for women in STEM.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <Container size="xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card hover className="group">
              <div className="space-y-4">
                <div className="inline-flex p-4 rounded-xl bg-nebula-500/20 text-nebula-400 group-hover:scale-110 transition-transform">
                  <Target className="w-10 h-10" />
                </div>
                
                <h2 className="font-display text-3xl font-bold">Our Mission</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  To create an inclusive, engaging platform that empowers girls and women to
                  explore, learn, and excel in STEM fields through interactive education,
                  mentorship, and community support.
                </p>

                <ul className="space-y-3 pt-4">
                  {[
                    'Make STEM education accessible and engaging',
                    'Connect learners with inspiring mentors',
                    'Build a supportive, inclusive community',
                    'Provide resources for career success',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-nebula-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card hover className="group">
              <div className="space-y-4">
                <div className="inline-flex p-4 rounded-xl bg-aurora-500/20 text-aurora-400 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-10 h-10" />
                </div>
                
                <h2 className="font-display text-3xl font-bold">Our Vision</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  A world where every woman has the opportunity, confidence, and support to
                  pursue and thrive in STEM careers, breaking down barriers and inspiring
                  future generations.
                </p>

                <ul className="space-y-3 pt-4">
                  {[
                    'Close the gender gap in STEM fields',
                    'Inspire the next generation of innovators',
                    'Create lasting impact through education',
                    'Build a global network of women in STEM',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-aurora-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-white/5">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Building Something Special
            </h2>
            <p className="text-gray-400 text-lg">
              Here&apos;s what we&apos;re creating for you
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-text bg-gradient-nebula">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  <div className={cn(
                    'inline-flex p-3 rounded-xl',
                    {
                      'bg-nebula-500/20 text-nebula-400': value.color === 'nebula',
                      'bg-aurora-500/20 text-aurora-400': value.color === 'aurora',
                      'bg-cosmic-500/20 text-cosmic-400': value.color === 'cosmic',
                      'bg-stardust-500/20 text-stardust-400': value.color === 'stardust',
                      'bg-supernova-500/20 text-supernova-400': value.color === 'supernova',
                    }
                  )}>
                    {value.icon}
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Creator Section */}
      <section className="py-20 px-4 bg-white/5">
        <Container size="lg">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge variant="nebula">Meet the Creator</Badge>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Built with 💜 by Prakriti Bista
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  As a woman in tech, I&apos;ve experienced firsthand the challenges and opportunities
                  in STEM. STEM•SPARK was born from a desire to create the platform I wished I
                  had when starting my journey—a place where women can learn, connect, and thrive
                  together.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  This project combines my passion for education, community building, and
                  empowering the next generation of women in STEM.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={SOCIAL_LINKS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-square rounded-3xl bg-gradient-nebula flex items-center justify-center text-9xl">
                  👩‍💻
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-gray-400 text-lg">
              Leveraging the best tools for a stellar experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js 14', desc: 'React Framework' },
              { name: 'TypeScript', desc: 'Type Safety' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Framer Motion', desc: 'Animations' },
            ].map((tech, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center space-y-2">
                <div className="text-3xl">⚡</div>
                <h3 className="font-semibold">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Source */}
      <section className="py-20 px-4 bg-white/5">
        <Container size="lg">
          <div className="text-center space-y-6">
            <Github className="w-16 h-16 mx-auto text-nebula-400" />
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Open Source & Community Driven
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              STEM•SPARK is open source and built in public. We welcome contributions from
              developers, designers, and content creators who share our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">View on GitHub</Button>
              </a>
              <a href={`${SOCIAL_LINKS.github}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">Contribution Guide</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <Container size="md">
          <div className="text-center space-y-6">
            <Mail className="w-16 h-16 mx-auto text-aurora-400" />
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Have questions, suggestions, or want to get involved? We&apos;d love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/community">
                <Button variant="primary">Join Community</Button>
              </Link>
              <a href={`${SOCIAL_LINKS.github}/issues`} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">Report Issue</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
