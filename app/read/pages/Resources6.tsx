import { BookOpen, Sparkles, Lightbulb, GraduationCap } from 'lucide-react';

export default function Resources6() {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-rose-900/10 rounded-full mb-3">
            <span className="text-rose-900 font-serif text-sm">Chapter III: Resources</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-rose-950 mb-2">Recommended Reading</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-900 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-rose-950/90">
          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <BookOpen className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Inspirational Biographies</h3>
              <p className="text-sm leading-relaxed mb-2">
                Learn from the journeys of pioneering women in STEM:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <em>Hidden Figures</em> by Margot Lee Shetterly</li>
                <li>• <em>Lab Girl</em> by Hope Jahren</li>
                <li>• <em>The Immortal Life of Henrietta Lacks</em> by Rebecca Skloot</li>
                <li>• <em>Rise of the Rocket Girls</em> by Nathalia Holt</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Sparkles className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Technical Excellence</h3>
              <p className="text-sm leading-relaxed mb-2">
                Build your technical foundation:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <em>Cracking the Coding Interview</em> by Gayle Laakmann McDowell</li>
                <li>• <em>The Pragmatic Programmer</em> by Hunt & Thomas</li>
                <li>• <em>Introduction to Algorithms</em> by Cormen et al.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <Lightbulb className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Career & Leadership</h3>
              <p className="text-sm leading-relaxed mb-2">
                Navigate your professional journey:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <em>Lean In</em> by Sheryl Sandberg</li>
                <li>• <em>Brotopia</em> by Emily Chang</li>
                <li>• <em>The Confidence Code</em> by Katty Kay & Claire Shipman</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg">
            <GraduationCap className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Science Communication</h3>
              <p className="text-sm leading-relaxed mb-2">
                Learn to share your passion:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <em>The Demon-Haunted World</em> by Carl Sagan</li>
                <li>• <em>A Brief History of Time</em> by Stephen Hawking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-rose-900/60 font-serif text-sm">— 15 —</span>
        </div>
      </div>
    </div>
  );
}