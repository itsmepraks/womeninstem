import BookReader from '@/components/book/BookReader';
import BookNavigation from '@/components/book/BookNavigation';
import TableOfContents, { TOCToggleButton } from '@/components/book/TableOfContents';
import { chapters } from '@/data/chapters';

// Import all page components
import CoverPage from '@/components/book/pages/CoverPage';
import WelcomePage from '@/components/book/pages/WelcomePage';
import IntroductionPage from '@/components/book/pages/IntroductionPage';
import HowToUsePage from '@/components/book/pages/HowToUsePage';

// About STEM•SPARK pages (4-9)
import AboutStem1 from '@/components/book/pages/AboutStem1';
import AboutStem2 from '@/components/book/pages/AboutStem2';
import AboutStem3 from '@/components/book/pages/AboutStem3';
import AboutStem4 from '@/components/book/pages/AboutStem4';
import AboutStem5 from '@/components/book/pages/AboutStem5';
import AboutStem6 from '@/components/book/pages/AboutStem6';

// Learning Resources pages (10-17)
import Resources1 from '@/components/book/pages/Resources1';
import Resources2 from '@/components/book/pages/Resources2';
import Resources3 from '@/components/book/pages/Resources3';
import Resources4 from '@/components/book/pages/Resources4';
import Resources5 from '@/components/book/pages/Resources5';
import Resources6 from '@/components/book/pages/Resources6';
import Resources7 from '@/components/book/pages/Resources7';
import Resources8 from '@/components/book/pages/Resources8';

// Success Stories pages (18-23)
import Stories1 from '@/components/book/pages/Stories1';
import Stories2 from '@/components/book/pages/Stories2';
import Stories3 from '@/components/book/pages/Stories3';
import Stories4 from '@/components/book/pages/Stories4';
import Stories5 from '@/components/book/pages/Stories5';
import Stories6 from '@/components/book/pages/Stories6';

// Get Involved pages (24-29)
import GetInvolved1 from '@/components/book/pages/GetInvolved1';
import GetInvolved2 from '@/components/book/pages/GetInvolved2';
import GetInvolved3 from '@/components/book/pages/GetInvolved3';
import GetInvolved4 from '@/components/book/pages/GetInvolved4';
import GetInvolved5 from '@/components/book/pages/GetInvolved5';
import GetInvolved6 from '@/components/book/pages/GetInvolved6';

// Contact pages (30-31)
import Contact1 from '@/components/book/pages/Contact1';
import Contact2 from '@/components/book/pages/Contact2';

/**
 * Main book reading experience
 * All 32 pages organized by chapters matching chapters.ts structure
 */
export default function ReadPage() {
  const bookPages = [
    // Chapter 1: Home/Welcome (Pages 0-3)
    <CoverPage key="page-0" />,
    <WelcomePage key="page-1" />,
    <IntroductionPage key="page-2" />,
    <HowToUsePage key="page-3" />,

    // Chapter 2: About STEM•SPARK (Pages 4-9)
    <AboutStem1 key="page-4" />,
    <AboutStem2 key="page-5" />,
    <AboutStem3 key="page-6" />,
    <AboutStem4 key="page-7" />,
    <AboutStem5 key="page-8" />,
    <AboutStem6 key="page-9" />,

    // Chapter 3: Learning Resources (Pages 10-17)
    <Resources1 key="page-10" />,
    <Resources2 key="page-11" />,
    <Resources3 key="page-12" />,
    <Resources4 key="page-13" />,
    <Resources5 key="page-14" />,
    <Resources6 key="page-15" />,
    <Resources7 key="page-16" />,
    <Resources8 key="page-17" />,

    // Chapter 4: Success Stories (Pages 18-23)
    <Stories1 key="page-18" />,
    <Stories2 key="page-19" />,
    <Stories3 key="page-20" />,
    <Stories4 key="page-21" />,
    <Stories5 key="page-22" />,
    <Stories6 key="page-23" />,

    // Chapter 5: Get Involved (Pages 24-29)
    <GetInvolved1 key="page-24" />,
    <GetInvolved2 key="page-25" />,
    <GetInvolved3 key="page-26" />,
    <GetInvolved4 key="page-27" />,
    <GetInvolved5 key="page-28" />,
    <GetInvolved6 key="page-29" />,

    // Chapter 6: Contact (Pages 30-31)
    <Contact1 key="page-30" />,
    <Contact2 key="page-31" />,
  ];

  return (
    <div className="min-h-screen bg-parchment py-8 relative">
      {/* Book page texture background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0 paper-texture" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Book Title */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-burgundy-700 mb-2 text-shadow-vintage">
            STEM•SPARK Interactive Book
          </h1>
          <p className="text-ink-light font-serif italic">
            Your journey through STEM education and empowerment
          </p>
        </div>

        {/* Main Book Reader */}
        <BookReader
          pages={bookPages}
          showControls={true}
          showProgress={true}
          className="mb-8"
        />

        {/* Book Navigation Controls */}
        <BookNavigation className="mb-8" />

        {/* Keyboard Shortcuts Info */}
        <div className="text-center text-sm text-ink-light font-serif">
          <p>
            Use arrow keys (← →) or click the navigation buttons to turn pages.
            Press Home to return to the beginning.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <TableOfContents chapters={chapters} />
      <TOCToggleButton />
    </div>
  );
}
