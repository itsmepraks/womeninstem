import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SOCIAL_LINKS } from '@/lib/constants';

export const metadata = {
  title: 'About - STEM•SPARK',
  description: 'Learn about our mission to support women in STEM fields',
};

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="primary">About Us</Badge>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-100">
            Building Resources for Women in STEM
          </h1>
          
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            STEM•SPARK is an open-source platform providing structured learning paths, 
            mentorship connections, and community resources for women pursuing STEM careers.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  What We Do
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We create and curate educational content, facilitate mentorship connections, 
                  and maintain discussion forums focused on women in science, technology, 
                  engineering, and mathematics.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  The platform emphasizes practical skills, real-world applications, and creating 
                  opportunities for women to connect with others in their field.
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    'Structured learning paths for STEM subjects',
                    'Mentorship matching system',
                    'Community discussion forums',
                    'Career resources and guidance',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  Why It Matters
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Women remain significantly underrepresented in many STEM fields. This platform 
                  addresses that gap by providing resources, connections, and support systems.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  By creating a dedicated space for women in STEM, we can share experiences, 
                  learn from each other, and build sustainable careers in these fields.
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    'Address gender representation gaps',
                    'Share practical knowledge and experiences',
                    'Build professional networks',
                    'Support long-term career development',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Project Status
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'License', value: 'MIT' },
                { label: 'Founded', value: '2026' },
                { label: 'Status', value: 'Active Development' },
                { label: 'Type', value: 'Open Source' },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Core Principles
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Values guiding our development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Accessibility',
                description: 'Making STEM education accessible to all women regardless of background or experience level',
              },
              {
                title: 'Quality',
                description: 'Providing accurate, well-researched content that serves practical educational needs',
              },
              {
                title: 'Community',
                description: 'Building meaningful connections that support learning and professional growth',
              },
              {
                title: 'Transparency',
                description: 'Open development process with clear communication about goals and progress',
              },
            ].map((principle, index) => (
              <Card key={index}>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {principle.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="space-y-6">
              <div>
                <Badge variant="primary" className="mb-4">Creator</Badge>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  Prakriti Bista
                </h2>
              </div>
              
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  I'm a developer building this platform to address challenges I've observed in 
                  the STEM community. Throughout my career, I've seen the value of having mentors, 
                  structured resources, and a supportive community.
                </p>
                <p>
                  This project creates those resources in one place, making it easier for women 
                  entering or advancing in STEM fields to find the support they need.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={SOCIAL_LINKS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Website
                </a>
                <span className="text-neutral-400">•</span>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  GitHub
                </a>
                <span className="text-neutral-400">•</span>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Technology
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Built with modern web technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js 14', desc: 'Framework' },
              { name: 'TypeScript', desc: 'Language' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Vercel', desc: 'Deployment' },
            ].map((tech, index) => (
              <Card key={index}>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{tech.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{tech.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="text-center space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                Open Source Project
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400">
                STEM•SPARK is open source. Contributions from developers, designers, 
                and content creators are welcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">View Repository</Button>
                </a>
                <Link href="/community">
                  <Button variant="secondary" size="lg">Join Community</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
