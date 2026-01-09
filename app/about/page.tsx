import { Container } from '@/components/ui';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

export const metadata = {
  title: 'About - STEM•SPARK',
  description: 'Learn about STEM•SPARK and how we support women in STEM',
};

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="primary" size="lg">
            About the Project
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold">
            <span className="text-primary-600 dark:text-primary-400">STEM</span>
            <span className="text-neutral-400">•</span>
            <span className="text-primary-600 dark:text-primary-400">SPARK</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            An open platform supporting women in STEM through practical resources 
            and meaningful connections.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold">What We Do</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  STEM•SPARK provides structured courses, facilitates mentorship connections, 
                  and hosts community discussions for women in science, technology, engineering, 
                  and mathematics.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  The platform focuses on practical skills, real career paths, and creating 
                  genuine connections between women at different stages of their STEM journeys.
                </p>
                <ul className=\"space-y-3 pt-4\">\n                  {[\n                    'Self-paced STEM courses',\n                    'Mentor-mentee matching',\n                    'Community forum discussions',\n                    'Career path information',\n                  ].map((item, index) => (\n                    <li key={index} className=\"flex items-start gap-3\">\n                      <span className=\"flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2\"></span>\n                      <span className=\"text-neutral-600 dark:text-neutral-400\">{item}</span>\n                    </li>\n                  ))}\n                </ul>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold">Why It Matters</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Women remain significantly underrepresented in many STEM fields. This gap 
                  persists despite decades of awareness and various initiatives.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  This platform exists to provide concrete resources—courses, mentors, and 
                  community—that can help address this imbalance through practical support 
                  rather than just awareness.
                </p>
                <ul className=\"space-y-3 pt-4\">\n                  {[\n                    'Address representation gaps',\n                    'Share practical knowledge',\n                    'Build professional networks',\n                    'Support career transitions',\n                  ].map((item, index) => (\n                    <li key={index} className=\"flex items-start gap-3\">\n                      <span className=\"flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2\"></span>\n                      <span className=\"text-neutral-600 dark:text-neutral-400\">{item}</span>\n                    </li>\n                  ))}\n                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="space-y-6">
              <div>
                <Badge variant="primary" className="mb-4">Creator</Badge>
                <h2 className="font-display text-3xl font-bold mb-4">Prakriti Bista</h2>
              </div>
              
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  I'm building this platform because I've seen how valuable structured learning, 
                  mentorship, and community can be for people entering or advancing in STEM fields.
                </p>
                <p>
                  Throughout my career, I've benefited from these resources myself and noticed 
                  how fragmented they often are. This project is an attempt to consolidate them 
                  in one place, specifically for women in STEM.
                </p>
                <p>
                  The platform is open source. If you're interested in contributing code, content, 
                  or ideas, I welcome your involvement.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={SOCIAL_LINKS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Website
                </a>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  GitHub
                </a>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Built With
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Modern web technologies for performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js 14', desc: 'React Framework' },
              { name: 'TypeScript', desc: 'Type Safety' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Vercel', desc: 'Deployment' },
            ].map((tech, index) => (
              <Card key={index} className="text-center">
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{tech.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Open Source Project
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            STEM•SPARK is open source under the MIT license. Contributions from developers, 
            designers, educators, and content creators are welcome.
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
      </section>

      {/* Get Involved */}
      <section className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Get Involved
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Questions, suggestions, or interested in contributing? 
            Open an issue on GitHub or join the community discussions.
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
      </section>
    </div>
  );
}
