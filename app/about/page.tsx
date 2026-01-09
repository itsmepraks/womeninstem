import { Container } from '@/components/ui';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

export const metadata = {
  title: 'About - STEM•SPARK',
  description: 'Learn about STEM•SPARK and our mission to support women in STEM',
};

export default function AboutPage() {
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

      {/* Mission */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Our Purpose</h2>
                <p className="text-gray-600 leading-relaxed">
                  Women remain underrepresented in many STEM fields. STEM•SPARK provides 
                  practical resources, mentorship connections, and community support to 
                  help address this gap.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We focus on creating tools and connections that have real impact on 
                  women's STEM careers - from learning resources to mentor matching to 
                  community forums.
                </p>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
                <ul className="space-y-3">
                  {[
                    'Structured STEM courses and learning paths',
                    'Mentorship matching with experienced professionals',
                    'Community forums for discussion and support',
                    'Career resources and job information',
                    'Progress tracking and achievement recognition',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
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
                <div className="text-lg font-semibold text-primary-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="space-y-6">
              <div>
                <Badge variant="primary" size="sm">Creator</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">
                  Prakriti Bista
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  As a woman in tech, I&apos;ve experienced firsthand the challenges and opportunities
                  in STEM. STEM•SPARK was born from a desire to create the platform I wished I
                  had when starting my journey—a place where women can learn, connect, and thrive
                  together.
                </p>
                <p>
                  This platform aims to make those resources more accessible to women entering or 
                  advancing in STEM fields. The project is open source and focused on creating 
                  practical, useful tools rather than flashy features.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <a
                  href={SOCIAL_LINKS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Website
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  GitHub
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology
            </h2>
            <p className="text-gray-600">
              Built with modern web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js 14', desc: 'React Framework' },
              { name: 'TypeScript', desc: 'Type Safety' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Vercel', desc: 'Deployment' },
            ].map((tech, index) => (
              <Card key={index}>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
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
          </Card>
        </div>
      </section>
    </div>
  );
}
