import { Container, Card, Button, Badge } from '@/components/ui';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'About - STEM•SPARK',
  description: 'Learn about STEM•SPARK and our mission to support women in STEM',
};

export default function AboutPage() {
  const stats = [
    { value: 'Open', label: 'Source Project' },
    { value: '2026', label: 'Founded' },
    { value: 'Active', label: 'Development' },
    { value: 'MIT', label: 'License' },
  ];

  const values = [
    {
      title: 'Accessibility',
      description: 'Making STEM education accessible to all women, regardless of background',
      color: 'supernova',
    },
    {
      title: 'Quality',
      description: 'Providing well-researched, accurate content',
      color: 'stardust',
    },
    {
      title: 'Community',
      description: 'Building connections that support learning and growth',
      color: 'aurora',
    },
    {
      title: 'Practical Focus',
      description: 'Teaching skills that are directly applicable to STEM careers',
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
              About Us
            </Badge>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text bg-gradient-nebula">STEM</span>
              <span className="text-stardust-400">•</span>
              <span className="gradient-text bg-gradient-aurora">SPARK</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A platform for women in STEM to learn, connect, and share knowledge.
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
                <h2 className="font-display text-3xl font-bold">What We Do</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  STEM•SPARK provides structured courses, mentorship connections, and 
                  community discussions for women pursuing STEM careers.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  The platform focuses on practical skills, real-world applications, 
                  and creating opportunities for women to connect with others in their field.
                </p>

                <ul className="space-y-3 pt-4">
                  {[
                    'Structured STEM courses',
                    'Mentorship matching',
                    'Community forums',
                    'Career resources',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-nebula flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card hover className="group">
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold">Why It Matters</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Women remain underrepresented in many STEM fields. This platform aims 
                  to address that by providing resources and connections.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  By creating a space dedicated to women in STEM, we can share experiences, 
                  learn from each other, and build careers in these fields.
                </p>

                <ul className="space-y-3 pt-4">
                  {[
                    'Address gender gaps in STEM',
                    'Share practical knowledge',
                    'Build professional networks',
                    'Support career development',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-aurora flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
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
              Project Status
            </h2>
            <p className="text-gray-400 text-lg">
              Currently in active development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold gradient-text bg-gradient-nebula">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
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
              Core Principles
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The values that guide our development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-nebula text-lg font-bold">
                    {index + 1}
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
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="nebula">Creator</Badge>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Prakriti Bista
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    I'm a developer building this platform to address a real need I've observed 
                    in the STEM community.
                  </p>
                  <p>
                    Throughout my career, I've seen how valuable it can be to have mentors, 
                    structured learning resources, and a community of people facing similar challenges.
                  </p>
                  <p>
                    This project is an effort to create those resources in one place, making it 
                    easier for women entering or advancing in STEM fields.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={SOCIAL_LINKS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Website
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
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
              Technology Stack
            </h2>
            <p className="text-gray-400 text-lg">
              Built with modern web technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js 14', desc: 'React Framework' },
              { name: 'TypeScript', desc: 'Type Safety' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Vercel', desc: 'Deployment' },
            ].map((tech, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center space-y-2">
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
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Open Source
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              STEM•SPARK is open source. Contributions from developers, designers, 
              and content creators are welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">View Repository</Button>
              </a>
              <a href={`${SOCIAL_LINKS.github}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">Contributing Guide</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Get Involved
            </h2>
            <p className="text-gray-400 text-lg">
              Questions, suggestions, or want to contribute? Reach out through GitHub.
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
