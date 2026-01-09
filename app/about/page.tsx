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
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            About STEM•SPARK
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A platform supporting women pursuing careers in science, technology, 
            engineering, and mathematics.
          </p>
        </div>
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
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Project Information
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Status', value: 'Active Development' },
              { label: 'License', value: 'MIT (Open Source)' },
              { label: 'Founded', value: '2026' },
              { label: 'Focus', value: 'Women in STEM' },
            ].map((stat, index) => (
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
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a developer building STEM•SPARK to address challenges I've observed in the 
                  STEM community. Throughout my career, I've seen the value of having access to 
                  mentors, structured learning, and supportive communities.
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

      {/* Open Source CTA */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Open Source Project
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                STEM•SPARK is open source. Contributions from developers, designers, 
                and content creators are welcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    View on GitHub
                  </Button>
                </a>
                <Link href="/community">
                  <Button variant="secondary" size="lg">
                    Join Community
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
