import type { Metadata } from 'next';
import PageTransition from '@/components/ui/PageTransition';
import Feedback from '@/components/ui/Feedback';
import PathfinderExperience from '@/components/pathfinder/PathfinderExperience';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'STEM Pathfinder | Find Scholarships, Courses, and Communities',
    description:
      'Answer a few private, no-login questions and get matched with scholarships, courses, communities, events, and career resources for women in STEM.',
    path: '/pathfinder',
  }),
};

export default function PathfinderPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1120px] px-6 pb-12 md:px-10">
        <PathfinderExperience />
        <Feedback />
      </div>
    </PageTransition>
  );
}
