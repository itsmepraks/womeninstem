import { Heart, Sparkles, Star, BookOpen } from 'lucide-react';

export default function Contact2() {
  return (
    <div className="h-full bg-gradient-to-br from-rose-50 to-orange-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-rose-900/10 rounded-full mb-3">
            <span className="text-rose-900 font-serif text-sm">Chapter VI: Contact</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-rose-950 mb-2">Until We Meet Again</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-900 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center space-y-8 text-rose-950/90">
          <div className="bg-gradient-to-r from-rose-100 via-amber-100 to-orange-100 p-8 rounded-lg border-2 border-rose-200 shadow-lg">
            <div className="text-center mb-6">
              <Sparkles className="w-16 h-16 text-rose-900 mx-auto mb-4" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-rose-950 mb-3">
                Thank You for Reading
              </h2>
            </div>
            
            <div className="space-y-4 text-center">
              <p className="text-base leading-relaxed">
                You've reached the end of this book, but your journey in STEM is just beginning.
                Or perhaps it's already well underway. Either way, remember that every page turn, every challenge faced,
                and every small victory matters.
              </p>
              
              <div className="flex items-center justify-center gap-2 my-6">
                <Star className="w-5 h-5 text-amber-600" />
                <Star className="w-5 h-5 text-amber-600" />
                <Star className="w-5 h-5 text-amber-600" />
              </div>

              <p className="text-base leading-relaxed">
                We hope this book has inspired you, equipped you with resources, and reminded you that you belong in STEM.
                The stories of the trailblazers before you prove it's possible. The resources we've shared show the path forward.
                And most importantly, your passion and determination will carry you through.
              </p>

              <div className="my-6 p-4 bg-white/60 rounded-lg">
                <p className="font-serif text-lg italic text-rose-950">
                  "The best time to plant a tree was 20 years ago. The second best time is now."
                </p>
                <p className="text-sm text-rose-900/70 mt-2">— Chinese Proverb</p>
              </div>

              <p className="text-base leading-relaxed font-semibold">
                Your STEM journey starts now. Your impact is waiting to be made. Your story is waiting to be written.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/60 p-4 rounded-lg text-center">
              <Heart className="w-8 h-8 text-rose-600 mx-auto mb-2" />
              <p className="text-sm font-semibold">Stay Connected</p>
              <p className="text-xs text-rose-900/70 mt-1">Join our community</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg text-center">
              <BookOpen className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <p className="text-sm font-semibold">Keep Learning</p>
              <p className="text-xs text-rose-900/70 mt-1">Explore our resources</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg text-center">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-semibold">Make an Impact</p>
              <p className="text-xs text-rose-900/70 mt-1">Share your journey</p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-rose-900/10 to-amber-900/10 p-6 rounded-lg border border-rose-200">
            <p className="font-serif text-xl font-bold text-rose-950 mb-2">
              With gratitude and excitement for your future,
            </p>
            <p className="text-lg text-rose-900 font-semibold">
              The STEM•SPARK Team
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-rose-600" />
              <Sparkles className="w-5 h-5 text-amber-600" />
              <Star className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-rose-900/60 font-serif text-sm">— 31 —</span>
        </div>
      </div>
    </div>
  );
}