import { Microscope, Dna, Award, Heart } from 'lucide-react';

export default function Stories3() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12">
      <div className="h-full flex flex-col">
        {/* Chapter Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-purple-900/10 rounded-full mb-3">
            <span className="text-purple-900 font-serif text-sm">Chapter IV: Stories</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-purple-950 mb-2">Scientific Discovery</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-900 to-pink-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 text-purple-950/90">
          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Microscope className="w-6 h-6 text-purple-900" />
              <h3 className="font-serif font-semibold text-xl">Marie Curie</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">Two-Time Nobel Prize Winner in Physics and Chemistry</p>
            <p className="text-sm leading-relaxed">
              Marie Curie's groundbreaking research on radioactivity (a term she coined) led to her becoming the first woman to win
              a Nobel Prize and the only person to win Nobel Prizes in two different scientific fields. Her discovery of radium and polonium
              opened new avenues in medicine and physics. Despite facing discrimination as a woman in science, she persisted, eventually
              becoming the first female professor at the University of Paris. Her legacy inspires millions of women scientists today.
            </p>
            <div className="mt-3 text-xs italic text-purple-900/70">
              "Nothing in life is to be feared, it is only to be understood."
            </div>
          </div>

          <div className="bg-white/60 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Dna className="w-6 h-6 text-pink-700" />
              <h3 className="font-serif font-semibold text-xl">Rosalind Franklin</h3>
            </div>
            <p className="text-sm leading-relaxed italic mb-2">Key Contributor to DNA Structure Discovery</p>
            <p className="text-sm leading-relaxed">
              Rosalind Franklin's X-ray crystallography work produced "Photo 51," the crucial image that revealed DNA's double helix structure.
              Her precise experimental work and analytical skills were fundamental to understanding the molecular basis of life, though her
              contributions were not fully recognized during her lifetime. Today, she is celebrated as a brilliant scientist whose work
              was essential to one of the greatest discoveries in biology.
            </p>
          </div>
        </div>

        {/* Page Number */}
        <div className="mt-6 text-center">
          <span className="text-purple-900/60 font-serif text-sm">— 20 —</span>
        </div>
      </div>
    </div>
  );
}