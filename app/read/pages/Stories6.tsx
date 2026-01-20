import { Heart, Star, Sparkles, Users } from 'lucide-react';

export default function Stories6() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-purple-900/10 rounded-full mb-3">
            <span className="text-purple-900 font-serif text-sm">Chapter IV: Stories</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-purple-950 mb-2">Your Story Awaits</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-900 to-pink-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-purple-950/90">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-purple-900" />
              <h3 className="font-serif font-semibold text-2xl text-center">The Next Chapter Is Yours</h3>
              <Star className="w-8 h-8 text-purple-900" />
            </div>
            <p className="text-base leading-relaxed text-center mb-4">
              These remarkable women blazed trails through determination, brilliance, and perseverance. They faced obstacles,
              broke barriers, and changed the world through their contributions to science, technology, engineering, and mathematics.
            </p>
            <p className="text-base leading-relaxed text-center">
              <strong>Now it's your turn.</strong>
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-6 h-6 text-rose-600" />
              <h3 className="font-serif font-semibold text-lg">Every Journey Begins with a Single Step</h3>
            </div>
            <p className="text-sm leading-relaxed">
              You don't need to be a prodigy or have everything figured out. Every woman featured here started as a student,
              a curious mind asking questions, someone who dared to imagine possibilities. They faced doubt, discrimination,
              and setbacks—but they persisted. Your journey in STEM is just as valid and just as important.
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <h3 className="font-serif font-semibold text-lg">The World Needs Your Unique Perspective</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Diversity in STEM leads to better innovation, more creative problem-solving, and technology that serves everyone.
              Your background, experiences, and viewpoint are not obstacles—they are assets. The problems you see, the questions
              you ask, and the solutions you envision are uniquely yours.
            </p>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-700" />
              <h3 className="font-serif font-semibold text-lg">You Are Not Alone</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Behind every successful woman in STEM is a community of supporters, mentors, and fellow travelers. STEM•SPARK exists
              to connect you with resources, inspiration, and a network of women on similar journeys. Reach out, ask for help,
              and remember: we rise by lifting others.
            </p>
          </div>

          <div className="mt-8 text-center bg-gradient-to-r from-purple-900/10 to-pink-900/10 p-6 rounded-lg border border-purple-200">
            <p className="font-serif text-lg italic text-purple-950">
              "The question isn't who's going to let me; it's who's going to stop me."
            </p>
            <p className="text-sm text-purple-900/70 mt-2">— Ayn Rand</p>
            <p className="text-base mt-4 font-semibold text-purple-950">
              Your story matters. Your voice matters. Your contributions will matter.
            </p>
            <p className="text-base mt-2 text-purple-900">
              The future of STEM is counting on you. ✨
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-purple-900/60 font-serif text-sm">— 23 —</span>
        </div>
      </div>
    </div>
  );
}