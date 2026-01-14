/**
 * About page component
 */
import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="h-full w-full p-8 md:p-12 overflow-y-auto scrollbar-book">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="chapter-number">Chapter 1</div>
        <h2 className="chapter-heading">About STEM•SPARK</h2>
        <div className="ornamental-divider" />

        <div className="body-text space-y-6">
          <p className="drop-cap">
            STEM•SPARK was created with a vision: to ignite curiosity and empower
            women to pursue their passions in Science, Technology, Engineering,
            and Mathematics. We believe that diversity in STEM isn't just
            important—it's essential for innovation and progress.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="text-center p-4">
              <Target className="w-12 h-12 text-burgundy-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-lg mb-2">Our Mission</h3>
              <p className="text-sm text-ink-light">
                To provide accessible, engaging STEM education and resources for
                women of all backgrounds.
              </p>
            </div>
            <div className="text-center p-4">
              <Users className="w-12 h-12 text-sepia-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-lg mb-2">Our Community</h3>
              <p className="text-sm text-ink-light">
                A supportive network of learners, mentors, and professionals
                committed to growth.
              </p>
            </div>
            <div className="text-center p-4">
              <Lightbulb className="w-12 h-12 text-gold-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-lg mb-2">Our Vision</h3>
              <p className="text-sm text-ink-light">
                A world where women thrive in STEM fields, driving innovation and
                positive change.
              </p>
            </div>
          </div>

          <p>
            Through interactive learning experiences, mentorship opportunities,
            and a vibrant community, we're breaking down barriers and building
            pathways to success in STEM careers.
          </p>
        </div>
      </div>
    </div>
  );
}
