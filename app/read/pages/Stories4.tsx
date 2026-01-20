import { Trophy, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function Stories4() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-purple-900/10 rounded-full mb-3">
            <span className="text-purple-900 font-serif text-sm">Chapter IV: Stories</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-purple-950 mb-2">Modern Innovators</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-900 to-pink-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-purple-950/90">
          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="w-6 h-6 text-purple-900" />
              <h3 className="font-serif font-semibold text-xl">Dr. Fei-Fei Li</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">AI Pioneer & Co-Director of Stanford HAI</p>
            <p className="text-sm leading-relaxed">
              Dr. Fei-Fei Li is a leading computer scientist whose work in computer vision and AI has been transformative. She created ImageNet,
              a massive visual database that became the catalyst for the deep learning revolution. As Co-Director of Stanford's Human-Centered AI Institute,
              she advocates for AI that augments human capabilities and addresses societal challenges. She champions diversity in AI and works to ensure
              technology serves humanity equitably.
            </p>
            <div className="mt-3 text-xs italic text-purple-900/70">
              "If we want machines to be intelligent, we need to teach them to see."
            </div>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-6 h-6 text-amber-600" />
              <h3 className="font-serif font-semibold text-xl">Dr. Megan Smith</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">Former U.S. Chief Technology Officer</p>
            <p className="text-sm leading-relaxed">
              As the third U.S. Chief Technology Officer under President Obama, Dr. Megan Smith worked on tech policy, innovation, and inclusion.
              Previously a vice president at Google, she led groundbreaking projects and championed diversity in technology. She continues to advocate
              for ensuring technology serves everyone and actively works to increase representation of women and underrepresented groups in STEM.
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-purple-900/60 font-serif text-sm">— 21 —</span>
        </div>
      </div>
    </div>
  );
}