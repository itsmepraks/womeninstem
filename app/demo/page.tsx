import BookReader from '@/components/book/BookReader';
import {
  ChapterHeader,
  BookQuote
} from '@/components/ui/BookPage';

export default function DemoPage() {
  const bookPages = [
    // Cover Page
    <div key="cover" className="flex flex-col items-center justify-center min-h-[600px] text-center space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-ink">
          STEM•SPARK
        </h1>
        <p className="text-2xl text-ink-light font-serif italic">
          Interactive Book Experience
        </p>
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg text-ink-light font-serif">
          Experience our page-flipping technology
        </p>
        <p className="text-sm text-ink-light/70">
          Use arrow keys or click the buttons to navigate
        </p>
      </div>
    </div>,

    // Introduction
    <div key="intro" className="space-y-6">
      <ChapterHeader
        number={1}
        title="Introduction"
        subtitle="Welcome to the Book Experience"
      />
      <p className="body-text">
        This is a demonstration of our interactive book reader with page-flipping animations.
        The BookReader component provides a rich, immersive reading experience with smooth
        page transitions and sound effects.
      </p>
      <BookQuote
        quote="The best way to predict the future is to create it."
        author="Peter Drucker"
      />
      <p className="body-text">
        In this demo, you can navigate between pages using the arrow buttons, keyboard
        shortcuts, or by clicking on the page edges. Each page transition includes
        customizable animations and sound effects.
      </p>
    </div>,

    // Features
    <div key="features" className="space-y-6">
      <ChapterHeader
        number={2}
        title="Features"
        subtitle="What's Included"
      />
      <div className="space-y-4">
        <div className="border-l-4 border-gold-500 pl-6 py-4">
          <h3 className="font-serif text-xl font-semibold text-ink mb-2">
            Smooth Page Flipping
          </h3>
          <p className="text-ink-light">
            Realistic 3D page flip animations with customizable timing and easing.
          </p>
        </div>

        <div className="border-l-4 border-sepia-500 pl-6 py-4">
          <h3 className="font-serif text-xl font-semibold text-ink mb-2">
            Sound Effects
          </h3>
          <p className="text-ink-light">
            Audio feedback for page turns and other interactions.
          </p>
        </div>

        <div className="border-l-4 border-burgundy-500 pl-6 py-4">
          <h3 className="font-serif text-xl font-semibold text-ink mb-2">
            Keyboard Navigation
          </h3>
          <p className="text-ink-light">
            Full keyboard support with arrow keys, page up/down, and home/end keys.
          </p>
        </div>

        <div className="border-l-4 border-forest-500 pl-6 py-4">
          <h3 className="font-serif text-xl font-semibold text-ink mb-2">
            Progress Tracking
          </h3>
          <p className="text-ink-light">
            Visual progress bar and page indicators.
          </p>
        </div>
      </div>
    </div>,

    // Technology
    <div key="tech" className="space-y-6">
      <ChapterHeader
        number={3}
        title="Technology"
        subtitle="Built with Modern Tools"
      />
      <p className="body-text">
        This book reader is built using cutting-edge web technologies including:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="font-serif text-lg font-semibold text-ink">Frontend</h3>
          <ul className="space-y-2 text-ink-light">
            <li>• Next.js 14 with App Router</li>
            <li>• React with TypeScript</li>
            <li>• Tailwind CSS for styling</li>
            <li>• Framer Motion for animations</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-semibold text-ink">State Management</h3>
          <ul className="space-y-2 text-ink-light">
            <li>• Zustand for global state</li>
            <li>• Custom hooks for page navigation</li>
            <li>• Local storage persistence</li>
            <li>• Sound manager integration</li>
          </ul>
        </div>
      </div>

      <BookQuote
        quote="Code is poetry written in logic."
        author="Unknown"
      />
    </div>,

    // About
    <div key="about" className="space-y-6">
      <ChapterHeader
        number={4}
        title="About"
        subtitle="The Story Behind STEM•SPARK"
      />
      <p className="body-text">
        STEM•SPARK was created with a vision to make learning more engaging and interactive.
        By combining the nostalgia of physical books with modern web technologies, we aim to
        create immersive learning experiences.
      </p>

      <div className="bg-sepia-50 p-6 rounded-lg border border-sepia-200">
        <h3 className="font-serif text-lg font-semibold text-ink mb-3">
          🎯 Our Mission
        </h3>
        <p className="text-ink-light">
          To revolutionize online learning by creating interactive, book-like experiences
          that engage users and improve knowledge retention.
        </p>
      </div>

      <p className="body-text">
        This demo showcases the core functionality of our book reader. In a full
        implementation, each page would contain rich educational content, interactive
        elements, and multimedia components.
      </p>
    </div>,

    // End Page
    <div key="end" className="flex flex-col items-center justify-center min-h-[600px] text-center space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink">
          The End
        </h1>
        <p className="text-xl text-ink-light font-serif italic">
          Thank you for exploring our book experience!
        </p>
      </div>

      <div className="text-center space-y-2 max-w-md">
        <p className="text-lg text-ink-light font-serif">
          You&apos;ve reached the end of this demo.
        </p>
        <p className="text-sm text-ink-light/70">
          The page-flipping technology is fully functional and ready for your content.
        </p>
      </div>

      <div className="mt-8 p-4 bg-sepia-50 rounded-lg border border-sepia-200">
        <p className="text-sm text-ink-light">
          🚀 Ready to implement this in your application?
        </p>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen py-8 bg-parchment">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
            Book Reader Demo
          </h1>
          <p className="text-ink-light">
            Experience our interactive page-flipping technology
          </p>
        </div>

        <BookReader
          pages={bookPages}
          showControls={true}
          showProgress={true}
          className="shadow-2xl"
        />
      </div>
    </div>
  );
}