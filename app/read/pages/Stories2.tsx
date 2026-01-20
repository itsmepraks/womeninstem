import { Code, Cpu, Award, Zap } from 'lucide-react';

export default function Stories2() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-purple-900/10 rounded-full mb-3">
            <span className="text-purple-900 font-serif text-sm">Chapter IV: Stories</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-purple-950 mb-2">Computing Pioneers</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-900 to-pink-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-purple-950/90">
          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Code className="w-6 h-6 text-purple-900" />
              <h3 className="font-serif font-semibold text-xl">Ada Lovelace</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">World's First Computer Programmer</p>
            <p className="text-sm leading-relaxed">
              In the 1840s, Ada Lovelace wrote the first algorithm intended to be processed by Charles Babbage's Analytical Engine,
              making her the first computer programmer—a century before computers as we know them existed. She envisioned that computers
              could go beyond mere calculation to create music and art. Her notes on the Analytical Engine are considered the first
              published algorithm, and she is celebrated as a visionary who understood the potential of computing machines.
            </p>
            <div className="mt-3 text-xs italic text-purple-900/70">
              "The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves."
            </div>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="w-6 h-6 text-blue-700" />
              <h3 className="font-serif font-semibold text-xl">Grace Hopper</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">Computer Science Pioneer & U.S. Navy Rear Admiral</p>
            <p className="text-sm leading-relaxed">
              Rear Admiral Grace Hopper revolutionized computer programming by developing the first compiler and contributing to the
              development of COBOL, one of the first high-level programming languages. Her innovations made programming more accessible
              and practical for business applications. She also popularized the term "debugging" after removing a moth from a computer.
              The Grace Hopper Celebration of Women in Computing honors her legacy.
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-purple-900/60 font-serif text-sm">— 19 —</span>
        </div>
      </div>
    </div>
  );
}